import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// AI grade suggestions for assignment submissions. Teacher-triggered, cached,
// advisory only — the teacher always makes the final call. Uses a vision-capable
// model (Gemini Flash by default) so it can read BOTH typed answers and photos
// of handwritten work.
//
// Load note: the heavy inference runs on the model provider, not here; this
// route just relays one short request per teacher click and caches the result,
// so it adds negligible serverless load.
export const runtime = "nodejs";

const getAdmin = () =>
  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { persistSession: false } });

const userClient = (token: string) =>
  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

// Gemini's NATIVE endpoint (not the OpenAI-compatible one) so it can read PDFs
// as well as images — students often submit CamScanner-style PDF scans. Model is
// env-configurable.
const geminiUrl = (model: string) => `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

// What Gemini can read inline. Keep well under the ~20 MB request cap after
// base64 (which inflates ~33%); our upload caps already bound this.
const MAX_INLINE_BYTES = 14_000_000;
function mimeFor(name: string, blobType?: string): string | null {
  if (blobType && (blobType.startsWith("image/") || blobType === "application/pdf")) return blobType;
  const ext = (name.match(/\.([a-z0-9]+)$/i)?.[1] || "").toLowerCase();
  if (ext === "pdf") return "application/pdf";
  if (["jpg", "jpeg"].includes(ext)) return "image/jpeg";
  if (["png", "webp", "gif", "heic", "heif"].includes(ext)) return `image/${ext === "jpg" ? "jpeg" : ext}`;
  return null; // unreadable type
}

/** Pull the storage path (after the bucket) out of a stored submissions URL. */
function submissionPath(fileUrl: string): string | null {
  const m = fileUrl.match(/\/storage\/v1\/object\/(?:public|sign)\/submissions\/(.+?)(?:\?|$)/);
  return m ? decodeURIComponent(m[1]) : null;
}

/** Robustly pull a JSON object out of a model reply (may be fenced or chatty). */
function parseJson(text: string): any | null {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const body = fenced ? fenced[1] : text;
  const start = body.indexOf("{");
  const end = body.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try { return JSON.parse(body.slice(start, end + 1)); } catch { return null; }
}

export async function POST(req: NextRequest) {
  try {
    const authz = req.headers.get("authorization") ?? "";
    const token = authz.startsWith("Bearer ") ? authz.slice(7) : "";
    if (!token) return NextResponse.json({ error: "Sign in again." }, { status: 401 });

    const body = await req.json().catch(() => ({} as any));
    const submissionId = String(body?.submissionId ?? "");
    const outOf = Math.max(1, Math.min(1000, Number(body?.outOf) || 10));
    const force = !!body?.force;
    if (!submissionId) return NextResponse.json({ error: "Missing submission." }, { status: 400 });

    // Authorise + fetch by reading the submission through the CALLER's session:
    // the submissions RLS already encodes "who may see this submission" (admin,
    // course teacher, class teacher). If they can read it, they may grade it.
    const uc = userClient(token);
    let subRes = await uc.from("submissions").select("id, content, file_url, file_name, files, assignment_id, student_id").eq("id", submissionId).maybeSingle();
    if (subRes.error) subRes = await uc.from("submissions").select("id, content, file_url, file_name, assignment_id, student_id").eq("id", submissionId).maybeSingle();
    const sub: any = subRes.data;
    if (subRes.error || !sub) return NextResponse.json({ error: "You don't have access to this submission." }, { status: 403 });

    const admin = getAdmin();

    // Cached result — unless the teacher forces a refresh or changes the scale.
    if (!force) {
      const { data: cached } = await admin.from("submission_ai_grades").select("*").eq("submission_id", submissionId).maybeSingle();
      if (cached && Number(cached.max_points) === outOf) {
        return NextResponse.json({ mark: Number(cached.mark), outOf, feedback: cached.feedback, usedImage: cached.used_image, cached: true });
      }
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "AI grading isn't configured yet. Add GEMINI_API_KEY on the server." }, { status: 503 });
    const model = process.env.GEMINI_MODEL || "gemini-2.5-flash";

    const { data: asg } = await admin.from("assignments").select("title, description").eq("id", sub.assignment_id).maybeSingle();

    const typed = (sub.content ?? "").trim();

    // All attachments: the `files` array, or the legacy single file.
    const atts: { url: string; name?: string | null }[] =
      Array.isArray(sub.files) && sub.files.length ? sub.files : sub.file_url ? [{ url: sub.file_url, name: sub.file_name }] : [];

    // Download every readable attachment (images AND PDFs, cap at 5) so the AI
    // can read multi-page handwritten work and scanned CamScanner-style PDFs.
    const inlineParts: any[] = [];
    let inlineBytes = 0;
    let skippedType = 0;
    let skippedSize = 0;
    for (const a of atts.slice(0, 5)) {
      const mime = mimeFor(a.name || a.url, undefined);
      if (!mime) { skippedType++; continue; }
      const path = submissionPath(a.url);
      if (!path) continue;
      const { data: blob, error: dlErr } = await admin.storage.from("submissions").download(path);
      if (dlErr || !blob) continue;
      const buf = Buffer.from(await blob.arrayBuffer());
      if (inlineBytes + buf.length > MAX_INLINE_BYTES) { skippedSize++; continue; }
      inlineBytes += buf.length;
      const realMime = mimeFor(a.name || a.url, blob.type) || mime;
      inlineParts.push({ inlineData: { mimeType: realMime, data: buf.toString("base64") } });
    }
    const notes: string[] = [];
    if (skippedType > 0) notes.push(`${skippedType} attached file(s) are an unsupported type and weren't read.`);
    if (skippedSize > 0) notes.push(`${skippedSize} attached file(s) were too large to read.`);
    const fileNote = notes.length ? notes.join(" ") : undefined;

    if (!typed && inlineParts.length === 0) {
      return NextResponse.json({ error: "Nothing for the AI to read — this submission has no typed answer and no readable attachment." }, { status: 422 });
    }

    const system =
      `You are a fair, experienced Ontario secondary-school math teacher. You are ADVISING a human teacher who makes the final grading decision — you only suggest. ` +
      `Grade the student's submission out of ${outOf}. Read any attached images or PDF scans of handwritten work carefully, including the mathematics. ` +
      `Be encouraging but honest; reward correct reasoning and note errors or missing steps. ` +
      `Respond with ONLY a JSON object: {"mark": <number 0..${outOf}>, "feedback": "<2-4 sentences: what is correct, what is missing or wrong, and why this mark. Address the student.>"}.`;

    const parts: any[] = [
      { text: `Assignment: ${asg?.title ?? "(untitled)"}\n\n${asg?.description ?? ""}\n\nStudent's typed answer:\n${typed || "(none — see the attached file(s))"}` },
      ...inlineParts,
    ];

    const reqBody = JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: [{ role: "user", parts }],
      generationConfig: { temperature: 0.2, maxOutputTokens: 700, responseMimeType: "application/json" },
    });

    // Try the configured model, then fall back through known Flash models if it
    // reports "model not found" (404) — so a stale/unavailable model name doesn't
    // break grading. Any other error (bad key, API not enabled, rate limit) stops
    // and is surfaced.
    const candidates = [model, "gemini-2.5-flash", "gemini-2.0-flash", "gemini-flash-latest", "gemini-1.5-flash"].filter((m, i, a) => a.indexOf(m) === i);
    let aiRes: Response | null = null;
    let usedModel = model;
    let lastStatus = 0;
    let lastErr = "";
    for (const m of candidates) {
      const r = await fetch(`${geminiUrl(m)}?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: reqBody,
      });
      if (r.ok) { aiRes = r; usedModel = m; break; }
      lastStatus = r.status;
      lastErr = await r.text().catch(() => "");
      console.error("grade-suggest model error", m, r.status, lastErr);
      if (r.status !== 404) break; // only a missing model is worth trying the next one
    }
    if (!aiRes) {
      let why = lastErr.slice(0, 400);
      try { why = JSON.parse(lastErr)?.error?.message ?? why; } catch {}
      return NextResponse.json(
        { error: lastStatus === 429 ? "AI grading hit its rate limit — try again in a minute." : `AI grader error ${lastStatus}: ${why}` },
        { status: 502 },
      );
    }
    const model_ = usedModel; // the model that actually answered (for the cache row)

    const data = await aiRes.json();
    const content = data?.candidates?.[0]?.content?.parts?.map((p: any) => p.text).filter(Boolean).join("") ?? "";
    const parsed = parseJson(content);
    if (!parsed || typeof parsed.mark === "undefined") {
      return NextResponse.json({ error: "The AI reply couldn't be read. Try again." }, { status: 502 });
    }

    const mark = Math.max(0, Math.min(outOf, Number(parsed.mark)));
    const feedback = [String(parsed.feedback ?? "").trim(), fileNote].filter(Boolean).join("\n\n");

    // Cache (staff-only table; never exposed to the student).
    await admin.from("submission_ai_grades").upsert(
      { submission_id: submissionId, mark, max_points: outOf, feedback, used_image: inlineParts.length > 0, model: model_, created_at: new Date().toISOString() },
      { onConflict: "submission_id" },
    );

    return NextResponse.json({ mark, outOf, feedback, usedImage: inlineParts.length > 0 });
  } catch (e: any) {
    console.error("grade-suggest", e);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}

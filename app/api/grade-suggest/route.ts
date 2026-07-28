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

    // Cached result — a stored per-question breakdown means we can skip the model.
    if (!force) {
      const { data: cached } = await admin.from("submission_ai_grades").select("*").eq("submission_id", submissionId).maybeSingle();
      if (cached && Array.isArray(cached.breakdown)) {
        return NextResponse.json({ total: Number(cached.mark), max: Number(cached.max_points), feedback: cached.feedback, breakdown: cached.breakdown, usedImage: cached.used_image, cached: true });
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
      `The QUESTIONS are in the "Assignment" section below. The student's WORK is in the attached image(s)/PDF(s) and/or the typed answer — a scan may show only their answers and working WITHOUT restating the questions, so match each piece of their work to the corresponding assignment question. ` +
      `Identify EVERY question in the assignment, in order. Grade EACH question out of 10. ` +
      `Grade GENEROUSLY and give the student the benefit of the doubt — the goal is to encourage. Award full or near-full marks (8-10) when the core answer is correct, even if the explanation is brief, informal, or a step is left implicit. Give solid partial credit (5-7) when the main idea is right but something is incomplete. Only give low marks (0-2) when a question is skipped or the answer is fundamentally wrong. When unsure between two marks, choose the higher one. Do not deduct heavily for missing wording, minor omissions, or not "showing all work" if the answer itself is right. ` +
      `Read handwriting and scans carefully, including the mathematics. If a question is truly unanswered, give it 0 and gently note it was skipped. ` +
      `Be warm and encouraging in every comment. Respond with ONLY a JSON object of this exact shape: ` +
      `{"questions":[{"label":"<short question label e.g. Q1>","mark":<0-10>,"comment":"<one short sentence on this question>"}, ...],"feedback":"<2-3 sentence overall summary addressed to the student>"}. ` +
      `Include one entry per assignment question, in order.`;

    const parts: any[] = [
      { text: `Assignment (the questions):\n${asg?.title ?? "(untitled)"}\n${asg?.description ?? "(no description provided)"}\n\nStudent's typed answer:\n${typed || "(none — see the attached file(s) for their work)"}` },
      ...inlineParts,
    ];

    const reqBody = JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: [{ role: "user", parts }],
      // 2.5-flash is a thinking model — it spends output tokens reasoning before
      // the answer, so leave generous headroom (a per-question breakdown is long)
      // or the JSON gets truncated.
      generationConfig: { temperature: 0.2, maxOutputTokens: 4096, responseMimeType: "application/json" },
    });

    // Try the configured model, then fall back through known Flash models. Falls
    // through on 404 (model not found / not available) AND 429 (that model's
    // free-tier quota is exhausted) — free-tier quotas are PER-MODEL, so another
    // model may still have room. A first-call 429 usually means the daily quota
    // for that model is spent, not a real burst limit. Other errors (bad key,
    // API not enabled) stop and are surfaced.
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
      if (r.status !== 404 && r.status !== 429) break; // stop on real errors (key/API); try next model on missing/quota
    }
    if (!aiRes) {
      let why = lastErr.slice(0, 400);
      try { why = JSON.parse(lastErr)?.error?.message ?? why; } catch {}
      return NextResponse.json(
        {
          error: lastStatus === 429
            ? "All the free AI models are out of quota for today. This resets daily — or enable billing on your Google AI Studio project to lift the limit."
            : `AI grader error ${lastStatus}: ${why}`,
        },
        { status: 502 },
      );
    }
    const model_ = usedModel; // the model that actually answered (for the cache row)

    const data = await aiRes.json();
    const cand = data?.candidates?.[0];
    const content = cand?.content?.parts?.map((p: any) => p.text).filter(Boolean).join("") ?? "";
    const parsed = parseJson(content);
    const rawQs = Array.isArray(parsed?.questions) ? parsed.questions : null;
    if (!parsed || !rawQs || !rawQs.length) {
      const finish = cand?.finishReason ?? "?";
      console.error("grade-suggest parse fail", usedModel, finish, content.slice(0, 300));
      return NextResponse.json(
        {
          error: finish === "MAX_TOKENS"
            ? "The AI ran out of room before finishing — try again."
            : finish === "SAFETY" || finish === "PROHIBITED_CONTENT"
              ? "The AI declined to grade this submission."
              : `The AI reply couldn't be read (model ${usedModel}, finish ${finish}).${content ? ` Got: ${content.slice(0, 120)}` : " Empty response."}`,
        },
        { status: 502 },
      );
    }

    // Each question is graded out of 10; the total is the sum, out of 10 × count.
    const breakdown = rawQs.slice(0, 50).map((q: any, i: number) => ({
      label: String(q?.label ?? `Q${i + 1}`).slice(0, 40),
      mark: Math.max(0, Math.min(10, Math.round(Number(q?.mark) || 0))),
      comment: String(q?.comment ?? "").slice(0, 300),
    }));
    const total = breakdown.reduce((s: number, q: any) => s + q.mark, 0);
    const max = breakdown.length * 10;
    const feedback = [String(parsed.feedback ?? "").trim(), fileNote].filter(Boolean).join("\n\n");

    // Cache (staff-only table; never exposed to the student).
    await admin.from("submission_ai_grades").upsert(
      { submission_id: submissionId, mark: total, max_points: max, feedback, breakdown, used_image: inlineParts.length > 0, model: model_, created_at: new Date().toISOString() },
      { onConflict: "submission_id" },
    );

    return NextResponse.json({ total, max, feedback, breakdown, usedImage: inlineParts.length > 0 });
  } catch (e: any) {
    console.error("grade-suggest", e);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}

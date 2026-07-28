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

// Gemini exposes an OpenAI-compatible endpoint, so this mirrors the tutor's
// DeepSeek call. Both key and model are env-configurable.
const GEMINI_URL = "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions";
const IMAGE_EXT = /\.(jpe?g|png|webp|gif|heic|heif)$/i;

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

    // Download every image attachment (cap at 5) so the AI can read multi-page
    // handwritten work. Non-image files (PDFs) are noted but not read.
    const imageDataUrls: string[] = [];
    let skippedNonImage = 0;
    for (const a of atts.slice(0, 5)) {
      if (!IMAGE_EXT.test(a.name || a.url)) { skippedNonImage++; continue; }
      const path = submissionPath(a.url);
      if (!path) continue;
      const { data: blob, error: dlErr } = await admin.storage.from("submissions").download(path);
      if (dlErr || !blob) continue;
      const buf = Buffer.from(await blob.arrayBuffer());
      const mime = blob.type && blob.type.startsWith("image/") ? blob.type : "image/jpeg";
      imageDataUrls.push(`data:${mime};base64,${buf.toString("base64")}`);
    }
    const fileNote = skippedNonImage > 0
      ? `${skippedNonImage} attached file(s) aren't images (e.g. PDFs), so the AI couldn't read them — it graded the typed answer${imageDataUrls.length ? " and photos" : ""} only.`
      : undefined;

    if (!typed && imageDataUrls.length === 0) {
      return NextResponse.json({ error: "Nothing for the AI to read — this submission has no typed answer and no readable image." }, { status: 422 });
    }

    const system =
      `You are a fair, experienced Ontario secondary-school math teacher. You are ADVISING a human teacher who makes the final grading decision — you only suggest. ` +
      `Grade the student's submission out of ${outOf}. Read any attached image of handwritten work carefully, including the mathematics. ` +
      `Be encouraging but honest; reward correct reasoning and note errors or missing steps. ` +
      `Respond with ONLY a JSON object: {"mark": <number 0..${outOf}>, "feedback": "<2-4 sentences: what is correct, what is missing or wrong, and why this mark. Address the student.>"}.`;

    const userContent: any[] = [
      { type: "text", text: `Assignment: ${asg?.title ?? "(untitled)"}\n\n${asg?.description ?? ""}\n\nStudent's typed answer:\n${typed || "(none — see the attached image(s))"}` },
    ];
    for (const url of imageDataUrls) userContent.push({ type: "image_url", image_url: { url } });

    const aiRes = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: system }, { role: "user", content: userContent }],
        temperature: 0.2,
        max_tokens: 700,
      }),
    });
    if (!aiRes.ok) {
      const errText = await aiRes.text().catch(() => "");
      console.error("grade-suggest model error", aiRes.status, errText);
      return NextResponse.json(
        { error: aiRes.status === 429 ? "AI grading hit its rate limit — try again in a minute." : "The AI grader is temporarily unavailable." },
        { status: 502 },
      );
    }

    const data = await aiRes.json();
    const content = data?.choices?.[0]?.message?.content ?? "";
    const parsed = parseJson(typeof content === "string" ? content : JSON.stringify(content));
    if (!parsed || typeof parsed.mark === "undefined") {
      return NextResponse.json({ error: "The AI reply couldn't be read. Try again." }, { status: 502 });
    }

    const mark = Math.max(0, Math.min(outOf, Number(parsed.mark)));
    const feedback = [String(parsed.feedback ?? "").trim(), fileNote].filter(Boolean).join("\n\n");

    // Cache (staff-only table; never exposed to the student).
    await admin.from("submission_ai_grades").upsert(
      { submission_id: submissionId, mark, max_points: outOf, feedback, used_image: imageDataUrls.length > 0, model, created_at: new Date().toISOString() },
      { onConflict: "submission_id" },
    );

    return NextResponse.json({ mark, outOf, feedback, usedImage: imageDataUrls.length > 0 });
  } catch (e: any) {
    console.error("grade-suggest", e);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}

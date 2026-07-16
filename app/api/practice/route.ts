import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { gradeAttempt, shuffle, type Question } from "../../../lib/quiz";

// Self-serve practice quizzes generated from the question bank.
//
// The bank is staff-only (RLS), and it's the same pool teachers build class
// quizzes from — so questions are served WITHOUT answers and graded on the
// server. Answers are only revealed in the grade response, after the student
// has committed to their attempt.
export const runtime = "nodejs";

const MAX_COUNT = 25;

const makeAdmin = () =>
  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { persistSession: false } });
let _admin: ReturnType<typeof makeAdmin> | null = null;
const getAdmin = () => (_admin ??= makeAdmin());

const userClient = (token: string) =>
  createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    global: { headers: { Authorization: `Bearer ${token}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });

/** Signed in + has access to this course (RLS on lessons gates by course_access). */
async function gate(req: NextRequest, courseId: string) {
  const authz = req.headers.get("authorization") ?? "";
  const token = authz.startsWith("Bearer ") ? authz.slice(7) : "";
  if (!token) return { ok: false as const, res: NextResponse.json({ error: "Sign in to practise." }, { status: 401 }) };
  const admin = getAdmin();
  const { data: u, error } = await admin.auth.getUser(token);
  if (error || !u?.user) return { ok: false as const, res: NextResponse.json({ error: "Session expired — sign in again." }, { status: 401 }) };
  if (!courseId) return { ok: false as const, res: NextResponse.json({ error: "Pick a course." }, { status: 400 }) };
  const { data: lesson } = await userClient(token).from("lessons").select("id").eq("course_id", courseId).limit(1).maybeSingle();
  if (!lesson) return { ok: false as const, res: NextResponse.json({ error: "You don't have access to this course yet." }, { status: 403 }) };
  return { ok: true as const };
}

/** Strip everything that would give the answer away. */
const publicQ = (r: any, i: number) => ({
  id: r.id, kind: r.kind, prompt: r.prompt, image_url: r.image_url ?? null,
  choices: r.choices ?? null, points: Number(r.points) || 1, position: i, topic: r.topic ?? null,
});

// Supabase caps a single request at 1000 rows, and the banks are bigger than
// that (up to 2400/course) — page through or later topics never get sampled.
async function allBank(select: string, courseId: string, topic?: string) {
  const admin = getAdmin();
  const PAGE = 1000;
  const out: any[] = [];
  for (let from = 0; from < 10000; from += PAGE) {
    let q = admin.from("bank_questions").select(select).eq("course_id", courseId).range(from, from + PAGE - 1);
    if (topic) q = q.eq("topic", topic);
    const { data, error } = await q;
    if (error) throw new Error(error.message);
    out.push(...(data ?? []));
    if (!data || data.length < PAGE) break;
  }
  return out;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({} as any));
    const action = String(body?.action ?? "");
    const courseId = String(body?.courseId ?? "");
    const g = await gate(req, courseId);
    if (!g.ok) return g.res;
    const admin = getAdmin();

    // Topics + question count, for the picker.
    if (action === "meta") {
      const rows = await allBank("topic", courseId);
      const topics = [...new Set(rows.map((r: any) => r.topic).filter(Boolean))].sort();
      return NextResponse.json({ topics, total: rows.length });
    }

    // Build an attempt: sample N ids, then fetch those rows (answers stripped).
    if (action === "start") {
      const count = Math.min(MAX_COUNT, Math.max(1, Number(body?.count) || 10));
      const topic = body?.topic ? String(body.topic) : "";
      const ids = await allBank("id", courseId, topic || undefined);
      const picked = shuffle(ids.map((r: any) => r.id)).slice(0, count);
      if (!picked.length) return NextResponse.json({ error: "No questions available for that selection." }, { status: 404 });
      const { data: rows, error } = await admin
        .from("bank_questions")
        .select("id, kind, prompt, image_url, choices, points, topic")
        .in("id", picked);
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      // keep the sampled order
      const byId = new Map((rows ?? []).map((r: any) => [r.id, r]));
      const questions = picked.map((id, i) => byId.get(id)).filter(Boolean).map(publicQ);
      return NextResponse.json({ questions });
    }

    // Grade server-side, then reveal the answers/feedback.
    if (action === "grade") {
      const answers = (body?.answers ?? {}) as Record<string, any>;
      const ids = Object.keys(answers);
      if (!ids.length) return NextResponse.json({ error: "Nothing to grade." }, { status: 400 });
      const { data: rows, error } = await admin
        .from("bank_questions")
        .select("id, kind, prompt, image_url, choices, answer, tolerance, points, feedback, topic")
        .eq("course_id", courseId)
        .in("id", ids);
      if (error) return NextResponse.json({ error: error.message }, { status: 500 });
      const questions: Question[] = (rows ?? []).map((r: any, i: number) => ({
        id: r.id, kind: r.kind, prompt: r.prompt, image_url: r.image_url, choices: r.choices,
        answer: r.answer, tolerance: r.tolerance, points: Number(r.points) || 1, feedback: r.feedback, position: i,
      }));
      const result = gradeAttempt(questions, answers);
      return NextResponse.json({ result, questions });
    }

    return NextResponse.json({ error: `Unknown action: ${action}` }, { status: 400 });
  } catch (e: any) {
    console.error("practice", e);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}

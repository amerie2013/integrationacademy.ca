"use client";

// Self-serve practice quiz for students: pick a course (and optionally a topic),
// get questions drawn from the bank, answer them, and get instant marks with the
// correct answers. Questions come from /api/practice without answers; grading
// happens server-side, so the bank stays private.
import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { SiteHeader } from "../../components/SiteHeader";
import { QuestionView, CorrectAnswer, PromptText } from "../../components/QuestionView";
import type { Question, GradeResult } from "../../lib/quiz";

type Course = { id: string; code: string | null; title: string };

export default function PracticePageWrapper() {
  return (
    <Suspense fallback={<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>}>
      <PracticePage />
    </Suspense>
  );
}

function PracticePage() {
  const params = useSearchParams();
  const [signedIn, setSignedIn] = useState<boolean | null>(null);
  const [token, setToken] = useState("");
  const [courses, setCourses] = useState<Course[]>([]);
  const [courseId, setCourseId] = useState(params.get("course") ?? "");
  const [topics, setTopics] = useState<string[]>([]);
  const [topic, setTopic] = useState("");
  const [count, setCount] = useState(10);
  const [questions, setQuestions] = useState<any[] | null>(null);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [result, setResult] = useState<GradeResult | null>(null);
  const [graded, setGraded] = useState<Question[]>([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSignedIn(!!session);
      if (!session) return;
      setToken(session.access_token);
      const { data } = await supabase.from("courses").select("id, code, title").eq("published", true).order("code");
      setCourses((data ?? []) as Course[]);
    })();
  }, []);

  const api = useCallback(async (payload: any) => {
    const res = await fetch("/api/practice", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(payload),
    });
    const j = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(j.error || "Something went wrong.");
    return j;
  }, [token]);

  // topics for the chosen course
  useEffect(() => {
    if (!courseId || !token) { setTopics([]); return; }
    setTopic("");
    api({ action: "meta", courseId }).then((j) => setTopics(j.topics ?? [])).catch(() => setTopics([]));
  }, [courseId, token, api]);

  async function start() {
    setErr(""); setBusy(true); setResult(null); setGraded([]); setAnswers({});
    try {
      const j = await api({ action: "start", courseId, topic: topic || undefined, count });
      setQuestions(j.questions ?? []);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e: any) { setErr(e.message); }
    setBusy(false);
  }

  async function submit() {
    setErr(""); setBusy(true);
    try {
      const j = await api({ action: "grade", courseId, answers });
      setResult(j.result); setGraded(j.questions ?? []);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e: any) { setErr(e.message); }
    setBusy(false);
  }

  if (signedIn === false) {
    return (
      <main style={{ minHeight: "100vh" }}>
        <SiteHeader />
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "40px 24px" }}>
          <h1 style={h1}>Practice</h1>
          <p style={{ color: "#475569" }}><a href="/login" style={{ color: "#1b7a44", fontWeight: 700 }}>Sign in</a> to practise with questions from your course.</p>
        </div>
      </main>
    );
  }

  const answeredCount = questions ? questions.filter((q) => answers[q.id] != null && answers[q.id] !== "").length : 0;

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <SiteHeader />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <h1 style={h1}>Practice</h1>
          <p style={{ color: "#64748b", margin: 0, fontSize: 15 }}>Unlimited practice questions from your course — marked instantly, with the correct answers explained.</p>
        </div>

        {/* setup */}
        <div style={card}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "flex-end" }}>
            <label style={{ flex: "1 1 200px", display: "grid", gap: 5 }}>
              <span style={lbl}>Course</span>
              <select value={courseId} onChange={(e) => { setCourseId(e.target.value); setQuestions(null); setResult(null); }} style={sel}>
                <option value="">Choose a course…</option>
                {courses.map((c) => <option key={c.id} value={c.id}>{c.code ? `${c.code} — ${c.title}` : c.title}</option>)}
              </select>
            </label>
            <label style={{ flex: "1 1 200px", display: "grid", gap: 5 }}>
              <span style={lbl}>Topic (optional)</span>
              <select value={topic} onChange={(e) => setTopic(e.target.value)} disabled={!topics.length} style={sel}>
                <option value="">All topics</option>
                {topics.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </label>
            <label style={{ display: "grid", gap: 5 }}>
              <span style={lbl}>Questions</span>
              <select value={count} onChange={(e) => setCount(Number(e.target.value))} style={{ ...sel, minWidth: 90 }}>
                {[5, 10, 15, 20, 25].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </label>
            <button onClick={start} disabled={!courseId || busy} style={{ ...primaryBtn, opacity: !courseId || busy ? 0.5 : 1 }}>
              {busy && !questions ? "Loading…" : questions ? "New set" : "Start practice"}
            </button>
          </div>
          {err && <div style={{ color: "#dc2626", fontSize: 14, marginTop: 10, fontWeight: 600 }}>{err}</div>}
        </div>

        {/* score */}
        {result && (
          <div style={{ ...card, background: result.percent >= 50 ? "#ecfdf5" : "#fef2f2", border: `1px solid ${result.percent >= 50 ? "#a7f3d0" : "#fecaca"}` }}>
            <div style={{ fontSize: 30, fontWeight: 800, color: result.percent >= 50 ? "#065f46" : "#b91c1c" }}>{result.percent}%</div>
            <div style={{ color: "#475569", fontWeight: 600 }}>{result.score} / {result.maxScore} points · {Object.values(result.perQuestion).filter((p) => p.correct).length} of {graded.length} correct</div>
            <button onClick={start} disabled={busy} style={{ ...primaryBtn, marginTop: 12 }}>Practise another set →</button>
          </div>
        )}

        {/* questions */}
        {questions?.map((q, i) => {
          const r = result?.perQuestion[q.id];
          const gq = graded.find((x) => x.id === q.id);
          return (
            <div key={q.id}>
              <QuestionView q={q as Question} number={i + 1} value={answers[q.id]} onChange={(v) => setAnswers((a) => ({ ...a, [q.id]: v }))} />
              {r && (
                <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderTop: "none", borderRadius: "0 0 12px 12px", padding: "10px 26px 14px" }}>
                  <span style={{ fontWeight: 700, fontSize: 13, color: r.correct ? "#059669" : "#dc2626" }}>
                    {r.correct ? `✓ Correct — ${r.points} pt` : "✗ Not quite"}
                  </span>
                  {!r.correct && gq && <CorrectAnswer q={gq} />}
                  {gq?.feedback && <p style={{ fontSize: 13, color: "#475569", marginTop: 6 }}><PromptText prompt={gq.feedback} /></p>}
                </div>
              )}
            </div>
          );
        })}

        {questions && questions.length > 0 && !result && (
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button onClick={submit} disabled={busy} style={primaryBtn}>{busy ? "Marking…" : "Check my answers"}</button>
            <span style={{ color: "#94a3b8", fontSize: 14 }}>{answeredCount} of {questions.length} answered</span>
          </div>
        )}

        {questions && questions.length === 0 && <div style={card}>No questions found for that selection.</div>}
      </div>
    </main>
  );
}

const h1: React.CSSProperties = { fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: "0 0 6px" };
const card: React.CSSProperties = { background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20 };
const lbl: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: "#475569" };
const sel: React.CSSProperties = { padding: "10px 12px", borderRadius: 9, border: "1px solid #cbd5e1", fontSize: 14, background: "#fff", width: "100%" };
const primaryBtn: React.CSSProperties = { background: "#1b7a44", color: "#fff", border: "none", borderRadius: 10, padding: "11px 22px", fontWeight: 700, fontSize: 15, cursor: "pointer" };

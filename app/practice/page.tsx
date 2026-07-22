"use client";

// Self-serve practice quiz for students: pick a course (and optionally a topic),
// get questions drawn from the bank, answer them, and get instant marks with the
// correct answers. Questions come from /api/practice without answers; grading
// happens server-side, so the bank stays private.
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { SiteHeader } from "../../components/SiteHeader";
import { QuestionView, CorrectAnswer, PromptText } from "../../components/QuestionView";
import type { Question, GradeResult } from "../../lib/quiz";

type Course = { id: string; code: string | null; title: string };
type TopicStat = { topic: string; total: number; correct: number; percent: number };
type Stats = { answered: number; correct: number; sets: number; streak: number; mistakes: number; topics: TopicStat[] };

// A topic needs a few answers behind it before calling it "weak" — one unlucky
// question shouldn't brand a topic red.
const MIN_FOR_WEAK = 3;

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
  const [stats, setStats] = useState<Stats | null>(null);
  const [exam, setExam] = useState(false);          // mock-exam mode selected
  const [examCount, setExamCount] = useState(30);
  const [examTopics, setExamTopics] = useState<Record<string, string>>({}); // questionId -> topic
  const [deadline, setDeadline] = useState<number | null>(null);
  const [nowMs, setNowMs] = useState(() => Date.now());

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

  // Topics for the chosen course. A ?topic= from a lesson's "Practise this
  // topic" link is honoured once the list confirms the topic exists.
  const wantTopic = params.get("topic") ?? "";
  useEffect(() => {
    if (!courseId || !token) { setTopics([]); return; }
    api({ action: "meta", courseId })
      .then((j) => {
        const list: string[] = j.topics ?? [];
        setTopics(list);
        setTopic(list.includes(wantTopic) ? wantTopic : "");
      })
      .catch(() => setTopics([]));
  }, [courseId, token, api, wantTopic]);

  // practice history for the chosen course (refreshed after every set)
  const loadStats = useCallback(() => {
    if (!courseId || !token) { setStats(null); return; }
    api({ action: "stats", courseId, tzOffset: new Date().getTimezoneOffset() })
      .then(setStats)
      .catch(() => setStats(null));
  }, [courseId, token, api]);
  useEffect(() => { loadStats(); }, [loadStats]);

  async function start(mode?: "mistakes" | "exam", forceTopic?: string) {
    const useTopic = mode === "exam" ? "" : forceTopic !== undefined ? forceTopic : topic;
    if (forceTopic !== undefined) setTopic(forceTopic);
    setErr(""); setBusy(true); setResult(null); setGraded([]); setAnswers({}); setDeadline(null); setExamTopics({});
    try {
      const j = await api({
        action: "start", courseId, mode,
        topic: useTopic || undefined,
        count: mode === "exam" ? examCount : count,
      });
      const qs = j.questions ?? [];
      setQuestions(qs);
      // Exams are timed: 2 minutes a question, the usual Ontario rule of thumb.
      if (mode === "exam" && qs.length) setDeadline(Date.now() + qs.length * 2 * 60_000);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e: any) { setErr(e.message); }
    setBusy(false);
  }

  async function submit() {
    setErr(""); setBusy(true); setDeadline(null);
    try {
      const j = await api({ action: "grade", courseId, answers });
      setResult(j.result); setGraded(j.questions ?? []); setExamTopics(j.topics ?? {});
      loadStats(); // the set just answered now counts toward streak/weak topics
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e: any) { setErr(e.message); }
    setBusy(false);
  }

  // Countdown. submit() closes over `answers`, so the ticker calls through a ref
  // to always hand in whatever is on screen when time runs out.
  const submitRef = useRef(submit);
  submitRef.current = submit;
  useEffect(() => {
    if (!deadline) return;
    const t = setInterval(() => {
      if (Date.now() >= deadline) { setDeadline(null); submitRef.current(); }
      else setNowMs(Date.now());
    }, 1000);
    return () => clearInterval(t);
  }, [deadline]);

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
          <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
            <button onClick={() => setExam(false)} style={segBtn(!exam)}>Practice</button>
            <button onClick={() => setExam(true)} style={segBtn(exam)}>Mock exam</button>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "flex-end" }}>
            <label style={{ flex: "1 1 200px", display: "grid", gap: 5 }}>
              <span style={lbl}>Course</span>
              <select value={courseId} onChange={(e) => { setCourseId(e.target.value); setQuestions(null); setResult(null); }} style={sel}>
                <option value="">Choose a course…</option>
                {courses.map((c) => <option key={c.id} value={c.id}>{c.code ? `${c.code} — ${c.title}` : c.title}</option>)}
              </select>
            </label>
            {!exam && (
            <label style={{ flex: "1 1 200px", display: "grid", gap: 5 }}>
              <span style={lbl}>Topic (optional)</span>
              <select value={topic} onChange={(e) => setTopic(e.target.value)} disabled={!topics.length} style={sel}>
                <option value="">All topics</option>
                {topics.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </label>
            )}
            <label style={{ display: "grid", gap: 5 }}>
              <span style={lbl}>Questions</span>
              {exam ? (
                <select value={examCount} onChange={(e) => setExamCount(Number(e.target.value))} style={{ ...sel, minWidth: 90 }}>
                  {[20, 30, 40].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              ) : (
                <select value={count} onChange={(e) => setCount(Number(e.target.value))} style={{ ...sel, minWidth: 90 }}>
                  {[5, 10, 15, 20, 25].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              )}
            </label>
            <button onClick={() => start(exam ? "exam" : undefined)} disabled={!courseId || busy} style={{ ...primaryBtn, opacity: !courseId || busy ? 0.5 : 1 }}>
              {busy && !questions ? "Loading…" : exam ? `Start ${examCount * 2}-min exam` : questions ? "New set" : "Start practice"}
            </button>
            {!exam && !!stats?.mistakes && (
              <button onClick={() => start("mistakes")} disabled={busy} title="Only questions you last got wrong" style={ghostBtn}>
                ↺ Redo my mistakes ({stats.mistakes})
              </button>
            )}
          </div>
          {exam && (
            <p style={{ fontSize: 13, color: "#64748b", margin: "12px 0 0" }}>
              Every topic in the course, evenly sampled and timed at 2 minutes a question — the paper hands itself in when the clock runs out.
            </p>
          )}
          {err && <div style={{ color: "#dc2626", fontSize: 14, marginTop: 10, fontWeight: 600 }}>{err}</div>}
        </div>

        {/* exam clock */}
        {deadline && (
          <div style={{
            position: "sticky", top: 72, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 12, padding: "12px 18px", borderRadius: 12, fontWeight: 800,
            background: deadline - nowMs < 5 * 60_000 ? "#fef2f2" : "#0f172a",
            color: deadline - nowMs < 5 * 60_000 ? "#b91c1c" : "#fff",
            border: deadline - nowMs < 5 * 60_000 ? "1px solid #fecaca" : "none",
          }}>
            <span style={{ fontSize: 13, fontWeight: 700, opacity: 0.85 }}>Mock exam · {answeredCount}/{questions?.length ?? 0} answered</span>
            <span style={{ fontVariantNumeric: "tabular-nums", fontSize: 20 }}>{clock(deadline - nowMs)}</span>
          </div>
        )}

        {/* history: only worth showing once there's something in it */}
        {stats && stats.answered > 0 && (
          <div style={card}>
            <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
              <Stat label="Day streak" value={stats.streak ? `${stats.streak}🔥` : "0"} />
              <Stat label="Questions answered" value={String(stats.answered)} />
              <Stat label="Overall accuracy" value={`${Math.round((stats.correct / stats.answered) * 100)}%`} />
              <Stat label="Sets completed" value={String(stats.sets)} />
            </div>

            {(() => {
              const weak = stats.topics.filter((t) => t.total >= MIN_FOR_WEAK).slice(0, 4);
              if (!weak.length) return null;
              return (
                <div style={{ marginTop: 18, borderTop: "1px solid #f1f5f9", paddingTop: 14 }}>
                  <div style={{ ...lbl, marginBottom: 8 }}>WHERE YOU&rsquo;RE LOSING MARKS</div>
                  <div style={{ display: "grid", gap: 8 }}>
                    {weak.map((t) => (
                      <div key={t.topic} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 13, fontWeight: 600, color: "#334155", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.topic}</div>
                          <div style={{ height: 6, background: "#f1f5f9", borderRadius: 99, marginTop: 4, overflow: "hidden" }}>
                            <div style={{ width: `${t.percent}%`, height: "100%", background: barColor(t.percent), borderRadius: 99 }} />
                          </div>
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 800, color: barColor(t.percent), width: 42, textAlign: "right" }}>{t.percent}%</span>
                        <button onClick={() => start(undefined, t.topic)} disabled={busy} style={miniBtn}>Practise</button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* score */}
        {result && (
          <div style={{ ...card, background: result.percent >= 50 ? "#ecfdf5" : "#fef2f2", border: `1px solid ${result.percent >= 50 ? "#a7f3d0" : "#fecaca"}` }}>
            <div style={{ fontSize: 30, fontWeight: 800, color: result.percent >= 50 ? "#065f46" : "#b91c1c" }}>{result.percent}%</div>
            <div style={{ color: "#475569", fontWeight: 600 }}>{result.score} / {result.maxScore} points · {Object.values(result.perQuestion).filter((p) => p.correct).length} of {graded.length} correct</div>

            {/* Exam report: where the marks went, topic by topic. */}
            {Object.keys(examTopics).length > 0 && (() => {
              const rows = new Map<string, { total: number; correct: number }>();
              for (const [qid, r] of Object.entries(result.perQuestion)) {
                const key = examTopics[qid] ?? "Other";
                const e = rows.get(key) ?? { total: 0, correct: 0 };
                e.total++; if (r.correct) e.correct++;
                rows.set(key, e);
              }
              const list = [...rows.entries()]
                .map(([topic, v]) => ({ topic, ...v, percent: Math.round((v.correct / v.total) * 100) }))
                .sort((a, b) => a.percent - b.percent);
              if (list.length < 2) return null;
              return (
                <div style={{ marginTop: 16, background: "#fff", borderRadius: 12, padding: "14px 16px" }}>
                  <div style={{ ...lbl, marginBottom: 8 }}>BY TOPIC</div>
                  <div style={{ display: "grid", gap: 6 }}>
                    {list.map((t) => (
                      <div key={t.topic} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13 }}>
                        <span style={{ flex: 1, minWidth: 0, color: "#334155", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{t.topic}</span>
                        <span style={{ color: "#64748b" }}>{t.correct}/{t.total}</span>
                        <span style={{ fontWeight: 800, color: barColor(t.percent), width: 42, textAlign: "right" }}>{t.percent}%</span>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => window.print()} style={{ ...miniBtn, marginTop: 12 }}>🖨 Print this report</button>
                </div>
              );
            })()}
            <button onClick={() => start()} disabled={busy} style={{ ...primaryBtn, marginTop: 12 }}>Practise another set →</button>
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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", lineHeight: 1.1 }}>{value}</div>
      <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600 }}>{label}</div>
    </div>
  );
}

const barColor = (p: number) => (p >= 80 ? "#059669" : p >= 60 ? "#ca8a04" : "#dc2626");

/** ms remaining -> "M:SS" (or "H:MM:SS" for the 80-minute papers) */
function clock(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return h ? `${h}:${pad(m)}:${pad(sec)}` : `${m}:${pad(sec)}`;
}

const segBtn = (active: boolean): React.CSSProperties => ({
  padding: "7px 16px", borderRadius: 99, fontWeight: 700, fontSize: 13, cursor: "pointer",
  border: active ? "1px solid #1b7a44" : "1px solid #e2e8f0",
  background: active ? "#1b7a44" : "#fff", color: active ? "#fff" : "#64748b",
});

const h1: React.CSSProperties = { fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: "0 0 6px" };
const card: React.CSSProperties = { background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20 };
const lbl: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: "#475569" };
const sel: React.CSSProperties = { padding: "10px 12px", borderRadius: 9, border: "1px solid #cbd5e1", fontSize: 14, background: "#fff", width: "100%" };
const primaryBtn: React.CSSProperties = { background: "#1b7a44", color: "#fff", border: "none", borderRadius: 10, padding: "11px 22px", fontWeight: 700, fontSize: 15, cursor: "pointer" };
const ghostBtn: React.CSSProperties = { background: "#fff", color: "#1b7a44", border: "1px solid #1b7a44", borderRadius: 10, padding: "11px 18px", fontWeight: 700, fontSize: 14, cursor: "pointer" };
const miniBtn: React.CSSProperties = { background: "#f1f5f9", color: "#334155", border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 12px", fontWeight: 700, fontSize: 12, cursor: "pointer", flexShrink: 0 };

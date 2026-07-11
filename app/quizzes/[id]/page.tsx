"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import { SiteHeader } from "../../../components/SiteHeader";
import { CourseNav } from "../../../components/CourseNav";
import { Math as Tex } from "../../../components/Math";
import { MathField } from "../../../components/MathField";
import { MaterialsPanel } from "../../../components/MaterialsPanel";
import { Question, gradeAttempt, shuffle, GradeResult } from "../../../lib/quiz";
import { exprToTex } from "../../../lib/mathcheck";

type Quiz = {
  id: string;
  title: string;
  description: string | null;
  time_limit_minutes: number | null;
  available_from: string | null;
  available_until: string | null;
  due_date: string | null;
  attempts_allowed: number | null;
  shuffle_questions: boolean;
  shuffle_choices: boolean;
  one_question_per_page: boolean;
  allow_backtracking: boolean;
  passing_score: number | null;
  show_answers: string;
  show_score: boolean;
};

type Phase = "loading" | "blocked" | "start" | "playing" | "results";

export default function QuizPlayerPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as string;

  const [phase, setPhase] = useState<Phase>("loading");
  const [blockMsg, setBlockMsg] = useState("");
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [attemptsUsed, setAttemptsUsed] = useState(0);

  // active attempt state
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [pageIdx, setPageIdx] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const [result, setResult] = useState<GradeResult | null>(null);
  const startedAt = useRef<number>(0);
  const submittingRef = useRef(false);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      setUserId(session.user.id);

      const { data: q } = await supabase.from("quizzes").select("*").eq("id", quizId).single();
      if (!q) {
        setBlockMsg("This quiz isn't available.");
        return setPhase("blocked");
      }
      setQuiz(q as Quiz);

      const now = new Date();
      if (q.available_from && new Date(q.available_from) > now) {
        setBlockMsg(`This quiz opens ${new Date(q.available_from).toLocaleString()}.`);
        return setPhase("blocked");
      }
      if (q.available_until && new Date(q.available_until) < now) {
        setBlockMsg("This quiz has closed.");
        return setPhase("blocked");
      }

      const { data: qq } = await supabase.from("quiz_questions").select("*").eq("quiz_id", quizId).order("position");
      setQuestions((qq ?? []) as Question[]);

      const { count } = await supabase
        .from("quiz_attempts")
        .select("id", { count: "exact", head: true })
        .eq("quiz_id", quizId)
        .eq("student_id", session.user.id)
        .not("submitted_at", "is", null);
      setAttemptsUsed(count ?? 0);

      if (q.attempts_allowed != null && (count ?? 0) >= q.attempts_allowed) {
        setBlockMsg("You've used all your attempts for this quiz.");
        return setPhase("blocked");
      }
      setPhase("start");
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizId]);

  // Build the ordered/shuffled question list when an attempt starts.
  const playQuestions = useMemo(() => {
    if (!quiz) return questions;
    let list = [...questions];
    if (quiz.shuffle_questions) list = shuffle(list);
    if (quiz.shuffle_choices) {
      list = list.map((q) =>
        (q.kind === "multiple_choice" || q.kind === "multiple_select") && Array.isArray(q.choices)
          ? { ...q, choices: shuffle(q.choices) }
          : q,
      );
    }
    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase === "playing"]);

  // Timer
  useEffect(() => {
    if (phase !== "playing" || secondsLeft == null) return;
    if (secondsLeft <= 0) {
      submit();
      return;
    }
    const t = setTimeout(() => setSecondsLeft((s) => (s == null ? s : s - 1)), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, secondsLeft]);

  function start() {
    setAnswers({});
    setPageIdx(0);
    setResult(null);
    startedAt.current = Date.now();
    setSecondsLeft(quiz?.time_limit_minutes ? quiz.time_limit_minutes * 60 : null);
    setPhase("playing");
  }

  async function submit() {
    if (submittingRef.current) return;
    submittingRef.current = true;
    const g = gradeAttempt(playQuestions, answers);
    const passed = quiz?.passing_score != null ? g.percent >= quiz.passing_score : null;
    const timeSpent = Math.round((Date.now() - startedAt.current) / 1000);

    if (userId) {
      await supabase.from("quiz_attempts").insert({
        quiz_id: quizId,
        student_id: userId,
        attempt_no: attemptsUsed + 1,
        answers,
        score: g.score,
        max_score: g.maxScore,
        percent: g.percent,
        passed,
        needs_grading: g.needsGrading,
        submitted_at: new Date().toISOString(),
        time_spent_seconds: timeSpent,
      });
    }
    setResult(g);
    setSecondsLeft(null);
    setPhase("results");
    submittingRef.current = false;
  }

  function setAns(qid: string, v: any) {
    setAnswers((a) => ({ ...a, [qid]: v }));
  }

  // ── RENDER ────────────────────────────────────────────────
  if (phase === "loading")
    return (
      <Shell>
        <p style={{ color: "#64748b" }}>Loading…</p>
      </Shell>
    );

  if (phase === "blocked")
    return (
      <Shell>
        <Card>
          <h1 style={h1}>{quiz?.title ?? "Quiz"}</h1>
          <p style={{ color: "#64748b", fontSize: 16 }}>{blockMsg}</p>
        </Card>
        {quiz && (quiz as any).course_id && <CourseNav courseId={(quiz as any).course_id} type="quiz" id={quizId} classId={(quiz as any).class_id ?? undefined} />}
      </Shell>
    );

  if (phase === "start" && quiz)
    return (
      <Shell>
        <Card>
          <h1 style={h1}>{quiz.title}</h1>
          {quiz.description && <p style={{ color: "#475569", fontSize: 16, lineHeight: 1.6 }}>{quiz.description}</p>}
          <ul style={{ listStyle: "none", padding: 0, margin: "18px 0", display: "flex", flexDirection: "column", gap: 8, color: "#334155", fontSize: 15 }}>
            <li>📋 {questions.length} question{questions.length !== 1 ? "s" : ""}</li>
            <li>⏱ {quiz.time_limit_minutes ? `${quiz.time_limit_minutes} minute limit` : "No time limit"}</li>
            <li>🔁 {quiz.attempts_allowed == null ? "Unlimited attempts" : `Attempt ${attemptsUsed + 1} of ${quiz.attempts_allowed}`}</li>
            {quiz.passing_score != null && <li>🎯 Pass mark: {quiz.passing_score}%</li>}
            {quiz.due_date && <li>📅 Due {new Date(quiz.due_date).toLocaleString()}</li>}
          </ul>
          {questions.length > 0 ? (
            <button onClick={start} style={primaryBtn}>Start attempt →</button>
          ) : (
            <p style={{ color: "#64748b", fontSize: 14 }}>📄 This is a worksheet quiz — view or download the PDF below. Submit your completed work on the linked assignment.</p>
          )}
        </Card>
        <div style={{ marginTop: 20 }}>
          <MaterialsPanel ownerType="quiz" ownerId={quizId} embedHeight="65vh" />
        </div>
        {(quiz as any).course_id && <CourseNav courseId={(quiz as any).course_id} type="quiz" id={quizId} classId={(quiz as any).class_id ?? undefined} />}
      </Shell>
    );

  if (phase === "playing" && quiz) {
    const onePer = quiz.one_question_per_page;
    const shown = onePer ? [playQuestions[pageIdx]] : playQuestions;
    return (
      <Shell>
        {secondsLeft != null && (
          <div style={{ position: "sticky", top: 70, zIndex: 20, textAlign: "right", marginBottom: 8 }}>
            <span style={{ background: secondsLeft < 60 ? "#fef2f2" : "#0f172a", color: secondsLeft < 60 ? "#dc2626" : "#fff", fontWeight: 800, padding: "8px 16px", borderRadius: 999, fontSize: 15 }}>
              {fmtTime(secondsLeft)}
            </span>
          </div>
        )}
        {shown.map((q, i) => (
          <QuestionView key={q.id} q={q} number={onePer ? pageIdx + 1 : i + 1} value={answers[q.id]} onChange={(v) => setAns(q.id, v)} />
        ))}

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 18 }}>
          {onePer && quiz.allow_backtracking && pageIdx > 0 ? (
            <button onClick={() => setPageIdx((p) => p - 1)} style={secondaryBtn}>← Previous</button>
          ) : (
            <span />
          )}
          {onePer && pageIdx < playQuestions.length - 1 ? (
            <button onClick={() => setPageIdx((p) => p + 1)} style={primaryBtn}>Next →</button>
          ) : (
            <button onClick={submit} style={{ ...primaryBtn, background: "#0d9488" }}>Submit quiz</button>
          )}
        </div>
      </Shell>
    );
  }

  if (phase === "results" && quiz && result) {
    const canSeeAnswers = quiz.show_answers === "after_submit";
    return (
      <Shell>
        <Card>
          <h1 style={h1}>Results</h1>
          {result.needsGrading && (
            <p style={{ background: "#fffbeb", border: "1px solid #fed7aa", borderRadius: 10, padding: "10px 14px", color: "#92400e", fontWeight: 600, fontSize: 14 }}>
              Some questions need manual grading — your final score may change.
            </p>
          )}
          {quiz.show_score && (
            <div style={{ margin: "16px 0" }}>
              <div style={{ fontFamily: "Fraunces, serif", fontSize: 44, fontWeight: 700, color: "#1b7a44" }}>{result.percent}%</div>
              <div style={{ color: "#64748b", fontWeight: 600 }}>
                {result.score} / {result.maxScore} points
                {quiz.passing_score != null && (
                  <span style={{ marginLeft: 10, color: result.percent >= quiz.passing_score ? "#059669" : "#dc2626", fontWeight: 700 }}>
                    {result.percent >= quiz.passing_score ? "Passed" : "Did not pass"}
                  </span>
                )}
              </div>
            </div>
          )}

          {canSeeAnswers && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 18 }}>
              {playQuestions.map((q, i) => {
                const r = result.perQuestion[q.id];
                return (
                  <div key={q.id} style={{ border: "1px solid #e2e8f0", borderRadius: 10, padding: 14 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <strong style={{ fontSize: 14 }}>Question {i + 1}</strong>
                      <span style={{ fontWeight: 700, fontSize: 13, color: r?.manual ? "#92400e" : r?.correct ? "#059669" : "#dc2626" }}>
                        {r?.manual ? "Pending" : r?.correct ? `✓ ${r.points} pt` : "✗ 0 pt"}
                      </span>
                    </div>
                    <PromptText prompt={q.prompt} />
                    {!r?.manual && !r?.correct && <CorrectAnswer q={q} />}
                    {q.feedback && <p style={{ fontSize: 13, color: "#475569", marginTop: 6, fontStyle: "italic" }}>{q.feedback}</p>}
                  </div>
                );
              })}
            </div>
          )}

          <div style={{ display: "flex", gap: 12, marginTop: 22 }}>
            {quiz.attempts_allowed == null || attemptsUsed + 1 < quiz.attempts_allowed ? (
              <button onClick={() => { setAttemptsUsed((n) => n + 1); start(); }} style={primaryBtn}>Try again</button>
            ) : null}
            <button onClick={() => router.push("/dashboard")} style={secondaryBtn}>Back to dashboard</button>
          </div>
        </Card>
        {(quiz as any).course_id && <CourseNav courseId={(quiz as any).course_id} type="quiz" id={quizId} classId={(quiz as any).class_id ?? undefined} />}
      </Shell>
    );
  }

  return <Shell><p /></Shell>;
}

// ── Question input ───────────────────────────────────────────
function QuestionView({ q, number, value, onChange }: { q: Question; number: number; value: any; onChange: (v: any) => void }) {
  // Initialize ordering questions once with a stable shuffled order.
  useEffect(() => {
    if (q.kind === "ordering" && value == null) {
      onChange(shuffle((q.choices ?? []).map((_: any, i: number) => i)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontWeight: 800, color: "#1b7a44" }}>Question {number}</span>
        <span style={{ color: "#94a3b8", fontWeight: 600, fontSize: 13 }}>{q.points} pt{q.points !== 1 ? "s" : ""}</span>
      </div>
      <div style={{ fontSize: 17, marginBottom: 14 }}>
        <PromptText prompt={q.prompt} />
      </div>
      {q.image_url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={q.image_url} alt="" style={{ maxWidth: "100%", borderRadius: 10, marginBottom: 14, border: "1px solid #e2e8f0" }} />
      )}
      <Input q={q} value={value} onChange={onChange} />
    </Card>
  );
}

function Input({ q, value, onChange }: { q: Question; value: any; onChange: (v: any) => void }) {
  if (q.kind === "multiple_choice") {
    return (
      <div style={optWrap}>
        {(q.choices ?? []).map((c: any) => (
          <Opt key={c.id} selected={value === c.id} onClick={() => onChange(c.id)} type="radio">
            <PromptText prompt={c.text} />
          </Opt>
        ))}
      </div>
    );
  }
  if (q.kind === "multiple_select") {
    const sel: string[] = value ?? [];
    return (
      <div style={optWrap}>
        {(q.choices ?? []).map((c: any) => (
          <Opt key={c.id} selected={sel.includes(c.id)} type="checkbox" onClick={() => {
            const set = new Set(sel);
            set.has(c.id) ? set.delete(c.id) : set.add(c.id);
            onChange([...set]);
          }}>
            <PromptText prompt={c.text} />
          </Opt>
        ))}
      </div>
    );
  }
  if (q.kind === "true_false") {
    return (
      <div style={optWrap}>
        {["true", "false"].map((v) => (
          <Opt key={v} selected={value === v} type="radio" onClick={() => onChange(v)}>
            <span style={{ textTransform: "capitalize" }}>{v}</span>
          </Opt>
        ))}
      </div>
    );
  }
  if (q.kind === "numeric") {
    return <input type="number" value={value ?? ""} onChange={(e) => onChange(e.target.value)} style={textInput} placeholder="Your answer" />;
  }
  if (q.kind === "math_expr") {
    return (
      <div>
        <MathField value={value ?? ""} onChange={onChange} format="expr" ariaLabel="your answer"
          placeholder="Type your answer" style={{ border: "1px solid #cbd5e1", borderRadius: 10, padding: "10px 12px", minHeight: 46, fontSize: 19 }} />
        <p style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>Type math naturally — <code>^</code> for powers, <code>/</code> for fractions, <code>sqrt</code> for roots.</p>
      </div>
    );
  }
  if (q.kind === "short_answer" || q.kind === "fill_blank") {
    return <input value={value ?? ""} onChange={(e) => onChange(e.target.value)} style={textInput} placeholder="Your answer" />;
  }
  if (q.kind === "long_answer") {
    return <textarea value={value ?? ""} onChange={(e) => onChange(e.target.value)} style={{ ...textInput, minHeight: 120, resize: "vertical" }} placeholder="Write your answer…" />;
  }
  if (q.kind === "matching") {
    const left: string[] = q.choices?.left ?? [];
    const right: string[] = q.choices?.right ?? [];
    const cur: number[] = value ?? left.map(() => 0);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {left.map((l, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span style={{ flex: 1, fontWeight: 600 }}><PromptText prompt={l} /></span>
            <span>→</span>
            <select value={cur[i] ?? 0} onChange={(e) => { const c = [...cur]; c[i] = Number(e.target.value); onChange(c); }} style={{ ...textInput, width: 200 }}>
              {right.map((r, j) => (
                <option key={j} value={j}>{r}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    );
  }
  if (q.kind === "ordering") {
    const items: string[] = q.choices ?? [];
    // value (array of original indices) is initialized once in QuestionView's effect.
    const order: number[] = value ?? items.map((_, i) => i);
    function moveItem(pos: number, dir: -1 | 1) {
      const np = pos + dir;
      if (np < 0 || np >= order.length) return;
      const c = [...order];
      [c[pos], c[np]] = [c[np], c[pos]];
      onChange(c);
    }
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {order.map((origIdx, pos) => (
          <div key={pos} style={{ display: "flex", gap: 10, alignItems: "center", border: "1px solid #e2e8f0", borderRadius: 9, padding: "10px 12px" }}>
            <span style={{ flex: 1 }}><PromptText prompt={items[origIdx]} /></span>
            <button onClick={() => moveItem(pos, -1)} disabled={pos === 0} style={miniMove}>↑</button>
            <button onClick={() => moveItem(pos, 1)} disabled={pos === order.length - 1} style={miniMove}>↓</button>
          </div>
        ))}
      </div>
    );
  }
  return null;
}

function CorrectAnswer({ q }: { q: Question }) {
  let parts: string[] = [];
  let sep = ", ";
  if (q.kind === "multiple_choice") { const t = (q.choices ?? []).find((c: any) => c.id === q.answer)?.text; if (t) parts = [t]; }
  else if (q.kind === "multiple_select") parts = (q.choices ?? []).filter((c: any) => (q.answer ?? []).includes(c.id)).map((c: any) => c.text);
  else if (q.kind === "true_false" || q.kind === "numeric") parts = [String(q.answer)];
  else if (q.kind === "math_expr") {
    return (
      <p style={{ fontSize: 13, color: "#059669", marginTop: 6, fontWeight: 600 }}>
        Correct: <Tex expr={exprToTex(String(q.answer ?? ""))} />
      </p>
    );
  }
  else if (q.kind === "short_answer" || q.kind === "fill_blank") { parts = (Array.isArray(q.answer) ? q.answer : [q.answer]).filter(Boolean).map(String); sep = "  /  "; }
  else if (q.kind === "ordering") { parts = (q.choices ?? []).map(String); sep = " → "; }
  else if (q.kind === "matching") {
    const left = q.choices?.left ?? [];
    const right = q.choices?.right ?? [];
    parts = left.map((l: string, i: number) => `${l} → ${right[q.answer?.[i]] ?? "?"}`); sep = ";  ";
  }
  if (!parts.length) return null;
  return (
    <p style={{ fontSize: 13, color: "#059669", marginTop: 6, fontWeight: 600 }}>
      Correct: {parts.map((t, i) => <span key={i}>{i > 0 ? sep : ""}<MathBit text={t} /></span>)}
    </p>
  );
}

// Renders an answer fragment as math: $...$ via PromptText, bare LaTeX (a
// backslash command like \frac or \pi) via KaTeX, otherwise plain text.
function MathBit({ text }: { text: string }) {
  if (!text) return null;
  if (text.includes("$")) return <PromptText prompt={text} />;
  if (/[\\^_]/.test(text)) return <Tex expr={text} />;
  return <span>{text}</span>;
}

// renders text that may contain $...$ LaTeX
function PromptText({ prompt }: { prompt: string }) {
  if (!prompt) return null;
  const parts = prompt.split(/(\$[^$]+\$)/g);
  return (
    <span>
      {parts.map((p, i) =>
        p.startsWith("$") && p.endsWith("$") && p.length > 1 ? (
          <Tex key={i} expr={p.slice(1, -1)} />
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </span>
  );
}

// ── layout helpers ───────────────────────────────────────────
function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "32px 24px", display: "flex", flexDirection: "column", gap: 16 }}>{children}</div>
    </main>
  );
}
function Card({ children }: { children: React.ReactNode }) {
  return <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 26 }}>{children}</div>;
}
function Opt({ children, selected, onClick, type }: { children: React.ReactNode; selected: boolean; onClick: () => void; type: "radio" | "checkbox" }) {
  return (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 12, textAlign: "left", background: selected ? "#e7f6ec" : "#fff", border: `1px solid ${selected ? "#1b7a44" : "#e2e8f0"}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", fontSize: 15, fontFamily: "inherit", width: "100%", color: "#0f172a" }}>
      <input type={type} checked={selected} readOnly style={{ pointerEvents: "none" }} />
      <span>{children}</span>
    </button>
  );
}
function fmtTime(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, "0")}`;
}
const h1: React.CSSProperties = { fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: "0 0 8px" };
const primaryBtn: React.CSSProperties = { background: "#1b7a44", color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer" };
const secondaryBtn: React.CSSProperties = { background: "#fff", color: "#0f172a", border: "1px solid #cbd5e1", borderRadius: 10, padding: "12px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer" };
const optWrap: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 10 };
const textInput: React.CSSProperties = { width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid #cbd5e1", fontSize: 15, fontFamily: "inherit", outline: "none", boxSizing: "border-box" };
const miniMove: React.CSSProperties = { width: 32, height: 32, borderRadius: 7, border: "1px solid #e2e8f0", background: "#fff", cursor: "pointer", fontWeight: 700 };

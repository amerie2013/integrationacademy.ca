"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../../../lib/supabase";
import { SiteHeader } from "../../../../../components/SiteHeader";
import { Math as Tex } from "../../../../../components/Math";
import { Question, isCorrect } from "../../../../../lib/quiz";

type Attempt = {
  id: string;
  student_id: string;
  attempt_no: number;
  answers: Record<string, any>;
  score: number | null;
  max_score: number | null;
  percent: number | null;
  passed: boolean | null;
  needs_grading: boolean;
  manual_grades: Record<string, number>;
  teacher_comment: string | null;
  submitted_at: string | null;
  time_spent_seconds: number | null;
};

export default function QuizResultsPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [courseId, setCourseId] = useState<string | null>(null);
  const [quizTitle, setQuizTitle] = useState("");
  const [passing, setPassing] = useState<number | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [names, setNames] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<Attempt | null>(null);

  async function loadAttempts() {
    const { data: at } = await supabase
      .from("quiz_attempts")
      .select("*")
      .eq("quiz_id", quizId)
      .not("submitted_at", "is", null)
      .order("submitted_at", { ascending: false });
    const list = (at ?? []) as Attempt[];
    setAttempts(list);

    const ids = [...new Set(list.map((a) => a.student_id))];
    if (ids.length) {
      const { data: profs } = await supabase.from("profiles").select("id, full_name").in("id", ids);
      const map: Record<string, string> = {};
      (profs ?? []).forEach((p: any) => (map[p.id] = p.full_name || "Student"));
      setNames(map);
    }
  }

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "admin") return router.push("/classes");

      const { data: q } = await supabase
        .from("quizzes")
        .select("title, course_id, passing_score")
        .eq("id", quizId)
        .single();
      if (!q) return router.push("/teacher");
      setQuizTitle(q.title);
      setCourseId(q.course_id);
      setPassing(q.passing_score);

      const { data: qq } = await supabase.from("quiz_questions").select("*").eq("quiz_id", quizId).order("position");
      setQuestions((qq ?? []) as Question[]);

      await loadAttempts();
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizId]);

  if (loading) {
    return (
      <main>
        <SiteHeader />
        <div style={{ padding: 48, color: "#64748b" }}>Loading…</div>
      </main>
    );
  }

  const avg = attempts.length
    ? Math.round((attempts.reduce((s, a) => s + (a.percent ?? 0), 0) / attempts.length) * 10) / 10
    : null;

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "32px 28px" }}>
        {courseId && (
          <Link href={`/teacher/courses/${courseId}`} style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
            ← Back to course
          </Link>
        )}
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: "10px 0 4px" }}>{quizTitle} — results</h1>
        <p style={{ color: "#64748b", margin: "0 0 24px" }}>
          {attempts.length} submission{attempts.length !== 1 ? "s" : ""}
          {avg != null && ` · class average ${avg}%`}
        </p>

        {attempts.length === 0 ? (
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 28, color: "#64748b" }}>
            No submissions yet.
          </div>
        ) : (
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.6fr 0.8fr 0.8fr 1fr 0.7fr", padding: "12px 18px", background: "#f8fafc", fontSize: 12, fontWeight: 800, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              <span>Student</span><span>Attempt</span><span>Score</span><span>%</span><span>Status</span><span></span>
            </div>
            {attempts.map((a) => (
              <div key={a.id} style={{ display: "grid", gridTemplateColumns: "1.4fr 0.6fr 0.8fr 0.8fr 1fr 0.7fr", padding: "13px 18px", borderTop: "1px solid #f1f5f9", alignItems: "center", fontSize: 14 }}>
                <span style={{ fontWeight: 600 }}>{names[a.student_id] ?? "Student"}</span>
                <span>#{a.attempt_no}</span>
                <span>{a.score ?? 0}/{a.max_score ?? 0}</span>
                <span style={{ fontWeight: 700 }}>{a.percent ?? 0}%</span>
                <span>
                  {a.needs_grading ? (
                    <Pill color="#92400e" bg="#fffbeb">Needs grading</Pill>
                  ) : passing != null ? (
                    a.passed ? <Pill color="#065f46" bg="#ecfdf5">Passed</Pill> : <Pill color="#b91c1c" bg="#fef2f2">Did not pass</Pill>
                  ) : (
                    <Pill color="#334155" bg="#f1f5f9">Graded</Pill>
                  )}
                </span>
                <button onClick={() => setSelected(a)} style={{ background: "none", border: "1px solid #cbd5e1", borderRadius: 8, padding: "6px 12px", fontWeight: 700, fontSize: 13, cursor: "pointer", color: "#1b7a44" }}>
                  {a.needs_grading ? "Grade" : "View"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {selected && (
        <GradePanel
          attempt={selected}
          questions={questions}
          passing={passing}
          studentName={names[selected.student_id] ?? "Student"}
          onClose={() => setSelected(null)}
          onSaved={async () => {
            setSelected(null);
            await loadAttempts();
          }}
        />
      )}
    </main>
  );
}

function GradePanel({
  attempt,
  questions,
  passing,
  studentName,
  onClose,
  onSaved,
}: {
  attempt: Attempt;
  questions: Question[];
  passing: number | null;
  studentName: string;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [manual, setManual] = useState<Record<string, number>>(attempt.manual_grades ?? {});
  const [comment, setComment] = useState(attempt.teacher_comment ?? "");
  const [saving, setSaving] = useState(false);

  const { score, max } = useMemo(() => {
    let s = 0;
    let m = 0;
    for (const q of questions) {
      m += Number(q.points) || 0;
      if (q.kind === "long_answer") s += Number(manual[q.id] ?? 0);
      else if (isCorrect(q, attempt.answers[q.id])) s += Number(q.points) || 0;
    }
    return { score: s, max: m };
  }, [manual, questions, attempt.answers]);

  const percent = max > 0 ? Math.round((score / max) * 1000) / 10 : 0;

  async function save() {
    setSaving(true);
    await supabase
      .from("quiz_attempts")
      .update({
        manual_grades: manual,
        teacher_comment: comment || null,
        score,
        percent,
        passed: passing != null ? percent >= passing : null,
        needs_grading: false,
      })
      .eq("id", attempt.id);
    setSaving(false);
    onSaved();
  }

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.45)", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "40px 20px", overflowY: "auto", zIndex: 100 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 18, maxWidth: 720, width: "100%", padding: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 24, fontWeight: 700, margin: 0 }}>{studentName} · attempt #{attempt.attempt_no}</h2>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#94a3b8" }}>✕</button>
        </div>
        <p style={{ color: "#64748b", margin: "0 0 18px", fontSize: 14 }}>
          Current total: <strong style={{ color: "#1b7a44" }}>{score}/{max} ({percent}%)</strong>
          {attempt.time_spent_seconds != null && ` · ${Math.round(attempt.time_spent_seconds / 60)} min spent`}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {questions.map((q, i) => {
            const resp = attempt.answers[q.id];
            const manualQ = q.kind === "long_answer";
            const correct = !manualQ && isCorrect(q, resp);
            return (
              <div key={q.id} style={{ border: "1px solid #e2e8f0", borderRadius: 10, padding: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <strong style={{ fontSize: 14 }}>Q{i + 1} · {q.points} pt{q.points !== 1 ? "s" : ""}</strong>
                  {!manualQ && <span style={{ fontWeight: 700, fontSize: 13, color: correct ? "#059669" : "#dc2626" }}>{correct ? "✓ Correct" : "✗ Incorrect"}</span>}
                </div>
                <div style={{ fontSize: 15, marginBottom: 8 }}><PromptText prompt={q.prompt} /></div>
                <div style={{ background: "#f8fafc", borderRadius: 8, padding: "8px 12px", fontSize: 14, color: "#334155" }}>
                  <span style={{ color: "#94a3b8", fontWeight: 700, fontSize: 12 }}>STUDENT ANSWER: </span>
                  {formatResponse(q, resp) || <em style={{ color: "#94a3b8" }}>No answer</em>}
                </div>
                {manualQ && (
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#475569" }}>Award points:</label>
                    <input
                      type="number"
                      min={0}
                      max={q.points}
                      value={manual[q.id] ?? 0}
                      onChange={(e) => {
                        const v = Math.max(0, Math.min(Number(q.points), Number(e.target.value)));
                        setManual((m) => ({ ...m, [q.id]: v }));
                      }}
                      style={{ width: 80, padding: "7px 10px", borderRadius: 8, border: "1px solid #cbd5e1", fontFamily: "inherit", fontSize: 14 }}
                    />
                    <span style={{ color: "#94a3b8", fontSize: 13 }}>/ {q.points}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 16 }}>
          <label style={{ fontSize: 13, fontWeight: 700, color: "#475569", display: "block", marginBottom: 5 }}>Comment to student (optional)</label>
          <textarea value={comment} onChange={(e) => setComment(e.target.value)} style={{ width: "100%", minHeight: 70, padding: "10px 13px", borderRadius: 9, border: "1px solid #cbd5e1", fontFamily: "inherit", fontSize: 14, resize: "vertical", boxSizing: "border-box" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 18 }}>
          <button onClick={onClose} style={{ background: "#fff", border: "1px solid #cbd5e1", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Cancel</button>
          <button onClick={save} disabled={saving} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
            {saving ? "Saving…" : "Save grade"}
          </button>
        </div>
      </div>
    </div>
  );
}

function formatResponse(q: Question, resp: any): string {
  if (resp == null || resp === "") return "";
  switch (q.kind) {
    case "multiple_choice":
      return (q.choices ?? []).find((c: any) => c.id === resp)?.text ?? String(resp);
    case "multiple_select":
      return (q.choices ?? []).filter((c: any) => (resp ?? []).includes(c.id)).map((c: any) => c.text).join(", ");
    case "true_false":
    case "numeric":
    case "short_answer":
    case "fill_blank":
    case "long_answer":
      return String(resp);
    case "ordering":
      return (resp as number[]).map((idx) => (q.choices ?? [])[idx]).join(" → ");
    case "matching": {
      const left = q.choices?.left ?? [];
      const right = q.choices?.right ?? [];
      return left.map((l: string, i: number) => `${l} → ${right[(resp ?? [])[i]] ?? "?"}`).join("; ");
    }
    default:
      return String(resp);
  }
}

function PromptText({ prompt }: { prompt: string }) {
  if (!prompt) return null;
  const parts = prompt.split(/(\$[^$]+\$)/g);
  return (
    <span>
      {parts.map((p, i) =>
        p.startsWith("$") && p.endsWith("$") && p.length > 1 ? <Tex key={i} expr={p.slice(1, -1)} /> : <span key={i}>{p}</span>,
      )}
    </span>
  );
}

function Pill({ children, color, bg }: { children: React.ReactNode; color: string; bg: string }) {
  return <span style={{ fontSize: 12, fontWeight: 700, color, background: bg, padding: "3px 9px", borderRadius: 999 }}>{children}</span>;
}

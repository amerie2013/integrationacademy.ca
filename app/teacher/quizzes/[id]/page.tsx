"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../../lib/supabase";
import { SiteHeader } from "../../../../components/SiteHeader";
import { Math as Tex } from "../../../../components/Math";
import { MaterialsEditor } from "../../../../components/MaterialsEditor";
import { Question, QKind, QKIND_LABELS, newQuestion, SHOW_ANSWERS_OPTIONS } from "../../../../lib/quiz";
import { exprToTex } from "../../../../lib/mathcheck";

type Settings = {
  title: string;
  description: string;
  time_limit_minutes: number | null;
  available_from: string;
  available_until: string;
  due_date: string;
  attempts_allowed: number | null;
  shuffle_questions: boolean;
  shuffle_choices: boolean;
  one_question_per_page: boolean;
  allow_backtracking: boolean;
  passing_score: number | null;
  show_answers: string;
  show_score: boolean;
  published: boolean;
};

const ALL_KINDS: QKind[] = [
  "multiple_choice",
  "multiple_select",
  "true_false",
  "numeric",
  "short_answer",
  "fill_blank",
  "matching",
  "ordering",
  "long_answer",
];

const toLocal = (iso: string | null) => (iso ? new Date(iso).toISOString().slice(0, 16) : "");
const toIso = (local: string) => (local ? new Date(local).toISOString() : null);

export default function QuizEditorPage() {
  const router = useRouter();
  const params = useParams();
  const quizId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [courseId, setCourseId] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [s, setS] = useState<Settings>({
    title: "",
    description: "",
    time_limit_minutes: null,
    available_from: "",
    available_until: "",
    due_date: "",
    attempts_allowed: 1,
    shuffle_questions: false,
    shuffle_choices: false,
    one_question_per_page: false,
    allow_backtracking: true,
    passing_score: 50,
    show_answers: "after_submit",
    show_score: true,
    published: false,
  });

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "admin") return router.push("/classes");
      const { data: q } = await supabase.from("quizzes").select("*").eq("id", quizId).single();
      if (!q) return router.push("/teacher");
      setCourseId(q.course_id);
      setS({
        title: q.title ?? "",
        description: q.description ?? "",
        time_limit_minutes: q.time_limit_minutes,
        available_from: toLocal(q.available_from),
        available_until: toLocal(q.available_until),
        due_date: toLocal(q.due_date),
        attempts_allowed: q.attempts_allowed,
        shuffle_questions: !!q.shuffle_questions,
        shuffle_choices: !!q.shuffle_choices,
        one_question_per_page: !!q.one_question_per_page,
        allow_backtracking: q.allow_backtracking ?? true,
        passing_score: q.passing_score,
        show_answers: q.show_answers ?? "after_submit",
        show_score: q.show_score ?? true,
        published: !!q.published,
      });
      const { data: qq } = await supabase.from("quiz_questions").select("*").eq("quiz_id", quizId).order("position");
      setQuestions((qq ?? []) as Question[]);
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizId]);

  function patchQ(id: string, fields: Partial<any>) {
    setQuestions((qs) => qs.map((q) => (q.id === id ? { ...q, ...fields } : q)));
  }
  function addQ(kind: QKind) {
    setQuestions((qs) => [...qs, newQuestion(kind, qs.length)]);
    setShowAdd(false);
  }
  function addFromBank(picked: BankRow[]) {
    setQuestions((qs) => [
      ...qs,
      ...picked.map((r, i) => ({
        id: `bank_${Date.now().toString(36)}_${i}`,
        kind: r.kind,
        prompt: r.prompt,
        choices: r.choices ?? undefined,
        answer: r.answer ?? undefined,
        tolerance: r.tolerance ?? null,
        points: r.points ?? 1,
        feedback: r.feedback ?? "",
        position: qs.length + i,
      } as Question)),
    ]);
    setShowBank(false);
  }
  function removeQ(id: string) {
    setQuestions((qs) => qs.filter((q) => q.id !== id));
  }
  function moveQ(id: string, dir: -1 | 1) {
    setQuestions((qs) => {
      const i = qs.findIndex((q) => q.id === id);
      const j = i + dir;
      if (i < 0 || j < 0 || j >= qs.length) return qs;
      const copy = [...qs];
      [copy[i], copy[j]] = [copy[j], copy[i]];
      return copy;
    });
  }

  async function save() {
    await supabase
      .from("quizzes")
      .update({
        title: s.title,
        description: s.description || null,
        time_limit_minutes: s.time_limit_minutes,
        available_from: toIso(s.available_from),
        available_until: toIso(s.available_until),
        due_date: toIso(s.due_date),
        attempts_allowed: s.attempts_allowed,
        shuffle_questions: s.shuffle_questions,
        shuffle_choices: s.shuffle_choices,
        one_question_per_page: s.one_question_per_page,
        allow_backtracking: s.allow_backtracking,
        passing_score: s.passing_score,
        show_answers: s.show_answers,
        show_score: s.show_score,
        published: s.published,
      })
      .eq("id", quizId);

    // Replace questions: delete then insert (simple + reliable).
    await supabase.from("quiz_questions").delete().eq("quiz_id", quizId);
    if (questions.length) {
      await supabase.from("quiz_questions").insert(
        questions.map((q, i) => ({
          quiz_id: quizId,
          kind: q.kind,
          prompt: q.prompt,
          image_url: q.image_url || null,
          choices: q.choices ?? null,
          answer: q.answer ?? null,
          tolerance: q.tolerance ?? null,
          points: q.points,
          feedback: q.feedback || null,
          position: i,
        })),
      );
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  }

  if (loading) {
    return (
      <main>
        <SiteHeader />
        <div style={{ padding: 48, color: "#64748b" }}>Loading…</div>
      </main>
    );
  }

  const totalPoints = questions.reduce((sum, q) => sum + (Number(q.points) || 0), 0);

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "28px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          {courseId && (
            <Link href={`/teacher/courses/${courseId}`} style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
              ← Back to course
            </Link>
          )}
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <label style={{ display: "flex", gap: 7, alignItems: "center", fontSize: 14, fontWeight: 600, color: "#334155" }}>
              <input type="checkbox" checked={s.published} onChange={(e) => setS({ ...s, published: e.target.checked })} /> Published
            </label>
            <button onClick={save} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
              {saved ? "Saved ✓" : "Save quiz"}
            </button>
          </div>
        </div>

        <input
          value={s.title}
          onChange={(e) => setS({ ...s, title: e.target.value })}
          placeholder="Quiz title"
          style={{ width: "100%", fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, border: "none", outline: "none", marginBottom: 6, background: "transparent" }}
        />
        <textarea
          value={s.description}
          onChange={(e) => setS({ ...s, description: e.target.value })}
          placeholder="Description / instructions (optional)"
          style={{ ...field, minHeight: 56, resize: "vertical", marginBottom: 8 }}
        />

        {/* PDF worksheet + downloadable materials */}
        <MaterialsEditor ownerType="quiz" ownerId={quizId} />
        <div style={{ height: 24 }} />

        {/* SETTINGS */}
        <Card title="Settings">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <Field label="Time limit (minutes, blank = none)">
              <input type="number" value={s.time_limit_minutes ?? ""} onChange={(e) => setS({ ...s, time_limit_minutes: e.target.value === "" ? null : Number(e.target.value) })} style={field} />
            </Field>
            <Field label="Attempts allowed (blank = unlimited)">
              <input type="number" value={s.attempts_allowed ?? ""} onChange={(e) => setS({ ...s, attempts_allowed: e.target.value === "" ? null : Number(e.target.value) })} style={field} />
            </Field>
            <Field label="Opens at">
              <input type="datetime-local" value={s.available_from} onChange={(e) => setS({ ...s, available_from: e.target.value })} style={field} />
            </Field>
            <Field label="Closes at">
              <input type="datetime-local" value={s.available_until} onChange={(e) => setS({ ...s, available_until: e.target.value })} style={field} />
            </Field>
            <Field label="Due date">
              <input type="datetime-local" value={s.due_date} onChange={(e) => setS({ ...s, due_date: e.target.value })} style={field} />
            </Field>
            <Field label="Passing score (%)">
              <input type="number" value={s.passing_score ?? ""} onChange={(e) => setS({ ...s, passing_score: e.target.value === "" ? null : Number(e.target.value) })} style={field} />
            </Field>
            <Field label="Show correct answers">
              <select value={s.show_answers} onChange={(e) => setS({ ...s, show_answers: e.target.value })} style={field}>
                {SHOW_ANSWERS_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </Field>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 18, marginTop: 16 }}>
            <Check label="Shuffle questions" checked={s.shuffle_questions} onChange={(v) => setS({ ...s, shuffle_questions: v })} />
            <Check label="Shuffle answer choices" checked={s.shuffle_choices} onChange={(v) => setS({ ...s, shuffle_choices: v })} />
            <Check label="One question per page" checked={s.one_question_per_page} onChange={(v) => setS({ ...s, one_question_per_page: v })} />
            <Check label="Allow going back" checked={s.allow_backtracking} onChange={(v) => setS({ ...s, allow_backtracking: v })} />
            <Check label="Show score after submit" checked={s.show_score} onChange={(v) => setS({ ...s, show_score: v })} />
          </div>
        </Card>

        {/* QUESTIONS */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "28px 0 14px" }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>
            Questions <span style={{ color: "#94a3b8", fontWeight: 600, fontSize: 15 }}>· {questions.length} · {totalPoints} pts</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {questions.map((q, i) => (
            <QuestionEditor key={q.id} q={q} index={i} count={questions.length} patch={patchQ} remove={removeQ} move={moveQ} />
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          <div style={{ flex: 1, position: "relative" }}>
            <button onClick={() => setShowAdd((x) => !x)} style={{ background: "#0f172a", color: "#fff", border: "none", borderRadius: 10, padding: "12px 20px", fontWeight: 700, fontSize: 15, cursor: "pointer", width: "100%" }}>
              + Add question
            </button>
            {showAdd && (
              <div style={{ position: "absolute", top: "100%", left: 0, right: 0, marginTop: 6, background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, boxShadow: "0 12px 40px rgba(15,23,42,0.15)", padding: 8, zIndex: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
                {ALL_KINDS.map((k) => (
                  <button key={k} onClick={() => addQ(k)} style={{ textAlign: "left", background: "none", border: "none", padding: "9px 12px", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer", color: "#334155" }}>
                    {QKIND_LABELS[k]}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => setShowBank(true)} disabled={!courseId} style={{ flex: 1, background: "#1b7a44", color: "#fff", border: "none", borderRadius: 10, padding: "12px 20px", fontWeight: 700, fontSize: 15, cursor: courseId ? "pointer" : "default", opacity: courseId ? 1 : 0.6 }}>
            📋 Add from question bank
          </button>
        </div>
      </div>
      {showBank && courseId && (
        <BankPicker courseId={courseId} onClose={() => setShowBank(false)} onAdd={addFromBank} />
      )}
    </main>
  );
}

// ── Question editor ──────────────────────────────────────────
function QuestionEditor({
  q,
  index,
  count,
  patch,
  remove,
  move,
}: {
  q: Question;
  index: number;
  count: number;
  patch: (id: string, f: Partial<any>) => void;
  remove: (id: string) => void;
  move: (id: string, d: -1 | 1) => void;
}) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span style={{ fontSize: 12, fontWeight: 800, color: "#1b7a44", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          {index + 1}. {QKIND_LABELS[q.kind]}
        </span>
        <span style={{ display: "flex", gap: 4 }}>
          <Mini onClick={() => move(q.id, -1)} disabled={index === 0}>↑</Mini>
          <Mini onClick={() => move(q.id, 1)} disabled={index === count - 1}>↓</Mini>
          <Mini onClick={() => remove(q.id)} danger>✕</Mini>
        </span>
      </div>

      <label style={smallLbl}>Question prompt (supports $LaTeX$)</label>
      <textarea value={q.prompt} onChange={(e) => patch(q.id, { prompt: e.target.value })} style={{ ...field, minHeight: 52, resize: "vertical" }} />
      {q.prompt.includes("$") && (
        <div style={{ background: "#f8fafc", borderRadius: 8, padding: "6px 10px", margin: "6px 0", fontSize: 14 }}>
          <Tex expr={q.prompt.replace(/\$/g, "")} />
        </div>
      )}

      <div style={{ marginTop: 10 }}>
        <AnswerEditor q={q} patch={patch} />
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
        <div style={{ width: 110 }}>
          <label style={smallLbl}>Points</label>
          <input type="number" value={q.points} onChange={(e) => patch(q.id, { points: Number(e.target.value) })} style={field} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={smallLbl}>Image URL (optional figure)</label>
          <input value={q.image_url ?? ""} onChange={(e) => patch(q.id, { image_url: e.target.value })} style={field} />
        </div>
      </div>
      <div style={{ marginTop: 10 }}>
        <label style={smallLbl}>Feedback shown after answering (optional)</label>
        <input value={q.feedback ?? ""} onChange={(e) => patch(q.id, { feedback: e.target.value })} style={field} />
      </div>
    </div>
  );
}

function AnswerEditor({ q, patch }: { q: Question; patch: (id: string, f: Partial<any>) => void }) {
  const choices = q.choices;

  if (q.kind === "multiple_choice" || q.kind === "multiple_select") {
    const list: { id: string; text: string }[] = choices ?? [];
    const selected: string[] = q.kind === "multiple_select" ? (q.answer ?? []) : [q.answer];
    function toggle(id: string) {
      if (q.kind === "multiple_choice") patch(q.id, { answer: id });
      else {
        const set = new Set<string>(q.answer ?? []);
        set.has(id) ? set.delete(id) : set.add(id);
        patch(q.id, { answer: [...set] });
      }
    }
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={smallLbl}>Choices — mark the correct {q.kind === "multiple_select" ? "answers" : "answer"}</label>
        {list.map((c, i) => (
          <div key={c.id} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input
              type={q.kind === "multiple_select" ? "checkbox" : "radio"}
              checked={selected.includes(c.id)}
              onChange={() => toggle(c.id)}
            />
            <input
              value={c.text}
              onChange={(e) => {
                const copy = [...list];
                copy[i] = { ...c, text: e.target.value };
                patch(q.id, { choices: copy });
              }}
              style={{ ...field, flex: 1 }}
              placeholder={`Choice ${c.id.toUpperCase()}`}
            />
            <Mini onClick={() => patch(q.id, { choices: list.filter((_, j) => j !== i) })} danger>✕</Mini>
          </div>
        ))}
        <button
          onClick={() => {
            const nextId = String.fromCharCode(97 + list.length);
            patch(q.id, { choices: [...list, { id: nextId, text: "" }] });
          }}
          style={addSmall}
        >
          + Add choice
        </button>
      </div>
    );
  }

  if (q.kind === "true_false") {
    return (
      <div style={{ display: "flex", gap: 18 }}>
        {["true", "false"].map((v) => (
          <label key={v} style={{ display: "flex", gap: 6, alignItems: "center", fontWeight: 600, textTransform: "capitalize" }}>
            <input type="radio" checked={String(q.answer) === v} onChange={() => patch(q.id, { answer: v })} /> {v}
          </label>
        ))}
      </div>
    );
  }

  if (q.kind === "numeric") {
    return (
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ flex: 1 }}>
          <label style={smallLbl}>Correct value</label>
          <input type="number" value={q.answer ?? 0} onChange={(e) => patch(q.id, { answer: Number(e.target.value) })} style={field} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={smallLbl}>± Tolerance</label>
          <input type="number" value={q.tolerance ?? 0} onChange={(e) => patch(q.id, { tolerance: Number(e.target.value) })} style={field} />
        </div>
      </div>
    );
  }

  if (q.kind === "short_answer" || q.kind === "fill_blank") {
    const list: string[] = Array.isArray(q.answer) ? q.answer : [""];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={smallLbl}>{q.kind === "fill_blank" ? "Use ___ in the prompt. " : ""}Accepted answers (case-insensitive)</label>
        {list.map((a, i) => (
          <div key={i} style={{ display: "flex", gap: 8 }}>
            <input
              value={a}
              onChange={(e) => {
                const copy = [...list];
                copy[i] = e.target.value;
                patch(q.id, { answer: copy });
              }}
              style={{ ...field, flex: 1 }}
            />
            <Mini onClick={() => patch(q.id, { answer: list.filter((_, j) => j !== i) })} danger>✕</Mini>
          </div>
        ))}
        <button onClick={() => patch(q.id, { answer: [...list, ""] })} style={addSmall}>+ Add accepted answer</button>
      </div>
    );
  }

  if (q.kind === "matching") {
    const left: string[] = choices?.left ?? [];
    const right: string[] = choices?.right ?? [];
    const ans: number[] = q.answer ?? [];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={smallLbl}>Matching pairs — set the correct right-hand match for each left item</label>
        {left.map((l, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input value={l} onChange={(e) => { const c = [...left]; c[i] = e.target.value; patch(q.id, { choices: { left: c, right } }); }} style={{ ...field, flex: 1 }} placeholder={`Left ${i + 1}`} />
            <span>→</span>
            <select value={ans[i] ?? 0} onChange={(e) => { const a = [...ans]; a[i] = Number(e.target.value); patch(q.id, { answer: a }); }} style={{ ...field, width: 130 }}>
              {right.map((r, j) => (
                <option key={j} value={j}>{r || `Right ${j + 1}`}</option>
              ))}
            </select>
          </div>
        ))}
        <label style={{ ...smallLbl, marginTop: 6 }}>Right-hand options</label>
        {right.map((r, j) => (
          <div key={j} style={{ display: "flex", gap: 8 }}>
            <input value={r} onChange={(e) => { const c = [...right]; c[j] = e.target.value; patch(q.id, { choices: { left, right: c } }); }} style={{ ...field, flex: 1 }} placeholder={`Right ${j + 1}`} />
          </div>
        ))}
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => patch(q.id, { choices: { left: [...left, ""], right }, answer: [...ans, 0] })} style={addSmall}>+ Left</button>
          <button onClick={() => patch(q.id, { choices: { left, right: [...right, ""] } })} style={addSmall}>+ Right</button>
        </div>
      </div>
    );
  }

  if (q.kind === "ordering") {
    const items: string[] = choices ?? [];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={smallLbl}>Items in the CORRECT order (students see them shuffled)</label>
        {items.map((it, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ width: 22, color: "#94a3b8", fontWeight: 700 }}>{i + 1}</span>
            <input value={it} onChange={(e) => { const c = [...items]; c[i] = e.target.value; patch(q.id, { choices: c, answer: c.map((_, k) => k) }); }} style={{ ...field, flex: 1 }} />
            <Mini onClick={() => { const c = items.filter((_, j) => j !== i); patch(q.id, { choices: c, answer: c.map((_, k) => k) }); }} danger>✕</Mini>
          </div>
        ))}
        <button onClick={() => { const c = [...items, ""]; patch(q.id, { choices: c, answer: c.map((_, k) => k) }); }} style={addSmall}>+ Add item</button>
      </div>
    );
  }

  // long_answer
  return <div style={{ fontSize: 13, color: "#64748b", fontStyle: "italic" }}>Long answer — graded manually by the instructor.</div>;
}

// ── small UI helpers ─────────────────────────────────────────
const field: React.CSSProperties = {
  width: "100%",
  padding: "9px 12px",
  borderRadius: 8,
  border: "1px solid #cbd5e1",
  fontSize: 14,
  fontFamily: "inherit",
  outline: "none",
  boxSizing: "border-box",
};
const smallLbl: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 4 };
const addSmall: React.CSSProperties = { alignSelf: "flex-start", background: "#e7f6ec", color: "#1b7a44", border: "none", borderRadius: 8, padding: "7px 13px", fontWeight: 700, fontSize: 13, cursor: "pointer" };

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 20 }}>
      <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 16px" }}>{title}</h3>
      {children}
    </div>
  );
}
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label style={smallLbl}>{label}</label>
      {children}
    </div>
  );
}
function Check({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label style={{ display: "flex", gap: 7, alignItems: "center", fontSize: 14, fontWeight: 600, color: "#334155" }}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} /> {label}
    </label>
  );
}
function Mini({ children, onClick, disabled, danger }: { children: React.ReactNode; onClick: () => void; disabled?: boolean; danger?: boolean }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{ width: 28, height: 28, borderRadius: 7, border: "1px solid #e2e8f0", background: "#fff", color: danger ? "#dc2626" : "#475569", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.4 : 1, fontSize: 13, fontWeight: 700 }}>
      {children}
    </button>
  );
}

// ── Question-bank picker (course-scoped) ─────────────────────
type BankRow = { id: string; topic: string | null; difficulty: string; kind: QKind; prompt: string; choices: any; answer: any; tolerance: number | null; points: number; feedback: string | null };
const BANK_DIFFS = ["easy", "medium", "hard"];
const BANK_KINDS: QKind[] = ["multiple_choice", "multiple_select", "true_false", "numeric", "math_expr", "short_answer", "fill_blank", "matching", "ordering"];

function BankPrompt({ prompt }: { prompt: string }) {
  if (!prompt) return null;
  const parts = prompt.split(/(\$[^$]+\$)/g);
  return <span>{parts.map((p, i) => (p.startsWith("$") && p.endsWith("$") && p.length > 1 ? <Tex key={i} expr={p.slice(1, -1)} /> : <span key={i}>{p}</span>))}</span>;
}

function BankPicker({ courseId, onClose, onAdd }: { courseId: string; onClose: () => void; onAdd: (rows: BankRow[]) => void }) {
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<BankRow[]>([]);
  const [fTopic, setFTopic] = useState("all");
  const [fDiff, setFDiff] = useState("all");
  const [fKind, setFKind] = useState("all");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  useEffect(() => {
    (async () => {
      const byId = new Map<string, BankRow>();
      const PAGE = 1000;
      for (let from = 0; ; from += PAGE) {
        const { data, error } = await supabase
          .from("bank_questions").select("*").eq("course_id", courseId)
          .order("topic").order("difficulty").order("id").range(from, from + PAGE - 1);
        if (error || !data || data.length === 0) break;
        for (const r of data as BankRow[]) byId.set(r.id, r);
        if (data.length < PAGE) break;
      }
      setRows([...byId.values()]);
      setLoading(false);
    })();
  }, [courseId]);

  const topics = [...new Set(rows.map((r) => r.topic).filter(Boolean))] as string[];
  const filtered = rows.filter((r) => (fTopic === "all" || r.topic === fTopic) && (fDiff === "all" || r.difficulty === fDiff) && (fKind === "all" || r.kind === fKind));
  const allShownSelected = filtered.length > 0 && filtered.every((r) => selected.has(r.id));
  function toggle(id: string) { setSelected((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; }); }
  function toggleAll() {
    setSelected((s) => { const n = new Set(s); if (filtered.every((r) => n.has(r.id))) filtered.forEach((r) => n.delete(r.id)); else filtered.forEach((r) => n.add(r.id)); return n; });
  }
  function add() { onAdd(rows.filter((r) => selected.has(r.id))); }

  const fld: React.CSSProperties = { padding: "8px 11px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 14, fontFamily: "inherit", background: "#fff" };

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.45)", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "32px 18px", overflowY: "auto", zIndex: 100 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 16, maxWidth: 760, width: "100%", padding: 24, maxHeight: "90vh", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, margin: 0 }}>Question bank</h2>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#94a3b8" }}>×</button>
        </div>
        <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 14px" }}>Pick questions to add to this quiz.</p>
        {loading ? (
          <div style={{ padding: 40, color: "#64748b" }}>Loading bank…</div>
        ) : rows.length === 0 ? (
          <div style={{ padding: 24, color: "#64748b" }}>No bank questions for this course yet.</div>
        ) : (
          <>
            <div style={{ display: "flex", gap: 10, marginBottom: 12, flexWrap: "wrap", alignItems: "flex-end" }}>
              <select value={fTopic} onChange={(e) => setFTopic(e.target.value)} style={fld}><option value="all">All topics</option>{topics.map((t) => <option key={t} value={t}>{t}</option>)}</select>
              <select value={fDiff} onChange={(e) => setFDiff(e.target.value)} style={fld}><option value="all">All difficulty</option>{BANK_DIFFS.map((d) => <option key={d} value={d}>{d}</option>)}</select>
              <select value={fKind} onChange={(e) => setFKind(e.target.value)} style={fld}><option value="all">All types</option>{BANK_KINDS.map((k) => <option key={k} value={k}>{QKIND_LABELS[k]}</option>)}</select>
              <button onClick={toggleAll} disabled={filtered.length === 0} style={{ background: "#e7f6ec", color: "#1b7a44", border: "1px solid #bfe3cd", borderRadius: 8, padding: "8px 12px", fontWeight: 700, fontSize: 13, cursor: filtered.length === 0 ? "default" : "pointer" }}>{allShownSelected ? "Deselect all" : `Select all ${filtered.length}`}</button>
              <span style={{ marginLeft: "auto", color: "#64748b", fontSize: 13 }}>{filtered.length} of {rows.length}</span>
            </div>
            <div style={{ overflowY: "auto", display: "flex", flexDirection: "column", gap: 7, flex: 1, minHeight: 120 }}>
              {filtered.map((r) => (
                <label key={r.id} style={{ background: selected.has(r.id) ? "#f5f3ff" : "#fff", border: `1px solid ${selected.has(r.id) ? "#bfe3cd" : "#e2e8f0"}`, borderRadius: 10, padding: "9px 12px", display: "flex", alignItems: "flex-start", gap: 11, cursor: "pointer" }}>
                  <input type="checkbox" checked={selected.has(r.id)} onChange={() => toggle(r.id)} style={{ width: 17, height: 17, cursor: "pointer", flexShrink: 0, marginTop: 2 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 7, marginBottom: 2, flexWrap: "wrap", alignItems: "center" }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#1b7a44", background: "#e7f6ec", padding: "1px 7px", borderRadius: 999, textTransform: "capitalize" }}>{r.difficulty}</span>
                      <span style={{ fontSize: 11, fontWeight: 700, color: "#0d9488", background: "#ecfdf5", padding: "1px 7px", borderRadius: 999 }}>{QKIND_LABELS[r.kind] ?? r.kind}</span>
                      {r.topic && <span style={{ fontSize: 11, color: "#94a3b8" }}>{r.topic}</span>}
                    </div>
                    <div style={{ fontSize: 14, lineHeight: 1.45 }}><BankPrompt prompt={r.prompt} /></div>
                    <BankDetail r={r} />
                  </div>
                </label>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 16, borderTop: "1px solid #f1f5f9", paddingTop: 14 }}>
              <button onClick={onClose} style={{ background: "#fff", border: "1px solid #cbd5e1", borderRadius: 9, padding: "10px 18px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Cancel</button>
              <button onClick={add} disabled={selected.size === 0} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: selected.size === 0 ? "default" : "pointer", opacity: selected.size === 0 ? 0.6 : 1 }}>Add {selected.size || ""} question{selected.size === 1 ? "" : "s"}</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Shows the complete question — choices (correct ones marked), the answer for
// other types, and any feedback — so a teacher can read it fully while picking.
function BankAns({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 13, color: "#0d9488", fontWeight: 700, marginTop: 2 }}>{children}</div>;
}
function BankDetail({ r }: { r: BankRow }) {
  const isChoice = r.kind === "multiple_choice" || r.kind === "multiple_select";
  const ansArr: any[] = Array.isArray(r.answer) ? r.answer : [r.answer];
  return (
    <div style={{ marginTop: 8, borderTop: "1px dashed #e2e8f0", paddingTop: 8 }}>
      {isChoice && Array.isArray(r.choices) && (
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {r.choices.map((c: any) => {
            const correct = ansArr.includes(c.id);
            return (
              <div key={c.id} style={{ fontSize: 13, display: "flex", gap: 6, color: correct ? "#0d9488" : "#475569", fontWeight: correct ? 700 : 400 }}>
                <span style={{ flexShrink: 0 }}>{correct ? "✓" : "○"}</span>
                <span><BankPrompt prompt={c.text} /></span>
              </div>
            );
          })}
        </div>
      )}
      {r.kind === "true_false" && <BankAns>Answer: {String(r.answer) === "true" ? "True" : "False"}</BankAns>}
      {r.kind === "numeric" && <BankAns>Answer: {String(r.answer)}{r.tolerance ? ` (± ${r.tolerance})` : ""}</BankAns>}
      {r.kind === "math_expr" && <BankAns>Answer: <Tex expr={exprToTex(String(r.answer ?? ""))} /></BankAns>}
      {(r.kind === "fill_blank" || r.kind === "short_answer") && <BankAns>Accepted: {ansArr.map(String).join("   |   ")}</BankAns>}
      {(r.kind === "matching" || r.kind === "ordering") && <BankAns>Answer: {JSON.stringify(r.answer)}</BankAns>}
      {r.feedback && <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>💡 <BankPrompt prompt={r.feedback} /></div>}
    </div>
  );
}

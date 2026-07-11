"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import { SiteHeader } from "../../../components/SiteHeader";
import { Math as Tex } from "../../../components/Math";
import { MathField } from "../../../components/MathField";
import { Question, QKind, QKIND_LABELS, newQuestion } from "../../../lib/quiz";
import { exprToTex } from "../../../lib/mathcheck";

type BankRow = Question & { topic: string | null; difficulty: string; course_id: string; lesson_id: string | null };

const KINDS: QKind[] = ["multiple_choice", "multiple_select", "true_false", "numeric", "math_expr", "short_answer", "fill_blank", "matching", "ordering"];
const DIFFS = ["easy", "medium", "hard"];

export default function QuestionBankPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [courseId, setCourseId] = useState<string | null>(null);
  const [rows, setRows] = useState<BankRow[]>([]);
  const [fDiff, setFDiff] = useState("all");
  const [fKind, setFKind] = useState("all");
  const [fTopic, setFTopic] = useState("all");
  const [editing, setEditing] = useState<any | null>(null); // {id?, topic, difficulty, ...Question}
  const [userId, setUserId] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [building, setBuilding] = useState(false);
  const [showAll, setShowAll] = useState(true);

  function toggleSel(id: string) {
    setSelected((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }

  async function load(cid: string) {
    // Fetch ALL questions in pages — Supabase caps a single request at 1000 rows,
    // and the bank has well over that, so without paging later topics vanish.
    const byId = new Map<string, BankRow>();
    const PAGE = 1000;
    for (let from = 0; ; from += PAGE) {
      const { data, error } = await supabase
        .from("bank_questions")
        .select("*")
        .eq("course_id", cid)
        .order("topic")
        .order("difficulty")
        .order("id") // stable tiebreaker so .range() paging can't repeat/skip rows
        .range(from, from + PAGE - 1);
      if (error || !data || data.length === 0) break;
      for (const r of data as BankRow[]) byId.set(r.id, r); // dedupe defensively
      if (data.length < PAGE) break;
    }
    setRows([...byId.values()]);
  }

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      setUserId(session.user.id);
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "admin") return router.push("/classes");
      const { data: course } = await supabase.from("courses").select("id").eq("code", "MTH1W").single();
      if (course) { setCourseId(course.id); await load(course.id); }
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const topics = useMemo(() => [...new Set(rows.map((r) => r.topic).filter(Boolean))] as string[], [rows]);
  const filtered = rows.filter((r) => (fDiff === "all" || r.difficulty === fDiff) && (fKind === "all" || r.kind === fKind) && (fTopic === "all" || r.topic === fTopic));
  const allFilteredSelected = filtered.length > 0 && filtered.every((r) => selected.has(r.id));
  function toggleAllFiltered() {
    setSelected((s) => {
      const n = new Set(s);
      if (filtered.every((r) => n.has(r.id))) filtered.forEach((r) => n.delete(r.id));
      else filtered.forEach((r) => n.add(r.id));
      return n;
    });
  }

  function startNew() {
    setEditing({ ...newQuestion("multiple_choice", 0), topic: topics[0] ?? "1.1 Number Sets & Their Subsets", difficulty: "easy" });
  }
  function startEdit(r: BankRow) {
    setEditing({ ...r });
  }
  async function save() {
    if (!courseId || !editing) return;
    const payload: any = {
      course_id: courseId,
      topic: editing.topic || null,
      difficulty: editing.difficulty,
      kind: editing.kind,
      prompt: editing.prompt,
      choices: editing.choices ?? null,
      answer: editing.answer ?? null,
      tolerance: editing.tolerance ?? null,
      points: editing.points ?? 1,
      feedback: editing.feedback || null,
    };
    if (editing.id) await supabase.from("bank_questions").update(payload).eq("id", editing.id);
    else await supabase.from("bank_questions").insert(payload);
    setEditing(null);
    await load(courseId);
  }
  async function remove(id: string) {
    if (!courseId) return;
    await supabase.from("bank_questions").delete().eq("id", id);
    await load(courseId);
  }

  async function createQuiz(settings: any): Promise<string | null> {
    if (!courseId) return null;
    const items = rows.filter((r) => selected.has(r.id));
    const { data: quiz, error } = await supabase
      .from("quizzes")
      .insert({
        course_id: courseId,
        created_by: userId,
        title: settings.title,
        published: true,
        show_score: true,
        allow_backtracking: true,
        attempts_allowed: settings.attempts,
        time_limit_minutes: settings.timeLimit,
        passing_score: settings.passing,
        shuffle_questions: settings.shuffleQ,
        shuffle_choices: settings.shuffleC,
        show_answers: settings.showAnswers,
      })
      .select("id")
      .single();
    if (error || !quiz) { alert("Could not create quiz: " + (error?.message ?? "")); return null; }
    await supabase.from("quiz_questions").insert(
      items.map((q, i) => ({
        quiz_id: quiz.id, kind: q.kind, prompt: q.prompt, choices: q.choices ?? null,
        answer: q.answer ?? null, tolerance: q.tolerance ?? null, points: q.points ?? 1,
        feedback: q.feedback ?? null, position: i, bank_id: q.id,
      })),
    );
    setSelected(new Set());
    return quiz.id;
  }

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "36px 28px" }}>
        <Link href="/teacher" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Admin dashboard</Link>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "12px 0 20px" }}>
          <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: 0 }}>Question Bank</h1>
          <button onClick={startNew} style={primary}>+ New question</button>
        </div>

        {/* filters */}
        <div style={{ display: "flex", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
          <Filter label="Topic" value={fTopic} onChange={setFTopic} options={["all", ...topics]} />
          <Filter label="Difficulty" value={fDiff} onChange={setFDiff} options={["all", ...DIFFS]} />
          <Filter label="Type" value={fKind} onChange={setFKind} options={["all", ...KINDS]} labels={QKIND_LABELS} />
          <label style={{ marginLeft: "auto", alignSelf: "center", display: "flex", gap: 7, alignItems: "center", fontSize: 14, fontWeight: 600, color: "#334155", cursor: "pointer" }}>
            <input type="checkbox" checked={showAll} onChange={(e) => setShowAll(e.target.checked)} /> Show full questions &amp; answers
          </label>
          <span style={{ alignSelf: "center", color: "#64748b", fontSize: 14 }}>{filtered.length} of {rows.length}</span>
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
          <button onClick={toggleAllFiltered} disabled={filtered.length === 0} style={{ background: "#e7f6ec", color: "#1b7a44", border: "1px solid #bfe3cd", borderRadius: 8, padding: "7px 14px", fontWeight: 700, fontSize: 13, cursor: filtered.length === 0 ? "default" : "pointer" }}>
            {allFilteredSelected ? "Deselect all" : `Select all ${filtered.length} shown`}
          </button>
          {selected.size > 0 && <span style={{ color: "#64748b", fontSize: 13 }}>{selected.size} selected</span>}
        </div>

        {rows.length === 0 ? (
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 24, color: "#64748b" }}>The bank is empty.</div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((r) => (
              <div key={r.id} style={{ background: selected.has(r.id) ? "#f5f3ff" : "#fff", border: `1px solid ${selected.has(r.id) ? "#bfe3cd" : "#e2e8f0"}`, borderRadius: 12, padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <input type="checkbox" checked={selected.has(r.id)} onChange={() => toggleSel(r.id)} style={{ width: 18, height: 18, cursor: "pointer", flexShrink: 0, marginTop: 3 }} title="Select for a quiz" />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 4, flexWrap: "wrap", alignItems: "center" }}>
                    <Badge bg="#e7f6ec" color="#1b7a44">{r.difficulty}</Badge>
                    <Badge bg="#ecfdf5" color="#0d9488">{QKIND_LABELS[r.kind as QKind] ?? r.kind}</Badge>
                    {r.topic && <span style={{ fontSize: 12, color: "#94a3b8" }}>{r.topic}</span>}
                  </div>
                  <div style={{ fontSize: 15, lineHeight: 1.5 }}><PromptText prompt={r.prompt} /></div>
                  {showAll && <QuestionDetail r={r} />}
                </div>
                <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                  <button onClick={() => startEdit(r)} style={mini}>Edit</button>
                  <button onClick={() => remove(r.id)} style={{ ...mini, color: "#dc2626" }}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selected.size > 0 && !building && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "#0f172a", color: "#fff", padding: "14px 28px", display: "flex", justifyContent: "center", alignItems: "center", gap: 16, zIndex: 90, boxShadow: "0 -4px 20px rgba(0,0,0,0.2)" }}>
          <span style={{ fontWeight: 700 }}>{selected.size} question{selected.size !== 1 ? "s" : ""} selected</span>
          <button onClick={() => setSelected(new Set())} style={{ background: "transparent", color: "#cbd5e1", border: "1px solid #334155", borderRadius: 8, padding: "8px 14px", fontWeight: 700, cursor: "pointer" }}>Clear</button>
          <button onClick={() => setBuilding(true)} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontWeight: 700, cursor: "pointer" }}>Build quiz →</button>
        </div>
      )}

      {building && <BuildQuiz count={selected.size} onClose={() => setBuilding(false)} onCreate={createQuiz} />}

      {editing && (
        <Editor editing={editing} setEditing={setEditing} topics={topics} onSave={save} onClose={() => setEditing(null)} />
      )}
    </main>
  );
}

// ── build-a-quiz dialog ──────────────────────────────────────
function BuildQuiz({ count, onClose, onCreate }: { count: number; onClose: () => void; onCreate: (s: any) => Promise<string | null> }) {
  const [s, setS] = useState({ title: "Custom Quiz", attempts: 3 as number | null, timeLimit: null as number | null, passing: 60 as number | null, shuffleQ: true, shuffleC: true, showAnswers: "after_submit" });
  const [saving, setSaving] = useState(false);
  const [doneId, setDoneId] = useState<string | null>(null);
  const set = (f: any) => setS({ ...s, ...f });

  async function go() {
    setSaving(true);
    const id = await onCreate(s);
    setSaving(false);
    if (id) setDoneId(id);
  }

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.45)", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "40px 20px", overflowY: "auto", zIndex: 100 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 16, maxWidth: 520, width: "100%", padding: 26 }}>
        {doneId ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>✅</div>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>Quiz created!</h2>
            <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 18px" }}>{count} questions · published to the course.</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              <Link href={`/teacher/quizzes/${doneId}`} style={{ background: "#1b7a44", color: "#fff", padding: "10px 18px", borderRadius: 9, textDecoration: "none", fontWeight: 700, fontSize: 14 }}>Open quiz editor</Link>
              <button onClick={onClose} style={{ ...miniL, padding: "10px 18px" }}>Done</button>
            </div>
          </div>
        ) : (
          <>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>Build a quiz</h2>
            <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 18px" }}>From {count} selected question{count !== 1 ? "s" : ""}.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div><label style={lblL}>Quiz title</label><input value={s.title} onChange={(e) => set({ title: e.target.value })} style={fieldL} /></div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1 }}><label style={lblL}>Attempts (blank = unlimited)</label><input type="number" value={s.attempts ?? ""} onChange={(e) => set({ attempts: e.target.value === "" ? null : Number(e.target.value) })} style={fieldL} /></div>
                <div style={{ flex: 1 }}><label style={lblL}>Time limit (min, blank = none)</label><input type="number" value={s.timeLimit ?? ""} onChange={(e) => set({ timeLimit: e.target.value === "" ? null : Number(e.target.value) })} style={fieldL} /></div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1 }}><label style={lblL}>Passing score (%)</label><input type="number" value={s.passing ?? ""} onChange={(e) => set({ passing: e.target.value === "" ? null : Number(e.target.value) })} style={fieldL} /></div>
                <div style={{ flex: 1 }}><label style={lblL}>Show answers</label><select value={s.showAnswers} onChange={(e) => set({ showAnswers: e.target.value })} style={fieldL}><option value="after_submit">After submit</option><option value="after_close">After close</option><option value="never">Never</option></select></div>
              </div>
              <label style={{ display: "flex", gap: 7, alignItems: "center", fontSize: 14, fontWeight: 600, color: "#334155" }}><input type="checkbox" checked={s.shuffleQ} onChange={(e) => set({ shuffleQ: e.target.checked })} /> Shuffle question order on each attempt</label>
              <label style={{ display: "flex", gap: 7, alignItems: "center", fontSize: 14, fontWeight: 600, color: "#334155" }}><input type="checkbox" checked={s.shuffleC} onChange={(e) => set({ shuffleC: e.target.checked })} /> Shuffle answer choices</label>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 20 }}>
              <button onClick={onClose} style={{ ...miniL, padding: "10px 18px" }}>Cancel</button>
              <button onClick={go} disabled={saving || !s.title} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{saving ? "Creating…" : "Create quiz"}</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
const fieldL: React.CSSProperties = { width: "100%", padding: "9px 12px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 14, fontFamily: "inherit", outline: "none", boxSizing: "border-box" };
const lblL: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 4 };
const miniL: React.CSSProperties = { background: "#fff", border: "1px solid #cbd5e1", borderRadius: 9, fontWeight: 700, fontSize: 14, cursor: "pointer", color: "#475569" };

// ── editor modal ─────────────────────────────────────────────
function Editor({ editing, setEditing, topics, onSave, onClose }: any) {
  const set = (f: any) => setEditing({ ...editing, ...f });
  function changeKind(kind: QKind) {
    const q = newQuestion(kind, 0);
    setEditing({ ...editing, kind, choices: q.choices, answer: q.answer, tolerance: (q as any).tolerance ?? null });
  }
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.45)", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "32px 20px", overflowY: "auto", zIndex: 100 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 16, maxWidth: 640, width: "100%", padding: 24 }}>
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>{editing.id ? "Edit question" : "New question"}</h2>
        <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
          <div style={{ flex: 1 }}>
            <label style={lbl}>Topic</label>
            <input list="topics" value={editing.topic ?? ""} onChange={(e) => set({ topic: e.target.value })} style={field} />
            <datalist id="topics">{topics.map((t: string) => <option key={t} value={t} />)}</datalist>
          </div>
          <div>
            <label style={lbl}>Difficulty</label>
            <select value={editing.difficulty} onChange={(e) => set({ difficulty: e.target.value })} style={field}>{DIFFS.map((d) => <option key={d} value={d}>{d}</option>)}</select>
          </div>
          <div>
            <label style={lbl}>Type</label>
            <select value={editing.kind} onChange={(e) => changeKind(e.target.value as QKind)} style={field}>{KINDS.map((k) => <option key={k} value={k}>{QKIND_LABELS[k]}</option>)}</select>
          </div>
        </div>
        <label style={lbl}>Prompt (supports $LaTeX$)</label>
        <textarea value={editing.prompt} onChange={(e) => set({ prompt: e.target.value })} rows={6} style={{ ...field, minHeight: 150, lineHeight: 1.5, resize: "vertical" }} />
        {editing.prompt?.includes("$") && <div style={{ background: "#f8fafc", borderRadius: 8, padding: "6px 10px", margin: "6px 0", fontSize: 14 }}><PromptText prompt={editing.prompt} /></div>}
        <div style={{ marginTop: 10 }}><AnswerEditor q={editing} set={set} /></div>
        <div style={{ marginTop: 12 }}>
          <label style={lbl}>Feedback (optional)</label>
          <input value={editing.feedback ?? ""} onChange={(e) => set({ feedback: e.target.value })} style={field} />
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 18 }}>
          <button onClick={onClose} style={{ ...mini, padding: "10px 18px" }}>Cancel</button>
          <button onClick={onSave} style={primary}>{editing.id ? "Save changes" : "Add to bank"}</button>
        </div>
      </div>
    </div>
  );
}

function AnswerEditor({ q, set }: { q: any; set: (f: any) => void }) {
  if (q.kind === "multiple_choice" || q.kind === "multiple_select") {
    const list: { id: string; text: string }[] = q.choices ?? [];
    const sel: string[] = q.kind === "multiple_select" ? (q.answer ?? []) : [q.answer];
    const toggle = (id: string) => {
      if (q.kind === "multiple_choice") set({ answer: id });
      else { const s = new Set<string>(q.answer ?? []); s.has(id) ? s.delete(id) : s.add(id); set({ answer: [...s] }); }
    };
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={lbl}>Choices — tick the correct {q.kind === "multiple_select" ? "answers" : "answer"}</label>
        {list.map((c, i) => (
          <div key={c.id} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input type={q.kind === "multiple_select" ? "checkbox" : "radio"} checked={sel.includes(c.id)} onChange={() => toggle(c.id)} />
            <input value={c.text} onChange={(e) => { const cp = [...list]; cp[i] = { ...c, text: e.target.value }; set({ choices: cp }); }} style={{ ...field, flex: 1 }} placeholder={`Choice ${c.id.toUpperCase()}`} />
            <button onClick={() => set({ choices: list.filter((_, j) => j !== i) })} style={{ ...mini, color: "#dc2626" }}>✕</button>
          </div>
        ))}
        <button onClick={() => set({ choices: [...list, { id: "abcdefgh"[list.length], text: "" }] })} style={addSmall}>+ Add choice</button>
      </div>
    );
  }
  if (q.kind === "true_false") return (
    <div style={{ display: "flex", gap: 18 }}>{["true", "false"].map((v) => (<label key={v} style={{ display: "flex", gap: 6, alignItems: "center", fontWeight: 600, textTransform: "capitalize" }}><input type="radio" checked={String(q.answer) === v} onChange={() => set({ answer: v })} /> {v}</label>))}</div>
  );
  if (q.kind === "numeric") return (
    <div style={{ display: "flex", gap: 12 }}>
      <div style={{ flex: 1 }}><label style={lbl}>Correct value</label><input type="number" value={q.answer ?? 0} onChange={(e) => set({ answer: Number(e.target.value) })} style={field} /></div>
      <div style={{ flex: 1 }}><label style={lbl}>± Tolerance</label><input type="number" value={q.tolerance ?? 0} onChange={(e) => set({ tolerance: Number(e.target.value) })} style={field} /></div>
    </div>
  );
  if (q.kind === "math_expr") return (
    <div>
      <label style={lbl}>Correct expression — students' answers are checked for mathematical equivalence</label>
      <MathField value={typeof q.answer === "string" ? q.answer : ""} onChange={(v) => set({ answer: v })} format="expr" ariaLabel="correct expression"
        placeholder="e.g. (x+1)^2" style={{ border: "1px solid #cbd5e1", borderRadius: 8, padding: "8px 10px", minHeight: 44, fontSize: 18 }} />
      <p style={{ fontSize: 12, color: "#64748b", marginTop: 6 }}>
        Equivalent forms all count: <code>1/2</code> = <code>0.5</code> = <code>2/4</code>, and <code>(x+1)^2</code> = <code>x^2+2x+1</code>. Expressions only (no <code>=</code>).
      </p>
    </div>
  );
  if (q.kind === "short_answer" || q.kind === "fill_blank") {
    const list: string[] = Array.isArray(q.answer) ? q.answer : [""];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={lbl}>{q.kind === "fill_blank" ? "Use ___ in the prompt. " : ""}Accepted answers (any one counts)</label>
        {list.map((a, i) => (
          <div key={i} style={{ display: "flex", gap: 8 }}>
            <input value={a} onChange={(e) => { const cp = [...list]; cp[i] = e.target.value; set({ answer: cp }); }} style={{ ...field, flex: 1 }} />
            <button onClick={() => set({ answer: list.filter((_, j) => j !== i) })} style={{ ...mini, color: "#dc2626" }}>✕</button>
          </div>
        ))}
        <button onClick={() => set({ answer: [...list, ""] })} style={addSmall}>+ Add accepted answer</button>
      </div>
    );
  }
  if (q.kind === "matching") {
    const left: string[] = q.choices?.left ?? [];
    const right: string[] = q.choices?.right ?? [];
    const ans: number[] = q.answer ?? [];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={lbl}>Matching — set the correct right-hand match for each left item</label>
        {left.map((l, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input value={l} onChange={(e) => { const c = [...left]; c[i] = e.target.value; set({ choices: { left: c, right } }); }} style={{ ...field, flex: 1 }} placeholder={`Left ${i + 1}`} />
            <span>→</span>
            <select value={ans[i] ?? 0} onChange={(e) => { const a = [...ans]; a[i] = Number(e.target.value); set({ answer: a }); }} style={{ ...field, width: 130 }}>{right.map((r, j) => <option key={j} value={j}>{r || `Right ${j + 1}`}</option>)}</select>
          </div>
        ))}
        <label style={{ ...lbl, marginTop: 6 }}>Right-hand options</label>
        {right.map((r, j) => (<input key={j} value={r} onChange={(e) => { const c = [...right]; c[j] = e.target.value; set({ choices: { left, right: c } }); }} style={field} placeholder={`Right ${j + 1}`} />))}
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => set({ choices: { left: [...left, ""], right }, answer: [...ans, 0] })} style={addSmall}>+ Left</button>
          <button onClick={() => set({ choices: { left, right: [...right, ""] } })} style={addSmall}>+ Right</button>
        </div>
      </div>
    );
  }
  if (q.kind === "ordering") {
    const items: string[] = q.choices ?? [];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <label style={lbl}>Items in the CORRECT order (students see them shuffled)</label>
        {items.map((it, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ width: 22, color: "#94a3b8", fontWeight: 700 }}>{i + 1}</span>
            <input value={it} onChange={(e) => { const c = [...items]; c[i] = e.target.value; set({ choices: c, answer: c.map((_, k) => k) }); }} style={{ ...field, flex: 1 }} />
            <button onClick={() => { const c = items.filter((_, j) => j !== i); set({ choices: c, answer: c.map((_, k) => k) }); }} style={{ ...mini, color: "#dc2626" }}>✕</button>
          </div>
        ))}
        <button onClick={() => { const c = [...items, ""]; set({ choices: c, answer: c.map((_, k) => k) }); }} style={addSmall}>+ Add item</button>
      </div>
    );
  }
  return null;
}

function PromptText({ prompt }: { prompt: string }) {
  if (!prompt) return null;
  const parts = prompt.split(/(\$[^$]+\$)/g);
  return <span>{parts.map((p, i) => (p.startsWith("$") && p.endsWith("$") && p.length > 1 ? <Tex key={i} expr={p.slice(1, -1)} /> : <span key={i}>{p}</span>))}</span>;
}
function Ans({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 13, color: "#0d9488", fontWeight: 700, marginTop: 2 }}>{children}</div>;
}
// Renders the complete question — choices (correct ones marked) plus the answer
// for other types and any feedback — so the whole question is readable in the list.
function QuestionDetail({ r }: { r: any }) {
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
                <span><PromptText prompt={c.text} /></span>
              </div>
            );
          })}
        </div>
      )}
      {r.kind === "true_false" && <Ans>Answer: {String(r.answer) === "true" ? "True" : "False"}</Ans>}
      {r.kind === "numeric" && <Ans>Answer: {String(r.answer)}{r.tolerance ? ` (± ${r.tolerance})` : ""}</Ans>}
      {r.kind === "math_expr" && <Ans>Answer: <Tex expr={exprToTex(String(r.answer ?? ""))} /></Ans>}
      {(r.kind === "fill_blank" || r.kind === "short_answer") && <Ans>Accepted: {ansArr.map(String).join("   |   ")}</Ans>}
      {(r.kind === "matching" || r.kind === "ordering") && <Ans>Answer: {JSON.stringify(r.answer)}</Ans>}
      {r.feedback && <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 6 }}>💡 <PromptText prompt={r.feedback} /></div>}
    </div>
  );
}
function Filter({ label, value, onChange, options, labels }: { label: string; value: string; onChange: (v: string) => void; options: string[]; labels?: Record<string, string> }) {
  return (
    <div>
      <label style={{ ...lbl, marginBottom: 3 }}>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} style={field}>{options.map((o) => <option key={o} value={o}>{o === "all" ? "All" : labels?.[o] ?? o}</option>)}</select>
    </div>
  );
}
function Badge({ children, bg, color }: { children: React.ReactNode; bg: string; color: string }) {
  return <span style={{ fontSize: 12, fontWeight: 700, color, background: bg, padding: "2px 8px", borderRadius: 999, textTransform: "capitalize" }}>{children}</span>;
}

const field: React.CSSProperties = { padding: "9px 12px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 14, fontFamily: "inherit", outline: "none", boxSizing: "border-box", background: "#fff" };
const lbl: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 4 };
const primary: React.CSSProperties = { background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 18px", fontWeight: 700, fontSize: 14, cursor: "pointer" };
const mini: React.CSSProperties = { background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "7px 12px", fontWeight: 700, fontSize: 13, cursor: "pointer", color: "#475569" };
const addSmall: React.CSSProperties = { alignSelf: "flex-start", background: "#e7f6ec", color: "#1b7a44", border: "none", borderRadius: 8, padding: "7px 13px", fontWeight: 700, fontSize: 13, cursor: "pointer" };

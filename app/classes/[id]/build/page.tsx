"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../../lib/supabase";
import { SiteHeader } from "../../../../components/SiteHeader";
import { Math as Tex } from "../../../../components/Math";
import { QKind, QKIND_LABELS } from "../../../../lib/quiz";
import { exprToTex } from "../../../../lib/mathcheck";

type BankRow = { id: string; topic: string | null; difficulty: string; kind: QKind; prompt: string; choices: any; answer: any; tolerance: number | null; points: number; feedback: string | null };
type ClassQuiz = { id: string; title: string };

const KINDS: QKind[] = ["multiple_choice", "multiple_select", "true_false", "numeric", "math_expr", "short_answer", "fill_blank", "matching", "ordering"];
const DIFFS = ["easy", "medium", "hard"];

export default function ClassQuizBuilder() {
  const router = useRouter();
  const classId = useParams().id as string;
  const [loading, setLoading] = useState(true);
  const [uid, setUid] = useState<string | null>(null);
  const [cls, setCls] = useState<{ name: string; course_id: string } | null>(null);
  const [rows, setRows] = useState<BankRow[]>([]);
  const [quizzes, setQuizzes] = useState<ClassQuiz[]>([]);
  const [fTopic, setFTopic] = useState("all");
  const [fDiff, setFDiff] = useState("all");
  const [fKind, setFKind] = useState("all");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [building, setBuilding] = useState(false);
  const [showAll, setShowAll] = useState(true);

  async function loadQuizzes() {
    const { data } = await supabase.from("quizzes").select("id, title").eq("class_id", classId).order("created_at", { ascending: false });
    setQuizzes((data ?? []) as ClassQuiz[]);
  }

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      setUid(session.user.id);
      const { data: c } = await supabase.from("classes").select("name, course_id, teacher_id").eq("id", classId).single();
      if (!c) return router.push("/classes");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (c.teacher_id !== session.user.id && me?.role !== "admin") return router.push("/classes");
      setCls({ name: c.name, course_id: c.course_id });
      // Fetch ALL bank questions in pages (Supabase caps one request at 1000 rows;
      // the bank exceeds that, so later subjects would be missing without paging).
      const byId = new Map<string, BankRow>();
      const PAGE = 1000;
      for (let from = 0; ; from += PAGE) {
        const { data: bank, error } = await supabase
          .from("bank_questions")
          .select("*")
          .eq("course_id", c.course_id)
          .order("topic")
          .order("difficulty")
          .order("id") // stable tiebreaker so .range() paging can't repeat/skip rows
          .range(from, from + PAGE - 1);
        if (error || !bank || bank.length === 0) break;
        for (const r of bank as BankRow[]) byId.set(r.id, r); // dedupe defensively
        if (bank.length < PAGE) break;
      }
      setRows([...byId.values()]);
      await loadQuizzes();
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classId]);

  const topics = useMemo(() => [...new Set(rows.map((r) => r.topic).filter(Boolean))] as string[], [rows]);
  const filtered = rows.filter((r) => (fTopic === "all" || r.topic === fTopic) && (fDiff === "all" || r.difficulty === fDiff) && (fKind === "all" || r.kind === fKind));
  function toggle(id: string) { setSelected((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; }); }
  const allFilteredSelected = filtered.length > 0 && filtered.every((r) => selected.has(r.id));
  function toggleAllFiltered() {
    setSelected((s) => {
      const n = new Set(s);
      if (filtered.every((r) => n.has(r.id))) filtered.forEach((r) => n.delete(r.id));
      else filtered.forEach((r) => n.add(r.id));
      return n;
    });
  }

  async function build(settings: any): Promise<string | null> {
    if (!cls) return null;
    const items = rows.filter((r) => selected.has(r.id));
    const { data: quiz, error } = await supabase.from("quizzes").insert({
      course_id: cls.course_id, class_id: classId, created_by: uid, title: settings.title, published: true,
      show_score: true, allow_backtracking: true, attempts_allowed: settings.attempts,
      time_limit_minutes: settings.timeLimit, passing_score: settings.passing,
      shuffle_questions: settings.shuffleQ, shuffle_choices: settings.shuffleC, show_answers: settings.showAnswers,
      due_date: settings.dueDate ? new Date(settings.dueDate).toISOString() : null,
    }).select("id").single();
    if (error || !quiz) { alert("Could not create quiz: " + (error?.message ?? "")); return null; }
    await supabase.from("quiz_questions").insert(items.map((q, i) => ({
      quiz_id: quiz.id, kind: q.kind, prompt: q.prompt, choices: q.choices ?? null, answer: q.answer ?? null,
      tolerance: q.tolerance ?? null, points: q.points ?? 1, feedback: q.feedback ?? null, position: i, bank_id: q.id,
    })));
    setSelected(new Set());
    await loadQuizzes();
    return quiz.id;
  }

  async function del(id: string) {
    await supabase.from("quizzes").delete().eq("id", id);
    await loadQuizzes();
  }

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "32px 28px" }}>
        <Link href="/classes" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← My classes</Link>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, margin: "10px 0 4px" }}>Quizzes — {cls?.name}</h1>
        <p style={{ color: "#64748b", margin: "0 0 22px", fontSize: 15 }}>Pick questions from the bank and build a quiz your students will see in this class.</p>

        {/* existing class quizzes */}
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>Your class quizzes</h2>
        {quizzes.length === 0 ? (
          <div style={{ color: "#64748b", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 18, marginBottom: 26 }}>None yet — select questions below and build one.</div>
        ) : (
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, overflow: "hidden", marginBottom: 26 }}>
            {quizzes.map((q, i) => (
              <div key={q.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderTop: i ? "1px solid #f1f5f9" : "none" }}>
                <span style={{ fontWeight: 600 }}>{q.title}</span>
                <button onClick={() => del(q.id)} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 8, padding: "6px 12px", fontWeight: 700, fontSize: 13, color: "#dc2626", cursor: "pointer" }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {/* bank picker */}
        <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>Question bank</h2>
        <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
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

        <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: 70 }}>
          {filtered.map((r) => (
            <div key={r.id} style={{ background: selected.has(r.id) ? "#f5f3ff" : "#fff", border: `1px solid ${selected.has(r.id) ? "#bfe3cd" : "#e2e8f0"}`, borderRadius: 10, padding: "10px 14px", display: "flex", alignItems: "flex-start", gap: 12 }}>
              <input type="checkbox" checked={selected.has(r.id)} onChange={() => toggle(r.id)} style={{ width: 18, height: 18, cursor: "pointer", flexShrink: 0, marginTop: 3 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 3, flexWrap: "wrap", alignItems: "center" }}>
                  <Badge bg="#e7f6ec" color="#1b7a44">{r.difficulty}</Badge>
                  <Badge bg="#ecfdf5" color="#0d9488">{QKIND_LABELS[r.kind] ?? r.kind}</Badge>
                  {r.topic && <span style={{ fontSize: 12, color: "#94a3b8" }}>{r.topic}</span>}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.5 }}><PromptText prompt={r.prompt} /></div>
                {showAll && <QuestionDetail r={r} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected.size > 0 && !building && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: "#0f172a", color: "#fff", padding: "14px 28px", display: "flex", justifyContent: "center", alignItems: "center", gap: 16, zIndex: 90 }}>
          <span style={{ fontWeight: 700 }}>{selected.size} selected</span>
          <button onClick={() => setSelected(new Set())} style={{ background: "transparent", color: "#cbd5e1", border: "1px solid #334155", borderRadius: 8, padding: "8px 14px", fontWeight: 700, cursor: "pointer" }}>Clear</button>
          <button onClick={() => setBuilding(true)} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontWeight: 700, cursor: "pointer" }}>Build quiz →</button>
        </div>
      )}
      {building && <BuildModal count={selected.size} topics={topics} defaultTopic={fTopic !== "all" ? fTopic : ""} onClose={() => setBuilding(false)} onCreate={build} />}
    </main>
  );
}

function BuildModal({ count, topics, defaultTopic, onClose, onCreate }: { count: number; topics: string[]; defaultTopic: string; onClose: () => void; onCreate: (s: any) => Promise<string | null> }) {
  const [s, setS] = useState({ topic: defaultTopic, title: "Quiz", attempts: 3 as number | null, timeLimit: 10 as number | null, passing: 80 as number | null, shuffleQ: true, shuffleC: true, showAnswers: "after_submit", dueDate: "" });
  const [saving, setSaving] = useState(false); const [done, setDone] = useState(false);
  const set = (f: any) => setS({ ...s, ...f });
  const topicCode = (s.topic.match(/\d+\.\d+/) ?? [""])[0];
  const baseTitle = s.title.replace(/^\s*\d+\.\d+\s*[—\-:]*\s*/, "").trim() || "Quiz";
  const finalTitle = topicCode ? `${topicCode} — ${baseTitle}` : (s.title.trim() || "Class Quiz");
  async function go() { setSaving(true); const id = await onCreate({ ...s, title: finalTitle }); setSaving(false); if (id) setDone(true); }
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.45)", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "40px 20px", overflowY: "auto", zIndex: 100 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 16, maxWidth: 520, width: "100%", padding: 26 }}>
        {done ? (
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>✅</div>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>Quiz published to your class!</h2>
            <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 18px" }}>{count} questions · your students can take it now.</p>
            <button onClick={onClose} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Done</button>
          </div>
        ) : (
          <>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>Build a quiz</h2>
            <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 18px" }}>From {count} selected question{count !== 1 ? "s" : ""}.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div>
                <label style={lbl}>Topic (places the quiz in order)</label>
                <select value={s.topic} onChange={(e) => set({ topic: e.target.value })} style={field}>
                  <option value="">— none (won't auto-sort) —</option>
                  {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div><label style={lbl}>Quiz name</label><input value={s.title} onChange={(e) => set({ title: e.target.value })} style={field} /></div>
              <div style={{ background: "#f6f8fc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "8px 12px", fontSize: 13, color: "#475569" }}>
                Saved as <strong style={{ color: "#0f172a" }}>{finalTitle}</strong>{topicCode ? ` — appears right after the ${topicCode} content.` : " — appears at the end (no topic chosen)."}
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1 }}><label style={lbl}>Attempts (blank = unlimited)</label><input type="number" value={s.attempts ?? ""} onChange={(e) => set({ attempts: e.target.value === "" ? null : Number(e.target.value) })} style={field} /></div>
                <div style={{ flex: 1 }}><label style={lbl}>Time limit (min)</label><input type="number" value={s.timeLimit ?? ""} onChange={(e) => set({ timeLimit: e.target.value === "" ? null : Number(e.target.value) })} style={field} /></div>
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1 }}><label style={lbl}>Passing score (%)</label><input type="number" value={s.passing ?? ""} onChange={(e) => set({ passing: e.target.value === "" ? null : Number(e.target.value) })} style={field} /></div>
                <div style={{ flex: 1 }}><label style={lbl}>Show answers</label><select value={s.showAnswers} onChange={(e) => set({ showAnswers: e.target.value })} style={field}><option value="after_submit">After submit</option><option value="after_close">After close</option><option value="never">Never</option></select></div>
              </div>
              <div><label style={lbl}>Due date (optional)</label><input type="date" value={s.dueDate} onChange={(e) => set({ dueDate: e.target.value })} style={field} /></div>
              <label style={{ display: "flex", gap: 7, alignItems: "center", fontSize: 14, fontWeight: 600, color: "#334155" }}><input type="checkbox" checked={s.shuffleQ} onChange={(e) => set({ shuffleQ: e.target.checked })} /> Shuffle questions each attempt</label>
              <label style={{ display: "flex", gap: 7, alignItems: "center", fontSize: 14, fontWeight: 600, color: "#334155" }}><input type="checkbox" checked={s.shuffleC} onChange={(e) => set({ shuffleC: e.target.checked })} /> Shuffle answer choices</label>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 20 }}>
              <button onClick={onClose} style={{ background: "#fff", border: "1px solid #cbd5e1", borderRadius: 9, padding: "10px 18px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>Cancel</button>
              <button onClick={go} disabled={saving || !s.title} style={{ background: "#1b7a44", color: "#fff", border: "none", borderRadius: 9, padding: "10px 20px", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>{saving ? "Publishing…" : "Publish to class"}</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function PromptText({ prompt }: { prompt: string }) {
  if (!prompt) return null;
  const parts = prompt.split(/(\$[^$]+\$)/g);
  return <span>{parts.map((p, i) => (p.startsWith("$") && p.endsWith("$") && p.length > 1 ? <Tex key={i} expr={p.slice(1, -1)} /> : <span key={i}>{p}</span>))}</span>;
}
function Ans({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 13, color: "#0d9488", fontWeight: 700, marginTop: 2 }}>{children}</div>;
}
// Shows the complete question — choices (correct ones marked), the answer for
// other types, and any feedback — so a teacher can read it fully while picking.
function QuestionDetail({ r }: { r: BankRow }) {
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
  return (<div><label style={{ ...lbl, marginBottom: 3 }}>{label}</label><select value={value} onChange={(e) => onChange(e.target.value)} style={field}>{options.map((o) => <option key={o} value={o}>{o === "all" ? "All" : labels?.[o] ?? o}</option>)}</select></div>);
}
function Badge({ children, bg, color }: { children: React.ReactNode; bg: string; color: string }) {
  return <span style={{ fontSize: 12, fontWeight: 700, color, background: bg, padding: "2px 8px", borderRadius: 999, textTransform: "capitalize" }}>{children}</span>;
}
const field: React.CSSProperties = { padding: "9px 12px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 14, fontFamily: "inherit", outline: "none", boxSizing: "border-box", background: "#fff" };
const lbl: React.CSSProperties = { fontSize: 12, fontWeight: 700, color: "#475569", display: "block", marginBottom: 4 };

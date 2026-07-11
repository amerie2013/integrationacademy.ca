"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import { SiteHeader } from "../../../components/SiteHeader";
import { Math as Tex } from "../../../components/Math";
import { MathField } from "../../../components/MathField";
import { EqaoFigure } from "../../../components/EqaoFigure";
import { QKind, QKIND_LABELS, newQuestion } from "../../../lib/quiz";
import { STRANDS, strandMeta } from "../../../lib/eqao";

type Row = { id: string; strand: string; difficulty: string; kind: QKind; prompt: string; figure: any; choices: any; answer: any; tolerance: number | null; points: number; feedback: string | null };

const KINDS: QKind[] = ["multiple_choice", "multiple_select", "true_false", "numeric", "math_expr", "short_answer", "fill_blank", "matching", "ordering"];
const DIFFS = ["easy", "medium", "hard"];

export default function EqaoAdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<Row[]>([]);
  const [fStrand, setFStrand] = useState("all");
  const [fDiff, setFDiff] = useState("all");
  const [editing, setEditing] = useState<any | null>(null);

  async function load() {
    const { data } = await supabase.from("eqao_questions").select("*").order("strand").order("difficulty").limit(2000);
    setRows((data ?? []) as Row[]);
  }

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return router.push("/login");
      const { data: me } = await supabase.from("profiles").select("role").eq("id", session.user.id).single();
      if (me?.role !== "admin") return router.push("/classes");
      await load();
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = rows.filter((r) => (fStrand === "all" || r.strand === fStrand) && (fDiff === "all" || r.difficulty === fDiff));

  function startNew() {
    setEditing({ ...newQuestion("multiple_choice", 0), strand: "number", difficulty: "medium", figureSvg: "" });
  }
  function startEdit(r: Row) {
    setEditing({ ...r, figureSvg: r.figure?.type === "svg" ? r.figure.svg : "" });
  }
  async function save() {
    if (!editing) return;
    const figure = editing.figureSvg && editing.figureSvg.trim() ? { type: "svg", svg: editing.figureSvg.trim() } : null;
    const payload: any = {
      strand: editing.strand,
      difficulty: editing.difficulty,
      kind: editing.kind,
      prompt: editing.prompt,
      figure,
      choices: editing.choices ?? null,
      answer: editing.answer ?? null,
      tolerance: editing.tolerance ?? null,
      points: editing.points ?? 1,
      feedback: editing.feedback || null,
    };
    const { error } = editing.id
      ? await supabase.from("eqao_questions").update(payload).eq("id", editing.id)
      : await supabase.from("eqao_questions").insert(payload);
    if (error) { alert("Save failed: " + error.message); return; }
    setEditing(null);
    await load();
  }
  async function remove(id: string) {
    if (!confirm("Delete this question?")) return;
    await supabase.from("eqao_questions").delete().eq("id", id);
    await load();
  }

  if (loading) return (<main><SiteHeader /><div style={{ padding: 48, color: "#64748b" }}>Loading…</div></main>);

  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "36px 28px" }}>
        <Link href="/teacher" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Admin dashboard</Link>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "12px 0 8px" }}>
          <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: 0 }}>EQAO Questions</h1>
          <button onClick={startNew} style={primary}>+ New question</button>
        </div>
        <p style={{ color: "#64748b", fontSize: 14, margin: "0 0 20px", maxWidth: 640 }}>
          Custom questions you add here are mixed into the matching strand's practice sets, alongside the
          auto-generated questions. Add an optional figure by pasting raw SVG.
        </p>

        <div style={{ display: "flex", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
          <Filter label="Strand" value={fStrand} onChange={setFStrand} options={["all", ...STRANDS.map((s) => s.id)]} labels={Object.fromEntries(STRANDS.map((s) => [s.id, s.label]))} />
          <Filter label="Difficulty" value={fDiff} onChange={setFDiff} options={["all", ...DIFFS]} />
          <span style={{ alignSelf: "flex-end", color: "#64748b", fontSize: 14, marginLeft: "auto" }}>{filtered.length} of {rows.length}</span>
        </div>

        {filtered.length === 0 ? (
          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 24, color: "#64748b" }}>No questions yet. Click “New question”.</div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {filtered.map((r) => (
              <div key={r.id} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 12, padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 4, flexWrap: "wrap", alignItems: "center" }}>
                    <Badge bg="#e7f6ec" color="#1b7a44">{strandMeta(r.strand)?.short ?? r.strand}</Badge>
                    <Badge bg="#eef2f7" color="#475569">{r.difficulty}</Badge>
                    <Badge bg="#ecfdf5" color="#0d9488">{QKIND_LABELS[r.kind] ?? r.kind}</Badge>
                    {r.figure && <span style={{ fontSize: 11, color: "#94a3b8" }}>🖼 figure</span>}
                  </div>
                  <div style={{ fontSize: 15, lineHeight: 1.5 }}><PromptText prompt={r.prompt} /></div>
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

      {editing && <Editor editing={editing} setEditing={setEditing} onSave={save} onClose={() => setEditing(null)} />}
    </main>
  );
}

function Editor({ editing, setEditing, onSave, onClose }: any) {
  const set = (f: any) => setEditing({ ...editing, ...f });
  function changeKind(kind: QKind) {
    const q = newQuestion(kind, 0);
    setEditing({ ...editing, kind, choices: q.choices, answer: q.answer, tolerance: (q as any).tolerance ?? null });
  }
  const figurePreview = editing.figureSvg?.trim() ? { type: "svg", svg: editing.figureSvg.trim() } : null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.45)", display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "32px 20px", overflowY: "auto", zIndex: 100 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 16, maxWidth: 640, width: "100%", padding: 24 }}>
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, margin: "0 0 16px" }}>{editing.id ? "Edit question" : "New question"}</h2>
        <div style={{ display: "flex", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 160 }}>
            <label style={lbl}>Strand</label>
            <select value={editing.strand} onChange={(e) => set({ strand: e.target.value })} style={field}>{STRANDS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}</select>
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
        <textarea value={editing.prompt} onChange={(e) => set({ prompt: e.target.value })} rows={4} style={{ ...field, width: "100%", minHeight: 90, lineHeight: 1.5, resize: "vertical" }} />
        {editing.prompt?.includes("$") && <div style={{ background: "#f8fafc", borderRadius: 8, padding: "6px 10px", margin: "6px 0", fontSize: 14 }}><PromptText prompt={editing.prompt} /></div>}

        <div style={{ marginTop: 10 }}><AnswerEditor q={editing} set={set} /></div>

        <div style={{ marginTop: 14 }}>
          <label style={lbl}>Figure — paste raw SVG (optional)</label>
          <textarea value={editing.figureSvg ?? ""} onChange={(e) => set({ figureSvg: e.target.value })} rows={3} placeholder="<svg ...>...</svg>" style={{ ...field, width: "100%", minHeight: 70, fontFamily: "monospace", fontSize: 12, resize: "vertical" }} />
          {figurePreview && <div style={{ marginTop: 6 }}><EqaoFigure figure={figurePreview as any} /></div>}
        </div>

        <div style={{ marginTop: 12 }}>
          <label style={lbl}>Feedback / explanation (optional)</label>
          <input value={editing.feedback ?? ""} onChange={(e) => set({ feedback: e.target.value })} style={{ ...field, width: "100%" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 18 }}>
          <button onClick={onClose} style={{ ...mini, padding: "10px 18px" }}>Cancel</button>
          <button onClick={onSave} style={primary}>{editing.id ? "Save changes" : "Add question"}</button>
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
      <div style={{ flex: 1 }}><label style={lbl}>Correct value</label><input type="number" value={q.answer ?? 0} onChange={(e) => set({ answer: Number(e.target.value) })} style={{ ...field, width: "100%" }} /></div>
      <div style={{ flex: 1 }}><label style={lbl}>± Tolerance</label><input type="number" value={q.tolerance ?? 0} onChange={(e) => set({ tolerance: Number(e.target.value) })} style={{ ...field, width: "100%" }} /></div>
    </div>
  );
  if (q.kind === "math_expr") return (
    <div>
      <label style={lbl}>Correct expression (checked for equivalence)</label>
      <MathField value={typeof q.answer === "string" ? q.answer : ""} onChange={(v) => set({ answer: v })} format="expr" ariaLabel="correct expression" placeholder="e.g. sqrt(13)" style={{ border: "1px solid #cbd5e1", borderRadius: 8, padding: "8px 10px", minHeight: 44, fontSize: 18 }} />
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
        <label style={lbl}>Matching — set the correct right match for each left item</label>
        {left.map((l, i) => (
          <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <input value={l} onChange={(e) => { const c = [...left]; c[i] = e.target.value; set({ choices: { left: c, right } }); }} style={{ ...field, flex: 1 }} placeholder={`Left ${i + 1}`} />
            <span>→</span>
            <select value={ans[i] ?? 0} onChange={(e) => { const a = [...ans]; a[i] = Number(e.target.value); set({ answer: a }); }} style={{ ...field, width: 130 }}>{right.map((r, j) => <option key={j} value={j}>{r || `Right ${j + 1}`}</option>)}</select>
          </div>
        ))}
        <label style={{ ...lbl, marginTop: 6 }}>Right-hand options</label>
        {right.map((r, j) => (<input key={j} value={r} onChange={(e) => { const c = [...right]; c[j] = e.target.value; set({ choices: { left, right: c } }); }} style={{ ...field, width: "100%" }} placeholder={`Right ${j + 1}`} />))}
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

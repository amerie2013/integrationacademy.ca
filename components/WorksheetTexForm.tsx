"use client";

// MTH1W-style form for LaTeX-course worksheets. Fields hold LaTeX (this content
// compiles with Tectonic), organised into intro / key ideas / learn boxes /
// examples / questions / answer key. Edited in-browser; rebuild with
// scripts/rebuild-tex.mjs after saving.

import type { TexWsContent } from "../lib/worksheets";

const inp: React.CSSProperties = { width: "100%", padding: "8px 11px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 13, fontFamily: "JetBrains Mono, ui-monospace, monospace", outline: "none", boxSizing: "border-box" };
const ta: React.CSSProperties = { ...inp, minHeight: 60, resize: "vertical", lineHeight: 1.5 };
const lbl: React.CSSProperties = { fontSize: 11, fontWeight: 700, color: "#64748b", display: "block", marginBottom: 4 };
const card: React.CSSProperties = { background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, padding: 12, marginBottom: 10 };
const addBtn: React.CSSProperties = { background: "#ede9fe", color: "#5b21b6", border: "1px solid #ddd6fe", borderRadius: 9, padding: "8px 14px", fontWeight: 700, fontSize: 13, cursor: "pointer" };
const rmBtn: React.CSSProperties = { background: "none", border: "1px solid #fecaca", color: "#dc2626", borderRadius: 7, padding: "4px 9px", fontSize: 12, fontWeight: 700, cursor: "pointer" };
const secH: React.CSSProperties = { fontSize: 14, fontWeight: 800, color: "#0f172a", margin: "18px 0 8px" };
const chk: React.CSSProperties = { display: "flex", gap: 5, alignItems: "center", fontSize: 12, color: "#475569", fontWeight: 600 };

export function WorksheetTexForm({ content, onChange }: { content: TexWsContent; onChange: (c: TexWsContent) => void }) {
  const c = content;
  const set = (patch: Partial<TexWsContent>) => onChange({ ...c, ...patch });
  const ideas = c.ideas ?? [];
  const learn = c.learn ?? [];
  const examples = c.examples ?? [];
  const questions = c.questions ?? [];
  const answers = c.answers ?? [];

  const setList = <T,>(list: T[], i: number, v: T): T[] => list.map((x, k) => (k === i ? v : x));
  const rm = <T,>(list: T[], i: number): T[] => list.filter((_, k) => k !== i);

  return (
    <div>
      <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 9, padding: "9px 12px", fontSize: 12.5, color: "#92400e", marginBottom: 14 }}>
        Each box holds <b>LaTeX</b> (this content compiles with Tectonic) — e.g. <code>{"$3\\cdot4=12$"}</code>, <code>{"\\emph{...}"}</code>, <code>\soln</code> to separate an example's solution.
      </div>

      <div style={{ ...card, background: "#f8fafc" }}>
        <label style={lbl}>Intro (the idea box)</label>
        <textarea style={ta} value={c.intro ?? ""} onChange={(e) => set({ intro: e.target.value })} />
      </div>

      {/* Key ideas */}
      <div style={secH}>Key ideas (bullet list)</div>
      {ideas.map((s, i) => (
        <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
          <input style={inp} value={s} onChange={(e) => set({ ideas: setList(ideas, i, e.target.value) })} />
          <button style={rmBtn} onClick={() => set({ ideas: rm(ideas, i) })}>×</button>
        </div>
      ))}
      <button style={addBtn} onClick={() => set({ ideas: [...ideas, ""] })}>+ Add idea</button>

      {/* Learn the Concept */}
      <div style={secH}>Learn the Concept (boxes)</div>
      {learn.map(([h, b], i) => (
        <div key={i} style={card}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#6d28a3" }}>Box {i + 1}</span>
            <button style={rmBtn} onClick={() => set({ learn: rm(learn, i) })}>Remove</button>
          </div>
          <label style={lbl}>Heading</label>
          <input style={inp} value={h} onChange={(e) => set({ learn: setList(learn, i, [e.target.value, b]) })} />
          <label style={{ ...lbl, marginTop: 8 }}>Explanation</label>
          <textarea style={ta} value={b} onChange={(e) => set({ learn: setList(learn, i, [h, e.target.value]) })} />
        </div>
      ))}
      <button style={addBtn} onClick={() => set({ learn: [...learn, ["", ""]] })}>+ Add box</button>

      {/* Examples */}
      <div style={secH}>Examples ({examples.length})</div>
      {examples.map((e, i) => (
        <div key={i} style={card}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
            <input style={{ ...inp, fontWeight: 700 }} value={e.t} placeholder="Example title" onChange={(ev) => set({ examples: setList(examples, i, { ...e, t: ev.target.value }) })} />
            <button style={rmBtn} onClick={() => set({ examples: rm(examples, i) })}>Remove</button>
          </div>
          <label style={lbl}>Body — prompt, then <code>\soln</code>, then the solution</label>
          <textarea style={{ ...ta, minHeight: 84 }} value={e.body} onChange={(ev) => set({ examples: setList(examples, i, { ...e, body: ev.target.value }) })} />
        </div>
      ))}
      <button style={addBtn} onClick={() => set({ examples: [...examples, { t: "", body: "" }] })}>+ Add example</button>

      {/* Questions */}
      <div style={secH}>Practice Questions ({questions.length})</div>
      {questions.map((q, i) => (
        <div key={i} style={card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#0d5c30" }}>Question {i + 1}</span>
            <button style={rmBtn} onClick={() => set({ questions: rm(questions, i) })}>Remove</button>
          </div>
          <label style={lbl}>Question</label>
          <textarea style={ta} value={q.ask} onChange={(e) => set({ questions: setList(questions, i, { ...q, ask: e.target.value }) })} />
          <div style={{ display: "flex", gap: 16, alignItems: "center", marginTop: 8, flexWrap: "wrap" }}>
            <label style={chk}><input type="checkbox" checked={!!q.challenge} onChange={(e) => set({ questions: setList(questions, i, { ...q, challenge: e.target.checked }) })} /> Challenge</label>
            <label style={chk}><input type="checkbox" checked={!!q.grid} onChange={(e) => set({ questions: setList(questions, i, { ...q, grid: e.target.checked }) })} /> Grid</label>
            <label style={{ ...chk, gap: 6 }}>Work space:
              <input style={{ ...inp, width: 80 }} value={q.ws ?? ""} placeholder="2.4cm" onChange={(e) => set({ questions: setList(questions, i, { ...q, ws: e.target.value }) })} />
            </label>
          </div>
        </div>
      ))}
      <button style={addBtn} onClick={() => set({ questions: [...questions, { ask: "", grid: false, ws: "", challenge: false }] })}>+ Add question</button>

      {/* Answer key */}
      <div style={secH}>Answer key ({answers.length})</div>
      {answers.map((a, i) => (
        <div key={i} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontSize: 12, color: "#94a3b8", width: 22 }}>{i + 1}.</span>
          <input style={inp} value={a} onChange={(e) => set({ answers: setList(answers, i, e.target.value) })} />
          <button style={rmBtn} onClick={() => set({ answers: rm(answers, i) })}>×</button>
        </div>
      ))}
      <button style={addBtn} onClick={() => set({ answers: [...answers, ""] })}>+ Add answer</button>
    </div>
  );
}

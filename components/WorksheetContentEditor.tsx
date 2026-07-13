"use client";

// In-browser editor for a worksheet's structured content (intro / Learn-the-
// Concept / examples / questions). Edits the same shape stored in
// worksheets.content and rendered to PDF by the regenerate route. Math is
// written inline with $...$ (e.g. $x^2$), exactly as it appears in the PDF.

import type { WsContent } from "../lib/worksheets";
export type { WsContent };

const inp: React.CSSProperties = { width: "100%", padding: "8px 11px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 13.5, fontFamily: "inherit", outline: "none", boxSizing: "border-box" };
const ta: React.CSSProperties = { ...inp, minHeight: 62, resize: "vertical", lineHeight: 1.5 };
const lbl: React.CSSProperties = { fontSize: 11, fontWeight: 700, color: "#64748b", display: "block", marginBottom: 4 };
const card: React.CSSProperties = { background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, padding: 12, marginBottom: 10 };
const addBtn: React.CSSProperties = { background: "#e7f6ec", color: "#0d5c30", border: "1px solid #b7e4c7", borderRadius: 9, padding: "8px 14px", fontWeight: 700, fontSize: 13, cursor: "pointer" };
const rmBtn: React.CSSProperties = { background: "none", border: "1px solid #fecaca", color: "#dc2626", borderRadius: 7, padding: "4px 9px", fontSize: 12, fontWeight: 700, cursor: "pointer" };
const secH: React.CSSProperties = { fontSize: 14, fontWeight: 800, color: "#0f172a", margin: "18px 0 8px" };

export function WorksheetContentEditor({ content, onChange }: { content: WsContent; onChange: (c: WsContent) => void }) {
  const c = content;
  const set = (patch: Partial<WsContent>) => onChange({ ...c, ...patch });

  // generic tuple-list helpers
  const editAt = <T extends any[]>(list: T[] | undefined, i: number, j: number, v: string): T[] => {
    const l = [...(list ?? [])];
    const row = [...l[i]] as T;
    row[j] = v;
    l[i] = row;
    return l;
  };
  const removeAt = <T,>(list: T[] | undefined, i: number): T[] => (list ?? []).filter((_, k) => k !== i);

  const lesson = c.lesson ?? [];
  const examples = c.examples ?? [];
  const questions = c.questions ?? [];

  return (
    <div>
      <div style={{ background: "#fffbeb", border: "1px solid #fde68a", borderRadius: 9, padding: "9px 12px", fontSize: 12.5, color: "#92400e", marginBottom: 14 }}>
        Write math inside <b>$…$</b> — e.g. <code>$x^2$</code>, <code>$\frac{`{1}{2}`}$</code>, <code>$\sqrt{`{x}`}$</code>. Everything else is plain text.
      </div>

      <div style={{ ...card, background: "#f8fafc" }}>
        <label style={lbl}>Introduction (blue box at the top)</label>
        <textarea style={ta} value={c.intro ?? ""} onChange={(e) => set({ intro: e.target.value })} />
      </div>

      {/* Learn the Concept */}
      <div style={secH}>Learn the Concept</div>
      {lesson.map(([h, b], i) => (
        <div key={i} style={card}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: "#1d4ed8" }}>Point {i + 1}</span>
            <button style={rmBtn} onClick={() => set({ lesson: removeAt(lesson, i) })}>Remove</button>
          </div>
          <label style={lbl}>Heading</label>
          <input style={inp} value={h} onChange={(e) => set({ lesson: editAt(lesson, i, 0, e.target.value) })} />
          <label style={{ ...lbl, marginTop: 8 }}>Explanation</label>
          <textarea style={ta} value={b} onChange={(e) => set({ lesson: editAt(lesson, i, 1, e.target.value) })} />
        </div>
      ))}
      <button style={addBtn} onClick={() => set({ lesson: [...lesson, ["", ""]] })}>+ Add point</button>

      {/* Examples */}
      <div style={secH}>Examples ({examples.length})</div>
      {examples.map(([t, p, s], i) => (
        <div key={i} style={card}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
            <input style={{ ...inp, fontWeight: 700 }} value={t} onChange={(e) => set({ examples: editAt(examples, i, 0, e.target.value) })} placeholder={`Example ${i + 1}: …`} />
            <button style={rmBtn} onClick={() => set({ examples: removeAt(examples, i) })}>Remove</button>
          </div>
          <label style={lbl}>Prompt</label>
          <textarea style={ta} value={p} onChange={(e) => set({ examples: editAt(examples, i, 1, e.target.value) })} />
          <label style={{ ...lbl, marginTop: 8 }}>Solution</label>
          <textarea style={ta} value={s} onChange={(e) => set({ examples: editAt(examples, i, 2, e.target.value) })} />
        </div>
      ))}
      <button style={addBtn} onClick={() => set({ examples: [...examples, [`Example ${examples.length + 1}: `, "", ""]] })}>+ Add example</button>

      {/* Questions */}
      <div style={secH}>Practice Questions ({questions.length})</div>
      {questions.map(([t, p, a], i) => (
        <div key={i} style={card}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
            <input style={{ ...inp, fontWeight: 700 }} value={t} onChange={(e) => set({ questions: editAt(questions, i, 0, e.target.value) })} placeholder={`Question ${i + 1}`} />
            <button style={rmBtn} onClick={() => set({ questions: removeAt(questions, i) })}>Remove</button>
          </div>
          <label style={lbl}>Question</label>
          <textarea style={ta} value={p} onChange={(e) => set({ questions: editAt(questions, i, 1, e.target.value) })} />
          <label style={{ ...lbl, marginTop: 8 }}>Answer (shown in the answer key)</label>
          <input style={inp} value={a} onChange={(e) => set({ questions: editAt(questions, i, 2, e.target.value) })} />
        </div>
      ))}
      <button style={addBtn} onClick={() => set({ questions: [...questions, [`Question ${questions.length + 1}`, "", ""]] })}>+ Add question</button>
    </div>
  );
}

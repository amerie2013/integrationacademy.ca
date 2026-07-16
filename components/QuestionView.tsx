"use client";

// Shared question rendering for the quiz player and the practice page: an input
// per question kind, plus the "correct answer" reveal. Kept in one place so
// practice quizzes look and behave exactly like real ones.
import { useEffect } from "react";
import { Math as Tex } from "./Math";
import { MathField } from "./MathField";
import { Question, shuffle } from "../lib/quiz";
import { exprToTex } from "../lib/mathcheck";

export function QuestionView({ q, number, value, onChange }: { q: Question; number: number; value: any; onChange: (v: any) => void }) {
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

export function CorrectAnswer({ q }: { q: Question }) {
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
export function PromptText({ prompt }: { prompt: string }) {
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
const optWrap: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 10 };
const textInput: React.CSSProperties = { width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid #cbd5e1", fontSize: 15, fontFamily: "inherit", outline: "none", boxSizing: "border-box" };
const miniMove: React.CSSProperties = { width: 32, height: 32, borderRadius: 7, border: "1px solid #e2e8f0", background: "#fff", cursor: "pointer", fontWeight: 700 };

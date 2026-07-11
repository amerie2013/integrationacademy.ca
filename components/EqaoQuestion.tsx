"use client";

// Shared rendering for EQAO questions (used by practice and the Phase 2
// simulation): the prompt, the answer input per item type, and the correct
// answer for review. Mirrors the quiz player's controls.
import { useEffect } from "react";
import { Math as Tex } from "./Math";
import { MathField } from "./MathField";
import type { Generated } from "../lib/eqaoGen";
import { shuffle } from "../lib/quiz";

export function EqaoPrompt({ prompt }: { prompt: string }) {
  if (!prompt) return null;
  const parts = prompt.split(/(\$[^$]+\$)/g);
  return <span>{parts.map((p, i) => (p.startsWith("$") && p.endsWith("$") && p.length > 1 ? <Tex key={i} expr={p.slice(1, -1)} /> : <span key={i}>{p}</span>))}</span>;
}

function MathBit({ text }: { text: string }) {
  if (!text) return null;
  if (text.includes("$")) return <EqaoPrompt prompt={text} />;
  if (/[\\^_]/.test(text)) return <Tex expr={text} />;
  return <span>{text}</span>;
}

export function EqaoAnswerInput({ q, value, onChange }: { q: Generated; value: any; onChange: (v: any) => void }) {
  useEffect(() => {
    if (q.kind === "ordering" && value == null) onChange(shuffle((q.choices ?? []).map((_: any, i: number) => i)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (q.kind === "multiple_choice") {
    return (
      <div style={optWrap}>
        {(q.choices ?? []).map((c: any) => (
          <Opt key={c.id} selected={value === c.id} type="radio" onClick={() => onChange(c.id)}><MathBit text={c.text} /></Opt>
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
            const s = new Set(sel); s.has(c.id) ? s.delete(c.id) : s.add(c.id); onChange([...s]);
          }}><MathBit text={c.text} /></Opt>
        ))}
      </div>
    );
  }
  if (q.kind === "true_false") {
    return (
      <div style={optWrap}>
        {["true", "false"].map((v) => (
          <Opt key={v} selected={value === v} type="radio" onClick={() => onChange(v)}><span style={{ textTransform: "capitalize" }}>{v}</span></Opt>
        ))}
      </div>
    );
  }
  if (q.kind === "numeric") return <input type="number" value={value ?? ""} onChange={(e) => onChange(e.target.value)} style={textInput} placeholder="Type your answer" />;
  if (q.kind === "math_expr")
    return <MathField value={value ?? ""} onChange={onChange} format="expr" ariaLabel="your answer" placeholder="Type your answer" style={{ border: "1px solid #cbd5e1", borderRadius: 10, padding: "10px 12px", minHeight: 46, fontSize: 19 }} />;
  if (q.kind === "short_answer" || q.kind === "fill_blank") return <input value={value ?? ""} onChange={(e) => onChange(e.target.value)} style={textInput} placeholder="Type your answer" />;
  return null;
}

export function EqaoCorrectAnswer({ q }: { q: Generated }) {
  let parts: string[] = [];
  let sep = ", ";
  if (q.kind === "multiple_choice") { const t = (q.choices ?? []).find((c: any) => c.id === q.answer)?.text; if (t) parts = [t]; }
  else if (q.kind === "multiple_select") parts = (q.choices ?? []).filter((c: any) => (q.answer ?? []).includes(c.id)).map((c: any) => c.text);
  else if (q.kind === "true_false" || q.kind === "numeric" || q.kind === "math_expr") parts = [String(q.answer)];
  else if (q.kind === "short_answer" || q.kind === "fill_blank") { parts = (Array.isArray(q.answer) ? q.answer : [q.answer]).filter(Boolean).map(String); sep = "  /  "; }
  if (!parts.length) return null;
  return (
    <p style={{ fontSize: 13, color: "#059669", marginTop: 6, fontWeight: 600 }}>
      Answer: {parts.map((t, i) => <span key={i}>{i > 0 ? sep : ""}<MathBit text={t} /></span>)}
    </p>
  );
}

function Opt({ children, selected, onClick, type }: { children: React.ReactNode; selected: boolean; onClick: () => void; type: "radio" | "checkbox" }) {
  return (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 12, textAlign: "left", background: selected ? "#e7f6ec" : "#fff", border: `1px solid ${selected ? "#1b7a44" : "#e2e8f0"}`, borderRadius: 10, padding: "12px 14px", cursor: "pointer", fontSize: 15, fontFamily: "inherit", width: "100%", color: "#0f172a" }}>
      <input type={type} checked={selected} readOnly style={{ pointerEvents: "none" }} /><span>{children}</span>
    </button>
  );
}
const optWrap: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 10 };
const textInput: React.CSSProperties = { width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid #cbd5e1", fontSize: 15, fontFamily: "inherit", outline: "none", boxSizing: "border-box" };

"use client";

import { useMemo, useRef, useState } from "react";
import katex from "katex";
import { MathField, toggleMathKeyboard } from "./MathField";

/**
 * A submission editor with a math toolbar and a live KaTeX preview.
 * Students type plain text plus LaTeX written with \( ... \) (inline) and
 * \[ ... \] (display). The toolbar inserts common structures and symbols at the
 * cursor. The stored value is the raw string, so it renders the same way the
 * lesson/assignment bodies render math.
 */

type Tool = { label: string; title: string; before: string; after?: string; placeholder?: string; math?: boolean };

// Wrapping structures/symbols. `math: true` ones auto-wrap in \( \) if the
// caret isn't already inside a math span (we keep it simple: they insert the
// LaTeX and the student wraps with the \( \) button, or uses these inside math).
const GROUPS: { name: string; tools: Tool[] }[] = [
  {
    name: "Math",
    tools: [
      { label: "\\( \\)", title: "Inline math", before: "\\( ", after: " \\)", placeholder: "x" },
      { label: "\\[ \\]", title: "Display math (centered)", before: "\\[ ", after: " \\]", placeholder: "x" },
    ],
  },
  {
    name: "Structure",
    tools: [
      { label: "a/b", title: "Fraction", before: "\\frac{", after: "}{b}", placeholder: "a", math: true },
      { label: "xⁿ", title: "Exponent / power", before: "^{", after: "}", placeholder: "2", math: true },
      { label: "xₙ", title: "Subscript", before: "_{", after: "}", placeholder: "n", math: true },
      { label: "√", title: "Square root", before: "\\sqrt{", after: "}", placeholder: "x", math: true },
      { label: "ⁿ√", title: "nth root", before: "\\sqrt[n]{", after: "}", placeholder: "x", math: true },
      { label: "()", title: "Brackets", before: "\\left( ", after: " \\right)", placeholder: "x", math: true },
    ],
  },
  {
    name: "Symbols",
    tools: [
      { label: "±", title: "Plus/minus", before: "\\pm ", math: true },
      { label: "×", title: "Times", before: "\\times ", math: true },
      { label: "÷", title: "Divide", before: "\\div ", math: true },
      { label: "≤", title: "Less or equal", before: "\\le ", math: true },
      { label: "≥", title: "Greater or equal", before: "\\ge ", math: true },
      { label: "≠", title: "Not equal", before: "\\neq ", math: true },
      { label: "π", title: "Pi", before: "\\pi ", math: true },
      { label: "°", title: "Degrees", before: "^{\\circ} ", math: true },
      { label: "∞", title: "Infinity", before: "\\infty ", math: true },
    ],
  },
];

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function unescapeHtml(s: string) {
  return s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}
function tex(src: string, display: boolean) {
  try {
    return katex.renderToString(src.trim(), { throwOnError: false, displayMode: display });
  } catch {
    return escapeHtml(src);
  }
}
/** Escape the text, then typeset \( \) / \[ \] math, then keep line breaks. */
function renderPreview(src: string) {
  let s = escapeHtml(src);
  s = s.replace(/\\\[([\s\S]+?)\\\]/g, (_m, t) => tex(unescapeHtml(t), true));
  s = s.replace(/\\\(([\s\S]+?)\\\)/g, (_m, t) => tex(unescapeHtml(t), false));
  return s.replace(/\n/g, "<br/>");
}

export function MathInput({
  value,
  onChange,
  placeholder,
  minHeight = 150,
  preview = true,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  minHeight?: number;
  // Set false when the page already shows its own live preview elsewhere.
  preview?: boolean;
}) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [showPreview, setShowPreview] = useState(preview);
  const [eqOpen, setEqOpen] = useState(false);
  const [eqLatex, setEqLatex] = useState("");
  const eqStartRef = useRef<number | null>(null);
  const previewHtml = useMemo(() => renderPreview(value), [value]);

  function insert(t: Tool) {
    const ta = ref.current;
    const start = ta ? ta.selectionStart : value.length;
    const end = ta ? ta.selectionEnd : value.length;
    const selected = value.slice(start, end) || t.placeholder || "";
    const after = t.after ?? "";
    const next = value.slice(0, start) + t.before + selected + after + value.slice(end);
    onChange(next);
    // Re-select the inserted body so the student can type over the placeholder.
    const selStart = start + t.before.length;
    const selEnd = selStart + selected.length;
    requestAnimationFrame(() => {
      if (!ta) return;
      ta.focus();
      ta.setSelectionRange(selStart, selEnd);
    });
  }

  // Insert a raw string at the caret (used by the visual equation builder).
  function insertString(str: string) {
    const ta = ref.current;
    const at = eqStartRef.current ?? (ta ? ta.selectionStart : value.length);
    const next = value.slice(0, at) + str + value.slice(at);
    onChange(next);
    const pos = at + str.length;
    requestAnimationFrame(() => {
      if (!ta) return;
      ta.focus();
      ta.setSelectionRange(pos, pos);
    });
  }

  // Drop the equation built in the math-field into the answer as KaTeX math.
  function insertEquation(display: boolean) {
    const tex = eqLatex.trim();
    if (!tex) return;
    insertString(display ? `\\[ ${tex} \\]` : `\\( ${tex} \\)`);
    setEqLatex("");
    eqStartRef.current = null;
  }

  const btn: React.CSSProperties = {
    border: "1px solid #d8dee9",
    background: "#fff",
    borderRadius: 8,
    padding: "5px 10px",
    fontSize: 14,
    fontWeight: 600,
    color: "#1f3a4b",
    cursor: "pointer",
    lineHeight: 1.2,
  };

  return (
    <div style={{ border: "1px solid #cbd5e1", borderRadius: 12, overflow: "hidden", background: "#fff" }}>
      {/* toolbar */}
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, padding: "8px 10px", background: "#f8faff", borderBottom: "1px solid #e2e8f0" }}>
        {GROUPS.map((g, gi) => (
          <div key={g.name} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.04em" }}>{g.name}</span>
            {g.tools.map((t) => (
              <button key={t.title} type="button" title={t.title} onClick={() => insert(t)} style={btn}>
                {t.label}
              </button>
            ))}
            {gi < GROUPS.length - 1 && <span style={{ width: 1, height: 22, background: "#e2e8f0" }} />}
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            const ta = ref.current;
            if (ta) eqStartRef.current = ta.selectionStart;
            setEqOpen((o) => !o);
          }}
          style={{ ...btn, marginLeft: "auto", color: eqOpen ? "#fff" : "#1b7a44", background: eqOpen ? "#1b7a44" : "#fff", borderColor: "#1b7a44" }}
          title="Build an equation visually and insert it"
        >
          🧮 Equation editor
        </button>
        {preview && (
          <button
            type="button"
            onClick={() => setShowPreview((s) => !s)}
            style={{ ...btn, color: showPreview ? "#1b7a44" : "#64748b" }}
            title="Toggle live preview"
          >
            {showPreview ? "👁 Preview on" : "Preview off"}
          </button>
        )}
      </div>

      {/* visual equation builder — same MathLive keyboard as the graph tool */}
      {eqOpen && (
        <div style={{ padding: "10px 12px", background: "#f1f5fb", borderBottom: "1px solid #e2e8f0" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6 }}>
            Build an equation — type <code>^</code> for a power, <code>/</code> for a fraction
          </div>
          <MathField
            format="latex"
            value={eqLatex}
            onChange={setEqLatex}
            ariaLabel="equation builder"
            placeholder="e.g. x^2 + 3x - 4"
            style={{ width: "100%", border: "1px solid #cbd5e1", borderRadius: 8, padding: "8px 10px", fontSize: 18, background: "#fff", boxSizing: "border-box" }}
          />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
            <button type="button" onClick={toggleMathKeyboard} style={{ ...btn, background: "#e7f6ec" }} title="Show the on-screen math keyboard">⌨ Math keyboard</button>
            <button type="button" onClick={() => insertEquation(false)} disabled={!eqLatex.trim()} style={{ ...btn, marginLeft: "auto", background: "#1b7a44", color: "#fff", borderColor: "#1b7a44", opacity: eqLatex.trim() ? 1 : 0.5 }} title="Insert inline, in the line of text">Insert inline</button>
            <button type="button" onClick={() => insertEquation(true)} disabled={!eqLatex.trim()} style={{ ...btn, background: "#1f3a4b", color: "#fff", borderColor: "#1f3a4b", opacity: eqLatex.trim() ? 1 : 0.5 }} title="Insert centered on its own line">Insert centered</button>
          </div>
        </div>
      )}

      <textarea
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder ?? "Type your work here. Use the buttons above for math, e.g. \\( \\frac{1}{2}x^{2} \\)."}
        style={{ width: "100%", minHeight, padding: "12px 14px", border: "none", fontSize: 15, fontFamily: "inherit", resize: "vertical", boxSizing: "border-box", lineHeight: 1.6, display: "block", outline: "none" }}
      />

      {showPreview && (
        <div style={{ borderTop: "1px dashed #e2e8f0", padding: "12px 14px", background: "#fcfdff" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 6 }}>Preview</div>
          {value.trim() ? (
            <div style={{ fontSize: 15, lineHeight: 1.7, color: "#0f172a" }} dangerouslySetInnerHTML={{ __html: previewHtml }} />
          ) : (
            <div style={{ color: "#cbd5e1", fontSize: 14 }}>Your formatted work will appear here…</div>
          )}
        </div>
      )}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A focused WYSIWYG editor for the HTML lecture template. Edits render with the
 * live lecture-box theme (colored boxes, gradient title) because globals.css
 * applies to the editable region too. Includes one-click inserts for Example /
 * Practice / Q&A boxes and equations. Uses execCommand (fine for an internal
 * authoring tool) plus a raw Source view.
 */
export function RichEditor({ value, onChange }: { value: string; onChange: (html: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<"visual" | "source">("visual");

  useEffect(() => {
    if (mode === "visual" && ref.current && ref.current.innerHTML !== value) {
      ref.current.innerHTML = value || "";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  function push() {
    if (ref.current) onChange(ref.current.innerHTML);
  }
  function exec(cmd: string, arg?: string) {
    document.execCommand(cmd, false, arg);
    ref.current?.focus();
    push();
  }
  function insert(html: string) {
    ref.current?.focus();
    document.execCommand("insertHTML", false, html);
    push();
  }

  const EXAMPLE = `<div class="example-box" style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Example: Title</h3><p>Problem statement, e.g. simplify \\( 2x + 3x \\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> description</div><em>Conclusion: result</em></div></div><p></p>`;
  const PRACTICE = `<div class="practice-box" style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Question</h3><p>Problem here.</p><details><summary>View answer</summary><div class="solution"><div class="step">Explanation. <em>Answer.</em></div></div></details></div><p></p>`;
  const QA = `<div class="qa-box" style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"><h3>Q: Question?</h3><p><em>Answer.</em></p></div><p></p>`;
  const CALC = `<iframe src="/tools/graph?embed=1" loading="lazy" style="width:100%;height:460px;border:1px solid #cbd5e1;border-radius:10px;margin:10px 0;background:#fff;" title="Graphing calculator"></iframe><p></p>`;

  return (
    <div style={{ border: "1px solid #cbd5e1", borderRadius: 12, overflow: "hidden", background: "#fff" }}>
      {/* Toolbar */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, padding: 8, borderBottom: "1px solid #e2e8f0", background: "#f8fafc", alignItems: "center" }}>
        <Btn onClick={() => exec("bold")} title="Bold"><b>B</b></Btn>
        <Btn onClick={() => exec("italic")} title="Italic"><i>I</i></Btn>
        <Btn onClick={() => exec("underline")} title="Underline"><u>U</u></Btn>
        <Btn onClick={() => exec("strikeThrough")} title="Strikethrough"><s>S</s></Btn>
        <Sep />
        <Btn onClick={() => exec("formatBlock", "h1")} title="Title">H1</Btn>
        <Btn onClick={() => exec("formatBlock", "h2")} title="Section">H2</Btn>
        <Btn onClick={() => exec("formatBlock", "h3")} title="Sub-heading">H3</Btn>
        <Btn onClick={() => exec("formatBlock", "p")} title="Paragraph">¶</Btn>
        <Sep />
        <Btn onClick={() => exec("insertUnorderedList")} title="Bulleted list">• ≡</Btn>
        <Btn onClick={() => exec("insertOrderedList")} title="Numbered list">1. ≡</Btn>
        <Sep />
        <label title="Text colour" style={{ ...btnStyle, padding: "2px 6px", display: "inline-flex", alignItems: "center", gap: 4, cursor: "pointer" }}>
          A
          <input type="color" defaultValue="#1e3a8a" onChange={(e) => exec("foreColor", e.target.value)} style={{ width: 20, height: 18, border: "none", background: "none", padding: 0, cursor: "pointer" }} />
        </label>
        <Btn onClick={() => { const u = prompt("Link URL:"); if (u) exec("createLink", u); }} title="Insert link">🔗</Btn>
        <Btn onClick={() => { const u = prompt("Image URL:"); if (u) exec("insertImage", u); }} title="Insert image">🖼</Btn>
        <Btn onClick={() => insert("\\( x \\)")} title="Inline equation">∑ \\( \\)</Btn>
        <Sep />
        <Btn onClick={() => insert(EXAMPLE)} title="Insert example box" color="#2563eb">🔵 Example</Btn>
        <Btn onClick={() => insert(PRACTICE)} title="Insert practice question" color="#b45309">🟡 Practice</Btn>
        <Btn onClick={() => insert(QA)} title="Insert Q&A item" color="#475569">❓ Q&amp;A</Btn>
        <Btn onClick={() => insert(CALC)} title="Insert graphing calculator" color="#0d9488">🧮 Calculator</Btn>
        <Sep />
        <Btn onClick={() => exec("removeFormat")} title="Clear formatting">⌫</Btn>
        <div style={{ marginLeft: "auto" }}>
          <Btn onClick={() => setMode(mode === "visual" ? "source" : "visual")} title="Toggle HTML source" active={mode === "source"}>
            &lt;/&gt; Source
          </Btn>
        </div>
      </div>

      {/* Editor surface */}
      {mode === "visual" ? (
        <div
          ref={ref}
          contentEditable
          suppressContentEditableWarning
          onInput={push}
          className="lecture-box"
          style={{ minHeight: 320, padding: 20, outline: "none", boxShadow: "none", border: "none", borderRadius: 0, maxHeight: 560, overflowY: "auto" }}
        />
      ) : (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ width: "100%", minHeight: 360, padding: 16, border: "none", outline: "none", fontFamily: "JetBrains Mono, monospace", fontSize: 13, lineHeight: 1.5, resize: "vertical", boxSizing: "border-box" }}
        />
      )}
    </div>
  );
}

const btnStyle: React.CSSProperties = {
  border: "1px solid #e2e8f0",
  background: "#fff",
  borderRadius: 7,
  padding: "5px 9px",
  fontSize: 13,
  fontWeight: 700,
  cursor: "pointer",
  color: "#334155",
  lineHeight: 1,
};

function Btn({ children, onClick, title, active, color }: { children: React.ReactNode; onClick: () => void; title?: string; active?: boolean; color?: string }) {
  return (
    <button
      type="button"
      title={title}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      style={{ ...btnStyle, color: color ?? btnStyle.color, background: active ? "#e7f6ec" : "#fff", borderColor: active ? "#bfe3cd" : "#e2e8f0" }}
    >
      {children}
    </button>
  );
}

function Sep() {
  return <span style={{ width: 1, height: 22, background: "#e2e8f0", margin: "0 3px" }} />;
}

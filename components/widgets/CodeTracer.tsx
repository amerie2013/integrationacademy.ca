"use client";

// Chapter 3 (coding) explorer: a small Python editor that runs in the browser (lib/miniPython),
// steps line by line, and shows the variables, a trace table and the printed output.

import { useMemo, useState } from "react";
import { run, type PyError, type Step } from "../../lib/miniPython";
import { C, MathText, Row, WidgetCard, btn } from "./kit";

type Result = { steps: Step[]; output: string; error?: PyError; vars: [string, string][]; truncated: boolean };

function execute(code: string): Result {
  const g = run(code, 4000);
  const steps: Step[] = [];
  for (;;) {
    const r = g.next();
    if (r.done) return { steps, output: r.value.output, error: r.value.error, vars: r.value.vars, truncated: steps.length >= 4000 };
    steps.push(r.value);
  }
}

const mono = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

export function CodeTracer({ code, title = "Run and trace the code", task, editable = true, showTrace = true }: { code: string; title?: string; task?: string; editable?: boolean; showTrace?: boolean }) {
  const [src, setSrc] = useState(code);
  const [editing, setEditing] = useState(false);
  const [idx, setIdx] = useState(-1); // -1: not started; steps.length: finished
  const res = useMemo(() => execute(src), [src]);
  const n = res.steps.length;
  const finished = idx >= n;
  const cur = idx >= 0 && idx < n ? res.steps[idx] : null;
  const vars = finished ? res.vars : cur?.vars ?? [];
  const output = finished ? res.output : cur?.output ?? "";
  const lines = src.replace(/\r/g, "").split("\n");
  const errLine = finished && res.error ? res.error.line : -1;

  // trace table: one row per executed step up to now, columns = every variable seen so far
  const shown = finished ? res.steps : res.steps.slice(0, Math.max(0, idx + 1));
  const cols = useMemo(() => [...new Set(res.steps.flatMap((s) => s.vars.map(([k]) => k)).concat(res.vars.map(([k]) => k)))], [res]);
  const rows = shown.map((s, i) => ({ line: s.line, vals: Object.fromEntries((i + 1 < shown.length ? shown[i + 1].vars : finished && i === shown.length - 1 ? res.vars : s.vars)) }));

  const reset = () => setIdx(-1);
  return (
    <WidgetCard title={title} subtitle="Python, running in your browser" tag="Code">
      {task && <div style={{ background: C.violetSoft, borderLeft: `4px solid ${C.violet}`, borderRadius: 8, padding: "8px 12px", marginBottom: 12, fontSize: 14.5 }}><MathText html={task} /></div>}
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.25fr) minmax(0, 1fr)", gap: 14 }} className="code-tracer-grid">
        <div>
          {editing ? (
            <textarea value={src} onChange={(e) => { setSrc(e.target.value); setIdx(-1); }} spellCheck={false} aria-label="Python code"
              style={{ width: "100%", minHeight: Math.max(140, lines.length * 22 + 24), fontFamily: mono, fontSize: 14, lineHeight: "22px", padding: "10px 12px", border: `1px solid ${C.violet}`, borderRadius: 10, background: "#0f172a", color: "#e2e8f0", boxSizing: "border-box", resize: "vertical", tabSize: 4 }}
              onKeyDown={(e) => { if (e.key === "Tab") { e.preventDefault(); const t = e.currentTarget, a = t.selectionStart; setSrc(src.slice(0, a) + "    " + src.slice(t.selectionEnd)); requestAnimationFrame(() => { t.selectionStart = t.selectionEnd = a + 4; }); } }} />
          ) : (
            <pre aria-label="Python code" style={{ margin: 0, background: "#0f172a", color: "#e2e8f0", borderRadius: 10, padding: "10px 0", fontFamily: mono, fontSize: 14, lineHeight: "22px", overflowX: "auto" }}>
              {lines.map((l, i) => {
                const on = cur?.line === i + 1, bad = errLine === i + 1;
                return (
                  <div key={i} style={{ display: "flex", background: bad ? "rgba(190,18,60,0.45)" : on ? "rgba(250,204,21,0.25)" : "transparent", borderLeft: `3px solid ${bad ? "#fb7185" : on ? "#facc15" : "transparent"}` }}>
                    <span style={{ width: 34, textAlign: "right", paddingRight: 10, color: "#64748b", userSelect: "none", flex: "none" }}>{i + 1}</span>
                    <span style={{ whiteSpace: "pre" }}>{l || " "}</span>
                  </div>
                );
              })}
            </pre>
          )}
          <Row gap={8} style={{ marginTop: 10 }}>
            <button type="button" style={btn(true)} onClick={() => setIdx(n)}>▶ Run</button>
            <button type="button" style={btn(false)} onClick={() => { setEditing(false); setIdx(Math.min(n, idx + 1)); }} disabled={finished}>Step</button>
            <button type="button" style={btn(false)} onClick={reset}>Reset</button>
            {editable && <button type="button" style={btn(false)} onClick={() => { setEditing(!editing); reset(); }}>{editing ? "Done editing" : "Edit code"}</button>}
            {src !== code && <button type="button" style={btn(false)} onClick={() => { setSrc(code); reset(); }}>Restore original</button>}
          </Row>
          <p style={{ margin: "8px 0 0", fontSize: 13, color: C.muted }}>
            {idx < 0 ? "Press Step to run one line at a time, or Run to run everything." : finished ? `Finished after ${n} step${n === 1 ? "" : "s"}.` : `Step ${idx + 1} of ${n}: the highlighted line runs next.`}
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 0 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.06em", color: C.muted, textTransform: "uppercase", marginBottom: 4 }}>Variables</div>
            {vars.length ? (
              <table style={{ borderCollapse: "collapse", fontFamily: mono, fontSize: 14 }}>
                <tbody>{vars.map(([k, v]) => <tr key={k}><td style={{ padding: "3px 10px", border: `1px solid ${C.line}`, fontWeight: 700, color: C.violet }}>{k}</td><td style={{ padding: "3px 10px", border: `1px solid ${C.line}` }}>{v}</td></tr>)}</tbody>
              </table>
            ) : <span style={{ fontSize: 13.5, color: C.faint }}>none yet</span>}
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.06em", color: C.muted, textTransform: "uppercase", marginBottom: 4 }}>Output</div>
            <pre style={{ margin: 0, minHeight: 44, background: "#f8fafc", border: `1px solid ${C.line}`, borderRadius: 8, padding: "8px 10px", fontFamily: mono, fontSize: 14, whiteSpace: "pre-wrap" }}>{output || " "}</pre>
            {finished && res.error && <div style={{ marginTop: 6, color: C.red, fontWeight: 700, fontSize: 14, fontFamily: mono }}>Line {res.error.line}: {res.error.message}</div>}
          </div>
        </div>
      </div>
      {showTrace && shown.length > 0 && cols.length > 0 && (
        <div style={{ marginTop: 12, overflowX: "auto" }}>
          <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.06em", color: C.muted, textTransform: "uppercase", marginBottom: 4 }}>Trace table (values after each line)</div>
          <table style={{ borderCollapse: "collapse", fontFamily: mono, fontSize: 13 }}>
            <thead><tr><th style={{ padding: "3px 8px", background: C.panel, border: `1px solid ${C.line}` }}>line</th>{cols.map((c) => <th key={c} style={{ padding: "3px 8px", background: C.panel, border: `1px solid ${C.line}`, color: C.violet }}>{c}</th>)}</tr></thead>
            <tbody>{rows.slice(-14).map((r, i) => (
              <tr key={i}><td style={{ padding: "2px 8px", border: `1px solid ${C.line}`, color: C.muted }}>{r.line}</td>{cols.map((c) => <td key={c} style={{ padding: "2px 8px", border: `1px solid ${C.line}` }}>{r.vals[c] ?? ""}</td>)}</tr>
            ))}</tbody>
          </table>
          {rows.length > 14 && <div style={{ fontSize: 12, color: C.faint, marginTop: 2 }}>(showing the last 14 of {rows.length} rows)</div>}
        </div>
      )}
      <style>{`@media (max-width: 640px){.code-tracer-grid{grid-template-columns:1fr !important}}`}</style>
    </WidgetCard>
  );
}

"use client";

import katex from "katex";

const CATS = [
  { key: "knowledge", label: "Knowledge & Understanding", color: "#1d4ed8", bg: "#eff6ff" },
  { key: "thinking", label: "Thinking", color: "#7c3aed", bg: "#faf5ff" },
  { key: "communication", label: "Communication", color: "#b45309", bg: "#fff7ed" },
  { key: "application", label: "Application", color: "#0f766e", bg: "#ecfdf5" },
];
function catFor(line: string) {
  const l = line.toLowerCase();
  return CATS.find((c) => l.startsWith(c.key));
}

function tex(s: string) {
  try { return katex.renderToString(s.trim(), { throwOnError: false, displayMode: false }); } catch { return s; }
}
// A question line may carry figures as ![caption](https://…); they render under the text.
const IMG = /!\[([^\]]*)\]\((https?:\/\/[^)\s]+)\)/g;
function withFigures(text: string): React.ReactNode {
  const figs = [...text.matchAll(IMG)];
  if (!figs.length) return inline(text);
  return (
    <>
      {inline(text.replace(IMG, "").trim())}
      {figs.map((f, i) => (
        <figure key={i} style={{ margin: "10px 0 4px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={f[2]} alt={f[1]} style={{ display: "block", maxWidth: "100%", height: "auto", borderRadius: 8, border: "1px solid #e2e8f0", background: "#fff" }} />
          {f[1] && <figcaption style={{ fontSize: 12.5, color: "#64748b", marginTop: 4 }}>{f[1]}</figcaption>}
        </figure>
      ))}
    </>
  );
}

function inline(text: string): React.ReactNode[] {
  const parts = text.split(/(\\\([\s\S]*?\\\)|\$[^$]+\$)/g);
  return parts.map((p, i) => {
    if (p.startsWith("\\(") && p.endsWith("\\)")) return <span key={i} dangerouslySetInnerHTML={{ __html: tex(p.slice(2, -2)) }} />;
    if (p.startsWith("$") && p.endsWith("$") && p.length > 1) return <span key={i} dangerouslySetInnerHTML={{ __html: tex(p.slice(1, -1)) }} />;
    return <span key={i}>{p}</span>;
  });
}

/**
 * Renders an assignment. Recognizes the four achievement-category headers
 * (Knowledge & Understanding / Thinking / Communication / Application) and
 * numbered questions ("1. …"), and typesets inline math. Falls back to
 * "Part A …" cards or plain paragraphs for older content.
 */
export function AssignmentBody({ text }: { text: string }) {
  if (!text) return <p style={{ color: "#94a3b8" }}>No instructions provided.</p>;
  const lines = text.split(/\n/).map((s) => s.trim()).filter(Boolean);

  // Exam-format free response: a "Free response · 9 points · …" header line,
  // the stem, then lettered parts "(a) …". Laid out like an exam page.
  if (/^free response\b/i.test(lines[0] ?? "")) {
    const chips = lines[0].split("·").map((s) => s.trim()).filter(Boolean);
    return (
      <div style={{ color: "#1e293b", fontSize: 16 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
          {chips.map((c, i) => (
            <span key={i} style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.3, color: i ? "#334155" : "#fff", background: i ? "#f1f5f9" : "#1e2a4a", border: `1px solid ${i ? "#e2e8f0" : "#1e2a4a"}`, borderRadius: 6, padding: "4px 10px" }}>{c}</span>
          ))}
        </div>
        {lines.slice(1).map((line, i) => {
          const m = line.match(/^\(([a-z])\)\s*([\s\S]*)$/);
          if (!m) {
            const alone = /^\$[^$]+\$$/.test(line); // a table or display on its own line
            return <p key={i} style={{ margin: "0 0 12px", lineHeight: 1.7, textAlign: alone ? "center" : undefined, overflowX: "auto" }}>{inline(line)}</p>;
          }
          return (
            <div key={i} style={{ display: "flex", gap: 12, padding: "10px 0", borderTop: "1px solid #e2e8f0" }}>
              <span style={{ fontWeight: 700, color: "#1e2a4a", minWidth: 26 }}>({m[1]})</span>
              <span style={{ lineHeight: 1.7 }}>{inline(m[2])}</span>
            </div>
          );
        })}
        <p style={{ margin: "14px 0 0", fontSize: 13, color: "#64748b", lineHeight: 1.6, borderTop: "1px solid #e2e8f0", paddingTop: 10 }}>
          Show all your work. Each part is scored point by point on the working and reasoning shown, not on the final answer alone. Time yourself and work without notes.
        </p>
      </div>
    );
  }

  const structured = lines.some((l) => catFor(l)) || lines.some((l) => /^\d+\./.test(l));

  if (!structured) {
    // legacy: "Part A (…): …" segments, else paragraphs
    const segs = text.split(/(?=Part [A-Z])/).map((s) => s.trim()).filter(Boolean);
    if (segs.length > 1) {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {segs.map((seg, i) => {
            const m = seg.match(/^(Part [A-Z][^:]*:)\s*([\s\S]*)$/);
            return (
              <div key={i} style={{ background: "#f8fafc", borderLeft: "4px solid #1b7a44", borderRadius: 8, padding: "12px 16px" }}>
                {m && <div style={{ fontWeight: 800, color: "#0d5c30", marginBottom: 5 }}>{inline(m[1])}</div>}
                <div style={{ lineHeight: 1.7 }}>{inline(m ? m[2] : seg)}</div>
              </div>
            );
          })}
        </div>
      );
    }
    return <div style={{ lineHeight: 1.7, color: "#1e293b", fontSize: 16 }}>{lines.map((p, i) => <p key={i} style={{ margin: "0 0 12px" }}>{inline(p)}</p>)}</div>;
  }

  const out: React.ReactNode[] = [];
  let current: (typeof CATS)[number] | undefined;
  lines.forEach((line, i) => {
    const cat = catFor(line);
    if (cat) {
      current = cat;
      out.push(
        <div key={`h${i}`} style={{ marginTop: out.length ? 18 : 0, marginBottom: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: cat.color, background: cat.bg, padding: "5px 12px", borderRadius: 999, border: `1px solid ${cat.color}22` }}>
            {cat.label}
          </span>
        </div>,
      );
    } else {
      const m = line.match(/^(\d+)\.\s*([\s\S]*)$/);
      const num = m ? m[1] : null;
      const body = m ? m[2] : line;
      out.push(
        <div key={`q${i}`} style={{ display: "flex", gap: 10, padding: "8px 12px", borderLeft: `3px solid ${current?.color ?? "#cbd5e1"}`, background: "#fafbff", borderRadius: 6, marginBottom: 6 }}>
          {num && <span style={{ fontWeight: 800, color: current?.color ?? "#64748b", minWidth: 20 }}>{num}.</span>}
          <span style={{ lineHeight: 1.6, color: "#1e293b", minWidth: 0 }}>{withFigures(body)}</span>
        </div>,
      );
    }
  });
  return <div>{out}</div>;
}

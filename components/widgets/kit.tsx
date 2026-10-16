"use client";

// Shared look for lesson widgets: a card with a title strip, labelled sliders,
// segmented buttons, and inline HTML+KaTeX text. Light surface to sit inside
// the lesson body next to the pastel example/practice boxes.

import { useMemo, type CSSProperties, type ReactNode } from "react";
import { renderMath } from "../HtmlBlock";

export const C = {
  blue: "#1e40af",
  blueSoft: "#dbeafe",
  red: "#be123c",
  redSoft: "#ffe4e6",
  green: "#15803d",
  greenSoft: "#dcfce7",
  amber: "#b45309",
  amberSoft: "#fef3c7",
  violet: "#6d28d9",
  violetSoft: "#ede9fe",
  ink: "#0f172a",
  muted: "#475569",
  faint: "#94a3b8",
  line: "#e2e8f0",
  panel: "#f8fafc",
};

export function WidgetCard({ title, subtitle, children, tag = "Explore" }: { title: string; subtitle?: string; children: ReactNode; tag?: string }) {
  return (
    <section style={{ border: "1px solid #c7d2fe", borderRadius: 14, background: "#fff", boxShadow: "0 6px 22px rgba(15,23,42,0.06)", overflow: "hidden", margin: "4px 0" }}>
      <header style={{ background: "linear-gradient(90deg,#eef2ff,#f8fafc)", borderBottom: "1px solid #e0e7ff", padding: "12px 18px", display: "flex", gap: 12, alignItems: "baseline", flexWrap: "wrap" }}>
        <span style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", color: "#4338ca", background: "#e0e7ff", borderRadius: 999, padding: "3px 10px" }}>{tag}</span>
        <h3 style={{ margin: 0, fontSize: 18, fontWeight: 750, color: C.ink }}>{title}</h3>
        {subtitle && <span style={{ color: C.muted, fontSize: 14 }}>{subtitle}</span>}
      </header>
      <div style={{ padding: "16px 18px 18px" }}>{children}</div>
    </section>
  );
}

/** HTML fragment with \( \) / \[ \] math, rendered with KaTeX. Author-trusted content. */
export function MathText({ html, style, block }: { html: string; style?: CSSProperties; block?: boolean }) {
  const out = useMemo(() => renderMath(html), [html]);
  return block
    ? <div style={style} dangerouslySetInnerHTML={{ __html: out }} />
    : <span style={style} dangerouslySetInnerHTML={{ __html: out }} />;
}

export function Slider({ label, value, min, max, step = 1, onChange, format, color = C.blue }: { label: string; value: number; min: number; max: number; step?: number; onChange: (v: number) => void; format?: (v: number) => string; color?: string }) {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: C.muted, flex: "1 1 260px", minWidth: 0 }}>
      <span style={{ fontWeight: 650, minWidth: 64, whiteSpace: "nowrap" }}>{label}</span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} style={{ flex: 1, minWidth: 60, width: "100%", accentColor: color }} aria-label={label} />
      <span style={{ fontWeight: 800, color, minWidth: 44, textAlign: "right", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{format ? format(value) : fmtInt(value)}</span>
    </label>
  );
}

export function Segmented<T extends string | number>({ options, value, onChange, label }: { options: { value: T; label: string }[]; value: T; onChange: (v: T) => void; label?: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
      {label && <span style={{ fontSize: 14, fontWeight: 650, color: C.muted }}>{label}</span>}
      <div role="group" style={{ display: "inline-flex", border: "1px solid #cbd5e1", borderRadius: 10, overflow: "hidden" }}>
        {options.map((o) => (
          <button key={String(o.value)} type="button" onClick={() => onChange(o.value)} aria-pressed={o.value === value}
            style={{ border: "none", padding: "7px 13px", fontSize: 14, fontWeight: 700, cursor: "pointer", background: o.value === value ? "#1e3a8a" : "#fff", color: o.value === value ? "#fff" : C.ink }}>
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Row({ children, gap = 14, style }: { children: ReactNode; gap?: number; style?: CSSProperties }) {
  return <div style={{ display: "flex", flexWrap: "wrap", gap, alignItems: "center", ...style }}>{children}</div>;
}

/** Result strip under a figure: big equation + short explanation. */
export function Readout({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "green" | "amber" | "red" }) {
  const map = { blue: [C.blueSoft, C.blue], green: [C.greenSoft, C.green], amber: [C.amberSoft, C.amber], red: [C.redSoft, C.red] } as const;
  const [bg, fg] = map[tone];
  return <div style={{ background: bg, borderLeft: `4px solid ${fg}`, borderRadius: 8, padding: "10px 14px", fontSize: 15.5, color: C.ink, lineHeight: 1.55 }}>{children}</div>;
}

export const btn = (primary = false): CSSProperties => ({
  border: primary ? "none" : "1px solid #cbd5e1",
  background: primary ? "#1b7a44" : "#fff",
  color: primary ? "#fff" : C.ink,
  borderRadius: 9,
  padding: "8px 14px",
  fontWeight: 700,
  fontSize: 14,
  cursor: "pointer",
});

/** Integer with a real minus sign, for display. */
export const fmtInt = (n: number) => (n < 0 ? `−${-n}` : String(n));
/** Signed integer for LaTeX, bracketed when negative: (-3). */
export const texInt = (n: number, bracket = true) => (n < 0 ? (bracket ? `(-${-n})` : `-${-n}`) : String(n));

export const gcd = (a: number, b: number): number => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
export const lcm = (a: number, b: number) => (Math.abs(a) / gcd(a, b)) * Math.abs(b);
/** LaTeX for a reduced fraction n/d. */
export function texFrac(n: number, d: number) {
  const g = gcd(n, d); n /= g; d /= g;
  if (d < 0) { n = -n; d = -d; }
  if (d === 1) return String(n);
  return n < 0 ? `-\\tfrac{${-n}}{${d}}` : `\\tfrac{${n}}{${d}}`;
}

"use client";

import { useState } from "react";
import { C, MathText, Readout, Row, WidgetCard, btn } from "./kit";

// Nested-sets explorer: pick (or type) a number and see every set it belongs to,
// highlighted in the nested diagram and placed on a number line.

type Num = { tex: string; value: number; sets: SetKey[]; why: string };
type SetKey = "N" | "W" | "I" | "Q" | "Qbar" | "R";

const SETS: { key: SetKey; name: string; sym: string; color: string; soft: string }[] = [
  { key: "R", name: "Real numbers", sym: "\\mathbb{R}", color: "#334155", soft: "#f8fafc" },
  { key: "Q", name: "Rational numbers", sym: "\\mathbb{Q}", color: C.violet, soft: C.violetSoft },
  { key: "I", name: "Integers", sym: "\\mathbb{Z}", color: C.blue, soft: C.blueSoft },
  { key: "W", name: "Whole numbers", sym: "\\mathbb{W}", color: C.green, soft: C.greenSoft },
  { key: "N", name: "Natural numbers", sym: "\\mathbb{N}", color: C.amber, soft: C.amberSoft },
  { key: "Qbar", name: "Irrational numbers", sym: "\\overline{\\mathbb{Q}}", color: C.red, soft: C.redSoft },
];

const PRESETS: Num[] = [
  { tex: "7", value: 7, sets: ["N", "W", "I", "Q", "R"], why: "a counting number, so it is in every set from the natural numbers outward" },
  { tex: "0", value: 0, sets: ["W", "I", "Q", "R"], why: "whole numbers start at 0, but counting (natural) numbers start at 1" },
  { tex: "-4", value: -4, sets: ["I", "Q", "R"], why: "a negative integer: not whole, but it can be written as \\(\\tfrac{-4}{1}\\)" },
  { tex: "\\tfrac{3}{5}", value: 0.6, sets: ["Q", "R"], why: "a quotient of two integers, but not an integer itself" },
  { tex: "-2.75", value: -2.75, sets: ["Q", "R"], why: "a terminating decimal: \\(-2.75=-\\tfrac{11}{4}\\)" },
  { tex: "0.\\overline{3}", value: 1 / 3, sets: ["Q", "R"], why: "a repeating decimal: \\(0.\\overline{3}=\\tfrac{1}{3}\\)" },
  { tex: "\\sqrt{16}", value: 4, sets: ["N", "W", "I", "Q", "R"], why: "simplify first: \\(\\sqrt{16}=4\\), a natural number" },
  { tex: "\\sqrt{2}", value: Math.SQRT2, sets: ["Qbar", "R"], why: "\\(\\sqrt{2}=1.41421356\\ldots\\) never ends or repeats, so it is not a fraction of integers" },
  { tex: "\\pi", value: Math.PI, sets: ["Qbar", "R"], why: "\\(\\pi=3.14159265\\ldots\\) is non-terminating and non-repeating" },
  { tex: "-\\sqrt{9}", value: -3, sets: ["I", "Q", "R"], why: "simplify first: \\(-\\sqrt{9}=-3\\), a negative integer" },
];

/** Classify a typed number: integers, terminating decimals and a/b fractions. */
function classify(raw: string): Num | null {
  const s = raw.trim().replace(/−/g, "-");
  const fr = s.match(/^(-?\d+)\s*\/\s*(-?\d+)$/);
  if (fr && Number(fr[2]) !== 0) {
    const v = Number(fr[1]) / Number(fr[2]);
    if (Number.isInteger(v)) return classify(String(v));
    return { tex: `\\tfrac{${fr[1]}}{${fr[2]}}`, value: v, sets: ["Q", "R"], why: "a quotient of two integers that does not simplify to an integer" };
  }
  if (!/^-?\d*\.?\d+$/.test(s)) return null;
  const v = Number(s);
  if (Number.isInteger(v)) {
    if (v > 0) return { tex: String(v), value: v, sets: ["N", "W", "I", "Q", "R"], why: "a positive integer — a counting number" };
    if (v === 0) return PRESETS[1];
    return { tex: String(v), value: v, sets: ["I", "Q", "R"], why: "a negative integer" };
  }
  return { tex: s, value: v, sets: ["Q", "R"], why: "a terminating decimal, which can be written as a fraction over a power of 10" };
}

export function NumberSets() {
  const [n, setN] = useState<Num>(PRESETS[3]);
  const [typed, setTyped] = useState("");
  const [err, setErr] = useState(false);
  const inSet = (k: SetKey) => n.sets.includes(k);

  // Nested rectangles; irrationals sit beside the rationals inside the reals.
  const box = (k: SetKey, x: number, y: number, w: number, h: number) => {
    const s = SETS.find((z) => z.key === k)!;
    const on = inSet(k);
    return (
      <g key={k}>
        <rect x={x} y={y} width={w} height={h} rx={12} fill={on ? s.soft : "#fff"} stroke={s.color} strokeWidth={on ? 3 : 1.4} opacity={on ? 1 : 0.85} />
        <text x={x + 10} y={y + 20} fontSize={13.5} fontWeight={on ? 800 : 600} fill={s.color}>{s.name}</text>
      </g>
    );
  };
  // Where the dot goes: innermost set.
  const order: SetKey[] = ["N", "W", "I", "Q", "Qbar"];
  const inner = order.find((k) => inSet(k)) ?? "R";
  const dotAt: Record<SetKey, [number, number]> = { N: [205, 200], W: [205, 150], I: [205, 118], Q: [382, 150], Qbar: [520, 140], R: [520, 40] };
  const [dx, dy] = dotAt[inner];

  // number line from -5 to 8
  const X = (v: number) => 30 + ((Math.max(-5, Math.min(8, v)) + 5) / 13) * 560;

  return (
    <WidgetCard title="Where does a number live?" subtitle="Pick a number — every set it belongs to lights up">
      <Row gap={8}>
        {PRESETS.map((p) => (
          <button key={p.tex} type="button" onClick={() => { setN(p); setErr(false); }} style={{ ...btn(false), background: p.tex === n.tex ? "#1e3a8a" : "#fff", color: p.tex === n.tex ? "#fff" : C.ink, minWidth: 54 }}>
            <MathText html={`\\(${p.tex}\\)`} />
          </button>
        ))}
        <form onSubmit={(e) => { e.preventDefault(); const c = classify(typed); if (c) { setN(c); setErr(false); } else setErr(true); }} style={{ display: "flex", gap: 6 }}>
          <input value={typed} onChange={(e) => setTyped(e.target.value)} placeholder="or type: -12, 5/8, 0.45" style={{ border: "1px solid #cbd5e1", borderRadius: 9, padding: "7px 10px", width: 170, fontSize: 14 }} aria-label="Type a number to classify" />
          <button type="submit" style={btn(true)}>Classify</button>
        </form>
      </Row>
      {err && <p style={{ color: C.red, fontSize: 13.5, margin: "6px 0 0" }}>Type an integer, a decimal like 0.45, or a fraction like 5/8.</p>}

      <svg viewBox="0 0 640 250" style={{ width: "100%", maxWidth: 700, display: "block", margin: "14px auto 4px" }} role="img" aria-label={`Nested number sets with ${n.tex} highlighted`}>
        {box("R", 6, 6, 628, 238)}
        {box("Q", 20, 32, 380, 204)}
        {box("I", 34, 82, 330, 148)}
        {box("W", 48, 128, 300, 96)}
        {box("N", 62, 172, 270, 46)}
        {box("Qbar", 414, 32, 206, 204)}
        <circle cx={dx} cy={dy} r={9} fill="#dc2626" stroke="#fff" strokeWidth={2.5}>
          <animate attributeName="r" values="9;12;9" dur="1.2s" repeatCount="indefinite" />
        </circle>
      </svg>

      <svg viewBox="0 0 620 60" style={{ width: "100%", maxWidth: 700, display: "block", margin: "0 auto 10px" }} aria-hidden>
        <line x1={20} y1={30} x2={600} y2={30} stroke="#334155" strokeWidth={2} />
        {Array.from({ length: 14 }, (_, i) => i - 5).map((v) => (
          <g key={v}><line x1={X(v)} y1={24} x2={X(v)} y2={36} stroke="#334155" strokeWidth={v === 0 ? 2.4 : 1.3} /><text x={X(v)} y={52} fontSize={12} textAnchor="middle" fill={C.ink}>{v < 0 ? `−${-v}` : v}</text></g>
        ))}
        <circle cx={X(n.value)} cy={30} r={7} fill="#dc2626" stroke="#fff" strokeWidth={2} style={{ transition: "cx 0.45s ease" }} />
      </svg>

      <Readout tone="blue">
        <MathText html={`\\(${n.tex}\\) is ${n.why}.`} />
        <div style={{ marginTop: 8, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {SETS.map((s) => (
            <span key={s.key} style={{ fontSize: 13, fontWeight: 700, padding: "3px 10px", borderRadius: 999, border: `1px solid ${s.color}`, color: inSet(s.key) ? "#fff" : s.color, background: inSet(s.key) ? s.color : "#fff", opacity: inSet(s.key) ? 1 : 0.55 }}>
              {inSet(s.key) ? "✓ " : "✗ "}{s.name}
            </span>
          ))}
        </div>
      </Readout>
    </WidgetCard>
  );
}

"use client";

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, gcd } from "./kit";

/** Ratio a:b scaled by k — two-colour bar model, double number line and ratio table. */
export function RatioScale({ initA = 2, initB = 3, labels = ["juice", "water"] }: { initA?: number; initB?: number; labels?: [string, string] }) {
  const [a, setA] = useState(initA);
  const [b, setB] = useState(initB);
  const [k, setK] = useState(3);
  const g = gcd(a, b);
  const unit = Math.min(30, 540 / ((a + b) * k));
  const W = 600;
  const X1 = (v: number) => 30 + (v / (a * 6)) * (W - 60), X2 = (v: number) => 30 + (v / (b * 6)) * (W - 60);

  return (
    <WidgetCard title="Scaling a ratio" subtitle="Multiply both parts by the same number — the mix stays the same">
      <Row>
        <Slider label={labels[0]} value={a} min={1} max={9} onChange={setA} color={C.amber} />
        <Slider label={labels[1]} value={b} min={1} max={9} onChange={setB} color={C.blue} />
        <Slider label="scale ×" value={k} min={1} max={6} onChange={setK} color={C.green} />
      </Row>
      <div style={{ margin: "14px 0 6px", display: "flex", flexWrap: "wrap", gap: 3 }} aria-label="Bar model">
        {Array.from({ length: k }, (_, j) => (
          <div key={j} style={{ display: "flex", gap: 1, padding: 3, border: "1px dashed #94a3b8", borderRadius: 6 }}>
            {Array.from({ length: a }, (_, i) => <span key={"a" + i} style={{ width: unit, height: 26, background: C.amberSoft, border: `1.5px solid ${C.amber}`, borderRadius: 3 }} />)}
            {Array.from({ length: b }, (_, i) => <span key={"b" + i} style={{ width: unit, height: 26, background: C.blueSoft, border: `1.5px solid ${C.blue}`, borderRadius: 3 }} />)}
          </div>
        ))}
      </div>
      <p style={{ margin: "0 0 8px", fontSize: 13.5, color: C.muted }}>{k} batch{k === 1 ? "" : "es"} of {a} {labels[0]} : {b} {labels[1]}.</p>

      <svg viewBox={`0 0 ${W} 110`} style={{ width: "100%", display: "block" }} role="img" aria-label="Double number line">
        {[[30, C.amber, X1, a, labels[0]], [78, C.blue, X2, b, labels[1]]].map(([y, col, X, step, lab]) => {
          const yy = y as number, Xf = X as (v: number) => number, s = step as number;
          return (
            <g key={lab as string}>
              <line x1={20} y1={yy} x2={W - 20} y2={yy} stroke={col as string} strokeWidth={2} />
              <text x={W - 20} y={yy - 8} fontSize={11.5} textAnchor="end" fill={col as string} fontWeight={700}>{lab as string}</text>
              {Array.from({ length: 7 }, (_, i) => (
                <g key={i}>
                  <line x1={Xf(i * s)} y1={yy - 6} x2={Xf(i * s)} y2={yy + 6} stroke={col as string} strokeWidth={i === k ? 3 : 1.4} />
                  <text x={Xf(i * s)} y={yy + 20} fontSize={12} textAnchor="middle" fontWeight={i === k ? 800 : 500} fill={i === k ? C.green : C.ink}>{i * s}</text>
                </g>
              ))}
            </g>
          );
        })}
        <line x1={X1(a * k)} y1={30} x2={X2(b * k)} y2={78} stroke={C.green} strokeWidth={2} strokeDasharray="4 3" />
      </svg>

      <Readout tone="green">
        <div style={{ fontSize: 19, fontWeight: 800 }}><MathText html={`\\(${a}:${b}=${a * k}:${b * k}\\)`} /></div>
        <MathText html={`Both terms were multiplied by \\(${k}\\). As fractions, \\(\\tfrac{${a}}{${b}}=\\tfrac{${a * k}}{${b * k}}\\) — that equation is a <strong>proportion</strong>. ${g > 1 ? `The ratio \\(${a}:${b}\\) is not in lowest terms: divide by \\(${g}\\) to get \\(${a / g}:${b / g}\\).` : `\\(${a}:${b}\\) is already in lowest terms.`} Part-to-whole: ${labels[0]} is \\(\\tfrac{${a}}{${a + b}}\\) of the mixture.`} />
      </Readout>
    </WidgetCard>
  );
}

/** Percent bar: part of a whole, or a percent increase/decrease as a multiplier. */
export function PercentBar({ initWhole = 80, initPct = 35 }: { initWhole?: number; initPct?: number }) {
  const [whole, setWhole] = useState(initWhole);
  const [pct, setPct] = useState(initPct);
  const [mode, setMode] = useState<"of" | "up" | "down">("of");
  const part = (whole * pct) / 100;
  const mult = mode === "up" ? 1 + pct / 100 : mode === "down" ? 1 - pct / 100 : pct / 100;
  const result = whole * mult;
  const W = 600, scale = (W - 40) / (Math.max(whole, result) * 1.02);
  const r2 = (x: number) => Math.round(x * 100) / 100;

  return (
    <WidgetCard title="Percent bar" subtitle="100% is the whole; slide the percent and watch the part">
      <Row>
        <Slider label="whole" value={whole} min={10} max={200} step={5} onChange={setWhole} color={C.blue} />
        <Slider label="percent" value={pct} min={0} max={100} onChange={setPct} color={C.amber} format={(v) => `${v}%`} />
      </Row>
      <div style={{ margin: "12px 0" }}>
        <Segmented options={[{ value: "of", label: "Percent of" }, { value: "up", label: "Increase by" }, { value: "down", label: "Decrease by" }]} value={mode} onChange={setMode} />
      </div>
      <svg viewBox={`0 0 ${W} 120`} style={{ width: "100%", display: "block" }} role="img" aria-label="Percent bar model">
        <rect x={20} y={18} width={whole * scale} height={34} fill={C.blueSoft} stroke={C.blue} strokeWidth={1.6} />
        {Array.from({ length: 11 }, (_, i) => <g key={i}><line x1={20 + (whole * scale * i) / 10} y1={52} x2={20 + (whole * scale * i) / 10} y2={60} stroke={C.blue} /><text x={20 + (whole * scale * i) / 10} y={72} fontSize={10.5} textAnchor="middle" fill={C.muted}>{i * 10}%</text></g>)}
        {mode === "of" && <rect x={20} y={18} width={part * scale} height={34} fill={C.amberSoft} stroke={C.amber} strokeWidth={2} style={{ transition: "width 0.3s" }} />}
        {mode !== "of" && <rect x={20} y={80} width={result * scale} height={26} fill={mode === "up" ? C.greenSoft : C.redSoft} stroke={mode === "up" ? C.green : C.red} strokeWidth={2} style={{ transition: "width 0.3s" }} />}
        <text x={20 + whole * scale - 6} y={40} fontSize={12.5} fontWeight={700} textAnchor="end" fill={C.blue}>{`whole = ${whole}`}</text>
        {mode === "of" && part * scale > 70 && <text x={24} y={40} fontSize={12.5} fontWeight={800} fill={C.amber}>{`part = ${r2(part)}`}</text>}
        {mode !== "of" && <text x={24 + 4} y={98} fontSize={12.5} fontWeight={800} fill={mode === "up" ? C.green : C.red}>{`new amount = ${r2(result)}`}</text>}
      </svg>
      <Readout tone={mode === "down" ? "red" : "green"}>
        {mode === "of" ? (
          <><div style={{ fontSize: 19, fontWeight: 800 }}><MathText html={`\\(${pct}\\%\\text{ of }${whole}=${(pct / 100).toString()}\\times${whole}=${r2(part)}\\)`} /></div>
            <MathText html={`Percent means "per hundred": \\(${pct}\\%=\\tfrac{${pct}}{100}=${pct / 100}\\). Check with the proportion \\(\\tfrac{\\text{part}}{${whole}}=\\tfrac{${pct}}{100}\\).`} /></>
        ) : (
          <><div style={{ fontSize: 19, fontWeight: 800 }}><MathText html={`\\(${whole}\\times(1${mode === "up" ? "+" : "-"}${pct / 100})=${whole}\\times${r2(mult)}=${r2(result)}\\)`} /></div>
            <MathText html={`A ${pct}% ${mode === "up" ? "increase" : "decrease"} leaves you with \\(${mode === "up" ? 100 + pct : 100 - pct}\\%\\) of the original, so multiply by \\(${r2(mult)}\\) in one step. The change itself is \\(${r2(part)}\\).`} /></>
        )}
      </Readout>
    </WidgetCard>
  );
}

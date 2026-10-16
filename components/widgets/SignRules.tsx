"use client";

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, fmtInt, texInt } from "./kit";

// Multiplying integers as repeated jumps, plus the pattern table that explains
// why a negative times a negative is positive. Division is shown as the
// inverse: a ÷ b = q because q × b = a.

export function SignRules({ initA = 3, initB = -4 }: { initA?: number; initB?: number }) {
  const [a, setA] = useState(initA);
  const [b, setB] = useState(initB);
  const [mode, setMode] = useState<"jumps" | "pattern" | "divide">("jumps");
  const p = a * b;

  // zoom the line to the product: ±10 at least, in steps of 5
  const R = Math.max(10, Math.ceil((Math.abs(p) + 2) / 5) * 5);
  const lo = -R, hi = R, W = 640, tick = R > 20 ? 5 : 1;
  const X = (v: number) => 20 + ((Math.max(lo, Math.min(hi, v)) - lo) / (hi - lo)) * (W - 40);
  const n = Math.abs(a);
  const step = a >= 0 ? b : -b; // a<0: jumps of the opposite of b
  const jumps = Array.from({ length: n }, (_, i) => [i * step, (i + 1) * step]);

  const signWord = (x: number) => (x > 0 ? "positive" : x < 0 ? "negative" : "zero");

  return (
    <WidgetCard title="Why the sign rules work" subtitle="Multiplication is repeated jumps; division undoes it">
      <Row>
        <Slider label="a" value={a} min={-6} max={6} onChange={setA} color={C.blue} />
        <Slider label="b" value={b} min={-6} max={6} onChange={setB} color={C.red} />
      </Row>
      <div style={{ margin: "12px 0" }}>
        <Segmented options={[{ value: "jumps", label: "Jumps on a line" }, { value: "pattern", label: "Pattern table" }, { value: "divide", label: "Division check" }]} value={mode} onChange={setMode} />
      </div>

      {mode === "jumps" && (
        <>
          <svg viewBox={`0 0 ${W} 120`} style={{ width: "100%", display: "block" }} role="img" aria-label={`${a} times ${b} as ${n} jumps`}>
            <line x1={10} y1={85} x2={W - 10} y2={85} stroke="#334155" strokeWidth={2} />
            {Array.from({ length: (hi - lo) / tick + 1 }, (_, i) => lo + i * tick).map((v) => (
              <g key={v}><line x1={X(v)} y1={79} x2={X(v)} y2={91} stroke="#334155" strokeWidth={v === 0 ? 2.6 : 1.1} />{(v % 5 === 0 || v === p) && <text x={X(v)} y={108} fontSize={11.5} textAnchor="middle" fontWeight={v === p ? 800 : 500} fill={v === p ? C.green : C.ink}>{fmtInt(v)}</text>}</g>
            ))}
            {jumps.map(([f, t], i) => (
              <path key={i} d={`M${X(f)},84 Q${(X(f) + X(t)) / 2},${40 - (i % 2) * 10} ${X(t)},84`} fill="none" stroke={a >= 0 ? C.blue : C.red} strokeWidth={2.3} />
            ))}
            <circle cx={X(p)} cy={85} r={7.5} fill={C.green} stroke="#fff" strokeWidth={2} />
          </svg>
          <Readout tone="green">
            <div style={{ fontSize: 20, fontWeight: 800 }}><MathText html={`\\(${texInt(a, false)}\\times ${texInt(b)}=${texInt(p, false)}\\)`} /></div>
            <MathText html={a === 0 || b === 0
              ? "Zero jumps, or jumps of size zero, leave you at \\(0\\)."
              : a > 0
                ? `\\(${a}\\) jumps of \\(${texInt(b)}\\) starting at \\(0\\). ${b < 0 ? "Each jump goes left, so the product is negative." : "Each jump goes right, so the product is positive."}`
                : `A negative multiplier means the <em>opposite</em> of \\(${n}\\) jumps of \\(${texInt(b)}\\): jump \\(${n}\\) times by \\(${texInt(-b)}\\) instead. ${b < 0 ? "Negative × negative lands on the positive side." : "The product is negative."}`} />
          </Readout>
        </>
      )}

      {mode === "pattern" && (
        <>
          <p style={{ margin: "0 0 8px", color: C.muted, fontSize: 14.5 }}>
            Keep <MathText html={`\\(b=${texInt(b, false)}\\)`} /> fixed and count the first factor down. Each product changes by the same amount, so the pattern must continue past zero.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: 15 }}>
              <tbody>
                {[3, 2, 1, 0, -1, -2, -3].map((k) => {
                  const v = k * b, hl = k === a;
                  return (
                    <tr key={k} style={{ background: hl ? C.greenSoft : k < 0 ? "#fff7ed" : "#fff" }}>
                      <td style={{ padding: "5px 14px", border: `1px solid ${C.line}` }}><MathText html={`\\(${texInt(k, false)}\\times ${texInt(b)}\\)`} /></td>
                      <td style={{ padding: "5px 14px", border: `1px solid ${C.line}`, fontWeight: 800, color: v < 0 ? C.red : v > 0 ? C.blue : C.ink, textAlign: "right" }}>{fmtInt(v)}</td>
                      <td style={{ padding: "5px 14px", border: `1px solid ${C.line}`, color: C.muted, fontSize: 13 }}>{k === 3 ? "" : b === 0 ? "no change" : `${b < 0 ? "+" : "−"}${Math.abs(b)} from the row above`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Readout tone="blue">
            <MathText html={b < 0 ? "Going down the table, the products <strong>increase</strong> by " + Math.abs(b) + " each row. After \\(0\\) they keep increasing, so a negative times a negative is positive." : b > 0 ? "Going down the table, the products <strong>decrease</strong> by " + b + " each row. After \\(0\\) they keep decreasing, so a negative times a positive is negative." : "Every product with 0 is 0."} />
          </Readout>
        </>
      )}

      {mode === "divide" && (
        <Readout tone="amber">
          {b === 0 ? (
            <MathText html={`\\(${texInt(p, false)}\\div 0\\) is <strong>undefined</strong>: no number times \\(0\\) gives \\(${texInt(p, false)}\\)${p === 0 ? " (for \\(0\\div0\\), every number works, so there is no single answer)" : ""}.`} />
          ) : (
            <>
              <div style={{ fontSize: 20, fontWeight: 800 }}><MathText html={`\\(${texInt(p, false)}\\div ${texInt(b)}=${texInt(a, false)}\\)`} /></div>
              <MathText html={`Check by multiplying back: \\(${texInt(a, false)}\\times ${texInt(b)}=${texInt(p, false)}\\). The dividend is ${signWord(p)} and the divisor is ${signWord(b)}, so the quotient is ${signWord(a)}${a === 0 ? "" : ` — ${Math.sign(p) === Math.sign(b) ? "same signs give a positive" : "different signs give a negative"}`}.`} />
            </>
          )}
        </Readout>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 8, marginTop: 12, fontSize: 14 }}>
        {[["(+)(+)", "+", C.blue], ["(−)(−)", "+", C.blue], ["(+)(−)", "−", C.red], ["(−)(+)", "−", C.red]].map(([k, v, col]) => (
          <div key={k} style={{ border: `1px solid ${C.line}`, borderRadius: 8, padding: "6px 10px", textAlign: "center", background: C.panel }}>
            <strong>{k}</strong> → <strong style={{ color: col }}>{v}</strong>
          </div>
        ))}
      </div>
    </WidgetCard>
  );
}

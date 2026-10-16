"use client";

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, gcd, lcm, texFrac } from "./kit";

/** A fraction bar of `whole` width cut into d parts with n shaded (n may exceed d: extra bars). */
function Bar({ n, d, color, soft, label, unit = 520 }: { n: number; d: number; color: string; soft: string; label: string; unit?: number }) {
  const bars = Math.max(1, Math.ceil(Math.abs(n) / d));
  const cell = unit / d, H = 34;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "4px 0", flexWrap: "wrap" }}>
      <span style={{ minWidth: 92, fontWeight: 700, color, fontSize: 19 }}><MathText html={label} /></span>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", flex: 1 }}>
        {Array.from({ length: bars }, (_, k) => (
          <svg key={k} viewBox={`0 0 ${unit + 4} ${H + 4}`} style={{ width: bars > 1 ? "calc(50% - 4px)" : "100%", maxWidth: unit, minWidth: 180 }} aria-hidden>
            {Array.from({ length: d }, (_, i) => {
              const idx = k * d + i;
              return <rect key={i} x={2 + i * cell} y={2} width={cell} height={H} fill={idx < Math.abs(n) ? soft : "#fff"} stroke={color} strokeWidth={1.4} style={{ transition: "fill 0.3s" }} />;
            })}
          </svg>
        ))}
      </div>
    </div>
  );
}

export function FractionAddSub({ init = [2, 3, 1, 4] as [number, number, number, number] }: { init?: [number, number, number, number] }) {
  const [[a, b, c, d], set] = useState(init);
  const [op, setOp] = useState<"+" | "-" | "cmp">("+");
  const L = lcm(b, d), ka = L / b, kc = L / d;
  const A = a * ka, Cn = c * kc;
  const R = op === "+" ? A + Cn : A - Cn;
  const upd = (i: number, v: number) => set((s) => s.map((x, j) => (j === i ? v : x)) as [number, number, number, number]);
  const g = gcd(R, L);

  return (
    <WidgetCard title="Fraction bars" subtitle="Re-cut both bars into the same number of equal parts">
      <Row>
        <Slider label="1st top" value={a} min={0} max={11} onChange={(v) => upd(0, v)} color={C.blue} />
        <Slider label="1st bottom" value={b} min={2} max={12} onChange={(v) => upd(1, v)} color={C.blue} />
        <Slider label="2nd top" value={c} min={0} max={11} onChange={(v) => upd(2, v)} color={C.amber} />
        <Slider label="2nd bottom" value={d} min={2} max={12} onChange={(v) => upd(3, v)} color={C.amber} />
      </Row>
      <div style={{ margin: "12px 0" }}>
        <Segmented options={[{ value: "+", label: "Add" }, { value: "-", label: "Subtract" }, { value: "cmp", label: "Compare" }]} value={op} onChange={setOp} />
      </div>
      <p style={{ margin: "4px 0", fontSize: 13.5, color: C.muted }}>Step 1 — the original bars (different-sized parts, so they cannot be combined yet):</p>
      <Bar n={a} d={b} color={C.blue} soft={C.blueSoft} label={`\\(\\tfrac{${a}}{${b}}\\)`} />
      <Bar n={c} d={d} color={C.amber} soft={C.amberSoft} label={`\\(\\tfrac{${c}}{${d}}\\)`} />
      <p style={{ margin: "10px 0 4px", fontSize: 13.5, color: C.muted }}>
        Step 2 — cut every bar into <strong>{L}</strong> parts (the lowest common denominator, LCD = LCM of {b} and {d}):
      </p>
      <Bar n={A} d={L} color={C.blue} soft={C.blueSoft} label={`\\(\\tfrac{${A}}{${L}}\\)`} />
      <Bar n={Cn} d={L} color={C.amber} soft={C.amberSoft} label={`\\(\\tfrac{${Cn}}{${L}}\\)`} />
      {op !== "cmp" && (
        <>
          <p style={{ margin: "10px 0 4px", fontSize: 13.5, color: C.muted }}>Step 3 — now the parts match, so {op === "+" ? "add" : "subtract"} the numerators:</p>
          <Bar n={R} d={L} color={R < 0 ? C.red : C.green} soft={R < 0 ? C.redSoft : C.greenSoft} label={`\\(${texFrac(R, L)}\\)`} />
        </>
      )}
      <Readout tone={op === "cmp" ? "blue" : "green"}>
        {op === "cmp" ? (
          <MathText html={`\\(\\tfrac{${a}}{${b}}=\\tfrac{${A}}{${L}}\\) and \\(\\tfrac{${c}}{${d}}=\\tfrac{${Cn}}{${L}}\\). With equal denominators, compare numerators: \\(${A}${A > Cn ? ">" : A < Cn ? "<" : "="}${Cn}\\), so \\(\\tfrac{${a}}{${b}}${A > Cn ? ">" : A < Cn ? "<" : "="}\\tfrac{${c}}{${d}}\\).`} />
        ) : (
          <>
            <div style={{ fontSize: 19, fontWeight: 800 }}>
              <MathText html={`\\(\\tfrac{${a}}{${b}}${op}\\tfrac{${c}}{${d}}=\\tfrac{${A}}{${L}}${op}\\tfrac{${Cn}}{${L}}=\\tfrac{${R}}{${L}}${g > 1 && R !== 0 ? `=${texFrac(R, L)}` : ""}\\)`} />
            </div>
            <MathText html={`Multiply top and bottom of \\(\\tfrac{${a}}{${b}}\\) by \\(${ka}\\) and of \\(\\tfrac{${c}}{${d}}\\) by \\(${kc}\\) — this changes the look, not the value. ${g > 1 && R !== 0 ? `Then simplify by dividing top and bottom by \\(${g}\\).` : ""}${Math.abs(R) > L && R % L !== 0 ? ` As a mixed number: \\(${R < 0 ? "-" : ""}${Math.floor(Math.abs(R) / L)}${texFrac(Math.abs(R) % L, L)}\\).` : ""}`} />
          </>
        )}
      </Readout>
    </WidgetCard>
  );
}

export function FractionMulDiv({ init = [2, 3, 3, 4] as [number, number, number, number] }: { init?: [number, number, number, number] }) {
  const [[a, b, c, d], set] = useState(init);
  const [mode, setMode] = useState<"mul" | "div">("mul");
  const upd = (i: number, v: number) => set((s) => s.map((x, j) => (j === i ? v : x)) as [number, number, number, number]);
  const cw = Math.min(56, 420 / b), ch = Math.min(40, 260 / d);
  const W = b * cw + 20, H = d * ch + 20;

  // division: how many (c/d) fit in (a/b)? measured on a common denominator bar
  const L = lcm(b, d), A = a * (L / b), Cn = c * (L / d);

  return (
    <WidgetCard title={mode === "mul" ? "Area model for multiplying" : "How many fit? — dividing fractions"} subtitle={mode === "mul" ? "Overlap of the two shadings is the product" : "Dividing asks how many groups of the divisor fit"}>
      <Row>
        <Slider label="1st top" value={a} min={1} max={b} onChange={(v) => upd(0, v)} color={C.blue} />
        <Slider label="1st bottom" value={b} min={2} max={8} onChange={(v) => set(([, , x, y]) => [Math.min(a, v), v, x, y])} color={C.blue} />
        <Slider label="2nd top" value={c} min={1} max={d} onChange={(v) => upd(2, v)} color={C.amber} />
        <Slider label="2nd bottom" value={d} min={2} max={8} onChange={(v) => set(([x, y]) => [x, y, Math.min(c, v), v])} color={C.amber} />
      </Row>
      <div style={{ margin: "12px 0" }}>
        <Segmented options={[{ value: "mul", label: "Multiply ×" }, { value: "div", label: "Divide ÷" }]} value={mode} onChange={setMode} />
      </div>
      {mode === "mul" ? (
        <>
          <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: W * 1.2, display: "block", margin: "0 auto" }} role="img" aria-label={`Area model: ${a}/${b} times ${c}/${d}`}>
            {Array.from({ length: b }, (_, i) => Array.from({ length: d }, (_, j) => {
              const inA = i < a, inC = j < c;
              return <rect key={`${i}-${j}`} x={10 + i * cw} y={10 + j * ch} width={cw} height={ch} fill={inA && inC ? "#86efac" : inA ? C.blueSoft : inC ? C.amberSoft : "#fff"} stroke="#475569" strokeWidth={1.2} style={{ transition: "fill 0.3s" }} />;
            }))}
          </svg>
          <p style={{ textAlign: "center", fontSize: 13.5, color: C.muted, margin: "6px 0 10px" }}>
            Blue columns: <MathText html={`\\(\\tfrac{${a}}{${b}}\\)`} /> of the square. Yellow rows: <MathText html={`\\(\\tfrac{${c}}{${d}}\\)`} />. Green overlap: {a * c} of the {b * d} small rectangles.
          </p>
          <Readout tone="green">
            <div style={{ fontSize: 19, fontWeight: 800 }}><MathText html={`\\(\\tfrac{${a}}{${b}}\\times\\tfrac{${c}}{${d}}=\\tfrac{${a}\\times${c}}{${b}\\times${d}}=\\tfrac{${a * c}}{${b * d}}${gcd(a * c, b * d) > 1 ? `=${texFrac(a * c, b * d)}` : ""}\\)`} /></div>
            <MathText html="Multiply the tops, multiply the bottoms. No common denominator is needed — the grid makes the new denominator for you." />
          </Readout>
        </>
      ) : (
        <>
          <svg viewBox="0 0 560 120" style={{ width: "100%", display: "block" }} role="img" aria-label={`${a}/${b} divided by ${c}/${d}`}>
            {Array.from({ length: L }, (_, i) => <rect key={i} x={20 + (i * 520) / L} y={10} width={520 / L} height={34} fill={i < A ? C.blueSoft : "#fff"} stroke={C.blue} strokeWidth={1.2} />)}
            <text x={20} y={62} fontSize={12.5} fill={C.blue} fontWeight={700}>{`${a}/${b} = ${A}/${L} of the whole`}</text>
            {Array.from({ length: Math.ceil(A / Cn) }, (_, k) => {
              const x0 = 20 + ((k * Cn) * 520) / L, w = (Math.min(Cn, A - k * Cn) * 520) / L, full = (k + 1) * Cn <= A;
              return <g key={k}><rect x={x0} y={72} width={w} height={24} rx={4} fill={full ? C.amberSoft : "#fff7ed"} stroke={C.amber} strokeDasharray={full ? undefined : "4 3"} strokeWidth={1.6} /><text x={x0 + w / 2} y={89} fontSize={12} textAnchor="middle" fill={C.amber} fontWeight={800}>{full ? `group ${k + 1}` : `${A - k * Cn}/${Cn} of a group`}</text></g>;
            })}
          </svg>
          <Readout tone="green">
            <div style={{ fontSize: 19, fontWeight: 800 }}><MathText html={`\\(\\tfrac{${a}}{${b}}\\div\\tfrac{${c}}{${d}}=\\tfrac{${a}}{${b}}\\times\\tfrac{${d}}{${c}}=${texFrac(a * d, b * c)}\\)`} /></div>
            <MathText html={`Groups of \\(\\tfrac{${c}}{${d}}=\\tfrac{${Cn}}{${L}}\\) fit into \\(\\tfrac{${A}}{${L}}\\) exactly \\(${A}\\div${Cn}=${texFrac(A, Cn)}\\) times. The shortcut gives the same answer: multiply by the <strong>reciprocal</strong> \\(\\tfrac{${d}}{${c}}\\) (flip the divisor).`} />
          </Readout>
        </>
      )}
    </WidgetCard>
  );
}

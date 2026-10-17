"use client";

// MPM2D chapter 1 (linear systems) explorers: a line in standard form, two lines and their number of
// solutions, step-by-step substitution, elimination with multipliers (equivalent systems on the graph),
// and word problems turned into systems.

import { useState, type ReactNode } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, btn, gcd } from "./kit";

export type View = { xmin: number; xmax: number; ymin: number; ymax: number };
const W = 520, H = 400;
export const r2 = (v: number, d = 2) => { const k = 10 ** d; const r = Math.round(v * k) / k; return Object.is(r, -0) ? "0" : String(r); };
/** exact fraction p/q in LaTeX */
export function fr(p: number, q = 1): string {
  if (q < 0) { p = -p; q = -q; }
  const g = gcd(Math.round(p), Math.round(q)) || 1; p = Math.round(p) / g; q = Math.round(q) / g;
  return q === 1 ? String(p) : `${p < 0 ? "-" : ""}\\tfrac{${Math.abs(p)}}{${q}}`;
}
/** a·x + b·y = c as LaTeX */
export function stdTex(a: number, b: number, c: number) {
  const term = (k: number, v: string, first: boolean) => k === 0 ? "" : `${first ? (k < 0 ? "-" : "") : k < 0 ? "-" : "+"}${Math.abs(k) === 1 ? "" : Math.abs(k)}${v}`;
  const lhs = `${term(a, "x", true)}${term(b, "y", a === 0)}` || "0";
  return `${lhs}=${c}`;
}

export function Plane({ view, children, label, step = 1 }: { view: View; children: (X: (x: number) => number, Y: (y: number) => number) => ReactNode; label: string; step?: number }) {
  const { xmin, xmax, ymin, ymax } = view;
  const X = (x: number) => ((x - xmin) / (xmax - xmin)) * W, Y = (y: number) => H - ((y - ymin) / (ymax - ymin)) * H;
  const xs: number[] = [], ys: number[] = [];
  for (let x = Math.ceil(xmin / step) * step; x <= xmax; x += step) xs.push(x);
  for (let y = Math.ceil(ymin / step) * step; y <= ymax; y += step) ys.push(y);
  const id = `sys-${label.replace(/\W/g, "")}`;
  return (
    <svg viewBox={`-28 -8 ${W + 40} ${H + 30}`} style={{ width: "100%", maxWidth: 560, display: "block", margin: "8px auto" }} role="img" aria-label={label}>
      <defs><clipPath id={id}><rect x={0} y={0} width={W} height={H} /></clipPath></defs>
      <rect x={0} y={0} width={W} height={H} fill="#fff" stroke={C.line} />
      {xs.map((x) => <line key={"gx" + x} x1={X(x)} y1={0} x2={X(x)} y2={H} stroke="#eef2f7" />)}
      {ys.map((y) => <line key={"gy" + y} x1={0} y1={Y(y)} x2={W} y2={Y(y)} stroke="#eef2f7" />)}
      <line x1={X(0)} y1={0} x2={X(0)} y2={H} stroke={C.ink} strokeWidth={1.5} /><line x1={0} y1={Y(0)} x2={W} y2={Y(0)} stroke={C.ink} strokeWidth={1.5} />
      {xs.filter((x) => x !== 0 && x % (step * 2) === 0).map((x) => <text key={"tx" + x} x={X(x)} y={Y(0) + 14} fontSize={11} textAnchor="middle" fill={C.muted}>{x}</text>)}
      {ys.filter((y) => y !== 0 && y % (step * 2) === 0).map((y) => <text key={"ty" + y} x={X(0) - 5} y={Y(y) + 4} fontSize={11} textAnchor="end" fill={C.muted}>{y}</text>)}
      <g clipPath={`url(#${id})`}>{children(X, Y)}</g>
    </svg>
  );
}
/** segment of ax + by = c across the view (handles vertical lines) */
export function stdSeg(X: (x: number) => number, Y: (y: number) => number, a: number, b: number, c: number, v: View) {
  if (b === 0) { const x = c / a; return { x1: X(x), y1: Y(v.ymin), x2: X(x), y2: Y(v.ymax) }; }
  const f = (x: number) => (c - a * x) / b;
  return { x1: X(v.xmin), y1: Y(f(v.xmin)), x2: X(v.xmax), y2: Y(f(v.xmax)) };
}
export const V10: View = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 };

/* ---------------------------------------------------------------- 1.1 standard form */

export function StandardForm({ init = [2, 3, 12] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [c, setC] = useState(init[2]);
  const xi = a !== 0 ? c / a : NaN, yi = b !== 0 ? c / b : NaN;
  return (
    <WidgetCard title="A line in standard form" subtitle="Ax + By = C — intercepts, slope and slope-intercept form">
      <Row>
        <Slider label="A" value={a} min={-6} max={6} onChange={setA} color={C.blue} />
        <Slider label="B" value={b} min={-6} max={6} onChange={setB} color={C.red} />
        <Slider label="C" value={c} min={-18} max={18} onChange={setC} color={C.green} />
      </Row>
      {a === 0 && b === 0 ? <Readout tone="amber">A and B cannot both be 0 — that is not a line.</Readout> : (
        <>
          <Plane view={V10} label="Line in standard form">
            {(X, Y) => (
              <>
                <line {...stdSeg(X, Y, a, b, c, V10)} stroke={C.violet} strokeWidth={3} />
                {Number.isFinite(xi) && <circle cx={X(xi)} cy={Y(0)} r={6} fill={C.blue} />}
                {Number.isFinite(yi) && <circle cx={X(0)} cy={Y(yi)} r={6} fill={C.red} />}
              </>
            )}
          </Plane>
          <Readout tone="green">
            <MathText html={`\\(${stdTex(a, b, c)}\\). ${a !== 0 ? `x-intercept: set \\(y=0\\): \\(x=${fr(c, a)}\\). ` : "No x-intercept (horizontal line). "}${b !== 0 ? `y-intercept: set \\(x=0\\): \\(y=${fr(c, b)}\\). ` : "No y-intercept (vertical line). "}${b !== 0 ? `Solving for \\(y\\): \\(y=${a === 0 ? "" : `${fr(-a, b) === "1" ? "" : fr(-a, b) === "-1" ? "-" : fr(-a, b)}x`}${c === 0 ? (a === 0 ? "0" : "") : (a === 0 ? fr(c, b) : (c * b > 0 ? "+" : "") + fr(c, b))}\\), so the slope is \\(m=-\\frac{A}{B}=${fr(-a, b)}\\).` : "A vertical line has an undefined slope."} Plot the two intercepts and join them — the fastest way to graph a line in standard form.`} />
          </Readout>
        </>
      )}
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.2 / 1.6 two lines */

export function SystemGraph({ init = [1, 1, 6, 2, -1, 3] }: { init?: [number, number, number, number, number, number] }) {
  const [p, setP] = useState(init);
  const set = (i: number) => (v: number) => setP((q) => q.map((x, k) => (k === i ? v : x)) as typeof init);
  const [a1, b1, c1, a2, b2, c2] = p;
  const det = a1 * b2 - a2 * b1;
  const x = det !== 0 ? (c1 * b2 - c2 * b1) / det : NaN, y = det !== 0 ? (a1 * c2 - a2 * c1) / det : NaN;
  const same = det === 0 && a1 * c2 === a2 * c1 && b1 * c2 === b2 * c1;
  const kind = det !== 0 ? "one" : same ? "infinite" : "none";
  const bad = (a1 === 0 && b1 === 0) || (a2 === 0 && b2 === 0);
  return (
    <WidgetCard title="Two lines, one system" subtitle="the solution is the point on both lines — if there is one">
      <Row gap={10}><Slider label="A₁" value={a1} min={-6} max={6} onChange={set(0)} color={C.blue} /><Slider label="B₁" value={b1} min={-6} max={6} onChange={set(1)} color={C.blue} /><Slider label="C₁" value={c1} min={-18} max={18} onChange={set(2)} color={C.blue} /></Row>
      <Row gap={10}><Slider label="A₂" value={a2} min={-6} max={6} onChange={set(3)} color={C.red} /><Slider label="B₂" value={b2} min={-6} max={6} onChange={set(4)} color={C.red} /><Slider label="C₂" value={c2} min={-18} max={18} onChange={set(5)} color={C.red} /></Row>
      {bad ? <Readout tone="amber">A and B cannot both be 0.</Readout> : (
        <>
          <Plane view={V10} label="Two lines">
            {(X, Y) => (
              <>
                <line {...stdSeg(X, Y, a1, b1, c1, V10)} stroke={C.blue} strokeWidth={same ? 6 : 3} opacity={same ? 0.5 : 1} />
                <line {...stdSeg(X, Y, a2, b2, c2, V10)} stroke={C.red} strokeWidth={3} strokeDasharray={same ? "8 6" : undefined} />
                {kind === "one" && <circle cx={X(x)} cy={Y(y)} r={7} fill={C.green} stroke="#fff" strokeWidth={2} />}
              </>
            )}
          </Plane>
          <Readout tone={kind === "one" ? "green" : kind === "none" ? "amber" : "blue"}>
            <MathText block html={`<span style="color:${C.blue};font-weight:800">\\(${stdTex(a1, b1, c1)}\\)</span> and <span style="color:${C.red};font-weight:800">\\(${stdTex(a2, b2, c2)}\\)</span>`} />
            <MathText block html={kind === "one"
              ? `<strong>One solution</strong>: \\((${fr(c1 * b2 - c2 * b1, det)},\\ ${fr(a1 * c2 - a2 * c1, det)})\\)${Number.isInteger(x) && Number.isInteger(y) ? "" : ` \\(\\approx(${r2(x)},\\ ${r2(y)})\\)`}. Check in the blue equation: \\(${a1}(${r2(x)})+${b1}(${r2(y)})=${r2(a1 * x + b1 * y)}\\). Different slopes always give exactly one point.`
              : kind === "none" ? "<strong>No solution</strong>: the slopes are equal but the lines are different, so they are parallel and never meet (an <em>inconsistent</em> system)."
                : "<strong>Infinitely many solutions</strong>: one equation is a multiple of the other, so both describe the same line — every point on it is a solution."} />
          </Readout>
        </>
      )}
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.3 substitution */

type Sub = { label: string; eq1: string; eq2: string; steps: string[]; sol: [number, number]; lines: [number, number, number][] };
const SUBS: Sub[] = [
  { label: "y = …", eq1: "y=2x-1", eq2: "3x+2y=19", sol: [3, 5], lines: [[2, -1, 1], [3, 2, 19]],
    steps: ["Equation ① already gives \\(y\\) in terms of \\(x\\).", "Substitute into ②: \\(3x+2(2x-1)=19\\).", "Expand and solve: \\(3x+4x-2=19\\Rightarrow7x=21\\Rightarrow x=3\\).", "Back-substitute into ①: \\(y=2(3)-1=5\\).", "Check in ②: \\(3(3)+2(5)=9+10=19\\) ✓. Solution \\((3,5)\\)."] },
  { label: "isolate x", eq1: "x+4y=7", eq2: "2x-3y=-8", sol: [-1, 2], lines: [[1, 4, 7], [2, -3, -8]],
    steps: ["In ① the coefficient of \\(x\\) is 1, so isolate \\(x\\): \\(x=7-4y\\).", "Substitute into ②: \\(2(7-4y)-3y=-8\\).", "Solve: \\(14-8y-3y=-8\\Rightarrow-11y=-22\\Rightarrow y=2\\).", "Back-substitute: \\(x=7-4(2)=-1\\).", "Check in ②: \\(2(-1)-3(2)=-2-6=-8\\) ✓. Solution \\((-1,2)\\)."] },
  { label: "fractions", eq1: "y=\\tfrac12x+3", eq2: "x+4y=24", sol: [4, 5], lines: [[-1, 2, 6], [1, 4, 24]],
    steps: ["① gives \\(y\\) directly.", "Substitute into ②: \\(x+4\\left(\\tfrac12x+3\\right)=24\\).", "Solve: \\(x+2x+12=24\\Rightarrow3x=12\\Rightarrow x=4\\).", "Back-substitute: \\(y=\\tfrac12(4)+3=5\\).", "Check in ②: \\(4+4(5)=24\\) ✓. Solution \\((4,5)\\)."] },
];
export function SubstitutionStepper() {
  const [k, setK] = useState(0);
  const [n, setN] = useState(1);
  const s = SUBS[k];
  return (
    <WidgetCard title="Substitution, one step at a time" subtitle="replace one variable by an expression from the other equation">
      <Segmented options={SUBS.map((x, i) => ({ value: i, label: x.label }))} value={k} onChange={(i) => { setK(i); setN(1); }} />
      <div style={{ margin: "10px 0", fontSize: 17 }}><MathText html={`① \\(${s.eq1}\\) &nbsp;&nbsp; ② \\(${s.eq2}\\)`} /></div>
      <ol style={{ margin: "6px 0 10px 20px", lineHeight: 1.8 }}>
        {s.steps.slice(0, n).map((t, i) => <li key={i} style={{ color: i === n - 1 ? C.ink : C.muted }}><MathText html={t} /></li>)}
      </ol>
      <Row>
        <button type="button" style={btn()} onClick={() => setN(Math.max(1, n - 1))} disabled={n === 1}>Back</button>
        <button type="button" style={btn(true)} onClick={() => setN(Math.min(s.steps.length, n + 1))} disabled={n === s.steps.length}>Next step</button>
        <span style={{ color: C.muted, fontSize: 14 }}>step {n} of {s.steps.length}</span>
      </Row>
      {n === s.steps.length && (
        <Plane view={V10} label="Solution on the graph">
          {(X, Y) => (
            <>
              {s.lines.map(([a, b, c], i) => <line key={i} {...stdSeg(X, Y, a, b, c, V10)} stroke={i ? C.red : C.blue} strokeWidth={3} />)}
              <circle cx={X(s.sol[0])} cy={Y(s.sol[1])} r={7} fill={C.green} stroke="#fff" strokeWidth={2} />
            </>
          )}
        </Plane>
      )}
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.4 elimination */

const ELIMS: [number, number, number, number, number, number][] = [[2, 3, 13, 5, -3, 1], [3, 2, 16, 2, 5, 18], [4, -3, 6, 6, 5, 28]];
export function EliminationLab() {
  const [k, setK] = useState(0);
  const [m1, setM1] = useState(1), [m2, setM2] = useState(1);
  const [op, setOp] = useState<"+" | "−">("+");
  const [a1, b1, c1, a2, b2, c2] = ELIMS[k];
  const s = op === "+" ? 1 : -1;
  const A = m1 * a1 + s * m2 * a2, B = m1 * b1 + s * m2 * b2, Cc = m1 * c1 + s * m2 * c2;
  const det = a1 * b2 - a2 * b1, x = (c1 * b2 - c2 * b1) / det, y = (a1 * c2 - a2 * c1) / det;
  const gone = A === 0 && B !== 0 ? "x" : B === 0 && A !== 0 ? "y" : A === 0 && B === 0 ? "both" : "";
  return (
    <WidgetCard title="Elimination with multipliers" subtitle="multiply the equations so one variable has opposite (or equal) coefficients, then add (or subtract)">
      <Segmented options={ELIMS.map((_, i) => ({ value: i, label: `system ${i + 1}` }))} value={k} onChange={(i) => { setK(i); setM1(1); setM2(1); setOp("+"); }} />
      <div style={{ margin: "10px 0", fontSize: 17 }}><MathText html={`① \\(${stdTex(a1, b1, c1)}\\) &nbsp;&nbsp; ② \\(${stdTex(a2, b2, c2)}\\)`} /></div>
      <Row>
        <Slider label="× ①" value={m1} min={-6} max={6} onChange={(v) => setM1(v === 0 ? 1 : v)} color={C.blue} />
        <Slider label="× ②" value={m2} min={-6} max={6} onChange={(v) => setM2(v === 0 ? 1 : v)} color={C.red} />
        <Segmented options={[{ value: "+", label: "add" }, { value: "−", label: "subtract" }]} value={op} onChange={setOp} />
      </Row>
      <table style={{ borderCollapse: "collapse", margin: "8px auto", fontSize: 16 }}>
        <tbody>
          <tr><td style={{ padding: "2px 10px", color: C.blue }}>{m1} × ①</td><td><MathText html={`\\(${stdTex(m1 * a1, m1 * b1, m1 * c1)}\\)`} /></td></tr>
          <tr><td style={{ padding: "2px 10px", color: C.red }}>{op} {m2} × ②</td><td><MathText html={`\\(${stdTex(m2 * a2, m2 * b2, m2 * c2)}\\)`} /></td></tr>
          <tr style={{ borderTop: `2px solid ${C.ink}` }}><td style={{ padding: "2px 10px", fontWeight: 700 }}>result</td><td><MathText html={A === 0 && B === 0 ? `\\(0=${Cc}\\)` : `\\(${stdTex(A, B, Cc)}\\)`} /></td></tr>
        </tbody>
      </table>
      <Plane view={V10} label="Equivalent systems">
        {(X, Y) => (
          <>
            <line {...stdSeg(X, Y, a1, b1, c1, V10)} stroke={C.blue} strokeWidth={3} />
            <line {...stdSeg(X, Y, a2, b2, c2, V10)} stroke={C.red} strokeWidth={3} />
            {!(A === 0 && B === 0) && <line {...stdSeg(X, Y, A, B, Cc, V10)} stroke={gone ? C.green : C.amber} strokeWidth={2.5} strokeDasharray="7 5" />}
            <circle cx={X(x)} cy={Y(y)} r={6.5} fill={C.green} stroke="#fff" strokeWidth={2} />
          </>
        )}
      </Plane>
      <Readout tone={gone && gone !== "both" ? "green" : "blue"}>
        <MathText html={gone === "x" || gone === "y"
          ? `<strong>${gone} is eliminated!</strong> \\(${stdTex(A, B, Cc)}\\) gives \\(${gone === "x" ? "y" : "x"}=${fr(Cc, gone === "x" ? B : A)}\\) — the dashed ${gone === "x" ? "horizontal" : "vertical"} line passes through the solution. Substitute back to get \\((${fr(c1 * b2 - c2 * b1, det)},\\ ${fr(a1 * c2 - a2 * c1, det)})\\).`
          : `Any combination of the two equations is a new line through the same point (dashed): that is why the system's solution does not change. Choose multipliers that make the \\(x\\)- or \\(y\\)-coefficients cancel.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 1.5 word problems */

type Story = { label: string; text: string; let: string; e1: [number, number, number]; e2: [number, number, number]; e1t: string; e2t: string; view: View; step: number; unitX: string; unitY: string };
const STORIES: Story[] = [
  { label: "tickets", text: "A play sold 220 tickets. Adult tickets cost 12 dollars and student tickets 7 dollars. Sales were 2140 dollars.", let: "\\(a\\) = adult tickets, \\(s\\) = student tickets", e1: [1, 1, 220], e2: [12, 7, 2140], e1t: "a+s=220", e2t: "12a+7s=2140", view: { xmin: -20, xmax: 260, ymin: -20, ymax: 340 }, step: 20, unitX: "adult", unitY: "student" },
  { label: "mixture", text: "A chemist mixes a 10% acid solution with a 25% acid solution to make 30 L of a 20% solution.", let: "\\(x\\) = litres of 10%, \\(y\\) = litres of 25%", e1: [1, 1, 30], e2: [10, 25, 600], e1t: "x+y=30", e2t: "0.10x+0.25y=0.20(30)", view: { xmin: -4, xmax: 40, ymin: -4, ymax: 40 }, step: 4, unitX: "10% (L)", unitY: "25% (L)" },
  { label: "investment", text: "Club funds of 5000 dollars are split between an account paying 4% and a bond paying 3.5%. One year's interest is 190 dollars.", let: "\\(x\\) = dollars at 4%, \\(y\\) = dollars at 3.5%", e1: [1, 1, 5000], e2: [40, 35, 190000], e1t: "x+y=5000", e2t: "0.04x+0.035y=190", view: { xmin: -500, xmax: 6000, ymin: -500, ymax: 6000 }, step: 500, unitX: "4% ($)", unitY: "3.5% ($)" },
  { label: "boat", text: "A boat travels 36 km downstream in 2 h and returns upstream in 3 h.", let: "\\(b\\) = boat speed in still water, \\(c\\) = current speed (km/h)", e1: [2, 2, 36], e2: [3, -3, 36], e1t: "2(b+c)=36", e2t: "3(b-c)=36", view: { xmin: -2, xmax: 24, ymin: -6, ymax: 20 }, step: 2, unitX: "boat (km/h)", unitY: "current (km/h)" },
];
export function SystemStory() {
  const [k, setK] = useState(0);
  const [show, setShow] = useState(false);
  const s = STORIES[k];
  const [a1, b1, c1] = s.e1, [a2, b2, c2] = s.e2;
  const det = a1 * b2 - a2 * b1, x = (c1 * b2 - c2 * b1) / det, y = (a1 * c2 - a2 * c1) / det;
  return (
    <WidgetCard title="From words to a system" subtitle="two unknowns need two equations — one for each fact">
      <Segmented options={STORIES.map((t, i) => ({ value: i, label: t.label }))} value={k} onChange={(i) => { setK(i); setShow(false); }} />
      <p style={{ margin: "10px 0 4px", fontSize: 15.5 }}>{s.text}</p>
      <div style={{ fontSize: 15.5, lineHeight: 1.9 }}>
        <MathText html={`<strong>Let</strong> ${s.let}.<br/>① \\(${s.e1t}\\) &nbsp; ② \\(${s.e2t}\\)`} />
      </div>
      <Row><button type="button" style={btn(true)} onClick={() => setShow((v) => !v)}>{show ? "Hide" : "Show"} the solution</button></Row>
      <Plane view={s.view} label="Graph of the story" step={s.step}>
        {(X, Y) => (
          <>
            <line {...stdSeg(X, Y, a1, b1, c1, s.view)} stroke={C.blue} strokeWidth={3} />
            <line {...stdSeg(X, Y, a2, b2, c2, s.view)} stroke={C.red} strokeWidth={3} />
            {show && <circle cx={X(x)} cy={Y(y)} r={7} fill={C.green} stroke="#fff" strokeWidth={2} />}
          </>
        )}
      </Plane>
      {show && <Readout tone="green"><MathText html={`The lines meet at \\((${r2(x)},\\ ${r2(y)})\\): ${s.unitX} \\(=${r2(x)}\\), ${s.unitY} \\(=${r2(y)}\\). Always check both facts in the original words.`} /></Readout>}
    </WidgetCard>
  );
}

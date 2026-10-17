"use client";

// MPM2D chapter 4 (quadratic relations) explorers: finite differences, fitting a parabola to data, key features
// from y = ax² + bx + c, transformations and vertex form, graphing with the step pattern, factored form,
// completing the square, and comparing y = x² with y = 2ˣ (zero and negative exponents).

import { useState, type ReactNode } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, btn } from "./kit";
import { Plane, fr, r2, type View } from "./Systems";

const sgn = (v: number, first = false) => (v < 0 ? `-${r2(-v)}` : first ? r2(v) : `+${r2(v)}`);
/** y = ax² + bx + c as LaTeX (decimals allowed) */
function stdForm(a: number, b: number, c: number) {
  const t: string[] = [];
  const add = (k: number, s: string) => { if (k === 0) return; const mag = Math.abs(k) === 1 && s ? "" : r2(Math.abs(k)); t.push(`${k < 0 ? "-" : t.length ? "+" : ""}${mag}${s}`); };
  add(a, "x^2"); add(b, "x"); add(c, "");
  return t.join("") || "0";
}
/** a(x − h)² + k as LaTeX */
function vertexForm(a: number, h: number, k: number) {
  const A = a === 1 ? "" : a === -1 ? "-" : r2(a);
  const inner = h === 0 ? "x" : `x${h > 0 ? "-" : "+"}${r2(Math.abs(h))}`;
  return `${A}(${inner})^2${k === 0 ? "" : sgn(k)}`;
}
function Curves({ view, label, step, fs, children }: { view: View; label: string; step: number; fs: { f: (x: number) => number; color: string; width?: number; dash?: string }[]; children?: (X: (x: number) => number, Y: (y: number) => number) => ReactNode }) {
  return (
    <Plane view={view} label={label} step={step}>
      {(X, Y) => (
        <>
          {fs.map((c, i) => {
            let d = "", pen = false;
            for (let j = 0; j <= 240; j++) {
              const x = view.xmin + ((view.xmax - view.xmin) * j) / 240, y = c.f(x);
              if (!Number.isFinite(y) || y > view.ymax + (view.ymax - view.ymin) || y < view.ymin - (view.ymax - view.ymin)) { pen = false; continue; }
              d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true;
            }
            return <path key={i} d={d} fill="none" stroke={c.color} strokeWidth={c.width ?? 3} strokeDasharray={c.dash} />;
          })}
          {children?.(X, Y)}
        </>
      )}
    </Plane>
  );
}
const dot = (X: (x: number) => number, Y: (y: number) => number, x: number, y: number, color: string, label?: string, key?: string | number) => (
  <g key={key}><circle cx={X(x)} cy={Y(y)} r={6} fill={color} stroke="#fff" strokeWidth={2} />{label && <text x={X(x) + 8} y={Y(y) - 8} fontSize={13} fontWeight={700} fill={color} stroke="#fff" strokeWidth={3} paintOrder="stroke">{label}</text>}</g>
);
const V10: View = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 };
const cell: React.CSSProperties = { padding: "4px 10px", textAlign: "center", borderBottom: `1px solid ${C.line}` };

/* ---------------------------------------------------------------- 4.1 finite differences */

export function DiffTable({ init = [1, 0, 0] }: { init?: [number, number, number] }) {
  const [mode, setMode] = useState<"poly" | "exp">("poly");
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [c, setC] = useState(init[2]);
  const f = (x: number) => (mode === "exp" ? 2 ** x : a * x * x + b * x + c);
  const xs = [0, 1, 2, 3, 4, 5, 6], ys = xs.map(f);
  const d1 = ys.slice(1).map((y, i) => y - ys[i]), d2 = d1.slice(1).map((d, i) => d - d1[i]);
  const verdict = mode === "exp" ? "exponential: the differences are not constant, but each y-value is 2 times the one before (constant ratio)."
    : a === 0 ? (b === 0 ? "constant: every y-value is the same." : `linear: the first differences are all ${r2(d1[0])}.`)
      : `quadratic: the second differences are all ${r2(d2[0])} = 2a.`;
  const lo = Math.min(...ys, 0), hi = Math.max(...ys, 1), pad = (hi - lo) * 0.1 + 1;
  return (
    <WidgetCard title="Finite differences" subtitle="constant first differences → linear; constant second differences → quadratic">
      <Segmented options={[{ value: "poly", label: "y = ax² + bx + c" }, { value: "exp", label: "y = 2ˣ" }]} value={mode} onChange={setMode} />
      {mode === "poly" && (
        <Row gap={10}>
          <Slider label="a" value={a} min={-3} max={3} step={0.5} onChange={setA} color={C.blue} />
          <Slider label="b" value={b} min={-6} max={6} onChange={setB} color={C.red} />
          <Slider label="c" value={c} min={-6} max={6} onChange={setC} color={C.green} />
        </Row>
      )}
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(y=${mode === "exp" ? "2^x" : stdForm(a, b, c)}\\)`} /></div>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: 15 }}>
          <tbody>
            <tr><th style={cell}>x</th>{xs.map((x) => <td key={x} style={cell}>{x}</td>)}</tr>
            <tr><th style={cell}>y</th>{ys.map((y, i) => <td key={i} style={{ ...cell, fontWeight: 700 }}>{r2(y)}</td>)}</tr>
            <tr><th style={{ ...cell, color: C.red }}>1st diff</th><td style={cell} />{d1.map((d, i) => <td key={i} style={{ ...cell, color: C.red }}>{r2(d)}</td>)}</tr>
            <tr><th style={{ ...cell, color: C.violet }}>2nd diff</th><td style={cell} /><td style={cell} />{d2.map((d, i) => <td key={i} style={{ ...cell, color: C.violet }}>{r2(d)}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <Curves view={{ xmin: -1, xmax: 7, ymin: lo - pad, ymax: hi + pad }} label="Graph of the table" step={Math.max(1, Math.round((hi - lo) / 8))} fs={[{ f, color: C.violet }]}>
        {(X, Y) => xs.map((x, i) => dot(X, Y, x, ys[i], C.blue, undefined, i))}
      </Curves>
      <Readout tone="green">The relation is <strong>{verdict}</strong></Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.1 fitting a curve to data */

const BALL: [number, number][] = [[0, 1.5], [0.5, 7.6], [1, 11.2], [1.5, 12.4], [2, 11.1], [2.5, 7.4], [3, 1.3]];
export function QuadFit() {
  const [a, setA] = useState(-3), [h, setH] = useState(1.2), [k, setK] = useState(10);
  const f = (t: number) => a * (t - h) ** 2 + k;
  const rms = Math.sqrt(BALL.reduce((s, [t, y]) => s + (y - f(t)) ** 2, 0) / BALL.length);
  const land = h + Math.sqrt(-k / a);
  return (
    <WidgetCard title="Fit a parabola to data" subtitle="the height of a tossed ball, measured every half second">
      <Row gap={10}>
        <Slider label="a" value={a} min={-8} max={-1} step={0.1} onChange={setA} color={C.blue} />
        <Slider label="h (time of max)" value={h} min={0.5} max={2.5} step={0.05} onChange={setH} color={C.red} />
        <Slider label="k (max height)" value={k} min={8} max={16} step={0.1} onChange={setK} color={C.green} />
      </Row>
      <Curves view={{ xmin: -0.2, xmax: 3.6, ymin: -1, ymax: 16 }} label="Ball height data" step={1} fs={[{ f, color: C.violet }]}>
        {(X, Y) => BALL.map(([t, y], i) => dot(X, Y, t, y, C.blue, undefined, i))}
      </Curves>
      <Readout tone={rms < 0.4 ? "green" : rms < 1.2 ? "blue" : "amber"}>
        <MathText block html={`Model: \\(h=${vertexForm(Math.round(a * 10) / 10, h, k).replace(/x/g, "t")}\\). Average distance from the data: <strong>${r2(rms)} m</strong>${rms < 0.4 ? " — a very good fit." : " — keep adjusting."}`} />
        <MathText block html={`With this model the ball is highest (${r2(k)} m) at \\(t=${r2(h)}\\) s and lands at about \\(t=${r2(land)}\\) s. The data has constant second differences of about \\(-4.9\\) per half-second step squared, a sign it is quadratic.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.2 key features */

export function ParabolaFeatures({ init = [1, -4, -5] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [b, setB] = useState(init[1]), [c, setC] = useState(init[2]);
  const A = a === 0 ? 0.5 : a, h = -b / (2 * A), k = A * h * h + b * h + c, D = b * b - 4 * A * c;
  const zeros = D < 0 ? [] : D === 0 ? [h] : [(-b - Math.sqrt(D)) / (2 * A), (-b + Math.sqrt(D)) / (2 * A)].sort((p, q) => p - q);
  const f = (x: number) => A * x * x + b * x + c;
  const ymin = Math.min(k, c, 0) - 3, ymax = Math.max(k, c, 0) + 3;
  const view: View = { xmin: Math.floor(h - 7), xmax: Math.ceil(h + 7), ymin: Math.max(ymin, -30), ymax: Math.min(ymax, 30) };
  return (
    <WidgetCard title="Key features of a parabola" subtitle="vertex, axis of symmetry, zeros, y-intercept, maximum or minimum">
      <Row gap={10}>
        <Slider label="a" value={a} min={-3} max={3} step={0.5} onChange={(v) => setA(v === 0 ? 0.5 : v)} color={C.blue} />
        <Slider label="b" value={b} min={-10} max={10} onChange={setB} color={C.red} />
        <Slider label="c" value={c} min={-10} max={10} onChange={setC} color={C.green} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18 }}><MathText html={`\\(y=${stdForm(A, b, c)}\\)`} /></div>
      <Curves view={view} label="Parabola features" step={view.ymax - view.ymin > 24 ? 5 : view.ymax - view.ymin > 12 ? 2 : 1} fs={[{ f, color: C.violet }, { f: () => NaN, color: "none" }]}>
        {(X, Y) => (
          <>
            <line x1={X(h)} y1={Y(view.ymin)} x2={X(h)} y2={Y(view.ymax)} stroke={C.faint} strokeDasharray="6 5" strokeWidth={2} />
            {zeros.map((z, i) => dot(X, Y, z, 0, C.red, `(${r2(z)}, 0)`, i))}
            {dot(X, Y, 0, c, C.green, `(0, ${r2(c)})`, "y")}
            {dot(X, Y, h, k, C.blue, `V(${r2(h)}, ${r2(k)})`, "v")}
          </>
        )}
      </Curves>
      <Readout tone="green">
        <MathText block html={`Axis of symmetry: \\(x=-\\dfrac{b}{2a}=-\\dfrac{${b}}{2(${r2(A)})}=${r2(h)}\\). Vertex \\((${r2(h)},\\ ${r2(k)})\\) — a <strong>${A > 0 ? "minimum" : "maximum"}</strong> because the parabola opens ${A > 0 ? "up (a &gt; 0)" : "down (a &lt; 0)"}.`} />
        <MathText block html={`Zeros: ${zeros.length === 0 ? "none — the parabola does not cross the x-axis" : zeros.map((z) => `\\(x=${r2(z)}\\)`).join(" and ")}. y-intercept \\(${r2(c)}\\). Domain: all real numbers. Range: \\(y${A > 0 ? "\\ge" : "\\le"}${r2(k)}\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.3 transformations */

export function TransformLab({ init = [2, 3, -4] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [h, setH] = useState(init[1]), [k, setK] = useState(init[2]);
  const A = a === 0 ? 0.25 : a;
  const base: [number, number][] = [[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]];
  const words: string[] = [];
  if (A < 0) words.push("a reflection in the x-axis");
  if (Math.abs(A) > 1) words.push(`a vertical stretch by a factor of ${r2(Math.abs(A))}`);
  if (Math.abs(A) < 1) words.push(`a vertical compression by a factor of ${r2(Math.abs(A))}`);
  if (h) words.push(`a translation ${Math.abs(h)} unit${Math.abs(h) === 1 ? "" : "s"} ${h > 0 ? "right" : "left"}`);
  if (k) words.push(`a translation ${Math.abs(k)} unit${Math.abs(k) === 1 ? "" : "s"} ${k > 0 ? "up" : "down"}`);
  return (
    <WidgetCard title="Transformations of y = x²" subtitle="y = a(x − h)² + k: stretch or reflect with a, shift with h and k">
      <Row gap={10}>
        <Slider label="a" value={a} min={-3} max={3} step={0.25} onChange={(v) => setA(v === 0 ? 0.25 : v)} color={C.blue} />
        <Slider label="h" value={h} min={-6} max={6} onChange={setH} color={C.red} />
        <Slider label="k" value={k} min={-8} max={8} onChange={setK} color={C.green} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18 }}><MathText html={`\\(y=${vertexForm(A, h, k)}\\)`} /></div>
      <Curves view={V10} label="Transformed parabola" step={1} fs={[{ f: (x) => x * x, color: C.faint, dash: "6 5", width: 2 }, { f: (x) => A * (x - h) ** 2 + k, color: C.violet }]}>
        {(X, Y) => base.map(([x, y], i) => dot(X, Y, x + h, A * y + k, C.blue, undefined, i))}
      </Curves>
      <Readout tone="green">
        <MathText block html={`From \\(y=x^2\\) (dashed): ${words.length ? words.join(", then ") : "no change"}. Vertex \\((${h},\\ ${k})\\); axis of symmetry \\(x=${h}\\); ${A > 0 ? "minimum" : "maximum"} value \\(${k}\\).`} />
        <MathText block html={`Each point \\((x,\\ y)\\) of \\(y=x^2\\) moves to \\((x${h ? sgn(h) : ""},\\ ${r2(A) === "1" ? "" : `${r2(A)}`}y${k ? sgn(k) : ""})\\): for example \\((2,4)\\to(${2 + h},\\ ${r2(4 * A + k)})\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.4 graphing with the step pattern */

export function StepGraph({ init = [2, -1, -6] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [h, setH] = useState(init[1]), [k, setK] = useState(init[2]);
  const [n, setN] = useState(4);
  const A = a === 0 ? 0.5 : a;
  const pts: [number, number, string][] = [[h, k, "vertex"]];
  for (const s of [1, 2, 3]) { pts.push([h + s, k + A * s * s, ""]); pts.push([h - s, k + A * s * s, ""]); }
  const shown = pts.slice(0, n === 1 ? 1 : n === 2 ? 3 : n === 3 ? 5 : 7);
  const steps = ["Plot the vertex \\((h,k)\\).", `From the vertex: over 1, ${A > 0 ? "up" : "down"} \\(${r2(Math.abs(A))}\\times1=${r2(Math.abs(A))}\\) (both sides).`, `Over 2, ${A > 0 ? "up" : "down"} \\(${r2(Math.abs(A))}\\times4=${r2(Math.abs(4 * A))}\\).`, `Over 3, ${A > 0 ? "up" : "down"} \\(${r2(Math.abs(A))}\\times9=${r2(Math.abs(9 * A))}\\); join with a smooth curve.`];
  return (
    <WidgetCard title="Graphing from vertex form" subtitle="vertex first, then the step pattern 1, 4, 9 times a">
      <Row gap={10}>
        <Slider label="a" value={a} min={-3} max={3} step={0.5} onChange={(v) => setA(v === 0 ? 0.5 : v)} color={C.blue} />
        <Slider label="h" value={h} min={-5} max={5} onChange={setH} color={C.red} />
        <Slider label="k" value={k} min={-8} max={8} onChange={setK} color={C.green} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18 }}><MathText html={`\\(y=${vertexForm(A, h, k)}\\)`} /></div>
      <ol style={{ margin: "6px 0 6px 20px", lineHeight: 1.8 }}>{steps.slice(0, n).map((t, i) => <li key={i}><MathText html={t} /></li>)}</ol>
      <Row>
        <button type="button" style={btn()} onClick={() => setN(Math.max(1, n - 1))} disabled={n === 1}>Back</button>
        <button type="button" style={btn(true)} onClick={() => setN(Math.min(4, n + 1))} disabled={n === 4}>Next step</button>
      </Row>
      <Curves view={{ xmin: h - 7, xmax: h + 7, ymin: Math.min(k, k + 9 * A) - 3, ymax: Math.max(k, k + 9 * A) + 3 }} label="Step pattern" step={Math.abs(9 * A) > 20 ? 5 : 2} fs={n === 4 ? [{ f: (x) => A * (x - h) ** 2 + k, color: C.violet }] : []}>
        {(X, Y) => shown.map(([x, y, l], i) => dot(X, Y, x, y, i === 0 ? C.red : C.blue, l || `(${x}, ${r2(y)})`, i))}
      </Curves>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.5 factored form */

export function FactoredForm({ init = [1, -2, 4] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [r, setR] = useState(init[1]), [s, setS] = useState(init[2]);
  const A = a === 0 ? 0.5 : a, h = (r + s) / 2, k = A * (h - r) * (h - s), yint = A * r * s;
  const br = (z: number) => (z === 0 ? "x" : `(x${z > 0 ? "-" : "+"}${Math.abs(z)})`);
  const lo = Math.min(k, yint, 0) - 3, hi = Math.max(k, yint, 0) + 3;
  return (
    <WidgetCard title="Factored form and the zeros" subtitle="y = a(x − r)(x − s): zeros r and s, axis halfway between">
      <Row gap={10}>
        <Slider label="a" value={a} min={-3} max={3} step={0.5} onChange={(v) => setA(v === 0 ? 0.5 : v)} color={C.blue} />
        <Slider label="r" value={r} min={-8} max={8} onChange={setR} color={C.red} />
        <Slider label="s" value={s} min={-8} max={8} onChange={setS} color={C.red} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18 }}><MathText html={`\\(y=${A === 1 ? "" : A === -1 ? "-" : r2(A)}${br(r)}${br(s)}\\)`} /></div>
      <Curves view={{ xmin: Math.min(r, s) - 4, xmax: Math.max(r, s) + 4, ymin: Math.max(lo, -40), ymax: Math.min(hi, 40) }} label="Factored form" step={hi - lo > 30 ? 5 : 2} fs={[{ f: (x) => A * (x - r) * (x - s), color: C.violet }]}>
        {(X, Y) => (
          <>
            {dot(X, Y, r, 0, C.red, `(${r}, 0)`, "r")}
            {s !== r && dot(X, Y, s, 0, C.red, `(${s}, 0)`, "s")}
            {dot(X, Y, h, k, C.blue, `V(${r2(h)}, ${r2(k)})`, "v")}
            {dot(X, Y, 0, yint, C.green, undefined, "y")}
          </>
        )}
      </Curves>
      <Readout tone="green">
        <MathText block html={`Zeros: \\(x=${r}\\) and \\(x=${s}\\) (each makes a bracket zero). Axis of symmetry halfway between: \\(x=\\dfrac{${r}+${s < 0 ? `(${s})` : s}}{2}=${r2(h)}\\).`} />
        <MathText block html={`Vertex: substitute \\(x=${r2(h)}\\): \\(y=${r2(k)}\\). y-intercept: \\(a\\cdot r\\cdot s=${r2(yint)}\\). ${r === s ? "Equal zeros: the vertex is on the x-axis." : ""}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.6 completing the square */

export function CompleteSquare({ init = [1, -3, 4] }: { init?: [number, number, number] }) {
  const [a, setA] = useState(init[0]), [p, setP] = useState(init[1]), [c, setC] = useState(init[2]);
  const b = 2 * a * p, k = c - a * p * p;
  const P = Math.abs(p), S = 200, u = S / (5 + P);
  const pTex = p < 0 ? `-${P}` : `+${P}`;
  const steps = [
    a !== 1 ? `Factor \\(${a}\\) from the first two terms: \\(y=${a}(x^2${2 * p < 0 ? "" : "+"}${2 * p}x)${sgn(c)}\\).` : `Group the first two terms: \\(y=(x^2${2 * p < 0 ? "" : "+"}${2 * p}x)${sgn(c)}\\).`,
    `Half of \\(${2 * p}\\) is \\(${p}\\); add and subtract \\(${p < 0 ? `(${p})` : p}^2=${p * p}\\) inside: \\(y=${a === 1 ? "" : a}(x^2${2 * p < 0 ? "" : "+"}${2 * p}x+${p * p}-${p * p})${sgn(c)}\\).`,
    `The first three terms are a perfect square: \\(y=${a === 1 ? "" : a}(x${pTex})^2-${a === 1 ? "" : `${a}\\times`}${p * p}${sgn(c)}\\).`,
    `Simplify: \\(y=${vertexForm(a, -p, k)}\\). Vertex \\((${-p},\\ ${k})\\).`,
  ];
  return (
    <WidgetCard title="Completing the square" subtitle="from standard form to vertex form, with no fractions">
      <Row gap={10}>
        <Slider label="a" value={a} min={1} max={3} onChange={setA} color={C.blue} />
        <Slider label="half of b ÷ a" value={p} min={-5} max={5} onChange={setP} color={C.red} />
        <Slider label="c" value={c} min={-10} max={10} onChange={setC} color={C.green} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18 }}><MathText html={`\\(y=${stdForm(a, b, c)}\\)`} /></div>
      {P > 0 && (
        <svg viewBox={`-30 -24 ${S + 70} ${S + 44}`} style={{ width: "100%", maxWidth: 300, display: "block", margin: "6px auto" }} role="img" aria-label="Completing the square diagram">
          <rect x={0} y={0} width={5 * u} height={5 * u} fill={C.blueSoft} stroke={C.blue} strokeWidth={2} />
          <rect x={5 * u} y={0} width={P * u} height={5 * u} fill={C.violetSoft} stroke={C.violet} strokeWidth={2} />
          <rect x={0} y={5 * u} width={5 * u} height={P * u} fill={C.violetSoft} stroke={C.violet} strokeWidth={2} />
          <rect x={5 * u} y={5 * u} width={P * u} height={P * u} fill={C.amberSoft} stroke={C.amber} strokeWidth={2} strokeDasharray="5 4" />
          <text x={2.5 * u} y={2.5 * u + 5} fontSize={15} textAnchor="middle">x²</text>
          <text x={5 * u + (P * u) / 2} y={2.5 * u + 5} fontSize={13} textAnchor="middle">{P}x</text>
          <text x={2.5 * u} y={5 * u + (P * u) / 2 + 5} fontSize={13} textAnchor="middle">{P}x</text>
          <text x={5 * u + (P * u) / 2} y={5 * u + (P * u) / 2 + 5} fontSize={12} textAnchor="middle" fill={C.amber}>{P * P}</text>
          <text x={2.5 * u} y={-8} fontSize={13} textAnchor="middle" fill={C.blue}>x</text>
          <text x={5 * u + (P * u) / 2} y={-8} fontSize={13} textAnchor="middle" fill={C.violet}>{P}</text>
        </svg>
      )}
      <ol style={{ margin: "6px 0 6px 20px", lineHeight: 1.9 }}>{steps.map((t, i) => <li key={i}><MathText html={t} /></li>)}</ol>
      <Readout tone="green"><MathText html={`The amber corner \\(${p * p}\\) is the piece that completes the square \\((x${pTex})^2\\). Both forms describe the same parabola: check by expanding \\(${vertexForm(a, -p, k)}\\).`} /></Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.7 y = x² vs y = bˣ, zero and negative exponents */

export function ExpCompare({ init = 2 }: { init?: number }) {
  const [base, setBase] = useState(init);
  const xs = [-3, -2, -1, 0, 1, 2, 3, 4, 5];
  const pw = (n: number) => (n >= 0 ? String(base ** n) : fr(1, base ** -n));
  return (
    <WidgetCard title="Comparing y = x² and y = bˣ" subtitle="where the exponent is the variable, growth eventually wins — and b⁰ = 1, b⁻ⁿ = 1/bⁿ">
      <Slider label="base b" value={base} min={2} max={5} onChange={setBase} color={C.red} />
      <Curves view={{ xmin: -4, xmax: 6, ymin: -2, ymax: 34 }} label="Quadratic and exponential" step={2} fs={[{ f: (x) => x * x, color: C.blue }, { f: (x) => base ** x, color: C.red }]}>
        {(X, Y) => (
          <>
            {dot(X, Y, 0, 1, C.red, "(0, 1)", "a")}
            {dot(X, Y, 0, 0, C.blue, undefined, "b")}
          </>
        )}
      </Curves>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: 15 }}>
          <tbody>
            <tr><th style={cell}>x</th>{xs.map((x) => <td key={x} style={cell}>{x}</td>)}</tr>
            <tr><th style={{ ...cell, color: C.blue }}>x²</th>{xs.map((x) => <td key={x} style={{ ...cell, color: C.blue }}>{x * x}</td>)}</tr>
            <tr><th style={{ ...cell, color: C.red }}>{base}ˣ</th>{xs.map((x) => <td key={x} style={{ ...cell, color: C.red }}><MathText html={`\\(${pw(x)}\\)`} /></td>)}</tr>
          </tbody>
        </table>
      </div>
      <Readout tone="green">
        <MathText block html={`Reading the \\(${base}^x\\) row from right to left, each value is divided by \\(${base}\\). That forces \\(${base}^0=1\\), \\(${base}^{-1}=\\tfrac{1}{${base}}\\), \\(${base}^{-2}=\\tfrac{1}{${base * base}}\\): a negative exponent means a reciprocal.`} />
        <MathText block html={`\\(y=x^2\\) is symmetric and has constant second differences; \\(y=${base}^x\\) is never negative, never zero, passes through \\((0,1)\\), and is multiplied by \\(${base}\\) at every step — so it eventually passes any quadratic.`} />
      </Readout>
    </WidgetCard>
  );
}

"use client";

// MHF4U chapter 3 (rational functions) explorers: reciprocal of a linear function, reciprocal of a quadratic
// function, y = (ax + b)/(cx + d), solving rational equations and inequalities, and rational models with rates.
// Curves are drawn piece by piece between vertical asymptotes so no false vertical line joins the branches.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";
import { dot } from "./Quadratics";

type Fn = (x: number) => number;
const cell: React.CSSProperties = { padding: "4px 10px", textAlign: "center", borderBottom: `1px solid ${C.line}` };
const near = (a: number, b: number) => Math.abs(a - b) < 1e-9;
const lin = (k: number, c: number) => `${k === 1 ? "" : k === -1 ? "-" : r2(k)}x${c === 0 ? "" : c > 0 ? `+${r2(c)}` : `-${r2(-c)}`}`;
/** SVG path of f on the view, broken at every pole (and wherever f leaves a generous band) */
function polePath(f: Fn, poles: number[], v: View, X: (x: number) => number, Y: (y: number) => number) {
  const cuts = [v.xmin, ...poles.filter((p) => p > v.xmin && p < v.xmax).sort((a, b) => a - b), v.xmax];
  const band = (v.ymax - v.ymin) * 4;
  let d = "";
  for (let s = 0; s < cuts.length - 1; s++) {
    const a = cuts[s] + (s === 0 ? 0 : 1e-4), b = cuts[s + 1] - (s === cuts.length - 2 ? 0 : 1e-4);
    let pen = false;
    for (let i = 0; i <= 300; i++) {
      const x = a + ((b - a) * i) / 300, y = f(x);
      if (!Number.isFinite(y) || y > v.ymax + band || y < v.ymin - band) { pen = false; continue; }
      d += `${pen ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; pen = true;
    }
  }
  return d;
}
const vAsym = (X: (x: number) => number, Y: (y: number) => number, v: View, x: number, key: string | number) =>
  <line key={key} x1={X(x)} y1={Y(v.ymax)} x2={X(x)} y2={Y(v.ymin)} stroke={C.red} strokeWidth={1.8} strokeDasharray="6 5" />;
const hAsym = (X: (x: number) => number, Y: (y: number) => number, v: View, y: number, key: string | number) =>
  <line key={key} x1={X(v.xmin)} y1={Y(y)} x2={X(v.xmax)} y2={Y(y)} stroke={C.red} strokeWidth={1.8} strokeDasharray="6 5" />;

/* ---------------------------------------------------------------- 3.1 reciprocal of a linear function */

export function ReciprocalLinear({ init = { k: 2, c: -4 } }: { init?: { k: number; c: number } }) {
  const [k, setK] = useState(init.k), [c, setC] = useState(init.c);
  const K = k === 0 ? 1 : k;
  const f: Fn = (x) => K * x + c, g: Fn = (x) => 1 / f(x);
  const va = -c / K;
  const v: View = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };
  const inv = [(1 - c) / K, (-1 - c) / K];
  const near1 = [va - 0.1, va - 0.01, va + 0.01, va + 0.1];
  return (
    <WidgetCard title="Reciprocal of a linear function" subtitle="y = 1/f(x): the zero of f becomes a vertical asymptote; y = ±1 are invariant">
      <Row gap={10}>
        <Slider label="slope k" value={k} min={-4} max={4} step={0.5} onChange={(x) => setK(x === 0 ? 0.5 : x)} color={C.blue} />
        <Slider label="intercept c" value={c} min={-8} max={8} onChange={setC} color={C.green} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(f(x)=${lin(K, c)}\\qquad g(x)=\\dfrac{1}{${lin(K, c)}}\\)`} /></div>
      <Plane view={v} label="Reciprocal of a linear function" step={1} stepY={1}>
        {(X, Y) => <>
          {hAsym(X, Y, v, 0, "h")}{vAsym(X, Y, v, va, "v")}
          <line x1={X(v.xmin)} y1={Y(f(v.xmin))} x2={X(v.xmax)} y2={Y(f(v.xmax))} stroke={C.blue} strokeWidth={2} />
          <path d={polePath(g, [va], v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          {inv.map((x, i) => dot(X, Y, x, i === 0 ? 1 : -1, C.green, `(${r2(x)}, ${i === 0 ? 1 : -1})`, "i" + i))}
          {dot(X, Y, va, 0, C.red, `x = ${r2(va)}`, "z")}
        </>}
      </Plane>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: 14 }}>
          <tbody>
            <tr><th style={cell}>x</th>{near1.map((x, i) => <td key={i} style={cell}>{r2(x)}</td>)}</tr>
            <tr><th style={cell}>g(x)</th>{near1.map((x, i) => <td key={i} style={{ ...cell, color: C.violet, fontWeight: 700 }}>{r2(g(x))}</td>)}</tr>
          </tbody>
        </table>
      </div>
      <Readout tone="green">
        <MathText block html={`Vertical asymptote \\(x=${r2(va)}\\) (where \\(f(x)=0\\)); horizontal asymptote \\(y=0\\). Domain \\(x\\ne${r2(va)}\\), range \\(y\\ne0\\).`} />
        <MathText block html={`Invariant points where \\(f(x)=\\pm1\\): \\((${r2(inv[0])},1)\\) and \\((${r2(inv[1])},-1)\\). Since \\(f\\) is ${K > 0 ? "increasing" : "decreasing"}, \\(g\\) is ${K > 0 ? "decreasing" : "increasing"} on each branch. Near the asymptote \\(|g(x)|\\) grows without bound.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.2 reciprocal of a quadratic function */

export function ReciprocalQuadratic({ init = { a: 1, h: 0, k: -4 } }: { init?: { a: number; h: number; k: number } }) {
  const [a, setA] = useState(init.a), [h, setH] = useState(init.h), [k, setK] = useState(init.k);
  const A = a === 0 ? 0.5 : a;
  const f: Fn = (x) => A * (x - h) ** 2 + k, g: Fn = (x) => 1 / f(x);
  const disc = -k / A;
  const zeros = disc > 1e-12 ? [h - Math.sqrt(disc), h + Math.sqrt(disc)] : near(disc, 0) ? [h] : [];
  const v: View = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };
  const kind = zeros.length === 2 ? "two" : zeros.length === 1 ? "one" : "none";
  const fTex = `${A === 1 ? "" : A === -1 ? "-" : r2(A)}${h === 0 ? "x" : `(x${h > 0 ? "-" : "+"}${r2(Math.abs(h))})`}^2${k === 0 ? "" : k > 0 ? `+${r2(k)}` : `-${r2(-k)}`}`;
  return (
    <WidgetCard title="Reciprocal of a quadratic function" subtitle="zeros of f become vertical asymptotes; the vertex of f becomes a turning point of 1/f">
      <Row gap={10}>
        <Slider label="a" value={a} min={-2} max={2} step={0.25} onChange={(x) => setA(x === 0 ? 0.25 : x)} color={C.blue} />
        <Slider label="vertex x (h)" value={h} min={-3} max={3} step={0.5} onChange={setH} color={C.green} />
        <Slider label="vertex y (k)" value={k} min={-6} max={6} step={0.5} onChange={setK} color={C.green} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(f(x)=${fTex}\\qquad g(x)=\\dfrac1{f(x)}\\)`} /></div>
      <Plane view={v} label="Reciprocal of a quadratic" step={1} stepY={1}>
        {(X, Y) => {
          let df = ""; for (let i = 0; i <= 240; i++) { const x = v.xmin + (12 * i) / 240, y = f(x); if (y > 30 || y < -30) continue; df += `${df ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)} `; }
          return <>
            {hAsym(X, Y, v, 0, "h")}{zeros.map((z, i) => vAsym(X, Y, v, z, "v" + i))}
            <path d={df} fill="none" stroke={C.blue} strokeWidth={2} />
            <path d={polePath(g, zeros, v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
            {k !== 0 && dot(X, Y, h, 1 / k, C.amber, `(${r2(h)}, ${r2(1 / k)})`, "t")}
          </>;
        }}
      </Plane>
      <Readout tone="green">
        <MathText block html={kind === "two" ? `Two zeros of \\(f\\): vertical asymptotes \\(x=${r2(zeros[0])}\\) and \\(x=${r2(zeros[1])}\\). Three branches; the middle one has a ${A > 0 ? "maximum" : "minimum"} at \\((${r2(h)},\\,${r2(1 / k)})\\).`
          : kind === "one" ? `One (double) zero: one vertical asymptote \\(x=${r2(h)}\\). Both branches lie on the ${A > 0 ? "positive" : "negative"} side, like \\(\\tfrac1{x^2}\\).`
            : `No zeros: no vertical asymptote. The graph is one smooth hump with a ${A > 0 ? "maximum" : "minimum"} at \\((${r2(h)},\\,${r2(1 / k)})\\), and \\(y=0\\) is still the horizontal asymptote.`} />
        <MathText block html={`Where \\(f\\) is increasing, \\(1/f\\) is decreasing (and vice versa); where \\(|f|\\) is large, \\(1/f\\) is close to 0.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.3 y = (ax + b)/(cx + d) */

export function RationalLinear({ init = { a: 2, b: 1, c: 1, d: -2 } }: { init?: { a: number; b: number; c: number; d: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d);
  const Cc = c === 0 ? 1 : c;
  const f: Fn = (x) => (a * x + b) / (Cc * x + d);
  const va = -d / Cc, ha = a / Cc, degenerate = near(a * d - b * Cc, 0);
  const v: View = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };
  const xint = a !== 0 ? -b / a : NaN, yint = d !== 0 ? b / d : NaN;
  return (
    <WidgetCard title="Rational functions y = (ax + b)/(cx + d)" subtitle="vertical asymptote where cx + d = 0; horizontal asymptote y = a/c">
      <Row gap={8}>
        <Slider label="a" value={a} min={-6} max={6} onChange={setA} color={C.blue} />
        <Slider label="b" value={b} min={-8} max={8} onChange={setB} color={C.blue} />
        <Slider label="c" value={c} min={-4} max={4} onChange={(x) => setC(x === 0 ? 1 : x)} color={C.green} />
        <Slider label="d" value={d} min={-8} max={8} onChange={setD} color={C.green} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(f(x)=\\dfrac{${a === 0 ? r2(b) : lin(a, b)}}{${lin(Cc, d)}}\\)`} /></div>
      <Plane view={v} label="Rational function" step={1} stepY={1}>
        {(X, Y) => <>
          {!degenerate && <>{hAsym(X, Y, v, ha, "h")}{vAsym(X, Y, v, va, "v")}</>}
          <path d={polePath(f, [va], v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          {degenerate && <circle cx={X(va)} cy={Y(ha)} r={6} fill="#fff" stroke={C.violet} strokeWidth={2.5} />}
          {!degenerate && Number.isFinite(xint) && dot(X, Y, xint, 0, C.blue, `(${r2(xint)}, 0)`, "x")}
          {!degenerate && Number.isFinite(yint) && dot(X, Y, 0, yint, C.green, `(0, ${r2(yint)})`, "y")}
        </>}
      </Plane>
      <Readout tone={degenerate ? "amber" : "green"}>
        {degenerate
          ? <MathText block html={`Here \\(ad-bc=0\\): the numerator is a multiple of the denominator, so \\(f(x)=${r2(ha)}\\) with a <strong>hole</strong> at \\(x=${r2(va)}\\) — no asymptotes.`} />
          : <>
            <MathText block html={`Vertical asymptote \\(x=-\\tfrac dc=${r2(va)}\\); horizontal asymptote \\(y=\\tfrac ac=${r2(ha)}\\). Domain \\(x\\ne${r2(va)}\\), range \\(y\\ne${r2(ha)}\\).`} />
            <MathText block html={`${Number.isFinite(xint) ? `x-intercept \\(${r2(xint)}\\)` : "no x-intercept"}; ${Number.isFinite(yint) ? `y-intercept \\(${r2(yint)}\\)` : "no y-intercept"}. The graph is ${a * d - b * Cc < 0 ? "decreasing" : "increasing"} on each branch (sign of \\(ad-bc\\)).`} />
          </>}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.4 solving rational equations and inequalities */

const OPS = [">", "≥", "<", "≤", "="] as const;
type Op = (typeof OPS)[number];
const opTex = (o: Op) => ({ ">": ">", "≥": "\\ge", "<": "<", "≤": "\\le", "=": "=" })[o];

export function RationalSolver({ init = { a: 1, b: 1, c: 1, d: -2, k: 2, op: "<" as Op } }: { init?: { a: number; b: number; c: number; d: number; k: number; op: Op } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d), [k, setK] = useState(init.k);
  const [op, setOp] = useState<Op>(init.op);
  const Cc = c === 0 ? 1 : c;
  const f: Fn = (x) => (a * x + b) / (Cc * x + d);
  const va = -d / Cc;
  // f(x) − k = ((a − kc)x + (b − kd)) / (cx + d)
  const p = a - k * Cc, q = b - k * d;
  const root = p !== 0 ? -q / p : NaN;
  const valid = Number.isFinite(root) && !near(root, va);
  const crit = [va, ...(valid ? [root] : [])].sort((s, t) => s - t);
  const pts = [-Infinity, ...crit, Infinity];
  const test = (i: number) => (pts[i] === -Infinity ? pts[i + 1] - 1 : pts[i + 1] === Infinity ? pts[i] + 1 : (pts[i] + pts[i + 1]) / 2);
  const sgn = pts.slice(0, -1).map((_, i) => f(test(i)) - k);
  const holds = (s: number) => (op === ">" || op === "≥" ? s > 0 : s < 0);
  const v: View = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };
  const parts: string[] = [];
  sgn.forEach((s, i) => {
    if (op === "=" || !holds(s)) return;
    const lo = pts[i], hi = pts[i + 1];
    const incl = (x: number) => (op === "≥" || op === "≤") && valid && near(x, root);
    parts.push(`${incl(lo) ? "[" : "("}${lo === -Infinity ? "-\\infty" : r2(lo)},\\,${hi === Infinity ? "\\infty" : r2(hi)}${incl(hi) ? "]" : ")"}`);
  });
  const sol = op === "=" ? (valid ? `x=${r2(root)}` : "\\text{no solution}") : parts.length ? `x\\in ${parts.join("\\cup ")}` : "\\text{no solution}";
  return (
    <WidgetCard title="Solving rational equations and inequalities" subtitle="critical values: where f(x) = k and where f is undefined (the vertical asymptote, always excluded)">
      <Row gap={8}>
        <Slider label="a" value={a} min={-6} max={6} onChange={setA} color={C.blue} />
        <Slider label="b" value={b} min={-8} max={8} onChange={setB} color={C.blue} />
        <Slider label="c" value={c} min={-4} max={4} onChange={(x) => setC(x === 0 ? 1 : x)} color={C.green} />
        <Slider label="d" value={d} min={-8} max={8} onChange={setD} color={C.green} />
        <Slider label="k" value={k} min={-6} max={6} onChange={setK} color={C.amber} />
      </Row>
      <Segmented options={OPS.map((o) => ({ value: o, label: `f(x) ${o} k` }))} value={op} onChange={setOp} />
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(\\dfrac{${a === 0 ? r2(b) : lin(a, b)}}{${lin(Cc, d)}}\\ ${opTex(op)}\\ ${r2(k)}\\)`} /></div>
      <Plane view={v} label="Rational inequality" step={1} stepY={1}>
        {(X, Y) => <>
          {op !== "=" && sgn.map((s, i) => (holds(s) ? <rect key={"b" + i} x={X(Math.max(pts[i], v.xmin))} y={Y(v.ymax)} width={Math.max(0, X(Math.min(pts[i + 1], v.xmax)) - X(Math.max(pts[i], v.xmin)))} height={Y(v.ymin) - Y(v.ymax)} fill={C.green} opacity={0.13} /> : null))}
          {vAsym(X, Y, v, va, "v")}
          <line x1={X(v.xmin)} y1={Y(k)} x2={X(v.xmax)} y2={Y(k)} stroke={C.amber} strokeWidth={2} />
          <path d={polePath(f, [va], v, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          {valid && dot(X, Y, root, k, C.red, `(${r2(root)}, ${r2(k)})`, "r")}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`Rewrite as one fraction: \\(\\dfrac{${p === 0 ? r2(q) : lin(p, q)}}{${lin(Cc, d)}}\\ ${opTex(op === "=" ? "=" : op)}\\ 0\\). Critical values: \\(x=${r2(va)}\\) (undefined)${valid ? ` and \\(x=${r2(root)}\\) (numerator 0)` : ""}.`} />
        <MathText block html={`Solution: \\(${sol}\\)`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.5 rational models and rates of change */

export function RationalModel({ init = { F: 200, v: 4, x0: 20 } }: { init?: { F: number; v: number; x0: number } }) {
  const [F, setF] = useState(init.F), [vv, setV] = useState(init.v), [x0, setX0] = useState(init.x0);
  const [h, setH] = useState(10);
  const A: Fn = (x) => (F + vv * x) / x;
  const view: View = { xmin: 0, xmax: 100, ymin: 0, ymax: 40 };
  const avg = (A(x0 + h) - A(x0)) / h, inst = (A(x0 + 0.001) - A(x0 - 0.001)) / 0.002;
  return (
    <WidgetCard title="A rational model: average cost" subtitle="A(x) = (F + vx)/x — fixed cost F shared over x items plus a cost v per item">
      <Row gap={8}>
        <Slider label="fixed cost F ($)" value={F} min={50} max={400} step={10} onChange={setF} color={C.blue} />
        <Slider label="cost per item v ($)" value={vv} min={1} max={20} onChange={setV} color={C.blue} />
        <Slider label="items x₀" value={x0} min={5} max={80} onChange={setX0} color={C.green} />
        <Slider label="interval h" value={h} min={1} max={20} onChange={setH} color={C.amber} />
      </Row>
      <div style={{ textAlign: "center", fontSize: 18, margin: "6px 0" }}><MathText html={`\\(A(x)=\\dfrac{${F}+${vv}x}{x}=${vv}+\\dfrac{${F}}{x}\\)`} /></div>
      <Plane view={view} label="Average cost" step={10} stepY={5}>
        {(X, Y) => <>
          {hAsym(X, Y, view, vv, "h")}
          <path d={polePath(A, [0], view, X, Y)} fill="none" stroke={C.violet} strokeWidth={3} />
          <line x1={X(x0 - 15)} y1={Y(A(x0) + inst * -15)} x2={X(x0 + 25)} y2={Y(A(x0) + inst * 25)} stroke={C.green} strokeWidth={2} strokeDasharray="6 4" />
          <line x1={X(x0)} y1={Y(A(x0))} x2={X(x0 + h)} y2={Y(A(x0 + h))} stroke={C.amber} strokeWidth={2.4} />
          {dot(X, Y, x0, A(x0), C.red, `(${x0}, ${r2(A(x0))})`, "p")}{dot(X, Y, x0 + h, A(x0 + h), C.amber, undefined, "q")}
        </>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`At \\(x=${x0}\\) items the average cost is \\(\\$${r2(A(x0))}\\) per item. As \\(x\\) grows, \\(A(x)\\to${vv}\\): the horizontal asymptote is the cost per item.`} />
        <MathText block html={`Average rate of change on \\([${x0},\\,${x0 + h}]\\): \\(${r2(avg)}\\) dollars per item per extra item; instantaneous rate at \\(x=${x0}\\): about \\(${r2(inst)}\\). Both are negative — the average cost keeps falling, more and more slowly.`} />
      </Readout>
    </WidgetCard>
  );
}

"use client";

// Linear Algebra I, chapter 8 (eigenvalues) explorers: hunting eigenvectors on the unit circle, the characteristic
// polynomial of a 2 × 2 matrix, eigenspaces of 3 × 3 matrices (exact reduction of A − λI), diagonalisation AP = PD,
// orbits of x_{k+1} = Ax_k, rotation–scaling spirals, and symmetric matrices with their ellipse.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, gcd } from "./kit";
import { Plane, type View } from "./Systems";

type P2 = [number, number];
type Fn = (v: number) => number;
const ap = (A: number[][], [x, y]: P2): P2 => [A[0][0] * x + A[0][1] * y, A[1][0] * x + A[1][1] * y];
const f3 = (x: number) => String(+x.toFixed(3)).replace(/^-0$/, "0");
const mt = (m: (string | number)[][]) => `\\left[\\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.map((x) => (typeof x === "number" ? f3(x) : x)).join(" & ")).join(" \\\\ ")}\\end{array}\\right]`;
const BOX = { display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap" as const, fontSize: 17, margin: "10px 0", overflowX: "auto" as const, overflowY: "hidden" as const, padding: "4px 0" };
const arrow = (from: P2, to: P2, color: string, X: Fn, Y: Fn, w = 3, dash = false) =>
  <g><line x1={X(from[0])} y1={Y(from[1])} x2={X(to[0])} y2={Y(to[1])} stroke={color} strokeWidth={w} strokeDasharray={dash ? "6 4" : undefined} /><circle cx={X(to[0])} cy={Y(to[1])} r={4.5} fill={color} /></g>;
const fullLine = (d: P2, color: string, X: Fn, Y: Fn, w = 2) => { const n = Math.hypot(...d) || 1; return <line x1={X((-30 * d[0]) / n)} y1={Y((-30 * d[1]) / n)} x2={X((30 * d[0]) / n)} y2={Y((30 * d[1]) / n)} stroke={color} strokeWidth={w} strokeDasharray="7 5" />; };
const curve = (pts: P2[], X: Fn, Y: Fn, color: string, w = 2.4) => <polyline points={pts.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")} fill="none" stroke={color} strokeWidth={w} />;

/** eigen-data of a real 2 × 2 matrix */
function eig2(A: number[][]) {
  const tr = A[0][0] + A[1][1], det = A[0][0] * A[1][1] - A[0][1] * A[1][0], disc = tr * tr - 4 * det;
  if (disc < -1e-12) return { kind: "complex" as const, tr, det, disc, re: tr / 2, im: Math.sqrt(-disc) / 2 };
  const s = Math.sqrt(Math.max(disc, 0)), l1 = (tr + s) / 2, l2 = (tr - s) / 2;
  const vec = (l: number): P2 | null => {
    const [a, b] = [A[0][0] - l, A[0][1]], [c, d] = [A[1][0], A[1][1] - l];
    if (Math.abs(a) + Math.abs(b) > 1e-9) return [-b, a];
    if (Math.abs(c) + Math.abs(d) > 1e-9) return [-d, c];
    return null; // A = λI: every vector
  };
  return { kind: "real" as const, tr, det, disc, l1, l2, v1: vec(l1), v2: vec(l2) };
}
const unit = (v: P2): P2 => { const n = Math.hypot(...v) || 1; return [v[0] / n, v[1] / n]; };

function Sliders4({ a, b, c, d, set, range = 4, step = 1 }: { a: number; b: number; c: number; d: number; set: [(v: number) => void, (v: number) => void, (v: number) => void, (v: number) => void]; range?: number; step?: number }) {
  return <>
    <Row gap={10}><Slider label="a" value={a} min={-range} max={range} step={step} onChange={set[0]} color={C.blue} /><Slider label="b" value={b} min={-range} max={range} step={step} onChange={set[1]} color={C.red} /></Row>
    <Row gap={10}><Slider label="c" value={c} min={-range} max={range} step={step} onChange={set[2]} color={C.blue} /><Slider label="d" value={d} min={-range} max={range} step={step} onChange={set[3]} color={C.red} /></Row>
  </>;
}

/* ---------------------------------------------------------------- 8.1 hunting eigenvectors */

const V5: View = { xmin: -5, xmax: 5, ymin: -5, ymax: 5 };
export function EigHuntLab({ init = { a: 3, b: 1, c: 2, d: 2 } }: { init?: { a: number; b: number; c: number; d: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d);
  const [t, setT] = useState(20);
  const A = [[a, b], [c, d]], r = (t * Math.PI) / 180, x: P2 = [Math.cos(r), Math.sin(r)], y = ap(A, x);
  const cross = x[0] * y[1] - x[1] * y[0], lined = Math.abs(cross) < 0.06, e = eig2(A);
  const circle: P2[] = Array.from({ length: 73 }, (_, k) => [Math.cos((k * Math.PI) / 36), Math.sin((k * Math.PI) / 36)]);
  return (
    <WidgetCard title="Hunting for eigenvectors" subtitle="turn x around the unit circle; when Ax lines up with x, x is an eigenvector">
      <Sliders4 a={a} b={b} c={c} d={d} set={[setA, setB, setC, setD]} />
      <Slider label="angle of x" value={t} min={0} max={180} step={1} onChange={setT} format={(v) => `${v}°`} color={C.violet} />
      <Plane view={V5} label="x and Ax" step={1}>
        {(X, Y) => <>
          {curve(circle, X, Y, "#cbd5e1", 1.5)}
          {e.kind === "real" && e.v1 && fullLine(e.v1, "rgba(22,163,74,0.6)", X, Y)}
          {e.kind === "real" && e.v2 && fullLine(e.v2, "rgba(22,163,74,0.6)", X, Y)}
          {arrow([0, 0], y, lined ? C.green : C.red, X, Y, 3.5)}{arrow([0, 0], x, C.blue, X, Y, 3.5)}
        </>}
      </Plane>
      <Readout tone={lined ? "green" : "blue"}>
        <MathText block html={`\\(\\vec x\\approx(${f3(x[0])},${f3(x[1])})\\), \\(A\\vec x\\approx(${f3(y[0])},${f3(y[1])})\\).${lined ? ` Lined up: an eigenvector with \\(\\lambda\\approx${f3((y[0] * x[0] + y[1] * x[1]))}\\).` : " Not parallel: keep turning."}`} />
        <MathText block html={e.kind === "real" ? `Eigenvalues \\(${f3(e.l1)}\\) and \\(${f3(e.l2)}\\); the dashed green lines are the eigen-lines.` : `No real eigenvalues (\\(${f3(e.re)}\\pm${f3(e.im)}i\\)): \\(A\\vec x\\) never lines up with \\(\\vec x\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.2 characteristic polynomial */

export function CharPolyLab({ init = { a: 2, b: 3, c: 3, d: -6 } }: { init?: { a: number; b: number; c: number; d: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d);
  const e = eig2([[a, b], [c, d]]);
  const p = (l: number) => l * l - e.tr * l + e.det;
  const view: View = { xmin: -10, xmax: 10, ymin: -30, ymax: 30 };
  const pts: P2[] = Array.from({ length: 201 }, (_, k) => { const l = -10 + k * 0.1; return [l, Math.max(-40, Math.min(40, p(l)))]; });
  return (
    <WidgetCard title="The characteristic polynomial" subtitle="p(λ) = λ² − (tr A)λ + det A; its real roots are the eigenvalues">
      <Sliders4 a={a} b={b} c={c} d={d} set={[setA, setB, setC, setD]} range={6} />
      <Plane view={view} label="characteristic polynomial" step={2} stepY={10}>
        {(X, Y) => <>
          {curve(pts, X, Y, C.violet)}
          {e.kind === "real" && [e.l1, e.l2].map((l, i) => <circle key={i} cx={X(l)} cy={Y(0)} r={6} fill={C.red} />)}
        </>}
      </Plane>
      <Readout tone={e.kind === "real" ? "green" : "amber"}>
        <MathText block html={`\\(\\operatorname{tr}A=${f3(e.tr)}\\), \\(\\det A=${f3(e.det)}\\): \\(p(\\lambda)=\\lambda^2-(${f3(e.tr)})\\lambda+(${f3(e.det)})\\), discriminant \\(${f3(e.disc)}\\).`} />
        <MathText block html={e.kind === "real" ? (Math.abs(e.disc) < 1e-9 ? `A double root: \\(\\lambda=${f3(e.l1)}\\) with algebraic multiplicity 2.` : `Roots (red): \\(\\lambda=${f3(e.l1)}\\) and \\(${f3(e.l2)}\\). Sum \\(=\\operatorname{tr}A\\), product \\(=\\det A\\).`) : `Negative discriminant: no real roots. The eigenvalues are \\(${f3(e.re)}\\pm${f3(e.im)}i\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.3 eigenspaces of 3 × 3 matrices (exact) */

type Q = { n: number; d: number };
const q = (n: number, d = 1): Q => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return { n: n / g, d: d / g }; };
const qsub = (a: Q, b: Q) => q(a.n * b.d - b.n * a.d, a.d * b.d);
const qmul = (a: Q, b: Q) => q(a.n * b.n, a.d * b.d);
const qdiv = (a: Q, b: Q) => q(a.n * b.d, a.d * b.n);
const qt = (a: Q) => (a.d === 1 ? String(a.n) : `${a.n < 0 ? "-" : ""}\\tfrac{${Math.abs(a.n)}}{${a.d}}`);
function rrefQ(m0: number[][]) {
  const m = m0.map((r) => r.map((x) => q(x))), rows = m.length, cols = m[0].length, piv: number[] = [];
  let r = 0;
  for (let c = 0; c < cols && r < rows; c++) {
    const p = m.findIndex((row, i) => i >= r && row[c].n !== 0);
    if (p < 0) continue;
    [m[r], m[p]] = [m[p], m[r]];
    const k = m[r][c]; m[r] = m[r].map((x) => qdiv(x, k));
    for (let i = 0; i < rows; i++) if (i !== r && m[i][c].n !== 0) { const f = m[i][c]; m[i] = m[i].map((x, j) => qsub(x, qmul(f, m[r][j]))); }
    piv.push(c); r++;
  }
  return { m, piv };
}
const ESETS: Record<string, { label: string; A: number[][]; eig: [number, number][] }> = {
  full: { label: "three distinct", A: [[1, 1, 0], [1, 2, 1], [0, 1, 1]], eig: [[0, 1], [1, 1], [3, 1]] },
  rep: { label: "repeated, complete", A: [[4, -1, 6], [2, 1, 6], [2, -1, 8]], eig: [[2, 2], [9, 1]] },
  def: { label: "defective", A: [[2, 0, 0], [1, 2, 0], [0, 0, 3]], eig: [[2, 2], [3, 1]] },
  scal: { label: "2I", A: [[2, 0, 0], [0, 2, 0], [0, 0, 2]], eig: [[2, 3]] },
};
export function EigSpaceLab({ init = { set: "full" } }: { init?: { set: string } }) {
  const [set, setSet] = useState(init.set in ESETS ? init.set : "full");
  const S = ESETS[set];
  const data = S.eig.map(([l, alg]) => { const B = S.A.map((r, i) => r.map((x, j) => x - (i === j ? l : 0))); const { m, piv } = rrefQ(B); return { l, alg, B, m, geo: 3 - piv.length }; });
  const total = data.reduce((s, x) => s + x.geo, 0);
  return (
    <WidgetCard title="Eigenspaces and multiplicity" subtitle="dim E_λ = 3 − rank(A − λI) is at most the algebraic multiplicity">
      <Segmented label="A" options={Object.entries(ESETS).map(([value, s]) => ({ value, label: s.label }))} value={set} onChange={setSet} />
      <div style={BOX}><MathText html={`\\(A=${mt(S.A)}\\)`} /></div>
      {data.map((x) => (
        <div key={x.l} style={BOX}><MathText html={`\\(\\lambda=${x.l}:\\ A-${x.l}I=${mt(x.B)}\\longrightarrow${mt(x.m.map((r) => r.map(qt)))}\\)`} /></div>
      ))}
      <Readout tone={total === 3 ? "green" : "amber"}>
        {data.map((x) => <MathText key={x.l} block html={`\\(\\lambda=${x.l}\\): algebraic multiplicity ${x.alg}, \\(\\dim E_{${x.l}}=${x.geo}\\)${x.geo < x.alg ? " — too small." : "."}`} />)}
        <MathText block html={total === 3 ? "The eigenspace dimensions add to 3: the eigenvectors form a basis of \\(\\mathbb R^3\\)." : `The dimensions add to only ${total}: no eigenbasis, so \\(A\\) is defective.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.4 diagonalisation */

export function DiagLab({ init = { a: 7, b: 2, c: -4, d: 1 } }: { init?: { a: number; b: number; c: number; d: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d);
  const A = [[a, b], [c, d]], e = eig2(A);
  let body: string, tone: "green" | "amber" = "amber", ok = false, P: number[][] = [], D: number[][] = [];
  if (e.kind === "complex") body = `Complex eigenvalues \\(${f3(e.re)}\\pm${f3(e.im)}i\\): no real diagonalisation (see 8.6).`;
  else if (!e.v1 || !e.v2) { body = "\\(A=\\lambda I\\) is already diagonal."; tone = "green"; ok = true; P = [[1, 0], [0, 1]]; D = A; }
  else {
    const v1 = e.v1, v2 = e.v2, detP = v1[0] * v2[1] - v1[1] * v2[0];
    if (Math.abs(e.disc) < 1e-9 || Math.abs(detP) < 1e-9) body = `Double eigenvalue \\(${f3(e.l1)}\\) with a one-dimensional eigenspace: only one independent eigenvector, so \\(A\\) is not diagonalisable.`;
    else { ok = true; tone = "green"; P = [[v1[0], v2[0]], [v1[1], v2[1]]]; D = [[e.l1, 0], [0, e.l2]]; body = `Eigenvectors \\((${f3(v1[0])},${f3(v1[1])})\\) for \\(${f3(e.l1)}\\) and \\((${f3(v2[0])},${f3(v2[1])})\\) for \\(${f3(e.l2)}\\); \\(\\det P=${f3(detP)}\\ne0\\), so \\(A=PDP^{-1}\\).`; }
  }
  const mm = (X: number[][], Y: number[][]) => X.map((r) => Y[0].map((_, j) => r.reduce((s, x, k) => s + x * Y[k][j], 0)));
  return (
    <WidgetCard title="Diagonalisation" subtitle="P = eigenvectors, D = eigenvalues; AP = PD says each column is an eigenvector">
      <Sliders4 a={a} b={b} c={c} d={d} set={[setA, setB, setC, setD]} range={8} />
      {ok && <><div style={BOX}><MathText html={`\\(P=${mt(P)},\\quad D=${mt(D)}\\)`} /></div><div style={BOX}><MathText html={`\\(AP=${mt(A)}${mt(P)}=${mt(mm(A, P))}\\)`} /><MathText html={`\\(PD=${mt(mm(P, D))}\\)`} /></div></>}
      <Readout tone={tone}><MathText block html={body} /></Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.5 orbits of x_{k+1} = Ax_k */

const OSETS: Record<string, { label: string; A: number[][]; x0: P2 }> = {
  markov: { label: "Markov", A: [[0.9, 0.2], [0.1, 0.8]], x0: [1, 0] },
  grow: { label: "growth", A: [[1.25, 0.25], [0.25, 1.25]], x0: [3, 1] },
  decay: { label: "decay", A: [[0.6, 0.2], [0.2, 0.6]], x0: [4, 1] },
  saddle: { label: "saddle", A: [[1.2, 0], [0, 0.6]], x0: [0.3, 4] },
  spiral: { label: "spiral", A: [[0.5, -0.5], [0.5, 0.5]], x0: [4, 0] },
};
export function OrbitLab({ init = { set: "markov" } }: { init?: { set: string } }) {
  const [set, setSet] = useState(init.set in OSETS ? init.set : "markov");
  const [n, setN] = useState(10);
  const { A, x0 } = OSETS[set], e = eig2(A);
  const pts: P2[] = [x0];
  for (let k = 0; k < n; k++) pts.push(ap(A, pts[pts.length - 1]));
  const R = Math.max(2, ...pts.map((p) => Math.max(Math.abs(p[0]), Math.abs(p[1])))) * 1.15;
  const view: View = { xmin: -R, xmax: R, ymin: -R, ymax: R };
  return (
    <WidgetCard title="Dynamical systems" subtitle="x_{k+1} = Ax_k: each eigen-component is multiplied by its eigenvalue every step">
      <Segmented label="system" options={Object.entries(OSETS).map(([value, s]) => ({ value, label: s.label }))} value={set} onChange={setSet} />
      <Slider label="steps" value={n} min={1} max={30} onChange={setN} color={C.violet} />
      <Plane view={view} label="orbit" step={R > 14 ? 5 : R > 6 ? 2 : 1}>
        {(X, Y) => <>
          {e.kind === "real" && e.v1 && fullLine(e.v1, "rgba(22,163,74,0.6)", X, Y)}
          {e.kind === "real" && e.v2 && fullLine(e.v2, "rgba(22,163,74,0.6)", X, Y)}
          {curve(pts, X, Y, C.violet, 2)}
          {pts.map((p, k) => <circle key={k} cx={X(p[0])} cy={Y(p[1])} r={k ? 3.5 : 6} fill={k ? C.violet : C.blue} />)}
        </>}
      </Plane>
      <div style={BOX}><MathText html={`\\(A=${mt(A)},\\quad \\vec x_0=(${x0.join(",")}),\\quad \\vec x_{${n}}\\approx(${f3(pts[n][0])},${f3(pts[n][1])})\\)`} /></div>
      <Readout tone="blue">
        <MathText block html={e.kind === "real" ? `Eigenvalues \\(${f3(e.l1)}\\) and \\(${f3(e.l2)}\\) (green: eigen-lines). ${Math.max(Math.abs(e.l1), Math.abs(e.l2)) > 1.0001 ? "The larger one exceeds 1: the orbit grows along its eigen-line." : Math.abs(Math.max(Math.abs(e.l1), Math.abs(e.l2)) - 1) < 1e-4 ? "The largest is 1: the orbit settles on its eigen-line (a steady state)." : "Both are below 1: the orbit shrinks to 0."}` : `Complex eigenvalues with \\(|\\lambda|\\approx${f3(Math.sqrt(e.det))}\\): the orbit spirals ${e.det < 1 ? "inward" : e.det > 1 ? "outward" : "around a closed curve"}.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.6 rotation–scaling spirals */

export function SpiralLab({ init = { a: 0.5, b: 0.5 } }: { init?: { a: number; b: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b);
  const A = [[a, -b], [b, a]], r = Math.hypot(a, b), phi = (Math.atan2(b, a) * 180) / Math.PI;
  const pts: P2[] = [[3, 0]];
  for (let k = 0; k < 24; k++) { const p = ap(A, pts[pts.length - 1]); if (Math.abs(p[0]) > 60 || Math.abs(p[1]) > 60) break; pts.push(p); }
  const view: View = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };
  return (
    <WidgetCard title="Rotation–scaling" subtitle="C = [a −b; b a] = r·R_φ has eigenvalues a ± bi; iterating it draws a spiral">
      <Row gap={10}><Slider label="a" value={a} min={-1.5} max={1.5} step={0.05} onChange={setA} color={C.blue} /><Slider label="b" value={b} min={-1.5} max={1.5} step={0.05} onChange={setB} color={C.red} /></Row>
      <Plane view={view} label="spiral" step={1}>
        {(X, Y) => <>{curve(pts, X, Y, C.violet, 2)}{pts.map((p, k) => <circle key={k} cx={X(p[0])} cy={Y(p[1])} r={k ? 3 : 6} fill={k ? C.violet : C.blue} />)}</>}
      </Plane>
      <div style={BOX}><MathText html={`\\(C=${mt(A)},\\quad \\lambda=${f3(a)}\\pm${f3(Math.abs(b))}i,\\quad r=${f3(r)},\\quad \\varphi\\approx${f3(phi)}^\\circ\\)`} /></div>
      <Readout tone={Math.abs(r - 1) < 0.01 ? "green" : "blue"}>
        <MathText block html={b === 0 ? "With \\(b=0\\) the eigenvalues are real and \\(C=aI\\): no rotation, the points move along a line." : `Each step turns by \\(${f3(phi)}^\\circ\\) and multiplies lengths by \\(r=${f3(r)}\\): ${r < 0.995 ? "an inward spiral." : r > 1.005 ? "an outward spiral." : "points stay on a circle."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 8.7 symmetric matrices */

export function SymLab({ init = { a: 3, b: 1, d: 3 } }: { init?: { a: number; b: number; d: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [d, setD] = useState(init.d);
  const A = [[a, b], [b, d]], e = eig2(A);
  const circle: P2[] = Array.from({ length: 121 }, (_, k) => [Math.cos((k * Math.PI) / 60), Math.sin((k * Math.PI) / 60)]);
  const img = circle.map((p) => ap(A, p));
  const R = Math.max(2, ...img.map((p) => Math.max(Math.abs(p[0]), Math.abs(p[1])))) * 1.15;
  const view: View = { xmin: -R, xmax: R, ymin: -R, ymax: R };
  if (e.kind !== "real") return null; // symmetric ⇒ real (kept for the type checker)
  const u1 = e.v1 ? unit(e.v1) : ([1, 0] as P2), u2: P2 = e.v1 ? [-u1[1], u1[0]] : [0, 1];
  return (
    <WidgetCard title="Symmetric matrices" subtitle="A = Aᵀ: real eigenvalues, perpendicular eigenvectors; the unit circle becomes an ellipse on those axes">
      <Row gap={10}><Slider label="a" value={a} min={-4} max={4} step={0.5} onChange={setA} color={C.blue} /><Slider label="b = c" value={b} min={-3} max={3} step={0.5} onChange={setB} color={C.violet} /><Slider label="d" value={d} min={-4} max={4} step={0.5} onChange={setD} color={C.red} /></Row>
      <Plane view={view} label="symmetric matrix and its ellipse" step={R > 8 ? 2 : 1}>
        {(X, Y) => <>
          {fullLine(u1, "rgba(37,99,235,0.6)", X, Y)}{fullLine(u2, "rgba(220,38,38,0.6)", X, Y)}
          {curve(circle, X, Y, "#cbd5e1", 1.5)}{curve(img, X, Y, C.violet, 2.6)}
          {arrow([0, 0], [e.l1 * u1[0], e.l1 * u1[1]], C.blue, X, Y, 3.5)}{arrow([0, 0], [e.l2 * u2[0], e.l2 * u2[1]], C.red, X, Y, 3.5)}
        </>}
      </Plane>
      <div style={BOX}><MathText html={`\\(A=${mt(A)}=QDQ^T,\\quad Q\\approx${mt([[u1[0], u2[0]], [u1[1], u2[1]]])},\\quad D\\approx${mt([[e.l1, 0], [0, e.l2]])}\\)`} /></div>
      <Readout tone="green">
        <MathText block html={`Eigenvalues \\(${f3(e.l1)}\\) and \\(${f3(e.l2)}\\), always real. The eigenvectors (blue, red) are perpendicular, and the violet ellipse \\(A(\\text{unit circle})\\) has semi-axes \\(|\\lambda_1|=${f3(Math.abs(e.l1))}\\), \\(|\\lambda_2|=${f3(Math.abs(e.l2))}\\) along them.`} />
      </Readout>
    </WidgetCard>
  );
}

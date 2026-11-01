"use client";

// Linear Algebra I, chapter 7 (linear transformations) explorers: a 2 × 2 matrix acting on the plane (grid, unit
// square, x and T(x)), the catalogue of geometric maps, composition in both orders, kernel and range of a 2 × 2
// matrix, and the matrix of a map relative to another basis. Matrix arithmetic is exact (fractions) where shown.

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, gcd } from "./kit";
import { Plane, type View } from "./Systems";

/* ---------------------------------------------------------------- exact fractions */

type Q = { n: number; d: number };
const q = (n: number, d = 1): Q => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return { n: n / g, d: d / g }; };
const add = (a: Q, b: Q) => q(a.n * b.d + b.n * a.d, a.d * b.d);
const mul = (a: Q, b: Q) => q(a.n * b.n, a.d * b.d);
const val = (a: Q) => a.n / a.d;
const tex = (a: Q) => (a.d === 1 ? String(a.n) : `${a.n < 0 ? "-" : ""}\\tfrac{${Math.abs(a.n)}}{${a.d}}`);
const mt0 = (m: string[][]) => `\\left[\\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\\end{array}\\right]`;
const mt = (m: Q[][]) => (m.some((r) => r.some((x) => x.d !== 1)) ? `{\\def\\arraystretch{1.35}${mt0(m.map((r) => r.map(tex)))}}` : mt0(m.map((r) => r.map(tex))));
const mn = (m: number[][]) => m.map((r) => r.map((x) => q(x)));
const mmul = (A: Q[][], B: Q[][]) => A.map((r) => B[0].map((_, j) => r.reduce((s, x, k) => add(s, mul(x, B[k][j])), q(0))));
const inv2 = (P: Q[][]): Q[][] | null => {
  const det = add(mul(P[0][0], P[1][1]), mul(q(-1), mul(P[0][1], P[1][0])));
  if (det.n === 0) return null;
  const s = (x: Q) => q(x.n * det.d, x.d * det.n);
  return [[s(P[1][1]), s(mul(q(-1), P[0][1]))], [s(mul(q(-1), P[1][0])), s(P[0][0])]];
};
/** decimal matrix entries, rounded for display */
const dt = (m: number[][]) => mt0(m.map((r) => r.map((x) => String(+x.toFixed(3)).replace(/^-0$/, "0"))));

type P2 = [number, number];
type Fn = (v: number) => number;
const ap = (A: number[][], [x, y]: P2): P2 => [A[0][0] * x + A[0][1] * y, A[1][0] * x + A[1][1] * y];
const arrow = (from: P2, to: P2, color: string, X: Fn, Y: Fn, w = 3, dash = false) =>
  <g><line x1={X(from[0])} y1={Y(from[1])} x2={X(to[0])} y2={Y(to[1])} stroke={color} strokeWidth={w} strokeDasharray={dash ? "6 4" : undefined} /><circle cx={X(to[0])} cy={Y(to[1])} r={4.5} fill={color} /></g>;
const poly = (pts: P2[], X: Fn, Y: Fn, fill: string, stroke: string, dash = false) =>
  <polygon points={pts.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")} fill={fill} stroke={stroke} strokeWidth={2} strokeDasharray={dash ? "5 4" : undefined} />;
/** the image of the integer grid lines −n..n under A */
const imageGrid = (A: number[][], X: Fn, Y: Fn, n = 6, color = "rgba(124,58,237,0.28)") => {
  const out = [];
  for (let i = -n; i <= n; i++) {
    const p = ap(A, [i, -n]), r = ap(A, [i, n]), s = ap(A, [-n, i]), t = ap(A, [n, i]);
    out.push(<line key={"v" + i} x1={X(p[0])} y1={Y(p[1])} x2={X(r[0])} y2={Y(r[1])} stroke={color} strokeWidth={1} />);
    out.push(<line key={"h" + i} x1={X(s[0])} y1={Y(s[1])} x2={X(t[0])} y2={Y(t[1])} stroke={color} strokeWidth={1} />);
  }
  return out;
};
const BOX = { display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap" as const, fontSize: 18, margin: "10px 0", overflowX: "auto" as const, overflowY: "hidden" as const, padding: "4px 0" };
const SQ: P2[] = [[0, 0], [1, 0], [1, 1], [0, 1]];
/** an asymmetric "F" so turns and flips are visible */
const FSHAPE: P2[] = [[0, 0], [0.6, 0], [0.6, 1.2], [1.4, 1.2], [1.4, 1.7], [0.6, 1.7], [0.6, 2.4], [1.8, 2.4], [1.8, 3], [0, 3]];

/* ---------------------------------------------------------------- 7.1–7.3 a matrix acting on the plane */

const V6: View = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };
export function Map2Lab({ init = { a: 2, b: 1, c: 0, d: 1, x: 1, y: 2 } }: { init?: { a: number; b: number; c: number; d: number; x: number; y: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d);
  const [x, setX] = useState(init.x), [y, setY] = useState(init.y);
  const A = [[a, b], [c, d]], Tx = ap(A, [x, y]), det = a * d - b * c;
  return (
    <WidgetCard title="A matrix acting on the plane" subtitle="T(x) = Ax: the columns of A are T(e₁) and T(e₂); the grid and the unit square follow">
      <Row gap={10}><Slider label="T(e₁): a" value={a} min={-3} max={3} onChange={setA} color={C.blue} /><Slider label="c" value={c} min={-3} max={3} onChange={setC} color={C.blue} /></Row>
      <Row gap={10}><Slider label="T(e₂): b" value={b} min={-3} max={3} onChange={setB} color={C.red} /><Slider label="d" value={d} min={-3} max={3} onChange={setD} color={C.red} /></Row>
      <Row gap={10}><Slider label="x₁" value={x} min={-3} max={3} onChange={setX} color={C.muted} /><Slider label="x₂" value={y} min={-3} max={3} onChange={setY} color={C.muted} /></Row>
      <Plane view={V6} label="a matrix acting on the plane" step={1}>
        {(X, Y) => <>
          {imageGrid(A, X, Y)}
          {poly(SQ, X, Y, "rgba(37,99,235,0.10)", "#94a3b8", true)}
          {poly(SQ.map((p) => ap(A, p)), X, Y, "rgba(124,58,237,0.22)", C.violet)}
          {arrow([0, 0], [a, c], C.blue, X, Y, 4)}{arrow([0, 0], [b, d], C.red, X, Y, 4)}
          {arrow([0, 0], [x, y], "#64748b", X, Y, 2.5, true)}{arrow([0, 0], Tx, C.green, X, Y, 3.5)}
        </>}
      </Plane>
      <Readout tone={det ? "blue" : "amber"}>
        <MathText block html={`\\(T(\\vec x)=${mt0([[String(a), String(b)], [String(c), String(d)]])}${mt0([[String(x)], [String(y)]])}=${mt0([[`${a}(${x})+${b}(${y})`], [`${c}(${x})+${d}(${y})`]])}=${mt0([[String(Tx[0])], [String(Tx[1])]])}\\) (green; \\(\\vec x\\) is dashed grey).`} />
        <MathText block html={det ? `Blue \\(=T(\\vec e_1)=(${a},${c})\\), red \\(=T(\\vec e_2)=(${b},${d})\\). The unit square becomes the violet parallelogram, area \\(|ad-bc|=${Math.abs(det)}\\).` : "The columns are parallel: the whole plane is squashed onto a line (or a point). Different inputs now share outputs."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.4 geometric maps */

const KINDS = [
  { value: "rot", label: "rotation" }, { value: "ref", label: "reflection" }, { value: "proj", label: "projection" },
  { value: "shear", label: "shear" }, { value: "scale", label: "stretch" },
];
const V4: View = { xmin: -4, xmax: 4, ymin: -4, ymax: 4 };
export function GeoLab({ init = { kind: "rot", t: 60 } }: { init?: { kind: string; t: number } }) {
  const [kind, setKind] = useState(init.kind);
  const [t, setT] = useState(init.t), [k, setK] = useState(1), [k2, setK2] = useState(0.5);
  const r = (t * Math.PI) / 180, cs = Math.cos(r), sn = Math.sin(r), c2 = Math.cos(2 * r), s2 = Math.sin(2 * r);
  const A = kind === "rot" ? [[cs, -sn], [sn, cs]] : kind === "ref" ? [[c2, s2], [s2, -c2]] : kind === "proj" ? [[cs * cs, cs * sn], [cs * sn, sn * sn]] : kind === "shear" ? [[1, k], [0, 1]] : [[k + 1, 0], [0, k2]];
  const formula = kind === "rot" ? `R_{${t}^\\circ}=${mt0([["\\cos" + t + "^\\circ", "-\\sin" + t + "^\\circ"], ["\\sin" + t + "^\\circ", "\\cos" + t + "^\\circ"]])}`
    : kind === "ref" ? `R=2\\vec u\\vec u^T-I=${mt0([["\\cos" + 2 * t + "^\\circ", "\\sin" + 2 * t + "^\\circ"], ["\\sin" + 2 * t + "^\\circ", "-\\cos" + 2 * t + "^\\circ"]])}`
    : kind === "proj" ? `P=\\vec u\\vec u^T,\\ \\vec u=(\\cos${t}^\\circ,\\sin${t}^\\circ)` : kind === "shear" ? `${mt0([["1", String(k)], ["0", "1"]])}` : `\\operatorname{diag}(${k + 1},\\ ${k2})`;
  const lineOn = kind === "ref" || kind === "proj";
  const det = A[0][0] * A[1][1] - A[0][1] * A[1][0];
  return (
    <WidgetCard title="Geometric maps of the plane" subtitle="each map is linear, so it is determined by where e₁ and e₂ go — the columns of its matrix">
      <Segmented label="map" options={KINDS} value={kind} onChange={setKind} />
      {(kind === "rot" || lineOn) && <Slider label={kind === "rot" ? "angle θ" : "line angle"} value={t} min={kind === "rot" ? -180 : 0} max={180} step={15} onChange={setT} format={(v) => `${v}°`} color={C.violet} />}
      {kind === "shear" && <Slider label="k" value={k} min={-3} max={3} step={0.5} onChange={setK} color={C.violet} />}
      {kind === "scale" && <Row gap={10}><Slider label="x₁ factor" value={k + 1} min={-2} max={3} step={0.5} onChange={(v) => setK(v - 1)} color={C.blue} /><Slider label="x₂ factor" value={k2} min={-2} max={3} step={0.5} onChange={setK2} color={C.red} /></Row>}
      <div style={BOX}><MathText html={`\\(${formula}\\approx${dt(A)}\\)`} /></div>
      <Plane view={V4} label="geometric map" step={1}>
        {(X, Y) => <>
          {lineOn && <line x1={X(-6 * cs)} y1={Y(-6 * sn)} x2={X(6 * cs)} y2={Y(6 * sn)} stroke={C.green} strokeWidth={2.5} />}
          {poly(FSHAPE, X, Y, "rgba(37,99,235,0.12)", "#94a3b8", true)}
          {poly(FSHAPE.map((p) => ap(A, p)), X, Y, "rgba(124,58,237,0.25)", C.violet)}
          {arrow([0, 0], [A[0][0], A[1][0]], C.blue, X, Y, 3.5)}{arrow([0, 0], [A[0][1], A[1][1]], C.red, X, Y, 3.5)}
        </>}
      </Plane>
      <Readout tone="blue">
        <MathText block html={`Blue \\(=T(\\vec e_1)\\), red \\(=T(\\vec e_2)\\) — the two columns. The dashed F is the input, the violet F its image. \\(\\det\\approx${+det.toFixed(3)}\\): ${Math.abs(det) < 1e-9 ? "the plane collapses onto a line (a projection cannot be undone)." : det < 0 ? "negative, so the map flips orientation (the F is mirrored)." : "positive, so orientation is kept."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.5 composition */

const MAPS: Record<string, { label: string; A: number[][]; tex: string }> = {
  rot90: { label: "rotate 90°", A: [[0, -1], [1, 0]], tex: "R_{90^\\circ}" },
  refx: { label: "reflect in x₁-axis", A: [[1, 0], [0, -1]], tex: "F_{x_1}" },
  refd: { label: "reflect in x₂ = x₁", A: [[0, 1], [1, 0]], tex: "F_{d}" },
  shear: { label: "shear k = 1", A: [[1, 1], [0, 1]], tex: "H" },
  scale: { label: "stretch x₁ by 2", A: [[2, 0], [0, 1]], tex: "D" },
  rot180: { label: "rotate 180°", A: [[-1, 0], [0, -1]], tex: "R_{180^\\circ}" },
};
const VC: View = { xmin: -5, xmax: 5, ymin: -5, ymax: 5 };
export function ComposeLab({ init = { t: "rot90", s: "refx" } }: { init?: { t: string; s: string } }) {
  const [t, setT] = useState(init.t in MAPS ? init.t : "rot90"), [s, setS] = useState(init.s in MAPS ? init.s : "refx");
  const [order, setOrder] = useState<"ST" | "TS">("ST");
  const A = mn(MAPS[t].A), B = mn(MAPS[s].A), BA = mmul(B, A), AB = mmul(A, B);
  const same = BA.every((r, i) => r.every((x, j) => x.n === AB[i][j].n && x.d === AB[i][j].d));
  const first = order === "ST" ? MAPS[t].A : MAPS[s].A, both = (order === "ST" ? BA : AB).map((r) => r.map(val));
  const opts = Object.entries(MAPS).map(([value, m]) => ({ value, label: m.label }));
  return (
    <WidgetCard title="Composing two maps" subtitle="first T (matrix A), then S (matrix B): S ∘ T has matrix BA — the first map sits on the right">
      <Segmented label="T (first)" options={opts} value={t} onChange={setT} />
      <Segmented label="S (second)" options={opts} value={s} onChange={setS} />
      <Segmented label="show" options={[{ value: "ST", label: "S ∘ T (T first)" }, { value: "TS", label: "T ∘ S (S first)" }]} value={order} onChange={setOrder} />
      <Plane view={VC} label="composition of two maps" step={1}>
        {(X, Y) => <>
          {poly(FSHAPE, X, Y, "rgba(100,116,139,0.10)", "#94a3b8", true)}
          {poly(FSHAPE.map((p) => ap(first, p)), X, Y, "rgba(37,99,235,0.16)", C.blue, true)}
          {poly(FSHAPE.map((p) => ap(both, p)), X, Y, "rgba(124,58,237,0.28)", C.violet)}
        </>}
      </Plane>
      <div style={BOX}><MathText html={`\\(BA=${mt(B)}${mt(A)}=${mt(BA)}\\)`} /><MathText html={`\\(AB=${mt(A)}${mt(B)}=${mt(AB)}\\)`} /></div>
      <Readout tone={same ? "green" : "blue"}>
        <MathText block html={`Grey dashed: the input. Blue dashed: after the first map. Violet: after both, matrix \\(${order === "ST" ? "BA" : "AB"}\\).`} />
        <MathText block html={same ? "Here \\(BA=AB\\): these two maps commute, so the order does not matter." : "\\(BA\\ne AB\\): doing the maps in the other order gives a different result."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.6 kernel and range */

const VK: View = { xmin: -5, xmax: 5, ymin: -5, ymax: 5 };
export function KernelLab({ init = { a: 1, b: -2, c: -2, d: 4 } }: { init?: { a: number; b: number; c: number; d: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d);
  const [s, setS] = useState(1);
  const A = [[a, b], [c, d]], det = a * d - b * c, zero = a === 0 && b === 0 && c === 0 && d === 0;
  // rank 1: a kernel direction from a nonzero row, a range direction from a nonzero column
  const kd: P2 = a !== 0 || b !== 0 ? [-b, a] : [-d, c], rd: P2 = a !== 0 || c !== 0 ? [a, c] : [b, d];
  const sample: P2 = det === 0 && !zero ? [s * kd[0], s * kd[1]] : [1, 1], off: P2 = det === 0 && !zero ? [kd[1] === 0 ? 0 : 1, kd[1] === 0 ? 1 : 0] : [2, -1];
  const ln = (dir: P2, color: string, X: Fn, Y: Fn) => { const n = Math.hypot(...dir) || 1; return <line x1={X((-9 * dir[0]) / n)} y1={Y((-9 * dir[1]) / n)} x2={X((9 * dir[0]) / n)} y2={Y((9 * dir[1]) / n)} stroke={color} strokeWidth={3} />; };
  return (
    <WidgetCard title="Kernel and range" subtitle="ker T = vectors sent to 0 (in the domain); range = all outputs (in the codomain)">
      <Row gap={10}><Slider label="a" value={a} min={-4} max={4} onChange={setA} color={C.blue} /><Slider label="b" value={b} min={-4} max={4} onChange={setB} color={C.red} /></Row>
      <Row gap={10}><Slider label="c" value={c} min={-4} max={4} onChange={setC} color={C.blue} /><Slider label="d" value={d} min={-4} max={4} onChange={setD} color={C.red} /></Row>
      {det === 0 && !zero && <Slider label="slide along ker T" value={s} min={-2} max={2} step={0.5} onChange={setS} color={C.violet} />}
      <Plane view={VK} label="kernel and range" step={1}>
        {(X, Y) => <>
          {det === 0 && !zero && <>{ln(kd, "rgba(124,58,237,0.75)", X, Y)}{ln(rd, "rgba(22,163,74,0.75)", X, Y)}</>}
          {arrow([0, 0], sample, C.violet, X, Y, 3, true)}{arrow([0, 0], ap(A, sample), C.violet, X, Y, 3.5)}
          {arrow([0, 0], off, C.blue, X, Y, 3, true)}{arrow([0, 0], ap(A, off), C.blue, X, Y, 3.5)}
        </>}
      </Plane>
      <Readout tone={det ? "green" : "amber"}>
        <MathText block html={`\\(A=${mt0(A.map((r) => r.map(String)))}\\), \\(\\det A=${det}\\). Dashed arrows are inputs, solid arrows their images.`} />
        <MathText block html={zero ? "Every vector goes to \\(\\vec 0\\): \\(\\ker T=\\mathbb R^2\\), range \\(=\\{\\vec 0\\}\\)." : det ? "\\(\\ker T=\\{\\vec 0\\}\\) and the range is all of \\(\\mathbb R^2\\): \\(T\\) is one-to-one and onto." : `Violet line: \\(\\ker T=\\operatorname{span}\\{(${kd[0]},${kd[1]})\\}\\) — the violet input lands on \\(\\vec 0\\). Green line: range \\(=\\operatorname{span}\\{(${rd[0]},${rd[1]})\\}\\) — every output (blue) lies on it. \\(\\dim\\ker+\\dim\\operatorname{range}=1+1=2\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 7.7 the matrix in another basis */

const BSETS: Record<string, { label: string; A: Q[][]; b1: P2; b2: P2 }> = {
  diag: { label: "A = [4 −2; 1 1]", A: mn([[4, -2], [1, 1]]), b1: [1, 1], b2: [2, 1] },
  tri: { label: "A = [3 1; −1 1]", A: mn([[3, 1], [-1, 1]]), b1: [1, -1], b2: [1, 0] },
  refl: { label: "reflection in x₂ = 2x₁", A: [[q(-3, 5), q(4, 5)], [q(4, 5), q(3, 5)]], b1: [1, 2], b2: [-2, 1] },
};
const VB: View = { xmin: -7, xmax: 7, ymin: -7, ymax: 7 };
export function BasisLab({ init = { set: "diag" } }: { init?: { set: string } }) {
  const start = BSETS[init.set] ?? BSETS.diag;
  const [set, setSet] = useState(init.set in BSETS ? init.set : "diag");
  const [b1, setB1] = useState<P2>(start.b1), [b2, setB2] = useState<P2>(start.b2);
  const A = BSETS[set].A, An = A.map((r) => r.map(val));
  const P = mn([[b1[0], b2[0]], [b1[1], b2[1]]]), Pi = inv2(P);
  const TB = Pi ? mmul(Pi, mmul(A, P)) : null;
  const diag = TB && TB[0][1].n === 0 && TB[1][0].n === 0;
  const pick = (k: string) => { setSet(k); setB1(BSETS[k].b1); setB2(BSETS[k].b2); };
  const bgrid = (X: Fn, Y: Fn) => {
    const out = [];
    for (let i = -6; i <= 6; i++) {
      const p: P2 = [i * b1[0] - 8 * b2[0], i * b1[1] - 8 * b2[1]], r: P2 = [i * b1[0] + 8 * b2[0], i * b1[1] + 8 * b2[1]];
      const s: P2 = [i * b2[0] - 8 * b1[0], i * b2[1] - 8 * b1[1]], t: P2 = [i * b2[0] + 8 * b1[0], i * b2[1] + 8 * b1[1]];
      out.push(<line key={"a" + i} x1={X(p[0])} y1={Y(p[1])} x2={X(r[0])} y2={Y(r[1])} stroke="rgba(234,88,12,0.25)" />);
      out.push(<line key={"b" + i} x1={X(s[0])} y1={Y(s[1])} x2={X(t[0])} y2={Y(t[1])} stroke="rgba(234,88,12,0.25)" />);
    }
    return out;
  };
  return (
    <WidgetCard title="The matrix of T in another basis" subtitle="[T]_B = P⁻¹AP with P = [b₁ b₂]: column j is T(bⱼ) written in B-coordinates">
      <Segmented label="map" options={Object.entries(BSETS).map(([value, s]) => ({ value, label: s.label }))} value={set} onChange={pick} />
      <Row gap={10}><Slider label="b₁: x" value={b1[0]} min={-3} max={3} onChange={(v) => setB1([v, b1[1]])} color={C.blue} /><Slider label="y" value={b1[1]} min={-3} max={3} onChange={(v) => setB1([b1[0], v])} color={C.blue} /></Row>
      <Row gap={10}><Slider label="b₂: x" value={b2[0]} min={-3} max={3} onChange={(v) => setB2([v, b2[1]])} color={C.red} /><Slider label="y" value={b2[1]} min={-3} max={3} onChange={(v) => setB2([b2[0], v])} color={C.red} /></Row>
      <Plane view={VB} label="a basis and the images of its vectors" step={1}>
        {(X, Y) => <>
          {Pi && bgrid(X, Y)}
          {arrow([0, 0], b1, C.blue, X, Y, 3.5)}{arrow([0, 0], b2, C.red, X, Y, 3.5)}
          {arrow([0, 0], ap(An, b1), C.blue, X, Y, 2.5, true)}{arrow([0, 0], ap(An, b2), C.red, X, Y, 2.5, true)}
        </>}
      </Plane>
      <div style={BOX}><MathText html={TB && Pi ? `\\([T]_{\\mathcal B}=P^{-1}AP=${mt(Pi)}${mt(A)}${mt(P)}=${mt(TB)}\\)` : "\\(\\vec b_1,\\vec b_2\\) are parallel: not a basis, \\(P\\) has no inverse."} /></div>
      <Readout tone={diag ? "green" : "blue"}>
        <MathText block html={String.raw`Solid arrows: \(\vec b_1,\vec b_2\) (orange grid = \(\mathcal B\)-coordinates). Dashed: their images \(T(\vec b_1),T(\vec b_2)\).`} />
        <MathText block html={!TB ? "Choose two independent vectors." : diag ? `Diagonal: \\(T(\\vec b_1)=${tex(TB[0][0])}\\vec b_1\\) and \\(T(\\vec b_2)=${tex(TB[1][1])}\\vec b_2\\) — in this basis \\(T\\) only stretches.` : "Not diagonal: some \\(T(\\vec b_j)\\) leaves the line of \\(\\vec b_j\\). Try to line each dashed arrow up with its solid one."} />
      </Readout>
    </WidgetCard>
  );
}

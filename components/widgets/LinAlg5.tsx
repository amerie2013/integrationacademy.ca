"use client";

// Linear Algebra I, chapter 5 (subspaces, dimension and the fundamental subspaces) explorers: the subspace test on
// sets in the plane, span and dimension of vectors in R³, coordinates in an orthogonal (or orthonormal) basis, and
// bases of the null, column and row spaces of a matrix read from its RREF. All row reduction is exact (fractions).

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, gcd } from "./kit";
import { Plane, r2, type View } from "./Systems";

/* ---------------------------------------------------------------- exact fractions and RREF */

type Q = { n: number; d: number };
const q = (n: number, d = 1): Q => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return { n: n / g, d: d / g }; };
const sub = (a: Q, b: Q) => q(a.n * b.d - b.n * a.d, a.d * b.d);
const mul = (a: Q, b: Q) => q(a.n * b.n, a.d * b.d);
const div = (a: Q, b: Q) => q(a.n * b.d, a.d * b.n);
const isZ = (a: Q) => a.n === 0;
const tex = (a: Q) => (a.d === 1 ? String(a.n) : `${a.n < 0 ? "-" : ""}\\tfrac{${Math.abs(a.n)}}{${a.d}}`);
type M = Q[][];

/** reduced row echelon form and pivot columns */
function rref(rows: number[][]) {
  const m: M = rows.map((r) => r.map((x) => q(x)));
  const piv: number[] = [];
  let r = 0;
  for (let c = 0; c < m[0].length && r < m.length; c++) {
    const p = m.findIndex((row, i) => i >= r && !isZ(row[c]));
    if (p < 0) continue;
    [m[p], m[r]] = [m[r], m[p]];
    const k = m[r][c];
    m[r] = m[r].map((x) => div(x, k));
    for (let i = 0; i < m.length; i++) if (i !== r && !isZ(m[i][c])) { const f = m[i][c]; m[i] = m[i].map((x, j) => sub(x, mul(f, m[r][j]))); }
    piv.push(c); r++;
  }
  return { m, piv };
}
/** LaTeX matrix with pivot entries highlighted */
function matTex(m: M, piv: number[] = []) {
  const body = m.map((row, i) => row.map((x, j) => (piv[i] === j ? `\\color{#b45309}{\\mathbf{${tex(x)}}}` : tex(x))).join(" & ")).join(" \\\\ ");
  return `\\begin{bmatrix}${body}\\end{bmatrix}`;
}
const col = (v: (Q | number)[]) => `\\begin{bmatrix}${v.map((x) => (typeof x === "number" ? String(x) : tex(x))).join("\\\\")}\\end{bmatrix}`;
const setTex = (vs: string[]) => (vs.length ? `\\left\\{${vs.join(",\\ ")}\\right\\}` : "\\varnothing");
/** basis of Null(A) from the RREF: one vector per free column */
function nullBasis(R: M, piv: number[], n: number): Q[][] {
  const free = [...Array(n).keys()].filter((j) => !piv.includes(j));
  return free.map((f) => {
    const v: Q[] = Array.from({ length: n }, () => q(0));
    v[f] = q(1);
    piv.forEach((c, i) => { v[c] = q(-R[i][f].n, R[i][f].d); });
    return v;
  });
}

/* ---------------------------------------------------------------- 5.1 the subspace test */

type SetKind = "line0" | "line1" | "axes" | "quad" | "parab";
const SETS: { value: SetKind; label: string }[] = [
  { value: "line0", label: "line y = 2x" }, { value: "line1", label: "line y = 2x + 1" }, { value: "axes", label: "both axes" },
  { value: "quad", label: "first quadrant" }, { value: "parab", label: "parabola y = x²" },
];
const V5: View = { xmin: -5, xmax: 5, ymin: -4, ymax: 6 };
/** a point of the set chosen by one parameter t (and a branch for the axes) */
function pointOf(kind: SetKind, t: number, branch: number): [number, number] {
  if (kind === "line0") return [t, 2 * t];
  if (kind === "line1") return [t, 2 * t + 1];
  if (kind === "axes") return branch === 0 ? [t, 0] : [0, t];
  if (kind === "quad") return [Math.abs(t), Math.abs(t * 0.7 + 0.5)];
  return [t, t * t];
}
function inSet(kind: SetKind, [x, y]: [number, number]) {
  const e = 1e-9;
  if (kind === "line0") return Math.abs(y - 2 * x) < e;
  if (kind === "line1") return Math.abs(y - 2 * x - 1) < e;
  if (kind === "axes") return Math.abs(x) < e || Math.abs(y) < e;
  if (kind === "quad") return x >= -e && y >= -e;
  return Math.abs(y - x * x) < e;
}
export function SubspaceTestLab({ init = { set: "line0" } }: { init?: { set: SetKind } }) {
  const [kind, setKind] = useState<SetKind>(init.set);
  const [s, setS] = useState(1), [t, setT] = useState(-0.5), [c, setC] = useState(-1);
  const u = pointOf(kind, s, 0), v = pointOf(kind, t, 1);
  const sum: [number, number] = [u[0] + v[0], u[1] + v[1]], cu: [number, number] = [c * u[0], c * u[1]];
  const zero = inSet(kind, [0, 0]), add = inSet(kind, sum), scal = inSet(kind, cu);
  const curve = (X: (x: number) => number, Y: (y: number) => number) => {
    const pts: string[] = [];
    if (kind === "line0" || kind === "line1") return <line x1={X(-5)} y1={Y(-10 + (kind === "line1" ? 1 : 0))} x2={X(5)} y2={Y(10 + (kind === "line1" ? 1 : 0))} stroke={C.violet} strokeWidth={3} />;
    if (kind === "axes") return <><line x1={X(-5)} y1={Y(0)} x2={X(5)} y2={Y(0)} stroke={C.violet} strokeWidth={4} /><line x1={X(0)} y1={Y(-4)} x2={X(0)} y2={Y(6)} stroke={C.violet} strokeWidth={4} /></>;
    if (kind === "quad") return <rect x={X(0)} y={Y(6)} width={X(5) - X(0)} height={Y(0) - Y(6)} fill={C.violet} opacity={0.15} />;
    for (let x = -2.6; x <= 2.6; x += 0.05) pts.push(`${X(x)},${Y(x * x)}`);
    return <polyline points={pts.join(" ")} fill="none" stroke={C.violet} strokeWidth={3} />;
  };
  const arrow = (p: [number, number], color: string, X: (x: number) => number, Y: (y: number) => number, dash = false) => (
    <g><line x1={X(0)} y1={Y(0)} x2={X(p[0])} y2={Y(p[1])} stroke={color} strokeWidth={3} strokeDasharray={dash ? "6 4" : undefined} /><circle cx={X(p[0])} cy={Y(p[1])} r={6} fill={color} stroke="#fff" strokeWidth={2} /></g>
  );
  const ok = zero && add && scal;
  const mark = (b: boolean) => (b ? "✓" : "✗");
  return (
    <WidgetCard title="The subspace test" subtitle="Pick a set in ℝ². Choose two of its vectors u, v and a scalar c: do 0, u + v and cu stay in the set?">
      <Segmented label="set S" options={SETS} value={kind} onChange={setKind} />
      <Row gap={10}><Slider label="u (blue)" value={s} min={-2} max={2} step={0.1} onChange={setS} color={C.blue} format={(x) => r2(x)} /><Slider label="v (red)" value={t} min={-2} max={2} step={0.1} onChange={setT} color={C.red} format={(x) => r2(x)} /><Slider label="scalar c" value={c} min={-2} max={2} step={0.5} onChange={setC} color={C.amber} format={(x) => r2(x)} /></Row>
      <Plane view={V5} label="the set S with u, v, u + v and cu" step={1}>
        {(X, Y) => <>{curve(X, Y)}{arrow(u, C.blue, X, Y)}{arrow(v, C.red, X, Y)}{arrow(sum, C.green, X, Y, true)}{arrow(cu, C.amber, X, Y, true)}</>}
      </Plane>
      <Readout tone={ok ? "green" : "red"}>
        <MathText block html={`\\(\\vec u=(${r2(u[0])},\\,${r2(u[1])})\\), \\(\\vec v=(${r2(v[0])},\\,${r2(v[1])})\\) are in \\(S\\). Green: \\(\\vec u+\\vec v=(${r2(sum[0])},\\,${r2(sum[1])})\\); amber: \\(c\\vec u=(${r2(cu[0])},\\,${r2(cu[1])})\\).`} />
        <MathText block html={`${mark(zero)} contains \\(\\vec 0\\) &nbsp; ${mark(add)} this \\(\\vec u+\\vec v\\) is in \\(S\\) &nbsp; ${mark(scal)} this \\(c\\vec u\\) is in \\(S\\)`} />
        <MathText block html={kind === "line0" ? "<strong>Subspace.</strong> Every sum and every multiple of points on a line through the origin stays on the line — try any sliders." : kind === "line1" ? "<strong>Not a subspace:</strong> the line misses the origin, so neither sums nor multiples stay on it." : kind === "axes" ? "<strong>Not a subspace:</strong> closed under scaling, but a point on each axis adds to a point on neither (move u and v off zero)." : kind === "quad" ? "<strong>Not a subspace:</strong> closed under addition, but a negative scalar leaves the quadrant (set c &lt; 0)." : "<strong>Not a subspace:</strong> the parabola misses most sums and multiples (try c = 2)."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.2 / 5.4 span and dimension in R³ */

const SPAN_SETS: Record<string, { label: string; vs: (k: number) => number[][] }> = {
  plane: { label: "(1,0,1), (0,1,1), (1,1,k)", vs: (k) => [[1, 0, 1], [0, 1, 1], [1, 1, k]] },
  line: { label: "(1,2,−1), (−2,−4,2), (k,2k,−k)", vs: (k) => [[1, 2, -1], [-2, -4, 2], [k, 2 * k, -k]] },
  mixed: { label: "(1,1,0), (2,k,0), (0,0,1)", vs: (k) => [[1, 1, 0], [2, k, 0], [0, 0, 1]] },
};
export function SpanDimensionLab({ init = { set: "plane" } }: { init?: { set: string } }) {
  const [set, setSet] = useState(init.set in SPAN_SETS ? init.set : "plane");
  const [k, setK] = useState(2);
  const vs = SPAN_SETS[set].vs(k);
  const A = [0, 1, 2].map((i) => vs.map((v) => v[i])); // vectors as columns
  const { m: R, piv } = rref(A);
  const dim = piv.length;
  const geo = ["the zero subspace {0}", "a line through the origin", "a plane through the origin", "all of ℝ³"][dim];
  const basis = piv.map((j) => col(vs[j]));
  return (
    <WidgetCard title="Span, basis and dimension" subtitle="Put the vectors in the columns of a matrix; the pivot columns form a basis of the span">
      <Segmented label="vectors" options={Object.entries(SPAN_SETS).map(([value, s]) => ({ value, label: s.label }))} value={set} onChange={setSet} />
      <Slider label="k" value={k} min={-3} max={4} step={1} onChange={setK} color={C.violet} />
      <div style={{ display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap", fontSize: 18, margin: "12px 0", overflowX: "auto", overflowY: "hidden", padding: "4px 0" }}>
        <MathText html={`\\([\\,\\vec v_1\\ \\vec v_2\\ \\vec v_3\\,]=${matTex(A.map((r) => r.map((x) => q(x))))}\\sim${matTex(R, piv)}\\)`} />
      </div>
      <Readout tone={dim === 3 ? "green" : dim === 2 ? "blue" : "amber"}>
        <MathText block html={piv.length > 1 ? `Pivots in columns ${piv.map((j) => j + 1).join(", ")}: the vectors \\(${piv.map((j) => `\\vec v_${j + 1}`).join(",")}\\) are linearly independent and span the same set as all three.` : `One pivot, in column ${piv[0] + 1}: \\(\\vec v_${piv[0] + 1}\\ne\\vec 0\\) alone spans the same set as all three.`} />
        <MathText block html={`Basis \\(${setTex(basis)}\\), so \\(\\dim\\operatorname{Span}\\{\\vec v_1,\\vec v_2,\\vec v_3\\}=${dim}\\): ${geo}.`} />
        <MathText block html={dim < 3 ? `The non-pivot vector${3 - dim > 1 ? "s are" : " is"} a combination of the pivot vectors — redundant. Change \\(k\\) to see the dimension jump.` : "Three independent vectors in ℝ³: they form a basis of ℝ³ itself."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.5 coordinates in an orthogonal basis */

const V8: View = { xmin: -6, xmax: 6, ymin: -5, ymax: 5 };
export function OrthoCoordsLab({ init = { a: 2, b: 1 } }: { init?: { a: number; b: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [len2, setLen2] = useState(1);
  const [x1, setX1] = useState(3), [x2, setX2] = useState(2);
  const [unit, setUnit] = useState<"orth" | "unit">("orth");
  const ok = a !== 0 || b !== 0;
  const n1 = Math.hypot(a, b);
  let v1: [number, number] = [a, b], v2: [number, number] = [-b * len2, a * len2];
  if (unit === "unit" && ok) { v1 = [a / n1, b / n1]; v2 = [-b / n1, a / n1]; }
  const x: [number, number] = [x1, x2];
  const dot = (p: [number, number], r: [number, number]) => p[0] * r[0] + p[1] * r[1];
  const c1 = ok ? dot(x, v1) / dot(v1, v1) : 0, c2 = ok ? dot(x, v2) / dot(v2, v2) : 0;
  const p1: [number, number] = [c1 * v1[0], c1 * v1[1]], p2: [number, number] = [c2 * v2[0], c2 * v2[1]];
  const arr = (p: [number, number], color: string, X: (x: number) => number, Y: (y: number) => number, w = 3, from: [number, number] = [0, 0], dash = false) => <g><line x1={X(from[0])} y1={Y(from[1])} x2={X(p[0])} y2={Y(p[1])} stroke={color} strokeWidth={w} strokeDasharray={dash ? "6 4" : undefined} /><circle cx={X(p[0])} cy={Y(p[1])} r={5} fill={color} /></g>;
  return (
    <WidgetCard title="Coordinates in an orthogonal basis" subtitle="With orthogonal basis vectors each coefficient is a dot product divided by a length squared — no system to solve">
      <Row gap={10}><Slider label="v₁ = (a, b): a" value={a} min={-3} max={3} onChange={setA} color={C.blue} /><Slider label="b" value={b} min={-3} max={3} onChange={setB} color={C.blue} /><Slider label="length of v₂" value={len2} min={0.5} max={2} step={0.5} onChange={setLen2} color={C.red} format={(v) => r2(v)} /></Row>
      <Row gap={10}><Slider label="x₁" value={x1} min={-5} max={5} onChange={setX1} color={C.green} /><Slider label="x₂" value={x2} min={-4} max={4} onChange={setX2} color={C.green} /></Row>
      <Segmented label="basis" options={[{ value: "orth", label: "orthogonal" }, { value: "unit", label: "orthonormal (scaled to length 1)" }]} value={unit} onChange={setUnit} />
      <Plane view={V8} label="x split into its components along v1 and v2" step={1}>
        {(X, Y) => ok && <>
          {arr(p1, C.blue, X, Y, 2, [0, 0], true)}{arr(p2, C.red, X, Y, 2, [0, 0], true)}
          <line x1={X(p1[0])} y1={Y(p1[1])} x2={X(x[0])} y2={Y(x[1])} stroke={C.muted} strokeDasharray="3 4" />
          <line x1={X(p2[0])} y1={Y(p2[1])} x2={X(x[0])} y2={Y(x[1])} stroke={C.muted} strokeDasharray="3 4" />
          {arr(v1, C.blue, X, Y, 4)}{arr(v2, C.red, X, Y, 4)}{arr(x, C.green, X, Y, 3)}
        </>}
      </Plane>
      <Readout tone="green">
        {!ok ? <MathText block html="Choose \\(\\vec v_1\\ne\\vec 0\\)." /> : <>
          <MathText block html={`\\(\\vec v_1=(${r2(v1[0])},\\,${r2(v1[1])})\\), \\(\\vec v_2=(${r2(v2[0])},\\,${r2(v2[1])})\\): \\(\\vec v_1\\cdot\\vec v_2=${r2(dot(v1, v2))}\\), so the basis is orthogonal${unit === "unit" ? " and both lengths are 1 (orthonormal)" : ""}.`} />
          <MathText block html={`\\(c_1=\\dfrac{\\vec x\\cdot\\vec v_1}{\\|\\vec v_1\\|^2}=\\dfrac{${r2(dot(x, v1))}}{${r2(dot(v1, v1))}}=${r2(c1)}\\), \\(\\quad c_2=\\dfrac{\\vec x\\cdot\\vec v_2}{\\|\\vec v_2\\|^2}=\\dfrac{${r2(dot(x, v2))}}{${r2(dot(v2, v2))}}=${r2(c2)}\\)`} />
          <MathText block html={`Check: \\(${r2(c1)}\\vec v_1+${r2(c2)}\\vec v_2=(${r2(p1[0] + p2[0])},\\,${r2(p1[1] + p2[1])})=\\vec x\\). The dashed arrows are the projections of \\(\\vec x\\) onto each basis vector.${unit === "unit" ? " For an orthonormal basis the denominators are 1: \\(c_i=\\vec x\\cdot\\vec v_i\\)." : ""}`} />
        </>}
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 5.6 / 5.7 the fundamental subspaces */

const FUND_SETS: Record<string, { label: string; A: (k: number) => number[][] }> = {
  a: { label: "3 × 4", A: (k) => [[1, 2, 0, 1], [2, 4, 1, 4], [1, 2, 1, k]] },
  b: { label: "3 × 5", A: (k) => [[1, -1, 2, 0, 1], [2, -2, 5, 1, 4], [-1, 1, -1, k, 1]] },
  c: { label: "4 × 3", A: (k) => [[1, 2, 1], [0, 1, 1], [1, 3, k], [2, 5, 3]] },
};
export function FundamentalSubspacesLab({ init = { set: "a" } }: { init?: { set: string } }) {
  const [set, setSet] = useState(init.set in FUND_SETS ? init.set : "a");
  const [k, setK] = useState(3);
  const A = FUND_SETS[set].A(k), m = A.length, n = A[0].length;
  const { m: R, piv } = rref(A);
  const rank = piv.length, N = nullBasis(R, piv, n);
  const colB = piv.map((j) => col(A.map((r) => r[j])));
  const rowB = R.slice(0, rank).map((r) => col(r));
  const nullB = N.map((v) => col(v));
  return (
    <WidgetCard title="The fundamental subspaces of a matrix" subtitle="One RREF gives bases of the null space, the column space and the row space">
      <Row gap={10}><Segmented label="A" options={Object.entries(FUND_SETS).map(([value, s]) => ({ value, label: s.label }))} value={set} onChange={setSet} /><Slider label="k" value={k} min={-2} max={5} step={1} onChange={setK} color={C.violet} /></Row>
      <div style={{ display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap", fontSize: 17, margin: "12px 0", overflowX: "auto", overflowY: "hidden", padding: "4px 0" }}>
        <MathText html={`\\(A=${matTex(A.map((r) => r.map((x) => q(x))))}\\sim${matTex(R, piv)}=R\\)`} />
      </div>
      <Readout tone="blue">
        <MathText block html={`Pivot columns: ${piv.map((j) => j + 1).join(", ") || "none"}; \\(\\operatorname{rank}A=${rank}\\).`} />
        <MathText block html={`<strong>Column space</strong> (pivot columns of \\(A\\), not of \\(R\\)): \\(${setTex(colB)}\\subseteq\\mathbb R^{${m}}\\), dimension ${rank}.`} />
        <MathText block html={`<strong>Row space</strong> (nonzero rows of \\(R\\)): \\(${setTex(rowB)}\\subseteq\\mathbb R^{${n}}\\), dimension ${rank}.`} />
        <MathText block html={`<strong>Null space</strong> (one vector per free variable of \\(A\\vec x=\\vec 0\\)): \\(${setTex(nullB)}\\subseteq\\mathbb R^{${n}}\\), dimension ${N.length}.`} />
        <MathText block html={`Rank–nullity: \\(\\operatorname{rank}A+\\dim\\operatorname{Null}A=${rank}+${N.length}=${n}=n\\) ✓`} />
      </Readout>
    </WidgetCard>
  );
}

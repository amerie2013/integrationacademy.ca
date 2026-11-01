"use client";

// Linear Algebra I, chapter 4 (span, linear independence and bases) explorers: the span of two vectors in the plane
// with the weights that reach a target, pivots of three vectors in R³ (span, independence, basis), dependence
// relations among vectors in the plane drawn head to tail, and coordinates of a point in a skewed basis grid.
// All row reduction is exact (fractions).

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard, gcd } from "./kit";
import { Plane, type View } from "./Systems";

/* ---------------------------------------------------------------- exact fractions and RREF */

type Q = { n: number; d: number };
const q = (n: number, d = 1): Q => { if (d < 0) { n = -n; d = -d; } const g = gcd(n, d) || 1; return { n: n / g, d: d / g }; };
const sub = (a: Q, b: Q) => q(a.n * b.d - b.n * a.d, a.d * b.d);
const mul = (a: Q, b: Q) => q(a.n * b.n, a.d * b.d);
const div = (a: Q, b: Q) => q(a.n * b.d, a.d * b.n);
const isZ = (a: Q) => a.n === 0;
const val = (a: Q) => a.n / a.d;
const tex = (a: Q) => (a.d === 1 ? String(a.n) : `${a.n < 0 ? "-" : ""}\\tfrac{${Math.abs(a.n)}}{${a.d}}`);

function rref(rows: number[][]) {
  const m: Q[][] = rows.map((r) => r.map((x) => q(x)));
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
const matTex = (m: Q[][], piv: number[] = []) => `\\begin{bmatrix}${m.map((row, i) => row.map((x, j) => (piv[i] === j ? `\\color{#b45309}{\\mathbf{${tex(x)}}}` : tex(x))).join(" & ")).join(" \\\\ ")}\\end{bmatrix}`;
const colTex = (v: (number | Q)[]) => `\\begin{bmatrix}${v.map((x) => (typeof x === "number" ? String(x) : tex(x))).join("\\\\")}\\end{bmatrix}`;
/** one null-space vector of a matrix with a free column (free variable = 1, cleared of fractions) */
function relation(rows: number[][]) {
  const { m, piv } = rref(rows);
  const n = rows[0].length, free = [...Array(n).keys()].find((j) => !piv.includes(j));
  if (free === undefined) return null;
  const c: Q[] = Array.from({ length: n }, () => q(0));
  c[free] = q(1);
  piv.forEach((pc, i) => { c[pc] = q(-m[i][free].n, m[i][free].d); });
  const L = c.reduce((l, x) => (l * x.d) / (gcd(l, x.d) || 1), 1);
  return c.map((x) => (x.n * L) / x.d);
}

type P2 = [number, number];
const arrow = (from: P2, to: P2, color: string, X: (v: number) => number, Y: (v: number) => number, w = 3, dash = false) =>
  <g><line x1={X(from[0])} y1={Y(from[1])} x2={X(to[0])} y2={Y(to[1])} stroke={color} strokeWidth={w} strokeDasharray={dash ? "6 4" : undefined} /><circle cx={X(to[0])} cy={Y(to[1])} r={5} fill={color} /></g>;
const fullLine = (d: P2, color: string, X: (v: number) => number, Y: (v: number) => number) =>
  <line x1={X(-20 * d[0])} y1={Y(-20 * d[1])} x2={X(20 * d[0])} y2={Y(20 * d[1])} stroke={color} strokeWidth={3} opacity={0.45} />;
const BOX = { display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap" as const, fontSize: 18, margin: "12px 0", overflowX: "auto" as const, overflowY: "hidden" as const, padding: "4px 0" };

/* ---------------------------------------------------------------- 4.1 span of two vectors in R² */

const V1: View = { xmin: -6, xmax: 6, ymin: -6, ymax: 7 };
export function Span2Lab({ init = { a: 1, b: 2, c: -1, d: 1, x: 1, y: 5 } }: { init?: { a: number; b: number; c: number; d: number; x: number; y: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d);
  const [x, setX] = useState(init.x), [y, setY] = useState(init.y);
  const v1: P2 = [a, b], v2: P2 = [c, d], t: P2 = [x, y];
  const det = a * d - b * c;
  const zero1 = a === 0 && b === 0, zero2 = c === 0 && d === 0;
  let body: string, tone: "green" | "blue" | "amber" = "green";
  let c1: Q | null = null, c2: Q | null = null;
  if (det !== 0) {
    c1 = q(x * d - y * c, det); c2 = q(a * y - b * x, det);
    body = `\\(\\vec v_1,\\vec v_2\\) are not parallel, so \\(\\operatorname{Span}\\{\\vec v_1,\\vec v_2\\}=\\mathbb R^2\\). Weights: \\(${colTex(t)}=${tex(c1)}${colTex(v1)}${val(c2) < 0 ? "" : "+"}${tex(c2)}${colTex(v2)}\\).`;
  } else if (zero1 && zero2) {
    tone = "amber"; body = `Both vectors are \\(\\vec 0\\): the span is just \\(\\{\\vec 0\\}\\). ${x === 0 && y === 0 ? "The target is \\(\\vec 0\\), so it is in the span." : "The target is not in it."}`;
  } else {
    const dir = zero1 ? v2 : v1, on = dir[0] * y - dir[1] * x === 0;
    tone = on ? "blue" : "amber";
    body = `The vectors are parallel, so the span is only the line through \\(\\vec 0\\) in the direction \\((${dir[0]},${dir[1]})\\). The target \\((${x},${y})\\) is ${on ? "on that line: it IS in the span (in many ways)." : "off that line: it is NOT in the span — the system \\([\\,\\vec v_1\\ \\vec v_2\\mid\\vec b\\,]\\) is inconsistent."}`;
  }
  const p: P2 | null = c1 ? [val(c1) * a, val(c1) * b] : null;
  return (
    <WidgetCard title="The span of two vectors" subtitle="Span{v₁, v₂} is all of ℝ² unless the vectors are parallel; then it is a line through 0">
      <Row gap={10}><Slider label="v₁: a" value={a} min={-3} max={3} onChange={setA} color={C.blue} /><Slider label="b" value={b} min={-3} max={3} onChange={setB} color={C.blue} /><Slider label="v₂: c" value={c} min={-3} max={3} onChange={setC} color={C.red} /><Slider label="d" value={d} min={-3} max={3} onChange={setD} color={C.red} /></Row>
      <Row gap={10}><Slider label="target b: x" value={x} min={-5} max={5} onChange={setX} color={C.green} /><Slider label="y" value={y} min={-5} max={6} onChange={setY} color={C.green} /></Row>
      <Plane view={V1} label="span of two vectors" step={1}>
        {(X, Y) => <>
          {det === 0 && !(zero1 && zero2) ? fullLine(zero1 ? v2 : v1, C.violet, X, Y) : null}
          {p && c2 ? <>{arrow([0, 0], p, C.blue, X, Y, 2, true)}{arrow(p, t, C.red, X, Y, 2, true)}</> : null}
          {arrow([0, 0], v1, C.blue, X, Y, 4)}{arrow([0, 0], v2, C.red, X, Y, 4)}
          <circle cx={X(x)} cy={Y(y)} r={7} fill="none" stroke={C.green} strokeWidth={3} />
        </>}
      </Plane>
      <Readout tone={tone}><MathText block html={body} /></Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.2 / 4.4 / 4.6 three vectors in R³ */

export function Span3Lab({ init = [[1, 0, 1], [2, 1, 0], [0, 1, -2]] }: { init?: number[][] }) {
  const [vs, setVs] = useState<number[][]>(init.map((v) => [...v]));
  const set = (i: number, j: number, x: number) => setVs((old) => old.map((v, p) => (p === i ? v.map((y, k) => (k === j ? x : y)) : v)));
  const A = [0, 1, 2].map((i) => vs.map((v) => v[i]));
  const { m: R, piv } = rref(A);
  const k = piv.length;
  const geo = ["only {0}", "a line through 0", "a plane through 0", "all of ℝ³"][k];
  const rel = k < 3 ? relation(A) : null;
  const relTex = rel ? rel.map((c, i) => (c === 0 ? "" : `${c < 0 ? "-" : "+"}${Math.abs(c) === 1 ? "" : Math.abs(c)}\\vec v_${i + 1}`)).join("").replace(/^\+/, "") : "";
  const colors = [C.blue, C.red, C.green];
  return (
    <WidgetCard title="Three vectors in ℝ³: pivots decide everything" subtitle="Put v₁, v₂, v₃ in the columns. Pivot in every row ⇔ spanning; in every column ⇔ independent; for 3 vectors in ℝ³ these are the same">
      {vs.map((v, i) => (
        <Row key={i} gap={10}>{v.map((x, j) => <Slider key={j} label={j === 0 ? `v${"₁₂₃"[i]}: x₁` : `x${"₁₂₃"[j]}`} value={x} min={-3} max={3} onChange={(z) => set(i, j, z)} color={colors[i]} />)}</Row>
      ))}
      <div style={BOX}><MathText html={`\\([\\,\\vec v_1\\ \\vec v_2\\ \\vec v_3\\,]=${matTex(A.map((r) => r.map((x) => q(x))))}\\sim${matTex(R, piv)}\\)`} /></div>
      <Readout tone={k === 3 ? "green" : k === 2 ? "blue" : "amber"}>
        <MathText block html={`${k} pivot${k === 1 ? "" : "s"}${k ? ` (columns ${piv.map((j) => j + 1).join(", ")})` : ""}: the span is ${geo}.`} />
        <MathText block html={k === 3 ? "A pivot in every row and every column: the vectors are independent, span \\(\\mathbb R^3\\), and form a basis." : `Not every column has a pivot: dependent, e.g. \\(${relTex}=\\vec 0\\). Not every row has a pivot: they do not span \\(\\mathbb R^3\\).`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.3 / 4.5 dependence relations in R² */

const V3: View = { xmin: -7, xmax: 7, ymin: -6, ymax: 7 };
export function DependLab({ init = [[2, 1], [-1, 3], [1, 4]] }: { init?: number[][] }) {
  const [vs, setVs] = useState<number[][]>(init.map((v) => [...v]));
  const [use3, setUse3] = useState("3");
  const set = (i: number, j: number, x: number) => setVs((old) => old.map((v, p) => (p === i ? v.map((y, k) => (k === j ? x : y)) : v)));
  const list = use3 === "3" ? vs : vs.slice(0, 2);
  const A = [0, 1].map((i) => list.map((v) => v[i]));
  const rel = relation(A);
  const colors = [C.blue, C.red, C.green];
  // head-to-tail drawing of c₁v₁ + c₂v₂ + c₃v₃ = 0
  const pts: P2[] = [[0, 0]];
  if (rel) list.forEach((v, i) => { const [px, py] = pts[pts.length - 1]; pts.push([px + rel[i] * v[0], py + rel[i] * v[1]]); });
  const scale = rel ? Math.max(1, ...pts.map(([px, py]) => Math.max(Math.abs(px) / 6.5, Math.abs(py) / 6))) : 1;
  const sp = pts.map(([px, py]) => [px / scale, py / scale] as P2);
  const relTex = rel ? rel.map((c, i) => (c === 0 ? "" : `${c < 0 ? "-" : "+"}${Math.abs(c) === 1 ? "" : Math.abs(c)}\\vec v_${i + 1}`)).join("").replace(/^\+/, "") : "";
  const removable = rel ? rel.map((c, i) => (c !== 0 ? `\\vec v_${i + 1}` : null)).filter(Boolean) : [];
  return (
    <WidgetCard title="Dependence relations" subtitle="A nontrivial combination equal to 0 closes up into a loop when drawn head to tail">
      <Segmented label="vectors" options={[{ value: "2", label: "v₁, v₂" }, { value: "3", label: "v₁, v₂, v₃" }]} value={use3} onChange={setUse3} />
      {list.map((v, i) => <Row key={i} gap={10}><Slider label={`v${"₁₂₃"[i]}: x`} value={v[0]} min={-3} max={3} onChange={(z) => set(i, 0, z)} color={colors[i]} /><Slider label="y" value={v[1]} min={-3} max={3} onChange={(z) => set(i, 1, z)} color={colors[i]} /></Row>)}
      <Plane view={V3} label="dependence relation" step={1}>
        {(X, Y) => <>
          {list.map((v, i) => arrow([0, 0], v as P2, colors[i], X, Y, 4))}
          {rel ? sp.slice(1).map((pt, i) => rel[i] === 0 ? null : <g key={i}>{arrow(sp[i], pt, colors[i], X, Y, 2, true)}</g>) : null}
        </>}
      </Plane>
      <Readout tone={rel ? "amber" : "green"}>
        <MathText block html={rel ? `Dependent: \\(${relTex}=\\vec 0\\). The dashed path${scale > 1 ? " (shrunk to fit)" : ""} walks these multiples head to tail and returns to \\(\\vec 0\\).` : "Only the trivial combination gives \\(\\vec 0\\): the vectors are linearly independent (not parallel, neither is \\(\\vec 0\\))."} />
        <MathText block html={rel ? `Removable without changing the span (nonzero coefficient): \\(${removable.join(",\\ ")}\\).${use3 === "3" ? " Three vectors in \\(\\mathbb R^2\\) are always dependent — more than \\(n=2\\)." : ""}` : "Switch on \\(\\vec v_3\\): three vectors in \\(\\mathbb R^2\\) can never be independent."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 4.7 coordinates in a basis */

const V4: View = { xmin: -2, xmax: 8, ymin: -2, ymax: 9 };
export function CoordsLab({ init = { b1: [2, 1], b2: [1, 3], x: [4, 7] } }: { init?: { b1: number[]; b2: number[]; x: number[] } }) {
  const [b1, setB1] = useState<P2>([init.b1[0], init.b1[1]]), [b2, setB2] = useState<P2>([init.b2[0], init.b2[1]]), [x, setX] = useState<P2>([init.x[0], init.x[1]]);
  const det = b1[0] * b2[1] - b1[1] * b2[0];
  const c1 = det ? q(x[0] * b2[1] - x[1] * b2[0], det) : null, c2 = det ? q(b1[0] * x[1] - b1[1] * x[0], det) : null;
  const grid = (X: (v: number) => number, Y: (v: number) => number) => {
    if (!det) return null;
    const out = [];
    for (let k = -8; k <= 8; k++) {
      out.push(<line key={"a" + k} x1={X(k * b2[0] - 20 * b1[0])} y1={Y(k * b2[1] - 20 * b1[1])} x2={X(k * b2[0] + 20 * b1[0])} y2={Y(k * b2[1] + 20 * b1[1])} stroke="#bfdbfe" strokeWidth={1.2} />);
      out.push(<line key={"b" + k} x1={X(k * b1[0] - 20 * b2[0])} y1={Y(k * b1[1] - 20 * b2[1])} x2={X(k * b1[0] + 20 * b2[0])} y2={Y(k * b1[1] + 20 * b2[1])} stroke="#fecaca" strokeWidth={1.2} />);
    }
    return out;
  };
  const p: P2 | null = c1 ? [val(c1) * b1[0], val(c1) * b1[1]] : null;
  return (
    <WidgetCard title="Coordinates in a basis" subtitle="[x]_B = (c₁, c₂) where x = c₁b₁ + c₂b₂; the grid is built from the basis">
      <Row gap={10}><Slider label="b₁: x" value={b1[0]} min={-3} max={3} onChange={(z) => setB1([z, b1[1]])} color={C.blue} /><Slider label="y" value={b1[1]} min={-3} max={3} onChange={(z) => setB1([b1[0], z])} color={C.blue} /><Slider label="b₂: x" value={b2[0]} min={-3} max={3} onChange={(z) => setB2([z, b2[1]])} color={C.red} /><Slider label="y" value={b2[1]} min={-3} max={3} onChange={(z) => setB2([b2[0], z])} color={C.red} /></Row>
      <Row gap={10}><Slider label="point x: x₁" value={x[0]} min={-2} max={7} onChange={(z) => setX([z, x[1]])} color={C.green} /><Slider label="x₂" value={x[1]} min={-2} max={8} onChange={(z) => setX([x[0], z])} color={C.green} /></Row>
      <Plane view={V4} label="coordinates in a basis" step={1}>
        {(X, Y) => <>
          {grid(X, Y)}
          {p ? <>{arrow([0, 0], p, C.blue, X, Y, 2, true)}{arrow(p, x, C.red, X, Y, 2, true)}</> : null}
          {arrow([0, 0], b1, C.blue, X, Y, 4)}{arrow([0, 0], b2, C.red, X, Y, 4)}
          <circle cx={X(x[0])} cy={Y(x[1])} r={7} fill={C.green} />
        </>}
      </Plane>
      <Readout tone={det ? "green" : "amber"}>
        <MathText block html={det && c1 && c2 ? `\\(\\vec x=${colTex(x)}=${tex(c1)}\\,\\vec b_1${val(c2) < 0 ? "" : "+"}${tex(c2)}\\,\\vec b_2\\), so \\([\\vec x]_{\\mathcal B}=${colTex([c1, c2])}\\), while the standard coordinates are \\(${colTex(x)}\\).` : "\\(\\vec b_1\\) and \\(\\vec b_2\\) are parallel (or zero): they do not form a basis, and coordinates are not defined."} />
      </Readout>
    </WidgetCard>
  );
}

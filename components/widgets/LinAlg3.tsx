"use client";

// Linear Algebra I, chapter 3 (matrix algebra) explorers: linear combinations kA + lB entry by entry, the transpose
// with symmetric / triangular tests, the matrix–vector product as a combination of the columns (drawn in the plane),
// and matrix multiplication by the row-times-column rule (with sizes and AB versus BA).

import { useState } from "react";
import { C, MathText, Readout, Row, Segmented, Slider, WidgetCard } from "./kit";
import { Plane, r2, type View } from "./Systems";

type M = number[][];
const mt = (m: M, hi: (i: number, j: number) => string | null = () => null) =>
  `\\begin{bmatrix}${m.map((r, i) => r.map((x, j) => { const c = hi(i, j); return c ? `\\color{${c}}{\\mathbf{${x}}}` : String(x); }).join(" & ")).join(" \\\\ ")}\\end{bmatrix}`;
const tr = (m: M): M => m[0].map((_, j) => m.map((r) => r[j]));
const mul = (A: M, B: M): M => A.map((r) => B[0].map((_, j) => r.reduce((s, x, k) => s + x * B[k][j], 0)));
const BOX = { display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap" as const, fontSize: 18, margin: "12px 0", overflowX: "auto" as const, overflowY: "hidden" as const, padding: "4px 0" };

/* ---------------------------------------------------------------- 3.1 kA + lB */

const OA: M = [[2, -1, 0], [1, 3, -2]], OB: M = [[1, 0, 4], [-2, 1, 1]];
export function MatrixOpsLab() {
  const [k, setK] = useState(2), [l, setL] = useState(-1), [cell, setCell] = useState("0,1");
  const [i, j] = cell.split(",").map(Number);
  const R = OA.map((r, p) => r.map((x, q) => k * x + l * OB[p][q]));
  const hi = (p: number, q: number) => (p === i && q === j ? "#b45309" : null);
  return (
    <WidgetCard title="Linear combinations of matrices" subtitle="kA + lB is computed entry by entry; A and B must have the same size">
      <Row gap={10}><Slider label="k" value={k} min={-3} max={3} onChange={setK} color={C.blue} /><Slider label="l" value={l} min={-3} max={3} onChange={setL} color={C.red} /></Row>
      <Segmented label="entry (i, j)" options={[0, 1].flatMap((p) => [0, 1, 2].map((q) => ({ value: `${p},${q}`, label: `(${p + 1}, ${q + 1})` })))} value={cell} onChange={setCell} />
      <div style={BOX}><MathText html={`\\(${k}${mt(OA, hi)}${l < 0 ? "-" : "+"}${Math.abs(l)}${mt(OB, hi)}=${mt(R, hi)}\\)`} /></div>
      <Readout tone="blue">
        <MathText block html={`Entry \\((${i + 1},${j + 1})\\): \\(k\\,a_{${i + 1}${j + 1}}+l\\,b_{${i + 1}${j + 1}}=${k}(${OA[i][j]})${l < 0 ? "-" : "+"}${Math.abs(l)}(${OB[i][j]})=${R[i][j]}\\).`} />
        <MathText block html={k === 0 && l === 0 ? "With \\(k=l=0\\) every entry is 0: the \\(2\\times3\\) zero matrix." : k === 1 && l === -1 ? "\\(k=1,\\ l=-1\\) gives the difference \\(A-B\\)." : "Both matrices are \\(2\\times3\\), so the result is \\(2\\times3\\). Matrices of different sizes cannot be added."} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.2 / 3.3 transpose, symmetric, triangular */

const TSETS: Record<string, { label: string; m: M }> = {
  rect: { label: "3 × 2", m: [[1, 4], [-2, 0], [3, 5]] },
  sym: { label: "symmetric", m: [[2, -1, 3], [-1, 0, 4], [3, 4, 5]] },
  gen: { label: "3 × 3", m: [[1, 2, 0], [-3, 4, 1], [2, 0, 6]] },
  upper: { label: "upper triangular", m: [[3, 1, -2], [0, 2, 5], [0, 0, -1]] },
};
export function TransposeLab({ init = { set: "gen" } }: { init?: { set: string } }) {
  const [set, setSet] = useState(init.set in TSETS ? init.set : "gen");
  const A = TSETS[set].m, T = tr(A), m = A.length, n = A[0].length;
  const [cell, setCell] = useState("0,1");
  let [i, j] = cell.split(",").map(Number);
  if (i >= m || j >= n) { i = 0; j = Math.min(1, n - 1); }
  const sq = m === n;
  const sym = sq && A.every((r, p) => r.every((x, q) => x === A[q][p]));
  const upper = sq && A.every((r, p) => r.every((x, q) => q >= p || x === 0));
  const lower = sq && A.every((r, p) => r.every((x, q) => q <= p || x === 0));
  return (
    <WidgetCard title="The transpose" subtitle="Row i of A becomes column i of Aᵀ: (Aᵀ)ᵢⱼ = (A)ⱼᵢ">
      <Segmented label="A" options={Object.entries(TSETS).map(([value, s]) => ({ value, label: s.label }))} value={set} onChange={(s) => { setSet(s); setCell("0,1"); }} />
      <Segmented label="entry of A" options={A.flatMap((r, p) => r.map((_, q) => ({ value: `${p},${q}`, label: `(${p + 1}, ${q + 1})` })))} value={`${i},${j}`} onChange={setCell} />
      <div style={BOX}>
        <MathText html={`\\(A=${mt(A, (p, q) => (p === i && q === j ? "#1d4ed8" : null))}\\)`} />
        <MathText html={`\\(A^T=${mt(T, (p, q) => (p === j && q === i ? "#1d4ed8" : null))}\\)`} />
      </div>
      <Readout tone={sym ? "green" : "blue"}>
        <MathText block html={`\\(A\\) is \\(${m}\\times${n}\\), so \\(A^T\\) is \\(${n}\\times${m}\\). The \\((${i + 1},${j + 1})\\)-entry of \\(A\\), \\(${A[i][j]}\\), is the \\((${j + 1},${i + 1})\\)-entry of \\(A^T\\).`} />
        <MathText block html={!sq ? "Not square, so it cannot be symmetric or triangular." : `${sym ? "<strong>Symmetric</strong>: \\(A^T=A\\) (mirror image across the main diagonal)." : "Not symmetric: \\(A^T\\ne A\\)."} ${upper && lower ? "Diagonal (both upper and lower triangular)." : upper ? "<strong>Upper triangular</strong>: zeros below the diagonal — and \\(A^T\\) is lower triangular." : lower ? "<strong>Lower triangular</strong>." : "Not triangular."}`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.4 Ax as a combination of columns */

const V7: View = { xmin: -7, xmax: 7, ymin: -6, ymax: 6 };
export function MatVecLab({ init = { a: 2, b: -1, c: 1, d: 1 } }: { init?: { a: number; b: number; c: number; d: number } }) {
  const [a, setA] = useState(init.a), [b, setB] = useState(init.b), [c, setC] = useState(init.c), [d, setD] = useState(init.d);
  const [x1, setX1] = useState(2), [x2, setX2] = useState(1);
  const a1: [number, number] = [a, c], a2: [number, number] = [b, d];
  const p: [number, number] = [x1 * a1[0], x1 * a1[1]], y: [number, number] = [p[0] + x2 * a2[0], p[1] + x2 * a2[1]];
  const arr = (from: [number, number], to: [number, number], color: string, X: (v: number) => number, Y: (v: number) => number, w = 3, dash = false) => <g><line x1={X(from[0])} y1={Y(from[1])} x2={X(to[0])} y2={Y(to[1])} stroke={color} strokeWidth={w} strokeDasharray={dash ? "6 4" : undefined} /><circle cx={X(to[0])} cy={Y(to[1])} r={5} fill={color} /></g>;
  return (
    <WidgetCard title="Ax is a combination of the columns" subtitle="Ax = x₁a₁ + x₂a₂: walk x₁ copies of column 1, then x₂ copies of column 2">
      <Row gap={10}><Slider label="a₁₁" value={a} min={-3} max={3} onChange={setA} color={C.blue} /><Slider label="a₁₂" value={b} min={-3} max={3} onChange={setB} color={C.red} /><Slider label="a₂₁" value={c} min={-3} max={3} onChange={setC} color={C.blue} /><Slider label="a₂₂" value={d} min={-3} max={3} onChange={setD} color={C.red} /></Row>
      <Row gap={10}><Slider label="x₁" value={x1} min={-3} max={3} step={0.5} onChange={setX1} color={C.green} format={(v) => r2(v)} /><Slider label="x₂" value={x2} min={-3} max={3} step={0.5} onChange={setX2} color={C.green} format={(v) => r2(v)} /></Row>
      <Plane view={V7} label="the columns of A and Ax" step={1}>
        {(X, Y) => <>{arr([0, 0], p, C.blue, X, Y, 2, true)}{arr(p, y, C.red, X, Y, 2, true)}{arr([0, 0], a1, C.blue, X, Y, 4)}{arr([0, 0], a2, C.red, X, Y, 4)}{arr([0, 0], y, C.green, X, Y, 3)}</>}
      </Plane>
      <Readout tone="green">
        <MathText block html={`\\(A\\vec x=${mt([[a, b], [c, d]])}${mt([[x1], [x2]])}=${r2(x1)}${mt([[a], [c]])}${x2 < 0 ? "-" : "+"}${r2(Math.abs(x2))}${mt([[b], [d]])}=${mt([[+r2(y[0])], [+r2(y[1])]])}\\)`} />
        <MathText block html={`Row view: entry 1 is \\((${a},${b})\\cdot(${r2(x1)},${r2(x2)})=${r2(y[0])}\\), entry 2 is \\((${c},${d})\\cdot(${r2(x1)},${r2(x2)})=${r2(y[1])}\\). Set \\(\\vec x=\\vec e_1=(1,0)\\) and \\(A\\vec x\\) is column 1.`} />
      </Readout>
    </WidgetCard>
  );
}

/* ---------------------------------------------------------------- 3.6 / 3.7 matrix multiplication */

const MSETS: Record<string, { label: string; A: M; B: M }> = {
  rect: { label: "(2 × 3)(3 × 2)", A: [[1, 2, -1], [0, 3, 2]], B: [[2, 1], [-1, 0], [4, 3]] },
  sq: { label: "(2 × 2)(2 × 2)", A: [[1, 2], [3, 4]], B: [[0, 1], [1, 0]] },
  wide: { label: "(3 × 2)(2 × 3)", A: [[1, 0], [2, -1], [0, 3]], B: [[2, 1, 0], [1, -1, 4]] },
};
export function MatMulLab({ init = { set: "rect" } }: { init?: { set: string } }) {
  const [set, setSet] = useState(init.set in MSETS ? init.set : "rect");
  const { A, B } = MSETS[set], P = mul(A, B);
  const [cell, setCell] = useState("0,0");
  let [i, j] = cell.split(",").map(Number);
  if (i >= P.length || j >= P[0].length) { i = 0; j = 0; }
  const terms = A[i].map((x, k) => `(${x})(${B[k][j]})`).join("+");
  const baOk = B[0].length === A.length, BA = baOk ? mul(B, A) : null;
  return (
    <WidgetCard title="Matrix multiplication: row times column" subtitle="(AB)ᵢⱼ = (row i of A) · (column j of B); A must have as many columns as B has rows">
      <Segmented label="A, B" options={Object.entries(MSETS).map(([value, s]) => ({ value, label: s.label }))} value={set} onChange={(s) => { setSet(s); setCell("0,0"); }} />
      <Segmented label="entry of AB" options={P.flatMap((r, p) => r.map((_, q) => ({ value: `${p},${q}`, label: `(${p + 1}, ${q + 1})` })))} value={`${i},${j}`} onChange={setCell} />
      <div style={BOX}>
        <MathText html={`\\(${mt(A, (p) => (p === i ? "#1d4ed8" : null))}${mt(B, (_, q) => (q === j ? "#be123c" : null))}=${mt(P, (p, q) => (p === i && q === j ? "#15803d" : null))}\\)`} />
      </div>
      <Readout tone="blue">
        <MathText block html={`\\(A\\) is \\(${A.length}\\times${A[0].length}\\) and \\(B\\) is \\(${B.length}\\times${B[0].length}\\): the inner sizes match, so \\(AB\\) is \\(${A.length}\\times${B[0].length}\\).`} />
        <MathText block html={`\\((AB)_{${i + 1}${j + 1}}=${terms}=${P[i][j]}\\).`} />
        <MathText block html={BA ? `\\(BA=${mt(BA)}\\)${BA.length !== P.length || BA.some((r, p) => r.some((x, q) => x !== P[p][q])) ? " — different from \\(AB\\): matrix multiplication is not commutative." : " — equal to \\(AB\\) here, which is the exception, not the rule."}` : "\\(BA\\) is not defined (the inner sizes do not match)."} />
      </Readout>
    </WidgetCard>
  );
}

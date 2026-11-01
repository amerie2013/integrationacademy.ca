// Figures for LINALG1 chapter 8 (eigenvalues): eigen-lines with a vector and its image on each, the iterates
// x₀, x₁ = Ax₀, … of a dynamical system, and a vector that is NOT an eigenvector (its image leaves the line).
// Each returns worksheet LaTeX (an included PNG) or, with raw: true, the SVG for lessons and the bank.
import { VF } from "./wkit.mjs";
import { vdoc } from "../vecfig.mjs";
import { fitView } from "./fig7.mjs";

const out = (o, w, raw) => (raw ? vdoc({ width: 300, ...o }) : VF(o, w));
const ap = (A, [x, y]) => [A[0][0] * x + A[0][1] * y, A[1][0] * x + A[1][1] * y];
const lab = (v) => `(${v.map((x) => String(+x.toFixed(2)).replace("-", "−")).join(", ")})`;
const COL = ["blue", "red", "green", "violet"];

/** eigen-lines of a 2 × 2 matrix: for each [direction, λ, label?] the line, the vector v and Av = λv */
export function eigLines(A, list, { w = 4.6, raw = false, view = null } = {}) {
  const pts = list.flatMap(([d]) => [d, ap(A, d)]);
  const v = view ?? fitView(pts);
  const L = 3 * (v.xmax - v.xmin);
  const segs = list.map(([d], i) => { const n = Math.hypot(...d); return { pts: [[(-L * d[0]) / n, (-L * d[1]) / n], [(L * d[0]) / n, (L * d[1]) / n]], color: COL[i % 4], w: 1.2, dash: true }; });
  const arrows = list.flatMap(([d, lam, name], i) => {
    const nm = name ?? `v${"₁₂₃₄"[i]}`;
    // λ = 1: v and Av coincide, so one arrow with a combined label
    if (lam === 1) return [{ from: [0, 0], to: d, color: COL[i % 4], w: 3, label: `A${nm} = ${nm} = ${lab(d)}` }];
    return [
      { from: [0, 0], to: ap(A, d), color: COL[i % 4], w: 1.8, dash: true, label: `A${nm} = ${lam === 0 ? "0" : `${String(lam).replace("-", "−")}${nm}`}` },
      { from: [0, 0], to: d, color: COL[i % 4], w: 3, label: `${nm} = ${lab(d)}` },
    ];
  });
  return out({ view: v, step: v.xmax - v.xmin > 14 ? 2 : 1, segs, arrows }, w, raw);
}

/** a vector that is not an eigenvector: x and Ax point in different directions */
export function notEig(A, x, { w = 4.2, raw = false } = {}) {
  const y = ap(A, x), v = fitView([x, y]);
  return out({ view: v, step: v.xmax - v.xmin > 14 ? 2 : 1, arrows: [{ from: [0, 0], to: x, color: "blue", w: 3, label: `x = ${lab(x)}` }, { from: [0, 0], to: y, color: "red", w: 2.6, label: `Ax = ${lab(y)}` }] }, w, raw);
}

/** iterates x₀ … x_n of x_{k+1} = Ax_k, joined in order */
export function orbit(A, x0, n = 8, { w = 4.6, raw = false, lines = [] } = {}) {
  const pts = [x0];
  for (let k = 0; k < n; k++) pts.push(ap(A, pts[pts.length - 1]));
  const v = fitView(pts, 1);
  const L = 3 * (v.xmax - v.xmin);
  return out({ view: v, step: v.xmax - v.xmin > 14 ? 2 : 1,
    segs: [{ pts, color: "violet", w: 2 }, ...lines.map((d) => { const s = Math.hypot(...d); return { pts: [[(-L * d[0]) / s, (-L * d[1]) / s], [(L * d[0]) / s, (L * d[1]) / s]], color: "green", w: 1.4, dash: true }; })],
    points: pts.map((p, k) => ({ x: p[0], y: p[1], color: k ? "violet" : "blue", label: k === 0 ? "x₀" : k <= 3 ? `x${"₁₂₃"[k - 1]}` : undefined })) }, w, raw);
}

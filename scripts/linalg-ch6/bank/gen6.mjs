// Question templates for the LINALG1 chapter 6 bank (inverses, elementary matrices, the Invertible Matrix Theorem,
// determinants, Cramer's rule, volume). Every answer is computed from the question's own matrix with exact fractions
// (la.mjs); feedback shows the full reduction of [A | I] or of A (each operation followed by the whole matrix), or
// the cofactor expansion term by term.
import { mc, num, tf, ms, fill } from "./kit.mjs";
import { solve, det, inverseQ, v, am, stepsLine } from "./la.mjs";
import { matPic, rowPic, patternPic } from "../ws/fig3.mjs";
import { vecs2, vecs3 } from "../ws/fig5.mjs";

export const S = String.raw;
export const M = (A) => am(A, false);
export const vt = (x) => `(${x.join(",")})`;
const r4 = (x) => +x.toFixed(4);
const tol = (x) => (Number.isInteger(x) ? 0 : 0.001);
const pn = (x) => (x < 0 ? `(${x})` : `${x}`);
const I = (A) => A.map((r, i) => [...r, ...A.map((_, j) => (i === j ? 1 : 0))]);
const minor = (A, i, j) => A.filter((_, r) => r !== i).map((r) => r.filter((_, c) => c !== j));
export const Dt = (m) => S`\left|\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\end{array}\right|`;

/** raw SVG figures */
export const F = {
  mat: matPic, row: rowPic, pat: patternPic,
  v2: (list, view, o = {}) => vecs2(list, view, { ...o, raw: true }),
  v3: (list, o = {}) => vecs3(list, { ...o, raw: true }),
};

/** cofactor expansion of a 2 × 2 or 3 × 3 determinant along row 1, written out */
export function expansion(A) {
  if (A.length === 2) return S`$${Dt(A)}=${pn(A[0][0])}\cdot${pn(A[1][1])}-${pn(A[0][1])}\cdot${pn(A[1][0])}=${det(A)}$`;
  const terms = A[0].map((a, j) => `${j % 2 ? "-" : "+"}${pn(a)}${Dt(minor(A, 0, j))}`).join("").replace(/^\+/, "");
  const vals = A[0].map((a, j) => `${j % 2 ? "-" : "+"}${pn(a)}(${det(minor(A, 0, j))})`).join("").replace(/^\+/, "");
  return S`Along row 1: $${terms}=${vals}=${det(A)}$`;
}

/** a determinant by cofactor expansion */
export function detQ(A, fig, lead = null) {
  return num(lead ?? S`Compute $\det${M(A)}$.`, det(A), `${expansion(A)}.`, fig);
}
/** a determinant by row reduction (feedback: the reduction to echelon form) */
export function detRowQ(A, fig, lead = null) {
  return num(lead ?? S`Compute $\det${M(A)}$ by row reduction.`, det(A), `${stepsLine(A, { aug: false, jordan: false })} Swaps flip the sign, replacements change nothing; multiply the diagonal of the echelon form (with one sign change per swap): ${det(A)}.`, fig);
}
/** entry (i, j) of A⁻¹ via [A | I] */
export function invEntryQ(A, i, j, fig, lead = null) {
  const n = A.length, inv = inverseQ(A);
  if (!inv) throw new Error("invEntryQ: singular");
  const val = r4(v(inv[i][j]));
  return num(lead ?? S`Find the $(${i + 1},${j + 1})$ entry of $${M(A)}^{-1}$.`, val, `Row reduce [A | I]: ${stepsLine(I(A), { aug: n, cols: n })} The right block is A⁻¹; entry (${i + 1}, ${j + 1}) is ${val}.`, fig, tol(val));
}
/** is A invertible? (via det and reduction) */
export function invertibleQ(A, fig, lead = null) {
  const d = det(A), yes = d !== 0;
  return tf(lead ?? S`$${M(A)}$ is invertible.`, yes, `${A.length === 2 ? `ad − bc = ${d}` : `Row reduce: ${stepsLine(A, { aug: false, jordan: false })} det A = ${d}`}. ${yes ? "Nonzero: invertible." : "Zero: singular (fewer than n pivots)."}`, fig);
}
/** component i of the solution of Ax = b by Cramer's rule */
export function cramerQ(A, b, i, fig, lead = null) {
  const d = det(A), Ai = A.map((r, k) => r.map((x, j) => (j === i ? b[k] : x))), di = det(Ai), val = r4(di / d);
  return num(lead ?? S`Use Cramer's rule to find $x_{${i + 1}}$ in $${M(A)}\vec x=${vt(b)}$.`, val, S`$\det A=${d}$ and $\det A_{${i + 1}}(\vec b)=\det${M(Ai)}=${di}$, so $x_{${i + 1}}=\tfrac{${di}}{${d}}=${val}$.`, fig, tol(val));
}
/** component i of x = A⁻¹b */
export function invSolveQ(A, b, i, fig, lead = null) {
  const n = A.length, s = solve(A.map((r, k) => [...r, b[k]]));
  if (s.kind !== "unique") throw new Error("invSolveQ: not unique");
  const val = r4(s.x[i]);
  return num(lead ?? S`$A=${M(A)}$ is invertible. Find $x_{${i + 1}}$ in $\vec x=A^{-1}${vt(b)}$.`, val, `Row reduce [A | b] (the same as multiplying by A⁻¹): ${stepsLine(A.map((r, k) => [...r, b[k]]))} So x = ${vt(s.x.map(r4))}.`, fig, tol(val));
}
/** volume / area from |det| of edge vectors */
export function volumeQ(vs, fig, lead = null) {
  const A = vs[0].map((_, i) => vs.map((x) => x[i])), d = det(A);
  return num(lead ?? S`Find the ${vs.length === 2 ? "area of the parallelogram" : "volume of the parallelepiped"} on $${vs.map(vt).join(",\\ ")}$.`, Math.abs(d), `Edge vectors as columns: ${expansion(A)}; the ${vs.length === 2 ? "area" : "volume"} is |${d}| = ${Math.abs(d)}.`, fig);
}
export { mc, num, tf, ms, fill, am, det, inverseQ };

// Question templates for the LINALG1 chapter 3 bank (matrix algebra: entries, sums, transpose, special matrices,
// Ax, systems as Ax = b, products, powers). Every answer is computed from the question's own matrices, and the
// feedback writes out every product term (row · column) or the full row reduction (stepsLine).
import { mc, num, tf, ms, fill } from "./kit.mjs";
import { solve, am, stepsLine } from "./la.mjs";
import { matPic, rowPic, prodPic, transPic, patternPic } from "../ws/fig3.mjs";

export const S = String.raw;
export const M = (A) => am(A, false);
export const vt = (x) => `(${x.join(",")})`;
/** raw SVG figures */
export const F = { mat: matPic, row: rowPic, prod: prodPic, trans: transPic, pat: patternPic };

export const mul = (A, B) => A.map((r) => B[0].map((_, j) => r.reduce((s, x, k) => s + x * B[k][j], 0)));
export const T = (A) => A[0].map((_, j) => A.map((r) => r[j]));
export const lin = (k, A, l, B) => A.map((r, i) => r.map((x, j) => k * x + l * B[i][j]));
export const pow = (A, k) => { let P = A; for (let i = 1; i < k; i++) P = mul(P, A); return P; };
export const eq = (A, B) => A.length === B.length && A.every((r, i) => r.length === B[i].length && r.every((x, j) => x === B[i][j]));
const pn = (x) => (x < 0 ? `(${x})` : `${x}`);
const terms = (r, c) => r.map((a, k) => `${pn(a)}\\cdot${pn(c[k])}`).join("+");
const col = (B, j) => B.map((r) => r[j]);
const sz = (A) => `${A.length}\\times${A[0].length}`;

/** entry (i, j) of a matrix (1-based in the text) */
export function entryQ(A, i, j, fig) {
  return num(S`Find $a_{${i + 1}${j + 1}}$ for $A=${M(A)}$.`, A[i][j], S`$a_{${i + 1}${j + 1}}$ is in row ${i + 1}, column ${j + 1}: $a_{${i + 1}${j + 1}}=${A[i][j]}$. (Row first, then column.)`, fig);
}
/** entry (i, j) of kA + lB */
export function combEntryQ(k, A, l, B, i, j, fig) {
  const C = lin(k, A, l, B), name = `${k === 1 ? "" : k}A${l < 0 ? "-" : "+"}${Math.abs(l) === 1 ? "" : Math.abs(l)}B`;
  return num(S`For $A=${M(A)}$ and $B=${M(B)}$, find the $(${i + 1},${j + 1})$ entry of $${name}$.`, C[i][j], S`Entry by entry: $${k}\cdot${pn(A[i][j])}+${pn(l)}\cdot${pn(B[i][j])}=${C[i][j]}$. The whole matrix is $${name}=${M(C)}$.`, fig);
}
/** entry (i, j) of AB by the row-column rule */
export function prodEntryQ(A, B, i, j, fig, lead = null) {
  const P = mul(A, B), r = A[i], c = col(B, j);
  return num(lead ?? S`For $A=${M(A)}$ and $B=${M(B)}$, find $(AB)_{${i + 1}${j + 1}}$.`, P[i][j], S`Row ${i + 1} of $A$ times column ${j + 1} of $B$: $${terms(r, c)}=${P[i][j]}$. The whole product is $AB=${M(P)}$.`, fig);
}
/** entry i of Ax, with the column view in the feedback */
export function matVecQ(A, x, i, fig, lead = null) {
  const y = A.map((r) => r.reduce((s, a, k) => s + a * x[k], 0));
  const combo = x.map((xk, k) => `${pn(xk)}${vt(col(A, k))}`).join("+");
  return num(lead ?? S`For $A=${M(A)}$ and $\vec x=${vt(x)}$, find entry ${i + 1} of $A\vec x$.`, y[i], S`Row ${i + 1} dotted with $\vec x$: $${terms(A[i], x)}=${y[i]}$. Column view: $A\vec x=${combo}=${vt(y)}$.`, fig);
}
/** is AB defined? sizes only */
export function definedQ(m, n, p, q) {
  const yes = n === p;
  return tf(S`If $A$ is $${m}\times${n}$ and $B$ is $${p}\times${q}$, then $AB$ is defined.`, yes, yes ? S`Inner sizes match (${n} = ${p}), so $AB$ is defined and is $${m}\times${q}$.` : S`Columns of $A$ (${n}) ≠ rows of $B$ (${p}): $AB$ is undefined.`);
}
/** the trace */
export function traceQ(A, fig, lead = null) {
  const t = A.reduce((s, r, i) => s + r[i], 0);
  return num(lead ?? S`Find $\operatorname{tr}A$ for $A=${M(A)}$.`, t, S`Add the main diagonal: $${A.map((r, i) => pn(r[i])).join("+")}=${t}$.`, fig);
}
/** entry (i, j) of A^k, with the intermediate powers shown */
export function powEntryQ(A, k, i, j, fig) {
  const Ps = []; let P = A;
  for (let e = 2; e <= k; e++) { P = mul(P, A); Ps.push(`A^{${e}}=${M(P)}`); }
  return num(S`For $A=${M(A)}$, find the $(${i + 1},${j + 1})$ entry of $A^{${k}}$.`, P[i][j], S`Multiply by $A$ one factor at a time: $${Ps.join(",\\ ")}$. Entry $(${i + 1},${j + 1})$ is ${P[i][j]}.`, fig);
}
/** is A symmetric? */
export function symQ(A, fig) {
  const bad = [];
  A.forEach((r, i) => r.forEach((x, j) => { if (i < j && x !== A[j][i]) bad.push([i, j]); }));
  const sq = A.length === A[0].length, yes = sq && !bad.length;
  return tf(S`$${M(A)}$ is symmetric.`, yes, !sq ? "Only square matrices can be symmetric." : yes ? S`Every mirror pair agrees ($a_{ij}=a_{ji}$), so $A^T=A$.` : S`$a_{${bad[0][0] + 1}${bad[0][1] + 1}}=${A[bad[0][0]][bad[0][1]]}$ but $a_{${bad[0][1] + 1}${bad[0][0] + 1}}=${A[bad[0][1]][bad[0][0]]}$, so $A^T\ne A$.`, fig);
}
/** do A and B commute? */
export function commuteQ(A, B, fig) {
  const AB = mul(A, B), BA = mul(B, A), yes = eq(AB, BA);
  return tf(S`$A=${M(A)}$ and $B=${M(B)}$ commute.`, yes, S`$AB=${M(AB)}$ and $BA=${M(BA)}$${yes ? ": equal, so they commute." : ": different, so they do not commute."}`, fig);
}
/** component i of the unique solution of Ax = b */
export function sysQ(A, b, i, fig, lead = null) {
  const aug = A.map((r, k) => [...r, b[k]]), s = solve(aug);
  if (s.kind !== "unique") throw new Error(`sysQ: not unique ${JSON.stringify(A)}`);
  const val = +s.x[i].toFixed(4);
  return num(lead ?? S`Solve $A\vec x=\vec b$ for $A=${M(A)}$, $\vec b=${vt(b)}$. Find $x_{${i + 1}}$.`, val, `Row reduce [A | b]: ${stepsLine(aug)} So $\\vec x=${vt(s.x.map((t) => +t.toFixed(4)))}$.`, fig, Number.isInteger(val) ? 0 : 0.001);
}
/** is Ax = b consistent? */
export function consQ(A, b, fig) {
  const aug = A.map((r, k) => [...r, b[k]]), yes = solve(aug).kind !== "none";
  return tf(S`$A\vec x=\vec b$ is consistent for $A=${M(A)}$, $\vec b=${vt(b)}$.`, yes, `Row reduce [A | b]: ${stepsLine(aug)} ${yes ? "No row 0 = nonzero: consistent, so b is a combination of the columns." : "A row 0 = nonzero appears: inconsistent, so b is not a combination of the columns."}`, fig);
}
export { mc, num, tf, ms, fill, am, solve };

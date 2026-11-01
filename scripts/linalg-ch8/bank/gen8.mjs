// Question templates for the LINALG1 chapter 8 bank (eigenvalues and eigenvectors). Every answer is computed from
// the question's own matrix (exact fractions where it matters); feedback writes each product entry by entry and each
// reduction of A − λI as operations followed by the whole matrix.
import { mc, num, tf, ms, fill } from "./kit.mjs";
import { rank, rref, v, tq, am, stepsLine, mmul, det } from "./la.mjs";
import { prod, prodV, S, M, col, vt } from "../../linalg-ch7/bank/gen7.mjs";
import { matPic, rowPic } from "../ws/fig3.mjs";
import { vecs2 } from "../ws/fig5.mjs";
import { eigLines, notEig, orbit } from "../ws/fig8.mjs";
import { sqMap } from "../ws/fig7.mjs";

export { S, M, col, vt, prod, prodV };
const r4 = (x) => +x.toFixed(4);
const tol = (x) => (Number.isInteger(x) ? 0 : 0.001);
const shift = (A, l) => A.map((r, i) => r.map((x, j) => x - (i === j ? l : 0)));
const ax = (A, x) => A.map((r) => r.reduce((s, a, j) => s + a * x[j], 0));
const lamI = (l) => (l < 0 ? `A+${-l}I` : `A-${l}I`);

/** raw SVG figures */
export const F = {
  mat: matPic, row: rowPic,
  v2: (list, view, o = {}) => vecs2(list, view, { ...o, raw: true }),
  eig: (A, list, o = {}) => eigLines(A, list, { ...o, raw: true }),
  not: (A, x, o = {}) => notEig(A, x, { ...o, raw: true }),
  orb: (A, x0, n, o = {}) => orbit(A, x0, n, { ...o, raw: true }),
  sq: (A, o = {}) => sqMap(A, { ...o, raw: true }),
};

/** the eigenvalue of a given eigenvector */
export function eigOfQ(A, x, fig, lead = null) {
  const y = ax(A, x), k = x.findIndex((t) => t !== 0), lam = y[k] / x[k];
  if (y.some((t, i) => Math.abs(t - lam * x[i]) > 1e-9)) throw new Error("eigOfQ: not an eigenvector");
  return num(lead ?? S`$${vt(x)}$ is an eigenvector of $${M(A)}$. Find its eigenvalue.`, r4(lam), `${prodV(A, x)} = ${r4(lam)}·${vt(x)}.`, fig, tol(lam));
}
/** is x an eigenvector? */
export function isEigVecQ(A, x, fig, lead = null) {
  const y = ax(A, x), k = x.findIndex((t) => t !== 0), lam = y[k] / x[k], yes = y.every((t, i) => Math.abs(t - lam * x[i]) < 1e-9);
  return tf(lead ?? S`$${vt(x)}$ is an eigenvector of $${M(A)}$.`, yes, `${prodV(A, x)}. ${yes ? `This is ${r4(lam)}·${vt(x)}: an eigenvector.` : "Not a multiple of x: not an eigenvector."}`, fig);
}
/** is λ an eigenvalue? (reduction of A − λI) */
export function isEigValQ(A, l, fig, lead = null) {
  const B = shift(A, l), n = A.length, rk = rank(B, n), yes = rk < n;
  return tf(lead ?? S`$\lambda=${l}$ is an eigenvalue of $${M(A)}$.`, yes, S`Row reduce $${lamI(l)}$: ${stepsLine(B, { aug: false })} ${yes ? `Rank ${rk} < ${n}: a free variable, so ${l} is an eigenvalue.` : `Rank ${n}: only the zero solution, so ${l} is not an eigenvalue.`}`, fig);
}
/** dim E_λ */
export function dimEQ(A, l, fig, lead = null) {
  const B = shift(A, l), n = A.length, rk = rank(B, n);
  if (rk === n) throw new Error("dimEQ: not an eigenvalue");
  return num(lead ?? S`Find $\dim E_{${l}}$ for $${M(A)}$.`, n - rk, S`Row reduce $${lamI(l)}$: ${stepsLine(B, { aug: false })} Rank ${rk}, so $\dim E_{${l}}=${n}-${rk}=${n - rk}$.`, fig);
}
/** entry i of the eigenvector for λ (1-dimensional eigenspace), scaled so entry s equals 1 */
export function eigVecQ(A, l, i, s, fig, lead = null) {
  const B = shift(A, l), n = A.length, { m, piv } = rref(B, n);
  const free = [...Array(n).keys()].filter((c) => !piv.includes(c));
  if (free.length !== 1) throw new Error("eigVecQ: eigenspace not 1-dimensional");
  const f = free[0], x = Array(n).fill(0); x[f] = 1;
  piv.forEach((c, r) => { x[c] = -v(m[r][f]); });
  if (Math.abs(x[s]) < 1e-12) throw new Error("eigVecQ: cannot scale");
  const y = x.map((t) => t / x[s]), val = r4(y[i]);
  return num(lead ?? S`For $A=${M(A)}$, the eigenspace $E_{${l}}$ is spanned by a vector with entry ${s + 1} equal to 1. Find entry ${i + 1}.`, val, S`Row reduce $${lamI(l)}$: ${stepsLine(B, { aug: false })} Solve with the free variable: $\vec v=${vt(y.map(r4))}$. Check: ${prodV(A, y.map(r4))}.`, fig, tol(val));
}
/** the largest (or smallest) eigenvalue of a 2 × 2 matrix */
export function eig2Q(A, which = "max", fig, lead = null) {
  const tr = A[0][0] + A[1][1], d = det(A), disc = tr * tr - 4 * d;
  if (disc < 0) throw new Error("eig2Q: complex");
  const s = Math.sqrt(disc), l = which === "max" ? (tr + s) / 2 : (tr - s) / 2, val = r4(l);
  return num(lead ?? S`Find the ${which === "max" ? "larger" : "smaller"} eigenvalue of $${M(A)}$.`, val, S`$\operatorname{tr}A=${tr}$, $\det A=${d}$: $\lambda^2-${tr < 0 ? `(${tr})` : tr}\lambda+${d < 0 ? `(${d})` : d}=0$, so $\lambda=\tfrac{${tr}\pm\sqrt{${disc}}}{2}$: ${r4((tr + s) / 2)} and ${r4((tr - s) / 2)}.`, fig, tol(val));
}
/** an eigenvalue of a 3 × 3 matrix, given the (integer) spectrum; checked by det(A − λI) = 0 */
export function eig3Q(A, eigs, pick, fig, lead = null) {
  for (const l of eigs) if (Math.abs(det(shift(A, l))) > 1e-9) throw new Error(`eig3Q: ${l} is not an eigenvalue`);
  const tr = A[0][0] + A[1][1] + A[2][2];
  if (Math.abs(eigs.reduce((s, x) => s + x, 0) - tr) > 1e-9) throw new Error("eig3Q: trace mismatch");
  const sorted = [...eigs].sort((a, b) => a - b), val = pick === "max" ? sorted[2] : pick === "min" ? sorted[0] : sorted[1];
  return num(lead ?? S`Find the ${pick === "max" ? "largest" : pick === "min" ? "smallest" : "middle"} eigenvalue of $${M(A)}$.`, val, S`$\det(A-\lambda I)=0$ has roots ${sorted.join(", ")} (each makes $A-\lambda I$ singular). Check: sum $${sorted.join("+").replace(/\+-/g, "-")}=${tr}=\operatorname{tr}A$, product $${sorted.reduce((p, x) => p * x, 1)}=\det A$.`, fig);
}
/** entry (i, j) of A^k, explained by PD^kP⁻¹ */
export function powQ(A, P, D, k, i, j, fig, lead = null) {
  let X = A; for (let t = 1; t < k; t++) X = mmul(X, A);
  const Dk = D.map((l) => l ** k), PDk = P.map((r) => r.map((x, c) => x * Dk[c]));
  return num(lead ?? S`$A=${M(A)}=PDP^{-1}$ with $P=${M(P)}$, $D=\operatorname{diag}(${D.join(",")})$. Find the $(${i + 1},${j + 1})$ entry of $A^{${k}}$.`, X[i][j],
    S`$A^{${k}}=PD^{${k}}P^{-1}$ with $D^{${k}}=\operatorname{diag}(${Dk.join(",")})$: $PD^{${k}}=${M(PDk)}$, and multiplying by $P^{-1}$ gives $A^{${k}}=${M(X)}$.`, fig);
}
/** component i of the steady state of a stochastic matrix (entries as decimals) */
export function steadyQ(Mx, i, fig, lead = null) {
  // multiply M − I by 10 or 100 so the reduction runs on whole numbers (same null space)
  const B = shift(Mx, 1), n = Mx.length, sc = B.flat().every((x) => Math.abs(x * 10 - Math.round(x * 10)) < 1e-9) ? 10 : 100;
  const R = B.map((r) => r.map((x) => Math.round(x * sc)));
  const { m, piv } = rref(R, n), f = [...Array(n).keys()].find((c) => !piv.includes(c)), x = Array(n).fill(0); x[f] = 1;
  piv.forEach((c, r) => { x[c] = -v(m[r][f]); });
  const s = x.reduce((a, b) => a + b, 0), q = x.map((t) => t / s), val = r4(q[i]);
  return num(lead ?? S`Find entry ${i + 1} of the steady state of the Markov matrix $${M(Mx)}$.`, val, S`Solve $(M-I)\vec q=\vec 0$; multiply $M-I$ by ${sc}: ${stepsLine(R, { aug: false })} A solution is $${vt(x.map(r4))}$; scale to sum 1: $\vec q=${vt(q.map(r4))}$.`, fig, tol(val));
}
/** real part / imaginary part / modulus of the complex eigenvalues of a 2 × 2 matrix */
export function cplxQ(A, what, fig, lead = null) {
  const tr = A[0][0] + A[1][1], d = det(A), disc = tr * tr - 4 * d;
  if (disc >= 0) throw new Error("cplxQ: real eigenvalues");
  const a = tr / 2, b = Math.sqrt(-disc) / 2, val = r4(what === "re" ? a : what === "im" ? b : Math.sqrt(d));
  const ask = what === "re" ? "the real part" : what === "im" ? "the positive imaginary part" : "the modulus $|\\lambda|$";
  return num(lead ?? S`Find ${ask} of the eigenvalues of $${M(A)}$.`, val, S`$\lambda^2-${tr < 0 ? `(${tr})` : tr}\lambda+${d}=0$, discriminant $${disc}<0$: $\lambda=${r4(a)}\pm${r4(b)}i$, $|\lambda|=\sqrt{\det A}=${r4(Math.sqrt(d))}$.`, fig, tol(val));
}
export { mc, num, tf, ms, fill, det, mmul, tq };

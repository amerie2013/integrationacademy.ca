// Question templates for the LINALG1 chapter 7 bank (linear transformations): images, inputs and the range,
// standard matrices, geometric maps, composition and inverses, kernel/range/one-to-one/onto, and B-matrices.
// Every answer is computed from the question's own data; feedback writes each product out entry by entry
// (row times column) and each row reduction as operations followed by the whole matrix.
import { mc, num, tf, ms, fill } from "./kit.mjs";
import { solve, rank, inverseQ, v, tq, Q, am, stepsLine, mmul, det } from "./la.mjs";
import { matPic, rowPic } from "../ws/fig3.mjs";
import { vecs2 } from "../ws/fig5.mjs";
import { sqMap, ptMap, shapeMap, kernelLine } from "../ws/fig7.mjs";

export const S = String.raw;
export const M = (A) => am(A, false);
export const col = (x) => am(x.map((t) => [t]), false);
export const vt = (x) => `(${x.join(",")})`;
const r4 = (x) => +x.toFixed(4);
const tol = (x) => (Number.isInteger(x) ? 0 : 0.001);
const pn = (x) => (x < 0 ? `(${x})` : `${x}`);

/** raw SVG figures */
export const F = {
  mat: matPic, row: rowPic,
  v2: (list, view, o = {}) => vecs2(list, view, { ...o, raw: true }),
  sq: (A, o = {}) => sqMap(A, { ...o, raw: true }),
  pt: (A, x, o = {}) => ptMap(A, x, { ...o, raw: true }),
  shape: (A, pts, o = {}) => shapeMap(A, pts, { ...o, raw: true }),
  ker: (d, o = {}) => kernelLine(d, { ...o, raw: true }),
};

/** A·B written out: the matrix of row-times-column sums, then the result */
export function prod(A, B) {
  // each entry as a(b) + c(d) + …, signs pulled out of the left factors
  const ex = A.map((r) => B[0].map((_, j) => r.map((a, k) => `${a < 0 ? "-" : k ? "+" : ""}${Math.abs(a)}(${B[k][j]})`).join("")));
  return S`$${M(A)}${M(B)}=${M(ex)}=${M(mmul(A, B))}$`;
}
export const prodV = (A, x) => prod(A, x.map((t) => [t]));
const ax = (A, x) => A.map((r) => r.reduce((s, a, j) => s + a * x[j], 0));
const minus = (x) => (x < 0 ? `−${-x}` : `${x}`);

/** entry i of T(x) = Ax */
export function imgQ(A, x, i, fig, lead = null) {
  return num(lead ?? S`$T(\vec x)=${M(A)}\vec x$. Find entry ${i + 1} of $T${vt(x)}$.`, ax(A, x)[i], `${prodV(A, x)}.`, fig);
}
/** entry i of the unique x with Ax = b */
export function inputQ(A, b, i, fig, lead = null) {
  const aug = A.map((r, k) => [...r, b[k]]), s = solve(aug);
  if (s.kind !== "unique") throw new Error("inputQ: not unique");
  const val = r4(s.x[i]);
  return num(lead ?? S`$T(\vec x)=${M(A)}\vec x$. Find $x_{${i + 1}}$ for the input with $T(\vec x)=${vt(b)}$.`, val, `Row reduce [A | b]: ${stepsLine(aug)} So x = ${vt(s.x.map(r4))}.`, fig, tol(val));
}
/** is b in the range of A? */
export function inRangeQ(A, b, fig, lead = null) {
  const aug = A.map((r, k) => [...r, b[k]]), s = solve(aug), yes = s.kind !== "none";
  return tf(lead ?? S`$${vt(b)}$ is in the range of $T(\vec x)=${M(A)}\vec x$.`, yes, `Row reduce [A | b]: ${stepsLine(aug)} ${yes ? "Consistent: b is in the range." : "A row [0 … 0 | c] with c ≠ 0: inconsistent, so b is not in the range."}`, fig);
}
/** entry i of T(c·u + d·v) from T(u), T(v) */
export function superQ(Tu, Tv, c, d, i, fig, lead = null) {
  const A = Tu.map((x, k) => [x, Tv[k]]), y = ax(A, [c, d]);
  return num(lead ?? S`$T$ is linear, $T(\vec u)=${vt(Tu)}$, $T(\vec v)=${vt(Tv)}$. Find entry ${i + 1} of $T(${c === 1 ? "" : c === -1 ? "-" : c}\vec u${d < 0 ? (d === -1 ? "-" : d) : `+${d === 1 ? "" : d}`}\vec v)$.`, y[i], S`Superposition: $[T(\vec u)\ T(\vec v)]${col([c, d])}=$ ${prodV(A, [c, d])}.`, fig);
}
/** entry (i, j) of the standard matrix from a linear formula (rows of coefficients) */
export function stdQ(A, i, j, fig, names = ["x_1", "x_2", "x_3", "x_4"]) {
  const out = A.map((r) => r.map((a, k) => (a === 0 ? "" : `${a < 0 ? "-" : "+"}${Math.abs(a) === 1 ? "" : Math.abs(a)}${names[k]}`)).join("").replace(/^\+/, "") || "0");
  return num(S`$T(${names.slice(0, A[0].length).join(",")})=(${out.join(",\\ ")})$. Find the $(${i + 1},${j + 1})$ entry of its standard matrix.`, A[i][j], S`Column $j$ is $T(\vec e_j)$: $A=${M(A)}$, entry $(${i + 1},${j + 1})$ is ${A[i][j]}.`, fig);
}
/** entry (i, j) of A = WU⁻¹ given T(uⱼ) = wⱼ */
export function wuQ(U, W, i, j, fig, lead = null) {
  const Ui = inverseQ(U); if (!Ui) throw new Error("wuQ: singular U");
  const A = W.map((r) => Ui[0].map((_, c) => r.reduce((s, w, k) => s + w * v(Ui[k][c]), 0)));
  const val = r4(A[i][j]), uiT = M(Ui.map((r) => r.map(tq)));
  return num(lead ?? S`$T$ is linear with ${U[0].map((_, c) => S`$T${vt(U.map((r) => r[c]))}=${vt(W.map((r) => r[c]))}$`).join(", ")}. Find the $(${i + 1},${j + 1})$ entry of its standard matrix.`, val,
    S`$AU=W$ with $U=${M(U)}$, $W=${M(W)}$. $U^{-1}=${uiT}$, so $A=WU^{-1}=${M(W)}${uiT}=${M(A.map((r) => r.map(r4)))}$; entry ${val}.`, fig, tol(val));
}
/** entry (i, j) of the product BA (first A, then B) */
export function compQ(B, A, i, j, fig, lead = null) {
  return num(lead ?? S`$T$ has matrix $${M(A)}$ and $S$ has matrix $${M(B)}$. Find the $(${i + 1},${j + 1})$ entry of the matrix of $S\circ T$.`, mmul(B, A)[i][j], `First T, so A is on the right: BA = ${prod(B, A)}.`, fig);
}
/** entry i of T⁻¹(y) */
export function invMapQ(A, y, i, fig, lead = null) {
  const Ai = inverseQ(A); if (!Ai) throw new Error("invMapQ: singular");
  const x = Ai.map((r) => r.reduce((s, a, k) => s + v(a) * y[k], 0)), val = r4(x[i]);
  return num(lead ?? S`$T(\vec x)=${M(A)}\vec x$. Find entry ${i + 1} of $T^{-1}${vt(y)}$.`, val, S`$A^{-1}=${M(Ai.map((r) => r.map(tq)))}$ and $T^{-1}(\vec y)=A^{-1}\vec y=${vt(x.map(r4))}$. Check: ${prodV(A, x.map(r4))}.`, fig, tol(val));
}
/** dim ker T */
export function kerDimQ(A, fig, lead = null) {
  const rk = rank(A, A[0].length), n = A[0].length;
  return num(lead ?? S`Find $\dim\ker T$ for $T(\vec x)=${M(A)}\vec x$.`, n - rk, `Row reduce A: ${stepsLine(A, { aug: false })} ${rk} pivot${rk === 1 ? "" : "s"}, so ${n} − ${rk} = ${n - rk} free variable${n - rk === 1 ? "" : "s"}.`, fig);
}
/** dim range T */
export function rangeDimQ(A, fig, lead = null) {
  const rk = rank(A, A[0].length);
  return num(lead ?? S`Find the dimension of the range of $T(\vec x)=${M(A)}\vec x$.`, rk, `Row reduce A: ${stepsLine(A, { aug: false })} ${rk} pivot column${rk === 1 ? "" : "s"}: dim range = rank = ${rk}.`, fig);
}
/** one-to-one? */
export function oneOneQ(A, fig, lead = null) {
  const rk = rank(A, A[0].length), yes = rk === A[0].length;
  return tf(lead ?? S`$T(\vec x)=${M(A)}\vec x$ is one-to-one.`, yes, `Row reduce A: ${stepsLine(A, { aug: false })} ${yes ? "A pivot in every column: ker T = {0}, one-to-one." : `Only ${rk} pivot${rk === 1 ? "" : "s"} for ${A[0].length} columns: a free variable, so not one-to-one.`}`, fig);
}
/** onto? */
export function ontoQ(A, fig, lead = null) {
  const rk = rank(A, A[0].length), yes = rk === A.length;
  return tf(lead ?? S`$T(\vec x)=${M(A)}\vec x$ maps onto $\mathbb R^{${A.length}}$.`, yes, `Row reduce A: ${stepsLine(A, { aug: false })} ${yes ? "A pivot in every row: onto." : `Only ${rk} pivot${rk === 1 ? "" : "s"} for ${A.length} rows: not onto.`}`, fig);
}
/** entry i of [x]_B */
export function coordQ(P, x, i, fig, lead = null) {
  const aug = P.map((r, k) => [...r, x[k]]), s = solve(aug), val = r4(s.x[i]);
  return num(lead ?? S`$\mathcal B=\{${P[0].map((_, c) => vt(P.map((r) => r[c]))).join(",")}\}$. Find entry ${i + 1} of $[${vt(x)}]_{\mathcal B}$.`, val, `Solve P c = x, i.e. row reduce [P | x]: ${stepsLine(aug)} So [x]_B = ${vt(s.x.map(r4))}.`, fig, tol(val));
}
/** entry (i, j) of [T]_B = P⁻¹AP */
export function bMatQ(A, P, i, j, fig, lead = null) {
  const Pi = inverseQ(P); if (!Pi) throw new Error("bMatQ: singular P");
  const AP = mmul(A, P), B = Pi.map((r) => AP[0].map((_, c) => r.reduce((s, a, k) => s + v(a) * AP[k][c], 0))), val = r4(B[i][j]);
  return num(lead ?? S`$A=${M(A)}$, $\mathcal B=\{${P[0].map((_, c) => vt(P.map((r) => r[c]))).join(",")}\}$. Find the $(${i + 1},${j + 1})$ entry of $[T]_{\mathcal B}$.`, val,
    S`$P=${M(P)}$. First $AP=$ ${prod(A, P)}. Then $P^{-1}=${M(Pi.map((r) => r.map(tq)))}$ and $[T]_{\mathcal B}=P^{-1}(AP)=${M(B.map((r) => r.map(r4)))}$; entry ${val}.`, fig, tol(val));
}
/** entry i of the projection of x onto the line x₂ = m x₁ (m integer) */
export function projQ(m, x, i, fig, lead = null) {
  const d = 1 + m * m, y = [(x[0] + m * x[1]) / d, (m * x[0] + m * m * x[1]) / d], val = r4(y[i]);
  return num(lead ?? S`Project $${vt(x)}$ onto the line $x_2=${m === 0 ? "0" : `${m === 1 ? "" : m === -1 ? "-" : m}x_1`}$. Give entry ${i + 1}.`, val,
    S`$P=\tfrac1{${d}}${M([[1, m], [m, m * m]])}$, so $P${col(x)}=\tfrac1{${d}}${col([`${x[0]}+${pn(m * x[1])}`, `${pn(m * x[0])}+${pn(m * m * x[1])}`])}=${col(y.map(r4))}$.`, fig, tol(val));
}
/** entry i of the reflection of x in x₂ = m x₁ */
export function reflQ(m, x, i, fig, lead = null) {
  const d = 1 + m * m, R = [[1 - m * m, 2 * m], [2 * m, m * m - 1]], y = ax(R, x).map((t) => t / d), val = r4(y[i]);
  return num(lead ?? S`Reflect $${vt(x)}$ in the line $x_2=${m === 1 ? "" : m === -1 ? "-" : m}x_1$. Give entry ${i + 1}.`, val,
    S`$R=2P-I=\tfrac1{${d}}${M(R)}$, so $R${col(x)}=\tfrac1{${d}}${col(ax(R, x))}=${col(y.map(r4))}$.`, fig, tol(val));
}
/** entry i of R_θ x for θ a multiple of 30° or 45° */
export function rotQ(deg, x, i, fig, lead = null) {
  const t = (deg * Math.PI) / 180, c0 = Math.cos(t), s0 = Math.sin(t), c = r4(c0), s = r4(s0);
  const y = [c0 * x[0] - s0 * x[1], s0 * x[0] + c0 * x[1]], val = r4(y[i]);
  return num(lead ?? S`Rotate $${vt(x)}$ by $${deg}^\circ$ counterclockwise. Give entry ${i + 1} (to 3 decimals if needed).`, val,
    S`$R_{${deg}^\circ}\approx${M([[c, -s], [s, c]].map((r) => r.map((z) => r4(z))))}$; $R${col(x)}=${col([`${c}(${x[0]})-${pn(s)}(${x[1]})`, `${s}(${x[0]})+${c}(${x[1]})`])}\approx${col(y.map((z) => r4(z)))}$.`, fig, tol(val));
}
export { mc, num, tf, ms, fill, det, mmul, minus };

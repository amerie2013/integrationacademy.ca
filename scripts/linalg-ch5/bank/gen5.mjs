// Question templates for the LINALG1 chapter 5 bank (subspaces, bases, dimension, orthogonal bases, fundamental
// subspaces). Every answer is computed from the question's own vectors or matrix with exact fractions (la.mjs), and
// row-reduction feedback shows every operation followed by the whole matrix (stepsLine).
import { mc, num, tf, ms, fill } from "./kit.mjs";
import { solve, rank, v, am, stepsLine } from "./la.mjs";
import { planeFig, lineFig, vecs3, vecs2, set2 } from "../ws/fig5.mjs";

export const S = String.raw;
/** vectors → the matrix that has them as columns */
export const cols = (vs) => vs[0].map((_, i) => vs.map((x) => x[i]));
export const vt = (x) => `(${x.join(",")})`;
export const setT = (vs) => `\\{${vs.map(vt).join(",\\ ")}\\}`;
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
const r4 = (x) => +x.toFixed(4);
const tol = (x) => (Number.isInteger(x) ? 0 : 0.001);

/** raw SVG figures */
export const F = {
  plane: (u, vv, o = {}) => planeFig(u, vv, { ...o, raw: true }),
  line: (d, o = {}) => lineFig(d, { ...o, raw: true }),
  v3: (list, o = {}) => vecs3(list, { ...o, raw: true }),
  v2: (list, view, o = {}) => vecs2(list, view, { ...o, raw: true }),
  set: (kind, o = {}) => set2(kind, { ...o, raw: true }),
};

/** is b in Span(vs)? (true/false) */
export function inSpanQ(vs, b, fig) {
  const aug = cols([...vs, b]), yes = solve(aug).kind !== "none";
  return tf(S`$${vt(b)}\in\operatorname{Span}${setT(vs)}$.`, yes, `Put the spanning vectors in the columns and b last: ${stepsLine(aug)} ${yes ? "Consistent, so b is a combination of the vectors: it is in the span." : "A row 0 = nonzero appears: no coefficients work, so b is not in the span."}`, fig);
}
/** the i-th coefficient (coordinate) of b in terms of independent vectors vs */
export function coefQ(vs, b, i, fig, lead = null) {
  const aug = cols([...vs, b]), s = solve(aug);
  if (s.kind !== "unique") throw new Error(`coefQ: not unique ${JSON.stringify(vs)} ${b}`);
  const val = r4(s.x[i]);
  return num(lead ?? S`Find $c_{${i + 1}}$ in $${vt(b)}=${vs.map((x, k) => `c_{${k + 1}}${vt(x)}`).join("+")}$.`, val, `Solve [v₁ … | b]: ${stepsLine(aug)} So $(c_1,\dots)=${vt(s.x.map(r4))}$.`, fig, tol(val));
}
/** dimension of the span (= rank of the matrix of columns) */
export function dimSpanQ(vs, fig, lead = null) {
  const A = cols(vs), r = rank(A);
  return num(lead ?? S`Find $\dim\operatorname{Span}${setT(vs)}$.`, r, `Vectors as columns, reduced to echelon form: ${stepsLine(A, { aug: false, jordan: false })} ${r} pivot${r === 1 ? "" : "s"}, so the dimension is ${r}.`, fig);
}
/** are the vectors linearly independent? */
export function indepQ(vs, fig) {
  const A = cols(vs), r = rank(A), yes = r === vs.length;
  return tf(S`The vectors $${setT(vs).slice(2, -2)}$ are linearly independent.`, yes, `Vectors as columns: ${stepsLine(A, { aug: false, jordan: false })} ${yes ? "A pivot in every column: independent." : `Only ${r} pivots for ${vs.length} vectors: a column without a pivot means dependent.`}`, fig);
}
/** rank of a matrix */
export function rankQ(A, fig, lead = null) {
  const r = rank(A);
  return num(lead ?? S`Find $\operatorname{rank}A$ for $A=${am(A, false)}$.`, r, `${stepsLine(A, { aug: false, jordan: false })} ${r} pivots.`, fig);
}
/** nullity = dim Null A = n − rank A */
export function nullityQ(A, fig, lead = null) {
  const r = rank(A), n = A[0].length;
  return num(lead ?? S`Find $\dim\operatorname{Null}A$ for $A=${am(A, false)}$.`, n - r, `${stepsLine(A, { aug: false })} rank ${r}, so the nullity is n − rank = ${n} − ${r} = ${n - r} (one basis vector per free variable).`, fig);
}
/** component i of the null-space vector (one free variable, scaled so that variable is 1) */
export function nullVecQ(A, i, fig) {
  const s = solve(A.map((r) => [...r, 0]));
  if (s.kind !== "many" || s.free !== 1) throw new Error("nullVecQ needs nullity 1");
  const d = s.dirs[0], val = r4(d[i]);
  return num(S`$\operatorname{Null}A$ for $A=${am(A, false)}$ is spanned by one vector $\vec v$ whose $x_{${s.freeCols[0] + 1}}$-entry is 1. Find its $x_{${i + 1}}$-entry.`, val, `${stepsLine(A, { aug: false })} Set the free variable to 1: $\\vec v=${vt(d.map(r4))}$.`, fig, tol(val));
}
/** is x in Null A? */
export function nullMemberQ(A, x, fig) {
  const Ax = A.map((r) => dot(r, x)), yes = Ax.every((y) => y === 0);
  return tf(S`$${vt(x)}\in\operatorname{Null}A$ for $A=${am(A, false)}$.`, yes, S`Multiply: $A\vec x=${vt(Ax)}$${yes ? ", the zero vector." : ", not the zero vector."}`, fig);
}
/** is b in Col A? */
export function colMemberQ(A, b, fig) {
  const aug = A.map((r, i) => [...r, b[i]]), yes = solve(aug).kind !== "none";
  return tf(S`$${vt(b)}\in\operatorname{Col}A$ for $A=${am(A, false)}$.`, yes, `Col A contains b exactly when Ax = b is consistent: ${stepsLine(aug)} ${yes ? "Consistent." : "Inconsistent (a row 0 = nonzero)."}`, fig);
}
/** is y in Row A? (solve [Aᵀ | y]) */
export function rowMemberQ(A, y, fig) {
  const aug = cols([...A, y]), yes = solve(aug).kind !== "none";
  return tf(S`$${vt(y)}\in\operatorname{Row}A$ for $A=${am(A, false)}$.`, yes, `Rows of A as columns, y last: ${stepsLine(aug)} ${yes ? "Consistent: y is a combination of the rows." : "Inconsistent: y is not a combination of the rows."}`, fig);
}
/** coordinate i of x in an orthogonal basis, by the dot-product formula */
export function orthoCoordQ(basis, x, i, fig) {
  basis.forEach((a, p) => basis.forEach((b, k) => { if (p < k && dot(a, b) !== 0) throw new Error("orthoCoordQ: not orthogonal"); }));
  const c = basis.map((b) => dot(x, b) / dot(b, b)), val = r4(c[i]);
  if (!x.every((xi, k) => Math.abs(basis.reduce((s, b, p) => s + c[p] * b[k], 0) - xi) < 1e-9)) throw new Error("orthoCoordQ: x not in the span");
  return num(S`$${setT(basis)}$ is an orthogonal basis (in this order). Find coordinate $c_{${i + 1}}$ of $\vec x=${vt(x)}$.`, val, S`$c_{${i + 1}}=\dfrac{\vec x\cdot\vec v_{${i + 1}}}{\|\vec v_{${i + 1}}\|^2}=\dfrac{${dot(x, basis[i])}}{${dot(basis[i], basis[i])}}$. All coordinates: $${vt(c.map(r4))}$.`, fig, tol(val));
}
/** is the set orthogonal? */
export function orthoQ(vs, fig) {
  const pairs = [];
  vs.forEach((a, p) => vs.forEach((b, k) => { if (p < k) pairs.push([p, k, dot(a, b)]); }));
  const yes = pairs.every(([, , d]) => d === 0);
  return tf(S`The set $${setT(vs)}$ is orthogonal.`, yes, `Dot products of the pairs: ${pairs.map(([p, k, d]) => `v${p + 1}·v${k + 1} = ${d}`).join(", ")}. ${yes ? "All 0: orthogonal." : "Not all 0: not orthogonal."}`, fig);
}
export { mc, num, tf, ms, fill, am, rank, solve, dot, vt as vtup };

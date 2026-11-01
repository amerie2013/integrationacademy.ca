// Question templates for the LINALG1 chapter 4 bank (span, linear independence, bases of ℝⁿ, coordinates). Every
// answer is computed from the question's own vectors with exact fractions (la.mjs), and row-reduction feedback shows
// every operation followed by the whole matrix (stepsLine).
import { mc, num, tf, ms, fill } from "./kit.mjs";
import { solve, rank, rref, v, am, stepsLine } from "./la.mjs";
import { planeFig, lineFig, vecs3, vecs2 } from "../ws/fig5.mjs";
import { matPic, rowPic } from "../ws/fig3.mjs";

export const S = String.raw;
/** vectors → the matrix that has them as columns */
export const cols = (vs) => vs[0].map((_, i) => vs.map((x) => x[i]));
export const vt = (x) => `(${x.join(",")})`;
export const setT = (vs) => `\\{${vs.map(vt).join(",\\ ")}\\}`;
const r4 = (x) => +x.toFixed(4);
const tol = (x) => (Number.isInteger(x) ? 0 : 0.001);

/** raw SVG figures */
export const F = {
  plane: (u, vv, o = {}) => planeFig(u, vv, { ...o, raw: true }),
  line: (d, o = {}) => lineFig(d, { ...o, raw: true }),
  v3: (list, o = {}) => vecs3(list, { ...o, raw: true }),
  v2: (list, view, o = {}) => vecs2(list, view, { ...o, raw: true }),
  mat: matPic,
  row: rowPic,
};

/** is b in Span(vs)? */
export function inSpanQ(vs, b, fig) {
  const aug = cols([...vs, b]), yes = solve(aug).kind !== "none";
  return tf(S`$${vt(b)}\in\operatorname{Span}${setT(vs)}$.`, yes, `Spanning vectors in the columns, b last: ${stepsLine(aug)} ${yes ? "Consistent, so b is a combination of the vectors: it is in the span." : "A row 0 = nonzero appears: no weights work, so b is not in the span."}`, fig);
}
/** weight i of b in terms of independent vectors vs */
export function coefQ(vs, b, i, fig, lead = null) {
  const aug = cols([...vs, b]), s = solve(aug);
  if (s.kind !== "unique") throw new Error(`coefQ: not unique ${JSON.stringify(vs)} ${b}`);
  const val = r4(s.x[i]);
  return num(lead ?? S`Find $c_{${i + 1}}$ in $${vt(b)}=${vs.map((x, k) => `c_{${k + 1}}${vt(x)}`).join("+")}$.`, val, `Row reduce [v₁ … | b]: ${stepsLine(aug)} So the weights are $${vt(s.x.map(r4))}$.`, fig, tol(val));
}
/** do vs span ℝⁿ? */
export function spansQ(vs, fig) {
  const A = cols(vs), n = A.length, r = rank(A), yes = r === n;
  return tf(S`The vectors $${setT(vs).slice(2, -2)}$ span $\mathbb R^{${n}}$.`, yes, vs.length < n ? `Only ${vs.length} vectors for ℝ^${n}: at most ${vs.length} pivots, so some row has none — they cannot span.` : `Vectors as columns: ${stepsLine(A, { aug: false, jordan: false })} ${yes ? `A pivot in each of the ${n} rows: they span.` : `Only ${r} pivots for ${n} rows: a zero row, so they do not span.`}`, fig);
}
/** are the vectors linearly independent? */
export function indepQ(vs, fig) {
  const A = cols(vs), r = rank(A), yes = r === vs.length;
  return tf(S`The vectors $${setT(vs).slice(2, -2)}$ are linearly independent.`, yes, vs.length > A.length ? `${vs.length} vectors in ℝ^${A.length}: more vectors than entries, so they are dependent (counting theorem).` : `Vectors as columns: ${stepsLine(A, { aug: false, jordan: false })} ${yes ? "A pivot in every column: independent." : `Only ${r} pivots for ${vs.length} vectors: a free column, so dependent.`}`, fig);
}
/** is the set a basis of ℝⁿ? */
export function basisQ(vs, fig) {
  const A = cols(vs), n = A.length, r = rank(A), yes = vs.length === n && r === n;
  return tf(S`$${setT(vs)}$ is a basis of $\mathbb R^{${n}}$.`, yes, vs.length !== n ? `A basis of ℝ^${n} has exactly ${n} vectors; this set has ${vs.length}.` : `Vectors as columns: ${stepsLine(A, { aug: false, jordan: false })} ${yes ? `${n} pivots: independent and spanning, a basis.` : `Only ${r} pivots: not a basis.`}`, fig);
}
/** number of pivots of [v₁ … vₖ] = size of an independent subset with the same span */
export function pivotsQ(vs, fig, lead = null) {
  const A = cols(vs), r = rank(A);
  return num(lead ?? S`How many vectors are in an independent subset of $${setT(vs)}$ with the same span?`, r, `Vectors as columns: ${stepsLine(A, { aug: false, jordan: false })} ${r} pivot${r === 1 ? "" : "s"}: keep the ${r} pivot-column vector${r === 1 ? "" : "s"}.`, fig);
}
/** dependence relation: the weight of vector i when the free (last non-pivot) vector has weight −1 */
export function relQ(vs, i, fig) {
  const A = cols(vs), { m, piv } = rref(A.map((r) => [...r, 0]), vs.length);
  const free = [...Array(vs.length).keys()].filter((j) => !piv.includes(j));
  if (free.length !== 1) throw new Error("relQ needs exactly one free column");
  const f = free[0], w = Array(vs.length).fill(0);
  piv.forEach((c, k) => { w[c] = r4(v(m[k][f])); });
  const val = w[i];
  return num(S`The vectors $${vs.map((x, k) => `\\vec v_{${k + 1}}=${vt(x)}`).join(",\\ ")}$ are dependent. Write $\vec v_{${f + 1}}$ as a combination of the others and give the weight of $\vec v_{${i + 1}}$.`, val, `Row reduce [v₁ … vₖ]: ${stepsLine(A, { aug: false })} Column ${f + 1} of the RREF gives the weights: $\\vec v_{${f + 1}}=${w.map((c, k) => (k === f || piv.indexOf(k) < 0 ? null : `${c}\\vec v_{${k + 1}}`)).filter(Boolean).join("+").replace(/\+-/g, "-")}$.`, fig, tol(val));
}
/** coordinate i of x in the basis B */
export function coordQ(B, x, i, fig) {
  const aug = cols([...B, x]), s = solve(aug);
  if (s.kind !== "unique") throw new Error("coordQ: not a basis");
  const val = r4(s.x[i]);
  return num(S`$\mathcal B=${setT(B)}$. Find coordinate ${i + 1} of $[\vec x]_{\mathcal B}$ for $\vec x=${vt(x)}$.`, val, `Row reduce [P_B | x]: ${stepsLine(aug)} So $[\\vec x]_{\\mathcal B}=${vt(s.x.map(r4))}$.`, fig, tol(val));
}
/** entry i of x rebuilt from its coordinates */
export function rebuildQ(B, c, i, fig) {
  const x = B[0].map((_, k) => B.reduce((s, b, j) => s + c[j] * b[k], 0));
  return num(S`$\mathcal B=${setT(B)}$ and $[\vec x]_{\mathcal B}=${vt(c)}$. Find entry ${i + 1} of $\vec x$.`, x[i], S`$\vec x=${c.map((cj, j) => `${cj}${vt(B[j])}`).join("+").replace(/\+-/g, "-")}=${vt(x)}$.`, fig);
}
export { mc, num, tf, ms, fill, am, rank, solve };

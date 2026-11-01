// Question templates for the LINALG1 chapter 9 bank (orthogonality and least squares). Every answer is computed
// from the question's own data; feedback writes dot products and matrix products entry by entry, and solves normal
// equations by a full row reduction of [AᵀA | Aᵀb].
import { mc, num, tf, ms, fill } from "./kit.mjs";
import { rank, rref, v, mmul, stepsLine } from "./la.mjs";
import { prod, prodV, S, M, col, vt } from "../../linalg-ch7/bank/gen7.mjs";
import { matPic, rowPic } from "../ws/fig3.mjs";
import { vecs2, vecs3 } from "../ws/fig5.mjs";
import { projLine, lsqLine, gsPlane, projPlane } from "../ws/fig9.mjs";

export { S, M, col, vt, prod, prodV };
const r4 = (x) => +x.toFixed(4);
const tol = (x) => (Number.isInteger(x) ? 0 : 0.001);
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
const dotTxt = (a, b) => a.map((x, i) => `${i && x >= 0 ? "+" : ""}${x}(${b[i]})`).join("").replace(/\+-/g, "-");
const T = (A) => A[0].map((_, j) => A.map((r) => r[j]));

/** raw SVG figures */
export const F = {
  mat: matPic, row: rowPic,
  v2: (list, view, o = {}) => vecs2(list, view, { ...o, raw: true }),
  v3: (list, o = {}) => vecs3(list, { ...o, raw: true }),
  pl: (u, y, o = {}) => projLine(u, y, { ...o, raw: true }),
  lsq: (pts, b, m, o = {}) => lsqLine(pts, b, m, { ...o, raw: true }),
  gs: (a, b, o = {}) => gsPlane(a, b, { ...o, raw: true }),
  pp: (u, w, y, p, o = {}) => projPlane(u, w, y, p, { ...o, raw: true }),
};

/** u · y (dot product) */
export function dotQ(u, y, fig, lead = null) {
  return num(lead ?? S`Compute $${vt(u)}\cdot${vt(y)}$.`, dot(u, y), S`$\vec u^T\vec y=${dotTxt(u, y)}=${dot(u, y)}$.`, fig);
}
/** is the set orthogonal? */
export function orthoSetQ(vs, fig, lead = null) {
  const V = T(vs), G = mmul(T(V), V), yes = G.every((r, i) => r.every((x, j) => i === j || Math.abs(x) < 1e-9));
  return tf(lead ?? S`The vectors ${vs.map((x) => S`$${vt(x)}$`).join(", ")} are mutually orthogonal.`, yes, S`Put them as columns of $V$: $V^TV=${M(G)}$. ${yes ? "Off-diagonal entries are 0: orthogonal." : "A nonzero off-diagonal entry: not orthogonal."}`, fig);
}
/** entry i of the projection of y onto span{u} */
export function projLineQ(u, y, i, fig, lead = null) {
  const c = dot(u, y) / dot(u, u), p = u.map((x) => c * x), val = r4(p[i]);
  return num(lead ?? S`Project $${vt(y)}$ onto $\operatorname{span}\{${vt(u)}\}$. Give entry ${i + 1}.`, val, S`$c=\dfrac{\vec u^T\vec y}{\vec u^T\vec u}=\dfrac{${dotTxt(u, y)}}{${dot(u, u)}}=${r4(c)}$, $\hat y=c\vec u=${vt(p.map(r4))}$.`, fig, tol(val));
}
/** entry i of the projection of y onto span of an ORTHOGONAL set (columns of U) */
export function projOrthQ(U, y, i, fig, lead = null) {
  const us = T(U), cs = us.map((u) => dot(u, y) / dot(u, u)), p = U.map((r) => r.reduce((s, x, j) => s + x * cs[j], 0)), val = r4(p[i]);
  if (us.some((a, j) => us.some((b, k) => j < k && Math.abs(dot(a, b)) > 1e-9))) throw new Error("projOrthQ: not orthogonal");
  return num(lead ?? S`$W=\operatorname{span}\{${us.map(vt).join(",")}\}$ (orthogonal basis). Find entry ${i + 1} of the projection of $${vt(y)}$ onto $W$.`, val,
    S`$U^T\vec y=${col(us.map((u) => dot(u, y)))}$, $U^TU=\operatorname{diag}(${us.map((u) => dot(u, u)).join(",")})$, so $\vec c=${col(cs.map(r4))}$ and $\hat y=U\vec c=${col(p.map(r4))}$.`, fig, tol(val));
}
/** distance from y to the span of an orthogonal set */
export function distQ(U, y, fig, lead = null) {
  const us = T(U), cs = us.map((u) => dot(u, y) / dot(u, u)), p = U.map((r) => r.reduce((s, x, j) => s + x * cs[j], 0)), z = y.map((x, k) => x - p[k]), d = r4(Math.hypot(...z));
  return num(lead ?? S`Find the distance from $${vt(y)}$ to $W=\operatorname{span}\{${us.map(vt).join(",")}\}$ (orthogonal basis).`, d, S`$\hat y=${col(p.map(r4))}$, $\vec z=\vec y-\hat y=${col(z.map(r4))}$, distance $|\vec z|=${d}$.`, fig, tol(d));
}
/** entry i of x̂ from the normal equations (independent columns) */
export function normalQ(A, b, i, fig, lead = null) {
  const AtA = mmul(T(A), A), Atb = T(A).map((c) => dot(c, b)), aug = AtA.map((r, k) => [...r, Atb[k]]), { m } = rref(aug, A[0].length);
  const x = m.map((r) => v(r[A[0].length])), val = r4(x[i]);
  return num(lead ?? S`Solve the normal equations for $A=${M(A)}$, $\vec b=${vt(b)}$. Give $\hat x_{${i + 1}}$.`, val, S`$A^TA=$ ${prod(T(A), A)}, $A^T\vec b=${col(Atb)}$. Row reduce: ${stepsLine(aug)} So $\hat x=${vt(x.map(r4))}$.`, fig, tol(val));
}
/** entry i of the projection Ax̂ */
export function projNQ(A, b, i, fig, lead = null) {
  const AtA = mmul(T(A), A), Atb = T(A).map((c) => dot(c, b)), aug = AtA.map((r, k) => [...r, Atb[k]]), { m } = rref(aug, A[0].length);
  const x = m.map((r) => v(r[A[0].length])), p = A.map((r) => dot(r, x)), val = r4(p[i]);
  return num(lead ?? S`Project $${vt(b)}$ onto $\operatorname{Col}${M(A)}$. Give entry ${i + 1}.`, val, S`Normal equations: $A^TA=${M(AtA)}$, $A^T\vec b=${col(Atb)}$: ${stepsLine(aug)} $\hat x=${vt(x.map(r4))}$, $\hat y=A\hat x=${vt(p.map(r4))}$.`, fig, tol(val));
}
/** entry i of the Gram–Schmidt vector w_k (unscaled) */
export function gsQ(vs, k, i, fig, lead = null) {
  const ws = [];
  const lines = [];
  vs.forEach((vk, idx) => {
    let w = [...vk];
    ws.forEach((wj, j) => { const c = dot(vk, wj) / dot(wj, wj); w = w.map((x, t) => x - c * wj[t]); if (idx === k) lines.push(S`$\tfrac{\vec v_{${k + 1}}\cdot\vec w_{${j + 1}}}{\vec w_{${j + 1}}\cdot\vec w_{${j + 1}}}=\tfrac{${dot(vk, wj)}}{${r4(dot(wj, wj))}}$`); });
    ws.push(w);
  });
  const val = r4(ws[k][i]);
  return num(lead ?? S`Apply Gram–Schmidt (no rescaling) to ${vs.map((x) => S`$${vt(x)}$`).join(", ")}. Give entry ${i + 1} of $\vec w_{${k + 1}}$.`, val, S`${ws.slice(0, k + 1).map((w, j) => S`$\vec w_{${j + 1}}=${vt(w.map(r4))}$`).join("; ")}. Coefficients for $\vec w_{${k + 1}}$: ${lines.join(", ") || "none"}.`, fig, tol(val));
}
/** entry (i, j) of R in A = QR */
export function qrQ(A, i, j, fig, lead = null) {
  const n = A[0].length, cols = T(A), qs = [], R = Array.from({ length: n }, () => Array(n).fill(0));
  cols.forEach((a, k) => { let w = [...a]; qs.forEach((q, t) => { R[t][k] = dot(q, a); w = w.map((x, s) => x - R[t][k] * q[s]); }); R[k][k] = Math.hypot(...w); qs.push(w.map((x) => x / R[k][k])); });
  const val = r4(R[i][j]);
  return num(lead ?? S`Find $r_{${i + 1}${j + 1}}$ in the QR factorisation of $${M(A)}$.`, val, S`Gram–Schmidt + normalising: ${qs.map((q, t) => S`$\vec q_{${t + 1}}=${vt(q.map(r4))}$`).join(", ")}. $R=Q^TA=${M(R.map((r) => r.map(r4)))}$.`, fig, tol(val));
}
/** intercept (which = 0) or slope (which = 1) of the least-squares line */
export function lineQ(pts, which, fig, lead = null) {
  const n = pts.length, sx = pts.reduce((s, p) => s + p[0], 0), sy = pts.reduce((s, p) => s + p[1], 0), sxx = pts.reduce((s, p) => s + p[0] ** 2, 0), sxy = pts.reduce((s, p) => s + p[0] * p[1], 0);
  const aug = [[n, sx, sy], [sx, sxx, sxy]], { m } = rref(aug, 2), b = [v(m[0][2]), v(m[1][2])], val = r4(b[which]);
  return num(lead ?? S`Find the ${which ? "slope" : "intercept"} of the least-squares line through ${pts.map((p) => S`$${vt(p)}$`).join(", ")}.`, val, S`$X^TX=${M([[n, sx], [sx, sxx]])}$, $X^T\vec y=${col([sy, sxy])}$. ${stepsLine(aug)} $y=${r4(b[0])}+${r4(b[1])}x$.`, fig ?? F.lsq(pts, b[0], b[1]), tol(val));
}
/** is Q orthogonal? */
export function orthMatQ(Q, fig, lead = null) {
  const G = mmul(T(Q), Q), yes = G.every((r, i) => r.every((x, j) => Math.abs(x - (i === j ? 1 : 0)) < 1e-9));
  return tf(lead ?? S`$${M(Q.map((r) => r.map(r4)))}$ is an orthogonal matrix.`, yes, S`$Q^TQ=${M(G.map((r) => r.map(r4)))}$${yes ? " $=I$." : " $\\ne I$."}`, fig);
}
/** dim W⊥ for W = Col A */
export function perpDimQ(A, fig, lead = null) {
  const rk = rank(A, A[0].length), m = A.length;
  return num(lead ?? S`$W=\operatorname{Col}${M(A)}$. Find $\dim W^\perp$.`, m - rk, `rank A = ${rk} (row reduce: ${stepsLine(A, { aug: false })}); dim W⊥ = ${m} − ${rk} = ${m - rk}.`, fig);
}
export { mc, num, tf, ms, fill, dot };

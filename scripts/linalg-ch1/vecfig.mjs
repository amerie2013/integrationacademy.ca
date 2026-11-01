// Figures for Linear Algebra I chapter 1 (lessons, worksheets, bank, assignments, written): the MCV4U vector
// SVG engine (equal x/y scale, arrowheads, arcs, oblique three-space view) plus three-space helpers that take
// 3-D points directly.
import { vecSvg, vfig, vdoc, pol, p3, axes3, box3, merge, line3, patch3, tri3 } from "../mcv4u-ch8/vecfig.mjs";
export { vecSvg, vfig, vdoc, pol, p3, axes3, box3, merge, line3, patch3, tri3 };

/** a 3-D arrow { from, to } in the drawing's 2-D coordinates */
export const a3 = (from, to, o = {}) => ({ from: p3(...from), to: p3(...to), ...o });
/** a 3-D point marker */
export const pt3 = (p, label, o = {}) => { const [x, y] = p3(...p); return { x, y, label, ...o }; };
/** a 3-D polyline */
export const seg3 = (pts, o = {}) => ({ pts: pts.map((p) => p3(...p)), color: "gray", ...o });
/** skewed grid of the combinations s·u + t·v for whole-number s and t in [-n, n] (thin gray lines) */
export const lattice = (u, v, n = 4) => {
  const P = (s, t) => [s * u[0] + t * v[0], s * u[1] + t * v[1]];
  const segs = [];
  for (let k = -n; k <= n; k++) segs.push({ pts: [P(k, -n), P(k, n)], color: "#cbd5e1", w: 1 }, { pts: [P(-n, k), P(n, k)], color: "#cbd5e1", w: 1 });
  return segs;
};
/** standard view box for oblique three-space figures with axes of length `len` */
export const view3 = (len = 5) => ({ xmin: -0.55 * len - 0.9, xmax: len + 0.9, ymin: -0.42 * len - 0.9, ymax: len + 0.6 });
/** a three-space scene: axes (labelled x₁, x₂, x₃) + any parts, returned as vecSvg options; the view grows to fit
 *  every arrow, segment, polygon, point and label so nothing is clipped */
export function scene3(len, ...parts) {
  const ax = axes3(len);
  ax.texts = ax.texts.map((t) => ({ ...t, t: { x: "x₁", y: "x₂", z: "x₃" }[t.t] ?? t.t }));
  const o = merge({ grid: false, axes: false }, ax, ...parts);
  const v = { ...view3(len) };
  const grow = ([x, y], pad = 0.5) => { v.xmin = Math.min(v.xmin, x - pad); v.xmax = Math.max(v.xmax, x + pad); v.ymin = Math.min(v.ymin, y - pad); v.ymax = Math.max(v.ymax, y + pad); };
  for (const a of o.arrows ?? []) { grow(a.from); grow(a.to ?? [a.from[0] + a.d[0], a.from[1] + a.d[1]]); }
  for (const s of [...(o.segs ?? []), ...(o.polys ?? [])]) s.pts.forEach((p) => grow(p, 0.3));
  for (const p of o.points ?? []) grow([p.x, p.y], p.label ? 0.9 : 0.4);
  o.view = v;
  return o;
}

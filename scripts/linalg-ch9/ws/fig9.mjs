// Figures for LINALG1 chapter 9 (orthogonality and least squares): projection of y onto a plane in ℝ³ with the
// perpendicular error, projection onto a line in ℝ², a least-squares line through data with its residuals, and
// Gram–Schmidt in the plane. Each returns worksheet LaTeX (an included PNG) or, with raw: true, the SVG.
import { VF } from "./wkit.mjs";
import { vdoc, scene3, a3, pt3, seg3, patch3 } from "../vecfig.mjs";
import { fitView } from "./fig7.mjs";

const out = (o, w, raw) => (raw ? vdoc({ width: 300, ...o }) : VF(o, w));
const O = [0, 0, 0];
const lab = (v) => `(${v.map((x) => String(+x.toFixed(2)).replace("-", "−")).join(", ")})`;

/** the plane spanned by u, v (patch), y, its projection p onto the plane, and the error y − p (dashed) */
export function projPlane(u, v, y, p, { w = 4.8, raw = false, len = null, names = ["y", "ŷ"] } = {}) {
  const L = len ?? Math.max(3, ...[...u, ...v, ...y].map(Math.abs)) * 1.15;
  return out(scene3(L, {
    polys: [patch3(O, u, v, 1.2, "#dbeafe", "blue", 0.45)],
    segs: [seg3([y, p], { color: "violet", w: 2, dash: true })],
    arrows: [a3(O, u, { color: "blue", label: "u₁", off: 14 }), a3(O, v, { color: "red", label: "u₂", off: -14 }),
      a3(O, y, { color: "green", label: names[0], off: 14 }), a3(O, p, { color: "violet", label: names[1], off: -14 })],
    points: [pt3(O, "0", { color: "black", dx: -12 })] }), w, raw);
}

/** projection of y onto the line through u in ℝ², with the perpendicular error */
export function projLine(u, y, { w = 4.4, raw = false } = {}) {
  const t = (u[0] * y[0] + u[1] * y[1]) / (u[0] * u[0] + u[1] * u[1]), p = [t * u[0], t * u[1]];
  const view = fitView([u, y, p]), L = 3 * (view.xmax - view.xmin), n = Math.hypot(...u);
  return out({ view, step: view.xmax - view.xmin > 14 ? 2 : 1,
    segs: [{ pts: [[(-L * u[0]) / n, (-L * u[1]) / n], [(L * u[0]) / n, (L * u[1]) / n]], color: "green", w: 1.6, dash: true }, { pts: [y, p], color: "violet", w: 2, dash: true }],
    arrows: [{ from: [0, 0], to: y, color: "blue", w: 3, label: `y = ${lab(y)}` }, { from: [0, 0], to: p, color: "red", w: 3, label: `ŷ = ${lab(p)}` }] }, w, raw);
}

/** data points, the line y = b + m x, and the vertical residuals */
export function lsqLine(pts, b, m, { w = 4.6, raw = false } = {}) {
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  const xmin = Math.floor(Math.min(0, ...xs)) - 1, xmax = Math.ceil(Math.max(...xs)) + 1;
  const ymin = Math.floor(Math.min(0, ...ys, b + m * xmin, b + m * xmax)) - 1, ymax = Math.ceil(Math.max(...ys, b + m * xmin, b + m * xmax)) + 1;
  return out({ view: { xmin, xmax, ymin, ymax }, step: Math.max(xmax - xmin, ymax - ymin) > 14 ? 2 : 1,
    segs: [{ pts: [[xmin, b + m * xmin], [xmax, b + m * xmax]], color: "violet", w: 2.6 }, ...pts.map(([x, y]) => ({ pts: [[x, y], [x, b + m * x]], color: "red", w: 1.6, dash: true }))],
    points: pts.map(([x, y]) => ({ x, y, color: "blue" })) }, w, raw);
}

/** Gram–Schmidt in ℝ²: v₁, v₂, the projection of v₂ onto v₁, and w₂ = v₂ − proj */
export function gsPlane(v1, v2, { w = 4.4, raw = false } = {}) {
  const t = (v1[0] * v2[0] + v1[1] * v2[1]) / (v1[0] * v1[0] + v1[1] * v1[1]), p = [t * v1[0], t * v1[1]], w2 = [v2[0] - p[0], v2[1] - p[1]];
  const view = fitView([v1, v2, p, w2]);
  return out({ view, step: view.xmax - view.xmin > 14 ? 2 : 1, segs: [{ pts: [v2, p], color: "gray", w: 1.4, dash: true }],
    arrows: [{ from: [0, 0], to: v1, color: "blue", w: 3, label: "v₁ = w₁" }, { from: [0, 0], to: v2, color: "red", w: 2.4, label: "v₂" },
      { from: [0, 0], to: p, color: "gray", w: 1.8, dash: true, label: "proj" }, { from: [0, 0], to: w2, color: "violet", w: 3, label: "w₂ ⟂ w₁" }] }, w, raw);
}

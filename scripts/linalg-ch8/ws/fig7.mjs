// Figures for LINALG1 chapter 7 (linear transformations): the unit square and its image under a 2 × 2 matrix,
// a vector and its image, a shape and its image, and a line sent to a point. Each returns worksheet LaTeX
// (an included PNG) or, with raw: true, the SVG for lessons and the bank.
import { VF } from "./wkit.mjs";
import { vdoc } from "../vecfig.mjs";

const out = (o, w, raw) => (raw ? vdoc({ width: 300, ...o }) : VF(o, w));
const ap = (A, [x, y]) => [A[0][0] * x + A[0][1] * y, A[1][0] * x + A[1][1] * y];
const lab = (v) => `(${v.map((x) => String(+x.toFixed(2)).replace("-", "−")).join(", ")})`;

/** a square view with integer bounds that holds every point (at least −1..2), plus a margin */
export function fitView(pts, pad = 1) {
  const xs = [-1, 2, ...pts.map((p) => p[0])], ys = [-1, 2, ...pts.map((p) => p[1])];
  let xmin = Math.floor(Math.min(...xs)) - pad, xmax = Math.ceil(Math.max(...xs)) + pad, ymin = Math.floor(Math.min(...ys)) - pad, ymax = Math.ceil(Math.max(...ys)) + pad;
  const span = Math.max(xmax - xmin, ymax - ymin);
  xmax = xmin + span; ymax = ymin + span;
  return { xmin, xmax, ymin, ymax };
}
const stepFor = (v) => (v.xmax - v.xmin > 14 ? 2 : 1);

/** the unit square (blue) and its image under A (violet), with e₁, e₂ and Ae₁, Ae₂ = the columns of A */
export function sqMap(A, { w = 4.6, raw = false, names = ["Ae₁", "Ae₂"] } = {}) {
  const c1 = ap(A, [1, 0]), c2 = ap(A, [0, 1]), c3 = ap(A, [1, 1]);
  const view = fitView([c1, c2, c3]);
  return out({ view, step: stepFor(view),
    polys: [{ pts: [[0, 0], [1, 0], [1, 1], [0, 1]], fill: "#dbeafe", op: 0.7, stroke: "blue" }, { pts: [[0, 0], c1, c3, c2], fill: "#ede9fe", op: 0.55, stroke: "violet" }],
    arrows: [{ from: [0, 0], to: [1, 0], color: "gray", w: 1.6, dash: true }, { from: [0, 0], to: [0, 1], color: "gray", w: 1.6, dash: true },
      { from: [0, 0], to: c1, color: "blue", w: 2.6, label: `${names[0]} = ${lab(c1)}` }, { from: [0, 0], to: c2, color: "red", w: 2.6, label: `${names[1]} = ${lab(c2)}` }] }, w, raw);
}

/** a vector x (blue) and its image T(x) = Ax (red) */
export function ptMap(A, x, { w = 4.4, raw = false, names = ["x", "T(x)"], more = [] } = {}) {
  const y = ap(A, x);
  const view = fitView([x, y, ...more.map((m) => m[0])]);
  return out({ view, step: stepFor(view), segs: [{ pts: [x, y], color: "gray", w: 1.4, dash: true }],
    arrows: [{ from: [0, 0], to: x, color: "blue", w: 2.6, label: `${names[0]} = ${lab(x)}` }, { from: [0, 0], to: y, color: "red", w: 2.6, label: `${names[1]} = ${lab(y)}` },
      ...more.map(([to, label, color]) => ({ from: [0, 0], to, color: color ?? "green", w: 2.2, label }))] }, w, raw);
}

/** a polygon (blue) and its image under A (violet) */
export function shapeMap(A, pts, { w = 4.6, raw = false, label = "image" } = {}) {
  const img = pts.map((p) => ap(A, p));
  const view = fitView([...pts, ...img]);
  const c = img.reduce((s, p) => [s[0] + p[0] / img.length, s[1] + p[1] / img.length], [0, 0]);
  return out({ view, step: stepFor(view),
    polys: [{ pts, fill: "#dbeafe", op: 0.75, stroke: "blue" }, { pts: img, fill: "#ede9fe", op: 0.6, stroke: "violet" }],
    texts: [{ x: c[0], y: c[1], t: label, color: "violet" }] }, w, raw);
}

/** a line through the origin along d (violet) — the kernel — with sample vectors on it, all sent to 0 */
export function kernelLine(d, { w = 4.4, raw = false, label = "ker T", samples = [1, -1, 2] } = {}) {
  const L = 6, n = Math.hypot(...d), u = [(d[0] / n) * L, (d[1] / n) * L];
  const view = { xmin: -4, xmax: 4, ymin: -4, ymax: 4 };
  return out({ view, step: 1, segs: [{ pts: [[-u[0], -u[1]], u], color: "violet", w: 3 }],
    arrows: samples.map((t, i) => ({ from: [0, 0], to: [t * d[0], t * d[1]], color: ["blue", "red", "green"][i % 3], w: 2.2 })),
    texts: [{ x: Math.max(-3.2, Math.min(3.2, 2.6 * d[0] / n + 0.6)), y: Math.max(-3.5, Math.min(3.5, 2.6 * d[1] / n - 0.5)), t: label, color: "violet" }] }, w, raw);
}

/** a line ℓ (blue, through p along d) and its image under A (violet) */
export function lineMap(A, p, d, { w = 4.6, raw = false } = {}) {
  const q = ap(A, p), e = ap(A, d), view = fitView([p, q], 2);
  const seg = (a, b) => [[a[0] - 8 * b[0], a[1] - 8 * b[1]], [a[0] + 8 * b[0], a[1] + 8 * b[1]]];
  return out({ view, step: stepFor(view), segs: [{ pts: seg(p, d), color: "blue", w: 2.6 }, { pts: seg(q, e), color: "violet", w: 2.6 }],
    points: [{ x: p[0], y: p[1], color: "blue", label: `p ${lab(p)}` }, { x: q[0], y: q[1], color: "violet", label: `T(p) ${lab(q)}` }] }, w, raw);
}

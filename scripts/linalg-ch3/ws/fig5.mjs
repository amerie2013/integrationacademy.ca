// Figures for the LINALG1 chapter 5 worksheets: subspaces drawn as lines and planes through the origin in ℝ³,
// sets and vectors in ℝ², and arrow diagrams. Each returns LaTeX (an included PNG) ready to place.
import { VF } from "./wkit.mjs";
import { vdoc } from "../vecfig.mjs";
/** LaTeX figure for worksheets, or the raw SVG (raw: true) for the bank */
const out = (o, w, raw) => (raw ? vdoc({ width: 300, ...o }) : VF(o, w));
import { scene3, a3, pt3, line3, patch3 } from "../vecfig.mjs";

const O = [0, 0, 0];
const ORIGIN = pt3(O, "0", { color: "black", dx: -12 });
const COL = ["blue", "red", "green", "amber", "violet"];

/** a plane through the origin spanned by u, v (patch), with labelled arrows; more = extra [vector, label, colour] */
export function planeFig(u, v, { lu = "u", lv = "v", more = [], len = 3.2, size = 1.2, w = 5, fill = "#dbeafe", edge = "blue", line = null, raw = false } = {}) {
  return out(scene3(len, {
    polys: [patch3(O, u, v, size, fill, edge, 0.5)],
    segs: line ? [line3(O, line, -1, 1, "red")] : [],
    arrows: [a3(O, u, { color: "blue", label: lu, off: 14 }), a3(O, v, { color: "red", label: lv, off: -14 }), ...more.map(([p, l, c], i) => a3(O, p, { color: c ?? COL[(i + 2) % 5], label: l, off: i % 2 ? -14 : 14 }))],
    points: [ORIGIN] }), w, raw);
}
/** a line through the origin (or through p) with direction d */
export function lineFig(d, { p = O, label = null, more = [], len = 3.2, w = 4.6, raw = false } = {}) {
  return out(scene3(len, {
    segs: [line3(p, d, -1, 1, "violet")],
    arrows: [a3(p, p.map((x, i) => x + d[i]), { color: "blue", label: label ?? `(${d.join(", ")})`, off: 14 }), ...more.map(([q, l, c], i) => a3(O, q, { color: c ?? COL[(i + 1) % 5], label: l, off: i % 2 ? -14 : 14 }))],
    points: [ORIGIN] }), w, raw);
}
/** arrows from the origin in ℝ³: [[vector, label, colour?], ...] */
export function vecs3(list, { len = null, w = 4.6, plane = null, raw = false } = {}) {
  // axes just longer than the longest vector, so short vectors are not lost in a large frame
  const L = len ?? Math.max(1.6, 1.25 * Math.max(...list.flatMap(([p]) => p.map(Math.abs))));
  return out(scene3(L, {
    polys: plane ? [patch3(O, plane[0], plane[1], plane[2] ?? 1.2, "#ede9fe", "violet", 0.45)] : [],
    arrows: list.map(([p, l, c], i) => a3(O, p, { color: c ?? COL[i % 5], label: l, off: i % 2 ? -14 : 14 })),
    points: [ORIGIN] }), w, raw);
}
/** arrows in ℝ² from the origin (or from a given start): [[to, label, colour?, from?, dashed?], ...] */
export function vecs2(list, view, { segs = [], points = [], w = 4.4, raw = false } = {}) {
  return out({ view, step: 1, segs, points, arrows: list.map(([to, label, color, from, dash], i) => ({ from: from ?? [0, 0], to, color: color ?? COL[i % 5], w: dash ? 1.6 : 2.6, dash: !!dash, label })) }, w, raw);
}
/** a set in ℝ² for the subspace test: "line" y = mx (+ b), "axes", "quad", "parab", "circle" */
export function set2(kind, { m = 1, b = 0, view = { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, arrows = [], points = [], w = 4.2, raw = false } = {}) {
  const segs = [], polys = [];
  if (kind === "line") segs.push({ pts: [[view.xmin, m * view.xmin + b], [view.xmax, m * view.xmax + b]], color: "violet", w: 3 });
  if (kind === "axes") segs.push({ pts: [[view.xmin, 0], [view.xmax, 0]], color: "violet", w: 3.4 }, { pts: [[0, view.ymin], [0, view.ymax]], color: "violet", w: 3.4 });
  if (kind === "quad") polys.push({ pts: [[0, 0], [view.xmax, 0], [view.xmax, view.ymax], [0, view.ymax]], fill: "#ede9fe", stroke: "violet" });
  if (kind === "half") polys.push({ pts: [[0, view.ymin], [view.xmax, view.ymin], [view.xmax, view.ymax], [0, view.ymax]], fill: "#ede9fe", stroke: "violet" });
  if (kind === "cross") segs.push({ pts: [[view.xmin, view.xmin], [view.xmax, view.xmax]], color: "violet", w: 3 }, { pts: [[view.xmin, -view.xmin], [view.xmax, -view.xmax]], color: "violet", w: 3 });
  if (kind === "parab" || kind === "circle") {
    const pts = [];
    for (let t = 0; t <= 1.0001; t += 0.02) pts.push(kind === "parab" ? [view.xmin + t * (view.xmax - view.xmin), (view.xmin + t * (view.xmax - view.xmin)) ** 2 * (m || 1)] : [b * Math.cos(2 * Math.PI * t), b * Math.sin(2 * Math.PI * t)]);
    segs.push({ pts: pts.filter(([, y]) => y <= view.ymax + 1), color: "violet", w: 3 });
  }
  return out({ view, step: 1, segs, polys, points, arrows: arrows.map(([to, label, color, from, dash]) => ({ from: from ?? [0, 0], to, color, w: dash ? 1.8 : 2.6, dash: !!dash, label })) }, w, raw);
}
export { ORIGIN };

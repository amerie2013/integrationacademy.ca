// Chapter 5 worksheet helpers: degree trig, rounding, and triangle / 3-D figures built on figT's planeT.
import { planeT } from "./figT.mjs";

export const rad = (d) => (d * Math.PI) / 180, deg = (x) => (x * 180) / Math.PI;
export const sin = (d) => Math.sin(rad(d)), cos = (d) => Math.cos(rad(d)), tan = (d) => Math.tan(rad(d));
export const asin = (x) => deg(Math.asin(x)), acos = (x) => deg(Math.acos(x)), atan = (x) => deg(Math.atan(x));
/** fixed-decimal string */
export const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
/** law of cosines: side opposite angle A (deg) between sides b and c */
export const lawC = (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * cos(A));
/** law of cosines: angle opposite side a */
export const angC = (a, b, c) => acos((b * b + c * c - a * a) / (2 * b * c));

const niceStep = (span) => [0.5, 1, 2, 5, 10, 20, 25, 50, 100].find((s) => span / s <= 12) ?? 200;
/** a closed polygon with vertex labels and optional side/extra labels; extra segments may be added */
export function polyT(pts, labels = [], o = {}) {
  const xs = pts.map((p) => p[0]).concat((o.extra ?? []).flatMap((e) => e.pts.map((p) => p[0])));
  const ys = pts.map((p) => p[1]).concat((o.extra ?? []).flatMap((e) => e.pts.map((p) => p[1])));
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  const pad = Math.max(x1 - x0, y1 - y0) * 0.12 || 1;
  const view = { xmin: x0 - pad, xmax: x1 + pad, ymin: y0 - pad, ymax: y1 + pad };
  const s = niceStep(Math.max(view.xmax - view.xmin, view.ymax - view.ymin));
  return planeT({
    view, step: { x: s, y: s },
    segs: [{ pts: o.open ? pts : [...pts, pts[0]], color: o.color ?? "blue" }, ...(o.extra ?? [])],
    points: [...labels.map((l, i) => (l ? { x: pts[i][0], y: pts[i][1], label: l } : null)).filter(Boolean), ...(o.marks ?? []).map(([x, y, label]) => ({ x, y, label }))],
    curves: o.curves, lines: o.lines,
  }, o.width ?? 6.5, o.cap ?? "");
}
/** triangle from SAS placement: A at origin, AB = c along the x-axis, angle A, AC = b */
export const triSAS = (b, c, A, labels = ["A", "B", "C"], o = {}) => polyT([[0, 0], [c, 0], [b * cos(A), b * sin(A)]], labels, o);
/** oblique 3-D projection */
export const P3 = (x, y, z) => [x + 0.5 * y, z + 0.5 * y];
/** a box l × w × h with optional extra 3-D segments [{pts:[[x,y,z],...], color}] and labels [[x,y,z,label]] */
export function boxT(l, w, h, extra = [], labels = [], o = {}) {
  const v = [[0, 0, 0], [l, 0, 0], [l, w, 0], [0, w, 0], [0, 0, h], [l, 0, h], [l, w, h], [0, w, h]];
  const E = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
  const segs = [...E.map(([a, b]) => ({ pts: [P3(...v[a]), P3(...v[b])], color: "gray" })), ...extra.map((e) => ({ pts: e.pts.map((p) => P3(...p)), color: e.color }))];
  const all = segs.flatMap((s) => s.pts);
  const [x0, x1, y0, y1] = [Math.min(...all.map((p) => p[0])), Math.max(...all.map((p) => p[0])), Math.min(...all.map((p) => p[1])), Math.max(...all.map((p) => p[1]))];
  const pad = Math.max(x1 - x0, y1 - y0) * 0.1;
  const s = niceStep(Math.max(x1 - x0, y1 - y0) + 2 * pad);
  return planeT({ bare: true, view: { xmin: x0 - pad, xmax: x1 + pad, ymin: y0 - pad, ymax: y1 + pad }, step: { x: s, y: s }, segs, points: labels.map(([x, y, z, label]) => ({ x: P3(x, y, z)[0], y: P3(x, y, z)[1], label })) }, o.width ?? 6.5, o.cap ?? "");
}
/** 3-D wire figure from segments only (pyramids, towers) */
export function wireT(segs3, labels = [], o = {}) {
  const segs = segs3.map((e) => ({ pts: e.pts.map((p) => P3(...p)), color: e.color ?? "blue" }));
  const all = segs.flatMap((s) => s.pts);
  const [x0, x1, y0, y1] = [Math.min(...all.map((p) => p[0])), Math.max(...all.map((p) => p[0])), Math.min(...all.map((p) => p[1])), Math.max(...all.map((p) => p[1]))];
  const pad = Math.max(x1 - x0, y1 - y0) * 0.1;
  const s = niceStep(Math.max(x1 - x0, y1 - y0) + 2 * pad);
  return planeT({ bare: true, view: { xmin: x0 - pad, xmax: x1 + pad, ymin: y0 - pad, ymax: y1 + pad }, step: { x: s, y: s }, segs, points: labels.map(([x, y, z, label]) => ({ x: P3(x, y, z)[0], y: P3(x, y, z)[1], label })) }, o.width ?? 6.5, o.cap ?? "");
}
/** terminal arm through (x, y) on a grid */
export const armT = (x, y, label, o = {}) => {
  const m = Math.max(Math.abs(x), Math.abs(y)) + 1.5;
  return planeT({ view: { xmin: -m, xmax: m, ymin: -m, ymax: m }, step: { x: niceStep(2 * m), y: niceStep(2 * m) }, segs: [{ pts: [[0, 0], [x, y]], color: "violet" }, { pts: [[x, y], [x, 0]], color: "amber" }], points: [{ x, y, label }] }, o.width ?? 6, o.cap ?? "");
};

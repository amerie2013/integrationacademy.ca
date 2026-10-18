// Bank/assignment figures for MCR3U chapter 5: shared plane helpers plus triangles, terminal arms, unit circles
// and oblique 3-D sketches (SVG documents).
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";
export * from "../../mcr3u-ch1/bank/fig.mjs";

export const rad = (d) => (d * Math.PI) / 180, deg = (x) => (x * 180) / Math.PI;
export const sin = (d) => Math.sin(rad(d)), cos = (d) => Math.cos(rad(d)), tan = (d) => Math.tan(rad(d));
export const asin = (x) => deg(Math.asin(x)), acos = (x) => deg(Math.acos(x)), atan = (x) => deg(Math.atan(x));
/** round to k decimals (a number) */
export const rd = (v, k = 2) => Math.round(v * 10 ** k) / 10 ** k;
export const lawC = (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * cos(A));
export const angC = (a, b, c) => acos((b * b + c * c - a * a) / (2 * b * c));

const niceStep = (span) => [0.5, 1, 2, 5, 10, 20, 25, 50, 100].find((s) => span / s <= 12) ?? 200;
const fit = (pts, bare, extra = {}) => {
  const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  const pad = Math.max(x1 - x0, y1 - y0) * 0.12 || 1;
  const view = { xmin: x0 - pad, xmax: x1 + pad, ymin: y0 - pad, ymax: y1 + pad };
  const s = niceStep(Math.max(view.xmax - view.xmin, view.ymax - view.ymin));
  return { view, step: { x: s, y: s }, bare, ...extra };
};
/** polygon (closed unless o.open) with vertex labels, side/extra labels as marks [[x,y,label]], extra segments */
export function triD(pts, labels = [], o = {}) {
  const extra = o.extra ?? [];
  return planeDoc({
    ...fit([...pts, ...extra.flatMap((e) => e.pts), ...(o.marks ?? []).map(([x, y]) => [x, y])], o.bare ?? true),
    segs: [{ pts: o.open ? pts : [...pts, pts[0]], color: o.color ?? "blue" }, ...extra],
    points: [...labels.map((l, i) => (l ? { x: pts[i][0], y: pts[i][1], label: l } : null)).filter(Boolean), ...(o.marks ?? []).map(([x, y, label]) => ({ x, y, label, color: "gray" }))],
  });
}
/** SAS placement: A at origin, AB = c on the x-axis, AC = b at angle A */
export const sasD = (b, c, A, labels = ["A", "B", "C"], o = {}) => triD([[0, 0], [c, 0], [b * cos(A), b * sin(A)]], labels, o);
/** right triangle with legs along the axes: right angle at (run, 0) */
export const rightD = (run, rise, labels = ["", "", ""], marks = []) => triD([[0, 0], [run, 0], [run, rise]], labels, { marks });
/** terminal arm through (x, y) on a coordinate grid */
export const armD = (x, y, label) => {
  const m = Math.max(Math.abs(x), Math.abs(y)) + 1.5, s = niceStep(2 * m);
  return planeDoc({ view: { xmin: -m, xmax: m, ymin: -m, ymax: m }, step: { x: s, y: s }, segs: [{ pts: [[0, 0], [x, y]], color: "violet" }, { pts: [[x, y], [x, 0]], color: "amber" }], points: [{ x, y, label }] });
};
/** unit circle with arms at the given angles [[deg, label], ...] */
export const unitD = (arms, more = {}) => planeDoc({
  view: { xmin: -1.4, xmax: 1.4, ymin: -1.4, ymax: 1.4 }, step: { x: 0.5, y: 0.5 },
  curves: [{ f: (x) => Math.sqrt(Math.max(0, 1 - x * x)), a: -1, b: 1, color: "gray" }, { f: (x) => -Math.sqrt(Math.max(0, 1 - x * x)), a: -1, b: 1, color: "gray" }],
  segs: arms.map(([a]) => ({ pts: [[0, 0], [cos(a), sin(a)]], color: "violet" })),
  points: arms.map(([a, label]) => ({ x: cos(a), y: sin(a), label })), ...more,
});
export const P3 = (x, y, z) => [x + 0.4 * y, z + 0.25 * y]; // flat oblique view so ground depth never looks like height
/** 3-D wire sketch (no grid): segs [{pts:[[x,y,z]...], color}], labels [[x,y,z,label]] */
export function wireD(segs3, labels = []) {
  const segs = segs3.map((e) => ({ pts: e.pts.map((p) => P3(...p)), color: e.color ?? "blue" }));
  return planeDoc({ ...fit(segs.flatMap((s) => s.pts), true), segs, points: labels.map(([x, y, z, label]) => ({ x: P3(x, y, z)[0], y: P3(x, y, z)[1], label })) });
}
/** box l × w × h with extra 3-D segments and labels */
export function boxD(l, w, h, extra = [], labels = []) {
  const v = [[0, 0, 0], [l, 0, 0], [l, w, 0], [0, w, 0], [0, 0, h], [l, 0, h], [l, w, h], [0, w, h]];
  const E = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
  return wireD([...E.map(([a, b]) => ({ pts: [v[a], v[b]], color: "gray" })), ...extra], labels);
}
/** tower sketch: ground triangle ABC (AB = d, angle at A = al, AC known), vertical CT of height h */
export function towerD(d, al, AC, h, labels = ["A", "B", "C", "T"]) {
  const C = [AC * cos(al), AC * sin(al), 0], T = [C[0], C[1], h];
  return wireD([{ pts: [[0, 0, 0], [d, 0, 0], C, [0, 0, 0]], color: "green" }, { pts: [C, T], color: "blue" }, { pts: [[0, 0, 0], T], color: "red" }], [[0, 0, 0, labels[0]], [d, 0, 0, labels[1]], [...C, labels[2]], [...T, labels[3]]]);
}
/** square pyramid with base side s and height h */
export const pyrD = (s, h) => wireD([{ pts: [[0, 0, 0], [s, 0, 0], [s, s, 0], [0, s, 0], [0, 0, 0]], color: "gray" }, ...[[0, 0], [s, 0], [s, s], [0, s]].map(([x, y]) => ({ pts: [[x, y, 0], [s / 2, s / 2, h]] })), { pts: [[s / 2, s / 2, 0], [s / 2, s / 2, h]], color: "red" }], [[s / 2, s / 2, h, "apex"]]);

// Figures for IB AA SL chapter 12 (trigonometric functions): sectors and segments, and unit-circle diagrams, built on the
// scene builder in ../mth1w-ch5/figs5.mjs. Lessons: fig({ items }, caption); bank/written: figDoc({ items }); worksheets:
// svgT(figDoc({ items })). Graphs use plane()/planeDoc() from the lesson/bank libraries.
export { fig, figDoc } from "../mth1w-ch5/figs5.mjs";

/** points along an arc of radius r from angle a to b (radians, anticlockwise from the positive x-axis) */
const arcPts = (r, a, b, n = 48) => Array.from({ length: n + 1 }, (_, i) => { const t = a + ((b - a) * i) / n; return [r * Math.cos(t), r * Math.sin(t)]; });

/** sector of radius r and angle th (radians), starting on the positive x-axis; segment = true shades only the segment */
export function sector(r, th, { lr = `r = ${r}`, lth = "θ", ls = "", segment = false, fill = "violet" } = {}) {
  const P = arcPts(r, 0, th), O = [0, 0], A = P[0], B = P[P.length - 1];
  const items = [];
  if (segment) items.push({ poly: [O, ...P], fill: "none", color: "violet" }, { poly: P, fill: "amber", color: "amber" }, { seg: [A, B], color: "red", width: 2.2 });
  else items.push({ poly: [O, ...P], fill, color: "violet" });
  items.push({ seg: [O, A], color: "blue", width: 2 }, { seg: [O, B], color: "blue", width: 2 });
  if (lr) items.push({ dim: [O, A], label: lr, off: -0.1 * r });
  if (lth) items.push({ arc: [A, O, B], label: lth, r: 0.22 * r });
  if (ls) { const m = arcPts(r * 1.14, th / 2, th / 2, 1)[0]; items.push({ text: ls, at: m, bold: true, color: "red" }); }
  items.push({ dot: O, color: "ink" });
  return items;
}

/** unit circle with the point at angle th (radians), its x and y projections and optional reference triangle */
export function unitPoint(th, { label = "", ref = true, quadrants = true } = {}) {
  const items = [{ seg: [[-1.25, 0], [1.25, 0]], color: "gray", width: 1.4 }, { seg: [[0, -1.25], [0, 1.25]], color: "gray", width: 1.4 }, { poly: arcPts(1, 0, 2 * Math.PI, 96), fill: "none", color: "violet" }];
  const P = [Math.cos(th), Math.sin(th)];
  items.push({ seg: [[0, 0], P], color: "amber", width: 2.6 });
  if (ref) items.push({ seg: [[P[0], 0], P], color: "red", dash: true, width: 2 }, { seg: [[0, 0], [P[0], 0]], color: "blue", dash: true, width: 2 });
  items.push({ arc: [[1, 0], [0, 0], P], label: label || "θ", r: 0.25 }, { dot: P, color: "red" });
  items.push({ text: `(${P[0].toFixed(2)}, ${P[1].toFixed(2)})`, at: [P[0] * 1.32, P[1] * 1.22 + (P[1] >= 0 ? 0.05 : -0.05)], size: 12, bold: true, color: "red" });
  if (quadrants) items.push({ text: "A", at: [0.85, 0.95], color: "green", bold: true }, { text: "S", at: [-0.85, 0.95], color: "green", bold: true }, { text: "T", at: [-0.85, -0.95], color: "green", bold: true }, { text: "C", at: [0.85, -0.95], color: "green", bold: true });
  return items;
}

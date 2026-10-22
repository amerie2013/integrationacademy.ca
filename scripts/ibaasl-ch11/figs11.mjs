// Figures for IB AA SL chapter 11 (geometry and trigonometry), built on the scene builder in ../mth1w-ch5/figs5.mjs.
// Lessons use fig(opts, caption) (HTML); bank, assignments and written questions use figDoc(opts) (SVG document);
// worksheets use svgT(figDoc(opts)). Every helper returns a list of scene items; pass { items: [...] } to fig/figDoc.
import { polygon, prism, cylinder, cone, pyramid, sphere } from "../mth1w-ch5/figs5.mjs";
export { fig, figDoc, polygon, prism, cylinder, cone, pyramid, sphere } from "../mth1w-ch5/figs5.mjs";

const rad = (d) => (d * Math.PI) / 180;

/** triangle ABC from three points with side labels [AB, BC, CA], vertex names and angle labels [[i, text]] */
export const tri = (A, B, C, opts = {}) => polygon([A, B, C], opts);

/** triangle with C at the origin, CB = a along the x-axis and CA = b at angle C (degrees); returns { pts:[A,B,C], items } */
export function triSAS(a, b, Cdeg, { sides = ["", "", ""], names = ["A", "B", "C"], angles = [], fill = "blue" } = {}) {
  const C = [0, 0], B = [a, 0], A = [b * Math.cos(rad(Cdeg)), b * Math.sin(rad(Cdeg))];
  // draw counter-clockwise (C, B, A) so side labels sit outside; remap labels given in A, B, C order
  const idx = [2, 1, 0];
  return { pts: [A, B, C], items: polygon([C, B, A], { sides: [sides[1], sides[0], sides[2]], names: [names[2], names[1], names[0]], angles: angles.map(([i, t]) => [idx[i], t]), fill }) };
}

/** right-angled triangle: horizontal leg a, vertical leg b (right angle at the bottom right), angle label at the left vertex */
export function rightT(a, b, { la = "", lb = "", lc = "", angle = "", names = ["", "", ""], fill = "blue" } = {}) {
  const A = [0, 0], B = [a, 0], C = [a, b];
  return polygon([A, B, C], { sides: [la, lb, lc], names, fill, rightAt: [1], angles: angle ? [[0, angle]] : [] });
}

/** north line at P (length L) */
const north = (P, L) => [{ seg: [P, [P[0], P[1] + L]], color: "gray", width: 1.6 }, { text: "N", at: [P[0], P[1] + L * 1.12], bold: true, color: "gray", size: 12 }];

/**
 * journey from O on bearing b1 for d1, then bearing b2 for d2 (bearings in degrees clockwise from north).
 * Shows north lines at O and at the turning point, the legs, the closing line back to O (dashed) and bearing arcs.
 */
export function journey(b1, d1, b2, d2, { l1 = `${d1}`, l2 = `${d2}`, lb1 = `${b1}°`, lb2 = `${b2}°`, names = ["O", "P", "Q"], close = true } = {}) {
  const dir = (b) => [Math.sin(rad(b)), Math.cos(rad(b))];
  const O = [0, 0], P = [d1 * dir(b1)[0], d1 * dir(b1)[1]], Q = [P[0] + d2 * dir(b2)[0], P[1] + d2 * dir(b2)[1]];
  const L = Math.max(d1, d2) * 0.45;
  const items = [...north(O, L), ...north(P, L),
    { seg: [O, P], color: "violet", width: 2.6 }, { seg: [P, Q], color: "violet", width: 2.6 },
    { dim: [O, P], label: l1 }, { dim: [P, Q], label: l2 },
    { arc: [[O[0], O[1] + 1], O, P], label: lb1, r: L * 0.35 }, { arc: [[P[0], P[1] + 1], P, Q], label: lb2, r: L * 0.35 },
    { dot: O, color: "ink" }, { dot: P, color: "ink" }, { dot: Q, color: "ink" },
    { text: names[0], at: [O[0] - L * 0.18, O[1] - L * 0.15], bold: true }, { text: names[1], at: [P[0] + L * 0.18, P[1] + L * 0.05], bold: true }, { text: names[2], at: [Q[0] + L * 0.18, Q[1] - L * 0.12], bold: true }];
  if (close) items.push({ seg: [O, Q], color: "red", dash: true, width: 2 });
  return { O, P, Q, items };
}

/** angle of elevation picture: observer at the left, object height h at horizontal distance d */
export function elevation(d, h, { ld = `${d} m`, lh = "", angle = "", top = "" } = {}) {
  const A = [0, 0], B = [d, 0], C = [d, h];
  const items = [{ seg: [[-0.05 * d, 0], [d * 1.08, 0]], color: "gray", width: 1.6 }, { poly: [A, B, C], fill: "none", color: "violet" },
    { seg: [B, C], color: "ink", width: 3.2 }, { right: [A, B, C] }, { dim: [A, B], label: ld, off: 0.08 * d }];
  if (lh) items.push({ dim: [B, C], label: lh, off: 0.06 * d });
  if (angle) items.push({ arc: [B, A, C], label: angle });
  if (top) items.push({ text: top, at: [d, h * 1.08], bold: true });
  return items;
}

// oblique projection used by figs5 prism(): depth direction (0.45, 0.32)
const pr = (x, y, z) => [x + z * 0.45, y + z * 0.32];
/** cuboid l × w × h with a space diagonal from the front-bottom-left to the back-top-right corner, and the floor diagonal */
export function cuboidDiag(l, w, h, { ll = `${l}`, lw = `${w}`, lh = `${h}`, diag = true, floor = true, angle = "" } = {}) {
  const items = prism(l, w, h, { ll, lw, lh });
  const A = pr(0, 0, 0), G = pr(l, h, w), Cf = pr(l, 0, w);
  if (floor) items.push({ seg: [A, Cf], color: "green", dash: true, width: 2 });
  if (diag) items.push({ seg: [A, G], color: "red", width: 2.6 });
  if (floor && diag) items.push({ seg: [Cf, G], color: "green", width: 1.6 });
  if (angle) items.push({ arc: [Cf, A, G], label: angle });
  return items;
}

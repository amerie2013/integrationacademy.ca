// Helpers for the 2.7 (applications) bank: diagram SVGs and question builders whose answers are computed from the
// model's own linear system, with full-step row-reduction feedback.
import { vdoc } from "../vecfig.mjs";
import { planeDoc } from "../../mth1w-ch4/figs4.mjs";
import { num, mc } from "./kit.mjs";
import { solve, stepsLine, tp } from "./la.mjs";

const S = String.raw;
const dec = (x) => +x.toFixed(4);
const tolOf = (x) => (Number.isInteger(x) ? 0 : 0.001);

/** a network: nodes {name: [x, y]}, edges [[from, to, label]], external [[node, dx, dy, label, inward]] */
export function networkSvg(nodes, edges, ext, view) {
  const arrows = edges.map(([a, b, l]) => { const [x1, y1] = nodes[a], [x2, y2] = nodes[b], L = Math.hypot(x2 - x1, y2 - y1), u = [(x2 - x1) / L, (y2 - y1) / L]; return { from: [x1 + 0.35 * u[0], y1 + 0.35 * u[1]], to: [x2 - 0.35 * u[0], y2 - 0.35 * u[1]], color: "blue", label: l, off: 12 }; });
  for (const [n, dx, dy, l, inward] of ext) { const [x, y] = nodes[n], far = [x + dx, y + dy], near = [x + 0.35 * Math.sign(dx), y + 0.35 * Math.sign(dy)]; arrows.push(inward ? { from: far, to: near, color: "red", label: l, off: 12 } : { from: near, to: far, color: "red", label: l, off: 12 }); }
  return vdoc({ width: 300, view, grid: false, axes: false, arrows, points: Object.entries(nodes).map(([t, [x, y]]) => ({ x, y, label: t, color: "amber", dx: 8, dy: -8 })) });
}
/** a two-loop circuit: source V on the left, r1 on the top-left branch (I₁), r2 in the middle (I₂), r3 on the right (I₃) */
export function circuitSvg(V, r1, r2, r3) {
  return vdoc({ width: 300, view: { xmin: -0.8, xmax: 7.6, ymin: -0.8, ymax: 4.6 }, grid: false, axes: false,
    segs: [{ pts: [[0, 0], [0, 4], [7, 4], [7, 0], [0, 0]], color: "black", w: 2.2 }, { pts: [[3.5, 4], [3.5, 0]], color: "black", w: 2.2 }, { pts: [[-0.35, 2.2], [0.35, 2.2]], color: "black", w: 3 }, { pts: [[-0.2, 1.85], [0.2, 1.85]], color: "black", w: 4 }],
    polys: [{ pts: [[1.2, 3.8], [2.4, 3.8], [2.4, 4.2], [1.2, 4.2]], fill: "#fff7ed", stroke: "amber" }, { pts: [[3.3, 1.4], [3.7, 1.4], [3.7, 2.6], [3.3, 2.6]], fill: "#fff7ed", stroke: "amber" }, { pts: [[6.8, 1.4], [7.2, 1.4], [7.2, 2.6], [6.8, 2.6]], fill: "#fff7ed", stroke: "amber" }],
    arrows: [{ from: [2.6, 4], to: [3.3, 4], color: "red", label: "I₁", off: 14 }, { from: [3.5, 1.2], to: [3.5, 0.5], color: "red", label: "I₂", off: -14 }, { from: [4.3, 4], to: [5.2, 4], color: "red", label: "I₃", off: 14 }],
    texts: [{ x: -0.55, y: 2.6, t: `${V} V`, color: "black" }, { x: 1.8, y: 4.45, t: `${r1} Ω`, color: "amber" }, { x: 4.15, y: 2.0, t: `${r2} Ω`, color: "amber" }, { x: 6.35, y: 2.0, t: `${r3} Ω`, color: "amber" }] });
}
/** a square plate with four interior points T₁ (top left), T₂ (top right), T₃ (bottom left), T₄ (bottom right) */
export function plateSvg(top, right, bottom, left) {
  return vdoc({ width: 300, view: { xmin: -0.9, xmax: 3.9, ymin: -0.8, ymax: 3.8 }, grid: false, axes: false,
    polys: [{ pts: [[0, 0], [3, 0], [3, 3], [0, 3]], fill: "#f8fafc", stroke: "gray" }],
    segs: [{ pts: [[1, 0], [1, 3]], color: "#cbd5e1", w: 1 }, { pts: [[2, 0], [2, 3]], color: "#cbd5e1", w: 1 }, { pts: [[0, 1], [3, 1]], color: "#cbd5e1", w: 1 }, { pts: [[0, 2], [3, 2]], color: "#cbd5e1", w: 1 }],
    points: [[1, 2], [2, 2], [1, 1], [2, 1]].map(([x, y], i) => ({ x, y, label: ["T₁", "T₂", "T₃", "T₄"][i], color: "amber", dx: 6, dy: -6 })),
    texts: [{ x: 1.5, y: 3.3, t: `${top}°`, color: "red" }, { x: 3.5, y: 1.5, t: `${right}°`, color: "red" }, { x: 1.5, y: -0.45, t: `${bottom}°`, color: "blue" }, { x: -0.5, y: 1.5, t: `${left}°`, color: "blue" }] });
}
/** the 4-point plate system (rows [A | b]) for edge temperatures */
export const plateRows = (t, r, b, l) => [[4, -1, -1, 0, t + l], [-1, 4, 0, -1, t + r], [-1, 0, 4, -1, b + l], [0, -1, -1, 4, b + r]];
/** a curve y = f(x) through marked points */
export const curveSvg = (f, pts, view) => planeDoc({ view, step: { x: 1, y: view.ymax - view.ymin > 12 ? 2 : 1 }, width: 300, curves: [{ f, color: "violet" }], points: pts.map(([x, y]) => ({ x, y, label: `(${x}, ${y})`, color: "red" })) });
/** a circle (centre, radius) through marked points */
export const circleSvg = ([h, k], r, pts, view) => planeDoc({ view, step: { x: 1, y: 1 }, width: 300,
  curves: [{ f: (x) => k + Math.sqrt(Math.max(0, r * r - (x - h) ** 2)), a: h - r, b: h + r, color: "violet" }, { f: (x) => k - Math.sqrt(Math.max(0, r * r - (x - h) ** 2)), a: h - r, b: h + r, color: "violet" }],
  points: pts.map(([x, y]) => ({ x, y, label: `(${x}, ${y})`, color: "red" })) });

/**
 * A numeric question answered by one unknown of a uniquely solvable model system.
 * `rows` = [A | b]; `names` = the unknowns as LaTeX; `pick(x)` = the asked value from the solution vector.
 */
export function modelQ(prompt, rows, names, pick, fig, setup = "") {
  const s = solve(rows);
  if (s.kind !== "unique") throw new Error(`modelQ: not unique: ${prompt.slice(0, 60)}`);
  const val = dec(pick(s.x));
  const sol = names.map((n, i) => `${n}=${dec(s.x[i])}`).join(",\\ ");
  return num(prompt, val, `${setup ? setup + " " : ""}Augmented matrix (unknowns $${names.join(",")}$), reduced step by step: ${stepsLine(rows)} So $${sol}$.`, fig, tolOf(val));
}
/** smallest whole-number balance of a homogeneous system with one free variable */
export function balance(rows) {
  const s = solve(rows.map((r) => [...r, 0]));
  if (s.kind !== "many" || s.free !== 1) throw new Error("balance needs exactly one free variable");
  const d = s.dirs[0];
  for (let k = 1; k <= 120; k++) if (d.every((x) => Math.abs(x * k - Math.round(x * k)) < 1e-9)) return d.map((x) => Math.round(x * k));
  throw new Error("no whole-number balance");
}
/** a chemical balancing question: rows = one homogeneous equation per element (coefficients of x₁..xₙ) */
export function chemQ(prompt, rows, i, elements, fig) {
  const b = balance(rows), n = rows[0].length, last = `x_{${n}}`;
  const s = solve(rows.map((r) => [...r, 0]));
  return num(prompt, b[i], `One equation per element (${elements}), all moved to the left: a homogeneous system. ${stepsLine(rows.map((r) => [...r, 0]))} The free variable is $x_{${s.freeCols[0] + 1}}=t$: $\\vec x=t${tp(s.dirs[0].map(dec))}$. The smallest whole numbers are $${tp(b)}$.`, fig);
}
export { S, dec, tolOf, mc, num, solve, stepsLine, tp };

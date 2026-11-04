// Trig figure specs for MHF4U chapters 4–5: option objects for plane() / planeDoc() / F().
const circle = (r = 1, color = "violet") => [
  { f: (x) => Math.sqrt(Math.max(0, r * r - x * x)), a: -r, b: r, color },
  { f: (x) => -Math.sqrt(Math.max(0, r * r - x * x)), a: -r, b: r, color },
];
/** unit circle with the terminal arm at `deg` degrees, and its x and y legs */
export const UC = (deg, label, more = []) => {
  const t = (deg * Math.PI) / 180, c = Math.cos(t), s = Math.sin(t);
  return { view: { xmin: -1.5, xmax: 1.5, ymin: -1.5, ymax: 1.5 }, curves: circle(), step: { x: 0.5, y: 0.5 },
    segs: [{ pts: [[0, 0], [c, s]], color: "red" }, { pts: [[0, 0], [c, 0]], color: "blue" }, { pts: [[c, 0], [c, s]], color: "green" }],
    points: [{ x: c, y: s, label, color: "red" }, ...more] };
};
/** terminal arm through (x, y) on a circle of radius r */
export const ARM = (x, y, label) => {
  const r = Math.hypot(x, y), m = Math.ceil(r) + 1;
  return { view: { xmin: -m, xmax: m, ymin: -m, ymax: m }, curves: circle(r), step: { x: 1, y: 1 },
    segs: [{ pts: [[0, 0], [x, y]], color: "red" }, { pts: [[0, 0], [x, 0]], color: "blue" }, { pts: [[x, 0], [x, y]], color: "green" }],
    points: [{ x, y, label, color: "red" }] };
};
/** a sector of a circle: radius r, angle from 0 to th radians */
export const SECTOR = (r, th, label) => {
  const pts = [[0, 0]];
  for (let i = 0; i <= 40; i++) pts.push([r * Math.cos((th * i) / 40), r * Math.sin((th * i) / 40)]);
  pts.push([0, 0]);
  const m = r + 1;
  return { view: { xmin: -m, xmax: m, ymin: -m, ymax: m }, step: { x: Math.max(1, Math.round(m / 5)), y: Math.max(1, Math.round(m / 5)) }, segs: [{ pts, color: "violet" }], points: label ? [{ x: r * Math.cos(th / 2), y: r * Math.sin(th / 2), label, color: "red" }] : [] };
};
/** radian-axis trig graph spec: curves on [a, b] with a grid step of 1 unless given */
export const TG = (fs, view, points = [], extra = {}) => ({ view, curves: fs.map(([f, color = "violet"]) => ({ f, color })), points, step: { x: 1, y: 1 }, xlabel: "x (rad)", ...extra });
export const PI = Math.PI;

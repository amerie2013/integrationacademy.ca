// New figures for MHF4U bank questions that describe a shape or scene (added 2026-11-05).
// Labels show only what the question gives, never the answer.
import { planeDoc } from "../mth1w-ch4/figs4.mjs";
import { figDoc, prism } from "../mth1w-ch5/figs5.mjs";

const tx = (text, at, o = {}) => ({ text, at, size: 13, ...o });
/** sector with angle t (radians) drawn upward from the x-axis; r is drawn as 1 */
const sector = (t, { lr, lt, la }) => {
  const arc = Array.from({ length: 41 }, (_, i) => [Math.cos((t * i) / 40), Math.sin((t * i) / 40)]);
  const m = t / 2;
  return figDoc({ w: 250, items: [{ circle: [0, 0, 1], color: "gray", dash: true }, { poly: [[0, 0], ...arc], fill: "blue", color: "blue" }, { seg: arc.slice(-2).concat([[0, 0]]).slice(1), color: "blue" },
    ...(lr ? [tx(lr, [0.42, -0.11])] : []), ...(lt ? [tx(lt, [(t < 0.5 ? 0.62 : 0.3) * Math.cos(m) - 0.03, (t < 0.5 ? 0.62 : 0.3) * Math.sin(m) + (t < 0.5 ? 0.14 : -0.02)], { color: "red" })] : []), ...(la ? [tx(la, [1.1 * Math.cos(m) - 0.08, 1.1 * Math.sin(m) - 0.03], { color: "violet", bold: true })] : [])] });
};
const wheel = (r, hub, lr, lh) => figDoc({ w: 260, items: [{ seg: [[-r * 1.3, 0], [r * 1.3, 0]], color: "ink" }, { circle: [0, hub, r], color: "violet" }, { dot: [0, hub] }, { seg: [[0, hub], [r, hub]], color: "red" }, { seg: [[0, 0], [0, hub]], color: "gray", dash: true }, tx(lr, [r * 0.5, hub + r * 0.09], { color: "red" }), tx(lh, [r * 0.2, hub * 0.45]), tx("ground", [r * 1.05, -r * 0.16], { color: "gray" })] });
const tide = (max, min, T, peak, xmax, pts) => { const a = (max - min) / 2, c = (max + min) / 2; return planeDoc({ view: { xmin: 0, xmax, ymin: 0, ymax: Math.ceil(max + 2) }, step: { x: 2, y: 2 }, xlabel: "t (h)", ylabel: "depth (m)", height: 250, curves: [{ f: (x) => c + a * Math.cos((2 * Math.PI * (x - peak)) / T), color: "violet" }], points: pts.map(([x, y, label]) => ({ x, y, label })) }); };
const P = (x, y, label) => ({ x, y, label });

export const FIG = {
  // sectors and arcs (4.1)
  s32: sector(2, { lr: "r = 3", lt: "2 rad" }), s71: sector(1, { lr: "r = 7", lt: "1 rad" }), a124: sector(3, { lr: "r = 4", lt: "?", la: "arc 12" }), a96: sector(1.5, { lr: "6 cm", lt: "?", la: "arc 9 cm" }),
  s12: sector((5 * Math.PI) / 6, { lr: "r = 12", lt: "5π/6" }), s15: sector((72 * Math.PI) / 180, { lr: "15 cm", lt: "72°" }), s6: sector(Math.PI / 3, { lr: "r = 6", lt: "π/3" }), s10: sector(1.5, { lr: "r = 10", lt: "1.5" }),
  sP: sector(1, { lr: "8 cm", lt: "?" }), a4pi: sector((2 * Math.PI) / 3, { lr: "r = ?", lt: "2π/3", la: "arc 4π" }), sA: sector((3 * Math.PI) / 4, { lr: "r = ?", lt: "3π/4" }), earth: sector(0.35, { lr: "6400 km", lt: "0.35" }),
  pend: figDoc({ w: 240, items: [{ seg: [[0, 0], [-0.21, -0.98]], color: "blue" }, { seg: [[0, 0], [0.21, -0.98]], color: "blue" }, { poly: Array.from({ length: 21 }, (_, i) => { const a = -0.21 + (0.42 * i) / 20; return [Math.sin(a), -Math.cos(a)]; }), color: "violet", open: true }, { dot: [0, 0] }, tx("60 cm", [-0.46, -0.5]), tx("arc 25 cm", [-0.2, -1.12], { color: "violet" })] }),
  // boxes (1.3, 2.3, 2.6, 3.5)
  sheet: figDoc({ w: 290, items: [{ poly: [[0, 0], [16, 0], [16, 10], [0, 10]], fill: "blue", color: "blue" }, ...[[0, 0], [14, 0], [14, 8], [0, 8]].map(([x, y]) => ({ poly: [[x, y], [x + 2, y], [x + 2, y + 2], [x, y + 2]], fill: "#ffffff", color: "red", dash: true })), tx("16", [7.5, -0.9]), tx("10", [12.5, 4.8]), tx("x", [0.8, 0.7], { color: "red" })] }),
  boxX3: figDoc({ w: 230, items: [...prism(3, 3, 5, { ll: "x", lw: "x", lh: "x + 3" })] }),
  box012: figDoc({ w: 240, items: [...prism(4, 3, 5, { ll: "x + 1", lw: "x", lh: "x + 2" })] }),
  openBox: figDoc({ w: 230, items: [...prism(4, 4, 3, { ll: "x", lw: "x", lh: "h" })] }),
  // graphs (1.6, 2.4)
  secant: planeDoc({ view: { xmin: -1, xmax: 9, ymin: -5, ymax: 55 }, height: 280, step: { x: 1, y: 10 }, curves: [{ f: (x) => x * x, color: "violet" }], segs: [{ pts: [[1, 1], [7, 49]], color: "red" }], points: [P(1, 1, "x = 1"), P(7, 49, "x = 7")] }),
  par15: planeDoc({ view: { xmin: -2, xmax: 8, ymin: -10, ymax: 10 }, height: 280, step: { x: 1, y: 2 }, curves: [{ f: (x) => 2 * (x - 1) * (x - 5), color: "violet" }], points: [P(1, 0, "(1, 0)"), P(5, 0, "(5, 0)"), P(3, -8, "(3, −8)")] }),
  // wheels and tides (5.5)
  w1214: wheel(12, 14, "12 m", "14 m"), w89: wheel(8, 9, "8 m", "9 m"),
  tide88: tide(8.8, 1.6, 12.4, 4, 24, [[4, 8.8, "4:00, 8.8 m"], [10.2, 1.6, "10:12, 1.6 m"]]),
  tide102: tide(10, 2, 12, 0, 24, [[0, 10, "(0, 10)"], [6, 2, "(6, 2)"]]),
};

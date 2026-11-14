// Figures de la banque et des devoirs du chapitre 4 : plans cartésiens en documents SVG autonomes (étiquettes françaises).
// FIG = les figures de ../../mth1w-bank-figures/figs.mjs utilisées au chapitre 4, refaites avec les mêmes données
// mais avec des étiquettes d'axes et de points en français.
import { planeDoc } from "../figs4.mjs";
export { planeDoc };

const dist = (pts, o = {}) => planeDoc({ view: { xmin: 0, xmax: o.xmax ?? 60, ymin: 0, ymax: o.ymax ?? 10 }, segs: [{ pts }], points: o.points ?? [], xlabel: o.xlabel ?? "temps (min)", ylabel: o.ylabel ?? "distance (km)", step: o.step ?? { x: 10, y: 2 } });

export const FIG = {
  walk: dist([[0, 0], [20, 8]], { xmax: 30, points: [{ x: 20, y: 8, label: "(20, 8)" }] }),
  wall: dist([[0, 6], [6, 0], [12, 6]], { xmax: 12, ymax: 8, xlabel: "temps (s)", ylabel: "distance du mur (m)", step: { x: 2, y: 2 } }),
  line52: dist([[0, 0], [10, 4]], { xmax: 10, ymax: 5, points: [{ x: 5, y: 2, label: "(5, 2)" }], step: { x: 1, y: 1 } }),
  xy12: planeDoc({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 10 }, curves: [{ f: (x) => 12 / x, a: 1.2 }], points: [{ x: 2, y: 6, label: "(2, 6)" }, { x: 3, y: 4, label: "(3, 4)" }, { x: 4, y: 3, label: "(4, 3)" }] }),
  plan: planeDoc({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 80 }, lines: [{ m: 0.15, b: 20, color: "blue" }], points: [{ x: 0, y: 20, label: "(0, 20)" }, { x: 200, y: 50, label: "(200, 50)" }], xlabel: "minutes", ylabel: "coût", step: { x: 50, y: 10 } }),
  slope15: planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1.5, b: -1 }], points: [{ x: 0, y: -1 }, { x: 2, y: 2 }] }),
  taxi: planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 25 }, lines: [{ m: 1.6, b: 3.75, color: "blue" }], points: [{ x: 0, y: 3.75, label: "(0, 3.75)" }], xlabel: "distance (km)", ylabel: "tarif (dollars)", step: { x: 2, y: 5 } }),
  rental: planeDoc({ view: { xmin: 0, xmax: 400, ymin: 0, ymax: 160 }, lines: [{ m: 0.25, b: 40, color: "blue" }], xlabel: "distance (km)", ylabel: "coût (dollars)", step: { x: 100, y: 40 } }),
  ineq: planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1, b: 2, color: "blue" }], shade: { m: 1, b: 2, above: true } }),
  family: planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 10 }, height: 420, lines: [-2, -1, 0, 1, 2].map((m, i) => ({ m, b: 4, color: ["red", "amber", "gray", "green", "blue"][i] })), step: { x: 2, y: 2 } }),
  road: planeDoc({ view: { xmin: 0, xmax: 18, ymin: 0, ymax: 14 }, lines: [{ m: -0.75, b: 12, color: "blue", label: "route", lx: 10 }], points: [{ x: 0, y: 0, label: "village (0, 0)" }], step: { x: 2, y: 2 } }),
};

// MHF4U-FR banque du chapitre 5 — mêmes figures que l'anglais, plus des copies françaises des figures de
// grande roue et de marée de ../../mhf4u-bank-figures/figs.mjs (qui affichent « ground » et « depth (m) »).
import { planeDoc } from "../../mth1w-ch4/figs4.mjs";
import { figDoc } from "../../mth1w-ch5/figs5.mjs";
export * from "../../mhf4u-ch5/bank/fig.mjs";

const tx = (text, at, o = {}) => ({ text, at, size: 13, ...o });
const wheel = (r, hub, lr, lh) => figDoc({ w: 260, items: [{ seg: [[-r * 1.3, 0], [r * 1.3, 0]], color: "ink" }, { circle: [0, hub, r], color: "violet" }, { dot: [0, hub] }, { seg: [[0, hub], [r, hub]], color: "red" }, { seg: [[0, 0], [0, hub]], color: "gray", dash: true }, tx(lr, [r * 0.5, hub + r * 0.09], { color: "red" }), tx(lh, [r * 0.2, hub * 0.45]), tx("sol", [r * 1.05, -r * 0.16], { color: "gray" })] });
const tide = (max, min, T, peak, xmax, pts) => { const a = (max - min) / 2, c = (max + min) / 2; return planeDoc({ view: { xmin: 0, xmax, ymin: 0, ymax: Math.ceil(max + 2) }, step: { x: 2, y: 2 }, xlabel: "t (h)", ylabel: "profondeur (m)", height: 250, curves: [{ f: (x) => c + a * Math.cos((2 * Math.PI * (x - peak)) / T), color: "violet" }], points: pts.map(([x, y, label]) => ({ x, y, label })) }); };

/** French copies of the 5.5 figures (same geometry, French words) */
export const FIG = {
  w1214: wheel(12, 14, "12 m", "14 m"), w89: wheel(8, 9, "8 m", "9 m"),
  tide88: tide(8.8, 1.6, 12.4, 4, 24, [[4, 8.8, "4 h 00, 8.8 m"], [10.2, 1.6, "10 h 12, 1.6 m"]]),
  tide102: tide(10, 2, 12, 0, 24, [[0, 10, "(0, 10)"], [6, 2, "(6, 2)"]]),
};

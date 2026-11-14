// Figures de la banque et des devoirs du chapitre 6 (français) : documents SVG autonomes.
// FIG = copies françaises des figures partagées de ../../mth1w-bank-figures/figs.mjs utilisées par la banque anglaise
// du chapitre 6 : mêmes données, mêmes vues; seules les étiquettes dessinées sont traduites.
import { FIG as FIG_EN } from "../../mth1w-bank-figures/figs.mjs";
import { boxPlotDoc, histogramDoc, barChartDoc, scatterDoc } from "../figs6.mjs";
import { planeDoc } from "../../mth1w-ch4/figs4.mjs";
export { boxPlotDoc, dotPlotDoc, histogramDoc, barChartDoc, scatterDoc } from "../figs6.mjs";
export { planeDoc } from "../../mth1w-ch4/figs4.mjs";

const dist = (pts, o = {}) => planeDoc({ view: { xmin: 0, xmax: o.xmax ?? 60, ymin: 0, ymax: o.ymax ?? 10 }, segs: [{ pts }], points: o.points ?? [], xlabel: o.xlabel ?? "temps (min)", ylabel: o.ylabel ?? "distance (km)", step: o.step ?? { x: 10, y: 2 } });

export const FIG = {
  // aucune étiquette en mots : identiques à l'anglais
  bars92: barChartDoc({ bars: [["X", 92], ["Y", 98]], base: 90, top: 100, step: 2 }),
  bars55: barChartDoc({ bars: [["A", 55], ["B", 70]], base: 50, top: 72, step: 5 }),
  box25: boxPlotDoc({ five: [25, 34, 40, 48, 60], lo: 20, hi: 64, step: 4, showValues: true }),
  box20: boxPlotDoc({ five: [14, 20, 25, 32, 40], lo: 10, hi: 44, step: 2, showValues: true }),
  boxAB: FIG_EN.boxAB,
  predict: scatterDoc({ pts: [[1, 9], [2, 17], [3, 21], [4, 29], [5, 33], [6, 41]], view: { xmin: 0, xmax: 10, ymin: 0, ymax: 60 }, step: { x: 1, y: 10 }, line: { m: 6, b: 4 } }),
  // étiquettes traduites
  hist40: histogramDoc({ bins: [[140, 150, 2], [150, 160, 8], [160, 170, 15], [170, 180, 10], [180, 190, 5]], xlabel: "taille (cm)", ystep: 5 }),
  run: dist([[0, 0], [12, 3], [30, 6]], { xmax: 36, ymax: 8, points: [{ x: 12, y: 3, label: "(12, 3)" }, { x: 30, y: 6, label: "(30, 6)" }], step: { x: 6, y: 1 } }),
  fall9: dist([[0, 0], [20, 9], [30, 9], [45, 0]], { xmax: 70, ymax: 10, ylabel: "distance de la maison (km)", points: [{ x: 30, y: 9, label: "(30, 9)" }, { x: 45, y: 0, label: "(45, 0)" }] }),
  stop: planeDoc({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 2400 }, segs: [{ pts: [[0, 0], [20, 1600], [35, 1600], [45, 2400], [60, 2400]] }], step: { x: 10, y: 400 }, xlabel: "temps (min)", ylabel: "distance (m)" }),
  stopping: scatterDoc({ pts: [[20, 6], [40, 18], [60, 35], [80, 58], [100, 86]], view: { xmin: 0, xmax: 120, ymin: 0, ymax: 100 }, step: { x: 20, y: 20 }, xlabel: "vitesse (km/h)", ylabel: "distance d'arrêt (m)" }),
};
// garde-fou : les figures sans mots doivent être identiques à l'anglais
for (const k of ["bars92", "bars55", "box25", "box20", "predict"]) if (FIG[k] !== FIG_EN[k]) throw new Error(`figure ${k} différente de l'anglais`);

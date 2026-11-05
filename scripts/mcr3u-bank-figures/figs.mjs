// New figures for MCR3U bank questions that describe a scene, a triangle or a graph (added 2026-11-05).
// Labels show only what the question gives, never the answer.
import { planeDoc } from "../mth1w-ch4/figs4.mjs";
import { figDoc } from "../mth1w-ch5/figs5.mjs";
import { armD, boxD, towerD, wireD, cos, sin } from "../mcr3u-ch5/bank/fig.mjs";

const tx = (text, at, o = {}) => ({ text, at, size: 13, ...o });
const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
const off = (p, dx, dy) => [p[0] + dx, p[1] + dy];

/** right triangle: angle mark at the left end, right angle under the top vertex */
const rt = (run, rise, l = {}, w = 280) => {
  const A = [0, 0], B = [run, 0], C = [run, rise], S = Math.max(run, rise);
  return figDoc({ w, items: [{ poly: [A, B, C], fill: "blue", color: "blue" }, { right: [A, B, C] },
    ...(l.ang ? [{ arc: [B, A, C], label: l.ang, r: S * 0.2 }] : []),
    ...(l.run ? [tx(l.run, off(mid(A, B), -S * 0.05, -S * 0.09))] : []),
    ...(l.rise ? [tx(l.rise, l.riseAt ?? off(mid(B, C), -S * 0.1, 0))] : []),
    ...(l.hyp ? [tx(l.hyp, off(mid(A, C), (-rise / Math.hypot(run, rise)) * S * 0.09, (run / Math.hypot(run, rise)) * S * 0.09))] : []),
    ...(l.A ? [tx(l.A, [-S * 0.07, -S * 0.04], { bold: true })] : [])] });
};
/** depression seen from the top of a height h: dashed horizontal, angle at the top */
const depress = (d, h, ang, lh, what) => figDoc({ w: 300, items: [{ poly: [[0, 0], [d, 0], [0, h]], color: "blue", fill: "blue" }, { seg: [[0, h], [d * 0.7, h]], color: "gray", dash: true }, { right: [[0, h], [0, 0], [d, 0]] }, { arc: [[d * 0.7, h], [0, h], [d, 0]], label: ang, r: d * 0.28 }, tx(lh, [-d * 0.2, h * 0.5]), tx(what, [d - d * 0.04, -h * 0.13], { bold: true })] });
/** two possible triangles for SSA: side b from A, side a from C swinging to B1 and B2 */
const ambig = (A, a, b) => {
  const C = [b * cos(A), b * sin(A)], dx = Math.sqrt(a * a - C[1] * C[1]), B1 = [C[0] - dx, 0], B2 = [C[0] + dx, 0];
  return figDoc({ w: 320, items: [{ seg: [[0, 0], B2], color: "gray" }, { seg: [[0, 0], C], color: "blue" }, { seg: [C, B1], color: "red" }, { seg: [C, B2], color: "green" }, { arc: [B2, [0, 0], C], label: `${A}°`, r: b * 0.2 }, tx("A", [-b * 0.08, -b * 0.03], { bold: true }), tx("C", off(C, -b * 0.02, b * 0.05), { bold: true }), tx("B", off(B1, -b * 0.02, -b * 0.1), { bold: true, color: "red" }), tx("B", off(B2, -b * 0.02, -b * 0.1), { bold: true, color: "green" }), tx(`b = ${b}`, off(mid([0, 0], C), -b * 0.22, b * 0.03), { color: "blue" }), tx(`a = ${a}`, off(mid(C, B2), b * 0.05, 0), { color: "green" })] });
};
/** triangle on a base AB with its two base angles */
const baseTri = (d, al, be, names, baseL) => {
  const g = 180 - al - be, ac = (d * sin(be)) / sin(g), A = [0, 0], B = [d, 0], C = [ac * cos(al), ac * sin(al)];
  return figDoc({ w: 310, items: [{ poly: [A, B, C], fill: "blue", color: "blue" }, { arc: [B, A, C], label: `${al}°`, r: d * 0.14 }, { arc: [A, B, C], label: `${be}°`, r: d * 0.12 }, tx(names[0], [-d * 0.06, -d * 0.03], { bold: true }), tx(names[1], [d * 1.02, -d * 0.03], { bold: true }), tx(names[2], off(C, -d * 0.02, d * 0.04), { bold: true }), tx(baseL, [d * 0.42, -d * 0.09])] });
};
/** wheel over the ground (or water): only the given lengths are labelled */
const wheel = ({ r, hub, lr, lh, lt, lb, base = "ground", spokeUp = false, diam = false }) => {
  const top = hub + r, low = Math.min(0, hub - r), S = Math.max(top - low, 2 * r);
  return figDoc({ w: 270, items: [{ seg: [[-r * 1.3, 0], [r * 1.3, 0]], color: base === "water" ? "blue" : "ink" }, { circle: [0, hub, r], color: "violet" }, { dot: [0, hub] },
    { seg: [diam ? [-r, hub] : [0, hub], spokeUp ? [0, top] : [r, hub]], color: "red" }, { seg: [[0, 0], [0, hub]], color: "gray", dash: true },
    ...(lr ? [tx(lr, spokeUp ? [S * 0.12, hub + r * 0.5] : diam ? [0, hub + S * 0.04] : [r * 0.5, hub + S * 0.04], { color: "red" })] : []),
    ...(lh ? [tx(lh, [S * 0.1, hub * 0.45])] : []),
    ...(lt ? [tx(lt, [0, top - S * 0.08])] : []),
    ...(lb ? [tx(lb, [r * 0.3, hub - r + S * 0.06])] : []),
    tx(base, [r * 1.05, -S * 0.08], { color: "gray" })] });
};
/** one cosine wave through a labelled maximum and minimum */
const wave = ({ max, min, T, peak, xmin, xmax, ymin, ymax, sx, sy, pts = [], xlabel = "x", ylabel = "y", axis = false }) => {
  const a = (max - min) / 2, c = (max + min) / 2;
  return planeDoc({ view: { xmin, xmax, ymin, ymax }, step: { x: sx, y: sy }, xlabel, ylabel, height: 250, curves: [{ f: (x) => c + a * Math.cos((2 * Math.PI * (x - peak)) / T), color: "violet" }], points: pts.map(([x, y, label]) => ({ x, y, label })), lines: axis ? [{ m: 0, b: c, color: "gray", dash: true }] : [] });
};

const pyr = (s, h, ls, lh, le) => wireD([{ pts: [[0, 0, 0], [s, 0, 0], [s, s, 0], [0, s, 0], [0, 0, 0]], color: "gray" }, ...[[0, 0], [s, 0], [s, s], [0, s]].map(([x, y]) => ({ pts: [[x, y, 0], [s / 2, s / 2, h]] })), { pts: [[s / 2, s / 2, 0], [s / 2, s / 2, h]], color: "red" }], [[s / 2, 0, 0, ls], ...(lh ? [[s / 2, s / 2, h / 2, lh]] : []), ...(le ? [[s * 0.75, s * 0.25, h / 2, le]] : [])]);
const tideGraph = (hi, lo, T, xmax, xlabel = "t (h)") => wave({ max: hi, min: lo, T, peak: T / 2, xmin: 0, xmax, ymin: 0, ymax: Math.ceil(hi + 1), sx: Math.round(T / 4) || 1, sy: 2, xlabel, ylabel: "water level (m)", pts: [[T / 2, hi, `high ${hi} m`], [T, lo, `low ${lo} m`]] });

export const FIG = {
  // right-triangle ratios and scenes (5.1, 5.3)
  tri345: rt(4, 3, { run: "4", rise: "3", hyp: "5", A: "A" }),
  tri5: rt(12, 5, { run: "12", rise: "5", hyp: "13", A: "A" }),
  ladder4: rt(1.744, 3.6, { rise: "3.6 m", hyp: "4 m" }, 200),
  ladder7: rt(7 * cos(65), 7 * sin(65), { hyp: "7 m", ang: "65°" }, 210),
  tower120: depress(250, 120, "?", "120 m", "car"),
  guy: rt(15 / Math.tan((55 * Math.PI) / 180), 15, { rise: "15 m", ang: "55°" }, 220),
  ramp: rt(10, 0.9, { run: "10 m", rise: "0.9 m", riseAt: [9, 1.15] }, 340),
  plane12: rt(2 * cos(12), 2 * sin(12), { hyp: "2 km", ang: "12°" }, 340),
  kite: rt(120 * cos(38), 120 * sin(38), { hyp: "120 m", ang: "38°" }),
  shadows: figDoc({ w: 320, items: [{ seg: [[-1, 0], [18, 0]], color: "ink" }, { seg: [[0, 0], [0, 11.92]], color: "green" }, { seg: [[10, 0], [0, 11.92]], color: "amber" }, { seg: [[16, 0], [0, 11.92]], color: "red", dash: true }, { right: [[0, 11.92], [0, 0], [10, 0]] }, { arc: [[0, 0], [10, 0], [0, 11.92]], label: "50°", r: 1.8 }, tx("10 m", [3.6, -1.5]), tx("16 m", [12.5, -1.5], { color: "red" }), tx("tree", [-3.2, 6])] }),
  window: figDoc({ w: 300, items: [{ poly: [[0, 0], [5, 0], [5, 18], [0, 18]], color: "gray", fill: "gray" }, { poly: [[20, 0], [26, 0], [26, 32], [20, 32]], color: "gray", fill: "gray" }, { dot: [5, 18] }, { seg: [[5, 18], [20, 18]], color: "gray", dash: true }, { seg: [[5, 18], [20, 27.4]], color: "blue" }, { seg: [[5, 18], [20, 0]], color: "red" }, { arc: [[20, 18], [5, 18], [20, 27.4]], label: "32°", r: 6.5 }, { arc: [[20, 18], [5, 18], [20, 0]], label: "41°", r: 5 }, tx("18 m", [2.5, 9])] }),
  lighthouse: figDoc({ w: 340, items: [{ seg: [[-100, 0], [60, 0]], color: "blue" }, { seg: [[0, 0], [0, 50]], color: "ink" }, { seg: [[0, 50], [-86.6, 0]], color: "red" }, { seg: [[0, 50], [50, 0]], color: "red" }, { seg: [[-55, 50], [55, 50]], color: "gray", dash: true }, { right: [[0, 50], [0, 0], [50, 0]] }, { arc: [[-55, 50], [0, 50], [-86.6, 0]], label: "30°", r: 26 }, { arc: [[55, 50], [0, 50], [50, 0]], label: "45°", r: 20 }, tx("50 m", [2, 24])] }),
  // terminal arms (5.2)
  arm68: armD(6, 8, "(6, 8)"),
  armN34: armD(-3, -4, "(−3, −4)"),
  armN724: armD(-7, 24, "(−7, 24)"),
  armN25: armD(-2, -5, "(−2, −5)"),
  ferris210: planeDoc({ view: { xmin: -16, xmax: 16, ymin: -16, ymax: 16 }, step: { x: 4, y: 4 }, curves: [{ f: (x) => Math.sqrt(Math.max(0, 144 - x * x)), a: -12, b: 12, color: "gray" }, { f: (x) => -Math.sqrt(Math.max(0, 144 - x * x)), a: -12, b: 12, color: "gray" }], segs: [{ pts: [[0, 0], [12 * cos(210), 12 * sin(210)]], color: "violet" }], points: [{ x: 12 * cos(210), y: 12 * sin(210), label: "rider, 210°" }] }),
  // sine law and ambiguous case (5.4)
  towers: baseTri(15, 40, 60, ["A", "B", "fire"], "15 km"),
  valley: baseTri(300, 41, 63, ["A", "B", "C"], "300 m"),
  river: baseTri(60, 58, 80, ["A", "B", "T"], "60 m"),
  coast: baseTri(5, 72, 66, ["post 1", "post 2", "ship"], "5 km"),
  amb42: ambig(42, 9, 12),
  amb24: ambig(24, 7, 15),
  amb52: ambig(52, 10, 12.5),
  amb40: ambig(40, 8, 11),
  // cosine law (5.5)
  rhomb50: figDoc({ w: 300, items: [{ poly: [[0, 0], [10, 0], [10 + 10 * cos(50), 10 * sin(50)], [10 * cos(50), 10 * sin(50)]], fill: "blue", color: "blue" }, { arc: [[10, 0], [0, 0], [10 * cos(50), 10 * sin(50)]], label: "50°", r: 2 }, tx("10", [4.6, -1])] }),
  para65: figDoc({ w: 320, items: [{ poly: [[0, 0], [10, 0], [10 + 7 * cos(65), 7 * sin(65)], [7 * cos(65), 7 * sin(65)]], fill: "blue", color: "blue" }, { arc: [[10, 0], [0, 0], [7 * cos(65), 7 * sin(65)]], label: "65°", r: 1.6 }, tx("10", [4.6, -0.9]), tx("7", [0.5, 3.2])] }),
  ships: figDoc({ w: 260, items: [{ seg: [[0, -30], [0, 30]], color: "gray", dash: true }, { seg: [[0, 0], [24 * sin(20), 24 * cos(20)]], color: "blue" }, { seg: [[0, 0], [33 * sin(50), -33 * cos(50)]], color: "red" }, { arc: [[0, 30], [0, 0], [24 * sin(20), 24 * cos(20)]], label: "20°", r: 11 }, { arc: [[0, -30], [0, 0], [33 * sin(50), -33 * cos(50)]], label: "50°", r: 10 }, tx("N", [-1, 31], { bold: true }), tx("port", [-9, -1]), tx("16 km/h", [10, 13], { color: "blue" }), tx("22 km/h", [15, -13], { color: "red" })] }),
  quad: (() => { const B = [0, 0], C = [6, 0], A = [5 * cos(120), 5 * sin(120)]; const AC = Math.hypot(C[0] - A[0], C[1] - A[1]), u = [(C[0] - A[0]) / AC, (C[1] - A[1]) / AC], cosA = (49 + 91 - 16) / (2 * 7 * AC), t = 7 * cosA, h = 7 * Math.sqrt(1 - cosA * cosA), D = [A[0] + u[0] * t - u[1] * h, A[1] + u[1] * t + u[0] * h]; return { A, B, C, D }; })(),
  plane300: figDoc({ w: 340, items: [{ seg: [[0, 0], [300, 0]], color: "blue" }, { seg: [[300, 0], [300 + 200 * cos(40), 200 * sin(40)]], color: "blue" }, { seg: [[300, 0], [430, 0]], color: "gray", dash: true }, { seg: [[0, 0], [300 + 200 * cos(40), 200 * sin(40)]], color: "red", dash: true }, { arc: [[430, 0], [300, 0], [300 + 200 * cos(40), 200 * sin(40)]], label: "40°", r: 60 }, tx("300 km", [120, -30]), tx("200 km", [395, 50]), tx("start", [-30, -28], { bold: true })] }),
  // 3-D (5.6)
  box3412: boxD(3, 4, 12, [{ pts: [[0, 0, 0], [3, 4, 12]], color: "red" }], [[1.5, 0, 0, "3"], [3, 2, 0, "4"], [3, 0, 6, "12"]]),
  box236: boxD(2, 3, 6, [{ pts: [[0, 0, 0], [2, 3, 6]], color: "red" }], [[1, 0, 0, "2"], [2, 1.5, 0, "3"], [2, 0, 3, "6"]]),
  base68: boxD(8, 6, 3, [{ pts: [[0, 0, 0], [8, 6, 0]], color: "red" }], [[4, 0, 0, "8"], [8, 3, 0, "6"]]),
  box6610: boxD(6, 6, 10, [{ pts: [[0, 0, 0], [6, 6, 10]], color: "red" }], [[3, 0, 0, "6"], [6, 3, 0, "6"], [6, 0, 5, "10"]]),
  box1064: boxD(10, 6, 4, [{ pts: [[0, 0, 0], [10, 6, 4]], color: "red" }], [[5, 0, 0, "10"], [10, 3, 0, "6"], [10, 0, 2, "4"]]),
  tree25: rt(25, 25 * Math.tan((40 * Math.PI) / 180), { run: "25 m", ang: "40°" }),
  bldg30: rt(30 / Math.tan((35 * Math.PI) / 180), 30, { rise: "30 m", ang: "35°" }),
  pole12: rt(20, 12, { run: "20 m", rise: "12 m" }),
  cliff40: depress(40 / Math.tan((20 * Math.PI) / 180), 40, "20°", "40 m", "buoy"),
  pyr64: pyr(6, 4, "6", "4"),
  pyr1013: pyr(10, Math.sqrt(169 - 50), "10", null, "13"),
  pyr1012: pyr(10, 12, "10", "12"),
  pyr128: pyr(12, 8, "12", "8"),
  pyr43: pyr(4, 3, "4 m", "3 m"),
  balloon200: rt(200 / Math.tan((30 * Math.PI) / 180), 200, { rise: "200 m", ang: "30°" }),
  flagpole: figDoc({ w: 240, items: [{ poly: [[0, 0], [8, 0], [8, 25], [0, 25]], color: "gray", fill: "gray" }, { seg: [[4, 25], [4, 38]], color: "red" }, { seg: [[34, 0], [4, 38]], color: "blue", dash: true }, { seg: [[-3, 0], [38, 0]], color: "ink" }, { arc: [[0, 0], [34, 0], [4, 38]], label: "45°", r: 7 }, tx("25 m", [4, 12]), tx("30 m", [17, -4])] }),
  tower150: rt(150, 150 * Math.tan((18 * Math.PI) / 180), { run: "150 m", ang: "18°" }),
  chimney: rt(40, 30, { run: "40 m", rise: "30 m" }),
  tower100: towerD(100, 50, (100 * sin(70)) / sin(60), 60),
  tower200: towerD(200, 40, (200 * sin(105)) / sin(35), 60),
  ground90: baseTri(90, 45, 80, ["A", "B", "C"], "90 m"),
  planeAB: figDoc({ w: 320, items: [{ seg: [[0, 0], [5, 0]], color: "ink" }, { seg: [[0, 0], [3.03, 2.54]], color: "blue" }, { seg: [[5, 0], [3.03, 2.54]], color: "blue" }, { seg: [[3.03, 0], [3.03, 2.54]], color: "red", dash: true }, { right: [[0, 0], [3.03, 0], [3.03, 2.54]] }, { arc: [[5, 0], [0, 0], [3.03, 2.54]], label: "40°", r: 0.8 }, { arc: [[0, 0], [5, 0], [3.03, 2.54]], label: "55°", r: 0.7 }, tx("A", [-0.3, -0.15], { bold: true }), tx("B", [5.1, -0.15], { bold: true }), tx("5 km", [1.4, -0.45])] }),
  balloonG: wireD([{ pts: [[0, 0, 0], [300, 0, 0], [0, 400, 0], [0, 0, 0]], color: "green" }, { pts: [[0, 0, 0], [0, 0, 170]], color: "blue" }, { pts: [[300, 0, 0], [0, 0, 170]], color: "red" }, { pts: [[0, 400, 0], [0, 0, 170]], color: "red" }], [[0, 0, 0, "G"], [300, 0, 0, "A"], [0, 400, 0, "B"]]),
  towerRight: wireD([{ pts: [[0, 0, 0], [40, 0, 0], [0, 45, 0], [0, 0, 0]], color: "green" }, { pts: [[0, 0, 0], [0, 0, 28]], color: "blue" }, { pts: [[40, 0, 0], [0, 0, 28]], color: "red" }, { pts: [[0, 45, 0], [0, 0, 28]], color: "red" }], [[0, 0, 0, "C"], [40, 0, 0, "A"], [0, 45, 0, "B"]]),
  drone: towerD(400, 55, (400 * sin(70)) / sin(55), 150, ["A", "B", "D", "drone"]),
  // periodic graphs (6.1, 6.6)
  p186: wave({ max: 18, min: 6, T: 7, peak: 2, xmin: 0, xmax: 16, ymin: 0, ymax: 22, sx: 2, sy: 4, pts: [[2, 18, "max 18"], [5.5, 6, "min 6"]] }),
  peaks29: wave({ max: 4, min: -2, T: 7, peak: 2, xmin: 0, xmax: 16, ymin: -4, ymax: 6, sx: 1, sy: 2, pts: [[2, 4, "x = 2"], [9, 4, "x = 9"]] }),
  p36: wave({ max: 3.6, min: -1.2, T: 8, peak: 2, xmin: 0, xmax: 16, ymin: -2, ymax: 5, sx: 2, sy: 1, pts: [[2, 3.6, "max 3.6"], [6, -1.2, "min −1.2"]] }),
  p102: wave({ max: 10, min: 2, T: 6, peak: 1.5, xmin: 0, xmax: 14, ymin: 0, ymax: 12, sx: 1, sy: 2, pts: [[1.5, 10, "max 10"], [4.5, 2, "min 2"]] }),
  sinT2: wave({ max: 9, min: 1, T: 10, peak: 2, xmin: 0, xmax: 24, ymin: 0, ymax: 11, sx: 2, sy: 2, xlabel: "t", pts: [[2, 9, "(2, 9)"], [7, 1, "(7, 1)"]] }),
  sinD25: wave({ max: 9, min: 3, T: 90, peak: 25, xmin: 0, xmax: 180, ymin: 0, ymax: 11, sx: 15, sy: 1, pts: [[25, 9, "(25°, 9)"], [70, 3, "(70°, 3)"]] }),
  sinAxis4: wave({ max: 7, min: 1, T: 120, peak: 30, xmin: -30, xmax: 180, ymin: 0, ymax: 9, sx: 30, sy: 1, axis: true, pts: [[0, 4, "(0°, 4)"], [30, 7, "(30°, 7)"]] }),
  model30: wave({ max: 30, min: 10, T: 12, peak: 3, xmin: 0, xmax: 24, ymin: 0, ymax: 36, sx: 3, sy: 5, xlabel: "t", pts: [[3, 30, "(3, 30)"], [9, 10, "(9, 10)"]] }),
  min45: wave({ max: 5, min: -1, T: 90, peak: 45, xmin: -15, xmax: 180, ymin: -2, ymax: 7, sx: 15, sy: 1, pts: [[0, -1, "(0°, −1)"], [45, 5, "(45°, 5)"]] }),
  // wheels, blades and tides (6.3, 6.7)
  wheelGraph: wave({ max: 40, min: 2, T: 60, peak: 30, xmin: 0, xmax: 120, ymin: 0, ymax: 48, sx: 15, sy: 10, xlabel: "t (s)", ylabel: "h (m)", pts: [[30, 40, "max 40 m"], [60, 2, "min 2 m"]] }),
  w68: wheel({ r: 6, hub: 8, lr: "6 m", lh: "8 m" }),
  w1012: wheel({ r: 10, hub: 12, lr: "10 m", lh: "12 m" }),
  w910: wheel({ r: 9, hub: 10, lr: "9 m", lh: "10 m" }),
  w1214: wheel({ r: 12, hub: 14, lr: "12 m", lh: "14 m" }),
  w1416: wheel({ r: 14, hub: 16, lr: "14 m", lh: "16 m" }),
  w1517: wheel({ r: 15, hub: 17, lr: "15 m", lh: "17 m" }),
  w228: wheel({ r: 13, hub: 15, lt: "top 28 m", lb: "bottom 2 m" }),
  w120: wheel({ r: 60, hub: 75, lr: "diameter 120 m", lb: "lowest 15 m", diam: true }),
  w402: wheel({ r: 19, hub: 21, lt: "max 40 m", lb: "min 2 m" }),
  blade1824: wheel({ r: 18, hub: 24, lr: "18 m", lh: "24 m", spokeUp: true }),
  blade1025: wheel({ r: 10, hub: 25, lr: "10 m", lh: "25 m", spokeUp: true }),
  paddle3: wheel({ r: 3, hub: 0.01, lr: "3 m", base: "water" }),
  paddle4: wheel({ r: 4, hub: 1, lr: "4 m", lh: "1 m", base: "water" }),
  paddle25: wheel({ r: 2.5, hub: 0.5, lr: "2.5 m", lh: "0.5 m", base: "water" }),
  tide95: tideGraph(9.5, 1.5, 12.5, 30),
  tide68: wave({ max: 6.8, min: 1.2, T: 12.4, peak: 2, xmin: 0, xmax: 24, ymin: 0, ymax: 9, sx: 2, sy: 1, xlabel: "t (h after midnight)", ylabel: "depth (m)", pts: [[2, 6.8, "2:00, 6.8 m"], [8.2, 1.2, "8:12, 1.2 m"]] }),
};
const q = FIG.quad;
FIG.quad = figDoc({ w: 280, items: [{ poly: [q.A, q.B, q.C, q.D], fill: "blue", color: "blue" }, { seg: [q.A, q.C], color: "red", dash: true }, { arc: [q.C, q.B, q.A], label: "120°", r: 1.1 }, tx("A", off(q.A, -0.5, 0.1), { bold: true }), tx("B", [-0.2, -0.65], { bold: true }), tx("C", off(q.C, 0.15, -0.2), { bold: true }), tx("D", off(q.D, 0.15, 0.1), { bold: true }), tx("5", off(mid(q.A, q.B), -0.55, 0)), tx("6", [2.8, -0.65])] });
FIG.quadAll = figDoc({ w: 280, items: [{ poly: [q.A, q.B, q.C, q.D], fill: "blue", color: "blue" }, { seg: [q.A, q.C], color: "red", dash: true }, { arc: [q.C, q.B, q.A], label: "120°", r: 1.1 }, tx("A", off(q.A, -0.5, 0.1), { bold: true }), tx("B", [-0.2, -0.65], { bold: true }), tx("C", off(q.C, 0.15, -0.2), { bold: true }), tx("D", off(q.D, 0.15, 0.1), { bold: true }), tx("5", off(mid(q.A, q.B), -0.55, 0)), tx("6", [2.8, -0.65]), tx("4", off(mid(q.C, q.D), 0.2, 0)), tx("7", off(mid(q.A, q.D), 0, 0.3))] });

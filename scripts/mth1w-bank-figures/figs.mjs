// New figures for MTH1W bank questions that describe a graph or a labelled shape (added 2026-11-05).
// Labels show only what the question gives, never the answer.
import { planeDoc } from "../mth1w-ch4/figs4.mjs";
import { boxPlotDoc, histogramDoc, barChartDoc, scatterDoc } from "../mth1w-ch6/figs6.mjs";
import { figDoc, prism } from "../mth1w-ch5/figs5.mjs";

const P = (deg, r = 1) => [r * Math.cos((deg * Math.PI) / 180), r * Math.sin((deg * Math.PI) / 180)];
const tx = (text, at, o = {}) => ({ text, at, size: 13, ...o });
const name = (t, deg, r = 1.14) => tx(t, [P(deg, r)[0] - 0.04, P(deg, r)[1] - 0.05], { bold: true });
const ring = (extra, w = 250) => figDoc({ w, items: [{ circle: [0, 0, 1], color: "ink" }, ...extra] });
const O = [{ dot: [0, 0] }, tx("O", [-0.14, -0.14], { bold: true })];
// central angle c at O and an inscribed angle at the top, both standing on the arc AB at the bottom
const arcTheorem = (c, cl, il) => {
  const A = P(270 - c / 2), B = P(270 + c / 2), C = P(90);
  return ring([...O, { seg: [[0, 0], A], color: "blue" }, { seg: [[0, 0], B], color: "blue" }, { seg: [C, A], color: "red" }, { seg: [C, B], color: "red" }, { arc: [A, [0, 0], B], label: cl, r: 0.26 }, { arc: [A, C, B], label: il, r: 0.62 }, name("A", 270 - c / 2), name("B", 270 + c / 2), name("C", 90)]);
};
const dist = (pts, o = {}) => planeDoc({ view: { xmin: 0, xmax: o.xmax ?? 60, ymin: 0, ymax: o.ymax ?? 10 }, segs: [{ pts }], points: o.points ?? [], xlabel: o.xlabel ?? "time (min)", ylabel: o.ylabel ?? "distance (km)", step: o.step ?? { x: 10, y: 2 } });
const semi = (cx, cy, r, from = 0, to = 180) => Array.from({ length: 41 }, (_, i) => { const a = ((from + ((to - from) * i) / 40) * Math.PI) / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; });
const silo = (r, h, lr, lh) => figDoc({ w: 210, items: [{ poly: [[-r, 0], [r, 0], [r, h], ...semi(0, h, r), [-r, h]], fill: "violet", color: "violet" }, { ellipse: [0, h, r, r * 0.25], color: "violet", dash: true }, { ellipse: [0, 0, r, r * 0.25], color: "violet", half: "bottom" }, { seg: [[0, h], [r, h]], color: "red" }, tx(lr, [r * 0.05, h + r * 0.1], { color: "red" }), { dim: [[r, 0], [r, h]], label: lh, off: -0.08 }] });

const rect = (x, y) => [[-x, -y], [x, -y], [x, y], [-x, y]];
const isos = figDoc({ w: 260, items: [{ poly: [[0, 8], [-6, 0], [6, 0]], fill: "blue", color: "blue" }, { seg: [[0, 8], [0, 0]], color: "red", dash: true }, { right: [[0, 8], [0, 0], [6, 0]] }, tx("12", [-0.6, -1]), tx("10", [-4.4, 4.4]), tx("10", [3.4, 4.4])] });
const rhomb = (a, b) => figDoc({ w: 270, items: [{ poly: [[-b / 2, 0], [0, a / 2], [b / 2, 0], [0, -a / 2]], fill: "blue", color: "blue" }, { seg: [[-b / 2, 0], [b / 2, 0]], color: "red", dash: true }, { seg: [[0, -a / 2], [0, a / 2]], color: "red", dash: true }, tx(String(b), [b * 0.2, a * 0.04], { color: "red" }), tx(String(a), [b * 0.02, a * 0.26], { color: "red" })] });
const sqInCircle = (lab, seg, at) => ring([{ poly: [P(45), P(135), P(225), P(315)], fill: "blue", color: "blue" }, { dot: [0, 0] }, { seg, color: "red" }, tx(lab, at, { color: "red" })], 230);
const ringPath = (o, i, a) => figDoc({ w: 330, items: [{ poly: rect(...o), fill: "amber", color: "amber" }, { poly: rect(...i), fill: "blue", color: "blue" }, ...a] });

const tri = (() => { const t = Math.tan((17 * Math.PI) / 180), u = Math.tan((68 * Math.PI) / 180), x = (4 * u) / (u - t); return { A: [0, 0], C: [4, 0], D: [7, 0], B: [x, x * t] }; })();
const isoApex = [0, Math.tan((65 * Math.PI) / 180)];
const T64 = [1 / Math.cos((64 * Math.PI) / 180), 0], T55 = [1 / Math.cos((55 * Math.PI) / 180), 0], T56 = [1 / Math.cos((56 * Math.PI) / 180), 0];

export const FIG = {
  // chapter 4
  walk: dist([[0, 0], [20, 8]], { xmax: 30, points: [{ x: 20, y: 8, label: "(20, 8)" }] }),
  wall: dist([[0, 6], [6, 0], [12, 6]], { xmax: 12, ymax: 8, xlabel: "time (s)", ylabel: "distance from wall (m)", step: { x: 2, y: 2 } }),
  line52: dist([[0, 0], [10, 4]], { xmax: 10, ymax: 5, points: [{ x: 5, y: 2, label: "(5, 2)" }], step: { x: 1, y: 1 } }),
  xy12: planeDoc({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 10 }, curves: [{ f: (x) => 12 / x, a: 1.2 }], points: [{ x: 2, y: 6, label: "(2, 6)" }, { x: 3, y: 4, label: "(3, 4)" }, { x: 4, y: 3, label: "(4, 3)" }] }),
  plan: planeDoc({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 80 }, lines: [{ m: 0.15, b: 20, color: "blue" }], points: [{ x: 0, y: 20, label: "(0, 20)" }, { x: 200, y: 50, label: "(200, 50)" }], xlabel: "minutes", ylabel: "cost", step: { x: 50, y: 10 } }),
  slope15: planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1.5, b: -1 }], points: [{ x: 0, y: -1 }, { x: 2, y: 2 }] }),
  taxi: planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 25 }, lines: [{ m: 1.6, b: 3.75, color: "blue" }], points: [{ x: 0, y: 3.75, label: "(0, 3.75)" }], xlabel: "distance (km)", ylabel: "fare (dollars)", step: { x: 2, y: 5 } }),
  rental: planeDoc({ view: { xmin: 0, xmax: 400, ymin: 0, ymax: 160 }, lines: [{ m: 0.25, b: 40, color: "blue" }], xlabel: "distance (km)", ylabel: "cost (dollars)", step: { x: 100, y: 40 } }),
  ineq: planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1, b: 2, color: "blue" }], shade: { m: 1, b: 2, above: true } }),
  family: planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 10 }, height: 420, lines: [-2, -1, 0, 1, 2].map((m, i) => ({ m, b: 4, color: ["red", "amber", "gray", "green", "blue"][i] })), step: { x: 2, y: 2 } }),
  road: planeDoc({ view: { xmin: 0, xmax: 18, ymin: 0, ymax: 14 }, lines: [{ m: -0.75, b: 12, color: "blue", label: "road", lx: 10 }], points: [{ x: 0, y: 0, label: "town (0, 0)" }], step: { x: 2, y: 2 } }),
  // chapter 6
  bars92: barChartDoc({ bars: [["X", 92], ["Y", 98]], base: 90, top: 100, step: 2 }),
  bars55: barChartDoc({ bars: [["A", 55], ["B", 70]], base: 50, top: 72, step: 5 }),
  hist40: histogramDoc({ bins: [[140, 150, 2], [150, 160, 8], [160, 170, 15], [170, 180, 10], [180, 190, 5]], xlabel: "height (cm)", ystep: 5 }),
  box25: boxPlotDoc({ five: [25, 34, 40, 48, 60], lo: 20, hi: 64, step: 4, showValues: true }),
  box20: boxPlotDoc({ five: [14, 20, 25, 32, 40], lo: 10, hi: 44, step: 2, showValues: true }),
  boxAB: figDoc({ w: 420, items: [{ seg: [[10, 0], [40, 0]], color: "gray" }, ...[10, 20, 30, 40].map((x) => tx(String(x), [x - 0.5, -1.1], { color: "gray" })), ...[["A", 4.5, 22, 22, 25, 28, 28, "blue"], ["B", 1.5, 12, 17.5, 25, 32.5, 38, "red"]].flatMap(([n, y, a, b, m, c, d, col]) => [tx(n, [8.4, y - 0.25], { bold: true }), { seg: [[a - (n === "A" ? 4 : 0), y], [b, y]], color: col }, { seg: [[c, y], [d + (n === "A" ? 4 : 0), y]], color: col }, { poly: [[b, y - 0.9], [c, y - 0.9], [c, y + 0.9], [b, y + 0.9]], fill: col, color: col }, { seg: [[m, y - 0.9], [m, y + 0.9]], color: col }])] }),
  run: dist([[0, 0], [12, 3], [30, 6]], { xmax: 36, ymax: 8, points: [{ x: 12, y: 3, label: "(12, 3)" }, { x: 30, y: 6, label: "(30, 6)" }], step: { x: 6, y: 1 } }),
  fall9: dist([[0, 0], [20, 9], [30, 9], [45, 0]], { xmax: 70, ymax: 10, ylabel: "distance from home (km)", points: [{ x: 30, y: 9, label: "(30, 9)" }, { x: 45, y: 0, label: "(45, 0)" }] }),
  stop: planeDoc({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 2400 }, segs: [{ pts: [[0, 0], [20, 1600], [35, 1600], [45, 2400], [60, 2400]] }], step: { x: 10, y: 400 }, xlabel: "time (min)", ylabel: "distance (m)" }),
  stopping: scatterDoc({ pts: [[20, 6], [40, 18], [60, 35], [80, 58], [100, 86]], view: { xmin: 0, xmax: 120, ymin: 0, ymax: 100 }, step: { x: 20, y: 20 }, xlabel: "speed (km/h)", ylabel: "stopping distance (m)" }),
  predict: scatterDoc({ pts: [[1, 9], [2, 17], [3, 21], [4, 29], [5, 33], [6, 41]], view: { xmin: 0, xmax: 10, ymin: 0, ymax: 60 }, step: { x: 1, y: 10 }, line: { m: 6, b: 4 } }),
  spend: barChartDoc({ bars: [["needs", 1300], ["wants", 500], ["savings", 300]], base: 0, top: 1500, step: 300, ylabel: "dollars" }),
  // chapter 5: circles and angles
  cyclic: ring([{ poly: [P(165), P(80), P(10), P(265)], fill: "blue", color: "blue" }, { arc: [P(165), P(80), P(10)], label: "98°", r: 0.28 }, name("A", 165), name("B", 80), name("C", 10), name("D", 265)]),
  oab: ring([...O, { seg: [[0, 0], P(204)], color: "blue" }, { seg: [[0, 0], P(336)], color: "blue" }, { seg: [P(204), P(336)], color: "blue" }, { seg: [P(90), P(204)], color: "red" }, { seg: [P(90), P(336)], color: "red" }, { arc: [[0, 0], P(204), P(336)], label: "24°", r: 0.42 }, name("A", 204), name("B", 336), name("C", 90)]),
  tanP: figDoc({ w: 330, items: [{ circle: [0, 0, 1], color: "ink" }, { seg: [T64, P(64)], color: "blue" }, { seg: [T64, P(-64)], color: "blue" }, { seg: [P(180), P(64)], color: "red" }, { seg: [P(180), P(-64)], color: "red" }, { arc: [P(64), T64, P(-64)], label: "52°", r: 0.42 }, name("A", 64), name("B", -64), name("P", 180), tx("T", [T64[0] + 0.06, -0.05], { bold: true })] }),
  tanT: figDoc({ w: 310, items: [{ circle: [0, 0, 1], color: "ink" }, ...O, { seg: [[0, 0], P(55)], color: "gray" }, { seg: [[0, 0], P(-55)], color: "gray" }, { seg: [T55, P(55)], color: "blue" }, { seg: [T55, P(-55)], color: "blue" }, { arc: [P(55), [0, 0], P(-55)], label: "110°", r: 0.28 }, name("A", 55), name("B", -55), tx("T", [T55[0] + 0.06, -0.05], { bold: true })] }),
  tanP13: figDoc({ w: 330, items: [{ circle: [0, 0, 5], color: "ink" }, { dot: [0, 0] }, tx("O", [-0.7, -0.8], { bold: true }), { seg: [[0, 0], [25 / 13, 60 / 13]], color: "gray" }, { seg: [[13, 0], [25 / 13, 60 / 13]], color: "blue" }, { seg: [[0, 0], [13, 0]], color: "red", dash: true }, { right: [[0, 0], [25 / 13, 60 / 13], [13, 0]] }, tx("5", [0.3, 2.6]), tx("12", [7.8, 3.1], { color: "blue" }), tx("A", [1.6, 5.3], { bold: true }), tx("P", [13.2, -0.2], { bold: true })] }),
  tanOAT: figDoc({ w: 320, items: [{ circle: [0, 0, 1], color: "ink" }, ...O, { seg: [[0, 0], P(56)], color: "gray" }, { seg: [T56, P(56)], color: "blue" }, { seg: [[0, 0], T56], color: "gray" }, { right: [[0, 0], P(56), T56] }, { arc: [P(56), T56, [0, 0]], label: "34°", r: 0.42 }, name("A", 56), tx("T", [T56[0] + 0.05, -0.08], { bold: true })] }),
  extC: figDoc({ w: 340, items: [{ poly: [tri.A, tri.C, tri.B], fill: "blue", color: "blue" }, { seg: [tri.C, tri.D], color: "gray", dash: true }, { arc: [tri.A, tri.B, tri.C], label: "51°", r: 0.9 }, tx("A", [-0.45, -0.1], { bold: true }), tx("C", [3.9, -0.55], { bold: true }), tx("B", [tri.B[0], tri.B[1] + 0.25], { bold: true })] }),
  semi68: ring([{ poly: [[-1, 0], [1, 0], [-0.28, 0.96]], fill: "blue", color: "blue" }, tx("6", [-0.56, 0.34]), tx("8", [0.42, 0.56]), name("A", 180), name("B", 0), tx("C", [-0.34, 1.06], { bold: true })]),
  semi27: ring([{ poly: [[-1, 0], [1, 0], P(54)], fill: "blue", color: "blue" }, { arc: [[1, 0], [-1, 0], P(54)], label: "27°", r: 0.5 }, name("A", 180), name("B", 0), name("C", 54)]),
  sameArc: ring([{ seg: [P(120), P(210)], color: "blue" }, { seg: [P(120), P(330)], color: "blue" }, { seg: [P(60), P(210)], color: "red" }, { seg: [P(60), P(330)], color: "red" }, { arc: [P(210), P(120), P(330)], label: "3x + 4", r: 0.42 }, { arc: [P(210), P(60), P(330)], label: "5x − 12", r: 0.42 }, name("A", 210), name("B", 330), name("P", 120), name("Q", 60)]),
  chordAlg: arcTheorem(70, "4x − 10", "x + 15"),
  arc100: arcTheorem(100, "100°", "?"),
  arc25: arcTheorem(50, "?", "25°"),
  arc124: arcTheorem(124, "124°", "?"),
  radii80: ring([{ dot: [0, 0] }, tx("O", [-0.05, 0.07], { bold: true }), { poly: [[0, 0], P(230), P(310)], fill: "blue", color: "blue" }, { arc: [P(230), [0, 0], P(310)], label: "80°", r: 0.24 }, name("A", 230), name("B", 310)]),
  radiiEq: ring([...O, { poly: [[0, 0], P(240), P(300)], fill: "blue", color: "blue" }, name("A", 240), name("B", 300), tx("r", [-0.42, -0.42]), tx("r", [0.32, -0.42]), tx("r", [-0.04, -1.08])]),
  isoExt: figDoc({ w: 280, items: [{ poly: [isoApex, [-1, 0], [1, 0]], fill: "blue", color: "blue" }, { seg: [[-1, 0], [-2, 0]], color: "gray", dash: true }, { arc: [isoApex, [-1, 0], [-2, 0]], label: "115°", r: 0.28 }, tx("A", [-0.05, isoApex[1] + 0.12], { bold: true }), tx("B", [-1.02, -0.26], { bold: true }), tx("C", [0.98, -0.26], { bold: true })] }),
  pentagon: ring([{ poly: [0, 1, 2, 3, 4].map((i) => P(90 + 72 * i)), fill: "blue", color: "blue" }, ...[0, 1, 2, 3, 4].map((i) => ({ seg: [[0, 0], P(90 + 72 * i)], color: "blue" })), { dot: [0, 0] }]),
  // chapter 5: Pythagoras
  ladderSlide: figDoc({ w: 260, items: [{ seg: [[0, 0], [0, 8]], color: "ink" }, { seg: [[0, 0], [3.4, 0]], color: "ink" }, { right: [[0, 8], [0, 0], [3, 0]] }, { seg: [[2.1, 0], [0, 7.2]], color: "blue" }, { seg: [[2.7, 0], [0, Math.sqrt(7.5 * 7.5 - 2.7 * 2.7)]], color: "red", dash: true }, tx("7.5 m", [1.3, 4.1], { color: "blue" }), tx("7.2 m", [-1.3, 3.6]), tx("0.6 m", [2.05, -0.55], { color: "red" })] }),
  ladder53: figDoc({ w: 210, items: [{ seg: [[0, 0], [0, 4.6]], color: "ink" }, { seg: [[0, 0], [3.6, 0]], color: "ink" }, { right: [[0, 4], [0, 0], [3, 0]] }, { seg: [[3, 0], [0, 4]], color: "blue" }, tx("5 m", [1.7, 2.2], { color: "blue" }), tx("3 m", [1.2, -0.45])] }),
  pole: figDoc({ w: 280, items: [{ poly: [[0, 0], [9, 0], [0, 12]], color: "blue" }, { seg: [[9, 0], [0, 6]], color: "red" }, { dot: [0, 6] }, { right: [[0, 12], [0, 0], [9, 0]] }, tx("12 m", [-2.2, 8.5]), tx("9 m", [4, -1])] }),
  sqR5: sqInCircle("r = 5", [[0, 0], P(45)], [-0.12, 0.34]),
  sqD10: sqInCircle("10 cm", [P(180), P(0)], [-0.18, 0.08]),
  rhomb1630: rhomb(16, 30),
  rhomb1024: rhomb(10, 24),
  isos1012: isos,
  ramp: figDoc({ w: 280, items: [{ poly: [[0, 0], [12, 0], [12, 5]], fill: "blue", color: "blue" }, { right: [[0, 0], [12, 0], [12, 5]] }, tx("13 m", [4.6, 3.5], { color: "blue" }), tx("5 m", [10.5, 2.3])] }),
  // chapter 5: perimeter and area
  norman: figDoc({ w: 200, items: [{ poly: [[-0.6, 0], [0.6, 0], [0.6, 1.5], ...semi(0, 1.5, 0.6), [-0.6, 1.5]], fill: "blue", color: "blue" }, { seg: [[-0.6, 1.5], [0.6, 1.5]], color: "gray", dash: true }, tx("1.2 m", [-0.16, -0.14]), tx("1.5 m", [0.22, 0.7])] }),
  frame: ringPath([15, 12], [12, 9], [tx("24 cm", [-2.6, 7.4]), tx("18 cm", [8, -0.4]), tx("x", [-13.8, -0.4], { bold: true, color: "amber" })]),
  threeCircles: figDoc({ w: 330, items: [{ poly: [[0, 0], [12, 0], [12, 4], [0, 4]], color: "ink" }, ...[2, 6, 10].map((x) => ({ circle: [x, 2, 2], fill: "blue", color: "blue" })), { seg: [[2, 2], [4, 2]], color: "red" }, tx("2", [2.8, 2.25], { color: "red" })] }),
  pond: figDoc({ w: 280, items: [{ circle: [0, 0, 23], color: "amber", dash: true }, { circle: [0, 0, 20], fill: "blue", color: "blue" }, { seg: [[0, 0], [20, 0]], color: "red" }, { seg: [[20, 0], [23, 0]], color: "ink" }, tx("20 m", [7, 1.4], { color: "red" }), tx("3 m", [19.3, 2.4])] }),
  track: figDoc({ w: 340, items: [{ poly: [[-50, -30], [50, -30], ...semi(50, 0, 30, -90, 90), [-50, 30], ...semi(-50, 0, 30, 90, 270)], fill: "green", color: "green" }, { seg: [[-50, -30], [-50, 30]], color: "gray", dash: true }, { seg: [[50, -30], [50, 30]], color: "gray", dash: true }, tx("100 m", [-11, 22]), tx("60 m", [38, -3])] }),
  pool: ringPath([12, 8], [10, 6], [tx("20 m", [-2, 3]), tx("12 m", [5.7, -0.5]), tx("2 m", [-11.6, -0.4], { size: 11 })]),
  garden: figDoc({ w: 260, items: [{ poly: [[-5, 0], [5, 0], [5, 6], ...semi(0, 6, 5), [-5, 6]], fill: "green", color: "green" }, { seg: [[-5, 6], [5, 6]], color: "gray", dash: true }, tx("10 m", [-1.1, 6.35]), tx("6 m", [3.3, 2.8])] }),
  sqPath: ringPath([6, 6], [5, 5], [tx("10 m", [-1.3, 0]), tx("1 m", [-5.75, 0], { size: 11 })]),
  para964: figDoc({ w: 280, items: [{ poly: [[0, 0], [9, 0], [12, 4], [3, 4]], fill: "blue", color: "blue" }, { seg: [[3, 0], [3, 4]], color: "red", dash: true }, { right: [[0, 0], [3, 0], [3, 4]] }, tx("9", [5, -0.8]), tx("6", [0.6, 2.2]), tx("4", [3.35, 1.8], { color: "red" })] }),
  para85: figDoc({ w: 260, items: [{ poly: [[0, 0], [8, 0], [10, 5], [2, 5]], fill: "blue", color: "blue" }, { seg: [[2, 0], [2, 5]], color: "red", dash: true }, { right: [[0, 0], [2, 0], [2, 5]] }, tx("8", [4.5, -0.8]), tx("5", [2.4, 2.3], { color: "red" })] }),
  trap: figDoc({ w: 260, items: [{ poly: [[0, 0], [10, 0], [8, 4], [2, 4]], fill: "blue", color: "blue" }, { seg: [[2, 0], [2, 4]], color: "red", dash: true }, { right: [[0, 0], [2, 0], [2, 4]] }, tx("10", [4.6, -0.7]), tx("6", [4.7, 4.35]), tx("4", [2.35, 1.8], { color: "red" })] }),
  isos1324: figDoc({ w: 280, items: [{ poly: [[-12, 0], [12, 0], [0, 5]], fill: "blue", color: "blue" }, tx("24 cm", [-2.2, -1.5]), tx("13 cm", [-9, 3.2]), tx("13 cm", [6.5, 3.5])] }),
  // chapter 5: solids
  silo412: silo(4, 12, "r = 4 m", "12 m"),
  silo310: silo(3, 10, "r = 3 m", "10 m"),
  silo58: silo(5, 8, "r = 5", "8"),
  frustum: figDoc({ w: 240, items: [{ poly: [[-6, 0], [6, 0], [3, 6], [-3, 6]], fill: "amber", color: "amber" }, { poly: [[-3, 6], [3, 6], [0, 12]], color: "gray", dash: true }, { seg: [[0, 0], [6, 0]], color: "red" }, { seg: [[0, 6], [3, 6]], color: "red" }, { seg: [[-7.5, 0], [-7.5, 12]], color: "gray" }, { seg: [[4.5, 6], [4.5, 12]], color: "gray" }, tx("r = 6", [1.6, -1]), tx("r = 3", [0.2, 6.3]), tx("h = 6", [4.8, 8.8]), tx("h = 12", [-11.5, 5.8])] }),
  openBox: figDoc({ w: 300, items: [{ poly: [[0, 0], [40, 0], [40, 30], [0, 30]], fill: "blue", color: "blue" }, ...[[0, 0], [35, 0], [35, 25], [0, 25]].map(([x, y]) => ({ poly: [[x, y], [x + 5, y], [x + 5, y + 5], [x, y + 5]], fill: "#ffffff", color: "red", dash: true })), tx("40 cm", [17, -2.6]), tx("30 cm", [32, 14]), tx("5", [1.5, 1.2], { color: "red" })] }),
  cylCube: figDoc({ w: 220, items: [{ poly: [[0, 0], [8, 0], [8, 8], [0, 8]], color: "ink" }, { ellipse: [4, 8, 4, 1], color: "violet" }, { ellipse: [4, 0, 4, 1], color: "violet", half: "bottom" }, { seg: [[0, 0], [0, 8]], color: "violet" }, { seg: [[8, 0], [8, 8]], color: "violet" }, tx("8 cm", [3.2, -1.8])] }),
  sphCube: figDoc({ w: 220, items: [{ poly: [[0, 0], [6, 0], [6, 6], [0, 6]], color: "ink" }, { circle: [3, 3, 3], fill: "green", color: "green" }, tx("6 cm", [2.4, -0.7])] }),
  bowl: figDoc({ w: 240, items: [{ poly: semi(0, 0, 9, 180, 360), fill: "blue", color: "blue" }, { ellipse: [0, 0, 9, 2], color: "blue" }, { seg: [[0, 0], [9, 0]], color: "red" }, tx("9 cm", [3, 0.5], { color: "red" })] }),
  hemi6: figDoc({ w: 240, items: [{ poly: semi(0, 0, 6), fill: "green", color: "green" }, { ellipse: [0, 0, 6, 1.4], color: "green" }, { seg: [[0, 0], [6, 0]], color: "red" }, tx("6 cm", [2.2, 0.4], { color: "red" })] }),
  cubeHole: figDoc({ w: 250, items: [...prism(4, 4, 4, { ll: "4", lw: "4", lh: "4" }), { poly: [[1, 1], [3, 1], [3, 3], [1, 3]], fill: "#ffffff", color: "red" }, tx("2", [1.85, 1.2], { color: "red" })] }),
};

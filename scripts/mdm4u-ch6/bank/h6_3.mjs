// 6.3 The Coefficient of Determination & Prediction — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterSvg, barsSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { corr, linreg, sum, mean } from "../../mdm4u/count.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const r2 = (v) => Math.round(v * 100) / 100;
const ss = (xs, ys) => { const L = linreg(xs, ys), m = mean(ys); return { L, T: sum(ys.map((y) => (y - m) ** 2)), E: sum(ys.map((y, i) => (y - (L.a * xs[i] + L.b)) ** 2)) }; };
const A = ss([1, 2, 3, 4, 5, 6], [5, 8, 8, 12, 13, 17]);
const sx = [15, 20, 25, 30, 35, 40], sy = [210, 260, 330, 360, 420, 470]; // ad spending vs visitors
const Ls = linreg(sx, sy);

export const TOPIC = "6.3 The Coefficient of Determination & Prediction";
export const Q = [
  num("For x: 1–6 and y: 5, 8, 8, 12, 13, 17, find SSE for the least-squares line (3 decimals).", r3(A.E), "Σ(y − ŷ)².", tableSvg([["x", "1", "2", "3", "4", "5", "6"], ["y", "5", "8", "8", "12", "13", "17"]]), 0.002),
  num("For x: 1–6 and y: 5, 8, 8, 12, 13, 17, find r² from SSE and SST (3 decimals).", r3(1 - A.E / A.T), "1 − SSE/SST.", tableSvg([["x", "1", "2", "3", "4", "5", "6"], ["y", "5", "8", "8", "12", "13", "17"]]), 0.002),
  num("For x: 1–6 and y: 5, 8, 8, 12, 13, 17, find r and square it (3 decimals).", r3(corr([1, 2, 3, 4, 5, 6], [5, 8, 8, 12, 13, 17]) ** 2), "They agree.", null, 0.002),
  num(`Weekly ad spending (hundreds of dollars) x: ${sx.join(", ")} and visitors y: ${sy.join(", ")}. Predict visitors for 28 (hundred dollars) (nearest whole number).`, Math.round(Ls.a * 28 + Ls.b), "Least-squares line, then substitute.", scatterSvg(sx.map((x, i) => [x, sy[i]]), { xmin: 10, xmax: 45, ymin: 150, ymax: 520, line: Ls }), 1),
  num(`For weekly ad spending x: ${sx.join(", ")} and visitors y: ${sy.join(", ")}, what percent of the variation in visitors is explained by ad spending (1 decimal)?`, Math.round(corr(sx, sy) ** 2 * 1000) / 10, "r² × 100.", null, 0.1),
  num("SST = 340, and the line explains 85% of the variation. Find SSE.", 51, "0.15 × 340.", null, 0.01),
  num("A regression has r² = 0.64, s_y = 10 and s_x = 4, with a negative slope. Find the slope.", -2, "r = −0.8; a = r s_y/s_x.", null, 0.001),
  num("For a data set, SSE = 45 and SST = 180. If one outlier is removed, SSE drops to 12 and SST to 150. By how much does r² increase (3 decimals)?", r3(1 - 12 / 150 - (1 - 45 / 180)), "0.92 − 0.75.", null, 0.002),
  num("The bar graph shows SST and the SSE of two models fitted to one data set. Find the difference in r² (model 2 − model 1).", r3((1 - 40 / 200) - (1 - 90 / 200)), "0.8 − 0.55.", barsSvg([200, 90, 40], { labels: ["SST", "SSE model 1", "SSE model 2"], top: true }), 0.002),
  mc("The plot shows a line fitted to data for x from 1 to 6, with a prediction marked at x = 15. The main concern is…", "extrapolation: the trend may not continue", ["interpolation error", "r² is too low", "the residuals are 0"], "x = 15 is far outside 1–6.", scatterSvg([[1, 3], [2, 5], [3, 6], [4, 8], [5, 9], [6, 11]], { xmin: 0, xmax: 16, ymin: 0, ymax: 32, line: linreg([1, 2, 3, 4, 5, 6], [3, 5, 6, 8, 9, 11]), labels: [[15, 1.57 * 15 + 1.6, "?"]] })),
  ms("A company models sales (y) from months since launch (x, 1–12) with r² = 0.95. Which uses are reasonable? Select all.", ["estimate sales in month 7", "describe the trend over the first year", "predict sales in month 60 with confidence", "claim time causes sales"], [0, 1], "Interpolate and describe only."),
  tf("If r² = 1, every residual is 0.", true, "SSE = 0."),
  tf("Two data sets with the same r² must have the same regression line.", false, "Many lines share an r²."),
  num("A model explains 70% of the variation, and SSE = 33. Find SST.", 110, "33/0.3.", null, 0.01),
  num("r² = 0.5625 and the regression slope is negative. Find r.", -0.75, "−√0.5625.", null, 0.001),
  num("A line ŷ = 2.4x + 10 was fitted for x from 0 to 20. A student predicts at x = 25. Find ŷ (an extrapolation).", 70, "60 + 10.", null, 0.001),
  mc("Adding more data points far outside the original x-range usually…", "tests whether the linear trend continues", ["guarantees a higher r²", "makes extrapolation safe", "changes nothing"], "New range, new evidence."),
  num("For x: 2, 3, 5, 6, 9 and y: 8, 9, 14, 13, 20, predict y at x = 7 (3 decimals).", r3(linreg([2, 3, 5, 6, 9], [8, 9, 14, 13, 20]).a * 7 + linreg([2, 3, 5, 6, 9], [8, 9, 14, 13, 20]).b), "Find the line first.", null, 0.002),
  num("For x: 2, 3, 5, 6, 9 and y: 8, 9, 14, 13, 20, find the residual at x = 6 for the least-squares line (3 decimals).", r3(13 - (linreg([2, 3, 5, 6, 9], [8, 9, 14, 13, 20]).a * 6 + linreg([2, 3, 5, 6, 9], [8, 9, 14, 13, 20]).b)), "13 − ŷ.", null, 0.002),
  mc("A study reports r² = 0.04 between screen time and sleep. The best interpretation is…", "screen time explains only about 4% of the variation in sleep", ["screen time has no effect on anyone", "the relationship is strong", "4% of people sleep less"], "Small r²."),
];

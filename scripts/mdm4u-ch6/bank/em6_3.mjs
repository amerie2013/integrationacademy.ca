// 6.3 The Coefficient of Determination & Prediction — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterSvg, barsSvg } from "../../mdm4u/figs.mjs";
import { corr, linreg, sum, mean } from "../../mdm4u/count.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const sq = (r) => num(`r = ${r}. Find r² (4 decimals).`, Math.round(r * r * 1e4) / 1e4, "Square r.", null, 0.0002);
const fromSS = (sst, sse) => num(`SST = ${sst} and SSE = ${sse}. Find r² (3 decimals).`, r3(1 - sse / sst), "r² = 1 − SSE/SST.", null, 0.002);
const ip = (lo, hi, x) => mc(`A line was fitted for x from ${lo} to ${hi}. A prediction at x = ${x} is…`, x >= lo && x <= hi ? "interpolation" : "extrapolation", [x >= lo && x <= hi ? "extrapolation" : "interpolation", "a residual", "a correlation"], "Inside or outside the data range?");

export const E = [
  sq(0.9),
  sq(-0.7),
  sq(0.45),
  sq(-0.95),
  fromSS(100, 20),
  fromSS(250, 75),
  fromSS(80, 8),
  num("r² = 0.64. What percent of the variation in y is explained by x?", 64, "Proportion as a percent."),
  num("r² = 0.81 and the slope is positive. Find r.", 0.9, "Positive root.", null, 0.001),
  num("r² = 0.49 and the slope is negative. Find r.", -0.7, "Same sign as the slope.", null, 0.001),
  ip(0, 50, 30),
  ip(0, 50, 80),
  ip(10, 20, 9),
  mc("r² measures…", "the proportion of variation in y explained by the linear relationship", ["the slope of the line", "the number of outliers", "whether x causes y"], "Definition."),
  tf("r² can be negative for a line of best fit.", false, "Between 0 and 1."),
  tf("A high r² proves that x causes y.", false, "Association only."),
  tf("Extrapolation is usually less reliable than interpolation.", true, "The trend may change."),
  num("Use ŷ = 1.8x + 32 to predict y at x = 25.", 77, "45 + 32."),
  num("Read the bar graph: SST and SSE are shown. Find r².", 0.75, "1 − 30/120.", barsSvg([120, 30], { labels: ["SST", "SSE"], top: true }), 0.001),
  mc("Which plot most likely has r² near 1?", "points lying almost exactly on a line", ["a shapeless cloud", "a U-shaped curve", "two separate clusters"], "Little unexplained variation.", scatterSvg([[1, 2], [2, 4.1], [3, 5.9], [4, 8], [5, 10.1]], { xmin: 0, xmax: 6, ymin: 0, ymax: 12 })),
];

const mx = [2, 4, 6, 8, 10], my = [3, 7, 6, 10, 12];
const L = linreg(mx, my), m = mean(my), SST = sum(my.map((y) => (y - m) ** 2)), SSE = sum(my.map((y, i) => (y - (L.a * mx[i] + L.b)) ** 2));
export const M = [
  num(`For x: ${mx.join(", ")}; y: ${my.join(", ")}, find SST.`, r3(SST), "Σ(y − ȳ)².", null, 0.002),
  num(`For x: ${mx.join(", ")}; y: ${my.join(", ")}, find SSE for the least-squares line (3 decimals).`, r3(SSE), "Σ(y − ŷ)².", null, 0.002),
  num(`For x: ${mx.join(", ")}; y: ${my.join(", ")}, find r² (3 decimals).`, r3(1 - SSE / SST), "1 − SSE/SST.", null, 0.002),
  num("Find r² for x: 1, 2, 3, 4, 5, 6; y: 10, 9, 7, 6, 4, 2 (3 decimals).", r3(corr([1, 2, 3, 4, 5, 6], [10, 9, 7, 6, 4, 2]) ** 2), "Square r.", null, 0.002),
  num("SSE = 24 and r² = 0.88. Find SST.", 200, "24/0.12.", null, 0.01),
  num("SST = 500 and r = 0.8. Find SSE.", 180, "500(1 − 0.64).", null, 0.01),
  num("Model A has r = 0.6 and model B has r = 0.9 for the same y. How many percentage points more variation does B explain?", 45, "81% − 36%.", null, 0.01),
  num("Using ŷ = 0.15x + 2 (x = km driven, y = litres of fuel), predict the fuel for 240 km.", 38, "36 + 2."),
  num("Using ŷ = 6.5x + 75 (x = age 2–10, y = height in cm), predict the height at age 6.", 114, "39 + 75."),
  mc("Using ŷ = 6.5x + 75 (ages 2–10) to predict height at age 40 gives 335 cm. The problem is…", "extrapolation far outside the data", ["r² is too high", "the slope is negative", "a calculation error"], "Growth stops."),
  mc("Which statement about r and r² is true?", "r² has no sign, so it does not show direction", ["r² is always larger than r", "r² = 2r", "r² shows the slope"], "Squaring removes the sign."),
  ms("Which situations make a prediction less reliable? Select all.", ["x is outside the data range", "r² is low", "the pattern is curved but a line is used", "x is near the mean of the data", "the sample is very small"], [0, 1, 2, 4], "Near the mean is most reliable."),
  tf("If r = −0.9, then 81% of the variation in y is explained by the line.", true, "r² = 0.81."),
  tf("Doubling the sample size always doubles r².", false, "r² depends on the pattern, not n."),
  num("The graph shows data with a line of best fit. Its r is " + r3(corr([1, 2, 3, 4, 5, 6], [4, 3, 6, 5, 8, 7])) + ". Find r² (3 decimals).", r3(corr([1, 2, 3, 4, 5, 6], [4, 3, 6, 5, 8, 7]) ** 2), "Square r.", scatterSvg([[1, 4], [2, 3], [3, 6], [4, 5], [5, 8], [6, 7]], { xmin: 0, xmax: 7, ymin: 0, ymax: 10, line: linreg([1, 2, 3, 4, 5, 6], [4, 3, 6, 5, 8, 7]) }), 0.002),
  num("The bar graph shows explained and unexplained variation. Find r² (3 decimals).", r3(150 / 200), "explained ÷ total.", barsSvg([150, 50], { labels: ["explained", "unexplained"], top: true }), 0.002),
  num("r² = 0.36. What percent of the variation in y is NOT explained by the line?", 64, "100 − 36."),
  mc("A model has r² = 0.98 but its residual plot is U-shaped. The best conclusion is…", "a curved model would fit better", ["the model is perfect", "r² is wrong", "remove the residuals"], "Pattern in residuals."),
  num("A line is fitted for x from 5 to 25. Of x = 3, 12, 24, 30, how many predictions are interpolations?", 2, "12 and 24."),
  num("r = 0.5 for one data set and r = −0.5 for another. Find the sum of their r² values.", 0.5, "0.25 + 0.25.", null, 0.001),
];

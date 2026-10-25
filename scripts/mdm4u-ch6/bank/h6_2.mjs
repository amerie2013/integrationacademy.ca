// 6.2 Correlation & Linear Regression — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { linreg, corr, sum } from "../../mdm4u/count.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const hx = [12, 15, 18, 21, 24, 27], hy = [118, 134, 151, 160, 179, 190]; // temperature vs drinks sold
const Lh = linreg(hx, hy);

export const TOPIC = "6.2 Correlation & Linear Regression";
export const Q = [
  num("For x: 12, 15, 18, 21, 24, 27 (°C) and y: 118, 134, 151, 160, 179, 190 (drinks sold), find the slope (3 decimals).", r3(Lh.a), "Technology or formula.", scatterSvg(hx.map((x, i) => [x, hy[i]]), { xmin: 10, xmax: 30, ymin: 100, ymax: 200, line: Lh }), 0.002),
  num("For x: 12, 15, 18, 21, 24, 27 (°C) and y: 118, 134, 151, 160, 179, 190 (drinks sold), predict sales at 20°C using the least-squares line (1 decimal).", Math.round((Lh.a * 20 + Lh.b) * 10) / 10, "Substitute into the line.", null, 0.1),
  num("For x: 12, 15, 18, 21, 24, 27 (°C) and y: 118, 134, 151, 160, 179, 190 (drinks sold), find the residual for 21°C using the least-squares line (1 decimal).", Math.round((160 - (Lh.a * 21 + Lh.b)) * 10) / 10, "160 − ŷ.", null, 0.1),
  num("r = 0.75, x̄ = 40, s_x = 8, ȳ = 120, s_y = 20. Predict y at x = 48.", 135, "a = 0.75(20/8) = 1.875; ŷ = 120 + 1.875(8).", null, 0.01),
  num("r = 0.75, x̄ = 40, s_x = 8, ȳ = 120, s_y = 20. Find the slope of the regression of x on y.", 0.3, "r s_x/s_y.", null, 0.001),
  num("A regression has slope 2.5 and r = 0.5. If s_x = 4, find s_y.", 20, "2.5 = 0.5 s_y/4.", null, 0.001),
  num("Residuals of a least-squares line are 1.2, −0.4, x, 2.1, −1.8, −0.6. Find x.", -0.5, "They add to 0.", null, 0.001),
  num("For n = 6: Σx = 30, Σy = 72, Σxy = 410, Σx² = 190. Predict y at x = 7 (3 decimals).", r3(((6 * 410 - 30 * 72) / (6 * 190 - 900)) * 7 + (12 - ((6 * 410 - 30 * 72) / (6 * 190 - 900)) * 5)), "a = 300/240 = 1.25; b = 12 − 6.25.", null, 0.002),
  num("The table gives data. Find the sum of the squared residuals for the least-squares line (3 decimals).", (() => { const x = [1, 2, 3, 4, 5], y = [2, 5, 5, 8, 9], L = linreg(x, y); return r3(sum(y.map((v, i) => (v - (L.a * x[i] + L.b)) ** 2))); })(), "Find ŷ for each x; square and add the residuals.", tableSvg([["x", "1", "2", "3", "4", "5"], ["y", "2", "5", "5", "8", "9"]]), 0.002),
  num("For the data in the table, the line ŷ = 2x is proposed instead of the least-squares line. Find its sum of squared residuals.", sum([2, 5, 5, 8, 9].map((v, i) => (v - 2 * (i + 1)) ** 2)), "It must be larger than the least-squares value.", tableSvg([["x", "1", "2", "3", "4", "5"], ["y", "2", "5", "5", "8", "9"]])),
  mc("The plot shows the least-squares line and one point far above it. Which statement about its residual is true?", "it is large and positive", ["it is large and negative", "it is 0", "it equals the slope"], "Above the line.", scatterSvg([[1, 3], [2, 4], [3, 5.5], [4, 6], [5, 12], [6, 8]], { xmin: 0, xmax: 7, ymin: 0, ymax: 14, line: linreg([1, 2, 3, 4, 5, 6], [3, 4, 5.5, 6, 12, 8]), hl: [4] })),
  num("For x: 12, 15, 18, 21, 24, 27 (°C) and y: 118, 134, 151, 160, 179, 190 (drinks sold), the temperatures are converted to °F (F = 1.8C + 32). Find the new slope of the least-squares line (3 decimals).", r3(Lh.a / 1.8), "Each °F is 1/1.8 of a °C step.", null, 0.002),
  ms("A regression ŷ = −2.1x + 90 is found for x = minutes of commute, y = minutes of daily exercise. Which interpretations are reasonable? Select all.", ["each extra minute of commute goes with about 2.1 fewer minutes of exercise", "a person with no commute is predicted to exercise 90 minutes", "commuting causes less exercise", "r must be negative"], [0, 1, 3], "Causation is not shown."),
  tf("If every residual of a line is positive, it cannot be the least-squares line.", true, "Least-squares residuals add to 0."),
  tf("Adding a constant c to every y-value changes the slope by c.", false, "Only the intercept changes."),
  mc("Two variables have r = 0. The least-squares line is…", "horizontal at ȳ", ["vertical", "y = x", "undefined"], "Slope = r s_y/s_x = 0."),
  num("A line through (x̄, ȳ) = (8, 50) has slope −3. A point (10, 47) is in the data. Find its residual.", 3, "ŷ = 44.", null, 0.001),
  num("Find the slope of the least-squares line through (0, 1), (1, 3), (2, 2), (3, 6), (4, 8) (3 decimals).", r3(linreg([0, 1, 2, 3, 4], [1, 3, 2, 6, 8]).a), "Technology.", scatterSvg([[0, 1], [1, 3], [2, 2], [3, 6], [4, 8]], { xmin: -1, xmax: 5, ymin: 0, ymax: 10, line: linreg([0, 1, 2, 3, 4], [1, 3, 2, 6, 8]) }), 0.002),
  mc("Why is the intercept of a regression of adult mass on height (cm) not meaningful?", "a height of 0 cm is far outside the data", ["the intercept is always 0", "mass cannot be predicted", "r is negative"], "Extrapolation."),
  num("For a data set r = 0.6. Find the product of the slopes of the regression of y on x and of x on y.", 0.36, "(r s_y/s_x)(r s_x/s_y) = r².", null, 0.001),
];

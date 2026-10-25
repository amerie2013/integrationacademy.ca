// 6.2 Correlation & Linear Regression — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { linreg } from "../../mdm4u/count.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const pred = (a, b, x) => num(`Using ŷ = ${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)}, predict y when x = ${x}.`, r3(a * x + b), "Substitute x.", null, 0.002);
const res = (a, b, x, y) => num(`For the line ŷ = ${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)}, find the residual of the point (${x}, ${y}).`, r3(y - (a * x + b)), "Residual = y − ŷ.", null, 0.002);
const slope = (n, sx, sy, sxy, sxx) => num(`For n = ${n}: Σx = ${sx}, Σy = ${sy}, Σxy = ${sxy}, Σx² = ${sxx}. Find the slope a (3 decimals).`, r3((n * sxy - sx * sy) / (n * sxx - sx * sx)), "a = [nΣxy − ΣxΣy]/[nΣx² − (Σx)²].", null, 0.002);
const fitA = (xs, ys) => num(`Find the slope of the least-squares line for x: ${xs.join(", ")}; y: ${ys.join(", ")} (3 decimals).`, r3(linreg(xs, ys).a), "Technology or formula.", null, 0.002);
const fitB = (xs, ys) => num(`Find the y-intercept of the least-squares line for x: ${xs.join(", ")}; y: ${ys.join(", ")} (3 decimals).`, r3(linreg(xs, ys).b), "b = ȳ − a x̄.", null, 0.002);

export const E = [
  pred(2, 5, 4),
  pred(1.5, -3, 10),
  pred(-0.8, 40, 25),
  pred(0.25, 12, 18),
  res(2, 1, 3, 9),
  res(3, -2, 5, 11),
  res(0.5, 10, 8, 15),
  num("A least-squares line has slope 2 and passes through (x̄, ȳ) = (5, 14). Find b.", 4, "b = ȳ − a x̄."),
  num("A least-squares line has slope −1.5, x̄ = 4, ȳ = 20. Find b.", 26, "20 + 6."),
  mc("The least-squares line minimizes…", "the sum of the squared residuals", ["the sum of the residuals", "the number of outliers", "the slope"], "Definition."),
  mc("The least-squares line always passes through…", "(x̄, ȳ)", ["the origin", "the first data point", "the largest data point"], "Property."),
  mc("A residual is…", "observed y − predicted ŷ", ["predicted − observed", "x − x̄", "the slope times x"], "Definition."),
  mc("In ŷ = 4.5x + 20 (x = hours worked, y = pay in dollars), the slope means…", "pay rises about 4.5 dollars per extra hour", ["the base pay is 4.5 dollars", "pay is 20 dollars per hour", "r = 4.5"], "Change in y per unit x."),
  tf("The residuals of a least-squares line add to 0.", true, "Property."),
  tf("A point above the line has a negative residual.", false, "Above: y > ŷ, positive."),
  tf("The slope of the least-squares line has the same sign as r.", true, "a = r s_y/s_x."),
  fitA([1, 2, 3, 4], [3, 5, 7, 9]),
  fitB([1, 2, 3, 4], [3, 5, 7, 9]),
  num("Read the graph: what is the slope of the red line?", 2, "It rises 2 for each 1 across.", scatterSvg([[1, 3], [2, 5.5], [3, 7], [4, 9.5], [5, 11]], { xmin: 0, xmax: 6, ymin: 0, ymax: 14, line: { a: 2, b: 1 } })),
  num("Read the graph: what is the y-intercept of the red line?", 1, "Value at x = 0.", scatterSvg([[1, 3], [2, 5.5], [3, 7], [4, 9.5], [5, 11]], { xmin: 0, xmax: 6, ymin: 0, ymax: 14, line: { a: 2, b: 1 } })),
];

export const M = [
  slope(5, 15, 40, 136, 55),
  slope(6, 21, 60, 238, 91),
  slope(8, 40, 120, 650, 240),
  fitA([2, 4, 6, 8, 10], [5, 9, 10, 15, 16]),
  fitB([2, 4, 6, 8, 10], [5, 9, 10, 15, 16]),
  fitA([1, 3, 5, 7, 9, 11], [30, 26, 25, 19, 17, 12]),
  fitB([1, 3, 5, 7, 9, 11], [30, 26, 25, 19, 17, 12]),
  num("r = 0.8, s_x = 5, s_y = 12. Find the slope of the regression of y on x.", 1.92, "a = r s_y/s_x.", null, 0.001),
  num("r = −0.5, s_x = 4, s_y = 6, x̄ = 10, ȳ = 30. Find the intercept.", 37.5, "a = −0.75; b = 30 + 7.5.", null, 0.001),
  num("n = 10, Σx = 60, Σy = 250, Σxy = 1640, Σx² = 400. Find the intercept b.", 4, "a = (16400 − 15000)/(4000 − 3600) = 3.5; b = 25 − 3.5(6).", null, 0.001),
  mc("For ŷ = −0.6x + 75 (x = hours of TV per week, y = mark), the intercept means…", "the predicted mark for a student who watches no TV is 75", ["TV lowers marks by 75", "the mark falls 0.6 per hour, starting at 0", "r = −0.6"], "Value at x = 0."),
  mc("A residual of −4 means the point is…", "4 units below the line", ["4 units above the line", "4 units to the left", "an error"], "y − ŷ < 0."),
  ms("Which are properties of the least-squares line? Select all.", ["passes through (x̄, ȳ)", "residuals sum to 0", "minimizes Σ(residual)²", "always passes through the origin", "has slope r"], [0, 1, 2], "Not through the origin in general."),
  tf("The regression line of y on x and the regression line of x on y are always the same.", false, "Only when |r| = 1."),
  tf("If all x-values are multiplied by 2, the slope is halved.", true, "Same y change over twice the x change."),
  num("Using the table, find the slope of the least-squares line (3 decimals).", r3(linreg([0, 1, 2, 3, 4], [3, 4, 6, 7, 10]).a), "n = 5.", tableSvg([["x", "0", "1", "2", "3", "4"], ["y", "3", "4", "6", "7", "10"]]), 0.002),
  num("The graph shows a regression line through (2, 8) and (10, 24). Find its slope.", 2, "16/8.", scatterSvg([[2, 9], [4, 11], [6, 16], [8, 19], [10, 23]], { xmin: 0, xmax: 12, ymin: 0, ymax: 30, line: { a: 2, b: 4 } })),
  num("A line ŷ = 3.2x + 6 is fitted to costs (dollars) for x items. How much more does each item add, in dollars?", 3.2, "The slope.", null, 0.001),
  num("A least-squares line is ŷ = 1.2x + b and passes through (x̄, ȳ) = (15, 30). Predict y at x = 20.", 36, "b = 12; 24 + 12."),
  mc("Prices are converted from dollars to cents (y × 100). The slope…", "is multiplied by 100", ["is unchanged", "is divided by 100", "becomes r"], "y is scaled."),
];

// 6.4 Non-Linear Regression & Modelling — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterSvg, residualPlotSvg } from "../../mdm4u/figs.mjs";
import { linreg, expreg } from "../../mdm4u/count.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const r2 = (v) => Math.round(v * 100) / 100;
const ev = (A, B, x) => num(`Evaluate ŷ = ${A}(${B})ˣ at x = ${x} (2 decimals).`, r2(A * B ** x), "Substitute.", null, 0.01);
const rate = (B) => num(`In ŷ = A(${B})ˣ, by what percent does ŷ change per unit of x? (Enter a negative number for a decrease.)`, r2((B - 1) * 100), "(B − 1) × 100%.", null, 0.01);
const qv = (a, b, c) => num(`Find the x-coordinate of the vertex of ŷ = ${a}x² ${b < 0 ? "−" : "+"} ${Math.abs(b)}x ${c < 0 ? "−" : "+"} ${Math.abs(c)}.`, r3(-b / (2 * a)), "x = −b/(2a).", null, 0.002);

export const E = [
  ev(100, 1.1, 2),
  ev(50, 2, 3),
  ev(80, 0.5, 2),
  ev(200, 0.9, 3),
  rate(1.06),
  rate(1.25),
  rate(0.85),
  rate(0.96),
  qv(-2, 12, 5),
  qv(1, -8, 3),
  qv(-0.5, 7, 1),
  mc("Which model fits a quantity that grows by the same percent each year?", "exponential", ["linear", "quadratic", "no model"], "Constant ratio."),
  mc("Which model fits the height of a ball thrown upward?", "quadratic", ["exponential", "linear", "none"], "Rises then falls."),
  mc("Which model fits a phone plan costing 20 dollars plus 0.10 dollars per minute?", "linear", ["exponential", "quadratic", "none"], "Constant rate."),
  mc("Equal steps in x give y-values 4, 12, 36, 108. The pattern is…", "exponential (ratio 3)", ["linear", "quadratic", "random"], "Constant ratio."),
  mc("Equal steps in x give y-values 3, 7, 11, 15. The pattern is…", "linear (difference 4)", ["exponential", "quadratic", "random"], "Constant difference."),
  tf("In ŷ = A·Bˣ, B < 1 means decay.", true, "Each step multiplies by less than 1."),
  tf("A higher R² always means a better model, whatever its shape.", false, "Check shape and context."),
  mc("These points grow faster and faster. Which kind of pattern do they show?", "exponential growth", ["linear", "quadratic with a maximum", "no pattern"], "Increasing ratio-like growth.", scatterSvg([[0, 2], [1, 3], [2, 4.5], [3, 6.8], [4, 10.1], [5, 15.2]], { xmin: 0, xmax: 6, ymin: 0, ymax: 17 })),
  mc("These points rise to a peak and come back down. Which kind of pattern do they show?", "quadratic (rises then falls)", ["exponential", "linear", "no pattern"], "An arch.", scatterSvg([[0, 1], [1, 6], [2, 9], [3, 10], [4, 9], [5, 6], [6, 1]], { xmin: -1, xmax: 7, ymin: 0, ymax: 12 })),
];

const gx = [0, 1, 2, 3, 4], gy = [6, 9, 13.5, 20.3, 30.4];
const lx = [1, 2, 3, 4, 5, 6, 7], ly = [2, 6, 12, 20, 30, 42, 56];
export const M = [
  num("y = A·Bˣ passes through (0, 40) and (1, 50). Find B.", 1.25, "50/40.", null, 0.001),
  num("y = A·Bˣ passes through (0, 12) and (2, 27). Find B.", 1.5, "B² = 2.25.", null, 0.001),
  num("A population is modelled by ŷ = 2500(1.03)ˣ. Find the population after 10 years (nearest whole number).", Math.round(2500 * 1.03 ** 10), "2500 × 1.03¹⁰.", null, 1),
  num("How many periods does ŷ = 100(1.2)ˣ take to double (2 decimals)?", r2(Math.log(2) / Math.log(1.2)), "ln 2 / ln 1.2.", null, 0.01),
  num("How many hours until ŷ = 400(0.8)ˣ halves (2 decimals)?", r2(Math.log(0.5) / Math.log(0.8)), "ln 0.5 / ln 0.8.", null, 0.01),
  num("Find the maximum value of ŷ = −3x² + 24x + 10.", 58, "x = 4."),
  num("Find the minimum value of ŷ = 2x² − 12x + 25.", 7, "x = 3."),
  num(`Fit an exponential model to x: ${gx.join(", ")}; y: ${gy.join(", ")}. Find B (3 decimals).`, r3(expreg(gx, gy).B), "Technology, or a line through (x, ln y).", null, 0.005),
  num(`Fit an exponential model to x: ${gx.join(", ")}; y: ${gy.join(", ")}. Find A (2 decimals).`, r2(expreg(gx, gy).A), "Technology.", null, 0.05),
  num("A line fitted to (x, ln y) has slope 0.2 and intercept 1.5. Find B in y = A·Bˣ (3 decimals).", r3(Math.exp(0.2)), "B = e^0.2.", null, 0.002),
  num("A line fitted to (x, ln y) has slope 0.2 and intercept 1.5. Find A in y = A·Bˣ (3 decimals).", r3(Math.exp(1.5)), "A = e^1.5.", null, 0.005),
  mc("A linear model's residual plot is shown. What does it suggest?", "the data are curved; a non-linear model is better", ["the line is perfect", "there is one outlier", "r is negative"], "Systematic pattern.", residualPlotSvg(lx.map((x, i) => [x, ly[i]]), linreg(lx, ly), { xmin: 0, xmax: 8 })),
  mc("Second differences of y-values (equal x steps) are all 4. The data are…", "quadratic", ["linear", "exponential", "random"], "Constant second differences."),
  ms("Which are good reasons to choose an exponential model? Select all.", ["the context involves percent growth", "ratios of consecutive y-values are nearly constant", "the residuals of a linear fit curve upward", "the data rise then fall"], [0, 1, 2], "Rise-then-fall is quadratic."),
  tf("ln y is linear in x when y = A·Bˣ.", true, "ln y = ln A + x ln B."),
  tf("A quadratic model can always predict safely far beyond the data.", false, "Curves can turn sharply."),
  num("The graph shows the curve ŷ = 3(2)ˣ through the data. Find ŷ at x = 4.", 48, "3 × 16.", scatterSvg([[0, 3], [1, 6.2], [2, 11.8], [3, 24.5]], { xmin: 0, xmax: 4.5, ymin: 0, ymax: 60, curve: (x) => 3 * 2 ** x })),
  num("A car's value is ŷ = 32 000(0.85)ˣ dollars. Find its value after 4 years (nearest dollar).", Math.round(32000 * 0.85 ** 4), "32 000 × 0.85⁴.", null, 1),
  mc("Revenue R from selling at price p is modelled by R = −20p² + 800p. Which price maximizes revenue?", "20", ["40", "800", "10"], "p = −800/(−40)."),
  num("For y = 5x² + 1 at x = 1, 2, 3, 4, find the constant second difference.", 10, "2a = 10."),
];

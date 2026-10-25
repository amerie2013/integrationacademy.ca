// 6.4 Non-Linear Regression & Modelling — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterSvg, residualPlotSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { linreg, expreg, quadreg, rsq, corr } from "../../mdm4u/count.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const r2 = (v) => Math.round(v * 100) / 100;
const bx = [0, 1, 2, 3, 4, 5, 6], by = [1200, 1530, 1960, 2490, 3180, 4070, 5190]; // app downloads by month
const Eb = expreg(bx, by), Lb = linreg(bx, by);
const kx = [0, 1, 2, 3, 4, 5], ky = [2.0, 11.2, 16.8, 18.5, 16.4, 10.3]; // height of a diver (m) — arch
const Qk = quadreg(kx, ky);

export const TOPIC = "6.4 Non-Linear Regression & Modelling";
export const Q = [
  num(`App downloads for months 0–6: ${by.join(", ")}. Fit ŷ = A·Bˣ and find the monthly growth rate as a percent (1 decimal).`, Math.round((Eb.B - 1) * 1000) / 10, "B − 1.", scatterSvg(bx.map((x, i) => [x, by[i]]), { xmin: 0, xmax: 7, ymin: 0, ymax: 6000, curve: (x) => Eb.A * Eb.B ** x }), 0.2),
  num(`For downloads ${by.join(", ")} (months 0–6), predict month 8 with the exponential model (nearest hundred).`, Math.round((Eb.A * Eb.B ** 8) / 100) * 100, "A·B⁸.", null, 100),
  num(`For downloads ${by.join(", ")} (months 0–6), find r² of a LINEAR fit (3 decimals).`, r3(corr(bx, by) ** 2), "High, but the pattern is curved.", null, 0.002),
  mc(`For downloads ${by.join(", ")}, the linear fit has the residual plot shown. Which model should be used?`, "exponential", ["linear", "no model", "a horizontal line"], "U-shaped residuals; percent growth.", residualPlotSvg(bx.map((x, i) => [x, by[i]]), Lb, { xmin: -1, xmax: 7 })),
  num(`Heights (m) of a diver at t = 0–5 s: ${ky.join(", ")}. Fit a quadratic and find the time of maximum height (2 decimals).`, r2(-Qk.b / (2 * Qk.a)), "Vertex of the fitted parabola.", scatterSvg(kx.map((x, i) => [x, ky[i]]), { xmin: 0, xmax: 6, ymin: 0, ymax: 22, curve: (x) => Qk.a * x * x + Qk.b * x + Qk.c }), 0.03),
  num(`For heights ${ky.join(", ")} at t = 0–5 s, find R² of the quadratic fit (3 decimals).`, r3(rsq(kx, ky, (x) => Qk.a * x * x + Qk.b * x + Qk.c)), "Technology.", null, 0.003),
  num("y = A·Bˣ passes through (1, 30) and (4, 101.25). Find B.", 1.5, "B³ = 3.375.", null, 0.001),
  num("y = A·Bˣ passes through (1, 30) and (4, 101.25). Find A.", 20, "30/1.5.", null, 0.001),
  num("A substance has half-life 6 h. Find B in y = A·Bˣ (x in hours) (4 decimals).", Math.round(0.5 ** (1 / 6) * 1e4) / 1e4, "B⁶ = 0.5.", null, 0.0002),
  num("The table shows ln y for x = 0–3. Find B (3 decimals).", r3(Math.exp(linreg([0, 1, 2, 3], [0.7, 1.05, 1.4, 1.75]).a)), "Slope of ln y is ln B.", tableSvg([["x", "0", "1", "2", "3"], ["ln y", "0.70", "1.05", "1.40", "1.75"]]), 0.002),
  num("A quadratic passes through (0, 4), (1, 9) and (2, 18). Find a in y = ax² + bx + c.", 2, "c = 4; a + b = 5; 4a + 2b = 14.", null, 0.001),
  num("Profit P = −0.4x² + 36x − 300 (x items). Find the maximum profit.", 510, "x = 45.", null, 0.01),
  mc("Why can a 5th-degree polynomial through 6 points have R² = 1 and still be a poor model?", "it fits every point exactly, including the noise, and behaves wildly between and beyond them", ["R² = 1 is impossible", "polynomials cannot be fitted", "it has a negative slope"], "Overfitting."),
  ms("A bacteria count doubles every 3 hours. Which statements are true? Select all.", ["B = 2^(1/3) per hour", "the growth rate is about 26% per hour", "a linear model would fit well over a long time", "after 9 hours the count is 8 times as large"], [0, 1, 3], "2^(1/3) ≈ 1.26."),
  tf("If the ratios of consecutive y-values (equal x steps) are constant, ln y is linear in x.", true, "Exponential."),
  tf("A quadratic model with a < 0 has a minimum.", false, "a < 0 opens down: maximum."),
  num("ŷ = 5000(1.045)ˣ. In how many years does ŷ first exceed 8000? (smallest whole number)", Math.ceil(Math.log(1.6) / Math.log(1.045)), "1.045ˣ > 1.6.", null),
  num("Compare at x = 10: linear ŷ = 200x + 1000 and exponential ŷ = 1000(1.15)ˣ. Find the exponential value minus the linear value (nearest whole number).", Math.round(1000 * 1.15 ** 10 - 3000), "4045.56 − 3000.", null, 1),
  mc("For x from 0 to 3, a linear and an exponential model fit growth data about equally well. What evidence helps decide?", "the context (percent vs constant growth) and data over a longer range", ["the larger intercept", "the shorter equation", "nothing"], "Context and more data."),
  num("A model ŷ = 12(0.9)ˣ + 3 levels off at what value as x grows large?", 3, "0.9ˣ → 0."),
];

// MDM4U Worksheet 6.4 — Non-Linear Regression & Modelling (teacher edition)
import { svgT, scatterSvg, residualPlotSvg } from "./figT.mjs";
import { linreg, expreg, quadreg, rsq, corr } from "../../mdm4u/count.mjs";

const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const r2 = (v) => Math.round(v * 100) / 100;
const P = (xs, ys) => xs.map((x, i) => [x, ys[i]]);
const dx = [0, 1, 2, 3, 4, 5], dy = [80, 64, 51.2, 41, 32.8, 26.2]; // medicine (mg) remaining by hour
const Ed = expreg(dx, dy);
const px = [10, 20, 30, 40, 50, 60], py = [1.2, 3.6, 5.0, 5.4, 4.6, 2.9]; // profit (thousands) vs price (dollars)
const Qp = quadreg(px, py), vx = -Qp.b / (2 * Qp.a);
const ix = [0, 2, 4, 6, 8, 10], iy = [500, 584, 683, 798, 933, 1091]; // investment by year
const Ei = expreg(ix, iy), Li = linreg(ix, iy);

const EXAMPLES = [
  { title: "Constant ratios", q: `Medicine in the body (mg) at hours 0–5: ${dy.join(", ")}. Show the decay is exponential.`, steps: [`Ratios: ${dy.slice(1).map((y, i) => r2(y / dy[i])).join(", ")} ≈ 0.8.`], ans: "constant ratio about 0.8: exponential decay" },
  { title: "Exponential model", q: "Fit an exponential model to the medicine data and interpret B.", fig: svgT(scatterSvg(P(dx, dy), { xmin: 0, xmax: 6, ymin: 0, ymax: 90, curve: (x) => Ed.A * Ed.B ** x, xlabel: "hour", ylabel: "mg" }), 6), steps: [S`Technology: $\hat y\approx${r2(Ed.A)}(${r3(Ed.B)})^x$.`], ans: `about ${r2((1 - Ed.B) * 100)}% lost each hour` },
  { title: "Half-life", q: "When will half of the medicine remain?", steps: [S`$${r3(Ed.B)}^x=0.5\Rightarrow x=\frac{\ln0.5}{\ln${r3(Ed.B)}}$.`], ans: `about ${r2(Math.log(0.5) / Math.log(Ed.B))} h` },
  { title: "Quadratic model", q: `Weekly profit (thousands) at prices 10–60 dollars: ${py.join(", ")}. Fit a quadratic and find the best price.`, fig: svgT(scatterSvg(P(px, py), { xmin: 0, xmax: 70, ymin: 0, ymax: 7, curve: (x) => Qp.a * x * x + Qp.b * x + Qp.c, xlabel: "price", ylabel: "profit" }), 6), steps: [S`$\hat y\approx${r3(Qp.a)}x^2+${r3(Qp.b)}x${Qp.c < 0 ? "" : "+"}${r3(Qp.c)}$.`, S`Vertex $x=-\frac{b}{2a}\approx${r2(vx)}$.`], ans: `about ${r2(vx)} dollars` },
  { title: "Linear or exponential?", q: `An investment's value at years 0, 2, …, 10 is ${iy.join(", ")}. Compare a linear and an exponential fit.`, steps: [S`Linear $r^2\approx${r3(corr(ix, iy) ** 2)}$; exponential $R^2\approx${r3(rsq(ix, iy, (x) => Ei.A * Ei.B ** x))}$.`], ans: "exponential (constant percent growth)" },
  { title: "Residual evidence", q: "The residual plot of the linear fit to the investment data is shown. What does it show?", fig: svgT(residualPlotSvg(P(ix, iy), Li, { xmin: -1, xmax: 11 }), 6), steps: ["A U-shape: the linear model misses curvature."], ans: "use the exponential model" },
  { title: "Growth rate", q: "Find the annual growth rate of the investment.", steps: [S`$B\approx${r3(Ei.B)}$.`], ans: `about ${r2((Ei.B - 1) * 100)}% per year` },
  { title: "Linearizing", q: "Explain how ln y helps fit y = A·Bˣ with a straight line.", steps: [S`$\ln y=\ln A+x\ln B$ is linear in $x$.`], ans: S`fit a line to $(x,n y)$; $A=e^b$, $B=e^a$` },
  { title: "Predicting", q: "Predict the investment's value at year 15 and comment.", steps: [S`$${r2(Ei.A)}(${r3(Ei.B)})^{15}\approx${Math.round(Ei.A * Ei.B ** 15)}$.`], ans: `about ${Math.round(Ei.A * Ei.B ** 15)} dollars — an extrapolation assuming the same rate` },
];

const PROBLEMS = [
  { level: 1, q: "Which model suits the height of a thrown ball over time?", ans: "quadratic" },
  { level: 1, q: "In ŷ = 300(1.04)ˣ, what is the growth rate per period?", ans: "4%" },
  { level: 1, q: "In ŷ = 70(0.9)ˣ, find ŷ at x = 2.", ans: "56.7" },
  { level: 2, q: "Values at x = 0, 1, 2, 3 are 5, 15, 45, 135. Find the exponential model.", ans: "ŷ = 5(3)ˣ" },
  { level: 2, q: "Values at x = 0, 1, 2, 3, 4 are 1, 3, 9, 19, 33. Show that the second differences are constant and name the model.", ans: "differences 2, 6, 10, 14; second differences 4: quadratic" },
  { level: 2, q: "Find the maximum of ŷ = −0.5x² + 6x + 10.", ans: "28 at x = 6" },
  { level: 2, q: "A linear fit has residuals −3, 1, 3, 3, 1, −3 in order of x. What does this suggest?", ans: "an arch: a quadratic model" },
  { level: 2, q: "Name the model suggested by the graph.", fig: svgT(scatterSvg([[0, 2], [1, 2.6], [2, 3.4], [3, 4.4], [4, 5.7], [5, 7.4], [6, 9.6]], { xmin: 0, xmax: 7, ymin: 0, ymax: 11 }), 5), ans: "exponential growth (ratio about 1.3)" },
  { level: 3, space: 4.5, q: "For x = 0, 1, 2, 3, ln y = 2.0, 2.4, 2.8, 3.2. Find the exponential model for y.", ans: `ŷ = ${r2(Math.exp(2))}(${r3(Math.exp(0.4))})ˣ` },
  { level: 3, space: 4.5, q: "y = A·Bˣ passes through (0, 60) and (3, 101.25). Find A and B.", ans: "A = 60, B = 1.19 (B³ = 1.6875 gives B ≈ 1.19)" },
  { level: 3, space: 4.5, q: "A substance decays as ŷ = 200(0.93)ˣ (x in days). Find its half-life.", ans: `${r2(Math.log(0.5) / Math.log(0.93))} days` },
  { level: 3, space: 4.5, q: "Explain why a cubic or higher-degree polynomial might fit 6 points better than a quadratic but still be a worse model.", ans: "it chases the noise (overfitting) and can predict nonsense outside the data" },
  { level: 3, space: 4.5, q: "Collect or find data on a quantity that grows by a percent (a savings account, a population). Fit linear and exponential models and decide which is better.", ans: "answers vary; exponential should fit better" },
];

export const WS = {
  code: "6.4",
  title: "Non-Linear Regression & Modelling",
  bigideas: S`When data are curved, fit a curve: quadratic ($\hat y=ax^2+bx+c$) for rise-then-fall patterns, exponential ($\hat y=A\cdot B^x$) for constant percent change. Technology fits these by least squares; exponential data become linear in $(x,\ln y)$. Choose a model by shape, residuals, context and $R^2$.`,
  goals: ["Recognize curved patterns.", "Fit quadratic and exponential models.", "Compare models.", "Interpret parameters."],
  curriculum: "D2.2, D2.5",
  vocab: [["Exponential model", "y-hat = A B to the power x"], ["Growth factor", "B, the ratio per step"], ["Quadratic model", "parabola of best fit"], ["Linearize", "transform to a straight line"]],
  hook: "A rumour spreads through a school. Would a line describe the number of people who have heard it each hour?",
  concepts: [
    ["1. Shapes", "Constant differences: linear. Constant ratios: exponential. Constant second differences: quadratic."],
    ["2. Fit", S`${svgT(scatterSvg(P(dx, dy), { xmin: 0, xmax: 6, ymin: 0, ymax: 90, curve: (x) => Ed.A * Ed.B ** x }), 5)}`],
    ["3. Compare", "R² plus a residual plot."],
  ],
  tips: ["Look at ratios and differences.", "B − 1 is the growth rate.", "Vertex gives the maximum or minimum.", "Do not overfit.", "Extrapolate with care."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

// MDM4U Worksheet 6.6 — Residuals, Outliers & Hidden Variables (teacher edition)
import { svgT, scatterSvg, residualPlotSvg, tableSvg } from "./figT.mjs";
import { linreg, corr, residuals } from "../../mdm4u/count.mjs";

const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const r2 = (v) => Math.round(v * 100) / 100;
const P = (xs, ys) => xs.map((x, i) => [x, ys[i]]);
const lineStr = (L) => `ŷ = ${r3(L.a)}x ${L.b < 0 ? "−" : "+"} ${r3(Math.abs(L.b))}`;
const ax = [1, 2, 3, 4, 5, 6, 7], ay = [12, 15, 16, 20, 21, 24, 27], La = linreg(ax, ay), ra = residuals(ax, ay);
const cx = [1, 2, 3, 4, 5, 6, 7, 8], cy = [30, 22, 16, 12, 10, 10, 12, 16], Lc = linreg(cx, cy);
const ox = [10, 12, 14, 16, 18, 20], oy = [48, 53, 31, 62, 67, 71], Lo = linreg(ox, oy), Lo2 = linreg([10, 12, 16, 18, 20], [48, 53, 62, 67, 71]);
const fx = [1, 2, 3, 4, 5, 15], fy = [4, 6, 7, 9, 11, 10], Lf = linreg(fx, fy), Lf2 = linreg(fx.slice(0, 5), fy.slice(0, 5));

const EXAMPLES = [
  { title: "Residuals", q: `For x: ${ax.join(", ")}; y: ${ay.join(", ")}, the line is ${lineStr(La)}. Find the residuals.`, fig: svgT(tableSvg([["x", ...ax.map(String)], ["y", ...ay.map(String)], ["ŷ", ...ax.map((x) => String(r2(La.a * x + La.b)))], ["y − ŷ", ...ra.map((e) => String(r2(e)))]]), 8), steps: ["Residual = y − ŷ for each point."], ans: ra.map((e) => r2(e)).join(", ") },
  { title: "Residual plot", q: "Draw the residual plot for example 1 and judge the model.", fig: svgT(residualPlotSvg(P(ax, ay), La, { xmin: 0, xmax: 8 }), 6), steps: ["Random scatter around 0."], ans: "linear model appropriate" },
  { title: "Curved residuals", q: `A line is fitted to x: ${cx.join(", ")}; y: ${cy.join(", ")}. Describe the residual plot.`, fig: svgT(residualPlotSvg(P(cx, cy), Lc, { xmin: 0, xmax: 9 }), 6), steps: ["Positive, negative, then positive: a U."], ans: "curved: use a quadratic" },
  { title: "An outlier", q: `For x: ${ox.join(", ")}; y: ${oy.join(", ")}, which point is an outlier? Compare r with and without it.`, steps: [S`(14, 31) lies far below the trend.`, S`$r\approx${r3(corr(ox, oy))}$ with it; $r\approx${r3(corr([10, 12, 16, 18, 20], [48, 53, 62, 67, 71]))}$ without.`], ans: "(14, 31)" },
  { title: "Should it be removed?", q: "The value 31 in example 4 was recorded during a power failure. Should it be removed?", steps: ["Yes: it comes from a different situation; report the removal."], ans: `yes: ${lineStr(Lo2)}` },
  { title: "Influential point", q: `For x: ${fx.join(", ")}; y: ${fy.join(", ")}, compare the slope with and without (15, 10).`, fig: svgT(scatterSvg(P(fx, fy), { xmin: 0, xmax: 16, ymin: 0, ymax: 14, line: Lf, hl: [5] }), 6), steps: [S`With: $a\approx${r3(Lf.a)}$. Without: $a\approx${r3(Lf2.a)}$.`], ans: "influential: the slope changes a lot" },
  { title: "Outlier vs influential", q: "Explain the difference between an outlier and an influential point.", steps: ["Outlier: large residual. Influential: extreme x that changes the line."], ans: "see steps" },
  { title: "Funnel", q: "A residual plot is narrow for small x and wide for large x. Interpret.", steps: ["The variability grows with x."], ans: "predictions less reliable for large x" },
  { title: "Hidden variable", q: "Across 15 towns, the number of restaurants and the number of dentists have r = 0.9. Name a hidden variable and say how to remove its effect.", steps: ["Population drives both."], ans: "population; use per-capita rates" },
];

const PROBLEMS = [
  { level: 1, q: "Find the residual of (6, 25) for ŷ = 3x + 6.", ans: "1" },
  { level: 1, q: "What does a residual plot with random scatter around 0 suggest?", ans: "a linear model is appropriate" },
  { level: 1, q: "Residuals of a least-squares line are 2, −1, 3, −2 and x. Find x.", ans: "−2" },
  { level: 2, q: "Find the residuals for x: 1, 2, 3, 4; y: 3, 5, 6, 10 using the least-squares line.", ans: (() => { const L = linreg([1, 2, 3, 4], [3, 5, 6, 10]); return `${lineStr(L)}; residuals ${residuals([1, 2, 3, 4], [3, 5, 6, 10]).map((e) => r2(e)).join(", ")}`; })() },
  { level: 2, q: "Describe the residual plot shown and recommend a model.", fig: svgT(scatterSvg([[1, 4], [2, 1], [3, -1], [4, -2], [5, -2], [6, -1], [7, 1], [8, 4]], { xmin: 0, xmax: 9, ymin: -5, ymax: 5, zero: true, ylabel: "residual" }), 5), ans: "U-shaped; quadratic" },
  { level: 2, q: "A point has x far from the others and lies close to the line. Can it be influential? Explain.", ans: "yes — it may have pulled the line toward itself" },
  { level: 2, q: "Name a hidden variable: across countries, chocolate consumption and Nobel prizes per capita are correlated.", ans: "wealth" },
  { level: 2, q: "Explain why deleting every point with a large residual is bad practice.", ans: "it biases the results and hides real variation" },
  { level: 3, space: 4.5, q: "Data: (2, 5), (4, 9), (6, 12), (8, 17), (10, 40). Find the line and r with and without (10, 40). Discuss.", ans: (() => { const A = linreg([2, 4, 6, 8, 10], [5, 9, 12, 17, 40]), B = linreg([2, 4, 6, 8], [5, 9, 12, 17]); return `with: ${lineStr(A)}, r ≈ ${r3(corr([2, 4, 6, 8, 10], [5, 9, 12, 17, 40]))}; without: ${lineStr(B)}, r ≈ ${r3(corr([2, 4, 6, 8], [5, 9, 12, 17]))}`; })() },
  { level: 3, space: 4.5, q: "Explain how a hidden variable could make two unrelated variables appear strongly correlated, with an example.", ans: "a common cause such as temperature, population or time" },
  { level: 3, space: 4.5, q: "A residual plot for house price against size fans out. Suggest why and how the analysis could be improved.", ans: "large houses vary more; analyse price per square metre or use a log model" },
  { level: 3, space: 4.5, q: "Sketch a scatter plot with an outlier that is not influential and one with an influential point that is not an outlier.", ans: "large residual near mean x; extreme x near the line" },
  { level: 3, space: 4.5, q: "A school's enrolment jumps one year when a new program opens. Explain how to handle this year in a regression of enrolment on year.", ans: "model before and after separately, or include the program as a variable; explain the change" },
];

export const WS = {
  code: "6.6",
  title: "Residuals, Outliers & Hidden Variables",
  bigideas: S`A residual is $y-\hat y$. A residual plot with random scatter supports a linear model; a curve or a funnel does not. Outliers have large residuals; influential points have extreme $x$ and move the line. Hidden variables can create or distort correlations. Remove a point only with a valid reason and report it.`,
  goals: ["Compute residuals.", "Read residual plots.", "Identify outliers and influential points.", "Recognize hidden variables."],
  curriculum: "D2.4, D2.5",
  vocab: [["Residual plot", "residuals against x"], ["Outlier", "large residual"], ["Influential point", "changes the line greatly"], ["Hidden variable", "unmeasured variable affecting the relationship"]],
  hook: "One student wrote a test while sick. Should the mark be included when studying study time and marks?",
  concepts: [
    ["1. Residual plots", S`${svgT(residualPlotSvg(P(ax, ay), La, { xmin: 0, xmax: 8 }), 5)}`],
    ["2. Unusual points", "Outliers (large residual) and influential points (extreme x)."],
    ["3. Hidden variables", "Population, time, temperature, group membership."],
  ],
  tips: ["Plot the residuals.", "Compare fits with and without unusual points.", "Give reasons for removals.", "Use rates to remove size effects.", "Look for groups."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

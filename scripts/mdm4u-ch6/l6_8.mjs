// MDM4U 6.8 — Chapter 6 Review: scatter plots and r, least-squares lines, r² and prediction, non-linear models,
// causation, residuals and influential points, contingency tables and group comparisons — mixed problems
import { intro, section, keyIdea, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, scatterSvg, residualPlotSvg, tableSvg } from "./lib.mjs";
import { corr, linreg, expreg, rsq, sum } from "../mdm4u/count.mjs";

export const TITLE = "6.8 Chapter 6 Review";
export const ID = "5c3e0001-0001-4001-8001-0000d4d00608";
const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const r2 = (v) => Math.round(v * 100) / 100;
const P = (xs, ys) => xs.map((x, i) => [x, ys[i]]);

const ax = [3, 5, 6, 8, 9, 11, 12], ay = [41, 48, 50, 57, 58, 66, 68]; // advertising (thousands) vs sales (thousands)
const La = linreg(ax, ay);
const gx = [0, 1, 2, 3, 4, 5], gy = [8.0, 9.7, 11.5, 14.1, 16.9, 20.2]; // subscribers (thousands) by month
const Eg = expreg(gx, gy);

export const blocks = () => [
  intro({
    icon: "🗂️",
    title: "Chapter 6 Review: Two-Variable Statistics",
    overview: S`This review brings together the analysis of two-variable data: drawing and describing scatter plots, measuring linear association with \(r\), fitting lines and curves, measuring fit with \(r^2\) and residual plots, predicting carefully, thinking critically about causation and hidden variables, and comparing groups with contingency tables. In each problem: plot, describe, model, check, then interpret in context.`,
    goals: [
      "describe scatter plots and interpret r;",
      "find and interpret regression lines and r²;",
      "choose and fit non-linear models;",
      "analyse residuals, outliers and influential points;",
      "classify relationships and analyse contingency tables.",
    ],
    curriculum: "D2.1–D2.5 (two-variable data analysis)",
    prior: [
      ["r = −0.7: describe.", "Moderate negative linear correlation."],
      ["Residual of (5, 20) for ŷ = 3x + 4?", "1."],
      ["30 of 120 as a percent?", "25%."],
    ],
    words: [
      ["Line of best fit", "ŷ = ax + b by least squares", "a = [nΣxy − ΣxΣy]/[nΣx² − (Σx)²]"],
      ["r²", "fraction of variation explained", "1 − SSE/SST"],
      ["Influential point", "extreme x that moves the line", "check with and without it"],
      ["Conditional percentage", "percent within a group", "compare across groups"],
    ],
  }),

  section("📌 Summary of tools", S`
  ${table(["Question", "Tool"], [["Is there a relationship?", "scatter plot: direction, form, strength, outliers"], ["How strong (linear)?", "r between −1 and 1"], ["What line?", "least squares: a, then b = ȳ − a x̄"], ["How well does it fit?", "r², residual plot"], ["Curved?", "quadratic or exponential model; compare R²"], ["Does x cause y?", "consider common cause, reverse cause, accident, confounding; experiment"], ["Two categorical variables?", "contingency table, conditional percentages"]])}
  ${keyIdea(S`A good analysis always returns to the context: what the slope means, how much \(r^2\) explains, which points are unusual and why, and what the data can and cannot prove.`)}`),

  section("📌 Watch out", watchOut([
    "Check the scatter plot and residual plot before trusting r or r².",
    "Interpret slope and intercept with units.",
    "Avoid extrapolation.",
    "Correlation is not causation.",
  ])),

  examples([
    ["Full linear analysis", `A store's monthly advertising (x, thousands of dollars) and sales (y, thousands of dollars): x ${ax.join(", ")}; y ${ay.join(", ")}. Describe the relationship, find the line and interpret the slope.`,
      [S`Strong positive linear: \(r\approx${r3(corr(ax, ay))}\).`, S`\(\hat y\approx${r3(La.a)}x+${r3(La.b)}\).`, S`Each extra thousand dollars of advertising goes with about ${r2(La.a)} thousand dollars more sales.`],
      `ŷ ≈ ${r3(La.a)}x + ${r3(La.b)}`,
      fig(scatterSvg(P(ax, ay), { xmin: 0, xmax: 14, ymin: 30, ymax: 75, line: La, xlabel: "advertising (thousands)", ylabel: "sales (thousands)" }))],
    ["Fit and prediction", "Using the same data, find r² and predict sales for 10 thousand dollars of advertising. Is it interpolation?",
      [S`\(r^2\approx${r3(corr(ax, ay) ** 2)}\): about ${Math.round(corr(ax, ay) ** 2 * 100)}% of the variation in sales is explained.`, S`\(\hat y\approx${r3(La.a)}(10)+${r3(La.b)}\approx${r2(La.a * 10 + La.b)}\).`, S`10 is inside 3–12: interpolation.`],
      `about ${r2(La.a * 10 + La.b)} thousand dollars`],
    ["Checking residuals", "The residual plot for the advertising line is shown. Is the linear model appropriate?",
      [S`The residuals scatter above and below 0 with no curve or funnel.`, S`The linear model is appropriate.`],
      "yes",
      fig(residualPlotSvg(P(ax, ay), La, { xmin: 0, xmax: 14, xlabel: "advertising (thousands)" }))],
    ["An exponential model", `A new channel's subscribers (thousands) for months 0 to 5: ${gy.join(", ")}. Fit an exponential model and state the monthly growth rate.`,
      [S`\(\hat y\approx${r2(Eg.A)}(${r3(Eg.B)})^x\), \(R^2\approx${r3(rsq(gx, gy, (x) => Eg.A * Eg.B ** x))}\).`, S`Growth of about ${r2((Eg.B - 1) * 100)}% per month.`],
      `about ${r2((Eg.B - 1) * 100)}% per month`],
    ["A contingency table", "Of 160 people who walk to work, 24 report back pain; of 240 who drive, 72 report back pain. Is commuting method associated with back pain?",
      [S`Walkers: \(\frac{24}{160}=15\%\); drivers: \(\frac{72}{240}=30\%\).`, S`The percentages differ: associated. Possible confounding variables (age, job type) mean this is not proof of cause.`],
      "associated: 15% vs 30%",
      fig(tableSvg([["", "back pain", "no back pain", "total"], ["walk", "24", "136", "160"], ["drive", "72", "168", "240"], ["total", "96", "304", "400"]]))],
  ]),

  practice([
    q("r", "Which r best matches a scatter plot that falls steeply with points close to a line?", choice(["−0.96", "−0.3", "0.96", "0"], 0), "Strong negative.", ["Close to −1."], "−0.96"),
    q("a", "For n = 5, Σx = 15, Σy = 40, Σxy = 140, Σx² = 55, find the slope a.", num(2, 0.001), "Formula.", [S`\(\frac{700-600}{275-225}=2\).`], "2"),
    q("b", "With slope 2, x̄ = 3 and ȳ = 8, find b.", num(2, 0.001), "ȳ − a x̄.", [S`\(8-6=2\).`], "2"),
    q("r2", "r = 0.6. What percent of the variation in y is explained by the line?", num(36, 0.01), "r² × 100.", [S`36%.`], "36"),
    q("cause", "Shoe size and reading level are strongly correlated among children aged 5–12. The relationship is…", choice(["common cause (age)", "cause and effect", "reverse cause and effect", "accidental"], 0), "What drives both?", ["Older children have bigger feet and read better."], "common cause"),
  ]),

  ...hard([
    ["Removing a point", "Data: (2, 10), (4, 13), (6, 17), (8, 20), (10, 22), (25, 21). (a) Find the line with all points. (b) Find it without (25, 21). (c) What kind of point is (25, 21)?",
      (() => { const X = [2, 4, 6, 8, 10, 25], Y = [10, 13, 17, 20, 22, 21], A = linreg(X, Y), B = linreg(X.slice(0, 5), Y.slice(0, 5)); return [S`(a) \(\hat y\approx${r3(A.a)}x+${r3(A.b)}\).`, S`(b) \(\hat y\approx${r3(B.a)}x+${r3(B.b)}\).`, S`(c) Influential: its x is far from the rest and it flattens the slope from about ${r2(B.a)} to ${r2(A.a)}.`]; })(),
      "influential point",
      fig(scatterSvg([[2, 10], [4, 13], [6, 17], [8, 20], [10, 22], [25, 21]], { xmin: 0, xmax: 28, ymin: 0, ymax: 30, line: linreg([2, 4, 6, 8, 10, 25], [10, 13, 17, 20, 22, 21]), hl: [5] }))],
    ["Choosing between models", "For x = 1 to 6, y = 3, 6, 11, 18, 27, 38. A linear fit gives r² ≈ " + r3(corr([1, 2, 3, 4, 5, 6], [3, 6, 11, 18, 27, 38]) ** 2) + ". Should you use it? Find a better model.",
      [S`The differences 3, 5, 7, 9, 11 increase steadily: the second differences are constant (2), so the data are quadratic.`, S`\(y=x^2+2\) fits exactly (\(R^2=1\)). The linear model's residuals would form a U.`],
      "quadratic: y = x² + 2"],
  ], [
    q("hard", "A regression line has slope 1.5 and passes through (x̄, ȳ) = (12, 40). Find ŷ at x = 16.", num(46, 0.001), "40 + 1.5(4).", [S`46.`], "46"),
    q("hard", "SST = 400 and r = −0.9. Find SSE.", num(76, 0.01), "SSE = SST(1 − r²).", [S`\(400(0.19)\).`], "76"),
    q("hard", "Of 200 workers, 80 work remotely; 20 remote and 72 office workers report long commutes are stressful. What percent of office workers report this?", num(60, 0.01), "72/120.", [S`0.6.`], "60"),
  ]),

  wrapUp({
    qas: [
      ["What are the steps of a two-variable analysis?", "Plot, describe, model, check residuals, interpret."],
      ["How are r and r² different?", "r gives direction and strength; r² gives the fraction of variation explained."],
      ["When should a curve replace a line?", "When the plot or the residuals show a curved pattern."],
      ["How do I test whether x causes y?", "With a randomized controlled experiment."],
      ["How do I compare groups in a contingency table?", "Compare conditional percentages."],
    ],
    summary: [
      "r, least-squares line, r², residuals.",
      "Linear, quadratic, exponential models.",
      "Outliers, influential points, hidden variables.",
      "Contingency tables and conditional percentages.",
    ],
    next: "Chapter 7 is the culminating investigation: you will design and carry out your own statistical study.",
  }),
];

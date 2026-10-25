// MDM4U Worksheet 7.3 — Analyzing the Data (teacher edition)
import { svgT, scatterSvg, residualPlotSvg, boxPlotSvg } from "./figT.mjs";
import { mean, median, sdS, quartiles, corr, linreg } from "../../mdm4u/count.mjs";

const S = String.raw;
const r2 = (v) => Math.round(v * 100) / 100;
const r3 = (v) => Math.round(v * 1000) / 1000;
const moe = (p, n) => 1.96 * Math.sqrt((p * (1 - p)) / n);
const tt = [22, 25, 18, 30, 27, 24, 20, 35, 26, 23, 28, 21]; // travel times (min)
const [tq1, tmd, tq3] = quartiles(tt);
const px = [2, 3, 4, 5, 6, 7, 8, 9], py = [55, 59, 62, 66, 67, 72, 75, 77]; // practice (h) vs score
const L = linreg(px, py);
const ga = [12, 15, 14, 18, 16, 13], gb = [17, 21, 19, 24, 20, 22];

const EXAMPLES = [
  { title: "Matching tools", q: "Name summaries and displays for: (a) favourite sport; (b) commute times; (c) height vs arm span; (d) commute time by transportation mode.", steps: ["Use the variable types."], ans: "(a) percents, bar graph (b) median/IQR, box plot (c) r, regression, scatter plot (d) side-by-side box plots" },
  { title: "One-variable summary", q: `Travel times (min): ${tt.join(", ")}. Summarize.`, fig: svgT(boxPlotSvg([{ data: tt }], { min: 15, max: 40, step: 5 }), 6), steps: [S`Mean $${r2(mean(tt))}$, median $${tmd}$, $s\approx${r2(sdS(tt))}$; $Q_1=${tq1}$, $Q_3=${tq3}$.`], ans: `median ${tmd}, IQR ${tq3 - tq1}` },
  { title: "Correlation", q: `Practice hours x: ${px.join(", ")}; scores y: ${py.join(", ")}. Find r.`, steps: ["Technology or the formula."], ans: `r ≈ ${r3(corr(px, py))}` },
  { title: "Regression", q: "Find the regression line and interpret the slope.", fig: svgT(scatterSvg(px.map((x, i) => [x, py[i]]), { xmin: 0, xmax: 10, ymin: 50, ymax: 80, line: L }), 6), steps: [S`$\hat y\approx${r3(L.a)}x+${r3(L.b)}$.`], ans: `about ${r2(L.a)} points per extra hour` },
  { title: "Residual check", q: "Judge the linear model using the residual plot.", fig: svgT(residualPlotSvg(px.map((x, i) => [x, py[i]]), L, { xmin: 0, xmax: 10 }), 6), steps: ["Random scatter around 0."], ans: "appropriate" },
  { title: "Comparing groups", q: `Group A: ${ga.join(", ")}; group B: ${gb.join(", ")}. Compare.`, steps: [S`Medians ${median(ga)} and ${median(gb)}; $s$ ${r2(sdS(ga))} and ${r2(sdS(gb))}.`], ans: "B higher, similar spread" },
  { title: "Confidence interval", q: "In a random sample of 320, 112 students bike to school. Estimate the proportion with 95% confidence.", steps: [S`$\hat p=0.35$; $E\approx${r3(moe(0.35, 320))}$.`], ans: `${r3(0.35 - moe(0.35, 320))} to ${r3(0.35 + moe(0.35, 320))}` },
  { title: "Prediction", q: "Use the practice regression to predict a score for 6.5 hours.", steps: [S`$\hat y\approx${r2(L.a * 6.5 + L.b)}$ (interpolation).`], ans: `${r2(L.a * 6.5 + L.b)}` },
  { title: "Limitations", q: "Name two limitations of the practice-and-score analysis.", steps: ["Small sample; observational."], ans: "n = 8; association only; self-reported hours" },
];

const PROBLEMS = [
  { level: 1, q: "Which display suits the favourite music genres of 200 students?", ans: "bar graph" },
  { level: 1, q: "Find the median of 3, 8, 5, 9, 4, 7, 6.", ans: "6" },
  { level: 1, q: "In a sample of 500, p̂ = 0.2. Find the 95% margin of error.", ans: `${r3(moe(0.2, 500))}` },
  { level: 2, q: "Find r and the regression line for x: 1, 2, 3, 4, 5; y: 10, 13, 15, 19, 21.", ans: `r ≈ ${r3(corr([1, 2, 3, 4, 5], [10, 13, 15, 19, 21]))}; ŷ = ${r3(linreg([1, 2, 3, 4, 5], [10, 13, 15, 19, 21]).a)}x + ${r3(linreg([1, 2, 3, 4, 5], [10, 13, 15, 19, 21]).b)}` },
  { level: 2, q: "Summarize: 41, 45, 38, 52, 47, 44, 39, 95.", ans: (() => { const d = [41, 45, 38, 52, 47, 44, 39, 95]; return `median ${median(d)}, IQR ${quartiles(d)[2] - quartiles(d)[0]}; 95 is an outlier; use median and IQR`; })() },
  { level: 2, q: "Compare the box plots of two classes' test marks.", fig: svgT(boxPlotSvg([{ five: [48, 60, 68, 75, 90], label: "A" }, { five: [55, 63, 67, 71, 80], label: "B" }], { min: 40, max: 95, step: 5 }), 6), ans: "similar medians; A more spread" },
  { level: 2, q: "A random sample of 400 has p̂ = 0.62. Find the 95% confidence interval.", ans: `${r3(0.62 - moe(0.62, 400))} to ${r3(0.62 + moe(0.62, 400))}` },
  { level: 2, q: "Explain why the residual plot must be checked even when r² is high.", ans: "a curved pattern can still give a high r²" },
  { level: 3, space: 4.5, q: "Decide on a complete analysis plan for: “Do students who take the bus have longer commutes than those who are driven, and is commute time related to sleep?”", ans: "box plots and summaries by group; scatter plot, r, regression and residuals for commute vs sleep" },
  { level: 3, space: 4.5, q: "A data set has r = 0.12 but its scatter plot shows a clear arch. Explain and recommend an analysis.", ans: "curved relationship; fit a quadratic and report R²" },
  { level: 3, space: 4.5, q: "Two random samples (n = 300 each) give p̂ = 0.48 and 0.56. Do their 95% intervals overlap? What does that suggest?", ans: `[${r3(0.48 - moe(0.48, 300))}, ${r3(0.48 + moe(0.48, 300))}] and [${r3(0.56 - moe(0.56, 300))}, ${r3(0.56 + moe(0.56, 300))}] overlap: the difference may be due to sampling variation` },
  { level: 3, space: 4.5, q: "Find the mean and median of 2, 3, 3, 4, 5, 6, 30 and explain which you would report.", ans: "mean ≈ 7.57, median 4: report the median (skewed by 30)" },
  { level: 3, space: 4.5, q: "Carry out the analysis plan for your own investigation on a pilot data set of at least 10 cases.", ans: "answers vary" },
];

export const WS = {
  code: "7.3",
  title: "Analyzing the Data",
  bigideas: S`Choose tools from the variable types: centre, spread and shape for one numerical variable; percents for categories; scatter plot, $r$, regression and residuals for two numerical variables; side-by-side summaries for groups; $\hat p\pm1.96\sqrt{\hat p\hat q/n}$ for a proportion. Always check assumptions and report variability.`,
  goals: ["Match tools to data.", "Summarize one variable.", "Analyse two variables.", "Estimate a proportion."],
  curriculum: "E1.5",
  vocab: [["Summary statistics", "centre and spread"], ["Model", "an equation for a relationship"], ["Residual plot", "checks the model"], ["Confidence interval", "plausible range for a parameter"]],
  hook: "You have 200 survey responses in a spreadsheet. Where do you start?",
  concepts: [
    ["1. Match", "Variable types decide the tools."],
    ["2. Describe and check", S`${svgT(scatterSvg(px.map((x, i) => [x, py[i]]), { xmin: 0, xmax: 10, ymin: 50, ymax: 80, line: L }), 4.6)}`],
    ["3. Estimate", S`$\hat p\pm1.96\sqrt{\hat p\hat q/n}$.`],
  ],
  tips: ["Plot first.", "Use resistant measures for skewed data.", "Check residuals.", "Compare percents.", "Report n and uncertainty."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

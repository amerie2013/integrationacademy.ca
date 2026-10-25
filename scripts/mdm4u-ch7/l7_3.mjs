// MDM4U 7.3 — Analyzing the Data: matching tools to variable types, a full one-variable summary, a two-variable
// analysis (scatter plot, r, regression, residuals), comparing groups, and estimating a proportion with a confidence
// interval — always reporting variability and limitations
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, scatterSvg, residualPlotSvg, boxPlotSvg, barsSvg, tableSvg } from "./lib.mjs";
import { mean, median, sdS, quartiles, fences, corr, linreg, sum } from "../mdm4u/count.mjs";

export const TITLE = "7.3 Analyzing the Data";
export const ID = "a2a6fe10-66dd-4267-b1f8-036a2bd40bc0";
const S = String.raw;
const r2 = (v) => Math.round(v * 100) / 100;
const r3 = (v) => Math.round(v * 1000) / 1000;

const sleep = [6.5, 7, 7.5, 6, 8, 7, 5.5, 7.5, 8.5, 6.5, 7, 6, 7.5, 9, 6.5, 7]; // hours, 16 students
const [sq1, smd, sq3] = quartiles(sleep);
const scr = [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6], slp = [8.4, 8.1, 7.9, 7.6, 7.7, 7.2, 6.9, 6.8, 6.4, 6.3];
const L = linreg(scr, slp);
const work = [72, 75, 68, 80, 77, 70, 74, 79], nowork = [70, 82, 78, 85, 73, 88, 80, 76];
const moe = (p, n) => 1.96 * Math.sqrt((p * (1 - p)) / n);

export const blocks = () => [
  intro({
    icon: "🔬",
    title: "Analyzing the Data",
    overview: S`Analysis is where the whole course comes together. The type and number of variables decide the tools: one numerical variable needs centre, spread and shape; two numerical variables need a scatter plot, \(r\), a model and its residuals; a numerical variable across groups needs side-by-side comparisons; a proportion from a sample needs a confidence interval. Good analysis always reports <strong>variability</strong> and the <strong>limitations</strong> of the data, not just a single number.`,
    goals: [
      "choose summaries and displays that match the variables and the question;",
      "produce a complete one-variable summary;",
      "carry out and check a two-variable regression analysis;",
      "compare groups with summary statistics and box plots;",
      "estimate a population proportion with a 95% confidence interval.",
    ],
    curriculum: "E1.5 (analysing data using one- and two-variable statistics and probability); connections to D1, D2 and B2",
    prior: [
      ["Median of 6, 7, 7, 8?", "7."],
      ["r = −0.9: describe.", "Strong negative linear."],
      ["1.96√(0.4 × 0.6/400) ≈ ?", "0.048."],
    ],
    words: [
      ["Summary statistics", "numbers describing centre and spread", "median 7 h, IQR 1 h"],
      ["Model", "an equation describing a relationship", "ŷ = −0.42x + 8.9"],
      ["Confidence interval", "a range of plausible values for a population parameter", "0.42 ± 0.05"],
      ["Limitation", "a feature of the data or method that restricts the conclusion", "small sample, voluntary response"],
    ],
  }),

  section("📌 Matching tools to data", S`
  ${table(["Data", "Summaries", "Displays"], [["one categorical", "counts, percents, mode", "bar or circle graph"], ["one numerical", "mean, median, s, IQR, five-number summary", "histogram, box plot"], ["two categorical", "contingency table, conditional percents", "side-by-side bar graph"], ["numerical by group", "centre and spread per group", "side-by-side box plots"], ["two numerical", "r, regression, r², residuals", "scatter plot, residual plot"], ["proportion from a sample", "p̂ ± 1.96√(p̂q̂/n)", "interval on a number line"]])}
  ${keyIdea(S`Describe, then check, then conclude: describe the data with the right summaries; check assumptions (outliers, curvature, sample design); only then state what the evidence supports.`)}`),

  section("📌 Explore", S`<p>Tell the tool chooser what kind of variables you have. Try every combination you might meet in your own investigation.</p>`),

  widget("toolChooser", {}),

  section("📌 Watch out", watchOut([
    "Use the median and IQR when the data are skewed or contain outliers.",
    "Check the residual plot before trusting a regression line.",
    "Compare percentages, not counts, across groups of different sizes.",
    "A confidence interval accounts for random sampling error only, not for bias.",
  ])),

  examples([
    ["A one-variable summary", `School-night sleep (h) of 16 students: ${sleep.join(", ")}. Give a complete summary.`,
      [S`Mean \(\bar x=${r2(mean(sleep))}\), median ${smd}; \(s\approx${r2(sdS(sleep))}\).`, S`Five-number summary: ${Math.min(...sleep)}, ${sq1}, ${smd}, ${sq3}, ${Math.max(...sleep)}; IQR ${sq3 - sq1}; fences ${fences(sleep).join(" and ")}: no outliers.`, S`Shape: roughly symmetric, centred near 7 h.`],
      `typical sleep ≈ 7 h, s ≈ ${r2(sdS(sleep))} h`,
      fig(boxPlotSvg([{ data: sleep }], { min: 5, max: 10, step: 0.5, xlabel: "sleep (h)" }))],
    ["A regression analysis", `Screen time x (h) and sleep y (h) for 10 students: x ${scr.join(", ")}; y ${slp.join(", ")}. Analyse the relationship.`,
      [S`Scatter plot: strong negative linear; \(r\approx${r3(corr(scr, slp))}\).`, S`\(\hat y\approx${r3(L.a)}x+${r3(L.b)}\): about ${Math.abs(r2(L.a * 60))} min less sleep per extra hour of screen time.`, S`\(r^2\approx${r3(corr(scr, slp) ** 2)}\); residuals show no pattern.`],
      `ŷ ≈ ${r3(L.a)}x + ${r3(L.b)}`,
      fig(scatterSvg(scr.map((x, i) => [x, slp[i]]), { xmin: 0, xmax: 7, ymin: 5.5, ymax: 9, line: L, xlabel: "screen time (h)", ylabel: "sleep (h)" }))],
    ["Checking the model", "Look at the residual plot for the screen-time regression. Is a linear model appropriate?",
      [S`The residuals are small and scattered above and below 0 with no curve or funnel.`, S`Yes — a linear model is appropriate within 1.5 to 6 hours of screen time.`],
      "yes",
      fig(residualPlotSvg(scr.map((x, i) => [x, slp[i]]), L, { xmin: 0, xmax: 7, xlabel: "screen time (h)" }))],
    ["Comparing groups", `Marks of students who work part-time: ${work.join(", ")}; who do not: ${nowork.join(", ")}. Compare.`,
      [S`Means ${mean(work)} and ${mean(nowork)}; medians ${median(work)} and ${median(nowork)}.`, S`Spreads: \(s\approx${r2(sdS(work))}\) and \(${r2(sdS(nowork))}\).`, S`Non-workers score a little higher on average but vary more; with 8 per group and no random assignment, this is a tentative association only.`],
      "non-workers slightly higher, more variable",
      fig(boxPlotSvg([{ data: work, label: "works" }, { data: nowork, label: "no job" }], { min: 65, max: 90, step: 5 }))],
    ["Estimating a proportion", "In a random sample of 250 students, 105 said they sleep less than 7 hours on school nights. Estimate the proportion for the whole school with a 95% confidence interval.",
      [S`\(\hat p=\frac{105}{250}=0.42\).`, S`\(E=1.96\sqrt{\frac{0.42(0.58)}{250}}\approx${r3(moe(0.42, 250))}\).`, S`Interval: about ${r3(0.42 - moe(0.42, 250))} to ${r3(0.42 + moe(0.42, 250))}.`],
      `about ${Math.round((0.42 - moe(0.42, 250)) * 100)}% to ${Math.round((0.42 + moe(0.42, 250)) * 100)}%`],
  ]),

  practice([
    q("tool", "To compare the commute times of students who drive and who take the bus, the best display is…", choice(["side-by-side box plots", "a scatter plot", "a circle graph", "a single histogram"], 0), "Numerical by group.", ["Box plots per group."], "side-by-side box plots"),
    q("med", "Find the median of 4, 9, 6, 8, 5, 7.", num(6.5, 0.001), "Order: 4, 5, 6, 7, 8, 9.", [S`\(\frac{6+7}{2}\).`], "6.5"),
    q("pred", "Using ŷ = −0.5x + 9 (x = screen hours, y = sleep hours), predict sleep for 4 hours of screen time.", num(7, 0.001), "Substitute.", [S`\(-2+9\).`], "7"),
    q("ci", "In a sample of 400, p̂ = 0.3. Find the 95% margin of error (3 decimals).", num(r3(moe(0.3, 400)), 0.002), "1.96√(p̂q̂/n).", [S`\(1.96\sqrt{\frac{0.21}{400}}\).`], `${r3(moe(0.3, 400))}`),
    q("robust", "Household incomes are strongly skewed right. Which pair should be reported?", choice(["median and IQR", "mean and standard deviation", "mode and range", "r and r²"], 0), "Resistant measures.", ["Skewed data."], "median and IQR"),
  ]),

  ...hard([
    ["Choosing between models", "Data on a phone's battery level (%) every 30 minutes: 100, 91, 83, 76, 70, 64, 59, 55. (a) Explain why a linear model may not be best. (b) Fit an exponential model and compare. (c) Which model would you report?",
      (() => { const x = [0, 1, 2, 3, 4, 5, 6, 7], y = [100, 91, 83, 76, 70, 64, 59, 55], Ll = linreg(x, y), El = linreg(x, y.map(Math.log)), A = Math.exp(El.b), B = Math.exp(El.a); const r2e = 1 - sum(y.map((v, i) => (v - A * B ** x[i]) ** 2)) / sum(y.map((v) => (v - mean(y)) ** 2)); return [S`(a) The drops shrink (9, 8, 7, 6, 6, 5, 4): the decrease slows, so the pattern curves.`, S`(b) Linear \(r^2\approx${r3(corr(x, y) ** 2)}\); exponential \(\hat y\approx${r2(A)}(${r3(B)})^x\), \(R^2\approx${r3(r2e)}\).`, S`(c) The exponential (a constant percent drop per half hour), which also fits the context and avoids predicting a negative charge.`]; })(),
      "exponential decay",
      fig(scatterSvg([0, 1, 2, 3, 4, 5, 6, 7].map((x, i) => [x, [100, 91, 83, 76, 70, 64, 59, 55][i]]), { xmin: 0, xmax: 8, ymin: 40, ymax: 105, xlabel: "half-hours", ylabel: "battery (%)" }))],
    ["Analysis with limitations", "A survey of 60 volunteers from a fitness club finds r = 0.71 between weekly exercise hours and self-rated happiness (1–10). Analyse what can and cannot be concluded.",
      [S`\(r^2\approx0.50\): about half the variation in happiness ratings is associated with exercise in this group.`, S`Limitations: volunteers from one club (not representative); self-rated happiness (response bias); observational (no causation).`, S`Conclusion: a moderately strong positive association among these volunteers; it should not be generalized or read as cause and effect.`],
      "association only, limited to similar volunteers"],
  ], [
    q("hard", "A random sample of 900 gives p̂ = 0.55. Find the lower end of the 95% confidence interval (3 decimals).", num(r3(0.55 - moe(0.55, 900)), 0.002), "p̂ − E.", [S`\(0.55-0.0325\).`], `${r3(0.55 - moe(0.55, 900))}`),
    q("hard", "For the 16 sleep times in the lesson, how many students sleep more than the upper quartile?", num(sleep.filter((v) => v > sq3).length), "Count values above Q₃.", [S`Q₃ = ${sq3}.`], `${sleep.filter((v) => v > sq3).length}`),
    q("hard", "Two numerical variables have r = −0.2 but the scatter plot shows a clear U-shape. The best next step is…", choice(["fit a quadratic model", "conclude there is no relationship", "report r = −0.2 as the result", "remove the middle points"], 0), "Curved pattern.", ["r misses curves."], "fit a quadratic model"),
  ]),

  wrapUp({
    qas: [
      ["How do I choose an analysis?", "By the number and types of variables and the question."],
      ["What belongs in a one-variable summary?", "Centre, spread, shape, and outliers, with a display."],
      ["What must I check after fitting a line?", "r, r² and the residual plot."],
      ["How do I estimate a population proportion?", "p̂ ± 1.96√(p̂q̂/n)."],
      ["Why report limitations?", "So readers know how far the conclusions can be trusted."],
    ],
    summary: [
      "Match tools to variable types.",
      "One variable: centre, spread, shape, outliers.",
      "Two variables: plot, r, model, residuals.",
      "Groups: compare side by side. Proportions: confidence interval.",
    ],
    next: "7.4 turns the analysis into clear, honest conclusions and a report.",
  }),
];

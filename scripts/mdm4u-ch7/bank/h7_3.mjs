// 7.3 Analyzing the Data — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterSvg, residualPlotSvg, boxPlotSvg, intervalsSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { mean, median, sdS, quartiles, fences, corr, linreg, expreg, rsq } from "../../mdm4u/count.mjs";

const r2 = (v) => Math.round(v * 100) / 100;
const r3 = (v) => Math.round(v * 1000) / 1000;
const moe = (p, n) => 1.96 * Math.sqrt((p * (1 - p)) / n);
const cx = [0, 1, 2, 3, 4, 5, 6], cy = [40, 33, 28, 23, 19, 16, 13]; // cooling cup (°C above room)
const Lc = linreg(cx, cy), Ec = expreg(cx, cy);
const d = [18, 22, 23, 25, 26, 27, 28, 30, 31, 33, 35, 62];

export const TOPIC = "7.3 Analyzing the Data";
export const Q = [
  num(`A cup cools: temperature above room temperature (°C) at minutes 0–6 is ${cy.join(", ")}. Find r² for a linear model (3 decimals).`, r3(corr(cx, cy) ** 2), "Square r.", scatterSvg(cx.map((x, i) => [x, cy[i]]), { xmin: 0, xmax: 7, ymin: 0, ymax: 45, line: Lc }), 0.002),
  num(`For the cooling data ${cy.join(", ")} (minutes 0–6), find R² for an exponential model (3 decimals).`, r3(rsq(cx, cy, (x) => Ec.A * Ec.B ** x)), "Fit ŷ = A·Bˣ.", null, 0.003),
  mc(`For the cooling data ${cy.join(", ")}, the residual plot of the linear fit is shown. Which model should be reported?`, "exponential", ["linear", "quadratic with a maximum", "no model"], "Curved residuals; constant percent cooling.", residualPlotSvg(cx.map((x, i) => [x, cy[i]]), Lc, { xmin: -1, xmax: 7 })),
  num(`For the cooling data, find the exponential model's B (3 decimals).`, r3(Ec.B), "Growth factor per minute.", null, 0.003),
  num(`For ${d.join(", ")}, find the upper fence.`, fences(d)[1], "Q₃ + 1.5 IQR.", boxPlotSvg([{ data: d }], { min: 15, max: 65, step: 5 }), 0.001),
  num(`For ${d.join(", ")}, find the difference between the mean and the median (2 decimals).`, r2(mean(d) - median(d)), "The outlier raises the mean.", null, 0.01),
  num("Two random samples of 400 give p̂ = 0.42 and p̂ = 0.51. Find the gap between the upper end of the first interval and the lower end of the second (3 decimals; negative means overlap).", r3((0.51 - moe(0.51, 400)) - (0.42 + moe(0.42, 400))), "Lower₂ − upper₁.", intervalsSvg([[0.42 - moe(0.42, 400), 0.42 + moe(0.42, 400)], [0.51 - moe(0.51, 400), 0.51 + moe(0.51, 400)]], { min: 0.35, max: 0.6, ticks: [0.35, 0.4, 0.45, 0.5, 0.55, 0.6] }), 0.002),
  mc("Two random samples of 400 give p̂ = 0.42 and 0.51 with 95% intervals that do not overlap. The best conclusion is…", "the two populations very likely differ", ["the samples are biased", "the difference is certainly due to chance", "the intervals are wrong"], "No overlap."),
  num("A survey wants ±3 points but only 500 responded. What margin of error (95%, p̂ = 0.5) does it actually have? (3 decimals)", r3(moe(0.5, 500)), "1.96√(0.25/500).", null, 0.002),
  num("For x: 2, 4, 6, 8, 10 and y: 5, 9, 12, 18, 20, find the residual at x = 6 (3 decimals).", r3(12 - (linreg([2, 4, 6, 8, 10], [5, 9, 12, 18, 20]).a * 6 + linreg([2, 4, 6, 8, 10], [5, 9, 12, 18, 20]).b)), "y − ŷ.", null, 0.002),
  ms("A student finds r = 0.85 between hours of video gaming and reaction speed in 25 volunteer gamers. Which are limitations? Select all.", ["volunteer sample", "small sample", "observational design", "r is too high to be real", "possible confounding (practice, age)"], [0, 1, 2, 4], "Sample and design."),
  mc("Which analysis compares the distribution of sleep for students with and without a part-time job, and checks for association with a categorical outcome (tired / not tired)?", "box plots of sleep by job status, and a contingency table of job status × tiredness", ["one scatter plot", "a single mean", "a circle graph of sleep"], "Numerical by group; categorical × categorical."),
  tf("If a confidence interval is 0.38 to 0.46, the sample proportion was 0.42.", true, "The centre of the interval."),
  tf("A regression with r² = 0.95 can be used to predict far outside the data range.", false, "Extrapolation."),
  num("A 95% interval is 0.38 to 0.46. Estimate the sample size (nearest whole number).", Math.round((1.96 / 0.04) ** 2 * 0.42 * 0.58), "E = 0.04; n = (1.96/E)² p̂q̂.", null, 2),
  num("The table gives counts. What percent of job-holders feel tired (1 decimal)?", Math.round((66 / 110) * 1000) / 10, "66/110.", tableSvg([["", "tired", "not tired", "total"], ["job", "66", "44", "110"], ["no job", "54", "126", "180"]]), 0.05),
  num("Using the same table (66 of 110 job-holders and 54 of 180 others feel tired), find the difference in percentages (job − no job).", 30, "60% − 30%.", null, 0.05),
  mc("For the same table, which statement is justified?", "feeling tired is associated with having a job", ["jobs cause tiredness", "there is no association", "everyone with a job is tired"], "Association only."),
  num("A sample of 12 values has mean 30 and s = 4. A 13th value of 30 is added. Find the new s (3 decimals).", r3(Math.sqrt((11 * 16) / 12)), "The sum of squares stays 176; divide by 12.", null, 0.002),
  mc("A scatter plot of two variables shows two clusters with different trends. The best next step is…", "look for a grouping variable and analyse the groups separately", ["report one r for all points", "delete one cluster", "use a circle graph"], "Hidden variable."),
];

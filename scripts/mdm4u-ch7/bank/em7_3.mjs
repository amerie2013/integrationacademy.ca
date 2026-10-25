// 7.3 Analyzing the Data — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterSvg, boxPlotSvg, barsSvg } from "../../mdm4u/figs.mjs";
import { mean, median, sdS, quartiles, corr, linreg } from "../../mdm4u/count.mjs";

const r2 = (v) => Math.round(v * 100) / 100;
const r3 = (v) => Math.round(v * 1000) / 1000;
const moe = (p, n) => 1.96 * Math.sqrt((p * (1 - p)) / n);
const tool = (data, k, wrong) => mc(`Which display best suits ${data}?`, k, wrong, "Match the display to the variable types.");
const E1 = (p, n) => num(`In a random sample of ${n}, p̂ = ${p}. Find the 95% margin of error (3 decimals).`, r3(moe(p, n)), "1.96√(p̂q̂/n).", null, 0.002);

export const E = [
  tool("the favourite fruit of 150 students", "bar graph", ["scatter plot", "box plot", "histogram"]),
  tool("the heights of 300 students", "histogram or box plot", ["circle graph", "scatter plot", "contingency table"]),
  tool("study time and test score for 40 students", "scatter plot", ["circle graph", "bar graph", "pictograph"]),
  tool("commute times for bus riders and car riders", "side-by-side box plots", ["a single circle graph", "a scatter plot", "a stem-and-leaf plot of all values together"]),
  E1(0.5, 400), E1(0.3, 500), E1(0.6, 250), E1(0.15, 900),
  num("Find the median of 12, 7, 9, 15, 10.", 10, "Order: 7, 9, 10, 12, 15."),
  num("Find the mean of 12, 7, 9, 15, 10.", 10.6, "53 ÷ 5.", null, 0.001),
  num("Using ŷ = 2.5x + 40, predict y at x = 6.", 55, "15 + 40."),
  mc("Data on household incomes are strongly skewed right. Which centre should be reported?", "median", ["mean", "mode only", "range"], "Resistant."),
  mc("After fitting a regression line, which plot checks whether a line is appropriate?", "a residual plot", ["a circle graph", "a pictograph", "a histogram of x only"], "Residuals."),
  tf("A confidence interval accounts for bias in how the sample was chosen.", false, "Only random sampling error."),
  tf("r² tells the proportion of variation in y explained by the linear model.", true, "Definition."),
  tf("Comparing raw counts is fair when groups have very different sizes.", false, "Use percents."),
  num("Read the box plot: what is the median commute?", 25, "The line in the box.", boxPlotSvg([{ five: [10, 18, 25, 31, 45] }], { min: 5, max: 50, step: 5 })),
  num("Read the scatter plot: is the correlation positive or negative? Enter 1 for positive, −1 for negative.", -1, "The points fall to the right.", scatterSvg([[1, 9], [2, 8.2], [3, 7.1], [4, 6.3], [5, 5.2], [6, 4.4]], { xmin: 0, xmax: 7, ymin: 3, ymax: 10 })),
  mc("Which statistic describes spread?", "standard deviation", ["mean", "median", "mode"], "Spread."),
  mc("Which pair is best for describing a symmetric distribution with no outliers?", "mean and standard deviation", ["median and IQR only", "mode and range", "r and r²"], "Symmetric data."),
];

const hx = [1, 2, 3, 4, 5, 6, 7, 8], hy = [12, 15, 15, 19, 21, 22, 26, 27];
const L = linreg(hx, hy);
const a = [34, 38, 41, 45, 47, 52], b = [40, 44, 49, 51, 55, 60];
export const M = [
  num(`For x: ${hx.join(", ")}; y: ${hy.join(", ")}, find r (3 decimals).`, r3(corr(hx, hy)), "Technology.", null, 0.002),
  num(`For x: ${hx.join(", ")}; y: ${hy.join(", ")}, find the slope of the regression line (3 decimals).`, r3(L.a), "Technology.", null, 0.002),
  num(`For x: ${hx.join(", ")}; y: ${hy.join(", ")}, predict y at x = 5.5 (2 decimals).`, r2(L.a * 5.5 + L.b), "Use the regression line.", scatterSvg(hx.map((x, i) => [x, hy[i]]), { xmin: 0, xmax: 9, ymin: 10, ymax: 30, line: L }), 0.02),
  num(`Group A: ${a.join(", ")}; group B: ${b.join(", ")}. Find the difference of the means (B − A).`, r2(mean(b) - mean(a)), "Compare centres.", boxPlotSvg([{ data: a, label: "A" }, { data: b, label: "B" }], { min: 30, max: 65, step: 5 }), 0.01),
  num(`Find the sample standard deviation of ${a.join(", ")} (2 decimals).`, r2(sdS(a)), "Technology.", null, 0.02),
  num("A random sample of 640 gives p̂ = 0.45. Find the upper end of the 95% confidence interval (3 decimals).", r3(0.45 + moe(0.45, 640)), "p̂ + E.", null, 0.002),
  num("Find the IQR of 4, 6, 7, 9, 10, 12, 15, 18.", quartiles([4, 6, 7, 9, 10, 12, 15, 18])[2] - quartiles([4, 6, 7, 9, 10, 12, 15, 18])[0], "Q₃ − Q₁.", null, 0.001),
  num("The data 3, 4, 4, 5, 5, 6, 40 contain an outlier. Find the median.", 5, "Middle value."),
  num("The data 3, 4, 4, 5, 5, 6, 40 contain an outlier. Find the mean (2 decimals).", r2(mean([3, 4, 4, 5, 5, 6, 40])), "67 ÷ 7.", null, 0.01),
  mc("For the data 3, 4, 4, 5, 5, 6, 40, which measure should be reported?", "median", ["mean", "range", "standard deviation"], "Outlier present."),
  mc("A scatter plot shows a clear curve. The best next step is…", "fit a non-linear model and check its residuals", ["report r only", "remove the curved part", "use a circle graph"], "Model the shape."),
  ms("Which should accompany a reported mean? Select all.", ["the sample size", "a measure of spread", "the units", "the colour of the graph", "any outliers"], [0, 1, 2, 4], "Context and variability."),
  tf("Two 95% confidence intervals that overlap a lot suggest the difference between the samples may be due to chance.", true, "Overlap."),
  tf("A residual plot with a U-shape supports a linear model.", false, "A curve is needed."),
  num("The bar graph shows the percent of each age group who recycle. By how many percentage points does the higher group exceed the lower?", 23, "71 − 48.", barsSvg([48, 71], { labels: ["under 30", "30+"], top: true, ymax: 90 })),
  num("A sample of 250 has 95 'yes' answers. Find p̂.", 0.38, "95/250.", null, 0.001),
  num("In a sample of 250 with 95 'yes' answers, find the 95% margin of error (3 decimals).", r3(moe(0.38, 250)), "1.96√(0.38·0.62/250).", null, 0.002),
  mc("Which analysis suits “Is grade level associated with whether students play a sport?”", "a contingency table with conditional percentages", ["a scatter plot with r", "a single mean", "a regression line"], "Two categorical variables."),
  mc("Which analysis suits “Is weekly exercise related to resting heart rate?”", "scatter plot, r and a regression line", ["a circle graph", "a contingency table", "the mode"], "Two numerical variables."),
  num("Using ŷ = −1.8x + 95 for x in 5 to 25, predict y at x = 12.", 73.4, "−21.6 + 95.", null, 0.001),
];

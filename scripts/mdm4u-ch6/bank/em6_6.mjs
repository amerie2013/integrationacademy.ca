// 6.6 Residuals, Outliers & Hidden Variables — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterSvg, residualPlotSvg } from "../../mdm4u/figs.mjs";
import { linreg, residuals, corr } from "../../mdm4u/count.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const res = (a, b, x, y) => num(`For ŷ = ${a}x ${b < 0 ? "−" : "+"} ${Math.abs(b)}, find the residual of (${x}, ${y}).`, r3(y - (a * x + b)), "y − ŷ.", null, 0.002);
const miss = (list) => num(`The residuals of a least-squares line are ${list.join(", ")} and x. Find x.`, r3(-list.reduce((s, v) => s + v, 0)), "Residuals add to 0.", null, 0.002);

export const E = [
  res(2, 3, 4, 12),
  res(1.5, 10, 6, 17),
  res(-0.5, 20, 10, 13),
  res(3, -4, 7, 20),
  miss([1, -2, 0.5, 1.5]),
  miss([-3, 2, 4, -1.5]),
  miss([0.8, -0.3, 1.1, -0.6, 0.4]),
  mc("A residual plot with random scatter around 0 suggests…", "a linear model is appropriate", ["a curved model is needed", "there is an outlier", "r = 0"], "No pattern."),
  mc("A U-shaped residual plot suggests…", "the relationship is curved", ["the line is perfect", "the slope is negative", "there are no outliers"], "Pattern."),
  mc("An outlier in regression is a point with…", "a large residual", ["the largest x", "a residual of 0", "the smallest y"], "Far from the line vertically."),
  mc("An influential point is usually one with…", "an x-value far from the others", ["a residual of exactly 0", "the median y", "a negative residual"], "Leverage."),
  mc("Which is a valid reason to remove a data point?", "it was recorded incorrectly", ["it lowers r", "it is above the line", "it is the first point"], "Errors or different conditions."),
  tf("A residual plot graphs residuals against x.", true, "Definition."),
  tf("Points above the regression line have negative residuals.", false, "Positive."),
  tf("A hidden variable can make two unrelated variables appear correlated.", true, "Common cause."),
  mc("Across many towns, the numbers of churches and of bars are strongly correlated. A likely hidden variable is…", "population", ["the weather", "the number of rivers", "the mayor's age"], "Bigger towns have more of both."),
  mc("A funnel-shaped residual plot means…", "the spread of y changes as x changes", ["the data are perfectly linear", "there is no correlation", "the slope is zero"], "Changing variability."),
  num("A point has residual 6 and ŷ = 40. What is the observed y?", 46, "y = ŷ + residual."),
  mc("What does this residual plot suggest?", "a linear model is appropriate", ["a curve is needed", "the spread grows with x", "there is one huge outlier"], "Random scatter.", scatterSvg([[1, 0.4], [2, -0.6], [3, 0.2], [4, 0.7], [5, -0.5], [6, -0.1], [7, 0.5], [8, -0.4]], { xmin: 0, xmax: 9, ymin: -1.5, ymax: 1.5, zero: true, ylabel: "residual" })),
  mc("Which point in the plot is the outlier?", "the red point", ["the leftmost point", "the rightmost point", "there is none"], "Far from the trend.", scatterSvg([[1, 3], [2, 5], [3, 7], [4, 15], [5, 11], [6, 13]], { xmin: 0, xmax: 7, ymin: 0, ymax: 17, hl: [3] })),
];

const ix = [2, 3, 4, 5, 6, 18], iy = [5, 7, 8, 10, 11, 12];
const cx = [1, 2, 3, 4, 5, 6, 7], cy = [1, 4, 9, 16, 25, 36, 49];
export const M = [
  num(`For x: ${ix.join(", ")}; y: ${iy.join(", ")}, find the slope with all points (3 decimals).`, r3(linreg(ix, iy).a), "Technology.", null, 0.002),
  num(`For x: ${ix.join(", ")}; y: ${iy.join(", ")}, find the slope without (18, 12) (3 decimals).`, r3(linreg(ix.slice(0, -1), iy.slice(0, -1)).a), "Five points.", null, 0.002),
  mc(`For x: ${ix.join(", ")}; y: ${iy.join(", ")}, the point (18, 12) is best described as…`, "influential (extreme x pulls the slope)", ["an outlier with a huge residual", "a typical point", "an error"], "Compare the slopes."),
  num("Find the residuals for x: 1, 2, 3, 4; y: 2, 4, 5, 9 using the least-squares line. Enter the residual at x = 3 (3 decimals).", r3(residuals([1, 2, 3, 4], [2, 4, 5, 9])[2]), "ŷ at x = 3, then y − ŷ.", null, 0.002),
  num("Find r for x: 1, 2, 3, 4, 5 and y: 3, 5, 4, 6, 5, then for the same data plus (10, 20). Enter the second r (3 decimals).", r3(corr([1, 2, 3, 4, 5, 10], [3, 5, 4, 6, 5, 20])), "One point can create correlation.", null, 0.002),
  mc("A residual plot fans out as x increases. Predictions at large x are…", "less precise", ["more precise", "exact", "impossible"], "Larger spread."),
  mc("Points with large x pull the least-squares line strongly because…", "they have high leverage: small slope changes produce big changes in ŷ there", ["they always have large residuals", "they are counted twice", "r ignores them"], "Leverage."),
  ms("Which are hidden variables commonly behind misleading correlations? Select all.", ["population size", "time", "temperature or season", "the correlation coefficient", "age"], [0, 1, 2, 4], "r is not a variable."),
  tf("Removing an influential point always increases r.", false, "It may increase or decrease r."),
  tf("An influential point can have a small residual.", true, "It drags the line toward itself."),
  mc("The residual plot of a linear fit to the data is shown. What does it show?", "a curved pattern: use a non-linear model", ["random scatter: the line is fine", "one outlier only", "a funnel"], "Systematic U.", residualPlotSvg(cx.map((x, i) => [x, cy[i]]), linreg(cx, cy), { xmin: 0, xmax: 8 })),
  mc("Which point is influential?", "the red point at the far right", ["the leftmost point", "the point in the middle", "none"], "Extreme x.", scatterSvg([...ix.map((x, i) => [x, iy[i]])], { xmin: 0, xmax: 20, ymin: 0, ymax: 16, hl: [5], line: linreg(ix, iy) })),
  num("A point (12, 50) has residual −4 on a line with slope 3. Find the intercept of the line.", 18, "ŷ = 54 = 36 + b."),
  num("In a sample of 8 points, the residuals are 0.6, −1.1, 0.4, 2.3, −0.8, −0.5, x and 0.2. Find x.", -1.1, "Sum to 0.", null, 0.001),
  mc("A researcher removes all points with residuals larger than 2 to raise r². This is…", "bad practice — it biases the results", ["good practice", "required", "the definition of least squares"], "Removal needs a reason."),
  mc("The number of fire engines at a fire and the damage are correlated. The hidden variable is…", "the size of the fire", ["the colour of the engines", "the time of day", "the residual"], "Common cause."),
  mc("Across countries, chocolate consumption and Nobel prizes per person are correlated. Which approach checks for a hidden variable?", "compare countries with similar wealth", ["eat more chocolate", "recompute r with more decimals", "remove countries with prizes"], "Control for wealth."),
  num("Data have r = 0.85. After removing one data-entry error, r becomes 0.95. By how much does r² increase (3 decimals)?", r3(0.95 ** 2 - 0.85 ** 2), "0.9025 − 0.7225.", null, 0.002),
  tf("A good residual plot has roughly equal numbers of positive and negative residuals spread evenly across x.", true, "Random scatter."),
  mc("A line fitted to enrolment data has one year with a large negative residual, the year a school wing was closed. The best action is…", "explain the year and analyse with and without it", ["delete it silently", "change its value", "ignore residuals"], "Report transparently."),
];

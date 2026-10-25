// 5.5 Measures of Spread — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { dotPlotSvg, barsSvg, tableSvg, boxPlotSvg } from "../../mdm4u/figs.mjs";
import { sdP, sdS, varP, sum } from "../../mdm4u/count.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const L = (xs) => xs.join(", ");
const qRange = (xs) => num(`Find the range of ${L(xs)}.`, Math.max(...xs) - Math.min(...xs), "Maximum − minimum.", null, 0.001);
const qSdP = (xs, tol = 0.002) => num(`Find the population standard deviation σ of ${L(xs)} (3 decimals).`, r3(sdP(xs)), "√(Σ(x − μ)²/N).", null, tol);
const qSdS = (xs, tol = 0.002) => num(`Find the sample standard deviation s of ${L(xs)} (3 decimals).`, r3(sdS(xs)), "√(Σ(x − x̄)²/(n − 1)).", null, tol);

export const E = [
  qRange([14, 22, 9, 30, 17]),
  qRange([3.2, 4.8, 2.9, 5.5]),
  qRange([102, 97, 115, 88, 109, 94]),
  qSdP([2, 4, 4, 4, 6]),
  qSdP([10, 12, 14, 16]),
  qSdP([5, 5, 5, 5]),
  qSdS([4, 6, 8]),
  qSdS([1, 3, 5, 7]),
  num("Find the population variance σ² of 1, 2, 3, 4, 5.", varP([1, 2, 3, 4, 5]), "Mean 3; squares 4, 1, 0, 1, 4.", null, 0.001),
  num("The variance of a data set is 49. What is the standard deviation?", 7, "√49."),
  num("The standard deviation is 2.5. What is the variance?", 6.25, "2.5².", null, 0.001),
  num("Data with σ = 3 are all increased by 10. What is the new σ?", 3, "Shifting does not change spread."),
  num("Data with σ = 3 are all multiplied by 5. What is the new σ?", 15, "5 × 3."),
  mc("For a sample, the sum of squared deviations is divided by…", "n − 1", ["n", "n + 1", "2n"], "Sample formula."),
  mc("Which measure of spread uses only two values?", "range", ["standard deviation", "variance", "interquartile range"], "Max − min."),
  tf("The standard deviation can be negative.", false, "It is a square root."),
  tf("If all values are equal, the standard deviation is 0.", true, "No deviations."),
  mc("The figure shows box plots of data sets A and B. Which has the larger standard deviation?", "B", ["A", "they are equal", "cannot tell"], "B is far more spread out.", boxPlotSvg([{ data: [8, 9, 10, 10, 11, 12], label: "A" }, { data: [2, 5, 9, 11, 15, 18], label: "B" }], { min: 0, max: 20, step: 2 })),
  mc("This dot plot shows a data set. Which is the best estimate of its standard deviation?", "about 2", ["about 0.2", "about 10", "about 20"], "Most values are within 2 or so of the mean 10.", dotPlotSvg([7, 8, 9, 10, 10, 10, 11, 12, 13], { min: 4, max: 16, step: 2 })),
  num("Sum of squared deviations is 72 for a sample of 9 values. Find s.", 3, "√(72/8)."),
];

export const M = [
  qSdS([12, 15, 17, 19, 22]),
  qSdP([3, 7, 7, 9, 14]),
  qSdS([2.4, 2.9, 3.1, 3.6]),
  num("A population has Σx = 50, Σx² = 290, N = 10. Find σ² using σ² = Σx²/N − μ².", 4, "29 − 25."),
  num("A population has Σx = 120, Σx² = 1560, N = 12. Find σ (3 decimals).", r3(Math.sqrt(1560 / 12 - 100)), "130 − 100 = 30.", null, 0.002),
  num("Temperatures have σ = 5°C. In °F (F = 1.8C + 32), what is σ?", 9, "1.8 × 5."),
  num("Prices have σ = 4 dollars. A 25% discount is applied to every price. What is the new σ?", 3, "0.75 × 4."),
  num("Two values have mean 20 and population standard deviation 5. What is the larger value?", 25, "20 ± 5."),
  num("Estimate the population σ from the grouped table (3 decimals).", (() => { const m = [5, 15, 25], f = [4, 8, 4], n = 16, x = 15; return r3(Math.sqrt(sum(m.map((v, i) => f[i] * (v - x) ** 2)) / n)); })(), "Midpoints 5, 15, 25; mean 15.", tableSvg([["interval", "0–10", "10–20", "20–30"], ["frequency", "4", "8", "4"]]), 0.002),
  num("The histogram shows the grouped data. Estimate the mean (midpoints 2, 6, 10, 14).", (2 * 3 + 6 * 7 + 10 * 7 + 14 * 3) / 20, "Σfm ÷ 20.", barsSvg([3, 7, 7, 3], { labels: ["0–4", "4–8", "8–12", "12–16"], histogram: true, top: true }), 0.001),
  mc("Player A's points have mean 18, σ = 2. Player B's have mean 18, σ = 7. Which statement is true?", "A is more consistent", ["B is more consistent", "they are equally consistent", "B scores more on average"], "Smaller σ."),
  mc("Why is the sample standard deviation calculated with n − 1?", "to correct a sample's tendency to underestimate the population's spread", ["to make the formula simpler", "because one value is always an outlier", "to make s smaller than σ"], "Unbiased variance."),
  ms("Which change the standard deviation? Select all.", ["adding 4 to every value", "multiplying every value by 2", "replacing the largest value with a much larger one", "subtracting the mean from every value"], [1, 2], "Shifts do not change σ."),
  tf("Two data sets with the same range must have the same standard deviation.", false, "Middle values matter."),
  tf("A data set's variance is in squared units.", true, "Squared deviations."),
  mc("Which description fits a data set with σ closest to 0?", "all values at or next to one number", ["values spread evenly from 0 to 20", "two clusters far apart", "one large outlier"], "Little spread."),
  num("For the data in the dot plot, find the population standard deviation (3 decimals).", r3(sdP([4, 6, 6, 8, 8, 8, 10, 10, 12])), "Mean 8.", dotPlotSvg([4, 6, 6, 8, 8, 8, 10, 10, 12], { min: 2, max: 14, step: 2 }), 0.002),
  num("A sample of 6 has s = 4. What is the sum of squared deviations?", 80, "s² × (n − 1) = 16 × 5."),
  num("A population of 8 values has σ = 3. What is Σ(x − μ)²?", 72, "σ² × N."),
  mc("Marks have mean 65 and σ = 10. The teacher adds 5 to everyone and then multiplies by 1.1. The new σ is…", "11", ["10", "15.5", "16"], "Only the multiplier matters: 1.1 × 10."),
];

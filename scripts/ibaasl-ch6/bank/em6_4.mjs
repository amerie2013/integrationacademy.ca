// 6.4 Measures of Dispersion — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const dotplot = (xs, y0 = 0, color = "violet") => { const seen = {}; return xs.map((x) => ({ x, y: y0 + (seen[x] = (seen[x] ?? 0) + 1) * 0.4, color })); };
const box = (mn, q1, q2, q3, mx, y = 1, h = 0.6, color = "violet") => [
  { pts: [[mn, y], [q1, y]], color }, { pts: [[q3, y], [mx, y]], color },
  { pts: [[q1, y - h / 2], [q3, y - h / 2], [q3, y + h / 2], [q1, y + h / 2], [q1, y - h / 2]], color },
  { pts: [[q2, y - h / 2], [q2, y + h / 2]], color: "red" },
];

export const E = [
  num("Find the range of 12, 5, 19, 8, 14.", 14, "19 − 5."),
  num("Find the range of 3.5, 7.2, 1.8, 6.0.", 5.4, "7.2 − 1.8.", null, 1e-9),
  num("The variance of a data set is 25. Find the standard deviation.", 5, "√25."),
  num("The standard deviation is 6. Find the variance.", 36, "6²."),
  num("Find the standard deviation of 4, 4, 4, 4.", 0, "No spread."),
  num("Find the standard deviation of 2, 6 (population).", 2, "Mean 4; deviations ±2."),
  num("Find the variance of 1, 3, 5.", 8 / 3, "Mean 3; squares 4, 0, 4; 8/3.", null, 0.01),
  mc("Which measure of spread uses every value?", "standard deviation", ["IQR", "range", "median"], "It uses each deviation from the mean."),
  mc("Which measure of spread is least affected by an outlier?", "IQR", ["range", "standard deviation", "variance"], "It uses the middle half."),
  tf("Adding 10 to every value increases the standard deviation by 10.", false, "Shifting leaves the spread unchanged."),
  tf("Multiplying every value by 3 multiplies the standard deviation by 3.", true, "Every deviation triples."),
  fill("The square of the standard deviation is called the ___.", ["variance", "Variance"], "σ²."),
  num("Data have SD 4. Every value is multiplied by 5. Find the new SD.", 20, "4 × 5."),
  num("Data have SD 4. Every value is increased by 5. Find the new SD.", 4, "Unchanged."),
  num("Data have variance 9. Every value is doubled. Find the new variance.", 36, "9 × 4."),
  num("The dot plot shows a data set. Find its range.", 9, "11 − 2.", planeDoc({ view: { xmin: 0, xmax: 13, ymin: 0, ymax: 2 }, points: dotplot([2, 4, 5, 5, 7, 8, 11]), step: { x: 1, y: 1 } })),
  num("From the box plot, find the IQR.", 14, "48 − 34.", planeDoc({ view: { xmin: 20, xmax: 70, ymin: 0, ymax: 2 }, segs: box(24, 34, 41, 48, 62), step: { x: 5, y: 1 } })),
  mc("Data set A has SD 2 and data set B has SD 9. Which is true?", "B is more spread out", ["A is more spread out", "B has a larger mean", "they have the same spread"], "Larger SD, more spread."),
  num("The deviations from the mean of four values are −3, 1, 2 and d. Find d.", 0, "Deviations add to 0."),
  num("Find the IQR of 4, 7, 9, 12, 15, 18.", 8, "Q1 = 7, Q3 = 15."),
];

export const M = [
  num("Find the standard deviation of 5, 7, 9, 11, 13 (3 s.f.).", Math.sqrt(8), "Mean 9; squares 16, 4, 0, 4, 16.", null, 0.005),
  num("Find the standard deviation of 3, 3, 7, 7 (population).", 2, "Mean 5; deviations ±2."),
  num("Values 1, 2, 3 have frequencies 3, 4, 3. Find the variance.", 0.6, "Mean 2; Σf(x − 2)² = 3 + 0 + 3 = 6; 6/10.", null, 1e-9),
  num("Data have mean 40 and SD 5. Each value y = 2x − 10. Find the new mean.", 70, "2(40) − 10."),
  num("Data have mean 40 and SD 5. Each value y = 2x − 10. Find the new SD.", 10, "2 × 5."),
  num(S`For 5 values, $\sum x=30$ and $\sum x^2=200$. Find the variance using $\sigma^2=\frac{\sum x^2}{n}-\bar x^2$.`, 4, "40 − 36."),
  num(S`For 8 values, $\sum x=64$ and $\sum x^2=560$. Find the standard deviation.`, Math.sqrt(6), "70 − 64 = 6.", null, 0.01),
  ms("Each value of a data set is increased by 7. Which change? Select all.", ["mean", "median", "SD", "IQR"], [0, 1], "Spread measures are unchanged."),
  ms("Each value is multiplied by 0.5. Which change? Select all.", ["mean", "SD", "IQR", "variance"], [0, 1, 2, 3], "All scale (variance by 0.25)."),
  num("Temperatures have SD 4 °C. Find the SD in °F (F = 1.8C + 32).", 7.2, "1.8 × 4.", null, 1e-9),
  num("The dot plots show two data sets with the same mean. The top set is 1, 4, 5, 6, 9. Find its standard deviation (3 s.f.).", Math.sqrt(6.8), "Mean 5; squares 16, 1, 0, 1, 16 = 34; 34/5 = 6.8.", planeDoc({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 3 }, points: [...dotplot([1, 4, 5, 6, 9], 1.4, "blue"), ...dotplot([4, 5, 5, 5, 6], 0, "green")], step: { x: 1, y: 1 } }), 0.005),
  num("Two box plots are shown. By how much is A's IQR larger than B's?", 8, "A: 54 − 38 = 16; B: 50 − 42 = 8.", planeDoc({ view: { xmin: 25, xmax: 70, ymin: 0, ymax: 3 }, segs: [...box(30, 38, 46, 54, 64, 2, 0.6, "blue"), ...box(36, 42, 46, 50, 58, 1, 0.6, "green")], step: { x: 5, y: 1 } })),
  tf("Variance is measured in the same units as the data.", false, "It is in squared units."),
  num("The data 6, 8, 10, x have mean 9. Find x.", 12, "Total 36."),
  num("For the data 6, 8, 10, 12, find the standard deviation (3 s.f.).", Math.sqrt(5), "Mean 9; squares 9, 1, 1, 9; 20/4.", null, 0.005),
  mc("Runner A: mean 50.2 s, SD 0.4 s. Runner B: mean 49.8 s, SD 1.5 s. Which statement is fair?", "B is faster on average; A is more consistent", ["A is faster and more consistent", "B is slower", "they are equally consistent"], "Compare mean and SD separately."),
  num("Data have mean 12 and SD 3. Each value is multiplied by k; the new SD is 7.5. Find k.", 2.5, "3k = 7.5.", null, 1e-9),
  num("For the new data (×2.5), find the new mean.", 30, "12 × 2.5."),
  num("Find the IQR of 10, 12, 15, 17, 20, 23, 26, 30, 33.", 14.5, "Median 20; Q1 = (12 + 15)/2 = 13.5, Q3 = (26 + 30)/2 = 28.", null, 1e-9),
  num("Find the range of the values 2x − 3 for x = 4, 7, 11.", 14, "Values 5, 11, 19."),
];

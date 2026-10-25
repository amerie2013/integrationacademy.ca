// 6.1 Scatter Plots & Correlation — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { corr, linreg } from "../../mdm4u/count.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const rsum = (n, sx, sy, sxy, sxx, syy) => (n * sxy - sx * sy) / Math.sqrt((n * sxx - sx * sx) * (n * syy - sy * sy));
const base = [[1, 4], [2, 6], [3, 5], [4, 7], [5, 6]];

export const TOPIC = "6.1 Scatter Plots & Correlation";
export const Q = [
  num("For n = 8: Σx = 40, Σy = 96, Σxy = 534, Σx² = 240, Σy² = 1220. Find r (3 decimals).", r3(rsum(8, 40, 96, 534, 240, 1220)), "Formula.", null, 0.002),
  num("For n = 7: Σx = 49, Σy = 140, Σxy = 910, Σx² = 371, Σy² = 2940. Find r (3 decimals).", r3(rsum(7, 49, 140, 910, 371, 2940)), "Formula.", null, 0.002),
  num("Find r for x: 3, 5, 6, 8, 10, 12; y: 40, 35, 33, 27, 22, 18 (3 decimals).", r3(corr([3, 5, 6, 8, 10, 12], [40, 35, 33, 27, 22, 18])), "Technology or formula.", null, 0.002),
  num("The five points in the plot have r ≈ " + r3(corr(base.map((p) => p[0]), base.map((p) => p[1]))) + ". A sixth point (12, 15) is added. Find the new r (3 decimals).", r3(corr([...base.map((p) => p[0]), 12], [...base.map((p) => p[1]), 15])), "Recompute with six points.", scatterSvg([...base, [12, 15]], { xmin: 0, xmax: 14, ymin: 0, ymax: 18, hl: [5] }), 0.002),
  num("Read the table and find r (3 decimals).", r3(corr([2, 4, 6, 8, 10], [7, 9, 13, 14, 18])), "n = 5.", tableSvg([["x", "2", "4", "6", "8", "10"], ["y", "7", "9", "13", "14", "18"]]), 0.002),
  num("Data are (1, 2), (2, 4), (3, 6), (4, 8), (5, k). For which k is r exactly 1?", 10, "The point must lie on y = 2x."),
  mc("A data set has r = 0.8. Every x is replaced by 3x + 7 and every y by 100 − y. The new r is…", "−0.8", ["0.8", "2.4", "−2.4"], "Positive scaling of x keeps r; reflecting y flips the sign."),
  mc("Which plot most likely has r ≈ −0.6?", "a downward cloud with a lot of scatter", ["points exactly on a falling line", "a tight upward band", "a U-shape"], "Moderate-to-weak negative."),
  mc("The scatter plot shows two clusters. What is misleading about the high r?", "the correlation comes from the gap between two groups, not a trend within them", ["r is always misleading", "the axes are swapped", "r cannot be calculated for clusters"], "Within each cluster there is no trend.", scatterSvg([[1, 2], [1.5, 3], [2, 2.5], [2.5, 2], [8, 9], [8.5, 8], [9, 9.5], [9.5, 8.5]], { xmin: 0, xmax: 11, ymin: 0, ymax: 11 })),
  num("For the clustered data (1, 2), (1.5, 3), (2, 2.5), (2.5, 2), (8, 9), (8.5, 8), (9, 9.5), (9.5, 8.5), find r (3 decimals).", r3(corr([1, 1.5, 2, 2.5, 8, 8.5, 9, 9.5], [2, 3, 2.5, 2, 9, 8, 9.5, 8.5])), "Technology.", scatterSvg([[1, 2], [1.5, 3], [2, 2.5], [2.5, 2], [8, 9], [8.5, 8], [9, 9.5], [9.5, 8.5]], { xmin: 0, xmax: 11, ymin: 0, ymax: 11 }), 0.002),
  num("Points lie on y = x² for x = −2, −1, 0, 1, 2. Find r.", 0, "Symmetric curve.", scatterSvg([[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]], { xmin: -3, xmax: 3, ymin: -1, ymax: 5 }), 0.001),
  num("Points lie on y = x² for x = 1, 2, 3, 4, 5. Find r (3 decimals).", r3(corr([1, 2, 3, 4, 5], [1, 4, 9, 16, 25])), "Curved but increasing.", null, 0.002),
  ms("Which statements are always true? Select all.", ["r has the same sign as the slope of the least-squares line", "r = 1 means all points are on a rising line", "r = 0 means no relationship of any kind", "r is unchanged if x and y are swapped"], [0, 1, 3], "r = 0 rules out only linear association."),
  tf("If r = 0.9 for heights and masses of adults, then taller adults are always heavier.", false, "A tendency, not a rule."),
  tf("Adding a new point exactly at (x̄, ȳ) leaves r unchanged.", true, "It adds zero to every sum of deviation products and squares, and the means stay the same."),
  mc("A sample of 4 points gives r = 0.9. Why should we be cautious?", "with so few points, r varies a lot from sample to sample", ["r is always wrong for 4 points", "the relationship must be curved", "4 points cannot have r near 1"], "Small samples."),
  num("For n = 5, Σx = 15, Σx² = 55, Σy = 20, Σy² = 90, and r = 0.9. Find Σxy (2 decimals).", Math.round(((0.9 * Math.sqrt((5 * 55 - 225) * (5 * 90 - 400)) + 300) / 5) * 100) / 100, "Solve the formula for Σxy.", null, 0.02),
  mc("Which pair would most likely show a strong positive correlation?", "a person's height and arm span", ["birth month and income", "phone number and age", "distance from school and number of siblings"], "Body proportions."),
  tf("The plot shows points exactly on a falling line (r = −1). Moving one point off the line can make r less than −1.", false, "r is always between −1 and 1; moving a point off the line makes |r| smaller.", scatterSvg([[0, 50], [2, 40], [4, 30], [6, 20], [8, 10], [10, 0]], { xmin: -1, xmax: 11, ymin: -5, ymax: 55 })),
  mc("A study of 50 cities finds r = 0.85 between the number of libraries and the number of crimes. The best first step is…", "check whether city size explains both", ["close libraries", "conclude libraries cause crime", "report r = 0.85 as proof"], "A hidden variable."),
];

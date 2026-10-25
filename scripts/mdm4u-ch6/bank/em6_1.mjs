// 6.1 Scatter Plots & Correlation — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterSvg } from "../../mdm4u/figs.mjs";
import { corr } from "../../mdm4u/count.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const P = (xs, ys) => xs.map((x, i) => [x, ys[i]]);
const rq = (xs, ys) => num(`Find r for x: ${xs.join(", ")}; y: ${ys.join(", ")} (3 decimals).`, r3(corr(xs, ys)), "Use the formula or technology.", null, 0.002);
const rs = (n, sx, sy, sxy, sxx, syy) => num(`For n = ${n}: Σx = ${sx}, Σy = ${sy}, Σxy = ${sxy}, Σx² = ${sxx}, Σy² = ${syy}. Find r (3 decimals).`, r3((n * sxy - sx * sy) / Math.sqrt((n * sxx - sx * sx) * (n * syy - sy * sy))), "r = [nΣxy − ΣxΣy]/√([nΣx² − (Σx)²][nΣy² − (Σy)²]).", null, 0.002);
const cls = ["strong positive", "moderate positive", "weak positive", "strong negative", "moderate negative", "weak negative", "very weak or none"];
const classify = (r, k) => mc(`Classify the linear correlation r = ${r}.`, k, cls.filter((c) => c !== k).slice(0, 3), "Use |r| for strength, the sign for direction.");

export const E = [
  classify(0.95, "strong positive"),
  classify(-0.92, "strong negative"),
  classify(0.71, "moderate positive"),
  classify(-0.5, "weak negative"),
  classify(0.12, "very weak or none"),
  mc("A study relates hours of exercise per week to resting heart rate. The explanatory variable is…", "hours of exercise", ["resting heart rate", "the number of people", "age"], "It may explain heart rate."),
  mc("Which variable goes on the horizontal axis of a scatter plot?", "the explanatory variable", ["the response variable", "whichever is larger", "the one with more data"], "Convention."),
  mc("Which r shows the strongest linear relationship?", "−0.88", ["0.8", "0.45", "−0.6"], "Largest |r|."),
  tf("r can be greater than 1.", false, "−1 ≤ r ≤ 1."),
  tf("A negative r means y tends to decrease as x increases.", true, "Direction."),
  tf("r has units, such as cm or kg.", false, "Unitless."),
  tf("If r = 0 there can still be a strong curved relationship.", true, "r measures linear association."),
  rq([1, 2, 3, 4], [2, 4, 6, 8]),
  rq([1, 2, 3, 4], [8, 6, 4, 2]),
  rq([1, 2, 3, 4, 5], [2, 3, 3, 5, 6]),
  mc("Every x-value is multiplied by 10. The correlation r…", "does not change", ["is multiplied by 10", "is divided by 10", "becomes 1"], "Changing units does not change r."),
  mc("Describe the relationship shown in this scatter plot of rising points.", "strong positive linear", ["strong negative linear", "no correlation", "curved"], "Rising, close to a line.", scatterSvg([[1, 3], [2, 5], [3, 6.5], [4, 8], [5, 10], [6, 11.5]], { xmin: 0, xmax: 7, ymin: 0, ymax: 13 })),
  mc("Describe the relationship shown in this scatter plot of scattered points.", "no clear linear correlation", ["strong positive", "strong negative", "perfect negative"], "A shapeless cloud.", scatterSvg([[1, 6], [2, 2], [3, 8], [4, 4], [5, 7], [6, 3], [7, 6]], { xmin: 0, xmax: 8, ymin: 0, ymax: 10 })),
  mc("An outlier on a scatter plot is…", "a point far from the overall pattern", ["the point with the largest x", "the mean of the data", "any point above the line"], "Definition."),
  mc("Which pair is most likely to have a strong negative correlation?", "age of a car and its resale value", ["height and arm span", "shoe size and favourite colour", "study time and marks"], "Older cars are worth less."),
];

export const M = [
  rq([2, 4, 5, 7, 9], [11, 15, 14, 20, 23]),
  rq([10, 20, 30, 40, 50], [62, 55, 51, 40, 33]),
  rq([1, 3, 4, 6, 8, 9], [5, 4, 7, 6, 9, 8]),
  rs(5, 15, 30, 106, 55, 206),
  rs(6, 21, 42, 168, 91, 330),
  rs(4, 10, 40, 92, 30, 440),
  num("For n = 5, Σx = 20, Σy = 35, Σxy = 152, Σx² = 90. Find the numerator nΣxy − ΣxΣy.", 60, "760 − 700."),
  num("For n = 6 with Σx = 18 and Σx² = 70, find nΣx² − (Σx)².", 96, "420 − 324."),
  mc("Every y-value is multiplied by −1. Then r…", "changes sign", ["stays the same", "becomes 0", "doubles"], "Direction reverses."),
  mc("Which statement about r is true?", "it measures only the strength of a linear relationship", ["it proves cause and effect", "it is the slope of the line", "it is a percent"], "Linear association only."),
  ms("Which are features used to describe a scatter plot? Select all.", ["direction", "form", "strength", "outliers", "colour"], [0, 1, 2, 3], "Four features."),
  ms("Which values of r indicate a strong linear relationship? Select all.", ["0.93", "−0.97", "0.5", "−0.2", "1"], [0, 1, 4], "|r| ≥ 0.9."),
  tf("Swapping the roles of x and y does not change r.", true, "The formula is symmetric."),
  tf("A single outlier can change r a lot in a small data set.", true, "Sensitive to outliers."),
  num("Read the scatter plot: estimate r to 1 decimal place.", -1, "All points lie exactly on a falling line.", scatterSvg([[1, 9], [2, 7.5], [3, 6], [4, 4.5], [5, 3], [6, 1.5]], { xmin: 0, xmax: 7, ymin: 0, ymax: 10 }), 0.05),
  mc("The scatter plot shows the points on an arch. Which value is closest to r?", "0", ["0.95", "−0.95", "1"], "The rise and fall cancel.", scatterSvg([[0, 0], [1, 5], [2, 8], [3, 9], [4, 8], [5, 5], [6, 0]], { xmin: -1, xmax: 7, ymin: -1, ymax: 10 })),
  mc("Hours of video games per week and grade average have r = −0.38. The best description is…", "a weak negative linear association", ["a strong negative association", "video games cause lower grades", "no relationship at all"], "|r| between 0.33 and 0.67."),
  mc("Which change would most likely increase |r| for a data set?", "removing an outlier far from the trend", ["adding random points", "changing units", "adding a constant to y"], "Outliers weaken r."),
  num("Two data sets have r = 0.6 and r = −0.8. What is the larger of the two |r| values?", 0.8, "Compare sizes.", null, 0.001),
  mc("A teacher finds r = 0.99 between students' heights in cm and their heights in inches. This is because…", "the two variables are exactly linearly related", ["tall students are smarter", "the sample is large", "r is always high for heights"], "One is a multiple of the other."),
];

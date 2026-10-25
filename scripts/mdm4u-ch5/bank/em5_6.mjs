// 5.6 Quartiles, Percentiles & Box Plots — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { boxPlotSvg, dotPlotSvg } from "../../mdm4u/figs.mjs";
import { quartiles, fences, pctRank, pctVal } from "../../mdm4u/count.mjs";

const L = (xs) => xs.join(", ");
const q1 = (xs) => num(`Find Q₁ of ${L(xs)}.`, quartiles(xs)[0], "Median of the lower half.", null, 0.001);
const q3 = (xs) => num(`Find Q₃ of ${L(xs)}.`, quartiles(xs)[2], "Median of the upper half.", null, 0.001);
const iqr = (xs) => num(`Find the interquartile range of ${L(xs)}.`, quartiles(xs)[2] - quartiles(xs)[0], "Q₃ − Q₁.", null, 0.001);

export const E = [
  q1([2, 5, 7, 9, 12, 15, 18]),
  q3([2, 5, 7, 9, 12, 15, 18]),
  q1([10, 12, 13, 16, 18, 21, 22, 25]),
  q3([10, 12, 13, 16, 18, 21, 22, 25]),
  iqr([31, 35, 38, 40, 44, 47, 52, 55, 60]),
  iqr([4, 4, 6, 7, 9, 10]),
  num("Q₁ = 18 and Q₃ = 30. Find the IQR.", 12, "30 − 18."),
  num("Q₁ = 18 and Q₃ = 30. Find the upper fence Q₃ + 1.5 IQR.", 48, "30 + 18."),
  num("Q₁ = 18 and Q₃ = 30. Find the lower fence Q₁ − 1.5 IQR.", 0, "18 − 18."),
  num("Read the box plot: what is the median?", 45, "The line inside the box.", boxPlotSvg([{ five: [20, 35, 45, 55, 75] }], { min: 10, max: 80, step: 10 })),
  num("Read the box plot: what is the IQR?", 20, "55 − 35.", boxPlotSvg([{ five: [20, 35, 45, 55, 75] }], { min: 10, max: 80, step: 10 })),
  mc("About what fraction of the data lie inside the box of a box plot?", "one half", ["one quarter", "three quarters", "all of it"], "Q₁ to Q₃."),
  mc("The five-number summary is…", "minimum, Q₁, median, Q₃, maximum", ["mean, median, mode, range, σ", "Q₁, Q₂, Q₃, Q₄, Q₅", "the five largest values"], "Definition."),
  tf("Q₂ is the same as the median.", true, "Second quartile."),
  tf("A value at the 90th percentile is greater than about 90% of the data.", true, "Definition."),
  num("In a group of 20, 14 values are below x and none equal it except x itself. Find the percentile rank of x.", 72.5, "(14 + 0.5)/20 × 100.", null, 0.01),
  num("In a group of 50, 30 values are below x and 4 values (including x) equal x. Find the percentile rank.", 64, "(30 + 2)/50 × 100."),
  num("Find the 50th percentile of 3, 6, 8, 11, 14, 17.", pctVal([3, 6, 8, 11, 14, 17], 50), "L = 3: average 3rd and 4th."),
  mc("Which measure is NOT affected by one extreme outlier?", "interquartile range", ["range", "mean", "standard deviation"], "Middle half only."),
  tf("In a box plot, an outlier is plotted as a separate point.", true, "Modified box plot."),
];

const dp = [3, 5, 6, 6, 7, 8, 8, 8, 9, 10, 12, 20];
export const M = [
  num("Find the upper fence for 12, 15, 16, 18, 20, 21, 23, 26, 40.", fences([12, 15, 16, 18, 20, 21, 23, 26, 40])[1], "Q₃ + 1.5 IQR.", null, 0.001),
  mc("Is 40 an outlier in 12, 15, 16, 18, 20, 21, 23, 26, 40?", fences([12, 15, 16, 18, 20, 21, 23, 26, 40])[1] < 40 ? "yes" : "no", [fences([12, 15, 16, 18, 20, 21, 23, 26, 40])[1] < 40 ? "no" : "yes", "only if the mean is 40", "cannot tell"], "Compare with the upper fence."),
  num("Find the 30th percentile of 5, 8, 9, 12, 14, 15, 18, 20, 22, 25.", pctVal([5, 8, 9, 12, 14, 15, 18, 20, 22, 25], 30), "L = 3: average the 3rd and 4th."),
  num("Find the 85th percentile of 5, 8, 9, 12, 14, 15, 18, 20, 22, 25.", pctVal([5, 8, 9, 12, 14, 15, 18, 20, 22, 25], 85), "L = 8.5: round up to the 9th."),
  num("Find the percentile rank of 15 in 5, 8, 9, 12, 14, 15, 18, 20, 22, 25.", pctRank([5, 8, 9, 12, 14, 15, 18, 20, 22, 25], 15), "(5 + 0.5)/10."),
  num("Read the dot plot: find Q₃.", quartiles(dp)[2], "Median of the upper six values.", dotPlotSvg(dp, { min: 2, max: 20, step: 2 }), 0.001),
  num("Read the dot plot: find the upper fence and decide whether 20 is an outlier. Enter the upper fence.", fences(dp)[1], "Q₃ + 1.5 IQR.", dotPlotSvg(dp, { min: 2, max: 20, step: 2 }), 0.001),
  mc("The box plots show two classes' marks. Which class had the higher median?", "Class B", ["Class A", "the same", "cannot tell"], "B's median line is further right.", boxPlotSvg([{ five: [40, 52, 60, 70, 88], label: "Class A" }, { five: [45, 58, 66, 72, 85], label: "Class B" }], { min: 30, max: 90, step: 10 })),
  mc("In the same box plots, which class's middle half is more spread out?", "Class A", ["Class B", "the same", "cannot tell"], "IQR 18 vs 14.", boxPlotSvg([{ five: [40, 52, 60, 70, 88], label: "Class A" }, { five: [45, 58, 66, 72, 85], label: "Class B" }], { min: 30, max: 90, step: 10 })),
  num("A box plot has Q₁ = 40 and Q₃ = 52. What is the largest value that is NOT an outlier on the high side?", 70, "52 + 18."),
  mc("In a box plot the median line is much closer to Q₁ than to Q₃, and the right whisker is long. The distribution is…", "skewed right", ["skewed left", "symmetric", "uniform"], "Long upper tail."),
  ms("Which are true of percentiles? Select all.", ["the 50th percentile is the median", "Q₁ is about the 25th percentile", "a percentile is always a whole number of marks", "the 99th percentile is near the top"], [0, 1, 3], "A percentile is a data value."),
  num("A student scored at the 72nd percentile in a class of 200. About how many students scored below her?", 144, "0.72 × 200."),
  tf("If the maximum value of a data set increases, Q₃ always increases.", false, "Q₃ need not change."),
  tf("Two data sets can have identical box plots but different means.", true, "Box plots do not show the mean."),
  num("Ten values: 2, 4, 5, 7, 8, 9, 11, 12, 14, 30. How many outliers are there?", [2, 4, 5, 7, 8, 9, 11, 12, 14, 30].filter((v) => v < fences([2, 4, 5, 7, 8, 9, 11, 12, 14, 30])[0] || v > fences([2, 4, 5, 7, 8, 9, 11, 12, 14, 30])[1]).length, "Check the fences."),
  num("The 9th decile of a data set is the same as which percentile?", 90, "Deciles are tenths."),
  mc("Which data set has the five-number summary 2, 4, 7, 9, 12?", "2, 4, 5, 7, 8, 9, 12", ["2, 4, 7, 9, 12, 15", "1, 4, 7, 9, 12", "2, 5, 7, 8, 12"], "Q₁ = median of 2, 4, 5 = 4; Q₃ = median of 8, 9, 12 = 9."),
  num("Q₁ = 64, median = 70, Q₃ = 79. Find the semi-interquartile range (IQR ÷ 2).", 7.5, "15/2.", null, 0.001),
  num("A value's percentile rank is 35 in a group of 50 with no ties. How many values are below it?", 17, "(b + 0.5)/50 = 0.35 ⇒ b = 17."),
];

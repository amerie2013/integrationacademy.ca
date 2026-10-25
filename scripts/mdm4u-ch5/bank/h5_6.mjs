// 5.6 Quartiles, Percentiles & Box Plots — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { boxPlotSvg, dotPlotSvg, stemLeafSvg } from "../../mdm4u/figs.mjs";
import { quartiles, fences, pctVal } from "../../mdm4u/count.mjs";

const sl = [42, 45, 48, 51, 53, 53, 56, 58, 60, 61, 64, 67, 69, 72, 88];
const dp = [1, 2, 2, 3, 3, 3, 4, 4, 5, 6, 7, 14];

export const TOPIC = "5.6 Quartiles, Percentiles & Box Plots";
export const Q = [
  num("For a data set Q₁ = 46 and Q₃ = 62. What is the smallest whole number that is an outlier on the high side?", 87, "Fence 62 + 24 = 86; above 86."),
  num("For a data set Q₁ = 46 and Q₃ = 62. What is the largest whole number that is an outlier on the low side?", 21, "Fence 46 − 24 = 22; below 22."),
  num("On a test written by 800 students, 584 scored below 74 and 16 scored exactly 74. Find the percentile rank of 74.", 74, "(584 + 8)/800 × 100."),
  num("A student's percentile rank is 90 in a class of 25, with no ties. How many students scored below the student?", 22, "(b + 0.5)/25 = 0.9 ⇒ b = 22."),
  num("Find the 95th percentile of the 20 values 1, 2, …, 20.", pctVal(Array.from({ length: 20 }, (_, i) => i + 1), 95), "L = 19: average the 19th and 20th."),
  num("Read the stem-and-leaf plot (key 4 | 2 = 42): find Q₁.", quartiles(sl)[0], "15 values: median of the lowest 7.", stemLeafSvg(sl), 0.001),
  num("Read the stem-and-leaf plot: find the upper fence and decide whether 88 is an outlier. Enter the upper fence.", fences(sl)[1], "Q₃ + 1.5 IQR.", stemLeafSvg(sl), 0.001),
  num("Read the dot plot: how many outliers are there?", dp.filter((v) => v < fences(dp)[0] || v > fences(dp)[1]).length, "Fences from Q₁ and Q₃.", dotPlotSvg(dp, { min: 0, max: 15, step: 1 })),
  mc("The box plot is missing its numbers but drawn to scale. About what percent of the data lie between the left end of the box and the right whisker's end?", "75%", ["50%", "25%", "100%"], "Q₁ to the maximum.", boxPlotSvg([{ five: [10, 22, 28, 36, 50] }], { min: 0, max: 60, step: 10 })),
  mc("Which statement about the two box plots is supported?", "Group B's median is higher than Group A's", ["the two IQRs are equal", "Group B's Q₁ is lower than Group A's", "Group A's median is higher than Group B's Q₃"], "Medians 44 and 38.", boxPlotSvg([{ five: [20, 30, 38, 46, 60], label: "Group A" }, { five: [28, 36, 44, 50, 66], label: "Group B" }], { min: 10, max: 70, step: 10 })),
  num("In the box plots, by how much does Group B's IQR differ from Group A's? Enter A's IQR minus B's IQR.", 2, "16 − 14.", boxPlotSvg([{ five: [20, 30, 38, 46, 60], label: "Group A" }, { five: [28, 36, 44, 50, 66], label: "Group B" }], { min: 10, max: 70, step: 10 })),
  num("A data set of 11 values has five-number summary 5, 12, 20, 25, 31. The value 31 is changed to 100. What is the new IQR?", 13, "Quartiles are unchanged."),
  num("Eight values have five-number summary 10, 14, 20, 26, 40. The two middle values must add to what?", 40, "Median 20 = average of the 4th and 5th."),
  ms("A box plot shows median 50, Q₁ = 30, Q₃ = 55, whiskers to 10 and 60. Which are true? Select all.", ["the data are skewed left", "the mean is probably below 50", "about 25% of values are between 50 and 55", "the IQR is 25", "the range is 60"], [0, 1, 2, 3], "Range = 50."),
  tf("If Q₁ = Q₃, then at least half of the values are equal.", true, "The middle half lies in a single point."),
  tf("Adding 10 to every value increases the IQR by 10.", false, "Shifts do not change the IQR."),
  num("Every value in a data set with IQR 12 is multiplied by 2.5. What is the new IQR?", 30, "2.5 × 12."),
  mc("A teacher reports that a mark of 81 is at the 81st percentile. What does this mean?", "about 81% of the class scored below 81", ["the student got 81% of the questions right", "81 students scored lower", "the student is 81st in the class"], "Percentile rank."),
  num("A set of 16 values: 30, 32, 35, 35, 38, 40, 41, 43, 45, 46, 48, 50, 52, 55, 58, 90. Find the 3rd decile.", pctVal([30, 32, 35, 35, 38, 40, 41, 43, 45, 46, 48, 50, 52, 55, 58, 90], 30), "L = 4.8: the 5th value."),
  mc("Why might a box plot hide an important feature of a distribution?", "two separate clusters can produce an ordinary-looking box", ["it always shows outliers", "it shows every value", "it uses the mean"], "Bimodality is hidden."),
];

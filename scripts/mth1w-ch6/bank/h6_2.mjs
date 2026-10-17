// 6.2 One-Variable Data & Statistics — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { boxPlotDoc, histogramDoc } from "./fig.mjs";

export const TOPIC = "6.2 One-Variable Data & Statistics";
export const Q = [
  num(`Seven whole numbers have median 12, unique mode 15, range 10 and mean 12. The smallest is 6. What is the sum of the seven numbers?`, 84, "7 × 12 = 84 (e.g. 6, 9, 11, 12, 15, 15, 16)."),
  num(`The mean of 8 numbers is 20. When a ninth number is added the mean becomes 22. What is the ninth number?`, 38, "9 × 22 − 8 × 20 = 198 − 160."),
  num(`Times (s): 41, 44, 45, 47, 48, 50, 52, 55, 79. Find the upper outlier fence.`, 64.75, "Median 48; Q1 = 44.5, Q3 = 53.5; IQR 9; 53.5 + 13.5."),
  num(`For those times, find the mean with the outlier removed (2 decimal places).`, 47.75, "382 ÷ 8.", null, 0.006),
  num(`Estimate the mean from the histogram (midpoints).`, 167, "(145·2 + 155·8 + 165·15 + 175·10 + 185·5) ÷ 40 = 6680 ÷ 40.", histogramDoc({ bins: [[140, 150, 2], [150, 160, 8], [160, 170, 15], [170, 180, 10], [180, 190, 5]], xlabel: "height (cm)" })),
  mc(`In the histogram above (40 students), the median is in which interval?`, "160–170 cm", ["150–160 cm", "170–180 cm", "140–150 cm"], "Cumulative 2, 10, 25: the 20th and 21st values are in 160–170."),
  num(`Every score in a set is multiplied by 1.2. The original IQR was 15. Find the new IQR.`, 18, "Scaling multiplies spread by 1.2."),
  num(`A data set has mean 40 and 25 values. A value of 90 was entered by mistake instead of 40. Find the correct mean.`, 38, "Sum 1000 − 50 = 950; 950 ÷ 25."),
  ms(`Two box plots: A (10, 20, 30, 40, 50) and B (25, 28, 30, 32, 35). Which are true? Select all.`, ["they have the same median", "B has the smaller IQR", "A has the larger range", "B has a higher centre"], [0, 1, 2], "Medians 30 and 30; IQRs 20 vs 4; ranges 40 vs 10."),
  num(`Five numbers have mean 10 and median 9. The two largest are 14 and 15. Find the sum of the two smallest.`, 12, "Sum 50 − 9 − 14 − 15."),
  tf(`Adding a new value equal to the current mean leaves the mean unchanged.`, true, "The total rises by exactly one mean."),
  tf(`Adding a new value equal to the current median always leaves the median unchanged.`, true, "The middle value stays the same (the order around it is preserved)."),
  num(`A frequency table of goals: 0 goals: 3 games, 1: 5, 2: 7, 3: 4, 4: 1. Find the mean goals per game.`, 1.75, "(0 + 5 + 14 + 12 + 4) ÷ 20 = 35 ÷ 20."),
  num(`For that frequency table (20 games), find the median number of goals.`, 2, "10th and 11th games: cumulative 3, 8, 15 → both 2."),
  mc(`A teacher reports the class “average” as 74 (mean) while most students scored 80–90. What best explains this?`, "a few very low scores pull the mean down", ["the median must also be 74", "the data are symmetric", "the mode is 74"], "Low outliers drag the mean."),
  num(`Read Q1 from the box plot and find the lower outlier fence.`, 7, "Q1 = 22, Q3 = 32, IQR 10: 22 − 15 = 7.", boxPlotDoc({ five: [10, 22, 27, 32, 38], lo: 6, hi: 42, step: 4, showValues: true })),
  num(`Twelve values have mean 30. Their sum after removing the largest value is 300. What was the largest value?`, 60, "360 − 300."),
  num(`Class A (25 students) has mean 68. Combined with class B, the mean of 55 students is 74. Find class B's mean.`, 79, "55 × 74 = 4070; 4070 − 1700 = 2370; 2370 ÷ 30."),
  mc(`Which change will increase the IQR but not the range?`, "moving values near Q1 lower and near Q3 higher, without passing the min or max", ["increasing the maximum", "adding 10 to every value", "removing the minimum"], "Spread the middle half, keep the extremes."),
  num(`Data: 5, 7, 8, 8, 9, 10, 12, 13, 14, x. The mean is 10. Find x.`, 14, "Sum must be 100; 86 + x = 100."),
];

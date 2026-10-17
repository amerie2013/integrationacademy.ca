// 6.2 One-Variable Data & Statistics — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { boxPlotDoc, histogramDoc, dotPlotDoc } from "./fig.mjs";

export const E = [
  num(`Find the mean of 4, 7, 9, 10.`, 7.5, "30 ÷ 4."),
  num(`Find the median of 3, 8, 5, 12, 6.`, 6, "Ordered 3, 5, 6, 8, 12."),
  num(`Find the median of 2, 9, 4, 7.`, 5.5, "Ordered 2, 4, 7, 9: (4 + 7) ÷ 2."),
  num(`Find the mode of 5, 3, 5, 8, 2, 5, 3.`, 5, "5 appears three times."),
  num(`Find the range of 14, 22, 9, 30, 17.`, 21, "30 − 9."),
  num(`A box plot shows Q1 = 20 and Q3 = 32. Find the IQR.`, 12, "Q3 − Q1."),
  num(`Read the median from the box plot.`, 26, "The line inside the box.", boxPlotDoc({ five: [12, 20, 26, 31, 40], lo: 10, hi: 42, step: 4, showValues: true })),
  num(`What percent of the data lie inside the box of a box plot?`, 50, "The box holds the middle half."),
  num(`What percent of the data lie below Q1?`, 25, "Q1 cuts off the lowest quarter."),
  mc(`Which measure of centre is most affected by an outlier?`, "the mean", ["the median", "the mode", "none of them"], "Every value enters the mean."),
  tf(`The median is always one of the data values.`, false, "With an even number of values it is the average of the two middle values."),
  mc(`In a histogram, the bars…`, "touch, because the data are continuous", ["have gaps between them", "are drawn in any order", "show categories"], "Intervals are next to each other."),
  num(`Find Q1 for 1, 3, 4, 6, 8, 9, 11, 13.`, 3.5, "Lower half 1, 3, 4, 6."),
  num(`Find Q3 for 1, 3, 4, 6, 8, 9, 11, 13.`, 10, "Upper half 8, 9, 11, 13."),
  mc(`The five-number summary is…`, "min, Q1, median, Q3, max", ["mean, median, mode, range, IQR", "Q1, Q2, Q3, Q4, Q5", "min, mean, max, range, mode"], "It draws the box plot."),
  num(`How many values does the dot plot show?`, 10, "Count every dot.", dotPlotDoc({ data: [2, 3, 3, 4, 4, 4, 5, 5, 6, 8], lo: 0, hi: 10, step: 1 })),
  num(`Find the mean of 10, 10, 10, 30.`, 15, "60 ÷ 4."),
  tf(`A data set can have more than one mode.`, true, "Two values can tie for most frequent."),
  mc(`For favourite ice-cream flavours, the only measure of centre that makes sense is the…`, "mode", ["mean", "median", "range"], "Categorical data cannot be averaged or ordered."),
  num(`The mean of 5 numbers is 8. What is their sum?`, 40, "5 × 8."),
];

export const M = [
  num(`Find the median of 23, 18, 30, 25, 18, 27, 21, 29.`, 24, "Ordered 18, 18, 21, 23, 25, 27, 29, 30: (23 + 25) ÷ 2."),
  num(`For 11, 15, 16, 18, 20, 22, 25, 27, 40, find Q1.`, 15.5, "Lower half 11, 15, 16, 18 (median 20 left out)."),
  num(`For 11, 15, 16, 18, 20, 22, 25, 27, 40, find Q3.`, 26, "Upper half 22, 25, 27, 40."),
  num(`For Q1 = 15.5 and Q3 = 26, what is the upper outlier fence (Q3 + 1.5 × IQR)?`, 41.75, "IQR = 10.5; 26 + 15.75."),
  tf(`For data with Q1 = 15.5 and Q3 = 26, the value 40 is an outlier.`, false, "The fence is 41.75 and 40 < 41.75."),
  num(`Four test marks are 68, 74, 81, 77. What mark on a fifth test gives a mean of 76?`, 80, "5 × 76 = 380; 380 − 300."),
  num(`A frequency table: 1 pet: 6 students; 2 pets: 4; 3 pets: 2. Find the mean number of pets (2 decimal places).`, 1.67, "(6 + 8 + 6) ÷ 12 = 20 ÷ 12.", null, 0.006),
  num(`Estimate the mean from the histogram using midpoints.`, 35, "(25·5 + 35·10 + 45·5) ÷ 20 = 700 ÷ 20.", histogramDoc({ bins: [[20, 30, 5], [30, 40, 10], [40, 50, 5]], xlabel: "score" })),
  ms(`Which are resistant to (barely affected by) outliers? Select all.`, ["median", "IQR", "mean", "range"], [0, 1], "Mean and range use the extreme values."),
  mc(`House prices in a town are 210, 225, 240, 250, 260 and 1200 (thousand dollars). The best measure of a typical price is…`, "the median, 245", ["the mean, about 398", "the range, 990", "the mode"], "The mansion pulls the mean up."),
  num(`Every value in a data set is increased by 7. The old mean was 52. What is the new mean?`, 59, "Adding a constant shifts the mean by that constant."),
  num(`Every value in a data set is increased by 7. The old IQR was 12. What is the new IQR?`, 12, "Shifting does not change spread."),
  num(`The mean of 6 numbers is 15. One number, 30, is removed. Find the mean of the rest.`, 12, "90 − 30 = 60; 60 ÷ 5."),
  mc(`Box plot A has IQR 6 and box plot B has IQR 15 (same medians). Which statement is correct?`, "B's middle half is more spread out", ["A has more data", "B has a higher centre", "A has more outliers"], "IQR measures spread of the middle half."),
  num(`Find the IQR from the box plot.`, 14, "Q3 − Q1 = 48 − 34.", boxPlotDoc({ five: [25, 34, 40, 48, 60], lo: 20, hi: 64, step: 4, showValues: true })),
  num(`Find the range of the data in that box plot (min 25, max 60).`, 35, "60 − 25."),
  tf(`Two data sets can have the same mean but very different spreads.`, true, "e.g. 50, 50, 50 and 0, 50, 100."),
  num(`A class of 20 has a mean mark of 72; another class of 30 has a mean of 82. Find the mean of all 50 students.`, 78, "(1440 + 2460) ÷ 50."),
  mc(`Which graph best displays 300 students' heights?`, "a histogram", ["a circle graph", "a pictograph", "a bar graph with gaps"], "Continuous numerical data."),
  num(`Shoe sizes: 7, 8, 8, 9, 9, 9, 10, 10, 11. A store should stock most of which size (the mode)?`, 9, "9 appears three times."),
];

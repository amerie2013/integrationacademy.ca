// 5.4 Measures of Central Tendency — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { dotPlotSvg, barsSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { mean, median, sum } from "../../mdm4u/count.mjs";

const r2 = (v) => Math.round(v * 100) / 100;
const L = (xs) => xs.join(", ");
const qMean = (xs, ctx) => num(`Find the mean of ${ctx}${L(xs)}.`, r2(mean(xs)), `Sum ${sum(xs)} ÷ ${xs.length}.`, null, 0.01);
const qMed = (xs, ctx) => num(`Find the median of ${ctx}${L(xs)}.`, median(xs), "Order the values; take the middle.", null, 0.001);
const dot = [3, 4, 4, 4, 5, 6, 6, 7, 9];
const grp = { m: [5, 15, 25, 35], f: [6, 10, 3, 1] };

export const E = [
  qMean([6, 9, 11, 14], ""),
  qMean([22, 25, 25, 28, 30], "the ages "),
  qMean([3.5, 4.1, 2.8, 5.0], "the masses (kg) "),
  qMed([7, 2, 9, 4, 5], ""),
  qMed([12, 18, 15, 10, 20, 16], ""),
  qMed([31, 29, 35, 40, 28, 33, 37], "the times "),
  num("Find the mode of 4, 7, 7, 2, 9, 7, 4.", 7, "Most frequent."),
  num("Find the mode of 15, 18, 12, 18, 20, 15, 18.", 18, "Appears 3 times."),
  mc("What is the mode of 2, 4, 6, 8?", "there is no mode", ["2", "5", "8"], "No value repeats."),
  num("Find the mean of 10, 20, 30, 40, 50.", 30, "150/5."),
  num("A course mark is 60% tests (75) and 40% exam (85). Find the weighted mean.", 79, "45 + 34."),
  num("A course mark is 30% assignments (90) and 70% tests (70). Find the weighted mean.", 76, "27 + 49."),
  mc("Which measure is most affected by an outlier?", "mean", ["median", "mode", "they are equally affected"], "Uses every value's size."),
  mc("Which is the only measure of centre for categorical data?", "mode", ["mean", "median", "range"], "Counts categories."),
  tf("The median of an even number of values is the mean of the two middle values.", true, "Rule."),
  tf("Every data set has exactly one mode.", false, "There may be none or several."),
  mc("The symbol μ represents…", "a population mean", ["a sample mean", "a median", "a standard deviation"], "Greek for population."),
  num("Read the dot plot: what is the median?", median(dot), "9 values: the 5th.", dotPlotSvg(dot, { min: 2, max: 10, step: 1 })),
  num("Read the dot plot: what is the mode?", 4, "Tallest stack.", dotPlotSvg(dot, { min: 2, max: 10, step: 1 })),
  num("Find the mean of 8, 8, 8, 8, 8.", 8, "All equal."),
];

export const M = [
  num("Estimate the mean from the grouped table.", sum(grp.m.map((m, i) => m * grp.f[i])) / sum(grp.f), "Use midpoints 5, 15, 25, 35.", tableSvg([["interval", "0–10", "10–20", "20–30", "30–40"], ["frequency", ...grp.f.map(String)]]), 0.01),
  num("The histogram shows the minutes 25 students spent on a quiz. Estimate the mean (use midpoints 15, 25, 35, 45).", (15 * 4 + 25 * 9 + 35 * 8 + 45 * 4) / 25, "Σfm ÷ 25.", barsSvg([4, 9, 8, 4], { labels: ["10–20", "20–30", "30–40", "40–50"], histogram: true, top: true }), 0.01),
  num("Goals per game: 0 (4 games), 1 (7), 2 (6), 3 (3). Find the mean.", r2((0 + 7 + 12 + 9) / 20), "28/20.", null, 0.01),
  num("Goals per game: 0 (4 games), 1 (7), 2 (6), 3 (3). Find the median.", 1, "10th and 11th values are both 1."),
  num("The mean of five numbers is 12. Four of them are 9, 10, 14, 15. Find the fifth.", 12, "60 − 48."),
  num("A student's mean on 3 tests is 70. What mark on the 4th test makes the mean 74?", 86, "296 − 210."),
  num("Class A: 20 students, mean 68. Class B: 30 students, mean 78. Find the combined mean.", 74, "(1360 + 2340)/50."),
  num("Grade points: 3 credits at 4.0 and 1 credit at 2.0. Find the weighted mean.", 3.5, "14/4.", null, 0.001),
  num("Remove the highest and lowest values and find the mean of the rest: 3, 10, 11, 12, 13, 50.", 11.5, "46/4.", null, 0.001),
  mc("House prices in a city are skewed right. Which measure best describes a typical price?", "median", ["mean", "mode", "range"], "Resistant."),
  mc("Adding 5 to every value in a data set changes the mean by…", "+5", ["0", "×5", "+5n"], "Shift."),
  mc("Multiplying every value by 3 changes the median by…", "a factor of 3", ["+3", "nothing", "a factor of 9"], "Scale."),
  ms("Which statements are true? Select all.", ["the median is resistant to outliers", "the mean always equals one of the data values", "a data set may have two modes", "the mean can be pulled by a long tail"], [0, 2, 3], "The mean need not be a data value."),
  tf("If the mean is much larger than the median, the data are probably skewed right.", true, "A tail of large values."),
  tf("The mean of grouped data found with midpoints is exact.", false, "An estimate."),
  num("Salaries (thousands): 40, 42, 45, 47, 48, 160. Find the mean.", r2(mean([40, 42, 45, 47, 48, 160])), "382/6.", null, 0.01),
  num("Salaries (thousands): 40, 42, 45, 47, 48, 160. Find the median.", 46, "(45 + 47)/2."),
  mc("A data set has mean 50 and median 50. A new value of 90 is added. Which is certain?", "the mean increases", ["the median increases by 40", "the mode becomes 90", "the median decreases"], "A large value raises the mean."),
  num("Find the mean of the values in the dot plot.", r2(mean([1, 2, 2, 3, 3, 3, 4, 6])), "24/8.", dotPlotSvg([1, 2, 2, 3, 3, 3, 4, 6], { min: 0, max: 7, step: 1 }), 0.01),
  mc("The modal class of the histogram is…", "20–30", ["10–20", "30–40", "40–50"], "Tallest bar.", barsSvg([3, 11, 7, 2], { labels: ["10–20", "20–30", "30–40", "40–50"], histogram: true })),
];

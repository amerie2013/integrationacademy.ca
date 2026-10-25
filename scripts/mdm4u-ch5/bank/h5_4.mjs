// 5.4 Measures of Central Tendency — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { dotPlotSvg, barsSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { mean, median } from "../../mdm4u/count.mjs";

const r2 = (v) => Math.round(v * 100) / 100;

export const TOPIC = "5.4 Measures of Central Tendency";
export const Q = [
  num("The mean of 10 numbers is 24. When one number is removed, the mean is 23. What number was removed?", 33, "240 − 207."),
  num("The mean of 7 numbers is 15. Two numbers, 9 and 21, are added. Find the new mean.", 15, "(105 + 30)/9."),
  num("A class of 24 has mean 70. When a new student joins, the mean becomes 71. What is the new student's mark?", 95, "25(71) − 24(70)."),
  num("Three classes: 25 students (mean 62), 30 (mean 70), 25 (mean 74). Find the overall mean.", r2((25 * 62 + 30 * 70 + 25 * 74) / 80), "Weighted by size.", null, 0.01),
  num("A final mark is 70% term and 30% exam. Zoe's term mark is 78. What exam mark gives a final mark of 80?", r2((80 - 0.7 * 78) / 0.3), "0.3x = 80 − 54.6.", null, 0.01),
  num("Five positive whole numbers have mean 8, median 9 and a single mode of 10. What is the smallest possible value of the smallest number?", 3, "Sum 40 with 9, 10, 10 leaves a + b = 11 with a < b ≤ 8 (b = 9 would tie the mode): 3, 8, 9, 10, 10."),
  num("Seven values have median 20. The three smallest are each decreased by 5. What is the new median?", 20, "The 4th value is unchanged."),
  num("Nine values have mean 30. The largest value is increased by 27. What is the new mean?", 33, "Total rises by 27: +3."),
  num("Estimate the mean from the table of commute times.", (6 * 5 + 14 * 15 + 12 * 25 + 5 * 35 + 3 * 55) / 40, "Midpoint of 40–70 is 55.", tableSvg([["minutes", "0–10", "10–20", "20–30", "30–40", "40–70"], ["workers", "6", "14", "12", "5", "3"]]), 0.01),
  num("The histogram shows ages at a family event. Estimate the mean age (midpoints 5, 15, 25, 35, 45).", r2((12 * 5 + 6 * 15 + 3 * 25 + 8 * 35 + 11 * 45) / 40), "Σfm ÷ 40.", barsSvg([12, 6, 3, 8, 11], { labels: ["0–10", "10–20", "20–30", "30–40", "40–50"], histogram: true, top: true }), 0.01),
  mc("For the histogram of ages at the family event, why is the mean a poor summary?", "the distribution is bimodal (children and adults)", ["the data are categorical", "there is no mode", "the mean is always poor"], "Two groups.", barsSvg([12, 6, 3, 8, 11], { labels: ["0–10", "10–20", "20–30", "30–40", "40–50"], histogram: true })),
  num("In the dot plot, one value is to be added so that the mean equals the median. The median stays 6. What value must be added?", 6 * 10 - [2, 4, 5, 6, 6, 6, 7, 8, 9].reduce((a, b) => a + b, 0), "Need total 60 for 10 values.", dotPlotSvg([2, 4, 5, 6, 6, 6, 7, 8, 9], { min: 0, max: 12, step: 1 })),
  num("The dot plot shows 9 values. If the largest value were changed to 30, by how much would the mean increase?", r2((30 - 9) / 9), "21/9.", dotPlotSvg([2, 4, 5, 6, 6, 6, 7, 8, 9], { min: 0, max: 12, step: 1 }), 0.01),
  num("Two quizzes are out of 10 and a test out of 50. Marks: 8, 6 and 41. The course weights each quiz 15% and the test 70% (as percents). Find the course mark as a percent.", r2(0.15 * 80 + 0.15 * 60 + 0.7 * 82), "Convert each to a percent first.", null, 0.01),
  ms("A data set has mean 40, median 35 and mode 30. Which are likely? Select all.", ["the distribution is skewed right", "there are some large values", "the distribution is symmetric", "the mean is pulled up by a tail"], [0, 1, 3], "Mode < median < mean."),
  mc("Every value in a data set is multiplied by 2 and then 3 is added. The mean 12 becomes…", "27", ["24", "15", "30"], "2(12) + 3."),
  tf("It is possible for the mean of a data set to be less than every value but one.", true, "e.g. one very small value."),
  tf("If two data sets have the same mean and the same median, they must be identical.", false, "Many sets share them."),
  num("A store's mean daily sales for the 6 weekdays were 2400 dollars and for Saturday 4200 dollars. Find the mean daily sales for the 7 days.", r2((6 * 2400 + 4200) / 7), "18 600/7.", null, 0.01),
  mc("To report a “typical” household income for a country, statisticians usually use…", "the median, because incomes are skewed right", ["the mean, because it uses all values", "the mode", "the midrange"], "Resistant."),
];

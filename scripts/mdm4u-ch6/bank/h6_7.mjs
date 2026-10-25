// 6.7 Comparing Groups & Contingency Tables — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { tableSvg, barsSvg, boxPlotSvg, scatterSvg } from "../../mdm4u/figs.mjs";
import { mean, median, quartiles } from "../../mdm4u/count.mjs";

const r1 = (v) => Math.round(v * 10) / 10;
const r2 = (v) => Math.round(v * 100) / 100;
const simp = tableSvg([["", "easy: success", "hard: success"], ["Surgeon P", "48/50", "105/150"], ["Surgeon Q", "171/180", "13/20"]]);
const A = [42, 47, 51, 53, 55, 58, 60, 62, 66, 71], B = [38, 49, 55, 57, 60, 62, 64, 67, 70, 88];

export const TOPIC = "6.7 Comparing Groups & Contingency Tables";
export const Q = [
  num("Using the table, find Surgeon P's overall success rate as a percent (1 decimal).", r1((100 * 153) / 200), "(48 + 105)/200.", simp, 0.05),
  num("Using the table, find Surgeon Q's overall success rate as a percent (1 decimal).", r1((100 * 184) / 200), "(171 + 13)/200.", simp, 0.05),
  mc("Using the table, which surgeon has the higher success rate for hard operations?", "P (70% vs 65%)", ["Q", "equal", "cannot tell"], "105/150 vs 13/20.", simp),
  mc("In the surgeon table, P is better or equal in each type of operation, yet Q is better overall. Why?", "Q performs mostly easy operations", ["Q has more patients", "P's numbers are wrong", "success rates cannot be compared"], "Simpson's paradox."),
  num("A survey of 400: 160 urban (112 support a policy) and 240 rural (96 support). How many urban residents would be expected to support it if there were no association?", 83.2, "208/400 × 160.", null, 0.01),
  num("For the urban/rural survey (112/160 urban and 96/240 rural support), find the difference in support percentages (urban − rural), in percentage points.", 30, "70% − 40%.", null, 0.01),
  num(`Commute times for route A: ${A.join(", ")}; route B: ${B.join(", ")}. Find the difference in medians (B − A).`, median(B) - median(A), "Order and take the middle values.", boxPlotSvg([{ data: A, label: "A" }, { data: B, label: "B" }], { min: 35, max: 90, step: 5 }), 0.01),
  num(`Commute times for route A: ${A.join(", ")}; route B: ${B.join(", ")}. Find the difference in IQRs (B − A).`, (quartiles(B)[2] - quartiles(B)[0]) - (quartiles(A)[2] - quartiles(A)[0]), "Q₃ − Q₁ for each.", null, 0.01),
  num(`For route B: ${B.join(", ")}, find the mean minus the median (1 decimal).`, r1(mean(B) - median(B)), "The 88 pulls the mean.", null, 0.05),
  num("Two groups: group 1 has 60% success out of 50; group 2 has 30% success out of 150. Find the combined success rate as a percent.", 37.5, "(30 + 45)/200.", null, 0.01),
  num("A test for a disease: 90 of 100 sick people test positive; 45 of 900 healthy people test positive. What percent of positive tests are from sick people (1 decimal)?", r1((100 * 90) / 135), "90/135.", tableSvg([["", "positive", "negative", "total"], ["sick", "90", "10", "100"], ["healthy", "45", "855", "900"]]), 0.05),
  ms("Which statements about contingency tables are true? Select all.", ["conditional percentages can be taken across rows or down columns", "the grand total equals the sum of all cells", "joint percentages sum to 100% over all cells", "equal counts in two cells prove no association"], [0, 1, 2], "Counts alone do not decide association."),
  tf("In Simpson's paradox, the conclusion from the combined data is usually more trustworthy than from the separate groups.", false, "Compare within groups when a lurking variable is present."),
  tf("Expected count = (row total × column total) ÷ grand total, assuming no association.", true, "Independence."),
  num("A table has row totals 120 and 80 and column totals 150 and 50. Find the expected count in row 1, column 2 if there is no association.", 30, "120 × 50 / 200."),
  mc("The scatter plot shows study time and marks, colour-coded by course (blue: Course 1, red: Course 2). What does colour-coding reveal?", "each course has its own trend; combining them would mislead", ["study time has no effect", "Course 2 students study less", "there are no outliers"], "Group variable.", scatterSvg([[2, 55], [4, 60], [6, 66], [8, 70], [2, 72], [4, 77], [6, 82], [8, 86]], { xmin: 0, xmax: 10, ymin: 50, ymax: 90, groups: ["blue", "blue", "blue", "blue", "red", "red", "red", "red"] })),
  num("The bar graph shows the percent of each group who passed. Group sizes are 40 and 160. How many passed in total?", 0.8 * 40 + 0.55 * 160, "32 + 88.", barsSvg([80, 55], { labels: ["group 1 (40)", "group 2 (160)"], top: true, ymax: 100 })),
  num("For two groups with pass rates 80% (40 students) and 55% (160 students), find the overall pass rate as a percent.", 60, "120/200."),
  mc("A school compares the mean marks of two classes: 74 (n = 12) and 72 (n = 30). The standard deviations are 15 and 4. Which statement is most reasonable?", "the class means are similar; the first class is far more variable", ["the first class is clearly better", "the second class is clearly better", "the means cannot be compared"], "Spread matters."),
  mc("A report shows 900 accidents involving young drivers and 600 involving older drivers and concludes young drivers are 1.5 times as dangerous. What is missing?", "the number of drivers (or kilometres driven) in each group", ["the colour of the cars", "a scatter plot", "nothing"], "Rates need denominators."),
];

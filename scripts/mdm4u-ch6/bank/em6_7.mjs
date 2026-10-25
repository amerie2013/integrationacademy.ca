// 6.7 Comparing Groups & Contingency Tables — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { tableSvg, barsSvg, boxPlotSvg } from "../../mdm4u/figs.mjs";

const r1 = (v) => Math.round(v * 10) / 10;
const pc = (a, b, what, fig = null) => num(`${what} Answer as a percent (1 decimal).`, r1((100 * a) / b), `${a} ÷ ${b}.`, fig, 0.05);
const tab = tableSvg([["", "yes", "no", "total"], ["Grade 11", "54", "66", "120"], ["Grade 12", "72", "48", "120"], ["total", "126", "114", "240"]]);

export const E = [
  pc(54, 120, "In the table, what percent of Grade 11 students answered yes?", tab),
  pc(72, 120, "In the table, what percent of Grade 12 students answered yes?", tab),
  pc(126, 240, "In the table, what percent of all students answered yes?", tab),
  pc(72, 240, "In the table, what percent of all students are Grade 12 students who answered yes?", tab),
  num("Using the table, how many students answered no?", 114, "Column total.", tab),
  num("Using the table, how many Grade 11 students are there?", 120, "Row total.", tab),
  num("A contingency table has row totals 85 and 115. Find the grand total.", 200, "Add."),
  num("In a table, 40 of 160 boys and 60 of 140 girls play an instrument. How many students play an instrument?", 100, "40 + 60."),
  pc(60, 140, "Of 140 girls, 60 play an instrument. What percent of girls play?"),
  pc(40, 160, "Of 160 boys, 40 play an instrument. What percent of boys play?"),
  mc("A table that shows counts for two categorical variables is called…", "a contingency (two-way) table", ["a scatter plot", "a stem-and-leaf plot", "a histogram"], "Definition."),
  mc("To decide whether two categorical variables are associated, compare…", "conditional percentages", ["raw counts", "the grand total", "the largest cell"], "Groups differ in size."),
  mc("A percent found by dividing a cell by its row total is a…", "conditional percentage", ["joint percentage", "marginal total", "residual"], "Within a row."),
  mc("A row or column total is called a…", "marginal total", ["joint total", "conditional total", "residual"], "In the margin."),
  tf("If 30% of each group answers yes, the variables are not associated.", true, "Equal conditional percentages."),
  tf("Comparing raw counts is always fair, whatever the group sizes.", false, "Use percentages."),
  mc("Which display best compares the test marks of two classes?", "side-by-side box plots", ["a circle graph", "a contingency table", "a single scatter plot"], "Numerical by group."),
  mc("The bar graph shows the percent who recycle in two age groups. Are age and recycling associated?", "yes — the percentages differ a lot", ["no — both groups recycle", "cannot tell from percents", "only if r > 0.9"], "48% vs 75%.", barsSvg([48, 75], { labels: ["under 30", "30 and over"], top: true, ymax: 90 })),
  mc("Which group in the box plots has the larger median?", "Group B", ["Group A", "they are equal", "cannot tell"], "B's median line is further right.", boxPlotSvg([{ five: [12, 18, 22, 27, 35], label: "Group A" }, { five: [15, 21, 28, 31, 38], label: "Group B" }], { min: 10, max: 40, step: 5 })),
  mc("Simpson's paradox happens when…", "a trend in every group reverses when the groups are combined", ["r is negative", "a table has no totals", "two groups are the same size"], "Definition."),
];

export const M = [
  num("Using the table, if grade and answer were not associated, how many Grade 11 students would be expected to answer yes?", 63, "Overall 126/240 = 52.5%; 0.525 × 120.", tab),
  num("Of 300 people, 120 are under 40; 84 of them and 72 of those 40 or older own a gaming console. What percent of those 40 or older own one?", 40, "72/180."),
  num("Of 300 people, 120 under 40 (84 own a console) and 180 aged 40+ (72 own one). If there were no association, how many under-40s would be expected to own one?", 62.4, "156/300 × 120.", null, 0.01),
  num("A table: 200 drivers, 80 young; 24 young and 18 older drivers had a claim. Find the difference in claim percentages (young − older), in percentage points.", 15, "30% − 15%.", null, 0.01),
  pc(18, 120, "Of 120 older drivers, 18 had a claim. What percent is that?"),
  num("Team A won 60% of 25 home games and 40% of 15 away games. How many games did it win in total?", 21, "15 + 6."),
  num("Team A won 60% of 25 home games and 40% of 15 away games. Find its overall winning percentage.", 52.5, "21/40.", null, 0.01),
  num("Team B won 64% of 25 away games and 72% of 25 home games. Find its overall winning percentage.", 68, "34/50.", null, 0.01),
  mc("Clinic X has a higher success rate than Y for both mild and severe cases, but a lower overall rate. The most likely reason is…", "X treats a much larger share of severe cases", ["X has fewer patients", "Y's doctors are better", "the data are wrong"], "Simpson's paradox."),
  mc("A survey finds 70% of cyclists and 45% of drivers support new bike lanes. Which conclusion is best?", "transport mode and support are associated", ["cycling causes support", "drivers oppose all bike lanes", "there is no association"], "Association, not cause."),
  ms("Which are needed to compare two groups' commute times fairly? Select all.", ["a measure of centre for each", "a measure of spread for each", "the shape of each distribution", "the colour of the graph", "group sizes"], [0, 1, 2, 4], "Centre, spread, shape, n."),
  tf("Equal conditional percentages in every row mean no association.", true, "Independence."),
  tf("A joint percentage divides a cell by its row total.", false, "By the grand total."),
  mc("The box plots compare two stores' delivery times. Which store is more consistent?", "Store A", ["Store B", "they are equal", "cannot tell"], "A's box and whiskers are narrower.", boxPlotSvg([{ five: [25, 29, 31, 33, 36], label: "Store A" }, { five: [15, 24, 31, 40, 52], label: "Store B" }], { min: 10, max: 55, step: 5 })),
  num("Using the box plots of the two stores, find the difference between their IQRs (B − A).", 12, "16 − 4.", boxPlotSvg([{ five: [25, 29, 31, 33, 36], label: "Store A" }, { five: [15, 24, 31, 40, 52], label: "Store B" }], { min: 10, max: 55, step: 5 })),
  num("A table: 150 of 250 adults and 90 of 150 teens use a library card. Find the difference in percentages (adults − teens).", 0, "60% vs 60%."),
  mc("For 150 of 250 adults and 90 of 150 teens using a library card, the variables age group and card use are…", "not associated", ["strongly associated", "negatively correlated", "causally linked"], "Equal conditional percentages."),
  num("In a sample of 500, 30% are smokers. Among smokers 40% have a cough; among non-smokers 10%. How many people have a cough?", 95, "60 + 35."),
  num("In a sample of 500 with 150 smokers (40% coughing) and 350 non-smokers (10% coughing), what percent of those with a cough are smokers (1 decimal)?", r1((100 * 60) / 95), "60/95.", null, 0.05),
  mc("Why might a news story's bar graph of counts (not percents) for two groups be misleading?", "the groups may have very different sizes", ["bars cannot show counts", "counts are always wrong", "percents are always larger"], "Use rates."),
];

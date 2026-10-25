// MDM4U Worksheet 6.7 — Comparing Groups & Contingency Tables (teacher edition)
import { svgT, tableSvg, barsSvg, boxPlotSvg, scatterSvg } from "./figT.mjs";
import { mean, median, quartiles } from "../../mdm4u/count.mjs";

const S = String.raw;
const r1 = (v) => Math.round(v * 10) / 10;
const morn = [41, 45, 48, 50, 52, 55, 57, 60, 63, 66], eve = [35, 44, 50, 55, 58, 61, 65, 70, 78, 84];

const EXAMPLES = [
  { title: "Completing a table", q: "Of 300 adults surveyed, 140 are under 40; 98 of them use a fitness app, and 64 of those 40 or older do. Complete the contingency table.", fig: svgT(tableSvg([["", "uses app", "does not", "total"], ["under 40", "98", "42", "140"], ["40 or older", "64", "96", "160"], ["total", "162", "138", "300"]]), 7), steps: ["Subtract to fill each cell; add for totals."], ans: "see the table" },
  { title: "Joint percentage", q: "What percent of all adults are under 40 and use the app?", steps: [S`$\frac{98}{300}$.`], ans: `${r1((100 * 98) / 300)}%` },
  { title: "Marginal percentage", q: "What percent of all adults use the app?", steps: [S`$\frac{162}{300}$.`], ans: "54%" },
  { title: "Conditional percentages", q: "Find the percent of each age group who use the app.", fig: svgT(barsSvg([70, 40], { labels: ["under 40", "40 or older"], top: true, ylabel: "% using app", ymax: 80 }), 5), steps: [S`$\frac{98}{140}=70\%$; $\frac{64}{160}=40\%$.`], ans: "70% and 40%" },
  { title: "Association", q: "Is app use associated with age group?", steps: ["70% vs 40%: very different."], ans: "yes" },
  { title: "Expected counts", q: "If there were no association, how many under-40 adults would be expected to use the app?", steps: [S`$0.54\times140=75.6$.`], ans: "75.6 (observed 98)" },
  { title: "Comparing groups", q: `Wait times (min) at a clinic: mornings ${morn.join(", ")}; evenings ${eve.join(", ")}. Compare them.`, fig: svgT(boxPlotSvg([{ data: morn, label: "morning" }, { data: eve, label: "evening" }], { min: 30, max: 90, step: 10 }), 6.5), steps: [S`Medians ${median(morn)} and ${median(eve)}; IQRs ${quartiles(morn)[2] - quartiles(morn)[0]} and ${quartiles(eve)[2] - quartiles(eve)[0]}.`], ans: "similar centres; evenings far more variable" },
  { title: "Simpson's paradox", q: "Hospital P: easy surgeries 95 of 100 succeed, hard 60 of 100. Hospital Q: easy 380 of 400 succeed, hard 9 of 20. Compare.", steps: [S`Easy: 95% vs 95%. Hard: 60% vs 45%. Overall: $\frac{155}{200}=77.5\%$ vs $\frac{389}{420}\approx92.6\%$.`], ans: "P is as good or better in each group; Q looks better overall because it does mostly easy surgeries" },
  { title: "Groups in a scatter plot", q: "Why should a scatter plot of marks against study time for two different courses use different colours?", fig: svgT(scatterSvg([[2, 60], [4, 66], [6, 72], [8, 77], [2, 75], [4, 80], [6, 85], [8, 90]], { xmin: 0, xmax: 10, ymin: 55, ymax: 95, groups: ["blue", "blue", "blue", "blue", "red", "red", "red", "red"] }), 5.5), steps: ["Each course has its own level; one line would mislead."], ans: "the course is a hidden variable" },
];

const PROBLEMS = [
  { level: 1, q: "A table has 45 of 150 seniors and 30 of 60 juniors answering yes. Find each conditional percentage.", ans: "30% and 50%" },
  { level: 1, q: "In the same table, what percent of all 210 students answered yes?", ans: `${r1((100 * 75) / 210)}%` },
  { level: 1, q: "Which display compares a numerical variable for two groups?", ans: "side-by-side box plots" },
  { level: 2, q: "Complete: 200 people, 120 female; 72 females and 32 males prefer tea. Find all cells and totals.", ans: "female: 72 tea, 48 not; male: 32 tea, 48 not; tea 104, not 96" },
  { level: 2, q: "Using problem 4, is gender associated with tea preference? Show your percentages.", ans: "60% vs 40%: associated" },
  { level: 2, q: "If there were no association in problem 4, how many females would be expected to prefer tea?", ans: "62.4" },
  { level: 2, q: "Compare the two box plots of delivery times.", fig: svgT(boxPlotSvg([{ five: [20, 28, 32, 36, 45], label: "Store A" }, { five: [15, 22, 32, 41, 60], label: "Store B" }], { min: 10, max: 65, step: 5 }), 6), ans: "same median 32; B much more variable" },
  { level: 2, q: "Explain why comparing counts instead of percentages can mislead.", ans: "the groups may have different sizes" },
  { level: 3, space: 4.5, q: "Team X: 70% of 20 home games and 50% of 40 away games won. Team Y: 75% of 40 home games and 55% of 20 away games won. Compare home, away and overall records.", ans: "Y better at home and away; X 56.7%, Y 68.3% overall" },
  { level: 3, space: 4.5, q: "Create a two-group example in which group A has a higher success rate than B in each of two categories, but a lower overall rate.", ans: "e.g. Simpson's paradox with unequal group sizes" },
  { level: 3, space: 4.5, q: "Of 500 students, 220 take a bus. 66 bus riders and 84 others are often late. Test for association using expected counts.", ans: "overall 30%; expected bus riders late 66 = observed: no association" },
  { level: 3, space: 4.5, q: "Design a survey that would let you decide whether owning a pet is associated with grade level, and describe the table you would make.", ans: "random sample; table grade × pet ownership; compare conditional percentages" },
  { level: 3, space: 4.5, q: "Explain the difference between an association in a contingency table and a causal relationship.", ans: "association shows the variables are related; causation needs an experiment" },
];

export const WS = {
  code: "6.7",
  title: "Comparing Groups & Contingency Tables",
  bigideas: S`A contingency table shows counts for two categorical variables. Joint percentages divide by the grand total, marginal percentages use row or column totals, and conditional percentages divide by a row (or column) total. Different conditional percentages mean the variables are associated. Compare numerical data across groups with summary statistics and box plots, and watch for Simpson's paradox.`,
  goals: ["Build contingency tables.", "Compute percentages.", "Test for association.", "Compare groups."],
  curriculum: "D2.1, D2.4, D2.5",
  vocab: [["Contingency table", "two-way table of counts"], ["Joint", "cell divided by grand total"], ["Conditional", "cell divided by its row total"], ["Simpson's paradox", "trend reverses when groups combine"]],
  hook: "A hospital has a lower overall success rate than another but is better for every type of surgery. How is that possible?",
  concepts: [
    ["1. Tables", "Rows and columns of counts, with totals."],
    ["2. Percentages", "Compare conditional percentages."],
    ["3. Groups", S`${svgT(boxPlotSvg([{ data: morn, label: "A" }, { data: eve, label: "B" }], { min: 30, max: 90, step: 10 }), 5.2)}`],
  ],
  tips: ["Use the right denominator.", "Compare percentages, not counts.", "Expected count = overall rate × group size.", "Look within groups.", "Association is not causation."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

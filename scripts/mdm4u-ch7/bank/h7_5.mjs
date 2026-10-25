// 7.5 Critiquing Statistical Studies — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, tableSvg, scatterSvg, intervalsSvg } from "../../mdm4u/figs.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const moe = (p, n) => 1.96 * Math.sqrt((p * (1 - p)) / n);

export const TOPIC = "7.5 Critiquing Statistical Studies";
export const Q = [
  num("A poll says “48% support, accurate to ±1.5 points, 19 times out of 20.” With p̂ = 0.48, what sample size does that require? (round up)", Math.ceil((1.96 / 0.015) ** 2 * 0.48 * 0.52), "(1.96/0.015)² × 0.2496."),
  num("The same poll actually surveyed 800 people. What is its real margin of error in percentage points (1 decimal)?", Math.round(moe(0.48, 800) * 1000) / 10, "1.96√(0.2496/800) × 100.", null, 0.1),
  num("The table claims 55% of all respondents agree. Find the correct overall percent (1 decimal).", Math.round(((72 + 66) / 330) * 1000) / 10, "(72 + 66)/330.", tableSvg([["", "agree", "total"], ["group A", "72", "180"], ["group B", "66", "150"]]), 0.05),
  num("A report says the percent of A who agree (72 of 180) is 10 points lower than B (66 of 150). What is the true difference (B − A) in percentage points?", 4, "44% − 40%.", null, 0.05),
  mc("A study finds that schools with longer lunch breaks have higher test scores (r = 0.5, 40 schools) and recommends longer lunches. The strongest critique is…", "school funding or size may explain both; an experiment is needed", ["r = 0.5 is too low to report", "40 schools is a census", "lunch cannot be measured"], "Confounding."),
  mc("The scatter plot in a report shows one point far from the rest that creates most of the correlation. What should a critic ask?", "what r is without that point, and whether the point is an error", ["why the dots are blue", "whether r is positive", "nothing"], "Influential point.", scatterSvg([[1, 4], [2, 5], [3, 4], [4, 6], [5, 5], [14, 18]], { xmin: 0, xmax: 16, ymin: 0, ymax: 20, hl: [5] })),
  num("Two reported 95% intervals are 0.31–0.39 and 0.36–0.44. By how much do they overlap (as a proportion)?", 0.03, "0.39 − 0.36.", intervalsSvg([[0.31, 0.39], [0.36, 0.44]], { min: 0.25, max: 0.5, ticks: [0.25, 0.3, 0.35, 0.4, 0.45, 0.5] }), 0.001),
  mc("A headline says the second group is “much higher” based on intervals 0.31–0.39 and 0.36–0.44. The best critique is…", "the intervals overlap, so the difference may be due to chance", ["the second interval is wider", "intervals cannot be compared", "the headline is correct"], "Overlap."),
  ms("A pharmaceutical company's study of its own drug reports only positive results. Which concerns apply? Select all.", ["conflict of interest", "selective reporting", "possible publication bias", "the drug must be useless", "need for independent replication"], [0, 1, 2, 4], "Funding and reporting."),
  ms("A survey of 2000 people on a fitness app concludes that “Canadians walk 9000 steps a day.” Which problems apply? Select all.", ["the sample uses only app users", "app users may be more active", "the population is overstated", "2000 is too small for any survey", "self-selection"], [0, 1, 2, 4], "Sample frame."),
  tf("A study with a perfect random sample can still reach a wrong conclusion if its question wording is biased.", true, "Response bias."),
  tf("If two studies disagree, the larger study is always correct.", false, "Design matters more than size."),
  num("A graph shows sales of 1200 and 1260 with an axis starting at 1150. How many times taller does the second bar look (2 decimals)?", Math.round((110 / 50) * 100) / 100, "110/50.", barsSvg([50, 110], { labels: ["2024", "2025"], top: ["1200", "1260"], fmt: (v) => String(Math.round(v + 1150)), ymax: 130 }), 0.01),
  num("For sales of 1200 and 1260, what is the true percent increase?", 5, "60/1200."),
  mc("A report claims a diet works because 80% of 200 people who finished it lost weight, but 600 started. What is missing?", "what happened to the 400 who dropped out (attrition bias)", ["the colour of the graph", "the diet's name", "nothing"], "Survivorship."),
  num("If none of the 400 dropouts lost weight, what percent of the 600 starters lost weight (1 decimal)?", Math.round((160 / 600) * 1000) / 10, "160/600.", null, 0.05),
  mc("A city reports that a new traffic light cut accidents at an intersection from 12 to 7 the next year. What alternative explanation should be considered?", "regression to the mean: a bad year is often followed by a better one", ["the light caused more accidents", "accidents cannot be counted", "the year was shorter"], "Natural variation."),
  mc("Which redesign best tests whether the traffic lights reduce accidents?", "compare many similar intersections with and without new lights over several years", ["look at one intersection for one year", "ask drivers if they feel safer", "count lights in the city"], "Comparison group, replication."),
  num("A survey of 500 got a 20% response rate. How many people responded?", 100, "0.2 × 500."),
  mc("For a survey of 500 with a 20% response rate, the main concern is…", "non-response bias: the 100 responders may differ from the 400 who did not reply", ["the sample is too large", "the margin of error is zero", "the question is leading"], "Low response rate."),
];

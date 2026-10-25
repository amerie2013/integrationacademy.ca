// 7.4 Communicating Conclusions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, intervalsSvg, tableSvg, scatterSvg } from "../../mdm4u/figs.mjs";
import { corr, linreg } from "../../mdm4u/count.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const moe = (p, n) => 1.96 * Math.sqrt((p * (1 - p)) / n);
const sx = [1, 2, 3, 4, 5, 6, 7, 8], sy = [62, 65, 63, 70, 72, 71, 76, 79];

export const TOPIC = "7.4 Communicating Conclusions";
export const Q = [
  num("A stratified random sample of 450 students: 207 have a part-time job. Find the lower end of the 95% interval (3 decimals).", r3(0.46 - moe(0.46, 450)), "p̂ − E.", null, 0.002),
  num("For 207 of 450 students with a part-time job, find the upper end of the 95% interval (3 decimals).", r3(0.46 + moe(0.46, 450)), "p̂ + E.", null, 0.002),
  mc("A poll reports 52% support, ±3 points, 19 times out of 20. Which headline is justified?", "“Support is close to even; a majority is not certain”", ["“Majority supports the plan”", "“52% of all citizens support the plan”", "“Support is exactly 52%”"], "Interval 49–55 includes 50."),
  num("Two polls of 1000 give 44% and 50%. Find the 95% margin of error for each (p̂ near 0.5) in percentage points (1 decimal).", Math.round(moe(0.5, 1000) * 1000) / 10, "≈ 3.1.", intervalsSvg([[0.44 - moe(0.44, 1000), 0.44 + moe(0.44, 1000)], [0.5 - moe(0.5, 1000), 0.5 + moe(0.5, 1000)]], { min: 0.38, max: 0.56, ticks: [0.38, 0.42, 0.46, 0.5, 0.54] }), 0.1),
  mc("Two polls of 1000 give 44% and 50%, each ±3.1 points. Did support change?", "possibly, but not clearly — the intervals barely overlap", ["no — the intervals are identical", "definitely — 50 is greater than 44", "only the second poll counts"], "40.9–47.1 and 46.9–53.1 overlap slightly, so the change is suggestive, not certain."),
  num(`For study hours x: ${sx.join(", ")} and scores y: ${sy.join(", ")}, find r (3 decimals) for the results section.`, r3(corr(sx, sy)), "Technology.", scatterSvg(sx.map((x, i) => [x, sy[i]]), { xmin: 0, xmax: 9, ymin: 55, ymax: 85, line: linreg(sx, sy) }), 0.002),
  num(`For the same study-hours data, what percent of the variation in scores is explained by hours (1 decimal)?`, Math.round(corr(sx, sy) ** 2 * 1000) / 10, "r² × 100.", null, 0.2),
  mc("Which conclusion best reports the study-hours data from 8 volunteers?", "“For these 8 volunteers, more study hours were strongly associated with higher scores; the small volunteer sample limits generalization.”", ["“Studying causes higher scores.”", "“All students gain 2.3 points per hour.”", "“Study hours explain every score.”"], "Association, scope, limitation."),
  num("A misleading graph shows 205 vs 200 with an axis starting at 195. How many times taller does the first bar look?", 2, "(205 − 195)/(200 − 195).", barsSvg([10, 5], { labels: ["2025", "2024"], top: ["205", "200"], fmt: (v) => String(Math.round(v + 195)), ymax: 12 })),
  num("For the graph comparing 205 and 200, what is the true percent increase (1 decimal)?", 2.5, "5/200.", null, 0.05),
  ms("A report on a randomized experiment (n = 60 volunteers) should state which of these? Select all.", ["the treatment effect with uncertainty", "that the participants were volunteers", "that random assignment supports a causal conclusion", "that the results apply to all humans", "how the outcome was measured"], [0, 1, 2, 4], "Scope is limited."),
  tf("Stating “we are 95% confident the true proportion is between 0.38 and 0.46” is a reasonable plain-language summary of a 95% interval.", true, "Common wording."),
  tf("If a result is not statistically clear, it is better to leave it out of the report.", false, "Report all results honestly."),
  num("A poll needs a margin of ±2.5 points (95%, p̂ = 0.5). How large must it be (round up)?", Math.ceil((1.96 / 0.025) ** 2 * 0.25), "(1.96/0.025)² × 0.25."),
  mc("A study surveyed students in June, after exams. Which limitation should be reported?", "results may differ at other times of the year", ["the sample was random", "the interval is correct", "nothing"], "Timing."),
  num("The table shows results. Report the percent of seniors who agree (1 decimal).", Math.round((84 / 140) * 1000) / 10, "84/140.", tableSvg([["", "agree", "total"], ["juniors", "72", "160"], ["seniors", "84", "140"]]), 0.05),
  num("Using the same table (72 of 160 juniors and 84 of 140 seniors agree), find the difference in percentages (seniors − juniors).", 15, "60% − 45%.", null, 0.05),
  mc("Which display best shows the difference between juniors and seniors in that table?", "side-by-side bars of percents agreeing, axis from 0", ["a pie chart of counts", "a scatter plot", "a 3-D bar graph starting at 40%"], "Honest comparison."),
  mc("A reviewer says your survey's margin of error ignores bias. Your best reply is…", "agree, and describe the steps taken to reduce bias and the remaining risks", ["say bias cannot exist in surveys", "remove the margin of error", "increase the confidence level"], "Margin covers random error only."),
  mc("Which sentence best combines answer, evidence, uncertainty and scope?", "“About 46% (±4.6 points, 95%) of grade 11–12 students at our school have part-time jobs, based on a stratified random sample of 450.”", ["“Lots of students work.”", "“46% of all teens work.”", "“Working is common.”"], "All four parts."),
];

// 7.4 Communicating Conclusions — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, intervalsSvg, boxTreeSvg } from "../../mdm4u/figs.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const moe = (p, n) => 1.96 * Math.sqrt((p * (1 - p)) / n);
const sec = (what, k) => mc(`In which section of a statistical report does ${what} belong?`, k, ["introduction", "method", "results", "conclusion", "limitations"].filter((s) => s !== k).slice(0, 3), "Report structure.");

export const E = [
  sec("the research question and hypothesis", "introduction"),
  sec("a description of how the sample was chosen", "method"),
  sec("the regression equation and graphs", "results"),
  sec("the answer to the research question", "conclusion"),
  sec("a statement that the sample came from only one school", "limitations"),
  num("A poll of 400 gives p̂ = 0.5. Find the 95% margin of error in percentage points (1 decimal).", Math.round(moe(0.5, 400) * 1000) / 10, "1.96√(0.25/400) × 100.", null, 0.1),
  num("A conclusion reports 46% ± 4%. What is the lower end of the interval (percent)?", 42, "46 − 4."),
  num("A conclusion reports 46% ± 4%. What is the upper end of the interval (percent)?", 50, "46 + 4."),
  mc("Which wording fits an observational study?", "“is associated with”", ["“causes”", "“proves”", "“makes”"], "Association."),
  mc("Which is a limitation?", "the sample was voluntary", ["the median was 7", "r = 0.8", "the interval was 0.3 to 0.4"], "A weakness."),
  mc("A bar graph comparing 61% and 64% should have its vertical axis start at…", "0", ["60", "61", "64"], "Honest display."),
  mc("“19 times out of 20” in a poll report means…", "95% confidence", ["19% support", "a sample of 20", "5% margin of error"], "Confidence level."),
  tf("A conclusion should name the population it applies to.", true, "Scope."),
  tf("It is acceptable to omit limitations if the results are interesting.", false, "Honesty."),
  tf("A strong conclusion includes a measure of uncertainty.", true, "Margin of error or spread."),
  num("The misleading bar graph starts at 60%. How many times taller does the 66% bar look than the 62% bar?", 3, "(66 − 60)/(62 − 60).", barsSvg([6, 2], { labels: ["A", "B"], top: ["66%", "62%"], fmt: (v) => String(Math.round(v + 60)) + "%", ymax: 7 })),
  mc("The diagram shows the parts of a report. Which part is missing?", "results", ["title page", "bibliography only", "hypothesis test"], "Introduction, method, results, conclusion, limitations.", boxTreeSvg([{ t: "introduction", color: "blue" }, { t: "method", color: "violet" }, { t: "?", color: "green" }, { t: "conclusion", color: "amber" }, { t: "limitations", color: "red" }], { root: "report", dy: 32 })),
  ms("Which belong in a strong conclusion? Select all.", ["the answer to the question", "key numbers as evidence", "uncertainty", "the population it applies to", "claims about unrelated topics"], [0, 1, 2, 3], "Four parts."),
  mc("Which statement overstates a survey of 50 classmates?", "“Most Canadian teens prefer online classes.”", ["“30 of the 50 classmates surveyed preferred online classes.”", "“60% of our sample preferred online classes.”", "“This sample may not represent other schools.”"], "Scope too wide."),
  mc("An executive summary is…", "a short statement of the question and main findings", ["the raw data", "the full method", "a list of references"], "Definition."),
];

export const M = [
  num("A random sample of 600 adults: 246 cycle to work at least once a week. Find p̂.", 0.41, "246/600.", null, 0.001),
  num("For 246 of 600 adults, find the 95% margin of error (3 decimals).", r3(moe(0.41, 600)), "1.96√(0.41·0.59/600).", null, 0.002),
  num("A report says 38% ± 3.1% (95%). Estimate the sample size (nearest whole number).", Math.round((1.96 / 0.031) ** 2 * 0.38 * 0.62), "n = (1.96/E)² p̂q̂.", null, 2),
  num("To halve a margin of error of ±5 points from a sample of 380, about how many people are needed?", 1520, "×4."),
  num("A graph's axis runs from 90 to 100 and shows 94 and 98. How many times taller does the 98 bar look?", 2, "(98 − 90)/(94 − 90)."),
  mc("Two polls report 48% ± 3% and 52% ± 3%. Can a headline say opinion changed?", "no — the intervals overlap", ["yes — 52 > 48", "yes — the second poll is newer", "only if both polls had 1000 people"], "Overlap.", intervalsSvg([[0.45, 0.51], [0.49, 0.55]], { min: 0.42, max: 0.58, ticks: [0.42, 0.46, 0.5, 0.54, 0.58] })),
  mc("Which rewrite fixes “Our study proves video games improve reflexes” (survey of 80 gamers)?", "“Among 80 gamers surveyed, more gaming was associated with faster reflexes; the survey cannot show cause.”", ["“Video games definitely improve reflexes.”", "“Gaming causes faster reflexes for everyone.”", "“We proved it with r.”"], "Association and scope."),
  mc("A randomized experiment with 100 volunteers shows a new technique improved memory scores. Which conclusion is justified?", "the technique caused improvement for volunteers like these", ["the technique works for everyone in the world", "the technique has no effect", "nothing can be concluded"], "Causal within scope."),
  ms("Which are good practices in a statistical presentation? Select all.", ["label axes and units", "report sample sizes", "show variability", "use 3-D effects to make bars look bigger", "state limitations"], [0, 1, 2, 4], "Clarity and honesty."),
  tf("If r² = 0.25, the report should say that x explains about 25% of the variation in y.", true, "Interpretation."),
  tf("A conclusion from a convenience sample can be generalized to the whole population.", false, "Not representative."),
  mc("Which display best supports a conclusion comparing median commute times of four groups?", "side-by-side box plots", ["four circle graphs", "a scatter plot", "a pictograph"], "Groups and spread."),
  mc("A reader asks why your sample of 300 can describe a city of 400 000. The best answer is…", "it was random, so its margin of error (about ±5.7 points) describes its precision", ["300 is more than enough for any purpose", "large cities do not need samples", "the city is similar everywhere"], "Random sampling + margin of error."),
  num("A study reports r = −0.6. What percent of the variation is explained by the linear relationship?", 36, "r² = 0.36."),
  num("The interval shown is a 95% interval. What is p̂?", 0.53, "Centre of 0.49 to 0.57.", intervalsSvg([[0.49, 0.57]], { min: 0.4, max: 0.65, ticks: [0.4, 0.45, 0.5, 0.55, 0.6, 0.65] }), 0.001),
  mc("For the interval 0.49 to 0.57, can the report claim majority support?", "not with confidence — the interval includes values below 0.5", ["yes — the centre is above 0.5", "yes — the upper end is above 0.5", "no — the support is 49%"], "Interval includes 0.5."),
  mc("Which limitation is about measurement rather than sampling?", "self-reported hours may be inaccurate", ["only one school was sampled", "the response rate was 30%", "volunteers were used"], "Measurement."),
  num("A report states 72% of 250 respondents agreed. How many respondents agreed?", 180, "0.72 × 250."),
  mc("Which title is unbiased for a graph showing a small decline in sales?", "“Sales, 2020–2025”", ["“Sales collapse!”", "“Disaster for the company”", "“Sales in free fall”"], "Neutral wording."),
  mc("Which sentence best states scope?", "“These results describe grade 12 students at our school in 2026.”", ["“These results are true everywhere.”", "“This is the final answer.”", "“Statistics never lie.”"], "Population and time."),
];

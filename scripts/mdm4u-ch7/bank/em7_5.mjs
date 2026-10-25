// 7.5 Critiquing Statistical Studies — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, tableSvg, boxTreeSvg } from "../../mdm4u/figs.mjs";

const r3 = (v) => Math.round(v * 1000) / 1000;
const moe = (p, n) => 1.96 * Math.sqrt((p * (1 - p)) / n);
const flaw = (study, k, why) => mc(`What is the main flaw? ${study}`, k, ["biased sample", "leading question", "causal claim from correlation", "misleading graph", "sample too small"].filter((f) => f !== k).slice(0, 3), why);

export const E = [
  flaw("A radio station asks listeners to call in about a new law; 78% oppose it.", "biased sample", "Voluntary response."),
  flaw("A survey asks: “Don't you agree that homework is too long?”", "leading question", "Wording pushes yes."),
  flaw("Cities with more gyms have lower obesity, so a report says gyms cause weight loss.", "causal claim from correlation", "Observational data."),
  flaw("A bar graph comparing 51% and 53% starts its axis at 50%.", "misleading graph", "Truncated axis."),
  flaw("A company tests its new drink on 6 employees and claims it boosts energy.", "sample too small", "n = 6."),
  num("A poll of 1000 claims a margin of error of ±3 points (95%, p̂ = 0.5). What is the correct margin in percentage points (1 decimal)?", Math.round(moe(0.5, 1000) * 1000) / 10, "1.96√(0.25/1000) × 100.", null, 0.1),
  num("Percents reported for four exclusive categories are 32%, 28%, 25% and x%. Find x.", 15, "Sum to 100."),
  num("A report says 45 out of 150 people agreed, which it calls 35%. What is the correct percent?", 30, "45/150."),
  mc("Who paid for a study is important because…", "a sponsor may have a conflict of interest", ["sponsored studies are always wrong", "it changes the sample size", "it determines r"], "Possible bias."),
  mc("Which question checks the measurement of a study?", "How exactly was each variable measured or asked?", ["Who is the author's favourite team?", "How long is the report?", "What colour are the graphs?"], "Measurement."),
  mc("Constructive feedback should be…", "specific, explain the effect, and suggest a fix", ["short and negative", "only praise", "about the person"], "Problem, effect, fix."),
  tf("A large voluntary-response sample is free of bias.", false, "Size does not fix bias."),
  tf("A study's conclusion should match its design.", true, "No causal claims without experiments."),
  tf("Checking whether percents add to 100 is a useful consistency check.", true, "For exclusive categories."),
  num("A misleading graph starts at 80 and shows 84 and 92. How many times taller does the 92 bar look?", 3, "(92 − 80)/(84 − 80).", barsSvg([4, 12], { labels: ["A", "B"], top: ["84", "92"], fmt: (v) => String(Math.round(v + 80)), ymax: 14 })),
  mc("The checklist shows seven questions. Which one is missing?", "design", ["colour", "font", "length"], "Source, sample, measurement, design, analysis, displays, conclusion.", boxTreeSvg([{ t: "source", color: "blue" }, { t: "sample", color: "violet" }, { t: "measurement", color: "green" }, { t: "?", color: "amber" }, { t: "analysis", color: "teal" }, { t: "displays", color: "red" }, { t: "conclusion", color: "gray" }], { root: "critique", dy: 30 })),
  mc("An ad says “4 out of 5 dentists recommend our gum.” What should you ask first?", "how many dentists were asked and how they were chosen", ["what flavour the gum is", "how much the ad cost", "whether dentists like gum"], "Sample."),
  mc("A news story uses data from 2005 to describe teens today. The main concern is…", "the data are out of date", ["the sample is random", "the graph is honest", "the story is too short"], "Timeliness."),
  mc("A report predicts house prices in 2060 from data for 2015–2025. The concern is…", "extrapolation", ["interpolation", "a small margin of error", "a leading question"], "Outside the data range."),
  num("A study reports 60% of 40 respondents and 40% of 60 respondents agree. What percent of all 100 agree?", 48, "(24 + 24)/100."),
];

export const M = [
  num("A poll claims ±2 points (95%) with 400 respondents and p̂ = 0.5. What should the margin be (3 decimals as a proportion)?", r3(moe(0.5, 400)), "1.96√(0.25/400).", null, 0.002),
  num("About how many respondents would a poll need to justify ±2 points (95%, p̂ = 0.5)? (round up)", Math.ceil((1.96 / 0.02) ** 2 * 0.25), "(1.96/0.02)² × 0.25."),
  num("The table reports 40% overall agreement. Using the counts, what is the correct overall percent?", 46, "(48 + 90)/300.", tableSvg([["", "agree", "total"], ["men", "48", "120"], ["women", "90", "180"]])),
  num("A report states that 30% of 250 people “strongly agree” and 45% “agree”. How many people strongly agree or agree?", 188, "0.75 × 250 = 187.5 ≈ 188."),
  mc("A study of a vitamin's effect uses volunteers who chose whether to take it. The main design flaw is…", "self-selection (no random assignment)", ["too many participants", "a control group", "blinding"], "Confounding."),
  mc("A survey of shoppers at an expensive mall concludes that “most families can afford luxury goods.” The main flaw is…", "an unrepresentative sample", ["a leading question", "a misleading graph", "extrapolation"], "Who was asked."),
  mc("Which comment is the most constructive for a classmate whose graph has no labels?", "“Label both axes with units so readers know what the bars show.”", ["“Your graph is bad.”", "“I can't read this.”", "“Start over.”"], "Specific with fix."),
  ms("Which are signs of a trustworthy study? Select all.", ["a random sample", "a published method", "independent funding", "a voluntary online poll", "results with a margin of error"], [0, 1, 2, 4], "Method and transparency."),
  ms("Which are consistency checks? Select all.", ["percents of exclusive categories add to 100", "the margin of error fits the sample size", "subgroup counts add to the total", "the graph is colourful", "reported percents match the counts"], [0, 1, 2, 4], "Numbers fit together."),
  tf("A study can have a random sample and still be biased by a leading question.", true, "Response bias."),
  tf("If a study is published online, it must be reliable.", false, "Check the method."),
  mc("A report says “crime rose 50%” when incidents went from 2 to 3 in a small town. What context is missing?", "the very small base counts", ["the colour of the graph", "the town's name", "the season"], "Small numbers."),
  num("Incidents rose from 2 to 3. What is the percent increase?", 50, "1/2."),
  mc("A graph shows unequal time intervals (1990, 2000, 2020, 2022) evenly spaced. The problem is…", "the time axis is distorted", ["the values are wrong", "the sample is biased", "the question is leading"], "Unequal spacing."),
  num("A poll reports 55% support, ±4 points. What is the lowest plausible support (percent)?", 51, "55 − 4."),
  mc("For a poll of 55% ± 4 points, can the report claim majority support?", "yes — the whole interval is above 50%", ["no — 4 points is too large", "no — polls can't show majorities", "only with 99% confidence"], "51% to 59%."),
  mc("The bar graph claims a large improvement. What is wrong with it?", "the axis starts at 70, exaggerating a 4-point change", ["nothing", "the bars should be pie slices", "it has labels"], "Truncated.", barsSvg([3, 7], { labels: ["before", "after"], top: ["73", "77"], fmt: (v) => String(Math.round(v + 70)), ymax: 9 })),
  num("A study reports that a treatment group improved by 12 points and a control group by 9. What improvement is attributable to the treatment?", 3, "12 − 9."),
  mc("A study with no control group reports that patients improved by 12 points after treatment. The main weakness is…", "improvement might have happened anyway", ["the sample is random", "the improvement is too big", "there is a placebo"], "No comparison."),
  mc("Which feedback names a problem, its effect, and a fix?", "“Your sample was all grade 12s, so it may overstate study hours for the school; sample every grade.”", ["“Good job.”", "“Sample better.”", "“This is biased.”"], "Complete critique."),
];

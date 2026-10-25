// MDM4U Worksheet 7.4 — Communicating Conclusions (teacher edition)
import { svgT, barsSvg, boxTreeSvg, intervalsSvg } from "./figT.mjs";

const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const moe = (p, n) => 1.96 * Math.sqrt((p * (1 - p)) / n);

const EXAMPLES = [
  { title: "Report structure", q: "List the five sections of a statistical report and what each contains.", fig: svgT(boxTreeSvg([{ t: "introduction", color: "blue" }, { t: "method", color: "violet" }, { t: "results", color: "green" }, { t: "conclusion", color: "amber" }, { t: "limitations", color: "red" }], { root: "report", dy: 32 }), 5), steps: ["Question; how; what was found; the answer; the weaknesses."], ans: "see figure" },
  { title: "Conclusion with an interval", q: "A random sample of 500 adults: 215 shop online weekly. Write a conclusion.", steps: [S`$\hat p=0.43$, $E\approx${r3(moe(0.43, 500))}$.`], ans: `about ${Math.round((0.43 - moe(0.43, 500)) * 100)}% to ${Math.round((0.43 + moe(0.43, 500)) * 100)}% of adults in the population shop online weekly (95% confidence)` },
  { title: "Association language", q: "Rewrite: “Coffee makes students study longer (r = 0.58, survey of 90 students).”", steps: ["Observational: use association language."], ans: "among the 90 students surveyed, coffee intake was moderately associated with study time" },
  { title: "Scope", q: "A survey of grade 12 students at one school found 61% plan to attend university. To which population does this apply?", steps: ["Only the population sampled."], ans: "grade 12 students at that school" },
  { title: "Limitations", q: "Give three limitations of a phone survey of 150 residents about local parks with a 25% response rate.", steps: ["Sample, response, measurement."], ans: "small n; non-response bias; only reachable by phone" },
  { title: "Honest graph", q: "Redraw a bar graph that compares 78% and 82% with an axis starting at 75%.", fig: svgT(barsSvg([78, 82], { labels: ["2024", "2025"], top: true, ymax: 100 }), 4.5), steps: ["Start the axis at 0."], ans: "see figure" },
  { title: "Uncertainty in comparisons", q: "Two polls: 47% (± 3) and 50% (± 3). Can a reporter say support increased?", fig: svgT(intervalsSvg([[0.44, 0.5], [0.47, 0.53]], { min: 0.4, max: 0.56, ticks: [0.4, 0.45, 0.5, 0.55] }), 6), steps: ["The intervals overlap a lot."], ans: "no clear evidence of a change" },
  { title: "Executive summary", q: "Write a two-sentence summary for a study finding a strong negative association (r = −0.81) between screen time and sleep for 120 randomly selected students.", steps: ["Answer, evidence, scope, design."], ans: "Among 120 randomly selected students, more screen time was strongly associated with less sleep (r = −0.81). The study was observational, so it does not show that screen time causes less sleep." },
  { title: "Defending a sample", q: "Respond to: “500 people can't tell us about a city of 600 000.”", steps: ["Random selection; margin of error depends on n, not N."], ans: "a random sample of 500 gives about ±4.4 points regardless of city size" },
];

const PROBLEMS = [
  { level: 1, q: "In which report section is the regression equation presented?", ans: "results" },
  { level: 1, q: "Find the 95% margin of error for p̂ = 0.5, n = 600.", ans: `${r3(moe(0.5, 600))}` },
  { level: 1, q: "Rewrite with association language: “Music lessons cause higher marks.”", ans: "music lessons are associated with higher marks" },
  { level: 2, q: "Write a conclusion: random sample of 360 voters, 198 support a bylaw.", ans: `${r3(0.55 - moe(0.55, 360))} to ${r3(0.55 + moe(0.55, 360))} (95%)` },
  { level: 2, q: "A bar graph's axis starts at 50 and shows 55 and 70. How many times taller does the 70 bar look? What is the true ratio?", ans: "4 times; about 1.27" },
  { level: 2, q: "List four elements of a strong conclusion.", ans: "answer, evidence, uncertainty, scope" },
  { level: 2, q: "Explain the difference between a result and a limitation, with examples.", ans: "result: what was found (r = 0.6); limitation: what restricts it (one school)" },
  { level: 2, q: "Do the intervals shown suggest a real difference? Explain.", fig: svgT(intervalsSvg([[0.3, 0.38], [0.45, 0.53]], { min: 0.25, max: 0.6, ticks: [0.3, 0.4, 0.5, 0.6] }), 5.5), ans: "yes — they do not overlap" },
  { level: 3, space: 4.5, q: "A poll reports 41% ± 4% (19 times out of 20). Estimate the sample size and write the conclusion in words.", ans: `about ${Math.round((1.96 / 0.04) ** 2 * 0.41 * 0.59)}; 37% to 45% with 95% confidence` },
  { level: 3, space: 4.5, q: "Critique and rewrite: “Our survey of 25 friends proves teens prefer streaming to TV (80%).”", ans: "convenience sample, small; “80% of the 25 friends surveyed preferred streaming; this cannot be generalized”" },
  { level: 3, space: 4.5, q: "Write the limitations section for a randomized experiment on 40 volunteers testing a memory technique.", ans: "volunteers may not represent all students; small n; short-term effect; one test" },
  { level: 3, space: 4.5, q: "Prepare three questions a classmate might ask about your investigation, and your answers.", ans: "answers vary" },
  { level: 3, space: 4.5, q: "A report concludes that “the new park increased neighbourhood happiness” from a survey before and after it opened. Identify the weakness and suggest a stronger design.", ans: "no comparison group; other changes over time; compare with similar neighbourhoods without a new park" },
];

export const WS = {
  code: "7.4",
  title: "Communicating Conclusions",
  bigideas: S`A statistical report has an introduction, method, results, conclusion and limitations. A conclusion answers the question in context, with evidence, uncertainty and scope, and never claims cause without a randomized experiment. Displays must be honest; limitations must be stated openly.`,
  goals: ["Structure a report.", "Write conclusions.", "State limitations.", "Use honest displays."],
  curriculum: "E2.1, E2.2, E2.3",
  vocab: [["Scope", "population the result applies to"], ["Limitation", "weakness of the study"], ["Overstatement", "claim beyond the evidence"], ["Executive summary", "short statement of findings"]],
  hook: "Two news stories describe the same poll: “Support collapses!” and “Support steady.” How can both appear?",
  concepts: [
    ["1. Structure", "Introduction, method, results, conclusion, limitations."],
    ["2. Conclusion", "Answer + evidence + uncertainty + scope."],
    ["3. Honesty", S`${svgT(barsSvg([78, 82], { labels: ["A", "B"], top: true, ymax: 100 }), 3.6)}Axes from 0.`],
  ],
  tips: ["Answer the question asked.", "Include numbers and units.", "Give the margin of error.", "State the population.", "Avoid causal words."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

// MDM4U Worksheet 7.5 — Critiquing Statistical Studies (teacher edition)
import { svgT, barsSvg, tableSvg, boxTreeSvg } from "./figT.mjs";

const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const moe = (p, n) => 1.96 * Math.sqrt((p * (1 - p)) / n);

const EXAMPLES = [
  { title: "The checklist", q: "List the seven questions of the critique checklist.", fig: svgT(boxTreeSvg([{ t: "source", color: "blue" }, { t: "sample", color: "violet" }, { t: "measurement", color: "green" }, { t: "design", color: "amber" }, { t: "analysis", color: "teal" }, { t: "displays", color: "red" }, { t: "conclusion", color: "gray" }], { root: "critique", dy: 30 }), 5), steps: ["Who/why; who/how chosen; how measured; design vs claim; analysis; graphs; conclusion."], ans: "see figure" },
  { title: "Sponsor", q: "A study funded by a candy company finds sugar does not affect concentration. What concern arises?", steps: ["Conflict of interest."], ans: "the sponsor benefits from one result; check the method and independent studies" },
  { title: "Margin-of-error check", q: "A poll of 250 claims ±2 points. Check it for p̂ = 0.5.", steps: [S`$1.96\sqrt{0.25/250}\approx${r3(moe(0.5, 250))}$.`], ans: "about ±6.2 points: the claim is wrong" },
  { title: "Percent check", q: "A table reports 45% of 200 boys and 55% of 200 girls agree, and says 60% overall agree. Check.", steps: [S`$\frac{90+110}{400}=50\%$.`], ans: "inconsistent: 50%, not 60%" },
  { title: "Question wording", q: "A survey asks: “Should the city stop wasting tax money on art?” Critique.", steps: ["Loaded wording pushes toward yes."], ans: "response bias; use neutral wording" },
  { title: "Design vs claim", q: "Students who used a homework app had higher marks, so the school says the app raises marks. Critique.", steps: ["Students chose the app (self-selection)."], ans: "no causal claim; run a randomized trial" },
  { title: "Graph check", q: "A graph shows 2022 sales 410 and 2023 sales 430 with the axis starting at 400. Critique.", fig: svgT(barsSvg([10, 30], { labels: ["2022", "2023"], top: ["410", "430"], fmt: (v) => String(Math.round(v + 400)), ymax: 35 }), 4.5), steps: ["Bars look 3 times different; true growth about 5%."], ans: "truncated axis exaggerates growth" },
  { title: "Extrapolation", q: "A report uses data for ages 20–40 to predict the reaction time of an 85-year-old. Critique.", steps: ["Outside the data range."], ans: "extrapolation; the relationship may change" },
  { title: "Peer feedback", q: "Give feedback on a classmate's study: 40 randomly chosen students, clear graphs, but the conclusion says “sleep causes good marks.”", steps: ["Strength, concern, fix."], ans: "good sampling and graphs; the conclusion overstates — use association language" },
];

const PROBLEMS = [
  { level: 1, q: "What bias affects an online poll on a news website?", ans: "voluntary-response bias" },
  { level: 1, q: "A poll of 1500 claims ±2.5 points (95%). Is that consistent for p̂ = 0.5?", ans: `yes: about ±${r3(moe(0.5, 1500) * 100)} points` },
  { level: 1, q: "Percents 40%, 35% and 30% are reported for three exclusive groups. What is wrong?", ans: "they add to 105%" },
  { level: 2, q: "A juice company study reports its juice boosts immunity, based on 30 employees. List three problems.", ans: "conflict of interest; small, unrepresentative sample; no control group" },
  { level: 2, q: "The table shows a result. Check the overall percent reported (70%).", fig: svgT(tableSvg([["", "yes", "total"], ["adults", "120", "200"], ["teens", "105", "150"], ["overall", "?", "350"]]), 4.5), ans: "225/350 ≈ 64.3%, not 70%" },
  { level: 2, q: "Rewrite a loaded question: “Do you support the unfair new parking fees?”", ans: "Do you support the new parking fees?" },
  { level: 2, q: "A report claims r = 0.95 proves that ice-cream sales cause sunburns. Critique.", ans: "common cause (sunny weather); correlation is not causation" },
  { level: 2, q: "Write constructive feedback for a classmate whose sample was 20 friends.", ans: "convenience sample; suggest random sampling with a larger n" },
  { level: 3, space: 4.5, q: "Find a media report with a statistic. Critique it using all seven checklist questions.", ans: "answers vary" },
  { level: 3, space: 4.5, q: "A poll claims 52% ± 2% with n = 600. Check the margin of error and decide whether “a majority supports” is justified.", ans: `E ≈ ${r3(moe(0.52, 600))}: interval ${r3(0.52 - moe(0.52, 600))} to ${r3(0.52 + moe(0.52, 600))} includes 0.5 — not justified` },
  { level: 3, space: 4.5, q: "Design a better version of a flawed study: a gym surveys 50 members and concludes that “gym members are healthier than non-members.”", ans: "random samples of members and non-members; measured health; adjust for confounders; no causal claim" },
  { level: 3, space: 4.5, q: "Explain why a study can be internally sound but still not apply to your situation.", ans: "its population or conditions may differ from yours (scope)" },
  { level: 3, space: 4.5, q: "Exchange your investigation plan with a classmate, critique theirs, and summarize the changes you made after their critique.", ans: "answers vary" },
];

export const WS = {
  code: "7.5",
  title: "Critiquing Statistical Studies",
  bigideas: S`Evaluate any study with a checklist: source and purpose, sample, measurement, design, analysis, displays and conclusion. Check numbers for consistency — percents, totals, margins of error. Good critique is specific, explains the effect of a problem and suggests a fix.`,
  goals: ["Apply the checklist.", "Check numbers.", "Spot misleading displays.", "Give constructive feedback."],
  curriculum: "E2.3",
  vocab: [["Conflict of interest", "a sponsor's stake in the result"], ["Consistency check", "verify that numbers fit together"], ["Critique", "reasoned evaluation"], ["Constructive feedback", "specific, with a fix"]],
  hook: "“4 out of 5 experts agree!” Which experts? Agree with what? How were they chosen?",
  concepts: [
    ["1. Checklist", "Source, sample, measurement, design, analysis, displays, conclusion."],
    ["2. Numbers", S`Check $E\approx1.96\sqrt{\hat p\hat q/n}$ and that percents add up.`],
    ["3. Feedback", "Problem, effect, fix."],
  ],
  tips: ["Ask who paid.", "Find n and the response rate.", "Read the exact question.", "Check the axes.", "Be respectful."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

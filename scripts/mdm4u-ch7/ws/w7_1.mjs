// MDM4U Worksheet 7.1 — Designing the Study (teacher edition)
import { svgT, boxTreeSvg, barsSvg, tableSvg } from "./figT.mjs";

const S = String.raw;
const nFor = (E, p = 0.5) => Math.ceil((1.96 / E) ** 2 * p * (1 - p));

const EXAMPLES = [
  { title: "Vague to specific", q: "Improve: “Is fast food bad?”", steps: ["Name a population and measurable variables."], ans: "e.g. Is the number of fast-food meals per week related to resting heart rate for adults at a local fitness centre?" },
  { title: "Variables and hypothesis", q: "For the question “Is time spent reading for pleasure related to vocabulary test scores for grade 9 students in our board?”, name the variables and write a hypothesis.", steps: ["Explanatory: weekly reading time; response: vocabulary score."], ans: "more reading time is associated with higher scores" },
  { title: "Choosing a design (1)", q: "Which design suits “Does a 10-minute stretching routine reduce muscle soreness after exercise?”", steps: ["The treatment can be assigned safely."], ans: "a randomized controlled experiment" },
  { title: "Choosing a design (2)", q: "Which design suits “How has the average price of a litre of milk in Canada changed since 1990?”", steps: ["Reliable records already exist."], ans: "secondary data (a national statistics agency)" },
  { title: "Sample size", q: "Find n for a margin of error of ±6 percentage points at 95% confidence with no prior estimate.", steps: [S`$n=\left(\frac{1.96}{0.06}\right)^2(0.25)\approx266.8$.`], ans: `${nFor(0.06)}` },
  { title: "Sample size with an estimate", q: "Repeat for ±6 points when a pilot suggests p̂ ≈ 0.2.", steps: [S`$\left(\frac{1.96}{0.06}\right)^2(0.2)(0.8)\approx170.7$.`], ans: `${nFor(0.06, 0.2)}` },
  { title: "Stratified plan", q: "A school has 300 grade 9, 280 grade 10, 260 grade 11 and 260 grade 12 students. Plan a proportional stratified sample of 220.", fig: svgT(tableSvg([["grade", "9", "10", "11", "12", "total"], ["students", "300", "280", "260", "260", "1100"], ["sample", "60", "56", "52", "52", "220"]]), 7), steps: [S`Fraction $\frac{220}{1100}=0.2$.`], ans: "60, 56, 52, 52" },
  { title: "Allowing for non-response", q: "You need 220 responses and expect 55% to respond. How many students should be contacted?", steps: [S`$\frac{220}{0.55}=400$.`], ans: "400" },
  { title: "Ethics and timeline", q: "List four ethical safeguards and a four-week timeline for a survey about stress.", fig: svgT(boxTreeSvg([{ t: "week 1: question and plan", color: "blue" }, { t: "week 2: collect", color: "green" }, { t: "week 3: analyse", color: "amber" }, { t: "week 4: report", color: "red" }], { root: "timeline", dy: 36 }), 6), steps: ["Consent, anonymity, right to withdraw, access to support."], ans: "see steps" },
];

const PROBLEMS = [
  { level: 1, q: "Name the explanatory and response variables: “Is the number of hours of practice related to typing speed?”", ans: "x: practice hours; y: typing speed" },
  { level: 1, q: "Find n for ±10 percentage points at 95% confidence (no prior estimate).", ans: `${nFor(0.1)}` },
  { level: 1, q: "Which design would you use to study whether a new seating plan changes test marks?", ans: "a randomized experiment (randomly assign classes or students)" },
  { level: 2, q: "Improve the question “Are pets good?”", ans: "e.g. Is dog ownership related to daily minutes of walking for adults in our town?" },
  { level: 2, q: "Find n for ±3.5 percentage points with p̂ ≈ 0.35.", ans: `${nFor(0.035, 0.35)}` },
  { level: 2, q: "A study needs 150 responses; the response rate is expected to be 40%. How many should be contacted?", ans: "375" },
  { level: 2, q: "The bar graph shows the sample sizes needed for three margins of error. Explain the pattern.", fig: svgT(barsSvg([nFor(0.08), nFor(0.04), nFor(0.02)], { labels: ["±8%", "±4%", "±2%"], top: true }), 5), ans: "halving E roughly quadruples n" },
  { level: 2, q: "List two reasons to collect secondary data instead of primary data for a question about national incomes.", ans: "large reliable samples; impractical to survey the country yourself" },
  { level: 3, space: 4.5, q: "Design a complete plan for the question “Is the time students spend on social media related to their mood?”: population, variables and measurement, design, sampling plan, sample size for ±7 points, ethics.", ans: `answers vary; n = ${nFor(0.07)} with p̂ = 0.5` },
  { level: 3, space: 4.5, q: "Explain why an experiment would be unethical for the question “Does skipping breakfast lower marks?” and design a better observational study.", ans: "denying breakfast could harm students; survey breakfast habits and marks, controlling for sleep and income" },
  { level: 3, space: 4.5, q: "A margin of error must be ±2.5 points. Compare the sample sizes for p̂ = 0.5 and p̂ = 0.1, and explain the difference.", ans: `${nFor(0.025)} and ${nFor(0.025, 0.1)}; p̂q̂ is largest at 0.5` },
  { level: 3, space: 4.5, q: "A student plans a study of 20 friends to estimate the proportion of students who use public transit. Critique the plan and rewrite it.", ans: "convenience, too small; random stratified sample with n from the margin-of-error formula" },
  { level: 3, space: 4.5, q: "Write a hypothesis, a design and a sample size for your own culminating investigation.", ans: "answers vary" },
];

export const WS = {
  code: "7.1",
  title: "Designing the Study",
  bigideas: S`An investigation moves through question, design, collection, analysis and communication. A researchable question names the population and measurable variables. The design (survey, observational study, experiment, secondary data) must suit the question. The sample size for a proportion is $n=\left(\frac{1.96}{E}\right)^2\hat p(1-\hat p)$, increased to allow for non-response.`,
  goals: ["Write researchable questions.", "Name variables and hypotheses.", "Choose a design.", "Plan the sample size."],
  curriculum: "E1.1, E1.2, E1.3",
  vocab: [["Research question", "specific, measurable and feasible"], ["Hypothesis", "a testable prediction"], ["Sampling plan", "who, how and how many"], ["Response rate", "responses divided by contacts"]],
  hook: "You have four weeks and no budget. What question could you answer well with data?",
  concepts: [
    ["1. The process", S`${svgT(boxTreeSvg([{ t: "question", color: "blue" }, { t: "design", color: "violet" }, { t: "collect", color: "green" }, { t: "analyse", color: "amber" }, { t: "communicate", color: "red" }], { root: "investigation", dy: 32 }), 4.5)}`],
    ["2. Design", "Match the design to the question."],
    ["3. Sample size", S`$n=\left(\frac{1.96}{E}\right)^2\hat p\hat q$; divide by the response rate.`],
  ],
  tips: ["Name the population.", "Define each variable's measurement.", "Use p̂ = 0.5 if unknown.", "Round n up.", "Plan ethics first."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

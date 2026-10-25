// MDM4U 7.6 — Chapter 7 Review: one complete investigation from question to report (design, sample size, cleaning,
// one- and two-variable analysis, a confidence interval, conclusion and limitations), plus mixed review problems
import { intro, section, keyIdea, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, scatterSvg, residualPlotSvg, boxPlotSvg, tableSvg, boxTreeSvg } from "./lib.mjs";
import { mean, median, sdS, quartiles, corr, linreg } from "../mdm4u/count.mjs";

export const TITLE = "7.6 Chapter 7 Review";
export const ID = "5c3e0001-0001-4001-8001-0000d4d00706";
const S = String.raw;
const r2 = (v) => Math.round(v * 100) / 100;
const r3 = (v) => Math.round(v * 1000) / 1000;
const moe = (p, n) => 1.96 * Math.sqrt((p * (1 - p)) / n);

// the worked investigation: weekly hours of volunteering (x) and a wellbeing score out of 50 (y), 12 students
const vx = [0, 1, 1, 2, 3, 3, 4, 5, 6, 6, 8, 9], vy = [27, 30, 28, 31, 33, 31, 35, 34, 38, 36, 39, 42];
const L = linreg(vx, vy);
const [q1, md, q3] = quartiles(vy);

export const blocks = () => [
  intro({
    icon: "🏁",
    title: "Chapter 7 Review: A Complete Investigation",
    overview: S`This review follows one investigation from beginning to end — the model for your own culminating project. A student asks whether volunteering is related to wellbeing among grade 12 students, designs a survey, cleans the data, analyses one and two variables, estimates a proportion, and writes a conclusion with limitations. Each example is one stage; the practice and hard problems mix skills from the whole chapter.`,
    goals: [
      "plan an investigation from a researchable question;",
      "calculate a sample size and design a sampling plan;",
      "clean and summarize data;",
      "analyse a relationship and estimate a proportion;",
      "write a conclusion in context and critique the study.",
    ],
    curriculum: "E1.1–E1.5 and E2.1–E2.3 (the culminating investigation)",
    prior: [
      ["n for ±5% at 95% with p̂ = 0.5?", "385."],
      ["What does r² = 0.8 mean?", "80% of the variation in y is explained by x."],
      ["Observational study → cause?", "No, only association."],
    ],
    words: [
      ["Investigation", "a complete statistical study", "question → report"],
      ["Wellbeing score", "a measured response variable", "a 10-question scale out of 50"],
      ["Scope", "the population the conclusion applies to", "grade 12 students at one school"],
      ["Limitation", "what restricts the conclusion", "self-reported hours"],
    ],
  }),

  section("📌 The investigation at a glance", S`
  ${fig(boxTreeSvg([{ t: "1. question: volunteering and wellbeing?", color: "blue" }, { t: "2. survey 12 students (pilot)", color: "violet" }, { t: "3. clean and summarize", color: "green" }, { t: "4. regression + interval", color: "amber" }, { t: "5. conclusion + limitations", color: "red" }], { root: "investigation", dy: 40 }), "the five stages")}
  ${table(["Stage", "Key tool"], [["design", "specific question; population; sampling plan; n = (1.96/E)² p̂q̂"], ["collect", "random sample; consent; clean data"], ["analyse", "summaries, displays, r, regression, residuals, confidence interval"], ["communicate", "answer + evidence + uncertainty + scope; limitations"]])}
  ${keyIdea(S`Every stage should be written down as you go: the question, the plan, the raw data, every cleaning step, every calculation and display. A reader should be able to repeat your study.`)}`),

  section("📌 Watch out", watchOut([
    "Pilot data are for testing the method, not for final conclusions.",
    "Keep the conclusion within the scope of the sample.",
    "Report variability and uncertainty, not only averages.",
    "Self-reported data can carry response bias.",
  ])),

  examples([
    ["Stage 1: the question and plan", "Turn the interest “Does helping others make you happier?” into a researchable question and a plan.",
      [S`Question: “Is weekly volunteering time related to wellbeing scores for grade 12 students at our school?”`, S`Variables: hours volunteered per week (x); score on a 10-item wellbeing scale out of 50 (y). Hypothesis: positive association.`, S`Design: observational survey; random sample of grade 12 students; consent and anonymous responses.`],
      "specific question, variables, hypothesis, design"],
    ["Stage 2: sample size", "The student also wants to estimate the proportion of grade 12 students who volunteer at least 2 hours a week within ±8 percentage points (95%). A pilot suggests about 60%. How many students are needed?",
      [S`\(n=\left(\frac{1.96}{0.08}\right)^2(0.6)(0.4)\approx${((1.96 / 0.08) ** 2 * 0.24).toFixed(1)}\).`, S`Round up: ${Math.ceil((1.96 / 0.08) ** 2 * 0.24)} students.`],
      `${Math.ceil((1.96 / 0.08) ** 2 * 0.24)} students`],
    ["Stage 3: summarize", `A pilot of 12 students gave hours ${vx.join(", ")} and wellbeing scores ${vy.join(", ")}. Summarize the scores.`,
      [S`Mean \(${r2(mean(vy))}\), median \(${md}\), \(s\approx${r2(sdS(vy))}\).`, S`Five-number summary: ${Math.min(...vy)}, ${q1}, ${md}, ${q3}, ${Math.max(...vy)}; roughly symmetric, no outliers.`],
      `median ${md}, s ≈ ${r2(sdS(vy))}`,
      fig(boxPlotSvg([{ data: vy }], { min: 25, max: 45, step: 5, xlabel: "wellbeing score" }))],
    ["Stage 4: analyse the relationship", "Analyse the relationship between hours of volunteering and wellbeing in the pilot.",
      [S`Strong positive linear pattern: \(r\approx${r3(corr(vx, vy))}\), \(r^2\approx${r3(corr(vx, vy) ** 2)}\).`, S`\(\hat y\approx${r3(L.a)}x+${r3(L.b)}\): about ${r2(L.a)} points higher per extra weekly hour.`, S`The residual plot shows no pattern.`],
      `ŷ ≈ ${r3(L.a)}x + ${r3(L.b)}`,
      fig(scatterSvg(vx.map((x, i) => [x, vy[i]]), { xmin: -1, xmax: 10, ymin: 20, ymax: 45, line: L, xlabel: "hours volunteered per week", ylabel: "wellbeing score" }))],
    ["Stage 5: conclusion and limitations", `In the full survey of ${Math.ceil((1.96 / 0.08) ** 2 * 0.24)} students, 88 volunteered at least 2 hours a week. Write the conclusion.`,
      (() => { const n = Math.ceil((1.96 / 0.08) ** 2 * 0.24), p = 88 / n; return [S`\(\hat p=\frac{88}{${n}}\approx${r3(p)}\), \(E\approx${r3(moe(p, n))}\): about ${Math.round((p - moe(p, n)) * 100)}% to ${Math.round((p + moe(p, n)) * 100)}% of grade 12 students volunteer at least 2 hours a week.`, S`In the pilot, more volunteering was strongly associated with higher wellbeing (\(r\approx${r3(corr(vx, vy))}\)).`, S`Limitations: observational (happier students may volunteer more), self-reported hours, one school, small pilot.`]; })(),
      "estimate + association + limitations"],
  ]),

  practice([
    q("n", "How many people are needed for ±6 percentage points (95%) with no prior estimate?", num(Math.ceil((1.96 / 0.06) ** 2 * 0.25)), "(1.96/0.06)² × 0.25, round up.", [S`\(266.8\Rightarrow267\).`], `${Math.ceil((1.96 / 0.06) ** 2 * 0.25)}`),
    q("pred", `Using ŷ ≈ ${r3(L.a)}x + ${r3(L.b)}, predict the wellbeing score for 7 hours of volunteering (1 decimal).`, num(Math.round((L.a * 7 + L.b) * 10) / 10, 0.1), "Substitute.", [S`\(\approx${r2(L.a * 7 + L.b)}\).`], `${Math.round((L.a * 7 + L.b) * 10) / 10}`),
    q("design", "Why can't the volunteering study conclude that volunteering causes higher wellbeing?", choice(["it is observational: happier students may choose to volunteer", "the sample is random", "r is positive", "the scores are out of 50"], 0), "Design.", ["Reverse cause or confounding."], "observational"),
    q("clean", "A wellbeing score was entered as 340 on a scale out of 50. The best action is…", choice(["check the original form and correct or remove it", "keep it as an outlier", "replace it with 0", "multiply all scores by 10"], 0), "Impossible value.", ["Entry error."], "check and correct"),
    q("report", "Which belongs in the method section?", choice(["how the 12 students were chosen", "the regression equation", "the final answer to the question", "suggestions for next year"], 0), "How it was done.", ["Sampling procedure."], "how students were chosen"),
  ]),

  ...hard([
    ["Critiquing the investigation", "List two strengths and three weaknesses of the volunteering investigation, and suggest one improvement for each weakness.",
      [S`Strengths: a specific question with measurable variables; random sampling and consent; full reporting of summaries and uncertainty.`, S`Weaknesses → fixes: self-reported hours → use volunteer-agency records; one school → sample several schools; observational → follow the same students over time (longitudinal) or compare before and after starting to volunteer.`],
      "balanced critique with fixes"],
    ["Checking the model", "Residuals of the pilot regression are shown. Calculate the residual for the student who volunteered 8 hours with a score of 39, and decide whether a linear model is appropriate.",
      [S`\(\hat y\approx${r3(L.a)}(8)+${r3(L.b)}\approx${r2(L.a * 8 + L.b)}\).`, S`Residual \(39-${r2(L.a * 8 + L.b)}\approx${r2(39 - (L.a * 8 + L.b))}\).`, S`The residual plot shows random scatter: a linear model is appropriate for 0–9 hours.`],
      `residual ≈ ${r2(39 - (L.a * 8 + L.b))}`,
      fig(residualPlotSvg(vx.map((x, i) => [x, vy[i]]), L, { xmin: -1, xmax: 10, xlabel: "hours volunteered" }))],
  ], [
    q("hard", "A study needs 300 completed surveys; the expected response rate is 75% and 5% of returned surveys are usually unusable. How many surveys should be sent (round up)?", num(Math.ceil(300 / (0.75 * 0.95))), "300 ÷ (0.75 × 0.95).", [S`\(\approx421.05\Rightarrow422\).`], `${Math.ceil(300 / (0.75 * 0.95))}`),
    q("hard", "In a sample of 180, p̂ = 0.4. Find the width of the 95% confidence interval (3 decimals).", num(r3(2 * moe(0.4, 180)), 0.003), "2E.", [S`\(2(1.96)\sqrt{\frac{0.24}{180}}\).`], `${r3(2 * moe(0.4, 180))}`),
    q("hard", "Which change would most improve the volunteering study's ability to show cause and effect?", choice(["randomly assign some students to a volunteering program and compare wellbeing changes", "survey more students", "use a better graph", "report more decimals"], 0), "Experiment.", ["Random assignment."], "randomized program"),
  ]),

  wrapUp({
    qas: [
      ["What are the stages of an investigation?", "Question, design, collect, analyse, communicate."],
      ["How large should my sample be?", "n = (1.96/E)² p̂q̂, plus extra for non-response."],
      ["What should my analysis include?", "Summaries and displays, a model with r² and residuals, and a confidence interval where appropriate."],
      ["What makes my conclusion trustworthy?", "It matches the design and states uncertainty and limitations."],
      ["How should I evaluate my own study?", "With the same checklist you use for others."],
    ],
    summary: [
      "Design: question, variables, hypothesis, sampling plan, sample size.",
      "Collect and clean, recording every change.",
      "Analyse with the right tools; check models.",
      "Conclude in context with uncertainty and limitations.",
    ],
    next: "You are ready to carry out your own culminating investigation.",
  }),
];

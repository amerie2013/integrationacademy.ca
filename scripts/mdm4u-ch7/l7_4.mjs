// MDM4U 7.4 — Communicating Conclusions: the structure of a statistical report, writing conclusions in context with
// numbers and uncertainty, stating limitations, choosing honest displays, and presenting and defending the findings
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, barsSvg, boxTreeSvg, intervalsSvg } from "./lib.mjs";

export const TITLE = "7.4 Communicating Conclusions";
export const ID = "341010cc-fc1a-4961-86e6-3f4202efb3f6";
const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const moe = (p, n) => 1.96 * Math.sqrt((p * (1 - p)) / n);

export const blocks = () => [
  intro({
    icon: "🗣️",
    title: "Communicating Conclusions",
    overview: S`An investigation is finished only when its findings are communicated clearly and honestly. A good report follows a standard structure, answers the original question in <strong>context</strong> and with <strong>numbers</strong>, states the <strong>uncertainty</strong> (such as a margin of error), discusses <strong>limitations</strong> openly, and uses displays that inform rather than mislead. The conclusion must never claim more than the design allows — in particular, no causal claims from observational data.`,
    goals: [
      "organize a statistical report: introduction, method, results, conclusion, limitations;",
      "write conclusions in context, with numbers and uncertainty;",
      "identify and state limitations and possible bias;",
      "choose displays that are clear and not misleading;",
      "present and defend findings, anticipating questions.",
    ],
    curriculum: "E2.1–E2.3 (interpreting results, communicating findings, evaluating the study and responding to critiques)",
    prior: [
      ["What does a 95% confidence interval mean?", "95% of intervals made this way capture the true value."],
      ["Can an observational study show cause?", "No — only association."],
      ["0.42 ± 0.06 as percents?", "36% to 48%."],
    ],
    words: [
      ["Conclusion in context", "an answer that names the population, variables and numbers", "about 42% of our school's students…"],
      ["Limitation", "a weakness that restricts how far results apply", "a sample from one school only"],
      ["Overstatement", "a claim stronger than the evidence supports", "“screens cause poor sleep”"],
      ["Executive summary", "a short statement of the question and main findings", "two or three sentences at the top"],
    ],
  }),

  section("📌 The structure of a report", S`
  ${fig(boxTreeSvg([{ t: "introduction: question, why it matters, hypothesis", color: "blue" }, { t: "method: population, sample, data collection", color: "violet" }, { t: "results: summaries, displays, models", color: "green" }, { t: "conclusion: answer in context", color: "amber" }, { t: "limitations and next steps", color: "red" }], { root: "report", dy: 40 }), "five parts of a statistical report")}
  ${keyIdea(S`A strong conclusion has four parts: the <strong>answer</strong> to the question, the <strong>evidence</strong> (key numbers), the <strong>uncertainty</strong> (margin of error or variability), and the <strong>scope</strong> (which population, and whether cause can be claimed).`)}`),

  section("📌 Honest displays", S`
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:8px;">
  ${fig(barsSvg([4, 1], { labels: ["school A", "school B"], top: ["64%", "61%"], fmt: (v) => String(Math.round(v + 60)) + "%", ymax: 5 }), "misleading: axis starts at 60%")}
  ${fig(barsSvg([64, 61], { labels: ["school A", "school B"], top: true, ymax: 80 }), "honest: axis starts at 0")}
  </div>
  ${table(["Do", "Avoid"], [["start bar-graph axes at 0", "truncated axes that exaggerate differences"], ["label axes, units and sample size", "unlabelled or unexplained graphs"], ["show variability (box plots, error bars)", "a single number with no spread"], ["use percents for groups of different size", "raw counts"]])}`),

  section("📌 Explore", S`<p>Decide whether each claim is justified by the evidence or goes too far.</p>`),

  widget("conclusionCheck", {}),

  section("📌 Watch out", watchOut([
    "Answer the question you actually asked.",
    "Name the population the results apply to.",
    "Report uncertainty: a margin of error or a measure of spread.",
    "Say “is associated with”, not “causes”, unless you ran a randomized experiment.",
  ])),

  examples([
    ["Writing a conclusion", "A random sample of 250 students: 105 sleep less than 7 hours on school nights. Write a conclusion in context.",
      [S`\(\hat p=0.42\), \(E\approx${r3(moe(0.42, 250))}\).`, S`“We estimate that between about ${Math.round((0.42 - moe(0.42, 250)) * 100)}% and ${Math.round((0.42 + moe(0.42, 250)) * 100)}% of students at our school sleep less than 7 hours on school nights (95% confidence).”`],
      "answer + number + uncertainty + population",
      fig(intervalsSvg([[0.42 - moe(0.42, 250), 0.42 + moe(0.42, 250)]], { min: 0.3, max: 0.55, ticks: [0.3, 0.35, 0.4, 0.45, 0.5, 0.55] }))],
    ["Fixing an overstatement", "A report says: “Our study of 40 students proves that more screen time causes less sleep (r = −0.86).” Rewrite it.",
      [S`The study was observational with 40 students from one school.`, S`“Among the 40 students surveyed, more screen time was strongly associated with less sleep (\(r=-0.86\)). Because this was an observational study, we cannot conclude that screen time causes less sleep.”`],
      "association, scope and design stated"],
    ["Stating limitations", "List three limitations of a study that surveyed 60 volunteers in one gym about exercise and happiness.",
      [S`Voluntary, non-random sample from one gym (not representative).`, S`Self-reported happiness (response bias).`, S`Small sample; observational design (no causation).`],
      "sample, measurement, design"],
    ["Choosing a display", "You found the median commute times of four transportation groups and their spreads. Which display best supports your conclusion?",
      [S`The variable is numerical, split into groups.`, S`Side-by-side box plots show medians, spreads and outliers for all four groups at once.`],
      "side-by-side box plots"],
    ["Defending a result", "A classmate asks: “Your poll had only 250 students — how can it describe the school of 1600?” Respond.",
      [S`The sample was chosen randomly, so it is representative within random error.`, S`The margin of error (about ±6 percentage points) describes how far the estimate is likely to be from the true value; a larger sample would narrow it.`],
      "random selection + margin of error"],
  ]),

  practice([
    q("moe", "A poll of 600 gives p̂ = 0.55. Find the 95% margin of error (3 decimals).", num(r3(moe(0.55, 600)), 0.002), "1.96√(p̂q̂/n).", [S`\(\approx0.040\).`], `${r3(moe(0.55, 600))}`),
    q("claim", "Which statement fits an observational study with r = 0.7?", choice(["the variables are strongly associated", "x causes y", "y causes x", "the result applies to everyone"], 0), "Association only.", ["No causation."], "strongly associated"),
    q("part", "In which section of a report do you describe how the sample was chosen?", choice(["method", "results", "conclusion", "title"], 0), "How it was done.", ["Method."], "method"),
    q("axis", "A bar graph's axis starts at 90 to compare 92% and 95%. The 95% bar looks how many times as tall as the 92% bar?", num(2.5, 0.001), "(95 − 90)/(92 − 90).", [S`\(\frac52\).`], "2.5"),
    q("limit", "Which is a limitation rather than a result?", choice(["the sample came from one school only", "the median was 7 hours", "r = −0.62", "42% answered yes"], 0), "A weakness.", ["Scope of the sample."], "one school only"),
  ]),

  ...hard([
    ["A complete conclusion", "A stratified random sample of 400 grade 12 students found that 172 plan to take a gap year, and that students with part-time jobs (n = 160) planned gap years more often (52%) than others (36%). Write a conclusion with uncertainty, a comparison, and a statement about cause.",
      [S`Overall \(\hat p=0.43\), \(E\approx${r3(moe(0.43, 400))}\): about ${Math.round((0.43 - moe(0.43, 400)) * 100)}% to ${Math.round((0.43 + moe(0.43, 400)) * 100)}% of grade 12 students plan a gap year (95% confidence).`, S`Students with jobs: 52% vs 36% without — an association between working and gap-year plans.`, S`This is a survey, so we cannot say that having a job causes gap-year plans (income or career interests could explain both).`],
      "estimate with margin, comparison, no causal claim"],
    ["Responding to a critique", "A reviewer says your regression of marks on study hours (r² = 0.31) is “useless”. Respond fairly.",
      [S`\(r^2=0.31\) means study hours explain about 31% of the variation in marks — a real but partial relationship.`, S`Other factors (prior knowledge, sleep, course difficulty) explain the rest; the model should not be used for precise individual predictions.`, S`It is still useful for describing the trend; suggest adding variables or a larger sample next time.`],
      "partial but real relationship",
      fig(barsSvg([31, 69], { labels: ["explained", "unexplained"], top: true, ylabel: "% of variation" }))],
  ], [
    q("hard", "To halve a margin of error of ±6 percentage points, a sample of 250 must grow to…", num(1000), "×4.", [S`\(250\times4\).`], "1000"),
    q("hard", "A poll reports 48% ± 3.5% (95%). What sample size does this imply (nearest whole number)?", num(Math.round((1.96 / 0.035) ** 2 * 0.48 * 0.52)), "n = (1.96/E)² p̂q̂.", [S`\(\approx783\).`], `${Math.round((1.96 / 0.035) ** 2 * 0.48 * 0.52)}`),
    q("hard", "Which revision best fixes “Our survey proves most Canadians support the plan (52%, n = 200 classmates)”?", choice(["“52% of the 200 classmates we surveyed support the plan; this convenience sample cannot represent all Canadians.”", "“Most Canadians support the plan.”", "“52% proves majority support.”", "“The plan is popular everywhere.”"], 0), "Scope and sample.", ["Name the sample; limit the claim."], "the first"),
  ]),

  wrapUp({
    qas: [
      ["What are the parts of a statistical report?", "Introduction, method, results, conclusion, limitations."],
      ["What makes a conclusion strong?", "An answer in context with numbers, uncertainty and scope."],
      ["How do I avoid overstating?", "Match the claim to the design: association unless randomized."],
      ["What makes a graph honest?", "Axes from 0 for bars, labels, units and sample sizes."],
      ["How do I defend a result?", "Explain the design, the uncertainty and the limits."],
    ],
    summary: [
      "Report: introduction, method, results, conclusion, limitations.",
      "Conclusion = answer + evidence + uncertainty + scope.",
      "Honest displays; state limitations openly.",
      "No causal claims without an experiment.",
    ],
    next: "7.5 turns the same standards on other people's studies.",
  }),
];

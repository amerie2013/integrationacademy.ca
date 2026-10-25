// MDM4U 7.1 — Designing the Study: the statistical process, a researchable question and hypothesis, variables and
// population, choosing a design (survey, observational study, experiment, secondary data), a sampling plan, the
// sample size needed for a margin of error, and a timeline with ethical safeguards
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, boxTreeSvg, barsSvg, tableSvg, popGridSvg } from "./lib.mjs";

export const TITLE = "7.1 Designing the Study";
export const ID = "434b85a2-0ad5-45e3-b5ce-c17d6b10f4b7";
const S = String.raw;
const nFor = (E, p = 0.5, z = 1.96) => Math.ceil((z / E) ** 2 * p * (1 - p));

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Designing the Study",
    overview: S`The culminating investigation asks you to carry out a complete statistical study on a question of your own. Every later step depends on the design: a sharp <strong>research question</strong>, a clear <strong>population</strong> and <strong>variables</strong>, a testable <strong>hypothesis</strong>, an appropriate <strong>type of study</strong>, a <strong>sampling plan</strong> large enough for the precision you need, and a plan that is <strong>ethical</strong> and finishes on time.`,
    goals: [
      "describe the stages of a statistical investigation;",
      "turn a broad interest into a specific, measurable research question;",
      "state a hypothesis and identify the population and variables;",
      "choose a suitable design and sampling technique;",
      "calculate the sample size needed for a given margin of error, and plan for ethics and time.",
    ],
    curriculum: "E1.1–E1.3 (posing a significant problem, designing a plan, choosing data and sampling); C2 connections (sampling and bias)",
    prior: [
      ["Name four random sampling techniques.", "Simple random, systematic, stratified, cluster (also multistage)."],
      ["What is a confounding variable?", "A variable related to both x and y that can explain the association."],
      ["(1.96/0.05)² × 0.25 ≈ ?", "384.2."],
    ],
    words: [
      ["Research question", "a specific, answerable question about a population", "Is part-time work related to marks for grade 12 students?"],
      ["Hypothesis", "a testable prediction", "students who work more hours have lower marks"],
      ["Sampling plan", "who is sampled, how, and how many", "stratified random sample of 200 by grade"],
      ["Margin of error", "the ± precision of an estimate", "± 5 percentage points at 95% confidence"],
    ],
  }),

  section("📌 The statistical process", S`
  ${fig(boxTreeSvg([{ t: "1. pose a question", color: "blue" }, { t: "2. design the study", color: "violet" }, { t: "3. collect data", color: "green" }, { t: "4. analyse", color: "amber" }, { t: "5. communicate", color: "red" }], { root: "investigation", dy: 40 }), "each stage feeds the next; a weak question cannot be rescued by later work")}
  ${table(["Design choice", "Use it when"], [["survey (sample)", "you want to describe opinions or characteristics of a population"], ["observational study", "you want to look for relationships among existing variables"], ["experiment", "you want to test whether one variable causes a change in another and can assign treatments ethically"], ["secondary data", "a reliable source (a national statistics agency, a public database) already holds the data"]])}`),

  section("📌 How big a sample?", S`
  <p>To estimate a proportion within a margin of error \(E\) at 95% confidence, use \(n=\left(\frac{1.96}{E}\right)^2\hat p(1-\hat p)\), rounding up. With no prior estimate use \(\hat p=0.5\), which gives the largest \(n\).</p>
  ${fig(barsSvg([nFor(0.1), nFor(0.07), nFor(0.05), nFor(0.04), nFor(0.03)], { labels: ["±10%", "±7%", "±5%", "±4%", "±3%"], top: true, ylabel: "sample size n", xlabel: "margin of error (95%)" }), "halving the margin of error needs about four times the sample")}
  ${keyIdea(S`A sampling plan answers three questions: <strong>who</strong> (the population and sampling frame), <strong>how</strong> (a random technique), and <strong>how many</strong> (enough for the precision needed, allowing for non-response).`)}`),

  section("📌 Explore", S`<p>Judge each question against the checklist. Then improve the weak ones.</p>`),

  widget("questionLab", {}),

  section("📌 Watch out", watchOut([
    "A question about “people” or “students” is too vague: say which ones.",
    "Define how each variable will be measured (units, categories, scale).",
    "Plan for non-response: contact more people than the sample size you need.",
    "Get consent and keep responses anonymous; avoid harmful treatments.",
  ])),

  examples([
    ["Sharpening a question", "Improve the question “Do phones affect students?”",
      [S`Name the population: grade 11 and 12 students at one school.`, S`Name measurable variables: daily screen time (hours, from the phone's own report) and hours of sleep on school nights.`, S`Improved: “Is daily screen time related to school-night sleep for grade 11 and 12 students at our school?”`],
      "a specific population and two measurable variables"],
    ["Hypothesis and variables", "For the improved question, state a hypothesis and the explanatory and response variables.",
      [S`Explanatory: daily screen time; response: hours of sleep.`, S`Hypothesis: students with more screen time sleep less (a negative correlation).`],
      "x = screen time, y = sleep; predicted negative correlation"],
    ["Choosing a design", "Should the screen-time study be a survey, an observational study or an experiment?",
      [S`Assigning students to use their phones more would be impractical and possibly harmful.`, S`Record existing screen time and sleep: an observational study (using a survey to collect the data).`, S`Conclusions will be about association, not cause.`],
      "observational study via survey"],
    ["Sample size", "How many students are needed to estimate the proportion who sleep less than 8 hours within ±5 percentage points at 95% confidence?",
      [S`No prior estimate: \(\hat p=0.5\).`, S`\(n=\left(\frac{1.96}{0.05}\right)^2(0.25)=384.16\).`],
      `${nFor(0.05)} students (round up)`],
    ["A sampling plan", "The school has 380 grade 11 and 420 grade 12 students. Plan a proportional stratified sample of 160, and say how many to contact if 80% are expected to respond.",
      [S`Fraction \(\frac{160}{800}=0.2\): 76 grade 11 and 84 grade 12 students, chosen at random within each grade.`, S`Contact \(\frac{160}{0.8}=200\): 95 grade 11 and 105 grade 12 students.`],
      "sample 76 + 84; contact 95 + 105",
      fig(tableSvg([["grade", "students", "sample (20%)", "contact (÷ 0.8)"], ["11", "380", "76", "95"], ["12", "420", "84", "105"], ["total", "800", "160", "200"]]))],
  ]),

  practice([
    q("n", "How many people are needed for a margin of error of ±4 percentage points at 95% confidence, with no prior estimate?", num(nFor(0.04)), "(1.96/0.04)² × 0.25, round up.", [S`\(600.25\Rightarrow601\).`], `${nFor(0.04)}`),
    q("contact", "A study needs 150 responses and expects a 60% response rate. How many people should be contacted?", num(250), "150 ÷ 0.6.", [S`250.`], "250"),
    q("design", "To test whether a new reading app improves reading speed, the best design is…", choice(["a randomized experiment", "a survey of app users", "secondary data", "a census"], 0), "Cause and effect.", ["Random assignment of the app."], "a randomized experiment"),
    q("question", "Which research question is best?", choice(["Is there a relationship between hours of practice and free-throw percentage for players in our basketball league?", "Do sports matter?", "Is basketball good?", "What do people think about sports?"], 0), "Specific and measurable.", ["Named population and variables."], "the first"),
    q("strat", "A population has 600 adults and 400 teens. How many teens are in a proportional stratified sample of 75?", num(30), "75 × 400/1000.", [S`30.`], "30"),
  ]),

  ...hard([
    ["Planning for precision and response", "A student wants to estimate the proportion of local households that compost, within ±3 percentage points at 95% confidence. A pilot survey suggests about 30% compost. The expected response rate is 45%. (a) Find the sample size. (b) How many households must be contacted? (c) Suggest one way to raise the response rate.",
      [S`(a) \(n=\left(\frac{1.96}{0.03}\right)^2(0.3)(0.7)\approx${((1.96 / 0.03) ** 2 * 0.21).toFixed(1)}\), so ${nFor(0.03, 0.3)}.`, S`(b) \(\frac{${nFor(0.03, 0.3)}}{0.45}\approx${(nFor(0.03, 0.3) / 0.45).toFixed(1)}\), so ${Math.ceil(nFor(0.03, 0.3) / 0.45)} households.`, S`(c) Short questionnaire, reminders, and an assurance of confidentiality.`],
      `${nFor(0.03, 0.3)} responses; contact ${Math.ceil(nFor(0.03, 0.3) / 0.45)}`],
    ["Designing an experiment", "Design a study to test whether listening to music while studying affects the number of vocabulary words remembered. Include the population, treatments, assignment, control of other variables, the response and ethics.",
      [S`Population: volunteer grade 12 students at one school (results apply to similar students).`, S`Treatments: study a list of 30 words for 10 minutes with music or in silence; assign volunteers at random (e.g. 40 to each).`, S`Same list, time, room and test; the person scoring the tests does not know the groups.`, S`Response: number of words recalled after 20 minutes. Ethics: consent, no risk, anonymous results, right to withdraw.`],
      "a randomized, controlled, blinded experiment",
      fig(boxTreeSvg([{ t: "music", color: "red", c: [{ t: "words recalled", color: "green" }] }, { t: "silence", color: "blue", c: [{ t: "words recalled", color: "green" }] }], { root: "80 volunteers, random" }))],
  ], [
    q("hard", "Find the sample size for a ±2 percentage-point margin at 95% confidence if a prior estimate is p̂ = 0.15.", num(nFor(0.02, 0.15)), "(1.96/0.02)²(0.15)(0.85), round up.", [S`\(1224.51\Rightarrow1225\).`], `${nFor(0.02, 0.15)}`),
    q("hard", "By what factor must the sample size grow to cut the margin of error from ±6 to ±2 percentage points?", num(9), "E ∝ 1/√n.", [S`\(3^2\).`], "9"),
    q("hard", "A study of whether a new bus route reduces commute times compares riders' times before and after the change. The main weakness is…", choice(["other changes over time (weather, traffic) could explain the difference", "the sample is random", "commute times are numerical", "it uses primary data"], 0), "No control group.", ["Time-related confounding."], "other changes over time"),
  ]),

  wrapUp({
    qas: [
      ["What makes a research question good?", "It is specific, measurable, feasible and ethical."],
      ["What is a hypothesis?", "A testable prediction about the variables."],
      ["How do I choose a design?", "Survey or observational study to describe or relate; experiment to test cause; secondary data when reliable data exist."],
      ["How do I choose a sample size?", "n = (1.96/E)² p̂(1 − p̂), rounded up, then allow for non-response."],
      ["Why plan ethics first?", "Participants' consent, safety and privacy come before the data."],
    ],
    summary: [
      "Process: question → design → collect → analyse → communicate.",
      "Define the population, variables and hypothesis.",
      "Choose a design and a random sampling plan.",
      "n = (1.96/E)² p̂q̂; contact n ÷ response rate.",
    ],
    next: "7.2 collects, organizes and cleans the data.",
  }),
];

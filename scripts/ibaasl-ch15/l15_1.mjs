// IB AA SL 15.1 — The Assessment Criteria and Choosing a Topic: what the exploration is, the five criteria and their marks, turning an interest into a focused research question, judging feasibility
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, probDoc, planeDoc, binom } from "./figs15.mjs";

export const TITLE = "15.1 The Assessment Criteria and Choosing a Topic";
export const ID = "d043baf8-d9f8-4d7e-8f2e-7d5dbbef9855";
const S = String.raw;
const P = (x, y, label, color = "violet") => ({ x, y, label, color });
const crit = ["A", "B", "C", "D", "E"], max = [4, 4, 3, 3, 6];
const shots = [4, 5, 6, 7, 8, 9, 10], obs = [1, 2, 4, 8, 11, 6, 2].map((v) => v / 34);

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "The Assessment Criteria and Choosing a Topic",
    overview: S`The mathematical exploration is a 12–20 page piece of your own mathematical writing, worth 20% of the final SL grade. Nobody hands you the question: you choose it, investigate it with mathematics, and explain what you found. It is marked out of 20 against five criteria. Knowing exactly what each criterion rewards — and choosing a topic that lets you earn those marks — is the most valuable work you will do before writing a single page.`,
    goals: [
      "describe the purpose, length and weighting of the exploration;",
      "state the five criteria and their maximum marks;",
      "explain what earns high marks in each criterion;",
      "turn a broad interest into a focused research question;",
      "judge whether a topic is feasible and mathematically rich enough.",
    ],
    curriculum: "Internal assessment: the mathematical exploration (criteria A–E; 20% of the SL assessment)",
    prior: [
      [S`What fraction of 20 is 6?`, S`\(\frac{3}{10}=30\%\).`],
      ["Name one topic from this course you enjoyed.", "Answers vary — e.g. probability, calculus, trigonometry."],
      ["What is the difference between a report and an investigation?", "A report describes known facts; an investigation answers a question with your own work."],
    ],
    words: [
      ["Exploration", "an independent mathematical investigation of a question you choose", ""],
      ["Criterion", "one of the five areas the work is marked on (A–E)", ""],
      ["Research question", "the specific question the exploration answers", ""],
      ["Personal engagement", "evidence the work is genuinely yours (criterion C)", ""],
      ["Commensurate", "at a level appropriate to the SL course (criterion E)", ""],
    ],
  }),

  section("📌 The five criteria", S`
  <p>The exploration is marked out of 20. Criterion E, use of mathematics, is the largest single criterion, but A–D together are worth 14 marks: a correct calculation that is badly explained still loses most of the marks.</p>
  ${fig(probDoc(crit, max, { xlab: "criterion", ylab: "max marks" }), "Maximum marks: A 4, B 4, C 3, D 3, E 6 (total 20)")}
  ${table(["Criterion", "Marks", "Rewards"], [
    ["A Presentation", "4", "a coherent, well-organised, concise piece a reader can follow"],
    ["B Mathematical communication", "4", "correct notation, defined terms, appropriate graphs and tables"],
    ["C Personal engagement", "3", "your own questions, data, choices and independent thinking"],
    ["D Reflection", "3", "critical thinking about results, methods, limitations and extensions"],
    ["E Use of mathematics", "6", "relevant, correct mathematics at SL level, showing understanding"],
  ])}
  ${fig(probDoc(crit, max.map((m) => (100 * m) / 20), { xlab: "criterion", ylab: "% of the mark" }), "Share of the total: E is 30%, A–D together 70%")}
  ${keyIdea("Every mark comes from one of five criteria. Plan the exploration so that each criterion has a place to earn its marks.")}`),

  section("📌 Choosing a topic", S`
  <p>Start from something you care about, then narrow it until the question names the mathematics you will use. "Basketball" is an interest; "free throws and probability" is a theme; "Does one player's free-throw success over a season fit a binomial model?" is a research question.</p>
  ${fig(probDoc(shots, obs, { xlab: "baskets made in 10 attempts", ylab: "observed proportion" }), "A student's own data: baskets made per set of 10 free throws over 34 sets")}
  ${fig(probDoc(shots, shots.map((k) => binom(10, 0.78, k)), { xlab: "baskets made in 10 attempts", ylab: "B(10, 0.78)" }), "The binomial model to compare against — a clear, testable question")}
  ${watchOut([
    "Avoid topics that only retell known mathematics (e.g. the history of π): little personal engagement or use of mathematics.",
    "Avoid topics far beyond SL that you cannot explain with understanding.",
    "Check you can get the data or set up the problem before committing.",
    "A question should be answerable in 12–20 pages.",
  ])}`),

  section("📌 Explore", S`<p>Score the sample explorations against the five criteria, then adjust the sliders to see where marks are easiest to gain.</p>`),

  widget("ibCriteria", { init: [1] }),

  examples([
    ["Level 1 · Weighting", "How many marks is criterion E worth, and what percentage of the exploration mark is that?",
      [S`E has a maximum of 6 out of 20.`, S`\(\frac{6}{20}=30\%\).`],
      "6 marks, 30%"],
    ["Level 1 · Report or exploration?", S`A student proposes "The history of the number π". Explain why this is a weak exploration topic.`,
      ["It retells known facts and other people's mathematics.", "There is no question for the student to answer with their own work, so C and E would score low."],
      "It is a report, not an investigation"],
    ["Level 2 · Narrowing", S`Turn the interest "football" into a research question and name the mathematics it would use.`,
      [S`Theme: penalty kicks. Question: "Is a goalkeeper's chance of saving a penalty independent of the side the kicker chooses, based on my league's data?"`, "Mathematics: conditional probability, independence, expected value."],
      "A focused question naming conditional probability and independence"],
    ["Level 2 · Reading a score", S`A draft scores A 3, B 2, C 2, D 1, E 3. Find the total and the criterion with the most marks still available.`,
      [S`Total \(3+2+2+1+3=11\).`, S`Gaps: A 1, B 2, C 1, D 2, E 3.`],
      "11/20; criterion E (3 marks available)"],
    ["Level 3 · Feasibility", S`Rank these questions for an SL exploration: (i) "Modelling the spread of a rumour in my school with a logistic function", (ii) "Proving Fermat's Last Theorem", (iii) "The maths of art".`,
      ["(i) is focused, uses SL mathematics (exponential/logistic models) and personal data.", "(ii) is far beyond SL — no understanding could be shown. (iii) is too broad."],
      "(i) best; (iii) needs narrowing; (ii) is unsuitable",
      fig(planeDoc({ view: { xmin: 0, xmax: 14, ymin: 0, ymax: 220 }, step: { x: 2, y: 20 }, curves: [{ f: (t) => 200 / (1 + 39 * Math.exp(-0.6 * t)), color: "violet" }], points: [P(1, 8, ""), P(3, 25, ""), P(5, 70, ""), P(7, 135, ""), P(9, 180, ""), P(11, 195, "")], xlabel: "day", ylabel: "students who heard" }), "Sample data for question (i) with a logistic model")],
  ]),

  practice([
    q("Level 1 · total", "What is the maximum mark for the exploration?", num(20),
      "Sum of A–E.", [S`\(4+4+3+3+6\).`], S`\(20\)`),
    q("Level 1 · reflection", "Which criterion rewards discussing the limitations of your results?", choice(["D Reflection", "A Presentation", "C Personal engagement", "E Use of mathematics"], 0),
      "Critical thinking about results.", ["Criterion D."], "D"),
    q("Level 2 · score", S`A draft scores A 3, B 3, C 2, D 2, E 4. Find the total.`, num(14),
      "Add.", [S`\(3+3+2+2+4\).`], S`\(14\)`),
    q("Level 2 · best question", "Which is the best research question?", choice(["How does the angle of launch affect the range of my water rocket, and which quadratic model fits best?", "Maths in sport", "The life of Euler", "Is maths important?"], 0),
      "Specific, measurable, names mathematics.", ["The water rocket question."], "the water rocket question"),
    q("Level 2 · weighting", "What percentage of the final SL grade is the exploration?", num(20),
      "Internal assessment weighting.", ["20 per cent."], S`\(20\)`),
  ]),

  ...hard([
    ["From interest to plan", S`A student loves cycling. Produce a research question, the mathematics needed, the data required and one risk.`,
      [S`Question: "How does gradient affect my cycling speed on local hills, and is the relationship linear or inverse?"`, "Mathematics: regression, comparing linear and power models, residuals.", "Data: own GPS records of 15 climbs. Risk: wind and fatigue add noise — record conditions."],
      "A plan that names question, mathematics, data and risk",
      fig(planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 40 }, step: { x: 2, y: 5 }, curves: [{ f: (g) => 36 / (1 + 0.18 * g), color: "red" }], points: [P(1, 31, ""), P(2, 27, ""), P(3.5, 22, ""), P(5, 19.5, ""), P(6.5, 17, ""), P(8, 15, ""), P(10, 13, "")], xlabel: "gradient (%)", ylabel: "speed (km/h)" }), "Pilot data suggests a curved (not linear) relationship")],
    ["Spotting missing criteria", S`An exploration has correct calculus throughout but no introduction, variables that are never defined and no discussion of results. Which criteria suffer and how could each be fixed?`,
      ["A: no introduction or structure — add an aim and sections.", "B: variables never defined — define every symbol when first used.", "D: no reflection — discuss what the results mean and their limits."],
      "A, B and D; E may still score well"],
  ], [
    q("Level 3 · potential", S`A draft scores A 4, B 3, C 1, D 1, E 5. How many marks are still available in total?`, num(6),
      "20 − 14.", [S`\(20-(4+3+1+1+5)\).`], S`\(6\)`),
    q("Level 3 · two weakest", S`For the draft above, how many marks are available in C and D together?`, num(4),
      "C: 2, D: 2.", [S`\((3-1)+(3-1)\).`], S`\(4\)`),
    q("Level 3 · ratio", "What fraction of the total do criteria C and D carry together?", choice(["3/10", "1/5", "1/2", "3/20"], 0),
      "6 of 20.", [S`\(\frac{6}{20}\).`], S`\(\frac{3}{10}\)`),
  ]),

  wrapUp({
    qas: [
      ["How long is the exploration?", "12–20 pages, written for a peer who knows SL mathematics."],
      ["What are the criteria?", "A Presentation (4), B Mathematical communication (4), C Personal engagement (3), D Reflection (3), E Use of mathematics (6)."],
      ["What makes a good topic?", "A genuine interest narrowed to a specific question that names the mathematics."],
      ["What should I avoid?", "Reports that retell known mathematics, and topics far beyond SL."],
      ["Where are marks easiest to lose?", "Structure, notation and reflection — they are worth 10 marks together."],
    ],
    summary: [
      "20 marks, five criteria, 20% of the grade.",
      "Interest → theme → research question.",
      "The question should name the mathematics.",
      "Check data and feasibility early.",
    ],
    next: "15.2 plans the research and the use of technology.",
  }),
];

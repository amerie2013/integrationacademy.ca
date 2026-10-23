// IB AA SL Worksheet 15.1 — The Assessment Criteria and Choosing a Topic (teacher edition)
import { probT, F, pt } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Total marks", q: "State the maximum mark for each criterion and the total.",
    steps: ["A 4, B 4, C 3, D 3, E 6."], ans: S`total $20$` },
  { title: "Largest criterion", q: "Which criterion carries the most marks, and what percentage of the total is it?",
    steps: [S`E: $\frac{6}{20}$.`], ans: S`E, $30$ per cent` },
  { title: "Weighting", q: "The exploration is 20 per cent of the final grade. How many per cent of the final grade does criterion E represent?",
    steps: [S`$0.3\times20$.`], ans: S`$6$ per cent` },
  { title: "A draft's total", q: "A draft scores A 2, B 3, C 1, D 2, E 4. Find the total and the criteria with the largest gaps.",
    fig: probT(["A", "B", "C", "D", "E"], [2, 3, 1, 2, 4], { xlab: "criterion", ylab: "marks" }, 5.6),
    steps: [S`Total $12$; gaps A 2, B 1, C 2, D 1, E 2.`], ans: S`$12/20$; A, C and E (2 each)` },
  { title: "Is it an exploration?", q: S`"A biography of Pythagoras." Explain why this is not a suitable exploration.`,
    steps: ["It is historical narrative; there is no mathematical question for the student to investigate."], ans: "It is a report, not an investigation" },
  { title: "Narrowing a topic", q: S`Narrow "space" to a research question and name the mathematics.`,
    steps: [S`"How well does Kepler's third law, $T^2\propto a^3$, fit the published data for Jupiter's moons?"`, "Mathematics: power models, logarithms, regression."], ans: "A power-law question using log–log regression" },
  { title: "Feasibility", q: "A student wants to model the stock market to predict tomorrow's prices. Discuss feasibility.",
    steps: ["Data are available, but prices are hard to predict and the mathematics needed (stochastic models) is far beyond SL.", "Narrow to: compare the growth of an index with an exponential model over 20 years."], ans: "Not feasible as stated; narrow it" },
  { title: "Personal engagement", q: "Give two ways a student could show personal engagement in an exploration about running times.",
    steps: ["Collect their own times over several weeks.", "Ask their own follow-up question, e.g. whether rest days change the trend."], ans: "Own data; own follow-up questions" },
  { title: "Reading sample data", q: "A student's pilot data for a free-throw topic are shown. Find the mean number of baskets per set of 10.",
    fig: probT([5, 6, 7, 8, 9, 10], [2, 3, 6, 9, 4, 1], { xlab: "baskets in 10", ylab: "number of sets" }, 5.6),
    steps: [S`$\frac{5(2)+6(3)+7(6)+8(9)+9(4)+10(1)}{25}=\frac{188}{25}$.`], ans: S`$7.52$` },
];

const PROBLEMS = [
  { level: 1, q: "How many marks is criterion C worth?", recap: "Personal engagement.", ans: S`$3$` },
  { level: 1, q: "Which criterion rewards correct notation and terminology?", recap: "Communication.", ans: "B" },
  { level: 1, q: "What is the recommended length of the exploration?", recap: "Pages.", ans: "12–20 pages" },
  { level: 2, q: "A draft scores A 3, B 2, C 2, D 1, E 5. Find the total.", recap: "Add.", ans: S`$13$` },
  { level: 2, q: "For the draft in question 4, how many marks are still available?", recap: "20 − total.", ans: S`$7$` },
  { level: 2, q: S`Narrow "music" to a research question naming the mathematics.`, recap: "Specific.", ans: "e.g. modelling a guitar note with damped sine functions" },
  { level: 2, q: "The bar chart shows a draft's marks. Which criterion should the student improve first, and why?", recap: "Largest gap.", ans: "E — 3 marks available, the most of any criterion",
    fig: probT(["A", "B", "C", "D", "E"], [3, 3, 2, 2, 3], { xlab: "criterion", ylab: "marks" }, 5) },
  { level: 2, q: "Give one reason why proving the Riemann hypothesis is an unsuitable topic.", recap: "Level.", ans: "far beyond SL; no understanding could be shown" },
  { level: 3, space: 4, q: "Rank these questions for an SL exploration and justify: (a) the maths of video games; (b) does the growth of my sunflower fit a logistic model?; (c) a history of calculus.", recap: "Focused, own data, SL maths.", ans: "(b) best; (a) too broad; (c) a report" },
  { level: 3, space: 4, q: "Write a research question about public transport that uses probability, and say what data you would need.", recap: "Question + data.", ans: "e.g. is bus lateness independent of the time of day? Needs own records over several weeks" },
  { level: 3, space: 4, q: "Explain why criteria A–D together are worth more than criterion E, and what this means for planning.", recap: "14 vs 6.", ans: "14 of 20 marks come from presentation, communication, engagement and reflection — plan time for them" },
  { level: 3, space: 4, q: "The graph shows pilot data for a topic on plant growth. Suggest a model to test and one improvement to the data collection.", recap: "Shape of data.", ans: "a logistic or linear model; measure more plants or more often",
    fig: F({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 30 }, points: [pt(1, 3, false), pt(3, 7, false), pt(5, 14, false), pt(7, 20, false), pt(9, 24, false), pt(11, 25.5, false)], step: { x: 1, y: 5 } }, 5) },
  { level: 3, space: 4, q: "A student scores full marks in E but 1 in each of A, B, C and D. What is their total and what does it suggest?", recap: "6 + 4.", ans: S`$10/20$: strong mathematics poorly explained and reflected on` },
];

export const WS = {
  code: "15.1",
  title: "The Assessment Criteria and Choosing a Topic",
  bigideas: S`The exploration is a 12–20 page investigation of your own question, worth 20 per cent of the SL grade and marked out of 20: A presentation (4), B mathematical communication (4), C personal engagement (3), D reflection (3), E use of mathematics (6). Choose a topic you care about and narrow it until the question names the mathematics.`,
  goals: ["Know the five criteria and their marks.", "Recognise strong and weak topics.", "Narrow an interest to a question.", "Judge feasibility."],
  curriculum: "Internal assessment",
  vocab: [["Exploration", "your own mathematical investigation"], ["Criterion", "A–E marking area"], ["Research question", "the specific question answered"]],
  hook: "If you could investigate any question with mathematics, what would it be?",
  concepts: [
    ["1. Five criteria", S`${probT(["A", "B", "C", "D", "E"], [4, 4, 3, 3, 6], { xlab: "criterion", ylab: "max marks" }, 4.6)} E is the largest single criterion.`],
    ["2. Topic choice", "Interest → theme → question."],
    ["3. Feasibility", "Data, level and time."],
  ],
  tips: ["Start from curiosity.", "Name the mathematics.", "Avoid reports.", "Check data early.", "Plan for all five criteria."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

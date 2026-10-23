// IB AA SL Worksheet 15.2 — Planning, Research and Using Technology (teacher edition)
import { probT, F, pt } from "./figT.mjs";

const S = String.raw;
const X = [2, 4, 6, 8, 10], Y = [5.2, 8.9, 13.1, 16.8, 21.0];

const EXAMPLES = [
  { title: "A timeline", q: "An exploration is due in 8 weeks. Allocate weeks to topic, data, mathematics, draft and revision, keeping at least 2 weeks for revision.",
    fig: probT(["topic", "data", "maths", "draft", "revise"], [1, 1, 2, 2, 2], { xlab: "stage", ylab: "weeks" }, 5.6),
    steps: ["1 + 1 + 2 + 2 + 2 = 8."], ans: "e.g. 1, 1, 2, 2, 2 weeks" },
  { title: "Primary or secondary?", q: "Classify: (a) heights you measure; (b) world population figures from the UN; (c) your survey of 50 students.",
    steps: ["Own collection = primary; published = secondary."], ans: "(a) primary, (b) secondary, (c) primary" },
  { title: "Systematic sampling", q: "Choose 40 students from a list of 800 systematically.",
    steps: [S`Interval $\frac{800}{40}=20$; random start 1–20, then every 20th.`], ans: "every 20th from a random start" },
  { title: "Stratified sampling", q: "A school has 300 juniors and 200 seniors. How many of each should be in a stratified sample of 50?",
    steps: [S`$\frac{300}{500}\times50=30$, $\frac{200}{500}\times50=20$.`], ans: "30 juniors, 20 seniors" },
  { title: "Regression with technology", q: S`Pilot data: $x=2,4,6,8,10$, $y=5.2,8.9,13.1,16.8,21.0$. Find the regression line.`,
    fig: F({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 24 }, points: X.map((x, i) => pt(x, Y[i], false)), lines: [{ m: 1.975, b: 1.15, color: "red" }], step: { x: 2, y: 4 } }, 5.6),
    steps: ["GDC linear regression."], ans: S`$y\approx1.975x+1.15$` },
  { title: "Interpreting r", q: S`The pilot gives $r\approx0.9998$. What does this suggest?`,
    steps: ["Very strong positive linear relationship; worth a full study."], ans: "strong linear relationship" },
  { title: "Residual", q: S`For $y\approx1.975x+1.15$, find the residual at $x=6$ ($y=13.1$).`,
    steps: [S`Predicted $1.975(6)+1.15=13.0$; residual $13.1-13.0$.`], ans: S`$0.1$` },
  { title: "Recording sources", q: "What should be recorded for a data set downloaded from a website?",
    steps: ["Author or organisation, title, URL, date accessed."], ans: "author, title, URL, access date" },
  { title: "Choosing technology", q: "Name a suitable tool for (a) fitting an exponential model, (b) drawing a histogram of 300 values.",
    steps: ["(a) GDC or graphing software regression. (b) spreadsheet or statistics software."], ans: "(a) GDC/software; (b) spreadsheet" },
];

const PROBLEMS = [
  { level: 1, q: "A systematic sample of 30 is taken from 450 names. Find the interval.", recap: "450 ÷ 30.", ans: S`$15$` },
  { level: 1, q: "Is a published table of Olympic results primary or secondary data?", recap: "Collected by others.", ans: "secondary" },
  { level: 1, q: "Name one thing a pilot study can reveal.", recap: "Test the method.", ans: "e.g. whether the expected relationship appears" },
  { level: 2, q: "A club has 120 adults and 80 juniors. Find the numbers in a stratified sample of 25.", recap: "Proportional.", ans: "15 adults, 10 juniors" },
  { level: 2, q: "A 10-week plan uses 1 week for topic, 2 for data and 3 for mathematics. How many weeks remain?", recap: "10 − 6.", ans: S`$4$` },
  { level: 2, q: S`A model predicts 64.0 and the observed value is 61.5. Find the residual.`, recap: "observed − predicted.", ans: S`$-2.5$` },
  { level: 2, q: "Explain why a sample of 5 students may not represent a school.", recap: "Size and bias.", ans: "too small; results depend heavily on who is chosen" },
  { level: 2, q: "The residual plot shown comes from a linear model. What does its pattern suggest?", recap: "Curved pattern.", ans: "a curved (non-linear) model would fit better",
    fig: F({ view: { xmin: 0, xmax: 8, ymin: -3, ymax: 3 }, points: [pt(1, 2, false), pt(2, 0.6, false), pt(3, -0.8, false), pt(4, -1.3, false), pt(5, -0.9, false), pt(6, 0.4, false), pt(7, 2.1, false)], lines: [{ m: 0, b: 0, color: "gray" }], step: { x: 1, y: 1 } }, 5) },
  { level: 3, space: 4, q: "A pilot gives times 1.00, 1.41, 1.73, 2.00 s for lengths 1, 2, 3, 4 m. Suggest a model and justify.", recap: "Square roots.", ans: S`$t=\sqrt{L}$: the times are $\sqrt1,\sqrt2,\sqrt3,\sqrt4$` },
  { level: 3, space: 4, q: S`Data grow from 50 to 155 in 6 years. Assuming exponential growth, find the yearly growth factor.`, recap: S`$\left(\frac{155}{50}\right)^{1/6}$.`, ans: S`$\approx1.207$` },
  { level: 3, space: 4, q: "Write a plan (question, data, mathematics, technology, risk) for an exploration about phone battery drain.", recap: "Five parts.", ans: "e.g. does charge fall linearly or exponentially? own readings; regression; GDC; varying usage" },
  { level: 3, space: 4, q: "Two models fit the same data with sums of squared residuals 12.4 and 3.1. Which is better, and what else should be checked?", recap: "SSE and sense.", ans: "the 3.1 model fits better; check it makes sense beyond the data" },
  { level: 3, space: 4, q: "Explain why technology output must always be interpreted in the text.", recap: "Criterion B and E.", ans: "the reader needs to know what was computed and what it means; unexplained output earns little credit" },
];

export const WS = {
  code: "15.2",
  title: "Planning, Research and Using Technology",
  bigideas: S`Plan backwards from the deadline, collect data early, and sample without bias. A pilot study tests the idea before you commit. Technology fits models and does heavy calculation, but you must state what was done and interpret the output. Record every source as you go.`,
  goals: ["Plan a timeline.", "Choose and sample data.", "Use a pilot study.", "Use and interpret technology."],
  curriculum: "Internal assessment",
  vocab: [["Primary data", "collected yourself"], ["Secondary data", "collected by others"], ["Pilot study", "small trial run"], ["Residual", "observed − predicted"]],
  hook: "What if your first guess about the data is wrong — how would you find out early?",
  concepts: [
    ["1. Timeline", S`${probT(["topic", "data", "maths", "draft", "revise"], [1, 2, 3, 2, 2], { xlab: "stage", ylab: "weeks" }, 4.6)} Keep time for revision.`],
    ["2. Data and sampling", "Avoid bias."],
    ["3. Technology", "State and interpret."],
  ],
  tips: ["Data first.", "Random or systematic sampling.", "Pilot before committing.", "Interpret all output.", "Record sources immediately."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

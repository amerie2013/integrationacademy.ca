// MDM4U Worksheet 5.3 — Bias & Principles of Data Collection (teacher edition)
import { svgT, barsSvg, boxTreeSvg, pieSvg } from "./figT.mjs";

const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;

const EXAMPLES = [
  { title: "Sampling bias", q: "To estimate how much residents spend on books, a researcher interviews people leaving a bookstore. Name the bias and its direction.", steps: ["The sample favours book buyers.", "Sampling bias: the estimate is too high."], ans: "sampling bias, overestimate" },
  { title: "Non-response bias", q: "A gym emails a survey to 1200 members; 312 reply. Find the response rate and explain the risk.", steps: [S`$\frac{312}{1200}=0.26$.`, "Members who rarely visit may not reply, so the results describe keen members."], ans: "26 percent; non-response bias" },
  { title: "Response bias", q: "In face-to-face interviews, people are asked whether they always recycle. Why might the results be too high?", steps: ["Social desirability: people give the answer they think is expected."], ans: "response bias (overstated)" },
  { title: "Measurement bias", q: "A study of reaction times uses a phone app whose timer starts 0.05 s late. Describe the effect.", steps: ["Every recorded time is 0.05 s too short.", "Measurement bias: the mean is too small by 0.05 s; the spread is unchanged."], ans: "all times 0.05 s too short" },
  { title: "Leading question", q: "Rewrite: “Wouldn't you agree that our hard-working teachers deserve a raise?”", steps: ["Remove the opinion words and the push to agree."], ans: "Should teachers' salaries be increased? (yes / no / no opinion)" },
  { title: "Double-barrelled question", q: "Fix: “How satisfied are you with the price and quality of the cafeteria food?”", steps: ["Two ideas need two questions."], ans: "rate price; separately rate quality" },
  { title: "Size of a bias", q: "In a town, 30 percent of adults read a newspaper daily. A survey of 200 adults interviews 150 at a library, where 60 percent read daily, and 50 elsewhere at random. What proportion of the sample reads daily?", fig: svgT(pieSvg([["library", 150, "red"], ["elsewhere", 50, "blue"]]), 5.5), steps: [S`$0.6(150)+0.3(50)=90+15=105$.`, S`$\frac{105}{200}=0.525$.`], ans: "0.525, far above 0.30" },
  { title: "Experimental design", q: "Design an experiment to test whether a new study app improves vocabulary scores.", fig: svgT(boxTreeSvg([{ t: "app group", color: "red", c: [{ t: "vocabulary test", color: "green" }] }, { t: "no-app group", color: "blue", c: [{ t: "vocabulary test", color: "green" }] }], { root: "volunteers, randomly assigned" }), 7), steps: ["Randomly assign volunteers to the app or to normal study (control).", "Same time period and same test; enough students (replication); graders do not know the groups (blinding)."], ans: "random assignment, control group, replication, blinding" },
  { title: "Randomized response", q: "Each student rolls a die in secret. On 1 or 2 they answer “yes”; on 3 to 6 they answer truthfully whether they have skipped class. 45 percent of answers are “yes”. Estimate the true proportion p.", steps: [S`$P(\text{yes})=\frac13+\frac23p$.`, S`$\frac13+\frac23p=0.45\Rightarrow p=\frac{0.45-\frac13}{\frac23}=${r3((0.45 - 1 / 3) / (2 / 3))}$.`], ans: `p = ${r3((0.45 - 1 / 3) / (2 / 3))}` },
];

const PROBLEMS = [
  { level: 1, q: "Name the type of bias: a bathroom scale reads 1 kg heavy.", ans: "measurement bias" },
  { level: 1, q: "A survey mailed to 900 people gets 252 replies. Find the response rate as a percent.", ans: "28 percent" },
  { level: 1, q: "Identify the problem: “Do you exercise and eat healthy food?”", ans: "double-barrelled" },
  { level: 2, q: "A phone survey calls numbers from an old directory of landlines. Name the bias and which group is under-represented.", ans: "sampling bias; younger adults and people with only mobile phones" },
  { level: 2, q: "Rewrite this loaded question: “Should the city stop wasting money on bike lanes?”", ans: "Should the city spend money on new bike lanes?" },
  { level: 2, q: "In a study, students who are told they are receiving a memory pill (actually sugar) improve their scores. What is this effect, and how is it controlled?", ans: "placebo effect; use a control group with a placebo and blinding" },
  { level: 2, q: "The bar graph shows the results of the same question asked with neutral wording and with leading wording. By how many percentage points did the wording change the result?", fig: svgT(barsSvg([42, 67], { labels: ["neutral", "leading"], top: ["42", "67"], ylabel: "percent yes", ymax: 80 }), 5), ans: "25 percentage points" },
  { level: 2, q: "Explain the difference between random assignment and random sampling.", ans: "sampling decides who is studied; assignment decides who gets the treatment" },
  { level: 3, space: 4.5, q: "A survey of 800 randomly chosen voters gets 520 replies; 312 of the respondents support a candidate. (a) Find the support among respondents. (b) Find the lowest and highest possible support among all 800. (c) Comment.", ans: "(a) 0.6 (b) 0.39 to 0.74 (c) non-response leaves great uncertainty" },
  { level: 3, space: 4.5, q: "In a randomized-response survey, each person flips a coin: heads, answer truthfully; tails, answer “yes”. Of 600 people, 345 say yes. Estimate p and explain why people are more willing to be honest.", ans: "p = 0.15; no single answer reveals the person's true answer" },
  { level: 3, space: 4.5, q: "A school claims 90 percent of students are satisfied, based on a survey posted on its website that 120 of its 1600 students answered. Identify two sources of bias and describe a better survey.", ans: "voluntary response, non-response; a random (stratified) sample with follow-up and a neutral question" },
  { level: 3, space: 4.5, q: "Design a double-blind experiment to test whether a new energy drink improves reaction time. Explain each design feature.", ans: "random assignment to drink or identical placebo; neither subjects nor testers know; enough subjects; compare mean reaction times" },
  { level: 3, space: 4.5, q: "List three ethical rules for a survey of students about mental health, and explain why each matters.", ans: "informed consent; anonymity/confidentiality; right to withdraw and access to support" },
];

export const WS = {
  code: "5.3",
  title: "Bias & Principles of Data Collection",
  bigideas: S`Bias is a systematic error that pushes results one way. Sampling bias comes from who is chosen, non-response bias from who does not answer, response bias from how people answer (wording, interviewer, sensitive topics), and measurement bias from the tool. A larger sample reduces random variability but not bias. Good experiments use a control group, random assignment, replication and blinding; all studies need consent and confidentiality.`,
  goals: ["Name and explain types of bias.", "Write fair questions.", "Design experiments.", "Apply ethical rules."],
  curriculum: "C1.3, C2.4, C2.5",
  vocab: [["Bias", "systematic error in one direction"], ["Response rate", "replies divided by people asked"], ["Placebo", "a fake treatment"], ["Double-blind", "neither subjects nor testers know the groups"]],
  hook: "A poll says 85 percent of people love a new phone. The poll was on the phone maker's website. Do you trust it?",
  concepts: [
    ["1. Four biases", "Sampling, non-response, response, measurement."],
    ["2. Fair questions", "Neutral, clear, one idea, complete non-overlapping choices."],
    ["3. Experiments", S`${svgT(boxTreeSvg([{ t: "treatment", color: "red" }, { t: "control", color: "blue" }], { root: "random assignment" }), 4.5)}Compare the groups.`],
  ],
  tips: ["Say which way the bias pushes.", "Bigger samples do not fix bias.", "Report the response rate.", "Test questions on a small group first.", "Protect participants' privacy."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

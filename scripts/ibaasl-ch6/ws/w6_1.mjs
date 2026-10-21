// IB AA SL Worksheet 6.1 — Sampling and Data Collection (teacher edition)
import { F } from "./figT.mjs";

const S = String.raw;
const bars = (pairs, color = "violet", w = 0.6) => pairs.map(([x, h]) => ({ pts: [[x - w / 2, 0], [x - w / 2, h], [x + w / 2, h], [x + w / 2, 0]], color }));

const EXAMPLES = [
  { title: "Discrete or continuous", q: "Classify: (a) the number of text messages sent in a day; (b) the length of a leaf; (c) the score on a die.",
    steps: ["(a) counted; (b) measured; (c) counted."], ans: "discrete, continuous, discrete" },
  { title: "Population and sample", q: "A quality controller tests 40 light bulbs from a batch of 2000. Identify the population and the sample, and explain why the whole batch is not tested.",
    steps: ["Population: the 2000 bulbs; sample: the 40 tested.", "Testing destroys the bulb, and testing all would be costly."], ans: "2000 bulbs; 40 bulbs" },
  { title: "Simple random sample", q: "Describe how to choose a simple random sample of 15 from 340 members of a club.",
    steps: ["Number the members 1–340.", "Use a random number generator to choose 15 different numbers."], ans: "number the list; random numbers" },
  { title: "Systematic sample", q: "A systematic sample of 30 is taken from a list of 450. Find the interval and the first three chosen if the start is 4.",
    steps: [S`$k=\frac{450}{30}=15$.`], ans: "4, 19, 34" },
  { title: "Stratified sample", q: "A company has 60 managers, 240 office staff and 300 factory workers. Find the numbers in a stratified sample of 50.",
    fig: F({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 28 }, segs: [...bars([[1, 5]], "blue"), ...bars([[2, 20]], "violet"), ...bars([[3, 25]], "green")], step: { x: 1, y: 4 } }),
    steps: [S`Total 600: $\frac{60}{600}\times50=5$, $\frac{240}{600}\times50=20$, $\frac{300}{600}\times50=25$.`], ans: "5, 20, 25" },
  { title: "Quota sample", q: "An interviewer must survey 20 men and 20 women in a shopping centre. What type of sample is this, and what is its weakness?",
    steps: ["Quota: fixed numbers from each group, chosen by the interviewer.", "Not random: the interviewer may approach only friendly-looking shoppers."], ans: "quota; possible interviewer bias" },
  { title: "Spotting bias", q: "To estimate how much students read, a teacher surveys the school's library club. Explain the bias.",
    steps: ["Library club members probably read more than average."], ans: "over-represents keen readers" },
  { title: "Outliers", q: "In a survey of daily screen time (hours), one response is 27. What should be done with it?",
    steps: ["A day has only 24 hours, so 27 is impossible: a recording error.", "Check the original form; correct it if possible, otherwise remove it."], ans: "error — correct or remove" },
  { title: "Comparing methods", q: "A council wants opinions from residents of four districts of very different sizes. Compare simple random and stratified sampling for this.",
    steps: ["Simple random could under-represent small districts by chance.", "Stratified guarantees each district its fair share."], ans: "stratified is better" },
];

const PROBLEMS = [
  { level: 1, q: "Is the time taken to swim 50 m discrete or continuous?", recap: "Data type.", ans: "continuous" },
  { level: 1, q: "A systematic sample of 20 is taken from 360 names. Find the interval k.", recap: "Interval.", ans: "18" },
  { level: 1, q: "Name the sampling method in which every member has an equal chance of selection and members are chosen by random numbers.", recap: "Method.", ans: "simple random sampling" },
  { level: 2, q: "A school has 280 junior and 420 senior students. Find the numbers in a stratified sample of 50.", recap: "Stratified.", ans: "20 juniors, 30 seniors" },
  { level: 2, q: "Give one advantage and one disadvantage of convenience sampling.", recap: "Evaluate.", ans: "quick and cheap; likely biased" },
  { level: 2, q: "From a list of 800, the 7th, 47th, 87th, … members are chosen. What is the sample size?", recap: "Systematic.", ans: "20" },
  { level: 2, q: "Explain why surveying people at a train station at 8 am about commuting habits is biased.", recap: "Bias.", ans: "over-represents rail commuters" },
  { level: 2, q: "Strata of sizes 150, 250 and 100 are sampled in proportion. The sample contains 10 from the first stratum. Find the total sample size.", recap: "Stratified backwards.", ans: "100/3 ≈ 33" },
  { level: 3, space: 4, q: "A club has 156 adult and 84 junior members. A stratified sample of 40 is chosen. How many juniors, and describe how they are chosen.", recap: "Full method.", ans: "14 juniors, chosen at random from the junior list",
    fig: F({ view: { xmin: 0, xmax: 3, ymin: 0, ymax: 30 }, segs: [...bars([[1, 26]], "blue"), ...bars([[2, 14]], "green")], step: { x: 1, y: 5 } }) },
  { level: 3, space: 4, q: "A survey about a new sports hall is posted online, and 300 people reply. Explain two reasons why the results may not represent the town.", recap: "Self-selection.", ans: "self-selected (strong views); only internet users" },
  { level: 3, space: 4, q: "Explain why a larger sample does not remove bias, with an example.", recap: "Size vs bias.", ans: "e.g. 1000 gym members still over-represent active people" },
  { level: 3, space: 4, q: "A list of houses is ordered so that every 10th house is on a corner. Why is a systematic sample with k = 10 a poor choice?", recap: "Periodic lists.", ans: "it could pick only corner houses" },
  { level: 3, space: 4, q: "A stratified sample of 45 from a school includes 18 Year 11s. The school has 600 students. Estimate the number of Year 11 students.", recap: "Proportion.", ans: "240" },
];

export const WS = {
  code: "6.1",
  title: "Sampling and Data Collection",
  bigideas: S`A sample is studied to learn about a population. Data are discrete (counted) or continuous (measured). Random methods (simple random, systematic, stratified) reduce bias; quota and convenience samples are not random. A stratified sample takes each group in proportion: $\frac{\text{group size}}{\text{population}}\times n$. Investigate outliers: remove errors, keep genuine values.`,
  goals: ["Classify data.", "Describe sampling methods.", "Calculate stratified samples.", "Identify bias and handle outliers."],
  curriculum: "SL 4.1",
  vocab: [["Population", "the whole group"], ["Sample", "the part studied"], ["Bias", "systematic misrepresentation"]],
  hook: "Ask: to find the average height of students in the school, would measuring the basketball team be a good idea? What would be better?",
  concepts: [
    ["1. Data", "Discrete: counted. Continuous: measured."],
    ["2. Methods", S`${F({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 28 }, segs: [...bars([[1, 5]], "blue"), ...bars([[2, 20]], "violet"), ...bars([[3, 25]], "green")], step: { x: 1, y: 4 } }, 5)} Stratified: each group in proportion.`],
    ["3. Reliability", "Bias comes from the method; size reduces random error only."],
  ],
  tips: ["Proportion × n for strata.", "k = N/n for systematic.", "Random needs a full list.", "Name the source of bias.", "Check outliers first."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

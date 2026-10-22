// IB AA SL Worksheet 7.1 — Scatter Diagrams and Correlation (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const pts = (xs, ys, color = "violet") => xs.map((x, i) => ({ x, y: ys[i], color }));

const EXAMPLES = [
  { title: "Variables", q: "A coffee shop records the outdoor temperature and the number of iced drinks sold each day. Identify the explanatory and response variables.",
    steps: ["Temperature may influence sales."], ans: "explanatory: temperature; response: iced drinks sold" },
  { title: "Describing a scatter diagram", q: "Describe the correlation between time spent on a phone and time spent reading, shown below.",
    fig: F({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 9 }, points: pts([1, 1.5, 2, 3, 3.5, 4, 5, 5.5, 6, 7, 8], [7.5, 8, 6.5, 6, 6.5, 5, 4.5, 3.5, 4, 2.5, 2]), step: { x: 1, y: 1 } }),
    steps: ["Points fall from left to right, close to a line."], ans: "strong negative linear correlation" },
  { title: "No correlation", q: "Describe the relationship between a student's birth month and their height.",
    steps: ["There is no reason for a link; a scatter diagram would show a random cloud."], ans: "no correlation" },
  { title: "Mean point", q: "Find the mean point of (3, 8), (5, 11), (6, 13), (9, 16), (12, 22).",
    steps: [S`$\bar x=\frac{35}{5}=7$; $\bar y=\frac{70}{5}=14$.`], ans: S`$(7,14)$` },
  { title: "Plotting the mean point", q: "Plot the data and the mean point from the previous example.",
    fig: F({ view: { xmin: 0, xmax: 14, ymin: 0, ymax: 24 }, points: [...pts([3, 5, 6, 9, 12], [8, 11, 13, 16, 22]), pt(7, 14, null, "amber")], step: { x: 1, y: 2 } }),
    steps: ["The mean point lies in the middle of the trend."], ans: "see figure" },
  { title: "Spotting an outlier", q: "In data on age (years) and reaction time (ms) for adults aged 20–60, one point is (25, 640) while the others range from 250 to 400 ms. Comment.",
    steps: ["640 ms is far above the rest for a young adult: an outlier.", "Check for a recording error or an unusual case."], ans: "outlier — investigate" },
  { title: "Non-linear", q: "The stopping distance of a car rises faster and faster as speed increases. Is linear correlation a good description?",
    steps: ["The pattern is curved, so a straight line does not fit well."], ans: "no — the relationship is non-linear" },
  { title: "Causation", q: "Sales of sunglasses and of ice lollies are strongly positively correlated. Does buying sunglasses make people buy ice lollies?",
    steps: ["No: sunny, hot weather increases both."], ans: "no — weather is a lurking variable" },
  { title: "Missing value", q: "The mean point of (2, 6), (4, a), (9, 15) is (5, 10). Find a.",
    steps: [S`$\frac{21+a}{3}=10$.`], ans: S`$a=9$` },
];

const PROBLEMS = [
  { level: 1, q: "As the age of a computer increases, its resale value decreases. Is the correlation positive or negative?", recap: "Direction.", ans: "negative" },
  { level: 1, q: "Find the mean point of (1, 4), (3, 6), (5, 11).", recap: "Mean point.", ans: S`$(3,7)$` },
  { level: 1, q: "In a study of rainfall and crop yield, which is the response variable?", recap: "Variables.", ans: "crop yield" },
  { level: 2, q: "Describe the correlation shown.", recap: "Describe.", ans: "fairly strong positive linear correlation (r ≈ 0.89)",
    fig: F({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 11 }, points: pts([1, 2, 2.5, 3, 4, 5, 5.5, 6, 7, 8, 9, 10], [2, 4, 2.5, 5, 3.5, 6, 4.5, 7, 5.5, 8.5, 7, 9]), step: { x: 1, y: 1 } }) },
  { level: 2, q: "Plot (2, 18), (4, 15), (5, 14), (7, 10), (9, 8) on the grid and describe the correlation.", recap: "Plot and describe.", ans: "strong negative linear correlation",
    fig: gridT({ xmin: 0, xmax: 10, ymin: 0, ymax: 20 }, { x: 1, y: 2 }) },
  { level: 2, q: "Find the mean point of (2, 7), (4, 8), (6, 12), (8, 13), (10, 15).", recap: "Mean point.", ans: S`$(6,11)$` },
  { level: 2, q: "Give a possible lurking variable for the positive correlation between the number of firefighters at a fire and the damage caused.", recap: "Lurking variable.", ans: "the size of the fire" },
  { level: 2, q: "The mean point of four points is (5, 12). Three points are (2, 8), (4, 10), (6, 13). Find the fourth point.", recap: "Missing point.", ans: S`$(8,17)$` },
  { level: 3, space: 4, q: "Explain why a scatter diagram should always be drawn before calculating a correlation coefficient.", recap: "Check the form.", ans: "to see whether the pattern is linear and to spot outliers" },
  { level: 3, space: 4, q: "In a study, one student's data point lies far from the rest. Give two possible explanations and say how each should be treated.", recap: "Outliers.", ans: "recording error (correct/remove); genuine unusual case (keep, discuss)" },
  { level: 3, space: 4, q: "Describe the relationship shown and explain why 'no correlation' would be a poor description.", recap: "Non-linear.", ans: "a strong curved (U-shaped) relationship; linear correlation near 0",
    fig: F({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 11 }, points: pts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 6.5, 4, 2.5, 1.5, 1.5, 2.5, 4, 6.5, 10]), step: { x: 1, y: 1 } }) },
  { level: 3, space: 4, q: "In a class, shoe size and maths score show a weak positive correlation. A student concludes that bigger feet improve maths. Criticise this.", recap: "Causation.", ans: "weak correlation; no causal mechanism; possibly chance or age" },
  { level: 3, space: 4, q: "Five points have mean point (4, 9). Four are (1, 5), (3, 7), (5, 10), (6, 12). Find the fifth point.", recap: "Missing point.", ans: S`$(5,11)$` },
];

export const WS = {
  code: "7.1",
  title: "Scatter Diagrams and Correlation",
  bigideas: S`A scatter diagram plots paired data, with the explanatory variable on the x-axis. Describe correlation by direction (positive/negative), strength (strong/weak) and form (linear/non-linear), in context. The mean point $(\bar x,\bar y)$ is the centre of the data. Investigate outliers. Correlation does not imply causation: look for lurking variables.`,
  goals: ["Identify variables.", "Describe correlation.", "Find the mean point.", "Discuss outliers and causation."],
  curriculum: "SL 4.4",
  vocab: [["Bivariate data", "paired values"], ["Mean point", S`$(\bar x,\bar y)$`], ["Lurking variable", "a third factor driving both"]],
  hook: "Measure the arm span and height of everyone in the class and plot them. What do you notice?",
  concepts: [
    ["1. Scatter diagrams", S`${F({ view: { xmin: 0, xmax: 14, ymin: 0, ymax: 24 }, points: [...pts([3, 5, 6, 9, 12], [8, 11, 13, 16, 22]), pt(7, 14, null, "amber")], step: { x: 1, y: 2 } }, 5)} Explanatory on x.`],
    ["2. Describing", "Direction + strength + form, in context."],
    ["3. Causation", "Association only; look for a lurking variable."],
  ],
  tips: ["x = explanatory.", "Use context.", "Plot the mean point.", "Check outliers.", "Correlation ≠ cause."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

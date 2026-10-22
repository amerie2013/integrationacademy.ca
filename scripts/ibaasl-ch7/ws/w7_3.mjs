// IB AA SL Worksheet 7.3 — Lines of Best Fit and Regression (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const pts = (xs, ys, color = "violet") => xs.map((x, i) => ({ x, y: ys[i], color }));

const EXAMPLES = [
  { title: "Line through the mean point", q: "Draw a line of best fit by eye for the data below, through the mean point.",
    fig: F({ view: { xmin: 0, xmax: 8, ymin: 45, ymax: 82 }, points: [...pts([1, 2, 3, 4, 5, 6, 7], [52, 57, 61, 64, 70, 73, 78]), pt(4, 65, null, "amber")], lines: [{ m: 4.25, b: 48, color: "red" }], step: { x: 1, y: 5 } }),
    steps: [S`Mean point $(4,65)$; balance the points above and below the line.`], ans: "line through (4, 65)" },
  { title: "Regression from summary statistics", q: S`For the same data, $S_{xy}=119$ and $S_{xx}=28$. Find the regression line of $y$ on $x$.`,
    steps: [S`$b=\frac{119}{28}=4.25$; $a=65-4.25(4)=48$.`], ans: S`$y=48+4.25x$` },
  { title: "Interpreting", q: S`In the previous example $x$ is weeks of training and $y$ is a fitness score. Interpret 4.25 and 48.`,
    steps: ["Each extra week is associated with about 4.25 more points.", "48 is the predicted score with no training (just outside the data)."], ans: "4.25 per week; 48 at week 0" },
  { title: "Interpolation", q: S`Use $y=48+4.25x$ to predict the score after 5.5 weeks.`,
    steps: [S`$48+23.375$.`], ans: "≈ 71.4" },
  { title: "Extrapolation", q: S`Predict the score after 30 weeks and comment.`,
    steps: [S`$48+127.5=175.5$ — far outside the data (1–7 weeks), and possibly beyond the maximum score.`], ans: "175.5 — unreliable" },
  { title: "Negative gradient", q: S`For dosage $x$ (mg) 5, 10, 15, 20, 25, 30 and symptom score $y$ 42, 39, 33, 30, 24, 22, find the regression line with a GDC.`,
    steps: ["Linear regression on the lists."], ans: S`$y\approx46.5-0.846x$` },
  { title: "x on y", q: S`For the dosage data the x-on-y line is $x\approx54.4-1.17y$. Estimate the dosage that gives a score of 28.`,
    steps: [S`$54.4-1.17(28)\approx21.7$ mg.`], ans: "≈ 21.7 mg" },
  { title: "Using the mean point", q: S`A y-on-x line has gradient 1.5 and the mean point is (6, 13). Find its equation.`,
    steps: [S`$a=13-1.5(6)=4$.`], ans: S`$y=4+1.5x$` },
  { title: "Reliability", q: S`A line is fitted to the data shown, which have $r=0.32$. Can it be used for prediction?`,
    fig: F({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 11 }, points: pts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [4, 7, 3, 6, 8, 2, 7, 5, 9, 6]), lines: [{ m: 0.2364, b: 4.4, color: "red" }], step: { x: 1, y: 1 } }),
    steps: ["Weak correlation: points are far from the line, so predictions are unreliable."], ans: "not reliably" },
];

const PROBLEMS = [
  { level: 1, q: S`Using $y=5+2x$, predict $y$ when $x=7$.`, recap: "Predict.", ans: "19" },
  { level: 1, q: S`A regression line $y=a+3x$ passes through the mean point $(4,20)$. Find $a$.`, recap: "Mean point.", ans: "8" },
  { level: 1, q: "Is predicting inside the range of the data called interpolation or extrapolation?", recap: "Vocabulary.", ans: "interpolation" },
  { level: 2, q: S`$S_{xy}=58$, $S_{xx}=40$, $\bar x=6$, $\bar y=13$. Find the y-on-x line.`, recap: "From statistics.", ans: S`$y=4.3+1.45x$` },
  { level: 2, q: S`Using $y=4.3+1.45x$ (data from x = 2 to 10), predict y at x = 7 and x = 25. Comment.`, recap: "Interpolate/extrapolate.", ans: "14.45 (reliable); 40.55 (unreliable)" },
  { level: 2, q: "Use a GDC: x = 3, 6, 9, 12, 15, 18; y = 20, 26, 30, 38, 41, 48. Find the y-on-x line.", recap: "GDC.", ans: S`$y\approx14.5+1.84x$`,
    fig: F({ view: { xmin: 0, xmax: 20, ymin: 10, ymax: 52 }, points: pts([3, 6, 9, 12, 15, 18], [20, 26, 30, 38, 41, 48]), step: { x: 2, y: 5 } }) },
  { level: 2, q: S`Interpret the gradient of $y=14.5+1.84x$ if $x$ is temperature (°C) and $y$ is the number of swimmers.`, recap: "Interpret.", ans: "about 1.84 more swimmers per degree" },
  { level: 2, q: S`The x-on-y line is $x=-7.7+0.54y$. Estimate $x$ when $y=35$.`, recap: "x on y.", ans: "≈ 11.2" },
  { level: 3, space: 4, q: S`For 6 pairs, $\sum x=63$, $\sum y=203$, $\sum xy=2421$, $\sum x^2=819$. Find the y-on-x line.`, recap: "From sums.", ans: S`$S_{xy}=289.5$, $S_{xx}=157.5$: $y\approx14.5+1.84x$` },
  { level: 3, space: 4, q: S`The lines $y=3+0.5x$ (y on x) and $x=-2+1.6y$ (x on y) belong to one data set. Find the mean point.`, recap: "Intersection.", ans: S`$\bar x=-2+1.6(3+0.5\bar x)$: $(14,10)$` },
  { level: 3, space: 4, q: "Explain why the y-on-x line should not be rearranged to predict x from y.", recap: "Which line.", ans: "it minimises vertical, not horizontal, distances" },
  { level: 3, space: 4, q: S`A company's sales $y$ against advertising $x$ give $y=120+8x$ with $r=0.93$ for $x$ from 5 to 20. Discuss using it to predict sales when $x=0$.`, recap: "Intercept.", ans: "x = 0 is extrapolation; 120 is unreliable" },
  { level: 3, space: 4, q: S`A regression line passes through (2, 11) and the mean point (6, 19). Find its equation and predict y when x = 5.`, recap: "Two points.", ans: S`$y=7+2x$; 17` },
];

export const WS = {
  code: "7.3",
  title: "Lines of Best Fit and Regression",
  bigideas: S`A line of best fit passes through the mean point $(\bar x,\bar y)$. The least-squares regression line of $y$ on $x$ is $y=a+bx$ with $b=\frac{S_{xy}}{S_{xx}}$, $a=\bar y-b\bar x$ (or GDC). Interpret $b$ as the change in $y$ per unit of $x$. Predict only by interpolation, and only when $|r|$ is large. Use the line of $x$ on $y$ to predict $x$.`,
  goals: ["Fit lines through the mean point.", "Find regression lines.", "Interpret a and b.", "Predict responsibly."],
  curriculum: "SL 4.4, SL 4.10",
  vocab: [["Regression line", S`$y=a+bx$`], ["Interpolation", "inside the data"], ["Extrapolation", "outside the data"]],
  hook: "Ask: if a plant grows 2 cm a week for 6 weeks, how tall will it be after 5 years? Why is the straight-line answer silly?",
  concepts: [
    ["1. The regression line", S`${F({ view: { xmin: 0, xmax: 8, ymin: 45, ymax: 82 }, points: [...pts([1, 2, 3, 4, 5, 6, 7], [52, 57, 61, 64, 70, 73, 78]), pt(4, 65, null, "amber")], lines: [{ m: 4.25, b: 48, color: "red" }], step: { x: 1, y: 5 } }, 5)} Through $(\bar x,\bar y)$.`],
    ["2. Interpreting", "b: rate of change; a: value at x = 0 (if meaningful)."],
    ["3. Predicting", "Interpolate with strong r; x on y for x."],
  ],
  tips: ["Through the mean point.", "b = Sxy/Sxx.", "Context and units.", "Don't extrapolate.", "x on y for x."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

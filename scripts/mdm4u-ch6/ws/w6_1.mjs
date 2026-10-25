// MDM4U Worksheet 6.1 — Scatter Plots & Correlation (teacher edition)
import { svgT, scatterSvg, tableSvg } from "./figT.mjs";
import { corr, sum } from "../../mdm4u/count.mjs";

const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;
const P = (xs, ys) => xs.map((x, i) => [x, ys[i]]);
const sums = (xs, ys) => ({ n: xs.length, sx: sum(xs), sy: sum(ys), sxy: sum(xs.map((x, i) => x * ys[i])), sxx: sum(xs.map((x) => x * x)), syy: sum(ys.map((y) => y * y)) });
const a = [2, 3, 5, 6, 8], b = [10, 13, 14, 18, 21], A = sums(a, b);
const wk = [1, 2, 3, 4, 5, 6, 7, 8], sav = [40, 55, 72, 80, 101, 110, 128, 141];
const alt = [0, 500, 1000, 1500, 2000, 2500, 3000], bp = [101.3, 95.5, 89.9, 84.6, 79.5, 74.7, 70.1];
const shoe = [6, 7, 7.5, 8, 9, 10, 10.5, 11], marks = [72, 65, 80, 58, 77, 69, 74, 61];

const EXAMPLES = [
  { title: "Roles of the variables", q: "A study records the number of hours each student works at a part-time job and the student's average mark. Identify the explanatory and response variables.", steps: ["Hours worked may affect marks."], ans: "x: hours worked; y: average mark" },
  { title: "Describing a positive pattern", q: "Describe the scatter plot of weekly savings (dollars) against week number.", fig: svgT(scatterSvg(P(wk, sav), { xmin: 0, xmax: 9, ymin: 0, ymax: 160, xlabel: "week", ylabel: "savings" }), 6.5), steps: ["Rising to the right, close to a line, no outliers."], ans: `strong positive linear (r ≈ ${r3(corr(wk, sav))})` },
  { title: "Describing a negative pattern", q: "Describe the relationship between altitude (m) and air pressure (kPa) in the data 0: 101.3, 500: 95.5, 1000: 89.9, 1500: 84.6, 2000: 79.5, 2500: 74.7, 3000: 70.1.", steps: ["Pressure falls as altitude rises, almost exactly linearly."], ans: `strong negative linear (r ≈ ${r3(corr(alt, bp))})` },
  { title: "No relationship", q: "Describe the scatter plot of shoe size against mark for 8 students.", fig: svgT(scatterSvg(P(shoe, marks), { xmin: 5, xmax: 12, ymin: 50, ymax: 90, xlabel: "shoe size", ylabel: "mark" }), 6.5), steps: ["No pattern: a shapeless cloud."], ans: `no linear correlation (r ≈ ${r3(corr(shoe, marks))})` },
  { title: "Calculating r", q: `Find r for x: ${a.join(", ")}; y: ${b.join(", ")}.`, steps: [S`$\sum x=${A.sx}$, $\sum y=${A.sy}$, $\sum xy=${A.sxy}$, $\sum x^2=${A.sxx}$, $\sum y^2=${A.syy}$.`, S`$r=\frac{5(${A.sxy})-${A.sx}(${A.sy})}{\sqrt{[5(${A.sxx})-${A.sx}^2][5(${A.syy})-${A.sy}^2]}}$.`], ans: `r ≈ ${r3(corr(a, b))}` },
  { title: "r from sums", q: "For n = 6: Σx = 24, Σy = 60, Σxy = 268, Σx² = 112, Σy² = 650. Find r.", steps: [S`Numerator $6(268)-24(60)=168$.`, S`$6(112)-576=96$; $6(650)-3600=300$.`, S`$r=\frac{168}{\sqrt{96\cdot300}}$.`], ans: `r ≈ ${r3(168 / Math.sqrt(96 * 300))}` },
  { title: "Classifying r", q: "Classify r = 0.94, −0.52, 0.18 and −0.81.", steps: ["Use the size of r for strength and its sign for direction."], ans: "strong positive; weak negative; very weak positive; moderate negative" },
  { title: "Changing units", q: "Heights in the altitude data are changed from metres to kilometres. What happens to r?", steps: ["r has no units; rescaling x does not change it."], ans: "r is unchanged" },
  { title: "r and curves", q: "The points (0, 9), (1, 4), (2, 1), (3, 0), (4, 1), (5, 4), (6, 9) lie on a U-shaped curve. Estimate r and explain.", steps: [S`The fall and the rise balance: $r\approx${r3(corr([0, 1, 2, 3, 4, 5, 6], [9, 4, 1, 0, 1, 4, 9]))}$.`], ans: "r = 0 but a perfect curved relationship" },
];

const PROBLEMS = [
  { level: 1, q: "Identify the explanatory and response variables: the temperature of a room and the time for an ice cube to melt.", ans: "x: temperature; y: melting time" },
  { level: 1, q: "Classify r = −0.97 and r = 0.41.", ans: "strong negative; weak positive" },
  { level: 1, q: "Which is stronger: r = 0.75 or r = −0.82?", ans: "r = −0.82" },
  { level: 2, q: "Find r for x: 1, 3, 4, 6, 8; y: 2, 5, 5, 9, 11.", ans: `${r3(corr([1, 3, 4, 6, 8], [2, 5, 5, 9, 11]))}` },
  { level: 2, q: "For n = 5: Σx = 30, Σy = 50, Σxy = 330, Σx² = 220, Σy² = 540. Find r.", ans: `${r3((5 * 330 - 1500) / Math.sqrt((1100 - 900) * (2700 - 2500)))}` },
  { level: 2, q: "Describe the scatter plot shown.", fig: svgT(scatterSvg([[1, 18], [2, 16], [3, 15], [4, 12], [5, 12], [6, 9], [7, 8], [8, 5]], { xmin: 0, xmax: 9, ymin: 0, ymax: 20 }), 5.5), ans: `strong negative linear (r ≈ ${r3(corr([1, 2, 3, 4, 5, 6, 7, 8], [18, 16, 15, 12, 12, 9, 8, 5]))})` },
  { level: 2, q: "Every x-value is increased by 10. What happens to r?", ans: "unchanged" },
  { level: 2, q: "Give an example of two variables you would expect to have a strong negative correlation, and explain.", ans: "e.g. outdoor temperature and heating cost" },
  { level: 3, space: 4.5, q: "Five points have r = 0.1. A sixth point far to the upper right is added and r becomes 0.85. Explain what happened and how you would report the data.", ans: "the single point created the correlation; report it as an outlier and give r with and without it" },
  { level: 3, space: 4.5, q: "Explain why r = 0 does not mean that x and y are unrelated. Sketch an example.", ans: "a curved (e.g. U-shaped) relationship can have r = 0" },
  { level: 3, space: 4.5, q: "For n = 8: Σx = 36, Σy = 120, Σxy = 610, Σx² = 204, Σy² = 1930. Find r and describe the correlation.", ans: `r ≈ ${r3((8 * 610 - 36 * 120) / Math.sqrt((8 * 204 - 1296) * (8 * 1930 - 14400)))}` },
  { level: 3, space: 4.5, q: "Every y-value of a data set with r = 0.6 is replaced by 50 − 2y. Find the new r and explain.", ans: "−0.6: multiplying by a negative reverses the direction" },
  { level: 3, space: 4.5, q: "Collect the height and arm span of 8 people (or use made-up values). Draw a scatter plot, describe it and find r.", ans: "answers vary; expect a strong positive correlation" },
];

export const WS = {
  code: "6.1",
  title: "Scatter Plots & Correlation",
  bigideas: S`A scatter plot shows two-variable data, with the explanatory variable $x$ horizontal and the response $y$ vertical. Describe direction, form, strength and outliers. The correlation coefficient $r=\frac{n\sum xy-\sum x\sum y}{\sqrt{[n\sum x^2-(\sum x)^2][n\sum y^2-(\sum y)^2]}}$ is between $-1$ and $1$ and measures only linear association.`,
  goals: ["Choose x and y.", "Describe scatter plots.", "Compute r.", "Interpret r and its limits."],
  curriculum: "D2.1, D2.2, D2.3",
  vocab: [["Explanatory variable", "x, used to predict"], ["Response variable", "y, being predicted"], ["Correlation coefficient", "r, strength of linear association"], ["Outlier", "point off the pattern"]],
  hook: "Do taller students run faster? How could you check, and how would you measure how strong the link is?",
  concepts: [
    ["1. Scatter plot", S`${svgT(scatterSvg(P(wk, sav), { xmin: 0, xmax: 9, ymin: 0, ymax: 160 }), 5.4)}`],
    ["2. Describe", "Direction, form, strength, outliers."],
    ["3. Measure", "r from the formula or technology; |r| near 1 is strong."],
  ],
  tips: ["Plot first.", "x horizontal, y vertical.", "Keep the sign of r.", "r is unitless.", "r measures straight-line patterns only."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

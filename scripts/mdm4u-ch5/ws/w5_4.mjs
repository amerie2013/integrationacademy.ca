// MDM4U Worksheet 5.4 — Measures of Central Tendency (teacher edition)
import { svgT, dotPlotSvg, barsSvg, tableSvg } from "./figT.mjs";
import { mean, median, modes, sum } from "../../mdm4u/count.mjs";

const S = String.raw;
const r2 = (v) => Math.round(v * 100) / 100;
const a = [23, 27, 19, 31, 27, 25, 22];
const b = [5, 8, 8, 9, 11, 12, 14, 15, 15, 15];
const rent = [1150, 1200, 1250, 1250, 1300, 1350, 4200];
const gm = [155, 165, 175, 185, 195], gf = [4, 9, 13, 8, 6], gS = sum(gm.map((m, i) => m * gf[i])), gN = sum(gf);
const p2m = [2, 6, 10, 14], p2f = [5, 12, 9, 4];

const EXAMPLES = [
  { title: "Odd number of values", q: `Find the mean, median and mode of the daily high temperatures (°C) ${a.join(", ")}.`, steps: [S`$\bar x=\frac{${sum(a)}}{7}\approx${r2(mean(a))}$.`, `Ordered: ${[...a].sort((x, y) => x - y).join(", ")}; median ${median(a)}.`, "Mode 27."], ans: `${r2(mean(a))}, ${median(a)}, 27` },
  { title: "Even number of values", q: `Find the mean, median and mode of ${b.join(", ")}.`, steps: [S`$\bar x=\frac{${sum(b)}}{10}=${mean(b)}$.`, S`Median $\frac{11+12}{2}=11.5$.`, "Mode 15."], ans: `${mean(b)}, 11.5, 15` },
  { title: "An outlier", q: `Monthly rents (dollars) on one street: ${rent.join(", ")}. Find the mean and median and say which is more typical.`, fig: svgT(dotPlotSvg(rent.map((x) => x / 100), { min: 10, max: 44, step: 4, xlabel: "rent (hundreds of dollars)" }), 6.5), steps: [S`$\bar x=\frac{${sum(rent)}}{7}\approx${r2(mean(rent))}$.`, "Median 1250.", "The luxury unit at 4200 inflates the mean; the median is typical."], ans: `mean ≈ ${r2(mean(rent))}, median 1250; median` },
  { title: "Weighted mean", q: "A program is graded: labs 25 percent (mark 88), midterm 30 percent (71), final 45 percent (76). Find the final grade.", steps: [S`$0.25(88)+0.3(71)+0.45(76)=22+21.3+34.2$.`], ans: "77.5" },
  { title: "Grade point average", q: "Credits and grade points: 4 credits at 3.7, 3 credits at 3.0, 2 credits at 2.3. Find the weighted average.", steps: [S`$\frac{4(3.7)+3(3)+2(2.3)}{9}=\frac{28.4}{9}$.`], ans: `${r2(28.4 / 9)}` },
  { title: "Grouped data", q: "Heights (cm) of 40 people are grouped below. Estimate the mean; name the modal class and the class containing the median.", fig: svgT(tableSvg([["height", "150–160", "160–170", "170–180", "180–190", "190–200"], ["frequency", ...gf.map(String)]]), 8), steps: [S`$\sum fm=${gS}$.`, S`$\bar x\approx\frac{${gS}}{${gN}}=${gS / gN}$.`, "Modal class 170–180; cumulative 4, 13, 26: the 20th and 21st values are in 170–180."], ans: `${gS / gN} cm; 170–180; 170–180` },
  { title: "Mean from a frequency table", q: "Number of pets in 25 homes: 0 pets (7 homes), 1 (9), 2 (6), 3 (3). Find the mean, median and mode.", steps: [S`$\frac{0(7)+1(9)+2(6)+3(3)}{25}=\frac{30}{25}=1.2$.`, "13th value: cumulative 7, 16: median 1.", "Mode 1."], ans: "1.2, 1, 1" },
  { title: "Missing value", q: "Four quiz marks are 7, 9, 6 and 8. What must the fifth be for a mean of 8?", steps: [S`$5(8)-30=10$.`], ans: "10" },
  { title: "Which measure?", q: "Choose the best measure: (a) the typical salary at a company with a few very high earners; (b) the most common shoe size sold; (c) the average daily temperature in a month with no extreme days.", steps: ["Skewed: median. Most common: mode. Symmetric: mean."], ans: "median, mode, mean" },
];

const PROBLEMS = [
  { level: 1, q: "Find the mean, median and mode of 12, 15, 11, 15, 18, 13.", ans: `${r2(mean([12, 15, 11, 15, 18, 13]))}, ${median([12, 15, 11, 15, 18, 13])}, 15` },
  { level: 1, q: "Find the median of 41, 38, 45, 50, 39, 44, 47.", ans: `${median([41, 38, 45, 50, 39, 44, 47])}` },
  { level: 1, q: "A mark is 40 percent tests (80) and 60 percent exam (65). Find the weighted mean.", ans: "71" },
  { level: 2, q: "Estimate the mean of the grouped data in the histogram (intervals 0–4, 4–8, 8–12, 12–16).", fig: svgT(barsSvg(p2f, { labels: ["0–4", "4–8", "8–12", "12–16"], histogram: true, top: true }), 5), ans: `${sum(p2m.map((m, i) => m * p2f[i])) / sum(p2f)}` },
  { level: 2, q: "Goals per game for a team: 0 (3 games), 1 (6), 2 (5), 3 (4), 4 (2). Find the mean, median and mode.", ans: `${(0 * 3 + 1 * 6 + 2 * 5 + 3 * 4 + 4 * 2) / 20}, 2, 1` },
  { level: 2, q: "The mean of 6 numbers is 14. Five of them are 10, 12, 15, 17, 18. Find the sixth.", ans: "12" },
  { level: 2, q: "Give a data set of five values with mean 10, median 8 and mode 8.", ans: "e.g. 6, 8, 8, 12, 16" },
  { level: 2, q: "Explain why the mode is the only measure of centre for favourite ice-cream flavours.", ans: "the data are categorical; no order or arithmetic" },
  { level: 3, space: 4.5, q: "A class of 28 has mean 72 on a test. A second class of 22 has mean 81. Find the mean of all 50 students. Explain why it is closer to 72.", ans: `${(28 * 72 + 22 * 81) / 50}; the larger class has more weight` },
  { level: 3, space: 4.5, q: "Priya's mean after 4 tests is 79. The fifth test counts double. What does she need on it for a mean of 82 (weighting the fifth test twice)?", ans: "88" },
  { level: 3, space: 4.5, q: "When the largest value of a set of 9 numbers is increased by 18, how do the mean and median change?", ans: "mean increases by 2; median unchanged" },
  { level: 3, space: 4.5, q: "The salaries at a firm are: 8 employees at 45 000 dollars, 3 managers at 70 000 dollars and the owner at 250 000 dollars. Find the mean and median. Which would the owner quote in a job advertisement, and which would a union quote?", ans: `mean ${Math.round((8 * 45000 + 3 * 70000 + 250000) / 12)}, median 45 000; owner the mean, union the median` },
  { level: 3, space: 4.5, q: "A data set has 5 values with mean 20 and median 18. A sixth value of 32 is added. Find the new mean. Can you find the new median? Explain.", ans: "22; not exactly: it depends on the 3rd and 4th values (it lies between 18 and the next value)" },
];

export const WS = {
  code: "5.4",
  title: "Measures of Central Tendency",
  bigideas: S`The mean $\bar x=\frac{\sum x}{n}$ uses every value but is pulled by outliers; the median (middle of the ordered data) is resistant; the mode is the most frequent value and the only centre for categorical data. Weighted means use $\frac{\sum wx}{\sum w}$; grouped data use the interval midpoints, $\bar x\approx\frac{\sum fm}{n}$.`,
  goals: ["Compute mean, median, mode.", "Use weighted means.", "Estimate grouped means.", "Choose the best measure."],
  curriculum: "D1.1, D1.5",
  vocab: [["Mean", "sum divided by count"], ["Median", "middle ordered value"], ["Mode", "most frequent value"], ["Modal class", "interval with highest frequency"]],
  hook: "A company says its average salary is 95 000 dollars. Most workers earn 45 000 dollars. How can both be true?",
  concepts: [
    ["1. Three centres", S`${svgT(dotPlotSvg([3, 4, 4, 5, 6, 7, 15], { min: 2, max: 16, step: 2, marks: [[mean([3, 4, 4, 5, 6, 7, 15]), "mean", "red"], [5, "median", "green"]] }), 5.8)}`],
    ["2. Weighted", S`$\bar x_w=\frac{\sum wx}{\sum w}$.`],
    ["3. Grouped", S`Use midpoints: $\bar x\approx\frac{\sum fm}{n}$.`],
  ],
  tips: ["Order before the median.", "Even n: average the middle two.", "Divide by the sum of weights.", "Outliers move the mean.", "Grouped means are estimates."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

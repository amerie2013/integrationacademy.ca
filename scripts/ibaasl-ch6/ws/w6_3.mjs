// IB AA SL Worksheet 6.3 — Measures of Central Tendency (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const bars = (pairs, color = "violet", w = 0.6) => pairs.map(([x, h]) => ({ pts: [[x - w / 2, 0], [x - w / 2, h], [x + w / 2, h], [x + w / 2, 0]], color }));
const histo = (edges, f, color = "violet") => f.map((h, i) => ({ pts: [[edges[i], 0], [edges[i], h], [edges[i + 1], h], [edges[i + 1], 0]], color }));

const EXAMPLES = [
  { title: "Raw data", q: "Find the mean, median and mode of 6, 9, 3, 9, 12, 5, 8.",
    steps: [S`Sum 52: mean $\approx7.43$.`, S`Ordered 3, 5, 6, 8, 9, 9, 12: median 8.`, "Mode 9."], ans: "≈ 7.43, 8, 9" },
  { title: "Even number of values", q: "Find the median of 14, 20, 11, 17, 25, 9.",
    steps: [S`9, 11, 14, 17, 20, 25: $\frac{14+17}{2}$.`], ans: "15.5" },
  { title: "Frequency table: mean", q: "Shoe sizes 5, 6, 7, 8 have frequencies 3, 8, 6, 3. Find the mean.",
    fig: F({ view: { xmin: 4, xmax: 9, ymin: 0, ymax: 9 }, segs: bars([[5, 3], [6, 8], [7, 6], [8, 3]]), step: { x: 1, y: 1 } }),
    steps: [S`$\sum fx=15+48+42+24=129$; $\sum f=20$.`], ans: "6.45" },
  { title: "Frequency table: median", q: "Find the median shoe size for the previous table.",
    steps: [S`$n=20$: median between the 10th and 11th values.`, S`cf: 3, 11: both are 6.`], ans: "6" },
  { title: "Grouped data", q: "Estimate the mean: 0–4 (f = 6), 4–8 (f = 14), 8–12 (f = 10), 12–16 (f = 2).",
    steps: [S`Midpoints 2, 6, 10, 14: $\sum fx=12+84+100+28=224$.`, S`$\frac{224}{32}$.`], ans: "7" },
  { title: "Modal class", q: "State the modal class for the previous table.",
    steps: ["Highest frequency 14."], ans: "4–8" },
  { title: "Missing value", q: "The mean of 12, 15, x, 9, 20, 14 is 14. Find x.",
    steps: [S`Total $6\times14=84$; $70+x=84$.`], ans: "14" },
  { title: "Combining means", q: "8 apples have mean mass 150 g and 12 have mean 140 g. Find the mean of all 20.",
    steps: [S`$\frac{1200+1680}{20}$.`], ans: "144 g" },
  { title: "Choosing a measure", q: "Waiting times (min): 2, 3, 3, 4, 4, 5, 6, 45. Which measure best describes a typical wait?",
    fig: F({ view: { xmin: 0, xmax: 48, ymin: 0, ymax: 2 }, points: [2, 3, 3, 4, 4, 5, 6, 45].map((x, i, a) => ({ x, y: 0.4 * (a.slice(0, i).filter((v) => v === x).length + 1), color: "violet" })), step: { x: 4, y: 1 } }),
    steps: [S`Mean 9 is pulled up by 45; median 4.`], ans: "median (4 min)" },
];

const PROBLEMS = [
  { level: 1, q: "Find the mean of 5, 9, 12, 6, 8.", recap: "Mean.", ans: "8" },
  { level: 1, q: "Find the mode of 3, 7, 7, 2, 9, 7, 3.", recap: "Mode.", ans: "7" },
  { level: 1, q: "Find the median of 10, 4, 7, 12, 9, 6.", recap: "Median.", ans: "8" },
  { level: 2, q: "Scores 2, 3, 4, 5 have frequencies 4, 7, 6, 3. Find the mean.", recap: "Frequency mean.", ans: "3.4" },
  { level: 2, q: "Estimate the mean: 10–20 (f = 3), 20–30 (f = 9), 30–40 (f = 6), 40–50 (f = 2).", recap: "Grouped mean.", ans: "28.5" },
  { level: 2, q: "The mean of 7 numbers is 12. One number, 20, is removed. Find the new mean.", recap: "Changing n.", ans: "64/6 ≈ 10.7" },
  { level: 2, q: "For the bar chart shown, find the median.", recap: "Median from a chart.", ans: "2",
    fig: F({ view: { xmin: -0.8, xmax: 4.8, ymin: 0, ymax: 9 }, segs: bars([[0, 2], [1, 5], [2, 8], [3, 3], [4, 1]]), step: { x: 1, y: 1 } }) },
  { level: 2, q: "Which measure would you use for the most popular shoe size sold in a shop?", recap: "Choose.", ans: "mode" },
  { level: 3, space: 4, q: S`Values 1, 2, 3, 4 have frequencies 5, k, 4, 3 and the mean is 2.25. Find k.`, recap: "Unknown frequency.", ans: S`$k=8$` },
  { level: 3, space: 4, q: "The mean of a, b and c is 10, and the mean of a, b, c, d and e is 13. Find the mean of d and e.", recap: "Totals.", ans: "17.5" },
  { level: 3, space: 4, q: "A class of 24 has a mean mark of 68. When one new student joins, the mean becomes 69. Find the new student's mark.", recap: "New member.", ans: "93" },
  { level: 3, space: 4, q: "Estimate the mean and state the modal class for the histogram shown.", recap: "Grouped from a histogram.", ans: "1030/40 = 25.75; 20–30",
    fig: F({ view: { xmin: -2, xmax: 52, ymin: 0, ymax: 16 }, segs: histo([0, 10, 20, 30, 40, 50], [3, 9, 14, 10, 4]), step: { x: 10, y: 2 } }) },
  { level: 3, space: 4, q: "Explain why the mean of grouped data is only an estimate, and when it may be poor.", recap: "Reliability.", ans: "midpoints replace values; poor if values cluster at class ends" },
];

export const WS = {
  code: "6.3",
  title: "Measures of Central Tendency",
  bigideas: S`Mean $\bar x=\frac{\sum x}{n}=\frac{\sum fx}{\sum f}$; median = the $\frac{n+1}{2}$th ordered value; mode = most frequent. For grouped data, estimate the mean with class midpoints and state the modal class. Use the median when data are skewed or have outliers. Total = mean × n solves missing-value and combined-group problems.`,
  goals: ["Find mean, median, mode.", "Use frequency tables.", "Estimate grouped means.", "Choose a measure; missing values."],
  curriculum: "SL 4.3",
  vocab: [["Mean", S`$\frac{\sum fx}{\sum f}$`], ["Median", S`$\frac{n+1}{2}$th value`], ["Modal class", "highest frequency"]],
  hook: "Ask: in a room of 10 people earning 40 000 each, a billionaire walks in. What happens to the mean salary? The median?",
  concepts: [
    ["1. Three averages", S`${F({ view: { xmin: 0, xmax: 48, ymin: 0, ymax: 2 }, points: [2, 3, 3, 4, 4, 5, 6, 45].map((x, i, a) => ({ x, y: 0.4 * (a.slice(0, i).filter((v) => v === x).length + 1), color: "violet" })), vlines: [{ x: 9, color: "red", dash: true }, { x: 4, color: "green", dash: true }], step: { x: 4, y: 1 } }, 5)} Mean (red) vs median (green).`],
    ["2. Frequency tables", S`$\sum fx\div\sum f$; median via cumulative frequency.`],
    ["3. Grouped data", "Midpoints give an estimated mean; modal class."],
  ],
  tips: ["Divide by Σf.", "(n + 1)/2 th position.", "Midpoints for grouped.", "Median for skew.", "Total = mean × n."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

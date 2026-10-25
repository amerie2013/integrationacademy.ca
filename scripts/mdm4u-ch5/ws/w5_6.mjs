// MDM4U Worksheet 5.6 — Quartiles, Percentiles & Box Plots (teacher edition)
import { svgT, boxPlotSvg, dotPlotSvg } from "./figT.mjs";
import { quartiles, fences, pctRank, pctVal } from "../../mdm4u/count.mjs";

const S = String.raw;
const odd = [41, 45, 47, 52, 55, 58, 60, 63, 70];
const even = [3, 6, 7, 9, 10, 12, 13, 15, 16, 31];
const big = [12, 14, 15, 15, 17, 18, 20, 21, 23, 24, 26, 27, 29, 30, 33, 35];
const f5 = (xs) => { const s = [...xs].sort((a, b) => a - b), q = quartiles(s); return [s[0], ...q, s[s.length - 1]]; };
const [o1, o2, o3] = quartiles(odd), [e1, e2, e3] = quartiles(even), [elf, euf] = fences(even);

const EXAMPLES = [
  { title: "Odd n", q: `Find the five-number summary and IQR of ${odd.join(", ")}.`, steps: [`Median: 5th value ${o2}.`, `Q1: median of 41, 45, 47, 52 = ${o1}. Q3: median of 58, 60, 63, 70 = ${o3}.`, `IQR = ${o3 - o1}.`], ans: `41, ${o1}, ${o2}, ${o3}, 70; IQR ${o3 - o1}` },
  { title: "Even n", q: `Find the quartiles of ${even.join(", ")}.`, steps: [`Median (10 + 12)/2 = ${e2}.`, `Q1 = median of 3, 6, 7, 9, 10 = ${e1}; Q3 = median of 12, 13, 15, 16, 31 = ${e3}.`], ans: `${e1}, ${e2}, ${e3}` },
  { title: "Outliers", q: "Use the fences to test the data of the previous example for outliers.", steps: [`IQR = ${e3 - e1}.`, S`Lower fence $${e1}-1.5(${e3 - e1})=${elf}$; upper fence $${e3}+1.5(${e3 - e1})=${euf}$.`], ans: `31 is an outlier (above ${euf})` },
  { title: "Box plot", q: "Draw the modified box plot of the same data.", fig: svgT(boxPlotSvg([{ data: even }], { min: 0, max: 35, step: 5 }), 7), steps: ["Box from Q1 to Q3 with the median line.", "Whiskers to 3 and to 16 (the largest non-outlier); 31 plotted separately."], ans: "see figure" },
  { title: "Reading a box plot", q: "From the box plot of test scores (min 34, Q1 52, median 61, Q3 70, max 88), what percent of students scored (a) above 70; (b) between 52 and 88?", fig: svgT(boxPlotSvg([{ five: [34, 52, 61, 70, 88] }], { min: 30, max: 90, step: 10 }), 6.5), steps: ["Each section holds about 25 percent of the data."], ans: "(a) about 25 percent (b) about 75 percent" },
  { title: "Percentile rank", q: "Of 60 runners, 47 had slower times than Ana and 1 other runner tied her. Find her percentile rank (faster is better).", steps: [S`$\frac{47+0.5(2)}{60}\times100=80$.`], ans: "80th percentile" },
  { title: "Value at a percentile", q: `Sixteen values: ${big.join(", ")}. Find the 25th and 90th percentiles.`, steps: [S`25th: $L=0.25(16)=4$: average the 4th and 5th: $\frac{15+17}{2}=${pctVal(big, 25)}$.`, S`90th: $L=14.4$: round up to the 15th value: $${pctVal(big, 90)}$.`], ans: `${pctVal(big, 25)} and ${pctVal(big, 90)}` },
  { title: "Comparing box plots", q: "Compare the battery life (h) of two brands from the box plots.", fig: svgT(boxPlotSvg([{ five: [8, 11, 13, 15, 19], label: "Brand X" }, { five: [10, 12, 13.5, 14, 16], label: "Brand Y" }], { min: 6, max: 20, step: 2 }), 7), steps: ["Medians: X 13, Y 13.5 (similar).", "IQR: X 4, Y 2; ranges 11 and 6."], ans: "similar centres; Y far more consistent" },
  { title: "Deciles", q: "On a test written by 250 students, how many students are expected to be above the 7th decile (70th percentile)?", steps: [S`$0.3(250)=75$.`], ans: "about 75" },
];

const PROBLEMS = [
  { level: 1, q: "Find the five-number summary of 15, 9, 22, 18, 12, 25, 20.", ans: f5([15, 9, 22, 18, 12, 25, 20]).join(", ") },
  { level: 1, q: "Find the IQR of 2, 4, 5, 7, 8, 10, 11, 14.", ans: (() => { const q = quartiles([2, 4, 5, 7, 8, 10, 11, 14]); return `${q[2] - q[0]}`; })() },
  { level: 1, q: "Q1 = 24 and Q3 = 36. Find the lower and upper fences.", ans: "6 and 54" },
  { level: 2, q: "Draw a box plot of 4, 7, 8, 8, 10, 11, 13, 14, 15, 29 and identify any outliers.", ans: (() => { const d = [4, 7, 8, 8, 10, 11, 13, 14, 15, 29], [l, u] = fences(d); return `quartiles ${quartiles(d).join(", ")}; fences ${l}, ${u}; 29 is an outlier`; })() },
  { level: 2, q: "A value is greater than 18 of 25 values and equal to 2 others. Find its percentile rank.", ans: `${pctRank([...Array(18).fill(0), 5, 5, 5, ...Array(4).fill(9)], 5)}` },
  { level: 2, q: "Find the 60th percentile of 3, 5, 8, 9, 12, 14, 15, 18, 21, 22.", ans: `${pctVal([3, 5, 8, 9, 12, 14, 15, 18, 21, 22], 60)}` },
  { level: 2, q: "The dot plot shows 12 values. Find Q1, the median and Q3.", fig: svgT(dotPlotSvg([2, 3, 3, 4, 5, 5, 5, 6, 7, 8, 9, 11], { min: 0, max: 12, step: 1 }), 6), ans: quartiles([2, 3, 3, 4, 5, 5, 5, 6, 7, 8, 9, 11]).join(", ") },
  { level: 2, q: "Explain why the IQR is not affected by an outlier but the range is.", ans: "the IQR uses only the middle half; the range uses the extremes" },
  { level: 3, space: 4.5, q: "Create a data set of 8 values with five-number summary 10, 14, 20, 26, 40.", ans: "e.g. 10, 12, 16, 18, 22, 24, 28, 40" },
  { level: 3, space: 4.5, q: "For a data set, Q1 = 46 and Q3 = 62. What is the smallest whole number that would be an outlier above, and the largest whole number that would be an outlier below?", ans: "87 and 21" },
  { level: 3, space: 4.5, q: "In a class of 50, Kai's percentile rank is 75 and no one tied with him. How many students scored below him, and how many above?", ans: "(b + 0.5)/50 = 0.75 gives b = 37 below; 12 above" },
  { level: 3, space: 4.5, q: "The box plots of two classes have the same median and IQR, but class A has an outlier at 98. Explain how the means and standard deviations compare.", ans: "A has a larger mean and standard deviation, pulled by the outlier" },
  { level: 3, space: 4.5, q: "On a test written by 1200 students, 948 scored below 81 and 24 scored exactly 81. Find the percentile rank of 81, and the number of students above the 90th percentile.", ans: "80; about 120" },
];

export const WS = {
  code: "5.6",
  title: "Quartiles, Percentiles & Box Plots",
  bigideas: S`Quartiles split ordered data into four equal parts: $Q_1$ and $Q_3$ are the medians of the lower and upper halves. The five-number summary (min, $Q_1$, median, $Q_3$, max) is drawn as a box plot. $IQR=Q_3-Q_1$; values beyond $Q_1-1.5\,IQR$ or $Q_3+1.5\,IQR$ are outliers. Percentile rank $=\frac{b+0.5e}{n}\times100$.`,
  goals: ["Find quartiles and the IQR.", "Detect outliers.", "Draw and compare box plots.", "Use percentiles."],
  curriculum: "D1.2, D1.3, D1.5",
  vocab: [["Quartile", "value splitting ordered data into quarters"], ["IQR", "Q3 minus Q1"], ["Fence", "outlier boundary"], ["Percentile rank", "percent of data below a value"]],
  hook: "Your score is at the 92nd percentile. Did you get 92 on the test?",
  concepts: [
    ["1. Quartiles", "Median of each half (leave the median out when n is odd)."],
    ["2. Box plot", S`${svgT(boxPlotSvg([{ five: [5, 12, 16, 21, 30], outliers: [42] }], { min: 0, max: 45, step: 5 }), 6)}`],
    ["3. Percentiles", S`$L=\frac{P}{100}n$: whole, average $L$th and $(L+1)$th; otherwise round up.`],
  ],
  tips: ["Order first.", "Check for outliers before drawing whiskers.", "Each box section holds about a quarter.", "A percentile is a position.", "Compare medians and IQRs."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

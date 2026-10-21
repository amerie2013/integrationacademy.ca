// IB AA SL Worksheet 6.2 — Presenting Data (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const histo = (edges, f, color = "violet") => f.map((h, i) => ({ pts: [[edges[i], 0], [edges[i], h], [edges[i + 1], h], [edges[i + 1], 0]], color }));
const box = (mn, q1, q2, q3, mx, y = 1, h = 0.6, color = "violet") => [
  { pts: [[mn, y], [q1, y]], color }, { pts: [[q3, y], [mx, y]], color },
  { pts: [[q1, y - h / 2], [q3, y - h / 2], [q3, y + h / 2], [q1, y + h / 2], [q1, y - h / 2]], color },
  { pts: [[q2, y - h / 2], [q2, y + h / 2]], color: "red" },
];

const EXAMPLES = [
  { title: "Frequency table", q: "Make a frequency table for the number of siblings: 1, 0, 2, 1, 3, 1, 0, 2, 1, 1, 4, 2.",
    steps: ["Count each value: 0 (2), 1 (5), 2 (3), 3 (1), 4 (1)."], ans: "f = 2, 5, 3, 1, 1" },
  { title: "Histogram", q: "Draw a histogram for lengths (cm): 10–15 (f = 4), 15–20 (9), 20–25 (13), 25–30 (6).",
    fig: F({ view: { xmin: 8, xmax: 32, ymin: 0, ymax: 15 }, segs: histo([10, 15, 20, 25, 30], [4, 9, 13, 6]), step: { x: 5, y: 2 } }),
    steps: ["Equal widths: bar heights equal the frequencies."], ans: "modal class 20–25" },
  { title: "Cumulative frequency", q: "Find the cumulative frequencies for the lengths in the previous example.",
    steps: [S`$4$, $13$, $26$, $32$.`], ans: "4, 13, 26, 32" },
  { title: "Reading a cf graph", q: "From the cf graph of 32 lengths, estimate the median.",
    fig: F({ view: { xmin: 8, xmax: 32, ymin: 0, ymax: 34 }, segs: [{ pts: [[10, 0], [15, 4], [20, 13], [25, 26], [30, 32]], color: "violet" }, { pts: [[10, 16], [21.2, 16], [21.2, 0]], color: "red" }], step: { x: 5, y: 4 } }),
    steps: [S`Read across at 16: $20+\frac{3}{13}\times5\approx21.2$ cm.`], ans: "≈ 21.2 cm" },
  { title: "Quartiles of raw data", q: "Find Q1, the median and Q3 of 2, 4, 5, 7, 8, 10, 13, 14, 16.",
    steps: [S`Median 8 (5th value).`, S`Lower half 2, 4, 5, 7: Q1 = 4.5; upper half 10, 13, 14, 16: Q3 = 13.5.`], ans: "4.5, 8, 13.5" },
  { title: "Box plot", q: "Draw the box plot for the data in the previous example.",
    fig: F({ view: { xmin: 0, xmax: 18, ymin: 0, ymax: 2 }, segs: box(2, 4.5, 8, 13.5, 16), step: { x: 2, y: 1 } }),
    steps: ["Whiskers to 2 and 16; box from 4.5 to 13.5; line at 8."], ans: "see figure" },
  { title: "Outlier test", q: "For Q1 = 31, Q3 = 43, is 64 an outlier?",
    steps: [S`IQR 12; upper fence $43+18=61$.`, "64 > 61."], ans: "yes" },
  { title: "Percentile", q: "On a cf graph of 250 values, where do you read the 20th percentile?",
    steps: [S`$0.2\times250=50$.`], ans: "at cf 50" },
  { title: "Comparing box plots", q: "Plants grown with fertiliser: median 34 cm, IQR 6; without: median 28 cm, IQR 10. Compare.",
    steps: ["With fertiliser the plants are taller on average (34 vs 28) and more consistent (IQR 6 vs 10)."], ans: "taller and more consistent" },
];

const PROBLEMS = [
  { level: 1, q: "Frequencies are 3, 8, 11, 6. Find the cumulative frequencies.", recap: "Cumulative frequency.", ans: "3, 11, 22, 28" },
  { level: 1, q: "Find the median of 13, 8, 21, 15, 10.", recap: "Median.", ans: "13" },
  { level: 1, q: "Find the IQR when Q1 = 17 and Q3 = 29.", recap: "IQR.", ans: "12" },
  { level: 2, q: "Find the five-number summary of 5, 8, 9, 12, 14, 15, 19, 22.", recap: "Summary.", ans: "5, 8.5, 13, 17, 22" },
  { level: 2, q: "Q1 = 50, Q3 = 66. Find both fences for outliers.", recap: "Fences.", ans: "26 and 90" },
  { level: 2, q: "Draw a histogram for masses 0–20 (f = 5), 20–40 (12), 40–60 (8), 60–80 (3).", recap: "Histogram.", ans: "modal class 20–40",
    fig: F({ view: { xmin: -2, xmax: 82, ymin: 0, ymax: 14 }, step: { x: 10, y: 2 } }) },
  { level: 2, q: "For 120 values, at what cumulative frequencies do you read Q1 and Q3?", recap: "Quartile positions.", ans: "30 and 90" },
  { level: 2, q: "From the cf graph, estimate the number of students who scored more than 60.", recap: "Read a cf graph.", ans: "≈ 100 − 72 = 28",
    fig: F({ view: { xmin: 0, xmax: 100, ymin: 0, ymax: 105 }, segs: [{ pts: [[0, 0], [20, 6], [40, 30], [60, 72], [80, 94], [100, 100]], color: "violet" }], step: { x: 10, y: 10 } }) },
  { level: 3, space: 4, q: "Data: 4, 6, 7, 7, 9, 11, 12, 14, 31. Find the quartiles, decide whether 31 is an outlier and draw the box plot.", recap: "Full box plot.", ans: S`Q1 = 6.5, median 9, Q3 = 13; fence 22.75; 31 is an outlier` },
  { level: 3, space: 4, q: "A cf graph of 80 values gives Q1 = 24 and Q3 = 40. Estimate how many values lie between 24 and 40, and explain.", recap: "Middle half.", ans: "40 — the middle 50%" },
  { level: 3, space: 4, q: "Frequencies 5, 12, k, 8 have the median exactly at the upper boundary of the second class. Find k.", recap: "Unknown frequency.", ans: "17 = (25 + k)/2, so k = 9" },
  { level: 3, space: 4, q: "Two box plots have the same median but different IQRs (5 and 15). What does this tell you?", recap: "Interpret.", ans: "same centre; the second is three times as spread in the middle" },
  { level: 3, space: 4, q: "On a cf graph of 300 values, the 90th percentile is 86 and the 10th percentile is 42. How many values lie between 42 and 86?", recap: "Percentiles.", ans: "240" },
];

export const WS = {
  code: "6.2",
  title: "Presenting Data",
  bigideas: S`Histograms show the shape of a distribution. Cumulative frequency is plotted at upper class boundaries; read across at $\frac n4$, $\frac n2$, $\frac{3n}4$ for Q1, the median and Q3, and at $p\%$ of $n$ for percentiles. A box plot shows the five-number summary. Outliers lie below $Q_1-1.5\,\text{IQR}$ or above $Q_3+1.5\,\text{IQR}$.`,
  goals: ["Build frequency tables and histograms.", "Use cumulative frequency graphs.", "Draw box plots.", "Identify outliers and compare data."],
  curriculum: "SL 4.2",
  vocab: [["Cumulative frequency", "running total"], ["IQR", "Q3 − Q1"], ["Outlier", "beyond 1.5 IQR from the quartiles"]],
  hook: "Line up the class by height. Who is at the middle? Who is a quarter of the way along? Turn that into Q1, the median and Q3.",
  concepts: [
    ["1. Histograms", S`${F({ view: { xmin: 8, xmax: 32, ymin: 0, ymax: 15 }, segs: histo([10, 15, 20, 25, 30], [4, 9, 13, 6]), step: { x: 5, y: 2 } }, 5)} Bar heights = frequencies (equal widths).`],
    ["2. Cumulative frequency", "Plot at upper boundaries; read across, then down."],
    ["3. Box plots", "Five-number summary; mark outliers separately."],
  ],
  tips: ["Upper boundary for cf.", "n/4, n/2, 3n/4.", "Halves method for raw quartiles.", "1.5 × IQR fences.", "Compare centre and spread."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

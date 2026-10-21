// IB AA SL 6.2 — Presenting Data: frequency tables, histograms, cumulative frequency graphs, median/quartiles/percentiles, box plots, outliers
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.2 Presenting Data";
export const ID = "1baa0006-0001-4001-8001-000000000602";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
/** histogram bars from class edges and frequencies */
const histo = (edges, f, color = "violet") => f.map((h, i) => ({ pts: [[edges[i], 0], [edges[i], h], [edges[i + 1], h], [edges[i + 1], 0]], color }));
/** cumulative frequency polygon through the upper class boundaries */
const cfPts = (edges, f) => { let c = 0; return [[edges[0], 0], ...f.map((h, i) => [edges[i + 1], (c += h)])]; };
/** box plot at height y */
const box = (mn, q1, q2, q3, mx, y = 1, h = 0.8, color = "violet") => [
  { pts: [[mn, y], [q1, y]], color }, { pts: [[q3, y], [mx, y]], color },
  { pts: [[q1, y - h / 2], [q3, y - h / 2], [q3, y + h / 2], [q1, y + h / 2], [q1, y - h / 2]], color },
  { pts: [[q2, y - h / 2], [q2, y + h / 2]], color: "red" },
  { pts: [[mn, y - h / 4], [mn, y + h / 4]], color }, { pts: [[mx, y - h / 4], [mx, y + h / 4]], color },
];

export const blocks = () => [
  intro({
    icon: "📊",
    title: "Presenting Data",
    overview: S`A list of numbers says little until it is organised. Frequency tables group data; histograms show the shape of a distribution; cumulative frequency graphs let you read off the median, quartiles and percentiles; box plots summarise and compare data sets at a glance. In this lesson you will build and read each of these, and use the 1.5 × IQR rule to identify outliers.`,
    goals: [
      "organise data in frequency and grouped frequency tables;",
      "draw and interpret histograms with equal class widths;",
      "draw cumulative frequency graphs and read the median, quartiles and percentiles;",
      "find the five-number summary and draw box-and-whisker plots;",
      "identify outliers with the 1.5 × IQR rule and compare distributions.",
    ],
    curriculum: "SL 4.2 (presentation of data: frequency distributions, histograms, cumulative frequency graphs and their use to find median, quartiles, percentiles, range and interquartile range; box-and-whisker diagrams; outliers)",
    prior: [
      ["Put 7, 3, 9, 3, 5 in order and find the middle value.", "3, 3, 5, 7, 9; median 5."],
      ["What is 75% of 120?", "90."],
      [S`Find \(1.5\times(18-10)\).`, "12."],
    ],
    words: [
      ["Frequency", "how many times a value (or class) occurs", "f = 7"],
      ["Cumulative frequency", "running total of frequencies", "4, 11, 19, …"],
      ["Quartiles", "Q1, Q2 (median), Q3 split the ordered data into quarters", "Q1 at 25%"],
      ["Interquartile range", "IQR = Q3 − Q1, the spread of the middle half", "IQR = 8"],
      ["Outlier", "a value below Q1 − 1.5 IQR or above Q3 + 1.5 IQR", "a mark of 2 when Q1 = 40"],
    ],
  }),

  section("📌 Histograms and cumulative frequency", S`
  <p>The times (minutes) 80 students took to finish a puzzle are grouped below. A histogram shows the shape; the cumulative frequency (cf) is plotted at the <em>upper boundary</em> of each class.</p>
  ${table(["Time t (min)", "0 ≤ t < 10", "10 ≤ t < 20", "20 ≤ t < 30", "30 ≤ t < 40", "40 ≤ t < 50"], [["Frequency", "6", "18", "30", "20", "6"], ["Cumulative frequency", "6", "24", "54", "74", "80"]])}
  ${plane({ view: { xmin: -2, xmax: 52, ymin: -1, ymax: 34 }, step: { x: 10, y: 5 }, segs: histo([0, 10, 20, 30, 40, 50], [6, 18, 30, 20, 6]), xlabel: "t (min)", ylabel: "f" }, "Histogram: the distribution is roughly symmetric about 25 minutes")}
  ${plane({ view: { xmin: -2, xmax: 52, ymin: -2, ymax: 84 }, step: { x: 10, y: 10 }, segs: [{ pts: cfPts([0, 10, 20, 30, 40, 50], [6, 18, 30, 20, 6]), color: "violet" }, { pts: [[0, 40], [25.3, 40], [25.3, 0]], color: "red" }, { pts: [[0, 20], [17.8, 20], [17.8, 0]], color: "green" }, { pts: [[0, 60], [33, 60], [33, 0]], color: "green" }], points: [P(25.3, 40, "median ≈ 25.3", "red"), P(17.8, 20, "Q1 ≈ 17.8", "green"), P(33, 60, "Q3 ≈ 33", "green")], xlabel: "t (min)", ylabel: "cf" }, "Cumulative frequency: read across at 20, 40 and 60 (25%, 50%, 75% of 80)")}
  ${keyIdea(S`On a cumulative frequency graph for \(n\) values, read across at \(\frac n4\), \(\frac n2\) and \(\frac{3n}{4}\) to find Q1, the median and Q3; read across at \(p\%\) of \(n\) for the \(p\)th percentile.`)}`),

  section("📌 Box plots and outliers", S`
  <p>The five-number summary is (minimum, Q1, median, Q3, maximum). For raw data, find the median, then the medians of the lower and upper halves (leaving out the middle value when \(n\) is odd). For 3, 5, 7, 8, 9, 11, 12, 15, 30: median 9, Q1 = \(\frac{5+7}{2}=6\), Q3 = \(\frac{12+15}{2}=13.5\).</p>
  <p>IQR = 7.5, so the fences are \(6-11.25=-5.25\) and \(13.5+11.25=24.75\). The value 30 is an outlier: it is plotted as a separate point, and the whisker stops at the largest value inside the fence, 15.</p>
  ${plane({ view: { xmin: 0, xmax: 32, ymin: 0, ymax: 2 }, step: { x: 2, y: 1 }, segs: box(3, 6, 9, 13.5, 15), points: [{ x: 30, y: 1, color: "red", label: "outlier 30" }] }, "Box plot of 3, 5, 7, 8, 9, 11, 12, 15, 30 with the outlier marked")}
  ${plane({ view: { xmin: 30, xmax: 100, ymin: 0, ymax: 3 }, step: { x: 10, y: 1 }, segs: [...box(38, 55, 64, 72, 90, 2, 0.6, "blue"), ...box(45, 60, 70, 76, 96, 1, 0.6, "green")] }, "Comparing two classes' test marks: class B (green) has the higher median; class A (blue) is slightly more spread out")}
  ${watchOut([
    "Plot cumulative frequency at the upper class boundary, not the midpoint.",
    "For grouped data, values read from a cf graph are estimates.",
    "Use the IB halves method for quartiles of raw data; a GDC may agree.",
    "When comparing, mention a measure of centre and a measure of spread, in context.",
  ])}`),

  section("📌 Explore", S`<p>Choose a data set and switch between the histogram, the cumulative frequency curve (move the percentile) and the box plot.</p>`),

  widget("ibPresent", { init: [0, 50] }),

  examples([
    ["Level 1 · Five-number summary", "Find the five-number summary of 12, 15, 9, 21, 17, 14, 10, 18.",
      [S`Ordered: 9, 10, 12, 14, 15, 17, 18, 21.`, S`Median \(\frac{14+15}{2}=14.5\); Q1 = \(\frac{10+12}{2}=11\); Q3 = \(\frac{17+18}{2}=17.5\).`],
      "9, 11, 14.5, 17.5, 21"],
    ["Level 1 · Reading a histogram", "From the histogram, find the number of plants taller than 30 cm and the modal class.",
      ["Classes 30–40 and 40–50 have 9 + 4 = 13 plants.", "The tallest bar is 20–30."],
      "13; 20–30 cm",
      plane({ view: { xmin: -2, xmax: 52, ymin: -1, ymax: 16 }, step: { x: 10, y: 2 }, segs: histo([0, 10, 20, 30, 40, 50], [3, 8, 14, 9, 4]), xlabel: "height (cm)", ylabel: "f" })],
    ["Level 2 · Cumulative frequency", "Use the cumulative frequency graph of 120 runners' times to estimate the median, the IQR and the number taking more than 50 minutes.",
      ["Median at cf 60: about 42 min.", "Q1 at 30: about 36; Q3 at 90: about 47; IQR ≈ 11.", "At 50 min cf ≈ 100, so about 20 runners."],
      "≈ 42; ≈ 11; ≈ 20",
      plane({ view: { xmin: 18, xmax: 72, ymin: -2, ymax: 125 }, step: { x: 5, y: 10 }, segs: [{ pts: [[20, 0], [30, 8], [35, 24], [40, 48], [45, 78], [50, 100], [60, 116], [70, 120]], color: "violet" }], points: [P(42, 60, "(42, 60)", "red")], xlabel: "time (min)", ylabel: "cf" })],
    ["Level 2 · Outliers", "Data have Q1 = 24, Q3 = 36, minimum 5 and maximum 61. Are there any outliers?",
      [S`IQR 12; fences \(24-18=6\) and \(36+18=54\).`, "5 < 6 and 61 > 54: both are outliers."],
      "yes: 5 and 61"],
    ["Level 3 · Comparing distributions", "Two box plots summarise reaction times (ms): before practice (min 210, Q1 250, median 280, Q3 310, max 360) and after (min 200, Q1 230, median 245, Q3 265, max 300). Compare them.",
      ["Medians 280 → 245: typically 35 ms faster after practice.", "IQRs 60 → 35: times are more consistent after practice."],
      "faster and more consistent",
      plane({ view: { xmin: 190, xmax: 370, ymin: 0, ymax: 3 }, step: { x: 20, y: 1 }, segs: [...box(210, 250, 280, 310, 360, 2, 0.6, "blue"), ...box(200, 230, 245, 265, 300, 1, 0.6, "green")] }, "Before (blue) and after (green)")],
  ]),

  practice([
    q("Level 1 · median", "Find the median of 4, 9, 2, 7, 5, 8, 3.", num(5),
      "Order the data.", [S`2, 3, 4, 5, 7, 8, 9.`], S`\(5\)`),
    q("Level 1 · cumulative", "Frequencies are 5, 12, 20, 8. What is the cumulative frequency of the third class?", num(37),
      "Running total.", [S`\(5+12+20\).`], S`\(37\)`),
    q("Level 2 · IQR", "Find the IQR of 3, 6, 7, 10, 12, 15, 18, 20.", num(10),
      "Q1 and Q3 are the medians of the halves.", [S`Q1 = 6.5, Q3 = 16.5.`], S`\(10\)`),
    q("Level 2 · outlier fence", "Q1 = 40 and Q3 = 52. Find the upper fence for outliers.", num(70),
      "Q3 + 1.5 IQR.", [S`\(52+18\).`], S`\(70\)`),
    q("Level 2 · percentile", "On a cumulative frequency graph for 200 people, at which cumulative frequency do you read the 90th percentile?", num(180),
      "90% of 200.", [S`\(0.9\times200\).`], S`\(180\)`),
  ]),

  ...hard([
    ["A missing frequency", "A grouped table has frequencies 7, k, 15, 9 and the median lies at the upper boundary of the second class. Find k.",
      [S`\(n=31+k\); the median is at \(\frac n2\).`, S`cf at the end of class 2 is \(7+k=\frac{31+k}{2}\).`, S`\(14+2k=31+k\Rightarrow k=17\).`],
      S`\(k=17\)`],
    ["Reading two curves", "Cumulative frequency curves for the masses of 100 apples from two orchards are shown. Compare the medians and the IQRs.",
      ["Orchard A (blue): Q1 ≈ 140, median ≈ 150, Q3 ≈ 160 — IQR ≈ 20.", "Orchard B (green): Q1 ≈ 145, median ≈ 160, Q3 ≈ 175 — IQR ≈ 30.", "B's apples are heavier on average but more variable."],
      "B heavier, A more consistent",
      plane({ view: { xmin: 110, xmax: 210, ymin: -2, ymax: 105 }, step: { x: 10, y: 10 }, segs: [{ pts: [[120, 0], [130, 6], [140, 25], [150, 50], [160, 75], [170, 92], [180, 100]], color: "blue" }, { pts: [[120, 0], [135, 10], [145, 25], [160, 50], [175, 75], [190, 94], [200, 100]], color: "green" }], xlabel: "mass (g)", ylabel: "cf" }, "Orchard A (blue) and orchard B (green)")],
  ], [
    q("Level 3 · lower fence", "Q1 = 18 and the lower fence is 3. Find Q3.", num(28),
      "Q1 − 1.5 IQR = 3.", [S`IQR = 10.`], S`\(28\)`),
    q("Level 3 · count above", "In a set of 160 values, the 85th percentile is 72. About how many values exceed 72?", num(24),
      "15% of 160.", [S`\(0.15\times160\).`], S`\(24\)`),
    q("Level 3 · quartile", "Find Q3 of 1, 4, 4, 6, 8, 9, 11, 13, 14, 19, 22 (IB halves method).", num(14),
      "Upper half 11, 13, 14, 19, 22.", [S`Its median is 14.`], S`\(14\)`),
  ]),

  wrapUp({
    qas: [
      ["Why plot cumulative frequency at the upper boundary?", "By the end of a class, all its values have been counted."],
      ["Which graph shows the shape of a distribution?", "A histogram: symmetric, skewed or with more than one peak."],
      ["How do I find quartiles from a cf graph?", "Read across at n/4 and 3n/4 to the curve, then down to the x-axis."],
      ["What does the 1.5 × IQR rule do?", "It gives fences; values outside them are outliers and are plotted separately on a box plot."],
      ["How do I compare two box plots?", "Compare the medians (centre) and the IQRs or ranges (spread), in the context of the data."],
    ],
    summary: [
      "Histograms show shape; cf graphs give median, quartiles, percentiles.",
      "Five-number summary → box plot.",
      "IQR = Q3 − Q1; outliers beyond 1.5 IQR of the quartiles.",
      "Compare centre and spread in context.",
    ],
    next: "6.3 calculates the mean, median and mode, including for grouped data.",
  }),
];

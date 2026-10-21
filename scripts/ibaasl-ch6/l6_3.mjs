// IB AA SL 6.3 — Measures of Central Tendency: mean, median, mode; frequency tables; grouped data estimates; modal class; choosing a measure; missing values
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.3 Measures of Central Tendency";
export const ID = "29913a20-4704-4cd2-a22f-1d67c9648074";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const bars = (pairs, color = "violet", w = 0.6) => pairs.map(([x, h]) => ({ pts: [[x - w / 2, 0], [x - w / 2, h], [x + w / 2, h], [x + w / 2, 0]], color }));
const histo = (edges, f, color = "violet") => f.map((h, i) => ({ pts: [[edges[i], 0], [edges[i], h], [edges[i + 1], h], [edges[i + 1], 0]], color }));
/** dot plot: values stacked */
const dotplot = (xs, color = "violet") => { const seen = {}; return xs.map((x) => ({ x, y: (seen[x] = (seen[x] ?? 0) + 1) * 0.5, color })); };

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Measures of Central Tendency",
    overview: S`A single 'typical' value summarises a data set. The mean uses every value; the median is the middle value; the mode is the most common. In this lesson you will calculate all three from raw data and from frequency tables, estimate the mean of grouped data using class midpoints, find the modal class, choose the most suitable measure, and work backwards from a mean to a missing value.`,
    goals: [
      "find the mean, median and mode of raw data;",
      "find them from a frequency table using \\(\\bar x=\\frac{\\sum fx}{\\sum f}\\);",
      "estimate the mean of grouped data with class midpoints and state the modal class;",
      "choose the most appropriate measure for a data set;",
      "find missing values from a given mean, and combine means of two groups.",
    ],
    curriculum: "SL 4.3 (measures of central tendency: mean, median, mode; estimation of mean from grouped data; modal class; use of GDC)",
    prior: [
      ["Find 3 × 4 + 5 × 2 + 7 × 1.", "29."],
      ["What is the midpoint of the class 20 ≤ x < 30?", "25."],
      ["Put 8, 2, 5, 2, 9, 4 in order.", "2, 2, 4, 5, 8, 9."],
    ],
    words: [
      ["Mean", "\\(\\bar x=\\frac{\\sum x}{n}\\)", "\\(\\frac{2+4+9}{3}=5\\)"],
      ["Median", "the middle value of the ordered data (the \\(\\frac{n+1}{2}\\)th)", "2, 4, 9 → 4"],
      ["Mode", "the most frequent value", "2, 2, 5 → 2"],
      ["Modal class", "the class with the highest frequency", "20–30"],
      ["Midpoint", "centre of a class, used to estimate the mean", "(20 + 30)/2 = 25"],
    ],
  }),

  section("📌 Raw data and frequency tables", S`
  <p>For 4, 7, 7, 8, 10, 12: mean \(\frac{48}{6}=8\); median \(\frac{7+8}{2}=7.5\); mode 7. In a frequency table each value \(x\) occurs \(f\) times, so the mean is \(\frac{\sum fx}{\sum f}\) and the median is the \(\frac{n+1}{2}\)th value found from the cumulative frequencies.</p>
  ${table(["Goals x", "0", "1", "2", "3", "4"], [["Matches f", "4", "9", "7", "3", "2"], ["fx", "0", "9", "14", "9", "8"], ["cf", "4", "13", "20", "23", "25"]])}
  <p>\(\sum f=25\), \(\sum fx=40\): mean \(1.6\). The median is the 13th value: cf reaches 13 at \(x=1\), so the median is 1. The mode is 1.</p>
  ${plane({ view: { xmin: -0.8, xmax: 4.8, ymin: 0, ymax: 10 }, step: { x: 1, y: 1 }, segs: bars([[0, 4], [1, 9], [2, 7], [3, 3], [4, 2]]), points: [P(1.6, 9.5, "mean 1.6", "red")], xlabel: "goals", ylabel: "f" }, "Goals per match: mode 1, median 1, mean 1.6")}
  ${keyIdea(S`\(\bar x=\dfrac{\sum fx}{\sum f}\). The median is the \(\frac{n+1}{2}\)th ordered value; with a frequency table, use cumulative frequency to find it.`)}`),

  section("📌 Grouped data and choosing a measure", S`
  <p>When data are grouped, the exact values are lost. Assume every value sits at its class midpoint to <em>estimate</em> the mean.</p>
  ${table(["Mass m (g)", "40 ≤ m < 50", "50 ≤ m < 60", "60 ≤ m < 70", "70 ≤ m < 80"], [["f", "5", "12", "18", "5"], ["Midpoint", "45", "55", "65", "75"]])}
  <p>\(\bar x\approx\frac{5(45)+12(55)+18(65)+5(75)}{40}=\frac{2430}{40}=60.75\) g. The modal class is \(60\le m<70\).</p>
  ${plane({ view: { xmin: 36, xmax: 84, ymin: 0, ymax: 20 }, step: { x: 5, y: 2 }, segs: histo([40, 50, 60, 70, 80], [5, 12, 18, 5]), points: [P(60.75, 19, "estimated mean 60.75", "red")], xlabel: "m (g)", ylabel: "f" }, "Grouped masses: modal class 60–70 g")}
  ${plane({ view: { xmin: 15, xmax: 125, ymin: 0, ymax: 2 }, step: { x: 10, y: 1 }, points: [...dotplot([22, 25, 25, 27, 28, 30, 31, 33, 120])], vlines: [{ x: 37.9, color: "red", dash: true }, { x: 28, color: "green", dash: true }] }, "House prices (thousands) with one mansion: mean 37.9 (red) vs median 28 (green)")}
  ${table(["Measure", "Best when", "Weakness"], [["mean", "data are roughly symmetric, no outliers", "pulled by extreme values"], ["median", "data are skewed or have outliers", "ignores the size of extreme values"], ["mode", "categorical data, or the most common item", "may not exist or not be unique"]])}
  ${watchOut([
    "Use Σfx ÷ Σf, not Σfx ÷ (number of classes).",
    "A mean from grouped data is only an estimate.",
    "The median is the (n + 1)/2 th value, not (n + 1)/2 itself.",
    "With outliers or skew, prefer the median as the 'typical' value.",
  ])}`),

  section("📌 Explore", S`<p>Move the tenth value. Watch how far the mean moves compared with the median, and when the mode changes.</p>`),

  widget("ibCentre", { init: [12] }),

  examples([
    ["Level 1 · Raw data", "Find the mean, median and mode of 15, 11, 18, 11, 20, 14, 16.",
      [S`Sum 105, so the mean is 15.`, S`Ordered: 11, 11, 14, 15, 16, 18, 20: median 15.`, "Mode 11."],
      "15, 15, 11"],
    ["Level 1 · Frequency table", S`Find the mean number of pets: 0 pets (f = 6), 1 (f = 10), 2 (f = 8), 3 (f = 4), 4 (f = 2).`,
      [S`\(\sum f=30\), \(\sum fx=0+10+16+12+8=46\).`, S`\(\bar x=\frac{46}{30}\approx1.53\).`],
      "≈ 1.53",
      plane({ view: { xmin: -0.8, xmax: 4.8, ymin: 0, ymax: 11 }, step: { x: 1, y: 1 }, segs: bars([[0, 6], [1, 10], [2, 8], [3, 4], [4, 2]]), xlabel: "pets", ylabel: "f" })],
    ["Level 2 · Grouped data", "Estimate the mean and state the modal class: 0 ≤ t < 10 (f = 8), 10 ≤ t < 20 (f = 15), 20 ≤ t < 30 (f = 12), 30 ≤ t < 40 (f = 5).",
      [S`Midpoints 5, 15, 25, 35: \(\sum fx=40+225+300+175=740\).`, S`\(\bar x\approx\frac{740}{40}=18.5\).`, "Modal class 10–20."],
      "≈ 18.5; 10 ≤ t < 20"],
    ["Level 2 · A missing value", "The mean of 6, 9, x, 12, 15 is 11. Find x.",
      [S`Total \(5\times11=55\).`, S`\(42+x=55\).`],
      S`\(x=13\)`],
    ["Level 3 · Combining groups", "Class A (20 students) has mean 72; class B (30 students) has mean 65. Find the mean of all 50, and explain why it is not 68.5.",
      [S`Totals \(1440+1950=3390\).`, S`Mean \(\frac{3390}{50}=67.8\).`, "68.5 averages the two means equally, but B has more students, so it counts more."],
      "67.8",
      plane({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 80 }, step: { x: 1, y: 10 }, segs: [...bars([[1, 72]], "blue"), ...bars([[2, 65]], "green"), ...bars([[3, 67.8]], "violet")], xlabel: "A | B | all", ylabel: "mean" })],
  ]),

  practice([
    q("Level 1 · mean", "Find the mean of 8, 12, 5, 11, 9.", num(9),
      "Sum ÷ 5.", [S`\(\frac{45}{5}\).`], S`\(9\)`),
    q("Level 1 · median", "Find the median of 21, 17, 30, 25, 18, 26.", num(23),
      "Order, then average the middle two.", [S`17, 18, 21, 25, 26, 30.`], S`\(23\)`),
    q("Level 2 · frequency mean", S`Values 1, 2, 3 have frequencies 5, 3, 2. Find the mean.`, num(1.7, 0.001),
      "Σfx ÷ Σf.", [S`\(\frac{5+6+6}{10}\).`], S`\(1.7\)`),
    q("Level 2 · grouped", "Classes 0–10, 10–20, 20–30 have frequencies 2, 5, 3. Estimate the mean.", num(16),
      "Use midpoints 5, 15, 25.", [S`\(\frac{10+75+75}{10}\).`], S`\(16\)`),
    q("Level 2 · choose", "Which measure is best for typical salaries in a company where the director earns 20 times the others?", choice(["median", "mean", "mode", "range"], 0),
      "Which is resistant to an extreme value?", ["The median is not pulled by the director's salary."], "median"),
  ]),

  ...hard([
    ["Unknown frequency", S`Scores 1, 2, 3, 4 have frequencies 3, 7, \(k\), 2, and the mean is 2.5. Find \(k\).`,
      [S`\(\frac{3+14+3k+8}{12+k}=2.5\).`, S`\(25+3k=30+2.5k\Rightarrow k=10\).`],
      S`\(k=10\)`],
    ["A changed value", "The mean of 10 numbers is 24. One number, 30, is replaced by 52. Find the new mean, and explain whether the median could change.",
      [S`New total \(240-30+52=262\), mean \(26.2\).`, "The median may change only if 30 was in the middle of the ordered list or moves past it; it changes by much less than the mean, or not at all."],
      "26.2",
      plane({ view: { xmin: 18, xmax: 32, ymin: 0, ymax: 2 }, step: { x: 1, y: 1 }, vlines: [{ x: 24, color: "gray", dash: true }, { x: 26.2, color: "red", dash: true }], points: [P(24, 1, "old mean 24", "gray"), P(26.2, 1.5, "new mean 26.2", "red")] }, "The mean moves by 22/10 = 2.2")],
  ], [
    q("Level 3 · missing", "The mean of 4, 7, x, 10, x is 8. Find x.", num(9.5, 0.001),
      "Total 40.", [S`\(21+2x=40\).`], S`\(9.5\)`),
    q("Level 3 · combined", "Boys (n = 12) average 160 cm, girls (n = 18) average 155 cm. Find the mean height of all 30.", num(157),
      "Weighted mean.", [S`\(\frac{1920+2790}{30}\).`], S`\(157\)`),
    q("Level 3 · median position", "In a frequency table with Σf = 47, which ordered value is the median?", num(24),
      "(n + 1)/2.", [S`\(\frac{48}{2}\).`], S`the 24th`),
  ]),

  wrapUp({
    qas: [
      ["Why is the grouped mean only an estimate?", "Each value is replaced by its class midpoint; the true values are unknown."],
      ["How do I find the median from a frequency table?", "Find the (n + 1)/2 th position and use the cumulative frequencies to see which value it falls on."],
      ["When should I use the median instead of the mean?", "When the data are skewed or contain outliers."],
      ["How do I find a missing value from the mean?", "Total = mean × n; subtract the known values."],
      ["How do I combine two groups' means?", "Add the totals (mean × size) and divide by the total size — a weighted mean."],
    ],
    summary: [
      "Mean = Σx/n = Σfx/Σf; median = (n + 1)/2 th value; mode = most frequent.",
      "Grouped: estimate with midpoints; modal class.",
      "Median for skew/outliers; mode for categories.",
      "Total = mean × n solves missing-value problems.",
    ],
    next: "6.4 measures spread: range, IQR, variance and standard deviation.",
  }),
];

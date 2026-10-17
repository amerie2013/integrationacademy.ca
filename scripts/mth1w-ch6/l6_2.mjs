// MTH1W 6.2 — One-Variable Data & Statistics (self-study format): mean, median, mode, range, quartiles,
// IQR, box plots, outliers, frequency tables and histograms
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { boxPlot, dotPlot, histogram } from "./figs6.mjs";

export const TITLE = "6.2 One-Variable Data & Statistics";

export const blocks = () => [
  intro({
    icon: "📊",
    title: "One-Variable Data & Statistics",
    overview: String.raw`A list of numbers becomes useful when you can describe it in a few words: where the middle is, how spread out it is, and whether anything is unusual. In this lesson you will find the mean, median and mode, measure spread with the range and the interquartile range, draw box plots, test for outliers, and read histograms — then decide which summary tells the truest story.`,
    goals: [
      "find the mean, median and mode, and choose the best measure of centre;",
      "find the range, quartiles and interquartile range (IQR);",
      "draw and interpret a box plot from a five-number summary;",
      "identify outliers with the 1.5 × IQR rule and describe their effect;",
      "find the mean from a frequency table and read a histogram.",
    ],
    curriculum: "D1.2 (represent and analyse one-variable data: measures of central tendency, spread, quartiles, box plots), D1.3",
    prior: [
      [String.raw`Order from least to greatest: \(7, 3, 9, 3, 5\).`, String.raw`\(3, 3, 5, 7, 9\).`],
      [String.raw`What is the middle of \(4\) and \(9\)?`, String.raw`\(\frac{4+9}{2}=6.5\).`],
      [String.raw`\(3\times12+5\times14=?\)`, String.raw`\(36+70=106\).`],
    ],
    words: [
      ["Mean", "sum ÷ number of values", "the average"],
      ["Median", "middle value of the ordered data", "half below, half above"],
      ["Mode", "most frequent value", "may be none or several"],
      ["Quartiles Q1, Q3", "medians of the lower and upper halves", "split data into quarters"],
      ["IQR", "Q3 − Q1: spread of the middle half", "resistant to outliers"],
      ["Outlier", "a value far from the rest", "beyond 1.5 × IQR from the box"],
    ],
  }),

  section("📌 Measures of centre", String.raw`
  ${table(["Measure", "How to find it", "Best when"], [
    ["Mean", "add all values, divide by how many", "data are fairly symmetric, no outliers"],
    ["Median", "order the data; take the middle (or the average of the two middles)", "there are outliers or the data are skewed (incomes, house prices)"],
    ["Mode", "the most common value", "categorical data, or the most popular size or choice"],
  ])}
  ${keyIdea(String.raw`For \(n\) ordered values the median is in position \(\frac{n+1}{2}\). With \(n=9\) it is the 5th value; with \(n=10\) it is halfway between the 5th and 6th.`)}`),

  section("📌 Spread: range, quartiles and the box plot", String.raw`
  <p>The <strong>range</strong> (max − min) uses only the two most extreme values. The <strong>quartiles</strong> split the ordered data into four equal parts:</p>
  <ol><li>Find the median (Q2). It splits the data into a lower half and an upper half (if \(n\) is odd, leave the median out of both halves).</li>
  <li>Q1 is the median of the lower half; Q3 is the median of the upper half.</li>
  <li>The <strong>five-number summary</strong> is min, Q1, median, Q3, max. The <strong>IQR</strong> \(=Q_3-Q_1\).</li></ol>
  ${dotPlot({ data: [4, 6, 7, 7, 8, 9, 10, 11, 13, 14, 20], lo: 2, hi: 22, step: 2, label: "goals" })}
  ${boxPlot({ data: [4, 6, 7, 7, 8, 9, 10, 11, 13, 14, 20], lo: 2, hi: 22, step: 2, label: "goals", showValues: true }, "Five-number summary 4, 7, 9, 13, 20. Each part of the box plot holds about a quarter of the data.")}
  ${keyIdea(String.raw`<strong>Outliers:</strong> a value is an outlier if it is more than \(1.5\times\text{IQR}\) below \(Q_1\) or above \(Q_3\). Here \(\text{IQR}=6\), so the fences are \(7-9=-2\) and \(13+9=22\): \(20\) is <em>not</em> an outlier.`)}
  <p>Use the explorer: add an extreme value and watch the mean jump while the median barely moves.</p>`),

  widget("statsExplorer"),

  section("📌 Frequency tables and histograms", String.raw`
  <p>When values repeat, a <strong>frequency table</strong> saves writing. To find the mean, multiply each value by its frequency, add, and divide by the total frequency.</p>
  <p>Continuous data are grouped into equal-width <strong>intervals</strong> and shown in a <strong>histogram</strong>: bars touch, and the height shows how many values fall in each interval.</p>
  ${histogram({ bins: [[140, 150, 3], [150, 160, 8], [160, 170, 12], [170, 180, 6], [180, 190, 1]], xlabel: "height (cm)" }, "Heights of 30 students: most are between 160 cm and 170 cm.")}`),

  widget("histogramBins"),

  section("📌 Strategy", watchOut([
    "Always order the data before finding the median or quartiles.",
    "With an even number of values, the median is the mean of the two middle values.",
    "The mean is pulled toward outliers; the median and IQR resist them.",
    "A bar graph has gaps (categories); a histogram's bars touch (continuous intervals).",
  ])),

  examples([
    ["Mean, median, mode", String.raw`The numbers of minutes eight students spent on homework were \(35, 50, 20, 45, 50, 60, 40, 30\). Find the mean, median and mode.`,
      [String.raw`Sum \(=330\); mean \(=330\div8=41.25\) min.`, String.raw`Ordered: \(20, 30, 35, 40, 45, 50, 50, 60\). Median \(=\frac{40+45}{2}=42.5\) min.`, String.raw`Mode \(=50\) min (twice).`],
      String.raw`mean \(41.25\), median \(42.5\), mode \(50\) minutes`],
    ["Five-number summary and box plot", String.raw`Find the five-number summary and IQR of \(12, 18, 7, 15, 21, 9, 16, 25, 14\) and draw a box plot.`,
      [String.raw`Ordered: \(7, 9, 12, 14, 15, 16, 18, 21, 25\); \(n=9\), median is the 5th value: \(15\).`, String.raw`Lower half \(7, 9, 12, 14\): \(Q_1=\frac{9+12}{2}=10.5\). Upper half \(16, 18, 21, 25\): \(Q_3=\frac{18+21}{2}=19.5\).`, String.raw`IQR \(=19.5-10.5=9\).`],
      String.raw`\(7, 10.5, 15, 19.5, 25\); IQR \(=9\)`,
      boxPlot({ five: [7, 10.5, 15, 19.5, 25], lo: 4, hi: 28, step: 2, showValues: true })],
    ["Comparing two box plots", String.raw`Class A's quiz results have five-number summary \(8, 12, 15, 17, 20\); class B's are \(5, 13, 14, 16, 19\). Compare the classes.`,
      ["Centre: A's median (15) is higher than B's (14).", String.raw`Spread: IQRs are \(17-12=5\) for A and \(16-13=3\) for B — B's middle half is more consistent.`, "B's range (14) is wider than A's (12) because of one low score."],
      "A scored slightly higher; B's middle half was more consistent"],
    ["Outliers and the best measure", String.raw`Weekly earnings (dollars) of seven student workers: \(80, 95, 100, 110, 115, 120, 400\). Is \(400\) an outlier? Which measure of centre is best?`,
      [String.raw`\(Q_1=95\), median \(=110\), \(Q_3=120\); IQR \(=25\).`, String.raw`Upper fence \(=120+1.5(25)=157.5\); \(400>157.5\): outlier.`, String.raw`Mean \(=1020\div7\approx145.7\) — higher than six of the seven values. The median, \(110\), is more typical.`],
      String.raw`yes, \(400\) is an outlier; use the median (\(110\) dollars)`],
    ["Mean from a frequency table", String.raw`A survey of \(25\) families recorded the number of children: \(1\) child: \(8\) families; \(2\): \(10\); \(3\): \(5\); \(4\): \(2\). Find the mean and median.`,
      [String.raw`Total children \(=1(8)+2(10)+3(5)+4(2)=8+20+15+8=51\).`, String.raw`Mean \(=51\div25=2.04\).`, String.raw`Median: the 13th family. The first \(8\) have 1 child; families 9–18 have 2, so the median is \(2\).`],
      String.raw`mean \(2.04\), median \(2\) children`],
  ]),

  practice([
    q("median", String.raw`Find the median of \(14, 9, 22, 17, 11, 20\).`, num(15.5),
      "Order, then average the two middle values.", [String.raw`\(9, 11, 14, 17, 20, 22\): \(\frac{14+17}{2}=15.5\).`], String.raw`\(15.5\)`),
    q("Q1", String.raw`Find \(Q_1\) for \(3, 5, 6, 8, 10, 12, 13, 15\).`, num(5.5),
      "Lower half: the first four values.", [String.raw`Lower half \(3, 5, 6, 8\): \(\frac{5+6}{2}=5.5\).`], String.raw`\(5.5\)`),
    q("IQR", String.raw`A box plot shows min \(20\), \(Q_1=34\), median \(41\), \(Q_3=52\), max \(70\). Find the IQR.`, num(18),
      "IQR = Q3 − Q1.", [String.raw`\(52-34=18\).`], String.raw`\(18\)`),
    q("missing value", String.raw`Four test marks are \(72, 80, 68, 85\). What mark is needed on a fifth test for a mean of \(78\)?`, num(85),
      "The five marks must add to 5 × 78.", [String.raw`\(5\times78=390\); \(390-305=85\).`], String.raw`\(85\)`),
    q("outlier", String.raw`For data with \(Q_1=40\) and \(Q_3=56\), which value is an outlier?`, choice(["\\(85\\)", "\\(75\\)", "\\(20\\)", "\\(60\\)"], 0),
      "Fences: Q1 − 1.5·IQR and Q3 + 1.5·IQR.", [String.raw`IQR \(=16\); fences \(40-24=16\) and \(56+24=80\). Only \(85\) is outside.`], String.raw`\(85\)`),
  ]),

  wrapUp({
    qas: [
      ["Why use the IQR instead of the range?", "The range depends only on the two most extreme values, so one unusual value changes it a lot. The IQR measures the middle half and ignores the extremes."],
      ["What does a long whisker tell me?", "The values in that quarter of the data are spread over a wide interval — the data are stretched (skewed) in that direction."],
      ["Can the mean be a value that never appears in the data?", "Yes. The mean number of children can be 2.04 even though no family has 2.04 children. It is a balance point, not a data value."],
      ["When is the mode the best measure?", "For categorical data (most popular colour) or when you need the most common size, like a store ordering shoes."],
      ["Do I include the median in the halves when n is odd?", "In this course, no: leave the median out and find the medians of the values below and above it. Some calculators use other rules, so small differences are possible."],
    ],
    summary: [
      "Centre: mean (sum ÷ n), median (middle), mode (most frequent).",
      "Spread: range, and IQR = Q3 − Q1 for the middle half.",
      "Box plot: min, Q1, median, Q3, max; outliers beyond 1.5 × IQR.",
      "Outliers pull the mean, not the median.",
      "Frequency tables: multiply value × frequency; histograms show continuous data in touching bars.",
    ],
    next: "6.3 looks at two-variable data: scatter plots and lines of best fit.",
  }),
];

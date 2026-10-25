// MDM4U 5.6 — Quartiles, Percentiles & Box Plots: quartiles (median of each half), the five-number summary,
// interquartile range, outliers by the 1.5 × IQR rule, box plots (modified, with outliers), comparing box plots,
// percentiles and percentile rank, deciles
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, boxPlotSvg, dotPlotSvg } from "./lib.mjs";
import { quartiles, median, fences, pctRank, pctVal } from "../mdm4u/count.mjs";

export const TITLE = "5.6 Quartiles, Percentiles & Box Plots";
export const ID = "0e07f833-ec60-44b9-85a3-f7059ca0f0f3";
const S = String.raw;

const d1 = [3, 5, 7, 8, 9, 11, 13, 14, 16, 18, 25];
const d2 = [12, 15, 17, 18, 20, 21, 23, 24, 26, 48];
const [a1, m1, b1] = quartiles(d1), [a2, m2, b2] = quartiles(d2), [lf2, uf2] = fences(d2);
const d4 = [41, 44, 47, 50, 52, 53, 55, 58, 60, 61, 63, 64, 66, 68, 70, 72, 75, 79, 83, 90];
const show = [6, 9, 10, 12, 13, 13, 15, 16, 18, 19, 21, 24];

export const blocks = () => [
  intro({
    icon: "📦",
    title: "Quartiles, Percentiles & Box Plots",
    overview: S`The median splits ordered data in half. The <strong>quartiles</strong> split it into quarters: \(Q_1\) is the median of the lower half and \(Q_3\) the median of the upper half. Together with the minimum, median and maximum they form the <strong>five-number summary</strong>, drawn as a <strong>box plot</strong>. The <strong>interquartile range</strong> \(IQR=Q_3-Q_1\) measures the spread of the middle 50% and is not affected by outliers, and the 1.5 × IQR rule identifies outliers. <strong>Percentiles</strong> describe where a value stands among all the data.`,
    goals: [
      "find the quartiles, five-number summary and interquartile range;",
      "identify outliers using the fences Q₁ − 1.5 IQR and Q₃ + 1.5 IQR;",
      "draw and interpret box plots, including outliers;",
      "compare data sets with box plots;",
      "calculate percentile ranks and find the value at a percentile.",
    ],
    curriculum: "D1.2 (quartiles, percentiles, interquartile range, outliers); D1.3 (box plots); D1.5 (interpreting and comparing)",
    prior: [
      ["Median of 3, 5, 7, 8, 9?", "7."],
      ["Median of 21, 23, 24, 26?", "23.5."],
      ["1.5 × 7 = ?", "10.5."],
    ],
    words: [
      ["Quartiles Q₁, Q₂, Q₃", "the values that split ordered data into four equal parts", "Q₂ is the median"],
      ["IQR", "Q₃ − Q₁: the range of the middle 50%", "24 − 17 = 7"],
      ["Outlier", "a value below Q₁ − 1.5 IQR or above Q₃ + 1.5 IQR", "48 when the upper fence is 34.5"],
      ["Percentile rank", "the percent of the data below a value", "the 83rd percentile"],
    ],
  }),

  section("📌 Quartiles and the box plot", S`
  <p>Order the data and find the median. When \(n\) is odd, leave the median out of both halves. \(Q_1\) and \(Q_3\) are the medians of the lower and upper halves.</p>
  ${fig(dotPlotSvg(show, { min: 4, max: 26, step: 2, marks: [[quartiles(show)[0], "Q₁", "violet"], [median(show), "median", "green"], [quartiles(show)[2], "Q₃", "violet"]] }), "12 values: 3 values in each quarter")}
  ${fig(boxPlotSvg([{ data: show }], { min: 4, max: 26, step: 2 }), "the same data as a box plot: whiskers to the minimum and maximum")}
  ${table(["Step", "Rule"], [["fences", "lower \\(Q_1-1.5\\,IQR\\), upper \\(Q_3+1.5\\,IQR\\)"], ["outliers", "values outside the fences, drawn as separate points"], ["whiskers", "extend to the smallest and largest values that are not outliers"]])}`),

  section("📌 Percentiles", S`
  <p>The <strong>percentile rank</strong> of a value \(x\) in \(n\) data values, where \(b\) values are below \(x\) and \(e\) values equal \(x\), is \[PR=\frac{b+0.5e}{n}\times100.\] To find the value at the \(P\)th percentile, compute \(L=\frac{P}{100}\,n\). If \(L\) is a whole number, average the \(L\)th and \((L+1)\)th values; otherwise round \(L\) up and take that value. Deciles are the 10th, 20th, …, 90th percentiles; \(Q_1\) and \(Q_3\) are close to the 25th and 75th.</p>
  ${keyIdea(S`A percentile is a position, not a mark: scoring at the 90th percentile means doing better than about 90% of the group, whatever the actual mark.`)}`),

  section("📌 Explore", S`<p>Move the largest value. When it passes the upper fence it becomes an outlier, and the whisker stops at the next value. Notice that the quartiles hardly change.</p>`),

  widget("boxPlotLab", { init: 52 }),

  section("📌 Watch out", watchOut([
    "Order the data first.",
    "For odd n, the median belongs to neither half when finding Q₁ and Q₃.",
    "Different textbooks and calculators use slightly different quartile rules; say which you use.",
    "The percentile rank uses the number of values below, plus half of the equal ones.",
  ])),

  examples([
    ["Five-number summary (odd n)", `Find the five-number summary and IQR of the numbers of books read by 11 students: ${d1.join(", ")}.`,
      [S`Median: 6th value \(=${m1}\).`, S`Lower half 3, 5, 7, 8, 9: \(Q_1=${a1}\). Upper half 13, 14, 16, 18, 25: \(Q_3=${b1}\).`, S`\(IQR=${b1}-${a1}=${b1 - a1}\).`],
      `3, ${a1}, ${m1}, ${b1}, 25; IQR ${b1 - a1}`],
    ["Outliers and a box plot", `Ten delivery times (min): ${d2.join(", ")}. Find the quartiles, the fences and any outliers. Draw the box plot.`,
      [S`Median \(\frac{20+21}{2}=${m2}\); \(Q_1=${a2}\); \(Q_3=${b2}\); \(IQR=${b2 - a2}\).`, S`Fences: \(${a2}-1.5(${b2 - a2})=${lf2}\) and \(${b2}+1.5(${b2 - a2})=${uf2}\).`, S`48 is above ${uf2}: an outlier. The upper whisker stops at 26.`],
      "48 is an outlier",
      fig(boxPlotSvg([{ data: d2 }], { min: 10, max: 50, step: 5, xlabel: "delivery time (min)" }))],
    ["Percentile rank", "In a class of 30, a score of 82 is higher than 24 other scores, and one other student also scored 82. Find the percentile rank of 82.",
      [S`\(b=24\), \(e=2\) (two scores of 82).`, S`\(PR=\frac{24+0.5(2)}{30}\times100=\frac{25}{30}\times100\approx83.3\).`],
      "about the 83rd percentile"],
    ["Value at a percentile", `Twenty marks in order: ${d4.join(", ")}. Find the 80th percentile and the 35th percentile.`,
      [S`80th: \(L=0.8(20)=16\), a whole number: average the 16th and 17th values: \(\frac{72+75}{2}=${pctVal(d4, 80)}\).`, S`35th: \(L=0.35(20)=7\): average the 7th and 8th: \(\frac{55+58}{2}=${pctVal(d4, 35)}\).`],
      `${pctVal(d4, 80)} and ${pctVal(d4, 35)}`],
    ["Comparing box plots", "Two classes wrote the same test. Class A: min 38, Q₁ 55, median 64, Q₃ 72, max 91. Class B: min 47, Q₁ 60, median 66, Q₃ 70, max 84. Compare the classes.",
      [S`Centre: B's median (66) is a little higher than A's (64).`, S`Spread: A's IQR is 17, B's is 10; A's range is 53, B's is 37. Class B is more consistent.`, S`About 25% of A scored below 55, but only about 25% of B scored below 60.`],
      "B slightly higher and much less spread out",
      fig(boxPlotSvg([{ five: [38, 55, 64, 72, 91], label: "Class A" }, { five: [47, 60, 66, 70, 84], label: "Class B" }], { min: 30, max: 100, step: 10 }))],
  ]),

  practice([
    q("Q1", "Find Q₁ of 4, 6, 9, 10, 13, 15, 18, 21.", num(7.5), "Median of 4, 6, 9, 10.", [S`\(\frac{6+9}{2}=7.5\).`], "7.5"),
    q("IQR", "Find the IQR of 4, 6, 9, 10, 13, 15, 18, 21.", num(9), "Q₃ = median of 13, 15, 18, 21.", [S`\(16.5-7.5=9\).`], "9"),
    q("fence", "Q₁ = 30 and Q₃ = 42. What is the upper fence for outliers?", num(60), "Q₃ + 1.5 IQR.", [S`\(42+1.5(12)=60\).`], "60"),
    q("PR", "In a group of 40, 30 values are below x and 2 equal x. Find the percentile rank of x.", num(77.5, 0.05), "(b + 0.5e)/n × 100.", [S`\(\frac{31}{40}\times100=77.5\).`], "77.5"),
    q("box", "In a box plot, the box shows…", choice(["the middle 50% of the data", "all the data", "the values within one standard deviation", "the outliers"], 0), "From Q₁ to Q₃.", ["The interquartile range."], "the middle 50% of the data"),
  ]),

  ...hard([
    ["What an outlier changes", "A data set of 12 values has min 9, Q₁ = 18, median 24, Q₃ = 30 and max 61; the second-largest value is 44. (a) Is 61 an outlier? (b) Describe the box plot. (c) If 61 were mistyped as 100, which of the five numbers and which of the mean, median, IQR and range would change?",
      [S`(a) \(IQR=12\); upper fence \(30+18=48\); 61 > 48: an outlier. Lower fence \(18-18=0\): no low outliers.`, S`(b) Box from 18 to 30, median line at 24, left whisker to 9, right whisker to 44, and a separate point at 61.`, S`(c) Only the maximum, the mean and the range change; the quartiles, median and IQR do not — they are resistant.`],
      "61 is an outlier; only max, mean and range change",
      fig(boxPlotSvg([{ five: [9, 18, 24, 30, 44], outliers: [61] }], { min: 0, max: 70, step: 10 }))],
    ["Percentiles in a large group", "On a provincial test written by 400 students, 312 scored below 76 and 8 scored exactly 76. (a) Find the percentile rank of 76. (b) A scholarship goes to students at or above the 95th percentile. About how many students qualify?",
      [S`(a) \(\frac{312+0.5(8)}{400}\times100=79\).`, S`(b) The top 5% of 400 is \(0.05(400)=20\) students.`],
      "(a) 79th percentile; (b) about 20 students"],
  ], [
    q("hard", "Q₁ = 42 and Q₃ = 58. What is the largest whole-number value that would be a low outlier?", num(17), "Lower fence = 42 − 24.", [S`Fence 18; values below 18.`], "17"),
    q("hard", "Of 500 students, 380 scored below a mark and 10 scored exactly that mark. Find its percentile rank.", num(77), "(380 + 5)/500.", [S`\(\frac{385}{500}\times100=77\).`], "77"),
    q("hard", `For the 20 marks ${d4.join(", ")}, find the 90th percentile.`, num(pctVal(d4, 90)), "L = 18: average the 18th and 19th.", [S`\(\frac{79+83}{2}=81\).`], `${pctVal(d4, 90)}`),
  ]),

  wrapUp({
    qas: [
      ["How do I find Q₁ and Q₃?", "Find the medians of the lower and upper halves of the ordered data."],
      ["What is the IQR?", "Q₃ − Q₁, the spread of the middle 50%."],
      ["How do I test for outliers?", "Values below Q₁ − 1.5 IQR or above Q₃ + 1.5 IQR."],
      ["What does a box plot show?", "The five-number summary (and outliers) at a glance."],
      ["What does the 70th percentile mean?", "About 70% of the data are below that value."],
    ],
    summary: [
      "Five-number summary: min, Q₁, median, Q₃, max.",
      "IQR = Q₃ − Q₁; fences Q₁ − 1.5 IQR, Q₃ + 1.5 IQR.",
      "Box plots compare centre and spread quickly.",
      "PR = (b + 0.5e)/n × 100.",
    ],
    next: "5.7 looks at graphs of whole distributions — histograms, stem-and-leaf plots, bar and circle graphs — and at their shapes.",
  }),
];

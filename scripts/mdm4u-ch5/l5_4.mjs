// MDM4U 5.4 — Measures of Central Tendency: mean (population μ, sample x̄), median, mode, the effect of outliers,
// weighted means, the mean and modal class of grouped data, and choosing the most suitable measure
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, dotPlotSvg, barsSvg, tableSvg } from "./lib.mjs";
import { mean, median, modes, sum } from "../mdm4u/count.mjs";

export const TITLE = "5.4 Measures of Central Tendency";
export const ID = "f97a5d5e-2cab-4171-b66e-2001cdf1345c";
const S = String.raw;

const e1 = [7, 9, 12, 12, 14, 15, 18, 21];
const pay = [38, 41, 42, 45, 45, 48, 52, 210];
const gm = [5, 15, 25, 35, 45], gf = [5, 14, 12, 6, 3], gsum = sum(gm.map((m, i) => m * gf[i])), gn = sum(gf);
const r2 = (v) => Math.round(v * 100) / 100;

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Measures of Central Tendency",
    overview: S`A measure of central tendency is a single value that describes the centre of a data set. The <strong>mean</strong> is the sum divided by the number of values, the <strong>median</strong> is the middle value when the data are in order, and the <strong>mode</strong> is the most frequent value. Each has strengths: the mean uses every value but is pulled by outliers, the median resists outliers, and the mode is the only one that works for categorical data. Weighted means and grouped-data means extend the idea.`,
    goals: [
      "calculate the mean, median and mode of a data set;",
      "use the notation μ (population) and x̄ (sample);",
      "describe the effect of outliers on each measure;",
      "calculate weighted means and the mean of grouped data;",
      "choose and justify the most suitable measure.",
    ],
    curriculum: "D1.1 (numerical summaries: mean, median, mode, weighted mean; grouped data); D1.5 (interpreting summaries)",
    prior: [
      ["Order 15, 9, 12, 7.", "7, 9, 12, 15."],
      ["Mean of 4 and 9?", "6.5."],
      ["0.3 × 80 + 0.7 × 70 = ?", "73."],
    ],
    words: [
      ["Mean", "Σx ÷ n (x̄ for a sample, μ for a population)", "mean of 2, 4, 9 is 5"],
      ["Median", "the middle value of ordered data (average of the two middle values if n is even)", "median of 2, 4, 9, 11 is 6.5"],
      ["Mode", "the most frequent value (may be none or several)", "mode of 3, 5, 5, 8 is 5"],
      ["Outlier", "a value far from the rest", "210 among salaries of 38 to 52"],
    ],
  }),

  section("📌 Three centres", S`
  \[\bar x=\frac{\sum x}{n}\qquad \mu=\frac{\sum x}{N}\qquad \text{median: position }\tfrac{n+1}{2}\text{ in ordered data}\]
  ${fig(dotPlotSvg(pay, { min: 30, max: 220, step: 20, marks: [[mean(pay), `mean ${r2(mean(pay))}`, "red"], [median(pay), "median 45", "green"]], xlabel: "salary (thousands of dollars)" }), "one large salary pulls the mean far to the right; the median stays with the typical values")}
  ${table(["Measure", "Best when", "Weakness"], [["mean", "data are roughly symmetric, no outliers", "pulled toward outliers and long tails"], ["median", "data are skewed or have outliers (incomes, house prices)", "ignores the size of extreme values"], ["mode", "categorical data, or the most common size", "may not exist or may not be central"]])}`),

  section("📌 Weighted and grouped data", S`
  <p>A <strong>weighted mean</strong> gives each value a weight: \(\bar x_w=\frac{\sum w x}{\sum w}\). For <strong>grouped data</strong> (a frequency table of intervals), each interval is represented by its midpoint \(m\): \(\bar x\approx\frac{\sum f m}{n}\). The interval with the highest frequency is the <strong>modal class</strong>, and the median lies in the interval containing the \(\frac{n}{2}\)th value.</p>
  ${keyIdea(S`A grouped-data mean is an <em>estimate</em>: we assume the values in each interval are centred at its midpoint.`)}`),

  section("📌 Explore", S`<p>Drag the largest value away from the rest. Watch the mean chase the outlier while the median and mode stay put.</p>`),

  widget("centralTendency", { init: "wages" }),

  section("📌 Watch out", watchOut([
    "Order the data before finding the median.",
    "With an even number of values, the median is the mean of the two middle values.",
    "A data set can have no mode, one mode, or several modes.",
    "For a weighted mean, divide by the sum of the weights, not by the number of values.",
  ])),

  examples([
    ["Mean, median, mode", `Find the mean, median and mode of the numbers of hours eight students volunteered: ${e1.join(", ")}.`,
      [S`\(\bar x=\frac{${sum(e1)}}{8}=${mean(e1)}\).`, S`Middle two values 12 and 14: median \(=13\).`, S`12 appears twice: mode 12.`],
      `mean ${mean(e1)}, median ${median(e1)}, mode ${modes(e1)[0]}`],
    ["Effect of an outlier", `The salaries (thousands of dollars) at a small firm are ${pay.join(", ")}. Find the mean and median. Which better describes a typical salary?`,
      [S`\(\bar x=\frac{${sum(pay)}}{8}=${mean(pay)}\).`, S`Median: \(\frac{45+45}{2}=45\).`, S`Only one person earns more than 52; the mean is inflated by the owner's 210. The median is more typical.`],
      `mean ${mean(pay)}, median 45 — the median`],
    ["Weighted mean", "A course mark is 50% tests, 20% assignments and 30% final exam. Rania has 78 on tests, 85 on assignments and 70 on the exam. Find her course mark.",
      [S`\(0.5(78)+0.2(85)+0.3(70)\).`, S`\(=39+17+21=77\).`],
      "77"],
    ["Grouped data", "The table shows commute times for 40 workers. Estimate the mean and state the modal class and the class containing the median.",
      [S`Midpoints 5, 15, 25, 35, 45.`, S`\(\sum fm=${gm.map((m, i) => `${gf[i]}(${m})`).join("+")}=${gsum}\).`, S`\(\bar x\approx\frac{${gsum}}{${gn}}=${gsum / gn}\) min.`, S`Modal class 10–20 (14 workers). Cumulative 5, 19, 31: the 20th and 21st values are in 20–30.`],
      `mean ≈ ${gsum / gn} min; modal class 10–20; median in 20–30`,
      fig(tableSvg([["time (min)", "0–10", "10–20", "20–30", "30–40", "40–50"], ["workers", ...gf.map(String)]]))],
    ["Choosing a measure", "Which measure best describes (a) the most popular phone brand in a class; (b) home prices in a city; (c) the marks on a test with a roughly symmetric distribution?",
      [S`(a) Categorical: mode.`, S`(b) Skewed by a few very expensive homes: median.`, S`(c) Symmetric, no outliers: mean.`],
      "mode; median; mean"],
  ]),

  practice([
    q("mean", "Find the mean of 4, 8, 9, 11, 13.", num(9), "Sum ÷ 5.", [S`\(\frac{45}{5}=9\).`], "9"),
    q("median", "Find the median of 3, 5, 8, 10, 14, 20.", num(9), "Average the two middle values.", [S`\(\frac{8+10}{2}=9\).`], "9"),
    q("weighted", "A mark is 20% quiz (90), 50% test (72) and 30% project (80). Find the weighted mean.", num(78), "Σwx.", [S`\(18+36+24=78\).`], "78"),
    q("grouped", "Intervals 0–10, 10–20, 20–30 have frequencies 4, 10, 6. Estimate the mean.", num(16), "Use midpoints 5, 15, 25.", [S`\(\frac{4(5)+10(15)+6(25)}{20}=\frac{320}{20}=16\).`], "16"),
    q("outlier", "Adding one very large value to a data set changes which measure the most?", choice(["the mean", "the median", "the mode", "none of them"], 0), "Which uses the size of every value?", ["The mean is pulled toward the outlier."], "the mean"),
  ]),

  ...hard([
    ["The mark needed", "Jordan's mean on five tests is 74. What mark does he need on the sixth test to raise his mean to 76?",
      [S`Total so far \(5(74)=370\).`, S`Needed total \(6(76)=456\).`, S`\(456-370=86\).`],
      "86"],
    ["Combining groups", "Class A has 24 students with a mean of 71; class B has 30 students with a mean of 80. Find the mean of all 54 students. Why is it not 75.5?",
      [S`Totals: \(24(71)=1704\) and \(30(80)=2400\).`, S`\(\frac{1704+2400}{54}=\frac{4104}{54}=76\).`, S`75.5 is the mean of the two means; it ignores that class B is larger, so B's mean carries more weight.`],
      "76",
      fig(barsSvg([71, 80, 76], { labels: ["A (24)", "B (30)", "all (54)"], top: true, ymax: 90, ylabel: "mean mark" }))],
  ], [
    q("hard", "The mean of 8 numbers is 15. When one number is removed, the mean of the rest is 14. What number was removed?", num(22), "Compare the totals.", [S`\(8(15)-7(14)=120-98=22\).`], "22"),
    q("hard", "12 students have mean 68 and 18 students have mean 78. Find the mean of all 30.", num(74), "Weighted by size.", [S`\(\frac{816+1404}{30}=74\).`], "74"),
    q("hard", "Remove the smallest and the largest value from 2, 9, 10, 11, 12, 13, 40 and find the mean of the rest (a trimmed mean).", num(11), "Mean of 9 to 13.", [S`\(\frac{55}{5}=11\).`], "11"),
  ]),

  wrapUp({
    qas: [
      ["When is the median better than the mean?", "When the data are skewed or have outliers."],
      ["What if there are two middle values?", "The median is their mean."],
      ["How is a weighted mean calculated?", "Σwx ÷ Σw."],
      ["How do I estimate the mean of grouped data?", "Use the interval midpoints: Σfm ÷ n."],
      ["Which measure works for categories?", "The mode."],
    ],
    summary: [
      "x̄ = Σx/n (sample), μ = Σx/N (population).",
      "Median: middle of ordered data; resistant to outliers.",
      "Mode: most frequent; the only centre for categorical data.",
      "Weighted: Σwx/Σw. Grouped: Σfm/n.",
    ],
    next: "5.5 measures how spread out the data are: range, variance and standard deviation.",
  }),
];

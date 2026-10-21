// IB AA SL 6.5 — Chapter 6 Review: sampling, presenting data, central tendency, dispersion
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, hard, plane } from "./lib.mjs";

export const TITLE = "6.5 Chapter 6 Review";
export const ID = "1baa0006-0001-4001-8001-000000000605";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const histo = (edges, f, color = "violet") => f.map((h, i) => ({ pts: [[edges[i], 0], [edges[i], h], [edges[i + 1], h], [edges[i + 1], 0]], color }));
const box = (mn, q1, q2, q3, mx, y = 1, h = 0.6, color = "violet") => [
  { pts: [[mn, y], [q1, y]], color }, { pts: [[q3, y], [mx, y]], color },
  { pts: [[q1, y - h / 2], [q3, y - h / 2], [q3, y + h / 2], [q1, y + h / 2], [q1, y - h / 2]], color },
  { pts: [[q2, y - h / 2], [q2, y + h / 2]], color: "red" },
];

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 6 Review",
    overview: S`This review connects the chapter: collecting data fairly, presenting it, and summarising it with measures of centre and spread. The examples combine skills the way exam questions do; the practice and hard-level questions are exam style.`,
    goals: [
      "choose and evaluate sampling methods;",
      "read and draw histograms, cumulative frequency graphs and box plots;",
      "calculate and choose measures of central tendency;",
      "calculate measures of dispersion and the effect of changing the data;",
      "compare distributions in context.",
    ],
    curriculum: "SL 4.1–4.3 (sampling, presentation of data, measures of central tendency and dispersion)",
    prior: [
      ["What type of sample keeps the proportions of each group?", "Stratified."],
      ["Where do you read the median on a cf graph for 60 values?", "At a cumulative frequency of 30."],
      ["Data have SD 5. Every value is doubled. New SD?", "10."],
    ],
    words: [
      ["6.1", "sampling and data collection", ""],
      ["6.2", "presenting data", ""],
      ["6.3", "mean, median, mode", ""],
      ["6.4", "range, IQR, standard deviation", ""],
      ["Compare", "centre + spread, in context", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Question", "Tool"], [
    ["fair sample", "random; stratified in proportion; avoid convenience"],
    ["shape", "histogram"],
    ["median, quartiles, percentiles", "cumulative frequency graph (read across at n/4, n/2, 3n/4, p% of n)"],
    ["summary and outliers", "five-number summary, box plot, fences Q1 − 1.5 IQR and Q3 + 1.5 IQR"],
    ["centre", S`mean \(\frac{\sum fx}{\sum f}\) (midpoints for grouped data), median, mode`],
    ["spread", "range, IQR, standard deviation (GDC)"],
    ["changed data", "ax + b: centre → a(centre) + b; spread × a"],
  ])}
  ${plane({ view: { xmin: -2, xmax: 62, ymin: -1, ymax: 30 }, step: { x: 10, y: 5 }, segs: histo([0, 10, 20, 30, 40, 50, 60], [4, 11, 25, 22, 10, 8]), xlabel: "time (min)", ylabel: "f" }, "Example 3: homework times of 80 students")}
  ${keyIdea("A complete comparison of two data sets uses one measure of centre and one measure of spread, each interpreted in the context of the data.")}`),

  section("📌 Explore", S`<p>Use the explorer to check the medians and quartiles read from the cumulative frequency graphs in the examples.</p>`),

  widget("ibPresent", { init: [1, 50] }),

  examples([
    ["Level 1 · Stratified sample", "A gym has 180 morning and 120 evening members. A stratified sample of 25 is needed. How many evening members?",
      [S`\(\frac{120}{300}\times25=10\).`],
      "10"],
    ["Level 2 · Box plot and outliers", "Draw a box plot for 11, 14, 15, 15, 17, 18, 19, 21, 22, 38 and decide whether 38 is an outlier.",
      [S`Median \(\frac{17+18}{2}=17.5\); Q1 = 15; Q3 = 21; IQR 6.`, S`Upper fence \(21+9=30\): 38 is an outlier.`],
      "38 is an outlier",
      plane({ view: { xmin: 8, xmax: 40, ymin: 0, ymax: 2 }, step: { x: 2, y: 1 }, segs: box(11, 15, 17.5, 21, 22), points: [{ x: 38, y: 1, color: "red", label: "38" }] })],
    ["Level 2 · Grouped data", "For the histogram on the previous page (classes of width 10 from 0 to 60, frequencies 4, 11, 25, 22, 10, 8), estimate the mean and state the modal class.",
      [S`\(\sum fx=20+165+625+770+450+440=2470\).`, S`\(\bar x\approx\frac{2470}{80}\approx30.9\) min.`, "Modal class 20–30."],
      "≈ 30.9 min; 20–30"],
    ["Level 2 · Changing the data", "Scores have mean 64 and SD 12. They are scaled by y = 0.5x + 40. Find the new mean and SD.",
      [S`Mean \(0.5(64)+40=72\).`, S`SD \(0.5(12)=6\).`],
      "72; 6",
      plane({ view: { xmin: 40, xmax: 90, ymin: 0, ymax: 3 }, step: { x: 5, y: 1 }, segs: [{ pts: [[52, 2], [76, 2]], color: "blue" }, { pts: [[66, 1], [78, 1]], color: "green" }], points: [P(64, 2, "before: 64 ± 12", "blue"), P(72, 1, "after: 72 ± 6", "green")] }, "Mean ± 1 SD before (blue) and after (green) scaling")],
    ["Level 3 · Comparing with cf graphs", "The cumulative frequency graphs of 100 boys' and 100 girls' reaction times are shown. Compare the two groups.",
      ["Boys (blue): median ≈ 250 ms, IQR ≈ 300 − 220 = 80.", "Girls (green): median ≈ 270 ms, IQR ≈ 300 − 245 = 55.", "Boys are slightly faster on average; girls are more consistent."],
      "boys faster, girls more consistent",
      plane({ view: { xmin: 140, xmax: 400, ymin: -2, ymax: 105 }, step: { x: 20, y: 10 }, segs: [{ pts: [[160, 0], [200, 12], [220, 25], [250, 50], [300, 75], [340, 92], [380, 100]], color: "blue" }, { pts: [[180, 0], [220, 8], [245, 25], [270, 50], [300, 75], [330, 92], [360, 100]], color: "green" }], xlabel: "time (ms)", ylabel: "cf" })],
  ]),

  practice([
    q("Level 1 · mean", "Find the mean of 23, 19, 31, 27.", num(25),
      "Sum ÷ 4.", [S`\(\frac{100}{4}\).`], S`\(25\)`),
    q("Level 1 · IQR", "Find the IQR of 4, 6, 9, 12, 15, 20.", num(9),
      "Q1 = 6, Q3 = 15.", [S`\(15-6\).`], S`\(9\)`),
    q("Level 2 · frequency mean", "Values 0, 1, 2, 3 have frequencies 8, 6, 4, 2. Find the mean.", num(1),
      "Σfx ÷ Σf.", [S`\(\frac{0+6+8+6}{20}\).`], S`\(1\)`),
    q("Level 2 · SD", "Find the standard deviation of 5, 5, 9, 9.", num(2),
      "Mean 7; deviations ±2.", [S`\(\sqrt{\frac{16}{4}}\).`], S`\(2\)`),
    q("Level 2 · scaled", "Data have variance 9. Each value is multiplied by 4. Find the new standard deviation.", num(12),
      "SD 3 × 4.", [S`\(12\).`], S`\(12\)`),
  ]),

  ...hard([
    ["Two unknowns", S`Four numbers \(3, 8, a, b\), where \(3<a<8<b\), have mean 7 and range 9. Find \(a\), \(b\) and the median.`,
      [S`The smallest is 3 and the largest is \(b\): \(b-3=9\Rightarrow b=12\).`, S`Mean: \(3+8+a+12=28\Rightarrow a=5\).`, S`Ordered \(3,5,8,12\): median \(\frac{5+8}{2}=6.5\).`],
      S`\(a=5\), \(b=12\); median 6.5`],
    ["Estimating from a cf graph", "The cumulative frequency graph of 200 house prices (thousands) is shown. Estimate the median, the IQR, and the number of houses costing over 450 thousand.",
      ["Median at cf 100: ≈ 320.", "Q1 at 50: ≈ 260; Q3 at 150: ≈ 390; IQR ≈ 130.", "cf at 450 ≈ 180, so about 20 houses."],
      "≈ 320; ≈ 130; ≈ 20",
      plane({ view: { xmin: 140, xmax: 620, ymin: -3, ymax: 205 }, step: { x: 50, y: 20 }, segs: [{ pts: [[150, 0], [200, 15], [250, 45], [300, 85], [350, 125], [400, 155], [450, 180], [500, 194], [600, 200]], color: "violet" }], xlabel: "price", ylabel: "cf" })],
  ], [
    q("Level 3 · combined mean", "15 boys average 7.2 and 25 girls average 6.4 on a quiz. Find the overall mean.", num(6.7, 0.001),
      "Weighted mean.", [S`\(\frac{108+160}{40}\).`], S`\(6.7\)`),
    q("Level 3 · variance formula", S`For 8 values, \(\sum x=48\) and \(\sum x^2=320\). Find the standard deviation.`, num(2),
      "σ² = Σx²/n − x̄².", [S`\(40-36=4\).`], S`\(2\)`),
    q("Level 3 · fence", "Data have Q3 = 64 and upper fence 88. Find Q1.", num(48),
      "Q3 + 1.5 IQR = 88.", [S`IQR = 16.`], S`\(48\)`),
  ]),

  wrapUp({
    qas: [
      ["What should I revise first?", "Reading cumulative frequency graphs and box plots, and estimating the mean of grouped data."],
      ["What makes a comparison complete?", "One measure of centre and one of spread, both interpreted in context."],
      ["When is the median better than the mean?", "With skewed data or outliers."],
      ["How do changes to data affect statistics?", "Adding shifts the centre only; multiplying scales centre and spread."],
      ["How do I use a GDC here?", "Enter the values (and frequencies) in lists; one-variable statistics gives x̄, σ, quartiles and median."],
    ],
    summary: [
      "Sample fairly; watch for bias.",
      "Histograms, cf graphs, box plots, outliers.",
      "Mean, median, mode; grouped estimates.",
      "Range, IQR, σ; effects of ax + b.",
    ],
    next: "Chapter 7 studies bivariate data: correlation and regression.",
  }),
];

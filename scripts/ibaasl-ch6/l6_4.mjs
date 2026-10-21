// IB AA SL 6.4 — Measures of Dispersion: range, IQR, variance and standard deviation, frequency tables, effect of constant changes, comparing data
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.4 Measures of Dispersion";
export const ID = "1baa0006-0001-4001-8001-000000000604";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const dotplot = (xs, y0 = 0, color = "violet") => { const seen = {}; return xs.map((x) => ({ x, y: y0 + (seen[x] = (seen[x] ?? 0) + 1) * 0.4, color })); };
const box = (mn, q1, q2, q3, mx, y = 1, h = 0.6, color = "violet") => [
  { pts: [[mn, y], [q1, y]], color }, { pts: [[q3, y], [mx, y]], color },
  { pts: [[q1, y - h / 2], [q3, y - h / 2], [q3, y + h / 2], [q1, y + h / 2], [q1, y - h / 2]], color },
  { pts: [[q2, y - h / 2], [q2, y + h / 2]], color: "red" },
];

export const blocks = () => [
  intro({
    icon: "↔️",
    title: "Measures of Dispersion",
    overview: S`Two data sets can have the same average but very different spreads. The range and interquartile range measure spread using a few values; the variance and standard deviation use every value's distance from the mean. In this lesson you will calculate these by hand and with a GDC, find the standard deviation from a frequency table, see what adding or multiplying by a constant does to each measure, and compare data sets using centre and spread together.`,
    goals: [
      "find the range and interquartile range;",
      "calculate the variance \\(\\sigma^2=\\frac{\\sum(x-\\bar x)^2}{n}\\) and standard deviation \\(\\sigma\\);",
      "find the standard deviation from a frequency table (using a GDC);",
      "describe the effect of adding a constant or multiplying by a constant on measures of centre and spread;",
      "compare distributions using a measure of centre and a measure of spread.",
    ],
    curriculum: "SL 4.3 (measures of dispersion: interquartile range, standard deviation and variance; effect of constant changes on the original data; quartiles of discrete data; use of GDC)",
    prior: [
      ["Find the mean of 4, 6, 8, 10, 12.", "8."],
      [S`Evaluate \((-4)^2+(-2)^2+0^2+2^2+4^2\).`, "40."],
      ["Find Q1 and Q3 of 2, 5, 7, 9, 12, 15.", "Q1 = 5, Q3 = 12."],
    ],
    words: [
      ["Range", "maximum − minimum", "15 − 2 = 13"],
      ["Interquartile range", "Q3 − Q1: spread of the middle 50%", "12 − 5 = 7"],
      ["Variance \\(\\sigma^2\\)", "mean of the squared deviations from the mean", "\\(\\frac{40}{5}=8\\)"],
      ["Standard deviation \\(\\sigma\\)", "\\(\\sqrt{\\text{variance}}\\): typical distance from the mean", "\\(\\sqrt8\\approx2.83\\)"],
      ["Deviation", "\\(x-\\bar x\\)", "\\(12-8=4\\)"],
    ],
  }),

  section("📌 Range, IQR and standard deviation", S`
  <p>For 4, 6, 8, 10, 12 the mean is 8 and the deviations are \(-4,-2,0,2,4\). Squaring removes the signs: \(\sigma^2=\frac{16+4+0+4+16}{5}=8\) and \(\sigma=\sqrt8\approx2.83\). For 7, 8, 8, 8, 9 (also mean 8) \(\sigma\approx0.63\): much less spread.</p>
  ${plane({ view: { xmin: 2, xmax: 14, ymin: 0, ymax: 3 }, step: { x: 1, y: 1 }, points: [...dotplot([4, 6, 8, 10, 12], 1.4, "blue"), ...dotplot([7, 8, 8, 8, 9], 0, "green")], vlines: [{ x: 8, color: "red", dash: true }] }, "Same mean 8: σ ≈ 2.83 (blue, top) and σ ≈ 0.63 (green, bottom)")}
  ${table(["Measure", "Uses", "Sensitive to outliers?"], [["range", "two extreme values", "very"], ["IQR", "the middle 50%", "no"], ["standard deviation", "every value", "yes"]])}
  ${keyIdea(S`\(\sigma=\sqrt{\dfrac{\sum(x-\bar x)^2}{n}}\), and for a frequency table \(\sigma=\sqrt{\dfrac{\sum f(x-\bar x)^2}{\sum f}}\). In exams use the GDC for \(\sigma\) (the population value, \(\sigma_x\)); know what it means.`)}`),

  section("📌 Changing the data and comparing sets", S`
  <p>If every value is increased by \(b\), the whole distribution shifts: the mean and median increase by \(b\), but the spread is unchanged. If every value is multiplied by \(a>0\), the mean, median, SD, IQR and range are all multiplied by \(a\), and the variance by \(a^2\).</p>
  ${table(["New data", "Mean", "SD", "Variance", "IQR"], [[S`\(x+b\)`, S`\(\bar x+b\)`, S`\(\sigma\)`, S`\(\sigma^2\)`, "same"], [S`\(ax\)`, S`\(a\bar x\)`, S`\(a\sigma\)`, S`\(a^2\sigma^2\)`, S`\(a\times\)IQR`], [S`\(ax+b\)`, S`\(a\bar x+b\)`, S`\(a\sigma\)`, S`\(a^2\sigma^2\)`, S`\(a\times\)IQR`]])}
  ${plane({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 3 }, step: { x: 2, y: 1 }, points: [...dotplot([4, 6, 8, 10, 12], 1.4, "blue"), ...dotplot([14, 16, 18, 20, 22], 0, "green")] }, "Adding 10 shifts the data (green) but leaves the spread unchanged")}
  ${plane({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 3 }, step: { x: 2, y: 1 }, points: [...dotplot([4, 6, 8, 10, 12], 1.4, "blue"), ...dotplot([8, 12, 16, 20, 24], 0, "amber")] }, "Doubling (amber) doubles the mean and the standard deviation")}
  ${plane({ view: { xmin: 40, xmax: 100, ymin: 0, ymax: 3 }, step: { x: 5, y: 1 }, segs: [...box(48, 62, 70, 78, 92, 2, 0.6, "blue"), ...box(58, 66, 70, 74, 84, 1, 0.6, "green")] }, "Same median, different spread: IQR 16 (blue) vs 8 (green)")}
  ${watchOut([
    "Square the deviations before adding; their plain sum is always 0.",
    "SD is in the units of the data; variance is in squared units.",
    "Adding a constant does not change the SD, IQR or range.",
    "Use the population SD (σ) in this course, not the sample s.",
  ])}`),

  section("📌 Explore", S`<p>Multiply the data by \(a\) and add \(b\). Watch the mean move with both, while the standard deviation and IQR change only with \(a\).</p>`),

  widget("ibSpread", { init: [0, 1] }),

  examples([
    ["Level 1 · Range and IQR", "Find the range and IQR of 13, 7, 21, 9, 16, 11, 25, 18.",
      [S`Ordered: 7, 9, 11, 13, 16, 18, 21, 25: range 18.`, S`Q1 \(=\frac{9+11}{2}=10\), Q3 \(=\frac{18+21}{2}=19.5\): IQR 9.5.`],
      "18; 9.5"],
    ["Level 1 · SD by hand", "Find the standard deviation of 3, 5, 6, 9, 12.",
      [S`Mean 7; deviations \(-4,-2,-1,2,5\).`, S`Squares sum to \(16+4+1+4+25=50\).`, S`\(\sigma=\sqrt{10}\approx3.16\).`],
      S`\(\sqrt{10}\approx3.16\)`,
      plane({ view: { xmin: 0, xmax: 14, ymin: 0, ymax: 2 }, step: { x: 1, y: 1 }, points: dotplot([3, 5, 6, 9, 12]), vlines: [{ x: 7, color: "red", dash: true }, { x: 7 - Math.sqrt(10), color: "amber", dash: true }, { x: 7 + Math.sqrt(10), color: "amber", dash: true }] }, "Mean 7 (red) and mean ± σ (amber)")],
    ["Level 2 · Frequency table", "Find the mean and SD: x = 1, 2, 3, 4 with f = 2, 5, 2, 1.",
      [S`\(\sum f=10\), \(\sum fx=2+10+6+4=22\): mean 2.2.`, S`\(\sum f(x-2.2)^2=2(1.44)+5(0.04)+2(0.64)+1(3.24)=7.6\).`, S`\(\sigma=\sqrt{0.76}\approx0.872\).`],
      "2.2; ≈ 0.872"],
    ["Level 2 · Changing the data", "Test scores have mean 52 and SD 8. Each score is multiplied by 1.25 and then 5 is added. Find the new mean, SD and variance.",
      [S`Mean \(1.25(52)+5=70\).`, S`SD \(1.25(8)=10\); variance 100.`],
      "70; 10; 100"],
    ["Level 3 · Comparing two sets", "Runner A: mean 12.4 s, SD 0.3 s. Runner B: mean 12.2 s, SD 0.9 s (100 m times). Which would you choose for a relay, and why?",
      ["B is faster on average (12.2 < 12.4).", "A is much more consistent (SD 0.3 vs 0.9).", "For a reliable result A; for the chance of the fastest time B. Justify with both centre and spread."],
      "depends on goal; discuss mean and SD",
      plane({ view: { xmin: 10.5, xmax: 14, ymin: 0, ymax: 3 }, step: { x: 0.5, y: 1 }, segs: [{ pts: [[12.1, 2], [12.7, 2]], color: "blue" }, { pts: [[11.3, 1], [13.1, 1]], color: "green" }], points: [P(12.4, 2, "A", "blue"), P(12.2, 1, "B", "green")] }, "Mean ± 1 SD: A (blue) and B (green)")],
  ]),

  practice([
    q("Level 1 · range", "Find the range of 14, 8, 23, 17, 5, 19.", num(18),
      "max − min.", [S`\(23-5\).`], S`\(18\)`),
    q("Level 1 · IQR", "Q1 = 34 and Q3 = 51. Find the IQR.", num(17),
      "Q3 − Q1.", [S`\(51-34\).`], S`\(17\)`),
    q("Level 2 · SD", "Find the standard deviation of 2, 4, 6, 8 (3 s.f.).", num(2.236, 0.002),
      "Mean 5; squared deviations 9, 1, 1, 9.", [S`\(\sqrt{\frac{20}{4}}=\sqrt5\).`], S`\(\sqrt5\approx2.24\)`),
    q("Level 2 · add a constant", "Data have SD 4.5. Every value is increased by 10. The new SD is:", choice(["4.5", "14.5", "45", "20.25"], 0),
      "A shift does not change spread.", ["Adding a constant leaves σ unchanged."], "4.5"),
    q("Level 2 · variance", "Data have SD 3. Every value is tripled. Find the new variance.", num(81),
      "New SD 9.", [S`\(9^2\).`], S`\(81\)`),
  ]),

  ...hard([
    ["A missing value from the SD", S`The data 2, 6, 8, \(x\) have mean 5. Find \(x\) and the standard deviation.`,
      [S`\(16+x=20\Rightarrow x=4\).`, S`Deviations \(-3,1,3,-1\); squares sum 20.`, S`\(\sigma=\sqrt5\approx2.24\).`],
      S`\(x=4\); \(\sigma=\sqrt5\)`],
    ["Converting units", "Temperatures in a week have mean 20 °C and SD 2.5 °C. Find the mean and SD in °F, where F = 1.8C + 32.",
      [S`Mean \(1.8(20)+32=68\) °F.`, S`SD \(1.8(2.5)=4.5\) °F (the +32 does not affect spread).`],
      "68 °F; 4.5 °F",
      plane({ view: { xmin: 10, xmax: 80, ymin: 0, ymax: 3 }, step: { x: 5, y: 1 }, segs: [{ pts: [[17.5, 2], [22.5, 2]], color: "blue" }, { pts: [[63.5, 1], [72.5, 1]], color: "red" }], points: [P(20, 2, "°C", "blue"), P(68, 1, "°F", "red")] }, "Mean ± 1 SD in °C (blue) and °F (red)")],
  ], [
    q("Level 3 · scaled SD", "Data have mean 40 and SD 6. Each value is halved then 3 is subtracted. Find the new SD.", num(3),
      "Only the factor ½ affects spread.", [S`\(\frac12\times6\).`], S`\(3\)`),
    q("Level 3 · variance from sums", S`For 10 values, \(\sum x=50\) and \(\sum x^2=330\). Using \(\sigma^2=\frac{\sum x^2}{n}-\bar x^2\), find the variance.`, num(8),
      "33 − 25.", [S`\(\frac{330}{10}-5^2\).`], S`\(8\)`),
    q("Level 3 · new mean", "Data have mean 15. Each value is multiplied by k and 4 is added; the new mean is 49. Find k.", num(3),
      "15k + 4 = 49.", [S`\(k=3\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Why square the deviations?", "Positive and negative deviations cancel; squaring makes them all count, and the square root brings the units back."],
      ["What does the standard deviation tell me?", "Roughly how far a typical value is from the mean: small σ means the data cluster tightly."],
      ["Which measure of spread should I use with outliers?", "The IQR — it ignores the extreme quarters of the data."],
      ["Why does adding a constant not change the SD?", "Every value and the mean move together, so every deviation is unchanged."],
      ["How do I compare two data sets?", "Compare a measure of centre (mean or median) and a measure of spread (SD or IQR), and interpret in context."],
    ],
    summary: [
      "Range = max − min; IQR = Q3 − Q1.",
      "σ² = Σ(x − x̄)²/n; σ = √σ².",
      "x + b: centre + b, spread same. ax: centre and SD × a, variance × a².",
      "Compare with centre and spread together.",
    ],
    next: "6.5 reviews the chapter with mixed exam-style questions.",
  }),
];

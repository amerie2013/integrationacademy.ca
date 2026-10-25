// MDM4U 5.5 — Measures of Spread: range, deviations, population variance and standard deviation σ, sample variance
// and standard deviation s (divide by n − 1), standard deviation of grouped data, interpreting spread, and the effect
// of adding or multiplying by a constant
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, dotPlotSvg, barsSvg, tableSvg } from "./lib.mjs";
import { mean, sum, sdP, sdS, varP } from "../mdm4u/count.mjs";

export const TITLE = "5.5 Measures of Spread";
export const ID = "2907a6f6-bd1a-4484-98f5-41fc7dc525ce";
const S = String.raw;
const r3 = (v) => Math.round(v * 1000) / 1000;

const p1 = [4, 7, 8, 10, 11];
const s2 = [12, 15, 15, 18, 20];
const A = [18, 20, 21, 22, 19], B = [10, 30, 25, 14, 21];
const gm = [5, 15, 25, 35], gf = [3, 8, 6, 3], gn = sum(gf), gx = sum(gm.map((m, i) => m * gf[i])) / gn, gss = sum(gm.map((m, i) => gf[i] * (m - gx) ** 2));

export const blocks = () => [
  intro({
    icon: "↔️",
    title: "Measures of Spread",
    overview: S`Two data sets can have the same centre but be very different: one tightly clustered, the other widely scattered. Measures of spread describe this. The <strong>range</strong> is the simplest. The <strong>standard deviation</strong> uses every value: it is roughly the typical distance of the data from the mean. For a whole population we divide by \(N\) (giving \(\sigma\)); for a sample we divide by \(n-1\) (giving \(s\)), which corrects the tendency of a sample to underestimate the population's spread.`,
    goals: [
      "calculate the range and the deviations from the mean;",
      "calculate population variance and standard deviation (σ², σ);",
      "calculate sample variance and standard deviation (s², s);",
      "estimate the standard deviation of grouped data;",
      "interpret standard deviation and predict the effect of transforming the data.",
    ],
    curriculum: "D1.1 (measures of spread: range, variance, standard deviation); D1.5 (interpreting spread)",
    prior: [
      ["Mean of 4, 7, 8, 10, 11?", "8."],
      ["(−3)² + 2² = ?", "13."],
      ["√30 ≈ ?", "5.477."],
    ],
    words: [
      ["Range", "maximum − minimum", "20 − 12 = 8"],
      ["Deviation", "x − x̄, the distance from the mean (with a sign)", "15 − 16 = −1"],
      ["Variance", "the mean of the squared deviations (σ² or s²)", "σ² = 6"],
      ["Standard deviation", "the square root of the variance", "σ = √6 ≈ 2.449"],
    ],
  }),

  section("📌 Formulas", S`
  \[\sigma=\sqrt{\frac{\sum (x-\mu)^2}{N}}\qquad\qquad s=\sqrt{\frac{\sum (x-\bar x)^2}{n-1}}\]
  <p>For grouped data use the midpoints: \(s\approx\sqrt{\frac{\sum f(m-\bar x)^2}{n-1}}\). A useful shortcut for a population: \(\sigma^2=\frac{\sum x^2}{N}-\mu^2\).</p>
  ${fig(tableSvg([["x", ...p1.map(String), "sum"], ["x − μ", ...p1.map((x) => String(x - 8)), "0"], ["(x − μ)²", ...p1.map((x) => String((x - 8) ** 2)), String(sum(p1.map((x) => (x - 8) ** 2)))]]), "deviations always add to 0, so we square them first")}
  ${keyIdea(S`Standard deviation is in the same units as the data. A small \(\sigma\) means the values are clustered near the mean; a large \(\sigma\) means they are spread out.`)}`),

  section("📌 Same centre, different spread", S`
  ${fig(dotPlotSvg(A, { min: 8, max: 32, step: 2, marks: [[20, "mean 20", "red"]], xlabel: `player A: σ ≈ ${r3(sdP(A))}` }), "")}
  ${fig(dotPlotSvg(B, { min: 8, max: 32, step: 2, color: "violet", marks: [[20, "mean 20", "red"]], xlabel: `player B: σ ≈ ${r3(sdP(B))}` }), "both players average 20 points; player A is far more consistent")}`),

  section("📌 Explore", S`<p>Stretch the eleven marks away from their mean. Watch each deviation grow, and compare σ with s.</p>`),

  widget("spreadLab", { init: 1 }),

  section("📌 Watch out", watchOut([
    "Square the deviations before adding: unsquared deviations always sum to 0.",
    "Population: divide by N. Sample: divide by n − 1.",
    "Take the square root of the variance to get the standard deviation.",
    "The range uses only two values, so one outlier changes it completely.",
  ])),

  examples([
    ["Population standard deviation", `The numbers of goals scored by a team in its 5 games this season are ${p1.join(", ")}. Treating these games as the population, find the range, the variance and the standard deviation.`,
      [S`Range \(11-4=7\); \(\mu=\frac{40}{5}=8\).`, S`Squared deviations 16, 1, 0, 4, 9; sum 30.`, S`\(\sigma^2=\frac{30}{5}=6\), \(\sigma=\sqrt6\approx${r3(Math.sqrt(6))}\).`],
      `range 7, σ² = 6, σ ≈ ${r3(Math.sqrt(6))}`],
    ["Sample standard deviation", `A sample of 5 bags of chips has masses (g) ${s2.join(", ")}. Find the sample standard deviation.`,
      [S`\(\bar x=\frac{80}{5}=16\).`, S`Squared deviations 16, 1, 1, 4, 16; sum 38.`, S`\(s^2=\frac{38}{4}=9.5\), \(s=\sqrt{9.5}\approx${r3(Math.sqrt(9.5))}\).`],
      `s ≈ ${r3(Math.sqrt(9.5))} g`],
    ["Comparing consistency", `Points in five games: player A ${A.join(", ")}; player B ${B.join(", ")}. Compare the means and population standard deviations. Which player is more consistent?`,
      [S`Both means are \(\frac{100}{5}=20\).`, S`A: squared deviations 4, 0, 1, 4, 1, sum 10: \(\sigma=\sqrt2\approx${r3(sdP(A))}\).`, S`B: 100, 100, 25, 36, 1, sum 262: \(\sigma=\sqrt{52.4}\approx${r3(sdP(B))}\).`],
      "A (smaller standard deviation)"],
    ["Grouped data", "Twenty students recorded their daily exercise time in minutes: 0–10 (3 students), 10–20 (8), 20–30 (6), 30–40 (3). Estimate the mean and the sample standard deviation.",
      [S`\(\bar x\approx\frac{3(5)+8(15)+6(25)+3(35)}{20}=\frac{390}{20}=${gx}\).`, S`\(\sum f(m-\bar x)^2=3(14.5)^2+8(4.5)^2+6(5.5)^2+3(15.5)^2=${gss}\).`, S`\(s\approx\sqrt{\frac{${gss}}{19}}\approx${r3(Math.sqrt(gss / 19))}\).`],
      `x̄ ≈ ${gx} min, s ≈ ${r3(Math.sqrt(gss / 19))} min`,
      fig(barsSvg(gf, { labels: ["0–10", "10–20", "20–30", "30–40"], histogram: true, top: true, xlabel: "minutes of exercise per day", ylabel: "students" }))],
    ["Transforming data", "A class's test marks have mean 64 and standard deviation 9. (a) The teacher adds 5 marks to everyone. (b) Instead, every mark is multiplied by 1.1. Find the new mean and standard deviation each time.",
      [S`(a) Adding shifts every value, but the distances from the mean do not change: mean 69, \(\sigma=9\).`, S`(b) Multiplying stretches every distance: mean \(64(1.1)=70.4\), \(\sigma=9(1.1)=9.9\).`],
      "(a) 69 and 9; (b) 70.4 and 9.9"],
  ]),

  practice([
    q("range", "Find the range of 23, 31, 17, 40, 28.", num(23), "Max − min.", [S`\(40-17=23\).`], "23"),
    q("sigma", "Find the population standard deviation of 2, 4, 6, 8 (3 decimals).", num(r3(sdP([2, 4, 6, 8])), 0.002), "μ = 5.", [S`\(\sigma^2=\frac{9+1+1+9}{4}=5\).`], `${r3(sdP([2, 4, 6, 8]))}`),
    q("s", "Find the sample standard deviation of 3, 7, 8 (3 decimals).", num(r3(sdS([3, 7, 8])), 0.002), "Divide by n − 1 = 2.", [S`\(\bar x=6\); \(s^2=\frac{9+1+4}{2}=7\).`], `${r3(sdS([3, 7, 8]))}`),
    q("scale", "Data with standard deviation 4 are all multiplied by 3. What is the new standard deviation?", num(12), "Distances triple.", [S`\(3(4)=12\).`], "12"),
    q("compare", "Which data set has the larger standard deviation?", choice(["1, 5, 9", "4, 5, 6", "they are equal", "cannot tell"], 0), "Which is more spread out?", ["Values are farther from the mean 5."], "1, 5, 9"),
  ]),

  ...hard([
    ["The shortcut formula", "For a population of 10 values, Σx = 60 and Σx² = 420. Find μ and σ without the individual values.",
      [S`\(\mu=\frac{60}{10}=6\).`, S`\(\sigma^2=\frac{\sum x^2}{N}-\mu^2=\frac{420}{10}-36=6\).`, S`\(\sigma=\sqrt6\approx${r3(Math.sqrt(6))}\).`],
      `μ = 6, σ ≈ ${r3(Math.sqrt(6))}`],
    ["A missing value", "The population 6, 8, x, 14 has mean 10. Find x and the standard deviation.",
      [S`\(\frac{28+x}{4}=10\Rightarrow x=12\).`, S`Deviations −4, −2, 2, 4; squares sum to 40.`, S`\(\sigma=\sqrt{\frac{40}{4}}=\sqrt{10}\approx${r3(sdP([6, 8, 12, 14]))}\).`],
      `x = 12, σ ≈ ${r3(sdP([6, 8, 12, 14]))}`,
      fig(dotPlotSvg([6, 8, 12, 14], { min: 4, max: 16, step: 2, marks: [[10, "μ = 10", "red"]] }), "the deviations balance around the mean")],
  ], [
    q("hard", "For a population of 10 values, Σx = 150 and Σx² = 2400. Find σ (3 decimals).", num(r3(Math.sqrt(15)), 0.002), "σ² = Σx²/N − μ².", [S`\(240-225=15\).`], `${r3(Math.sqrt(15))}`),
    q("hard", "Temperatures have standard deviation 4°C. Converted with F = 1.8C + 32, what is the standard deviation in °F?", num(7.2), "Only the multiplier matters.", [S`\(1.8(4)=7.2\).`], "7.2"),
    q("hard", "A population of 9 values has variance 20. A 10th value equal to the mean is added. What is the new variance?", num(18), "The sum of squared deviations is unchanged.", [S`\(\frac{9(20)}{10}=18\).`], "18"),
  ]),

  wrapUp({
    qas: [
      ["What does the standard deviation measure?", "The typical distance of the values from the mean."],
      ["Why divide by n − 1 for a sample?", "It corrects a sample's tendency to underestimate the population's spread."],
      ["Why square the deviations?", "Otherwise they add to 0; squaring makes every distance count."],
      ["Does adding a constant change σ?", "No — it shifts the data without changing the spread."],
      ["What is the variance?", "The square of the standard deviation."],
    ],
    summary: [
      "Range = max − min.",
      "σ = √(Σ(x − μ)²/N); s = √(Σ(x − x̄)²/(n − 1)).",
      "Grouped: use midpoints and frequencies.",
      "Adding c: σ unchanged; multiplying by k: σ × |k|.",
    ],
    next: "5.6 describes spread with quartiles, the interquartile range and box plots, and finds outliers.",
  }),
];

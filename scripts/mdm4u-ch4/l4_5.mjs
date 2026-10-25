// MDM4U 4.5 — Confidence Intervals: sampling variability, the sampling distribution of a proportion and a mean,
// confidence intervals p̂ ± z*√(p̂q̂/n) and x̄ ± z*σ/√n, margin of error, interpreting the confidence level,
// choosing a sample size, and reading poll results
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, intervalsSvg, normalSvg } from "./lib.mjs";
import { r3 } from "../mdm4u/count.mjs";

export const TITLE = "4.5 Confidence Intervals";
export const ID = "5c3e0001-0001-4001-8001-0000d4d00405";
const S = String.raw;
const zs = { 90: 1.645, 95: 1.96, 99: 2.576 };
const moeP = (p, n, c = 95) => zs[c] * Math.sqrt((p * (1 - p)) / n);

// a deterministic set of 20 "sample intervals" around p = 0.42 for the figure (one misses)
const centres = [0.44, 0.39, 0.45, 0.41, 0.43, 0.36, 0.46, 0.42, 0.4, 0.44, 0.38, 0.45, 0.43, 0.41, 0.46, 0.39, 0.42, 0.45, 0.4, 0.43];

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Confidence Intervals",
    overview: S`A poll of 1000 voters cannot tell us the exact proportion of all voters who support a candidate, but it can give a range of plausible values. Because sample proportions vary from sample to sample in an approximately normal way, a <strong>confidence interval</strong> for a population proportion is \[\hat p\pm z^*\sqrt{\frac{\hat p(1-\hat p)}{n}},\] and for a population mean (with known \(\sigma\)) it is \(\bar x\pm z^*\frac{\sigma}{\sqrt n}\). The \(\pm\) part is the <strong>margin of error</strong>; \(z^*=1.645,\ 1.96,\ 2.576\) for 90%, 95%, 99% confidence.`,
    goals: [
      "explain sampling variability and why sample statistics are approximately normal;",
      "construct confidence intervals for a proportion and for a mean;",
      "calculate and interpret the margin of error;",
      "explain the meaning of the confidence level correctly;",
      "find the sample size needed for a given margin of error.",
    ],
    curriculum: "B2 extension (normal distribution applications); D-strand connection (interpreting statistics in the media, e.g. “accurate to within 3 percentage points, 19 times out of 20”)",
    prior: [
      ["P(−1.96 < Z < 1.96) ≈ ?", "0.95."],
      ["Evaluate √(0.4 × 0.6 / 100).", "≈ 0.049."],
      ["What is σ/√n for σ = 12, n = 36?", "2."],
    ],
    words: [
      ["Point estimate", "a single value from a sample", "p̂ = 0.42"],
      ["Margin of error E", "z* × standard error", "± 3.1 percentage points"],
      ["Confidence level", "% of such intervals that capture the true value in the long run", "95% = “19 times out of 20”"],
      ["Critical value z*", "z with the central C% of the area between −z* and z*", "1.96 for 95%"],
    ],
  }),

  section("📌 Samples vary", S`
  <p>If many random samples of 500 voters are taken from a population with 42% support, the sample proportions \(\hat p\) form an approximately normal distribution with mean 0.42 and standard deviation \(\sqrt{\frac{0.42(0.58)}{500}}\approx${r3(Math.sqrt((0.42 * 0.58) / 500), 4)}\).</p>
  ${fig(normalSvg({ mu: 0.42, s: Math.sqrt((0.42 * 0.58) / 500), shade: [[0.42 - 1.96 * Math.sqrt((0.42 * 0.58) / 500), 0.42 + 1.96 * Math.sqrt((0.42 * 0.58) / 500), "green"]], labels: [[0.42, "95%"]] }), "95% of sample proportions fall within 1.96 standard errors of the true proportion")}
  ${keyIdea(S`If \(\hat p\) is within \(1.96\) standard errors of \(p\), then \(p\) is within \(1.96\) standard errors of \(\hat p\). That is why \(\hat p\pm1.96\,SE\) captures \(p\) in 95% of samples.`)}`),

  section("📌 What 95% confidence means", S`
  ${fig(intervalsSvg(centres.map((c) => [c - moeP(c, 500), c + moeP(c, 500)]), { truth: 0.42, min: 0.3, max: 0.56, ticks: [0.3, 0.35, 0.4, 0.45, 0.5, 0.55] }), "20 samples, 20 intervals: 19 capture the true 0.42 (blue), one misses (red)")}
  ${table(["Statement", "Correct?"], [["“95% of intervals made this way capture the true proportion.”", "yes"], ["“There is a 95% chance the true proportion is in this particular interval.”", "loosely used, but the true value is fixed"], ["“95% of voters are within the interval.”", "no"]])}
  ${table(["Change", "Effect on the interval"], [["larger sample n", "narrower (E ∝ 1/√n)"], ["higher confidence", "wider (larger z*)"], ["p̂ nearer 0.5", "wider (p̂q̂ is largest at 0.5)"]])}`),

  section("📌 Explore", S`<p>Draw samples and watch the intervals. About C% capture the true proportion. Try a larger n (narrower intervals) and 99% confidence (wider intervals).</p>`),

  widget("confidenceLab", { init: [0.4, 100] }),

  section("📌 Watch out", watchOut([
    "The margin of error only covers random sampling variation — not bias from a bad sample or a leading question.",
    "Use p̂ (the sample proportion) inside the square root when p is unknown.",
    "To halve the margin of error you need four times the sample size.",
    "Write intervals as (lower, upper) and state the confidence level.",
  ])),

  examples([
    ["A poll", "In a random sample of 800 Ontario adults, 344 said they read the news daily. Find a 95% confidence interval for the proportion of all adults who do.",
      [S`\(\hat p=\frac{344}{800}=0.43\).`, S`\(E=1.96\sqrt{\frac{0.43(0.57)}{800}}\approx${r3(moeP(0.43, 800), 4)}\).`, S`\(0.43\pm${r3(moeP(0.43, 800), 3)}\).`],
      `(${r3(0.43 - moeP(0.43, 800), 3)}, ${r3(0.43 + moeP(0.43, 800), 3)})`],
    ["Interpreting", "Interpret the interval from the previous example.",
      [S`We are 95% confident that between about ${r3(100 * (0.43 - moeP(0.43, 800)), 1)}% and ${r3(100 * (0.43 + moeP(0.43, 800)), 1)}% of all Ontario adults read the news daily.`, S`The method captures the true proportion in 95% of samples.`],
      "see the statement"],
    ["A mean", "The masses of 49 randomly chosen apples have mean 152 g. The population standard deviation is 14 g. Find a 90% confidence interval for the mean mass.",
      [S`\(E=1.645\cdot\frac{14}{\sqrt{49}}=1.645(2)=3.29\).`, S`\(152\pm3.29\).`],
      "(148.71, 155.29) g",
      fig(normalSvg({ mu: 152, s: 2, shade: [[152 - 3.29, 152 + 3.29, "blue"]], labels: [[152, "90%"]] }))],
    ["Media language", "A poll reports 38% support, “accurate to within 3.1 percentage points, 19 times out of 20”. Write the interval and the confidence level.",
      [S`19 out of 20 = 95%.`, S`\(38\%\pm3.1\%\): 34.9% to 41.1%.`],
      "34.9% to 41.1%, 95% confidence"],
    ["Sample size", "How large a sample is needed for a margin of error of 0.03 at 95% confidence, if nothing is known about p?",
      [S`Use \(\hat p=0.5\) (the largest \(\hat p\hat q\)).`, S`\(1.96\sqrt{\frac{0.25}{n}}\le0.03\Rightarrow n\ge\left(\frac{1.96}{0.03}\right)^2(0.25)\approx1067.1\).`],
      "n = 1068"],
  ]),

  practice([
    q("p-hat", "In a sample of 250, 95 have a pet. What is p̂?", num(0.38), "95/250.", [S`\(0.38\).`], "0.38"),
    q("E", "Find the 95% margin of error for p̂ = 0.38, n = 250 (3 decimals).", num(r3(moeP(0.38, 250), 3), 0.002), "1.96√(p̂q̂/n).", [S`\(1.96\sqrt{\frac{0.38(0.62)}{250}}\).`], `${r3(moeP(0.38, 250), 3)}`),
    q("z*", "What critical value z* is used for 99% confidence?", num(2.576, 0.005), "Central 99%.", [S`\(P(Z<z^*)=0.995\).`], "2.576"),
    q("mean", "x̄ = 70, σ = 10, n = 25. Find the upper end of a 95% confidence interval for μ.", num(73.92, 0.01), "70 + 1.96(10/5).", [S`\(70+3.92\).`], "73.92"),
    q("effect", "Increasing the sample size (same confidence) makes the confidence interval…", choice(["narrower", "wider", "the same", "shift to the right"], 0), "E ∝ 1/√n.", ["Smaller standard error."], "narrower"),
  ]),

  ...hard([
    ["Comparing two polls", "Poll A: 520 of 1000 support a plan. Poll B: 270 of 500 support it. Find both 95% intervals. Do they suggest different levels of support?",
      [S`A: \(0.52\pm${r3(moeP(0.52, 1000), 3)}\) → (${r3(0.52 - moeP(0.52, 1000), 3)}, ${r3(0.52 + moeP(0.52, 1000), 3)}).`, S`B: \(0.54\pm${r3(moeP(0.54, 500), 3)}\) → (${r3(0.54 - moeP(0.54, 500), 3)}, ${r3(0.54 + moeP(0.54, 500), 3)}).`, S`The intervals overlap a lot, so the polls are consistent. Poll B's interval is wider because its sample is smaller.`],
      "overlapping intervals: consistent",
      fig(intervalsSvg([[0.52 - moeP(0.52, 1000), 0.52 + moeP(0.52, 1000)], [0.54 - moeP(0.54, 500), 0.54 + moeP(0.54, 500)]], { min: 0.45, max: 0.6, ticks: [0.45, 0.5, 0.55, 0.6] }), "poll A (top) and poll B (bottom)")],
    ["Sample size for a mean", "A researcher wants to estimate mean sleep time within 10 minutes at 99% confidence. From past studies σ ≈ 45 min. How many people are needed?",
      [S`\(2.576\cdot\frac{45}{\sqrt n}\le10\Rightarrow\sqrt n\ge11.592\).`, S`\(n\ge134.4\).`],
      "n = 135"],
  ], [
    q("hard", "A 95% interval for a proportion is (0.31, 0.39). Find p̂ and the margin of error. Enter E.", num(0.04), "Half the width.", [S`\(\hat p=0.35\), \(E=0.04\).`], "0.04"),
    q("hard", "For the interval (0.31, 0.39) at 95% confidence, find the sample size n (nearest whole number).", num(Math.round((1.96 / 0.04) ** 2 * 0.35 * 0.65), 2), "0.04 = 1.96√(0.35·0.65/n).", [S`\(n=\left(\frac{1.96}{0.04}\right)^2(0.2275)\).`], `${Math.round((1.96 / 0.04) ** 2 * 0.35 * 0.65)}`),
    q("hard", "By what factor must n be multiplied to cut the margin of error to one third?", num(9), "E ∝ 1/√n.", [S`\(\sqrt{9}=3\).`], "9"),
  ]),

  wrapUp({
    qas: [
      ["Why can't a sample give the exact answer?", "Different random samples give different results (sampling variability)."],
      ["What does 95% confidence mean?", "If we repeated the sampling many times, about 95% of the intervals would capture the true value."],
      ["How can I make the interval narrower?", "Take a larger sample, or accept a lower confidence level."],
      ["What does “19 times out of 20” mean in a poll?", "95% confidence."],
      ["Does the margin of error cover all errors?", "No — only random sampling error, not bias in how the sample was chosen or how questions were asked."],
    ],
    summary: [
      "Proportion: p̂ ± z*√(p̂q̂/n).",
      "Mean: x̄ ± z*σ/√n.",
      "z* = 1.645, 1.96, 2.576 for 90, 95, 99%.",
      "n for margin E: n = (z*/E)² p̂q̂.",
    ],
    next: "4.6 reviews continuous distributions, the normal model and confidence intervals.",
  }),
];

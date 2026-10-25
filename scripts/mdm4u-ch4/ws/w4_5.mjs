// MDM4U Worksheet 4.5 — Confidence Intervals (teacher edition)
import { svgT, intervalsSvg, normalSvg } from "./figT.mjs";
import { r3 } from "../../mdm4u/count.mjs";

const S = String.raw;
const E = (p, n, z = 1.96) => z * Math.sqrt((p * (1 - p)) / n);
const ci = (p, n, z = 1.96) => `(${r3(p - E(p, n, z), 3)}, ${r3(p + E(p, n, z), 3)})`;

const EXAMPLES = [
  { title: "Critical values", q: "State z* for 90%, 95% and 99% confidence and explain where they come from.", fig: svgT(normalSvg({ mu: 0, s: 1, shade: [[-1.96, 1.96, "green"]], marks: [[-1.96, "−1.96"], [1.96, "1.96"]] }), 4.2), steps: ["Central area C between −z* and z*.", "1.645, 1.96, 2.576."], ans: "1.645, 1.96, 2.576" },
  { title: "Proportion interval", q: "In a random sample of 400, 152 support a new park. Find a 95% CI.", steps: [S`$\hat p=0.38$; $E=1.96\sqrt{\frac{0.38(0.62)}{400}}\approx${r3(E(0.38, 400), 3)}$.`], ans: ci(0.38, 400) },
  { title: "90% interval", q: "Same data, 90% confidence.", steps: [S`$E=1.645\sqrt{\ldots}\approx${r3(E(0.38, 400, 1.645), 3)}$.`], ans: ci(0.38, 400, 1.645) },
  { title: "Mean interval", q: "A sample of 64 batteries has mean life 18.4 h; σ = 2.4 h. Find a 99% CI for μ.", steps: [S`$E=2.576\cdot\frac{2.4}8=0.773$.`], ans: "(17.63, 19.17) h" },
  { title: "Interpretation", q: "Interpret a 95% CI of (0.35, 0.41) for the proportion of students who walk to school.", steps: ["We are 95% confident the true proportion is between 35% and 41%: the method captures the true value in 95% of samples."], ans: "see steps" },
  { title: "Media", q: "A poll: 46% support, margin of error 2.5 percentage points, 19 times out of 20. Write the interval.", steps: ["95% confidence: 43.5% to 48.5%."], ans: "43.5% to 48.5%" },
  { title: "Sample size", q: "What sample size gives E = 0.02 at 95% confidence with no prior estimate?", steps: [S`$n=\left(\frac{1.96}{0.02}\right)^2(0.25)=2401$.`], ans: "2401" },
  { title: "Many intervals", q: "The figure shows 15 intervals from 15 samples. How many capture the true value 0.5? Is that surprising for 90% intervals?", fig: svgT(intervalsSvg([[0.42, 0.56], [0.45, 0.59], [0.38, 0.52], [0.47, 0.61], [0.51, 0.65], [0.4, 0.54], [0.44, 0.58], [0.36, 0.5], [0.43, 0.57], [0.46, 0.6], [0.41, 0.55], [0.33, 0.47], [0.44, 0.58], [0.39, 0.53], [0.48, 0.62]], { truth: 0.5, min: 0.3, max: 0.7, ticks: [0.3, 0.4, 0.5, 0.6, 0.7] }), 4.6), steps: ["13 of 15 capture 0.5 (87%).", "Close to 90%: not surprising."], ans: "13 of 15" },
  { title: "Bias", q: "An online poll of 5000 volunteers gives 72% ± 1.2%. Why might the interval be misleading?", steps: ["Volunteers are not a random sample (voluntary response bias); the margin of error ignores bias."], ans: "biased sample" },
];

const PROBLEMS = [
  { level: 1, q: "p̂ = 0.55, n = 300. Find the 95% margin of error.", ans: `${r3(E(0.55, 300), 3)}` },
  { level: 1, q: "x̄ = 120, σ = 15, n = 25. Find a 95% CI for μ.", ans: "(114.12, 125.88)" },
  { level: 1, q: "What does “19 times out of 20” mean in a poll report?", ans: "95% confidence" },
  { level: 2, q: "In a sample of 1200 adults, 408 exercise daily. Find a 99% CI for the proportion.", ans: ci(0.34, 1200, 2.576) },
  { level: 2, q: "A 95% CI for a proportion is (0.62, 0.68). Find p̂ and E.", ans: "0.65 and 0.03" },
  { level: 2, q: "How does the margin of error change if the sample size is multiplied by 4?", ans: "it is halved" },
  { level: 2, q: "A sample of 100 cereal boxes has mean mass 504 g; σ = 8 g. Is a mean of 500 g plausible at 95% confidence?", ans: "CI (502.43, 505.57) does not contain 500: not plausible" },
  { level: 2, q: "Find n for a 95% CI with E = 0.04 when a pilot gives p̂ = 0.2.", ans: `${Math.ceil((1.96 / 0.04) ** 2 * 0.16)}` },
  { level: 3, space: 4.5, q: "Poll A: 540 of 1000 support. Poll B: 510 of 1000 support. Find both 95% CIs and decide whether support has clearly changed.", ans: `A ${ci(0.54, 1000)}, B ${ci(0.51, 1000)}: overlap, so no clear change` },
  { level: 3, space: 4.5, q: "A researcher wants a 90% CI for mean commute time within 2 minutes; σ ≈ 11 min. Find n.", ans: `${Math.ceil((1.645 * 11 / 2) ** 2)}` },
  { level: 3, space: 4.5, q: "Explain why p̂ = 0.5 gives the largest margin of error, using p̂(1 − p̂).", ans: "p(1 − p) is a parabola with maximum 0.25 at p = 0.5" },
  { level: 3, space: 4.5, q: "A 95% CI for μ is (46.2, 53.8) based on n = 36. Find x̄ and σ, then the 99% CI.", ans: S`$\bar x=50$, $\sigma=\frac{3.8\cdot6}{1.96}\approx11.63$; 99% CI $(45.01, 54.99)$` },
  { level: 3, space: 5, q: "Design a survey to estimate the proportion of students in your school who work part-time within ±5 percentage points at 95% confidence. Include sample size and how to choose the sample.", ans: "n ≈ 385 (or fewer with a finite school); simple random sample from the student list; avoid voluntary response" },
];

export const WS = {
  code: "4.5",
  title: "Confidence Intervals",
  bigideas: S`Sample statistics vary but are approximately normal. A confidence interval is estimate $\pm$ margin of error: $\hat p\pm z^*\sqrt{\frac{\hat p\hat q}n}$ or $\bar x\pm z^*\frac\sigma{\sqrt n}$. A C% interval method captures the true value in C% of samples. Larger samples give narrower intervals.`,
  goals: ["Construct CIs for proportions and means.", "Interpret confidence levels.", "Find margins of error and sample sizes.", "Read poll results critically."],
  curriculum: "B2 extension; D connection (statistics in the media)",
  vocab: [["Margin of error", "$z^*\\times$ standard error"], ["Confidence level", "long-run capture rate"], ["$z^*$", "critical value"]],
  hook: "A poll says 47% ± 3%, 19 times out of 20. What does each number mean? Could the true value be 51%?",
  concepts: [
    ["1. Sampling variability", "Different samples give different p̂; their distribution is about normal."],
    ["2. The interval", S`${svgT(intervalsSvg([[0.36, 0.44], [0.39, 0.47], [0.43, 0.51]], { truth: 0.42, min: 0.3, max: 0.55, ticks: [0.3, 0.4, 0.5] }), 3.8)}estimate ± $z^*$SE.`],
    ["3. Sample size", S`$n=\left(\frac{z^*}E\right)^2\hat p\hat q$; use 0.25 if unknown.`],
  ],
  tips: ["State the confidence level.", "Use p̂ in the SE.", "Round n up.", "Bias is not covered by E.", "4× sample → ½ margin."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

// MDM4U 4.6 — Chapter 4 Review: continuous random variables, the normal distribution, z-scores and probabilities,
// percentiles, the normal approximation to the binomial, and confidence intervals — mixed problems
import { intro, section, keyIdea, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, normalSvg, barsSvg } from "./lib.mjs";
import { r3, tphi, binLE } from "../mdm4u/count.mjs";

export const TITLE = "4.6 Chapter 4 Review";
export const ID = "5c3e0001-0001-4001-8001-0000d4d00406";
const S = String.raw;
const P = (z) => tphi(z);

export const blocks = () => [
  intro({
    icon: "🗂️",
    title: "Chapter 4 Review: The Normal Distribution",
    overview: S`This review brings together continuous random variables, the normal model, z-scores, probabilities and percentiles, the normal approximation to the binomial, and confidence intervals. In every problem: sketch the curve, standardize, find the area (or work backwards from an area), and interpret the answer in context.`,
    goals: [
      "distinguish continuous and discrete variables and summarize continuous data;",
      "use the 68–95–99.7 rule and z-scores;",
      "find normal probabilities and percentiles;",
      "approximate binomial probabilities with the continuity correction;",
      "construct and interpret confidence intervals.",
    ],
    curriculum: "B2.1–B2.8 (continuous probability distributions and the normal distribution)",
    prior: [
      ["z for x = 84, μ = 72, σ = 8?", "1.5."],
      ["P(Z > 1.5)?", "0.0668."],
      ["Binomial n = 100, p = 0.2: μ and σ?", "20 and 4."],
    ],
    words: [
      ["z-score", "(x − μ)/σ", "standard units"],
      ["Percentile", "x = μ + zσ", "90th: z ≈ 1.28"],
      ["Continuity correction", "± 0.5 for counts", "X ≥ 30 → X > 29.5"],
      ["Margin of error", "z* × standard error", "1.96√(p̂q̂/n)"],
    ],
  }),

  section("📌 Summary of methods", S`
  ${table(["Question", "Method"], [["P(X < x)", "\\(P(Z<\\frac{x-\\mu}{\\sigma})\\)"], ["P(X > x)", "\\(1-P(Z<z)\\)"], ["P(a < X < b)", "\\(P(Z<z_b)-P(Z<z_a)\\)"], ["percentile", "z from area; \\(x=\\mu+z\\sigma\\)"], ["binomial, large n", "\\(N(np,\\ npq)\\) with ± 0.5"], ["estimate p", "\\(\\hat p\\pm z^*\\sqrt{\\hat p\\hat q/n}\\)"]])}
  ${keyIdea(S`Sketch first: the picture decides whether to subtract from 1, subtract two areas, or read the table backwards.`)}`),

  section("📌 Watch out", watchOut([
    "The table gives area to the left.",
    "Use σ, not σ², in z-scores.",
    "Continuity correction for counts only.",
    "A confidence level describes the method, not one interval.",
  ])),

  examples([
    ["68–95–99.7", "Lifetimes of a phone battery are normal with μ = 30 months and σ = 4 months. What percent last between 22 and 34 months?",
      [S`22 is \(\mu-2\sigma\), 34 is \(\mu+\sigma\).`, S`\(47.5\%+34\%=81.5\%\).`],
      "about 81.5%",
      fig(normalSvg({ mu: 30, s: 4, shade: [[22, 34, "green"]] }))],
    ["A probability", "Using the same batteries, find P(a battery lasts more than 36 months).",
      [S`\(z=1.5\): \(1-${P(1.5)}\).`],
      `${r3(1 - P(1.5), 4)}`],
    ["A percentile", "The manufacturer will replace the 3% of batteries that fail first. Up to what age should the warranty run?",
      [S`\(P(Z<z)=0.03\Rightarrow z\approx-1.88\).`, S`\(x=30-1.88(4)\).`],
      `≈ ${r3(30 - 1.88 * 4, 2)} months`],
    ["Normal approximation", "A basketball player makes 75% of free throws. Approximate P(she makes at least 80 of 100).",
      [S`\(\mu=75\), \(\sigma=\sqrt{18.75}\approx4.33\).`, S`\(P(X>79.5)\): \(z\approx1.04\): \(1-${P(1.04)}\).`],
      `≈ ${r3(1 - P(1.04), 4)} (exact ${r3(1 - binLE(100, 0.75, 79), 4)})`],
    ["Confidence interval", "In a random sample of 600 students, 234 work part-time. Find a 95% confidence interval for the proportion of all students who work part-time.",
      [S`\(\hat p=0.39\); \(E=1.96\sqrt{\frac{0.39(0.61)}{600}}\approx${r3(1.96 * Math.sqrt((0.39 * 0.61) / 600), 3)}\).`],
      `(${r3(0.39 - 1.96 * Math.sqrt((0.39 * 0.61) / 600), 3)}, ${r3(0.39 + 1.96 * Math.sqrt((0.39 * 0.61) / 600), 3)})`],
  ]),

  practice([
    q("z", "μ = 140, σ = 20. Find the z-score of 115.", num(-1.25), "(115 − 140)/20.", [S`\(-1.25\).`], "−1.25"),
    q("P", "Find P(Z < −1.25). (4 decimals)", num(P(-1.25), 0.0005), "Table.", [S`\(${P(-1.25)}\).`], `${P(-1.25)}`),
    q("rule", "About what percent of normal data is more than 2σ above the mean?", num(2.5, 0.2), "(100 − 95)/2.", [S`\(2.5\%\).`], "2.5"),
    q("cc", "Binomial X ≤ 12 becomes which normal statement?", choice(["X < 12.5", "X < 11.5", "X > 12.5", "X < 12"], 0), "Include the bar for 12.", ["12 + 0.5."], "X < 12.5"),
    q("E", "x̄ = 48, σ = 6, n = 36. Find the 95% margin of error.", num(1.96), "1.96 × 6/6.", [S`\(1.96(1)\).`], "1.96"),
  ]),

  ...hard([
    ["Two conditions", "Package masses are N(500, 6²) grams. A package is rejected if it is under 490 g or over 512 g. What percent are rejected, and how could the company halve the rejects without changing the mean?",
      [S`\(z=-1.67\) and \(z=2\): rejected \(${P(-1.67)}+(1-${P(2)})=${r3(P(-1.67) + 1 - P(2), 4)}\).`, S`About ${r3(100 * (P(-1.67) + 1 - P(2)), 1)}%. Reducing σ (more consistent filling) narrows the curve and lowers both tails.`],
      `≈ ${r3(100 * (P(-1.67) + 1 - P(2)), 1)}%`,
      fig(normalSvg({ mu: 500, s: 6, shade: [[-Infinity, 490, "red"], [512, Infinity, "red"]], marks: [[490, "490"], [512, "512"]] }))],
    ["Poll planning", "A school board wants to estimate the proportion of parents who favour a later start time within ±4 percentage points with 95% confidence. A pilot survey gives p̂ ≈ 0.6. How many parents should be surveyed? How many if no pilot was available?",
      [S`\(n=\left(\frac{1.96}{0.04}\right)^2(0.6)(0.4)=576.24\Rightarrow577\).`, S`Without a pilot use 0.5: \(n=600.25\Rightarrow601\).`],
      "577; 601",
      fig(barsSvg([577, 601], { labels: ["p̂ = 0.6", "p̂ = 0.5"], top: true, ylabel: "sample size" }))],
  ], [
    q("hard", "Scores are N(μ, 12²) and 30% are below 61. Find μ (1 decimal).", num(r3(61 + 0.52 * 12, 1), 0.2), "z(0.30) ≈ −0.52.", [S`\(\mu=61+0.52(12)\).`], `${r3(61 + 0.52 * 12, 1)}`),
    q("hard", "n = 300, p = 0.2. Approximate P(50 ≤ X ≤ 70). (4 decimals)", num(r3(P(1.52) - P(-1.52), 4), 0.003), "μ = 60, σ ≈ 6.93; 49.5 to 70.5.", [S`\(z=\pm\frac{10.5}{6.93}\approx\pm1.52\).`, S`\(P(Z<1.52)-P(Z<-1.52)\).`], `${r3(P(1.52) - P(-1.52), 4)}`),
    q("hard", "A 95% interval for μ is (61.2, 66.8) with σ = 10. Find n.", num(49), "E = 2.8 = 1.96 × 10/√n.", [S`\(\sqrt n=7\).`], "49"),
  ]),

  wrapUp({
    qas: [
      ["What is the first step in a normal problem?", "Sketch the curve and shade the region you want."],
      ["How are z-scores useful beyond probabilities?", "They compare values from different distributions."],
      ["When do I use the normal approximation?", "Binomial with np ≥ 5 and nq ≥ 5, with a continuity correction."],
      ["What controls the width of a confidence interval?", "The confidence level, the sample size and the variability."],
      ["What comes next?", "Chapter 5 studies how to collect data and summarize one variable."],
    ],
    summary: [
      "Continuous: probabilities are areas.",
      "Normal: z = (x − μ)/σ; table area to the left.",
      "Binomial ≈ N(np, npq) with ± 0.5.",
      "CI: estimate ± z* × standard error.",
    ],
    next: "Chapter 5: one-variable statistics and data collection.",
  }),
];

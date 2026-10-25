// 4.4 The Normal Approximation to the Binomial — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, normalSvg, lineSvg } from "../../mdm4u/figs.mjs";
import { bin, binLE, tphi } from "../../mdm4u/count.mjs";

const P = (z) => tphi(z);
const zz = (v) => Math.round(v * 100) / 100;
const r = (v, k = 2) => Math.round(v * 10 ** k) / 10 ** k;
const p4 = (prompt, v, fb, fig = null) => num(`${prompt} (4 decimals)`, Math.round(v * 1e4) / 1e4, fb, fig, 0.004);
const ap = (n, p, lo, hi) => { const m = n * p, s = Math.sqrt(n * p * (1 - p)); return P(zz((hi + 0.5 - m) / s)) - P(zz((lo - 0.5 - m) / s)); };

export const TOPIC = "4.4 The Normal Approximation to the Binomial";
export const Q = [
  p4("An airline sells 320 tickets for 300 seats; P(show) = 0.92. Approximate P(more than 300 show up).", 1 - ap(320, 0.92, 0, 300), "μ = 294.4, σ ≈ 4.85; X > 300.5.", normalSvg({ mu: 294.4, s: Math.sqrt(320 * 0.92 * 0.08), shade: [[300.5, Infinity, "red"]], marks: [[300.5, "300.5"]] })),
  p4("A coin lands heads 295 times in 500 tosses. If fair, approximate P(295 or more heads).", 1 - P(zz((294.5 - 250) / Math.sqrt(125))), "z ≈ 3.98."),
  p4("A claim says 60% of voters support a plan. In a poll of 400, only 220 support it. Approximate P(220 or fewer) if the claim is true.", ap(400, 0.6, 0, 220), "μ = 240, σ ≈ 9.80."),
  p4("A multiple-choice test has 100 questions with 5 options. Approximate P(a guesser passes with at least 30 correct).", 1 - ap(100, 0.2, 0, 29), "μ = 20, σ = 4; X ≥ 30 → X > 29.5."),
  p4("n = 120, p = 0.25. Approximate P(25 ≤ X ≤ 35).", ap(120, 0.25, 25, 35), "μ = 30, σ ≈ 4.74; 24.5 to 35.5."),
  num("n = 120, p = 0.25: exact P(25 ≤ X ≤ 35) with technology (4 decimals).", r(binLE(120, 0.25, 35) - binLE(120, 0.25, 24), 4), "Cumulative difference.", null, 0.0005),
  num("A seed company claims 90% germination. How many seeds must be planted so that np ≥ 5 and nq ≥ 5?", 50, "nq = 0.1n ≥ 5."),
  num("For n = 50, p = 0.5, approximately what is the largest P(X = k)? (4 decimals)", r(P(zz(0.5 / Math.sqrt(12.5))) - P(zz(-0.5 / Math.sqrt(12.5))), 4), "k = 25: 24.5 to 25.5.", null, 0.004),
  num("15% of a population is left-handed. In a school of 1000, find the number of left-handers exceeded with probability 0.05 (1 decimal).", r(150 + 1.645 * Math.sqrt(127.5), 1), "μ = 150, σ ≈ 11.29; μ + 1.645σ.", null, 0.5),
  num("A binomial with p = 0.3 is approximated by N(μ, σ²) with σ = 6. Find n (nearest whole number).", Math.round(36 / 0.21), "npq = 36.", null, 1),
  p4("Use the figure (binomial n = 60, p = 0.3 with its normal curve). Approximate P(X ≥ 22).", 1 - ap(60, 0.3, 0, 21), "μ = 18, σ ≈ 3.55; X > 21.5.", barsSvg(Array.from({ length: 36 }, (_, x) => bin(60, 0.3, x)), { labels: Array.from({ length: 36 }, (_, x) => (x % 5 ? "" : x)), histogram: true, bw: 10, fmt: (v) => v.toFixed(2), hl: Array.from({ length: 14 }, (_, i) => 22 + i) })),
  num("The graph shows the error |exact − approximate| for P(X ≤ np) as n grows (p = 0.5). Read the trend: does the error shrink, grow or stay the same? Enter 1 for shrink, 2 for grow, 3 for same.", 1, "Larger n → better approximation.", lineSvg([10, 20, 50, 100, 200].map((n) => Math.abs(binLE(n, 0.5, n / 2) - P(zz(0.5 / Math.sqrt(n / 4))))), { xs: [10, 20, 50, 100, 200], ymax: 0.01, nt: 5, xlabel: "n", ylabel: "error" })),
  p4("The shaded region shows the normal approximation of P(X = 40) for n = 100, p = 0.4. Find it.", ap(100, 0.4, 40, 40), "39.5 to 40.5; σ ≈ 4.90.", normalSvg({ mu: 40, s: Math.sqrt(24), shade: [[39.5, 40.5, "red"]] })),
  p4("A drug has a 70% success rate. In two independent trials of 50 patients each, approximate P(both trials have at least 32 successes).", (1 - ap(50, 0.7, 0, 31)) ** 2, "Square the single-trial probability."),
  mc("Why is the normal approximation poor for n = 30, p = 0.05?", "np = 1.5 < 5, so the histogram is strongly skewed", ["n is too large", "p is too large", "the continuity correction cannot be used"], "Skewed bars."),
  ms("For n = 200, p = 0.45, which are correct? Select all.", ["μ = 90", "σ ≈ 7.04", "P(X ≤ 90) ≈ P(Z < 0.07)", "P(X > 100) ≈ P(Z > 1.49)", "nq = 90"], [0, 1, 2, 3], "nq = 110."),
  tf("The hypergeometric distribution can also be approximated by a normal curve when the population is large compared with the sample.", true, "It is then nearly binomial."),
  tf("Without the continuity correction, the normal approximation of P(X ≤ k) is usually too large.", false, "It is usually too small (half the bar for k is left out)."),
  num("A company's defect rate is 4%. In 1000 items, approximate the number of defects exceeded only 1% of the time (1 decimal).", r(40 + 2.33 * Math.sqrt(38.4), 1), "μ = 40, σ ≈ 6.20; μ + 2.33σ.", null, 0.5),
  p4("A fair die is rolled 600 times. Approximate P(the number of sixes is within 10 of 100).", ap(600, 1 / 6, 90, 110), "89.5 to 110.5; σ ≈ 9.13."),
];

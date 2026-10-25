// 3.7 Comparing Discrete Distributions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, tableSvg, lineSvg } from "../../mdm4u/figs.mjs";
import { bin, binLE, geo, hyp } from "../../mdm4u/count.mjs";

const p4 = (prompt, v, fb, fig = null) => num(`${prompt} (4 decimals)`, Math.round(v * 1e4) / 1e4, fb, fig, 0.0002);

export const TOPIC = "3.7 Comparing Discrete Distributions";
export const Q = [
  p4("A box of 25 has 5 defective. Find P(no defective in 5) with the correct model.", hyp(25, 5, 5, 0), "Hypergeometric: ₂₀C₅/₂₅C₅."),
  p4("Same box: find P(no defective in 5) with a binomial approximation.", 0.8 ** 5, "0.8⁵."),
  num("By how much (4 decimals) does the binomial approximation exceed the hypergeometric value in the box problem above?", Math.round((0.8 ** 5 - hyp(25, 5, 5, 0)) * 1e4) / 1e4, "0.8⁵ − ₂₀C₅/₂₅C₅.", null, 0.0002),
  p4("Population 1000 with 200 successes, sample 5: find P(X = 0) (hypergeometric).", hyp(1000, 200, 5, 0), "₈₀₀C₅ ÷ ₁₀₀₀C₅."),
  num("A binomial model (n = 4) and a geometric model have the same p and E(binomial) = 2·E(geometric). Find p.", (() => { for (let p = 0.01; p < 1; p += 0.0001) if (Math.abs(4 * p - 2 * (1 - p) / p) < 0.001) return Math.round(p * 1000) / 1000; return NaN; })(), "4p = 2q/p ⇒ 2p² + p − 1 = 0 ⇒ p = 0.5.", null, 0.001),
  num("A uniform model on 1–n and a binomial model with n = 20, p = 0.35 have the same mean. Find n.", 13, "(1 + n)/2 = 7."),
  num("A geometric model has the same mean as a hypergeometric model with N = 40, a = 8, r = 10. Find p for the geometric model. (3 decimals)", 1 / 3, "E = 2 = q/p ⇒ p = 1/3.", null, 0.001),
  p4("Game A: binomial, 5 tosses, win if at least 4 heads. Game B: geometric, win if the first head comes on toss 1 or 2. Find P(win B) − P(win A).", 0.75 - (1 - binLE(5, 0.5, 3)), "B: 0.75; A: 6/32."),
  num("Observed counts in 160 trials of 4 tosses: 0: 11, 1: 38, 2: 62, 3: 39, 4: 10. Find the expected count for 2 heads under the binomial model.", 60, "160 × 6/16."),
  num("For the data above, find the largest difference between an observed and an expected count.", Math.max(...[11, 38, 62, 39, 10].map((o, x) => Math.abs(o - 160 * bin(4, 0.5, x)))), "Expected 10, 40, 60, 40, 10.", tableSvg([["heads", "0", "1", "2", "3", "4"], ["observed", "11", "38", "62", "39", "10"]], { rowHead: true })),
  num("Use the graph: hypergeometric P(X = 2) for samples of 5 from populations with 40% successes. What value does it approach? (4 decimals)", Math.round(bin(5, 0.4, 2) * 1e4) / 1e4, "The binomial value ₅C₂(0.4)²(0.6)³.", lineSvg([10, 20, 50, 100, 1000].map((N) => hyp(N, 0.4 * N, 5, 2)), { p: bin(5, 0.4, 2), pLabel: "limit", xs: [10, 20, 50, 100, 1000], ymax: 0.6, nt: 6, xlabel: "N", ylabel: "P(X = 2)" }), 0.0002),
  mc("The histogram comes from 100 batches of 3 items. Which model fits best?", "binomial with p about 0.3", ["uniform on 0–3", "geometric with p = 0.3", "hypergeometric with N = 3"], "Observed proportions ≈ 0.34, 0.44, 0.19, 0.03 vs binomial 0.343, 0.441, 0.189, 0.027.", barsSvg([34, 44, 19, 3], { labels: [0, 1, 2, 3], top: true, xlabel: "defects per batch", ylabel: "batches" })),
  mc("Which histogram (n = 10) is most skewed right?", "binomial with p = 0.1", ["binomial with p = 0.5", "binomial with p = 0.9", "uniform on 0–10"], "Small p: long right tail.", barsSvg([0, 1, 2, 3, 4, 5].map((x) => bin(10, 0.1, x)), { labels: [0, 1, 2, 3, 4, 5], histogram: true, fmt: (v) => v.toFixed(2) })),
  mc("Which comparison is correct for N = 12, a = 6, r = 6 versus binomial n = 6, p = 0.5?", "the hypergeometric has a taller middle bar", ["the binomial has a taller middle bar", "they are identical", "the hypergeometric has a larger mean"], `${hyp(12, 6, 6, 3).toFixed(3)} vs ${bin(6, 0.5, 3).toFixed(3)}.`),
  ms("Which statements are true? Select all.", ["a geometric variable has no maximum value", "a binomial variable has maximum value n", "a hypergeometric variable cannot exceed a", "a uniform variable always has mean 0", "the binomial mean equals np"], [0, 1, 2, 4], "The uniform mean is (a + b)/2."),
  tf("If a model's expected counts are very close to the observed counts in a large experiment, the model is a good fit.", true, "Informal goodness of fit."),
  tf("A hypergeometric distribution is always more spread out than the matching binomial.", false, "It is less spread out (draws without replacement)."),
  p4("A player can play game G (geometric, p = 0.2: win if she succeeds within 3 tries) or game B (binomial: at least 1 success in 3 tries at p = 0.2). Find P(win) for game G.", 1 - 0.8 ** 3, "1 − 0.8³ (same as B)."),
  p4("Same setup: find P(win) for game B.", 1 - 0.8 ** 3, "1 − P(0) = 1 − 0.8³."),
  num("A model predicts P(X ≥ 3) = 0.15 for daily absences. In a 180-day year, on how many days are 3 or more absences expected?", 27, "180 × 0.15."),
];

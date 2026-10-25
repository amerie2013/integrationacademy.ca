// 3.7 Comparing Discrete Distributions — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { bin, geo, hyp } from "../../mdm4u/count.mjs";

const p4 = (prompt, v, fb, fig = null) => num(`${prompt} (4 decimals)`, Math.round(v * 1e4) / 1e4, fb, fig, 0.0002);
const MODELS = ["uniform", "binomial", "geometric", "hypergeometric"];
const pick = (prompt, correct, fb, fig = null) => mc(prompt, correct, MODELS.filter((m) => m !== correct), fb, fig);

export const E = [
  pick("The number of 3s in 15 rolls of a die follows which model?", "binomial", "Fixed n, constant p."),
  pick("The number of rolls before the first 3 follows which model?", "geometric", "Waiting time."),
  pick("The number of girls on a 4-person team chosen from 6 girls and 6 boys follows which model?", "hypergeometric", "Without replacement."),
  pick("The number on a randomly chosen raffle ticket from 1–500 follows which model?", "uniform", "Equally likely."),
  pick("The number of correct guesses on 10 true/false questions follows which model?", "binomial", "Fixed n = 10, p = 0.5."),
  pick("The number of spades in a 7-card hand follows which model?", "hypergeometric", "Dealt without replacement."),
  pick("The number of calls a telemarketer makes before the first sale follows which model?", "geometric", "Waiting for the first success."),
  pick("The digit produced by a random-number generator (0–9) follows which model?", "uniform", "Equally likely digits."),
  num("Binomial with n = 12, p = 0.25: find E(X).", 3, "np."),
  num("Geometric with p = 0.25: find E(X).", 3, "q/p."),
  num("Uniform on 1–5: find E(X).", 3, "(1 + 5)/2."),
  num("Hypergeometric with N = 20, a = 6, r = 10: find E(X).", 3, "60/20."),
  pick("Which model's histogram is always flat?", "uniform", "Equal probabilities."),
  pick("Which model's histogram always decreases?", "geometric", "Each bar is q times the previous.", barsSvg([0.4, 0.24, 0.144, 0.0864, 0.0518], { labels: [0, 1, 2, 3, 4], histogram: true, fmt: (v) => v.toFixed(2) })),
  tf("Two distributions with the same mean must have the same histogram.", false, "Shape can differ."),
  tf("A binomial model needs independent trials.", true, "Condition."),
  tf("Sampling with replacement gives a binomial, not a hypergeometric, model.", true, "Replacement keeps p constant."),
  ms("Which models have a fixed number of trials or draws? Select all.", ["binomial", "hypergeometric", "geometric", "uniform (a single random value)"], [0, 1, 3], "Geometric continues until success."),
  pick("Read the histogram: which model fits best?", "uniform", "All bars equal.", barsSvg(Array(6).fill(1 / 6), { labels: [1, 2, 3, 4, 5, 6], histogram: true, ymax: 0.25 })),
  num("A binomial model with n = 20 has the same mean as a uniform model on 1–7. Find p.", 0.2, "20p = 4.", null, 0.001),
];

export const M = [
  p4("Compare: N = 10, a = 5, r = 4. Find P(X = 2) (hypergeometric).", hyp(10, 5, 4, 2), "₅C₂² ÷ ₁₀C₄."),
  p4("Compare: binomial n = 4, p = 0.5. Find P(X = 2).", bin(4, 0.5, 2), "6/16."),
  p4("Compare: geometric p = 0.5. Find P(X = 2).", geo(0.5, 2), "0.5³."),
  num("A store models daily returns as binomial with n = 50, p = 0.06. How many returns are expected per day?", 3, "np."),
  num("A model predicts P(X = 1) = 0.4 in 200 trials. How many trials with X = 1 are expected?", 80, "200 × 0.4."),
  num("Use the table: the expected counts from a binomial model (n = 3, p = 0.5) for 80 trials — find the expected count for X = 1.", 30, "80 × 3/8.", tableSvg([["x", "0", "1", "2", "3"], ["observed", "12", "28", "31", "9"]], { rowHead: true })),
  pick("A quality inspector tests parts one at a time until she finds a defective one. Which model?", "geometric", "Waiting time."),
  pick("A quality inspector tests 20 parts from a huge production run and counts the defective ones. Which model?", "binomial", "Huge population: nearly independent."),
  pick("A quality inspector tests 5 parts from a box of 12 and counts the defective ones. Which model?", "hypergeometric", "Small box, no replacement."),
  mc("A binomial (n = 6, p = 0.5) and a uniform on 0–6 both have mean 3. Which has the larger P(X = 3)?", "the binomial", ["the uniform", "they are equal", "cannot tell"], "20/64 ≈ 0.31 vs 1/7 ≈ 0.14."),
  mc("As the population grows with the sample size fixed, the hypergeometric distribution approaches…", "the binomial", ["the geometric", "the uniform", "nothing in particular"], "Draws become nearly independent."),
  tf("A geometric model is appropriate for the number of heads in 10 tosses.", false, "That is binomial."),
  tf("The binomial and hypergeometric models give the same expected value when p = a/N and n = r.", true, "np = ra/N."),
  ms("Which are possible values of a geometric variable (failures before first success)? Select all.", ["0", "1", "25", "−1", "2.5"], [0, 1, 2], "Non-negative integers."),
  num("A game: roll a die until a 6; you win 1 dollar per roll before the 6. What is the expected winnings (dollars)?", 5, "q/p = 5."),
  num("A game: roll a die 6 times; you win 1 dollar per 6. What is the expected winnings (dollars)?", 1, "np = 1."),
  num("Observed defects per batch of 4 in 100 batches: 0: 62, 1: 31, 2: 6, 3: 1. Estimate p for a binomial model. (3 decimals)", (31 + 12 + 3) / 400, "Total defects ÷ total items = 46/400.", tableSvg([["defects", "0", "1", "2", "3"], ["batches", "62", "31", "6", "1"]], { rowHead: true }), 0.001),
  p4("A student models a 10-question quiz score as binomial with p = 0.8. Find P(score = 8).", bin(10, 0.8, 8), "₁₀C₈(0.8)⁸(0.2)²."),
  pick("Which model would you use for the number of aces in the first 5 cards of a shuffled deck?", "hypergeometric", "Without replacement from 52."),
  num("Which value is most likely for a geometric variable with p = 0.3?", 0, "P(0) = p is largest."),
];

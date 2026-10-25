// 3.4 The Binomial Distribution — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { bin, binLE } from "../../mdm4u/count.mjs";

const p4 = (prompt, v, fb, fig = null) => num(`${prompt} (4 decimals)`, Math.round(v * 1e4) / 1e4, fb, fig, 0.0002);
const smallestN = (f) => { let n = 1; while (!f(n)) n++; return n; };

export const TOPIC = "3.4 The Binomial Distribution";
export const Q = [
  num("How many times must a die be rolled so that P(at least one 6) > 0.99?", smallestN((n) => 1 - (5 / 6) ** n > 0.99), "(5/6)ⁿ < 0.01."),
  num("A rare card is in 8% of packs. How many packs give P(at least one rare card) ≥ 0.75?", smallestN((n) => 1 - 0.92 ** n >= 0.75), "0.92ⁿ ≤ 0.25."),
  p4("An airline sells 52 tickets for 50 seats; each passenger shows up with probability 0.9. Find P(more than 50 show up).", bin(52, 0.9, 51) + bin(52, 0.9, 52), "P(51) + P(52)."),
  p4("A multiple-choice test has 20 questions with 4 choices. A student guesses. Find P(at least 10 correct).", 1 - binLE(20, 0.25, 9), "1 − P(X ≤ 9)."),
  p4("5% of eggs are cracked. A carton of 12 is rejected if it has 2 or more cracked eggs. Find P(rejected).", 1 - binLE(12, 0.05, 1), "1 − P(0) − P(1)."),
  num("n = 5, P(X = 1) = P(X = 2). Find p. (3 decimals)", 1 / 3, "5pq⁴ = 10p²q³ ⇒ q = 2p.", null, 0.001),
  num("n = 6 and P(X = 0) = 0.000064. Find p.", 0.8, "q⁶ = 0.000064 ⇒ q = 0.2.", null, 0.001),
  num("A binomial variable has E(X) = 4 and n = 10. Find the most likely value of X.", 4, "p = 0.4; P(4) ≈ 0.251 is larger than P(3) ≈ 0.215 and P(5) ≈ 0.201."),
  p4("Two players: A wins each game with probability 0.6. In 7 games, find P(A wins at least 4).", 1 - binLE(7, 0.6, 3), "1 − P(X ≤ 3)."),
  p4("A drug works for 70% of patients. In a trial of 15, find P(it works for at most 9).", binLE(15, 0.7, 9), "Cumulative."),
  p4("Use the table of a binomial distribution with n = 4: find p from P(X = 4), then find P(X = 2).", bin(4, 0.6, 2), "p⁴ = 0.1296 ⇒ p = 0.6.", tableSvg([["x", "0", "1", "2", "3", "4"], ["P", "0.0256", "0.1536", "?", "0.3456", "0.1296"]], { rowHead: true })),
  num("Use the histogram of a binomial distribution with n = 8: estimate p from the peak and E(X).", 0.25, "Peak at 2 = np ⇒ p = 0.25.", barsSvg([0, 1, 2, 3, 4, 5, 6, 7, 8].map((x) => bin(8, 0.25, x)), { labels: [0, 1, 2, 3, 4, 5, 6, 7, 8], histogram: true, fmt: (v) => v.toFixed(2) }), 0.001),
  p4("Use the histogram (n = 10, p = 0.5): find the total area of the red bars, P(4 ≤ X ≤ 6).", bin(10, 0.5, 4) + bin(10, 0.5, 5) + bin(10, 0.5, 6), "(210 + 252 + 210)/1024.", barsSvg([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => bin(10, 0.5, x)), { labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], histogram: true, hl: [4, 5, 6], fmt: (v) => v.toFixed(2) })),
  p4("Use the table of observed results for 4 tosses, 160 trials. Compare the observed relative frequency of exactly 3 heads with the binomial probability: enter the binomial probability.", bin(4, 0.5, 3), "₄C₃/16.", tableSvg([["heads", "0", "1", "2", "3", "4"], ["observed", "9", "41", "61", "38", "11"]], { rowHead: true })),
  mc("A machine makes 1% defective parts. In a sample of 100, which is most likely?", "0 or 1 defective (nearly tied)", ["exactly 5 defective", "exactly 10 defective", "all good is impossible"], "P(0) ≈ 0.366, P(1) ≈ 0.370."),
  ms("X is binomial with n = 10, p = 0.3. Which are true? Select all.", ["E(X) = 3", "P(X = 3) is the largest probability", "P(X = 0) = 0.7¹⁰", "the histogram is symmetric", "P(X ≥ 1) = 1 − 0.7¹⁰"], [0, 1, 2, 4], "Skewed right for p < 0.5."),
  tf("If X is binomial with n = 10 and p = 0.3, then 10 − X is binomial with n = 10 and p = 0.7.", true, "It counts the failures."),
  tf("For a fixed n, increasing p always increases P(X = 0).", false, "P(X = 0) = (1 − p)ⁿ decreases."),
  p4("A basketball player makes 40% of three-pointers. In 10 attempts, find P(she makes more than expected).", 1 - binLE(10, 0.4, 4), "Expected 4; P(X ≥ 5)."),
  p4("A family has 6 children. Find P(at least 2 boys and at least 2 girls).", binLE(6, 0.5, 4) - binLE(6, 0.5, 1), "P(2) + P(3) + P(4)."),
];

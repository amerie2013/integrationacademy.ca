// 2.3 Odds & the Complement — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3, mcf } from "./pk.mjs";
import { spinnerSvg, diceGridSvg, barsSvg, poolSvg } from "../../mdm4u/figs.mjs";
import { C } from "../../mdm4u/count.mjs";

export const TOPIC = "2.3 Odds & the Complement";
export const Q = [
  num("How many times must a die be rolled so that P(at least one 6) is greater than 0.9?", (() => { let n = 1; while (1 - (5 / 6) ** n <= 0.9) n++; return n; })(), "1 − (5/6)ⁿ > 0.9 ⇒ (5/6)ⁿ < 0.1."),
  num("How many times must a coin be tossed so that P(at least one head) is at least 0.999?", (() => { let n = 1; while (1 - 0.5 ** n < 0.999) n++; return n; })(), "0.5ⁿ ≤ 0.001."),
  p3("Five cards are dealt. What is P(at least one ace)?", 1 - C(48, 5) / C(52, 5), "1 − ₄₈C₅/₅₂C₅."),
  p3("A committee of 4 is chosen at random from 6 women and 6 men. What is P(at least one woman)?", 1 - C(6, 4) / C(12, 4), "1 − ₆C₄/₁₂C₄."),
  p3("A lock code uses 3 digits (0–9, repeats allowed). What is P(at least one digit is 0)?", 1 - 0.9 ** 3, "1 − 0.9³."),
  p3("A machine has 4 independent parts, each failing with probability 0.05. What is P(at least one part fails)?", 1 - 0.95 ** 4, "1 − 0.95⁴."),
  mcf("The odds in favour of A are 2 : 7 and B is the complement of A. What is P(B)?", [7, 9], [[2, 9], [2, 7], [5, 9]], "P(A) = 2/9."),
  mc("P(A) = 0.375. What are the odds against A, in lowest terms?", "5 : 3", ["3 : 5", "5 : 8", "3 : 8"], "0.625 : 0.375 = 5 : 3."),
  mc("A bookmaker quotes odds against three runners of 1 : 1, 2 : 1 and 3 : 1. What is the sum of the implied probabilities?", "13/12", ["1", "11/12", "3/2"], "1/2 + 1/3 + 1/4 = 13/12 — the extra 1/12 is the bookmaker's margin."),
  num("If P(A) = 3·P(A′), what is P(A)?", 0.75, "3x + x = 1.", null, 0.001),
  num("The odds in favour of A are k : 1 and P(A) = 0.875. Find k.", 7, "k/(k + 1) = 0.875."),
  p3("Two dice are rolled 3 times. What is P(at least one roll gives doubles)?", 1 - (5 / 6) ** 3, "Each roll: P(doubles) = 1/6."),
  p3("Use the grid: two dice are rolled. What is P(the sum is NOT between 5 and 9 inclusive)?", 1 - 24 / 36, "Sums 5–9: 4 + 5 + 6 + 5 + 4 = 24.", diceGridSvg((a, b) => a + b >= 5 && a + b <= 9)),
  mc("The spinner is spun twice. What are the odds in favour of landing on A at least once?", "3 : 1", ["1 : 3", "1 : 1", "1 : 4"], "P(no A) = 1/4; P(at least one) = 3/4.", spinnerSvg([["A", 0.5, "blue"], ["B", 0.5, "amber"]], { r: 55 })),
  p3("The bag shown holds 3 red and 9 other marbles. Two are drawn without replacement. What is P(at least one red)?", 1 - (9 / 12) * (8 / 11), "1 − P(no red).", poolSvg([[3, "red", "red"], [9, "gray", "other"]], { per: 12 })),
  p3("The bar chart shows P(a call to a help line is answered in under a minute) for each hour. Calls in the three hours are independent. What is P(at least one of three calls, one per hour, waits a minute or more)?", 1 - 0.9 * 0.8 * 0.7, "1 − 0.9 × 0.8 × 0.7.", barsSvg([0.9, 0.8, 0.7], { labels: ["9 am", "10 am", "11 am"], top: true, fmt: (v) => v.toFixed(1), ylabel: "P(answered < 1 min)" })),
  ms("For an event with P(A) = 0.2, which are correct? Select all.", ["odds in favour 1 : 4", "odds against 4 : 1", "P(A′) = 0.8", "odds in favour 1 : 5", "in 50 trials about 10 successes are expected"], [0, 1, 2, 4], "1 : 4, not 1 : 5."),
  tf("P(at least one 6 in 6 rolls of a die) is 1.", false, "1 − (5/6)⁶ ≈ 0.665."),
  tf("If the odds in favour of A are greater than 1 : 1, then P(A) > 0.5.", true, "m > n means m/(m + n) > 1/2."),
  p3("A raffle has 300 tickets and 4 prizes (a ticket wins at most once). You buy 5 tickets. What is P(you win at least one prize)?", 1 - C(295, 4) / C(300, 4), "1 − P(all 4 prizes go to the other 295 tickets) = 1 − ₂₉₅C₄/₃₀₀C₄."),
];

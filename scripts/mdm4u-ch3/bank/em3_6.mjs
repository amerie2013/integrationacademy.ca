// 3.6 The Hypergeometric Distribution — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, poolSvg } from "../../mdm4u/figs.mjs";
import { hyp } from "../../mdm4u/count.mjs";

const p4 = (prompt, v, fb, fig = null) => num(`${prompt} (4 decimals)`, Math.round(v * 1e4) / 1e4, fb, fig, 0.0002);

export const E = [
  num("N = 20, a = 5, r = 4. Find E(X).", 1, "ra/N."),
  num("N = 50, a = 10, r = 10. Find E(X).", 2, "100/50."),
  num("A class of 30 has 12 boys. A group of 5 is chosen. What is the expected number of boys?", 2, "5 × 12/30."),
  num("Five cards are dealt. What is the expected number of hearts?", 1.25, "5 × 13/52.", null, 0.001),
  p4("From 4 red and 6 blue marbles, 2 are drawn without replacement. Find P(both red).", hyp(10, 4, 2, 2), "₄C₂ ÷ ₁₀C₂."),
  p4("From 4 red and 6 blue marbles, 2 are drawn without replacement. Find P(none red).", hyp(10, 4, 2, 0), "₆C₂ ÷ ₁₀C₂."),
  p4("From 4 red and 6 blue marbles, 2 are drawn without replacement. Find P(exactly one red).", hyp(10, 4, 2, 1), "4 × 6 ÷ 45."),
  p4("A committee of 3 is chosen from 5 women and 5 men. Find P(3 women).", hyp(10, 5, 3, 3), "₅C₃ ÷ ₁₀C₃."),
  p4("Two cards are dealt. Find P(both are aces).", hyp(52, 4, 2, 2), "₄C₂ ÷ ₅₂C₂."),
  num("N = 10, a = 3, r = 5. What is the largest possible value of X?", 3, "Only 3 successes exist."),
  p4("The bag shown has 3 red and 5 other marbles. Two are drawn. Find P(exactly 1 red).", hyp(8, 3, 2, 1), "₃C₁₅C₁ ÷ ₈C₂.", poolSvg([[3, "red", "red"], [5, "gray", "other"]], { per: 8 })),
  p4("The histogram shows a hypergeometric distribution (N = 10, a = 4, r = 3). Read P(X = 1) from the formula.", hyp(10, 4, 3, 1), "₄C₁₆C₂ ÷ ₁₀C₃ = 60/120.", barsSvg([0, 1, 2, 3].map((x) => hyp(10, 4, 3, x)), { labels: [0, 1, 2, 3], histogram: true, fmt: (v) => v.toFixed(2) })),
  mc("Which situation is hypergeometric?", "the number of defective items in 5 chosen from a box of 20", ["the number of 6s in 5 rolls", "rolls until a 6", "a random digit"], "Without replacement from a small group."),
  mc("The hypergeometric distribution differs from the binomial because…", "draws are made without replacement", ["there are more than two outcomes", "trials continue until a success", "every value is equally likely"], "Dependent draws."),
  tf("The hypergeometric and binomial distributions have the same mean when p = a/N.", true, "ra/N = np."),
  tf("In a hypergeometric experiment, the probability of success stays the same on every draw.", false, "It changes after each draw."),
  tf("When the population is very large compared with the sample, the binomial is a good approximation.", true, "Draws are nearly independent."),
  ms("For N = 12, a = 5, r = 4, which are correct? Select all.", ["E(X) = 5/3", "X can be 0", "X can be 5", "X can be 4", "the draws are dependent"], [0, 1, 3, 4], "X ≤ r = 4."),
  num("40 fish are tagged. A later sample of 50 has 5 tagged. Estimate the population.", 400, "50 × 40 / 5."),
  num("A jury of 12 is chosen from 18 women and 12 men. What is the expected number of women?", 7.2, "12 × 18/30.", null, 0.001),
];

export const M = [
  p4("A box of 20 bulbs has 3 defective. Four are chosen. Find P(exactly 1 defective).", hyp(20, 3, 4, 1), "₃C₁₁₇C₃ ÷ ₂₀C₄."),
  p4("A box of 20 bulbs has 3 defective. Four are chosen. Find P(at least 1 defective).", 1 - hyp(20, 3, 4, 0), "1 − ₁₇C₄/₂₀C₄."),
  p4("Five cards are dealt. Find P(exactly 2 aces).", hyp(52, 4, 5, 2), "₄C₂₄₈C₃ ÷ ₅₂C₅."),
  p4("Five cards are dealt. Find P(no face cards).", hyp(52, 12, 5, 0), "₄₀C₅ ÷ ₅₂C₅."),
  p4("Six cards are dealt. Find P(exactly 3 red).", hyp(52, 26, 6, 3), "₂₆C₃² ÷ ₅₂C₆."),
  p4("A committee of 5 from 8 teachers and 7 students. Find P(at least 4 students).", hyp(15, 7, 5, 4) + hyp(15, 7, 5, 5), "Cases 4 and 5."),
  p4("A lottery draws 6 of 40 numbers. Find P(a ticket matches exactly 3).", hyp(40, 6, 6, 3), "₆C₃₃₄C₃ ÷ ₄₀C₆."),
  num("N = 60, a = 15, r = 12. Find E(X).", 3, "12 × 15/60."),
  num("A hypergeometric variable has N = 40, r = 10 and E(X) = 3. Find a.", 12, "10a/40 = 3."),
  num("80 deer are tagged; later 9 of 60 deer seen are tagged. Estimate the herd size. (nearest whole number)", Math.round((60 * 80) / 9), "60 × 80 / 9.", null, 1),
  p4("From 6 red and 4 blue, 3 are drawn. Compare: find P(all red) without replacement.", hyp(10, 6, 3, 3), "₆C₃ ÷ ₁₀C₃."),
  p4("From 6 red and 4 blue, 3 are drawn WITH replacement. Find P(all red).", 0.6 ** 3, "0.6³."),
  mc("A sample of 10 is drawn from 10 000 voters, 55% in favour. Which model is simplest and accurate?", "binomial with p = 0.55", ["hypergeometric only", "geometric", "uniform"], "Tiny sample relative to the population."),
  mc("For N = 8, a = 2, r = 3, what is P(X = 2)?", "6/56", ["2/56", "12/56", "1/28 × 2"], "₂C₂₆C₁ ÷ ₈C₃ = 6/56."),
  tf("For N = 10, a = 4, r = 3, P(X = 3) is smaller than the binomial value 0.4³.", true, "4/120 ≈ 0.033 < 0.064."),
  tf("A hypergeometric variable can take a value larger than the sample size.", false, "X ≤ r."),
  ms("Four cards are dealt. Which are correct? Select all.", ["E(aces) = 4/13", "P(no aces) > 0.7", "P(4 aces) = 1/270 725", "E(hearts) = 1", "P(no hearts) = 0.5"], [0, 1, 2, 3], "P(no hearts) ≈ 0.304."),
  p4("The histogram shows the number of women on a 4-person committee from 6 women and 6 men. Find P(X = 2).", hyp(12, 6, 4, 2), "₆C₂² ÷ ₁₂C₄.", barsSvg([0, 1, 2, 3, 4].map((x) => hyp(12, 6, 4, x)), { labels: [0, 1, 2, 3, 4], histogram: true, fmt: (v) => v.toFixed(3) })),
  p4("The pool shows 7 good and 3 faulty fuses. Three are tested. Find P(exactly 2 faulty).", hyp(10, 3, 3, 2), "₃C₂₇C₁ ÷ ₁₀C₃.", poolSvg([[7, "green", "good"], [3, "red", "faulty"]], { per: 10 })),
  num("A class of 25 has 10 who play hockey. A sample of 5 is chosen. Find E(hockey players).", 2, "5 × 10/25."),
];

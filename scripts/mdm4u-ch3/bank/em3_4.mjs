// 3.4 The Binomial Distribution — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3 } from "./pk.mjs";
import { barsSvg, treeSvg, fullTree } from "../../mdm4u/figs.mjs";
import { bin, binLE } from "../../mdm4u/count.mjs";

const p4 = (prompt, v, fb, fig = null) => num(`${prompt} (4 decimals)`, Math.round(v * 1e4) / 1e4, fb, fig, 0.0002);

export const E = [
  num("A binomial experiment has n = 20 and p = 0.3. What is E(X)?", 6, "np."),
  num("A coin is tossed 50 times. What is the expected number of heads?", 25, "50 × 0.5."),
  num("A die is rolled 30 times. What is the expected number of 6s?", 5, "30 × 1/6."),
  p4("n = 4, p = 0.5. Find P(X = 2).", bin(4, 0.5, 2), "6/16."),
  p4("n = 3, p = 0.2. Find P(X = 0).", bin(3, 0.2, 0), "0.8³."),
  p4("n = 3, p = 0.2. Find P(X = 3).", bin(3, 0.2, 3), "0.2³."),
  p4("n = 5, p = 0.5. Find P(X = 5).", bin(5, 0.5, 5), "1/32."),
  p4("n = 4, p = 0.25. Find P(X = 1).", bin(4, 0.25, 1), "4(0.25)(0.75)³."),
  p4("A coin is tossed 6 times. Find P(no heads).", 1 / 64, "0.5⁶."),
  p4("A die is rolled 4 times. Find P(at least one 6).", 1 - (5 / 6) ** 4, "1 − (5/6)⁴."),
  p4("Use the tree (three trials, p = 0.6): find P(exactly 2 successes).", bin(3, 0.6, 2), "3 paths × 0.6² × 0.4.", treeSvg(fullTree([["S", "F"], ["S", "F"], ["S", "F"]], [["0.6", "0.4"], ["0.6", "0.4"], ["0.6", "0.4"]]), { heads: ["1", "2", "3"] })),
  num("Read the binomial histogram (n = 6, p = 0.5): which value of X is most likely?", 3, "The tallest bar.", barsSvg([0, 1, 2, 3, 4, 5, 6].map((x) => bin(6, 0.5, x)), { labels: [0, 1, 2, 3, 4, 5, 6], histogram: true, fmt: (v) => v.toFixed(2) })),
  mc("Which is a binomial situation?", "the number of 5s in 12 rolls of a die", ["rolling until a 5 appears", "the number of aces in a 5-card hand", "the sum of 12 rolls"], "Fixed n, constant p, independent."),
  mc("For which p is a binomial histogram symmetric?", "0.5", ["0.1", "0.9", "any p"], "Equal chance of success and failure."),
  tf("In a binomial experiment the probability of success is the same on every trial.", true, "Constant p."),
  tf("Drawing 5 cards without replacement and counting hearts is binomial.", false, "Dependent draws."),
  tf("The expected number of successes is np.", true, "Mean of the binomial."),
  ms("Which are conditions of a binomial experiment? Select all.", ["a fixed number of trials", "independent trials", "two outcomes per trial", "a probability that changes each trial", "constant probability of success"], [0, 1, 2, 4], "p must stay the same."),
  num("A survey says 40% of students walk to school. In a class of 30, how many are expected to walk?", 12, "30 × 0.4."),
  num("n = 10, p = 0.5. How many terms (possible values of X) are in the distribution?", 11, "0 to 10."),
];

export const M = [
  p4("n = 8, p = 0.3. Find P(X = 2).", bin(8, 0.3, 2), "₈C₂(0.3)²(0.7)⁶."),
  p4("n = 10, p = 0.6. Find P(X = 7).", bin(10, 0.6, 7), "₁₀C₇(0.6)⁷(0.4)³."),
  p4("n = 12, p = 0.1. Find P(X ≤ 1).", binLE(12, 0.1, 1), "P(0) + P(1)."),
  p4("n = 6, p = 0.4. Find P(X ≥ 5).", bin(6, 0.4, 5) + bin(6, 0.4, 6), "P(5) + P(6)."),
  p4("A test has 8 questions with 5 choices. Guessing, find P(exactly 2 correct).", bin(8, 0.2, 2), "₈C₂(0.2)²(0.8)⁶."),
  p4("A player makes 75% of free throws. Find P(she makes all 6).", 0.75 ** 6, "0.75⁶."),
  p4("A player makes 75% of free throws. Find P(she makes at least 5 of 6).", bin(6, 0.75, 5) + bin(6, 0.75, 6), "P(5) + P(6)."),
  p4("2% of parts are defective. In a box of 25, find P(no defective parts).", 0.98 ** 25, "0.98²⁵."),
  p4("2% of parts are defective. In a box of 25, find P(at least one defective).", 1 - 0.98 ** 25, "1 − 0.98²⁵."),
  num("A binomial distribution has n = 40 and E(X) = 10. Find p.", 0.25, "np = 10.", null, 0.001),
  num("A binomial distribution has p = 0.15 and E(X) = 6. Find n.", 40, "n = 6/0.15."),
  p4("A family has 4 children (boys and girls equally likely). Use the histogram to find P(exactly 2 girls).", 6 / 16, "₄C₂/16.", barsSvg([0, 1, 2, 3, 4].map((x) => bin(4, 0.5, x)), { labels: [0, 1, 2, 3, 4], histogram: true, top: ["1/16", "4/16", "?", "4/16", "1/16"] })),
  mc("For n = 10 and p = 0.2, which describes the histogram?", "skewed right with its peak at 2", ["symmetric about 5", "skewed left with its peak at 8", "flat"], "Small p: skewed right; peak near np = 2."),
  mc("Which expression gives P(X = 3) for n = 7, p = 0.4?", "₇C₃(0.4)³(0.6)⁴", ["₇C₃(0.4)⁴(0.6)³", "(0.4)³(0.6)⁴", "₇P₃(0.4)³(0.6)⁴"], "Choose which 3 trials are successes."),
  tf("For n = 5 and p = 0.5, P(X = 2) = P(X = 3).", true, "Symmetric."),
  tf("P(X ≥ 1) = 1 − P(X = 0) for a binomial variable.", true, "Complement."),
  ms("For n = 4, p = 0.5, which are correct? Select all.", ["P(X = 0) = 1/16", "P(X = 2) = 3/8", "E(X) = 2", "P(X ≥ 3) = 5/16", "P(X = 4) = 1/4"], [0, 1, 2, 3], "P(4) = 1/16."),
  p4("A seed germinates with probability 0.85. Ten are planted. Find P(at least 9 germinate).", bin(10, 0.85, 9) + bin(10, 0.85, 10), "P(9) + P(10)."),
  num("Read the histogram (n = 10, p = 0.3): what is E(X)?", 3, "np.", barsSvg([0, 1, 2, 3, 4, 5, 6, 7].map((x) => bin(10, 0.3, x)), { labels: [0, 1, 2, 3, 4, 5, 6, 7], histogram: true, fmt: (v) => v.toFixed(2) })),
  p3("A coin is tossed 5 times. What is P(more heads than tails)?", 0.5, "By symmetry."),
];

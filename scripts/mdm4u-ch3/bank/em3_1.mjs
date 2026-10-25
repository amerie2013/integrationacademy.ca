// 3.1 Random Variables & Discrete Distributions — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3 } from "./pk.mjs";
import { barsSvg, tableSvg, diceGridSvg } from "../../mdm4u/figs.mjs";
import { C } from "../../mdm4u/count.mjs";

const dice = (pred) => { let c = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (pred(a, b)) c++; return c / 36; };

export const E = [
  num("Two coins are tossed and X = number of heads. How many possible values does X have?", 3, "0, 1, 2."),
  num("A die is rolled and X = the number shown. What is the largest value of X?", 6, "1 to 6."),
  p3("Two coins are tossed; X = number of heads. What is P(X = 1)?", 0.5, "HT, TH."),
  p3("Three coins are tossed; X = number of tails. What is P(X = 0)?", 1 / 8, "HHH."),
  p3("Two dice are rolled; X = the sum. What is P(X = 7)?", 6 / 36, "6 outcomes."),
  p3("Two dice are rolled; X = the sum. What is P(X = 12)?", 1 / 36, "(6,6)."),
  num("A distribution has P(X = 0) = 0.2, P(X = 1) = 0.35, P(X = 2) = k. Find k.", 0.45, "Sum to 1.", null, 0.001),
  num("P(X = 1) = 0.1, P(X = 2) = 0.6, P(X = 3) = 0.3. Find P(X ≥ 2).", 0.9, "0.6 + 0.3.", null, 0.001),
  num("What is the total area of the bars of any probability histogram?", 1, "Sum of the probabilities."),
  num("In a probability histogram, what is the width of each bar?", 1, "Centred on x."),
  num("Read the histogram: what is P(X = 2)?", 0.4, "Height of the bar at 2.", barsSvg([0.1, 0.3, 0.4, 0.2], { labels: [0, 1, 2, 3], histogram: true, top: ["0.1", "0.3", "0.4", "0.2"] }), 0.001),
  num("Read the table: find the missing probability.", 0.25, "1 − 0.75.", tableSvg([["x", "1", "2", "3", "4"], ["P(X = x)", "0.15", "?", "0.4", "0.2"]], { rowHead: true }), 0.001),
  mc("Which is a discrete random variable?", "the number of goals in a game", ["the time to run 100 m", "a person's height", "the temperature at noon"], "Counted values."),
  mc("Which table could be a probability distribution?", "0.2, 0.5, 0.3", ["0.2, 0.5, 0.4", "0.6, −0.1, 0.5", "1.2, −0.2, 0"], "Values in [0, 1] adding to 1."),
  tf("A random variable assigns a number to each outcome of an experiment.", true, "Definition."),
  tf("In a valid distribution, a probability can be 1.1 if the others are small.", false, "Each probability is at most 1."),
  tf("The bars of a probability histogram touch each other.", true, "Width 1 centred on each value."),
  ms("Which are discrete random variables? Select all.", ["number of siblings", "mass of a backpack", "number of texts sent today", "time spent on homework", "number of heads in 5 tosses"], [0, 2, 4], "Counted, not measured."),
  num("Four coins are tossed; X = number of heads. What is the most likely value of X?", 2, "6 of 16 outcomes."),
  p3("Four coins are tossed; X = number of heads. What is P(X = 2)?", 6 / 16, "₄C₂ ÷ 16."),
];

export const M = [
  p3("Two dice are rolled; X = |difference|. What is P(X = 1)?", dice((a, b) => Math.abs(a - b) === 1), "10 outcomes."),
  p3("Two dice are rolled; X = the larger number. What is P(X = 5)?", 9 / 36, "2(5) − 1 = 9 cells."),
  p3("Two dice are rolled; X = the product. What is P(X ≤ 4)?", dice((a, b) => a * b <= 4), "Products 1, 2, 3, 4: 8 cells."),
  p3("Use the grid of two dice: X = the smaller number. What is P(X = 3)?", dice((a, b) => Math.min(a, b) === 3), "Cells marked 3.", diceGridSvg((a, b) => Math.min(a, b) === 3, { label: (a, b) => Math.min(a, b) })),
  p3("From 3 boys and 2 girls, two are chosen; X = number of girls. What is P(X = 1)?", (3 * 2) / C(5, 2), "₃C₁₂C₁ ÷ ₅C₂."),
  p3("Three cards are dealt; X = number of red cards. What is P(X = 3)?", C(26, 3) / C(52, 3), "₂₆C₃ ÷ ₅₂C₃."),
  num("P(X = x) = kx for x = 1, 2, 3, 4, 5. Find k. (3 decimals)", 1 / 15, "15k = 1.", null, 0.001),
  num("P(X = x) = k(x + 2) for x = 0, 1, 2. Find k. (3 decimals)", 1 / 9, "k(2 + 3 + 4) = 1.", null, 0.001),
  num("P(X = 0) = 0.3, P(X = 1) = 2a, P(X = 2) = a. Find a. (3 decimals)", 0.7 / 3, "0.3 + 3a = 1.", null, 0.001),
  num("A die was rolled 50 times; a 4 appeared 11 times. What is the relative frequency of 4?", 0.22, "11 ÷ 50.", null, 0.001),
  num("Use the frequency table of 80 trials: what is the relative frequency of X = 2?", 0.35, "28 ÷ 80.", tableSvg([["x", "0", "1", "2", "3"], ["frequency", "10", "30", "28", "12"]], { rowHead: true }), 0.001),
  mc("A spinner (1/2 A, 1/4 B, 1/4 C) is spun twice; X = number of A's. What is P(X = 1)?", "1/2", ["1/4", "3/4", "1/3"], "2 × 1/2 × 1/2."),
  mc("Which histogram shape does the sum of two dice have?", "symmetric, peaked at 7", ["flat", "decreasing", "skewed right"], "6 ways for 7."),
  tf("A relative-frequency histogram from 10 trials always matches the probability histogram exactly.", false, "Small samples vary."),
  tf("If P(X = x) = 0.1x for x = 1, 2, 3, 4, then it is a valid distribution.", true, "0.1 + 0.2 + 0.3 + 0.4 = 1."),
  ms("X = number of heads in 3 tosses. Which are correct? Select all.", ["P(X = 0) = 1/8", "P(X = 1) = 3/8", "P(X ≥ 1) = 7/8", "P(X = 2) = 1/4", "Σ P = 1"], [0, 1, 2, 4], "P(X = 2) = 3/8."),
  num("Two dice: X = sum. Find P(X is even). (3 decimals)", 0.5, "18 of 36.", null, 0.001),
  p3("A bag has 4 red and 4 blue; 2 are drawn without replacement. X = number of red. What is P(X = 2)?", C(4, 2) / C(8, 2), "6 ÷ 28."),
  num("Read the histogram: what is P(X ≥ 3)?", 0.35, "0.25 + 0.1.", barsSvg([0.15, 0.2, 0.3, 0.25, 0.1], { labels: [0, 1, 2, 3, 4], histogram: true, top: ["0.15", "0.2", "0.3", "0.25", "0.1"] }), 0.001),
  p3("A coin is tossed until a head or 3 tosses; X = number of tosses. What is P(X = 3)?", 0.25, "TT first: 1/4."),
];

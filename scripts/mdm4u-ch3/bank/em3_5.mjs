// 3.5 The Geometric Distribution — 20 easy + 20 medium questions (X = number of failures before the first success)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, treeSvg } from "../../mdm4u/figs.mjs";
import { geo } from "../../mdm4u/count.mjs";

const p4 = (prompt, v, fb, fig = null) => num(`${prompt} (4 decimals)`, Math.round(v * 1e4) / 1e4, fb, fig, 0.0002);
const X = "X = number of failures before the first success";

export const E = [
  p4(`p = 0.5, ${X}. Find P(X = 0).`, 0.5, "Success on the first trial."),
  p4(`p = 0.5, ${X}. Find P(X = 1).`, 0.25, "0.5 × 0.5."),
  p4(`p = 0.2, ${X}. Find P(X = 2).`, geo(0.2, 2), "0.8² × 0.2."),
  p4(`p = 0.3, ${X}. Find P(X = 1).`, geo(0.3, 1), "0.7 × 0.3."),
  num(`p = 0.25, ${X}. Find E(X).`, 3, "q/p = 0.75/0.25."),
  num(`p = 0.5, ${X}. Find E(X).`, 1, "0.5/0.5."),
  num(`p = 0.1, ${X}. Find E(X).`, 9, "0.9/0.1."),
  p4(`p = 0.4, ${X}. Find P(X ≥ 2).`, 0.36, "0.6²."),
  p4("A die is rolled until a 6 appears. Find P(the first roll is a 6).", 1 / 6, "X = 0."),
  num("A die is rolled until a 6 appears. What is the expected number of non-6 rolls first?", 5, "(5/6)/(1/6)."),
  p4("Use the tree: a player tries until she wins (p = 0.3). Find P(she wins on the 3rd try).", geo(0.3, 2), "L, L, W: 0.7² × 0.3.", treeSvg([{ t: "W", p: "0.3" }, { t: "L", p: "0.7", c: [{ t: "W", p: "0.3" }, { t: "L", p: "0.7", c: [{ t: "W", p: "0.3" }, { t: "L", p: "0.7" }] }] }], { heads: ["1", "2", "3"] })),
  num("Read the histogram: what is p? (P(X = 0) = p)", 0.4, "The first bar.", barsSvg([0, 1, 2, 3, 4].map((k) => geo(0.4, k)), { labels: [0, 1, 2, 3, 4], histogram: true, top: true, fmt: (v) => v.toFixed(3) }), 0.001),
  mc("Which is a geometric (waiting-time) situation?", "the number of tosses before the first head", ["the number of heads in 10 tosses", "the number of aces in a hand", "a random digit"], "Waiting for the first success."),
  mc("What shape does a geometric histogram have?", "decreasing", ["symmetric", "flat", "increasing"], "Each bar is q times the previous."),
  tf("In a geometric situation the number of trials is fixed in advance.", false, "Trials continue until a success."),
  tf("The most likely value of a geometric variable (failures before the first success) is 0.", true, "P(0) = p is the largest bar."),
  tf("P(X ≥ k) = qᵏ for a geometric variable.", true, "The first k trials fail."),
  ms("Which are needed for a geometric model? Select all.", ["independent trials", "constant probability of success", "a fixed number of trials", "waiting for the first success", "sampling without replacement"], [0, 1, 3], "No fixed n; independent trials."),
  num("A cereal prize appears in 20% of boxes. How many boxes do you expect to buy without a prize before the first prize?", 4, "0.8/0.2."),
  num("A cereal prize appears in 20% of boxes. On which box do you expect the first prize?", 5, "1/p."),
];

export const M = [
  p4("A player makes 60% of shots and shoots until she makes one. Find P(she misses exactly 3 first).", geo(0.6, 3), "0.4³ × 0.6."),
  p4("Cards are drawn with replacement until an ace. Find P(the first ace is the 4th card).", (12 / 13) ** 3 * (1 / 13), "(12/13)³(1/13)."),
  p4("A salesperson succeeds on 15% of calls. The histogram shows the number of failed calls before the first sale. Find P(no success in the first 6 calls).", 0.85 ** 6, "P(X ≥ 6) = q⁶.", barsSvg([0, 1, 2, 3, 4, 5, 6, 7, 8].map((k) => geo(0.15, k)), { labels: [0, 1, 2, 3, 4, 5, 6, 7, 8], histogram: true, fmt: (v) => v.toFixed(2) })),
  p4("A salesperson succeeds on 15% of calls. Find P(a success within the first 6 calls).", 1 - 0.85 ** 6, "1 − q⁶."),
  num("A salesperson succeeds on 15% of calls. Expected failures before the first success? (2 decimals)", 0.85 / 0.15, "q/p.", null, 0.01),
  num("A geometric variable has E(X) = 4. Find p.", 0.2, "q/p = 4 ⇒ p = 1/5.", null, 0.001),
  num("A geometric variable has P(X = 0) = 0.35. Find E(X). (3 decimals)", 0.65 / 0.35, "p = 0.35.", null, 0.001),
  num("P(X ≥ 2) = 0.49 for a geometric variable. Find p.", 0.3, "q² = 0.49.", null, 0.001),
  p4("A die is rolled until a 1 or 2 appears. Find P(exactly 2 rolls without 1 or 2 first).", (2 / 3) ** 2 * (1 / 3), "p = 1/3."),
  p4("Two dice are rolled until doubles appear. Find P(doubles on the first or second roll).", 1 / 6 + (5 / 6) * (1 / 6), "1 − (5/6)²."),
  p4("A coin is tossed until heads. Find P(more than 4 tosses are needed).", 0.5 ** 4, "First 4 are tails."),
  p4("Read the histogram: find P(X ≤ 2).", geo(0.3, 0) + geo(0.3, 1) + geo(0.3, 2), "0.3 + 0.21 + 0.147.", barsSvg([0, 1, 2, 3, 4, 5].map((k) => geo(0.3, k)), { labels: [0, 1, 2, 3, 4, 5], histogram: true, top: true, fmt: (v) => v.toFixed(3) })),
  mc("A player needs a 6 on a die to start a game. Which is larger: P(start on the 1st roll) or P(start on the 2nd roll)?", "the 1st roll", ["the 2nd roll", "they are equal", "cannot tell"], "1/6 vs (5/6)(1/6)."),
  mc("Which situation is binomial, not geometric?", "counting sixes in 20 rolls", ["rolling until a six", "calling until someone answers", "drawing with replacement until an ace"], "Fixed number of trials."),
  tf("If p doubles, the expected number of failures q/p is cut in half.", false, "q also changes: e.g. p = 0.2 → 4, p = 0.4 → 1.5."),
  tf("The geometric probabilities qᵏp for k = 0, 1, 2, … add to 1.", true, "Geometric series p/(1 − q)."),
  ms("p = 0.5. Which are correct? Select all.", ["P(X = 0) = 0.5", "P(X = 2) = 0.125", "E(X) = 1", "P(X ≥ 3) = 0.125", "P(X = 1) = 0.5"], [0, 1, 2, 3], "P(X = 1) = 0.25."),
  num("A student guesses true/false questions until one is correct. What is the expected number of wrong answers first?", 1, "q/p = 0.5/0.5."),
  p4("A website visitor buys with probability 0.04. Find P(the first sale comes from the 10th visitor).", geo(0.04, 9), "0.96⁹ × 0.04."),
  num("How many visitors are expected before the first sale (p = 0.04)?", 24, "0.96/0.04."),
];

// 3.5 The Geometric Distribution — 20 hard questions (X = number of failures before the first success)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, treeSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { geo } from "../../mdm4u/count.mjs";

const p4 = (prompt, v, fb, fig = null) => num(`${prompt} (4 decimals)`, Math.round(v * 1e4) / 1e4, fb, fig, 0.0002);
const smallest = (f) => { let k = 0; while (!f(k)) k++; return k; };

export const TOPIC = "3.5 The Geometric Distribution";
export const Q = [
  p4("Ana and Ben alternate rolling a die, Ana first; the first to roll a 6 wins. Find P(Ana wins).", 6 / 11, "(1/6)/(1 − 25/36)."),
  p4("Ana and Ben alternate tossing a coin, Ana first; the first head wins. Find P(Ben wins).", 1 / 3, "1 − 2/3."),
  num("For p = 0.15, find the smallest k with P(X ≥ k) < 0.2.", smallest((k) => 0.85 ** k < 0.2), "0.85ᵏ < 0.2."),
  num("For p = 0.2, find the median: the smallest k with P(X ≤ k) ≥ 0.5.", smallest((k) => 1 - 0.8 ** (k + 1) >= 0.5), "1 − 0.8^(k+1) ≥ 0.5."),
  p4("p = 0.3. Find P(X is even) (X = 0, 2, 4, …).", 0.3 / (1 - 0.49), "p/(1 − q²)."),
  p4("p = 0.25. Find P(2 ≤ X ≤ 4).", geo(0.25, 2) + geo(0.25, 3) + geo(0.25, 4), "q² − q⁵."),
  p4("p = 0.4. Given that the first 3 trials failed, find P(at least 2 more failures).", 0.6 ** 2, "Memoryless: q²."),
  num("A geometric variable has E(X) = 2.5. Find P(X = 0). (3 decimals)", 1 / 3.5, "q/p = 2.5 ⇒ p = 1/3.5.", null, 0.001),
  num("A rare event has p = 0.002 per day. Find the expected number of days before it happens.", 499, "0.998/0.002."),
  num("A player wins a game with p = 0.35. She plays until she wins, paying 2 dollars per game. Find the expected total cost (dollars, 2 decimals).", 2 / 0.35, "Expected number of games 1/p, times 2.", null, 0.01),
  p4("Use the tree: a vending machine works with probability 0.8 each time; a student tries until it works. Find P(it takes at least 3 tries).", 0.2 ** 2, "Fails the first two: 0.2².", treeSvg([{ t: "OK", p: "0.8" }, { t: "fail", p: "0.2", c: [{ t: "OK", p: "0.8" }, { t: "fail", p: "0.2" }] }], { heads: ["try 1", "try 2"] })),
  num("Use the histogram of a geometric distribution: find p from the ratio of consecutive bars, then E(X). Enter E(X).", 1.5, "Ratio 0.6 = q; p = 0.4; q/p = 1.5.", barsSvg([0, 1, 2, 3, 4].map((k) => geo(0.4, k)), { labels: [0, 1, 2, 3, 4], histogram: true, top: true, fmt: (v) => v.toFixed(3) }), 0.001),
  num("Use the table of a geometric distribution: find p.", 0.25, "P(1)/P(0) = q = 0.75.", tableSvg([["x", "0", "1", "2"], ["P", "0.25", "0.1875", "0.140625"]], { rowHead: true }), 0.001),
  p4("Use the histogram (p = 0.5): find the total probability of the red bars, P(X ≥ 3).", 0.125, "0.5³.", barsSvg([0, 1, 2, 3, 4, 5, 6].map((k) => geo(0.5, k)), { labels: [0, 1, 2, 3, 4, 5, 6], histogram: true, hl: [3, 4, 5, 6], fmt: (v) => v.toFixed(3) })),
  mc("Two games: A has p = 0.2 per try; B requires two successes in a row at p = 0.5 per try (one 'attempt' = two tries). Which attempt has the higher success probability?", "B", ["A", "they are equal", "cannot tell"], "B: 0.5 × 0.5 = 0.25, which is more than A's 0.2."),
  ms("A geometric variable has p = 0.25. Which are true? Select all.", ["E(X) = 3", "P(X = 0) = 0.25", "P(X ≥ 2) = 0.5625", "P(X = 1) > P(X = 0)", "the first success is expected on trial 4"], [0, 1, 2, 4], "P(1) = 0.1875 < 0.25."),
  tf("Knowing that the first 5 trials failed does not change the probability that the next trial is a success.", true, "Independent trials (memoryless)."),
  tf("If E(X) = 0, then p = 1.", true, "q/p = 0 ⇒ q = 0."),
  p4("A die is rolled until the same number appears twice in a row (after the first roll, each roll matches the previous one with probability 1/6). Find P(the first match happens on roll 4).", (5 / 6) ** 2 * (1 / 6), "Rolls 2 and 3 do not match, roll 4 matches."),
  p4("In a game, you toss a coin until heads; you win 1 dollar per tail. Find P(you win at least 3 dollars).", 0.125, "At least 3 tails first: 0.5³."),
];

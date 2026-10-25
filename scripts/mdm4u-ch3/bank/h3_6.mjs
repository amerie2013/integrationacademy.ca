// 3.6 The Hypergeometric Distribution — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, poolSvg, lineSvg, tableSvg } from "../../mdm4u/figs.mjs";
import { C, hyp, bin } from "../../mdm4u/count.mjs";

const p4 = (prompt, v, fb, fig = null) => num(`${prompt} (4 decimals)`, Math.round(v * 1e4) / 1e4, fb, fig, 0.0002);

export const TOPIC = "3.6 The Hypergeometric Distribution";
export const Q = [
  p4("Thirteen cards are dealt. Find P(exactly 4 spades).", hyp(52, 13, 13, 4), "₁₃C₄₃₉C₉ ÷ ₅₂C₁₃."),
  p4("Thirteen cards are dealt. Find P(no aces).", hyp(52, 4, 13, 0), "₄₈C₁₃ ÷ ₅₂C₁₃."),
  p4("A lottery draws 6 of 49. Find P(at least 3 matches).", [3, 4, 5, 6].reduce((s, x) => s + hyp(49, 6, 6, x), 0), "Sum x = 3 to 6."),
  p4("From 10 women and 8 men, a committee of 6 is chosen. Find P(more women than men).", [4, 5, 6].reduce((s, x) => s + hyp(18, 10, 6, x), 0), "4, 5 or 6 women."),
  p4("A shipment of 50 has 6 defective. A sample of 8 is accepted if it has at most 1 defective. Find P(accepted).", hyp(50, 6, 8, 0) + hyp(50, 6, 8, 1), "P(0) + P(1)."),
  p4("For the shipment above, approximate P(accepted) with a binomial (p = 0.12).", bin(8, 0.12, 0) + bin(8, 0.12, 1), "0.88⁸ + 8(0.12)(0.88)⁷."),
  num("A hypergeometric variable has N = 30, a = 9 and E(X) = 2.4. Find r.", 8, "9r/30 = 2.4."),
  num("100 birds are banded. Later, 12 of 90 birds caught are banded. Estimate the population.", 750, "90 × 100 / 12."),
  num("Tagging study: 60 tagged; a sample of n fish has 4 tagged and the estimate is 450. Find n.", 30, "60n/4 = 450."),
  p4("From a standard deck, 5 cards are dealt. Find P(exactly 2 hearts and exactly 2 spades).", (C(13, 2) * C(13, 2) * C(26, 1)) / C(52, 5), "₁₃C₂ × ₁₃C₂ × ₂₆C₁ ÷ ₅₂C₅."),
  p4("Use the pool: a committee of 4 is chosen from 5 seniors, 4 juniors and 3 sophomores. Find P(2 seniors, 1 junior, 1 sophomore).", (C(5, 2) * 4 * 3) / C(12, 4), "₅C₂ × 4 × 3 ÷ ₁₂C₄.", poolSvg([[5, "red", "seniors"], [4, "blue", "juniors"], [3, "green", "sophomores"]], { per: 12 })),
  p4("The graph shows P(X = 0) for a sample of 5 from a population with 20% successes as the population size N grows. Find the limiting value it approaches.", 0.8 ** 5, "Binomial: 0.8⁵.", lineSvg([10, 20, 50, 100, 1000].map((N) => hyp(N, 0.2 * N, 5, 0)), { p: 0.8 ** 5, pLabel: "limit", xs: [10, 20, 50, 100, 1000], ymax: 0.4, nt: 4, xlabel: "N", ylabel: "P(X = 0)" })),
  p4("Use the histogram (N = 15, a = 6, r = 5): find P(X ≥ 3).", [3, 4, 5].reduce((s, x) => s + hyp(15, 6, 5, x), 0), "Sum the bars for 3, 4, 5.", barsSvg([0, 1, 2, 3, 4, 5].map((x) => hyp(15, 6, 5, x)), { labels: [0, 1, 2, 3, 4, 5], histogram: true, hl: [3, 4, 5], fmt: (v) => v.toFixed(3) })),
  p4("Use the table: find the missing probability P(X = 2) for N = 9, a = 3, r = 3.", hyp(9, 3, 3, 2), "₃C₂₆C₁ ÷ ₉C₃ = 18/84.", tableSvg([["x", "0", "1", "2", "3"], ["P", "20/84", "45/84", "?", "1/84"]], { rowHead: true })),
  mc("For N = 20, a = 10, r = 10, which is more likely: X = 5 (hypergeometric) or X = 5 (binomial with p = 0.5)?", "the hypergeometric value", ["the binomial value", "they are equal", "cannot tell"], `${(hyp(20, 10, 10, 5)).toFixed(3)} vs ${(bin(10, 0.5, 5)).toFixed(3)}: without replacement the middle is more likely.`),
  ms("A committee of 5 is drawn from 6 men and 4 women. Which are correct? Select all.", ["E(women) = 2", "P(0 women) = 6/252", "P(5 women) = 0", "the number of men is hypergeometric too", "P(2 women) = P(3 women)"], [0, 1, 2, 3], `P(2) = ${C(4, 2) * C(6, 3)}/252, P(3) = ${C(4, 3) * C(6, 2)}/252.`),
  tf("For any hypergeometric distribution, P(X = x) for the number of successes equals P(Y = r − x) for the number of failures.", true, "They describe the same samples."),
  tf("Capture–recapture assumes that tagged animals are just as likely to be caught as untagged ones.", true, "Otherwise the sample proportion is biased."),
  p4("A quality inspector tests 6 of 30 phones, 5 of which are faulty, and rejects the batch if 2 or more are faulty. Find P(rejected).", 1 - hyp(30, 5, 6, 0) - hyp(30, 5, 6, 1), "1 − P(0) − P(1)."),
  num("A hand of 13 cards is dealt. Find the expected number of face cards.", 3, "13 × 12/52."),
];

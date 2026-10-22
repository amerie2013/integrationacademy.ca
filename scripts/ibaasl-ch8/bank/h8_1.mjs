// 8.1 Theoretical and Experimental Probability — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { gridDoc, relFreqDoc } from "../figs8.mjs";

const S = String.raw;
const D = [1, 2, 3, 4, 5, 6];
const cnt = (f, A = D, B = D) => A.reduce((c, a) => c + B.filter((b) => f(a, b)).length, 0);
const run = (seed, p, n) => { let s = seed, c = 0; return Array.from({ length: n }, (_, i) => { s = (s * 1103515245 + 12345) % 2147483648; if (s / 2147483648 < p) c++; return c / (i + 1); }); };

export const TOPIC = "8.1 Theoretical and Experimental Probability";
export const Q = [
  mc("Two dice are rolled. Find P(the sum is a multiple of 4).", S`$\frac14$`, [S`$\frac{1}{6}$`, S`$\frac{5}{18}$`, S`$\frac{2}{9}$`], "Sums 4, 8, 12: 3 + 5 + 1 = 9 of 36."),
  num("Two dice are rolled. How many outcomes have a product that is a perfect square?", cnt((a, b) => Number.isInteger(Math.sqrt(a * b))), "Doubles (6), plus (1,4), (4,1): 8.", gridDoc(D, D, { cell: (a, b) => a * b, rowName: "first die", colName: "second die" })),
  mc("Two dice are rolled. Find P(one score is exactly double the other).", S`$\frac16$`, [S`$\frac{1}{12}$`, S`$\frac{1}{9}$`, S`$\frac{2}{9}$`], "(1,2), (2,4), (3,6) and reversed: 6 of 36."),
  mc("A four-sided die (1–4) and a six-sided die are rolled and the scores multiplied. Find P(the product is at least 12).", S`$\frac13$`, [S`$\frac{7}{24}$`, S`$\frac14$`, S`$\frac{5}{24}$`], "(2,6), (3,4), (3,5), (3,6), (4,3), (4,4), (4,5), (4,6): 8 of 24.", gridDoc([1, 2, 3, 4], D, { mark: (a, b) => a * b >= 12, cell: (a, b) => a * b, rowName: "four-sided", colName: "six-sided" })),
  num("A bag contains red, blue and green counters in the ratio 2 : 3 : 5. Find P(not green).", 0.5, "5 of 10 parts are green.", null, 0.001),
  num("A bag has x red and 12 blue sweets. After 4 more red sweets are added, P(red) = 0.5. Find x.", 8, "x + 4 = 12."),
  num("A box has 3 black and n white pens. P(black) = 0.15. Find n.", 17, "3/(3 + n) = 0.15 ⇒ 3 + n = 20."),
  num("A spinner has P(1) = 2k, P(2) = 3k, P(3) = k and P(4) = 4k. Find P(an even number).", 0.7, "10k = 1, k = 0.1; P(2) + P(4) = 0.7.", null, 0.001),
  mc("The graph shows the relative frequency of an event in a long experiment. Which statement is best?", "it is settling near 0.6, so 0.6 is a good estimate", ["the probability is 1", "the first few trials give the best estimate", "the event is impossible"], "The curve settles near the dashed line.", relFreqDoc(run(907, 0.6, 100), 0.6)),
  num("A biased die gives a 1 with relative frequency 0.22 over 500 rolls. How many more 1s than expected for a fair die were rolled? (nearest whole number)", 27, "110 rolled; fair expectation 500/6 ≈ 83.3; difference ≈ 27."),
  mc("Three coins are tossed. Find P(more heads than tails).", S`$\frac12$`, [S`$\frac38$`, S`$\frac14$`, S`$\frac58$`], "HHH, HHT, HTH, THH."),
  mc("Four coins are tossed. Find P(exactly two heads).", S`$\frac{6}{16}$`, [S`$\frac{4}{16}$`, S`$\frac{8}{16}$`, S`$\frac{5}{16}$`], "6 arrangements of HHTT out of 16."),
  num("Two dice are rolled. How many outcomes have a difference of at least 3?", cnt((a, b) => Math.abs(a - b) >= 3), "Differences 3, 4, 5: 6 + 4 + 2.", gridDoc(D, D, { mark: (a, b) => Math.abs(a - b) >= 3, cell: (a, b) => Math.abs(a - b), rowName: "first die", colName: "second die" })),
  ms("A die is rolled 1200 times. Which results would suggest bias? Select all.", ["a six 290 times", "a six 205 times", "a one 120 times", "a three 196 times"], [0, 2], "Expected 200 each; 290 and 120 are far off."),
  tf("If an experiment's relative frequency after 1000 trials is 0.497, the event must have probability 0.497.", false, "It is only an estimate."),
  num("In a game, P(win) = 0.15, P(draw) = 0.35. In 40 games, how many losses are expected?", 20, "P(lose) = 0.5; 40 × 0.5."),
  mc("A number is chosen from 1 to 50. Find P(it is a multiple of 4 or of 6).", S`$\frac{8}{25}$`, [S`$\frac{1}{5}$`, S`$\frac{12}{25}$`, S`$\frac{7}{25}$`], "Multiples of 4: 12, of 6: 8, of 12: 4; 12 + 8 − 4 = 16."),
  num("Two dice are rolled 180 times. How many times would you expect the sum to be 6?", 25, S`$180\times\frac{5}{36}$.`),
  mc("Two digits are chosen from 1, 2, 3, 4 (no repeat) to form a two-digit number. Find P(the number is greater than 30).", S`$\frac12$`, [S`$\frac13$`, S`$\frac{5}{12}$`, S`$\frac{7}{12}$`], "12 numbers; those starting 3 or 4: 6."),
  mc("A spinner shows 1, 2 or 3 with equal probability and is spun twice. The scores are added. Which total is most likely?", "4", ["3", "5", "6"], "Totals 2–6 occur 1, 2, 3, 2, 1 times; 4 is most common.", gridDoc([1, 2, 3], [1, 2, 3], { mark: (a, b) => a + b === 4, cell: (a, b) => a + b, rowName: "first spin", colName: "second spin" })),
];

// 8.1 Theoretical and Experimental Probability — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { gridDoc, relFreqDoc } from "../figs8.mjs";

const S = String.raw;
const D = [1, 2, 3, 4, 5, 6];
const run = (seed, p, n) => { let s = seed, c = 0; return Array.from({ length: n }, (_, i) => { s = (s * 1103515245 + 12345) % 2147483648; if (s / 2147483648 < p) c++; return c / (i + 1); }); };

export const E = [
  mc("A fair die is rolled. Find P(a number less than 3).", S`$\frac13$`, [S`$\frac12$`, S`$\frac16$`, S`$\frac23$`], "1 and 2: 2 of 6."),
  mc("A card is drawn from cards numbered 1 to 10. Find P(an odd number).", S`$\frac12$`, [S`$\frac25$`, S`$\frac35$`, S`$\frac{1}{10}$`], "5 odd numbers out of 10."),
  num("P(it rains tomorrow) = 0.35. Find P(it does not rain tomorrow).", 0.65, "1 − 0.35.", null, 0.001),
  num("P(A) = 0.62. Find P(A′).", 0.38, "1 − 0.62.", null, 0.001),
  tf("A probability can be greater than 1.", false, "Probabilities lie between 0 and 1."),
  tf("If P(A) = 0, then A is impossible.", true, "Probability 0 means it cannot happen."),
  fill("The set of all possible outcomes of an experiment is called the ___ space.", ["sample", "Sample"], "Sample space U."),
  mc("A letter is chosen at random from the word MATHS. Find P(a vowel).", S`$\frac15$`, [S`$\frac25$`, S`$\frac14$`, S`$\frac45$`], "Only A."),
  num("A spinner lands on red 27 times in 90 spins. Estimate P(red) as a decimal.", 0.3, "27 ÷ 90.", null, 0.001),
  num("P(a seed germinates) = 0.8. How many of 250 seeds are expected to germinate?", 200, "250 × 0.8."),
  mc("Two coins are tossed. How many outcomes are in the sample space?", "4", ["2", "3", "8"], "HH, HT, TH, TT."),
  mc("Two coins are tossed. Find P(two tails).", S`$\frac14$`, [S`$\frac12$`, S`$\frac13$`, S`$\frac34$`], "TT is 1 of 4."),
  mc("Two dice are rolled. How many outcomes are in the sample space?", "36", ["12", "11", "6"], "6 × 6."),
  mc("Two dice are rolled. Find P(the sum is 3).", S`$\frac{2}{36}$`, [S`$\frac{1}{36}$`, S`$\frac{3}{36}$`, S`$\frac{1}{11}$`], "(1, 2) and (2, 1).", gridDoc(D, D, { cell: (a, b) => a + b, rowName: "first die", colName: "second die" })),
  mc("Using the sample-space grid, find P(both dice show the same number).", S`$\frac16$`, [S`$\frac{1}{36}$`, S`$\frac{1}{12}$`, S`$\frac13$`], "6 doubles out of 36.", gridDoc(D, D, { mark: (a, b) => a === b, cell: (a, b) => `${a},${b}`, rowName: "first die", colName: "second die" })),
  tf("The more trials in an experiment, the more reliable the relative frequency is as an estimate.", true, "Large samples settle down."),
  mc("The relative frequency of an event is:", "number of successes ÷ number of trials", ["number of trials ÷ number of successes", "number of successes × number of trials", "always 1/2"], "Successes over trials."),
  num("A fair coin is tossed 60 times. How many heads are expected?", 30, "60 × 0.5."),
  mc("A bag holds 4 red and 6 green marbles. Find P(green).", S`$\frac35$`, [S`$\frac25$`, S`$\frac23$`, S`$\frac{6}{4}$`], "6 of 10."),
  ms("Which are possible values of a probability? Select all.", ["0", "0.45", "1", "1.2"], [0, 1, 2], "0 ≤ P ≤ 1."),
];

export const M = [
  mc("Two dice are rolled. Find P(the sum is 9).", S`$\frac19$`, [S`$\frac{1}{12}$`, S`$\frac16$`, S`$\frac{5}{36}$`], "(3,6), (4,5), (5,4), (6,3): 4 of 36."),
  mc("Two dice are rolled. Find P(the larger score is 4).", S`$\frac{7}{36}$`, [S`$\frac16$`, S`$\frac{4}{36}$`, S`$\frac{9}{36}$`], "Cells with max 4: 16 − 9 = 7.", gridDoc(D, D, { mark: (a, b) => Math.max(a, b) === 4, cell: (a, b) => Math.max(a, b), rowName: "first die", colName: "second die" })),
  mc("Three coins are tossed. Find P(all three the same).", S`$\frac14$`, [S`$\frac18$`, S`$\frac38$`, S`$\frac12$`], "HHH and TTT: 2 of 8."),
  num("A bag has 5 red, 7 blue and some white balls. P(red) = 0.25. How many white balls are there?", 8, "Total 20; 20 − 12."),
  num("A spinner has P(A) = 0.15, P(B) = 0.4, P(C) = 0.3 and P(D) = x. Find x.", 0.15, "Probabilities sum to 1.", null, 0.001),
  num("A drawing pin is dropped 250 times and lands point up 95 times. How many times would you expect point up in 1000 drops?", 380, "95/250 = 0.38; 1000 × 0.38."),
  mc("The graph shows the relative frequency of an event after each trial. The best estimate of its probability is about:", "0.3", ["0.1", "0.5", "0.8"], "The graph settles near 0.3.", relFreqDoc(run(71, 0.3, 80), 0.3)),
  mc("A die is rolled 600 times and a 4 appears 162 times. This suggests:", "the die may be biased towards 4", ["the die is fair", "the die cannot show 4", "the experiment was too short"], "Expected about 100; 162 is far higher."),
  mc("A letter is chosen from the word STATISTICS. Find P(S or T).", S`$\frac{6}{10}$`, [S`$\frac{3}{10}$`, S`$\frac{4}{10}$`, S`$\frac{7}{10}$`], "S appears 3 times, T 3 times."),
  num("A spinner (1–4) and a coin are used. How many outcomes are in the sample space?", 8, "4 × 2."),
  mc("A spinner numbered 1–4 is spun and a die rolled. Find P(the two numbers are equal).", S`$\frac16$`, [S`$\frac14$`, S`$\frac{1}{24}$`, S`$\frac{1}{10}$`], "4 matching pairs out of 24."),
  num("P(a phone is faulty) = 0.012. How many faulty phones are expected in a batch of 1500?", 18, "1500 × 0.012."),
  mc("A card is drawn from a standard pack of 52. Find P(a picture card: jack, queen or king).", S`$\frac{3}{13}$`, [S`$\frac{1}{13}$`, S`$\frac{4}{13}$`, S`$\frac{3}{52}$`], "12 of 52."),
  ms("Which experiments have equally likely outcomes? Select all.", ["rolling a fair die", "tossing a fair coin", "whether a drawing pin lands point up", "tomorrow's weather: rain or no rain"], [0, 1], "The last two need experimental estimates."),
  mc("Two dice are rolled. Find P(the product is odd).", S`$\frac14$`, [S`$\frac12$`, S`$\frac13$`, S`$\frac34$`], "Both odd: 9 of 36."),
  num("Two dice are rolled. How many outcomes have a sum greater than 9?", 6, "Sum 10: 3, sum 11: 2, sum 12: 1."),
  tf("If a coin shows heads 6 times in 10 tosses, P(heads) for that coin must be 0.6.", false, "0.6 is only an estimate from a small sample."),
  mc("A fair die is rolled 90 times. The expected number of results greater than 4 is:", "30", ["15", "45", "60"], S`$90\times\frac26$.`),
  num("Four friends each roll a die 50 times and get 7, 10, 9 and 6 sixes. Find the pooled relative frequency of a six.", 0.16, "32 ÷ 200.", null, 0.001),
  mc("Two dice are rolled. Find P(at least one six).", S`$\frac{11}{36}$`, [S`$\frac{12}{36}$`, S`$\frac{10}{36}$`, S`$\frac16$`], S`$1-\frac{25}{36}$.`),
];

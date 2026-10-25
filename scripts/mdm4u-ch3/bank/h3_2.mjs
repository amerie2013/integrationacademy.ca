// 3.2 Expected Value — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, tableSvg, spinnerSvg } from "../../mdm4u/figs.mjs";
import { C } from "../../mdm4u/count.mjs";

const $ = (prompt, v, fb, fig = null) => num(`${prompt} (dollars, 2 decimals)`, Math.round(v * 100) / 100, fb, fig, 0.01);

export const TOPIC = "3.2 Expected Value";
export const Q = [
  num("A game costs 3 dollars. Roll two dice: doubles pay k dollars, otherwise nothing. Find k for a fair game.", 18, "k/6 = 3."),
  num("A game costs 1 dollar. Draw a card: an ace pays k dollars, a face card pays 2 dollars, otherwise nothing. Find k for a fair game.", 7, "(4k + 24)/52 = 1."),
  $("Three coins are tossed. You win 1 dollar per head but pay 2 dollars to play. Find the expected net gain.", 1.5 - 2, "E(heads) = 1.5."),
  $("Two cards are drawn without replacement. You win 10 dollars for each ace. Find the expected winnings.", 10 * (2 * 4) / 52, "E(aces) = 2 × 4/52."),
  $("An insurer sells 1000 policies at 250 dollars. Each policy has P(claim of 8000) = 0.015 and P(claim of 2000) = 0.04. Find the expected profit per policy.", 250 - 120 - 80, "250 − 8000(0.015) − 2000(0.04)."),
  num("A random variable takes 1, 2, 3 with P(1) = a, P(2) = b, P(3) = 0.4 and E(X) = 2.2. Find a. (3 decimals)", 0.2, "a + b = 0.6; a + 2b = 1.", null, 0.001),
  num("X takes 0, x, 10 with probabilities 0.5, 0.3, 0.2 and E(X) = 3.5. Find x.", 5, "0.3x + 2 = 3.5."),
  num("A die is rolled; the payout is X² dollars. Find the fair price. (2 decimals)", 91 / 6, "(1 + 4 + … + 36)/6.", null, 0.01),
  num("A player tosses a coin until heads appears (at most 4 tosses) and wins 2ⁿ dollars where n is the number of tosses used (n = 4 if no head appears in the first three). Find E(winnings). (2 decimals)", 2 * 0.5 + 4 * 0.25 + 8 * 0.125 + 16 * 0.125, "Tosses 1, 2, 3, 4 with probabilities 1/2, 1/4, 1/8, 1/8.", null, 0.01),
  $("Choose a committee of 3 from 5 women and 4 men. Each woman chosen earns the club 10 dollars. Find the expected earnings.", 10 * (3 * 5) / 9, "E(women) = 3 × 5/9."),
  num("Read the table: find E(X) and then E(3X + 4). Enter E(3X + 4).", 3 * 2.15 + 4, "E(X) = 0.3 + 0.8 + 0.45 + 0.6 = 2.15; then 3(2.15) + 4.", tableSvg([["x", "1", "2", "3", "4"], ["P", "0.3", "0.4", "0.15", "0.15"]], { rowHead: true }), 0.001),
  $("The spinner is spun twice and pays the sum of the two numbers in dollars. Find the expected payout.", 2 * (0.5 * 1 + 0.25 * 2 + 0.25 * 6), "E(one spin) doubled.", spinnerSvg([["1", 0.5, "blue"], ["2", 0.25, "green"], ["6", 0.25, "amber"]], { r: 55 })),
  num("The histogram shows the number of defects per item. A defect costs 12 dollars to fix. Find the expected repair cost per item (dollars, 2 decimals).", 12 * (0 * 0.7 + 1 * 0.2 + 2 * 0.07 + 3 * 0.03), "12 × E(defects).", barsSvg([0.7, 0.2, 0.07, 0.03], { labels: [0, 1, 2, 3], histogram: true, top: ["0.7", "0.2", "0.07", "0.03"] }), 0.01),
  num("A company launches a product with the outcomes shown (profit in millions; a loss is −1). Find the expected profit in millions.", 0.6 + 0.25 - 0.2, "2(0.3) + 0.5(0.5) − 1(0.2).", tableSvg([["profit (millions)", "2", "0.5", "−1"], ["P", "0.3", "0.5", "0.2"]], { rowHead: true }), 0.001),
  mc("Game A: win 100 with P = 0.01. Game B: win 2 with P = 0.5. Both cost 1. Which statement is true?", "both have the same expected net gain", ["A is better on average", "B is better on average", "neither can be compared"], "E(A) = 1, E(B) = 1: both net 0."),
  ms("X has E(X) = 5. Which are true? Select all.", ["E(X + 2) = 7", "E(−X) = −5", "E(3X − 5) = 10", "E(X²) = 25 always", "E(0.5X) = 2.5"], [0, 1, 2, 4], "E(X²) is not E(X)² in general."),
  tf("A game with a positive expected net gain guarantees the player wins money.", false, "Only on average in the long run."),
  tf("The expected value of a uniform distribution on 1 to n is (n + 1)/2.", true, "The middle value."),
  $("Five cards are dealt. You win 1 dollar per heart and pay 1.50 dollars to play. Find the expected net gain.", 5 * 0.25 - 1.5, "E(hearts) = 1.25."),
  num("A spinner pays 0, 5 or 20 dollars. P(5) = 0.3 and the fair price is 5 dollars. Find P(20).", 0.175, "1.5 + 20p = 5.", null, 0.001),
];

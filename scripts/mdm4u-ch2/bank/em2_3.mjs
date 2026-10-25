// 2.3 Odds & the Complement — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3, mcf } from "./pk.mjs";
import { spinnerSvg, poolSvg, diceGridSvg } from "../../mdm4u/figs.mjs";

export const E = [
  mc("A die is rolled. What are the odds in favour of rolling a 6?", "1 : 5", ["1 : 6", "5 : 1", "6 : 1"], "1 favourable, 5 unfavourable."),
  mc("A die is rolled. What are the odds against rolling a 6?", "5 : 1", ["1 : 5", "6 : 1", "1 : 6"], "Unfavourable first."),
  mc("A coin is tossed. What are the odds in favour of heads?", "1 : 1", ["1 : 2", "2 : 1", "1 : 0"], "Even odds."),
  mc("A card is drawn. What are the odds in favour of a heart?", "1 : 3", ["1 : 4", "3 : 1", "13 : 52"], "13 : 39."),
  mc("A card is drawn. What are the odds against an ace?", "12 : 1", ["1 : 12", "13 : 1", "48 : 52"], "48 : 4."),
  mcf("The odds in favour of an event are 2 : 3. What is its probability?", [2, 5], [[2, 3], [3, 5], [1, 2]], "2 ÷ (2 + 3)."),
  mcf("The odds against an event are 4 : 1. What is its probability?", [1, 5], [[1, 4], [4, 5], [3, 4]], "1 ÷ (4 + 1)."),
  num("P(A) = 0.27. What is P(A′)?", 0.73, "1 − 0.27.", null, 0.001),
  num("P(not A) = 0.6. What is P(A)?", 0.4, "1 − 0.6.", null, 0.001),
  p3("Two coins are tossed. What is P(at least one head)?", 3 / 4, "1 − P(TT)."),
  p3("A die is rolled. What is P(not a 1)?", 5 / 6, "1 − 1/6."),
  mc("The spinner has 3 equal sectors, one of them green. What are the odds in favour of green?", "1 : 2", ["1 : 3", "2 : 1", "3 : 1"], "1 green, 2 not.", spinnerSvg([["G", 1 / 3, "green"], ["R", 1 / 3, "red"], ["B", 1 / 3, "blue"]], { r: 55 })),
  mc("The bag shown holds 4 red and 6 blue marbles. What are the odds in favour of drawing red?", "2 : 3", ["2 : 5", "3 : 2", "4 : 10"], "4 : 6.", poolSvg([[4, "red", "red"], [6, "blue", "blue"]], { per: 10 })),
  tf("Odds of 3 : 7 in favour mean a probability of 3/7.", false, "P = 3/10."),
  tf("If the odds in favour are 1 : 1, the probability is 1/2.", true, "Even odds."),
  tf("P(A) + P(A′) = 1 for every event A.", true, "Complement rule."),
  ms("Which are equivalent to a probability of 1/4? Select all.", ["odds in favour 1 : 3", "odds against 3 : 1", "odds in favour 1 : 4", "a 25% chance", "odds against 1 : 3"], [0, 1, 3], "1 : 3 in favour; 3 : 1 against."),
  num("P(win) = 0.2. If the odds in favour are written 1 : n, what is n?", 4, "0.2 : 0.8 = 1 : 4."),
  p3("Three coins are tossed. What is P(at least one tail)?", 7 / 8, "1 − 1/8."),
  num("The odds against rain are 7 : 3. What is P(rain) as a decimal?", 0.3, "3 ÷ 10.", null, 0.001),
];

export const M = [
  mc("P(A) = 0.35. What are the odds in favour of A?", "7 : 13", ["7 : 20", "13 : 7", "35 : 100"], "0.35 : 0.65."),
  mc("The spinner has 12 equal sectors; 5 of them are A. What are the odds against A?", "7 : 5", ["5 : 7", "7 : 12", "12 : 5"], "7/12 : 5/12.", spinnerSvg([["A", 5 / 12, "blue"], ["not A", 7 / 12, "gray"]], { r: 55 })),
  mc("Two dice are rolled. What are the odds in favour of a sum of 7?", "1 : 5", ["1 : 6", "6 : 30", "5 : 1"], "6 : 30."),
  mc("Two dice are rolled. What are the odds against doubles?", "5 : 1", ["1 : 5", "6 : 1", "1 : 6"], "30 : 6."),
  mcf("The odds against a horse are 15 : 2. What is the probability that it wins?", [2, 17], [[2, 15], [15, 17], [1, 8]], "2 ÷ 17."),
  p3("A die is rolled 3 times. What is P(at least one 6)?", 1 - (5 / 6) ** 3, "1 − (5/6)³."),
  p3("Four coins are tossed. What is P(at least one head)?", 15 / 16, "1 − 1/16."),
  p3("A spinner lands on red with probability 0.3. It is spun 3 times. What is P(at least one red)?", 1 - 0.7 ** 3, "1 − 0.7³."),
  p3("Two cards are drawn without replacement. What is P(at least one is not a heart)?", 1 - (13 / 52) * (12 / 51), "1 − P(both hearts)."),
  p3("Use the grid: two dice are rolled. What is P(at least one die shows 5 or 6)?", 1 - 16 / 36, "1 − P(both ≤ 4).", diceGridSvg((a, b) => a >= 5 || b >= 5)),
  num("The odds in favour of A are 3 : 5. What are the odds in favour of A′? Enter the first number when written as 5 : x.", 3, "Reverse: 5 : 3."),
  num("P(A) = 0.8. The odds in favour are k : 1. What is k?", 4, "0.8 : 0.2."),
  ms("Which statements are true? Select all.", ["odds against = reverse of odds in favour", "odds can be greater than 1 : 1", "odds of 2 : 3 in favour mean P = 2/5", "a probability of 0.9 means odds in favour of 9 : 10", "P(at least one) = 1 − P(none)"], [0, 1, 2, 4], "0.9 means 9 : 1."),
  mc("A sports site gives odds in favour of a team winning of 4 : 1. What probability does this imply?", "0.8", ["0.25", "0.2", "0.75"], "4 ÷ 5."),
  tf("If the odds against an event are 9 : 1, the event happens about 1 time in 10.", true, "P = 1/10."),
  tf("P(at least one head in 5 tosses) = 5 × 1/2.", false, "1 − (1/2)⁵ = 31/32."),
  p3("A test has 4 true/false questions. A student guesses. What is P(at least one wrong)?", 1 - 1 / 16, "1 − P(all right)."),
  p3("P(rain on a given day) = 0.25, independent each day. What is P(at least one rainy day in 4 days)?", 1 - 0.75 ** 4, "1 − 0.75⁴."),
  num("A game's odds in favour of winning are 1 : 9. In 200 plays, about how many wins are expected?", 20, "P = 0.1."),
  mcf("A card is drawn. What is P(not a face card and not an ace)?", [36, 52], [[40, 52], [12, 52], [16, 52]], "52 − 12 − 4 = 36."),
];

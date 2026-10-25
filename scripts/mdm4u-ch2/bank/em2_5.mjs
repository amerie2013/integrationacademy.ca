// 2.5 Independent & Dependent Events — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3, mcf } from "./pk.mjs";
import { treeSvg, poolSvg, tableSvg, spinnerSvg } from "../../mdm4u/figs.mjs";

export const E = [
  mcf("A coin is tossed twice. What is P(heads both times)?", [1, 4], [[1, 2], [1, 3], [3, 4]], "1/2 × 1/2."),
  mcf("A die is rolled twice. What is P(a 6 then a 1)?", [1, 36], [[1, 6], [2, 36], [1, 12]], "1/6 × 1/6."),
  mcf("A coin is tossed and a die is rolled. What is P(tails and a 3)?", [1, 12], [[1, 8], [2, 3], [1, 6]], "1/2 × 1/6."),
  num("P(A) = 0.4 and P(B) = 0.5, and A and B are independent. What is P(A and B)?", 0.2, "0.4 × 0.5.", null, 0.001),
  num("A spinner lands on red with probability 0.3. It is spun twice. What is P(red both times)?", 0.09, "0.3².", null, 0.001),
  p3("A bag has 3 red and 2 blue marbles. One is drawn, replaced, then another drawn. What is P(both red)?", 9 / 25, "3/5 × 3/5."),
  p3("A bag has 3 red and 2 blue marbles. Two are drawn without replacement. What is P(both red)?", (3 / 5) * (2 / 4), "3/5 × 2/4."),
  p3("Two cards are drawn without replacement. What is P(both are spades)?", (13 / 52) * (12 / 51), "13/52 × 12/51."),
  p3("Two cards are drawn with replacement. What is P(both are spades)?", 1 / 16, "1/4 × 1/4."),
  mc("Which pair of events is dependent?", "drawing two cards without replacement", ["tossing a coin twice", "rolling two dice", "drawing two cards with replacement"], "The first draw changes the deck."),
  mc("Which pair of events is independent?", "rolling a die and spinning a spinner", ["drawing two marbles without replacement", "choosing a president then a vice-president from a club", "dealing two cards"], "Separate devices."),
  tf("Drawing with replacement gives independent draws.", true, "The bag is restored."),
  tf("For dependent events, P(A and B) = P(A) × P(B).", false, "Use P(B | A)."),
  tf("Mutually exclusive events with non-zero probabilities are independent.", false, "If one happens, the other cannot."),
  ms("Which are independent events? Select all.", ["two tosses of a coin", "rain today and rain tomorrow", "rolling a die and tossing a coin", "two cards dealt from a deck", "spinning the same spinner twice"], [0, 2, 4], "Rain persists; dealing without replacement."),
  p3("Use the tree: two draws with replacement from a bag with 2 green and 3 yellow balls. What is P(green then yellow)?", (2 / 5) * (3 / 5), "Multiply along the path.", treeSvg([{ t: "G", p: "2/5", c: [{ t: "G", p: "2/5" }, { t: "Y", p: "3/5" }] }, { t: "Y", p: "3/5", c: [{ t: "G", p: "2/5" }, { t: "Y", p: "3/5" }] }], { heads: ["1st", "2nd"] })),
  p3("The spinner is spun 3 times. What is P(blue every time)?", (1 / 3) ** 3, "(1/3)³.", spinnerSvg([["B", 1 / 3, "blue"], ["R", 1 / 3, "red"], ["G", 1 / 3, "green"]], { r: 55 })),
  num("P(A) = 0.5, P(B) = 0.6 and P(A and B) = 0.3. Are A and B independent? Enter 1 for yes, 0 for no.", 1, "0.5 × 0.6 = 0.3."),
  p3("A family has 2 children. Assuming boys and girls are equally likely and independent, what is P(two boys)?", 1 / 4, "1/2 × 1/2."),
  p3("A test has 2 multiple-choice questions with 4 options each. A student guesses. What is P(both correct)?", 1 / 16, "1/4 × 1/4."),
];

export const M = [
  p3("Three cards are drawn without replacement. What is P(all three are aces)?", (4 / 52) * (3 / 51) * (2 / 50), "4/52 × 3/51 × 2/50."),
  p3("A bag has 6 red and 4 white balls. Two are drawn without replacement. What is P(one of each colour)?", 2 * (6 / 10) * (4 / 9), "RW + WR."),
  p3("A bag has 6 red and 4 white balls. Two are drawn with replacement. What is P(one of each colour)?", 2 * 0.6 * 0.4, "2 × 0.6 × 0.4."),
  p3("A machine works on a day with probability 0.97. What is P(it works 5 days in a row)?", 0.97 ** 5, "0.97⁵."),
  p3("A student guesses on 5 true/false questions. What is P(all 5 correct)?", 1 / 32, "(1/2)⁵."),
  p3("Two dice are rolled twice. What is P(a sum of 7 both times)?", 1 / 36, "(1/6)²."),
  num("A and B are independent with P(A) = 0.3 and P(B) = 0.4. What is P(A or B)?", 0.58, "0.3 + 0.4 − 0.12.", null, 0.001),
  num("A and B are independent with P(A) = 0.3 and P(B) = 0.4. What is P(neither)?", 0.42, "0.7 × 0.6.", null, 0.001),
  p3("A class has 14 girls and 11 boys. Two students are chosen one after the other. What is P(both boys)?", (11 / 25) * (10 / 24), "11/25 × 10/24."),
  p3("Use the bag shown: two marbles are drawn without replacement. What is P(both green)?", (5 / 12) * (4 / 11), "5/12 × 4/11.", poolSvg([[5, "green", "green"], [7, "violet", "purple"]], { per: 12 })),
  num("Use the table: are “plays sport” and “has a job” independent? Enter 1 for yes, 0 for no.", 1, "P(sport and job) = 0.12 = 0.4 × 0.3.", tableSvg([["", "job", "no job", "total"], ["sport", "12", "28", "40"], ["no sport", "18", "42", "60"], ["total", "30", "70", "100"]], { rowHead: true })),
  mc("P(A) = 0.4, P(B) = 0.25, P(A and B) = 0.15. Which is true?", "A and B are dependent", ["A and B are independent", "A and B are mutually exclusive", "P(A or B) = 0.65"], "0.4 × 0.25 = 0.1 ≠ 0.15."),
  mc("Two cards are drawn without replacement. What is P(the second is a heart, given the first was a heart)?", "12/51", ["13/52", "12/52", "13/51"], "12 hearts left in 51 cards."),
  tf("If A and B are independent, then A and B′ are also independent.", true, "P(A ∩ B′) = P(A) − P(A)P(B) = P(A)P(B′)."),
  tf("Drawing two socks from a drawer without replacement gives independent draws.", false, "The first sock changes the drawer."),
  ms("A bag has 4 red and 4 blue marbles; two are drawn without replacement. Which are correct? Select all.", ["P(RR) = 3/14", "P(RB) = 2/7", "P(same colour) = 3/7", "P(RR) = 1/4", "P(different colours) = 4/7"], [0, 1, 2, 4], "4/8 × 3/7 = 3/14; RB = 4/8 × 4/7 = 2/7."),
  p3("A security code has 3 letters A–Z, repeats allowed, chosen at random. What is P(all three letters are vowels)?", (5 / 26) ** 3, "(5/26)³."),
  p3("A security code has 3 letters A–Z, no repeats, chosen at random. What is P(all three letters are vowels)?", (5 / 26) * (4 / 25) * (3 / 24), "5/26 × 4/25 × 3/24."),
  num("A player makes 80% of free throws (independent). What is P(she misses both of two shots)?", 0.04, "0.2 × 0.2.", null, 0.001),
  num("A player makes 80% of free throws (independent). What is P(she makes exactly one of two)?", 0.32, "2 × 0.8 × 0.2.", null, 0.001),
];

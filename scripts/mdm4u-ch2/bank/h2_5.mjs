// 2.5 Independent & Dependent Events — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3 } from "./pk.mjs";
import { treeSvg, poolSvg, tableSvg, spinnerSvg } from "../../mdm4u/figs.mjs";

export const TOPIC = "2.5 Independent & Dependent Events";
export const Q = [
  p3("Cards are drawn without replacement until an ace appears. What is P(the first ace is the 4th card)?", (48 / 52) * (47 / 51) * (46 / 50) * (4 / 49), "Three non-aces then an ace."),
  p3("A box of 10 fuses has 3 faulty. Fuses are tested one at a time without replacement. What is P(the 2nd faulty fuse is found on the 3rd test)?", 2 * (3 / 10) * (7 / 9) * (2 / 8), "One faulty in the first two (2 orders), then faulty."),
  p3("Three dice are rolled. What is P(all three show different numbers)?", (6 * 5 * 4) / 216, "1 × 5/6 × 4/6."),
  p3("A series system has 3 independent parts with reliabilities 0.95, 0.9 and 0.98. What is P(the system works)?", 0.95 * 0.9 * 0.98, "All must work."),
  p3("A parallel system has 3 independent parts with reliabilities 0.95, 0.9 and 0.98. It works if at least one part works. What is P(it works)? (Use 3 decimals; the answer is very close to 1.)", 1 - 0.05 * 0.1 * 0.02, "1 − product of failures."),
  p3("A committee of 3 is chosen one at a time from 5 juniors and 7 seniors. What is P(the first two are seniors and the third is a junior)?", (7 / 12) * (6 / 11) * (5 / 10), "7/12 × 6/11 × 5/10."),
  p3("Two players alternate rolling a die; the first to roll a 6 wins. What is P(the first player wins on her second turn)?", (5 / 6) ** 2 * (1 / 6), "Miss, miss, then 6."),
  p3("A basketball player makes 70% of free throws, independently. What is P(she makes the first two and misses the third)?", 0.7 * 0.7 * 0.3, "0.7 × 0.7 × 0.3."),
  num("P(A) = 0.5 and P(A ∪ B) = 0.8. If A and B are independent, find P(B).", 0.6, "0.8 = 0.5 + p − 0.5p ⇒ 0.5p = 0.3.", null, 0.001),
  num("A and B are independent, P(A) = 0.2 and P(A ∩ B) = 0.08. Find P(A ∪ B).", 0.52, "P(B) = 0.4; 0.2 + 0.4 − 0.08.", null, 0.001),
  p3("Use the tree: two draws without replacement from a bag with 4 red and 2 blue marbles. What is P(at least one blue)?", 1 - (4 / 6) * (3 / 5), "1 − P(RR).", treeSvg([{ t: "R", p: "4/6", c: [{ t: "R", p: "3/5" }, { t: "B", p: "2/5" }] }, { t: "B", p: "2/6", c: [{ t: "R", p: "4/5" }, { t: "B", p: "1/5" }] }], { heads: ["1st", "2nd"] })),
  p3("The spinner is spun 4 times. What is P(it never lands on the red sector)?", 0.75 ** 4, "(3/4)⁴.", spinnerSvg([["R", 0.25, "red"], ["other", 0.75, "gray"]], { r: 55 })),
  p3("Use the bag shown: three marbles are drawn without replacement. What is P(all three different colours)?", 6 * (2 / 9) * (3 / 8) * (4 / 7), "3! orders × 2/9 × 3/8 × 4/7.", poolSvg([[2, "red", "red"], [3, "blue", "blue"], [4, "green", "green"]], { per: 9 })),
  num("Use the table of 400 drivers: is having an accident independent of age group? Enter P(accident | under 25) − P(accident) to 3 decimals.", 30 / 100 - 75 / 400, "0.3 − 0.1875.", tableSvg([["", "accident", "none", "total"], ["under 25", "30", "70", "100"], ["25+", "45", "255", "300"], ["total", "75", "325", "400"]], { rowHead: true }), 0.0015),
  mc("Events A and B have P(A) = 0.3, P(B) = 0.4 and are mutually exclusive. Are they independent?", "no, because P(A ∩ B) = 0 but P(A)P(B) = 0.12", ["yes, because they do not affect each other", "yes, because P(A ∪ B) = 0.7", "cannot be decided"], "Independence needs P(A ∩ B) = P(A)P(B)."),
  ms("A die is rolled twice. Which pairs of events are independent? Select all.", ["first roll even; second roll even", "first roll 6; sum is 7", "first roll 6; sum is 12", "sum even; first roll even", "first roll 1; second roll 1"], [0, 1, 3, 4], "Check P(A ∩ B) = P(A)P(B); P(sum 12 | first 6) = 1/6 ≠ 1/36."),
  tf("If P(B | A) = P(B), then A and B are independent.", true, "Definition."),
  tf("Rolling a die 10 times, the probability of ten 6s equals the probability of the sequence 1, 2, 3, 4, 5, 6, 1, 2, 3, 4.", true, "Each specific sequence has (1/6)¹⁰."),
  p3("A lottery-style game draws 2 balls from 10 numbered balls without replacement. You pick 2 numbers. What is P(both match)?", (2 / 10) * (1 / 9), "2/10 × 1/9."),
  p3("Five cards are dealt. What is P(all five are red)?", (26 / 52) * (25 / 51) * (24 / 50) * (23 / 49) * (22 / 48), "Multiply the five dependent probabilities."),
];

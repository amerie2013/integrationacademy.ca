// 2.8 Counting & Probability — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3, mcf } from "./pk.mjs";
import { poolSvg, tilesSvg } from "../../mdm4u/figs.mjs";
import { fact, C, multi, countPerms } from "../../mdm4u/count.mjs";

const w = (s) => s.split("");

export const E = [
  num("How many 2-card hands can be dealt from a standard deck?", C(52, 2), "₅₂C₂."),
  num("How many ways can 3 people be chosen from 8?", C(8, 3), "₈C₃."),
  p3("Two people are chosen at random from 5 girls and 4 boys. What is P(both girls)?", C(5, 2) / C(9, 2), "₅C₂ ÷ ₉C₂."),
  p3("Two cards are dealt. What is P(both red)?", C(26, 2) / C(52, 2), "₂₆C₂ ÷ ₅₂C₂."),
  p3("Three people are chosen at random from 6 teachers and 4 students. What is P(all teachers)?", C(6, 3) / C(10, 3), "₆C₃ ÷ ₁₀C₃."),
  p3("The letters of CAT are arranged at random. What is P(the word is ACT)?", 1 / 6, "1 of 3!."),
  p3("Four runners line up at random. What is P(a particular runner is first)?", 1 / 4, "3!/4!."),
  p3("The letters of MATH are arranged at random. What is P(M is first)?", fact(3) / fact(4), "3!/4!."),
  p3("Five books are put on a shelf at random. What is P(they are in alphabetical order)?", 1 / fact(5), "1 of 5!."),
  mcf("A 2-person team is chosen from 4 people including Ana. What is P(Ana is chosen)?", [1, 2], [[1, 4], [1, 6], [3, 4]], "₃C₁/₄C₂ = 3/6."),
  p3("The pool shows 3 red and 5 blue tokens. Two are chosen at random. What is P(both blue)?", C(5, 2) / C(8, 2), "₅C₂ ÷ ₈C₂.", poolSvg([[3, "red", "red"], [5, "blue", "blue"]], { per: 8 })),
  p3("The tiles are arranged at random in a row. What is P(A and B are at the two ends)?", (2 * fact(3)) / fact(5), "2! × 3! ÷ 5!.", tilesSvg(["A", "B", "C", "D", "E"], { colors: { A: "red", B: "red" } })),
  mc("Choosing a hand of 5 cards: which counting method gives n(S)?", "combinations", ["permutations", "factorials only", "the additive principle"], "Order does not matter."),
  mc("Arranging 6 people in a line: which counting method gives n(S)?", "permutations (6!)", ["combinations", "₆C₁", "2⁶"], "Order matters."),
  tf("In a counting probability, the numerator and denominator should be counted the same way.", true, "Both combinations or both permutations."),
  tf("P(a 5-card hand contains the ace of spades) = 5/52.", true, "₅₁C₄/₅₂C₅ = 5/52."),
  tf("Every 5-card hand from a well-shuffled deck is equally likely.", true, "Random dealing."),
  ms("Which situations use combinations to count? Select all.", ["a lottery ticket of 6 numbers", "a podium finish", "a committee of 4", "a 4-digit PIN", "a sample of 30 students"], [0, 2, 4], "Order matters for podiums and PINs."),
  p3("A 4-digit PIN with all digits different is chosen at random. What is P(it starts with 9)?", 1 / 10, "By symmetry each first digit is equally likely."),
  p3("Two dice are rolled. What is P(the numbers are different)? (Count the ordered outcomes.)", 30 / 36, "6 × 5 of 36."),
];

export const M = [
  p3("Five cards are dealt. What is P(all five are spades)?", C(13, 5) / C(52, 5), "₁₃C₅ ÷ ₅₂C₅."),
  p3("Five cards are dealt. What is P(exactly 2 kings)?", (C(4, 2) * C(48, 3)) / C(52, 5), "₄C₂ × ₄₈C₃ ÷ ₅₂C₅."),
  p3("Four cards are dealt. What is P(no hearts)?", C(39, 4) / C(52, 4), "₃₉C₄ ÷ ₅₂C₄."),
  p3("A committee of 4 is chosen at random from 7 women and 5 men. What is P(2 women and 2 men)?", (C(7, 2) * C(5, 2)) / C(12, 4), "21 × 10 ÷ 495."),
  p3("A committee of 4 is chosen at random from 7 women and 5 men. What is P(at least one man)?", 1 - C(7, 4) / C(12, 4), "1 − ₇C₄/₁₂C₄."),
  p3("A box of 15 bulbs has 4 faulty. Three are chosen at random. What is P(exactly one faulty)?", (C(4, 1) * C(11, 2)) / C(15, 3), "4 × 55 ÷ 455."),
  p3("The letters of PENCIL are arranged at random. What is P(the vowels E and I are together)?", (fact(5) * 2) / fact(6), "5! × 2 ÷ 6!."),
  p3("The letters of ROSES are arranged at random. What is P(the two S's are together)?", countPerms(w("ROSES"), (a) => a.join("").includes("SS")) / multi("ROSES"), "Block SS + R, O, E: 4! of 5!/2!."),
  p3("Seven people sit in a row at random. What is P(two particular people sit at the two ends)?", (2 * fact(5)) / fact(7), "2 × 5! ÷ 7!."),
  p3("Six people sit around a round table at random. What is P(two particular people sit together)?", (fact(4) * 2) / fact(5), "4! × 2 ÷ 5!."),
  p3("A lottery draws 3 numbers from 1 to 20. What is P(your 3 numbers all match)?", 1 / C(20, 3), "1 ÷ ₂₀C₃."),
  p3("A lottery draws 3 numbers from 1 to 20. What is P(exactly 2 of your 3 numbers match)?", (C(3, 2) * C(17, 1)) / C(20, 3), "₃C₂ × ₁₇C₁ ÷ ₂₀C₃."),
  p3("The pool shows 4 juniors and 6 seniors. A team of 3 is chosen. What is P(more juniors than seniors)?", (C(4, 2) * 6 + C(4, 3)) / C(10, 3), "2J1S + 3J.", poolSvg([[4, "amber", "juniors"], [6, "blue", "seniors"]], { per: 10 })),
  p3("The tiles show the letters of LETTER. They are arranged at random. What is P(the arrangement starts with T)?", countPerms(w("LETTER"), (a) => a[0] === "T") / multi("LETTER"), "Fix T: 5!/(2!) ÷ 6!/(2! 2!).", tilesSvg(w("LETTER"), { colors: { T: "red", E: "violet" } })),
  mc("A 5-card hand is dealt. Which expression gives P(exactly one ace)?", "$\\dfrac{\\binom41\\binom{48}4}{\\binom{52}5}$", ["$\\dfrac{\\binom41\\binom{51}4}{\\binom{52}5}$", "$\\dfrac{4}{52}$", "$\\dfrac{\\binom41}{\\binom{52}5}$"], "1 ace AND 4 non-aces."),
  mc("Ten people line up at random. What is P(A is directly in front of B)?", "1/10", ["1/2", "1/9", "1/45"], "Block AB in a fixed order: 9!/10!."),
  tf("P(a random arrangement of AABB starts with A) = 1/2.", true, "By symmetry, or 3 of 6."),
  tf("In a group of 23 people, it is more likely than not that two share a birthday.", true, "About 0.507."),
  ms("Two cards are dealt. Which are correct? Select all.", ["P(both aces) = 1/221", "P(a pair of any rank) = 1/17", "P(both hearts) = 1/17", "P(both face cards) = 11/221", "P(an ace and a king) = 16/1326 × 2"], [0, 1, 2, 3], "Ace and king: 16/1326 = 8/663, not doubled."),
  p3("Five people check their coats and get them back at random. What is P(everyone gets their own coat)?", 1 / fact(5), "1 of 5!."),
];

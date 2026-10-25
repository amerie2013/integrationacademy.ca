// 2.6 Conditional Probability — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3, mcf } from "./pk.mjs";
import { tableSvg, vennSvg, diceGridSvg } from "../../mdm4u/figs.mjs";

const dice = (given, ev) => { let g = 0, b = 0; for (let a = 1; a <= 6; a++) for (let c = 1; c <= 6; c++) if (given(a, c)) { g++; if (ev(a, c)) b++; } return b / g; };
const T1 = tableSvg([["", "likes math", "does not", "total"], ["Grade 11", "36", "24", "60"], ["Grade 12", "28", "12", "40"], ["total", "64", "36", "100"]], { rowHead: true });

export const E = [
  num("P(A) = 0.5 and P(A and B) = 0.2. What is P(B | A)?", 0.4, "0.2 ÷ 0.5.", null, 0.001),
  num("P(B) = 0.8 and P(A and B) = 0.2. What is P(A | B)?", 0.25, "0.2 ÷ 0.8.", null, 0.001),
  mcf("A die is rolled. Given that the result is odd, what is P(it is a 5)?", [1, 3], [[1, 6], [1, 2], [2, 3]], "{1, 3, 5}."),
  mcf("A die is rolled. Given that the result is greater than 2, what is P(it is even)?", [1, 2], [[1, 3], [2, 3], [3, 4]], "{3, 4, 5, 6}: 4 and 6."),
  mcf("A card is drawn. Given that it is a heart, what is P(it is the queen of hearts)?", [1, 13], [[1, 52], [1, 4], [4, 13]], "1 of 13 hearts."),
  mcf("A card is drawn. Given that it is a king, what is P(it is red)?", [1, 2], [[1, 4], [1, 26], [2, 13]], "2 of 4 kings."),
  p3("Use the table: given that a student is in Grade 12, what is P(likes math)?", 28 / 40, "28 ÷ 40.", T1),
  p3("Use the table: given that a student likes math, what is P(Grade 12)?", 28 / 64, "28 ÷ 64.", T1),
  p3("Two coins are tossed. Given that the first is heads, what is P(both heads)?", 1 / 2, "The second coin decides."),
  p3("Two dice are rolled. Given that the first die shows 2, what is P(the sum is 5)?", 1 / 6, "The second die must be 3."),
  mc("In P(B | A), which event is known to have happened?", "A", ["B", "both", "neither"], "Read “B given A”."),
  mc("Which formula is correct?", "$P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(A)}$", ["$P(B\\mid A)=\\dfrac{P(A\\cap B)}{P(B)}$", "$P(B\\mid A)=P(A)P(B)$", "$P(B\\mid A)=P(A)+P(B)$"], "Divide by the given event."),
  tf("P(A | B) always equals P(B | A).", false, "Different denominators."),
  tf("If A and B are independent, P(B | A) = P(B).", true, "Knowing A changes nothing."),
  tf("Conditional probability reduces the sample space to the given event.", true, "Only outcomes in the given event remain."),
  ms("A die is rolled. Given that the result is even, which have probability 1/3? Select all.", ["it is a 2", "it is a 4", "it is greater than 4", "it is a 5", "it is less than 3"], [0, 1, 2, 4], "Given {2, 4, 6}; 5 is impossible."),
  num("P(A) = 0.6 and P(B | A) = 0.5. What is P(A and B)?", 0.3, "0.6 × 0.5.", null, 0.001),
  num("In a club of 40, 25 are seniors and 10 seniors are on the executive. Given that a member is a senior, what is P(on the executive)?", 0.4, "10 ÷ 25.", null, 0.001),
  p3("Use the Venn diagram (probabilities): what is P(A | B)?", 0.1 / 0.4, "0.1 ÷ 0.4.", vennSvg({ A: "A", B: "B", n: { a: "0.3", ab: "0.1", b: "0.3", out: "0.3" } })),
  p3("Two dice are rolled. Given that doubles were rolled, what is P(the sum is greater than 7)?", 3 / 6, "(4,4), (5,5), (6,6) of 6 doubles."),
];

export const M = [
  p3("Two dice are rolled. Given that the sum is 9, what is P(one die shows a 6)?", dice((a, b) => a + b === 9, (a, b) => a === 6 || b === 6), "(3,6), (6,3) of 4."),
  p3("Two dice are rolled. Given that at least one die shows a 6, what is P(doubles)?", dice((a, b) => a === 6 || b === 6, (a, b) => a === b), "(6,6) of 11."),
  p3("Two dice are rolled. Given that the sum is at most 5, what is P(the first die is 1)?", dice((a, b) => a + b <= 5, (a) => a === 1), "4 of 10."),
  p3("Use the grid: two dice are rolled. Given that the sum is at least 10 (shaded), what is P(doubles)?", dice((a, b) => a + b >= 10, (a, b) => a === b), "(5,5), (6,6) of 6.", diceGridSvg((a, b) => a + b >= 10)),
  p3("A card is drawn. Given that it is a face card, what is P(it is a heart)?", 3 / 12, "3 of 12."),
  p3("A card is drawn. Given that it is not a spade, what is P(it is an ace)?", 3 / 39, "3 of 39."),
  p3("Two cards are drawn without replacement. Given that the first is an ace, what is P(the second is an ace)?", 3 / 51, "3 aces left in 51."),
  p3("A family has 3 children. Given that the first two are boys, what is P(three boys)?", 1 / 2, "Only the third child matters."),
  p3("A family has 2 children. Given that at least one is a boy, what is P(two boys)?", 1 / 3, "BB of BB, BG, GB."),
  num("P(A) = 0.4, P(B) = 0.5, P(A or B) = 0.7. Find P(A | B).", 0.4, "P(A ∩ B) = 0.2; 0.2 ÷ 0.5.", null, 0.001),
  num("P(A) = 0.3, P(B | A) = 0.6, P(B) = 0.45. Find P(A | B).", 0.4, "0.18 ÷ 0.45.", null, 0.001),
  p3("Use the table: given that a person is 30+, what is P(prefers streaming)?", 45 / 90, "45 ÷ 90.", tableSvg([["", "streaming", "cable", "total"], ["under 30", "55", "15", "70"], ["30+", "45", "45", "90"], ["total", "100", "60", "160"]], { rowHead: true })),
  p3("Use the same table: given that a person prefers cable, what is P(under 30)?", 15 / 60, "15 ÷ 60.", tableSvg([["", "streaming", "cable", "total"], ["under 30", "55", "15", "70"], ["30+", "45", "45", "90"], ["total", "100", "60", "160"]], { rowHead: true })),
  mc("P(B | A) = 0.35 and P(B) = 0.2. What can you conclude?", "A and B are dependent; A makes B more likely", ["A and B are independent", "A and B are mutually exclusive", "P(A) = 0.35"], "0.35 ≠ 0.2."),
  mc("In a school, 70% of hockey players are boys. Which statement is equivalent?", "P(boy | hockey player) = 0.7", ["P(hockey player | boy) = 0.7", "P(boy and hockey player) = 0.7", "P(boy) = 0.7"], "Given hockey player."),
  tf("If P(A | B) = 0, then A and B are mutually exclusive (P(B) > 0).", true, "P(A ∩ B) = 0."),
  tf("P(A | A) = 1 whenever P(A) > 0.", true, "Given A, A is certain."),
  ms("P(A) = 0.5, P(B) = 0.4, P(A ∩ B) = 0.2. Which are correct? Select all.", ["P(A | B) = 0.5", "P(B | A) = 0.4", "A and B are independent", "P(A | B′) = 0.5", "P(A ∪ B) = 0.9"], [0, 1, 2, 3], "P(A ∪ B) = 0.7."),
  num("80% of commuters use transit; 15% of transit users are late. What percent of all commuters are transit users who are late?", 12, "0.8 × 0.15 = 0.12."),
  p3("A bag has 4 red and 6 blue marbles. Two are drawn without replacement. Given that the second is red, what is P(the first was red)?", 3 / 9, "By symmetry: given one red is removed, 3 of the other 9 are red."),
];

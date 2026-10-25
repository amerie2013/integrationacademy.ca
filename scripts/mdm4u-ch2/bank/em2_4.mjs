// 2.4 Mutually Exclusive Events & the Additive Rule — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3, mcf } from "./pk.mjs";
import { vennSvg, diceGridSvg, tableSvg } from "../../mdm4u/figs.mjs";

const dice = (pred) => { let c = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (pred(a, b)) c++; return c; };

export const E = [
  mc("One card is drawn. Which pair of events is mutually exclusive?", "a heart and a club", ["a heart and a king", "a red card and a queen", "a face card and a spade"], "No card is both a heart and a club."),
  mc("A die is rolled. Which pair of events is NOT mutually exclusive?", "even and greater than 3", ["1 and 6", "odd and even", "less than 2 and greater than 5"], "4 and 6 are in both."),
  mcf("A die is rolled. What is P(a 1 or a 6)?", [1, 3], [[1, 6], [1, 36], [1, 2]], "1/6 + 1/6."),
  mcf("A card is drawn. What is P(a jack or a queen)?", [2, 13], [[1, 13], [1, 169], [8, 13]], "4/52 + 4/52."),
  num("A and B are mutually exclusive with P(A) = 0.3 and P(B) = 0.45. What is P(A or B)?", 0.75, "0.3 + 0.45.", null, 0.001),
  num("P(A) = 0.5, P(B) = 0.4 and P(A and B) = 0.2. What is P(A or B)?", 0.7, "0.5 + 0.4 − 0.2.", null, 0.001),
  num("A and B are mutually exclusive. What is P(A and B)?", 0, "They cannot both happen."),
  num("P(A or B) = 0.8. What is P(neither A nor B)?", 0.2, "1 − 0.8.", null, 0.001),
  p3("A card is drawn. What is P(a king or a heart)?", 16 / 52, "4 + 13 − 1."),
  p3("A die is rolled. What is P(even or a 5)?", 4 / 6, "3/6 + 1/6."),
  num("Use the Venn diagram: how many students are in band or choir?", 12 + 5 + 9, "Add the three regions.", vennSvg({ A: "band", B: "choir", n: { a: 12, ab: 5, b: 9, out: 4 } })),
  p3("Use the same Venn diagram (30 students): what is P(in neither)?", 4 / 30, "4 of 30.", vennSvg({ A: "band", B: "choir", n: { a: 12, ab: 5, b: 9, out: 4 }, shade: ["out"] })),
  mc("Which formula gives P(A or B) for any events A and B?", "$P(A)+P(B)-P(A\\cap B)$", ["$P(A)+P(B)$", "$P(A)\\times P(B)$", "$P(A)-P(B)$"], "Subtract the overlap."),
  tf("If A and B are mutually exclusive, P(A or B) = P(A) + P(B).", true, "No overlap."),
  tf("“A or B” in probability means A or B but not both.", false, "It includes both."),
  tf("A die roll of “less than 3” and “greater than 4” are mutually exclusive.", true, "No number is both."),
  ms("One card is drawn. Which events are mutually exclusive with “a red card”? Select all.", ["a spade", "a club", "a diamond", "a face card", "a black ace"], [0, 1, 4], "Black cards cannot be red."),
  num("P(A) = 0.35 and P(only A) = 0.2. What is P(A and B)?", 0.15, "0.35 − 0.2.", null, 0.001),
  num("In a class of 25, 10 take art, 8 take drama and 3 take both. How many take art or drama?", 15, "10 + 8 − 3."),
  num("In the same class of 25, how many take neither art nor drama?", 10, "25 − 15."),
];

export const M = [
  p3("A card is drawn. What is P(a face card or a diamond)?", 22 / 52, "12 + 13 − 3."),
  p3("A card is drawn. What is P(a red card or an ace)?", 28 / 52, "26 + 4 − 2."),
  p3("Two dice are rolled. What is P(a sum of 7 or doubles)?", 12 / 36, "Mutually exclusive: 6 + 6."),
  p3("Two dice are rolled. What is P(a sum of 10 or doubles)?", dice((a, b) => a + b === 10 || a === b) / 36, "3 + 6 − 1."),
  p3("Use the grid: two dice are rolled. What is P(at least one 3 or a sum of 4)?", dice((a, b) => a === 3 || b === 3 || a + b === 4) / 36, "Count the shaded cells.", diceGridSvg((a, b) => a === 3 || b === 3 || a + b === 4)),
  num("P(A) = 0.6, P(B) = 0.5, P(A or B) = 0.85. Find P(A and B).", 0.25, "0.6 + 0.5 − 0.85.", null, 0.001),
  num("P(A) = 0.45, P(A or B) = 0.7 and P(A and B) = 0.1. Find P(B).", 0.35, "0.7 = 0.45 + P(B) − 0.1.", null, 0.001),
  num("P(A) = 0.4, P(B) = 0.3, P(A and B) = 0.12. Find P(exactly one of A, B).", 0.46, "0.4 + 0.3 − 2(0.12).", null, 0.001),
  p3("A number from 1 to 40 is chosen at random. What is P(a multiple of 4 or a multiple of 6)?", [...Array(40)].map((_, i) => i + 1).filter((n) => n % 4 === 0 || n % 6 === 0).length / 40, "10 + 6 − 3."),
  p3("Use the table of 160 students: what is P(Grade 12 or plays an instrument)?", (70 + 64 - 30) / 160, "70 + 64 − 30.", tableSvg([["", "instrument", "none", "total"], ["Grade 11", "34", "56", "90"], ["Grade 12", "30", "40", "70"], ["total", "64", "96", "160"]], { rowHead: true })),
  mc("A and B are mutually exclusive with P(A) = 0.4 and P(B) = 0.5. What is P(neither)?", "0.1", ["0.3", "0.2", "0.9"], "1 − 0.9."),
  mc("P(A) = 0.7 and P(B) = 0.6. Which is true?", "A and B cannot be mutually exclusive", ["A and B are mutually exclusive", "P(A or B) = 1.3", "P(A and B) = 0"], "0.7 + 0.6 > 1, so they must overlap."),
  ms("Two dice are rolled. Which pairs of events are mutually exclusive? Select all.", ["sum 7 and doubles", "sum 8 and doubles", "sum 2 and sum 12", "both even and sum odd", "first die 1 and sum 7"], [0, 2, 3], "Sum 8 includes (4,4); (1,6) has first die 1 and sum 7."),
  tf("For three mutually exclusive events, P(A or B or C) = P(A) + P(B) + P(C).", true, "No overlaps."),
  tf("If P(A) + P(B) > 1, then A and B must overlap.", true, "Otherwise P(A or B) would exceed 1."),
  num("Of 50 people, 28 drink coffee, 22 drink tea, 9 drink both. How many drink exactly one of the two?", 32, "19 + 13."),
  p3("Of 50 people, 28 drink coffee, 22 drink tea, 9 drink both. What is P(a random person drinks neither)?", 9 / 50, "50 − 41 = 9."),
  num("Three events A, B, C have P(A) = 0.3, P(B) = 0.25, P(C) = 0.2 and are mutually exclusive. What is P(none of them)?", 0.25, "1 − 0.75.", null, 0.001),
  p3("Use the Venn diagram of 60 people: what is P(exactly one of A, B)?", (21 + 15) / 60, "Only A + only B.", vennSvg({ A: "A", B: "B", n: { a: 21, ab: 9, b: 15, out: 15 }, shade: ["a", "b"] })),
  mcf("A card is drawn. What is P(neither a heart nor a face card)?", [30, 52], [[27, 52], [36, 52], [22, 52]], "1 − 22/52."),
];

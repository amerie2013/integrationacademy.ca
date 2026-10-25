// 2.4 Mutually Exclusive Events & the Additive Rule — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3 } from "./pk.mjs";
import { vennSvg, diceGridSvg, tableSvg } from "../../mdm4u/figs.mjs";

const dice = (pred) => { let c = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (pred(a, b)) c++; return c; };
const upto = (n, pred) => [...Array(n)].map((_, i) => i + 1).filter(pred).length;
// three-set survey: totals from region counts
const R = { a: 18, b: 12, c: 10, ab: 7, ac: 5, bc: 4, abc: 3, out: 21 };
const N = Object.values(R).reduce((s, v) => s + v, 0);

export const TOPIC = "2.4 Mutually Exclusive Events & the Additive Rule";
export const Q = [
  p3("A number from 1 to 100 is chosen at random. What is P(divisible by 2, 3 or 5)?", upto(100, (n) => n % 2 === 0 || n % 3 === 0 || n % 5 === 0) / 100, "50 + 33 + 20 − 16 − 10 − 6 + 3 = 74."),
  p3("A number from 1 to 100 is chosen at random. What is P(divisible by none of 2, 3, 5)?", upto(100, (n) => n % 2 && n % 3 && n % 5) / 100, "1 − 0.74."),
  p3("Two dice are rolled. What is P(the sum is even or the product is greater than 20)?", dice((a, b) => (a + b) % 2 === 0 || a * b > 20) / 36, "18 even sums; products over 20: (4,6), (6,4), (5,5), (5,6), (6,5), (6,6); overlap (4,6), (6,4), (5,5), (6,6)."),
  p3("Two dice are rolled. What is P(exactly one of: doubles, sum greater than 8)?", dice((a, b) => (a === b) !== (a + b > 8)) / 36, "Doubles 6, sum > 8: 10, both 2: 6 + 10 − 2(2)."),
  num("P(A) = 0.55, P(B) = 0.4, P(neither) = 0.2. Find P(A and B).", 0.15, "P(A ∪ B) = 0.8 = 0.55 + 0.4 − x.", null, 0.001),
  num("P(A) = 0.6 and P(B) = 0.7. What is the smallest possible value of P(A and B)?", 0.3, "P(A ∪ B) ≤ 1 ⇒ P(A ∩ B) ≥ 0.3.", null, 0.001),
  num("P(A) = 0.6 and P(B) = 0.7. What is the largest possible value of P(A and B)?", 0.6, "At most the smaller probability.", null, 0.001),
  num(`Use the three-set Venn diagram (${N} people): how many are in exactly two of the groups?`, R.ab + R.ac + R.bc, "Add the three pair-only regions.", vennSvg({ A: "A", B: "B", C: "C", n: R, U: `${N}` })),
  p3(`Use the same three-set Venn diagram (${N} people): what is P(A or B)?`, (R.a + R.b + R.ab + R.ac + R.bc + R.abc) / N, "Everything inside A or B.", vennSvg({ A: "A", B: "B", C: "C", n: R, U: `${N}`, shade: ["a", "b", "ab", "ac", "bc", "abc"] })),
  p3(`Use the same three-set Venn diagram (${N} people): what is P(C but not A)?`, (R.c + R.bc) / N, "Only C plus B∩C only.", vennSvg({ A: "A", B: "B", C: "C", n: R, U: `${N}`, shade: ["c", "bc"] })),
  num("Of 200 students: 90 take Data, 80 Calculus, 70 Physics; 30 Data and Calculus, 25 Data and Physics, 35 Calculus and Physics; 15 all three. How many take none?", 200 - (90 + 80 + 70 - 30 - 25 - 35 + 15), "Inclusion–exclusion for three sets."),
  p3("Use the table: a student is chosen at random. What is P(walks or is in Grade 9)?", (55 + 80 - 25) / 240, "55 + 80 − 25.", tableSvg([["", "walks", "bus", "car", "total"], ["Grade 9", "25", "40", "15", "80"], ["Grade 10–12", "30", "90", "40", "160"], ["total", "55", "130", "55", "240"]], { rowHead: true })),
  p3("Use the grid: two dice are rolled. What is P(the difference is 0 or the sum is 5)?", dice((a, b) => a === b || a + b === 5) / 36, "Mutually exclusive (sum 5 is odd).", diceGridSvg((a, b) => a === b || a + b === 5)),
  mc("P(A) = 0.3, P(B) = 0.5, P(A ∪ B) = 0.8. Which is true?", "A and B are mutually exclusive", ["A and B are independent", "A is a subset of B", "P(A ∩ B) = 0.15"], "P(A ∩ B) = 0.3 + 0.5 − 0.8 = 0."),
  ms("Which are always true? Select all.", ["P(A ∪ B) ≤ P(A) + P(B)", "P(A ∩ B) ≤ P(A)", "P(A ∪ B) ≥ P(B)", "P(A ∪ B) = P(A) + P(B)", "P(A ∩ B) = P(A)P(B)"], [0, 1, 2], "The last two need special conditions."),
  tf("P(A ∪ B ∪ C) = P(A) + P(B) + P(C) − P(A ∩ B ∩ C) for all events.", false, "The pairwise overlaps must also be subtracted."),
  tf("If A ⊆ B, then P(A ∪ B) = P(B).", true, "A adds nothing new."),
  p3("A card is drawn. What is P(a club, a face card, or an ace)?", 25 / 52, "13 + 12 + 4 − 3 − 1 − 0 + 0 = 25."),
  p3("Three coins are tossed. What is P(all the same or exactly one head)?", 5 / 8, "HHH, TTT, and 3 with one head: mutually exclusive."),
  p3("A two-digit number (10–99) is chosen at random. What is P(it contains the digit 7 or is a multiple of 7)?", [...Array(90)].map((_, i) => i + 10).filter((n) => String(n).includes("7") || n % 7 === 0).length / 90, "Count each set and subtract the overlap (70, 77)."),
];

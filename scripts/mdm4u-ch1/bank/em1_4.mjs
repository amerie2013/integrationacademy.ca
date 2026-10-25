// 1.4 Permutations with Constraints — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { tilesSvg, seatsSvg } from "../../mdm4u/figs.mjs";
import { fact, P, countPerms } from "../../mdm4u/count.mjs";

const L = (k) => "ABCDEFGHIJ".slice(0, k).split("");
const adj = (a, x, y) => Math.abs(a.indexOf(x) - a.indexOf(y)) === 1;

export const E = [
  num("In how many ways can 5 people line up if Sam must be first?", fact(4), "Fix Sam: 4!."),
  num("In how many ways can 5 people line up if Sam must be last?", fact(4), "Fix Sam: 4!."),
  num("In how many ways can 4 people sit around a round table?", fact(3), "(4 − 1)!."),
  num("In how many ways can 10 people sit around a round table?", fact(9), "(10 − 1)!."),
  num("In how many ways can 4 people line up if two of them must stand together?", countPerms(L(4), (a) => adj(a, "A", "B")), "3! × 2!."),
  num("In how many ways can 5 people line up if two of them must stand together?", countPerms(L(5), (a) => adj(a, "A", "B")), "4! × 2!."),
  num("In how many ways can 5 people line up if two of them must NOT stand together?", countPerms(L(5), (a) => !adj(a, "A", "B")), "120 − 48."),
  num("In how many arrangements of the letters of WATER is W first and R last?", fact(3), "Middle three: 3!."),
  num("In how many ways can 6 runners finish if Lia finishes ahead of Mo (anywhere ahead)?", fact(6) / 2, "Half of 6!."),
  num("How many arrangements of the letters of FRONT begin with a vowel?", fact(4), "Only O: 1 × 4!."),
  num("The tiles show the block that must stay together. How many arrangements of the 5 tiles keep X and Y side by side?", countPerms(["X", "Y", "1", "2", "3"], (a) => adj(a, "X", "Y")), "4! × 2!.", tilesSvg(["X", "Y", "1", "2", "3"], { groups: [[0, 1]], colors: { X: "red", Y: "red" } })),
  num("The diagram shows 6 guests at a round table. In how many ways can they be seated?", fact(5), "(6 − 1)!.", seatsSvg(["A", "B", "C", "D", "E", "F"])),
  mc("Which method fits “A and B must be together”?", "treat A and B as one block", ["subtract from 2", "divide by 2", "use (n − 1)!"], "Glue them."),
  mc("Which method fits “A and B must be apart”?", "all arrangements minus those with A and B together", ["treat A and B as one block", "multiply by 2", "fix A first"], "Complement."),
  tf("For n people in a circle there are (n − 1)! seatings.", true, "Rotations are the same."),
  tf("When two people are glued into a block, we multiply by 2! for their order inside the block.", true, "AB or BA."),
  tf("In a line of n people, A is ahead of B in exactly half of the arrangements.", true, "Swap A and B to pair the arrangements."),
  num("In how many ways can 4 books be shelved if the dictionary must be on the far left?", fact(3), "Fix it: 3!."),
  num("In how many ways can 6 people line up if the 3 tallest must stand at the back (last 3 places) in any order?", fact(3) * fact(3), "3! for the back, 3! for the front."),
  num("In how many ways can 3 boys and 2 girls line up if the girls must be at the two ends?", 2 * fact(3), "2! for the girls, 3! for the boys."),
];

export const M = [
  num("In how many ways can 7 people line up if three particular people must stand together?", countPerms(L(7), (a) => { const i = [a.indexOf("A"), a.indexOf("B"), a.indexOf("C")].sort((x, y) => x - y); return i[2] - i[0] === 2; }), "Block of 3: 5! × 3!."),
  num("In how many ways can 6 people line up if two of them must not be next to each other?", countPerms(L(6), (a) => !adj(a, "A", "B")), "720 − 240."),
  num("In how many ways can 8 people sit around a round table if two of them must sit together?", fact(6) * 2, "(7 − 1)! × 2!."),
  num("In how many ways can 8 people sit around a round table if two of them must NOT sit together?", fact(7) - fact(6) * 2, "7! − 6! × 2."),
  num("In how many ways can 3 girls and 3 boys line up so that the genders alternate?", 2 * fact(3) * fact(3), "GBGBGB or BGBGBG: 2 × 3! × 3!."),
  num("In how many ways can 4 boys and 3 girls line up if no two girls are side by side?", countPerms(["G1", "G2", "G3", "B1", "B2", "B3", "B4"], (a) => a.every((x, i) => i === 0 || !(x[0] === "G" && a[i - 1][0] === "G"))), "Boys 4!, girls into 3 of 5 gaps: ₅P₃."),
  num("How many arrangements of the letters of ORANGE have the vowels in the even positions (2, 4, 6)?", fact(3) * fact(3), "Vowels O, A, E in 3!; consonants R, N, G in 3!."),
  num("How many arrangements of the letters of PLANET have the letters P and T at the two ends?", 2 * fact(4), "2! × 4!."),
  num("In how many ways can 6 different keys be put on a key ring (which can be flipped over)?", fact(5) / 2, "(6 − 1)!/2."),
  num("Seven runners finish a race. In how many orders do A, B and C finish in that relative order (not necessarily one after another)?", fact(7) / fact(3), "7!/3!."),
  num("In how many ways can 5 math and 3 science books be shelved if all the science books must be together?", fact(6) * fact(3), "Block: 6! × 3!."),
  num("In how many ways can 5 people line up if A is not first and B is not last?", countPerms(L(5), (a) => a[0] !== "A" && a[4] !== "B"), "120 − 24 − 24 + 6."),
  ms("Six people A–F line up. Which counts are correct? Select all.", ["A first: 120", "A and B together: 240", "A and B apart: 480", "A before B: 360", "A at an end: 120"], [0, 1, 2, 3], "A at an end: 2 × 5! = 240."),
  mc("In how many ways can 5 couples stand in a line if each couple stands together?", String(fact(5) * 2 ** 5), [String(fact(5) * 2), String(fact(10) / 2 ** 5), String(fact(5))], "5! orders of the couples × 2⁵ orders inside."),
  tf("The number of ways 6 people can sit at a round table is the same as the number of ways 5 people can stand in a line.", true, "Both are 5! = 120."),
  tf("If A and B must be apart in a line of 4, there are 12 arrangements.", true, "24 − 12 = 12."),
  num("The tiles show two blocks that must each stay together. How many arrangements of all 7 tiles?", fact(4) * fact(3) * fact(2), "Items: block 1, block 2, and 2 single tiles → 4!; inside: 3! and 2!.", tilesSvg(["A", "B", "C", "D", "E", "F", "G"], { groups: [[0, 2], [3, 4]], colors: { A: "red", B: "red", C: "red", D: "violet", E: "violet" } })),
  num("The 7 guests shown sit at a round table. Ana (red) and Bo (red) must sit together. How many seatings?", fact(5) * 2, "(6 − 1)! × 2!.", seatsSvg(["Ana", "Bo", "C", "D", "E", "F", "G"], { hl: [0, 1] })),
  num("In how many ways can 6 people line up if Ana must be in one of the first two places?", 2 * fact(5), "2 places for Ana × 5!."),
  num("How many 5-letter arrangements of the letters A–H (no repeats) begin with A and contain B?", P(6, 3) * 4, "A first; B in one of 4 places; fill the other 3 places from 6 letters: ₆P₃."),
];

// 8.2 Venn Diagrams and Sample Spaces — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { vennDoc, gridDoc } from "../figs8.mjs";

const S = String.raw;

export const E = [
  mc(S`$A\cap B$ means:`, "A and B both happen", ["A or B or both", "neither A nor B", "A but not B"], "Intersection."),
  mc(S`$A\cup B$ means:`, "A or B or both", ["A and B both happen", "neither A nor B", "exactly one of A, B"], "Union."),
  mc(S`$A'$ means:`, "A does not happen", ["A happens", "A and B", "A is certain"], "Complement."),
  fill("Events that cannot happen at the same time are called mutually ___.", ["exclusive", "Exclusive"], S`$P(A\cap B)=0$.`),
  num("In the Venn diagram, how many elements are in A ∩ B?", 4, "The overlap.", vennDoc({ a: 7, both: 4, b: 9, out: 5 })),
  num("In the same diagram (A only 7, both 4, B only 9, neither 5), how many elements are in A ∪ B?", 20, "7 + 4 + 9."),
  mc("In the diagram, find P(B).", S`$\frac{13}{25}$`, [S`$\frac{9}{25}$`, S`$\frac{4}{25}$`, S`$\frac{11}{25}$`], "B = 9 + 4 = 13; total 25.", vennDoc({ a: 7, both: 4, b: 9, out: 5 })),
  num(S`$P(A)=0.3$, $P(B)=0.5$, $P(A\cap B)=0.1$. Find $P(A\cup B)$.`, 0.7, "0.3 + 0.5 − 0.1.", null, 0.001),
  num(S`A and B are mutually exclusive with $P(A)=0.25$ and $P(B)=0.35$. Find $P(A\cup B)$.`, 0.6, "Add: no overlap.", null, 0.001),
  num(S`A and B are mutually exclusive. Find $P(A\cap B)$.`, 0, "They cannot both happen."),
  tf("Rolling a 2 and rolling an odd number on one die are mutually exclusive.", true, "2 is even."),
  tf("Drawing a red card and drawing a king are mutually exclusive.", false, "Red kings exist."),
  mc("A coin is tossed and a die rolled. How many outcomes are there?", "12", ["8", "6", "36"], "2 × 6."),
  mc("A coin is tossed and a die rolled. Find P(heads and a 5).", S`$\frac{1}{12}$`, [S`$\frac16$`, S`$\frac{1}{2}$`, S`$\frac{2}{12}$`], "1 of 12 outcomes.", gridDoc(["H", "T"], [1, 2, 3, 4, 5, 6], { mark: (a, b) => a === "H" && b === 5, cell: (a, b) => `${a}${b}`, rowName: "coin", colName: "die" })),
  mc("Which region of a two-set Venn diagram represents 'A but not B'?", S`$A\cap B'$`, [S`$A\cup B$`, S`$A'\cap B$`, S`$A\cap B$`], "Inside A, outside B."),
  num("Of 30 students, 18 study French, 14 study Spanish and 6 study both. How many study neither?", 4, "30 − (18 + 14 − 6)."),
  num(S`$P(A)=0.45$. Find $P(A')$.`, 0.55, "1 − 0.45.", null, 0.001),
  mc("In a Venn diagram, which number should you fill in first?", "the intersection", ["the outside", "A only", "B only"], "Work from the middle out."),
  ms("A die is rolled. Which pairs of events are mutually exclusive? Select all.", ["'a 1' and 'a 6'", "'even' and 'odd'", "'even' and 'greater than 3'", "'a 3' and 'odd'"], [0, 1], "4 and 6 are even and greater than 3; 3 is odd."),
  num("In the Venn diagram, how many are in neither A nor B?", 6, "The number outside both circles.", vennDoc({ a: 10, both: 3, b: 8, out: 6 })),
];

export const M = [
  mc("From the Venn diagram, find P(A ∪ B).", S`$\frac{21}{28}$`, [S`$\frac{7}{28}$`, S`$\frac{24}{28}$`, S`$\frac{16}{28}$`], "11 + 5 + 5 = 21 of 28.", vennDoc({ a: 11, both: 5, b: 5, out: 7 })),
  mc("From the same diagram (11, 5, 5, 7), find P(exactly one of A, B).", S`$\frac{16}{28}$`, [S`$\frac{21}{28}$`, S`$\frac{5}{28}$`, S`$\frac{11}{28}$`], "11 + 5."),
  num(S`$P(A)=0.55$, $P(B)=0.4$, $P(A\cup B)=0.8$. Find $P(A\cap B)$.`, 0.15, "0.55 + 0.4 − 0.8.", null, 0.001),
  num(S`$P(A)=0.6$, $P(A\cap B)=0.2$. Find $P(A\cap B')$.`, 0.4, "A only = 0.6 − 0.2.", null, 0.001),
  num(S`$P(A\cup B)=0.85$. Find $P(A'\cap B')$.`, 0.15, "Neither = 1 − union.", null, 0.001),
  num("Of 50 people, 32 have a car, 21 have a bike and 9 have neither. How many have both?", 12, "50 − 9 = 41; 32 + 21 − 41."),
  mc("For the same 50 people (car 32, bike 21, both 12), find P(a bike but no car).", S`$\frac{9}{50}$`, [S`$\frac{21}{50}$`, S`$\frac{12}{50}$`, S`$\frac{20}{50}$`], "21 − 12 = 9."),
  mc("A card is drawn from a standard pack. Find P(a spade or an ace).", S`$\frac{4}{13}$`, [S`$\frac{17}{52}$`, S`$\frac{1}{4}$`, S`$\frac{5}{13}$`], "13 + 4 − 1 = 16 of 52."),
  mc("A die is rolled. Let A = 'prime', B = 'odd'. Find P(A ∪ B).", S`$\frac23$`, [S`$\frac12$`, S`$\frac56$`, S`$\frac13$`], "{2, 3, 5} ∪ {1, 3, 5} = {1, 2, 3, 5}."),
  mc("The shaded region of the Venn diagram is:", S`$(A\cup B)'$`, [S`$A\cap B$`, S`$A'\cap B$`, S`$A\cup B$`], "Outside both circles.", vennDoc({}, { shade: ["out"] })),
  mc("Which set does the shaded region of this Venn diagram represent?", S`$A'\cap B$`, [S`$A\cap B'$`, S`$A\cap B$`, S`$(A\cup B)'$`], "B only.", vennDoc({}, { shade: ["b"] })),
  num("Two spinners each numbered 1–5 are spun. How many outcomes have a sum of 6?", 5, "(1,5), (2,4), (3,3), (4,2), (5,1)."),
  mc("Two spinners each numbered 1–5 are spun. Find P(the sum is at least 8).", S`$\frac{6}{25}$`, [S`$\frac{4}{25}$`, S`$\frac{3}{25}$`, S`$\frac{10}{25}$`], "Sum 8: 3, 9: 2, 10: 1.", gridDoc([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], { mark: (a, b) => a + b >= 8, cell: (a, b) => a + b, rowName: "spinner 1", colName: "spinner 2" })),
  tf(S`If $P(A)=0.5$ and $P(B)=0.6$, then A and B cannot be mutually exclusive.`, true, "0.5 + 0.6 > 1, so they must overlap."),
  num(S`$P(A)=0.5$, $P(B)=0.6$. What is the smallest possible value of $P(A\cap B)$?`, 0.1, S`$P(A\cup B)\le1$.`, null, 0.001),
  mc("In a two-way table of 80 people, 30 are left-handed; 12 of the left-handed and 20 of the right-handed wear glasses. Find P(left-handed or glasses).", S`$\frac{50}{80}$`, [S`$\frac{42}{80}$`, S`$\frac{62}{80}$`, S`$\frac{32}{80}$`], "30 + 32 − 12 = 50."),
  ms(S`Which equal $P(A)$? Select all.`, [S`$P(A\cap B)+P(A\cap B')$`, S`$1-P(A')$`, S`$P(A\cup B)-P(B)+P(A\cap B)$`, S`$P(A\cup B)$`], [0, 1, 2], "Split A into two regions; complement; rearranged addition rule."),
  num("In a Venn diagram, A only = 2x, both = x, B only = 9, neither = 3, total 30. Find x.", 6, "3x + 12 = 30."),
  mc("A die is rolled and a coin tossed. Find P(an even number or heads).", S`$\frac34$`, [S`$\frac12$`, S`$\frac14$`, S`$1$`], S`$\frac12+\frac12-\frac14$.`),
  num("Of 40 dogs, 22 are black, 15 are large and 10 are black and large. How many are neither black nor large?", 13, "40 − 27."),
];

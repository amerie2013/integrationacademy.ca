// 8.3 Conditional Probability and Independence — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { vennDoc, gridDoc, treeDoc } from "../figs8.mjs";

const S = String.raw;
const D = [1, 2, 3, 4, 5, 6];

export const TOPIC = "8.3 Conditional Probability and Independence";
export const Q = [
  num(S`A and B are independent, $P(A)=0.3$ and $P(A\cup B)=0.65$. Find $P(B)$.`, 0.5, "0.3 + p − 0.3p = 0.65 ⇒ 0.7p = 0.35.", null, 0.001),
  num(S`A and B are independent with $P(A\cap B')=0.24$ and $P(A)=0.4$. Find $P(B)$.`, 0.4, "0.4(1 − p) = 0.24 ⇒ 1 − p = 0.6.", null, 0.001),
  num(S`$P(A)=0.6$, $P(B)=0.5$, $P(A\mid B)=0.7$. Find $P(B\mid A)$ (3 d.p.).`, 0.583, "P(A ∩ B) = 0.35; 0.35 ÷ 0.6.", null, 0.001),
  num(S`$P(A)=0.6$, $P(B)=0.5$, $P(A\mid B)=0.7$. Find $P(A\cup B)$.`, 0.75, "0.6 + 0.5 − 0.35.", null, 0.001),
  num(S`$P(A\mid B)=0.4$, $P(B\mid A)=0.25$, $P(A\cap B)=0.1$. Find $P(A\cup B)$.`, 0.55, "P(B) = 0.25, P(A) = 0.4; 0.4 + 0.25 − 0.1.", null, 0.001),
  mc("From the Venn diagram, find P(A | A ∪ B).", S`$\frac{13}{22}$`, [S`$\frac{13}{30}$`, S`$\frac{5}{22}$`, S`$\frac{8}{22}$`], "A ∪ B has 8 + 5 + 9 = 22; A has 13.", vennDoc({ a: 8, both: 5, b: 9, out: 8 })),
  mc("From the same diagram (8, 5, 9, 8), find P(A ∩ B | A ∪ B).", S`$\frac{5}{22}$`, [S`$\frac{5}{30}$`, S`$\frac{5}{13}$`, S`$\frac{5}{14}$`], "5 of 22."),
  mc("Two dice are rolled. Given the sum is at least 10, find P(the first die is 6).", S`$\frac12$`, [S`$\frac13$`, S`$\frac16$`, S`$\frac23$`], "Sums 10, 11, 12: 6 outcomes; first die 6 in 3.", gridDoc(D, D, { mark: (a, b) => a + b >= 10, cell: (a, b) => a + b, rowName: "first die", colName: "second die" })),
  mc("Two dice are rolled. A = 'sum is 7', B = 'second die is 2'. Are A and B independent?", S`yes: $\frac{1}{36}=\frac16\cdot\frac16$`, [S`no: $\frac{1}{36}\ne\frac{1}{6}$`, "no: they are mutually exclusive", "yes: they do not overlap"], "Sum 7 with second die 2 is (5, 2)."),
  mc("Two dice are rolled. A = 'sum is 6', B = 'first die is 2'. Are A and B independent?", S`no: $\frac{1}{36}\ne\frac{5}{216}$`, [S`yes: $\frac{1}{36}=\frac{5}{36}\cdot\frac16$`, "no: they are mutually exclusive", "yes: the dice are independent"], "P(A) = 5/36, P(B) = 1/6."),
  num("A school has 60% girls. 30% of girls and 45% of boys play a team sport. Find P(girl | plays a team sport) (3 d.p.).", 0.5, "0.18 ÷ (0.18 + 0.18).", treeDoc([["G", "0.6"], ["B", "0.4"]], [[["S", "0.3"], ["S′", "0.7"]], [["S", "0.45"], ["S′", "0.55"]]], { highlight: ["00", "10"] }), 0.001),
  num("A test for a condition is positive for 90% of people with it and 8% of people without it. 5% of people have the condition. Find P(has condition | positive) (3 d.p.).", 0.372, "0.045 ÷ (0.045 + 0.076).", treeDoc([["C", "0.05"], ["C′", "0.95"]], [[["+", "0.9"], ["−", "0.1"]], [["+", "0.08"], ["−", "0.92"]]], { highlight: ["00", "10"] }), 0.001),
  tf("A positive result from a fairly accurate test for a rare condition can still mean the person probably does not have it.", true, "False positives from the large healthy group can outnumber true positives."),
  num(S`$P(A)=x$, $P(B)=0.5$, $P(A\cup B)=0.8$, A and B independent. Find $x$.`, 0.6, "x + 0.5 − 0.5x = 0.8 ⇒ 0.5x = 0.3.", null, 0.001),
  ms("A and B are independent with P(A) = 0.4 and P(B) = 0.25. Which are true? Select all.", [S`$P(A\cap B)=0.1$`, S`$P(A\mid B')=0.4$`, S`$P(A\cup B)=0.55$`, S`$P(A'\cap B)=0.1$`], [0, 1, 2], S`$P(A'\cap B)=0.6\times0.25=0.15$.`),
  mc("In a two-way table, 45 of 90 men and 33 of 110 women prefer tea. Are 'man' and 'prefers tea' independent?", "no: P(tea | man) = 0.5 but P(tea) = 0.39", ["yes: both groups contain tea drinkers", "yes: P(tea | man) = P(tea)", "no: they are mutually exclusive"], "78 of 200 prefer tea."),
  num("A bag has 4 red and 5 blue balls. Two are taken without replacement. Given the second is red, find P(the first was red) (3 d.p.).", 0.375, "P(R₂) = 4/9; P(R₁R₂) = 12/72; (12/72) ÷ (4/9) = 3/8.", treeDoc([["R", "4/9"], ["B", "5/9"]], [[["R", "3/8"], ["B", "5/8"]], [["R", "4/8"], ["B", "4/8"]]], { highlight: ["00", "10"] }), 0.001),
  mc(S`$P(A)=0.5$, $P(B)=0.4$, $P(A\mid B)=0.5$. Which is true?`, "A and B are independent", ["A and B are mutually exclusive", S`$P(A\cap B)=0.25$`, S`$P(B\mid A)=0.5$`], "P(A | B) = P(A)."),
  num("Two independent machines work with probabilities 0.9 and 0.85. Given that exactly one works, find P(it is the first) (3 d.p.).", 0.614, "0.9 × 0.15 = 0.135; 0.1 × 0.85 = 0.085; 0.135 ÷ 0.22.", null, 0.001),
  mc("The Venn diagram shows probabilities. Find k; you can then check that A and B are independent.", "0.15", ["0.1", "0.2", "0.25"], "The regions sum to 1, so k = 0.15; then P(A) = 0.6, P(B) = 0.25 and P(A)P(B) = 0.15 = k.", vennDoc({ a: "0.45", both: "k", b: "0.1", out: "0.3" })),
];

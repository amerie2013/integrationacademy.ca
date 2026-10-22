// 8.3 Conditional Probability and Independence — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { vennDoc, gridDoc } from "../figs8.mjs";

const S = String.raw;
const D = [1, 2, 3, 4, 5, 6];

export const E = [
  mc(S`$P(A\mid B)$ is read as:`, "the probability of A given B", ["the probability of A and B", "the probability of A or B", "the probability of B given A"], "Given B has happened."),
  mc(S`The formula for $P(A\mid B)$ is:`, S`$\frac{P(A\cap B)}{P(B)}$`, [S`$\frac{P(A\cap B)}{P(A)}$`, S`$P(A)P(B)$`, S`$\frac{P(A)}{P(B)}$`], "Divide by the given event."),
  num(S`$P(A\cap B)=0.12$ and $P(B)=0.3$. Find $P(A\mid B)$.`, 0.4, "0.12 ÷ 0.3.", null, 0.001),
  num(S`$P(A\cap B)=0.2$ and $P(A)=0.8$. Find $P(B\mid A)$.`, 0.25, "0.2 ÷ 0.8.", null, 0.001),
  num(S`$P(B)=0.5$ and $P(A\mid B)=0.6$. Find $P(A\cap B)$.`, 0.3, "0.5 × 0.6.", null, 0.001),
  fill(S`A and B are independent if $P(A\cap B)=$ ___ (write the product).`, ["P(A)P(B)", "P(A)*P(B)", "P(A)×P(B)", "P(A) P(B)"], "Multiply the separate probabilities."),
  num(S`A and B are independent, $P(A)=0.4$, $P(B)=0.3$. Find $P(A\cap B)$.`, 0.12, "0.4 × 0.3.", null, 0.001),
  tf(S`If A and B are independent then $P(A\mid B)=P(A)$.`, true, "B does not change the chance of A."),
  tf("Mutually exclusive events with non-zero probabilities are independent.", false, S`$P(A\cap B)=0\ne P(A)P(B)$.`),
  mc("Which pair of events is independent?", "tossing a head on a coin and rolling a 6 on a die", ["a card is red and the same card is a heart", "it rains and the ground is wet", "a student studies and passes"], "The coin does not affect the die."),
  mc("From the Venn diagram, find P(A | B).", S`$\frac{3}{8}$`, [S`$\frac{3}{20}$`, S`$\frac{3}{9}$`, S`$\frac{8}{20}$`], "Inside B: 3 + 5 = 8; overlap 3.", vennDoc({ a: 6, both: 3, b: 5, out: 6 })),
  mc("From the same diagram (A only 6, both 3, B only 5, neither 6), find P(B | A).", S`$\frac13$`, [S`$\frac{3}{8}$`, S`$\frac{3}{20}$`, S`$\frac{5}{8}$`], "Inside A: 9; overlap 3."),
  mc("A die is rolled. Given the result is even, find P(it is a 4).", S`$\frac13$`, [S`$\frac16$`, S`$\frac12$`, S`$\frac14$`], "Evens: 2, 4, 6."),
  mc("A die is rolled. Given the result is greater than 2, find P(it is odd).", S`$\frac12$`, [S`$\frac13$`, S`$\frac23$`, S`$\frac14$`], "3, 4, 5, 6: odd ones 3, 5."),
  num("In a class of 30, 12 of the 16 boys walk to school. Find P(walks | boy).", 0.75, "12 ÷ 16.", null, 0.001),
  tf(S`$P(A\mid B)$ is always equal to $P(B\mid A)$.`, false, "The divisors are different."),
  mc(S`$P(A)=0.5$, $P(B)=0.4$, $P(A\cap B)=0.2$. Are A and B independent?`, "yes", ["no", "only if mutually exclusive", "cannot tell"], "0.5 × 0.4 = 0.2."),
  mc(S`$P(A)=0.3$, $P(B)=0.6$, $P(A\cap B)=0.1$. Are A and B independent?`, "no", ["yes", "only if mutually exclusive", "cannot tell"], "0.3 × 0.6 = 0.18 ≠ 0.1."),
  mc("Two dice are rolled. Given the first die shows 3, find P(the sum is 8).", S`$\frac16$`, [S`$\frac{1}{36}$`, S`$\frac{5}{36}$`, S`$\frac13$`], "Only the second die = 5.", gridDoc(D, D, { mark: (a) => a === 3, cell: (a, b) => a + b, rowName: "first die", colName: "second die" })),
  ms("Which mean A and B are independent? Select all.", [S`$P(A\cap B)=P(A)P(B)$`, S`$P(A\mid B)=P(A)$`, S`$P(B\mid A)=P(B)$`, S`$P(A\cap B)=0$`], [0, 1, 2], "The last means mutually exclusive."),
];

export const M = [
  mc("Two dice are rolled. Given the sum is 8, find P(at least one die shows 6).", S`$\frac25$`, [S`$\frac{2}{36}$`, S`$\frac13$`, S`$\frac15$`], "Sum 8: (2,6), (3,5), (4,4), (5,3), (6,2); two contain a 6.", gridDoc(D, D, { mark: (a, b) => a + b === 8, cell: (a, b) => a + b, rowName: "first die", colName: "second die" })),
  mc("Two dice are rolled. Given at least one die shows 5, find P(a double).", S`$\frac{1}{11}$`, [S`$\frac16$`, S`$\frac{1}{36}$`, S`$\frac{2}{11}$`], "11 outcomes contain a 5; only (5, 5) is a double."),
  num("Of 200 adults, 80 exercise regularly; 60 of those who exercise and 40 of those who do not sleep well. Find P(exercises | sleeps well).", 0.6, "60 ÷ 100.", null, 0.001),
  num("For the same 200 adults, find P(sleeps well | does not exercise) (3 d.p.).", 0.333, "40 ÷ 120.", null, 0.001),
  mc("From the probability Venn diagram, find P(A | B′).", S`$\frac{3}{7}$`, [S`$\frac{3}{10}$`, S`$\frac{1}{2}$`, S`$\frac{3}{5}$`], "B′ = 0.3 + 0.4 = 0.7; A ∩ B′ = 0.3.", vennDoc({ a: "0.3", both: "0.15", b: "0.15", out: "0.4" })),
  mc("Are A and B in the diagram (0.3, 0.15, 0.15, 0.4) independent?", "no", ["yes", "they are mutually exclusive", "cannot tell"], "P(A)P(B) = 0.45 × 0.3 = 0.135 ≠ 0.15."),
  num(S`A and B are independent, $P(A)=0.35$, $P(B)=0.6$. Find $P(A\cup B)$.`, 0.74, "0.35 + 0.6 − 0.21.", null, 0.001),
  num(S`A and B are independent, $P(A)=0.25$, $P(B)=0.6$. Find $P(A'\cap B')$.`, 0.3, "0.75 × 0.4.", null, 0.001),
  num(S`$P(A)=0.5$, $P(B\mid A)=0.3$, $P(B)=0.4$. Find $P(A\mid B)$.`, 0.375, "P(A ∩ B) = 0.15; 0.15 ÷ 0.4.", null, 0.001),
  num(S`A and B are independent with $P(A\cap B)=0.18$ and $P(A)=0.3$. Find $P(B)$.`, 0.6, "0.18 ÷ 0.3.", null, 0.001),
  mc("A card is drawn from a standard pack. Are 'a king' and 'a heart' independent?", "yes: 1/52 = 1/13 × 1/4", ["no: they overlap", "no: they are mutually exclusive", "yes: they cannot both happen"], "P(K ∩ H) = P(K)P(H)."),
  mc("A die is rolled. A = 'even', B = 'a multiple of 3'. Are A and B independent?", S`yes: $P(A\cap B)=\frac16=\frac12\cdot\frac13$`, ["no: 6 is in both", "no: they are mutually exclusive", "yes: they do not overlap"], "Only 6 is in both."),
  mc("A die is rolled. A = 'even', B = 'greater than 3'. Are A and B independent?", S`no: $P(A\cap B)=\frac13\ne\frac14$`, [S`yes: $P(A\cap B)=\frac14$`, "yes: they overlap", "no: they are mutually exclusive"], "A ∩ B = {4, 6}."),
  num(S`$P(A\cup B)=0.7$, $P(A)=0.4$, $P(B)=0.5$. Find $P(B\mid A)$.`, 0.5, "P(A ∩ B) = 0.2; 0.2 ÷ 0.4.", null, 0.001),
  tf(S`If $P(A\mid B)>P(A)$, then B makes A more likely.`, true, "Knowing B raises the chance of A."),
  num("In a club, 40% of members are juniors. 25% of juniors and 10% of seniors play chess. Find P(junior and plays chess).", 0.1, "0.4 × 0.25.", null, 0.001),
  num("For the same club, find P(plays chess).", 0.16, "0.1 + 0.6 × 0.1.", null, 0.001),
  num("For the same club, find P(junior | plays chess).", 0.625, "0.1 ÷ 0.16.", null, 0.001),
  mc("Two dice are rolled. A = 'first die is 6', B = 'sum is 8'. Are A and B independent?", S`no: $P(A\cap B)=\frac{1}{36}$ but $P(A)P(B)=\frac{5}{216}$`, ["yes: the dice are independent", "no: they are mutually exclusive", S`yes: $P(A\cap B)=\frac{1}{36}$`], "Compare the product with the joint probability."),
  ms(S`A and B are independent. Which are also independent? Select all.`, ["A and B′", "A′ and B", "A′ and B′", "A and A′"], [0, 1, 2], "Complements of independent events stay independent; A and A′ are mutually exclusive."),
];

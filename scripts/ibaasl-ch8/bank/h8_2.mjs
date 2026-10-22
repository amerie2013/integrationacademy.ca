// 8.2 Venn Diagrams and Sample Spaces — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { vennDoc, gridDoc } from "../figs8.mjs";

const S = String.raw;
const D = [1, 2, 3, 4, 5, 6];

export const TOPIC = "8.2 Venn Diagrams and Sample Spaces";
export const Q = [
  num("A Venn diagram has A only = x + 2, both = x, B only = 3x − 1, neither = 5 and total 36. Find x.", 6, "5x + 1 + 5 = 36 ⇒ 5x = 30."),
  num(S`$P(A)=0.42$, $P(B)=0.37$, $P(A'\cap B')=0.33$. Find $P(A\cap B)$.`, 0.12, S`$P(A\cup B)=0.67$; $0.42+0.37-0.67$.`, null, 0.001),
  num(S`$P(A\cap B')=0.28$, $P(A'\cap B)=0.35$, $P(A\cap B)=0.17$. Find $P(A'\cap B')$.`, 0.2, "1 − (0.28 + 0.35 + 0.17).", vennDoc({ a: "0.28", both: "0.17", b: "0.35", out: "?" }), 0.001),
  mc("From the probability Venn diagram, find P(exactly one of A, B).", "0.63", ["0.8", "0.45", "0.52"], "0.28 + 0.35.", vennDoc({ a: "0.28", both: "0.17", b: "0.35", out: "0.2" })),
  num("Of 120 students, 70 play an instrument, 48 sing in a choir and 25 do neither. How many do exactly one of the two?", 72, "Both = 70 + 48 − 95 = 23; exactly one = 95 − 23."),
  mc("In a group, 60% like tea, 45% like coffee and 20% like neither. Find the percentage that like both.", "25%", ["5%", "15%", "35%"], "Tea or coffee 80%; 60 + 45 − 80."),
  mc(S`A Venn diagram has probabilities $A$ only $=p$, both $=0.1$, $B$ only $=2p$, neither $=0.3$. Find $P(B)$.`, "0.5", ["0.4", "0.6", "0.3"], "3p + 0.4 = 1 ⇒ p = 0.2; B = 0.4 + 0.1.", vennDoc({ a: "p", both: "0.1", b: "2p", out: "0.3" })),
  mc("Two dice are rolled. Let A = 'sum is 7' and B = 'at least one die shows 2'. Find P(A ∪ B).", S`$\frac{15}{36}$`, [S`$\frac{17}{36}$`, S`$\frac{11}{36}$`, S`$\frac{16}{36}$`], "6 + 11 − 2 = 15.", gridDoc(D, D, { mark: (a, b) => a + b === 7 || a === 2 || b === 2, cell: (a, b) => a + b, rowName: "first die", colName: "second die" })),
  mc("Two dice are rolled. Let A = 'both odd' and B = 'sum greater than 8'. Are A and B mutually exclusive?", "no: (5, 5) is in both", ["yes: odd + odd is even", "yes: the sum of two odds is at most 8", "no: every outcome is in both"], "5 + 5 = 10 > 8."),
  num("A number is chosen from 1 to 60. How many are multiples of 3 or 5 but not both?", 24, "Multiples of 3: 20, of 5: 12, of 15: 4; (20 − 4) + (12 − 4)."),
  ms(S`A and B are mutually exclusive with $P(A)=0.35$, $P(B)=0.4$. Which are true? Select all.`, [S`$P(A\cup B)=0.75$`, S`$P(A'\cap B')=0.25$`, S`$P(A\cap B')=0.35$`, S`$P(A\cap B)=0.14$`], [0, 1, 2], "No overlap: A only is all of A."),
  mc("Which shaded region represents (A ∩ B)′ ∩ (A ∪ B)?", "A only and B only", ["the intersection", "outside both", "all of B"], "In the union but not in the overlap.", vennDoc({}, { shade: ["a", "b"] })),
  tf(S`For any events, $P(A\cup B)\le P(A)+P(B)$.`, true, S`$P(A\cap B)\ge0$.`),
  num(S`$P(A)=0.7$, $P(B)=0.65$. What is the smallest possible value of $P(A\cap B)$?`, 0.35, S`$P(A\cup B)\le1$: $0.7+0.65-1$.`, null, 0.001),
  num(S`$P(A)=0.7$, $P(B)=0.65$. What is the largest possible value of $P(A\cap B)$?`, 0.65, "The overlap cannot exceed the smaller event (B inside A).", null, 0.001),
  mc("A spinner numbered 1–3 is spun and a die rolled. Find P(the die shows a multiple of the spinner's number).", S`$\frac{11}{18}$`, [S`$\frac{1}{2}$`, S`$\frac{2}{3}$`, S`$\frac{5}{9}$`], "Spinner 1: 6, spinner 2: 3, spinner 3: 2; 11 of 18.", gridDoc([1, 2, 3], D, { mark: (a, b) => b % a === 0, cell: (a, b) => `${a},${b}`, rowName: "spinner", colName: "die" })),
  num("In a survey of 200, 90 read news online, 75 read print and 60 read neither. A person who reads at least one is chosen. How many such people read both?", 25, "140 read at least one; 90 + 75 − 140."),
  mc("The diagram shows sets A and B that do not overlap. If P(A) = 0.35 and P(B) = 0.4, what is in the outside region?", "0.25", ["0.14", "0.75", "0.65"], "1 − 0.35 − 0.4.", vennDoc({ a: "0.35", b: "0.4", out: "?" }, { apart: true })),
  mc("A letter is chosen from the word ELEPHANT. Let A = 'a vowel', B = 'a letter in the first half of the alphabet (A–M)'. Find P(A ∪ B).", S`$\frac{5}{8}$`, [S`$\frac{6}{8}$`, S`$\frac{7}{8}$`, S`$\frac{3}{8}$`], "The vowels E, E, A all lie in A–M, so the union is E, L, E, H, A: 5 of 8."),
  num("Of 75 members, 40 swim, 35 cycle and 30 run; 15 swim and cycle, 12 cycle and run, 10 swim and run, and 5 do all three. How many do none?", 2, "40 + 35 + 30 − 15 − 12 − 10 + 5 = 73; 75 − 73."),
];

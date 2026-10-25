// 1.5 Combinations — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { poolSvg, barsSvg } from "../../mdm4u/figs.mjs";
import { P, C } from "../../mdm4u/count.mjs";

export const E = [
  num("Evaluate $\\binom{6}{2}$.", C(6, 2), "6 × 5 / 2."),
  num("Evaluate $\\binom{7}{3}$.", C(7, 3), "7 × 6 × 5 / 6."),
  num("Evaluate $\\binom{10}{1}$.", 10, "Choose 1 of 10."),
  num("Evaluate $\\binom{12}{12}$.", 1, "Take them all: one way."),
  num("Evaluate $\\binom{20}{2}$.", C(20, 2), "20 × 19 / 2."),
  num("How many ways can 2 of 8 friends be invited to a concert?", C(8, 2), "₈C₂."),
  num("How many 3-person study groups can be formed from 10 students?", C(10, 3), "₁₀C₃."),
  num("How many ways can a reader choose 4 of 6 magazines?", C(6, 4), "₆C₄ = ₆C₂."),
  num("Five friends each shake hands once with each other. How many handshakes?", C(5, 2), "₅C₂."),
  num("How many line segments join 7 points, no three of them on a line?", C(7, 2), "₇C₂."),
  num("The bag holds 9 different marbles. How many ways can 3 be taken out together?", C(9, 3), "₉C₃.", poolSvg([[9, "violet", "different marbles"]], { per: 9 })),
  num("The bars show $\\binom{6}{r}$. What is the height of the tallest bar?", C(6, 3), "₆C₃.", barsSvg([0, 1, 2, 3, 4, 5, 6].map((r) => C(6, r)), { labels: [0, 1, 2, 3, 4, 5, 6], xlabel: "r", ylabel: "6Cr" })),
  mc("Choosing a 5-person team (no positions) from 15 players is a…", "combination", ["permutation", "factorial", "circular arrangement"], "Order does not matter."),
  mc("Which equals $\\binom{9}{7}$?", "$\\binom{9}{2}$", ["$\\binom{7}{2}$", "$\\binom{9}{9}$", "$\\binom{2}{9}$"], "Symmetry: 9 − 7 = 2."),
  mc("Which formula gives $\\binom{n}{r}$?", "$\\dfrac{n!}{r!\\,(n-r)!}$", ["$\\dfrac{n!}{(n-r)!}$", "$n^r$", "$\\dfrac{n!}{r!}$"], "Divide nPr by r!."),
  tf("$\\binom{n}{r}\\le P(n,r)$ for all valid $n$ and $r$.", true, "P(n, r) = C(n, r) × r!."),
  tf("Choosing 3 toppings for a pizza from 10 is a permutation.", false, "The toppings have no order."),
  tf("$\\binom{8}{3}=\\binom{8}{5}$.", true, "Symmetry."),
  num("How many 2-person teams can be formed from 12 people?", C(12, 2), "₁₂C₂."),
  num("A class must answer 3 of 5 essay questions. How many choices?", C(5, 3), "₅C₃."),
];

export const M = [
  num("How many 5-card hands can be dealt from a deck of 52?", C(52, 5), "₅₂C₅."),
  num("How many 13-card bridge hands contain no face cards? Give the number of ways to choose 13 cards from the 40 non-face cards.", C(40, 13), "₄₀C₁₃."),
  num("A committee of 2 women and 3 men is chosen from 7 women and 8 men. How many committees?", C(7, 2) * C(8, 3), "₇C₂ × ₈C₃."),
  num("How many diagonals does an octagon have?", C(8, 2) - 8, "₈C₂ − 8."),
  num("How many triangles can be formed from 9 points on a circle?", C(9, 3), "₉C₃."),
  num("A league of 10 teams plays each other team once. How many games?", C(10, 2), "₁₀C₂."),
  num("$P(11,4)=7920$. Find $\\binom{11}{4}$.", 7920 / 24, "Divide by 4!."),
  num("Solve $\\binom{n}{2}=28$.", 8, "n(n − 1) = 56."),
  num("How many 5-card hands contain exactly 4 aces?", C(4, 4) * C(48, 1), "4 aces and 1 of 48."),
  num("How many 5-card hands are all red?", C(26, 5), "₂₆C₅."),
  num("A quiz requires answering 7 of 10 questions, including question 1. How many choices?", C(9, 6), "Q1 is in; choose 6 of the other 9."),
  num("A pizza has 3 of 8 meat toppings and 2 of 6 vegetable toppings. How many pizzas?", C(8, 3) * C(6, 2), "₈C₃ × ₆C₂."),
  num("From 12 people, a committee of 4 is chosen and then a chair is named from the committee. How many ways?", C(12, 4) * 4, "₁₂C₄ × 4."),
  ms("Which situations are combinations? Select all.", ["a hand of 7 cards", "a race result for the top 3", "a 4-person committee", "a 6-digit PIN", "a sample of 20 people"], [0, 2, 4], "Order matters for race results and PINs."),
  mc("Which is equal to $\\binom{10}{4}$?", "$\\dfrac{P(10,4)}{4!}$", ["$\\dfrac{P(10,4)}{6!}$", "$P(10,4)\\times4!$", "$\\dfrac{10!}{4!}$"], "nCr = nPr / r!."),
  tf("$\\binom{n}{0}+\\binom{n}{1}=n+1$.", true, "1 + n."),
  tf("$\\binom{12}{5}>\\binom{12}{6}$.", false, "The middle value 924 is largest; ₁₂C₅ = 792."),
  num("The bars show $\\binom{8}{r}$. What is the sum of all the bar heights?", 256, "Row sum 2⁸.", barsSvg([0, 1, 2, 3, 4, 5, 6, 7, 8].map((r) => C(8, r)), { labels: [0, 1, 2, 3, 4, 5, 6, 7, 8], top: true, xlabel: "r", ylabel: "8Cr" })),
  num("The pool shows 5 teachers and 7 parents. How many committees of 2 teachers and 2 parents?", C(5, 2) * C(7, 2), "₅C₂ × ₇C₂.", poolSvg([[5, "amber", "teachers"], [7, "blue", "parents"]], { per: 12 })),
  num("How many ways are there to choose 3 different letters from A–Z (order does not matter)?", C(26, 3), "₂₆C₃."),
];

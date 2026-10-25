// 1.2 Factorials & Permutations of Distinct Objects — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { slotsSvg, hbarsSvg, tilesSvg } from "../../mdm4u/figs.mjs";
import { fact, P } from "../../mdm4u/count.mjs";

export const E = [
  num("Evaluate $4!$.", 24, "4 × 3 × 2 × 1."),
  num("Evaluate $7!$.", fact(7), "7 × 6 × 5 × 4 × 3 × 2 × 1."),
  num("Evaluate $\\dfrac{6!}{4!}$.", 30, "6 × 5."),
  num("Evaluate $\\dfrac{100!}{99!}$.", 100, "100 × 99! ÷ 99!."),
  num("Evaluate $1!$.", 1, "By definition."),
  num("Evaluate $P(6,2)$.", 30, "6 × 5."),
  num("Evaluate $P(5,5)$.", 120, "5!."),
  num("Evaluate ${}_8P_1$.", 8, "One slot, 8 choices."),
  num("In how many ways can 4 different pictures be hung in a row?", 24, "4!."),
  num("In how many orders can 8 students give their presentations?", fact(8), "8!."),
  num("In how many ways can a chair and a secretary be chosen from 9 people?", 72, "9 × 8."),
  num("How many 3-letter arrangements of the letters P, Q, R, S, T use no letter twice?", 60, "5 × 4 × 3."),
  num("The slot diagram shows how many ways a club fills 3 positions. How many ways in total?", P(12, 3), "Multiply.", slotsSvg([["pres.", 12], ["vice", 11], ["sec.", 10]])),
  mc("Which equals $P(n,r)$?", "$\\dfrac{n!}{(n-r)!}$", ["$\\dfrac{n!}{r!}$", "$\\dfrac{n!}{r!(n-r)!}$", "$n^r$"], "r falling factors."),
  mc("Which expression equals $9\\times8\\times7$?", "$\\dfrac{9!}{6!}$", ["$\\dfrac{9!}{3!}$", "$\\dfrac{9!}{7!}$", "$3!$"], "Cancel 6!."),
  tf("$0!=0$.", false, "0! = 1."),
  tf("$5!=5\\times4!$.", true, "n! = n(n − 1)!."),
  tf("Choosing a team captain and vice-captain is a permutation.", true, "The roles are different."),
  num("Read the chart: what is $6!$?", 720, "Read the bar labelled 6!.", hbarsSvg([3, 4, 5, 6].map((k) => [`${k}!`, fact(k)]))),
  num("Evaluate $3!\\times2!$.", 12, "6 × 2."),
];

export const M = [
  num("Evaluate $\\dfrac{10!}{6!\\,4!}$.", 210, "10 × 9 × 8 × 7 ÷ 24."),
  num("Evaluate $\\dfrac{8!+7!}{6!}$.", 63, "(8 × 7 + 7) = 56 + 7."),
  num("Evaluate $\\dfrac{12!}{10!\\,2!}$.", 66, "12 × 11 ÷ 2."),
  num("Evaluate $P(9,4)$.", P(9, 4), "9 × 8 × 7 × 6."),
  num("How many 4-letter arrangements of the letters of NUMBER are there (no repeats)?", P(6, 4), "₆P₄."),
  num("A playlist plays 5 of 12 different songs in order. How many playlists?", P(12, 5), "₁₂P₅."),
  num("Solve $P(n,2)=30$ for $n$.", 6, "n(n − 1) = 30."),
  num("Solve $\\dfrac{n!}{(n-1)!}=15$.", 15, "The quotient is n."),
  num("Solve $\\dfrac{(n+2)!}{n!}=42$ for the positive integer $n$.", 5, "(n + 2)(n + 1) = 42 = 7 × 6."),
  num("In how many ways can 6 people line up if Pat must be first?", 120, "Fix Pat; 5! for the rest."),
  num("In how many ways can 7 different flags be flown in a vertical line using exactly 3 of them?", P(7, 3), "₇P₃."),
  num("How many arrangements of all the letters of PRISM end in a vowel?", 24, "I must be last: 4!."),
  ms("Which are equal to 720? Select all.", ["$6!$", "$P(10,3)$", "$P(6,6)$", "$\\dfrac{10!}{7!}$", "$P(9,3)$"], [0, 1, 2, 3], "P(9, 3) = 504."),
  mc("Simplify $\\dfrac{n!}{(n-2)!}$.", "$n(n-1)$", ["$n-2$", "$(n-1)(n-2)$", "$2$"], "n! = n(n − 1)(n − 2)!."),
  mc("How many times larger is $10!$ than $8!$?", "90", ["2", "20", "80"], "10 × 9."),
  tf("$(2\\times3)!=2!\\times3!$.", false, "720 ≠ 12."),
  tf("$P(n,1)=n$ for every positive integer $n$.", true, "One slot with n choices."),
  num("The tiles show 6 different letters. How many 4-letter arrangements start with A?", P(5, 3), "Fix A; ₅P₃ for the other three slots.", tilesSvg(["A", "B", "C", "D", "E", "F"])),
  num("Read the slot diagram: how many arrangements are counted?", 6 * 5 * 4 * 3, "Multiply the four boxes.", slotsSvg([["1st", 6], ["2nd", 5], ["3rd", 4], ["4th", 3]])),
  num("A 4-digit code uses digits 1–9 with no repeats. How many codes?", P(9, 4), "₉P₄."),
];

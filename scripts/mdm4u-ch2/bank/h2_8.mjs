// 2.8 Counting & Probability — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3 } from "./pk.mjs";
import { poolSvg, tilesSvg, seatsSvg, lineSvg } from "../../mdm4u/figs.mjs";
import { fact, P, C, multi, countPerms } from "../../mdm4u/count.mjs";

const w = (s) => s.split("");
const bday = (k) => 1 - Array.from({ length: k }, (_, i) => (365 - i) / 365).reduce((a, b) => a * b, 1);

export const TOPIC = "2.8 Counting & Probability";
export const Q = [
  p3("Five cards are dealt. What is P(a full house)?", (13 * C(4, 3) * 12 * C(4, 2)) / C(52, 5), "13 × 4 × 12 × 6 ÷ ₅₂C₅."),
  p3("Five cards are dealt. What is P(exactly one pair)?", (13 * C(4, 2) * C(12, 3) * 4 ** 3) / C(52, 5), "Pair rank and suits; 3 other ranks, one suit each."),
  p3("Five cards are dealt. What is P(two pairs)?", (C(13, 2) * C(4, 2) ** 2 * 44) / C(52, 5), "₁₃C₂ × 6² × 44."),
  p3("Five cards are dealt. What is P(three of a kind, but not a full house)?", (13 * C(4, 3) * C(12, 2) * 16) / C(52, 5), "13 × 4 × ₁₂C₂ × 4²."),
  p3("Thirteen cards are dealt. What is P(no aces)?", C(48, 13) / C(52, 13), "₄₈C₁₃ ÷ ₅₂C₁₃."),
  p3("The letters of MISSISSIPPI are arranged at random. What is P(all four S's are together)?", countPerms(w("MISSISSIPPI"), (a) => a.join("").includes("SSSS")) / multi("MISSISSIPPI"), "Block SSSS + M, I×4, P×2: 8!/(4! 2!) over 11!/(4! 4! 2!)."),
  p3("The letters of BANANA are arranged at random. What is P(no two A's are next to each other)?", countPerms(w("BANANA"), (a) => !a.join("").includes("AA")) / multi("BANANA"), "B, N, N in 3 places (3 orders), then A's in 3 of the 4 gaps."),
  p3("Eight people, 4 couples, sit at a round table at random. What is P(every couple sits together)?", (fact(3) * 2 ** 4) / fact(7), "3! × 2⁴ ÷ 7!."),
  p3("Ten people sit in a row at random. What is P(A, B and C sit together, in any order)?", (fact(8) * fact(3)) / fact(10), "8! × 3! ÷ 10!."),
  p3("A committee of 5 is chosen from 6 couples. What is P(no couple is on the committee)?", (C(6, 5) * 2 ** 5) / C(12, 5), "Choose 5 couples, one person each."),
  p3("Five people get their coats back at random. What is P(nobody gets their own coat)?", countPerms([0, 1, 2, 3, 4], (a) => a.every((x, i) => x !== i)) / fact(5), "44 derangements of 120."),
  p3("Four dice are rolled. What is P(all four show different numbers)?", P(6, 4) / 6 ** 4, "₆P₄ ÷ 6⁴."),
  p3("A 6-digit number is formed at random from the digits 1–6 with no repeats. What is P(it is divisible by 4)? (The last two digits must form a multiple of 4.)", (() => { let c = 0; for (const t of ["12", "16", "24", "32", "36", "52", "56", "64"]) c += fact(4); return c / fact(6); })(), "Endings 12, 16, 24, 32, 36, 52, 56, 64: 8 × 4! ÷ 6!."),
  p3("Use the graph: what is P(at least two of 40 people share a birthday)?", bday(40), "1 − P(365, 40)/365⁴⁰.", lineSvg([10, 20, 30, 40, 50].map(bday), { xs: [10, 20, 30, 40, 50], p: 0.5, pLabel: "50%", xlabel: "people", ylabel: "P(shared birthday)" })),
  p3("The pool shows 5 defective (red) and 15 good bulbs. Four are tested. What is P(at most one defective)?", (C(15, 4) + C(5, 1) * C(15, 3)) / C(20, 4), "0 or 1 defective.", poolSvg([[5, "red", "defective"], [15, "green", "good"]], { per: 10 })),
  p3("The tiles show the letters of EDUCATION. They are arranged at random. What is P(the vowels appear in alphabetical order, A before E before I before O before U)?", countPerms(w("EDUCATION"), (x) => x.filter((c) => "AEIOU".includes(c)).join("") === "AEIOU") / fact(9), "The 5 vowels are equally likely in any of 5! relative orders: 1/120.", tilesSvg(w("EDUCATION"), { colors: { A: "red", E: "red", I: "red", O: "red", U: "red" }, tw: 36 })),
  p3("Six people sit at random around the round table shown. What is P(A and B sit directly opposite each other)?", 1 / 5, "Fix A; B has 5 equally likely seats, one opposite.", seatsSvg(["A", "", "", "B", "", ""], { hl: [0, 3] })),
  mc("A lottery draws 6 of 49 numbers. Approximately what is P(matching exactly 3)?", "about 0.018", ["about 0.18", "about 0.0018", "about 0.05"], "₆C₃ × ₄₃C₃ ÷ ₄₉C₆ ≈ 0.0177."),
  ms("Five cards are dealt. Which are correct (to 3 decimal places)? Select all.", ["P(all red) ≈ 0.025", "P(at least one ace) ≈ 0.341", "P(no face card) ≈ 0.253", "P(exactly one heart) ≈ 0.5"], [0, 1, 2], "Exactly one heart ≈ 0.411."),
  tf("The probability that a random arrangement of the letters of LEVEL is a palindrome is 1/15.", true, "LEVEL arrangements: 30; palindromes: L E V E L and E L V L E: 2 of 30."),
];

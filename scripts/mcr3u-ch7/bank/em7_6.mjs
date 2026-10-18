// 7.6 Geometric Series — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, rd } from "./fig.mjs";

const S = String.raw;
const Sg = (a, r, n) => (r === 1 ? a * n : (a * (r ** n - 1)) / (r - 1));
const geo = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i);

export const E = [
  num(S`Find \(S_5\) for \(1+2+4+\cdots\)`, Sg(1, 2, 5), "2⁵ − 1."),
  num(S`Find \(S_4\) for \(3+9+27+\cdots\)`, Sg(3, 3, 4), "3 + 9 + 27 + 81."),
  num(S`Find \(S_6\) for \(5+10+20+\cdots\)`, Sg(5, 2, 6), "5(2⁶ − 1)."),
  num(S`Find \(S_5\) for \(2+10+50+\cdots\)`, Sg(2, 5, 5), "2(3125 − 1)/4."),
  num(S`Find \(S_4\) for \(64+32+16+\cdots\)`, Sg(64, 0.5, 4), "64 + 32 + 16 + 8."),
  num(S`Find \(S_5\) for \(1-3+9-\cdots\)`, Sg(1, -3, 5), "1 − 3 + 9 − 27 + 81."),
  num(S`Find \(S_3\) for \(100+10+1\).`, 111, "Add."),
  num("Find 1 + 2 + 4 + … + 128.", 255, "2⁸ − 1."),
  num("Find 1 + 3 + 9 + … + 243.", 364, "(3⁶ − 1)/2."),
  num(S`Find \(S_7\) for \(1+1+1+\cdots\) (r = 1).`, 7, "n × a."),
  mc("Which formula gives a geometric series (r ≠ 1)?", S`\(S_n=\frac{a(r^n-1)}{r-1}\)`, [S`\(S_n=\frac n2(a+t_n)\)`, S`\(S_n=ar^{n-1}\)`, S`\(S_n=\frac{a(r-1)}{r^n-1}\)`], "Multiply by r and subtract."),
  mc("Why can't the formula be used when r = 1?", "it would divide by zero", ["the terms alternate", "the sum is always 0", "it gives a negative sum"], "r − 1 = 0."),
  tf("The partial sums of 8 + 4 + 2 + 1 + … get closer and closer to 16.", true, "a/(1 − r) = 8/0.5."),
  tf("The partial sums of 1 + 2 + 4 + 8 + … approach a fixed number.", false, "With r > 1 they grow without bound."),
  num(S`What is \(r\) for the series \(6+18+54+\cdots\)?`, 3, "18 ÷ 6."),
  num("How many terms are in 2 + 4 + 8 + … + 256?", 8, "2ⁿ = 256."),
  num("A phone tree: 1 person calls 2, each of them calls 2 more, and so on. How many people are on a tree with 5 levels (top person is level 1)?", 31, "1 + 2 + 4 + 8 + 16."),
  num(S`Find \(S_6\) for \(1-1+1-1+\cdots\)`, 0, "Pairs cancel."),
  num("The bars show 1, 3, 9, 27, 81. Find their total.", geo(1, 3, 5).reduce((s, v) => s + v, 0), "1 + 3 + 9 + 27 + 81.", barsD(geo(1, 3, 5))),
  num("The bars halve each time, starting at 32. Find the total of the six bars.", geo(32, 0.5, 6).reduce((s, v) => s + v, 0), "32 + 16 + 8 + 4 + 2 + 1.", barsD(geo(32, 0.5, 6))),
];

export const M = [
  num(S`Find \(S_8\) for \(3+6+12+\cdots\)`, Sg(3, 2, 8), "3(2⁸ − 1)."),
  num(S`Find \(S_6\) for \(4-8+16-\cdots\)`, Sg(4, -2, 6), "4((−2)⁶ − 1)/(−3)."),
  num(S`Find \(S_7\) for \(2-6+18-\cdots\)`, Sg(2, -3, 7), "2((−3)⁷ − 1)/(−4)."),
  num(S`Find \(S_6\) for \(486+162+54+\cdots\)`, Sg(486, 1 / 3, 6), "486(1 − (⅓)⁶)/(⅔).", null, 0.001),
  num("Find 5 + 20 + 80 + … + 20 480.", Sg(5, 4, 7), "7 terms: 5(4⁷ − 1)/3."),
  num("Find 7 + 14 + 28 + … + 7168.", Sg(7, 2, 11), "11 terms: 7(2¹¹ − 1)."),
  num(S`Find \(S_{10}\) for \(1000+100+10+\cdots\) (2 decimals).`, rd(Sg(1000, 0.1, 10), 4), "1111.111111…", null, 0.001),
  num(S`Find \(S_5\) for \(0.5+1.5+4.5+\cdots\)`, Sg(0.5, 3, 5), "0.5(243 − 1)/2.", null, 0.001),
  num("How many terms of 1 + 2 + 4 + … add to 2047?", 11, "2ⁿ − 1 = 2047."),
  num("How many terms of 5 + 15 + 45 + … add to 1820?", 6, "5(3ⁿ − 1)/2 = 1820 ⇒ 3ⁿ = 729."),
  num(S`A geometric series has \(a=4\), \(r=3\) and last term 972. Find the sum.`, Sg(4, 3, 6), "(3 · 972 − 4)/2."),
  num("A chain letter goes to 5 people, each sends it to 5 more, and so on. How many letters are sent in the first 5 rounds?", Sg(5, 5, 5), "5 + 25 + 125 + 625 + 3125."),
  ms(S`Which equal \(1+2+4+\cdots+2^9\)? Select all.`, ["1023", S`\(2^{10}-1\)`, "1024", S`\(\frac{1(2^{10}-1)}{2-1}\)`, "512"], [0, 1, 3], "10 terms."),
  mc(S`What do the partial sums of \(12+6+3+\cdots\) approach?`, "24", ["12", "18", "they grow without limit"], "12 ÷ (1 − ½)."),
  tf(S`\(S_n=\frac{a(1-r^n)}{1-r}\) and \(S_n=\frac{a(r^n-1)}{r-1}\) always give the same answer.`, true, "Multiply top and bottom by −1."),
  tf("For an alternating geometric series, the partial sums can be negative.", true, "e.g. 1 − 3 = −2."),
  num("A salary starts at 40 000 dollars and rises 3% each year. What are the total earnings over 10 years (nearest dollar)?", Math.round(Sg(40000, 1.03, 10)), "40 000(1.03¹⁰ − 1)/0.03."),
  num("A ball dropped from 8 m bounces to half its height each time. How far has it travelled when it hits the ground the 5th time?", 8 + 2 * Sg(4, 0.5, 4), "8 + 2(4 + 2 + 1 + 0.5)."),
  num("The bars show the first terms of a geometric series. Find S₁₀.", Sg(2, 2, 10), "2(2¹⁰ − 1).", barsD(geo(2, 2, 5))),
  num("The bars show a geometric series. Find S₈ (2 decimals).", rd(Sg(81, 2 / 3, 8), 2), "81(1 − (⅔)⁸)/(⅓).", barsD(geo(81, 2 / 3, 6)), 0.01),
];

// 7.2 Geometric Sequences — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD, rd } from "./fig.mjs";

const S = String.raw;
const geo = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i);

export const E = [
  num("Find the common ratio of 3, 15, 75, …", 5, "15 ÷ 3."),
  num("Find the common ratio of 80, 40, 20, …", 0.5, "40 ÷ 80.", null, 0.0001),
  num("Find the common ratio of 2, −8, 32, …", -4, "−8 ÷ 2."),
  num("Find the next term of 1, 6, 36, …", 216, "× 6."),
  num(S`Find \(t_5\) for \(4, 12, 36,\ldots\)`, 324, "4 · 3⁴."),
  num(S`Find \(t_6\) for \(1, -2, 4,\ldots\)`, -32, "(−2)⁵."),
  num(S`For \(t_n=3(2)^{n-1}\), find \(t_4\).`, 24, "3 · 8."),
  num(S`For \(t_n=500(0.1)^{n-1}\), find \(t_3\).`, 5, "500 × 0.01."),
  mc("Which sequence is geometric?", "5, 20, 80, 320, …", ["5, 10, 15, 20, …", "5, 6, 8, 11, …", "5, 25, 50, 100, …"], "Constant ratio 4."),
  mc(S`Which is the general term of \(7, 14, 28,\ldots\)?`, S`\(t_n=7(2)^{n-1}\)`, [S`\(t_n=2(7)^{n-1}\)`, S`\(t_n=7(2)^n\)`, S`\(t_n=7n\)`], "a = 7, r = 2."),
  tf("A geometric sequence with a negative ratio has terms that alternate in sign.", true, "Each multiplication flips the sign."),
  tf("In a geometric sequence, the difference between consecutive terms is constant.", false, "The ratio is constant."),
  num(S`\(t_1=2\), \(t_n=3t_{n-1}\). Find \(t_4\).`, 54, "2, 6, 18, 54."),
  num(S`\(t_1=64\), \(t_n=0.5\,t_{n-1}\). Find \(t_5\).`, 4, "64, 32, 16, 8, 4."),
  num("Which term of 1, 2, 4, 8, … is 64?", 7, "2⁶ = 64."),
  num("A population of 500 doubles each year. What is it at the start of year 4 (year 1 = 500)?", 4000, "500 · 2³."),
  num("What ratio models a 6% increase each period?", 1.06, "1 + 0.06.", null, 0.0001),
  mc("What ratio models a 25% decrease each period?", "0.75", ["0.25", "1.25", "−0.25"], "1 − 0.25."),
  num("Read the common ratio from the graph.", 2, "Each point doubles.", dotsD(geo(1, 2, 6), { labels: true })),
  num("Read t₅ from the graph.", 6.25, "100, 50, 25, 12.5, 6.25.", dotsD(geo(100, 0.5, 6), { labels: true }), 0.001),
];

export const M = [
  num(S`Which term of \(5, 15, 45,\ldots\) is 10 935?`, 8, "3ⁿ⁻¹ = 2187 = 3⁷."),
  num(S`Which term of \(1024, 512, 256,\ldots\) is 1?`, 11, "(½)ⁿ⁻¹ = 1/1024."),
  num(S`A geometric sequence has \(t_2=15\) and \(t_4=135\), with \(r>0\). Find \(r\).`, 3, "r² = 9."),
  num(S`A geometric sequence has \(t_2=15\) and \(t_4=135\), with \(r>0\). Find \(a\).`, 5, "15 ÷ 3."),
  num(S`A geometric sequence has \(t_3=-12\) and \(t_6=96\). Find \(r\).`, -2, "r³ = −8."),
  num(S`Find \(t_8\) for \(0.5, 1.5, 4.5,\ldots\)`, 1093.5, "0.5 · 3⁷.", null, 0.001),
  num(S`Find \(t_7\) for \(729, -243, 81,\ldots\)`, 1, "729(−⅓)⁶."),
  num("How many terms are in 2, 10, 50, …, 31 250?", 7, "5ⁿ⁻¹ = 15 625 = 5⁶."),
  tf("12 is a term of 3, 6, 12, 24, …", true, "It is t₃."),
  tf("100 is a term of 2, 6, 18, 54, …", false, "2·3ⁿ⁻¹ = 100 needs 3ⁿ⁻¹ = 50."),
  mc(S`\(t_1=6\), \(t_n=-2t_{n-1}\). Which is the explicit formula?`, S`\(t_n=6(-2)^{n-1}\)`, [S`\(t_n=-2(6)^{n-1}\)`, S`\(t_n=6-2n\)`, S`\(t_n=-12(2)^{n-1}\)`], "a = 6, r = −2."),
  ms("Which are geometric? Select all.", ["3, −3, 3, −3", "2, 4, 6, 8", "0.1, 0.01, 0.001", "9, 9, 9, 9", "1, 4, 9, 16"], [0, 2, 3], "Ratios −1, 0.1, 1."),
  num("A car worth 28 000 dollars loses 20% of its value each year. What is it worth at the start of year 4 (year 1 = 28 000)? Round to the dollar.", 14336, "28 000(0.8)³."),
  num("A ball dropped from 9 m rebounds to 2/3 of its height each bounce. How high is the 3rd bounce (m, 2 decimals)?", rd(9 * (2 / 3) ** 3), "9(⅔)³.", null, 0.01),
  num(S`\(x\), \(x+3\) and \(2x+6\) (with \(x>0\)) are consecutive terms of a geometric sequence. Find x.`, 3, "(x + 3)² = x(2x + 6) = 2x(x + 3) ⇒ x + 3 = 2x."),
  num("A virus count triples every 4 hours, starting at 200. What is the count after 1 day?", 145800, "6 tripling periods: 200 · 3⁶."),
  num("Between 3 and 192 insert two numbers so the four numbers are geometric. What is the second number?", 12, "r³ = 64 ⇒ r = 4."),
  num(S`For \(t_n=48\left(\frac12\right)^{n-1}\), which is the first term less than 1?`, 7, "48, 24, 12, 6, 3, 1.5, 0.75."),
  num("The graph shows a geometric sequence. Find t₈.", 1458, "a = 2, r = 3: 2 · 3⁷.", dotsD(geo(2, 3, 5), { labels: true })),
  num("The graph shows a geometric sequence. Find r.", -0.5, "Values 32, −16, 8, −4 …", dotsD(geo(32, -0.5, 6), { labels: true }), 0.0001),
];

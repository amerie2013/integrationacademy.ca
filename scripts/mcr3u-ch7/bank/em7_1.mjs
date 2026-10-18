// 7.1 Arithmetic Sequences — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD } from "./fig.mjs";

const S = String.raw;
const arr = (a, d, n) => Array.from({ length: n }, (_, i) => a + i * d);

export const E = [
  num("Find the common difference of 4, 10, 16, 22, …", 6, "10 − 4."),
  num("Find the common difference of 30, 23, 16, …", -7, "23 − 30."),
  num("Find the next term of 8, 11, 14, 17, …", 20, "Add 3."),
  num(S`Find \(t_{10}\) for \(2, 5, 8,\ldots\)`, 29, "2 + 9(3)."),
  num(S`Find \(t_8\) for \(100, 95, 90,\ldots\)`, 65, "100 + 7(−5)."),
  num(S`For \(t_n=6n-4\), find \(t_5\).`, 26, "30 − 4."),
  num(S`For \(t_n=20-3n\), find \(t_4\).`, 8, "20 − 12."),
  num(S`For \(f(n)=2n+9\), find \(f(11)\).`, 31, "22 + 9."),
  mc("Which sequence is arithmetic?", "12, 9, 6, 3, …", ["1, 3, 9, 27, …", "1, 2, 4, 7, …", "2, 4, 8, 14, …"], "Constant difference −3."),
  mc(S`Which is the general term of \(5, 9, 13,\ldots\)?`, S`\(t_n=4n+1\)`, [S`\(t_n=5n+4\)`, S`\(t_n=4n+5\)`, S`\(t_n=n+4\)`], "a = 5, d = 4: 5 + 4(n − 1)."),
  tf("An arithmetic sequence can have a negative common difference.", true, "Then the terms decrease."),
  tf("The graph of an arithmetic sequence is a solid straight line.", false, "It is separate points: the domain is whole numbers."),
  num(S`\(t_1=7\), \(t_n=t_{n-1}+5\). Find \(t_3\).`, 17, "7, 12, 17."),
  num(S`\(t_1=-2\), \(t_n=t_{n-1}-4\). Find \(t_4\).`, -14, "−2, −6, −10, −14."),
  num("What is the first term of the sequence with t_n = 3n + 8?", 11, "n = 1."),
  num("Which term of 3, 6, 9, … is 45?", 15, "3n = 45."),
  num(S`Find \(t_{20}\) for \(1.5, 2, 2.5,\ldots\)`, 11, "1.5 + 19(0.5)."),
  mc(S`What is the common difference of \(t_n=7-2n\)?`, S`\(-2\)`, [S`\(7\)`, S`\(2\)`, S`\(5\)`], "The coefficient of n."),
  num("Read the common difference from the graph.", 3, "Each point is 3 higher.", dotsD(arr(2, 3, 6), { labels: true })),
  num("Read t₆ from the graph.", -5, "Values 10, 7, 4, 1, −2, −5.", dotsD(arr(10, -3, 6), { labels: true })),
];

export const M = [
  num(S`Find the general term of \(13, 20, 27,\ldots\) and give \(t_{50}\).`, 356, "tₙ = 7n + 6."),
  num(S`Which term of \(5, 12, 19,\ldots\) is 166?`, 24, "7n − 2 = 166."),
  num(S`Which term of \(90, 86, 82,\ldots\) is 2?`, 23, "94 − 4n = 2."),
  num(S`An arithmetic sequence has \(t_3=17\) and \(t_8=42\). Find \(d\).`, 5, "5d = 25."),
  num(S`An arithmetic sequence has \(t_3=17\) and \(t_8=42\). Find \(a\).`, 7, "17 − 2(5)."),
  num(S`An arithmetic sequence has \(t_2=-1\) and \(t_6=-21\). Find \(t_{10}\).`, -41, "d = −5; t₁₀ = t₆ + 4d."),
  num("How many terms are in 12, 17, 22, …, 247?", 48, "(247 − 12)/5 + 1."),
  num("How many terms are in 50, 47, 44, …, −16?", 23, "(50 − (−16))/3 + 1."),
  tf("75 is a term of 4, 9, 14, 19, …", false, "5n − 1 = 75 gives n = 15.2."),
  tf("99 is a term of 3, 7, 11, 15, …", true, "4n − 1 = 99 gives n = 25."),
  mc(S`\(t_1=8\), \(t_n=t_{n-1}-3\). Which is the explicit formula?`, S`\(t_n=11-3n\)`, [S`\(t_n=8-3n\)`, S`\(t_n=3n+8\)`, S`\(t_n=5-3n\)`], "8 + (n − 1)(−3)."),
  mc(S`Which recursive formula matches \(t_n=4n-9\)?`, S`\(t_1=-5,\ t_n=t_{n-1}+4\)`, [S`\(t_1=4,\ t_n=t_{n-1}-9\)`, S`\(t_1=-9,\ t_n=t_{n-1}+4\)`, S`\(t_1=-5,\ t_n=4t_{n-1}\)`], "t₁ = 4 − 9 = −5, d = 4."),
  ms("Which are arithmetic? Select all.", ["−3, 1, 5, 9", "0.5, 1, 1.5, 2", "2, 6, 18, 54", "7, 7, 7, 7", "1, 4, 9, 16"], [0, 1, 3], "A constant sequence has d = 0."),
  num("A gym membership costs 60 dollars to join plus 25 dollars per month. What is the total paid by the end of month 12?", 360, "60 + 25(12)."),
  num("A plant is 14 cm tall and grows 1.5 cm per week. In which week does it first reach 41 cm (week 1 → 15.5 cm)?", 18, "14 + 1.5n ≥ 41."),
  num(S`\(x+1\), \(3x\) and \(4x+2\) are consecutive terms of an arithmetic sequence. Find x.`, 3, "6x = 5x + 3."),
  num("Find the first negative term of 47, 43, 39, …", -1, "51 − 4n < 0 ⇒ n = 13: t₁₃ = −1."),
  num(S`For \(f(n)=-5n+32\), find the value of n where \(f(n)=-18\).`, 10, "−5n = −50."),
  num("The graph shows an arithmetic sequence. Find t₂₀.", 59, "a = 2, d = 3: 2 + 19(3).", dotsD(arr(2, 3, 5), { labels: true })),
  num("The graph shows an arithmetic sequence. Which term equals −40?", 16, "tₙ = 24 − 4n = −40.", dotsD(arr(20, -4, 6), { labels: true })),
];

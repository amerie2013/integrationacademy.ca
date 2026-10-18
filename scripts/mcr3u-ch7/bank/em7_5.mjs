// 7.5 Arithmetic Series — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD } from "./fig.mjs";

const S = String.raw;
const Sa = (a, d, n) => (n * (2 * a + (n - 1) * d)) / 2;
const arr = (a, d, n) => Array.from({ length: n }, (_, i) => a + i * d);

export const E = [
  num("Find 1 + 2 + 3 + … + 50.", 1275, "25 pairs of 51."),
  num("Find 1 + 2 + 3 + … + 80.", 3240, "40 × 81."),
  num(S`Find \(S_{10}\) for \(3+7+11+\cdots\)`, Sa(3, 4, 10), "5(6 + 36)."),
  num(S`Find \(S_8\) for \(10+15+20+\cdots\)`, Sa(10, 5, 8), "4(20 + 35)."),
  num(S`Find \(S_{12}\) for \(2+4+6+\cdots\)`, Sa(2, 2, 12), "6(4 + 22)."),
  num("A series has 20 terms, first 5 and last 62. Find its sum.", 670, "10(5 + 62)."),
  num("A series has 15 terms, first −4 and last 38. Find its sum.", 255, "7.5(34)."),
  num(S`Find \(S_6\) for \(40+35+30+\cdots\)`, Sa(40, -5, 6), "3(80 − 25)."),
  num("Find 1 + 3 + 5 + … + 39.", 400, "20 odd numbers: 20²."),
  num("Find 5 + 10 + 15 + … + 100.", 1050, "20 terms: 10(105)."),
  mc("Which formula gives an arithmetic series when you know the first and last terms?", S`\(S_n=\frac n2(t_1+t_n)\)`, [S`\(S_n=n(t_1+t_n)\)`, S`\(S_n=\frac{t_1+t_n}{2}\)`, S`\(S_n=\frac{a(r^n-1)}{r-1}\)`], "Average × number of terms."),
  mc("What is the difference between a sequence and a series?", "a series is the sum of the terms of a sequence", ["a sequence is the sum of a series", "they are the same", "a series has no last term"], "Series = sum."),
  tf(S`\(S_n\) means the n-th term of a sequence.`, false, "It is the sum of the first n terms."),
  tf("In 1 + 2 + … + 100, the first and last terms add to the same total as the second and second-last.", true, "1 + 100 = 2 + 99 = 101."),
  num(S`Find \(S_4\) for \(7+9+11+\cdots\) by adding directly.`, 7 + 9 + 11 + 13, "7 + 9 + 11 + 13."),
  num("How many terms are in 4 + 8 + 12 + … + 60?", 15, "60 ÷ 4."),
  num("Find 4 + 8 + 12 + … + 60.", 480, "7.5(64)."),
  num(S`Find \(S_{20}\) with \(a=1\) and \(d=1\).`, 210, "10(2 + 19)."),
  num("Find the total number of blocks in the stack shown.", arr(1, 1, 8).reduce((s, v) => s + v, 0), "1 + 2 + … + 8.", barsD(arr(1, 1, 8), { ylabel: "blocks" })),
  num("Find the sum of the terms shown in the bar chart.", arr(3, 2, 7).reduce((s, v) => s + v, 0), "3 + 5 + … + 15: 3.5(18).", barsD(arr(3, 2, 7))),
];

export const M = [
  num("Find 6 + 13 + 20 + … + 202.", (29 * (6 + 202)) / 2, "29 terms."),
  num("Find 100 + 96 + 92 + … + 4.", (25 * 104) / 2, "25 terms."),
  num(S`Find \(S_{30}\) for \(-15-11-7-\cdots\)`, Sa(-15, 4, 30), "15(−30 + 116)."),
  num(S`Find \(S_{25}\) for \(2.5+3+3.5+\cdots\)`, Sa(2.5, 0.5, 25), "12.5(5 + 12).", null, 0.001),
  num("Find the sum of the multiples of 4 from 4 to 400.", 20200, "100 terms: 50(404)."),
  num("Find the sum of the two-digit odd numbers.", (45 * (11 + 99)) / 2, "11 to 99: 45 terms."),
  num("How many terms of 1 + 5 + 9 + … add to 231?", 11, "n(2n − 1) = 231."),
  num("What is the smallest number of terms of 20 + 18 + 16 + … that add to 110?", 10, "n(21 − n) = 110 ⇒ n = 10 or 11 (t₁₁ = 0), so the smallest is 10."),
  num("An arithmetic series has 10 terms, first term 4 and sum 175. Find d.", 3, "5(8 + 9d) = 175."),
  num("An arithmetic series has S₁₂ = 240 and d = 2. Find a.", 9, "6(2a + 22) = 240."),
  num(S`\(S_n=n^2+4n\). Find \(t_1\).`, 5, "S₁."),
  num(S`\(S_n=n^2+4n\). Find \(d\).`, 2, "t₂ = S₂ − S₁ = 12 − 5 = 7."),
  ms("Which equal 1 + 2 + … + 20? Select all.", ["210", "20 × 21 ÷ 2", "10 × 21", "20²", "200"], [0, 1, 2], "n(n + 1)/2."),
  mc("A theatre has 18 rows: 20 seats in row 1 and 2 more in each row. How many seats?", "666", ["546", "720", "378"], "9(40 + 34)."),
  tf("If every term of an arithmetic series is increased by 3, the sum of 10 terms increases by 30.", true, "10 terms × 3."),
  tf("Doubling the number of terms of 1 + 2 + 3 + … doubles the sum.", false, "Sₙ grows like n²."),
  num("A clock strikes 1 at 1 o'clock, 2 at 2 o'clock, … 12 at 12 o'clock. How many strikes in a full day (24 h)?", 156, "2 × 78."),
  num("Logs: 20 on the bottom row, 19 above, …, 5 on top. How many logs?", 200, "16 rows: 8(25)."),
  num("Read the chart: how many seats in all rows shown?", arr(12, 3, 9).reduce((s, v) => s + v, 0), "9 rows: 4.5(12 + 36).", barsD(arr(12, 3, 9), { xlabel: "row", ylabel: "seats" })),
  num("The chart shows the distance run each day. What is the total distance for the 10 days shown (km)?", arr(2, 0.5, 10).reduce((s, v) => s + v, 0), "5(2 + 6.5).", barsD(arr(2, 0.5, 10), { xlabel: "day", ylabel: "km" }), 0.001),
];

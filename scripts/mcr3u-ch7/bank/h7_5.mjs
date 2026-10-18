// 7.5 Arithmetic Series — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD } from "./fig.mjs";

const S = String.raw;
const Sa = (a, d, n) => (n * (2 * a + (n - 1) * d)) / 2;
const arr = (a, d, n) => Array.from({ length: n }, (_, i) => a + i * d);
/** smallest n with Sₙ ≥ target (or > when strict) */
const firstN = (a, d, target, strict = false) => { let n = 1; while (strict ? Sa(a, d, n) <= target : Sa(a, d, n) < target) n++; return n; };

export const TOPIC = "7.5 Arithmetic Series";
export const Q = [
  num("Find the sum of all whole numbers from 1 to 500 that are multiples of 3 or 5.", (() => { let s = 0; for (let i = 1; i <= 500; i++) if (i % 3 === 0 || i % 5 === 0) s += i; return s; })(), "Multiples of 3 + multiples of 5 − multiples of 15."),
  num("Find the sum of the whole numbers from 1 to 200 that are NOT multiples of 4.", 20100 - 5100, "20 100 − (4 + 8 + … + 200 = 5100)."),
  num("How many terms of 3 + 7 + 11 + … are needed for the sum to exceed 2000?", firstN(3, 4, 2000, true), "n(2n + 1) > 2000."),
  num("How many terms of 50 + 47 + 44 + … give the largest possible sum?", 17, "Add terms while they are positive: t₁₇ = 2, t₁₈ = −1."),
  num(S`For \(S_n=3n^2-5n\), find \(t_{20}\).`, 3 * 400 - 100 - (3 * 361 - 95), "S₂₀ − S₁₉."),
  num(S`For \(S_n=\frac{n}{2}(7n+1)\), find the common difference.`, 7, "t₁ = 4, t₂ = S₂ − S₁ = 15 − 4 = 11."),
  num("The sum of the first 8 terms of an arithmetic series is 100 and the sum of the first 16 terms is 392. Find a.", 2, "2a + 7d = 25 and 2a + 15d = 49 ⇒ 8d = 24, d = 3, a = 2."),
  num("An auditorium has 25 rows. The first row has 16 seats and each row has k more than the one before. There are 1000 seats in all. Find k.", 2, "12.5(32 + 24k) = 1000."),
  num("A student saves 5 dollars in week 1, 7 dollars in week 2, 9 dollars in week 3, and so on. In which week does the total first reach 500 dollars?", firstN(5, 2, 500), "n(n + 4) ≥ 500."),
  num("Find the sum of all the terms of 7, 10, 13, … that lie between 100 and 300.", (() => { let s = 0; for (let t = 7; t <= 300; t += 3) if (t > 100 && t < 300) s += t; return s; })(), "103 to 298: 66 terms."),
  tf("The sum of the first n odd numbers is always a perfect square.", true, "n(1 + 2n − 1)/2 = n²."),
  tf("Any arithmetic series with a negative common difference eventually has a negative sum.", true, "Terms become very negative, so Sₙ → −∞."),
  ms(S`For \(5+9+13+\cdots\), which are true? Select all.`, ["S₁₀ = 230", "t₁₀ = 41", "S₂₀ = 860", "the sum of 15 terms is 495", "S₅ = 65"], [0, 1, 2, 3, 4], "All are correct: Sₙ = n(2n + 3)."),
  mc("Which expression gives 1 + 2 + … + n?", S`\(\frac{n(n+1)}2\)`, [S`\(\frac{n^2}2\)`, S`\(n(n+1)\)`, S`\(\frac{n(n-1)}2\)`], "n/2 (1 + n)."),
  num("A pile of pipes has 24 in the bottom layer and 1 fewer in each layer above. How many layers give exactly 234 pipes?", 13, "n/2[48 − (n − 1)] = 234 ⇒ n² − 49n + 468 = 0 ⇒ n = 13 (36 is impossible: only 24 layers fit)."),
  num("Between 20 and 80, insert 9 numbers so all 11 form an arithmetic sequence. What is the sum of the 9 inserted numbers?", 450, "Sum of all 11 = 5.5(100) = 550; minus 100."),
  num("Find the total number of seats shown (rows continue the pattern to 20 rows).", Sa(14, 2, 20), "a = 14, d = 2, n = 20.", barsD(arr(14, 2, 6), { xlabel: "row", ylabel: "seats" })),
  num("The chart shows the first 5 rows of a triangular display of cans (1 can on top). How many cans in a display with 30 rows?", 465, "30 · 31 / 2.", barsD(arr(1, 1, 5), { ylabel: "cans" })),
  num("The chart shows weekly savings. After how many weeks does the total first exceed 1000 dollars?", firstN(10, 5, 1000, true), "Sₙ = n/2[20 + 5(n − 1)] > 1000.", barsD(arr(10, 5, 6), { xlabel: "week", ylabel: "dollars" })),
  num("The chart shows the terms of an arithmetic series. Find S₄₀.", Sa(50, -3, 40), "a = 50, d = −3: 20(100 − 117).", barsD(arr(50, -3, 6))),
];

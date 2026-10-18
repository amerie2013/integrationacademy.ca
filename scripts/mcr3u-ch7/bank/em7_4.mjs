// 7.4 Sequences Defined by Two Previous Terms — 20 easy + 20 medium questions (new topic)
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD, rd } from "./fig.mjs";

const S = String.raw;
/** t₁ = a, t₂ = b, tₙ = g(tₙ₋₁, tₙ₋₂) — returns n terms */
const two = (a, b, n, g = (p, q) => p + q) => { const v = [a, b]; while (v.length < n) v.push(g(v[v.length - 1], v[v.length - 2])); return v; };
const T = (a, b, n, g) => two(a, b, n, g)[n - 1];
const F = two(1, 1, 20);

export const E = [
  num("Find the 9th Fibonacci number (1, 1, 2, 3, …).", F[8], "1, 1, 2, 3, 5, 8, 13, 21, 34."),
  num("Find the 11th Fibonacci number.", F[10], "…, 34, 55, 89."),
  num("What Fibonacci number comes after 144?", 233, "89 + 144."),
  num(S`\(t_1=2\), \(t_2=3\), \(t_n=t_{n-1}+t_{n-2}\). Find \(t_5\).`, T(2, 3, 5), "2, 3, 5, 8, 13."),
  num(S`\(t_1=1\), \(t_2=5\), \(t_n=t_{n-1}+t_{n-2}\). Find \(t_6\).`, T(1, 5, 6), "1, 5, 6, 11, 17, 28."),
  num(S`\(t_1=4\), \(t_2=4\), \(t_n=t_{n-1}+t_{n-2}\). Find \(t_5\).`, T(4, 4, 5), "4, 4, 8, 12, 20."),
  num(S`\(t_1=1\), \(t_2=2\), \(t_n=t_{n-1}-t_{n-2}\). Find \(t_4\).`, T(1, 2, 4, (p, q) => p - q), "1, 2, 1, −1."),
  num(S`\(t_1=1\), \(t_2=1\), \(t_n=t_{n-1}+2t_{n-2}\). Find \(t_5\).`, T(1, 1, 5, (p, q) => p + 2 * q), "1, 1, 3, 5, 11."),
  num(S`\(t_1=3\), \(t_2=2\), \(t_n=t_{n-1}\cdot t_{n-2}\). Find \(t_5\).`, T(3, 2, 5, (p, q) => p * q), "3, 2, 6, 12, 72."),
  num("How many starting terms must be given for tₙ = tₙ₋₁ + tₙ₋₂?", 2, "Each term needs the two before it."),
  mc("What value do the ratios of consecutive Fibonacci numbers approach?", "about 1.618", ["exactly 2", "about 1.414", "about 3.14"], "The golden ratio."),
  mc(S`Which describes \(t_n=t_{n-1}+t_{n-2}\) with \(t_1=t_2=1\)?`, "the Fibonacci sequence", ["an arithmetic sequence", "a geometric sequence", "the triangular numbers"], "1, 1, 2, 3, 5, …"),
  tf("The Fibonacci sequence is geometric.", false, "Its ratios change: 1, 2, 1.5, 1.67, …"),
  tf(S`For \(t_n=t_{n-1}+t_{n-2}\), \(t_{n-2}=t_n-t_{n-1}\).`, true, "Rearrange the rule."),
  num(S`For \(t_n=t_{n-1}+t_{n-2}\), \(t_4=10\) and \(t_5=16\). Find \(t_3\).`, 6, "16 − 10."),
  num(S`For \(t_n=t_{n-1}+t_{n-2}\), \(t_6=29\) and \(t_7=47\). Find \(t_5\).`, 18, "47 − 29."),
  num("Find 21 ÷ 13 to 3 decimals.", rd(21 / 13, 3), "A Fibonacci ratio.", null, 0.001),
  num("How many ways are there to climb 4 stairs taking 1 or 2 steps at a time?", 5, "W: 1, 2, 3, 5."),
  num("Read t₇ from the graph of the Fibonacci-type sequence.", T(2, 1, 7), "2, 1, 3, 4, 7, 11, 18.", dotsD(two(2, 1, 7), { labels: true })),
  num("The graph shows a two-term sequence. What is t₆ + t₇ (which equals t₈)?", T(1, 3, 8), "Add the last two shown.", dotsD(two(1, 3, 7), { labels: true })),
];

export const M = [
  num("Find the 16th Fibonacci number.", F[15], "…, 377, 610, 987."),
  num(S`\(t_1=3\), \(t_2=-1\), \(t_n=t_{n-1}+t_{n-2}\). Find \(t_8\).`, T(3, -1, 8), "3, −1, 2, 1, 3, 4, 7, 11."),
  num(S`\(t_1=2\), \(t_2=1\), \(t_n=2t_{n-1}+t_{n-2}\). Find \(t_6\).`, T(2, 1, 6, (p, q) => 2 * p + q), "2, 1, 4, 9, 22, 53."),
  num(S`\(t_1=1\), \(t_2=4\), \(t_n=t_{n-1}-t_{n-2}\). Find \(t_9\).`, T(1, 4, 9, (p, q) => p - q), "Period 6: 1, 4, 3, −1, −4, −3, 1, 4, 3."),
  num(S`For \(t_n=t_{n-1}+t_{n-2}\), \(t_5=21\) and \(t_6=34\). Find \(t_1\).`, 3, "13, 8, 5, 3 working back: t₄ = 13, t₃ = 8, t₂ = 5, t₁ = 3."),
  num("Find the sum of the first 10 Fibonacci numbers.", F.slice(0, 10).reduce((s, v) => s + v, 0), "t₁₂ − 1 = 143."),
  num("Find 55 ÷ 34 to 4 decimals.", rd(55 / 34, 4), "Very close to φ.", null, 0.0001),
  num(S`Evaluate \(\frac{1+\sqrt5}{2}\) to 3 decimals.`, rd((1 + Math.sqrt(5)) / 2, 3), "The golden ratio.", null, 0.001),
  num("How many ways are there to climb 7 stairs taking 1 or 2 steps at a time?", T(1, 2, 7), "1, 2, 3, 5, 8, 13, 21."),
  num("A 2 × n path is tiled with 1 × 2 tiles. How many tilings are there for n = 6?", T(1, 2, 6), "1, 2, 3, 5, 8, 13."),
  mc(S`What do the ratios \(\frac{t_n}{t_{n-1}}\) approach for \(t_1=t_2=1\), \(t_n=t_{n-1}+2t_{n-2}\)?`, "2", ["1.618", "3", "1.5"], "1, 1, 3, 5, 11, 21, 43: ratios approach 2."),
  mc("Which is NOT a Fibonacci number?", "50", ["34", "89", "144"], "…, 34, 55, 89, 144."),
  ms("Which are true of the Fibonacci sequence? Select all.", ["every third term is even", "t₅ = 5", "consecutive terms have no common factor > 1", "all terms are odd", "the ratios approach 1.618"], [0, 1, 2, 4], "1, 1, 2, 3, 5, 8: 2 and 8 are even."),
  tf(S`For any starting terms, \(t_n=t_{n-1}+t_{n-2}\) eventually produces a Fibonacci number.`, false, "Starting 2, 2 gives 2, 2, 4, 6, 10, … — no 1, 3, 5 …"),
  tf(S`If \(t_1=t_2=2\) and \(t_n=t_{n-1}+t_{n-2}\), every term is twice a Fibonacci number.`, true, "The rule is linear: doubling the start doubles every term."),
  num(S`A sequence has \(t_1=5\) and \(t_n=t_{n-1}+t_{n-2}\). If \(t_4=21\), find \(t_2\).`, 8, "t₃ = 5 + t₂, t₄ = 5 + 2t₂ = 21."),
  num(S`A sequence follows \(t_n=t_{n-1}+t_{n-2}\). If \(t_1=a\), \(t_2=b\), the coefficient of b in \(t_6\) is …`, 5, "t₆ = 3a + 5b."),
  num("Find the product t₆ × t₈ − t₇² for the Fibonacci sequence.", F[5] * F[7] - F[6] ** 2, "8 · 21 − 169."),
  num("The graph shows the ratios of consecutive terms of a Fibonacci-type sequence. To what value do they settle (3 decimals)?", rd((1 + Math.sqrt(5)) / 2, 3), "The golden ratio.", dotsD(two(3, 1, 10).slice(1).map((v, i, a) => rd(v / two(3, 1, 10)[i], 3)), { start: 2, labels: false, ylabel: "ratio", lines: [{ m: 0, b: 1.618, color: "amber", dash: true }] }), 0.001),
  num("The graph shows the number of ways W to climb n stairs (1 or 2 steps at a time). Find W for 9 stairs.", T(1, 2, 9), "Continue 1, 2, 3, 5, 8, 13: 21, 34, 55.", dotsD(two(1, 2, 6), { labels: true, xlabel: "stairs", ylabel: "ways" })),
];

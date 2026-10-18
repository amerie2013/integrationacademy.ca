// 7.4 Sequences Defined by Two Previous Terms — 20 hard questions (new topic)
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD, rd } from "./fig.mjs";

const S = String.raw;
const two = (a, b, n, g = (p, q) => p + q) => { const v = [a, b]; while (v.length < n) v.push(g(v[v.length - 1], v[v.length - 2])); return v; };
const T = (a, b, n, g) => two(a, b, n, g)[n - 1];
const F = two(1, 1, 30);
/** climbing with steps of 1, 2 or 3 */
const tri = (n) => { const w = [1, 2, 4]; while (w.length < n) w.push(w.at(-1) + w.at(-2) + w.at(-3)); return w[n - 1]; };

export const TOPIC = "7.4 Sequences Defined by Two Previous Terms";
export const Q = [
  num("How many ways are there to climb 12 stairs taking 1 or 2 steps at a time?", T(1, 2, 12), "W₁ = 1, W₂ = 2, add the previous two."),
  num("How many ways are there to climb 7 stairs taking 1, 2 or 3 steps at a time?", tri(7), "Wₙ = Wₙ₋₁ + Wₙ₋₂ + Wₙ₋₃ with 1, 2, 4."),
  num(S`For \(t_n=t_{n-1}+t_{n-2}\), \(t_3=9\) and \(t_7=63\). Find \(t_4\).`, 15, "t₅ = 9 + t₄, t₆ = 9 + 2t₄, t₇ = 18 + 3t₄ = 63."),
  num(S`For \(t_n=t_{n-1}+t_{n-2}\), \(t_1=3\) and \(t_6=44\). Find \(t_2\).`, 7, "t₆ = 3t₁ + 5t₂ = 9 + 5t₂ = 44."),
  num("Find the sum of the first 15 Fibonacci numbers.", F.slice(0, 15).reduce((s, v) => s + v, 0), "t₁₇ − 1."),
  num("Find the sum of the squares of the first 8 Fibonacci numbers.", F.slice(0, 8).reduce((s, v) => s + v * v, 0), "Equals t₈ × t₉ = 21 × 34."),
  num(S`\(t_1=1\), \(t_2=3\), \(t_n=t_{n-1}+t_{n-2}\). Find \(t_{10}\div t_9\) to 4 decimals.`, rd(T(1, 3, 10) / T(1, 3, 9), 4), "1, 3, 4, 7, 11, 18, 29, 47, 76, 123.", null, 0.0001),
  num(S`For \(t_n=t_{n-1}+3t_{n-2}\), the ratios approach \(\frac{1+\sqrt{13}}2\). Evaluate it to 3 decimals.`, rd((1 + Math.sqrt(13)) / 2, 3), "x² = x + 3.", null, 0.001),
  num(S`\(t_1=2\), \(t_2=5\), \(t_n=t_{n-1}-t_{n-2}\). Find \(t_{50}\).`, T(2, 5, 50, (p, q) => p - q), "Period 6: 2, 5, 3, −2, −5, −3; 50 = 8·6 + 2."),
  num(S`\(t_1=1\), \(t_2=1\), \(t_n=t_{n-1}+t_{n-2}+1\). Find \(t_7\).`, T(1, 1, 7, (p, q) => p + q + 1), "1, 1, 3, 5, 9, 15, 25."),
  tf("Every 4th Fibonacci number is divisible by 3.", true, "t₄ = 3, t₈ = 21, t₁₂ = 144."),
  tf("The sum of any 10 consecutive Fibonacci numbers is divisible by 11.", true, "It equals 11 times the 7th of the ten."),
  ms("Which are true for t₁ = t₂ = 1, tₙ = tₙ₋₁ + tₙ₋₂? Select all.", ["t₁₀ = 55", "t₁₂ = 144", "t₂₀ > 10 000", "t₆ is prime", "t₅ is prime"], [0, 1, 4], "t₂₀ = 6765; t₆ = 8."),
  mc("A rabbit-pair model: each mature pair produces a new pair each month, and new pairs mature after one month. Starting with one new pair, how many pairs after 10 months?", String(F[9]), ["34", "89", "100"], "Pairs follow the Fibonacci numbers."),
  num("Using φ ≈ 1.618, estimate the Fibonacci number after 610 (nearest whole number), then compare with the exact value 987. What is the estimate?", Math.round(610 * 1.618), "610 × 1.618 ≈ 987."),
  num(S`For \(t_n=t_{n-1}+t_{n-2}\), if \(t_{10}=a\) and \(t_{11}=b\), \(t_{13}=pa+qb\). Find \(p+q\).`, 3, "t₁₂ = a + b, t₁₃ = a + 2b: p + q = 3."),
  num("The graph shows the ratios tₙ/tₙ₋₁ of the sequence 2, 5, 7, 12, … Read the value they approach (3 decimals).", rd((1 + Math.sqrt(5)) / 2, 3), "Any positive start gives φ.", dotsD(two(2, 5, 10).slice(1).map((v, i) => rd(v / two(2, 5, 10)[i], 3)), { start: 2, lines: [{ m: 0, b: 1.618, color: "amber", dash: true }], ylabel: "ratio" }), 0.001),
  num("The graph shows tₙ = tₙ₋₁ − tₙ₋₂ starting 3, 5. Find t₁₀₀.", T(3, 5, 100, (p, q) => p - q), "Period 6; 100 = 16·6 + 4.", dotsD(two(3, 5, 8, (p, q) => p - q), { labels: true })),
  num("The graph shows Wₙ, the ways to tile a 2 × n path. Find W₁₅.", T(1, 2, 15), "Wₙ = Wₙ₋₁ + Wₙ₋₂.", dotsD(two(1, 2, 7), { labels: true, xlabel: "n", ylabel: "tilings" })),
  num("The graph shows tₙ = tₙ₋₁ + 2tₙ₋₂ from 1, 1. Find t₁₀.", T(1, 1, 10, (p, q) => p + 2 * q), "1, 1, 3, 5, 11, 21, 43, 85, 171, 341.", dotsD(two(1, 1, 7, (p, q) => p + 2 * q), { labels: true })),
];

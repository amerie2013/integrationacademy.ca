// 7.3 Creating Rules for Sequences — 20 hard questions (new topic)
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD } from "./fig.mjs";

const S = String.raw;
const rec = (a, g, n) => { const v = [a]; for (let i = 2; i <= n; i++) v.push(g(v[v.length - 1], i)); return v; };
const last = (a, g, n) => rec(a, g, n)[n - 1];

export const TOPIC = "7.3 Creating Rules for Sequences";
export const Q = [
  num("Find an explicit rule for 5, 13, 25, 41, 61, … and give t₂₀.", 2 * 400 + 2 * 20 + 1, "Second differences 4: 2n² + bn + c; tₙ − 2n² = 3, 5, 7 = 2n + 1. So tₙ = 2n² + 2n + 1."),
  num("Find an explicit rule for −1, 2, 7, 14, 23, … and give t₁₅.", 15 * 15 - 2, "tₙ = n² − 2."),
  num("Find an explicit rule for 1, 7, 17, 31, 49, … Which term equals 199?", 10, "tₙ = 2n² − 1 = 199 ⇒ n² = 100."),
  num("The explicit rule of 4, 9, 16, 25, … is (n + 1)². Which term is 900?", 29, "n + 1 = 30."),
  num(S`\(t_1=1\), \(t_n=t_{n-1}+n^2\). Find \(t_5\).`, last(1, (p, n) => p + n * n, 5), "1, 5, 14, 30, 55."),
  num(S`\(t_1=2\), \(t_n=3t_{n-1}-2\). Find \(t_8\).`, last(2, (p) => 3 * p - 2, 8), "2, 4, 10, 28, 82, 244, 730, 2188."),
  num(S`For \(t_1=a\), \(t_n=2t_{n-1}+3\), we know \(t_3=29\). Find \(a\).`, 5, "t₂ = 2a + 3, so t₃ = 2(2a + 3) + 3 = 4a + 9 = 29."),
  num(S`\(t_1=6\), \(t_n=t_{n-1}+(-1)^n\cdot n\). Find \(t_6\).`, last(6, (p, n) => p + (-1) ** n * n, 6), "6, 8, 5, 9, 4, 10."),
  mc("Which explicit rule matches t₁ = 3, tₙ = 2tₙ₋₁?", S`\(t_n=3\cdot2^{n-1}\)`, [S`\(t_n=2\cdot3^{n-1}\)`, S`\(t_n=3+2(n-1)\)`, S`\(t_n=3\cdot2^n\)`], "Geometric with a = 3, r = 2."),
  mc("Which explicit rule matches t₁ = 2, tₙ = tₙ₋₁ + 2n?", S`\(t_n=n^2+n\)`, [S`\(t_n=2n\)`, S`\(t_n=n^2+1\)`, S`\(t_n=2^n\)`], "2, 6, 12, 20 = n(n + 1)."),
  ms("Which sequences have constant second differences? Select all.", ["3, 5, 9, 15, 23", "1, 2, 4, 8, 16", "0, 3, 8, 15, 24", "5, 5, 5, 5, 5", "2, 3, 5, 8, 13"], [0, 2, 3], "1, 2, 4, 8 has second differences 1, 2, 4; Fibonacci-type does not."),
  tf("Every sequence with constant first differences also has constant second differences.", true, "The second differences are all 0."),
  tf("The disc puzzle needs more than 1000 moves for 10 discs.", true, "2¹⁰ − 1 = 1023."),
  num("A staircase pattern of squares uses 1, 3, 6, 10, … squares. How many squares does the 40th staircase use?", 820, "n(n + 1)/2 = 40 · 41 / 2."),
  num("Hexagonal numbers are 1, 6, 15, 28, 45, … Find the 20th.", 20 * (2 * 20 - 1), "tₙ = n(2n − 1)."),
  num(S`The rule \(t_n=pt_{n-1}+q\) gives 2, 7, 22, 67, … Find q.`, 1, "7 = 2p + q, 22 = 7p + q ⇒ p = 3, q = 1."),
  num("The graph shows a quadratic sequence. Find t₁₂.", 12 * 12 + 12 - 1, "1, 5, 11, 19, 29: second differences 2; tₙ = n² + n − 1.", dotsD([1, 5, 11, 19, 29], { labels: true })),
  num("The graph shows t₁ = 1, tₙ = 3tₙ₋₁ − 1. Find t₇.", last(1, (p) => 3 * p - 1, 7), "1, 2, 5, 14, 41, 122, 365.", dotsD(rec(1, (p) => 3 * p - 1, 5), { labels: true })),
  num("The graph shows the number of moves M for n discs. Find M for 12 discs.", 4095, "Mₙ = 2ⁿ − 1.", dotsD(rec(1, (p) => 2 * p + 1, 6), { labels: true, xlabel: "discs", ylabel: "moves" })),
  num("The graph shows a sequence with explicit rule tₙ = an² + c. Find a.", 3, "Second differences 6, so a = 3: the points 2, 11, 26, 47 fit tₙ = 3n² − 1.", dotsD([2, 11, 26, 47], { labels: true })),
];

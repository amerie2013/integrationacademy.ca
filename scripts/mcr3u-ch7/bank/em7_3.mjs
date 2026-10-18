// 7.3 Creating Rules for Sequences — 20 easy + 20 medium questions (new topic)
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD } from "./fig.mjs";

const S = String.raw;
/** terms of t₁ = a, tₙ = g(tₙ₋₁, n) */
const rec = (a, g, n) => { const v = [a]; for (let i = 2; i <= n; i++) v.push(g(v[v.length - 1], i)); return v; };
const last = (a, g, n) => rec(a, g, n)[n - 1];

export const E = [
  num(S`\(t_1=3\), \(t_n=t_{n-1}+4\). Find \(t_5\).`, last(3, (p) => p + 4, 5), "Add 4 four times."),
  num(S`\(t_1=2\), \(t_n=4t_{n-1}\). Find \(t_4\).`, last(2, (p) => 4 * p, 4), "2, 8, 32, 128."),
  num(S`\(t_1=1\), \(t_n=3t_{n-1}+1\). Find \(t_4\).`, last(1, (p) => 3 * p + 1, 4), "1, 4, 13, 40."),
  num(S`\(t_1=10\), \(t_n=t_{n-1}-n\). Find \(t_4\).`, last(10, (p, n) => p - n, 4), "10, 8, 5, 1."),
  num(S`\(t_1=0\), \(t_n=2t_{n-1}+2\). Find \(t_5\).`, last(0, (p) => 2 * p + 2, 5), "0, 2, 6, 14, 30."),
  num(S`For \(f(n)=n^2-4\), find \(f(6)\).`, 32, "36 − 4."),
  num(S`For \(f(n)=2^n+1\), find \(f(5)\).`, 33, "32 + 1."),
  num(S`For \(t_n=n(n-1)\), find \(t_7\).`, 42, "7 × 6."),
  num("Find the next term: 2, 5, 10, 17, 26, …", 37, "Differences 3, 5, 7, 9, 11."),
  num("Find the next term: 1, 3, 7, 15, 31, …", 63, "Double and add 1."),
  num("What are the second differences of 1, 4, 9, 16, 25?", 2, "First differences 3, 5, 7, 9."),
  mc("Classify 3, 9, 27, 81, …", "geometric", ["arithmetic", "neither", "quadratic"], "Ratio 3."),
  mc("Classify 2, 6, 12, 20, 30, …", "neither arithmetic nor geometric", ["arithmetic", "geometric", "constant"], "Differences 4, 6, 8, 10."),
  mc(S`Which recursive formula gives \(5, 8, 11, 14,\ldots\)?`, S`\(t_1=5,\ t_n=t_{n-1}+3\)`, [S`\(t_1=5,\ t_n=3t_{n-1}\)`, S`\(t_1=3,\ t_n=t_{n-1}+5\)`, S`\(t_n=t_{n-1}+3\)`], "Start and step."),
  tf("A recursive formula needs at least one given starting term.", true, "Otherwise the sequence is not determined."),
  tf("If the second differences of a sequence are constant, its explicit rule is linear.", false, "It is quadratic."),
  num(S`\(t_1=5\), \(t_n=t_{n-1}+2n\). Find \(t_3\).`, last(5, (p, n) => p + 2 * n, 3), "5, 9, 15."),
  num("What is the minimum number of moves to transfer 5 discs in the disc-moving puzzle?", 31, "2⁵ − 1."),
  num("Read t₆ from the graph of t₁ = 1, tₙ = tₙ₋₁ + n.", 21, "1, 3, 6, 10, 15, 21.", dotsD(rec(1, (p, n) => p + n, 6), { labels: true })),
  num("The graph shows t₁ = 2, tₙ = 2tₙ₋₁ − 1. Read t₅.", 17, "2, 3, 5, 9, 17.", dotsD(rec(2, (p) => 2 * p - 1, 5), { labels: true })),
];

export const M = [
  num(S`\(t_1=4\), \(t_n=2t_{n-1}-3\). Find \(t_6\).`, last(4, (p) => 2 * p - 3, 6), "4, 5, 7, 11, 19, 35."),
  num(S`\(t_1=-1\), \(t_n=-2t_{n-1}+1\). Find \(t_5\).`, last(-1, (p) => -2 * p + 1, 5), "−1, 3, −5, 11, −21."),
  num(S`\(t_1=1\), \(t_n=n\,t_{n-1}\). Find \(t_6\).`, last(1, (p, n) => n * p, 6), "1, 2, 6, 24, 120, 720."),
  num("Find an explicit rule for 4, 7, 12, 19, 28, … and give t₁₀.", 103, "tₙ = n² + 3."),
  num("Find an explicit rule for 2, 8, 18, 32, 50, … and give t₉.", 162, "tₙ = 2n²."),
  num("Find an explicit rule for 0, 2, 6, 12, 20, … and give t₁₁.", 110, "tₙ = n(n − 1)."),
  num("For 6, 11, 18, 27, 38, …, what is the coefficient of n² in the explicit rule?", 1, "Second differences 2 ⇒ leading coefficient 1."),
  num("For 3, 11, 25, 45, 71, …, what is the coefficient of n² in the explicit rule?", 3, "Second differences 6."),
  mc("Which recursive formula gives 3, 7, 15, 31, …?", S`\(t_1=3,\ t_n=2t_{n-1}+1\)`, [S`\(t_1=3,\ t_n=t_{n-1}+4\)`, S`\(t_1=3,\ t_n=2t_{n-1}\)`, S`\(t_1=3,\ t_n=3t_{n-1}-2\)`], "7 = 2(3) + 1, 15 = 2(7) + 1."),
  mc(S`Which recursive formula matches \(t_n=3n+4\)?`, S`\(t_1=7,\ t_n=t_{n-1}+3\)`, [S`\(t_1=4,\ t_n=t_{n-1}+3\)`, S`\(t_1=7,\ t_n=3t_{n-1}\)`, S`\(t_1=3,\ t_n=t_{n-1}+4\)`], "t₁ = 7, step 3."),
  ms("Which sequences are neither arithmetic nor geometric? Select all.", ["1, 4, 9, 16", "2, 4, 8, 16", "1, 1, 2, 3, 5", "10, 7, 4, 1", "1, 3, 6, 10"], [0, 2, 4], "Squares, Fibonacci and triangular numbers."),
  tf(S`The sequence \(t_1=5,\ t_n=t_{n-1}\cdot1+0\) is both arithmetic and geometric.`, true, "It is constant: d = 0 and r = 1."),
  num("Toothpick squares in a row: 1 square uses 4, 2 squares use 7, 3 use 10. How many toothpicks for 25 squares?", 76, "tₙ = 3n + 1."),
  num("A pattern of dots has 1, 5, 12, 22, 35, … dots (pentagonal numbers). Find the next term.", 51, "Differences 4, 7, 10, 13, 16."),
  num(S`\(t_1=3\), \(t_n=t_{n-1}^2-t_{n-1}\). Find \(t_4\).`, last(3, (p) => p * p - p, 4), "3, 6, 30, 870."),
  num("How many moves are needed for 8 discs in the disc-moving puzzle?", 255, "2⁸ − 1."),
  num(S`The sequence \(t_n=2^n-1\) satisfies \(t_n=2t_{n-1}+c\). Find c.`, 1, "2(2ⁿ⁻¹ − 1) + c = 2ⁿ − 1 ⇒ c = 1."),
  num("Rectangular numbers 2, 6, 12, 20, … satisfy tₙ = tₙ₋₁ + kn. Find k.", 2, "Differences 4, 6, 8 = 2n."),
  num("The graph shows a quadratic sequence. Find t₈.", 120, "Second differences 4: tₙ = 2n² − n; t₈ = 128 − 8.", dotsD([1, 6, 15, 28, 45], { labels: true })),
  num("The graph shows t₁ = 3, tₙ = tₙ₋₁ + 2n − 1. Find t₁₀ using an explicit rule.", 102, "3, 6, 11, 18, 27: tₙ = n² + 2.", dotsD(rec(3, (p, n) => p + 2 * n - 1, 5), { labels: true })),
];

// 7.6 Geometric Series — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, dotsD, rd } from "./fig.mjs";

const S = String.raw;
const Sg = (a, r, n) => (r === 1 ? a * n : (a * (r ** n - 1)) / (r - 1));
const geo = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i);
const firstN = (a, r, target) => { let n = 1; while (Sg(a, r, n) <= target) n++; return n; };

export const TOPIC = "7.6 Geometric Series";
export const Q = [
  num("How many terms of 2 + 6 + 18 + … are needed for the sum to exceed 50 000?", firstN(2, 3, 50000), "3ⁿ − 1 > 50 000."),
  num("How many terms of 1 + 1.5 + 2.25 + … are needed for the sum to exceed 100?", firstN(1, 1.5, 100), "2(1.5ⁿ − 1) > 100 ⇒ 1.5ⁿ > 51."),
  num(S`A geometric series has \(t_1=5\), \(r>0\) and \(S_3=155\). Find \(r\).`, 5, "1 + r + r² = 31."),
  num(S`A geometric series has \(r=2\) and \(S_8=765\). Find \(a\).`, 3, "a(255) = 765."),
  num(S`A geometric series has \(S_2=12\) and \(S_4=60\) (r > 0). Find \(r\).`, 2, "S₄ − S₂ = r²·S₂ ⇒ 48 = 12r²."),
  num("A bouncing ball dropped from 16 m rebounds to 3/4 of its height. Find the total distance travelled when it hits the ground for the 10th time (2 decimals).", rd(16 + 2 * Sg(12, 0.75, 9), 2), "16 + 2(12 + 9 + … , 9 bounces).", null, 0.01),
  num("A company's profit is 50 000 dollars in year 1 and grows by 8% a year. In which year does the total profit first exceed 1 000 000 dollars?", firstN(50000, 1.08, 1000000), "50 000(1.08ⁿ − 1)/0.08 > 10⁶."),
  num("Each layer of a fractal tree has 3 times as many branches as the one before; layer 1 has 1 branch. How many branches in layers 1 to 8?", Sg(1, 3, 8), "(3⁸ − 1)/2."),
  num(S`Find \(\displaystyle\sum_{k=1}^{6}3\cdot2^{k}\) (the sum of \(3\cdot2^k\) for k = 1 to 6).`, Sg(6, 2, 6), "6 + 12 + … + 192."),
  num(S`Find \(x\) if \(1+x+x^2+x^3=40\) and \(x\) is a positive integer.`, 3, "1 + 3 + 9 + 27."),
  tf("If |r| < 1, the partial sums of a geometric series approach a/(1 − r).", true, "rⁿ → 0."),
  tf(S`The series \(2-2+2-2+\cdots\) has partial sums that approach 1.`, false, "They alternate 2, 0, 2, 0."),
  ms("For 4 + 12 + 36 + …, which are true? Select all.", ["S₅ = 484", "t₆ = 972", "S₆ = 1456", "r = 3", "S₄ = 160"], [0, 1, 2, 3, 4], "All correct: Sₙ = 2(3ⁿ − 1)."),
  mc("A grain of rice on square 1 of a chessboard, 2 on square 2, 4 on square 3, … How many grains on all 64 squares?", S`\(2^{64}-1\)`, [S`\(2^{64}\)`, S`\(2^{63}\)`, S`\(64^2\)`], "1 + 2 + … + 2⁶³."),
  num(S`The sum of an infinite geometric series is 30 and \(a=12\). Find \(r\).`, 0.6, "12/(1 − r) = 30.", null, 0.0001),
  num("A geometric series has t₂ = 12 and t₅ = 96. Find S₆.", Sg(6, 2, 6), "r = 2, a = 6: 6(64 − 1)."),
  num("The bars show deposits that grow by 25% each month. Find the total of 8 months of deposits (2 decimals).", rd(Sg(100, 1.25, 8), 2), "100(1.25⁸ − 1)/0.25.", barsD(geo(100, 1.25, 5), { xlabel: "month", ylabel: "dollars" }), 0.01),
  num("The graph shows the partial sums S₁, S₂, … of a series with |r| < 1. What value do they approach?", 20, "a = 10, r = ½: 10 ÷ ½.", dotsD(Array.from({ length: 7 }, (_, i) => rd(Sg(10, 0.5, i + 1), 3)), { lines: [{ m: 0, b: 20, color: "amber", dash: true }], ylabel: "Sₙ" })),
  num("The bars show an alternating geometric series. Find S₉.", Sg(3, -2, 9), "3((−2)⁹ − 1)/(−3).", barsD(geo(3, -2, 5).map(Math.abs), { ylabel: "|tₙ|" })),
  num("The graph shows Sₙ for a geometric series with a = 1. Find r.", 4, "S₂ = 5 = 1 + r.", dotsD([1, 5, 21, 85], { labels: true, ylabel: "Sₙ" })),
];

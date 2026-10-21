// 1.3 Arithmetic and Geometric Series — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { barsDoc, bounceDoc } from "../figs.mjs";

const S = String.raw;

export const E = [
  num(S`Evaluate $1+2+3+4+5$.`, 15, "Add the terms."),
  num(S`An arithmetic series has $u_1=3$ and $u_{10}=30$. Find $S_{10}$.`, 165, "5(3 + 30)."),
  num(S`Find the sum of the first 4 terms of $1+2+4+8+\dots$`, 15, "1 + 2 + 4 + 8."),
  num(S`Find the sum to infinity of $10+5+2.5+\dots$`, 20, "10/(1 − 0.5)."),
  tf(S`$8+4+2+\dots$ has a sum to infinity.`, true, "r = 0.5 and |r| < 1."),
  tf(S`$1+3+9+\dots$ has a sum to infinity.`, false, "r = 3, so the sums grow without limit."),
  num(S`Find the sum of the first 6 terms of $2+4+6+\dots$`, 42, "3(2 + 12)."),
  mc("A geometric series has a sum to infinity when:", S`$|r|<1$`, [S`$r>1$`, S`$d<0$`, S`$r=1$`], "Only then do the terms shrink to 0."),
  num(S`A geometric series has $u_1=6$ and $r=0.5$. Find $S_\infty$.`, 12, "6/0.5."),
  num(S`Find the sum of the first 3 terms of $5+15+45+\dots$`, 65, "5 + 15 + 45."),
  fill("In the formula for the sum to infinity, the first term is divided by 1 minus the common ___.", ["ratio", "Ratio"], "S∞ = u₁/(1 − r)."),
  num("Find the sum of the first 10 positive integers.", 55, "10(11)/2."),
  num(S`Find the sum of the first 4 terms of $100+50+25+\dots$`, 187.5, "100 + 50 + 25 + 12.5.", null, 1e-9),
  num("The bars show the partial sums S₁ to S₄ of an arithmetic series. Find the 4th term of the series.", 12, "S₄ − S₃ = 30 − 18.", barsDoc([3, 9, 18, 30], { xlab: "n" })),
  num("The bars show partial sums of a geometric series; the dashed line is its sum to infinity. What is the sum to infinity?", 4, "The bars approach 4.", barsDoc([2, 3, 3.5, 3.75], { limit: 4, xlab: "n" })),
  num(S`An arithmetic series has $u_1=1$ and $d=2$. Find $S_8$.`, 64, "4(2 + 14)."),
  mc("Which series diverges?", S`$2+4+8+\dots$`, [S`$9+3+1+\dots$`, S`$1-0.5+0.25-\dots$`, S`$0.9+0.09+0.009+\dots$`], "Its ratio is 2."),
  num(S`A geometric series has $u_1=1$ and $r=-1$. Find $S_5$.`, 1, "1 − 1 + 1 − 1 + 1."),
  num(S`Find the sum to infinity of $1+0.1+0.01+\dots$ (4 d.p.).`, 1.1111, "1/0.9 = 10/9.", null, 0.0001),
  tf("An arithmetic series with d > 0 has no sum to infinity.", true, "Its terms grow, so the sums grow without limit."),
];

export const M = [
  num(S`Find the sum of the first 20 terms of $7+10+13+\dots$`, 710, "u₂₀ = 64; 10(7 + 64)."),
  num(S`Evaluate $3+8+13+\dots+98$.`, 1010, "n = 20; 10(3 + 98)."),
  num(S`Find the sum of the first 6 terms of $4+12+36+\dots$`, 1456, "4(3⁶ − 1)/2."),
  num(S`Find the sum to infinity of $45+15+5+\dots$`, 67.5, "45/(2/3).", null, 1e-9),
  num(S`An arithmetic series has $u_1=-8$ and $d=3$. Find $S_{10}$.`, 55, "5(−16 + 27)."),
  num(S`Find the sum to infinity of $12-6+3-\dots$`, 8, "12/(1 + 0.5)."),
  num(S`A geometric series has $S_\infty=30$ and $r=0.4$. Find $u_1$.`, 18, "30(0.6)."),
  num(S`A geometric series has $u_1=20$ and $S_\infty=50$. Find $r$.`, 0.6, "1 − r = 0.4.", null, 1e-9),
  num(S`The sum of the first $n$ terms of a series is $S_n=n^2+3n$. Find $u_5$.`, 12, "S₅ − S₄ = 40 − 28."),
  mc(S`$0.\overline{7}=0.777\dots$ written as a fraction is:`, S`$\frac79$`, [S`$\frac7{10}$`, S`$\frac{77}{100}$`, S`$\frac7{11}$`], "0.7/(1 − 0.1)."),
  num(S`How many terms of $4+8+12+\dots$ add up to 220?`, 10, "2n(n + 1) = 220."),
  num(S`Find the sum of the first 8 terms of $1-2+4-\dots$`, -85, "(1 − 256)/3."),
  num("Find the sum of the multiples of 5 from 5 to 100.", 1050, "20 terms: 10(5 + 100)."),
  num("The bars show partial sums of a geometric series approaching the dashed line. Find the common ratio.", 0.5, "u₁ = 6, u₂ = 3.", barsDoc([6, 9, 10.5, 11.25], { limit: 12, xlab: "n" }), 1e-9),
  num("A ball is dropped from 5 m and rebounds to 40% of each height (shown). Find the total distance travelled (2 d.p.).", 11.67, "5 + 2(2/0.6).", bounceDoc(5, 0.4, 3), 0.01),
  tf(S`$S_n-S_{n-1}=u_n$.`, true, "Sₙ adds exactly one more term than Sₙ₋₁."),
  num(S`Evaluate $\sum_{k=1}^{5}4\cdot2^{k-1}$.`, 124, "4(2⁵ − 1)."),
  num(S`Evaluate $\sum_{k=1}^{\infty}5(0.2)^{k-1}$.`, 6.25, "5/0.8.", null, 1e-9),
  ms("Which series have a sum to infinity of 10? Select all.", [S`$5+2.5+\dots$`, S`$8+1.6+\dots$`, S`$10+1+0.1+\dots$`, S`$20-20+20-\dots$`], [0, 1], "5/0.5 = 10 and 8/0.8 = 10; the third gives 11.1."),
  num(S`An arithmetic series has $S_n=5n^2$. Find $d$.`, 10, "u₁ = 5, u₂ = 20 − 5 = 15."),
];

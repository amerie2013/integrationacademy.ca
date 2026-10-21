// 1.3 Arithmetic and Geometric Series — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsDoc, bounceDoc } from "../figs.mjs";

const S = String.raw;

export const TOPIC = "1.3 Arithmetic and Geometric Series";
export const Q = [
  num(S`Find the least $n$ for which $2+4+8+\dots$ ($n$ terms) exceeds 500. The bars show the first partial sums.`, 8, "2(2ⁿ − 1) > 500 → 2ⁿ > 251.", barsDoc([2, 6, 14, 30, 62, 126], { xlab: "n" })),
  num(S`How many terms of $5+9+13+\dots$ add up to 434?`, 14, "n(2n + 3) = 434."),
  num(S`A geometric series has $S_\infty=4u_2$. Find $r$.`, 0.5, "u₁/(1 − r) = 4u₁r → 4r² − 4r + 1 = 0.", null, 1e-9),
  mc(S`$0.3\overline{18}=0.31818\dots$ written as a fraction is:`, S`$\frac7{22}$`, [S`$\frac{35}{111}$`, S`$\frac3{11}$`, S`$\frac7{20}$`], "0.3 + 0.018/(1 − 0.01) = 3/10 + 1/55."),
  num(S`A geometric series has $r=3$ and $S_3=26$. Find $u_1$.`, 2, "13u₁ = 26."),
  num("A ball is dropped from 12 m and rebounds to half of each height (shown). Find the total distance travelled.", 36, "12 + 2(6/0.5).", bounceDoc(12, 0.5, 3)),
  num(S`For $3+7+11+\dots$, find $S_{10}-S_9$.`, 39, "This is u₁₀ = 3 + 9(4)."),
  tf("A geometric series with r = −1 converges to 0.", false, "Its partial sums alternate 1, 0, 1, 0, … (for u₁ = 1) and do not settle."),
  num("A salary starts at 30 000 and rises by 1500 each year. Find the total earned in 12 years.", 459000, "6(60000 + 16500)."),
  num("The bars show partial sums of a geometric series. Find its sum to infinity.", 2, "u₁ = 1, r = 0.5.", barsDoc([1, 1.5, 1.75, 1.875], { xlab: "n" })),
  num(S`A geometric series with $r>0$ has $S_\infty=9$ and $S_2=8$. Find $u_1$.`, 6, "9(1 − r²) = 8 → r = 1/3; u₁ = 9(2/3)."),
  num(S`Evaluate $\sum_{k=1}^{10}\left(3k+2^{k-1}\right)$.`, 1188, "165 + 1023."),
  num("An arithmetic series has first term 4, last term 104 and sum 2754. Find d.", 2, "54n = 2754 → n = 51; 50d = 100."),
  ms(S`A series has $S_n=3^n-1$. Which statements are true? Select all.`, ["u₁ = 2", "u₂ = 6", "the series is geometric with r = 3", "it has a sum to infinity"], [0, 1, 2], "uₙ = 2·3ⁿ⁻¹; r = 3 > 1."),
  num(S`Find $x$ if $1+2x+4x^2+\dots$ has sum to infinity 5.`, 0.4, "1/(1 − 2x) = 5.", null, 1e-9),
  num("The bars show the terms of an arithmetic series. Find the sum of all six terms.", 57, "3(2 + 17).", barsDoc([2, 5, 8, 11, 14, 17], { color: "#1d4ed8", xlab: "k" })),
  num(S`A geometric series with $r>0$ has $S_4=10S_2$. Find $r$.`, 3, "(1 − r⁴)/(1 − r²) = 1 + r² = 10."),
  num("Find the sum of the whole numbers from 1 to 100 that are not multiples of 3.", 3367, "5050 − 3(33)(34)/2."),
  tf(S`$\sum_{k=1}^{\infty}0.5^k=1$.`, true, "0.5/(1 − 0.5)."),
  num(S`Find the least $n$ for which $1+1.05+1.05^2+\dots$ ($n$ terms) exceeds 30.`, 19, "(1.05ⁿ − 1)/0.05 > 30 → 1.05ⁿ > 2.5 → n > 18.8."),
];

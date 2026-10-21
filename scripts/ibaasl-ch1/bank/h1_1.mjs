// 1.1 Number Patterns and Sigma Notation — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { seqDoc, barsDoc, dotsDoc } from "../figs.mjs";

const S = String.raw;

export const TOPIC = "1.1 Number Patterns and Sigma Notation";
export const Q = [
  num(S`Find $n$ if $\sum_{k=1}^{n}(2k+3)=192$.`, 12, "n(n + 1) + 3n = n² + 4n = 192 → (n + 16)(n − 12) = 0."),
  num(S`Evaluate $\sum_{k=1}^{30}(5-k)$.`, -315, "150 − 465."),
  num(S`Given $\sum_{k=1}^{40}k=820$, evaluate $\sum_{k=21}^{40}k$.`, 610, "820 − 210."),
  num(S`$u_1=4$ and $u_{n+1}=u_n+2n+1$. The terms are $u_n=n^2+3$ (shown). Find $u_{20}$.`, 403, "400 + 3.", seqDoc([4, 7, 12, 19, 28], { color: "violet", label: "all" })),
  num(S`$u_1=6$ and $u_{n+1}=1.5u_n-2$ (first terms shown). Find $u_5$.`, 14.125, "6, 7, 8.5, 10.75, 14.125.", seqDoc([6, 7, 8.5, 10.75], { color: "blue", label: "all" }), 0.001),
  num(S`Find $n$ if $\sum_{k=1}^{n}2k=420$.`, 20, "n(n + 1) = 420."),
  tf(S`$\sum_{k=1}^{n}k^2=\left(\sum_{k=1}^{n}k\right)^2$ for every $n\ge1$.`, false, "n = 2: 5 ≠ 9."),
  num(S`Evaluate $\sum_{k=1}^{8}k(k+1)$, given $\sum_{k=1}^{8}k^2=204$.`, 240, "Σk² + Σk = 204 + 36."),
  mc(S`$u_{n+1}=0.25u_n+6$. As $n$ grows, the terms approach:`, "8", ["6", "24", "0"], "The limit L satisfies L = 0.25L + 6."),
  num("The rectangular dot patterns continue (n rows of n + 1 dots). How many dots are in pattern 15?", 240, "15 × 16.", dotsDoc([2, 6, 12, 20], "rect")),
  num(S`Evaluate $\sum_{k=1}^{10}(3k-2)$.`, 145, "3(55) − 20."),
  num(S`Evaluate $\sum_{k=1}^{10}k+\sum_{k=11}^{20}k$.`, 210, "Together they make Σ from 1 to 20."),
  num(S`For $u_n=2n^2-5n$, find the first $n$ for which $u_n>100$.`, 9, "u₈ = 88, u₉ = 117."),
  ms("Which of these sums equal 100? Select all.", [S`$\sum_{k=1}^{10}(2k-1)$`, S`$\sum_{k=1}^{4}k^3$`, S`$\sum_{k=1}^{20}5$`, S`$\sum_{k=1}^{10}k^2$`], [0, 1, 2], "Σk² from 1 to 10 is 385."),
  num("The bars show the running totals S₁ to S₆ of a sum. Find the 4th term of the sum.", 7, "S₄ − S₃ = 16 − 9.", barsDoc([1, 4, 9, 16, 25, 36], { color: "#15803d", xlab: "n" })),
  num(S`Find $n$ if $\sum_{k=4}^{n}k=72$.`, 12, "n(n + 1)/2 − 6 = 72 → n(n + 1) = 156."),
  tf(S`If $u_{n+1}-u_n=2n$ for every $n$, the sequence is arithmetic.`, false, "The differences change, so it is not arithmetic."),
  num(S`Evaluate $\sum_{k=1}^{15}(-1)^k$.`, -1, "Seven pairs cancel, leaving one −1."),
  num(S`Find $n>0$ such that $\sum_{k=1}^{n}(k-3)=0$.`, 5, "n(n + 1)/2 − 3n = 0 → n + 1 = 6."),
  num(S`$u_1=1$, $u_2=3$ and $u_{n+2}=2u_{n+1}-u_n+2$. Find $u_6$.`, 31, "1, 3, 7, 13, 21, 31."),
];

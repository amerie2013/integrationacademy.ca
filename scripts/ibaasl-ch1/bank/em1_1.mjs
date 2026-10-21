// 1.1 Number Patterns and Sigma Notation — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { seqDoc, barsDoc, dotsDoc } from "../figs.mjs";

const S = String.raw;

export const E = [
  num(S`For $u_n=4n-1$, find $u_7$.`, 27, "4(7) − 1."),
  num(S`For $u_n=n^2+3$, find $u_5$.`, 28, "25 + 3."),
  num(S`$u_1=2$ and $u_{n+1}=u_n+5$. Find $u_4$.`, 17, "2, 7, 12, 17."),
  num(S`$u_1=1$ and $u_{n+1}=2u_n$. Find $u_6$.`, 32, "1, 2, 4, 8, 16, 32."),
  num(S`Evaluate $\sum_{k=1}^{3}k$.`, 6, "1 + 2 + 3."),
  num(S`Evaluate $\sum_{k=1}^{4}3$.`, 12, "3 is added four times."),
  num(S`How many terms does $\sum_{k=1}^{15}k^2$ have?`, 15, "k = 1 to 15."),
  num(S`How many terms does $\sum_{k=5}^{12}(2k)$ have?`, 8, "12 − 5 + 1."),
  tf(S`$\sum_{k=1}^{3}k^2=14$.`, true, "1 + 4 + 9 = 14."),
  mc(S`Which general term gives $1, 4, 9, 16, \dots$?`, S`$u_n=n^2$`, [S`$u_n=2n$`, S`$u_n=n+3$`, S`$u_n=4n-3$`], "The terms are squares."),
  num(S`For $u_n=10-2n$, find $u_3$.`, 4, "10 − 6."),
  mc("A recursive rule must always be given together with:", "a first term", ["a graph", "the last term", "a sigma sign"], "Without a start value no term can be found."),
  num(S`Evaluate $\sum_{k=2}^{4}(k+1)$.`, 12, "3 + 4 + 5."),
  fill(S`In $\sum_{k=1}^{n}f(k)$, the letter $k$ is called the ___.`, ["index", "Index"], "It runs through the whole numbers from the lower to the upper limit."),
  num("The dot patterns grow as shown. How many dots are in pattern 5?", 15, "1, 3, 6, 10, then 15.", dotsDoc([1, 3, 6, 10], "tri")),
  num("The points show the first four terms of a sequence. Find the fifth term.", 14, "The terms go up by 3: 2, 5, 8, 11, 14.", seqDoc([2, 5, 8, 11], { color: "blue", label: "all" })),
  tf(S`$u_1=1$ and $u_{n+1}=u_n+3$ gives $1, 4, 7, 10, \dots$`, true, "Add 3 each time."),
  num(S`Evaluate $\sum_{k=1}^{5}2k$.`, 30, "2 + 4 + 6 + 8 + 10."),
  mc(S`Which expression equals $1+2+3+\dots+20$?`, S`$\sum_{k=1}^{20}k$`, [S`$\sum_{k=1}^{20}20$`, S`$\sum_{k=1}^{10}2k$`, S`$\sum_{k=0}^{19}2k$`], "The index runs through 1, 2, …, 20."),
  num(S`For $u_n=3^n$, find $u_4$.`, 81, "3⁴."),
];

export const M = [
  num(S`Evaluate $\sum_{k=1}^{6}(2k-1)$.`, 36, "1 + 3 + 5 + 7 + 9 + 11."),
  num(S`Evaluate $\sum_{k=3}^{6}k^2$.`, 86, "9 + 16 + 25 + 36."),
  num(S`$u_1=5$ and $u_{n+1}=2u_n-1$. Find $u_4$.`, 33, "5, 9, 17, 33."),
  num(S`Evaluate $\sum_{k=1}^{50}k$.`, 1275, "50(51)/2."),
  num(S`Evaluate $\sum_{k=1}^{10}(k+4)$.`, 95, "55 + 40."),
  mc(S`Which general term gives $3, 6, 11, 18, 27, \dots$?`, S`$u_n=n^2+2$`, [S`$u_n=n^2+3$`, S`$u_n=3n$`, S`$u_n=2n^2+1$`], "Each term is 2 more than a square."),
  num(S`Evaluate $\sum_{k=0}^{4}2^k$.`, 31, "1 + 2 + 4 + 8 + 16."),
  num(S`Evaluate $\sum_{k=1}^{4}(-1)^k k$.`, 2, "−1 + 2 − 3 + 4."),
  mx(S`Write the general term $u_n$ of $5, 8, 11, 14, \dots$`, "3*n+2", "Up 3 each time, and u₁ = 5 = 3(1) + 2."),
  num(S`How many terms does $\sum_{r=-2}^{8}r^3$ have?`, 11, "8 − (−2) + 1."),
  tf(S`$\sum_{k=1}^{10}3k=3\sum_{k=1}^{10}k$.`, true, "A constant factor can be taken outside the sum."),
  num(S`Evaluate $\sum_{k=1}^{20}4$.`, 80, "4 added 20 times."),
  num(S`$u_1=100$ and $u_{n+1}=\frac{u_n}{2}+10$. Find $u_4$.`, 30, "100, 60, 40, 30."),
  num("The bars show the terms of a sum for k = 1 to 4. Find the value of the sum.", 34, "2 + 5 + 10 + 17.", barsDoc([2, 5, 10, 17], { color: "#1d4ed8", xlab: "k" })),
  num("The square dot patterns continue. How many dots are in pattern 12?", 144, "Pattern n has n² dots.", dotsDoc([1, 4, 9, 16], "sq")),
  ms(S`Which expressions equal $2+4+6+8+10$? Select all.`, [S`$\sum_{k=1}^{5}2k$`, S`$\sum_{k=2}^{6}(2k-2)$`, S`$\sum_{k=1}^{5}(k+1)$`, S`$2\sum_{k=1}^{5}k$`], [0, 1, 3], "Σ(k + 1) from 1 to 5 is 2 + 3 + 4 + 5 + 6 = 20."),
  num(S`Evaluate $\sum_{k=1}^{12}(2k+1)$.`, 168, "2(78) + 12."),
  num(S`For $u_n=n(n+2)$, which term equals 99?`, 9, "9(11) = 99."),
  mc(S`$u_1=1$ and $u_{n+1}=u_n+n$. What is $u_5$?`, "11", ["10", "15", "9"], "1, 2, 4, 7, 11."),
  num(S`Evaluate $\sum_{k=1}^{100}k-\sum_{k=1}^{99}k$.`, 100, "Only the k = 100 term is left."),
];

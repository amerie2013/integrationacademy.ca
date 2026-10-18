// MCR3U chapter 7 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
// Math uses $…$ delimiters like the earlier chapters.
import { dotsD, barsD, pascalD, gridD, prow } from "./bank/fig.mjs";

const T = {
  1: "7.1 Arithmetic Sequences", 2: "7.2 Geometric Sequences", 3: "7.3 Creating Rules for Sequences", 4: "7.4 Sequences Defined by Two Previous Terms",
  5: "7.5 Arithmetic Series", 6: "7.6 Geometric Series", 7: "7.7 Pascal's Triangle and Binomial Expansions",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const arr = (a, d, n) => Array.from({ length: n }, (_, i) => a + i * d);
const geo = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i);
const two = (a, b, n) => { const v = [a, b]; while (v.length < n) v.push(v.at(-1) + v.at(-2)); return v; };

export const WRITTEN = [
  W(1, "medium", 4, S`The graph shows the first terms of a sequence. (a) Explain why it is arithmetic and state $a$ and $d$. (b) Write the general term and a recursive formula. (c) Which term equals $-101$?`,
    S`(a) The values 7, 3, −1, −5, … fall by the same amount each time: $d=-4$, $a=7$. (b) $t_n=11-4n$; $t_1=7$, $t_n=t_{n-1}-4$. (c) $11-4n=-101\Rightarrow n=28$. [1, 2, 1.]`,
    dotsD(arr(7, -4, 6), { labels: true })),
  W(1, "hard", 5, S`An arithmetic sequence has $t_4=17$ and $t_{11}=52$. (a) Find $a$ and $d$. (b) Is 300 a term? Explain. (c) A second arithmetic sequence starts at 100 and decreases by 3. Find the first term number at which the first sequence is larger than the second.`,
    S`(a) $7d=35$: $d=5$, $a=2$; $t_n=5n-3$. (b) $5n-3=300\Rightarrow n=60.6$: no. (c) $5n-3>103-3n\Rightarrow n>13.25$: the 14th term. [2, 1, 2.]`,
    dotsD(arr(2, 5, 12), { labels: false })),
  W(2, "medium", 4, S`A tablet bought for 900 dollars loses 30% of its value each year. (a) Write the value at the start of year $n$ as a geometric sequence. (b) Find its value at the start of year 5. (c) In which year is it first worth less than 100 dollars?`,
    S`(a) $t_n=900(0.7)^{n-1}$. (b) $900(0.7)^4\approx216.09$ dollars. (c) $0.7^{n-1}<\frac19$: $0.7^6\approx0.118$, $0.7^7\approx0.082$, so year 8. [1, 1, 2.]`,
    dotsD(geo(900, 0.7, 8).map((v) => Math.round(v)), { labels: true, xlabel: "year", ylabel: "value" })),
  W(2, "hard", 5, S`A geometric sequence has $t_3=-18$ and $t_6=486$. (a) Find $r$ and $a$. (b) Write the general term. (c) Which term is $-13122$? (d) Explain why the terms alternate in sign.`,
    S`(a) $r^3=-27$: $r=-3$, $a=-2$. (b) $t_n=-2(-3)^{n-1}$. (c) $(-3)^{n-1}=6561=(-3)^8$: $n=9$. (d) Multiplying by a negative ratio changes the sign each step. [2, 1, 1, 1.]`,
    dotsD(geo(-2, -3, 5), { labels: true })),
  W(3, "medium", 4, S`(a) List the first five terms of $t_1=3$, $t_n=2t_{n-1}-1$. (b) Find the first and second differences and classify the sequence. (c) Show that $t_n=2^n+1$ gives the same terms.`,
    S`(a) 3, 5, 9, 17, 33. (b) First differences 2, 4, 8, 16; second differences 2, 4, 8 — neither arithmetic nor geometric. (c) $2^1+1=3$, $2^2+1=5$, $2^3+1=9$, … [1, 2, 1.]`,
    dotsD([3, 5, 9, 17, 33], { labels: true })),
  W(3, "hard", 5, S`Squares are built from toothpicks into larger squares: a 1 × 1 grid uses 4 toothpicks, a 2 × 2 grid uses 12, a 3 × 3 grid uses 24. (a) Find the next two terms. (b) Use second differences to find an explicit rule. (c) Write a recursive rule. (d) How many toothpicks does a 20 × 20 grid need?`,
    S`(a) 40, 60. (b) Differences 8, 12, 16, 20; second differences 4: $t_n=2n^2+2n$. (c) $t_1=4$, $t_n=t_{n-1}+4n$. (d) $2(400)+40=840$. [1, 2, 1, 1.]`,
    dotsD([4, 12, 24, 40, 60], { labels: true, xlabel: "grid size", ylabel: "toothpicks" })),
  W(4, "medium", 4, S`(a) Starting with $t_1=2$, $t_2=1$, use $t_n=t_{n-1}+t_{n-2}$ to list ten terms. (b) Compute $t_{10}\div t_9$ and compare with $\frac{1+\sqrt5}2$. (c) Explain why two starting terms are needed.`,
    S`(a) 2, 1, 3, 4, 7, 11, 18, 29, 47, 76. (b) $\frac{76}{47}\approx1.617$, very close to 1.618. (c) Each term uses the two before it, so $t_1$ and $t_2$ cannot be calculated. [1, 2, 1.]`,
    dotsD(two(2, 1, 10), { labels: true })),
  W(4, "hard", 5, S`A walkway 1 m wide and $n$ m long is covered with 1 m × 1 m and 1 m × 2 m tiles. Let $W_n$ be the number of ways. (a) Find $W_1$, $W_2$, $W_3$ by drawing. (b) Explain why $W_n=W_{n-1}+W_{n-2}$. (c) Find $W_{10}$.`,
    S`(a) 1, 2, 3. (b) The last tile is a square (leaving $n-1$ m) or a long tile (leaving $n-2$ m). (c) 1, 2, 3, 5, 8, 13, 21, 34, 55, 89: $W_{10}=89$. [2, 2, 1.]`,
    dotsD(two(1, 2, 8), { labels: true, xlabel: "length", ylabel: "ways" })),
  W(5, "medium", 4, S`An amphitheatre has 30 rows; the front row has 24 seats and each row has 3 more than the one in front. (a) How many seats are in the last row? (b) How many seats in total? (c) How many rows are needed to seat at least 900 people?`,
    S`(a) $24+29(3)=111$. (b) $15(24+111)=2025$. (c) $\frac n2[48+3(n-1)]\ge900\Rightarrow n^2+15n-600\ge0$: $n\ge18.1$, so 19 rows. [1, 1, 2.]`,
    barsD(arr(24, 3, 10), { xlabel: "row", ylabel: "seats" })),
  W(5, "hard", 5, S`(a) Show, using pairing, that $1+2+\cdots+n=\frac{n(n+1)}2$. (b) Find the sum of all three-digit multiples of 7. (c) The sum of the first $n$ terms of an arithmetic series is $S_n=2n^2+3n$. Find $t_1$, $d$ and $t_{25}$.`,
    S`(a) Write the sum forwards and backwards: $n$ pairs each $n+1$. (b) 105 to 994: 128 terms, $64(105+994)=70336$. (c) $t_1=5$, $t_2=S_2-S_1=9$, $d=4$, $t_{25}=101$. [1, 2, 2.]`,
    barsD(arr(1, 1, 8))),
  W(6, "medium", 4, S`A charity's donations start at 500 dollars in month 1 and grow by 20% each month. (a) Write the donation in month $n$. (b) Find the total donated in the first 12 months. (c) Explain why the formula $S_n=\frac{a(r^n-1)}{r-1}$ works by writing $S$ and $rS$.`,
    S`(a) $500(1.2)^{n-1}$. (b) $\frac{500(1.2^{12}-1)}{0.2}\approx19790.25$ dollars. (c) $rS-S=ar^n-a$ because all middle terms cancel. [1, 2, 1.]`,
    barsD(geo(500, 1.2, 8).map((v) => Math.round(v)), { xlabel: "month", ylabel: "dollars" })),
  W(6, "hard", 5, S`A ball is dropped from 18 m and each bounce reaches $\frac23$ of the previous height. (a) Find the height of the 4th bounce. (b) Find the total distance travelled when the ball hits the ground the 8th time. (c) Explain why the total distance can never exceed 90 m.`,
    S`(a) $18(\frac23)^4\approx3.56$ m. (b) $18+2\cdot\frac{12(1-(2/3)^7)}{1/3}\approx18+2(33.89)=85.79$ m. (c) The up-and-down distances form a series with $r=\frac23$; their total approaches $18+2\cdot\frac{12}{1/3}=90$. [1, 2, 2.]`,
    dotsD(geo(18, 2 / 3, 8).map((v) => Math.round(v * 100) / 100), { labels: false, xlabel: "bounce", ylabel: "height (m)" })),
  W(7, "hard", 5, S`(a) Use Pascal's triangle to expand $(2x-3)^4$. (b) Find the coefficient of $x^3$ in $(x+2)^8$. (c) The grid shows a 4-block by 3-block area. Explain why Pascal's rule counts the shortest routes from A to B, and find the number of routes.`,
    S`(a) $16x^4-96x^3+216x^2-216x+81$. (b) $56\cdot2^5=1792$. (c) Each corner can only be reached from the left or from below, so its count is the sum of those two counts — Pascal's rule. The corner B gets ${prow(7)[3]} routes. [2, 1, 2.]`,
    gridD(4, 3)),
];

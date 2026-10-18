// MCR3U Worksheet 7.2 — Geometric Sequences (teacher edition)
import { dotsT } from "./seqT.mjs";

const S = String.raw;
const geo = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i);

const EXAMPLES = [
  { title: "Is it geometric?", q: "Which are geometric? (a) 2, 10, 50, 250 (b) 3, 6, 9, 12 (c) 400, −200, 100, −50", steps: ["(a) ratio 5; (b) differences, not ratios, are constant; (c) ratio −½."], ans: "(a) and (c)" },
  { title: "General term", q: S`Find $t_n$ and $t_9$ for $5, 10, 20,\ldots$`, steps: [S`$t_n=5(2)^{n-1}$; $t_9=5\cdot256$.`], ans: S`$t_9=1280$` },
  { title: "A fractional ratio", q: S`Find $t_n$ and $t_6$ for $243, 81, 27,\ldots$`, steps: [S`$r=\frac13$: $t_6=243\left(\frac13\right)^5=1$.`], ans: S`$t_n=243\left(\frac13\right)^{n-1}$; $t_6=1$` },
  { title: "Which term?", q: "Which term of 7, 14, 28, … is 3584?", steps: [S`$2^{n-1}=512=2^9$.`], ans: "the 10th" },
  { title: "Alternating signs", q: S`Write the first five terms of $t_n=-2(-3)^{n-1}$.`, steps: ["Multiply by −3 each time."], ans: "−2, 6, −18, 54, −162" },
  { title: "From two terms", q: S`$t_2=-10$ and $t_5=1250$. Find $a$ and $r$.`, steps: [S`$r^3=-125\Rightarrow r=-5$; $a=\frac{-10}{-5}=2$.`], ans: S`$a=2$, $r=-5$` },
  { title: "Recursive form", q: "Write a recursive formula for 6, 4.5, 3.375, …", steps: [S`$r=0.75$.`], ans: S`$t_1=6,\ t_n=0.75\,t_{n-1}$` },
  { title: "Depreciation", q: "A car worth 32 000 dollars loses 15% of its value each year. Write the value at the start of year n and find the value at the start of year 6.",
    fig: dotsT(geo(32000, 0.85, 8), { f: (x) => 32000 * 0.85 ** (x - 1), xlabel: "year", ylabel: "value" }),
    steps: [S`$r=0.85$: $t_n=32000(0.85)^{n-1}$.`, S`$t_6=32000(0.85)^5$.`], ans: S`$\approx${(32000 * 0.85 ** 5).toFixed(2)}$ dollars` },
  { title: "Cell division", q: "A culture starts with 50 cells and doubles every hour. After how many hours does it first exceed 100 000 cells? (Start = hour 0.)", steps: [S`$50\cdot2^h>100000\Rightarrow2^h>2000$; $2^{11}=2048$.`], ans: "11 hours" },
];

const PROBLEMS = [
  { level: 1, q: "Find the common ratio of 9, 36, 144, …", recap: "Ratio.", ans: "4" },
  { level: 1, q: S`Find $t_7$ for $3, 6, 12,\ldots$`, recap: "One term.", ans: "192" },
  { level: 1, q: "Write the next two terms: 1000, 100, 10, …", recap: "Extend.", ans: "1, 0.1" },
  { level: 2, q: S`Find the general term of $-4, 12, -36,\ldots$ and $t_6$.`, recap: "Negative ratio.", ans: S`$t_n=-4(-3)^{n-1}$; $t_6=972$` },
  { level: 2, q: "Which term of 2, 6, 18, … is 13 122?", recap: "Which term.", ans: S`$3^{n-1}=6561=3^8$: the 9th` },
  { level: 2, q: "Graph the first six terms of 64, 32, 16, …", recap: "Graph.", ans: "64, 32, 16, 8, 4, 2", fig: dotsT(geo(64, 0.5, 6)) },
  { level: 2, q: S`$t_1=5$ and $t_n=4t_{n-1}$. Write the explicit formula and find $t_5$.`, recap: "Recursive → explicit.", ans: S`$t_n=5(4)^{n-1}$; 1280` },
  { level: 2, q: S`$t_3=20$ and $t_5=80$ with $r>0$. Find $a$ and $r$.`, recap: "Two terms.", ans: S`$r=2$, $a=5$` },
  { level: 3, space: 4, q: S`$t_4=-24$ and $t_7=192$. Find the general term and which term is 3072.`, recap: "Negative ratio.", ans: S`$r=-2$, $a=3$; $(-2)^{n-1}=1024\Rightarrow n=11$` },
  { level: 3, space: 4, q: S`$k$, $k+4$ and $k+12$ are consecutive terms of a geometric sequence. Find $k$ and the common ratio.`, recap: "Equal ratios.", ans: S`$(k+4)^2=k(k+12)\Rightarrow8k+16=12k\Rightarrow k=4$; 4, 8, 16, $r=2$` },
  { level: 3, space: 4, q: "A ball is dropped from 3 m and each bounce reaches 80% of the previous height. On which bounce is the height first below 1 m?", recap: "Inequality.", ans: S`$2.4(0.8)^{n-1}<1$: $0.8^{n-1}<0.4167$; $n-1=4$: the 5th bounce` },
  { level: 3, space: 5, q: "Insert three numbers between 5 and 405 so that the five numbers form a geometric sequence (two answers).", recap: "Geometric means.", ans: S`$r^4=81\Rightarrow r=\pm3$: 15, 45, 135 or −15, 45, −135` },
  { level: 3, space: 4, q: "Explain how to tell from a graph whether a sequence is arithmetic, geometric or neither.", recap: "Explain.", ans: "points on a line: arithmetic; on an exponential curve (constant ratio): geometric; otherwise neither" },
];

export const WS = {
  code: "7.2",
  title: "Geometric Sequences",
  bigideas: S`A geometric sequence multiplies by a constant ratio $r$: $t_n=ar^{n-1}$, or $t_1=a$, $t_n=r\,t_{n-1}$. Its graph is a set of points on an exponential curve; a negative $r$ makes the signs alternate.`,
  goals: ["Identify geometric sequences.", "Write and use the general term.", "Find a term number.", "Find a and r from two terms; solve problems."],
  curriculum: "C1.4, C3.1, C3.2",
  vocab: [["Common ratio", "$r=\\frac{t_n}{t_{n-1}}$"], ["General term", "$t_n=ar^{n-1}$"], ["Alternating", "$r<0$"]],
  hook: "Fold a sheet of paper in half again and again. How many layers after 1, 2, 3 folds? After 10?",
  concepts: [
    ["1. Ratio test", S`${dotsT(geo(2, 3, 5), { f: (x) => 2 * 3 ** (x - 1), width: 5 })}2, 6, 18, 54, 162: each ratio is 3.`],
    ["2. Solving for n", S`Isolate the power and write both sides with the same base: $2\cdot3^{n-1}=4374\Rightarrow3^{n-1}=2187=3^7$.`],
    ["3. Percent change", "A p% increase gives r = 1 + p/100; a p% decrease gives r = 1 − p/100."],
  ],
  tips: ["Divide, don't subtract.", "Exponent n − 1.", "Bracket negative r.", "Roots may give ±r.", "Check with t₁."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

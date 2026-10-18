// MCR3U Worksheet 7.5 — Arithmetic Series (teacher edition)
import { barsT } from "./seqT.mjs";

const S = String.raw;
const arr = (a, d, n) => Array.from({ length: n }, (_, i) => a + i * d);

const EXAMPLES = [
  { title: "Sum of the first 200 whole numbers", q: "Find 1 + 2 + 3 + … + 200.", steps: [S`100 pairs, each 201.`], ans: "20 100" },
  { title: "Using a, d, n", q: S`Find $S_{25}$ for $3+8+13+\cdots$`, steps: [S`$\frac{25}2[6+24(5)]=12.5(126)$.`], ans: "1575" },
  { title: "Using first and last", q: "An arithmetic series has 40 terms; the first is −12 and the last is 105. Find the sum.", steps: [S`$20(-12+105)$.`], ans: "1860" },
  { title: "Count the terms first", q: "Find 12 + 19 + 26 + … + 397.", steps: [S`$n=\frac{397-12}7+1=56$.`, S`$S=28(12+397)$.`], ans: "11 452" },
  { title: "Decreasing terms", q: "Find 80 + 74 + 68 + … to 20 terms.", steps: [S`$10[160+19(-6)]=10(46)$.`], ans: "460" },
  { title: "Even numbers", q: "Find the sum of the even numbers from 2 to 250.", steps: [S`125 terms: $\frac{125}2(2+250)$.`], ans: "15 750" },
  { title: "Bricks in a wall", q: "A triangular wall has 30 bricks in the bottom row, 28 in the next, and so on to 2 at the top. How many bricks?",
    fig: barsT(arr(30, -2, 15), { xlabel: "row", ylabel: "bricks" }),
    steps: ["15 rows.", S`$\frac{15}2(30+2)$.`], ans: "240 bricks" },
  { title: "Finding n", q: "How many terms of 2 + 6 + 10 + … give 800?", steps: [S`$\frac n2[4+4(n-1)]=2n^2=800\Rightarrow n=20$.`], ans: "20" },
  { title: "Finding d", q: "A 12-term arithmetic series starts at 5 and sums to 390. Find d.", steps: [S`$6[10+11d]=390\Rightarrow11d=55$.`], ans: S`$d=5$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find $S_{12}$ for $1+6+11+\cdots$`, recap: "Sum.", ans: "342" },
  { level: 1, q: "Find 1 + 2 + … + 60.", recap: "Gauss.", ans: "1830" },
  { level: 1, q: "An arithmetic series has 16 terms, first 4 and last 64. Find the sum.", recap: "First/last.", ans: "544" },
  { level: 2, q: "Find 9 + 13 + 17 + … + 201.", recap: "Count first.", ans: S`49 terms: 5145` },
  { level: 2, q: S`Find $S_{30}$ with $a=-20$, $d=3$.`, recap: "Negative start.", ans: "705" },
  { level: 2, q: "Find the sum of the multiples of 5 from 5 to 500.", recap: "Multiples.", ans: "25 250" },
  { level: 2, q: "A stack of cans has 18 cans on the bottom and one fewer in each row up to 1 at the top. How many cans?", recap: "Stack.", ans: "171", fig: barsT(arr(18, -1, 18), { xlabel: "row", ylabel: "cans" }) },
  { level: 2, q: "An auditorium has 22 rows; the first has 15 seats and each row has 3 more than the one before. How many seats?", recap: "Seats.", ans: "1023" },
  { level: 3, space: 4, q: "How many terms of 4 + 7 + 10 + … are needed to exceed 1000?", recap: "Inequality.", ans: S`$\frac n2(3n+5)>1000$: $n=25$ ($S_{25}=1000$ exactly), so 26 terms` },
  { level: 3, space: 4, q: S`The sum of an arithmetic series is $S_n=4n^2-n$. Find $t_1$, $d$ and $t_{15}$.`, recap: "From Sₙ.", ans: S`$t_1=3$, $t_2=11$, $d=8$; $t_{15}=115$` },
  { level: 3, space: 4, q: "Find the sum of all whole numbers between 1 and 300 that are not multiples of 3.", recap: "Complement.", ans: S`all 1–299: 44 850; multiples of 3 (3–297): 14 850; answer 30 000` },
  { level: 3, space: 5, q: "A runner trains 2 km on day 1 and adds 0.5 km each day. On which day does the total distance first reach 100 km?", recap: "Model.", ans: S`$\frac n2[4+0.5(n-1)]\ge100$: $n^2+7n-400\ge0$; $n=17$` },
  { level: 3, space: 4, q: "Explain, using pairing, why the sum of the first n odd numbers is n².", recap: "Explain.", ans: "first + last = 1 + (2n − 1) = 2n; n/2 pairs → n·2n/2 = n²" },
];

export const WS = {
  code: "7.5",
  title: "Arithmetic Series",
  bigideas: S`An arithmetic series is the sum of an arithmetic sequence. Pairing first with last gives $S_n=\frac n2(t_1+t_n)=\frac n2\left[2a+(n-1)d\right]$. Count the terms first: $n=\frac{t_n-a}d+1$.`,
  goals: ["Explain the pairing argument.", "Use both sum formulas.", "Count terms before summing.", "Solve for n or d."],
  curriculum: "C3.3, C3.4",
  vocab: [["Series", "sum of terms"], ["$S_n$", "sum of the first n terms"], ["Pairing", "first + last = constant"]],
  hook: "Ask the class to add 1 + 2 + … + 100 in one minute without a calculator. Share strategies.",
  concepts: [
    ["1. Pairing", S`${barsT(arr(3, 2, 8), { width: 5 })}$3+5+\cdots+17$: pairs total 20, four pairs: 80.`],
    ["2. Formulas", S`$S_n=\frac n2(a+t_n)$ or $S_n=\frac n2[2a+(n-1)d]$.`],
    ["3. Working backwards", S`$t_n=S_n-S_{n-1}$; solving $S_n=$ total gives a quadratic in n.`],
  ],
  tips: ["n is a count, not a term.", "Count terms first.", "Reject non-whole n.", "Units in problems.", "Check with a small case."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

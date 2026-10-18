// MCR3U Worksheet 7.1 — Arithmetic Sequences (teacher edition)
import { dotsT } from "./seqT.mjs";

const S = String.raw;
const arr = (a, d, n) => Array.from({ length: n }, (_, i) => a + i * d);

const EXAMPLES = [
  { title: "Is it arithmetic?", q: "Which are arithmetic? (a) 9, 13, 17, 21 (b) 2, 4, 8, 16 (c) 15, 9, 3, −3", steps: ["(a) differences 4; (b) differences 2, 4, 8; (c) differences −6."], ans: "(a) and (c)" },
  { title: "General term", q: S`Find $t_n$ for $11, 18, 25,\ldots$ and $t_{30}$.`, steps: [S`$a=11$, $d=7$: $t_n=11+7(n-1)=7n+4$.`, S`$t_{30}=214$.`], ans: S`$t_n=7n+4$; $t_{30}=214$` },
  { title: "A decreasing sequence", q: S`Find $t_n$ for $50, 41, 32,\ldots$`, steps: [S`$d=-9$: $t_n=50-9(n-1)=59-9n$.`], ans: S`$t_n=59-9n$` },
  { title: "Which term?", q: "Which term of −4, 2, 8, … is 212?", steps: [S`$t_n=6n-10=212\Rightarrow n=37$.`], ans: "the 37th" },
  { title: "Not a term", q: "Is 100 a term of 3, 10, 17, …?", steps: [S`$7n-4=100\Rightarrow n=\frac{104}7$, not a whole number.`], ans: "no" },
  { title: "From two terms", q: S`$t_3=14$ and $t_{10}=49$. Find $t_n$.`,
    fig: dotsT(arr(4, 5, 10), { f: (x) => 5 * x - 1, labels: false }),
    steps: [S`$7d=35\Rightarrow d=5$; $a=14-10=4$.`], ans: S`$t_n=5n-1$` },
  { title: "Recursive form", q: "Write a recursive formula for 6, 1, −4, −9, …", steps: [S`$t_1=6$, subtract 5 each time.`], ans: S`$t_1=6,\ t_n=t_{n-1}-5$` },
  { title: "Function notation", q: S`Graph $f(n)=3n-2$ for $n=1$ to 6 and explain why the points are not joined.`,
    fig: dotsT(arr(1, 3, 6), { f: (x) => 3 * x - 2, labels: true }),
    steps: ["The domain is whole numbers only: the function is discrete."], ans: "1, 4, 7, 10, 13, 16 (separate points)" },
  { title: "A savings plan", q: "Maya has 75 dollars and saves 12 dollars each week. How much does she have after week 20, counting week 1 as 87 dollars?", steps: [S`$t_n=75+12n$; $t_{20}=75+240$.`], ans: "315 dollars" },
];

const PROBLEMS = [
  { level: 1, q: "Find the common difference of 13, 21, 29, …", recap: "Difference.", ans: "8" },
  { level: 1, q: S`Find $t_{12}$ for $4, 11, 18,\ldots$`, recap: "One term.", ans: "81" },
  { level: 1, q: "Write the next three terms: 2.5, 4, 5.5, …", recap: "Extend.", ans: "7, 8.5, 10" },
  { level: 2, q: S`Find the general term of $-7,-3,1,\ldots$ and $t_{40}$.`, recap: "General term.", ans: S`$t_n=4n-11$; $t_{40}=149$` },
  { level: 2, q: "Which term of 120, 113, 106, … is 1?", recap: "Which term.", ans: S`$127-7n=1\Rightarrow n=18$` },
  { level: 2, q: S`Graph the first six terms of $t_n=10-2n$.`, recap: "Graph.", ans: "8, 6, 4, 2, 0, −2", fig: dotsT(arr(8, -2, 6)) },
  { level: 2, q: S`$t_1=-2$ and $t_n=t_{n-1}+6$. Write the explicit formula.`, recap: "Recursive → explicit.", ans: S`$t_n=6n-8$` },
  { level: 2, q: S`$t_5=17$ and $t_9=33$. Find $a$ and $d$.`, recap: "Two terms.", ans: S`$d=4$, $a=1$` },
  { level: 3, space: 4, q: S`$t_6=-1$ and $t_{15}=-37$. Find the general term and the last positive term.`, recap: "Sign change.", ans: S`$d=-4$, $a=19$, $t_n=23-4n$; last positive $t_5=3$` },
  { level: 3, space: 4, q: S`$3k+1$, $5k$ and $8k-3$ are consecutive terms of an arithmetic sequence. Find $k$ and the three terms.`, recap: "Middle = average.", ans: S`$10k=11k-2\Rightarrow k=2$: 7, 10, 13` },
  { level: 3, space: 4, q: "How many two-digit numbers leave a remainder of 3 when divided by 7?", recap: "Count terms.", ans: S`10, 17, …, 94: $\frac{94-10}7+1=13$` },
  { level: 3, space: 5, q: "A ski hill pass costs 35 dollars a day, plus a one-time card fee. After 4 days the total is 165 dollars. Write the total cost as a sequence, find the card fee, and find the day the total first exceeds 500 dollars.", recap: "Model.", ans: S`$t_n=25+35n$: fee 25 dollars; $35n>475\Rightarrow n=14$` },
  { level: 3, space: 4, q: "Explain why the graph of an arithmetic sequence is a set of points on a line, and what the slope and the y-intercept of that line represent.", recap: "Explain.", ans: "slope = d; the line at n = 0 gives a − d (the term before the first)" },
];

export const WS = {
  code: "7.1",
  title: "Arithmetic Sequences",
  bigideas: S`An arithmetic sequence adds a constant difference $d$: $t_n=a+(n-1)d$, or recursively $t_1=a$, $t_n=t_{n-1}+d$. Its graph is a set of discrete points on a line of slope $d$.`,
  goals: ["Identify arithmetic sequences.", "Write and use the general term.", "Convert between recursive and explicit forms.", "Find a term number; find a and d from two terms."],
  curriculum: "C1.1, C1.3, C1.4, C3.1, C3.2",
  vocab: [["Sequence", "ordered list of terms $t_1,t_2,\\ldots$"], ["Common difference", "$d=t_n-t_{n-1}$"], ["Discrete function", "domain $\\{1,2,3,\\ldots\\}$"]],
  hook: "Stack paper cups: one cup is 12 cm tall and each extra cup adds 2 cm. How tall is a stack of 20 cups? Of 50?",
  concepts: [
    ["1. Four representations", S`${dotsT(arr(2, 3, 6), { f: (x) => 3 * x - 1, width: 5 })}List 2, 5, 8, …; $t_n=3n-1$; $t_1=2$, $t_n=t_{n-1}+3$; $f(n)=3n-1$.`],
    ["2. Which term?", S`Set $t_n$ equal to the value and solve for $n$; $n$ must be a positive whole number.`],
    ["3. Two terms", S`$d=\frac{t_q-t_p}{q-p}$, then work back to $a$.`],
  ],
  tips: ["d can be negative or a decimal.", "Use (n − 1).", "Check the answer with t₁.", "Don't join the dots.", "Count terms carefully."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

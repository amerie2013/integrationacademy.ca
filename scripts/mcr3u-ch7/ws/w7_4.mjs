// MCR3U Worksheet 7.4 — Sequences Defined by Two Previous Terms (teacher edition)
import { dotsT } from "./seqT.mjs";

const S = String.raw;
const two = (a, b, n, g = (p, q) => p + q) => { const v = [a, b]; for (let i = 2; i < n; i++) v.push(g(v[i - 1], v[i - 2])); return v; };
const F = two(1, 1, 15);

const EXAMPLES = [
  { title: "Fibonacci terms", q: "List the first 12 Fibonacci numbers.", steps: ["Add the previous two each time."], ans: F.slice(0, 12).join(", ") },
  { title: "Other starting terms", q: S`$t_1=1$, $t_2=4$, $t_n=t_{n-1}+t_{n-2}$. List seven terms.`, steps: ["1, 4, 5, 9, 14, 23, 37."], ans: "1, 4, 5, 9, 14, 23, 37" },
  { title: "Ratios", q: "For the sequence in Example 2, compute t₇ ÷ t₆ and compare with 1.618.", steps: [S`$\frac{37}{23}\approx1.6087$.`], ans: "≈ 1.609 — close to φ" },
  { title: "Working backwards", q: S`$t_n=t_{n-1}+t_{n-2}$, $t_6=26$, $t_7=42$. Find $t_1$ to $t_5$.`, steps: [S`$t_5=42-26=16$, $t_4=10$, $t_3=6$, $t_2=4$, $t_1=2$.`], ans: "2, 4, 6, 10, 16" },
  { title: "A subtraction rule", q: S`$t_1=5$, $t_2=2$, $t_n=t_{n-1}-t_{n-2}$. List eight terms and describe the pattern.`, steps: ["5, 2, −3, −5, −2, 3, 5, 2, …"], ans: "it repeats every 6 terms" },
  { title: "Doubling the earlier term", q: S`$t_1=t_2=1$, $t_n=t_{n-1}+2t_{n-2}$. List seven terms.`, steps: ["1, 1, 3, 5, 11, 21, 43."], ans: "1, 1, 3, 5, 11, 21, 43" },
  { title: "Ratios approach φ", q: S`Plot the ratios $t_n\div t_{n-1}$ of the Fibonacci sequence for $n=2$ to 10.`,
    fig: dotsT(F.slice(1, 10).map((v, i) => Math.round((v / F[i]) * 1000) / 1000), { start: 2, lines: [{ m: 0, b: 1.618, color: "amber", dash: true }], ylabel: "ratio" }),
    steps: ["1, 2, 1.5, 1.667, 1.6, 1.625, 1.615, 1.619, 1.618."], ans: "they approach 1.618" },
  { title: "Tiling a path", q: "A 2-unit-wide path of length n is tiled with 1 × 2 tiles. Let $W_n$ be the number of tilings. Explain why $W_n=W_{n-1}+W_{n-2}$ and find $W_8$.", steps: [S`The last tile is either upright ($W_{n-1}$ ways for the rest) or two flat tiles ($W_{n-2}$ ways).`, S`$W_1=1$, $W_2=2$: 1, 2, 3, 5, 8, 13, 21, 34.`], ans: "34" },
  { title: "An identity", q: S`Check that $t_{n+1}t_{n-1}-t_n^2=\pm1$ for Fibonacci numbers with $n=5$ and $n=6$.`, steps: [S`$n=5$: $8\cdot3-25=-1$. $n=6$: $13\cdot5-64=1$.`], ans: "−1 and +1 (they alternate)" },
];

const PROBLEMS = [
  { level: 1, q: "Find the 15th Fibonacci number.", recap: "Fibonacci.", ans: String(F[14]) },
  { level: 1, q: S`$t_1=2$, $t_2=5$, $t_n=t_{n-1}+t_{n-2}$. Find $t_6$.`, recap: "Terms.", ans: "2, 5, 7, 12, 19, 31 → 31" },
  { level: 1, q: S`How many starting terms does a rule using $t_{n-1}$ and $t_{n-2}$ need? Why?`, recap: "Starting terms.", ans: "2 — t₃ needs both t₁ and t₂" },
  { level: 2, q: S`$t_5=11$ and $t_6=18$ for $t_n=t_{n-1}+t_{n-2}$. Find $t_1$ and $t_2$.`, recap: "Backwards.", ans: S`$t_4=7$, $t_3=4$, $t_2=3$, $t_1=1$` },
  { level: 2, q: S`$t_1=3$, $t_2=1$, $t_n=t_{n-1}+t_{n-2}$. Compute $t_8\div t_7$.`, recap: "Ratio.", ans: "3, 1, 4, 5, 9, 14, 23, 37: 37/23 ≈ 1.609" },
  { level: 2, q: S`$t_1=1$, $t_2=2$, $t_n=2t_{n-1}+t_{n-2}$. Find $t_6$.`, recap: "Other rule.", ans: "1, 2, 5, 12, 29, 70 → 70" },
  { level: 2, q: "Graph the first 8 terms of the Fibonacci sequence and describe the shape.", recap: "Graph.", ans: "grows faster and faster, close to exponential", fig: dotsT(F.slice(0, 8)) },
  { level: 2, q: "Find the sum of the first 8 Fibonacci numbers and compare it with t₁₀.", recap: "Sum pattern.", ans: "54 = 55 − 1" },
  { level: 3, space: 4, q: S`A Fibonacci-type sequence has $t_3=10$ and $t_6=42$. Find $t_4$ and $t_5$.`, recap: "Two unknowns.", ans: S`$t_5=t_4+10$, $t_6=2t_4+10=42$: $t_4=16$, $t_5=26$` },
  { level: 3, space: 4, q: "In how many ways can you climb 10 stairs taking 1 or 2 steps at a time?", recap: "Counting.", ans: "89" },
  { level: 3, space: 5, q: S`For $t_n=t_{n-1}+t_{n-2}$ with any positive starting terms, assume the ratio approaches $x$. Show that $x^2=x+1$ and solve for $x$.`, recap: "Limit of ratios.", ans: S`$\frac{t_n}{t_{n-1}}=1+\frac{t_{n-2}}{t_{n-1}}\Rightarrow x=1+\frac1x$; $x=\frac{1+\sqrt5}2$` },
  { level: 3, space: 4, q: S`$t_1=2$, $t_2=6$, $t_n=t_{n-1}-t_{n-2}$. Find $t_{100}$.`, recap: "Periodic.", ans: S`2, 6, 4, −2, −6, −4, 2, …: period 6; $100=16\cdot6+4$: $t_{100}=-2$` },
  { level: 3, space: 4, q: "Explain how the stair-climbing problem leads to a rule using the two previous terms.", recap: "Explain.", ans: "split by the first move: a 1-step leaves n − 1 stairs, a 2-step leaves n − 2" },
];

export const WS = {
  code: "7.4",
  title: "Sequences Defined by Two Previous Terms",
  bigideas: S`A rule such as $t_n=t_{n-1}+t_{n-2}$ needs two starting terms. With $t_1=t_2=1$ it gives the Fibonacci sequence; for any positive start, the ratio $\frac{t_n}{t_{n-1}}$ approaches the golden ratio $\varphi=\frac{1+\sqrt5}2\approx1.618$.`,
  goals: ["Generate two-term recursive sequences.", "Work backwards.", "Investigate ratios.", "Model counting problems."],
  curriculum: "C1.5",
  vocab: [["Fibonacci", "1, 1, 2, 3, 5, 8, …"], ["Golden ratio", "$\\varphi=\\frac{1+\\sqrt5}2$"], ["Initial conditions", "$t_1$ and $t_2$"]],
  hook: "Count the spirals on a pine cone or sunflower picture in each direction. Which numbers appear?",
  concepts: [
    ["1. The rule", S`${dotsT(F.slice(0, 9), { width: 5 })}Each term is the sum of the two before it.`],
    ["2. Ratios", "21/13 ≈ 1.615, 34/21 ≈ 1.619: the ratios zig-zag toward 1.618."],
    ["3. Counting", "Split by the first (or last) move to get a rule using the two previous counts."],
  ],
  tips: ["Two starting terms.", "Work backwards by subtracting.", "Keep a neat table.", "Watch signs in subtraction rules.", "Check ratios with a calculator."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

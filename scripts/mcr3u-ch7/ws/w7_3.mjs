// MCR3U Worksheet 7.3 — Creating Rules for Sequences (teacher edition)
import { dotsT } from "./seqT.mjs";

const S = String.raw;
const rec = (t1, g, n) => { const v = [t1]; for (let i = 1; i < n; i++) v.push(g(v[i - 1], i + 1)); return v; };

const EXAMPLES = [
  { title: "Terms from a rule", q: S`List five terms: $t_1=10$, $t_n=t_{n-1}-2n$.`, steps: [S`$t_2=10-4=6$, $t_3=6-6=0$, $t_4=0-8=-8$, $t_5=-8-10=-18$.`], ans: "10, 6, 0, −8, −18" },
  { title: "A multiply-and-add rule", q: S`List four terms: $t_1=3$, $t_n=2t_{n-1}-1$.`, steps: ["3, 5, 9, 17."], ans: "3, 5, 9, 17" },
  { title: "Find the recursive rule", q: "Write a recursive formula for 2, 7, 22, 67, …", steps: [S`$7=3(2)+1$, $22=3(7)+1$.`], ans: S`$t_1=2,\ t_n=3t_{n-1}+1$` },
  { title: "Second differences", q: "Classify 4, 7, 12, 19, 28, … and find an explicit rule.", steps: ["First differences 3, 5, 7, 9; second differences 2: quadratic, leading coefficient 1.", S`$t_n-n^2=3,3,3,\ldots$`], ans: S`$t_n=n^2+3$` },
  { title: "A quadratic with all three coefficients", q: "Find an explicit rule for 1, 7, 17, 31, 49, …",
    fig: dotsT([1, 7, 17, 31, 49], { f: (x) => 2 * x * x - 1, labels: true }),
    steps: ["Second differences 4: leading coefficient 2.", S`$t_n-2n^2=-1,-1,-1,\ldots$`], ans: S`$t_n=2n^2-1$` },
  { title: "Explicit to recursive", q: S`Write a recursive formula for $t_n=5n+2$.`, steps: [S`$t_1=7$, and each term is 5 more.`], ans: S`$t_1=7,\ t_n=t_{n-1}+5$` },
  { title: "Rectangular numbers", q: "Dots form rectangles 1 × 2, 2 × 3, 3 × 4, … Write explicit and recursive rules for the number of dots.", steps: [S`$t_n=n(n+1)$: 2, 6, 12, 20.`, S`Each new rectangle adds $2n$ dots: $t_n=t_{n-1}+2n$.`], ans: S`$t_n=n(n+1)$; $t_1=2$, $t_n=t_{n-1}+2n$` },
  { title: "Neither", q: "Is 1, 2, 4, 7, 11, 16, … arithmetic, geometric or neither? Give a recursive rule.", steps: ["Differences 1, 2, 3, 4, 5: neither.", S`$t_1=1$, $t_n=t_{n-1}+(n-1)$.`], ans: "neither" },
  { title: "Disc puzzle with 3 pegs", q: S`Use $M_1=1$, $M_n=2M_{n-1}+1$ to fill a table to $n=6$ and check that $M_n=2^n-1$.`,
    fig: dotsT(rec(1, (p) => 2 * p + 1, 6), { labels: true, xlabel: "discs", ylabel: "moves" }),
    steps: ["1, 3, 7, 15, 31, 63 — each is one less than 2, 4, 8, 16, 32, 64."], ans: "M₆ = 63" },
];

const PROBLEMS = [
  { level: 1, q: S`$t_1=4$, $t_n=t_{n-1}+7$. Find $t_5$.`, recap: "Recursive.", ans: "32" },
  { level: 1, q: S`$t_1=2$, $t_n=5t_{n-1}$. Find $t_4$.`, recap: "Recursive.", ans: "250" },
  { level: 1, q: S`For $f(n)=n^2+n$, find $f(1)$ to $f(4)$.`, recap: "Function notation.", ans: "2, 6, 12, 20" },
  { level: 2, q: "Write a recursive formula for 5, 14, 41, 122, …", recap: "Find the rule.", ans: S`$t_1=5,\ t_n=3t_{n-1}-1$` },
  { level: 2, q: "Classify 3, 6, 11, 18, 27, … and find an explicit rule.", recap: "Differences.", ans: S`quadratic: $t_n=n^2+2$` },
  { level: 2, q: S`$t_1=1$, $t_n=t_{n-1}+3n$. Find $t_5$.`, recap: "Changing step.", ans: "1, 7, 16, 28, 43 → 43" },
  { level: 2, q: S`Write a recursive formula for $t_n=40-6n$.`, recap: "Explicit → recursive.", ans: S`$t_1=34,\ t_n=t_{n-1}-6$` },
  { level: 2, q: S`Graph the first five terms of $t_1=2$, $t_n=(t_{n-1})^2-2$ and describe what happens.`, recap: "Graph.", ans: "2, 2, 2, 2, 2 — constant", fig: dotsT([2, 2, 2, 2, 2]) },
  { level: 3, space: 4, q: "Find an explicit rule for 0, 3, 8, 15, 24, … and the 30th term.", recap: "Quadratic rule.", ans: S`$t_n=n^2-1$; 899` },
  { level: 3, space: 5, q: "Find an explicit rule for 5, 11, 21, 35, 53, …", recap: "All coefficients.", ans: S`second differences 4: $2n^2+bn+c$; $t_n-2n^2=3,3,3$: $t_n=2n^2+3$` },
  { level: 3, space: 4, q: "Toothpicks make a row of squares: 1 square uses 4, 2 squares use 7, 3 squares use 10. Write recursive and explicit rules and find how many squares 400 toothpicks make.", recap: "Pattern model.", ans: S`$t_1=4,\ t_n=t_{n-1}+3$; $t_n=3n+1$; $n=133$ (uses 400)` },
  { level: 3, space: 4, q: S`$t_1=1$, $t_n=t_{n-1}+2n-1$. List five terms, make a conjecture for an explicit rule, and test it on $t_6$.`, recap: "Conjecture.", ans: S`1, 4, 9, 16, 25: $t_n=n^2$; $t_6=25+11=36$ ✓` },
  { level: 3, space: 4, q: "Explain why a recursive formula alone (without a first term) does not define a sequence. Give an example.", recap: "Explain.", ans: S`$t_n=t_{n-1}+2$ gives 1, 3, 5, … or 4, 6, 8, … — the start is needed` },
];

export const WS = {
  code: "7.3",
  title: "Creating Rules for Sequences",
  bigideas: S`A recursive rule gives the first term and how to build each term from the previous one; an explicit rule gives $t_n$ from $n$. Constant first differences → linear; constant second differences → quadratic; constant ratios → geometric.`,
  goals: ["Generate terms from recursive rules.", "Write recursive rules.", "Use differences to classify.", "Find explicit quadratic rules."],
  curriculum: "C1.2, C1.4, C3.1",
  vocab: [["Recursive", "start + rule"], ["Explicit", "formula in n"], ["Second differences", "differences of differences"]],
  hook: "Show the disc-moving puzzle with 3 discs. How many moves did it take? Predict 4 discs before trying.",
  concepts: [
    ["1. Recursive rules", S`${dotsT(rec(1, (p) => 2 * p + 1, 6), { width: 5 })}$t_1=1$, $t_n=2t_{n-1}+1$: 1, 3, 7, 15, 31, 63.`],
    ["2. Differences", "First constant: linear. Second constant (= 2a): quadratic an² + bn + c."],
    ["3. Finding b and c", S`Subtract $an^2$ from the terms; what remains is linear (or constant).`],
  ],
  tips: ["Always state t₁.", "Check differences carefully.", "Test rules on extra terms.", "Recursive is slow for far terms.", "Explicit rules jump directly."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

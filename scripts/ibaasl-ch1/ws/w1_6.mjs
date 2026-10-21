// IB AA SL Worksheet 1.6 — Proof (teacher edition)
import { F, pt, svgT } from "./figT.mjs";
import { dotsDoc } from "../figs.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "A two-variable identity", q: S`Prove that $(a+b)^2-(a-b)^2\equiv4ab$.`,
    steps: [S`LHS $=(a^2+2ab+b^2)-(a^2-2ab+b^2)$.`, S`$=4ab=$ RHS.`], ans: S`LHS $equiv$ RHS` },
  { title: "A cubic identity", q: S`Prove that $(x-1)(x^2+x+1)\equiv x^3-1$.`,
    steps: [S`LHS $=x^3+x^2+x-x^2-x-1$.`, S`$=x^3-1=$ RHS.`], ans: S`LHS $equiv$ RHS` },
  { title: "A counterexample", q: S`Disprove: "$n^2-n$ is positive for every positive integer $n$".`,
    steps: [S`$n=1$: $1-1=0$, which is not positive.`], ans: S`counterexample $n=1$` },
  { title: "Even times any integer", q: "Prove that an even number multiplied by any integer is even.",
    steps: [S`Let the even number be $2m$ and the integer $n$.`, S`Product $=2mn=2(mn)$, a multiple of 2.`], ans: "2(mn) is even" },
  { title: "Two consecutive integers", q: "Prove that the sum of two consecutive integers is odd.",
    steps: [S`$n+(n+1)=2n+1$, which is odd.`], ans: S`$2n+1$` },
  { title: "Squares of odd numbers", q: "Prove that the square of an odd number is odd.",
    steps: [S`$(2n+1)^2=4n^2+4n+1=2(2n^2+2n)+1$.`, S`This is one more than an even number, so it is odd.`], ans: S`$2(2n^2+2n)+1$` },
  { title: "Consecutive integers, product", q: "Prove that the product of two consecutive integers is even.",
    steps: [S`One of $n$ and $n+1$ is even.`, S`If $n=2k$: $n(n+1)=2k(2k+1)$. If $n=2k+1$: $n(n+1)=(2k+1)(2k+2)=2(2k+1)(k+1)$. Even either way.`], ans: "even in both cases" },
  { title: "Five consecutive integers", q: "Prove that the sum of any five consecutive integers is divisible by 5.",
    fig: svgT(dotsDoc([5, 10, 15, 20], "line"), 6),
    steps: [S`$(n-2)+(n-1)+n+(n+1)+(n+2)=5n$.`], ans: S`$5n$` },
  { title: "An identity with a restriction", q: S`Prove that $\frac{x^2-4}{x-2}\equiv x+2$ and state the restriction.`,
    fig: F({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x + 2 }], points: [{ ...pt(2, 4, false, "red"), open: true }] }),
    steps: [S`$\frac{(x-2)(x+2)}{x-2}=x+2$, cancelling $x-2$.`, S`Cancelling is only allowed when $x-2\ne0$.`], ans: S`true for $x\ne2$ (open circle on the graph)` },
];

const PROBLEMS = [
  { level: 1, q: S`Prove that $(x+4)^2-8x\equiv x^2+16$.`, recap: "Identity.", ans: S`$x^2+8x+16-8x$` },
  { level: 1, q: "Give a counterexample to: 'the square of any number is greater than the number'.", recap: "Counterexample.", ans: S`e.g. $0.5^2=0.25<0.5$` },
  { level: 1, q: "Write three consecutive even numbers algebraically.", recap: "Notation.", ans: S`$2n$, $2n+2$, $2n+4$` },
  { level: 2, q: "Prove that the sum of two even numbers is even.", recap: "Even + even.", ans: S`$2m+2n=2(m+n)$` },
  { level: 2, q: S`Prove that $(2x+1)^2-(2x-1)^2\equiv8x$.`, recap: "Identity.", ans: S`$4x^2+4x+1-(4x^2-4x+1)$` },
  { level: 2, q: "Prove that the product of two odd numbers is odd.", recap: "Odd × odd.", ans: S`$(2m+1)(2n+1)=2(2mn+m+n)+1$` },
  { level: 2, q: "Prove that the sum of four consecutive integers is even but never a multiple of 4.", recap: "Four consecutive.", ans: S`$4n+6=2(2n+3)$; $4n+6=4(n+1)+2$` },
  { level: 2, q: "Find a counterexample to: 'if n squared is divisible by 4, then n is divisible by 4'.", recap: "Counterexample.", ans: S`$n=2$` },
  { level: 3, space: 4, q: S`Prove that $(n+1)^2-(n-1)^2$ is a multiple of 4 for every integer $n$.`, recap: "Multiple of 4.", ans: S`$4n$` },
  { level: 3, space: 5, q: S`Prove that $n^2+n$ is even for every integer $n$.`, recap: "Always even.", ans: S`$n(n+1)$: one factor is even` },
  { level: 3, space: 5, q: "Use the arithmetic series formula to prove that the sum of the first n even numbers is n(n + 1).", recap: "Series proof.", ans: S`$\frac n2(2+2n)=n(n+1)$`,
    fig: svgT(dotsDoc([2, 6, 12, 20], "rect"), 6) },
  { level: 3, space: 4, q: S`Prove that $\frac{x^2+5x+6}{x+3}\equiv x+2$ and state the restriction on $x$.`, recap: "Identity with restriction.", ans: S`$\frac{(x+2)(x+3)}{x+3}$; $x\ne-3$` },
  { level: 3, space: 4, q: S`Disprove: '$2^n+1$ is prime for every positive integer $n$'.`, recap: "Counterexample.", ans: S`$n=3$: $9=3\times3$` },
];

export const WS = {
  code: "1.6",
  title: "Proof",
  bigideas: S`An identity ($\equiv$) is true for every value; an equation only for some. Prove an identity by transforming one side into the other. Represent even numbers as $2n$, odd numbers as $2n+1$ and consecutive integers as $n, n+1, n+2$. Examples never prove a general statement, but one counterexample disproves it.`,
  goals: ["Distinguish equations and identities.", "Prove identities LHS to RHS.", "Write proofs about integers.", "Disprove with a counterexample."],
  curriculum: "SL 1.6",
  vocab: [["Identity", S`$\equiv$, true for all values`], ["Counterexample", "one case where a statement fails"], ["Odd number", "$2n+1$, $n$ an integer"]],
  hook: "Write n squared + n + 41 on the board and let students test n = 1 to 10 (all prime). Ask whether it is always prime before revealing n = 40.",
  concepts: [
    ["1. Equation or identity?", S`$x^2=9$ holds only for $x=\pm3$; $(x+3)(x-3)\equiv x^2-9$ holds for every $x$. Both sides of an identity have the same graph.`],
    ["2. Algebra for integers", S`Even $2n$, odd $2n+1$, consecutive $n$, $n+1$; use different letters for unrelated numbers. ${svgT(dotsDoc([1, 4, 9, 16], "sq"), 5.5)} The odd numbers 1, 3, 5, 7 build squares.`],
    ["3. Disproof", S`A single case that fails is a complete disproof. Look first at small values, zero, fractions and negatives.`],
  ],
  tips: ["Start from the more complicated side.", "Different letters for unrelated numbers.", "End with a sentence.", "State restrictions after cancelling.", "One counterexample is enough."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

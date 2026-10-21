// IB AA SL Worksheet 1.5 — The Binomial Theorem (teacher edition)
import { svgT } from "./figT.mjs";
import { pascalDoc, barsDoc } from "../figs.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Row 5", q: S`Expand $(x+1)^5$.`,
    fig: svgT(pascalDoc(5, [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5]]), 5.5),
    steps: [S`Row 5: $1, 5, 10, 10, 5, 1$.`], ans: S`$x^5+5x^4+10x^3+10x^2+5x+1$` },
  { title: "A coefficient on x", q: S`Expand $(2x+1)^3$.`,
    steps: [S`$(2x)^3+3(2x)^2(1)+3(2x)(1)^2+1^3$.`], ans: S`$8x^3+12x^2+6x+1$` },
  { title: "Symmetry of nCr", q: S`Evaluate $\binom82$ and $\binom86$.`,
    steps: [S`$\binom82=\frac{8\cdot7}{2}=28$.`, S`$\binom86=\binom82=28$: choosing 6 to take is choosing 2 to leave.`], ans: "both 28" },
  { title: "A negative term", q: S`Expand $(x-3)^4$.`,
    steps: [S`Row 4 with $b=-3$: $x^4+4x^3(-3)+6x^2(9)+4x(-27)+81$.`], ans: S`$x^4-12x^3+54x^2-108x+81$` },
  { title: "One term", q: S`Find the term in $x^4$ in $(3x+2)^6$.`,
    steps: [S`$\binom6r(3x)^{6-r}2^r$ with $6-r=4$: $r=2$.`, S`$15\cdot81x^4\cdot4$.`], ans: S`$4860x^4$` },
  { title: "A fractional coefficient", q: S`Find the coefficient of $x^2$ in $\left(1-\frac{x}{2}\right)^8$.`,
    steps: [S`$\binom82\left(-\frac12\right)^2=28\cdot\frac14$.`], ans: "7" },
  { title: "The constant term", q: S`Find the constant term in $\left(x+\frac1x\right)^8$.`,
    fig: svgT(barsDoc([8, 6, 4, 2, 0, -2, -4, -6, -8], { start: 0, color: "#0e7490", xlab: "r" }), 5.5),
    steps: [S`Power of $x$: $8-r-r=8-2r=0\Rightarrow r=4$.`, S`$\binom84=70$.`], ans: "70" },
  { title: "An exact power", q: S`Expand $(1+x)^4$ and use it to evaluate $1.01^4$ exactly.`,
    steps: [S`$1+4x+6x^2+4x^3+x^4$ with $x=0.01$.`, S`$1+0.04+0.0006+0.000004+0.00000001$.`], ans: "1.04060401" },
  { title: "Find the power", q: S`The coefficient of $x$ in $(1+2x)^n$ is 24. Find $n$.`,
    steps: [S`The $x$ term is $\binom n1(2x)=2nx$.`, S`$2n=24$.`], ans: S`$n=12$` },
];

const PROBLEMS = [
  { level: 1, q: S`Evaluate $\binom63$.`, recap: "nCr.", ans: "20" },
  { level: 1, q: S`Expand $(x+2)^3$.`, recap: "Small expansion.", ans: S`$x^3+6x^2+12x+8$` },
  { level: 1, q: "Write down row 6 of Pascal's triangle.", recap: "Pascal's triangle.", ans: "1 6 15 20 15 6 1" },
  { level: 2, q: S`Expand $(2x-1)^4$.`, recap: "Negative term.", ans: S`$16x^4-32x^3+24x^2-8x+1$` },
  { level: 2, q: S`Find the coefficient of $x^3$ in $(x+4)^7$.`, recap: "Coefficient.", ans: S`$\binom74 4^4=8960$` },
  { level: 2, q: S`Find the term in $x^5$ in $(2x+3)^7$.`, recap: "Specific term.", ans: S`$6048x^5$` },
  { level: 2, q: S`Find the constant term in $\left(x-\frac2x\right)^4$.`, recap: "Constant term.", ans: "24" },
  { level: 2, q: S`Find the coefficient of $x^3$ in $(1+3x)^5$.`, recap: "Coefficient.", ans: "270" },
  { level: 3, space: 5, q: S`The expansion of $(1+ax)^n$ begins $1+12x+63x^2+\dots$ Find $a$ and $n$.`, recap: "Two unknowns.", ans: S`$na=12$, $\binom n2a^2=63$: $n=8$, $a=1.5$` },
  { level: 3, space: 4, q: S`Find the coefficient of $x^4$ in $(x^2+2)^5$.`, recap: "Power of x squared.", ans: S`$r=3$: $10\cdot8=80$` },
  { level: 3, space: 5, q: S`Find the term independent of $x$ in $\left(2x^2-\frac1x\right)^6$.`, recap: "Independent term.", ans: S`$r=4$: $15\cdot4=60$` },
  { level: 3, space: 4, q: S`Find the coefficient of $x^2$ in $(2+x)(1-x)^6$.`, recap: "A product.", ans: S`$2(15)+1(-6)=24$` },
  { level: 3, space: 4, q: S`Use the first three terms of $(1+x)^{10}$ to estimate $1.02^{10}$, and compare with the calculator.`, recap: "Approximation.", ans: S`$1+0.2+0.018=1.218$ (actual 1.21899)` },
];

export const WS = {
  code: "1.5",
  title: "The Binomial Theorem",
  bigideas: S`$(a+b)^n=\sum_{r=0}^{n}\binom nr a^{n-r}b^r$, where $\binom nr=\frac{n!}{r!(n-r)!}$ is the entry in row $n$, position $r$ of Pascal's triangle. Bracket whole terms such as $(2x)$ and $(-3)$. To find one term, write the power of $x$ in the general term and solve for $r$.`,
  goals: ["Build and use Pascal's triangle.", "Evaluate nCr.", "Expand powers of binomials.", "Find specific terms and unknown n or coefficients."],
  curriculum: "SL 1.9",
  vocab: [["Binomial", "a two-term expression"], ["nCr", S`$\frac{n!}{r!(n-r)!}$`], ["General term", S`$\binom nr a^{n-r}b^r$`]],
  hook: "Ask students to expand (x + 1) to the power 2, 3 and 4 by multiplying brackets, then look for a pattern in the coefficients.",
  concepts: [
    ["1. Pascal's triangle", S`${svgT(pascalDoc(6, [[3, 1], [3, 2], [4, 2]]), 5.5)} Each entry is the sum of the two above; rows are symmetric.`],
    ["2. The theorem", S`Powers of $a$ fall from $n$ to 0 while powers of $b$ rise from 0 to $n$; each term's powers add to $n$; there are $n+1$ terms.`],
    ["3. A specific term", S`Write the power of $x$ in the general term, set it equal to the target and solve for $r$. A non-whole $r$ means there is no such term.`],
  ],
  tips: ["(2x) cubed is 8x cubed.", "Keep the sign of b.", "The term with b to the r is term r + 1.", "Solve for r before computing.", "0! = 1."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

// MDM4U Worksheet 1.8 — The Binomial Theorem (teacher edition)
import { svgT, pascalSvg, barsSvg } from "./figT.mjs";
import { C, binTerm } from "../../mdm4u/count.mjs";

const S = String.raw;
const coefs = (a, b, N) => Array.from({ length: N + 1 }, (_, k) => binTerm(a, b, N, k));

const EXAMPLES = [
  { title: "Using Pascal's triangle", q: "Expand $(a+b)^6$.", fig: svgT(pascalSvg(7, { hl: [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6]] }), 5.6), steps: ["Row 6: 1 6 15 20 15 6 1.", "Powers of a fall from 6; powers of b rise to 6."], ans: S`$a^6+6a^5b+15a^4b^2+20a^3b^3+15a^2b^4+6ab^5+b^6$` },
  { title: "With a coefficient", q: "Expand $(x+3)^4$.", steps: [S`$x^4+4x^3(3)+6x^2(9)+4x(27)+81$.`], ans: S`$x^4+12x^3+54x^2+108x+81$` },
  { title: "Negative term", q: "Expand $(2a-b)^3$.", steps: [S`$(2a)^3+3(2a)^2(-b)+3(2a)(-b)^2+(-b)^3$.`], ans: S`$8a^3-12a^2b+6ab^2-b^3$` },
  { title: "General term", q: "Write the general term of $(x-2)^{9}$ and find the 4th term.", steps: [S`$t_{k+1}=\binom9k x^{9-k}(-2)^k$.`, S`4th term: $k=3$: $\binom93x^6(-8)=84(-8)x^6$.`], ans: S`$${binTerm(1, -2, 9, 3)}x^6$` },
  { title: "Coefficient of a power", q: "Find the coefficient of $x^5$ in $(3x+1)^7$.", steps: [S`$x^5$ needs $7-k=5$, so $k=2$.`, S`$\binom72(3)^5=21\times243$.`], ans: `${binTerm(3, 1, 7, 2)}` },
  { title: "Middle term", q: "Find the middle term of $(x+y)^{10}$.", steps: [S`11 terms; the middle is the 6th: $k=5$.`, S`$\binom{10}5x^5y^5$.`], ans: S`$252x^5y^5$` },
  { title: "Constant term", q: "Find the constant term of $\\left(x+\\dfrac{3}{x}\\right)^6$.", steps: [S`$t_{k+1}=\binom6k x^{6-k}3^kx^{-k}=\binom6k3^kx^{6-2k}$.`, S`$6-2k=0\Rightarrow k=3$: $\binom63 3^3=20\times27$.`], ans: "540" },
  { title: "Identifying the binomial", q: "Write $x^5-5x^4+10x^3-10x^2+5x-1$ in the form $(a+b)^n$.", fig: svgT(barsSvg(coefs(1, -1, 5).map(Math.abs), { labels: ["x⁵", "x⁴", "x³", "x²", "x", "1"], top: coefs(1, -1, 5), hl: [1, 3, 5], xlabel: "term", ylabel: "|coefficient|" }), 5), steps: ["Coefficients are row 5 with alternating signs."], ans: S`$(x-1)^5$` },
  { title: "Approximation", q: "Use the first three terms of $(1+0.02)^{8}$ to estimate $1.02^8$.", steps: [S`$1+8(0.02)+28(0.02)^2=1+0.16+0.0112$.`], ans: "about 1.1712 (actual 1.1717)" },
];

const PROBLEMS = [
  { level: 1, q: "Expand $(x+1)^5$ using Pascal's triangle.", ans: S`$x^5+5x^4+10x^3+10x^2+5x+1$` },
  { level: 1, q: "How many terms does $(2p-q)^{13}$ have? What is the sum of the powers in each term?", ans: "14 terms; 13" },
  { level: 1, q: "Write the 3rd term of $(a+b)^{8}$.", ans: S`$\binom82a^6b^2=28a^6b^2$` },
  { level: 2, q: "Expand and simplify $(1-2y)^4$.", ans: S`$1-8y+24y^2-32y^3+16y^4$` },
  { level: 2, q: "Find the coefficient of $x^3$ in $(x+4)^6$.", ans: S`$\binom63 4^3=1280$` },
  { level: 2, q: "Find the term in $x^2$ in the expansion of $(5-x)^5$.", ans: S`$\binom52 5^3x^2=1250x^2$` },
  { level: 2, q: "Find the constant term of $\\left(2x-\\dfrac1x\\right)^4$.", ans: S`$k=2$: $\binom42(2)^2(-1)^2=24$` },
  { level: 2, q: "Write $1+4z+6z^2+4z^3+z^4$ in the form $(a+b)^n$.", ans: S`$(1+z)^4$` },
  { level: 3, space: 4.5, q: "In the expansion of $(1+ax)^{10}$ the coefficient of $x$ is 30. Find $a$ and then the coefficient of $x^2$.", ans: S`$10a=30\Rightarrow a=3$; $\binom{10}2 9=405$` },
  { level: 3, space: 4.5, q: "Find the coefficient of $x^4$ in $(1+x)^3(1-x)^4$. (Hint: expand both or simplify first.)", ans: `${(() => { const A = [1, 3, 3, 1], B = coefs(1, -1, 4).reverse(); let s = 0; for (let i = 0; i <= 3; i++) if (4 - i >= 0 && 4 - i <= 4) s += A[i] * B[4 - i]; return s; })()}` },
  { level: 3, space: 4.5, q: "Find the term independent of $x$ in $\\left(x^2-\\dfrac{2}{x}\\right)^9$.", ans: S`$x^{18-2k-k}$: $k=6$: $\binom96(-2)^6=84\times64=5376$` },
  { level: 3, space: 4.5, q: "Use the binomial theorem to show that $11^4=14\\,641$ by writing $11=10+1$. Why do the digits match row 4 of Pascal's triangle?", ans: S`$(10+1)^4=10^4+4(10^3)+6(10^2)+4(10)+1=14\,641$; each coefficient sits in its own place value (no carrying until row 5)` },
  { level: 3, space: 5, q: "Show that $\\binom n0+\\binom n1+\\cdots+\\binom nn=2^n$ by substituting values into $(a+b)^n$. What do you get with $a=1$, $b=-1$?", ans: S`$a=b=1$: $(1+1)^n=2^n$; $a=1,b=-1$: alternating sum $=0^n=0$ for $n\ge1$` },
];

export const WS = {
  code: "1.8",
  title: "The Binomial Theorem",
  bigideas: S`$(a+b)^n=\sum_{k=0}^n\binom nk a^{n-k}b^k$. The coefficients are row $n$ of Pascal's triangle because $\binom nk$ counts the ways to choose $b$ from $k$ of the $n$ brackets. The general term is $t_{k+1}=\binom nk a^{n-k}b^k$.`,
  goals: ["Expand binomials with Pascal's triangle.", "Handle coefficients and negative terms.", "Find a specific term, coefficient or constant term.", "Explain the link to combinations."],
  curriculum: "A2.4 extension (combinations, Pascal's triangle and the expansion of $(a+b)^n$)",
  vocab: [["Binomial", "a two-term expression"], ["General term", "$t_{k+1}=\\binom nk a^{n-k}b^k$"], ["Constant term", "the term with $x^0$"]],
  hook: "Compute $11^2$, $11^3$, $11^4$. What do you notice? What goes wrong at $11^5$?",
  concepts: [
    ["1. Why combinations", S`In $(a+b)(a+b)\cdots(a+b)$, a term $a^{n-k}b^k$ arises once for each choice of the $k$ brackets giving $b$: $\binom nk$ times.`],
    ["2. Expanding", S`Bracket each whole term: $(2x)^3=8x^3$; $(-3)^2=9$. Signs alternate when $b<0$.`],
    ["3. A specific term", S`Write the power of $x$ in $t_{k+1}$ in terms of $k$, solve for $k$, then evaluate.`],
  ],
  tips: ["The (k+1)th term uses k.", "Bracket the coefficient with the variable.", "For constant terms set the power to 0.", "Row n has n + 1 entries.", "Check with $x=1$: the coefficients add to $(a+b)^n$ at $x=1$."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

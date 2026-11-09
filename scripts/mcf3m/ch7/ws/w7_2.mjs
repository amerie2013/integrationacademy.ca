// MCF3M Worksheet 7.2 — Zero and Negative Exponents (teacher edition).
import { svgT } from "../../ws/figT.mjs";
import { stripSvg, rep, eDoc, P } from "../efig.mjs";
const S = String.raw;
const ST = (rows, title = "", w = 7.6) => svgT(stripSvg(rows, title), w);
const G = (curves, o, w = 5.2) => svgT(eDoc(curves, o), w);

const EXAMPLES = [
  { title: "The pattern", q: S`Continue the pattern $3^3=27$, $3^2=9$, $3^1=3$ to $3^{-2}$.`, fig: G([(x) => 3 ** x], { view: { xmin: -2.5, xmax: 3.3, ymin: -1, ymax: 28 }, step: { x: 1, y: 3 }, points: [P(-2, 0.11, "(−2, 1/9)"), P(-1, 0.33, "(−1, 1/3)"), P(0, 1, "(0, 1)"), P(3, 27, "(3, 27)")] }),
    steps: [S`Each step down divides by $3$.`, S`$3^0=1$, $3^{-1}=\frac13$, $3^{-2}=\frac19$.`], ans: S`$1,\ \frac13,\ \frac19$` },
  { title: "Zero exponents", q: S`Evaluate $8^0$, $(-6)^0$, $-6^0$ and $4\cdot5^0$.`, fig: ST([{ label: "(−6)⁰", items: ["1"], color: "green" }, { label: "−6⁰", items: ["−", "1"], color: "red" }, { label: "4 · 5⁰", items: ["4", "·", "1"] }]),
    steps: [S`$8^0=1$; $(-6)^0=1$.`, S`$-6^0=-(6^0)=-1$.`, S`$4\cdot5^0=4\cdot1=4$.`], ans: S`$1,\ 1,\ -1,\ 4$` },
  { title: "A negative exponent", q: S`Evaluate $6^{-2}$.`, fig: ST([{ label: "6⁻²", items: ["1", "/", "6", "6"], colors: ["green", "green", "violet", "violet"] }]),
    steps: [S`$6^{-2}=\frac1{6^2}$.`, S`$=\frac1{36}$.`], ans: S`$\frac1{36}$` },
  { title: "Brackets matter", q: S`Evaluate $(-2)^{-4}$ and $-2^{-4}$.`, fig: ST([{ label: "(−2)⁻⁴", items: ["1/16"], color: "green" }, { label: "−2⁻⁴", items: ["−1/16"], color: "red" }]),
    steps: [S`$(-2)^{-4}=\frac1{(-2)^4}=\frac1{16}$.`, S`$-2^{-4}=-\frac1{2^4}=-\frac1{16}$.`], ans: S`$\frac1{16}$; $-\frac1{16}$` },
  { title: "Fraction base", q: S`Evaluate $\left(\frac34\right)^{-3}$.`, fig: ST([{ label: "flip", items: ["4/3"], color: "violet" }, { label: "cube", items: ["4/3", "4/3", "4/3"], color: "green" }]),
    steps: [S`Flip: $\left(\frac43\right)^3$.`, S`$=\frac{64}{27}$.`], ans: S`$\frac{64}{27}$` },
  { title: "Sum of reciprocals", q: S`Evaluate $2^{-1}+4^{-1}$.`, fig: ST([{ label: "2⁻¹ + 4⁻¹", items: ["1/2", "+", "1/4"] }, { label: "=", items: ["3/4"], color: "green" }]),
    steps: [S`$\frac12+\frac14$.`, S`$=\frac34$.`], ans: S`$\frac34$` },
  { title: "Product law", q: S`Evaluate $7^{-3}\times7^{5}$.`, fig: ST([{ label: "exponents", items: ["−3", "+", "5", "=", "2"] }]),
    steps: [S`$7^{-3+5}=7^2$.`, S`$=49$.`], ans: S`$49$` },
  { title: "Power of a power", q: S`Evaluate $(10^{-2})^{-3}$.`, fig: ST([{ label: "exponents", items: ["−2", "×", "−3", "=", "6"] }]),
    steps: [S`$10^{(-2)(-3)}=10^6$.`, S`$=1\,000\,000$.`], ans: S`$10^6$` },
  { title: "Algebra", q: S`Simplify $\frac{a^{-4}b^{3}}{a^{2}b^{-2}}$ with positive exponents.`, fig: ST([{ label: "a: −4 − 2", items: rep("1/a", 6), color: "green" }, { label: "b: 3 − (−2)", items: rep("b", 5) }]),
    steps: [S`$a^{-4-2}=a^{-6}$.`, S`$b^{3+2}=b^5$.`, S`$\frac{b^5}{a^6}$.`], ans: S`$\frac{b^5}{a^6}$` },
];

const PROBLEMS = [
  { level: 1, q: S`Evaluate $12^0$ and $-12^0$.`, ans: S`$1$; $-1$` },
  { level: 1, q: S`Evaluate $4^{-3}$.`, ans: S`$\frac1{64}$` },
  { level: 1, q: S`Evaluate $\left(\frac15\right)^{-2}$.`, ans: S`$25$` },
  { level: 2, q: S`Evaluate $(-3)^{-2}$ and $-3^{-2}$.`, ans: S`$\frac19$; $-\frac19$` },
  { level: 2, q: S`Evaluate $\left(\frac25\right)^{-3}$.`, ans: S`$\frac{125}8$` },
  { level: 2, q: S`Evaluate $5^{-4}\times5^{6}$.`, ans: S`$25$` },
  { level: 2, q: S`Evaluate $3^{-1}+6^{-1}$.`, ans: S`$\frac12$` },
  { level: 2, q: S`Simplify $x^{-5}\cdot x^{2}$ with a positive exponent.`, ans: S`$\frac1{x^3}$` },
  { level: 3, space: 5, q: S`Evaluate $\frac{2^{-3}\times2^{7}}{2^{-2}}$.`, ans: S`$2^6=64$` },
  { level: 3, space: 5, q: S`Simplify $\left(\frac{3x^{-2}}{y^{3}}\right)^{-2}$.`, ans: S`$\frac{x^4y^6}9$` },
  { level: 3, space: 5, q: S`Evaluate $\left(4^{-1}-5^{-1}\right)^{-1}$.`, ans: S`$\left(\frac1{20}\right)^{-1}=20$` },
  { level: 3, space: 5, q: S`Find $n$ if $\frac{1}{8}\times2^{n}=2^{5}$.`, ans: S`$2^{-3+n}=2^5$: $n=8$` },
  { level: 3, space: 5, q: S`Explain, with the quotient law, why $0^0$ is not defined while $5^0=1$.`, ans: S`$\frac{0^n}{0^n}=\frac00$ is undefined` },
];

export const WS = {
  code: "7.2",
  title: "Zero and Negative Exponents",
  bigideas: S`To keep the exponent laws working, $b^0=1$ and $b^{-n}=\frac1{b^n}$ for $b\ne0$. A negative exponent means reciprocal, not a negative value. For fractions, $\left(\frac ab\right)^{-n}=\left(\frac ba\right)^n$. All the laws from 7.1 still apply; write final answers with positive exponents.`,
  goals: ["Explain $b^0=1$ and $b^{-n}=\\frac1{b^n}$.", "Evaluate powers with integer exponents.", "Apply the laws with negative exponents.", "Simplify algebraic expressions."],
  curriculum: "B1.3",
  vocab: [["Zero exponent", "$b^0=1$"], ["Negative exponent", "$b^{-n}=\\frac1{b^n}$"], ["Reciprocal", "$\\frac1x$; flips a fraction"], ["Positive form", "no negative exponents"]],
  hook: S`$\frac{5^2}{5^2}=1$ and $\frac{5^2}{5^2}=5^0$. What must $5^0$ be?`,
  concepts: [
    ["1. The pattern", S`Going down by one in the exponent divides by the base.
${G([(x) => 2 ** x], { view: { xmin: -3.5, xmax: 3.5, ymin: -0.5, ymax: 9 }, points: [P(-2, 0.25, "(−2, 1/4)"), P(0, 1, "(0, 1)"), P(3, 8, "(3, 8)")] })}`],
    ["2. Using the laws", S`$b^{-m}b^{n}=b^{n-m}$, $(b^{-m})^{-n}=b^{mn}$.`],
  ],
  tips: ["Negative exponent → reciprocal.", "Flip fractions.", "Check brackets on negative bases."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

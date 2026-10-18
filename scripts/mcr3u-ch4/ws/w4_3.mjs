// MCR3U Worksheet 4.3 — Simplifying Expressions with Exponents (teacher edition)
import { F } from "./figT.mjs";

const EXAMPLES = [
  { title: "Adding rational exponents", q: String.raw`Simplify $x^{2/5}\cdot x^{3/5}$.`, steps: [String.raw`$x^{5/5}$.`], ans: String.raw`$x$` },
  { title: "Coefficient and power", q: String.raw`Simplify $(16a^8)^{3/4}$.`, steps: [String.raw`$16^{3/4}=8$; $a^{6}$.`], ans: String.raw`$8a^6$` },
  { title: "Quotient", q: String.raw`Simplify $\dfrac{y^{5/4}}{y^{1/2}}$.`, steps: [String.raw`$\frac54-\frac24=\frac34$.`], ans: String.raw`$y^{3/4}$` },
  { title: "Power of a product", q: String.raw`Simplify $(x^{1/3}y^{1/2})^6$.`, steps: [String.raw`$x^2y^3$.`], ans: String.raw`$x^2y^3$` },
  { title: "Radicals as powers", q: String.raw`Write $\sqrt x\cdot\sqrt[4]x$ as one power.`, steps: [String.raw`$\frac24+\frac14$.`], ans: String.raw`$x^{3/4}$` },
  { title: "A negative outer exponent", q: String.raw`Simplify $(a^{-1/2}b^{2/3})^{-6}$.`, steps: [String.raw`$a^{3}b^{-4}$.`], ans: String.raw`$\frac{a^3}{b^4}$` },
  { title: "Common base", q: String.raw`Write $8^x$ and $16^x$ as powers of 2.`, steps: [String.raw`$(2^3)^x$, $(2^4)^x$.`], ans: String.raw`$2^{3x}$, $2^{4x}$` },
  { title: "A quotient with a common base", q: String.raw`Write $\dfrac{9^{x+1}}{3^x}$ as a power of 3.`, steps: [String.raw`$3^{2x+2-x}$.`], ans: String.raw`$3^{x+2}$` },
  { title: "Simplify, then evaluate", q: String.raw`Evaluate $\dfrac{(m^{3/2})^2}{m^2}$ at $m=7$.`,
    fig: F({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 8 }, curves: [{ f: (m) => m, a: 0 }], step: { x: 1, y: 1 } }, 5, "the expression equals m: a line"),
    steps: [String.raw`$\frac{m^3}{m^2}=m$.`], ans: "7" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Simplify $a^{1/4}\cdot a^{3/4}$.`, recap: "Product.", ans: String.raw`$a$` },
  { level: 1, q: String.raw`Simplify $(x^6)^{1/3}$.`, recap: "Power.", ans: String.raw`$x^2$` },
  { level: 1, q: String.raw`Simplify $\dfrac{b^{7/3}}{b^{1/3}}$.`, recap: "Quotient.", ans: String.raw`$b^2$` },
  { level: 2, q: String.raw`Simplify $(25x^4)^{1/2}$.`, recap: "Coefficient.", ans: String.raw`$5x^2$` },
  { level: 2, q: String.raw`Simplify $(x^{2/3}y^{-1})^3$.`, recap: "Negative.", ans: String.raw`$\frac{x^2}{y^3}$` },
  { level: 2, q: String.raw`Write $\sqrt[3]x\cdot\sqrt x$ as one power.`, recap: "Radicals.", ans: String.raw`$x^{5/6}$` },
  { level: 2, q: String.raw`Write $27^x$ as a power of 3.`, recap: "Common base.", ans: String.raw`$3^{3x}$` },
  { level: 2, q: String.raw`Evaluate $\dfrac{(k^{1/2})^4}{k}$ at $k=9$.`, recap: "Simplify then evaluate.", ans: "9" },
  { level: 3, space: 4, q: String.raw`Simplify $(81x^8y^{-4})^{3/4}$.`, recap: "All laws.", ans: String.raw`$\frac{27x^6}{y^3}$` },
  { level: 3, space: 4, q: String.raw`Write $\dfrac{4^{x+2}}{8^x}$ as a power of 2 and evaluate it at $x=1$.`, recap: "Base 2.", ans: String.raw`$2^{4-x}$; 8` },
  { level: 3, space: 4, q: String.raw`Solve $25^x=125$.`, recap: "Matching bases.", ans: String.raw`$5^{2x}=5^3$: $x=1.5$` },
  { level: 3, space: 4, q: String.raw`Solve $4^{x-1}=32$.`, recap: "Matching bases.", ans: String.raw`$2^{2x-2}=2^5$: $x=3.5$` },
  { level: 3, space: 4, q: String.raw`Expand and simplify $\left(x^{1/2}+x^{-1/2}\right)^2$.`, recap: "Expand.", ans: String.raw`$x+2+\frac1x$` },
];

export const WS = {
  code: "4.3",
  title: "Simplifying Expressions with Exponents",
  bigideas: String.raw`The exponent laws apply to rational exponents. Rewrite roots as powers, apply the laws, and raise coefficients separately. Writing powers with a common base (4 = 2², 8 = 2³, 9 = 3², 27 = 3³) lets you combine expressions and solve simple exponential equations.`,
  goals: ["Simplify with rational exponents.", "Rewrite radicals.", "Use common bases.", "Simplify before evaluating."],
  curriculum: "B1.3, B2.4",
  vocab: [["Common base", "same base for every power"], ["Simplified form", "each base once, positive exponents"]],
  hook: String.raw`Ask which is easier to evaluate at $x=2.7$: $\frac{(x^{3/2})^2}{x^2}$ or $x$.`,
  concepts: [
    ["1. Laws", String.raw`$x^{1/2}x^{1/3}=x^{5/6}$; $(x^{3/4})^8=x^6$.`],
    ["2. Coefficients", String.raw`$(8a^6)^{2/3}=8^{2/3}a^4=4a^4$.`],
    ["3. Bases", String.raw`$\frac{8^{x}}{4^{x}}=\frac{2^{3x}}{2^{2x}}=2^x$.`],
  ],
  tips: ["Common denominators for exponents.", "Raise the coefficient.", "Laws apply to products, not sums.", "Assume variables positive.", "Simplify first."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

// MCR3U Worksheet 4.1 — Exponent Laws and Integer Exponents (teacher edition)
import { F, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "A negative exponent", q: String.raw`Evaluate $6^{-2}$.`, steps: [String.raw`$\frac1{6^2}$.`], ans: String.raw`$\frac1{36}$` },
  { title: "Zero exponents and signs", q: String.raw`Evaluate $(-5)^0$ and $-5^0$.`, steps: [String.raw`$(-5)^0=1$; $-5^0=-(5^0)=-1$.`], ans: String.raw`$1$ and $-1$` },
  { title: "A fraction base", q: String.raw`Evaluate $\left(\tfrac34\right)^{-2}$.`, steps: [String.raw`Flip: $\left(\tfrac43\right)^2$.`], ans: String.raw`$\frac{16}{9}$` },
  { title: "Product law", q: String.raw`Simplify $a^4b^{-3}\cdot a^{-6}b^5$.`, steps: [String.raw`$a^{-2}b^{2}$.`], ans: String.raw`$\frac{b^2}{a^2}$` },
  { title: "Power of a product", q: String.raw`Simplify $(3x^{-2})^{-3}$.`, steps: [String.raw`$3^{-3}x^{6}$.`], ans: String.raw`$\frac{x^6}{27}$` },
  { title: "Quotient", q: String.raw`Simplify $(2x^3y^{-1})^2\div(4x^{-1}y)$.`, steps: [String.raw`$4x^6y^{-2}\div4x^{-1}y=x^{7}y^{-3}$.`], ans: String.raw`$\frac{x^7}{y^3}$` },
  { title: "A sum", q: String.raw`Evaluate $2^{-1}+4^{-1}$.`, steps: [String.raw`$\frac12+\frac14$.`], ans: String.raw`$\frac34$` },
  { title: "Nested reciprocals", q: String.raw`Evaluate $\left(5^{-1}-10^{-1}\right)^{-1}$.`, steps: [String.raw`$\frac15-\frac1{10}=\frac1{10}$; reciprocal.`], ans: "10" },
  { title: "An equation", q: String.raw`Solve $3^x=\frac1{81}$.`,
    fig: F({ view: { xmin: -5, xmax: 2, ymin: -0.5, ymax: 4 }, curves: [{ f: (x) => 3 ** x }], points: [pt(-4, 1 / 81, "(−4, 1/81)"), pt(0, 1), pt(1, 3)] }),
    steps: [String.raw`$\frac1{81}=3^{-4}$.`], ans: String.raw`$x=-4$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Evaluate $8^{-2}$.`, recap: "Negative exponent.", ans: String.raw`$\frac1{64}$` },
  { level: 1, q: String.raw`Evaluate $(-7)^0+7^{-1}$.`, recap: "Zero and negative.", ans: String.raw`$\frac87$` },
  { level: 1, q: String.raw`Evaluate $\left(\tfrac25\right)^{-3}$.`, recap: "Fraction base.", ans: String.raw`$\frac{125}8$` },
  { level: 2, q: String.raw`Simplify $x^{-3}\cdot x^7$.`, recap: "Product.", ans: String.raw`$x^4$` },
  { level: 2, q: String.raw`Simplify $(m^2n^{-3})^{-2}$ with positive exponents.`, recap: "Power.", ans: String.raw`$\frac{n^6}{m^4}$` },
  { level: 2, q: String.raw`Simplify $\dfrac{12a^{-2}b^3}{4a^3b^{-1}}$.`, recap: "Quotient.", ans: String.raw`$\frac{3b^4}{a^5}$` },
  { level: 2, q: String.raw`Evaluate $4^{-2}+2^{-3}$.`, recap: "Sum.", ans: String.raw`$\frac3{16}$` },
  { level: 2, q: String.raw`Solve $5^x=\frac1{125}$.`, recap: "Equation.", ans: String.raw`$x=-3$` },
  { level: 3, space: 4, q: String.raw`Evaluate $\left(2^{-1}+2^{-2}\right)^{-2}$.`, recap: "Nested.", ans: String.raw`$\left(\tfrac34\right)^{-2}=\tfrac{16}9$` },
  { level: 3, space: 4, q: String.raw`Simplify $\dfrac{(x^{-2}y)^3}{(xy^{-2})^{-1}}$ with positive exponents.`, recap: "Full simplification.", ans: String.raw`$\frac{y}{x^5}$` },
  { level: 3, space: 4, q: String.raw`Evaluate $\left(\tfrac32\right)^{-2}\cdot\left(\tfrac23\right)^{-3}$.`, recap: "Fraction bases.", ans: String.raw`$\frac49\cdot\frac{27}8=\frac32$` },
  { level: 3, space: 4, q: String.raw`Which is larger, $2^{-10}$ or $10^{-3}$? Explain without a calculator.`, recap: "Compare.", ans: String.raw`$10^{-3}$, since $2^{10}=1024>1000$` },
  { level: 3, space: 4, q: String.raw`Solve $2^{x+3}=\frac14$.`, recap: "Shifted exponent.", ans: String.raw`$x+3=-2$: $x=-5$` },
];

export const WS = {
  code: "4.1",
  title: "Exponent Laws and Integer Exponents",
  bigideas: String.raw`Product: add exponents; quotient: subtract; power: multiply. The quotient law forces $b^0=1$ and $b^{-n}=\frac1{b^n}$; a fraction to a negative power flips. A negative exponent makes a reciprocal, never a negative number.`,
  goals: ["Apply the exponent laws.", "Use zero and negative exponents.", "Evaluate rational bases.", "Simplify to positive exponents."],
  curriculum: "B1.2, B1.3",
  vocab: [["$b^0$", "1 (b ≠ 0)"], ["$b^{-n}$", "$\\frac1{b^n}$"], ["$(\\frac ab)^{-n}$", "$(\\frac ba)^n$"]],
  hook: String.raw`Write $2^4=16$, $2^3=8$, $2^2=4$, $2^1=2$ in a column and ask students to continue the pattern downward.`,
  concepts: [
    ["1. The laws", String.raw`$b^mb^n=b^{m+n}$, $\frac{b^m}{b^n}=b^{m-n}$, $(b^m)^n=b^{mn}$, $(ab)^n=a^nb^n$.`],
    ["2. Zero and negative", String.raw`${F({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 9 }, curves: [{ f: (x) => 2 ** x }], points: [pt(-2, 0.25), pt(-1, 0.5), pt(0, 1), pt(1, 2)] }, 5, "y = 2ˣ: negative exponents give values between 0 and 1")}`],
    ["3. Signs", String.raw`$(-3)^2=9$ but $-3^2=-9$; brackets decide what is raised to the power.`],
  ],
  tips: ["Negative exponent → reciprocal.", "Brackets on negative bases.", "Raise coefficients too.", "Positive exponents in answers.", "(a + b)⁻¹ ≠ a⁻¹ + b⁻¹."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

// MCR3U Worksheet 4.2 — Rational Exponents (teacher edition)
import { F, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Square root", q: String.raw`Evaluate $36^{1/2}$.`, steps: [String.raw`$\sqrt{36}$.`], ans: "6" },
  { title: "Odd root of a negative", q: String.raw`Evaluate $(-27)^{1/3}$.`, steps: [String.raw`$(-3)^3=-27$.`], ans: String.raw`$-3$` },
  { title: "Root then power", q: String.raw`Evaluate $125^{2/3}$.`, steps: [String.raw`$\sqrt[3]{125}=5$; $5^2$.`], ans: "25" },
  { title: "Negative rational exponent", q: String.raw`Evaluate $16^{-3/4}$.`, steps: [String.raw`$\sqrt[4]{16}=2$; $2^3=8$; reciprocal.`], ans: String.raw`$\frac18$` },
  { title: "Fraction base", q: String.raw`Evaluate $\left(\tfrac{9}{25}\right)^{3/2}$.`, steps: [String.raw`$\left(\tfrac35\right)^3$.`], ans: String.raw`$\frac{27}{125}$` },
  { title: "Decimal base", q: String.raw`Evaluate $0.25^{-1/2}$.`, steps: [String.raw`$\sqrt{0.25}=0.5$; reciprocal.`], ans: "2" },
  { title: "Radical to exponent", q: String.raw`Write $\sqrt[4]{x^3}$ in exponent form.`, steps: ["The index is the denominator."], ans: String.raw`$x^{3/4}$` },
  { title: "A combination", q: String.raw`Evaluate $8^{4/3}-4^{3/2}$.`, steps: [String.raw`$2^4-2^3$.`], ans: "8" },
  { title: "An equation", q: String.raw`Solve $x^{2/3}=16$, $x>0$.`,
    fig: F({ view: { xmin: 0, xmax: 80, ymin: 0, ymax: 20 }, curves: [{ f: (x) => x ** (2 / 3), a: 0 }], lines: [{ m: 0, b: 16, color: "amber", dash: true }], points: [pt(64, 16)], step: { x: 10, y: 2 } }),
    steps: [String.raw`Raise to $\frac32$: $x=16^{3/2}=4^3$.`], ans: String.raw`$x=64$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Evaluate $81^{1/2}$.`, recap: "Square root.", ans: "9" },
  { level: 1, q: String.raw`Evaluate $1000^{1/3}$.`, recap: "Cube root.", ans: "10" },
  { level: 1, q: String.raw`Evaluate $32^{1/5}$.`, recap: "Fifth root.", ans: "2" },
  { level: 2, q: String.raw`Evaluate $9^{3/2}$.`, recap: "Root then power.", ans: "27" },
  { level: 2, q: String.raw`Evaluate $64^{-2/3}$.`, recap: "Negative.", ans: String.raw`$\frac1{16}$` },
  { level: 2, q: String.raw`Evaluate $\left(\tfrac{27}{64}\right)^{2/3}$.`, recap: "Fraction base.", ans: String.raw`$\frac9{16}$` },
  { level: 2, q: String.raw`Write $x^{5/3}$ in radical form.`, recap: "Radical form.", ans: String.raw`$\sqrt[3]{x^5}$` },
  { level: 2, q: String.raw`Evaluate $(-32)^{3/5}$.`, recap: "Negative base, odd root.", ans: String.raw`$-8$` },
  { level: 3, space: 4, q: String.raw`Evaluate $4^{3/2}+27^{-1/3}-16^{1/4}$.`, recap: "Combination.", ans: String.raw`$8+\frac13-2=6\tfrac13$` },
  { level: 3, space: 4, q: String.raw`Solve $x^{3/4}=8$.`, recap: "Equation.", ans: String.raw`$x=8^{4/3}=16$` },
  { level: 3, space: 4, q: String.raw`Evaluate $0.008^{-2/3}$.`, recap: "Decimal base.", ans: "25" },
  { level: 3, space: 4, q: String.raw`Explain why $(-16)^{1/4}$ is not a real number but $(-8)^{1/3}=-2$.`, recap: "Even vs odd roots.", ans: "no real number to the 4th power is negative; (−2)³ = −8" },
  { level: 3, space: 5, q: String.raw`A cube has volume $V$. Its side is $V^{1/3}$ and its surface area is $6V^{2/3}$. Find the surface area when $V=343$ cm³.`, recap: "Cube.", ans: String.raw`$6(7^2)=294$ cm²` },
];

export const WS = {
  code: "4.2",
  title: "Rational Exponents",
  bigideas: String.raw`The exponent laws force $b^{1/n}=\sqrt[n]b$ and $b^{m/n}=(\sqrt[n]b)^m$. Take the root first. A negative exponent still means a reciprocal; a fraction base takes the root of top and bottom. Rational exponents fill in the curve $y=b^x$ between integers.`,
  goals: [String.raw`Interpret $b^{1/n}$ as a root.`, String.raw`Evaluate $b^{m/n}$.`, "Handle negative exponents and rational bases.", "Convert radical ↔ exponent form."],
  curriculum: "B1.2, B1.3",
  vocab: [["$b^{1/n}$", "$\\sqrt[n]b$"], ["$b^{m/n}$", "$(\\sqrt[n]b)^m$"]],
  hook: String.raw`Ask: “If $9^{1/2}\cdot9^{1/2}$ must equal $9^1$, what number is $9^{1/2}$?”`,
  concepts: [
    ["1. Why a root", String.raw`$(b^{1/n})^n=b$, so $b^{1/n}$ is the nth root.`],
    ["2. On the curve", String.raw`${F({ view: { xmin: -2, xmax: 2, ymin: -1, ymax: 17 }, curves: [{ f: (x) => 4 ** x }], points: [pt(0.5, 2), pt(1.5, 8), pt(-0.5, 0.5)], step: { x: 0.5, y: 2 } }, 5, "y = 4ˣ")}`],
    ["3. Exact values", "Use perfect powers: 8, 27, 64, 125; 16, 81; 32, 243."],
  ],
  tips: ["Root first.", "Negative → reciprocal.", "Even root of a negative: not real.", "Decimal exponents → fractions.", "Check by raising back."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

// MCF3M Worksheet 7.3 — Rational Exponents (teacher edition).
import { svgT } from "../../ws/figT.mjs";
import { stripSvg, rep, eDoc, P } from "../efig.mjs";
const S = String.raw;
const ST = (rows, title = "", w = 7.6) => svgT(stripSvg(rows, title), w);
const G = (curves, o, w = 5.2) => svgT(eDoc(curves, o), w);

const EXAMPLES = [
  { title: "Square roots", q: S`Explain why $36^{\frac12}=6$ and evaluate $121^{\frac12}$.`, fig: G([{ f: (x) => Math.sqrt(x), a: 0, color: "violet" }], { view: { xmin: -5, xmax: 130, ymin: -1, ymax: 13 }, step: { x: 20, y: 2 }, points: [P(36, 6, "(36, 6)"), P(121, 11, "(121, 11)")] }),
    steps: [S`$36^{\frac12}\cdot36^{\frac12}=36^1$, so $36^{\frac12}$ squares to $36$: $6$.`, S`$121^{\frac12}=\sqrt{121}=11$.`], ans: S`$6$; $11$` },
  { title: "Cube root", q: S`Evaluate $216^{\frac13}$ and $(-125)^{\frac13}$.`, fig: G([{ f: (x) => Math.cbrt(x), color: "green" }], { view: { xmin: -150, xmax: 230, ymin: -7, ymax: 7 }, step: { x: 50, y: 1 }, points: [P(216, 6, "(216, 6)"), P(-125, -5, "(−125, −5)")] }),
    steps: [S`$6^3=216$: $216^{\frac13}=6$.`, S`$(-5)^3=-125$: $(-125)^{\frac13}=-5$.`], ans: S`$6$; $-5$` },
  { title: "Root then power", q: S`Evaluate $27^{\frac43}$.`, fig: ST([{ label: "∛27", items: ["3"], color: "green" }, { label: "power 4", items: rep("3", 4) }]),
    steps: [S`$\sqrt[3]{27}=3$.`, S`$3^4=81$.`], ans: S`$81$` },
  { title: "Larger root", q: S`Evaluate $243^{\frac25}$.`, fig: ST([{ label: "⁵√243", items: ["3"], color: "green" }, { label: "square", items: rep("3", 2) }]),
    steps: [S`$\sqrt[5]{243}=3$ (since $3^5=243$).`, S`$3^2=9$.`], ans: S`$9$` },
  { title: "Negative rational", q: S`Evaluate $36^{-\frac32}$.`, fig: ST([{ label: "√36", items: ["6"], color: "green" }, { label: "cube", items: rep("6", 3) }, { label: "reciprocal", items: ["1/216"], color: "red" }]),
    steps: [S`$\frac1{36^{3/2}}$.`, S`$\sqrt{36}=6$, $6^3=216$: $\frac1{216}$.`], ans: S`$\frac1{216}$` },
  { title: "Fraction base", q: S`Evaluate $\left(\frac{16}{81}\right)^{\frac34}$.`, fig: ST([{ label: "⁴√(16/81)", items: ["2/3"], color: "green" }, { label: "cube", items: rep("2/3", 3) }]),
    steps: [S`$\sqrt[4]{\frac{16}{81}}=\frac23$.`, S`$\left(\frac23\right)^3=\frac8{27}$.`], ans: S`$\frac8{27}$` },
  { title: "Product law", q: S`Evaluate $5^{\frac13}\times5^{\frac53}$.`, fig: ST([{ label: "exponents", items: ["1/3", "+", "5/3", "=", "2"] }]),
    steps: [S`$5^{\frac13+\frac53}=5^2$.`, S`$=25$.`], ans: S`$25$` },
  { title: "Algebra", q: S`Simplify $\left(a^{\frac23}b^{\frac14}\right)^{12}$.`, fig: ST([{ label: "a", items: ["2/3", "×", "12", "=", "8"] }, { label: "b", items: ["1/4", "×", "12", "=", "3"], color: "green" }]),
    steps: [S`$a^{\frac23\times12}=a^8$.`, S`$b^{\frac14\times12}=b^3$.`], ans: S`$a^8b^3$` },
  { title: "Area and side", q: S`A square has area $50$ cm$^2$. Write its side as a power of $50$ and evaluate to two decimals. Then find its diagonal.`, fig: G([{ f: (x) => Math.sqrt(x), a: 0, color: "violet" }], { view: { xmin: -2, xmax: 60, ymin: -0.5, ymax: 9 }, step: { x: 10, y: 1 }, points: [P(50, 7.07, "(50, 7.07)")], xlabel: "A", ylabel: "s" }),
    steps: [S`$s=50^{\frac12}\approx7.07$ cm.`, S`Diagonal $=s\sqrt2=(50\cdot2)^{\frac12}=10$ cm.`], ans: S`$\approx7.07$ cm; $10$ cm` },
];

const PROBLEMS = [
  { level: 1, q: S`Evaluate $144^{\frac12}$.`, ans: S`$12$` },
  { level: 1, q: S`Evaluate $343^{\frac13}$.`, ans: S`$7$` },
  { level: 1, q: S`Write $\sqrt[4]{x^3}$ as a power of $x$.`, ans: S`$x^{\frac34}$` },
  { level: 2, q: S`Evaluate $64^{\frac56}$.`, ans: S`$2^5=32$` },
  { level: 2, q: S`Evaluate $100^{-\frac32}$.`, ans: S`$\frac1{1000}$` },
  { level: 2, q: S`Evaluate $\left(\frac{8}{125}\right)^{-\frac13}$.`, ans: S`$\frac52$` },
  { level: 2, q: S`Evaluate $3^{\frac12}\times3^{\frac32}$.`, ans: S`$9$` },
  { level: 2, q: S`Evaluate $(-32)^{\frac35}$.`, ans: S`$(-2)^3=-8$` },
  { level: 3, space: 5, q: S`Evaluate $\frac{16^{\frac34}\times4^{-\frac12}}{8^{\frac13}}$.`, ans: S`$\frac{8\times\frac12}{2}=2$` },
  { level: 3, space: 5, q: S`Simplify $\frac{x^{\frac32}\cdot x^{\frac12}}{x^{-1}}$.`, ans: S`$x^3$` },
  { level: 3, space: 5, q: S`Solve $9^x=243$.`, ans: S`$3^{2x}=3^5$: $x=\frac52$` },
  { level: 3, space: 5, q: S`A cube has surface area $96$ cm$^2$. Use exponents to find its volume.`, ans: S`face $16$, side $4$, volume $64$ cm$^3$` },
  { level: 3, space: 5, q: S`Explain why $(-81)^{\frac14}$ is not a real number but $(-27)^{\frac13}$ is.`, ans: S`even root of a negative vs odd root` },
];

export const WS = {
  code: "7.3",
  title: "Rational Exponents",
  bigideas: S`If the exponent laws are to hold, $b^{\frac1n}$ must be the $n$th root: $(b^{\frac1n})^n=b$. Then $b^{\frac mn}=\left(\sqrt[n]b\right)^m$ — the denominator is the root and the numerator the power. A negative rational exponent means take the reciprocal. Even roots of negative numbers are not real.`,
  goals: ["Connect $b^{\\frac1n}$ to roots.", "Evaluate $b^{\\frac mn}$.", "Handle negative rational exponents.", "Simplify with the laws."],
  curriculum: "B1.3 (extension)",
  vocab: [["$b^{\\frac1n}$", "$\\sqrt[n]b$"], ["$b^{\\frac mn}$", "$(\\sqrt[n]b)^m$"], ["Radical", "a root expression"], ["Rational exponent", "a fraction exponent"]],
  hook: S`If $9^{x}\times9^{x}=9$, what must $x$ be? What is $9^{x}$?`,
  concepts: [
    ["1. Roots as powers", S`$b^{\frac12}=\sqrt b$, $b^{\frac13}=\sqrt[3]b$.
${G([{ f: (x) => Math.sqrt(x), a: 0, color: "violet" }, { f: (x) => Math.cbrt(x), color: "green" }], { view: { xmin: -1, xmax: 30, ymin: -0.5, ymax: 6 }, step: { x: 5, y: 1 }, points: [P(25, 5, "(25, 5)"), P(27, 3, "(27, 3)")] })}`],
    ["2. Root, then power", S`$b^{\frac mn}=\left(\sqrt[n]b\right)^m$ keeps numbers small.`],
  ],
  tips: ["Denominator = root.", "Negative exponent → reciprocal first.", "Odd roots of negatives are fine."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

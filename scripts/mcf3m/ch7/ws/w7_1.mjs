// MCF3M Worksheet 7.1 — The Laws of Exponents (teacher edition).
import { svgT } from "../../ws/figT.mjs";
import { stripSvg, rep } from "../efig.mjs";
const S = String.raw;
const ST = (rows, title = "", w = 7.6) => svgT(stripSvg(rows, title), w);

const EXAMPLES = [
  { title: "Product law", q: S`Simplify $2^3\times2^4$ and evaluate.`, fig: ST([{ label: "2³", items: rep("2", 3) }, { label: "2⁴", items: rep("2", 4), color: "green" }, { label: "2⁷", items: rep("2", 7), colors: [...rep("violet", 3), ...rep("green", 4)] }]),
    steps: [S`$3+4=7$ factors: $2^7$.`, S`$2^7=128$. Check: $8\times16=128$ \checkmark`], ans: S`$2^7=128$` },
  { title: "Quotient law", q: S`Simplify $\frac{10^8}{10^5}$ and evaluate.`, fig: ST([{ label: "10⁸", items: rep("10", 8), colors: [...rep("gray", 5), ...rep("violet", 3)] }, { label: "10⁵", items: rep("10", 5), color: "gray" }]),
    steps: [S`Five factors cancel: $10^{8-5}=10^3$.`, S`$=1000$.`], ans: S`$10^3=1000$` },
  { title: "Power of a power", q: S`Simplify $(4^2)^3$ and evaluate.`, fig: ST([{ label: "(4²)³", items: rep("4", 6), colors: ["violet", "violet", "green", "green", "blue", "blue"] }]),
    steps: [S`Three groups of two: $4^{2\times3}=4^6$.`, S`$4^6=4096$.`], ans: S`$4^6=4096$` },
  { title: "Negative base", q: S`Simplify $(-5)^2\times(-5)^3$ and evaluate.`, fig: ST([{ label: "(−5)⁵", items: rep("−5", 5), colors: [...rep("violet", 2), ...rep("green", 3)] }]),
    steps: [S`$(-5)^{2+3}=(-5)^5$.`, S`Odd exponent, negative base: $-3125$.`], ans: S`$-3125$` },
  { title: "Fraction base", q: S`Evaluate $\frac{\left(\frac23\right)^4\times\left(\frac23\right)^2}{\left(\frac23\right)^5}$.`, fig: ST([{ label: "top (2/3)⁶", items: rep("2/3", 6), colors: [...rep("gray", 5), "violet"] }, { label: "bottom (2/3)⁵", items: rep("2/3", 5), color: "gray" }]),
    steps: [S`Top: $\left(\frac23\right)^{6}$.`, S`Divide: $\left(\frac23\right)^{1}=\frac23$.`], ans: S`$\frac23$` },
  { title: "Mixed laws", q: S`Evaluate $\frac{3^2\times3^5}{(3^2)^2}$.`, fig: ST([{ label: "top 3⁷", items: rep("3", 7), colors: [...rep("gray", 4), ...rep("violet", 3)] }, { label: "bottom 3⁴", items: rep("3", 4), color: "gray" }]),
    steps: [S`Top $3^7$, bottom $3^4$.`, S`$3^{7-4}=3^3=27$.`], ans: S`$27$` },
  { title: "Variables", q: S`Simplify $\frac{x^5\cdot x^7}{x^3}$.`, fig: ST([{ label: "top x¹²", items: rep("x", 12), colors: [...rep("gray", 3), ...rep("violet", 9)] }, { label: "bottom x³", items: rep("x", 3), color: "gray" }], "", 8.4),
    steps: [S`$x^{5+7}=x^{12}$.`, S`$x^{12-3}=x^9$.`], ans: S`$x^9$` },
  { title: "Power of a product", q: S`Simplify $(-2a^2b^3)^3$.`, fig: ST([{ label: "coefficient", items: rep("−2", 3) }, { label: "a", items: rep("a²", 3), color: "green" }, { label: "b", items: rep("b³", 3), color: "blue" }]),
    steps: [S`$(-2)^3=-8$.`, S`$(a^2)^3=a^6$, $(b^3)^3=b^9$.`, S`$-8a^6b^9$.`], ans: S`$-8a^6b^9$` },
  { title: "Full simplification", q: S`Simplify $\frac{(6p^5q^3)(2pq^4)}{4p^3q^5}$.`, fig: ST([{ label: "p: 6 − 3", items: rep("p", 6), colors: [...rep("gray", 3), ...rep("violet", 3)] }, { label: "q: 7 − 5", items: rep("q", 7), colors: [...rep("gray", 5), ...rep("green", 2)] }]),
    steps: [S`Coefficients: $\frac{12}4=3$.`, S`$p^{6-3}=p^3$; $q^{7-5}=q^2$.`, S`$3p^3q^2$. Check $p=q=1$: $\frac{12}{4}=3$ \checkmark`], ans: S`$3p^3q^2$` },
];

const PROBLEMS = [
  { level: 1, q: S`Write as a single power: $7^3\times7^6$.`, ans: S`$7^9$` },
  { level: 1, q: S`Write as a single power: $\frac{9^{10}}{9^4}$.`, ans: S`$9^6$` },
  { level: 1, q: S`Write as a single power: $(11^3)^5$.`, ans: S`$11^{15}$` },
  { level: 2, q: S`Evaluate $\frac{4^5\times4^2}{4^6}$.`, ans: S`$4$` },
  { level: 2, q: S`Evaluate $\left(\frac12\right)^3\times\left(\frac12\right)^2$.`, ans: S`$\frac1{32}$` },
  { level: 2, q: S`Simplify $(3x^4)^2$.`, ans: S`$9x^8$` },
  { level: 2, q: S`Simplify $\frac{15m^7n^2}{5m^3n}$.`, ans: S`$3m^4n$` },
  { level: 2, q: S`Evaluate $(-1)^{25}\times(-2)^4$.`, ans: S`$-16$` },
  { level: 3, space: 5, q: S`Evaluate $\frac{(2^3)^4\times2^5}{(2^4)^4}$.`, ans: S`$2^{12+5-16}=2$` },
  { level: 3, space: 5, q: S`Simplify $\frac{(2x^3y^2)^4}{(4x^5y^3)^2}$.`, ans: S`$\frac{16x^{12}y^8}{16x^{10}y^6}=x^2y^2$` },
  { level: 3, space: 5, q: S`Find $n$ if $25^3\times5^n=5^{10}$.`, ans: S`$5^{6+n}=5^{10}$: $n=4$` },
  { level: 3, space: 5, q: S`A student wrote $3^4\times3^5=9^9$. Explain the error and give the correct answer.`, ans: S`keep the base: $3^9=19\,683$` },
  { level: 3, space: 5, q: S`Show that $\frac{6^5}{2^5}=3^5$ using the power of a quotient law, and evaluate.`, ans: S`$\left(\frac62\right)^5=3^5=243$` },
];

export const WS = {
  code: "7.1",
  title: "The Laws of Exponents",
  bigideas: S`A power counts equal factors. For the same base: multiplying adds exponents ($b^m b^n=b^{m+n}$), dividing subtracts them ($b^m\div b^n=b^{m-n}$), and a power of a power multiplies them ($(b^m)^n=b^{mn}$). A power of a product or quotient applies the exponent to every factor: $(ab)^n=a^nb^n$, $\left(\frac ab\right)^n=\frac{a^n}{b^n}$.`,
  goals: ["Explain the laws by counting factors.", "Simplify numerical powers.", "Simplify algebraic powers.", "Simplify before evaluating."],
  curriculum: "B1.3",
  vocab: [["Power", "$b^n$"], ["Product law", "$b^mb^n=b^{m+n}$"], ["Quotient law", "$b^m\\div b^n=b^{m-n}$"], ["Power of a power", "$(b^m)^n=b^{mn}$"]],
  hook: S`Without a calculator, which is larger: $2^{30}$ or $4^{14}$?`,
  concepts: [
    ["1. Counting factors", S`$5^3\times5^2=(5\cdot5\cdot5)(5\cdot5)=5^5$.
${ST([{ label: "5³ × 5²", items: rep("5", 5), colors: [...rep("violet", 3), ...rep("green", 2)] }])}`],
    ["2. The laws", S`Same base only. Coefficients are multiplied or divided normally.`],
  ],
  tips: ["Keep the base; change the exponent.", "$(2x)^3=8x^3$, not $2x^3$.", "Watch brackets on negative bases."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

// 7.3 Rational Exponents — 20 hard questions
import { mc, ms, num, tf, stripSvg, eDoc, P, n2, n4 } from "./ek.mjs";
const S = String.raw;

export const TOPIC = "7.3 Rational Exponents";
export const Q = [
  num(S`Evaluate $\frac{16^{\frac34}\times27^{\frac23}}{6^{2}}$.`, 2, "8 × 9 ÷ 36."),
  num(S`Evaluate $\left(\frac{32}{243}\right)^{-\frac25}$ (decimal).`, 2.25, "(243/32)^(2/5) = (3/2)²."),
  num(S`Evaluate $(-27)^{\frac23}+(-8)^{\frac13}$.`, 7, "9 − 2.", stripSvg([{ label: "(−27)^(2/3)", items: ["∛ = −3", "² = 9"] }, { label: "(−8)^(1/3)", items: ["−2"], color: "green" }])),
  num(S`Solve $27^{x}=9$ (decimal, four places).`, Math.round((2 / 3) * 10000) / 10000, "3^(3x) = 3².", null),
  num(S`Solve $8^{x}=\frac{1}{4}$ (decimal, four places).`, Math.round((-2 / 3) * 10000) / 10000, "2^(3x) = 2⁻²."),
  mc(S`Simplify $\frac{\left(a^{\frac23}b^{-\frac12}\right)^{6}}{a^{2}b^{-4}}$.`, S`$a^{2}b$`, [S`$a^{2}b^{-1}$`, S`$a^{6}b$`, S`$\frac{a^{2}}{b^{7}}$`], "a⁴b⁻³ ÷ a²b⁻⁴."),
  num(S`Evaluate $\left(0.0016\right)^{\frac14}$ (decimal).`, 0.2, "0.2⁴ = 0.0016.", null),
  n4(S`Evaluate $(0.027)^{-\frac13}$ (four decimals).`, Math.round((10 / 3) * 10000) / 10000, "(0.3)⁻¹."),
  ms(S`Select every TRUE statement.`, [S`$\left(a^{\frac12}\right)^{2}=a$ for $a\ge0$`, S`$a^{\frac12}+a^{\frac12}=a$`, S`$8^{\frac13}\times8^{\frac23}=8$`, S`$x^{\frac23}=\sqrt[3]{x^{2}}$`], [0, 2, 3], "2√a ≠ a in general."),
  tf(S`$\left(16^{\frac12}\right)^{\frac12}=2$.`, true, "√4."),
  n2("The graph shows y = x^(3/2). Enter y at x = 6 (two decimals).", 6 ** 1.5, "6√6.", eDoc([{ f: (x) => x ** 1.5, a: 0, color: "violet" }], { view: { xmin: -0.5, xmax: 8, ymin: -1, ymax: 24 }, step: { x: 1, y: 2 }, points: [P(4, 8, "(4, 8)"), P(6, 14.7, "(6, ?)")] })),
  num("From the same graph of y = x^(3/2), enter the x-value where y = 8.", 4, "x^(3/2) = 8 → x = 8^(2/3).", eDoc([{ f: (x) => x ** 1.5, a: 0, color: "violet" }], { view: { xmin: -0.5, xmax: 8, ymin: -1, ymax: 24 }, step: { x: 1, y: 2 }, lines: [{ m: 0, b: 8, color: "green", dash: true }] })),
  n2(S`A cube has surface area $150$ cm$^2$. Find its volume using $V=\left(\frac{A}{6}\right)^{\frac32}$.`, 125, "25^(3/2)."),
  n2(S`A sphere-shaped tank needs $V$ litres. If its radius is $r=\left(\frac{3V}{4\pi}\right)^{\frac13}$, enter $r$ for $V=500$ (two decimals).`, Math.cbrt((3 * 500) / (4 * Math.PI)), "Cube root."),
  num(S`Evaluate $\frac{9^{\frac32}-4^{\frac32}}{5^{0}}$.`, 19, "27 − 8."),
  num(S`Find $n$: $\sqrt{2}\times\sqrt[3]{2}=2^{n}$ (four decimals).`, Math.round((5 / 6) * 10000) / 10000, "1/2 + 1/3 = 5/6."),
  mc("The diagram shows 2^(1/2) · 2^(1/2) · 2^(1/2) · 2^(1/2). What is the product?", "4", ["2", "√8", "16"], "2^2.", stripSvg([{ label: "factors", items: ["2^½", "2^½", "2^½", "2^½"] }])),
  num(S`Evaluate $\left(\frac{1}{16}\right)^{-\frac14}+\left(\frac{1}{27}\right)^{-\frac13}$.`, 5, "2 + 3."),
  num(S`If $x^{\frac23}=9$ and $x>0$, find $x$.`, 27, "x = 9^(3/2)."),
  num(S`If $x^{-\frac12}=\frac15$, find $x$.`, 25, "√x = 5.", stripSvg([{ label: "x^(−1/2) = 1/5", items: ["√x", "=", "5"] }])),
];

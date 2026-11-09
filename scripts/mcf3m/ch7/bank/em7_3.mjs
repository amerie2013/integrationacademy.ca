// 7.3 Rational Exponents — 20 easy + 20 medium
import { mc, ms, num, tf, fill, stripSvg, eDoc, P, n2, n4 } from "./ek.mjs";
const S = String.raw;
const roots = eDoc([{ f: (x) => Math.sqrt(x), a: 0, color: "violet" }], { view: { xmin: -2, xmax: 70, ymin: -0.5, ymax: 9 }, step: { x: 8, y: 1 }, points: [P(64, 8, "(64, ?)")] });

export const E = [
  num(S`Evaluate $25^{\frac12}$.`, 5, "√25."),
  num(S`Evaluate $100^{\frac12}$.`, 10, "√100."),
  num(S`Evaluate $8^{\frac13}$.`, 2, "∛8."),
  num(S`Evaluate $1000^{\frac13}$.`, 10, "∛1000."),
  num(S`Evaluate $16^{\frac14}$.`, 2, "⁴√16."),
  num(S`Evaluate $32^{\frac15}$.`, 2, "⁵√32."),
  num(S`Evaluate $4^{\frac32}$.`, 8, "2³."),
  num(S`Evaluate $9^{\frac32}$.`, 27, "3³."),
  num(S`Evaluate $8^{\frac23}$.`, 4, "2²."),
  n4(S`Evaluate $4^{-\frac12}$ (decimal).`, 0.5, "1/2."),
  mc(S`$x^{\frac13}$ means …`, S`$\sqrt[3]{x}$`, [S`$\frac x3$`, S`$x^3$`, S`$3x$`], "Cube root."),
  mc(S`In $b^{\frac mn}$, the denominator $n$ tells you …`, "which root to take", ["the power", "what to multiply by", "the reciprocal"], "Root."),
  tf(S`$49^{\frac12}=24.5$.`, false, "It is 7."),
  tf(S`$(-8)^{\frac13}=-2$.`, true, "(−2)³ = −8."),
  fill(S`$b^{\frac12}$ is the square ____ of $b$.`, ["root"], "√b."),
  num("The graph shows y = x^(1/2). Enter y at x = 64.", 8, "√64.", roots),
  mc("Using the graph of y = x^(1/2), which point is on it?", "(64, 8)", ["(64, 32)", "(8, 64)", "(64, 4)"], "√64 = 8.", roots),
  num(S`Evaluate $81^{\frac12}\times81^{\frac14}$ (as a whole number).`, 27, "9 × 3."),
  num(S`Evaluate $27^{\frac13}+16^{\frac12}$.`, 7, "3 + 4."),
  n2(S`Evaluate $2^{\frac12}$ to two decimals.`, Math.SQRT2, "√2."),
];

export const M = [
  num(S`Evaluate $125^{\frac23}$.`, 25, "5²."),
  num(S`Evaluate $16^{\frac54}$.`, 32, "2⁵."),
  num(S`Evaluate $32^{\frac45}$.`, 16, "2⁴."),
  n4(S`Evaluate $27^{-\frac23}$ (four decimals).`, Math.round((1 / 9) * 10000) / 10000, "1/9."),
  n4(S`Evaluate $16^{-\frac34}$ (decimal).`, 0.125, "1/8."),
  n4(S`Evaluate $\left(\frac{9}{25}\right)^{\frac12}$ (decimal).`, 0.6, "3/5."),
  n4(S`Evaluate $\left(\frac{1}{8}\right)^{-\frac23}$.`, 4, "8^(2/3)."),
  num(S`Evaluate $7^{\frac13}\times7^{\frac53}$.`, 49, "7²."),
  num(S`Evaluate $\left(5^{\frac14}\right)^{8}$.`, 25, "5²."),
  num(S`Evaluate $\frac{6^{\frac52}}{6^{\frac12}}$.`, 36, "6²."),
  mc(S`Simplify $\left(x^{\frac34}\right)^{4}$.`, S`$x^3$`, [S`$x^{\frac{19}{4}}$`, S`$x^{\frac{3}{16}}$`, S`$x^{4}$`], "3/4 × 4."),
  mc(S`Write $\sqrt[5]{a^{2}}$ as a power.`, S`$a^{\frac25}$`, [S`$a^{\frac52}$`, S`$a^{10}$`, S`$a^{-\frac25}$`], "Root 5, power 2."),
  ms(S`Select every expression equal to $4$.`, [S`$16^{\frac12}$`, S`$64^{\frac13}$`, S`$8^{\frac23}$`, S`$2^{\frac12}\times2^{\frac32}$`, S`$32^{\frac25}$`], [0, 1, 2, 3, 4], "All equal 4."),
  tf(S`$(-64)^{\frac12}$ is a real number.`, false, "Even root of a negative."),
  fill(S`$b^{\frac mn}=\left(\sqrt[n]{b}\right)^{\square}$. The missing letter is ____.`, ["m"], "Power."),
  mc("The diagram shows the steps for 81^(3/4). Which value is the result?", "27", ["9", "243", "60.75"], "⁴√81 = 3, then cube.", stripSvg([{ label: "⁴√81", items: ["3"], color: "green" }, { label: "cube", items: ["3", "3", "3"] }])),
  num("Using the diagram, enter ⁴√81.", 3, "3⁴ = 81.", stripSvg([{ label: "⁴√81", items: ["?"], color: "green" }, { label: "cube", items: ["?", "?", "?"] }])),
  num(S`Solve $4^{x}=8$; enter $x$ as a decimal.`, 1.5, "2^(2x) = 2³."),
  n2(S`A square has area $45$ cm$^2$. Enter its side length $45^{\frac12}$ (two decimals).`, Math.sqrt(45), "√45."),
  n2(S`A cube has volume $200$ cm$^3$. Enter its edge $200^{\frac13}$ (two decimals).`, Math.cbrt(200), "∛200."),
];

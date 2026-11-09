// 7.2 Zero and Negative Exponents — 20 easy + 20 medium
import { mc, ms, num, tf, fill, stripSvg, rep, eDoc, P, n4 } from "./ek.mjs";
const S = String.raw;
const two = eDoc([(x) => 2 ** x], { view: { xmin: -3.5, xmax: 3.5, ymin: -0.5, ymax: 9 }, step: { x: 1, y: 1 }, points: [P(-3, 0.125, "(−3, ?)"), P(0, 1, false), P(3, 8, false)] });

export const E = [
  num(S`Evaluate $9^0$.`, 1, "b⁰ = 1."),
  num(S`Evaluate $(-15)^0$.`, 1, "Base −15."),
  num(S`Evaluate $-15^0$.`, -1, "−(15⁰)."),
  n4(S`Evaluate $2^{-2}$ as a decimal.`, 0.25, "1/4."),
  n4(S`Evaluate $5^{-1}$ as a decimal.`, 0.2, "1/5."),
  n4(S`Evaluate $10^{-3}$ as a decimal.`, 0.001, "1/1000."),
  num(S`Evaluate $\left(\frac12\right)^{-3}$.`, 8, "2³."),
  num(S`Evaluate $\left(\frac13\right)^{-2}$.`, 9, "3²."),
  num(S`Evaluate $4^{-1}\times4^{3}$.`, 16, "4²."),
  num(S`Evaluate $\frac{7^{2}}{7^{3}}\times7$.`, 1, "7⁰."),
  mc(S`$3^{-2}$ equals …`, S`$\frac19$`, [S`$-9$`, S`$-6$`, S`$\frac16$`], "Reciprocal of 3²."),
  mc(S`$x^{-4}$ written with a positive exponent is …`, S`$\frac1{x^4}$`, [S`$-x^4$`, S`$x^{\frac14}$`, S`$4x$`], "Reciprocal."),
  tf(S`A negative exponent always makes the value negative.`, false, "It makes a reciprocal."),
  tf(S`$a^0=1$ for any non-zero $a$.`, true, "Zero exponent."),
  fill(S`$b^{-n}=\frac{1}{b^{\square}}$. The missing letter is ____.`, ["n"], "Reciprocal of bⁿ."),
  n4("The graph shows y = 2ˣ. Enter the y-value at x = −3 (decimal).", 0.125, "1/8.", two),
  mc("Using the graph of y = 2ˣ, what is 2⁰?", "1", ["0", "2", "undefined"], "y-intercept.", two),
  num(S`Evaluate $2^{-1}\times2^{4}$.`, 8, "2³."),
  n4(S`Evaluate $(-2)^{-2}$ as a decimal.`, 0.25, "1/4."),
  num(S`Evaluate $1^{-50}$.`, 1, "1 to any power."),
];

export const M = [
  n4(S`Evaluate $\left(\frac45\right)^{-2}$ as a decimal.`, 1.5625, "(5/4)² = 25/16."),
  num(S`Evaluate $\left(\frac23\right)^{-3}$ as a decimal.`, 3.375, "27/8."),
  n4(S`Evaluate $(-5)^{-3}$ as a decimal.`, -0.008, "−1/125."),
  num(S`Evaluate $\frac{6^{-2}}{6^{-4}}$.`, 36, "6²."),
  num(S`Evaluate $(3^{-2})^{-1}$.`, 9, "3²."),
  num(S`Evaluate $2^{-3}\times2^{-2}\times2^{8}$.`, 8, "2³."),
  n4(S`Evaluate $3^{-1}+3^{-2}$ (four decimals).`, Math.round((1 / 3 + 1 / 9) * 10000) / 10000, "1/3 + 1/9 = 4/9."),
  num(S`Evaluate $\left(2^{-1}+4^{-1}\right)^{-1}$ (four decimals).`, Math.round((4 / 3) * 10000) / 10000, "(3/4)⁻¹.", null, 0.0001),
  mc(S`Simplify $\frac{x^{-2}y^{3}}{x^{4}y^{-1}}$.`, S`$\frac{y^4}{x^6}$`, [S`$\frac{y^2}{x^2}$`, S`$x^6y^4$`, S`$\frac{x^2}{y^4}$`], "x^(−6) y⁴."),
  mc(S`Simplify $(2m^{-3})^{-2}$.`, S`$\frac{m^6}{4}$`, [S`$4m^6$`, S`$-4m^{6}$`, S`$\frac{4}{m^6}$`], "2⁻² m⁶."),
  ms(S`Select every expression equal to $\frac1{16}$.`, [S`$2^{-4}$`, S`$4^{-2}$`, S`$16^{-1}$`, S`$(-4)^{-2}$`, S`$-2^{4}$`], [0, 1, 2, 3], "−2⁴ = −16."),
  tf(S`$\left(\frac ab\right)^{-1}=\frac ba$.`, true, "Reciprocal."),
  tf(S`$5x^{-2}=\frac1{5x^2}$.`, false, "Only x has the −2: 5/x²."),
  fill(S`$\left(\frac{a}{b}\right)^{-n}=\left(\frac{\square}{a}\right)^{n}$. The missing letter is ____.`, ["b"], "Flip."),
  mc("The diagram shows the factors left after dividing 5² by 5⁵. Which power is it?", S`$5^{-3}$`, [S`$5^{3}$`, S`$5^{-7}$`, S`$5^{7}$`], "2 − 5.", stripSvg([{ label: "top 5²", items: rep("5", 2), color: "gray" }, { label: "bottom 5⁵", items: rep("5", 5), colors: [...rep("gray", 2), ...rep("violet", 3)] }])),
  n4("Using the same diagram, enter 5² ÷ 5⁵ as a decimal.", 0.008, "1/125.", stripSvg([{ label: "top 5²", items: rep("5", 2), color: "gray" }, { label: "bottom 5⁵", items: rep("5", 5), colors: [...rep("gray", 2), ...rep("violet", 3)] }])),
  num(S`Find $n$: $3^{n}=\frac1{81}$.`, -4, "81 = 3⁴."),
  num(S`Find $n$: $10^{n}=0.0001$.`, -4, "10⁻⁴."),
  num(S`Evaluate $\frac{4^{0}+4^{-1}}{4^{-2}}$.`, 20, "(1 + 1/4) × 16."),
  num(S`Evaluate $\left(\frac{1}{10}\right)^{-2}-10^{0}$.`, 99, "100 − 1."),
];

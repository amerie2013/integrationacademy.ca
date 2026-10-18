// 4.1 Exponent Laws and Integer Exponents — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const pow = (b, pts) => planeDoc({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => b ** x, color: "violet" }], points: pts, step: { x: 1, y: 1 } });

export const E = [
  num(String.raw`Evaluate $7^0$.`, 1, "Any nonzero base to the 0 is 1."),
  mc(String.raw`Evaluate $3^{-2}$.`, String.raw`$\frac19$`, [String.raw`$-9$`, String.raw`$-6$`, String.raw`$\frac16$`], "1/3²."),
  mc(String.raw`Evaluate $2^{-4}$.`, String.raw`$\frac1{16}$`, [String.raw`$-16$`, String.raw`$-8$`, String.raw`$\frac18$`], "1/2⁴."),
  num(String.raw`Evaluate $\left(\tfrac12\right)^{-3}$.`, 8, "Flip: 2³."),
  num(String.raw`Evaluate $10^{-2}$ as a decimal.`, 0.01, "1/100.", null, 1e-9),
  mx(String.raw`Simplify $x^3\cdot x^5$.`, "x^8", "Add exponents."),
  mx(String.raw`Simplify $\dfrac{y^9}{y^4}$.`, "y^5", "Subtract exponents."),
  mx(String.raw`Simplify $(a^3)^4$.`, "a^12", "Multiply exponents."),
  tf(String.raw`$5^{-1}$ is a negative number.`, false, "It is 1/5."),
  num(String.raw`Evaluate $(-2)^4$.`, 16, "Even power of a negative."),
  num(String.raw`Evaluate $-2^4$.`, -16, "Only 2 is raised to the power."),
  num(String.raw`Evaluate $4^{-1}$ as a decimal.`, 0.25, "1/4.", null, 1e-9),
  mx(String.raw`Simplify $x^{-2}\cdot x^{6}$.`, "x^4", "−2 + 6."),
  tf(String.raw`$b^0=1$ for every nonzero $b$.`, true, "From b^m/b^m."),
  num(String.raw`Evaluate $(-9)^0$.`, 1, "Zero exponent."),
  mc(String.raw`Which equals $\frac{1}{x^5}$?`, String.raw`$x^{-5}$`, [String.raw`$-x^5$`, String.raw`$x^{1/5}$`, String.raw`$5x$`], "Definition of a negative exponent."),
  num(String.raw`Evaluate $\left(\tfrac23\right)^{0}+1$.`, 2, "1 + 1."),
  num("Read the graph of y = 2ˣ: what is y when x = −1 (decimal)?", 0.5, "2⁻¹ = ½.", pow(2, [P(-1, 0.5), P(0, 1), P(1, 2)]), 1e-9),
  num("Read the graph of y = 3ˣ: what is y at x = 2?", 9, "3².", pow(3, [P(2, 9), P(0, 1)])),
  mx(String.raw`Simplify $(2x)^3$.`, "8*x^3", "2³x³."),
];

export const M = [
  mc(String.raw`Evaluate $\left(\tfrac35\right)^{-2}$.`, String.raw`$\frac{25}9$`, [String.raw`$\frac9{25}$`, String.raw`$-\frac9{25}$`, String.raw`$\frac{10}{6}$`], "Flip, then square."),
  mc(String.raw`Evaluate $3^{-1}+3^{-2}$.`, String.raw`$\frac49$`, [String.raw`$\frac29$`, String.raw`$3^{-3}$`, String.raw`$\frac1{27}$`], "⅓ + 1/9."),
  mx(String.raw`Simplify $(x^{-3})^{-2}$.`, "x^6", "Multiply exponents."),
  mx(String.raw`Simplify $\dfrac{a^2}{a^{-3}}$.`, "a^5", "2 − (−3)."),
  mx(String.raw`Simplify $(3x^{-1})^{-2}$ (any equivalent form).`, "x^2/9", "3⁻²x²."),
  num(String.raw`Evaluate $2^{-3}\cdot2^{5}$.`, 4, "2²."),
  num(String.raw`Evaluate $\dfrac{5^{-2}}{5^{-4}}$.`, 25, "5²."),
  num(String.raw`Solve $2^x=\frac18$.`, -3, "1/8 = 2⁻³."),
  num(String.raw`Solve $10^x=0.001$.`, -3, "10⁻³."),
  tf(String.raw`$(a+b)^{-1}=a^{-1}+b^{-1}$ for all positive $a$, $b$.`, false, "e.g. a = b = 1: ½ ≠ 2."),
  ms(String.raw`Which equal $\frac1{16}$? Select all.`, [String.raw`$4^{-2}$`, String.raw`$2^{-4}$`, String.raw`$16^{-1}$`, String.raw`$-16$`, String.raw`$\left(\tfrac12\right)^{4}$`], [0, 1, 2, 4], "All except −16."),
  mx(String.raw`Simplify $x^4y^{-2}\cdot x^{-1}y^{5}$ (any equivalent form).`, "x^3*y^3", "Add the exponents of each base."),
  num(String.raw`Evaluate $\left(\tfrac14\right)^{-2}\cdot2^{-3}$.`, 2, "16 · 1/8."),
  mc(String.raw`Simplify $\dfrac{6x^{-2}}{2x^{3}}$.`, String.raw`$\frac{3}{x^5}$`, [String.raw`$3x$`, String.raw`$\frac{3}{x}$`, String.raw`$3x^5$`], "x^(−2−3)."),
  num(String.raw`Evaluate $(-3)^{-3}$ (3 decimals).`, -1 / 27, "−1/27.", null, 0.0005),
  tf(String.raw`$-4^{-2}=-\frac1{16}$.`, true, "−(4⁻²)."),
  num(String.raw`Evaluate $\left(2^{-1}\right)^{-3}$.`, 8, "2³."),
  mx(String.raw`Simplify $(m^2n^{-1})^3(mn^2)$ (any equivalent form).`, "m^7*n^(-1)", "m⁶n⁻³·mn² = m⁷n⁻¹."),
  num("The graph shows y = (½)ˣ. What is y at x = −3?", 8, "(½)⁻³ = 8.", pow(0.5, [P(-3, 8), P(0, 1), P(1, 0.5)])),
  num("The graph shows y = 2ˣ. For which x is y = 1/4?", -2, "2⁻² = ¼.", pow(2, [P(-2, 0.25), P(0, 1)])),
];

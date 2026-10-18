// 4.1 Exponent Laws and Integer Exponents — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const pow = (b, pts, view = { xmin: -5, xmax: 5, ymin: -1, ymax: 12 }) => planeDoc({ view, curves: [{ f: (x) => b ** x, color: "violet" }], points: pts, step: { x: 1, y: 1 } });

export const TOPIC = "4.1 Exponent Laws and Integer Exponents";
export const Q = [
  num(String.raw`Evaluate $\left(2^{-1}+3^{-1}\right)^{-2}$ (2 decimals).`, 36 / 25, "(5/6)⁻² = 36/25.", null, 0.006),
  num(String.raw`Evaluate $\left(4^{-1}-8^{-1}\right)^{-1}$.`, 8, "¼ − ⅛ = ⅛."),
  mc(String.raw`Simplify $\dfrac{(2x^{-3}y^2)^{-2}}{(4xy^{-1})^{-1}}$.`, String.raw`$\frac{x^7}{y^5}$`, [String.raw`$\frac{x^5}{y^3}$`, String.raw`$\frac{4x^7}{y^5}$`, String.raw`$x^7y^5$`], "¼x⁶y⁻⁴ · 4xy⁻¹."),
  num(String.raw`Solve $2^{x-1}=\frac1{16}$.`, -3, "x − 1 = −4."),
  num(String.raw`Solve $\left(\tfrac13\right)^x=27$.`, -3, "3⁻ˣ = 3³."),
  tf(String.raw`$2^{-10}<10^{-3}$.`, true, "1/1024 < 1/1000."),
  num(String.raw`Evaluate $\dfrac{3^{-2}+3^{-1}}{3^{-3}}$.`, 12, "(1/9 + 3/9) × 27."),
  mx(String.raw`Simplify $\left(\dfrac{a^{-2}b^3}{a^4b^{-1}}\right)^{-1}$ (any equivalent form).`, "a^6/b^4", "Inside: a⁻⁶b⁴; then invert."),
  num("The graph of y = 2ˣ passes through (k, 1/32). Find k.", -5, "2⁻⁵ = 1/32.", pow(2, [P(-5, 1 / 32, "(k, 1/32)"), P(0, 1)])),
  num("Points A(−2, a) and B(3, b) lie on y = 2ˣ. Find b ÷ a.", 32, "2³ ÷ 2⁻² = 2⁵.", pow(2, [P(-2, 0.25, "A"), P(3, 8, "B")])),
  ms(String.raw`Which are equal to $2^{-6}$? Select all.`, [String.raw`$4^{-3}$`, String.raw`$8^{-2}$`, String.raw`$\frac{1}{64}$`, String.raw`$-64$`, String.raw`$\left(\tfrac12\right)^{6}$`], [0, 1, 2, 4], "All are 1/64 except −64."),
  num(String.raw`For what integer $n$ is $\dfrac{2^n\cdot4^3}{8^2}=\frac12$?`, -1, "2ⁿ⁺⁶⁻⁶ = 2⁻¹."),
  num(String.raw`Evaluate $\dfrac{10^{-2}\cdot10^{5}}{10^{-1}}$.`, 10000, "10⁴."),
  mc(String.raw`Which is the largest?`, String.raw`$\left(\tfrac12\right)^{-4}$`, [String.raw`$2^{-4}$`, String.raw`$4^{-1}$`, String.raw`$\left(\tfrac14\right)^{1}$`], "16 versus small fractions."),
  num(String.raw`If $3^x=5$, what is $3^{-2x}$ (3 decimals)?`, 0.04, "(3ˣ)⁻² = 1/25.", null, 0.0005),
  num(String.raw`If $2^a=3$, evaluate $2^{a+2}$.`, 12, "2ᵃ · 4."),
  num("The graph shows y = (⅓)ˣ. What is y at x = −2?", 9, "(⅓)⁻² = 9.", pow(1 / 3, [P(-2, 9), P(0, 1)])),
  tf(String.raw`For every positive $x$, $x^{-1}<x$.`, false, "x = ½: x⁻¹ = 2 > ½."),
  num(String.raw`Evaluate $(-1)^{-7}+(-1)^{-8}$.`, 0, "−1 + 1."),
  num("y = 4ˣ is graphed. Find the y-value at x = −1.5 (3 decimals).", 0.125, "4^(−1.5) = 1/8.", pow(4, [P(-1.5, 0.125), P(0, 1)], { xmin: -3, xmax: 2, ymin: -0.5, ymax: 8 }), 0.0005),
];

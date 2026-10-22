// 9.1 Exponents and Radicals — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;

export const E = [
  mc(S`Simplify $k^5\times k^4$.`, S`$k^9$`, [S`$k^{20}$`, S`$k^1$`, S`$2k^9$`], "Add the exponents."),
  mc(S`Simplify $w^{10}\div w^{2}$.`, S`$w^8$`, [S`$w^5$`, S`$w^{12}$`, S`$w^{20}$`], "Subtract the exponents."),
  mc(S`Simplify $(r^4)^3$.`, S`$r^{12}$`, [S`$r^7$`, S`$r^{64}$`, S`$3r^4$`], "Multiply the exponents."),
  num(S`Evaluate $9^0$.`, 1, "Any nonzero number to the power 0 is 1."),
  num(S`Evaluate $4^{-2}$ as a decimal.`, 0.0625, "1/16.", null, 0.0001),
  num(S`Evaluate $25^{1/2}$.`, 5, "Square root of 25."),
  num(S`Evaluate $1000^{1/3}$.`, 10, "Cube root of 1000."),
  num(S`Evaluate $4^{3/2}$.`, 8, "(√4)³ = 2³."),
  mc(S`$a^{-1}$ is equal to:`, S`$\frac1a$`, [S`$-a$`, S`$a-1$`, S`$\sqrt a$`], "A negative exponent means reciprocal."),
  mc(S`$x^{1/2}$ is equal to:`, S`$\sqrt x$`, [S`$\frac x2$`, S`$x^2$`, S`$\frac1{x^2}$`], "Power ½ is the square root."),
  mc(S`Simplify $\sqrt{12}$.`, S`$2\sqrt3$`, [S`$3\sqrt2$`, S`$4\sqrt3$`, S`$6\sqrt2$`], "12 = 4 × 3."),
  mc(S`Simplify $\sqrt{45}$.`, S`$3\sqrt5$`, [S`$5\sqrt3$`, S`$9\sqrt5$`, S`$5\sqrt9$`], "45 = 9 × 5."),
  tf(S`$\sqrt{16+9}=\sqrt{16}+\sqrt9$.`, false, "√25 = 5, but 4 + 3 = 7."),
  tf(S`$(2x)^3=8x^3$.`, true, "Each factor is cubed."),
  fill(S`Rationalising $\frac{1}{\sqrt2}$ gives $\frac{\sqrt2}{\_\_\_}$.`, ["2"], "Multiply top and bottom by √2."),
  num(S`Solve $2^x=64$.`, 6, "2⁶ = 64."),
  num(S`Solve $3^{x}=\frac19$.`, -2, "3⁻² = 1/9."),
  mc("The graph shows y = 2ˣ. What is the value of y when x = −1?", "0.5", ["−2", "−0.5", "2"], "2⁻¹ = ½.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 2 ** x }], points: [P(-1, 0.5, "", "red")], step: { x: 1, y: 1 } })),
  ms("Which are equal to 1/8? Select all.", [S`$2^{-3}$`, S`$8^{-1}$`, S`$(-2)^3$`, S`$\left(\frac12\right)^3$`], [0, 1, 3], "(−2)³ = −8."),
  mc("The graph shows y = x^(1/2). Read off the value at x = 9.", "3", ["4.5", "81", "18"], "√9 = 3.", planeDoc({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, b: 10 }], points: [P(9, 3, "", "red")], step: { x: 1, y: 1 } })),
];

export const M = [
  mc(S`Simplify $\dfrac{12x^7y^2}{4x^3y^5}$.`, S`$\dfrac{3x^4}{y^3}$`, [S`$3x^4y^3$`, S`$\dfrac{8x^4}{y^3}$`, S`$\dfrac{3x^{10}}{y^7}$`], "Divide numbers; subtract exponents."),
  mc(S`Simplify $(5a^3b^{-1})^2$.`, S`$\dfrac{25a^6}{b^2}$`, [S`$\dfrac{10a^6}{b^2}$`, S`$25a^5b$`, S`$\dfrac{25a^9}{b}$`], "Square each factor."),
  num(S`Evaluate $\left(\frac{4}{9}\right)^{-1/2}$ as a decimal.`, 1.5, "(9/4)^(1/2) = 3/2.", null, 0.001),
  num(S`Evaluate $16^{-3/4}$ as a decimal.`, 0.125, "1/16^(3/4) = 1/8.", null, 0.0001),
  num(S`Evaluate $125^{2/3}+8^{2/3}$.`, 29, "25 + 4."),
  mc(S`Write $\dfrac{1}{\sqrt[3]{x^2}}$ as a power of $x$.`, S`$x^{-2/3}$`, [S`$x^{-3/2}$`, S`$x^{2/3}$`, S`$x^{-6}$`], "Cube root of x² is x^(2/3)."),
  mc(S`Simplify $\sqrt{80}-\sqrt{20}$.`, S`$2\sqrt5$`, [S`$\sqrt{60}$`, S`$6\sqrt5$`, S`$4\sqrt5$`], "4√5 − 2√5."),
  mc(S`Simplify $\sqrt{3}\times\sqrt{15}$.`, S`$3\sqrt5$`, [S`$\sqrt{18}$`, S`$5\sqrt3$`, S`$45$`], "√45 = 3√5."),
  mc(S`Rationalise $\dfrac{9}{\sqrt3}$.`, S`$3\sqrt3$`, [S`$9\sqrt3$`, S`$\sqrt3$`, S`$3$`], "9√3/3."),
  mc(S`Rationalise $\dfrac{2}{\sqrt5-1}$.`, S`$\dfrac{\sqrt5+1}{2}$`, [S`$\dfrac{\sqrt5-1}{2}$`, S`$\sqrt5+1$`, S`$\dfrac{2\sqrt5+2}{6}$`], "Denominator 5 − 1 = 4."),
  num(S`Solve $4^{x}=32$.`, 2.5, "2^(2x) = 2⁵.", null, 0.001),
  num(S`Solve $9^{x-1}=3^{x+4}$.`, 6, "2x − 2 = x + 4."),
  num(S`Solve $\left(\frac15\right)^x=125$.`, -3, "5^(−x) = 5³."),
  num(S`Solve $8^{2x}=16^{x+1}$.`, 2, "6x = 4x + 4."),
  tf(S`$(-27)^{1/3}=-3$.`, true, "(−3)³ = −27."),
  tf(S`$\sqrt{x^2}=x$ for all real $x$.`, false, "√(x²) = |x|."),
  mc("The graph shows y = 2ˣ and y = 8. They meet at x = ?", "3", ["4", "2.5", "8"], "2³ = 8.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 12 }, curves: [{ f: (x) => 2 ** x }], lines: [{ m: 0, b: 8, color: "amber", dash: true }], points: [P(3, 8, "", "red")], step: { x: 1, y: 1 } })),
  ms("Which equal 4√2? Select all.", [S`$\sqrt{32}$`, S`$2\sqrt8$`, S`$\sqrt{16}\sqrt2$`, S`$\sqrt{8}$`], [0, 1, 2], "√8 = 2√2."),
  num(S`Solve $5^{x}\cdot25=5^{7}$.`, 5, "5^(x+2) = 5⁷."),
  mc("The two curves y = 9ˣ and y = 27^(x−1) cross. At what x?", "3", ["1", "2", "−3"], "2x = 3x − 3.", planeDoc({ view: { xmin: 0, xmax: 4, ymin: -50, ymax: 900 }, curves: [{ f: (x) => 9 ** x }, { f: (x) => 27 ** (x - 1), color: "amber" }], points: [P(3, 729, "", "red")], step: { x: 1, y: 100 } })),
];

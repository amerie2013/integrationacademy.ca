// 4.3 Simplifying Expressions with Exponents — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const meet = (f, g, x, view, step = { x: 1, y: 2 }) => planeDoc({ view, curves: [{ f, color: "violet" }, { f: g, color: "amber" }], points: [P(x, f(x))], step });

export const TOPIC = "4.3 Simplifying Expressions with Exponents";
export const Q = [
  mc(String.raw`Simplify $\left(64x^9y^{-6}\right)^{2/3}$ for $x,y>0$.`, String.raw`$\frac{16x^6}{y^4}$`, [String.raw`$\frac{16x^6}{y^9}$`, String.raw`$16x^6y^4$`, String.raw`$\frac{4x^6}{y^4}$`], "64^(2/3) = 16; 9·⅔ = 6; −6·⅔ = −4."),
  num(String.raw`Solve $4^{2x+1}=8^{x+2}$.`, 4, "2^(4x+2) = 2^(3x+6)."),
  num(String.raw`Solve $\left(\tfrac19\right)^x=27^{x+5}$.`, -3, "3^(−2x) = 3^(3x+15)."),
  mx(String.raw`Expand $\left(x^{1/2}-x^{-1/2}\right)^2$.`, "x-2+1/x", "x − 2 + x⁻¹.", planeDoc({ view: { xmin: 0, xmax: 6, ymin: -1, ymax: 6 }, curves: [{ f: (x) => (Math.sqrt(x) - 1 / Math.sqrt(x)) ** 2, a: 0.15, color: "violet" }], points: [P(1, 0)], step: { x: 1, y: 1 } })),
  num(String.raw`Evaluate $2^{x+3}-2^x$ at $x=1$.`, 14, "2^x(8 − 1) = 7 · 2."),
  mc(String.raw`Factor $3^{x+2}+3^x$.`, String.raw`$10\cdot3^x$`, [String.raw`$3^{2x+2}$`, String.raw`$4\cdot3^x$`, String.raw`$9\cdot3^{2x}$`], "3^x(9 + 1)."),
  num(String.raw`Solve $3^{x+1}+3^x=108$.`, 3, "4·3^x = 108 → 3^x = 27."),
  num("The curves y = 4ˣ and y = 8^(x − 1) meet once. Find the x-coordinate.", 3, "2^(2x) = 2^(3x−3).", meet((x) => 4 ** x, (x) => 8 ** (x - 1), 3, { xmin: -1, xmax: 4, ymin: -5, ymax: 80 }, { x: 0.5, y: 10 })),
  tf(String.raw`$\sqrt{x^6}=x^3$ for every real number $x$.`, false, "For x = −1: √1 = 1 ≠ −1. It equals |x|³."),
  num(String.raw`Evaluate $\left(x^{2/3}y^{-1/2}\right)^6$ at $x=2$, $y=4$.`, 0.25, "x⁴y⁻³ = 16/64.", null, 1e-9),
  num(String.raw`Find the positive solution of $2^{x^2}=16$.`, 2, "x² = 4."),
  mx(String.raw`Simplify $\left(a^{3/2}b^{-1}\right)\left(a^{-1/2}b^3\right)^2$.`, "sqrt(a)*b^5", "a^(3/2 − 1)b^(−1 + 6)."),
  num("y = 2ˣ and y = (¼)^(x − 3) meet once. Find the x-coordinate.", 2, "2^x = 2^(−2x + 6).", meet((x) => 2 ** x, (x) => 0.25 ** (x - 3), 2, { xmin: -1, xmax: 5, ymin: -2, ymax: 20 })),
  num(String.raw`For which $k$ is $9^{x+k}=3^{2x+5}$ for every $x$?`, 2.5, "2x + 2k = 2x + 5."),
  ms(String.raw`For $x>0$, which simplify to $x$? Select all.`, [String.raw`$(x^{1/3})^3$`, String.raw`$x^{1/2}\cdot x^{1/2}$`, String.raw`$x^{3/4}\div x^{-1/4}$`, String.raw`$(x^4)^{1/2}$`, String.raw`$x^{1/2}+x^{1/2}$`], [0, 1, 2], "(x⁴)^(1/2) = x²; the sum is 2√x."),
  num(String.raw`Evaluate $8^{2/3}\cdot16^{-1/4}\cdot4^{1/2}$.`, 4, "4 · ½ · 2."),
  num(String.raw`Solve $5^{x-2}=\frac1{125}$.`, -1, "x − 2 = −3."),
  num("The curve y = 9^(x/2) meets the line y = 27. Find x.", 3, "9^(x/2) = 3^x = 27.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -2, ymax: 40 }, curves: [{ f: (x) => 9 ** (x / 2), color: "violet" }], lines: [{ m: 0, b: 27, color: "amber", dash: true }], points: [P(3, 27)], step: { x: 0.5, y: 5 } })),
  mc(String.raw`Which is equivalent to $2^x\cdot3^x$?`, String.raw`$6^x$`, [String.raw`$5^x$`, String.raw`$6^{2x}$`, String.raw`$5^{2x}$`], "(2·3)^x."),
  num(String.raw`Evaluate $\dfrac{2^{n+3}}{2^n}$ (it does not depend on $n$).`, 8, "2³."),
];

// 4.3 Simplifying Expressions with Exponents — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const two = (f, g, pt, view) => planeDoc({ view, curves: [{ f, color: "violet" }, { f: g, color: "amber" }], points: [pt], step: { x: 0.5, y: 2 } });

export const E = [
  mx(String.raw`Simplify $x^{1/3}\cdot x^{2/3}$.`, "x", "⅓ + ⅔ = 1."),
  mx(String.raw`Simplify $(x^8)^{1/4}$.`, "x^2", "8 × ¼."),
  mx(String.raw`Simplify $\dfrac{y^{3/2}}{y^{1/2}}$.`, "y", "3/2 − 1/2."),
  mx(String.raw`Simplify $(9x^2)^{1/2}$ for $x>0$.`, "3*x", "√9 · x."),
  mx(String.raw`Simplify $x^{1/2}\cdot x^{1/2}$.`, "x", "½ + ½."),
  mc(String.raw`Which equals $8^x$?`, String.raw`$2^{3x}$`, [String.raw`$2^{x+3}$`, String.raw`$3^{2x}$`, String.raw`$4^{2x}$`], "8 = 2³."),
  mc(String.raw`Which equals $9^x$?`, String.raw`$3^{2x}$`, [String.raw`$3^{x+2}$`, String.raw`$3^{x/2}$`, String.raw`$2^{3x}$`], "9 = 3²."),
  num(String.raw`Evaluate $(a^{1/2})^2$ at $a=6$.`, 6, "It equals a."),
  mx(String.raw`Simplify $x^{3/4}\cdot x^{1/4}$.`, "x", "¾ + ¼."),
  tf(String.raw`$(x^{1/2})^4=x^2$.`, true, "½ × 4 = 2."),
  mx(String.raw`Simplify $(x^2y)^3$.`, "x^6*y^3", "Multiply each exponent by 3."),
  mc(String.raw`Write $\sqrt x\cdot x$ as a single power.`, String.raw`$x^{3/2}$`, [String.raw`$x^{1/2}$`, String.raw`$x^2$`, String.raw`$x^{2/3}$`], "½ + 1."),
  num(String.raw`Solve $4^x=16$.`, 2, "4² = 16."),
  num(String.raw`Solve $27^x=3$ (4 decimals).`, 1 / 3, "3^(3x) = 3¹.", null, 0.0005),
  mx(String.raw`Simplify $(8x^3)^{1/3}$.`, "2*x", "∛8 · x."),
  tf(String.raw`$x^{1/2}+x^{1/2}=x$.`, false, "It is 2x^(1/2)."),
  mc(String.raw`Write $25^x$ as a power of 5.`, String.raw`$5^{2x}$`, [String.raw`$5^{x+2}$`, String.raw`$5^{x/2}$`, String.raw`$5^{25x}$`], "25 = 5²."),
  num(String.raw`Evaluate $x^{2/3}\cdot x^{1/3}$ at $x=11$.`, 11, "It equals x."),
  num("The violet and amber curves (y = 4ˣ and y = 2^(2x)) coincide. Find y at x = 1.5.", 8, "2³.", two((x) => 4 ** x, (x) => 2 ** (2 * x), P(1.5, 8), { xmin: -1, xmax: 2, ymin: -1, ymax: 16 })),
  num("y = 8ˣ and y = 2^(3x) are the same curve. Find y at x = ⅔.", 4, "8^(2/3) = 4.", two((x) => 8 ** x, (x) => 2 ** (3 * x), P(2 / 3, 4), { xmin: -1, xmax: 1.2, ymin: -1, ymax: 12 })),
];

export const M = [
  mx(String.raw`Simplify $(16x^4)^{3/4}$ for $x>0$.`, "8*x^3", "16^(3/4) = 8."),
  mx(String.raw`Simplify $\left(x^{2/3}y^{-1/3}\right)^3$.`, "x^2/y", "x²y⁻¹."),
  mx(String.raw`Simplify $\dfrac{x^{5/6}}{x^{1/3}}$.`, "sqrt(x)", "5/6 − 2/6 = 1/2: √x."),
  mx(String.raw`Simplify $(27a^6)^{-1/3}$.`, "1/(3*a^2)", "1/(3a²)."),
  mc(String.raw`Write $\sqrt x\cdot\sqrt[3]x$ as a single power.`, String.raw`$x^{5/6}$`, [String.raw`$x^{1/6}$`, String.raw`$x^{2/5}$`, String.raw`$x^{1/5}$`], "½ + ⅓ = 5/6."),
  num(String.raw`Solve $8^x=4$ (4 decimals).`, 2 / 3, "2^(3x) = 2².", null, 0.0005),
  num(String.raw`Solve $9^{x-1}=27$.`, 2.5, "3^(2x−2) = 3³."),
  mc(String.raw`Simplify $\dfrac{4^{x+1}}{2^x}$.`, String.raw`$2^{x+2}$`, [String.raw`$2^{x+1}$`, String.raw`$2^{2x}$`, String.raw`$2^{3x+2}$`], "2^(2x+2−x)."),
  num(String.raw`Evaluate $\dfrac{(x^{3/4})^4}{x^2}$ at $x=5$.`, 5, "x³/x² = x."),
  mx(String.raw`Simplify $\left(a^{-1/2}\right)^{-4}$.`, "a^2", "(−½)(−4) = 2."),
  ms(String.raw`Which equal $2^{6x}$? Select all.`, [String.raw`$4^{3x}$`, String.raw`$8^{2x}$`, String.raw`$64^x$`, String.raw`$16^{2x}$`, String.raw`$(2^x)^6$`], [0, 1, 2, 4], "16^(2x) = 2^(8x)."),
  tf(String.raw`$\left(x^{1/2}y^{1/2}\right)^2=xy$.`, true, "Each exponent doubles."),
  mx(String.raw`Simplify $(x^{1/3})^{-6}$.`, "1/x^2", "x⁻²."),
  num(String.raw`Solve $32^x=2$.`, 0.2, "2^(5x) = 2¹.", null, 1e-9),
  mx(String.raw`Simplify $\left(4x^{-2}\right)^{-1/2}$ for $x>0$.`, "x/2", "4^(−½)x¹."),
  num(String.raw`Evaluate $\left(b^{2/5}\right)^{5/2}$ at $b=13$.`, 13, "It equals b."),
  mc(String.raw`Expand $\left(x^{1/2}+1\right)\left(x^{1/2}-1\right)$.`, String.raw`$x-1$`, [String.raw`$x+1$`, String.raw`$x^{1/4}-1$`, String.raw`$x-2x^{1/2}+1$`], "Difference of squares."),
  num(String.raw`Solve $2^x\cdot4^x=64$.`, 2, "2^(3x) = 2⁶."),
  num("The curves y = (√2)^(2x) and y = 2ˣ coincide. Find y at x = 5.", 32, "2⁵.", two((x) => Math.SQRT2 ** (2 * x), (x) => 2 ** x, P(5, 32), { xmin: -1, xmax: 6, ymin: -2, ymax: 40 })),
  num("y = 27^(x/3) is graphed with y = 3ˣ. Find y at x = 3.", 27, "27^1.", two((x) => 27 ** (x / 3), (x) => 3 ** x, P(3, 27), { xmin: -1, xmax: 4, ymin: -2, ymax: 40 })),
];

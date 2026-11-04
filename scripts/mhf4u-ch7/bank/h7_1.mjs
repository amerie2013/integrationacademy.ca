// 7.1 Equivalent Forms of Exponential Equations — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const TOPIC = "7.1 Equivalent Forms of Exponential Equations";
export const Q = [
  num(S`Solve $5^{x^2-x}=25^{3}$. Enter the positive root.`, 3, "x² − x = 6 ⇒ (x − 3)(x + 2) = 0."),
  num(S`Solve $2^{x^2}=4^{x}\cdot8$. Enter the negative root.`, -1, "x² = 2x + 3 ⇒ (x − 3)(x + 1) = 0."),
  num(S`Solve $2^{x+3}+2^{x+1}=80$.`, 3, "2ˣ(8 + 2) = 80 ⇒ 2ˣ = 8."),
  num(S`Solve $5^{x+1}+5^{x}=750$.`, 3, "6·5ˣ = 750 ⇒ 5ˣ = 125."),
  num(S`Solve $4^{x}-2^{x+1}=0$.`, 1, "2²ˣ = 2ˣ⁺¹ ⇒ 2x = x + 1."),
  num(S`Solve $\sqrt{2^{x}}=8^{x-5}$ (decimal).`, 6, "x/2 = 3x − 15 ⇒ 5x/2 = 15."),
  num(S`Solve $\left(\frac{1}{9}\right)^{x-2}=27^{x+1}$ (decimal).`, 0.2, "−2x + 4 = 3x + 3 ⇒ x = 1/5.", null, 0.001),
  num(S`Solve $16^{x}\cdot4^{x+1}=2^{14}$.`, 2, "4x + 2x + 2 = 14."),
  num(S`Solve $\dfrac{9^{x+1}}{27^{x}}=3^{-1}$.`, 3, "2x + 2 − 3x = −1."),
  num(S`Find $h$ so that $3^{x+h}=243\cdot3^{x}$ for every $x$.`, 5, "243 = 3⁵."),
  num(S`Solve $2^{2x}-2^{x+2}=0$.`, 2, "2ˣ(2ˣ − 4) = 0, and 2ˣ ≠ 0."),
  mc(S`Which transformation of $y=2^x$ gives the same graph as $y=2^{x-3}$?`, S`a vertical compression by a factor of $\frac18$`, [S`a vertical stretch by $8$`, S`a shift up $3$`, S`a reflection in the $x$-axis`], "2ˣ⁻³ = 2ˣ/8."),
  mc(S`$a^{2x}=a^{x+3}$ has exactly one solution, $x=3$, for every positive base $a$ except…`, S`$a=1$`, [S`$a=2$`, S`$a=10$`, S`$a=\frac12$`], "With a = 1 both sides equal 1, so every x is a solution."),
  ms(S`Select every equation with solution $x=2$.`, [S`$9^{x}=3^{x+2}$`, S`$8^{x}=4^{x+1}$`, S`$25^{x}=5^{x+1}$`, S`$\left(\frac12\right)^{x}=\frac14$`], [0, 1, 3], "Third: 2x = x + 1 gives x = 1."),
  tf(S`$2^{x}=-8$ has the solution $x=-3$.`, false, "2⁻³ = 1/8; a power of 2 is never negative."),
  tf(S`$3^{2x}=9^{x}$ is true for every $x$, so it has infinitely many solutions.`, true, "3²ˣ = (3²)ˣ."),
  mc("The graph shows y = x² − 2x and the line y = 3. Use it to solve 5^(x² − 2x) = 125.", "x = −1 or x = 3", ["x = 3 only", "x = 1 or x = 3", "x = 0 or x = 2"], "5^(x² − 2x) = 5³ ⇒ x² − 2x = 3.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 8 }, curves: [{ f: (x) => x * x - 2 * x, color: "violet" }], lines: [{ m: 0, b: 3, color: "blue", dash: true }], points: [{ x: -1, y: 3, label: "(−1, 3)", color: "amber" }, { x: 3, y: 3, label: "(3, 3)", color: "amber" }], step: { x: 1, y: 1 } })),
  mc("The graph shows y = 3ˣ⁺¹ + 3ˣ and y = 36. Solve the equation exactly.", "x = 2", ["x = 3", "x = 1.5", "x = 2.5"], "4·3ˣ = 36 ⇒ 3ˣ = 9.", planeDoc({ view: { xmin: -1, xmax: 3, ymin: -2, ymax: 50 }, curves: [{ f: (x) => 3 ** (x + 1) + 3 ** x, color: "violet" }], lines: [{ m: 0, b: 36, color: "blue", dash: true }], points: [{ x: 2, y: 36, label: "(2, 36)", color: "amber" }], step: { x: 0.5, y: 5 } })),
  mc("The graphs of y = 4ˣ and y = 2ˣ⁺³ meet at the point shown. What are its coordinates?", "(3, 64)", ["(2, 16)", "(1.5, 8)", "(3, 48)"], "2²ˣ = 2ˣ⁺³ ⇒ x = 3, y = 64.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -5, ymax: 90 }, curves: [{ f: (x) => 4 ** x, color: "violet" }, { f: (x) => 2 ** (x + 3), color: "blue" }], points: [{ x: 3, y: 64, label: "?", color: "amber" }], step: { x: 1, y: 10 } })),
  mc("Which graph statement explains why 2ˣ = 2ᵏ has exactly one solution?", "every horizontal line above the x-axis meets y = 2ˣ once", ["y = 2ˣ is a straight line", "y = 2ˣ passes through (0, 1)", "y = 2ˣ has an asymptote"], "y = 2ˣ is increasing, so it is one-to-one.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], lines: [{ m: 0, b: 6, color: "blue", dash: true }, { m: 0, b: 2, color: "blue", dash: true }], step: { x: 1, y: 1 } })),
];

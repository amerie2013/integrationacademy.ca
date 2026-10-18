// 2.3 Polynomial Equations — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "2.3 Polynomial Equations";
export const Q = [
  num(String.raw`Find the largest root of $x^4-x^3-11x^2+9x+18=0$.`, 3, "P(−1) = 0 → x³ − 2x² − 9x + 18 = (x − 2)(x² − 9)."),
  num(String.raw`How many real roots does $x^4+x^2-12=0$ have?`, 2, "(x² + 4)(x² − 3)."),
  num(String.raw`Find the smallest root of $2x^3-x^2-5x-2=0$.`, -1, "P(2) = 0; quotient (2x + 1)(x + 1)."),
  num("For y = x³ − 12x, find the positive k for which x³ − 12x = k has exactly two real solutions.", 16, "The line must pass through a turning point: (−2, 16).", graph((x) => x ** 3 - 12 * x, { xmin: -4.5, xmax: 4.5, ymin: -24, ymax: 24 }, [P(-2, 16), P(2, -16)], { step: { x: 1, y: 4 } })),
  num(String.raw`$x=-2$ is a root of $x^3+kx^2-x-10=0$. Find the larger of the other two roots (2 decimals).`, 1.4495, "k = 4; quotient x² + 2x − 5: x = −1 ± √6.", null, 0.006),
  num("Increasing each edge of a cube by 2 cm increases its volume by 56 cm³. Find the original edge.", 2, "(x + 2)³ − x³ = 6x² + 12x + 8 = 56 → x² + 2x − 8 = 0."),
  mc(String.raw`Solve $x^3+3x^2+3x+1=0$.`, String.raw`$x=-1$ (a triple root)`, [String.raw`$x=1$`, String.raw`$x=\pm1$`, String.raw`$x=-1, -3$`], "(x + 1)³ = 0."),
  num(String.raw`How many real solutions does $x^4-4x^3+4x^2=1$ have?`, 3, "(x² − 2x)² = 1: x² − 2x − 1 = 0 (two roots) or (x − 1)² = 0."),
  num(String.raw`Find the sum of the squares of the roots of $x^4-5x^2+4=0$.`, 10, "Roots ±1, ±2: 1 + 1 + 4 + 4.", graph((x) => x ** 4 - 5 * x * x + 4, { xmin: -2.7, xmax: 2.7, ymin: -3, ymax: 6 }, [], { step: { x: 0.5, y: 1 } })),
  tf("A polynomial equation of degree 4 can have exactly 3 distinct real roots.", true, "e.g. x²(x − 1)(x + 1) = 0 has 0 (double), ±1."),
  num(String.raw`Find the positive solution of $x^3+x^2=12x$.`, 3, "x(x + 4)(x − 3) = 0."),
  mc(String.raw`Find the real root of $8x^3+1=0$.`, String.raw`$x=-\tfrac12$`, [String.raw`$x=\tfrac12$`, String.raw`$x=-\tfrac18$`, String.raw`$x=-2$`], "(2x + 1)(4x² − 2x + 1)."),
  num("The sum of a number and its cube is 10. Find the number.", 2, "x³ + x − 10 = (x − 2)(x² + 2x + 5)."),
  num("An open box from a 10 by 8 sheet (squares of side x cut out) has volume 48. Find the largest possible x.", 2, "x³ − 9x² + 20x − 12 = (x − 1)(x − 2)(x − 6); x < 4.", graph((x) => x * (10 - 2 * x) * (8 - 2 * x), { xmin: 0, xmax: 4.2, ymin: 0, ymax: 60 }, [], { a: 0, b: 4, more: [{ f: () => 48, color: "green" }], step: { x: 0.5, y: 10 } })),
  num(String.raw`Find the product of the real roots of $x^4-3x^2-4=0$.`, -4, "(x² − 4)(x² + 1): 2 · (−2)."),
  num(String.raw`Find the sum of the roots of $(x^2-x)^2-8(x^2-x)+12=0$.`, 2, "x² − x = 2 or 6: roots 2, −1, 3, −2."),
  mc(String.raw`What does the rational zero test tell you about $3x^3+x-1=0$?`, "it has no rational roots", ["its roots are ±1 and ±⅓", "it has three rational roots", "it has no real roots"], "None of ±1, ±⅓ works; its one real root is irrational."),
  num(String.raw`Find the real root of $x^3-3x^2+3x-9=0$.`, 3, "x²(x − 3) + 3(x − 3)."),
  num(String.raw`$x=1$ is a root of $x^3-8x^2+kx-12=0$. Find $k$.`, 19, "1 − 8 + k − 12 = 0."),
  num("How many points do the graphs y = x³ and y = x + 2 have in common?", 1, "x³ − x − 2 = 0 has one real root (≈ 1.52).", planeDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => x + 2, color: "green" }], step: { x: 0.5, y: 1 } })),
];

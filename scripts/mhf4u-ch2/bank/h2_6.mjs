// 2.6 Solving Factorable Polynomial Inequalities Algebraically — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "2.6 Solving Factorable Polynomial Inequalities Algebraically";
export const Q = [
  mc(String.raw`Solve $x^3-x^2-9x+9\ge0$.`, String.raw`$[-3,1]\cup[3,\infty)$`, [String.raw`$(-\infty,-3]\cup[1,3]$`, String.raw`$[3,\infty)$`, String.raw`$[-3,3]$`], "x²(x − 1) − 9(x − 1) = (x − 1)(x − 3)(x + 3)."),
  num(String.raw`How many integers satisfy $x^4-3x^2-4\lt0$?`, 3, "(x² − 4)(x² + 1) < 0: −2 < x < 2."),
  mc(String.raw`Solve $2x^3+5x^2-x-6>0$.`, String.raw`$\left(-2,-\tfrac32\right)\cup(1,\infty)$`, [String.raw`$\left(-\infty,-2\right)\cup\left(-\tfrac32,1\right)$`, String.raw`$(1,\infty)$`, String.raw`$\left(-\tfrac32,1\right)$`], "P(1) = 0; quotient (2x + 3)(x + 2)."),
  num("For f(x) = −(x + 2)²(x − 3) shown, how many integers in [−5, 5] satisfy f(x) ≥ 0?", 9, "f ≥ 0 exactly when x ≤ 3: −5 to 3.", graph((x) => -((x + 2) ** 2) * (x - 3), { xmin: -5, xmax: 4.5, ymin: -20, ymax: 40 }, [P(-2, 0), P(3, 0)], { step: { x: 1, y: 10 } })),
  mc(String.raw`Solve $x^4\ge9x^2$.`, String.raw`$(-\infty,-3]\cup\{0\}\cup[3,\infty)$`, [String.raw`$(-\infty,-3]\cup[3,\infty)$`, String.raw`$[-3,3]$`, String.raw`$[3,\infty)$`], "x²(x − 3)(x + 3) ≥ 0, and x = 0 makes it 0."),
  num(String.raw`For which $k$ does $(x-k)(x-1)(x+2)\lt0$ have the solution $x\lt-2$ or $1\lt x\lt5$?`, 5, "The third critical value is k."),
  mc("The parabola shown is y = (x + 1)(x − 2). Which inequality has the solution [−1, 2]?", String.raw`$(x+1)(x-2)\le0$`, [String.raw`$(x+1)(x-2)\ge0$`, String.raw`$(x+1)(x-2)\lt0$`, String.raw`$(x-1)(x+2)\le0$`], "On or below the axis between the zeros.", graph((x) => (x + 1) * (x - 2), { xmin: -2.5, xmax: 3.5, ymin: -3, ymax: 5 })),
  tf(String.raw`The solution of $(x-a)^2(x-b)\ge0$ always includes $x=a$.`, true, "The product is 0 at x = a."),
  num(String.raw`How many integers satisfy $x(x-2)(x-4)(x-6)\lt0$?`, 2, "(0, 2) ∪ (4, 6): 1 and 5."),
  mc(String.raw`Solve $x^3+8\le0$.`, String.raw`$x\le-2$`, [String.raw`$x\ge-2$`, String.raw`$x\le2$`, String.raw`$-2\le x\le2$`], "(x + 2)(x² − 2x + 4) with the quadratic always positive."),
  num(String.raw`A box has dimensions $x$, $x+1$, $x+2$. Its volume exceeds $6x$ exactly when $x$ is greater than what value?`, 1, "x(x + 4)(x − 1) > 0 with x > 0."),
  num("For P(x) = x³ − 7x − 6 shown, how many integers in [−3, 3] satisfy P(x) ≥ 0?", 3, "(x + 1)(x + 2)(x − 3) ≥ 0: [−2, −1] ∪ [3, ∞): −2, −1, 3.", graph((x) => x ** 3 - 7 * x - 6, { xmin: -3.5, xmax: 4, ymin: -14, ymax: 10 }, [], { step: { x: 1, y: 2 } })),
  mc(String.raw`Solve $(x^2-1)(x-2)^2\le0$.`, String.raw`$[-1,1]\cup\{2\}$`, [String.raw`$[-1,1]$`, String.raw`$[-1,2]$`, String.raw`$(-\infty,-1]\cup[1,2]$`], "The squared factor adds the isolated point 2."),
  num(String.raw`What is the smallest integer satisfying $x^3+x^2-12x>0$?`, -3, "x(x + 4)(x − 3) > 0: −4 < x < 0 or x > 3."),
  tf(String.raw`$x^4-4x^3+4x^2\ge0$ for every real $x$.`, true, "x²(x − 2)² ≥ 0."),
  num(String.raw`Find the length of the bounded interval in the solution of $(x+3)(x-1)(x-5)\ge0$.`, 4, "[−3, 1] ∪ [5, ∞)."),
  mc("Use the graphs of y = x³ and y = x² + 6x to solve x³ ≥ x² + 6x.", String.raw`$[-2,0]\cup[3,\infty)$`, [String.raw`$(-\infty,-2]\cup[0,3]$`, String.raw`$[3,\infty)$`, String.raw`$[-2,3]$`], "x(x − 3)(x + 2) ≥ 0.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -12, ymax: 40 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => x * x + 6 * x, color: "green" }], step: { x: 1, y: 5 } })),
  num(String.raw`How many integers satisfy $(x-3)^2(x+1)(x-5)\le0$?`, 7, "[−1, 5]."),
  mc(String.raw`Solve $-x^3+x^2+2x\lt0$.`, String.raw`$(-1,0)\cup(2,\infty)$`, [String.raw`$(-\infty,-1)\cup(0,2)$`, String.raw`$(2,\infty)$`, String.raw`$(-1,2)$`], "Multiply by −1 and flip: x(x − 2)(x + 1) > 0."),
  num(String.raw`For $x\ge0$, how many integers satisfy $x^3\le9x$?`, 4, "x(x − 3)(x + 3) ≤ 0 with x ≥ 0: [0, 3]."),
];

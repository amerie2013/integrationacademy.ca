// 2.6 Solving Factorable Polynomial Inequalities Algebraically — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { graph } from "./fig.mjs";

export const E = [
  mc(String.raw`What are the critical values of $(x-2)(x+5)\gt0$?`, String.raw`$2$ and $-5$`, [String.raw`$-2$ and $5$`, String.raw`$2$ and $5$`, String.raw`$0$ only`], "Zeros of each factor."),
  mc(String.raw`What is the sign of $(x-1)(x+2)$ at $x=0$?`, "negative", ["positive", "zero", "undefined"], "(−1)(2)."),
  mc(String.raw`Solve $(x-3)(x+1)>0$.`, String.raw`$x\lt-1$ or $x>3$`, [String.raw`$-1\lt x\lt3$`, String.raw`$x>3$`, String.raw`$x\lt3$`], "Signs +, −, +."),
  tf("You should never divide both sides of an inequality by an expression containing the variable.", true, "Its sign is unknown — factor instead."),
  num(String.raw`How many critical values does $x(x-1)(x+4)\le0$ have?`, 3, "0, 1, −4."),
  mc(String.raw`Solve $x(x-2)\le0$.`, String.raw`$[0,2]$`, [String.raw`$(0,2)$`, String.raw`$(-\infty,0]\cup[2,\infty)$`, String.raw`$[-2,0]$`], "Between the zeros, included."),
  tf("The sign of a polynomial changes at a zero of order 2.", false, "Even order: no sign change."),
  mc(String.raw`What is the sign of $(x+3)(x-1)(x-4)$ for $x>4$?`, "positive", ["negative", "zero", "it depends"], "All three factors are positive."),
  num(String.raw`Evaluate $(x-2)^3$ at the test value $x=0$.`, -8, "(−2)³."),
  mc(String.raw`Solve $(x+2)(x-2)\lt0$.`, String.raw`$(-2,2)$`, [String.raw`$[-2,2]$`, String.raw`$(-\infty,-2)\cup(2,\infty)$`, String.raw`$(0,2)$`], "Between the zeros."),
  tf("For ≥ and ≤, the critical values are part of the solution.", true, "The polynomial equals 0 there."),
  mc(String.raw`Solve $x^2-9\ge0$.`, String.raw`$(-\infty,-3]\cup[3,\infty)$`, [String.raw`$[-3,3]$`, String.raw`$[3,\infty)$`, String.raw`$(-3,3)$`], "(x − 3)(x + 3) ≥ 0."),
  num(String.raw`How many integers satisfy $(x-1)(x-6)\lt0$?`, 4, "2, 3, 4, 5."),
  mc(String.raw`What is the first step for $x^3>4x$?`, String.raw`$x^3-4x>0$`, [String.raw`$x^2>4$`, String.raw`$x>\sqrt[3]{4x}$`, String.raw`$x>4$`], "Get 0 on one side; never divide by x."),
  mc(String.raw`Solve $-(x-1)(x-5)>0$.`, String.raw`$(1,5)$`, [String.raw`$(-\infty,1)\cup(5,\infty)$`, String.raw`$[1,5]$`, String.raw`$(-5,-1)$`], "The negative sign flips +, −, + to −, +, −."),
  num(String.raw`Evaluate $(x+1)(x-2)(x-3)$ at the test value $x=2.5$.`, -0.875, "(3.5)(0.5)(−0.5).", null, 0.0001),
  tf(String.raw`$(x^2+1)(x-3)\lt0$ has the same solution as $x-3\lt0$.`, true, "x² + 1 is always positive."),
  mc("Use the graph of f(x) = ½(x + 1)(x − 2)(x − 4) to solve f(x) > 0.", String.raw`$(-1,2)\cup(4,\infty)$`, [String.raw`$(-\infty,-1)\cup(2,4)$`, String.raw`$(4,\infty)$`, String.raw`$(-1,4)$`], "Signs −, +, −, +.", graph((x) => 0.5 * (x + 1) * (x - 2) * (x - 4), { xmin: -2, xmax: 5, ymin: -8, ymax: 6 })),
  mc("Use the graph of f(x) = ½(x − 1)²(x + 3) to solve f(x) ≥ 0.", String.raw`$[-3,\infty)$`, [String.raw`$[1,\infty)$`, String.raw`$[-3,1]$`, String.raw`$(-\infty,-3]$`], "The graph touches at 1 and stays above.", graph((x) => 0.5 * (x - 1) ** 2 * (x + 3), { xmin: -4, xmax: 2.5, ymin: -4, ymax: 8 })),
  fill("The zeros used to split the number line in a sign chart are called ___ values.", ["critical"], "They are the possible boundaries."),
];

export const M = [
  mc(String.raw`Solve $x^3-x^2-6x\lt0$.`, String.raw`$(-\infty,-2)\cup(0,3)$`, [String.raw`$(-2,0)\cup(3,\infty)$`, String.raw`$(-2,3)$`, String.raw`$(0,3)$`], "x(x − 3)(x + 2): −, +, −, +."),
  mc(String.raw`Solve $x^3-25x\ge0$.`, String.raw`$[-5,0]\cup[5,\infty)$`, [String.raw`$(-\infty,-5]\cup[0,5]$`, String.raw`$[5,\infty)$`, String.raw`$[-5,5]$`], "x(x − 5)(x + 5)."),
  num(String.raw`How many integers from $-6$ to $6$ satisfy $x^3-16x\lt0$?`, 5, "x < −4 or 0 < x < 4: −6, −5, 1, 2, 3."),
  mc(String.raw`Solve $(x+1)(x-2)^2\le0$.`, String.raw`$(-\infty,-1]\cup\{2\}$`, [String.raw`$(-\infty,-1]$`, String.raw`$[-1,2]$`, String.raw`$[-1,\infty)$`], "Sign of x + 1, plus the zero at 2."),
  mc(String.raw`Solve $x^4-26x^2+25\ge0$.`, String.raw`$(-\infty,-5]\cup[-1,1]\cup[5,\infty)$`, [String.raw`$[-5,-1]\cup[1,5]$`, String.raw`$[-5,5]$`, String.raw`$(-\infty,-1]\cup[1,\infty)$`], "(x² − 1)(x² − 25): +, −, +, −, +."),
  num(String.raw`What is the smallest positive integer satisfying $x^3-5x^2+6x\le0$?`, 2, "x(x − 2)(x − 3) ≤ 0: x ≤ 0 or 2 ≤ x ≤ 3."),
  mc(String.raw`Solve $2x^3-x^2-x>0$.`, String.raw`$\left(-\tfrac12,0\right)\cup(1,\infty)$`, [String.raw`$\left(-\infty,-\tfrac12\right)\cup(0,1)$`, String.raw`$(1,\infty)$`, String.raw`$\left(-\tfrac12,1\right)$`], "x(2x + 1)(x − 1)."),
  tf(String.raw`$x=3$ is part of the solution of $(x-3)^2(x+1)>0$.`, false, "The product is 0 there, and the inequality is strict."),
  mc(String.raw`Solve $x^3+3x^2-x-3\le0$.`, String.raw`$(-\infty,-3]\cup[-1,1]$`, [String.raw`$[-3,-1]\cup[1,\infty)$`, String.raw`$[-3,1]$`, String.raw`$(-\infty,-3]$`], "(x + 3)(x − 1)(x + 1)."),
  num(String.raw`How many integers in $[-4,4]$ satisfy $(x-1)^3(x+2)\le0$?`, 4, "−2 ≤ x ≤ 1: −2, −1, 0, 1."),
  mc(String.raw`Solve $-2(x-1)(x+4)\ge0$.`, String.raw`$[-4,1]$`, [String.raw`$(-\infty,-4]\cup[1,\infty)$`, String.raw`$(-4,1)$`, String.raw`$[-1,4]$`], "Divide by −2 and flip: (x − 1)(x + 4) ≤ 0."),
  num(String.raw`What is the largest integer satisfying $(x+5)(x-3)(x-7)\lt0$?`, 6, "x < −5 or 3 < x < 7."),
  mc("Use the graph of the quartic f(x) = ¼(x + 2)(x + 1)(x − 1)(x − 3) to solve f(x) < 0.", String.raw`$(-2,-1)\cup(1,3)$`, [String.raw`$(-\infty,-2)\cup(-1,1)\cup(3,\infty)$`, String.raw`$(-2,3)$`, String.raw`$(-1,1)$`], "Quartic with a > 0: +, −, +, −, +.", graph((x) => 0.25 * (x + 2) * (x + 1) * (x - 1) * (x - 3), { xmin: -3, xmax: 4, ymin: -4, ymax: 6 })),
  num(String.raw`How many integers satisfy $x^4-x^3-6x^2\le0$?`, 6, "x²(x − 3)(x + 2) ≤ 0: [−2, 3]."),
  mc(String.raw`Solve $x^3>x$.`, String.raw`$(-1,0)\cup(1,\infty)$`, [String.raw`$(1,\infty)$`, String.raw`$(-\infty,-1)\cup(0,1)$`, String.raw`$x>1$ or $x\lt-1$`], "x(x − 1)(x + 1) > 0."),
  num(String.raw`For which positive $k$ is $x=2$ a critical value of $x^3-kx\ge0$?`, 4, "x(x² − k): x² = k at x = 2."),
  mc(String.raw`Solve $(2x-1)(x+3)\lt0$.`, String.raw`$\left(-3,\tfrac12\right)$`, [String.raw`$\left(-\tfrac12,3\right)$`, String.raw`$(-\infty,-3)\cup\left(\tfrac12,\infty\right)$`, String.raw`$(-3,2)$`], "Between the zeros −3 and ½."),
  tf(String.raw`$x^3+1>0$ exactly when $x>-1$.`, true, "(x + 1)(x² − x + 1) with the quadratic always positive."),
  mc(String.raw`Solve $x(x+1)(x+2)\ge0$.`, String.raw`$[-2,-1]\cup[0,\infty)$`, [String.raw`$(-\infty,-2]\cup[-1,0]$`, String.raw`$[0,\infty)$`, String.raw`$[-2,0]$`], "Signs −, +, −, +.", graph((x) => x * (x + 1) * (x + 2), { xmin: -3, xmax: 1.5, ymin: -4, ymax: 6 })),
  num(String.raw`Find the sum of the integers satisfying $(x+1)(x-4)\le0$.`, 9, "−1 + 0 + 1 + 2 + 3 + 4."),
];

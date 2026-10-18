// 2.5 Solving Polynomial Inequalities Graphically — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, planeDoc } from "./fig.mjs";

export const E = [
  mc(String.raw`Write $x\ge2$ in interval notation.`, String.raw`$[2,\infty)$`, [String.raw`$(2,\infty)$`, String.raw`$[2,\infty]$`, String.raw`$(-\infty,2]$`], "Included endpoint: square bracket; ∞: round."),
  mc(String.raw`Write $x\lt-1$ in interval notation.`, String.raw`$(-\infty,-1)$`, [String.raw`$(-\infty,-1]$`, String.raw`$(-1,\infty)$`, String.raw`$[-\infty,-1)$`], "Excluded endpoint."),
  mc(String.raw`Write $(0,5]$ as an inequality.`, String.raw`$0\lt x\le5$`, [String.raw`$0\le x\lt5$`, String.raw`$0\le x\le5$`, String.raw`$0\lt x\lt5$`], "( excludes 0, ] includes 5."),
  tf("Infinity is written with a square bracket.", false, "∞ is never reached: always a round bracket."),
  mc("Use the graph of f(x) = (x + 1)(x − 3) to solve f(x) < 0.", String.raw`$(-1,3)$`, [String.raw`$(-\infty,-1)\cup(3,\infty)$`, String.raw`$[-1,3]$`, String.raw`$(-3,1)$`], "Below the axis between the zeros.", graph((x) => (x + 1) * (x - 3), { xmin: -3, xmax: 5, ymin: -5, ymax: 6 })),
  mc("Use the graph of f(x) = −(x − 2)(x + 2) to solve f(x) ≥ 0.", String.raw`$[-2,2]$`, [String.raw`$(-2,2)$`, String.raw`$(-\infty,-2]\cup[2,\infty)$`, String.raw`$[0,4]$`], "On or above the axis between the zeros.", graph((x) => -(x - 2) * (x + 2), { xmin: -3.5, xmax: 3.5, ymin: -5, ymax: 5 })),
  tf("f(x) > 0 where the graph of f is above the x-axis.", true, "Positive y-values."),
  num(String.raw`How many separate intervals are in the solution $x\lt-3$ or $x>1$?`, 2, "Two pieces."),
  mc(String.raw`Solve $x^2>4$.`, String.raw`$x\lt-2$ or $x>2$`, [String.raw`$-2\lt x\lt2$`, String.raw`$x>2$`, String.raw`$x>\pm2$`], "The parabola is above y = 4 outside ±2."),
  tf("A strict inequality includes its boundary points.", false, "< and > exclude them."),
  mc("Which symbol joins two separate intervals?", String.raw`$\cup$`, [String.raw`$\cap$`, String.raw`$\subset$`, String.raw`$\in$`], "Union."),
  num(String.raw`What is the smallest integer in $(-2.5,4]$?`, -2, "−2.5 is excluded; −2 is next."),
  num(String.raw`What is the largest integer in $[-3,6)$?`, 5, "6 is excluded."),
  mc(String.raw`Solve $(x-1)(x-4)\le0$.`, String.raw`$[1,4]$`, [String.raw`$(1,4)$`, String.raw`$(-\infty,1]\cup[4,\infty)$`, String.raw`$[-4,-1]$`], "Between the zeros, included."),
  tf("The solution of f(x) > g(x) is where the graph of f is above the graph of g.", true, "Compare heights."),
  num(String.raw`How many integers are in $[1,5]$?`, 5, "1, 2, 3, 4, 5."),
  mc(String.raw`Write "$x\le-2$ or $x\ge3$" in interval notation.`, String.raw`$(-\infty,-2]\cup[3,\infty)$`, [String.raw`$[-2,3]$`, String.raw`$(-\infty,-2)\cup(3,\infty)$`, String.raw`$(-2,3)$`], "Two outer pieces, endpoints included."),
  tf(String.raw`$x^3>0$ exactly when $x>0$.`, true, "Cubes keep the sign."),
  mc(String.raw`Solve $x^3\lt0$.`, String.raw`$x\lt0$`, [String.raw`$x>0$`, String.raw`$x\ne0$`, String.raw`all real x`], "Negative numbers have negative cubes."),
  fill("The boundary points of the solution of f(x) > 0 are the ___ of f.", ["zeros", "x-intercepts", "roots", "zeroes"], "Where f changes sign."),
];

export const M = [
  mc("Use the graph of f(x) = x(x − 3)(x + 2) to solve f(x) ≥ 0.", String.raw`$[-2,0]\cup[3,\infty)$`, [String.raw`$(-\infty,-2]\cup[0,3]$`, String.raw`$[3,\infty)$`, String.raw`$[-2,3]$`], "Above the axis between −2 and 0 and after 3.", graph((x) => x * (x - 3) * (x + 2), { xmin: -3, xmax: 4, ymin: -12, ymax: 10 })),
  mc(String.raw`Solve $(x+1)^2(x-2)>0$.`, String.raw`$x>2$`, [String.raw`$x>-1$`, String.raw`$-1\lt x\lt2$`, String.raw`$x\lt-1$ or $x>2$`], "The squared factor never changes the sign."),
  num(String.raw`How many integers satisfy $(x+2)(x-3)\lt0$?`, 4, "−1, 0, 1, 2."),
  mc(String.raw`Solve $x^4-1\le0$.`, String.raw`$[-1,1]$`, [String.raw`$(-1,1)$`, String.raw`$(-\infty,-1]\cup[1,\infty)$`, String.raw`$[0,1]$`], "(x² − 1)(x² + 1) ≤ 0 ⇔ x² ≤ 1."),
  mc(String.raw`Solve $x^3\ge x^2$.`, String.raw`$\{0\}\cup[1,\infty)$`, [String.raw`$[1,\infty)$`, String.raw`$[0,1]$`, String.raw`$(-\infty,0]\cup[1,\infty)$`], "x²(x − 1) ≥ 0: x = 0 or x ≥ 1."),
  num(String.raw`What is the smallest positive integer with $x^3>10$?`, 3, "2³ = 8, 3³ = 27."),
  mc("Use the graphs of y = x² and y = x + 2 to solve x² ≤ x + 2.", String.raw`$[-1,2]$`, [String.raw`$(-\infty,-1]\cup[2,\infty)$`, String.raw`$(-1,2)$`, String.raw`$[-2,1]$`], "The parabola is on or below the line between the intersections.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -2, ymax: 7 }, curves: [{ f: (x) => x * x, color: "violet" }, { f: (x) => x + 2, color: "green" }], step: { x: 1, y: 1 } })),
  mc(String.raw`Solve $-(x-1)(x-3)(x-5)>0$.`, String.raw`$x\lt1$ or $3\lt x\lt5$`, [String.raw`$1\lt x\lt3$ or $x>5$`, String.raw`$x>5$`, String.raw`$1\lt x\lt5$`], "Leading coefficient negative: positive at the far left."),
  num(String.raw`How many real zeros does $x^3-5x+1$ have? (Use the signs of $f(-3)$, $f(-2)$, $f(0)$, $f(1)$, $f(3)$.)`, 3, "Signs −, +, +, −, +: three sign changes."),
  mc(String.raw`Solve $x^2(x-4)\lt0$.`, String.raw`$x\lt4$, $x\ne0$`, [String.raw`$0\lt x\lt4$`, String.raw`$x\lt4$`, String.raw`$x\lt0$`], "Negative for x < 4 except at the touching zero 0."),
  num(String.raw`How many integers from $-5$ to $5$ satisfy $x^4-16>0$?`, 6, "|x| > 2: ±3, ±4, ±5."),
  tf("If f has zeros only at 1 and 3 and f(2) < 0, then f(x) < 0 for all x in (1, 3).", true, "The sign can't change between consecutive zeros."),
  mc(String.raw`Solve $(x-2)^3\ge0$.`, String.raw`$x\ge2$`, [String.raw`$x\le2$`, String.raw`all real x`, String.raw`$x=2$`], "Odd power keeps the sign of x − 2."),
  num(String.raw`A ball's height is $h(t)=-5t^2+30t$. For how many seconds is it at least 25 m high?`, 4, "t² − 6t + 5 ≤ 0: 1 ≤ t ≤ 5."),
  mc("Use the graph to solve x³ − 4x ≤ 0.", String.raw`$(-\infty,-2]\cup[0,2]$`, [String.raw`$[-2,0]\cup[2,\infty)$`, String.raw`$[-2,2]$`, String.raw`$(-\infty,0]$`], "On or below the axis left of −2 and between 0 and 2.", graph((x) => x ** 3 - 4 * x, { xmin: -3, xmax: 3, ymin: -6, ymax: 6 })),
  num(String.raw`Find the positive root of $x^3+x-3=0$ (2 decimals) — a boundary for $x^3+x-3>0$.`, 1.21, "Technology: x ≈ 1.21.", null, 0.01),
  mc(String.raw`Solve $x^4+1>0$.`, "all real numbers", ["no solution", String.raw`$x>-1$`, String.raw`$x\ne0$`], "x⁴ + 1 ≥ 1."),
  num(String.raw`What is the largest integer with $x^3-27\lt0$?`, 2, "x < 3."),
  tf(String.raw`The solution of $x^2\ge0$ is all real numbers.`, true, "Squares are never negative."),
  mc(String.raw`Profit is $P(x)=-x(x-4)(x-8)$ for $x\ge0$. When is $P(x)>0$?`, String.raw`$4\lt x\lt8$`, [String.raw`$0\lt x\lt4$`, String.raw`$x>8$`, String.raw`$0\lt x\lt8$`], "Negative leading coefficient: +, −, +, − from the left; restrict to x ≥ 0."),
];

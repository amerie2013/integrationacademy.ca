// 2.5 Solving Polynomial Inequalities Graphically — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "2.5 Solving Polynomial Inequalities Graphically";
export const Q = [
  mc(String.raw`Solve $x^3-3x^2\ge-4$.`, String.raw`$x\ge-1$`, [String.raw`$x\le-1$`, String.raw`$-1\le x\le2$`, String.raw`$x\ge2$`], "x³ − 3x² + 4 = (x + 1)(x − 2)² ≥ 0: the graph touches at 2.", graph((x) => x ** 3 - 3 * x * x + 4, { xmin: -2, xmax: 3.5, ymin: -6, ymax: 8 }, [P(-1, 0), P(2, 0)])),
  num(String.raw`How many integers satisfy $x^4-10x^2+9\lt0$?`, 2, "1 < x² < 9: x = ±2."),
  num(String.raw`Find the smallest positive boundary of $x^3-6x+2>0$ (2 decimals).`, 0.34, "Technology: zeros ≈ −2.60, 0.34, 2.26.", null, 0.01),
  mc(String.raw`Solve $x^3\ge4x^2$.`, String.raw`$\{0\}\cup[4,\infty)$`, [String.raw`$[4,\infty)$`, String.raw`$[0,4]$`, String.raw`$(-\infty,0]\cup[4,\infty)$`], "x²(x − 4) ≥ 0."),
  num("An open box from a 12 by 12 sheet has V = x(12 − 2x)². For how many values of x in 0 < x < 6 is V ≥ 128?", 1, "V − 128 = 4(x − 2)²(x − 8) ≥ 0 only at x = 2 in the domain (the maximum volume).", graph((x) => x * (12 - 2 * x) ** 2, { xmin: 0, xmax: 6.2, ymin: 0, ymax: 150 }, [P(2, 128)], { a: 0, b: 6, more: [{ f: () => 128, color: "green" }], step: { x: 1, y: 20 } })),
  tf(String.raw`The solution of $(x-1)^2(x-2)^2>0$ is every real number except 1 and 2.`, true, "A product of squares is positive except at its zeros."),
  num(String.raw`What is the smallest integer satisfying $x^3-x^2-2x>0$?`, 3, "x(x − 2)(x + 1) > 0: −1 < x < 0 (no integers) or x > 2."),
  mc("Use the graphs of y = x³ and y = 2x² + 3x to solve x³ ≤ 2x² + 3x.", String.raw`$(-\infty,-1]\cup[0,3]$`, [String.raw`$[-1,0]\cup[3,\infty)$`, String.raw`$[-1,3]$`, String.raw`$(-\infty,0]$`], "x(x − 3)(x + 1) ≤ 0.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -10, ymax: 40 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => 2 * x * x + 3 * x, color: "green" }], step: { x: 1, y: 5 } })),
  num(String.raw`Find the length of the bounded interval in the solution of $(x-1)(x-4)(x-6)\lt0$.`, 2, "x < 1 or 4 < x < 6."),
  mc(String.raw`For which $k$ is $x^2+k>0$ for every real $x$?`, String.raw`$k>0$`, [String.raw`$k\ge0$`, String.raw`$k\lt0$`, "every k"], "The minimum value is k at x = 0."),
  num("What is the greatest number of separate intervals that can make up the solution of a quartic inequality f(x) > 0?", 3, "Four zeros split the line into 5 intervals; at most 3 alternate as positive."),
  tf("Every cubic inequality f(x) > 0 has at least one solution.", true, "One end of the cubic goes to +∞."),
  num("For the cubic shown (a > 0), how many integers in [−5, 5] satisfy P(x) ≤ 0?", 7, "P ≤ 0 for x ≤ −3 or −1 ≤ x ≤ 2: −5, −4, −3, −1, 0, 1, 2.", graph((x) => 0.25 * (x + 3) * (x + 1) * (x - 2), { xmin: -5, xmax: 4, ymin: -6, ymax: 6 }, [P(-3, 0), P(-1, 0), P(2, 0)])),
  mc(String.raw`Solve $(x^2-4)(x^2+1)\ge0$.`, String.raw`$(-\infty,-2]\cup[2,\infty)$`, [String.raw`$[-2,2]$`, String.raw`all real x`, String.raw`$[2,\infty)$`], "x² + 1 > 0, so the sign is that of x² − 4."),
  num(String.raw`Find the largest boundary of $x^3-6x+2\lt0$ (2 decimals).`, 2.26, "Technology: zeros ≈ −2.60, 0.34, 2.26.", null, 0.01),
  mc(String.raw`For $x>0$, solve $x^3-9x\lt0$.`, String.raw`$0\lt x\lt3$`, [String.raw`$x>3$`, String.raw`$-3\lt x\lt3$`, String.raw`$x\lt3$`], "x(x − 3)(x + 3) < 0 with x > 0."),
  num(String.raw`For $x\ge0$, how many integers satisfy $(x-1)^2(x-5)\lt0$?`, 4, "x < 5 with x ≠ 1: 0, 2, 3, 4."),
  mc(String.raw`Which inequality has the solution $[-2,1]\cup[3,\infty)$?`, String.raw`$(x+2)(x-1)(x-3)\ge0$`, [String.raw`$(x+2)(x-1)(x-3)\le0$`, String.raw`$(x-2)(x+1)(x+3)\ge0$`, String.raw`$(x+2)(x-1)(x-3)>0$`], "Cubic with a > 0: −, +, −, + with endpoints included."),
  num(String.raw`What is the largest integer with $-x^3+8>0$?`, 1, "x³ < 8 ⇔ x < 2."),
  num(String.raw`Find the sum of the integer solutions of $x^2(x-3)(x+3)\le0$.`, 0, "[−3, 3]: the integers cancel in pairs."),
];

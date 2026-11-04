// 3.4 Solving Rational Equations and Inequalities — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { RG, P, planeDoc, rat } from "./fig.mjs";
const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const TOPIC = "3.4 Solving Rational Equations and Inequalities";
export const Q = [
  mc(S`Solve $\dfrac1{x-2}+\dfrac3{x+2}=1$.`, S`$x=0$ or $x=4$`, [S`$x=2$ or $x=-2$`, S`$x=4$ only`, "no solution"], "x + 2 + 3x − 6 = x² − 4 gives x² − 4x = 0."),
  mc(S`Solve $\dfrac{2x}{x-1}-\dfrac{3}{x+1}=2$.`, S`$x=5$`, [S`$x=-5$`, S`$x=1$`, "no solution"], "2x(x + 1) − 3(x − 1) = 2(x² − 1) gives −x + 3 = −2."),
  num(S`Find the positive solution of $\dfrac3{x}+\dfrac2{x+1}=2$ (2 decimals).`, 2.19, "2x² − 3x − 3 = 0 gives (3 + √33)/4 ≈ 2.19.", null, 0.01),
  mc(S`Solve $\dfrac{x^2-2x-8}{x+1}\ge0$.`, S`$[-2,-1)\cup[4,\infty)$`, [S`$(-\infty,-2]\cup(-1,4]$`, S`$[-2,4]$`, S`$[4,\infty)$`], "(x − 4)(x + 2)/(x + 1): signs −, +, −, +."),
  mc(S`Solve $\dfrac{x+2}{x^2-9}\lt0$.`, S`$(-\infty,-3)\cup(-2,3)$`, [S`$(-3,-2)\cup(3,\infty)$`, S`$(-2,3)$`, S`$(-3,3)$`], "Critical values −3, −2, 3: signs −, +, −, +."),
  mc(S`Solve $\dfrac1{x+1}\gt\dfrac1{x-2}$.`, S`$-1\lt x\lt2$`, [S`$x\lt-1$ or $x>2$`, S`$x>2$`, "all real x"], "The difference is −3/((x + 1)(x − 2)), which is positive when (x + 1)(x − 2) < 0."),
  mc(S`Solve $\dfrac{x}{x-2}\ge\dfrac{3}{x-2}$.`, S`$x\lt2$ or $x\ge3$`, [S`$2\lt x\le3$`, S`$x\ge3$`, S`$x\gt2$`], "(x − 3)/(x − 2) ≥ 0."),
  mc(S`Solve $\dfrac{x-1}{x+1}\le\dfrac{x+1}{x-1}$.`, S`$-1\lt x\le0$ or $x>1$`, [S`$x\lt-1$ or $0\le x\lt1$`, S`$x\le0$`, S`$-1\lt x\lt1$`], "The difference is −4x/((x + 1)(x − 1)) ≤ 0, so x/((x + 1)(x − 1)) ≥ 0: signs −, +, −, +."),
  num(S`How many real solutions has $\dfrac1{x-1}=x-1$?`, 2, "(x − 1)² = 1."),
  num(S`How many real solutions has $\dfrac1{x^2+1}=x^2+1$?`, 1, "(x² + 1)² = 1 gives x = 0 only."),
  num(S`For which $k$ does $\dfrac{x+k}{x-3}=2$ have no solution?`, -3, "x + k = 2x − 6 gives x = k + 6; x = 3 when k = −3."),
  mc(S`For which $k$ does $x+\dfrac kx=4$ have exactly one real solution?`, S`$k=4$`, [S`$k=2$`, S`$k=-4$`, S`$k=16$`], "x² − 4x + k = 0, discriminant 16 − 4k = 0."),
  mc("From the graphs of y = 6/x and y = x + 1, solve 6/x ≤ x + 1.", S`$-3\le x\lt0$ or $x\ge2$`, [S`$x\le-3$ or $0\lt x\le2$`, S`$x\ge2$`, S`$-3\le x\le2$`], "They meet at (2, 3) and (−3, −2).", planeDoc({ view: V, curves: [...rat((x) => 6 / x, [0], V), { f: (x) => x + 1, color: "green" }], points: [P(2, 3), P(-3, -2)], step: { x: 1, y: 1 } })),
  mc("Use the graph to solve f(x) > 3.", S`$1\lt x\lt2$`, [S`$x>2$`, S`$x\lt1$`, S`$x\lt2$`], "The right branch is above y = 3 until x = 2.", planeDoc({ view: V, curves: [...rat((x) => 3 / (x - 1), [1], V), { f: () => 3, color: "green" }], points: [P(2, 3)], step: { x: 1, y: 1 } })),
  mc("The graph shows y = (x + 1)(x − 3)/(x − 1). Solve y ≤ 0.", S`$(-\infty,-1]\cup(1,3]$`, [S`$[-1,1)\cup[3,\infty)$`, S`$[-1,3]$`, S`$(1,3]$`], "Below the axis left of −1 and between 1 and 3.", RG((x) => (x + 1) * (x - 3) / (x - 1), [1], { xmin: -5, xmax: 7, ymin: -8, ymax: 8 }, null, [P(-1, 0), P(3, 0)])),
  mc("The graph has x-intercept −2 and asymptote x = 4. Which inequality has the solution [−2, 4)?", S`$\dfrac{x+2}{x-4}\le0$`, [S`$\dfrac{x+2}{x-4}\ge0$`, S`$\dfrac{x-2}{x+4}\le0$`, S`$\dfrac{x+2}{x-4}\lt0$`], "[−2, 4): below the axis, zero included, asymptote excluded.", RG((x) => (x + 2) / (x - 4), [4], { xmin: -8, xmax: 10, ymin: -8, ymax: 8 }, 1, [P(-2, 0)])),
  tf(S`Multiplying $\dfrac1x\lt1$ by $x$ gives the correct solution $x>1$.`, false, "The full solution also includes x < 0."),
  num(S`Find the sum of all solutions of $\dfrac{x}{x-3}=\dfrac{9}{x(x-3)}$.`, -3, "x² = 9; x = 3 is rejected, leaving x = −3."),
  num(S`How many integers satisfy $\dfrac{x^2-16}{x^2+1}\lt0$?`, 7, "|x| < 4: −3 … 3."),
  mc(S`Solve $\dfrac{x^2+x+1}{x-2}>0$.`, S`$x>2$`, [S`$x\lt2$`, S`$x\ne2$`, "all real x"], "The numerator is always positive."),
];

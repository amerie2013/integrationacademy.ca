// 3.5 Factorising and Completing the Square — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  num(S`Solve $x^2+9x+20=0$. Give the larger root.`, -4, "(x + 4)(x + 5) = 0."),
  num(S`Solve $x^2-49=0$. Give the positive root.`, 7, "(x − 7)(x + 7) = 0."),
  num(S`Solve $x^2-6x=0$. Give the non-zero root.`, 6, "x(x − 6) = 0."),
  num(S`Solve $(x-4)(x+9)=0$. Give the negative root.`, -9, "x + 9 = 0."),
  mc(S`$x^2-x-12$ factorises as:`, S`$(x-4)(x+3)$`, [S`$(x+4)(x-3)$`, S`$(x-6)(x+2)$`, S`$(x-12)(x+1)$`], "−4 × 3 = −12 and −4 + 3 = −1."),
  num(S`$x^2+10x=(x+5)^2-q$. Find $q$.`, 25, "(x + 5)² = x² + 10x + 25."),
  num(S`$x^2-8x+16=(x-p)^2$. Find $p$.`, 4, "A perfect square."),
  tf(S`$x^2+4$ factorises over the real numbers.`, false, "x² + 4 ≥ 4, so it has no real zeros."),
  num(S`Solve $3x^2=27$. Give the positive root.`, 3, "x² = 9."),
  fill(S`$AB=0$ means $A=0$ or $B=0$. This is the zero-___ property.`, ["product", "Product"], "It only works when one side is 0."),
  num(S`Solve $x^2+4x-21=0$. Give the positive root.`, 3, "(x + 7)(x − 3) = 0."),
  num(S`Solve $x^2-12x+36=0$.`, 6, "(x − 6)² = 0."),
  mc(S`The best first step to solve $x^2=7x$ is:`, S`write $x^2-7x=0$`, ["divide both sides by x", "take the square root of both sides", S`write $x=7$`], "Dividing by x loses the root x = 0."),
  num(S`$x^2+6x+2=(x+3)^2+q$. Find $q$.`, -7, "2 − 9."),
  num(S`$x^2-2x+10=(x-1)^2+q$. Find $q$.`, 9, "10 − 1."),
  num(S`The graph of $y=x^2-3x-10$ is shown. Factorise to find its positive zero.`, 5, "(x − 5)(x + 2).", planeDoc({ view: { xmin: -4, xmax: 7, ymin: -14, ymax: 6 }, curves: [{ f: (x) => x * x - 3 * x - 10 }], points: [P(-2, 0), P(5, 0)], step: { x: 1, y: 2 } })),
  num(S`The graph of $y=x^2+4x+7$ is shown. Write it as $(x+2)^2+q$ and find $q$.`, 3, "7 − 4; the vertex is (−2, 3).", planeDoc({ view: { xmin: -6, xmax: 2, ymin: -1, ymax: 10 }, curves: [{ f: (x) => x * x + 4 * x + 7 }], points: [P(-2, 3)] })),
  num(S`Solve $2x^2-18=0$. Give the positive root.`, 3, "x² = 9."),
  num(S`Solve $x(x-5)=0$. Give the non-zero root.`, 5, "x − 5 = 0."),
  num(S`Solve $(2x-3)(x+1)=0$. Give the positive root.`, 1.5, "2x − 3 = 0.", null, 1e-9),
];

export const M = [
  num(S`Solve $2x^2+7x+3=0$. Give the larger root.`, -0.5, "(2x + 1)(x + 3) = 0.", null, 1e-9),
  num(S`Solve $3x^2-x-2=0$. Give the positive root.`, 1, "(3x + 2)(x − 1) = 0."),
  num(S`Solve $6x^2-x-2=0$. Give the positive root.`, 2 / 3, "(3x − 2)(2x + 1) = 0.", null, 1e-3),
  mc(S`Completing the square, the roots of $x^2+6x-1=0$ are:`, S`$x=-3\pm\sqrt{10}$`, [S`$x=3\pm\sqrt{10}$`, S`$x=-3\pm\sqrt8$`, S`$x=-6\pm\sqrt{10}$`], "(x + 3)² = 10."),
  num(S`Solve $x^2-10x+18=0$ by completing the square. Give the larger root (2 d.p.).`, 5 + Math.sqrt(7), "(x − 5)² = 7.", null, 0.01),
  num(S`$2x^2+8x+3=2(x+2)^2+q$. Find $q$.`, -5, "2(x² + 4x + 4) = 2x² + 8x + 8; 3 − 8."),
  num(S`$-x^2+6x-4=-(x-3)^2+q$. Find $q$.`, 5, "−(x² − 6x + 9) + 5."),
  num(S`What is the y-coordinate of the vertex of $y=x^2+3x-1$?`, -3.25, "(x + 1.5)² − 2.25 − 1.", null, 1e-9),
  tf(S`$x^2-6x+11>0$ for every real $x$.`, true, "(x − 3)² + 2 ≥ 2."),
  ms("Which factorise using integers? Select all.", [S`$x^2-5x+6$`, S`$x^2+x+1$`, S`$4x^2-1$`, S`$x^2-3$`], [0, 2], "(x − 2)(x − 3) and (2x − 1)(2x + 1)."),
  num("Two consecutive even integers have product 168. Give the larger (positive) one.", 14, "x(x + 2) = 168 → (x + 14)(x − 12) = 0."),
  num("A rectangle is 3 m longer than it is wide and has area 70 m². Find its width.", 7, "x(x + 3) = 70 → (x + 10)(x − 7) = 0."),
  num(S`Solve $(x+2)^2=25$. Give the positive root.`, 3, "x + 2 = ±5."),
  num(S`Solve $(2x-1)^2=9$. Give the negative root.`, -1, "2x − 1 = −3."),
  num(S`Solve $x^2=5x+14$. Give the positive root.`, 7, "x² − 5x − 14 = (x − 7)(x + 2)."),
  num(S`The graph of $y=x^2-x-6$ is shown. Give its smaller zero.`, -2, "(x − 3)(x + 2).", planeDoc({ view: { xmin: -4, xmax: 5, ymin: -8, ymax: 6 }, curves: [{ f: (x) => x * x - x - 6 }], points: [P(-2, 0), P(3, 0)], step: { x: 1, y: 2 } })),
  num(S`The graph of $y=2x^2-4x-6$ is shown. Complete the square to find its positive zero.`, 3, "2(x − 1)² − 8 = 0 → (x − 1)² = 4.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -9, ymax: 6 }, curves: [{ f: (x) => 2 * x * x - 4 * x - 6 }], points: [P(1, -8), P(3, 0)], step: { x: 1, y: 3 } })),
  num(S`Solve $x^4-5x^2+4=0$. Give the largest root.`, 2, "(x² − 1)(x² − 4) = 0."),
  mc(S`Completing the square, $x^2+bx$ equals:`, S`$\left(x+\frac b2\right)^2-\left(\frac b2\right)^2$`, [S`$\left(x+\frac b2\right)^2+\left(\frac b2\right)^2$`, S`$(x+b)^2-b^2$`, S`$\left(x-\frac b2\right)^2-\left(\frac b2\right)^2$`], "Half the coefficient, squared, then subtracted."),
  num(S`Solve $9x^2-12x+4=0$.`, 2 / 3, "(3x − 2)² = 0.", null, 1e-3),
];

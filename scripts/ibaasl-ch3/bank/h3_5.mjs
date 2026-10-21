// 3.5 Factorising and Completing the Square — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const TOPIC = "3.5 Factorising and Completing the Square";
export const Q = [
  num(S`The graph of $y=x^2-4x-1$ is shown. Complete the square and give the larger zero (2 d.p.).`, 2 + Math.sqrt(5), "(x − 2)² = 5 → x = 2 ± √5.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -6, ymax: 5 }, curves: [{ f: (x) => x * x - 4 * x - 1 }], points: [P(2, -5)] }), 0.01),
  num(S`Find the sum of the roots of $3x^2-7x-6=0$.`, 7 / 3, "(3x + 2)(x − 3): 3 − 2/3.", null, 1e-3),
  num(S`Solve $x-5\sqrt x+6=0$. Give the larger solution.`, 9, "Let u = √x: (u − 2)(u − 3) = 0, so x = 4 or 9."),
  num(S`Solve $(x^2-3x)^2-2(x^2-3x)-8=0$. Give the largest root.`, 4, "u = x² − 3x: u = 4 or −2, giving x = 4, −1, 1, 2."),
  num(S`$3x^2-12x+7=a(x-h)^2+k$. Find $k$.`, -5, "3(x − 2)² − 12 + 7."),
  num(S`$5+4x-x^2=a-(x-b)^2$. Find $a$.`, 9, "−(x − 2)² + 4 + 5."),
  num(S`What is the minimum value of $(x-3)(x+5)$?`, -16, "Axis x = −1: (−4)(4)."),
  num("A square plot of side x m has a 1.5 m strip added along two adjacent sides, making a square of area 81 m² (shown). Find x.", 7.5, "(x + 1.5)² = 81 → x + 1.5 = 9.", planeDoc({ view: { xmin: -1, xmax: 10, ymin: -1, ymax: 10 }, segs: [{ pts: [[0, 0], [9, 0], [9, 9], [0, 9], [0, 0]], color: "green" }, { pts: [[0, 0], [7.5, 0], [7.5, 7.5], [0, 7.5], [0, 0]], color: "violet" }], step: { x: 1, y: 1 } }), 1e-9),
  num("A 20 cm by 30 cm photo has a frame of width x cm all round. The total area is 816 cm². Find x.", 2, "(20 + 2x)(30 + 2x) = 816 → x² + 25x − 54 = 0 → (x + 27)(x − 2) = 0."),
  tf(S`Completing the square shows that the minimum value of $x^2+bx+c$ is $c-\frac{b^2}{4}$.`, true, "(x + b/2)² + c − b²/4."),
  num(S`$x^2+kx+49$ is a perfect square and $k>0$. Find $k$.`, 14, "(x + 7)²."),
  num("Two numbers differ by 6. What is the smallest possible value of their product?", -9, "x(x + 6) = (x + 3)² − 9."),
  ms(S`For $y=x^2-6x+5$, which are true? Select all.`, ["The vertex is (3, −4)", "The zeros are 1 and 5", "The range is y ≥ −4", "The axis is x = −3"], [0, 1, 2], "(x − 3)² − 4 = (x − 1)(x − 5)."),
  num(S`The graph of $y=-x^2+2x+8$ is shown. Complete the square to find its maximum value.`, 9, "−(x − 1)² + 9.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 10 }, curves: [{ f: (x) => -x * x + 2 * x + 8 }], points: [P(-2, 0), P(4, 0), P(1, 9)] })),
  num(S`Solve $\frac{x}{x-2}=\frac{3}{x-4}$. Give the larger solution.`, 6, "x(x − 4) = 3(x − 2) → (x − 1)(x − 6) = 0."),
  num(S`Solve $x+\frac{12}{x}=7$. Give the larger solution.`, 4, "x² − 7x + 12 = 0."),
  num(S`A ball's height is $h=30t-5t^2$ m (shown). When does it first reach 40 m?`, 2, "t² − 6t + 8 = 0 → t = 2 or 4.", planeDoc({ view: { xmin: -0.5, xmax: 6.5, ymin: -3, ymax: 50 }, curves: [{ f: (t) => 30 * t - 5 * t * t, a: 0, b: 6 }], lines: [{ m: 0, b: 40, color: "green", dash: true }], points: [P(2, 40), P(4, 40)], step: { x: 1, y: 10 }, xlabel: "t", ylabel: "h" })),
  num("A right triangle has legs x and x + 7 and hypotenuse 13 (shown). Find x.", 5, "x² + (x + 7)² = 169 → (x + 12)(x − 5) = 0.", planeDoc({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 13 }, segs: [{ pts: [[0, 0], [5, 0], [0, 12], [0, 0]], color: "violet" }], points: [P(5, 0, false), P(0, 12, false)], step: { x: 1, y: 2 } })),
  mc(S`$(x-a)^2=b$ has two different real solutions exactly when:`, S`$b>0$`, [S`$b\ge0$`, S`$b<0$`, S`$a>0$`], "x = a ± √b needs √b > 0."),
  num(S`$x^2+5x+7=(x+p)^2+q$. Find $p+q$.`, 3.25, "p = 2.5, q = 7 − 6.25 = 0.75.", null, 1e-9),
];

// 4.2 Completing the Square — 20 hard questions
import { mc, ms, num, tf, mx } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "4.2 Completing the Square";
export const Q = [
  mx(S`Write $y=0.75x^2-6x+5$ in vertex form.`, "0.75*(x-4)^2-7", "0.75(x² − 8x + 16 − 16) + 5 = 0.75(x − 4)² − 12 + 5."),
  mx(S`Write $y=-\tfrac13x^2+4x-5$ in vertex form.`, "-(x-6)^2/3+7", "−⅓(x² − 12x + 36 − 36) − 5 = −⅓(x − 6)² + 12 − 5."),
  num(S`Enter the minimum value of $y=x^2+7x+10$ (decimal).`, -2.25, "(x + 3.5)² − 12.25 + 10.", null, 1e-9),
  num(S`Enter the maximum value of $y=-2x^2+6x+1$ (decimal).`, 5.5, "−2(x − 1.5)² + 4.5 + 1.", null, 1e-9),
  num(S`For $y=3x^2-12x+c$, the minimum is $2$. Enter $c$.`, 14, "3(x − 2)² + c − 12."),
  num(S`For $y=ax^2+8x+3$, the vertex is at $x=-2$. Enter the minimum value.`, -5, "a = 2: 2(x + 2)² − 5."),
  num(S`A ball: $h=-5t^2+15t+1$. Enter the maximum height (decimal).`, 12.25, "−5(t − 1.5)² + 11.25 + 1.", planeDoc({ view: { xmin: -0.3, xmax: 3.3, ymin: -1, ymax: 14 }, curves: [{ f: (t) => -5 * t * t + 15 * t + 1, a: 0, b: 3.06, color: "violet" }], step: { x: 0.5, y: 2 }, xlabel: "t", ylabel: "h" }), 1e-9),
  num(S`A fence of $60$ m encloses three sides of a pen against a wall: $A=-2x^2+60x$. Enter the maximum area.`, 450, "−2(x − 15)² + 450.", planeDoc({ view: { xmin: -1, xmax: 31, ymin: -10, ymax: 500 }, curves: [{ f: (x) => -2 * x * x + 60 * x, a: 0, b: 30, color: "violet" }], step: { x: 5, y: 50 } })),
  ms(S`Select every correct step for completing the square on $2x^2+6x+1$.`, [S`$2(x^2+3x)+1$`, S`$2(x^2+3x+2.25-2.25)+1$`, S`$2(x+1.5)^2-4.5+1$`, S`$2(x+3)^2-17$`], [0, 1, 2], "Vertex form 2(x + 1.5)² − 3.5."),
  mc("Which equation matches the graph?", S`$y=0.5(x+2)^2-4$`, [S`$y=0.5(x-2)^2-4$`, S`$y=2(x+2)^2-4$`, S`$y=0.5(x+2)^2+4$`], "Vertex (−2, −4), through (2, 4).", planeDoc({ view: { xmin: -7, xmax: 3, ymin: -5, ymax: 6 }, curves: [{ f: (x) => 0.5 * (x + 2) ** 2 - 4, color: "violet" }], points: [{ x: -2, y: -4, label: "(−2, −4)", color: "amber" }, { x: 2, y: 4, label: "(2, 4)" }] })),
  mc("The graph shows y = −3x² − 6x + 1. What is its vertex?", S`$(-1,\,4)$`, [S`$(1,\,4)$`, S`$(-1,\,1)$`, S`$(-1,\,-2)$`], "−3(x + 1)² + 3 + 1.", planeDoc({ view: { xmin: -4, xmax: 2, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -3 * x * x - 6 * x + 1, color: "violet" }], points: [{ x: -1, y: 4, label: "(−1, 4)", color: "amber" }] })),
  tf(S`After completing the square, $x^2+bx+c=\left(x+\frac b2\right)^2+c-\frac{b^2}4$.`, true, "Add and subtract (b/2)²."),
  num(S`For $y=x^2-kx+20$ with $k>0$, the minimum is $11$. Enter $k$.`, 6, "20 − k²/4 = 11 ⇒ k² = 36."),
  num(S`Two numbers sum to $18$. Complete the square to find their maximum product.`, 81, "n(18 − n) = −(n − 9)² + 81."),
  num(S`$C=0.5x^2-20x+300$. Enter the minimum cost.`, 100, "0.5(x − 20)² − 200 + 300."),
  mx(S`Write $y=2x^2+5x-3$ in vertex form.`, "2*(x+1.25)^2-6.125", "2(x² + 2.5x + 1.5625 − 1.5625) − 3."),
  num(S`For $y=-x^2+bx-7$ with maximum value $2$ and $b>0$, enter $b$.`, 6, "−7 + b²/4 = 2."),
  tf(S`Completing the square on $4x^2+8x+9$ shows the graph has no $x$-intercepts.`, true, "4(x + 1)² + 5 > 0."),
  num(S`For $P=30I-2.5I^2$, enter the maximum value.`, 90, "−2.5(I − 6)² + 90."),
  num(S`The parabola $y=x^2+6x+k$ touches the $x$-axis. Enter $k$.`, 9, "(x + 3)² + k − 9 with minimum 0."),
];

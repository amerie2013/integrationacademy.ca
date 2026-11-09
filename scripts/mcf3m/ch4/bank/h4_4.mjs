// 4.4 The Discriminant and the Number of Roots — 20 hard questions
import { mc, ms, num, tf } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "4.4 The Discriminant and the Number of Roots";
export const Q = [
  num(S`For which $k>0$ is the line $y=kx$ tangent to $y=x^2+9$?`, 6, "x² − kx + 9 = 0: k² = 36.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 24 }, curves: [{ f: (x) => x * x + 9, color: "violet" }], lines: [{ m: 6, b: 0, color: "blue" }], points: [{ x: 3, y: 18, label: "(3, 18)", color: "amber" }], step: { x: 1, y: 3 } })),
  num(S`For which $b$ is the line $y=4x+b$ tangent to $y=x^2$?`, -4, "x² − 4x − b = 0: 16 + 4b = 0."),
  num(S`How many integers $k$ make $x^2+kx+4=0$ have no real roots?`, 7, "k² < 16 ⇒ −4 < k < 4: −3 … 3."),
  num(S`For $kx^2-6x+1=0$ with no real roots, enter the smallest integer $k$.`, 10, "36 − 4k < 0 ⇒ k > 9."),
  num(S`$h(t)=-4.9t^2+19.6t+1$. Enter the largest whole number of metres $h$ reaches.`, 20, "Max at t = 2: 20.6 m; D for 21 m is negative."),
  num(S`For which $c$ does $2x^2-8x+c=0$ have exactly one root?`, 8, "64 − 8c = 0."),
  num(S`The equation $x^2+(k-2)x+1=0$ has one root. Enter the positive $k$.`, 4, "(k − 2)² − 4 = 0 ⇒ k − 2 = ±2."),
  ms(S`Select every value of $k$ for which $x^2-2kx+k+6=0$ has exactly one root.`, ["k = 3", "k = −2", "k = 2", "k = −3"], [0, 1], "4k² − 4(k + 6) = 0 ⇒ k² − k − 6 = 0 ⇒ k = 3, −2."),
  mc("The graph shows y = ax² + bx + c with a > 0 and vertex below the x-axis. What must be true?", S`$D>0$`, [S`$D=0$`, S`$D<0$`, S`$c>0$`], "It crosses twice.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => (x - 1.5) ** 2 - 3, color: "violet" }] })),
  mc("A ball's height h(t) = −5t² + 20t and the line h = 25 are shown. Use D to explain.", "D = 400 − 500 < 0: it never reaches 25 m", ["D = 0: it touches 25 m", "D > 0: it passes 25 m twice", "D cannot be used"], "Maximum height is 20 m.", planeDoc({ view: { xmin: -0.3, xmax: 4.5, ymin: -2, ymax: 28 }, curves: [{ f: (t) => -5 * t * t + 20 * t, a: 0, b: 4, color: "violet" }], lines: [{ m: 0, b: 25, color: "red", dash: true }], step: { x: 0.5, y: 5 } })),
  tf(S`$x^2+bx-5=0$ has two real roots for every real $b$.`, true, "D = b² + 20 > 0."),
  tf(S`If $D$ is a perfect square, the roots must be integers.`, false, "They are rational, e.g. 2x² − x − 1 = 0: 1 and −½."),
  num(S`For which $m$ does $y=mx+1$ meet $y=x^2+2$ exactly once, with $m>0$?`, 2, "x² − mx + 1 = 0: m² = 4."),
  num(S`For $y=x^2-6x+k$, the vertex is on the $x$-axis. Enter $k$.`, 9, "D = 0."),
  num(S`For what $k$ does $3x^2+kx+3=0$ have one root, with $k<0$?`, -6, "k² = 36."),
  num(S`Enter the discriminant of $\tfrac12x^2-3x+4=0$.`, 1, "9 − 8."),
  mc(S`For which values of $k$ does $x^2+kx+k=0$ have no real roots?`, S`$0<k<4$`, [S`$k<0$ or $k>4$`, S`$k=0$ or $k=4$`, S`$k>4$`], "k² − 4k < 0 ⇒ k(k − 4) < 0."),
  num(S`A rectangle has perimeter $20$ m. What is the largest area $A$ for which $x(10-x)=A$ has a real solution?`, 25, "x² − 10x + A = 0: 100 − 4A ≥ 0."),
  mc("Three parabolas y = x² + 4x + c are shown for c = 2, 4, 6. Which has D = 0?", "c = 4", ["c = 2", "c = 6", "none"], "16 − 4c = 0.", planeDoc({ view: { xmin: -5, xmax: 1, ymin: -3, ymax: 8 }, curves: [{ f: (x) => x * x + 4 * x + 2, color: "violet" }, { f: (x) => x * x + 4 * x + 4, color: "blue" }, { f: (x) => x * x + 4 * x + 6, color: "red" }] })),
  num(S`For $P=24I-1.5I^2$, enter the largest power $P_0$ for which $P=P_0$ has a solution.`, 96, "1.5I² − 24I + P₀ = 0: 576 − 6P₀ ≥ 0."),
];

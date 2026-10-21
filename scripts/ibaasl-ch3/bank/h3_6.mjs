// 3.6 The Quadratic Formula and the Discriminant — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const TOPIC = "3.6 The Quadratic Formula and the Discriminant";
export const Q = [
  num(S`$(k+1)x^2+4x+(k-2)=0$ has equal roots and $k>0$. Find $k$.`, 3, "16 − 4(k + 1)(k − 2) = 0 → k² − k − 6 = 0."),
  mc(S`$x^2+kx+4=0$ has no real roots when:`, S`$-4<k<4$`, [S`$k<-4$ or $k>4$`, S`$k<4$`, S`$-2<k<2$`], "k² − 16 < 0."),
  num(S`The line $y=x+c$ is a tangent to $y=x^2-3x+2$ (shown). Find $c$.`, -2, "x² − 4x + 2 − c = 0 with 16 − 4(2 − c) = 0.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -3, ymax: 6 }, curves: [{ f: (x) => x * x - 3 * x + 2 }], lines: [{ m: 1, b: -2, color: "green" }], points: [P(2, 0)] })),
  num(S`The parabola $y=x^2+6x+k$ touches the x-axis (shown). Find $k$.`, 9, "36 − 4k = 0.", planeDoc({ view: { xmin: -6, xmax: 0, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x * x + 6 * x + 9 }], points: [P(-3, 0)] })),
  num(S`How many integers $k$ make $x^2-2kx+9=0$ have no real roots?`, 5, "4k² − 36 < 0 → −3 < k < 3."),
  tf(S`$x^2+(k-1)x-k=0$ has real roots for every real $k$.`, true, "Δ = (k − 1)² + 4k = (k + 1)² ≥ 0."),
  num(S`$x^2+kx+k+3=0$ has equal roots and $k>0$. Find $k$.`, 6, "k² − 4k − 12 = 0 → k = 6 or −2."),
  num(S`How many integers satisfy $2x^2-x-6\le0$?`, 4, "(2x + 3)(x − 2) ≤ 0 → −1.5 ≤ x ≤ 2: −1, 0, 1, 2."),
  num(S`The graph of $y=-x^2+2x+15$ is shown. The solution of $-x^2+2x+15>0$ is an interval. Find its length.`, 8, "−(x − 5)(x + 3) > 0 → −3 < x < 5.", planeDoc({ view: { xmin: -5, xmax: 7, ymin: -5, ymax: 18 }, curves: [{ f: (x) => -x * x + 2 * x + 15 }], points: [P(-3, 0), P(5, 0)], step: { x: 1, y: 2 } })),
  num(S`The line $y=mx$, $m>0$, is a tangent to $y=x^2+4$. Find $m$.`, 4, "x² − mx + 4 = 0 with m² = 16."),
  mc(S`$y=2x+k$ meets $y=x^2-2x+6$ at two points when:`, S`$k>2$`, [S`$k<2$`, S`$k=2$`, S`$k>6$`], "x² − 4x + 6 − k = 0 with 16 − 4(6 − k) > 0."),
  tf(S`A ball has height $h=-4.9t^2+15t+2$ m (shown). It reaches a height of 14 m.`, false, "−4.9t² + 15t − 12 = 0 has Δ = 225 − 235.2 < 0.", planeDoc({ view: { xmin: -0.3, xmax: 3.5, ymin: -2, ymax: 17 }, curves: [{ f: (t) => -4.9 * t * t + 15 * t + 2, a: 0, b: 3.2 }], lines: [{ m: 0, b: 14, color: "green", dash: true }], step: { x: 0.5, y: 2 }, xlabel: "t", ylabel: "h" })),
  num(S`What is the greatest height of the ball $h=-4.9t^2+15t+2$ (2 d.p.)?`, 2 + 225 / 19.6, "At t = 15/9.8: h = 2 + 225/19.6.", null, 0.01),
  ms(S`$f(x)=ax^2+bx+c$ with $a>0$ and $\Delta<0$. Which are true? Select all.`, [S`$f(x)>0$ for every $x$`, "f has no real zeros", "The vertex is above the x-axis", S`$c<0$`], [0, 1, 2], "c = f(0) > 0."),
  num(S`The roots of $x^2-6x+c=0$ differ by 2. Find $c$.`, 8, "Roots 3 ± 1: c = 2 × 4."),
  num(S`Solve $x(x+3)=5$. Give the positive root (3 s.f.).`, (-3 + Math.sqrt(29)) / 2, "x² + 3x − 5 = 0.", null, 0.005),
  num(S`What is the largest integer $p$ for which $y=p-x^2$ and $y=x^2+2$ do not meet?`, 1, "2x² = p − 2 has no solution when p < 2."),
  num("A rectangle has perimeter 20 cm. Using the discriminant, find the largest area it can have.", 25, "x(10 − x) = A → x² − 10x + A = 0 needs 100 − 4A ≥ 0."),
  num(S`The graphs of $y=x^2-1$ and $y=x+1$ are shown. Find the sum of the x-coordinates of their intersections.`, 1, "x² − x − 2 = 0 → x = 2, −1.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x - 1 }], lines: [{ m: 1, b: 1, color: "green" }], points: [P(2, 3), P(-1, 0)] })),
  mc(S`If $b^2=4ac$ with $a\ne0$, the root of $ax^2+bx+c=0$ is:`, S`$x=-\frac{b}{2a}$`, [S`$x=\frac{b}{2a}$`, S`$x=-\frac{c}{b}$`, S`$x=\pm\frac{b}{2a}$`], "With Δ = 0 the formula gives −b/(2a) once."),
];

// 3.2 Reciprocal of a Quadratic Function — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { RG, P, planeDoc } from "./fig.mjs";
const S = String.raw;

export const TOPIC = "3.2 Reciprocal of a Quadratic Function";
export const Q = [
  mc(S`$y=\dfrac1{x^2+bx+c}$ has VAs $x=-2$ and $x=8$. What is its turning point?`, S`$\left(3,-\tfrac1{25}\right)$`, [S`$(3,-25)$`, S`$\left(-3,\tfrac1{25}\right)$`, S`$\left(5,-\tfrac1{16}\right)$`], "(x + 2)(x − 8) has vertex (3, −25)."),
  mc(S`For which $k$ does $y=\dfrac1{x^2-2x+k}$ have two vertical asymptotes?`, S`$k\lt1$`, [S`$k>1$`, S`$k=1$`, S`$k\gt0$`], "Discriminant 4 − 4k > 0."),
  mc(S`What is the range of $y=\dfrac1{2x^2+4x+5}$?`, S`$0\lt y\le\tfrac13$`, [S`$0\lt y\le\tfrac15$`, S`$y>0$`, S`$y\ge\tfrac13$`], "2(x + 1)² + 3 has minimum 3."),
  mc(S`What is the range of $y=-\dfrac1{x^2+2}$?`, S`$-\tfrac12\le y\lt0$`, [S`$0\lt y\le\tfrac12$`, S`$y\le-\tfrac12$`, S`$y\lt0$`], "The reflection of a hump with height 1/2."),
  mc(S`Solve $\dfrac1{x^2-4}\ge\dfrac15$.`, S`$[-3,-2)\cup(2,3]$`, [S`$[-3,3]$`, S`$(-2,2)$`, S`$(-\infty,-3]\cup[3,\infty)$`], "0 < x² − 4 ≤ 5."),
  mc(S`Solve $\dfrac1{x^2+1}\gt\dfrac12$.`, S`$-1\lt x\lt1$`, [S`$x\lt-1$ or $x>1$`, S`$x>1$`, "all real x"], "x² + 1 < 2."),
  num(S`$y=\dfrac a{x^2+4}$ has a maximum of 3. Find $a$.`, 12, "a/4 = 3."),
  mc(S`$y=\dfrac a{(x-1)(x-5)}$ has a local maximum at $(3,-2)$. Find $a$.`, S`$a=8$`, [S`$a=-8$`, S`$a=4$`, S`$a=2$`], "f(3) = −4, so a/(−4) = −2."),
  num(S`The instantaneous rate of change of $y=\dfrac1{x^2+1}$ at $x=1$ is about what value? (Use a short interval; 1 decimal.)`, -0.5, "−2x/(x² + 1)² at x = 1.", null, 0.02),
  num(S`What is the instantaneous rate of change of $y=\dfrac1{x^2+5}$ at $x=0$?`, 0, "A turning point has a horizontal tangent."),
  tf(S`Every reciprocal of a quadratic has a turning point.`, false, "A double zero: 1/(x − a)² has none."),
  tf(S`If a parabola opens down and has no real zeros, its reciprocal is always negative.`, true, "The parabola is always negative."),
  mc("Which equation fits the graph (turning point marked)?", S`$y=\dfrac4{x^2-4}$`, [S`$y=\dfrac1{x^2-4}$`, S`$y=\dfrac4{x^2+4}$`, S`$y=\dfrac1{x^2-1}$`], "VAs x = ±2 and y(0) = −1.", RG((x) => 4 / (x * x - 4), [-2, 2], { xmin: -6, xmax: 6, ymin: -4, ymax: 4 }, 0, [P(0, -1)])),
  mc("The graph shows a reciprocal with a double zero. Which equation fits?", S`$y=\dfrac4{(x-2)^2}$`, [S`$y=\dfrac1{(x-2)^2}$`, S`$y=\dfrac4{(x+2)^2}$`, S`$y=\dfrac4{x^2-4}$`], "VA x = 2; passes through (0, 1).", RG((x) => 4 / (x - 2) ** 2, [2], { xmin: -4, xmax: 8, ymin: -1, ymax: 6 }, 0, [P(0, 1)])),
  mc("The hump has its top at the marked point. Which function is it?", S`$y=\dfrac1{(x-1)^2+2}$`, [S`$y=\dfrac1{(x+1)^2+2}$`, S`$y=\dfrac1{(x-1)^2+\frac12}$`, S`$y=(x-1)^2+2$`], "Max 1/2 at x = 1 means vertex (1, 2).", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -0.25, ymax: 1 }, curves: [{ f: (x) => 1 / ((x - 1) ** 2 + 2), color: "violet" }], points: [P(1, 0.5)], step: { x: 1, y: 0.25 } })),
  mc("From the graph, on which set does the function decrease?", S`$(1,3)$ and $(3,\infty)$`, [S`$(-\infty,-1)$ and $(-1,1)$`, S`$(-1,3)$`, S`$(1,\infty)$`], "To the right of the turning point, on each branch.", RG((x) => 1 / ((x + 1) * (x - 3)), [-1, 3], { xmin: -4, xmax: 6, ymin: -2, ymax: 2 }, 0, [P(1, -0.25, false)], { step: { x: 1, y: 0.5 } })),
  num(S`How many solutions has $\dfrac1{x^2-1}=-2$?`, 2, "x² − 1 = −1/2: x² = 1/2."),
  num(S`How many solutions has $\dfrac1{x^2-1}=-\dfrac12$?`, 0, "x² − 1 = −2 needs x² = −1. The middle branch only reaches y ≤ −1, so −1/2 is never attained."),
  mc(S`How many real solutions has $\dfrac1{x^2-4x+3}=-2$?`, "2", ["0", "1", "4"], "The turning value is −1, so y = −2 meets the middle branch twice."),
  num(S`A signal strength is $S(d)=\dfrac{100}{d^2+1}$. Find the average rate of change of $S$ from $d=1$ to $d=3$.`, -20, "(10 − 50)/2."),
];

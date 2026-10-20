// 3.2 Converting Between Forms — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { P, graph, planeDoc } from "./fig.mjs";

const S = String.raw;
const V10 = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 };

export const TOPIC = "3.2 Converting Between Forms";
export const Q = [
  num(S`A parabola has zeros $-4$ and $8$ and a maximum value of 18. Find its y-intercept.`, 16, "Axis 2: a(6)(−6) = 18 → a = −½; y(0) = −½(4)(−8)."),
  num(S`$f(x)=x^2+bx+c$ has vertex $(-3,2)$. Find $f(1)$.`, 18, "(x + 3)² + 2 = x² + 6x + 11."),
  mc("The parabola shown has zeros 0 and 4 and vertex (2, −8). Which equation is it?", S`$y=2x^2-8x$`, [S`$y=x^2-4x$`, S`$y=-2x^2+8x$`, S`$y=2x^2+8x$`], "2x(x − 4).", graph((x) => 2 * x * x - 8 * x, V10, [P(0, 0), P(4, 0), P(2, -8)])),
  num(S`A parabola passes through $(1,0)$, $(5,0)$ and $(3,-6)$. Find $a$.`, 1.5, "a(2)(−2) = −6.", null, 0.001),
  num(S`How far apart are the vertices of $y=x^2-4x+7$ and $y=-x^2+4x-1$?`, 0, "Both vertices are (2, 3)."),
  num(S`$y=x^2+bx+16$ has its vertex on the x-axis and $b>0$. Find $b$.`, 8, "(x + 4)²."),
  num(S`A ball's height is $h(t)=-5t^2+20t+2$ m. Find its maximum height.`, 22, "t = 2: −20 + 40 + 2."),
  num(S`$f(x)=-2x^2+bx-7$ has its maximum at $x=3$. Find the maximum value.`, 11, "b = 12; −18 + 36 − 7."),
  num(S`A parabola has vertex $(2,-3)$ and a zero at $x=5$. Find its y-intercept (3 decimals).`, -1.667, "9a − 3 = 0 → a = ⅓; ⅓(4) − 3.", null, 0.002),
  mc(S`Which quadratic has zeros 2 and 8 and passes through $(5,18)$?`, S`$y=-2(x-2)(x-8)$`, [S`$y=2(x-2)(x-8)$`, S`$y=-2(x+2)(x+8)$`, S`$y=-(x-2)(x-8)$`], "a(3)(−3) = 18."),
  num("The parabola passes through (−2, 0), (4, 0) and (0, −4). Find the y-coordinate of its vertex.", -4.5, "a(2)(−4) = −4 → a = ½; vertex at x = 1: ½(3)(−3).", graph((x) => 0.5 * (x + 2) * (x - 4), V10, [P(-2, 0), P(4, 0), P(0, -4)]), 0.001),
  tf("Two different quadratic functions can have the same vertex and the same y-intercept.", false, "Vertex form plus one more point fixes a."),
  num("How far apart are the zeros of y = 2x² − 4x − 6?", 4, "2(x − 3)(x + 1).", planeDoc({ view: V10, curves: [{ f: (x) => 2 * x * x - 4 * x - 6, color: "violet" }], points: [P(-1, 0), P(3, 0)] })),
  num(S`$y=ax^2+bx+c$ has vertex $(1,-8)$ and passes through $(3,0)$. Find $c$.`, -6, "4a − 8 = 0 → a = 2; 2(x − 1)² − 8 = 2x² − 4x − 6."),
  num(S`$y=-x^2+bx+c$ has zeros $-1$ and $5$. Find $b+c$.`, 9, "−(x + 1)(x − 5) = −x² + 4x + 5."),
  num("The parabola shown passes through (−3, 0), (1, 0) and (−1, 8). Write it in standard form. What is c?", 6, "a(2)(−2) = 8 → a = −2; −2(x² + 2x − 3).", graph((x) => -2 * (x + 3) * (x - 1), V10, [P(-3, 0), P(1, 0), P(-1, 8)])),
  ms(S`Which expressions equal $x^2-6x+5$? Select all.`, ["(x − 1)(x − 5)", "(x − 3)² − 4", "(x − 3)² + 5", "(x + 1)(x + 5)"], [0, 1], "(x − 3)² − 4 = x² − 6x + 9 − 4."),
  num(S`For $y=kx^2-8x+3$ the axis is $x=2$. Find $k$.`, 2, "8/(2k) = 2."),
  num(S`The parabolas $y=x^2-6x+c$ and $y=-(x-3)^2+5$ have the same vertex. Find $c$.`, 14, "Vertex of the first: (3, c − 9) = (3, 5)."),
  num("The parabola shown has zeros −1 and 5 and y-intercept 2.5. In vertex form y = a(x − h)² + k, what is k?", 4.5, "a(1)(−5) = 2.5 → a = −½; axis 2: −½(3)(−3).", graph((x) => -0.5 * (x + 1) * (x - 5), V10, [P(-1, 0), P(5, 0), P(0, 2.5)]), 0.001),
];

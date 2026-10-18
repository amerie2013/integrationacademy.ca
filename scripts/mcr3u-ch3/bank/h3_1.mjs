// 3.1 Properties of Quadratic Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { P, graph, planeDoc } from "./fig.mjs";

const V10 = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 };

export const TOPIC = "3.1 Properties of Quadratic Functions";
export const Q = [
  num(String.raw`A parabola has zeros $-4$ and $8$ and a maximum value of 18. Find its y-intercept.`, 16, "Axis 2: a(6)(−6) = 18 → a = −½; y(0) = −½(4)(−8)."),
  num(String.raw`A quadratic passes through $(-1,10)$, $(0,4)$ and $(2,4)$. Find the y-coordinate of its vertex.`, 2, "c = 4, b = −2a, a + 2a = 6 → a = 2, b = −4; vertex at x = 1."),
  num("A quadratic table uses x-values 3 apart; its second differences are 54. Find a.", 3, "2a(3²) = 54."),
  num(String.raw`$f(x)=x^2+bx+c$ has vertex $(-3,2)$. Find $f(1)$.`, 18, "(x + 3)² + 2 = x² + 6x + 11."),
  mc("The parabola shown has zeros 0 and 4 and vertex (2, −8). Which equation is it?", String.raw`$y=2x^2-8x$`, [String.raw`$y=x^2-4x$`, String.raw`$y=-2x^2+8x$`, String.raw`$y=2x^2+8x$`], "2x(x − 4).", graph((x) => 2 * x * x - 8 * x, V10, [P(0, 0), P(4, 0), P(2, -8)])),
  num(String.raw`A parabola passes through $(1,0)$, $(5,0)$ and $(3,-6)$. Find $a$.`, 1.5, "a(2)(−2) = −6.", null, 0.001),
  tf("If a quadratic table has negative second differences, the parabola opens down.", true, "2a < 0."),
  num(String.raw`How far apart are the vertices of $y=x^2-4x+7$ and $y=-x^2+4x-1$?`, 0, "Both vertices are (2, 3)."),
  num("Find the area of the triangle formed by the vertex and the two zeros of the parabola shown.", 27, "Zeros 1, 7 (base 6); vertex (4, 9) (height 9).", graph((x) => -(x - 1) * (x - 7), { xmin: -1, xmax: 9, ymin: -2, ymax: 10 }, [P(1, 0), P(7, 0), P(4, 9)], { segs: [{ pts: [[1, 0], [4, 9], [7, 0]], color: "green" }] })),
  num(String.raw`$y=x^2+bx+16$ has its vertex on the x-axis and $b>0$. Find $b$.`, 8, "(x + 4)²."),
  ms(String.raw`For $y=a(x+2)(x-6)$ with $a<0$, which are true? Select all.`, ["the axis is x = 2", "the vertex is a maximum", "the y-intercept is positive", "the range is y ≥ 0"], [0, 1, 2], "y(0) = −12a > 0 when a < 0."),
  num(String.raw`A ball's height is $h(t)=-5t^2+20t+2$ m. Find its maximum height.`, 22, "t = 2: −20 + 40 + 2."),
  num(String.raw`$f(x)=-2x^2+bx-7$ has its maximum at $x=3$. Find the maximum value.`, 11, "b = 12; −18 + 36 − 7."),
  num(String.raw`A quadratic table gives $y=1,2,7,k$ at $x=0,1,2,3$. Find $k$.`, 16, "Differences 1, 5 → second 4 → next difference 9."),
  num(String.raw`A parabola has vertex $(2,-3)$ and a zero at $x=5$. Find its y-intercept (3 decimals).`, -1.667, "9a − 3 = 0 → a = ⅓; ⅓(4) − 3.", null, 0.002),
  mc(String.raw`Which quadratic has zeros 2 and 8 and passes through $(5,18)$?`, String.raw`$y=-2(x-2)(x-8)$`, [String.raw`$y=2(x-2)(x-8)$`, String.raw`$y=-2(x+2)(x+8)$`, String.raw`$y=-(x-2)(x-8)$`], "a(3)(−3) = 18."),
  num("The parabola passes through (−2, 0), (4, 0) and (0, −4). Find the y-coordinate of its vertex.", -4.5, "a(2)(−4) = −4 → a = ½; vertex at x = 1: ½(3)(−3).", graph((x) => 0.5 * (x + 2) * (x - 4), V10, [P(-2, 0), P(4, 0), P(0, -4)]), 0.001),
  tf("Two different quadratic functions can have the same vertex and the same y-intercept.", false, "Vertex form plus one more point fixes a."),
  num(String.raw`$y=ax^2+bx+6$ has axis $x=2$ and passes through $(1,0)$. Find its other zero.`, 3, "Symmetric about x = 2."),
  num("How far apart are the zeros of y = 2x² − 4x − 6?", 4, "2(x − 3)(x + 1).", planeDoc({ view: V10, curves: [{ f: (x) => 2 * x * x - 4 * x - 6, color: "violet" }], points: [P(-1, 0), P(3, 0)] })),
];

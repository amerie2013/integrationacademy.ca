// 3.1 The Three Forms of a Quadratic Function — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { P, graph } from "./fig.mjs";

const S = String.raw;
const V10 = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 };

export const TOPIC = "3.1 The Three Forms of a Quadratic Function";
export const Q = [
  num("Find the area of the triangle formed by the vertex and the two zeros of the parabola shown.", 27, "Zeros 1, 7 (base 6); vertex (4, 9) (height 9).", graph((x) => -(x - 1) * (x - 7), { xmin: -1, xmax: 9, ymin: -2, ymax: 10 }, [P(1, 0), P(7, 0), P(4, 9)], { segs: [{ pts: [[1, 0], [4, 9], [7, 0]], color: "green" }] })),
  ms(S`For $y=a(x+2)(x-6)$ with $a<0$, which are true? Select all.`, ["the axis is x = 2", "the vertex is a maximum", "the y-intercept is positive", "the range is y ≥ 0"], [0, 1, 2], "y(0) = −12a > 0 when a < 0."),
  num(S`$y=ax^2+bx+6$ has axis $x=2$ and passes through $(1,0)$. Find its other zero.`, 3, "Symmetric about x = 2."),
  num(S`A parabola has vertex $(-2,8)$ and $a=-2$. How far apart are its zeros?`, 4, "−2(x + 2)² + 8 = 0 → (x + 2)² = 4 → x = 0 or −4."),
  num(S`For $y=a(x+1)(x-7)$ the maximum value is 32. Find $a$.`, -2, "Axis x = 3: a(4)(−4) = −16a = 32."),
  num(S`The y-intercept of $y=2(x-h)^2-18$ is 0 and $h>0$. Find $h$.`, 3, "2h² − 18 = 0."),
  tf("A parabola whose vertex is below the x-axis and which opens down has no zeros.", true, "Its highest point is below the axis."),
  num(S`$y=(x-r)(x-6)$ has its vertex at $x=1$. Find its minimum value.`, -25, "r = −4; y(1) = (5)(−5)."),
  ms(S`For $y=-(x-3)^2+k$ with $k<0$, which are true? Select all.`, ["it has no zeros", "its range is y ≤ k", "its axis is x = 3", "its y-intercept is positive"], [0, 1, 2], "y(0) = −9 + k < 0."),
  num("The parabola shown has vertex (3, −4) and passes through (5, 0). Find its y-intercept.", 5, "a(4) − 4 = 0 → a = 1; (0 − 3)² − 4.", graph((x) => (x - 3) ** 2 - 4, V10, [P(3, -4), P(5, 0)])),
  num(S`The vertex of $y=-(x-1)(x-9)+c$ lies at the same point as the vertex of $y=(x-1)(x-9)$. Find $c$.`, -32, "Vertex of the first: (5, −16). Second: −(4)(−4) + c = 16 + c = −16."),
  num("The parabola shown is y = a(x − 2)² + k and passes through (0, −4). Find a.", 0.5, "Vertex (2, −6): 4a − 6 = −4.", graph((x) => 0.5 * (x - 2) ** 2 - 6, V10, [P(2, -6), P(0, -4)]), 0.001),
  num(S`$y=a(x-4)^2+k$ passes through $(2,5)$ and $(7,15)$. Find $k$.`, -3, "4a + k = 5 and 9a + k = 15: a = 2."),
  mc(S`Which parabola has range $y\le-2$?`, S`$y=-3(x+1)^2-2$`, [S`$y=3(x+1)^2-2$`, S`$y=-3(x+2)^2+1$`, S`$y=-(x-2)^2$`], "Opens down with k = −2."),
  num(S`$y=a(x-2)(x-8)$ has y-intercept $-32$. Find its maximum value.`, 18, "16a = −32 → a = −2; axis 5: −2(3)(−3)."),
  tf(S`A quadratic with zeros $-3$ and $5$ must have its vertex at $x=1$.`, true, "The axis is the average of the zeros."),
  num(S`A diver's height is $h(t)=-5(t-0.4)^2+10.8$ m. From what height did the diver jump?`, 10, "h(0) = −0.8 + 10.8.", null, 0.001),
  num("Find the length of the horizontal segment joining the two points of y = (x − 1)² − 4 at height 5 (shown).", 6, "(x − 1)² = 9 → x = −2 and 4.", graph((x) => (x - 1) ** 2 - 4, V10, [P(-2, 5), P(4, 5)], { lines: [{ m: 0, b: 5, color: "green", dash: true }] })),
  num(S`Find the vertical distance between the vertices of $y=2(x-1)(x-5)$ and $y=-(x-1)(x-5)$.`, 12, "Vertices (3, −8) and (3, 4)."),
  num(S`A parabola has zeros 2 and 10 and passes through $(6,-8)$. Find its y-intercept.`, 10, "a(4)(−4) = −8 → a = ½; ½(−2)(−10)."),
];

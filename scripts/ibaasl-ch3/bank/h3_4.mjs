// 3.4 Graphing Quadratic Functions — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const TOPIC = "3.4 Graphing Quadratic Functions";
export const Q = [
  num("The parabola shown passes through (−3, 0), (1, 0) and (0, −6). What is its minimum value?", -8, "y = a(x + 3)(x − 1) with −3a = −6, so a = 2; at x = −1: 2(2)(−2).", planeDoc({ view: { xmin: -5, xmax: 3, ymin: -10, ymax: 6 }, curves: [{ f: (x) => 2 * (x + 3) * (x - 1) }], points: [P(-3, 0), P(1, 0), P(0, -6)], step: { x: 1, y: 2 } })),
  num("The parabola shown has vertex (−3, 4) and passes through (−1, 0). What is its y-intercept?", -5, "a(2)² + 4 = 0 → a = −1; y(0) = −9 + 4.", planeDoc({ view: { xmin: -7, xmax: 2, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -((x + 3) ** 2) + 4 }], points: [P(-3, 4), P(-1, 0)] })),
  num(S`$y=ax^2+bx+c$ passes through $(0,5)$, $(1,2)$ and $(2,1)$. Find $b$.`, -4, "c = 5; a + b = −3; 4a + 2b = −4 → a = 1, b = −4."),
  mx(S`A parabola has zeros $-2$ and $3$ and maximum value $12.5$. Write it in the form $ax^2+bx+c$.`, "-2*x^2+2*x+12", "a(2.5)(−2.5) = 12.5 → a = −2."),
  num(S`$y=x^2+kx+9$ touches the x-axis and $k>0$. Find $k$.`, 6, "(x + 3)² = x² + 6x + 9."),
  num(S`$f(x)=2x^2-12x+7$ for $0\le x\le7$. What is the largest value of $f$?`, 21, "f(7) = 21 is bigger than f(0) = 7."),
  num(S`$f(x)=2x^2-12x+7$ for $0\le x\le7$. What is the smallest value of $f$?`, -11, "The vertex x = 3 is inside: f(3) = −11."),
  tf("A parabola with zeros 1 and 7 that passes through (3, 10) opens downward.", true, "a(2)(−4) = 10 → a = −1.25 < 0."),
  num(S`$y=(x-k)(x+4)$ has axis $x=1$. Find $k$.`, 6, "(k − 4)/2 = 1."),
  mc(S`Which function has range $y\ge2$ and axis $x=-1$?`, S`$y=3(x+1)^2+2$`, [S`$y=3(x-1)^2+2$`, S`$y=-3(x+1)^2+2$`, S`$y=3(x+2)^2-1$`], "Opens up with vertex (−1, 2)."),
  num(S`The graphs of $y=x^2-4$ and $y=-x^2+4$ are shown. Find the positive x-coordinate where they meet.`, 2, "2x² = 8.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x * x - 4 }, { f: (x) => -x * x + 4, color: "green" }] })),
  num(S`$(-1,7)$ and $(5,7)$ lie on a parabola $y=x^2+bx+c$ whose minimum value is $-2$. Find its y-intercept.`, 2, "Axis x = 2: y = (x − 2)² − 2."),
  num("A bridge cable hangs between towers 100 m apart, each 30 m high, with its lowest point 5 m above the road halfway between them (shown). How high is the cable 20 m from a tower?", 14, "y = 0.01(x − 50)² + 5; y(20) = 9 + 5.", planeDoc({ view: { xmin: -8, xmax: 118, ymin: -2, ymax: 34 }, curves: [{ f: (x) => 0.01 * (x - 50) ** 2 + 5, a: 0, b: 100 }], points: [P(0, 30), P(100, 30), P(50, 5), P(20, 14)], step: { x: 10, y: 5 } })),
  ms(S`For $y=-2(x-3)(x+1)$, which are true? Select all.`, ["It opens downward", "Its axis is x = 1", "Its y-intercept is 6", "Its maximum value is 6"], [0, 1, 2], "At x = 1: −2(−2)(2) = 8."),
  num(S`$f(x)=a(x-h)^2+k$ with $f(0)=11$, $f(2)=3$ and $f(4)=3$. Find $k$.`, 2, "Axis x = 3: a + k = 3 and 9a + k = 11."),
  num(S`The vertex of $y=x^2-2mx+m+6$ lies on the x-axis and $m>0$. Find $m$.`, 3, "Vertex y = m + 6 − m² = 0."),
  num(S`What is the y-coordinate of the vertex of $y=(x-2)(x-8)+5$?`, -4, "x = 5: (3)(−3) + 5."),
  mc("A parabola opens upward and crosses the y-axis below the origin. Which must be true?", "It has two x-intercepts", ["Its vertex is on the y-axis", "It has no x-intercepts", "Its axis is x = 0"], "Its minimum is below the axis and it rises on both sides."),
  num("The parabola shown has vertex (2, 6) and passes through (0, 4). Find its positive zero (2 d.p.).", 2 + Math.sqrt(12), "−0.5(x − 2)² + 6 = 0 → x = 2 + √12.", planeDoc({ view: { xmin: -3, xmax: 7, ymin: -2, ymax: 8 }, curves: [{ f: (x) => -0.5 * (x - 2) ** 2 + 6 }], points: [P(2, 6), P(0, 4)] }), 0.01),
  num(S`$y=x^2+bx+c$ has vertex $(-1,-4)$. Find $c$.`, -3, "(x + 1)² − 4 = x² + 2x − 3."),
];

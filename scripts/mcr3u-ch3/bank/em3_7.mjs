// 3.7 Families of Quadratic Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { P, graph, planeDoc } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };
const fam = (r, s, as, view = V8) => planeDoc({ view, curves: as.map((a, i) => ({ f: (x) => a * (x - r) * (x - s), color: ["red", "amber", "blue", "green", "violet"][i % 5] })), points: [P(r, 0), P(s, 0)] });

export const E = [
  mc(String.raw`All members of $y=a(x-3)(x+5)$ share…`, "the zeros 3 and −5", ["the vertex", "the y-intercept", "the maximum value"], "Changing a never moves the zeros."),
  num(String.raw`What is the axis of symmetry of every member of $y=a(x-3)(x+5)$?`, -1, "Average of 3 and −5."),
  num(String.raw`Find $a$ if $y=a(x-1)(x-5)$ passes through $(0,10)$.`, 2, "5a = 10."),
  num(String.raw`Find $a$ if $y=a(x+2)(x-2)$ passes through $(0,8)$.`, -2, "−4a = 8."),
  tf("Changing a in y = a(x − r)(x − s) moves the zeros.", false, "The zeros stay at r and s."),
  mc(String.raw`Members of $y=a(x-r)(x-s)$ with $a<0$…`, "open down", ["open up", "have no zeros", "pass through the origin"], "Negative a."),
  num("A parabola has vertex (0, 3) and passes through (1, 5). Find a.", 2, "a + 3 = 5."),
  num("A parabola has vertex (2, 0) and passes through (4, 12). Find a.", 3, "4a = 12."),
  mx("Write the quadratic with zeros 0 and 4 and a = 1 in standard form.", "x^2-4*x", "x(x − 4)."),
  num(String.raw`What is the product of the zeros of $x^2-7x+10$?`, 10, "2 × 5."),
  num(String.raw`What is the sum of the zeros of $x^2-7x+10$?`, 7, "2 + 5."),
  mc(String.raw`Which belongs to the family $y=a(x-2)(x-6)$?`, String.raw`$y=-3(x-2)(x-6)$`, [String.raw`$y=(x+2)(x+6)$`, String.raw`$y=(x-2)(x-6)+1$`, String.raw`$y=(x-2)^2-6$`], "Only a changes."),
  num(String.raw`Find $a$ if $y=a(x-4)(x+1)$ passes through $(3,-8)$.`, 2, "a(−1)(4) = −8."),
  tf(String.raw`Every member of $y=a(x+1)(x-7)$ passes through $(7,0)$.`, true, "7 is a zero."),
  mc("What do the parabolas in the graph have in common?", "their zeros", ["their vertex", "their y-intercept", "their direction of opening"], "They all cross at −2 and 4.", fam(-2, 4, [-1, -0.5, 0.5, 1])),
  num("The violet parabola y = ax(x − 4) has its vertex at (2, 6). Find a.", -1.5, "a(2)(−2) = 6.", planeDoc({ view: V8, curves: [{ f: (x) => -1.5 * x * (x - 4), color: "violet" }], points: [P(0, 0), P(4, 0), P(2, 6)] }), 0.001),
  num(String.raw`What is the y-intercept of $y=2(x-3)(x+1)$?`, -6, "2(−3)(1)."),
  num(String.raw`The zeros of $x^2-6x+c$ are $3\pm\sqrt2$. Find $c$.`, 7, "(x − 3)² − 2."),
  tf(String.raw`The roots $1\pm\sqrt3$ have a sum of 2.`, true, "The radicals cancel."),
  num(String.raw`What is the x-coordinate of the vertex of every member of $y=a(x+4)(x-10)$?`, 3, "(−4 + 10)/2."),
];

export const M = [
  num(String.raw`A parabola has zeros $-3$ and $5$ and passes through $(1,32)$. Find $a$.`, -2, "a(4)(−4) = 32."),
  num(String.raw`A parabola has zeros $2\pm\sqrt3$ and passes through $(0,3)$. Find $a$.`, 3, "a(x² − 4x + 1); a(1) = 3."),
  num(String.raw`A parabola has zeros $1\pm\sqrt2$ and passes through $(2,4)$. Find $a$.`, -4, "a(x² − 2x − 1): a(−1) = 4."),
  num("A parabola has vertex (−3, 4) and passes through (−1, 0). Find a.", -1, "4a + 4 = 0."),
  num(String.raw`$x^2+bx+c$ has zeros $-2\pm\sqrt5$. Find $c$.`, -1, "(x + 2)² − 5 = x² + 4x − 1."),
  num(String.raw`$x^2+bx+c$ has zeros $-2\pm\sqrt5$. Find $b$.`, 4, "(x + 2)² − 5."),
  mx("Write the parabola with zeros 3 and −2 through (1, 12).", "-2*(x-3)*(x+2)", "a(−2)(3) = 12 → a = −2."),
  num("A parabolic arch is 20 m wide and 8 m high. How high is it 5 m from one end?", 6, "y = ax(x − 20), a = −0.08; −0.08(5)(−15)."),
  num(String.raw`The member of $y=a(x-1)(x-5)$ through $(0,-10)$ has what maximum value?`, 8, "a = −2; at x = 3: −2(2)(−2)."),
  tf("Two different members of the same family y = a(x − r)(x − s) can meet at a point other than the zeros.", false, "a₁f(x) = a₂f(x) only where f(x) = 0."),
  num(String.raw`A parabola has zeros 4 and $-2$ and the y-coordinate of its vertex is $-18$. Find $a$.`, 2, "At x = 1: a(−3)(3) = −18."),
  mc(String.raw`Which parabola has zeros $\pm\sqrt7$ and y-intercept $-14$?`, String.raw`$y=2x^2-14$`, [String.raw`$y=x^2-7$`, String.raw`$y=-2x^2+14$`, String.raw`$y=2x^2-7$`], "a(x² − 7) with −7a = −14."),
  num("The parabola has zeros −1 and 3 and passes through (1, −6). Find a.", 1.5, "a(2)(−2) = −6.", graph((x) => 1.5 * (x + 1) * (x - 3), V8, [P(-1, 0), P(3, 0), P(1, -6)]), 0.001),
  num(String.raw`A parabola has zeros $2\pm\sqrt6$ and passes through $(2,12)$. Find its y-intercept.`, 4, "a[(x − 2)² − 6]: −6a = 12 → a = −2; y(0) = −2(4 − 6)."),
  ms(String.raw`For members of $y=a(x^2-2x-3)$ with $a>0$, which are true? Select all.`, ["zeros 3 and −1", "axis x = 1", "the vertex is a minimum", "the y-intercept is negative", "the vertex is (1, 4a)"], [0, 1, 2, 3], "The vertex is (1, −4a)."),
  num("A parabola has vertex (5, −2) and passes through (3, 6). Find a.", 2, "4a − 2 = 6."),
  num("A tunnel arch is 12 m wide and 9 m high. How high is it 2 m from one side?", 5, "a(6)(−6) = 9 → a = −0.25; −0.25(2)(−10)."),
  num(String.raw`What is the sum of the zeros of $3x^2-12x+2$?`, 4, "Axis x = 2, so the zeros average 2."),
  num("Two members of y = a(x + 1)(x − 3) pass through (1, 8) and (1, −4). What is the difference between their a-values?", 3, "a(2)(−2): −4a = 8 → −2; −4a = −4 → 1.", fam(-1, 3, [-2, 1])),
  tf(String.raw`Zeros $5\pm\sqrt3$ can come from a quadratic with integer coefficients.`, true, "(x − 5)² − 3 = x² − 10x + 22."),
];

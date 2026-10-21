// 3.4 Graphing Quadratic Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  num(S`What is the x-coordinate of the vertex of $y=(x-4)^2+3$?`, 4, "Vertex (h, k) = (4, 3)."),
  num(S`What is the y-coordinate of the vertex of $y=-(x+1)^2+6$?`, 6, "Vertex (−1, 6)."),
  num(S`$y=(x-3)(x+8)$ has two zeros. Give the positive one.`, 3, "x − 3 = 0."),
  num(S`What is the y-intercept of $y=2x^2+5x-7$?`, -7, "c = −7."),
  num(S`The axis of symmetry of $y=(x+6)(x-2)$ is $x=k$. Find $k$.`, -2, "Halfway between −6 and 2."),
  mc(S`$y=-3x^2+x$ opens:`, "downward", ["upward", "to the left", "to the right"], "a = −3 < 0."),
  tf(S`$y=0.2x^2$ is wider than $y=x^2$.`, true, "|a| < 1 gives a wider parabola."),
  num(S`What is the smallest value in the range of $y=(x-1)^2-9$?`, -9, "Minimum at the vertex."),
  num(S`What is the maximum value of $y=5-2(x-3)^2$?`, 5, "At x = 3."),
  num("The axis of symmetry of the parabola shown is x = k. Find k.", 3, "Halfway between the zeros 1 and 5.", planeDoc({ view: { xmin: -1, xmax: 7, ymin: -5, ymax: 6 }, curves: [{ f: (x) => (x - 1) * (x - 5) }], points: [P(1, 0), P(5, 0), P(3, -4)] })),
  num("The parabola shown has zeros −4 and p. Find p.", 2, "It crosses the x-axis at x = 2.", planeDoc({ view: { xmin: -6, xmax: 4, ymin: -2, ymax: 10 }, curves: [{ f: (x) => -(x + 4) * (x - 2) }], points: [P(-4, 0), P(2, 0)] })),
  num(S`The axis of symmetry of $y=x^2-10x+1$ is $x=k$. Find $k$.`, 5, "x = −b/(2a) = 10/2."),
  mc(S`Which parabola has vertex $(-2,5)$?`, S`$y=(x+2)^2+5$`, [S`$y=(x-2)^2+5$`, S`$y=(x+5)^2-2$`, S`$y=(x+2)^2-5$`], "y = (x − h)² + k with h = −2."),
  fill("The turning point of a parabola is called its ___.", ["vertex", "Vertex"], "It is a maximum or a minimum."),
  num(S`What is the y-intercept of $y=(x+3)^2-4$?`, 5, "9 − 4."),
  num(S`What is the y-intercept of $y=3(x-2)(x+1)$?`, -6, "3(−2)(1)."),
  tf(S`$y=-x^2+4$ has a maximum value.`, true, "It opens downward."),
  mc(S`The axis of symmetry of $y=a(x-p)(x-q)$ is:`, S`$x=\frac{p+q}{2}$`, [S`$x=p+q$`, S`$x=\frac{p-q}{2}$`, S`$x=pq$`], "Halfway between the zeros."),
  num(S`What is the y-coordinate of the vertex of $y=x^2+8x$?`, -16, "x = −4: 16 − 32."),
  num(S`How many x-intercepts does $y=(x-5)^2$ have?`, 1, "It touches the axis at x = 5."),
];

export const M = [
  num(S`What is the y-coordinate of the vertex of $y=x^2-6x+1$?`, -8, "x = 3: 9 − 18 + 1."),
  num(S`What is the maximum value of $y=-2x^2+8x+3$?`, 11, "x = 2: −8 + 16 + 3."),
  num(S`$y=a(x+1)(x-7)$ passes through $(0,-14)$. Find $a$.`, 2, "−7a = −14."),
  mx(S`A parabola has vertex $(3,1)$ and $a=2$. Write it in the form $ax^2+bx+c$.`, "2*x^2-12*x+19", "2(x − 3)² + 1."),
  mc(S`The range of $y=-(x+2)^2-1$ is:`, S`$y\le-1$`, [S`$y\ge-1$`, S`$y\le-2$`, S`$y\ge-2$`], "Maximum −1 at the vertex."),
  num(S`A parabola has vertex $(1,-8)$ and passes through $(3,0)$. Find $a$.`, 2, "4a − 8 = 0."),
  num("The parabola shown is y = −0.5(x − 2)² + 8. What is its positive zero?", 6, "(x − 2)² = 16.", planeDoc({ view: { xmin: -4, xmax: 8, ymin: -2, ymax: 10 }, curves: [{ f: (x) => -0.5 * (x - 2) ** 2 + 8 }], points: [P(2, 8)] })),
  num("The parabola shown passes through (0, 6) and has zeros 2 and 6. What is its minimum value?", -2, "y = a(x − 2)(x − 6) with 12a = 6, so a = 0.5; at x = 4: 0.5(2)(−2).", planeDoc({ view: { xmin: -1, xmax: 8, ymin: -3, ymax: 7 }, curves: [{ f: (x) => 0.5 * (x - 2) * (x - 6) }], points: [P(0, 6), P(2, 0), P(6, 0)] })),
  num(S`What is the y-coordinate of the vertex of $y=(x+4)(x-2)$?`, -9, "Axis x = −1: (3)(−3)."),
  tf(S`$y=2x^2-3$ and $y=2(x-1)^2+5$ have the same shape.`, true, "Both have a = 2."),
  ms("Which parabolas have axis of symmetry x = 2? Select all.", [S`$y=(x-2)^2+7$`, S`$y=x^2-4x$`, S`$y=(x+1)(x-5)$`, S`$y=(x+2)^2$`], [0, 1, 2], "(x + 2)² has axis x = −2."),
  num(S`Write $y=-(x-3)^2+4$ in the form $ax^2+bx+c$. What is $c$?`, -5, "−x² + 6x − 9 + 4."),
  num(S`A parabola has zeros 3 and 9. Its vertex has x-coordinate:`, 6, "Halfway between the zeros."),
  num(S`$y=x^2+bx+10$ has axis $x=-3$. Find $b$.`, 6, "−b/2 = −3."),
  num(S`$y=x^2-4x+c$ has minimum value 6. Find $c$.`, 10, "(x − 2)² + c − 4."),
  mc("Which parabola is the narrowest?", S`$y=-4x^2$`, [S`$y=3x^2$`, S`$y=0.5x^2$`, S`$y=-x^2$`], "Largest |a|."),
  num(S`$y=a(x-2)^2+k$ passes through $(2,5)$ and $(4,-3)$. Find $a$.`, -2, "k = 5, then 4a + 5 = −3."),
  num(S`What is the y-coordinate of the vertex of $y=3x^2+6x-2$?`, -5, "x = −1: 3 − 6 − 2."),
  num(S`How many x-intercepts does $y=2(x+1)^2+3$ have?`, 0, "Minimum value 3 > 0."),
  num(S`How far apart are the zeros of $y=x^2-2x-15$?`, 8, "(x − 5)(x + 3)."),
];

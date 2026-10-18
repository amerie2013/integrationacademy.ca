// 2.4 Families of Polynomial Functions — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "2.4 Families of Polynomial Functions";
export const Q = [
  num(String.raw`A quartic has zeros $\pm2$ and a double zero at 1, and passes through $(3,20)$. Find its y-intercept.`, -4, "k(x² − 4)(x − 1)²: k(5)(4) = 20 → k = 1; f(0) = (−4)(1)."),
  num(String.raw`Find $k$ so that $y=k(x^2-2x-2)(x-3)$ passes through $(1,6)$.`, 1, "k(−3)(−2) = 6k."),
  num("The quartic shown touches the x-axis at −1 and 2 and has y-intercept 8. Find f(3).", 32, "k(x + 1)²(x − 2)²: 4k = 8 → k = 2; f(3) = 2(16)(1).", graph((x) => 2 * (x + 1) ** 2 * (x - 2) ** 2, { xmin: -2, xmax: 3, ymin: -2, ymax: 14 }, [P(0, 8)], { step: { x: 0.5, y: 2 } })),
  num(String.raw`The member of $y=k(x-2)(x+1)(x-4)$ through $(0,8)$ also passes through $(3,y_0)$. Find $y_0$.`, -4, "8k = 8 → k = 1; f(3) = (1)(4)(−1)."),
  mc(String.raw`Which cubic has zeros $1$ and $1\pm\sqrt2$ and y-intercept 1?`, String.raw`$y=(x-1)(x^2-2x-1)$`, [String.raw`$y=-(x-1)(x^2-2x-1)$`, String.raw`$y=(x+1)(x^2+2x-1)$`, String.raw`$y=(x-1)(x^2-2x+1)$`], "(x − 1)² − 2 = x² − 2x − 1; f(0) = k(−1)(−1) = k."),
  num(String.raw`Find $k$ so that the member of $y=k(x-1)(x+2)(x-3)$ has $f(-1)=-16$.`, -2, "k(−2)(1)(−4) = 8k."),
  num("The cubic shown flattens as it crosses at x = 1 and passes through (2, 3). Find its y-intercept.", -3, "k(x − 1)³ with k = 3; f(0) = −3.", graph((x) => 3 * (x - 1) ** 3, { xmin: -0.5, xmax: 2.5, ymin: -6, ymax: 6 }, [P(1, 0), P(2, 3)], { step: { x: 0.5, y: 1 } })),
  tf("There is exactly one cubic with zeros 1, 2, 3 and y-intercept 0.", false, "Every member has f(0) = −6k ≠ 0, so there is none."),
  num(String.raw`What is the smallest positive integer $k$ for which $y=k(x+3)(x-1)(x-2)$ has a y-intercept greater than 20?`, 4, "f(0) = 6k > 20."),
  num(String.raw`Members of $y=k(x-1)(x+1)$ pass through $(2,3)$ and $(2,-3)$. Find the sum of the two values of $k$.`, 0, "3k = ±3."),
  mc("The cubic shown passes through (1, 6). Which equation is it?", String.raw`$y=-x(x+2)(x-3)$`, [String.raw`$y=x(x+2)(x-3)$`, String.raw`$y=-x(x-2)(x+3)$`, String.raw`$y=-2x(x+2)(x-3)$`], "Zeros −2, 0, 3; at (1, 6): k(1)(3)(−2) = 6 → k = −1.", graph((x) => -x * (x + 2) * (x - 3), { xmin: -3, xmax: 4, ymin: -12, ymax: 14 }, [P(1, 6)], { step: { x: 1, y: 2 } })),
  num(String.raw`A quartic has a double zero at 0 and zeros $\pm3$, and passes through $(1,-16)$. Find $f(2)$.`, -40, "kx²(x² − 9): k(1)(−8) = −16 → k = 2; f(2) = 2(4)(−5)."),
  num(String.raw`Find the larger zero of the factor $x^2-4x+1$ (2 decimals).`, 3.732, "2 + √3.", null, 0.006),
  mc(String.raw`Which is the family of quartics with zeros $1\pm\sqrt3$ and $\pm1$?`, String.raw`$y=k(x^2-2x-2)(x^2-1)$`, [String.raw`$y=k(x^2-2x+2)(x^2-1)$`, String.raw`$y=k(x^2+2x-2)(x^2+1)$`, String.raw`$y=k(x^2-3)(x^2-1)$`], "(x − 1)² − 3 = x² − 2x − 2."),
  num(String.raw`A parabola has zeros 1 and 5 and vertex $(3,-8)$. Find its leading coefficient.`, 2, "k(2)(−2) = −8."),
  num(String.raw`The member of $y=k(x-1)(x-2)(x-3)$ through $(4,6)$ has what y-intercept?`, -6, "6k = 6 → k = 1; f(0) = −6."),
  tf("If a quartic has real zeros only at 2 and 3, and all four of its zeros are real, at least one of them is repeated.", true, "Four zeros counted by order, only two distinct values."),
  num(String.raw`The member of $y=k(x+2)(x-1)^2$ through $(2,8)$ has what y-intercept?`, 4, "k(4)(1) = 8 → k = 2; f(0) = 2(2)(1)."),
  num("The green curve belongs to y = k(x + 1)(x − 2)(x − 3) and passes through (1, −4). Find k.", -1, "k(2)(−1)(−2) = 4k = −4.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -8, ymax: 8 }, curves: [{ f: (x) => (x + 1) * (x - 2) * (x - 3), color: "gray" }, { f: (x) => -(x + 1) * (x - 2) * (x - 3), color: "green" }], points: [P(1, -4)], step: { x: 1, y: 2 } })),
  num(String.raw`Find $k$ so that $y=k(x^2+1)(x-2)(x+2)$ has y-intercept 8.`, -2, "k(1)(−4) = 8."),
];

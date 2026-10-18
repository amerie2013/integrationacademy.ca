// 2.4 Families of Polynomial Functions — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const E = [
  mc(String.raw`Which equation describes the family of quadratics with zeros $1$ and $-2$?`, String.raw`$y=k(x-1)(x+2)$`, [String.raw`$y=k(x+1)(x-2)$`, String.raw`$y=(x-1)(x+2)+k$`, String.raw`$y=k(x-1)(x-2)$`], "Each zero r gives a factor (x − r)."),
  tf(String.raw`$y=3(x-1)(x+4)$ and $y=-(x-1)(x+4)$ belong to the same family.`, true, "Same zeros, different k."),
  num(String.raw`Find the y-intercept of $y=(x-1)(x-2)(x-3)$.`, -6, "(−1)(−2)(−3)."),
  num(String.raw`Find $k$ so that $y=k(x-2)(x+1)$ passes through $(0,4)$.`, -2, "k(−2)(1) = 4."),
  mc(String.raw`In $y=k(x-r_1)(x-r_2)$, what does $k$ change?`, "the vertical stretch and the direction (reflection)", ["the x-intercepts", "the degree", "the horizontal position"], "Zeros stay fixed."),
  tf(String.raw`Every member of $y=k(x+3)(x-1)$ passes through $(1,0)$.`, true, "x = 1 is a zero of every member."),
  num(String.raw`Find $k$ so that $y=k(x-3)$ passes through $(5,10)$.`, 5, "k(2) = 10."),
  mc(String.raw`What are the zeros of $y=4(x+5)(x-2)(x-6)$?`, "−5, 2, 6", ["5, −2, −6", "4, −5, 2, 6", "−5, 2"], "Set each factor to 0."),
  num(String.raw`Find the y-intercept of $y=-2(x+1)(x-3)$.`, 6, "−2(1)(−3)."),
  mc("Which family contains the graph shown?", String.raw`$y=k(x+1)(x-2)$`, [String.raw`$y=k(x-1)(x+2)$`, String.raw`$y=k(x+1)(x+2)$`, String.raw`$y=kx(x-2)$`], "x-intercepts −1 and 2.", graph((x) => -(x + 1) * (x - 2), { xmin: -2.5, xmax: 3.5, ymin: -5, ymax: 4 })),
  num(String.raw`What is the degree of $y=k(x-1)^2(x+2)^3$?`, 5, "2 + 3."),
  mc(String.raw`Which integer factor corresponds to the zero $\tfrac34$?`, String.raw`$4x-3$`, [String.raw`$3x-4$`, String.raw`$4x+3$`, String.raw`$x+\tfrac34$`], "4x − 3 = 0 ⇔ x = ¾."),
  num(String.raw`Find $k$ so that $y=kx(x-4)$ passes through $(2,8)$.`, -2, "k(2)(−2) = 8."),
  tf(String.raw`$k=0$ gives a member of the family $y=k(x-1)(x+2)$.`, false, "y = 0 has no specific zeros; k must be nonzero."),
  mc(String.raw`Which quadratic factor has the zeros $\pm\sqrt2$?`, String.raw`$x^2-2$`, [String.raw`$x^2+2$`, String.raw`$x^2-4$`, String.raw`$x^2-2x$`], "(x − √2)(x + √2)."),
  num(String.raw`Evaluate $y=2(x+1)(x-3)$ at $x=1$.`, -8, "2(2)(−2)."),
  mc("Two members of one family are shown. Which has the larger value of |k|?", "the blue curve", ["the red curve", "they are equal", "cannot tell"], "The blue curve is stretched more.", planeDoc({ view: { xmin: -2, xmax: 3, ymin: -6, ymax: 6 }, curves: [{ f: (x) => 2 * (x + 1) * (x - 2), color: "blue" }, { f: (x) => 0.5 * (x + 1) * (x - 2), color: "red" }], step: { x: 1, y: 1 } })),
  num(String.raw`Find $k$ so that $y=k(x-1)(x+1)$ has y-intercept 5.`, -5, "k(−1)(1) = 5."),
  tf(String.raw`$y=(x-1)(x+3)$ and $y=(x+3)(x-1)$ are the same function.`, true, "Multiplication is commutative."),
  fill("The zeros fix the family; one extra ___ fixes the member.", ["point"], "Substitute a point to find k."),
];

export const M = [
  num(String.raw`Find $k$ so that $y=k(x+1)(x-2)(x-3)$ passes through $(1,8)$.`, 2, "k(2)(−1)(−2) = 4k."),
  num(String.raw`Find $k$ so that $y=k(x-1)^2(x+2)$ passes through $(0,6)$.`, 3, "k(1)(2) = 6."),
  mc(String.raw`Which quadratic factor has the zeros $2\pm\sqrt3$?`, String.raw`$x^2-4x+1$`, [String.raw`$x^2+4x+1$`, String.raw`$x^2-4x-1$`, String.raw`$x^2-2x-3$`], "(x − 2)² − 3."),
  num(String.raw`Find $k$ so that $y=k(x^2-3)(x+1)$ passes through $(0,6)$.`, -2, "k(−3)(1) = 6."),
  num(String.raw`The member of $y=k(x+1)(x-1)(x-3)$ through $(2,-12)$ has what y-intercept?`, 12, "k(3)(1)(−1) = −12 → k = 4; f(0) = 4(1)(−1)(−3)."),
  mc("Which equation matches the cubic shown?", String.raw`$y=-(x+2)(x-1)(x-4)$`, [String.raw`$y=(x+2)(x-1)(x-4)$`, String.raw`$y=-(x-2)(x+1)(x+4)$`, String.raw`$y=-2(x+2)(x-1)(x-4)$`], "Zeros −2, 1, 4 and f(0) = −8: k(8) = −8.", graph((x) => -(x + 2) * (x - 1) * (x - 4), { xmin: -3, xmax: 5, ymin: -20, ymax: 20 }, [P(0, -8)], { step: { x: 1, y: 5 } })),
  tf(String.raw`$y=(x-2)^2$ and $y=(x-2)^3$ belong to the same family.`, false, "Different orders: different factors."),
  num(String.raw`Find the sum of the zeros of $y=k(x^2-6x+4)(x+2)$.`, 4, "Zeros 3 ± √5 and −2: 6 − 2."),
  mc(String.raw`Which is the family of quartics with zeros $\pm1$ and $\pm4$?`, String.raw`$y=k(x^2-1)(x^2-16)$`, [String.raw`$y=k(x^2+1)(x^2+16)$`, String.raw`$y=k(x-1)(x-4)$`, String.raw`$y=k(x^2-1)(x^2-4)$`], "Pairs ±r give x² − r²."),
  num(String.raw`For $y=k(x-1)(x-5)$, find $k$ so that the vertex has y-coordinate 8.`, -2, "Vertex at x = 3: k(2)(−2) = 8."),
  num(String.raw`Find $k$ so that $y=k(2x-1)(x+3)$ passes through $(1,8)$.`, 2, "k(1)(4) = 8."),
  mc("Which equation matches the cubic shown (touches at 2, crosses at −1)?", String.raw`$y=-2(x-2)^2(x+1)$`, [String.raw`$y=2(x-2)^2(x+1)$`, String.raw`$y=-2(x+2)^2(x-1)$`, String.raw`$y=-(x-2)(x+1)^2$`], "y-intercept −8: k(4)(1) = −8.", graph((x) => -2 * (x - 2) ** 2 * (x + 1), { xmin: -2, xmax: 3.5, ymin: -12, ymax: 10 }, [P(0, -8)], { step: { x: 1, y: 2 } })),
  num(String.raw`Find the product of the zeros of $y=3(x-2)(x+4)(x-5)$.`, 40, "2 · (−4) · 5."),
  num(String.raw`Find $k$ so that $y=k(x+2)^3$ passes through $(0,-4)$.`, -0.5, "8k = −4.", null, 0.001),
  tf("A point on the x-axis at one of the zeros determines k.", false, "Every member passes through it."),
  num(String.raw`For $y=k(x-1)(x+2)$, find $k$ so that the minimum value is $-9$.`, 4, "Vertex at x = −½: k(−1.5)(1.5) = −2.25k = −9."),
  mc(String.raw`Which is the family of cubics with zeros $0$ and $\pm\sqrt5$?`, String.raw`$y=kx(x^2-5)$`, [String.raw`$y=k(x^2-5)$`, String.raw`$y=kx(x^2+5)$`, String.raw`$y=kx(x-5)^2$`], "x(x − √5)(x + √5)."),
  num(String.raw`The member of $y=k(x+1)(x-2)$ through $(1,4)$ has what value at $x=3$?`, -8, "k(2)(−1) = 4 → k = −2; f(3) = −2(4)(1)."),
  num(String.raw`How many members of $y=k(x-1)(x+1)$ pass through the origin?`, 0, "f(0) = −k ≠ 0 for every member."),
  mc(String.raw`If $3-\sqrt7$ is a zero of a polynomial with integer coefficients, which must also be a zero?`, String.raw`$3+\sqrt7$`, [String.raw`$-3-\sqrt7$`, String.raw`$\sqrt7-3$`, String.raw`$7-\sqrt3$`], "Conjugate pairs."),
];

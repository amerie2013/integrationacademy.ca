// 4.1 Vertex Form and Standard Form — 20 hard questions
import { mc, ms, num, tf, mx } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "4.1 Vertex Form and Standard Form";
export const Q = [
  mx(S`Write $y=-\tfrac14(x+8)^2+3$ in standard form.`, "-0.25*x^2-4*x-13", "−¼(x² + 16x + 64) + 3."),
  mx(S`Write $y=0.2(x-5)^2-1$ in standard form.`, "0.2*x^2-2*x+4", "0.2x² − 2x + 5 − 1."),
  num(S`$y=x^2+bx+c$ has vertex $(-3,\,2)$. Enter $c$.`, 11, "(x + 3)² + 2 = x² + 6x + 11."),
  num(S`$y=ax^2+bx+c$ has vertex $(2,\,-6)$ and $y$-intercept $6$. Enter $a$.`, 3, "4a − 6 = 6."),
  num(S`For $y=ax^2+bx+c$ with vertex $(2,\,-6)$ and $y$-intercept $6$, enter $b$.`, -12, "a = 3: 3(x − 2)² − 6 = 3x² − 12x + 6."),
  num(S`$y=2x^2+bx+3$ passes through $(5,\,3)$. Enter the $x$-coordinate of its vertex.`, 2.5, "Equal heights at 0 and 5.", null, 1e-9),
  num(S`For $y=-4x^2+bx+1$ with vertex at $x=1.5$, enter $b$.`, 12, "b/8 = 1.5."),
  num(S`A ball: $h=-4.9t^2+29.4t+1.5$. Enter its maximum height (m, two decimals).`, 45.6, "Axis t = 3: −44.1 + 88.2 + 1.5.", planeDoc({ view: { xmin: -0.3, xmax: 6.5, ymin: -2, ymax: 50 }, curves: [{ f: (t) => -4.9 * t * t + 29.4 * t + 1.5, a: 0, b: 6.05, color: "violet" }], step: { x: 1, y: 5 }, xlabel: "t", ylabel: "h" }), 0.01),
  ms(S`Select every TRUE statement about $y=3x^2-18x+20$.`, ["its vertex is (3, −7)", "its axis is x = 3", "it has two x-intercepts", "its y-intercept is −7"], [0, 1, 2], "y(3) = 27 − 54 + 20 = −7; y-intercept 20."),
  mc("Which equation matches the graph?", S`$y=-2x^2+8x-3$`, [S`$y=2x^2-8x+3$`, S`$y=-2x^2-8x-3$`, S`$y=-x^2+4x-3$`], "Vertex (2, 5), y-int −3: −2(x − 2)² + 5.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -5, ymax: 7 }, curves: [{ f: (x) => -2 * x * x + 8 * x - 3, color: "violet" }], points: [{ x: 2, y: 5, label: "(2, 5)", color: "amber" }, { x: 0, y: -3, label: "(0, −3)" }] })),
  mc("The dashed line y = 4 meets the parabola at x = −1 and x = 5. Which statement must be true?", "the vertex is on x = 2", ["the vertex is (2, 4)", "the zeros are −1 and 5", "a > 0"], "Equal heights are symmetric about the axis.", planeDoc({ view: { xmin: -3, xmax: 7, ymin: -6, ymax: 8 }, curves: [{ f: (x) => (x - 2) ** 2 - 5, color: "violet" }], lines: [{ m: 0, b: 4, color: "green", dash: true }], points: [{ x: -1, y: 4, label: "(−1, 4)", color: "amber" }, { x: 5, y: 4, label: "(5, 4)", color: "amber" }] })),
  tf(S`Every quadratic $y=ax^2+bx+c$ can be written in vertex form.`, true, "Completing the square always works."),
  tf(S`Every quadratic $y=ax^2+bx+c$ can be written in factored form over the integers.`, false, "e.g. x² + 1."),
  num(S`$y=a(x-h)^2+k$ expands to $-x^2+6x-4$. Enter $k$.`, 5, "Vertex x = 3: −9 + 18 − 4."),
  num(S`$y=x^2-2kx+5$ has its vertex at $x=4$. Enter the minimum value.`, -11, "k = 4: x² − 8x + 5; y(4) = 16 − 32 + 5."),
  num(S`The parabolas $y=(x-1)^2+3$ and $y=x^2+bx+c$ are identical. Enter $b+c$.`, 2, "x² − 2x + 4: −2 + 4."),
  mx(S`Find the standard form of the parabola with vertex $(-2,\,3)$ through $(0,\,-5)$.`, "-2*x^2-8*x-5", "a(4) + 3 = −5 ⇒ a = −2; −2(x + 2)² + 3."),
  num(S`For $y=3x^2+12x+k$, find $k$ so that the vertex lies on the $x$-axis.`, 12, "Vertex x = −2: 12 − 24 + k = 0."),
  mc(S`Which method finds the vertex of $y=5x^2-20x+3$ without factoring?`, "partial factoring: 5x(x − 4) + 3", ["setting y = 0", "reading the y-intercept", "dividing by x"], "Equal heights at 0 and 4."),
  num(S`An arch $h=-0.05x^2+2x$ (metres). Enter its maximum height.`, 20, "Axis x = 20: −20 + 40.", planeDoc({ view: { xmin: -2, xmax: 42, ymin: -1, ymax: 24 }, curves: [{ f: (x) => -0.05 * x * x + 2 * x, a: 0, b: 40, color: "violet" }], step: { x: 5, y: 4 } })),
];

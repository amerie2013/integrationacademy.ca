// 1.6 Graphing Quadratics in Vertex Form — 20 hard questions
import { mc, ms, num, tf, mx } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "1.6 Graphing Quadratics in Vertex Form";
export const Q = [
  mx(S`A parabola has $x$-intercepts $-1$ and $7$ and a maximum value of $8$. Write it in vertex form.`, "-0.5*(x-3)^2+8", "Axis x = 3; 16a + 8 = 0 ⇒ a = −½."),
  mx(S`A parabola has vertex $(2,\,-9)$ and $y$-intercept $3$. Write it in vertex form.`, "3*(x-2)^2-9", "4a − 9 = 3 ⇒ a = 3."),
  num(S`$y=a(x-1)^2+k$ passes through $(3,\,1)$ and $(4,\,6)$. Enter $a$.`, 1, "4a + k = 1 and 9a + k = 6 ⇒ 5a = 5."),
  num(S`$y=a(x-1)^2+k$ passes through $(3,\,1)$ and $(4,\,6)$. Enter $k$.`, -3, "4(1) + k = 1."),
  num(S`For $y=2(x-3)^2+k$, find $k$ so that $x=1$ is an $x$-intercept.`, -8, "2(4) + k = 0."),
  num(S`A tunnel is a parabolic arch $16$ m wide and $8$ m high. Enter the height (m) $2$ m from one edge.`, 3.5, "h = −⅛(x − 8)² + 8; at x = 2: −36/8 + 8 = 3.5.", planeDoc({ view: { xmin: -1, xmax: 17, ymin: -1, ymax: 10 }, curves: [{ f: (x) => -((x - 8) ** 2) / 8 + 8, a: 0, b: 16, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)" }, { x: 16, y: 0, label: "(16, 0)" }, { x: 8, y: 8, label: "(8, 8)", color: "amber" }], step: { x: 2, y: 1 } }), 1e-9),
  mc(S`A truck $3$ m wide and $7$ m tall drives through the centre of the tunnel $h=-\tfrac18(x-8)^2+8$. Does it fit?`, "yes: the height at 1.5 m from the centre is about 7.72 m", ["no: the tunnel is only 7 m high at the edges of the truck", "no: the truck is too wide", "yes: the tunnel is 8 m high everywhere"], "At x = 9.5: −(2.25)/8 + 8 ≈ 7.72 > 7."),
  num(S`A ball is thrown from $2$ m and reaches $12$ m when it has travelled $5$ m horizontally. With $h=a(x-5)^2+12$, enter $a$.`, -0.4, "2 = 25a + 12.", null, 1e-9),
  num(S`For the ball $h=-0.4(x-5)^2+12$, enter the horizontal distance where it lands, to two decimals.`, 10.48, "(x − 5)² = 30 ⇒ x = 5 + √30.", planeDoc({ view: { xmin: -0.5, xmax: 12, ymin: -1, ymax: 14 }, curves: [{ f: (x) => -0.4 * (x - 5) ** 2 + 12, a: 0, b: 5 + Math.sqrt(30), color: "violet" }], points: [{ x: 0, y: 2, label: "(0, 2)" }, { x: 5, y: 12, label: "(5, 12)", color: "amber" }], step: { x: 1, y: 2 } }), 0.01),
  ms(S`Select every TRUE statement about $y=-\tfrac12(x+4)^2+2$.`, ["its x-intercepts are −6 and −2", "its y-intercept is −6", "it is the image of y = x² after a compression, reflection, 4 left and 2 up", "its range is y ≥ 2"], [0, 1, 2], "(x + 4)² = 4 ⇒ x = −2, −6; y(0) = −8 + 2 = −6; range y ≤ 2."),
  mc("The parabola in the figure has the marked vertex and point. Which equation fits?", S`$y=-3(x+1)^2+5$`, [S`$y=3(x+1)^2+5$`, S`$y=-3(x-1)^2+5$`, S`$y=-(x+1)^2+5$`], "Vertex (−1, 5); (0, 2): a + 5 = 2 ⇒ a = −3.", planeDoc({ view: { xmin: -4, xmax: 2, ymin: -3, ymax: 6 }, curves: [{ f: (x) => -3 * (x + 1) ** 2 + 5, color: "violet" }], points: [{ x: -1, y: 5, label: "(−1, 5)", color: "amber" }, { x: 0, y: 2, label: "(0, 2)" }] })),
  mc("Which equation produced the red graph from y = x² (grey)?", S`$y=2(x-3)^2-4$`, [S`$y=2(x+3)^2-4$`, S`$y=\tfrac12(x-3)^2-4$`, S`$y=(x-3)^2-4$`], "Vertex (3, −4); (4, −2): a + (−4) = −2 ⇒ a = 2.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => 2 * (x - 3) ** 2 - 4, color: "red" }], points: [{ x: 3, y: -4, label: "(3, −4)", color: "amber" }, { x: 4, y: -2, label: "(4, −2)", color: "red" }] })),
  num(S`The image of $(-2,\,4)$ under $y=a(x-h)^2+k$ is $(1,\,-5)$, and the vertex is $(3,\,7)$. Enter $a$.`, -3, "4a + 7 = −5."),
  num(S`Two parabolas $y=(x-2)^2+1$ and $y=-(x-4)^2+k$ touch at exactly one point. Enter $k$.`, 3, "(x − 2)² + 1 + (x − 4)² − k = 0 ⇒ 2x² − 12x + 21 − k = 0; one root when 144 = 8(21 − k) ⇒ k = 3."),
  num(S`A suspension cable $y=0.01(x-50)^2+5$ (m) hangs between towers at $x=0$ and $x=100$. Enter the tower height.`, 30, "0.01(2500) + 5."),
  tf(S`If $a$ and $k$ have the same sign, $y=a(x-h)^2+k$ has no $x$-intercepts.`, true, "The vertex is on the side of the axis the parabola opens away from."),
  num(S`For $y=a(x+2)^2-6$, find $a$ so that the $x$-intercepts are $1$ and $-5$.`, 0.6666666667, "9a − 6 = 0 ⇒ a = ⅔.", null, 0.001),
  num(S`A fountain jet leaves the nozzle at ground level, rises to $3.2$ m and lands $8$ m away. Enter the height (m) $2$ m from the nozzle.`, 2.4, "h = −0.2(x − 4)² + 3.2; at x = 2: −0.8 + 3.2.", null, 1e-9),
  mc(S`Which change to $y=2(x-1)^2-8$ removes both $x$-intercepts?`, "changing −8 to +8", ["changing 2 to 3", "changing (x − 1) to (x + 1)", "changing 2 to 0.5"], "Then a and k are both positive."),
  num(S`$y=a(x-h)^2+k$ has the same $x$-intercepts as $y=(x-1)(x-5)$ and vertex $y$-value $8$. Enter $a$.`, -2, "Axis x = 3; 4a + 8 = 0."),
];

// 3.1 Standard and Factored Forms — 20 hard questions
import { mc, ms, num, tf, mx } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "3.1 Standard and Factored Forms";
export const Q = [
  mx(S`A parabola has zeros $-5$ and $3$ and maximum value $8$. Type its equation in standard form.`, "-0.5*x^2-x+7.5", "a(4)(−4) = 8 ⇒ a = −½; −½(x² + 2x − 15)."),
  num(S`A parabola has zeros $-2$ and $6$ and $y$-intercept $-24$. Enter the $y$-coordinate of its vertex.`, -32, "a(2)(−6) = −24 ⇒ a = 2; vertex at x = 2: 2(4)(−4)."),
  num(S`A parabola has vertex $(-1,\,12)$ and one zero $x=1$. Enter its $y$-intercept.`, 9, "Zeros 1 and −3 (symmetry). a(−1 − 1)(−1 + 3) = 12 ⇒ a = −3; y(0) = −3(−1)(3) = 9."),
  num(S`$y=a(x-r)(x-s)$ has vertex $(4,\,-18)$ and zero $1$. Enter $a$.`, 2, "Zeros 1 and 7: a(3)(−3) = −18."),
  num(S`For $y=-2x^2+12x+14$, enter the larger zero.`, 7, "−2(x² − 6x − 7) = −2(x − 7)(x + 1)."),
  num(S`For $y=-2x^2+12x+14$, enter the maximum value.`, 32, "Axis x = 3: −2(−4)(4)."),
  num(S`For $y=(3x-2)(x+4)$, enter the $y$-coordinate of the vertex to two decimals.`, -16.33, "Axis x = −5/3: (−7)(7/3) = −49/3.", null, 0.01),
  mc(S`Which parabola has zeros $\tfrac12$ and $-3$?`, S`$y=(2x-1)(x+3)$`, [S`$y=(2x+1)(x-3)$`, S`$y=(x-2)(x+3)$`, S`$y=(x-\tfrac12)(x-3)$`], "2x − 1 = 0 at ½."),
  ms(S`Select every TRUE statement about $y=-\tfrac13(x+3)(x-9)$.`, [S`its zeros are $-3$ and $9$`, S`its vertex is $(3,\,12)$`, S`its $y$-intercept is $-9$`, S`it opens up`], [0, 1], "Vertex: −⅓(6)(−6) = 12; y-int −⅓(3)(−9) = 9."),
  tf(S`Two parabolas with the same zeros and the same $y$-intercept are identical.`, true, "The y-intercept a·r·s fixes a."),
  mc("The graph shows a parabola through the marked points. Which equation is it?", S`$y=-\tfrac12(x+2)(x-4)$`, [S`$y=\tfrac12(x+2)(x-4)$`, S`$y=-(x+2)(x-4)$`, S`$y=-\tfrac12(x-2)(x+4)$`], "Zeros −2, 4; y(0) = 4 ⇒ a(2)(−4) = 4.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 6 }, curves: [{ f: (x) => -0.5 * (x + 2) * (x - 4), color: "violet" }], points: [{ x: -2, y: 0, label: "(−2, 0)", color: "amber" }, { x: 4, y: 0, label: "(4, 0)", color: "amber" }, { x: 0, y: 4, label: "(0, 4)", color: "blue" }] })),
  num(S`An arch $16$ m wide at its base is $12$ m high. Enter its height $4$ m from a foot.`, 9, "h = ax(x − 16), a(8)(−8) = 12 ⇒ a = −3/16; h(4) = −3/16(4)(−12).", planeDoc({ view: { xmin: -1, xmax: 17, ymin: -1, ymax: 14 }, curves: [{ f: (x) => (-3 / 16) * x * (x - 16), a: 0, b: 16, color: "violet" }], points: [{ x: 8, y: 12, label: "(8, 12)", color: "amber" }], step: { x: 2, y: 2 } })),
  num(S`A ball's height is $h=-5(t+1)(t-5)$. Enter its maximum height.`, 45, "Axis t = 2: −5(3)(−3).", planeDoc({ view: { xmin: -0.5, xmax: 5.5, ymin: -3, ymax: 50 }, curves: [{ f: (t) => -5 * (t + 1) * (t - 5), a: 0, b: 5, color: "violet" }], step: { x: 1, y: 5 }, xlabel: "t", ylabel: "h" })),
  mc("Which graph matches y = 2(x + 1)(x − 3)? The violet one, blue one or red one?", "violet", ["blue", "red", "none"], "Zeros −1 and 3, opens up, y-intercept −6.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -10, ymax: 10 }, curves: [{ f: (x) => 2 * (x + 1) * (x - 3), color: "violet" }, { f: (x) => -2 * (x + 1) * (x - 3), color: "blue" }, { f: (x) => 2 * (x - 1) * (x + 3), color: "red" }], step: { x: 1, y: 2 } })),
  num(S`For which $k$ does $y=(x-k)(x+6)$ have axis $x=-1$?`, 4, "(k − 6)/2 = −1."),
  num(S`$y=a(x-2)(x-10)$ has vertex $(6,\,8)$. Enter $a$.`, -0.5, "a(4)(−4) = 8.", null, 1e-9),
  mx(S`Type the factored form of $y=4x^2-4x-24$.`, "4*(x-3)*(x+2)", "4(x² − x − 6)."),
  num(S`The zeros of $y=x^2+bx+c$ are $-7$ and $2$. Enter $b+c$.`, -9, "(x + 7)(x − 2) = x² + 5x − 14."),
  num(S`A parabola has zeros $0$ and $12$ and passes through $(3,\,54)$. Enter its maximum value.`, 72, "54 = a(3)(−9) ⇒ a = −2; vertex at 6: −2(6)(−6)."),
  mc(S`A parabola has zeros $r$ and $s$ with $r+s=10$ and $rs=21$. Which is its equation if $a=1$?`, S`$y=x^2-10x+21$`, [S`$y=x^2+10x+21$`, S`$y=x^2-21x+10$`, S`$y=x^2+10x-21$`], "(x − r)(x − s) = x² − (r + s)x + rs."),
];

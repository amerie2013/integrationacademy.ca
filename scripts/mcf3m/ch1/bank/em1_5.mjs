// 1.5 Transformations of Quadratic Functions — 20 easy + 20 medium
import { mc, ms, num, tf, fill, mx } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;
const P0 = { f: (x) => x * x, color: "gray" };

export const E = [
  mc(S`How does $y=x^2+6$ compare with $y=x^2$?`, "6 units up", ["6 units down", "6 units right", "6 units left"], "k = 6."),
  mc(S`How does $y=x^2-2$ compare with $y=x^2$?`, "2 units down", ["2 units up", "2 units left", "2 units right"], "k = −2."),
  mc(S`How does $y=(x-5)^2$ compare with $y=x^2$?`, "5 units right", ["5 units left", "5 units up", "5 units down"], "Vertex where x − 5 = 0."),
  mc(S`How does $y=(x+1)^2$ compare with $y=x^2$?`, "1 unit left", ["1 unit right", "1 unit up", "1 unit down"], "Vertex where x + 1 = 0."),
  mc(S`How does $y=4x^2$ compare with $y=x^2$?`, "vertical stretch by 4", ["vertical compression by 4", "4 units up", "4 units right"], "|a| > 1."),
  mc(S`How does $y=\tfrac13x^2$ compare with $y=x^2$?`, S`vertical compression by $\frac13$`, ["vertical stretch by 3", "3 units down", "reflection"], "0 < a < 1."),
  mc(S`How does $y=-x^2$ compare with $y=x^2$?`, "reflection in the x-axis", ["1 unit down", "reflection in the y-axis", "1 unit left"], "a = −1."),
  num(S`Enter the $y$-coordinate of the vertex of $y=x^2-9$.`, -9, "Vertex (0, −9)."),
  num(S`Enter the $x$-coordinate of the vertex of $y=(x+7)^2$.`, -7, "x + 7 = 0."),
  num(S`The point $(2,\,4)$ on $y=x^2$ is mapped by $y=x^2+3$. Enter the new $y$-coordinate.`, 7, "Add 3."),
  num(S`The point $(2,\,4)$ on $y=x^2$ is mapped by $y=(x-3)^2$. Enter the new $x$-coordinate.`, 5, "Add 3 to x."),
  num(S`The point $(1,\,1)$ on $y=x^2$ is mapped by $y=-5x^2$. Enter the new $y$-coordinate.`, -5, "Multiply by −5."),
  tf(S`$y=0.25x^2$ is wider than $y=x^2$.`, true, "Compression by 0.25."),
  tf(S`$y=-x^2$ has the same vertex as $y=x^2$.`, true, "(0, 0) is unchanged."),
  tf(S`$y=(x+2)^2$ moves $y=x^2$ two units right.`, false, "It moves 2 left."),
  fill(S`The axis of symmetry of $y=(x-4)^2$ is $x=$ ____.`, ["4"], "x = h."),
  mx(S`Write the equation of $y=x^2$ translated 8 units up.`, "x^2+8", "k = 8."),
  mx(S`Write the equation of $y=x^2$ translated 3 units left.`, "(x+3)^2", "h = −3."),
  mc("The red parabola is a translation of y = x² (grey). Which equation fits?", S`$y=x^2-3$`, [S`$y=x^2+3$`, S`$y=(x-3)^2$`, S`$y=(x+3)^2$`], "Vertex (0, −3).", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 6 }, curves: [P0, { f: (x) => x * x - 3, color: "red" }] })),
  mc("The red curve is y = x² (grey) moved sideways. Which equation fits?", S`$y=(x-2)^2$`, [S`$y=(x+2)^2$`, S`$y=x^2-2$`, S`$y=x^2+2$`], "Vertex (2, 0).", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -1, ymax: 7 }, curves: [P0, { f: (x) => (x - 2) ** 2, color: "red" }] })),
];

export const M = [
  num(S`$y=ax^2$ passes through $(2,\,-12)$. Enter $a$.`, -3, "−12 = 4a."),
  num(S`$y=ax^2$ passes through $(4,\,8)$. Enter $a$.`, 0.5, "8 = 16a.", null, 1e-9),
  num(S`$y=x^2+k$ passes through $(3,\,4)$. Enter $k$.`, -5, "9 + k = 4."),
  num(S`$y=(x-h)^2$ passes through $(1,\,16)$ and $h>0$. Enter $h$.`, 5, "1 − h = ±4 ⇒ h = 5 or −3."),
  mc(S`Which describes $y=-\tfrac12x^2$?`, "compression by ½ and reflection in the x-axis", ["stretch by 2 and reflection", "½ unit down", "reflection in the y-axis"], "a = −½."),
  mc(S`Under $y=3x^2$, which point is the image of $(-2,\,4)$?`, S`$(-2,\,12)$`, [S`$(-6,\,4)$`, S`$(-2,\,7)$`, S`$(-6,\,12)$`], "Only y is multiplied."),
  mc(S`Under $y=(x+4)^2$, which point is the image of $(1,\,1)$?`, S`$(-3,\,1)$`, [S`$(5,\,1)$`, S`$(1,\,5)$`, S`$(1,\,-3)$`], "Subtract 4 from x."),
  num(S`How many $x$-intercepts does $y=x^2+5$ have?`, 0, "Minimum 5 > 0."),
  num(S`How many $x$-intercepts does $y=(x-3)^2$ have?`, 1, "Vertex on the x-axis."),
  num(S`Enter the positive $x$-intercept of $y=x^2-49$.`, 7, "x² = 49."),
  ms(S`Select every equation whose graph is narrower than $y=x^2$.`, [S`$y=2x^2$`, S`$y=-3x^2$`, S`$y=0.9x^2$`, S`$y=-\tfrac12x^2$`, S`$y=1.5x^2$`], [0, 1, 4], "|a| > 1."),
  mc("The red parabola has vertex (0, 0) and passes through (1, 3). Which equation fits?", S`$y=3x^2$`, [S`$y=x^2+3$`, S`$y=\tfrac13x^2$`, S`$y=(x-3)^2$`], "a(1)² = 3.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 10 }, curves: [P0, { f: (x) => 3 * x * x, color: "red" }], points: [{ x: 1, y: 3, label: "(1, 3)", color: "red" }] })),
  mc("The red parabola opens down with vertex (0, 0) through (2, −2). Which equation fits?", S`$y=-\tfrac12x^2$`, [S`$y=-2x^2$`, S`$y=x^2-2$`, S`$y=-(x-2)^2$`], "4a = −2.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -6, ymax: 3 }, curves: [{ f: (x) => -0.5 * x * x, color: "red" }], points: [{ x: 2, y: -2, label: "(2, −2)", color: "red" }] })),
  tf(S`$y=x^2-4$ and $y=(x-4)^2$ are the same graph.`, false, "Vertices (0, −4) and (4, 0)."),
  tf(S`The range of $y=-6x^2$ is $y\le0$.`, true, "Opens down from (0, 0)."),
  num(S`The vertex of $y=x^2$ is moved to $(0,\,-11)$. Enter $k$.`, -11, "y = x² − 11."),
  mx(S`Write the equation of $y=x^2$ stretched by $5$ and reflected in the $x$-axis.`, "-5*x^2", "a = −5."),
  mx(S`Write the equation of $y=x^2$ translated 6 units right.`, "(x-6)^2", "h = 6."),
  fill(S`In $y=(x-h)^2$, the vertex is at $(\square,\,0)$. Write the missing letter.`, ["h"], "x − h = 0 ⇒ x = h."),
  num(S`Under $y=x^2-8$, the points $(\pm a,\,0)$ are $x$-intercepts with $a>0$. Enter $a^2$.`, 8, "x² = 8."),
];

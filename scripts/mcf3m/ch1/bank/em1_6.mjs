// 1.6 Graphing Quadratics in Vertex Form — 20 easy + 20 medium
import { mc, ms, num, tf, fill, mx } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;

export const E = [
  mc(S`What is the vertex of $y=3(x-2)^2+5$?`, S`$(2,\,5)$`, [S`$(-2,\,5)$`, S`$(2,\,-5)$`, S`$(3,\,5)$`], "(h, k)."),
  mc(S`What is the vertex of $y=-(x+4)^2-1$?`, S`$(-4,\,-1)$`, [S`$(4,\,-1)$`, S`$(-4,\,1)$`, S`$(4,\,1)$`], "x + 4 = 0."),
  num(S`Enter the axis of symmetry $x=\ ?$ of $y=2(x-9)^2$.`, 9, "x = h."),
  mc(S`Does $y=-0.5(x-1)^2+3$ open up or down?`, "down", ["up", "neither", "both"], "a < 0."),
  mc(S`What is the stretch factor of $y=-4(x+1)^2$?`, "4", ["−4", "1", "¼"], "|a|."),
  mc(S`What is the range of $y=2(x+3)^2-8$?`, S`$y\ge-8$`, [S`$y\le-8$`, S`$y\ge-3$`, S`$y\ge8$`], "Opens up, k = −8."),
  mc(S`What is the range of $y=-(x-6)^2+10$?`, S`$y\le10$`, [S`$y\ge10$`, S`$y\le6$`, S`$y\ge6$`], "Opens down, k = 10."),
  num(S`How many $x$-intercepts does $y=(x-1)^2+4$ have?`, 0, "Opens up from above the axis."),
  num(S`How many $x$-intercepts does $y=-2(x+3)^2+8$ have?`, 2, "Opens down from above the axis."),
  num(S`How many $x$-intercepts does $y=5(x-2)^2$ have?`, 1, "Vertex on the axis."),
  num(S`Enter the $y$-intercept of $y=(x-3)^2-4$.`, 5, "9 − 4."),
  num(S`Enter the $y$-intercept of $y=-2(x+1)^2+7$.`, 5, "−2 + 7."),
  tf(S`The vertex of $y=a(x-h)^2+k$ is $(h,\,k)$.`, true, "Vertex form."),
  tf(S`$y=4(x+5)^2-1$ has its vertex at $(5,\,-1)$.`, false, "Vertex (−5, −1)."),
  fill(S`For $y=2(x-1)^2+3$, the mapping rule is $(x,\,y)\to(x+1,\ \square y+3)$. The missing number is ____.`, ["2"], "Multiply y by a."),
  num(S`Under $y=(x-2)^2+1$, the point $(1,\,1)$ of $y=x^2$ maps to $(3,\,q)$. Enter $q$.`, 2, "1 + 1."),
  mc("The graph shows a parabola. What is its vertex form?", S`$y=(x-1)^2-4$`, [S`$y=(x+1)^2-4$`, S`$y=(x-1)^2+4$`, S`$y=-(x-1)^2-4$`], "Vertex (1, −4), opens up with a = 1.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => (x - 1) ** 2 - 4, color: "violet" }], points: [{ x: 1, y: -4, label: "(1, −4)", color: "amber" }, { x: 3, y: 0, label: "(3, 0)" }] })),
  mc("The graph shows a parabola opening down. What is its vertex?", S`$(-2,\,3)$`, [S`$(2,\,3)$`, S`$(-2,\,-3)$`, S`$(3,\,-2)$`], "Read the highest point.", planeDoc({ view: { xmin: -6, xmax: 2, ymin: -4, ymax: 5 }, curves: [{ f: (x) => -((x + 2) ** 2) + 3, color: "violet" }], points: [{ x: -2, y: 3, label: "(−2, 3)", color: "amber" }] })),
  mc(S`Which equation has vertex $(4,\,-2)$ and opens down?`, S`$y=-3(x-4)^2-2$`, [S`$y=3(x-4)^2-2$`, S`$y=-3(x+4)^2-2$`, S`$y=-3(x-4)^2+2$`], "a < 0, h = 4, k = −2."),
  mc(S`Which transformation is applied FIRST in the usual order for $y=2(x-1)^2+5$?`, "the vertical stretch by 2", ["the translation 1 right", "the translation 5 up", "a reflection"], "Stretch/reflect, then translate."),
];

export const M = [
  num(S`A parabola has vertex $(1,\,-3)$ and passes through $(3,\,5)$. Enter $a$.`, 2, "5 = 4a − 3."),
  num(S`A parabola has vertex $(-2,\,6)$ and passes through $(0,\,-2)$. Enter $a$.`, -2, "−2 = 4a + 6."),
  mx(S`Write the vertex form of the parabola with vertex $(3,\,1)$ through $(4,\,-1)$.`, "-2*(x-3)^2+1", "a(1)² + 1 = −1 ⇒ a = −2."),
  mx(S`Write the vertex form of the parabola with vertex $(-1,\,-5)$ through $(1,\,3)$.`, "2*(x+1)^2-5", "4a − 5 = 3 ⇒ a = 2."),
  num(S`Under $y=-2(x+3)^2+4$, the point $(2,\,4)$ of $y=x^2$ maps to $(p,\,q)$. Enter $q$.`, -4, "−2(4) + 4."),
  num(S`Under $y=-2(x+3)^2+4$, the point $(2,\,4)$ maps to $(p,\,q)$. Enter $p$.`, -1, "2 − 3."),
  num(S`Enter the larger $x$-intercept of $y=(x-2)^2-9$.`, 5, "x − 2 = ±3."),
  num(S`Enter the smaller $x$-intercept of $y=-(x+1)^2+16$.`, -5, "(x + 1)² = 16 ⇒ x = 3 or −5."),
  num(S`$y=a(x-4)^2+k$ has $x$-intercepts $1$ and $7$. Enter the axis of symmetry.`, 4, "Midway."),
  num(S`Find $k$ so that $y=3(x-2)^2+k$ passes through $(0,\,5)$.`, -7, "12 + k = 5."),
  ms(S`Select every equation with exactly two $x$-intercepts.`, [S`$y=2(x-1)^2-3$`, S`$y=-(x+2)^2-1$`, S`$y=-4(x-3)^2+1$`, S`$y=(x+5)^2$`, S`$y=0.1x^2+2$`], [0, 2], "Opposite signs of a and k."),
  mc(S`Using the step pattern, from the vertex of $y=3(x-1)^2+2$ move 2 right. How far up?`, "12", ["6", "4", "9"], "4a = 12."),
  mc("The parabola shown passes through the marked points. Which equation fits?", S`$y=\tfrac12(x-2)^2-2$`, [S`$y=2(x-2)^2-2$`, S`$y=\tfrac12(x+2)^2-2$`, S`$y=(x-2)^2-2$`], "Vertex (2, −2); (4, 0): 4a − 2 = 0 ⇒ a = ½.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -3, ymax: 5 }, curves: [{ f: (x) => 0.5 * (x - 2) ** 2 - 2, color: "violet" }], points: [{ x: 2, y: -2, label: "(2, −2)", color: "amber" }, { x: 4, y: 0, label: "(4, 0)" }, { x: 0, y: 0, label: "(0, 0)" }] })),
  mc("The arch shown is a parabola. Which equation fits?", S`$y=-\tfrac14(x-4)^2+4$`, [S`$y=-\tfrac14(x+4)^2+4$`, S`$y=-4(x-4)^2+4$`, S`$y=\tfrac14(x-4)^2+4$`], "Vertex (4, 4); (0, 0): 16a + 4 = 0.", planeDoc({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 6 }, curves: [{ f: (x) => -0.25 * (x - 4) ** 2 + 4, a: 0, b: 8, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)" }, { x: 8, y: 0, label: "(8, 0)" }, { x: 4, y: 4, label: "(4, 4)", color: "amber" }] })),
  tf(S`$y=2(x-1)^2+3$ is the same as translating $y=x^2$ first and then stretching by 2.`, false, "Stretching after translating would also double the 3."),
  num(S`An arch $h(x)=-0.2(x-10)^2+20$ m. Enter its height $5$ m from the centre.`, 15, "−0.2(25) + 20."),
  num(S`An arch $h(x)=-0.2(x-10)^2+20$ m. Enter its width at ground level.`, 20, "(x − 10)² = 100 ⇒ x = 0, 20."),
  fill(S`The range of $y=-\tfrac13(x+8)^2+2$ is $y\le$ ____.`, ["2"], "Opens down, k = 2."),
  num(S`A ball is thrown from $(0,\,1.5)$ and reaches a maximum height $6.5$ m at $x=5$ m. Enter $a$ in $y=a(x-5)^2+6.5$.`, -0.2, "1.5 = 25a + 6.5.", null, 1e-9),
  mc(S`Which equation has range $y\ge-1$ and axis $x=-3$?`, S`$y=2(x+3)^2-1$`, [S`$y=2(x-3)^2-1$`, S`$y=-2(x+3)^2-1$`, S`$y=2(x+1)^2-3$`], "Opens up with vertex (−3, −1)."),
];

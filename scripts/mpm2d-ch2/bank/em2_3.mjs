// 2.3 Equation of a Circle (centre at the origin) — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const circ = (r) => [{ f: (x) => Math.sqrt(Math.max(0, r * r - x * x)), a: -r, b: r, color: "violet" }, { f: (x) => -Math.sqrt(Math.max(0, r * r - x * x)), a: -r, b: r, color: "violet" }];

export const E = [
  num(`A circle centred at the origin has radius $4$. In $x^2+y^2=r^2$, what is $r^2$?`, 16, "$4^2$."),
  num(`What is the radius of $x^2+y^2=81$?`, 9, "$\\sqrt{81}$."),
  mc(`Which is the circle centred at the origin with radius $6$?`, "$x^2+y^2=36$", ["$x^2+y^2=6$", "$x^2+y^2=12$", "$x+y=6$"], "$r^2=36$."),
  tf(`$(3,4)$ is on $x^2+y^2=25$.`, true, "$9+16=25$."),
  tf(`$(2,2)$ is on $x^2+y^2=8$.`, true, "$4+4=8$."),
  num(`What is the radius of $x^2+y^2=1$?`, 1, "$\\sqrt1$."),
  mc(`What is the centre of $x^2+y^2=49$?`, "$(0,0)$", ["$(7,7)$", "$(49,0)$", "$(0,7)$"], "No shifts: the origin."),
  num(`A circle centred at the origin passes through $(0,7)$. What is its radius?`, 7, "Distance from the origin."),
  tf(`$(1,1)$ is outside $x^2+y^2=4$.`, false, "$1+1=2<4$: inside."),
  num(`What is the positive $x$-intercept of $x^2+y^2=64$?`, 8, "Set $y=0$: $x^2=64$."),
  mc(`Where is $(5,0)$ compared with $x^2+y^2=16$?`, "outside", ["inside", "on the circle", "at the centre"], "$25>16$."),
  fill(`A circle centred at the origin passes through $(6,8)$. Then $r^2=$ ___.`, ["100"], "$36+64$."),
  num(`What is the diameter of $x^2+y^2=9$?`, 6, "$r=3$, diameter $2r$."),
  tf(`$x^2+y^2=10$ has radius $10$.`, false, "Radius $\\sqrt{10}$."),
  num(`What is the positive $y$-intercept of $x^2+y^2=100$?`, 10, "Set $x=0$."),
  mc(`Which point is on $x^2+y^2=169$?`, "$(5,12)$", ["$(12,12)$", "$(13,1)$", "$(6,7)$"], "$25+144=169$."),
  num(`A circle centred at the origin passes through $(-6,0)$. What is its radius?`, 6, "Distance from the origin."),
  tf(`Every point on a circle is the same distance from the centre.`, true, "That distance is the radius."),
  mc(`The equation $x^2+y^2=r^2$ comes from…`, "the length (distance) formula", ["the slope formula", "the midpoint formula", "the area formula"], "$\\sqrt{x^2+y^2}=r$."),
  num(`The circle in the graph is centred at the origin. What is $r^2$ in its equation?`, 25, "It passes through $(5,0)$.", planeDoc({ view: { xmin: -7, xmax: 7, ymin: -7, ymax: 7 }, curves: circ(5), points: [{ x: 5, y: 0, label: "(5, 0)" }], step: { x: 1, y: 1 } })),
];

export const M = [
  num(`A circle centred at the origin passes through $(-5,12)$. What is $r^2$?`, 169, "$25+144$."),
  num(`Find the radius of $x^2+y^2=50$ to two decimals.`, 7.07, "$\\sqrt{50}$.", null, 0.01),
  mc(`Where is $(6,-8)$ compared with $x^2+y^2=99$?`, "outside", ["inside", "on the circle", "cannot tell"], "$36+64=100>99$."),
  num(`Find the positive $y$-value of the point on $x^2+y^2=25$ with $x=3$.`, 4, "$y^2=16$."),
  num(`Find the positive $x$-value of the point on $x^2+y^2=169$ with $y=-5$.`, 12, "$x^2=144$."),
  ms(`Select all points on $x^2+y^2=50$.`, ["$(5,5)$", "$(-1,7)$", "$(7,-1)$", "$(5,-4)$", "$(6,4)$"], [0, 1, 2], "$(5,-4)$ gives $41$; $(6,4)$ gives $52$."),
  num(`$(k,-6)$ is on $x^2+y^2=100$ with $k>0$. Find $k$.`, 8, "$k^2=64$."),
  tf(`$(-3,4)$ and $(4,-3)$ lie on the same circle centred at the origin.`, true, "Both give $25$."),
  num(`A circle centred at the origin passes through $(2,-4)$. What is $r^2$?`, 20, "$4+16$."),
  mc(`Which point is inside $x^2+y^2=30$?`, "$(4,3)$", ["$(5,3)$", "$(-4,-4)$", "$(1,6)$"], "$16+9=25<30$."),
  num(`Find the area enclosed by $x^2+y^2=49$, to two decimals.`, 153.94, "$\\pi r^2=49\\pi$.", null, 0.01),
  num(`Find the circumference of $x^2+y^2=16$, to two decimals.`, 25.13, "$2\\pi(4)=8\\pi$.", null, 0.01),
  fill(`A circle centred at the origin passes through $(\\sqrt7,3)$. Its radius is ___.`, ["4"], "$7+9=16$."),
  num(`How many points on $x^2+y^2=36$ have $x=6$?`, 1, "Only $(6,0)$: the line $x=6$ just touches the circle."),
  tf(`$(0,-9)$ is on $x^2+y^2=81$.`, true, "$0+81=81$."),
  mc(`A diameter of a circle joins $(-3,4)$ and $(3,-4)$. What is the circle's equation?`, "$x^2+y^2=25$", ["$x^2+y^2=100$", "$x^2+y^2=5$", "$x^2+y^2=50$"], "Centre $(0,0)$, radius $5$."),
  num(`How far is $(7,-24)$ from the origin?`, 25, "$\\sqrt{49+576}$."),
  mc(`A sprinkler at the origin waters everything within $6$ m. Which plant does NOT get water?`, "$(5,4)$", ["$(3,5)$", "$(-4,-4)$", "$(0,-6)$"], "$25+16=41>36$."),
  num(`A circle centred at the origin passes through $(-1,-3)$. What is $r^2$?`, 10, "$1+9$."),
  mc(`Which equation fits the circle in the graph?`, "$x^2+y^2=13$", ["$x^2+y^2=5$", "$x^2+y^2=25$", "$x^2+y^2=169$"], "It passes through $(2,3)$: $4+9$.", planeDoc({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: circ(Math.sqrt(13)), points: [{ x: 2, y: 3, label: "(2, 3)", color: "red" }], step: { x: 1, y: 1 } })),
];

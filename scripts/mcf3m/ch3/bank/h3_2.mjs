// 3.2 Solving Quadratic Equations by Graphing — 20 hard questions
import { mc, ms, num, tf } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "3.2 Solving Quadratic Equations by Graphing";
export const Q = [
  num(S`How many integers $k$ with $0\le k\le20$ make $x^2-8x+k=0$ have two real roots?`, 16, "y = x² − 8x has minimum −16; need k < 16: k = 0…15."),
  num(S`For which $k$ does $x^2+10x+k=0$ have exactly one root?`, 25, "(x + 5)²."),
  num(S`$h(t)=-5t^2+40t+5$. For how many seconds is the object above $65$ m?`, 4, "t² − 8t + 12 = 0: t = 2, 6."),
  num(S`Estimate the larger root of $2x^2-4x-3=0$ to one decimal place.`, 2.6, "x = 1 + √2.5 ≈ 2.58.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -6, ymax: 8 }, curves: [{ f: (x) => 2 * x * x - 4 * x - 3, color: "violet" }], step: { x: 0.5, y: 1 } }), 0.06),
  num(S`The graphs of $y=x^2-2$ and $y=-x^2+6$ meet at $x=\pm a$. Enter $a$.`, 2, "2x² = 8.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 8 }, curves: [{ f: (x) => x * x - 2, color: "violet" }, { f: (x) => -x * x + 6, color: "blue" }] })),
  num(S`The graphs of $y=x^2-2$ and $y=-x^2+6$ meet at two points. Enter the common $y$-coordinate.`, 2, "x = ±2: y = 2."),
  mc("The graph shows y = f(x). For which value of k does f(x) = k have exactly one solution?", S`$k=-4$`, [S`$k=0$`, S`$k=4$`, S`$k=-5$`], "Only at the vertex height.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -6, ymax: 6 }, curves: [{ f: (x) => (x - 2) ** 2 - 4, color: "violet" }], points: [{ x: 2, y: -4, label: "(2, −4)", color: "amber" }] })),
  mc("The graph shows y = f(x) (opening down, vertex (1, 5)). How many solutions does f(x) = 6 have?", "none", ["one", "two", "infinitely many"], "6 is above the maximum.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -4, ymax: 8 }, curves: [{ f: (x) => -((x - 1) ** 2) + 5, color: "violet" }], lines: [{ m: 0, b: 6, color: "red", dash: true }], points: [{ x: 1, y: 5, label: "(1, 5)", color: "amber" }] })),
  ms(S`Select every value of $k$ for which $-(x-3)^2+k=0$ has two real roots.`, ["k = 4", "k = 0", "k = −2", "k = 0.5", "k = 9"], [0, 3, 4], "Need k > 0."),
  tf(S`If $f(x)=0$ has roots $-3$ and $7$, then $f(x+1)=0$ has roots $-4$ and $6$.`, true, "The graph shifts 1 left."),
  num(S`$f(x)=0$ has roots $-3$ and $7$. Enter the larger root of $f(x-2)=0$.`, 9, "Shift right 2."),
  num(S`A diver: $H(t)=-5t^2+5t+10$. Enter the time (s) the diver passes the $10$ m board height on the way down.`, 1, "−5t² + 5t = 0: t = 0, 1."),
  num(S`For $H(t)=-5t^2+5t+10$, enter the time (s) at the maximum height.`, 0.5, "Midway between 0 and 1.", null, 1e-9),
  mc(S`$y=a(x-h)^2+k$ with $a>0$ and $k=0$. How many real roots?`, "one", ["two", "none", "depends on h"], "The vertex is on the axis."),
  num(S`For which $b>0$ does $x^2+bx+9=0$ have exactly one root?`, 6, "(x + 3)²."),
  num(S`The equation $x^2+2x+c=0$ has roots $1$ and $r$. Enter $r$.`, -3, "Symmetry about x = −1."),
  mc("The graphs of y = x² − 3 and y = 2x are shown. Solve x² − 3 = 2x.", S`$x=-1$ or $x=3$`, [S`$x=1$ or $x=-3$`, S`$x=3$ only`, S`$x=-3$ or $x=6$`], "x² − 2x − 3 = 0.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 10 }, curves: [{ f: (x) => x * x - 3, color: "violet" }], lines: [{ m: 2, b: 0, color: "blue" }], points: [{ x: -1, y: -2, label: "(−1, −2)", color: "amber" }, { x: 3, y: 6, label: "(3, 6)", color: "amber" }] })),
  num(S`A rocket: $h(t)=-4.9t^2+49t$. Enter the time (s) of its maximum height.`, 5, "Zeros 0 and 10."),
  num(S`For $h(t)=-5t^2+25t$, enter the length (s) of the interval when $h>20$.`, 3, "t² − 5t + 4 = 0: t = 1, 4."),
  tf(S`If $f(x)=k$ has no solutions for $k=3$, it cannot have solutions for any $k>3$ when the parabola opens down.`, true, "Larger k is even further above the maximum."),
];

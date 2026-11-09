// 1.2 Function Notation — 20 hard questions
import { mc, ms, num, tf, mx } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "1.2 Function Notation";
export const Q = [
  num(S`$f(x)=ax^2+3$ and $f(2)=-5$. Enter $a$.`, -2, "4a + 3 = −5."),
  num(S`$f(x)=ax^2+bx$ with $f(1)=5$ and $f(2)=14$. Enter $a$.`, 2, "a + b = 5, 4a + 2b = 14 ⇒ 2a + b = 7 ⇒ a = 2."),
  num(S`$f(x)=x^2-4x+c$ and $f(3)=2$. Find $f(-1)$.`, 10, "9 − 12 + c = 2 ⇒ c = 5; f(−1) = 1 + 4 + 5."),
  num(S`$f(x)=x^2+1$. Solve $f(x+1)=f(x)+9$.`, 4, "(x + 1)² + 1 = x² + 10 ⇒ 2x + 1 = 9."),
  num(S`$f(x)=3x-2$. Solve $f(x^2)=f(5x)-6$. Enter the larger root.`, 3, "3x² − 2 = 15x − 8 ⇒ x² − 5x + 6 = 0 ⇒ x = 2, 3."),
  mx(S`$f(x)=x^2-x$. Simplify $f(a+1)-f(a)$.`, "2*a", "(a + 1)² − (a + 1) − a² + a = 2a."),
  mx(S`$g(x)=2x^2+1$. Simplify $g(a-1)$.`, "2*a^2-4*a+3", "2(a² − 2a + 1) + 1."),
  num(S`$h(t)=-5t^2+40t+5$. Enter the time on the way DOWN when the height is $80$ m.`, 5, "−5t² + 40t − 75 = 0 ⇒ t² − 8t + 15 = 0 ⇒ t = 3, 5."),
  num(S`$R(p)=-10p^2+600p$. Enter the larger price with $R(p)=8000$.`, 40, "p² − 60p + 800 = 0 ⇒ (p − 20)(p − 40) = 0.", planeDoc({ view: { xmin: 0, xmax: 62, ymin: -500, ymax: 10000 }, curves: [{ f: (p) => -10 * p * p + 600 * p, a: 0, b: 60, color: "violet" }], lines: [{ m: 0, b: 8000, color: "green", dash: true }], step: { x: 10, y: 1000 }, xlabel: "p", ylabel: "R" })),
  num(S`The graph of $y=f(x)$ is shown. How many solutions does $f(x)=2$ have?`, 2, "The line y = 2 crosses the curve twice.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 6 }, curves: [{ f: (x) => -(x * x) + 4, color: "violet" }], lines: [{ m: 0, b: 2, color: "green", dash: true }] })),
  num(S`The graph of $y=f(x)$ is shown. Find $f(f(1))$.`, 3, "f(1) = 0, then f(0) = 3.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 5 }, curves: [{ f: (x) => -3 * x + 3, color: "violet" }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "amber" }, { x: 0, y: 3, label: "(0, 3)", color: "amber" }] })),
  mc(S`For $f(x)=x^2-9$, which value of $k$ makes $f(x)=k$ have exactly one solution?`, S`$-9$`, [S`$0$`, S`$9$`, S`$-10$`], "Only at the vertex value."),
  ms(S`$f(x)=-(x-1)^2+4$. Select every true statement.`, [S`$f(3)=0$`, S`$f(1)=4$`, S`$f(x)=5$ has no solution`, S`$f(-1)=f(3)$`, S`$f(0)=5$`], [0, 1, 2, 3], "f(0) = −1 + 4 = 3."),
  num(S`$f(x)=2x+1$ and $g(x)=x^2$. Find $g(f(2))$.`, 25, "f(2) = 5, g(5) = 25."),
  num(S`$f(x)=2x+1$ and $g(x)=x^2$. Find $f(g(2))$.`, 9, "g(2) = 4, f(4) = 9."),
  tf(S`If $f(x)=x^2$, then $f(a+b)=f(a)+f(b)$ for all $a,b$.`, false, "(a + b)² = a² + 2ab + b²."),
  num(S`$P(x)=-x^2+12x-20$ is profit (thousands of dollars) for $x$ thousand items. Enter the smaller break-even value of $x$.`, 2, "x² − 12x + 20 = 0 ⇒ (x − 2)(x − 10)."),
  mc("The graph shows y = f(x) and y = g(x). Where is f(x) = g(x)?", "x = −1 and x = 2", ["x = 0 only", "x = 1 and x = 4", "never"], "Read the x-coordinates of the crossings.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: 1, b: 2, color: "blue" }], points: [{ x: -1, y: 1, label: "(−1, 1)", color: "amber" }, { x: 2, y: 4, label: "(2, 4)", color: "amber" }] })),
  num(S`$f(x)=x^2-6x+k$ has $f(x)=0$ with exactly one solution. Enter $k$.`, 9, "(x − 3)² = 0."),
  mc("A pool drains so that its volume after t hours is V(t) = 5000 − 400t litres. What does V(t) = 0 tell you?", "the time when the pool is empty", ["the starting volume", "the drain rate", "the volume after 0 hours"], "Solve 5000 − 400t = 0: t = 12.5 h."),
];

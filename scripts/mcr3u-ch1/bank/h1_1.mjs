// 1.1 Relations and Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P, sideways, circ } from "./fig.mjs";

export const TOPIC = "1.1 Relations and Functions";
export const Q = [
  num(String.raw`The line $x=k$ meets $x=y^2-8y+12$ exactly once. Find $k$.`, -4, "x = (y − 4)² − 4: vertex (−4, 4)."),
  num(String.raw`For how many integers $k$ from $-10$ to $10$ does $x=k$ meet $x=-(y-1)^2+9$ twice?`, 19, "Opens left from (9, 1): twice for k < 9, i.e. k = −10, …, 8."),
  mc(String.raw`For which $a$ is $\{(a,1),(2,a),(a^2,3)\}$ a function?`, String.raw`every $a$ except $0,1,2,\pm\sqrt2$`, [String.raw`every $a$ except $2$`, String.raw`every $a$ except $0$ and $1$`, "no value of a"], "a = 2: (2, 1),(2, 2). a = 0 or 1: a² = a with outputs 1 and 3. a² = 2: (2, a),(2, 3) with a ≠ 3."),
  num("How many integers k make the line x = k cross the circle twice?", 5, "(x − 2)² + y² = 9: two points when −1 < k < 5: k = 0, 1, 2, 3, 4.", planeDoc({ view: { xmin: -3, xmax: 7, ymin: -5, ymax: 5 }, curves: circ(3, 2, 0), points: [P(2, 0, "C")] })),
  ms("Which define y as a function of x? Select all.", [String.raw`$y=\sqrt{x^2}$`, String.raw`$y^2=x^2$`, String.raw`$y=\pm\sqrt x$`, String.raw`$|y|=x$`, String.raw`$y=\frac{x}{|x|}$`], [0, 4], "√(x²) = |x|; x/|x| is ±1 depending on the sign of x — one value each. The others give two outputs."),
  mc(String.raw`Points $(t^2,t^3)$ are plotted for every real $t$. Is $y$ a function of $x$?`, "no — t = 1 and t = −1 give (1, 1) and (1, −1)", ["yes — t³ is one-to-one", "yes — each t gives one point", "no — x is never negative"], "Opposite t share x = t² but not y."),
  num(String.raw`For the relation $x^2+y^2=2x+8$, what is the largest y-value?`, 3, "(x − 1)² + y² = 9: radius 3."),
  tf("If f is a function, then swapping x and y in every pair always gives a function.", false, "y = x² is a function; x = y² is not."),
  mc("Is the graph made of two rays from the origin a function?", "no — every x > 0 has two outputs", ["yes — each ray is a function", "yes — it passes through the origin once", "no — x = 0 has no output"], "x = 1 meets both rays.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -5, ymax: 5 }, segs: [{ pts: [[0, 0], [5, 5]] }, { pts: [[0, 0], [5, -5]] }] })),
  num(String.raw`The line $x=k$ meets $x=|y|-3$ twice exactly when $k>m$. Find $m$.`, -3, "The V opens right from (−3, 0)."),
  ms("Which dashed lines meet the curve x = (y − 1)² − 4 twice? Select all.", [String.raw`$x=-5$`, String.raw`$x=-4$`, String.raw`$x=0$`, String.raw`$x=5$`], [2, 3], "Vertex (−4, 1): left of it none, at it one, right of it two.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -3, ymax: 5 }, curves: sideways(-4, 1), vlines: [-5, -4, 0, 5].map((x) => ({ x, color: "amber", dash: true, label: `x = ${x}`.replace("-", "−") })), step: { x: 1, y: 1 } })),
  num(String.raw`How many different functions have domain $\{1,2\}$ and outputs chosen from $\{5,6,7\}$?`, 9, "Each input has 3 choices: 3 × 3."),
  num(String.raw`How many of the functions with domain $\{1,2\}$ and outputs from $\{5,6,7\}$ are one-to-one?`, 6, "3 choices, then 2: 3 × 2."),
  tf(String.raw`The graph of $x^2-y^2=0$ is a function.`, false, "y = ±x: two crossing lines."),
  num(String.raw`For $\{(x,y)\mid x=y^2,\ y\in\{-3,-2,\ldots,3\}\}$, how many inputs have two outputs?`, 3, "x = 1, 4, 9 (x = 0 has one)."),
  mc("Is this graph of two horizontal pieces a function?", "no — x = 2 has two outputs (two closed dots)", ["yes — it is made of horizontal pieces", "yes — the pieces do not overlap", "no — it has a gap"], "Closed dots at (2, 1) and (2, 3) on the same vertical line.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, segs: [{ pts: [[0, 1], [2, 1]] }, { pts: [[2, 3], [4, 3]] }], points: [P(2, 1), P(2, 3)] })),
  num(String.raw`How many points with integer coordinates lie on $x^2+y^2=13$?`, 8, "(±2, ±3) and (±3, ±2)."),
  num(String.raw`How many different x-values appear among the integer points on $x^2+y^2=13$?`, 4, "x = −3, −2, 2, 3, each with two outputs."),
  mc(String.raw`For the relation "x → every solution y of $y^2=x$", which input has exactly one output?`, String.raw`$x=0$`, [String.raw`$x=1$`, String.raw`$x=-1$`, "every positive x"], "Only y² = 0 has a single solution."),
  num(String.raw`The line $x=k$ meets $x=-\tfrac12(y+1)^2+2$ twice exactly when $k<c$. Find $c$.`, 2, "Opens left from the vertex (2, −1).", planeDoc({ view: { xmin: -6, xmax: 4, ymin: -6, ymax: 4 }, curves: sideways(2, -1, -0.5), points: [P(2, -1)] })),
];

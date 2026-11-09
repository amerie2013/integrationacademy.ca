// 1.3 Domain and Range — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;

export const E = [
  mc(S`What is the domain of $\{(1,\,3),\,(2,\,5),\,(4,\,5)\}$?`, S`$\{1,\,2,\,4\}$`, [S`$\{3,\,5\}$`, S`$\{1,\,2,\,3,\,4,\,5\}$`, S`$\{3,\,5,\,5\}$`], "First coordinates."),
  mc(S`What is the range of $\{(1,\,3),\,(2,\,5),\,(4,\,5)\}$?`, S`$\{3,\,5\}$`, [S`$\{1,\,2,\,4\}$`, S`$\{3,\,5,\,5\}$`, S`$\{1,\,5\}$`], "Second coordinates, each once."),
  mc(S`What is the domain of $y=3x-8$?`, S`$\{x\in\mathbb{R}\}$`, [S`$\{x\in\mathbb{R}\mid x\ge0\}$`, S`$\{x\in\mathbb{R}\mid x\ge-8\}$`, S`$\{3\}$`], "Any real x can be substituted."),
  mc(S`What is the range of $y=x^2$?`, S`$\{y\in\mathbb{R}\mid y\ge0\}$`, [S`$\{y\in\mathbb{R}\}$`, S`$\{y\in\mathbb{R}\mid y\le0\}$`, S`$\{y\in\mathbb{R}\mid y>0\}$`], "Squares are never negative; 0 is reached."),
  mc(S`What is the range of $y=(x-4)^2+1$?`, S`$y\ge1$`, [S`$y\ge4$`, S`$y\le1$`, S`$y\ge-4$`], "Opens up from the vertex (4, 1)."),
  mc(S`What is the range of $y=-(x+2)^2+6$?`, S`$y\le6$`, [S`$y\ge6$`, S`$y\le-2$`, S`$y\ge-2$`], "Opens down from the vertex (−2, 6)."),
  tf(S`The domain of every quadratic function written as an equation is $\mathbb{R}$.`, true, "Any x can be squared."),
  tf(S`The range of $y=5$ is $\mathbb{R}$.`, false, "Range {5}."),
  num(S`Enter the minimum value of $y=2(x-1)^2-7$.`, -7, "The vertex y-value."),
  num(S`Enter the maximum value of $y=-3(x-5)^2+11$.`, 11, "The vertex y-value."),
  mc("The graph is a segment with a closed dot at (−2, 1) and an open dot at (3, 4). What is its domain?", S`$-2\le x<3$`, [S`$-2<x\le3$`, S`$1\le x<4$`, S`$-2\le x\le3$`], "Closed: ≤; open: <.", planeDoc({ view: { xmin: -4, xmax: 5, ymin: -1, ymax: 6 }, segs: [{ pts: [[-2, 1], [3, 4]], color: "violet" }], points: [{ x: -2, y: 1, label: "closed", color: "violet" }, { x: 3, y: 4, label: "open", color: "red" }] })),
  mc("For the same segment from (−2, 1) closed to (3, 4) open, what is the range?", S`$1\le y<4$`, [S`$1<y\le4$`, S`$-2\le y<3$`, S`$1\le y\le4$`], "Heights from 1 (included) to 4 (excluded).", planeDoc({ view: { xmin: -4, xmax: 5, ymin: -1, ymax: 6 }, segs: [{ pts: [[-2, 1], [3, 4]], color: "violet" }], lines: [{ m: 0, b: 1, color: "gray", dash: true }, { m: 0, b: 4, color: "gray", dash: true }] })),
  fill("The set of all inputs of a function is called its ____.", ["domain", "the domain"], "Definition."),
  fill("The set of all outputs of a function is called its ____.", ["range", "the range"], "Definition."),
  tf(S`In context, time is usually restricted to $t\ge0$.`, true, "Models start at t = 0."),
  num(S`How many elements are in the range of $\{(0,\,2),\,(1,\,2),\,(2,\,2)\}$?`, 1, "Range {2}."),
  mc(S`Which inequality describes “$x$ is at least $-3$”?`, S`$x\ge-3$`, [S`$x>-3$`, S`$x\le-3$`, S`$x<-3$`], "“At least” includes −3."),
  mc(S`What is the range of $y=-4x+1$?`, S`$\{y\in\mathbb{R}\}$`, [S`$y\le1$`, S`$y\ge1$`, S`$y\ge-4$`], "A slanted line reaches every height."),
  num(S`A ball's model $h(t)=-5t^2+20t$ is valid from $t=0$ until it lands. Enter the landing time.`, 4, "−5t(t − 4) = 0."),
  tf(S`An open dot at an endpoint means the endpoint is included.`, false, "Open = excluded."),
];

export const M = [
  mc(S`What is the range of $y=x^2-6x$?`, S`$y\ge-9$`, [S`$y\ge-6$`, S`$y\ge0$`, S`$y\le9$`], "Vertex at x = 3: 9 − 18 = −9."),
  num(S`Enter the largest value of $y=x^2$ on $-4\le x\le3$.`, 16, "(−4)² = 16 > 9."),
  num(S`Enter the smallest value of $y=x^2$ on $-4\le x\le3$.`, 0, "The vertex x = 0 is in the interval."),
  num(S`Enter the smallest value of $y=x^2$ on $1\le x\le3$.`, 1, "The vertex is outside; the function increases on [1, 3]."),
  mc(S`Range of $y=(x-2)^2-1$ on $0\le x\le5$?`, S`$-1\le y\le8$`, [S`$3\le y\le8$`, S`$-1\le y\le3$`, S`$0\le y\le8$`], "Vertex −1 inside; ends 3 and 8."),
  mc(S`Range of $y=-(x+1)^2+4$ on $0\le x\le2$?`, S`$-5\le y\le3$`, [S`$-5\le y\le4$`, S`$3\le y\le4$`, S`$y\le4$`], "Vertex x = −1 is outside: y(0) = 3, y(2) = −5."),
  num(S`$h(t)=-5t^2+10t+40$ m. Enter the maximum height.`, 45, "Vertex at t = 1: −5 + 10 + 40."),
  num(S`$h(t)=-5t^2+10t+40$ m. Enter the landing time (s).`, 4, "t² − 2t − 8 = 0 ⇒ (t − 4)(t + 2) = 0."),
  mc(S`$h(t)=-5t^2+10t+40$ m with $t\ge0$. What is the range in context?`, S`$0\le h\le45$`, [S`$40\le h\le45$`, S`$h\le45$`, S`$0\le h\le40$`], "From the ground (0) up to the max."),
  mc("A rectangle has perimeter 16 m and width x. What is the domain of its area A(x) = x(8 − x)?", S`$0<x<8$`, [S`$0\le x\le16$`, S`$x>0$`, S`$0<x<16$`], "Both sides must be positive."),
  num(S`A rectangle has area $A(x)=x(8-x)$. Enter the maximum area.`, 16, "At x = 4: 4 · 4."),
  mc("The graph shows a parabola restricted to −1 ≤ x ≤ 4. What is its range?", S`$-4\le y\le5$`, [S`$0\le y\le5$`, S`$-4\le y\le0$`, S`$y\ge-4$`], "Lowest at the vertex (1, −4), highest at x = 4.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => (x - 1) ** 2 - 4, a: -1, b: 4, color: "violet" }], points: [{ x: -1, y: 0, label: "(−1, 0)" }, { x: 4, y: 5, label: "(4, 5)" }, { x: 1, y: -4, label: "(1, −4)", color: "amber" }] })),
  mc("The graph shows a downward parabola on its whole domain. What is its range?", S`$y\le3$`, [S`$y\ge3$`, S`$y\le-1$`, S`$\mathbb{R}$`], "Maximum at the vertex (−1, 3).", planeDoc({ view: { xmin: -5, xmax: 3, ymin: -5, ymax: 5 }, curves: [{ f: (x) => -((x + 1) ** 2) + 3, color: "violet" }], points: [{ x: -1, y: 3, label: "(−1, 3)", color: "amber" }] })),
  tf(S`The range of $y=a(x-h)^2+k$ with $a<0$ is $y\le k$.`, true, "Opens down; k is the maximum."),
  ms(S`Select every function with range $y\ge-2$.`, [S`$y=(x-5)^2-2$`, S`$y=3x^2-2$`, S`$y=-(x+1)^2-2$`, S`$y=\tfrac12(x+7)^2-2$`], [0, 1, 3], "Opens up with k = −2."),
  num(S`$y=(x-3)^2+k$ has range $y\ge-5$. Enter $k$.`, -5, "Minimum = k."),
  mc("A bridge cable hangs as a parabola between towers at x = 0 and x = 100 m. What is the natural domain?", S`$0\le x\le100$`, [S`$x\ge0$`, S`$\mathbb{R}$`, S`$0<x<50$`], "Only between the towers."),
  num(S`A diver's height is $H(t)=-5t^2+5t+10$ m. Enter the time (s) at which the diver enters the water.`, 2, "t² − t − 2 = 0 ⇒ (t − 2)(t + 1) = 0."),
  mc(S`Which is the domain of the diver model $H(t)=-5t^2+5t+10$ in context?`, S`$0\le t\le2$`, [S`$-1\le t\le2$`, S`$t\ge0$`, S`$0\le t\le10$`], "From leaving the board (t = 0) to entry (t = 2)."),
  fill(S`In set notation, all real numbers greater than $4$ are written $\{x\in\mathbb{R}\mid x\ \square\ 4\}$. The symbol is ____.`, [">"], "Strictly greater."),
];

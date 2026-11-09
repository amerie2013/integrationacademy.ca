// 1.1 Relations and Functions — 20 hard questions
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { planeDoc, mapDoc } from "../../figs.mjs";
const S = String.raw;
const side = (h, k, c = "violet") => [{ f: (x) => k + Math.sqrt(x - h), a: h, color: c }, { f: (x) => k - Math.sqrt(x - h), a: h, color: c }];

export const TOPIC = "1.1 Relations and Functions";
export const Q = [
  num(S`For $x=(y+2)^2-5$, enter the only input $x$ that has exactly one output.`, -5, "Only the vertex input gives (y + 2)² = 0."),
  num(S`For $x=(y-1)^2+3$, enter the sum of the two outputs when $x=19$.`, 2, "y − 1 = ±4: y = 5 and y = −3."),
  num(S`$\{(p,\,2),\,(4,\,p),\,(7,\,0)\}$ fails to be a function for two values of $p$. Enter their product.`, 28, "p = 4 gives (4, 2), (4, 4); p = 7 gives (7, 2), (7, 0). Product 28."),
  num(S`How many points of the circle $x^2+y^2=169$ have $x=5$?`, 2, "y² = 144: y = ±12."),
  num(S`A ball's height is $h=-5t^2+20t$. Enter the later time at which $h=15$.`, 3, "t² − 4t + 3 = 0: t = 1 or 3."),
  mc("The graph shows a sideways parabola. Which input has exactly one output?", S`$x=-2$`, [S`$x=0$`, S`$x=2$`, S`$x=-3$`], "The vertex (−2, 1) is the only point on its vertical line.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 5 }, curves: side(-2, 1), points: [{ x: -2, y: 1, label: "(−2, 1)", color: "amber" }] })),
  mc("Which description gives a relation that is NOT a function?", "Each number is paired with every number whose square equals it", ["Each number is paired with its square", "Each number is paired with its double", "Each number is paired with 0"], "4 is paired with 2 and −2."),
  ms("Select every relation for which y is a function of x.", [S`$y=x^2-4x$`, S`$x=|y|$`, S`$y=|x|$`, S`$x=y^3$`, S`$x^2-y=1$`], [0, 2, 3, 4], "x = |y| gives y = ±x; x = y³ gives one real cube root."),
  mc("The mapping diagram is reversed (arrows point the other way). Is the reversed relation a function?", "No", ["Yes", "Only if the outputs are positive", "Cannot tell from a diagram"], "Two inputs share an output, so reversed, that output has two arrows.", mapDoc([[-1, 2], [1, 2], [3, 5]])),
  tf("Every function's reverse (swap x and y) is also a function.", false, "y = x² is a function; x = y² is not."),
  tf(S`For the relation $y^2=x+9$, the input $x=-9$ has exactly one output.`, true, "y² = 0 gives y = 0."),
  num(S`For $y^2=x+9$, how many inputs among $x=-10,\,-9,\,0$ have at least one output?`, 2, "x = −10 gives y² = −1: none."),
  mc("A function contains (2, 5), and you do not know its other pairs. Which added pair is guaranteed to keep it a function?", S`$(2,\,5)$ again`, [S`$(5,\,2)$`, S`$(3,\,5)$`, S`$(2,\,6)$`], "Repeating (2, 5) adds nothing new. A new input (5 or 3) might clash with an unknown pair, and (2, 6) certainly clashes."),
  num(S`For $x=y^2-6y+5$, enter the input with exactly one output.`, -4, "x = (y − 3)² − 4: vertex input −4."),
  mc("The graph shows a semicircle (top half). Is it a function?", "Yes: each x has one y", ["No: it is part of a circle", "No: it fails the horizontal-line test", "Only on the right half"], "Removing the bottom half leaves one point per vertical line.", planeDoc({ view: { xmin: -5, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(Math.max(0, 16 - x * x)), a: -4, b: 4, color: "violet" }] })),
  mc(S`Which restriction makes $x=y^2$ a function of $x$?`, S`$y\ge0$`, [S`$x\ge0$`, S`$x\le4$`, S`$y\in\mathbb{R}$`], "Keep only one branch: y = √x."),
  num(S`For the relation $(x-2)^2+(y+1)^2=25$, enter the larger output at $x=5$.`, 3, "(y + 1)² = 16: y = 3 or −5."),
  tf("A relation with exactly one ordered pair is always a function.", true, "One input, one output."),
  mc("The graph shows two pieces. What makes it fail the vertical-line test?", S`both pieces have points with $x=1$`, ["the pieces are different colours", "one piece is a line", "the pieces do not touch"], "At x = 1 there is a point on each piece.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 6 }, curves: [{ f: (x) => x + 2, a: -3, b: 1, color: "violet" }, { f: (x) => -x + 1, a: 1, b: 5, color: "blue" }], points: [{ x: 1, y: 3, label: "(1, 3)", color: "violet" }, { x: 1, y: 0, label: "(1, 0)", color: "blue" }] })),
  num(S`A rectangle has perimeter $20$. Its area $A$ is a function of its width $w$: $A=w(10-w)$. Enter the other width that gives the same area as $w=3$.`, 7, "3(7) = 21 = 7(3): two inputs, one output (allowed)."),
];

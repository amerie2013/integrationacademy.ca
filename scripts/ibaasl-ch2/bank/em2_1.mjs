// 2.1 What Is a Function? — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, mapDoc } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const circle = (r, color = "violet") => [{ f: (x) => Math.sqrt(r * r - x * x), a: -r, b: r, color }, { f: (x) => -Math.sqrt(r * r - x * x), a: -r, b: r, color }];

export const E = [
  tf(S`$\{(1,2),(2,3),(3,4)\}$ is a function.`, true, "Each input appears once."),
  tf(S`$\{(1,2),(1,3)\}$ is a function.`, false, "The input 1 has two outputs."),
  mc(S`What type of mapping is $y=3x$?`, "one-to-one", ["many-to-one", "one-to-many", "not a mapping"], "Different inputs give different outputs."),
  mc("Which relation is a function of x?", S`$y=x-7$`, [S`$x=5$`, S`$x^2+y^2=1$`, S`$y^2=x$`], "Only y = x − 7 gives one y for each x."),
  num("How many outputs does a function give for each input in its domain?", 1, "Exactly one."),
  fill("A graph is a function if every vertical line meets it at most ___.", ["once", "one time", "1"], "That is the vertical line test."),
  mc(S`What type of mapping is $\{(1,5),(2,5),(3,5)\}$?`, "many-to-one", ["one-to-one", "one-to-many", "not a function"], "All inputs share the output 5."),
  tf("A many-to-one relation is a function.", true, "Each input still has exactly one output."),
  tf("A one-to-many relation is a function.", false, "Some input has two or more outputs."),
  num(S`For $y=3x-2$, find $y$ when $x=4$.`, 10, "12 − 2."),
  mc("The vertical line test is used on:", "graphs", ["tables only", "equations only", "mapping diagrams only"], "It checks a graph for repeated inputs."),
  tf(S`The table $x$: 1, 2, 3; $y$: 4, 4, 4 shows a function.`, true, "Each input has one output."),
  num("In the mapping shown, how many inputs share the output 4?", 2, "1 → 4 and 2 → 4.", mapDoc([[1, 4], [2, 4], [3, 6]])),
  mc("Is the graph shown a function of x?", "no — some vertical lines meet it twice", ["yes — it is a closed curve", "yes — it passes the vertical line test", "no — it has no y-intercept"], "A circle fails the vertical line test.", planeDoc({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: circle(3) })),
  tf(S`$y=x^2$ is one-to-one.`, false, "x = 2 and x = −2 both give 4."),
  num(S`For $y=5-x^2$, find $y$ when $x=2$.`, 1, "5 − 4."),
  mc("Which equation does NOT define y as a function of x?", S`$y^2=x+2$`, [S`$y=x+2$`, S`$y=2x^2$`, S`$y=|x|$`], "y = ±√(x + 2)."),
  tf("Every function is one-to-one.", false, "y = x² is a function but many-to-one."),
  num(S`How many points does the line $x=3$ share with $y=x^2$?`, 1, "Only (3, 9)."),
  mc(S`What type of mapping is $\{(-1,1),(1,1)\}$?`, "many-to-one", ["one-to-one", "one-to-many", "not a function"], "Two inputs share the output 1."),
];

export const M = [
  num(S`How many points does the line $x=6$ share with $x^2+y^2=100$?`, 2, "y² = 64, y = ±8."),
  mc(S`The relation $y^2=4x$ is:`, "not a function of x", ["a one-to-one function", "a many-to-one function", "a constant function"], "x = 1 gives y = ±2."),
  tf(S`$y=\sqrt x$ is a function.`, true, "The root sign means the non-negative root only."),
  num(S`$\{(2,5),(3,7),(k,9)\}$ is not a function for one positive value of $k$ less than 3. Find it.`, 2, "k = 2 would give the input 2 two outputs."),
  mc("Which graph fails the vertical line test?", "a sideways parabola", ["a straight line with positive gradient", "a parabola opening upwards", "an exponential curve"], "A sideways parabola has two y-values for most x."),
  tf(S`$x=3$ defines $y$ as a function of $x$.`, false, "The input 3 has infinitely many outputs."),
  num(S`For $y=(x-1)^2$, how many inputs give the output 4?`, 2, "x = 3 and x = −1."),
  ms("Which relations are functions of x? Select all.", [S`$y=x^3$`, S`$y=\frac1x$`, S`$x=y^2$`, S`$y=|x|+1$`], [0, 1, 3], "x = y² gives two y-values."),
  mc(S`What type of mapping is $y=x^3$?`, "one-to-one", ["many-to-one", "one-to-many", "not a function"], "Different numbers have different cubes."),
  num(S`The graph of $y=x^2-4$ and the line $y=5$ are shown. How many inputs give the output 5?`, 2, "x = ±3.", planeDoc({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 8 }, curves: [{ f: (x) => x * x - 4, color: "violet" }], lines: [{ m: 0, b: 5, color: "green", dash: true }] })),
  num("Which input in the mapping shown breaks the rule for a function?", 1, "1 has two arrows.", mapDoc([[0, 1], [1, 2], [1, 3], [2, 4]])),
  tf("The relation 'person → their birth mother' is a function.", true, "Each person has exactly one birth mother."),
  tf("The relation 'mother → her child' is always a function.", false, "A mother may have several children."),
  mc(S`The equation $2x-y=6$ defines $y$ as:`, "a one-to-one function of x", ["a many-to-one function of x", "not a function of x", "a constant function"], "y = 2x − 6 is a line with non-zero gradient."),
  num(S`For $x+y^2=16$, how many values of $y$ correspond to $x=7$?`, 2, "y² = 9."),
  num(S`For $x+y^2=16$, how many values of $y$ correspond to $x=16$?`, 1, "y² = 0."),
  num(S`For $x+y^2=16$, how many values of $y$ correspond to $x=17$?`, 0, "y² = −1 has no real solution."),
  mc(S`Parking costs $C=4+2.5h$ for $h$ hours. Is $h$ a function of $C$?`, "yes, because the relation is one-to-one", ["no, because C depends on h", "no, because costs repeat", "only for whole hours"], "Each cost comes from one value of h."),
  tf("A function can have two different inputs with the same output.", true, "That is a many-to-one function."),
  num(S`For $y=|x-3|$, two inputs give $y=2$. Find the larger one.`, 5, "x − 3 = ±2."),
];

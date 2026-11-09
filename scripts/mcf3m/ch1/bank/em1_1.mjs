// 1.1 Relations and Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { planeDoc, mapDoc } from "../../figs.mjs";
const S = String.raw;
const side = (h, k, c = "violet") => [{ f: (x) => k + Math.sqrt(x - h), a: h, color: c }, { f: (x) => k - Math.sqrt(x - h), a: h, color: c }];

export const E = [
  tf(S`$\{(1,\,2),\,(2,\,3),\,(3,\,4)\}$ is a function.`, true, "All the x-values are different."),
  tf(S`$\{(4,\,0),\,(4,\,1),\,(5,\,2)\}$ is a function.`, false, "x = 4 has two outputs."),
  tf(S`$\{(-1,\,6),\,(0,\,6),\,(1,\,6)\}$ is a function.`, true, "Repeated outputs are allowed."),
  tf("A graph that a vertical line crosses twice is not a function.", true, "That vertical line is one input with two outputs."),
  tf("A graph that a horizontal line crosses twice cannot be a function.", false, "Only vertical lines matter; y = x² is a function."),
  num(S`How many elements are in the domain of $\{(2,\,5),\,(3,\,5),\,(7,\,1),\,(2,\,5)\}$?`, 3, "List each x once: {2, 3, 7}."),
  num(S`How many elements are in the range of $\{(0,\,4),\,(1,\,9),\,(2,\,4),\,(3,\,9)\}$?`, 2, "Range = {4, 9}."),
  mc("Which relation is a function?", S`$\{(1,\,1),\,(2,\,1),\,(3,\,1)\}$`, [S`$\{(1,\,1),\,(1,\,2)\}$`, S`$\{(0,\,0),\,(0,\,5)\}$`, S`$\{(3,\,2),\,(3,\,-2)\}$`], "Only the first has no repeated x."),
  mc("Which test is used on a graph to decide whether it is a function?", "the vertical-line test", ["the horizontal-line test", "the slope test", "the intercept test"], "A vertical line = one input."),
  mc("Which equation is NOT a function?", S`$x=3$`, [S`$y=3$`, S`$y=3x$`, S`$y=x^2+3$`], "x = 3 pairs one input with every y."),
  mc("The mapping diagram pairs {1, 2, 5} with {3, 4, 6}. Is it a function?", "No: one input has two arrows", ["Yes: every output has an arrow", "Yes: there are four arrows", "No: two inputs share an output"], "The input 2 has two arrows.", mapDoc([[1, 3], [2, 4], [2, 6], [5, 6]])),
  mc("The mapping diagram pairs {−2, 0, 3} with {0, 7}. Is it a function?", "Yes", ["No: two inputs share the output 0", "No: there are more inputs than outputs", "Cannot tell"], "Each input has exactly one arrow.", mapDoc([[-2, 0], [0, 0], [3, 7]])),
  fill(S`In the relation $\{(7,\,a),\,(8,\,b)\}$, the domain is $\{7,\,\square\}$. The missing number is ____.`, ["8"], "Domain = first coordinates."),
  fill("A relation in which each input has exactly one output is called a ____.", ["function", "a function"], "Definition of a function."),
  mc("Identify the graph shown and decide whether it is a function.", "a parabola opening up: a function", ["a circle: not a function", "a sideways parabola: not a function", "a vertical line: not a function"], "Every vertical line meets it once.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 8 }, curves: [{ f: (x) => x * x - 1, color: "violet" }] })),
  num(S`For $\{(3,\,-1),\,(5,\,2),\,(9,\,-1)\}$, enter the largest number in the domain.`, 9, "Domain {3, 5, 9}."),
  tf(S`$y=-2x+5$ is a function.`, true, "Every non-vertical line is a function."),
  tf(S`The circle $x^2+y^2=1$ is a function.`, false, "x = 0 gives y = ±1."),
  mc(S`Which pair should be removed to make $\{(1,\,5),\,(2,\,6),\,(1,\,7)\}$ a function?`, S`$(1,\,5)$ or $(1,\,7)$`, [S`$(2,\,6)$`, "none", "all of them"], "x = 1 has two outputs."),
  num(S`For $\{(-4,\,8),\,(-2,\,1),\,(0,\,3)\}$, enter the smallest number in the range.`, 1, "Range {1, 3, 8}."),
];

export const M = [
  mc(S`For $x=y^2+3$, which outputs go with the input $x=12$?`, S`$3$ and $-3$`, [S`$3$ only`, S`$147$`, S`$9$ and $-9$`], "y² = 9."),
  tf(S`$y=\sqrt{x}$ (positive root only) is a function.`, true, "One output for each allowed input."),
  tf(S`$y^2=x$ is a function.`, false, "y = ±√x."),
  num(S`How many outputs does $x=4$ have in $x^2+y^2=25$?`, 2, "y² = 9: y = ±3."),
  num(S`How many outputs does $x=5$ have in $x^2+y^2=25$?`, 1, "y² = 0: only y = 0."),
  ms(S`Select every relation that is a function.`, [S`$y=4x^2-1$`, S`$x=y^2$`, S`$y=-7$`, S`$x^2+y^2=9$`, S`$y=(x+2)^2$`], [0, 2, 4], "Solve for y; a ± means not a function."),
  mc("The graph shown is a sideways parabola. Which vertical line shows it is not a function?", S`$x=4$`, [S`$x=-3$`, S`$x=-5$`, "no vertical line works"], "x = 4 meets the curve at two points; x = −3 and x = −5 meet it at most once.", planeDoc({ view: { xmin: -5, xmax: 7, ymin: -5, ymax: 5 }, curves: side(-3, 0) })),
  mc("A table pairs a student's ID number with their homeroom. Which statement is true?", "Homeroom is a function of ID", ["ID is a function of homeroom", "Neither is a function", "Both are functions"], "Each student has one homeroom, but a homeroom has many students."),
  mc("Which statement about a ball thrown straight up is true?", "Height is a function of time", ["Time is a function of height", "Neither is a function", "Height is not defined at the top"], "At each instant the ball has one height; most heights occur twice."),
  num(S`$\{(k,\,3),\,(4,\,1),\,(6,\,3)\}$ is NOT a function for exactly one value of $k$. Enter it.`, 4, "k = 6 just repeats (6, 3); k = 4 clashes with (4, 1)."),
  tf(S`If two different inputs have the same output, the relation is not a function.`, false, "That is allowed: f(−2) = f(2) for y = x²."),
  num(S`For $x=(y-2)^2$, enter the larger output when $x=9$.`, 5, "y − 2 = ±3."),
  mc(S`The relation $\{(1,\,4),\,(2,\,5),\,(3,\,6)\}$ is reversed (swap $x$ and $y$). Is the reversed relation a function?`, "Yes", ["No", "Only if x > 0", "Cannot tell"], "{(4,1),(5,2),(6,3)} has distinct inputs."),
  mc(S`$\{(1,\,7),\,(2,\,7)\}$ is reversed. Is the reversed relation a function?`, "No", ["Yes", "Only for x = 7", "It is empty"], "(7, 1) and (7, 2): one input, two outputs."),
  fill(S`Solving $x=y^2-1$ for $y$ gives $y=\pm\sqrt{x+\square}$. The missing number is ____.`, ["1"], "y² = x + 1."),
  mc("Name the curve in the figure and say whether it passes the vertical-line test.", "a circle: not a function", ["a parabola: a function", "a line: a function", "an ellipse: a function"], "x = 0 meets it twice.", planeDoc({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(Math.max(0, 9 - x * x)), a: -3, b: 3, color: "blue" }, { f: (x) => -Math.sqrt(Math.max(0, 9 - x * x)), a: -3, b: 3, color: "blue" }] })),
  num(S`The domain of $\{(a,\,1),\,(3,\,1),\,(5,\,8)\}$ has only two elements and the relation is still a function. Enter $a$.`, 3, "a = 3 repeats the point (3, 1); a = 5 would give (5, 1) and (5, 8), a clash."),
  mc("Is the relation “person → their birthday” a function?", "Yes", ["No", "Only for leap years", "Only for adults"], "Each person has exactly one birthday."),
  mc("Is the relation “birthday → person born that day” a function?", "No", ["Yes", "Only in small groups", "Only for twins"], "Many people share a birthday."),
  tf(S`Every relation has a domain and a range, even if it is not a function.`, true, "Domain and range are defined for any relation."),
];

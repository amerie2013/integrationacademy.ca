// 2.1 What Is a Function? — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, mapDoc } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const TOPIC = "2.1 What Is a Function?";
export const Q = [
  num(S`How many values of $k$ make $\{(1,5),(2,7),(k,9),(k-1,11)\}$ NOT a function?`, 3, "k ∈ {1, 2} or k − 1 ∈ {1, 2}: k = 1, 2, 3."),
  num(S`For the relation $y^2=x^2+9$, how many values of $y$ correspond to each $x$?`, 2, "y = ±√(x² + 9), and x² + 9 > 0."),
  mc("For which relation is y a function of x?", S`$y^3=x$`, [S`$y^2=x$`, S`$y^4=x$`, S`$x^2+y^2=4$`], "Every real number has exactly one real cube root."),
  num(S`For how many integers $x$ does the vertical line meet $x^2+y^2=50$ exactly once?`, 0, "Only x = ±√50 give one point, and they are not integers."),
  num("The graph shows the function y = √(16 − x²). What is the width of its domain?", 8, "−4 ≤ x ≤ 4.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.sqrt(16 - x * x), a: -4, b: 4, color: "violet" }] })),
  tf("A function whose graph passes the horizontal line test is one-to-one.", true, "No output is shared."),
  ms("Which functions are many-to-one? Select all.", [S`$y=x^2$`, S`$y=|x|$`, S`$y=2x+1$`, S`$y=7$`], [0, 1, 3], "y = 2x + 1 is one-to-one."),
  num(S`For $y=x^2-6x$, how many inputs give the output $-9$?`, 1, "(x − 3)² = 0."),
  num(S`The graph shows $y=x^3-4x$ and the line $y=1$. How many inputs give the output 1?`, 3, "The line crosses the curve three times.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x ** 3 - 4 * x, color: "violet" }], lines: [{ m: 0, b: 1, color: "green", dash: true }] })),
  mc(S`The relation $x\mapsto x^2+1$ on $\mathbb R$ is best described as:`, "a many-to-one function", ["a one-to-one function", "a one-to-many relation", "not a function"], "x and −x give the same output."),
  tf(S`$x^2+y=5$ and $x+y^2=5$ both define $y$ as a function of $x$.`, false, "The second gives y = ±√(5 − x)."),
  num(S`The graph of $\frac{x^2}{9}+\frac{y^2}{4}=1$ is shown. What is the largest output of its upper-half function?`, 2, "At x = 0, y² = 4.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -3, ymax: 3 }, curves: [{ f: (x) => 2 * Math.sqrt(1 - x * x / 9), a: -3, b: 3, color: "violet" }, { f: (x) => -2 * Math.sqrt(1 - x * x / 9), a: -3, b: 3, color: "gray" }] })),
  num(S`How many of $y=2x$, $y=x^2$, $x=y^2$, $y=\sqrt x$, $x^2+y^2=1$ are functions of $x$?`, 3, "y = 2x, y = x² and y = √x."),
  mc(S`A function has domain $\{1,2,3\}$ and range $\{4\}$. It is:`, "many-to-one", ["one-to-one", "one-to-many", "not a function"], "All three inputs map to 4."),
  num("The mapping shows g(x) = x² on {−2, −1, 0, 1, 2}. How many different outputs are there?", 3, "0, 1 and 4.", mapDoc([[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]])),
  tf("A vertical line may miss the graph of a function completely.", true, "That x-value is simply outside the domain."),
  num(S`For the relation $y=\pm\sqrt{x-4}$, what is the smallest $x$ at which a vertical line meets it?`, 4, "x − 4 ≥ 0."),
  mc("The relation 'time → height of a ball thrown upwards' is:", "a many-to-one function", ["a one-to-one function", "a one-to-many relation", "not a function"], "Each time has one height, but most heights occur twice."),
  num(S`For $y=(x+2)^2$, two inputs give $y=9$. Find their sum.`, -4, "x = 1 and x = −5."),
  num(S`How many points of the relation $|y|=x$ have $x=3$?`, 2, "(3, 3) and (3, −3)."),
];

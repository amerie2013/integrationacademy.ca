// 1.4 Comparing Linear and Quadratic Relations — 20 easy + 20 medium (differences computed in code)
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;
const ys = (f, xs = [0, 1, 2, 3, 4]) => xs.map(f);
const show = (f, xs = [0, 1, 2, 3, 4]) => `$x=${xs.join(",\\,")}$: $y=${ys(f, xs).join(",\\,")}$`;
const d1 = (f, xs = [0, 1, 2, 3, 4]) => { const y = ys(f, xs); return y.slice(1).map((v, i) => v - y[i]); };
const d2 = (f, xs) => { const d = d1(f, xs); return d.slice(1).map((v, i) => v - d[i]); };

const L1 = (x) => 4 * x - 3, Q1 = (x) => x * x + 3 * x, Q2 = (x) => -2 * x * x + x + 5, L2 = (x) => -5 * x + 10, Q3 = (x) => 3 * x * x - 1;
export const E = [
  mc(S`Classify the relation: ${show(L1)}.`, "linear", ["quadratic", "neither", "cannot tell"], `First differences are all ${d1(L1)[0]}.`),
  mc(S`Classify the relation: ${show(Q1)}.`, "quadratic", ["linear", "neither", "cannot tell"], `Second differences are all ${d2(Q1)[0]}.`),
  mc(S`Classify the relation: $x=0,1,2,3$: $y=1,\,3,\,9,\,27$.`, "neither", ["linear", "quadratic", "cannot tell"], "Neither difference row is constant (ratio 3)."),
  num(S`Enter the first difference of ${show(L2)}.`, d1(L2)[0], "Subtract consecutive y-values."),
  num(S`Enter the second difference of ${show(Q3)}.`, d2(Q3)[0], "2a = 6."),
  num(S`Enter the second difference of ${show(Q2)}.`, d2(Q2)[0], "2a = −4."),
  tf("Constant first differences mean the relation is linear.", true, "The rate of change is constant."),
  tf("Constant second differences (not zero) mean the relation is quadratic.", true, "Second difference = 2a."),
  tf("A relation whose first differences are 2, 4, 6, 8 is linear.", false, "First differences change; second differences are constant (2): quadratic."),
  num(S`A quadratic table (step 1) has second difference $8$. Enter $a$.`, 4, "2a = 8."),
  num(S`A quadratic table (step 1) has second difference $-2$. Enter $a$.`, -1, "2a = −2."),
  mc(S`Which equation is quadratic?`, S`$y=5-x^2$`, [S`$y=5-x$`, S`$y=\frac{x}{2}+1$`, S`$y=3$`], "Highest power 2."),
  mc(S`Which equation is linear?`, S`$y=7x-2$`, [S`$y=x^2-2$`, S`$y=2x^2$`, S`$y=(x+1)^2$`], "Highest power 1."),
  fill("The change in y between consecutive rows of a table is called the first ____.", ["difference", "differences"], "First differences."),
  num(S`Linear table: $x=0,1,2$; $y=6,\,10,\,14$. Enter $y$ at $x=3$.`, 18, "Add the first difference 4."),
  num(S`Quadratic table: $x=0,1,2,3$; $y=0,\,1,\,4,\,9$. Enter $y$ at $x=4$.`, 16, "First differences 1, 3, 5, next 7."),
  mc("The graph shows a set of data points. Which relation fits?", "quadratic", ["linear", "neither", "constant"], "The points curve like a parabola.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 18 }, points: [0, 1, 2, 3, 4].map((x) => ({ x, y: x * x + 1, label: `(${x}, ${x * x + 1})`, color: "blue" })), step: { x: 1, y: 2 } })),
  mc("These five data points were measured in an experiment. Which type of relation fits them?", "linear", ["quadratic", "neither", "exponential"], "The points lie on a straight line.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 12 }, points: [0, 1, 2, 3, 4].map((x) => ({ x, y: 2 * x + 2, label: `(${x}, ${2 * x + 2})`, color: "blue" })), step: { x: 1, y: 1 } })),
  tf(S`$y=x(x+1)-x^2$ is quadratic.`, false, "It simplifies to y = x."),
  num(S`For $y=5x+1$, by how much does $y$ change when $x$ increases by $1$?`, 5, "The slope."),
];

const Q4 = (x) => x * x - 4 * x + 6, Q5 = (x) => -x * x + 2 * x + 3, Q6 = (x) => 0.5 * x * x;
export const M = [
  num(S`Enter $a$ for the quadratic ${show(Q4)} ($y=ax^2+bx+c$).`, 1, `Second difference ${d2(Q4)[0]} = 2a.`),
  num(S`Enter $c$ for the quadratic ${show(Q4)}.`, 6, "c = y(0)."),
  num(S`Enter $b$ for the quadratic ${show(Q4)}.`, -4, "y(1) = a + b + c: 3 = 1 + b + 6."),
  num(S`Enter $a$ for ${show(Q5)}.`, -1, "Second difference −2."),
  num(S`Enter $a$ for ${show(Q6)}.`, 0.5, "Second difference 1 = 2a.", null, 1e-9),
  num(S`A quadratic has $y=2,\,7,\,14,\,23$ at $x=0,1,2,3$. Enter $y$ at $x=4$.`, 34, "First differences 5, 7, 9, next 11."),
  num(S`At $x=0,2,4,6$ a quadratic takes $y=1,\,9,\,33,\,73$. Enter $a$.`, 2, "Second difference 16 = 2a(2)² = 8a."),
  mc(S`Sort and classify: $(2,\,9)$, $(0,\,1)$, $(3,\,13)$, $(1,\,5)$.`, "linear", ["quadratic", "neither", "cannot tell"], "Sorted: 1, 5, 9, 13 — first difference 4."),
  mc(S`Sort and classify: $(1,\,3)$, $(3,\,19)$, $(0,\,1)$, $(2,\,9)$.`, "quadratic", ["linear", "neither", "cannot tell"], "Sorted: 1, 3, 9, 19 — first 2, 6, 10; second 4, 4."),
  ms(S`Select every quadratic relation.`, [S`$y=(x-3)(x+1)$`, S`$y=(x+2)^2-x^2$`, S`$y=4-x^2$`, S`$y=x(2-x)+x^2$`, S`$y=2x^2-x$`], [0, 2, 4], "Expand: (x + 2)² − x² = 4x + 4 and x(2 − x) + x² = 2x are linear."),
  mc(S`Between $x=5$ and $x=6$, which grows more: $y=10x$ or $y=x^2$?`, S`$y=x^2$ (by 11)`, [S`$y=10x$ (by 10)`, "they grow equally", "neither grows"], "36 − 25 = 11 > 10."),
  num(S`The first difference of $y=x^2$ from $x=n$ to $x=n+1$ is $2n+1$. Enter it for $n=7$.`, 15, "64 − 49."),
  tf(S`For any quadratic with step 1, second difference $=2a$.`, true, "(a(x+2)² − 2a(x+1)² + ax²) simplifies to 2a."),
  num(S`A ball is filmed: heights at $t=0,1,2,3$ are $1,\,21,\,31,\,31$ m. Enter the second difference.`, -10, "First: 20, 10, 0; second: −10."),
  num(S`For the ball above (heights $1,\,21,\,31,\,31$), enter $a$.`, -5, "2a = −10."),
  mc("The data points in the figure come from a pattern. Which statement is true?", "second differences are constant", ["first differences are constant", "both rows are constant", "neither row is constant"], "The points 0, 2, 6, 12, 20 have first differences 2, 4, 6, 8.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 22 }, points: [0, 1, 2, 3, 4].map((x) => ({ x, y: x * x + x, label: `(${x}, ${x * x + x})`, color: "blue" })), step: { x: 1, y: 2 } })),
  mc("Which relation is shown by the graph?", "quadratic opening down", ["linear decreasing", "quadratic opening up", "neither"], "A parabola with a maximum.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => -((x - 1) ** 2) + 4, color: "violet" }] })),
  fill(S`If the $x$-values go up by $3$ each step, the second difference of $y=ax^2+bx+c$ is $2a\times\square$. The missing number is ____.`, ["9"], "2a(3)² = 18a."),
  num(S`Pattern: figure $n$ has $n^2+n$ dots. How many dots are in figure $6$?`, 42, "36 + 6."),
  num(S`A linear relation passes through $(0,\,-2)$ with first difference $3$ (step 1). Enter $y$ at $x=10$.`, 28, "y = 3x − 2."),
];

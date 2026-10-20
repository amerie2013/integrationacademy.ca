// MCR3U Worksheet 3.3 — Finite Differences and Quadratic Models (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const dots = (xs, f, color = "blue") => xs.map((x) => pt(x, f(x), false, color));
const EXAMPLES = [
  { title: "Quadratic from a table", q: S`$x$: $0,1,2,3,4$; $y$: $-1,2,9,20,35$. Find the equation.`,
    steps: [S`First differences $3,7,11,15$; second differences 4: $a=2$.`, S`$c=-1$; $f(1)=2+b-1=2\Rightarrow b=1$.`], ans: S`$f(x)=2x^2+x-1$` },
  { title: "Not quadratic", q: S`$x$: $0,1,2,3$; $y$: $1,3,9,27$. Is the relation quadratic?`,
    steps: [S`First differences $2,6,18$; second differences $4,12$ — not constant.`, "Each y is 3 times the previous: exponential."], ans: "no — exponential" },
  { title: "A linear table", q: S`$x$: $0,1,2,3,4$; $y$: $7,4,1,-2,-5$. Classify and find the equation.`,
    steps: [S`First differences all $-3$: linear.`, S`Slope $-3$, y-intercept 7.`], ans: S`linear, $y=-3x+7$` },
  { title: "Negative second differences", q: S`$x$: $0,1,2,3,4$; $y$: $6,5,0,-9,-22$. Find the quadratic.`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -24, ymax: 8 }, curves: [{ f: (x) => -2 * x * x + x + 6 }], points: dots([0, 1, 2, 3, 4], (x) => -2 * x * x + x + 6), step: { x: 1, y: 4 } }),
    steps: [S`First $-1,-5,-9,-13$; second $-4$: $a=-2$.`, S`$c=6$; $-2+b+6=5\Rightarrow b=1$.`], ans: S`$y=-2x^2+x+6$` },
  { title: "Negative x-values", q: S`$x$: $-2,-1,0,1,2$; $y$: $13,4,1,4,13$. Find the quadratic.`,
    steps: [S`First $-9,-3,3,9$; second 6: $a=3$.`, S`$c=y(0)=1$; $3+b+1=4\Rightarrow b=0$.`], ans: S`$y=3x^2+1$` },
  { title: "An x-step of 0.5", q: S`$x$: $0,0.5,1,1.5,2$; $y$: $1,1,3,7,13$. Find the quadratic.`,
    steps: [S`First $0,2,4,6$; second 2.`, S`$2ah^2=2$ with $h=0.5$: $0.5a=2$, $a=4$.`, S`$c=1$; $4+b+1=3\Rightarrow b=-2$.`], ans: S`$y=4x^2-2x+1$` },
  { title: "Three points", q: S`Find the quadratic through $(0,-1)$, $(1,2)$ and $(3,14)$.`,
    fig: F({ view: { xmin: -4, xmax: 4, ymin: -3, ymax: 16 }, curves: [{ f: (x) => x * x + 2 * x - 1 }], points: [pt(0, -1), pt(1, 2), pt(3, 14)], step: { x: 1, y: 2 } }),
    steps: [S`$c=-1$; $a+b=3$; $9a+3b=15\Rightarrow3a+b=5$.`, S`Subtract: $2a=2$, $a=1$, $b=2$.`], ans: S`$y=x^2+2x-1$` },
  { title: "A missing entry", q: S`A quadratic table has $x$: $0,1,2,3,4$ and $y$: $3,4,9,k,31$. Find $k$.`,
    steps: [S`First differences $1,5,\dots$; second difference 4.`, S`Next first differences 9 and 13: $k=9+9=18$, and $18+13=31$ checks.`], ans: S`$k=18$` },
  { title: "Modelling a launch", q: S`A ball's height (m) at $t=0,1,2,3$ s is $2, 27.1, 42.4, 47.9$. Find a model and when the ball is back at 2 m.`,
    fig: F({ view: { xmin: -0.5, xmax: 7, ymin: -5, ymax: 50 }, curves: [{ f: (t) => -4.9 * t * t + 30 * t + 2, a: 0, b: 6.4 }], points: dots([0, 1, 2, 3], (t) => -4.9 * t * t + 30 * t + 2), step: { x: 1, y: 5 }, xlabel: "t", ylabel: "h" }),
    steps: [S`First $25.1,15.3,5.5$; second $-9.8$: $a=-4.9$.`, S`$c=2$; $-4.9+b+2=27.1\Rightarrow b=30$.`, S`$-4.9t^2+30t=0\Rightarrow t=\frac{30}{4.9}\approx6.12$ s.`], ans: S`$h=-4.9t^2+30t+2$; about 6.12 s` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the second differences: $x$: $0,1,2,3$; $y$: $0,3,10,21$.`, recap: "Second differences.", ans: "4" },
  { level: 1, q: S`Classify: $x$: $0,1,2,3$; $y$: $2,5,8,11$.`, recap: "Classify.", ans: S`linear (first differences 3)` },
  { level: 1, q: S`Classify: $x$: $0,1,2,3$; $y$: $1,4,16,64$.`, recap: "Classify.", ans: "exponential (ratio 4)" },
  { level: 2, q: S`$x$: $0,1,2,3$; $y$: $5,2,3,8$. Find the quadratic.`, recap: "From a table.", ans: S`$y=2x^2-5x+5$` },
  { level: 2, q: S`$x$: $1,2,3,4,5$; $y$: $0,5,12,21,32$. Find the quadratic.`, recap: "No x = 0.", ans: S`$y=x^2+2x-3$` },
  { level: 2, q: S`Find the quadratic through $(-1,0)$, $(0,-3)$ and $(2,9)$.`, recap: "Three points.", ans: S`$y=3x^2-3$` },
  { level: 2, q: S`A quadratic table has $x$: $0,1,2,3,4$ and $y$: $10,7,6,7,k$. Find $k$.`, recap: "Missing entry.", ans: S`$k=10$` },
  { level: 2, q: "The points shown come from a quadratic. Find its equation.", recap: "From plotted points.", ans: S`$y=x^2-4x+4$`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, points: [[0, 4], [1, 1], [2, 0], [3, 1], [4, 4]].map(([x, y]) => pt(x, y)) }) },
  { level: 3, space: 5, q: S`Find the quadratic through $(-2,11)$, $(0,-1)$ and $(1,-1)$, and its vertex.`, recap: "Three points.", ans: S`$2x^2-2x-1$; $(0.5,-1.5)$` },
  { level: 3, space: 5, q: S`A table uses $x=0,2,4,6$ with $y=3,11,35,75$. Find the quadratic.`, recap: "Step of 2.", ans: S`second difference $16=2a(2^2)$: $a=2$; $y=2x^2+3$` },
  { level: 3, space: 5, q: S`Show that $x$: $1,2,3,4,5,6$; $y$: $2,5,10,17,26,37$ is quadratic, find its equation, and find the x-value that gives $y=101$.`, recap: "Predict.", ans: S`$y=x^2+1$; $x=10$` },
  { level: 3, space: 5, q: "Dot patterns 1 to 5 use 1, 5, 12, 22 and 35 dots. Find a formula for pattern n and the number of dots in pattern 10.", recap: "Dot pattern.", ans: S`$P=1.5n^2-0.5n$; 145` },
  { level: 3, space: 5, q: S`A ball's height (m) at $t=0,1,2,3$ s is $1.5, 18.6, 25.9, 23.4$. Find a quadratic model and its maximum height.`, recap: "Model and maximum.", ans: S`$h=-4.9t^2+22t+1.5$; about 26.19 m`,
    fig: F({ view: { xmin: -0.5, xmax: 5, ymin: -2, ymax: 30 }, points: [[0, 1.5], [1, 18.6], [2, 25.9], [3, 23.4]].map(([x, y]) => pt(x, y)), step: { x: 1, y: 5 }, xlabel: "t", ylabel: "h" }) },
];

export const WS = {
  code: "3.3",
  title: "Finite Differences and Quadratic Models",
  bigideas: S`With x-values in equal steps, constant first differences mean linear, constant second differences mean quadratic, and a constant ratio means exponential. For $y=ax^2+bx+c$ with x-step $h$, every second difference is $2ah^2$ (just $2a$ when $h=1$). From a table: $a$ from the second difference, $c$ at $x=0$, $b$ from one more point; from three points, solve three equations.`,
  goals: ["Calculate first and second differences.", "Classify a relation from a table.", "Find a quadratic from a table or three points.", "Use a quadratic model to predict."],
  curriculum: "A1.2, A2.3",
  vocab: [["First differences", "changes in y between rows"], ["Second differences", "changes in the first differences"], ["x-step", "the constant gap $h$ between x-values"]],
  hook: "Give groups three unlabelled tables (linear, quadratic, exponential) and ask them to sort them by how the numbers grow before introducing differences.",
  concepts: [
    ["1. Classify by differences", S`Linear: first differences constant. Quadratic: second differences constant. Exponential: constant ratio. ${F({ view: { xmin: -0.5, xmax: 4.5, ymin: -1, ymax: 17 }, curves: [{ f: (x) => 2 * x + 1, color: "green" }, { f: (x) => x * x + 1 }, { f: (x) => 2 ** x, color: "amber" }], step: { x: 1, y: 2 } }, 5, "linear, quadratic and exponential growth")}`],
    [S`2. Why $2ah^2$`, S`$f(x+h)-f(x)=2ah\,x+ah^2+bh$ is linear in $x$ with slope $2ah$, so it grows by $2ah\cdot h=2ah^2$ per step.`],
    ["3. Table to equation", S`$a=\frac{\text{second difference}}{2h^2}$; extend backwards to $x=0$ for $c$; substitute one point for $b$. With unequal steps, use three points.`],
  ],
  tips: ["Check the x-steps are equal.", "Always subtract next minus previous.", "Divide by 2h², not 2, when h is not 1.", "Extend the table backwards to reach x = 0.", "Check the equation with the last table entry."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

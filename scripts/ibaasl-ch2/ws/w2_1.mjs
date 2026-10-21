// IB AA SL Worksheet 2.1 — What Is a Function? (teacher edition)
import { F, pt, mapT } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Ordered pairs", q: S`Is $\{(0,2),(1,3),(2,2),(3,5)\}$ a function? Describe the mapping.`,
    fig: mapT([[0, 2], [1, 3], [2, 2], [3, 5]]),
    steps: [S`Each input appears once.`, S`The output 2 is shared by inputs 0 and 2.`], ans: "a function; many-to-one" },
  { title: "A repeated input", q: S`Is $\{(4,1),(4,-1),(9,3)\}$ a function?`,
    steps: [S`The input 4 has two outputs, 1 and $-1$.`], ans: "not a function (one-to-many)" },
  { title: "One-to-one", q: S`Draw a mapping for $y=x+6$ with inputs $1, 2, 3, 4$ and describe it.`,
    fig: mapT([[1, 7], [2, 8], [3, 9], [4, 10]]),
    steps: [S`Outputs $7, 8, 9, 10$: all different.`], ans: "one-to-one function" },
  { title: "A constant table", q: S`$x$: $1, 2, 3, 4$; $y$: $5, 5, 5, 5$. Is this a function?`,
    steps: [S`Every input has exactly one output (all equal to 5).`], ans: "yes, many-to-one" },
  { title: "Two graphs", q: S`Which of $y=|x-1|$ and $x=|y|$ is a function?`,
    fig: F({ view: { xmin: -4, xmax: 5, ymin: -4, ymax: 5 }, curves: [{ f: (x) => Math.abs(x - 1) }, { f: (x) => x, a: 0, color: "red" }, { f: (x) => -x, a: 0, color: "red" }] }),
    steps: [S`$y=|x-1|$ (violet) passes the vertical line test.`, S`$x=|y|$ (red) gives $y=\pm x$ for $x>0$: it fails.`], ans: S`only $y=|x-1|$` },
  { title: "A linear equation", q: S`Does $2x+3y=12$ define $y$ as a function of $x$?`,
    steps: [S`$y=\frac{12-2x}{3}$: one $y$ for each $x$.`], ans: "yes" },
  { title: "A circle", q: S`Does $x^2+y^2=36$ define $y$ as a function of $x$?`,
    steps: [S`$x=0$ gives $y^2=36$, so $y=\pm6$.`], ans: "no" },
  { title: "A cubic", q: S`Classify the mapping $y=x^3$.`,
    steps: [S`Different inputs always give different cubes.`], ans: "one-to-one function" },
  { title: "A model", q: S`Tickets cost 12 each, so $C=12n$ for $n$ tickets. Is $C$ a function of $n$? Is $n$ a function of $C$?`,
    steps: [S`Each $n$ gives one cost.`, S`Each possible cost comes from one $n$ ($n=C/12$).`], ans: "both" },
];

const PROBLEMS = [
  { level: 1, q: S`Is $\{(1,2),(2,4),(3,6)\}$ a function? Describe the mapping.`, recap: "Pairs.", ans: "yes, one-to-one" },
  { level: 1, q: S`Is $\{(2,1),(2,3)\}$ a function?`, recap: "Repeated input.", ans: "no" },
  { level: 1, q: S`Does $x=y^2$ define $y$ as a function of $x$?`, recap: "Equation.", ans: S`no: $y=\pm\sqrt x$` },
  { level: 2, q: S`Does $x+y^2=4$ define $y$ as a function of $x$? Give a value of $x$ to justify.`, recap: "Equation.", ans: S`no: $x=0$ gives $y=\pm2$` },
  { level: 2, q: S`$x$: $1, 2, 2, 3$; $y$: $4, 5, 6, 7$. Is this a function?`, recap: "Table.", ans: "no (x = 2 repeats)" },
  { level: 2, q: "Use the vertical line test on the graph shown.", recap: "Graph.", ans: "not a function",
    fig: F({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(9 - x * x), a: -3, b: 3 }, { f: (x) => -Math.sqrt(9 - x * x), a: -3, b: 3 }] }) },
  { level: 2, q: S`Classify the mapping $y=x^2+1$.`, recap: "Mapping type.", ans: "many-to-one function" },
  { level: 2, q: S`Classify the mapping $y=4-x$.`, recap: "Mapping type.", ans: "one-to-one function" },
  { level: 3, space: 4, q: S`For which values of $k$ is $\{(k,1),(3,2),(5,1)\}$ a function?`, recap: "Unknown input.", ans: S`all $k\ne3$ ($k=5$ repeats the same pair)` },
  { level: 3, space: 4, q: S`Show that $y^2=x^2$ is not a function, but $y=|x|$ is.`, recap: "Two relations.", ans: S`$y=\pm x$ gives two outputs; $|x|$ gives one` },
  { level: 3, space: 5, q: S`Split $x^2+4y^2=16$ into two functions and give their domain.`, recap: "Split an ellipse.", ans: S`$y=\pm\frac12\sqrt{16-x^2}$, $-4\le x\le4$`,
    fig: F({ view: { xmin: -5, xmax: 5, ymin: -3, ymax: 3 }, curves: [{ f: (x) => 0.5 * Math.sqrt(16 - x * x), a: -4, b: 4 }, { f: (x) => -0.5 * Math.sqrt(16 - x * x), a: -4, b: 4, color: "red" }] }) },
  { level: 3, space: 4, q: "A ball is thrown up and caught. Is height a function of time? Is time a function of height? Explain.", recap: "Model.", ans: "height(time) yes; time(height) no — most heights occur twice" },
  { level: 3, space: 4, q: S`For which $x$ does the vertical line meet $y^2=x+1$ exactly twice?`, recap: "Count intersections.", ans: S`$x>-1$` },
];

export const WS = {
  code: "2.1",
  title: "What Is a Function?",
  bigideas: S`A function assigns exactly one output to each input. One-to-one and many-to-one mappings are functions; one-to-many mappings are not. On a graph, the vertical line test checks this; in an equation, a $\pm$ when solving for $y$ usually means it is not a function.`,
  goals: ["Recognise functions in pairs, tables, mappings, graphs and equations.", "Classify mappings.", "Use the vertical line test.", "Use functions as models."],
  curriculum: "SL 2.2",
  vocab: [["Function", "each input has exactly one output"], ["Many-to-one", "inputs may share an output"], ["Vertical line test", "no vertical line meets the graph twice"]],
  hook: "Ask: is 'student → birthday' a function? Is 'birthday → student'? Use the answers to define one-to-one and many-to-one.",
  concepts: [
    ["1. Mapping diagrams", S`${mapT([[-2, 4], [-1, 1], [1, 1], [2, 4]])} Squaring is many-to-one: still a function.`],
    ["2. Vertical line test", S`If a vertical line $x=c$ meets the graph twice, the input $c$ has two outputs: not a function.`],
    ["3. Equations", S`Solve for $y$: a single expression means a function; $y=\pm\dots$ means not.`],
  ],
  tips: ["Many-to-one is allowed.", "A repeated input with different outputs fails.", "Vertical lines that miss are fine.", "Look for plus-or-minus when solving for y.", "Check models in both directions."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

// MCR3U Worksheet 1.1 — Relations and Functions (teacher edition)
import { F, gridT, pt, sideways, circ, mapT } from "./figT.mjs";

const V6 = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };

const EXAMPLES = [
  { title: "Ordered pairs (function)", q: String.raw`Is $\{(-2,3),(0,3),(4,-1),(5,6)\}$ a function? Give the domain and range.`,
    steps: [String.raw`The inputs $-2,0,4,5$ are all different.`, String.raw`$-2$ and $0$ share the output $3$ (many-to-one is allowed).`], ans: String.raw`function; $D=\{-2,0,4,5\}$, $R=\{-1,3,6\}$` },
  { title: "Ordered pairs (not a function)", q: String.raw`Is $\{(1,4),(2,6),(1,-3),(7,0)\}$ a function?`,
    steps: [String.raw`The input $1$ appears with outputs $4$ and $-3$.`], ans: "not a function" },
  { title: "Mapping diagram", q: String.raw`Is the relation in the mapping diagram a function? Is it one-to-one?`,
    fig: mapT([[1, 3], [2, 3], [5, 8]]),
    steps: ["Exactly one arrow leaves each input.", "Two inputs (1 and 2) point to the same output 3."], ans: "a many-to-one function" },
  { title: "A table of values", q: String.raw`$x$: $3,3,4,6$; $y$: $1,5,2,2$. Is it a function?`,
    steps: [String.raw`$x=3$ has two outputs, $1$ and $5$.`], ans: "not a function" },
  { title: "Vertical-line test: a circle", q: String.raw`Use the vertical-line test on $x^2+y^2=16$.`,
    fig: F({ view: V6, curves: circ(4), vlines: [{ x: 2, color: "amber", dash: true }], points: [pt(2, Math.sqrt(12), false), pt(2, -Math.sqrt(12), false)] }),
    steps: [String.raw`The line $x=2$ meets the circle where $y^2=12$: $y=\pm\sqrt{12}$.`], ans: "not a function (two points on x = 2)" },
  { title: "Vertical-line test: a parabola", q: String.raw`Is $y=x^2-2x-3$ a function? One-to-one or many-to-one?`,
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 2 * x - 3 }], lines: [{ m: 0, b: 0, color: "amber", dash: true }], points: [pt(-1, 0), pt(3, 0)] }),
    steps: ["Every vertical line meets it once.", String.raw`$x=-1$ and $x=3$ both give $0$.`], ans: "a many-to-one function" },
  { title: "An equation with ±", q: String.raw`Does $x-y^2=1$ define $y$ as a function of $x$?`,
    steps: [String.raw`$y^2=x-1$, so $y=\pm\sqrt{x-1}$.`, String.raw`At $x=5$: $y=2$ or $y=-2$.`], ans: "no" },
  { title: "An absolute-value equation", q: String.raw`Does $y=|x-2|+1$ define a function?`,
    steps: [String.raw`For each $x$ the expression has one value.`, String.raw`$x=0$ and $x=4$ both give $3$.`], ans: "yes, many-to-one" },
  { title: "Relations in words", q: "Student number → student, and grade level → student: which are functions?",
    steps: ["Each student number belongs to one student (one-to-one).", "A grade level has many students, so one input has many outputs."], ans: "the first is a function; the second is not" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Is $\{(0,1),(1,3),(2,5),(3,7)\}$ a function? One-to-one or many-to-one?`, recap: "Ordered pairs.", ans: "function, one-to-one" },
  { level: 1, q: String.raw`State the domain and range of $\{(-3,2),(-1,2),(4,0),(6,-5)\}$.`, recap: "Domain and range.", ans: String.raw`$D=\{-3,-1,4,6\}$, $R=\{-5,0,2\}$` },
  { level: 1, q: "Apply the vertical-line test to the graph. Is it a function?", recap: "Vertical-line test.", ans: String.raw`no — e.g. $x=1$ meets it at $y=\pm2$`,
    fig: F({ view: V6, curves: sideways(-3, 0) }) },
  { level: 2, q: String.raw`Which define $y$ as a function of $x$? (a) $y=4-3x$ (b) $x^2+y=9$ (c) $x=y^2+2$ (d) $y^2=x^2$`, recap: "Which are functions?", ans: "(a) and (b)" },
  { level: 2, q: "Is the relation in the mapping diagram a function? Explain.", recap: "Mapping diagram.", ans: String.raw`no — the input 3 maps to 9 and to $-9$`,
    fig: mapT([[-2, 4], [2, 4], [3, 9], [3, -9]]) },
  { level: 2, q: String.raw`For $x^2+y^2=169$, find all $y$-values when $x=5$. What does this show?`, recap: "Circle.", ans: String.raw`$y=\pm12$: not a function` },
  { level: 2, q: String.raw`The graph shows $y=|x+1|-2$. Is it a function? One-to-one or many-to-one? Give evidence.`, recap: "V-shape.", ans: String.raw`function; many-to-one ($x=-3$ and $x=1$ both give $0$)`,
    fig: F({ view: V6, curves: [{ f: (x) => Math.abs(x + 1) - 2 }], points: [pt(-3, 0), pt(1, 0)] }) },
  { level: 2, q: "Is “each person → their biological mother” a function? Is “each mother → her child”?", recap: "Words.", ans: "yes; no (a mother may have several children)" },
  { level: 3, space: 5, q: String.raw`For which values of $k$ does the line $x=k$ meet $x=2(y-1)^2-8$ exactly once, twice, never? Sketch the relation.`, recap: "Counting intersections.", ans: String.raw`vertex $(-8,1)$: once at $k=-8$, twice for $k>-8$, never for $k<-8$`,
    fig: gridT({ xmin: -10, xmax: 4, ymin: -5, ymax: 7 }) },
  { level: 3, space: 5, q: String.raw`For which real numbers $b$ is $\{(3,5),(b,1),(-2,b),(b^2,4)\}$ a function?`, recap: "Parameter in the pairs.", ans: String.raw`all $b$ except $-2,0,1,3,\pm\sqrt3$` },
  { level: 3, space: 5, q: String.raw`Show that $x^2+y^2-6x=16$ is not a function by completing the square. Then write the equation of its upper half as a function.`, recap: "Completing the square.", ans: String.raw`$(x-3)^2+y^2=25$; at $x=3$, $y=\pm5$; upper half $y=\sqrt{25-(x-3)^2}$` },
  { level: 3, space: 4, q: "A vending machine sends each button to a snack. Explain why button → snack must be a function. Can snack → button fail to be a function? What would that mean?", recap: "Vending machine.", ans: "one button must give one snack; snack → button fails if two buttons sell the same snack (many-to-one is fine for buttons)" },
  { level: 3, space: 5, q: String.raw`A relation is made of all points $(t^2,\ 2t)$ for real $t$. Is $y$ a function of $x$? Find an equation linking $x$ and $y$.`, recap: "Points from t.", ans: String.raw`no: $t=\pm1$ give $(1,2)$ and $(1,-2)$; $y^2=4x$` },
];

export const WS = {
  code: "1.1",
  title: "Relations and Functions",
  bigideas: String.raw`A relation is any set of ordered pairs. A function is a relation in which every input has exactly one output. Test ordered pairs and mapping diagrams for repeated inputs, graphs with the vertical-line test, and equations by solving for $y$ (a $\pm$ means two outputs). A function can be one-to-one or many-to-one.`,
  goals: ["Distinguish relations from functions.", "Use ordered pairs, mapping diagrams, graphs, equations and words.", "Apply the vertical-line test.", "Classify one-to-one and many-to-one functions."],
  curriculum: "A1.1",
  vocab: [["Relation", "a set of ordered pairs"], ["Function", "each input has exactly one output"], ["Domain / range", "set of inputs / set of outputs"], ["Many-to-one", "different inputs share an output"]],
  hook: String.raw`Ask the class: “If I tell you a student's height, can you tell me their name? If I tell you a name, can you tell me the height?” Use the two answers to define a function.`,
  concepts: [
    ["1. Representations", String.raw`Ordered pairs, mapping diagrams, tables, graphs, equations and words can all show a relation. In every one, look for an input with two outputs.
${mapT([[-1, 2], [0, 5], [4, 2]], 4.5)}`],
    ["2. The vertical-line test", String.raw`A vertical line is one input. If some vertical line meets the graph twice, that input has two outputs.
${F({ view: V6, curves: circ(3, 0, 1), vlines: [{ x: 1, color: "amber", dash: true }] }, 5.5)}`],
    ["3. Equations", String.raw`Solve for $y$. $y=x^2-4$ is a function; $x=y^2-4$ gives $y=\pm\sqrt{x+4}$ and is not.`],
  ],
  tips: ["A repeated output is fine; a repeated input with a new output is not.", "Use vertical, not horizontal, lines.", "A vertical line itself is not a function.", "Solve for y before deciding about an equation.", "Check the whole graph, including the ends."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

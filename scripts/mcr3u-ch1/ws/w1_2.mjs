// MCR3U Worksheet 1.2 — Function Notation (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Evaluating at numbers", q: String.raw`For $f(x)=4x^2-x+2$, find $f(-3)$ and $f(\tfrac12)$.`,
    steps: [String.raw`$f(-3)=4(9)+3+2=41$.`, String.raw`$f(\tfrac12)=4(\tfrac14)-\tfrac12+2=2.5$.`], ans: String.raw`$41$ and $2.5$` },
  { title: "Evaluating at expressions", q: String.raw`For $g(x)=-3x+8$, find $g(2k)$ and $g(k-1)$.`,
    steps: [String.raw`$g(2k)=-6k+8$.`, String.raw`$g(k-1)=-3k+3+8=-3k+11$.`], ans: String.raw`$-6k+8$; $-3k+11$` },
  { title: "Substituting into a quadratic", q: String.raw`For $h(x)=x^2+3x$, find and simplify $h(a+2)$.`,
    steps: [String.raw`$(a+2)^2+3(a+2)=a^2+4a+4+3a+6$.`], ans: String.raw`$a^2+7a+10$` },
  { title: "Solving f(x) = v", q: String.raw`For $f(x)=x^2-5x+10$, solve $f(x)=4$.`,
    fig: F({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 12 }, curves: [{ f: (x) => x * x - 5 * x + 10 }], lines: [{ m: 0, b: 4, color: "amber", dash: true }], points: [pt(2, 4), pt(3, 4)], step: { x: 1, y: 2 } }),
    steps: [String.raw`$x^2-5x+6=0$.`, String.raw`$(x-2)(x-3)=0$.`], ans: String.raw`$x=2$ or $x=3$` },
  { title: "Solving a linear equation", q: String.raw`For $g(x)=2x-9$, find $x$ when $g(x)=-1$.`,
    steps: [String.raw`$2x-9=-1\Rightarrow2x=8$.`], ans: "$x=4$" },
  { title: "Reading a graph", q: String.raw`The graph shows $y=f(x)$. Find $f(4)$, $f(-1)$, and solve $f(x)=1$.`,
    fig: F({ view: { xmin: -5, xmax: 7, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.abs(x - 1) - 3 }], lines: [{ m: 0, b: 1, color: "amber", dash: true }], points: [pt(4, 0), pt(-1, -1), pt(-3, 1, false), pt(5, 1, false)] }),
    steps: [String.raw`Above $x=4$ the height is $0$; above $x=-1$ it is $-1$.`, String.raw`Height $1$ is reached at $x=-3$ and $x=5$.`], ans: String.raw`$f(4)=0$, $f(-1)=-1$; $x=-3$ or $x=5$` },
  { title: "Reading a table", q: String.raw`$x$: $-2,0,3,5$; $f(x)$: $7,1,-2,4$. Find $f(3)+f(-2)$ and solve $f(x)=1$.`,
    steps: [String.raw`$f(3)+f(-2)=-2+7=5$.`, String.raw`The output 1 appears at $x=0$.`], ans: String.raw`$5$; $x=0$` },
  { title: "One function inside another", q: String.raw`$f(x)=2x+1$ and $g(x)=x^2$. Find $f(g(3))$ and $g(f(3))$.`,
    steps: [String.raw`$g(3)=9$, so $f(9)=19$.`, String.raw`$f(3)=7$, so $g(7)=49$.`], ans: String.raw`$19$ and $49$ — the order matters` },
  { title: "In context", q: String.raw`A bus is $d(t)=80t+15$ km from the depot after $t$ hours. Find $d(2.5)$ and when the bus is 335 km away.`,
    steps: [String.raw`$d(2.5)=200+15=215$ km.`, String.raw`$80t+15=335\Rightarrow t=4$.`], ans: "215 km; after 4 h" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`For $f(x)=5-2x^2$, find $f(-2)$.`, recap: "Evaluate.", ans: "$-3$" },
  { level: 1, q: String.raw`For $g(x)=3x-4$, find $g(0)$ and $g(-5)$.`, recap: "Evaluate.", ans: String.raw`$-4$; $-19$` },
  { level: 1, q: String.raw`Use the graph to find $f(0)$ and $f(3)$.`, recap: "Read a graph.", ans: String.raw`$f(0)=3$, $f(3)=0$`,
    fig: F({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, curves: [{ f: (x) => (x - 2) ** 2 - 1 }] }) },
  { level: 2, q: String.raw`For $f(x)=x^2-x$, find and simplify $f(a+1)$.`, recap: "Substitute an expression.", ans: String.raw`$a^2+a$` },
  { level: 2, q: String.raw`For $f(x)=x^2+4x$, solve $f(x)=12$.`, recap: "Solve f(x) = 12.", ans: String.raw`$x=2$ or $x=-6$` },
  { level: 2, q: String.raw`For $f(x)=3x-7$, find $x$ so that $f(x)=f(2)+9$.`, recap: "Solve with a value.", ans: "$x=5$" },
  { level: 2, q: String.raw`For $p(n)=2n^2-3n$, find $p(3)-p(-1)$.`, recap: "Combine values.", ans: "$9-5=4$" },
  { level: 2, q: String.raw`A taxi charges $C(d)=3.5+1.75d$ dollars. Find $C(12)$, and the distance for a 38.50-dollar fare.`, recap: "Taxi.", ans: String.raw`$24.50$ dollars; $20$ km` },
  { level: 3, space: 5, q: String.raw`For $f(x)=2x^2-5x+1$, simplify $f(x+1)-f(x)$ and use it to find $f(4)-f(3)$.`, recap: "Difference of outputs.", ans: String.raw`$4x-3$; at $x=3$: $9$` },
  { level: 3, space: 5, q: String.raw`$f(x)=ax^2+b$ with $f(1)=5$ and $f(3)=21$. Find $a$, $b$ and $f(-2)$.`, recap: "Find a and b.", ans: String.raw`$a=2$, $b=3$; $f(-2)=11$` },
  { level: 3, space: 4, q: String.raw`For which $k$ does $f(x)=x^2-8x+k$ have exactly one input with $f(x)=0$?`, recap: "One zero.", ans: String.raw`$f(x)=(x-4)^2+k-16$: $k=16$` },
  { level: 3, space: 5, q: String.raw`For $f(x)=\sqrt{x+5}$, solve $f(f(x))=2$. Explain the result.`, recap: "f(f(x)) = 2.", ans: String.raw`$\sqrt{x+5}+5=4\Rightarrow\sqrt{x+5}=-1$: no solution` },
  { level: 3, space: 5, q: String.raw`A ball's height is $h(t)=-4.9t^2+19.6t+2$ m. Find $h(2)$, solve $h(t)=2$, and explain both answers.`, recap: "Ball.", ans: String.raw`$h(2)=21.6$ m (the top); $t=0$ or $t=4$: back at launch height after 4 s`,
    fig: gridT({ xmin: 0, xmax: 5, ymin: 0, ymax: 25 }, { x: 1, y: 5 }) },
];

export const WS = {
  code: "1.2",
  title: "Function Notation",
  bigideas: String.raw`$f(x)$ is the output of the function $f$ at input $x$. Evaluating replaces every $x$ by a number or an expression in brackets. Solving $f(x)=v$ works backwards to every input that gives $v$ — there may be several or none. On a graph, $f(a)$ is read vertically and $f(x)=v$ horizontally.`,
  goals: ["Evaluate f(a) for numbers and expressions.", "Solve f(x) = v.", "Read function values from graphs and tables.", "Interpret notation in contexts."],
  curriculum: "A1.2",
  vocab: [["$f(x)$", "the output at input $x$"], ["Argument", "the expression inside the brackets"], ["$f(g(x))$", "apply $g$ first, then $f$"]],
  hook: String.raw`Write $f(\square)=\square^2+1$ on the board and ask students to put different things in the box: $3$, $-3$, $a$, $a+1$. Then ask: “Which inputs give 10?”`,
  concepts: [
    ["1. Evaluate", String.raw`$f(x)=x^2-2x$: $f(-1)=(-1)^2-2(-1)=3$; $f(a+1)=(a+1)^2-2(a+1)=a^2-1$.`],
    ["2. Solve", String.raw`$f(x)=8$: $x^2-2x-8=0\Rightarrow x=4$ or $x=-2$.
${F({ view: { xmin: -4, xmax: 6, ymin: -2, ymax: 10 }, curves: [{ f: (x) => x * x - 2 * x }], lines: [{ m: 0, b: 8, color: "amber", dash: true }], points: [pt(-2, 8), pt(4, 8)], step: { x: 1, y: 2 } }, 5.5)}`],
    ["3. Context", String.raw`For $C(m)=20+0.15m$, $C(100)=35$ means 100 minutes cost 35 dollars.`],
  ],
  tips: ["Brackets around every substituted value.", "f(a + 1) ≠ f(a) + 1.", "f(0) is the y-intercept; f(x) = 0 gives the zeros.", "Check solutions by substituting back.", "f(g(x)) and g(f(x)) are usually different."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

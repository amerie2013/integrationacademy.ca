// IB AA SL Worksheet 2.2 — Function Notation (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Evaluating", q: S`For $f(x)=4-x^2$, find $f(3)$ and $f(-2)$.`,
    steps: [S`$f(3)=4-9=-5$.`, S`$f(-2)=4-4=0$.`], ans: S`$-5$ and $0$` },
  { title: "Another letter", q: S`For $g(t)=2t^3-t$, find $g(2)$ and $g(-1)$.`,
    steps: [S`$g(2)=16-2=14$.`, S`$g(-1)=-2+1=-1$.`], ans: S`$14$ and $-1$` },
  { title: "An expression as input", q: S`For $f(x)=x^2-5x$, find $f(x+2)$.`,
    steps: [S`$(x+2)^2-5(x+2)=x^2+4x+4-5x-10$.`], ans: S`$x^2-x-6$` },
  { title: "f(2x) and 2f(x)", q: S`For $f(x)=x^2+1$, compare $f(2x)$ and $2f(x)$.`,
    steps: [S`$f(2x)=4x^2+1$.`, S`$2f(x)=2x^2+2$.`], ans: "different functions" },
  { title: "Solving f(x) = k", q: S`For $f(x)=x^2+2x$, solve $f(x)=15$.`,
    steps: [S`$x^2+2x-15=0\Rightarrow(x+5)(x-3)=0$.`], ans: S`$x=3$ or $x=-5$` },
  { title: "Reading a graph", q: S`The graph shows $f(x)=-x^2+4x$. Find $f(1)$ and solve $f(x)=4$.`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 5 }, curves: [{ f: (x) => -x * x + 4 * x }], lines: [{ m: 0, b: 4, color: "green", dash: true }], points: [pt(1, 3), pt(2, 4, null, "green")] }),
    steps: [S`Height above $x=1$: 3.`, S`$y=4$ touches the curve only at the vertex $x=2$.`], ans: S`$f(1)=3$; $x=2$` },
  { title: "Mapping notation", q: S`$f:x\mapsto\sqrt{3x+1}$. Find $f(5)$.`,
    steps: [S`$\sqrt{16}=4$.`], ans: "4" },
  { title: "A model", q: S`A tank holds $V(t)=2000-150t$ litres after $t$ minutes. Find $V(4)$ and when the tank is empty.`,
    steps: [S`$V(4)=2000-600=1400$ L.`, S`$2000-150t=0\Rightarrow t\approx13.33$ min.`], ans: S`1400 L; about 13.33 min` },
  { title: "An exponential", q: S`For $f(x)=2^x$, find $f(3)+f(0)$.`,
    steps: [S`$8+1$.`], ans: "9" },
];

const PROBLEMS = [
  { level: 1, q: S`For $f(x)=7x-2$, find $f(3)$.`, recap: "Evaluate.", ans: "19" },
  { level: 1, q: S`For $g(x)=x^2+x$, find $g(-4)$.`, recap: "Evaluate.", ans: "12" },
  { level: 1, q: S`For $h(x)=\frac{12}{x}$, find $h(3)$.`, recap: "Evaluate.", ans: "4" },
  { level: 2, q: S`For $f(x)=2x+5$, solve $f(x)=1$.`, recap: "Solve.", ans: S`$x=-2$` },
  { level: 2, q: S`For $f(x)=x^2-4x$, solve $f(x)=-4$.`, recap: "Solve.", ans: S`$x=2$` },
  { level: 2, q: S`For $f(x)=x^2$, simplify $f(a+3)$.`, recap: "Expression input.", ans: S`$a^2+6a+9$` },
  { level: 2, q: S`For $f(x)=5x-1$, find $f(2)+f(-2)$.`, recap: "Combine values.", ans: S`$9+(-11)=-2$` },
  { level: 2, q: S`The graph shows $y=f(x)=x^2-4$. Find $f(3)$ and solve $f(x)=0$.`, recap: "Graph.", ans: S`$5$; $x=\pm2$`,
    fig: F({ view: { xmin: -4, xmax: 4, ymin: -5, ymax: 7 }, curves: [{ f: (x) => x * x - 4 }], points: [pt(3, 5), pt(-2, 0), pt(2, 0)] }) },
  { level: 3, space: 4, q: S`$f(x)=ax^2+3$ and $f(2)=23$. Find $a$.`, recap: "Unknown coefficient.", ans: S`$a=5$` },
  { level: 3, space: 5, q: S`For $f(x)=x^2-3x+2$, show that $f(x+1)=x^2-x$, and solve $f(x)=f(x+1)$.`, recap: "Shifted input.", ans: S`$x=1$` },
  { level: 3, space: 4, q: S`For $f(x)=\frac1{x-1}$, solve $f(x)=4$.`, recap: "Rational equation.", ans: S`$x=1.25$` },
  { level: 3, space: 5, q: S`A ball's height is $h(t)=40t-5t^2$ m. When is it 60 m high? Explain the two answers.`, recap: "Model.", ans: S`$t=2$ (rising) and $t=6$ (falling)`,
    fig: F({ view: { xmin: -0.5, xmax: 9, ymin: -5, ymax: 85 }, curves: [{ f: (t) => 40 * t - 5 * t * t, a: 0, b: 8 }], lines: [{ m: 0, b: 60, color: "green", dash: true }], step: { x: 1, y: 10 } }) },
  { level: 3, space: 4, q: S`For $f(x)=\sqrt{x+5}$, find $a$ if $f(a)=3$.`, recap: "Reverse evaluation.", ans: S`$a=4$` },
];

export const WS = {
  code: "2.2",
  title: "Function Notation",
  bigideas: S`$f(x)$ names a function and shows its input. $f(a)$ is the output for input $a$: replace every $x$ by $a$ in brackets. Solving $f(x)=k$ finds the inputs that give output $k$. On a graph, $f(a)$ is a height and $f(x)=k$ is where the line $y=k$ meets the curve.`,
  goals: ["Use f(x) and mapping notation.", "Evaluate at numbers and expressions.", "Solve f(x) = k.", "Interpret notation in models."],
  curriculum: "SL 2.2",
  vocab: [["f(a)", "output for input a"], [S`$f:x\mapsto\dots$`, "mapping notation"], ["Solve f(x) = k", "find the inputs"]],
  hook: S`Write $f(\square)=3\square-1$ on the board and let students put different things in the box: 2, $-1$, $a$, $x+1$.`,
  concepts: [
    ["1. Evaluate", S`Substitute in brackets: $f(-3)$ for $f(x)=x^2$ is $(-3)^2=9$.`],
    ["2. Solve", S`$f(x)=k$ is an equation. ${F({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 2 * x - 3 }], lines: [{ m: 0, b: 0, color: "green", dash: true }], points: [pt(-1, 0, null, "green"), pt(3, 0, null, "green")] }, 5)} Here $f(x)=0$ at $x=-1$ and $x=3$.`],
    ["3. Expressions", S`$f(2x)$, $2f(x)$, $f(x+1)$ and $f(x)+1$ are different in general.`],
  ],
  tips: ["Bracket negative inputs.", "f(a) is a value; f(x) = k is an equation.", "Substitute whole expressions in brackets.", "Check solutions in the original.", "State units in models."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

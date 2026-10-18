// MHF4U Worksheet 2.5 — Solving Polynomial Inequalities Graphically (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "On or above the axis", q: String.raw`Solve $(x+1)(x-2)(x-4)\ge0$ from its graph.`,
    fig: F({ view: { xmin: -2, xmax: 5, ymin: -12, ymax: 8 }, curves: [{ f: (x) => (x + 1) * (x - 2) * (x - 4) }], points: [pt(-1, 0), pt(2, 0), pt(4, 0)], step: { x: 1, y: 2 } }),
    steps: [String.raw`On or above the axis from $-1$ to $2$ and from $4$ on.`], ans: String.raw`$[-1,2]\cup[4,\infty)$` },
  { title: "A negative leading coefficient", q: String.raw`Solve $-(x+3)(x-1)(x-2)\lt0$.`,
    fig: F({ view: { xmin: -4, xmax: 3, ymin: -12, ymax: 12 }, curves: [{ f: (x) => -(x + 3) * (x - 1) * (x - 2), color: "red" }], points: [pt(-3, 0), pt(1, 0), pt(2, 0)], step: { x: 1, y: 2 } }),
    steps: [String.raw`Q2 → Q4: positive far left. Below the axis on $(-3,1)$ and $(2,\infty)$.`], ans: String.raw`$(-3,1)\cup(2,\infty)$` },
  { title: "A quartic with a touching zero", q: String.raw`Solve $x^4-4x^2>0$.`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x ** 4 - 4 * x * x }], points: [pt(-2, 0), pt(0, 0), pt(2, 0)], step: { x: 1, y: 1 } }),
    steps: [String.raw`$x^2(x^2-4)$: touches at 0 (below on both sides), crosses at $\pm2$.`], ans: String.raw`$x\lt-2$ or $x>2$` },
  { title: "Two curves", q: String.raw`Solve $2x^2\ge x^3$.`,
    fig: F({ view: { xmin: -1.5, xmax: 3, ymin: -3, ymax: 10 }, curves: [{ f: (x) => 2 * x * x, color: "green" }, { f: (x) => x ** 3 }], points: [pt(0, 0), pt(2, 8)], step: { x: 0.5, y: 1 } }),
    steps: [String.raw`They meet where $x^2(2-x)=0$: $x=0, 2$.`, String.raw`The parabola is on or above the cubic for all $x\le2$.`], ans: String.raw`$x\le2$` },
  { title: "Boundaries from technology", q: String.raw`Solve $x^3-4x+2>0$ (2 decimals).`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -5, ymax: 8 }, curves: [{ f: (x) => x ** 3 - 4 * x + 2 }], points: [pt(-2.21, 0, false), pt(0.54, 0, false), pt(1.68, 0, false)], step: { x: 0.5, y: 1 } }),
    steps: [String.raw`Zeros $\approx-2.21,\ 0.54,\ 1.68$.`, String.raw`Above the axis between the first two and after the third.`], ans: String.raw`$-2.21\lt x\lt0.54$ or $x>1.68$ (approx.)` },
  { title: "Interval notation", q: String.raw`Write $x\lt-1$ or $2\le x\lt5$ in interval notation.`,
    steps: [String.raw`$(-\infty,-1)\cup[2,5)$.`], ans: String.raw`$(-\infty,-1)\cup[2,5)$` },
  { title: "Above a height", q: String.raw`A ball's height is $h(t)=-5t^2+20t+1$ m. When is it at least 16 m high?`,
    fig: F({ view: { xmin: -0.3, xmax: 4.3, ymin: -2, ymax: 24 }, curves: [{ f: (t) => -5 * t * t + 20 * t + 1, a: 0, b: 4.05 }, { f: () => 16, color: "green" }], points: [pt(1, 16), pt(3, 16)], step: { x: 0.5, y: 2 } }),
    steps: [String.raw`$-5t^2+20t-15\ge0\Rightarrow t^2-4t+3\le0\Rightarrow(t-1)(t-3)\le0$.`], ans: String.raw`$1\le t\le3$ s` },
  { title: "A cubic above a line", q: String.raw`Solve $x^3>2x+4$.`,
    steps: [String.raw`$x^3-2x-4=(x-2)(x^2+2x+2)$; the quadratic is always positive.`], ans: String.raw`$x>2$` },
  { title: "A double zero", q: String.raw`Solve $(x-1)^2(x+2)\le0$.`,
    fig: F({ view: { xmin: -3, xmax: 2.5, ymin: -6, ymax: 6 }, curves: [{ f: (x) => (x - 1) ** 2 * (x + 2) }], points: [pt(-2, 0), pt(1, 0)], step: { x: 0.5, y: 1 } }),
    steps: [String.raw`Below the axis for $x\lt-2$; touches at 1.`], ans: String.raw`$x\le-2$ or $x=1$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Write $x>3$ in interval notation.`, recap: "Notation.", ans: String.raw`$(3,\infty)$` },
  { level: 1, q: String.raw`Use the graph of $f(x)=(x+2)(x-3)$ to solve $f(x)\ge0$.`, recap: "Read a graph.", ans: String.raw`$(-\infty,-2]\cup[3,\infty)$`,
    fig: F({ view: { xmin: -4, xmax: 5, ymin: -8, ymax: 8 }, curves: [{ f: (x) => (x + 2) * (x - 3) }], step: { x: 1, y: 2 } }) },
  { level: 1, q: String.raw`Write $(-1,4]$ as an inequality.`, recap: "Notation.", ans: String.raw`$-1\lt x\le4$` },
  { level: 2, q: String.raw`Use the graph of $f(x)=x(x-2)(x+3)$ to solve $f(x)\lt0$.`, recap: "Read a graph.", ans: String.raw`$x\lt-3$ or $0\lt x\lt2$`,
    fig: F({ view: { xmin: -4, xmax: 3, ymin: -12, ymax: 12 }, curves: [{ f: (x) => x * (x - 2) * (x + 3) }], step: { x: 1, y: 2 } }) },
  { level: 2, q: String.raw`Solve $x^4-9x^2\le0$ graphically.`, recap: "Touching zero.", ans: String.raw`$[-3,3]$` },
  { level: 2, q: String.raw`Solve $x^3\ge9x$ by comparing $y=x^3$ and $y=9x$.`, recap: "Two graphs.", ans: String.raw`$[-3,0]\cup[3,\infty)$`, fig: gridT({ xmin: -4, xmax: 4, ymin: -30, ymax: 30 }, { x: 1, y: 5 }) },
  { level: 2, q: String.raw`Solve $x^3-2x-1>0$ using technology (2 decimals).`, recap: "Approximate boundaries.", ans: String.raw`$-1\lt x\lt-0.62$ or $x>1.62$` },
  { level: 2, q: String.raw`Profit is $P(x)=-x^3+9x^2-18x$ for $x\ge0$. When is there a profit?`, recap: "Context.", ans: String.raw`$-x(x-3)(x-6)>0$: $3\lt x\lt6$` },
  { level: 3, space: 5, q: String.raw`Solve $x^3+x^2\ge4x+4$ graphically and algebraically.`, recap: "Rearrange.", ans: String.raw`$(x+1)(x-2)(x+2)\ge0$: $[-2,-1]\cup[2,\infty)$`, fig: gridT({ xmin: -3, xmax: 3, ymin: -6, ymax: 14 }, { x: 1, y: 2 }) },
  { level: 3, space: 5, q: String.raw`An open box from a 12 cm by 8 cm sheet has $V=x(12-2x)(8-2x)$. Use technology to find when $V\ge48$.`, recap: "Technology in context.", ans: String.raw`$0.68\le x\le2.65$ (approx., with $0\lt x\lt4$)` },
  { level: 3, space: 5, q: String.raw`Explain why the solution of $f(x)>0$ usually alternates between intervals, and when two neighbouring intervals can both be part of the solution.`, recap: "Sign changes.", ans: "the sign changes at odd-order zeros; at an even-order zero it does not" },
  { level: 3, space: 5, q: String.raw`Write a cubic $f$ with $f(x)>0$ exactly on $(-\infty,-1)\cup(2,4)$, and sketch it.`, recap: "Build from a solution.", ans: String.raw`$f(x)=-(x+1)(x-2)(x-4)$`, fig: gridT({ xmin: -2, xmax: 5, ymin: -10, ymax: 10 }, { x: 1, y: 2 }) },
  { level: 3, space: 5, q: String.raw`Solve $x^3\le x^2+2x$.`, recap: "Compare two curves.", ans: String.raw`$x(x-2)(x+1)\le0$: $(-\infty,-1]\cup[0,2]$` },
];

export const WS = {
  code: "2.5",
  title: "Solving Polynomial Inequalities Graphically",
  bigideas: String.raw`$f(x)>0$ where the graph is above the x-axis; $f(x)\lt0$ where it is below; $f(x)>g(x)$ where the graph of $f$ is above that of $g$. The boundaries are zeros or intersection points; non-strict inequalities include them. Solutions are written in inequality or interval notation, with round brackets at $\pm\infty$. Technology gives approximate boundaries when the polynomial does not factor.`,
  goals: ["Use inequality and interval notation.", "Read solutions from a graph.", "Compare two graphs.", "Use technology for approximate boundaries."],
  curriculum: "C4.1, C4.2",
  vocab: [["Interval notation", "( ) excluded, [ ] included"], ["Union $\\cup$", "joins intervals"], ["Boundary", "zero or intersection x-value"]],
  hook: String.raw`On a graph of temperature over a day, shade the times when it was warmer than 20 °C. That shading is the solution of an inequality.`,
  concepts: [
    ["1. Above and below", String.raw`Shade where the curve is above the axis.
${F({ view: { xmin: -3, xmax: 4, ymin: -8, ymax: 8 }, curves: [{ f: (x) => (x + 2) * (x - 1) * (x - 3) * 0.6 }], points: [pt(-2, 0, false), pt(1, 0, false), pt(3, 0, false)], step: { x: 1, y: 2 } })}`],
    ["2. Two graphs", String.raw`$f(x)>g(x)$ ⇔ $f(x)-g(x)>0$.`],
    ["3. Boundaries", String.raw`Strict: excluded. Non-strict: included.`],
  ],
  tips: ["( ) next to ∞.", "Don't miss the outer intervals.", "Higher graph, not positive graph.", "Write ≈ for rounded boundaries.", "Restrict to the context's domain."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

// MHF4U Worksheet 2.6 — Solving Factorable Polynomial Inequalities Algebraically (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Sign chart", q: String.raw`Solve $(x+4)(x-1)(x-3)>0$.`,
    steps: [String.raw`Critical values $-4, 1, 3$. Product signs: −, +, −, +.`], ans: String.raw`$(-4,1)\cup(3,\infty)$` },
  { title: "A negative factor", q: String.raw`Solve $-x(x-2)(x+5)\ge0$.`,
    fig: F({ view: { xmin: -6, xmax: 3, ymin: -20, ymax: 30 }, curves: [{ f: (x) => -x * (x - 2) * (x + 5), color: "red" }], points: [pt(-5, 0), pt(0, 0), pt(2, 0)], step: { x: 1, y: 5 } }),
    steps: [String.raw`Leading coefficient $-1$: signs +, −, +, − from left to right.`], ans: String.raw`$(-\infty,-5]\cup[0,2]$` },
  { title: "Factor first", q: String.raw`Solve $x^3-2x^2-15x\lt0$.`,
    steps: [String.raw`$x(x-5)(x+3)\lt0$; signs −, +, −, +.`], ans: String.raw`$(-\infty,-3)\cup(0,5)$` },
  { title: "Factor theorem", q: String.raw`Solve $x^3-3x^2-6x+8\ge0$.`,
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -20, ymax: 14 }, curves: [{ f: (x) => x ** 3 - 3 * x * x - 6 * x + 8 }], points: [pt(-2, 0), pt(1, 0), pt(4, 0)], step: { x: 1, y: 2 } }),
    steps: [String.raw`$P(1)=0$; divide: $x^2-2x-8=(x-4)(x+2)$.`, String.raw`$(x-1)(x-4)(x+2)\ge0$: signs −, +, −, +.`], ans: String.raw`$[-2,1]\cup[4,\infty)$` },
  { title: "A double zero", q: String.raw`Solve $(x+2)^2(x-1)(x-4)\le0$.`,
    steps: [String.raw`Degree 4, $a>0$: $x>4$ +; $(1,4)$ −; $(-2,1)$ +; $x\lt-2$ + (no change at $-2$).`, String.raw`Include the zeros, including the isolated $x=-2$.`], ans: String.raw`$\{-2\}\cup[1,4]$` },
  { title: "Quadratic in form", q: String.raw`Solve $x^4-17x^2+16\le0$.`,
    fig: F({ view: { xmin: -5, xmax: 5, ymin: -60, ymax: 40 }, curves: [{ f: (x) => x ** 4 - 17 * x * x + 16 }], points: [pt(-4, 0), pt(-1, 0), pt(1, 0), pt(4, 0)], step: { x: 1, y: 10 } }),
    steps: [String.raw`$(x^2-1)(x^2-16)=(x-1)(x+1)(x-4)(x+4)$.`, String.raw`Signs +, −, +, −, +.`], ans: String.raw`$[-4,-1]\cup[1,4]$` },
  { title: "Rearrange and group", q: String.raw`Solve $3x^3+x^2>12x+4$.`,
    steps: [String.raw`$3x^3+x^2-12x-4=x^2(3x+1)-4(3x+1)=(3x+1)(x-2)(x+2)>0$.`, String.raw`Critical values $-2, -\tfrac13, 2$; signs −, +, −, +.`], ans: String.raw`$\left(-2,-\tfrac13\right)\cup(2,\infty)$` },
  { title: "Test values", q: String.raw`Solve $(x-3)^3(x+1)\ge0$ with test values.`,
    steps: [String.raw`Test $-2$: $(-125)(-1)>0$. Test $0$: $(-27)(1)\lt0$. Test $4$: $(1)(5)>0$.`], ans: String.raw`$(-\infty,-1]\cup[3,\infty)$` },
  { title: "A word problem", q: String.raw`For which numbers is the product of the number and the square of 2 less than it at most 9 times the number?`,
    steps: [String.raw`$x(x-2)^2\le9x\Rightarrow x[(x-2)^2-9]\le0\Rightarrow x(x-5)(x+1)\le0$.`], ans: String.raw`$(-\infty,-1]\cup[0,5]$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Solve $(x-1)(x+2)>0$.`, recap: "Sign chart.", ans: String.raw`$(-\infty,-2)\cup(1,\infty)$` },
  { level: 1, q: String.raw`List the critical values of $x(x-3)(x+4)\ge0$.`, recap: "Critical values.", ans: String.raw`$-4, 0, 3$` },
  { level: 1, q: String.raw`What is the sign of $(x+1)(x-2)(x-5)$ at $x=3$?`, recap: "Test value.", ans: "negative" },
  { level: 2, q: String.raw`Solve $(x+3)(x-2)(x-6)\le0$.`, recap: "Sign chart.", ans: String.raw`$(-\infty,-3]\cup[2,6]$` },
  { level: 2, q: String.raw`Solve $x^3-7x^2+10x\ge0$.`, recap: "Factor first.", ans: String.raw`$[0,2]\cup[5,\infty)$` },
  { level: 2, q: String.raw`Solve $-(x+1)(x-4)^2\lt0$.`, recap: "Negative coefficient + double zero.", ans: String.raw`$(-1,4)\cup(4,\infty)$` },
  { level: 2, q: String.raw`Solve $x^3+x^2-9x-9>0$.`, recap: "Grouping.", ans: String.raw`$(-3,-1)\cup(3,\infty)$` },
  { level: 2, q: String.raw`Solve $x^4-x^2\le0$ and check with the graph.`, recap: "Double zero at 0.", ans: String.raw`$[-1,1]$`,
    fig: F({ view: { xmin: -1.6, xmax: 1.6, ymin: -0.5, ymax: 1.5 }, curves: [{ f: (x) => x ** 4 - x * x }], step: { x: 0.5, y: 0.5 } }) },
  { level: 3, space: 5, q: String.raw`Solve $2x^3-3x^2-11x+6\ge0$.`, recap: "Factor theorem.", ans: String.raw`$(x-3)(2x-1)(x+2)$: $\left[-2,\tfrac12\right]\cup[3,\infty)$` },
  { level: 3, space: 5, q: String.raw`Solve $x^4-2x^3-8x^2\ge0$.`, recap: "Isolated point.", ans: String.raw`$(-\infty,-2]\cup\{0\}\cup[4,\infty)$` },
  { level: 3, space: 5, q: String.raw`Solve $x^3\ge6x^2-9x$.`, recap: "Perfect square factor.", ans: String.raw`$x(x-3)^2\ge0$: $x\ge0$` },
  { level: 3, space: 5, q: String.raw`A box has dimensions $x$, $x-2$ and $x+4$. For which $x$ is its volume less than $16x$?`, recap: "Context restricts.", ans: String.raw`$x(x+6)(x-4)\lt0$ with $x>2$: $2\lt x\lt4$`, fig: gridT({ xmin: 0, xmax: 6, ymin: 0, ymax: 120 }, { x: 1, y: 20 }) },
  { level: 3, space: 5, q: String.raw`For $a>b$, use a sign chart to explain why $(x-a)^2(x-b)\le0$ has solution $x\le b$ or $x=a$.`, recap: "General case.", ans: "(x − a)² ≥ 0, so the sign is that of x − b, except the product is 0 at x = a" },
];

export const WS = {
  code: "2.6",
  title: "Solving Factorable Polynomial Inequalities Algebraically",
  bigideas: String.raw`Move every term to one side, factor completely, and mark the critical values on a number line. A factor table (sign chart) or one test value per interval gives the sign of the product on each interval. Odd-order zeros change the sign; even-order zeros do not. Include critical values for $\le$ and $\ge$, exclude them for $\lt$ and $>$, and restrict to the domain in applied problems.`,
  goals: ["Rearrange and factor.", "Build a sign chart.", "Use test values.", "Handle double zeros and context."],
  curriculum: "C4.3",
  vocab: [["Critical value", "a zero of the factored polynomial"], ["Factor table", "signs of factors on intervals"], ["Test value", "one x per interval"]],
  hook: String.raw`Without a graph, decide whether $(x-2)(x+1)$ is positive or negative at $x=10$, $x=0$ and $x=-10$. What pattern do you see?`,
  concepts: [
    ["1. Signs between zeros", String.raw`The sign is constant between critical values.
${F({ view: { xmin: -4, xmax: 4, ymin: -10, ymax: 10 }, curves: [{ f: (x) => (x + 3) * (x - 1) * (x - 2.5) }], points: [pt(-3, 0, false), pt(1, 0, false), pt(2.5, 0, false)], step: { x: 1, y: 2 } })}`],
    ["2. Factor table", String.raw`One row per factor, one column per interval; multiply the signs.`],
    ["3. Even orders", String.raw`$(x-r)^2\ge0$: no sign change at $r$.`],
  ],
  tips: ["Never divide by x.", "Include the sign of a.", "≤, ≥: include the zeros.", "Check one test value.", "Watch for isolated points."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

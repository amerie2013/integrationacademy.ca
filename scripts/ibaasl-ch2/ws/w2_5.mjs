// IB AA SL Worksheet 2.5 — Composite Functions (teacher edition)
import { F, pt, svgT } from "./figT.mjs";
import { chainDoc } from "../l2_5.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Evaluating in both orders", q: S`$f(x)=x^2-1$, $g(x)=2x+3$. Find $f(g(1))$ and $g(f(1))$.`,
    steps: [S`$g(1)=5$, $f(5)=24$.`, S`$f(1)=0$, $g(0)=3$.`], ans: S`$24$ and $3$` },
  { title: "From a table", q: S`$g(0)=2$, $g(3)=5$, $f(2)=-4$, $f(5)=1$. Find $(f\circ g)(0)$ and $(f\circ g)(3)$.`,
    steps: [S`$f(g(0))=f(2)=-4$.`, S`$f(g(3))=f(5)=1$.`], ans: S`$-4$ and $1$` },
  { title: "Composite formulas", q: S`$f(x)=x+5$, $g(x)=4x$. Find $(f\circ g)(x)$ and $(g\circ f)(x)$.`,
    steps: [S`$f(4x)=4x+5$.`, S`$g(x+5)=4x+20$.`], ans: S`$4x+5$ and $4x+20$` },
  { title: "A function with itself", q: S`$f(x)=3x-2$. Find $(f\circ f)(x)$.`,
    steps: [S`$3(3x-2)-2$.`], ans: S`$9x-8$` },
  { title: "Solving", q: S`$f(x)=2x-1$, $g(x)=x^2$. Solve $(f\circ g)(x)=17$.`,
    steps: [S`$2x^2-1=17\Rightarrow x^2=9$.`], ans: S`$x=\pm3$` },
  { title: "Decomposing a power", q: S`Write $h(x)=(3x+1)^4$ as $f(g(x))$.`,
    fig: svgT(chainDoc([0, 1, 2], (x) => 3 * x + 1, (x) => x ** 4), 6),
    steps: [S`Inner: $g(x)=3x+1$; outer: $f(x)=x^4$.`], ans: S`$g(x)=3x+1$, $f(x)=x^4$` },
  { title: "Decomposing a fraction", q: S`Write $h(x)=\frac{1}{x^2+4}$ as $f(g(x))$.`,
    steps: [S`Inner: $g(x)=x^2+4$; outer: $f(x)=\frac1x$.`], ans: S`$g(x)=x^2+4$, $f(x)=\frac1x$` },
  { title: "Domain of a composite", q: S`$f(x)=\sqrt x$, $g(x)=x-11$. Find $(f\circ g)(x)$ and its domain.`,
    steps: [S`$\sqrt{x-11}$ needs $x-11\ge0$.`], ans: S`$\sqrt{x-11}$, $x\ge11$` },
  { title: "From graphs", q: S`The graphs of $f(x)=2-x$ and $g(x)=x+1$ are shown. Find $f(g(2))$.`,
    fig: F({ view: { xmin: -2, xmax: 5, ymin: -3, ymax: 5 }, curves: [{ f: (x) => 2 - x }, { f: (x) => x + 1, color: "blue" }], points: [pt(2, 3, null, "blue"), pt(3, -1)] }),
    steps: [S`Read $g(2)=3$ from the blue line.`, S`Read $f(3)=-1$ from the violet line.`], ans: S`$-1$` },
];

const PROBLEMS = [
  { level: 1, q: S`$f(x)=x-4$, $g(x)=x^2$. Find $f(g(3))$.`, recap: "Evaluate.", ans: "5" },
  { level: 1, q: S`$f(x)=x-4$, $g(x)=x^2$. Find $g(f(3))$.`, recap: "Evaluate.", ans: "1" },
  { level: 1, q: S`$f(x)=2x$. Find $f(f(5))$.`, recap: "Self-composite.", ans: "20" },
  { level: 2, q: S`$f(x)=3x+1$, $g(x)=x-2$. Find $(f\circ g)(x)$ and $(g\circ f)(x)$.`, recap: "Formulas.", ans: S`$3x-5$; $3x-1$` },
  { level: 2, q: S`$f(x)=x^2+1$, $g(x)=x+3$. Find and expand $(f\circ g)(x)$.`, recap: "Expand.", ans: S`$x^2+6x+10$` },
  { level: 2, q: S`$f(x)=x^2$, $g(x)=x-3$. Solve $(g\circ f)(x)=13$.`, recap: "Solve.", ans: S`$x=\pm4$` },
  { level: 2, q: S`Write $h(x)=\sqrt{x^2+9}$ as $f(g(x))$.`, recap: "Decompose.", ans: S`$g(x)=x^2+9$, $f(x)=\sqrt x$` },
  { level: 2, q: S`$f(x)=\frac{1}{x-1}$, $g(x)=x+2$. Find $(f\circ g)(x)$ and the value of $x$ excluded from its domain.`, recap: "Excluded value.", ans: S`$\frac{1}{x+1}$; $x=-1$` },
  { level: 3, space: 4, q: S`$f(x)=ax+3$ and $g(x)=2x-1$. Find $a$ if $f\circ g=g\circ f$.`, recap: "Equal composites.", ans: S`$a=-2$` },
  { level: 3, space: 4, q: S`$f(x)=x^2$, $g(x)=x+k$ and $(f\circ g)(2)=25$. Find the possible values of $k$.`, recap: "Unknown constant.", ans: S`$k=3$ or $k=-7$` },
  { level: 3, space: 5, q: S`$f(x)=\sqrt{x+1}$, $g(x)=x^2-1$. Find $(f\circ g)(x)$ and $(g\circ f)(x)$ with their domains.`, recap: "Domains of composites.", ans: S`$|x|$ for all $x$; $x$ for $x\ge-1$`,
    fig: F({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 4 }, curves: [{ f: (x) => Math.abs(x) }, { f: (x) => x, a: -1, color: "green" }] }) },
  { level: 3, space: 4, q: S`Show that $f(g(x))=x$ for $f(x)=\frac{x-5}{2}$ and $g(x)=2x+5$. What does this tell you?`, recap: "Identity.", ans: S`$\frac{2x+5-5}{2}=x$: they undo each other` },
  { level: 3, space: 4, q: S`$C(F)=\frac59(F-32)$ converts °F to °C and $K(C)=C+273$ converts °C to kelvin. Find $K(C(212))$ and write $(K\circ C)(F)$.`, recap: "Model.", ans: S`373; $\frac59(F-32)+273$` },
];

export const WS = {
  code: "2.5",
  title: "Composite Functions",
  bigideas: S`$(f\circ g)(x)=f(g(x))$: apply $g$ first, then $f$. Substitute the whole of $g(x)$ in brackets into $f$. In general $f\circ g\ne g\circ f$. The domain of $f\circ g$ contains only inputs whose $g(x)$ is in the domain of $f$. A complicated function can be decomposed into an inner and an outer function.`,
  goals: ["Evaluate composites.", "Find composite formulas.", "Solve equations with composites.", "Decompose functions."],
  curriculum: "SL 2.5",
  vocab: [["Composite", "f(g(x))"], ["Inner function", "applied first"], ["Identity", "I(x) = x"]],
  hook: "A shop adds 13% tax and then takes 10 off. Does the order matter? Let students try both orders on a price of 100.",
  concepts: [
    ["1. Inside out", S`${svgT(chainDoc([-1, 0, 2, 3], (x) => x - 1, (x) => x * x + 2), 6)} $g(x)=x-1$ acts first, then $f(x)=x^2+2$.`],
    ["2. Order matters", S`$f(x)=x+5$, $g(x)=4x$: $f\circ g=4x+5$ but $g\circ f=4x+20$.`],
    ["3. Domains", S`$(f\circ g)(x)$ exists only when $g(x)$ is a valid input of $f$.`],
  ],
  tips: ["g first in f(g(x)).", "Substitute in brackets.", "f(x)g(x) is a product.", "Check composite domains.", "Decompose: what happens to x first?"],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

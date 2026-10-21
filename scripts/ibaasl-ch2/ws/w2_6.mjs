// IB AA SL Worksheet 2.6 — Inverse Functions (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "A linear inverse", q: S`Find $f^{-1}(x)$ for $f(x)=5x+2$.`,
    steps: [S`$x=5y+2\Rightarrow y=\frac{x-2}{5}$.`], ans: S`$f^{-1}(x)=\frac{x-2}{5}$` },
  { title: "Undoing a division", q: S`Find $f^{-1}(x)$ for $f(x)=\frac{x-4}{3}$.`,
    steps: [S`$x=\frac{y-4}{3}\Rightarrow y=3x+4$.`], ans: S`$f^{-1}(x)=3x+4$` },
  { title: "A self-inverse line", q: S`Find the inverse of $f(x)=7-x$.`,
    steps: [S`$x=7-y\Rightarrow y=7-x$.`], ans: S`$f^{-1}=f$` },
  { title: "A cubic", q: S`Find $f^{-1}(x)$ for $f(x)=x^3-2$.`,
    steps: [S`$x=y^3-2\Rightarrow y=\sqrt[3]{x+2}$.`], ans: S`$\sqrt[3]{x+2}$` },
  { title: "A square root", q: S`Find $f^{-1}(x)$ for $f(x)=\sqrt{x-3}$, $x\ge3$, with its domain.`,
    steps: [S`$x=\sqrt{y-3}\Rightarrow y=x^2+3$.`, S`Domain of $f^{-1}$ = range of $f$: $x\ge0$.`], ans: S`$x^2+3$, $x\ge0$` },
  { title: "A rational function", q: S`Find $f^{-1}(x)$ for $f(x)=\frac{4x}{x+2}$, $x\ne-2$.`,
    steps: [S`$x(y+2)=4y\Rightarrow xy-4y=-2x$.`, S`$y(x-4)=-2x\Rightarrow y=\frac{2x}{4-x}$.`], ans: S`$\frac{2x}{4-x}$, $x\ne4$` },
  { title: "Restricting the domain", q: S`Find $f^{-1}(x)$ for $f(x)=x^2+2$, $x\le0$.`,
    fig: F({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 8 }, curves: [{ f: (x) => x * x + 2, b: 0 }, { f: (x) => -Math.sqrt(x - 2), a: 2, color: "green" }, { f: (x) => x, color: "gray" }] }),
    steps: [S`$x=y^2+2\Rightarrow y=\pm\sqrt{x-2}$.`, S`$y\le0$, so take the negative root.`], ans: S`$-\sqrt{x-2}$, $x\ge2$` },
  { title: "Reflecting points", q: S`$y=f(x)$ passes through $(0,1)$, $(1,3)$ and $(2,7)$. Give three points on $y=f^{-1}(x)$.`,
    fig: F({ view: { xmin: -1, xmax: 8, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 2 ** (x + 1) - 1, a: -1, b: 2.2 }, { f: (x) => Math.log2(x + 1) - 1, a: 0, b: 8, color: "green" }, { f: (x) => x, color: "gray" }], points: [pt(1, 3), pt(3, 1, null, "green")] }),
    steps: [S`Swap the coordinates.`], ans: S`$(1,0)$, $(3,1)$, $(7,2)$` },
  { title: "Checking a pair", q: S`Show that $f(x)=2x+6$ and $g(x)=\frac x2-3$ are inverses.`,
    steps: [S`$f(g(x))=2\left(\frac x2-3\right)+6=x$.`, S`$g(f(x))=\frac{2x+6}{2}-3=x$.`], ans: "both composites give x" },
];

const PROBLEMS = [
  { level: 1, q: S`Find $f^{-1}(x)$ for $f(x)=x-8$.`, recap: "Linear.", ans: S`$x+8$` },
  { level: 1, q: S`Find $f^{-1}(x)$ for $f(x)=\frac x4$.`, recap: "Linear.", ans: S`$4x$` },
  { level: 1, q: S`$f(x)=2x+1$. Find $f^{-1}(9)$.`, recap: "Inverse value.", ans: "4" },
  { level: 2, q: S`Find $f^{-1}(x)$ for $f(x)=6-3x$.`, recap: "Linear.", ans: S`$\frac{6-x}{3}$` },
  { level: 2, q: S`Find $f^{-1}(x)$ for $f(x)=\frac{2x+3}{5}$.`, recap: "Linear.", ans: S`$\frac{5x-3}{2}$` },
  { level: 2, q: S`Find $f^{-1}(x)$ for $f(x)=x^3+5$.`, recap: "Cubic.", ans: S`$\sqrt[3]{x-5}$` },
  { level: 2, q: S`Find $f^{-1}(x)$ for $f(x)=\frac{1}{x+2}$ and state its domain.`, recap: "Rational.", ans: S`$\frac1x-2$, $x\ne0$` },
  { level: 2, q: S`Explain why $f(x)=x^2-4x$ has no inverse on $\mathbb R$, and give a domain on which it does.`, recap: "Restrict.", ans: S`not one-to-one; e.g. $x\ge2$`,
    fig: F({ view: { xmin: -2, xmax: 6, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x }], lines: [{ m: 0, b: -3, color: "red", dash: true }] }) },
  { level: 3, space: 5, q: S`$f(x)=(x-1)^2+3$, $x\ge1$. Find $f^{-1}(x)$ and show that the graphs of $f$ and $f^{-1}$ never meet.`, recap: "No intersection.", ans: S`$1+\sqrt{x-3}$, $x\ge3$; $x^2-3x+4=0$ has $\Delta<0$` },
  { level: 3, space: 4, q: S`Find the inverse of $f(x)=\frac{3x+1}{x-2}$ and state the range of $f$.`, recap: "Rational inverse.", ans: S`$\frac{2x+1}{x-3}$; $y\ne3$` },
  { level: 3, space: 4, q: S`Show that $f(x)=\frac{2x+3}{x-2}$ is self-inverse and find $f^{-1}(1)$.`, recap: "Self-inverse.", ans: S`$f(f(x))=x$; $f^{-1}(1)=f(1)=-5$` },
  { level: 3, space: 4, q: S`$f(x)=2x+3$ and $g(x)=x^3$. Find $(g\circ f)^{-1}(x)$ and evaluate it at 125.`, recap: "Inverse of a composite.", ans: S`$\frac{\sqrt[3]x-3}{2}$; $1$` },
  { level: 3, space: 4, q: S`Find $f^{-1}(x)$ for $f(x)=\sqrt{9-x}$, $x\le9$, and state its domain and range.`, recap: "Domain and range swap.", ans: S`$9-x^2$; $x\ge0$; $y\le9$` },
];

export const WS = {
  code: "2.6",
  title: "Inverse Functions",
  bigideas: S`An inverse function $f^{-1}$ undoes $f$: $f(f^{-1}(x))=f^{-1}(f(x))=x$. Find it by swapping $x$ and $y$ and making $y$ the subject. Its graph is the reflection of $f$ in $y=x$, and the domain and range swap. Only one-to-one functions have inverses; restrict the domain of a many-to-one function first.`,
  goals: ["Find inverses algebraically.", "Reflect graphs in y = x.", "Restrict domains.", "Verify inverses and spot self-inverse functions."],
  curriculum: "SL 2.2, SL 2.5",
  vocab: [[S`$f^{-1}$`, "the inverse of f (not 1/f)"], ["One-to-one", "passes the horizontal line test"], ["Self-inverse", S`$f^{-1}=f$`]],
  hook: "Give a 'function machine' that multiplies by 3 and then adds 2. Ask students to design the machine that gets back the original number.",
  concepts: [
    ["1. Swap and solve", S`$y=f(x)$, swap $x$ and $y$, make $y$ the subject, write $f^{-1}(x)$, and check with one value.`],
    ["2. Reflection", S`${F({ view: { xmin: -3, xmax: 7, ymin: -3, ymax: 7 }, curves: [{ f: (x) => 3 * x - 2 }, { f: (x) => (x + 2) / 3, color: "green" }, { f: (x) => x, color: "gray" }], points: [pt(2, 4), pt(4, 2, null, "green")] }, 5)} $f(x)=3x-2$ and $f^{-1}(x)=\frac{x+2}{3}$.`],
    ["3. Restrictions", S`A many-to-one function (e.g. a quadratic) needs its domain cut at the vertex; the sign of the square root must match that choice.`],
  ],
  tips: ["The −1 is not a power.", "Domain of f⁻¹ = range of f.", "Pick the root sign from the domain.", "Check one value both ways.", "Self-inverse graphs are symmetric in y = x."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

// MCR3U Worksheet 1.5 — Inverse Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const YX = { m: 1, b: 0, color: "gray", dash: true };

const EXAMPLES = [
  { title: "Reversing two steps", q: String.raw`Find the inverse of $f(x)=2x+7$.`,
    steps: ["f: × 2, then + 7. Inverse: − 7, then ÷ 2."], ans: String.raw`$f^{-1}(x)=\frac{x-7}{2}$` },
  { title: "Divide, then subtract", q: String.raw`Find the inverse of $f(x)=\frac x4-3$.`,
    steps: ["f: ÷ 4, then − 3. Inverse: + 3, then × 4."], ans: String.raw`$f^{-1}(x)=4(x+3)$` },
  { title: "From a table", q: String.raw`$f$: $(1,5),(2,8),(4,14),(6,20)$. Give $f^{-1}$ as pairs and as an equation.`,
    steps: [String.raw`Swap: $(5,1),(8,2),(14,4),(20,6)$.`, String.raw`$f(x)=3x+2$, so $f^{-1}(x)=\frac{x-2}{3}$.`], ans: String.raw`$f^{-1}(x)=\frac{x-2}{3}$` },
  { title: "Graph and reflection", q: String.raw`Graph $f(x)=-2x+4$ and its inverse.`,
    fig: F({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, lines: [{ m: -2, b: 4, color: "blue" }, { m: -0.5, b: 2, color: "red" }, YX], points: [pt(0, 4, false, "blue"), pt(4, 0, false, "red"), pt(2, 0, false, "blue"), pt(0, 2, false, "red")] }),
    steps: [String.raw`Swap the intercepts: $(0,4)\to(4,0)$, $(2,0)\to(0,2)$.`, String.raw`$x=-2y+4\Rightarrow y=-\tfrac12x+2$.`], ans: String.raw`$f^{-1}(x)=-\tfrac12x+2$` },
  { title: "Swap and solve", q: String.raw`Find the inverse of $g(x)=\frac{5-3x}{2}$.`,
    steps: [String.raw`$x=\frac{5-3y}{2}\Rightarrow2x=5-3y\Rightarrow y=\frac{5-2x}{3}$.`], ans: String.raw`$g^{-1}(x)=\frac{5-2x}{3}$` },
  { title: "Inverse of a half-parabola", q: String.raw`$f(x)=x^2-4$ for $x\ge0$. Find $f^{-1}$, its domain and range.`,
    fig: F({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x * x - 4, a: 0, color: "blue" }, { f: (x) => Math.sqrt(x + 4), a: -4, color: "red" }], lines: [YX] }),
    steps: [String.raw`$x=y^2-4\Rightarrow y=\sqrt{x+4}$ (positive, since $y\ge0$).`], ans: String.raw`$f^{-1}(x)=\sqrt{x+4}$; $D: x\ge-4$; $R: y\ge0$` },
  { title: "The left half", q: String.raw`$f(x)=-(x+1)^2+3$ for $x\le-1$. Find $f^{-1}$ and check with $x=-3$.`,
    steps: [String.raw`$x=-(y+1)^2+3\Rightarrow(y+1)^2=3-x\Rightarrow y=-1-\sqrt{3-x}$ (since $y\le-1$).`, String.raw`$f(-3)=-4+3=-1$; $f^{-1}(-1)=-1-2=-3$ ✓.`], ans: String.raw`$f^{-1}(x)=-1-\sqrt{3-x}$, $x\le3$` },
  { title: "When is the inverse a function?", q: String.raw`Is the inverse of $f(x)=x^2-6x$ a function? If not, restrict $f$.`,
    steps: [String.raw`$f(x)=(x-3)^2-9$; $f(0)=f(6)=0$, so swapping gives two outputs for 0.`, String.raw`Restrict to $x\ge3$: $f^{-1}(x)=3+\sqrt{x+9}$.`], ans: String.raw`not unless restricted; with $x\ge3$, $f^{-1}(x)=3+\sqrt{x+9}$` },
  { title: "In context", q: String.raw`A caterer charges $C(n)=45+12n$ for $n$ guests. Find $n$ as a function of $C$ and use it for a 165-dollar bill.`,
    steps: [String.raw`$n=\frac{C-45}{12}$.`, String.raw`$\frac{165-45}{12}=10$.`], ans: "10 guests" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the inverse of $f(x)=x+9$.`, recap: "x + 9.", ans: String.raw`$f^{-1}(x)=x-9$` },
  { level: 1, q: String.raw`Find the inverse of $f(x)=6x$.`, recap: "6x.", ans: String.raw`$f^{-1}(x)=\frac x6$` },
  { level: 1, q: String.raw`If $f(-2)=7$, what is $f^{-1}(7)$?`, recap: "Meaning of f⁻¹.", ans: "$-2$" },
  { level: 2, q: String.raw`Find $f^{-1}$ for $f(x)=3x-12$ and evaluate $f^{-1}(0)$.`, recap: "Linear inverse.", ans: String.raw`$\frac{x+12}{3}$; $4$` },
  { level: 2, q: String.raw`Find $g^{-1}$ for $g(x)=\frac{2x+3}{5}$.`, recap: "Fraction inverse.", ans: String.raw`$g^{-1}(x)=\frac{5x-3}{2}$` },
  { level: 2, q: String.raw`$f=\{(-3,1),(0,4),(2,6)\}$. List $f^{-1}$. Is it a function?`, recap: "Pairs.", ans: String.raw`$\{(1,-3),(4,0),(6,2)\}$; yes` },
  { level: 2, q: String.raw`$f(x)=x^2+1$, $x\ge0$. Find $f^{-1}$ and its domain.`, recap: "Half-parabola.", ans: String.raw`$\sqrt{x-1}$; $x\ge1$` },
  { level: 2, q: "Sketch the inverse of the function shown on the same grid, and write its equation.", recap: "Sketch the inverse.", ans: String.raw`$f(x)=(x-1)^2$, $x\ge1$; $f^{-1}(x)=1+\sqrt x$`,
    fig: F({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 7 }, curves: [{ f: (x) => (x - 1) ** 2, a: 1, color: "blue" }], lines: [YX], points: [pt(1, 0), pt(3, 4)] }) },
  { level: 3, space: 5, q: String.raw`$f(x)=4(x-3)^2-5$ for $x\ge3$. Find $f^{-1}(x)$ and $f^{-1}(11)$.`, recap: "Restricted quadratic.", ans: String.raw`$3+\sqrt{\frac{x+5}{4}}$; $5$` },
  { level: 3, space: 4, q: String.raw`$f(x)=\frac{ax+1}{3}$ and $f^{-1}(5)=7$. Find $a$.`, recap: "Find a.", ans: String.raw`$f(7)=5$: $a=2$` },
  { level: 3, space: 5, q: String.raw`Find every line $y=mx+b$ that is its own inverse.`, recap: "Self-inverse lines.", ans: String.raw`$y=x$, and every line with $m=-1$` },
  { level: 3, space: 5, q: String.raw`$f(x)=(x+2)^2-1$. Give two different domain restrictions that make $f^{-1}$ a function, and write $f^{-1}$ for each.`, recap: "Two restrictions.", ans: String.raw`$x\ge-2$: $-2+\sqrt{x+1}$; $x\le-2$: $-2-\sqrt{x+1}$`,
    fig: gridT({ xmin: -6, xmax: 4, ymin: -3, ymax: 7 }) },
  { level: 3, space: 5, q: String.raw`$F=1.8C+32$ and $K=C+273.15$. Write $F$ as a function of $K$, then find $K$ when $F=212$.`, recap: "Chain of inverses.", ans: String.raw`$F=1.8K-459.67$; $K=373.15$` },
];

export const WS = {
  code: "1.5",
  title: "Inverse Functions",
  bigideas: String.raw`An inverse undoes a function: reverse the operations in reverse order. Algebraically, swap $x$ and $y$ and solve for $y$; graphically, reflect in $y=x$. The domain and range trade places. A quadratic's inverse is a function only after restricting the domain to one side of the vertex.`,
  goals: ["Find inverses from steps, tables, graphs and equations.", "Reflect in y = x.", "Restrict a quadratic's domain.", "Swap domain and range."],
  curriculum: "A1.4–A1.7",
  vocab: [["$f^{-1}$", "the inverse of $f$ (not $\\frac1f$)"], ["One-to-one", "needed for the inverse to be a function"]],
  hook: "Getting dressed: socks then shoes. Undressing: shoes then socks. Ask why the order reverses.",
  concepts: [
    ["1. Reverse the steps", String.raw`$f(x)=\frac{x+1}{2}$: +1, ÷2. $f^{-1}(x)=2x-1$: ×2, −1.`],
    ["2. Reflect in y = x", String.raw`${F({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, lines: [{ m: 0.5, b: 0.5, color: "blue" }, { m: 2, b: -1, color: "red" }, YX] }, 5)}`],
    ["3. Quadratics", String.raw`$y=x^2$ gives $y=\pm\sqrt x$; keep $x\ge0$ for $\sqrt x$ or $x\le0$ for $-\sqrt x$.`],
  ],
  tips: ["f⁻¹(x) ≠ 1/f(x).", "Reverse order as well as operations.", "Check with f(f⁻¹(x)) = x.", "State the restriction and the sign of the root.", "Domain of f⁻¹ = range of f."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

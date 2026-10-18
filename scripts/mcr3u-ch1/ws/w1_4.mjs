// MCR3U Worksheet 1.4 — Domain and Range (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "From the graph of a parabola", q: String.raw`State the domain and range of $y=2(x-1)^2-4$.`,
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 7 }, curves: [{ f: (x) => 2 * (x - 1) ** 2 - 4 }], points: [pt(1, -4)] }),
    steps: [String.raw`Any $x$ works. The vertex $(1,-4)$ is the lowest point.`], ans: String.raw`$D=\{x\in\mathbb R\}$, $R=\{y\in\mathbb R\mid y\ge-4\}$` },
  { title: "A translated root", q: String.raw`Find the domain and range of $y=\sqrt{x+6}-1$.`,
    steps: [String.raw`$x+6\ge0\Rightarrow x\ge-6$.`, String.raw`The root is at least 0, so $y\ge-1$.`], ans: String.raw`$D: x\ge-6$; $R: y\ge-1$` },
  { title: "Solving for the domain", q: String.raw`Find the domain and range of $f(x)=\sqrt{10-5x}$.`,
    steps: [String.raw`$10-5x\ge0\Rightarrow-5x\ge-10\Rightarrow x\le2$ (sign flips).`], ans: String.raw`$D: x\le2$; $R: y\ge0$` },
  { title: "A reciprocal", q: String.raw`Find the domain and range of $g(x)=\frac{2}{x-3}+4$.`,
    fig: F({ view: { xmin: -3, xmax: 9, ymin: -2, ymax: 10 }, curves: [{ f: (x) => 2 / (x - 3) + 4, color: "red" }], vlines: [{ x: 3, color: "gray", dash: true }], lines: [{ m: 0, b: 4, color: "gray", dash: true }] }),
    steps: [String.raw`Denominator $\ne0$: $x\ne3$.`, String.raw`$\frac{2}{x-3}\ne0$, so $g(x)\ne4$.`], ans: String.raw`$D: x\ne3$; $R: y\ne4$` },
  { title: "A range that stops short", q: String.raw`Find the range of $h(x)=\frac{7}{x^2+1}$.`,
    steps: [String.raw`$x^2+1\ge1$, so $0<\frac{7}{x^2+1}\le7$; the value $7$ is reached at $x=0$.`], ans: String.raw`$D=\mathbb R$; $R: 0<y\le7$` },
  { title: "A set of points", q: String.raw`State the domain and range of $\{(-1,4),(2,-3),(5,4)\}$.`,
    steps: ["List each input and each output once."], ans: String.raw`$D=\{-1,2,5\}$, $R=\{-3,4\}$` },
  { title: "Open and closed endpoints", q: "The graph is a segment from a closed dot at (−3, 2) to an open dot at (4, −5). State the domain and range.",
    fig: F({ view: { xmin: -5, xmax: 6, ymin: -7, ymax: 4 }, segs: [{ pts: [[-3, 2], [4, -5]] }], points: [pt(-3, 2), { x: 4, y: -5, label: "(4, −5) open", color: "red" }] }),
    steps: ["The closed end is included; the open end is not."], ans: String.raw`$D: -3\le x<4$; $R: -5<y\le2$` },
  { title: "A fenced pen", q: String.raw`A pen against a barn uses 60 m of fence on three sides. With width $w$, $A(w)=w(60-2w)$. Find the domain and range.`,
    steps: [String.raw`Lengths are positive: $w>0$ and $60-2w>0\Rightarrow0<w<30$.`, String.raw`Zeros 0 and 30; vertex at $w=15$: $A=15(30)=450$.`], ans: String.raw`$D: 0<w<30$; $R: 0<A\le450$` },
  { title: "A discrete context", q: "A bus has 40 seats; each rider pays 15 dollars. State the domain and range of the fare revenue R(n) = 15n.",
    steps: ["Riders are whole numbers from 0 to 40."], ans: String.raw`$D=\{0,1,\ldots,40\}$; $R=\{0,15,30,\ldots,600\}$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`State the domain and range of $y=(x+2)^2-3$.`, recap: "Parabola.", ans: String.raw`$D=\mathbb R$; $R: y\ge-3$` },
  { level: 1, q: String.raw`State the domain of $f(x)=\sqrt{x-4}$.`, recap: "Root.", ans: String.raw`$x\ge4$` },
  { level: 1, q: String.raw`State the domain of $g(x)=\frac{1}{x+9}$.`, recap: "Reciprocal.", ans: String.raw`$x\ne-9$` },
  { level: 2, q: String.raw`State the range of $f(x)=-3(x-5)^2+2$.`, recap: "Downward parabola.", ans: String.raw`$y\le2$` },
  { level: 2, q: String.raw`Find the domain and range of $f(x)=\sqrt{8-2x}+3$.`, recap: "Root with −x.", ans: String.raw`$D: x\le4$; $R: y\ge3$` },
  { level: 2, q: String.raw`Find the domain and range of $f(x)=\frac{5}{2x+1}-2$.`, recap: "Shifted reciprocal.", ans: String.raw`$D: x\ne-0.5$; $R: y\ne-2$` },
  { level: 2, q: "The graph shows y = −√(x + 1) + 3 for −1 ≤ x ≤ 8. State the domain and range.", recap: "Restricted root.", ans: String.raw`$D: -1\le x\le8$; $R: 0\le y\le3$`,
    fig: F({ view: { xmin: -2, xmax: 9, ymin: -1, ymax: 4 }, curves: [{ f: (x) => -Math.sqrt(x + 1) + 3, a: -1, b: 8 }], points: [pt(-1, 3), pt(8, 0)] }) },
  { level: 2, q: String.raw`A rocket's height is $h(t)=-5t^2+40t+45$ m. Find a sensible domain and range.`, recap: "Rocket.", ans: String.raw`lands at $t=9$; top $h(4)=125$: $0\le t\le9$, $0\le h\le125$` },
  { level: 3, space: 4, q: String.raw`Find the domain of $f(x)=\dfrac{\sqrt{x-2}}{x^2-16}$.`, recap: "Two restrictions.", ans: String.raw`$x\ge2$, $x\ne4$` },
  { level: 3, space: 5, q: String.raw`Find the range of $f(x)=x^2-6x+1$ on the domain $-1\le x\le5$.`, recap: "Restricted quadratic.", ans: String.raw`vertex $(3,-8)$, $f(-1)=8$, $f(5)=-4$: $-8\le y\le8$`,
    fig: gridT({ xmin: -2, xmax: 6, ymin: -10, ymax: 10 }, { x: 1, y: 2 }) },
  { level: 3, space: 4, q: String.raw`Find the range of $y=\frac{6}{x^2+2}$.`, recap: "Bounded range.", ans: String.raw`$0<y\le3$` },
  { level: 3, space: 5, q: String.raw`A 24 cm wire is bent into a rectangle with width $x$. Write the area $A(x)$ and give the domain and range.`, recap: "Wire rectangle.", ans: String.raw`$A=x(12-x)$; $0<x<12$; $0<A\le36$` },
  { level: 3, space: 5, q: String.raw`Write a quadratic function with range $y\le5$ and x-intercepts $1$ and $7$.`, recap: "Build a quadratic.", ans: String.raw`$y=-\tfrac59(x-4)^2+5$` },
];

export const WS = {
  code: "1.4",
  title: "Domain and Range",
  bigideas: String.raw`The domain is the set of inputs; the range is the set of outputs. Square roots need a non-negative inside; denominators cannot be zero; a parabola's range starts at its vertex; a reciprocal never reaches its horizontal asymptote. A context restricts both further — to an interval or to whole numbers.`,
  goals: ["Write domain and range in set notation.", "Read them from graphs (open/closed ends).", "Find algebraic restrictions.", "Choose sensible values in a context."],
  curriculum: "A1.3",
  vocab: [["Set notation", "$\\{x\\in\\mathbb R\\mid x\\ge2\\}$"], ["Restriction", "excluded value"], ["Discrete", "separate values only"]],
  hook: "Shine a flashlight on a bent wire held above a desk: the shadow on the desk edge is the domain. Turn the light sideways for the range.",
  concepts: [
    ["1. Shadows on the axes", String.raw`${F({ view: { xmin: -4, xmax: 5, ymin: -3, ymax: 6 }, curves: [{ f: (x) => -((x - 1) ** 2) + 4, a: -1, b: 3 }], points: [pt(-1, 0), pt(3, 0), pt(1, 4)] }, 5.5, "D: −1 ≤ x ≤ 3, R: 0 ≤ y ≤ 4")}`],
    ["2. Algebra", String.raw`$\sqrt{\ }$: inside $\ge0$. Fraction: denominator $\ne0$. Polynomial: all reals.`],
    ["3. Context", "Time starts at 0 and ends when the event ends; lengths are positive; counts are whole numbers."],
  ],
  tips: ["Flip the inequality when dividing by a negative.", "Range is about y, not x.", "Open dot: < ; closed dot: ≤.", "Check both endpoints and the vertex on a restricted domain.", "Reject solutions outside the context."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

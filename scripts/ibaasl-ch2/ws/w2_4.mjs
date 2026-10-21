// IB AA SL Worksheet 2.4 — Domain and Range (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "A fraction", q: S`State the domain and range of $f(x)=\frac{3}{x+2}$.`,
    steps: [S`Denominator $\ne0$: $x\ne-2$.`, S`The fraction is never 0: $y\ne0$.`], ans: S`$x\ne-2$; $y\ne0$` },
  { title: "A square root", q: S`State the domain and range of $f(x)=\sqrt{10-2x}$.`,
    steps: [S`$10-2x\ge0\Rightarrow x\le5$.`, S`Root values start at 0: $y\ge0$.`], ans: S`$(-\infty,5]$; $[0,\infty)$` },
  { title: "A quadratic on all reals", q: S`State the range of $f(x)=x^2-4x+7$.`,
    steps: [S`$(x-2)^2+3$: minimum 3.`], ans: S`$y\ge3$` },
  { title: "A restricted domain", q: S`Find the range of $f(x)=-(x-2)^2+9$ for $0\le x\le6$.`,
    fig: F({ view: { xmin: -1, xmax: 7, ymin: -8, ymax: 10 }, curves: [{ f: (x) => -((x - 2) ** 2) + 9, a: 0, b: 6 }], points: [pt(2, 9, null, "amber"), pt(0, 5), pt(6, -7)], step: { x: 1, y: 2 } }),
    steps: [S`Vertex $(2,9)$ is inside: maximum 9.`, S`$f(0)=5$, $f(6)=-7$: minimum $-7$.`], ans: S`$-7\le y\le9$` },
  { title: "A discrete domain", q: S`$f(x)=x^2$ with domain $\{-2,-1,0,1,2\}$. State the range.`,
    steps: [S`Outputs $4, 1, 0, 1, 4$.`], ans: S`$\{0,1,4\}$` },
  { title: "Interval notation", q: S`Write in interval notation: (a) $-3<x\le4$ (b) $x\ge1$.`,
    steps: [S`Round bracket excludes, square includes.`], ans: S`(a) $(-3,4]$ (b) $[1,\infty)$` },
  { title: "A root in a denominator", q: S`State the domain and range of $f(x)=\frac{1}{\sqrt{x-3}}$.`,
    steps: [S`$x-3>0$ (strictly, since it is in a denominator).`, S`Outputs are positive and can be arbitrarily small or large.`], ans: S`$x>3$; $y>0$` },
  { title: "Reading a graph", q: S`The graph shows $f(x)=\frac12x^2-x$ for $-2\le x\le4$. State the domain and range.`,
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => 0.5 * x * x - x, a: -2, b: 4 }], points: [pt(-2, 4), pt(4, 4), pt(1, -0.5, null, "amber")] }),
    steps: [S`End points $(-2,4)$, $(4,4)$; minimum $(1,-0.5)$.`], ans: S`domain $[-2,4]$; range $[-0.5,4]$` },
  { title: "A model", q: S`Profit is $P(n)=30n-2000$ for $n$ items, $0\le n\le200$. State the range.`,
    steps: [S`$P(0)=-2000$, $P(200)=4000$; $n$ is a whole number.`], ans: S`$-2000\le P\le4000$ (in steps of 30)` },
];

const PROBLEMS = [
  { level: 1, q: S`State the domain of $\frac{1}{x-9}$.`, recap: "Fraction.", ans: S`$x\ne9$` },
  { level: 1, q: S`State the domain of $\sqrt{x+6}$.`, recap: "Root.", ans: S`$x\ge-6$` },
  { level: 1, q: S`State the range of $x^2+2$.`, recap: "Quadratic range.", ans: S`$y\ge2$` },
  { level: 2, q: S`Find the range of $f(x)=2x-3$ for $1\le x\le5$.`, recap: "Linear on an interval.", ans: S`$[-1,7]$` },
  { level: 2, q: S`Find the range of $f(x)=(x+3)^2-1$ for $-5\le x\le0$.`, recap: "Vertex inside.", ans: S`$[-1,8]$` },
  { level: 2, q: S`State the domain of $\sqrt{12-3x}$.`, recap: "Root.", ans: S`$x\le4$` },
  { level: 2, q: S`State the domain of $\frac{x+1}{x^2-4}$.`, recap: "Two excluded values.", ans: S`$x\ne\pm2$` },
  { level: 2, q: S`Find the range of $\frac4x$ for $x\ge2$.`, recap: "Decreasing function.", ans: S`$0<y\le2$`,
    fig: F({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 4 }, curves: [{ f: (x) => 4 / x, a: 2, b: 9 }], points: [pt(2, 2)] }) },
  { level: 3, space: 4, q: S`Find the range of $f(x)=x^2+2x-3$ for $-2\le x\le2$.`, recap: "Restricted quadratic.", ans: S`$[-4,5]$` },
  { level: 3, space: 4, q: S`State the domain and range of $\sqrt{16-x^2}$.`, recap: "Semicircle.", ans: S`$[-4,4]$; $[0,4]$` },
  { level: 3, space: 4, q: S`State the domain of $\frac{\sqrt{x-1}}{x-4}$.`, recap: "Two restrictions.", ans: S`$x\ge1$, $x\ne4$` },
  { level: 3, space: 5, q: S`A rectangle has perimeter 24 cm and width $x$ cm, so $A=x(12-x)$. Find a sensible domain and the range.`, recap: "Model.", ans: S`$0<x<12$; $0<A\le36$`,
    fig: F({ view: { xmin: -1, xmax: 13, ymin: -4, ymax: 40 }, curves: [{ f: (x) => x * (12 - x), a: 0, b: 12 }], points: [pt(6, 36, null, "amber")], step: { x: 1, y: 4 } }) },
  { level: 3, space: 4, q: S`Find the range of $f(x)=\frac{1}{x^2+1}$, $x\in\mathbb R$.`, recap: "Bounded function.", ans: S`$0<y\le1$` },
];

export const WS = {
  code: "2.4",
  title: "Domain and Range",
  bigideas: S`The domain is the set of allowed inputs: avoid zero denominators and square roots of negatives, and respect any context. The range is the set of outputs: find it from the graph, checking end points of the domain and any turning point inside it. Use interval notation ($[\,]$ include, $(\,)$ exclude) or set notation.`,
  goals: ["Find natural domains.", "Use interval and set notation.", "Find ranges from graphs.", "Handle restricted domains and models."],
  curriculum: "SL 2.2",
  vocab: [["Domain", "allowed inputs"], ["Range", "outputs produced"], ["Interval notation", "$[a,b)$ etc."]],
  hook: "Ask what inputs a calculator refuses for 1/x and for the square-root key. Use the answers to introduce natural domains.",
  concepts: [
    ["1. Restrictions", S`Fractions: denominator $\ne0$. Square roots: inside $\ge0$. Models: the context (time $\ge0$, lengths $>0$).`],
    ["2. Ranges from graphs", S`${F({ view: { xmin: -5, xmax: 3, ymin: -4, ymax: 7 }, curves: [{ f: (x) => (x + 1) ** 2 - 3, a: -4, b: 2 }], points: [pt(-4, 6), pt(2, 6), pt(-1, -3, null, "amber")] }, 5)} The minimum here is at the vertex, not an end point.`],
    ["3. Notation", S`$[a,b]$, $(a,b)$, $[a,\infty)$, $\{x\mid x\ne a\}$, $x\in\mathbb R$.`],
  ],
  tips: ["Domain first, then range.", "Check end points and turning points.", "Infinity always gets a round bracket.", "Denominator roots need strict inequalities.", "Context can shrink a domain."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

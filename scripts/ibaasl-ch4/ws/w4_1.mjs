// IB AA SL Worksheet 4.1 — The Reciprocal Function (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const hyp = (f, h, xmin, xmax, color = "violet") => [{ f, a: xmin, b: h - 0.02, color }, { f, a: h + 0.02, b: xmax, color }];
const AX = { vlines: [{ x: 0, color: "red", dash: true }], lines: [{ m: 0, b: 0, color: "red", dash: true }] };

const EXAMPLES = [
  { title: "Plotting y = 2/x", q: S`Complete a table for $y=\frac2x$ at $x=-4,-1,-\frac12,\frac12,1,4$ and sketch the graph.`,
    fig: F({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: hyp((x) => 2 / x, 0, -5, 5), ...AX, points: [pt(1, 2), pt(4, 0.5), pt(-1, -2), pt(0.5, 4, null, "green")] }),
    steps: [S`$y=-0.5,\,-2,\,-4,\,4,\,2,\,0.5$.`, "Two branches, in quadrants 1 and 3."], ans: "hyperbola, quadrants 1 and 3" },
  { title: "Features", q: S`State the asymptotes, domain and range of $y=-\frac8x$, and the quadrants of its branches.`,
    steps: [S`$x=0$ and $y=0$; $x\ne0$, $y\ne0$.`, S`$k<0$: quadrants 2 and 4.`], ans: "x = 0, y = 0; quadrants 2 and 4" },
  { title: "Finding k", q: S`$y=\frac kx$ passes through $(5,-1.2)$. Find $k$.`,
    steps: [S`$k=xy=5(-1.2)$.`], ans: S`$k=-6$` },
  { title: "Self-inverse", q: S`Show that $f(x)=-\frac4x$ is self-inverse and find where its graph meets $y=-x$.`,
    steps: [S`Swap: $x=-\frac4y\Rightarrow y=-\frac4x$.`, S`$-\frac4x=-x\Rightarrow x^2=4$.`], ans: S`$(2,-2)$ and $(-2,2)$` },
  { title: "Near the asymptote", q: S`Find $\frac{10}{x}$ for $x=0.1$, $0.01$ and $0.001$. What happens as $x\to0^+$?`,
    steps: [S`$100$, $1000$, $10\,000$.`], ans: "y grows without bound" },
  { title: "Inverse variation", q: "6 workers build a wall in 10 days. How long would 15 workers take, working at the same rate?",
    steps: [S`$wd=60$ worker-days.`, S`$d=\frac{60}{15}$.`], ans: "4 days" },
  { title: "Meeting a line", q: S`Find where $y=\frac{10}{x}$ meets $y=x+3$.`,
    fig: F({ view: { xmin: -7, xmax: 5, ymin: -7, ymax: 7 }, curves: [...hyp((x) => 10 / x, 0, -7, 5), { f: (x) => x + 3, color: "blue" }], points: [pt(2, 5, null, "red"), pt(-5, -2, null, "red")] }),
    steps: [S`$x^2+3x-10=0\Rightarrow(x+5)(x-2)=0$.`], ans: S`$(2,5)$ and $(-5,-2)$` },
  { title: "A rectangle under the curve", q: S`A rectangle has one corner at the origin and the opposite corner on $y=\frac{15}{x}$. Its height is 6. Find its width.`,
    steps: [S`$xy=15$ with $y=6$.`], ans: "2.5" },
  { title: "Gas pressure", q: S`Pressure varies inversely with volume. A gas is at 250 kPa in 2 L. Find the volume at 400 kPa.`,
    steps: [S`$PV=500$.`, S`$V=\frac{500}{400}$.`], ans: "1.25 L" },
];

const PROBLEMS = [
  { level: 1, q: S`For $f(x)=\frac{15}{x}$, find $f(-5)$.`, recap: "Evaluate.", ans: S`$-3$` },
  { level: 1, q: S`State the asymptotes of $y=\frac{11}{x}$.`, recap: "Asymptotes.", ans: S`$x=0$, $y=0$` },
  { level: 1, q: S`In which quadrants are the branches of $y=-\frac7x$?`, recap: "Quadrants.", ans: "2 and 4" },
  { level: 2, q: S`$y=\frac kx$ passes through $(-6,-4)$. Find $k$.`, recap: "Find k.", ans: "24" },
  { level: 2, q: S`$y$ varies inversely with $x$, and $y=12$ when $x=5$. Find $y$ when $x=20$.`, recap: "Inverse variation.", ans: "3" },
  { level: 2, q: S`Find where $y=\frac{16}{x}$ meets $y=x$.`, recap: "Meets y = x.", ans: S`$(4,4)$, $(-4,-4)$` },
  { level: 2, q: S`Sketch $y=-\frac6x$ on the grid, showing two points on each branch.`, recap: "Sketch.", ans: S`e.g. $(1,-6)$, $(3,-2)$, $(-2,3)$, $(-6,1)$`, fig: gridT({ xmin: -7, xmax: 7, ymin: -7, ymax: 7 }) },
  { level: 2, q: "A 240 km trip is made at a constant speed. How long does it take at 80 km/h?", recap: "Time = distance/speed.", ans: "3 h" },
  { level: 3, space: 4, q: S`Find where $y=\frac{12}{x}$ meets $y=x-1$.`, recap: "Line and hyperbola.", ans: S`$(4,3)$, $(-3,-4)$`,
    fig: F({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, curves: [...hyp((x) => 12 / x, 0, -6, 6), { f: (x) => x - 1, color: "blue" }] }) },
  { level: 3, space: 4, q: S`Find $c$ so that $y=-4x+c$ is a tangent to $y=\frac1x$.`, recap: "Tangent.", ans: S`$4x^2-cx+1=0$, $c^2=16$: $c=\pm4$` },
  { level: 3, space: 4, q: S`Show that $f(x)=\frac kx$ is self-inverse for every $k\ne0$.`, recap: "Self-inverse.", ans: S`swap: $x=\frac ky\Rightarrow y=\frac kx$` },
  { level: 3, space: 4, q: S`A table gives $x=2,4,5$ and $y=30,15,12$. Show that $y$ varies inversely with $x$ and find $y$ when $x=8$.`, recap: "From data.", ans: S`$xy=60$ each time; $7.5$` },
  { level: 3, space: 4, q: "4 identical pumps empty a pool in 9 hours. How many pumps are needed to empty it in 6 hours?", recap: "Inverse variation.", ans: "6 pumps" },
];

export const WS = {
  code: "4.1",
  title: "The Reciprocal Function",
  bigideas: S`The reciprocal function $f(x)=\frac1x$ has domain $x\ne0$ and range $y\ne0$; its graph is a hyperbola with asymptotes $x=0$ and $y=0$. $y=\frac kx$ has branches in quadrants 1 and 3 when $k>0$ and 2 and 4 when $k<0$. It is self-inverse, so the graph is symmetric in $y=x$. Inverse variation means $xy=k$ is constant.`,
  goals: ["Sketch y = k/x.", "State asymptotes, domain and range.", "Use the self-inverse property.", "Model inverse variation."],
  curriculum: "SL 2.8",
  vocab: [["Asymptote", "a line the graph approaches"], ["Self-inverse", S`$f^{-1}=f$`], ["Inverse variation", S`$xy=k$`]],
  hook: "Ask: if 4 people share a pizza each gets a quarter; what if 8 people share it? 100? Plot slices per person against people.",
  concepts: [
    ["1. The graph", S`${F({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: hyp((x) => 1 / x, 0, -5, 5), ...AX }, 5)} Never touches either axis.`],
    ["2. The constant k", S`$|k|$ stretches; the sign chooses the quadrants. Every point has $xy=k$.`],
    ["3. Symmetry", S`Swapping $x$ and $y$ leaves $y=\frac kx$ unchanged: symmetric in $y=x$ and $y=-x$.`],
  ],
  tips: ["x = 0 is never in the domain.", "Find k from xy.", "Sketch both branches.", "Label the asymptotes.", "In models use only the sensible branch."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

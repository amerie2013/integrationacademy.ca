// MHF4U Worksheet 3.1 — Reciprocal of a Linear Function (teacher edition)
import { R, gridT, pt, F, rat } from "./figT.mjs";
const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -6, ymax: 6 };

const EXAMPLES = [
  { title: "Sketch from the line", q: S`Sketch $f(x)=x+2$ and its reciprocal $g(x)=\dfrac1{x+2}$ on the same axes.`,
    fig: F({ view: V, curves: [{ f: (x) => x + 2, color: "blue" }, ...rat((x) => 1 / (x + 2), [-2], V)], vlines: [{ x: -2, color: "red", dash: true }], points: [pt(-1, 1), pt(-3, -1), pt(0, 0.5, false)] }),
    steps: [S`The zero of $f$ is $x=-2$, so $g$ has the vertical asymptote $x=-2$.`, S`As $|x|$ grows, $|f(x)|$ grows, so $g(x)\to0$: the horizontal asymptote is $y=0$.`, S`Invariant points are where $f(x)=\pm1$: $x+2=1$ gives $(-1,1)$ and $x+2=-1$ gives $(-3,-1)$.`, S`The y-intercept of $g$ is $\frac12$. $g$ has the same sign as $f$ everywhere.`], ans: S`VA $x=-2$, HA $y=0$, through $(-1,1)$, $(-3,-1)$, $(0,\tfrac12)$` },
  { title: "All the key features", q: S`State the asymptotes, domain, range and intercepts of $g(x)=\dfrac1{3x-6}$.`,
    fig: R((x) => 1 / (3 * x - 6), [2], V, 0, [pt(0, -1 / 6, false)]),
    steps: [S`$3x-6=0$ when $x=2$: VA $x=2$. HA $y=0$.`, S`Domain $\{x\in\mathbb{R}\mid x\ne2\}$; range $\{y\in\mathbb{R}\mid y\ne0\}$.`, S`$\frac1{3x-6}$ can never equal 0 (the numerator is 1), so there is no x-intercept.`, S`$g(0)=\frac1{-6}=-\frac16$.`], ans: S`VA $x=2$, HA $y=0$, $x\ne2$, $y\ne0$, y-intercept $-\frac16$` },
  { title: "Behaviour near the asymptote", q: S`Use a table to describe $g(x)=\dfrac1{x-4}$ as $x$ approaches 4 from each side.`,
    fig: R((x) => 1 / (x - 4), [4], { xmin: -2, xmax: 10, ymin: -6, ymax: 6 }, 0),
    steps: [S`Right side: $g(4.1)=10$, $g(4.01)=100$, $g(4.001)=1000$. Values grow without bound.`, S`Left side: $g(3.9)=-10$, $g(3.99)=-100$, $g(3.999)=-1000$.`], ans: S`$x\to4^+$: $g\to+\infty$; $x\to4^-$: $g\to-\infty$` },
  { title: "A decreasing line", q: S`Sketch $g(x)=\dfrac1{4-x}$ and state where it increases.`,
    fig: F({ view: { xmin: -2, xmax: 10, ymin: -6, ymax: 6 }, curves: [{ f: (x) => 4 - x, color: "blue" }, ...rat((x) => 1 / (4 - x), [4], { xmin: -2, xmax: 10 })], vlines: [{ x: 4, color: "red", dash: true }], points: [pt(3, 1), pt(5, -1)] }),
    steps: [S`VA $x=4$; HA $y=0$; y-intercept $\frac14$.`, S`Invariant points: $4-x=1$ gives $(3,1)$; $4-x=-1$ gives $(5,-1)$.`, S`$f(x)=4-x$ decreases everywhere, so on each branch the reciprocal increases.`], ans: S`increasing on $(-\infty,4)$ and on $(4,\infty)$` },
  { title: "A steeper line", q: S`Find the invariant points and the asymptotes of $g(x)=\dfrac1{2x-1}$.`,
    fig: R((x) => 1 / (2 * x - 1), [0.5], { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, 0, [pt(1, 1), pt(0, -1)]),
    steps: [S`$2x-1=0$ at $x=\frac12$: VA $x=\frac12$; HA $y=0$.`, S`$2x-1=1\Rightarrow x=1$: $(1,1)$.`, S`$2x-1=-1\Rightarrow x=0$: $(0,-1)$.`], ans: S`$(1,1)$ and $(0,-1)$; VA $x=\frac12$, HA $y=0$` },
  { title: "A vertical stretch", q: S`Describe and sketch $g(x)=\dfrac3{x+1}$.`,
    fig: R((x) => 3 / (x + 1), [-1], V, 0, [pt(0, 3), pt(2, 1), pt(-2, -3)]),
    steps: [S`It is $\frac1x$ stretched vertically by 3 and shifted 1 unit left.`, S`VA $x=-1$; HA $y=0$.`, S`Points: $g(0)=3$, $g(2)=1$, $g(-2)=-3$.`], ans: S`stretch by 3, left 1; VA $x=-1$, HA $y=0$` },
  { title: "An equation from a graph", q: S`A function $y=\dfrac1{kx+c}$ has VA $x=2$ and passes through $\left(3,\tfrac12\right)$. Find it.`,
    fig: R((x) => 1 / (2 * x - 4), [2], { xmin: -3, xmax: 7, ymin: -4, ymax: 4 }, 0, [pt(3, 0.5, false)]),
    steps: [S`The denominator is 0 at $x=2$, so $kx+c=k(x-2)$.`, S`At $(3,\frac12)$: $\frac1{k(1)}=\frac12$, so $k=2$.`, S`$y=\frac1{2(x-2)}=\frac1{2x-4}$.`], ans: S`$y=\dfrac1{2x-4}$` },
  { title: "Rates of change", q: S`For $g(x)=\dfrac1{x-1}$, find the average rate of change on $[2,3]$ and on $[3,4]$, and estimate the instantaneous rate at $x=2$.`,
    fig: F({ view: { xmin: 0, xmax: 6, ymin: -1, ymax: 4 }, curves: [{ f: (x) => 1 / (x - 1), a: 1.25, b: 6, color: "violet" }], vlines: [{ x: 1, color: "red", dash: true }], points: [pt(2, 1), pt(3, 0.5)] }),
    steps: [S`$g(2)=1$, $g(3)=\frac12$, $g(4)=\frac13$.`, S`On $[2,3]$: $\frac{1/2-1}{1}=-\frac12$. On $[3,4]$: $\frac{1/3-1/2}{1}=-\frac16$. The curve flattens.`, S`Shrink the interval: $\frac{g(2.001)-g(2)}{0.001}=\frac{0.999001-1}{0.001}\approx-1$.`], ans: S`$-\frac12$, $-\frac16$; about $-1$ at $x=2$` },
  { title: "Solving from the reciprocal", q: S`Find $x$ when $\dfrac1{x+3}=4$, and explain the answer on the graph.`,
    fig: F({ view: { xmin: -6, xmax: 2, ymin: -6, ymax: 6 }, curves: [...rat((x) => 1 / (x + 3), [-3], { xmin: -6, xmax: 2 }), { f: () => 4, color: "green" }], vlines: [{ x: -3, color: "red", dash: true }], points: [pt(-2.75, 4)] }),
    steps: [S`Take reciprocals: $x+3=\frac14$.`, S`$x=\frac14-3=-\frac{11}4$. This is where $y=4$ meets the right branch.`], ans: S`$x=-\frac{11}4$` },
];

const PROBLEMS = [
  { level: 1, q: S`State the vertical asymptote of $y=\dfrac1{x-7}$.`, ans: S`$x=7$` },
  { level: 1, q: S`State the domain and range of $y=\dfrac1{x+6}$.`, ans: S`$x\ne-6$; $y\ne0$` },
  { level: 1, q: S`Find the y-intercept of $y=\dfrac1{2x-8}$.`, ans: S`$-\frac18$` },
  { level: 2, q: S`Sketch $f(x)=x-2$ and $g(x)=\dfrac1{x-2}$ on the grid, labelling the asymptotes and invariant points.`, fig: gridT({ xmin: -5, xmax: 8, ymin: -5, ymax: 5 }), ans: S`VA $x=2$, HA $y=0$; $(3,1)$, $(1,-1)$` },
  { level: 2, q: S`For $g(x)=\dfrac1{-2x+6}$, find the asymptotes, the y-intercept and where $g(x)>0$.`, ans: S`VA $x=3$, HA $y=0$; $\frac16$; $x\lt3$` },
  { level: 2, q: S`Make a table for $g(x)=\dfrac1{x+7}$ at $x=-6.9,\ -6.99,\ -7.1,\ -7.01$ and describe the behaviour near the asymptote.`, ans: S`$10,\ 100,\ -10,\ -100$; $+\infty$ from the right, $-\infty$ from the left` },
  { level: 2, q: S`$y=\dfrac1{kx+c}$ has VA $x=-4$ and passes through $\left(-3,\tfrac15\right)$. Find the equation.`, ans: S`$y=\dfrac1{5x+20}$` },
  { level: 2, q: S`Solve $\dfrac1{3x-2}=5$.`, ans: S`$x=\frac{11}{15}$` },
  { level: 3, space: 5, q: S`$g(x)=\dfrac1{kx+c}$ passes through $\left(1,\tfrac13\right)$ and $\left(4,-\tfrac13\right)$. Find $k$, $c$ and the vertical asymptote.`, ans: S`$k=-2$, $c=5$; VA $x=\frac52$` },
  { level: 3, space: 5, q: S`For $g(x)=\dfrac1{x+2}$, find the average rate of change on $[0,2]$ and on $[2,4]$, then estimate the instantaneous rate at $x=2$. Explain the pattern using the graph.`, fig: gridT({ xmin: -1, xmax: 6, ymin: -1, ymax: 2 }), ans: S`$-\frac18$; $-\frac1{24}$; about $-\frac1{16}$: the branch flattens` },
  { level: 3, space: 5, q: S`$g(x)=\dfrac1{x-1}$ decreases on each branch, yet $g(2)>g(0)$. Explain why this does not contradict the statement, and state the intervals of decrease correctly.`, ans: S`$0$ and $2$ lie on different branches, separated by $x=1$; decreasing on $(-\infty,1)$ and on $(1,\infty)$` },
  { level: 3, space: 5, q: S`$y=\dfrac a{x+c}$ has VA $x=3$ and passes through $(5,2)$. Find $a$ and $c$, then find where $y=-1$.`, ans: S`$a=4$, $c=-3$; $x=-1$` },
  { level: 3, space: 5, q: S`Find all $x$ with $\dfrac1{2x-3}>1$, and explain the answer using the graph of $y=2x-3$.`, fig: gridT({ xmin: -1, xmax: 4, ymin: -3, ymax: 4 }), ans: S`$\frac32\lt x\lt2$ (the line must be between 0 and 1)` },
];

export const WS = {
  code: "3.1",
  title: "Reciprocal of a Linear Function",
  bigideas: S`The reciprocal of $f(x)=kx+c$ is $g(x)=\dfrac1{kx+c}$. Every feature of $g$ can be read from the line: the zero of the line gives the vertical asymptote, large values of the line give the horizontal asymptote $y=0$, the points where the line equals $\pm1$ stay fixed, and the two functions have the same sign everywhere. Where the line increases, the reciprocal decreases, branch by branch.`,
  goals: ["Find the vertical and horizontal asymptotes of a reciprocal of a linear function.", "State domain, range, intercepts and intervals of increase and decrease.", "Sketch the reciprocal from the line using invariant points.", "Find an equation from a graph and compare rates of change on a branch."],
  curriculum: "C2.1, C2.3",
  vocab: [["Reciprocal", "$\\frac1{f(x)}$, defined wherever $f(x)\\ne0$"], ["Vertical asymptote", "a vertical line the graph approaches but never meets; here it is the zero of $f$"], ["Horizontal asymptote", "the line the graph approaches as $|x|\\to\\infty$; here $y=0$"], ["Invariant point", "a point on both $f$ and $\\frac1f$; it occurs where $f(x)=\\pm1$"], ["Branch", "one connected piece of the graph"]],
  hook: S`A 100 km drive takes $\frac{100}{v}$ hours at speed $v$. Double the speed and the time halves; drive very slowly and the time grows without limit. What does the graph of time against speed look like near $v=0$?`,
  concepts: [
    ["1. From a line to its reciprocal", S`Since $g(x)=\frac1{f(x)}$, each $y$-value of $g$ is the reciprocal of the $y$-value of $f$. Small $|f|$ gives large $|g|$, and large $|f|$ gives small $|g|$.
${F({ view: V, curves: [{ f: (x) => x - 1, color: "blue" }, ...rat((x) => 1 / (x - 1), [1], V)], vlines: [{ x: 1, color: "red", dash: true }], points: [pt(2, 1), pt(0, -1)] }, 6.5, "The line y = x − 1 (blue) and its reciprocal (violet) share (2, 1) and (0, −1).")}`],
    ["2. The sketching procedure", S`\textbf{(a)} Draw the line. \textbf{(b)} Draw the vertical asymptote at the zero of the line, and the horizontal asymptote $y=0$. \textbf{(c)} Mark the invariant points where the line equals $1$ and $-1$. \textbf{(d)} Find the y-intercept $g(0)=\frac1{f(0)}$. \textbf{(e)} Draw each branch through its points, approaching both asymptotes. $g$ is positive where the line is above the axis and negative where it is below.`],
    ["3. Key facts for $g(x)=\\frac1{kx+c}$", S`\begin{tabular}{@{}ll@{}}\textbf{Vertical asymptote} & $x=-\frac ck$\\ \textbf{Horizontal asymptote} & $y=0$\\ \textbf{Domain} & $x\ne-\frac ck$\\ \textbf{Range} & $y\ne0$\\ \textbf{x-intercept} & none\\ \textbf{y-intercept} & $\frac1c$ (when $c\ne0$)\\ \textbf{Monotonic behaviour} & opposite to the line, on each branch\end{tabular}`],
    ["4. Why increasing becomes decreasing", S`If $k>0$ and $x$ increases on one branch, then $f(x)$ increases and keeps its sign, so $\frac1{f(x)}$ decreases. If $k\lt0$, the reciprocal increases. Each statement holds on one branch at a time; a value on the left branch cannot be compared with a value on the right branch this way.
${R((x) => -1 / (x + 1), [-1], { xmin: -6, xmax: 4, ymin: -5, ymax: 5 }, 0, [pt(0, -1), pt(-2, 1)])}`],
    ["5. Rates of change", S`The average rate of change of $g$ on $[a,b]$ is $\frac{g(b)-g(a)}{b-a}$. Near the vertical asymptote the graph is very steep and the rate is large in size; far away it is close to 0. To estimate an instantaneous rate at $x=a$, use a very short interval beginning at $a$.`],
  ],
  tips: ["Students often draw an x-intercept: the numerator is 1, so $g$ can never be 0.", "Do not write that the function is decreasing on $x\\ne a$: name two separate intervals.", "The asymptote is at the zero of the denominator, including the sign: $\\frac1{x+3}$ has $x=-3$.", "Invariant points come from $f(x)=\\pm1$; forgetting $-1$ loses one of them.", "Graphing technology may draw a false vertical line at the asymptote."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

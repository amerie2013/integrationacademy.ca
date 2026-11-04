// MHF4U Worksheet 3.2 — Reciprocal of a Quadratic Function (teacher edition)
import { R, gridT, pt, F } from "./figT.mjs";
const S = String.raw;

const EXAMPLES = [
  { title: "Two vertical asymptotes", q: S`Find the key features of $g(x)=\dfrac1{x^2-9}$ and sketch it.`,
    fig: R((x) => 1 / (x * x - 9), [-3, 3], { xmin: -7, xmax: 7, ymin: -2, ymax: 2 }, 0, [pt(0, -1 / 9, false)], { step: { x: 1, y: 0.5 } }),
    steps: [S`$x^2-9=(x-3)(x+3)$: VAs $x=-3$ and $x=3$. HA $y=0$.`, S`The vertex of $f$ is $(0,-9)$, so $g$ has a local maximum at $\left(0,-\frac19\right)$.`, S`$f>0$ for $|x|>3$ (outer branches above the axis); $f\lt0$ between the zeros.`, S`Range: $y\le-\frac19$ or $y>0$.`], ans: S`VAs $x=\pm3$, HA $y=0$, local max $\left(0,-\frac19\right)$` },
  { title: "No vertical asymptote", q: S`Describe $g(x)=\dfrac1{x^2+2}$.`,
    fig: F({ view: { xmin: -5, xmax: 5, ymin: -0.5, ymax: 1 }, curves: [{ f: (x) => 1 / (x * x + 2), color: "violet" }], points: [pt(0, 0.5)], step: { x: 1, y: 0.25 } }),
    steps: [S`$x^2+2\ge2$ for every $x$: no zeros, so no vertical asymptote.`, S`The minimum of $f$ gives the maximum of $g$: $\left(0,\frac12\right)$.`, S`Range: $0\lt y\le\frac12$.`], ans: S`one smooth hump: max $\left(0,\frac12\right)$, HA $y=0$, range $(0,\frac12]$` },
  { title: "A double zero", q: S`Describe $g(x)=\dfrac1{(x+2)^2}$.`,
    fig: R((x) => 1 / (x + 2) ** 2, [-2], { xmin: -7, xmax: 3, ymin: -1, ymax: 5 }, 0, [pt(0, 0.25, false)]),
    steps: [S`One vertical asymptote $x=-2$. Both branches are positive because a square is never negative.`, S`Increasing on $(-\infty,-2)$, decreasing on $(-2,\infty)$. y-intercept $\frac14$.`], ans: S`VA $x=-2$, HA $y=0$, range $y>0$` },
  { title: "Factor, then find the turning point", q: S`Find the asymptotes, turning point and y-intercept of $g(x)=\dfrac1{x^2-4x+3}$.`,
    fig: R((x) => 1 / (x * x - 4 * x + 3), [1, 3], { xmin: -2, xmax: 6, ymin: -3, ymax: 3 }, 0, [pt(2, -1), pt(0, 1 / 3, false)]),
    steps: [S`$(x-1)(x-3)$: VAs $x=1$, $x=3$.`, S`Vertex of $f$ at $x=\frac{1+3}2=2$: $f(2)=-1$, so $g(2)=-1$. This is an invariant point.`, S`$g(0)=\frac13$.`], ans: S`VAs $x=1,3$; local max $(2,-1)$; y-intercept $\frac13$` },
  { title: "Completing the square", q: S`Find the maximum and range of $g(x)=\dfrac1{x^2-6x+10}$, and where it increases.`,
    fig: F({ view: { xmin: -1, xmax: 7, ymin: -0.5, ymax: 1.5 }, curves: [{ f: (x) => 1 / (x * x - 6 * x + 10), color: "violet" }], points: [pt(3, 1)], step: { x: 1, y: 0.5 } }),
    steps: [S`$x^2-6x+10=(x-3)^2+1\ge1$: no zeros.`, S`Max of $g$ is $\frac11=1$ at $x=3$.`, S`$f$ decreases for $x\lt3$, so $g$ increases there.`], ans: S`max $(3,1)$; range $(0,1]$; increasing on $(-\infty,3)$` },
  { title: "A negative reciprocal", q: S`State the turning point and range of $g(x)=-\dfrac1{x^2-1}$.`,
    fig: R((x) => -1 / (x * x - 1), [-1, 1], { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, 0, [pt(0, 1)]),
    steps: [S`VAs $x=\pm1$. At $x=0$: $-\frac1{-1}=1$, and it is a local minimum.`, S`Middle branch: $y\ge1$. Outer branches: $y\lt0$.`], ans: S`local min $(0,1)$; range $y\lt0$ or $y\ge1$` },
  { title: "A non-monic quadratic", q: S`Find the asymptotes and turning point of $g(x)=\dfrac1{2x^2+x-1}$.`,
    fig: R((x) => 1 / (2 * x * x + x - 1), [-1, 0.5], { xmin: -4, xmax: 4, ymin: -3, ymax: 3 }, 0, [pt(-0.25, -8 / 9, false)]),
    steps: [S`$(2x-1)(x+1)$: VAs $x=\frac12$, $x=-1$.`, S`Axis at $x=\frac{-1+1/2}2=-\frac14$.`, S`$f\left(-\frac14\right)=\frac18-\frac14-1=-\frac98$, so $g=-\frac89$.`], ans: S`VAs $x=-1,\frac12$; local max $\left(-\frac14,-\frac89\right)$` },
  { title: "Intervals of increase and decrease", q: S`State where $g(x)=\dfrac1{x^2-2x-8}$ increases and decreases.`,
    fig: R((x) => 1 / (x * x - 2 * x - 8), [-2, 4], { xmin: -6, xmax: 8, ymin: -1, ymax: 1 }, 0, [pt(1, -1 / 9, false)], { step: { x: 1, y: 0.25 } }),
    steps: [S`$(x-4)(x+2)$: VAs $x=-2$, $x=4$. Vertex of $f$ is $(1,-9)$.`, S`$f$ decreases for $x\lt1$, so $g$ increases on $(-\infty,-2)$ and $(-2,1)$.`, S`$f$ increases for $x>1$, so $g$ decreases on $(1,4)$ and $(4,\infty)$.`], ans: S`increasing: $(-\infty,-2),(-2,1)$; decreasing: $(1,4),(4,\infty)$` },
  { title: "An equation from features", q: S`A function $y=\dfrac1{f(x)}$, $f$ quadratic, has VAs $x=0$ and $x=6$ and a local maximum at $\left(3,-\tfrac13\right)$. Find the equation.`,
    fig: R((x) => 3 / (x * x - 6 * x), [0, 6], { xmin: -3, xmax: 9, ymin: -3, ymax: 3 }, 0, [pt(3, -1 / 3, false)]),
    steps: [S`$f(x)=kx(x-6)$.`, S`$g(3)=-\frac13$ means $f(3)=-3$: $k(3)(-3)=-3$, so $k=\frac13$.`, S`$y=\dfrac1{\frac13x(x-6)}=\dfrac3{x^2-6x}$.`], ans: S`$y=\dfrac3{x^2-6x}$` },
];

const PROBLEMS = [
  { level: 1, q: S`State the vertical asymptotes of $y=\dfrac1{x^2-16}$.`, ans: S`$x=\pm4$` },
  { level: 1, q: S`Find the y-intercept of $y=\dfrac1{x^2+5x+4}$.`, ans: S`$\frac14$` },
  { level: 1, q: S`How many vertical asymptotes does $y=\dfrac1{x^2+7}$ have?`, ans: "none" },
  { level: 2, q: S`Find the turning point of $y=\dfrac1{x^2-10x+21}$.`, ans: S`$\left(5,-\frac14\right)$` },
  { level: 2, q: S`State the maximum and range of $y=\dfrac1{x^2+3}$.`, ans: S`max $\frac13$; range $(0,\frac13]$` },
  { level: 2, q: S`Sketch $y=\dfrac1{(x+1)(x-3)}$ on the grid, labelling asymptotes, turning point and y-intercept.`, fig: gridT({ xmin: -4, xmax: 6, ymin: -2, ymax: 2 }, { x: 1, y: 0.5 }), ans: S`VAs $x=-1,3$; HA $y=0$; $\left(1,-\frac14\right)$; y-intercept $-\frac13$` },
  { level: 2, q: S`State the turning point and intervals of increase and decrease of $y=\dfrac1{x^2+4x+5}$.`, ans: S`max $(-2,1)$; increasing on $(-\infty,-2)$, decreasing on $(-2,\infty)$` },
  { level: 2, q: S`Solve $\dfrac1{(x-3)^2}=4$.`, ans: S`$x=\frac52$ or $x=\frac72$` },
  { level: 3, space: 5, q: S`$y=\dfrac1{x^2+bx+c}$ has VAs $x=-3$ and $x=5$. Find $b$, $c$ and the turning point.`, ans: S`$b=-2$, $c=-15$; $\left(1,-\frac1{16}\right)$` },
  { level: 3, space: 5, q: S`For which $k$ does $y=\dfrac1{x^2+6x+k}$ have no, one, or two vertical asymptotes? State the range when $k=10$.`, ans: S`$k>9$ none; $k=9$ one; $k\lt9$ two; for $k=10$: $(0,1]$` },
  { level: 3, space: 5, q: S`For $g(x)=\dfrac1{3x^2-12x+13}$, find the maximum by completing the square, then find the average rate of change on $[2,3]$.`, fig: gridT({ xmin: -1, xmax: 5, ymin: -1, ymax: 2 }, { x: 1, y: 0.5 }), ans: S`$3(x-2)^2+1$: max $(2,1)$; $g(3)=\frac14$, rate $-\frac34$` },
  { level: 3, space: 5, q: S`Explain why the vertex $(h,k)$ of a parabola gives a turning point of its reciprocal when $k\ne0$, and why there is no turning point at $x=h$ when $k=0$.`, ans: S`$\frac1f$ reverses increasing and decreasing, so a minimum becomes a maximum at $\left(h,\frac1k\right)$; if $k=0$ then $x=h$ is a vertical asymptote` },
  { level: 3, space: 5, q: S`Solve $\dfrac1{x^2-1}\ge\dfrac13$, and show your reasoning on a sketch.`, fig: gridT({ xmin: -4, xmax: 4, ymin: -2, ymax: 2 }, { x: 1, y: 0.5 }), ans: S`$0\lt x^2-1\le3$: $[-2,-1)\cup(1,2]$` },
];

export const WS = {
  code: "3.2",
  title: "Reciprocal of a Quadratic Function",
  bigideas: S`The reciprocal of a quadratic has one of three shapes, set by the number of real zeros of the quadratic. Two zeros give two vertical asymptotes and three branches; one double zero gives one asymptote with both branches on the same side; no zeros give a single smooth hump with no vertical asymptote. If the parabola has its vertex at $(h,k)$ with $k\ne0$, the reciprocal has a turning point at $\left(h,\frac1k\right)$. The horizontal asymptote is always $y=0$.`,
  goals: ["Find vertical asymptotes from the zeros of a quadratic.", "Find the turning point from the vertex.", "Recognize the three shapes and state domain and range.", "State intervals of increase and decrease and sketch from the parabola."],
  curriculum: "C2.1, C2.3",
  vocab: [["Turning point", "a local maximum or minimum of the graph"], ["Double zero", "a zero of order 2: one asymptote, both branches on the same side"], ["Discriminant", "$b^2-4ac$ tells how many real zeros, and so how many vertical asymptotes"], ["Invariant point", "where $f(x)=\\pm1$"]],
  hook: S`Sketch three parabolas: one crossing the x-axis twice, one touching it, one missing it. Predict the shape of each reciprocal before seeing any table of values.`,
  concepts: [
    ["1. Three shapes", S`Each shape comes from the number of zeros of $f(x)=ax^2+bx+c$. Two zeros give three branches, as in the first figure. A double zero gives two branches on the same side, as in the second. No zeros give a single hump, as in the third.
${R((x) => 1 / (x * x - 4), [-2, 2], { xmin: -5, xmax: 5, ymin: -2, ymax: 2 }, 0, [], { step: { x: 1, y: 0.5 } })}
${R((x) => 1 / (x - 1) ** 2, [1], { xmin: -4, xmax: 6, ymin: -1, ymax: 4 }, 0)}
${F({ view: { xmin: -5, xmax: 5, ymin: -0.5, ymax: 1.5 }, curves: [{ f: (x) => 1 / (x * x + 1), color: "violet" }], step: { x: 1, y: 0.5 } })}`],
    ["2. The turning point", S`Between two zeros of an upward parabola, $f$ is negative and reaches its lowest value at the vertex. Its reciprocal is negative there too and reaches a local maximum at the same $x$. In general, a vertex $(h,k)$ with $k\ne0$ gives the turning point $\left(h,\frac1k\right)$; a minimum of $f$ with $k>0$ gives the maximum of $g$. To find the vertex, use the midpoint of the zeros or complete the square.`],
    ["3. The sketching procedure", S`\textbf{(a)} Factor or use the discriminant to find zeros; draw vertical asymptotes. \textbf{(b)} Draw $y=0$. \textbf{(c)} Find the vertex and plot $\left(h,\frac1k\right)$. \textbf{(d)} Find the invariant points $f(x)=\pm1$ and the y-intercept $\frac1{f(0)}$. \textbf{(e)} Use the sign of $f$ on each interval to place each branch. $g$ has the same sign as $f$.`],
    ["4. Key facts", S`\begin{tabular}{@{}lll@{}}\textbf{Zeros of $f$} & \textbf{Vertical asymptotes} & \textbf{Range, for $a>0$}\\ two & two & $y\le\frac1k$ or $y>0$\\ one & one & $y>0$\\ none & none & $0\lt y\le\frac1k$\end{tabular}
\par Where $f$ increases, $g$ decreases, on each interval of its domain. For $a\lt0$ the signs are reversed.`],
  ],
  tips: ["Always factor out common factors first; $\\frac1{2x^2-8}$ has zeros $\\pm2$.", "The turning point's y-value is $\\frac1k$, not $k$.", "A double zero gives branches on the SAME side of the x-axis.", "Reciprocals of quadratics do not cross $y=0$: they have no x-intercepts.", "Give increasing and decreasing as separate intervals split at each asymptote."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

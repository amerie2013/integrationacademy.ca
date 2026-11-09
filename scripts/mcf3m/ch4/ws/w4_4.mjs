// MCF3M Worksheet 4.4 — The Discriminant and the Number of Roots (teacher edition)
import { F, pt } from "../../ws/figT.mjs";
const S = String.raw;
const C = (fs, view, pts = [], step, lines = []) => F({ view, curves: fs.map((f, i) => ({ f, color: ["violet", "blue", "red"][i] })), points: pts, step, lines });

const EXAMPLES = [
  { title: "Two roots", q: S`Find $D$ and the number of roots of $x^2-3x-10=0$.`,
    fig: C([(x) => x * x - 3 * x - 10], { xmin: -4, xmax: 7, ymin: -13, ymax: 8 }, [pt(5, 0, null, "amber"), pt(-2, 0, null, "amber")], { x: 1, y: 2 }),
    steps: [S`$D=9+40=49>0$: two roots.`, S`$D$ is a perfect square, so they are rational: $(x-5)(x+2)$.`, S`The graph crosses twice \checkmark`],
    ans: S`$D=49$; two` },
  { title: "One root", q: S`Find $D$ for $9x^2+6x+1=0$.`,
    fig: C([(x) => (3 * x + 1) ** 2], { xmin: -1.5, xmax: 1, ymin: -0.5, ymax: 5 }, [pt(-1 / 3, 0, null, "amber")], { x: 0.5, y: 1 }),
    steps: [S`$D=36-36=0$: one root.`, S`$x=-\frac b{2a}=-\frac13$.`, S`The vertex is on the axis \checkmark`],
    ans: S`$D=0$; one` },
  { title: "No roots", q: S`Find $D$ for $-x^2+2x-4=0$.`,
    fig: C([(x) => -x * x + 2 * x - 4], { xmin: -2, xmax: 4, ymin: -10, ymax: 2 }, [pt(1, -3, null, "amber")], { x: 1, y: 1 }),
    steps: [S`$a=-1$, $b=2$, $c=-4$: $D=4-16=-12<0$.`, S`No real roots.`, S`Maximum $-3$ is below the axis \checkmark`],
    ans: S`$D=-12$; none` },
  { title: "Factorable?", q: S`Does $3x^2+11x+6$ factor over the integers?`,
    fig: C([(x) => 3 * x * x + 11 * x + 6], { xmin: -4.5, xmax: 1, ymin: -5, ymax: 10 }, [pt(-3, 0, null, "amber"), pt(-2 / 3, 0, null, "amber")], { x: 1, y: 1 }),
    steps: [S`$D=121-72=49=7^2$: yes.`, S`Roots $\frac{-11\pm7}6=-\frac23,\,-3$.`, S`$(3x+2)(x+3)$ \checkmark`],
    ans: S`yes: $(3x+2)(x+3)$` },
  { title: "k for one root", q: S`Find $k$ so that $x^2-kx+36=0$ has one root.`,
    fig: C([(x) => (x - 6) ** 2, (x) => (x + 6) ** 2], { xmin: -10, xmax: 10, ymin: -1, ymax: 20 }, [pt(6, 0, null, "violet"), pt(-6, 0, null, "blue")], { x: 2, y: 2 }),
    steps: [S`$D=k^2-144=0$.`, S`$k=\pm12$.`, S`$k=12$: $(x-6)^2$; $k=-12$: $(x+6)^2$ \checkmark`],
    ans: S`$k=\pm12$` },
  { title: "k for two roots", q: S`Find $k$ so that $3x^2+6x+k=0$ has two roots.`,
    fig: C([(x) => 3 * x * x + 6 * x, (x) => 3 * x * x + 6 * x + 3, (x) => 3 * x * x + 6 * x + 5], { xmin: -3, xmax: 1, ymin: -4, ymax: 8 }, [], { x: 1, y: 1 }),
    steps: [S`$D=36-12k>0$.`, S`$k<3$.`, S`The violet ($k=0$) crosses, blue ($k=3$) touches, red ($k=5$) misses \checkmark`],
    ans: S`$k<3$` },
  { title: "k for no roots", q: S`For which $k$ does $kx^2-4x+2=0$ have no real roots?`,
    fig: C([(x) => 3 * x * x - 4 * x + 2], { xmin: -1, xmax: 2, ymin: -1, ymax: 6 }, [], { x: 0.5, y: 1 }),
    steps: [S`$D=16-8k<0$.`, S`$k>2$.`, S`\textbf{Check $k=3$:} $16-24<0$ \checkmark (graph shown)`],
    ans: S`$k>2$` },
  { title: "Line and parabola", q: S`How many times does $y=3x+1$ meet $y=x^2+x+2$?`,
    fig: F({ view: { xmin: -2, xmax: 4, ymin: -2, ymax: 12 }, curves: [{ f: (x) => x * x + x + 2, color: "violet" }], lines: [{ m: 3, b: 1, color: "blue" }], points: [pt(1, 4, null, "amber")], step: { x: 1, y: 2 } }),
    steps: [S`$x^2+x+2=3x+1\Rightarrow x^2-2x+1=0$.`, S`$D=4-4=0$: one point.`, S`The line is tangent at $(1,4)$ \checkmark`],
    ans: S`once, at $(1,4)$` },
  { title: "Reach a height?", q: S`$h(t)=-5t^2+16t+1$. Can it reach $14$ m?`,
    fig: F({ view: { xmin: -0.3, xmax: 3.5, ymin: -1, ymax: 16 }, curves: [{ f: (t) => -5 * t * t + 16 * t + 1, a: 0, b: 3.26, color: "violet" }], lines: [{ m: 0, b: 14, color: "red", dash: true }], points: [pt(1.6, 13.8, null, "amber")], step: { x: 0.5, y: 2 } }),
    steps: [S`$-5t^2+16t-13=0$: $D=256-260=-4<0$.`, S`No: the maximum is $h(1.6)=13.8$ m.`],
    ans: S`no (max $13.8$ m)` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the discriminant of $2x^2+5x-3=0$.`, ans: S`$49$` },
  { level: 1, q: S`How many roots has $x^2+4x+4=0$?`, ans: S`one` },
  { level: 1, q: S`How many roots has $3x^2-2x+5=0$?`, ans: S`none ($D=-56$)` },
  { level: 2, q: S`Does $4x^2-x-5$ factor? Use $D$.`, ans: S`$D=81$: yes, $(4x-5)(x+1)$` },
  { level: 2, q: S`Find $k$ so that $x^2+kx+49=0$ has one root.`, ans: S`$k=\pm14$` },
  { level: 2, q: S`Find $k$ so that $x^2-8x+k=0$ has two roots.`, ans: S`$k<16$` },
  { level: 2, q: S`Find $k$ so that $kx^2+2x-1=0$ has no roots.`, ans: S`$k<-1$` },
  { level: 2, q: S`How many times does $y=x^2-3$ meet $y=2x-4$?`, ans: S`$x^2-2x+1=0$: once` },
  { level: 3, space: 5, q: S`$h(t)=-5t^2+24t$. Find the largest height $k$ (to one decimal) for which $h(t)=k$ has a solution.`, ans: S`$28.8$ m` },
  { level: 3, space: 5, q: S`Find the values of $m$ for which $y=mx-1$ is tangent to $y=x^2+3$.`, ans: S`$x^2-mx+4=0$, $m=\pm4$` },
  { level: 3, space: 5, q: S`Explain, using the formula, why $D<0$ means no real roots. Illustrate with a graph.`, fig: F({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 8 } }), ans: S`$\sqrt{D}$ is not real` },
  { level: 3, space: 5, q: S`For which $c$ does $x^2+6x+c=0$ have roots that are integers? Give three values.`, ans: S`$D=36-4c$ a perfect square: e.g. $c=5,8,9$` },
  { level: 3, space: 5, q: S`Show that $x^2+bx-1=0$ has two real roots for every $b$.`, ans: S`$D=b^2+4>0$` },
];

export const WS = {
  code: "4.4",
  title: "The Discriminant and the Number of Roots",
  bigideas: S`The discriminant $D=b^2-4ac$ decides the number of real roots: two if $D>0$, one if $D=0$, none if $D<0$. These are the $x$-intercepts of $y=ax^2+bx+c$. With integer coefficients, a perfect-square $D$ means the quadratic factors. Setting conditions on $D$ finds parameters and answers whether a value can be reached.`,
  goals: ["Compute $D$.", "Count roots and intercepts.", "Decide factorability.", "Find parameters from conditions."],
  curriculum: "A1.7",
  vocab: [["Discriminant", "$b^2-4ac$"], ["Double root", "$D=0$"], ["Tangent", "touches at one point"], ["Perfect square", "$n^2$"]],
  hook: S`Without solving, which of $x^2-4x+3$, $x^2-4x+4$ and $x^2-4x+5$ equal zero for some $x$? Sketch to check.`,
  concepts: [
    ["1. The test", S`\begin{center}\begin{tabular}{@{}lll@{}}$D>0$ & two roots & crosses twice\\ $D=0$ & one root & touches\\ $D<0$ & none & misses\end{tabular}\end{center}
${C([(x) => x * x - 4 * x + 3, (x) => x * x - 4 * x + 4, (x) => x * x - 4 * x + 5], { xmin: -1, xmax: 5, ymin: -2, ymax: 6 }, [], { x: 1, y: 1 })}`],
    ["2. Parameters", S`Replace the condition by an equation or inequality in $D$ and solve for the parameter.`],
  ],
  tips: ["Brackets for negative coefficients.", "$D=0$ is one real root.", "Link every answer to the graph."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

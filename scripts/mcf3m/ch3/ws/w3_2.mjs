// MCF3M Worksheet 3.2 — Solving Quadratic Equations by Graphing (teacher edition)
import { F, pt } from "../../ws/figT.mjs";
const S = String.raw;
const G = (curves, view, pts, step, lines = []) => F({ view, curves: curves.map((f, i) => ({ f, color: ["violet", "blue", "red"][i] })), points: pts, step, lines });

const EXAMPLES = [
  { title: "Two roots", q: S`Solve $x^2-x-6=0$ from the graph of $y=x^2-x-6$.`,
    fig: G([(x) => x * x - x - 6], { xmin: -4, xmax: 5, ymin: -8, ymax: 8 }, [pt(-2, 0, null, "amber"), pt(3, 0, null, "amber")]),
    steps: [S`\textbf{Rule:} roots of $ax^2+bx+c=0$ are the $x$-intercepts of $y=ax^2+bx+c$.`, S`\textbf{Read:} the graph crosses at $x=-2$ and $x=3$.`, S`\textbf{Verify:} $4+2-6=0$ \checkmark; $9-3-6=0$ \checkmark`],
    ans: S`$x=-2$ or $x=3$` },
  { title: "Double root", q: S`Solve $x^2+4x+4=0$ graphically.`,
    fig: G([(x) => (x + 2) ** 2], { xmin: -5, xmax: 1, ymin: -1, ymax: 8 }, [pt(-2, 0, null, "amber")]),
    steps: [S`\textbf{Graph:} $y=(x+2)^2$ touches the axis at its vertex $(-2,0)$.`, S`One (double) root $x=-2$.`, S`\textbf{Verify:} $4-8+4=0$ \checkmark`],
    ans: S`$x=-2$` },
  { title: "No real roots", q: S`Show graphically that $x^2-2x+5=0$ has no real roots.`,
    fig: G([(x) => x * x - 2 * x + 5], { xmin: -2, xmax: 4, ymin: -1, ymax: 10 }, [pt(1, 4, null, "amber")]),
    steps: [S`$y=(x-1)^2+4$ has vertex $(1,4)$ and opens up.`, S`The lowest value is $4>0$: the graph never reaches the axis.`, S`So no real roots.`],
    ans: S`no real roots` },
  { title: "Rearrange first", q: S`Solve $x^2=2x+8$ by graphing.`,
    fig: G([(x) => x * x], { xmin: -4, xmax: 6, ymin: -2, ymax: 20 }, [pt(-2, 4, null, "amber"), pt(4, 16, null, "amber")], { x: 1, y: 2 }, [{ m: 2, b: 8, color: "blue" }]),
    steps: [S`\textbf{Method 1:} $x^2-2x-8=0$; $y=x^2-2x-8$ crosses at $-2$ and $4$.`, S`\textbf{Method 2:} $y=x^2$ and $y=2x+8$ meet at $(-2,4)$ and $(4,16)$.`, S`\textbf{Verify:} $16=8+8$ \checkmark`],
    ans: S`$x=-2$ or $x=4$` },
  { title: "Estimate", q: S`Estimate the roots of $x^2-6x+4=0$ to one decimal place.`,
    fig: G([(x) => x * x - 6 * x + 4], { xmin: -1, xmax: 7, ymin: -6, ymax: 6 }, [pt(3 - Math.sqrt(5), 0, null, "amber"), pt(3 + Math.sqrt(5), 0, null, "amber"), pt(3, -5)]),
    steps: [S`Vertex $(3,-5)$; crossings between $0$ and $1$ and between $5$ and $6$.`, S`\textbf{Table:} $y(0.7)=0.49-4.2+4=0.29$, $y(0.8)=0.64-4.8+4=-0.16$: root $\approx0.8$.`, S`\textbf{Symmetry:} other root $\approx6-0.76\approx5.2$.`],
    ans: S`$x\approx0.8$ and $x\approx5.2$` },
  { title: "Solve f(x) = k", q: S`For $f(x)=-x^2+4x+1$, solve $f(x)=4$ graphically.`,
    fig: G([(x) => -x * x + 4 * x + 1], { xmin: -1, xmax: 5, ymin: -2, ymax: 6 }, [pt(1, 4, null, "amber"), pt(3, 4, null, "amber")], { x: 1, y: 1 }, [{ m: 0, b: 4, color: "green", dash: true }]),
    steps: [S`Graph $y=f(x)$ and $y=4$; they meet at $x=1$ and $x=3$.`, S`\textbf{Algebra:} $-x^2+4x-3=0\Rightarrow(x-1)(x-3)=0$ \checkmark`],
    ans: S`$x=1$ or $x=3$` },
  { title: "Number of roots by vertex", q: S`Without solving, give the number of roots of (a) $-(x-3)^2+2=0$; (b) $2(x+1)^2+3=0$.`,
    fig: G([(x) => -((x - 3) ** 2) + 2, (x) => 2 * (x + 1) ** 2 + 3], { xmin: -4, xmax: 6, ymin: -4, ymax: 10 }, [pt(3, 2), pt(-1, 3)]),
    steps: [S`(a) opens down from $(3,2)$ above the axis: two roots.`, S`(b) opens up from $(-1,3)$ above the axis: none.`],
    ans: S`(a) two; (b) none` },
  { title: "Projectile", q: S`A ball: $h(t)=-5t^2+10t+15$. Use the graph to find when it hits the ground.`,
    fig: G([(t) => -5 * t * t + 10 * t + 15], { xmin: -0.5, xmax: 4, ymin: -2, ymax: 22 }, [pt(3, 0, null, "amber"), pt(1, 20)], { x: 0.5, y: 2 }),
    steps: [S`The graph meets the $t$-axis at $t=3$ (and at $t=-1$, before the throw: rejected).`, S`\textbf{Check:} $-45+30+15=0$ \checkmark`],
    ans: S`$t=3$ s` },
  { title: "Interval from a graph", q: S`For $h(t)=-5t^2+30t$, when is the object above $40$ m?`,
    fig: G([(t) => -5 * t * t + 30 * t], { xmin: -0.5, xmax: 7, ymin: -2, ymax: 50 }, [pt(2, 40, null, "amber"), pt(4, 40, null, "amber")], { x: 1, y: 5 }, [{ m: 0, b: 40, color: "green", dash: true }]),
    steps: [S`$-5t^2+30t=40\Rightarrow t^2-6t+8=0\Rightarrow t=2,\ 4$.`, S`Between the intersections the curve is above the line: $2<t<4$.`],
    ans: S`$2<t<4$` },
];

const PROBLEMS = [
  { level: 1, q: S`The graph of $y=x^2+2x-15$ crosses the $x$-axis at $-5$ and $3$. State the roots of $x^2+2x-15=0$ and verify one.`, ans: S`$-5$, $3$` },
  { level: 1, q: S`How many real roots does $x^2+9=0$ have? Explain with a graph.`, ans: S`none: minimum 9` },
  { level: 1, q: S`How many real roots does $(x-6)^2=0$ have?`, ans: S`one: $x=6$` },
  { level: 2, q: S`Solve $x^2-4=3x$ by graphing $y=x^2-3x-4$.`, fig: F({ view: { xmin: -3, xmax: 6, ymin: -8, ymax: 8 } }), ans: S`$-1$, $4$` },
  { level: 2, q: S`Estimate the roots of $x^2-3=0$ to one decimal place.`, ans: S`$\pm1.7$` },
  { level: 2, q: S`Use $y=x^2$ and $y=x+2$ to solve $x^2=x+2$.`, ans: S`$-1$, $2$` },
  { level: 2, q: S`$h(t)=-5t^2+20t+25$. When does the object hit the ground?`, ans: S`$t=5$ s` },
  { level: 2, q: S`For which values of $k$ does $x^2+k=0$ have two real roots?`, ans: S`$k<0$` },
  { level: 3, space: 5, q: S`$h(t)=-5t^2+40t$. Find the time interval when the object is above $60$ m.`, ans: S`$2<t<6$` },
  { level: 3, space: 5, q: S`Find $k$ so that $x^2-8x+k=0$ has exactly one root, and state it.`, ans: S`$k=16$, $x=4$` },
  { level: 3, space: 5, q: S`Graph $y=x^2-2x-2$ on the grid and estimate both roots to one decimal place.`, fig: F({ view: { xmin: -3, xmax: 5, ymin: -4, ymax: 6 } }), ans: S`$\approx-0.7$, $2.7$` },
  { level: 3, space: 5, q: S`Explain why the equation $-2(x-1)^2-5=0$ has no real roots without graphing.`, ans: S`$-2(x-1)^2\le0$, so the left side is at most $-5$` },
  { level: 3, space: 5, q: S`The graphs of $y=x^2-1$ and $y=-x^2+7$ meet at two points. Find them.`, ans: S`$2x^2=8$: $(\pm2,\,3)$` },
];

export const WS = {
  code: "3.2",
  title: "Solving Quadratic Equations by Graphing",
  bigideas: S`The roots of a quadratic equation $ax^2+bx+c=0$ are the $x$-intercepts (zeros) of $y=ax^2+bx+c$. A parabola can cross the axis twice, touch it once or miss it, so a quadratic equation has two, one or no real roots. Equations like $f(x)=k$ are solved where the graph meets the line $y=k$.`,
  goals: ["Connect roots and $x$-intercepts.", "Solve by graphing, including rearranged equations.", "Count real roots.", "Estimate and verify roots."],
  curriculum: "A1.5, A1.7, A1.8",
  vocab: [["Root", "solution of an equation"], ["Zero", "$x$-value where $y=0$"], ["Double root", "graph touches the axis"], ["Intersection", "common point of two graphs"]],
  hook: S`Sketch three parabolas: one crossing the $x$-axis, one touching it, one missing it. Which equations could each represent?`,
  concepts: [
    ["1. Roots = $x$-intercepts", S`Graph $y=ax^2+bx+c$ and read where $y=0$.
${G([(x) => x * x - 2 * x - 3, (x) => (x - 1) ** 2, (x) => x * x - 2 * x + 3], { xmin: -2, xmax: 4, ymin: -5, ymax: 7 }, [])}`],
    ["2. Two graphs", S`To solve $f(x)=g(x)$, graph both and read the $x$-coordinates of the intersections.`],
    ["3. Estimates", S`When a root is between grid lines, use a table of values to narrow it down, and use symmetry about the axis to find the other root.`],
  ],
  tips: ["Insist on rearranging before graphing a single function.", "Students often report the $y$-intercept; ask “where is $y=0$?”", "Use graphing technology to confirm hand sketches."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

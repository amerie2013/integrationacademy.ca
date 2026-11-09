// 3.2 Solving Quadratic Equations by Graphing — 20 easy + 20 medium
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;
const g = (f, view, pts = [], lines = [], step) => planeDoc({ view, curves: [{ f, color: "violet" }], points: pts, lines, ...(step ? { step } : {}) });
const z = (x) => ({ x, y: 0, label: `(${String(x).replace("-", "−")}, 0)`, color: "amber" });

export const E = [
  mc("The graph of y = x² − 4x − 5 is shown. What are the roots of x² − 4x − 5 = 0?", S`$-1$ and $5$`, [S`$1$ and $-5$`, S`$-5$`, S`$0$ and $4$`], "Read the x-intercepts.", g((x) => x * x - 4 * x - 5, { xmin: -3, xmax: 7, ymin: -10, ymax: 8 }, [z(-1), z(5)])),
  mc("The graph of y = x² + 6x + 9 is shown. How many real roots does x² + 6x + 9 = 0 have?", "one", ["two", "none", "three"], "It touches the axis once.", g((x) => (x + 3) ** 2, { xmin: -7, xmax: 1, ymin: -1, ymax: 9 }, [z(-3)])),
  mc("The graph of y = x² + 2 is shown. How many real roots does x² + 2 = 0 have?", "none", ["one", "two", "infinitely many"], "The graph is above the axis.", g((x) => x * x + 2, { xmin: -3, xmax: 3, ymin: -1, ymax: 10 })),
  tf("The roots of ax² + bx + c = 0 are the x-intercepts of y = ax² + bx + c.", true, "Both are where y = 0."),
  tf("A quadratic equation can have three real roots.", false, "At most two."),
  tf("If a parabola touches the x-axis at its vertex, the equation has one real root.", true, "A double root."),
  num(S`The graph of $y=x^2-9$ crosses the $x$-axis at $\pm a$. Enter $a$.`, 3, "x² = 9."),
  num(S`Enter the positive root of $x^2-x-12=0$ (check: the graph crosses at it).`, 4, "(x − 4)(x + 3)."),
  num(S`How many real roots does $x^2-8x+16=0$ have?`, 1, "(x − 4)²."),
  num(S`How many real roots does $-x^2-1=0$ have?`, 0, "−x² − 1 < 0 always."),
  num(S`How many real roots does $x^2-5x=0$ have?`, 2, "x(x − 5)."),
  mc(S`To solve $x^2=3x+10$ by graphing one function, which function should you graph?`, S`$y=x^2-3x-10$`, [S`$y=x^2+3x+10$`, S`$y=x^2$`, S`$y=3x+10$`], "Make one side zero."),
  mc(S`To solve $x^2=3x+10$ with two graphs, the roots are the …`, "x-coordinates of the intersection points", ["y-coordinates of the intersection points", "y-intercepts", "vertices"], "Where the two sides are equal."),
  fill("A solution of an equation is called a ____.", ["root", "a root"], "Root."),
  mc("The parabola y = −x² + 2x + 8 is shown. What are the roots of −x² + 2x + 8 = 0?", S`$-2$ and $4$`, [S`$2$ and $-4$`, S`$8$`, S`$1$ and $9$`], "Read the x-intercepts.", g((x) => -x * x + 2 * x + 8, { xmin: -4, xmax: 6, ymin: -6, ymax: 10 }, [z(-2), z(4)])),
  num(S`Enter the negative root of $x^2+3x-10=0$.`, -5, "(x + 5)(x − 2)."),
  mc(S`Which equation has no real roots?`, S`$x^2+4=0$`, [S`$x^2-4=0$`, S`$x^2-4x=0$`, S`$x^2-4x+4=0$`], "x² ≥ 0, so x² + 4 > 0."),
  mc(S`Which equation has exactly one real root?`, S`$x^2-10x+25=0$`, [S`$x^2-25=0$`, S`$x^2+25=0$`, S`$x^2-10x=0$`], "(x − 5)²."),
  tf(S`$x=3$ is a root of $x^2-2x-3=0$.`, true, "9 − 6 − 3 = 0."),
  tf(S`$x=-1$ is a root of $x^2+2x+3=0$.`, false, "1 − 2 + 3 = 2."),
];

export const M = [
  mc("The graphs of y = x² and y = x + 6 are shown. What are the solutions of x² = x + 6?", S`$-2$ and $3$`, [S`$4$ and $9$`, S`$2$ and $-3$`, S`$0$ and $6$`], "x-coordinates of the intersections.", planeDoc({ view: { xmin: -4, xmax: 5, ymin: -2, ymax: 12 }, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: 1, b: 6, color: "blue" }], points: [{ x: -2, y: 4, label: "(−2, 4)", color: "amber" }, { x: 3, y: 9, label: "(3, 9)", color: "amber" }] })),
  mc("The graph of y = f(x) and the line y = 5 are shown. How many solutions does f(x) = 5 have?", "two", ["one", "none", "three"], "The line crosses the parabola twice.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 8 }, curves: [{ f: (x) => x * x + 1, color: "violet" }], lines: [{ m: 0, b: 5, color: "green", dash: true }] })),
  num(S`Estimate the positive root of $x^2-10=0$ to one decimal place.`, 3.2, "√10 ≈ 3.16.", null, 0.06),
  num(S`Estimate the positive root of $x^2-2x-5=0$ to one decimal place.`, 3.4, "1 + √6 ≈ 3.45.", null, 0.06),
  num(S`For $y=x^2-6x+k$, which value of $k$ gives exactly one root?`, 9, "(x − 3)²."),
  num(S`$h(t)=-5t^2+20t+60$. Enter the time (s) the object hits the ground.`, 6, "t² − 4t − 12 = 0."),
  num(S`$h(t)=-5t^2+30t$. Enter the later time when $h=40$.`, 4, "t² − 6t + 8 = 0."),
  num(S`For how many seconds is $h(t)=-5t^2+30t$ above $40$ m?`, 2, "Between 2 and 4."),
  ms(S`Select every equation with two real roots.`, [S`$x^2-1=0$`, S`$x^2+1=0$`, S`$(x-2)^2=0$`, S`$x^2-3x=0$`, S`$-(x-1)^2+4=0$`], [0, 3, 4], "Two crossings."),
  tf(S`$-2(x+3)^2+8=0$ has two real roots.`, true, "Opens down from (−3, 8)."),
  tf(S`$3(x-1)^2+2=0$ has two real roots.`, false, "Minimum 2 > 0."),
  mc(S`The vertex of $y=ax^2+bx+c$ is $(2,\,-3)$ and $a>0$. How many real roots does $ax^2+bx+c=0$ have?`, "two", ["one", "none", "cannot tell"], "Opens up from below the axis."),
  mc(S`The vertex of $y=ax^2+bx+c$ is $(2,\,-3)$ and $a<0$. How many real roots?`, "none", ["one", "two", "cannot tell"], "Opens down from below the axis."),
  fill(S`If $y=f(x)$ meets $y=k$ at $x=-1$ and $x=5$, the solutions of $f(x)=k$ are $-1$ and ____.`, ["5"], "Read the x-coordinates."),
  mc("The graph of y = −x² + 6x − 5 and the line y = 3 are shown. Solve −x² + 6x − 5 = 3.", S`$x=2$ or $x=4$`, [S`$x=1$ or $x=5$`, S`$x=3$`, "no solution"], "x² − 6x + 8 = 0.", planeDoc({ view: { xmin: -1, xmax: 7, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -x * x + 6 * x - 5, color: "violet" }], lines: [{ m: 0, b: 3, color: "green", dash: true }], points: [{ x: 2, y: 3, label: "(2, 3)", color: "amber" }, { x: 4, y: 3, label: "(4, 3)", color: "amber" }] })),
  num(S`The graph of $y=x^2-4x+1$ has vertex $(2,\,-3)$. One root is about $0.27$. Use symmetry to estimate the other (two decimals).`, 3.73, "2 + (2 − 0.27).", null, 0.02),
  num(S`For which integer $k$ is $(3,\,0)$ an $x$-intercept of $y=x^2+kx-6$?`, -1, "9 + 3k − 6 = 0."),
  mc(S`Why is a graphical solution often only approximate?`, "the intercepts may fall between grid lines", ["graphs are always wrong", "parabolas have no exact zeros", "the y-axis is not scaled"], "Exact values need algebra."),
  num(S`The graphs of $y=x^2$ and $y=2x+3$ meet at two points. Enter the positive $x$-coordinate.`, 3, "x² − 2x − 3 = 0."),
  num(S`$y=-(x-1)^2+9$. Enter the positive root of $-(x-1)^2+9=0$.`, 4, "x − 1 = ±3."),
];

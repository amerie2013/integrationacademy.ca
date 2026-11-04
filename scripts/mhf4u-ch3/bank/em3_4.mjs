// 3.4 Solving Rational Equations and Inequalities — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { RG, P, planeDoc, rat } from "./fig.mjs";
const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const E = [
  num(S`Solve $\dfrac{12}{x}=3$.`, 4, "x = 12/3."),
  num(S`Solve $\dfrac{10}{x-1}=5$.`, 3, "x − 1 = 2."),
  num(S`Solve $\dfrac{7}{x+2}=1$.`, 5, "x + 2 = 7."),
  num(S`Solve $\dfrac{x}{4}=\dfrac{9}{12}$.`, 3, "x = 4 · 3/4."),
  num(S`Solve $\dfrac{x+1}{3}=\dfrac{8}{6}$.`, 3, "x + 1 = 4."),
  mc(S`What is the restriction for $\dfrac5{x-8}=2$?`, S`$x\ne8$`, [S`$x\ne-8$`, S`$x\ne5$`, S`$x\ne2$`], "x − 8 ≠ 0."),
  mc(S`What are the restrictions for $\dfrac1x+\dfrac1{x+3}=1$?`, S`$x\ne0,\ x\ne-3$`, [S`$x\ne3$`, S`$x\ne0$`, S`$x\ne1$`], "Each denominator must be nonzero."),
  tf("A value that makes a denominator zero can never be a solution.", true, "The expression is undefined there."),
  fill("A solution of the cleared equation that fails the original equation is called ___.", ["extraneous", "an extraneous root", "extraneous root"], "It breaks a restriction."),
  tf(S`To solve $\dfrac{x-1}{x+2}>0$ you may multiply both sides by $x+2$ without changing the direction.`, false, "x + 2 can be negative."),
  mc(S`What are the critical values of $\dfrac{x-6}{x+1}$?`, S`$x=6,\ x=-1$`, [S`$x=-6,\ x=1$`, S`$x=6$ only`, S`$x=1,\ x=6$`], "Zeros of the numerator and denominator."),
  tf(S`In $\dfrac{x-2}{x+5}\ge0$, the value $x=-5$ is part of the solution.`, false, "It is undefined."),
  tf(S`In $\dfrac{x-2}{x+5}\ge0$, the value $x=2$ is part of the solution.`, true, "The fraction equals 0."),
  mc(S`Solve $\dfrac1{x}>0$.`, S`$x>0$`, [S`$x\lt0$`, S`$x\ne0$`, "all real x"], "Positive reciprocal needs positive x."),
  mc(S`Solve $\dfrac{-2}{x-1}>0$.`, S`$x\lt1$`, [S`$x>1$`, S`$x\ne1$`, S`$x>-2$`], "The denominator must be negative."),
  mc(S`Solve $\dfrac{x-3}{x+1}\lt0$.`, S`$-1\lt x\lt3$`, [S`$x\lt-1$ or $x>3$`, S`$x>3$`, S`$-3\lt x\lt1$`], "Opposite signs."),
  mc("Read the solution of f(x) = 1 from the graph.", S`$x=3$`, [S`$x=1$`, S`$x=-3$`, S`$x=2$`], "The curve meets y = 1 at x = 3.", planeDoc({ view: V, curves: [...rat((x) => 2 / (x - 1), [1], V), { f: () => 1, color: "green" }], points: [P(3, 1)], step: { x: 1, y: 1 } })),
  mc("From the graph, solve f(x) > 0.", S`$x>2$`, [S`$x\lt2$`, S`$x>0$`, S`$x\ne2$`], "Above the x-axis to the right of the asymptote.", RG((x) => 3 / (x - 2), [2], V, 0)),
  num(S`Solve $x+\dfrac1x=2$.`, 1, "(x − 1)² = 0."),
  mc(S`Which is a solution of $\dfrac{x}{x-1}=2$?`, S`$x=2$`, [S`$x=1$`, S`$x=0$`, S`$x=-2$`], "x = 2x − 2."),
];

export const M = [
  mc(S`Solve $\dfrac{x+3}{x-1}=\dfrac{x-4}{x+2}$.`, S`$x=-\tfrac15$`, [S`$x=\tfrac15$`, S`$x=-1$`, "no solution"], "x² + 5x + 6 = x² − 5x + 4 gives 10x = −2."),
  mc(S`Solve $x-\dfrac{12}x=1$.`, S`$x=4$ or $x=-3$`, [S`$x=-4$ or $x=3$`, S`$x=4$`, S`$x=12$ or $x=1$`], "x² − x − 12 = 0."),
  mc(S`Solve $x+\dfrac{10}x=7$.`, S`$x=2$ or $x=5$`, [S`$x=-2$ or $x=-5$`, S`$x=7$`, S`$x=1$ or $x=10$`], "x² − 7x + 10 = 0."),
  mc(S`Solve $\dfrac{2}{x-1}=\dfrac{x}{x-1}$.`, S`$x=2$`, [S`$x=1$`, S`$x=2$ or $x=1$`, "no solution"], "x = 2; 2 ≠ 1, so it stands."),
  mc(S`Solve $\dfrac{x}{x+4}=\dfrac{-4}{x+4}$.`, "no solution", [S`$x=-4$`, S`$x=4$`, S`$x=0$`], "x = −4 breaks the restriction."),
  num(S`Solve $\dfrac3x+\dfrac2x=1$.`, 5, "5/x = 1."),
  mc(S`Solve $\dfrac1{x-2}+\dfrac1{x+2}=\dfrac{4}{x^2-4}$.`, "no solution", [S`$x=2$`, S`$x=-2$`, S`$x=4$`], "2x = 4 gives x = 2, a restriction."),
  mc(S`Solve $\dfrac{x-6}{x+2}\le0$.`, S`$(-2,6]$`, [S`$[-2,6]$`, S`$(-\infty,-2)\cup[6,\infty)$`, S`$(-2,6)$`], "Exclude −2, include 6."),
  mc(S`Solve $\dfrac{x+4}{x-3}\ge0$.`, S`$(-\infty,-4]\cup(3,\infty)$`, [S`$[-4,3)$`, S`$(-\infty,-4)\cup(3,\infty)$`, S`$[-4,3]$`], "Include −4, exclude 3."),
  mc(S`Solve $\dfrac{x+1}{x-2}\lt3$.`, S`$x\lt2$ or $x>3.5$`, [S`$2\lt x\lt3.5$`, S`$x>3.5$`, S`$x\lt3.5$`], "(7 − 2x)/(x − 2) < 0."),
  mc(S`Solve $\dfrac{5}{x+1}\ge1$.`, S`$(-1,4]$`, [S`$[-1,4]$`, S`$(-\infty,4]$`, S`$(-1,\infty)$`], "(4 − x)/(x + 1) ≥ 0."),
  mc(S`Solve $\dfrac{x^2-1}{x}>0$.`, S`$-1\lt x\lt0$ or $x>1$`, [S`$x\lt-1$ or $0\lt x\lt1$`, S`$x>1$`, S`$-1\lt x\lt1$`], "Signs −, +, −, +."),
  mc(S`Solve $\dfrac{x}{x^2+1}\le0$.`, S`$x\le0$`, [S`$x\lt0$`, S`$x\ge0$`, "all real x"], "x² + 1 > 0 always."),
  mc(S`Solve $\dfrac{(x-1)^2}{x+2}>0$.`, S`$x>-2,\ x\ne1$`, [S`$x>-2$`, S`$x\lt-2$`, S`$x>1$`], "A square is positive except at x = 1."),
  num(S`How many integers satisfy $\dfrac{x-4}{x+1}\lt0$?`, 4, "−1 < x < 4: 0, 1, 2, 3."),
  num(S`What is the smallest integer in the solution of $\dfrac{x+3}{x-5}\le0$?`, -3, "[−3, 5)."),
  mc("Use the graphs to solve 4/x > x.", S`$x\lt-2$ or $0\lt x\lt2$`, [S`$-2\lt x\lt0$ or $x>2$`, S`$0\lt x\lt2$`, S`$x\lt2$`], "The hyperbola is above the line there.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, curves: [...rat((x) => 4 / x, [0], { xmin: -6, xmax: 6 }), { f: (x) => x, color: "green" }], points: [P(2, 2), P(-2, -2)], step: { x: 1, y: 1 } })),
  mc("Use the graph to solve f(x) ≤ 2.", S`$x\lt-1$ or $x\ge1$`, [S`$-1\lt x\le1$`, S`$x\ge1$`, S`$x\le1$`], "The curve is on or below y = 2 there.", planeDoc({ view: V, curves: [...rat((x) => 4 / (x + 1), [-1], V), { f: () => 2, color: "green" }], points: [P(1, 2)], step: { x: 1, y: 1 } })),
  tf(S`$\dfrac{x-1}{x-1}=1$ holds for every real number.`, false, "Not at x = 1."),
  tf(S`The equation $\dfrac{x+2}{x}=\dfrac{4}{x}+1$ has no solution.`, true, "x + 2 = 4 + x is never true."),
];

// 5.2 Graphs of Reciprocal Trigonometric Functions — 20 hard questions
import { mc, num, tf, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const V = { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 };
const cut = (g) => (x) => (Math.abs(g(x)) < 0.07 ? NaN : 1 / g(x));
const csc = cut(Math.sin), sec = cut(Math.cos);
const vl = (xs) => ({ vlines: xs.map((x) => ({ x, color: "red", dash: true })) });

export const TOPIC = "5.2 Graphs of Reciprocal Trigonometric Functions";
export const Q = [
  ms(S`Select all intersection points of $y=\sin x$ and $y=\csc x$ in $(0,2\pi)$.`, [S`$\left(\frac\pi2,1\right)$`, S`$\left(\frac{3\pi}2,-1\right)$`, S`$(\pi,0)$`, S`$\left(\frac\pi6,\frac12\right)$`], [0, 1], "sin x = 1/sin x means sin²x = 1, so sin x = ±1."),
  ms(S`Select all solutions of $\sec^2x=4$ in $[0,2\pi]$.`, [S`$\frac\pi3$`, S`$\frac{2\pi}3$`, S`$\frac{4\pi}3$`, S`$\frac{5\pi}3$`, S`$\frac\pi6$`], [0, 1, 2, 3], "cos²x = 1/4, so cos x = ±1/2: one angle in each quadrant."),
  ms(S`Select all solutions of $\csc^2x=2$ in $[0,2\pi]$.`, [S`$\frac\pi4$`, S`$\frac{3\pi}4$`, S`$\frac{5\pi}4$`, S`$\frac{7\pi}4$`, S`$\frac\pi2$`], [0, 1, 2, 3], "sin²x = 1/2, so sin x = ±√2/2."),
  mc(S`For which $k$ does $\sec x=k$ have exactly one solution in $(0,2\pi)$?`, S`$k=-1$`, [S`$k=1$`, S`$k=0$`, S`$k=2$`], "sec x = −1 only at x = π. sec x = 1 needs x = 0 or 2π, which are excluded; k = 2 gives two solutions; k = 0 gives none."),
  num(S`How many solutions does $\csc x=-1.5$ have in $[0,6\pi]$?`, 6, "sin x = −2/3 has two solutions per cycle and [0, 6π] holds three cycles."),
  mc(S`Which function has the same graph as $y=-\sec x$?`, S`$y=\sec(x+\pi)$`, [S`$y=\sec(-x)$`, S`$y=\csc x$`, S`$y=-\csc x$`], "cos(x + π) = −cos x, so sec(x + π) = 1/(−cos x) = −sec x."),
  tf(S`$\sec(-x)=\sec x$ for every $x$ in its domain.`, true, "cos(−x) = cos x, so their reciprocals are equal: secant is even."),
  tf(S`$\csc(-x)=\csc x$ for every $x$ in its domain.`, false, "sin(−x) = −sin x, so csc(−x) = −csc x: cosecant is odd."),
  mc(S`What is $\csc\left(\frac\pi2-x\right)$ equal to?`, S`$\sec x$`, [S`$\csc x$`, S`$-\sec x$`, S`$\cot x$`], "sin(π/2 − x) = cos x, so its reciprocal is sec x."),
  num(S`Find the minimum value of $y=4\csc x$ on $(0,\pi)$.`, 4, "csc x ≥ 1 on (0, π) with equality at π/2, so 4 csc x ≥ 4."),
  num(S`Find the maximum value of $y=-2\sec x$ on $\left(-\frac\pi2,\frac\pi2\right)$.`, -2, "sec x ≥ 1 there, so −2 sec x ≤ −2, with equality at x = 0."),
  mc(S`What is the range of $y=\csc x+2$?`, S`$y\le1$ or $y\ge3$`, [S`$y\le-1$ or $y\ge1$`, S`$1\le y\le3$`, S`$y\ge3$`], "Add 2 to each part of |csc x| ≥ 1: csc x ≤ −1 gives y ≤ 1; csc x ≥ 1 gives y ≥ 3."),
  mc(S`On $\left(\pi,\frac{3\pi}2\right)$, how does $y=\sec x$ behave?`, S`decreasing from $-1$ towards $-\infty$`, [S`increasing from $-1$`, S`decreasing from $1$`, "constant"], "cos x rises from −1 towards 0 (staying negative), so 1/cos x falls from −1 towards −∞."),
  mc("The graph shows y = sin x and y = csc x. At which x in (0, 2π) do they share a point with y = −1?", S`$\frac{3\pi}2$`, [S`$\pi$`, S`$\frac\pi2$`, S`$\frac{7\pi}4$`], "sin(3π/2) = −1 and its reciprocal is also −1.", planeDoc(TG([[Math.sin, "violet"], [csc, "red"]], V, [], vl([0, Math.PI, 2 * Math.PI])))),
  mc("The graph shows y = sec x. Which equation describes the dashed line on the right?", S`$x=\frac{3\pi}2$`, [S`$x=\pi$`, S`$x=2\pi$`, S`$x=\frac{5\pi}4$`], "Secant's asymptotes are where cos x = 0: π/2 and 3π/2.", planeDoc(TG([[sec, "red"]], V, [], vl([Math.PI / 2, 1.5 * Math.PI])))),
  mc("The graph shows y = 2 csc x. What is its range?", S`$y\le-2$ or $y\ge2$`, [S`$y\le-1$ or $y\ge1$`, S`$-2\le y\le2$`, S`$y\ge2$`], "The vertical stretch by 2 doubles the turning values ±1 to ±2.", planeDoc(TG([[(x) => 2 * csc(x), "red"]], { xmin: -0.5, xmax: 6.8, ymin: -6, ymax: 6 }, [], vl([0, Math.PI, 2 * Math.PI])))),
  mc("The graph shows y = cos x and y = sec x. Between the asymptotes at π/2 and 3π/2, which statement is true?", "sec x ≤ −1 there", ["sec x ≥ 1 there", "sec x = cos x there", "sec x is increasing there"], "cos x is in [−1, 0) there, so its reciprocal is ≤ −1.", planeDoc(TG([[Math.cos, "green"], [sec, "red"]], V, [], vl([Math.PI / 2, 1.5 * Math.PI])))),
  num(S`Solve $\cot x=\sqrt3$ for $\pi<x<2\pi$. Give $x$ to three decimals.`, (7 * Math.PI) / 6, "tan x = 1/√3: π/6 + π = 7π/6 ≈ 3.665.", null, 0.002),
  tf(S`$\sec x\cos x=1$ for every $x$ in the domain of $\sec x$.`, true, "Where cos x ≠ 0, (1/cos x)·cos x = 1."),
  num(S`How many solutions does $\sec x=\csc x$ have in $[0,2\pi)$?`, 2, "1/cos x = 1/sin x means sin x = cos x (both nonzero): π/4 and 5π/4."),
];

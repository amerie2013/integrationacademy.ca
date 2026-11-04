// 5.2 Graphs of Reciprocal Trigonometric Functions — 20 easy + 20 medium questions
import { mc, num, tf, fill, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const V = { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 };
const cut = (g) => (x) => (Math.abs(g(x)) < 0.07 ? NaN : 1 / g(x));
const csc = cut(Math.sin), sec = cut(Math.cos), cot = (x) => (Math.abs(Math.sin(x)) < 0.07 ? NaN : Math.cos(x) / Math.sin(x));
const vl = (xs) => ({ vlines: xs.map((x) => ({ x, color: "red", dash: true })) });

export const E = [
  mc(S`What is $\csc x$?`, S`$\frac1{\sin x}$`, [S`$\frac1{\cos x}$`, S`$\sin^{-1}x$`, S`$\frac{\cos x}{\sin x}$`], "Cosecant is the reciprocal of sine."),
  mc(S`What is $\sec x$?`, S`$\frac1{\cos x}$`, [S`$\frac1{\sin x}$`, S`$\cos^{-1}x$`, S`$\frac1{\tan x}$`], "Secant is the reciprocal of cosine."),
  mc(S`What is $\cot x$?`, S`$\frac{\cos x}{\sin x}$`, [S`$\frac{\sin x}{\cos x}$`, S`$\tan^{-1}x$`, S`$\frac1{\cos x}$`], "Cotangent is the reciprocal of tangent: cos x / sin x."),
  num(S`Evaluate $\csc\frac\pi2$.`, 1, "sin(π/2) = 1, and 1/1 = 1."),
  num(S`Evaluate $\sec0$.`, 1, "cos 0 = 1, and 1/1 = 1."),
  num(S`Evaluate $\sec\pi$.`, -1, "cos π = −1, and 1/(−1) = −1."),
  num(S`Evaluate $\cot\frac\pi4$.`, 1, "tan(π/4) = 1, so cot(π/4) = 1."),
  num(S`Evaluate $\csc\frac\pi6$.`, 2, "sin(π/6) = 1/2, and 1/(1/2) = 2."),
  mc(S`Which is an asymptote of $y=\csc x$?`, S`$x=\pi$`, [S`$x=\frac\pi2$`, S`$y=1$`, S`$x=\frac\pi4$`], "Asymptotes where sin x = 0: x = 0, π, 2π."),
  mc(S`Which is an asymptote of $y=\sec x$?`, S`$x=\frac\pi2$`, [S`$x=\pi$`, "x = 0", S`$y=0$`], "Asymptotes where cos x = 0: x = π/2, 3π/2."),
  mc(S`What is the period of $y=\sec x$?`, S`$2\pi$`, [S`$\pi$`, S`$\frac\pi2$`, S`$4\pi$`], "The reciprocal of a 2π-periodic function is 2π-periodic."),
  mc(S`What is the period of $y=\cot x$?`, S`$\pi$`, [S`$2\pi$`, S`$\frac\pi2$`, S`$4\pi$`], "Like tangent, cotangent repeats every π."),
  tf(S`$\csc x$ and $\sin^{-1}x$ mean the same thing.`, false, "csc x is the reciprocal 1/sin x; sin⁻¹x is the inverse (an angle)."),
  tf("The graph of y = sec x touches the graph of y = cos x where cos x = 1.", true, "Where cos x = 1, sec x = 1/1 = 1 as well."),
  tf("y = csc x has zeros.", false, "1/sin x can never be 0, because a fraction with numerator 1 is never 0."),
  mc(S`What is the range of $y=\csc x$?`, S`$y\le-1$ or $y\ge1$`, [S`$-1\le y\le1$`, "all real numbers", S`$y\ge1$`], "|sin x| ≤ 1, so |1/sin x| ≥ 1."),
  fill(S`Where $\sin x=0$, the graph of $y=\csc x$ has a vertical ____.`, ["asymptote"], "Division by 0 is not defined, and values near 0 give very large reciprocals."),
  mc("Which function is drawn in red?", S`$y=\csc x$`, [S`$y=\sec x$`, S`$y=\cot x$`, S`$y=\tan x$`], "The red branches touch sin x (violet) at its peaks and have asymptotes at its zeros.", planeDoc(TG([[Math.sin, "violet"], [csc, "red"]], V, [], vl([0, Math.PI, 2 * Math.PI])))),
  mc("The red graph is the reciprocal of the green one. Which function is it?", S`$y=\sec x$`, [S`$y=\csc x$`, S`$y=\cot x$`, S`$y=\tan x$`], "The red branches touch cos x (green) at its peaks and have asymptotes at its zeros.", planeDoc(TG([[Math.cos, "green"], [sec, "red"]], V, [], vl([Math.PI / 2, 1.5 * Math.PI])))),
  num(S`Evaluate $\sec\frac\pi3$.`, 2, "cos(π/3) = 1/2, and 1/(1/2) = 2."),
];

export const M = [
  num(S`Evaluate $\csc\frac{7\pi}6$.`, -2, "sin(7π/6) = −1/2 (Q3), so csc = −2."),
  num(S`Evaluate $\sec\frac{3\pi}4$ to three decimals.`, -Math.SQRT2, "cos(3π/4) = −√2/2, so sec = −2/√2 = −√2 ≈ −1.414.", null, 0.002),
  num(S`Evaluate $\cot\frac{5\pi}6$ to three decimals.`, -Math.sqrt(3), "tan(5π/6) = −1/√3, so cot = −√3 ≈ −1.732.", null, 0.002),
  ms(S`Select all asymptotes of $y=\cot x$ in $[0,2\pi]$.`, ["x = 0", S`$x=\frac\pi2$`, S`$x=\pi$`, S`$x=2\pi$`], [0, 2, 3], "cot x = cos x/sin x has asymptotes where sin x = 0."),
  ms(S`Select all zeros of $y=\cot x$ in $[0,2\pi]$.`, [S`$\frac\pi2$`, S`$\pi$`, S`$\frac{3\pi}2$`, "0"], [0, 2], "Zeros where the numerator cos x = 0."),
  mc(S`On $\left(0,\frac\pi2\right)$, $\csc x$ is…`, "decreasing", ["increasing", "constant", "negative"], "sin x increases and is positive there, so its reciprocal decreases."),
  mc(S`On $\left(0,\frac\pi2\right)$, $\sec x$ is…`, "increasing", ["decreasing", "constant", "negative"], "cos x decreases and is positive there, so its reciprocal increases."),
  mc(S`What is the local minimum point of $y=\csc x$ on $(0,\pi)$?`, S`$\left(\frac\pi2,1\right)$`, [S`$\left(\frac\pi2,-1\right)$`, S`$(\pi,0)$`, S`$\left(\frac\pi4,\sqrt2\right)$`], "sin x has its max 1 at π/2, so csc x has its smallest positive value 1 there."),
  mc(S`What is the local maximum point of $y=\sec x$ on $\left(\frac\pi2,\frac{3\pi}2\right)$?`, S`$(\pi,-1)$`, [S`$(\pi,1)$`, S`$\left(\frac\pi2,0\right)$`, S`$(0,1)$`], "cos x reaches −1 at π, so sec x reaches −1 there (its highest value on that branch)."),
  ms(S`Select all solutions of $\csc x=2$ in $[0,2\pi]$.`, [S`$\frac\pi6$`, S`$\frac{5\pi}6$`, S`$\frac{7\pi}6$`, S`$\frac\pi3$`], [0, 1], "sin x = 1/2: π/6 and 5π/6."),
  ms(S`Select all solutions of $\sec x=-2$ in $[0,2\pi]$.`, [S`$\frac{2\pi}3$`, S`$\frac{4\pi}3$`, S`$\frac\pi3$`, S`$\frac{5\pi}3$`], [0, 1], "cos x = −1/2: reference π/3, Q2 and Q3."),
  ms(S`Select all solutions of $\cot x=1$ in $[0,2\pi]$.`, [S`$\frac\pi4$`, S`$\frac{5\pi}4$`, S`$\frac{3\pi}4$`, S`$\frac{7\pi}4$`], [0, 1], "tan x = 1: π/4 and π/4 + π."),
  tf(S`$\sec x=0.5$ has no solution.`, true, "It would need cos x = 2, which is impossible."),
  tf(S`$y=\cot x$ is decreasing on $(0,\pi)$.`, true, "Each cotangent branch falls from +∞ to −∞."),
  mc(S`What is the range of $y=3\sec x$?`, S`$y\le-3$ or $y\ge3$`, [S`$y\le-1$ or $y\ge1$`, S`$-3\le y\le3$`, S`$y\ge3$`], "|sec x| ≥ 1, so |3 sec x| ≥ 3."),
  mc(S`What is the domain of $y=\csc x$?`, S`$x\ne n\pi,\ n\in\mathbb{Z}$`, [S`$x\ne\frac\pi2+n\pi$`, "all real numbers", S`$x\ne2n\pi$`], "csc x is not defined where sin x = 0."),
  mc("In the graph, which feature of y = cot x is marked by the dashed lines?", "its asymptotes, where sin x = 0", ["its zeros", "its maximums", "where cos x = 0"], "cot x = cos x/sin x is not defined where sin x = 0.", planeDoc(TG([[cot, "blue"]], V, [], vl([0, Math.PI, 2 * Math.PI])))),
  mc("The graph shows y = csc x. On which interval is it negative?", S`$(\pi,2\pi)$`, [S`$(0,\pi)$`, S`$\left(\frac\pi2,\frac{3\pi}2\right)$`, "nowhere"], "csc x has the same sign as sin x, which is negative on (π, 2π).", planeDoc(TG([[csc, "red"]], V, [], vl([0, Math.PI, 2 * Math.PI])))),
  fill(S`$\cot x=\tan\left(\square-x\right)$. Fill in the box (e.g. pi/2).`, ["pi/2", "π/2", "\\frac\\pi2"], "Cofunction relation: cot x = tan(π/2 − x)."),
  num(S`How many solutions does $\csc x=3$ have in $0\le x\le4\pi$?`, 4, "sin x = 1/3 has two solutions in each of the two cycles."),
];

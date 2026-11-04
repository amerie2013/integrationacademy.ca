// 5.1 Graphs of Sine, Cosine and Tangent — 20 easy + 20 medium questions
import { mc, num, tf, fill, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const V = { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 2 };
const tan = (x) => (Math.abs(Math.cos(x)) < 0.06 ? NaN : Math.tan(x));

export const E = [
  mc("What is the period of y = sin x?", S`$2\pi$`, [S`$\pi$`, S`$\frac\pi2$`, S`$4\pi$`], "The unit-circle point returns to its start after one full turn, 2π."),
  mc("What is the period of y = tan x?", S`$\pi$`, [S`$2\pi$`, S`$\frac\pi2$`, S`$4\pi$`], "tan(x + π) = (−sin x)/(−cos x) = tan x, so it repeats every π."),
  mc("What is the range of y = cos x?", S`$-1\le y\le1$`, [S`$0\le y\le1$`, "all real numbers", S`$y\ge-1$`], "cos x is the x-coordinate of a point on the unit circle, which lies between −1 and 1."),
  mc("What is the maximum value of y = sin x?", "1", ["2π", "π/2", "0"], "The highest point on the unit circle has y-coordinate 1."),
  num(S`What is the value of $\sin\frac\pi2$?`, 1, "At a quarter turn the point is (0, 1); sine is its y-coordinate."),
  num(S`What is the value of $\cos\pi$?`, -1, "At a half turn the point is (−1, 0); cosine is its x-coordinate."),
  num(S`What is the value of $\tan0$?`, 0, "tan 0 = sin 0 / cos 0 = 0/1 = 0."),
  mc(S`Which is a zero of $y=\cos x$?`, S`$\frac\pi2$`, ["0", S`$\pi$`, S`$2\pi$`], "cos x = 0 where the point is (0, ±1): x = π/2, 3π/2, …"),
  mc(S`Which line is an asymptote of $y=\tan x$?`, S`$x=\frac\pi2$`, [S`$x=\pi$`, S`$x=0$`, S`$y=1$`], "tan x = sin x / cos x is not defined where cos x = 0."),
  tf("The graph of y = sin x passes through the origin.", true, "sin 0 = 0, so (0, 0) is on the graph."),
  tf("The graph of y = cos x passes through the origin.", false, "cos 0 = 1, so the graph crosses the y-axis at (0, 1)."),
  tf("y = tan x has a maximum value.", false, "Near each asymptote tan x grows without bound, so there is no maximum."),
  mc("What is the amplitude of y = cos x?", "1", ["2", "2π", "0"], "Amplitude = (max − min)/2 = (1 − (−1))/2 = 1."),
  mc(S`At which $x$ in $[0,2\pi]$ is $\sin x$ smallest?`, S`$\frac{3\pi}2$`, [S`$\pi$`, S`$\frac\pi2$`, S`$2\pi$`], "The lowest point of the unit circle, (0, −1), is at 3π/2."),
  mc(S`How many zeros does $y=\sin x$ have for $0\le x\le2\pi$?`, "3", ["2", "1", "4"], "sin x = 0 at x = 0, π and 2π."),
  fill(S`$\cos x$ is an ____ function (even or odd).`, ["even"], "cos(−x) = cos x: the graph is symmetric in the y-axis."),
  fill(S`$\sin x$ is an ____ function (even or odd).`, ["odd"], "sin(−x) = −sin x: the graph has rotational symmetry about the origin."),
  mc("Which graph is shown?", S`$y=\cos x$`, [S`$y=\sin x$`, S`$y=\tan x$`, S`$y=-\sin x$`], "It starts at its maximum (0, 1), which is cosine.", planeDoc(TG([[Math.cos, "green"]], V))),
  mc("Which function has the graph shown?", S`$y=\tan x$`, [S`$y=\sin x$`, S`$y=\cos x$`, S`$y=\csc x$`], "Vertical asymptotes and branches that rise through zeros at 0 and π: tangent.", planeDoc(TG([[tan, "red"]], { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 }))),
  num(S`What is the period of $y=\cos x$, to two decimals?`, 6.28, "2π ≈ 6.28.", null, 0.01),
];

export const M = [
  mc(S`On which interval is $y=\cos x$ decreasing?`, S`$(0,\pi)$`, [S`$(\pi,2\pi)$`, S`$\left(-\frac\pi2,\frac\pi2\right)$`, S`$\left(\frac\pi2,\frac{3\pi}2\right)$`], "cos x falls from its max at 0 to its min at π."),
  mc(S`On which interval is $y=\sin x$ increasing?`, S`$\left(-\frac\pi2,\frac\pi2\right)$`, [S`$(0,\pi)$`, S`$\left(\frac\pi2,\frac{3\pi}2\right)$`, S`$(\pi,2\pi)$`], "sin x rises from its min at −π/2 to its max at π/2."),
  ms(S`Select all solutions of $\sin x=\frac12$ in $[0,2\pi]$.`, [S`$\frac\pi6$`, S`$\frac{5\pi}6$`, S`$\frac{7\pi}6$`, S`$\frac\pi3$`], [0, 1], "Reference angle π/6; sine is positive in Q1 and Q2: π/6 and π − π/6."),
  ms(S`Select all asymptotes of $y=\tan x$ in $[0,2\pi]$.`, [S`$x=\frac\pi2$`, S`$x=\pi$`, S`$x=\frac{3\pi}2$`, S`$x=2\pi$`], [0, 2], "Asymptotes where cos x = 0: π/2 and 3π/2."),
  num(S`How many solutions does $\cos x=0.3$ have in $0\le x\le4\pi$?`, 4, "The line y = 0.3 meets each of the two cycles twice."),
  num(S`How many solutions does $\tan x=5$ have in $0\le x\le2\pi$?`, 2, "Tangent takes every value once per period π, and [0, 2π] holds two periods."),
  mc(S`Given $\sin\frac\pi7\approx0.4339$, what is $\sin\frac{6\pi}7$?`, S`$\approx0.4339$`, [S`$\approx-0.4339$`, S`$\approx0.9010$`, S`$\approx-0.9010$`], "The sine curve is symmetric about x = π/2: sin(π − x) = sin x."),
  mc(S`Given $\cos\frac\pi5\approx0.8090$, what is $\cos\left(-\frac\pi5\right)$?`, S`$\approx0.8090$`, [S`$\approx-0.8090$`, S`$\approx0.5878$`, "0"], "Cosine is even: cos(−x) = cos x."),
  mc(S`Given $\tan1\approx1.557$, what is $\tan(1+\pi)$?`, S`$\approx1.557$`, [S`$\approx-1.557$`, S`$\approx0.642$`, "not defined"], "Tangent has period π."),
  mc(S`For $0\le x\le2\pi$, where is $\sin x<0$?`, S`$\pi<x<2\pi$`, [S`$0<x<\pi$`, S`$\frac\pi2<x<\frac{3\pi}2$`, S`$\frac{3\pi}2<x<2\pi$ only`], "The unit-circle point is below the x-axis in Q3 and Q4."),
  mc(S`For $0\le x\le2\pi$, where is $\cos x>0$?`, S`$0\le x<\frac\pi2$ and $\frac{3\pi}2<x\le2\pi$`, [S`$0<x<\pi$`, S`$\frac\pi2<x<\frac{3\pi}2$`, S`$\pi<x<2\pi$`], "The point is right of the y-axis in Q1 and Q4."),
  num(S`Solve $\cos x=-1$ for $0\le x\le2\pi$. Give $x$ to two decimals.`, 3.14, "cos x = −1 only at the leftmost point, x = π ≈ 3.14.", null, 0.01),
  tf(S`$y=\sin x$ and $y=\cos x$ cross at $x=\frac\pi4$.`, true, "sin(π/4) = cos(π/4) = √2/2."),
  tf("The zeros of y = tan x are the same as the zeros of y = sin x.", true, "tan x = sin x / cos x is 0 exactly where sin x = 0 (cos x is then ±1)."),
  tf(S`$\cos\left(x+2\pi\right)=\cos x$ for every $x$.`, true, "Adding a full turn returns the point to the same place."),
  mc("The graph shows y = sin x and a horizontal line. How many solutions in [0, 2π]?", "2", ["1", "3", "0"], "The line y = 0.7 crosses one cycle of sine twice.", planeDoc(TG([[Math.sin, "violet"], [() => 0.7, "blue"]], V))),
  mc("From the graph, on which interval is sin x > cos x?", S`$\left(\frac\pi4,\frac{5\pi}4\right)$`, [S`$\left(0,\frac\pi4\right)$`, S`$\left(\frac{5\pi}4,2\pi\right)$`, S`$\left(\frac\pi2,\pi\right)$ only`], "The curves cross where tan x = 1; sine is on top between π/4 and 5π/4.", planeDoc(TG([[Math.sin, "violet"], [Math.cos, "green"]], V))),
  fill(S`The graph of $y=\cos x$ is the graph of $y=\sin x$ shifted left by ____ (give the smallest positive value, e.g. pi/2).`, ["pi/2", "π/2", "\\frac\\pi2", "90°"], "sin(x + π/2) = cos x."),
  mc(S`What is the exact value of $\sin\frac{4\pi}3$?`, S`$-\frac{\sqrt3}2$`, [S`$\frac{\sqrt3}2$`, S`$-\frac12$`, S`$\frac12$`], "4π/3 is in Q3 (sine negative) with reference angle π/3."),
  mc(S`What is the exact value of $\tan\frac{3\pi}4$?`, "−1", ["1", S`$-\sqrt3$`, "not defined"], "3π/4 is in Q2 (tangent negative) with reference angle π/4."),
];

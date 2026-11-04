// 5.4 Solving Trigonometric Equations — 20 easy + 20 medium questions
import { mc, num, tf, fill, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG, UC } from "../trigfig.mjs";
const S = String.raw;
const P = Math.PI;
const V = { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 2 };

export const E = [
  ms(S`Select all solutions of $\sin x=\frac{\sqrt3}2$ in $[0,2\pi]$.`, [S`$\frac\pi3$`, S`$\frac{2\pi}3$`, S`$\frac{4\pi}3$`, S`$\frac\pi6$`], [0, 1], "Reference π/3; sine is positive in Q1 and Q2."),
  ms(S`Select all solutions of $\cos x=\frac12$ in $[0,2\pi]$.`, [S`$\frac\pi3$`, S`$\frac{5\pi}3$`, S`$\frac{2\pi}3$`, S`$\frac\pi6$`], [0, 1], "Reference π/3; cosine is positive in Q1 and Q4."),
  ms(S`Select all solutions of $\tan x=-1$ in $[0,2\pi]$.`, [S`$\frac{3\pi}4$`, S`$\frac{7\pi}4$`, S`$\frac\pi4$`, S`$\frac{5\pi}4$`], [0, 1], "Reference π/4; tangent is negative in Q2 and Q4."),
  mc(S`Solve $\sin x=1$ for $0\le x\le2\pi$.`, S`$\frac\pi2$`, ["0", S`$\pi$`, S`$\frac{3\pi}2$`], "Only the top of the unit circle has y = 1."),
  mc(S`Solve $\cos x=0$ for $0\le x\le2\pi$.`, S`$\frac\pi2,\ \frac{3\pi}2$`, [S`$0,\ \pi$`, S`$\pi$`, S`$\frac\pi2$ only`], "x-coordinate 0 at the top and bottom of the circle."),
  mc(S`Solve $2\cos x-1=0$ for $0\le x\le2\pi$.`, S`$\frac\pi3,\ \frac{5\pi}3$`, [S`$\frac\pi6,\ \frac{11\pi}6$`, S`$\frac{2\pi}3,\ \frac{4\pi}3$`, S`$\frac\pi3,\ \frac{2\pi}3$`], "cos x = 1/2: Q1 and Q4."),
  mc(S`Solve $\sqrt2\sin x+1=0$ for $0\le x\le2\pi$.`, S`$\frac{5\pi}4,\ \frac{7\pi}4$`, [S`$\frac\pi4,\ \frac{3\pi}4$`, S`$\frac{3\pi}4,\ \frac{5\pi}4$`, S`$\frac{7\pi}4$ only`], "sin x = −√2/2: Q3 and Q4."),
  tf(S`$\sin x=2$ has no solution.`, true, "The range of sine is [−1, 1]."),
  tf(S`$\tan x=10$ has no solution.`, false, "The range of tangent is all real numbers."),
  mc("In which quadrants is cosine negative?", "Q2 and Q3", ["Q1 and Q4", "Q3 and Q4", "Q2 and Q4"], "Left of the y-axis the x-coordinate is negative (CAST)."),
  mc("In which quadrants is tangent positive?", "Q1 and Q3", ["Q1 and Q2", "Q2 and Q4", "Q1 only"], "tan = sin/cos is positive when both have the same sign (CAST)."),
  num(S`Give the reference angle for $\sin x=-\frac12$, in radians to three decimals.`, P / 6, "sin(π/6) = 1/2, so the reference angle is π/6 ≈ 0.524.", null, 0.002),
  num(S`Solve $\cos x=0.6$ for $0\le x\le\frac\pi2$ (two decimals).`, Math.acos(0.6), "cos⁻¹(0.6) ≈ 0.93 (calculator in radians).", null, 0.01),
  num(S`How many solutions does $\sin x=0.4$ have in $[0,2\pi]$?`, 2, "A horizontal line with −1 < c < 1 meets one cycle twice."),
  num(S`How many solutions does $\cos x=1$ have in $[0,2\pi]$?`, 2, "x = 0 and x = 2π (the interval includes both ends)."),
  fill(S`To solve $\sin x=k$ you first find the ____ angle, then use CAST.`, ["reference"], "The acute angle to the x-axis whose ratio has size |k|."),
  mc(S`Which is the first step to solve $3\tan x-\sqrt3=0$?`, S`isolate: $\tan x=\frac{\sqrt3}3$`, ["divide by x", "square both sides", "take tan⁻¹ of 3"], "Treat tan x as the unknown in a linear equation."),
  mc("The graph shows y = cos x and y = −0.5. Which are the solutions in [0, 2π]?", S`$\frac{2\pi}3,\ \frac{4\pi}3$`, [S`$\frac\pi3,\ \frac{5\pi}3$`, S`$\frac{5\pi}6,\ \frac{7\pi}6$`, S`$\frac{2\pi}3$ only`], "cos x = −1/2: reference π/3, Q2 and Q3.", planeDoc(TG([[Math.cos, "green"], [() => -0.5, "blue"]], V))),
  mc("The unit circle shows angle θ. Which other angle in [0, 2π) has the same sine?", S`$\pi-\theta$`, [S`$\pi+\theta$`, S`$2\pi-\theta$`, S`$-\theta$`], "Reflecting in the y-axis keeps the height.", planeDoc(UC(40, "θ"))),
  mc(S`Solve $\tan x=\sqrt3$ for $0\le x\le2\pi$.`, S`$\frac\pi3,\ \frac{4\pi}3$`, [S`$\frac\pi6,\ \frac{7\pi}6$`, S`$\frac\pi3,\ \frac{2\pi}3$`, S`$\frac\pi3$ only`], "Reference π/3; tangent repeats every π."),
];

export const M = [
  ms(S`Select all solutions of $2\sin^2x-1=0$ in $[0,2\pi]$.`, [S`$\frac\pi4$`, S`$\frac{3\pi}4$`, S`$\frac{5\pi}4$`, S`$\frac{7\pi}4$`, S`$\frac\pi2$`], [0, 1, 2, 3], "sin x = ±√2/2: one angle per quadrant."),
  ms(S`Select all solutions of $\cos^2x=\cos x$ in $[0,2\pi]$.`, ["0", S`$\frac\pi2$`, S`$\frac{3\pi}2$`, S`$2\pi$`, S`$\pi$`], [0, 1, 2, 3], "cos x(cos x − 1) = 0: cos x = 0 or 1."),
  ms(S`Select all solutions of $\sin x\cos x=0$ in $[0,2\pi)$.`, ["0", S`$\frac\pi2$`, S`$\pi$`, S`$\frac{3\pi}2$`, S`$\frac\pi4$`], [0, 1, 2, 3], "sin x = 0 or cos x = 0."),
  mc(S`Solve $(\sin x-1)(2\cos x+1)=0$ for $0\le x\le2\pi$.`, S`$\frac\pi2,\ \frac{2\pi}3,\ \frac{4\pi}3$`, [S`$\frac\pi2,\ \frac\pi3,\ \frac{5\pi}3$`, S`$\frac{2\pi}3,\ \frac{4\pi}3$`, S`$\frac\pi2$ only`], "sin x = 1 gives π/2; cos x = −1/2 gives 2π/3 and 4π/3."),
  mc(S`Solve $2\sin^2x+\sin x-1=0$ for $0\le x\le2\pi$.`, S`$\frac\pi6,\ \frac{5\pi}6,\ \frac{3\pi}2$`, [S`$\frac\pi6,\ \frac{5\pi}6$`, S`$\frac{7\pi}6,\ \frac{11\pi}6,\ \frac\pi2$`, S`$\frac\pi2,\ \frac{3\pi}2$`], "(2 sin x − 1)(sin x + 1) = 0."),
  mc(S`Solve $\tan^2x=3$ for $0\le x\le2\pi$.`, S`$\frac\pi3,\ \frac{2\pi}3,\ \frac{4\pi}3,\ \frac{5\pi}3$`, [S`$\frac\pi3,\ \frac{4\pi}3$`, S`$\frac\pi6,\ \frac{5\pi}6,\ \frac{7\pi}6,\ \frac{11\pi}6$`, S`$\frac\pi3$ only`], "tan x = ±√3: reference π/3 in all four quadrants."),
  num(S`How many solutions does $\sin2x=\frac12$ have in $[0,2\pi]$?`, 4, "2x runs over two turns, and sin = 1/2 twice per turn."),
  num(S`How many solutions does $\cos3x=0$ have in $[0,2\pi)$?`, 6, "3x runs over three turns, with two zeros of cosine per turn."),
  num(S`Solve $5\sin x=2$ for $\frac\pi2\le x\le\pi$ (two decimals).`, P - Math.asin(0.4), "Reference sin⁻¹(0.4) ≈ 0.41; in Q2, x = π − 0.41 ≈ 2.73.", null, 0.01),
  num(S`Solve $4\cos x+3=0$ for $\pi\le x\le\frac{3\pi}2$ (two decimals).`, P + Math.acos(0.75), "cos x = −0.75; reference cos⁻¹(0.75) ≈ 0.72; in Q3, x = π + 0.72 ≈ 3.86.", null, 0.01),
  mc(S`Which substitution turns $2\cos^2x+3\sin x-3=0$ into an equation in $\sin x$ only?`, S`$\cos^2x=1-\sin^2x$`, [S`$\cos^2x=1+\sin^2x$`, S`$\cos x=1-\sin x$`, S`$\cos^2x=\sin^2x-1$`], "From sin²x + cos²x = 1."),
  mc(S`Why is dividing $\sin x\cos x=\sin x$ by $\sin x$ a mistake?`, S`it loses the solutions where $\sin x=0$`, ["it creates extra solutions", "sin x is never 0", "division is not allowed with trig functions"], "Factor instead: sin x(cos x − 1) = 0."),
  mc(S`What is the general solution of $\sin x=0$?`, S`$x=n\pi,\ n\in\mathbb{Z}$`, [S`$x=2n\pi$`, S`$x=\frac\pi2+n\pi$`, S`$x=\frac\pi2+2n\pi$`], "sin x = 0 at every multiple of π."),
  mc(S`What is the general solution of $\tan x=1$?`, S`$x=\frac\pi4+n\pi$`, [S`$x=\frac\pi4+2n\pi$`, S`$x=\pm\frac\pi4+2n\pi$`, S`$x=\frac\pi4+\frac{n\pi}2$`], "Tangent has period π."),
  tf(S`$\cos2x=\frac12$ has the same solutions as $\cos x=\frac14$.`, false, "You cannot divide inside the function: cos 2x is not 2 cos x."),
  tf(S`Every solution of $\sin x=\cos x$ in $[0,2\pi]$ also solves $\tan x=1$.`, true, "At those points cos x ≠ 0, so dividing gives tan x = 1."),
  mc("The graph shows y = sin 2x and y = 0.5. How many solutions in [0, 2π]?", "4", ["2", "3", "8"], "Two cycles, two crossings each.", planeDoc(TG([[(x) => Math.sin(2 * x), "violet"], [() => 0.5, "blue"]], V))),
  mc("The graph shows y = tan x and y = 2. Which gives the solutions in [0, 2π] (two decimals)?", "1.11 and 4.25", ["1.11 only", "1.11 and 2.03", "0.46 and 3.61"], "tan⁻¹2 ≈ 1.11, then add π: 4.25.", planeDoc(TG([[(x) => (Math.abs(Math.cos(x)) < 0.06 ? NaN : Math.tan(x)), "red"], [() => 2, "blue"]], { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 }))),
  fill(S`If $0\le x\le2\pi$, then $3x$ lies between $0$ and ____ (write like 6pi).`, ["6pi", "6π", "6\\pi"], "Multiply each end of the interval by 3."),
  num(S`Find the sum of all solutions of $\cos x=-\frac{\sqrt2}2$ in $[0,2\pi]$ (three decimals).`, 2 * P, "3π/4 + 5π/4 = 2π ≈ 6.283.", null, 0.002),
];

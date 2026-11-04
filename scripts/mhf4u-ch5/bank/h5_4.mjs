// 5.4 Solving Trigonometric Equations — 20 hard questions
import { mc, num, tf, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG, UC } from "../trigfig.mjs";
const S = String.raw;
const P = Math.PI;
const V = { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 2 };

export const TOPIC = "5.4 Solving Trigonometric Equations";
export const Q = [
  ms(S`Select all solutions of $2\cos^2x-3\cos x+1=0$ in $[0,2\pi]$.`, ["0", S`$\frac\pi3$`, S`$\frac{5\pi}3$`, S`$2\pi$`, S`$\frac{2\pi}3$`], [0, 1, 2, 3], "(2 cos x − 1)(cos x − 1) = 0: cos x = 1/2 or 1."),
  ms(S`Select all solutions of $2\sin^2x=1-\cos x$ in $[0,2\pi)$.`, ["0", S`$\frac{2\pi}3$`, S`$\pi$`, S`$\frac{4\pi}3$`, S`$\frac\pi3$`], [0, 1, 3], "2(1 − cos²x) = 1 − cos x ⇒ 2cos²x − cos x − 1 = 0 ⇒ (2cos x + 1)(cos x − 1) = 0. cos x = 1 gives 0; cos x = −1/2 gives 2π/3, 4π/3."),
  ms(S`Select all solutions of $\sin2x=\cos x$ in $[0,2\pi)$.`, [S`$\frac\pi6$`, S`$\frac\pi2$`, S`$\frac{5\pi}6$`, S`$\frac{3\pi}2$`, S`$\frac\pi3$`], [0, 1, 2, 3], "2 sin x cos x − cos x = cos x(2 sin x − 1) = 0."),
  ms(S`Select all solutions of $\cos2x+\cos x=0$ in $[0,2\pi)$.`, [S`$\frac\pi3$`, S`$\pi$`, S`$\frac{5\pi}3$`, S`$\frac{2\pi}3$`, "0"], [0, 1, 2], "2cos²x + cos x − 1 = (2cos x − 1)(cos x + 1) = 0."),
  num(S`How many solutions does $\tan2x=1$ have in $[0,2\pi)$?`, 4, "2x = π/4 + nπ gives x = π/8 + nπ/2: four values below 2π."),
  num(S`How many solutions does $\sin\frac x2=\frac12$ have in $[0,2\pi]$?`, 2, "x/2 runs over [0, π]; sin = 1/2 at π/6 and 5π/6, so x = π/3 and 5π/3."),
  num(S`Find the smallest positive solution of $\sqrt3\tan\left(x-\frac\pi6\right)=1$ (three decimals).`, P / 3, "tan(x − π/6) = 1/√3, so x − π/6 = π/6 and x = π/3 ≈ 1.047.", null, 0.002),
  num(S`Solve $3\sin^2x-\sin x=0$ for $0<x<\frac\pi2$ (three decimals).`, Math.asin(1 / 3), "sin x(3 sin x − 1) = 0; in (0, π/2) only sin x = 1/3, x ≈ 0.340.", null, 0.002),
  num(S`Solve $2\cos^2x+5\cos x-3=0$ for $0\le x\le\pi$ (three decimals).`, P / 3, "(2cos x − 1)(cos x + 3) = 0; cos x = −3 is impossible, so cos x = 1/2, x = π/3.", null, 0.002),
  mc(S`What is the general solution of $2\sin x+\sqrt3=0$?`, S`$x=\frac{4\pi}3+2n\pi$ or $x=\frac{5\pi}3+2n\pi$`, [S`$x=\frac{4\pi}3+n\pi$`, S`$x=\pm\frac\pi3+2n\pi$`, S`$x=\frac\pi3+2n\pi$ or $x=\frac{2\pi}3+2n\pi$`], "sin x = −√3/2: Q3 and Q4 angles, period 2π."),
  mc(S`What is the general solution of $\cos2x=0$?`, S`$x=\frac\pi4+\frac{n\pi}2$`, [S`$x=\frac\pi4+n\pi$`, S`$x=\frac\pi2+n\pi$`, S`$x=\frac\pi4+2n\pi$`], "2x = π/2 + nπ, so x = π/4 + nπ/2."),
  tf(S`$\sin x+\cos x=2$ has no real solution.`, true, "Each term is at most 1 and they cannot both equal 1 at the same x."),
  tf(S`$\sin^2x-\cos^2x=1$ has solutions $x=\frac\pi2$ and $x=\frac{3\pi}2$ in $[0,2\pi)$.`, true, "It means −cos 2x = 1, so cos 2x = −1, 2x = π or 3π."),
  mc(S`For $0\le x\le2\pi$, solve $\sin x>\frac12$.`, S`$\frac\pi6<x<\frac{5\pi}6$`, [S`$0<x<\frac\pi6$`, S`$\frac{5\pi}6<x<2\pi$`, S`$\frac\pi6<x<\frac{11\pi}6$`], "Between the two solutions of sin x = 1/2 the curve is above the line."),
  mc(S`For $0\le x\le2\pi$, solve $\cos x\le0$.`, S`$\frac\pi2\le x\le\frac{3\pi}2$`, [S`$0\le x\le\pi$`, S`$\pi\le x\le2\pi$`, S`$\frac\pi2\le x\le\pi$`], "The point is on or left of the y-axis."),
  mc("The graph shows y = cos 2x and y = −1. Which are the solutions in [0, 2π]?", S`$\frac\pi2,\ \frac{3\pi}2$`, [S`$\pi$`, S`$\frac\pi4,\ \frac{3\pi}4$`, S`$0,\ \pi,\ 2\pi$`], "2x = π or 3π.", planeDoc(TG([[(x) => Math.cos(2 * x), "green"], [() => -1, "blue"]], V))),
  mc("The graph shows y = sin x and y = cos x. Solve sin x ≥ cos x in [0, 2π].", S`$\frac\pi4\le x\le\frac{5\pi}4$`, [S`$0\le x\le\frac\pi4$`, S`$\frac{5\pi}4\le x\le2\pi$`, S`$\frac\pi2\le x\le\pi$`], "The violet curve is on or above the green one between the crossings.", planeDoc(TG([[Math.sin, "violet"], [Math.cos, "green"]], V))),
  mc("The graph shows y = 2 sin x + 1 and y = 0. Where is 2 sin x + 1 < 0 in [0, 2π]?", S`$\frac{7\pi}6<x<\frac{11\pi}6$`, [S`$\frac\pi6<x<\frac{5\pi}6$`, S`$\pi<x<2\pi$`, S`$\frac{5\pi}6<x<\frac{7\pi}6$`], "sin x < −1/2 between 7π/6 and 11π/6.", planeDoc(TG([[(x) => 2 * Math.sin(x) + 1, "violet"]], { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 4 }))),
  mc("The unit circle shows the two angles with cos θ = −0.3. Which pair is correct (two decimals)?", "1.88 and 4.41", ["1.27 and 5.02", "1.88 and 5.02", "0.30 and 2.84"], "cos⁻¹(−0.3) ≈ 1.875 (Q2); the Q3 angle is 2π − 1.875 ≈ 4.41.", planeDoc(UC(107.46, "θ", [{ x: -0.3, y: -Math.sqrt(0.91), label: "2π − θ", color: "blue" }]))),
  num(S`Find the sum of all solutions of $\tan x=-3$ in $[0,2\pi)$ (two decimals).`, (P - Math.atan(3)) + (2 * P - Math.atan(3)), "Q2: π − tan⁻¹3 ≈ 1.89; Q4: 2π − tan⁻¹3 ≈ 5.03; sum ≈ 6.93.", null, 0.02),
];

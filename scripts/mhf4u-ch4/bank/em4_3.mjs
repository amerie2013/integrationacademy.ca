// 4.3 Equivalent Trigonometric Expressions — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { UC, TG } from "../trigfig.mjs";
const S = String.raw;

export const E = [
  mc(S`Which equals $\sin\left(\frac\pi2-x\right)$?`, S`$\cos x$`, [S`$\sin x$`, S`$-\cos x$`, S`$-\sin x$`], "Cofunction."),
  mc(S`Which equals $\cos\left(\frac\pi2-x\right)$?`, S`$\sin x$`, [S`$\cos x$`, S`$-\sin x$`, S`$\tan x$`], "Cofunction."),
  mc(S`Which equals $\tan\left(\frac\pi2-x\right)$?`, S`$\cot x$`, [S`$\tan x$`, S`$-\tan x$`, S`$\sec x$`], "Cofunction."),
  mc(S`Which equals $\sin(\pi-x)$?`, S`$\sin x$`, [S`$-\sin x$`, S`$\cos x$`, S`$-\cos x$`], "Same height."),
  mc(S`Which equals $\cos(\pi-x)$?`, S`$-\cos x$`, [S`$\cos x$`, S`$\sin x$`, S`$-\sin x$`], "Mirror in the y-axis."),
  mc(S`Which equals $\cos(\pi+x)$?`, S`$-\cos x$`, [S`$\cos x$`, S`$\sin x$`, S`$-\sin x$`], "Half-turn."),
  mc(S`Which equals $\tan(\pi+x)$?`, S`$\tan x$`, [S`$-\tan x$`, S`$\cot x$`, S`$-\cot x$`], "Tangent has period π."),
  mc(S`Which equals $\sin(-x)$?`, S`$-\sin x$`, [S`$\sin x$`, S`$\cos x$`, S`$-\cos x$`], "Sine is odd."),
  mc(S`Which equals $\cos(2\pi-x)$?`, S`$\cos x$`, [S`$-\cos x$`, S`$\sin x$`, S`$-\sin x$`], "Mirror in the x-axis."),
  tf(S`Cosine is an even function.`, true, "cos(−x) = cos x."),
  tf(S`Sine is an even function.`, false, "sin(−x) = −sin x."),
  tf(S`$\tan(-x)=-\tan x$.`, true, "Tangent is odd."),
  fill(S`Sine and cosine are called ___ of each other.`, ["cofunctions", "cofunction"], "cos means 'complement's sine'."),
  num(S`If $\sin x=0.3$, what is $\sin(\pi-x)$?`, 0.3, "Same.", null, 0.001),
  num(S`If $\cos x=0.7$, what is $\cos(-x)$?`, 0.7, "Even.", null, 0.001),
  num(S`If $\sin x=0.4$, what is $\sin(-x)$?`, -0.4, "Odd.", null, 0.001),
  num(S`If $\cos x=0.2$, what is $\cos(\pi+x)$?`, -0.2, "Half-turn.", null, 0.001),
  num(S`If $\sin x=0.9$, what is $\cos\left(\frac\pi2-x\right)$?`, 0.9, "Cofunction.", null, 0.001),
  mc("The two marked points are reflections in the y-axis. If the blue point is at angle x, the red point is at…", S`$\pi-x$`, [S`$\pi+x$`, S`$-x$`, S`$\frac\pi2-x$`], "Mirror in the y-axis.", planeDoc(UC(150, "?", [{ x: Math.cos(Math.PI / 6), y: 0.5, label: "x", color: "blue" }]))),
  mc("The green curve is y = cos x and the violet curve is y = sin x. Cosine is sine shifted how far to the left?", S`$\frac\pi2$`, [S`$\pi$`, S`$\frac\pi4$`, S`$2\pi$`], "Peak at 0 rather than π/2.", planeDoc(TG([[Math.sin, "violet"], [Math.cos, "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
];

export const M = [
  num(S`$\sin\frac\pi{10}\approx0.3090$. Find $\cos\frac{2\pi}5$ (4 decimals).`, 0.309, "π/2 − π/10 = 2π/5.", null, 0.0005),
  num(S`$\cos\frac\pi9\approx0.9397$. Find $\sin\frac{7\pi}{18}$ (4 decimals).`, 0.9397, "π/2 − π/9 = 7π/18.", null, 0.0005),
  num(S`$\sin\frac{3\pi}{11}\approx0.7557$. Find $\sin\frac{8\pi}{11}$ (4 decimals).`, 0.7557, "π − 3π/11 = 8π/11.", null, 0.0005),
  num(S`$\cos\frac\pi{5}\approx0.8090$. Find $\cos\frac{4\pi}5$ (4 decimals).`, -0.809, "π − π/5.", null, 0.0005),
  num(S`$\cos\frac{2\pi}{9}\approx0.7660$. Find $\cos\frac{16\pi}9$ (4 decimals).`, 0.766, "2π − 2π/9.", null, 0.0005),
  num(S`$\tan\frac{\pi}{5}\approx0.7265$. Find $\cot\frac{3\pi}{10}$ (4 decimals).`, 0.7265, "π/2 − 3π/10 = π/5.", null, 0.0005),
  mc(S`Simplify $\sin(\pi-x)+\sin(\pi+x)$.`, "0", [S`$2\sin x$`, S`$-2\sin x$`, S`$\cos x$`], "sin x − sin x."),
  mc(S`Simplify $\cos(-x)-\cos(\pi+x)$.`, S`$2\cos x$`, ["0", S`$-2\cos x$`, S`$\cos2x$`], "cos x + cos x."),
  mc(S`Simplify $\sin\left(\frac\pi2-x\right)\tan x$.`, S`$\sin x$`, [S`$\cos x$`, S`$\tan x$`, S`$\cos^2x$`], "cos x · sin x / cos x."),
  mc(S`Simplify $\dfrac{\cos\left(\frac\pi2-x\right)}{\sin(\pi-x)}$.`, "1", [S`$\tan x$`, S`$\cot x$`, "−1"], "sin x / sin x."),
  mc(S`Which equals $\sin\left(\frac\pi2+x\right)$?`, S`$\cos x$`, [S`$-\cos x$`, S`$\sin x$`, S`$-\sin x$`], "Quarter-turn."),
  mc(S`Which equals $\cos\left(\frac\pi2+x\right)$?`, S`$-\sin x$`, [S`$\sin x$`, S`$\cos x$`, S`$-\cos x$`], "Quarter-turn."),
  mc(S`Which equals $\sin\left(\frac{3\pi}2-x\right)$?`, S`$-\cos x$`, [S`$\cos x$`, S`$\sin x$`, S`$-\sin x$`], "Q3 and the name swaps."),
  mc(S`Which equals $\cos\left(\frac{3\pi}2+x\right)$?`, S`$\sin x$`, [S`$-\sin x$`, S`$\cos x$`, S`$-\cos x$`], "Q4 and the name swaps."),
  mc(S`Write $\sin\frac{5\pi}3$ using a special angle.`, S`$-\sin\frac\pi3$`, [S`$\sin\frac\pi3$`, S`$\cos\frac\pi3$`, S`$-\cos\frac\pi6\cdot\sin\frac\pi6$`], "2π − π/3."),
  num(S`$\tan x=4$. Find $\tan(\pi+x)\cdot\tan\left(\frac\pi2-x\right)$.`, 1, "tan x · cot x."),
  num(S`$\sin x=0.6$ with $x$ in Q1. Find $\cos(\pi-x)$.`, -0.8, "cos x = 0.8.", null, 0.001),
  tf(S`$\sin(x+2\pi)=\sin x$ for every $x$.`, true, "A full turn."),
  mc("From the graph, y = sin x is symmetric how?", "rotational symmetry about the origin", ["mirror symmetry in the y-axis", "mirror symmetry in the x-axis", "no symmetry"], "Sine is odd.", planeDoc(TG([[Math.sin, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("The marked angle is 5π/6. Which expression has the same value as sin(5π/6)?", S`$\sin\frac\pi6$`, [S`$-\sin\frac\pi6$`, S`$\cos\frac\pi6$`, S`$-\cos\frac\pi6$`], "π − π/6.", planeDoc(UC(150, "5π/6"))),
];

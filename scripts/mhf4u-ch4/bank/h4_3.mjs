// 4.3 Equivalent Trigonometric Expressions — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { UC, TG } from "../trigfig.mjs";
const S = String.raw;

export const TOPIC = "4.3 Equivalent Trigonometric Expressions";
export const Q = [
  mc(S`Simplify $\sin(\pi+x)\sin(-x)+\cos(\pi-x)\cos(2\pi-x)$.`, S`$\sin^2x-\cos^2x$`, ["1", "−1", S`$\cos^2x-\sin^2x$`], "(−sin x)(−sin x) + (−cos x)(cos x)."),
  mc(S`Simplify $\dfrac{\sin\left(\frac\pi2+x\right)\tan(\pi-x)}{\cos(-x)}$.`, S`$-\tan x$`, [S`$\tan x$`, S`$\cos x$`, S`$-\sin x$`], "cos x · (−tan x) / cos x."),
  mc(S`Simplify $\cos\left(\frac\pi2-x\right)\csc(\pi-x)$.`, "1", ["−1", S`$\sin^2x$`, S`$\cos x$`], "sin x · (1/sin x)."),
  mc(S`Simplify $\sec(\pi+x)\cos(-x)$.`, "−1", ["1", S`$\cos^2x$`, S`$-\cos^2x$`], "(−1/cos x)(cos x)."),
  mc(S`Simplify $\tan\left(\frac\pi2+x\right)\tan x$.`, "−1", ["1", S`$\tan^2x$`, "0"], "−cot x · tan x."),
  num(S`In a triangle $ABC$, $\cos A=0.6$. If $B+C$ is the sum of the other two angles, find $\cos(B+C)$.`, -0.6, "B + C = π − A.", null, 0.001),
  num(S`In a triangle $ABC$, $\sin(A+B)=0.8$. Find $\sin C$.`, 0.8, "A + B = π − C.", null, 0.001),
  num(S`In a right triangle with acute angles $A$ and $B$, $\sin A=0.28$. Find $\cos B$.`, 0.28, "B = π/2 − A.", null, 0.001),
  num(S`$\cos x=a$, $x$ in Q1, $a=0.6$. Find $\sin\left(\frac\pi2+x\right)+\cos(\pi+x)$.`, 0, "cos x − cos x."),
  num(S`$\sin x=\frac{5}{13}$ in Q2. Find $\cos(2\pi-x)$ (2 decimals).`, -0.92, "cos x = −12/13.", null, 0.005),
  num(S`$\cos x=-\frac35$ in Q3. Find $\sin(-x)$.`, 0.8, "sin x = −0.8, so −sin x = 0.8.", null, 0.001),
  num(S`$\tan x=-\frac43$ in Q4. Find $\sin\left(\frac\pi2-x\right)$.`, 0.6, "cos x = 3/5.", null, 0.001),
  mc(S`For which expression is the value always the same as $\sin x$?`, S`$\cos\left(x-\frac\pi2\right)$`, [S`$\cos\left(x+\frac\pi2\right)$`, S`$\sin\left(x-\frac\pi2\right)$`, S`$\sin(x+\pi)$`], "A cosine shifted π/2 right."),
  mc("The green curve is a transformation of y = sin x (violet). Which formula is it?", S`$y=\sin(\pi+x)$`, [S`$y=\sin(\pi-x)$`, S`$y=\cos x$`, S`$y=\sin\left(\frac\pi2+x\right)$`], "It is −sin x.", planeDoc(TG([[Math.sin, "violet"], [(x) => -Math.sin(x), "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("The green curve lies on the curve y = cos x. Which formula also gives it?", S`$y=\sin\left(x+\frac\pi2\right)$`, [S`$y=\sin\left(x-\frac\pi2\right)$`, S`$y=-\sin x$`, S`$y=\cos(\pi+x)$`], "Shift sine left π/2.", planeDoc(TG([[Math.cos, "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("Two points are half a turn apart on the unit circle. If the red point has coordinates (a, b), what is the blue point?", S`$(-a,-b)$`, [S`$(a,-b)$`, S`$(-a,b)$`, S`$(b,a)$`], "Half-turn about the origin.", planeDoc(UC(60, "(a, b)", [{ x: -0.5, y: -Math.sqrt(3) / 2, label: "?", color: "blue" }]))),
  mc("The blue point is the reflection of the red point in the line y = x. If the red point is at angle x, what is the angle of the blue point?", S`$\frac\pi2-x$`, [S`$\frac\pi2+x$`, S`$\pi-x$`, S`$-x$`], "Swaps cosine and sine.", planeDoc(UC(25, "x", [{ x: Math.sin((25 * Math.PI) / 180), y: Math.cos((25 * Math.PI) / 180), label: "?", color: "blue" }]))),
  tf(S`$\sin(x+\pi)=\sin x+\sin\pi$ for every $x$.`, false, "sin(x + π) = −sin x, but the right side is sin x."),
  tf(S`$\cos(\pi-x)+\cos x=0$ for every $x$.`, true, "−cos x + cos x."),
  tf(S`$\sin\left(\frac\pi2-x\right)=\sin\frac\pi2-\sin x$ for every $x$.`, false, "Try x = π: the left side is sin(−π/2) = −1, but the right side is 1 − 0 = 1."),
];

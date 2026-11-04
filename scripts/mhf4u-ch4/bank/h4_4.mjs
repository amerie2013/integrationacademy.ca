// 4.4 Compound Angle Formulas — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { ARM, TG } from "../trigfig.mjs";
const S = String.raw;

export const TOPIC = "4.4 Compound Angle Formulas";
export const Q = [
  mc(S`$\sin a=\frac8{17}$ in Q2 and $\cos b=-\frac35$ in Q3. What is $\sin(a+b)$?`, S`$\frac{36}{85}$`, [S`$-\frac{36}{85}$`, S`$\frac{84}{85}$`, S`$-\frac{84}{85}$`], "(8/17)(−3/5) + (−15/17)(−4/5) = (−24 + 60)/85."),
  mc(S`$\cos a=\frac{12}{13}$ in Q4 and $\sin b=\frac45$ in Q2. What is $\cos(a+b)$?`, S`$-\frac{16}{65}$`, [S`$\frac{16}{65}$`, S`$-\frac{56}{65}$`, S`$\frac{56}{65}$`], "(12/13)(−3/5) − (−5/13)(4/5) = (−36 + 20)/65."),
  mc(S`$\sin a=-\frac35$ in Q3 and $\tan b=\frac{5}{12}$ in Q1. What is $\sin(a-b)$?`, S`$-\frac{16}{65}$`, [S`$\frac{16}{65}$`, S`$-\frac{56}{65}$`, S`$\frac{56}{65}$`], "(−3/5)(12/13) − (−4/5)(5/13) = (−36 + 20)/65."),
  num(S`$\tan a=\frac13$, $\tan b=\frac12$, both acute. Find $a+b$ in radians (4 decimals).`, 0.7854, "tan(a + b) = 1.", null, 0.001),
  num(S`$\tan a=2$, $\tan b=3$, both acute. Find $a+b$ in radians (4 decimals).`, 2.3562, "tan(a + b) = −1 and a + b is in Q2: 3π/4.", null, 0.001),
  num(S`$\tan(a+b)=5$ and $\tan a=2$. Find $\tan b$ (4 decimals).`, 0.2727, "(2 + t)/(1 − 2t) = 5 gives t = 3/11.", null, 0.001),
  mc(S`Rewrite $\sin x+\sqrt3\cos x$ as $R\sin(x+\alpha)$, $R>0$.`, S`$2\sin\left(x+\frac\pi3\right)$`, [S`$2\sin\left(x+\frac\pi6\right)$`, S`$4\sin\left(x+\frac\pi3\right)$`, S`$\sqrt3\sin\left(x+\frac\pi3\right)$`], "R = 2; cos α = 1/2, sin α = √3/2."),
  num(S`What is the maximum value of $3\sin x+4\cos x$?`, 5, "R = √(9 + 16)."),
  num(S`What is the minimum value of $5\sin x-12\cos x$?`, -13, "R = 13."),
  mc("The graph shows y = R sin(x + α). Which pair fits sin x + cos x?", S`$R=\sqrt2,\ \alpha=\frac\pi4$`, [S`$R=2,\ \alpha=\frac\pi4$`, S`$R=\sqrt2,\ \alpha=\frac\pi2$`, S`$R=1,\ \alpha=\frac\pi4$`], "R = √(1 + 1).", planeDoc(TG([[(x) => Math.sin(x) + Math.cos(x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("The violet curve is y = cos x cos 1 − sin x sin 1. Which single ratio is it?", S`$\cos(x+1)$`, [S`$\cos(x-1)$`, S`$\sin(x+1)$`, S`$\cos x$`], "cos(a + b).", planeDoc(TG([[(x) => Math.cos(x + 1), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("The terminal arms of a and b pass through (3, 4) and (−4, 3) respectively. What is cos(a − b)?", "0", ["1", S`$\frac{24}{25}$`, S`$-\frac{7}{25}$`], "(3/5)(−4/5) + (4/5)(3/5) = 0: the arms are perpendicular.", planeDoc({ ...ARM(3, 4, "a"), points: [{ x: 3, y: 4, label: "a", color: "red" }, { x: -4, y: 3, label: "b", color: "blue" }] })),
  mc("The terminal arm passes through (−7, 24). What is sin(θ + π/2)?", S`$-\frac7{25}$`, [S`$\frac7{25}$`, S`$\frac{24}{25}$`, S`$-\frac{24}{25}$`], "sin(θ + π/2) = cos θ.", planeDoc(ARM(-7, 24, "(−7, 24)"))),
  mc(S`Simplify $\sin(x+y)\cos y-\cos(x+y)\sin y$.`, S`$\sin x$`, [S`$\cos x$`, S`$\sin(x+2y)$`, S`$\sin y$`], "sin((x + y) − y)."),
  mc(S`Simplify $\cos(x-y)\cos y-\sin(x-y)\sin y$.`, S`$\cos x$`, [S`$\sin x$`, S`$\cos(x-2y)$`, S`$\cos y$`], "cos((x − y) + y)."),
  mc(S`Which equals $\dfrac{\sin(x+y)}{\cos x\cos y}$?`, S`$\tan x+\tan y$`, [S`$\tan(x+y)$`, S`$\tan x\tan y$`, "1"], "Divide each term."),
  mc(S`Which equals $\cos(x+y)\cos(x-y)$?`, S`$\cos^2x-\sin^2y$`, [S`$\cos^2x+\sin^2y$`, S`$\cos2x$`, S`$\sin^2x-\cos^2y$`], "Difference of squares, then Pythagoras."),
  tf(S`$\sin(x+y)\sin(x-y)=\sin^2x-\sin^2y$ for all $x$ and $y$.`, true, "Difference of squares, then Pythagoras."),
  tf(S`If $a+b=\frac\pi2$, then $\sin a\cos b+\cos a\sin b=1$.`, true, "It is sin(a + b)."),
  num(S`In a triangle, $\tan A=1$ and $\tan B=2$. Find $\tan C$.`, 3, "C = π − (A + B), so tan C = −tan(A + B) = −(3/(1 − 2))."),
];

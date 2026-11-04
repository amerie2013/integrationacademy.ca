// 4.4 Compound Angle Formulas — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { UC, ARM } from "../trigfig.mjs";
const S = String.raw;

export const E = [
  mc(S`Which is the formula for $\sin(a+b)$?`, S`$\sin a\cos b+\cos a\sin b$`, [S`$\sin a+\sin b$`, S`$\cos a\cos b-\sin a\sin b$`, S`$\sin a\sin b+\cos a\cos b$`], "Mixed terms, same sign."),
  mc(S`Which is the formula for $\sin(a-b)$?`, S`$\sin a\cos b-\cos a\sin b$`, [S`$\sin a-\sin b$`, S`$\sin a\cos b+\cos a\sin b$`, S`$\cos a\cos b+\sin a\sin b$`], "Mixed terms, same sign."),
  mc(S`Which is the formula for $\cos(a+b)$?`, S`$\cos a\cos b-\sin a\sin b$`, [S`$\cos a+\cos b$`, S`$\cos a\cos b+\sin a\sin b$`, S`$\sin a\cos b+\cos a\sin b$`], "Matching terms, opposite sign."),
  mc(S`Which is the formula for $\cos(a-b)$?`, S`$\cos a\cos b+\sin a\sin b$`, [S`$\cos a-\cos b$`, S`$\cos a\cos b-\sin a\sin b$`, S`$\sin a\cos b-\cos a\sin b$`], "Matching terms, opposite sign."),
  mc(S`Which sum equals $\frac{7\pi}{12}$?`, S`$\frac\pi3+\frac\pi4$`, [S`$\frac\pi6+\frac\pi4$`, S`$\frac\pi3+\frac\pi6$`, S`$\frac\pi2+\frac\pi6$`], "4π/12 + 3π/12."),
  mc(S`Which difference equals $\frac\pi{12}$?`, S`$\frac\pi3-\frac\pi4$`, [S`$\frac\pi4-\frac\pi3$`, S`$\frac\pi2-\frac\pi3$`, S`$\frac\pi3-\frac\pi6$`], "4π/12 − 3π/12."),
  mc(S`Which sum equals $\frac{5\pi}{12}$?`, S`$\frac\pi4+\frac\pi6$`, [S`$\frac\pi3+\frac\pi4$`, S`$\frac\pi3+\frac\pi6$`, S`$\frac\pi2+\frac\pi{12}$`], "3π/12 + 2π/12."),
  tf(S`$\sin(a+b)=\sin a+\sin b$ for all $a$ and $b$.`, false, "Try a = b = π/2."),
  tf(S`$\cos(a+b)$ contains a minus sign in its formula.`, true, "cos a cos b − sin a sin b."),
  num(S`Evaluate $\sin\frac\pi6\cos\frac\pi3+\cos\frac\pi6\sin\frac\pi3$.`, 1, "sin(π/2)."),
  num(S`Evaluate $\cos\frac\pi3\cos\frac\pi6-\sin\frac\pi3\sin\frac\pi6$.`, 0, "cos(π/2)."),
  num(S`Evaluate $\sin\frac\pi2\cos\frac\pi3-\cos\frac\pi2\sin\frac\pi3$ (1 decimal).`, 0.5, "sin(π/6).", null, 0.001),
  mc(S`Which ratio equals $\sin5x\cos2x+\cos5x\sin2x$?`, S`$\sin7x$`, [S`$\sin3x$`, S`$\cos7x$`, S`$\cos3x$`], "sin(a + b)."),
  mc(S`Which ratio equals $\sin5x\cos2x-\cos5x\sin2x$?`, S`$\sin3x$`, [S`$\sin7x$`, S`$\cos7x$`, S`$\cos3x$`], "sin(a − b)."),
  mc(S`Which ratio equals $\cos4x\cos x-\sin4x\sin x$?`, S`$\cos5x$`, [S`$\cos3x$`, S`$\sin5x$`, S`$\sin3x$`], "cos(a + b)."),
  mc(S`Which ratio equals $\cos4x\cos x+\sin4x\sin x$?`, S`$\cos3x$`, [S`$\cos5x$`, S`$\sin5x$`, S`$\sin3x$`], "cos(a − b)."),
  fill(S`In the formula for $\cos(a-b)$, the sign between the terms is ___.`, ["plus", "+", "positive"], "Cosine flips the sign."),
  num(S`$\tan a=1$ and $\tan b=0$. Find $\tan(a+b)$.`, 1, "(1 + 0)/(1 − 0)."),
  mc("The marked angle is 5π/12. Which pair can be used to find its exact sine?", S`$\frac\pi4,\ \frac\pi6$`, [S`$\frac\pi3,\ \frac\pi4$`, S`$\frac\pi3,\ \frac\pi6$`, S`$\frac\pi4,\ \frac\pi4$`], "3π/12 + 2π/12.", planeDoc(UC(75, "5π/12"))),
  mc("The marked angle is π/12. Which expression gives its exact cosine?", S`$\cos\frac\pi3\cos\frac\pi4+\sin\frac\pi3\sin\frac\pi4$`, [S`$\cos\frac\pi3\cos\frac\pi4-\sin\frac\pi3\sin\frac\pi4$`, S`$\cos\frac\pi3-\cos\frac\pi4$`, S`$\sin\frac\pi3\cos\frac\pi4-\cos\frac\pi3\sin\frac\pi4$`], "cos(a − b).", planeDoc(UC(15, "π/12"))),
];

export const M = [
  mc(S`Find the exact value of $\sin\frac{7\pi}{12}$.`, S`$\frac{\sqrt6+\sqrt2}4$`, [S`$\frac{\sqrt6-\sqrt2}4$`, S`$\frac{\sqrt2-\sqrt6}4$`, S`$\frac{\sqrt3+1}2$`], "π/3 + π/4."),
  mc(S`Find the exact value of $\cos\frac{5\pi}{12}$.`, S`$\frac{\sqrt6-\sqrt2}4$`, [S`$\frac{\sqrt6+\sqrt2}4$`, S`$\frac{\sqrt2-\sqrt6}4$`, S`$\frac{\sqrt3-1}2$`], "π/4 + π/6."),
  mc(S`Find the exact value of $\tan\frac\pi{12}$.`, S`$2-\sqrt3$`, [S`$2+\sqrt3$`, S`$\sqrt3-2$`, S`$\frac{\sqrt3}3$`], "π/3 − π/4."),
  mc(S`Find the exact value of $\sin\frac{11\pi}{12}$.`, S`$\frac{\sqrt6-\sqrt2}4$`, [S`$\frac{\sqrt6+\sqrt2}4$`, S`$-\frac{\sqrt6-\sqrt2}4$`, S`$\frac12$`], "π − π/12."),
  num(S`Evaluate $\cos\frac{7\pi}{12}$ (4 decimals).`, -0.2588, "(√2 − √6)/4.", null, 0.001),
  num(S`Evaluate $\tan\frac{7\pi}{12}$ (2 decimals).`, -3.73, "−2 − √3.", null, 0.01),
  mc(S`$\sin a=\frac35$ and $\cos b=\frac5{13}$, both in Q1. What is $\sin(a+b)$?`, S`$\frac{63}{65}$`, [S`$\frac{33}{65}$`, S`$\frac{16}{65}$`, S`$\frac{56}{65}$`], "(3/5)(5/13) + (4/5)(12/13)."),
  mc(S`$\sin a=\frac35$ and $\cos b=\frac5{13}$, both in Q1. What is $\cos(a+b)$?`, S`$-\frac{16}{65}$`, [S`$\frac{16}{65}$`, S`$\frac{56}{65}$`, S`$\frac{63}{65}$`], "(4/5)(5/13) − (3/5)(12/13)."),
  mc(S`$\cos a=\frac45$ in Q1 and $\sin b=\frac{12}{13}$ in Q2. What is $\cos(a-b)$?`, S`$\frac{16}{65}$`, [S`$-\frac{16}{65}$`, S`$\frac{56}{65}$`, S`$\frac{63}{65}$`], "(4/5)(−5/13) + (3/5)(12/13)."),
  num(S`$\tan a=3$ and $\tan b=2$. Find $\tan(a-b)$ (4 decimals).`, 0.1429, "1/7.", null, 0.001),
  num(S`$\tan a=\frac12$ and $\tan b=\frac15$. Find $\tan(a+b)$ (4 decimals).`, 0.7778, "(7/10)/(9/10).", null, 0.001),
  num(S`Evaluate $\sin\frac{2\pi}{7}\cos\frac{3\pi}{14}+\cos\frac{2\pi}7\sin\frac{3\pi}{14}$.`, 1, "4π/14 + 3π/14 = π/2."),
  num(S`Evaluate $\cos\frac{5\pi}{18}\cos\frac\pi9+\sin\frac{5\pi}{18}\sin\frac\pi9$ (4 decimals).`, 0.866, "cos(π/6).", null, 0.001),
  mc(S`Which equals $\cos\left(x+\frac\pi2\right)$, from the formula?`, S`$-\sin x$`, [S`$\sin x$`, S`$\cos x$`, S`$-\cos x$`], "cos x · 0 − sin x · 1."),
  mc(S`Which equals $\sin\left(x+\frac\pi4\right)$?`, S`$\frac{\sqrt2}2(\sin x+\cos x)$`, [S`$\sin x+\frac{\sqrt2}2$`, S`$\frac{\sqrt2}2\sin x$`, S`$\sin x\cos x$`], "cos(π/4) = sin(π/4) = √2/2."),
  mc(S`Which equals $\sin(x+y)+\sin(x-y)$?`, S`$2\sin x\cos y$`, [S`$2\cos x\sin y$`, S`$2\sin x$`, S`$\sin2x$`], "The mixed terms cancel."),
  mc(S`Which equals $\cos(x-y)-\cos(x+y)$?`, S`$2\sin x\sin y$`, [S`$2\cos x\cos y$`, "0", S`$-2\sin x\sin y$`], "The cos cos terms cancel."),
  mc("The terminal arm of a is through (4, 3) and b = π/4. What is sin(a + b)?", S`$\frac{7\sqrt2}{10}$`, [S`$\frac{\sqrt2}{10}$`, S`$\frac75$`, S`$\frac{7}{10}$`], "(3/5)(√2/2) + (4/5)(√2/2).", planeDoc(ARM(4, 3, "(4, 3)"))),
  mc("The terminal arm of a is through (−5, 12) and b = π/6. What is cos(a − b)?", S`$\frac{12-5\sqrt3}{26}$`, [S`$\frac{5\sqrt3+12}{26}$`, S`$\frac{5\sqrt3-12}{26}$`, S`$\frac{7}{13}$`], "(−5/13)(√3/2) + (12/13)(1/2).", planeDoc(ARM(-5, 12, "(−5, 12)"))),
  tf(S`$\tan\left(x+\frac\pi4\right)=\dfrac{1+\tan x}{1-\tan x}$.`, true, "tan(π/4) = 1."),
];

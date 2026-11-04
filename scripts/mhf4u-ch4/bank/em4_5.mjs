// 4.5 Double Angle Formulas — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { ARM, TG } from "../trigfig.mjs";
const S = String.raw;

export const E = [
  mc(S`Which equals $\sin2x$?`, S`$2\sin x\cos x$`, [S`$2\sin x$`, S`$\sin^2x$`, S`$\cos^2x-\sin^2x$`], "Sum formula with a = b."),
  mc(S`Which does NOT equal $\cos2x$?`, S`$2\cos x$`, [S`$\cos^2x-\sin^2x$`, S`$2\cos^2x-1$`, S`$1-2\sin^2x$`], "The 2 belongs inside the angle."),
  mc(S`Which equals $\tan2x$?`, S`$\dfrac{2\tan x}{1-\tan^2x}$`, [S`$2\tan x$`, S`$\dfrac{2\tan x}{1+\tan^2x}$`, S`$\tan^2x$`], "Sum formula with a = b."),
  mc(S`Which ratio equals $2\sin3x\cos3x$?`, S`$\sin6x$`, [S`$\sin3x$`, S`$\cos6x$`, S`$2\sin6x$`], "2u = 6x."),
  mc(S`Which ratio equals $\cos^24x-\sin^24x$?`, S`$\cos8x$`, [S`$\cos4x$`, S`$\sin8x$`, "1"], "2u = 8x."),
  mc(S`Which ratio equals $1-2\sin^25x$?`, S`$\cos10x$`, [S`$\cos5x$`, S`$\sin10x$`, S`$\cos^25x$`], "2u = 10x."),
  mc(S`Which ratio equals $2\cos^2x-1$?`, S`$\cos2x$`, [S`$\sin2x$`, S`$\cos x$`, S`$\cos^2x$`], "Second form."),
  num(S`$\sin x=0.6$, $\cos x=0.8$. Find $\sin2x$.`, 0.96, "2(0.6)(0.8).", null, 0.001),
  num(S`$\sin x=0.8$, $\cos x=0.6$. Find $\cos2x$.`, -0.28, "0.36 − 0.64.", null, 0.001),
  num(S`$\cos x=0.5$. Find $\cos2x$.`, -0.5, "2(0.25) − 1.", null, 0.001),
  num(S`$\sin x=0.2$. Find $\cos2x$.`, 0.92, "1 − 2(0.04).", null, 0.001),
  num(S`$\tan x=1$. What happens to $\tan2x$? Enter 1 if it is not defined, 0 if it is defined.`, 1, "The denominator 1 − tan²x is 0."),
  num(S`Evaluate $2\sin\frac\pi4\cos\frac\pi4$.`, 1, "sin(π/2)."),
  num(S`Evaluate $2\cos^2\frac\pi6-1$ (1 decimal).`, 0.5, "cos(π/3).", null, 0.001),
  num(S`Evaluate $1-2\sin^2\frac\pi4$.`, 0, "cos(π/2)."),
  tf(S`$\sin2x=2\sin x$ for all $x$.`, false, "Try x = π/2."),
  tf(S`The largest value of $\sin2x$ is 1.`, true, "It is a sine."),
  fill(S`$\sin^2x+\cos^2x=$ ___`, ["1"], "Pythagorean identity."),
  mc("The graph shows y = sin 2x. What is its period?", S`$\pi$`, [S`$2\pi$`, S`$\frac\pi2$`, S`$4\pi$`], "2π/2.", planeDoc(TG([[(x) => Math.sin(2 * x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("Which curve does the graph show?", S`$y=\cos2x$`, [S`$y=2\cos x$`, S`$y=\cos x$`, S`$y=\sin2x$`], "Height 1, period π, starts at 1.", planeDoc(TG([[(x) => Math.cos(2 * x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
];

export const M = [
  mc(S`$\sin x=\frac{12}{13}$ in Q1. What is $\sin2x$?`, S`$\frac{120}{169}$`, [S`$\frac{24}{13}$`, S`$-\frac{120}{169}$`, S`$\frac{119}{169}$`], "2(12/13)(5/13)."),
  mc(S`$\sin x=\frac{12}{13}$ in Q2. What is $\sin2x$?`, S`$-\frac{120}{169}$`, [S`$\frac{120}{169}$`, S`$\frac{24}{13}$`, S`$-\frac{119}{169}$`], "cos x = −5/13."),
  mc(S`$\sin x=\frac{12}{13}$ in Q2. What is $\cos2x$?`, S`$-\frac{119}{169}$`, [S`$\frac{119}{169}$`, S`$-\frac{120}{169}$`, S`$\frac{25}{169}$`], "1 − 2(144/169)."),
  mc(S`$\cos x=-\frac35$ in Q3. What is $\sin2x$?`, S`$\frac{24}{25}$`, [S`$-\frac{24}{25}$`, S`$\frac7{25}$`, S`$-\frac7{25}$`], "2(−4/5)(−3/5)."),
  mc(S`$\cos x=-\frac35$ in Q3. What is $\cos2x$?`, S`$-\frac7{25}$`, [S`$\frac7{25}$`, S`$\frac{24}{25}$`, S`$-\frac{24}{25}$`], "2(9/25) − 1."),
  num(S`$\tan x=2$. Find $\tan2x$ (4 decimals).`, -1.3333, "4/(1 − 4).", null, 0.001),
  num(S`$\tan x=\frac13$. Find $\tan2x$.`, 0.75, "(2/3)/(8/9).", null, 0.001),
  num(S`Evaluate $\cos^2\frac\pi{12}-\sin^2\frac\pi{12}$ (4 decimals).`, 0.866, "cos(π/6).", null, 0.001),
  num(S`Evaluate $\sin\frac\pi8\cos\frac\pi8$ (4 decimals).`, 0.3536, "½ sin(π/4).", null, 0.001),
  num(S`Evaluate $4\sin\frac\pi{12}\cos\frac\pi{12}$.`, 1, "2 sin(π/6)."),
  mc(S`What is the exact value of $\cos\frac\pi8$?`, S`$\frac{\sqrt{2+\sqrt2}}2$`, [S`$\frac{\sqrt{2-\sqrt2}}2$`, S`$\frac{\sqrt2}4$`, S`$\frac{\sqrt2}2$`], "cos²(π/8) = (1 + √2/2)/2."),
  mc(S`Which equals $\sin^2x$?`, S`$\frac{1-\cos2x}2$`, [S`$\frac{1+\cos2x}2$`, S`$1-\cos2x$`, S`$\cos2x-1$`], "From cos 2x = 1 − 2 sin²x."),
  mc(S`Which equals $\cos^2x$?`, S`$\frac{1+\cos2x}2$`, [S`$\frac{1-\cos2x}2$`, S`$1+\cos2x$`, S`$\cos2x+1$`], "From cos 2x = 2 cos²x − 1."),
  mc(S`Which equals $\sin x\cos x$?`, S`$\frac12\sin2x$`, [S`$\sin2x$`, S`$2\sin2x$`, S`$\frac12\cos2x$`], "Half of 2 sin x cos x."),
  mc(S`Simplify $(\sin x+\cos x)^2$.`, S`$1+\sin2x$`, ["1", S`$1+\cos2x$`, S`$\sin2x$`], "Expand."),
  mc(S`Simplify $\dfrac{\sin2x}{2\cos x}$.`, S`$\sin x$`, [S`$\cos x$`, S`$\tan x$`, S`$\sin2x$`], "Cancel 2 cos x."),
  num(S`$\cos2x=0.5$ with $x$ in Q1. Find $\sin x$ (2 decimals).`, 0.5, "1 − 2 sin²x = 0.5: sin²x = 0.25.", null, 0.005),
  mc("The terminal arm passes through (8, 15). What is sin 2θ?", S`$\frac{240}{289}$`, [S`$\frac{120}{289}$`, S`$\frac{161}{289}$`, S`$\frac{30}{17}$`], "2(15/17)(8/17).", planeDoc(ARM(8, 15, "(8, 15)"))),
  mc("The terminal arm passes through (−2, 1). What is cos 2θ?", S`$\frac35$`, [S`$-\frac35$`, S`$-\frac45$`, S`$\frac45$`], "cos²θ − sin²θ = 4/5 − 1/5.", planeDoc(ARM(-2, 1, "(−2, 1)"))),
  mc("The curve is y = sin x cos x. What is its maximum value?", S`$\frac12$`, ["1", "2", S`$\frac14$`], "It equals ½ sin 2x.", planeDoc(TG([[(x) => Math.sin(x) * Math.cos(x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -1, ymax: 1 }, [], { step: { x: 1, y: 0.5 } }))),
];

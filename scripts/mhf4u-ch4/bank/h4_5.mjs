// 4.5 Double Angle Formulas — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { ARM, TG } from "../trigfig.mjs";
const S = String.raw;

export const TOPIC = "4.5 Double Angle Formulas";
export const Q = [
  mc(S`$\cos2x=\frac{7}{25}$ with $\frac{3\pi}2\lt x\lt2\pi$. What is $\sin x$?`, S`$-\frac35$`, [S`$\frac35$`, S`$-\frac45$`, S`$\frac45$`], "sin²x = (1 − 7/25)/2 = 9/25; negative in Q4."),
  mc(S`$\cos2x=-\frac{119}{169}$ with $\frac\pi2\lt x\lt\pi$. What is $\cos x$?`, S`$-\frac5{13}$`, [S`$\frac5{13}$`, S`$-\frac{12}{13}$`, S`$\frac{12}{13}$`], "cos²x = (1 − 119/169)/2 = 25/169."),
  num(S`$\sin x+\cos x=\frac75$. Find $\sin2x$.`, 0.96, "1 + sin 2x = 49/25.", null, 0.001),
  num(S`$\sin x-\cos x=\frac13$. Find $\sin2x$ (4 decimals).`, 0.8889, "1 − sin 2x = 1/9.", null, 0.001),
  num(S`$\tan2x=\frac34$ with $x$ in Q1. Find $\tan x$ (2 decimals).`, 0.33, "2t/(1 − t²) = 3/4 gives 3t² + 8t − 3 = 0, so t = 1/3.", null, 0.005),
  num(S`Find $\tan\frac\pi8$ (4 decimals).`, 0.4142, "√2 − 1.", null, 0.001),
  num(S`Find $\sin\frac{3\pi}8$ (4 decimals).`, 0.9239, "sin² = (1 − cos(3π/4))/2.", null, 0.001),
  mc(S`Express $\sin3x$ using $\sin x$ only.`, S`$3\sin x-4\sin^3x$`, [S`$3\sin x$`, S`$4\sin^3x-3\sin x$`, S`$\sin x-\sin^3x$`], "sin(2x + x)."),
  mc(S`Express $\cos3x$ using $\cos x$ only.`, S`$4\cos^3x-3\cos x$`, [S`$3\cos x-4\cos^3x$`, S`$3\cos x$`, S`$\cos^3x$`], "cos(2x + x)."),
  mc(S`Express $\sin4x$ using $\sin x$ and $\cos x$.`, S`$4\sin x\cos x(\cos^2x-\sin^2x)$`, [S`$4\sin x\cos x$`, S`$2\sin x\cos x$`, S`$4\sin^2x\cos^2x$`], "2 sin 2x cos 2x."),
  mc(S`Which is equal to $\dfrac{1+\cos2x}{\sin2x}$?`, S`$\cot x$`, [S`$\tan x$`, S`$\csc x$`, S`$\sec x$`], "2 cos²x / (2 sin x cos x)."),
  mc(S`Which is equal to $\dfrac{2\tan x}{1+\tan^2x}$?`, S`$\sin2x$`, [S`$\cos2x$`, S`$\tan2x$`, S`$2\sin x$`], "2 tan x cos²x = 2 sin x cos x."),
  mc(S`Which is equal to $\dfrac{1-\tan^2x}{1+\tan^2x}$?`, S`$\cos2x$`, [S`$\sin2x$`, S`$\tan2x$`, "1"], "Multiply through by cos²x."),
  mc("The graph shows y = cos²x. What is its period?", S`$\pi$`, [S`$2\pi$`, S`$\frac\pi2$`, "1"], "cos²x = (1 + cos 2x)/2.", planeDoc(TG([[(x) => Math.cos(x) ** 2, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -1, ymax: 2 }))),
  mc("The curve is y = 3 sin x cos x. What is its amplitude?", S`$\frac32$`, ["3", "6", S`$\frac12$`], "(3/2) sin 2x.", planeDoc(TG([[(x) => 3 * Math.sin(x) * Math.cos(x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("The curve shown is the graph of which function?", S`$y=2\sin^2x$`, [S`$y=2\sin x$`, S`$y=\sin2x$`, S`$y=2\cos^2x$`], "1 − cos 2x: minimum 0 at x = 0.", planeDoc(TG([[(x) => 2 * Math.sin(x) ** 2, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -1, ymax: 3 }))),
  mc("The terminal arm passes through the marked point in Q3. What is tan 2θ?", S`$-\frac{4}{3}$`, [S`$\frac43$`, S`$-\frac34$`, S`$\frac34$`], "tan θ = 2: 4/(1 − 4).", planeDoc(ARM(-1, -2, "(−1, −2)"))),
  tf(S`If $\sin x$ and $\cos x$ have opposite signs, then $\sin2x\lt0$.`, true, "2 sin x cos x < 0."),
  tf(S`$\cos2x\le\cos^2x$ for every $x$.`, true, "cos²x − cos 2x = sin²x ≥ 0."),
  num(S`A projectile launched at angle $\theta$ has range $R=\frac{v^2}{g}\sin2\theta$. What angle in degrees gives the greatest range?`, 45, "sin 2θ = 1."),
];

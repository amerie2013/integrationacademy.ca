// 4.5 Formules de l'angle double — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { ARM, TG } from "../trigfig.mjs";
const S = String.raw;

export const TOPIC = "4.5 Formules de l'angle double";
export const Q = [
  mc(S`$\cos2x=\frac{7}{25}$ avec $\frac{3\pi}2\lt x\lt2\pi$. Que vaut $\sin x$?`, S`$-\frac35$`, [S`$\frac35$`, S`$-\frac45$`, S`$\frac45$`], "sin²x = (1 − 7/25)/2 = 9/25; négatif dans le quadrant 4."),
  mc(S`$\cos2x=-\frac{119}{169}$ avec $\frac\pi2\lt x\lt\pi$. Que vaut $\cos x$?`, S`$-\frac5{13}$`, [S`$\frac5{13}$`, S`$-\frac{12}{13}$`, S`$\frac{12}{13}$`], "cos²x = (1 − 119/169)/2 = 25/169."),
  num(S`$\sin x+\cos x=\frac75$. Trouve $\sin2x$.`, 0.96, "1 + sin 2x = 49/25.", null, 0.001),
  num(S`$\sin x-\cos x=\frac13$. Trouve $\sin2x$ (4 décimales).`, 0.8889, "1 − sin 2x = 1/9.", null, 0.001),
  num(S`$\tan2x=\frac34$ avec $x$ dans le quadrant 1. Trouve $\tan x$ (au centième près).`, 0.33, "2t/(1 − t²) = 3/4 donne 3t² + 8t − 3 = 0, donc t = 1/3.", null, 0.005),
  num(S`Trouve $\tan\frac\pi8$ (4 décimales).`, 0.4142, "√2 − 1.", null, 0.001),
  num(S`Trouve $\sin\frac{3\pi}8$ (4 décimales).`, 0.9239, "sin² = (1 − cos(3π/4))/2.", null, 0.001),
  mc(S`Exprime $\sin3x$ à l'aide de $\sin x$ seulement.`, S`$3\sin x-4\sin^3x$`, [S`$3\sin x$`, S`$4\sin^3x-3\sin x$`, S`$\sin x-\sin^3x$`], "sin(2x + x)."),
  mc(S`Exprime $\cos3x$ à l'aide de $\cos x$ seulement.`, S`$4\cos^3x-3\cos x$`, [S`$3\cos x-4\cos^3x$`, S`$3\cos x$`, S`$\cos^3x$`], "cos(2x + x)."),
  mc(S`Exprime $\sin4x$ à l'aide de $\sin x$ et de $\cos x$.`, S`$4\sin x\cos x(\cos^2x-\sin^2x)$`, [S`$4\sin x\cos x$`, S`$2\sin x\cos x$`, S`$4\sin^2x\cos^2x$`], "2 sin 2x cos 2x."),
  mc(S`Laquelle est égale à $\dfrac{1+\cos2x}{\sin2x}$?`, S`$\cot x$`, [S`$\tan x$`, S`$\csc x$`, S`$\sec x$`], "2 cos²x / (2 sin x cos x)."),
  mc(S`Laquelle est égale à $\dfrac{2\tan x}{1+\tan^2x}$?`, S`$\sin2x$`, [S`$\cos2x$`, S`$\tan2x$`, S`$2\sin x$`], "2 tan x cos²x = 2 sin x cos x."),
  mc(S`Laquelle est égale à $\dfrac{1-\tan^2x}{1+\tan^2x}$?`, S`$\cos2x$`, [S`$\sin2x$`, S`$\tan2x$`, "1"], "Multiplie le numérateur et le dénominateur par cos²x."),
  mc("Le graphique représente y = cos²x. Quelle est sa période?", S`$\pi$`, [S`$2\pi$`, S`$\frac\pi2$`, "1"], "cos²x = (1 + cos 2x)/2.", planeDoc(TG([[(x) => Math.cos(x) ** 2, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -1, ymax: 2 }))),
  mc("La courbe est y = 3 sin x cos x. Quelle est son amplitude?", S`$\frac32$`, ["3", "6", S`$\frac12$`], "(3/2) sin 2x.", planeDoc(TG([[(x) => 3 * Math.sin(x) * Math.cos(x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("La courbe représentée est le graphique de quelle fonction?", S`$y=2\sin^2x$`, [S`$y=2\sin x$`, S`$y=\sin2x$`, S`$y=2\cos^2x$`], "1 − cos 2x : minimum 0 en x = 0.", planeDoc(TG([[(x) => 2 * Math.sin(x) ** 2, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -1, ymax: 3 }))),
  mc("Le côté terminal passe par le point indiqué, dans le quadrant 3. Que vaut tan 2θ?", S`$-\frac{4}{3}$`, [S`$\frac43$`, S`$-\frac34$`, S`$\frac34$`], "tan θ = 2 : 4/(1 − 4).", planeDoc(ARM(-1, -2, "(−1, −2)"))),
  tf(S`Si $\sin x$ et $\cos x$ sont de signes contraires, alors $\sin2x\lt0$.`, true, "2 sin x cos x < 0."),
  tf(S`$\cos2x\le\cos^2x$ pour toute valeur de $x$.`, true, "cos²x − cos 2x = sin²x ≥ 0."),
  num(S`Un projectile lancé selon un angle $\theta$ a une portée $R=\frac{v^2}{g}\sin2\theta$. Quel angle, en degrés, donne la plus grande portée?`, 45, "sin 2θ = 1."),
];

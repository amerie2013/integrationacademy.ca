// 4.5 Formules de l'angle double — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { ARM, TG } from "../trigfig.mjs";
const S = String.raw;

export const E = [
  mc(S`Laquelle est égale à $\sin2x$?`, S`$2\sin x\cos x$`, [S`$2\sin x$`, S`$\sin^2x$`, S`$\cos^2x-\sin^2x$`], "Formule de la somme avec a = b."),
  mc(S`Laquelle n'est PAS égale à $\cos2x$?`, S`$2\cos x$`, [S`$\cos^2x-\sin^2x$`, S`$2\cos^2x-1$`, S`$1-2\sin^2x$`], "Le 2 fait partie de l'angle."),
  mc(S`Laquelle est égale à $\tan2x$?`, S`$\dfrac{2\tan x}{1-\tan^2x}$`, [S`$2\tan x$`, S`$\dfrac{2\tan x}{1+\tan^2x}$`, S`$\tan^2x$`], "Formule de la somme avec a = b."),
  mc(S`Quel rapport est égal à $2\sin3x\cos3x$?`, S`$\sin6x$`, [S`$\sin3x$`, S`$\cos6x$`, S`$2\sin6x$`], "2u = 6x."),
  mc(S`Quel rapport est égal à $\cos^24x-\sin^24x$?`, S`$\cos8x$`, [S`$\cos4x$`, S`$\sin8x$`, "1"], "2u = 8x."),
  mc(S`Quel rapport est égal à $1-2\sin^25x$?`, S`$\cos10x$`, [S`$\cos5x$`, S`$\sin10x$`, S`$\cos^25x$`], "2u = 10x."),
  mc(S`Quel rapport est égal à $2\cos^2x-1$?`, S`$\cos2x$`, [S`$\sin2x$`, S`$\cos x$`, S`$\cos^2x$`], "Deuxième forme."),
  num(S`$\sin x=0.6$, $\cos x=0.8$. Trouve $\sin2x$.`, 0.96, "2(0.6)(0.8).", null, 0.001),
  num(S`$\sin x=0.8$, $\cos x=0.6$. Trouve $\cos2x$.`, -0.28, "0.36 − 0.64.", null, 0.001),
  num(S`$\cos x=0.5$. Trouve $\cos2x$.`, -0.5, "2(0.25) − 1.", null, 0.001),
  num(S`$\sin x=0.2$. Trouve $\cos2x$.`, 0.92, "1 − 2(0.04).", null, 0.001),
  num(S`$\tan x=1$. Qu'arrive-t-il à $\tan2x$? Entre 1 si elle n'est pas définie, 0 si elle est définie.`, 1, "Le dénominateur 1 − tan²x vaut 0."),
  num(S`Évalue $2\sin\frac\pi4\cos\frac\pi4$.`, 1, "sin(π/2)."),
  num(S`Évalue $2\cos^2\frac\pi6-1$ (au dixième près).`, 0.5, "cos(π/3).", null, 0.001),
  num(S`Évalue $1-2\sin^2\frac\pi4$.`, 0, "cos(π/2)."),
  tf(S`$\sin2x=2\sin x$ pour toute valeur de $x$.`, false, "Essaie x = π/2."),
  tf(S`La plus grande valeur de $\sin2x$ est 1.`, true, "C'est un sinus."),
  fill(S`$\sin^2x+\cos^2x=$ ___`, ["1"], "Identité de Pythagore."),
  mc("Le graphique représente y = sin 2x. Quelle est sa période?", S`$\pi$`, [S`$2\pi$`, S`$\frac\pi2$`, S`$4\pi$`], "2π/2.", planeDoc(TG([[(x) => Math.sin(2 * x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("Quelle courbe le graphique représente-t-il?", S`$y=\cos2x$`, [S`$y=2\cos x$`, S`$y=\cos x$`, S`$y=\sin2x$`], "Hauteur 1, période π, commence à 1.", planeDoc(TG([[(x) => Math.cos(2 * x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
];

export const M = [
  mc(S`$\sin x=\frac{12}{13}$ dans le quadrant 1. Que vaut $\sin2x$?`, S`$\frac{120}{169}$`, [S`$\frac{24}{13}$`, S`$-\frac{120}{169}$`, S`$\frac{119}{169}$`], "2(12/13)(5/13)."),
  mc(S`$\sin x=\frac{12}{13}$ dans le quadrant 2. Que vaut $\sin2x$?`, S`$-\frac{120}{169}$`, [S`$\frac{120}{169}$`, S`$\frac{24}{13}$`, S`$-\frac{119}{169}$`], "cos x = −5/13."),
  mc(S`$\sin x=\frac{12}{13}$ dans le quadrant 2. Que vaut $\cos2x$?`, S`$-\frac{119}{169}$`, [S`$\frac{119}{169}$`, S`$-\frac{120}{169}$`, S`$\frac{25}{169}$`], "1 − 2(144/169)."),
  mc(S`$\cos x=-\frac35$ dans le quadrant 3. Que vaut $\sin2x$?`, S`$\frac{24}{25}$`, [S`$-\frac{24}{25}$`, S`$\frac7{25}$`, S`$-\frac7{25}$`], "2(−4/5)(−3/5)."),
  mc(S`$\cos x=-\frac35$ dans le quadrant 3. Que vaut $\cos2x$?`, S`$-\frac7{25}$`, [S`$\frac7{25}$`, S`$\frac{24}{25}$`, S`$-\frac{24}{25}$`], "2(9/25) − 1."),
  num(S`$\tan x=2$. Trouve $\tan2x$ (4 décimales).`, -1.3333, "4/(1 − 4).", null, 0.001),
  num(S`$\tan x=\frac13$. Trouve $\tan2x$.`, 0.75, "(2/3)/(8/9).", null, 0.001),
  num(S`Évalue $\cos^2\frac\pi{12}-\sin^2\frac\pi{12}$ (4 décimales).`, 0.866, "cos(π/6).", null, 0.001),
  num(S`Évalue $\sin\frac\pi8\cos\frac\pi8$ (4 décimales).`, 0.3536, "½ sin(π/4).", null, 0.001),
  num(S`Évalue $4\sin\frac\pi{12}\cos\frac\pi{12}$.`, 1, "2 sin(π/6)."),
  mc(S`Quelle est la valeur exacte de $\cos\frac\pi8$?`, S`$\frac{\sqrt{2+\sqrt2}}2$`, [S`$\frac{\sqrt{2-\sqrt2}}2$`, S`$\frac{\sqrt2}4$`, S`$\frac{\sqrt2}2$`], "cos²(π/8) = (1 + √2/2)/2."),
  mc(S`Laquelle est égale à $\sin^2x$?`, S`$\frac{1-\cos2x}2$`, [S`$\frac{1+\cos2x}2$`, S`$1-\cos2x$`, S`$\cos2x-1$`], "À partir de cos 2x = 1 − 2 sin²x."),
  mc(S`Laquelle est égale à $\cos^2x$?`, S`$\frac{1+\cos2x}2$`, [S`$\frac{1-\cos2x}2$`, S`$1+\cos2x$`, S`$\cos2x+1$`], "À partir de cos 2x = 2 cos²x − 1."),
  mc(S`Laquelle est égale à $\sin x\cos x$?`, S`$\frac12\sin2x$`, [S`$\sin2x$`, S`$2\sin2x$`, S`$\frac12\cos2x$`], "La moitié de 2 sin x cos x."),
  mc(S`Simplifie $(\sin x+\cos x)^2$.`, S`$1+\sin2x$`, ["1", S`$1+\cos2x$`, S`$\sin2x$`], "Développe."),
  mc(S`Simplifie $\dfrac{\sin2x}{2\cos x}$.`, S`$\sin x$`, [S`$\cos x$`, S`$\tan x$`, S`$\sin2x$`], "Simplifie 2 cos x."),
  num(S`$\cos2x=0.5$ avec $x$ dans le quadrant 1. Trouve $\sin x$ (au centième près).`, 0.5, "1 − 2 sin²x = 0.5 : sin²x = 0.25.", null, 0.005),
  mc("Le côté terminal passe par (8, 15). Que vaut sin 2θ?", S`$\frac{240}{289}$`, [S`$\frac{120}{289}$`, S`$\frac{161}{289}$`, S`$\frac{30}{17}$`], "2(15/17)(8/17).", planeDoc(ARM(8, 15, "(8, 15)"))),
  mc("Le côté terminal passe par (−2, 1). Que vaut cos 2θ?", S`$\frac35$`, [S`$-\frac35$`, S`$-\frac45$`, S`$\frac45$`], "cos²θ − sin²θ = 4/5 − 1/5.", planeDoc(ARM(-2, 1, "(−2, 1)"))),
  mc("La courbe est y = sin x cos x. Quelle est sa valeur maximale?", S`$\frac12$`, ["1", "2", S`$\frac14$`], "Elle est égale à ½ sin 2x.", planeDoc(TG([[(x) => Math.sin(x) * Math.cos(x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -1, ymax: 1 }, [], { step: { x: 1, y: 0.5 } }))),
];

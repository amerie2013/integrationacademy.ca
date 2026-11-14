// 4.3 Expressions trigonométriques équivalentes — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { UC, TG } from "../trigfig.mjs";
const S = String.raw;

export const E = [
  mc(S`Laquelle est égale à $\sin\left(\frac\pi2-x\right)$?`, S`$\cos x$`, [S`$\sin x$`, S`$-\cos x$`, S`$-\sin x$`], "Cofonction."),
  mc(S`Laquelle est égale à $\cos\left(\frac\pi2-x\right)$?`, S`$\sin x$`, [S`$\cos x$`, S`$-\sin x$`, S`$\tan x$`], "Cofonction."),
  mc(S`Laquelle est égale à $\tan\left(\frac\pi2-x\right)$?`, S`$\cot x$`, [S`$\tan x$`, S`$-\tan x$`, S`$\sec x$`], "Cofonction."),
  mc(S`Laquelle est égale à $\sin(\pi-x)$?`, S`$\sin x$`, [S`$-\sin x$`, S`$\cos x$`, S`$-\cos x$`], "Même hauteur."),
  mc(S`Laquelle est égale à $\cos(\pi-x)$?`, S`$-\cos x$`, [S`$\cos x$`, S`$\sin x$`, S`$-\sin x$`], "Réflexion par rapport à l'axe des y."),
  mc(S`Laquelle est égale à $\cos(\pi+x)$?`, S`$-\cos x$`, [S`$\cos x$`, S`$\sin x$`, S`$-\sin x$`], "Demi-tour."),
  mc(S`Laquelle est égale à $\tan(\pi+x)$?`, S`$\tan x$`, [S`$-\tan x$`, S`$\cot x$`, S`$-\cot x$`], "La tangente a une période de π."),
  mc(S`Laquelle est égale à $\sin(-x)$?`, S`$-\sin x$`, [S`$\sin x$`, S`$\cos x$`, S`$-\cos x$`], "Le sinus est impair."),
  mc(S`Laquelle est égale à $\cos(2\pi-x)$?`, S`$\cos x$`, [S`$-\cos x$`, S`$\sin x$`, S`$-\sin x$`], "Réflexion par rapport à l'axe des x."),
  tf(S`Le cosinus est une fonction paire.`, true, "cos(−x) = cos x."),
  tf(S`Le sinus est une fonction paire.`, false, "sin(−x) = −sin x."),
  tf(S`$\tan(-x)=-\tan x$.`, true, "La tangente est impaire."),
  fill(S`On dit que le sinus et le cosinus sont des ___ l'un de l'autre.`, ["cofonctions", "cofonction", "cofunctions", "cofunction"], "cos signifie « sinus du complément »."),
  num(S`Si $\sin x=0.3$, que vaut $\sin(\pi-x)$?`, 0.3, "Même valeur.", null, 0.001),
  num(S`Si $\cos x=0.7$, que vaut $\cos(-x)$?`, 0.7, "Fonction paire.", null, 0.001),
  num(S`Si $\sin x=0.4$, que vaut $\sin(-x)$?`, -0.4, "Fonction impaire.", null, 0.001),
  num(S`Si $\cos x=0.2$, que vaut $\cos(\pi+x)$?`, -0.2, "Demi-tour.", null, 0.001),
  num(S`Si $\sin x=0.9$, que vaut $\cos\left(\frac\pi2-x\right)$?`, 0.9, "Cofonction.", null, 0.001),
  mc("Les deux points indiqués sont symétriques par rapport à l'axe des y. Si le point bleu correspond à l'angle x, le point rouge correspond à…", S`$\pi-x$`, [S`$\pi+x$`, S`$-x$`, S`$\frac\pi2-x$`], "Réflexion par rapport à l'axe des y.", planeDoc(UC(150, "?", [{ x: Math.cos(Math.PI / 6), y: 0.5, label: "x", color: "blue" }]))),
  mc("La courbe verte est y = cos x et la courbe violette est y = sin x. Le cosinus est le sinus décalé de combien vers la gauche?", S`$\frac\pi2$`, [S`$\pi$`, S`$\frac\pi4$`, S`$2\pi$`], "Sommet en 0 plutôt qu'en π/2.", planeDoc(TG([[Math.sin, "violet"], [Math.cos, "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
];

export const M = [
  num(S`$\sin\frac\pi{10}\approx0.3090$. Trouve $\cos\frac{2\pi}5$ (4 décimales).`, 0.309, "π/2 − π/10 = 2π/5.", null, 0.0005),
  num(S`$\cos\frac\pi9\approx0.9397$. Trouve $\sin\frac{7\pi}{18}$ (4 décimales).`, 0.9397, "π/2 − π/9 = 7π/18.", null, 0.0005),
  num(S`$\sin\frac{3\pi}{11}\approx0.7557$. Trouve $\sin\frac{8\pi}{11}$ (4 décimales).`, 0.7557, "π − 3π/11 = 8π/11.", null, 0.0005),
  num(S`$\cos\frac\pi{5}\approx0.8090$. Trouve $\cos\frac{4\pi}5$ (4 décimales).`, -0.809, "π − π/5.", null, 0.0005),
  num(S`$\cos\frac{2\pi}{9}\approx0.7660$. Trouve $\cos\frac{16\pi}9$ (4 décimales).`, 0.766, "2π − 2π/9.", null, 0.0005),
  num(S`$\tan\frac{\pi}{5}\approx0.7265$. Trouve $\cot\frac{3\pi}{10}$ (4 décimales).`, 0.7265, "π/2 − 3π/10 = π/5.", null, 0.0005),
  mc(S`Simplifie $\sin(\pi-x)+\sin(\pi+x)$.`, "0", [S`$2\sin x$`, S`$-2\sin x$`, S`$\cos x$`], "sin x − sin x."),
  mc(S`Simplifie $\cos(-x)-\cos(\pi+x)$.`, S`$2\cos x$`, ["0", S`$-2\cos x$`, S`$\cos2x$`], "cos x + cos x."),
  mc(S`Simplifie $\sin\left(\frac\pi2-x\right)\tan x$.`, S`$\sin x$`, [S`$\cos x$`, S`$\tan x$`, S`$\cos^2x$`], "cos x · sin x / cos x."),
  mc(S`Simplifie $\dfrac{\cos\left(\frac\pi2-x\right)}{\sin(\pi-x)}$.`, "1", [S`$\tan x$`, S`$\cot x$`, "−1"], "sin x / sin x."),
  mc(S`Laquelle est égale à $\sin\left(\frac\pi2+x\right)$?`, S`$\cos x$`, [S`$-\cos x$`, S`$\sin x$`, S`$-\sin x$`], "Quart de tour."),
  mc(S`Laquelle est égale à $\cos\left(\frac\pi2+x\right)$?`, S`$-\sin x$`, [S`$\sin x$`, S`$\cos x$`, S`$-\cos x$`], "Quart de tour."),
  mc(S`Laquelle est égale à $\sin\left(\frac{3\pi}2-x\right)$?`, S`$-\cos x$`, [S`$\cos x$`, S`$\sin x$`, S`$-\sin x$`], "Quadrant 3, et le nom change."),
  mc(S`Laquelle est égale à $\cos\left(\frac{3\pi}2+x\right)$?`, S`$\sin x$`, [S`$-\sin x$`, S`$\cos x$`, S`$-\cos x$`], "Quadrant 4, et le nom change."),
  mc(S`Écris $\sin\frac{5\pi}3$ à l'aide d'un angle remarquable.`, S`$-\sin\frac\pi3$`, [S`$\sin\frac\pi3$`, S`$\cos\frac\pi3$`, S`$-\cos\frac\pi6\cdot\sin\frac\pi6$`], "2π − π/3."),
  num(S`$\tan x=4$. Trouve $\tan(\pi+x)\cdot\tan\left(\frac\pi2-x\right)$.`, 1, "tan x · cot x."),
  num(S`$\sin x=0.6$ avec $x$ dans le quadrant 1. Trouve $\cos(\pi-x)$.`, -0.8, "cos x = 0.8.", null, 0.001),
  tf(S`$\sin(x+2\pi)=\sin x$ pour toute valeur de $x$.`, true, "Un tour complet."),
  mc("D'après le graphique, quelle symétrie la courbe y = sin x possède-t-elle?", "une symétrie de rotation par rapport à l'origine", ["une symétrie par rapport à l'axe des y", "une symétrie par rapport à l'axe des x", "aucune symétrie"], "Le sinus est impair.", planeDoc(TG([[Math.sin, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("L'angle indiqué mesure 5π/6. Quelle expression a la même valeur que sin(5π/6)?", S`$\sin\frac\pi6$`, [S`$-\sin\frac\pi6$`, S`$\cos\frac\pi6$`, S`$-\cos\frac\pi6$`], "π − π/6.", planeDoc(UC(150, "5π/6"))),
];

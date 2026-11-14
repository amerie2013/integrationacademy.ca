// 4.4 Formules d'addition (angles composés) — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { UC, ARM } from "../trigfig.mjs";
const S = String.raw;

export const E = [
  mc(S`Quelle est la formule de $\sin(a+b)$?`, S`$\sin a\cos b+\cos a\sin b$`, [S`$\sin a+\sin b$`, S`$\cos a\cos b-\sin a\sin b$`, S`$\sin a\sin b+\cos a\cos b$`], "Termes croisés, même signe."),
  mc(S`Quelle est la formule de $\sin(a-b)$?`, S`$\sin a\cos b-\cos a\sin b$`, [S`$\sin a-\sin b$`, S`$\sin a\cos b+\cos a\sin b$`, S`$\cos a\cos b+\sin a\sin b$`], "Termes croisés, même signe."),
  mc(S`Quelle est la formule de $\cos(a+b)$?`, S`$\cos a\cos b-\sin a\sin b$`, [S`$\cos a+\cos b$`, S`$\cos a\cos b+\sin a\sin b$`, S`$\sin a\cos b+\cos a\sin b$`], "Termes semblables, signe contraire."),
  mc(S`Quelle est la formule de $\cos(a-b)$?`, S`$\cos a\cos b+\sin a\sin b$`, [S`$\cos a-\cos b$`, S`$\cos a\cos b-\sin a\sin b$`, S`$\sin a\cos b-\cos a\sin b$`], "Termes semblables, signe contraire."),
  mc(S`Quelle somme est égale à $\frac{7\pi}{12}$?`, S`$\frac\pi3+\frac\pi4$`, [S`$\frac\pi6+\frac\pi4$`, S`$\frac\pi3+\frac\pi6$`, S`$\frac\pi2+\frac\pi6$`], "4π/12 + 3π/12."),
  mc(S`Quelle différence est égale à $\frac\pi{12}$?`, S`$\frac\pi3-\frac\pi4$`, [S`$\frac\pi4-\frac\pi3$`, S`$\frac\pi2-\frac\pi3$`, S`$\frac\pi3-\frac\pi6$`], "4π/12 − 3π/12."),
  mc(S`Quelle somme est égale à $\frac{5\pi}{12}$?`, S`$\frac\pi4+\frac\pi6$`, [S`$\frac\pi3+\frac\pi4$`, S`$\frac\pi3+\frac\pi6$`, S`$\frac\pi2+\frac\pi{12}$`], "3π/12 + 2π/12."),
  tf(S`$\sin(a+b)=\sin a+\sin b$ pour toutes les valeurs de $a$ et de $b$.`, false, "Essaie a = b = π/2."),
  tf(S`La formule de $\cos(a+b)$ contient un signe moins.`, true, "cos a cos b − sin a sin b."),
  num(S`Évalue $\sin\frac\pi6\cos\frac\pi3+\cos\frac\pi6\sin\frac\pi3$.`, 1, "sin(π/2)."),
  num(S`Évalue $\cos\frac\pi3\cos\frac\pi6-\sin\frac\pi3\sin\frac\pi6$.`, 0, "cos(π/2)."),
  num(S`Évalue $\sin\frac\pi2\cos\frac\pi3-\cos\frac\pi2\sin\frac\pi3$ (au dixième près).`, 0.5, "sin(π/6).", null, 0.001),
  mc(S`Quel rapport est égal à $\sin5x\cos2x+\cos5x\sin2x$?`, S`$\sin7x$`, [S`$\sin3x$`, S`$\cos7x$`, S`$\cos3x$`], "sin(a + b)."),
  mc(S`Quel rapport est égal à $\sin5x\cos2x-\cos5x\sin2x$?`, S`$\sin3x$`, [S`$\sin7x$`, S`$\cos7x$`, S`$\cos3x$`], "sin(a − b)."),
  mc(S`Quel rapport est égal à $\cos4x\cos x-\sin4x\sin x$?`, S`$\cos5x$`, [S`$\cos3x$`, S`$\sin5x$`, S`$\sin3x$`], "cos(a + b)."),
  mc(S`Quel rapport est égal à $\cos4x\cos x+\sin4x\sin x$?`, S`$\cos3x$`, [S`$\cos5x$`, S`$\sin5x$`, S`$\sin3x$`], "cos(a − b)."),
  fill(S`Dans la formule de $\cos(a-b)$, le signe entre les termes est ___.`, ["plus", "+", "positif", "un plus", "positive"], "Le cosinus inverse le signe."),
  num(S`$\tan a=1$ et $\tan b=0$. Trouve $\tan(a+b)$.`, 1, "(1 + 0)/(1 − 0)."),
  mc("L'angle indiqué mesure 5π/12. Quelle paire d'angles permet de trouver la valeur exacte de son sinus?", S`$\frac\pi4,\ \frac\pi6$`, [S`$\frac\pi3,\ \frac\pi4$`, S`$\frac\pi3,\ \frac\pi6$`, S`$\frac\pi4,\ \frac\pi4$`], "3π/12 + 2π/12.", planeDoc(UC(75, "5π/12"))),
  mc("L'angle indiqué mesure π/12. Quelle expression donne la valeur exacte de son cosinus?", S`$\cos\frac\pi3\cos\frac\pi4+\sin\frac\pi3\sin\frac\pi4$`, [S`$\cos\frac\pi3\cos\frac\pi4-\sin\frac\pi3\sin\frac\pi4$`, S`$\cos\frac\pi3-\cos\frac\pi4$`, S`$\sin\frac\pi3\cos\frac\pi4-\cos\frac\pi3\sin\frac\pi4$`], "cos(a − b).", planeDoc(UC(15, "π/12"))),
];

export const M = [
  mc(S`Trouve la valeur exacte de $\sin\frac{7\pi}{12}$.`, S`$\frac{\sqrt6+\sqrt2}4$`, [S`$\frac{\sqrt6-\sqrt2}4$`, S`$\frac{\sqrt2-\sqrt6}4$`, S`$\frac{\sqrt3+1}2$`], "π/3 + π/4."),
  mc(S`Trouve la valeur exacte de $\cos\frac{5\pi}{12}$.`, S`$\frac{\sqrt6-\sqrt2}4$`, [S`$\frac{\sqrt6+\sqrt2}4$`, S`$\frac{\sqrt2-\sqrt6}4$`, S`$\frac{\sqrt3-1}2$`], "π/4 + π/6."),
  mc(S`Trouve la valeur exacte de $\tan\frac\pi{12}$.`, S`$2-\sqrt3$`, [S`$2+\sqrt3$`, S`$\sqrt3-2$`, S`$\frac{\sqrt3}3$`], "π/3 − π/4."),
  mc(S`Trouve la valeur exacte de $\sin\frac{11\pi}{12}$.`, S`$\frac{\sqrt6-\sqrt2}4$`, [S`$\frac{\sqrt6+\sqrt2}4$`, S`$-\frac{\sqrt6-\sqrt2}4$`, S`$\frac12$`], "π − π/12."),
  num(S`Évalue $\cos\frac{7\pi}{12}$ (4 décimales).`, -0.2588, "(√2 − √6)/4.", null, 0.001),
  num(S`Évalue $\tan\frac{7\pi}{12}$ (au centième près).`, -3.73, "−2 − √3.", null, 0.01),
  mc(S`$\sin a=\frac35$ et $\cos b=\frac5{13}$, tous deux dans le quadrant 1. Que vaut $\sin(a+b)$?`, S`$\frac{63}{65}$`, [S`$\frac{33}{65}$`, S`$\frac{16}{65}$`, S`$\frac{56}{65}$`], "(3/5)(5/13) + (4/5)(12/13)."),
  mc(S`$\sin a=\frac35$ et $\cos b=\frac5{13}$, tous deux dans le quadrant 1. Que vaut $\cos(a+b)$?`, S`$-\frac{16}{65}$`, [S`$\frac{16}{65}$`, S`$\frac{56}{65}$`, S`$\frac{63}{65}$`], "(4/5)(5/13) − (3/5)(12/13)."),
  mc(S`$\cos a=\frac45$ dans le quadrant 1 et $\sin b=\frac{12}{13}$ dans le quadrant 2. Que vaut $\cos(a-b)$?`, S`$\frac{16}{65}$`, [S`$-\frac{16}{65}$`, S`$\frac{56}{65}$`, S`$\frac{63}{65}$`], "(4/5)(−5/13) + (3/5)(12/13)."),
  num(S`$\tan a=3$ et $\tan b=2$. Trouve $\tan(a-b)$ (4 décimales).`, 0.1429, "1/7.", null, 0.001),
  num(S`$\tan a=\frac12$ et $\tan b=\frac15$. Trouve $\tan(a+b)$ (4 décimales).`, 0.7778, "(7/10)/(9/10).", null, 0.001),
  num(S`Évalue $\sin\frac{2\pi}{7}\cos\frac{3\pi}{14}+\cos\frac{2\pi}7\sin\frac{3\pi}{14}$.`, 1, "4π/14 + 3π/14 = π/2."),
  num(S`Évalue $\cos\frac{5\pi}{18}\cos\frac\pi9+\sin\frac{5\pi}{18}\sin\frac\pi9$ (4 décimales).`, 0.866, "cos(π/6).", null, 0.001),
  mc(S`D'après la formule, laquelle est égale à $\cos\left(x+\frac\pi2\right)$?`, S`$-\sin x$`, [S`$\sin x$`, S`$\cos x$`, S`$-\cos x$`], "cos x · 0 − sin x · 1."),
  mc(S`Laquelle est égale à $\sin\left(x+\frac\pi4\right)$?`, S`$\frac{\sqrt2}2(\sin x+\cos x)$`, [S`$\sin x+\frac{\sqrt2}2$`, S`$\frac{\sqrt2}2\sin x$`, S`$\sin x\cos x$`], "cos(π/4) = sin(π/4) = √2/2."),
  mc(S`Laquelle est égale à $\sin(x+y)+\sin(x-y)$?`, S`$2\sin x\cos y$`, [S`$2\cos x\sin y$`, S`$2\sin x$`, S`$\sin2x$`], "Les termes croisés s'annulent."),
  mc(S`Laquelle est égale à $\cos(x-y)-\cos(x+y)$?`, S`$2\sin x\sin y$`, [S`$2\cos x\cos y$`, "0", S`$-2\sin x\sin y$`], "Les termes cos cos s'annulent."),
  mc("Le côté terminal de a passe par (4, 3) et b = π/4. Que vaut sin(a + b)?", S`$\frac{7\sqrt2}{10}$`, [S`$\frac{\sqrt2}{10}$`, S`$\frac75$`, S`$\frac{7}{10}$`], "(3/5)(√2/2) + (4/5)(√2/2).", planeDoc(ARM(4, 3, "(4, 3)"))),
  mc("Le côté terminal de a passe par (−5, 12) et b = π/6. Que vaut cos(a − b)?", S`$\frac{12-5\sqrt3}{26}$`, [S`$\frac{5\sqrt3+12}{26}$`, S`$\frac{5\sqrt3-12}{26}$`, S`$\frac{7}{13}$`], "(−5/13)(√3/2) + (12/13)(1/2).", planeDoc(ARM(-5, 12, "(−5, 12)"))),
  tf(S`$\tan\left(x+\frac\pi4\right)=\dfrac{1+\tan x}{1-\tan x}$.`, true, "tan(π/4) = 1."),
];

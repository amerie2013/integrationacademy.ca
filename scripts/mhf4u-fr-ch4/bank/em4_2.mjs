// 4.2 Rapports trigonométriques et angles remarquables — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { UC, ARM } from "../trigfig.mjs";
const S = String.raw;

export const E = [
  mc(S`Que vaut $\sin\frac\pi6$?`, S`$\frac12$`, [S`$\frac{\sqrt3}2$`, S`$\frac{\sqrt2}2$`, "1"], "Valeur remarquable."),
  mc(S`Que vaut $\cos\frac\pi3$?`, S`$\frac12$`, [S`$\frac{\sqrt3}2$`, S`$\frac{\sqrt2}2$`, "0"], "Valeur remarquable."),
  mc(S`Que vaut $\tan\frac\pi4$?`, "1", ["0", S`$\sqrt3$`, S`$\frac{\sqrt3}3$`], "Cathètes égales."),
  mc(S`Que vaut $\sin\frac\pi3$?`, S`$\frac{\sqrt3}2$`, [S`$\frac12$`, S`$\frac{\sqrt2}2$`, S`$\sqrt3$`], "Valeur remarquable."),
  mc(S`Que vaut $\tan\frac\pi6$?`, S`$\frac{\sqrt3}3$`, [S`$\sqrt3$`, "1", S`$\frac12$`], "(1/2) ÷ (√3/2)."),
  num(S`Évalue $\cos0$.`, 1, "Point (1, 0)."),
  num(S`Évalue $\sin\frac\pi2$.`, 1, "Point (0, 1)."),
  num(S`Évalue $\cos\pi$.`, -1, "Point (−1, 0)."),
  num(S`Évalue $\sin\pi$.`, 0, "Point (−1, 0)."),
  num(S`Évalue $\sin\frac{3\pi}2$.`, -1, "Point (0, −1)."),
  mc("Dans quel quadrant le cosinus est-il positif et le sinus négatif?", "quadrant 4", ["quadrant 1", "quadrant 2", "quadrant 3"], "Règle CAST."),
  mc("Quel rapport est positif dans le quadrant 3?", "tan", ["sin", "cos", "csc"], "Règle CAST."),
  mc(S`Quel est l'angle de référence de $\frac{3\pi}4$?`, S`$\frac\pi4$`, [S`$\frac{3\pi}4$`, S`$\frac\pi2$`, S`$\frac\pi3$`], "π − 3π/4."),
  mc(S`Quel est l'angle de référence de $\frac{7\pi}6$?`, S`$\frac\pi6$`, [S`$\frac\pi3$`, S`$\frac{5\pi}6$`, S`$\frac\pi4$`], "7π/6 − π."),
  mc(S`Quelle est la réciproque de $\sin\theta$?`, S`$\csc\theta$`, [S`$\sec\theta$`, S`$\cot\theta$`, S`$\sin^{-1}\theta$`], "csc = 1/sin."),
  mc(S`Quelle est la réciproque de $\cos\theta$?`, S`$\sec\theta$`, [S`$\csc\theta$`, S`$\cot\theta$`, S`$\tan\theta$`], "sec = 1/cos."),
  fill("Sur le cercle trigonométrique, l'abscisse du point associé à l'angle θ est ___ θ.", ["cos", "cosinus", "cosine"], "(cos θ, sin θ)."),
  tf(S`$\tan\frac\pi2$ n'est pas définie.`, true, "cos(π/2) = 0."),
  mc("Que vaut sin θ pour le point indiqué?", S`$\frac12$`, [S`$-\frac12$`, S`$\frac{\sqrt3}2$`, S`$-\frac{\sqrt3}2$`], "Ordonnée à 150°.", planeDoc(UC(150, "θ"))),
  mc("Que vaut cos θ pour le point indiqué?", S`$-\frac{\sqrt2}2$`, [S`$\frac{\sqrt2}2$`, S`$\frac12$`, S`$-\frac12$`], "Abscisse à 225°.", planeDoc(UC(225, "θ"))),
];

export const M = [
  mc(S`Trouve $\sin\frac{5\pi}6$.`, S`$\frac12$`, [S`$-\frac12$`, S`$\frac{\sqrt3}2$`, S`$-\frac{\sqrt3}2$`], "Quadrant 2, positif."),
  mc(S`Trouve $\cos\frac{2\pi}3$.`, S`$-\frac12$`, [S`$\frac12$`, S`$-\frac{\sqrt3}2$`, S`$\frac{\sqrt3}2$`], "Quadrant 2, négatif."),
  mc(S`Trouve $\tan\frac{4\pi}3$.`, S`$\sqrt3$`, [S`$-\sqrt3$`, S`$\frac{\sqrt3}3$`, "1"], "Quadrant 3, positive."),
  mc(S`Trouve $\sin\frac{7\pi}4$.`, S`$-\frac{\sqrt2}2$`, [S`$\frac{\sqrt2}2$`, S`$-\frac12$`, "−1"], "Quadrant 4, négatif."),
  mc(S`Trouve $\cos\frac{11\pi}6$.`, S`$\frac{\sqrt3}2$`, [S`$-\frac{\sqrt3}2$`, S`$\frac12$`, S`$-\frac12$`], "Quadrant 4, positif."),
  num(S`Évalue $\csc\frac{5\pi}6$.`, 2, "1/(1/2)."),
  num(S`Évalue $\sec\frac{5\pi}3$.`, 2, "1/(1/2)."),
  num(S`Évalue $\cot\frac{3\pi}4$.`, -1, "1/(−1)."),
  num(S`Évalue $\sec\pi$.`, -1, "1/(−1)."),
  num(S`Évalue $\csc\frac{7\pi}6$.`, -2, "1/(−1/2)."),
  num(S`Évalue $\sin\frac\pi6+\cos\frac\pi3$.`, 1, "1/2 + 1/2."),
  num(S`Évalue $2\cos^2\frac\pi4$.`, 1, "2(1/2)."),
  num(S`Évalue $\tan^2\frac\pi3$.`, 3, "(√3)²."),
  num(S`Évalue $\sin^2\frac{2\pi}3$ (au centième près).`, 0.75, "3/4.", null, 0.001),
  mc("Le côté terminal passe par (−3, −4). Que vaut sin θ?", S`$-\frac45$`, [S`$\frac45$`, S`$-\frac35$`, S`$\frac34$`], "y/r avec r = 5.", planeDoc(ARM(-3, -4, "(−3, −4)"))),
  mc("Le côté terminal passe par (12, −5). Que vaut cos θ?", S`$\frac{12}{13}$`, [S`$-\frac{12}{13}$`, S`$\frac5{13}$`, S`$-\frac5{12}$`], "x/r avec r = 13.", planeDoc(ARM(12, -5, "(12, −5)"))),
  mc(S`$\sin\theta=\frac35$ dans le quadrant 2. Que vaut $\cos\theta$?`, S`$-\frac45$`, [S`$\frac45$`, S`$-\frac35$`, S`$\frac34$`], "x est négatif dans le quadrant 2."),
  mc(S`$\cos\theta=-\frac5{13}$ dans le quadrant 3. Que vaut $\tan\theta$?`, S`$\frac{12}5$`, [S`$-\frac{12}5$`, S`$\frac5{12}$`, S`$-\frac{12}{13}$`], "(−12)/(−5)."),
  mc(S`Combien de valeurs de $\theta$ dans $[0,2\pi)$ vérifient $\cos\theta=\frac12$?`, "2", ["1", "3", "4"], "Quadrants 1 et 4."),
  tf(S`$\csc\theta$ peut être égale à $\frac12$.`, false, "|csc θ| ≥ 1."),
];

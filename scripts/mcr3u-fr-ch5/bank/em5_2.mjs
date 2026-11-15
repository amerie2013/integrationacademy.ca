import { FIG } from "./figs.mjs";
// 5.2 Angles de 0° à 360° — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { armD, unitD, acos, asin, atan, rd } from "./fig.mjs";

const S = String.raw;

export const E = [
  num("Quel est l'angle de référence de 160°?", 20, "180° − 160°."),
  num("Quel est l'angle de référence de 250°?", 70, "250° − 180°."),
  num("Quel est l'angle de référence de 335°?", 25, "360° − 335°."),
  mc("Dans quel quadrant se trouve le côté terminal de 200°?", "Quadrant 3", ["Quadrant 2", "Quadrant 4", "Quadrant 1"], "Entre 180° et 270°."),
  mc(S`Quel est le signe de $\sin300^\circ$?`, "négatif", ["positif", "nul", "non défini"], "Quadrant 4 : seul le cosinus est positif."),
  mc(S`Que vaut $\cos120^\circ$?`, S`$-\frac12$`, [S`$\frac12$`, S`$-\frac{\sqrt3}2$`, S`$\frac{\sqrt3}2$`], "Angle de référence 60°, quadrant 2 : cosinus négatif."),
  mc(S`Que vaut $\tan135^\circ$?`, S`$-1$`, [S`$1$`, S`$-\sqrt3$`, S`$0$`], "Angle de référence 45°, quadrant 2 : tangente négative."),
  mc(S`Que vaut $\sin240^\circ$?`, S`$-\frac{\sqrt3}2$`, [S`$\frac{\sqrt3}2$`, S`$-\frac12$`, S`$\frac12$`], "Angle de référence 60°, quadrant 3 : sinus négatif."),
  num("Le point (6, 8) est sur le côté terminal de θ. Trouve r.", 10, "√(36 + 64).", FIG.arm68),
  num("Le point (6, 8) est sur le côté terminal de θ. Trouve cos θ.", 0.6, "x/r = 6/10.", FIG.arm68),
  num("Le point (−3, −4) est sur le côté terminal de θ. Trouve sin θ.", -0.8, "y/r = −4/5.", FIG.armN34),
  tf(S`$\tan270^\circ$ n'est pas définie.`, true, "À 270°, x = 0."),
  num(S`Évalue $\cos180^\circ$.`, -1, "Le point (−1, 0)."),
  num(S`Évalue $\sin360^\circ$.`, 0, "De retour à (1, 0)."),
  mc("Dans quel quadrant sin θ et cos θ sont-ils tous deux négatifs?", "Quadrant 3", ["Quadrant 2", "Quadrant 4", "Quadrant 1"], "x < 0 et y < 0."),
  num("Un angle du quadrant 4 a un angle de référence de 40°. Quel est cet angle?", 320, "360° − 40°."),
  num("Un angle du quadrant 2 a un angle de référence de 15°. Quel est cet angle?", 165, "180° − 15°."),
  tf(S`$\cos100^\circ>0$.`, false, "100° est dans le quadrant 2, où le cosinus est négatif."),
  num("Le côté terminal passe par le point illustré. Trouve cos θ.", -0.6, "r = 10; x/r = −6/10.", armD(-6, 8, "(−6, 8)")),
  num("La figure montre les deux angles pour lesquels sin θ = ½. L'un est 30°. Entre l'autre, en degrés.", 150, "180° − 30°.", unitD([[30, "30°"], [150, "?"]], { lines: [{ m: 0, b: 0.5, color: "amber", dash: true }] })),
];

export const M = [
  mc(S`Résous $\sin\theta=\frac12$ pour $0^\circ\le\theta\le360^\circ$.`, "30°, 150°", ["30°, 330°", "60°, 120°", "30°, 210°"], "Le sinus est positif dans Q1 et Q2."),
  mc(S`Résous $\cos\theta=\frac12$ pour $0^\circ\le\theta\le360^\circ$.`, "60°, 300°", ["60°, 120°", "30°, 330°", "60°, 240°"], "Le cosinus est positif dans Q1 et Q4."),
  mc(S`Résous $\tan\theta=\sqrt3$ pour $0^\circ\le\theta\le360^\circ$.`, "60°, 240°", ["60°, 120°", "60°, 300°", "30°, 210°"], "La tangente est positive dans Q1 et Q3."),
  num(S`$\sin\theta=0.8$. Donne la solution obtuse entre 0° et 180°, au dixième près.`, rd(180 - asin(0.8), 1), "180° − sin⁻¹ 0.8.", null, 0.05),
  num(S`$\cos\theta=-0.3$. Donne la plus petite solution entre 0° et 360°, au dixième près.`, rd(acos(-0.3), 1), "cos⁻¹(−0.3) est dans le quadrant 2.", null, 0.05),
  num(S`$\tan\theta=-1.5$. Donne la solution du quadrant 4, au dixième près.`, rd(360 - atan(1.5), 1), "360° − tan⁻¹ 1.5.", null, 0.05),
  num("Le point (−7, 24) est sur le côté terminal de θ. Trouve θ, au dixième près.", rd(180 - atan(24 / 7), 1), "Angle de référence tan⁻¹(24/7); quadrant 2.", FIG.armN724, 0.05),
  num("Le point (−2, −5) est sur le côté terminal de θ. Trouve θ, au dixième près.", rd(180 + atan(2.5), 1), "Angle de référence tan⁻¹ 2.5; quadrant 3.", FIG.armN25, 0.05),
  num(S`Évalue $\sin120^\circ+\cos330^\circ$, au centième près.`, rd(Math.sqrt(3)), "√3/2 + √3/2 = √3.", null, 0.01),
  mc(S`Évalue $\cos210^\circ\tan225^\circ$.`, S`$-\frac{\sqrt3}2$`, [S`$\frac{\sqrt3}2$`, S`$-\frac12$`, S`$1$`], "(−√3/2)(1)."),
  num(S`$\sin\theta=\frac5{13}$ et θ est dans le quadrant 2. Trouve $\cos\theta$ (4 décimales).`, rd(-12 / 13, 4), "x = −12.", null, 0.0001),
  num(S`$\cos\theta=\frac35$ et $\sin\theta<0$. Trouve $\tan\theta$ (4 décimales).`, rd(-4 / 3, 4), "Quadrant 4 : y = −4.", null, 0.0001),
  ms("Lesquels sont négatifs? Choisis toutes les bonnes réponses.", [S`$\sin200^\circ$`, S`$\cos100^\circ$`, S`$\tan300^\circ$`, S`$\cos340^\circ$`, S`$\sin170^\circ$`], [0, 1, 2], "Utilise la règle CAST pour chaque quadrant."),
  tf(S`$\sin160^\circ=\sin20^\circ$.`, true, "Angle de référence 20°, sinus positif dans Q2."),
  tf(S`$\cos160^\circ=\cos20^\circ$.`, false, "cos 160° = −cos 20°."),
  num(S`Quelle est la somme des deux solutions de $\cos\theta=0.2$ entre 0° et 360°?`, 360, "Ce sont β et 360° − β."),
  num(S`Trouve θ entre 0° et 360° tel que $\sin\theta=-1$.`, 270, "Le point (0, −1)."),
  mc(S`Si $\tan\theta>0$ et $\cos\theta<0$, où se trouve le côté terminal?`, "Quadrant 3", ["Quadrant 2", "Quadrant 4", "Quadrant 1"], "Seule la tangente est positive : Q3."),
  num("Trouve θ, au dixième près.", rd(360 - atan(12 / 5), 1), "Angle de référence tan⁻¹(12/5); quadrant 4.", armD(5, -12, "(5, −12)"), 0.05),
  num("Les deux côtés terminaux de la figure ont le même cosinus. Quel est-il (4 décimales)?", rd(-Math.SQRT1_2, 4), "cos 135° = cos 225° = −1/√2.", unitD([[135, "135°"], [225, "225°"]]), 0.0001),
];

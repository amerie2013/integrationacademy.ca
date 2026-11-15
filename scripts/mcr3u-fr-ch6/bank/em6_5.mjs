// 6.5 Tracer des fonctions sinusoïdales à l'aide de transformations — 20 questions faciles + 20 moyennes
// (miroir de ../../mcr3u-ch6/bank/em6_5.mjs; notation française y = a sin(k(x − c)) + d, règle (x, y) → (x/k + c, ay + d))
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos } from "./fig.mjs";

const S = String.raw;

export const E = [
  num(S`Le point de base \((90^\circ,1)\) est transformé selon \(y=\sin x-4\). Quelle est l'ordonnée de l'image?`, -3, "1 − 4."),
  num(S`Le point de base \((270^\circ,-1)\) est transformé selon \(y=2\sin x\). Quelle est l'ordonnée de l'image?`, -2, "2(−1)."),
  num(S`Le point de base \((180^\circ,0)\) est transformé selon \(y=\sin2x\). Quelle est l'abscisse de l'image?`, 90, "180 ÷ 2."),
  num(S`Le point de base \((90^\circ,1)\) est transformé selon \(y=\sin(x+30^\circ)\). Quelle est l'abscisse de l'image?`, 60, "90 − 30."),
  num(S`Le point de base \((360^\circ,0)\) est transformé selon \(y=\sin\frac x2\). Quelle est l'abscisse de l'image?`, 720, "360 ÷ ½."),
  num(S`Le point du cosinus \((0^\circ,1)\) est transformé selon \(y=-\cos x+3\). Quelle est l'ordonnée de l'image?`, 2, "−1 + 3."),
  mc(S`Quels sont les cinq points clés d'un cycle de \(y=\sin x\)?`, "(0°, 0), (90°, 1), (180°, 0), (270°, −1), (360°, 0)", ["(0°, 1), (90°, 0), (180°, −1), (270°, 0), (360°, 1)", "(0°, 0), (180°, 1), (360°, 0), (540°, −1), (720°, 0)", "(0°, 0), (45°, 1), (90°, 0), (135°, −1), (180°, 0)"], "Les points de l'onde sinus à chaque quart de tour."),
  mc(S`Quels sont les cinq points clés d'un cycle de \(y=\cos x\)?`, "(0°, 1), (90°, 0), (180°, −1), (270°, 0), (360°, 1)", ["(0°, 0), (90°, 1), (180°, 0), (270°, −1), (360°, 0)", "(0°, 1), (180°, 0), (360°, −1), (540°, 0), (720°, 1)", "(0°, −1), (90°, 0), (180°, 1), (270°, 0), (360°, −1)"], "Le cosinus commence à son maximum."),
  num(S`Quel est l'écart (en degrés) entre deux points clés consécutifs de \(y=\sin3x\)?`, 30, "Période de 120°, quart de période de 30°."),
  num(S`Quel est l'écart (en degrés) entre deux points clés consécutifs de \(y=\cos\frac x2\)?`, 180, "Période de 720°, quart de période de 180°."),
  tf(S`L'axe de \(y=2\sin x+5\) est \(y=5\).`, true, "d = 5."),
  num(S`Quelle est l'ordonnée à l'origine de \(y=3\cos x-1\)?`, 2, "3(1) − 1."),
  num(S`Quelle est l'ordonnée à l'origine de \(y=2\sin x+4\)?`, 4, "2(0) + 4."),
  num(S`Pour quelle valeur de x entre 0° et 360° se trouve le premier maximum de \(y=\sin(x+60^\circ)\)?`, 30, "90° − 60°."),
  num(S`Quelle est la valeur minimale de \(y=3\sin x-2\)?`, -5, "−2 − 3."),
  mc("Quelle règle transforme un point de base selon y = a sin(k(x − c)) + d?", S`\((x,y)\to\left(\frac xk+c,\ ay+d\right)\)`, [S`\((x,y)\to(kx+c,\ ay+d)\)`, S`\((x,y)\to\left(\frac xk-c,\ \frac ya+d\right)\)`, S`\((x,y)\to(x+c,\ ky+d)\)`], "Divise x par k, ajoute c; multiplie y par a, ajoute d."),
  num(S`Combien de cycles complets de \(y=\sin3x\) y a-t-il pour \(0^\circ\le x\le360^\circ\)?`, 3, "Période de 120°."),
  tf(S`Pour tracer \(y=\sin2x\), on multiplie par 2 l'abscisse de chaque point clé de base.`, false, "On divise par 2 : le graphique est comprimé."),
  num("Lis l'ordonnée du graphique en x = 270°.", -1, "2(−1) + 1.", waveD((x) => 2 * sin(x) + 1, { xmin: 0, xmax: 360, ymin: -2, ymax: 4 }, { x: 45, y: 1 }, { pts: [[0, 1], [90, 3], [180, 1], [270, -1], [360, 1]] })),
  num("Pour quelle valeur de x se trouve le premier minimum du graphique (en degrés)?", 90, "y = cos 2x : min à 180 ÷ 2.", waveD((x) => cos(2 * x), { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 45, y: 0.5 })),
];

export const M = [
  num(S`Le point de base \((90^\circ,1)\) est transformé selon \(y=3\sin(2(x-15^\circ))+1\). Quelle est l'abscisse de l'image?`, 60, "90 ÷ 2 + 15."),
  num(S`Le point de base \((90^\circ,1)\) est transformé selon \(y=3\sin(2(x-15^\circ))+1\). Quelle est l'ordonnée de l'image?`, 4, "3(1) + 1."),
  num(S`Le point du cosinus \((180^\circ,-1)\) est transformé selon \(y=2\cos3x-1\). Quelle est l'abscisse de l'image?`, 60, "180 ÷ 3."),
  num(S`Le point du cosinus \((180^\circ,-1)\) est transformé selon \(y=2\cos3x-1\). Quelle est l'ordonnée de l'image?`, -3, "2(−1) − 1."),
  mc(S`Quels sont les points clés de \(y=-2\sin x+1\)?`, "(0°, 1), (90°, −1), (180°, 1), (270°, 3), (360°, 1)", ["(0°, 1), (90°, 3), (180°, 1), (270°, −1), (360°, 1)", "(0°, −1), (90°, −3), (180°, −1), (270°, 1), (360°, −1)", "(0°, 1), (90°, −2), (180°, 1), (270°, 2), (360°, 1)"], "y → −2y + 1."),
  mc(S`Quels sont les points clés de \(y=\cos(x+90^\circ)\)?`, "(−90°, 1), (0°, 0), (90°, −1), (180°, 0), (270°, 1)", ["(90°, 1), (180°, 0), (270°, −1), (360°, 0), (450°, 1)", "(0°, 1), (90°, 0), (180°, −1), (270°, 0), (360°, 1)", "(−90°, 0), (0°, 1), (90°, 0), (180°, −1), (270°, 0)"], "Chaque x − 90."),
  num(S`Quelle est la plus petite abscisse à l'origine positive de \(y=\sin x-0.5\)?`, 30, "sin x = 0.5."),
  num(S`Pour quelle valeur de x se trouve le premier maximum de \(y=2\sin3x+1\) après 0°?`, 30, "90 ÷ 3."),
  num(S`Pour quelle valeur de x se trouve le premier minimum de \(y=\cos(2(x-20^\circ))\) après 20°?`, 110, "180 ÷ 2 + 20."),
  num(S`Quelle est l'ordonnée à l'origine de \(y=4\sin(x+30^\circ)-1\)?`, 1, "4 sin 30° − 1."),
  num(S`Quelle est l'ordonnée à l'origine de \(y=-2\cos(2(x-30^\circ))+3\)?`, 2, "−2 cos(−60°) + 3."),
  ms(S`Quels points sont sur \(y=2\sin2x+1\)? Choisis toutes les bonnes réponses.`, ["(45°, 3)", "(90°, 1)", "(135°, −1)", "(0°, 0)", "(180°, 1)"], [0, 1, 2, 4], "En 0° : y = 1, et non 0."),
  tf(S`Les points clés de \(y=\sin3x\) sont espacés de 30°.`, true, "Le quart de 120°."),
  num(S`Quelle est la distance entre la valeur maximale et la valeur minimale de \(y=-4\cos x+1\)?`, 8, "2|a|."),
  num(S`Combien d'abscisses à l'origine \(y=\sin x+0.5\) a-t-elle pour \(0^\circ\le x\le360^\circ\)?`, 2, "210° et 330°."),
  num(S`Combien d'abscisses à l'origine \(y=\cos x+1\) a-t-elle pour \(0^\circ\le x\le360^\circ\)?`, 1, "Elle touche seulement l'axe à 180°."),
  mc(S`Pour tracer \(y=\sin(2(x-30^\circ))\) à partir des points clés, que fais-tu à chaque abscisse?`, "diviser par 2, puis ajouter 30", ["ajouter 30, puis diviser par 2", "multiplier par 2, puis ajouter 30", "diviser par 2, puis soustraire 30"], "k d'abord, puis c."),
  num(S`Quel est l'écart (en degrés) entre deux points clés consécutifs de \(y=\sin(0.25x)\)?`, 360, "Période de 1440°, quart de 360°."),
  num("Pour quelle valeur de x le graphique atteint-il son premier maximum après 0°?", 60, "y = 3 cos(x − 60°) − 1.", waveD((x) => 3 * cos(x - 60) - 1, { xmin: 0, xmax: 420, ymin: -5, ymax: 3 }, { x: 30, y: 1 })),
  num("Lis la valeur de y du graphique en x = 45°.", 1, "y = −sin 2x + 2 en 45°.", waveD((x) => -sin(2 * x) + 2, { xmin: 0, xmax: 360, ymin: 0, ymax: 4 }, { x: 45, y: 0.5 }, { pts: [[45, 1, "(45°, ?)"]] })),
];

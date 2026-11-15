// 6.5 Tracer des fonctions sinusoïdales à l'aide de transformations — 20 questions difficiles (miroir de ../../mcr3u-ch6/bank/h6_5.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos, acos, rd } from "./fig.mjs";
import { TITLE } from "../l6_5.mjs";

const S = String.raw;

export const TOPIC = TITLE;
export const Q = [
  num(S`Le point de base \((270^\circ,-1)\) est transformé selon \(y=-4\sin\left(\frac12(x+60^\circ)\right)+3\). Quelle est l'abscisse de l'image?`, 480, "270 × 2 − 60."),
  num(S`Le point de base \((270^\circ,-1)\) est transformé selon \(y=-4\sin\left(\frac12(x+60^\circ)\right)+3\). Quelle est l'ordonnée de l'image?`, 7, "−4(−1) + 3."),
  num(S`Pour quelle valeur x > 15° la fonction \(y=-3\cos(2(x-15^\circ))+2\) atteint-elle son maximum pour la première fois?`, 105, "cos = −1 : 2(x − 15°) = 180°."),
  num(S`Trouve la plus grande abscisse à l'origine de \(y=2\sin x+\sqrt3\) pour \(0^\circ\le x\le360^\circ\).`, 300, "sin x = −√3/2 : 240° et 300°."),
  num(S`Trouve la plus grande abscisse à l'origine de \(y=2\cos2x-1\) pour \(0^\circ\le x\le180^\circ\).`, 150, "cos 2x = ½ : 2x = 60° ou 300°."),
  num(S`Combien d'abscisses à l'origine \(y=3\sin2x+3\) a-t-elle pour \(0^\circ\le x\le360^\circ\)?`, 2, "Elle touche l'axe à ses minimums, 135° et 315°."),
  mc(S`Quels sont les points clés de \(y=2\cos\left(\frac13(x-90^\circ)\right)-1\)?`, "(90°, 1), (360°, −1), (630°, −3), (900°, −1), (1170°, 1)", ["(90°, 1), (120°, −1), (150°, −3), (180°, −1), (210°, 1)", "(−90°, 1), (180°, −1), (450°, −3), (720°, −1), (990°, 1)", "(90°, 2), (360°, 0), (630°, −2), (900°, 0), (1170°, 2)"], "x → 3x + 90; y → 2y − 1."),
  num(S`Quelle est la somme des abscisses des cinq points clés d'un cycle de \(y=\sin2x\) qui commence à 0°?`, 450, "0 + 45 + 90 + 135 + 180."),
  num(S`Pour quelle valeur de x entre 0° et 120° la fonction \(y=-2\sin3x+4\) atteint-elle son maximum?`, 90, "sin 3x = −1 : 3x = 270°."),
  tf(S`Le graphique de \(y=\sin(2(x-45^\circ))\) est le même que celui de \(y=-\cos2x\).`, true, "sin(2x − 90°) = −cos 2x."),
  ms(S`Lesquels sont des points clés de \(y=-\cos2x+1\)? Choisis toutes les bonnes réponses.`, ["(0°, 0)", "(45°, 1)", "(90°, 2)", "(135°, 1)", "(180°, 0)", "(90°, 0)"], [0, 1, 2, 3, 4], "y → −y + 1, x → x/2."),
  num(S`Combien de cycles complets de \(y=2\sin\frac x4\) y a-t-il pour \(0^\circ\le x\le2880^\circ\)?`, 2, "Période de 1440°."),
  num(S`Quel est l'écart (en degrés) entre deux maximums consécutifs de \(y=\cos6x\)?`, 60, "Une période."),
  num(S`Trouve l'ordonnée à l'origine de \(y=-5\sin(3(x+10^\circ))+2\).`, -0.5, "−5 sin 30° + 2.", null, 0.001),
  num(S`Trouve la plus petite valeur de x dans \(0^\circ\le x\le180^\circ\) pour laquelle \(y=4\cos(2(x-30^\circ))+1\) vaut 1.`, 75, "cos = 0 : 2(x − 30°) = 90°."),
  num("Pour quelle valeur de x se trouve le premier maximum après 0° (en degrés)?", 75, "y = 2 sin(2(x − 30°)) + 1 : 90 ÷ 2 + 30.", waveD((x) => 2 * sin(2 * (x - 30)) + 1, { xmin: 0, xmax: 270, ymin: -2, ymax: 4 }, { x: 15, y: 1 })),
  num("Le graphique est y = 3 cos(0.5x) − 1. Trouve sa plus petite abscisse à l'origine positive (2 décimales).", rd(2 * acos(1 / 3)), "cos(0.5x) = ⅓.", waveD((x) => 3 * cos(0.5 * x) - 1, { xmin: 0, xmax: 720, ymin: -5, ymax: 3 }, { x: 90, y: 1 }), 0.01),
  num("Pour 0° < x < 360°, combien de fois le graphique touche-t-il l'axe des x?", 2, "y = −2 cos 3x + 2 touche l'axe à 120° et à 240°.", waveD((x) => -2 * cos(3 * x) + 2, { xmin: 0, xmax: 360, ymin: -1, ymax: 5 }, { x: 30, y: 1 })),
  num("Lis la différence entre le maximum et le minimum du graphique.", 8, "y = 4 sin(x − 45°) + 2 : 2 × 4.", waveD((x) => 4 * sin(x - 45) + 2, { xmin: 0, xmax: 405, ymin: -3, ymax: 7 }, { x: 45, y: 1 })),
  num(S`Le point du cosinus \((90^\circ,0)\) est transformé selon \(y=5\cos(4(x+15^\circ))-2\). Quelle est l'abscisse de l'image?`, 7.5, "90 ÷ 4 − 15.", null, 0.001),
];

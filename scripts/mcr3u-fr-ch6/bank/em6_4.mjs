// 6.4 Transformations des fonctions sinusoïdales — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch6/bank/em6_4.mjs)
// Notation française : y = a sin(k(x − c)) + d (c = déphasage, d = axe).
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos } from "./fig.mjs";

const S = String.raw;

export const E = [
  num(S`Quelle est l'amplitude de \(y=6\sin x\)?`, 6, "|a|."),
  num(S`Quelle est l'amplitude de \(y=-0.25\cos x\)?`, 0.25, "|−0.25|.", null, 0.0001),
  num(S`Quelle est la période de \(y=\sin5x\) en degrés?`, 72, "360 ÷ 5."),
  num(S`Quelle est la période de \(y=\cos\frac x2\) en degrés?`, 720, "360 ÷ ½."),
  num(S`Quelle est la valeur de y de l'axe de \(y=\sin x-7\)?`, -7, "d = −7."),
  num(S`Dans \(y=\cos(x-75^\circ)\), que vaut c?`, 75, "75° vers la droite."),
  num(S`Dans \(y=\sin(x+120^\circ)\), que vaut c?`, -120, "x − c = x + 120°."),
  mc("Quel est l'effet d'une valeur négative de a sur un graphique sinusoïdal?", "une réflexion par rapport à son axe", ["une translation vers la gauche", "une période plus courte", "une translation vers le bas"], "Chaque valeur de y change de signe."),
  mc(S`Si \(k=4\), quelle est la période de \(y=\sin kx\)?`, "90°", ["4°", "1440°", "360°"], "360 ÷ 4."),
  tf("Changer d change la période d'une sinusoïde.", false, "d est une translation verticale."),
  num(S`Quelle est la valeur maximale de \(y=2\sin x+5\)?`, 7, "5 + 2."),
  num(S`Quelle est la valeur minimale de \(y=2\sin x+5\)?`, 3, "5 − 2."),
  mc(S`Quelle est l'image de \(y=3\cos x-1\)?`, S`\(-4\le y\le2\)`, [S`\(-3\le y\le3\)`, S`\(-1\le y\le3\)`, S`\(-4\le y\le-1\)`], "−1 ± 3."),
  num(S`Quelle est la période de \(y=3\sin x\) en degrés?`, 360, "a ne change pas la période."),
  tf(S`\(y=\sin(x-30^\circ)\) correspond à \(y=\sin x\) translatée de 30° vers la droite.`, true, "c = 30°."),
  num(S`Quelle est l'amplitude de \(y=4\sin2x-9\)?`, 4, "|a|."),
  num(S`Quelle est la période de \(y=\cos\frac x5\) en degrés?`, 1800, "360 ÷ ⅕."),
  mc("Laquelle a une période de 180°?", S`\(y=\sin2x\)`, [S`\(y=2\sin x\)`, S`\(y=\sin\frac x2\)`, S`\(y=\sin x+2\)`], "k = 2."),
  num("Lis l'amplitude du graphique.", 3, "Max 4, min −2.", waveD((x) => 3 * sin(x) + 1, { xmin: 0, xmax: 360, ymin: -3, ymax: 5 }, { x: 45, y: 1 })),
  num("Lis la période du graphique (en degrés).", 180, "Un cycle de 0° à 180°.", waveD((x) => sin(2 * x), { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 45, y: 0.5 })),
];

export const M = [
  num(S`Quel est le déphasage de \(y=\sin(3x-90^\circ)\) (en degrés, positif vers la droite)?`, 30, "3(x − 30°)."),
  num(S`Quel est le déphasage de \(y=\cos(2x+70^\circ)\) (en degrés, positif vers la droite)?`, -35, "2(x + 35°)."),
  num(S`Quelle est la période de \(y=-2\sin(0.4x)+1\) en degrés?`, 900, "360 ÷ 0.4."),
  num(S`Quelle est la valeur minimale de \(y=-5\cos x+2\)?`, -3, "2 − 5."),
  num(S`Quelle est la valeur maximale de \(y=-5\cos x+2\)?`, 7, "2 + 5."),
  mc(S`Quelle est l'image de \(y=0.5\sin3x-4\)?`, S`\(-4.5\le y\le-3.5\)`, [S`\(-4\le y\le0.5\)`, S`\(-5\le y\le-3\)`, S`\(-3.5\le y\le4.5\)`], "−4 ± 0.5."),
  mc(S`Quelle description correspond à \(y=3\cos(2(x-10^\circ))+4\)?`, "amplitude 3, période 180°, 10° vers la droite, axe y = 4", ["amplitude 3, période 720°, 10° vers la gauche, axe y = 4", "amplitude 4, période 180°, 10° vers la droite, axe y = 3", "amplitude 3, période 180°, 20° vers la droite, axe y = 4"], "Lis a, 360/k, c, d."),
  num(S`Évalue \(y=2\sin(x-30^\circ)+1\) en \(x=120^\circ\).`, 3, "2 sin 90° + 1."),
  num(S`Évalue \(y=-3\cos2x+1\) en \(x=90^\circ\).`, 4, "−3 cos 180° + 1."),
  ms("Lesquelles ont une période de 120°? Choisis toutes les bonnes réponses.", [S`\(y=\sin3x\)`, S`\(y=\cos(3x+60^\circ)\)`, S`\(y=3\sin x\)`, S`\(y=\sin\frac x3\)`, S`\(y=2\cos(3(x-10^\circ))+5\)`], [0, 1, 4], "Seul k = 3 donne 120°."),
  tf(S`\(-\sin x\) et \(\sin(-x)\) ont le même graphique.`, true, "Le sinus est une fonction impaire : sin(−x) = −sin x."),
  tf(S`Le graphique de \(y=\cos(x+360^\circ)\) est différent de celui de \(y=\cos x\).`, false, "Une translation d'une période complète ne change rien."),
  num("Quelle valeur de k donne une période de 40°?", 9, "360 ÷ 40."),
  num(S`Une sinusoïde a l'image \(2\le y\le8\). Que vaut d?`, 5, "(2 + 8)/2."),
  num(S`Une sinusoïde a l'image \(2\le y\le8\). Que vaut |a|?`, 3, "(8 − 2)/2."),
  mc("Laquelle est le graphique de y = cos x translaté de 45° vers la gauche?", S`\(y=\cos(x+45^\circ)\)`, [S`\(y=\cos(x-45^\circ)\)`, S`\(y=\cos x+45\)`, S`\(y=\cos x-45\)`], "x − (−45°)."),
  num(S`Où se trouve le premier maximum de \(y=\sin(x-30^\circ)\) à droite de 0°?`, 120, "90° + 30°."),
  num(S`Où se trouve le premier maximum de \(y=\cos(x-50^\circ)\) à droite de 0°?`, 50, "0° + 50°."),
  num("Avec un cosinus où a > 0, quel déphasage (en degrés) le graphique montre-t-il?", 45, "Le maximum est à 45°.", waveD((x) => 2 * cos(x - 45) + 1, { xmin: -90, xmax: 405, ymin: -2, ymax: 4 }, { x: 45, y: 1 }, { pts: [[45, 3]] })),
  num("Lis la valeur maximale du graphique.", 5, "Axe 3, amplitude 2.", waveD((x) => -2 * sin(x) + 3, { xmin: 0, xmax: 360, ymin: 0, ymax: 6 }, { x: 45, y: 1 })),
];

// 6.6 Équations de fonctions sinusoïdales — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch6/bank/em6_6.mjs)
// Notation française : y = a sin(k(x − c)) + d (c = déphasage, d = axe).
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos } from "./fig.mjs";

const S = String.raw;

export const E = [
  num("Une sinusoïde a un max de 8 et un min de 2. Que vaut |a|?", 3, "(8 − 2)/2."),
  num("Une sinusoïde a un max de 8 et un min de 2. Que vaut d?", 5, "(8 + 2)/2."),
  num("Une sinusoïde a une période de 180°. Que vaut k?", 2, "360 ÷ 180."),
  num("Une sinusoïde a une période de 60°. Que vaut k?", 6, "360 ÷ 60."),
  num("Une sinusoïde a une période de 720°. Que vaut k?", 0.5, "360 ÷ 720.", null, 0.0001),
  mc("Quelle équation a un maximum de 1 en x = 0°, une période de 360° et l'axe y = 0?", S`\(y=\cos x\)`, [S`\(y=\sin x\)`, S`\(y=-\cos x\)`, S`\(y=\cos x+1\)`], "Le cosinus commence à son maximum."),
  mc("Quelle équation passe par l'origine en montant, avec une amplitude de 3 et une période de 360°?", S`\(y=3\sin x\)`, [S`\(y=3\cos x\)`, S`\(y=\sin3x\)`, S`\(y=-3\sin x\)`], "Le sinus commence sur l'axe, en montant."),
  num("Un graphique cosinus (a > 0) a un maximum en x = 70°. En utilisant ce maximum, que vaut c?", 70, "c est l'abscisse d'un maximum."),
  num(S`Une sinusoïde a l'image \(0\le y\le10\). Que vaut d?`, 5, "Le milieu."),
  num(S`Une sinusoïde a l'image \(0\le y\le10\). Que vaut |a|?`, 5, "La moitié de la hauteur."),
  tf("Un même graphique sinusoïdal peut être décrit par une équation avec sinus et par une équation avec cosinus.", true, "Elles diffèrent par un déphasage."),
  num("La distance entre un maximum et le minimum suivant est de 50°. Quelle est la période?", 100, "Du max au min, il y a une demi-période."),
  num("La distance entre un maximum et le minimum suivant est de 45°. Que vaut k?", 4, "Période de 90°."),
  mc("Où faut-il commencer à lire c pour une équation avec cosinus où a > 0?", "à un maximum", ["à un minimum", "là où le graphique coupe son axe en montant", "à l'ordonnée à l'origine"], "cos 0 = 1 est un maximum."),
  mc("Où faut-il commencer à lire c pour une équation avec sinus où a > 0?", "là où le graphique coupe son axe en montant", ["à un maximum", "à un minimum", "là où le graphique coupe son axe en descendant"], "sin 0 = 0, en croissance."),
  num("Un graphique sinus (a > 0) coupe son axe en montant en x = 20°. Que vaut c?", 20, "Le début d'un cycle sinus."),
  tf("Pour faire commencer une équation avec cosinus à un minimum, on utilise une valeur négative de a.", true, "−cos commence à son minimum."),
  num("Une sinusoïde a un max de 3 et un min de −7. Que vaut d?", -2, "(3 − 7)/2."),
  num("Lis |a| sur le graphique.", 3, "Max 4, min −2.", waveD((x) => 3 * sin(x) + 1, { xmin: 0, xmax: 360, ymin: -3, ymax: 5 }, { x: 45, y: 1 }, { pts: [[90, 4], [270, -2]] })),
  num("Lis k sur le graphique.", 3, "Période de 120°.", waveD((x) => 2 * cos(3 * x), { xmin: 0, xmax: 360, ymin: -3, ymax: 3 }, { x: 30, y: 1 }, { pts: [[0, 2], [120, 2]] })),
];

export const M = [
  mc("Quelle équation a un maximum en (0°, 5) et le minimum suivant en (90°, −1)?", S`\(y=3\cos2x+2\)`, [S`\(y=3\cos x+2\)`, S`\(y=6\cos2x-1\)`, S`\(y=3\sin2x+2\)`], "a = 3, d = 2, période de 180°."),
  mc("Quelle équation a un maximum en (60°, 4) et le minimum suivant en (240°, −4)?", S`\(y=4\cos(x-60^\circ)\)`, [S`\(y=4\cos(x+60^\circ)\)`, S`\(y=4\sin(x-60^\circ)\)`, S`\(y=4\cos(2(x-60^\circ))\)`], "Période de 360°, cosinus à partir du max."),
  num("Une sinusoïde a un maximum en x = 10° et le minimum suivant en x = 40°. Que vaut k?", 6, "Période de 60°."),
  num("Un graphique cosinus (a > 0) a un maximum en x = −20°. En utilisant ce maximum, que vaut c?", -20, "c = −20°."),
  mc("Quelle équation est une fonction sinus d'amplitude 4, de période 90°, avec un déphasage de 10° vers la droite et l'axe y = 1?", S`\(y=4\sin(4(x-10^\circ))+1\)`, [S`\(y=4\sin(4x-10^\circ)+1\)`, S`\(y=4\sin(\frac x4-10^\circ)+1\)`, S`\(y=1\sin(4(x-10^\circ))+4\)`], "k = 4, forme factorisée avec c = 10°."),
  mc("Quelle équation avec cosinus a l'image 1 ≤ y ≤ 7, une période de 240° et un maximum en x = 0°?", S`\(y=3\cos(1.5x)+4\)`, [S`\(y=3\cos(240x)+4\)`, S`\(y=4\cos(1.5x)+3\)`, S`\(y=6\cos(1.5x)+1\)`], "a = 3, d = 4, k = 360/240."),
  num("Un modèle y = a cos(kt) + d a un max de 18 en t = 0 et le min suivant de 6 en t = 5. Que vaut k?", 36, "Période de 10."),
  num("Un modèle y = a cos(kt) + d a un max de 18 en t = 0 et le min suivant de 6 en t = 5. Que vaut a?", 6, "(18 − 6)/2."),
  num("Un modèle y = a cos(kt) + d a un max de 18 en t = 0 et le min suivant de 6 en t = 5. Que vaut d?", 12, "(18 + 6)/2."),
  tf(S`\(y=2\sin(x-90^\circ)\) a le même graphique que \(y=-2\cos x\).`, true, "sin(x − 90°) = −cos x."),
  tf(S`\(y=3\cos(x+90^\circ)\) a le même graphique que \(y=3\sin x\).`, false, "cos(x + 90°) = −sin x."),
  ms("Quelles équations ont un maximum en (0°, 2) et un minimum en (180°, −2)? Choisis toutes les bonnes réponses.", [S`\(y=2\cos x\)`, S`\(y=-2\cos(x-180^\circ)\)`, S`\(y=2\sin(x+90^\circ)\)`, S`\(y=2\sin x\)`, S`\(y=2\cos(x+360^\circ)\)`], [0, 1, 2, 4], "2 sin x commence à 0."),
  num("Une sinusoïde a une période de 200° et un maximum en x = 50°. Pour une équation avec sinus où a > 0, quelle est la plus petite valeur non négative de c?", 0, "Le passage par l'axe en montant se trouve un quart de période (50°) avant le max."),
  num("Une sinusoïde a une période de 120° et un maximum en x = 100°. Pour une équation avec sinus où a > 0, que vaut c (la valeur la plus proche du max, sous celle-ci)?", 70, "100 − 30."),
  num("Un graphique a un minimum en x = 30°. Pour une équation avec cosinus où a < 0, que vaut c?", 30, "−cos commence à son minimum."),
  num("Un graphique a un min de −3 en x = 30° et un max de 5. Pour une équation avec cosinus qui commence à ce minimum, que vaut a?", -4, "|a| = 4, négatif pour commencer à un min."),
  mc("Une température a une période de 24 h, un maximum de 20° en t = 14 et un minimum de 8°. Quel modèle convient?", S`\(T=6\cos(15(t-14))+14\)`, [S`\(T=6\cos(24(t-14))+14\)`, S`\(T=12\cos(15(t-14))+8\)`, S`\(T=6\sin(15(t-14))+14\)`], "a = 6, d = 14, k = 15, c = 14."),
  num(S`Vérifie un point : évalue \(y=3\cos(2(x-30^\circ))+1\) en \(x=120^\circ\).`, -2, "3 cos 180° + 1."),
  num("Un graphique cosinus a son maximum à l'endroit indiqué. Que vaut c (en degrés)?", 30, "Max à 30°.", waveD((x) => 2 * cos(x - 30) + 1, { xmin: -60, xmax: 390, ymin: -2, ymax: 4 }, { x: 30, y: 1 }, { pts: [[30, 3]] })),
  num("Lis d sur le graphique.", 3, "À mi-chemin entre 5 et 1.", waveD((x) => 2 * sin(2 * x) + 3, { xmin: 0, xmax: 360, ymin: 0, ymax: 6 }, { x: 45, y: 1 })),
];

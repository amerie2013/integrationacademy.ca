// 6.6 Équations de fonctions sinusoïdales — 20 questions difficiles (miroir de ../../mcr3u-ch6/bank/h6_6.mjs)
// Notation française : y = a sin(k(x − c)) + d (c = déphasage, d = axe).
import { FIG } from "./fig.mjs";
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos } from "./fig.mjs";
import { TITLE } from "../l6_6.mjs";

const S = String.raw;

export const TOPIC = TITLE;
export const Q = [
  mc("Une sinusoïde a un maximum en (25°, 9) et le minimum suivant en (70°, 3). Quelle équation convient?", S`\(y=3\cos(4(x-25^\circ))+6\)`, [S`\(y=3\cos(2(x-25^\circ))+6\)`, S`\(y=6\cos(4(x-25^\circ))+3\)`, S`\(y=3\cos(4(x+25^\circ))+6\)`], "Demi-période de 45°, période de 90°, k = 4.", FIG.sinD25),
  num("Une sinusoïde a un maximum en (25°, 9) et le minimum suivant en (70°, 3). Que vaut c dans une équation avec sinus où a > 0?", 2.5, "Le passage en montant se trouve 22.5° avant le max.", FIG.sinD25, 0.001),
  mc("Un graphique a un minimum en (0°, −1) et le maximum suivant en (45°, 5). Quelle équation convient?", S`\(y=-3\cos4x+2\)`, [S`\(y=3\cos4x+2\)`, S`\(y=-3\cos2x+2\)`, S`\(y=-6\cos4x+5\)`], "a = −3 (départ au min), d = 2, période de 90°.", FIG.min45),
  num("Une sinusoïde fait exactement 3 cycles en 540°. Que vaut k?", 2, "Période de 180°."),
  num("Un graphique cosinus (a > 0) a un maximum en x = 400° et une période de 360°. Quelle est la plus petite valeur non négative de c?", 40, "400 − 360."),
  tf(S`\(4\sin(2(x+45^\circ))=4\cos2x\) pour tout x.`, true, "sin(2x + 90°) = cos 2x."),
  ms(S`Lesquels décrivent \(y=-2\cos3x+1\)? Choisis toutes les bonnes réponses.`, ["minimum en x = 0°", "maximum en x = 60°", "période de 120°", "axe y = 1", "image −1 ≤ y ≤ 3", "maximum en x = 0°"], [0, 1, 2, 3, 4], "a < 0 : elle commence à son minimum."),
  num(S`Évalue \(y=5\cos(30(t-1))+10\) en \(t=7\).`, 5, "5 cos 180° + 10."),
  num("Une sinusoïde a l'axe y = 4, passe par (0°, 4) en montant et a son premier maximum, 7, en x = 30°. Que vaut k?", 3, "Quart de période de 30°, période de 120°.", FIG.sinAxis4),
  num("Une sinusoïde a l'axe y = 4, passe par (0°, 4) en montant et a son premier maximum, 7, en x = 30°. Quelle est la période (en degrés)?", 120, "4 × 30.", FIG.sinAxis4),
  mc("La durée du jour atteint un maximum de 14.8 h le jour 172 et un minimum de 9.6 h. Quel modèle convient (t en jours)?", S`\(L=2.6\cos\left(\frac{360}{365}(t-172)\right)+12.2\)`, [S`\(L=5.2\cos\left(\frac{360}{365}(t-172)\right)+9.6\)`, S`\(L=2.6\cos(365(t-172))+12.2\)`, S`\(L=2.6\sin\left(\frac{360}{365}(t-172)\right)+12.2\)`], "a = 2.6, d = 12.2, cosinus à partir du max."),
  num("La durée du jour atteint un maximum de 14.8 h le jour 172 et un minimum de 9.6 h. Quelle est l'amplitude d'un modèle de cette durée (h)?", 2.6, "(14.8 − 9.6)/2.", null, 0.001),
  num("Un modèle a un maximum de 30 en t = 3 et le minimum suivant de 10 en t = 9. Quelle est sa valeur en t = 6?", 20, "À mi-chemin dans le temps : sur l'axe.", FIG.model30),
  num("Un modèle a un maximum de 30 en t = 3 et le minimum suivant de 10 en t = 9. Quelle est sa valeur en t = 15?", 30, "Une période après t = 3.", FIG.model30),
  num("Un modèle a un maximum de 30 en t = 3 et le minimum suivant de 10 en t = 9. Dans un modèle sinusoïdal, que vaut k?", 30, "Période de 12.", FIG.model30),
  num("Écris une équation avec sinus pour le graphique. Que vaut k?", 2, "Max (45°, 6), min (135°, 0) : période de 180°.", waveD((x) => 3 * sin(2 * x) + 3, { xmin: 0, xmax: 360, ymin: -1, ymax: 7 }, { x: 45, y: 1 }, { pts: [[45, 6], [135, 0]] })),
  num("Le graphique est entièrement sous l'axe des x. Lis la valeur de d.", -3, "À mi-chemin entre −1 et −5.", waveD((x) => 2 * cos(2 * (x + 30)) - 3, { xmin: -90, xmax: 270, ymin: -6, ymax: 0 }, { x: 30, y: 1 })),
  num("Si on écrit le graphique sous la forme y = a cos x + d, que vaut a?", -4, "Il commence à son minimum.", waveD((x) => -4 * cos(x) + 1, { xmin: 0, xmax: 360, ymin: -4, ymax: 6 }, { x: 45, y: 1 }, { pts: [[0, -3], [180, 5]] })),
  num("Lis la période du graphique (en degrés).", 240, "y = 2 sin(1.5(x − 20°)) : d'un max au max suivant.", waveD((x) => 2 * sin(1.5 * (x - 20)), { xmin: 0, xmax: 540, ymin: -3, ymax: 3 }, { x: 30, y: 1 })),
  num(S`Quelle est la plus petite valeur positive de c pour laquelle \(5\cos(x-c)=5\sin x\) pour tout x?`, 90, "sin x = cos(x − 90°)."),
];

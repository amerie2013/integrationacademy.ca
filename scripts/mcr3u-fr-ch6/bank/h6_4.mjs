// 6.4 Transformations des fonctions sinusoïdales — 20 questions difficiles (miroir de ../../mcr3u-ch6/bank/h6_4.mjs)
// Notation française : y = a sin(k(x − c)) + d (c = déphasage, d = axe).
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos, rd } from "./fig.mjs";
import { TITLE } from "../l6_4.mjs";

const S = String.raw;

export const TOPIC = TITLE;
export const Q = [
  num(S`Quel est le déphasage de \(y=\sin(4x+100^\circ)\) (en degrés, positif vers la droite)?`, -25, "4(x + 25°)."),
  num(S`Quelle est la période de \(y=\cos(0.75x-30^\circ)\) en degrés?`, 480, "360 ÷ 0.75."),
  num(S`Quel est le déphasage de \(y=\cos(0.75x-30^\circ)\) (en degrés, positif vers la droite)?`, 40, "0.75(x − 40°)."),
  num(S`Quelle est la valeur maximale de \(y=-3\sin(2x-60^\circ)+1\)?`, 4, "1 + 3."),
  num(S`Pour quelle valeur x > 30° la fonction \(y=-3\sin(2(x-30^\circ))+1\) atteint-elle son maximum pour la première fois?`, 165, "Le max se produit lorsque sin = −1 : 2(x − 30°) = 270°."),
  num(S`Trouve l'ordonnée à l'origine de \(y=4\cos(2(x+30^\circ))-1\).`, 1, "4 cos 60° − 1."),
  num(S`Trouve l'ordonnée à l'origine de \(y=-2\sin(3(x-20^\circ))+5\) (2 décimales).`, rd(-2 * sin(-60) + 5), "−2 sin(−60°) + 5 = 5 + √3.", null, 0.01),
  mc("Quelle équation a une amplitude de 2, une période de 120°, un déphasage de 20° vers la droite et l'axe y = −1?", S`\(y=2\sin(3(x-20^\circ))-1\)`, [S`\(y=2\sin(3x-20^\circ)-1\)`, S`\(y=2\sin(\frac x3-20^\circ)-1\)`, S`\(y=-1\sin(3(x-20^\circ))+2\)`], "k = 3, forme factorisée avec c = 20°."),
  ms(S`Quelles expressions sont égales à \(\sin x\) pour tout x? Choisis toutes les bonnes réponses.`, [S`\(\cos(x-90^\circ)\)`, S`\(-\sin(x+180^\circ)\)`, S`\(\sin(x+180^\circ)\)`, S`\(-\cos(x+90^\circ)\)`, S`\(\cos(90^\circ-x)\)`], [0, 1, 3, 4], "sin(x + 180°) = −sin x."),
  tf(S`\(y=\sin(2x-60^\circ)\) a un déphasage de 60° vers la droite.`, false, "Mets en évidence : 2(x − 30°), donc 30° vers la droite."),
  num(S`Combien de points maximums \(y=\sin4x\) a-t-elle pour \(0^\circ\le x\le360^\circ\)?`, 4, "Quatre cycles, un max chacun."),
  num(S`Combien de cycles complets de \(y=\cos(2.5x)\) y a-t-il pour \(0^\circ\le x\le720^\circ\)?`, 5, "Période de 144°; 720 ÷ 144."),
  num("Un modèle utilise t en heures et a une période de 24 h. Que vaut k?", 15, "360 ÷ 24."),
  num(S`Quelle est la différence entre le maximum et le minimum de \(y=-6\sin x+2\)?`, 12, "2|a|."),
  num(S`Évalue \(y=2\cos(2(x-45^\circ))+3\) en \(x=45^\circ\).`, 5, "2 cos 0° + 3."),
  num(S`Le graphique est \(y=2\sin(kx)+1\). Trouve k.`, 4, "Période de 90°.", waveD((x) => 2 * sin(4 * x) + 1, { xmin: 0, xmax: 180, ymin: -2, ymax: 4 }, { x: 15, y: 1 })),
  num(S`Écris le graphique sous la forme \(y=a\cos x+d\). Que vaut a?`, -3, "Il commence à son minimum, donc a est négatif.", waveD((x) => -3 * cos(x) + 2, { xmin: 0, xmax: 360, ymin: -2, ymax: 6 }, { x: 45, y: 1 }, { pts: [[0, -1], [180, 5]] })),
  num(S`Le graphique est \(y=\sin(x-c)\). Trouve la plus petite valeur positive de c (en degrés).`, 60, "Il coupe l'axe en montant à 60°.", waveD((x) => sin(x - 60), { xmin: 0, xmax: 420, ymin: -1.5, ymax: 1.5 }, { x: 30, y: 0.5 }, { pts: [[60, 0]] })),
  num("Trouve la période de ce graphique sinus étiré et translaté (en degrés).", 720, "D'un max au max suivant.", waveD((x) => 4 * sin(0.5 * x) - 2, { xmin: 0, xmax: 1440, ymin: -7, ymax: 3 }, { x: 180, y: 1 })),
  num(S`Quelle translation verticale associe l'image de \(y=2\sin x+3\) à \(-1\le y\le3\)?`, -2, "L'axe doit passer de 3 à 1."),
];

// 6.2 Graphiques des fonctions sinus et cosinus — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch6/bank/em6_2.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos, rd } from "./fig.mjs";

const S = String.raw;

export const E = [
  num(S`Évalue \(\sin630^\circ\).`, -1, "630° − 360° = 270°."),
  num(S`Évalue \(\cos0^\circ\).`, 1, "Le point (1, 0)."),
  num(S`Quelle est la période de \(y=\sin x\) en degrés?`, 360, "Un tour complet."),
  num(S`Quelle est l'amplitude de \(y=\cos x\)?`, 1, "Max 1, min −1."),
  mc(S`Quelle est l'image de \(y=\sin x\)?`, S`\(-1\le y\le1\)`, [S`\(0\le y\le1\)`, S`\(-360\le y\le360\)`, "l'ensemble des nombres réels"], "Le cercle unitaire a un rayon de 1."),
  num(S`Combien de zéros \(y=\sin x\) a-t-elle pour \(0^\circ\le x\le360^\circ\)?`, 3, "0°, 180°, 360°."),
  num(S`Pour quelle valeur de x entre 0° et 360° a-t-on \(\cos x\) égal à −1 pour la première fois?`, 180, "Le point (−1, 0)."),
  mc(S`Quelle est l'ordonnée à l'origine de \(y=\cos x\)?`, S`\(1\)`, [S`\(0\)`, S`\(-1\)`, S`\(90\)`], "cos 0° = 1."),
  tf(S`\(\cos x=\sin(x+90^\circ)\) pour tout x.`, true, "Le cosinus est le sinus translaté de 90° vers la gauche."),
  tf(S`La valeur maximale de \(y=\sin x\) est 2.`, false, "C'est 1."),
  num(S`Évalue \(\sin720^\circ\).`, 0, "Deux tours complets."),
  num(S`Évalue \(\cos450^\circ\).`, 0, "450° − 360° = 90°."),
  mc(S`Pour \(0^\circ<x<360^\circ\), où a-t-on \(\sin x<0\)?`, S`\(180^\circ<x<360^\circ\)`, [S`\(0^\circ<x<180^\circ\)`, S`\(90^\circ<x<270^\circ\)`, S`\(270^\circ<x<360^\circ\) seulement`], "Sous l'axe dans les quadrants 3 et 4."),
  num(S`Évalue \(\sin(-90^\circ)\).`, -1, "Rotation dans le sens horaire jusqu'à (0, −1)."),
  num(S`Évalue \(\cos(-180^\circ)\).`, -1, "Le point (−1, 0)."),
  mc("Quel graphique de base commence à son maximum lorsque x = 0?", S`\(y=\cos x\)`, [S`\(y=\sin x\)`, "les deux", "aucun des deux"], "cos 0° = 1."),
  num(S`Combien de maximums \(y=\cos x\) a-t-elle pour \(0^\circ\le x\le720^\circ\)?`, 3, "À 0°, 360°, 720°."),
  tf(S`Le domaine de \(y=\sin x\) est \(0^\circ\le x\le360^\circ\).`, false, "Tout angle est permis : l'ensemble des nombres réels."),
  num("Lis l'ordonnée du point indiqué sur y = sin x.", 0.5, "sin 150° = ½.", waveD((x) => sin(x), { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 30, y: 0.5 }, { pts: [[150, 0.5, "(150°, ?)"]] }), 0.001),
  num("Combien de zéros de y = cos x sont représentés?", 4, "90°, 270°, 450°, 630°.", waveD((x) => cos(x), { xmin: 0, xmax: 720, ymin: -1.5, ymax: 1.5 }, { x: 90, y: 0.5 })),
];

export const M = [
  mc(S`Résous \(\sin x=\frac{\sqrt3}2\) pour \(0^\circ\le x\le720^\circ\).`, "60°, 120°, 420°, 480°", ["60°, 120°", "30°, 150°, 390°, 510°", "60°, 300°, 420°, 660°"], "Deux par cycle; ajoute 360°."),
  mc(S`Résous \(\cos x=0\) pour \(0^\circ\le x\le720^\circ\).`, "90°, 270°, 450°, 630°", ["0°, 180°, 360°, 540°, 720°", "90°, 270°", "180°, 540°"], "Le cosinus vaut zéro à 90° et à 270° dans chaque cycle."),
  num(S`Évalue \(\cos840^\circ\).`, -0.5, "840° − 720° = 120°."),
  num(S`Évalue \(\sin(-210^\circ)\).`, 0.5, "−210° + 360° = 150°."),
  num(S`Combien de solutions \(\cos x=-0.4\) a-t-elle pour \(0^\circ\le x\le1080^\circ\)?`, 6, "Deux par cycle, trois cycles."),
  num(S`Évalue \(\sin1290^\circ\).`, -0.5, "1290° − 1080° = 210°."),
  mc(S`Sur \(0^\circ\le x\le360^\circ\), où \(y=\cos x\) est-elle décroissante?`, "de 0° à 180°", ["de 180° à 360°", "de 90° à 270°", "partout"], "Du max à 0° jusqu'au min à 180°."),
  mc(S`Sur \(0^\circ\le x\le360^\circ\), où \(y=\sin x\) est-elle croissante?`, "de 0° à 90° et de 270° à 360°", ["de 90° à 270°", "de 0° à 180°", "de 180° à 360°"], "Elle monte jusqu'au max à 90°, descend jusqu'au min à 270°, puis remonte."),
  num(S`Quelle est la plus petite valeur positive de x telle que \(\cos x=0\)?`, 90, "Premier zéro du cosinus."),
  num(S`Quelle est la plus grande valeur de x dans \(0^\circ\le x\le720^\circ\) telle que \(\sin x=-1\)?`, 630, "270° + 360°."),
  tf(S`\(\sin(180^\circ-x)=\sin x\) pour tout x.`, true, "Le graphique du sinus est symétrique par rapport à x = 90°."),
  tf(S`\(\cos(-x)=-\cos x\) pour tout x.`, false, "cos(−x) = cos x : le graphique du cosinus est symétrique par rapport à l'axe des y."),
  ms("Lesquels valent 0? Choisis toutes les bonnes réponses.", [S`\(\sin180^\circ\)`, S`\(\cos90^\circ\)`, S`\(\sin270^\circ\)`, S`\(\cos540^\circ\)`, S`\(\sin900^\circ\)`], [0, 1, 4], "sin 270° = −1, cos 540° = −1, sin 900° = sin 180° = 0."),
  num(S`Quelle est la somme des deux solutions de \(\sin x=0.3\) pour \(0^\circ\le x\le360^\circ\)?`, 180, "β + (180° − β)."),
  num(S`Quelle est la somme des deux solutions de \(\cos x=0.3\) pour \(0^\circ\le x\le360^\circ\)?`, 360, "β + (360° − β)."),
  num(S`Évalue \(\cos45^\circ+\sin45^\circ\) à 2 décimales près.`, rd(Math.SQRT2), "2 × 1/√2 = √2.", null, 0.006),
  mc(S`Où \(y=\sin x\) et \(y=\cos x\) se coupent-elles pour \(0^\circ\le x\le360^\circ\)?`, "45° et 225°", ["90° et 270°", "0° et 180°", "135° et 315°"], "tan x = 1."),
  num(S`Combien de solutions \(\sin x=1.2\) a-t-elle?`, 0, "Le sinus ne dépasse jamais 1."),
  num("Trouve la valeur de x du deuxième point d'intersection indiqué (entre 0° et 360°).", 330, "sin x = −½ à 210° et à 330°.", waveD((x) => sin(x), { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 30, y: 0.5 }, { lines: [{ m: 0, b: -0.5, color: "amber", dash: true }], pts: [[210, -0.5, "A"], [330, -0.5, "B"]] })),
  num("Le point indiqué sur y = cos x a y = −0.5 et se trouve dans le quadrant 3 (180° < x < 270°). Trouve x.", 240, "cos 240° = −½.", waveD((x) => cos(x), { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 30, y: 0.5 }, { pts: [[240, -0.5, "(x, −0.5)"]] })),
];

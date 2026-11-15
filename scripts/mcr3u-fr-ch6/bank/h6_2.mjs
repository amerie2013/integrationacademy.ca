// 6.2 Graphiques des fonctions sinus et cosinus — 20 questions difficiles (miroir de ../../mcr3u-ch6/bank/h6_2.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos, rd } from "./fig.mjs";
import { TITLE } from "../l6_2.mjs";

const S = String.raw;

export const TOPIC = TITLE;
export const Q = [
  num(S`Combien de solutions \(\sin x=\cos x\) a-t-elle pour \(0^\circ\le x\le1080^\circ\)?`, 6, "Deux par cycle (45° et 225°, plus des multiples de 360°)."),
  num(S`Trouve x dans \(360^\circ\le x\le720^\circ\) tel que \(\cos x=-1\).`, 540, "180° + 360°."),
  num(S`Combien de solutions \(2\sin x=1\) a-t-elle pour \(-360^\circ\le x\le360^\circ\)?`, 4, "−330°, −210°, 30°, 150°."),
  mc(S`Pour \(0^\circ\le x\le360^\circ\), où a-t-on \(\sin x>0.5\)?`, S`\(30^\circ<x<150^\circ\)`, [S`\(0^\circ<x<30^\circ\)`, S`\(150^\circ<x<360^\circ\)`, S`\(30^\circ<x<330^\circ\)`], "Entre les deux solutions de sin x = 0.5."),
  mc(S`Pour \(0^\circ\le x\le360^\circ\), où a-t-on \(\cos x<-0.5\)?`, S`\(120^\circ<x<240^\circ\)`, [S`\(60^\circ<x<300^\circ\)`, S`\(0^\circ<x<120^\circ\)`, S`\(240^\circ<x<360^\circ\)`], "Entre les deux solutions de cos x = −0.5."),
  num(S`Pendant combien de degrés de chaque cycle a-t-on \(\sin x\ge0.5\)?`, 120, "De 30° à 150°."),
  num(S`Quelle fraction de chaque cycle a-t-on \(\cos x>0\)? Entre un nombre décimal.`, 0.5, "De −90° à 90° : un demi-cycle."),
  num(S`Quelle est la valeur maximale de \(\sin x+\cos x\) (2 décimales)?`, rd(Math.SQRT2), "À 45° : √2.", null, 0.006),
  tf("Le graphique de y = cos x est symétrique par rapport à l'axe des y.", true, "cos(−x) = cos x."),
  tf("Le graphique de y = sin x est symétrique par rapport à l'axe des y.", false, "sin(−x) = −sin x : il est plutôt symétrique par rapport à l'origine."),
  num(S`Évalue \(\sin(-1110^\circ)\).`, -0.5, "−1110° + 1440° = 330°."),
  num(S`Évalue \(\cos2025^\circ\) à 4 décimales près.`, rd(cos(225), 4), "2025° − 1800° = 225°.", null, 0.0001),
  num("Un clou sur une roue à aubes de rayon 1 m part à la hauteur du centre (position 3 heures) et tourne dans le sens antihoraire; sa hauteur est sin θ. Trouve sa hauteur après une rotation de 1500° (4 décimales).", rd(sin(60), 4), "1500° − 1440° = 60°.", null, 0.0001),
  ms(S`Quelles valeurs de x vérifient \(\cos x=\cos40^\circ\)? Choisis toutes les bonnes réponses.`, ["40°", "320°", "400°", "−40°", "140°"], [0, 1, 2, 3], "cos 140° = −cos 40°."),
  num(S`Où, dans \(0^\circ\le x\le360^\circ\), \(y=\cos x\) décroît-elle le plus rapidement?`, 90, "Au zéro situé entre le max et le min."),
  num("Combien de points d'intersection de y = sin x et de y = cos x sont représentés?", 4, "45°, 225°, 405°, 585°.", waveD([(x) => sin(x), (x) => cos(x)], { xmin: 0, xmax: 720, ymin: -1.5, ymax: 1.5 }, { x: 90, y: 0.5 })),
  num("La droite y = 0.8 coupe y = sin x en A et en B (0° < x < 180°). Quelle est la somme de leurs abscisses?", 180, "B = 180° − A.", waveD((x) => sin(x), { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 30, y: 0.5 }, { lines: [{ m: 0, b: 0.8, color: "amber", dash: true }], pts: [[53.13, 0.8, "A"], [126.87, 0.8, "B"]] })),
  num("Combien de fois la droite y = −0.3 coupe-t-elle le graphique du cosinus représenté?", 4, "Deux fois par cycle.", waveD((x) => cos(x), { xmin: 0, xmax: 720, ymin: -1.5, ymax: 1.5 }, { x: 90, y: 0.5 }, { lines: [{ m: 0, b: -0.3, color: "amber", dash: true }] })),
  num("Lis l'ordonnée du point indiqué sur y = cos x.", 0.5, "cos(−60°) = cos 60°.", waveD((x) => cos(x), { xmin: -360, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 90, y: 0.5 }, { pts: [[-60, 0.5, "(−60°, ?)"]] }), 0.001),
  num(S`Trouve l'autre valeur de x dans \(0^\circ\le x\le360^\circ\) telle que \(\sin x=\sin200^\circ\).`, 340, "Les deux dans les quadrants 3 et 4 : 180° + 20° et 360° − 20°."),
];

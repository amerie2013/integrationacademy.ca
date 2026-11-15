// 6.3 Interpréter des graphiques sinusoïdaux — 20 questions difficiles (miroir de ../../mcr3u-ch6/bank/h6_3.mjs)
import { FIG } from "./fig.mjs";
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos, acos, asin, rd } from "./fig.mjs";
import { TITLE } from "../l6_3.mjs";

const S = String.raw;
const T = { xlabel: "t (s)", ylabel: "h (m)" };
const above23 = (360 - 2 * acos(-0.75)) / 7.5;
const under4 = (180 - 2 * asin(0.2)) / 360; // 0.5 + 2.5 sin θ < 0 ⇔ sin θ < −0.2
const peb = 33 - 33 * cos((360 * 100) / (66 * Math.PI));
const entry = (180 + asin(1 / 3)) / 30;

export const TOPIC = TITLE;
export const Q = [
  num(S`Une roue a un rayon de 12 m, un moyeu à 14 m et fait un tour toutes les 48 s : \(h=14-12\cos(7.5t)\). Pendant combien de temps, à chaque tour, une personne est-elle au-dessus de 23 m (2 décimales)?`, rd(above23), "cos(7.5t) ≤ −0.75 pour 7.5t entre 138.6° et 221.4°; divise cet intervalle de 82.8° par 7.5.", FIG.w1214, 0.01),
  num(S`Une roue a un rayon de 12 m, un moyeu à 14 m et fait un tour toutes les 48 s : \(h=14-12\cos(7.5t)\). Pendant combien de temps, à chaque tour, une personne est-elle au-dessous de 8 m (s)?`, 16, "cos(7.5t) > 0.5 : des angles à moins de 60° de 0°, un intervalle de 120°; 120 ÷ 7.5.", FIG.w1214),
  num("Roue A : rayon 8 m, moyeu à 10 m, 30 s par tour. Roue B : rayon 10 m, moyeu à 12 m, 40 s par tour. Les deux personnes embarquent en bas en t = 0. De combien la personne de A est-elle plus haute que celle de B en t = 10 s (m)?", 2, "A : 10 − 8 cos 120° = 14; B : 12 − 10 cos 90° = 12."),
  num("Une roue hydraulique de rayon 2.5 m a son centre à 0.5 m au-dessus de l'eau. Quelle fraction de chaque tour une palette passe-t-elle sous l'eau (2 décimales)?", rd(under4), "0.5 + 2.5 sin θ < 0 ⇔ sin θ < −0.2.", FIG.paddle25, 0.01),
  num("Un caillou est coincé au bas d'un pneu de 66 cm. À quelle hauteur se trouve-t-il après que le vélo a parcouru 100 cm (2 décimales)?", rd(peb), "Angle de rotation 360 × 100/(66π) ≈ 173.6°; hauteur 33 − 33 cos(angle).", null, 0.01),
  num("Une grande roue offre 30 tours par heure. Quelle est sa période en secondes?", 120, "3600 ÷ 30."),
  tf("Si une roue tourne deux fois plus vite, le graphique de la hauteur subit une compression horizontale de facteur ½.", true, "La période est divisée par deux."),
  mc("On relève de 1 m le moyeu et la plateforme d'embarquement d'une roue. Quelle propriété du graphique de la hauteur reste la même?", "l'amplitude", ["l'axe", "le maximum", "le minimum"], "Le rayon ne change pas."),
  num("Une roue d'observation a un diamètre de 120 m et son point le plus bas est à 15 m du sol. À quelle hauteur se trouve son moyeu (m)?", 75, "15 + 60.", FIG.w120),
  num("Une roue d'observation a un diamètre de 120 m et son point le plus bas est à 15 m du sol. Elle fait un tour en 30 min et on embarque au bas de la roue. Dans combien de minutes une personne sera-t-elle pour la première fois à la hauteur du moyeu?", 7.5, "Un quart de tour.", FIG.w120, 0.001),
  num("Une roue d'observation a un diamètre de 120 m et son point le plus bas est à 15 m du sol. Elle fait un tour en 30 min et on embarque au bas de la roue. À quelle hauteur se trouve une personne après 10 min (m)?", 105, "75 − 60 cos 120°.", FIG.w120),
  ms("Le bout d'une pale d'éolienne (moyeu à 30 m, pale de 12 m, 6 s par tour) part du haut. Lesquels sont vrais en t = 3 s? Choisis toutes les bonnes réponses.", ["le bout est en bas", "le bout est à 18 m de haut", "le bout est à 42 m de haut", "le bout est à la hauteur du moyeu"], [0, 1], "Un demi-tour : 30 − 12."),
  num("Un graphique des marées a une pleine mer de 9.5 m et une basse mer de 1.5 m, avec une période de 12.5 h. Quelle est l'amplitude (m)?", 4, "(9.5 − 1.5)/2.", FIG.tide95),
  num("Un graphique des marées a une pleine mer de 9.5 m et une basse mer de 1.5 m, avec une période de 12.5 h. Quel est le niveau moyen de l'eau (m)?", 5.5, "(9.5 + 1.5)/2.", FIG.tide95, 0.001),
  num("Un graphique des marées a une pleine mer de 9.5 m et une basse mer de 1.5 m, avec une période de 12.5 h. Combien d'heures s'écoulent entre une marée haute et la marée basse suivante?", 6.25, "Une demi-période.", FIG.tide95, 0.001),
  num("Deux roues sont représentées. De combien leurs hauteurs maximales diffèrent-elles (m)?", 6, "22 m et 16 m.", waveD([(t) => 12 - 10 * cos(6 * t), (t) => 9 - 7 * cos(6 * t)], { xmin: 0, xmax: 120, ymin: 0, ymax: 24 }, { x: 10, y: 2 }, T)),
  num("Quand la personne atteint-elle 20 m pour la première fois (s)?", 20, "14 − 12 cos(6t) = 20 ⇒ cos(6t) = −0.5 ⇒ 6t = 120°.", waveD((t) => 14 - 12 * cos(6 * t), { xmin: 0, xmax: 120, ymin: 0, ymax: 28 }, { x: 10, y: 2 }, { ...T, lines: [{ m: 0, b: 20, color: "amber", dash: true }] })),
  num("La hauteur d'une palette est 1 + 3 sin(30t) (m, t en s). Quand entre-t-elle dans l'eau pour la première fois (2 décimales)?", rd(entry), "1 + 3 sin(30t) = 0 en descendant : 30t = 180° + 19.47°.", waveD((t) => 1 + 3 * sin(30 * t), { xmin: 0, xmax: 24, ymin: -3, ymax: 5 }, { x: 2, y: 1 }, T), 0.01),
  num("Le graphique montre la hauteur d'un caillou sur un pneu de 70 cm en fonction de la distance. À quelle distance est-il au sommet pour la première fois (cm, 2 décimales)?", rd(35 * Math.PI), "Une demi-circonférence : 35π.", waveD((d) => 35 - 35 * cos((360 * d) / (70 * Math.PI)), { xmin: 0, xmax: 450, ymin: 0, ymax: 75 }, { x: 50, y: 10 }, { xlabel: "d (cm)", ylabel: "h (cm)" }), 0.01),
  num("Le graphique de la hauteur d'une roue a une période de 50 s. De combien de degrés la roue tourne-t-elle chaque seconde?", 7.2, "360 ÷ 50.", null, 0.001),
];

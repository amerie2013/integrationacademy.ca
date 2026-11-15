// 6.3 Interpréter des graphiques sinusoïdaux — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch6/bank/em6_3.mjs)
import { FIG } from "./fig.mjs";
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos, rd } from "./fig.mjs";

const S = String.raw;
const T = { xlabel: "t (s)", ylabel: "h (m)" };

export const E = [
  num("Le graphique d'une grande roue a un maximum de 40 m et un minimum de 2 m. Quel est le rayon de la roue (m)?", 19, "(40 − 2)/2.", FIG.wheelGraph),
  num("Le graphique d'une grande roue a un maximum de 40 m et un minimum de 2 m. À quelle hauteur se trouve le moyeu (m)?", 21, "(40 + 2)/2.", FIG.wheelGraph),
  num("Une personne atteint le sommet en t = 25 s, puis de nouveau en t = 85 s. Combien de temps dure un tour (s)?", 60, "85 − 25."),
  mc("Sur le graphique de la hauteur pour une grande roue, que représente l'amplitude?", "le rayon de la roue", ["le diamètre de la roue", "la hauteur du moyeu", "la durée d'un tour"], "La distance du moyeu à la personne."),
  mc("Sur le graphique de la hauteur pour une grande roue, que représente l'axe?", "la hauteur du moyeu", ["le sol", "la plateforme d'embarquement", "le rayon"], "À mi-chemin entre le haut et le bas."),
  num("Une roue a un rayon de 6 m et son moyeu est à 8 m de haut. Quelle est la hauteur minimale d'une personne (m)?", 2, "8 − 6.", FIG.w68),
  num("Une roue a un rayon de 6 m et son moyeu est à 8 m de haut. Quelle est la hauteur maximale d'une personne (m)?", 14, "8 + 6.", FIG.w68),
  num("Une roue fait un tour en 50 s et on embarque au bas de la roue. Quand une personne atteint-elle le sommet pour la première fois (s)?", 25, "Un demi-tour."),
  num("Une roue fait un tour en 50 s et on embarque au bas de la roue. Quand une personne est-elle pour la première fois à la hauteur du moyeu (s)?", 12.5, "Un quart de tour.", null, 0.001),
  tf("Sur le graphique d'une grande roue, l'amplitude est égale au diamètre de la roue.", false, "Elle est égale au rayon."),
  num("Un tour de manège dure 4 tours de roue de 50 s chacun. Quelle est la plus grande valeur du domaine de la fonction hauteur (s)?", 200, "4 × 50."),
  num("Un pneu de vélo a un diamètre de 50 cm. Quelle est la période du graphique de la hauteur d'un caillou en fonction de la distance (cm, 2 décimales)?", rd(50 * Math.PI), "Circonférence 50π.", null, 0.01),
  num("Une roue à aubes de rayon 3 m a son centre à la surface de l'eau. À quelle profondeur sous la surface se trouve la palette la plus basse (entre une hauteur négative, m)?", -3, "0 − 3.", FIG.paddle3),
  num("Le moyeu d'une éolienne est à 25 m de haut et chaque pale mesure 10 m. Quel est le point le plus haut atteint par le bout d'une pale (m)?", 35, "25 + 10.", FIG.blade1025),
  mc("Une personne embarque au bas de la roue. Quand est-elle au sommet?", "un demi-tour après l'embarquement", ["un quart de tour après l'embarquement", "un tour complet après l'embarquement", "trois quarts de tour après l'embarquement"], "Du bas au sommet, c'est la moitié du cercle."),
  num("Une roue fait un tour en 75 s. Combien de tours complets fait-elle en 5 min?", 4, "300 ÷ 75."),
  tf("Une roue qui tourne plus vite a une période plus courte.", true, "Moins de temps par tour."),
  num("Une roue a un rayon de 10 m et son moyeu est à 12 m de haut. À quelle hauteur embarque-t-on au bas de la roue (m)?", 2, "12 − 10.", FIG.w1012),
  num("Lis la hauteur du moyeu sur le graphique (m).", 15, "À mi-chemin entre 3 et 27.", waveD((t) => 15 - 12 * cos(6 * t), { xmin: 0, xmax: 120, ymin: 0, ymax: 30 }, { x: 10, y: 3 }, T)),
  num("Lis la durée d'un tour sur le graphique (s).", 40, "D'un minimum à l'autre.", waveD((t) => 10 - 8 * cos(9 * t), { xmin: 0, xmax: 120, ymin: 0, ymax: 20 }, { x: 10, y: 2 }, { ...T, pts: [[0, 2, false], [40, 2, false], [80, 2, false]] })),
];

// sous l'eau lorsque sin θ < −0.25 : un intervalle de 180° − 2·sin⁻¹(0.25) sur 360°
const f6 = (180 - 2 * ((Math.asin(0.25) * 180) / Math.PI)) / 360;
export const M = [
  num("Une personne embarque au bas d'une roue (à 2 m de haut). Le sommet est à 28 m et un tour dure 80 s. À quelle hauteur est la personne en t = 20 s (m)?", 15, "Un quart de tour : à la hauteur du moyeu, (2 + 28)/2.", FIG.w228),
  num("Une personne embarque au bas d'une roue (à 2 m de haut). Le sommet est à 28 m et un tour dure 80 s. À quelle hauteur est la personne en t = 40 s (m)?", 28, "Un demi-tour : le sommet.", FIG.w228),
  num("Une personne embarque au bas d'une roue (à 2 m de haut). Le sommet est à 28 m et un tour dure 80 s. À quel deuxième instant du premier tour la personne est-elle à la hauteur du moyeu (s)?", 60, "Trois quarts de tour.", FIG.w228),
  num("Un pneu a un diamètre de 72 cm. Quelle est la période du graphique de la hauteur d'un caillou en fonction de la distance (cm, 2 décimales)?", rd(72 * Math.PI), "72π.", null, 0.01),
  num("Un pneu a un diamètre de 72 cm. Quelle est la hauteur maximale d'un caillou coincé dans sa semelle (cm)?", 72, "Le haut du pneu."),
  num("Une roue à aubes de rayon 4 m a son centre à 1 m au-dessus de l'eau; la hauteur d'une palette est 1 + 4 sin θ. Quelle fraction de chaque tour la palette passe-t-elle sous l'eau (2 décimales)?", rd(f6), "sin θ < −0.25 entre 194.5° et 345.5°.", FIG.paddle4, 0.01),
  num("Une roue a un rayon de 10 m, un moyeu à 12 m et fait un tour toutes les 60 s; on embarque au bas de la roue. Trouve la hauteur en t = 15 s (m).", 12, "Un quart de tour.", FIG.w1012),
  num("Une roue a un rayon de 10 m, un moyeu à 12 m et fait un tour toutes les 60 s; on embarque au bas de la roue. Trouve la hauteur en t = 45 s (m).", 12, "Trois quarts de tour.", FIG.w1012),
  num("Une roue a un rayon de 10 m, un moyeu à 12 m et fait un tour toutes les 60 s; on embarque au bas de la roue. Trouve la hauteur en t = 30 s (m).", 22, "Un demi-tour : le sommet.", FIG.w1012),
  mc("Un tour de manège dure 3 tours de roue de 40 s chacun. Quel est le domaine de la fonction hauteur?", S`\(0\le t\le120\)`, [S`\(0\le t\le40\)`, S`\(t\ge0\)`, S`\(0\le t\le3\)`], "Seule la durée du tour de manège a du sens."),
  mc("Une roue a un rayon de 9 m et son moyeu est à 10 m de haut. Quelle est l'image de la hauteur d'une personne?", S`\(1\le h\le19\)`, [S`\(0\le h\le19\)`, S`\(1\le h\le10\)`, S`\(-9\le h\le9\)`], "10 ± 9.", FIG.w910),
  tf("Doubler le rayon d'une roue double la période du graphique de la hauteur.", false, "Le rayon change l'amplitude, et non la période."),
  ms("On relève le moyeu d'une roue de 2 m (même rayon, même vitesse). Qu'est-ce qui change? Choisis toutes les bonnes réponses.", ["la hauteur maximale", "la hauteur minimale", "l'axe", "l'amplitude", "la période"], [0, 1, 2], "Tout monte de 2 m; la taille et la vitesse restent les mêmes."),
  num("Une pale de 18 m tourne autour d'un moyeu situé à 24 m de haut, à raison d'un tour toutes les 4 s, en partant du haut. À quelle hauteur est le bout de la pale en t = 1 s (m)?", 24, "Un quart de tour : à la hauteur du moyeu.", FIG.blade1824),
  num("Une pale de 18 m tourne autour d'un moyeu situé à 24 m de haut, à raison d'un tour toutes les 4 s, en partant du haut. À quelle hauteur est le bout de la pale en t = 2 s (m)?", 6, "Un demi-tour : en bas, 24 − 18.", FIG.blade1824),
  num("Un piston fait 1500 cycles par minute. Quelle est sa période en secondes?", 0.04, "60 ÷ 1500.", null, 0.0001),
  num("Une roue à aubes fait 6 tours par minute. Quelle est sa période en secondes?", 10, "60 ÷ 6."),
  num("Le graphique de la hauteur d'une bouée a un max de 2.2 m et un min de 0.2 m. Quelle est son amplitude (m)?", 1, "(2.2 − 0.2)/2."),
  num("Quand la personne atteint-elle le sommet pour la première fois (s)?", 24, "La moitié de la période de 48 s.", waveD((t) => 13 - 11 * cos(7.5 * t), { xmin: 0, xmax: 96, ymin: 0, ymax: 26 }, { x: 8, y: 2 }, T)),
  num("Le graphique montre la hauteur d'un caillou sur un pneu de 40 cm de diamètre en fonction de la distance. Quelle est la période (cm, 2 décimales)?", rd(40 * Math.PI), "Circonférence 40π.", waveD((d) => 20 - 20 * cos((360 * d) / (40 * Math.PI)), { xmin: 0, xmax: 300, ymin: 0, ymax: 45 }, { x: 25, y: 5 }, { xlabel: "d (cm)", ylabel: "h (cm)" }), 0.01),
];

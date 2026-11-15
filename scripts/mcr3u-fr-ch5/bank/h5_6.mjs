import { FIG } from "./figs.mjs";
// 5.6 La trigonométrie en trois dimensions — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { boxD, pyrD, towerD, wireD, sin, cos, tan, asin, acos, atan, lawC, rd } from "./fig.mjs";

const S = String.raw;
const cot = (d) => 1 / tan(d);
const q1 = 150 / Math.sqrt(cot(35) ** 2 + cot(25) ** 2);
const q2AC = (200 * sin(105)) / sin(35), q2 = q2AC * tan(12);
const q3 = lawC(120 / tan(14), 120 / tan(21), 75);
const q7 = 5 / (cot(40) + cot(55));
const q8 = 500 / Math.sqrt(cot(28) ** 2 + cot(31) ** 2);
const q12 = 60 / Math.sqrt(cot(30) ** 2 + cot(40) ** 2);
const q16AC = (250 * sin(71)) / sin(57), q16 = q16AC * tan(17);
const g1 = 120 / tan(14), g2 = 120 / tan(21);

export const TOPIC = "5.6 La trigonométrie en trois dimensions";
export const Q = [
  num("L'observateur P est plein sud d'un monument et en voit le sommet sous un angle de 35°. L'observateur Q est plein est et le voit sous un angle de 25°. P et Q sont distants de 150 m. Trouve la hauteur (au dixième près).", rd(q1, 1), "h²(cot² 35° + cot² 25°) = 150².", null, 0.05),
  num("Triangle au sol : AB = 200 m, ∠CAB = 40°, ∠CBA = 105°. À partir de A, l'angle d'élévation du sommet d'une tour située en C est de 12°. Trouve la hauteur (au dixième près).", rd(q2, 1), "∠C = 35°; AC = 200 sin 105° / sin 35°; h = AC tan 12°.", FIG.tower200, 0.05),
  num("Du haut d'une falaise de 120 m, on voit deux bateaux sous des angles de dépression de 14° et de 21°. Vues de haut, les lignes qui joignent la base de la falaise aux bateaux forment un angle de 75°. Quelle distance sépare les bateaux (au mètre près)?", Math.round(q3), "Distances au sol 120/tan 14° et 120/tan 21°; loi des cosinus avec 75°.",
    wireD([{ pts: [[0, 0, 0], [0, 0, 330]], color: "blue" }, { pts: [[0, 0, 330], [g1, 0, 0]], color: "red" }, { pts: [[0, 0, 330], [g2 * cos(75), g2 * sin(75), 0]], color: "red" }, { pts: [[g1, 0, 0], [0, 0, 0], [g2 * cos(75), g2 * sin(75), 0], [g1, 0, 0]], color: "green" }], [[0, 0, 330, "sommet"], [g1, 0, 0, "bateau 1"], [g2 * cos(75), g2 * sin(75), 0, "bateau 2"]]), 0.5),
  num("Une pyramide à base carrée a une base de 10 de côté et des arêtes latérales de 13. Trouve sa hauteur (au centième près).", rd(Math.sqrt(119)), "Demi-diagonale 5√2 : √(169 − 50).", FIG.pyr1013, 0.01),
  num("Une pyramide à base carrée a une base de 10 de côté et une hauteur de 12. Trouve l'angle entre une face triangulaire et la base (au dixième près).", rd(atan(12 / 5), 1), "Utilise le segment qui joint le centre au milieu d'une arête (longueur 5).", FIG.pyr1012, 0.05),
  num("Un prisme mesure 10 sur 6 sur 4. Trouve l'angle entre une diagonale de l'espace et la face de 10 sur 4 (au dixième près).", rd(asin(6 / Math.sqrt(152)), 1), "La composante perpendiculaire à cette face vaut 6; sin θ = 6 / √152.", FIG.box1064, 0.05),
  num("Un avion est directement au-dessus d'un point situé entre les stations A et B, distantes de 5 km. Ses angles d'élévation à partir de A et de B sont de 40° et de 55°. Trouve son altitude (au centième près, en km).", rd(q7, 2), "h cot 40° + h cot 55° = 5.", FIG.planeAB, 0.01),
  num("Une montgolfière est au-dessus du point G. À partir de A, son angle d'élévation est de 28°; à partir de B, il est de 31°; AB = 500 m et ∠AGB = 90°. Trouve son altitude (au dixième près).", rd(q8, 1), "h²(cot² 28° + cot² 31°) = 500².", FIG.balloonG, 0.05),
  num("Un tétraèdre régulier a des arêtes de 6. Trouve sa hauteur (au centième près).", rd(6 * Math.sqrt(2 / 3)), "Le centre de la base est à 6/√3 de chaque sommet : √(36 − 12).", null, 0.01),
  num("Trouve l'angle entre deux diagonales de l'espace d'un cube (au dixième près).", rd(acos(1 / 3), 1), "Avec une arête de 2, les diagonales se coupent au centre : loi des cosinus avec les côtés √3, √3, 2.", null, 0.05),
  tf("L'angle entre une diagonale de l'espace d'un cube et sa base est inférieur à 45°.", true, "tan θ = 1/√2, donc θ ≈ 35.3°."),
  num("Une tour se dresse en C. À partir de A, l'angle d'élévation de son sommet est de 30°; à partir de B, il est de 40°. AB = 60 m et ∠ACB = 90°. Trouve la hauteur (au centième près).", rd(q12), "h²(cot² 30° + cot² 40°) = 60².", FIG.towerRight, 0.01),
  num("Une route monte en ligne droite sur un versant incliné à 12°, mais dans une direction qui forme un angle de 30° avec la ligne de plus grande pente. Trouve l'angle de montée de la route (au dixième près).", rd(atan(tan(12) * cos(30)), 1), "Pour chaque unité de route à l'horizontale, la hauteur gagnée est tan 12° × cos 30°.", null, 0.05),
  num("Un aquarium mesure 60 cm sur 30 cm sur 40 cm. Quelle est la plus longue tige droite qui peut y entrer (au centième près)?", rd(Math.sqrt(6100)), "La diagonale de l'espace.", null, 0.01),
  mc("Tu connais AB et les deux angles au sol en A et en B, et l'angle d'élévation du sommet d'une tour est mesuré à partir de B. Quel côté la loi des sinus doit-elle permettre de trouver?", "BC", ["AC", "AB", "la hauteur directement"], "L'angle d'élévation est mesuré à partir de B; BC est donc le côté de liaison."),
  num("Trouve la hauteur de la tour (au dixième près). AB = 250 m, ∠CAB = 52°, ∠CBA = 71°, et à partir de A, l'angle d'élévation de T est de 17°.", rd(q16, 1), "∠C = 57°; AC = 250 sin 71° / sin 57°; h = AC tan 17°.", towerD(250, 52, q16AC, q16), 0.05),
  num("Trouve l'angle entre une arête latérale et la base de la pyramide illustrée (base de 12 de côté, hauteur 9), au dixième près.", rd(atan(9 / (6 * Math.SQRT2)), 1), "Demi-diagonale 6√2.", pyrD(12, 9), 0.05),
  num("Le prisme illustré mesure 12 sur 4 sur 3. Trouve l'angle entre AG et la base (au dixième près).", rd(atan(3 / Math.sqrt(160)), 1), "Diagonale de la base √160.", boxD(12, 4, 3, [{ pts: [[0, 0, 0], [12, 4, 0]], color: "amber" }, { pts: [[0, 0, 0], [12, 4, 3]], color: "red" }], [[0, 0, 0, "A"], [12, 4, 3, "G"]]), 0.05),
  num("Du haut d'une tour de 90 m, on voit une voiture plein est sous un angle de dépression de 32° et une autre plein nord sous un angle de 24°. Quelle distance sépare les voitures (au mètre près)?", Math.round(Math.hypot(90 / tan(32), 90 / tan(24))), "L'est et le nord sont perpendiculaires.",
    wireD([{ pts: [[0, 0, 0], [0, 0, 160]], color: "blue" }, { pts: [[0, 0, 160], [90 / tan(32), 0, 0]], color: "red" }, { pts: [[0, 0, 160], [0, 90 / tan(24), 0]], color: "red" }, { pts: [[90 / tan(32), 0, 0], [0, 0, 0], [0, 90 / tan(24), 0], [90 / tan(32), 0, 0]], color: "green" }], [[0, 0, 160, "sommet"], [90 / tan(32), 0, 0, "voiture est"], [0, 90 / tan(24), 0, "voiture nord"]]), 0.5),
  num(S`Un cube a des arêtes de longueur $s$. L'angle entre une diagonale de l'espace et une diagonale de face qu'elle rencontre à un sommet est θ. Trouve θ (au dixième près).`, rd(atan(1 / Math.SQRT2), 1), "Triangle rectangle : diagonale de face s√2, arête s.", null, 0.05),
];

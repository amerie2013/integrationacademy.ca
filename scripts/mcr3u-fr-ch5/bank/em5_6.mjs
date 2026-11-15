import { FIG } from "./figs.mjs";
// 5.6 La trigonométrie en trois dimensions — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { boxD, pyrD, towerD, sin, tan, atan, lawC, rd } from "./fig.mjs";

const S = String.raw;
const m1AC = (100 * sin(70)) / sin(60), m1h = m1AC * tan(30);
const m3h = 30 * tan(50), m3B = m3h / tan(40);
const m19BC = (120 * sin(60)) / sin(55), m19h = m19BC * tan(25), m19AC = (120 * sin(65)) / sin(55);

export const E = [
  num("Un cube a des arêtes de 4. Trouve une diagonale de face, au centième près.", rd(4 * Math.SQRT2), "4√2.", null, 0.01),
  num("Un cube a des arêtes de 4. Trouve une diagonale de l'espace, au centième près.", rd(4 * Math.sqrt(3)), "4√3.", null, 0.01),
  num("Un prisme mesure 3 sur 4 sur 12. Trouve sa diagonale de l'espace.", 13, "√(9 + 16 + 144).", FIG.box3412),
  num("Un prisme mesure 2 sur 3 sur 6. Trouve sa diagonale de l'espace.", 7, "√(4 + 9 + 36).", FIG.box236),
  num("À 25 m de distance sur un terrain plat, l'angle d'élévation du sommet d'un arbre est de 40°. Trouve la hauteur (au centième près).", rd(25 * tan(40)), "25 tan 40°.", FIG.tree25, 0.01),
  num("On voit le sommet d'un édifice de 30 m sous un angle d'élévation de 35°. À quelle distance se trouve l'observateur (au centième près)?", rd(30 / tan(35)), "30 / tan 35°.", FIG.bldg30, 0.01),
  mc("Dans un problème portant sur une tour verticale, où se trouve l'angle droit?", "à la base de la tour", ["à l'observateur", "au sommet de la tour", "il n'y en a pas"], "La tour est perpendiculaire au sol."),
  mc("Dans quel type de plan se trouve un angle d'élévation?", "un plan vertical", ["un plan horizontal", "le triangle au sol", "n'importe quel plan"], "Il s'élève à partir de l'horizontale."),
  tf("Dans un prisme, une diagonale du plancher et une arête verticale qui la rencontre forment un angle droit.", true, "Une arête verticale est perpendiculaire à toute droite du plancher."),
  tf("Dans un problème de tour, le triangle au sol contient toujours un angle droit.", false, "Il est souvent quelconque — utilise la loi des sinus ou la loi des cosinus."),
  num("Deux angles au sol d'un triangle d'arpentage mesurent 50° et 60°. Trouve le troisième.", 70, "180° − 110°."),
  num("Un poteau de 12 m est à 20 m. Trouve l'angle d'élévation de son sommet (au dixième près).", rd(atan(12 / 20), 1), "tan⁻¹(12/20).", FIG.pole12, 0.05),
  num("Un prisme a une base de 6 sur 8. Trouve la diagonale de la base.", 10, "√(36 + 64).", FIG.base68),
  num("Une pièce mesure 5 m sur 12 m, et son plafond est à 4 m. Trouve sa diagonale de l'espace (au centième près).", rd(Math.sqrt(185)), "√(25 + 144 + 16).", null, 0.01),
  num("Du haut d'une falaise de 40 m, on voit une bouée sous un angle de dépression de 20°. À quelle distance du pied de la falaise se trouve-t-elle (au centième près)?", rd(40 / tan(20)), "40 / tan 20°.", FIG.cliff40, 0.01),
  num("Une pyramide à base carrée a une base de 6 de côté et une hauteur de 4. Trouve l'apothème d'une face (du sommet jusqu'au milieu d'une arête de la base).", 5, "√(3² + 4²).", FIG.pyr64),
  mc("Quelle formule donne la diagonale de l'espace d'un prisme de dimensions l × w × h?", S`$\sqrt{l^2+w^2+h^2}$`, [S`$l+w+h$`, S`$\sqrt{l^2+w^2}+h$`, S`$\sqrt{lwh}$`], "Pythagore deux fois."),
  num("Un prisme mesure 3 sur 4 sur 12. Trouve l'angle entre sa diagonale de l'espace et la base de 3 sur 4 (au dixième près).", rd(atan(12 / 5), 1), "Hauteur 12 sur la diagonale de la base 5.", FIG.box3412, 0.05),
  num("Trouve la diagonale de l'espace AG du prisme illustré (au centième près).", rd(Math.sqrt(61)), "√(36 + 16 + 9).", boxD(6, 4, 3, [{ pts: [[0, 0, 0], [6, 4, 3]], color: "red" }], [[0, 0, 0, "A"], [6, 4, 3, "G"], [3, 0, 0, "6"], [6, 2, 0, "4"], [0, 0, 1.5, "3"]]), 0.01),
  num("La pyramide illustrée a une base carrée de 8 de côté et une hauteur de 6. Trouve une arête latérale (au centième près).", rd(Math.sqrt(68)), "Demi-diagonale 4√2; √(32 + 36).", pyrD(8, 6), 0.01),
];

export const M = [
  num("Triangle au sol : AB = 100 m, ∠CAB = 50°, ∠CBA = 70°. À partir de A, l'angle d'élévation du sommet d'une tour située en C est de 30°. Trouve sa hauteur (au dixième près).", rd(m1h, 1), "AC = 100 sin 70° / sin 60°; h = AC tan 30°.", FIG.tower100, 0.05),
  num("Triangle au sol : AB = 90 m, ∠A = 45°, ∠B = 80°. Trouve AC (au centième près).", rd((90 * sin(80)) / sin(55)), "∠C = 55°; AC fait face à ∠B.", FIG.ground90, 0.01),
  num("L'observateur A est à 30 m plein sud d'un mât et en voit le sommet sous un angle de 50°. L'observateur B est plein est du mât et en voit le sommet sous un angle de 40°. Quelle distance sépare A et B (au dixième près)?", rd(Math.hypot(30, m3B), 1), "Hauteur 30 tan 50°; BC = hauteur / tan 40°; A et B sont à angle droit par rapport au mât.", null, 0.05),
  num("Un prisme mesure 6 sur 6 sur 10 (10 est la hauteur). Trouve l'angle entre sa diagonale de l'espace et la base (au dixième près).", rd(atan(10 / (6 * Math.SQRT2)), 1), "Diagonale de la base 6√2.", FIG.box6610, 0.05),
  num("Une pyramide à base carrée a une base de 12 de côté et une hauteur de 8. Trouve une arête latérale (au centième près).", rd(Math.sqrt(136)), "Demi-diagonale 6√2; √(72 + 64).", FIG.pyr128, 0.01),
  num("Pour la pyramide dont la base mesure 12 de côté et la hauteur 8, trouve l'angle entre une arête latérale et la base (au dixième près).", rd(atan(8 / (6 * Math.SQRT2)), 1), "tan θ = 8 / (6√2).", FIG.pyr128, 0.05),
  num("Du haut d'une falaise de 60 m, on voit deux bateaux sous des angles de dépression de 25° et de 18°. Vues de haut, les lignes qui joignent la base de la falaise aux bateaux forment un angle de 40°. Quelle distance sépare les bateaux (au mètre près)?", Math.round(lawC(60 / tan(25), 60 / tan(18), 40)), "Distances au sol 60/tan 25° et 60/tan 18°, puis la loi des cosinus.", null, 0.5),
  num("Une montgolfière est à 200 m au-dessus du point G. À partir de A, on la voit sous un angle d'élévation de 30°. Trouve AG (au centième près).", rd(200 / tan(30)), "200 / tan 30°.", FIG.balloon200, 0.01),
  num("Un mât est installé sur un édifice de 25 m. À 30 m de distance, l'angle d'élévation du sommet du mât est de 45°. Quelle est la longueur du mât?", 5, "30 tan 45° − 25.", FIG.flagpole),
  num("Une route monte à 6°. Quel gain d'altitude obtient-on sur 1.8 km de route (au mètre près)?", Math.round(1800 * sin(6)), "1800 sin 6°.", null, 0.5),
  ms("Quels ensembles forment des triangles rectangles à l'intérieur d'un prisme? Choisis toutes les bonnes réponses.", ["deux arêtes issues d'un même sommet et la diagonale de face qui joint leurs extrémités", "une diagonale de la base, l'arête verticale à son extrémité et la diagonale de l'espace", "une diagonale de l'espace et deux arêtes issues d'un même sommet"], [0, 1], "Le troisième ensemble n'est même pas un triangle."),
  tf("Dans un problème 3-D en plusieurs étapes, arrondir le côté de liaison avant l'étape suivante améliore la précision.", false, "Garde les valeurs complètes de la calculatrice jusqu'à la fin."),
  num("Une pièce mesure 4 m sur 3 m, et son plafond est à 2.5 m. Trouve l'angle entre une diagonale de l'espace et le plancher (au dixième près).", rd(atan(2.5 / 5), 1), "Diagonale du plancher 5.", null, 0.05),
  num("À partir de B, la base d'une tour est à 150 m et l'angle d'élévation de son sommet est de 18°. Trouve la hauteur (au centième près).", rd(150 * tan(18)), "150 tan 18°.", FIG.tower150, 0.01),
  num("On voit une cheminée de 30 m d'un point situé à 40 m plein ouest de sa base. Trouve l'angle d'élévation (au dixième près).", rd(atan(30 / 40), 1), "tan⁻¹ 0.75.", FIG.chimney, 0.05),
  num("Un drone est immobile au-dessus de D. Les observateurs A et B sont distants de 400 m, avec ∠DAB = 55° et ∠DBA = 70°. À partir de B, l'angle d'élévation du drone est de 20°. Trouve son altitude (au centième près).", rd(400 * tan(20)), "∠D = 55°, donc BD = AB = 400 m; h = 400 tan 20°.", FIG.drone, 0.01),
  num("Une tente a la forme d'une pyramide à base carrée de 4 m de côté, dont le sommet est à 3 m au-dessus du centre. Trouve l'apothème d'une face (au centième près).", rd(Math.sqrt(13)), "√(2² + 3²).", FIG.pyr43, 0.01),
  mc("Tu connais AB, ∠A et ∠B au sol, ainsi que l'angle d'élévation du sommet d'une tour mesuré à partir de A. Quelle est la première étape?", "utiliser la loi des sinus dans le triangle au sol pour trouver AC", ["utiliser la tangente avec AB", "utiliser la loi des cosinus pour trouver AB", "trouver la hauteur directement à partir de AB"], "AC relie les deux triangles."),
  num("Trouve la hauteur CT (au dixième près). AB = 120 m, ∠CAB = 60°, ∠CBA = 65°, et à partir de B, l'angle d'élévation de T est de 25°.", rd(m19h, 1), "BC = 120 sin 60° / sin 55°; h = BC tan 25°.", towerD(120, 60, m19AC, m19h), 0.05),
  num("Le prisme illustré mesure 9 sur 12 sur 7. Trouve l'angle entre AG et la base (au dixième près).", rd(atan(7 / 15), 1), "Diagonale de la base 15.", boxD(9, 12, 7, [{ pts: [[0, 0, 0], [9, 12, 0]], color: "amber" }, { pts: [[0, 0, 0], [9, 12, 7]], color: "red" }], [[0, 0, 0, "A"], [9, 12, 7, "G"]]), 0.05),
];

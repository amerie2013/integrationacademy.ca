import { FIG } from "../../mth1w-bank-figures/figs.mjs";
// 5.4 Le théorème de Pythagore — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, rightTri, planeDoc } from "./fig.mjs";

export const E = [
  num(`Trouve l'hypoténuse d'un triangle rectangle de cathètes 6 et 8.`, 10, "√(36 + 64)."),
  num(`Trouve l'hypoténuse d'un triangle rectangle de cathètes 5 et 12.`, 13, "√(25 + 144)."),
  num(`Un triangle rectangle a une hypoténuse de 10 et une cathète de 6. Trouve l'autre cathète.`, 8, "√(100 − 36)."),
  num(`Un triangle rectangle a une hypoténuse de 17 et une cathète de 8. Trouve l'autre cathète.`, 15, "√(289 − 64)."),
  mc(`Dans un triangle rectangle, l'hypoténuse est…`, "le côté opposé à l'angle droit", ["le plus court côté", "une des cathètes", "le côté adjacent à l'angle droit"], "C'est aussi le plus long côté."),
  tf(`Le théorème de Pythagore fonctionne pour tous les triangles.`, false, "Seulement pour les triangles rectangles."),
  tf(`Un triangle de côtés 3, 4 et 5 est rectangle.`, true, "9 + 16 = 25."),
  tf(`Un triangle de côtés 4, 5 et 6 est rectangle.`, false, "16 + 25 = 41 ≠ 36."),
  num(`Trouve l'hypoténuse d'un triangle rectangle de cathètes 1 et 1, à 2 décimales près.`, 1.41, "√2.", null, 0.006),
  num(`Trouve x dans la figure.`, 25, "√(7² + 24²) = √625.", figDoc({ w: 260, items: rightTri(24, 7, { la: "24", lb: "7", lc: "x" }) })),
  num(`Combien vaut 9² + 12² ?`, 225, "81 + 144."),
  num(`Un carré a des côtés de 5 cm. Trouve sa diagonale à 1 décimale près.`, 7.1, "√50.", null, 0.06),
  num(`Un rectangle mesure 9 sur 12. Trouve sa diagonale.`, 15, "√(81 + 144)."),
  mc(`Pour trouver une cathète, tu dois…`, "soustraire le carré de la cathète connue du carré de l'hypoténuse", ["additionner les carrés des deux côtés connus", "additionner les deux côtés connus", "diviser l'hypoténuse par deux"], "a² = c² − b²."),
  num(`Trouve la distance entre (0, 0) et (3, 4).`, 5, "√(9 + 16)."),
  num(`Trouve la distance entre (1, 2) et (7, 10).`, 10, "Course 6, montée 8."),
  ms(`Quels ensembles sont des triplets de Pythagore ? Sélectionne toutes les bonnes réponses.`, ["6, 8, 10", "5, 12, 13", "2, 3, 4", "9, 40, 41"], [0, 1, 3], "Vérifie a² + b² = c²."),
  num(`Une échelle de 5 m est appuyée contre un mur, son pied étant à 3 m du mur. À quelle hauteur atteint-elle le mur ?`, 4, "√(25 − 9).", FIG.ladder53),
  num(`Trouve l'hypoténuse d'un triangle rectangle de cathètes 20 et 21.`, 29, "√(400 + 441) = √841."),
  num(`Les cathètes d'un triangle rectangle mesurent 0.3 et 0.4. Trouve l'hypoténuse.`, 0.5, "√(0.09 + 0.16)."),
];

export const M = [
  num(`Un écran de télé mesure 120 cm de largeur et 67.5 cm de hauteur. Trouve sa diagonale au cm près.`, 138, "√(14 400 + 4556.25) ≈ 137.7.", null, 0.6),
  num(`Une rampe de 13 m s'élève de 5 m. Quelle distance horizontale couvre-t-elle ?`, 12, "√(169 − 25).", FIG.ramp),
  num(`Un triangle isocèle a des côtés égaux de 10 et une base de 12. Trouve sa hauteur.`, 8, "La moitié de la base est 6 : √(100 − 36).", FIG.isos1012),
  num(`Trouve l'aire du triangle isocèle dont les côtés égaux mesurent 10 et la base 12.`, 48, "½(12)(8).", FIG.isos1012),
  num(`Trouve la distance entre (−2, 3) et (4, −5).`, 10, "Course 6, montée −8."),
  num(`Un triangle équilatéral a des côtés de 10. Trouve sa hauteur à 1 décimale près.`, 8.7, "√(100 − 25) = √75.", null, 0.06),
  num(`Un rectangle a une diagonale de 25 et une largeur de 7. Trouve sa longueur.`, 24, "√(625 − 49)."),
  num(`Un rectangle a une diagonale de 25 et une largeur de 7. Trouve son périmètre.`, 62, "2(24 + 7)."),
  tf(`Les côtés 9, 10 et 14 forment un triangle obtusangle.`, true, "81 + 100 = 181 < 196."),
  tf(`Les côtés 7, 8 et 10 forment un triangle acutangle.`, true, "49 + 64 = 113 > 100."),
  mc(`Un triangle a des côtés de 10, 24 et 26. Il est…`, "rectangle", ["acutangle", "obtusangle", "impossible (pas un triangle)"], "100 + 576 = 676 = 26²."),
  num(`La ficelle d'un cerf-volant mesure 50 m et le cerf-volant est à 30 m de la personne à l'horizontale. À quelle hauteur est le cerf-volant (ne tiens pas compte de la taille de la personne) ?`, 40, "√(2500 − 900)."),
  num(`Trouve la longueur du segment dans le plan cartésien.`, 13, "Course 12, montée 5.", planeDoc({ view: { xmin: -1, xmax: 14, ymin: -1, ymax: 7 }, segs: [{ pts: [[0, 0], [12, 5]], color: "violet" }], points: [{ x: 0, y: 0 }, { x: 12, y: 5 }], step: { x: 1, y: 1 } })),
  num(`Un carré a une diagonale de 10 cm. Trouve son côté à 2 décimales près.`, 7.07, "2s² = 100 → s = √50.", null, 0.006),
  num(`Un losange de baseball est un carré de 27.4 m de côté. Quelle est la distance entre le marbre et le deuxième but (1 décimale) ?`, 38.7, "27.4√2 ≈ 38.75.", null, 0.06),
  num(`Une boîte mesure 4 × 3 × 12. Trouve la longueur de sa diagonale intérieure.`, 13, "√(16 + 9 + 144)."),
  num(`Trouve le périmètre d'un triangle rectangle de cathètes 15 et 20.`, 60, "Hypoténuse 25; 15 + 20 + 25."),
  num(`Un bateau navigue 8 km vers le nord, puis 6 km vers l'est. À quelle distance de son point de départ se trouve-t-il ?`, 10, "√(64 + 36)."),
  num(`Un triangle rectangle a une hypoténuse de 2.5 m et une cathète de 1.5 m. Trouve son aire (m²).`, 1.5, "Autre cathète 2; ½ × 1.5 × 2."),
  ms(`Quels points sont exactement à 5 unités de l'origine ? Sélectionne toutes les bonnes réponses.`, ["(3, 4)", "(−4, 3)", "(5, 5)", "(0, −5)"], [0, 1, 3], "√(x² + y²) = 5."),
];

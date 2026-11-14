import { FIG } from "../../mth1w-bank-figures/figs.mjs";
// 5.4 Le théorème de Pythagore — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, polygon, prism } from "./fig.mjs";

export const TOPIC = "5.4 Le théorème de Pythagore";
export const Q = [
  num(`Dans la figure, ∠ABC = 90° et ∠ACD = 90°, AB = 8, BC = 6 et CD = 24. Trouve AD.`, 26, "AC = √(64 + 36) = 10; AD = √(100 + 576) = 26.", figDoc({ w: 300, items: [{ poly: [[0, 8], [0, 0], [6, 0]], fill: "blue", color: "blue" }, { poly: [[0, 8], [6, 0], [25.2, 14.4]], fill: "green", color: "green" }, { right: [[0, 8], [0, 0], [6, 0]] }, { right: [[0, 8], [6, 0], [25.2, 14.4]] }, { text: "A", at: [-1, 8.4], bold: true }, { text: "B", at: [-1, -0.8], bold: true }, { text: "C", at: [6.6, -1], bold: true }, { text: "D", at: [26.2, 15], bold: true }, { text: "8", at: [-1, 4], bold: true, color: "blue" }, { text: "6", at: [3, -1.1], bold: true, color: "blue" }, { text: "24", at: [17, 5.6], bold: true, color: "green" }] })),
  num(`Une échelle de 7.5 m atteint 7.2 m de hauteur sur un mur. Si son pied glisse de 0.6 m plus loin du mur, de combien le haut de l'échelle descend-il le long du mur (2 décimales) ?`, 0.2, "Pied d'abord à √(56.25 − 51.84) = 2.1 m; puis à 2.7 m : haut à √(56.25 − 7.29) ≈ 6.997 m; 7.2 − 6.997 ≈ 0.20.", FIG.ladderSlide, 0.006),
  num(`La longueur d'un rectangle dépasse sa largeur de 7 et sa diagonale mesure 13. Trouve la largeur.`, 5, "w² + (w + 7)² = 169 → w = 5 (5, 12, 13)."),
  num(`Les côtés d'un triangle rectangle mesurent x, x + 1 et 29 (hypoténuse). Trouve x.`, 20, "x² + (x + 1)² = 841 → 20, 21, 29."),
  num(`Trouve le périmètre du triangle de sommets (−3, 1), (5, 7) et (5, 1).`, 24, "Cathètes 8 et 6, hypoténuse 10."),
  num(`Une boîte de conserve cylindrique mesure 12 cm de haut et a un rayon de 4.5 cm. Trouve la plus longue paille qui entre à l'intérieur, en diagonale (cm).`, 15, "Diamètre 9 : √(144 + 81)."),
  num(`Une pièce mesure 5 m × 4 m × 3 m. Trouve sa diagonale intérieure à 2 décimales près.`, 7.07, "√(25 + 16 + 9) = √50.", figDoc({ w: 260, items: [...prism(5, 4, 3, { ll: "5 m", lw: "4 m", lh: "3 m" }), { seg: [[0, 0], [5 + 4 * 0.45, 3 + 4 * 0.32]], color: "red", width: 2.2 }] }), 0.006),
  num(`Deux avions quittent un aéroport en même temps, l'un vers le nord à 480 km/h et l'autre vers l'est à 360 km/h. À quelle distance l'un de l'autre sont-ils après 2 heures (km) ?`, 1200, "960 et 720 km : √(921 600 + 518 400)."),
  num(`Un triangle équilatéral a une hauteur de 9√3 ≈ 15.59. Trouve la longueur de son côté.`, 18, "Hauteur = (√3/2)s → s = 18."),
  num(`Un carré est inscrit dans un cercle de rayon 5. Trouve l'aire du carré.`, 50, "Diagonale 10 → côté² = 50.", FIG.sqR5),
  tf(`Si on double les deux cathètes d'un triangle rectangle, l'hypoténuse double aussi.`, true, "√((2a)² + (2b)²) = 2√(a² + b²)."),
  ms(`Pour un triangle de côtés 6, 8 et c (c étant le plus long côté et un nombre entier), quelles valeurs de c le rendent obtusangle ? Sélectionne toutes les bonnes réponses.`, ["9", "10", "11", "13"], [2, 3], "Obtusangle quand c² > 100 et c < 14 : 11 et 13."),
  num(`Un trapèze a des côtés parallèles de 14 et 26 et des côtés inclinés de 10 (isocèle). Trouve sa hauteur.`, 8, "Débordement de 6 de chaque côté : √(100 − 36).", figDoc({ w: 280, items: polygon([[0, 0], [26, 0], [20, 8], [6, 8]], { sides: ["26", "10", "14", "10"], fill: "amber", color: "amber" }) })),
  num(`Un losange a des diagonales de 16 cm et 30 cm. Trouve la longueur de son côté.`, 17, "Les diagonales se coupent en leur milieu à angle droit : √(8² + 15²).", FIG.rhomb1630),
  num(`Un point est à 9 m du pied d'un poteau de 12 m. Un câble va du sommet du poteau jusqu'au point, et un autre du milieu du poteau jusqu'au point. Trouve la différence entre leurs longueurs (m).`, 4.18, "15 et √(36 + 81) ≈ 10.82; différence ≈ 4.18.", FIG.pole, 0.01),
  num(`Un navire navigue 15 km vers l'est, 12 km vers le nord, puis 5 km vers l'ouest. À quelle distance de son point de départ se trouve-t-il (km) ?`, 15.62, "10 vers l'est, 12 vers le nord : √244 ≈ 15.62.", null, 0.006),
  mc(`Quel point est le plus proche de (2, −1) ?`, "(5, 3)", ["(−3, 2)", "(8, −1)", "(2, 6)"], "Distances 5, √34, 6, 7."),
  num(`Un cône a un apothème de 26 cm et un rayon de 10 cm. Trouve sa hauteur.`, 24, "√(676 − 100)."),
  num(`La diagonale intérieure d'un cube mesure 12√3 ≈ 20.78 cm. Trouve la longueur de l'arête.`, 12, "Diagonale intérieure = s√3."),
  num(`Avec (m² − n², 2mn, m² + n²) et m = 5, n = 2, quelle est l'hypoténuse du triplet ?`, 29, "25 + 4 (triplet 21, 20, 29)."),
];

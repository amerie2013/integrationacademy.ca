import { FIG } from "../../mth1w-bank-figures/figs.mjs";
// 5.6 Modifier les dimensions : l'aire — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, polygon, rect } from "./fig.mjs";

export const E = [
  num(`Trouve l'aire d'un rectangle de 9 m sur 6 m.`, 54, "9 × 6."),
  num(`Trouve l'aire d'un triangle de base 10 cm et de hauteur 7 cm.`, 35, "½ × 10 × 7."),
  num(`Trouve l'aire d'un parallélogramme de base 8 et de hauteur 5.`, 40, "bh.", FIG.para85),
  num(`Trouve l'aire d'un cercle de 5 cm de rayon, à 1 décimale près.`, 78.5, "25π.", null, 0.06),
  num(`Trouve l'aire d'un trapèze dont les côtés parallèles mesurent 6 et 10 et la hauteur 4.`, 32, "½(16)(4).", FIG.trap),
  num(`On double chaque longueur d'une figure. Par quel facteur l'aire est-elle multipliée ?`, 4, "2²."),
  num(`On triple chaque longueur d'une figure. Par quel facteur l'aire est-elle multipliée ?`, 9, "3²."),
  num(`Une figure a une aire de 10 cm². On l'agrandit selon k = 2. Trouve la nouvelle aire.`, 40, "10 × 4."),
  tf(`Doubler seulement la longueur d'un rectangle double son aire.`, true, "Aire = l × w : un seul facteur double."),
  tf(`Doubler chaque côté d'un carré double son aire.`, false, "Cela la quadruple."),
  mc(`Pour un périmètre fixe, quel rectangle a la plus grande aire ?`, "un carré", ["un rectangle long et mince", "ils ont tous la même aire", "un rectangle dont la longueur est le triple de la largeur"], "Le rectangle le plus compact."),
  num(`Un rectangle a un périmètre de 20 m. Quelle est la plus grande aire possible ?`, 25, "5 × 5."),
  num(`Un carré a une aire de 49 cm². Trouve son côté.`, 7, "√49."),
  num(`Trouve l'aire d'un cercle de 8 cm de diamètre, à 1 décimale près.`, 50.3, "r = 4 : 16π.", null, 0.06),
  num(`Trouve l'aire de la figure composée : deux rectangles de 5 × 3 et de 2 × 3 placés côte à côte.`, 21, "15 + 6.", figDoc({ w: 220, items: [...rect(5, 3, { lw: "5", lh: "3" }), ...rect(2, 3, { lw: "2", lh: "", fill: "green", at: [5, 0] })] })),
  num(`Un carré de côté 4 est réduit selon k = 0.5. Trouve la nouvelle aire.`, 4, "Côté 2 → aire 4."),
  mc(`L'aire se mesure en…`, "unités carrées", ["unités linéaires", "unités cubes", "degrés"], "p. ex. cm², m²."),
  num(`L'aire d'une image passe de 5 cm² à 45 cm² après un agrandissement. Trouve le facteur d'aire.`, 9, "45 ÷ 5."),
  num(`Trouve l'aire d'un triangle rectangle de cathètes 6 et 9.`, 27, "½ × 6 × 9."),
  num(`Trouve l'aire d'un demi-cercle de rayon 2, à 2 décimales près.`, 6.28, "½ × 4π = 2π.", null, 0.006),
];

export const M = [
  num(`Une pelouse de 15 m sur 12 m porte une remise de 3 m sur 4 m. Trouve l'aire du gazon.`, 168, "180 − 12."),
  num(`Un tapis circulaire de 1.5 m de rayon est posé dans une pièce de 5 m sur 4 m. Trouve l'aire du plancher non couverte (2 décimales).`, 12.93, "20 − 2.25π ≈ 12.93.", null, 0.006),
  num(`Trouve l'aire du trapèze.`, 66, "½(8 + 14)(6).", figDoc({ w: 260, items: [...polygon([[0, 0], [14, 0], [11, 6], [3, 6]], { sides: ["14", "", "8", ""], fill: "amber", color: "amber" }), { seg: [[3, 0], [3, 6]], color: "red", dash: true }, { text: "6", at: [3.6, 3], color: "red", bold: true }] })),
  num(`Un triangle a une aire de 12 cm². On l'agrandit selon k = 2.5. Trouve la nouvelle aire.`, 75, "12 × 6.25."),
  num(`L'aire d'une figure passe de 8 à 72 après un agrandissement. Trouve le facteur d'échelle k.`, 3, "√(72 ÷ 8)."),
  num(`On augmente de 50 % la longueur d'un rectangle de 10 × 6. Trouve la nouvelle aire.`, 90, "15 × 6."),
  num(`Avec 44 m de clôture, quelle est la plus grande aire rectangulaire (m²) ?`, 121, "11 × 11."),
  num(`Avec 44 m de clôture et un mur comme un des côtés, quelle est la plus grande aire (m²) ?`, 242, "w = 11, l = 22."),
  num(`Une pizza de 30 cm et une pizza de 40 cm : combien de fois plus d'aire la plus grande a-t-elle (2 décimales) ?`, 1.78, "(40/30)² = 16/9.", null, 0.006),
  tf(`Si on divise par deux le rayon d'un cercle, son aire est divisée par deux.`, false, "Elle devient le quart."),
  ms(`Quels rectangles ont une aire de 36 et un périmètre inférieur à 30 ? Sélectionne toutes les bonnes réponses.`, ["6 × 6", "4 × 9", "3 × 12", "2 × 18"], [0, 1], "Périmètres 24, 26, 30, 40."),
  num(`Une allée carrée de 1 m de largeur entoure un jardin carré de 10 m sur 10 m. Trouve l'aire de l'allée.`, 44, "12² − 10².", FIG.sqPath),
  num(`Un parallélogramme a une base de 9, un côté incliné de 6 et une hauteur de 4. Trouve son aire.`, 36, "bh = 9 × 4; le côté incliné n'est pas utilisé.", FIG.para964),
  num(`Une photo de 4 × 6 est agrandie à 10 × 15. Par quel facteur son aire augmente-t-elle ?`, 6.25, "k = 2.5 → k² = 6.25."),
  num(`Un triangle a une aire de 40 cm² et une base de 16 cm. Trouve sa hauteur.`, 5, "½ × 16 × h = 40."),
  num(`Un cercle a une aire de 113.1 cm². Trouve son rayon (au nombre entier près).`, 6, "r² = 113.1/π ≈ 36."),
  mc(`Quel changement augmente le plus l'aire d'un rectangle de 6 × 4 ?`, "ajouter 2 à la largeur", ["ajouter 2 à la longueur", "les deux donnent la même augmentation", "aucun ne change l'aire"], "6 × 6 = 36 comparé à 8 × 4 = 32."),
  num(`Un rectangle a une aire de 60 m². On double sa longueur et on triple sa largeur. Trouve la nouvelle aire.`, 360, "60 × 6."),
  num(`Une maquette d'un parc est construite à l'échelle 1 : 100. L'aire de la maquette est de 300 cm². Trouve l'aire réelle en m².`, 300, "300 × 10 000 cm² = 3 000 000 cm² = 300 m²."),
  num(`Trouve l'aire d'un triangle rectangle d'hypoténuse 13 dont une cathète mesure 5.`, 30, "Autre cathète 12; ½ × 5 × 12."),
];

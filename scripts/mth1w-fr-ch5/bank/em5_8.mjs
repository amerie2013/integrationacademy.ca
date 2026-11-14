import { FIG } from "../../mth1w-bank-figures/figs.mjs";
// 5.8 L'aire totale — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, prismNet, cylinderNet, pyramid } from "./fig.mjs";

export const E = [
  num(`Trouve l'aire totale d'un cube d'arête 4 cm.`, 96, "6 × 16."),
  num(`Trouve l'aire totale d'un prisme à base rectangulaire de 3 × 2 × 1.`, 22, "2(6 + 3 + 2)."),
  num(`Trouve l'aire totale d'un cylindre fermé de rayon 1 m et de hauteur 2 m, à 2 décimales près.`, 18.85, "2π + 4π = 6π.", null, 0.006),
  num(`Trouve l'aire totale d'une sphère de rayon 1 cm, à 2 décimales près.`, 12.57, "4π.", null, 0.006),
  mc(`Un patron plat qui se plie pour former un solide s'appelle un…`, "développement", ["face", "prisme", "section transversale"], "On déplie le solide."),
  num(`Combien de faces un prisme à base rectangulaire a-t-il ?`, 6, "Trois paires."),
  num(`Combien de faces une pyramide à base carrée a-t-elle ?`, 5, "1 carré + 4 triangles."),
  tf(`L'aire totale se mesure en unités cubes.`, false, "En unités carrées : c'est une aire."),
  num(`Trouve l'aire de la surface courbe (l'étiquette) d'une boîte de conserve de rayon 2 cm et de hauteur 5 cm, à 1 décimale près.`, 62.8, "2π(2)(5) = 20π.", null, 0.06),
  num(`Une pyramide à base carrée a une base de 4 et un apothème de 5. Trouve l'aire d'une face triangulaire.`, 10, "½ × 4 × 5."),
  num(`Trouve l'aire totale de cette pyramide (base 4, apothème 5).`, 56, "16 + 4 × 10."),
  num(`On double chaque longueur d'un solide. Par quel facteur l'aire totale est-elle multipliée ?`, 4, "2²."),
  num(`Le développement montre une boîte. Trouve son aire totale.`, 52, "2(4×3) + 2(4×2) + 2(3×2) = 24 + 16 + 12.", figDoc({ w: 300, items: prismNet(4, 3, 2) })),
  mc(`La surface courbe d'un cylindre se déroule en un…`, "rectangle", ["cercle", "triangle", "secteur"], "Longueur 2πr, largeur h."),
  num(`Une boîte ouverte (sans couvercle) mesure 5 × 5 × 5. Trouve son aire extérieure.`, 125, "5 faces de 25."),
  num(`Trouve l'aire totale des deux extrémités circulaires d'un cylindre de rayon 3 cm (1 décimale).`, 56.5, "2 × 9π.", null, 0.06),
  tf(`L'apothème d'un cône est toujours plus long que sa hauteur.`, true, "C'est l'hypoténuse du triangle de cathètes h et r."),
  num(`Un cône a un rayon de 3 et un apothème de 5. Trouve l'aire de sa surface courbe, à 1 décimale près.`, 47.1, "π(3)(5) = 15π.", null, 0.06),
  num(`Un cube a une aire totale de 54 cm². Trouve son arête.`, 3, "54 ÷ 6 = 9 = 3²."),
  num(`On triple chaque longueur d'un solide. Par quel facteur son aire totale est-elle multipliée ?`, 9, "3²."),
];

export const M = [
  num(`Trouve l'aire totale d'une boîte de 10 cm × 8 cm × 6 cm.`, 376, "2(80 + 60 + 48)."),
  num(`Un cylindre a un rayon de 5 cm et une hauteur de 8 cm. Trouve son aire totale (1 décimale).`, 408.4, "50π + 80π = 130π.", null, 0.06),
  num(`Une pyramide à base carrée a une base de 12 cm et une hauteur de 8 cm. Trouve son apothème.`, 10, "√(64 + 36)."),
  num(`Trouve l'aire totale de la pyramide de base 12 et de hauteur 8.`, 384, "144 + 4 × ½ × 12 × 10.", figDoc({ w: 220, items: pyramid(12, 8, { lb: "12", lh: "8", ls: "s" }) })),
  num(`Un cône a un rayon de 5 cm et une hauteur de 12 cm. Trouve son aire totale (1 décimale).`, 282.7, "s = 13 : 25π + 65π = 90π.", null, 0.06),
  num(`Une sphère a un diamètre de 14 cm. Trouve son aire totale (1 décimale).`, 615.8, "4π(49) = 196π.", null, 0.06),
  num(`Un prisme à base triangulaire a des extrémités en triangle rectangle de cathètes 6 et 8, et une longueur de 10. Trouve son aire totale.`, 288, "Extrémités 2 × 24 = 48; côtés 10(6 + 8 + 10) = 240."),
  num(`Une boîte de conserve sans couvercle a un rayon de 4 cm et une hauteur de 10 cm. Trouve son aire extérieure (1 décimale).`, 301.6, "16π + 80π = 96π.", null, 0.06),
  num(`Le développement d'un cylindre est montré avec r = 3 et h = 7. Trouve la longueur du rectangle (1 décimale).`, 18.8, "2π(3) = 6π.", figDoc({ w: 240, items: cylinderNet(3, 7, { lr: "r = 3", lh: "7", lc: "?" }) }), 0.06),
  tf(`Doubler le rayon d'une sphère double son aire totale.`, false, "Cela la multiplie par 4."),
  num(`Un cube a une arête de 5 cm. Un deuxième cube a une arête de 10 cm. Combien de fois plus d'aire totale a-t-il ?`, 4, "2²."),
  num(`Une remise a un plancher de 3 m × 2 m et des murs de 2.5 m avec un toit plat. Trouve l'aire des quatre murs plus le toit.`, 31, "Murs 2.5 × 10 = 25; toit 6."),
  ms(`Quels solides ont une aire totale d'exactement 24 unités carrées ? Sélectionne toutes les bonnes réponses.`, ["un cube d'arête 2", "une boîte de 4 × 2 × 1", "une boîte de 3 × 2 × 1", "une boîte de 3 × 2 × 1.2"], [0, 3], "2(lw + lh + wh) : 24; 28; 22; 2(6 + 3.6 + 2.4) = 24."),
  num(`La peinture couvre 10 m² par litre. Combien de litres faut-il pour couvrir l'extérieur d'un cube de 2 m (les six faces) ?`, 2.4, "24 ÷ 10."),
  num(`Une demi-sphère (une demi-boule) de rayon 6 cm a une base plane. Trouve son aire totale (1 décimale).`, 339.3, "2π(36) + π(36) = 108π.", FIG.hemi6, 0.06),
  mc(`Pour un cône, qu'utilise-t-on pour trouver l'aire de la surface courbe ?`, "le rayon et l'apothème", ["le rayon et la hauteur", "le diamètre et la hauteur", "seulement la hauteur"], "Aire latérale πrs."),
  num(`Une pyramide à base carrée a une base de 8 et un apothème de 5. Trouve sa hauteur.`, 3, "√(25 − 16)."),
  num(`On emballe une boîte de 20 × 10 × 5 cm. Il faut 15 % de papier de plus pour les chevauchements. Combien de papier faut-il (cm²) ?`, 805, "AT 700 × 1.15."),
  num(`Un cylindre a une aire totale de 150π et un rayon de 5. Trouve sa hauteur.`, 10, "50π + 10πh = 150π."),
  num(`Une maquette a une aire totale de 60 cm² et une échelle de 1 : 10. Trouve l'aire totale de l'objet réel en cm².`, 6000, "× 100."),
];

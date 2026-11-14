import { FIG } from "../../mth1w-bank-figures/figs.mjs";
// 5.7 Le volume — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, triPrism, pyramid } from "./fig.mjs";

export const TOPIC = "5.7 Le volume";
export const Q = [
  num(`On fait fondre un cube de métal de 10 cm d'arête pour le mouler en un cylindre de 5 cm de rayon. Quelle est la hauteur du cylindre (2 décimales) ?`, 12.73, "1000 = 25πh → h ≈ 12.73.", null, 0.006),
  num(`On fabrique des billes de roulement sphériques de 0.5 cm de rayon à partir d'un bloc d'acier de 1000 cm³. Combien de billes entières peut-on fabriquer ?`, 1909, "Chacune ≈ 0.5236 cm³; 1000 ÷ 0.5236 ≈ 1909.9."),
  num(`On fabrique une boîte ouverte à partir d'une feuille de 40 cm sur 30 cm en découpant des carrés de 5 cm aux coins. Trouve son volume.`, 3000, "30 × 20 × 5.", FIG.openBox),
  num(`L'eau s'écoule dans un réservoir cylindrique de 1.5 m de rayon à raison de 200 L/min. Combien de minutes faut-il pour que l'eau atteigne 2 m de profondeur (1 décimale) ?`, 70.7, "π(2.25)(2) = 4.5π m³ ≈ 14 137 L ÷ 200.", null, 0.06),
  num(`Un gobelet conique en papier a un rayon de 4 cm et une hauteur de 9 cm. On le remplit jusqu'à la moitié de sa hauteur. Quelle fraction du gobelet plein est remplie ? Donne un nombre décimal.`, 0.125, "Cône semblable avec k = ½ : volume × ⅛."),
  num(`Une tente est un prisme à base triangulaire dont l'extrémité est un triangle isocèle : base 2.4 m, côtés inclinés 2 m, longueur 3.5 m. Trouve son volume (2 décimales).`, 6.72, "Hauteur √(4 − 1.44) = 1.6; ½ × 2.4 × 1.6 × 3.5.", figDoc({ w: 260, items: triPrism(2.4, 1.6, 3.5, { lb: "2.4 m", lt: "", lL: "3.5 m", ax: 1.2 }) }), 0.006),
  num(`Une pyramide à base carrée a une base de 10 m et un apothème de 13 m. Trouve son volume.`, 400, "h = √(169 − 25) = 12; ⅓ × 100 × 12.", figDoc({ w: 220, items: pyramid(10, 12, { lb: "10 m", lh: "", ls: "13 m" }) })),
  num(`Un cylindre entre exactement dans un cube de 8 cm d'arête (même hauteur, touchant les quatre côtés). Quel pourcentage du cube remplit-il (1 décimale) ?`, 78.5, "π(4)²(8) ÷ 512 = π/4.", FIG.cylCube, 0.06),
  num(`Une sphère entre exactement dans un cube de 6 cm d'arête. Trouve le volume vide dans le cube (1 décimale).`, 102.9, "216 − 36π ≈ 102.9.", FIG.sphCube, 0.06),
  tf(`Doubler le rayon d'une sphère multiplie son volume par 8.`, true, "r³ → (2r)³ = 8r³."),
  num(`Un cylindre a un volume de 500 cm³. Un deuxième cylindre a le double du rayon et la moitié de la hauteur. Trouve son volume.`, 1000, "× 4 × ½ = × 2."),
  num(`Un silo à grain est un cylindre (r = 4 m, h = 12 m) surmonté d'un toit en demi-sphère. Trouve son volume (au m³ près).`, 737, "192π + (2/3)π(64) ≈ 603.2 + 134.0.", FIG.silo412, 0.6),
  ms(`Quels changements doublent le volume d'un cylindre ? Sélectionne toutes les bonnes réponses.`, ["doubler la hauteur", "doubler le rayon", "multiplier le rayon par √2", "doubler le rayon et diviser la hauteur par deux"], [0, 2, 3], "V ∝ r²h."),
  num(`Un cône a un volume de 100π cm³ et une hauteur de 12 cm. Trouve son rayon.`, 5, "⅓πr²(12) = 100π → r² = 25."),
  num(`Deux cônes semblables ont des hauteurs de 6 cm et de 9 cm. Le plus petit contient 80 mL. Combien contient le plus grand ?`, 270, "k = 1.5; k³ = 3.375."),
  num(`Un aquarium rectangulaire de 60 cm × 30 cm contient de l'eau sur 25 cm de profondeur. On y ajoute une roche et l'eau monte de 1.5 cm. Trouve le volume de la roche (cm³).`, 2700, "60 × 30 × 1.5."),
  mc(`Une boule de crème glacée sphérique (r = 3 cm) fond dans un cornet (r = 3 cm, h = 10 cm). Le cornet débordera-t-il ?`, "oui — la crème glacée (36π cm³) dépasse ce que contient le cornet (30π cm³)", ["non — elle ne remplit qu'une partie du cornet", "elle remplit exactement le cornet", "impossible à dire"], "Sphère ⁴⁄₃π(27) = 36π ≈ 113 cm³; cône ⅓π(9)(10) = 30π ≈ 94 cm³."),
  num(`Un tronc de cône (un cône dont on a coupé le sommet) est obtenu à partir d'un cône de rayon 6 et de hauteur 12 en retirant un cône supérieur de rayon 3 et de hauteur 6. Trouve son volume (1 décimale).`, 395.8, "⅓π(36)(12) = 144π; ⅓π(9)(6) = 18π; 144π − 18π = 126π ≈ 395.8.", FIG.frustum, 0.06),
  num(`Le volume d'un cube est de 343 cm³. On allonge ses arêtes de 1 cm. Trouve l'augmentation du volume.`, 169, "7 → 8 : 512 − 343."),
  num(`Combien de litres d'eau contient un réservoir en demi-sphère de 3 m de diamètre (au litre près) ?`, 7069, "⅔π(1.5)³ ≈ 7.069 m³.", null, 1),
];

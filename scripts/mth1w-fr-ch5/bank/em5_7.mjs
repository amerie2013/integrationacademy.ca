import { FIG } from "../../mth1w-bank-figures/figs.mjs";
// 5.7 Le volume — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, prism, cylinder, cone } from "./fig.mjs";

export const E = [
  num(`Trouve le volume d'un prisme à base rectangulaire de 5 cm × 4 cm × 2 cm.`, 40, "lwh."),
  num(`Trouve le volume d'un cube d'arête 3 m.`, 27, "3³."),
  num(`Trouve le volume d'un cylindre de rayon 2 cm et de hauteur 5 cm, à 1 décimale près.`, 62.8, "20π.", null, 0.06),
  num(`Un prisme a une aire de base de 12 cm² et une hauteur de 7 cm. Trouve son volume.`, 84, "Bh."),
  num(`Une pyramide a une aire de base de 30 m² et une hauteur de 6 m. Trouve son volume.`, 60, "⅓ × 30 × 6."),
  num(`Trouve le volume d'un cône de rayon 3 cm et de hauteur 4 cm, à 1 décimale près.`, 37.7, "⅓ × 9π × 4 = 12π.", null, 0.06),
  num(`Trouve le volume d'une sphère de rayon 3 cm, à 1 décimale près.`, 113.1, "⁴⁄₃ × 27π = 36π.", null, 0.06),
  tf(`Un cône contient le tiers du cylindre de même base et de même hauteur.`, true, "V = ⅓πr²h."),
  tf(`Si on double chaque arête d'un cube, son volume double.`, false, "Il devient 2³ = 8 fois plus grand."),
  num(`On triple chaque longueur d'un solide. Par quel facteur le volume est-il multiplié ?`, 27, "3³."),
  num(`Combien de mL contient une tasse de 250 cm³ ?`, 250, "1 cm³ = 1 mL."),
  mc(`Le volume se mesure en…`, "unités cubes", ["unités carrées", "unités linéaires", "degrés"], "cm³, m³."),
  num(`Trouve le volume de la boîte dans la figure.`, 60, "5 × 3 × 4.", figDoc({ w: 240, items: prism(5, 3, 4, { ll: "5 cm", lw: "3 cm", lh: "4 cm" }) })),
  num(`Un prisme à base triangulaire a une base triangulaire d'aire 6 m² et une longueur de 10 m. Trouve son volume.`, 60, "Bh."),
  num(`Un cube a un volume de 64 cm³. Trouve son arête.`, 4, "∛64."),
  mc(`Quelle formule donne le volume d'un cylindre ?`, "πr²h", ["2πrh", "⅓πr²h", "4πr²"], "Aire de la base × hauteur."),
  num(`Une canette contient 330 mL. Combien de cm³ cela fait-il ?`, 330, "1 mL = 1 cm³."),
  num(`Trouve le volume d'une pyramide à base carrée de 6 m de côté et de 5 m de hauteur.`, 60, "⅓ × 36 × 5."),
  num(`Combien de cubes de 1 cm remplissent une boîte de 10 cm × 10 cm × 10 cm ?`, 1000, "10³."),
  num(`Une boîte de 2 m × 1 m × 0.5 m contient combien de litres ?`, 1000, "1 m³ = 1000 L."),
];

export const M = [
  num(`Un réservoir cylindrique a un diamètre de 2 m et une hauteur de 3 m. Trouve sa capacité en litres (au litre près).`, 9425, "π(1)²(3) = 3π m³ ≈ 9.425 m³.", null, 1),
  num(`Un cône a un rayon de 6 cm et un apothème de 10 cm. Trouve son volume (1 décimale).`, 301.6, "h = 8 : ⅓π(36)(8) = 96π.", null, 0.06),
  num(`Un prisme à base triangulaire a pour base un triangle rectangle de cathètes 3 et 4, et une longueur de 9. Trouve son volume.`, 54, "½ × 3 × 4 × 9."),
  num(`Une sphère a un diamètre de 10 cm. Trouve son volume (1 décimale).`, 523.6, "r = 5 : ⁴⁄₃π(125).", null, 0.06),
  num(`Un cylindre a un volume de 200π cm³ et un rayon de 5 cm. Trouve sa hauteur.`, 8, "25πh = 200π."),
  num(`Une pyramide a un volume de 48 cm³ et une base de 4 cm sur 4 cm. Trouve sa hauteur.`, 9, "⅓ × 16 × h = 48."),
  num(`On double la longueur, la largeur et la hauteur d'une boîte. Son ancien volume était de 15 cm³. Trouve le nouveau volume.`, 120, "15 × 8."),
  num(`On double la hauteur d'un cylindre sans changer son rayon. Par quel facteur le volume change-t-il ?`, 2, "V ∝ h."),
  num(`On double le rayon d'un cylindre sans changer sa hauteur. Par quel facteur le volume change-t-il ?`, 4, "V ∝ r²."),
  num(`Trouve le volume du solide : un cylindre (r = 3, h = 10) surmonté d'un cône (r = 3, h = 4), à 1 décimale près.`, 320.4, "90π + 12π = 102π.", figDoc({ w: 200, items: [...cylinder(3, 10, { lr: "", lh: "10" }), ...cone(3, 4, { lr: "r = 3", lh: "4" }).map((it) => shiftY(it, 10))] }), 0.06),
  num(`Un bol en demi-sphère a un rayon de 9 cm. Combien de mL contient-il (au mL près) ?`, 1527, "⅔π(729) = 486π ≈ 1526.8.", FIG.bowl, 1),
  ms(`Quels solides ont un volume de 36π ? Sélectionne toutes les bonnes réponses.`, ["sphère avec r = 3", "cylindre avec r = 3, h = 4", "cône avec r = 3, h = 12", "cylindre avec r = 6, h = 3"], [0, 1, 2], "36π, 36π, 36π, 108π."),
  num(`Une piscine mesure 25 m × 10 m × 2 m. Combien de litres d'eau la remplissent ?`, 500000, "500 m³ × 1000."),
  tf(`Une sphère de rayon r contient exactement les deux tiers d'un cylindre de rayon r et de hauteur 2r.`, true, "⁴⁄₃πr³ = ⅔ × 2πr³."),
  num(`Une dalle de béton mesure 6 m × 4 m × 15 cm. Trouve son volume en m³.`, 3.6, "15 cm = 0.15 m."),
  num(`Un cône et un cylindre ont la même base et le même volume. Le cylindre mesure 5 cm de haut. Quelle est la hauteur du cône ?`, 15, "⅓h = 5."),
  num(`Une voiture miniature est construite à l'échelle 1 : 18. Le réservoir d'essence de la vraie voiture contient 58 320 cm³. Combien contiendrait le réservoir de la maquette (cm³) ?`, 10, "58 320 ÷ 18³ = 58 320 ÷ 5832."),
  num(`Trouve le volume d'un tuyau creux de rayon extérieur 5 cm, de rayon intérieur 4 cm et de longueur 20 cm (1 décimale).`, 565.5, "π(25 − 16)(20) = 180π.", null, 0.06),
  num(`Deux boîtes semblables ont des volumes de 2 L et 54 L. Quel est le rapport de leurs hauteurs (grande : petite) ?`, 3, "∛27."),
  mc(`Lequel contient le plus : un cube de 10 cm d'arête ou une sphère de 12 cm de diamètre ?`, "le cube", ["la sphère", "ils sont égaux", "impossible à dire"], "Cube 1000 cm³; sphère ⁴⁄₃π(6)³ = 288π ≈ 904.8 cm³."),
];

function shiftY(it, dy) {
  const m = (p) => [p[0], p[1] + dy];
  const o = { ...it };
  if (o.poly) o.poly = o.poly.map(m); if (o.seg) o.seg = o.seg.map(m); if (o.dot) o.dot = m(o.dot); if (o.at) o.at = m(o.at);
  if (o.circle) o.circle = [o.circle[0], o.circle[1] + dy, o.circle[2]]; if (o.ellipse) o.ellipse = [o.ellipse[0], o.ellipse[1] + dy, o.ellipse[2], o.ellipse[3]];
  if (o.right) o.right = o.right.map(m); if (o.dim) o.dim = o.dim.map(m); if (o.arc) o.arc = o.arc.map(m);
  return o;
}

// 6.1 Introduction aux vecteurs — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc } from "../../mcv4u-ch6/vecfig.mjs";
import { TITLE } from "../l6_1.mjs";

const S = String.raw;
export const TOPIC = TITLE;
export const Q = [
  num("Le cube illustré a des arêtes de longueur 2. Trouve la norme du vecteur qui va de A à G, le sommet opposé (au centième près).", 3.46, "√(2² + 2² + 2²).", vdoc({ view: { xmin: -0.5, xmax: 4, ymin: -0.6, ymax: 3.6 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [2, 0], [3, 1], [1, 1], [0, 0]], color: "gray" }, { pts: [[0, 2], [2, 2], [3, 3], [1, 3], [0, 2]], color: "gray" }, { pts: [[0, 0], [0, 2]], color: "gray" }, { pts: [[2, 0], [2, 2]], color: "gray" }, { pts: [[3, 1], [3, 3]], color: "gray" }, { pts: [[1, 1], [1, 3]], color: "gray", dash: true }], arrows: [{ from: [0, 0], to: [3, 3], color: "red", off: -14 }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 3, y: 3, label: "G", dx: 8, dy: 0 }] }), 0.01),
  num("La pointe d'une aiguille des minutes de 6 cm se déplace de 12 h 00 à 12 h 10. Trouve la norme de son déplacement (en cm).", 6, "Rotation de 60° : la corde est égale au rayon."),
  num("Pour l'aiguille des minutes de 6 cm qui se déplace de 12 h 00 à 12 h 10 (le 12 indique le nord), trouve le relèvement vrai du déplacement de la pointe.", 120, "De (0, 6) à (5.196, 3) : 5.196 vers l'est, 3 vers le sud."),
  num("Un hexagone régulier ABCDEF a des côtés de 5. Trouve |AC| (au centième près).", 8.66, "AC = 5√3.", null, 0.01),
  mc(S`$ABCDEF$ est un hexagone régulier (sommets dans le sens antihoraire) de centre $O$. Quel vecteur est égal à $\overrightarrow{AO}$?`, S`$\overrightarrow{BC}$`, [S`$\overrightarrow{CB}$`, S`$\overrightarrow{AB}$`, S`$\overrightarrow{OA}$`], "BC est parallèle à AO, de même longueur, et pointe dans le même sens."),
  num("Combien de vecteurs différents relient deux sommets d'un carré ABCD (couples ordonnés, les vecteurs égaux comptés une seule fois)?", 8, "Quatre proviennent des côtés (AB = DC, …) et quatre des diagonales."),
  num("Un vecteur de norme 13 pointe au sud de la droite est-ouest et a une composante est de −5. Trouve son relèvement vrai (au dixième près).", 202.6, "Composante sud 12; angle à l'ouest du sud tan⁻¹(5/12).", null, 0.05),
  num("Le vecteur illustré va de (−3, 4) à (5, −2). Trouve son relèvement vrai (au dixième près, le nord est vers le haut).", 126.9, "8 vers l'est, 6 vers le sud : 90° + tan⁻¹(6/8).", vdoc({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 5 }, axes: false, arrows: [{ from: [-3, 4], to: [5, -2], vl: "v" }], points: [{ x: -3, y: 4, label: "(−3, 4)", dx: -8, dy: -10 }, { x: 5, y: -2, label: "(5, −2)", dx: -40, dy: 18 }] }), 0.05),
  tf(S`Si $|\overrightarrow{AB}|=|\overrightarrow{CD}|$ et $AB\parallel CD$, alors $\overrightarrow{AB}=\overrightarrow{CD}$.`, false, "Ils peuvent pointer dans des sens opposés."),
  num("B se trouve selon un relèvement de 140° à partir de A. Quel est le relèvement de A à partir de B?", 320, "Ajoute 180°."),
  num("Trouve le plus petit angle entre le relèvement vrai 075° et le relèvement de quadrant S40°O (en degrés).", 145, "S40°O = 220°; 220° − 75°."),
  num("Un point d'un cercle de rayon 4 fait un quart de tour. Trouve la norme de son déplacement (au centième près).", 5.66, "4√2.", null, 0.01),
  num("Le triangle équilatéral illustré a des côtés de 6 et pour centre O. Trouve |OA| (au centième près).", 3.46, "Les deux tiers de la hauteur 3√3.", vdoc({ view: { xmin: -0.6, xmax: 6.6, ymin: -0.8, ymax: 5.8 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [6, 0], [3, 5.196], [0, 0]], color: "gray" }], arrows: [{ from: [3, 1.732], to: [3, 5.196], color: "red", off: -14 }], points: [{ x: 3, y: 1.732, label: "O", dx: 8, dy: 6 }, { x: 3, y: 5.196, label: "A", dx: 8, dy: 0 }] }), 0.01),
  num("Un vecteur de norme 10 a des composantes est et nord égales. Trouve chaque composante (au centième près).", 7.07, "10 / √2.", null, 0.01),
  mc("Quel énoncé est toujours vrai?", S`Si $\vec u=\vec v$, alors $|\vec u|=|\vec v|$.`, [S`Si $|\vec u|=|\vec v|$, alors $\vec u=\vec v$.`, S`$|\vec u|$ peut être négative.`, S`$\vec u$ et $-\vec u$ ont des normes différentes.`], "Des vecteurs égaux ont la même norme; la réciproque est fausse."),
  num("Le relèvement de quadrant N25°E correspond à quel angle mesuré dans le sens antihoraire à partir de l'est?", 65, "90° − 25°."),
  num("Trouve la norme du vecteur diagonal d'un rectangle de 5 sur 12.", 13, "√(25 + 144)."),
  num("Une cycliste parcourt 20 km selon un relèvement de 210°. De combien de kilomètres vers l'ouest s'est-elle déplacée?", 10, "Composante est : 20 sin 210° = −10."),
  num("Sur la carte illustrée (une unité du quadrillage = 5 km), à quelle distance B se trouve-t-il de A, en kilomètres?", 25, "5 unités du quadrillage, × 5 km.", vdoc({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 6 }, axes: false, arrows: [{ from: [1, 1], to: [4, 5], vl: "AB" }], points: [{ x: 1, y: 1, label: "A", dx: -14, dy: 14 }, { x: 4, y: 5, label: "B", dx: 8, dy: 0 }] })),
  num("B se trouve à 3 km à l'ouest et à 3 km au sud de A. Trouve le relèvement de B à partir de A.", 225, "Sud-ouest."),
];

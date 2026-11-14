// 6.2 Addition et soustraction de vecteurs — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc, pol } from "../../mcv4u-ch6/vecfig.mjs";
import { TITLE } from "../l6_2.mjs";

const S = String.raw;
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
export const TOPIC = TITLE;
export const Q = [
  num("Marche 6 km selon un relèvement de 040°, puis 9 km selon un relèvement de 100°. À quelle distance es-tu du départ (au centième près)?", 13.08, "Virage de 60°, angle du triangle 120° : √171.", null, 0.01),
  num("Marche 6 km selon un relèvement de 040°, puis 9 km selon un relèvement de 100°. Trouve le relèvement vrai de ton déplacement (au dixième près).", 76.6, "La loi des sinus donne 36.6° au-delà de 040°.", null, 0.05),
  num(S`Les vecteurs illustrés ont chacun une norme de 7 et forment un angle de $40^\circ$. Trouve $|\vec u+\vec v|$ (au centième près).`, 13.16, "Angle du triangle 140°.", vdoc({ view: { xmin: -0.6, xmax: 8, ymin: -0.6, ymax: 5 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [7, 0], vl: "u", off: 16 }, { from: [0, 0], to: pol(7, 40), vl: "v", color: "blue", off: -16 }], arcs: [{ at: [0, 0], r: 1.4, a: 0, b: 40, label: "40°" }] }), 0.01),
  num(S`Deux vecteurs de norme 7 forment un angle de $40^\circ$. Trouve $|\vec u-\vec v|$ (au centième près).`, 4.79, "√(98 − 98 cos 40°).", null, 0.01),
  num(S`$|\vec u|=6$, $|\vec v|=10$ et $|\vec u-\vec v|=14$. Trouve l'angle entre $\vec u$ et $\vec v$ (en degrés).`, 120, "cos θ = (36 + 100 − 196)/120."),
  num(S`$|\vec u|=5$, $|\vec u+\vec v|=13$, et $\vec u$ est perpendiculaire à $\vec u+\vec v$. Trouve $|\vec v|$ (au centième près).`, 13.93, "v = (u + v) − u : √(169 + 25).", null, 0.01),
  mc(S`$O$ est le centre de l'hexagone régulier $ABCDEF$. $\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}+\overrightarrow{OD}+\overrightarrow{OE}+\overrightarrow{OF}=$`, S`$\vec 0$`, [S`$6\overrightarrow{OA}$`, S`$\overrightarrow{AD}$`, S`$2\overrightarrow{AD}$`], "Les sommets opposés s'annulent deux à deux."),
  num(S`L'hexagone régulier $ABCDEF$ a des côtés de 2 et pour centre $O$. Trouve $|\overrightarrow{AB}+\overrightarrow{AF}|$.`, 2, "ABOF est un losange, donc la somme est AO."),
  num(S`Le carré $ABCD$ (illustré) a des côtés de 4. Trouve $|\overrightarrow{AB}+\overrightarrow{AC}+\overrightarrow{AD}|$ (au centième près).`, 11.31, "AB + AD = AC, donc la somme est 2AC.", vdoc({ view: { xmin: -0.8, xmax: 5, ymin: -0.8, ymax: 5 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 0], off: 14 }, { from: [0, 0], to: [4, 4], color: "red" }, { from: [0, 0], to: [0, 4], color: "blue", off: -14 }], segs: [{ pts: [[4, 0], [4, 4], [0, 4]], color: "gray" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 4, y: 0, label: "B", dx: 6, dy: 14 }, { x: 4, y: 4, label: "C", dx: 6, dy: -4 }, { x: 0, y: 4, label: "D", dx: -16, dy: -4 }] }), 0.01),
  num(S`$|\vec u|=7$ et $|\vec v|=3$. Quelle est la plus petite valeur possible de $|\vec u+\vec v|$?`, 4, "Lorsqu'ils pointent dans des sens opposés."),
  num(S`$|\vec u|=5$, $|\vec v|=8$ et $|\vec u+\vec v|=13$. Trouve l'angle entre eux (en degrés).`, 0, "Cas d'égalité de l'inégalité du triangle."),
  tf(S`Pour des vecteurs non nuls $\vec u$ et $\vec v$, $|\vec u+\vec v|=|\vec u-\vec v|$ signifie que $\vec u\perp\vec v$.`, true, "Des diagonales égales font du parallélogramme un rectangle."),
  num("Un avion parcourt 400 km selon un relèvement de 120°, puis 300 km selon un relèvement de 210°. Trouve le relèvement de son déplacement (au dixième près).", 156.9, "Les deux étapes sont perpendiculaires : 120° + tan⁻¹(3/4).", null, 0.05),
  num(S`$\vec u$ (norme 10, à $0^\circ$) et $\vec v$ (norme 10, à $70^\circ$). Selon quel angle à partir de l'est pointe $\vec u+\vec v$ (en degrés)?`, 35, "Longueurs égales : la somme est sur la bissectrice de l'angle."),
  num(S`Dans $\triangle ABC$, $AB=6$, $AC=8$ et $\angle A=90^\circ$. Trouve $|\overrightarrow{AB}+\overrightarrow{AC}|$.`, 10, "C'est la diagonale du rectangle de 6 sur 8."),
  num("Le parallélogramme illustré a des côtés de 6 et de 9 et un angle de 50°. Trouve la longueur de sa plus courte diagonale (au centième près).", 6.9, "Cette diagonale est u − v : √(117 − 108 cos 50°).", vdoc({ view: { xmin: -0.6, xmax: 15.6, ymin: -0.8, ymax: 5.4 }, grid: false, axes: false, segs: [{ pts: [[9, 0], plus([9, 0], pol(6, 50)), pol(6, 50)], color: "gray" }, { pts: [pol(6, 50), [9, 0]], color: "red", dash: true }], arrows: [{ from: [0, 0], to: [9, 0], vl: "v", label: "9", off: 16 }, { from: [0, 0], to: pol(6, 50), vl: "u", label: "6", color: "blue", off: -16 }], arcs: [{ at: [0, 0], r: 1.3, a: 0, b: 50, label: "50°" }] }), 0.01),
  num("À partir d'un port, le navire A se trouve à 7 km plein nord et le navire B, à 24 km plein est. À quelle distance B se trouve-t-il de A (en km)?", 25, "AB = PB − PA."),
  mc(S`$|\vec u-\vec v|\gt|\vec u+\vec v|$ exactement lorsque l'angle entre $\vec u$ et $\vec v$ est :`, "obtus", ["aigu", "droit", "nul"], "Compare −2|u||v| cos θ et +2|u||v| cos θ."),
  num("Douze vecteurs unitaires vont du centre d'un cadran d'horloge vers chacune des 12 marques des heures. Trouve la norme de leur somme.", 0, "Les heures opposées s'annulent deux à deux."),
  num(S`Sur le quadrillage, $\vec u$ va de 4 vers la droite et de 1 vers le haut, et $\vec v$ va de 1 vers la gauche et de 3 vers le haut (illustrés). Trouve $|\vec u-\vec v|$ (au centième près).`, 5.39, "u − v = 5 vers la droite, 2 vers le bas.", vdoc({ view: { xmin: -2, xmax: 5, ymin: -0.5, ymax: 3.5 }, axes: false, arrows: [{ from: [0, 0], to: [4, 1], vl: "u", off: 16 }, { from: [0, 0], to: [-1, 3], vl: "v", color: "blue", off: -16 }] }), 0.01),
];

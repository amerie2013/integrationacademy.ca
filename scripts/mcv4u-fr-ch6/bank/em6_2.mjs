// 6.2 Addition et soustraction de vecteurs — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc } from "../../mcv4u-ch6/vecfig.mjs";

const S = String.raw;
const easy = [
  mc(S`$\overrightarrow{PQ}+\overrightarrow{QR}=$`, S`$\overrightarrow{PR}$`, [S`$\overrightarrow{RP}$`, S`$\overrightarrow{QP}$`, S`$\overrightarrow{PQ}$`], "Bout à bout."),
  num(S`$|\vec u|=4$ et $|\vec v|=9$ pointent dans le même sens. Trouve $|\vec u+\vec v|$.`, 13, "Les longueurs s'additionnent."),
  num(S`$|\vec u|=4$ et $|\vec v|=9$ pointent dans des sens opposés. Trouve $|\vec u+\vec v|$.`, 5, "Les longueurs se soustraient."),
  num(S`$|\vec u|=8$, $|\vec v|=15$ et $\vec u\perp\vec v$. Trouve $|\vec u+\vec v|$.`, 17, "√(64 + 225)."),
  tf(S`$\vec u+\vec v=\vec v+\vec u$ pour tous vecteurs.`, true, "L'addition est commutative."),
  mc(S`$\vec u-\vec v$ est la même chose que :`, S`$\vec u+(-\vec v)$`, [S`$\vec v-\vec u$`, S`$-\vec u+\vec v$`, S`$-(\vec u+\vec v)$`], "Additionne l'opposé."),
  num(S`$|\vec u|=9$, $|\vec v|=12$ et $\vec u\perp\vec v$. Trouve $|\vec u-\vec v|$.`, 15, "Perpendiculaires : Pythagore."),
  mc(S`$\overrightarrow{AB}+\overrightarrow{BA}=$`, S`$\vec 0$`, [S`$2\overrightarrow{AB}$`, S`$2\overrightarrow{BA}$`, S`$\overrightarrow{AB}$`], "On revient à A."),
  num("Les vecteurs illustrés sont placés bout à bout. Trouve la norme de leur somme.", 10, "6 vers la droite et 8 vers le haut.", vdoc({ view: { xmin: -0.5, xmax: 7, ymin: -0.5, ymax: 8.5 }, axes: false, arrows: [{ from: [0, 0], to: [6, 0], vl: "u", off: 16 }, { from: [6, 0], to: [6, 8], vl: "v", color: "blue", off: 16 }, { from: [0, 0], to: [6, 8], vl: "?", color: "red", off: -16 }] })),
  num("Marche 2 km vers l'est, puis 2 km vers le nord. Trouve la distance qui te sépare du départ (au centième près).", 2.83, "2√2.", null, 0.01),
  fill("Le vecteur unique égal à la somme de plusieurs vecteurs s'appelle la ___.", ["résultante", "Résultante", "resultante", "resultant"], "Elle les remplace tous."),
  tf(S`$|\vec u+\vec v|=|\vec u|+|\vec v|$ pour tous vecteurs.`, false, "Seulement lorsqu'ils pointent dans le même sens."),
  num(S`Si $\vec u=\vec v$, trouve $|\vec u-\vec v|$.`, 0, "La différence est le vecteur nul."),
  mc(S`$\overrightarrow{XY}-\overrightarrow{XZ}=$`, S`$\overrightarrow{ZY}$`, [S`$\overrightarrow{YZ}$`, S`$\overrightarrow{XY}$`, S`$\overrightarrow{ZX}$`], "ZX + XY."),
  num("Deux vecteurs forment un angle de 50° (origines réunies). Placés bout à bout, quel est l'angle à l'intérieur du triangle entre eux (en degrés)?", 130, "180° − 50°."),
  num("Marche 10 m vers le nord, puis 10 m vers le sud. Trouve la norme du déplacement résultant.", 0, "On revient au départ."),
  mc(S`Avec les origines réunies, $\vec u-\vec v$ va :`, S`de l'extrémité de $\vec v$ à l'extrémité de $\vec u$`, [S`de l'extrémité de $\vec u$ à l'extrémité de $\vec v$`, "le long de la plus longue diagonale", S`de l'origine à l'extrémité de $\vec u$`], "v + (u − v) = u."),
  num(S`Trouve $|\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}+\overrightarrow{DA}|$.`, 0, "Une boucle fermée."),
  mc("Dans le parallélogramme illustré, quel vecteur est la diagonale issue de A?", S`$\vec u+\vec v$`, [S`$\vec u-\vec v$`, S`$\vec v-\vec u$`, S`$2\vec u$`], "Loi du parallélogramme.", vdoc({ view: { xmin: -0.5, xmax: 7, ymin: -0.6, ymax: 3.6 }, grid: false, axes: false, segs: [{ pts: [[4.5, 0], [6.3, 3], [1.8, 3]], color: "gray" }], arrows: [{ from: [0, 0], to: [4.5, 0], vl: "u", off: 16 }, { from: [0, 0], to: [1.8, 3], vl: "v", color: "blue", off: -16 }, { from: [0, 0], to: [6.3, 3], color: "red", label: "?", off: -12 }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }] })),
  tf(S`$\overrightarrow{AB}-\overrightarrow{CB}=\overrightarrow{AC}$.`, true, "−CB = BC, et AB + BC = AC."),
];
const medium = [
  num(S`$|\vec u|=5$, $|\vec v|=7$, avec un angle de $60^\circ$ entre eux. Trouve $|\vec u+\vec v|$ (au centième près).`, 10.44, "Angle du triangle 120° : √109.", null, 0.01),
  num(S`$|\vec u|=5$, $|\vec v|=7$, avec un angle de $60^\circ$ entre eux. Trouve $|\vec u-\vec v|$ (au centième près).`, 6.24, "√(25 + 49 − 35).", null, 0.01),
  num(S`$|\vec u|=12$, $|\vec v|=9$, avec un angle de $120^\circ$ entre eux. Trouve $|\vec u+\vec v|$ (au centième près).`, 10.82, "Angle du triangle 60° : √117.", null, 0.01),
  num(S`$|\vec u|=12$, $|\vec v|=9$, avec un angle de $120^\circ$ entre eux. Trouve $|\vec u-\vec v|$ (au centième près).`, 18.25, "√(225 + 108).", null, 0.01),
  num("Marche 5 km vers le nord, puis 12 km vers l'est. À quelle distance es-tu du départ (en km)?", 13, "√(25 + 144)."),
  num("Marche 5 km vers le nord, puis 12 km vers l'est. Trouve le relèvement vrai de ton déplacement (au dixième près).", 67.4, "tan⁻¹(12/5) à partir du nord.", null, 0.05),
  mc(S`Simplifie $\overrightarrow{AB}-\overrightarrow{AC}+\overrightarrow{BC}$.`, S`$\vec 0$`, [S`$2\overrightarrow{BC}$`, S`$\overrightarrow{AC}$`, S`$2\overrightarrow{AB}$`], "AB + BC + CA."),
  num(S`$|\vec u|=|\vec v|=10$ et $|\vec u+\vec v|=10\sqrt3$. Trouve l'angle entre $\vec u$ et $\vec v$ (en degrés).`, 60, "Angle du triangle 120°, donc 60° entre les vecteurs."),
  num(S`Les vecteurs illustrés ont une norme de 6 et sont perpendiculaires. Trouve $|\vec u-\vec v|$ (au centième près).`, 8.49, "6√2.", vdoc({ view: { xmin: -0.6, xmax: 7, ymin: -0.6, ymax: 7 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [6, 0], vl: "u", off: 16 }, { from: [0, 0], to: [0, 6], vl: "v", color: "blue", off: 16 }, { from: [0, 6], to: [6, 0], color: "red", label: "u − v", off: -14 }] }), 0.01),
  num(S`$|\vec u|=|\vec v|=4$, avec un angle de $150^\circ$ entre eux. Trouve $|\vec u+\vec v|$ (au centième près).`, 2.07, "Angle du triangle 30°.", null, 0.01),
  tf(S`$|\vec u-\vec v|\le|\vec u|+|\vec v|$ pour tous vecteurs.`, true, "Inégalité du triangle."),
  num(S`$|\vec u|=6$, $\vec u\perp\vec v$ et $|\vec u+\vec v|=10$. Trouve $|\vec v|$.`, 8, "√(100 − 36)."),
  mc(S`Dans l'hexagone régulier $ABCDEF$, $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}=$`, S`$\overrightarrow{AD}$`, [S`$\overrightarrow{DA}$`, S`$\vec 0$`, S`$3\overrightarrow{AB}$`], "Bout à bout."),
  num("On additionne un vecteur de 8 vers l'est et un vecteur de 6 vers le nord. Trouve l'angle de la somme à partir de l'est (au dixième près).", 36.9, "tan⁻¹(6/8).", null, 0.05),
  num(S`$|\vec u|=3$, $|\vec v|=5$ et $|\vec u+\vec v|=7$. Trouve l'angle entre $\vec u$ et $\vec v$ (en degrés).`, 60, "49 = 9 + 25 + 30 cos θ."),
  num("Trouve la norme de la résultante de la chaîne illustrée, de A(0, 0) à D(6, 4) en passant par B(2, 3) et C(5, 1) (au centième près).", 7.21, "AD = (6, 4).", vdoc({ view: { xmin: -0.5, xmax: 7, ymin: -0.5, ymax: 5 }, axes: false, arrows: [{ from: [0, 0], to: [2, 3] }, { from: [2, 3], to: [5, 1], color: "blue" }, { from: [5, 1], to: [6, 4], color: "green" }, { from: [0, 0], to: [6, 4], color: "red", w: 2, dash: true }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 2, y: 3, label: "B", dx: -6, dy: -8 }, { x: 5, y: 1, label: "C", dx: 8, dy: 14 }, { x: 6, y: 4, label: "D", dx: 8, dy: 0 }] }), 0.01),
  num(S`$|\vec u|=3$ et $|\vec v|=4$. Trouve $|\vec u+\vec v|^2+|\vec u-\vec v|^2$.`, 50, "Loi du parallélogramme : 2(9 + 16)."),
  mc(S`$\vec u-\vec v$ et $\vec v-\vec u$ sont :`, "des vecteurs opposés", ["des vecteurs égaux", "perpendiculaires", "toujours nuls"], "L'un est −1 fois l'autre."),
  num("Additionne 4 unités vers l'est, 3 unités vers le nord et 4 unités vers l'ouest. Trouve la norme de la somme.", 3, "L'est et l'ouest s'annulent."),
  tf(S`$\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$ seulement si $A$, $B$, $C$ sont sur une même droite.`, false, "C'est vrai pour trois points quelconques."),
];
export { easy as E, medium as M };

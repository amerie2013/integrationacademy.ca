// 7.4 Vecteurs dans l'espace — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, box3, merge } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const easy = [
  num(S`Trouve $|[2,3,6]|$.`, 7, "√(4 + 9 + 36)."),
  num(S`Trouve $|[1,2,2]|$.`, 3, "√9."),
  num(S`Trouve la composante en z de $\overrightarrow{AB}$ pour $A(1,2,3)$ et $B(4,0,8)$.`, 5, "8 − 3."),
  num(S`Trouve la composante en y de $[1,2,3]+[3,-1,0]$.`, 1, "2 − 1."),
  num(S`Trouve $[2,0,1]\cdot[1,4,3]$.`, 5, "2 + 0 + 3."),
  mc("Quel point se trouve sur l'axe des z?", "(0, 0, 5)", ["(5, 0, 0)", "(0, 5, 0)", "(5, 5, 0)"], "x = y = 0."),
  tf(S`$[1,0,0]$, $[0,1,0]$ et $[0,0,1]$ sont $\vec i$, $\vec j$ et $\vec k$.`, true, "Les vecteurs unitaires des axes."),
  num("Trouve la distance de l'origine au point (2, −3, 6).", 7, "√49."),
  fill("Le vecteur unitaire dans le sens positif de l'axe des z s'écrit ___.", ["k", "\\vec k", "[0,0,1]", "[0, 0, 1]"], "k = [0, 0, 1]."),
  num(S`Trouve la composante en z de $3[1,-2,4]$.`, 12, "3 × 4."),
  num("Trouve |OP| pour le point P(2, 3, 1) illustré (2 décimales).", 3.74, "√14.", vdoc(merge(V3, axes3(4.6), { segs: box3(2, 3, 1) }, { arrows: [{ from: [0, 0], to: p3(2, 3, 1), color: "red", vl: "OP", off: -16 }], points: [{ x: p3(2, 3, 1)[0], y: p3(2, 3, 1)[1], label: "P(2, 3, 1)" }] })), 0.01),
  num(S`Trouve $\vec i\cdot\vec k$.`, 0, "Perpendiculaires."),
  mc("Où se trouve le point (1, 1, 1)?", "dans l'octant où toutes les coordonnées sont positives", ["sur l'axe des x", "dans le plan xy", "dans l'octant où toutes les coordonnées sont négatives"], "Les trois coordonnées sont positives."),
  num(S`Trouve $[1,1,1]\cdot[1,1,1]$.`, 3, "1 + 1 + 1."),
  tf("Le point (2, 0, 0) se trouve sur l'axe des y.", false, "Il est sur l'axe des x."),
  num("Trouve la coordonnée z du point milieu de (1, 2, 3) et de (5, 6, 9).", 6, "(3 + 9)/2."),
  num(S`Trouve la composante en z du vecteur unitaire de même direction que $[0,0,-7]$.`, -1, "Il pointe droit vers le bas."),
  num("Trouve |OP| pour le point P(3, 2, 4) situé au coin de la boîte illustrée (2 décimales).", 5.39, "√29.", vdoc(merge(V3, axes3(4.8), { segs: box3(3, 2, 4) }, { points: [{ x: p3(3, 2, 4)[0], y: p3(3, 2, 4)[1], label: "P" }] })), 0.01),
  num(S`Trouve la composante en x de $[4,-1,2]-[1,1,1]$.`, 3, "4 − 1."),
  mc(S`Quel angle $[0,0,5]$ forme-t-il avec l'axe des z?`, S`$0^\circ$`, [S`$90^\circ$`, S`$45^\circ$`, S`$180^\circ$`], "Il est situé sur l'axe des z positifs."),
];
const medium = [
  num("Trouve la distance entre (1, −2, 3) et (−3, 2, 5).", 6, "√(16 + 16 + 4)."),
  num(S`Trouve l'angle entre $[1,1,0]$ et $[0,1,1]$ (en degrés).`, 60, "cos θ = 1/2."),
  num(S`Trouve $k$ pour que $[1,k,2]\perp[3,1,-1]$.`, -1, "3 + k − 2 = 0."),
  num(S`Pour $\vec u=[1,0,2]$ et $\vec v=[0,3,1]$, trouve $|2\vec u-\vec v|$ (2 décimales).`, 4.69, "[2, −3, 3].", null, 0.01),
  num(S`Trouve $\cos\alpha$ pour $[2,3,6]$ (2 décimales).`, 0.29, "2/7.", null, 0.005),
  num(S`Trouve l'angle directeur $\gamma$ de $[2,3,6]$ (en degrés, 2 décimales).`, 31, "cos⁻¹(6/7).", null, 0.01),
  tf(S`Pour tout vecteur non nul, $\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1$.`, true, "La somme des carrés des composantes vaut |v|²."),
  num(S`Trouve la composante en y du vecteur unitaire de même direction que $[2,-1,2]$ (2 décimales).`, -0.33, "−1/3.", null, 0.005),
  num("Trouve |a + b| pour a = [3, 0, 0] et b = [0, 4, 0] (illustrés).", 5, "√(9 + 16).", vdoc(merge(V3, axes3(4.8), { arrows: [{ from: [0, 0], to: p3(3, 0, 0), vl: "a", off: 16 }, { from: p3(3, 0, 0), to: p3(3, 4, 0), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(3, 4, 0), color: "red", off: -16 }] }))),
  mc("Un vecteur dont les angles directeurs sont 90°, 90° et 0° est orienté selon :", "l'axe des z positifs", ["l'axe des x positifs", "l'axe des y positifs", "la droite y = z"], "Il forme un angle de 0° avec l'axe des z."),
  num("Trouve la coordonnée y du point milieu de (−2, 4, 6) et de (4, 0, −2).", 2, "(4 + 0)/2."),
  num(S`Trouve l'angle entre $[1,2,2]$ et $[2,1,-2]$ (en degrés).`, 90, "2 + 2 − 4 = 0."),
  num(S`Trouve $[3,-2,1]\cdot[-1,4,5]$.`, -6, "−3 − 8 + 5."),
  num(S`Trouve $c\gt0$ tel que $|[c,2,4]|=6$.`, 4, "c² = 16."),
  num("Le triangle ABC a pour sommets A(0, 0, 0), B(2, 0, 0) et C(0, 0, 3) (illustré). Trouve |BC| (2 décimales).", 3.61, "√(4 + 9).", vdoc(merge(V3, axes3(4.6), { segs: [{ pts: [p3(0, 0, 0), p3(2, 0, 0), p3(0, 0, 3), p3(0, 0, 0)], color: "violet" }], points: [{ x: p3(2, 0, 0)[0], y: p3(2, 0, 0)[1], label: "B", dx: -16, dy: 8 }, { x: p3(0, 0, 3)[0], y: p3(0, 0, 3)[1], label: "C", dx: 8, dy: 0 }] })), 0.01),
  num(S`Trouve la composante en z du vecteur de norme 9 de même direction que $[1,2,2]$.`, 6, "3[1, 2, 2]."),
  num(S`Trouve l'angle directeur $\beta$ de $[1,1,1]$ (en degrés, 2 décimales).`, 54.74, "cos⁻¹(1/√3).", null, 0.01),
  tf("Un vecteur peut former un angle de 45° avec chacun des trois axes.", false, "3 cos² 45° = 1.5 ≠ 1."),
  num(S`Trouve la projection scalaire de $[3,1,2]$ sur $[0,0,1]$.`, 2, "La composante en z."),
  mc(S`Que vaut $|\vec i+\vec j+\vec k|$?`, S`$\sqrt3$`, ["3", "1", S`$\sqrt2$`], "|[1, 1, 1]|."),
];
export { easy as E, medium as M };

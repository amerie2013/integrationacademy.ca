// 7.2 Le produit scalaire — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
const easy = [
  num(S`Trouve $[2,3]\cdot[4,1]$.`, 11, "8 + 3."),
  num(S`Trouve $[-1,5]\cdot[3,2]$.`, 7, "−3 + 10."),
  num(S`$|\vec a|=3$, $|\vec b|=4$, angle de $0^\circ$. Trouve $\vec a\cdot\vec b$.`, 12, "cos 0° = 1."),
  num(S`$|\vec a|=3$, $|\vec b|=4$, angle de $90^\circ$. Trouve $\vec a\cdot\vec b$.`, 0, "cos 90° = 0."),
  tf(S`$\vec a\cdot\vec b$ est un vecteur.`, false, "C'est un scalaire."),
  mc(S`Si $\vec a\cdot\vec b\lt0$, l'angle entre les vecteurs est :`, "obtus", ["aigu", "droit", "nul"], "cos θ < 0."),
  num(S`Trouve $[6,-2]\cdot[1,3]$.`, 0, "6 − 6."),
  num(S`$|\vec a|=9$. Trouve $\vec a\cdot\vec a$.`, 81, "|a|²."),
  fill("Deux vecteurs non nuls dont le produit scalaire est 0 sont ___.", ["perpendiculaires", "orthogonaux", "Perpendiculaires", "Orthogonaux", "perpendicular", "orthogonal"], "cos θ = 0."),
  num(S`$|\vec a|=2$, $|\vec b|=5$, angle de $60^\circ$. Trouve $\vec a\cdot\vec b$.`, 5, "10 × ½."),
  num("Trouve le produit scalaire des vecteurs illustrés, [3, 0] et [2, 2].", 6, "6 + 0.", vdoc({ view: { xmin: -0.5, xmax: 3.5, ymin: -0.5, ymax: 2.5 }, step: 1, arrows: [{ from: [0, 0], to: [3, 0], vl: "a", off: 16 }, { from: [0, 0], to: [2, 2], vl: "b", color: "blue", off: -16 }] })),
  num(S`Trouve $\vec i\cdot\vec i$.`, 1, "Un vecteur unitaire avec lui-même."),
  num(S`Trouve $\vec i\cdot\vec j$.`, 0, "Perpendiculaires."),
  num(S`Trouve $k$ pour que $[k,2]\perp[4,-2]$.`, 1, "4k − 4 = 0."),
  tf(S`$\vec a\cdot\vec b=\vec b\cdot\vec a$.`, true, "Commutatif."),
  num(S`Trouve $[0,5]\cdot[7,-1]$.`, -5, "0 − 5."),
  num(S`$|\vec a|=|\vec b|=6$ et les vecteurs sont de sens opposés. Trouve $\vec a\cdot\vec b$.`, -36, "cos 180° = −1."),
  num("Les vecteurs illustrés sont [4, 1] et [−1, 4]. Trouve leur produit scalaire.", 0, "−4 + 4 : perpendiculaires.", vdoc({ view: { xmin: -1.6, xmax: 4.6, ymin: -0.5, ymax: 4.6 }, step: 1, arrows: [{ from: [0, 0], to: [4, 1], vl: "a", off: 16 }, { from: [0, 0], to: [-1, 4], vl: "b", color: "blue", off: -16 }] })),
  mc(S`$(2\vec a)\cdot\vec b=$`, S`$2(\vec a\cdot\vec b)$`, [S`$4(\vec a\cdot\vec b)$`, S`$\vec a\cdot\vec b$`, S`$2\vec a\vec b$ (un vecteur)`], "Les scalaires se mettent en facteur."),
  num(S`Trouve $[-3,-4]\cdot[-3,-4]$.`, 25, "9 + 16."),
];
const medium = [
  num(S`Trouve l'angle entre $[1,0]$ et $[1,1]$ (en degrés).`, 45, "cos θ = 1/√2."),
  num(S`Trouve l'angle entre $[4,3]$ et $[-1,2]$ (en degrés, 2 décimales).`, 79.7, "cos θ = 2/(5√5).", null, 0.01),
  num(S`$|\vec a|=5$, $|\vec b|=8$, $\vec a\cdot\vec b=20$. Trouve l'angle (en degrés).`, 60, "cos θ = 0.5."),
  num(S`Trouve $k\gt0$ pour que $[k,3]\perp[k,-12]$.`, 6, "k² − 36 = 0."),
  num(S`$|\vec a|=2$, $|\vec b|=3$, $\vec a\cdot\vec b=1$. Trouve $|\vec a+\vec b|$ (2 décimales).`, 3.87, "4 + 2 + 9 = 15.", null, 0.01),
  num(S`$|\vec a|=4$, $|\vec b|=1$, $\vec a\cdot\vec b=2$. Trouve $(\vec a-\vec b)\cdot(\vec a-\vec b)$.`, 13, "16 − 4 + 1."),
  tf(S`Si $\vec a\cdot\vec b=\vec a\cdot\vec c$ pour un vecteur $\vec a$ non nul, alors $\vec b=\vec c$.`, false, "Il suffit que b − c soit perpendiculaire à a."),
  num("Le triangle ABC (illustré) a pour sommets A(0, 0), B(5, 0) et C(2, 4). Trouve l'angle A (en degrés, 2 décimales).", 63.43, "AB · AC = 10; cos A = 10/(5√20).", vdoc({ view: { xmin: -0.6, xmax: 5.6, ymin: -0.6, ymax: 4.6 }, step: 1, segs: [{ pts: [[0, 0], [5, 0], [2, 4], [0, 0]], color: "gray" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 5, y: 0, label: "B", dx: 6, dy: 14 }, { x: 2, y: 4, label: "C", dx: 6, dy: -6 }] }), 0.01),
  mc(S`Quel vecteur est perpendiculaire à $[2,-7]$?`, S`$[7,2]$`, [S`$[2,7]$`, S`$[-2,7]$`, S`$[7,-2]$`], "14 − 14 = 0."),
  num("Deux vecteurs unitaires forment un angle de 120°. Trouve leur produit scalaire.", -0.5, "cos 120°.", null, 0.001),
  num(S`Trouve $[-6,4]\cdot\vec i$.`, -6, "On obtient la composante en x."),
  num(S`$|\vec a|=10$, $|\vec b|=6$, $\vec a\cdot\vec b=-30$. Trouve l'angle (en degrés).`, 120, "cos θ = −0.5."),
  num(S`Si $\vec a\cdot\vec b=1.5$, trouve $(3\vec a)\cdot(-2\vec b)$.`, -9, "−6 × 1.5."),
  num(S`$|\vec a|=7$, $|\vec b|=4$. Trouve $(\vec a+\vec b)\cdot(\vec a-\vec b)$.`, 33, "49 − 16."),
  num("Trouve l'angle entre les vecteurs [5, 1] et [1, 5] illustrés (en degrés, 2 décimales).", 67.38, "cos θ = 10/26.", vdoc({ view: { xmin: -0.5, xmax: 5.5, ymin: -0.5, ymax: 5.5 }, step: 1, arrows: [{ from: [0, 0], to: [5, 1], vl: "a", off: 16 }, { from: [0, 0], to: [1, 5], vl: "b", color: "blue", off: -16 }] }), 0.01),
  num(S`Trouve l'angle entre $[1,2]$ et l'axe des y positifs (en degrés, 2 décimales).`, 26.57, "cos θ = 2/√5.", null, 0.01),
  tf(S`$\vec a\cdot(\vec b+\vec c)=\vec a\cdot\vec b+\vec a\cdot\vec c$.`, true, "Distributif."),
  num(S`Trouve $k$ pour que l'angle entre $[1,k]$ et $[1,1]$ mesure $0^\circ$.`, 1, "Les vecteurs doivent avoir la même direction et le même sens."),
  mc(S`$|\vec a|=3$ et $|\vec b|=5$. Quelle est la plus grande valeur possible de $\vec a\cdot\vec b$?`, "15", ["8", "0", "34"], "Lorsque θ = 0°."),
  num(S`Trouve $[2,-1]\cdot([3,4]+[1,-2])$.`, 6, "[2, −1] · [4, 2]."),
];
export { easy as E, medium as M };

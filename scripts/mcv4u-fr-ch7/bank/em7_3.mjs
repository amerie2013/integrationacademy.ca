// 7.3 Applications du produit scalaire — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, pol } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
const easy = [
  num("Une force de 10 N déplace un objet sur 5 m dans la direction de la force. Trouve le travail (J).", 50, "10 × 5."),
  num("Une force de 20 N agit à 90° d'un déplacement de 3 m. Trouve le travail (J).", 0, "cos 90° = 0."),
  num("Une force de 40 N agit à 60° d'un déplacement de 10 m. Trouve le travail (J).", 200, "400 × ½."),
  num(S`Trouve le travail effectué par $\vec F=[3,1]$ N sur un déplacement $\vec d=[4,0]$ m (J).`, 12, "12 + 0."),
  num(S`Trouve la projection scalaire de $[5,2]$ sur $[1,0]$.`, 5, "La composante en x."),
  num(S`Trouve la projection scalaire de $[5,2]$ sur $[0,1]$.`, 2, "La composante en y."),
  tf("Le travail est une grandeur vectorielle.", false, "W = F · d est un scalaire."),
  mc(S`La projection scalaire de $\vec a$ sur $\vec b$ est négative lorsque l'angle entre les vecteurs est :`, "obtus", ["aigu", "droit", "nul"], "Elle vaut |a| cos θ."),
  fill("Dans le SI, l'unité de travail est le ___.", ["joule", "Joule", "J", "joules"], "1 J = 1 N·m."),
  num(S`Trouve la composante en x de la projection vectorielle de $[3,4]$ sur $[1,0]$.`, 3, "[3, 0]."),
  num("La force de 12 N illustrée agit à 60° d'un déplacement de 5 m. Trouve le travail (J).", 30, "12 × 5 × ½.", vdoc({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 3.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: pol(3.6, 60), vl: "F", label: "12 N", off: -16 }, { from: [0, -0.4], to: [6, -0.4], color: "blue", label: "5 m", off: -12, w: 2 }], arcs: [{ at: [0, 0], r: 0.9, a: 0, b: 60, label: "60°" }] })),
  num(S`Trouve la projection scalaire de $[2,2]$ sur $[1,1]$ (2 décimales).`, 2.83, "4/√2.", null, 0.01),
  num(S`Trouve le travail effectué par $\vec F=[2,-1]$ sur un déplacement $\vec d=[3,6]$.`, 0, "6 − 6."),
  tf(S`La projection de $\vec a$ sur $\vec b$ change si on double la norme de $\vec b$.`, false, "Seule la direction de b compte."),
  num(S`$|\vec a|=4$ et l'angle entre $\vec a$ et $\vec b$ mesure $180^\circ$. Trouve la projection scalaire de $\vec a$ sur $\vec b$.`, -4, "4 cos 180°."),
  num("Une force de 100 N pousse un tiroir sur 0.5 m, droit vers l'intérieur. Trouve le travail (J).", 50, "100 × 0.5."),
  mc("Le travail effectué par une force est :", S`$\vec F\cdot\vec d$`, [S`$\vec F\times\vec d$`, S`$|\vec F|+|\vec d|$`, S`$\frac{|\vec F|}{|\vec d|}$`], "Un produit scalaire."),
  num("Trouve la longueur de l'ombre (la projection) de [4, 3] sur l'axe des x illustré.", 4, "La composante en x.", vdoc({ view: { xmin: -0.5, xmax: 5, ymin: -0.6, ymax: 3.6 }, step: 1, arrows: [{ from: [0, 0], to: [4, 3], vl: "a", off: -16 }, { from: [0, 0], to: [4, 0], color: "red", w: 4 }], segs: [{ pts: [[4, 3], [4, 0]], dash: true }] })),
  num("Un objet de 10 N est soulevé de 2 m à la verticale. Quel travail la gravité effectue-t-elle sur lui (J)?", -20, "La gravité est de sens opposé au mouvement."),
  num(S`Trouve la projection scalaire de $[0,7]$ sur $[1,0]$.`, 0, "Perpendiculaires."),
];
const medium = [
  num("Une force de 75 N orientée à 25° du mouvement déplace une charge sur 40 m. Trouve le travail (J, 2 décimales).", 2718.92, "75 × 40 cos 25°.", null, 0.01),
  num(S`Trouve la projection scalaire de $[2,5]$ sur $[3,4]$.`, 5.2, "26 ÷ 5.", null, 0.001),
  num(S`Trouve la composante en x de la projection vectorielle de $[2,5]$ sur $[3,4]$.`, 3.12, "(26/25) × 3.", null, 0.001),
  num(S`Trouve la composante en y de la partie de $[2,5]$ perpendiculaire à $[3,4]$.`, 0.84, "5 − 4.16.", null, 0.001),
  num(S`$\vec F=[8,6]$ N déplace un objet de $(0,0)$ à $(3,-1)$ m. Trouve le travail (J).`, 18, "24 − 6."),
  num("Pour quel angle entre la force et le mouvement le travail vaut-il 80 % de sa plus grande valeur (en degrés, 2 décimales)?", 36.87, "cos θ = 0.8.", null, 0.01),
  num(S`Trouve la projection scalaire de $[-3,4]$ sur $[2,0]$.`, -3, "−6 ÷ 2."),
  num(S`Trouve la distance du point $(3,4)$ à la droite qui passe par l'origine et qui a la direction $[1,0]$.`, 4, "La partie perpendiculaire est [0, 4]."),
  tf(S`La projection scalaire de $\vec a$ sur $\vec b$ est toujours égale à celle de $\vec b$ sur $\vec a$.`, false, "L'une se divise par |b|, l'autre par |a|."),
  num("Une corde tire un traîneau sur 15 m avec une force de 60 N à 30° du sol (illustré). Trouve le travail (J, 2 décimales).", 779.42, "60 × 15 cos 30°.", vdoc({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 3.4 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [1.3, 0], [1.3, 0.6], [0, 0.6]], fill: "#e0e7ff", stroke: "violet" }], arrows: [{ from: [1.3, 0.3], to: pol(3.5, 30, [1.3, 0.3]), vl: "T", label: "60 N", off: -16 }, { from: [0, -0.5], to: [6, -0.5], color: "blue", label: "15 m", off: -12, w: 2 }], arcs: [{ at: [1.3, 0.3], r: 1, a: 0, b: 30, label: "30°" }] }), 0.01),
  num(S`Trouve la norme de la projection vectorielle de $[6,8]$ sur $[0,5]$.`, 8, "[0, 8]."),
  num("Une boîte de 30 N glisse sur 6 m vers le bas d'une rampe inclinée à 40°. Quel travail la gravité effectue-t-elle (J, 2 décimales)?", 115.7, "30 × 6 × sin 40°.", null, 0.01),
  mc(S`Pour $\vec a=[1,2]$ et $\vec b=[2,4]$, la projection vectorielle de $\vec a$ sur $\vec b$ est :`, S`$\vec a$ lui-même`, [S`$\vec b$`, S`$\vec 0$`, S`$2\vec a$`], "a est déjà dans la direction de b."),
  num(S`Trouve la projection scalaire de $[1,1]$ sur $[-1,1]$.`, 0, "Perpendiculaires."),
  num(S`La gravité $\vec F=[0,-49]$ N agit sur une balle qui se déplace de $(0,10)$ à $(8,2)$ m. Trouve le travail effectué par la gravité (J).`, 392, "[0, −49] · [8, −8]."),
  num("Une force de 90 N agit à 20° du mouvement. Trouve sa composante dans la direction du mouvement (N, 2 décimales).", 84.57, "90 cos 20°.", null, 0.01),
  tf("Le travail effectué par une force peut être négatif.", true, "Lorsque la force a une partie de sens opposé au mouvement."),
  num("Trouve la projection scalaire de a = [5, 1] sur b = [2, 2] (illustrés) (2 décimales).", 4.24, "12/√8.", vdoc({ view: { xmin: -0.5, xmax: 5.5, ymin: -0.5, ymax: 3.5 }, step: 1, arrows: [{ from: [0, 0], to: [5, 1], vl: "a", off: 16 }, { from: [0, 0], to: [2, 2], vl: "b", color: "blue", off: -16 }] }), 0.01),
  num(S`Trouve la distance du point $(2,6)$ à la droite qui passe par l'origine et qui a la direction $[3,1]$ (2 décimales).`, 5.06, "Partie perpendiculaire [−1.6, 4.8].", null, 0.01),
  mc(S`La projection scalaire de $\vec a$ sur $\vec b$ est égale à :`, S`$|\vec a|\cos\theta$`, [S`$|\vec b|\cos\theta$`, S`$|\vec a|\sin\theta$`, S`$|\vec a||\vec b|$`], "a · b / |b|."),
];
export { easy as E, medium as M };

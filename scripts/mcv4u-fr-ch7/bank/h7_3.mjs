// 7.3 Applications du produit scalaire — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc, pol } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
export const TOPIC = "7.3 Applications du produit scalaire";
export const Q = [
  num("Une traction de 120 N effectue un travail de 3000 J en déplaçant un chariot sur 30 m. À quel angle du mouvement la traction est-elle orientée (en degrés, 2 décimales)?", 33.56, "cos θ = 3000/3600.", null, 0.01),
  num(S`Trouve la distance du point $(4,-1)$ à la droite qui passe par l'origine et qui a la direction $[1,2]$ (2 décimales).`, 4.02, "Partie perpendiculaire [3.6, −1.8].", null, 0.01),
  num("Le poids d'un bloc est [0, −40] N sur une rampe orientée selon [5, 2] (illustré). Trouve la norme de la composante du poids le long de la rampe (N, 2 décimales).", 14.86, "|−80|/√29.", vdoc({ view: { xmin: -0.6, xmax: 7, ymin: -3.2, ymax: 3.6 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [6.5, 0], [6.5, 2.6]], fill: "#f1f5f9", stroke: "gray" }], arrows: [{ from: [4, 1.6], to: [4, -1.6], vl: "W", label: "40 N", off: -16 }, { from: [4, 1.6], to: [4 - 1.37 * 0.93, 1.6 - 1.37 * 0.37], color: "red", w: 2.4 }] }), 0.01),
  num(S`Les forces $\vec F_1=[3,4]$ et $\vec F_2=[-1,2]$ agissent ensemble sur un déplacement $\vec d=[5,5]$. Trouve le travail total.`, 40, "Additionne d'abord les forces : [2, 6] · [5, 5]."),
  num(S`La projection scalaire de $\vec a$ sur $\vec b$ vaut 3 et $|\vec b|=4$. Trouve $\vec a\cdot\vec b$.`, 12, "a · b = (projection scalaire) × |b|."),
  num(S`Trouve la composante en x de la projection vectorielle de $[1,3]$ sur $[2,-1]$.`, -0.4, "(−1/5)[2, −1].", null, 0.001),
  tf(S`Si la projection vectorielle de $\vec a$ sur $\vec b$ est égale à $\vec a$, alors $\vec a$ est parallèle à $\vec b$.`, true, "Il ne reste aucune partie perpendiculaire à b."),
  num("On pousse une boîte sur 12 m avec une force de 200 N orientée à 30° sous l'horizontale. Trouve le travail (J, 2 décimales).", 2078.46, "200 × 12 cos 30°.", null, 0.01),
  num("Une traction de 50 N sur la poignée déplace un chariot sur 20 m et effectue un travail de 700 J (illustré). Trouve l'angle de la poignée (en degrés, 2 décimales).", 45.57, "cos θ = 0.7.", vdoc({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 4 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [1.6, 0], [1.6, 0.7], [0, 0.7]], fill: "#e0e7ff", stroke: "violet" }], arrows: [{ from: [1.6, 0.35], to: pol(3.4, 45.57, [1.6, 0.35]), vl: "F", label: "50 N", off: -16 }], arcs: [{ at: [1.6, 0.35], r: 1, a: 0, b: 45.57, label: "?" }] }), 0.01),
  num(S`Trouve la norme de la partie de $[7,-2]$ perpendiculaire à $[1,1]$ (2 décimales).`, 6.36, "Partie perpendiculaire [4.5, −4.5].", null, 0.01),
  mc(S`La projection vectorielle de $\vec a$ sur $\vec b$ est $\vec 0$ lorsque :`, S`$\vec a\perp\vec b$`, [S`$\vec a\parallel\vec b$`, S`$|\vec a|=|\vec b|$`, S`$\vec a=\vec b$`], "a · b = 0."),
  num(S`La projection scalaire de $[x,2]$ sur $[1,0]$ vaut $-3$. Trouve $x$.`, -3, "C'est la composante en x."),
  num(S`Une force constante $\vec F=[2,3]$ déplace un objet le long d'un triangle fermé jusqu'à son point de départ. Trouve le travail total.`, 0, "Le déplacement total est nul."),
  num("Compare une traction de 80 N à 20° avec une traction à 50° sur 10 m (illustrées). Combien de travail de plus la traction à 20° effectue-t-elle (J, 2 décimales)?", 237.52, "800(cos 20° − cos 50°).", vdoc({ view: { xmin: -0.6, xmax: 6, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: pol(5, 20), label: "20°", off: 16 }, { from: [0, 0], to: pol(5, 50), color: "blue", label: "50°", off: -16 }, { from: [0, -0.4], to: [5.6, -0.4], color: "gray", label: "10 m", off: -12, w: 2 }] }), 0.01),
  num(S`Trouve la distance du point $P(1,7)$ à la droite qui passe par $A(1,1)$ et qui a la direction $[4,3]$.`, 4.8, "AP = [0, 6]; partie perpendiculaire [−2.88, 3.84].", null, 0.001),
  num(S`Trouve (projection scalaire de $[1,2]$ sur $[3,4]$) + (projection scalaire de $[3,4]$ sur $[1,2]$) (2 décimales).`, 7.12, "11/5 + 11/√5.", null, 0.01),
  num(S`La projection scalaire de $\vec a$ sur $\vec b$ vaut la moitié de $|\vec a|$. Trouve l'angle entre les vecteurs (en degrés).`, 60, "cos θ = ½."),
  num("Une randonneuse de 588 N parcourt 500 m sur un sentier qui monte de 1 m tous les 10 m parcourus. Quel travail est effectué contre la gravité (J)?", 29400, "Gain d'altitude de 50 m : 588 × 50."),
  num("Trouve la norme de la projection vectorielle de [3, 3] sur [4, −2] (illustrés) (2 décimales).", 1.34, "(6/20)[4, −2] = [1.2, −0.6].", vdoc({ view: { xmin: -0.5, xmax: 4.6, ymin: -2.6, ymax: 3.6 }, step: 1, arrows: [{ from: [0, 0], to: [3, 3], vl: "a", off: -16 }, { from: [0, 0], to: [4, -2], vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: [1.2, -0.6], color: "red", w: 4 }] }), 0.01),
  tf("Si une force effectue un travail nul sur un objet en mouvement, cette force doit être nulle.", false, "Elle peut être perpendiculaire au mouvement."),
];

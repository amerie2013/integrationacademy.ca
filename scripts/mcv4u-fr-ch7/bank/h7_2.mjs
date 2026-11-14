// 7.2 Le produit scalaire — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
export const TOPIC = "7.2 Le produit scalaire";
export const Q = [
  num("Un parallélogramme a pour côtés [4, 0] et [1, 3] à partir d'un même sommet (illustré). Trouve l'angle aigu entre ses diagonales (en degrés, 2 décimales).", 75.96, "Diagonales [5, 3] et [−3, 3] : l'angle mesure 104.04°.", vdoc({ view: { xmin: -0.5, xmax: 5.5, ymin: -0.5, ymax: 3.5 }, step: 1, segs: [{ pts: [[0, 0], [4, 0], [5, 3], [1, 3], [0, 0]], color: "gray" }, { pts: [[0, 0], [5, 3]], color: "red", dash: true }, { pts: [[4, 0], [1, 3]], color: "blue", dash: true }] }), 0.01),
  num(S`$|\vec a|=3$, $|\vec b|=4$ et $|\vec a+\vec b|=6$. Trouve $\vec a\cdot\vec b$.`, 5.5, "36 = 9 + 2a · b + 16.", null, 0.001),
  num(S`$|\vec a|=3$, $|\vec b|=4$ et $|\vec a+\vec b|=6$. Trouve l'angle entre les vecteurs (en degrés, 2 décimales).`, 62.72, "cos θ = 5.5/12.", null, 0.01),
  num("Trouve l'angle QPR pour P(1, 2), Q(5, 3) et R(2, 6) (illustrés) (en degrés, 2 décimales).", 61.93, "PQ = [4, 1], PR = [1, 4]; cos = 8/17.", vdoc({ view: { xmin: 0, xmax: 6, ymin: 1, ymax: 7 }, step: 1, axes: false, segs: [{ pts: [[1, 2], [5, 3], [2, 6], [1, 2]], color: "gray" }], points: [{ x: 1, y: 2, label: "P", dx: -14, dy: 6 }, { x: 5, y: 3, label: "Q", dx: 6, dy: 6 }, { x: 2, y: 6, label: "R", dx: 6, dy: -6 }] }), 0.01),
  num(S`Les vecteurs unitaires $\vec u$ et $\vec v$ vérifient $|\vec u-\vec v|=1$. Trouve l'angle entre eux (en degrés).`, 60, "1 = 1 − 2 cos θ + 1."),
  mc(S`$\vec a\cdot\vec b=|\vec a||\vec b|$ exactement lorsque :`, "les vecteurs ont la même direction et le même sens", ["ils sont perpendiculaires", "ils sont de sens opposés", "ils ont la même norme"], "cos θ = 1."),
  num(S`Trouve $k\gt0$ pour que l'angle entre $[k,1]$ et $[1,0]$ mesure $60^\circ$ (2 décimales).`, 0.58, "k/√(k² + 1) = ½.", null, 0.005),
  tf(S`$|\vec a\cdot\vec b|\le|\vec a||\vec b|$ pour tous les vecteurs.`, true, "|cos θ| ≤ 1."),
  num("Dans un carré de côté 4, des vecteurs vont d'un sommet aux points milieux des deux côtés opposés (illustrés). Trouve l'angle entre eux (en degrés, 2 décimales).", 36.87, "[4, 2] et [2, 4] : cos = 16/20.", vdoc({ view: { xmin: -0.5, xmax: 4.6, ymin: -0.5, ymax: 4.6 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [4, 0], [4, 4], [0, 4], [0, 0]], color: "gray" }], arrows: [{ from: [0, 0], to: [4, 2], off: 14 }, { from: [0, 0], to: [2, 4], color: "blue", off: -14 }] }), 0.01),
  num(S`Trouve $[3,-4]\cdot[0.6,0.8]$, la partie de $[3,-4]$ dans la direction du vecteur unitaire $[0.6,0.8]$.`, -1.4, "1.8 − 3.2.", null, 0.001),
  num(S`$|\vec a|=|\vec b|=1$ et $\vec a\cdot\vec b=0.5$. Trouve $|\vec a-\vec b|$.`, 1, "1 − 1 + 1."),
  num(S`Trouve $x$ pour que $[x,2]\perp[3,-1]$ (2 décimales).`, 0.67, "3x − 2 = 0.", null, 0.005),
  mc(S`L'expression $\vec a\cdot(\vec b\cdot\vec c)$ est :`, "non définie", ["un vecteur", "un scalaire", "égale à (a · b) · c"], "b · c est un scalaire, et un produit scalaire exige deux vecteurs."),
  num(S`Trouve le cosinus de l'angle entre $[1,1]$ et $[1,-1]$.`, 0, "1 − 1 = 0."),
  num(S`$\vec a\perp\vec b$ avec $|\vec a|=|\vec b|=1$. Trouve $|2\vec a+3\vec b|$ (2 décimales).`, 3.61, "√(4 + 9).", null, 0.01),
  num("Trouve l'angle entre les forces [6, 2] et [−1, 3] illustrées (en degrés).", 90, "−6 + 6 = 0.", vdoc({ view: { xmin: -1.6, xmax: 6.6, ymin: -0.5, ymax: 3.6 }, step: 1, arrows: [{ from: [0, 0], to: [6, 2], vl: "a", off: 16 }, { from: [0, 0], to: [-1, 3], vl: "b", color: "blue", off: -16 }] })),
  num("Un losange a des diagonales de longueurs 10 et 4. Trouve son angle aigu (en degrés, 2 décimales).", 43.6, "Côtés [−5, 2] et [−5, −2] à partir d'un sommet : cos = 21/29.", null, 0.01),
  num(S`$\vec a\cdot\vec b=12$ et $\vec b=[3,4]$. Trouve $\frac{\vec a\cdot\vec b}{|\vec b|}$.`, 2.4, "12 ÷ 5.", null, 0.001),
  tf(S`Si $\vec a\cdot\vec b=0$ et $\vec a\ne\vec 0$, alors $\vec b=\vec 0$.`, false, "b pourrait être n'importe quel vecteur perpendiculaire à a."),
  num(S`$|\vec a|=2$, $|\vec b|=3$, angle de $60^\circ$. Trouve $(\vec a+\vec b)\cdot(2\vec a-\vec b)$.`, 2, "2|a|² + a · b − |b|² = 8 + 3 − 9."),
];

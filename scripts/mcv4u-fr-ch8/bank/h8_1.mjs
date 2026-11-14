// 8.1 Équations de droites dans l'espace à deux et à trois dimensions — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3 } from "../../mcv4u-ch8/vecfig.mjs";
import { TITLE } from "../l8_1.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const L2 = (p, m, t0, t1, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });
export const TOPIC = TITLE;
export const Q = [
  num(S`Trouve l'angle aigu entre $5x-y=1$ et $2x+3y=4$ (en degrés, au centième près).`, 67.62, "Normales [5, −1] et [2, 3] : cos θ = 7/√338.", null, 0.01),
  num(S`Trouve la distance de $(-1,2)$ à la droite $5x+12y=6$.`, 1, "|−5 + 24 − 6| / 13."),
  num(S`Une droite passant par $(2,1,-1)$ est perpendiculaire à la fois à $[1,2,0]$ et à $[0,1,3]$; sa direction est leur produit vectoriel. Trouve l'abscisse de son point obtenu avec $t=1$.`, 8, "[1, 2, 0] × [0, 1, 3] = [6, −3, 1]."),
  num("La droite passant par (1, 1) et perpendiculaire à x + 2y = 4 (illustrée) a pour équation 2x − y + C = 0. Trouve C.", -1, "Sa direction est la normale [1, 2].", vdoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 4 }, step: 1, segs: [{ pts: [[-1, 2.5], [4, 0]], color: "blue", w: 2.4 }, L2([1, 1], [1, 2], -0.9, 1.4)], points: [{ x: 1, y: 1, label: "(1, 1)", dx: 8, dy: 12 }] })),
  num(S`Trouve $k$ pour que $\vec r=[1,k]+t[1,2]$ et $2x-y=0$ représentent la même droite.`, 2, "(1, k) doit satisfaire 2x − y = 0."),
  tf(S`Des droites de directions $[1,2,3]$ et $[-2,1,0]$ sont perpendiculaires.`, true, "−2 + 2 + 0 = 0."),
  num(S`Trouve l'angle entre une droite de direction $[2,-1,2]$ et l'axe des z (en degrés, au centième près).`, 48.19, "cos γ = 2/3.", null, 0.01),
  num(S`Trouve l'abscisse du pied de la perpendiculaire abaissée de $(5,0)$ sur la droite $y=x$.`, 2.5, "Projette [5, 0] sur [1, 1].", vdoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 4.5 }, step: 1, segs: [L2([0, 0], [1, 1], -0.8, 4.3), { pts: [[5, 0], [2.5, 2.5]], color: "red", dash: true, w: 2 }], points: [{ x: 5, y: 0, label: "(5, 0)", dx: -20, dy: 18 }, { x: 2.5, y: 2.5, label: "pied", dx: -36, dy: -6 }] }), 0.001),
  mc(S`La droite $\vec r=[1,2,3]+t[0,0,1]$ est :`, "parallèle à l'axe des z", ["parallèle à l'axe des x", "l'axe des z lui-même", "un plan"], "Seul z change."),
  num(S`Trouve l'aire du triangle formé par $3x+4y=12$ et les axes de coordonnées.`, 6, "Points d'intersection avec les axes : 4 et 3."),
  num("Des droites passant par l'origine, de directions [3, 1] et [−1, 3], sont illustrées. Trouve l'angle entre elles (en degrés).", 90, "−3 + 3 = 0.", vdoc({ view: { xmin: -3, xmax: 4, ymin: -1.5, ymax: 4 }, step: 1, segs: [L2([0, 0], [3, 1], -0.4, 1.2), L2([0, 0], [-1, 3], -0.4, 1.2, "blue")] })),
  num(S`Sur $\vec r=t[1,2,2]$, trouve la cote (coordonnée z) du point situé à 6 unités de l'origine avec $t\gt0$.`, 4, "3t = 6."),
  num(S`La droite $x=1+2t$, $y=3-t$ passe par $(k,0)$. Trouve $k$.`, 7, "t = 3."),
  tf("Deux droites de l'espace à deux dimensions de normales [2, 3] et [4, 6] sont parallèles ou confondues.", true, "Des normales parallèles signifient des directions parallèles."),
  mc("Quelle paire de plans a pour intersection la droite passant par (1, 2, 3) de direction [1, 0, 0]?", S`$y=2$ et $z=3$`, [S`$x=1$ et $y=2$`, S`$x=1$ et $z=3$`, S`$x+y+z=6$ seulement`], "y et z ne changent jamais."),
  num("La droite r = [1, 2, 4] + t[1, 1, −2] (illustrée) traverse le plan xy. Trouve l'ordonnée de ce point.", 4, "z = 0 pour t = 2.", vdoc(merge(V3, axes3(4.8), { segs: [line3([1, 2, 4], [1, 1, -2], -0.3, 2.4, "violet", 2.8)] }, { points: [{ x: p3(3, 4, 0)[0], y: p3(3, 4, 0)[1], label: "?", dx: 8, dy: 12 }] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.2 } }))),
  num("Trouve la réflexion du point (1, 3) par rapport à la droite y = x. Donne l'abscisse de l'image.", 3, "Échange les coordonnées."),
  num(S`Trouve la pente d'une droite perpendiculaire à $\vec r=t[2,5]$.`, -0.4, "L'opposé de l'inverse de 5/2.", null, 0.001),
  mc(S`Une droite de l'espace à deux dimensions de direction $[0,1]$ est :`, "verticale", ["horizontale", "inclinée à 45°", "l'axe des x"], "Aucun déplacement horizontal."),
  num(S`Trouve la distance de $(1,1,1)$ à l'axe des x (au centième près).`, 1.41, "√(1² + 1²).", null, 0.01),
];

// 8.4 Intersections de droites dans l'espace à deux et à trois dimensions — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3 } from "../../mcv4u-ch8/vecfig.mjs";
import { TITLE } from "../l8_4.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const L2 = (p, m, t0, t1, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });
export const TOPIC = TITLE;
export const Q = [
  num(S`Trouve la distance entre les droites gauches $\vec r=[1,1,0]+s[1,0,1]$ et $\vec r=[0,0,3]+t[0,1,-1]$ (au centième près).`, 1.73, "n = [−1, 1, 1]; |[−1, −1, 3] · n| / √3 = 3/√3.", null, 0.01),
  num(S`Trouve $k$ pour que $\vec r=[1,0,0]+s[1,1,1]$ et $\vec r=[0,1,k]+t[1,0,1]$ se coupent.`, -1, "y : s = 1; x : t = 2; z : 1 = k + 2."),
  num("Les droites r = s[2, 1, 0] et r = [1, 3, 0] + t[1, −2, 0] (illustrées, dans le plan xy) se rencontrent. Trouve l'abscisse du point.", 2, "s = 1, t = 1 : (2, 1, 0).", vdoc(merge(V3, axes3(4.4), { segs: [line3([0, 0, 0], [2, 1, 0], -0.4, 1.8, "violet", 2.8), line3([1, 3, 0], [1, -2, 0], -0.5, 2, "blue", 2.8)] }))),
  mc(S`Les droites $\vec r=[1,2]+s[3,4]$ et $4x-3y=2$ sont :`, "parallèles", ["perpendiculaires", "confondues", "sécantes en un point"], "La deuxième a pour normale [4, −3], perpendiculaire à [3, 4]; (1, 2) donne 4 − 6 ≠ 2."),
  num(S`Trouve la distance de $(2,3)$ à la droite passant par l'origine de direction $[1,1]$ (au centième près).`, 0.71, "|2 − 3| / √2.", null, 0.01),
  tf("Des droites gauches peuvent avoir des directions perpendiculaires.", true, "Par exemple l'axe des x et une droite surélevée parallèle à l'axe des y."),
  num("Trouve la plus courte distance entre l'axe des z et la droite x = 2, z = 5 (parallèle à l'axe des y).", 2, "La perpendiculaire commune est dirigée selon x."),
  num(S`$\vec r=[1,2,3]+s[2,-1,1]$ rencontre $\vec r=[3,1,4]+t[1,1,0]$. Trouve l'abscisse du point.`, 3, "z : s = 1; puis t = 0 : (3, 1, 4)."),
  mc(S`$\vec r=s[1,1,0]$ et $\vec r=[1,1,1]+t[1,1,0]$ sont :`, "parallèles et distinctes", ["confondues", "gauches", "sécantes"], "Même direction; (1, 1, 1) n'appartient pas à la première droite."),
  num(S`Trouve la distance entre $\vec r=s[1,1,0]$ et $\vec r=[1,1,1]+t[1,1,0]$.`, 1, "|[1, 1, 1] × [1, 1, 0]| / |[1, 1, 0]| = √2/√2."),
  num("Trouve l'angle entre les droites y = 2x et y = −x/2 illustrées (en degrés).", 90, "Pentes 2 et −1/2.", vdoc({ view: { xmin: -3, xmax: 3, ymin: -3, ymax: 3 }, step: 1, segs: [L2([0, 0], [1, 2], -1.4, 1.4), L2([0, 0], [2, -1], -1.4, 1.4, "blue")] })),
  num(S`Pour les droites $\vec r=[1,2,3]+s[2,-1,1]$ et $\vec r=[3,1,4]+t[1,1,0]$, trouve $s$ au point d'intersection.`, 1, "À partir de l'équation en z."),
  tf(S`Si $\vec m_1\times\vec m_2=\vec 0$, les droites sont parallèles ou confondues.`, true, "Les directions sont parallèles."),
  num(S`Trouve $a$ pour que $\vec r=[a,0,0]+s[0,1,0]$ rencontre $\vec r=t[1,1,1]$.`, 0, "z : t = 0, donc x : a = 0."),
  num(S`Trouve la distance entre $\vec r=s[1,1,0]$ et $\vec r=[0,0,5]+t[1,-1,0]$.`, 5, "Les deux sont dans des plans horizontaux distants de 5."),
  mc("Pour des droites gauches, le vecteur m₁ × m₂ (figure) donne :", "la direction de la perpendiculaire commune", ["le point où elles se rencontrent", "directement l'angle entre elles", "une direction parallèle aux deux droites"], "Il est perpendiculaire aux deux directions.", vdoc(merge(V3, axes3(4.6), { segs: [line3([-1, 1, 0], [1, 0, 0], -2.5, 4.5, "violet", 2.8), line3([1, -1, 2], [0, 1, 0], -2, 4.5, "blue", 2.8), { pts: [p3(1, 1, 0), p3(1, 1, 2)], color: "red", dash: true, w: 2 }] }))),
  num(S`Trouve l'angle entre des droites de directions $[1,1,0]$ et $[1,1,\sqrt2]$ (en degrés).`, 45, "cos θ = 2/(√2 × 2)."),
  num(S`Trouve l'ordonnée du point où $x+2y=7$ rencontre $3x-y=0$.`, 3, "y = 3x, donc 7x = 7."),
  mc(S`Des droites de l'espace à deux dimensions de normales $[1,2]$ et $[2,-1]$ sont :`, "perpendiculaires", ["parallèles", "confondues", "gauches"], "2 − 2 = 0."),
  num("Trouve la distance de l'origine à la droite r = [1, 1, 0] + t[1, −1, 0] illustrée (au centième près).", 1.41, "Le point le plus proche est (1, 1, 0).", vdoc(merge(V3, axes3(4.4), { segs: [line3([1, 1, 0], [1, -1, 0], -2.2, 2.2, "violet", 2.8), { pts: [p3(0, 0, 0), p3(1, 1, 0)], color: "red", dash: true, w: 2 }] })), 0.01),
];

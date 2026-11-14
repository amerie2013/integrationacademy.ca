// 7.4 Vecteurs dans l'espace — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, box3, merge } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const cube = (a) => [[0, 0, 0, a, 0, 0], [a, 0, 0, a, a, 0], [a, a, 0, 0, a, 0], [0, a, 0, 0, 0, 0], [0, 0, a, a, 0, a], [a, 0, a, a, a, a], [a, a, a, 0, a, a], [0, a, a, 0, 0, a], [0, 0, 0, 0, 0, a], [a, 0, 0, a, 0, a], [a, a, 0, a, a, a], [0, a, 0, 0, a, a]].map(([x1, y1, z1, x2, y2, z2]) => ({ pts: [p3(x1, y1, z1), p3(x2, y2, z2)], color: "gray", w: 1.3 }));
export const TOPIC = "7.4 Vecteurs dans l'espace";
export const Q = [
  num("Trouve l'angle P du triangle P(1, 0, 2), Q(3, 1, 0), R(4, −1, 3) (illustré) (en degrés, 2 décimales).", 72.45, "PQ = [2, 1, −2], PR = [3, −1, 1] : cos = 3/(3√11).", vdoc(merge(V3, axes3(4.6), { polys: [{ pts: [p3(1, 0, 2), p3(3, 1, 0), p3(4, -1, 3)], fill: "#ede9fe", stroke: "violet" }], points: [{ x: p3(1, 0, 2)[0], y: p3(1, 0, 2)[1], label: "P", dx: -16, dy: -4 }, { x: p3(3, 1, 0)[0], y: p3(3, 1, 0)[1], label: "Q", dx: 6, dy: 14 }, { x: p3(4, -1, 3)[0], y: p3(4, -1, 3)[1], label: "R", dx: -16, dy: -4 }] }, { view: { xmin: -5, xmax: 5.4, ymin: -2.8, ymax: 5.8 } })), 0.01),
  num("Trouve le périmètre du triangle A(0, 0, 0), B(1, 2, 2), C(4, 2, −2) (2 décimales).", 12.9, "3 + √24 + 5.", null, 0.01),
  num("Le point (1, 2, z) est situé à 3 unités de l'origine, avec z > 0. Trouve z.", 2, "1 + 4 + z² = 9."),
  num("Trouve le point de l'axe des y situé à égale distance de (1, 1, 1) et de (3, −1, 2). Donne sa coordonnée y.", -2.75, "2 + (y − 1)² = 13 + (y + 1)².", null, 0.001),
  num("Un vecteur forme un angle de 45° avec l'axe des x, un angle de 60° avec l'axe des y, et un angle aigu avec l'axe des z. Trouve cet angle (en degrés).", 60, "cos² γ = 1 − ½ − ¼."),
  num("Dans le cube d'arête 2 illustré, trouve l'angle entre les deux diagonales de face qui vont du sommet situé à l'origine jusqu'à (2, 2, 0) et jusqu'à (2, 0, 2) (en degrés).", 60, "[2, 2, 0] · [2, 0, 2] = 4; cos = 4/8.", vdoc(merge(V3, axes3(4.4), { segs: cube(2) }, { arrows: [{ from: [0, 0], to: p3(2, 2, 0), color: "red" }, { from: [0, 0], to: p3(2, 0, 2), color: "blue" }] }))),
  mc("Quels trois points sont alignés?", "(1, 1, 1), (2, 3, 4), (3, 5, 7)", ["(0, 0, 0), (1, 2, 3), (2, 3, 4)", "(1, 0, 0), (0, 1, 0), (0, 0, 1)", "(1, 2, 3), (2, 3, 5), (4, 5, 6)"], "Chaque pas vaut [1, 2, 3]."),
  num(S`Trouve $k$ pour que $[k,1,2]\perp[2,k,1]$ (2 décimales).`, -0.67, "2k + k + 2 = 0.", null, 0.005),
  tf(S`$[1,2,3]$ et $[2,4,6]$ ont les mêmes angles directeurs.`, true, "Ils ont la même direction et le même sens."),
  num("Un vecteur forme des angles directeurs aigus égaux avec les trois axes. Trouve la composante en x de son vecteur unitaire (2 décimales).", 0.58, "3 cos² α = 1.", null, 0.005),
  num("Trouve la distance de l'origine au point (3, 4, 12).", 13, "√169."),
  num("La boîte illustrée mesure 1 sur 4 sur 8. Trouve la longueur de sa diagonale principale.", 9, "√(1 + 16 + 64).", vdoc(merge({ view: { xmin: -2.8, xmax: 6, ymin: -1.6, ymax: 9 }, grid: false, axes: false }, { segs: box3(1, 4, 8, "violet") }, { arrows: [{ from: [0, 0], to: p3(1, 4, 8), color: "red", label: "?", off: -14 }] }))),
  num("Pour tout vecteur non nul, trouve cos² α + cos² β + cos² γ.", 1, "La somme des carrés des cosinus directeurs vaut 1."),
  num(S`Trouve l'angle entre $[1,-2,2]$ et $[2,2,-1]$ (en degrés, 2 décimales).`, 116.39, "cos θ = −4/9.", null, 0.01),
  num(S`$a[1,0,1]+b[0,1,1]=[2,3,5]$. Trouve $a+b$.`, 5, "a = 2, b = 3."),
  num("Trouve |u − v| pour u = [2, 1, 2] et v = [1, 2, −2] (illustrés) (2 décimales).", 4.24, "[1, −1, 4].", vdoc(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(2, 1, 2), vl: "u", off: -16 }, { from: [0, 0], to: p3(1, 2, -2), vl: "v", color: "blue", off: 16 }] }, { view: { xmin: -3.8, xmax: 5, ymin: -3.4, ymax: 5 } })), 0.01),
  num(S`$M$ est le point milieu de $A(2,-1,4)$ et de $B(0,5,2)$. Trouve $|\overrightarrow{OM}|$ (2 décimales).`, 3.74, "M(1, 2, 3).", null, 0.01),
  mc("Le plan xz est l'ensemble des points tels que :", "y = 0", ["x = 0", "z = 0", "x = z"], "Aucune coordonnée en y."),
  tf("Le point (−1, −1, −1) se trouve dans l'octant où les trois coordonnées sont négatives.", true, "Tous les signes sont négatifs."),
  num(S`$[2,m,6]$ est parallèle à $[1,3,n]$. Trouve $m+n$.`, 9, "Le premier vaut 2 fois le second : m = 6, n = 3."),
];

// 8.4 Intersections de droites dans l'espace à deux et à trois dimensions — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3 } from "../../mcv4u-ch8/vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const L2 = (p, m, t0, t1, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });
const easy = [
  num(S`Trouve l'abscisse du point où $y=2x$ rencontre $y=6$.`, 3, "2x = 6."),
  num(S`Trouve l'ordonnée du point où $x=1$ rencontre $y=x+4$.`, 5, "1 + 4."),
  mc(S`Les droites $y=3x+1$ et $y=3x-2$ sont :`, "parallèles", ["confondues", "perpendiculaires", "sécantes en un point"], "Même pente, ordonnées à l'origine différentes."),
  tf("Des droites gauches peuvent exister dans l'espace à deux dimensions.", false, "Dans un plan, des droites non parallèles se rencontrent toujours."),
  mc("Combien de points deux droites confondues ont-elles en commun?", "une infinité", ["aucun", "un", "deux"], "C'est la même droite."),
  num(S`Trouve l'abscisse du point où $y=x$ rencontre $y=-x+8$.`, 4, "2x = 8."),
  mc(S`Deux droites de l'espace à deux dimensions, de directions $[1,2]$ et $[2,1]$ :`, "se rencontrent en exactement un point", ["sont parallèles", "sont gauches", "sont confondues"], "Les directions ne sont pas parallèles."),
  tf("Deux droites de l'espace à trois dimensions qui ne sont pas parallèles se coupent toujours.", false, "Elles peuvent être gauches."),
  fill("Des droites de l'espace à trois dimensions qui ne sont pas parallèles et qui ne se rencontrent jamais sont appelées des droites ___.", ["gauches", "Gauches", "gauche", "skew"], "Possible seulement dans l'espace à trois dimensions."),
  num(S`Pour quelle valeur de $t$ la droite $\vec r=t[1,1]$ rencontre-t-elle $x=5$?`, 5, "x = t."),
  num("Les deux droites illustrées se rencontrent en un point. Trouve son ordonnée.", 1, "Elles se coupent en (2, 1).", vdoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 4 }, step: 1, segs: [L2([2, 1], [1, 1], -2.5, 2.2), L2([2, 1], [1, -1], -2.5, 2.5, "blue")] })),
  num("Combien de points deux droites parallèles distinctes ont-elles en commun?", 0, "Elles ne se rencontrent jamais."),
  mc("Pour trouver où deux droites se rencontrent à l'aide de leurs équations vectorielles, il faut :", "égaler les coordonnées, en utilisant un paramètre différent pour chaque droite", ["utiliser le même paramètre pour les deux droites", "additionner les vecteurs directeurs", "faire le produit vectoriel des points"], "Chaque droite a son propre paramètre."),
  tf(S`Des droites de directions $[1,2,3]$ et $[3,6,9]$ sont parallèles ou confondues.`, true, "Les directions sont des multiples l'une de l'autre."),
  num(S`$\vec r=s[1,0,0]$ rencontre $\vec r=[4,1,0]+t[0,1,0]$. Trouve $s$.`, 4, "y : t = −1; x : s = 4."),
  num(S`Trouve l'angle entre des droites de directions $[1,0,0]$ et $[0,1,0]$ (en degrés).`, 90, "Perpendiculaires."),
  mc(S`Les droites $x+y=2$ et $2x+2y=4$ sont :`, "confondues", ["parallèles et distinctes", "perpendiculaires", "gauches"], "Une équation est le double de l'autre."),
  tf("Les deux droites illustrées (l'une selon x, l'autre selon y, deux unités plus haut) se rencontrent.", false, "Elles sont gauches.", vdoc(merge(V3, axes3(4.6), { segs: [line3([-1, 1, 0], [1, 0, 0], -2.5, 4.5, "violet", 2.8), line3([1, -1, 2], [0, 1, 0], -2, 4.5, "blue", 2.8)] }))),
  num(S`Trouve l'ordonnée du point où $2x+y=5$ rencontre $x-y=1$.`, 1, "x = 2, y = 1."),
  num(S`Trouve l'angle entre des droites de directions $[1,1]$ et $[1,0]$ (en degrés).`, 45, "cos θ = 1/√2."),
];
const medium = [
  num(S`Trouve l'abscisse du point où $\vec r=[1,0]+s[1,1]$ rencontre $\vec r=[0,3]+t[1,-1]$.`, 2, "s = 1 : le point (2, 1)."),
  num(S`$\vec r=s[1,1,1]$ rencontre $\vec r=[2,0,2]+t[0,1,0]$. Trouve l'ordonnée de ce point.`, 2, "s = 2; le point est donc (2, 2, 2)."),
  mc(S`$\vec r=s[1,0,0]$ et $\vec r=[0,1,1]+t[0,1,0]$ sont :`, "gauches", ["sécantes", "parallèles", "confondues"], "Non parallèles; z vaut 0 sur l'une et 1 sur l'autre."),
  num(S`Trouve l'angle entre des droites de directions $[1,2,2]$ et $[2,-2,1]$ (en degrés).`, 90, "2 − 4 + 2 = 0."),
  num(S`Trouve la distance entre les droites gauches $\vec r=s[1,0,0]$ et $\vec r=[0,2,3]+t[0,1,0]$.`, 3, "n = [0, 0, 1]; |[0, 2, 3] · n|."),
  num(S`Trouve $k$ pour que $\vec r=s[1,1,1]$ et $\vec r=[1,0,k]+t[0,1,0]$ se coupent.`, 1, "x : s = 1; z : 1 = k."),
  tf(S`$\vec r=[1,1]+s[2,4]$ et $y=2x-1$ représentent la même droite.`, true, "Pente 2, et (1, 1) satisfait y = 2x − 1."),
  num(S`Trouve la distance entre les droites parallèles $y=x$ et $y=x+4$ (au centième près).`, 2.83, "4/√2.", null, 0.01),
  num("Les deux droites illustrées, r = s[1, 1, 1] et r = [1, 0, 1] + t[0, 1, 0], se rencontrent. Trouve la cote (coordonnée z) du point de rencontre.", 1, "x : s = 1; le point est (1, 1, 1).", vdoc(merge(V3, axes3(4.6), { segs: [line3([0, 0, 0], [1, 1, 1], -0.6, 2.4, "violet", 2.8), line3([1, 0, 1], [0, 1, 0], -1.5, 3.5, "blue", 2.8)] }, { points: [{ x: p3(1, 1, 1)[0], y: p3(1, 1, 1)[1], label: "?", dx: 8, dy: -6 }] }))),
  mc(S`$\vec r=[1,2,3]+s[1,0,1]$ et $\vec r=[2,2,4]+t[-2,0,-2]$ sont :`, "confondues", ["parallèles et distinctes", "gauches", "perpendiculaires"], "Directions parallèles; (2, 2, 4) appartient à la première droite (s = 1)."),
  num(S`Trouve l'abscisse du point où $3x-y=1$ rencontre $x+y=3$.`, 1, "4x = 4."),
  num(S`Trouve l'angle entre des droites de directions $[3,4,0]$ et $[4,3,0]$ (en degrés, au centième près).`, 16.26, "cos θ = 24/25.", null, 0.01),
  num(S`$\vec r=[1,2,3]+t[1,1,1]$ rencontre $\vec r=[3,0,1]+s[0,1,1]$. Trouve $t$.`, 2, "x : 1 + t = 3; vérifie ensuite y et z avec s = 4."),
  tf("Deux droites de directions perpendiculaires se coupent toujours.", false, "Dans l'espace à trois dimensions, elles peuvent être gauches."),
  num(S`Trouve la distance entre les droites parallèles $\vec r=t[0,0,1]$ et $\vec r=[3,4,0]+s[0,0,2]$.`, 5, "Les deux sont verticales : √(9 + 16)."),
  num("Trouve la distance entre les droites parallèles y = 2x et y = 2x − 5 illustrées (au centième près).", 2.24, "5/√5.", vdoc({ view: { xmin: -1, xmax: 4, ymin: -5, ymax: 5 }, step: 1, segs: [L2([0, 0], [1, 2], -0.5, 2.5), L2([0, -5], [1, 2], 0, 4.5, "blue")] }), 0.01),
  mc(S`$\vec r=s[1,0,0]$ et $\vec r=[0,0,1]+t[0,1,0]$ sont :`, "gauches", ["sécantes", "parallèles", "confondues"], "Non parallèles, et z diffère."),
  num(S`Trouve l'angle aigu entre $x-y=0$ et $x=0$ (en degrés).`, 45, "Directions [1, 1] et [0, 1]."),
  num(S`$\vec r=[1,0,0]+s[0,1,0]$ rencontre $\vec r=[0,2,0]+t[1,0,0]$. Trouve l'ordonnée de ce point.`, 2, "Le point est (1, 2, 0)."),
  tf("La distance entre deux droites sécantes est 0.", true, "Elles ont un point commun."),
];
export { easy as E, medium as M };

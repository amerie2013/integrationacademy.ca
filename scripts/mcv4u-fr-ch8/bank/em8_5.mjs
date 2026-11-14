// 8.5 Intersections de droites et de plans — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3, patch3 } from "../../mcv4u-ch8/vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
const easy = [
  num(S`Pour quelle valeur de $t$ la droite $\vec r=t[1,1,1]$ rencontre-t-elle $x+y+z=9$?`, 3, "3t = 9."),
  num(S`La droite $x=0$, $y=0$, $z=t$ rencontre $x+y+2z=8$. Trouve la coordonnée z.`, 4, "2t = 8."),
  mc(S`Si $\vec m\cdot\vec n\ne0$, une droite et un plan :`, "se rencontrent en un seul point", ["sont parallèles", "la droite est contenue dans le plan", "sont gauches"], "L'équation en t a une seule solution."),
  tf("Une droite peut rencontrer un plan en exactement deux points.", false, "Un point, aucun point ou une infinité de points."),
  num(S`Trouve la distance de l'origine à $z=-4$.`, 4, "|−4|."),
  num(S`Où l'axe des x rencontre-t-il $2x+y+z=10$? Donne la coordonnée x.`, 5, "y = z = 0."),
  mc(S`La substitution d'une droite dans l'équation d'un plan donne $0t=0$. La droite :`, "est contenue dans le plan", ["est parallèle au plan sans le toucher", "rencontre le plan une fois", "est perpendiculaire au plan"], "Toute valeur de t convient."),
  tf(S`Si $\vec m\cdot\vec n=0$, la droite est parallèle au plan ou y est contenue.`, true, "Le vecteur directeur est perpendiculaire au vecteur normal."),
  fill("Le point d'un plan le plus proche d'un point P est le pied de la ___ abaissée de P.", ["perpendiculaire", "perpendicular"], "On trace une droite le long du vecteur normal."),
  num("Trouve la distance de (1, 2, 3) au plan z = 0.", 3, "|z|."),
  num("La droite issue de (0, 0, 4) et de vecteur directeur [1, 1, −2] (illustrée) rencontre z = 0. Trouve la coordonnée x en ce point.", 2, "4 − 2t = 0 en t = 2.", vdoc(merge(V3, axes3(4.6), { polys: [{ ...patch3([1.5, 1.5, 0], [1, 0, 0], [0, 1, 0], 1.6), op: 0.5 }] }, { segs: [line3([0, 0, 4], [1, 1, -2], -0.2, 2.6, "red", 2.8)] }, { points: [pt(0, 0, 4, "(0, 0, 4)")] }))),
  num(S`Trouve la distance de l'origine à $x+y+z=6$ (2 décimales).`, 3.46, "6/√3.", null, 0.01),
  num(S`Où l'axe des y rencontre-t-il $4x-2y+z=6$? Donne la coordonnée y.`, -3, "−2y = 6."),
  tf("L'angle entre une droite et un plan qui lui est perpendiculaire est de 90°.", true, "La droite suit le vecteur normal."),
  num("Trouve la distance de (5, 0, 0) au plan x = 2.", 3, "5 − 2."),
  mc(S`La droite $x=t$, $y=t$, $z=1$ et le plan $z=0$ sont :`, "parallèles", ["sécants en un point", "la droite est contenue dans le plan", "perpendiculaires"], "z vaut toujours 1."),
  num(S`Pour quelle valeur de $t$ la droite $\vec r=[1,0,0]+t[1,0,0]$ rencontre-t-elle $x=4$?`, 3, "1 + t = 4."),
  num("Trouve la distance de (1, 1, 7) au plan z = 2 illustré.", 5, "7 − 2.", vdoc(merge(V3, axes3(4.4), { polys: [{ ...patch3([1.2, 1.2, 2], [1, 0, 0], [0, 1, 0], 1.5), op: 0.6 }] }, { segs: [{ pts: [p3(1, 1, 7 * 0.7), p3(1, 1, 2)], color: "red", dash: true, w: 2 }] }, { points: [pt(1, 1, 4.9, "(1, 1, 7)")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6 } }))),
  num(S`Trouve l'angle entre une droite de vecteur directeur $[0,0,1]$ et le plan $z=5$ (degrés).`, 90, "Le long du vecteur normal."),
  num(S`Trouve l'angle entre une droite de vecteur directeur $[1,0,0]$ et le plan $z=0$ (degrés).`, 0, "Parallèle au plan."),
];
const medium = [
  num(S`Trouve la coordonnée x du point où $\vec r=[1,2,3]+t[1,-1,2]$ rencontre $2x+y-z=5$.`, -3, "1 − t = 5, donc t = −4."),
  num(S`$\vec r=t[1,1,1]$ est parallèle à $x-y=3$. Trouve la distance entre eux (2 décimales).`, 2.12, "|0 − 3| / √2.", null, 0.01),
  num(S`Trouve la distance de $(1,1,1)$ à $2x+2y+z=1$ (2 décimales).`, 1.33, "|2 + 2 + 1 − 1| / 3.", null, 0.01),
  num(S`Trouve la coordonnée x du pied de la perpendiculaire abaissée de $(2,2,2)$ sur $x+y+z=3$.`, 1, "6 + 3t = 3 en t = −1."),
  num(S`Trouve l'angle entre une droite de vecteur directeur $[1,0,1]$ et le plan $z=0$ (degrés).`, 45, "sin φ = 1/√2."),
  tf(S`$\vec r=[1,1,1]+t[1,-1,0]$ est contenue dans le plan $x+y=2$.`, true, "m · n = 0 et (1, 1, 1) vérifie x + y = 2."),
  num(S`Trouve $k$ pour que $\vec r=t[1,2,k]$ soit parallèle à $x+y+z=1$.`, -3, "1 + 2 + k = 0."),
  num("La droite qui passe par (0, 0, 3) et dont le vecteur directeur est [1, 1, −1] (illustrée) rencontre x + y + z = 1. Trouve la coordonnée z en ce point.", 5, "3 + t = 1 en t = −2.", vdoc(merge(V3, axes3(4.4), { polys: [patch3([0.33, 0.33, 0.33], [1, -1, 0], [1, 0, -1], 1.6)] }, { segs: [line3([0, 0, 3], [1, 1, -1], -2.2, 1.6, "red", 2.8)] }, { view: { xmin: -5, xmax: 5, ymin: -2.8, ymax: 7 } }))),
  num(S`Trouve le symétrique de $(0,0,4)$ par rapport au plan $z=1$. Donne la coordonnée z de l'image.`, -2, "4 est 3 unités au-dessus; l'image est 3 unités au-dessous."),
  mc("Le pied de la perpendiculaire abaissée de P sur un plan se trouve toujours :", "sur le plan", ["sur la normale passant par l'origine", "sur l'axe des x", "entre P et l'origine"], "C'est le point du plan le plus proche de P."),
  num(S`Trouve la distance de $(3,4,0)$ à $3x+4y=0$.`, 5, "25/5."),
  num(S`Trouve l'angle entre une droite de vecteur directeur $[1,1,1]$ et le plan $x=0$ (degrés, 2 décimales).`, 35.26, "sin φ = 1/√3.", null, 0.01),
  tf(S`Si $P+t\vec n$ est sur le plan, la distance de $P$ au plan est $|t||\vec n|$.`, true, "C'est la distance parcourue par P le long du vecteur normal."),
  num(S`La droite $x=1+t$, $y=2t$, $z=3$ rencontre $x+y=7$. Trouve la coordonnée y.`, 4, "1 + 3t = 7, t = 2."),
  num(S`Trouve la distance entre le plan $2x-y+2z=3$ et la droite parallèle $\vec r=[0,0,3]+t[1,2,0]$.`, 1, "|6 − 3| / 3."),
  num("Trouve la distance de (4, 4, 4) au plan x + y + z = 3 illustré (2 décimales).", 5.2, "|12 − 3| / √3.", vdoc(merge(V3, axes3(4.4), { polys: [patch3([1, 1, 1], [1, -1, 0], [1, 0, -1], 1.6)] }, { points: [pt(4, 4, 4, "(4, 4, 4)")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 7 } })), 0.01),
  mc("La droite qui passe par P et qui est perpendiculaire à un plan a pour vecteur directeur :", "le vecteur normal du plan", ["n'importe quel vecteur du plan", "le vecteur position de P", "le vecteur nul"], "Perpendiculaire au plan signifie le long de n."),
  num(S`Le pied de la perpendiculaire abaissée de l'origine sur $2x+y+2z=18$ est $t[2,1,2]$. Trouve sa coordonnée x.`, 4, "9t = 18, t = 2."),
  tf("Une droite parallèle à un plan reste partout à la même distance de celui-ci.", true, "Elle ne s'approche jamais du plan."),
  num(S`Trouve l'angle entre une droite de vecteur directeur $[1,2,4]$ et le plan $z=0$ (degrés, 2 décimales).`, 60.79, "sin φ = 4/√21.", null, 0.01),
];
export { easy as E, medium as M };

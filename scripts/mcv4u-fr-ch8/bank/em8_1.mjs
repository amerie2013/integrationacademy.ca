// 8.1 Équations de droites dans l'espace à deux et à trois dimensions — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3 } from "../../mcv4u-ch8/vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const L2 = (p, m, t0, t1, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });
const easy = [
  num(S`Trouve l'ordonnée du point obtenu avec $t=2$ sur $\vec r=[1,3]+t[2,-1]$.`, 1, "3 − 2."),
  num(S`Trouve l'abscisse du point obtenu avec $t=-1$ sur $\vec r=[4,0]+t[3,5]$.`, 1, "4 − 3."),
  num(S`Une droite a pour direction $[2,8]$. Trouve sa pente.`, 4, "8 ÷ 2."),
  mc("Lequel est un vecteur directeur de la droite passant par (1, 2) et (4, 8)?", S`$[1,2]$`, [S`$[2,1]$`, S`$[4,8]$ seulement`, S`$[5,10]$ seulement`], "[3, 6] ou n'importe lequel de ses multiples, comme [1, 2]."),
  tf("Chaque droite a exactement une équation vectorielle.", false, "N'importe quel point et n'importe quel multiple de la direction conviennent."),
  num(S`Trouve la cote (coordonnée z) du point obtenu avec $t=3$ sur $\vec r=[0,1,2]+t[1,1,-1]$.`, -1, "2 − 3."),
  mc(S`Lequel est une normale à la droite $2x-5y+1=0$?`, S`$[2,-5]$`, [S`$[5,2]$`, S`$[-5,2]$`, S`$[2,5]$`], "Coefficients de x et de y."),
  num(S`Pour quelle valeur de $t$ la droite $\vec r=[1,-1]+t[2,2]$ passe-t-elle par $(7,5)$?`, 3, "1 + 2t = 7."),
  fill(S`Dans $\vec r=\vec r_0+t\vec m$, $\vec m$ est appelé le vecteur ___.`, ["directeur", "Directeur", "direction", "director"], "Il est parallèle à la droite."),
  tf("Une droite de l'espace à trois dimensions a une équation cartésienne de la forme Ax + By + Cz + D = 0.", false, "Cette équation décrit un plan."),
  num("La droite illustrée passe par (0, 1) et a pour direction [1, 2]. Trouve sa pente.", 2, "Montée de 2 pour une course de 1.", vdoc({ view: { xmin: -2, xmax: 3, ymin: -2, ymax: 5 }, step: 1, segs: [L2([0, 1], [1, 2], -1.3, 1.8)], arrows: [{ from: [0, 1], to: [1, 3], vl: "m", color: "green", off: 16 }] })),
  num(S`La droite $3x+y+C=0$ passe par $(1,2)$. Trouve $C$.`, -5, "3 + 2 + C = 0."),
  mc(S`Lesquelles sont des équations paramétriques de $\vec r=[2,5]+t[1,-3]$?`, S`$x=2+t,\ y=5-3t$`, [S`$x=1+2t,\ y=-3+5t$`, S`$x=2t,\ y=5-3t$`, S`$x=2-t,\ y=5+3t$`], "Point plus t fois la direction."),
  num(S`Trouve l'abscisse à l'origine de $2x+4y-8=0$.`, 4, "y = 0."),
  tf(S`$[2,4]$ et $[-1,-2]$ peuvent être des vecteurs directeurs de la même droite.`, true, "Ils sont parallèles."),
  num(S`Sur $\vec r=t[3,4]$, trouve l'ordonnée lorsque $x=6$.`, 8, "t = 2."),
  num("Combien de points distincts déterminent une droite?", 2, "Deux points donnent une direction."),
  num("La droite illustrée part de l'origine avec la direction [1, 2, 2]. À quelle distance de l'origine se trouve son point obtenu avec t = 1?", 3, "|[1, 2, 2]|.", vdoc(merge(V3, axes3(4.6), { segs: [line3([0, 0, 0], [1, 2, 2], -0.4, 1.6, "violet", 2.8)] }, { points: [{ x: p3(1, 2, 2)[0], y: p3(1, 2, 2)[1], label: "t = 1" }] }))),
  mc(S`Quel point appartient à $\vec r=[1,1]+t[1,1]$?`, "(3, 3)", ["(3, 4)", "(0, 2)", "(2, 1)"], "t = 2."),
  num(S`La droite $x=1+t$, $y=t$, $z=2-t$ traverse le plan xy. Trouve l'abscisse de ce point.`, 3, "z = 0 donne t = 2."),
];
const medium = [
  num(S`La droite passant par $(1,-2)$ de direction $[3,1]$ a pour équation cartésienne $x-3y+C=0$. Trouve $C$.`, -7, "1 + 6 + C = 0."),
  num(S`Trouve la pente de $4x-3y=12$ (au centième près).`, 1.33, "Direction [3, 4].", null, 0.005),
  num(S`Sur la droite passant par $(1,0,2)$ et $(3,4,-2)$, trouve l'ordonnée du point milieu.`, 2, "Moyenne : (2, 2, 0)."),
  tf(S`$(5,7,-1)$ appartient à $\vec r=[1,1,1]+t[2,3,-1]$.`, true, "t = 2 convient pour chaque coordonnée."),
  num(S`La droite $x=3-t$, $y=2+2t$, $z=4t$ rencontre le plan yz. Trouve la cote (coordonnée z) de ce point.`, 12, "x = 0 donne t = 3."),
  num(S`Trouve l'angle entre des droites de directions $[1,0]$ et $[1,1]$ (en degrés).`, 45, "cos θ = 1/√2."),
  num(S`Trouve l'angle aigu entre $3x-y=2$ et $x+2y=1$ (en degrés, au centième près).`, 81.87, "Normales [3, −1] et [1, 2].", null, 0.01),
  mc(S`Les droites $\vec r=t[2,1]$ et $x-2y=5$ sont :`, "parallèles", ["perpendiculaires", "confondues", "sécantes à l'origine"], "La normale [1, −2] est perpendiculaire à [2, 1], et (0, 0) n'appartient pas à x − 2y = 5."),
  num(S`Trouve la distance de l'origine à la droite $3x+4y=15$.`, 3, "15 ÷ 5."),
  num("Trouve l'abscisse à l'origine de la droite r = [−2, 3] + t[4, −2] (illustrée).", 4, "y = 0 pour t = 1.5.", vdoc({ view: { xmin: -3, xmax: 6, ymin: -2, ymax: 4 }, step: 1, segs: [L2([-2, 3], [4, -2], -0.2, 2)] })),
  num(S`Trouve $k$ pour que $[k,6]$ soit parallèle à $[2,3]$.`, 4, "[k, 6] = 2[2, 3]."),
  mc("Quelles équations décrivent la droite passant par (2, −1, 5) et parallèle à l'axe des z?", S`$x=2,\ y=-1,\ z=5+t$`, [S`$x=2+t,\ y=-1,\ z=5$`, S`$x=2t,\ y=-t,\ z=5t$`, S`$z=5$`], "Seul z change."),
  num(S`Trouve l'ordonnée à l'origine de $\vec r=[1,5]+t[1,2]$.`, 3, "x = 0 pour t = −1."),
  tf(S`$\vec r=t[1,2]$ et $\vec r=[2,4]+s[3,6]$ décrivent la même droite.`, true, "Directions parallèles, et (2, 4) appartient à la première droite."),
  num(S`Trouve l'angle que forme une droite de direction $[1,1,1]$ avec l'axe des x (en degrés, au centième près).`, 54.74, "cos α = 1/√3.", null, 0.01),
  num(S`Sur $\vec r=[2,-1,3]+t[1,2,-2]$, pour quelle valeur de $t$ a-t-on $z=-1$?`, 2, "3 − 2t = −1."),
  mc(S`Lequel est une normale à la droite $\vec r=[3,1]+t[5,2]$?`, S`$[2,-5]$`, [S`$[5,2]$`, S`$[3,1]$`, S`$[-5,-2]$`], "Perpendiculaire à la direction."),
  mc("La droite passant par (1, 2, 0) et (1, 2, 4) (illustrée) a pour direction :", S`$[0,0,1]$`, [S`$[1,2,0]$`, S`$[1,2,4]$`, S`$[1,0,0]$`], "Seul z change.", vdoc(merge(V3, axes3(4.6), { segs: [line3([1, 2, 0], [0, 0, 1], -0.5, 4.8, "violet", 2.8)] }, { points: [{ x: p3(1, 2, 0)[0], y: p3(1, 2, 0)[1], label: "(1, 2, 0)", dx: 8, dy: 12 }, { x: p3(1, 2, 4)[0], y: p3(1, 2, 4)[1], label: "(1, 2, 4)" }] }))),
  num(S`Trouve la distance entre les points obtenus avec $t=0$ et $t=2$ sur $\vec r=[1,1,1]+t[2,1,2]$.`, 6, "2|[2, 1, 2]|."),
  num(S`Une droite passant par $(1,4)$ est parallèle à $2x-y+3=0$ et a pour équation $2x-y+C=0$. Trouve $C$.`, 2, "2 − 4 + C = 0."),
];
export { easy as E, medium as M };

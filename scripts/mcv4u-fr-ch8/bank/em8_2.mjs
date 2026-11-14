// 8.2 Équations de plans — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, merge, patch3, tri3 } from "../../mcv4u-ch8/vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
const easy = [
  num(S`Trouve l'abscisse du point obtenu avec $s=1$, $t=1$ sur $\vec r=[1,0,0]+s[1,1,0]+t[0,1,1]$.`, 2, "1 + 1 + 0."),
  num(S`Trouve l'ordonnée du point obtenu avec $s=1$, $t=1$ sur $\vec r=[1,0,0]+s[1,1,0]+t[0,1,1]$.`, 2, "0 + 1 + 1."),
  num(S`Trouve la cote (coordonnée z) du point obtenu avec $s=1$, $t=1$ sur $\vec r=[1,0,0]+s[1,1,0]+t[0,1,1]$.`, 1, "0 + 0 + 1."),
  mc("Quel est le plus petit nombre de points, non tous situés sur une même droite, qui déterminent un plan?", "3", ["2", "4", "1"], "Deux points ne donnent qu'une droite."),
  tf("Deux vecteurs parallèles peuvent servir de vecteurs directeurs d'un plan.", false, "Ils ne décrivent qu'une droite."),
  mc("Laquelle est une équation vectorielle du plan xy?", S`$\vec r=s[1,0,0]+t[0,1,0]$`, [S`$\vec r=s[1,0,0]+t[0,0,1]$`, S`$\vec r=t[0,0,1]$`, S`$\vec r=s[0,1,0]+t[0,0,1]$`], "Passe par l'origine, directions i et j."),
  num(S`Quelle est la cote (coordonnée z) de chaque point de $\vec r=[0,0,5]+s[1,0,0]+t[0,1,0]$?`, 5, "Aucune des directions ne modifie z."),
  tf("Un plan a exactement une équation vectorielle.", false, "N'importe quel point du plan et n'importe quelles deux directions non parallèles du plan conviennent."),
  fill(S`Dans $\vec r=\vec r_0+s\vec a+t\vec b$, $s$ et $t$ sont appelés des ___.`, ["paramètres", "Paramètres", "parametres", "parameters"], "Chaque couple donne un point."),
  num(S`Trouve l'abscisse du point obtenu avec $s=t=0$ sur $\vec r=[3,-1,2]+s[1,2,0]+t[0,1,1]$.`, 3, "C'est r₀."),
  num("Le plan illustré passe par r₀ = (1, 1, 1) et a pour direction a = [1, 0, 0]. Trouve l'abscisse du point obtenu avec s = 1, t = 0.", 2, "1 + 1.", vdoc(merge(V3, axes3(4.6), { polys: [patch3([1, 1, 1], [1, 0, 0], [0, 1, 0.5], 1.3)] }, { arrows: [{ from: p3(1, 1, 1), to: p3(2, 1, 1), vl: "a", off: 16 }] }))),
  mc("Trois points colinéaires :", "ne déterminent pas un plan unique", ["déterminent exactement un plan", "ne déterminent aucun plan", "sont toujours situés dans le plan xy"], "Une infinité de plans contiennent une droite."),
  num(S`Pour $A(0,0,0)$ et $B(1,2,3)$, quelle est la composante en x de $\overrightarrow{AB}$?`, 1, "1 − 0."),
  tf("Le plan x = 0 est le plan yz.", true, "Chaque point a x = 0."),
  num(S`Trouve l'ordonnée du point obtenu avec $s=2$, $t=-1$ sur $\vec r=[0,1,0]+s[1,1,0]+t[0,3,1]$.`, 0, "1 + 2 − 3."),
  mc(S`Quel point appartient à $\vec r=s[1,0,0]+t[0,1,0]$?`, "(2, 3, 0)", ["(2, 3, 1)", "(0, 0, 4)", "(1, 1, 1)"], "z doit être 0."),
  num("Combien de paramètres figurent dans une équation vectorielle d'un plan?", 2, "s et t."),
  tf("Le plan passant par A(1, 0, 0), B(0, 1, 0) et C(0, 0, 1), illustré, contient l'origine.", false, "Chacun de ses points satisfait x + y + z = 1.", vdoc(merge(V3, axes3(4.6), { polys: [tri3(1, 1, 1)] }, { points: [pt(1, 0, 0, "A", -14, 14), pt(0, 1, 0, "B", 2, 16), pt(0, 0, 1, "C")] }))),
  num(S`Trouve l'abscisse du point obtenu avec $s=-1$, $t=2$ sur $\vec r=[2,2,2]+s[1,0,0]+t[0,0,1]$.`, 1, "2 − 1."),
  tf("Trois points quelconques déterminent exactement un plan.", false, "Pas s'ils sont colinéaires."),
];
const medium = [
  tf(S`$(3,1,4)$ appartient à $\vec r=[1,0,1]+s[1,1,1]+t[1,0,2]$.`, true, "s = 1, t = 1 convient pour les trois coordonnées."),
  num(S`Le point $(4,2,3)$ appartient à $\vec r=[0,0,1]+s[2,1,0]+t[0,0,1]$. Trouve $t$.`, 2, "s = 2 à partir de x; puis 1 + t = 3."),
  mc("Laquelle est une équation vectorielle du plan passant par (1, 1, 1), (2, 3, 1) et (1, 1, 4)?", S`$\vec r=[1,1,1]+s[1,2,0]+t[0,0,3]$`, [S`$\vec r=[1,1,1]+s[2,3,1]+t[1,1,4]$`, S`$\vec r=s[1,2,0]+t[0,0,3]$`, S`$\vec r=[1,1,1]+t[1,2,3]$`], "Utilise AB et AC à partir de A."),
  num(S`Trouve $k$ pour que $(k,0,0)$ appartienne à $\vec r=[1,1,0]+s[1,1,0]+t[0,0,1]$.`, 0, "y : s = −1; alors x = 0."),
  tf("Les points (0, 0, 0), (1, 0, 0), (0, 1, 0) et (1, 1, 5) sont coplanaires.", false, "Les trois premiers sont dans le plan xy; le quatrième ne l'est pas."),
  num("Quelle est la cote (coordonnée z) de chaque point du plan passant par (0, 0, 2), (1, 0, 2) et (0, 1, 2)?", 2, "C'est le plan z = 2.", vdoc(merge(V3, axes3(4.4), { polys: [patch3([1.2, 1.2, 2], [1, 0, 0], [0, 1, 0], 1.4)] }, { points: [pt(0, 0, 2, "(0, 0, 2)", 8, -6), pt(1, 0, 2, "(1, 0, 2)", -70, 14), pt(0, 1, 2, "(0, 1, 2)", 6, -6)] }))),
  mc("Laquelle est une équation vectorielle du plan contenant l'axe des x et le point (0, 1, 1)?", S`$\vec r=s[1,0,0]+t[0,1,1]$`, [S`$\vec r=s[1,0,0]+t[0,1,0]$`, S`$\vec r=[0,1,1]+t[1,0,0]$`, S`$\vec r=s[0,1,0]+t[0,0,1]$`], "Directions i et le vecteur menant à (0, 1, 1)."),
  num(S`Le point $(5,1,3)$ appartient à $\vec r=[1,1,3]+s[2,0,0]+t[0,1,0]$. Trouve $s$.`, 2, "1 + 2s = 5."),
  tf(S`$[1,1,0]$ et $[-2,-2,0]$ peuvent être les deux directions d'un plan.`, false, "Ils sont parallèles."),
  num(S`Trouve l'ordonnée du point obtenu avec $s=t=0.5$ sur $\vec r=s[2,2,0]+t[0,2,2]$.`, 2, "1 + 1."),
  mc("Quelle paire de points, avec l'origine, NE détermine PAS un plan?", "(1, 2, 3) et (2, 4, 6)", ["(1, 0, 0) et (0, 1, 0)", "(1, 1, 0) et (0, 1, 1)", "(1, 2, 3) et (3, 2, 1)"], "L'origine et ces deux points sont colinéaires."),
  mc("Combien de plans contiennent deux points distincts donnés?", "une infinité", ["exactement un", "exactement deux", "aucun"], "Deux points ne déterminent qu'une droite."),
  num(S`Où le plan $\vec r=[1,0,0]+s[0,1,0]+t[0,0,1]$ rencontre-t-il l'axe des x? Donne l'abscisse.`, 1, "C'est le plan x = 1."),
  tf(S`Le plan $\vec r=s[1,0,0]+t[0,1,1]$ contient $(0,2,2)$.`, true, "s = 0, t = 2."),
  num(S`Trouve $k$ pour que $(1,k,3)$ appartienne à $\vec r=s[1,0,1]+t[0,1,1]$.`, 2, "s = 1, puis t = 2."),
  tf("Les points A(0, 0, 0), B(2, 0, 0), C(0, 2, 0) et D(2, 2, 0), illustrés, sont coplanaires.", true, "Ils sont tous dans le plan xy.", vdoc(merge(V3, axes3(4.4), { polys: [{ pts: [p3(0, 0, 0), p3(2, 0, 0), p3(2, 2, 0), p3(0, 2, 0)], fill: "#dbeafe", stroke: "blue" }], points: [pt(0, 0, 0, "A", -14, -4), pt(2, 0, 0, "B", -16, 12), pt(2, 2, 0, "D", 6, 14), pt(0, 2, 0, "C", 4, -6)] }))),
  mc("Laquelle est une équation vectorielle du plan passant par (0, 0, 3) et parallèle au plan xy?", S`$\vec r=[0,0,3]+s[1,0,0]+t[0,1,0]$`, [S`$\vec r=[0,0,3]+t[0,0,1]$`, S`$\vec r=s[1,0,0]+t[0,1,0]$`, S`$\vec r=[0,0,3]+s[1,0,0]+t[0,0,1]$`], "Point (0, 0, 3), directions i et j."),
  num(S`Un plan passe par $A(1,2,3)$ et a pour directions $[1,0,-1]$ et $[0,1,-1]$. Trouve la cote (coordonnée z) de son point obtenu avec $s=t=1$.`, 1, "3 − 1 − 1."),
  mc("Combien de points une droite a-t-elle en commun avec un plan qui la contient?", "une infinité", ["un", "deux", "aucun"], "Chaque point de la droite est dans le plan."),
  tf(S`Si $\overrightarrow{OD}=\overrightarrow{OA}+\overrightarrow{AB}+\overrightarrow{AC}$, alors $D$ appartient au plan passant par $A$, $B$ et $C$.`, true, "s = t = 1."),
];
export { easy as E, medium as M };

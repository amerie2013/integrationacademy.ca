// 8.2 Équations de plans — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3, patch3, tri3 } from "../../mcv4u-ch8/vecfig.mjs";
import { TITLE } from "../l8_2.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
export const TOPIC = TITLE;
export const Q = [
  tf("Les points A(1, 0, 0), B(0, 1, 0), C(0, 0, 1) et D(1, 1, −1) sont coplanaires.", true, "AD = AB − AC."),
  num("Trouve k pour que A(1, 1, 1), B(2, 1, 0), C(1, 2, 2) et D(k, 0, 0) soient coplanaires.", 1, "AD = s AB + t AC donne t = −1, s = 0, donc k − 1 = 0."),
  mc("Le plan illustré coupe les axes en 2, 3 et 6. Quelle équation tous ses points satisfont-ils?", S`$3x+2y+z=6$`, [S`$2x+3y+6z=6$`, S`$x+y+z=11$`, S`$6x+3y+2z=6$`], "x/2 + y/3 + z/6 = 1, multiplié par 6.", vdoc(merge(V3, axes3(4.6), { polys: [tri3(2, 3, 6 * 0.7)] }, { points: [pt(2, 0, 0, "2", -14, 12), pt(0, 3, 0, "3", 2, 16), pt(0, 0, 4.2, "6", 8, 0)] }))),
  tf(S`L'origine appartient à $\vec r=[1,1,1]+s[1,0,1]+t[0,1,1]$.`, false, "x et y imposent s = t = −1, mais alors z = −1."),
  num(S`Le plan contient $\vec r=[1,2,0]+t[1,0,1]$ et $\vec r=[1,2,0]+s[0,1,1]$. Trouve la cote (coordonnée z) de son point obtenu avec $s=t=1$.`, 2, "0 + 1 + 1."),
  mc("Combien d'équations vectorielles différentes un plan a-t-il?", "une infinité", ["une", "deux", "trois"], "Choix du point et des directions."),
  num(S`Le point $(4,3,3)$ appartient à $\vec r=[1,1,1]+s[1,2,0]+t[1,0,1]$. Trouve $s+t$.`, 3, "z donne t = 2, puis x donne s = 1."),
  mc(S`La droite $\vec r=t[1,1,1]$ est-elle contenue dans le plan $\vec r=s[1,0,1]+u[0,1,0]$?`, "oui", ["non", "seulement à l'origine", "on ne peut pas le déterminer"], "[1, 1, 1] = [1, 0, 1] + [0, 1, 0], et les deux passent par l'origine."),
  num("Le plan illustré contient l'axe des y et le point (1, 0, 2); on a donc z = 2x sur ce plan. Trouve z en un point où x = 1.5.", 3, "z = 2x.", vdoc(merge(V3, axes3(4.6), { polys: [patch3([0.8, 1, 1.6], [1, 0, 2], [0, 1, 0], 1.2)] }, { points: [pt(1, 0, 2, "(1, 0, 2)")] }))),
  tf("Les équations paramétriques d'un plan comportent trois paramètres.", false, "Deux : s et t."),
  num(S`Trouve la distance entre les plans parallèles $\vec r=s\vec i+t\vec j$ et $\vec r=[0,0,4]+s\vec i+t\vec j$.`, 4, "z = 0 et z = 4.", vdoc(merge(V3, axes3(4.4), { polys: [{ ...patch3([1.2, 1.2, 0], [1, 0, 0], [0, 1, 0], 1.4), op: 0.5 }, { ...patch3([1.2, 1.2, 4], [1, 0, 0], [0, 1, 0], 1.4, "#dcfce7", "green"), op: 0.5 }] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }))),
  num(S`Pour quelle valeur de $k$ l'équation $\vec r=s[1,2,3]+t[2,k,6]$ ne décrit-elle pas un plan?`, 4, "[2, k, 6] = 2[1, 2, 3] lorsque k = 4."),
  mc("Quel plan contient l'axe des z?", S`$\vec r=s[0,0,1]+t[1,1,0]$`, [S`$\vec r=[1,0,0]+s[0,0,1]+t[0,1,0]$`, S`$\vec r=s[1,0,0]+t[0,1,0]$`, S`$\vec r=[0,0,1]+s[1,0,0]+t[0,1,0]$`], "Il passe par l'origine et contient k."),
  num(S`Le point $(0,0,5)$ appartient à $\vec r=[0,0,1]+s[1,0,0]+t[0,0,2]$. Trouve $t$.`, 2, "1 + 2t = 5."),
  num("Tous les points du plan passant par (1, 0, 0), (0, 1, 0) et (0, 0, 1) (illustré) ont la même valeur de x + y + z. Quelle est-elle?", 1, "Vérifie n'importe quel sommet.", vdoc(merge(V3, axes3(4.4), { polys: [tri3(2, 2, 2)] }, { texts: [{ x: 3.4, y: 3.8, t: "dessiné à l'échelle 2", color: "gray" }] }))),
  tf("Trois points différents de l'axe des x déterminent un plan unique.", false, "Ils sont colinéaires."),
  num("Un plan doit contenir une droite donnée et un point situé hors de cette droite. En plus de la direction de la droite, combien d'autres vecteurs directeurs faut-il?", 1, "Le vecteur qui va de la droite au point."),
  num(S`Le plan $\vec r=s[1,0,0]+t[0,1,2]$ rencontre la droite $x=0$, $z=6$. Trouve l'ordonnée de ce point.`, 3, "z = 2t = 6, donc y = t = 3."),
  mc("Laquelle est une équation vectorielle du plan x = y?", S`$\vec r=s[1,1,0]+t[0,0,1]$`, [S`$\vec r=s[1,0,0]+t[0,1,0]$`, S`$\vec r=s[1,-1,0]+t[0,0,1]$`, S`$\vec r=t[1,1,1]$`], "Points dont x et y sont égaux, z quelconque."),
  num(S`Combien de points le plan $\vec r=s\vec i+t\vec j$ et la droite $\vec r=[0,0,1]+u[1,1,1]$ ont-ils en commun?`, 1, "z = 1 + u = 0 pour u = −1."),
];

// 8.3 Propriétés des plans — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, merge, patch3, tri3 } from "../../mcv4u-ch8/vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
const easy = [
  mc(S`Lequel est une normale à $3x-2y+z=4$?`, S`$[3,-2,1]$`, [S`$[3,-2,4]$`, S`$[-2,1,4]$`, S`$[1,-2,3]$`], "Coefficients de x, y, z."),
  num(S`Le plan $x+y+z=D$ passe par $(1,2,3)$. Trouve $D$.`, 6, "1 + 2 + 3."),
  num(S`Trouve la cote à l'origine (intersection avec l'axe des z) de $2x+y+5z=10$.`, 2, "x = y = 0."),
  num(S`Trouve l'abscisse à l'origine (intersection avec l'axe des x) de $2x+y+5z=10$.`, 5, "y = z = 0."),
  tf("Des plans parallèles ont des normales parallèles.", true, "Même orientation."),
  tf(S`Les plans $x+y=1$ et $x+y=5$ sont parallèles.`, true, "Même normale [1, 1, 0], constantes différentes."),
  num(S`Trouve la distance de l'origine au plan $z=7$.`, 7, "7 unités directement vers le haut."),
  mc("Quel plan est perpendiculaire à l'axe des z?", S`$z=3$`, [S`$x=3$`, S`$x+y=3$`, S`$y=z$`], "Sa normale est k."),
  fill("Un vecteur perpendiculaire à un plan est appelé une ___ au plan.", ["normale", "Normale", "vecteur normal", "normal"], "n = [A, B, C]."),
  num(S`Trouve le produit scalaire des normales de $2x+y-z=0$ et de $x-y+z=3$.`, 0, "2 − 1 − 1 : les plans sont perpendiculaires."),
  num("Le plan illustré coupe les axes en 3, 2 et 6. Quelle est sa cote à l'origine?", 6, "Lis l'axe des z.", vdoc(merge(V3, axes3(4.8), { polys: [tri3(3, 2, 4.2)] }, { points: [pt(3, 0, 0, "3", -14, 12), pt(0, 2, 0, "2", 2, 16), pt(0, 0, 4.2, "6 (échelle réduite)", 8, 0)] }))),
  num(S`Le plan de normale $[1,0,0]$ passant par $(4,1,1)$ est $x=D$. Trouve $D$.`, 4, "x = 4."),
  mc(S`Lequel est une normale au plan $y=2$?`, S`$[0,1,0]$`, [S`$[0,2,0]$ seulement`, S`$[1,0,0]$`, S`$[0,0,1]$`], "Coefficients 0, 1, 0."),
  tf("Tout multiple scalaire non nul d'une normale est aussi une normale.", true, "Même direction ou direction opposée."),
  num(S`Trouve l'angle entre les plans $x=0$ et $z=0$ (en degrés).`, 90, "Normales i et k."),
  num(S`Trouve l'ordonnée à l'origine (intersection avec l'axe des y) de $4x-2y+z=8$.`, -4, "−2y = 8."),
  mc("Quel est le plan passant par l'origine de normale [1, 2, 3]?", S`$x+2y+3z=0$`, [S`$x+2y+3z=1$`, S`$x+y+z=6$`, S`$3x+2y+z=0$`], "D = 0 pour l'origine."),
  mc("Dans la figure, le vecteur vert est une normale. Quel lien a-t-il avec le plan?", "il est perpendiculaire à tous les vecteurs du plan", ["il est situé dans le plan", "il est parallèle à l'axe des x", "sa longueur est la distance du plan à l'origine"], "Définition d'une normale.", vdoc(merge(V3, axes3(4.6), { polys: [tri3(4, 3, 2)] }, { arrows: [{ from: p3(4 / 3, 1, 2 / 3), to: p3(4 / 3 + 0.9, 1 + 1.2, 2 / 3 + 1.8), vl: "n", color: "green", off: -16 }] }))),
  num(S`Trouve la distance de l'origine au plan $x+y+z=3$ (au centième près).`, 1.73, "3/√3.", null, 0.01),
  tf(S`$2x+4y-6z=2$ et $x+2y-3z=1$ représentent le même plan.`, true, "Une équation est le double de l'autre."),
];
const medium = [
  num(S`Le plan passant par $(1,-1,2)$ de normale $[2,3,-1]$ est $2x+3y-z=D$. Trouve $D$.`, -3, "2 − 3 − 2."),
  num(S`Une équation cartésienne de $\vec r=s[1,0,1]+t[0,1,1]$ est $x+y+cz=0$. Trouve $c$.`, -1, "Normale [−1, −1, 1], ou [1, 1, −1]."),
  num(S`Trouve l'angle entre $x+y=3$ et $x-y=1$ (en degrés).`, 90, "1 − 1 = 0."),
  num(S`Trouve l'angle entre $z=0$ et $y+z=1$ (en degrés).`, 45, "Normales [0, 0, 1] et [0, 1, 1]."),
  num(S`Trouve la distance de $(1,2,3)$ au plan $2x-y+2z=3$.`, 1, "|2 − 2 + 6 − 3| / 3."),
  num(S`Trouve la distance entre $x+2y+2z=2$ et $x+2y+2z=11$.`, 3, "|11 − 2| / 3."),
  mc(S`Quel plan passant par l'origine est parallèle à $3x-y+z=4$?`, S`$3x-y+z=0$`, [S`$x-3y+z=0$`, S`$3x+y+z=0$`, S`$3x-y+z=4$`], "Même normale, D = 0."),
  num(S`Trouve $k$ pour que $kx+y-z=2$ soit perpendiculaire à $x+2y+3z=0$.`, 1, "k + 2 − 3 = 0."),
  mc("Le plan illustré coupe les axes en 2, 4 et 4. Quelle est son équation?", S`$2x+y+z=4$`, [S`$x+2y+2z=4$`, S`$2x+4y+4z=1$`, S`$x+y+z=10$`], "x/2 + y/4 + z/4 = 1, multiplié par 4.", vdoc(merge(V3, axes3(4.8), { polys: [tri3(2, 4, 4)] }, { points: [pt(2, 0, 0, "2", -14, 12), pt(0, 4, 0, "4", 2, 16), pt(0, 0, 4, "4", 8, 0)] }))),
  num(S`Trouve l'angle entre $2x-y+z=1$ et $x+y+2z=0$ (en degrés).`, 60, "cos θ = 3/6."),
  tf(S`Le plan $x+2y+3z=6$ passe par $(1,1,1)$.`, true, "1 + 2 + 3 = 6."),
  num(S`Un plan parallèle à $2x-y+2z=5$ est situé à 3 unités de celui-ci, du côté opposé à l'origine. Son équation est $2x-y+2z=D$. Trouve $D$.`, 14, "D = 5 + 3 × 3."),
  num(S`Trouve la norme de la normale $[2,-3,6]$.`, 7, "√(4 + 9 + 36)."),
  mc("Quel plan passe par (0, 0, 0), (1, 0, 0) et (0, 1, 1)?", S`$y=z$`, [S`$x=0$`, S`$x+y+z=0$`, S`$z=0$`], "Normale [1, 0, 0] × [0, 1, 1] = [0, −1, 1]."),
  num(S`Le plan $2x+y+z=4$ rencontre l'axe des z en $(0,0,c)$. Trouve $c$.`, 4, "x = y = 0."),
  num("Trouve la distance de l'origine au plan x + y + z = 6 illustré (au centième près).", 3.46, "6/√3.", vdoc(merge(V3, axes3(4.8), { polys: [tri3(4.5, 4.5, 4.5)] }, { texts: [{ x: 4, y: 4.6, t: "x + y + z = 6 (échelle réduite)", color: "gray" }] })), 0.01),
  tf("Des plans perpendiculaires ont des normales perpendiculaires.", true, "L'angle entre deux plans est l'angle entre leurs normales."),
  num(S`Trouve l'angle entre $x+y+z=0$ et le plan xy (en degrés, au centième près).`, 54.74, "cos θ = 1/√3.", null, 0.01),
  num(S`Trouve la distance de $(3,0,0)$ au plan $x=1$.`, 2, "3 − 1."),
  mc(S`Quel plan est perpendiculaire à $2x+3y-z=0$?`, S`$x-y-z=4$`, [S`$2x+3y-z=4$`, S`$x+y+z=0$`, S`$4x+6y-2z=1$`], "2 − 3 + 1 = 0."),
];
export { easy as E, medium as M };

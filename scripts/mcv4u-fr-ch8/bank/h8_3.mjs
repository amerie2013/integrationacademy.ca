// 8.3 Propriétés des plans — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, merge, patch3, tri3 } from "../../mcv4u-ch8/vecfig.mjs";
import { TITLE } from "../l8_3.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
export const TOPIC = TITLE;
export const Q = [
  num("Trouve la distance de l'origine au plan passant par (1, 0, 0), (0, 2, 0) et (0, 0, 3) (au centième près).", 0.86, "6x + 3y + 2z = 6 : 6/7.", null, 0.01),
  mc("Quel plan passe par (1, 1, 1) et est perpendiculaire à la fois à x + y = 0 et à y + z = 0?", S`$x-y+z=1$`, [S`$x+y+z=3$`, S`$x+y=2$`, S`$x-z=0$`], "Normale [1, 1, 0] × [0, 1, 1] = [1, −1, 1]."),
  num("Trouve la distance de P(3, 3, 3) au plan x + y + z = 3 illustré (au centième près).", 3.46, "|9 − 3| / √3.", vdoc(merge(V3, axes3(4.6), { polys: [tri3(3, 3, 3)] }, { points: [pt(3, 3, 3, "P(3, 3, 3)")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6 } })), 0.01),
  num(S`Le plan $x+2y-2z=D$ est à 2 unités de $(1,1,1)$. Trouve la plus grande valeur possible de $D$.`, 7, "|1 − D| / 3 = 2."),
  num(S`Trouve l'angle entre $3x+4z=0$ et $4x-3z=1$ (en degrés).`, 90, "12 − 12 = 0."),
  mc(S`Lequel est une normale à $\vec r=[1,1,1]+s[1,2,0]+t[0,1,2]$?`, S`$[4,-2,1]$`, [S`$[1,2,0]$`, S`$[1,3,2]$`, S`$[2,-1,4]$`], "[1, 2, 0] × [0, 1, 2]."),
  num(S`Le plan $\vec r=[1,1,1]+s[1,2,0]+t[0,1,2]$ a pour équation $4x-2y+z=D$. Trouve $D$.`, 3, "4 − 2 + 1."),
  tf("La distance de P à un plan est égale à |n · (P − Q)| / |n| pour n'importe quel point Q du plan.", true, "C'est la longueur de la projection sur n."),
  num("Trouve la distance entre les plans parallèles 2x + y + 2z = 3 et 2x + y + 2z = 12 (illustrés).", 3, "|12 − 3| / 3.", vdoc(merge(V3, axes3(4.6), { polys: [{ ...patch3([0.5, 0.5, 0.75], [1, 0, -1], [1, -2, 0], 0.9), op: 0.5 }, { ...patch3([2, 2, 3], [1, 0, -1], [1, -2, 0], 0.9, "#dcfce7", "green"), op: 0.5 }] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }))),
  num(S`Trouve $k$ pour que $kx+2y+4z=1$ soit parallèle à $x+y+2z=5$.`, 2, "[k, 2, 4] = 2[1, 1, 2]."),
  num(S`Le plan passant par $(2,1,3)$ et parallèle au plan xz est $y=D$. Trouve $D$.`, 1, "y = 1."),
  mc("Quel plan contient (1, 0, 0) et (0, 1, 0) et est parallèle à l'axe des z?", S`$x+y=1$`, [S`$x+y+z=1$`, S`$z=0$`, S`$x-y=1$`], "Normale perpendiculaire à k et à [−1, 1, 0].", vdoc(merge(V3, axes3(4.4), { polys: [patch3([0.5, 0.5, 1.6], [1, -1, 0], [0, 0, 1], 1.5)] }, { points: [pt(1, 0, 0, "(1, 0, 0)", -70, 14), pt(0, 1, 0, "(0, 1, 0)", 6, 16)] }))),
  num(S`Trouve l'angle entre $x+y+z=1$ et $x-2y+z=0$ (en degrés).`, 90, "1 − 2 + 1 = 0."),
  num(S`Trouve la distance de $(2,-3,4)$ au plan xy.`, 4, "|z|."),
  num("Trouve la distance de l'origine au plan 2x + 2y + z = 9 illustré.", 3, "9/3.", vdoc(merge(V3, axes3(4.8), { polys: [tri3(4.5, 4.5, 9 * 0.5)] }, { texts: [{ x: 3.6, y: 4.6, t: "coupe les axes en 4.5, 4.5, 9 (échelle réduite)", color: "gray" }] }))),
  tf(S`Des plans de normales $[1,2,3]$ et $[3,2,1]$ sont parallèles.`, false, "Les normales ne sont pas des multiples l'une de l'autre."),
  num("Combien de plans passent par un point donné et sont perpendiculaires à une droite donnée?", 1, "La direction de la droite est la normale."),
  num(S`Trouve $D$ pour que $x-y+z=D$ contienne la droite $\vec r=[1,0,2]+t[1,1,0]$.`, 3, "La direction est perpendiculaire à la normale; substitue (1, 0, 2)."),
  mc("L'angle entre deux plans est égal à :", "l'angle aigu entre leurs normales", ["l'angle entre leurs points d'intersection avec les axes", "toujours 90°", "l'angle entre une normale et l'autre plan"], "cos θ = |n₁ · n₂| / (|n₁||n₂|)."),
  num(S`Trouve la distance entre les plans $3x-4y=10$ et $3x-4y=-5$.`, 3, "|10 − (−5)| / 5."),
];

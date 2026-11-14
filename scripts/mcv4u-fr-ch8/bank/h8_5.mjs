// 8.5 Intersections de droites et de plans — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3, patch3 } from "../../mcv4u-ch8/vecfig.mjs";
import { TITLE } from "../l8_5.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
export const TOPIC = TITLE;
export const Q = [
  num(S`Trouve le symétrique de $(1,2,3)$ par rapport au plan $x+y+z=0$. Donne la coordonnée x de l'image.`, -3, "Pied en t = −2 : (−1, 0, 1); image en t = −4.", vdoc(merge(V3, axes3(4.4), { polys: [patch3([-1, 0, 1], [1, -1, 0], [1, 0, -1], 1.4)] }, { segs: [{ pts: [p3(1, 2, 3), p3(-3, -2, -1)], color: "red", dash: true, w: 2.2 }] }, { points: [pt(1, 2, 3, "(1, 2, 3)"), pt(-1, 0, 1, "pied", 8, 14), pt(-3, -2, -1, "image", -50, 14)] }, { view: { xmin: -4.6, xmax: 5, ymin: -3, ymax: 5.4 } }))),
  num(S`La droite qui passe par $(1,0,0)$ et qui est perpendiculaire à $2x-y+2z=11$ rencontre le plan. Trouve la coordonnée y en ce point.`, -1, "(1 + 2t, −t, 2t) : 9t + 2 = 11, t = 1."),
  num("Trouve l'angle entre une droite de vecteur directeur [1, 2, 2] et le plan x + y = 0 (illustré) (degrés).", 45, "sin φ = 3/(3√2).", vdoc(merge(V3, axes3(4.4), { polys: [patch3([1, -1, 1.5], [1, -1, 0], [0, 0, 1], 1.6)] }, { segs: [line3([0, 0, 0], [1, 2, 2], -0.5, 1.4, "red", 2.8)] }))),
  num(S`Trouve $k$ pour que $\vec r=[1,k,1]+t[1,0,-1]$ soit contenue dans $x+y+z=4$.`, 2, "m · n = 0; ensuite 1 + k + 1 = 4."),
  num(S`Trouve la distance de $(2,1,-1)$ au plan qui passe par $(1,0,0)$, $(0,1,0)$, $(0,0,1)$ (2 décimales).`, 0.58, "x + y + z = 1 : |2 + 1 − 1 − 1| / √3.", null, 0.005),
  tf("Si une droite est perpendiculaire à un plan, son vecteur directeur est parallèle au vecteur normal du plan.", true, "Les deux sont perpendiculaires au plan."),
  num(S`Pour quelle valeur de $t$ la droite $\vec r=t[3,-1,2]$ rencontre-t-elle $2x+y+z=14$?`, 2, "6t − t + 2t = 14."),
  mc("Une droite qui ne rencontre jamais un plan est forcément :", "parallèle au plan", ["perpendiculaire au plan", "gauche par rapport au plan", "plus longue que le plan"], "Sinon, l'équation en t aurait une solution."),
  num("Trouve la distance entre la droite r = [0, 0, 4] + t[1, 0, 0] et le plan z = 1 (illustré).", 3, "La droite reste à la hauteur 4.", vdoc(merge(V3, axes3(4.4), { polys: [{ ...patch3([1.5, 1.5, 1], [1, 0, 0], [0, 1, 0], 1.6), op: 0.6 }] }, { segs: [line3([0, 0, 4], [1, 0, 0], -1.5, 4.5, "red", 2.8)] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6 } }))),
  num(S`Trouve l'angle entre une droite de vecteur directeur $[1,-1,2]$ et le plan $2x+y+z=0$ (degrés).`, 30, "sin φ = 3/6."),
  num(S`Trouve la distance de l'origine au plan qui passe par $(2,0,0)$, $(0,2,0)$, $(0,0,2)$ (2 décimales).`, 1.15, "x + y + z = 2 : 2/√3.", null, 0.01),
  tf("Le pied de la perpendiculaire abaissée de P est le point du plan le plus proche de P.", true, "Tout autre point est plus éloigné (Pythagore)."),
  num(S`Trouve la coordonnée x du point où $\vec r=[1,1,1]+t[1,1,1]$ rencontre $x+y+z=12$.`, 4, "3 + 3t = 12, t = 3."),
  mc(S`Si $P+t_0\vec n$ est le pied de la perpendiculaire abaissée de $P$, le symétrique de $P$ par rapport au plan est :`, S`$P+2t_0\vec n$`, [S`$P-t_0\vec n$`, S`$2P$`, S`$t_0\vec n$`], "On va aussi loin au-delà du pied."),
  num("Trouve le symétrique de (3, 0, 0) par rapport au plan x = 1 (illustré). Donne la coordonnée x de l'image.", -1, "3 est à 2 unités au-delà du plan; l'image est à 2 unités de l'autre côté.", vdoc(merge(V3, axes3(4.4), { polys: [{ ...patch3([1, 1.5, 1.5], [0, 1, 0], [0, 0, 1], 1.5), op: 0.6 }] }, { points: [pt(3, 0, 0, "(3, 0, 0)", -70, 14)] }))),
  num(S`Trouve la distance entre la droite $\vec r=[1,2,3]+t[1,1,-2]$ et le plan $x+y+z=0$ (2 décimales).`, 3.46, "m · n = 0, donc parallèles; |6| / √3.", null, 0.01),
  num(S`La droite $x=2+t$, $y=1-t$, $z=2t$ rencontre $x+y+z=7$. Trouve la coordonnée z.`, 4, "3 + 2t = 7."),
  tf("Une substitution qui donne 0t = 7 signifie que la droite est contenue dans le plan.", false, "Aucune valeur de t ne convient : la droite est parallèle et ne touche pas le plan."),
  num(S`Trouve la distance de $(1,-1,2)$ à $3x-4z=0$.`, 1, "|3 − 8| / 5."),
  mc("L'angle φ entre une droite et un plan vérifie :", S`$\sin\phi=\frac{|\vec m\cdot\vec n|}{|\vec m||\vec n|}$`, [S`$\cos\phi=\frac{|\vec m\cdot\vec n|}{|\vec m||\vec n|}$`, S`$\tan\phi=\vec m\cdot\vec n$`, S`$\phi=90^\circ$ toujours`], "C'est 90° moins l'angle avec le vecteur normal."),
];

// 7.5 Le produit vectoriel et ses propriétés — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, merge } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const para = (a, b) => ({ polys: [{ pts: [p3(0, 0, 0), p3(...a), p3(...add3(a, b)), p3(...b)], fill: "#ede9fe", stroke: "gray" }] });
const easy = [
  mc(S`$\vec i\times\vec j=$`, S`$\vec k$`, [S`$-\vec k$`, S`$\vec 0$`, "1"], "Règle de la main droite."),
  mc(S`$\vec j\times\vec i=$`, S`$-\vec k$`, [S`$\vec k$`, S`$\vec 0$`, S`$\vec i$`], "Inverser l'ordre change le signe."),
  num(S`Trouve la composante en x de $[1,0,0]\times[0,1,0]$.`, 0, "Le résultat est [0, 0, 1]."),
  num(S`Trouve la composante en z de $[2,0,0]\times[0,3,0]$.`, 6, "2 × 3."),
  num(S`$|\vec a|=2$, $|\vec b|=5$, vecteurs perpendiculaires. Trouve $|\vec a\times\vec b|$.`, 10, "sin 90° = 1."),
  num(S`$\vec a$ et $\vec b$ ont la même direction et le même sens, $|\vec a|=2$, $|\vec b|=5$. Trouve $|\vec a\times\vec b|$.`, 0, "sin 0° = 0."),
  tf(S`$\vec a\times\vec b=\vec b\times\vec a$.`, false, "Ils sont opposés."),
  tf(S`$\vec a\times\vec b$ est perpendiculaire à $\vec a$.`, true, "Il est perpendiculaire à a et à b."),
  fill("Le produit vectoriel de deux vecteurs colinéaires est le vecteur ___.", ["nul", "Nul", "zéro", "zero"], "sin 0° = sin 180° = 0."),
  num(S`$|\vec a|=4$, $|\vec b|=3$, angle de $30^\circ$. Trouve $|\vec a\times\vec b|$.`, 6, "12 × ½."),
  num("Trouve l'aire du parallélogramme formé par [3, 0, 0] et [0, 2, 0] (illustrés).", 6, "3 × 2.", vdoc(merge(V3, axes3(4.4), para([3, 0, 0], [0, 2, 0]), { arrows: [{ from: [0, 0], to: p3(3, 0, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 2, 0), vl: "b", color: "blue", off: -16 }] }))),
  num(S`Trouve la composante en z de $[1,2,0]\times[2,1,0]$.`, -3, "1(1) − 2(2)."),
  mc("Le produit vectoriel est défini pour :", "des vecteurs de l'espace", ["des vecteurs du plan seulement", "des scalaires", "un nombre quelconque de vecteurs à la fois"], "Il exige trois composantes."),
  mc(S`$(2\vec a)\times\vec b=$`, S`$2(\vec a\times\vec b)$`, [S`$4(\vec a\times\vec b)$`, S`$\vec a\times\vec b$`, S`$-2(\vec a\times\vec b)$`], "Les scalaires se mettent en facteur."),
  num(S`Trouve $|\vec i\times\vec j|$.`, 1, "|k| = 1."),
  num(S`Trouve la composante en x de $[0,1,0]\times[0,0,1]$.`, 1, "j × k = i."),
  num(S`Trouve la composante en y de $[0,0,1]\times[1,0,0]$.`, 1, "k × i = j."),
  num("Trouve l'aire du triangle de sommets O, (4, 0, 0) et (0, 3, 0) (illustré).", 6, "La moitié de 12.", vdoc(merge(V3, axes3(4.8), { polys: [{ pts: [p3(0, 0, 0), p3(4, 0, 0), p3(0, 3, 0)], fill: "#ede9fe", stroke: "violet" }] }))),
  mc(S`$\vec a\times\vec a=$`, S`$\vec 0$`, [S`$|\vec a|^2$`, S`$2\vec a$`, "1"], "L'angle est de 0°."),
  num(S`Deux vecteurs unitaires perpendiculaires $\vec u$ et $\vec v$. Trouve $|\vec u\times\vec v|$.`, 1, "1 × 1 × 1."),
];
const medium = [
  num(S`Trouve la composante en x de $[1,2,3]\times[0,1,1]$.`, -1, "2(1) − 3(1)."),
  num(S`Trouve la composante en z de $[2,0,1]\times[1,1,0]$.`, 2, "2(1) − 0(1)."),
  num(S`Trouve $|[1,1,0]\times[0,1,1]|$ (2 décimales).`, 1.73, "[1, −1, 1].", null, 0.01),
  num(S`Trouve l'aire du parallélogramme formé par $[2,1,0]$ et $[1,3,0]$.`, 5, "[0, 0, 5]."),
  num(S`Trouve l'aire du triangle de sommets $O$, $(1,0,2)$ et $(0,2,1)$ (2 décimales).`, 2.29, "La moitié de |[−4, −1, 2]|.", null, 0.01),
  num(S`$|\vec a\times\vec b|=10$, $|\vec a|=4$, $|\vec b|=5$, et l'angle est aigu. Trouve-le (en degrés).`, 30, "sin θ = ½."),
  tf(S`$(\vec a\times\vec b)\cdot\vec a=0$ pour tous les vecteurs.`, true, "a × b est perpendiculaire à a."),
  num(S`Trouve $k$ tel que $[k,2,4]\times[1,1,2]=\vec 0$.`, 2, "[k, 2, 4] = 2[1, 1, 2]."),
  num("Trouve la composante en x de a × b pour a = [0, 3, 0] et b = [0, 0, 2] (illustrés).", 6, "3(2) − 0(0).", vdoc(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(0, 3, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 0, 2), vl: "b", color: "blue", off: -16 }, { from: [0, 0], to: p3(3, 0, 0), color: "red", label: "a × b (réduit)", off: 16 }] }))),
  mc(S`$(\vec a+\vec b)\times\vec c=$`, S`$\vec a\times\vec c+\vec b\times\vec c$`, [S`$\vec c\times\vec a+\vec c\times\vec b$`, S`$\vec a\times\vec b\times\vec c$`, S`$\vec 0$`], "Distributif."),
  num(S`$|\vec a|=2$ et $|\vec b|=5$. Trouve $|\vec a\times\vec b|^2+(\vec a\cdot\vec b)^2$.`, 100, "|a|²|b|²."),
  num(S`Trouve la composante en z de $[3,-1,2]\times[1,4,0]$.`, 13, "3(4) − (−1)(1)."),
  num(S`Trouve la composante en y de $[3,-1,2]\times[1,4,0]$.`, 2, "2(1) − 3(0)."),
  num(S`Trouve la composante en x de $[3,-1,2]\times[1,4,0]$.`, -8, "(−1)(0) − 2(4)."),
  tf(S`$(\vec a\times\vec b)\times\vec c=\vec a\times(\vec b\times\vec c)$ pour tous les vecteurs.`, false, "Le produit vectoriel n'est pas associatif."),
  num("Trouve l'aire du parallélogramme formé par [3, 1, 0] et [1, 3, 0] (illustrés).", 8, "[0, 0, 9 − 1].", vdoc(merge(V3, axes3(4.6), para([3, 1, 0], [1, 3, 0]), { arrows: [{ from: [0, 0], to: p3(3, 1, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(1, 3, 0), vl: "b", color: "blue", off: -16 }] }))),
  num(S`Trouve la composante en z du vecteur unitaire perpendiculaire à $\vec i$ et à $\vec j$ dont la composante en z est positive.`, 1, "C'est k."),
  num(S`Trouve $|[1,1,1]\times[1,1,1]|$.`, 0, "Le produit vectoriel d'un vecteur avec lui-même."),
  mc(S`$|\vec a\times\vec b|$ est égal à :`, "l'aire du parallélogramme formé par a et b", ["le volume d'une boîte", "la norme de a + b", "le produit scalaire de a et de b"], "|a||b| sin θ."),
  num(S`$|\vec a\times\vec b|=14$. Trouve l'aire du triangle dont deux côtés issus d'un même sommet sont $\vec a$ et $\vec b$.`, 7, "La moitié."),
];
export { easy as E, medium as M };

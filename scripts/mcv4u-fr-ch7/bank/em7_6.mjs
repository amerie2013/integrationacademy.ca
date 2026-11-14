// 7.6 Applications du produit scalaire et du produit vectoriel — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, pol, p3, axes3, box3, merge } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const easy = [
  num("Une force de 40 N agit perpendiculairement à une clé de 0.3 m. Trouve le moment de force (N·m).", 12, "0.3 × 40."),
  num("Une force pousse directement le long du manche d'une clé, vers le boulon. Trouve le moment de force (N·m).", 0, "L'angle entre r et F est de 180°, et sin 180° = 0."),
  num(S`Trouve le volume de la boîte engendrée par $[2,0,0]$, $[0,2,0]$, $[0,0,2]$.`, 8, "2 × 2 × 2."),
  num(S`Trouve le travail effectué par $\vec F=[1,2,3]$ sur $\vec d=[1,1,1]$.`, 6, "1 + 2 + 3."),
  num(S`Trouve l'aire du parallélogramme engendré par $[2,0,0]$ et $[0,5,0]$.`, 10, "2 × 5."),
  tf("Pour une force et une clé données, le moment de force est le plus grand lorsque la force est perpendiculaire au manche.", true, "sin 90° = 1."),
  mc("Le moment de force produit par une force F appliquée à la position r par rapport à un pivot est :", S`$\vec r\times\vec F$`, [S`$\vec r\cdot\vec F$`, S`$\vec F\times\vec r$`, S`$|\vec r|+|\vec F|$`], "Un produit vectoriel, r en premier."),
  num("Le parallélogramme engendré par deux vecteurs a une aire de 12. Trouve l'aire du triangle qu'ils forment.", 6, "La moitié."),
  fill("Trois vecteurs situés dans un même plan sont dits ___.", ["coplanaires", "coplanaire", "coplanar"], "Leur produit mixte est nul."),
  num("Une force de 20 N agit à 30° d'une clé de 0.5 m. Trouve le moment de force (N·m).", 5, "0.5 × 20 × ½."),
  num("Une force de 25 N est appliquée perpendiculairement à l'extrémité d'une clé de 0.4 m (illustré). Trouve le moment de force (N·m).", 10, "0.4 × 25.", vdoc({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.5, 0], vl: "r", label: "0.4 m", off: 16, w: 5 }, { from: [4.5, 0], to: [4.5, 3.2], vl: "F", label: "25 N", color: "red", off: -16 }] })),
  num(S`Trouve $\vec i\cdot(\vec j\times\vec k)$.`, 1, "j × k = i."),
  num(S`Une force $\vec F=[0,0,10]$ N soulève un objet selon $\vec d=[0,0,3]$ m. Trouve le travail (J).`, 30, "10 × 3."),
  tf(S`Le produit mixte $\vec a\cdot(\vec b\times\vec c)$ peut être négatif.`, true, "Le volume est sa valeur absolue."),
  num(S`Trouve le volume du parallélépipède engendré par $\vec i$, $\vec j$ et $2\vec k$.`, 2, "1 × 1 × 2."),
  mc("Le volume du parallélépipède engendré par a, b, c est :", S`$|\vec a\cdot(\vec b\times\vec c)|$`, [S`$|\vec a\times\vec b|$`, S`$\vec a\cdot\vec b\cdot\vec c$`, S`$|\vec a|+|\vec b|+|\vec c|$`], "Aire de la base multipliée par la hauteur."),
  num(S`Trouve $|\vec r\times\vec F|$ pour $\vec r=[0.2,0,0]$ m et $\vec F=[0,10,0]$ N.`, 2, "0.2 × 10."),
  num("Trouve le volume de la boîte de 1 sur 2 sur 3 illustrée.", 6, "Le produit mixte de ses arêtes.", vdoc(merge(V3, axes3(4.6), { segs: box3(1, 2, 3, "violet") }))),
  num(S`Trouve le travail effectué par $\vec F=[5,5,0]$ sur $\vec d=[2,-2,0]$.`, 0, "10 − 10."),
  num("Le produit vectoriel de deux vecteurs côtés d'un triangle a une norme de 9. Trouve l'aire du triangle.", 4.5, "La moitié.", null, 0.001),
];
const medium = [
  num("Une force de 60 N agit sur une clé de 0.35 m à 50° du manche. Trouve le moment de force (N·m, 2 décimales).", 16.09, "0.35 × 60 × sin 50°.", null, 0.01),
  num(S`Trouve la composante en z de $\vec\tau=\vec r\times\vec F$ pour $\vec r=[0,0.5,0]$ m et $\vec F=[10,0,0]$ N.`, -5, "0(0) − 0.5(10)."),
  num(S`Trouve le volume du parallélépipède engendré par $[1,0,0]$, $[1,2,0]$, $[1,1,3]$.`, 6, "[1, 2, 0] × [1, 1, 3] = [6, −3, −1]."),
  mc(S`$[1,1,0]$, $[0,1,1]$ et $[1,2,1]$ sont-ils coplanaires?`, "oui", ["non", "seulement s'ils sont perpendiculaires", "on ne peut pas le déterminer"], "Le troisième est la somme des deux premiers; le produit mixte est nul."),
  num("Trouve l'aire du triangle de sommets (0, 0, 0), (1, 1, 0), (0, 1, 1) (2 décimales).", 0.87, "La moitié de |[1, −1, 1]|.", null, 0.005),
  num(S`$\vec F=[3,-1,2]$ N déplace un objet de $(1,1,1)$ à $(4,3,0)$. Trouve le travail (J).`, 5, "d = [3, 2, −1] : 9 − 2 − 2."),
  num("Une force de 40 N sur une clé de 0.5 m donne un moment de force de 10 N·m. Trouve l'angle aigu entre la force et le manche (degrés).", 30, "sin θ = ½."),
  tf("Doubler la longueur d'une clé double le moment de force produit par la même force au même angle.", true, "Le moment de force est proportionnel à |r|."),
  num("Trouve le volume du parallélépipède engendré par a = [2, 0, 0], b = [1, 3, 0], c = [0, 0, 2] (illustré).", 12, "b × c = [6, −2, 0]; a · = 12.", vdoc(merge(V3, axes3(4.6), { arrows: [{ from: [0, 0], to: p3(2, 0, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(1, 3, 0), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(0, 0, 2), vl: "c", color: "green", off: -16 }] }))),
  num("Un parallélépipède a un volume de 20 et une base d'aire 5. Trouve sa hauteur.", 4, "20 ÷ 5."),
  mc("Le vecteur moment de force pointe :", "le long de l'axe de rotation", ["le long de la force", "le long du manche de la clé", "vers la personne"], "Il est perpendiculaire à la fois à r et à F."),
  num(S`Trouve $k$ pour que $[1,0,1]$, $[0,1,1]$ et $[k,1,0]$ soient coplanaires.`, -1, "[0, 1, 1] × [k, 1, 0] = [−1, k, −k]; −1 − k = 0."),
  num("Un parallélépipède a un volume de 18. Un tétraèdre ayant les trois mêmes arêtes issues d'un sommet a un volume égal au sixième de celui-ci. Trouve ce volume.", 3, "18 ÷ 6."),
  num("Une force de 90 N agit sur une clé de 0.25 m à 120° du manche. Trouve le moment de force (N·m, 2 décimales).", 19.49, "0.25 × 90 × sin 120°.", null, 0.01),
  num("Trouve l'aire du triangle de sommets (2, 0, 0), (0, 2, 0), (0, 0, 2) (illustré) (2 décimales).", 3.46, "La moitié de |[4, 4, 4]|.", vdoc(merge(V3, axes3(4.4), { polys: [{ pts: [p3(2, 0, 0), p3(0, 2, 0), p3(0, 0, 2)], fill: "#ede9fe", stroke: "violet" }] })), 0.01),
  num(S`Une force constante $[2,3,1]$ déplace un objet de $(0,0,0)$ à $(1,0,0)$, puis à $(1,2,0)$. Trouve le travail total.`, 8, "Déplacement total [1, 2, 0]."),
  num("Quel travail effectue-t-on en soulevant une boîte de 50 N de 4 m verticalement (J)?", 200, "50 × 4."),
  tf(S`L'aire du triangle dont les côtés issus d'un sommet sont $\vec a$ et $\vec b$ est $|\vec a\times\vec b|$.`, false, "C'est la moitié de cette valeur."),
  mc("Quel produit donne le travail effectué par une force?", "le produit scalaire", ["le produit vectoriel", "le produit mixte", "la multiplication par un scalaire"], "W = F · d."),
  num(S`Trouve le volume du parallélépipède engendré par $[1,2,3]$, $[0,1,4]$, $[5,6,0]$.`, 1, "Produit mixte −24 + 40 − 15 = 1."),
];
export { easy as E, medium as M };

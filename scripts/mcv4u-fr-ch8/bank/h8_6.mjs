// 8.6 Intersections de plans — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3, patch3 } from "../../mcv4u-ch8/vecfig.mjs";
import { TITLE } from "../l8_6.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
export const TOPIC = TITLE;
export const Q = [
  num(S`Résous $2x+y-z=3$, $x-y+2z=0$, $3x+2y+z=5$. Trouve $y$.`, 1, "La solution unique est (1, 1, 0)."),
  num(S`Pour quelle valeur de $k$ les plans $x+y+z=3$, $x-y=1$, $2x+kz=4$ forment-ils un faisceau?`, 1, "La somme des deux premières équations est 2x + z = 4."),
  num("Les trois plans illustrés forment un prisme triangulaire. Quel est le produit mixte de leurs vecteurs normaux?", 0, "Les vecteurs normaux d'un prisme sont coplanaires.", vdoc(merge(V3, axes3(4.6), { polys: [patch3([1.5, 0, 0], [1, 0, 0], [0, 1.4, 0], 1.5, "#dbeafe", "blue", 0.45), patch3([1.5, 1, 1], [1, 0, 0], [0, 0.7, -0.7], 1.5, "#dcfce7", "green", 0.45), patch3([1.5, -1, 1], [1, 0, 0], [0, 0.7, 0.7], 1.5, "#fee2e2", "red", 0.45)] }))),
  num(S`Les plans $2x-y+z=5$ et $x+y-z=1$ se coupent selon une droite. Quelle est la coordonnée x de chacun de ses points?`, 2, "L'addition donne 3x = 6."),
  num(S`Trouve l'angle entre cette droite d'intersection (vecteur directeur $[0,1,1]$) et l'axe des z (degrés).`, 45, "cos θ = 1/√2."),
  tf(S`Trois plans dont les vecteurs normaux sont $[1,0,0]$, $[0,1,0]$ et $[1,1,0]$ peuvent se couper selon une droite.`, true, "Les vecteurs normaux sont coplanaires; un système compatible donne un faisceau."),
  num(S`Trouve la distance de l'origine à la droite d'intersection de $x=1$ et de $y=1$ (2 décimales).`, 1.41, "Le point le plus proche est (1, 1, 0).", null, 0.01),
  mc(S`$x+y+z=1$, $x+y+z=2$ et $x+y+z=3$ sont :`, "trois plans parallèles", ["un faisceau", "un prisme", "un point"], "Même vecteur normal, constantes différentes."),
  num("Deux plans parallèles sont tous deux coupés par un troisième plan (illustré). Combien de droites d'intersection sont formées?", 2, "Une avec chaque plan parallèle.", vdoc(merge(V3, axes3(4.6), { polys: [patch3([0.3, 0.3, 0.4], [1, -1, 0], [1, 0, -1], 1.5, "#dbeafe", "blue", 0.45), patch3([1, 1, 1], [1, -1, 0], [1, 0, -1], 1.5, "#dbeafe", "blue", 0.45), patch3([1, 0.75, 0.5], [1, 0, -1], [1, 1, 0], 1.2, "#dcfce7", "green", 0.45)] }))),
  num(S`Trouve $z$ dans la solution de $x+y=1$, $y+z=2$, $x+z=5$.`, 3, "x + y + z = 4, donc z = 4 − 1."),
  num(S`Pour quelle valeur de $k$ les plans $x+y=1$, $y+z=1$, $x+kz=0$ ne se coupent-ils pas en un seul point?`, -1, "Produit mixte k + 1."),
  tf("Une élimination qui donne 0 = 0 signifie toujours que les plans ont une droite commune.", false, "Ils pourraient aussi être tous le même plan."),
  num(S`Les plans $x=y$ et $y=2z$ se coupent selon une droite qui traverse $x+y+z=10$. Trouve la coordonnée x en ce point.`, 4, "x = y = 2z : 5z = 10."),
  mc("Trois plans dont les vecteurs normaux sont coplanaires, sans plans parallèles deux à deux, et dont le système est incompatible forment :", "un prisme triangulaire", ["un faisceau", "un point", "trois plans parallèles"], "Chaque paire se coupe selon une droite, mais il n'y a aucun point commun."),
  mc("Les plans y = 0 et z = 0 (illustrés) se coupent selon une droite de vecteur directeur :", S`$[1,0,0]$`, [S`$[0,1,0]$`, S`$[0,0,1]$`, S`$[1,1,1]$`], "[0, 1, 0] × [0, 0, 1] = [1, 0, 0].", vdoc(merge(V3, axes3(4.6), { polys: [{ ...patch3([1.5, 0, 1.5], [1, 0, 0], [0, 0, 1], 1.5), op: 0.45 }, { ...patch3([1.5, 1.5, 0], [1, 0, 0], [0, 1, 0], 1.5, "#dcfce7", "green"), op: 0.45 }] }, { segs: [line3([0, 0, 0], [1, 0, 0], -0.8, 3.6, "red", 3)] }))),
  num(S`Trouve la distance entre la droite verticale $x=1$, $y=2$ et l'axe des z (2 décimales).`, 2.24, "√(1 + 4).", null, 0.01),
  num("Combien de droites distinctes les trois plans d'un prisme triangulaire forment-ils, deux à deux?", 3, "Une pour chaque paire."),
  num(S`Résous $x+y+z=0$, $x+2y+3z=0$, $x+4y+9z=0$. Trouve $x$.`, 0, "Le produit mixte vaut 2 ≠ 0; la seule solution est donc (0, 0, 0)."),
  tf(S`Deux plans distincts dont les vecteurs normaux sont $[1,2,3]$ et $[2,4,6]$ se coupent selon une droite.`, false, "Vecteurs normaux parallèles : les plans sont parallèles."),
  num("Trouve l'angle entre les plans x + y = 1 et y + z = 2 illustrés (degrés).", 60, "cos θ = 1/2.", vdoc(merge(V3, axes3(4.6), { polys: [patch3([0.5, 0.5, 1], [1, -1, 0], [0, 0, 1], 1.5, "#dbeafe", "blue", 0.45), patch3([1, 1, 1], [1, 0, 0], [0, 1, -1], 1.5, "#dcfce7", "green", 0.45)] }))),
];

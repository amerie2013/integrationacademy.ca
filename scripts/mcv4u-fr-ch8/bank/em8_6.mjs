// 8.6 Intersections de plans — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3, patch3 } from "../../mcv4u-ch8/vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
const easy = [
  num(S`Trouve la coordonnée x du point commun à $x=1$, $y=2$, $z=3$.`, 1, "On la lit directement."),
  mc("Deux plans non parallèles se coupent selon :", "une droite", ["un point", "rien", "un plan"], "Vecteur directeur n₁ × n₂."),
  tf("Deux plans peuvent se couper en un seul point.", false, "Deux plans se coupent selon une droite, ne se coupent pas ou sont confondus."),
  num(S`Combien de points $x+y+z=1$ et $x+y+z=2$ ont-ils en commun?`, 0, "Parallèles et distincts."),
  mc(S`$2x+2y+2z=4$ et $x+y+z=2$ sont :`, "confondus", ["parallèles et distincts", "perpendiculaires", "sécants selon une droite"], "Une équation est le double de l'autre."),
  fill("Trois plans qui contiennent tous une même droite forment un ___ de plans.", ["faisceau", "sheaf"], "Comme les pages d'un livre."),
  tf("Trois plans peuvent n'avoir aucun point commun même si aucun d'eux n'est parallèle à un autre.", true, "Un prisme triangulaire."),
  num(S`Trouve la coordonnée z du point commun à $x+y+z=6$, $x=1$, $y=2$.`, 3, "1 + 2 + z = 6."),
  mc(S`Si $\vec n_1\cdot(\vec n_2\times\vec n_3)\ne0$, trois plans :`, "se coupent en un seul point", ["ont une droite commune", "n'ont aucun point commun", "sont confondus"], "Vecteurs normaux indépendants."),
  num(S`Trouve la coordonnée y du point commun à $x=0$, $y=x+2$, $z=0$.`, 2, "y = 0 + 2."),
  mc("Les trois plans de coordonnées (illustrés) se coupent :", "à l'origine", ["selon l'axe des x", "en aucun point", "au point (1, 1, 1)"], "x = y = z = 0.", vdoc(merge(V3, axes3(4.6), { polys: [{ ...patch3([1.5, 1.5, 0], [1, 0, 0], [0, 1, 0], 1.5), op: 0.4 }, { ...patch3([1.5, 0, 1.5], [1, 0, 0], [0, 0, 1], 1.5, "#dcfce7", "green"), op: 0.4 }, { ...patch3([0, 1.5, 1.5], [0, 1, 0], [0, 0, 1], 1.5, "#fee2e2", "red"), op: 0.4 }] }))),
  mc(S`Les plans $y=0$ et $z=0$ se coupent selon :`, "l'axe des x", ["l'axe des y", "l'axe des z", "l'origine seulement"], "Les points tels que y = z = 0."),
  tf("Obtenir 0 = 5 pendant l'élimination signifie que les plans n'ont aucun point commun.", true, "Le système est incompatible."),
  mc("Trois plans parallèles distincts ont :", "aucun point commun", ["un point commun", "une droite commune", "un plan commun"], "Ils ne se rencontrent jamais."),
  num(S`Sur la droite d'intersection de $x=2$ et de $y=3$, quelle est la coordonnée x de chaque point?`, 2, "x = 2 toujours."),
  num("Combien des configurations suivantes n'ont aucun point commun : trois plans parallèles, deux plans parallèles coupés par un troisième, un prisme triangulaire?", 3, "Les trois."),
  mc(S`Les plans $z=1$ et $z=2$ sont :`, "parallèles", ["perpendiculaires", "confondus", "sécants selon une droite"], "Même vecteur normal, constantes différentes."),
  mc("Les trois plans illustrés forment un prisme triangulaire. Ils se coupent :", "en aucun point commun", ["en un point", "selon une droite commune", "selon un plan commun"], "Chaque paire se coupe selon une droite; les trois droites sont parallèles.", vdoc(merge(V3, axes3(4.6), { polys: [patch3([1.5, 0, 0], [1, 0, 0], [0, 1.4, 0], 1.5, "#dbeafe", "blue", 0.45), patch3([1.5, 1, 1], [1, 0, 0], [0, 0.7, -0.7], 1.5, "#dcfce7", "green", 0.45), patch3([1.5, -1, 1], [1, 0, 0], [0, 0.7, 0.7], 1.5, "#fee2e2", "red", 0.45)] }))),
  num(S`Trouve la coordonnée y de la solution de $x+y=5$, $x-y=1$, $z=0$.`, 2, "x = 3, y = 2."),
  tf("Deux plans confondus ont une infinité de points communs.", true, "C'est le même plan."),
];
const medium = [
  num(S`Les plans $x+y+z=2$ et $x-y+z=0$ se coupent selon une droite. Quelle est la coordonnée y de chacun de ses points?`, 1, "Soustrais : 2y = 2."),
  num(S`Trouve la coordonnée x de la solution de $x+y+z=3$, $x-y+z=1$, $x+y-z=1$.`, 1, "La solution est (1, 1, 1)."),
  num(S`Trouve le produit mixte des vecteurs normaux de $x=1$, $y=2$, $x+y+z=3$.`, 1, "[1, 0, 0] · ([0, 1, 0] × [1, 1, 1])."),
  mc(S`$x+y=1$, $y+z=1$ et $x-z=0$ :`, "ont une droite commune (faisceau)", ["se coupent en un point", "n'ont aucun point commun", "sont confondus"], "La troisième équation est la première moins la deuxième."),
  mc(S`$x+y+z=1$, $x+y+z=3$ et $z=0$ :`, "n'ont aucun point commun", ["se coupent en un point", "ont une droite commune", "sont confondus"], "Les deux premiers sont parallèles."),
  num(S`Trouve l'angle entre les plans $x+y=0$ et $z=0$ (degrés).`, 90, "[1, 1, 0] · [0, 0, 1] = 0."),
  num(S`Résous $x=2y$, $y=3z$, $x+y+z=10$. Trouve $x$.`, 6, "x = 6z, y = 3z : 10z = 10."),
  tf("Si les vecteurs normaux de trois plans sont coplanaires, les plans n'ont aucun point commun.", false, "Ils peuvent avoir une droite commune (un faisceau)."),
  mc("Les plans x = 0 et y = 0 (illustrés) se coupent selon :", "l'axe des z", ["l'axe des x", "l'axe des y", "l'origine seulement"], "Les points tels que x = y = 0.", vdoc(merge(V3, axes3(4.6), { polys: [{ ...patch3([0, 1.5, 1.5], [0, 1, 0], [0, 0, 1], 1.5), op: 0.45 }, { ...patch3([1.5, 0, 1.5], [1, 0, 0], [0, 0, 1], 1.5, "#dcfce7", "green"), op: 0.45 }] }))),
  num(S`Trouve la distance entre $2x-y+2z=1$ et $2x-y+2z=7$.`, 2, "|7 − 1| / 3."),
  num(S`Pour quelle valeur de $k$ les vecteurs normaux de $x+y+z=1$, $x-y+z=2$, $x+3y+kz=0$ sont-ils coplanaires?`, 1, "Produit mixte 2 − 2k."),
  num(S`Résous $x+2y=5$, $y+2z=5$, $z+2x=5$. Trouve $x$ (2 décimales).`, 1.67, "Par symétrie, x = y = z : 3x = 5.", null, 0.01),
  mc(S`$x-y=0$, $y-z=0$ et $x-z=0$ :`, "ont une droite commune (faisceau)", ["se coupent en un point", "n'ont aucun point commun", "sont parallèles"], "La troisième est la somme des deux premières."),
  num(S`Trouve $z$ dans la solution de $x+y=3$, $y+z=4$, $x+z=5$.`, 3, "x + y + z = 6, donc z = 6 − 3."),
  tf("La droite d'intersection de deux plans est perpendiculaire aux deux vecteurs normaux.", true, "Son vecteur directeur est n₁ × n₂."),
  num("Les plans x = 1, y = 2 et z = 3 (illustrés) se coupent en un point. Trouve sa coordonnée y.", 2, "On la lit directement.", vdoc(merge(V3, axes3(4.6), { polys: [{ ...patch3([1, 2, 3], [0, 1, 0], [0, 0, 1], 1.3), op: 0.4 }, { ...patch3([1, 2, 3], [1, 0, 0], [0, 0, 1], 1.3, "#dcfce7", "green"), op: 0.4 }, { ...patch3([1, 2, 3], [1, 0, 0], [0, 1, 0], 1.3, "#fee2e2", "red"), op: 0.4 }] }, { points: [pt(1, 2, 3, "(1, 2, 3)")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }))),
  mc(S`Les plans $z=x$ et $z=-x$ se coupent selon :`, "l'axe des y", ["l'axe des x", "l'axe des z", "la droite x = z"], "x = z = 0, y libre."),
  num(S`La droite d'intersection de $x+y=4$ et de $x-y=2$ est $(3,1,t)$. Quelle est sa coordonnée x?`, 3, "Résous pour x et y; z est libre."),
  mc("Un prisme triangulaire de plans signifie que :", "chaque paire se coupe selon une droite, les droites sont parallèles et il n'y a aucun point commun", ["les trois se coupent en un point", "les trois sont parallèles", "les trois ont une droite commune"], "Système incompatible dont les vecteurs normaux sont coplanaires."),
  mc(S`Combien de solutions le système $x+y+z=1$, $2x+2y+2z=2$, $3x+3y+3z=3$ a-t-il?`, "une infinité (un plan entier)", ["aucune", "une", "une infinité le long d'une droite"], "Les trois équations décrivent le même plan."),
];
export { easy as E, medium as M };

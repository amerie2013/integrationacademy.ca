// 1.4 Transformations des fonctions puissance — 20 questions faciles + 20 moyennes
// NOTATION FRANÇAISE : y = a[k(x − c)]ⁿ + d (c = translation horizontale, d = translation verticale).
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const E = [
  mc(String.raw`Quel lien y a-t-il entre $y=(x-5)^4$ et $y=x^4$?`, "translation de 5 vers la droite", ["translation de 5 vers la gauche", "translation de 5 vers le haut", "translation de 5 vers le bas"], "(x − c) avec c = 5."),
  mc(String.raw`Quel lien y a-t-il entre $y=x^3+7$ et $y=x^3$?`, "translation de 7 vers le haut", ["translation de 7 vers la droite", "translation de 7 vers la gauche", "étirement de facteur 7"], "d = 7."),
  mc(String.raw`Quel lien y a-t-il entre $y=-x^4$ et $y=x^4$?`, "réflexion par rapport à l'axe des x", ["réflexion par rapport à l'axe des y", "translation de 1 vers le bas", "compression de facteur 1"], "a = −1."),
  num(String.raw`Donne l'abscisse du sommet de $y=2(x+3)^4-1$.`, -3, "c = −3."),
  num(String.raw`Donne l'ordonnée du sommet de $y=2(x+3)^4-1$.`, -1, "d = −1."),
  tf(String.raw`$y=4x^3$ est un étirement vertical de $y=x^3$ de facteur 4.`, true, "a = 4."),
  mc(String.raw`Quel lien y a-t-il entre $y=(2x)^4$ et $y=x^4$?`, String.raw`compression horizontale de facteur $\tfrac12$`, ["étirement horizontal de facteur 2", "compression verticale de facteur ½", "translation de 2 vers la droite"], "k = 2 → facteur 1/k."),
  num(String.raw`Le point $(1,1)$ de $y=x^4$ a pour image un point de $y=x^4+5$ d'ordonnée :`, 6, "Ajoute 5 à y."),
  num(String.raw`Le point $(2,8)$ de $y=x^3$ a pour image un point de $y=(x-4)^3$ d'abscisse :`, 6, "Ajoute 4 à x."),
  mc(String.raw`Image de $y=(x+1)^4+3$ :`, String.raw`$y\ge3$`, [String.raw`$y\ge-1$`, String.raw`$y\le3$`, String.raw`$y\in\mathbb R$`], "Sommet (−1, 3), ouverte vers le haut."),
  mc(String.raw`Image de $y=-(x-2)^6+5$ :`, String.raw`$y\le5$`, [String.raw`$y\ge5$`, String.raw`$y\le2$`, String.raw`$y\in\mathbb R$`], "Ouverte vers le bas à partir de (2, 5)."),
  tf(String.raw`$y=(x+2)^3$ est $y=x^3$ après une translation de 2 vers la droite.`, false, "C'est 2 vers la gauche."),
  mc("Quelle équation correspond au graphique?", String.raw`$y=(x-1)^3+2$`, [String.raw`$y=(x+1)^3+2$`, String.raw`$y=(x-1)^3-2$`, String.raw`$y=-(x-1)^3+2$`], "Point de symétrie (1, 2), croissante.", graph((x) => (x - 1) ** 3 + 2, { xmin: -1, xmax: 3, ymin: -3, ymax: 6 }, [P(1, 2)])),
  mc("Quelle équation a ce graphique?", String.raw`$y=-(x+1)^4+3$`, [String.raw`$y=(x+1)^4+3$`, String.raw`$y=-(x-1)^4+3$`, String.raw`$y=-(x+1)^4-3$`], "Sommet (−1, 3), ouverte vers le bas.", graph((x) => -((x + 1) ** 4) + 3, { xmin: -3, xmax: 1, ymin: -3, ymax: 4 }, [P(-1, 3)])),
  num(String.raw`On étire $y=x^4$ verticalement de facteur 6. Quel est le nouveau coefficient dominant?`, 6, "y = 6x⁴."),
  fill(String.raw`$y=(-x)^4$ est la même fonction que $y=$ ___.`, ["x^4", "x⁴"], "(−x)⁴ = x⁴."),
  num(String.raw`Quelle est l'abscisse du point de symétrie de $y=-3(x-2)^3+1$?`, 2, "(c, d) = (2, 1)."),
  tf(String.raw`Le domaine de $y=5(x-3)^4-2$ est l'ensemble des nombres réels.`, true, "Toute valeur de x peut être utilisée."),
  mc(String.raw`Quelle équation correspond à $y=x^3$ après une translation de 3 vers la gauche?`, String.raw`$y=(x+3)^3$`, [String.raw`$y=(x-3)^3$`, String.raw`$y=x^3-3$`, String.raw`$y=x^3+3$`], "Remplace x par x + 3."),
  num(String.raw`Évalue $y=2(x-1)^3+4$ en $x=3$.`, 20, "2(8) + 4."),
];

export const M = [
  num(String.raw`Le point $(2,16)$ de $y=x^4$ a pour image un point de $y=3(x+1)^4-2$ d'ordonnée :`, 46, "3(16) − 2."),
  num(String.raw`Le point $(2,16)$ de $y=x^4$ a pour image un point de $y=\left(\tfrac12x\right)^4$ d'abscisse :`, 4, "Divise x par k = ½."),
  mc(String.raw`Décris $y=-\tfrac12(x+4)^3$.`, "compression verticale de facteur ½, réflexion par rapport à l'axe des x, 4 vers la gauche", ["étirement vertical de facteur 2, 4 vers la droite", "réflexion par rapport à l'axe des y, 4 vers la gauche", "compression verticale de facteur ½, 4 vers la droite"], "a = −½, c = −4."),
  mc(String.raw`On fait subir à $y=x^4$ une réflexion par rapport à l'axe des x, puis une translation de 3 vers la droite et de 2 vers le haut. Équation :`, String.raw`$y=-(x-3)^4+2$`, [String.raw`$y=-(x+3)^4+2$`, String.raw`$y=(x-3)^4-2$`, String.raw`$y=-(x-2)^4+3$`], "a = −1, c = 3, d = 2."),
  num(String.raw`$y=a(x+1)^4-3$ passe par $(1,13)$. Trouve $a$.`, 1, "16a − 3 = 13."),
  num(String.raw`$y=2(x-2)^3+d$ passe par $(3,7)$. Trouve $d$.`, 5, "2 + d = 7."),
  mc(String.raw`Décris $y=(3x-9)^4$.`, String.raw`compression horizontale de facteur $\tfrac13$, puis 3 vers la droite`, ["compression horizontale de facteur ⅓, puis 9 vers la droite", "étirement horizontal de facteur 3, puis 3 vers la droite", "étirement vertical de facteur 3, puis 9 vers la droite"], "(3(x − 3))⁴."),
  num(String.raw`Le point $(1,1)$ de $y=x^4$ a pour image un point de $y=(3x-9)^4$ d'abscisse : (2 décimales)`, 3.3333, "1/3 + 3.", null, 0.006),
  mc("La fonction quartique a pour sommet (2, −3) et passe par (3, −1). Son équation est :", String.raw`$y=2(x-2)^4-3$`, [String.raw`$y=(x-2)^4-3$`, String.raw`$y=2(x+2)^4-3$`, String.raw`$y=2(x-2)^4+3$`], "a(1)⁴ − 3 = −1 → a = 2.", graph((x) => 2 * (x - 2) ** 4 - 3, { xmin: 0, xmax: 4, ymin: -4, ymax: 6 }, [P(2, -3), P(3, -1)])),
  tf(String.raw`$y=(-x)^3$ est la même fonction que $y=-x^3$.`, true, "(−x)³ = −x³."),
  ms(String.raw`Lesquelles ont pour image $y\ge-2$? Choisis toutes les bonnes réponses.`, [String.raw`$y=3(x+1)^4-2$`, String.raw`$y=-(x-1)^4-2$`, String.raw`$y=(x-5)^6-2$`, String.raw`$y=(x+2)^3-2$`], [0, 2], "Puissance paire, a > 0, d = −2."),
  num(String.raw`Combien d'abscisses à l'origine $y=(x-1)^4-16$ a-t-elle?`, 2, "(x − 1)⁴ = 16 → x − 1 = ±2."),
  num(String.raw`Trouve l'abscisse à l'origine positive de $y=(x-1)^4-16$.`, 3, "x − 1 = 2."),
  num(String.raw`Trouve l'abscisse à l'origine de $y=(x+2)^3-8$.`, 0, "x + 2 = 2."),
  mc("Quelle équation a le graphique illustré?", String.raw`$y=-(x+2)^3+1$`, [String.raw`$y=(x+2)^3+1$`, String.raw`$y=-(x-2)^3+1$`, String.raw`$y=-(x+2)^3-1$`], "Point de symétrie (−2, 1), décroissante.", graph((x) => -((x + 2) ** 3) + 1, { xmin: -4, xmax: 0.5, ymin: -4, ymax: 6 }, [P(-2, 1)])),
  num(String.raw`$y=a(x-3)^4$ passe par $(4,5)$. Trouve $a$.`, 5, "a(1)⁴ = 5."),
  mc(String.raw`Règle de correspondance de $y=2(x+5)^3-1$ :`, String.raw`$(x,y)\to(x-5,\,2y-1)$`, [String.raw`$(x,y)\to(x+5,\,2y-1)$`, String.raw`$(x,y)\to(x-5,\,\tfrac y2-1)$`, String.raw`$(x,y)\to(2x-5,\,y-1)$`], "c = −5, a = 2, d = −1."),
  tf(String.raw`$y=\left(\tfrac x2\right)^4$ et $y=\tfrac{x^4}{16}$ sont la même fonction.`, true, "(x/2)⁴ = x⁴/2⁴."),
  num(String.raw`Trouve la valeur maximale de $y=-3(x+4)^4+9$.`, 9, "Sommet (−4, 9), ouverte vers le bas."),
  fill(String.raw`Dans $y=a[k(x-c)]^n+d$, le paramètre qui fait subir au graphique une translation verticale est ___.`, ["d"], "d déplace le graphique vers le haut ou vers le bas."),
];

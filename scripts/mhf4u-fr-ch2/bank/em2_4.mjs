// 2.4 Familles de fonctions polynomiales — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const E = [
  mc(String.raw`Quelle équation décrit la famille de fonctions du second degré ayant pour zéros $1$ et $-2$?`, String.raw`$y=k(x-1)(x+2)$`, [String.raw`$y=k(x+1)(x-2)$`, String.raw`$y=(x-1)(x+2)+k$`, String.raw`$y=k(x-1)(x-2)$`], "Chaque zéro r donne un facteur (x − r)."),
  tf(String.raw`$y=3(x-1)(x+4)$ et $y=-(x-1)(x+4)$ appartiennent à la même famille.`, true, "Mêmes zéros, k différents."),
  num(String.raw`Trouve l'ordonnée à l'origine de $y=(x-1)(x-2)(x-3)$.`, -6, "(−1)(−2)(−3)."),
  num(String.raw`Trouve $k$ pour que $y=k(x-2)(x+1)$ passe par $(0,4)$.`, -2, "k(−2)(1) = 4."),
  mc(String.raw`Dans $y=k(x-r_1)(x-r_2)$, qu'est-ce que $k$ modifie?`, "l'étirement vertical et l'orientation (réflexion)", ["les abscisses à l'origine", "le degré", "la position horizontale"], "Les zéros restent fixes."),
  tf(String.raw`Tous les membres de $y=k(x+3)(x-1)$ passent par $(1,0)$.`, true, "x = 1 est un zéro de chaque membre."),
  num(String.raw`Trouve $k$ pour que $y=k(x-3)$ passe par $(5,10)$.`, 5, "k(2) = 10."),
  mc(String.raw`Quels sont les zéros de $y=4(x+5)(x-2)(x-6)$?`, "−5, 2, 6", ["5, −2, −6", "4, −5, 2, 6", "−5, 2"], "Pose chaque facteur égal à 0."),
  num(String.raw`Trouve l'ordonnée à l'origine de $y=-2(x+1)(x-3)$.`, 6, "−2(1)(−3)."),
  mc("Quelle famille contient le graphique illustré?", String.raw`$y=k(x+1)(x-2)$`, [String.raw`$y=k(x-1)(x+2)$`, String.raw`$y=k(x+1)(x+2)$`, String.raw`$y=kx(x-2)$`], "Abscisses à l'origine −1 et 2.", graph((x) => -(x + 1) * (x - 2), { xmin: -2.5, xmax: 3.5, ymin: -5, ymax: 4 })),
  num(String.raw`Quel est le degré de $y=k(x-1)^2(x+2)^3$?`, 5, "2 + 3."),
  mc(String.raw`Quel facteur à coefficients entiers correspond au zéro $\tfrac34$?`, String.raw`$4x-3$`, [String.raw`$3x-4$`, String.raw`$4x+3$`, String.raw`$x+\tfrac34$`], "4x − 3 = 0 ⇔ x = ¾."),
  num(String.raw`Trouve $k$ pour que $y=kx(x-4)$ passe par $(2,8)$.`, -2, "k(2)(−2) = 8."),
  tf(String.raw`$k=0$ donne un membre de la famille $y=k(x-1)(x+2)$.`, false, "y = 0 n'a pas de zéros particuliers; k doit être non nul."),
  mc(String.raw`Quel facteur du second degré a pour zéros $\pm\sqrt2$?`, String.raw`$x^2-2$`, [String.raw`$x^2+2$`, String.raw`$x^2-4$`, String.raw`$x^2-2x$`], "(x − √2)(x + √2)."),
  num(String.raw`Évalue $y=2(x+1)(x-3)$ en $x=1$.`, -8, "2(2)(−2)."),
  mc("Deux membres d'une même famille sont illustrés. Lequel a la plus grande valeur de |k|?", "la courbe bleue", ["la courbe rouge", "ils sont égaux", "impossible de le savoir"], "La courbe bleue est plus étirée.", planeDoc({ view: { xmin: -2, xmax: 3, ymin: -6, ymax: 6 }, curves: [{ f: (x) => 2 * (x + 1) * (x - 2), color: "blue" }, { f: (x) => 0.5 * (x + 1) * (x - 2), color: "red" }], step: { x: 1, y: 1 } })),
  num(String.raw`Trouve $k$ pour que $y=k(x-1)(x+1)$ ait une ordonnée à l'origine de 5.`, -5, "k(−1)(1) = 5."),
  tf(String.raw`$y=(x-1)(x+3)$ et $y=(x+3)(x-1)$ sont la même fonction.`, true, "La multiplication est commutative."),
  fill("Les zéros fixent la famille; un ___ de plus fixe le membre.", ["point"], "Substitue un point pour trouver k."),
];

export const M = [
  num(String.raw`Trouve $k$ pour que $y=k(x+1)(x-2)(x-3)$ passe par $(1,8)$.`, 2, "k(2)(−1)(−2) = 4k."),
  num(String.raw`Trouve $k$ pour que $y=k(x-1)^2(x+2)$ passe par $(0,6)$.`, 3, "k(1)(2) = 6."),
  mc(String.raw`Quel facteur du second degré a pour zéros $2\pm\sqrt3$?`, String.raw`$x^2-4x+1$`, [String.raw`$x^2+4x+1$`, String.raw`$x^2-4x-1$`, String.raw`$x^2-2x-3$`], "(x − 2)² − 3."),
  num(String.raw`Trouve $k$ pour que $y=k(x^2-3)(x+1)$ passe par $(0,6)$.`, -2, "k(−3)(1) = 6."),
  num(String.raw`Le membre de $y=k(x+1)(x-1)(x-3)$ qui passe par $(2,-12)$ a quelle ordonnée à l'origine?`, 12, "k(3)(1)(−1) = −12 → k = 4; f(0) = 4(1)(−1)(−3)."),
  mc("Quelle équation correspond à la fonction de degré 3 illustrée?", String.raw`$y=-(x+2)(x-1)(x-4)$`, [String.raw`$y=(x+2)(x-1)(x-4)$`, String.raw`$y=-(x-2)(x+1)(x+4)$`, String.raw`$y=-2(x+2)(x-1)(x-4)$`], "Zéros −2, 1, 4 et f(0) = −8 : k(8) = −8.", graph((x) => -(x + 2) * (x - 1) * (x - 4), { xmin: -3, xmax: 5, ymin: -20, ymax: 20 }, [P(0, -8)], { step: { x: 1, y: 5 } })),
  tf(String.raw`$y=(x-2)^2$ et $y=(x-2)^3$ appartiennent à la même famille.`, false, "Ordres différents : facteurs différents."),
  num(String.raw`Trouve la somme des zéros de $y=k(x^2-6x+4)(x+2)$.`, 4, "Zéros 3 ± √5 et −2 : 6 − 2."),
  mc(String.raw`Quelle est la famille de fonctions de degré 4 ayant pour zéros $\pm1$ et $\pm4$?`, String.raw`$y=k(x^2-1)(x^2-16)$`, [String.raw`$y=k(x^2+1)(x^2+16)$`, String.raw`$y=k(x-1)(x-4)$`, String.raw`$y=k(x^2-1)(x^2-4)$`], "Les paires ±r donnent x² − r²."),
  num(String.raw`Pour $y=k(x-1)(x-5)$, trouve $k$ pour que l'ordonnée du sommet soit 8.`, -2, "Sommet en x = 3 : k(2)(−2) = 8."),
  num(String.raw`Trouve $k$ pour que $y=k(2x-1)(x+3)$ passe par $(1,8)$.`, 2, "k(1)(4) = 8."),
  mc("Quelle équation correspond à la fonction de degré 3 illustrée (touche l'axe en 2, le coupe en −1)?", String.raw`$y=-2(x-2)^2(x+1)$`, [String.raw`$y=2(x-2)^2(x+1)$`, String.raw`$y=-2(x+2)^2(x-1)$`, String.raw`$y=-(x-2)(x+1)^2$`], "Ordonnée à l'origine −8 : k(4)(1) = −8.", graph((x) => -2 * (x - 2) ** 2 * (x + 1), { xmin: -2, xmax: 3.5, ymin: -12, ymax: 10 }, [P(0, -8)], { step: { x: 1, y: 2 } })),
  num(String.raw`Trouve le produit des zéros de $y=3(x-2)(x+4)(x-5)$.`, 40, "2 · (−4) · 5."),
  num(String.raw`Trouve $k$ pour que $y=k(x+2)^3$ passe par $(0,-4)$.`, -0.5, "8k = −4.", null, 0.001),
  tf("Un point situé sur l'axe des x, à l'un des zéros, détermine k.", false, "Tous les membres passent par ce point."),
  num(String.raw`Pour $y=k(x-1)(x+2)$, trouve $k$ pour que la valeur minimale soit $-9$.`, 4, "Sommet en x = −½ : k(−1.5)(1.5) = −2.25k = −9."),
  mc(String.raw`Quelle est la famille de fonctions de degré 3 ayant pour zéros $0$ et $\pm\sqrt5$?`, String.raw`$y=kx(x^2-5)$`, [String.raw`$y=k(x^2-5)$`, String.raw`$y=kx(x^2+5)$`, String.raw`$y=kx(x-5)^2$`], "x(x − √5)(x + √5)."),
  num(String.raw`Le membre de $y=k(x+1)(x-2)$ qui passe par $(1,4)$ a quelle valeur en $x=3$?`, -8, "k(2)(−1) = 4 → k = −2; f(3) = −2(4)(1)."),
  num(String.raw`Combien de membres de $y=k(x-1)(x+1)$ passent par l'origine?`, 0, "f(0) = −k ≠ 0 pour chaque membre."),
  mc(String.raw`Si $3-\sqrt7$ est un zéro d'un polynôme à coefficients entiers, lequel doit aussi être un zéro?`, String.raw`$3+\sqrt7$`, [String.raw`$-3-\sqrt7$`, String.raw`$\sqrt7-3$`, String.raw`$7-\sqrt3$`], "Paires conjuguées."),
];

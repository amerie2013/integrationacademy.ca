// 1.3 Équations et graphiques des fonctions polynomiales — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const E = [
  mc(String.raw`Quels sont les zéros de $f(x)=(x-3)(x+5)$?`, "3 et −5", ["−3 et 5", "3 et 5", "−3 et −5"], "Pose chaque facteur égal à 0."),
  num(String.raw`Quel est l'ordre du zéro $x=2$ dans $f(x)=(x-2)^3(x+1)$?`, 3, "L'exposant de (x − 2)."),
  num(String.raw`Trouve l'ordonnée à l'origine de $f(x)=(x+1)(x-4)(x+2)$.`, -8, "(1)(−4)(2)."),
  num(String.raw`Quel est le degré de $f(x)=(x-1)^2(x+3)^3$?`, 5, "2 + 3."),
  tf(String.raw`En un zéro d'ordre 2, le graphique traverse l'axe des x.`, false, "Il touche l'axe et repart."),
  mc("En un zéro d'ordre 1, le graphique :", "traverse l'axe des x comme une droite", ["touche l'axe et repart", "traverse en s'aplatissant", "n'atteint pas l'axe"], "L'ordre 1 se comporte comme une droite."),
  num(String.raw`Quel est le plus petit zéro de $f(x)=(x+6)(x-2)(x-9)$?`, -6, "Zéros −6, 2, 9."),
  num(String.raw`Trouve l'ordonnée à l'origine de $f(x)=2(x-1)^2(x+3)$.`, 6, "2(1)(3)."),
  mc("Quelle équation correspond au graphique?", String.raw`$y=\tfrac12(x+1)(x-2)(x-4)$`, [String.raw`$y=\tfrac12(x-1)(x+2)(x+4)$`, String.raw`$y=\tfrac12(x+1)(x+2)(x+4)$`, String.raw`$y=-\tfrac12(x+1)(x-2)(x-4)$`], "Zéros −1, 2, 4 et Q3 → Q1.", graph((x) => (x + 1) * (x - 2) * (x - 4) / 2, { xmin: -2, xmax: 5, ymin: -5, ymax: 6 }, [P(-1, 0), P(2, 0), P(4, 0)])),
  tf(String.raw`$y=-(x-1)(x+2)$ est ouverte vers le bas.`, true, "Coefficient dominant −1."),
  fill(String.raw`Le zéro du facteur $(2x-5)$ est $x=$ ___.`, ["2.5", "5/2"], "2x − 5 = 0."),
  mc("Le graphique touche l'axe des x en x = 2. Quel facteur figure dans son équation?", String.raw`$(x-2)^2$`, [String.raw`$(x+2)^2$`, String.raw`$(x-2)^3$`, String.raw`$(x+1)^2$`], "Toucher l'axe signifie un ordre pair.", graph((x) => (x - 2) ** 2 * (x + 1) / 2, { xmin: -2, xmax: 4, ymin: -4, ymax: 5 })),
  num(String.raw`Combien de zéros distincts $f(x)=x(x-3)^2(x+4)$ a-t-elle?`, 3, "0, 3, −4."),
  mc(String.raw`Comportement à l'infini de $f(x)=-(x-1)(x+2)(x-5)$ :`, "Q2 → Q4", ["Q3 → Q1", "monte aux deux extrémités", "descend aux deux extrémités"], "Degré 3, a = −1."),
  tf(String.raw`Le facteur $(x+4)$ donne un zéro en $x=4$.`, false, "Il donne x = −4."),
  num(String.raw`Évalue $f(x)=(x-2)(x+3)$ en $x=1$.`, -4, "(−1)(4)."),
  mc(String.raw`Quel est le signe de $(x-1)(x-4)$ quand $1<x<4$?`, "négatif", ["positif", "nul", "cela dépend de x"], "Un facteur positif, un facteur négatif."),
  num(String.raw`Quel est le plus grand zéro de $f(x)=3(x+2)(x-7)^2$?`, 7, "Zéros −2 et 7."),
  mc(String.raw`Les fonctions de la famille $y=k(x-1)(x+3)$ ont toutes les mêmes :`, "abscisses à l'origine", ["ordonnées à l'origine", "sommets", "sens d'ouverture"], "k change seulement l'étirement."),
  num(String.raw`Quel est le degré de $f(x)=x^2(x-1)(x+5)^2$?`, 5, "2 + 1 + 2."),
];

export const M = [
  num(String.raw`Une fonction cubique $y=a(x+2)(x-1)(x-3)$ passe par $(0,12)$. Trouve $a$.`, 2, "a(2)(−1)(−3) = 6a = 12."),
  num(String.raw`Une fonction quadratique a pour zéros 4 et $-1$ et passe par $(2,-12)$. Trouve son coefficient dominant.`, 2, "a(−2)(3) = −6a = −12."),
  ms(String.raw`Où a-t-on $(x+3)(x-2)>0$? Choisis toutes les bonnes réponses.`, [String.raw`$x<-3$`, String.raw`$-3<x<2$`, String.raw`$x>2$`, String.raw`$x=0$`], [0, 2], "Positive à l'extérieur des zéros."),
  mc(String.raw`Résous $(x-1)(x+2)(x-4)<0$.`, String.raw`$x<-2$ ou $1<x<4$`, [String.raw`$-2<x<1$ ou $x>4$`, String.raw`$x<1$`, String.raw`$-2<x<4$`], "Degré 3, a > 0 : −, +, −, +."),
  num(String.raw`Évalue $f(x)=(x+1)^2(x-3)$ en $x=-2$.`, -5, "(1)(−5)."),
  mc("Quelle équation a le graphique illustré?", String.raw`$y=\tfrac14(x+3)^2(x-2)$`, [String.raw`$y=\tfrac14(x-3)^2(x+2)$`, String.raw`$y=\tfrac14(x+3)(x-2)^2$`, String.raw`$y=-\tfrac14(x+3)^2(x-2)$`], "Touche en −3, traverse en 2, Q3 → Q1.", graph((x) => 0.25 * (x + 3) ** 2 * (x - 2), { xmin: -4, xmax: 3, ymin: -7, ymax: 4 }, [P(-3, 0), P(2, 0)])),
  tf(String.raw`$f(x)=(x-2)^2(x+1)$ est négative pour tout $x<-1$.`, true, "(positif)(négatif)."),
  num(String.raw`Combien de fois $y=x(x-1)^2(x+2)^3$ traverse-t-elle (et non seulement touche-t-elle) l'axe des x?`, 2, "Traverse en 0 et en −2; touche en 1."),
  mc(String.raw`Quel polynôme est de degré 3, a un zéro d'ordre 2 en $-2$ et un zéro en 3?`, String.raw`$(x+2)^2(x-3)$`, [String.raw`$(x-2)^2(x+3)$`, String.raw`$(x+2)(x-3)^2$`, String.raw`$(x+2)^3(x-3)$`], "(x + 2)² et (x − 3)."),
  num(String.raw`$f(x)=a(x+1)(x-1)(x-2)(x-3)$ vérifie $f(0)=12$. Trouve $a$.`, -2, "a(1)(−1)(−2)(−3) = −6a = 12."),
  mc(String.raw`Factorise $x^3-4x^2$ et donne ses zéros.`, "x²(x − 4) : 0 (ordre 2) et 4", ["x(x − 4) : 0 et 4", "x²(x + 4) : 0 et −4", "(x − 2)²x : 0 et 2"], "Facteur commun x²."),
  num(String.raw`Trouve le zéro positif de $f(x)=x^3-16x$.`, 4, "x(x − 4)(x + 4)."),
  ms(String.raw`Lesquels sont des zéros de $f(x)=2x^3-18x$? Choisis toutes les bonnes réponses.`, ["0", "3", "−3", "9"], [0, 1, 2], "2x(x − 3)(x + 3)."),
  mc("Quel est le signe du coefficient dominant de la fonction quartique illustrée?", "négatif", ["positif", "nul", "impossible à dire"], "Descend aux deux extrémités.", graph((x) => -(x + 2) * x * (x - 1) * (x - 3) / 4, { xmin: -3, xmax: 4, ymin: -4, ymax: 4 })),
  num(String.raw`Trouve l'ordonnée à l'origine de $f(x)=-(x-1)(x+2)(x+4)$.`, 8, "−(−1)(2)(4)."),
  mc(String.raw`Résous $(x+1)^2(x-4)\ge0$.`, String.raw`$x=-1$ ou $x\ge4$`, [String.raw`$x\ge4$`, String.raw`$x\ge-1$`, String.raw`$-1\le x\le4$`], "(x + 1)² ≥ 0; le produit vaut 0 en x = −1 et n'est positif que pour x > 4."),
  num(String.raw`Combien de zéros réels distincts $f(x)=(x^2+1)(x-5)$ a-t-elle?`, 1, "x² + 1 ne vaut jamais 0."),
  tf("Deux fonctions cubiques différentes peuvent avoir les trois mêmes zéros.", true, "Change le coefficient dominant."),
  num(String.raw`$y=k(x+1)(x-2)(x-5)$ passe par $(1,16)$. Trouve $k$.`, 2, "k(2)(−1)(−4) = 8k."),
  fill(String.raw`Un polynôme sous forme factorisée a des zéros d'ordres 2, 3 et 1, et aucun autre facteur. Son degré est ___.`, ["6", "six"], "2 + 3 + 1."),
];

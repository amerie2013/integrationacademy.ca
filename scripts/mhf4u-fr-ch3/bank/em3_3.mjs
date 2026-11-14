// 3.3 Fonctions rationnelles de la forme (ax + b)/(cx + d) — 20 questions faciles + 20 questions moyennes
// IMPORTANT : a, b, c, d sont les COEFFICIENTS de (ax + b)/(cx + d) — aucune permutation c↔d.
import { mc, num, tf, fill } from "./kit.mjs";
import { RG, P, planeDoc } from "./fig.mjs";
const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const E = [
  mc(S`Quelle est l'asymptote verticale de $y=\dfrac{x+7}{x-5}$?`, S`$x=5$`, [S`$x=-7$`, S`$x=-5$`, S`$y=1$`], "Le dénominateur vaut 0 en x = 5."),
  mc(S`Quelle est l'asymptote horizontale de $y=\dfrac{x+7}{x-5}$?`, S`$y=1$`, [S`$y=5$`, S`$y=-7$`, S`$x=1$`], "Coefficients dominants : 1/1."),
  num(S`Donne la valeur de y de l'asymptote horizontale de $y=\dfrac{8x-3}{2x+9}$.`, 4, "8/2."),
  num(S`Donne la valeur de y de l'asymptote horizontale de $y=\dfrac{5x+1}{x+1}$.`, 5, "5/1."),
  num(S`Trouve l'abscisse à l'origine de $y=\dfrac{x-11}{x+2}$.`, 11, "Numérateur = 0."),
  num(S`Trouve l'abscisse à l'origine de $y=\dfrac{4x+20}{x-3}$.`, -5, "4x + 20 = 0."),
  num(S`Trouve l'ordonnée à l'origine de $y=\dfrac{x+8}{x+4}$.`, 2, "8/4."),
  num(S`Trouve l'ordonnée à l'origine de $y=\dfrac{2x-10}{x-5}$ s'il y en a une; sinon, sa valeur constante.`, 2, "2(x − 5)/(x − 5) = 2, donc le graphique est y = 2 (avec un trou)."),
  tf(S`$y=\dfrac{x+3}{x+3}$ a une asymptote verticale en $x=-3$.`, false, "Le facteur se simplifie : il y a un trou, pas une asymptote."),
  mc(S`Quelle valeur est exclue du domaine de $y=\dfrac{2x+1}{x+6}$?`, S`$x=-6$`, [S`$x=6$`, S`$x=-\tfrac12$`, S`$x=2$`], "x + 6 = 0."),
  mc(S`Quelle valeur est exclue de l'image de $y=\dfrac{3x+1}{x+6}$?`, S`$y=3$`, [S`$y=0$`, S`$y=\tfrac16$`, S`$y=-6$`], "L'asymptote horizontale."),
  fill("Un facteur commun au numérateur et au dénominateur produit un ___ dans le graphique.", ["trou", "hole"], "Il laisse un seul point manquant."),
  tf(S`Le graphique de $y=\dfrac{ax+b}{cx+d}$, avec $ad\ne bc$, a exactement deux branches.`, true, "Une de chaque côté de l'asymptote verticale."),
  mc(S`Quelle fonction a un trou?`, S`$y=\dfrac{2x+8}{x+4}$`, [S`$y=\dfrac{2x+8}{x-4}$`, S`$y=\dfrac{x+8}{x+4}$`, S`$y=\dfrac{2x}{x+4}$`], "2x + 8 = 2(x + 4)."),
  mc("Lis les asymptotes sur le graphique.", S`$x=1,\ y=2$`, [S`$x=2,\ y=1$`, S`$x=-1,\ y=2$`, S`$x=1,\ y=-2$`], "Les droites en pointillés.", RG((x) => (2 * x + 1) / (x - 1), [1], V, 2)),
  mc("Quelle fonction correspond au graphique?", S`$y=\dfrac{x+3}{x-2}$`, [S`$y=\dfrac{x-3}{x+2}$`, S`$y=\dfrac{x+2}{x-3}$`, S`$y=\dfrac{3x}{x-2}$`], "AV x = 2, AH y = 1, abscisse à l'origine −3.", RG((x) => (x + 3) / (x - 2), [2], V, 1, [P(-3, 0)])),
  num(S`Évalue $f(4)$ pour $f(x)=\dfrac{x+8}{x-1}$.`, 4, "12/3."),
  num(S`Pour de très grandes valeurs de $x$, de quel nombre $\dfrac{7x+2}{x-9}$ est-il proche?`, 7, "Rapport des coefficients dominants."),
  tf(S`L'asymptote horizontale de $y=\dfrac{x-4}{2x+1}$ est $y=\tfrac12$.`, true, "1/2."),
  mc(S`Où se trouve l'asymptote verticale de $y=\dfrac{x}{2x-3}$?`, S`$x=\tfrac32$`, [S`$x=-\tfrac32$`, S`$x=3$`, S`$x=0$`], "2x − 3 = 0."),
];

export const M = [
  mc(S`Donne les asymptotes de $y=\dfrac{3x-4}{2x+6}$.`, S`$x=-3,\ y=\tfrac32$`, [S`$x=3,\ y=\tfrac32$`, S`$x=-3,\ y=\tfrac43$`, S`$x=\tfrac43,\ y=\tfrac32$`], "2x + 6 = 0; 3/2."),
  mc(S`Donne l'asymptote horizontale de $y=\dfrac{5-2x}{x+7}$.`, S`$y=-2$`, [S`$y=2$`, S`$y=5$`, S`$y=\tfrac57$`], "Coefficients dominants −2 et 1."),
  mc(S`Donne l'asymptote horizontale de $y=\dfrac{4x+1}{3-2x}$.`, S`$y=-2$`, [S`$y=2$`, S`$y=\tfrac13$`, S`$y=\tfrac43$`], "4/(−2)."),
  num(S`Trouve l'ordonnée à l'origine de $y=\dfrac{6-3x}{x+3}$.`, 2, "6/3."),
  mc(S`Décris $y=\dfrac{6x-18}{x-3}$.`, S`la droite $y=6$ avec un trou en $(3,6)$`, [S`une hyperbole d'AV $x=3$`, S`la droite $y=6$`, S`la droite $y=3$ avec un trou en $(6,3)$`], "Le facteur x − 3 se simplifie."),
  mc(S`Réécris $\dfrac{2x+7}{x+3}$ sous la forme $a+\dfrac k{x-h}$.`, S`$2+\dfrac1{x+3}$`, [S`$2+\dfrac7{x+3}$`, S`$2-\dfrac1{x+3}$`, S`$7+\dfrac2{x+3}$`], "2(x + 3) + 1."),
  mc(S`Réécris $\dfrac{x-5}{x-2}$ sous la forme $a+\dfrac k{x-h}$.`, S`$1-\dfrac3{x-2}$`, [S`$1+\dfrac3{x-2}$`, S`$1-\dfrac5{x-2}$`, S`$5-\dfrac1{x-2}$`], "(x − 2) − 3."),
  mc(S`Quelles transformations donnent $y=4+\dfrac3{x+1}$ à partir de $y=\dfrac1x$?`, "agrandissement de facteur 3, 1 vers la gauche, 4 vers le haut", ["agrandissement de facteur 4, 1 vers la gauche, 3 vers le haut", "agrandissement de facteur 3, 1 vers la droite, 4 vers le haut", "agrandissement de facteur 3, 1 vers la gauche, 4 vers le bas"], "k = 3, h = −1, a = 4."),
  mc(S`Écris une fonction ayant l'AV $x=4$, l'AH $y=2$ et l'abscisse à l'origine $1$.`, S`$y=\dfrac{2x-2}{x-4}$`, [S`$y=\dfrac{2x+2}{x-4}$`, S`$y=\dfrac{x-1}{x-4}$`, S`$y=\dfrac{2x-1}{x+4}$`], "Numérateur 2(x − 1)."),
  mc(S`Écris une fonction ayant l'AV $x=-1$, l'AH $y=-3$ et l'ordonnée à l'origine $2$.`, S`$y=\dfrac{-3x+2}{x+1}$`, [S`$y=\dfrac{3x+2}{x+1}$`, S`$y=\dfrac{-3x-2}{x+1}$`, S`$y=\dfrac{-3x+2}{x-1}$`], "b/1 = 2."),
  num(S`$y=\dfrac{ax+1}{x-3}$ a l'AH $y=5$. Trouve $a$.`, 5, "a/1."),
  num(S`$y=\dfrac{2x+1}{cx-4}$ a l'AH $y=\tfrac12$. Trouve $c$.`, 4, "2/c = 1/2."),
  num(S`$y=\dfrac{x+1}{x+d}$ a l'AV $x=6$. Trouve $d$.`, -6, "6 + d = 0."),
  num(S`Pour quelle valeur de $k$ la fonction $y=\dfrac{x+k}{x-7}$ a-t-elle un trou?`, -7, "x + k doit être égal à x − 7."),
  mc(S`$y=\dfrac{3x+1}{x+2}$ est-elle croissante ou décroissante sur chaque branche?`, "croissante", ["décroissante", "croissante sur une branche, décroissante sur l'autre", "constante"], "ad − bc = 6 − 1 = 5 > 0."),
  mc(S`$y=\dfrac{x+5}{x+1}$ est-elle croissante ou décroissante sur chaque branche?`, "décroissante", ["croissante", "croissante sur une branche, décroissante sur l'autre", "constante"], "ad − bc = 1 − 5 = −4 < 0."),
  num(S`Trouve le taux de variation moyen de $y=\dfrac{x}{x+1}$ sur $[0,1]$ sous forme décimale.`, 0.5, "(1/2 − 0)/1.", null, 0.001),
  mc("D'après le graphique, pour quelles valeurs de x a-t-on f(x) > 0?", S`$x\lt-1$ ou $x>3$`, [S`$-1\lt x\lt3$`, S`$x>3$`, S`$x>-1$`], "Au-dessus de l'axe, à l'extérieur du zéro et de l'asymptote.", RG((x) => (x - 3) / (x + 1), [-1], V, 1, [P(3, 0)])),
  mc("Le graphique est de la forme y = (x + b)/(x + d). Trouve b et d.", S`$b=-1,\ d=3$`, [S`$b=1,\ d=-3$`, S`$b=3,\ d=-1$`, S`$b=-3,\ d=1$`], "Abscisse à l'origine 1 et AV x = −3.", RG((x) => (x - 1) / (x + 3), [-3], V, 1, [P(1, 0)])),
  mc("Ce graphique est une droite horizontale avec un cercle vide. Quelle fonction pourrait-ce être?", S`$y=\dfrac{2x-2}{x-1}$`, [S`$y=\dfrac{2x+2}{x-1}$`, S`$y=\dfrac{x-1}{2x-2}$`, S`$y=2x-2$`], "Vaut 2 pour x ≠ 1.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -1, ymax: 5 }, curves: [{ f: () => 2, color: "violet" }], points: [{ x: 1, y: 2, open: true, label: "(1, 2)", color: "red" }], step: { x: 1, y: 1 } })),
];

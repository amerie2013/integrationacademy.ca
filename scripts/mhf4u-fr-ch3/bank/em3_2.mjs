// 3.2 Fonction réciproque d'une fonction quadratique — 20 questions faciles + 20 questions moyennes
// (b, c, k = coefficients / paramètre de la quadratique : aucune permutation c↔d.)
import { mc, num, tf, fill } from "./kit.mjs";
import { RG, P, planeDoc } from "./fig.mjs";
const S = String.raw;

export const E = [
  num(S`Combien d'asymptotes verticales $y=\dfrac1{x^2-25}$ a-t-elle?`, 2, "x = ±5."),
  num(S`Combien d'asymptotes verticales $y=\dfrac1{x^2+10}$ a-t-elle?`, 0, "x² + 10 n'est jamais égal à 0."),
  num(S`Combien d'asymptotes verticales $y=\dfrac1{(x-6)^2}$ a-t-elle?`, 1, "Un seul zéro double."),
  mc(S`Quelles sont les asymptotes verticales de $y=\dfrac1{(x-2)(x+7)}$?`, S`$x=2$ et $x=-7$`, [S`$x=-2$ et $x=7$`, S`$x=2$ seulement`, S`$y=2$ et $y=-7$`], "Les zéros de chaque facteur."),
  mc(S`Quelle est l'asymptote horizontale de $y=\dfrac1{x^2+x+1}$?`, S`$y=0$`, [S`$y=1$`, S`$x=0$`, "il n'y en a pas"], "Le dénominateur augmente sans limite."),
  num(S`Trouve l'ordonnée à l'origine de $y=\dfrac1{x^2+8}$ sous forme décimale.`, 0.125, "1/8.", null, 0.001),
  num(S`Trouve l'ordonnée à l'origine de $y=\dfrac1{x^2-x-2}$ sous forme décimale.`, -0.5, "1/(−2).", null, 0.001),
  num(S`Quelle est la valeur maximale de $y=\dfrac1{x^2+4}$ sous forme décimale?`, 0.25, "Le minimum de x² + 4 est 4.", null, 0.001),
  tf(S`Le graphique de $y=\dfrac1{x^2+5}$ est au-dessus de l'axe des x partout.`, true, "Un dénominateur positif donne une valeur positive."),
  tf(S`Le graphique de $y=\dfrac1{(x+3)^2}$ a une branche au-dessus et une branche au-dessous de l'axe des x.`, false, "Un carré n'est jamais négatif : les deux branches sont au-dessus."),
  mc(S`Une parabole a son sommet en $(1,4)$. Quel point de sa réciproque provient du sommet?`, S`$\left(1,\tfrac14\right)$`, [S`$\left(\tfrac14,1\right)$`, S`$(4,1)$`, S`$(1,-4)$`], "Garde x; prends la réciproque de y."),
  mc(S`Une parabole a son sommet en $(-2,-5)$. Quel est le point tournant de la réciproque?`, S`$\left(-2,-\tfrac15\right)$`, [S`$(-2,-5)$`, S`$\left(2,\tfrac15\right)$`, S`$\left(-\tfrac12,-5\right)$`], "y → 1/y."),
  fill("La réciproque d'une parabole sans zéro réel a ___ asymptote(s) verticale(s). (Écris un nombre ou un mot.)", ["aucune", "0", "zéro", "aucun", "no", "zero"], "Aucun zéro, aucune asymptote."),
  mc(S`Quelles valeurs sont exclues du domaine de $y=\dfrac1{x^2-1}$?`, S`$x=\pm1$`, [S`$x=1$ seulement`, S`$x=0$`, "aucune"], "x² − 1 = 0."),
  mc("Combien d'asymptotes verticales cette réciproque d'une fonction quadratique a-t-elle?", "2", ["0", "1", "3"], "Deux droites verticales en pointillés.", RG((x) => 1 / (x * x - 2.25), [-1.5, 1.5], { xmin: -5, xmax: 5, ymin: -2, ymax: 2 }, 0, [], { step: { x: 1, y: 0.5 } })),
  mc("De quelle forme s'agit-il?", "réciproque d'une fonction quadratique sans zéro réel", ["réciproque d'une fonction quadratique à deux zéros", "réciproque d'une droite", "une parabole"], "Une seule bosse lisse, sans asymptote verticale.", planeDoc({ view: { xmin: -5, xmax: 5, ymin: -0.5, ymax: 1 }, curves: [{ f: (x) => 1 / (x * x + 1.5), color: "violet" }], step: { x: 1, y: 0.25 } })),
  tf(S`La réciproque d'une fonction quadratique peut avoir une abscisse à l'origine.`, false, "Le numérateur est 1, donc y n'est jamais égal à 0."),
  num(S`Évalue $g(3)$ pour $g(x)=\dfrac1{x^2+1}$ sous forme décimale.`, 0.1, "1/10.", null, 0.001),
  num(S`Quel est le discriminant de $x^2+2x+3$?`, -8, "4 − 12 = −8 : aucun zéro réel."),
  mc(S`Pour quelle fonction quadratique $\dfrac1{f(x)}$ a-t-elle exactement une asymptote verticale?`, S`$x^2-6x+9$`, [S`$x^2-9$`, S`$x^2+9$`, S`$x^2-6x+8$`], "(x − 3)²."),
];

export const M = [
  mc(S`Trouve les asymptotes verticales de $y=\dfrac1{x^2-7x+10}$.`, S`$x=2,\ x=5$`, [S`$x=-2,\ x=-5$`, S`$x=7,\ x=10$`, S`$x=1,\ x=10$`], "(x − 2)(x − 5)."),
  mc(S`Trouve les asymptotes verticales de $y=\dfrac1{2x^2-x-3}$.`, S`$x=\tfrac32,\ x=-1$`, [S`$x=-\tfrac32,\ x=1$`, S`$x=3,\ x=-1$`, S`$x=\tfrac12,\ x=3$`], "(2x − 3)(x + 1)."),
  mc(S`Trouve le point tournant de $y=\dfrac1{x^2-8x+12}$.`, S`$\left(4,-\tfrac14\right)$`, [S`$(4,-4)$`, S`$\left(-4,\tfrac14\right)$`, S`$\left(2,\tfrac1{12}\right)$`], "Le sommet de (x − 2)(x − 6) est (4, −4)."),
  mc(S`Trouve le maximum de $y=\dfrac1{x^2+2x+6}$.`, S`$\left(-1,\tfrac15\right)$`, [S`$\left(1,\tfrac15\right)$`, S`$(-1,5)$`, S`$\left(-1,\tfrac16\right)$`], "(x + 1)² + 5."),
  mc(S`Quelle est l'image de $y=\dfrac1{x^2+6}$?`, S`$0\lt y\le\tfrac16$`, [S`$y>0$`, S`$0\le y\le\tfrac16$`, S`$y\ge\tfrac16$`], "Plus grande valeur en x = 0; n'atteint jamais 0."),
  mc(S`Quelle est l'image de $y=\dfrac1{x^2-4}$?`, S`$y\le-\tfrac14$ ou $y>0$`, [S`$y\ne0$`, S`$y>0$`, S`$-\tfrac14\le y\lt0$`], "Branche du milieu au plus −1/4; branches extérieures positives."),
  mc(S`Où $y=\dfrac1{x^2+4x+7}$ est-elle croissante?`, S`$x\lt-2$`, [S`$x>-2$`, S`$x\lt2$`, "partout"], "(x + 2)² + 3 décroît pour x < −2."),
  num(S`Sur combien d'intervalles $y=\dfrac1{x^2-1}$ est-elle croissante?`, 2, "Sur (−∞, −1) et (−1, 0)."),
  tf(S`Si $f$ a un minimum à son sommet et que $k>0$, alors $\dfrac1f$ a un maximum pour la même valeur de $x$.`, true, "La plus petite valeur positive de f donne la plus grande réciproque."),
  num(S`Trouve la valeur positive de $x$ : $\dfrac1{x^2+1}=\dfrac15$.`, 2, "x² + 1 = 5."),
  mc(S`Résous $\dfrac1{(x-1)^2}=\dfrac19$.`, S`$x=4$ ou $x=-2$`, [S`$x=4$`, S`$x=10$`, S`$x=-2$`], "(x − 1) = ±3."),
  num(S`Combien de solutions $\dfrac1{x^2+2}=1$ a-t-elle?`, 0, "x² = −1 n'a pas de solution réelle."),
  num(S`Pour que $y=\dfrac1{x^2+k}$ ait un maximum de $0.2$, trouve $k$.`, 5, "1/k = 1/5."),
  mc(S`Quelle valeur de $k$ donne à $y=\dfrac1{x^2+4x+k}$ exactement une asymptote verticale?`, S`$k=4$`, [S`$k=2$`, S`$k=16$`, S`$k=-4$`], "Discriminant 16 − 4k = 0."),
  mc("Quelle est l'équation du graphique?", S`$y=\dfrac1{x^2-2x}$`, [S`$y=\dfrac1{x^2+2x}$`, S`$y=\dfrac1{x^2-4}$`, S`$y=\dfrac1{x-2}$`], "AV x = 0, x = 2; point tournant (1, −1).", RG((x) => 1 / (x * x - 2 * x), [0, 2], { xmin: -3, xmax: 5, ymin: -3, ymax: 3 }, 0, [P(1, -1)])),
  mc("Pour ce graphique, où la fonction est-elle positive?", S`$x\lt-1$ ou $x>2$`, [S`$-1\lt x\lt2$`, S`$x>2$`, S`$x\ne-1,2$`], "Les branches extérieures sont au-dessus de l'axe des x.", RG((x) => 1 / ((x + 1) * (x - 2)), [-1, 2], { xmin: -4, xmax: 5, ymin: -3, ymax: 3 }, 0)),
  num(S`Trouve le taux de variation moyen de $y=\dfrac1{x^2+1}$ sur $[0,1]$ sous forme décimale.`, -0.5, "(1/2 − 1)/1.", null, 0.001),
  num(S`Trouve le taux de variation moyen de $y=\dfrac1{x^2}$ sur $[1,2]$ sous forme décimale.`, -0.75, "(1/4 − 1)/1.", null, 0.001),
  tf(S`Le graphique de $y=\dfrac1{x^2-3x+5}$ n'a pas d'asymptote verticale.`, true, "Discriminant 9 − 20 < 0."),
  mc(S`Une réciproque a les AV $x=-1$, $x=3$ et est de la forme $\dfrac1{x^2+bx+c}$. Trouve $b$ et $c$.`, S`$b=-2,\ c=-3$`, [S`$b=2,\ c=-3$`, S`$b=-2,\ c=3$`, S`$b=2,\ c=3$`], "(x + 1)(x − 3)."),
];

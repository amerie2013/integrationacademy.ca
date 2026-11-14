// 3.1 Fonction réciproque d'une fonction linéaire — 20 questions faciles + 20 questions moyennes
// (c dans kx + c / x + c est une constante du dénominateur : aucune permutation c↔d.)
import { mc, num, tf, fill } from "./kit.mjs";
import { RG, P } from "./fig.mjs";
const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -6, ymax: 6 };

export const E = [
  mc(S`Quelle est l'asymptote verticale de $y=\dfrac1{x-9}$?`, S`$x=9$`, [S`$x=-9$`, S`$y=9$`, S`$y=0$`], "Le dénominateur vaut 0 en x = 9."),
  mc(S`Quelle est l'asymptote verticale de $y=\dfrac1{x+5}$?`, S`$x=-5$`, [S`$x=5$`, S`$y=5$`, S`$y=-5$`], "x + 5 = 0 en x = −5."),
  mc(S`Quelle est l'asymptote horizontale de $y=\dfrac1{4x-3}$?`, S`$y=0$`, [S`$y=4$`, S`$y=\frac34$`, S`$y=-3$`], "Quand |x| augmente, la fraction s'approche de 0."),
  tf(S`Le graphique de $y=\dfrac1{x-2}$ a une abscisse à l'origine.`, false, "Le numérateur est 1, donc y n'est jamais égal à 0."),
  num(S`Trouve l'ordonnée à l'origine de $y=\dfrac1{x+10}$ sous forme décimale.`, 0.1, "y = 1/10.", null, 0.001),
  num(S`Trouve l'ordonnée à l'origine de $y=\dfrac1{5x-4}$ sous forme décimale.`, -0.25, "y = 1/(−4).", null, 0.001),
  mc(S`Quelle valeur est exclue du domaine de $y=\dfrac1{2x-10}$?`, S`$x=5$`, [S`$x=-5$`, S`$x=10$`, S`$x=2$`], "2x − 10 = 0 en x = 5."),
  mc(S`Quelle est l'image de $y=\dfrac1{x-1}$?`, S`$y\ne0$`, [S`$y\ne1$`, S`$y>0$`, "tous les nombres réels"], "La réciproque n'est jamais égale à 0."),
  tf(S`$f(x)$ et $\dfrac1{f(x)}$ ont toujours le même signe là où les deux sont définies.`, true, "Une réciproque garde le signe."),
  num(S`La droite $f(x)=x-6$ vaut 1 pour quelle valeur de $x$? (Cela donne un point invariant.)`, 7, "x − 6 = 1."),
  num(S`La droite $f(x)=x+8$ vaut $-1$ pour quelle valeur de $x$?`, -9, "x + 8 = −1."),
  mc("En quels points une droite et sa réciproque se coupent-elles?", S`là où $f(x)=\pm1$`, [S`là où $f(x)=0$`, S`seulement en $(1,1)$`, "elles ne se rencontrent jamais"], "1/f = f signifie f² = 1."),
  fill("Le zéro d'une droite devient une ___ verticale de sa réciproque.", ["asymptote"], "1/0 n'est pas défini."),
  mc("Lis l'asymptote verticale sur le graphique.", S`$x=3$`, [S`$x=-3$`, S`$y=3$`, S`$y=0$`], "La droite verticale en pointillés est en x = 3.", RG((x) => 1 / (x - 3), [3], V, 0)),
  mc("Quelle équation correspond au graphique?", S`$y=\dfrac1{x+4}$`, [S`$y=\dfrac1{x-4}$`, S`$y=x+4$`, S`$y=\dfrac1x+4$`], "AV x = −4 et AH y = 0.", RG((x) => 1 / (x + 4), [-4], V, 0, [P(-3, 1)])),
  tf(S`Si $f(x)=2x+1$ est croissante, alors $\dfrac1{f(x)}$ est décroissante sur chaque branche.`, true, "Les valeurs réciproques varient dans le sens contraire."),
  num(S`Évalue $g(11)$ pour $g(x)=\dfrac1{x-1}$ sous forme décimale.`, 0.1, "1/10.", null, 0.001),
  mc(S`Quand $x\to\infty$, qu'arrive-t-il à $\dfrac1{7x+2}$?`, "elle s'approche de 0", ["elle s'approche de 7", "elle augmente sans limite", "elle s'approche de 2"], "Le dénominateur augmente sans limite."),
  num(S`Combien de branches le graphique de $y=\dfrac1{3x+1}$ a-t-il?`, 2, "Une de chaque côté de l'asymptote verticale."),
  mc(S`Où $y=\dfrac1{x-5}$ est-elle positive?`, S`$x>5$`, [S`$x\lt5$`, S`$x\ne5$`, S`$x>0$`], "Même signe que x − 5."),
];

export const M = [
  mc(S`Trouve l'asymptote verticale de $y=\dfrac1{3x+12}$.`, S`$x=-4$`, [S`$x=4$`, S`$x=12$`, S`$x=-12$`], "3x + 12 = 0."),
  mc(S`Trouve l'asymptote verticale de $y=\dfrac1{10-5x}$.`, S`$x=2$`, [S`$x=-2$`, S`$x=5$`, S`$x=10$`], "10 − 5x = 0."),
  num(S`Trouve l'ordonnée à l'origine de $y=\dfrac1{8-2x}$ sous forme décimale.`, 0.125, "1/8.", null, 0.0005),
  num(S`Pour quelle valeur de $x$ la droite $f(x)=2x-5$ vaut-elle 1? (Cela donne un point invariant de sa réciproque.)`, 3, "2x − 5 = 1."),
  mc(S`Quels sont les points invariants de $f(x)=x-3$ et de sa réciproque?`, S`$(4,1)$ et $(2,-1)$`, [S`$(4,-1)$ et $(2,1)$`, S`$(3,0)$ et $(0,3)$`, S`$(1,4)$ et $(-1,2)$`], "x − 3 = ±1."),
  num(S`Évalue $g(-2.5)$ pour $g(x)=\dfrac1{2x+7}$.`, 0.5, "2(−2.5) + 7 = 2."),
  mc(S`Comment $g(x)=\dfrac1{6-x}$ varie-t-elle sur chaque branche?`, "croissante", ["décroissante", "constante", "croissante puis décroissante"], "La droite 6 − x est décroissante, donc sa réciproque est croissante."),
  mc(S`Quand $x\to2^+$, qu'arrive-t-il à $\dfrac1{x-2}$?`, S`$+\infty$`, [S`$-\infty$`, "0", "2"], "De petits dénominateurs positifs donnent de grandes valeurs positives."),
  mc(S`Quand $x\to-1^-$, qu'arrive-t-il à $\dfrac1{x+1}$?`, S`$-\infty$`, [S`$+\infty$`, "0", "−1"], "x + 1 est un petit nombre négatif."),
  num(S`$y=\dfrac1{kx-6}$ a son asymptote verticale en $x=3$. Trouve $k$.`, 2, "3k − 6 = 0."),
  num(S`$y=\dfrac1{x+c}$ passe par $(2,\tfrac14)$. Trouve $c$.`, 2, "2 + c = 4."),
  mc(S`Résous $\dfrac1{x-4}=\dfrac12$.`, S`$x=6$`, [S`$x=2$`, S`$x=4.5$`, S`$x=8$`], "x − 4 = 2."),
  num(S`Résous $\dfrac1{2x+1}=\dfrac15$.`, 2, "2x + 1 = 5."),
  num(S`Trouve le taux de variation moyen de $y=\dfrac1x$ sur $[1,4]$ (sous forme décimale).`, -0.25, "(1/4 − 1)/3.", null, 0.001),
  num(S`Trouve le taux de variation moyen de $y=\dfrac1{x+1}$ sur $[0,1]$ (sous forme décimale).`, -0.5, "(1/2 − 1)/1.", null, 0.001),
  tf(S`L'image de $y=\dfrac3{x+2}$ est l'ensemble des nombres réels sauf 0.`, true, "3/(x + 2) n'est jamais égale à 0 et prend toutes les autres valeurs."),
  mc("Quelle fonction est représentée?", S`$y=\dfrac1{2-x}$`, [S`$y=\dfrac1{x-2}$`, S`$y=\dfrac1{x+2}$`, S`$y=2-x$`], "AV x = 2; positive à sa gauche.", RG((x) => 1 / (2 - x), [2], V, 0, [P(1, 1), P(3, -1)])),
  mc(S`Quelle description correspond à la transformation de $y=\dfrac1{x}$ en $y=\dfrac2{x-3}$?`, "agrandissement de facteur 2, 3 vers la droite", ["agrandissement de facteur 3, 2 vers la droite", "agrandissement de facteur 2, 3 vers la gauche", "rétrécissement de facteur 2, 3 vers la droite"], "Le 2 est un agrandissement; x − 3 déplace vers la droite."),
  mc("D'après le graphique, pour quelles valeurs de x a-t-on g(x) < 0?", S`$x\lt-1$`, [S`$x>-1$`, S`$x\lt0$`, S`$x\ne-1$`], "Sous l'axe des x, à gauche de l'asymptote.", RG((x) => 1 / (x + 1), [-1], V, 0)),
  mc(S`Où $y=\dfrac1{9-3x}$ est-elle négative?`, S`$x>3$`, [S`$x\lt3$`, S`$x>9$`, S`$x\lt-3$`], "9 − 3x < 0 quand x > 3."),
];

// 2.6 Résolution algébrique d'inéquations polynomiales factorisables — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { graph } from "./fig.mjs";

export const E = [
  mc(String.raw`Quelles sont les valeurs critiques de $(x-2)(x+5)\gt0$?`, String.raw`$2$ et $-5$`, [String.raw`$-2$ et $5$`, String.raw`$2$ et $5$`, String.raw`$0$ seulement`], "Les zéros de chaque facteur."),
  mc(String.raw`Quel est le signe de $(x-1)(x+2)$ en $x=0$?`, "négatif", ["positif", "nul", "non défini"], "(−1)(2)."),
  mc(String.raw`Résous $(x-3)(x+1)>0$.`, String.raw`$x\lt-1$ ou $x>3$`, [String.raw`$-1\lt x\lt3$`, String.raw`$x>3$`, String.raw`$x\lt3$`], "Signes +, −, +."),
  tf("Il ne faut jamais diviser les deux membres d'une inéquation par une expression contenant la variable.", true, "Son signe est inconnu — factorise plutôt."),
  num(String.raw`Combien de valeurs critiques $x(x-1)(x+4)\le0$ a-t-elle?`, 3, "0, 1, −4."),
  mc(String.raw`Résous $x(x-2)\le0$.`, String.raw`$[0,2]$`, [String.raw`$(0,2)$`, String.raw`$(-\infty,0]\cup[2,\infty)$`, String.raw`$[-2,0]$`], "Entre les zéros, inclus."),
  tf("Le signe d'un polynôme change en un zéro d'ordre 2.", false, "Ordre pair : aucun changement de signe."),
  mc(String.raw`Quel est le signe de $(x+3)(x-1)(x-4)$ pour $x>4$?`, "positif", ["négatif", "nul", "cela dépend"], "Les trois facteurs sont positifs."),
  num(String.raw`Évalue $(x-2)^3$ à la valeur test $x=0$.`, -8, "(−2)³."),
  mc(String.raw`Résous $(x+2)(x-2)\lt0$.`, String.raw`$(-2,2)$`, [String.raw`$[-2,2]$`, String.raw`$(-\infty,-2)\cup(2,\infty)$`, String.raw`$(0,2)$`], "Entre les zéros."),
  tf("Pour ≥ et ≤, les valeurs critiques font partie de la solution.", true, "Le polynôme y vaut 0."),
  mc(String.raw`Résous $x^2-9\ge0$.`, String.raw`$(-\infty,-3]\cup[3,\infty)$`, [String.raw`$[-3,3]$`, String.raw`$[3,\infty)$`, String.raw`$(-3,3)$`], "(x − 3)(x + 3) ≥ 0."),
  num(String.raw`Combien d'entiers vérifient $(x-1)(x-6)\lt0$?`, 4, "2, 3, 4, 5."),
  mc(String.raw`Quelle est la première étape pour $x^3>4x$?`, String.raw`$x^3-4x>0$`, [String.raw`$x^2>4$`, String.raw`$x>\sqrt[3]{4x}$`, String.raw`$x>4$`], "Obtiens 0 d'un côté; ne divise jamais par x."),
  mc(String.raw`Résous $-(x-1)(x-5)>0$.`, String.raw`$(1,5)$`, [String.raw`$(-\infty,1)\cup(5,\infty)$`, String.raw`$[1,5]$`, String.raw`$(-5,-1)$`], "Le signe négatif change +, −, + en −, +, −."),
  num(String.raw`Évalue $(x+1)(x-2)(x-3)$ à la valeur test $x=2.5$.`, -0.875, "(3.5)(0.5)(−0.5).", null, 0.0001),
  tf(String.raw`$(x^2+1)(x-3)\lt0$ a la même solution que $x-3\lt0$.`, true, "x² + 1 est toujours positif."),
  mc("Utilise le graphique de f(x) = ½(x + 1)(x − 2)(x − 4) pour résoudre f(x) > 0.", String.raw`$(-1,2)\cup(4,\infty)$`, [String.raw`$(-\infty,-1)\cup(2,4)$`, String.raw`$(4,\infty)$`, String.raw`$(-1,4)$`], "Signes −, +, −, +.", graph((x) => 0.5 * (x + 1) * (x - 2) * (x - 4), { xmin: -2, xmax: 5, ymin: -8, ymax: 6 })),
  mc("Utilise le graphique de f(x) = ½(x − 1)²(x + 3) pour résoudre f(x) ≥ 0.", String.raw`$[-3,\infty)$`, [String.raw`$[1,\infty)$`, String.raw`$[-3,1]$`, String.raw`$(-\infty,-3]$`], "Le graphique touche l'axe en 1 et reste au-dessus.", graph((x) => 0.5 * (x - 1) ** 2 * (x + 3), { xmin: -4, xmax: 2.5, ymin: -4, ymax: 8 })),
  fill("Les zéros qui servent à partager la droite numérique dans un tableau de signes s'appellent les valeurs ___.", ["critiques", "critique", "critical"], "Ce sont les bornes possibles."),
];

export const M = [
  mc(String.raw`Résous $x^3-x^2-6x\lt0$.`, String.raw`$(-\infty,-2)\cup(0,3)$`, [String.raw`$(-2,0)\cup(3,\infty)$`, String.raw`$(-2,3)$`, String.raw`$(0,3)$`], "x(x − 3)(x + 2) : −, +, −, +."),
  mc(String.raw`Résous $x^3-25x\ge0$.`, String.raw`$[-5,0]\cup[5,\infty)$`, [String.raw`$(-\infty,-5]\cup[0,5]$`, String.raw`$[5,\infty)$`, String.raw`$[-5,5]$`], "x(x − 5)(x + 5)."),
  num(String.raw`Combien d'entiers de $-6$ à $6$ vérifient $x^3-16x\lt0$?`, 5, "x < −4 ou 0 < x < 4 : −6, −5, 1, 2, 3."),
  mc(String.raw`Résous $(x+1)(x-2)^2\le0$.`, String.raw`$(-\infty,-1]\cup\{2\}$`, [String.raw`$(-\infty,-1]$`, String.raw`$[-1,2]$`, String.raw`$[-1,\infty)$`], "Le signe de x + 1, plus le zéro en 2."),
  mc(String.raw`Résous $x^4-26x^2+25\ge0$.`, String.raw`$(-\infty,-5]\cup[-1,1]\cup[5,\infty)$`, [String.raw`$[-5,-1]\cup[1,5]$`, String.raw`$[-5,5]$`, String.raw`$(-\infty,-1]\cup[1,\infty)$`], "(x² − 1)(x² − 25) : +, −, +, −, +."),
  num(String.raw`Quel est le plus petit entier positif qui vérifie $x^3-5x^2+6x\le0$?`, 2, "x(x − 2)(x − 3) ≤ 0 : x ≤ 0 ou 2 ≤ x ≤ 3."),
  mc(String.raw`Résous $2x^3-x^2-x>0$.`, String.raw`$\left(-\tfrac12,0\right)\cup(1,\infty)$`, [String.raw`$\left(-\infty,-\tfrac12\right)\cup(0,1)$`, String.raw`$(1,\infty)$`, String.raw`$\left(-\tfrac12,1\right)$`], "x(2x + 1)(x − 1)."),
  tf(String.raw`$x=3$ fait partie de la solution de $(x-3)^2(x+1)>0$.`, false, "Le produit y vaut 0, et l'inéquation est stricte."),
  mc(String.raw`Résous $x^3+3x^2-x-3\le0$.`, String.raw`$(-\infty,-3]\cup[-1,1]$`, [String.raw`$[-3,-1]\cup[1,\infty)$`, String.raw`$[-3,1]$`, String.raw`$(-\infty,-3]$`], "(x + 3)(x − 1)(x + 1)."),
  num(String.raw`Combien d'entiers de $[-4,4]$ vérifient $(x-1)^3(x+2)\le0$?`, 4, "−2 ≤ x ≤ 1 : −2, −1, 0, 1."),
  mc(String.raw`Résous $-2(x-1)(x+4)\ge0$.`, String.raw`$[-4,1]$`, [String.raw`$(-\infty,-4]\cup[1,\infty)$`, String.raw`$(-4,1)$`, String.raw`$[-1,4]$`], "Divise par −2 et inverse le sens : (x − 1)(x + 4) ≤ 0."),
  num(String.raw`Quel est le plus grand entier qui vérifie $(x+5)(x-3)(x-7)\lt0$?`, 6, "x < −5 ou 3 < x < 7."),
  mc("Utilise le graphique de la fonction de degré 4 f(x) = ¼(x + 2)(x + 1)(x − 1)(x − 3) pour résoudre f(x) < 0.", String.raw`$(-2,-1)\cup(1,3)$`, [String.raw`$(-\infty,-2)\cup(-1,1)\cup(3,\infty)$`, String.raw`$(-2,3)$`, String.raw`$(-1,1)$`], "Degré 4 avec a > 0 : +, −, +, −, +.", graph((x) => 0.25 * (x + 2) * (x + 1) * (x - 1) * (x - 3), { xmin: -3, xmax: 4, ymin: -4, ymax: 6 })),
  num(String.raw`Combien d'entiers vérifient $x^4-x^3-6x^2\le0$?`, 6, "x²(x − 3)(x + 2) ≤ 0 : [−2, 3]."),
  mc(String.raw`Résous $x^3>x$.`, String.raw`$(-1,0)\cup(1,\infty)$`, [String.raw`$(1,\infty)$`, String.raw`$(-\infty,-1)\cup(0,1)$`, String.raw`$x>1$ ou $x\lt-1$`], "x(x − 1)(x + 1) > 0."),
  num(String.raw`Pour quelle valeur positive de $k$ la valeur $x=2$ est-elle une valeur critique de $x^3-kx\ge0$?`, 4, "x(x² − k) : x² = k en x = 2."),
  mc(String.raw`Résous $(2x-1)(x+3)\lt0$.`, String.raw`$\left(-3,\tfrac12\right)$`, [String.raw`$\left(-\tfrac12,3\right)$`, String.raw`$(-\infty,-3)\cup\left(\tfrac12,\infty\right)$`, String.raw`$(-3,2)$`], "Entre les zéros −3 et ½."),
  tf(String.raw`$x^3+1>0$ exactement lorsque $x>-1$.`, true, "(x + 1)(x² − x + 1), le trinôme étant toujours positif."),
  mc(String.raw`Résous $x(x+1)(x+2)\ge0$.`, String.raw`$[-2,-1]\cup[0,\infty)$`, [String.raw`$(-\infty,-2]\cup[-1,0]$`, String.raw`$[0,\infty)$`, String.raw`$[-2,0]$`], "Signes −, +, −, +.", graph((x) => x * (x + 1) * (x + 2), { xmin: -3, xmax: 1.5, ymin: -4, ymax: 6 })),
  num(String.raw`Trouve la somme des entiers qui vérifient $(x+1)(x-4)\le0$.`, 9, "−1 + 0 + 1 + 2 + 3 + 4."),
];

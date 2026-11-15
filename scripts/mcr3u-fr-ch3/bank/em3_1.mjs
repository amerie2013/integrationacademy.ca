// 3.1 Les trois formes d'une fonction du second degré — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { P, graph } from "./fig.mjs";

const S = String.raw;
const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const E = [
  num(S`Quelle est l'abscisse du sommet de $y=(x-6)^2+1$?`, 6, "Sommet (6, 1)."),
  num(S`Quelle est l'ordonnée du sommet de $y=-2(x+3)^2-5$?`, -5, "Sommet (−3, −5)."),
  mc(S`Dans quel sens $y=-0.5x^2+3$ est-elle ouverte?`, "vers le bas", ["vers le haut", "vers la gauche", "vers la droite"], "a < 0."),
  num(S`Quel est l'axe de symétrie de $y=(x-2)(x+8)$? Entre la valeur de x.`, -3, "Moyenne de 2 et de −8."),
  num(S`Quelle est l'ordonnée à l'origine de $y=3x^2-x+4$?`, 4, "c."),
  num(S`Quel est le plus grand zéro de $y=(x+1)(x-9)$?`, 9, "Zéros −1 et 9."),
  tf(S`L'image de $y=(x-1)^2+4$ est $y\ge4$.`, true, "Ouverte vers le haut à partir de la hauteur 4."),
  mc("Quelle forme montre directement le sommet?", "la forme canonique", ["la forme générale", "la forme factorisée", "aucune d'elles"], "a(x − h)² + k."),
  num(S`Quelle est l'ordonnée à l'origine de $y=2(x-3)^2-1$?`, 17, "2(9) − 1."),
  num(S`Quelle est la valeur maximale de $y=-(x-4)^2+12$?`, 12, "Sommet (4, 12)."),
  num(S`Quelle est la valeur minimale de $y=x^2-6$?`, -6, "Sommet (0, −6)."),
  tf(S`$y=-3x^2$ a une valeur minimale.`, false, "Elle est ouverte vers le bas : un maximum."),
  mc("Quelle équation correspond à la parabole?", S`$y=(x-2)^2-3$`, [S`$y=(x+2)^2-3$`, S`$y=(x-2)^2+3$`, S`$y=-(x-2)^2-3$`], "Sommet (2, −3), ouverte vers le haut.", graph((x) => (x - 2) ** 2 - 3, V8, [P(2, -3)])),
  num("Lis le graphique : quel est le plus grand zéro?", 5, "Elle coupe l'axe en −1 et en 5.", graph((x) => 0.5 * (x + 1) * (x - 5), V8, [P(-1, 0), P(5, 0)])),
  num(S`Quelle est l'ordonnée à l'origine de $y=-(x+2)(x-6)$?`, 12, "−(2)(−6)."),
  tf("Toute fonction du second degré a pour domaine l'ensemble des nombres réels.", true, "On peut substituer n'importe quelle valeur de x."),
  num(S`Quelle est l'ordonnée du sommet de $y=5(x-1)(x-3)$?`, -5, "Axe x = 2 : 5(1)(−1)."),
  tf(S`L'axe de symétrie de $y=-(x+7)^2+2$ est $x=7$.`, false, "Le signe dans la parenthèse est inversé : x = −7."),
  mc(S`Sous quelle forme $y=4(x-2)(x+6)$ est-elle écrite?`, "la forme factorisée", ["la forme canonique", "la forme générale", "aucune de ces formes"], "Un produit de facteurs linéaires."),
  num("Lis le graphique : quelle est la valeur maximale de la fonction?", 6, "Le sommet (1, 6) est le point le plus haut.", graph((x) => -((x - 1) ** 2) + 6, V8, [P(1, 6)])),
];

export const M = [
  ms(S`Lesquels sont vrais pour $y=-2(x-3)^2+8$? Choisis toutes les bonnes réponses.`, ["sommet (3, 8)", "valeur maximale 8", "zéros 1 et 5", "ordonnée à l'origine −10", "ouverte vers le haut"], [0, 1, 2, 3], "(x − 3)² = 4; −18 + 8 = −10."),
  num(S`Quelle est l'ordonnée à l'origine de $y=0.5(x+4)^2-2$?`, 6, "0.5(16) − 2."),
  num("Lis le graphique : quelle est la plus grande valeur de l'image?", 4, "Sommet (−1, 4), ouverte vers le bas.", graph((x) => -((x + 1) ** 2) + 4, V8, [P(-1, 4)])),
  tf(S`Le sommet de $y=a(x-r)(x-s)$ a toujours pour abscisse $\frac{r+s}2$.`, true, "L'axe est à mi-chemin entre les zéros."),
  num(S`Quelle distance sépare les zéros de $y=(x-3)^2-16$?`, 8, "x = −1 et 7."),
  num(S`Combien d'abscisses à l'origine $y=-(x-2)^2$ a-t-elle?`, 1, "Le sommet (2, 0) est sur l'axe."),
  num(S`La hauteur d'un ballon est $h(t)=-5(t-3)^2+50$ m. De quelle hauteur a-t-il été lancé (t = 0)?`, 5, "−45 + 50."),
  num(S`Quelle est la valeur maximale de $y=-2(x+1)(x-5)$?`, 18, "Axe x = 2 : −2(3)(−3)."),
  num(S`Quelle est l'ordonnée à l'origine de $y=-3(x-2)(x+4)$?`, 24, "−3(−2)(4)."),
  mc(S`Quelle est l'image de $y=3(x+1)(x-3)$?`, S`$y\ge-12$`, [S`$y\le-12$`, S`$y\ge-3$`, S`$y\ge1$`], "Axe x = 1 : 3(2)(−2) = −12, et a > 0."),
  num(S`Quelle distance sépare les zéros de $y=2(x+3)^2-8$?`, 4, "(x + 3)² = 4 : x = −1 ou −5."),
  ms("Quelles fonctions ont une valeur maximale? Choisis toutes les bonnes réponses.", [S`$y=-(x-1)^2$`, S`$y=5-2x^2$`, S`$y=(3-x)(x+1)$`, S`$y=2(x+4)^2-9$`, S`$y=x^2-10$`], [0, 1, 2], "Un maximum exige a < 0; (3 − x)(x + 1) a a = −1."),
  num(S`Combien de zéros $y=-3(x-4)^2-1$ a-t-elle?`, 0, "Ouverte vers le bas à partir de la hauteur −1 : elle n'atteint jamais 0."),
  tf(S`$y=(x-3)(x+5)$ et $y=2(x-3)(x+5)$ ont le même sommet.`, false, "Même axe x = −1, mais les minimums sont −16 et −32."),
  num(S`Quelle est la valeur minimale de $y=0.5x(x-8)$?`, -8, "Axe x = 4 : 0.5(4)(−4)."),
  num("Lis le graphique : quel est le plus petit zéro?", -5, "Elle coupe l'axe en −5 et en 1.", graph((x) => -0.5 * (x + 5) * (x - 1), V8, [P(-5, 0), P(1, 0)])),
  mc("Quel énoncé au sujet de la parabole ci-contre est vrai?", S`son image est $y\ge-4$`, ["son axe est x = 2", "sa valeur maximale est −4", "ses zéros sont −2 et 2"], "Sommet (−2, −4), ouverte vers le haut, zéros −4 et 0.", graph((x) => (x + 2) ** 2 - 4, V8, [P(-2, -4), P(-4, 0), P(0, 0)])),
  num(S`La hauteur d'un ballon est $h(t)=-5(t-1.5)^2+16.25$ m. Quelle est sa hauteur maximale?`, 16.25, "Le k du sommet.", null, 0.001),
  num(S`L'axe de $y=-(x-p)(x+3)$ est $x=2$. Trouve $p$.`, 7, "(p − 3)/2 = 2."),
  num(S`Quelle est l'ordonnée à l'origine de $y=-(x+3)^2+10$?`, 1, "−9 + 10."),
];

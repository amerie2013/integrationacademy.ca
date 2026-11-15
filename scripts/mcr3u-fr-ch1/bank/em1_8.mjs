// 1.8 Combiner des transformations — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch1/bank/em1_8.mjs)
// Notation française : y = af(k(x − c)) + d (c horizontal, d vertical) — lettres échangées, aucun nombre ne change.
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const E = [
  num(String.raw`Dans $y=5f(2(x-3))+1$, que vaut $k$?`, 2, "Le facteur qui multiplie (x − c)."),
  num(String.raw`Dans $y=5f(2(x-3))+1$, que vaut $c$?`, 3, "x − 3."),
  num(String.raw`Dans $y=-f(x+4)-6$, que vaut $d$?`, -6, "Il est additionné à l'extérieur."),
  num(String.raw`Dans $y=-f(x+4)-6$, que vaut $c$?`, -4, "x + 4 = x − (−4)."),
  mc("Dans quel ordre applique-t-on les transformations?", "les étirements, compressions et réflexions, puis les translations", ["les translations, puis les étirements", "l'horizontale avant la verticale, toujours", "l'ordre n'a jamais d'importance"], "Multiplier d'abord, additionner en dernier."),
  num(String.raw`Par $y=2f(x)+3$, quelle est l'ordonnée de l'image de $(1,4)$?`, 11, "2(4) + 3."),
  num(String.raw`Par $y=f(x-5)$, quelle est l'abscisse de l'image de $(2,7)$?`, 7, "2 + 5."),
  num(String.raw`Par $y=f(3x)$, quelle est l'abscisse de l'image de $(9,1)$?`, 3, "9 ÷ 3."),
  num(String.raw`Écris $f(2x-8)$ sous la forme $f(2(x-c))$. Trouve $c$.`, 4, "2x − 8 = 2(x − 4)."),
  num(String.raw`Écris $f(3x+6)$ sous la forme $f(3(x-c))$. Trouve $c$.`, -2, "3x + 6 = 3(x + 2)."),
  mc(String.raw`La règle de correspondance pour $y=af(k(x-c))+d$ est…`, String.raw`$(x,y)\to\left(\frac xk+c,\ ay+d\right)$`, [String.raw`$(x,y)\to(kx+c,\ ay+d)$`, String.raw`$(x,y)\to\left(\frac xk-c,\ ay-d\right)$`, String.raw`$(x,y)\to(x+c,\ y+d)$`], "Diviser par k, additionner c; multiplier par a, additionner d."),
  tf(String.raw`Dans $y=f(2x-6)$, le graphique se déplace de 6 unités vers la droite.`, false, "f(2(x − 3)) : 3 vers la droite."),
  tf(String.raw`Dans $y=-2f(x)$, le graphique subit une réflexion par rapport à l'axe des x et un étirement vertical de facteur 2.`, true, "a = −2."),
  mc(String.raw`Quel est le sommet de $y=3(x+1)^2-4$?`, String.raw`$(-1,-4)$`, [String.raw`$(1,-4)$`, String.raw`$(-1,4)$`, String.raw`$(3,-4)$`], "c = −1, d = −4."),
  mc(String.raw`Où $y=\sqrt{2(x-1)}+5$ commence-t-elle?`, String.raw`$(1,5)$`, [String.raw`$(2,5)$`, String.raw`$(-1,5)$`, String.raw`$(1,-5)$`], "(0, 0) → (c, d)."),
  mc("Quelle équation correspond au graphique en forme de V?", String.raw`$y=2|x-1|-3$`, [String.raw`$y=2|x+1|-3$`, String.raw`$y=|x-1|-3$`, String.raw`$y=-2|x-1|-3$`], "Sommet (1, −3); pentes ±2.", graph((x) => 2 * Math.abs(x - 1) - 3, V8, [P(1, -3), P(2, -1)])),
  mc("Quelle équation correspond à la courbe?", String.raw`$y=-\sqrt{x+2}+1$`, [String.raw`$y=\sqrt{x+2}+1$`, String.raw`$y=-\sqrt{x-2}+1$`, String.raw`$y=-\sqrt{x+1}+2$`], "Commence en (−2, 1) et descend.", graph((x) => -Math.sqrt(x + 2) + 1, V8, [P(-2, 1)], { a: -2 })),
  mx(String.raw`Écris : $y=x^2$ étirée verticalement par un facteur 2, puis 3 vers la gauche et 1 vers le bas.`, "2*(x+3)^2-1", "a = 2, c = −3, d = −1."),
  num(String.raw`Quelle est la valeur minimale de l'image de $y=4|x+2|+3$?`, 3, "Sommet (−2, 3)."),
  mc(String.raw`Quel est le domaine de $y=\sqrt{-(x-4)}$?`, String.raw`$x\le4$`, [String.raw`$x\ge4$`, String.raw`$x\ge-4$`, String.raw`$x\in\mathbb R$`], "−(x − 4) ≥ 0."),
];

export const M = [
  num(String.raw`Par $y=-3f(2(x+1))+4$, trouve l'abscisse de l'image de $(8,2)$.`, 3, "8 ÷ 2 − 1."),
  num(String.raw`Par $y=-3f(2(x+1))+4$, trouve l'ordonnée de l'image de $(6,5)$.`, -11, "−3(5) + 4."),
  mc(String.raw`Décris $y=\tfrac12f(-(x-3))+2$.`, String.raw`compression verticale de facteur ½, réflexion par rapport à l'axe des y, 3 vers la droite, 2 vers le haut`, [String.raw`étirement vertical de facteur 2, réflexion par rapport à l'axe des x, 3 vers la gauche, 2 vers le haut`, String.raw`compression de facteur ½, réflexion par rapport à l'axe des x, 3 vers la droite, 2 vers le haut`, String.raw`compression de facteur ½, réflexion par rapport à l'axe des y, 3 vers la gauche, 2 vers le bas`], "a = ½, k = −1, c = 3, d = 2."),
  mx(String.raw`Écris : $y=\sqrt x$ comprimée horizontalement par un facteur $\tfrac14$, réfléchie par rapport à l'axe des x, 2 vers la droite et 5 vers le haut.`, "-sqrt(4*(x-2))+5", "k = 4, a = −1, c = 2, d = 5."),
  mc(String.raw`Donne le domaine et l'image de $y=3\sqrt{-(x+1)}-2$.`, String.raw`$x\le-1$; $y\ge-2$`, [String.raw`$x\ge-1$; $y\ge-2$`, String.raw`$x\le-1$; $y\le-2$`, String.raw`$x\le1$; $y\ge2$`], "k < 0 envoie la racine vers la gauche; a > 0 la garde au-dessus de d."),
  num(String.raw`$y=(3x-12)^2+1$. Quelle est l'abscisse du sommet?`, 4, "3(x − 4)."),
  num(String.raw`Pour $y=-2\left(\tfrac12(x-2)\right)^2+8$, trouve la plus grande abscisse à l'origine.`, 6, "−½(x − 2)² + 8 = 0 → (x − 2)² = 16."),
  num(String.raw`Le point $(1,1)$ de $y=\frac1x$ correspond à quelle abscisse par $y=\frac{3}{2(x-1)}+4$?`, 1.5, "1 ÷ 2 + 1.", null, 0.001),
  mc(String.raw`Quelles sont les asymptotes de $y=\frac{-2}{x+5}+1$?`, String.raw`$x=-5$, $y=1$`, [String.raw`$x=5$, $y=1$`, String.raw`$x=-5$, $y=-2$`, String.raw`$x=1$, $y=-5$`], "c = −5, d = 1."),
  ms(String.raw`Lesquelles sont équivalentes à $y=(4x+8)^2$? Choisis toutes les bonnes réponses.`, [String.raw`$y=16(x+2)^2$`, String.raw`$y=(4(x+2))^2$`, String.raw`$y=4(x+2)^2$`, String.raw`$y=(x+8)^2$`], [0, 1], "(4(x + 2))² = 16(x + 2)²."),
  num("La courbe rouge est y = a√(x − c) + d. Elle commence en (−3, 4) et passe par (1, 0). Trouve a.", -2, "0 = a√4 + 4.", graph((x) => -2 * Math.sqrt(x + 3) + 4, V8, [P(-3, 4), P(1, 0)], { a: -3 })),
  num(String.raw`$f$ a pour domaine $0\le x\le6$. Trouve l'extrémité droite du domaine de $y=f(\tfrac13(x+2))$.`, 16, "6 ÷ ⅓ − 2."),
  num(String.raw`$f$ a pour image $-4\le y\le2$. Trouve la plus grande valeur de l'image de $y=-\tfrac12f(x)+1$.`, 3, "−½(−4) + 1."),
  tf(String.raw`$y=2f(x)+6$ et $y=2(f(x)+3)$ donnent le même graphique.`, true, "2(f(x) + 3) = 2f(x) + 6."),
  tf(String.raw`$y=f(2x)+1$ et $y=f(2x+1)$ donnent le même graphique.`, false, "La première monte de 1; la deuxième se déplace de ½ vers la gauche."),
  mc("La courbe grise est y = |x|. Quelle équation donne la courbe ambre?", String.raw`$y=-\tfrac12|x+2|+3$`, [String.raw`$y=-2|x+2|+3$`, String.raw`$y=\tfrac12|x+2|+3$`, String.raw`$y=-\tfrac12|x-2|+3$`], "Sommet (−2, 3); descend de ½ par unité.", planeDoc({ view: V8, curves: [{ f: (x) => Math.abs(x), color: "gray" }, { f: (x) => -0.5 * Math.abs(x + 2) + 3, color: "amber" }], points: [P(-2, 3), P(2, 1)] })),
  num(String.raw`$y=a(x-1)^2-5$ passe par $(3,7)$. Trouve $a$.`, 3, "4a − 5 = 7."),
  num(String.raw`Où $y=-\sqrt{x+9}+2$ coupe-t-elle l'axe des x?`, -5, "√(x + 9) = 2."),
  mc(String.raw`$y=f(x)$ a un minimum en $(2,-1)$. Où est le maximum de $y=-2f(x+3)+4$?`, String.raw`$(-1,6)$`, [String.raw`$(5,6)$`, String.raw`$(-1,2)$`, String.raw`$(-1,-6)$`], "x : 2 − 3; y : −2(−1) + 4; a < 0 transforme le minimum en maximum."),
  num(String.raw`Pour $y=2\sqrt{3x-6}+1$, quel est le plus petit x du domaine?`, 2, "3x − 6 ≥ 0."),
];

// 3.2 Passer d'une forme à l'autre — 20 questions faciles + 20 moyennes
import { mc, num, tf, mx } from "./kit.mjs";
import { P, graph } from "./fig.mjs";

const S = String.raw;
const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const E = [
  num(S`Utilise $x=-\frac{b}{2a}$ : quel est l'axe de symétrie de $y=x^2-10x+3$?`, 5, "−b/(2a) = 10/2."),
  num(S`Quel est le plus petit zéro de $y=x^2-x-20$?`, -4, "(x − 5)(x + 4)."),
  mx(S`Développe $y=(x+2)^2+1$ pour obtenir la forme générale.`, "x^2+4*x+5", "x² + 4x + 4 + 1."),
  mx(S`Écris $y=(x-1)(x+6)$ sous forme générale.`, "x^2+5*x-6", "Multiplie les parenthèses."),
  num(S`Écris $y=2(x+1)^2-3$ sous forme générale. Quel est le terme constant?`, -1, "2(x² + 2x + 1) − 3 = 2x² + 4x − 1."),
  num(S`Quelle est la valeur de $a$ lorsque $y=-4(x-3)^2+1$ est écrite sous forme générale?`, -4, "a ne change jamais."),
  mc(S`Quelle est la forme factorisée de $x^2+7x+10$?`, "(x + 2)(x + 5)", ["(x + 1)(x + 10)", "(x − 2)(x − 5)", "(x + 3)(x + 4)"], "Produit 10, somme 7."),
  num(S`Utilise $x=-\frac{b}{2a}$ : quel est l'axe de $y=2x^2-12x+5$?`, 3, "12/4."),
  num(S`Quel est le plus grand zéro de $y=x^2-4x-21$?`, 7, "(x − 7)(x + 3)."),
  tf("Passer d'une forme à une autre change la valeur de a.", false, "a est le même dans toutes les formes."),
  num("Les zéros d'une parabole sont −2 et 8. Quelle est l'abscisse de son sommet?", 3, "Fais la moyenne des zéros."),
  mc(S`Que dois-tu faire d'abord pour factoriser $5x^2-20x-25$?`, "mettre le facteur commun 5 en évidence", ["utiliser la formule de l'axe", "développer l'expression", "ajouter 25 aux deux membres"], "5(x² − 4x − 5) = 5(x − 5)(x + 1)."),
  num(S`Écris $y=-(x+3)(x-3)$ sous forme générale. Quel est le terme constant?`, 9, "−(x² − 9) = −x² + 9."),
  num(S`Quelle est l'ordonnée du sommet de $y=(x-2)(x-6)$?`, -4, "Axe 4 : (2)(−2)."),
  mc(S`L'axe de symétrie de $y=ax^2+bx+c$ est :`, S`$x=-\frac{b}{2a}$`, [S`$x=\frac{b}{2a}$`, S`$x=-\frac{2a}{b}$`, S`$x=c$`], "À mi-chemin entre x = 0 et x = −b/a."),
  num(S`Factorise $y=x^2-16$. Quel est le zéro positif?`, 4, "(x − 4)(x + 4)."),
  num(S`$y=3x^2+6x$. Quel est son zéro non nul?`, -2, "3x(x + 2)."),
  num("La parabole ci-contre a les zéros −1 et 3 et a = 1. Quelle est la valeur de b dans sa forme générale?", -2, "(x + 1)(x − 3) = x² − 2x − 3.", graph((x) => (x + 1) * (x - 3), V8, [P(-1, 0), P(3, 0), P(0, -3)])),
  num("La parabole ci-contre a le sommet (−2, 1) et a = 1. Écris-la sous forme générale. Quelle est la valeur de c?", 5, "(x + 2)² + 1 = x² + 4x + 5.", graph((x) => (x + 2) ** 2 + 1, V8, [P(-2, 1)])),
  num("Une parabole a le sommet (0, −3) et passe par (1, −1). Trouve a.", 2, "a(1)² − 3 = −1."),
];

export const M = [
  num(S`Quelle est l'ordonnée du sommet de $y=x^2-8x+10$?`, -6, "x = 4 : 16 − 32 + 10."),
  num(S`Quelle est la valeur maximale de $y=-3x^2+12x-5$?`, 7, "x = 2 : −12 + 24 − 5."),
  mx(S`Écris $y=2(x-1)^2-3$ sous forme générale.`, "2*x^2-4*x-1", "2(x² − 2x + 1) − 3."),
  mx(S`Écris $y=-(x+4)(x-2)$ sous forme générale.`, "-x^2-2*x+8", "−(x² + 2x − 8)."),
  num(S`Trouve $a$ si $y=a(x-2)(x-6)$ passe par $(4,8)$.`, -2, "a(2)(−2) = 8."),
  num("Une parabole a le sommet (1, −5) et passe par (3, 3). Trouve a.", 2, "4a − 5 = 3."),
  mc("Quelle équation correspond au graphique?", S`$y=2(x+3)(x-1)$`, [S`$y=(x+3)(x-1)$`, S`$y=2(x-3)(x+1)$`, S`$y=-2(x+3)(x-1)$`], "Zéros −3, 1; ordonnée à l'origine −6 = a(3)(−1).", graph((x) => 2 * (x + 3) * (x - 1), V8, [P(-3, 0), P(1, 0), P(0, -6)])),
  num(S`Quelle est la valeur minimale de $y=4x^2-8x+1$?`, -3, "x = 1 : 4 − 8 + 1."),
  num(S`Écris $y=(x-5)^2+2$ sous forme générale. Quelle est la valeur de $c$?`, 27, "25 + 2."),
  num(S`Quel est l'axe de symétrie de $y=-4x^2+24x-1$?`, 3, "−24/(−8)."),
  mx(S`Écris $y=-2(x+3)^2+4$ sous forme générale.`, "-2*x^2-12*x-14", "−2(x² + 6x + 9) + 4."),
  mx(S`Écris $y=3(x-1)(x-4)$ sous forme générale.`, "3*x^2-15*x+12", "3(x² − 5x + 4)."),
  num(S`Écris $y=x^2+8x+7$ sous forme canonique $y=(x-h)^2+k$. Quelle est la valeur de $k$?`, -9, "h = −4 : 16 − 32 + 7."),
  num(S`Écris $y=-x^2+6x-2$ sous forme canonique. Quelle est la valeur de $k$?`, 7, "h = 3 : −9 + 18 − 2."),
  num("Une parabole a les zéros −6 et 2 et passe par (0, 6). Trouve a.", -0.5, "a(6)(−2) = −12a = 6.", null, 0.001),
  num("Une parabole a le sommet (4, −2) et l'ordonnée à l'origine 6. Trouve a.", 0.5, "16a − 2 = 6.", null, 0.001),
  num(S`Trouve les zéros de $y=2x^2+10x+12$. Entre le plus grand.`, -2, "2(x + 2)(x + 3)."),
  mc("Quelle équation sous forme canonique correspond au graphique?", S`$y=\tfrac12(x-2)^2-2$`, [S`$y=2(x-2)^2-2$`, S`$y=\tfrac12(x+2)^2-2$`, S`$y=(x-2)^2-2$`], "Sommet (2, −2); passe par (0, 0) : 4a − 2 = 0.", graph((x) => 0.5 * (x - 2) ** 2 - 2, V8, [P(2, -2), P(0, 0), P(4, 0)])),
  num(S`$y=x^2+bx+c$ a les zéros 3 et 7. Trouve $c$.`, 21, "(x − 3)(x − 7)."),
  tf(S`$y=2(x-1)^2+3$ et $y=2x^2-4x+5$ sont la même fonction.`, true, "2x² − 4x + 2 + 3."),
];

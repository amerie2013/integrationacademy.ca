// 2.2 Théorème des facteurs — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const TOPIC = "2.2 Théorème des facteurs";
export const Q = [
  num(String.raw`$x-2$ et $x+3$ sont des facteurs de $x^3+ax^2+bx-12$. Trouve $a$.`, 3, "P(2) = 0 : 2a + b = 2. P(−3) = 0 : 3a − b = 13."),
  num(String.raw`$x-2$ et $x+5$ sont des facteurs de $x^3+4x^2-7x-10$. Trouve le troisième zéro.`, -1, "Divise par (x − 2)(x + 5) = x² + 3x − 10 : quotient x + 1."),
  num(String.raw`Trouve le plus grand zéro de $x^4+x^3-13x^2-x+12$.`, 3, "P(1) = P(−1) = 0; quotient x² + x − 12 = (x + 4)(x − 3).", graph((x) => (x * x - 1) * (x + 4) * (x - 3), { xmin: -5, xmax: 4, ymin: -40, ymax: 30 }, [], { step: { x: 1, y: 10 } })),
  num(String.raw`Trouve $k$ pour que $x-2$ soit un facteur de $x^3-kx^2+(k+1)x-2$.`, 4, "8 − 4k + 2k + 2 − 2 = 8 − 2k = 0."),
  mc("La fonction de degré 4 illustrée a un coefficient dominant de 1 et touche l'axe des x une fois. Quelle forme factorisée convient?", String.raw`$(x-1)^2(x+2)(x-3)$`, [String.raw`$(x+1)^2(x-2)(x+3)$`, String.raw`$(x-1)(x+2)(x-3)$`, String.raw`$(x-1)^2(x+2)^2$`], "Touche l'axe en 1, le coupe en −2 et 3.", graph((x) => (x - 1) ** 2 * (x + 2) * (x - 3), { xmin: -3, xmax: 4, ymin: -16, ymax: 14 })),
  num(String.raw`Trouve le produit des zéros de $x^3-3x^2-10x+24$.`, -24, "P(2) = 0; quotient (x − 4)(x + 3) : 2 · 4 · (−3)."),
  tf(String.raw`$x+a$ est un facteur de $x^3+a^3$ pour tout réel $a$.`, true, "P(−a) = −a³ + a³ = 0."),
  tf(String.raw`$x+a$ est un facteur de $x^4+a^4$ pour tout réel $a\ne0$.`, false, "P(−a) = 2a⁴ ≠ 0."),
  num(String.raw`Pour combien de nombres naturels $n$ de 1 à 10 le binôme $x+1$ est-il un facteur de $x^n+1$?`, 5, "(−1)ⁿ + 1 = 0 pour n impair."),
  mc(String.raw`Factorise complètement $x^6-1$ avec des coefficients entiers.`, String.raw`$(x-1)(x+1)(x^2+x+1)(x^2-x+1)$`, [String.raw`$(x^3-1)^2$`, String.raw`$(x-1)(x+1)(x^4+x^2+1)$`, String.raw`$(x^2-1)(x^2+1)^2$`], "(x³ − 1)(x³ + 1), puis chaque formule des cubes."),
  num(String.raw`Trouve la somme des zéros rationnels de $6x^3-7x^2-x+2$ (2 décimales).`, 1.1667, "P(1) = 0; quotient (3x − 2)(2x + 1) : 1 + ⅔ − ½.", null, 0.006),
  num("La fonction de degré 3 illustrée a un coefficient dominant de 2. Trouve son ordonnée à l'origine.", 6, "Zéros −3/2, 1, 2 : (2x + 3)(x − 1)(x − 2); en x = 0 : 3 · (−1)(−2).", graph((x) => (2 * x + 3) * (x - 1) * (x - 2), { xmin: -2, xmax: 3, ymin: -8, ymax: 10 }, [P(-1.5, 0), P(1, 0), P(2, 0)])),
  mc(String.raw`$(x-2)^2$ est un facteur de $P(x)$. Quel énoncé est nécessairement vrai?`, String.raw`$P(2)=0$ et le quotient $P(x)\div(x-2)$ a aussi le zéro 2`, [String.raw`$P(4)=0$`, String.raw`$P(-2)=0$`, String.raw`$P(2)=4$`], "Une première division laisse un autre facteur x − 2."),
  num(String.raw`$x-1$ est un facteur de $x^3+px^2+qx+2$, et la division par $x+1$ laisse un reste de 4. Trouve $q$.`, -3, "p + q = −3 et p − q = 3."),
  num(String.raw`Combien de candidats rationnels le théorème des zéros rationnels donne-t-il pour $3x^4-x^2+4$?`, 12, "±1, ±2, ±4, ±⅓, ±⅔, ±4/3."),
  mc(String.raw`Factorise $8x^3+27$.`, String.raw`$(2x+3)(4x^2-6x+9)$`, [String.raw`$(2x+3)(4x^2+6x+9)$`, String.raw`$(2x-3)(4x^2+6x+9)$`, String.raw`$(8x+27)(x^2+1)$`], "(2x)³ + 3³."),
  num(String.raw`Combien de zéros réels distincts $x^4+x^3+x+1$ a-t-il?`, 1, "(x + 1)(x³ + 1) = (x + 1)²(x² − x + 1)."),
  num("La fonction de degré 3 illustrée a un coefficient dominant de −1. Trouve P(0).", -8, "Zéros −2, 1, 4 : −(x + 2)(x − 1)(x − 4); en 0 : −(2)(−1)(−4).", graph((x) => -(x + 2) * (x - 1) * (x - 4), { xmin: -3, xmax: 5, ymin: -20, ymax: 20 }, [P(-2, 0), P(1, 0), P(4, 0)], { step: { x: 1, y: 5 } })),
  tf("Si la somme des coefficients d'un polynôme est 0, alors x − 1 est un facteur.", true, "La somme des coefficients est P(1)."),
  num(String.raw`Pour quelle valeur de $k$ le binôme $x-k$ est-il un facteur à la fois de $x^2-5x+6$ et de $x^2-7x+12$?`, 3, "Zéro commun : 3."),
];

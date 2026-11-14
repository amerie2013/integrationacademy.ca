// 2.2 Théorème des facteurs — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const E = [
  tf(String.raw`Si $P(3)=0$, alors $x-3$ est un facteur de $P(x)$.`, true, "C'est le théorème des facteurs."),
  mc(String.raw`Lequel est un facteur de $x^2-5x+6$?`, String.raw`$x-2$`, [String.raw`$x+2$`, String.raw`$x+3$`, String.raw`$x-6$`], "P(2) = 4 − 10 + 6 = 0."),
  num(String.raw`Évalue $P(1)$ pour $P(x)=x^3-4x^2+x+2$.`, 0, "1 − 4 + 1 + 2 : donc x − 1 est un facteur."),
  mc(String.raw`Un zéro en $x=-4$ donne quel facteur?`, String.raw`$x+4$`, [String.raw`$x-4$`, String.raw`$4x$`, String.raw`$x-\tfrac14$`], "x − (−4)."),
  mc(String.raw`Un zéro en $x=\tfrac23$ donne quel facteur à coefficients entiers?`, String.raw`$3x-2$`, [String.raw`$2x-3$`, String.raw`$3x+2$`, String.raw`$x-3$`], "3x − 2 = 0 donne x = ⅔."),
  num(String.raw`Combien de candidats entiers le théorème des zéros entiers donne-t-il pour $x^3+2x^2-x-6$?`, 8, "±1, ±2, ±3, ±6."),
  tf(String.raw`$x+1$ est un facteur de $x^3+1$.`, true, "(−1)³ + 1 = 0."),
  tf(String.raw`$x-1$ est un facteur de $x^3+1$.`, false, "1 + 1 = 2 ≠ 0."),
  mc(String.raw`Factorise complètement $x^3-x$.`, String.raw`$x(x-1)(x+1)$`, [String.raw`$x(x^2+1)$`, String.raw`$(x-1)^2(x+1)$`, String.raw`$x^2(x-1)$`], "Facteur commun, puis différence de carrés."),
  mc(String.raw`Factorise $x^3+x^2-x-1$.`, String.raw`$(x+1)^2(x-1)$`, [String.raw`$(x-1)^2(x+1)$`, String.raw`$(x+1)(x^2+1)$`, String.raw`$(x-1)(x^2+1)$`], "x²(x + 1) − (x + 1) = (x + 1)(x² − 1)."),
  num(String.raw`Trouve $k$ pour que $x-1$ soit un facteur de $x^2+kx-3$.`, 2, "1 + k − 3 = 0."),
  mc(String.raw`Quelle valeur est un zéro de $x^3-8$?`, String.raw`$2$`, [String.raw`$-2$`, String.raw`$8$`, String.raw`$4$`], "2³ = 8."),
  num(String.raw`Combien des valeurs $1$ et $-1$ sont des zéros de $x^3-x^2-x+1$?`, 2, "P(1) = 0 et P(−1) = 0."),
  mc("Le graphique coupe l'axe des x seulement au point marqué. Quel binôme est un facteur?", String.raw`$x-3$`, [String.raw`$x+3$`, String.raw`$x-1$`, String.raw`$x+1$`], "Abscisse à l'origine 3 ↔ facteur x − 3.", graph((x) => 0.5 * (x - 3) * (x * x + 1), { xmin: -1, xmax: 4.5, ymin: -8, ymax: 8 }, [P(3, 0)])),
  tf(String.raw`Tout zéro entier de $x^3-3x+5$ doit diviser 5.`, true, "Théorème des zéros entiers."),
  num(String.raw`Trouve le zéro du facteur $2x-5$.`, 2.5, "2x = 5.", null, 0.001),
  mc(String.raw`Quel est le facteur du second degré de $x^3-1$?`, String.raw`$x^2+x+1$`, [String.raw`$x^2-x+1$`, String.raw`$x^2+1$`, String.raw`$x^2-1$`], "Divise par x − 1 : 1, 1, 1."),
  num(String.raw`Évalue $P(-2)$ pour $P(x)=x^3+2x^2-x-2$.`, 0, "−8 + 8 + 2 − 2."),
  mc("Quelle forme factorisée correspond au graphique (coefficient dominant 1)?", String.raw`$(x+1)(x-1)(x-2)$`, [String.raw`$(x-1)(x+1)(x+2)$`, String.raw`$(x+1)^2(x-2)$`, String.raw`$x(x-1)(x-2)$`], "Abscisses à l'origine −1, 1, 2.", graph((x) => (x + 1) * (x - 1) * (x - 2), { xmin: -2, xmax: 3, ymin: -4, ymax: 4 })),
  fill(String.raw`D'après le théorème des facteurs, $x-b$ est un facteur de $P(x)$ exactement lorsque $P(b)=$ ___.`, ["0", "zéro", "zero"], "Reste de 0."),
];

export const M = [
  mc(String.raw`Factorise $x^3-2x^2-x+2$.`, String.raw`$(x-2)(x-1)(x+1)$`, [String.raw`$(x+2)(x-1)(x+1)$`, String.raw`$(x-2)(x^2+1)$`, String.raw`$(x-2)^2(x+1)$`], "x²(x − 2) − (x − 2)."),
  mc(String.raw`Factorise $x^3-x^2-8x+12$.`, String.raw`$(x-2)^2(x+3)$`, [String.raw`$(x+2)^2(x-3)$`, String.raw`$(x-2)(x+2)(x+3)$`, String.raw`$(x-1)(x-3)(x+4)$`], "P(2) = 0; quotient x² + x − 6 = (x + 3)(x − 2)."),
  num(String.raw`Trouve $k$ pour que $x+2$ soit un facteur de $x^3+kx^2+4$.`, 1, "−8 + 4k + 4 = 0."),
  num(String.raw`Trouve $k$ pour que $x-3$ soit un facteur de $2x^3-7x^2+kx+3$.`, 2, "54 − 63 + 3k + 3 = 0."),
  num(String.raw`Combien de candidats rationnels le théorème des zéros rationnels donne-t-il pour $2x^3+x^2-5x+3$?`, 8, "±1, ±3, ±½, ±3/2."),
  mc(String.raw`Factorise $3x^3-4x^2-5x+2$.`, String.raw`$(x-2)(3x-1)(x+1)$`, [String.raw`$(x+2)(3x+1)(x-1)$`, String.raw`$(x-2)(3x+1)(x-1)$`, String.raw`$(x-1)(3x-2)(x+1)$`], "P(2) = 0; quotient 3x² + 2x − 1."),
  num(String.raw`Combien de zéros réels $x^3+2x^2+3x+6$ a-t-il?`, 1, "(x + 2)(x² + 3)."),
  mc(String.raw`Factorise $x^4-29x^2+100$.`, String.raw`$(x-2)(x+2)(x-5)(x+5)$`, [String.raw`$(x^2-4)(x^2+25)$`, String.raw`$(x-2)^2(x-5)^2$`, String.raw`$(x-4)(x+4)(x-25)$`], "(x² − 4)(x² − 25)."),
  num(String.raw`Trouve la somme des zéros de $x^3-7x-6$.`, 0, "(x + 1)(x + 2)(x − 3) : −1 − 2 + 3."),
  mc("Quelle forme factorisée correspond à la fonction de degré 4 illustrée (coefficient dominant 1)?", String.raw`$(x+2)(x+1)(x-1)(x-3)$`, [String.raw`$(x-2)(x-1)(x+1)(x+3)$`, String.raw`$(x+2)(x+1)(x-1)^2$`, String.raw`$(x+2)(x-1)(x-3)$`], "Quatre passages : −2, −1, 1, 3.", graph((x) => (x + 2) * (x + 1) * (x - 1) * (x - 3), { xmin: -3, xmax: 4, ymin: -16, ymax: 12 })),
  tf(String.raw`$x-2$ est un facteur de $x^4-16$.`, true, "16 − 16 = 0."),
  num(String.raw`Trouve $k$ pour que $x+1$ soit un facteur de $x^4+kx^2+3$.`, -4, "1 + k + 3 = 0."),
  mc(String.raw`Factorise $x^3+27$.`, String.raw`$(x+3)(x^2-3x+9)$`, [String.raw`$(x+3)(x^2+3x+9)$`, String.raw`$(x-3)(x^2+3x+9)$`, String.raw`$(x+3)^3$`], "Somme de cubes."),
  mc(String.raw`Lequel est un zéro de $2x^3-3x^2-3x+2$?`, String.raw`$\tfrac12$`, [String.raw`$\tfrac13$`, String.raw`$\tfrac32$`, String.raw`$-\tfrac12$`], "P(½) = ¼ − ¾ − 3/2 + 2 = 0."),
  num(String.raw`$x^3+ax^2-4x-4$ a pour facteur $x-2$. Trouve $a$.`, 1, "8 + 4a − 8 − 4 = 0."),
  mc(String.raw`Factorise $4x^3-8x^2-x+2$.`, String.raw`$(x-2)(2x-1)(2x+1)$`, [String.raw`$(x-2)(4x^2+1)$`, String.raw`$(x+2)(2x-1)(2x+1)$`, String.raw`$(x-2)(2x-1)^2$`], "4x²(x − 2) − (x − 2)."),
  num(String.raw`Combien de zéros réels distincts $x^4-2x^2+1$ a-t-il?`, 2, "(x² − 1)² = (x − 1)²(x + 1)²."),
  mc("La fonction de degré 3 illustrée a un coefficient dominant de 3. Quelle forme factorisée convient?", String.raw`$(x+1)(3x-1)(x-2)$`, [String.raw`$3(x+1)(x-1)(x-2)$`, String.raw`$(x-1)(3x+1)(x+2)$`, String.raw`$(x+1)(x-3)(x-2)$`], "Zéros −1, ⅓, 2.", graph((x) => (x + 1) * (3 * x - 1) * (x - 2), { xmin: -2, xmax: 3, ymin: -6, ymax: 8 }, [P(-1, 0, false), P(1 / 3, 0, false), P(2, 0, false)])),
  tf("Toute fonction polynomiale de degré 3 à coefficients entiers a un zéro rationnel.", false, "p. ex. x³ − 2 n'a que le zéro réel irrationnel ∛2."),
  num(String.raw`Trouve $k$ pour que $2x-1$ soit un facteur de $2x^3+x^2+kx-2$.`, 3, "P(½) = ¼ + ¼ + k/2 − 2 = 0."),
];

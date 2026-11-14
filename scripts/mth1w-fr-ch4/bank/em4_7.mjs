// 4.7 Déterminer l'équation d'une droite — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(String.raw`Trouve la pente de la droite passant par $(1,3)$ et $(3,11)$.`, 4, "8 ÷ 2."),
  num(String.raw`Trouve la pente de la droite passant par $(0,5)$ et $(5,0)$.`, -1, "−5 ÷ 5."),
  mx(String.raw`Écris la droite de pente $3$ et d'ordonnée à l'origine $-7$.`, "3*x-7", "y = 3x − 7."),
  mx(String.raw`Écris la droite de pente $-2$ passant par $(0,4)$.`, "-2*x+4", "b = 4."),
  num(String.raw`Une droite a une pente de 2 et passe par $(3,10)$. Trouve b.`, 4, "10 = 6 + b."),
  num(String.raw`Une droite a une pente de −1 et passe par $(2,5)$. Trouve b.`, 7, "5 = −2 + b."),
  mx(String.raw`Écris la droite passant par $(0,1)$ et $(2,7)$.`, "3*x+1", "m = 3, b = 1."),
  mc(String.raw`Quelle formule donne la pente de la droite passant par $(x_1,y_1)$ et $(x_2,y_2)$?`, String.raw`$\frac{y_2-y_1}{x_2-x_1}$`, [String.raw`$\frac{x_2-x_1}{y_2-y_1}$`, String.raw`$\frac{y_2+y_1}{x_2+x_1}$`, String.raw`$y_2-y_1$`], "La montée sur la course."),
  num(`Lis le graphique : quelle est la pente?`, 2, "De (0, −1) à (2, 3).", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 2, b: -1 }], points: [{ x: 0, y: -1 }, { x: 2, y: 3 }] })),
  mx(`Écris l'équation de la droite passant par (0, −1) et (2, 3).`, "2*x-1", "y = 2x − 1."),
  tf(String.raw`Le point $(2,9)$ est sur $y=4x+1$.`, true, "8 + 1 = 9."),
  tf(String.raw`Le point $(3,5)$ est sur $y=2x+1$.`, false, "6 + 1 = 7 ≠ 5."),
  num(`Une table : x = 0, 1, 2; y = 3, 8, 13. Quelle est la pente?`, 5, "Première différence."),
  mx(`Écris l'équation de la table x = 0, 1, 2; y = 3, 8, 13.`, "5*x+3", "y = 5x + 3."),
  mc(String.raw`La droite passant par $(4,2)$ et $(4,9)$ est…`, String.raw`$x=4$`, [String.raw`$y=4$`, String.raw`$y=2x$`, String.raw`$y=x+4$`], "Même x : verticale."),
  mc(String.raw`La droite passant par $(-1,6)$ et $(5,6)$ est…`, String.raw`$y=6$`, [String.raw`$x=6$`, String.raw`$y=x+6$`, String.raw`$x=-1$`], "Même y : horizontale."),
  num(String.raw`Trouve la pente de la droite passant par $(-2,-3)$ et $(2,5)$.`, 2, "8 ÷ 4."),
  num(String.raw`Une droite qui passe par l'origine passe par $(4,12)$. Quelle est sa pente?`, 3, "12 ÷ 4."),
  mx(`Écris la variation directe qui passe par (5, −10).`, "-2*x", "m = −2."),
  num(String.raw`Pour $y=3x+b$ passant par $(-1,2)$, trouve b.`, 5, "2 = −3 + b."),
];

export const M = [
  mx(String.raw`Écris la droite passant par $(2,1)$ et $(5,10)$.`, "3*x-5", "m = 3; 1 = 6 + b."),
  mx(String.raw`Écris la droite passant par $(-3,7)$ et $(1,-1)$.`, "-2*x+1", "m = −2; 7 = 6 + b."),
  mx(String.raw`Écris la droite passant par $(0,-2)$ et $(6,2)$.`, "(2/3)*x-2", "m = 4/6 = 2/3."),
  num(String.raw`Une droite a une pente de $\frac12$ et passe par $(-6,1)$. Trouve b.`, 4, "1 = −3 + b."),
  mx(String.raw`Écris la droite de pente $-\frac34$ passant par $(8,-1)$.`, "-0.75*x+5", "−1 = −6 + b."),
  num(`Un électricien demande 140 dollars pour 2 h et 245 dollars pour 3.5 h. Quel est le taux horaire?`, 70, "105 ÷ 1.5."),
  num(`Un électricien demande 140 dollars pour 2 h et 245 dollars pour 3.5 h. Quels sont les frais de déplacement fixes?`, 0, "140 = 140 + b → b = 0. (Une variation directe.)"),
  num(`Une bougie mesure 20 cm après 1 h et 14 cm après 4 h. Quelle était sa hauteur de départ (cm)?`, 22, "m = −2; 20 = −2 + b."),
  ms(String.raw`Quels points sont sur la droite passant par $(0,3)$ et $(2,7)$? Choisis toutes les bonnes réponses.`, ["(1, 5)", "(−1, 1)", "(3, 10)", "(4, 11)", "(−2, −1)"], [0, 1, 3, 4], "y = 2x + 3; (3, 10) : 9 ≠ 10."),
  num(String.raw`Une table (pas inégaux) : $(1,4)$, $(3,10)$, $(7,22)$. Quelle est l'ordonnée à l'origine?`, 1, "m = 3; 4 = 3 + b."),
  num(`Lis le graphique : quelle est l'ordonnée à l'origine de la droite?`, -3, "Passe par (2, 1) et (4, 5) : pente 2, donc b = 1 − 4 = −3.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -4, ymax: 6 }, lines: [{ m: 2, b: -3 }], points: [{ x: 2, y: 1, label: "(2, 1)" }, { x: 4, y: 5, label: "(4, 5)" }], step: { x: 1, y: 1 } })),
  tf(String.raw`La pente de la droite passant par $(3,-2)$ et $(-1,6)$ est $-2$.`, true, "8 ÷ (−4)."),
  num(String.raw`Une droite passant par $(2,k)$ et $(5,13)$ a une pente de 3. Trouve k.`, 4, "(13 − k)/3 = 3."),
  mc(`De l'eau : 18 °C à 2 min et 42 °C à 6 min (chauffée régulièrement). Quelle équation convient?`, "T = 6t + 6", ["T = 6t + 18", "T = 4t + 10", "T = 12t − 6"], "m = 24/4 = 6; 18 = 12 + b."),
  num(`Un téléphone perd de la valeur de façon linéaire : 700 dollars après 1 an, 400 après 3 ans. Quel était son prix d'origine?`, 850, "m = −150; 700 = −150 + b."),
  num(`Un téléphone perd de la valeur de façon linéaire : 700 dollars après 1 an, 400 après 3 ans. Après combien d'années ne vaut-il plus rien?`, 5.6667, "850 − 150t = 0 → t ≈ 5.67.", null, 0.006),
  mx(String.raw`Écris la droite qui a la même ordonnée à l'origine que $y=4x-5$ et qui passe par $(5,0)$.`, "x-5", "b = −5; 0 = 5m − 5 → m = 1."),
  ms(String.raw`Quelles tables sont linéaires avec une pente de 2? Choisis toutes les bonnes réponses.`, ["(0, 1), (1, 3), (2, 5)", "(1, 0), (3, 4), (6, 10)", "(0, 0), (1, 2), (2, 6)", "(−1, −5), (0, −3), (4, 5)"], [0, 1, 3], "La troisième a des différences de 2, 4."),
  num(String.raw`Trouve l'abscisse à l'origine de la droite passant par $(1,5)$ et $(3,1)$.`, 3.5, "y = −2x + 7 → x = 3.5.", null, 0.001),
  num(`Une piscine contient 900 L après 5 min et 1500 L après 15 min de remplissage. Combien de litres contenait-elle au départ?`, 600, "m = 60; 900 = 300 + b."),
];

// 3.3 Différences finies et modèles du second degré — 20 questions faciles + 20 moyennes
import { mc, num, tf, mx, fill } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const S = String.raw;
const dots = (xs, f, view, step) => planeDoc({ view, points: xs.map((x) => P(x, f(x), false)), ...(step ? { step } : {}) });

export const E = [
  num(S`Quelle est la deuxième différence constante de $y=5x^2$ (pas en x de 1)?`, 10, "2a."),
  mc("Une table a des deuxièmes différences constantes. La relation est…", "du second degré", ["linéaire", "exponentielle", "pas une fonction"], "Des deuxièmes différences constantes caractérisent le second degré."),
  num("x = 0, 1, 2, 3 et y = 3, 5, 7, 9. Quelle est la première différence constante?", 2, "5 − 3 = 2 chaque fois."),
  mc("x = 0, 1, 2, 3 et y = 10, 7, 4, 1. La relation est :", "linéaire", ["du second degré", "exponentielle", "aucune de ces réponses"], "Les premières différences valent toutes −3."),
  num("x = 0, 1, 2, 3, 4 et y = 0, 1, 4, 9, 16. Trouve la deuxième différence constante.", 2, "Premières différences 1, 3, 5, 7."),
  mc("x = 0, 1, 2, 3 et y = 5, 10, 20, 40. La relation est :", "exponentielle", ["linéaire", "du second degré", "aucune de ces réponses"], "Chaque y est le double du précédent."),
  num("Une table du second degré (pas en x de 1) a des deuxièmes différences de 6. Trouve a.", 3, "2a = 6."),
  num(S`Trouve la deuxième différence de $y=-2x^2+5x$ (pas en x de 1).`, -4, "2a = −4."),
  tf("Des premières différences constantes signifient que la relation est du second degré.", false, "Elles signifient une relation linéaire."),
  mc("x = 0, 1, 2, 3 et y = 1, 2, 5, 10. La relation est :", "du second degré", ["linéaire", "exponentielle", "aucune de ces réponses"], "Premières différences 1, 3, 5; deuxièmes différences 2."),
  num("Une table du second degré a y = 4 en x = 0. Quelle est la valeur de c dans y = ax² + bx + c?", 4, "c = y(0)."),
  tf("Pour utiliser les différences finies, les valeurs de x doivent augmenter à intervalles égaux.", true, "Sinon, les différences n'ont aucun sens."),
  num("Les premières différences d'une table du second degré sont 3, 5, 7. Quelle est la première différence suivante?", 9, "Elles augmentent de 2 chaque fois."),
  num("x = 0, 1, 2, 3 et y = 1, 4, 9, 16 (second degré). Quelle est la valeur de y en x = 4?", 25, "La première différence suivante est 9."),
  mc("Une table du second degré dont les deuxièmes différences constantes sont négatives provient d'une parabole qui :", "est ouverte vers le bas", ["est ouverte vers le haut", "est une droite", "n'a pas de sommet"], "2a < 0."),
  num("x = 0, 1, 2, 3 et y = 2, 3, 6, 11. Trouve la deuxième différence.", 2, "Premières différences 1, 3, 5."),
  fill("Des deuxièmes différences constantes signifient que la relation est ___.", ["du second degré", "second degré", "quadratique", "quadratic", "Quadratic"], "Deuxièmes différences = 2a."),
  num(S`Quelle est la deuxième différence de $y=0.5x^2-x$ (pas en x de 1)?`, 1, "2(0.5)."),
  num("Les points ci-contre proviennent de y = x² + c. Trouve c.", -1, "En x = 0, le point est (0, −1).", dots([-2, -1, 0, 1, 2], (x) => x * x - 1, { xmin: -4, xmax: 4, ymin: -3, ymax: 5 })),
  mc("Les points tracés (x = 0 à 4) sont :", "linéaires", ["du second degré", "exponentiels", "aucune de ces réponses"], "y augmente de 2 à chaque pas.", dots([0, 1, 2, 3, 4], (x) => 2 * x - 1, { xmin: -1, xmax: 5, ymin: -2, ymax: 8 })),
];

export const M = [
  num(S`Une table du second degré (pas en x de 1) a des deuxièmes différences de $-8$. Trouve $a$.`, -4, "2a = −8."),
  num(S`Une fonction $y=ax^2+bx+c$ donne $y=6,3,2$ en $x=0,1,2$. Trouve $b$.`, -4, "Deuxième différence 2 → a = 1; c = 6; 1 + b + 6 = 3."),
  mc("Laquelle n'est PAS une fonction du second degré?", S`$y=2^x$`, [S`$y=3-x^2$`, S`$y=(x-1)(x+5)$`, S`$y=\tfrac12(x+2)^2$`], "2^x est exponentielle."),
  num("x = 0, 1, 2, 3 et y = 1, 4, 11, 22 est du second degré. Trouve a.", 2, "Premières 3, 7, 11; deuxième 4 = 2a."),
  num("x = 0, 1, 2, 3 et y = −2, −1, 4, 13 est du second degré. Trouve b.", -1, "a = 2, c = −2; 2 + b − 2 = −1."),
  mx("Trouve la fonction du second degré : x = 0, 1, 2, 3 et y = 3, 4, 7, 12.", "x^2+3", "Deuxième différence 2 → a = 1; c = 3; 1 + b + 3 = 4 → b = 0."),
  mx("Trouve la fonction du second degré : x = 0, 1, 2, 3 et y = 0, −1, 0, 3.", "x^2-2*x", "a = 1, c = 0; 1 + b = −1."),
  num("x = 0, 2, 4, 6 et y = 1, 9, 33, 73 est du second degré. Trouve a.", 2, "Premières 8, 24, 40; deuxième 16 = 2a(2²)."),
  num("Une table du second degré (pas en x de 1) a y = 5, 4, 5, 8. Quelle est la valeur de y pour la valeur de x suivante?", 13, "Premières −1, 1, 3, puis 5."),
  num("Une table du second degré (pas en x de 1) a les premières différences −7, −3, 1, 5. Trouve a.", 2, "Deuxième différence 4 = 2a."),
  num("Une fonction du second degré passe par (0, 3), (1, 6) et (2, 11). Trouve a.", 1, "c = 3; a + b = 3; 4a + 2b = 8 → 2a = 2."),
  num("Une fonction du second degré passe par (0, −4), (1, −1) et (2, 6). Trouve b.", 1, "c = −4; a + b = 3; 4a + 2b = 10 → a = 2."),
  num("Les points tracés (x = 0 à 4) sont sur une parabole. Trouve a.", -1, "y = 1, 4, 5, 4, 1 : premières 3, 1, −1, −3; deuxième −2 = 2a.", dots([0, 1, 2, 3, 4], (x) => -x * x + 4 * x + 1, { xmin: -1, xmax: 5, ymin: -1, ymax: 7 })),
  tf(S`$y=2^x$ a des deuxièmes différences constantes.`, false, "Ses différences sont 1, 2, 4, … et continuent de doubler."),
  num(S`Quelle est la deuxième différence de $y=x^2$ pour une table avec un pas en x de 3?`, 18, "2ah² = 2(1)(9)."),
  mc("x = 1, 2, 4, 5. Peut-on utiliser directement les différences finies avec cette table?", "non — les valeurs de x ne sont pas également espacées", ["oui, toujours", "seulement si chaque y est positif", "seulement pour les relations linéaires"], "Les pas sont 1, 2, 1."),
  num("Une table du second degré a x = 0, 1, 2, 3, 4 et y = 5, k, 3, 5, 9. Trouve k.", 3, "Deuxième différence 2 (à partir de 3, 5, 9); la première différence avant 2 est 0, donc k = 3."),
  num("Les hauteurs d'une pierre à t = 0, 1, 2 s sont 20, 25.1, 20.4 m. Trouve a dans h = at² + bt + c.", -4.9, "Premières 5.1, −4.7; deuxième −9.8 = 2a.", null, 0.001),
  num("Trouve c pour la fonction du second degré qui passe par (1, 4), (2, 9) et (3, 16).", 1, "Premières 5, 7; deuxième 2 → a = 1; un pas vers l'arrière : 4 − 3 = 1."),
  mc("Les points tracés (x = 0 à 3) sont :", "exponentiels", ["linéaires", "du second degré", "constants"], "y = 1, 2, 4, 8 : rapport constant 2.", dots([0, 1, 2, 3], (x) => 2 ** x, { xmin: -1, xmax: 4, ymin: -1, ymax: 9 })),
];

// 3.3 Différences finies et modèles du second degré — 20 questions difficiles
import { ms, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";
import { TITLE } from "../l3_3.mjs";

const S = String.raw;
const dots = (pts, view, step, xlabel = "x", ylabel = "y") => planeDoc({ view, points: pts.map(([x, y]) => P(x, y, false)), xlabel, ylabel, ...(step ? { step } : {}) });

export const TOPIC = TITLE;
export const Q = [
  num(S`Une fonction du second degré passe par $(-1,10)$, $(0,4)$ et $(2,4)$. Trouve l'ordonnée de son sommet.`, 2, "c = 4, b = −2a, a + 2a = 6 → a = 2, b = −4; sommet en x = 1."),
  num("Une table du second degré utilise des valeurs de x espacées de 3; ses deuxièmes différences valent 54. Trouve a.", 3, "2a(3²) = 54."),
  tf("Si une table du second degré a des deuxièmes différences négatives, la parabole est ouverte vers le bas.", true, "2a < 0."),
  num(S`Une table du second degré donne $y=1,2,7,k$ en $x=0,1,2,3$. Trouve $k$.`, 16, "Différences 1, 5 → deuxième 4 → différence suivante 9."),
  num("x = 0, 3, 6, 9 et y = 2, 20, 74, 164 est du second degré. Trouve a.", 2, "Premières 18, 54, 90; deuxième 36 = 2a(3²)."),
  num("Une table du second degré (pas en x de 1) commence par y = 2, 7, 16 en x = 0, 1, 2. Quelle est la valeur de y en x = 5?", 67, "Premières 5, 9 → 13, 17, 21 : 29, 46, 67."),
  num(S`Une fonction du second degré passe par $(-1,6)$, $(1,2)$ et $(2,6)$. Trouve $a$.`, 2, "En soustrayant les deux premières : b = −2, a + c = 4; 4a − 4 + c = 6 → 3a = 6."),
  num(S`Une fonction du second degré passe par $(1,0)$, $(2,3)$ et $(4,15)$. Trouve $c$.`, -1, "3a + b = 3 et 12a + 2b = 12 → a = 1, b = 0."),
  num("Distances d'arrêt (ci-contre) : v = 10, 20, 30, 40 km/h donnent d = 3, 8, 15, 24 m. Utilise un modèle du second degré pour prédire d à 60 km/h.", 48, "Deuxième différence 2 = 2a(10²) → a = 0.01; d(0) = 0; b = 0.2 : 36 + 12.", dots([[10, 3], [20, 8], [30, 15], [40, 24]], { xmin: -5, xmax: 70, ymin: -2, ymax: 55 }, { x: 10, y: 5 }, "v", "d")),
  num("La figure de points n utilise 2, 6, 12, 20 points pour n = 1, 2, 3, 4. Combien de points la figure 10 contient-elle?", 110, "Deuxième différence 2 → a = 1; d(0) = 0; n² + n."),
  num("La figure n utilise 4, 9, 16, 25 carrés pour n = 1, 2, 3, 4. Quelle figure utilise 169 carrés?", 12, "(n + 1)² = 169."),
  tf("Si les troisièmes différences d'une table sont constantes et que les deuxièmes ne le sont pas, la relation est du second degré.", false, "Des troisièmes différences constantes signifient une relation du troisième degré."),
  num(S`Les deuxièmes différences de $y=ax^2+bx+c$ pour un pas en x de 0.5 valent 3. Trouve $a$.`, 6, "2a(0.25) = 3."),
  num("Les points tracés (x = 0 à 3) sont sur une parabole. Trouve l'ordonnée de son sommet.", 1.75, "y = 4, 2, 2, 4 : a = 1, c = 4, b = −3; sommet en x = 1.5.", dots([[0, 4], [1, 2], [2, 2], [3, 4]], { xmin: -1, xmax: 4, ymin: -1, ymax: 6 }), 0.001),
  num("Les hauteurs d'un ballon à t = 0, 0.5, 1, 1.5 s sont 1, 6.775, 10.1, 10.975 m. Trouve a dans h = at² + bt + c.", -4.9, "Premières 5.775, 3.325, 0.875; deuxième −2.45 = 2a(0.5²).", null, 0.001),
  num("Une hausse de prix de x paliers (x = 0, 1, 2, 3) donne un revenu de 1000, 1150, 1260, 1330 dollars (ci-contre). Utilise un modèle du second degré pour trouver le revenu maximal (au centième).", 1361.25, "a = −20, b = 170, c = 1000; sommet x = 4.25.", dots([[0, 1000], [1, 1150], [2, 1260], [3, 1330]], { xmin: -1, xmax: 9, ymin: 900, ymax: 1400 }, { x: 1, y: 100 }, "x", "R"), 0.01),
  ms("Quelles tables (x = 0 à 4) sont du second degré? Choisis toutes les bonnes réponses.", ["y : 1, 3, 7, 13, 21", "y : 2, 4, 8, 16, 32", "y : 0, −1, 0, 3, 8", "y : 5, 8, 11, 14, 17"], [0, 2], "Deuxièmes différences 2 et 2; les autres sont exponentielle et linéaire."),
  num("Une table du second degré (pas en x de 1) a y(0) = 4, une première différence de −5 de x = 0 à 1 et des deuxièmes différences de 6. Trouve y en x = 3.", 7, "Premières différences −5, 1, 7 : y = 4, −1, 0, 7."),
  num("La fonction du second degré qui passe par les trois points ci-contre, (0, 6), (1, 2) et (3, 0), a deux zéros. Trouve le plus grand.", 3, "c = 6; a + b = −4; 3a + b = −2 → a = 1, b = −5 : (x − 2)(x − 3).", dots([[0, 6], [1, 2], [3, 0]], { xmin: -1, xmax: 5, ymin: -1, ymax: 7 })),
  tf("Deux fonctions du second degré différentes peuvent passer par les trois mêmes points d'abscisses différentes.", false, "Trois tels points fixent a, b et c."),
];

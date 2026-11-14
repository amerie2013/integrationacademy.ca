// 4.2 Relations linéaires et non linéaires — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TITLE } from "../l4_2.mjs";

export const TOPIC = TITLE;
export const Q = [
  num(String.raw`Une table est linéaire : $x$ : $-3, 1, 6$; $y$ : $11, \square, -16$. Trouve la valeur manquante.`, -1, String.raw`Taux $\frac{-16-11}{6-(-3)}=\frac{-27}{9}=-3$; de $x=-3$ à $1$ : $11-3(4)=-1$.`),
  num(String.raw`Une table linéaire : $x$ : $2, 5, 11$; $y$ : $7, 16, \square$. Trouve la valeur manquante.`, 34, "Taux 9/3 = 3; de x = 5 à 11 : 16 + 18 = 34."),
  num(String.raw`Pour $y=ax^2+bx+c$, les deuxièmes différences (pas de 1 en x) valent $2a$. Si les deuxièmes différences d'une table sont $-6$, que vaut $a$?`, -3, "2a = −6."),
  num(String.raw`Une table donne $y=5, 8, 15, 26, 41$ pour $x=0$ à $4$. Prédis $y$ à $x=5$.`, 60, "Premières 3, 7, 11, 15 (deuxièmes 4); première différence suivante 19 : 41 + 19."),
  ms(String.raw`Quelles relations ont un taux de variation constant? Choisis toutes les bonnes réponses.`, [String.raw`$3x-4y=12$`, String.raw`$y=(x+1)^2-x^2$`, String.raw`$y=\frac{x+6}{3}$`, String.raw`$y=x(x-2)$`, String.raw`$y=\frac{3}{x}$`], [0, 1, 2], String.raw`$(x+1)^2-x^2=2x+1$ est linéaire; $x(x-2)$ est quadratique; $\frac3x$ est inverse.`),
  num(String.raw`La valeur d'une voiture diminue de 15 % chaque année à partir de 24 000 dollars. Quelle est sa valeur après 3 ans (au dollar près)?`, 14739, "24000 × 0.85³ = 14739.0.", null, 1),
  mc(String.raw`Modèle linéaire A : $V=24000-3000t$. Modèle exponentiel B : $V=24000(0.85)^t$. Quel énoncé est vrai à $t=8$?`, "A donne 0; B vaut encore environ 6540", ["les deux donnent 0", "A donne plus que B", "ils sont égaux"], "24000 − 24000 = 0; 24000 × 0.85⁸ ≈ 6540."),
  num(String.raw`$y$ varie inversement à $x$. Quand $x$ est triplé, par quel nombre $y$ est-il multiplié? (Donne un nombre décimal à 3 décimales.)`, 1 / 3, "xy constant : y devient y/3.", null, 0.001),
  tf(String.raw`Si les premières différences d'une relation sont $4, 4, 4$ pour les valeurs de x $0, 1, 3, 4$, la relation est linéaire.`, false, "Les pas en x ne sont pas égaux; Δy/Δx vaut 4, 2, 4 — pas constant."),
  num(String.raw`Il faut 10 jours à 6 ouvriers pour construire une remise. En supposant une variation inverse, combien de jours faut-il à 15 ouvriers?`, 4, "6 × 10 = 60 jours-ouvriers; 60 ÷ 15."),
  ms(String.raw`Quelles tables pourraient être quadratiques? Choisis toutes les bonnes réponses.`, ["0, 1, 4, 9, 16", "1, 2, 4, 8, 16", "10, 7, 2, −5, −14", "3, 3, 3, 3, 3", "0, 3, 12, 27, 48"], [0, 2, 4], "Deuxièmes différences : 2; −2; 6 (constantes). 1, 2, 4… est exponentielle; 3, 3, … est linéaire."),
  num(String.raw`Un compte d'épargne passe de 2000 à 2420 dollars en 2 ans avec le même pourcentage chaque année. Quel est le facteur de croissance annuel?`, 1.1, "2000r² = 2420 → r² = 1.21 → r = 1.1.", null, 0.001),
  mc(`Quelle description correspond au graphique?`, "croissance exponentielle", ["croissance linéaire", "quadratique (parabole)", "variation inverse"], "La montée devient plus abrupte à chaque pas, à partir d'une ordonnée à l'origine positive, sans point de retournement.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 34 }, curves: [{ f: (x) => 2 * 2 ** x }], points: [0, 1, 2, 3, 4].map((x) => ({ x, y: 2 * 2 ** x })), step: { x: 1, y: 4 } })),
  num(String.raw`Pour $y=-x^2+6x$, trouve la plus grande valeur de $y$ pour des valeurs entières de $x$.`, 9, "x = 3 : −9 + 18 = 9 (le sommet de la parabole)."),
  num(String.raw`Un rectangle a une aire de 48 cm². Si sa longueur est de 6.4 cm, quelle est sa largeur (cm)?`, 7.5, "lw = 48.", null, 0.001),
  tf(String.raw`La relation $y=3$ a des deuxièmes différences constantes.`, true, "Les premières et les deuxièmes différences valent toutes 0 — mais elle est aussi linéaire (une droite horizontale)."),
  num(String.raw`Une suite compte $3, 10, 21, 36$ points dans les figures 1 à 4 et est quadratique. Combien de points y a-t-il dans la figure 6?`, 78, "Premières 7, 11, 15; deuxièmes 4; premières différences suivantes 19, 23 : 36 + 19 + 23."),
  mc(String.raw`Le graphique de quelle relation passe par $(0,5)$ et s'approche de 0 sans l'atteindre à mesure que x augmente?`, String.raw`$y=5(0.5)^x$`, [String.raw`$y=5-0.5x$`, String.raw`$y=5-x^2$`, String.raw`$y=\frac5x$`], "Décroissance exponentielle."),
  num(String.raw`Une relation linéaire a un taux de variation de $-2.5$ et passe par $(4, 3)$. Que vaut y quand x = 10?`, -12, "3 − 2.5(6)."),
  num(String.raw`L'intensité lumineuse varie inversement au carré de la distance : $I\cdot d^2=k$. Si $I=36$ à $d=2$, trouve $I$ à $d=6$.`, 4, "k = 144; 144 ÷ 36."),
];

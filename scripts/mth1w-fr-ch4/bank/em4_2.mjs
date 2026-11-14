// 4.2 Relations linéaires et non linéaires — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, FIG } from "./fig.mjs";

export const E = [
  num(String.raw`Pour $x=0,1,2,3$, les valeurs de $y$ sont $4, 9, 14, 19$. Quelle est la première différence?`, 5, "9 − 4 = 5 chaque fois."),
  tf(String.raw`La table $x$ : $0,1,2,3$; $y$ : $2, 4, 8, 16$ est linéaire.`, false, "Les premières différences 2, 4, 8 ne sont pas constantes."),
  mc(String.raw`Quelle équation est linéaire?`, String.raw`$y=7-3x$`, [String.raw`$y=x^2$`, String.raw`$y=2^x$`, String.raw`$y=\frac{6}{x}$`], "Degré 1, pas de x au dénominateur."),
  mc(`Quelle est la forme du graphique d'une relation linéaire?`, "une droite", ["une forme en U", "une courbe qui s'aplatit", "deux courbes séparées"], "Linéaire signifie une droite."),
  num(String.raw`Pour $y=6x-1$, quelle est la première différence pour des pas de 1 en x?`, 6, "La pente."),
  mc(String.raw`Les premières différences d'une table sont $3, 5, 7, 9$. La relation est…`, "non linéaire", ["linéaire", "une droite horizontale", "impossible à déterminer"], "Les différences changent."),
  num(String.raw`Quelles sont les deuxièmes différences de $y=x^2$ (pas de 1 en x)?`, 2, "1, 4, 9, 16 : premières 3, 5, 7; deuxièmes 2."),
  mc(String.raw`Quelle table a un rapport constant?`, "3, 6, 12, 24", ["3, 6, 9, 12", "3, 4, 7, 12", "24, 12, 8, 6"], "Chaque terme vaut 2 fois le précédent."),
  tf(String.raw`$xy=10$ est une relation linéaire.`, false, String.raw`$y=\frac{10}{x}$ : variation inverse, une courbe.`),
  num(String.raw`Si $xy=18$ et $x=3$, que vaut $y$?`, 6, "18 ÷ 3."),
  mc(`Quel graphique est une parabole?`, String.raw`$y=x^2-4$`, [String.raw`$y=2x-4$`, String.raw`$y=4^x$`, String.raw`$xy=4$`], "Les relations quadratiques donnent des paraboles."),
  num(String.raw`Pour $x=0,1,2,3$, $y=10, 7, 4, 1$. Quel est le taux de variation?`, -3, "Chaque pas : −3."),
  tf(`Une relation dont le taux de variation est constant est linéaire.`, true, "C'est la définition."),
  mc(String.raw`Une table a $x=0,2,4$ et $y=1,7,13$. Quel est le taux de variation?`, "3", ["6", "2", "13"], "Δy/Δx = 6/2 = 3."),
  num(String.raw`Des bactéries doublent chaque heure, à partir de 40. Combien y en a-t-il après 3 heures?`, 320, "40 × 2³."),
  mc(`Des bactéries qui doublent sont un exemple…`, "de relation exponentielle", ["de relation linéaire", "de relation quadratique", "de variation inverse"], "Rapport constant de 2."),
  tf(String.raw`La relation $y=\frac{x}{3}+1$ est linéaire.`, true, String.raw`$\frac x3=\frac13x$ : degré 1.`),
  num(String.raw`Pour $y=3x^2$, que vaut y quand x = 4?`, 48, "3 × 16."),
  mc(`Quand la vitesse d'une voiture augmente, le temps pour parcourir 100 km…`, "diminue (variation inverse)", ["augmente à un taux constant", "reste le même", "double"], "vt = 100."),
  num(String.raw`Trouve la valeur suivante : $5, 15, 45, 135, \dots$`, 405, "Rapport 3."),
];

export const M = [
  mc(String.raw`La table est-elle linéaire? $x$ : $1, 3, 4, 7$; $y$ : $2, 8, 11, 20$.`, "oui, taux 3", ["non, les différences sont 6, 3, 9", "oui, taux 6", "non, elle est quadratique"], "Δy/Δx = 6/2, 3/1, 9/3 = 3."),
  num(String.raw`$x$ : $0, 2, 5, 9$; $y$ : $4, 0, -6, -14$. Quel est le taux de variation?`, -2, "−4/2, −6/3, −8/4 = −2."),
  num(String.raw`Quelles sont les deuxièmes différences de $y=2x^2-x$ (x = 0 à 4)?`, 4, "0, 1, 6, 15, 28 : premières 1, 5, 9, 13; deuxièmes 4."),
  ms(String.raw`Quelles relations sont non linéaires? Choisis toutes les bonnes réponses.`, [String.raw`$y=3x^2$`, String.raw`$y=\frac{x}{2}-5$`, String.raw`$y=5(2)^x$`, String.raw`$xy=-8$`, String.raw`$2x+3y=6$`], [0, 2, 3], "Quadratique, exponentielle et inverse."),
  num(String.raw`$y$ varie inversement à $x$ et $y=12$ quand $x=5$. Trouve $y$ quand $x=15$.`, 4, "k = 60; 60 ÷ 15."),
  mc(String.raw`Une table : $1, 4, 9, 16, 25$. La relation est…`, "quadratique", ["linéaire", "exponentielle", "inverse"], "Deuxièmes différences 2."),
  mc(String.raw`Une table : $2, 6, 18, 54$. La relation est…`, "exponentielle", ["linéaire", "quadratique", "inverse"], "Rapport 3."),
  num(String.raw`Une population de 800 augmente de 25 % par année. Combien compte-t-elle après 2 ans?`, 1250, "800 × 1.25²."),
  tf(String.raw`Si les premières différences valent toutes $0$, la relation est linéaire (droite horizontale).`, true, "Taux de variation constant (nul)."),
  num(String.raw`Le produit $xy$ est constant. Quand $x=4$, $y=7.5$. Que vaut $y$ quand $x=10$?`, 3, "k = 30."),
  mc(`Quel graphique ne touche jamais aucun des axes?`, String.raw`$xy=6$`, [String.raw`$y=x^2$`, String.raw`$y=2^x$`, String.raw`$y=x+6$`], "Une hyperbole s'approche des axes sans jamais les rencontrer."),
  num(String.raw`Trouve la valeur manquante pour que la table soit linéaire : $x$ : $0, 1, 2, 3$; $y$ : $7, 4, \square, -2$.`, 1, "Différence −3."),
  num(String.raw`Trouve la valeur manquante pour que la table soit quadratique avec une deuxième différence de 2 : $y$ : $3, 4, 7, \square$.`, 12, "Premières différences 1, 3, 5."),
  mc(String.raw`Quelle est la meilleure description de $y=-2x+8$?`, "linéaire, descendante", ["linéaire, montante", "quadratique", "décroissance exponentielle"], "Pente −2."),
  tf(String.raw`Dans une table linéaire dont les pas en x valent 2, les premières différences sont égales à la pente.`, false, "Elles valent 2 × la pente."),
  num(String.raw`Une table linéaire a des pas de 2 en x et des premières différences de 10. Quelle est la pente?`, 5, "10 ÷ 2."),
  ms(String.raw`Quelles tables sont linéaires? Choisis toutes les bonnes réponses.`, ["x : 0,1,2; y : 5,5,5", "x : 0,1,2; y : 1,3,9", "x : 0,2,6; y : 1,5,13", "x : 1,2,3; y : 8,4,2"], [0, 2], "Δy/Δx constant : 0 et 2."),
  num(String.raw`Hauteur d'une balle : $0, 15, 20, 15, 0$ m à $t=0$ à $4$ s. Quelle est la deuxième différence constante?`, -10, "Premières 15, 5, −5, −15; deuxièmes −10."),
  mc(`Le graphique montre une relation. De quelle famille s'agit-il?`, "variation inverse", ["linéaire", "quadratique", "exponentielle"], "En forme d'hyperbole, xy constant.", planeDoc({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 10 }, curves: [{ f: (x) => 12 / x, a: 1.2 }], points: [{ x: 2, y: 6 }, { x: 3, y: 4 }, { x: 4, y: 3 }, { x: 6, y: 2 }] })),
  num(String.raw`Le graphique montre une courbe qui passe par $(2,6)$, $(3,4)$ et $(4,3)$. Que vaut $k$ dans $xy=k$?`, 12, "2 × 6 = 12.", FIG.xy12),
];

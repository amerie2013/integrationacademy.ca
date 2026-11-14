// 5.1 Graphiques des fonctions sinus, cosinus et tangente — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const V = { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 2 };
const tan = (x) => (Math.abs(Math.cos(x)) < 0.06 ? NaN : Math.tan(x));

export const E = [
  mc("Quelle est la période de y = sin x ?", S`$2\pi$`, [S`$\pi$`, S`$\frac\pi2$`, S`$4\pi$`], "Le point du cercle trigonométrique revient à son départ après un tour complet, 2π."),
  mc("Quelle est la période de y = tan x ?", S`$\pi$`, [S`$2\pi$`, S`$\frac\pi2$`, S`$4\pi$`], "tan(x + π) = (−sin x)/(−cos x) = tan x, donc elle se répète tous les π."),
  mc("Quelle est l'image de y = cos x ?", S`$-1\le y\le1$`, [S`$0\le y\le1$`, "tous les nombres réels", S`$y\ge-1$`], "cos x est l'abscisse d'un point du cercle trigonométrique, qui est comprise entre −1 et 1."),
  mc("Quelle est la valeur maximale de y = sin x ?", "1", ["2π", "π/2", "0"], "Le point le plus haut du cercle trigonométrique a une ordonnée de 1."),
  num(S`Quelle est la valeur de $\sin\frac\pi2$ ?`, 1, "Après un quart de tour, le point est (0, 1); le sinus est son ordonnée."),
  num(S`Quelle est la valeur de $\cos\pi$ ?`, -1, "Après un demi-tour, le point est (−1, 0); le cosinus est son abscisse."),
  num(S`Quelle est la valeur de $\tan0$ ?`, 0, "tan 0 = sin 0 / cos 0 = 0/1 = 0."),
  mc(S`Laquelle de ces valeurs est un zéro de $y=\cos x$ ?`, S`$\frac\pi2$`, ["0", S`$\pi$`, S`$2\pi$`], "cos x = 0 là où le point est (0, ±1) : x = π/2, 3π/2, …"),
  mc(S`Quelle droite est une asymptote de $y=\tan x$ ?`, S`$x=\frac\pi2$`, [S`$x=\pi$`, S`$x=0$`, S`$y=1$`], "tan x = sin x / cos x n'est pas définie là où cos x = 0."),
  tf("Le graphique de y = sin x passe par l'origine.", true, "sin 0 = 0, donc (0, 0) appartient au graphique."),
  tf("Le graphique de y = cos x passe par l'origine.", false, "cos 0 = 1, donc le graphique coupe l'axe des y en (0, 1)."),
  tf("y = tan x a une valeur maximale.", false, "Près de chaque asymptote, tan x augmente sans limite, donc il n'y a pas de maximum."),
  mc("Quelle est l'amplitude de y = cos x ?", "1", ["2", "2π", "0"], "Amplitude = (max − min)/2 = (1 − (−1))/2 = 1."),
  mc(S`Pour quelle valeur de $x$ dans $[0,2\pi]$ la valeur de $\sin x$ est-elle la plus petite ?`, S`$\frac{3\pi}2$`, [S`$\pi$`, S`$\frac\pi2$`, S`$2\pi$`], "Le point le plus bas du cercle trigonométrique, (0, −1), correspond à 3π/2."),
  mc(S`Combien de zéros $y=\sin x$ a-t-elle pour $0\le x\le2\pi$ ?`, "3", ["2", "1", "4"], "sin x = 0 en x = 0, π et 2π."),
  fill(S`$\cos x$ est une fonction ____ (paire ou impaire).`, ["paire", "even"], "cos(−x) = cos x : le graphique est symétrique par rapport à l'axe des y."),
  fill(S`$\sin x$ est une fonction ____ (paire ou impaire).`, ["impaire", "odd"], "sin(−x) = −sin x : le graphique est symétrique par rapport à l'origine."),
  mc("Quel graphique est représenté ?", S`$y=\cos x$`, [S`$y=\sin x$`, S`$y=\tan x$`, S`$y=-\sin x$`], "Il commence à son maximum (0, 1) : c'est le cosinus.", planeDoc(TG([[Math.cos, "green"]], V))),
  mc("Quelle fonction a le graphique représenté ?", S`$y=\tan x$`, [S`$y=\sin x$`, S`$y=\cos x$`, S`$y=\csc x$`], "Des asymptotes verticales et des branches qui montent en passant par des zéros en 0 et en π : la tangente.", planeDoc(TG([[tan, "red"]], { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 }))),
  num(S`Quelle est la période de $y=\cos x$, à deux décimales près ?`, 6.28, "2π ≈ 6.28.", null, 0.01),
];

export const M = [
  mc(S`Sur quel intervalle $y=\cos x$ est-elle décroissante ?`, S`$(0,\pi)$`, [S`$(\pi,2\pi)$`, S`$\left(-\frac\pi2,\frac\pi2\right)$`, S`$\left(\frac\pi2,\frac{3\pi}2\right)$`], "cos x descend de son max en 0 à son min en π."),
  mc(S`Sur quel intervalle $y=\sin x$ est-elle croissante ?`, S`$\left(-\frac\pi2,\frac\pi2\right)$`, [S`$(0,\pi)$`, S`$\left(\frac\pi2,\frac{3\pi}2\right)$`, S`$(\pi,2\pi)$`], "sin x monte de son min en −π/2 à son max en π/2."),
  ms(S`Sélectionne toutes les solutions de $\sin x=\frac12$ dans $[0,2\pi]$.`, [S`$\frac\pi6$`, S`$\frac{5\pi}6$`, S`$\frac{7\pi}6$`, S`$\frac\pi3$`], [0, 1], "Angle de référence π/6; le sinus est positif dans les quadrants 1 et 2 : π/6 et π − π/6."),
  ms(S`Sélectionne toutes les asymptotes de $y=\tan x$ dans $[0,2\pi]$.`, [S`$x=\frac\pi2$`, S`$x=\pi$`, S`$x=\frac{3\pi}2$`, S`$x=2\pi$`], [0, 2], "Asymptotes là où cos x = 0 : π/2 et 3π/2."),
  num(S`Combien de solutions l'équation $\cos x=0.3$ a-t-elle dans $0\le x\le4\pi$ ?`, 4, "La droite y = 0.3 coupe chacun des deux cycles deux fois."),
  num(S`Combien de solutions l'équation $\tan x=5$ a-t-elle dans $0\le x\le2\pi$ ?`, 2, "La tangente prend chaque valeur une fois par période π, et [0, 2π] contient deux périodes."),
  mc(S`Sachant que $\sin\frac\pi7\approx0.4339$, combien vaut $\sin\frac{6\pi}7$ ?`, S`$\approx0.4339$`, [S`$\approx-0.4339$`, S`$\approx0.9010$`, S`$\approx-0.9010$`], "La courbe sinus est symétrique par rapport à x = π/2 : sin(π − x) = sin x."),
  mc(S`Sachant que $\cos\frac\pi5\approx0.8090$, combien vaut $\cos\left(-\frac\pi5\right)$ ?`, S`$\approx0.8090$`, [S`$\approx-0.8090$`, S`$\approx0.5878$`, "0"], "Le cosinus est pair : cos(−x) = cos x."),
  mc(S`Sachant que $\tan1\approx1.557$, combien vaut $\tan(1+\pi)$ ?`, S`$\approx1.557$`, [S`$\approx-1.557$`, S`$\approx0.642$`, "non définie"], "La tangente a une période de π."),
  mc(S`Pour $0\le x\le2\pi$, où a-t-on $\sin x<0$ ?`, S`$\pi<x<2\pi$`, [S`$0<x<\pi$`, S`$\frac\pi2<x<\frac{3\pi}2$`, S`$\frac{3\pi}2<x<2\pi$ seulement`], "Le point du cercle trigonométrique est sous l'axe des x dans les quadrants 3 et 4."),
  mc(S`Pour $0\le x\le2\pi$, où a-t-on $\cos x>0$ ?`, S`$0\le x<\frac\pi2$ et $\frac{3\pi}2<x\le2\pi$`, [S`$0<x<\pi$`, S`$\frac\pi2<x<\frac{3\pi}2$`, S`$\pi<x<2\pi$`], "Le point est à droite de l'axe des y dans les quadrants 1 et 4."),
  num(S`Résous $\cos x=-1$ pour $0\le x\le2\pi$. Donne $x$ à deux décimales près.`, 3.14, "cos x = −1 seulement au point le plus à gauche, x = π ≈ 3.14.", null, 0.01),
  tf(S`$y=\sin x$ et $y=\cos x$ se croisent en $x=\frac\pi4$.`, true, "sin(π/4) = cos(π/4) = √2/2."),
  tf("Les zéros de y = tan x sont les mêmes que ceux de y = sin x.", true, "tan x = sin x / cos x vaut 0 exactement là où sin x = 0 (cos x vaut alors ±1)."),
  tf(S`$\cos\left(x+2\pi\right)=\cos x$ pour toute valeur de $x$.`, true, "Ajouter un tour complet ramène le point au même endroit."),
  mc("Le graphique montre y = sin x et une droite horizontale. Combien y a-t-il de solutions dans [0, 2π] ?", "2", ["1", "3", "0"], "La droite y = 0.7 coupe un cycle du sinus deux fois.", planeDoc(TG([[Math.sin, "violet"], [() => 0.7, "blue"]], V))),
  mc("D'après le graphique, sur quel intervalle a-t-on sin x > cos x ?", S`$\left(\frac\pi4,\frac{5\pi}4\right)$`, [S`$\left(0,\frac\pi4\right)$`, S`$\left(\frac{5\pi}4,2\pi\right)$`, S`$\left(\frac\pi2,\pi\right)$ seulement`], "Les courbes se croisent là où tan x = 1; le sinus est au-dessus entre π/4 et 5π/4.", planeDoc(TG([[Math.sin, "violet"], [Math.cos, "green"]], V))),
  fill(S`Le graphique de $y=\cos x$ est le graphique de $y=\sin x$ translaté vers la gauche de ____ (donne la plus petite valeur positive, p. ex. pi/2).`, ["pi/2", "π/2", "\\frac\\pi2", "90°"], "sin(x + π/2) = cos x."),
  mc(S`Quelle est la valeur exacte de $\sin\frac{4\pi}3$ ?`, S`$-\frac{\sqrt3}2$`, [S`$\frac{\sqrt3}2$`, S`$-\frac12$`, S`$\frac12$`], "4π/3 est dans le quadrant 3 (sinus négatif) avec un angle de référence de π/3."),
  mc(S`Quelle est la valeur exacte de $\tan\frac{3\pi}4$ ?`, "−1", ["1", S`$-\sqrt3$`, "non définie"], "3π/4 est dans le quadrant 2 (tangente négative) avec un angle de référence de π/4."),
];

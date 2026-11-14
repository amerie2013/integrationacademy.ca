// 5.1 Graphiques des fonctions sinus, cosinus et tangente — 20 questions difficiles
import { mc, num, tf, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const V = { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 2 };
const W = { xmin: -6.8, xmax: 6.8, ymin: -2, ymax: 2 };
const tan = (x) => (Math.abs(Math.cos(x)) < 0.06 ? NaN : Math.tan(x));

export const TOPIC = "5.1 Graphiques des fonctions sinus, cosinus et tangente";
export const Q = [
  mc(S`Pour $0\le x\le2\pi$, où a-t-on $\cos x>\sin x$ ?`, S`$0\le x<\frac\pi4$ ou $\frac{5\pi}4<x\le2\pi$`, [S`$\frac\pi4<x<\frac{5\pi}4$`, S`$0\le x<\frac\pi2$`, S`$\pi<x\le2\pi$`], "Croisements là où tan x = 1 (π/4, 5π/4); test en x = 0 : cos 0 = 1 > sin 0 = 0."),
  ms(S`Sélectionne toutes les valeurs de $x$ dans $[0,2\pi]$ telles que $|\sin x|=|\cos x|$.`, [S`$\frac\pi4$`, S`$\frac{3\pi}4$`, S`$\frac{5\pi}4$`, S`$\frac{7\pi}4$`, S`$\frac\pi2$`], [0, 1, 2, 3], "|tan x| = 1 donne un angle dans chaque quadrant."),
  num(S`Combien de solutions l'équation $\sin x=\cos x$ a-t-elle dans $-2\pi\le x\le2\pi$ ?`, 4, "tan x = 1 en π/4 + nπ : −7π/4, −3π/4, π/4, 5π/4."),
  num(S`Combien de points communs $y=\tan x$ et $y=\sin x$ ont-elles pour $-2\pi\le x\le2\pi$ ?`, 5, "tan x = sin x signifie sin x(1/cos x − 1) = 0 : sin x = 0 ou cos x = 1, c'est-à-dire x = 0, ±π, ±2π."),
  mc(S`Laquelle de ces phrases décrit $y=\tan x$ sur $\left(-\frac\pi2,\frac\pi2\right)$ ?`, "croissante partout", ["décroissante partout", "croissante puis décroissante", "constante"], "Sur chaque branche, tan x monte de −∞ à +∞."),
  tf(S`$\sin(x+\pi)=\sin x$ pour toute valeur de $x$.`, false, "Un demi-tour donne sin(x + π) = −sin x; p. ex. x = π/2 donne −1, et non 1."),
  tf(S`Le graphique de $y=\cos x$ est le graphique de $y=\sin x$ réfléchi par rapport à l'axe des $y$.`, false, "Réfléchir sin x par rapport à l'axe des y donne sin(−x) = −sin x, qui n'est pas cos x."),
  mc(S`Le graphique de $y=-\sin x$ est identique à quel graphique ?`, S`$y=\sin(x+\pi)$`, [S`$y=\sin(-x+\pi)$`, S`$y=\cos(x+\pi)$`, S`$y=\sin\left(x+\frac\pi2\right)$`], "sin(x + π) = −sin x (demi-tour)."),
  num(S`Trouve la moyenne de $\sin x$ aux points $x=0,\frac\pi2,\pi,\frac{3\pi}2$.`, 0, "0 + 1 + 0 + (−1) = 0, donc la moyenne est 0 : la courbe est équilibrée par rapport à son axe."),
  num(S`La droite $y=k$ rencontre $y=\sin x$ exactement une fois dans $[0,2\pi)$. Si $k>0$, trouve $k$.`, 1, "Une droite horizontale coupe un cycle deux fois, sauf si elle ne le touche qu'au max (k = 1) ou au min."),
  mc("Le graphique montre y = cos x sur [−2π, 2π]. Combien de points maximums sont représentés ?", "3", ["2", "4", "1"], "Maximums en x = −2π, 0, 2π.", planeDoc(TG([[Math.cos, "green"]], W))),
  mc("Le graphique montre y = tan x. Quelle affirmation est vraie ?", "Elle est croissante sur chaque branche.", ["Sa période est 2π.", "Son image est [−1, 1].", "Elle a un zéro en x = π/2."], "Chaque branche monte de −∞ à ∞; période π; zéros en nπ.", planeDoc(TG([[tan, "red"]], { xmin: -3.5, xmax: 6.8, ymin: -4, ymax: 4 }))),
  mc("Le graphique montre y = sin x et y = cos x. Au point de croisement situé dans le quadrant 3, quelle est l'ordonnée ?", S`$-\frac{\sqrt2}2$`, [S`$\frac{\sqrt2}2$`, "−1", "0"], "Elles se croisent en 5π/4, où les deux valent −√2/2.", planeDoc(TG([[Math.sin, "violet"], [Math.cos, "green"]], V))),
  mc("Le graphique montre y = sin x et la droite y = −0.5. Quelles sont les solutions dans [0, 2π] ?", S`$\frac{7\pi}6,\ \frac{11\pi}6$`, [S`$\frac{5\pi}6,\ \frac{7\pi}6$`, S`$\frac{4\pi}3,\ \frac{5\pi}3$`, S`$\frac\pi6,\ \frac{5\pi}6$`], "Référence π/6, sinus négatif dans les quadrants 3 et 4.", planeDoc(TG([[Math.sin, "violet"], [() => -0.5, "blue"]], V))),
  num(S`Trouve la plus petite valeur positive de $x$ telle que $\sin x=\sin\frac{2\pi}5$ et $x\ne\frac{2\pi}5$. Donne $x$ à trois décimales près.`, (3 * Math.PI) / 5, "sin(π − x) = sin x : π − 2π/5 = 3π/5 ≈ 1.885.", null, 0.002),
  num(S`Pour $0\le x\le2\pi$, trouve la longueur totale des intervalles où $\tan x>1$ (à deux décimales près).`, Math.PI / 2, "Sur chaque branche, tan x > 1 de π/4 + nπ à π/2 + nπ : deux intervalles de longueur π/4.", null, 0.01),
  mc(S`Quelle fonction a une période de $\pi$ ?`, S`$y=|\sin x|$`, [S`$y=\sin x$`, S`$y=\cos x$`, S`$y=\sin x+\cos x$`], "|sin(x + π)| = |−sin x| = |sin x|."),
  tf("Toute droite horizontale rencontre le graphique de y = tan x une infinité de fois.", true, "L'image de tan x est l'ensemble des réels et la fonction se répète tous les π."),
  mc(S`Si $\cos a=0.2$, laquelle de ces expressions vaut aussi $0.2$ ?`, S`$\cos(2\pi-a)$`, [S`$\cos(\pi-a)$`, S`$\cos(\pi+a)$`, S`$\sin(\pi-a)$`], "2π − a est la réflexion de a par rapport à l'axe des x, donc l'abscisse ne change pas."),
  num(S`Combien de solutions l'équation $\sin x=\frac x{10}$ a-t-elle pour $x\ge0$ ? (Indice : compare la droite à l'image du sinus.)`, 4, "Après x = 10, la droite est au-dessus de 1; on cherche donc seulement dans [0, 10] : x = 0, un croisement vers 2.85 dans (0, π), et deux dans (2π, 3π) vers 7.07 et 8.42."),
];

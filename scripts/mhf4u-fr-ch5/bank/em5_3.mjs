// 5.3 Fonctions sinusoïdales — 20 questions faciles + 20 moyennes
// Notation française : y = a sin(k(x − c)) + d (c = déphasage, d = translation verticale / axe).
import { mc, num, tf, fill, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const P = Math.PI;
const V = (ymin, ymax, xmax = 7) => ({ xmin: -0.5, xmax, ymin, ymax });

export const E = [
  num(S`Quelle est l'amplitude de $y=4\sin x$ ?`, 4, "Amplitude = |a| = 4 : la courbe atteint 4 et −4."),
  num(S`Quelle est l'amplitude de $y=-3\cos x$ ?`, 3, "L'amplitude est |a| = |−3| = 3; le signe négatif ne fait que réfléchir la courbe."),
  mc(S`Quelle est la période de $y=\sin2x$ ?`, S`$\pi$`, [S`$2\pi$`, S`$4\pi$`, S`$\frac\pi2$`], "Période = 2π/|k| = 2π/2 = π."),
  mc(S`Quelle est la période de $y=\cos\frac x3$ ?`, S`$6\pi$`, [S`$\frac{2\pi}3$`, S`$3\pi$`, S`$2\pi$`], "Période = 2π/(1/3) = 6π."),
  mc(S`Quel est le déphasage de $y=\sin\left(x-\frac\pi4\right)$ ?`, S`$\frac\pi4$ vers la droite`, [S`$\frac\pi4$ vers la gauche`, S`$\frac\pi4$ vers le haut`, "aucun"], "x − c avec c = π/4 : translation de π/4 vers la droite."),
  mc(S`Quel est le déphasage de $y=\cos\left(x+\frac\pi3\right)$ ?`, S`$\frac\pi3$ vers la gauche`, [S`$\frac\pi3$ vers la droite`, S`$\frac\pi3$ vers le bas`, "aucun"], "x + π/3 = x − (−π/3) : translation de π/3 vers la gauche."),
  mc(S`Quel est l'axe de la courbe $y=\sin x+5$ ?`, S`$y=5$`, [S`$y=1$`, S`$y=6$`, S`$x=5$`], "Ajouter d = 5 déplace la droite du milieu de y = 0 à y = 5."),
  num(S`Quelle est la valeur maximale de $y=2\sin x+3$ ?`, 5, "Max = d + |a| = 3 + 2 = 5."),
  num(S`Quelle est la valeur minimale de $y=2\sin x+3$ ?`, 1, "Min = d − |a| = 3 − 2 = 1."),
  mc(S`Quelle est l'image de $y=3\cos x-1$ ?`, S`$-4\le y\le2$`, [S`$-1\le y\le3$`, S`$-3\le y\le3$`, S`$-2\le y\le4$`], "d − |a| = −4 et d + |a| = 2."),
  tf(S`$y=-\sin x$ est la réflexion de $y=\sin x$ par rapport à l'axe des $x$.`, true, "a = −1 multiplie chaque ordonnée par −1."),
  tf(S`La période de $y=5\sin x$ est $10\pi$.`, false, "a ne change que la hauteur; la période reste 2π."),
  tf(S`$y=\sin x+2$ a la même période que $y=\sin x$.`, true, "Une translation verticale ne change pas la période."),
  fill(S`Dans $y=a\sin(k(x-c))+d$, la période est $2\pi$ divisé par $|\square|$. Quelle lettre va dans la case ?`, ["k"], "Période = 2π/|k|."),
  fill(S`La droite du milieu $y=d$ d'une sinusoïde s'appelle l'____ de la courbe.`, ["axe", "axe de la courbe", "axis", "midline"], "Elle est à mi-chemin entre le maximum et le minimum."),
  mc(S`Quelle transformation change $y=\sin x$ en $y=\sin x-4$ ?`, "translation de 4 vers le bas", ["translation de 4 vers le haut", "translation de 4 vers la droite", "agrandissement de facteur 4"], "Soustraire 4 de chaque ordonnée déplace le graphique de 4 vers le bas."),
  mc(S`Quelle transformation change $y=\cos x$ en $y=\cos3x$ ?`, S`compression horizontale de facteur $\frac13$`, ["agrandissement horizontal de facteur 3", "agrandissement vertical de facteur 3", "translation de 3 vers la droite"], "k = 3 rend chaque cycle trois fois plus court."),
  num(S`Pour $y=5\cos2x$, trouve la valeur en $x=0$.`, 5, "cos 0 = 1, donc y = 5."),
  mc("Quelle est l'amplitude du graphique représenté ?", "2", ["4", "1", "3"], "Il monte jusqu'à 3 et descend jusqu'à −1 : amplitude (3 − (−1))/2 = 2.", planeDoc(TG([[(x) => 2 * Math.sin(x) + 1, "violet"]], V(-2, 4)))),
  mc("Quelle est la période du graphique représenté ?", S`$\pi$`, [S`$2\pi$`, S`$\frac\pi2$`, S`$4\pi$`], "Deux sommets voisins sont espacés de π.", planeDoc(TG([[(x) => Math.cos(2 * x), "green"]], V(-2, 2)))),
];

export const M = [
  mc(S`Quel est le déphasage de $y=\sin(2x-\pi)$ ?`, S`$\frac\pi2$ vers la droite`, [S`$\pi$ vers la droite`, S`$\frac\pi2$ vers la gauche`, S`$2\pi$ vers la droite`], "Mise en évidence : 2x − π = 2(x − π/2)."),
  mc(S`Quel est le déphasage de $y=\cos(3x+\pi)$ ?`, S`$\frac\pi3$ vers la gauche`, [S`$\pi$ vers la gauche`, S`$\frac\pi3$ vers la droite`, S`$3\pi$ vers la gauche`], "Mise en évidence : 3x + π = 3(x + π/3)."),
  num(S`Pour $y=4\sin\left(\frac\pi2x\right)$, trouve la période.`, 4, "Période = 2π/(π/2) = 4."),
  num(S`Pour $y=-2\cos(x)+6$, trouve la valeur de $y$ en $x=\pi$.`, 8, "cos π = −1, donc y = −2(−1) + 6 = 8."),
  mc(S`Quel est le premier maximum (pour $x\ge0$) de $y=\sin\left(x-\frac\pi6\right)$ ?`, S`$\left(\frac{2\pi}3,1\right)$`, [S`$\left(\frac\pi2,1\right)$`, S`$\left(\frac\pi6,1\right)$`, S`$\left(\frac\pi3,1\right)$`], "Le sinus atteint son sommet quand l'expression entre parenthèses vaut π/2 : x − π/6 = π/2, donc x = 2π/3."),
  mc(S`Quelle équation a une amplitude de 3, une période de $\pi$ et l'axe $y=2$ ?`, S`$y=3\sin2x+2$`, [S`$y=2\sin3x+\pi$`, S`$y=3\sin\frac x2+2$`, S`$y=3\sin x+2$`], "a = 3, k = 2π/π = 2, d = 2."),
  mc(S`Quelle équation a un maximum en $(0,4)$ et une valeur minimale de $-2$, avec une période de $2\pi$ ?`, S`$y=3\cos x+1$`, [S`$y=3\sin x+1$`, S`$y=4\cos x-2$`, S`$y=6\cos x+1$`], "Axe (4 + (−2))/2 = 1, amplitude 3, le cosinus commence à un max."),
  ms(S`Sélectionne toutes les transformations présentes dans $y=-\frac12\sin(4x)+3$.`, ["réflexion par rapport à l'axe des x", S`compression verticale de facteur $\frac12$`, S`compression horizontale de facteur $\frac14$`, "translation de 3 vers le haut", "translation de 4 vers la droite"], [0, 1, 2, 3], "a = −1/2 : réflexion et compression; k = 4; d = 3. Il n'y a aucune translation horizontale."),
  ms(S`Sélectionne les abscisses des cinq points clés d'un cycle de $y=\sin2x$ à partir de $0$.`, ["0", S`$\frac\pi4$`, S`$\frac\pi2$`, S`$\frac{3\pi}4$`, S`$\pi$`, S`$2\pi$`], [0, 1, 2, 3, 4], "Période π, donc on avance de π/4 de 0 à π."),
  tf(S`$y=\sin\left(x+\frac\pi2\right)$ et $y=\cos x$ ont le même graphique.`, true, "Translater le sinus de π/2 vers la gauche donne le cosinus."),
  tf(S`$y=\sin(2x-\pi)$ est $y=\sin2x$ translatée de $\pi$ vers la droite.`, false, "2x − π = 2(x − π/2), donc la translation est de π/2."),
  tf(S`$y=-\cos x$ a un minimum en $x=0$.`, true, "−cos 0 = −1, sa plus petite valeur."),
  num(S`Une sinusoïde a un max de $9$ et un min de $-3$. Trouve son amplitude.`, 6, "(9 − (−3))/2 = 6."),
  num(S`Une sinusoïde a un max de $9$ et un min de $-3$. Trouve $d$, la valeur de l'axe.`, 3, "(9 + (−3))/2 = 3."),
  num(S`Deux maximums voisins d'une sinusoïde sont en $x=1$ et en $x=5$. Trouve $k>0$ à trois décimales près.`, P / 2, "Période 4, donc k = 2π/4 = π/2 ≈ 1.571.", null, 0.002),
  mc("Le graphique est celui de y = a sin x + d. Trouve a et d.", S`$a=3,\ d=1$`, [S`$a=4,\ d=1$`, S`$a=3,\ d=-2$`, S`$a=1,\ d=3$`], "Max 4, min −2 : d = 1, a = 3; la courbe monte à partir de l'axe en 0, donc a > 0.", planeDoc(TG([[(x) => 3 * Math.sin(x) + 1, "violet"]], V(-3, 5)))),
  mc("Quelle équation correspond au graphique ?", S`$y=2\cos\left(x-\frac\pi2\right)$`, [S`$y=2\cos x$`, S`$y=2\cos\left(x+\frac\pi2\right)$`, S`$y=-2\sin x$`], "Le premier max est en π/2, donc le cosinus est translaté de π/2 vers la droite (cela équivaut à 2 sin x).", planeDoc(TG([[(x) => 2 * Math.sin(x), "violet"]], V(-3, 3)))),
  mc(S`Quelle fonction est équivalente à $y=3\sin\left(x+\frac\pi2\right)$ ?`, S`$y=3\cos x$`, [S`$y=-3\cos x$`, S`$y=3\sin x$`, S`$y=-3\sin x$`], "sin(x + π/2) = cos x."),
  fill(S`Écris la période de $y=7\sin\left(\frac{\pi}{12}t\right)+20$.`, ["24"], "2π/(π/12) = 24."),
  num(S`Pour $y=2\sin\left(3\left(x-\frac\pi6\right)\right)$, trouve $y$ en $x=\frac\pi3$.`, 2, "3(π/3 − π/6) = π/2, et 2 sin(π/2) = 2."),
];

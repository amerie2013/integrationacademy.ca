// 5.3 Fonctions sinusoïdales — 20 questions difficiles
// Notation française : y = a sin(k(x − c)) + d (c = déphasage, d = translation verticale / axe).
import { mc, num, tf, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const P = Math.PI;
const V = (ymin, ymax, xmax = 7, xmin = -0.5) => ({ xmin, xmax, ymin, ymax });

export const TOPIC = "5.3 Fonctions sinusoïdales";
export const Q = [
  mc(S`Une sinusoïde a un maximum en $\left(\frac\pi4,5\right)$ et le minimum suivant en $\left(\frac{3\pi}4,-1\right)$. Quelle équation convient ?`, S`$y=3\cos\left(2\left(x-\frac\pi4\right)\right)+2$`, [S`$y=3\cos\left(x-\frac\pi4\right)+2$`, S`$y=6\cos\left(2\left(x-\frac\pi4\right)\right)-1$`, S`$y=3\sin\left(2\left(x-\frac\pi4\right)\right)+2$`], "d = 2, a = 3; du max au min, il y a π/2, donc la période est π et k = 2; le cosinus commence au max."),
  mc(S`Écris $y=3\cos\left(2\left(x-\frac\pi4\right)\right)+2$ sous la forme d'une fonction sinus.`, S`$y=3\sin2x+2$`, [S`$y=3\sin\left(2x-\frac\pi4\right)+2$`, S`$y=-3\sin2x+2$`, S`$y=3\sin\left(2x+\frac\pi2\right)+2$`], "cos(2x − π/2) = sin 2x."),
  mc(S`Une sinusoïde a un minimum en $(2,-7)$ et le maximum suivant en $(5,1)$. Quelle équation convient ?`, S`$y=-4\cos\left(\frac\pi3(x-2)\right)-3$`, [S`$y=4\cos\left(\frac\pi3(x-2)\right)-3$`, S`$y=-4\cos\left(\frac\pi6(x-2)\right)-3$`, S`$y=-8\cos\left(\frac\pi3(x-2)\right)-3$`], "d = −3, a = 4; du min au max, il y a 3, donc la période est 6 et k = π/3; −cos commence à un min."),
  num(S`Pour $y=-4\cos\left(\frac\pi3(x-2)\right)-3$, trouve $y$ en $x=3.5$.`, -3, "π/3(1.5) = π/2 et cos(π/2) = 0, donc y = −3 (l'axe)."),
  ms(S`Sélectionne toutes les équations dont le graphique est identique à celui de $y=\cos x$.`, [S`$y=\sin\left(x+\frac\pi2\right)$`, S`$y=-\cos(x+\pi)$`, S`$y=\cos(x-2\pi)$`, S`$y=\sin\left(x-\frac\pi2\right)$`, S`$y=-\sin\left(x-\frac\pi2\right)$`], [0, 1, 2, 4], "sin(x − π/2) = −cos x, donc son opposé est cos x; les autres découlent de translations de π/2, π et 2π."),
  num(S`Pour $y=3\sin(4x-\pi)+1$, trouve la plus petite valeur $x>0$ où $y$ est maximal (trois décimales).`, (3 * P) / 8, "4x − π = π/2 donne x = 3π/8 ≈ 1.178.", null, 0.002),
  num(S`Pour $y=2\cos\left(\frac x2+\frac\pi4\right)$, donne le déphasage sous la forme d'un nombre signé (trois décimales; vers la gauche est négatif).`, -P / 2, "x/2 + π/4 = (1/2)(x + π/2) : translation de π/2 vers la gauche.", null, 0.002),
  mc(S`Combien de points maximums $y=\sin5x$ a-t-elle sur $[0,2\pi]$ ?`, "5", ["2", "10", "1"], "Période 2π/5, donc cinq cycles complets, chacun avec un max."),
  tf(S`Les graphiques de $y=\sin(2x)$ et de $y=\sin\left(2\left(x+\pi\right)\right)$ sont identiques.`, true, "La période de sin 2x est π, donc une translation de π déplace le graphique d'exactement une période sur lui-même."),
  tf(S`Si $a<0$ dans $y=a\cos x+d$, la courbe a un maximum en $x=0$.`, false, "a cos 0 = a < 0 est la plus petite valeur, donc x = 0 est un minimum."),
  mc(S`Quelle valeur de $d$ fait en sorte que $y=2\sin x+d$ touche l'axe des $x$ sans le traverser ?`, "2 ou −2", ["0", "1", "4"], "La courbe touche y = 0 quand son min (d − 2) ou son max (d + 2) vaut 0."),
  num(S`Le graphique de $y=a\sin(kx)$ passe par $\left(\frac\pi6,3\right)$ à son premier maximum. Si $a=3$, trouve $k$.`, 3, "Le premier max de sin kx est en kx = π/2, donc k(π/6) = π/2 et k = 3."),
  mc("Le graphique montre une sinusoïde. Quelle équation convient ?", S`$y=2\sin\left(\frac\pi2x\right)+3$`, [S`$y=2\sin(2x)+3$`, S`$y=3\sin\left(\frac\pi2x\right)+2$`, S`$y=2\cos\left(\frac\pi2x\right)+3$`], "Axe 3, amplitude 2, période 4 (k = π/2), montée à travers l'axe en x = 0.", planeDoc(TG([[(x) => 2 * Math.sin((P / 2) * x) + 3, "violet"]], V(0, 6, 9), [], { step: { x: 1, y: 1 }, xlabel: "x" }))),
  mc("Le graphique montre une sinusoïde. Quel est son déphasage, écrit avec le cosinus (la plus petite valeur positive) ?", S`$\frac\pi3$`, [S`$\frac\pi6$`, S`$\frac{2\pi}3$`, "0"], "Son premier maximum est en x = π/3.", planeDoc(TG([[(x) => Math.cos(x - P / 3), "green"]], V(-2, 2), [{ x: P / 3, y: 1, label: "max" }]))),
  mc("Le graphique montre deux sinusoïdes. La violette est la verte après quelle transformation ?", "compression horizontale de facteur 1/2", ["agrandissement vertical de facteur 2", "translation de π vers la droite", "réflexion par rapport à l'axe des x"], "Même hauteur; la violette fait deux cycles sur 2π.", planeDoc(TG([[Math.sin, "green"], [(x) => Math.sin(2 * x), "violet"]], V(-2, 2)))),
  mc("Le graphique montre y = a cos(k(x − c)) + d. Que vaut d ?", "−1", ["1", "2", "−3"], "Max 1 et min −3 donnent d = (1 + (−3))/2 = −1.", planeDoc(TG([[(x) => 2 * Math.cos(x) - 1, "violet"]], V(-4, 2)))),
  num(S`Trouve le nombre total de valeurs de $x$ dans $[0,2\pi]$ telles que $3\sin2x+1=4$.`, 2, "sin 2x = 1 une fois par période π : x = π/4 et 5π/4."),
  num(S`Pour $y=a\cos x+d$ de maximum $10$ et de minimum $4$, trouve $a\cdot d$ si $a>0$.`, 21, "a = 3, d = 7, produit 21."),
  mc(S`Si $y=\sin x$ subit un agrandissement horizontal de facteur 2, puis une translation de $\frac\pi2$ vers la droite, quelle équation obtient-on ?`, S`$y=\sin\left(\frac12\left(x-\frac\pi2\right)\right)$`, [S`$y=\sin\left(2\left(x-\frac\pi2\right)\right)$`, S`$y=\sin\left(\frac12x-\frac\pi2\right)$`, S`$y=2\sin\left(x-\frac\pi2\right)$`], "Un agrandissement horizontal de facteur 2 donne k = 1/2; la translation va à l'intérieur sous la forme (x − π/2), après la mise en évidence."),
  tf(S`$y=\sin\left(\frac12x-\frac\pi2\right)$ a un déphasage de $\frac\pi2$ vers la droite.`, false, "Mise en évidence : (1/2)(x − π), donc la translation est de π vers la droite."),
];

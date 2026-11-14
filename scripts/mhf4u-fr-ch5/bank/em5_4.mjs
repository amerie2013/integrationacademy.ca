// 5.4 Résolution d'équations trigonométriques — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG, UC } from "../trigfig.mjs";
const S = String.raw;
const P = Math.PI;
const V = { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 2 };

export const E = [
  ms(S`Sélectionne toutes les solutions de $\sin x=\frac{\sqrt3}2$ dans $[0,2\pi]$.`, [S`$\frac\pi3$`, S`$\frac{2\pi}3$`, S`$\frac{4\pi}3$`, S`$\frac\pi6$`], [0, 1], "Référence π/3; le sinus est positif dans les quadrants 1 et 2."),
  ms(S`Sélectionne toutes les solutions de $\cos x=\frac12$ dans $[0,2\pi]$.`, [S`$\frac\pi3$`, S`$\frac{5\pi}3$`, S`$\frac{2\pi}3$`, S`$\frac\pi6$`], [0, 1], "Référence π/3; le cosinus est positif dans les quadrants 1 et 4."),
  ms(S`Sélectionne toutes les solutions de $\tan x=-1$ dans $[0,2\pi]$.`, [S`$\frac{3\pi}4$`, S`$\frac{7\pi}4$`, S`$\frac\pi4$`, S`$\frac{5\pi}4$`], [0, 1], "Référence π/4; la tangente est négative dans les quadrants 2 et 4."),
  mc(S`Résous $\sin x=1$ pour $0\le x\le2\pi$.`, S`$\frac\pi2$`, ["0", S`$\pi$`, S`$\frac{3\pi}2$`], "Seul le haut du cercle trigonométrique a une ordonnée de 1."),
  mc(S`Résous $\cos x=0$ pour $0\le x\le2\pi$.`, S`$\frac\pi2,\ \frac{3\pi}2$`, [S`$0,\ \pi$`, S`$\pi$`, S`$\frac\pi2$ seulement`], "Abscisse 0 en haut et en bas du cercle."),
  mc(S`Résous $2\cos x-1=0$ pour $0\le x\le2\pi$.`, S`$\frac\pi3,\ \frac{5\pi}3$`, [S`$\frac\pi6,\ \frac{11\pi}6$`, S`$\frac{2\pi}3,\ \frac{4\pi}3$`, S`$\frac\pi3,\ \frac{2\pi}3$`], "cos x = 1/2 : quadrants 1 et 4."),
  mc(S`Résous $\sqrt2\sin x+1=0$ pour $0\le x\le2\pi$.`, S`$\frac{5\pi}4,\ \frac{7\pi}4$`, [S`$\frac\pi4,\ \frac{3\pi}4$`, S`$\frac{3\pi}4,\ \frac{5\pi}4$`, S`$\frac{7\pi}4$ seulement`], "sin x = −√2/2 : quadrants 3 et 4."),
  tf(S`$\sin x=2$ n'a aucune solution.`, true, "L'image du sinus est [−1, 1]."),
  tf(S`$\tan x=10$ n'a aucune solution.`, false, "L'image de la tangente est l'ensemble des nombres réels."),
  mc("Dans quels quadrants le cosinus est-il négatif ?", "Q2 et Q3", ["Q1 et Q4", "Q3 et Q4", "Q2 et Q4"], "À gauche de l'axe des y, l'abscisse est négative (CAST)."),
  mc("Dans quels quadrants la tangente est-elle positive ?", "Q1 et Q3", ["Q1 et Q2", "Q2 et Q4", "Q1 seulement"], "tan = sin/cos est positive quand les deux ont le même signe (CAST)."),
  num(S`Donne l'angle de référence pour $\sin x=-\frac12$, en radians à trois décimales près.`, P / 6, "sin(π/6) = 1/2, donc l'angle de référence est π/6 ≈ 0.524.", null, 0.002),
  num(S`Résous $\cos x=0.6$ pour $0\le x\le\frac\pi2$ (deux décimales).`, Math.acos(0.6), "cos⁻¹(0.6) ≈ 0.93 (calculatrice en radians).", null, 0.01),
  num(S`Combien de solutions l'équation $\sin x=0.4$ a-t-elle dans $[0,2\pi]$ ?`, 2, "Une droite horizontale avec −1 < c < 1 coupe un cycle deux fois."),
  num(S`Combien de solutions l'équation $\cos x=1$ a-t-elle dans $[0,2\pi]$ ?`, 2, "x = 0 et x = 2π (l'intervalle comprend ses deux extrémités)."),
  fill(S`Pour résoudre $\sin x=k$, on trouve d'abord l'angle de ____, puis on utilise la règle CAST.`, ["référence", "reference"], "L'angle aigu formé avec l'axe des x dont le rapport a la grandeur |k|."),
  mc(S`Quelle est la première étape pour résoudre $3\tan x-\sqrt3=0$ ?`, S`isoler : $\tan x=\frac{\sqrt3}3$`, ["diviser par x", "élever les deux membres au carré", "prendre tan⁻¹ de 3"], "Traite tan x comme l'inconnue d'une équation du premier degré."),
  mc("Le graphique montre y = cos x et y = −0.5. Quelles sont les solutions dans [0, 2π] ?", S`$\frac{2\pi}3,\ \frac{4\pi}3$`, [S`$\frac\pi3,\ \frac{5\pi}3$`, S`$\frac{5\pi}6,\ \frac{7\pi}6$`, S`$\frac{2\pi}3$ seulement`], "cos x = −1/2 : référence π/3, quadrants 2 et 3.", planeDoc(TG([[Math.cos, "green"], [() => -0.5, "blue"]], V))),
  mc("Le cercle trigonométrique montre l'angle θ. Quel autre angle de [0, 2π) a le même sinus ?", S`$\pi-\theta$`, [S`$\pi+\theta$`, S`$2\pi-\theta$`, S`$-\theta$`], "La réflexion par rapport à l'axe des y conserve la hauteur.", planeDoc(UC(40, "θ"))),
  mc(S`Résous $\tan x=\sqrt3$ pour $0\le x\le2\pi$.`, S`$\frac\pi3,\ \frac{4\pi}3$`, [S`$\frac\pi6,\ \frac{7\pi}6$`, S`$\frac\pi3,\ \frac{2\pi}3$`, S`$\frac\pi3$ seulement`], "Référence π/3; la tangente se répète tous les π."),
];

export const M = [
  ms(S`Sélectionne toutes les solutions de $2\sin^2x-1=0$ dans $[0,2\pi]$.`, [S`$\frac\pi4$`, S`$\frac{3\pi}4$`, S`$\frac{5\pi}4$`, S`$\frac{7\pi}4$`, S`$\frac\pi2$`], [0, 1, 2, 3], "sin x = ±√2/2 : un angle par quadrant."),
  ms(S`Sélectionne toutes les solutions de $\cos^2x=\cos x$ dans $[0,2\pi]$.`, ["0", S`$\frac\pi2$`, S`$\frac{3\pi}2$`, S`$2\pi$`, S`$\pi$`], [0, 1, 2, 3], "cos x(cos x − 1) = 0 : cos x = 0 ou 1."),
  ms(S`Sélectionne toutes les solutions de $\sin x\cos x=0$ dans $[0,2\pi)$.`, ["0", S`$\frac\pi2$`, S`$\pi$`, S`$\frac{3\pi}2$`, S`$\frac\pi4$`], [0, 1, 2, 3], "sin x = 0 ou cos x = 0."),
  mc(S`Résous $(\sin x-1)(2\cos x+1)=0$ pour $0\le x\le2\pi$.`, S`$\frac\pi2,\ \frac{2\pi}3,\ \frac{4\pi}3$`, [S`$\frac\pi2,\ \frac\pi3,\ \frac{5\pi}3$`, S`$\frac{2\pi}3,\ \frac{4\pi}3$`, S`$\frac\pi2$ seulement`], "sin x = 1 donne π/2; cos x = −1/2 donne 2π/3 et 4π/3."),
  mc(S`Résous $2\sin^2x+\sin x-1=0$ pour $0\le x\le2\pi$.`, S`$\frac\pi6,\ \frac{5\pi}6,\ \frac{3\pi}2$`, [S`$\frac\pi6,\ \frac{5\pi}6$`, S`$\frac{7\pi}6,\ \frac{11\pi}6,\ \frac\pi2$`, S`$\frac\pi2,\ \frac{3\pi}2$`], "(2 sin x − 1)(sin x + 1) = 0."),
  mc(S`Résous $\tan^2x=3$ pour $0\le x\le2\pi$.`, S`$\frac\pi3,\ \frac{2\pi}3,\ \frac{4\pi}3,\ \frac{5\pi}3$`, [S`$\frac\pi3,\ \frac{4\pi}3$`, S`$\frac\pi6,\ \frac{5\pi}6,\ \frac{7\pi}6,\ \frac{11\pi}6$`, S`$\frac\pi3$ seulement`], "tan x = ±√3 : référence π/3 dans les quatre quadrants."),
  num(S`Combien de solutions l'équation $\sin2x=\frac12$ a-t-elle dans $[0,2\pi]$ ?`, 4, "2x parcourt deux tours, et sin = 1/2 deux fois par tour."),
  num(S`Combien de solutions l'équation $\cos3x=0$ a-t-elle dans $[0,2\pi)$ ?`, 6, "3x parcourt trois tours, avec deux zéros du cosinus par tour."),
  num(S`Résous $5\sin x=2$ pour $\frac\pi2\le x\le\pi$ (deux décimales).`, P - Math.asin(0.4), "Référence sin⁻¹(0.4) ≈ 0.41; dans le quadrant 2, x = π − 0.41 ≈ 2.73.", null, 0.01),
  num(S`Résous $4\cos x+3=0$ pour $\pi\le x\le\frac{3\pi}2$ (deux décimales).`, P + Math.acos(0.75), "cos x = −0.75; référence cos⁻¹(0.75) ≈ 0.72; dans le quadrant 3, x = π + 0.72 ≈ 3.86.", null, 0.01),
  mc(S`Quelle substitution transforme $2\cos^2x+3\sin x-3=0$ en une équation en $\sin x$ seulement ?`, S`$\cos^2x=1-\sin^2x$`, [S`$\cos^2x=1+\sin^2x$`, S`$\cos x=1-\sin x$`, S`$\cos^2x=\sin^2x-1$`], "À partir de sin²x + cos²x = 1."),
  mc(S`Pourquoi est-ce une erreur de diviser $\sin x\cos x=\sin x$ par $\sin x$ ?`, S`cela fait perdre les solutions où $\sin x=0$`, ["cela crée des solutions supplémentaires", "sin x n'est jamais nul", "la division n'est pas permise avec les fonctions trigonométriques"], "Factorise plutôt : sin x(cos x − 1) = 0."),
  mc(S`Quelle est la solution générale de $\sin x=0$ ?`, S`$x=n\pi,\ n\in\mathbb{Z}$`, [S`$x=2n\pi$`, S`$x=\frac\pi2+n\pi$`, S`$x=\frac\pi2+2n\pi$`], "sin x = 0 à chaque multiple de π."),
  mc(S`Quelle est la solution générale de $\tan x=1$ ?`, S`$x=\frac\pi4+n\pi$`, [S`$x=\frac\pi4+2n\pi$`, S`$x=\pm\frac\pi4+2n\pi$`, S`$x=\frac\pi4+\frac{n\pi}2$`], "La tangente a une période de π."),
  tf(S`$\cos2x=\frac12$ a les mêmes solutions que $\cos x=\frac14$.`, false, "On ne peut pas diviser à l'intérieur de la fonction : cos 2x n'est pas 2 cos x."),
  tf(S`Toute solution de $\sin x=\cos x$ dans $[0,2\pi]$ est aussi une solution de $\tan x=1$.`, true, "En ces points, cos x ≠ 0, donc la division donne tan x = 1."),
  mc("Le graphique montre y = sin 2x et y = 0.5. Combien y a-t-il de solutions dans [0, 2π] ?", "4", ["2", "3", "8"], "Deux cycles, deux croisements chacun.", planeDoc(TG([[(x) => Math.sin(2 * x), "violet"], [() => 0.5, "blue"]], V))),
  mc("Le graphique montre y = tan x et y = 2. Quelle réponse donne les solutions dans [0, 2π] (deux décimales) ?", "1.11 et 4.25", ["1.11 seulement", "1.11 et 2.03", "0.46 et 3.61"], "tan⁻¹2 ≈ 1.11, puis on ajoute π : 4.25.", planeDoc(TG([[(x) => (Math.abs(Math.cos(x)) < 0.06 ? NaN : Math.tan(x)), "red"], [() => 2, "blue"]], { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 }))),
  fill(S`Si $0\le x\le2\pi$, alors $3x$ est compris entre $0$ et ____ (écris p. ex. 6pi).`, ["6pi", "6π", "6\\pi"], "Multiplie chaque extrémité de l'intervalle par 3."),
  num(S`Trouve la somme de toutes les solutions de $\cos x=-\frac{\sqrt2}2$ dans $[0,2\pi]$ (trois décimales).`, 2 * P, "3π/4 + 5π/4 = 2π ≈ 6.283.", null, 0.002),
];

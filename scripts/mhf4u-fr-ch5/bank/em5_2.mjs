// 5.2 Graphiques des fonctions trigonométriques inverses — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const V = { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 };
const cut = (g) => (x) => (Math.abs(g(x)) < 0.07 ? NaN : 1 / g(x));
const csc = cut(Math.sin), sec = cut(Math.cos), cot = (x) => (Math.abs(Math.sin(x)) < 0.07 ? NaN : Math.cos(x) / Math.sin(x));
const vl = (xs) => ({ vlines: xs.map((x) => ({ x, color: "red", dash: true })) });

export const E = [
  mc(S`Que vaut $\csc x$ ?`, S`$\frac1{\sin x}$`, [S`$\frac1{\cos x}$`, S`$\sin^{-1}x$`, S`$\frac{\cos x}{\sin x}$`], "La cosécante est l'inverse du sinus : 1/sin x."),
  mc(S`Que vaut $\sec x$ ?`, S`$\frac1{\cos x}$`, [S`$\frac1{\sin x}$`, S`$\cos^{-1}x$`, S`$\frac1{\tan x}$`], "La sécante est l'inverse du cosinus : 1/cos x."),
  mc(S`Que vaut $\cot x$ ?`, S`$\frac{\cos x}{\sin x}$`, [S`$\frac{\sin x}{\cos x}$`, S`$\tan^{-1}x$`, S`$\frac1{\cos x}$`], "La cotangente est l'inverse de la tangente : cos x / sin x."),
  num(S`Évalue $\csc\frac\pi2$.`, 1, "sin(π/2) = 1, et 1/1 = 1."),
  num(S`Évalue $\sec0$.`, 1, "cos 0 = 1, et 1/1 = 1."),
  num(S`Évalue $\sec\pi$.`, -1, "cos π = −1, et 1/(−1) = −1."),
  num(S`Évalue $\cot\frac\pi4$.`, 1, "tan(π/4) = 1, donc cot(π/4) = 1."),
  num(S`Évalue $\csc\frac\pi6$.`, 2, "sin(π/6) = 1/2, et 1/(1/2) = 2."),
  mc(S`Laquelle de ces droites est une asymptote de $y=\csc x$ ?`, S`$x=\pi$`, [S`$x=\frac\pi2$`, S`$y=1$`, S`$x=\frac\pi4$`], "Asymptotes là où sin x = 0 : x = 0, π, 2π."),
  mc(S`Laquelle de ces droites est une asymptote de $y=\sec x$ ?`, S`$x=\frac\pi2$`, [S`$x=\pi$`, "x = 0", S`$y=0$`], "Asymptotes là où cos x = 0 : x = π/2, 3π/2."),
  mc(S`Quelle est la période de $y=\sec x$ ?`, S`$2\pi$`, [S`$\pi$`, S`$\frac\pi2$`, S`$4\pi$`], "L'inverse d'une fonction de période 2π a une période de 2π."),
  mc(S`Quelle est la période de $y=\cot x$ ?`, S`$\pi$`, [S`$2\pi$`, S`$\frac\pi2$`, S`$4\pi$`], "Comme la tangente, la cotangente se répète tous les π."),
  tf(S`$\csc x$ et $\sin^{-1}x$ signifient la même chose.`, false, "csc x est l'inverse 1/sin x; sin⁻¹x est un angle."),
  tf("Le graphique de y = sec x touche le graphique de y = cos x là où cos x = 1.", true, "Là où cos x = 1, sec x = 1/1 = 1 aussi."),
  tf("y = csc x a des zéros.", false, "1/sin x ne peut jamais valoir 0, car une fraction de numérateur 1 n'est jamais nulle."),
  mc(S`Quelle est l'image de $y=\csc x$ ?`, S`$y\le-1$ ou $y\ge1$`, [S`$-1\le y\le1$`, "tous les nombres réels", S`$y\ge1$`], "|sin x| ≤ 1, donc |1/sin x| ≥ 1."),
  fill(S`Là où $\sin x=0$, le graphique de $y=\csc x$ a une ____ verticale.`, ["asymptote"], "La division par 0 n'est pas définie, et des valeurs proches de 0 donnent des inverses très grands."),
  mc("Quelle fonction est tracée en rouge ?", S`$y=\csc x$`, [S`$y=\sec x$`, S`$y=\cot x$`, S`$y=\tan x$`], "Les branches rouges touchent sin x (violet) à ses sommets et ont des asymptotes à ses zéros.", planeDoc(TG([[Math.sin, "violet"], [csc, "red"]], V, [], vl([0, Math.PI, 2 * Math.PI])))),
  mc("Le graphique rouge est l'inverse (1/f) du graphique vert. De quelle fonction s'agit-il ?", S`$y=\sec x$`, [S`$y=\csc x$`, S`$y=\cot x$`, S`$y=\tan x$`], "Les branches rouges touchent cos x (vert) à ses sommets et ont des asymptotes à ses zéros.", planeDoc(TG([[Math.cos, "green"], [sec, "red"]], V, [], vl([Math.PI / 2, 1.5 * Math.PI])))),
  num(S`Évalue $\sec\frac\pi3$.`, 2, "cos(π/3) = 1/2, et 1/(1/2) = 2."),
];

export const M = [
  num(S`Évalue $\csc\frac{7\pi}6$.`, -2, "sin(7π/6) = −1/2 (quadrant 3), donc csc = −2."),
  num(S`Évalue $\sec\frac{3\pi}4$ à trois décimales près.`, -Math.SQRT2, "cos(3π/4) = −√2/2, donc sec = −2/√2 = −√2 ≈ −1.414.", null, 0.002),
  num(S`Évalue $\cot\frac{5\pi}6$ à trois décimales près.`, -Math.sqrt(3), "tan(5π/6) = −1/√3, donc cot = −√3 ≈ −1.732.", null, 0.002),
  ms(S`Sélectionne toutes les asymptotes de $y=\cot x$ dans $[0,2\pi]$.`, ["x = 0", S`$x=\frac\pi2$`, S`$x=\pi$`, S`$x=2\pi$`], [0, 2, 3], "cot x = cos x/sin x a des asymptotes là où sin x = 0."),
  ms(S`Sélectionne tous les zéros de $y=\cot x$ dans $[0,2\pi]$.`, [S`$\frac\pi2$`, S`$\pi$`, S`$\frac{3\pi}2$`, "0"], [0, 2], "Zéros là où le numérateur cos x = 0."),
  mc(S`Sur $\left(0,\frac\pi2\right)$, $\csc x$ est…`, "décroissante", ["croissante", "constante", "négative"], "sin x y est croissant et positif, donc son inverse est décroissant."),
  mc(S`Sur $\left(0,\frac\pi2\right)$, $\sec x$ est…`, "croissante", ["décroissante", "constante", "négative"], "cos x y est décroissant et positif, donc son inverse est croissant."),
  mc(S`Quel est le point minimum relatif de $y=\csc x$ sur $(0,\pi)$ ?`, S`$\left(\frac\pi2,1\right)$`, [S`$\left(\frac\pi2,-1\right)$`, S`$(\pi,0)$`, S`$\left(\frac\pi4,\sqrt2\right)$`], "sin x atteint son max 1 en π/2, donc csc x y prend sa plus petite valeur positive, 1."),
  mc(S`Quel est le point maximum relatif de $y=\sec x$ sur $\left(\frac\pi2,\frac{3\pi}2\right)$ ?`, S`$(\pi,-1)$`, [S`$(\pi,1)$`, S`$\left(\frac\pi2,0\right)$`, S`$(0,1)$`], "cos x atteint −1 en π, donc sec x y atteint −1 (sa plus grande valeur sur cette branche)."),
  ms(S`Sélectionne toutes les solutions de $\csc x=2$ dans $[0,2\pi]$.`, [S`$\frac\pi6$`, S`$\frac{5\pi}6$`, S`$\frac{7\pi}6$`, S`$\frac\pi3$`], [0, 1], "sin x = 1/2 : π/6 et 5π/6."),
  ms(S`Sélectionne toutes les solutions de $\sec x=-2$ dans $[0,2\pi]$.`, [S`$\frac{2\pi}3$`, S`$\frac{4\pi}3$`, S`$\frac\pi3$`, S`$\frac{5\pi}3$`], [0, 1], "cos x = −1/2 : référence π/3, quadrants 2 et 3."),
  ms(S`Sélectionne toutes les solutions de $\cot x=1$ dans $[0,2\pi]$.`, [S`$\frac\pi4$`, S`$\frac{5\pi}4$`, S`$\frac{3\pi}4$`, S`$\frac{7\pi}4$`], [0, 1], "tan x = 1 : π/4 et π/4 + π."),
  tf(S`$\sec x=0.5$ n'a aucune solution.`, true, "Il faudrait cos x = 2, ce qui est impossible."),
  tf(S`$y=\cot x$ est décroissante sur $(0,\pi)$.`, true, "Chaque branche de la cotangente descend de +∞ à −∞."),
  mc(S`Quelle est l'image de $y=3\sec x$ ?`, S`$y\le-3$ ou $y\ge3$`, [S`$y\le-1$ ou $y\ge1$`, S`$-3\le y\le3$`, S`$y\ge3$`], "|sec x| ≥ 1, donc |3 sec x| ≥ 3."),
  mc(S`Quel est le domaine de $y=\csc x$ ?`, S`$x\ne n\pi,\ n\in\mathbb{Z}$`, [S`$x\ne\frac\pi2+n\pi$`, "tous les nombres réels", S`$x\ne2n\pi$`], "csc x n'est pas définie là où sin x = 0."),
  mc("Sur le graphique, quelle caractéristique de y = cot x est indiquée par les lignes pointillées ?", "ses asymptotes, là où sin x = 0", ["ses zéros", "ses maximums", "là où cos x = 0"], "cot x = cos x/sin x n'est pas définie là où sin x = 0.", planeDoc(TG([[cot, "blue"]], V, [], vl([0, Math.PI, 2 * Math.PI])))),
  mc("Le graphique montre y = csc x. Sur quel intervalle est-elle négative ?", S`$(\pi,2\pi)$`, [S`$(0,\pi)$`, S`$\left(\frac\pi2,\frac{3\pi}2\right)$`, "nulle part"], "csc x a le même signe que sin x, qui est négatif sur (π, 2π).", planeDoc(TG([[csc, "red"]], V, [], vl([0, Math.PI, 2 * Math.PI])))),
  fill(S`$\cot x=\tan\left(\square-x\right)$. Complète la case (p. ex. pi/2).`, ["pi/2", "π/2", "\\frac\\pi2"], "Identité des angles complémentaires : cot x = tan(π/2 − x)."),
  num(S`Combien de solutions l'équation $\csc x=3$ a-t-elle dans $0\le x\le4\pi$ ?`, 4, "sin x = 1/3 a deux solutions dans chacun des deux cycles."),
];

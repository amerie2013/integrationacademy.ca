// 5.2 Graphiques des fonctions trigonométriques inverses — 20 questions difficiles
import { mc, num, tf, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const V = { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 };
const cut = (g) => (x) => (Math.abs(g(x)) < 0.07 ? NaN : 1 / g(x));
const csc = cut(Math.sin), sec = cut(Math.cos);
const vl = (xs) => ({ vlines: xs.map((x) => ({ x, color: "red", dash: true })) });

export const TOPIC = "5.2 Graphiques des fonctions trigonométriques inverses";
export const Q = [
  ms(S`Sélectionne tous les points d'intersection de $y=\sin x$ et de $y=\csc x$ dans $(0,2\pi)$.`, [S`$\left(\frac\pi2,1\right)$`, S`$\left(\frac{3\pi}2,-1\right)$`, S`$(\pi,0)$`, S`$\left(\frac\pi6,\frac12\right)$`], [0, 1], "sin x = 1/sin x signifie sin²x = 1, donc sin x = ±1."),
  ms(S`Sélectionne toutes les solutions de $\sec^2x=4$ dans $[0,2\pi]$.`, [S`$\frac\pi3$`, S`$\frac{2\pi}3$`, S`$\frac{4\pi}3$`, S`$\frac{5\pi}3$`, S`$\frac\pi6$`], [0, 1, 2, 3], "cos²x = 1/4, donc cos x = ±1/2 : un angle dans chaque quadrant."),
  ms(S`Sélectionne toutes les solutions de $\csc^2x=2$ dans $[0,2\pi]$.`, [S`$\frac\pi4$`, S`$\frac{3\pi}4$`, S`$\frac{5\pi}4$`, S`$\frac{7\pi}4$`, S`$\frac\pi2$`], [0, 1, 2, 3], "sin²x = 1/2, donc sin x = ±√2/2."),
  mc(S`Pour quelle valeur de $k$ l'équation $\sec x=k$ a-t-elle exactement une solution dans $(0,2\pi)$ ?`, S`$k=-1$`, [S`$k=1$`, S`$k=0$`, S`$k=2$`], "sec x = −1 seulement en x = π. sec x = 1 exige x = 0 ou 2π, qui sont exclus; k = 2 donne deux solutions; k = 0 n'en donne aucune."),
  num(S`Combien de solutions l'équation $\csc x=-1.5$ a-t-elle dans $[0,6\pi]$ ?`, 6, "sin x = −2/3 a deux solutions par cycle et [0, 6π] contient trois cycles."),
  mc(S`Quelle fonction a le même graphique que $y=-\sec x$ ?`, S`$y=\sec(x+\pi)$`, [S`$y=\sec(-x)$`, S`$y=\csc x$`, S`$y=-\csc x$`], "cos(x + π) = −cos x, donc sec(x + π) = 1/(−cos x) = −sec x."),
  tf(S`$\sec(-x)=\sec x$ pour toute valeur de $x$ de son domaine.`, true, "cos(−x) = cos x, donc leurs inverses sont égaux : la sécante est paire."),
  tf(S`$\csc(-x)=\csc x$ pour toute valeur de $x$ de son domaine.`, false, "sin(−x) = −sin x, donc csc(−x) = −csc x : la cosécante est impaire."),
  mc(S`À quoi est égale $\csc\left(\frac\pi2-x\right)$ ?`, S`$\sec x$`, [S`$\csc x$`, S`$-\sec x$`, S`$\cot x$`], "sin(π/2 − x) = cos x, donc son inverse est sec x."),
  num(S`Trouve la valeur minimale de $y=4\csc x$ sur $(0,\pi)$.`, 4, "csc x ≥ 1 sur (0, π), avec égalité en π/2, donc 4 csc x ≥ 4."),
  num(S`Trouve la valeur maximale de $y=-2\sec x$ sur $\left(-\frac\pi2,\frac\pi2\right)$.`, -2, "sec x ≥ 1 sur cet intervalle, donc −2 sec x ≤ −2, avec égalité en x = 0."),
  mc(S`Quelle est l'image de $y=\csc x+2$ ?`, S`$y\le1$ ou $y\ge3$`, [S`$y\le-1$ ou $y\ge1$`, S`$1\le y\le3$`, S`$y\ge3$`], "Ajoute 2 à chaque partie de |csc x| ≥ 1 : csc x ≤ −1 donne y ≤ 1; csc x ≥ 1 donne y ≥ 3."),
  mc(S`Sur $\left(\pi,\frac{3\pi}2\right)$, comment se comporte $y=\sec x$ ?`, S`décroissante, de $-1$ vers $-\infty$`, [S`croissante à partir de $-1$`, S`décroissante à partir de $1$`, "constante"], "cos x monte de −1 vers 0 (en restant négatif), donc 1/cos x descend de −1 vers −∞."),
  mc("Le graphique montre y = sin x et y = csc x. En quelle valeur de x dans (0, 2π) ont-elles un point commun avec y = −1 ?", S`$\frac{3\pi}2$`, [S`$\pi$`, S`$\frac\pi2$`, S`$\frac{7\pi}4$`], "sin(3π/2) = −1 et son inverse vaut aussi −1.", planeDoc(TG([[Math.sin, "violet"], [csc, "red"]], V, [], vl([0, Math.PI, 2 * Math.PI])))),
  mc("Le graphique montre y = sec x. Quelle équation décrit la ligne pointillée de droite ?", S`$x=\frac{3\pi}2$`, [S`$x=\pi$`, S`$x=2\pi$`, S`$x=\frac{5\pi}4$`], "Les asymptotes de la sécante sont là où cos x = 0 : π/2 et 3π/2.", planeDoc(TG([[sec, "red"]], V, [], vl([Math.PI / 2, 1.5 * Math.PI])))),
  mc("Le graphique montre y = 2 csc x. Quelle est son image ?", S`$y\le-2$ ou $y\ge2$`, [S`$y\le-1$ ou $y\ge1$`, S`$-2\le y\le2$`, S`$y\ge2$`], "L'agrandissement vertical de facteur 2 double les valeurs tournantes ±1, qui deviennent ±2.", planeDoc(TG([[(x) => 2 * csc(x), "red"]], { xmin: -0.5, xmax: 6.8, ymin: -6, ymax: 6 }, [], vl([0, Math.PI, 2 * Math.PI])))),
  mc("Le graphique montre y = cos x et y = sec x. Entre les asymptotes en π/2 et en 3π/2, quelle affirmation est vraie ?", "sec x ≤ −1 sur cet intervalle", ["sec x ≥ 1 sur cet intervalle", "sec x = cos x sur cet intervalle", "sec x est croissante sur cet intervalle"], "cos x est dans [−1, 0) sur cet intervalle, donc son inverse est ≤ −1.", planeDoc(TG([[Math.cos, "green"], [sec, "red"]], V, [], vl([Math.PI / 2, 1.5 * Math.PI])))),
  num(S`Résous $\cot x=\sqrt3$ pour $\pi<x<2\pi$. Donne $x$ à trois décimales près.`, (7 * Math.PI) / 6, "tan x = 1/√3 : π/6 + π = 7π/6 ≈ 3.665.", null, 0.002),
  tf(S`$\sec x\cos x=1$ pour toute valeur de $x$ du domaine de $\sec x$.`, true, "Là où cos x ≠ 0, (1/cos x)·cos x = 1."),
  num(S`Combien de solutions l'équation $\sec x=\csc x$ a-t-elle dans $[0,2\pi)$ ?`, 2, "1/cos x = 1/sin x signifie sin x = cos x (tous deux non nuls) : π/4 et 5π/4."),
];

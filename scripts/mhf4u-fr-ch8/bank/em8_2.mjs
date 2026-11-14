// 8.2 Produits et quotients de fonctions — 20 questions faciles + 20 moyennes (miroir de ../../mhf4u-ch8/bank/em8_2.mjs)
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const E = [
  num(S`$f(x)=x+3$ et $g(x)=2x-1$. Détermine $(fg)(2)$.`, 15, "5 × 3."),
  num(S`$f(x)=x^2$ et $g(x)=x-5$. Détermine $(fg)(-1)$.`, -6, "1 × (−6)."),
  num(S`$f(x)=x^2+4$ et $g(x)=x+1$. Détermine $\left(\frac fg\right)(3)$.`, 3.25, "13 ÷ 4.", null, 0.001),
  num(S`$f(x)=2^x$ et $g(x)=x$. Détermine $(fg)(3)$.`, 24, "8 × 3."),
  num(S`$f(x)=10x$ et $g(x)=x^2+1$. Détermine $\left(\frac fg\right)(2)$.`, 4, "20 ÷ 5."),
  mx(S`$f(x)=x-2$ et $g(x)=x+5$. Détermine $(fg)(x)$ sous forme développée.`, "x^2+3*x-10", "Développe chaque terme par chaque terme."),
  mx(S`$f(x)=3x$ et $g(x)=x^2-2$. Détermine $(fg)(x)$.`, "3*x^3-6*x", "Distribue."),
  mx(S`Simplifie $\dfrac{x^2-25}{x-5}$ pour $x\ne5$.`, "x+5", "Factorise la différence de carrés."),
  mc(S`Quel est le domaine de $\dfrac{x}{x+7}$?`, S`$x\ne-7$`, [S`$x\ne7$`, S`$x\ne0$`, S`tous les $x$ réels`], "Le dénominateur ne peut pas valoir 0."),
  mc(S`Quels sont les zéros de $y=(x-4)(x+6)$?`, S`$4$ et $-6$`, [S`$-4$ et $6$`, S`$4$ seulement`, S`$24$`], "Un produit est nul quand un facteur est nul."),
  mc(S`$\tan x$ est le quotient…`, S`$\dfrac{\sin x}{\cos x}$`, [S`$\dfrac{\cos x}{\sin x}$`, S`$\sin x\cdot\cos x$`, S`$\dfrac1{\sin x}$`], "Définition."),
  tf(S`$(fg)(x)$ veut dire $f(g(x))$.`, false, "Cela veut dire f(x)·g(x)."),
  tf(S`Un zéro du dénominateur n'appartient jamais au domaine de $\frac fg$.`, true, "La division par zéro n'est pas définie."),
  tf(S`Le produit de deux fonctions impaires est pair.`, true, "(−f)(−g) = fg."),
  fill(S`$\dfrac{x^2-4}{x-2}$ a un ____ à $x=2$ (asymptote ou trou).`, ["trou", "un trou", "hole"], "Le facteur se simplifie."),
  fill(S`Dans $d(t)=6(0.5)^t\cos(2\pi t)$, l'enveloppe est $6(0.5)^t$. Sa valeur à $t=1$ est ____.`, ["3"], "6 × 0.5."),
  num(S`Combien de zéros $y=x(x-1)(x+1)$ a-t-elle?`, 3, "0, 1, −1."),
  num(S`$y=\dfrac{x-3}{x+2}$. Détermine son zéro.`, 3, "Le numérateur est nul."),
  mc("Le graphique montre y = f(x) (en bleu) et y = g(x) (en gris). Que vaut (fg)(1)?", "−2", ["1", "2", "3"], "f(1) = 2 et g(1) = −1.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -3, ymax: 5 }, lines: [{ m: 1, b: 1, color: "blue" }, { m: 1, b: -2, color: "gray" }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "blue" }, { x: 1, y: -1, label: "(1, −1)", color: "gray" }], step: { x: 1, y: 1 } })),
  mc("Le graphique montre une onde amortie et son enveloppe. Quelle est l'amplitude de départ?", "4", ["2", "1", "8"], "L'enveloppe commence à 4.", planeDoc({ view: { xmin: -0.2, xmax: 6, ymin: -4.5, ymax: 4.5 }, curves: [{ f: (t) => 4 * 0.7 ** t, a: 0, color: "gray" }, { f: (t) => 4 * 0.7 ** t * Math.cos(2 * Math.PI * t), a: 0, color: "violet" }], step: { x: 1, y: 1 } })),
];

export const M = [
  num(S`$y=\dfrac{x^2-1}{x-1}$. Quelle est l'ordonnée du trou?`, 2, "Se simplifie en x + 1 à x = 1."),
  num(S`$d(t)=12(0.8)^t\cos(2\pi t)$. Détermine $d(2)$.`, 7.68, "12 × 0.64.", null, 0.001),
  num(S`À quelle valeur de $t$ l'enveloppe $12(0.8)^t$ devient-elle pour la première fois inférieure à $3$? (au centième près)`, Math.log10(0.25) / Math.log10(0.8), "0.8ᵗ = 0.25.", null, 0.01),
  num(S`$y=(x+2)\cdot3^x$. Détermine $y(-3)$ (au millième près).`, -1 / 27, "−1 × 1/27.", null, 0.001),
  num(S`$y=x^2\sin x$. Détermine $y\left(\frac\pi2\right)$ (au centième près).`, Math.PI ** 2 / 4, "π²/4.", null, 0.01),
  num(S`Combien d'asymptotes verticales $y=\dfrac{x+1}{x^2-9}$ a-t-elle?`, 2, "x = ±3; le numérateur n'y est pas nul."),
  mx(S`$f(x)=x+4$ et $g(x)=x^2-4x+16$. Détermine $(fg)(x)$.`, "x^3+64", "Somme de cubes."),
  mc(S`Où $y=(x-1)(x+3)$ est-elle négative?`, S`$-3<x<1$`, [S`$x<-3$ ou $x>1$`, S`$x>1$`, S`$x<1$`], "Signes contraires entre les zéros."),
  mc(S`Quel est le domaine de $\dfrac{\sqrt{x}}{x-4}$?`, S`$x\ge0,\ x\ne4$`, [S`$x\ne4$`, S`$x>4$`, S`$x\ge0$`], "Restrictions de la racine et du dénominateur."),
  mc(S`$y=x\cos x$ est…`, "impaire", ["paire", "ni paire ni impaire", "périodique"], "impaire × paire = impaire."),
  mc(S`$\cot x=\frac{\cos x}{\sin x}$ a des asymptotes verticales sur $0<x<2\pi$ à…`, S`$x=\pi$`, [S`$x=\frac\pi2,\ \frac{3\pi}2$`, S`$x=0$ seulement`, S`aucune`], "Dans l'intervalle ouvert, sin x = 0 seulement à π."),
  ms(S`Choisis chaque produit qui est pair.`, [S`$x^2\cos x$`, S`$x\sin x$`, S`$x^3\cos x$`, S`$\sin x\cos x$`], [0, 1], "paire·paire et impaire·impaire donnent paire."),
  tf(S`$\dfrac{x^2+x-6}{x-2}$ a une asymptote verticale à $x=2$.`, false, "(x + 3)(x − 2)/(x − 2) : un trou, pas une asymptote."),
  tf(S`$y=(x+1)2^x$ s'approche de $0$ quand $x\to-\infty$.`, true, "2ˣ diminue plus vite que x + 1 ne grandit."),
  fill(S`$\dfrac{(x+5)(x-1)}{x-1}$ a un trou à $x=$ ____.`, ["1"], "Le facteur commun se simplifie."),
  num(S`Détermine la solution positive de $\dfrac{x^2-x}{x}=4$.`, 5, "x − 1 = 4 pour x ≠ 0."),
  num(S`Pour $y=\dfrac{2x}{x-3}$, quelle est l'asymptote horizontale $y=k$?`, 2, "Rapport des coefficients dominants."),
  mc("Le graphique montre y = (x + 1)2ˣ. Où est-elle négative?", "x < −1", ["x > −1", "−1 < x < 0", "jamais"], "x + 1 < 0 et 2ˣ > 0.", planeDoc({ view: { xmin: -6, xmax: 2, ymin: -1, ymax: 6 }, curves: [{ f: (x) => (x + 1) * 2 ** x, color: "violet" }], step: { x: 1, y: 1 } })),
  mc("Le graphique montre y = (x² − 4)/(x − 2). Que se passe-t-il à x = 2?", "il y a un trou en (2, 4)", ["une asymptote verticale", "un zéro", "le graphique n'est défini nulle part"], "Elle se simplifie en x + 2.", planeDoc({ view: { xmin: -4, xmax: 5, ymin: -2, ymax: 7 }, curves: [{ f: (x) => x + 2, color: "violet" }], points: [{ x: 2, y: 4, label: "(2, 4)", color: "red" }], step: { x: 1, y: 1 } })),
  num(S`$y=\dfrac{\sin x}{x}$. Détermine $y(\pi)$.`, 0, "sin π = 0."),
];

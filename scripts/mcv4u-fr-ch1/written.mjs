// MCV4U-FR chapitre 1 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mcv4u-ch1/written.mjs (mêmes figures).
//   node scripts/mcv4u-fr-ch1/written.mjs           -> essai à blanc
//   node scripts/mcv4u-fr-ch1/written.mjs --apply   -> téléverse les figures et insère les lignes absentes
import { planeDoc, P, H } from "./bank/fig.mjs";
import { runWritten } from "../mcv4u-fr/written-run.mjs";
import { TITLE as T1 } from "./l1_1.mjs";
import { TITLE as T2 } from "./l1_2.mjs";
import { TITLE as T3 } from "./l1_3.mjs";
import { TITLE as T4 } from "./l1_4.mjs";
import { TITLE as T5 } from "./l1_5.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;

export const WRITTEN = [
  W(1, "medium", 4, S`La distance (m) parcourue par une sprinteuse après $t$ s est représentée pour $t=0,1,\ldots,5$. (a) Trouve la vitesse moyenne sur $[1,4]$. (b) Estime la vitesse en $t=3$ à l'aide de l'intervalle $[2,4]$. (c) Explique pourquoi un intervalle centré donne une bonne estimation.`,
    S`Données $0,3,10,21,36,55$. (a) $\frac{36-3}{3}=11$ m/s. (b) $\frac{36-10}{2}=13$ m/s. (c) Les erreurs de part et d'autre ont tendance à s'annuler; pour ces données ($d=2t^2+t$), l'estimation centrée est exacte. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.3, xmax: 5.5, ymin: -3, ymax: 60 }, points: [P(0, 0), P(1, 3), P(2, 10), P(3, 21), P(4, 36), P(5, 55)], step: { x: 1, y: 5 }, xlabel: "t (s)", ylabel: "d (m)" })),
  W(1, "hard", 4, S`Voici le graphique de $f(x)=|x^2-2x|$. (a) Pour quelles valeurs de x la fonction $f$ n'a-t-elle pas de tangente? (b) Trouve les pentes à gauche et à droite en $x=2$. (c) Trouve le taux de variation moyen sur $[0,3]$.`,
    S`(a) Aux points anguleux où $x^2-2x$ change de signe : $x=0$ et $x=2$. (b) À droite de 2, $f=x^2-2x$ : pente $2(2)-2=2$. À gauche de 2, $f=2x-x^2$ : pente $2-2(2)=-2$. (c) $\frac{f(3)-f(0)}{3}=\frac{3}{3}=1$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -1.5, xmax: 3.5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.abs(x * x - 2 * x), color: "violet" }], step: { x: 0.5, y: 1 } })),
  W(2, "medium", 4, S`Pour $f(x)=x^2-3x+2$ (graphique ci-contre) : (a) écris et simplifie $\frac{f(2+h)-f(2)}{h}$; (b) évalue-le pour $h=0.1$ et $h=0.01$; (c) trouve le taux de variation instantané en $x=2$ et l'équation de la tangente.`,
    S`(a) $\frac{(4+4h+h^2)-(6+3h)+2-0}{h}=\frac{h+h^2}{h}=1+h$. (b) $1.1$, $1.01$. (c) $1$; tangente passant par $(2,0)$ : $y=x-2$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x * x - 3 * x + 2, color: "violet" }], points: [P(2, 0)], step: { x: 0.5, y: 1 } })),
  W(2, "hard", 4, S`Pour $f(x)=\frac1{x+2}$ : (a) trouve le taux de variation instantané en $x=0$ à partir du quotient de différence; (b) écris l'équation de la tangente en $x=0$; (c) trouve où la tangente coupe l'axe des x, puis trace-la.`,
    S`(a) $\frac{\frac1{2+h}-\frac12}{h}=\frac{-1}{2(2+h)}\to-\frac14$. (b) Point $\left(0,\frac12\right)$ : $y=-\frac14x+\frac12$. (c) $0=-\frac14x+\frac12\Rightarrow x=2$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1.5, xmax: 4, ymin: -0.5, ymax: 2 }, curves: [{ f: (x) => 1 / (x + 2), a: -1.5, b: 4, color: "violet" }], points: [P(0, 0.5)], step: { x: 0.5, y: 0.5 } })),
  W(3, "medium", 4, S`Utilise le graphique de $f$ pour trouver (a) $\lim_{x\to1^-}f(x)$ et $\lim_{x\to1^+}f(x)$; (b) si $\lim_{x\to1}f(x)$ existe, avec une justification; (c) $f(1)$, et si cette valeur influe sur ta réponse en (b).`,
    S`(a) À gauche : $2$ (le long de $x+1$); à droite : $3$ (le long de $5-2x$). (b) Non — les limites à gauche et à droite sont différentes. (c) $f(1)=1$; la valeur en 1 n'influe pas sur la limite. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 4, ymin: -2, ymax: 5 }, curves: [{ f: (x) => x + 1, a: -2, b: 0.97, color: "violet" }, { f: (x) => 5 - 2 * x, a: 1.03, b: 3.5, color: "violet" }], points: [H(1, 2), H(1, 3), P(1, 1, false)], step: { x: 1, y: 1 } })),
  W(3, "hard", 4, S`(a) Évalue $f(x)=\sqrt{x^2+4x}-x$ en $x=100$ et en $x=1000$. (b) Trouve algébriquement $\lim_{x\to\infty}\left(\sqrt{x^2+4x}-x\right)$. (c) Que t'apprend ce résultat sur le graphique ci-contre?`,
    S`(a) $\approx1.980$ et $\approx1.998$. (b) Multiplie par $\frac{\sqrt{x^2+4x}+x}{\sqrt{x^2+4x}+x}$ : $\frac{4x}{\sqrt{x^2+4x}+x}=\frac{4}{\sqrt{1+\frac4x}+1}\to2$. (c) $y=2$ est une asymptote horizontale lorsque $x\to\infty$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 3 }, curves: [{ f: (x) => Math.sqrt(x * x + 4 * x) - x, a: 0, b: 30, color: "violet" }], lines: [{ m: 0, b: 2, color: "red", dash: true }], step: { x: 5, y: 0.5 } })),
  W(3, "hard", 4, S`On place un dollar à un taux d'intérêt de 100 % par année, composé $n$ fois par année; après un an, on obtient $A_n=\left(1+\frac1n\right)^n$. (a) Calcule $A_1$, $A_{12}$, $A_{365}$. (b) Estime $\lim_{n\to\infty}A_n$. (c) Explique pourquoi les valeurs augmentent sans jamais dépasser environ 2.72.`,
    S`(a) $2$, $\approx2.613$, $\approx2.7146$. (b) $e\approx2.718$. (c) Une capitalisation plus fréquente ajoute de l'intérêt sur l'intérêt, mais chaque étape supplémentaire ajoute moins; la suite est croissante et bornée, et elle s'approche de $e$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 25, ymin: 1.9, ymax: 2.8 }, points: Array.from({ length: 24 }, (_, i) => ({ x: i + 1, y: (1 + 1 / (i + 1)) ** (i + 1), color: "blue" })), lines: [{ m: 0, b: Math.E, color: "red", dash: true }], step: { x: 2, y: 0.1 }, xlabel: "n", ylabel: "Aₙ" })),
  W(4, "medium", 4, S`$f(x)=x^2-1$ pour $x\lt2$ et $f(x)=kx+1$ pour $x\ge2$. (a) Trouve $k$ pour que $f$ soit continue. (b) Esquisse $f$ pour cette valeur de $k$. (c) Si plutôt $k=2$, classe la discontinuité et donne les limites à gauche et à droite.`,
    S`(a) $3=2k+1\Rightarrow k=1$. (b) La parabole jusqu'à $(2,3)$, puis la droite $y=x+1$. (c) Discontinuité par saut : limite à gauche 3, limite à droite 5. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -2, xmax: 5, ymin: -2, ymax: 8 }, step: { x: 1, y: 1 } })),
  W(4, "hard", 4, S`Voici le graphique de $f(x)=\dfrac{x^2-4}{x^2-x-2}$. (a) Trouve et classe chaque discontinuité. (b) Redéfinis $f$ en un point pour éliminer une discontinuité. (c) Trouve $\lim_{x\to\infty}f(x)$.`,
    S`(a) $f=\frac{(x-2)(x+2)}{(x-2)(x+1)}=\frac{x+2}{x+1}$ pour $x\ne2$ : discontinuité amovible en $x=2$ (limite $\frac43$), discontinuité infinie en $x=-1$. (b) $f(2)=\frac43$. (c) $1$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => (x + 2) / (x + 1), a: -5, b: -1.25, color: "violet" }, { f: (x) => (x + 2) / (x + 1), a: -0.8, b: 1.96, color: "violet" }, { f: (x) => (x + 2) / (x + 1), a: 2.04, b: 5, color: "violet" }], vlines: [{ x: -1, color: "red", dash: true }], points: [H(2, 4 / 3)], step: { x: 1, y: 1 } })),
  W(4, "hard", 4, S`La fonction $f(x)=x^3-4x+1$ est continue. (a) Évalue $f$ en $x=-3,-2,0,1,2$. (b) Utilise la continuité pour situer trois zéros entre des entiers consécutifs. (c) Explique pourquoi la continuité est essentielle à ce raisonnement.`,
    S`(a) $-14, 1, 1, -2, 1$. (b) Changements de signe sur $(-3,-2)$, $(0,1)$, $(1,2)$. (c) Un graphique continu ne peut pas passer d'une valeur négative à une valeur positive sans croiser 0; un saut pourrait l'éviter. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -3.5, xmax: 3, ymin: -15, ymax: 10 }, step: { x: 0.5, y: 5 } })),
  W(5, "medium", 4, S`Pour $f(x)=2x^2-4x$ : (a) trouve $f'(x)$ à l'aide de la définition de la dérivée (premiers principes); (b) trouve la tangente en $x=3$; (c) trouve où la tangente est horizontale et trace-la sur le graphique.`,
    S`(a) $\frac{4xh+2h^2-4h}{h}=4x+2h-4\to4x-4$. (b) $f(3)=6$, $f'(3)=8$ : $y=8x-18$. (c) $4x-4=0\Rightarrow x=1$, au point $(1,-2)$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 4, ymin: -3, ymax: 10 }, curves: [{ f: (x) => 2 * x * x - 4 * x, color: "violet" }], step: { x: 0.5, y: 1 } })),
  W(5, "hard", 4, S`Pour $f(x)=\sqrt x$ : (a) trouve $f'(x)$ à l'aide de la définition de la dérivée (premiers principes); (b) trouve le point de la courbe dont la tangente passe par $(-4,0)$; (c) explique pourquoi $f$ n'a pas de dérivée en $x=0$.`,
    S`(a) $\frac1{2\sqrt x}$. (b) Tangente en $(a,\sqrt a)$ : $y-\sqrt a=\frac{x-a}{2\sqrt a}$; elle passe par $(-4,0)$ : $-2a=-4-a\Rightarrow a=4$ : point $(4,2)$. (c) $\frac{\sqrt h}{h}=\frac1{\sqrt h}\to\infty$ : tangente verticale (et aucun côté gauche). [1, 2, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 9, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, b: 9, color: "violet" }], points: [P(-4, 0)], step: { x: 1, y: 1 } })),
  W(5, "hard", 4, S`$f(x)=x^2$ pour $x\le1$ et $f(x)=2x-1$ pour $x>1$. (a) Montre que $f$ est continue en 1. (b) Montre que $f$ est dérivable en 1 en comparant les pentes à gauche et à droite. (c) Écris $f'(x)$ sous forme de fonction définie par parties et esquisse-la.`,
    S`(a) Les deux parties donnent 1 en $x=1$. (b) À gauche : $\frac{(1+h)^2-1}{h}=2+h\to2$ ($h\lt0$); à droite : $\frac{2(1+h)-1-1}{h}=2$. Elles sont égales, donc $f'(1)=2$. (c) $f'(x)=2x$ pour $x\le1$, $2$ pour $x>1$ : une droite croissante qui se stabilise à la hauteur 2. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 3, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x * x, a: -2, b: 1, color: "violet" }, { f: (x) => 2 * x - 1, a: 1, b: 3, color: "green" }], points: [P(1, 1)], step: { x: 0.5, y: 1 } })),
];

await runWritten(WRITTEN, "../mcv4u-ch1/written.mjs", import.meta.url);

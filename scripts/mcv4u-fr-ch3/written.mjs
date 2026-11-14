// MCV4U-FR chapitre 3 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mcv4u-ch3/written.mjs (mêmes figures, étiquettes en français).
//   node scripts/mcv4u-fr-ch3/written.mjs           -> essai à blanc
//   node scripts/mcv4u-fr-ch3/written.mjs --apply   -> téléverse les figures et insère les lignes absentes
import { planeDoc, P } from "../mcv4u-ch3/bank/fig.mjs";
import { runWritten } from "../mcv4u-fr/written-run.mjs";
import { TITLE as T1 } from "./l3_1.mjs";
import { TITLE as T2 } from "./l3_2.mjs";
import { TITLE as T3 } from "./l3_3.mjs";
import { TITLE as T4 } from "./l3_4.mjs";
import { TITLE as T5 } from "./l3_5.mjs";
import { TITLE as T6 } from "./l3_6.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5, 6: T6 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
/** courbe rationnelle coupée à ses asymptotes verticales */
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const k8 = (x) => Math.cbrt(x * x) * (x * x - 4);
const q4 = (x) => x ** 4 + 4 * x ** 3 - 8 * x * x;
const VR = { xmin: -5, xmax: 8, ymin: -8, ymax: 16 };
const VQ = { xmin: -8, xmax: 8, ymin: -6, ymax: 8 };
const VO = { xmin: -5, xmax: 7, ymin: -8, ymax: 12 };

export const WRITTEN = [
  W(1, "medium", 4, S`Pour $f(x)=2x^3-3x^2-36x+5$ (graphique ci-contre) : (a) trouve $f'(x)$ et factorise-la; (b) dresse un tableau de signes pour $f'$; (c) donne les intervalles de croissance et de décroissance.`,
    S`(a) $f'(x)=6x^2-6x-36=6(x-3)(x+2)$. (b) $+$ sur $(-\infty,-2)$, $-$ sur $(-2,3)$, $+$ sur $(3,\infty)$. (c) Croissante sur $(-\infty,-2)$ et $(3,\infty)$; décroissante sur $(-2,3)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 5.5, ymin: -80, ymax: 60 }, curves: [{ f: (x) => 2 * x ** 3 - 3 * x * x - 36 * x + 5, color: "violet" }], points: [P(-2, 49), P(3, -76)], step: { x: 1, y: 20 } })),
  W(1, "hard", 4, S`Pour $f(x)=x\sqrt{6-x}$ : (a) donne le domaine; (b) montre que $f'(x)=\dfrac{12-3x}{2\sqrt{6-x}}$; (c) trouve les intervalles de croissance et de décroissance.`,
    S`(a) $x\le6$. (b) $f'=\sqrt{6-x}+x\cdot\frac{-1}{2\sqrt{6-x}}=\frac{2(6-x)-x}{2\sqrt{6-x}}=\frac{12-3x}{2\sqrt{6-x}}$. (c) Croissante pour $x\lt4$, décroissante sur $(4,6)$; maximum $(4,4\sqrt2)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 7, ymin: -12, ymax: 7 }, curves: [{ f: (x) => x * Math.sqrt(6 - x), a: -4, b: 6, color: "violet" }], points: [P(4, 4 * Math.SQRT2), P(6, 0)], step: { x: 1, y: 2 } })),
  W(2, "medium", 4, S`Trouve les extremums absolus de $f(x)=x^3-12x^2+45x$ sur $[0,7]$ (graphique ci-contre). Explique pourquoi le maximum absolu n'est pas atteint en un nombre critique.`,
    S`$f'(x)=3(x-3)(x-5)$ : nombres critiques 3 et 5. $f(0)=0$, $f(3)=54$, $f(5)=50$, $f(7)=70$. Maximum absolu 70 à l'extrémité $x=7$; minimum absolu 0 en $x=0$. Le graphique monte encore à l'extrémité droite; le maximum relatif en 3 n'est donc pas le point le plus haut. [3, 1.]`,
    planeDoc({ view: { xmin: -0.3, xmax: 7.5, ymin: -5, ymax: 80 }, curves: [{ f: (x) => x ** 3 - 12 * x * x + 45 * x, a: 0, b: 7, color: "violet" }], points: [P(0, 0), P(3, 54), P(5, 50), P(7, 70)], step: { x: 1, y: 10 } })),
  W(2, "hard", 4, S`Pour $f(x)=x^{2/3}(x^2-4)$ : (a) trouve tous les nombres critiques, y compris ceux où $f'$ n'existe pas; (b) classe chacun à l'aide du test de la dérivée première; (c) décris le graphique en $x=0$.`,
    S`(a) $f=x^{8/3}-4x^{2/3}$, $f'=\frac83x^{5/3}-\frac83x^{-1/3}=\frac{8(x^2-1)}{3x^{1/3}}$ : nulle en $\pm1$, n'existe pas en 0. (b) Signes $-,+,-,+$ : minimums $(\pm1,-3)$, maximum $(0,0)$. (c) Un point de rebroussement : les pentes tendent vers $+\infty$ à gauche et vers $-\infty$ à droite. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, curves: [{ f: k8, color: "violet" }], points: [P(-1, -3), P(1, -3), P(0, 0)], step: { x: 0.5, y: 1 } })),
  W(3, "medium", 4, S`Pour $f(x)=x^4-4x^3-18x^2$ (graphique ci-contre) : (a) trouve $f''(x)$; (b) trouve les intervalles de concavité; (c) trouve les points d'inflexion.`,
    S`(a) $f''(x)=12x^2-24x-36=12(x-3)(x+1)$. (b) Concave vers le haut sur $(-\infty,-1)$ et $(3,\infty)$, vers le bas sur $(-1,3)$. (c) $(-1,-13)$ et $(3,-189)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 7, ymin: -400, ymax: 100 }, curves: [{ f: (x) => x ** 4 - 4 * x ** 3 - 18 * x * x, color: "violet" }], points: [P(-1, -13), P(3, -189)], step: { x: 1, y: 50 } })),
  W(3, "hard", 4, S`Pour $f(x)=3x^5-20x^3$ : (a) trouve les nombres critiques; (b) utilise le test de la dérivée seconde là où il fonctionne, et le test de la dérivée première là où il échoue; (c) trouve les points d'inflexion.`,
    S`(a) $f'=15x^2(x^2-4)$ : $0,\pm2$. (b) $f''=60x^3-120x$; $f''(2)=240\gt0$ : min $(2,-64)$; $f''(-2)=-240$ : max $(-2,64)$; $f''(0)=0$ : $f'\lt0$ des deux côtés de 0, donc aucun extremum. (c) $f''=60x(x^2-2)$ change de signe en $0,\pm\sqrt2$ : $(0,0)$, $(\pm\sqrt2,\mp39.6)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -2.8, xmax: 2.8, ymin: -80, ymax: 80 }, curves: [{ f: (x) => 3 * x ** 5 - 20 * x ** 3, color: "violet" }], points: [P(2, -64), P(-2, 64), P(0, 0)], step: { x: 0.5, y: 20 } })),
  W(3, "hard", 3, S`Les ventes sont de $S(a)=-a^3+15a^2+200$ unités lorsqu'on dépense $a$ milliers de dollars en publicité, $0\le a\le10$. (a) Trouve le point de rendement décroissant. (b) Trouve le taux de croissance des ventes à ce point. (c) Explique ce qui arrive aux dépenses supplémentaires au-delà de ce point.`,
    S`(a) $S''(a)=-6a+30=0$ en $a=5$; $S(5)=450$. (b) $S'(5)=-75+150=75$ unités par millier de dollars. (c) Après $a=5$, chaque millier de dollars supplémentaire fait encore augmenter les ventes, mais de moins en moins. [1, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 10.5, ymin: 150, ymax: 750 }, curves: [{ f: (a) => -(a ** 3) + 15 * a * a + 200, a: 0, b: 10, color: "violet" }, { f: (a) => 450 + 75 * (a - 5), a: 3, b: 7, color: "green" }], points: [P(5, 450)], step: { x: 1, y: 100 }, xlabel: "a (milliers de dollars)", ylabel: "S" })),
  W(4, "medium", 4, S`Pour $f(x)=\dfrac{3x+1}{x-2}$ (graphique ci-contre) : (a) trouve les asymptotes et les coordonnées à l'origine; (b) décris $f$ de chaque côté de l'asymptote verticale; (c) montre que $f$ est décroissante sur chaque branche.`,
    S`(a) $x=2$, $y=3$; $\left(-\frac13,0\right)$, $\left(0,-\frac12\right)$. (b) Numérateur près de 7 : $f\to-\infty$ lorsque $x\to2^-$ et $+\infty$ lorsque $x\to2^+$. (c) $f'=\frac{3(x-2)-(3x+1)}{(x-2)^2}=\frac{-7}{(x-2)^2}\lt0$. [2, 1, 1.]`,
    planeDoc({ view: VR, curves: rat((x) => (3 * x + 1) / (x - 2), [2], VR), vlines: [{ x: 2, color: "red", dash: true }], lines: [{ m: 0, b: 3, color: "red", dash: true }], points: [P(-1 / 3, 0), P(0, -0.5)], step: { x: 1, y: 2 } })),
  W(4, "hard", 4, S`Esquisse $f(x)=\dfrac{2x^2}{x^2-9}$ après avoir trouvé : (a) les asymptotes et la symétrie; (b) les intervalles de croissance et de décroissance ainsi que l'extremum; (c) les intervalles de concavité.`,
    S`(a) $x=\pm3$, $y=2$; fonction paire. (b) $f'=\frac{4x(x^2-9)-2x^2(2x)}{(x^2-9)^2}=\frac{-36x}{(x^2-9)^2}$ : croissante pour $x\lt0$, décroissante pour $x\gt0$ (hors de $\pm3$); maximum relatif $(0,0)$. (c) $f''=\frac{108(x^2+3)}{(x^2-9)^3}$ : concave vers le haut pour $|x|\gt3$, vers le bas sur $(-3,3)$. [1, 2, 1.]`,
    planeDoc({ view: VQ, curves: rat((x) => (2 * x * x) / (x * x - 9), [-3, 3], VQ), vlines: [{ x: -3, color: "red", dash: true }, { x: 3, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [P(0, 0)], step: { x: 1, y: 1 } })),
  W(5, "medium", 4, S`Esquisse $f(x)=x^4+4x^3-8x^2$, en donnant les coordonnées à l'origine, les extremums relatifs et les points d'inflexion.`,
    S`Coordonnées à l'origine : $x^2(x^2+4x-8)=0\Rightarrow x=0,\ -2\pm2\sqrt3$. $f'=4x(x+4)(x-1)$ : minimums $(-4,-128)$, $(1,-3)$; maximum $(0,0)$. $f''=4(3x^2+6x-4)$ : inflexion en $x=-1\pm\sqrt{7/3}\approx0.53,\ -2.53$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 2.5, ymin: -140, ymax: 30 }, curves: [{ f: q4, color: "violet" }], points: [P(-4, -128), P(1, -3), P(0, 0), { x: 0.528, y: q4(0.528), color: "violet" }, { x: -2.528, y: q4(-2.528), color: "violet" }], step: { x: 1, y: 20 } })),
  W(5, "hard", 4, S`Esquisse $f(x)=\dfrac{x^2-x+4}{x-1}$ : (a) trouve les asymptotes par division; (b) trouve les extremums relatifs; (c) décris la concavité.`,
    S`(a) $f(x)=x+\frac{4}{x-1}$ : $x=1$ et $y=x$. (b) $f'=1-\frac{4}{(x-1)^2}=0\Rightarrow x=3$ ou $-1$ : minimum $(3,5)$, maximum $(-1,-3)$. (c) $f''=\frac{8}{(x-1)^3}$ : concave vers le bas pour $x\lt1$, vers le haut pour $x\gt1$. [1, 2, 1.]`,
    planeDoc({ view: VO, curves: rat((x) => (x * x - x + 4) / (x - 1), [1], VO), vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 1, b: 0, color: "red", dash: true }], points: [P(3, 5), P(-1, -3)], step: { x: 1, y: 2 } })),
  W(6, "medium", 4, S`On découpe des carrés de côté $x$ dans les coins d'une feuille de 20 cm sur 12 cm pour former une boîte ouverte. (a) Écris le volume et son domaine. (b) Trouve la valeur de $x$ qui maximise le volume. (c) Trouve le volume maximal.`,
    S`(a) $V=x(20-2x)(12-2x)$, $0\le x\le6$. (b) $V'=12x^2-128x+240=0\Rightarrow x=\frac{32-\sqrt{304}}{6}\approx2.43$ (l'autre racine est hors du domaine). (c) $V\approx262.7$ cm³; $V(0)=V(6)=0$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 6.5, ymin: 0, ymax: 300 }, curves: [{ f: (x) => x * (20 - 2 * x) * (12 - 2 * x), a: 0, b: 6, color: "violet" }], points: [P(2.427, 262.7)], step: { x: 0.5, y: 50 }, xlabel: "x (cm)", ylabel: "V (cm³)" })),
  W(6, "hard", 4, S`On clôture un terrain rectangulaire de 6000 m². Le côté qui longe l'autoroute coûte 12 dollars le mètre; les trois autres côtés coûtent 4 dollars le mètre. Trouve les dimensions qui minimisent le coût, ainsi que le coût minimal.`,
    S`Côté de l'autoroute $x$, autre côté $y$ : $xy=6000$, $C=12x+4x+2(4y)=16x+\frac{48000}{x}$. $C'=16-\frac{48000}{x^2}=0\Rightarrow x=\sqrt{3000}\approx54.8$ m, $y\approx109.5$ m. $C''\gt0$ : minimum, $C\approx1752.7$ dollars. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 160, ymin: 0, ymax: 5 }, curves: [{ f: (x) => (16 * x + 48000 / x) / 1000, a: 10, b: 160, color: "violet" }], points: [P(54.77, 1.7527)], step: { x: 20, y: 0.5 }, xlabel: "x (m)", ylabel: "C (milliers de dollars)" })),
  W(6, "hard", 4, S`La demande pour un produit est $p=80-0.02x$ dollars et le coût est $C(x)=2000+20x$. (a) Écris la fonction profit. (b) Trouve la quantité et le prix qui maximisent le profit. (c) Trouve le profit maximal et justifie qu'il s'agit bien d'un maximum.`,
    S`(a) $P(x)=x(80-0.02x)-(2000+20x)=60x-0.02x^2-2000$. (b) $P'=60-0.04x=0\Rightarrow x=1500$, $p=50$ dollars. (c) $P(1500)=43\,000$ dollars; $P''=-0.04\lt0$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 3100, ymin: -5, ymax: 50 }, curves: [{ f: (x) => (60 * x - 0.02 * x * x - 2000) / 1000, a: 0, b: 3000, color: "violet" }], points: [P(1500, 43)], step: { x: 500, y: 5 }, xlabel: "x (articles)", ylabel: "P (milliers de dollars)" })),
];

await runWritten(WRITTEN, "../mcv4u-ch3/written.mjs", import.meta.url);

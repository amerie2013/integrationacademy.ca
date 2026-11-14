// MCV4U-FR chapitre 5 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mcv4u-ch5/written.mjs (mêmes figures, étiquettes en français).
//   node scripts/mcv4u-fr-ch5/written.mjs           -> essai à blanc
//   node scripts/mcv4u-fr-ch5/written.mjs --apply   -> téléverse les figures et insère les lignes absentes
import { planeDoc, P } from "./bank/fig.mjs";
import { runWritten } from "../mcv4u-fr/written-run.mjs";
import { TITLE as T1 } from "./l5_1.mjs";
import { TITLE as T2 } from "./l5_2.mjs";
import { TITLE as T3 } from "./l5_3.mjs";
import { TITLE as T4 } from "./l5_4.mjs";
import { TITLE as T5 } from "./l5_5.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const E = Math.E;
const ln = Math.log;

export const WRITTEN = [
  W(1, "medium", 4, S`Pour $f(x)=1.8^x$ : (a) estime $f'(0)$ à l'aide du quotient centré $\frac{f(0.001)-f(-0.001)}{0.002}$; (b) utilise ton estimation pour trouver la pente en $x=2$; (c) explique pourquoi le rapport pente $\div$ hauteur est le même en tout point du graphique.`,
    S`(a) $\approx0.5878$ (c'est $\ln1.8$). (b) $f'(2)=1.8^2\times0.5878\approx1.904$. (c) $\frac{1.8^{x+h}-1.8^x}{h}=1.8^x\cdot\frac{1.8^h-1}{h}$; la pente vaut donc toujours $1.8^x$ fois le nombre fixe $f'(0)$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -2, xmax: 3, ymin: -1, ymax: 6 }, curves: [{ f: (x) => 1.8 ** x, color: "violet" }, { f: (x) => 3.24 + 1.9044 * (x - 2), color: "green", a: 0.9, b: 2.9 }], points: [P(2, 3.24), P(0, 1)], step: { x: 0.5, y: 1 } })),
  W(1, "hard", 4, S`Un dollar rapporte un intérêt de 100 % par année, composé $n$ fois par année. (a) Écris le montant après un an et évalue-le pour $n=1,2,5,50$. (b) De quel nombre s'approche-t-il lorsque $n\to\infty$, et qu'est-ce que cela signifie pour la capitalisation continue? (c) Trouve la plus petite valeur de $n$ pour laquelle le montant est à moins de 0.01 de cette limite.`,
    S`(a) $\left(1+\frac1n\right)^n$ : 2, 2.25, 2.48832, 2.69159. (b) $e\approx2.71828$ : avec une capitalisation continue, un dollar devient $e$ dollars. (c) $n=135$ donne $2.70828$, soit un écart de $0.009999\lt0.01$; avec $n=134$, l'écart dépasse à peine 0.01. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -2, xmax: 50, ymin: 1.8, ymax: 2.9 }, curves: [{ f: (x) => (1 + 1 / x) ** x, a: 1, b: 50, color: "violet" }], lines: [{ m: 0, b: E, color: "gray", dash: true, label: "y = e" }], points: [P(1, 2, false), P(2, 2.25, false), P(5, 2.48832, false), P(50, 2.69159, false)], step: { x: 5, y: 0.1 }, xlabel: "n" })),
  W(2, "medium", 4, S`Pour $y=\ln(x^2-2x+2)$ : (a) trouve $y'$ et explique pourquoi la fonction est définie pour tout $x$; (b) trouve et classe le point critique; (c) trouve les points d'inflexion.`,
    S`(a) $y'=\frac{2x-2}{x^2-2x+2}$; $x^2-2x+2=(x-1)^2+1\gt0$. (b) $x=1$ : $y'$ passe de $-$ à $+$, minimum $(1,0)$. (c) $y''=\frac{-2x(x-2)}{(x^2-2x+2)^2}$ change de signe en $x=0$ et en $x=2$ : $(0,\ln2)$ et $(2,\ln2)$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -0.5, ymax: 3 }, curves: [{ f: (x) => ln(x * x - 2 * x + 2), color: "violet" }], points: [P(1, 0), P(0, ln(2)), P(2, ln(2))], step: { x: 0.5, y: 0.5 } })),
  W(2, "hard", 4, S`(a) Utilise la formule de changement de base pour démontrer que $\frac{d}{dx}\log_bx=\frac1{x\ln b}$. (b) Trouve l'équation de la tangente à $y=\log_4(3x+1)$ en $x=5$. (c) Explique pourquoi sa pente est inférieure à la pente de $y=\ln(3x+1)$ au même point.`,
    S`(a) $\log_bx=\frac{\ln x}{\ln b}$, et $\ln b$ est une constante. (b) $y(5)=\log_416=2$; $y'=\frac{3}{(3x+1)\ln4}=\frac3{16\ln4}\approx0.1353$ : $y=2+0.1353(x-5)$. (c) $\log_4u=\frac{\ln u}{\ln4}$ avec $\ln4\gt1$; chaque pente est donc divisée par $\ln4\approx1.386$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 12, ymin: -1, ymax: 3.5 }, curves: [{ f: (x) => ln(3 * x + 1) / ln(4), a: -0.3, color: "violet" }, { f: (x) => 2 + 0.13525 * (x - 5), color: "green", a: 1, b: 11 }], points: [P(5, 2)], step: { x: 1, y: 0.5 } })),
  W(3, "medium", 4, S`Pour $y=4e^x-e^{2x}$ : (a) trouve le point maximum; (b) trouve l'abscisse à l'origine; (c) trouve la pente du graphique à l'abscisse à l'origine.`,
    S`(a) $y'=4e^x-2e^{2x}=2e^x(2-e^x)=0\Rightarrow x=\ln2$; $y=8-4=4$, maximum $(\ln2,4)\approx(0.693,4)$. (b) $e^x(4-e^x)=0\Rightarrow x=\ln4\approx1.386$. (c) $y'(\ln4)=16-32=-16$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 2, ymin: -3, ymax: 5 }, curves: [{ f: (x) => 4 * Math.exp(x) - Math.exp(2 * x), color: "violet" }], points: [P(ln(2), 4), P(ln(4), 0)], step: { x: 0.5, y: 1 } })),
  W(3, "hard", 4, S`Pour $y=2^x+2^{-x}$ : (a) trouve $y'$; (b) montre que le seul point critique est un minimum et trouve-le; (c) trouve l'équation de la tangente en $x=1$.`,
    S`(a) $y'=\ln2\left(2^x-2^{-x}\right)$. (b) $2^x=2^{-x}\iff x=0$; $y'\lt0$ pour $x\lt0$ et $y'\gt0$ pour $x\gt0$ : minimum $(0,2)$. (c) $y(1)=2.5$, $y'(1)=1.5\ln2\approx1.040$ : $y=2.5+1.040(x-1)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 3, ymin: -0.5, ymax: 6 }, curves: [{ f: (x) => 2 ** x + 2 ** -x, color: "violet" }, { f: (x) => 2.5 + 1.0397 * (x - 1), color: "green", a: -0.3, b: 2.4 }], points: [P(0, 2), P(1, 2.5)], step: { x: 0.5, y: 1 } })),
  W(4, "medium", 4, S`Pour $y=x^4e^{-x}$ : (a) trouve et classe les points critiques; (b) trouve les points d'inflexion; (c) décris le comportement aux extrémités.`,
    S`(a) $y'=x^3e^{-x}(4-x)$ : minimum $(0,0)$, maximum $(4,256e^{-4})\approx(4,4.689)$. (b) $y''=x^2e^{-x}(x-2)(x-6)$ change de signe en $x=2$ et en $x=6$ (pas en 0) : $(2,16e^{-2})\approx(2,2.165)$, $(6,1296e^{-6})\approx(6,3.212)$. (c) $y\to0$ lorsque $x\to\infty$; $y\to\infty$ lorsque $x\to-\infty$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1.5, xmax: 16, ymin: -0.5, ymax: 6 }, curves: [{ f: (x) => x ** 4 * Math.exp(-x), color: "violet" }], points: [P(4, 4.689), P(2, 2.165), P(6, 3.212)], step: { x: 1, y: 1 } })),
  W(4, "hard", 4, S`Soit $y=x^{\cos x}$, $x\gt0$. (a) Explique pourquoi ni la règle de la puissance ni la règle des fonctions exponentielles ne s'applique. (b) Utilise la dérivation logarithmique pour trouver $y'$. (c) Trouve la pente en $x=\pi$.`,
    S`(a) La base et l'exposant varient tous les deux. (b) $\ln y=\cos x\ln x\Rightarrow\frac{y'}{y}=-\sin x\ln x+\frac{\cos x}{x}$, donc $y'=x^{\cos x}\left(\frac{\cos x}{x}-\sin x\ln x\right)$. (c) $y(\pi)=\frac1\pi$, $\frac{y'}{y}=-\frac1\pi$ : $y'(\pi)=-\frac1{\pi^2}\approx-0.101$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 8, ymin: -0.5, ymax: 7 }, curves: [{ f: (x) => x ** Math.cos(x), a: 0.05, b: 8, color: "violet" }, { f: (x) => 1 / Math.PI - (x - Math.PI) / Math.PI ** 2, color: "green", a: 2, b: 4.3 }], points: [P(Math.PI, 1 / Math.PI)], step: { x: 1, y: 1 } })),
  W(5, "medium", 4, S`Une culture de bactéries compte 2500 cellules en $t=0$ et 4000 cellules après 3 heures. (a) Trouve un modèle $P(t)=P_0e^{kt}$. (b) Quand y aura-t-il 10 000 cellules? (c) À quel rythme la culture croît-elle à ce moment?`,
    S`(a) $e^{3k}=1.6\Rightarrow k=\frac{\ln1.6}3\approx0.1567$ : $P=2500e^{0.1567t}$. (b) $e^{kt}=4\Rightarrow t=\frac{3\ln4}{\ln1.6}\approx8.85$ h. (c) $P'=kP\approx0.1567\times10000\approx1567$ cellules par heure. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 12, ymin: -500, ymax: 13000 }, curves: [{ f: (t) => 2500 * Math.exp(0.15667 * t), a: 0, b: 10, color: "violet" }], points: [P(0, 2500), P(3, 4000), P(8.85, 10000)], step: { x: 1, y: 1000 }, xlabel: "t" })),
  W(5, "hard", 4, S`On trouve un corps à 21 h; sa température est de 30 °C. À 22 h, elle est de 27 °C. La pièce est à 18 °C et la température normale du corps est de 37 °C. Suppose que $T=18+Ce^{-kt}$. (a) Trouve $k$ (par heure). (b) Estime l'heure du décès. (c) À quel rythme le corps se refroidissait-il à 21 h?`,
    S`(a) $12e^{-k}=9\Rightarrow k=\ln\frac43\approx0.2877$. (b) À partir de 37 °C : $19e^{-kt}=12\Rightarrow t=\frac{\ln(19/12)}{k}\approx1.60$ h avant 21 h, soit vers 19 h 24. (c) $T'=-k(T-18)=-0.2877\times12\approx-3.45$ °C par heure. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 12, ymin: -2, ymax: 42 }, curves: [{ f: (t) => 18 + 19 * Math.exp(-0.28768 * t), a: 0, b: 12, color: "violet" }], lines: [{ m: 0, b: 18, color: "gray", dash: true }], points: [P(0, 37), P(1.597, 30), P(2.597, 27)], step: { x: 1, y: 5 }, xlabel: "heures après le décès" })),
  W(5, "hard", 3, S`On ensemence un étang de poissons; la population est $P(t)=\frac{600}{1+19e^{-0.5t}}$ après $t$ mois. (a) Combien de poissons a-t-on ensemencés? (b) Montre que $P'=0.5P\left(1-\frac{P}{600}\right)$. (c) Quand la population croît-elle le plus rapidement, et à quel rythme?`,
    S`(a) $P(0)=30$. (b) $P'=\frac{600\cdot9.5e^{-0.5t}}{(1+19e^{-0.5t})^2}=0.5\cdot\frac{600}{1+19e^{-0.5t}}\cdot\frac{19e^{-0.5t}}{1+19e^{-0.5t}}$, et le dernier facteur est $1-\frac P{600}$. (c) Lorsque $P=300$ : $t=2\ln19\approx5.89$ mois, $P'=0.5\cdot300\cdot\frac12=75$ poissons par mois. [1, 1, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 16, ymin: -30, ymax: 680 }, curves: [{ f: (t) => 600 / (1 + 19 * Math.exp(-0.5 * t)), a: 0, b: 16, color: "violet" }], lines: [{ m: 0, b: 600, color: "gray", dash: true }], points: [P(0, 30), P(5.889, 300)], step: { x: 2, y: 100 }, xlabel: "t" })),
];

await runWritten(WRITTEN, "../mcv4u-ch5/written.mjs", import.meta.url);

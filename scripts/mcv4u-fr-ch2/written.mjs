// MCV4U-FR chapitre 2 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mcv4u-ch2/written.mjs (mêmes figures, étiquettes en français).
//   node scripts/mcv4u-fr-ch2/written.mjs           -> essai à blanc
//   node scripts/mcv4u-fr-ch2/written.mjs --apply   -> téléverse les figures et insère les lignes absentes
import { planeDoc, P } from "./bank/fig.mjs";
import { runWritten } from "../mcv4u-fr/written-run.mjs";
import { TITLE as T1 } from "./l2_1.mjs";
import { TITLE as T2 } from "./l2_2.mjs";
import { TITLE as T3 } from "./l2_3.mjs";
import { TITLE as T4 } from "./l2_4.mjs";
import { TITLE as T5 } from "./l2_5.mjs";
import { TITLE as T6 } from "./l2_6.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5, 6: T6 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
/** courbe rationnelle coupée à ses asymptotes verticales */
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};

export const WRITTEN = [
  W(1, "medium", 4, S`Pour $f(x)=x^3-3x^2-24x+5$ (graphique ci-contre) : (a) trouve $f'(x)$; (b) trouve les points où la tangente est horizontale; (c) trouve l'équation de la tangente en $x=0$.`,
    S`(a) $f'(x)=3x^2-6x-24$. (b) $3(x-4)(x+2)=0$ : $(-2,33)$ et $(4,-75)$. (c) $f(0)=5$, $f'(0)=-24$ : $y=-24x+5$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 6.5, ymin: -85, ymax: 45 }, curves: [{ f: (x) => x ** 3 - 3 * x * x - 24 * x + 5, color: "violet" }], points: [P(-2, 33), P(4, -75), P(0, 5)], step: { x: 1, y: 10 } })),
  W(1, "hard", 4, S`Trouve les équations des deux tangentes à $y=x^2-2x$ qui passent par le point $(2,-4)$, qui n'est pas sur la courbe. Montre que chaque droite touche la courbe.`,
    S`Tangente en $x=a$ : $y=(2a-2)(x-a)+a^2-2a$. En remplaçant par $(2,-4)$ : $-4=-a^2+4a-4\Rightarrow a(a-4)=0$. $a=0$ : $y=-2x$; $a=4$ : point $(4,8)$, pente 6, $y=6x-16$. Chacune rencontre la courbe là où $x^2-2x-(\text{droite})$ est un carré parfait : $x^2$ et $(x-4)^2$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 6, ymin: -6, ymax: 14 }, curves: [{ f: (x) => x * x - 2 * x, color: "violet" }, { f: (x) => -2 * x, color: "green" }, { f: (x) => 6 * x - 16, color: "green" }], points: [P(2, -4, null, "red"), P(0, 0), P(4, 8)], step: { x: 1, y: 2 } })),
  W(2, "medium", 4, S`Pour $f(x)=(x^2-4)(2x+1)$ : (a) dérive à l'aide de la règle du produit; (b) vérifie ta réponse en développant d'abord; (c) trouve la tangente en $x=1$ et décris-la.`,
    S`(a) $2x(2x+1)+2(x^2-4)=6x^2+2x-8$. (b) $f=2x^3+x^2-8x-4\Rightarrow f'=6x^2+2x-8$ ✓. (c) $f(1)=-9$, $f'(1)=0$ : $y=-9$, une tangente horizontale. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 3, ymin: -12, ymax: 12 }, curves: [{ f: (x) => (x * x - 4) * (2 * x + 1), color: "violet" }, { f: () => -9, color: "green" }], points: [P(1, -9)], step: { x: 1, y: 2 } })),
  W(2, "hard", 4, S`Dans $t$ mois, un service de diffusion en continu aura $N(t)=2000+150t$ abonnés qui paient chacun $p(t)=30-0.5t$ dollars par mois (le graphique montre $R$ en milliers de dollars). (a) Utilise la règle du produit pour trouver $R'(t)$ pour le revenu mensuel $R=Np$. (b) Trouve $R'(4)$ et interprète ce résultat. (c) Quand le revenu cesse-t-il d'augmenter?`,
    S`(a) $R'=150(30-0.5t)+(2000+150t)(-0.5)=3500-150t$. (b) $R'(4)=2900$ : le revenu augmente d'environ 2900 dollars par mois. (c) $3500-150t=0\Rightarrow t\approx23.3$ mois. [2, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 120 }, curves: [{ f: (t) => (2000 + 150 * t) * (30 - 0.5 * t) / 1000, a: 0, b: 50, color: "violet" }], points: [P(70 / 3, (2000 + 3500) * (30 - 35 / 3) / 1000)], step: { x: 5, y: 20 }, xlabel: "t (mois)", ylabel: "R (milliers de dollars)" })),
  W(3, "medium", 4, S`Un objet se déplace selon $s(t)=2t^3-15t^2+36t$ m, $0\le t\le4$ (graphique ci-contre). (a) Trouve $v(t)$ et $a(t)$. (b) Quand est-il au repos, et dans quel sens se déplace-t-il entre ces instants? (c) Trouve la distance totale parcourue.`,
    S`(a) $v=6t^2-30t+36=6(t-2)(t-3)$, $a=12t-30$. (b) Au repos en $t=2$ et en $t=3$; $v\lt0$ entre les deux, donc il recule. (c) $s(0)=0$, $s(2)=28$, $s(3)=27$, $s(4)=32$ : $28+1+5=34$ m. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 4.3, ymin: 0, ymax: 36 }, curves: [{ f: (t) => 2 * t ** 3 - 15 * t * t + 36 * t, a: 0, b: 4.3, color: "violet" }], points: [P(2, 28), P(3, 27), P(4, 32)], step: { x: 0.5, y: 4 }, xlabel: "t (s)", ylabel: "s (m)" })),
  W(3, "hard", 4, S`La vitesse d'un robot est $v(t)=-t^2+8t-12$ m/s, $0\le t\le8$ (graphique ci-contre). (a) Quand avance-t-il? (b) Trouve $a(t)$ et les intervalles où il accélère (où le module de sa vitesse augmente). (c) Explique, à l'aide du graphique, pourquoi il ralentit sur $(4,6)$.`,
    S`(a) $v=-(t-2)(t-6)\gt0$ sur $(2,6)$. (b) $a=-2t+8$. Mêmes signes : $(2,4)$ ($v\gt0$, $a\gt0$) et $(6,8]$ ($v\lt0$, $a\lt0$). (c) Sur $(4,6)$, la vitesse est positive mais diminue vers 0; le module de la vitesse diminue donc. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 8.3, ymin: -13, ymax: 6 }, curves: [{ f: (t) => -t * t + 8 * t - 12, a: 0, b: 8, color: "blue" }], points: [P(2, 0), P(6, 0), P(4, 4)], step: { x: 1, y: 2 }, xlabel: "t (s)", ylabel: "v (m/s)" })),
  W(3, "hard", 3, S`Sur Mars, une pierre lancée vers le haut a une hauteur $h(t)=-1.9t^2+19t+2$ m. (a) Trouve sa hauteur maximale. (b) Trouve sa vitesse au moment où elle touche le sol, au dixième près. (c) Trouve son accélération et compare-la à celle de la Terre, $-9.8$ m/s².`,
    S`(a) $v=-3.8t+19=0$ en $t=5$; $h(5)=49.5$ m. (b) $h=0$ en $t=\frac{19+\sqrt{376.2}}{3.8}\approx10.10$ s; $v\approx-19.4$ m/s. (c) $a=-3.8$ m/s², environ 39 % de celle de la Terre. [1, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 55 }, curves: [{ f: (t) => -1.9 * t * t + 19 * t + 2, a: 0, b: 10.104, color: "violet" }], points: [P(5, 49.5), P(10.1, 0)], step: { x: 1, y: 5 }, xlabel: "t (s)", ylabel: "h (m)" })),
  W(4, "medium", 4, S`Pour $y=(x^2-2x)^3$ (graphique ci-contre) : (a) trouve $\frac{dy}{dx}$ et factorise-la complètement; (b) trouve tous les points où la tangente est horizontale; (c) explique pourquoi le graphique s'aplatit en $x=0$ et en $x=2$ sans changer de direction.`,
    S`(a) $3(x^2-2x)^2(2x-2)=6x^2(x-2)^2(x-1)$. (b) $(0,0)$, $(1,-1)$, $(2,0)$. (c) En 0 et en 2, les facteurs sont au carré; $y'$ ne change donc pas de signe : la courbe s'aplatit, mais continue de descendre (en 0) ou de monter (en 2). [1, 2, 1.]`,
    planeDoc({ view: { xmin: -0.8, xmax: 2.8, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => (x * x - 2 * x) ** 3, color: "violet" }], points: [P(0, 0), P(1, -1), P(2, 0)], step: { x: 0.5, y: 0.5 } })),
  W(4, "hard", 4, S`Pour $y=\frac{x}{\sqrt{x^2+4}}$ : (a) utilise la règle du produit et la règle de dérivation en chaîne pour montrer que $y'=\frac{4}{(x^2+4)^{3/2}}$; (b) explique pourquoi la fonction est toujours croissante; (c) trouve la tangente à l'origine.`,
    S`(a) $y=x(x^2+4)^{-1/2}$; $y'=(x^2+4)^{-1/2}-x^2(x^2+4)^{-3/2}=\frac{(x^2+4)-x^2}{(x^2+4)^{3/2}}$. (b) Le numérateur vaut 4 et le dénominateur est positif, donc $y'\gt0$. (c) $y'(0)=\frac48=\frac12$ : $y=\frac12x$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -8, xmax: 8, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (x) => x / Math.sqrt(x * x + 4), color: "violet" }, { f: (x) => x / 2, color: "green", a: -3, b: 3 }], points: [P(0, 0)], lines: [{ m: 0, b: 1, color: "red", dash: true }, { m: 0, b: -1, color: "red", dash: true }], step: { x: 1, y: 0.5 } })),
  W(4, "hard", 4, S`Le rayon d'un ballon sphérique est $r(t)=\sqrt{t+4}$ cm après $t$ s. (a) Utilise $\frac{dV}{dt}=\frac{dV}{dr}\cdot\frac{dr}{dt}$, avec $V=\frac43\pi r^3$, pour trouver le taux en $t=5$. (b) Vérifie en écrivant $V$ en fonction de $t$ et en dérivant directement.`,
    S`(a) $\frac{dV}{dr}=4\pi r^2$, $\frac{dr}{dt}=\frac1{2\sqrt{t+4}}$; en $t=5$, $r=3$ : $4\pi(9)\cdot\frac16=6\pi\approx18.85$ cm³/s. (b) $V=\frac43\pi(t+4)^{3/2}\Rightarrow V'=2\pi(t+4)^{1/2}=6\pi$ ✓. [2, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 220 }, curves: [{ f: (t) => (4 / 3) * Math.PI * (t + 4) ** 1.5, a: 0, b: 12, color: "violet" }, { f: (t) => 36 * Math.PI + 6 * Math.PI * (t - 5), color: "green", a: 1, b: 10 }], points: [P(5, 113.1)], step: { x: 1, y: 20 }, xlabel: "t (s)", ylabel: "V (cm³)" })),
  W(5, "medium", 4, S`Pour $f(x)=\frac{2x+3}{x-1}$ (graphique ci-contre) : (a) trouve $f'(x)$; (b) explique pourquoi $f$ est décroissante de chaque côté de $x=1$; (c) trouve l'équation de la tangente en $x=2$.`,
    S`(a) $\frac{2(x-1)-(2x+3)}{(x-1)^2}=\frac{-5}{(x-1)^2}$. (b) Le numérateur est négatif et $(x-1)^2\gt0$, donc $f'\lt0$ partout où elle est définie. (c) $f(2)=7$, $f'(2)=-5$ : $y=-5x+17$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -4, xmax: 6, ymin: -8, ymax: 14 }, curves: [...rat((x) => (2 * x + 3) / (x - 1), [1], { xmin: -4, xmax: 6 }), { f: (x) => 17 - 5 * x, color: "green", a: 1.3, b: 3.6 }], vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [P(2, 7)], step: { x: 1, y: 2 } })),
  W(5, "hard", 4, S`Pour $f(x)=\frac{x^2-3}{x-2}$ (graphique ci-contre) : (a) montre que $f'(x)=\frac{(x-1)(x-3)}{(x-2)^2}$; (b) trouve les points où la tangente est horizontale; (c) décris le comportement de $f$ près de $x=2$.`,
    S`(a) $\frac{2x(x-2)-(x^2-3)}{(x-2)^2}=\frac{x^2-4x+3}{(x-2)^2}$. (b) $(1,2)$ et $(3,6)$. (c) Asymptote verticale $x=2$ : $f\to-\infty$ à gauche (numérateur $1\gt0$, dénominateur $\to0^-$) et $+\infty$ à droite. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 7, ymin: -8, ymax: 14 }, curves: rat((x) => (x * x - 3) / (x - 2), [2], { xmin: -3, xmax: 7 }), vlines: [{ x: 2, color: "red", dash: true }], points: [P(1, 2), P(3, 6)], step: { x: 1, y: 2 } })),
  W(6, "medium", 4, S`Pour $x$ articles, une entreprise a un coût $C(x)=2500+18x+0.015x^2$ et un revenu $R(x)=60x-0.005x^2$ dollars (graphique : coût en rouge, revenu en bleu, profit en violet, en milliers de dollars). (a) Trouve le coût marginal en $x=300$ et compare-le au coût réel du 301e article. (b) Trouve le profit marginal en $x=300$. (c) Trouve le niveau de production qui maximise le profit.`,
    S`(a) $C'(300)=18+9=27$; $C(301)-C(300)=18+0.015(601)=27.015$ dollars. (b) $P'=R'-C'=42-0.04x$; $P'(300)=30$ dollars par article. (c) $P'=0$ en $x=1050$ articles. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 2000, ymin: 0, ymax: 100 }, curves: [{ f: (x) => (2500 + 18 * x + 0.015 * x * x) / 1000, a: 0, b: 2000, color: "red" }, { f: (x) => (60 * x - 0.005 * x * x) / 1000, a: 0, b: 2000, color: "blue" }, { f: (x) => (42 * x - 0.02 * x * x - 2500) / 1000, a: 0, b: 2000, color: "violet" }], points: [P(1050, 19.55)], step: { x: 250, y: 10 }, xlabel: "x (articles)", ylabel: "milliers de dollars" })),
  W(6, "hard", 4, S`La demande pour un produit est $p=200-0.5x$ dollars (graphique : revenu en bleu, profit en violet, en milliers de dollars). (a) Écris la fonction revenu. (b) Trouve la quantité et le prix qui maximisent le revenu. (c) Si le coût est $C(x)=4000+40x$, trouve la quantité, le prix et le profit qui maximisent le profit, et explique pourquoi le meilleur prix pour le profit est plus élevé que le meilleur prix pour le revenu.`,
    S`(a) $R=200x-0.5x^2$. (b) $R'=200-x=0$ : $x=200$, $p=100$ dollars. (c) $P=160x-0.5x^2-4000$, $P'=0$ en $x=160$; $p=120$, $P=8800$ dollars. Chaque article supplémentaire coûte 40 dollars; il est donc avantageux de vendre moins d'articles, ce qui permet un prix plus élevé. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 400, ymin: -6, ymax: 22 }, curves: [{ f: (x) => (200 * x - 0.5 * x * x) / 1000, a: 0, b: 400, color: "blue" }, { f: (x) => (160 * x - 0.5 * x * x - 4000) / 1000, a: 0, b: 400, color: "violet" }], points: [P(200, 20), P(160, 8.8)], step: { x: 50, y: 2 }, xlabel: "x (articles)", ylabel: "milliers de dollars" })),
];

await runWritten(WRITTEN, "../mcv4u-ch2/written.mjs", import.meta.url);

// MCR3U-FR chapitre 4 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mcr3u-ch4/written-data.mjs (mêmes figures, étiquettes en français; notation y = a·b^(k(x − c)) + d).
//   node scripts/mcr3u-fr-ch4/written.mjs           -> essai à blanc
//   node scripts/mcr3u-fr-ch4/written.mjs --apply   -> téléverse les figures et insère les lignes absentes
import { planeDoc, P } from "../mcr3u-ch4/bank/fig.mjs";
import { runWritten } from "../mcr3u-fr/written-run.mjs";
import { TITLE as T1 } from "./l4_1.mjs";
import { TITLE as T2 } from "./l4_2.mjs";
import { TITLE as T3 } from "./l4_3.mjs";
import { TITLE as T4 } from "./l4_4.mjs";
import { TITLE as T5 } from "./l4_5.mjs";
import { TITLE as T6 } from "./l4_6.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5, 6: T6 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const pow = (b, pts, view = { xmin: -4, xmax: 4, ymin: -1, ymax: 10 }) => planeDoc({ view, curves: [{ f: (x) => b ** x, color: "violet" }], points: pts, step: { x: 1, y: 1 } });

export const WRITTEN = [
  W(1, "medium", 4, S`Le graphique montre $y=2^x$. (a) Utilise la régularité des points marqués pour expliquer pourquoi $2^0=1$ et $2^{-2}=\frac14$. (b) Évalue $\left(\tfrac23\right)^{-2}-3^{-1}$. (c) Simplifie $(5x^{-3}y^2)^{-2}$ avec des exposants positifs.`,
    S`(a) Se déplacer d'une unité vers la gauche divise par 2 : $2\to1\to\tfrac12\to\tfrac14$. (b) $\tfrac94-\tfrac13=\tfrac{23}{12}$. (c) $\frac{x^6}{25y^4}$. [2, 1, 1.]`,
    pow(2, [P(-2, 0.25), P(-1, 0.5), P(0, 1), P(1, 2), P(2, 4)])),
  W(1, "hard", 4, S`(a) Simplifie $\dfrac{(3a^{-2}b)^{-3}}{(9a^2b^{-1})^{-1}}$. (b) Évalue $\left(3^{-1}+6^{-1}\right)^{-2}$. (c) Résous $2^{x-3}=\frac1{64}$ et montre la solution sur le graphique de $y=2^{x-3}$.`,
    S`(a) $\frac{a^6b^{-3}}{27}\cdot9a^2b^{-1}=\frac{a^8}{3b^4}$. (b) $\left(\tfrac12\right)^{-2}=4$. (c) $x-3=-6$ : $x=-3$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 5, ymin: -0.5, ymax: 4 }, curves: [{ f: (x) => 2 ** (x - 3), color: "violet" }], points: [P(-3, 1 / 64, "(−3, 1/64)"), P(3, 1)], step: { x: 1, y: 0.5 } })),
  W(2, "medium", 4, S`Le graphique montre $y=27^x$. (a) Explique pourquoi le point d'abscisse $x=\tfrac13$ a pour ordonnée $y=3$. (b) Évalue $27^{2/3}$, $27^{-1/3}$ et $\left(\tfrac{8}{27}\right)^{2/3}$. (c) Écris $\sqrt[4]{x^3}$ sous forme exponentielle.`,
    S`(a) $27^{1/3}=\sqrt[3]{27}=3$. (b) $9$, $\tfrac13$, $\tfrac49$. (c) $x^{3/4}$. [1, 2, 1.]`,
    pow(27, [P(1 / 3, 3, "(⅓, 3)"), P(2 / 3, 9, "(⅔, 9)"), P(0, 1)], { xmin: -1, xmax: 1, ymin: -1, ymax: 12 })),
  W(2, "hard", 4, S`(a) Évalue $16^{3/4}-32^{-2/5}\cdot8^{2/3}$. (b) Résous $x^{4/3}=81$ pour $x>0$. (c) Explique pourquoi $(-8)^{2/3}$ est réel, alors que $(-8)^{3/2}$ ne l'est pas.`,
    S`(a) $8-\tfrac14\cdot4=7$. (b) $x=81^{3/4}=27$. (c) $(\sqrt[3]{-8})^2=4$; $(-8)^{3/2}$ exige $\sqrt{-8}$, qui n'est pas réel. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 35, ymin: 0, ymax: 100 }, curves: [{ f: (x) => x ** (4 / 3), a: 0, color: "violet" }], lines: [{ m: 0, b: 81, color: "amber", dash: true }], points: [P(27, 81)], step: { x: 5, y: 10 } })),
  W(3, "medium", 4, S`(a) Simplifie $\left(81x^8y^{-4}\right)^{1/4}$. (b) Simplifie $\dfrac{x^{2/3}\cdot x^{1/2}}{x^{1/6}}$. (c) Le graphique montre $y=4^x$ et $y=2^{x+3}$. Résous $4^x=2^{x+3}$ algébriquement et vérifie à l'aide du graphique.`,
    S`(a) $\frac{3x^2}{y}$. (b) $x^{4/6+3/6-1/6}=x$. (c) $2^{2x}=2^{x+3}\Rightarrow x=3$; les deux valent 64. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -1, xmax: 4, ymin: -2, ymax: 80 }, curves: [{ f: (x) => 4 ** x, color: "violet" }, { f: (x) => 2 ** (x + 3), color: "amber" }], points: [P(3, 64)], step: { x: 0.5, y: 10 } })),
  W(3, "hard", 4, S`(a) Écris $\dfrac{9^{x+2}}{27^x}$ sous forme d'une seule puissance de 3. (b) Résous $9^{x+2}=27^x$. (c) Développe et simplifie $\left(x^{1/2}+2x^{-1/2}\right)^2$.`,
    S`(a) $3^{2x+4-3x}=3^{4-x}$. (b) $4-x=0$ : $x=4$. (c) $x+4+\frac4x$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 1e6 / 1000 }, curves: [{ f: (x) => 9 ** (x + 2) / 1000, color: "violet" }, { f: (x) => 27 ** x / 1000, color: "amber" }], step: { x: 1, y: 100 }, ylabel: "y (milliers)" })),
  W(4, "medium", 4, S`La table donne $x=0,1,2,3$ et $y=3,6,12,24$; ces points sont représentés. (a) Montre que la relation est exponentielle et écris son équation. (b) Énonce son domaine, son image, son ordonnée à l'origine et son asymptote. (c) Compare sa croissance avec celle de $y=3x+3$.`,
    S`(a) rapport 2 : $y=3(2)^x$. (b) $\mathbb R$; $y>0$; 3; $y=0$. (c) les deux commencent à 3; la droite ajoute 3 à chaque pas tandis que l'exponentielle double, donc elle devient vite beaucoup plus grande. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 5, ymin: -1, ymax: 30 }, points: [P(0, 3), P(1, 6), P(2, 12), P(3, 24)], lines: [{ m: 3, b: 3, color: "green" }], step: { x: 1, y: 3 } })),
  W(4, "hard", 4, S`Une fonction exponentielle $y=ab^x$ passe par $(1,10)$ et $(3,2.5)$. (a) Trouve $a$ et $b$. (b) S'agit-il d'une croissance ou d'une décroissance? (c) Pour quel nombre entier $x$ la valeur de $y$ passe-t-elle sous 0.5 pour la première fois?`,
    S`(a) $b^2=\tfrac14\Rightarrow b=\tfrac12$, $a=20$. (b) décroissance. (c) $20(\tfrac12)^x<0.5\Rightarrow2^x>40$ : $x=6$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 22 }, curves: [{ f: (x) => 20 * 0.5 ** x, color: "violet" }], points: [P(1, 10), P(3, 2.5)], step: { x: 1, y: 2 } })),
  W(5, "medium", 4, S`Trace le graphique de $y=3(2)^{x-1}-4$ sur le quadrillage. (a) Décris les transformations de $y=2^x$. (b) Trouve les images des points clés $(-1,\tfrac12)$, $(0,1)$, $(1,2)$. (c) Énonce l'asymptote, le domaine, l'image et l'ordonnée à l'origine.`,
    S`(a) étirement vertical de facteur 3, 1 vers la droite, 4 vers le bas. (b) $(0,-2.5)$, $(1,-1)$, $(2,2)$. (c) $y=-4$; $\mathbb R$; $y>-4$; $-2.5$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 5, ymin: -6, ymax: 10 } })),
  W(5, "hard", 4, S`Une fonction exponentielle $y=ab^x+d$ a pour asymptote $y=5$ et passe par $(0,2)$ et $(1,-1)$ (voir le graphique). (a) Trouve $a$, $b$ et $d$. (b) Énonce l'image. (c) Trouve la valeur de y à $x=2$ et décris le comportement aux extrémités.`,
    S`(a) $d=5$, $a=-3$, $-3b+5=-1\Rightarrow b=2$. (b) $y<5$. (c) $-12+5=-7$; la courbe descend sans borne quand $x$ augmente et s'approche de 5 quand $x$ diminue. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 3, ymin: -10, ymax: 7 }, curves: [{ f: (x) => -3 * 2 ** x + 5, color: "violet" }], lines: [{ m: 0, b: 5, color: "green", dash: true }], points: [P(0, 2), P(1, -1)], step: { x: 1, y: 1 } })),
  W(6, "medium", 4, S`Une voiture de 32 000 dollars perd 16 % de sa valeur chaque année. (a) Écris un modèle. (b) Trouve sa valeur après 4 ans. (c) Utilise le graphique ou des essais successifs pour trouver quand elle vaut la moitié de son prix.`,
    S`(a) $V=32\,000(0.84)^t$. (b) $\approx15\,932$ dollars. (c) $0.84^3\approx0.593$, $0.84^4\approx0.498$ : pendant la 4e année (environ 4 ans). [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 34000 }, curves: [{ f: (t) => 32000 * 0.84 ** t, a: 0, color: "violet" }], lines: [{ m: 0, b: 16000, color: "amber", dash: true }], step: { x: 1, y: 4000 }, xlabel: "t (ans)", ylabel: "V" })),
  W(6, "hard", 5, S`Une tarte à 180 °C refroidit dans une cuisine à 20 °C. Son excès de température diminue de moitié toutes les 15 minutes. (a) Écris un modèle $T(t)$. (b) Trouve $T(45)$. (c) Énonce un domaine et une image raisonnables et justifie-les. (d) Aux 5 minutes près, quand la tarte est-elle à 40 °C?`,
    S`(a) $T=160\left(\tfrac12\right)^{t/15}+20$. (b) $160\cdot\tfrac18+20=40$ °C. (c) $t\ge0$; $20<T\le180$ — elle ne peut pas refroidir sous la température de la pièce. (d) 45 min (d'après b). [1, 1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 90, ymin: 0, ymax: 190 }, curves: [{ f: (t) => 160 * 0.5 ** (t / 15) + 20, a: 0, color: "violet" }], lines: [{ m: 0, b: 20, color: "green", dash: true }], step: { x: 10, y: 20 }, xlabel: "t (min)", ylabel: "T (°C)" })),
  W(6, "hard", 4, S`Deux placements : A est de 3000 dollars à 5 % composé annuellement; B est de 4000 dollars à 2.5 % composé annuellement. (a) Écris les deux modèles. (b) Après combien d'années complètes A vaut-il plus que B? (c) Explique pourquoi A doit finir par dépasser B.`,
    S`(a) $A=3000(1.05)^n$, $B=4000(1.025)^n$. (b) $n=12$ : $5388$ contre $5379$ ($n=11$ : $5131$ contre $5248$). (c) le facteur de croissance de A est plus grand; le rapport $A/B$ est donc multiplié par $\tfrac{1.05}{1.025}$ chaque année. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 20, ymin: 2500, ymax: 8500 }, curves: [{ f: (n) => 3000 * 1.05 ** n, a: 0, color: "blue" }, { f: (n) => 4000 * 1.025 ** n, a: 0, color: "red" }], step: { x: 2, y: 1000 }, xlabel: "années", ylabel: "dollars" })),
];

await runWritten(WRITTEN, "../mcr3u-ch4/written-data.mjs", import.meta.url);

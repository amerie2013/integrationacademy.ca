// MCV4U-FR Fiche 5.2 — Le logarithme naturel et sa dérivée (édition de l'enseignant; miroir de ../../mcv4u-ch5/ws/w5_2.mjs)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const E = Math.E;
const EXAMPLES = [
  { title: "Résoudre une équation exponentielle", q: S`Résous $3e^{0.5x}=12$.`,
    steps: [S`$e^{0.5x}=4\Rightarrow0.5x=\ln4$.`], ans: S`$x=2\ln4\approx2.773$` },
  { title: "Les lois des logarithmes d'abord", q: S`Dérive $y=\ln\dfrac{x^3(x+1)}{\sqrt x}$.`,
    steps: [S`$y=3\ln x+\ln(x+1)-\frac12\ln x=\frac52\ln x+\ln(x+1)$.`], ans: S`$y'=\frac{5}{2x}+\frac{1}{x+1}$` },
  { title: "Un trinôme à l'intérieur", q: S`Pour $y=\ln(x^2-3x+5)$, trouve $y'(1)$.`,
    steps: [S`$y'=\frac{2x-3}{x^2-3x+5}$; en 1 : $\frac{-1}{3}$.`], ans: S`$-\frac13$` },
  { title: "x négatif", q: S`Trouve la pente de $y=\ln|x|$ en $x=-2$.`,
    fig: F({ view: { xmin: -5, xmax: 5, ymin: -3, ymax: 2.5 }, curves: [{ f: (x) => Math.log(Math.abs(x)), a: -5, b: -0.05 }, { f: (x) => Math.log(Math.abs(x)), a: 0.05, b: 5 }, { f: (x) => Math.log(2) - 0.5 * (x + 2), color: "green", a: -4, b: -0.5 }], points: [pt(-2, Math.log(2))], step: { x: 1, y: 1 } }),
    steps: [S`$\frac{d}{dx}\ln|x|=\frac1x$ pour $x\ne0$.`], ans: S`$-\frac12$` },
  { title: "Une tangente", q: S`Trouve la tangente à $y=\ln(2x)$ en $x=\frac12$.`,
    fig: F({ view: { xmin: -0.2, xmax: 3, ymin: -2.5, ymax: 2.5 }, curves: [{ f: (x) => Math.log(2 * x), a: 0.05, b: 3 }, { f: (x) => 2 * x - 1, color: "green", a: 0, b: 1.6 }], points: [pt(0.5, 0)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`Point $\left(\frac12,0\right)$; pente $\frac1x=2$.`], ans: S`$y=2x-1$` },
  { title: "Une puissance de ln", q: S`Pour $y=(\ln x)^2$, trouve $y'(e)$.`,
    steps: [S`$y'=2\ln x\cdot\frac1x$; en $e$ : $\frac2e$.`], ans: S`$\frac2e\approx0.736$` },
  { title: "Base 5", q: S`Trouve la pente de $y=\log_5x$ en $x=5$.`,
    steps: [S`$y'=\frac1{x\ln5}$; en 5 : $\frac1{5\ln5}$.`], ans: "environ 0.1243" },
  { title: "Un minimum", q: S`Trouve le minimum de $y=x-\ln x$.`,
    fig: F({ view: { xmin: -0.2, xmax: 5, ymin: -0.5, ymax: 4 }, curves: [{ f: (x) => x - Math.log(x), a: 0.05, b: 5 }], points: [pt(1, 1)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`$y'=1-\frac1x=0\Rightarrow x=1$; $y(1)=1$.`], ans: S`minimum $(1,1)$` },
  { title: "Le ln d'une fonction trigonométrique", q: S`Pour $y=\ln(\cos x)$, trouve $y'\left(\frac\pi3\right)$.`,
    steps: [S`$y'=\frac{-\sin x}{\cos x}=-\tan x$; en $\frac\pi3$ : $-\sqrt3$.`], ans: S`$-\sqrt3\approx-1.732$` },
];

const PROBLEMS = [
  { level: 1, q: S`Dérive $y=\ln(7x)$.`, recap: "ln 7 + ln x.", ans: S`$\frac1x$` },
  { level: 1, q: S`Évalue $\ln e^5$.`, recap: "Fonctions réciproques.", ans: "5" },
  { level: 1, q: S`Quelle est la pente de $y=\ln x$ en $x=10$?`, recap: "1/x.", ans: "0.1" },
  { level: 2, q: S`Pour $y=\ln(x^3)$, trouve $y'(2)$.`, recap: "3 ln x.", ans: "1.5" },
  { level: 2, q: S`Pour $y=\ln(2x+1)$, trouve $y'(1)$.`, recap: "2/(2x + 1).", ans: S`$\frac23$` },
  { level: 2, q: S`Pour $y=x\ln x$, trouve $y'(e)$.`, recap: "ln x + 1.", ans: "2" },
  { level: 2, q: S`Résous $e^{2x}=5$.`, recap: "Prends le ln.", ans: S`$\frac{\ln5}2\approx0.805$` },
  { level: 2, q: S`Trouve la tangente à $y=\ln x$ en $x=1$ et trace-la.`, recap: "Point (1, 0), pente 1.", ans: S`$y=x-1$`, fig: gridT({ xmin: -0.5, xmax: 4, ymin: -3, ymax: 2.5 }, { x: 0.5, y: 0.5 }) },
  { level: 3, space: 5, q: S`Pour $y=\ln\dfrac{x^2+1}{x+1}$, trouve $y'(1)$.`, recap: "Sépare avec les lois des logarithmes.", ans: S`$\frac{2x}{x^2+1}-\frac1{x+1}$ en 1 : $\frac12$` },
  { level: 3, space: 5, q: S`Trouve le maximum de $y=\ln x-\frac x2$.`, recap: "1/x − ½ = 0.", ans: S`en $x=2$ : $\ln2-1\approx-0.307$` },
  { level: 3, space: 5, q: S`Montre que toutes les fonctions $y=\ln(kx)$, $k\gt0$, ont la même dérivée, et explique ce fait à l'aide de leurs graphiques.`, recap: "ln(kx) = ln k + ln x.", ans: S`$y'=\frac1x$; les graphiques sont des translations verticales de $\ln x$` },
  { level: 3, space: 5, q: S`Trouve le minimum de $y=x^2-8\ln x$ et esquisse le graphique.`, recap: "2x − 8/x = 0.", ans: S`en $x=2$ : $4-8\ln2\approx-1.545$`, fig: gridT({ xmin: 0, xmax: 4.5, ymin: -2.5, ymax: 6 }, { x: 0.5, y: 1 }) },
  { level: 3, space: 5, q: S`Montre que la pente de $y=\log_bx$ en $x=1$ est $\frac1{\ln b}$. Pour quelle base cette pente vaut-elle 1?`, recap: "Changement de base.", ans: S`$b=e$` },
];

export const WS = {
  code: "5.2",
  title: "Le logarithme naturel et sa dérivée",
  bigideas: S`$\ln x$ est le logarithme de base $e$ : $y=\ln x\iff e^y=x$. Son graphique est la réflexion de $y=e^x$ par rapport à $y=x$; sa pente est donc l'inverse de la pente correspondante de $e^x$ : $\frac{d}{dx}\ln x=\frac1x$, et $\frac{d}{dx}\ln|x|=\frac1x$. Avec la règle de dérivation en chaîne, $\frac{d}{dx}\ln g=\frac{g'}{g}$; pour les autres bases, $\frac{d}{dx}\log_bx=\frac1{x\ln b}$. Utilise les lois des logarithmes pour simplifier avant de dériver.`,
  goals: ["Utiliser ln et ses lois.", "Dériver ln x et ln(g(x)).", "Dériver les autres logarithmes.", "Trouver des tangentes et des extremums."],
  curriculum: "A2.3, A3.4",
  vocab: [["$\\ln x$", "$\\log_e x$"], ["$(\\ln x)'$", "$\\frac1x$"], ["$(\\ln g)'$", "$\\frac{g'}g$"]],
  hook: S`Le point $(2,e^2)$ est sur $y=e^x$, avec une pente $e^2$. Quel point se trouve sur $y=\ln x$, et quelle pente t'attends-tu à y trouver?`,
  concepts: [
    ["1. Réflexion", S`$y=\ln x$ (violet) et $y=e^x$ (bleu) sont des images miroirs par rapport à $y=x$ :
${F({ view: { xmin: -3, xmax: 6, ymin: -3, ymax: 6 }, curves: [{ f: Math.log, a: 0.03, b: 6 }, { f: Math.exp, color: "blue" }, { f: (x) => x, color: "gray" }], points: [pt(E, 1), pt(1, E)], step: { x: 1, y: 1 } })}`],
    ["2. Lois des logarithmes", S`$\ln ab=\ln a+\ln b$, $\ln\frac ab=\ln a-\ln b$, $\ln a^n=n\ln a$.`],
    ["3. Dérivation en chaîne", S`$(\ln g)'=\frac{g'}{g}$.`],
  ],
  tips: ["ln(a + b) ne se sépare pas.", "ln 5 est une constante.", "N'oublie pas g′ dans g′/g.", "Domaine : x > 0 pour ln x.", "Change de base pour les autres logarithmes."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

// MCV4U-FR Fiche 4.3 — Règles de dérivation des fonctions sinusoïdales (édition enseignant)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;
const EXAMPLES = [
  { title: "Un angle multiple", q: S`Dérive $y=\sin(6x)$.`,
    steps: [S`Intérieure $6x$, de dérivée 6.`], ans: S`$y'=6\cos(6x)$` },
  { title: "Un déphasage", q: S`Dérive $y=\cos\left(3x+\frac\pi4\right)$.`,
    steps: [S`$-\sin\left(3x+\frac\pi4\right)\cdot3$.`], ans: S`$y'=-3\sin\left(3x+\frac\pi4\right)$` },
  { title: "Une puissance du cosinus", q: S`Dérive $y=\cos^3x$.`,
    steps: [S`$y=(\cos x)^3\Rightarrow3(\cos x)^2\cdot(-\sin x)$.`], ans: S`$y'=-3\cos^2x\sin x$` },
  { title: "Une racine à l'intérieur", q: S`Dérive $y=\sin\sqrt x$.`,
    steps: [S`$\cos\sqrt x\cdot\frac{1}{2\sqrt x}$.`], ans: S`$y'=\frac{\cos\sqrt x}{2\sqrt x}$` },
  { title: "Tangente d'un carré", q: S`Dérive $y=\tan(x^2)$.`,
    steps: [S`$\sec^2(x^2)\cdot2x$.`], ans: S`$y'=2x\sec^2(x^2)$` },
  { title: "Une sinusoïde transformée", q: S`Trouve la pente de $y=5\sin(2x-1)+3$ en $x=0.5$.`,
    steps: [S`$y'=10\cos(2x-1)$; en $0.5$ : $10\cos0$.`], ans: "10 (la plus grande pente possible, à l'axe)" },
  { title: "Produit et chaîne", q: S`Dérive $y=x^2\sin(3x)$.`,
    steps: [S`$2x\sin(3x)+x^2\cdot3\cos(3x)$.`], ans: S`$y'=2x\sin(3x)+3x^2\cos(3x)$` },
  { title: "Une fonction dans une fonction", q: S`Dérive $y=\cos(\sin x)$ et trouve $y'(0)$.`,
    fig: F({ view: { xmin: -PI, xmax: PI, ymin: 0, ymax: 1.2 }, curves: [{ f: (x) => Math.cos(Math.sin(x)) }], points: [pt(0, 1)], step: { x: 0.5, y: 0.2 } }),
    steps: [S`$-\sin(\sin x)\cdot\cos x$.`, S`En 0 : $-\sin0\cdot1=0$.`], ans: S`$y'=-\sin(\sin x)\cos x$; $y'(0)=0$` },
  { title: "Une tangente", q: S`Trouve la tangente à $y=\sin^2(2x)$ en $x=\frac\pi8$.`,
    fig: F({ view: { xmin: -0.2, xmax: 1.8, ymin: -0.3, ymax: 1.3 }, curves: [{ f: (x) => Math.sin(2 * x) ** 2 }, { f: (x) => 2 * x - PI / 4 + 0.5, color: "green", a: 0.1, b: 0.7 }], points: [pt(PI / 8, 0.5)], step: { x: 0.25, y: 0.25 } }),
    steps: [S`$y\left(\frac\pi8\right)=\sin^2\frac\pi4=\frac12$.`, S`$y'=2\sin(2x)\cos(2x)\cdot2=2\sin(4x)$; en $\frac\pi8$ : $2\sin\frac\pi2=2$.`], ans: S`$y=2x-\frac\pi4+\frac12$` },
];

const PROBLEMS = [
  { level: 1, q: S`Dérive $y=\sin(7x)$.`, recap: "Dérivée intérieure 7.", ans: S`$7\cos(7x)$` },
  { level: 1, q: S`Dérive $y=\cos\left(\frac x3\right)$.`, recap: "Dérivée intérieure 1/3.", ans: S`$-\frac13\sin\left(\frac x3\right)$` },
  { level: 1, q: S`Dérive $y=2\sin(5x)$.`, recap: "La constante reste en facteur.", ans: S`$10\cos(5x)$` },
  { level: 2, q: S`Pour $f(x)=\sin^2(3x)$, trouve $f'\left(\frac\pi{12}\right)$.`, recap: "6 sin 3x cos 3x.", ans: "3" },
  { level: 2, q: S`Quelle est la plus grande pente de $y=\cos(2x)+\sin(2x)$ ?`, recap: "y′ = 2(cos 2x − sin 2x).", ans: S`$2\sqrt2\approx2.83$` },
  { level: 2, q: S`Pour $y=\sqrt{\cos x}$, trouve $y'(0)$.`, recap: "−sin x/(2√cos x).", ans: "0" },
  { level: 2, q: S`Pour $y=4\cos\left(\frac{\pi x}3\right)$, trouve $y'(1)$ (3 décimales).`, recap: "−(4π/3) sin(πx/3).", ans: S`$\approx-3.628$` },
  { level: 2, q: S`Trouve la tangente à $y=\sin(2x)$ en $x=\frac\pi6$ et trace-la.`, recap: "Pente 2 cos(π/3) = 1.", ans: S`$y=x-\frac\pi6+\frac{\sqrt3}2$`, fig: gridT({ xmin: -0.5, xmax: 2, ymin: -1.5, ymax: 1.5 }, { x: 0.25, y: 0.5 }) },
  { level: 3, space: 5, q: S`Combien de tangentes horizontales $y=\sin x\cos^2x$ a-t-elle dans $[0,2\pi)$ ?`, recap: "y′ = cos x (1 − 3 sin² x).", ans: S`6 : $x=\frac\pi2,\frac{3\pi}2$ et les quatre solutions de $\sin x=\pm\frac1{\sqrt3}$` },
  { level: 3, space: 5, q: S`Trouve le maximum de $f(x)=\sin(2x)+2\sin x$ sur $[0,2\pi]$ (3 décimales).`, recap: "f′ = 2(2cos x − 1)(cos x + 1).", ans: S`en $x=\frac\pi3$ : $\frac{\sqrt3}2+\sqrt3\approx2.598$` },
  { level: 3, space: 5, q: S`Dérive $\sin^2x+\cos^2x$ à l'aide de la règle de dérivation en chaîne et explique le résultat.`, recap: "La somme est constante.", ans: S`$2\sin x\cos x-2\cos x\sin x=0$, ce qui concorde avec $\sin^2x+\cos^2x=1$` },
  { level: 3, space: 5, q: S`Pour $y=\sec(3x)$, trouve $y'$ et $y'(0)$.`, recap: "3 sec(3x) tan(3x).", ans: S`$3\sec(3x)\tan(3x)$; $0$` },
  { level: 3, space: 5, q: S`$y=A\sin(kx)$ a une période de $\pi$ et une plus grande pente de 12. Trouve $A$ et $k$ ($A,k\gt0$) et esquisse le graphique.`, recap: "Période 2π/k; plus grande pente Ak.", ans: S`$k=2$, $A=6$`, fig: gridT({ xmin: 0, xmax: 3.5, ymin: -7, ymax: 7 }, { x: 0.25, y: 1 }) },
];

export const WS = {
  code: "4.3",
  title: "Règles de dérivation des fonctions sinusoïdales",
  bigideas: S`La règle de dérivation en chaîne prolonge les deux dérivées de base : $\frac{d}{dx}\sin(g(x))=\cos(g(x))\,g'(x)$ et $\frac{d}{dx}\cos(g(x))=-\sin(g(x))\,g'(x)$. Les puissances comme $\sin^nx=(\sin x)^n$ donnent $n\sin^{n-1}x\cos x$. Pour une sinusoïde transformée, $\frac{d}{dx}[A\sin(kx+c)+d]=Ak\cos(kx+c)$ : la plus grande pente est $|Ak|$, et $c$ et $d$ n'influent pas sur l'inclinaison.`,
  goals: ["Utiliser la règle de dérivation en chaîne avec sin et cos.", "Dériver des puissances de fonctions trigonométriques.", "Dériver des sinusoïdes transformées.", "Combiner avec la règle du produit."],
  curriculum: "A3.4",
  vocab: [["$(\\sin g)'$", "$g'\\cos g$"], ["$(\\sin^n x)'$", "$n\\sin^{n-1}x\\cos x$"], ["Plus grande pente", "$|Ak|$"]],
  hook: S`Esquisse $y=\sin x$ et $y=\sin(2x)$ dans le même plan. Laquelle est la plus abrupte à l'origine, et de combien ?`,
  concepts: [
    ["1. La vitesse intérieure multiplie", S`$y=\sin(2x)$ (violet) a pour dérivée $2\cos(2x)$ (bleu) :
${F({ view: { xmin: -0.2, xmax: 6.6, ymin: -2.3, ymax: 2.3 }, curves: [{ f: (x) => Math.sin(2 * x), a: 0, b: 2 * PI }, { f: (x) => 2 * Math.cos(2 * x), color: "blue", a: 0, b: 2 * PI }], step: { x: 0.5, y: 0.5 } })}`],
    ["2. La notation", S`$\sin^2x=(\sin x)^2$, et non $\sin(x^2)$.`],
    ["3. Les sinusoïdes", S`$(A\sin(kx+c)+d)'=Ak\cos(kx+c)$.`],
  ],
  tips: ["N'oublie jamais la dérivée intérieure.", "sin² x est une puissance de sin x.", "Garde le déphasage à l'intérieur.", "La translation verticale disparaît.", "Garde le signe moins pour le cosinus."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

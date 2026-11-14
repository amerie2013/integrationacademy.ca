// MCV4U-FR Fiche 4.2 — Dérivées des fonctions sinus et cosinus (édition enseignant)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;
const EXAMPLES = [
  { title: "Une somme", q: S`Dérive $y=4\sin x+3\cos x-x^2$.`,
    steps: [S`$4\cos x+3(-\sin x)-2x$.`], ans: S`$y'=4\cos x-3\sin x-2x$` },
  { title: "Une tangente au cosinus", q: S`Trouve la tangente à $y=\cos x$ en $x=\frac\pi6$.`,
    fig: F({ view: { xmin: -0.5, xmax: 3, ymin: -1.2, ymax: 1.5 }, curves: [{ f: Math.cos }, { f: (x) => -0.5 * x + Math.sqrt(3) / 2 + PI / 12, color: "green" }], points: [pt(PI / 6, Math.sqrt(3) / 2)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`Point $\left(\frac\pi6,\frac{\sqrt3}2\right)$; pente $-\sin\frac\pi6=-\frac12$.`, S`$y-\frac{\sqrt3}{2}=-\frac12\left(x-\frac\pi6\right)$.`], ans: S`$y=-\frac12x+\frac{\sqrt3}2+\frac\pi{12}$` },
  { title: "Un produit de fonctions trigonométriques", q: S`Dérive $y=\sin x\cos x$ et simplifie.`,
    steps: [S`$\cos x\cos x+\sin x(-\sin x)=\cos^2x-\sin^2x$.`], ans: S`$y'=\cos^2x-\sin^2x=\cos2x$` },
  { title: "Un quotient", q: S`Dérive $y=\frac{\cos x}{x}$.`,
    steps: [S`$\frac{(-\sin x)x-\cos x\cdot1}{x^2}$.`], ans: S`$y'=-\frac{x\sin x+\cos x}{x^2}$` },
  { title: "La dérivée de cot x", q: S`Utilise $\cot x=\frac{\cos x}{\sin x}$ pour trouver $\frac{d}{dx}\cot x$.`,
    steps: [S`$\frac{(-\sin x)\sin x-\cos x\cos x}{\sin^2x}=\frac{-1}{\sin^2x}$.`], ans: S`$-\csc^2x$` },
  { title: "La dérivée de csc x", q: S`Trouve $\frac{d}{dx}\csc x$.`,
    steps: [S`$\csc x=\frac1{\sin x}$ : $\frac{0-\cos x}{\sin^2x}=-\frac1{\sin x}\cdot\frac{\cos x}{\sin x}$.`], ans: S`$-\csc x\cot x$` },
  { title: "Une puissance multipliée par le cosinus", q: S`Dérive $y=x^3\cos x$.`,
    steps: [S`$3x^2\cos x+x^3(-\sin x)$.`], ans: S`$y'=3x^2\cos x-x^3\sin x$` },
  { title: "Dérivées d'ordre supérieur", q: S`Pour $f(x)=\sin x+\cos x$, trouve $f'''(0)$ et $f^{(4)}(x)$.`,
    steps: [S`$f'=\cos x-\sin x$, $f''=-\sin x-\cos x$, $f'''=-\cos x+\sin x$.`, S`$f'''(0)=-1$; $f^{(4)}=\sin x+\cos x=f$.`], ans: S`$f'''(0)=-1$; $f^{(4)}(x)=f(x)$` },
  { title: "Tangentes horizontales", q: S`Trouve les tangentes horizontales de $y=x-2\cos x$ sur $[0,2\pi]$.`,
    fig: F({ view: { xmin: -0.2, xmax: 6.6, ymin: -2.5, ymax: 7 }, curves: [{ f: (x) => x - 2 * Math.cos(x), a: 0, b: 2 * PI }], points: [pt((7 * PI) / 6, (7 * PI) / 6 + Math.sqrt(3)), pt((11 * PI) / 6, (11 * PI) / 6 - Math.sqrt(3))], step: { x: 0.5, y: 1 } }),
    steps: [S`$y'=1+2\sin x=0\Rightarrow\sin x=-\frac12$ : $x=\frac{7\pi}6,\ \frac{11\pi}6$.`, S`$y=\frac{7\pi}6+\sqrt3\approx5.40$ (max); $\frac{11\pi}6-\sqrt3\approx4.03$ (min).`], ans: S`maximum relatif $\left(\frac{7\pi}6,5.40\right)$, minimum relatif $\left(\frac{11\pi}6,4.03\right)$` },
];

const PROBLEMS = [
  { level: 1, q: S`Dérive $y=7\sin x$.`, recap: "(sin x)′ = cos x.", ans: S`$7\cos x$` },
  { level: 1, q: S`Dérive $y=x+\cos x$.`, recap: "Terme par terme.", ans: S`$1-\sin x$` },
  { level: 1, q: S`Dérive $y=-3\cos x$.`, recap: "Deux signes moins.", ans: S`$3\sin x$` },
  { level: 2, q: S`Pour $y=x\sin x$, trouve $y'\left(\frac\pi2\right)$.`, recap: "sin x + x cos x.", ans: "1" },
  { level: 2, q: S`Pour $f(x)=\tan x$, trouve $f'\left(\frac\pi4\right)$.`, recap: "sec² x.", ans: "2" },
  { level: 2, q: S`Pour $f(x)=x^2\cos x$, trouve $f'(\pi)$.`, recap: "2x cos x − x² sin x.", ans: S`$-2\pi\approx-6.283$` },
  { level: 2, q: S`Trouve la tangente à $y=2\cos x$ en $x=\frac\pi2$ et trace-la.`, recap: "Point (π/2, 0), pente −2.", ans: S`$y=-2x+\pi$`, fig: gridT({ xmin: 0, xmax: 3.5, ymin: -3, ymax: 3 }, { x: 0.5, y: 0.5 }) },
  { level: 2, q: S`Trouve $f''(x)$ pour $f(x)=x\cos x$.`, recap: "Règle du produit deux fois.", ans: S`$-2\sin x-x\cos x$` },
  { level: 3, space: 5, q: S`Trouve le maximum et le minimum de $y=\sqrt3\sin x+\cos x$ sur $[0,2\pi]$.`, recap: "y′ = √3 cos x − sin x = 0.", ans: S`$\tan x=\sqrt3$ : maximum 2 en $\frac\pi3$, minimum $-2$ en $\frac{4\pi}3$` },
  { level: 3, space: 5, q: S`Trouve la dérivée de $\cot x$ en l'écrivant sous la forme $(\tan x)^{-1}$, et vérifie qu'elle concorde avec $-\csc^2x$.`, recap: "Règle de dérivation en chaîne sur un inverse.", ans: S`$-(\tan x)^{-2}\sec^2x=-\frac{\cos^2x}{\sin^2x}\cdot\frac1{\cos^2x}=-\csc^2x$` },
  { level: 3, space: 5, q: S`Trouve la valeur maximale de $f(x)=\frac{\sin x}{2+\cos x}$ sur $[0,2\pi]$ (3 décimales).`, recap: "Numérateur de f′ : 2 cos x + 1.", ans: S`$\cos x=-\frac12$ : maximum en $x=\frac{2\pi}3$, $f=\frac{\sqrt3/2}{3/2}\approx0.577$` },
  { level: 3, space: 5, q: S`Trouve $f^{(50)}\left(\frac\pi2\right)$ pour $f(x)=\sin x$.`, recap: "50 = 4 · 12 + 2.", ans: S`$-\sin\frac\pi2=-1$` },
  { level: 3, space: 5, q: S`Trouve l'équation de la normale à $y=\sin x$ en $x=\frac\pi3$ et esquisse les deux droites.`, recap: "Pente de la normale = −1/m.", ans: S`pente $-2$ : $y=-2x+\frac{2\pi}{3}+\frac{\sqrt3}{2}$`, fig: gridT({ xmin: -0.5, xmax: 3.5, ymin: -1.5, ymax: 3 }, { x: 0.5, y: 0.5 }) },
];

export const WS = {
  code: "4.2",
  title: "Dérivées des fonctions sinus et cosinus",
  bigideas: S`Avec $x$ en radians, $\frac{d}{dx}\sin x=\cos x$ et $\frac{d}{dx}\cos x=-\sin x$. Les dérivées d'ordre supérieur forment un cycle de période 4 : $\sin\to\cos\to-\sin\to-\cos\to\sin$. Combinées aux règles de la somme, du produit et du quotient, elles donnent $(\tan x)'=\sec^2x$, $(\cot x)'=-\csc^2x$, $(\sec x)'=\sec x\tan x$ et $(\csc x)'=-\csc x\cot x$.`,
  goals: ["Dériver sin et cos.", "Utiliser le cycle des dérivées.", "Combiner avec les règles du produit et du quotient.", "Trouver des tangentes et des tangentes horizontales."],
  curriculum: "A2.4, A3.3",
  vocab: [["$(\\sin x)'$", "$\\cos x$"], ["$(\\cos x)'$", "$-\\sin x$"], ["$(\\tan x)'$", "$\\sec^2x$"]],
  hook: S`Trace $y=\cos x$ et $y=\sin x$ ensemble. Où le cosinus décroît-il le plus vite ? Que vaut $\sin x$ à cet endroit ?`,
  concepts: [
    ["1. Deux règles", S`$y=\sin x$ (violet) et sa dérivée $\cos x$ (bleu); $y=\cos x$ décroît là où $-\sin x\lt0$ :
${F({ view: { xmin: -2 * PI, xmax: 2 * PI, ymin: -1.4, ymax: 1.4 }, curves: [{ f: Math.sin }, { f: Math.cos, color: "blue" }], step: { x: 1, y: 0.5 } })}`],
    ["2. Le cycle", S`$\frac{d^n}{dx^n}\sin x$ dépend seulement du reste de $n\div4$.`],
    ["3. Les autres règles s'appliquent", S`Les produits, les quotients et les sommes se traitent comme pour toute autre fonction.`],
  ],
  tips: ["(cos x)′ = −sin x.", "En radians seulement.", "Règle du produit pour x sin x.", "Simplifie avec sin² + cos² = 1.", "Utilise les valeurs exactes aux angles remarquables."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

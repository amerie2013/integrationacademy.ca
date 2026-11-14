// MCV4U-FR Fiche 2.5 — Dérivées de quotients (édition enseignant)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
/** courbe rationnelle découpée à ses asymptotes verticales */
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const V6 = { xmin: -2, xmax: 7, ymin: -6, ymax: 10 };
const V7 = { xmin: -9, xmax: 5, ymin: -16, ymax: 10 };

const EXAMPLES = [
  { title: "Linéaire sur linéaire", q: S`Dérive $y=\frac{3x-2}{x+4}$.`,
    steps: [S`$u'v-uv'=3(x+4)-(3x-2)(1)=14$.`], ans: S`$y'=\frac{14}{(x+4)^2}$` },
  { title: "Quadratique sur linéaire", q: S`Dérive $y=\frac{x^2+1}{x-2}$.`,
    steps: [S`$\frac{2x(x-2)-(x^2+1)}{(x-2)^2}$.`], ans: S`$y'=\frac{x^2-4x-1}{(x-2)^2}$` },
  { title: "Un numérateur constant", q: S`Dérive $y=\frac1{x^2-9}$.`,
    steps: [S`$u'=0$ : $\frac{0-1\cdot2x}{(x^2-9)^2}$.`], ans: S`$y'=-\frac{2x}{(x^2-9)^2}$` },
  { title: "Réécrire plutôt", q: S`Dérive $y=\frac{x-1}{\sqrt x}$ sans la règle du quotient.`,
    steps: [S`$y=x^{1/2}-x^{-1/2}$.`, S`$y'=\frac12x^{-1/2}+\frac12x^{-3/2}$.`], ans: S`$y'=\frac{1}{2\sqrt x}+\frac1{2x\sqrt x}$` },
  { title: "Évaluer une pente", q: S`Pour $f(x)=\frac{2x^2}{x+1}$, trouve $f'(1)$.`,
    steps: [S`$f'=\frac{4x(x+1)-2x^2}{(x+1)^2}$.`, S`$f'(1)=\frac{8-2}{4}$.`], ans: "1.5" },
  { title: "Une tangente", q: S`Trouve la tangente à $y=\frac{x+3}{x-1}$ en $x=3$.`,
    fig: F({ view: V6, curves: [...rat((x) => (x + 3) / (x - 1), [1], V6), { f: (x) => 6 - x, color: "green" }], vlines: [{ x: 1, color: "red", dash: true }], points: [pt(3, 3)], step: { x: 1, y: 2 } }),
    steps: [S`$y(3)=3$; $y'=\frac{(x-1)-(x+3)}{(x-1)^2}=\frac{-4}{(x-1)^2}$, $y'(3)=-1$.`, S`$y-3=-(x-3)$.`], ans: S`$y=-x+6$` },
  { title: "Tangentes horizontales", q: S`Trouve les points où $y=\frac{x^2+5}{x+2}$ a une tangente horizontale.`,
    fig: F({ view: V7, curves: rat((x) => (x * x + 5) / (x + 2), [-2], V7), vlines: [{ x: -2, color: "red", dash: true }], points: [pt(1, 2), pt(-5, -10)], step: { x: 1, y: 2 } }),
    steps: [S`$y'=\frac{2x(x+2)-(x^2+5)}{(x+2)^2}=\frac{x^2+4x-5}{(x+2)^2}$.`, S`$(x+5)(x-1)=0$ : $y(1)=2$, $y(-5)=-10$.`], ans: "(1, 2) et (−5, −10)" },
  { title: "Une pente donnée", q: S`Trouve les points de $y=\frac{x}{x+2}$ où la tangente a une pente de $\frac12$.`,
    steps: [S`$y'=\frac{(x+2)-x}{(x+2)^2}=\frac2{(x+2)^2}=\frac12$.`, S`$(x+2)^2=4\Rightarrow x=0$ ou $x=-4$.`], ans: "(0, 0) et (−4, 2)" },
  { title: "Un modèle de population", q: S`La population d'une ville (en milliers) est $P(t)=\frac{600t+200}{t+2}$ après $t$ années. Trouve $P'(3)$ et explique ce qui se passe à long terme.`,
    fig: F({ view: { xmin: 0, xmax: 30, ymin: 0, ymax: 700 }, curves: [{ f: (t) => (600 * t + 200) / (t + 2), a: 0, b: 30 }, { f: () => 600, color: "gray" }], points: [pt(3, 400)], step: { x: 5, y: 100 } }),
    steps: [S`$P'(t)=\frac{600(t+2)-(600t+200)}{(t+2)^2}=\frac{1000}{(t+2)^2}$; $P'(3)=40$.`, S`$P'\to0$ et $P\to600$.`], ans: "40 milliers par année à t = 3; se stabilise vers 600 milliers" },
];

const PROBLEMS = [
  { level: 1, q: S`Dérive $y=\frac1{x+5}$.`, recap: "Numérateur constant.", ans: S`$-\frac1{(x+5)^2}$` },
  { level: 1, q: S`Dérive $y=\frac{x}{x-4}$.`, recap: "u′v − uv′.", ans: S`$-\frac4{(x-4)^2}$` },
  { level: 1, q: S`Dérive $y=\frac{x+1}{x}$ en réécrivant d'abord.`, recap: "1 + x⁻¹.", ans: S`$-\frac1{x^2}$` },
  { level: 2, q: S`Pour $f(x)=\frac{4x}{x+2}$, trouve $f'(2)$.`, recap: "f′ = 8/(x + 2)².", ans: "0.5" },
  { level: 2, q: S`Dérive $y=\frac{x^2-1}{x+3}$ et simplifie.`, recap: "Développe le numérateur.", ans: S`$\frac{x^2+6x+1}{(x+3)^2}$` },
  { level: 2, q: S`Pour $y=\frac5{x^2+1}$, trouve $y'(2)$.`, recap: "−10x/(x² + 1)².", ans: "−0.8" },
  { level: 2, q: S`$f(2)=4$, $f'(2)=1$, $g(2)=2$, $g'(2)=3$. Trouve $\left(\frac fg\right)'(2)$.`, recap: "(f′g − fg′)/g².", ans: "−2.5" },
  { level: 2, q: S`Trouve la tangente à $y=\frac{2x}{x-1}$ en $x=2$ et trace-la.`, recap: "Point (2, 4).", ans: S`$y=-2x+8$`, fig: gridT({ xmin: -2, xmax: 5, ymin: -2, ymax: 10 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Trouve les points où $y=\frac{x^2+8}{x+1}$ a une tangente horizontale. Esquisse la courbe avec son asymptote.`, recap: "Numérateur de y′ = 0.", ans: S`$(x+4)(x-2)=0$ : $(2,4)$ et $(-4,-8)$`, fig: gridT({ xmin: -8, xmax: 6, ymin: -14, ymax: 10 }, { x: 1, y: 2 }) },
  { level: 3, space: 5, q: S`Montre que $y=\frac{x-1}{x+1}$ n'a aucune tangente horizontale et qu'elle est croissante sur chaque partie de son domaine.`, recap: "Signe de y′.", ans: S`$y'=\frac{2}{(x+1)^2}\gt0$` },
  { level: 3, space: 5, q: S`Trouve $a$ pour que la tangente à $y=\frac{ax+1}{x+2}$ en $x=0$ ait une pente de 1.`, recap: "y′(0) en fonction de a.", ans: S`$\frac{2a-1}{4}=1\Rightarrow a=2.5$` },
  { level: 3, space: 5, q: S`Trouve l'équation de la normale à $y=\frac{x}{x-2}$ en $x=3$.`, recap: "Pente de la normale = −1/m.", ans: S`$m=-2$; normale $y=0.5x+1.5$` },
  { level: 3, space: 5, q: S`Les ventes totales (en milliers) après $t$ mois sont $S(t)=\frac{80t}{t+4}$. Trouve $S'(4)$, et le moment où les ventes augmentent de 1 millier par mois.`, recap: "S′ = 320/(t + 4)².", ans: S`$S'(4)=5$; $(t+4)^2=320\Rightarrow t\approx13.9$ mois` },
];

export const WS = {
  code: "2.5",
  title: "Dérivées de quotients",
  bigideas: S`Pour un quotient $y=\frac uv$, la règle du quotient donne $y'=\frac{u'v-uv'}{v^2}$, valable là où $v\neq0$. Elle découle de l'écriture $\frac uv=uv^{-1}$ et des règles du produit et de dérivation en chaîne. Respecte l'ordre au numérateur et laisse le dénominateur au carré et factorisé. Pour trouver les tangentes horizontales, égale le numérateur de $y'$ à zéro. Quand le dénominateur est une constante ou une seule puissance de $x$, réécrire est plus rapide que la règle.`,
  goals: ["Appliquer la règle du quotient.", "Décider quand réécrire plutôt.", "Trouver les tangentes et les tangentes horizontales de fonctions rationnelles.", "Interpréter les dérivées de modèles rationnels."],
  curriculum: "A3.3, A3.4, A3.5",
  vocab: [["Règle du quotient", "$\\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2}$"], ["Fonction rationnelle", "un polynôme divisé par un polynôme"], ["Tangente horizontale", "$y'=0$"]],
  hook: S`Est-ce que $\left(\frac{x^3}{x}\right)'$ est égal à $\frac{3x^2}{1}$? Simplifie d'abord $\frac{x^3}{x}$ et compare.`,
  concepts: [
    ["1. Le bas fois la dérivée du haut, moins le haut fois la dérivée du bas", S`La courbe $y=\frac{x}{x^2+4}$ et sa dérivée $\frac{4-x^2}{(x^2+4)^2}$; les tangentes sont horizontales en $x=\pm2$ :
${F({ view: { xmin: -6, xmax: 6, ymin: -0.4, ymax: 0.4 }, curves: [{ f: (x) => x / (x * x + 4) }, { f: (x) => (4 - x * x) / (x * x + 4) ** 2, color: "blue" }], points: [pt(2, 0.25), pt(-2, -0.25)], step: { x: 1, y: 0.1 } })}`],
    ["2. Simplifier le numérateur", S`Développe $u'v-uv'$ et regroupe; ne développe jamais $v^2$.`],
    ["3. Réécrire quand c'est simple", S`$\frac{x^2+3}{x}=x+3x^{-1}$ : pas besoin de la règle du quotient.`],
  ],
  tips: ["L'ordre est u′v − uv′.", "Élève tout le dénominateur au carré.", "Garde v² sous forme factorisée.", "Vérifie que les points de tangente horizontale sont dans le domaine.", "Dénominateur constant : divise simplement."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

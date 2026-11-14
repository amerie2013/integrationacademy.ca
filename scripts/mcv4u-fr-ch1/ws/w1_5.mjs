// MCV4U-FR Fiche d'exercices 1.5 — Introduction aux dérivées (édition de l'enseignant)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Une fonction du second degré", q: String.raw`Trouve $f'(x)$ pour $f(x)=4x^2-3x$ à partir de la définition.`,
    steps: [String.raw`$f(x+h)-f(x)=8xh+4h^2-3h$.`, String.raw`$\frac{8xh+4h^2-3h}{h}=8x+4h-3\to8x-3$.`], ans: String.raw`$f'(x)=8x-3$` },
  { title: "Une fonction cubique", q: String.raw`Trouve $f'(x)$ pour $f(x)=x^3+x$.`,
    steps: [String.raw`$\frac{3x^2h+3xh^2+h^3+h}{h}=3x^2+3xh+h^2+1\to3x^2+1$.`], ans: String.raw`$3x^2+1$` },
  { title: "Une fonction inverse", q: String.raw`Trouve $f'(x)$ pour $f(x)=\frac2x$.`,
    steps: [String.raw`$\frac{\frac2{x+h}-\frac2x}{h}=\frac{-2}{x(x+h)}\to-\frac2{x^2}$.`], ans: String.raw`$-\frac2{x^2}$` },
  { title: "Une racine translatée", q: String.raw`Trouve $f'(x)$ pour $f(x)=\sqrt{x+1}$.`,
    steps: [String.raw`Multiplie par le conjugué : $\frac1{\sqrt{x+h+1}+\sqrt{x+1}}\to\frac1{2\sqrt{x+1}}$.`], ans: String.raw`$\frac1{2\sqrt{x+1}}$` },
  { title: "Une fonction du quatrième degré", q: String.raw`Trouve $f'(x)$ pour $f(x)=x^4$.`,
    steps: [String.raw`$(x+h)^4-x^4=4x^3h+6x^2h^2+4xh^3+h^4$.`, String.raw`Divise par $h$ et fais tendre $h$ vers 0.`], ans: String.raw`$4x^3$` },
  { title: "Esquisser f′ à partir de f", q: String.raw`La fonction cubique représentée a des points tournants en $x=-1$ et $x=2$. Esquisse $f'$.`,
    fig: F({ view: { xmin: -3, xmax: 4, ymin: -8, ymax: 8 }, curves: [{ f: (x) => (2 * x ** 3 - 3 * x * x - 12 * x) / 4 }, { f: (x) => (6 * x * x - 6 * x - 12) / 4, color: "blue" }], points: [pt(-1, 0, false, "blue"), pt(2, 0, false, "blue")], step: { x: 1, y: 2 } }),
    steps: [String.raw`$f'$ vaut 0 en $-1$ et en $2$, est positive à l'extérieur et négative entre les deux : une parabole ouverte vers le haut (en bleu).`], ans: "une parabole qui coupe zéro en −1 et en 2" },
  { title: "Faire correspondre le degré", q: String.raw`Si $f$ est une parabole, quel type de graphique $f'$ a-t-elle?`,
    steps: [String.raw`La dérivée d'une fonction du second degré est affine (le degré diminue de 1).`], ans: "une droite" },
  { title: "Non dérivable", q: String.raw`Où $f(x)=|x+2|$ et la fonction en escalier représentée ne sont-elles pas dérivables?`,
    fig: F({ view: { xmin: -5, xmax: 3, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.abs(x + 2) }], points: [pt(-2, 0)], step: { x: 1, y: 1 } }),
    steps: [String.raw`$|x+2|$ : un coin en $x=-2$. Une fonction en escalier : à chaque saut (elle n'y est même pas continue).`], ans: "coin en −2; à chaque saut" },
  { title: "Tangente à partir de la dérivée", q: String.raw`Trouve la tangente à $f(x)=x^2-5x$ en $x=4$.`,
    steps: [String.raw`$f'(x)=2x-5$, $f'(4)=3$; point $(4,-4)$.`, String.raw`$y+4=3(x-4)$.`], ans: String.raw`$y=3x-16$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Trouve $f'(x)$ pour $f(x)=6x$.`, recap: "Affine.", ans: "6" },
  { level: 1, q: String.raw`Pour $f(x)=x^2$, $f'(x)=2x$. Trouve $f'(2)$.`, recap: "Évaluer.", ans: "4" },
  { level: 1, q: String.raw`Que signifie $\frac{dy}{dx}=5$ en $x=1$?`, recap: "Notation.", ans: "la pente de la tangente (le taux de variation de y) en x = 1 est 5" },
  { level: 2, q: String.raw`Trouve $f'(x)$ pour $f(x)=x^2+5x$ à partir de la définition.`, recap: "Second degré.", ans: String.raw`$2x+5$` },
  { level: 2, q: String.raw`Trouve $f'(x)$ pour $f(x)=3-x^2$.`, recap: "Second degré.", ans: String.raw`$-2x$` },
  { level: 2, q: String.raw`Trouve $f'(x)$ pour $f(x)=x^3-2x^2$.`, recap: "Cubique.", ans: String.raw`$3x^2-4x$` },
  { level: 2, q: String.raw`Trouve $f'(x)$ pour $f(x)=\frac1{x+3}$.`, recap: "Inverse.", ans: String.raw`$-\frac1{(x+3)^2}$` },
  { level: 2, q: String.raw`Esquisse le graphique de $f'$ pour la fonction représentée.`, recap: "Graphique de f′.", ans: "f′ est une droite de pente positive qui coupe 0 en x = 1",
    fig: F({ view: { xmin: -2, xmax: 4, ymin: -3, ymax: 6 }, curves: [{ f: (x) => (x - 1) ** 2 - 2 }], step: { x: 1, y: 1 } }) },
  { level: 3, space: 5, q: String.raw`Trouve $f'(x)$ pour $f(x)=\sqrt{2x}$ à partir de la définition.`, recap: "Racine.", ans: String.raw`$\frac{1}{\sqrt{2x}}$` },
  { level: 3, space: 5, q: String.raw`$f(x)=ax^2+bx$ est telle que $f'(1)=5$ et $f'(3)=13$. Trouve $a$ et $b$.`, recap: "Utiliser f′(x) = 2ax + b.", ans: "a = 2, b = 1" },
  { level: 3, space: 5, q: String.raw`Trouve les points où la tangente à $y=x^3-6x^2+9x$ est horizontale.`, recap: "f′ = 0.", ans: "(1, 4) et (3, 0)" },
  { level: 3, space: 5, q: String.raw`Explique pourquoi $f(x)=x^{2/3}$ est continue en 0 mais n'y a pas de dérivée.`, recap: "Point de rebroussement.", ans: String.raw`$\frac{h^{2/3}}{h}=h^{-1/3}\to\pm\infty$ : un point de rebroussement` },
  { level: 3, space: 5, q: String.raw`Trouve la tangente à $y=x^3$ en $x=-1$, ainsi que l'autre point où elle rencontre la courbe. Esquisse les deux.`, recap: "La tangente recoupe la courbe.", ans: String.raw`$y=3x+2$; $x^3-3x-2=(x+1)^2(x-2)$ : $(2,8)$`, fig: gridT({ xmin: -3, xmax: 3, ymin: -6, ymax: 10 }, { x: 1, y: 2 }) },
];

export const WS = {
  code: "1.5",
  title: "Introduction aux dérivées",
  bigideas: String.raw`La dérivée $f'(x)=\lim_{h\to0}\frac{f(x+h)-f(x)}{h}$ donne la pente de la tangente en tout $x$; $\frac{dy}{dx}$ a le même sens. À partir de la définition, développe, réduis au même dénominateur ou rationalise, élimine $h$, puis fais tendre $h$ vers 0. Le graphique de $f'$ est positif là où $f$ monte, négatif là où elle descend, et nul aux tangentes horizontales. Les fonctions ne sont pas dérivables aux coins, aux points de rebroussement, aux tangentes verticales et aux discontinuités.`,
  goals: ["Utiliser la définition par une limite.", "Dériver à partir de la définition.", "Esquisser f′ à partir de f.", "Trouver où f′ n'existe pas."],
  curriculum: "A1.5–A1.8, A2.1",
  vocab: [["Dérivée", "$f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}$"], ["Notation de Leibniz", "$\\frac{dy}{dx}$"], ["Dérivable", "f′ existe"]],
  hook: String.raw`Place les pentes des tangentes à $y=x^2$ en $x=-2,-1,0,1,2$. Quel graphique les points forment-ils?`,
  concepts: [
    ["1. f et f′", String.raw`Les points tournants de $f$ sont les zéros de $f'$.
${F({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 3 * x }, { f: (x) => 3 * x * x - 3, color: "blue" }], step: { x: 1, y: 1 } })}`],
    ["2. Définition de la dérivée", String.raw`Simplifie, élimine $h$, fais tendre $h$ vers 0.`],
    ["3. Dérivabilité", String.raw`Lisse ⇒ dérivable; les coins et les points de rebroussement ne le sont pas.`],
  ],
  tips: ["Remplace chaque x par x + h.", "Garde lim jusqu'à ce que h ait disparu.", "f′(x) est une fonction; f′(a) est un nombre.", "Le degré diminue de un.", "Continue ≠ dérivable."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

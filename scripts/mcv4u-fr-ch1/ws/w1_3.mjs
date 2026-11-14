// MCV4U-FR Fiche d'exercices 1.3 — Limites (édition de l'enseignant)
import { F, gridT, pt, ho } from "./figT.mjs";

const EXAMPLES = [
  { title: "Factoriser et simplifier", q: String.raw`Évalue $\lim_{x\to5}\frac{x^2-25}{x-5}$.`,
    steps: [String.raw`$\frac{(x-5)(x+5)}{x-5}=x+5$ pour $x\ne5$.`], ans: "10" },
  { title: "Limites à gauche et à droite à partir d'un graphique", q: String.raw`$f(x)=3-x$ pour $x\lt1$ et $f(x)=x^2$ pour $x\ge1$. Trouve les limites à gauche et à droite en 1.`,
    fig: F({ view: { xmin: -1, xmax: 3, ymin: -1, ymax: 5 }, curves: [{ f: (x) => 3 - x, a: -1, b: 0.98 }, { f: (x) => x * x, a: 1, b: 2.2 }], points: [ho(1, 2), pt(1, 1)], step: { x: 0.5, y: 1 } }),
    steps: [String.raw`À gauche : $3-1=2$. À droite : $1^2=1$.`], ans: "2 et 1 : la limite n'existe pas" },
  { title: "Limites infinies avec signe", q: String.raw`Décris $\frac1{x-2}$ quand $x\to2^-$ et quand $x\to2^+$.`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -6, ymax: 6 }, curves: [{ f: (x) => 1 / (x - 2), a: -1, b: 1.84 }, { f: (x) => 1 / (x - 2), a: 2.16, b: 5 }], step: { x: 1, y: 1 } }),
    steps: [String.raw`À gauche : de très petits dénominateurs négatifs → $-\infty$. À droite : $+\infty$.`], ans: String.raw`$-\infty$ et $+\infty$ : asymptote verticale $x=2$` },
  { title: "Une limite à l'infini", q: String.raw`Évalue $\lim_{x\to\infty}\frac{3x-4}{x+2}$.`,
    fig: F({ view: { xmin: -8, xmax: 20, ymin: -6, ymax: 10 }, curves: [{ f: (x) => (3 * x - 4) / (x + 2), a: -8, b: -2.9 }, { f: (x) => (3 * x - 4) / (x + 2), a: -1.2, b: 20 }, { f: () => 3, color: "red" }], step: { x: 2, y: 2 } }),
    steps: [String.raw`Divise par $x$ : $\frac{3-\frac4x}{1+\frac2x}\to3$.`], ans: "3" },
  { title: "Vers moins l'infini", q: String.raw`Évalue $\lim_{x\to-\infty}\frac2{x^2+1}$.`,
    steps: [String.raw`Le dénominateur croît sans borne.`], ans: "0" },
  { title: "Une limite à partir d'une table", q: String.raw`Estime $\lim_{x\to0}\frac{2^x-1}{x}$.`,
    steps: [String.raw`$x=0.01$ : $0.6956$; $x=-0.01$ : $0.6908$; $x=\pm0.001$ : $0.6934$, $0.6929$.`], ans: "≈ 0.693" },
  { title: "Factoriser un trinôme", q: String.raw`Évalue $\lim_{x\to1}\frac{x^2+x-2}{x-1}$.`,
    steps: [String.raw`$\frac{(x+2)(x-1)}{x-1}=x+2\to3$.`], ans: "3" },
  { title: "Rationaliser", q: String.raw`Évalue $\lim_{x\to0}\frac{\sqrt{1+x}-1}{x}$.`,
    steps: [String.raw`Multiplie par $\frac{\sqrt{1+x}+1}{\sqrt{1+x}+1}$ : $\frac1{\sqrt{1+x}+1}\to\frac12$.`], ans: String.raw`$\frac12$` },
  { title: "Limites de suites", q: String.raw`Trouve les limites de $t_n=\frac{n}{n+1}$ et de $u_n=\left(1+\frac2n\right)^n$.`,
    steps: [String.raw`$\frac{n}{n+1}=\frac1{1+\frac1n}\to1$.`, String.raw`$u_{10}\approx6.19$, $u_{1000}\approx7.374$, $u_{10^5}\approx7.389$.`], ans: String.raw`1; $e^2\approx7.389$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Évalue $\lim_{x\to3}(2x^2-1)$.`, recap: "Substituer.", ans: "17" },
  { level: 1, q: String.raw`Évalue $\lim_{x\to-2}\frac{x^2-4}{x+2}$.`, recap: "Factoriser.", ans: "−4" },
  { level: 1, q: String.raw`Utilise le graphique pour donner $\lim_{x\to2^-}f(x)$, $\lim_{x\to2^+}f(x)$, et indiquer si $\lim_{x\to2}f(x)$ existe.`, recap: "Lire un graphique.", ans: "3, 1; non",
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => 0.5 * x + 2, a: -1, b: 1.97 }, { f: (x) => x - 1, a: 2, b: 5 }], points: [ho(2, 3), pt(2, 1, false)], step: { x: 1, y: 1 } }) },
  { level: 2, q: String.raw`Évalue $\lim_{x\to4}\frac{x^2-3x-4}{x-4}$.`, recap: "Factoriser.", ans: "5" },
  { level: 2, q: String.raw`Évalue $\lim_{x\to\infty}\frac{5x+2}{2x-1}$.`, recap: "À l'infini.", ans: "2.5" },
  { level: 2, q: String.raw`Décris $\lim_{x\to0^+}\frac1x$ et $\lim_{x\to0^-}\frac1x$.`, recap: "Limites infinies d'un côté.", ans: String.raw`$+\infty$; $-\infty$` },
  { level: 2, q: String.raw`Évalue $\lim_{x\to1}\frac{x^3-1}{x^2-1}$.`, recap: "Factoriser les deux.", ans: String.raw`$\frac{x^2+x+1}{x+1}\to\frac32$` },
  { level: 2, q: String.raw`Utilise une table de valeurs pour estimer $\lim_{x\to0}\frac{3^x-1}{x}$.`, recap: "Limite numérique.", ans: "≈ 1.099" },
  { level: 3, space: 5, q: String.raw`Évalue $\lim_{x\to0}\frac{\sqrt{x+9}-3}{x}$.`, recap: "Rationaliser.", ans: String.raw`$\frac16$` },
  { level: 3, space: 5, q: String.raw`Évalue $\lim_{x\to2}\frac{\frac1x-\frac12}{x-2}$.`, recap: "Fraction complexe.", ans: String.raw`$\frac{2-x}{2x(x-2)}=-\frac1{2x}\to-\frac14$` },
  { level: 3, space: 5, q: String.raw`Commence avec $t_1=2$ et $t_{n+1}=\frac12\left(t_n+\frac2{t_n}\right)$. Calcule quatre termes et estime la limite. De quel nombre s'agit-il?`, recap: "Limite d'une suite.", ans: String.raw`2, 1.5, 1.41667, 1.41422 → $\sqrt2$` },
  { level: 3, space: 5, q: String.raw`Trouve $k$ pour que $\lim_{x\to2}\frac{x^2+kx-10}{x-2}$ existe, puis évalue la limite.`, recap: "Provoquer 0/0.", ans: String.raw`$4+2k-10=0$ : $k=3$; $(x+5)\to7$` },
  { level: 3, space: 5, q: String.raw`Esquisse une fonction telle que $\lim_{x\to1^-}f(x)=2$, $\lim_{x\to1^+}f(x)=-1$, $f(1)=0$ et $\lim_{x\to\infty}f(x)=3$.`, recap: "Construire à partir de limites.", ans: "un saut en x = 1 avec un point plein en (1, 0), qui se stabilise à y = 3", fig: gridT({ xmin: -3, xmax: 8, ymin: -3, ymax: 5 }, { x: 1, y: 1 }) },
];

export const WS = {
  code: "1.3",
  title: "Limites",
  bigideas: String.raw`$\lim_{x\to a}f(x)=L$ signifie que $f(x)$ s'approche de $L$ quand $x$ s'approche de $a$ des deux côtés; la valeur $f(a)$ ne compte pas. La limite existe seulement si les limites à gauche et à droite concordent. Une forme $\frac00$ demande de factoriser ou de rationaliser. Les limites infinies décrivent les asymptotes verticales; les limites à l'infini décrivent les asymptotes horizontales. Les suites peuvent aussi avoir des limites, comme $\left(1+\frac1n\right)^n\to e$.`,
  goals: ["Estimer des limites à partir de tables et de graphiques.", "Trouver des limites à gauche et à droite.", "Évaluer algébriquement des limites de la forme 0/0.", "Trouver des limites à l'infini et des limites de suites."],
  curriculum: "A1.4",
  vocab: [["Limite à gauche ou à droite", "$x\\to a^-$ ou $x\\to a^+$"], ["Forme indéterminée", "$\\frac00$ : il faut simplifier"], ["Limite à l'infini", "valeur à long terme"]],
  hook: String.raw`Que se passe-t-il avec $\frac{x^2-1}{x-1}$ en $x=1$? Que se passe-t-il près de $x=1$?`,
  concepts: [
    ["1. Près de a, pas en a", String.raw`Un trou n'empêche pas la limite d'exister.
${F({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x + 2, a: -1, b: 0.96 }, { f: (x) => x + 2, a: 1.04, b: 4 }], points: [ho(1, 3)], step: { x: 1, y: 1 } })}`],
    ["2. Les deux côtés", String.raw`La limite existe ⇔ gauche = droite.`],
    ["3. L'infini", String.raw`$\pm\infty$ décrit une croissance sans borne — la limite n'existe pas.`],
  ],
  tips: ["0/0 veut dire qu'il faut simplifier.", "Vérifie les deux côtés.", "∞ n'est pas un nombre.", "À l'infini, divise par la plus grande puissance.", "Les tables ont besoin de valeurs des deux côtés."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

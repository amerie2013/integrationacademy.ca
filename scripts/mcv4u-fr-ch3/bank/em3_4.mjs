// 3.4 Fonctions rationnelles simples — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc, graph, P, H } from "./fig.mjs";

const S = String.raw;
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const V1 = { xmin: -7, xmax: 4, ymin: -5, ymax: 5 };
const V2 = { xmin: -5, xmax: 6, ymin: -5, ymax: 6 };
const V3 = { xmin: -8, xmax: 5, ymin: -6, ymax: 8 };

export const E = [
  num(S`Trouve l'asymptote verticale de $f(x)=\frac{1}{x-6}$ : $x=\,?$`, 6, "Le dénominateur s'annule."),
  num(S`Trouve l'asymptote horizontale de $f(x)=\frac{3x+2}{x-1}$ : $y=\,?$`, 3, "Rapport des coefficients dominants."),
  num(S`Trouve l'asymptote horizontale de $f(x)=\frac{5}{x^2+1}$ : $y=\,?$`, 0, "Le degré du numérateur est plus petit."),
  mc(S`Trouve les asymptotes verticales de $f(x)=\frac{x+2}{x^2-9}$.`, S`$x=\pm3$`, [S`$x=-2$`, S`$x=9$`, S`$x=3$ seulement`], "x² − 9 = 0."),
  tf("Un graphique peut traverser son asymptote horizontale.", true, "L'asymptote décrit seulement le comportement aux extrémités."),
  tf("Un graphique peut traverser son asymptote verticale.", false, "f n'y est pas définie."),
  num(S`Trouve l'abscisse à l'origine de $f(x)=\frac{x-4}{x+1}$.`, 4, "Le numérateur s'annule."),
  num(S`Trouve l'ordonnée à l'origine de $f(x)=\frac{2x+6}{x-3}$.`, -2, "f(0) = 6/(−3)."),
  fill("Lorsque le degré du numérateur dépasse de un celui du dénominateur, le graphique a une asymptote ___.", ["oblique", "oblique (inclinée)"], "On la trouve par division."),
  mc(S`En $x=1$, $f(x)=\frac{x^2-1}{x-1}$ a :`, "un trou", ["une asymptote verticale", "une abscisse à l'origine", "une asymptote horizontale"], "Le facteur x − 1 se simplifie."),
  num(S`Combien d'asymptotes verticales $f(x)=\frac{1}{x^2+4}$ a-t-elle?`, 0, "x² + 4 n'est jamais nul."),
  num("Voici le graphique de y = 1/(x + 2). Son asymptote verticale est x = a. Trouve a.", -2, "Le dénominateur s'annule en −2.", planeDoc({ view: V1, curves: rat((x) => 1 / (x + 2), [-2], V1), vlines: [{ x: -2, color: "red", dash: true }], step: { x: 1, y: 1 } })),
  mc(S`Lorsque $x\to3^+$, $f(x)=\frac{1}{x-3}$ :`, S`$\to+\infty$`, [S`$\to-\infty$`, S`$\to0$`, S`$\to3$`], "Petit dénominateur positif."),
  num(S`Trouve l'asymptote horizontale de $f(x)=\frac{4x^2}{2x^2+1}$ : $y=\,?$`, 2, "4 ÷ 2."),
  tf(S`$f(x)=\frac{x+4}{x-3}$ est décroissante sur chaque branche.`, true, "f′ = −7/(x − 3)²."),
  num(S`Trouve l'asymptote horizontale de $f(x)=\frac{x}{x-5}$ : $y=\,?$`, 1, "Degrés égaux."),
  mc(S`Près de $x=-1$, $f(x)=\frac{2}{(x+1)^2}$ :`, S`$\to+\infty$ des deux côtés`, [S`$\to-\infty$ des deux côtés`, S`$+\infty$ à gauche, $-\infty$ à droite`, S`$\to2$`], "Un carré est positif."),
  num("Voici le graphique de y = (x + 1)/(x − 1). Son asymptote horizontale est y = b. Trouve b.", 1, "Degrés égaux : 1/1.", planeDoc({ view: V2, curves: rat((x) => (x + 1) / (x - 1), [1], V2), vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], step: { x: 1, y: 1 } })),
  num(S`L'asymptote oblique de $f(x)=\frac{x^2+5}{x}$ est $y=mx+b$. Trouve $m$.`, 1, "x + 5/x."),
  mc("Quelle fonction est paire (symétrique par rapport à l'axe des y)?", S`$\frac{1}{x^2-1}$`, [S`$\frac{x}{x^2-1}$`, S`$\frac{1}{x-1}$`, S`$\frac{x+1}{x}$`], "f(−x) = f(x)."),
];

export const M = [
  mc(S`Lorsque $x\to2^-$, $f(x)=\frac{x+3}{x-2}$ :`, S`$\to-\infty$`, [S`$\to+\infty$`, S`$\to1$`, S`$\to0$`], "Numérateur ≈ 5, dénominateur → 0⁻."),
  num(S`Trouve la valeur maximale de $f(x)=\frac{1}{x^2-2x+5}$.`, 0.25, "Le dénominateur est le plus petit en x = 1 : 4.", null, 0.0001),
  num(S`L'asymptote oblique de $f(x)=\frac{2x^2+x}{x-1}$ est $y=2x+b$. Trouve $b$.`, 3, "Division : 2x + 3 + 3/(x − 1)."),
  num(S`Pour $f(x)=\frac{2x-1}{x+3}$, trouve $f'(-2)$.`, 7, "f′ = 7/(x + 3)²."),
  mc(S`Où se trouve le trou dans le graphique de $f(x)=\frac{x^2-3x}{x-3}$?`, S`$(3,3)$`, [S`$(3,0)$`, S`$(0,0)$`, S`il n'y en a pas`], "f = x pour x ≠ 3."),
  num(S`Combien d'asymptotes verticales $f(x)=\frac{x-2}{x^2-4}$ a-t-elle?`, 1, "x − 2 se simplifie : seulement x = −2."),
  num(S`Trouve la valeur maximale de $f(x)=\frac{4}{x^2+2}$.`, 2, "En x = 0."),
  num("Voici le graphique de f(x) = 3x/(x² + 9). Quelle est sa valeur maximale?", 0.5, "Numérateur de f′ : 3(9 − x²) : maximum en x = 3.", graph((x) => (3 * x) / (x * x + 9), { xmin: -10, xmax: 10, ymin: -0.7, ymax: 0.7 }, [P(3, 0.5), P(-3, -0.5)], { step: { x: 2, y: 0.1 } }), 0.0001),
  tf(S`$f(x)=\frac1{x^2+1}$ n'a aucune asymptote verticale.`, true, "Le dénominateur n'est jamais nul."),
  num(S`Trouve l'asymptote verticale de $f(x)=\frac{x^2-4x}{x-2}$ : $x=\,?$`, 2, "x(x − 4) ne simplifie pas x − 2."),
  num(S`$f(x)=\frac{ax+3}{2x-1}$ a l'asymptote horizontale $y=4$. Trouve $a$.`, 8, "a/2 = 4."),
  mc(S`Où $f(x)=\frac{x^2+1}{x^2-4}$ est-elle croissante?`, S`pour $x\lt0$, $x\ne-2$`, [S`pour $x\gt0$, $x\ne2$`, "partout", "nulle part"], "f = 1 + 5/(x² − 4), f′ = −10x/(x² − 4)²."),
  num(S`Pour quelle valeur positive de $x$ la fonction $f(x)=\frac{1}{x^2+27}$ a-t-elle un point d'inflexion?`, 3, "f″ ∝ 6x² − 54."),
  num(S`Trouve la valeur du minimum relatif de $f(x)=\frac{x^2+8}{x+1}$.`, 4, "Numérateur de f′ : x² + 2x − 8 : minimum en x = 2, f = 12/3."),
  num("Voici le graphique de y = (x − 1)/(x + 2). Trouve son ordonnée à l'origine.", -0.5, "f(0) = −1/2.", planeDoc({ view: V3, curves: rat((x) => (x - 1) / (x + 2), [-2], V3), vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [P(0, -0.5), P(1, 0)], step: { x: 1, y: 1 } }), 0.0001),
  tf("Si le degré du numérateur est inférieur à celui du dénominateur, l'asymptote horizontale est y = 0.", true, "La fraction devient très petite lorsque |x| est grand."),
  num(S`L'asymptote oblique de $f(x)=\frac{x^2+3x}{x+1}$ est $y=x+b$. Trouve $b$.`, 2, "x + 2 − 2/(x + 1)."),
  num(S`Combien d'asymptotes verticales $f(x)=\frac1{x-1}+\frac1{x+1}$ a-t-elle?`, 2, "x = ±1."),
  num(S`Pour $f(x)=\frac{x-2}{x+2}$, trouve $f'(0)$.`, 1, "f′ = 4/(x + 2)²."),
  mc(S`À quoi ressemble le graphique de $f(x)=\frac{x^2-9}{x+3}$?`, S`la droite $y=x-3$ avec un trou en $(-3,-6)$`, [S`deux branches avec une asymptote $x=-3$`, S`la droite $y=x+3$`, S`une parabole`], "Factorise et simplifie."),
];

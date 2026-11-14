// 3.4 Fonctions rationnelles simples — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { planeDoc, graph, P } from "./fig.mjs";

const S = String.raw;
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const VA = { xmin: -6, xmax: 6, ymin: -3, ymax: 4 };
const VB = { xmin: -5, xmax: 5, ymin: -6, ymax: 7 };
const VC = { xmin: -6, xmax: 8, ymin: -10, ymax: 12 };
export const TOPIC = "3.4 Fonctions rationnelles simples";
export const Q = [
  num("Voici le graphique de f(x) = (x² − 1)/(x² − 9). Trouve la valeur de son maximum relatif (4 décimales).", 0.1111, "f = 1 + 8/(x² − 9); f′ = −16x/(x² − 9)² : maximum en 0, f = 1/9.", planeDoc({ view: VA, curves: rat((x) => (x * x - 1) / (x * x - 9), [-3, 3], VA), vlines: [{ x: -3, color: "red", dash: true }, { x: 3, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [P(0, 1 / 9)], step: { x: 1, y: 1 } }), 0.0005),
  num(S`Trouve la valeur du minimum relatif de $f(x)=\frac{x^2+x+1}{x}$.`, 3, "f = x + 1 + 1/x : minimum en x = 1."),
  num(S`Trouve la valeur du minimum relatif de $f(x)=\frac{x}{(x-1)^2}$.`, -0.25, "f′ = −(x + 1)/(x − 1)³ : minimum en x = −1.", null, 0.0001),
  num(S`Pour quelle valeur positive de $x$ la fonction $f(x)=\frac{1}{x^2+48}$ a-t-elle un point d'inflexion?`, 4, "f″ ∝ 3x² − 48."),
  num(S`Trouve la valeur du maximum relatif de $f(x)=\frac{(x-1)^2}{x^2+1}$.`, 2, "f′ = 2(x − 1)(x + 1)/(x² + 1)² : maximum en x = −1, f = 4/2."),
  num("Voici le graphique de f(x) = (x² + 4)/(x² − 4). Trouve la valeur de son maximum relatif.", -1, "f = 1 + 8/(x² − 4) : maximum en x = 0.", planeDoc({ view: VB, curves: rat((x) => (x * x + 4) / (x * x - 4), [-2, 2], VB), vlines: [{ x: -2, color: "red", dash: true }, { x: 2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [P(0, -1)], step: { x: 1, y: 1 } })),
  num(S`$f(x)=\frac{ax+b}{x+c}$ a l'asymptote verticale $x=-3$, l'asymptote horizontale $y=2$ et passe par $(0,1)$. Trouve $b$.`, 3, "c = 3, a = 2, b/3 = 1."),
  tf(S`Si une fonction rationnelle $f$ a une asymptote verticale en $x=a$ (provenant d'un facteur qui ne se simplifie pas), $f'$ en a une aussi.`, true, "La dérivation conserve le facteur au dénominateur, élevé au carré."),
  num(S`Trouve la valeur du minimum relatif de $f(x)=\frac{x^2-5x+6}{x-1}$ (4 décimales).`, -1.1716, "f = x − 4 + 2/(x − 1); minimum en x = 1 + √2 : −3 + 2√2.", null, 0.0005),
  num(S`Combien d'asymptotes (verticales et obliques) $f(x)=\frac{x^3}{x^2-1}$ a-t-elle?`, 3, "x = ±1 et y = x."),
  num("Une concentration est C(t) = 12t/(t² + 4) mg/L (graphique ci-contre). Quelle est la concentration la plus élevée?", 3, "Numérateur de C′ : 12(4 − t²) : maximum en t = 2, C = 24/8.", graph((t) => (12 * t) / (t * t + 4), { xmin: 0, xmax: 12, ymin: 0, ymax: 3.5 }, [P(2, 3)], { a: 0, b: 12, step: { x: 1, y: 0.5 } })),
  mc(S`Décris le graphique de $f(x)=\frac{x^2+2x}{x+2}$.`, S`la droite $y=x$ avec un trou en $(-2,-2)$`, [S`une asymptote verticale en $x=-2$`, S`la droite $y=x+2$`, S`un trou en $(0,0)$`], "x(x + 2)/(x + 2)."),
  num(S`Trouve la valeur du maximum relatif de $f(x)=x+\frac{4}{x-2}$.`, -2, "f′ = 1 − 4/(x − 2)² : maximum en x = 0."),
  num(S`Combien d'asymptotes verticales $f(x)=\frac{x^2}{x^2+3x+2}$ a-t-elle?`, 2, "(x + 1)(x + 2), aucune simplification."),
  tf("Une fonction rationnelle peut avoir deux asymptotes horizontales différentes.", false, "Les deux extrémités se comportent comme le même rapport des termes dominants."),
  num("Voici le graphique de f(x) = (x² − x − 6)/(x − 1). Trouve son ordonnée à l'origine.", 6, "f(0) = −6/(−1).", planeDoc({ view: VC, curves: rat((x) => (x * x - x - 6) / (x - 1), [1], VC), vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 1, b: 0, color: "red", dash: true }], points: [P(0, 6), P(3, 0), P(-2, 0)], step: { x: 1, y: 2 } })),
  num(S`Trouve la valeur du maximum relatif de $f(x)=\frac{x-3}{x^2+7}$ (4 décimales).`, 0.0714, "Numérateur de f′ : −(x − 7)(x + 1) : maximum en 7, f = 4/56.", null, 0.0005),
  num(S`Le coût moyen est $A(x)=\frac{900+4x}{x}$ dollars par article. De quelle valeur s'approche-t-il lorsque $x$ est grand?`, 4, "A = 4 + 900/x."),
  num(S`Pour $f(x)=\frac{4x-3}{2x+1}$, trouve $f'(0)$.`, 10, "f′ = (4 · 1 − (−3) · 2)/(2x + 1)² = 10/(2x + 1)²."),
  mc(S`Lorsque $|x|$ est grand, $f(x)=\frac{x^2+1}{x-1}$ se comporte comme :`, S`$y=x+1$`, [S`$y=x$`, S`$y=1$`, S`$y=x-1$`], "x + 1 + 2/(x − 1)."),
];

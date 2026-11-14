// 2.5 Dérivées de quotients — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

const S = String.raw;
/** courbe rationnelle découpée à ses asymptotes verticales */
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const VA = { xmin: -7, xmax: 5, ymin: -16, ymax: 10 };
const VB = { xmin: -3, xmax: 3, ymin: -6, ymax: 5 };
const VC = { xmin: -6, xmax: 8, ymin: -2, ymax: 3 };
const VD = { xmin: -1, xmax: 6, ymin: -1, ymax: 4 };

export const TOPIC = "2.5 Dérivées de quotients";
export const Q = [
  num("Le graphique de y = (x² + 3)/(x + 1) est illustré. Trouve l'ordonnée de sa tangente horizontale pour laquelle x > 0.", 2, "Numérateur de y′ : x² + 2x − 3 = (x + 3)(x − 1); y(1) = 2.", planeDoc({ view: VA, curves: rat((x) => (x * x + 3) / (x + 1), [-1], VA), vlines: [{ x: -1, color: "red", dash: true }], points: [P(1, 2), P(-3, -6)], step: { x: 1, y: 2 } })),
  num(S`Trouve l'ordonnée à l'origine de la normale à $y=\frac{x}{x+3}$ en $x=1$ (4 décimales).`, 5.5833, "Pente de la tangente 3/16, normale −16/3 passant par (1, ¼) : y = −(16/3)x + 16/3 + ¼.", null, 0.0005),
  num(S`Trouve $a$ pour que la tangente à $y=\frac{ax}{x+1}$ en $x=1$ ait une pente de 2.`, 8, "y′ = a/(x + 1)² : a/4 = 2."),
  num("Le coût moyen est A(x) = (x² + 64)/x (graphique illustré). Trouve le coût moyen minimal.", 16, "A = x + 64/x; A′ = 1 − 64/x² = 0 en x = 8; A(8) = 16.", graph((x) => (x * x + 64) / x, { xmin: 0, xmax: 25, ymin: 0, ymax: 40 }, [P(8, 16)], { a: 2, b: 25, step: { x: 5, y: 5 } })),
  num("Une concentration est C(t) = 8t/(t² + 4) mg/L (graphique illustré). Trouve la concentration maximale.", 2, "Numérateur de C′ : 8(4 − t²) = 0 à t = 2; C(2) = 16/8.", graph((t) => (8 * t) / (t * t + 4), { xmin: 0, xmax: 10, ymin: 0, ymax: 2.5 }, [P(2, 2)], { a: 0, b: 10, step: { x: 1, y: 0.5 } })),
  num(S`$f(x)=x^2$, $g(2)=4$ et $g'(2)=-1$. Trouve $\left(\frac fg\right)'(2)$.`, 1.25, "(4 · 4 − 4 · (−1))/16 = 20/16.", null, 0.0001),
  tf(S`$y=\frac{3x+2}{x-1}$ a une tangente horizontale quelque part.`, false, "y′ = −5/(x − 1)² n'est jamais nulle."),
  num("La tangente à y = (2x − 1)/(x + 1) en x = 0 est tracée. Où coupe-t-elle l'axe des x? (4 décimales)", 0.3333, "y(0) = −1, y′ = 3/(x + 1)² = 3 : y = 3x − 1.", planeDoc({ view: VB, curves: [...rat((x) => (2 * x - 1) / (x + 1), [-1], VB), { f: (x) => 3 * x - 1, color: "green" }], vlines: [{ x: -1, color: "red", dash: true }], points: [P(0, -1)], step: { x: 1, y: 1 } }), 0.0005),
  mc("On peut établir la règle du quotient en écrivant u/v sous la forme :", S`$u\cdot v^{-1}$ et en utilisant les règles du produit et de dérivation en chaîne`, [S`$u-v$ et en utilisant la règle de la somme`, S`$u^{-1}v$ et en utilisant seulement la règle de la puissance`, S`$\frac{u'}{v'}$`], "(uv⁻¹)′ = u′v⁻¹ − uv⁻²v′."),
  num(S`Pour $y=\frac{x^2-1}{x^2+1}$, trouve $y'(1)$.`, 1, "y′ = 4x/(x² + 1)²; en 1 : 4/4."),
  num(S`Une population est $P(t)=\frac{300t+100}{t+1}$. Trouve $P'(1)$.`, 50, "P′ = 200/(t + 1)²."),
  num("Le graphique de y = x/(x − 2)² est illustré. Pour quelle valeur de x sa tangente est-elle horizontale?", -2, "y′ = −(x + 2)/(x − 2)³.", planeDoc({ view: VC, curves: rat((x) => x / (x - 2) ** 2, [2], VC), vlines: [{ x: 2, color: "red", dash: true }], points: [P(-2, -0.125)], step: { x: 1, y: 0.5 } })),
  num(S`Un rendement est $E(v)=\frac{10v}{v^2+25}$. Pour quelle valeur positive de $v$ est-il le plus grand?`, 5, "Numérateur 10(25 − v²) = 0."),
  num("La tangente à y = 1/x en x = a (a > 0) passe par (0, 1). Trouve a.", 2, "Tangente : y = −x/a² + 2/a; son ordonnée à l'origine 2/a = 1.", planeDoc({ view: VD, curves: [...rat((x) => 1 / x, [0], VD), { f: (x) => 1 - x / 4, color: "green" }], points: [P(2, 0.5), P(0, 1)], step: { x: 1, y: 1 } })),
  num(S`Combien de tangentes horizontales $y=\frac{x^2-x+1}{x-1}$ a-t-elle?`, 2, "Numérateur de y′ : x² − 2x = 0."),
  num(S`Pour $y=\frac1{x+1}$, trouve $y''(0)$.`, 2, "y′ = −(x + 1)⁻², y″ = 2(x + 1)⁻³."),
  num(S`Pour quelle valeur de $x$ la fonction $y=\frac{\sqrt x}{x+4}$ est-elle la plus grande?`, 4, "Numérateur de y′ : (x + 4)/(2√x) − √x = (4 − x)/(2√x)."),
  tf(S`$\left(\frac1g\right)'=-\frac{g'}{g^2}$ partout où $g\ne0$.`, true, "Règle du quotient avec u = 1."),
  num(S`Le coût moyen est $A(x)=\frac{1000+2x^2}{x}$. Pour quelle valeur de $x$ est-il le plus bas? (2 décimales)`, 22.36, "2x² = 1000.", null, 0.01),
  num("Le graphique de y = (x + 1)/(x² + 3) est illustré. Trouve l'ordonnée de son point le plus haut.", 0.5, "Numérateur de y′ : −x² − 2x + 3 = −(x + 3)(x − 1); y(1) = 2/4.", graph((x) => (x + 1) / (x * x + 3), { xmin: -6, xmax: 6, ymin: -0.4, ymax: 0.7 }, [P(1, 0.5), P(-3, -1 / 6)], { step: { x: 1, y: 0.1 } }), 0.0001),
];

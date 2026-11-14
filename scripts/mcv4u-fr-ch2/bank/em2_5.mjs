// 2.5 Dérivées de quotients — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

const S = String.raw;
/** courbe rationnelle découpée à ses asymptotes verticales */
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const V1 = { xmin: -4, xmax: 4, ymin: -4, ymax: 4 };
const V2 = { xmin: -1, xmax: 5, ymin: -4, ymax: 12 };

export const E = [
  mc(S`Laquelle est la règle du quotient?`, S`$\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}$`, [S`$\left(\frac uv\right)'=\frac{uv'-u'v}{v^2}$`, S`$\left(\frac uv\right)'=\frac{u'}{v'}$`, S`$\left(\frac uv\right)'=\frac{u'v+uv'}{v^2}$`], "Le bas fois la dérivée du haut, moins le haut fois la dérivée du bas, sur le bas au carré."),
  tf(S`$\left(\frac uv\right)'=\frac{u'}{v'}$.`, false, "Essaie u = x², v = x : (x)′ = 1, mais 2x/1 = 2x."),
  mx(S`Dérive $y=\frac1x$.`, "-1/x^2", "x⁻¹ → −x⁻²."),
  mx(S`Dérive $y=\frac1{x+3}$.`, "-1/(x+3)^2", "u′ = 0, donc −v′/v²."),
  num(S`Pour $y=\frac{x}{x+4}$, trouve $y'(0)$.`, 0.25, "4/(x + 4)² en 0.", null, 0.0001),
  num(S`Pour $y=\frac1{x-1}$, trouve $y'(2)$.`, -1, "−1/(x − 1)²."),
  mc(S`Où $\frac{x+1}{x-4}$ n'est-elle pas définie?`, S`$x=4$`, [S`$x=-1$`, S`$x=0$`, S`$x=1$`], "Le dénominateur s'annule."),
  num(S`Pour $y=\frac{x+2}{x}$, trouve $y'(1)$.`, -2, "1 + 2x⁻¹ → −2x⁻²."),
  fill("Truc mnémotechnique de la règle du quotient : le bas fois la dérivée du haut, moins le haut fois la dérivée du bas, sur le bas au ___.", ["carré", "squared"], "Le dénominateur est v²."),
  num(S`Pour $y=\frac2{x+1}$, trouve $y'(1)$.`, -0.5, "−2/(x + 1)² en 1.", null, 0.0001),
  mx(S`Dérive $y=\frac{x}{x+5}$.`, "5/(x+5)^2", "(x + 5) − x sur (x + 5)²."),
  num(S`Pour $f(x)=\frac4{x^2}$, trouve $f'(1)$.`, -8, "4x⁻² → −8x⁻³."),
  tf(S`Le dénominateur $v^2$ de la règle du quotient n'est jamais négatif.`, true, "C'est un carré."),
  num(S`Pour $y=\frac{x-2}{x+2}$, trouve $y'(0)$.`, 1, "4/(x + 2)² en 0."),
  num("Le graphique de y = 1/x est illustré. Trouve la pente de la tangente en x = 2.", -0.25, "−1/x² en 2.", planeDoc({ view: V1, curves: [...rat((x) => 1 / x, [0], V1), { f: (x) => 1 - 0.25 * x, color: "green" }], points: [P(2, 0.5)], step: { x: 1, y: 1 } }), 0.0001),
  num(S`En un point, $u=3$, $u'=2$, $v=1$, $v'=4$. Trouve $\left(\frac uv\right)'$ en ce point.`, -10, "(2 · 1 − 3 · 4)/1²."),
  num(S`Pour $y=\frac{x^2}{x+3}$, trouve $y'(0)$.`, 0, "(2x(x + 3) − x²)/(x + 3)² en 0."),
  num(S`Pour $y=\frac{2x}{x+1}$, trouve $y'(1)$.`, 0.5, "2/(x + 1)² en 1.", null, 0.0001),
  mx(S`Dérive $y=\frac{x+4}{x-1}$.`, "-5/(x-1)^2", "(x − 1) − (x + 4) = −5."),
  num("Le graphique de y = (x + 1)/(x + 2) est illustré. Trouve la pente de la tangente en x = 0.", 0.25, "1/(x + 2)² en 0.", planeDoc({ view: V1, curves: [...rat((x) => (x + 1) / (x + 2), [-2], V1), { f: (x) => 0.5 + 0.25 * x, color: "green" }], vlines: [{ x: -2, color: "red", dash: true }], points: [P(0, 0.5)], step: { x: 1, y: 1 } }), 0.0001),
];

export const M = [
  mx(S`Dérive $y=\frac{3x+1}{x-2}$.`, "-7/(x-2)^2", "3(x − 2) − (3x + 1) = −7."),
  num(S`Pour $y=\frac{x^2+1}{x+1}$, trouve $y'(1)$.`, 0.5, "(x² + 2x − 1)/(x + 1)² en 1 : 2/4.", null, 0.0001),
  num(S`Pour $y=\frac1{x^2+4}$, trouve $y'(2)$ (4 décimales).`, -0.0625, "−2x/(x² + 4)² en 2 : −4/64.", null, 0.0001),
  num(S`Pour quelle valeur positive de $x$ la tangente à $y=\frac{2x}{x^2+9}$ est-elle horizontale?`, 3, "Numérateur 18 − 2x² = 0."),
  num("La tangente à y = (x + 1)/(x − 1) en x = 2 est tracée. Trouve son ordonnée à l'origine.", 7, "y(2) = 3; y′ = −2/(x − 1)² = −2; y = −2x + 7.", planeDoc({ view: V2, curves: [...rat((x) => (x + 1) / (x - 1), [1], V2), { f: (x) => 7 - 2 * x, color: "green" }], vlines: [{ x: 1, color: "red", dash: true }], points: [P(2, 3)], step: { x: 1, y: 2 } })),
  num(S`$f(1)=6$, $f'(1)=2$, $g(1)=3$, $g'(1)=1$. Trouve $\left(\frac fg\right)'(1)$.`, 0, "(2 · 3 − 6 · 1)/9."),
  mc(S`Laquelle est la dérivée de $\frac{x^2}{x-1}$?`, S`$\dfrac{x^2-2x}{(x-1)^2}$`, [S`$\dfrac{x^2+2x}{(x-1)^2}$`, S`$2x$`, S`$\dfrac{3x^2-2x}{(x-1)^2}$`], "(2x(x − 1) − x²)/(x − 1)²."),
  num(S`Pour $y=\frac{\sqrt x}{x}$, trouve $y'(4)$ en simplifiant d'abord (4 décimales).`, -0.0625, "y = x^(−½); y′ = −½x^(−3/2) = −1/16.", null, 0.0001),
  num(S`Pour $y=\frac{x^2-4}{x-2}$ ($x\ne2$), trouve $y'(5)$.`, 1, "Elle est égale à x + 2."),
  num(S`Pour $y=\frac{5x}{x^2+1}$, trouve $y'(0)$.`, 5, "(5(x² + 1) − 10x²)/(x² + 1)² en 0."),
  tf(S`$y=\frac{x+1}{x+2}$ est croissante sur chaque partie de son domaine.`, true, "y′ = 1/(x + 2)² > 0."),
  num("Combien de tangentes horizontales y = (x² + 1)/x a-t-elle?", 2, "y = x + 1/x; y′ = 1 − 1/x² = 0 en x = ±1.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -6, ymax: 6 }, curves: rat((x) => (x * x + 1) / x, [0], { xmin: -4, xmax: 4 }), points: [P(1, 2), P(-1, -2)], step: { x: 1, y: 1 } })),
  num(S`Pour $y=\frac{1-x}{1+x}$, trouve $y'(0)$.`, -2, "(−(1 + x) − (1 − x))/(1 + x)² en 0."),
  num(S`Pour $y=\frac{x^3}{x-1}$, trouve $y'(2)$.`, 4, "(3x²(x − 1) − x³)/(x − 1)² en 2 : (12 − 8)/1."),
  num(S`Pour $y=\frac{2x+3}{x^2}$, trouve $y'(1)$.`, -8, "2x⁻¹ + 3x⁻² → −2x⁻² − 6x⁻³."),
  num(S`Pour $y=\frac{x-3}{x+3}$, trouve $y'(3)$ (4 décimales).`, 0.1667, "6/(x + 3)² en 3.", null, 0.0005),
  num(S`Le coût moyen est $A(x)=\frac{200+5x}{x}$ dollars par article. Trouve $A'(10)$.`, -2, "A = 200/x + 5; A′ = −200/x²."),
  num("Une concentration est C(t) = 5t/(t² + 1) mg/L (graphique illustré). À quel moment est-elle la plus élevée?", 1, "Numérateur de C′ : 5(t² + 1) − 10t² = 5 − 5t².", graph((t) => (5 * t) / (t * t + 1), { xmin: 0, xmax: 6, ymin: 0, ymax: 3 }, [P(1, 2.5)], { a: 0, b: 6, step: { x: 1, y: 0.5 } })),
  mx(S`Dérive $y=\frac{x}{x-3}$.`, "-3/(x-3)^2", "(x − 3) − x = −3."),
  num(S`Pour $y=\frac{x+4}{x-4}$, trouve la pente de la tangente en $x=5$.`, -8, "−8/(x − 4)² en 5."),
];

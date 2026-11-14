// 5.4 Règles de dérivation des fonctions exponentielles — 20 questions faciles + 20 moyennes (miroir de ../../mcv4u-ch5/bank/em5_4.mjs)
import { mc, num, tf, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const E = Math.E;
const easy = [
  mx(S`Dérive $y=xe^{4x}$.`, "exp(4*x)+4*x*exp(4*x)", "Règle du produit."),
  mx(S`Dérive $y=e^{2x}\sin x$.`, "2*exp(2*x)*sin(x)+exp(2*x)*cos(x)", "Règle du produit."),
  mx(S`Dérive $y=\frac{x}{e^x}$.`, "(1-x)*exp(-x)", "Écris-la sous la forme xe^(−x)."),
  mx(S`Dérive $y=e^x(x^2+3)$.`, "exp(x)*(x^2+2*x+3)", "Règle du produit, puis mise en évidence de eˣ."),
  num(S`Pour $y=xe^{3x}$, trouve $y'(0)$.`, 1, "e^(3x) + 3xe^(3x) en 0."),
  tf(S`$\frac{d}{dx}\left(xe^x\right)=e^x$.`, false, "La règle du produit donne (x + 1)eˣ."),
  mc(S`Quelle règle appliques-tu d'abord à $y=\frac{e^x}{x^3}$?`, "la règle du quotient", ["la règle de la puissance", "la règle de dérivation en chaîne", "la dérivation logarithmique"], "La dernière opération est une division."),
  num(S`Pour $y=x^4e^x$, trouve $y'(1)$ (4 décimales).`, 13.5914, "(4x³ + x⁴)eˣ = 5e.", null, 0.0005),
  mx(S`Dérive $y=x\ln x-x$.`, "ln(x)", "ln x + 1 − 1."),
  num(S`Pour $y=(x+3)e^x$, trouve $y'(0)$.`, 4, "(x + 4)eˣ."),
  num("La tangente à y = (x + 1)e^(0.5x) en x = 0 est tracée. Quelle est sa pente?", 1.5, "e^(0.5x) + 0.5(x + 1)e^(0.5x) en 0.", graph((x) => (x + 1) * Math.exp(0.5 * x), { xmin: -4, xmax: 1.5, ymin: -1, ymax: 4 }, [P(0, 1)], { more: [{ f: (x) => 1 + 1.5 * x, color: "green", a: -1.5, b: 1.2 }], step: { x: 0.5, y: 0.5 } }), 0.0001),
  mc("Quelle fonction demande la dérivation logarithmique?", S`$y=x^{\tan x}$`, [S`$y=x^5$`, S`$y=5^x$`, S`$y=e^{5x}$`], "La variable est à la fois dans la base et dans l'exposant."),
  num(S`Pour $y=\frac{e^x}{x+2}$, trouve $y'(0)$.`, 0.25, "eˣ(x + 1)/(x + 2)² = 1/4.", null, 0.0001),
  tf(S`Si $y=f(x)e^x$, alors $y'=\left(f(x)+f'(x)\right)e^x$.`, true, "Règle du produit, sous forme factorisée."),
  mx(S`Dérive $y=e^x+\ln x$.`, "exp(x)+1/x", "Terme par terme."),
  num(S`Pour $y=x^2e^{2x}$, trouve $y'(1)$ (2 décimales).`, 29.56, "(2x + 2x²)e^(2x) = 4e².", null, 0.01),
  num(S`Pour $y=\frac{\ln x}{e^x}$, trouve $y'(1)$ (4 décimales).`, 0.3679, "(1/x − ln x)e^(−x) = 1/e.", null, 0.0005),
  tf(S`La dérivée de $y=e^x\cdot e^{-x}$ est 0.`, true, "Le produit vaut 1."),
  num("Le graphique de y = (3 − x)eˣ est illustré. Trouve sa valeur maximale (3 décimales).", 7.389, "y′ = (2 − x)eˣ = 0 en x = 2; valeur e².", graph((x) => (3 - x) * Math.exp(x), { xmin: -3, xmax: 3.3, ymin: -1, ymax: 8.5 }, [P(2, E * E)], { step: { x: 0.5, y: 1 } }), 0.002),
  num(S`Pour $y=x^e+e^x$, trouve $y'(1)$ (4 décimales).`, 5.4366, "Règle de la puissance pour xᵉ, règle des exponentielles pour eˣ : e + e.", null, 0.0005),
];
const medium = [
  mx(S`Dérive $y=x^2e^{-3x}$.`, "2*x*exp(-3*x)-3*x^2*exp(-3*x)", "Règles du produit et de dérivation en chaîne."),
  mx(S`Dérive $y=\frac{e^x}{e^x+3}$.`, "3*exp(x)/(exp(x)+3)^2", "Règle du quotient; les termes en e^(2x) s'annulent."),
  num(S`Pour $y=x^{x+1}$, trouve $y'(1)$.`, 2, "ln y = (x + 1) ln x; y′/y = ln x + (x + 1)/x."),
  num(S`Pour $y=(\ln x)^x$, trouve $y'(e)$.`, 1, "ln y = x ln(ln x); y′/y = ln(ln x) + 1/ln x = 1 et y = 1."),
  num("Le graphique de y = x²e^(−x/2) pour x ≥ 0 est illustré. Trouve sa valeur maximale (4 décimales).", 2.1654, "y′ = e^(−x/2)(2x − x²/2) = 0 en x = 4; 16e^(−2).", graph((x) => x * x * Math.exp(-x / 2), { xmin: -0.5, xmax: 16, ymin: -0.3, ymax: 2.6 }, [P(4, 16 * Math.exp(-2))], { a: 0, step: { x: 2, y: 0.5 } }), 0.0005),
  mx(S`Dérive $y=\ln\left(x^2e^x\right)$, $x\gt0$.`, "2/x+1", "2 ln x + x."),
  num(S`Trouve l'ordonnée du point d'inflexion de $y=(x-1)e^x$ (4 décimales).`, -0.7358, "y′ = xeˣ, y″ = (x + 1)eˣ; en x = −1, y = −2/e.", null, 0.0005),
  mx(S`Dérive $y=e^x\cos(2x)$.`, "exp(x)*cos(2*x)-2*exp(x)*sin(2*x)", "Règle du produit avec la dérivation en chaîne."),
  num(S`Pour $y=\frac{2^x}{x}$, trouve $y'(1)$ (4 décimales).`, -0.6137, "(x2ˣ ln 2 − 2ˣ)/x² = 2 ln 2 − 2.", null, 0.0005),
  tf(S`$\frac{d}{dx}x^x=x\cdot x^{x-1}$.`, false, "La règle de la puissance ne s'applique pas; y′ = xˣ(ln x + 1)."),
  num("Le graphique de y = (x + 2)²e^(−x) est illustré. Trouve sa valeur maximale relative.", 4, "y′ = −x(x + 2)e^(−x); maximum relatif en x = 0.", graph((x) => (x + 2) ** 2 * Math.exp(-x), { xmin: -2.6, xmax: 6, ymin: -0.5, ymax: 5 }, [P(0, 4), P(-2, 0)], { step: { x: 0.5, y: 0.5 } })),
  num(S`Pour $y=\frac{e^{2x}}{1+x}$, trouve $y'(0)$.`, 1, "(2(1 + x) − 1)e^(2x)/(1 + x)²."),
  mc(S`Quelle est la dérivée de $y=x^2e^{3x}$, entièrement factorisée?`, S`$x(3x+2)e^{3x}$`, [S`$6xe^{3x}$`, S`$x^2(3x+1)e^{3x}$`, S`$(2x+3)e^{3x}$`], "2xe^(3x) + 3x²e^(3x)."),
  num(S`Pour $y=x^{\sqrt x}$, trouve $y'(4)$ (3 décimales).`, 13.545, "ln y = √x ln x; y′ = 16(ln 4/4 + ½).", null, 0.002),
  mx(S`Dérive $y=(2x-1)e^x$.`, "(2*x+1)*exp(x)", "2eˣ + (2x − 1)eˣ."),
  num(S`Pour $y=xe^x$, trouve $y''(0)$.`, 2, "y″ = (x + 2)eˣ."),
  num(S`Trouve l'ordonnée à l'origine de la tangente à $y=xe^{0.5x}$ en $x=2$ (4 décimales).`, -5.4366, "Pente (1 + 0.5x)e^(0.5x) = 2e, passant par (2, 2e).", null, 0.0005),
  num(S`Pour $y=e^x\ln(x+1)$, trouve $y'(0)$.`, 1, "eˣ ln(x + 1) + eˣ/(x + 1)."),
  num(S`En quel $x$ la tangente à $y=xe^x$ est-elle horizontale?`, -1, "(x + 1)eˣ = 0."),
  tf(S`$e^x-x-1\ge0$ pour tout $x$.`, true, "Son minimum est 0 en x = 0."),
];
export { easy as E, medium as M };

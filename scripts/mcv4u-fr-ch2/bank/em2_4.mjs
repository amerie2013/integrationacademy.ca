// 2.4 La règle de dérivation en chaîne — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  mc(S`Laquelle est la règle de dérivation en chaîne?`, S`$\frac{d}{dx}f(g(x))=f'(g(x))\,g'(x)$`, [S`$\frac{d}{dx}f(g(x))=f'(x)\,g'(x)$`, S`$\frac{d}{dx}f(g(x))=f'(g'(x))$`, S`$\frac{d}{dx}f(g(x))=f(g'(x))$`], "La dérivée extérieure évaluée à l'intérieur, fois la dérivée intérieure."),
  mx(S`Dérive $y=(x+3)^2$.`, "2*(x+3)", "Dérivée intérieure 1."),
  mx(S`Dérive $y=(2x+1)^3$.`, "6*(2*x+1)^2", "3(2x + 1)² · 2."),
  num(S`Pour $y=(x-1)^4$, trouve $y'(2)$.`, 4, "4(1)³ · 1."),
  tf(S`$\frac{d}{dx}(3x+1)^5=5(3x+1)^4$.`, false, "Il manque le facteur intérieur 3."),
  mc(S`Quelle est la fonction intérieure de $\sqrt{x^2+7}$?`, S`$x^2+7$`, [S`$\sqrt x$`, S`$x^2$`, S`$7$`], "On la calcule en premier."),
  num(S`Pour $y=(4x)^2$, trouve $y'(1)$.`, 32, "2(4x) · 4 = 32x."),
  num(S`Pour $y=(x+2)^3$, trouve $y'(0)$.`, 12, "3(2)²."),
  fill(S`$\frac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}\cdot$ ___`, ["g'(x)", "g′(x)", "g'", "g′"], "Multiplie par la dérivée intérieure."),
  mx(S`Dérive $y=(1+x)^{-1}$.`, "-(1+x)^(-2)", "−1 · (1 + x)⁻² · 1."),
  num(S`Pour $y=\sqrt{x+1}$, trouve $y'(3)$.`, 0.25, "1/(2√4).", null, 0.0001),
  num(S`Si $\frac{dy}{du}=3$ et $\frac{du}{dx}=4$, trouve $\frac{dy}{dx}$.`, 12, "Les taux se multiplient."),
  num(S`Pour $y=(3x-2)^2$, trouve $y'(1)$.`, 6, "2(3x − 2) · 3 en 1."),
  tf(S`On peut écrire $\sqrt{5x}$ sous la forme $(5x)^{1/2}$ avant de dériver.`, true, "Racine = puissance ½."),
  num("Le graphique de y = (x² + 1)² est illustré. Trouve la pente de la tangente en x = 1.", 8, "2(x² + 1) · 2x en 1.", graph((x) => (x * x + 1) ** 2, { xmin: -1.8, xmax: 1.8, ymin: -1, ymax: 10 }, [P(1, 4)], { more: [{ f: (x) => 4 + 8 * (x - 1), color: "green" }] })),
  num(S`Pour $y=(5-x)^3$, trouve $y'(4)$.`, -3, "3(1)² · (−1)."),
  mx(S`Dérive $y=(x^2-2)^2$.`, "4*x*(x^2-2)", "2(x² − 2) · 2x."),
  num(S`$f(x)=x^2$ et $g(x)=x+1$. Trouve $(f\circ g)'(2)$.`, 6, "2g(2) · g′(2) = 2(3)(1)."),
  num(S`Pour $y=\frac1{x+2}$, trouve $y'(0)$ à l'aide de la règle de dérivation en chaîne.`, -0.25, "−(x + 2)⁻² en 0.", null, 0.0001),
  num("Le graphique de y = (x − 2)² est illustré. Trouve la pente de la tangente en x = 3.", 2, "2(x − 2) en 3.", graph((x) => (x - 2) ** 2, { xmin: -1, xmax: 5, ymin: -1, ymax: 8 }, [P(3, 1)], { more: [{ f: (x) => 2 * x - 5, color: "green" }] })),
];

export const M = [
  mx(S`Dérive $y=(x^3-1)^4$.`, "12*x^2*(x^3-1)^3", "4(x³ − 1)³ · 3x²."),
  num(S`Pour $y=(2x-3)^5$, trouve $y'(2)$.`, 10, "5(1)⁴ · 2."),
  num(S`Pour $y=\sqrt{x^2+5}$, trouve $y'(2)$ (4 décimales).`, 0.6667, "x/√(x² + 5) en 2 : 2/3.", null, 0.0005),
  num(S`Pour $y=\frac1{(3x+1)^2}$, trouve $y'(0)$.`, -6, "−2(3x + 1)⁻³ · 3."),
  num(S`Pour $y=(x^2-x)^3$, trouve $y'(2)$.`, 36, "3(2)² · (2x − 1) = 12 · 3."),
  num(S`$g(1)=4$, $g'(1)=2$ et $f'(4)=-3$. Trouve $(f\circ g)'(1)$.`, -6, "f′(4) · g′(1)."),
  num(S`Pour $y=\sqrt[3]{x+7}$, trouve $y'(1)$ (4 décimales).`, 0.0833, "⅓(8)^(−⅔) = 1/12.", null, 0.0005),
  num("Le graphique de y = (x² − 2)³ est illustré. Trouve la pente de la tangente en x = 1.", 6, "3(x² − 2)² · 2x en 1 : 3(1)(2).", graph((x) => (x * x - 2) ** 3, { xmin: -2, xmax: 2, ymin: -9, ymax: 9 }, [P(1, -1)], { more: [{ f: (x) => -1 + 6 * (x - 1), color: "green" }], step: { x: 0.5, y: 2 } })),
  mc(S`Laquelle est $\frac{d}{dx}\sqrt{1-x^2}$?`, S`$\dfrac{-x}{\sqrt{1-x^2}}$`, [S`$\dfrac{1}{2\sqrt{1-x^2}}$`, S`$\dfrac{-2x}{\sqrt{1-x^2}}$`, S`$\dfrac{x}{\sqrt{1-x^2}}$`], "½(1 − x²)^(−½) · (−2x)."),
  num(S`Pour $y=x(x+1)^3$, trouve $y'(0)$.`, 1, "(x + 1)³ + 3x(x + 1)² en 0."),
  num("Le rayon d'un ballon est r = 1 + 0.2t cm. L'aire de sa surface est A = 4πr². Trouve dA/dt à t = 5 (cm² par s, 3 décimales).", 10.053, "dA/dt = 8πr · 0.2 avec r = 2 : 3.2π.", null, 0.001),
  tf(S`$(f\circ g)'(x)=(g\circ f)'(x)$ pour toutes les fonctions.`, false, "L'ordre compte : essaie f = x², g = x + 1."),
  num("Combien de tangentes horizontales le graphique de y = (x² − 4)² a-t-il?", 3, "4x(x² − 4) = 0 : x = 0, ±2.", graph((x) => (x * x - 4) ** 2, { xmin: -3, xmax: 3, ymin: -2, ymax: 20 }, [P(-2, 0), P(0, 16), P(2, 0)], { step: { x: 1, y: 4 } })),
  mx(S`Dérive $y=\sqrt{4-x^2}$.`, "-x/sqrt(4-x^2)", "½(4 − x²)^(−½) · (−2x)."),
  num(S`Pour $y=(x+1)^{-3}$, trouve $y'(1)$ (4 décimales).`, -0.1875, "−3(2)⁻⁴.", null, 0.0001),
  num(S`$h(x)=\sqrt{g(x)}$ avec $g(2)=9$ et $g'(2)=6$. Trouve $h'(2)$.`, 1, "g′/(2√g) = 6/6."),
  num(S`Pour $y=(3-2x)^4$, trouve $y'(1)$.`, -8, "4(1)³ · (−2)."),
  num(S`Pour $y=\sqrt{x^2+1}$, trouve la pente de la tangente en $x=0$.`, 0, "x/√(x² + 1) en 0."),
  num(S`$y=u^5$ et $u=1-x$. Trouve $\frac{dy}{dx}$ en $x=2$.`, -5, "5u⁴ · (−1) avec u = −1."),
  num("Le graphique de y = √(2x + 3) est illustré. Trouve la pente de la tangente en x = 3 (4 décimales).", 0.3333, "1/√(2x + 3) en 3.", graph((x) => Math.sqrt(2 * x + 3), { xmin: -2, xmax: 6, ymin: -1, ymax: 4 }, [P(3, 3)], { a: -1.5, b: 6, more: [{ f: (x) => 3 + (x - 3) / 3, color: "green" }] }), 0.0005),
];

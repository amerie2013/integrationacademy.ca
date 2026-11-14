// 5.3 Dérivées des fonctions exponentielles — 20 questions faciles + 20 moyennes (miroir de ../../mcv4u-ch5/bank/em5_3.mjs)
import { mc, num, tf, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const easy = [
  mx(S`Dérive $y=e^{9x}$.`, "9*exp(9*x)", "Dérivation en chaîne : dérivée intérieure 9."),
  mx(S`Dérive $y=4e^x$.`, "4*exp(x)", "Multiple constant."),
  mx(S`Dérive $y=e^{-3x}$.`, "-3*exp(-3*x)", "Dérivée intérieure −3."),
  mx(S`Dérive $y=e^{x+2}$.`, "exp(x+2)", "Dérivée intérieure 1."),
  mx(S`Dérive $y=2^x$.`, "2^x*ln(2)", "(bˣ)′ = bˣ ln b."),
  num(S`Quelle est la pente de $y=e^{1.5x}$ en $x=1$ (4 décimales)?`, 6.7225, "1.5e^1.5.", null, 0.0005),
  tf(S`$\frac{d}{dx}e^{kx}=ke^{kx}$ pour toute constante $k$.`, true, "Dérivation en chaîne."),
  mc(S`Que vaut $\frac{d}{dx}7^x$?`, S`$7^x\ln7$`, [S`$x\cdot7^{x-1}$`, S`$7^x$`, S`$\frac{7^x}{\ln7}$`], "Règle des exponentielles, pas la règle de la puissance."),
  num(S`Pour $y=e^{7x}$, trouve $y'(0)$.`, 7, "7e⁰."),
  mx(S`Dérive $y=e^{x/2}$.`, "exp(x/2)/2", "Dérivée intérieure ½."),
  num("La tangente à y = e^(−2x) en x = 0 est tracée. Quelle est sa pente?", -2, "−2e⁰.", graph((x) => Math.exp(-2 * x), { xmin: -1, xmax: 2, ymin: -0.5, ymax: 5 }, [P(0, 1)], { more: [{ f: (x) => 1 - 2 * x, color: "green", a: -0.8, b: 0.7 }], step: { x: 0.5, y: 0.5 } })),
  num(S`Quelle est la pente de $y=6^x$ en $x=1$ (3 décimales)?`, 10.751, "6 ln 6.", null, 0.002),
  mx(S`Dérive $y=x^2+e^x$.`, "2*x+exp(x)", "Terme par terme."),
  tf(S`$\frac{d}{dx}e^2=2e$.`, false, "e² est une constante; sa dérivée est 0."),
  num(S`Pour $y=3e^{-x}$, trouve $y'(0)$.`, -3, "−3e⁰."),
  mx(S`Dérive $y=8^x$.`, "8^x*ln(8)", "bˣ ln b."),
  mc(S`Que vaut $\frac{d}{dx}e^{-x}$?`, S`$-e^{-x}$`, [S`$e^{-x}$`, S`$-xe^{-x-1}$`, S`$\frac1{e^x}$`], "Dérivée intérieure −1."),
  num(S`Quelle est la pente de $y=e^{0.5x}$ en $x=2$ (4 décimales)?`, 1.3591, "0.5e.", null, 0.0005),
  num("La tangente à y = 2e^(0.5x) en x = 0 est tracée. Quelle est sa pente?", 1, "2 · 0.5 · e⁰.", graph((x) => 2 * Math.exp(0.5 * x), { xmin: -4, xmax: 2, ymin: -0.5, ymax: 6 }, [P(0, 2)], { more: [{ f: (x) => 2 + x, color: "green", a: -2.5, b: 1.5 }], step: { x: 0.5, y: 1 } })),
  tf(S`$\frac{d}{dx}e^{g(x)}=e^{g(x)}\cdot g'(x)$.`, true, "Dérivation en chaîne avec la fonction extérieure eᵘ."),
];
const medium = [
  mx(S`Dérive $y=e^{x^3}$.`, "3*x^2*exp(x^3)", "Dérivation en chaîne."),
  mx(S`Dérive $y=x^3e^x$.`, "3*x^2*exp(x)+x^3*exp(x)", "Règle du produit."),
  mx(S`Dérive $y=\frac{e^x}{x^2}$.`, "exp(x)*(x-2)/x^3", "Règle du quotient, puis simplification par x."),
  num(S`Pour $y=e^{\cos x}$, trouve $y'\left(\frac\pi2\right)$.`, -1, "−sin x · e^(cos x) = −1 · e⁰."),
  num(S`Trouve la valeur minimale de $y=(x-2)e^x$ (4 décimales).`, -2.7183, "y′ = (x − 1)eˣ = 0 en x = 1; valeur −e.", null, 0.0005),
  mx(S`Dérive $y=2^{3x}$.`, "3*2^(3*x)*ln(2)", "Dérivation en chaîne sur bᵘ."),
  num(S`Où la tangente à $y=e^{3x}$ en $x=0$ coupe-t-elle l'axe des x (4 décimales)?`, -0.3333, "y = 1 + 3x.", null, 0.0005),
  mx(S`Dérive $y=(e^x+1)^2$.`, "2*exp(x)*(exp(x)+1)", "Dérivation en chaîne : 2(eˣ + 1) · eˣ."),
  num(S`En quel $x$ la pente de $y=e^{0.5x}$ vaut-elle 2 (4 décimales)?`, 2.7726, "0.5e^(0.5x) = 2, x = 2 ln 4.", null, 0.0005),
  tf(S`$\frac{d}{dx}3^{x^2}=2x\cdot3^{x^2}\ln3$.`, true, "Dérivation en chaîne sur bᵘ."),
  num("Le graphique de y = eˣ − 4x est illustré. Trouve sa valeur minimale (4 décimales).", -1.5452, "eˣ = 4 en x = ln 4; 4 − 4 ln 4.", graph((x) => Math.exp(x) - 4 * x, { xmin: -1.5, xmax: 3, ymin: -2.5, ymax: 8 }, [P(Math.log(4), 4 - 4 * Math.log(4))], { step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`Pour $y=\frac{e^x}{x+1}$, trouve $y'(1)$ (4 décimales).`, 0.6796, "y′ = xeˣ/(x + 1)²; e/4.", null, 0.0005),
  mc(S`Que vaut $\frac{d}{dx}e^{e^x}$?`, S`$e^{e^x}\cdot e^x$`, [S`$e^{e^x}$`, S`$e^x\cdot e^{e^x-1}$`, S`$e^{2x}$`], "Dérivation en chaîne avec la fonction intérieure eˣ."),
  num(S`Pour $y=e^{1/x}$, trouve $y'(1)$ (4 décimales).`, -2.7183, "−e^(1/x)/x².", null, 0.0005),
  mx(S`Dérive $y=5e^{x^2-1}$.`, "10*x*exp(x^2-1)", "5 · 2x · e^(x² − 1)."),
  num(S`Pour $y=e^{-2x}$, trouve $y''(0)$.`, 4, "(−2)² e⁰."),
  num(S`Quelle est la pente de $y=10^x$ en $x=1$ (2 décimales)?`, 23.03, "10 ln 10.", null, 0.01),
  num("La tangente à y = 3ˣ en x = 1 est tracée. Trouve son ordonnée à l'origine (4 décimales).", -0.2958, "y = 3 + 3 ln 3 (x − 1).", graph((x) => 3 ** x, { xmin: -1.5, xmax: 2, ymin: -1, ymax: 9 }, [P(1, 3)], { more: [{ f: (x) => 3 + 3 * Math.log(3) * (x - 1), color: "green", a: -0.2, b: 1.9 }], step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`Pour $y=x\cdot2^x$, trouve $y'(1)$ (4 décimales).`, 3.3863, "2ˣ + x2ˣ ln 2 = 2 + 2 ln 2.", null, 0.0005),
  mx(S`Dérive $y=1-e^{-x}$.`, "exp(-x)", "−(−e^(−x))."),
];
export { easy as E, medium as M };

// 5.2 Le logarithme naturel et sa dérivée — 20 questions difficiles (miroir de ../../mcv4u-ch5/bank/h5_2.mjs)
import { mc, num, tf, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const E = Math.E;
export const TOPIC = "5.2 Le logarithme naturel et sa dérivée";
export const Q = [
  num("Une tangente à y = ln x passe par (0, 1) (graphique illustré). En quel x touche-t-elle la courbe (3 décimales)?", 7.389, "Tangente en a : y = ln a + (x − a)/a; en x = 0 : ln a − 1 = 1, donc a = e².", graph(Math.log, { xmin: -0.5, xmax: 10, ymin: -1.5, ymax: 3 }, [P(E * E, 2), P(0, 1)], { a: 0.1, more: [{ f: (x) => 1 + x / (E * E), color: "green", a: 0, b: 9.8 }], step: { x: 1, y: 0.5 } }), 0.002),
  mx(S`Dérive $y=\ln\left(x^2(x+2)^3\right)$, $x\gt0$.`, "2/x+3/(x+2)", "Développe : 2 ln x + 3 ln(x + 2)."),
  num(S`Trouve la valeur minimale de $y=x^2-\ln x$ (4 décimales).`, 0.8466, "2x − 1/x = 0 en x = 1/√2; ½ + ½ ln 2.", null, 0.0005),
  num("Le graphique de y = ln x / √x est illustré. Trouve sa valeur maximale (4 décimales).", 0.7358, "y′ = (2 − ln x)/(2x^(3/2)) = 0 en x = e²; valeur 2/e.", graph((x) => Math.log(x) / Math.sqrt(x), { xmin: -1, xmax: 25, ymin: -1.5, ymax: 1.2 }, [P(E * E, 2 / E)], { a: 0.2, step: { x: 2, y: 0.25 } }), 0.0005),
  num(S`Pour $y=\ln\left(x+\sqrt{x^2+1}\right)$, trouve $y'(\sqrt3)$.`, 0.5, "La dérivée se simplifie en 1/√(x² + 1).", null, 0.0001),
  mc(S`Quelle fonction a pour dérivée $\frac1x$ lorsque $x\lt0$?`, S`$\ln(-x)$`, [S`$-\ln x$`, S`$\ln x$`, S`$-\ln(-x)$`], "Dérivation en chaîne : (−1)/(−x) = 1/x."),
  num(S`Pour $y=\log_2(x^2+4)$, trouve $y'(2)$ (4 décimales).`, 0.7213, "2x/((x² + 4) ln 2) = 4/(8 ln 2).", null, 0.0005),
  num(S`Évalue $\displaystyle\lim_{h\to0}\frac{\ln(1+h)}{h}$.`, 1, "La pente de ln x en x = 1."),
  num(S`Évalue $\displaystyle\lim_{h\to0}\frac{\ln(1+3h)}{h}$.`, 3, "3 × la pente de ln x en 1."),
  tf(S`$y=x-\ln(1+x^2)$ n'est jamais décroissante.`, true, "y′ = (x − 1)²/(1 + x²) ≥ 0."),
  num("Les tangentes à y = ln x en x = 1 et en x = e sont tracées. En quel x se coupent-elles (4 décimales)?", 1.582, "y = x − 1 et y = x/e : x = e/(e − 1).", graph(Math.log, { xmin: -0.5, xmax: 4.5, ymin: -1.5, ymax: 2 }, [P(1, 0), P(E, 1), P(E / (E - 1), 1 / (E - 1), false, "green")], { a: 0.1, more: [{ f: (x) => x - 1, color: "green", a: 0, b: 3 }, { f: (x) => x / E, color: "green", a: 0, b: 4.4 }], step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`Pour $y=\ln(\sec x)$, trouve $y'\left(\frac\pi4\right)$.`, 1, "(sec x tan x)/sec x = tan x."),
  num(S`Pour $y=x^{\ln x}$, $x\gt0$, trouve $y'(e)$.`, 2, "ln y = (ln x)², donc y′ = y · 2 ln x / x = e · 2/e."),
  num(S`Trouve l'ordonnée à l'origine de la normale à $y=\ln x$ en $x=2$ (4 décimales).`, 4.6931, "Normale de pente −2 passant par (2, ln 2).", null, 0.0005),
  tf(S`$\ln x\lt x-1$ pour tout $x\gt0$ sauf $x=1$.`, true, "ln x est concave vers le bas et y = x − 1 est sa tangente en 1."),
  mx(S`Dérive $y=\ln\left(\ln(x^2)\right)$, $x\gt1$.`, "1/(x*ln(x))", "ln(x²) = 2 ln x; puis (2/x)/(2 ln x)."),
  num(S`pH $=-\log_{10}H$, où $H$ est la concentration en ions hydrogène. Trouve $\frac{d(\text{pH})}{dH}$ lorsque $H=10^{-3}$ (2 décimales).`, -434.29, "−1/(H ln 10).", null, 0.01),
  num("Le graphique de y = ln x − x/3 est illustré. Trouve sa valeur maximale (4 décimales).", 0.0986, "1/x − 1/3 = 0 en x = 3; ln 3 − 1.", graph((x) => Math.log(x) - x / 3, { xmin: -0.5, xmax: 8, ymin: -2, ymax: 0.5 }, [P(3, Math.log(3) - 1)], { a: 0.1, step: { x: 1, y: 0.5 } }), 0.0005),
  num(S`Pour $y=\ln x$, trouve $y''(0.5)$.`, -4, "y″ = −1/x²."),
  mc(S`Que vaut $\frac{d}{dx}\,x^{1/\ln x}$ pour $x\gt0$, $x\ne1$?`, "0", [S`$\frac1x$`, S`$e$`, S`$\frac1{\ln x}$`], "x^(1/ln x) = e^(ln x / ln x) = e, une constante."),
];

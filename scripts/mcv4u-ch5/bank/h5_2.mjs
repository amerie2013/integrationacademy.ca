// 5.2 The Natural Logarithm and Its Derivative — 20 hard questions
import { mc, num, tf, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const E = Math.E;
export const TOPIC = "5.2 The Natural Logarithm and Its Derivative";
export const Q = [
  num("A tangent to y = ln x passes through (0, 1) (graph shown). At what x does it touch the curve (3 decimals)?", 7.389, "Tangent at a: y = ln a + (x − a)/a; at x = 0: ln a − 1 = 1, a = e².", graph(Math.log, { xmin: -0.5, xmax: 10, ymin: -1.5, ymax: 3 }, [P(E * E, 2), P(0, 1)], { a: 0.1, more: [{ f: (x) => 1 + x / (E * E), color: "green", a: 0, b: 9.8 }], step: { x: 1, y: 0.5 } }), 0.002),
  mx(S`Differentiate $y=\ln\left(x^2(x+2)^3\right)$, $x\gt0$.`, "2/x+3/(x+2)", "Expand: 2 ln x + 3 ln(x + 2)."),
  num(S`Find the minimum value of $y=x^2-\ln x$ (4 decimals).`, 0.8466, "2x − 1/x = 0 at x = 1/√2; ½ + ½ ln 2.", null, 0.0005),
  num("The graph of y = ln x / √x is shown. Find its maximum value (4 decimals).", 0.7358, "y′ = (2 − ln x)/(2x^(3/2)) = 0 at x = e²; value 2/e.", graph((x) => Math.log(x) / Math.sqrt(x), { xmin: -1, xmax: 25, ymin: -1.5, ymax: 1.2 }, [P(E * E, 2 / E)], { a: 0.2, step: { x: 2, y: 0.25 } }), 0.0005),
  num(S`For $y=\ln\left(x+\sqrt{x^2+1}\right)$, find $y'(\sqrt3)$.`, 0.5, "The derivative simplifies to 1/√(x² + 1).", null, 0.0001),
  mc(S`Which function has derivative $\frac1x$ for $x\lt0$?`, S`$\ln(-x)$`, [S`$-\ln x$`, S`$\ln x$`, S`$-\ln(-x)$`], "Chain rule: (−1)/(−x) = 1/x."),
  num(S`For $y=\log_2(x^2+4)$, find $y'(2)$ (4 decimals).`, 0.7213, "2x/((x² + 4) ln 2) = 4/(8 ln 2).", null, 0.0005),
  num(S`Evaluate $\displaystyle\lim_{h\to0}\frac{\ln(1+h)}{h}$.`, 1, "The slope of ln x at x = 1."),
  num(S`Evaluate $\displaystyle\lim_{h\to0}\frac{\ln(1+3h)}{h}$.`, 3, "3 × the slope of ln x at 1."),
  tf(S`$y=x-\ln(1+x^2)$ is never decreasing.`, true, "y′ = (x − 1)²/(1 + x²) ≥ 0."),
  num("The tangents to y = ln x at x = 1 and x = e are drawn. At what x do they meet (4 decimals)?", 1.582, "y = x − 1 and y = x/e: x = e/(e − 1).", graph(Math.log, { xmin: -0.5, xmax: 4.5, ymin: -1.5, ymax: 2 }, [P(1, 0), P(E, 1), P(E / (E - 1), 1 / (E - 1), false, "green")], { a: 0.1, more: [{ f: (x) => x - 1, color: "green", a: 0, b: 3 }, { f: (x) => x / E, color: "green", a: 0, b: 4.4 }], step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`For $y=\ln(\sec x)$, find $y'\left(\frac\pi4\right)$.`, 1, "(sec x tan x)/sec x = tan x."),
  num(S`For $y=x^{\ln x}$, $x\gt0$, find $y'(e)$.`, 2, "ln y = (ln x)², so y′ = y · 2 ln x / x = e · 2/e."),
  num(S`Find the y-intercept of the normal to $y=\ln x$ at $x=2$ (4 decimals).`, 4.6931, "Normal slope −2 through (2, ln 2).", null, 0.0005),
  tf(S`$\ln x\lt x-1$ for every $x\gt0$ except $x=1$.`, true, "ln x is concave down and y = x − 1 is its tangent at 1."),
  mx(S`Differentiate $y=\ln\left(\ln(x^2)\right)$, $x\gt1$.`, "1/(x*ln(x))", "ln(x²) = 2 ln x; then (2/x)/(2 ln x)."),
  num(S`pH $=-\log_{10}H$, where $H$ is the hydrogen-ion concentration. Find $\frac{d(\text{pH})}{dH}$ when $H=10^{-3}$ (2 decimals).`, -434.29, "−1/(H ln 10).", null, 0.01),
  num("The graph of y = ln x − x/3 is shown. Find its maximum value (4 decimals).", 0.0986, "1/x − 1/3 = 0 at x = 3; ln 3 − 1.", graph((x) => Math.log(x) - x / 3, { xmin: -0.5, xmax: 8, ymin: -2, ymax: 0.5 }, [P(3, Math.log(3) - 1)], { a: 0.1, step: { x: 1, y: 0.5 } }), 0.0005),
  num(S`For $y=\ln x$, find $y''(0.5)$.`, -4, "y″ = −1/x²."),
  mc(S`What is $\frac{d}{dx}\,x^{1/\ln x}$ for $x\gt0$, $x\ne1$?`, "0", [S`$\frac1x$`, S`$e$`, S`$\frac1{\ln x}$`], "x^(1/ln x) = e^(ln x / ln x) = e, a constant."),
];

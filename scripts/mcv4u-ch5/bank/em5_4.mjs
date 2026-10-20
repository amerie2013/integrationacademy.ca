// 5.4 Differentiation Rules for Exponential Functions — 20 easy + 20 medium questions
import { mc, num, tf, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const E = Math.E;
const easy = [
  mx(S`Differentiate $y=xe^{4x}$.`, "exp(4*x)+4*x*exp(4*x)", "Product rule."),
  mx(S`Differentiate $y=e^{2x}\sin x$.`, "2*exp(2*x)*sin(x)+exp(2*x)*cos(x)", "Product rule."),
  mx(S`Differentiate $y=\frac{x}{e^x}$.`, "(1-x)*exp(-x)", "Write it as xe^(−x)."),
  mx(S`Differentiate $y=e^x(x^2+3)$.`, "exp(x)*(x^2+2*x+3)", "Product rule, then factor eˣ."),
  num(S`For $y=xe^{3x}$, find $y'(0)$.`, 1, "e^(3x) + 3xe^(3x) at 0."),
  tf(S`$\frac{d}{dx}\left(xe^x\right)=e^x$.`, false, "Product rule gives (x + 1)eˣ."),
  mc(S`Which rule do you apply first to $y=\frac{e^x}{x^3}$?`, "quotient rule", ["power rule", "chain rule", "logarithmic differentiation"], "The last operation is division."),
  num(S`For $y=x^4e^x$, find $y'(1)$ (4 decimals).`, 13.5914, "(4x³ + x⁴)eˣ = 5e.", null, 0.0005),
  mx(S`Differentiate $y=x\ln x-x$.`, "ln(x)", "ln x + 1 − 1."),
  num(S`For $y=(x+3)e^x$, find $y'(0)$.`, 4, "(x + 4)eˣ."),
  num("The tangent to y = (x + 1)e^(0.5x) at x = 0 is drawn. What is its slope?", 1.5, "e^(0.5x) + 0.5(x + 1)e^(0.5x) at 0.", graph((x) => (x + 1) * Math.exp(0.5 * x), { xmin: -4, xmax: 1.5, ymin: -1, ymax: 4 }, [P(0, 1)], { more: [{ f: (x) => 1 + 1.5 * x, color: "green", a: -1.5, b: 1.2 }], step: { x: 0.5, y: 0.5 } }), 0.0001),
  mc("Which function needs logarithmic differentiation?", S`$y=x^{\tan x}$`, [S`$y=x^5$`, S`$y=5^x$`, S`$y=e^{5x}$`], "The variable is in both the base and the exponent."),
  num(S`For $y=\frac{e^x}{x+2}$, find $y'(0)$.`, 0.25, "eˣ(x + 1)/(x + 2)² = 1/4.", null, 0.0001),
  tf(S`If $y=f(x)e^x$, then $y'=\left(f(x)+f'(x)\right)e^x$.`, true, "Product rule, factored."),
  mx(S`Differentiate $y=e^x+\ln x$.`, "exp(x)+1/x", "Term by term."),
  num(S`For $y=x^2e^{2x}$, find $y'(1)$ (2 decimals).`, 29.56, "(2x + 2x²)e^(2x) = 4e².", null, 0.01),
  num(S`For $y=\frac{\ln x}{e^x}$, find $y'(1)$ (4 decimals).`, 0.3679, "(1/x − ln x)e^(−x) = 1/e.", null, 0.0005),
  tf(S`$y=e^x\cdot e^{-x}$ has derivative 0.`, true, "The product is 1."),
  num("The graph of y = (3 − x)eˣ is shown. Find its maximum value (3 decimals).", 7.389, "y′ = (2 − x)eˣ = 0 at x = 2; value e².", graph((x) => (3 - x) * Math.exp(x), { xmin: -3, xmax: 3.3, ymin: -1, ymax: 8.5 }, [P(2, E * E)], { step: { x: 0.5, y: 1 } }), 0.002),
  num(S`For $y=x^e+e^x$, find $y'(1)$ (4 decimals).`, 5.4366, "Power rule for xᵉ, exponential rule for eˣ: e + e.", null, 0.0005),
];
const medium = [
  mx(S`Differentiate $y=x^2e^{-3x}$.`, "2*x*exp(-3*x)-3*x^2*exp(-3*x)", "Product and chain rules."),
  mx(S`Differentiate $y=\frac{e^x}{e^x+3}$.`, "3*exp(x)/(exp(x)+3)^2", "Quotient rule; the e^(2x) terms cancel."),
  num(S`For $y=x^{x+1}$, find $y'(1)$.`, 2, "ln y = (x + 1) ln x; y′/y = ln x + (x + 1)/x."),
  num(S`For $y=(\ln x)^x$, find $y'(e)$.`, 1, "ln y = x ln(ln x); y′/y = ln(ln x) + 1/ln x = 1 and y = 1."),
  num("The graph of y = x²e^(−x/2) for x ≥ 0 is shown. Find its maximum value (4 decimals).", 2.1654, "y′ = e^(−x/2)(2x − x²/2) = 0 at x = 4; 16e^(−2).", graph((x) => x * x * Math.exp(-x / 2), { xmin: -0.5, xmax: 16, ymin: -0.3, ymax: 2.6 }, [P(4, 16 * Math.exp(-2))], { a: 0, step: { x: 2, y: 0.5 } }), 0.0005),
  mx(S`Differentiate $y=\ln\left(x^2e^x\right)$, $x\gt0$.`, "2/x+1", "2 ln x + x."),
  num(S`Find the y-coordinate of the inflection point of $y=(x-1)e^x$ (4 decimals).`, -0.7358, "y′ = xeˣ, y″ = (x + 1)eˣ; at x = −1, y = −2/e.", null, 0.0005),
  mx(S`Differentiate $y=e^x\cos(2x)$.`, "exp(x)*cos(2*x)-2*exp(x)*sin(2*x)", "Product rule with the chain rule."),
  num(S`For $y=\frac{2^x}{x}$, find $y'(1)$ (4 decimals).`, -0.6137, "(x2ˣ ln 2 − 2ˣ)/x² = 2 ln 2 − 2.", null, 0.0005),
  tf(S`$\frac{d}{dx}x^x=x\cdot x^{x-1}$.`, false, "The power rule does not apply; y′ = xˣ(ln x + 1)."),
  num("The graph of y = (x + 2)²e^(−x) is shown. Find its local maximum value.", 4, "y′ = −x(x + 2)e^(−x); local max at x = 0.", graph((x) => (x + 2) ** 2 * Math.exp(-x), { xmin: -2.6, xmax: 6, ymin: -0.5, ymax: 5 }, [P(0, 4), P(-2, 0)], { step: { x: 0.5, y: 0.5 } })),
  num(S`For $y=\frac{e^{2x}}{1+x}$, find $y'(0)$.`, 1, "(2(1 + x) − 1)e^(2x)/(1 + x)²."),
  mc(S`What is the derivative of $y=x^2e^{3x}$, fully factored?`, S`$x(3x+2)e^{3x}$`, [S`$6xe^{3x}$`, S`$x^2(3x+1)e^{3x}$`, S`$(2x+3)e^{3x}$`], "2xe^(3x) + 3x²e^(3x)."),
  num(S`For $y=x^{\sqrt x}$, find $y'(4)$ (3 decimals).`, 13.545, "ln y = √x ln x; y′ = 16(ln 4/4 + ½).", null, 0.002),
  mx(S`Differentiate $y=(2x-1)e^x$.`, "(2*x+1)*exp(x)", "2eˣ + (2x − 1)eˣ."),
  num(S`For $y=xe^x$, find $y''(0)$.`, 2, "y″ = (x + 2)eˣ."),
  num(S`Find the y-intercept of the tangent to $y=xe^{0.5x}$ at $x=2$ (4 decimals).`, -5.4366, "Slope (1 + 0.5x)e^(0.5x) = 2e through (2, 2e).", null, 0.0005),
  num(S`For $y=e^x\ln(x+1)$, find $y'(0)$.`, 1, "eˣ ln(x + 1) + eˣ/(x + 1)."),
  num(S`At what $x$ is the tangent to $y=xe^x$ horizontal?`, -1, "(x + 1)eˣ = 0."),
  tf(S`$e^x-x-1\ge0$ for every $x$.`, true, "Its minimum is 0 at x = 0."),
];
export { easy as E, medium as M };

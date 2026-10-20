// 5.3 Derivatives of Exponential Functions — 20 easy + 20 medium questions
import { mc, num, tf, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const easy = [
  mx(S`Differentiate $y=e^{9x}$.`, "9*exp(9*x)", "Chain rule: inner derivative 9."),
  mx(S`Differentiate $y=4e^x$.`, "4*exp(x)", "Constant multiple."),
  mx(S`Differentiate $y=e^{-3x}$.`, "-3*exp(-3*x)", "Inner derivative −3."),
  mx(S`Differentiate $y=e^{x+2}$.`, "exp(x+2)", "Inner derivative 1."),
  mx(S`Differentiate $y=2^x$.`, "2^x*ln(2)", "(bˣ)′ = bˣ ln b."),
  num(S`What is the slope of $y=e^{1.5x}$ at $x=1$ (4 decimals)?`, 6.7225, "1.5e^1.5.", null, 0.0005),
  tf(S`$\frac{d}{dx}e^{kx}=ke^{kx}$ for any constant $k$.`, true, "Chain rule."),
  mc(S`What is $\frac{d}{dx}7^x$?`, S`$7^x\ln7$`, [S`$x\cdot7^{x-1}$`, S`$7^x$`, S`$\frac{7^x}{\ln7}$`], "Exponential rule, not the power rule."),
  num(S`For $y=e^{7x}$, find $y'(0)$.`, 7, "7e⁰."),
  mx(S`Differentiate $y=e^{x/2}$.`, "exp(x/2)/2", "Inner derivative ½."),
  num("The tangent to y = e^(−2x) at x = 0 is drawn. What is its slope?", -2, "−2e⁰.", graph((x) => Math.exp(-2 * x), { xmin: -1, xmax: 2, ymin: -0.5, ymax: 5 }, [P(0, 1)], { more: [{ f: (x) => 1 - 2 * x, color: "green", a: -0.8, b: 0.7 }], step: { x: 0.5, y: 0.5 } })),
  num(S`What is the slope of $y=6^x$ at $x=1$ (3 decimals)?`, 10.751, "6 ln 6.", null, 0.002),
  mx(S`Differentiate $y=x^2+e^x$.`, "2*x+exp(x)", "Term by term."),
  tf(S`$\frac{d}{dx}e^2=2e$.`, false, "e² is a constant; its derivative is 0."),
  num(S`For $y=3e^{-x}$, find $y'(0)$.`, -3, "−3e⁰."),
  mx(S`Differentiate $y=8^x$.`, "8^x*ln(8)", "bˣ ln b."),
  mc(S`What is $\frac{d}{dx}e^{-x}$?`, S`$-e^{-x}$`, [S`$e^{-x}$`, S`$-xe^{-x-1}$`, S`$\frac1{e^x}$`], "Inner derivative −1."),
  num(S`What is the slope of $y=e^{0.5x}$ at $x=2$ (4 decimals)?`, 1.3591, "0.5e.", null, 0.0005),
  num("The tangent to y = 2e^(0.5x) at x = 0 is drawn. What is its slope?", 1, "2 · 0.5 · e⁰.", graph((x) => 2 * Math.exp(0.5 * x), { xmin: -4, xmax: 2, ymin: -0.5, ymax: 6 }, [P(0, 2)], { more: [{ f: (x) => 2 + x, color: "green", a: -2.5, b: 1.5 }], step: { x: 0.5, y: 1 } })),
  tf(S`$\frac{d}{dx}e^{g(x)}=e^{g(x)}\cdot g'(x)$.`, true, "Chain rule with outer function eᵘ."),
];
const medium = [
  mx(S`Differentiate $y=e^{x^3}$.`, "3*x^2*exp(x^3)", "Chain rule."),
  mx(S`Differentiate $y=x^3e^x$.`, "3*x^2*exp(x)+x^3*exp(x)", "Product rule."),
  mx(S`Differentiate $y=\frac{e^x}{x^2}$.`, "exp(x)*(x-2)/x^3", "Quotient rule, then cancel x."),
  num(S`For $y=e^{\cos x}$, find $y'\left(\frac\pi2\right)$.`, -1, "−sin x · e^(cos x) = −1 · e⁰."),
  num(S`Find the minimum value of $y=(x-2)e^x$ (4 decimals).`, -2.7183, "y′ = (x − 1)eˣ = 0 at x = 1; value −e.", null, 0.0005),
  mx(S`Differentiate $y=2^{3x}$.`, "3*2^(3*x)*ln(2)", "Chain rule on bᵘ."),
  num(S`Where does the tangent to $y=e^{3x}$ at $x=0$ cross the x-axis (4 decimals)?`, -0.3333, "y = 1 + 3x.", null, 0.0005),
  mx(S`Differentiate $y=(e^x+1)^2$.`, "2*exp(x)*(exp(x)+1)", "Chain rule: 2(eˣ + 1) · eˣ."),
  num(S`At what $x$ is the slope of $y=e^{0.5x}$ equal to 2 (4 decimals)?`, 2.7726, "0.5e^(0.5x) = 2, x = 2 ln 4.", null, 0.0005),
  tf(S`$\frac{d}{dx}3^{x^2}=2x\cdot3^{x^2}\ln3$.`, true, "Chain rule on bᵘ."),
  num("The graph of y = eˣ − 4x is shown. Find its minimum value (4 decimals).", -1.5452, "eˣ = 4 at x = ln 4; 4 − 4 ln 4.", graph((x) => Math.exp(x) - 4 * x, { xmin: -1.5, xmax: 3, ymin: -2.5, ymax: 8 }, [P(Math.log(4), 4 - 4 * Math.log(4))], { step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`For $y=\frac{e^x}{x+1}$, find $y'(1)$ (4 decimals).`, 0.6796, "y′ = xeˣ/(x + 1)²; e/4.", null, 0.0005),
  mc(S`What is $\frac{d}{dx}e^{e^x}$?`, S`$e^{e^x}\cdot e^x$`, [S`$e^{e^x}$`, S`$e^x\cdot e^{e^x-1}$`, S`$e^{2x}$`], "Chain rule with inner function eˣ."),
  num(S`For $y=e^{1/x}$, find $y'(1)$ (4 decimals).`, -2.7183, "−e^(1/x)/x².", null, 0.0005),
  mx(S`Differentiate $y=5e^{x^2-1}$.`, "10*x*exp(x^2-1)", "5 · 2x · e^(x² − 1)."),
  num(S`For $y=e^{-2x}$, find $y''(0)$.`, 4, "(−2)² e⁰."),
  num(S`What is the slope of $y=10^x$ at $x=1$ (2 decimals)?`, 23.03, "10 ln 10.", null, 0.01),
  num("The tangent to y = 3ˣ at x = 1 is drawn. Find its y-intercept (4 decimals).", -0.2958, "y = 3 + 3 ln 3 (x − 1).", graph((x) => 3 ** x, { xmin: -1.5, xmax: 2, ymin: -1, ymax: 9 }, [P(1, 3)], { more: [{ f: (x) => 3 + 3 * Math.log(3) * (x - 1), color: "green", a: -0.2, b: 1.9 }], step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`For $y=x\cdot2^x$, find $y'(1)$ (4 decimals).`, 3.3863, "2ˣ + x2ˣ ln 2 = 2 + 2 ln 2.", null, 0.0005),
  mx(S`Differentiate $y=1-e^{-x}$.`, "exp(-x)", "−(−e^(−x))."),
];
export { easy as E, medium as M };

// 5.2 The Natural Logarithm and Its Derivative — 20 easy + 20 medium questions
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const easy = [
  mx(S`Differentiate $y=\ln\frac x4$.`, "1/x", "ln x − ln 4; the constant drops."),
  num(S`Evaluate $e^{\ln6}$.`, 6, "eˣ and ln x undo each other."),
  num(S`What is the slope of $y=\ln x$ at $x=4$?`, 0.25, "1/x.", null, 0.0001),
  mx(S`Differentiate $y=\ln(x^4)$, $x\gt0$.`, "4/x", "4 ln x."),
  tf(S`$\ln(ab)=\ln a+\ln b$ for $a,b\gt0$.`, true, "Product law of logarithms."),
  num(S`Solve $e^x=20$ (4 decimals).`, 2.9957, "x = ln 20.", null, 0.0005),
  mc(S`What is $\frac{d}{dx}\ln x$?`, S`$\frac1x$`, [S`$\ln x$`, S`$e^x$`, S`$\frac1{\ln x}$`], "The reciprocal function."),
  num(S`Solve $\ln x=2$ (3 decimals).`, 7.389, "x = e².", null, 0.002),
  mx(S`Differentiate $y=\ln(x+3)$.`, "1/(x+3)", "Chain rule with inner derivative 1."),
  tf(S`$\frac{d}{dx}\ln x=\frac1{\ln x}$.`, false, "It is 1/x."),
  num("The tangent to y = ln x at x = 2 is drawn. What is its slope?", 0.5, "1/2.", graph(Math.log, { xmin: -0.5, xmax: 5, ymin: -2.5, ymax: 2.5 }, [P(2, Math.log(2))], { a: 0.05, more: [{ f: (x) => Math.log(2) + (x - 2) / 2, color: "green", a: 0.3, b: 4.5 }], step: { x: 0.5, y: 0.5 } }), 0.0001),
  num(S`Evaluate $\ln1$.`, 0, "e⁰ = 1."),
  mx(S`Differentiate $y=\ln(4x-1)$.`, "4/(4*x-1)", "Inner derivative 4."),
  mc(S`What is the domain of $y=\ln x$?`, S`$x\gt0$`, [S`$x\ge0$`, "all real x", S`$x\ne0$`], "Only positive numbers have logarithms."),
  num(S`What is the slope of $y=\log_{10}x$ at $x=1$ (4 decimals)?`, 0.4343, "1/ln 10.", null, 0.0005),
  fill(S`$y=\ln x$ and $y=e^x$ are ___ functions of each other.`, ["inverse", "inverses"], "Reflections in y = x."),
  num(S`What is the slope of $y=\ln x$ at $x=0.2$?`, 5, "1/0.2."),
  tf(S`$y=\ln x$ is increasing on its whole domain.`, true, "1/x > 0 for x > 0."),
  num("The graph of y = ln x is shown. At what x is its slope 1/3?", 3, "1/x = 1/3.", graph(Math.log, { xmin: -0.5, xmax: 6, ymin: -2.5, ymax: 2.5 }, [P(3, Math.log(3))], { a: 0.05, more: [{ f: (x) => Math.log(3) + (x - 3) / 3, color: "green", a: 0.5, b: 5.8 }], step: { x: 0.5, y: 0.5 } })),
  mx(S`Differentiate $y=3\ln x$.`, "3/x", "Constant multiple."),
];
const medium = [
  mx(S`Differentiate $y=\ln(x^2+5x)$.`, "(2*x+5)/(x^2+5*x)", "u′/u."),
  mx(S`Differentiate $y=\ln\sqrt x$.`, "1/(2*x)", "½ ln x."),
  num(S`For $y=\ln(x^2-3)$, find $y'(2)$.`, 4, "2x/(x² − 3) = 4/1."),
  mx(S`Differentiate $y=x^3\ln x$.`, "3*x^2*ln(x)+x^2", "Product rule."),
  mx(S`Differentiate $y=\frac{\ln x}{x^2}$.`, "(1-2*ln(x))/x^3", "Quotient rule, then cancel x."),
  num(S`Find the y-intercept of the tangent to $y=\ln x$ at $x=4$ (4 decimals).`, 0.3863, "y = ln 4 + (x − 4)/4.", null, 0.0005),
  num(S`Solve $\ln(2x-1)=3$ (4 decimals).`, 10.5428, "2x − 1 = e³.", null, 0.0005),
  mx(S`Differentiate $y=\log_3x$.`, "1/(x*ln(3))", "Change of base: ln x / ln 3."),
  num(S`For $y=\ln(5-x)$, find $y'(1)$.`, -0.25, "−1/(5 − x).", null, 0.0001),
  tf(S`For every $x\ne0$, $\frac{d}{dx}\ln(x^4)=\frac4x$.`, true, "4x³/x⁴, valid for negative x too."),
  num("The graph of y = x − 2 ln x is shown. Find its minimum value (4 decimals).", 0.6137, "y′ = 1 − 2/x = 0 at x = 2; 2 − 2 ln 2.", graph((x) => x - 2 * Math.log(x), { xmin: -0.5, xmax: 7, ymin: -0.5, ymax: 4 }, [P(2, 2 - 2 * Math.log(2))], { a: 0.1, step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`For $y=(\ln x)^3$, find $y'(e)$ (4 decimals).`, 1.1036, "3(ln x)²/x = 3/e.", null, 0.0005),
  mc(S`Describe the concavity of $y=\ln x$.`, "concave down everywhere", ["concave up everywhere", "concave up for x > 1", "it has an inflection point at x = 1"], "y″ = −1/x² < 0."),
  num(S`For $y=\ln(\ln x)$, find $y'(e)$ (4 decimals).`, 0.3679, "1/(x ln x) = 1/e.", null, 0.0005),
  mx(S`Differentiate $y=\ln\left((2x+1)^3\right)$.`, "6/(2*x+1)", "3 ln(2x + 1)."),
  num(S`At what $x$ does the tangent to $y=\ln x$ have slope 2?`, 0.5, "1/x = 2.", null, 0.0001),
  num(S`For $y=\ln(x^2+x+1)$, find $y'(1)$.`, 1, "(2x + 1)/(x² + x + 1) = 3/3."),
  num("The graph of y = ln(3 − x) is shown. What is its slope where it crosses the x-axis?", -1, "Crosses at x = 2; slope −1/(3 − x).", graph((x) => Math.log(3 - x), { xmin: -2, xmax: 3.5, ymin: -2.5, ymax: 2 }, [P(2, 0)], { b: 2.95, more: [{ f: (x) => 2 - x, color: "green", a: 0.8, b: 3.2 }], step: { x: 0.5, y: 0.5 } })),
  mx(S`Differentiate $y=\ln(xe^x)$, $x\gt0$.`, "1/x+1", "ln x + x."),
  num(S`Find the average rate of change of $y=\ln x$ on $[1,e]$ (4 decimals).`, 0.582, "1/(e − 1).", null, 0.0005),
];
export { easy as E, medium as M };

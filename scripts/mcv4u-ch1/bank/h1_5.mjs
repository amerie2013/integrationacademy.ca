// 1.5 Introduction to Derivatives — 20 hard questions
import { mc, num, tf, mx } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "1.5 Introduction to Derivatives";
export const Q = [
  mx(String.raw`Find $f'(x)$ for $f(x)=\frac1{x-2}$.`, "-1/(x-2)^2", "−1/((x + h − 2)(x − 2))."),
  mx(String.raw`Find $f'(x)$ for $f(x)=\sqrt{x+4}$.`, "1/(2*sqrt(x+4))", "Rationalize."),
  num(String.raw`$f(x)=ax^2+bx$ has $f'(0)=3$ and $f'(1)=7$. Find $a$.`, 2, "f′(x) = 2ax + b: b = 3, 2a + 3 = 7."),
  num(String.raw`At what positive $x$ is the tangent to $y=x^3-27x$ horizontal?`, 3, "3x² − 27 = 0."),
  num(String.raw`Find the y-intercept of the tangent to $y=\sqrt x$ at $x=9$.`, 1.5, "Slope 1/6 through (9, 3).", null, 0.0001),
  mc("The graph of f is a cubic rising, then falling between x = −1 and x = 2, then rising. Which describes f′?", "a parabola opening up with zeros at −1 and 2", ["a parabola opening down with zeros at −1 and 2", "a line crossing zero at 0.5", "a cubic"], "f′ > 0, then < 0, then > 0.", graph((x) => (2 * x ** 3 - 3 * x * x - 12 * x) / 6, { xmin: -3, xmax: 4, ymin: -4, ymax: 4 })),
  tf(String.raw`$f(x)=\sqrt[3]{x}$ has no derivative at $x=0$.`, true, "Vertical tangent."),
  num(String.raw`For $f(x)=\frac1{x^2}$, find $f'(1)$.`, -2, "−2/x³."),
  mx(String.raw`Find $f'(x)$ for $f(x)=x^4-2x^2$.`, "4*x^3-4*x", "Term by term from first principles."),
  num(String.raw`At what $x$ is the tangent to $y=x^2$ parallel to $y=6x+1$?`, 3, "2x = 6."),
  num(String.raw`The tangent to $y=x^3$ at $x=1$ meets the curve again at what $x$?`, -2, "x³ − 3x + 2 = (x − 1)²(x + 2).", planeDoc({ view: { xmin: -3, xmax: 2, ymin: -9, ymax: 5 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => 3 * x - 2, color: "green" }], points: [P(1, 1)], step: { x: 1, y: 1 } })),
  num("The tangent at x = 2 is drawn on the graph. Read f′(2) from it.", 1.5, "It passes through (2, 1.5) and (4, 4.5): 3 ÷ 2.", graph((x) => 0.375 * x * x, { xmin: -1, xmax: 5, ymin: -1, ymax: 8 }, [P(2, 1.5), P(4, 4.5)], { more: [{ f: (x) => 1.5 + 1.5 * (x - 2), color: "green" }] }), 0.001),
  num(String.raw`A circle's area is $A=\pi r^2$. Find the rate of change of area with respect to radius at $r=3$ (2 decimals).`, 18.85, "2πr = 6π.", null, 0.01),
  mx(String.raw`Find $f'(x)$ for $f(x)=x^3+3x^2+3x$.`, "3*x^2+6*x+3", "Term by term."),
  num(String.raw`Find $c$ so that the tangent to $y=x^2+c$ at $x=1$ passes through the origin.`, 1, "Tangent y − (1 + c) = 2(x − 1); at (0, 0): c = 1."),
  num(String.raw`For $f(x)=\frac1{\sqrt x}$, find $f'(4)$ (4 decimals).`, -0.0625, "−1/(2x^{3/2}) = −1/16.", null, 0.0001),
  num("At how many points is the function graphed not differentiable?", 2, "Corners at x = ±1.", graph((x) => Math.abs(x * x - 1), { xmin: -2.5, xmax: 2.5, ymin: -1, ymax: 5 })),
  tf("If f′(a) exists, then f is continuous at a.", true, "Differentiable implies continuous."),
  num(String.raw`For $f(x)=x|x|$, find $f'(0)$.`, 0, "(h|h|)/h = |h| → 0."),
  num(String.raw`At what positive $x$ are the tangents to $y=x^2$ and $y=x^4$ parallel? (4 decimals)`, 0.7071, "2x = 4x³ → x² = ½.", null, 0.0005),
];

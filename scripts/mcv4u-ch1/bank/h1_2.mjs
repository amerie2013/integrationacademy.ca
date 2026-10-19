// 1.2 Rates of Change Using Equations — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "1.2 Rates of Change Using Equations";
export const Q = [
  num(String.raw`Find the instantaneous rate of change of $f(x)=\frac1{x-1}$ at $x=3$.`, -0.25, "−1/((2 + h)(2)) → −¼.", null, 0.0001),
  num(String.raw`Find the instantaneous rate of change of $f(x)=\sqrt{x+3}$ at $x=1$.`, 0.25, "1/(√(4 + h) + 2) → ¼.", null, 0.0001),
  num(String.raw`At what x does the tangent to $y=x^2-5x$ have slope 3?`, 4, "2a − 5 = 3.", graph((x) => x * x - 5 * x, { xmin: -1, xmax: 6, ymin: -8, ymax: 6 }, [], { step: { x: 1, y: 2 } })),
  num(String.raw`Find the instantaneous rate of change of $f(x)=x^4$ at $x=-1$.`, -4, "4a³ at −1."),
  num(String.raw`$f(x)=x^2+bx$ has instantaneous rate 0 at $x=3$. Find $b$.`, -6, "6 + b = 0."),
  num(String.raw`Find the y-intercept of the tangent to $y=\frac1x$ at $x=2$.`, 1, "Slope −¼ through (2, ½): y = −¼x + 1."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=\frac{x}{x+1}$ at $x=0$.`, 1, "f = 1 − 1/(x + 1); rate 1/(x + 1)²."),
  num("The tangent to y = x³ at x = 1 is drawn. At what other x does it meet the curve?", -2, "y = 3x − 2; x³ − 3x + 2 = (x − 1)²(x + 2).", graph((x) => x ** 3, { xmin: -3, xmax: 2, ymin: -9, ymax: 5 }, [P(1, 1)], { more: [{ f: (x) => 3 * x - 2, color: "green" }] })),
  num(String.raw`Find the instantaneous rate of change of $f(x)=\frac3{x^2}$ at $x=1$.`, -6, "−6/x³ at 1."),
  tf(String.raw`For $f(x)=|x|$ and $h>0$, the difference quotient at $a=0$ equals 1.`, true, "|h|/h = 1."),
  num(String.raw`For which positive $a$ are the instantaneous rates of $x^2$ and $x^3$ equal? (4 decimals)`, 0.6667, "2a = 3a².", null, 0.0005),
  num(String.raw`An object's position is $s(t)=t^3-12t$ m. At what positive time is its velocity 0?`, 2, "3t² − 12 = 0."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=(2x+1)^2$ at $x=0$.`, 4, "4(2x + 1) at 0."),
  num(String.raw`Evaluate the difference quotient of $x^3$ at $a=1$ with $h=0.01$ (4 decimals).`, 3.0301, "(1.030301 − 1) ÷ 0.01.", null, 0.0001),
  mc(String.raw`For $f(x)=\sqrt x$, the rationalized difference quotient is:`, String.raw`$\dfrac1{\sqrt{x+h}+\sqrt x}$`, [String.raw`$\dfrac1{\sqrt{x+h}-\sqrt x}$`, String.raw`$\sqrt{h}$`, String.raw`$\dfrac{h}{\sqrt x}$`], "(x + h − x)/(h(√(x + h) + √x))."),
  num(String.raw`Find the instantaneous rate of change of $f(x)=x^2-4x+7$ at $x=2$.`, 0, "The vertex.", graph((x) => x * x - 4 * x + 7, { xmin: -1, xmax: 5, ymin: 0, ymax: 10 }, [], { step: { x: 1, y: 1 } })),
  num("The graph of y = x³ − 3x is shown. At what positive x is the tangent horizontal?", 1, "Rate 3a² − 3 = 0.", graph((x) => x ** 3 - 3 * x, { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 })),
  num("A square's side is x cm. Find the instantaneous rate of change of its area with respect to x when x = 5.", 10, "Rate of x² is 2x."),
  num("A cube's edge is x cm. Find the instantaneous rate of change of its volume when x = 2.", 12, "Rate of x³ is 3x²."),
  num("The tangent to y = x² at (1, 1) is drawn. Where does it cross the x-axis?", 0.5, "y = 2x − 1.", planeDoc({ view: { xmin: -1, xmax: 2.5, ymin: -2, ymax: 4 }, curves: [{ f: (x) => x * x, color: "violet" }, { f: (x) => 2 * x - 1, color: "green" }], points: [P(1, 1)], step: { x: 0.5, y: 1 } }), 0.0001),
];

// 5.3 Derivatives of Exponential Functions — 20 hard questions
import { mc, num, tf, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const E = Math.E;
export const TOPIC = "5.3 Derivatives of Exponential Functions";
export const Q = [
  num(S`$y=e^{kx}$ satisfies $y''-5y'+6y=0$. Find the larger value of $k$.`, 3, "k² − 5k + 6 = 0."),
  mx(S`Differentiate $y=e^x\cdot e^{2x}\cdot e^{3x}$.`, "6*exp(6*x)", "The product is e^(6x)."),
  num("A line through the origin is tangent to y = e^(3x) (graph shown). At what x does it touch (4 decimals)?", 0.3333, "Tangent at a: y = e^(3a)(1 + 3(x − a)); at x = 0: 1 − 3a = 0.", graph((x) => Math.exp(3 * x), { xmin: -1.5, xmax: 0.8, ymin: -0.5, ymax: 6 }, [P(1 / 3, E)], { more: [{ f: (x) => 3 * E * x, color: "green", a: -0.1, b: 0.7 }], step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`Find the tenth derivative of $y=e^{2x}$ at $x=0$.`, 1024, "Each derivative multiplies by 2: 2¹⁰."),
  tf(S`$y=(x^2+1)e^{-x}$ is never increasing.`, true, "y′ = −e^(−x)(x − 1)² ≤ 0."),
  num("The graph of y = xeˣ is shown. Find the y-coordinate of its inflection point (4 decimals).", -0.2707, "y″ = (x + 2)eˣ changes sign at x = −2; y = −2/e².", graph((x) => x * Math.exp(x), { xmin: -6, xmax: 1, ymin: -0.6, ymax: 1.5 }, [P(-1, -1 / E, false), P(-2, -2 / E ** 2)], { step: { x: 0.5, y: 0.25 } }), 0.0005),
  mc(S`Which function satisfies $y'=-3y$?`, S`$y=5e^{-3x}$`, [S`$y=-3e^x$`, S`$y=e^{3x}$`, S`$y=-3x^2$`], "y = Ce^(−3x)."),
  num(S`For $y=\frac{e^x}{e^x+e^{-x}}$, find $y'(0)$.`, 0.5, "Divide by eˣ: 1/(1 + e^(−2x)); derivative 2e^(−2x)/(1 + e^(−2x))².", null, 0.0001),
  num(S`At what $x$ do $y=2^x$ and $y=3^x$ have equal slopes (4 decimals)?`, -1.1359, "2ˣ ln 2 = 3ˣ ln 3 ⇒ x = ln(ln 3/ln 2)/ln(2/3).", null, 0.0005),
  tf(S`$\frac{d}{dx}\left(e^x\right)^x=2xe^{x^2}$.`, true, "(eˣ)ˣ = e^(x²)."),
  num("The curves y = eˣ and y = 4e^(−x) meet as shown. What is the product of their slopes there?", -4, "Meet at x = ln 2 where both equal 2; slopes 2 and −2.", graph(Math.exp, { xmin: -1.5, xmax: 2.5, ymin: -0.5, ymax: 7 }, [P(Math.log(2), 2)], { more: [{ f: (x) => 4 * Math.exp(-x), color: "blue" }], step: { x: 0.5, y: 1 } })),
  num(S`Find the minimum value of $y=e^{2x}-4e^x$.`, -4, "2e^(2x) − 4eˣ = 0 ⇒ eˣ = 2; 4 − 8."),
  mx(S`Differentiate $y=e^{x\ln3}$.`, "3^x*ln(3)", "e^(x ln 3) = 3ˣ."),
  num(S`Evaluate $\displaystyle\lim_{h\to0}\frac{e^{2+h}-e^2}{h}$ (3 decimals).`, 7.389, "The slope of eˣ at x = 2.", null, 0.002),
  num(S`Where does the normal to $y=e^x$ at $x=0$ cross the x-axis?`, 1, "Normal slope −1 through (0, 1): y = 1 − x."),
  num(S`For $y=5^x e^x$, find $y'(0)$ (4 decimals).`, 2.6094, "(5e)ˣ; slope at 0 is ln(5e) = 1 + ln 5.", null, 0.0005),
  num(S`For $y=e^{\tan x}$, find $y'\left(\frac\pi4\right)$ (4 decimals).`, 5.4366, "sec²x · e^(tan x) = 2e.", null, 0.0005),
  num("The graph of y = 3ˣ − 2x is shown. Find its minimum value (4 decimals).", 0.7298, "3ˣ ln 3 = 2 at x ≈ 0.5453; value 2/ln 3 − 2x.", graph((x) => 3 ** x - 2 * x, { xmin: -2, xmax: 2, ymin: -0.5, ymax: 6 }, [P(0.5453, 0.7298)], { step: { x: 0.5, y: 1 } }), 0.0005),
  mc(S`What is $\displaystyle\lim_{x\to\infty}\frac{e^x}{x^{100}}$?`, S`$\infty$`, ["0", "1", "100"], "Exponentials outgrow every power."),
  num(S`$y=Ae^{kx}$ has $y(0)=5$ and $y'(0)=-10$. Find $y(2)$ (4 decimals).`, 0.0916, "A = 5, k = −2: 5e^(−4).", null, 0.0005),
];

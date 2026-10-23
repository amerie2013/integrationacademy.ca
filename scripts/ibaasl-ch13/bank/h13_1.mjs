// 13.1 The Chain, Product and Quotient Rules — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;

export const TOPIC = "13.1 The Chain, Product and Quotient Rules";
export const Q = [
  num(S`The graph of $y=x^2e^{-x^2}$ is shown. Find the positive x-coordinate of its maximum points.`, 1, "y′ = 2xe^{−x²}(1 − x²).", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -0.1, ymax: 0.5 }, curves: [{ f: (x) => x * x * Math.exp(-x * x) }], points: [P(1, Math.exp(-1), "", "red"), P(-1, Math.exp(-1), "", "red")], step: { x: 1, y: 0.1 } })),
  num(S`Find the maximum value of $y=x^2e^{-x^2}$ (3 d.p.).`, Math.round(Math.exp(-1) * 1000) / 1000, "At x = ±1: e⁻¹.", null, 0.001),
  num(S`Find the x-coordinate of the stationary point of $y=\frac{\ln x}{\sqrt x}$ (3 d.p.).`, Math.round(Math.exp(2) * 1000) / 1000, "y′ = (1 − ½ ln x)/x^{3/2} ⇒ ln x = 2.", null, 0.001),
  num(S`$y=(x-1)^2(x+2)^3$ has stationary points at $x=1$, $x=-2$ and one more. Find it.`, -0.2, "y′ = (x − 1)(x + 2)²(5x + 1).", null, 0.001),
  num(S`$f(2)=3$, $f'(2)=4$, $g(1)=2$, $g'(1)=5$. Find $\frac{d}{dx}f(g(x))$ at $x=1$.`, 20, "f′(g(1))·g′(1) = 4 · 5."),
  num(S`With $g(1)=2$ and $g'(1)=5$, find the derivative of $h(x)=x\,g(x)$ at $x=1$.`, 7, "g(1) + 1·g′(1)."),
  num(S`The tangent to $y=xe^{x-1}$ at $x=1$ meets the x-axis at x = ?`, 0.5, "y = 1, slope 2: y = 2x − 1.", null, 0.001),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=\frac{e^{-x}}{1+x}$.`, -2, "[−e^{−x}(1 + x) − e^{−x}]/(1 + x)²."),
  mc(S`If $y=\frac{u}{v}$ where $v=u^2$, then $\frac{dy}{dx}$ equals:`, S`$-\frac{u'}{u^2}$`, [S`$\frac{u'}{u^2}$`, S`$\frac{1}{2u}$`, S`$-\frac{2u'}{u^3}$`], "y = 1/u."),
  tf(S`$y=(x+1)e^{-x}$ is decreasing for every $x>0$.`, true, "y′ = −xe^{−x} < 0."),
  ms(S`Which are x-coordinates of stationary points of $y=(x^2-4)^2$? Select all.`, ["−2", "0", "2", "4"], [0, 1, 2], "y′ = 4x(x² − 4)."),
  num(S`The graph of $y=x\sqrt{4-x^2}$ is shown. Find its maximum value.`, 2, "y′ = (4 − 2x²)/√(4 − x²) ⇒ x = √2, y = √2·√2.", planeDoc({ view: { xmin: -2.2, xmax: 2.2, ymin: -2.5, ymax: 2.5 }, curves: [{ f: (x) => x * Math.sqrt(4 - x * x), a: -2, b: 2 }], points: [P(Math.SQRT2, 2, "", "red")], step: { x: 0.5, y: 0.5 } })),
  num(S`Find $\frac{dy}{dx}$ at $x=\sqrt3$ for $y=\ln\left(x+\sqrt{x^2+1}\right)$.`, 0.5, "It simplifies to 1/√(x² + 1).", null, 0.001),
  num(S`Find $\frac{d^2y}{dx^2}$ at $x=0$ for $y=(2x+1)^5$.`, 80, "y″ = 80(2x + 1)³."),
  num(S`The graph of $y=\frac{x^2+3}{x-1}$ is shown. Find the y-value of its local maximum.`, -2, "y′ = (x² − 2x − 3)/(x − 1)²: x = −1 gives y = −2.", planeDoc({ view: { xmin: -5, xmax: 6, ymin: -10, ymax: 14 }, curves: [{ f: (x) => (x * x + 3) / (x - 1) }], points: [P(-1, -2, "", "red"), P(3, 6, "", "blue")], step: { x: 1, y: 2 } })),
  num(S`A population follows $y=\frac{100}{1+9e^{-0.5t}}$ (graph shown). Find its growth rate at $t=0$.`, 4.5, "y′ = 450e^{−0.5t}/(1 + 9e^{−0.5t})².", planeDoc({ view: { xmin: 0, xmax: 14, ymin: 0, ymax: 110 }, curves: [{ f: (t) => 100 / (1 + 9 * Math.exp(-0.5 * t)) }], points: [P(0, 10, "", "red")], step: { x: 2, y: 10 } }), 0.01),
  mc(S`$\frac{d}{dx}\left[x^2f(x)\right]$ equals:`, S`$2xf(x)+x^2f'(x)$`, [S`$2xf'(x)$`, S`$x^2f'(x)$`, S`$2xf(x)$`], "Product rule."),
  num(S`Find $\frac{dy}{dx}$ at $x=1$ for $y=(3x-2)^{-2}$.`, -6, "−6(3x − 2)^{−3}."),
  num(S`$y=2e^{ax}$ has gradient 6 at $x=0$. Find a.`, 3, "y′(0) = 2a."),
  num(S`Find the x-coordinate of the minimum of $y=x^4\ln x$ (4 d.p.).`, Math.round(Math.exp(-0.25) * 10000) / 10000, "4x³ ln x + x³ = 0 ⇒ ln x = −¼.", null, 0.0001),
];

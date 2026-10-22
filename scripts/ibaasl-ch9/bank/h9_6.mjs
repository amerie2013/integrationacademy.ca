// 9.6 Derivatives of Exponential and Logarithmic Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const d3 = (v) => Math.round(v * 1000) / 1000;

export const TOPIC = "9.6 Derivatives of Exponential and Logarithmic Functions";
export const Q = [
  num(S`Find the x-coordinate of the maximum of $y=xe^{-x/2}$.`, 2, "e^(−x/2)(1 − x/2) = 0.", planeDoc({ view: { xmin: -1, xmax: 10, ymin: -0.3, ymax: 1 }, curves: [{ f: (x) => x * Math.exp(-x / 2) }], points: [P(2, 2 / Math.E, "", "red")], step: { x: 1, y: 0.2 } })),
  num(S`Find the maximum value of $y=xe^{-x/2}$ (3 d.p.).`, d3(2 / Math.E), "At x = 2: 2e⁻¹.", null, 0.001),
  num(S`Find the x-coordinate of the minimum of $y=x^2-8\ln x$, $x>0$.`, 2, "2x − 8/x = 0 ⇒ x² = 4."),
  num(S`Find the minimum value of $f(x)=e^{x}+e^{-x}$.`, 2, "f′ = eˣ − e⁻ˣ = 0 at x = 0; f(0) = 2.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: 0, ymax: 10 }, curves: [{ f: (x) => Math.exp(x) + Math.exp(-x) }], points: [P(0, 2, "", "red")], step: { x: 1, y: 1 } })),
  num(S`The tangent to $y=\ln x$ passes through the origin. Find the x-coordinate of the point of contact (3 d.p.).`, d3(Math.E), "y − ln a = (x − a)/a through (0, 0) ⇒ ln a = 1.", null, 0.001),
  num(S`The normal to $y=e^{2x}$ at $x=0$ meets the x-axis at $(k,0)$. Find $k$.`, 2, "Gradient 2, normal −½: y = −x/2 + 1."),
  num(S`Find the gradient of $y=\dfrac{e^{x}}{x}$ at $x=2$ (3 d.p.).`, d3(Math.exp(2) / 4), "Quotient/product: eˣ(x − 1)/x² = e²/4.", null, 0.001),
  mc(S`Differentiate $y=x^2e^{3x}$.`, S`$xe^{3x}(2+3x)$`, [S`$6xe^{3x}$`, S`$2xe^{3x}$`, S`$x^2e^{3x}(2+3x)$`], "Product rule: 2xe^(3x) + 3x²e^(3x)."),
  mc(S`Differentiate $y=e^{x}\ln x$.`, S`$e^x\left(\ln x+\frac1x\right)$`, [S`$\frac{e^x}{x}$`, S`$e^x\ln x$`, S`$e^x+\frac1x$`], "Product rule."),
  mc(S`Differentiate $y=\ln(e^{x}+1)$.`, S`$\dfrac{e^x}{e^x+1}$`, [S`$\dfrac{1}{e^x+1}$`, S`$1$`, S`$\dfrac{e^x+1}{e^x}$`], "g′/g."),
  mc(S`If $y=e^{kx}$ satisfies $\frac{d^2y}{dx^2}=16y$, then $k$ can be:`, S`$4$`, [S`$16$`, S`$2$`, S`$8$`], "k² = 16."),
  tf(S`For $y=\ln(x^2)$ ($x>0$), $\frac{dy}{dx}=\frac2x$.`, true, "ln x² = 2 ln x."),
  ms(S`For $f(x)=xe^{x}$, which are true? Select all.`, [S`$f'(x)=(x+1)e^x$`, "f has a minimum at x = −1", S`$f''(x)=(x+2)e^x$`, "f has a maximum at x = −1"], [0, 1, 2], "f″(−1) = e⁻¹ > 0: minimum."),
  mc("The graph shows y = x ln x. Its minimum is at:", S`$x=e^{-1}$`, [S`$x=1$`, S`$x=e$`, S`$x=0$`], "ln x + 1 = 0.", planeDoc({ view: { xmin: -0.2, xmax: 3, ymin: -0.6, ymax: 2.5 }, curves: [{ f: (x) => x * Math.log(x), a: 0.001, b: 3 }], points: [P(Math.exp(-1), -Math.exp(-1), "", "red")], step: { x: 0.5, y: 0.5 } })),
  num(S`A sample decays as $M=80e^{-0.1t}$. At what time is it decaying at 2 g per year (2 d.p.)?`, Math.round((Math.log(4) / 0.1) * 100) / 100, "8e^(−0.1t) = 2 ⇒ e^(−0.1t) = 0.25.", null, 0.01),
  num(S`For $N=1000e^{kt}$, $\frac{dN}{dt}=60$ when $t=0$. Find $k$.`, 0.06, "1000k = 60.", null, 0.0001),
  mc("The graph shows y = eˣ and the tangent from the origin. The point of contact is:", S`$(1,e)$`, [S`$(0,1)$`, S`$(e,1)$`, S`$(2,e^2)$`], "eᵃ = a eᵃ ⇒ a = 1.", planeDoc({ view: { xmin: -2, xmax: 2.5, ymin: -1, ymax: 8 }, curves: [{ f: Math.exp }], lines: [{ m: Math.E, b: 0, color: "red", dash: true }], points: [P(1, Math.E, "", "red")], step: { x: 0.5, y: 1 } })),
  num(S`Find the y-coordinate of the stationary point of $y=e^{2x}-4e^{x}$.`, -4, "2e^(2x) − 4eˣ = 0 ⇒ eˣ = 2; y = 4 − 8."),
  num(S`The curve $y=ae^{x}+bx$ has a stationary point at $(0,3)$. Find $b$.`, -3, "a = 3; a + b = 0."),
  mc(S`$\frac{d}{dx}\left(2^{x}\cdot3^{x}\right)$ equals:`, S`$6^x\ln6$`, [S`$6^x$`, S`$x6^{x-1}$`, S`$2^x3^x\ln2\ln3$`], "2ˣ3ˣ = 6ˣ."),
];

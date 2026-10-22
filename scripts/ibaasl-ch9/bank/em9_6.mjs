// 9.6 Derivatives of Exponential and Logarithmic Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const d3 = (v) => Math.round(v * 1000) / 1000;

export const E = [
  mc(S`$\frac{d}{dx}e^x=$`, S`$e^x$`, [S`$xe^{x-1}$`, S`$e$`, S`$\frac{1}{x}$`], "eˣ is its own derivative."),
  mc(S`$\frac{d}{dx}\ln x=$`, S`$\frac1x$`, [S`$\ln x$`, S`$e^x$`, S`$x\ln x$`], "Derivative of ln x."),
  mc(S`$\frac{d}{dx}e^{4x}=$`, S`$4e^{4x}$`, [S`$e^{4x}$`, S`$4xe^{4x-1}$`, S`$e^{4}$`], "Multiply by 4."),
  mc(S`$\frac{d}{dx}\ln(3x)=$`, S`$\frac1x$`, [S`$\frac3x$`, S`$\frac1{3x}$`, S`$3\ln x$`], "ln 3x = ln 3 + ln x."),
  mc(S`$\frac{d}{dx}5^x=$`, S`$5^x\ln5$`, [S`$x5^{x-1}$`, S`$5^x$`, S`$\frac{5^x}{\ln5}$`], "aˣ ln a."),
  num(S`If $f(x)=e^x$, find $f'(0)$.`, 1, "e⁰ = 1."),
  num(S`If $f(x)=4e^x$, find $f'(0)$.`, 4, "4e⁰."),
  num(S`If $f(x)=\ln x$, find $f'(4)$.`, 0.25, "1/4.", null, 0.001),
  num(S`If $f(x)=2\ln x$, find $f'(5)$.`, 0.4, "2/5.", null, 0.001),
  num(S`If $f(x)=e^{2x}$, find $f'(0)$.`, 2, "2e⁰."),
  num(S`If $f(x)=e^{-x}$, find $f'(0)$.`, -1, "−e⁰."),
  mc(S`Differentiate $y=3e^x+x^2$.`, S`$3e^x+2x$`, [S`$3xe^{x-1}+2x$`, S`$e^x+2x$`, S`$3e^x+x$`], "3eˣ + 2x."),
  mc(S`Differentiate $y=\ln x+5x$.`, S`$\frac1x+5$`, [S`$\ln x+5$`, S`$\frac5x$`, S`$\frac1x+5x$`], "1/x + 5."),
  tf(S`The gradient of $y=e^x$ at any point equals the y-coordinate of that point.`, true, "dy/dx = eˣ = y."),
  tf(S`$\frac{d}{dx}e^{x^2}=e^{x^2}$.`, false, "Chain rule: 2x e^(x²)."),
  fill(S`$\frac{d}{dx}\ln(g(x))=\dfrac{g'(x)}{\_\_\_}$.`, ["g(x)", "g"], "Chain rule for ln."),
  mc("The tangent to y = eˣ at (0, 1) has gradient:", "1", ["0", "e", "2"], "e⁰ = 1.", planeDoc({ view: { xmin: -3, xmax: 2, ymin: -1, ymax: 6 }, curves: [{ f: Math.exp }], lines: [{ m: 1, b: 1, color: "red", dash: true }], points: [P(0, 1, "", "red")], step: { x: 1, y: 1 } })),
  mc("The tangent to y = ln x at x = 1 has equation:", S`$y=x-1$`, [S`$y=x$`, S`$y=x+1$`, S`$y=1$`], "Gradient 1 through (1, 0).", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -3, ymax: 3 }, curves: [{ f: Math.log, a: 0.01, b: 5 }], lines: [{ m: 1, b: -1, color: "red", dash: true }], points: [P(1, 0, "", "red")], step: { x: 1, y: 1 } })),
  ms("Which have derivative eˣ? Select all.", [S`$e^x$`, S`$e^x+7$`, S`$e^{x+1}$`, S`$e^x-x$`], [0, 1], "e^(x+1) has derivative e^(x+1)."),
  num(S`For $A=100e^{0.05t}$, find $\frac{dA}{dt}$ at $t=0$.`, 5, "0.05 × 100."),
];

export const M = [
  mc(S`Differentiate $y=e^{3x+2}$.`, S`$3e^{3x+2}$`, [S`$e^{3x+2}$`, S`$(3x+2)e^{3x+1}$`, S`$3e^{3x}$`], "Chain: 3e^(3x+2)."),
  mc(S`Differentiate $y=\ln(x^2+1)$.`, S`$\dfrac{2x}{x^2+1}$`, [S`$\dfrac{1}{x^2+1}$`, S`$\dfrac{1}{2x}$`, S`$2x\ln(x^2+1)$`], "g′/g."),
  mc(S`Differentiate $y=e^{x^2}$.`, S`$2xe^{x^2}$`, [S`$e^{x^2}$`, S`$x^2e^{x^2-1}$`, S`$e^{2x}$`], "Chain."),
  mc(S`Differentiate $y=\ln(5x-1)$.`, S`$\dfrac{5}{5x-1}$`, [S`$\dfrac{1}{5x-1}$`, S`$\dfrac1x$`, S`$5\ln(5x-1)$`], "g′/g."),
  num(S`If $f(x)=e^{0.5x}$, find $f'(2)$ (3 d.p.).`, d3(0.5 * Math.E), "0.5e¹.", null, 0.001),
  num(S`If $f(x)=\ln(2x+3)$, find $f'(1)$.`, 0.4, "2/(2 + 3).", null, 0.001),
  num(S`If $f(x)=3^{x}$, find $f'(2)$ (3 d.p.).`, d3(9 * Math.log(3)), "9 ln 3.", null, 0.001),
  num(S`Find the gradient of $y=e^{x}-3x$ at $x=0$.`, -2, "1 − 3."),
  num(S`Find the x-coordinate of the stationary point of $y=e^{x}-5x$ (3 d.p.).`, d3(Math.log(5)), "eˣ = 5.", null, 0.001),
  num(S`Find the x-coordinate of the stationary point of $y=x-2\ln x$.`, 2, "1 − 2/x = 0."),
  mc(S`The tangent to $y=e^{x}$ at $x=1$ is:`, S`$y=ex$`, [S`$y=ex+1$`, S`$y=x+e$`, S`$y=e(x+1)$`], "y − e = e(x − 1)."),
  mc(S`The normal to $y=\ln x$ at $x=1$ is:`, S`$y=-x+1$`, [S`$y=x-1$`, S`$y=-x-1$`, S`$y=1-\frac x2$`], "Tangent gradient 1; normal −1 through (1, 0)."),
  mc(S`$\frac{d}{dx}\left(xe^x\right)=$`, S`$(1+x)e^x$`, [S`$e^x$`, S`$xe^x$`, S`$xe^{x-1}$`], "Product rule."),
  mc(S`$\frac{d}{dx}\left(x\ln x\right)=$`, S`$\ln x+1$`, [S`$\frac1x$`, S`$\ln x$`, S`$x+\ln x$`], "Product rule."),
  tf(S`$y=e^{x}$ has no stationary points.`, true, "eˣ is never 0."),
  tf(S`$y=\ln x$ has a maximum.`, false, "1/x > 0: always increasing."),
  num(S`A population $P=500e^{0.04t}$. Find the rate of growth when $t=10$ (2 d.p.).`, Math.round(20 * Math.exp(0.4) * 100) / 100, "20e^0.4.", null, 0.01),
  mc("The graph shows y = eˣ − 2x. Its minimum is at x = ?", S`$\ln2$`, [S`$2$`, S`$0$`, S`$e^2$`], "eˣ − 2 = 0.", planeDoc({ view: { xmin: -2, xmax: 2.5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.exp(x) - 2 * x }], points: [P(Math.log(2), 2 - 2 * Math.log(2), "", "red")], step: { x: 0.5, y: 1 } })),
  mc("The graph shows y = ln x and its tangent at x = 2. The tangent's gradient is:", S`$\frac12$`, [S`$2$`, S`$\ln2$`, S`$1$`], "1/x at x = 2.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -3, ymax: 3 }, curves: [{ f: Math.log, a: 0.01, b: 6 }], lines: [{ m: 0.5, b: Math.log(2) - 1, color: "red", dash: true }], points: [P(2, Math.log(2), "", "red")], step: { x: 1, y: 1 } })),
  ms(S`For $f(x)=e^{-2x}$, which are true? Select all.`, [S`$f'(x)=-2e^{-2x}$`, "f is decreasing", S`$f''(x)=4e^{-2x}$`, "f has a minimum at x = 0"], [0, 1, 2], "f′ < 0 everywhere, so no stationary point."),
];

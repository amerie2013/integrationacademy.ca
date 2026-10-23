// 13.1 The Chain, Product and Quotient Rules — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;

export const E = [
  mc("Which function needs the chain rule?", S`$(x^2+4)^7$`, [S`$x^2+4$`, S`$7x$`, S`$x^7$`], "A function inside a power."),
  mc("The product rule says (uv)′ equals:", S`$u'v+uv'$`, [S`$u'v'$`, S`$u'v-uv'$`, S`$\frac{u'}{v'}$`], "Differentiate one factor at a time."),
  mc("The quotient rule says (u/v)′ equals:", S`$\frac{u'v-uv'}{v^2}$`, [S`$\frac{uv'-u'v}{v^2}$`, S`$\frac{u'}{v'}$`, S`$\frac{u'v+uv'}{v^2}$`], "Top first."),
  mc(S`$\frac{d}{dx}(3x+5)^2$ equals:`, S`$6(3x+5)$`, [S`$2(3x+5)$`, S`$3(3x+5)$`, S`$6x$`], "2(3x + 5) · 3."),
  mc(S`$\frac{d}{dx}e^{6x}$ equals:`, S`$6e^{6x}$`, [S`$e^{6x}$`, S`$6xe^{6x}$`, S`$\frac16e^{6x}$`], "Inner derivative 6."),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=(2x+1)^4$.`, 8, "8(2x + 1)³."),
  num(S`Find $\frac{dy}{dx}$ at $x=5$ for $y=\ln(2x)$.`, 0.2, "2/(2x) = 1/x.", null, 0.001),
  num(S`Find $\frac{dy}{dx}$ at $x=1$ for $y=\sqrt{x+8}$ (4 d.p.).`, 1 / 6, "1/(2√(x + 8)).", null, 0.0001),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=(x+1)e^x$.`, 2, "eˣ + (x + 1)eˣ."),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=\frac{x}{x+1}$.`, 1, "1/(x + 1)²."),
  tf(S`$(uv)'=u'v'$.`, false, "Use u′v + uv′."),
  tf(S`$\frac{d}{dx}\ln(5x)=\frac1x$.`, true, "5/(5x)."),
  tf(S`$\frac{d}{dx}(x^3+1)^2=2(x^3+1)$.`, false, "Missing the inner derivative 3x²."),
  fill(S`In $y=(4x-1)^5$ the inner function is $u=$ ___.`, ["4x-1", "4x − 1", "4x - 1"], "The bracket."),
  ms("Which need the product rule? Select all.", [S`$(x+1)\ln x$`, S`$x^3(x-2)^4$`, S`$e^{3x}$`, S`$\ln(x^2+1)$`], [0, 1], "Products of two functions of x."),
  mc("The graph shows y = (x − 1)³ and its tangent at x = 2. The slope of the tangent is:", "3", ["1", "6", "0"], "3(x − 1)² = 3.", planeDoc({ view: { xmin: -1, xmax: 3.5, ymin: -4, ymax: 5 }, curves: [{ f: (x) => (x - 1) ** 3 }], lines: [{ m: 3, b: -5, color: "amber", dash: true }], points: [P(2, 1, "", "red")], step: { x: 1, y: 1 } })),
  mc(S`The graph of $y=\frac{e^x}{x^2+1}$ has a horizontal tangent at x =`, "1", ["0", "−1", "2"], S`y′ = eˣ(x − 1)²/(x² + 1)².`, planeDoc({ view: { xmin: -3, xmax: 3, ymin: -0.5, ymax: 4 }, curves: [{ f: (x) => Math.exp(x) / (x * x + 1) }], points: [P(1, Math.E / 2, "", "red")], step: { x: 1, y: 1 } })),
  num(S`Find $\frac{dy}{dx}$ at $x=4$ for $y=(5-x)^3$.`, -3, "−3(5 − x)²."),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=e^{x/4}$.`, 0.25, "¼e^{x/4}.", null, 0.001),
  mc(S`$\frac{d}{dx}\frac{1}{x+2}$ equals:`, S`$-\frac{1}{(x+2)^2}$`, [S`$\frac{1}{(x+2)^2}$`, S`$\ln(x+2)$`, S`$-\frac{1}{x+2}$`], "(x + 2)⁻¹ with the chain rule."),
];

export const M = [
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=x(x+2)^3$.`, 8, "(x + 2)³ + 3x(x + 2)²."),
  num(S`Find $\frac{dy}{dx}$ at $x=1$ for $y=\frac{x^2}{2x+1}$ (4 d.p.).`, 4 / 9, "(2x² + 2x)/(2x + 1)².", null, 0.0001),
  num(S`Find $\frac{dy}{dx}$ at $x=1$ for $y=\ln(x^2+4x)$.`, 1.2, "(2x + 4)/(x² + 4x).", null, 0.001),
  num(S`Find $\frac{dy}{dx}$ at $x=2$ for $y=e^{x^2-4x}$.`, 0, "(2x − 4)e^{x² − 4x}."),
  num(S`Find $\frac{dy}{dx}$ at $x=1$ for $y=x^3\ln x$.`, 1, "3x² ln x + x²."),
  num(S`Find $\frac{dy}{dx}$ at $x=1$ for $y=\frac{x-1}{x+1}$.`, 0.5, "2/(x + 1)².", null, 0.001),
  mc(S`$\frac{d}{dx}(x^2+1)^{-1}$ equals:`, S`$-\frac{2x}{(x^2+1)^2}$`, [S`$-\frac{1}{(x^2+1)^2}$`, S`$\frac{2x}{(x^2+1)^2}$`, S`$-(x^2+1)^{-2}$`], "Chain rule."),
  mc(S`$\frac{d}{dx}\left(3xe^{4x}\right)$ equals:`, S`$3e^{4x}(1+4x)$`, [S`$12e^{4x}$`, S`$3e^{4x}+4xe^{4x}$`, S`$12xe^{4x}$`], "3e^{4x} + 12xe^{4x}."),
  mc(S`$\frac{d}{dx}\sqrt{1-x^2}$ equals:`, S`$-\frac{x}{\sqrt{1-x^2}}$`, [S`$\frac{1}{2\sqrt{1-x^2}}$`, S`$-\frac{2x}{\sqrt{1-x^2}}$`, S`$\frac{x}{\sqrt{1-x^2}}$`], "½(1 − x²)^{−½}(−2x)."),
  tf(S`$\frac{d}{dx}[f(x)]^2=2f(x)f'(x)$.`, true, "Chain rule with outer u²."),
  tf(S`$\frac{d}{dx}\ln(x^2+1)=\frac{1}{x^2+1}$.`, false, "Missing the factor 2x."),
  num(S`Find the x-coordinate of the stationary point of $y=(x-2)e^x$.`, 1, "y′ = (x − 1)eˣ."),
  num(S`Find the positive x-coordinate of the stationary point of $y=\frac{x}{x^2+9}$.`, 3, "y′ = (9 − x²)/(x² + 9)²."),
  num(S`Find the gradient of $y=(x^2-1)^3$ at $x=-2$.`, -108, "6x(x² − 1)²."),
  ms(S`Which expressions equal $\frac{d}{dx}\frac{x}{x+1}$? Select all.`, [S`$\frac{1}{(x+1)^2}$`, S`$\frac{(x+1)-x}{(x+1)^2}$`, S`$\frac{1}{x+1}$`, S`$\frac{x}{(x+1)^2}$`], [0, 1], "Quotient rule."),
  mc(S`The graph of $y=\frac{x+1}{x^2}$ is shown. Its stationary point is at x =`, "−2", ["−1", "0", "2"], S`y′ = −(x + 2)/x³.`, planeDoc({ view: { xmin: -5, xmax: 3, ymin: -1, ymax: 4 }, curves: [{ f: (x) => (x + 1) / (x * x) }], points: [P(-2, -0.25, "", "red")], step: { x: 1, y: 1 } })),
  mc(S`The graph of $y=(\ln x)^2$ is shown. Its minimum is at x =`, "1", ["0", "e", "½"], S`y′ = 2 ln x / x.`, planeDoc({ view: { xmin: 0, xmax: 5, ymin: -0.5, ymax: 3 }, curves: [{ f: (x) => Math.log(x) ** 2 }], points: [P(1, 0, "", "red")], step: { x: 1, y: 0.5 } })),
  num(S`Find $\frac{dy}{dx}$ at $x=0$ for $y=e^{3x}(x-1)$.`, -2, "e^{3x}(3x − 2)."),
  num(S`Find $\frac{dy}{dx}$ at $x=1$ for $y=\sqrt{4-x^2}$ (4 d.p.).`, -1 / Math.sqrt(3), "−x/√(4 − x²).", null, 0.0001),
  num(S`Find the gradient of the normal to $y=(x+3)^2$ at $x=-1$.`, -0.25, "Tangent slope 4.", null, 0.001),
];

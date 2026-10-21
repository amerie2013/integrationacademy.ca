// 5.3 Differentiation Rules — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  mx(S`Differentiate $y=x^8$.`, "8*x^7", "Power rule."),
  mx(S`Differentiate $y=4x^5$.`, "20*x^4", "4 × 5x⁴."),
  mx(S`Differentiate $f(x)=x^2+6x-1$.`, "2*x+6", "Term by term."),
  mx(S`Differentiate $f(x)=3x^3-5x$.`, "9*x^2-5", "Term by term."),
  num(S`What is the derivative of $y=-11$?`, 0, "A constant."),
  num(S`For $f(x)=x^4$, find $f'(2)$.`, 32, "4x³ = 32."),
  num(S`For $f(x)=2x^2-7x$, find $f'(1)$.`, -3, "4x − 7."),
  num(S`For $y=5x-7$, find $\frac{dy}{dx}$.`, 5, "The gradient of the line."),
  mc(S`$\frac{d}{dx}(x^{-1})$ equals:`, S`$-x^{-2}$`, [S`$x^{-2}$`, S`$-x^{0}$`, S`$\ln x$`], "−1 · x⁻²."),
  mc(S`$\frac{d}{dx}(\sqrt x)$ equals:`, S`$\frac{1}{2\sqrt x}$`, [S`$2\sqrt x$`, S`$\frac{1}{\sqrt x}$`, S`$\frac{\sqrt x}{2}$`], "½x^(−½)."),
  tf(S`$\frac{d}{dx}(x^2+5)=\frac{d}{dx}(x^2)$.`, true, "The constant differentiates to 0."),
  tf(S`The normal at a point is perpendicular to the tangent.`, true, "By definition."),
  fill(S`If the tangent has gradient $m\ne0$, the normal has gradient ___.`, ["-1/m", "−1/m", "-1/m."], "Negative reciprocal."),
  num(S`The tangent to a curve at a point has gradient 5. What is the gradient of the normal?`, -0.2, "−1/5.", null, 1e-9),
  num(S`For $y=x^3$, find the gradient at $x=-1$.`, 3, "3x² = 3."),
  num("The tangent to y = x² − 2x at x = 3 is drawn. Find its gradient.", 4, "y′ = 2x − 2 = 4.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 9 }, curves: [{ f: (x) => x * x - 2 * x }, { f: (x) => 4 * x - 9, color: "red" }], points: [P(3, 3)] })),
  num("The graph of y = x³ − 3x is shown. Find the gradient at the marked point x = 2.", 9, "3x² − 3 = 9.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 3 * x }], points: [P(2, 2)] })),
  mx(S`Differentiate $y=\frac{x^2}{2}$.`, "x", "½ × 2x."),
  num(S`For $f(x)=x^2-8x$, find $x$ where $f'(x)=0$.`, 4, "2x − 8 = 0."),
  num(S`For $y=6x^2$, find $\frac{dy}{dx}$ at $x=0.5$.`, 6, "12x."),
];

export const M = [
  mx(S`Differentiate $y=\frac{4}{x^2}$.`, "-8/x^3", "4x⁻² → −8x⁻³."),
  mx(S`Differentiate $y=6\sqrt x$.`, "3/sqrt(x)", "3x^(−½)."),
  mx(S`Differentiate $f(x)=(x-2)(x+5)$.`, "2*x+3", "x² + 3x − 10."),
  mx(S`Differentiate $f(x)=\frac{x^3-4x}{x}$ for $x\ne0$.`, "2*x", "x² − 4."),
  num(S`For $y=\frac{2}{x}$, find $\frac{dy}{dx}$ at $x=-1$.`, -2, "−2/x²."),
  num(S`For $y=x^{3/2}$, find $\frac{dy}{dx}$ at $x=4$.`, 3, "1.5√x = 3."),
  num(S`Find the y-intercept of the tangent to $y=x^2+1$ at $x=3$.`, -8, "Point (3, 10), m = 6: y = 6x − 8."),
  num(S`Find the gradient of the normal to $y=x^3$ at $x=1$.`, -1 / 3, "Tangent gradient 3.", null, 1e-3),
  num(S`Find the x-coordinate where $y=x^2-9x$ has gradient 5.`, 7, "2x − 9 = 5."),
  ms(S`Which have derivative $2x$? Select all.`, [S`$x^2$`, S`$x^2+7$`, S`$(x+1)^2$`, S`$x^2-\pi$`], [0, 1, 3], "(x + 1)² = x² + 2x + 1 has derivative 2x + 2."),
  num(S`For $f(x)=x^3-6x^2$, find the sum of the x-values where the tangent is horizontal.`, 4, "3x² − 12x = 0: x = 0, 4."),
  num(S`The gradient of $y=kx^3$ at $x=2$ is 36. Find $k$.`, 3, "12k = 36."),
  num(S`Find the tangent to $y=\frac{12}{x}$ at $x=2$ in the form $y=mx+c$. Give $c$.`, 12, "Point (2, 6), m = −12/4 = −3: y = −3x + 12."),
  tf(S`$\frac{d}{dx}\big((x+1)(x-1)\big)=1\times1$.`, false, "It is the derivative of x² − 1, i.e. 2x."),
  num("The tangent and normal to y = x² at the marked point are shown. Find the y-intercept of the normal.", 4.5, "At (2, 4): normal gradient −¼: y = −x/4 + 4.5.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -1, ymax: 9 }, curves: [{ f: (x) => x * x }, { f: (x) => 4 * x - 4, color: "red" }, { f: (x) => -0.25 * x + 4.5, color: "green" }], points: [P(2, 4)] }), 1e-9),
  num("The tangent shown touches y = x³ − 2x² at x = 2. Find where it crosses the x-axis.", 2, "y′ = 3x² − 4x = 4 at x = 2; point (2, 0): tangent y = 4x − 8.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -4, ymax: 8 }, curves: [{ f: (x) => x ** 3 - 2 * x * x }, { f: (x) => 4 * x - 8, color: "red" }], points: [P(2, 0)] })),
  num(S`For $f(x)=2x^3$, find the positive $x$ where $f'(x)=24$.`, 2, "6x² = 24."),
  mc(S`The derivative of $\frac{1}{\sqrt x}$ is:`, S`$-\frac{1}{2}x^{-3/2}$`, [S`$\frac12x^{-1/2}$`, S`$-x^{-1/2}$`, S`$-\frac12x^{-1/2}$`], "x^(−½) → −½x^(−3/2)."),
  num(S`For $y=x^2-4x+7$, find the y-coordinate where the tangent is horizontal.`, 3, "x = 2: 4 − 8 + 7."),
  num(S`For $f(x)=ax^2+bx$ with $f'(x)=6x-4$, find $a+b$.`, -1, "a = 3, b = −4."),
];

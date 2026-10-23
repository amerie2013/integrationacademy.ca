// 13.3 Applications of Derivatives — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI;

export const E = [
  mc("A tangent has slope 4. The normal at the same point has slope:", S`$-\frac14$`, ["4", "−4", S`$\frac14$`], "Negative reciprocal."),
  mc("A stationary point is where:", S`$f'(x)=0$`, [S`$f(x)=0$`, S`$f''(x)=0$`, S`$f'(x)=1$`], "Horizontal tangent."),
  mc(S`At a stationary point $f''(a)>0$. The point is a:`, "minimum", ["maximum", "point of inflection", "zero"], "Concave up."),
  mc(S`At a stationary point $f''(a)<0$. The point is a:`, "maximum", ["minimum", "point of inflection", "zero"], "Concave down."),
  mc("A point of inflection is where:", "f″ changes sign", ["f′ = 0 always", "f = 0", "f′ changes sign"], "Concavity changes."),
  num(S`Find the gradient of the tangent to $y=e^{2x}$ at $x=0$.`, 2, "2e^{2x}."),
  num(S`Find the gradient of the tangent to $y=\ln x$ at $x=4$.`, 0.25, "1/x.", null, 0.001),
  num(S`Find the gradient of the normal to $y=2\sin x$ at $x=0$.`, -0.5, "Tangent slope 2.", null, 0.001),
  num(S`Find the x-coordinate of the stationary point of $y=e^x-x$.`, 0, "eˣ − 1 = 0."),
  num(S`The tangent to $y=e^x$ at $x=0$ has y-intercept:`, 1, "y = x + 1."),
  tf(S`If $f'(a)=0$ then f must have a maximum or a minimum at a.`, false, "It may be a stationary point of inflection."),
  tf("The normal at a point is perpendicular to the tangent there.", true, "Definition."),
  tf(S`$y=e^x$ has no stationary points.`, true, "eˣ > 0."),
  fill("If the tangent slope is m (m ≠ 0), the normal slope is ___.", ["-1/m", "−1/m"], "Negative reciprocal."),
  ms("Which functions have a stationary point at x = 0? Select all.", [S`$\cos x$`, S`$x^2$`, S`$e^x$`, S`$\sin x$`], [0, 1], "Their derivatives are 0 at x = 0."),
  mc("The graph shows y = cos x + 1 on [0, 2π]. The point at x = π is a:", "minimum", ["maximum", "point of inflection", "zero gradient inflection"], "Lowest point.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -0.5, ymax: 2.5 }, curves: [{ f: (x) => Math.cos(x) + 1 }], points: [P(PI, 0, "", "red")], step: { x: PI / 2, y: 0.5 } })),
  mc(S`The graph shows $y=e^x+e^{-x}$. Its turning point is a:`, "minimum at (0, 2)", ["maximum at (0, 2)", "minimum at (0, 1)", "point of inflection"], S`y′ = eˣ − e⁻ˣ = 0 at x = 0.`, planeDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: 0, ymax: 7 }, curves: [{ f: (x) => Math.exp(x) + Math.exp(-x) }], points: [P(0, 2, "", "red")], step: { x: 1, y: 1 } })),
  num(S`Find the gradient of the tangent to $y=3\ln x$ at $x=1$.`, 3, "3/x."),
  num(S`Find the gradient of the normal to $y=x^2$ at $x=1$.`, -0.5, "Tangent slope 2.", null, 0.001),
  mc(S`The stationary points of $y=\sin x$ on $[0,2\pi]$ are at:`, S`$\frac{\pi}{2},\frac{3\pi}{2}$`, [S`$0,\pi,2\pi$`, S`$\frac{\pi}{4},\frac{5\pi}{4}$`, S`$\pi$ only`], "cos x = 0."),
];

export const M = [
  num(S`The tangent to $y=e^x$ at $x=1$ meets the x-axis at x = ?`, 0, "y = e + e(x − 1) = ex."),
  num(S`Find the x-coordinate of the stationary point of $y=x-5\ln x$.`, 5, "1 − 5/x = 0."),
  num(S`Find the minimum value of $y=2x-4\ln x$ (3 d.p.).`, Math.round((4 - 4 * Math.log(2)) * 1000) / 1000, "x = 2.", null, 0.001),
  num(S`Find the maximum value of $y=4\sin x-2x$ for $0\le x\le\pi$ (3 d.p.).`, Math.round((2 * Math.sqrt(3) - (2 * PI) / 3) * 1000) / 1000, "cos x = ½ ⇒ x = π/3.", null, 0.001),
  num(S`Find the positive x-coordinate of the point of inflection of $y=e^{-x^2/2}$.`, 1, "y″ = (x² − 1)e^{−x²/2}."),
  mc(S`The stationary point of $y=\cos x$ at $x=\pi$ is a:`, "minimum", ["maximum", "point of inflection", "not stationary"], "y″ = −cos π = 1 > 0."),
  mc(S`At $x=0$, $y=x-\sin x$ has:`, "a stationary point of inflection", ["a maximum", "a minimum", "no stationary point"], "y′ = 1 − cos x = 0 and y″ = sin x changes sign."),
  num(S`The tangent to $y=\sin x$ at $x=\frac{\pi}{2}$ has y-intercept:`, 1, "Horizontal tangent y = 1."),
  num(S`The normal to $y=e^x$ at $x=0$ meets the x-axis at x = ?`, 1, "Normal y = −x + 1."),
  tf(S`$y=x+\sin x$ has no maximum or minimum points.`, true, "y′ = 1 + cos x ≥ 0; its stationary points are inflections."),
  tf(S`Every point where $f''(x)=0$ is a point of inflection.`, false, "f″ must change sign."),
  num("A rectangle has a diagonal of 10 cm making angle θ with a side. Find its greatest area.", 50, "A = 100 sin θ cos θ = 50 sin 2θ."),
  num(S`Find the greatest value of $\sin x\cos x$.`, 0.5, "½ sin 2x.", null, 0.001),
  num("A triangle has sides 6 cm and 9 cm with angle θ between them. Find its greatest area.", 27, "½ · 6 · 9 · sin θ."),
  ms(S`For $y=\sin x-\cos x$ on $[0,2\pi]$, which are stationary points? Select all.`, [S`$\frac{3\pi}{4}$`, S`$\frac{7\pi}{4}$`, S`$\frac{\pi}{4}$`, S`$\frac{5\pi}{4}$`], [0, 1], "cos x + sin x = 0 ⇒ tan x = −1."),
  mc(S`The graph of $y=x^2-2\ln x$ is shown. Its minimum is at x =`, "1", ["2", "e", "½"], "2x − 2/x = 0.", planeDoc({ view: { xmin: 0, xmax: 3, ymin: -0.5, ymax: 6 }, curves: [{ f: (x) => x * x - 2 * Math.log(x) }], points: [P(1, 1, "", "red")], step: { x: 0.5, y: 1 } })),
  mc(S`The graph of $y=x^2e^{-x/2}$ is shown. Its local maximum is at x =`, "4", ["2", "8", "1"], "e^{−x/2}(2x − x²/2) = 0.", planeDoc({ view: { xmin: -1, xmax: 14, ymin: -0.3, ymax: 2.6 }, curves: [{ f: (x) => x * x * Math.exp(-x / 2) }], points: [P(4, 16 * Math.exp(-2), "", "red")], step: { x: 2, y: 0.5 } })),
  num(S`The tangent to $y=\ln x$ at $(1,0)$ has y-intercept:`, -1, "y = x − 1."),
  num(S`Find the x-coordinate where $y=e^{2x}$ has gradient 2.`, 0, "2e^{2x} = 2."),
  num(S`A profit is $P=100xe^{-0.1x}$. Find the x that maximises P.`, 10, "100e^{−0.1x}(1 − 0.1x) = 0."),
];

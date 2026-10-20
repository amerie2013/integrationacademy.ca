// 5.4 Differentiation Rules for Exponential Functions — 20 hard questions
import { mc, num, tf, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const E = Math.E;
export const TOPIC = "5.4 Differentiation Rules for Exponential Functions";
export const Q = [
  num(S`For $y=x^{x^2}$, find $y'(2)$ (2 decimals).`, 76.36, "ln y = x² ln x; y′ = 16(4 ln 2 + 2).", null, 0.01),
  num("The graph of y = x³e^(−x/2) for x ≥ 0 is shown. Find its maximum value (4 decimals).", 10.754, "y′ = e^(−x/2)(3x² − x³/2) = 0 at x = 6; 216e^(−3).", graph((x) => x ** 3 * Math.exp(-x / 2), { xmin: -0.5, xmax: 20, ymin: -1, ymax: 12 }, [P(6, 216 * Math.exp(-3))], { a: 0, step: { x: 2, y: 2 } }), 0.0005),
  mx(S`Use logarithmic differentiation: $y=\frac{(x+1)^2(x-2)^3}{e^x}$.`, "(x+1)^2*(x-2)^3*exp(-x)*(2/(x+1)+3/(x-2)-1)", "ln y = 2 ln(x + 1) + 3 ln(x − 2) − x; multiply y′/y by y."),
  num(S`For $y=(\sin x)^x$, $0\lt x\lt\pi$, find $y'\left(\frac\pi2\right)$.`, 0, "y′/y = ln sin x + x cot x = 0 + 0 at π/2."),
  num(S`Find the larger x-coordinate of the inflection points of $y=x^2e^{2x}$ (4 decimals).`, -0.2929, "y″ = (4x² + 8x + 2)e^(2x); x = −1 ± √2/2.", null, 0.0005),
  num("The graph of y = 4xe^(−x²) is shown. Find its maximum value (4 decimals).", 1.7155, "y′ = 4e^(−x²)(1 − 2x²) = 0 at x = 1/√2; value 2√2 e^(−½).", graph((x) => 4 * x * Math.exp(-x * x), { xmin: -3, xmax: 3, ymin: -2.2, ymax: 2.2 }, [P(Math.SQRT1_2, 1.7155), P(-Math.SQRT1_2, -1.7155)], { step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`For $y=e^x(\sin x+\cos x)$, find $y'(0)$.`, 2, "y′ = 2eˣ cos x."),
  mc(S`If $y=f(x)^{g(x)}$ with $f\gt0$, then $y'=$`, S`$f^g\left(g'\ln f+\frac{gf'}{f}\right)$`, [S`$g\,f^{g-1}f'$`, S`$f^g\ln f\cdot g'$`, S`$f^g\left(g'\ln f+gf'\right)$`], "Differentiate ln y = g ln f and multiply by y."),
  num(S`For $y=(1+x)^{1/x}$, find $y'(1)$ (4 decimals).`, -0.3863, "ln y = ln(1 + x)/x; y′/y = ½ − ln 2 and y = 2.", null, 0.0005),
  tf(S`$x^e\lt e^x$ for every $x\gt0$ except $x=e$.`, true, "Compare e ln x with x: (ln x)/x has its maximum 1/e at x = e."),
  num("A tangent to y = eˣ passes through (0, −1) (graph shown). At what x does it touch the curve (4 decimals)?", 1.2785, "Tangent at a meets x = 0 at eᵃ(1 − a) = −1; solve (a − 1)eᵃ = 1 numerically.", graph(Math.exp, { xmin: -1.5, xmax: 2.2, ymin: -1.5, ymax: 7 }, [P(1.2785, 3.5911), P(0, -1)], { more: [{ f: (x) => -1 + 3.5911 * x, color: "green", a: -0.1, b: 2.1 }], step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`A spring's position is $s(t)=5e^{-0.5t}\sin t$ cm. Find its velocity at $t=0$.`, 5, "s′ = 5e^(−0.5t)(cos t − 0.5 sin t)."),
  mx(S`Differentiate $y=\ln\frac{e^x}{1+e^x}$.`, "1/(1+exp(x))", "x − ln(1 + eˣ); then 1 − eˣ/(1 + eˣ)."),
  num(S`At what $x\gt0$ does $y=\frac{e^x}{x^3}$ have its minimum?`, 3, "y′ = eˣ(x − 3)/x⁴."),
  num(S`At what $x$ does $y=\frac{\ln x}{x^3}$ have its maximum (4 decimals)?`, 1.3956, "y′ = (1 − 3 ln x)/x⁴ = 0 at x = e^(1/3).", null, 0.0005),
  tf(S`$y=\frac{e^{2x}}{x}$ is concave up for every $x\gt0$.`, true, "y″ = e^(2x)(4x² − 4x + 2)/x³ > 0."),
  num(S`For $y=(2x)^x$, find $y'\left(\frac12\right)$.`, 1, "ln y = x ln 2x; y′/y = ln 2x + 1 = 1 and y = 1."),
  num("The graph of y = (x − 1)²eˣ is shown. Find its local maximum value (4 decimals).", 1.4715, "y′ = (x − 1)(x + 1)eˣ; local max at x = −1: 4/e.", graph((x) => (x - 1) ** 2 * Math.exp(x), { xmin: -5, xmax: 1.8, ymin: -0.3, ymax: 2.5 }, [P(-1, 4 / E), P(1, 0)], { step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`For $y=e^x\sin(2x)$, find $y''(0)$.`, 4, "y′ = eˣ(sin 2x + 2 cos 2x), y″ = eˣ(4 cos 2x − 3 sin 2x)."),
  mc(S`What is $\displaystyle\lim_{x\to0^+}x^x$?`, "1", ["0", S`$e$`, "it does not exist"], "x ln x → 0, so xˣ → e⁰."),
];

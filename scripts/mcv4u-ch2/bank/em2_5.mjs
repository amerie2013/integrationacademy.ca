// 2.5 Derivatives of Quotients — 20 easy + 20 medium questions
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

const S = String.raw;
/** rational curve split at its vertical asymptotes */
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const V1 = { xmin: -4, xmax: 4, ymin: -4, ymax: 4 };
const V2 = { xmin: -1, xmax: 5, ymin: -4, ymax: 12 };

export const E = [
  mc(S`Which is the quotient rule?`, S`$\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}$`, [S`$\left(\frac uv\right)'=\frac{uv'-u'v}{v^2}$`, S`$\left(\frac uv\right)'=\frac{u'}{v'}$`, S`$\left(\frac uv\right)'=\frac{u'v+uv'}{v^2}$`], "Low d-high minus high d-low, over low squared."),
  tf(S`$\left(\frac uv\right)'=\frac{u'}{v'}$.`, false, "Try u = x², v = x: (x)′ = 1, but 2x/1 = 2x."),
  mx(S`Differentiate $y=\frac1x$.`, "-1/x^2", "x⁻¹ → −x⁻²."),
  mx(S`Differentiate $y=\frac1{x+3}$.`, "-1/(x+3)^2", "u′ = 0, so −v′/v²."),
  num(S`For $y=\frac{x}{x+4}$, find $y'(0)$.`, 0.25, "4/(x + 4)² at 0.", null, 0.0001),
  num(S`For $y=\frac1{x-1}$, find $y'(2)$.`, -1, "−1/(x − 1)²."),
  mc(S`Where is $\frac{x+1}{x-4}$ not defined?`, S`$x=4$`, [S`$x=-1$`, S`$x=0$`, S`$x=1$`], "Denominator zero."),
  num(S`For $y=\frac{x+2}{x}$, find $y'(1)$.`, -2, "1 + 2x⁻¹ → −2x⁻²."),
  fill("Quotient rule memory aid: low d-high minus high d-low, over low ___.", ["squared"], "The denominator is v²."),
  num(S`For $y=\frac2{x+1}$, find $y'(1)$.`, -0.5, "−2/(x + 1)² at 1.", null, 0.0001),
  mx(S`Differentiate $y=\frac{x}{x+5}$.`, "5/(x+5)^2", "(x + 5) − x over (x + 5)²."),
  num(S`For $f(x)=\frac4{x^2}$, find $f'(1)$.`, -8, "4x⁻² → −8x⁻³."),
  tf(S`The denominator $v^2$ in the quotient rule is never negative.`, true, "A square."),
  num(S`For $y=\frac{x-2}{x+2}$, find $y'(0)$.`, 1, "4/(x + 2)² at 0."),
  num("The graph of y = 1/x is shown. Find the slope of the tangent at x = 2.", -0.25, "−1/x² at 2.", planeDoc({ view: V1, curves: [...rat((x) => 1 / x, [0], V1), { f: (x) => 1 - 0.25 * x, color: "green" }], points: [P(2, 0.5)], step: { x: 1, y: 1 } }), 0.0001),
  num(S`At a point, $u=3$, $u'=2$, $v=1$, $v'=4$. Find $\left(\frac uv\right)'$ there.`, -10, "(2 · 1 − 3 · 4)/1²."),
  num(S`For $y=\frac{x^2}{x+3}$, find $y'(0)$.`, 0, "(2x(x + 3) − x²)/(x + 3)² at 0."),
  num(S`For $y=\frac{2x}{x+1}$, find $y'(1)$.`, 0.5, "2/(x + 1)² at 1.", null, 0.0001),
  mx(S`Differentiate $y=\frac{x+4}{x-1}$.`, "-5/(x-1)^2", "(x − 1) − (x + 4) = −5."),
  num("The graph of y = (x + 1)/(x + 2) is shown. Find the slope of the tangent at x = 0.", 0.25, "1/(x + 2)² at 0.", planeDoc({ view: V1, curves: [...rat((x) => (x + 1) / (x + 2), [-2], V1), { f: (x) => 0.5 + 0.25 * x, color: "green" }], vlines: [{ x: -2, color: "red", dash: true }], points: [P(0, 0.5)], step: { x: 1, y: 1 } }), 0.0001),
];

export const M = [
  mx(S`Differentiate $y=\frac{3x+1}{x-2}$.`, "-7/(x-2)^2", "3(x − 2) − (3x + 1) = −7."),
  num(S`For $y=\frac{x^2+1}{x+1}$, find $y'(1)$.`, 0.5, "(x² + 2x − 1)/(x + 1)² at 1: 2/4.", null, 0.0001),
  num(S`For $y=\frac1{x^2+4}$, find $y'(2)$ (4 decimals).`, -0.0625, "−2x/(x² + 4)² at 2: −4/64.", null, 0.0001),
  num(S`At what positive $x$ is the tangent to $y=\frac{2x}{x^2+9}$ horizontal?`, 3, "Numerator 18 − 2x² = 0."),
  num("The tangent to y = (x + 1)/(x − 1) at x = 2 is drawn. Find its y-intercept.", 7, "y(2) = 3; y′ = −2/(x − 1)² = −2; y = −2x + 7.", planeDoc({ view: V2, curves: [...rat((x) => (x + 1) / (x - 1), [1], V2), { f: (x) => 7 - 2 * x, color: "green" }], vlines: [{ x: 1, color: "red", dash: true }], points: [P(2, 3)], step: { x: 1, y: 2 } })),
  num(S`$f(1)=6$, $f'(1)=2$, $g(1)=3$, $g'(1)=1$. Find $\left(\frac fg\right)'(1)$.`, 0, "(2 · 3 − 6 · 1)/9."),
  mc(S`Which is the derivative of $\frac{x^2}{x-1}$?`, S`$\dfrac{x^2-2x}{(x-1)^2}$`, [S`$\dfrac{x^2+2x}{(x-1)^2}$`, S`$2x$`, S`$\dfrac{3x^2-2x}{(x-1)^2}$`], "(2x(x − 1) − x²)/(x − 1)²."),
  num(S`For $y=\frac{\sqrt x}{x}$, find $y'(4)$ by simplifying first (4 decimals).`, -0.0625, "y = x^(−½); y′ = −½x^(−3/2) = −1/16.", null, 0.0001),
  num(S`For $y=\frac{x^2-4}{x-2}$ ($x\ne2$), find $y'(5)$.`, 1, "It equals x + 2."),
  num(S`For $y=\frac{5x}{x^2+1}$, find $y'(0)$.`, 5, "(5(x² + 1) − 10x²)/(x² + 1)² at 0."),
  tf(S`$y=\frac{x+1}{x+2}$ is increasing on each part of its domain.`, true, "y′ = 1/(x + 2)² > 0."),
  num("How many horizontal tangents does y = (x² + 1)/x have?", 2, "y = x + 1/x; y′ = 1 − 1/x² = 0 at x = ±1.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -6, ymax: 6 }, curves: rat((x) => (x * x + 1) / x, [0], { xmin: -4, xmax: 4 }), points: [P(1, 2), P(-1, -2)], step: { x: 1, y: 1 } })),
  num(S`For $y=\frac{1-x}{1+x}$, find $y'(0)$.`, -2, "(−(1 + x) − (1 − x))/(1 + x)² at 0."),
  num(S`For $y=\frac{x^3}{x-1}$, find $y'(2)$.`, 4, "(3x²(x − 1) − x³)/(x − 1)² at 2: (12 − 8)/1."),
  num(S`For $y=\frac{2x+3}{x^2}$, find $y'(1)$.`, -8, "2x⁻¹ + 3x⁻² → −2x⁻² − 6x⁻³."),
  num(S`For $y=\frac{x-3}{x+3}$, find $y'(3)$ (4 decimals).`, 0.1667, "6/(x + 3)² at 3.", null, 0.0005),
  num(S`The average cost is $A(x)=\frac{200+5x}{x}$ dollars per item. Find $A'(10)$.`, -2, "A = 200/x + 5; A′ = −200/x²."),
  num("A concentration is C(t) = 5t/(t² + 1) mg/L (graph shown). At what time is it greatest?", 1, "Numerator of C′: 5(t² + 1) − 10t² = 5 − 5t².", graph((t) => (5 * t) / (t * t + 1), { xmin: 0, xmax: 6, ymin: 0, ymax: 3 }, [P(1, 2.5)], { a: 0, b: 6, step: { x: 1, y: 0.5 } })),
  mx(S`Differentiate $y=\frac{x}{x-3}$.`, "-3/(x-3)^2", "(x − 3) − x = −3."),
  num(S`For $y=\frac{x+4}{x-4}$, find the slope of the tangent at $x=5$.`, -8, "−8/(x − 4)² at 5."),
];

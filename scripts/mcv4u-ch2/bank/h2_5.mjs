// 2.5 Derivatives of Quotients — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

const S = String.raw;
/** rational curve split at its vertical asymptotes */
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const VA = { xmin: -7, xmax: 5, ymin: -16, ymax: 10 };
const VB = { xmin: -3, xmax: 3, ymin: -6, ymax: 5 };
const VC = { xmin: -6, xmax: 8, ymin: -2, ymax: 3 };
const VD = { xmin: -1, xmax: 6, ymin: -1, ymax: 4 };

export const TOPIC = "2.5 Derivatives of Quotients";
export const Q = [
  num("The graph of y = (x² + 3)/(x + 1) is shown. Find the y-coordinate of its horizontal tangent with x > 0.", 2, "Numerator of y′: x² + 2x − 3 = (x + 3)(x − 1); y(1) = 2.", planeDoc({ view: VA, curves: rat((x) => (x * x + 3) / (x + 1), [-1], VA), vlines: [{ x: -1, color: "red", dash: true }], points: [P(1, 2), P(-3, -6)], step: { x: 1, y: 2 } })),
  num(S`Find the y-intercept of the normal to $y=\frac{x}{x+3}$ at $x=1$ (4 decimals).`, 5.5833, "Tangent slope 3/16, normal −16/3 through (1, ¼): y = −(16/3)x + 16/3 + ¼.", null, 0.0005),
  num(S`Find $a$ so that the tangent to $y=\frac{ax}{x+1}$ at $x=1$ has slope 2.`, 8, "y′ = a/(x + 1)²: a/4 = 2."),
  num("The average cost is A(x) = (x² + 64)/x (graph shown). Find the minimum average cost.", 16, "A = x + 64/x; A′ = 1 − 64/x² = 0 at x = 8; A(8) = 16.", graph((x) => (x * x + 64) / x, { xmin: 0, xmax: 25, ymin: 0, ymax: 40 }, [P(8, 16)], { a: 2, b: 25, step: { x: 5, y: 5 } })),
  num("A concentration is C(t) = 8t/(t² + 4) mg/L (graph shown). Find the maximum concentration.", 2, "Numerator of C′: 8(4 − t²) = 0 at t = 2; C(2) = 16/8.", graph((t) => (8 * t) / (t * t + 4), { xmin: 0, xmax: 10, ymin: 0, ymax: 2.5 }, [P(2, 2)], { a: 0, b: 10, step: { x: 1, y: 0.5 } })),
  num(S`$f(x)=x^2$, $g(2)=4$ and $g'(2)=-1$. Find $\left(\frac fg\right)'(2)$.`, 1.25, "(4 · 4 − 4 · (−1))/16 = 20/16.", null, 0.0001),
  tf(S`$y=\frac{3x+2}{x-1}$ has a horizontal tangent somewhere.`, false, "y′ = −5/(x − 1)² is never 0."),
  num("The tangent to y = (2x − 1)/(x + 1) at x = 0 is drawn. Where does it cross the x-axis? (4 decimals)", 0.3333, "y(0) = −1, y′ = 3/(x + 1)² = 3: y = 3x − 1.", planeDoc({ view: VB, curves: [...rat((x) => (2 * x - 1) / (x + 1), [-1], VB), { f: (x) => 3 * x - 1, color: "green" }], vlines: [{ x: -1, color: "red", dash: true }], points: [P(0, -1)], step: { x: 1, y: 1 } }), 0.0005),
  mc("The quotient rule can be derived by writing u/v as:", S`$u\cdot v^{-1}$ and using the product and chain rules`, [S`$u-v$ and using the sum rule`, S`$u^{-1}v$ and using the power rule only`, S`$\frac{u'}{v'}$`], "(uv⁻¹)′ = u′v⁻¹ − uv⁻²v′."),
  num(S`For $y=\frac{x^2-1}{x^2+1}$, find $y'(1)$.`, 1, "y′ = 4x/(x² + 1)²; at 1: 4/4."),
  num(S`A population is $P(t)=\frac{300t+100}{t+1}$. Find $P'(1)$.`, 50, "P′ = 200/(t + 1)²."),
  num("The graph of y = x/(x − 2)² is shown. At what x is its tangent horizontal?", -2, "y′ = −(x + 2)/(x − 2)³.", planeDoc({ view: VC, curves: rat((x) => x / (x - 2) ** 2, [2], VC), vlines: [{ x: 2, color: "red", dash: true }], points: [P(-2, -0.125)], step: { x: 1, y: 0.5 } })),
  num(S`An efficiency is $E(v)=\frac{10v}{v^2+25}$. At what positive $v$ is it greatest?`, 5, "Numerator 10(25 − v²) = 0."),
  num("The tangent to y = 1/x at x = a (a > 0) passes through (0, 1). Find a.", 2, "Tangent: y = −x/a² + 2/a; its y-intercept 2/a = 1.", planeDoc({ view: VD, curves: [...rat((x) => 1 / x, [0], VD), { f: (x) => 1 - x / 4, color: "green" }], points: [P(2, 0.5), P(0, 1)], step: { x: 1, y: 1 } })),
  num(S`How many horizontal tangents does $y=\frac{x^2-x+1}{x-1}$ have?`, 2, "Numerator of y′: x² − 2x = 0."),
  num(S`For $y=\frac1{x+1}$, find $y''(0)$.`, 2, "y′ = −(x + 1)⁻², y″ = 2(x + 1)⁻³."),
  num(S`At what $x$ is $y=\frac{\sqrt x}{x+4}$ greatest?`, 4, "Numerator of y′: (x + 4)/(2√x) − √x = (4 − x)/(2√x)."),
  tf(S`$\left(\frac1g\right)'=-\frac{g'}{g^2}$ wherever $g\ne0$.`, true, "Quotient rule with u = 1."),
  num(S`The average cost is $A(x)=\frac{1000+2x^2}{x}$. At what $x$ is it lowest? (2 decimals)`, 22.36, "2x² = 1000.", null, 0.01),
  num("The graph of y = (x + 1)/(x² + 3) is shown. Find the y-coordinate of its highest point.", 0.5, "Numerator of y′: −x² − 2x + 3 = −(x + 3)(x − 1); y(1) = 2/4.", graph((x) => (x + 1) / (x * x + 3), { xmin: -6, xmax: 6, ymin: -0.4, ymax: 0.7 }, [P(1, 0.5), P(-3, -1 / 6)], { step: { x: 1, y: 0.1 } }), 0.0001),
];

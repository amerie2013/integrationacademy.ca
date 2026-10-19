// 3.4 Simple Rational Functions — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { planeDoc, graph, P } from "./fig.mjs";

const S = String.raw;
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const VA = { xmin: -6, xmax: 6, ymin: -3, ymax: 4 };
const VB = { xmin: -5, xmax: 5, ymin: -6, ymax: 7 };
const VC = { xmin: -6, xmax: 8, ymin: -10, ymax: 12 };
export const TOPIC = "3.4 Simple Rational Functions";
export const Q = [
  num("The graph of f(x) = (x² − 1)/(x² − 9) is shown. Find its local maximum value (4 decimals).", 0.1111, "f = 1 + 8/(x² − 9); f′ = −16x/(x² − 9)²: max at 0, f = 1/9.", planeDoc({ view: VA, curves: rat((x) => (x * x - 1) / (x * x - 9), [-3, 3], VA), vlines: [{ x: -3, color: "red", dash: true }, { x: 3, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [P(0, 1 / 9)], step: { x: 1, y: 1 } }), 0.0005),
  num(S`Find the local minimum value of $f(x)=\frac{x^2+x+1}{x}$.`, 3, "f = x + 1 + 1/x: min at x = 1."),
  num(S`Find the local minimum value of $f(x)=\frac{x}{(x-1)^2}$.`, -0.25, "f′ = −(x + 1)/(x − 1)³: min at x = −1.", null, 0.0001),
  num(S`At what positive $x$ does $f(x)=\frac{1}{x^2+48}$ have an inflection point?`, 4, "f″ ∝ 3x² − 48."),
  num(S`Find the local maximum value of $f(x)=\frac{(x-1)^2}{x^2+1}$.`, 2, "f′ = 2(x − 1)(x + 1)/(x² + 1)²: max at x = −1, f = 4/2."),
  num("The graph of f(x) = (x² + 4)/(x² − 4) is shown. Find its local maximum value.", -1, "f = 1 + 8/(x² − 4): max at x = 0.", planeDoc({ view: VB, curves: rat((x) => (x * x + 4) / (x * x - 4), [-2, 2], VB), vlines: [{ x: -2, color: "red", dash: true }, { x: 2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [P(0, -1)], step: { x: 1, y: 1 } })),
  num(S`$f(x)=\frac{ax+b}{x+c}$ has vertical asymptote $x=-3$, horizontal asymptote $y=2$, and passes through $(0,1)$. Find $b$.`, 3, "c = 3, a = 2, b/3 = 1."),
  tf(S`If a rational function $f$ has a vertical asymptote at $x=a$ (from a non-cancelling factor), so does $f'$.`, true, "Differentiating keeps the factor in the denominator, squared."),
  num(S`Find the local minimum value of $f(x)=\frac{x^2-5x+6}{x-1}$ (4 decimals).`, -1.1716, "f = x − 4 + 2/(x − 1); min at x = 1 + √2: −3 + 2√2.", null, 0.0005),
  num(S`How many asymptotes (vertical plus oblique) does $f(x)=\frac{x^3}{x^2-1}$ have?`, 3, "x = ±1 and y = x."),
  num("A concentration is C(t) = 12t/(t² + 4) mg/L (graph shown). What is the highest concentration?", 3, "Numerator of C′: 12(4 − t²): max at t = 2, C = 24/8.", graph((t) => (12 * t) / (t * t + 4), { xmin: 0, xmax: 12, ymin: 0, ymax: 3.5 }, [P(2, 3)], { a: 0, b: 12, step: { x: 1, y: 0.5 } })),
  mc(S`Describe the graph of $f(x)=\frac{x^2+2x}{x+2}$.`, S`the line $y=x$ with a hole at $(-2,-2)$`, [S`a vertical asymptote at $x=-2$`, S`the line $y=x+2$`, S`a hole at $(0,0)$`], "x(x + 2)/(x + 2)."),
  num(S`Find the local maximum value of $f(x)=x+\frac{4}{x-2}$.`, -2, "f′ = 1 − 4/(x − 2)²: max at x = 0."),
  num(S`How many vertical asymptotes does $f(x)=\frac{x^2}{x^2+3x+2}$ have?`, 2, "(x + 1)(x + 2), no cancelling."),
  tf("A rational function can have two different horizontal asymptotes.", false, "Both ends behave like the same ratio of leading terms."),
  num("The graph of f(x) = (x² − x − 6)/(x − 1) is shown. Find its y-intercept.", 6, "f(0) = −6/(−1).", planeDoc({ view: VC, curves: rat((x) => (x * x - x - 6) / (x - 1), [1], VC), vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 1, b: 0, color: "red", dash: true }], points: [P(0, 6), P(3, 0), P(-2, 0)], step: { x: 1, y: 2 } })),
  num(S`Find the local maximum value of $f(x)=\frac{x-3}{x^2+7}$ (4 decimals).`, 0.0714, "Numerator of f′: −(x − 7)(x + 1): max at 7, f = 4/56.", null, 0.0005),
  num(S`The average cost is $A(x)=\frac{900+4x}{x}$ dollars per item. What value does it approach for large $x$?`, 4, "A = 4 + 900/x."),
  num(S`For $f(x)=\frac{4x-3}{2x+1}$, find $f'(0)$.`, 10, "f′ = (4 · 1 − (−3) · 2)/(2x + 1)² = 10/(2x + 1)²."),
  mc(S`For large $|x|$, $f(x)=\frac{x^2+1}{x-1}$ behaves like:`, S`$y=x+1$`, [S`$y=x$`, S`$y=1$`, S`$y=x-1$`], "x + 1 + 2/(x − 1)."),
];

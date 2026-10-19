// 3.5 Putting It All Together — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { planeDoc, graph, P } from "./fig.mjs";

const S = String.raw;
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const VC = { xmin: -6, xmax: 6, ymin: -10, ymax: 10 };
const VD = { xmin: -5, xmax: 8, ymin: -8, ymax: 16 };
export const TOPIC = "3.5 Putting It All Together";
export const Q = [
  num("The graph of f(x) = x⁴ − 4x³ − 8x² is shown. Find its absolute minimum value.", -128, "f′ = 4x(x − 4)(x + 1): f(4) = −128, f(−1) = −3.", graph((x) => x ** 4 - 4 * x ** 3 - 8 * x * x, { xmin: -2, xmax: 5.5, ymin: -140, ymax: 30 }, [P(4, -128), P(-1, -3), P(0, 0)], { step: { x: 1, y: 20 } })),
  num(S`Find the minimum value of $f(x)=x^{1/3}(x+3)$ (3 decimals).`, -2.044, "f′ = x^(−2/3)(4x + 3)/3: min at x = −0.75.", null, 0.005),
  num(S`Find the local minimum value of $f(x)=\frac{x^2-3x}{x+1}$.`, -1, "f = x − 4 + 4/(x + 1): min at x = 1."),
  mc(S`On an interval with $f'\gt0$ and $f''\gt0$, the graph is:`, "rising and bending upward", ["rising and bending downward", "falling and bending upward", "falling and bending downward"], "Increasing and concave up."),
  num(S`A cubic has its inflection point at $(1,2)$, slope $-3$ there, and leading coefficient 1. Find $f(0)$.`, 4, "f = (x − 1)³ − 3(x − 1) + 2."),
  num("The graph of f(x) = x(x − 2)³ is shown. What is its minimum value? (4 decimals)", -1.6875, "f′ = (x − 2)²(4x − 2): min at x = 0.5.", graph((x) => x * (x - 2) ** 3, { xmin: -0.8, xmax: 3, ymin: -3, ymax: 4 }, [P(0.5, -1.6875), P(2, 0), P(0, 0)], { step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`How many inflection points does $f(x)=x(x-2)^3$ have?`, 2, "f″ = 12(x − 2)(x − 1)."),
  tf(S`A polynomial of degree $n\ge2$ has at most $n-2$ inflection points.`, true, "f″ has degree n − 2."),
  num(S`How many asymptotes (vertical and horizontal) does $f(x)=\frac{x^2+2}{x^2-2}$ have?`, 3, "x = ±√2 and y = 1."),
  num("The graph of f(x) = x³/(x² − 3) is shown. Find the local minimum value.", 4.5, "f′ = x²(x² − 9)/(x² − 3)²: min at x = 3, f = 27/6.", planeDoc({ view: VC, curves: rat((x) => x ** 3 / (x * x - 3), [-Math.sqrt(3), Math.sqrt(3)], VC), vlines: [{ x: -Math.sqrt(3), color: "red", dash: true }, { x: Math.sqrt(3), color: "red", dash: true }], lines: [{ m: 1, b: 0, color: "red", dash: true }], points: [P(3, 4.5), P(-3, -4.5)], step: { x: 1, y: 2 } }), 0.0001),
  num(S`How many critical numbers does $f(x)=\frac{x^3}{x^2-3}$ have?`, 3, "x²(x² − 9) = 0: 0, ±3."),
  mc(S`$f'(x)=(x+2)(x-1)^2(x-4)$. Classify the critical numbers.`, S`max at $-2$, min at $4$, neither at $1$`, [S`min at $-2$, max at $4$, max at $1$`, S`max at $-2$, min at $1$, max at $4$`, S`neither at $-2$, min at $4$, max at $1$`], "Signs: +, −, −, +."),
  num(S`A cubic has a local maximum at $(0,6)$ and a local minimum at $(2,2)$. Find $f(-1)$.`, 2, "f = x³ − 3x² + 6."),
  tf("The graph of a rational function can cross its oblique asymptote.", true, "The remainder fraction can be zero at some x."),
  num(S`At what positive $x$ does $f(x)=\frac{x}{x^2+12}$ have an inflection point?`, 6, "f″ ∝ x(x² − 36)."),
  num("The graph of f(x) = (x + 1)²/(x − 1) is shown. Find its local minimum value.", 8, "f = x + 3 + 4/(x − 1): min at x = 3.", planeDoc({ view: VD, curves: rat((x) => (x + 1) ** 2 / (x - 1), [1], VD), vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 1, b: 3, color: "red", dash: true }], points: [P(3, 8), P(-1, 0)], step: { x: 1, y: 2 } })),
  num(S`Find the absolute minimum of $f(x)=x^4-6x^2+5$.`, -4, "x² = 3: 9 − 18 + 5."),
  mc(S`$f(2)=0$, $f'(2)=0$ and $f''(2)\gt0$. Near $x=2$ the graph:`, "touches the x-axis from above at a minimum", ["crosses the x-axis at an inflection point", "has a maximum on the x-axis", "has a vertical asymptote"], "Local minimum with value 0."),
  num(S`Find the horizontal asymptote of $f(x)=\frac{3x^3}{x^3+1}$: $y=\,?$`, 3, "Equal degrees."),
  num(S`Find the minimum value of $f(x)=x-\sqrt x$.`, -0.25, "f′ = 1 − 1/(2√x): min at x = 1/4.", null, 0.0001),
];

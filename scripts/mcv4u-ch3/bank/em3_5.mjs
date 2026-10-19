// 3.5 Putting It All Together — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc, graph, P } from "./fig.mjs";

const S = String.raw;
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const VM = { xmin: -5, xmax: 3, ymin: -9, ymax: 5 };

export const E = [
  num(S`Find the y-intercept of $f(x)=x^3-5x+7$.`, 7, "f(0)."),
  mc(S`Describe the end behaviour of $f(x)=x^4$.`, "rises at both ends", ["falls at both ends", "falls left, rises right", "rises left, falls right"], "Even degree, positive."),
  mc(S`What symmetry does $f(x)=x^4+x^2$ have?`, "even (y-axis)", ["odd (origin)", "both", "none"], "f(−x) = f(x)."),
  num(S`How many x-intercepts does $f(x)=x^2-9$ have?`, 2, "±3."),
  tf("At a local extremum of a smooth graph, the tangent is horizontal.", true, "f′ = 0 there."),
  num(S`Find the minimum value of $f(x)=(x-3)^2+2$.`, 2, "Vertex (3, 2)."),
  mc(S`An odd-degree polynomial with a positive leading coefficient:`, "falls on the left and rises on the right", ["rises at both ends", "falls at both ends", "rises on the left and falls on the right"], "Like x³."),
  tf(S`$f(x)=x^3$ has a horizontal tangent at an inflection point.`, true, "f′(0) = 0 and f″ changes sign."),
  num(S`How many x-intercepts does $f(x)=x(x-2)(x+5)$ have?`, 3, "0, 2, −5."),
  fill(S`A function with $f(-x)=-f(x)$ for all $x$ is called ___.`, ["odd"], "Symmetric about the origin."),
  num("The graph of f(x) = x⁴ − 5x² + 4 is shown. How many turning points does it have?", 3, "f′ = 2x(2x² − 5): three critical numbers with sign changes.", graph((x) => x ** 4 - 5 * x * x + 4, { xmin: -2.8, xmax: 2.8, ymin: -3, ymax: 6 }, [P(0, 4)], { step: { x: 0.5, y: 1 } })),
  num(S`Find the y-intercept of $f(x)=\frac{x+6}{x-2}$.`, -3, "6/(−2)."),
  tf("The graph of a polynomial has no asymptotes.", true, "Polynomials are defined everywhere and grow without bound."),
  num("What is the greatest number of turning points a degree-4 polynomial can have?", 3, "f′ is a cubic: at most 3 zeros."),
  mc(S`On an interval with $f'\gt0$ and $f''\lt0$, the graph is:`, "rising and concave down", ["rising and concave up", "falling and concave down", "falling and concave up"], "Increasing, bending like a cap."),
  num(S`How many inflection points does $f(x)=x^4-6x^3$ have?`, 2, "f″ = 12x² − 36x = 12x(x − 3)."),
  num("The graph of f′(x) = (x − 1)² is shown. How many local extrema does f have?", 0, "f′ never changes sign.", graph((x) => (x - 1) ** 2, { xmin: -1, xmax: 3, ymin: -1, ymax: 4 }, [P(1, 0)])),
  mc(S`$f'$ is $+$, then $-$, then $+$, with zeros at $-1$ and $2$. Then $f$ has:`, S`a local max at $-1$ and a local min at $2$`, [S`a local min at $-1$ and a local max at $2$`, "two local maxima", "no extrema"], "First derivative test."),
  mc(S`As $x\to\infty$, $f(x)=-3x^3+x$:`, S`$\to-\infty$`, [S`$\to+\infty$`, S`$\to0$`, S`$\to-3$`], "Leading term −3x³."),
  tf("An even function's graph is symmetric about the origin.", false, "Even: y-axis. Odd: origin."),
];

export const M = [
  num(S`Find the local maximum value of $f(x)=x^3+6x^2-36x$.`, 216, "f′ = 3(x + 6)(x − 2): max at −6."),
  num(S`At what $x$ is the inflection point of $f(x)=x^3+6x^2-36x$?`, -2, "f″ = 6x + 12."),
  num(S`How many x-intercepts does $f(x)=x^4-8x^2+7$ have?`, 4, "x² = 1 or 7."),
  mc(S`What symmetry does $f(x)=x^4-8x^2+7$ have?`, "even", ["odd", "none", "both"], "Only even powers."),
  num(S`How many vertical asymptotes does $f(x)=\frac{x^2}{x^2-16}$ have?`, 2, "x = ±4."),
  num(S`Find the minimum value of $f(x)=x^4-8x^2+7$.`, -9, "x² = 4: 16 − 32 + 7."),
  num("The graph of f(x) = −x⁴ + 4x² is shown. What is its maximum value?", 4, "f′ = −4x(x² − 2): max at x = ±√2.", graph((x) => -(x ** 4) + 4 * x * x, { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 6 }, [P(Math.SQRT2, 4), P(-Math.SQRT2, 4)])),
  tf(S`If $f'(c)=0$ and $f''(c)=0$, then $(c,f(c))$ must be an inflection point.`, false, "x⁴ at 0 is a minimum."),
  num(S`At what $x$ does $f(x)=x+\frac{1}{x^2}$ have its local minimum? (4 decimals)`, 1.2599, "f′ = 1 − 2/x³ = 0: x = ∛2.", null, 0.0005),
  mc(S`$f'$ is an upward parabola with zeros at 1 and 4. Then $f$ has:`, S`a local max at 1 and a local min at 4`, [S`a local min at 1 and a local max at 4`, S`inflection points at 1 and 4`, "no extrema"], "f′: +, −, +."),
  num(S`How many local extrema does $f(x)=3x^4-16x^3+18x^2$ have?`, 3, "f′ = 12x(x − 1)(x − 3)."),
  num(S`Find the local maximum value of $f(x)=-x^4+2x^3$ (4 decimals).`, 1.6875, "f′ = 2x²(3 − 2x): max at 1.5.", null, 0.0005),
  num(S`Find the horizontal asymptote of $f(x)=\frac{2x^2+1}{x^2-1}$: $y=\,?$`, 2, "Equal degrees."),
  num("The graph of f(x) = x²/(x + 1) is shown. What is its local maximum value?", -4, "f = x − 1 + 1/(x + 1); max at x = −2.", planeDoc({ view: VM, curves: rat((x) => (x * x) / (x + 1), [-1], VM), vlines: [{ x: -1, color: "red", dash: true }], lines: [{ m: 1, b: -1, color: "red", dash: true }], points: [P(-2, -4), P(0, 0)], step: { x: 1, y: 1 } })),
  tf(S`$f(x)=x^5$ has no local extrema.`, true, "f′ = 5x⁴ ≥ 0."),
  num(S`Find the minimum value of $f(x)=x\sqrt{x+6}$ (3 decimals).`, -5.657, "f′ = (3x + 12)/(2√(x + 6)): min at −4, f = −4√2.", null, 0.001),
  mc("An odd function has a local maximum at (2, 5). It must also have:", "a local minimum at (−2, −5)", ["a local maximum at (−2, 5)", "a local minimum at (2, −5)", "an inflection at (−2, 5)"], "Origin symmetry."),
  num(S`How many local extrema does $f(x)=x^4+32x$ have?`, 1, "f′ = 4x³ + 32: one zero, x = −2."),
  num(S`How many inflection points does $f(x)=x^5-10x^3$ have?`, 3, "f″ = 20x(x² − 3)."),
  mc(S`Which describes $f(x)=\frac{x}{x^2-1}$?`, "asymptotes x = ±1 and y = 0; odd; decreasing on each piece", ["asymptote x = 1 only; even", "no asymptotes; increasing", "asymptotes x = ±1 and y = 1"], "f′ = −(x² + 1)/(x² − 1)²."),
];

// 3.3 Concavity and the Second Derivative Test — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "3.3 Concavity and the Second Derivative Test";
export const Q = [
  num("The graph of f(x) = x⁴ + 2x³ − 12x² is shown. Find the y-coordinate of the inflection point with x > 0.", -9, "f″ = 12(x + 2)(x − 1): x = 1, f(1) = 1 + 2 − 12.", graph((x) => x ** 4 + 2 * x ** 3 - 12 * x * x, { xmin: -4, xmax: 2.5, ymin: -70, ymax: 15 }, [P(1, -9), P(-2, -48)], { step: { x: 1, y: 10 } })),
  num(S`$f(x)=ax^3+bx^2+1$ has an inflection point at $(1,3)$. Find $b$.`, 3, "6a + 2b = 0 and a + b + 1 = 3: a = −1, b = 3."),
  num(S`At what positive $x$ does $f(x)=\frac{1}{x^2+12}$ have an inflection point?`, 2, "f″ = (6x² − 24)/(x² + 12)³."),
  num(S`What is the largest $c$ for which $f(x)=x^4+cx^3+24x^2$ has no inflection points?`, 8, "f″ = 12x² + 6cx + 48 needs 36c² − 2304 ≤ 0."),
  tf("Every cubic function has exactly one inflection point.", true, "f″ is linear with one sign change."),
  num("A population is N(t) = −t³ + 18t² + 50 for 0 ≤ t ≤ 12 (graph shown). What is the greatest growth rate?", 108, "N″ = 0 at t = 6; N′(6) = −108 + 216.", graph((t) => -(t ** 3) + 18 * t * t + 50, { xmin: 0, xmax: 12.5, ymin: 0, ymax: 950 }, [P(6, 482)], { a: 0, b: 12, step: { x: 1, y: 100 } })),
  num(S`At what $x$ does $f(x)=x^{5/3}-5x^{2/3}$ have an inflection point?`, -1, "f″ = (10/9)x^(−4/3)(x + 1): changes sign only at −1."),
  mc(S`If $f''(c)=0$ and $f'''(c)\ne0$, then at $c$:`, "f has an inflection point", ["f has a maximum", "f has a minimum", "nothing can be said"], "f″ is crossing zero with nonzero slope, so it changes sign."),
  num(S`Use the second derivative test to find the local maximum value of $f(x)=2x^3+3x^2-12x+1$.`, 21, "f′ = 6(x + 2)(x − 1); f″(−2) = −18: f(−2) = 21."),
  num(S`Find the y-intercept of the tangent to $f(x)=x^3-3x^2+5$ at its inflection point.`, 6, "Inflection (1, 3), slope −3: y = −3x + 6."),
  num("The graph of f′(x) = 4x − x² is shown. f is concave down for x > a. Find a.", 2, "f′ decreases after its maximum at x = 2.", graph((x) => 4 * x - x * x, { xmin: -1, xmax: 5, ymin: -3, ymax: 5 }, [P(2, 4)])),
  num(S`How many local extrema does $f(x)=x^6-3x^4$ have?`, 3, "f′ = 6x³(x² − 2): minima at ±√2; at 0 the test fails but f′ goes + to −: maximum."),
  num(S`At what $x$ does $f(x)=x^2+\frac8x$ have an inflection point?`, -2, "f″ = 2 + 16/x³ = 0."),
  tf(S`If $f''(x)\gt0$ for all $x$, then $f$ has at most one critical number.`, true, "f′ is strictly increasing, so it is zero at most once."),
  num(S`Cost is $C(x)=0.01x^3-0.6x^2+15x$. At what output is the marginal cost lowest?`, 20, "C″ = 0.06x − 1.2 = 0."),
  num("The graph of f(x) = 2x³ − 9x² + 12x − 4 is shown. Find the y-coordinate of its inflection point.", 0.5, "f″ = 12x − 18: x = 1.5.", graph((x) => 2 * x ** 3 - 9 * x * x + 12 * x - 4, { xmin: -0.3, xmax: 3, ymin: -3, ymax: 3 }, [P(1.5, 0.5), P(1, 1), P(2, 0)], { step: { x: 0.5, y: 1 } }), 0.0001),
  mc("A graph is decreasing and concave up on an interval. There:", S`$f'\lt0$ and $f''\gt0$`, [S`$f'\gt0$ and $f''\gt0$`, S`$f'\lt0$ and $f''\lt0$`, S`$f'\gt0$ and $f''\lt0$`], "Falling, but bending upward."),
  num(S`How many inflection points does $f(x)=x^4-4x^3+6x^2$ have?`, 0, "f″ = 12(x − 1)² ≥ 0."),
  num(S`$f(x)=x^3+bx^2+cx+d$ has its inflection point at $x=-2$. Find $b$.`, 6, "f″ = 6x + 2b = 0 at −2."),
  num(S`For $f(x)=\frac{1}{1+x}$, find $f''(1)$.`, 0.25, "f″ = 2/(1 + x)³.", null, 0.0001),
];

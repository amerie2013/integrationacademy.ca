// 5.4 First and Second Derivatives and Graphs — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const TOPIC = "5.4 First and Second Derivatives and Graphs";
export const Q = [
  num(S`$f(x)=x^3+ax^2+bx+c$ has a maximum at $(-1,6)$ and a minimum at $x=3$. Find $a$.`, -3, "f′ = 3(x + 1)(x − 3) = 3x² − 6x − 9, so 2a = −6."),
  num(S`For the same $f$ (maximum at $(-1,6)$, minimum at $x=3$), find $c$.`, 1, "b = −9; f(−1) = −1 − 3 + 9 + c = 6."),
  num(S`For which positive $k$ does $y=x^3-3kx$ have a local minimum value of $-16$?`, 4, "Min at x = √k: k√k − 3k√k = −2k^(3/2) = −16."),
  num(S`Find the range of $k$ for which $f(x)=x^3+kx^2+12x$ has no stationary points: give the largest integer $k$.`, 5, "4k² − 144 < 0 → −6 < k < 6."),
  num("The graph of f′ is shown. How many local maximum points does f have?", 2, "f′ changes from + to − at x = −2 and at x = 3 (at x = 1 it goes − to +: a minimum).", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -(x + 2) * (x - 1) * (x - 3) / 2, color: "amber" }], points: [P(-2, 0), P(1, 0), P(3, 0)] })),
  num("For the same graph of f′, how many points of inflection does f have in the interval shown?", 2, "f′ has two turning points.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -(x + 2) * (x - 1) * (x - 3) / 2, color: "amber" }] })),
  mc("The graph of f is shown. Which describes f″ at x = 0?", "f″(0) < 0", ["f″(0) > 0", "f″(0) = 0 and f has an inflection", "f″ is not defined"], "The curve is concave down at its maximum.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -3, ymax: 4 }, curves: [{ f: (x) => 3 - x * x }], points: [P(0, 3)] })),
  num(S`$f(x)=x^4-8x^3+18x^2$. Find the x-coordinate of its only local extremum.`, 0, "f′ = 4x(x − 3)²; x = 3 is a horizontal inflection."),
  num(S`For $f(x)=x^4-8x^3+18x^2$, find the larger x-coordinate of a point of inflection.`, 3, "f″ = 12x² − 48x + 36 = 12(x − 1)(x − 3)."),
  tf(S`A cubic $ax^3+bx^2+cx+d$ ($a\ne0$) always has exactly one point of inflection.`, true, "f″ = 6ax + 2b is linear and changes sign once."),
  num(S`The point of inflection of $y=x^3+bx^2+cx$ is $(1,-1)$. Find $c$.`, 1, "y″ = 0 at 1: b = −3; 1 − 3 + c = −1."),
  ms(S`$f'(x)=x^2(x-2)$. Which are true? Select all.`, ["f has a local minimum at x = 2", "f has a horizontal point of inflection at x = 0", "f is decreasing for x < 2 (x ≠ 0)", "f has a local maximum at x = 0"], [0, 1, 2], "f′ ≤ 0 on both sides of 0."),
  num("The graph of y = x³ − 6x² + 9x + 2 is shown. Find the gradient at the point of inflection.", -3, "x = 2: y′ = 12 − 24 + 9.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 9 }, curves: [{ f: (x) => x ** 3 - 6 * x * x + 9 * x + 2 }], points: [P(1, 6), P(3, 2), P(2, 4)] })),
  num(S`Find the equation of the tangent at the point of inflection of $y=x^3-6x^2+9x+2$; give its y-intercept.`, 10, "At (2, 4), m = −3: y = −3x + 10."),
  num(S`$f(x)=x^3-3x^2-9x+k$ has a local minimum value of $-20$. Find $k$.`, 7, "Min at x = 3: 27 − 27 − 27 + k = −20."),
  mc(S`If $f''(x)>0$ for all $x$, then $f$:`, "has at most one stationary point, which is a minimum", ["has a maximum", "has a point of inflection", "is increasing"], "f′ is increasing, so it is zero at most once."),
  num("A cubic f is graphed with its tangent at the point of inflection. Find the x-coordinate of that point.", 1, "Inflection midway between the turning points x = −1 and x = 3.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -30, ymax: 12 }, curves: [{ f: (x) => x ** 3 - 3 * x * x - 9 * x }, { f: (x) => -12 * (x - 1) - 11, color: "red" }], points: [P(-1, 5), P(3, -27), P(1, -11)], step: { x: 1, y: 4 } })),
  num(S`For $y=x^3-ax$, $a>0$, the distance between the x-coordinates of the stationary points is 4. Find $a$.`, 12, "x = ±√(a/3); 2√(a/3) = 4."),
  num(S`How many stationary points does $y=3x^4-8x^3+6x^2$ have?`, 2, "12x(x − 1)² = 0: x = 0 and x = 1."),
  num(S`Find the minimum value of $y=3x^4-8x^3+6x^2$.`, 0, "Minimum at x = 0; x = 1 is a horizontal inflection."),
];

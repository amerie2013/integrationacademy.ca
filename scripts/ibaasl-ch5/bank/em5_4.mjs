// 5.4 First and Second Derivatives and Graphs — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  num(S`Find the x-coordinate of the stationary point of $y=x^2-14x+3$.`, 7, "2x − 14 = 0."),
  num(S`Find the x-coordinate of the stationary point of $y=5+6x-x^2$.`, 3, "6 − 2x = 0."),
  num(S`Find the maximum value of $y=5+6x-x^2$.`, 14, "5 + 18 − 9."),
  mx(S`Find $f''(x)$ for $f(x)=x^3+2x^2$.`, "6*x+4", "f′ = 3x² + 4x."),
  num(S`For $f(x)=2x^3$, find $f''(1)$.`, 12, "f″ = 12x."),
  mc(S`If $f'(x)>0$ on an interval, $f$ is:`, "increasing", ["decreasing", "concave up", "stationary"], "Positive gradient."),
  mc(S`At a stationary point $x=a$ with $f''(a)<0$, $f$ has:`, "a local maximum", ["a local minimum", "a point of inflection", "no turning point"], "Concave down."),
  tf(S`If $f''(x)>0$ on an interval, the curve is concave up there.`, true, "The gradient is increasing."),
  tf(S`Every point where $f''(x)=0$ is a point of inflection.`, false, "f″ must change sign (e.g. x⁴ at 0)."),
  fill(S`A point where the concavity of a curve changes is called a point of ___.`, ["inflection", "Inflection", "inflexion"], "f″ changes sign."),
  num(S`For which $x$ is $y=x^2+4x$ decreasing? Give the largest $x$ where it stops decreasing.`, -2, "2x + 4 < 0 for x < −2."),
  num(S`Find the x-coordinate of the point of inflection of $y=x^3-3x^2+7$.`, 1, "y″ = 6x − 6."),
  num("The graph shows y = f(x). At how many points is f′(x) = 0?", 2, "Two turning points.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 3 * x + 1 }], points: [P(-1, 3), P(1, -1)] })),
  mc("The graph of f is shown. At the marked point f has:", "a local minimum", ["a local maximum", "a point of inflection", "f′ > 0"], "The curve turns from falling to rising.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -3, ymax: 6 }, curves: [{ f: (x) => (x - 2) ** 2 - 2 }], points: [P(2, -2)] })),
  num(S`$f'(x)=3x-12$. Find the x-coordinate of the stationary point.`, 4, "3x = 12."),
  mc(S`$f'(x)=3x-12$ at the stationary point is:`, "a minimum (f′ goes from − to +)", ["a maximum", "a point of inflection", "not stationary"], "f″ = 3 > 0."),
  num(S`For $y=4x^3$, find $\frac{d^2y}{dx^2}$ at $x=-1$.`, -24, "24x."),
  num(S`Find the minimum value of $y=x^2+2x+9$.`, 8, "x = −1: 1 − 2 + 9."),
  tf(S`The graph of $y=x^3$ is concave down for $x<0$.`, true, "y″ = 6x < 0 there."),
  num(S`For $f(x)=x^4$, find $f''(2)$.`, 48, "12x²."),
];

export const M = [
  num(S`Find the local maximum value of $y=x^3-27x$.`, 54, "x = −3: −27 + 81."),
  num(S`Find the local minimum value of $y=x^3-27x$.`, -54, "x = 3."),
  num(S`Find the y-coordinate of the point of inflection of $y=x^3-9x^2+20$.`, -34, "x = 3: 27 − 81 + 20."),
  ms(S`For $f(x)=x^3-3x^2$, which are true? Select all.`, ["max at (0, 0)", "min at (2, −4)", "inflection at (1, −2)", "increasing for 0 < x < 2"], [0, 1, 2], "f′ = 3x(x − 2) < 0 on (0, 2)."),
  num(S`For which value of $x$ does $y=2x^3+3x^2-12x$ have a local minimum?`, 1, "6x² + 6x − 12 = 6(x + 2)(x − 1); y″(1) > 0."),
  num(S`$y=x^2+bx+1$ has a stationary point at $x=3$. Find $b$.`, -6, "2(3) + b = 0."),
  mc(S`$f(x)=x^3+3x$. Then $f$:`, "is increasing for all x and has no stationary points", ["has a maximum at x = 0", "has two turning points", "is decreasing for x < 0"], "f′ = 3x² + 3 > 0."),
  num(S`For $f(x)=x^4-4x^3$, the point of inflection that is not stationary has x-coordinate:`, 2, "f″ = 12x² − 24x = 12x(x − 2); x = 0 is also stationary."),
  num(S`Find the $x$ where $y=x^3-9x^2+24x$ changes from increasing to decreasing.`, 2, "3(x − 2)(x − 4): + then − at x = 2."),
  tf(S`If $f'(a)=0$ and $f''(a)=0$, then $f$ has a point of inflection at $x=a$.`, false, "Not necessarily: x⁴ has a minimum at 0."),
  num("The graph of f′ is shown. At what x does f have a local maximum?", 2, "f′ changes from + to − at x = 2 (at x = −1 it changes from − to +: a minimum).", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -5, ymax: 5 }, curves: [{ f: (x) => (x + 1) * (x - 2) * -1, color: "amber" }], points: [P(-1, 0), P(2, 0)] })),
  num("The graph of f′ is shown. At what x does f have a point of inflection?", 0.5, "The turning point of f′.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -4, ymax: 6 }, curves: [{ f: (x) => (x + 1) * (x - 2), color: "amber" }], points: [P(0.5, -2.25)] }), 1e-9),
  num(S`For $f(x)=x^3-12x^2$, on what interval is $f$ concave down? Give the upper end.`, 4, "f″ = 6x − 24 < 0 for x < 4."),
  num(S`Find the minimum value of $f(x)=x^4-2x^2$.`, -1, "f′ = 4x(x² − 1); f(±1) = −1."),
  num(S`$y=ax^3-3x$ has a stationary point at $x=1$. Find $a$.`, 1, "3a − 3 = 0."),
  mc(S`$f''(x)=x-2$. The graph of $f$ is concave up for:`, S`$x>2$`, [S`$x<2$`, "all x", S`$x=2$`], "f″ > 0 for x > 2."),
  num(S`Find the sum of the x-coordinates of the stationary points of $y=x^3-6x^2-15x$.`, 4, "3x² − 12x − 15 = 3(x − 5)(x + 1)."),
  num(S`For $y=x^3+px^2$, the point of inflection is at $x=2$. Find $p$.`, -6, "y″ = 6x + 2p = 0 at x = 2."),
  num(S`How many points of inflection does $y=x^4-6x^2+1$ have?`, 2, "y″ = 12x² − 12 changes sign at ±1."),
  mx(S`For $f(x)=x^5-5x$, write $f''(x)$.`, "20*x^3", "f′ = 5x⁴ − 5."),
];

// 5.3 Differentiation Rules — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const TOPIC = "5.3 Differentiation Rules";
export const Q = [
  mx(S`Differentiate $y=\frac{x^2+3}{\sqrt x}$.`, "1.5*sqrt(x)-1.5/(x*sqrt(x))", "x^(3/2) + 3x^(−½) → 1.5x^(½) − 1.5x^(−3/2)."),
  mx(S`Differentiate $f(x)=(2x-3)^2$.`, "8*x-12", "4x² − 12x + 9."),
  num(S`Find the normal to $y=x^2-3x$ at $x=1$ and give its y-intercept.`, -3, "Point (1, −2), tangent gradient −1, normal gradient 1: y = x − 3."),
  num(S`The normal to $y=x^2-3x$ at $x=1$ meets the curve again. Find the x-coordinate.`, 3, "x² − 3x = x − 3 → (x − 1)(x − 3) = 0."),
  num(S`The tangent to $y=x^3+kx$ at $x=1$ is parallel to $y=5x$. Find $k$.`, 2, "3 + k = 5."),
  num(S`The tangent to $y=ax^2+bx$ at $(2,2)$ has gradient 5. Find $a$.`, 2, "4a + 2b = 2 and 4a + b = 5."),
  num(S`The tangents to $y=x^3$ at $x=2$ and $x=-2$ are parallel. Find the distance between their y-intercepts.`, 32, "y = 12x − 16 and y = 12x + 16."),
  num("Two tangents to y = x² pass through (0, −4) (shown). Find the positive x-coordinate of a point of contact.", 2, "Tangent at a: y = 2ax − a²; −a² = −4.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -5, ymax: 9 }, curves: [{ f: (x) => x * x }, { f: (x) => 4 * x - 4, color: "red" }, { f: (x) => -4 * x - 4, color: "red" }], points: [P(0, -4), P(2, 4), P(-2, 4)] })),
  num(S`The normal to $y=x^2$ at $(-2,4)$ meets the curve again. Find the x-coordinate of the second point.`, 2.25, "Normal y = x/4 + 4.5; 4x² − x − 18 = 0 → (4x − 9)(x + 2) = 0.", null, 1e-9),
  tf(S`The tangent to $y=x^3$ at $x=0$ crosses the curve.`, true, "The tangent is y = 0; the curve changes side there."),
  num(S`Find the area of the triangle formed by the tangent to $y=\frac{4}{x}$ at $x=2$ and the axes (shown).`, 8, "Tangent y = −x + 4: intercepts 4 and 4.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 6 }, curves: [{ f: (x) => 4 / x, a: 0.7, b: 6 }, { f: (x) => 4 - x, a: 0, b: 4, color: "red" }], points: [P(2, 2), P(4, 0), P(0, 4)] })),
  num("The tangent to y = √x at x = 4 is shown. Find its y-intercept.", 1, "Point (4, 2), gradient ¼: y = x/4 + 1.", planeDoc({ view: { xmin: -1, xmax: 10, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(x), a: 0 }, { f: (x) => x / 4 + 1, color: "red" }], points: [P(4, 2)] })),
  ms(S`For $f(x)=x^3-3x^2+3x$, which are true? Select all.`, [S`$f'(x)=3(x-1)^2$`, S`$f'(x)\ge0$ for all $x$`, S`$f$ has a horizontal tangent at $x=1$`, S`$f$ has a maximum at $x=1$`], [0, 1, 2], "f′ ≥ 0 everywhere: no maximum."),
  num(S`For which $c$ is $y=4x+c$ a tangent to $y=x^2$?`, -4, "2x = 4 at x = 2: point (2, 4)."),
  num(S`The line $y=-3x$ is the normal to $y=x^2+bx$ at the origin. Find $b$.`, 1 / 3, "Tangent gradient at 0 is b; −1/b = −3.", null, 1e-3),
  num("The curve y = x³ − 3x² and its tangents at two points with gradient 9 are shown. Find the larger x-coordinate of contact.", 3, "3x² − 6x = 9 → x² − 2x − 3 = 0.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -8, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 3 * x * x }, { f: (x) => 9 * (x - 3), color: "red" }, { f: (x) => 9 * (x + 1) - 4, color: "red" }], points: [P(3, 0), P(-1, -4)] })),
  num(S`Find the gradient of $y=\frac{x^2-1}{x}$ at $x=1$.`, 2, "y = x − x⁻¹; y′ = 1 + x⁻²."),
  num(S`The curve $y=x^2+px+q$ has gradient 0 at $(1,5)$. Find $q$.`, 6, "p = −2; 1 − 2 + q = 5."),
  mc(S`At the point where $x=4$ on $y=\sqrt{x}$, the normal is:`, S`$y=-4x+18$`, [S`$y=\frac14x+1$`, S`$y=4x-14$`, S`$y=-\frac14x+3$`], "Gradient of tangent ¼, normal −4, through (4, 2)."),
  num(S`For $f(x)=x^4-50x^2$, find the number of points where the tangent is horizontal.`, 3, "4x³ − 100x = 4x(x² − 25) = 0: x = 0, ±5."),
];

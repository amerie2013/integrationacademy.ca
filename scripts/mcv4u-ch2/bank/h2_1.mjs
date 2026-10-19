// 2.1 Derivative of a Polynomial Function — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "2.1 Derivative of a Polynomial Function";
export const Q = [
  num("The tangent to y = x³ − x at x = −1 is drawn. What is its y-intercept?", 2, "Slope 3 − 1 = 2 through (−1, 0): y = 2x + 2.", graph((x) => x ** 3 - x, { xmin: -2, xmax: 2, ymin: -3, ymax: 4 }, [P(-1, 0)], { more: [{ f: (x) => 2 * x + 2, color: "green" }] })),
  num(S`$y=x^2+bx+4$ has a tangent of slope 1 at $x=2$. Find $b$.`, -3, "4 + b = 1."),
  num("The graph of y = x³ − 6x² + 9x is shown. At what larger x is the tangent horizontal?", 3, "3x² − 12x + 9 = 3(x − 1)(x − 3).", graph((x) => x ** 3 - 6 * x * x + 9 * x, { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 6 }, [P(1, 4), P(3, 0)])),
  num(S`At what point is the tangent to $y=x^2$ parallel to $y=6x-1$? Give the y-coordinate.`, 9, "2x = 6: point (3, 9)."),
  num(S`Find the y-intercept of the normal to $y=x^3$ at $x=1$ (4 decimals).`, 1.3333, "Normal slope −⅓ through (1, 1): y = −⅓x + 4/3.", null, 0.0005),
  mc(S`Which lines through $(1,-3)$ are tangent to $y=x^2$?`, S`$y=6x-9$ and $y=-2x-1$`, [S`$y=2x-5$ and $y=-6x+3$`, S`$y=6x-9$ only`, S`$y=4x-7$ and $y=-4x+1$`], "Tangent at a: y = 2ax − a²; −3 = 2a − a² gives a = 3 or −1."),
  num(S`$y=ax^3$ has a tangent of slope 12 at $x=-2$. Find $a$.`, 1, "3a(4) = 12."),
  num(S`How many tangents to $y=x^3$ have slope 3?`, 2, "3x² = 3: x = ±1."),
  num("The graph of y = x³ − 6x² + 15x is shown. What is the smallest slope of any tangent?", 3, "y′ = 3x² − 12x + 15 has its minimum at x = 2: 12 − 24 + 15.", graph((x) => x ** 3 - 6 * x * x + 15 * x, { xmin: -0.5, xmax: 4.5, ymin: -5, ymax: 30 }, [P(2, 14)], { more: [{ f: (x) => 14 + 3 * (x - 2), color: "green" }], step: { x: 1, y: 5 } })),
  num(S`For $f(x)=x^{-3}$, find $f'(-1)$.`, -3, "−3x⁻⁴ at −1."),
  num(S`The tangent to $y=\sqrt x$ at $x=1$ crosses the x-axis at what $x$?`, -1, "Slope ½ through (1, 1): y = ½x + ½."),
  num("The tangent to y = x² − 4x at x = 3 is drawn. Where does it meet the y-axis?", -9, "Slope 2 through (3, −3): y = 2x − 9.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -10, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x, color: "violet" }, { f: (x) => 2 * x - 9, color: "green" }], points: [P(3, -3)], step: { x: 1, y: 2 } })),
  tf(S`The power rule gives $\frac{d}{dx}x^{\pi}=\pi x^{\pi-1}$.`, true, "It holds for every real exponent."),
  num("A square has side s cm. Find the rate of change of its area with respect to s when s = 7.", 14, "dA/ds = 2s."),
  num("A cube has edge e cm. Find the rate of change of its volume with respect to e when e = 4.", 48, "3e²."),
  num("How many horizontal tangents does y = x⁴ − 8x² have?", 3, "4x³ − 16x = 4x(x − 2)(x + 2).", graph((x) => x ** 4 - 8 * x * x, { xmin: -3.2, xmax: 3.2, ymin: -18, ymax: 10 }, [P(-2, -16), P(0, 0), P(2, -16)], { step: { x: 1, y: 2 } })),
  num(S`$y=ax^2+bx$ has a tangent of slope 8 at $(1,5)$. Find $a$.`, 3, "a + b = 5 and 2a + b = 8."),
  num(S`The tangents to $y=x^3-3x$ at two points are parallel to $y=9x$. Find the y-coordinate of the point with positive $x$.`, 2, "3x² − 3 = 9: x = 2, y = 8 − 6."),
  num(S`For $y=\frac{x^2+1}{\sqrt x}$, find $y'(4)$ by rewriting as powers first (4 decimals).`, 2.9375, "y = x^(3/2) + x^(−1/2); y′ = 1.5x^(1/2) − 0.5x^(−3/2) = 3 − 1/16.", null, 0.0005),
  num("The tangent to y = x² at x = a (a > 0) passes through (0, −16). Find a.", 4, "y = 2ax − a² meets the y-axis at −a² = −16.", graph((x) => x * x, { xmin: -2, xmax: 6, ymin: -18, ymax: 26 }, [P(4, 16), P(0, -16)], { more: [{ f: (x) => 8 * x - 16, color: "green" }], step: { x: 1, y: 4 } })),
];

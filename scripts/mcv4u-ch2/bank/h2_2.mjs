// 2.2 The Product Rule — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const r1 = (-4 + Math.sqrt(124)) / 6;
export const TOPIC = "2.2 The Product Rule";
export const Q = [
  num("The graph of y = (x² − 9)(x + 2) is shown. At what positive x is the tangent horizontal? (4 decimals)", 1.1893, "y′ = 3x² + 4x − 9; x = (−4 + √124)/6.", graph((x) => (x * x - 9) * (x + 2), { xmin: -4, xmax: 4, ymin: -28, ymax: 16 }, [P(r1, (r1 * r1 - 9) * (r1 + 2))], { step: { x: 1, y: 4 } }), 0.0005),
  num(S`$h(x)=x^2g(x)$ with $g(1)=3$ and $g'(1)=-2$. Find $h'(1)$.`, 4, "2(1)(3) + 1(−2)."),
  num(S`For $y=(x+1)\sqrt x$, find $y'(9)$ (4 decimals).`, 4.6667, "√x + (x + 1)/(2√x) at 9: 3 + 10/6.", null, 0.0005),
  num("The graph of y = (x − 1)(x − 2)(x − 3) is shown. Find the slope of the tangent at x = 2.", -1, "Only the term (x − 1)(1)(x − 3) survives: (1)(−1).", graph((x) => (x - 1) * (x - 2) * (x - 3), { xmin: 0, xmax: 4, ymin: -3, ymax: 3 }, [P(2, 0)], { more: [{ f: (x) => -(x - 2), color: "green" }] })),
  num("A price is 25 dollars, rising 0.40 dollars per week; weekly sales are 600, falling 12 per week. How fast is revenue changing (dollars per week)?", -60, "0.4(600) + 25(−12) = 240 − 300."),
  num(S`Find $k$ so that the tangent to $y=(x+k)(x-1)$ at $x=1$ has slope 5.`, 4, "(x − 1) + (x + k) at 1 = 1 + k."),
  tf(S`For any differentiable $f$, $\frac{d}{dx}\left[f(x)\right]^2=2f(x)f'(x)$.`, true, "Product rule on f · f."),
  num(S`Use the product rule on $(x^2+1)(x^2+1)$ to find the derivative at $x=1$.`, 8, "2 · 2x(x² + 1) at 1."),
  num("A rectangle has length 12 − t cm and width 4 + 2t cm. At what time does its area stop increasing?", 5, "A′ = −(4 + 2t) + 2(12 − t) = 20 − 4t.", graph((t) => (12 - t) * (4 + 2 * t), { xmin: 0, xmax: 12, ymin: 0, ymax: 110 }, [P(5, 98)], { a: 0, b: 12, step: { x: 1, y: 10 } })),
  num("The graph of y = x(x − 3)² is shown. Find the y-coordinate of the horizontal tangent that is not on the x-axis.", 4, "y′ = (x − 3)(3x − 3): x = 1 gives y = 4.", graph((x) => x * (x - 3) ** 2, { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 6 }, [P(1, 4), P(3, 0)])),
  mc(S`Which is $(uvw)'$?`, S`$u'vw+uv'w+uvw'$`, [S`$u'v'w'$`, S`$u'vw+uvw'$`, S`$(u'v+uv')w'$`], "Differentiate one factor at a time."),
  num(S`$f(3)=2$, $f'(3)=1$, $g(3)=-1$, $g'(3)=4$. For $h(x)=f(x)g(x)+x$, find $h'(3)$.`, 8, "(1)(−1) + (2)(4) + 1."),
  num(S`Find the y-intercept of the tangent to $y=(2x-1)(x^2+x)$ at $x=1$.`, -5, "y(1) = 2; y′(1) = 2(2) + (1)(3) = 7; y = 7x − 5."),
  num("The graph of y = x³(x − 4) is shown. Find the largest x where the tangent is horizontal.", 3, "4x³ − 12x² = 4x²(x − 3).", graph((x) => x ** 3 * (x - 4), { xmin: -1, xmax: 4.5, ymin: -30, ymax: 10 }, [P(0, 0), P(3, -27)], { step: { x: 1, y: 5 } })),
  num("A region has 200 farms, increasing by 5 per year; each produces 40 t, decreasing by 0.5 t per year. How fast is total production changing (t per year)?", 100, "5(40) + 200(−0.5)."),
  num(S`For $f(x)=x^2$ and $g(x)=x-6$, at what positive $x$ is $(fg)'(x)=0$?`, 4, "2x(x − 6) + x² = 3x² − 12x."),
  num(S`For $y=(x+a)(x-a)$ with $a\gt0$, the slope at $x=a$ is 8. Find $a$.`, 4, "y′ = 2x, so 2a = 8."),
  tf("The product of two increasing functions is always increasing.", false, "x · x on x < 0 decreases."),
  num(S`$f(x)=x^2g(x)$ with $g(1)=2$ and $g'(1)=3$. Find $f'(1)$.`, 7, "2(1)(2) + 1(3)."),
  num("The graph of y = (x + 1)(x − 1)(x + 3) is shown. Find the slope of the tangent at x = −1.", -4, "Only (1)(x − 1)(x + 3) survives: (−2)(2).", graph((x) => (x + 1) * (x - 1) * (x + 3), { xmin: -4, xmax: 2, ymin: -6, ymax: 8 }, [P(-1, 0)], { more: [{ f: (x) => -4 * (x + 1), color: "green" }] })),
];

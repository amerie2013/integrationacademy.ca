// 5.2 The Derivative Function — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  num(S`For $f(x)=x^2$, find the gradient of the secant from $x=1$ to $x=3$.`, 4, "(9 − 1)/2."),
  num(S`For $f(x)=x^2$, find the gradient of the secant from $x=-1$ to $x=2$.`, 1, "(4 − 1)/3."),
  num(S`Given $\frac{d}{dx}(x^2)=2x$, find the gradient of $y=x^2$ at $x=6$.`, 12, "2 × 6."),
  num(S`Given $\frac{d}{dx}(x^3)=3x^2$, find the gradient of $y=x^3$ at $x=2$.`, 12, "3 × 4."),
  num(S`What is the derivative of $f(x)=7x$?`, 7, "A line's gradient is constant."),
  num(S`What is the derivative of $f(x)=9$?`, 0, "A horizontal line."),
  mc(S`$f'(x)$ gives:`, "the gradient of the tangent at x", ["the y-intercept", "the area under f", "the value of f at x"], "The derivative is the gradient function."),
  tf(S`Where a function is increasing, $f'(x)>0$.`, true, "The tangents slope upwards."),
  tf(S`At a turning point, $f'(x)=1$.`, false, "f′(x) = 0: the tangent is horizontal."),
  fill(S`The line touching a curve at a point with the same gradient is the ___.`, ["tangent", "Tangent", "tangent line"], "A secant cuts at two points."),
  mc(S`$\frac{dy}{dx}$ means:`, "the derivative of y with respect to x", ["y divided by x", "the change in x", "the area under y"], "Leibniz notation."),
  num("The tangent at the marked point is drawn. Find its gradient.", 2, "Through (1, 1) and (2, 3).", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x }, { f: (x) => 2 * x - 1, color: "red" }], points: [P(1, 1), P(2, 3, false)] })),
  mc("On the graph shown, f′(x) is negative for:", S`$x<1$`, [S`$x>1$`, "all x", "no x"], "The curve falls to the left of the minimum at x = 1.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -2, ymax: 6 }, curves: [{ f: (x) => (x - 1) ** 2 }], points: [P(1, 0)] })),
  num(S`For $f(x)=x^2$, $\frac{f(x+h)-f(x)}{h}=2x+h$. Find its limit at $x=4$ as $h\to0$.`, 8, "2x."),
  mx(S`Given $\frac{d}{dx}(x^2)=2x$, write $\frac{dy}{dx}$ for $y=x^2+5$.`, "2*x", "Moving the graph up does not change its gradients."),
  num(S`The gradient of the secant of $y=x^2$ from $x=2$ to $x=2.1$ is:`, 4.1, "(4.41 − 4)/0.1.", null, 1e-9),
  tf(S`A secant line meets a curve at two points.`, true, "By definition."),
  num(S`$f'(x)=4x-8$. Find $f'(3)$.`, 4, "12 − 8."),
  num(S`$f'(x)=4x-8$. Find the $x$-value where the tangent is horizontal.`, 2, "4x − 8 = 0."),
  mc(S`If $s(t)$ is distance in metres and $t$ is time in seconds, $s'(t)$ is measured in:`, "m/s", ["m", "s", "m·s"], "Rate of change of distance with time."),
];

export const M = [
  num(S`Use first principles: for $f(x)=5x^2$, $\frac{f(x+h)-f(x)}{h}=10x+5h$. Find $f'(2)$.`, 20, "10x at x = 2."),
  mx(S`Use first principles to find $f'(x)$ for $f(x)=x^2+9x$.`, "2*x+9", "(2xh + h² + 9h)/h → 2x + 9."),
  mx(S`Use first principles to find $f'(x)$ for $f(x)=4-x^2$.`, "-2*x", "(−2xh − h²)/h → −2x."),
  mx(S`Use first principles to find $f'(x)$ for $f(x)=2x^2-5x+1$.`, "4*x-5", "(4xh + 2h² − 5h)/h → 4x − 5."),
  num(S`For $f(x)=x^3$, find the secant gradient from $x=1$ to $x=1.1$ (3 d.p.).`, 3.31, "(1.331 − 1)/0.1.", null, 0.001),
  num(S`Use first principles: $f(x)=3x^2-x$. Find $f'(-1)$.`, -7, "f′(x) = 6x − 1."),
  num(S`$f'(x)=2x+6$. Find the x-coordinate of the turning point of $f$.`, -3, "2x + 6 = 0."),
  ms(S`$f(x)=x^2-14x$. Which are true? Select all.`, [S`$f'(x)=2x-14$`, S`$f$ is decreasing for $x<7$`, S`$f'(7)=0$`, S`$f$ is increasing for $x<7$`], [0, 1, 2], "f′ < 0 for x < 7."),
  num(S`Find the point on $y=x^2$ where the tangent has gradient $-10$. Give the x-coordinate.`, -5, "2x = −10."),
  num(S`The tangent to $y=x^2$ at $x=3$ is $y=mx+c$. Find $c$.`, -9, "Point (3, 9), m = 6: 9 = 18 + c."),
  num(S`A balloon has volume $V=t^2+2t$ litres after $t$ s. Using $V'(t)=2t+2$, find the rate of change at $t=5$ (L/s).`, 12, "10 + 2."),
  mc(S`The graph of $f$ has turning points at $x=-2$ and $x=3$. The graph of $f'$:`, "crosses the x-axis at −2 and 3", ["has turning points at −2 and 3", "passes through (−2, 3)", "is a horizontal line"], "Turning points of f are zeros of f′."),
  num("The graph of f′ is shown. At what x does f have a turning point?", 1, "f′ crosses the axis at x = 1.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -4, ymax: 6 }, curves: [{ f: (x) => 2 * x - 2, color: "amber" }], points: [P(1, 0)] })),
  num("The tangent shown touches y = x² at the marked point. Find the x-intercept of the tangent.", 1.5, "Tangent at (3, 9): y = 6x − 9.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -3, ymax: 16 }, curves: [{ f: (x) => x * x }, { f: (x) => 6 * x - 9, color: "red" }], points: [P(3, 9)], step: { x: 1, y: 2 } }), 1e-9),
  num(S`For $f(x)=x^2$, by how much does the secant gradient from $x=2$ to $x=2+h$ exceed $f'(2)$ when $h=0.5$?`, 0.5, "Secant gradient = 4 + h.", null, 1e-9),
  tf(S`If $f'(x)>0$ for all $x$, then $f$ has no turning points.`, true, "f′ is never 0."),
  num(S`Use first principles: $f(x)=x^3$. $\frac{f(x+h)-f(x)}{h}=3x^2+3xh+h^2$. Find the secant gradient at $x=1$ with $h=0.2$.`, 3.64, "3 + 0.6 + 0.04.", null, 1e-9),
  num(S`A stone falls $d=5t^2$ m. Using $d'(t)=10t$, find its speed (m/s) at $t=2.5$.`, 25, "10 × 2.5."),
  num(S`The tangents to $y=x^2$ at $x=a$ and $x=1$ are perpendicular. Find $a$.`, -0.25, "2a × 2 = −1.", null, 1e-9),
  num(S`For $f(x)=kx^2$, first principles give $f'(x)=2kx$. If $f'(3)=12$, find $k$.`, 2, "6k = 12."),
];

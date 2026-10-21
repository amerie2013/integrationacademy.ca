// 5.2 The Derivative Function — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const TOPIC = "5.2 The Derivative Function";
export const Q = [
  mx(S`Use first principles to find $f'(x)$ for $f(x)=x^3-2x$.`, "3*x^2-2", "(3x²h + 3xh² + h³ − 2h)/h → 3x² − 2."),
  mx(S`Use first principles to find $f'(x)$ for $f(x)=(x+1)^2$.`, "2*x+2", "(x + h + 1)² − (x + 1)² = h(2x + 2 + h)."),
  num(S`Use first principles: for $f(x)=\frac{1}{x}$, find $f'(4)$.`, -0.0625, "f′(x) = −1/x².", null, 1e-9),
  num(S`$f(x)=x^2-4x+1$. Find the x-coordinate where the tangent is parallel to $y=2x+7$.`, 3, "2x − 4 = 2."),
  num(S`Find the y-intercept of the tangent to $y=x^2-4x$ at $x=5$.`, -25, "Point (5, 5), gradient 6: y = 6x − 25."),
  num("The graph of f is shown. How many solutions does f′(x) = 0 have in the interval shown?", 3, "Three turning points.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x ** 4 - 4 * x * x + 1 }], points: [P(0, 1), P(Math.SQRT2, -3), P(-Math.SQRT2, -3)] })),
  mc("The graph of f is shown. Which graph best describes f′?", "a parabola opening down with zeros at −1 and 1", ["a parabola opening up with zeros at −1 and 1", "a straight line through the origin", "a parabola with vertex at (0, 2)"], "f increases between the turning points at ±1 and decreases outside.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 3 * x - x ** 3 }], points: [P(-1, -2), P(1, 2)] })),
  num(S`The tangents to $y=x^2$ at $A(2,4)$ and $B(-1,1)$ meet at $T$. Find the x-coordinate of $T$.`, 0.5, "y = 4x − 4 and y = −2x − 1.", null, 1e-9),
  num(S`For $f(x)=ax^2+bx$, $f'(1)=7$ and $f'(-1)=-1$. Find $a$.`, 2, "2a + b = 7, −2a + b = −1."),
  num("A car's distance (m) is s = 2t² + 3t (shown). Find its speed at t = 4 s using the derivative.", 19, "s′ = 4t + 3.", planeDoc({ view: { xmin: -0.3, xmax: 6, ymin: -5, ymax: 90 }, curves: [{ f: (t) => 2 * t * t + 3 * t, a: 0, b: 6 }, { f: (t) => 19 * (t - 4) + 44, a: 2, b: 6, color: "red" }], points: [P(4, 44)], step: { x: 1, y: 10 }, xlabel: "t", ylabel: "s" })),
  tf(S`For $f(x)=x^2$, every secant gradient from $x=a$ to $x=a+h$ ($h>0$) is greater than $f'(a)$.`, true, "Secant gradient = 2a + h > 2a."),
  num(S`The average rate of change of $f(x)=x^3$ on $[0,b]$ equals $f'(1)$. Find $b>0$ (3 d.p.).`, Math.sqrt(3), "b³/b = b² = 3.", null, 0.001),
  num(S`$f(x)=x^2+kx$. Find the y-intercept of the tangent at $x=2$ (it does not depend on $k$).`, -4, "y = (4 + k)(x − 2) + 4 + 2k; at x = 0: −8 − 2k + 4 + 2k."),
  num(S`The normal to $y=x^2$ at $x=1$ meets the y-axis at $(0,c)$. Find $c$.`, 1.5, "Normal: y − 1 = −½(x − 1).", null, 1e-9),
  ms(S`$f'(x)=(x-1)(x-4)$. Which are true? Select all.`, ["f has turning points at x = 1 and x = 4", "f is decreasing for 1 < x < 4", "f is increasing for x > 4", "f has a minimum at x = 1"], [0, 1, 2], "f′ goes + to − at 1: a maximum."),
  num("The graph of f′ is shown. Find the x-value where f has a local minimum.", 3, "f′ changes from − to + at x = 3.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => (x + 1) * (x - 3), color: "amber" }], points: [P(-1, 0), P(3, 0)] })),
  num(S`A tank's volume is $V=500-20t+0.2t^2$ L. Using $V'(t)=0.4t-20$, when does the volume stop decreasing?`, 50, "0.4t = 20."),
  num(S`For $f(x)=x^2$, the secant from $x=a$ to $x=a+2$ has gradient 10. Find $a$.`, 4, "2a + 2 = 10."),
  num(S`The tangent to $y=x^3$ at $x=1$ meets the curve again at $x=p$. Find $p$.`, -2, "y = 3x − 2; x³ − 3x + 2 = (x − 1)²(x + 2)."),
  num(S`For $f(x)=x^2-2x$, find the positive $a$ such that the tangent at $x=a$ passes through $(0,-9)$.`, 3, "Tangent intercept −a²: −a² = −9."),
];

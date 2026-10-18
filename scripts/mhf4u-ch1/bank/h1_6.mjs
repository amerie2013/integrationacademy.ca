// 1.6 Slopes of Tangents and Instantaneous Rate of Change — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const TOPIC = "1.6 Slopes of Tangents and Instantaneous Rate of Change";
export const Q = [
  num(String.raw`Find the y-intercept of the tangent to $f(x)=x^2-3x$ at $x=2$.`, -4, "Slope 2(2) − 3 = 1 through (2, −2): y = x − 4."),
  num(String.raw`At which point on $y=x^2$ does the tangent have slope 10? Give the y-coordinate.`, 25, "2a = 10 → a = 5."),
  num(String.raw`The tangent to $y=x^3$ at $x=1$ crosses the x-axis where? (2 decimals)`, 0.6667, "Slope 3 through (1, 1): y = 3x − 2.", null, 0.006),
  num(String.raw`Evaluate $\dfrac{f(2+h)-f(2)}{h}$ for $f(x)=x^3$ when $h=0.1$.`, 12.61, "(9.261 − 8) ÷ 0.1.", null, 0.001),
  num(String.raw`The tangent to $f(x)=ax^2$ at $x=3$ has slope 12. Find $a$.`, 2, "Slope 2a·3 = 6a."),
  num(String.raw`The tangent to $f(x)=x^2+bx$ at $x=4$ is horizontal. Find $b$.`, -8, "Slope 2(4) + b = 0."),
  num(String.raw`At what x-value is the tangent to $y=2x^2-8x+1$ horizontal?`, 2, "Difference quotient 4a − 8 + 2h → 4a − 8 = 0."),
  num("A ball's height is h(t) = −4.9t² + 14.7t + 1 m. Find its exact velocity at t = 1 s.", 4.9, "−4.9(2 + h) + 14.7 → −9.8 + 14.7.", graph((x) => -4.9 * x * x + 14.7 * x + 1, { xmin: -0.3, xmax: 3.3, ymin: -1, ymax: 13 }, [P(1, 10.8)], { a: 0, step: { x: 0.5, y: 2 } }), 0.001),
  tf(String.raw`If every tangent slope of $f$ on $(0,3)$ is positive, then $f(3)>f(0)$ (for a smooth $f$).`, true, "f increases throughout the interval."),
  num(String.raw`The tangent to $y=x^2$ at $x=a$ ($a>0$) passes through $(0,-9)$. Find $a$.`, 3, "Tangent y = 2ax − a²; y-intercept −a² = −9."),
  num(String.raw`On $y=x^2$, at what x-value is the tangent parallel to the secant from $x=1$ to $x=7$?`, 4, "Secant slope 8 = 2a."),
  ms("At which labelled points on y = x³ − 3x is the instantaneous rate of change 0? Select all.", ["A", "B", "C", "D"], [0, 2], "A and C are turning points; at B the graph falls, at D it rises.", graph((x) => x ** 3 - 3 * x, { xmin: -2.5, xmax: 2.5, ymin: -3, ymax: 3 }, [P(-1, 2, "A"), P(0, 0, "B"), P(1, -2, "C"), P(2, 2, "D")])),
  num(String.raw`An object's position is $s(t)=t^3$ m. Use $(2+h)^3$ to find its exact velocity at $t=2$.`, 12, "(12h + 6h² + h³)/h → 12."),
  num(String.raw`Estimate the rate of change of $A(t)=1000(1.05)^t$ at $t=10$ (2 decimals).`, 79.47, "A short centred interval gives ≈ 79.47 dollars per year.", null, 0.05),
  mc(String.raw`For $y=x^2$, compare the average rate of change on $[1,3]$ with the instantaneous rate at $x=3$.`, "the instantaneous rate (6) is greater than the average rate (4)", ["they are equal", "the average rate is greater", "both are 6"], "Average (9 − 1)/2 = 4; tangent slope 2·3 = 6."),
  num(String.raw`The tangents to $y=x^2$ at $x=3$ and $x=-3$ meet at a point. Find its y-coordinate.`, -9, "y = 6x − 9 and y = −6x − 9 meet at (0, −9)."),
  num("The red line is tangent to y = 0.25x³ at (2, 2) and passes through (3, 5). Find the tangent's y-intercept.", -4, "Slope 3 through (2, 2): y = 3x − 4.", graph((x) => 0.25 * x ** 3, { xmin: -1, xmax: 3.5, ymin: -5, ymax: 8 }, [P(2, 2), P(3, 5)], { more: [{ f: (x) => 3 * x - 4, color: "red", a: 0, b: 3.5 }] })),
  tf(String.raw`The tangent to $y=x^4$ at $x=0$ is horizontal.`, true, "(h⁴ − 0)/h = h³ → 0."),
  num(String.raw`Estimate the instantaneous rate of change of $f(x)=\frac1x$ at $x=2$ (2 decimals).`, -0.25, "Centred slope with h = 0.01 is ≈ −0.25.", null, 0.005),
  num("Coffee cools as T(t) = 20 + 60(0.9)^t °C after t min. Estimate its rate of change at t = 5 (2 decimals).", -3.73, "A short centred interval gives ≈ −3.73 °C/min.", graph((x) => 20 + 60 * 0.9 ** x, { xmin: -0.5, xmax: 15, ymin: 0, ymax: 90 }, [P(5, 55.43)], { a: 0, step: { x: 1, y: 10 } }), 0.02),
];

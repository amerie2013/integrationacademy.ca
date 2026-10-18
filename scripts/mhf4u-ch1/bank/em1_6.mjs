// 1.6 Slopes of Tangents and Instantaneous Rate of Change — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const E = [
  num(String.raw`A tangent line passes through $(0,1)$ and $(2,7)$. Find its slope.`, 3, "6 ÷ 2."),
  tf("The instantaneous rate of change at a point equals the slope of the tangent there.", true, "That is the definition used in this unit."),
  mc("At a turning point, the instantaneous rate of change is:", "zero", ["positive", "negative", "undefined"], "The tangent is horizontal."),
  num(String.raw`Find the slope of the secant to $y=x^2$ from $x=1$ to $x=1.1$.`, 2.1, "(1.21 − 1) ÷ 0.1.", null, 0.0001),
  num(String.raw`Estimate the instantaneous rate of change of $y=x^2$ at $x=1$.`, 2, "Secant slopes 2.1, 2.01, … approach 2.", null, 0.05),
  mc("Is the instantaneous rate of change at P positive, negative or zero?", "positive", ["negative", "zero", "cannot tell"], "The graph is rising at P.", graph((x) => -((x - 2) ** 2) + 4, { xmin: -0.5, xmax: 4.5, ymin: -1, ymax: 5 }, [P(1, 3, "P")])),
  mc("Which secant gives the best estimate of the tangent slope at x = 2?", "from x = 2 to x = 2.001", ["from x = 2 to x = 3", "from x = 2 to x = 2.1", "from x = 0 to x = 2"], "The shorter the interval, the closer the estimate."),
  num(String.raw`Use $[4.9,5.1]$ to estimate the instantaneous rate of change of $f(x)=x^2$ at $x=5$.`, 10, "(26.01 − 24.01) ÷ 0.2.", null, 0.001),
  tf("A tangent line can cross the curve at the point of tangency.", true, "e.g. y = x³ at the origin."),
  num("An object has travelled 7.22, 8 and 8.82 m at t = 1.9, 2 and 2.1 s. Estimate its speed at t = 2 in m/s.", 8, "(8.82 − 7.22) ÷ 0.2.", null, 0.001),
  fill("The slope of the tangent at a maximum point is ___.", ["0", "zero"], "The tangent is horizontal."),
  mc("At which point is the instantaneous rate of change negative?", "A", ["B", "C", "none of them"], "The graph falls at A, is flat at B and rises at C.", graph((x) => x * x - 2 * x, { xmin: -1.5, xmax: 3.5, ymin: -2, ymax: 5 }, [P(-1, 3, "A"), P(1, -1, "B"), P(3, 3, "C")])),
  num(String.raw`Find the instantaneous rate of change of $f(x)=3x-2$ at $x=10$.`, 3, "A line's rate is its slope everywhere."),
  tf("The instantaneous rate of change of a constant function is 0 everywhere.", true, "Its graph is horizontal."),
  num(String.raw`Estimate the slope of the tangent to $y=x^3$ at $x=1$ using the secant from $x=1$ to $x=1.01$, then round to the nearest whole number.`, 3, "(1.030301 − 1) ÷ 0.01 = 3.0301."),
  mc("Height is in metres and time in seconds. The units of the instantaneous rate of change are:", "m/s", ["s/m", "m", "m/s²"], "Output units per input unit."),
  num(String.raw`What is the slope of the tangent line $y=4x-3$?`, 4, "y = mx + b."),
  mc("A car's speedometer reading is:", "the instantaneous rate of change of distance", ["the average rate of change over the trip", "the total distance", "the rate of change of speed"], "Speed at one moment."),
  num(String.raw`Estimate the speed at $t=3$ s if $d(t)=t^2$ m.`, 6, "Secant slopes approach 6.", null, 0.05),
  tf(String.raw`The average rate of change on $[2,2.001]$ is a good estimate of the instantaneous rate of change at 2.`, true, "The interval is very short."),
];

export const M = [
  num(String.raw`Estimate the instantaneous rate of change of $f(x)=x^3$ at $x=-2$ using $[-2.01,-1.99]$.`, 12, "Centred slope = 12.0001.", null, 0.01),
  num(String.raw`Use $\dfrac{f(-3+h)-f(-3)}{h}$ to find the exact slope of the tangent to $f(x)=x^2$ at $x=-3$.`, -6, "−6 + h → −6."),
  num(String.raw`Find the exact slope of the tangent to $f(x)=3x^2$ at $x=2$.`, 12, "(3(2 + h)² − 12)/h = 12 + 3h → 12."),
  num(String.raw`A rocket's height is $h(t)=-5t^2+40t$ m. Find its exact velocity at $t=3$.`, 10, "(h(3 + h) − h(3))/h = 10 − 5h → 10."),
  mc(String.raw`For $f(x)=x^2$, the difference quotient $\dfrac{f(a+h)-f(a)}{h}$ simplifies to:`, String.raw`$2a+h$`, [String.raw`$2a$`, String.raw`$a+h$`, String.raw`$2ah+h^2$`], "(2ah + h²)/h."),
  num(String.raw`Find the y-intercept of the tangent to $y=x^2$ at $(2,4)$.`, -4, "Slope 4: y = 4x − 4."),
  num(String.raw`Estimate the growth rate of $P(t)=100(1.2)^t$ at $t=2$ (2 decimals).`, 26.25, "A short centred interval gives ≈ 26.25.", null, 0.05),
  num("The red line is tangent to y = 0.5x² at (2, 2). Find its slope.", 2, "(6 − 2) ÷ (4 − 2).", graph((x) => 0.5 * x * x, { xmin: -1, xmax: 5, ymin: -3, ymax: 8 }, [P(2, 2), P(4, 6)], { more: [{ f: (x) => 2 * x - 2, color: "red", a: 0, b: 5 }] })),
  ms(String.raw`At which x-values is the instantaneous rate of change of $y=x^3-3x$ negative? Select all.`, ["x = −2", "x = 0", "x = 0.5", "x = 2"], [1, 2], "The graph falls between its turning points x = −1 and x = 1."),
  num(String.raw`Find the exact slope of the tangent to $f(x)=x^2+2x$ at $x=1$.`, 4, "(f(1 + h) − 3)/h = 4 + h."),
  tf(String.raw`$y=x^3$ has instantaneous rate of change 0 at $x=0$, but no turning point there.`, true, "The graph keeps rising through a flat point."),
  num("A tank holds 98.01, 100 and 102.01 L at t = 4.95, 5 and 5.05 min. Estimate the rate at t = 5 in L/min.", 40, "(102.01 − 98.01) ÷ 0.1.", null, 0.001),
  num(String.raw`Find the exact slope of the tangent to $f(x)=-x^2$ at $x=4$.`, -8, "−8 − h → −8."),
  mc(String.raw`Equation of the tangent to $y=x^2$ at $x=3$:`, String.raw`$y=6x-9$`, [String.raw`$y=6x+9$`, String.raw`$y=3x$`, String.raw`$y=6x-3$`], "Slope 6 through (3, 9)."),
  num(String.raw`An object falls $d(t)=4.9t^2$ m in $t$ s. Find its exact speed at $t=3$.`, 29.4, "4.9(6 + h) → 29.4.", null, 0.001),
  mc("At which point is the instantaneous rate of change of y = x³ greatest?", "C", ["A", "B", "all are equal"], "The graph is steepest at C.", graph((x) => x ** 3, { xmin: -2, xmax: 2, ymin: -3, ymax: 5 }, [P(-1, -1, "A"), P(0, 0, "B"), P(1.5, 3.375, "C")])),
  num(String.raw`At what x-value is the tangent to $f(x)=x^2-6x$ horizontal?`, 3, "Slope 2a − 6 = 0."),
  tf("For an increasing function, the instantaneous rate of change is never negative.", true, "A negative rate would mean the function falls there."),
  num(String.raw`Find the exact instantaneous rate of change of $f(x)=5-x^2$ at $x=-1$.`, 2, "(f(−1 + h) − 4)/h = 2 − h."),
  num(String.raw`Estimate the instantaneous rate of change of $y=2^x$ at $x=3$ (2 decimals).`, 5.55, "A short centred interval gives ≈ 5.545.", null, 0.01),
];

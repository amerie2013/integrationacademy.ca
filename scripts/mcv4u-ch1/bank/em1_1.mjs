// 1.1 Rates of Change and the Slope of a Curve — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const E = [
  num(String.raw`Find the slope of the secant through $(1,2)$ and $(5,10)$.`, 2, "8 ÷ 4."),
  num(String.raw`Find the average rate of change of $f(x)=x^2$ on $[2,4]$.`, 6, "(16 − 4) ÷ 2."),
  num(String.raw`Find the average rate of change of $f(x)=3x-5$ on $[0,8]$.`, 3, "A line: its slope."),
  tf("The average rate of change on an interval equals the slope of the secant through the endpoints.", true, "Both are Δy/Δx."),
  mc("Earnings are in dollars and time in hours. Units of the rate of change of earnings?", "dollars per hour", ["hours per dollar", "dollars", "dollar-hours"], "Output per input."),
  num("An object is 20 m from the start at t = 2 s and 80 m at t = 6 s. Find its average speed in m/s.", 15, "60 ÷ 4."),
  tf("The instantaneous rate of change at the peak of a smooth curve is 0.", true, "The tangent is horizontal."),
  mc(String.raw`On which interval does $y=x^2$ have average rate of change 5?`, String.raw`$[2,3]$`, [String.raw`$[1,2]$`, String.raw`$[0,5]$`, String.raw`$[3,4]$`], "(9 − 4) ÷ 1."),
  num(String.raw`Find the average rate of change of $f(x)=x^3$ on $[0,3]$.`, 9, "27 ÷ 3."),
  mc("Is the instantaneous rate of change at P positive, negative or zero?", "negative", ["positive", "zero", "it does not exist"], "The graph falls at P.", graph((x) => 6 - 0.5 * x * x, { xmin: -1, xmax: 4, ymin: -1, ymax: 7 }, [P(2, 4, "P")])),
  num(String.raw`Find the average rate of change of $f(x)=10-2x^2$ on $[1,2]$.`, -6, "(2 − 8) ÷ 1."),
  tf("A sharp corner on a graph has a tangent line.", false, "One-sided slopes differ."),
  num("The temperature fell from 30 °C to 18 °C in 4 hours. Average rate in °C/h?", -3, "−12 ÷ 4."),
  mc("Which secant gives the better estimate of the tangent slope at x = 1?", "from x = 1 to x = 1.01", ["from x = 1 to x = 2", "from x = 1 to x = 1.5", "from x = 0 to x = 2"], "Shorter interval."),
  num(String.raw`Find the slope of the secant to $y=x^2$ from $x=3$ to $x=3.1$.`, 6.1, "(9.61 − 9) ÷ 0.1.", null, 0.0001),
  num("The tangent drawn at P passes through (0, −4) and (2, 0). Estimate the instantaneous rate at P.", 2, "4 ÷ 2.", graph((x) => 0.5 * (x - 2) ** 2 + 2 * x - 4, { xmin: -1, xmax: 5, ymin: -5, ymax: 6 }, [P(0, -4, false), P(2, 0, "P")], { more: [{ f: (x) => 2 * x - 4, color: "green" }] })),
  mc("Which type of function has the same rate of change everywhere?", "linear", ["quadratic", "exponential", "cubic"], "Constant slope."),
  num(String.raw`Find the average rate of change of $f(x)=\sqrt x$ on $[1,9]$.`, 0.25, "(3 − 1) ÷ 8.", null, 0.0001),
  tf("An average rate of change of 0 means the function is constant on the interval.", false, "Only the endpoints are level."),
  fill("The slope of the tangent at a point is the ___ rate of change.", ["instantaneous"], "Rate at one instant."),
];

export const M = [
  num(String.raw`A ball's height is $h(t)=-5t^2+40t$ m. Find its average velocity on $[1,3]$.`, 20, "h(1) = 35, h(3) = 75."),
  num(String.raw`Find the average rate of change of $f(x)=x^3-4x$ on $[-1,2]$.`, -1, "f(−1) = 3, f(2) = 0: −3 ÷ 3."),
  num(String.raw`A population is $P(t)=500(1.1)^t$. Find the average rate of change on $[0,5]$ (2 decimals).`, 61.05, "P(5) ≈ 805.26: 305.26 ÷ 5.", null, 0.01),
  num(String.raw`For $y=x^2$, the secant from $x=4$ to $x=4.01$ has slope 8.01. Estimate the tangent slope at $x=4$.`, 8, "The secant slopes approach 8."),
  num(String.raw`Estimate the instantaneous rate of change of $x^3$ at $x=2$ using $[1.99,2.01]$ (nearest whole number).`, 12, "Centred slope 12.0001."),
  mc("At which labelled point is the instantaneous rate of change greatest?", "C", ["A", "B", "they are equal"], "Steepest at C.", graph((x) => 0.2 * x ** 3, { xmin: -1, xmax: 3.5, ymin: -1, ymax: 8 }, [P(0.5, 0.025, "A"), P(1.5, 0.675, "B"), P(3, 5.4, "C")])),
  num(String.raw`Find the average rate of change of $f(x)=\frac1x$ on $[1,4]$.`, -0.25, "(0.25 − 1) ÷ 3.", null, 0.0001),
  num("A tank holds 10, 18, 30 L at t = 0, 2, 4 min. Find the average rate on [2, 4] in L/min.", 6, "12 ÷ 2."),
  tf("For a linear function, the average rate of change is the same on every interval.", true, "It is the slope."),
  num(String.raw`What is the slope of every secant to $y=|x-1|$ from $(1,0)$ to a point on the right?`, 1, "Right of 1, y = x − 1."),
  num(String.raw`The cost of $x$ items is $C(x)=0.5x^2+10x+100$ dollars. Find the average rate of change from 10 to 20 items.`, 25, "C(10) = 250, C(20) = 500."),
  mc(String.raw`Which value best estimates the slope of the tangent to $y=x^2$ at $x=1$?`, "2", ["1", "2.5", "3"], "Centred secants give exactly 2."),
  num(String.raw`For $h(t)=-4.9t^2+20t$, find the average velocity on $[2,2.1]$ (2 decimals).`, -0.09, "h(2) = 20.4, h(2.1) = 20.391.", null, 0.005),
  num(String.raw`Estimate the instantaneous rate of change of $2^x$ at $x=0$ (2 decimals).`, 0.69, "Centred estimate ≈ 0.693.", null, 0.01),
  mc(String.raw`For $f(x)=x^2-4x$, on which interval $[0,b]$ is the average rate of change 0?`, String.raw`$b=4$`, [String.raw`$b=2$`, String.raw`$b=1$`, String.raw`$b=8$`], "f(0) = f(4) = 0."),
  num(String.raw`Find the average rate of change of $f(x)=x^4$ on $[1,2]$.`, 15, "(16 − 1) ÷ 1."),
  tf("The secant slope from a to b equals the secant slope from b to a.", true, "Both numerator and denominator change sign."),
  num(String.raw`Find $b>0$ so that the average rate of change of $x^2$ on $[0,b]$ is 7.`, 7, "b² ÷ b = b."),
  num("The tangent drawn at P passes through (1, 3) and (3, −1). Estimate the instantaneous rate at P.", -2, "−4 ÷ 2.", graph((x) => 3 - 2 * (x - 1) - (x - 1) ** 2, { xmin: -2, xmax: 4, ymin: -6, ymax: 6 }, [P(1, 3, "P"), P(3, -1, false)], { more: [{ f: (x) => -2 * x + 5, color: "green" }] })),
  num(String.raw`An object's position is $s(t)=t^3-3t$ m. Find its average velocity on $[0,2]$.`, 1, "s(0) = 0, s(2) = 2."),
];

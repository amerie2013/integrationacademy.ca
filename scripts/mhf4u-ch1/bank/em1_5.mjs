// 1.5 Slopes of Secants and Average Rate of Change — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const E = [
  num(String.raw`Find the average rate of change of $f(x)=x^2$ on $[1,3]$.`, 4, "(9 − 1) ÷ 2."),
  num(String.raw`Find the slope of the secant through $(2,5)$ and $(6,13)$.`, 2, "8 ÷ 4."),
  num(String.raw`Find the average rate of change of $f(x)=3x+1$ on $[0,10]$.`, 3, "A line has the same rate everywhere."),
  tf("The average rate of change on an interval equals the slope of the secant joining the endpoints.", true, "Both are Δy/Δx."),
  num(String.raw`Find the average rate of change of $f(x)=x^3$ on $[0,2]$.`, 4, "8 ÷ 2."),
  mc("Distance is in metres and time in seconds. The units of the average rate of change are:", "m/s", ["s/m", "m", "m·s"], "Output units per input unit."),
  num("A plant is 2 cm tall at day 0 and 32 cm tall at day 5. Find the average growth rate in cm per day.", 6, "30 ÷ 5."),
  tf("A negative average rate of change means the function decreased on average over the interval.", true, "The endpoint is lower than the start."),
  num(String.raw`Find the average rate of change of $f(x)=10-x^2$ on $[0,3]$.`, -3, "(1 − 10) ÷ 3."),
  num("Find the slope of the secant shown on y = 0.5x².", 2, "(8 − 0) ÷ (4 − 0).", graph((x) => 0.5 * x * x, { xmin: -1, xmax: 5, ymin: -1, ymax: 10 }, [P(0, 0), P(4, 8)], { more: [{ f: (x) => 2 * x, a: -0.3, b: 4.5, color: "red" }] })),
  num("A town had 1200 people in 2015 and 1500 in 2021. Find the average rate of change in people per year.", 50, "300 ÷ 6."),
  mc(String.raw`For $y=x^2$, which interval has the greatest average rate of change?`, String.raw`$[3,4]$`, [String.raw`$[0,1]$`, String.raw`$[1,2]$`, String.raw`$[2,3]$`], "The parabola gets steeper as x grows: rates 1, 3, 5, 7."),
  num(String.raw`Find the average rate of change of $f(x)=2^x$ on $[0,3]$ (2 decimals).`, 2.3333, "(8 − 1) ÷ 3.", null, 0.006),
  fill(String.raw`The average rate of change on $[a,b]$ is $f(b)-f(a)$ divided by ___.`, ["b-a", "b − a", "b - a", "(b-a)"], "The change in x."),
  num(String.raw`A gym charges $C(n)=50+8n$ dollars for $n$ visits. Find the average rate of change from 10 to 20 visits.`, 8, "Linear: slope 8."),
  tf("An average rate of change of 0 means the function is constant on the interval.", false, "It only means the endpoints have the same height."),
  num(String.raw`Find the average rate of change of $f(x)=x^2-4x$ on $[0,4]$.`, 0, "f(0) = f(4) = 0."),
  mc("What is the sign of the slope of the secant from A to B?", "negative", ["positive", "zero", "undefined"], "B is lower than A.", graph((x) => -0.5 * x * x + 6, { xmin: -1, xmax: 4, ymin: 0, ymax: 7 }, [P(0, 6, "A"), P(3, 1.5, "B")])),
  num(String.raw`An object has travelled $d(t)=5t^2$ m after $t$ s. Find its average speed on $[2,4]$.`, 30, "(80 − 20) ÷ 2."),
  num("The temperature fell from 24 °C to 15 °C in 3 hours. Find the average rate of change in °C per hour.", -3, "−9 ÷ 3."),
];

export const M = [
  num(String.raw`A ball has height $h(t)=-5t^2+30t$ m. Find its average velocity on $[1,4]$.`, 5, "h(1) = 25, h(4) = 40: 15 ÷ 3."),
  num(String.raw`Find the average rate of change of $f(x)=x^3-x$ on $[-2,2]$.`, 3, "f(−2) = −6, f(2) = 6: 12 ÷ 4."),
  num(String.raw`A car's value is $V(t)=1000(0.9)^t$ hundred dollars. Find the average rate of change on $[0,3]$ (2 decimals).`, -90.3333, "V(3) = 729: (729 − 1000) ÷ 3.", null, 0.006),
  num(String.raw`Find the average rate of change of $f(x)=x^4$ on $[1,2]$.`, 15, "(16 − 1) ÷ 1."),
  mc("A table gives y = 2, 5, 6, 12 at t = 0, 1, 2, 3. Which interval has the greatest average rate of change?", String.raw`$[2,3]$`, [String.raw`$[0,1]$`, String.raw`$[1,2]$`, String.raw`$[0,3]$`], "Rates: 3, 1, 6, and 10/3 on [0, 3]."),
  num(String.raw`Find the average rate of change of $f(x)=2x^2+1$ on $[3,4]$.`, 14, "f(4) = 33, f(3) = 19."),
  ms(String.raw`For which functions is the average rate of change on $[0,2]$ equal to 2? Select all.`, [String.raw`$y=2x$`, String.raw`$y=x^2$`, String.raw`$y=x^3$`, String.raw`$y=0.25x^3$`], [0, 1], "4 ÷ 2 = 2 for both y = 2x and y = x²; 8 ÷ 2 = 4; 2 ÷ 2 = 1."),
  num("Find the slope of the secant through the two marked points.", -2, "(−3 − 3) ÷ (2 − (−1)).", graph((x) => x * x - 3 * x - 1, { xmin: -2, xmax: 4, ymin: -4, ymax: 6 }, [P(-1, 3), P(2, -3)])),
  tf("For a linear function, the average rate of change is the same on every interval.", true, "It equals the slope."),
  num(String.raw`An account grows as $A(t)=500(1.06)^t$ dollars. Find the average rate of change on $[0,4]$ (2 decimals).`, 32.81, "A(4) ≈ 631.24: 131.24 ÷ 4.", null, 0.01),
  num(String.raw`Find the average rate of change of $f(x)=x^2$ on $[2,2.5]$.`, 4.5, "(6.25 − 4) ÷ 0.5."),
  num(String.raw`The average rate of change of $f$ on $[1,5]$ is 3 and $f(1)=2$. Find $f(5)$.`, 14, "f(5) − 2 = 3 × 4."),
  num(String.raw`Find the average rate of change of $g(x)=-x^3$ on $[-1,1]$.`, -1, "(−1 − 1) ÷ 2."),
  mc("A tank's volume has average rate of change −4 L/min on [0, 10]. What does this mean?", "the tank lost 40 L in total over the 10 minutes", ["the tank lost exactly 4 L every minute", "the tank holds 4 L", "the tank gained 40 L"], "Net change = rate × time; the rate may vary inside."),
  num(String.raw`An object's position is $s(t)=t^3$ m. Find its average velocity on $[2,4]$.`, 28, "(64 − 8) ÷ 2."),
  num("A car has gone 0, 40, 100, 180 km at t = 0, 1, 2, 3 h. Find its average speed on [1, 3] in km/h.", 70, "(180 − 40) ÷ 2."),
  mc("Which secant on y = 0.25x³ is steepest?", "BC", ["AB", "AC", "all are equally steep"], "AB: 1, AC: 2.25, BC: 4.75.", graph((x) => 0.25 * x ** 3, { xmin: -0.5, xmax: 3.5, ymin: -1, ymax: 8 }, [P(0, 0, "A"), P(2, 2, "B"), P(3, 6.75, "C")])),
  num(String.raw`A population is $P(t)=50t^2+1000$. Find the average rate of change on $[2,6]$.`, 400, "P(2) = 1200, P(6) = 2800: 1600 ÷ 4."),
  tf(String.raw`The average rate of change of $y=x^2$ on $[-2,2]$ is 0.`, true, "Both endpoints have y = 4."),
  num(String.raw`Find the average rate of change of $f(x)=x^2+x$ on $[1,4]$.`, 6, "f(1) = 2, f(4) = 20: 18 ÷ 3."),
];

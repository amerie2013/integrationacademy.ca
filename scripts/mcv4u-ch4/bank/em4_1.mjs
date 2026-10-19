// 4.1 Instantaneous Rates of Change of Sinusoidal Functions — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI;
export const E = [
  num(S`What is the slope of $y=\sin x$ at $x=4\pi$?`, 1, "Same as at 0: cos 4π = 1."),
  num(S`What is the slope of $y=\sin x$ at $x=\frac{5\pi}{2}$?`, 0, "A peak: cos(5π/2) = 0."),
  num(S`What is the slope of $y=\cos x$ at $x=\frac{3\pi}{2}$?`, 1, "−sin(3π/2) = 1."),
  mc("Where is the graph of y = sin x steepest?", "where it crosses its midline", ["at its peaks", "at its troughs", "where it is farthest from the x-axis"], "Slope ±1 at the midline crossings."),
  tf(S`The slope of $y=\sin x$ at a peak is 0.`, true, "The tangent is horizontal there."),
  num(S`Evaluate $\frac{\sin(0.01)}{0.01}$ (radians) to 4 decimals.`, 1, "0.99998…", null, 0.0001),
  mc(S`For small $h$ in radians, $\sin h$ is approximately:`, S`$h$`, [S`$1$`, S`$0$`, S`$h^2$`], "sin h / h → 1."),
  num(S`What is the slope of $y=\sin x+7$ at $x=0$?`, 1, "A vertical shift does not change slopes."),
  tf(S`If $x$ is in degrees, the slope of $y=\sin x$ at $x=0$ is 1.`, false, "It is π/180 ≈ 0.0175."),
  num(S`What is the slope of $y=\cos x$ at $x=-\frac\pi2$?`, 1, "−sin(−π/2) = 1."),
  fill(S`The slopes of $y=\sin x$ (radians) lie on the graph of y = ___.`, ["cos x", "cosx", "cos(x)"], "Slope 1 at 0, 0 at π/2…"),
  num("The tangent to y = sin x at x = π is drawn. What is its slope?", -1, "cos π = −1.", graph(Math.sin, { xmin: 0, xmax: 2 * PI, ymin: -1.6, ymax: 1.6 }, [P(PI, 0)], { more: [{ f: (x) => -(x - PI), color: "green", a: PI - 1.2, b: PI + 1.2 }], step: { x: 0.5, y: 0.5 } })),
  num(S`Evaluate $\frac{\cos(0.001)-1}{0.001}$ to 4 decimals.`, -0.0005, "Close to 0.", null, 0.0001),
  mc(S`On $[0,2\pi]$, where is the slope of $y=\sin x$ negative?`, S`on $\left(\frac\pi2,\frac{3\pi}2\right)$`, [S`on $(0,\pi)$`, S`on $(\pi,2\pi)$`, S`nowhere`], "cos x < 0 there."),
  num(S`Find the average rate of change of $y=\sin x$ on $[0,\pi]$.`, 0, "sin π − sin 0 = 0."),
  tf(S`The slope of $y=\sin x$ is never greater than 1.`, true, "cos x ≤ 1."),
  num(S`What is the slope of $y=\cos x$ at $x=\frac\pi6$?`, -0.5, "−sin(π/6).", null, 0.0001),
  num("The tangent to y = cos x at x = π/2 is drawn. What is its slope?", -1, "−sin(π/2).", graph(Math.cos, { xmin: 0, xmax: 2 * PI, ymin: -1.6, ymax: 1.6 }, [P(PI / 2, 0)], { more: [{ f: (x) => -(x - PI / 2), color: "green", a: PI / 2 - 1.1, b: PI / 2 + 1.1 }], step: { x: 0.5, y: 0.5 } })),
  mc(S`Where in $(0,2\pi)$ does $y=\cos x$ have slope 0?`, S`at $x=\pi$`, [S`at $x=\frac\pi2$`, S`at $x=\frac{3\pi}2$`, "nowhere"], "Its trough."),
  num(S`At how many $x$ in $[0,2\pi]$ does $y=\sin x$ have slope 1?`, 2, "x = 0 and x = 2π."),
];

export const M = [
  num(S`Estimate the slope of $y=\sin x$ at $x=0.5$ (3 decimals).`, 0.878, "cos 0.5.", null, 0.002),
  num(S`Estimate the slope of $y=\cos x$ at $x=1$ (3 decimals).`, -0.841, "−sin 1.", null, 0.002),
  num(S`Find the average rate of change of $y=\cos x$ on $[0,\pi]$ (4 decimals).`, -0.6366, "(−1 − 1)/π.", null, 0.0005),
  num(S`What is the slope of $y=3\sin x$ at $x=0$?`, 3, "Triple the heights, triple the slopes."),
  mc(S`The slopes of $y=\cos x$ lie on which curve?`, S`$y=-\sin x$`, [S`$y=\sin x$`, S`$y=\cos x$`, S`$y=-\cos x$`], "Slope 0 at 0, −1 at π/2."),
  num(S`At what $x$ in $(0,\pi)$ is the slope of $y=\sin x$ equal to $-\frac12$? (4 decimals)`, 2.0944, "cos x = −½: x = 2π/3.", null, 0.0005),
  num(S`What is the slope of $y=\sin x$ at $x=\frac\pi4$ (4 decimals)?`, 0.7071, "cos(π/4).", null, 0.0005),
  tf(S`There is no $x$ where the slopes of $\sin x$ and $\cos x$ are both 0.`, true, "cos x and sin x are never 0 together."),
  num(S`In degree mode, what is the slope of $y=\sin x$ at $x=0$ (5 decimals)?`, 0.01745, "π/180.", null, 0.00002),
  num("The depth of water is d(t) = 2 sin(πt/6) + 4 m (graph shown). Estimate the rate of change at t = 0 (4 decimals).", 1.0472, "2 · π/6.", graph((t) => 2 * Math.sin((PI / 6) * t) + 4, { xmin: 0, xmax: 24, ymin: 0, ymax: 7 }, [P(0, 4)], { a: 0, b: 24, step: { x: 2, y: 1 } }), 0.001),
  num(S`What is the slope of $y=\sin x$ at $x=-\pi$?`, -1, "cos(−π)."),
  mc(S`What is the tangent to $y=\sin x$ at $x=\frac\pi2$?`, S`$y=1$`, [S`$y=x$`, S`$y=x-\frac\pi2$`, S`$x=\frac\pi2$`], "Horizontal at the peak."),
  num(S`Find the slope of the secant of $y=\sin x$ from $x=\frac\pi6$ to $x=\frac\pi2$ (4 decimals).`, 0.4775, "(1 − ½)/(π/3).", null, 0.0005),
  num(S`How many horizontal tangents does $y=\sin x$ have on $[0,4\pi]$?`, 4, "π/2, 3π/2, 5π/2, 7π/2."),
  tf("A centred difference quotient is usually more accurate than a one-sided one with the same h.", true, "Errors on the two sides cancel."),
  num(S`What is the slope of $y=\cos x$ at $x=\frac{2\pi}3$ (4 decimals)?`, -0.866, "−sin(2π/3).", null, 0.0005),
  num("The graphs of y = sin x and y = cos x are shown. At what x in (0, π/2) is the slope of sin x equal to the value of sin x? (4 decimals)", 0.7854, "cos x = sin x at π/4.", graph(Math.sin, { xmin: 0, xmax: 3.3, ymin: -1.2, ymax: 1.2 }, [P(PI / 4, Math.SQRT1_2)], { more: [{ f: Math.cos, color: "blue" }], step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`Evaluate $\frac{\sin(0.1)}{0.1}$ to 5 decimals.`, 0.99833, "Radians.", null, 0.00001),
  mc("Why does calculus with trigonometric functions use radians?", "because then sin h / h → 1, so (sin x)′ = cos x exactly", ["because degrees are not angles", "because calculators require it", "because radians are larger"], "In degrees a factor π/180 appears."),
  num(S`What is the slope of $y=2+\cos x$ at $x=\frac\pi2$?`, -1, "−sin(π/2)."),
];

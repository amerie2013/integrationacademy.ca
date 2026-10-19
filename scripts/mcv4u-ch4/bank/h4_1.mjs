// 4.1 Instantaneous Rates of Change of Sinusoidal Functions — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI;
export const TOPIC = "4.1 Instantaneous Rates of Change of Sinusoidal Functions";
export const Q = [
  num("The graph of y = sin x is shown. At what x in (0, π) is the tangent slope −√3/2? (4 decimals)", 2.618, "cos x = −√3/2: x = 5π/6.", graph(Math.sin, { xmin: 0, xmax: 2 * PI, ymin: -1.6, ymax: 1.6 }, [P((5 * PI) / 6, 0.5)], { more: [{ f: (x) => 0.5 - (Math.sqrt(3) / 2) * (x - (5 * PI) / 6), color: "green", a: 1.7, b: 3.5 }], step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`Evaluate $\displaystyle\lim_{h\to0}\frac{\sin3h}{h}$.`, 3, "3 · sin(3h)/(3h)."),
  num(S`Evaluate $\displaystyle\lim_{h\to0}\frac{\sin h}{2h}$.`, 0.5, "½ · sin h / h.", null, 0.0001),
  num(S`Evaluate $\displaystyle\lim_{h\to0}\frac{1-\cos h}{h}$.`, 0, "The negative of (cos h − 1)/h."),
  mc("Which identity proves that the slope of sin x is cos x?", S`$\sin(x+h)=\sin x\cos h+\cos x\sin h$`, [S`$\sin^2x+\cos^2x=1$`, S`$\sin2x=2\sin x\cos x$`, S`$\cos(x+h)=\cos x+\cos h$`], "Expand sin(x + h) in the difference quotient."),
  num(S`Find the y-intercept of the tangent to $y=\sin x$ at $x=\frac\pi6$ (4 decimals).`, 0.0466, "y = ½ + (√3/2)(x − π/6); at 0: ½ − √3π/12.", null, 0.0005),
  num(S`A Ferris wheel rider's height is $h(t)=10-8\cos\left(\frac{\pi}{15}t\right)$ m. Estimate the vertical speed at $t=7.5$ s (4 decimals).`, 1.6755, "8 · π/15 · sin(π/2).", null, 0.0005),
  tf(S`For every $x$, the slope of $y=\sin x$ equals the height of $y=\cos x$.`, true, "(sin x)′ = cos x."),
  num("The secant of y = sin x from 0 to h is drawn for h = 0.5. What is its slope? (4 decimals)", 0.9589, "sin(0.5)/0.5.", graph(Math.sin, { xmin: -0.3, xmax: 2, ymin: -0.3, ymax: 1.2 }, [P(0, 0), P(0.5, Math.sin(0.5))], { more: [{ f: (x) => (Math.sin(0.5) / 0.5) * x, color: "amber", a: -0.2, b: 1.2 }, { f: (x) => x, color: "green", a: -0.2, b: 1.1 }], step: { x: 0.25, y: 0.25 } }), 0.0005),
  num(S`Evaluate $\displaystyle\lim_{h\to0}\frac{\sin5h}{\sin2h}$.`, 2.5, "≈ 5h / 2h.", null, 0.0001),
  num(S`Evaluate $\displaystyle\lim_{h\to0}\frac{\tan h}{h}$.`, 1, "(sin h / h)(1/cos h)."),
  mc(S`The slopes of $y=-\sin x$ lie on which curve?`, S`$y=-\cos x$`, [S`$y=\cos x$`, S`$y=\sin x$`, S`$y=-\sin x$`], "Reflect sin x and its slopes."),
  num("Daylight is D(t) = 12 + 2.5 sin(2πt/365) hours (graph shown). Estimate its rate of change at t = 0 in hours per day (4 decimals).", 0.043, "2.5 · 2π/365.", graph((t) => 12 + 2.5 * Math.sin((2 * PI * t) / 365), { xmin: 0, xmax: 370, ymin: 8, ymax: 16 }, [P(0, 12)], { a: 0, b: 365, step: { x: 30, y: 1 } }), 0.0005),
  num(S`At how many $x$ in $[0,2\pi)$ are the slopes of $\sin x$ and $\cos x$ equal?`, 2, "cos x = −sin x: tan x = −1."),
  num(S`Evaluate $\displaystyle\lim_{h\to0}\frac{\cos h-1}{h^2}$.`, -0.5, "Multiply by (cos h + 1): −(sin h/h)²/(cos h + 1).", null, 0.0001),
  tf(S`$\sin x\le x$ for every $x\ge0$.`, true, "Equal slopes at 0 and sin x grows more slowly afterward."),
  num("The tangent to y = sin x at x = π is drawn. Where does it cross the y-axis? (4 decimals)", 3.1416, "y = −(x − π).", graph(Math.sin, { xmin: -0.3, xmax: 4.5, ymin: -1.5, ymax: 3.5 }, [P(PI, 0), P(0, PI)], { more: [{ f: (x) => -(x - PI), color: "green", a: 0, b: 4.3 }], step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`In degree mode, what is the slope of $y=\sin x$ at $x=90$?`, 0, "A peak, whatever the units."),
  num(S`Find the average rate of change of $y=\cos x$ on $\left[\frac\pi2,\pi\right]$ (4 decimals).`, -0.6366, "(−1 − 0)/(π/2).", null, 0.0005),
  num(S`Evaluate $\displaystyle\lim_{h\to0}\frac{\sin^2h}{h}$.`, 0, "(sin h / h) · sin h → 1 · 0."),
];

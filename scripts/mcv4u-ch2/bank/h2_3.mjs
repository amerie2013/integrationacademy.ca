// 2.3 Velocity, Acceleration, and Second Derivatives — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "2.3 Velocity, Acceleration, and Second Derivatives";
export const Q = [
  num("An object moves with s(t) = 2t³ − 21t² + 60t m (graph shown). Find the total distance travelled from t = 0 to t = 6.", 90, "Turns at t = 2 and 5: s = 0, 52, 25, 36; 52 + 27 + 11.", graph((t) => 2 * t ** 3 - 21 * t * t + 60 * t, { xmin: 0, xmax: 6.5, ymin: 0, ymax: 60 }, [P(2, 52), P(5, 25), P(6, 36)], { a: 0, b: 6.5, step: { x: 1, y: 10 } })),
  mc(S`For $s(t)=t^3-12t^2+45t$, when is the object speeding up?`, S`$3\lt t\lt4$ and $t\gt5$`, [S`$0\lt t\lt3$ only`, S`$3\lt t\lt5$`, S`$t\gt4$ only`], "v = 3(t − 3)(t − 5), a = 6t − 24: same signs on (3, 4) and t > 5."),
  num(S`For $s(t)=t^4-8t^2$, at what positive time is the object at rest?`, 2, "4t(t² − 4) = 0."),
  num(S`A ball's height is $h(t)=-4.9t^2+24.5t+3$ m. Find its maximum height (3 decimals).`, 33.625, "v = 0 at t = 2.5.", null, 0.001),
  num("A ball thrown upward has h(t) = −5t² + v₀t and reaches a maximum height of 45 m. Find v₀ (m/s).", 30, "Top at t = v₀/10, height v₀²/20 = 45."),
  num(S`For $s(t)=t^3-6t^2+5t$, find the velocity at the moment the acceleration is zero.`, -7, "a = 6t − 12 = 0 at t = 2; v = 12 − 24 + 5."),
  num(S`For $f(x)=x^5$, find $f'''(1)$.`, 60, "5x⁴ → 20x³ → 60x²."),
  tf("An object speeds up exactly when its velocity and acceleration have the same sign.", true, "Then |v| increases."),
  num(S`Find the fourth derivative of $f(x)=x^4$.`, 24, "4 · 3 · 2 · 1."),
  num("For s(t) = t² − 8t + 15 m (graph shown), find the total distance travelled from t = 0 to t = 6.", 20, "Turns at t = 4: |−1 − 15| + |3 − (−1)|.", graph((t) => t * t - 8 * t + 15, { xmin: 0, xmax: 6.5, ymin: -2, ymax: 16 }, [P(0, 15), P(4, -1), P(6, 3)], { a: 0, b: 6.5, step: { x: 1, y: 2 } })),
  num("The velocity graph v(t) = t² − 6t + 8 is shown. For how many seconds does the object move backward?", 2, "v < 0 on (2, 4).", graph((t) => t * t - 6 * t + 8, { xmin: 0, xmax: 5.5, ymin: -2, ymax: 8 }, [P(2, 0), P(4, 0)], { a: 0, b: 5.5 })),
  num(S`For $s(t)=t^3-3t^2-9t+5$, find the speed when the acceleration is zero.`, 12, "a = 0 at t = 1; v = 3 − 6 − 9 = −12."),
  mc("A velocity graph is below the t-axis and rising. The object is:", "moving backward and slowing down", ["moving forward and speeding up", "moving backward and speeding up", "at rest"], "v < 0, a > 0: opposite signs."),
  num(S`For $f(x)=x^3-6x^2$, where is $f''(x)=0$?`, 2, "6x − 12 = 0."),
  num("A stone falls from an 80 m cliff: h(t) = 80 − 4.9t² (graph shown). Find its speed on impact (2 decimals).", 39.6, "t = √(80/4.9) ≈ 4.04 s; speed 9.8t ≈ 39.60 m/s.", graph((t) => 80 - 4.9 * t * t, { xmin: 0, xmax: 4.5, ymin: 0, ymax: 90 }, [P(4.04, 0)], { a: 0, b: Math.sqrt(80 / 4.9), step: { x: 0.5, y: 10 } }), 0.01),
  num(S`An object has $s(t)=pt^2+qt$ with $v(0)=6$ and constant acceleration $-4$. At what time is it at rest?`, 1.5, "q = 6, p = −2: v = −4t + 6.", null, 0.0001),
  num(S`For $f(x)=\frac1x$, find $f''(-1)$.`, -2, "2x⁻³ at −1."),
  num("The position graph s(t) = t³ − 3t² + 3t is shown. At what time is the object momentarily at rest?", 1, "v = 3(t − 1)² ≥ 0: it never turns back.", graph((t) => t ** 3 - 3 * t * t + 3 * t, { xmin: 0, xmax: 2.2, ymin: 0, ymax: 3 }, [P(1, 1)], { a: 0, b: 2.2, step: { x: 0.5, y: 0.5 } })),
  num(S`A braking car has $s(t)=20t-2t^2$ m. How far does it travel before it stops?`, 50, "v = 20 − 4t = 0 at t = 5; s(5) = 50."),
  num(S`For $s(t)=t^4$, find the third derivative at $t=1$.`, 24, "4t³ → 12t² → 24t."),
];

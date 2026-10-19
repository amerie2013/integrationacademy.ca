// 2.3 Velocity, Acceleration, and Second Derivatives — 20 easy + 20 medium questions
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  num(S`An object has position $s(t)=3t^2$ m. Find $v(2)$ in m/s.`, 12, "v = 6t."),
  num(S`For $s(t)=t^3$, find the acceleration at $t=1$.`, 6, "a = 6t."),
  mc("Velocity is the derivative of which quantity?", "position", ["acceleration", "speed", "time"], "v = s′(t)."),
  tf("Acceleration is the derivative of velocity.", true, "a = v′(t)."),
  num(S`For $s(t)=10t-t^2$, find the initial velocity $v(0)$.`, 10, "v = 10 − 2t."),
  num(S`For $f(x)=x^4$, find $f''(1)$.`, 12, "f″ = 12x²."),
  mx(S`Find $f''(x)$ for $f(x)=x^3$.`, "6*x", "3x² → 6x."),
  num(S`When is an object with $s(t)=t^2-14t$ at rest?`, 7, "2t − 14 = 0."),
  fill("Speed is the ___ value of velocity.", ["absolute"], "Speed = |v|."),
  num(S`For $s(t)=5t+2$, what is the acceleration?`, 0, "v = 5 is constant."),
  num(S`A ball's height is $h(t)=-5t^2+30t$ m. Find its velocity at $t=2$ s.`, 10, "−10t + 30."),
  tf("If the velocity is negative, the object moves in the negative direction.", true, "The sign of v gives the direction."),
  num(S`For $s(t)=2t^3$, find $v(1)$.`, 6, "6t²."),
  mc("An object has v > 0 and a < 0. It is:", "slowing down", ["speeding up", "at rest", "moving backward"], "Opposite signs."),
  num(S`For $f(x)=x^5$, find $f''(1)$.`, 20, "f″ = 20x³."),
  num(S`For $s(t)=t^2+6t$, find the acceleration.`, 2, "v = 2t + 6, a = 2."),
  num("The position graph s(t) = t² − 2t is shown. At what time is the object at rest?", 1, "v = 2t − 2 = 0.", graph((t) => t * t - 2 * t, { xmin: 0, xmax: 3, ymin: -2, ymax: 4 }, [P(1, -1)], { a: 0, b: 3 })),
  num(S`For $s(t)=4t^3-t$, find $v(1)$.`, 11, "12t² − 1."),
  mc("What are the units of acceleration if s is in metres and t in seconds?", "m/s²", ["m/s", "m", "s/m"], "Change in velocity per second."),
  num("The velocity graph v(t) = 3 − t is shown. At what time is the object at rest?", 3, "v = 0.", graph((t) => 3 - t, { xmin: 0, xmax: 5, ymin: -3, ymax: 4 }, [P(3, 0)], { a: 0, b: 5 })),
];

export const M = [
  num(S`For $s(t)=t^3-3t^2+5$, find $a(2)$.`, 6, "a = 6t − 6."),
  num(S`For $s(t)=t^3-27t$, at what positive time is the object at rest?`, 3, "3t² − 27 = 0."),
  num(S`For $s(t)=2t^2-12t+1$, at what time does the object change direction?`, 3, "v = 4t − 12 = 0."),
  num(S`A ball's height is $h(t)=-4.9t^2+9.8t+10$ m. Find its maximum height.`, 14.9, "v = 0 at t = 1: −4.9 + 9.8 + 10.", null, 0.001),
  num(S`For $s(t)=t^3-6t^2+12t$, when is the acceleration zero?`, 2, "6t − 12 = 0."),
  num(S`For $f(x)=\frac1{x^2}$, find $f''(1)$.`, 6, "f′ = −2x⁻³, f″ = 6x⁻⁴."),
  num(S`For $f(x)=\sqrt x$, find $f''(1)$.`, -0.25, "f″ = −¼x^(−3/2).", null, 0.0001),
  mc("An object has v = −3 m/s and a = −2 m/s². It is:", "speeding up", ["slowing down", "at rest", "moving forward"], "Same signs."),
  num(S`For $s(t)=t^3-9t$, find the speed at $t=1$.`, 6, "v(1) = 3 − 9 = −6; speed 6."),
  num(S`For $s(t)=t^2-6t+8$ m, find the displacement from $t=0$ to $t=5$.`, -5, "s(5) − s(0) = 3 − 8."),
  num(S`For $s(t)=t^2-6t+8$ m, find the total distance travelled from $t=0$ to $t=5$.`, 13, "Turns at t = 3: |−1 − 8| + |3 − (−1)| = 9 + 4."),
  tf("If the acceleration is zero, the object is at rest.", false, "a = 0 means constant velocity."),
  num("The velocity graph v(t) = t² − 5t + 4 is shown. At what first time is the object at rest?", 1, "(t − 1)(t − 4) = 0.", graph((t) => t * t - 5 * t + 4, { xmin: 0, xmax: 5, ymin: -3, ymax: 5 }, [P(1, 0), P(4, 0)], { a: 0, b: 5 })),
  num(S`For $s(t)=-t^3+6t^2$, at what time is the velocity greatest?`, 2, "a = −6t + 12 = 0."),
  num(S`For $f(x)=x^4-x^3$, find $f''(2)$.`, 36, "12x² − 6x at 2."),
  num(S`A stone dropped from 45 m has $h(t)=45-5t^2$. Find its speed when it hits the ground (m/s).`, 30, "t = 3; |v| = 10t."),
  num(S`For $s(t)=2t^3-3t^2-12t$, at what positive time is the object at rest?`, 2, "6(t − 2)(t + 1) = 0."),
  num(S`For $s(t)=(t-2)^3$, find $a(3)$.`, 6, "a = 6(t − 2)."),
  num("The position graph s(t) = t³ − 12t is shown. At what positive time is the object at rest?", 2, "3t² − 12 = 0.", graph((t) => t ** 3 - 12 * t, { xmin: 0, xmax: 4, ymin: -18, ymax: 18 }, [P(2, -16)], { a: 0, b: 4, step: { x: 0.5, y: 4 } })),
  mx(S`Find $f''(x)$ for $f(x)=x^4-3x^2$.`, "12*x^2-6", "4x³ − 6x → 12x² − 6."),
];

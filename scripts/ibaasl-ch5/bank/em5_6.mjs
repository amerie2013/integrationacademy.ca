// 5.6 Kinematics and Rates of Change — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  num(S`$s=4t^2+t$ m. Find $v$ at $t=2$ s.`, 17, "v = 8t + 1."),
  num(S`$s=t^3-2t$ m. Find $v$ at $t=1$.`, 1, "v = 3t² − 2."),
  num(S`$v=6t-t^2$ m/s. Find $a$ at $t=2$.`, 2, "a = 6 − 2t."),
  num(S`$s=t^2-6t+1$. When is the particle at rest?`, 3, "v = 2t − 6 = 0."),
  num(S`$s=10t-t^2$. Find the displacement when the particle is at rest.`, 25, "t = 5: 50 − 25."),
  mx(S`$s=2t^3+t^2$. Write $v$ in terms of $t$.`, "6*t^2+2*t", "Differentiate s."),
  mx(S`$v=5t^2-4t$. Write $a$ in terms of $t$.`, "10*t-4", "Differentiate v."),
  mc("A particle is at rest when:", S`$v=0$`, [S`$a=0$`, S`$s=0$`, S`$t=0$`], "Velocity zero."),
  mc(S`If $v<0$, the particle is moving:`, "in the negative direction", ["in the positive direction", "faster", "slower"], "The sign of v gives the direction."),
  tf(S`Speed is the absolute value of velocity.`, true, "Speed = |v|."),
  tf(S`If $a>0$ the particle is always speeding up.`, false, "Only if v > 0 too."),
  fill(S`The derivative of velocity with respect to time is called ___.`, ["acceleration", "Acceleration"], "a = dv/dt."),
  num(S`$s=3t^2$ m. Find the acceleration (m/s²).`, 6, "v = 6t, a = 6."),
  num("The velocity–time graph is shown. At what time is the particle at rest?", 2, "v = 0 at t = 2.", planeDoc({ view: { xmin: -0.2, xmax: 4.2, ymin: -5, ymax: 5 }, curves: [{ f: (t) => 4 - 2 * t, a: 0, b: 4 }], points: [P(2, 0)], step: { x: 0.5, y: 1 }, xlabel: "t", ylabel: "v" })),
  num("The displacement–time graph is shown. At what time does the particle change direction?", 1.5, "The turning point of s.", planeDoc({ view: { xmin: -0.2, xmax: 3.2, ymin: -1, ymax: 6 }, curves: [{ f: (t) => 6 * t - 2 * t * t, a: 0, b: 3 }], points: [P(1.5, 4.5)], step: { x: 0.5, y: 1 }, xlabel: "t", ylabel: "s" }), 1e-9),
  num(S`At an instant $v=-3$ m/s. What is the speed?`, 3, "|−3|."),
  num(S`$C(x)=50+4x+0.01x^2$. Find the marginal cost $C'(100)$.`, 6, "4 + 0.02x."),
  num(S`The area of a circle is $A=\pi r^2$. Find $\frac{dA}{dr}$ at $r=\frac{1}{\pi}$.`, 2, "2πr = 2."),
  mc(S`At some instant $v=5$ and $a=-1$. The particle is:`, "slowing down", ["speeding up", "at rest", "moving in the negative direction"], "Opposite signs."),
  num(S`$s=t^3$. Find $a$ at $t=2$.`, 12, "a = 6t."),
];

export const M = [
  num(S`$s=t^3-6t^2+5$. Find the times when the particle is at rest. Give the positive one.`, 4, "3t² − 12t = 3t(t − 4)."),
  num(S`$s=t^3-6t^2+5$. Find the acceleration when $t=4$.`, 12, "a = 6t − 12."),
  num(S`$s=2t^3-21t^2+60t$. Find the sum of the times when the particle is at rest.`, 7, "6t² − 42t + 60 = 6(t − 2)(t − 5)."),
  num(S`For $s=2t^3-21t^2+60t$, find the distance travelled from $t=0$ to $t=5$.`, 79, "s(2) = 52, s(5) = 25: 52 + 27."),
  num(S`For $s=2t^3-21t^2+60t$, find the velocity when the acceleration is zero.`, -13.5, "a = 12t − 42 = 0 at 3.5; v = 73.5 − 147 + 60.", null, 1e-9),
  ms(S`$s=t^2-4t$ for $t\ge0$. Which are true? Select all.`, ["at rest at t = 2", "moving left for 0 ≤ t < 2", "a = 2 for all t", "speeding up for 0 < t < 2"], [0, 1, 2], "For 0 < t < 2, v < 0 and a > 0: slowing down."),
  num(S`A ball's height is $h=2+14t-5t^2$ m. Find its maximum height.`, 11.8, "t = 1.4: 2 + 19.6 − 9.8.", null, 1e-9),
  num(S`For $h=2+14t-5t^2$, find the velocity (m/s) at $t=2$.`, -6, "14 − 10t."),
  mc(S`$v=t^2-9$ for $t\ge0$. The particle is speeding up when:`, S`$t>3$`, [S`$0<t<3$`, S`$t<3$`, "never"], "a = 2t > 0; need v > 0."),
  num("The velocity–time graph of a particle is shown. Find the acceleration at t = 1 using the gradient.", -4, "Gradient of v = 6 − 4t is −4.", planeDoc({ view: { xmin: -0.2, xmax: 3.2, ymin: -7, ymax: 7 }, curves: [{ f: (t) => 6 - 4 * t, a: 0, b: 3 }], points: [P(1, 2)], step: { x: 0.5, y: 1 }, xlabel: "t", ylabel: "v" })),
  num("The graph shows s = t³ − 3t (m). Find the total distance travelled from t = 0 to t = 2.", 6, "At rest at t = 1: s(0) = 0, s(1) = −2, s(2) = 2: 2 + 4.", planeDoc({ view: { xmin: -0.2, xmax: 2.3, ymin: -3, ymax: 3 }, curves: [{ f: (t) => t ** 3 - 3 * t, a: 0, b: 2.2 }], points: [P(1, -2), P(2, 2)], step: { x: 0.5, y: 1 }, xlabel: "t", ylabel: "s" })),
  tf(S`A particle with $v=3t^2+1$ is never at rest.`, true, "3t² + 1 > 0."),
  num(S`$R(x)=60x-0.2x^2$. Find the number of items at which the marginal revenue is zero.`, 150, "60 − 0.4x = 0."),
  num(S`A cube has side $x$ cm. Find the rate of change of its volume with respect to $x$ when $x=4$.`, 48, "3x²."),
  num(S`$V=1500-40t+0.4t^2$ litres for $0\le t\le50$. Find the rate of change of volume (L/min) at $t=20$.`, -24, "−40 + 0.8t."),
  num(S`$s=t^4-8t^2$ for $t\ge0$. When is the particle at rest (other than $t=0$)?`, 2, "4t³ − 16t = 4t(t² − 4)."),
  num(S`For $s=t^4-8t^2$, find the acceleration at $t=1$.`, -4, "a = 12t² − 16."),
  num(S`A stone is dropped: $s=4.9t^2$ m. Find its speed after it has fallen 19.6 m.`, 19.6, "t = 2: v = 9.8t.", null, 1e-9),
  num(S`$s=\frac{t^3}{3}-4t$ for $t\ge0$. Find the minimum velocity.`, -4, "v = t² − 4 is least at t = 0."),
  num(S`The population of a town is $P=20000+300t-5t^2$. Find the rate of change of population at $t=10$ (people per year).`, 200, "300 − 10t."),
];

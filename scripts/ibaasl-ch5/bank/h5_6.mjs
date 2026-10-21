// 5.6 Kinematics and Rates of Change — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const TOPIC = "5.6 Kinematics and Rates of Change";
export const Q = [
  num(S`$s=t^3-12t^2+36t$ for $0\le t\le8$. Find the total distance travelled.`, 96, "Rest at t = 2, 6: s(0) = 0, s(2) = 32, s(6) = 0, s(8) = 32: 32 + 32 + 32.", planeDoc({ view: { xmin: -0.3, xmax: 9.2, ymin: -3, ymax: 36 }, curves: [{ f: (t) => t ** 3 - 12 * t * t + 36 * t, a: 0, b: 8 }], points: [P(2, 32), P(6, 0), P(8, 32)], step: { x: 1, y: 4 }, xlabel: "t", ylabel: "s" })),
  num(S`For $s=t^3-12t^2+36t$, find the minimum velocity on $0\le t\le8$.`, -12, "a = 6t − 24 = 0 at t = 4: v = 48 − 96 + 36."),
  num(S`For $s=t^3-12t^2+36t$, find the greatest speed on $0\le t\le8$.`, 36, "v(0) = 36, v(8) = 192 − 192 + 36 = 36, v(4) = −12."),
  ms(S`$s=t^3-12t^2+36t$. Which intervals have the particle speeding up? Select all.`, [S`$2<t<4$`, S`$t>6$`, S`$0<t<2$`, S`$4<t<6$`], [0, 1], "v < 0 and a < 0 on (2, 4); both positive for t > 6."),
  num(S`A ball is thrown up from 1.8 m with $h=1.8+16t-4.9t^2$. Find its speed (m/s, 3 s.f.) when it hits the ground.`, Math.sqrt(16 * 16 + 4 * 4.9 * 1.8), "t = (16 + √(256 + 35.28))/9.8; |v| = |16 − 9.8t| = √291.28.", null, 0.05),
  num(S`A particle has $v=12-3t^2$ and $s(0)=0$, with $s=12t-t^3$. Find the distance travelled in the first 3 s.`, 23, "Rest at t = 2: s(2) = 16, s(3) = 9: 16 + 7."),
  num("The v–t graph of a particle is shown (v = t² − 6t + 5). On how many separate intervals in 0 < t < 6 is the particle slowing down?", 2, "a = 2t − 6. Slowing when v and a differ in sign: 0 < t < 1 and 3 < t < 5.", planeDoc({ view: { xmin: -0.2, xmax: 6.2, ymin: -5, ymax: 6 }, curves: [{ f: (t) => t * t - 6 * t + 5, a: 0, b: 6 }], points: [P(1, 0), P(5, 0), P(3, -4)], step: { x: 0.5, y: 1 }, xlabel: "t", ylabel: "v" })),
  mc(S`$s=-t^3+6t^2$ for $t\ge0$. At $t=5$ the particle is:`, "moving left and speeding up", ["moving right and slowing down", "moving left and slowing down", "at rest"], "v = −75 + 60 = −15, a = −30 + 12 = −18: same sign."),
  num(S`$s=at^2+bt$ has velocity 7 at $t=1$ and 15 at $t=3$. Find $a$.`, 2, "v = 2at + b: 2a + b = 7, 6a + b = 15."),
  num(S`A particle's velocity is $v=t^2-4t+3$ for $0\le t\le4$, with $s=\frac{t^3}{3}-2t^2+3t$. Find the total distance travelled.`, 4, "Rest at 1, 3: s(0) = 0, s(1) = 4/3, s(3) = 0, s(4) = 4/3: 4/3 + 4/3 + 4/3.", null, 1e-9),
  tf(S`If $s(t)$ has a local maximum at $t=t_0$, the particle is at rest at $t_0$.`, true, "s′(t₀) = v(t₀) = 0."),
  num(S`The cost of making $x$ items is $C=0.001x^3-0.3x^2+40x+500$. Find $x$ where the marginal cost is least.`, 100, "C′ = 0.003x² − 0.6x + 40 is least where C″ = 0.006x − 0.6 = 0."),
  num(S`For $C=0.001x^3-0.3x^2+40x+500$, find the least marginal cost.`, 10, "C′(100) = 30 − 60 + 40."),
  num("A tank drains: V = 400(1 − t/20)² litres for 0 ≤ t ≤ 20 (shown). Find the rate of change of volume at t = 5 (L/min).", -30, "V = 400 − 40t + t²; V′ = −40 + 2t.", planeDoc({ view: { xmin: -0.5, xmax: 21, ymin: -10, ymax: 420 }, curves: [{ f: (t) => 400 * (1 - t / 20) ** 2, a: 0, b: 20 }, { f: (t) => -30 * (t - 5) + 225, a: 0, b: 12, color: "red" }], points: [P(5, 225)], step: { x: 2, y: 50 }, xlabel: "t", ylabel: "V" })),
  num(S`A sphere's volume is $V=\frac43\pi r^3$. For which $r$ is $\frac{dV}{dr}=100\pi$?`, 5, "4πr² = 100π."),
  num(S`A particle has $s=t^3-3t^2-9t+4$. Find its displacement when it is at rest (for $t>0$).`, -23, "v = 3(t − 3)(t + 1): t = 3; s = 27 − 27 − 27 + 4."),
  num("The s–t graph shown is s = 4t − t² for 0 ≤ t ≤ 5. Find the average velocity over [0, 5].", -1, "(s(5) − s(0))/5 = (−5)/5.", planeDoc({ view: { xmin: -0.2, xmax: 6.2, ymin: -6, ymax: 5 }, curves: [{ f: (t) => 4 * t - t * t, a: 0, b: 5 }], points: [P(2, 4), P(5, -5)], step: { x: 0.5, y: 1 }, xlabel: "t", ylabel: "s" })),
  num(S`For $s=4t-t^2$ on $0\le t\le5$, find the total distance travelled.`, 13, "Rest at t = 2: 4 + 9."),
  num(S`Two particles have $s_1=t^2+2t$ and $s_2=8t-t^2$. At what time do they have equal velocities?`, 1.5, "2t + 2 = 8 − 2t.", null, 1e-9),
  num(S`For those particles ($s_1=t^2+2t$, $s_2=8t-t^2$), at what positive time do they meet?`, 3, "t² + 2t = 8t − t² → 2t² = 6t."),
];

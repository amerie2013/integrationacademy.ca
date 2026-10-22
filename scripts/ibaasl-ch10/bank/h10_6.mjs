// 10.6 Kinematics with Integration — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { areaDoc } from "../figs10.mjs";

const S = String.raw;
const d3 = (v) => Math.round(v * 1000) / 1000;
const sim = (f, a, b, n = 4000) => { const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2); return (s * h) / 3; };
const va = (t) => t * t - 7 * t + 10;

export const TOPIC = "10.6 Kinematics with Integration";
export const Q = [
  num(S`$v(t)=t^2-7t+10$. Find the distance travelled from $t=0$ to $t=6$ (3 d.p.).`, d3(sim((t) => Math.abs(va(t)), 0, 2) + sim((t) => Math.abs(va(t)), 2, 5) + sim((t) => Math.abs(va(t)), 5, 6)), "Turns at 2 and 5: 26/3 + 9/2 + 11/6.", areaDoc({ view: { xmin: -0.3, xmax: 6.5, ymin: -3, ymax: 11 }, step: { x: 1, y: 1 }, curves: [{ f: va }], xlabel: "t", ylabel: "v" }, [{ f: va, a: 0, b: 2, color: "green" }, { f: va, a: 2, b: 5, color: "red" }, { f: va, a: 5, b: 6, color: "green" }]), 0.001),
  num(S`For the same $v$, find the displacement from $t=0$ to $t=6$.`, 6, "26/3 − 9/2 + 11/6 = 6."),
  num(S`$a(t)=6t-18$, $v(0)=24$, $s(0)=0$. Find the position when the particle first comes to rest.`, 20, "v = 3t² − 18t + 24 = 3(t − 2)(t − 4); s = t³ − 9t² + 24t; s(2) = 20."),
  num(S`For the same particle, find the distance travelled from $t=0$ to $t=5$.`, 28, "s(2) = 20, s(4) = 16, s(5) = 20: 20 + 4 + 4."),
  num(S`$v(t)=6e^{-0.5t}-3$. Find the time the particle changes direction (3 d.p.).`, d3(2 * Math.log(2)), "e^(−0.5t) = ½.", null, 0.001),
  num(S`For $v(t)=6e^{-0.5t}-3$, find the distance travelled in the first 4 seconds (3 d.p.).`, d3(sim((t) => Math.abs(6 * Math.exp(-0.5 * t) - 3), 0, 2 * Math.log(2)) + sim((t) => Math.abs(6 * Math.exp(-0.5 * t) - 3), 2 * Math.log(2), 4)), "Split at 2 ln 2.", areaDoc({ view: { xmin: -0.3, xmax: 4.5, ymin: -3, ymax: 4 }, step: { x: 0.5, y: 1 }, curves: [{ f: (t) => 6 * Math.exp(-0.5 * t) - 3 }], xlabel: "t", ylabel: "v" }, [{ f: (t) => 6 * Math.exp(-0.5 * t) - 3, a: 0, b: 2 * Math.log(2), color: "green" }, { f: (t) => 6 * Math.exp(-0.5 * t) - 3, a: 2 * Math.log(2), b: 4, color: "red" }]), 0.001),
  num(S`A car brakes from 24 m/s with constant deceleration and stops in 6 s. How far does it travel?`, 72, "v = 24 − 4t: ∫₀⁶ = 72."),
  num(S`Particles A and B start at the origin with $v_A=6t-t^2$ and $v_B=t$. When do they meet again ($t>0$)? (3 d.p.)`, 7.5, "3t² − t³/3 = t²/2 ⇒ t = 7.5.", null, 0.001),
  num(S`$a(t)=-\frac{2}{(t+1)^2}$ and $v(0)=2$. Find $v(t)$ at $t=1$.`, 1, "v = 2/(t + 1); v(1) = 1."),
  num(S`For $v=\frac{2}{t+1}$ and $s(0)=0$, find $s(3)$ (3 d.p.).`, d3(2 * Math.log(4)), "2 ln 4.", null, 0.001),
  ms(S`For $v(t)=t^3-4t$ on $[0,3]$, which are true? Select all.`, ["the particle turns at t = 2", "displacement = 9/4", "distance = 41/4", "distance = 9/4"], [0, 1, 2], "−4 + 25/4 and 4 + 25/4."),
  tf(S`If $a(t)>0$ for all $t$, the particle can still change direction.`, true, "e.g. v = t − 1 changes sign at t = 1."),
  mc("The v–t graph is shown. The particle's distance from 0 to 6 is:", "9", ["2", "10", "6"], "Areas: 4 and 0.5 above, then 0.5, 2 and 1 below, then 1 above: 4 + 0.5 + 0.5 + 2 + 1 + 1 = 9 (displacement 2).", areaDoc({ view: { xmin: -0.5, xmax: 6.5, ymin: -3, ymax: 4 }, step: { x: 1, y: 1 }, segs: [{ pts: [[0, 2], [2, 2], [3, -2], [4, -2], [6, 2]] }], xlabel: "t", ylabel: "v" }, [])),
  num(S`A ball thrown upward has $v=20-9.8t$. Find the total distance it travels in the first 3 s (3 d.p.).`, d3(sim((t) => Math.abs(20 - 9.8 * t), 0, 20 / 9.8) + sim((t) => Math.abs(20 - 9.8 * t), 20 / 9.8, 3)), "Turns at t ≈ 2.041.", null, 0.002),
  num(S`$v(t)=k(4-t)$ and the displacement from $t=0$ to $t=4$ is 24. Find $k$.`, 3, "k[4t − t²/2]₀⁴ = 8k."),
  mc("The position–time graph of a particle is s = 2t³ − 15t² + 24t. Its velocity is zero at:", "t = 1 and t = 4", ["t = 0 and t = 4", "t = 2 and t = 3", "t = 1.5"], "6t² − 30t + 24 = 6(t − 1)(t − 4).", planeDoc({ view: { xmin: -0.3, xmax: 5, ymin: -18, ymax: 14 }, curves: [{ f: (t) => 2 * t ** 3 - 15 * t * t + 24 * t, a: 0, b: 5 }], step: { x: 1, y: 4 }, xlabel: "t", ylabel: "s" })),
  num(S`For $s=2t^3-15t^2+24t$, find the distance travelled from $t=0$ to $t=5$.`, 49, "s(0)=0, s(1)=11, s(4)=−16, s(5)=−5: 11 + 27 + 11."),
  num(S`$v(t)=\sqrt{t}$. Find the displacement from $t=0$ to $t=9$.`, 18, "[⅔t^(3/2)]₀⁹."),
  num(S`$a(t)=e^{-t}$, $v(0)=0$, $s(0)=0$. Find $s(2)$ (3 d.p.).`, d3(2 - 1 + Math.exp(-2)), "v = 1 − e^(−t); s = t + e^(−t) − 1.", null, 0.001),
  mc(S`A particle's velocity is always positive and decreasing. Its displacement–time graph is:`, "increasing and concave down", ["decreasing", "increasing and concave up", "a straight line"], "s′ = v > 0, s″ = a < 0."),
];

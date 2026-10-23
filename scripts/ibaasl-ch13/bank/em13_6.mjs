// 13.6 Kinematics and Accumulating Change — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";
import { areaDoc } from "../figs13.mjs";

const S = String.raw;
const PI = Math.PI, r3 = (v) => Math.round(v * 1000) / 1000;

export const E = [
  mc("Velocity is:", S`$\frac{ds}{dt}$`, [S`$\frac{da}{dt}$`, S`$\int a\,ds$`, S`$s\cdot t$`], "Rate of change of displacement."),
  mc("Acceleration is:", S`$\frac{dv}{dt}$`, [S`$\frac{ds}{dt}$`, S`$\int v\,dt$`, S`$v\cdot t$`], "Rate of change of velocity."),
  mc("A particle is at rest when:", S`$v=0$`, [S`$a=0$`, S`$s=0$`, S`$t=0$`], "No motion at that instant."),
  mc("Distance travelled from t₁ to t₂ is:", S`$\int_{t_1}^{t_2}|v|\,dt$`, [S`$\int_{t_1}^{t_2}v\,dt$`, S`$\int_{t_1}^{t_2}a\,dt$`, S`$s(t_2)$`], "Absolute value."),
  mc("Displacement from t₁ to t₂ is:", S`$\int_{t_1}^{t_2}v\,dt$`, [S`$\int_{t_1}^{t_2}|v|\,dt$`, S`$\int_{t_1}^{t_2}a\,dt$`, S`$v(t_2)-v(t_1)$`], "Signed."),
  num(S`$s=4\sin t$. Find v at $t=0$.`, 4, "v = 4cos t."),
  num(S`$s=2\cos t$. Find v at $t=\frac{\pi}{2}$.`, -2, "v = −2 sin t."),
  num(S`$v=5\sin t$. Find a at $t=0$.`, 5, "a = 5cos t."),
  num(S`$v=e^t$. Find a at $t=0$.`, 1, "a = eᵗ."),
  num(S`$v=\cos t$. Find the displacement from $t=0$ to $t=\frac{\pi}{6}$.`, 0.5, "[sin t].", null, 0.001),
  tf("Displacement can be negative.", true, "It is signed."),
  tf("Distance travelled can be negative.", false, "∫|v| ≥ 0."),
  tf("If v changes sign during the motion, the distance is greater than the size of the displacement.", true, "Backward motion cancels in ∫v but adds in ∫|v|."),
  fill("Acceleration is the rate of change of ___.", ["velocity", "Velocity", "v"], "a = dv/dt."),
  ms(S`$s=\sin t$. Which are true? Select all.`, [S`$v=\cos t$`, S`$a=-\sin t$`, S`$a=-s$`, S`$v=-\cos t$`], [0, 1, 2], "Differentiate twice."),
  mc("The velocity–time graph v = sin t is shown for 0 ≤ t ≤ 2π. The particle changes direction at t =", S`$\pi$`, [S`$\frac{\pi}{2}$`, S`$2\pi$`, S`$\frac{3\pi}{2}$`], "v changes sign at π.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.4, ymax: 1.4 }, curves: [{ f: Math.sin }], points: [P(PI, 0, "", "red")], step: { x: PI / 2, y: 0.5 } })),
  mc(S`The velocity–time graph $v=e^{-t}$ is shown. The particle:`, "always moves forward, slowing down", ["changes direction", "speeds up", "is at rest at t = 1"], "v > 0 and decreasing.", planeDoc({ view: { xmin: 0, xmax: 5, ymin: -0.2, ymax: 1.2 }, curves: [{ f: (t) => Math.exp(-t) }], step: { x: 1, y: 0.2 } })),
  num(S`$v=2t+\cos t$. Find a at $t=0$.`, 2, "a = 2 − sin t."),
  num(S`$s=e^{-t}$. Find v at $t=0$.`, -1, "v = −e^{−t}."),
  mc(S`For $s=3\sin2t$, v equals:`, S`$6\cos2t$`, [S`$3\cos2t$`, S`$-6\cos2t$`, S`$6\sin2t$`], "Chain rule."),
];

export const M = [
  num(S`$s=\sin^2t$. Find v at $t=\frac{\pi}{4}$.`, 1, "v = sin 2t."),
  num(S`$v=4\cos2t$ and $s(0)=1$. Find $s\left(\frac{\pi}{4}\right)$.`, 3, "s = 2 sin 2t + 1."),
  num(S`$a=6\sin t$ and $v(0)=0$. Find $v(\pi)$.`, 12, "v = −6cos t + 6."),
  num(S`$v=\sin t+1$. Find the displacement on $[0,\pi]$ (3 d.p.).`, r3(2 + PI), "[−cos t + t].", null, 0.001),
  num(S`$v=\cos t$. Find the distance travelled on $[0,\pi]$.`, 2, "Split at π/2: 1 + 1."),
  num(S`$s=t+2\cos t$. Find the first time $t>0$ when the particle is at rest (3 d.p.).`, r3(PI / 6), "1 − 2 sin t = 0.", null, 0.001),
  mc(S`$v=2\sin3t$ first changes direction at t =`, S`$\frac{\pi}{3}$`, [S`$\frac{\pi}{6}$`, S`$\pi$`, S`$\frac{2\pi}{3}$`], "3t = π."),
  mc(S`The maximum speed of a particle with $s=3\sin2t$ is:`, "6", ["3", "2", "12"], "v = 6cos 2t."),
  mc(S`For $s=5\cos t$, a equals:`, S`$-5\cos t$`, [S`$5\cos t$`, S`$-5\sin t$`, S`$5\sin t$`], "a = −s."),
  tf(S`A particle with $v=2+\sin t$ never changes direction.`, true, "v ≥ 1."),
  tf(S`For $s=\cos t$, the displacement over $[0,2\pi]$ is 2.`, false, "s(2π) − s(0) = 0."),
  num(S`Water flows in at $20e^{-0.1t}$ L/min. Find the volume added in the first 10 minutes (3 d.p.).`, r3(200 * (1 - Math.exp(-1))), "[−200e^{−0.1t}].", null, 0.001),
  num(S`A quantity changes at $3\cos t+4$ per hour. Find its net change over $[0,\pi]$ (3 d.p.).`, r3(4 * PI), "[3 sin t + 4t].", null, 0.001),
  num(S`$v=t-2\sin t$. Find a at $t=\frac{\pi}{3}$.`, 0, "a = 1 − 2cos t.", null, 0.001),
  ms(S`For $v=\sin t$ on $[0,2\pi]$, which are true? Select all.`, ["displacement 0", "distance 4", "at rest at t = π", "at rest at t = π/2"], [0, 1, 2], "sin π = 0."),
  mc("The graph shows v = 2cos t for 0 ≤ t ≤ 2π. The distance travelled is:", "8", ["0", "4", "2"], "Four quarter-waves of area 2.", areaDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -2.4, ymax: 2.4 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: (t) => 2 * Math.cos(t), color: "violet" }] }, [{ f: (t) => Math.max(0, 2 * Math.cos(t)), a: 0, b: 2 * PI, color: "green" }, { f: (t) => Math.min(0, 2 * Math.cos(t)), a: 0, b: 2 * PI, color: "red" }])),
  mc(S`The graph shows $s=4\sin\frac{\pi t}{2}$. At $t=1$ the velocity is:`, "0", ["4", "2π", "−4"], "The top of the curve.", planeDoc({ view: { xmin: 0, xmax: 4, ymin: -4.5, ymax: 4.5 }, curves: [{ f: (t) => 4 * Math.sin((PI * t) / 2) }], points: [P(1, 4, "", "red")], step: { x: 0.5, y: 1 } })),
  num(S`$s=50(1-e^{-0.2t})$. Find the initial velocity.`, 10, "v = 10e^{−0.2t}."),
  num(S`$v=3e^{-t}$ and $s(0)=0$. Find $s(2)$ (3 d.p.).`, r3(3 * (1 - Math.exp(-2))), "s = 3 − 3e^{−t}.", null, 0.001),
  num(S`$v=\cos t-\sin t$ and $s(0)=1$. Find $s\left(\frac{\pi}{2}\right)$.`, 1, "s = sin t + cos t."),
];

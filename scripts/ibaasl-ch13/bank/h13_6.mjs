// 13.6 Kinematics and Accumulating Change — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";
import { areaDoc } from "../figs13.mjs";

const S = String.raw;
const PI = Math.PI, r3 = (v) => Math.round(v * 1000) / 1000;
const signed = (f, view, step, a, b) => areaDoc({ view, step, curves: [{ f, color: "violet" }] }, [{ f: (t) => Math.max(0, f(t)), a, b, color: "green" }, { f: (t) => Math.min(0, f(t)), a, b, color: "red" }]);

export const TOPIC = "13.6 Kinematics and Accumulating Change";
export const Q = [
  num(S`The graph shows $v=3\sin t-1.5$ for $0\le t\le\pi$. Find the distance travelled (3 d.p.).`, 2.822, "v = 0 at π/6 and 5π/6; add |∫v| over the three parts.", signed((t) => 3 * Math.sin(t) - 1.5, { xmin: 0, xmax: PI, ymin: -2, ymax: 2 }, { x: PI / 6, y: 0.5 }, 0, PI), 0.002),
  num(S`For $v=3\sin t-1.5$ on $[0,\pi]$, find the displacement (3 d.p.).`, r3(6 - 1.5 * PI), "[−3cos t − 1.5t] = 6 − 1.5π.", null, 0.001),
  num(S`$s=e^{-t}\cos t$. Find the first time $t>0$ when the particle is at rest (3 d.p.).`, r3((3 * PI) / 4), "v = −e^{−t}(cos t + sin t) ⇒ tan t = −1.", null, 0.001),
  num(S`$a=-16\cos4t$, $v(0)=0$, $s(0)=1$. Find $s\left(\frac{\pi}{12}\right)$.`, 0.5, "v = −4 sin 4t, s = cos 4t.", null, 0.001),
  mc(S`For $s=A\sin\omega t$, the acceleration is:`, S`$-\omega^2s$`, [S`$\omega^2s$`, S`$-\omega s$`, S`$A\omega\cos\omega t$`], "Differentiate twice."),
  num(S`Find the maximum speed of a particle with $s=\sin t+\sqrt3\cos t$.`, 2, "v = cos t − √3 sin t = 2cos(t + π/3)."),
  tf(S`For $v=e^{-t}\cos t$ on $[0,\pi]$, the distance equals the displacement.`, false, "v changes sign at t = π/2."),
  ms(S`For $s=t-2\sin t$ on $[0,2\pi]$, which are true? Select all.`, [S`at rest at $t=\frac{\pi}{3}$`, S`at rest at $t=\frac{5\pi}{3}$`, S`at rest at $t=\pi$`, S`$a=2\sin t$`], [0, 1, 3], "v = 1 − 2cos t."),
  num(S`Water flows at $r=30+10\cos\frac{\pi t}{6}$ L/h (graph shown). Find the volume in the first 3 hours (3 d.p.).`, r3(90 + 60 / PI), "[30t + (60/π) sin(πt/6)].", areaDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 45 }, step: { x: 1, y: 5 }, curves: [{ f: (t) => 30 + 10 * Math.cos((PI * t) / 6), color: "violet" }] }, [{ f: (t) => 30 + 10 * Math.cos((PI * t) / 6), a: 0, b: 3, color: "blue" }]), 0.001),
  num(S`A disease spreads at $100e^{-0.5t}$ new cases per day. Find the number of new cases in the first 4 days (3 d.p.).`, r3(200 * (1 - Math.exp(-2))), "[−200e^{−0.5t}].", null, 0.001),
  num(S`The graph shows $v=t\cos t$ for $0\le t\le\pi$. Use a GDC to find the distance travelled (3 d.p.).`, r3(PI), "∫₀^π |t cos t| dt; v changes sign at π/2.", signed((t) => t * Math.cos(t), { xmin: 0, xmax: PI, ymin: -3.5, ymax: 1 }, { x: PI / 4, y: 0.5 }, 0, PI), 0.002),
  num(S`For $v=t\cos t$ on $[0,\pi]$, use a GDC to find the displacement.`, -2, "∫₀^π t cos t dt = −2.", null, 0.002),
  num(S`$s=\ln(t^2+1)$. Find v at $t=1$.`, 1, "v = 2t/(t² + 1)."),
  num(S`$s=4te^{-t}$. Find the acceleration when the particle is at rest (3 d.p.).`, r3(-4 / Math.E), "v = 4e^{−t}(1 − t) ⇒ t = 1; a = 4e^{−t}(t − 2).", null, 0.001),
  num(S`The graph shows $s=2\sin t+\sin2t$ for $0\le t\le\pi$. Find the greatest displacement (3 d.p.).`, r3(1.5 * Math.sqrt(3)), "2cos t + 2cos 2t = 0 ⇒ cos t = ½.", planeDoc({ view: { xmin: 0, xmax: PI, ymin: -0.3, ymax: 3 }, curves: [{ f: (t) => 2 * Math.sin(t) + Math.sin(2 * t) }], points: [P(PI / 3, 1.5 * Math.sqrt(3), "", "red")], step: { x: PI / 6, y: 0.5 } }), 0.001),
  mc(S`A car's velocity is $v=20e^{-0.1t}$. As $t\to\infty$ the total distance approaches:`, "200", ["20", "2", "infinity"], "∫₀^∞ 20e^{−0.1t} dt = 200."),
  num(S`A 500 L tank leaks at $2+\sin t$ L/min. Find the volume left after $2\pi$ minutes (3 d.p.).`, r3(500 - 4 * PI), "Leaked: [2t − cos t] from 0 to 2π = 4π.", null, 0.001),
  num(S`The graph shows the acceleration $a=\cos t$. If $v(0)=0$ and $s(0)=0$, find $s(\pi)$.`, 2, "v = sin t, s = 1 − cos t.", planeDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.4, ymax: 1.4 }, curves: [{ f: Math.cos }], step: { x: PI / 2, y: 0.5 } })),
  tf(S`For $s=\cos^2t$, the particle is at rest at $t=\frac{\pi}{2}$.`, true, "v = −sin 2t = 0."),
  num(S`$v=2\sin(\pi t)$ m/s for $0\le t\le3$. Find the distance travelled (3 d.p.).`, r3(12 / PI), "Each 1-second half-wave has area 4/π.", null, 0.001),
];

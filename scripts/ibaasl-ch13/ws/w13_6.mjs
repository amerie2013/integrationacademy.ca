// IB AA SL Worksheet 13.6 — Kinematics and Accumulating Change (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;
const L4 = Math.log(4);

const EXAMPLES = [
  { title: "Velocity and acceleration", q: S`$s=3\cos(\pi t)$ m. Find v and a, and v at $t=\frac13$.`,
    steps: [S`$v=-3\pi\sin(\pi t)$, $a=-3\pi^2\cos(\pi t)$.`, S`$v\left(\frac13\right)=-3\pi\cdot\frac{\sqrt3}{2}$.`], ans: S`$v\left(\frac13\right)\approx-8.162$ m/s` },
  { title: "Exponential approach", q: S`$s=10-10e^{-0.5t}$. Find v and a, and the initial velocity.`,
    steps: [S`$v=5e^{-0.5t}$, $a=-2.5e^{-0.5t}$.`], ans: S`$v(0)=5$` },
  { title: "Position from velocity", q: S`$v=2\sin\frac t2$ and $s(0)=0$. Find $s(t)$.`,
    steps: [S`$s=-4\cos\frac t2+C$; $-4+C=0$.`], ans: S`$s=4-4\cos\frac t2$` },
  { title: "Velocity from acceleration", q: S`$a=6\cos2t$ and $v(0)=1$. Find $v(t)$.`,
    steps: [S`$v=3\sin2t+C$, $C=1$.`], ans: S`$v=3\sin2t+1$` },
  { title: "At rest", q: S`When is a particle with $v=\cos t-\frac12$ at rest for $0\le t\le2\pi$?`,
    steps: [S`$\cos t=\frac12$.`], ans: S`$t=\frac{\pi}{3},\ \frac{5\pi}{3}$` },
  { title: "Displacement and distance", q: S`$v=3\cos t$ on $[0,\pi]$. Find the displacement and the distance.`,
    fig: F({ view: { xmin: 0, xmax: PI, ymin: -3.5, ymax: 3.5 }, curves: [{ f: (t) => 3 * Math.cos(t) }], points: [pt(PI / 2, 0, false, "red")], step: { x: PI / 4, y: 1 } }, 5.6),
    steps: [S`$[3\sin t]_0^\pi=0$.`, S`Distance: $3+3$ (split at $\frac{\pi}{2}$).`], ans: S`displacement 0; distance 6` },
  { title: "Exponential velocity", q: S`$v=e^{-t}-0.25$ on $[0,3]$. Find the displacement and the distance.`,
    fig: F({ view: { xmin: 0, xmax: 3.2, ymin: -0.4, ymax: 0.9 }, curves: [{ f: (t) => Math.exp(-t) - 0.25 }], points: [pt(L4, 0, false, "red")], step: { x: 0.5, y: 0.25 } }, 5.6),
    steps: [S`$v=0$ at $t=\ln4$. $\int_0^{\ln4}v\,dt=0.75-0.25\ln4\approx0.403$.`, S`$\int_{\ln4}^3v\,dt\approx-0.203$.`], ans: S`displacement $\approx0.200$; distance $\approx0.607$` },
  { title: "Accumulated rainfall", q: S`Rain falls at $r=2+1.5\sin\frac{\pi t}{6}$ mm/h. Find the rainfall in the first 6 hours.`,
    fig: F({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 4 }, curves: [{ f: (t) => 2 + 1.5 * Math.sin((PI * t) / 6) }], step: { x: 1, y: 0.5 } }, 5.6),
    steps: [S`$\int_0^6r\,dt=\left[2t-\frac{9}{\pi}\cos\frac{\pi t}{6}\right]_0^6=12+\frac{18}{\pi}$.`], ans: S`$\approx17.73$ mm` },
  { title: "Growth from a rate", q: S`Bacteria grow at $30e^{0.2t}$ per hour and $N(0)=500$. Find $N(5)$.`,
    steps: [S`$N(5)=500+\int_0^530e^{0.2t}dt=500+150(e-1)$.`], ans: S`$\approx758$` },
];

const PROBLEMS = [
  { level: 1, q: S`$s=2\sin3t$. Find $v(0)$.`, recap: "v = 6 cos 3t.", ans: S`$6$` },
  { level: 1, q: S`$v=e^{2t}$. Find $a(0)$.`, recap: "a = 2e²ᵗ.", ans: S`$2$` },
  { level: 1, q: S`$v=4\cos t$ and $s(0)=1$. Find $s(t)$.`, recap: "Integrate.", ans: S`$s=4\sin t+1$` },
  { level: 2, q: S`$s=5\sin\frac{\pi t}{2}$. When is the particle first at rest?`, recap: S`$\cos\frac{\pi t}{2}=0$.`, ans: S`$t=1$` },
  { level: 2, q: S`$v=\sin2t$ on $[0,\pi]$. Find the displacement and the distance.`, recap: "Split at π/2.", ans: S`$0$ and $2$` },
  { level: 2, q: S`$a=-\pi^2\sin(\pi t)$ and $v(0)=\pi$. Find $v(t)$.`, recap: "Integrate.", ans: S`$v=\pi\cos(\pi t)$` },
  { level: 2, q: S`$v=1-2\sin t$. Find the displacement on $\left[0,\frac{\pi}{2}\right]$.`, recap: S`$[t+2\cos t]$.`, ans: S`$\frac{\pi}{2}-2\approx-0.429$` },
  { level: 2, q: S`The graph shows $v=2\sin t-1$ on $[0,\pi]$. Find the displacement.`, recap: S`$[-2\cos t-t]$.`, ans: S`$4-\pi\approx0.858$`,
    fig: F({ view: { xmin: 0, xmax: PI, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (t) => 2 * Math.sin(t) - 1 }], step: { x: PI / 6, y: 0.5 } }, 5) },
  { level: 3, space: 4, q: S`For $v=2\sin t-1$ on $[0,\pi]$, find the distance travelled.`, recap: S`Split at $\frac{\pi}{6}$, $\frac{5\pi}{6}$.`, ans: S`$\approx1.881$` },
  { level: 3, space: 4, q: S`A tank leaks at $5e^{-0.1t}$ L/min. How much leaks in the first 30 minutes?`, recap: S`$[-50e^{-0.1t}]$.`, ans: S`$50(1-e^{-3})\approx47.5$ L` },
  { level: 3, space: 4, q: S`$s=t^2e^{-t}$ for $t\ge0$. Find the greatest displacement.`, recap: S`$v=te^{-t}(2-t)$.`, ans: S`$\frac{4}{e^2}\approx0.541$ at $t=2$` },
  { level: 3, space: 4, q: S`A water level changes at $0.3\cos\frac{\pi t}{6}$ m/h with $h(0)=2$. Find $h(t)$ and the highest level.`, recap: "Integrate.", ans: S`$h=2+\frac{1.8}{\pi}\sin\frac{\pi t}{6}$; max $\approx2.573$ m` },
  { level: 3, space: 4, q: S`Explain how a particle can have zero displacement but positive distance travelled.`, recap: "Sign of v.", ans: "it moves forward and then back the same amount; ∫v cancels, ∫|v| adds" },
];

export const WS = {
  code: "13.6",
  title: "Kinematics and Accumulating Change",
  bigideas: S`$v=\frac{ds}{dt}$ and $a=\frac{dv}{dt}$. Going back, integrate and use a boundary condition. Displacement is $\int v\,dt$; distance is $\int|v|\,dt$, found by splitting where $v=0$. Integrating any rate of change gives the net change of the quantity.`,
  goals: ["Differentiate s to get v and a.", "Integrate a or v with a boundary condition.", "Distinguish displacement from distance.", "Find net change from a rate."],
  curriculum: "SL 5.9, 5.11",
  vocab: [["Displacement", "∫ v dt"], ["Distance", "∫ |v| dt"], ["At rest", "v = 0"], ["Net change", "∫ rate dt"]],
  hook: "A pendulum swings for a minute and ends where it began. How far did it travel?",
  concepts: [
    ["1. Differentiate down", S`${F({ view: { xmin: 0, xmax: 2 * PI, ymin: -2.5, ymax: 2.5 }, curves: [{ f: (t) => 2 * Math.sin(t) }, { f: (t) => 2 * Math.cos(t), color: "green" }], step: { x: PI / 2, y: 1 } }, 4.6)} s = 2 sin t (violet) and v = 2 cos t (green).`],
    ["2. Integrate up", "Use the boundary condition."],
    ["3. Distance", "Split where v = 0."],
  ],
  tips: ["Find zeros of v first.", "Use |v| for distance.", "Find C before evaluating.", "Keep units.", "Radians throughout."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

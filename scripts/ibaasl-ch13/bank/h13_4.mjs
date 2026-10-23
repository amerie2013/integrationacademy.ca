// 13.4 Integrating Trigonometric and Exponential Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { areaDoc } from "../figs13.mjs";

const S = String.raw;
const PI = Math.PI, r3 = (v) => Math.round(v * 1000) / 1000;

export const TOPIC = "13.4 Integrating Trigonometric and Exponential Functions";
export const Q = [
  num(S`Find the area enclosed by $y=\sin2x$ and $y=\cos x$ for $\frac{\pi}{6}\le x\le\frac{\pi}{2}$ (shaded).`, 0.25, "sin 2x ≥ cos x when sin x ≥ ½; [−½cos 2x − sin x] from π/6 to π/2.", areaDoc({ view: { xmin: 0, xmax: PI, ymin: -1.2, ymax: 1.2 }, step: { x: PI / 6, y: 0.5 }, curves: [{ f: (x) => Math.sin(2 * x), color: "violet" }, { f: Math.cos, color: "amber" }] }, [{ f: (x) => Math.sin(2 * x), g: Math.cos, a: PI / 6, b: PI / 2, color: "green" }]), 0.001),
  num(S`Find the total area enclosed between $y=1+\cos x$ and $y=1-\cos x$ for $0\le x\le\pi$ (shaded).`, 4, "∫₀^π |2cos x| dx = 2 + 2.", areaDoc({ view: { xmin: 0, xmax: PI, ymin: -0.2, ymax: 2.2 }, step: { x: PI / 4, y: 0.5 }, curves: [{ f: (x) => 1 + Math.cos(x), color: "violet" }, { f: (x) => 1 - Math.cos(x), color: "amber" }] }, [{ f: (x) => 1 + Math.cos(x), g: (x) => 1 - Math.cos(x), a: 0, b: PI, color: "green" }])),
  num(S`Find the smallest $a>0$ with $\int_0^a\cos2x\,dx=0$ (3 d.p.).`, r3(PI / 2), "½ sin 2a = 0 ⇒ 2a = π.", null, 0.001),
  num(S`Use $\tan^2x=\frac{1}{\cos^2x}-1$ to evaluate $\int_0^{\pi/6}\tan^2x\,dx$ (3 d.p.).`, r3(Math.sqrt(3) / 3 - PI / 6), "[tan x − x].", null, 0.001),
  num(S`$f''(x)=\sin x$, $f'(0)=0$, $f(0)=1$. Find $f(\pi)$ (3 d.p.).`, r3(PI + 1), "f′ = 1 − cos x, f = x − sin x + 1.", null, 0.001),
  mc(S`$\int\sin x\cos x\,dx$ can be written as:`, S`$-\frac14\cos2x+C$`, [S`$\frac14\cos2x+C$`, S`$-\frac12\cos2x+C$`, S`$\sin^2x\cos x+C$`], "sin x cos x = ½ sin 2x."),
  num(S`Evaluate $\int_0^{\pi/6}\sin^23x\,dx$ (3 d.p.).`, r3(PI / 12), "sin²3x = (1 − cos 6x)/2.", null, 0.001),
  tf(S`$\int_0^{\pi/2}\sin^2x\,dx=\int_0^{\pi/2}\cos^2x\,dx$.`, true, "Both are π/4 (and their sum is π/2)."),
  ms(S`For $F(x)=\int_0^x\cos t\,dt$, which are true? Select all.`, [S`$F(0)=0$`, S`$F\left(\frac{\pi}{2}\right)=1$`, S`$F(\pi)=0$`, S`$F(\pi)=2$`], [0, 1, 2], "F(x) = sin x."),
  num(S`Find the area under $y=3+2\sin x$ from 0 to $2\pi$ (shaded) (3 d.p.).`, r3(6 * PI), "[3x − 2cos x].", areaDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -0.5, ymax: 5.5 }, step: { x: PI / 2, y: 1 }, curves: [{ f: (x) => 3 + 2 * Math.sin(x), color: "violet" }] }, [{ f: (x) => 3 + 2 * Math.sin(x), a: 0, b: 2 * PI, color: "blue" }]), 0.001),
  num(S`Find the area enclosed by $y=\sin x$ and $y=-\sin x$ for $0\le x\le\pi$.`, 4, "∫ 2 sin x = 4."),
  num(S`Evaluate $\int_{-\pi/4}^{\pi/4}\frac{1}{\cos^2x}dx$.`, 2, "tan(π/4) − tan(−π/4)."),
  num(S`Find the area under $y=e^x+\cos x$ from 0 to $\frac{\pi}{2}$ (shaded) (3 d.p.).`, r3(Math.exp(PI / 2)), "(e^{π/2} − 1) + 1.", areaDoc({ view: { xmin: 0, xmax: 2, ymin: 0, ymax: 6 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => Math.exp(x) + Math.cos(x), color: "violet" }] }, [{ f: (x) => Math.exp(x) + Math.cos(x), a: 0, b: PI / 2, color: "green" }]), 0.001),
  num(S`One arch of $y=\sin kx$ ($k>0$) has area 0.5. Find k.`, 4, "Area 2/k."),
  mc(S`$\int_0^{\pi}(\cos^2x-\sin^2x)\,dx$ equals:`, "0", ["π", "1", "π/2"], "It is ∫ cos 2x."),
  num(S`Find the area between $y=\sin x$ and $y=\frac12$ for $\frac{\pi}{6}\le x\le\frac{5\pi}{6}$ (shaded) (3 d.p.).`, r3(Math.sqrt(3) - PI / 3), "[−cos x − x/2].", areaDoc({ view: { xmin: 0, xmax: PI, ymin: -0.2, ymax: 1.2 }, step: { x: PI / 6, y: 0.25 }, curves: [{ f: Math.sin, color: "violet" }], lines: [{ m: 0, b: 0.5, color: "amber" }] }, [{ f: Math.sin, g: () => 0.5, a: PI / 6, b: (5 * PI) / 6, color: "green" }]), 0.001),
  num(S`$f'(x)=e^{2x}+\sin x$ and $f(0)=0$. Find $f(1)$ (3 d.p.).`, r3(0.5 * Math.exp(2) - Math.cos(1) + 0.5), "f = ½e^{2x} − cos x + ½.", null, 0.001),
  num(S`Find the average value of $4\cos^2x$ on $[0,\pi]$.`, 2, "4 · (π/2)/π."),
  tf(S`$\int\frac{1}{\cos^23x}dx=3\tan3x+C$.`, false, "It is ⅓ tan 3x + C."),
  num(S`Evaluate $\int_0^{2\pi}|\sin x-\cos x|\,dx$ (3 d.p.).`, r3(4 * Math.SQRT2), "Split at π/4 and 5π/4: 2√2 + 2√2.", null, 0.001),
];

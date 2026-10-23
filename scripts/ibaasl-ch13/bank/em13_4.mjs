// 13.4 Integrating Trigonometric and Exponential Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { areaDoc } from "../figs13.mjs";

const S = String.raw;
const PI = Math.PI, r3 = (v) => Math.round(v * 1000) / 1000;
const shade = (view, step, f, regions) => areaDoc({ view, step, curves: [{ f, color: "violet" }] }, regions);

export const E = [
  mc(S`$\int\cos x\,dx$ equals:`, S`$\sin x+C$`, [S`$-\sin x+C$`, S`$\cos x+C$`, S`$-\cos x+C$`], "Reverse of (sin x)′."),
  mc(S`$\int\sin x\,dx$ equals:`, S`$-\cos x+C$`, [S`$\cos x+C$`, S`$\sin x+C$`, S`$-\sin x+C$`], "Reverse of (−cos x)′."),
  mc(S`$\int\frac{1}{\cos^2x}dx$ equals:`, S`$\tan x+C$`, [S`$-\tan x+C$`, S`$\frac{1}{\cos x}+C$`, S`$\sin^2x+C$`], "(tan x)′ = 1/cos²x."),
  mc(S`$\int\cos6x\,dx$ equals:`, S`$\frac16\sin6x+C$`, [S`$6\sin6x+C$`, S`$\sin6x+C$`, S`$-\frac16\sin6x+C$`], "Divide by 6."),
  mc(S`$\int e^{5x}dx$ equals:`, S`$\frac15e^{5x}+C$`, [S`$5e^{5x}+C$`, S`$e^{5x}+C$`, S`$\frac{e^{6x}}{6}+C$`], "Divide by 5."),
  num(S`Evaluate $\int_0^{\pi/2}\sin x\,dx$.`, 1, "[−cos x]."),
  num(S`Evaluate $\int_0^{\pi/6}\cos x\,dx$.`, 0.5, "sin(π/6).", null, 0.001),
  num(S`Evaluate $\int_0^{\pi/3}\sin x\,dx$.`, 0.5, "1 − cos(π/3).", null, 0.001),
  num(S`Evaluate $\int_0^{\pi}\cos x\,dx$.`, 0, "sin π − sin 0."),
  num(S`Evaluate $\int_0^1e^x\,dx$ (3 d.p.).`, r3(Math.E - 1), "e − 1.", null, 0.001),
  tf(S`$\int\sin x\,dx=\cos x+C$.`, false, "It is −cos x + C."),
  tf(S`$\int_0^{2\pi}\cos x\,dx=0$.`, true, "Full period."),
  tf(S`$\int\cos2x\,dx=2\sin2x+C$.`, false, "Divide by 2: ½ sin 2x."),
  fill(S`$\int\cos x\,dx=$ ___ $+C$`, ["sin x", "sinx", "sin(x)"], "Basic result."),
  ms(S`Which are antiderivatives of $\cos x$? Select all.`, [S`$\sin x$`, S`$\sin x+5$`, S`$-\sin x$`, S`$\cos x$`], [0, 1], "Any sin x + C."),
  mc("The shaded area under y = cos x from 0 to π/2 is:", "1", ["2", "π/2", "½"], "[sin x] from 0 to π/2.", shade({ xmin: 0, xmax: PI, ymin: -1.2, ymax: 1.2 }, { x: PI / 4, y: 0.5 }, Math.cos, [{ f: Math.cos, a: 0, b: PI / 2, color: "green" }])),
  mc(S`The value of $\int_\pi^{2\pi}\sin x\,dx$ (shaded) is:`, "−2", ["2", "0", "−1"], "The region is below the axis.", shade({ xmin: 0, xmax: 2 * PI, ymin: -1.2, ymax: 1.2 }, { x: PI / 2, y: 0.5 }, Math.sin, [{ f: Math.sin, a: PI, b: 2 * PI, color: "red" }])),
  num(S`Evaluate $\int_0^{\pi/3}\frac{1}{\cos^2x}dx$ (3 d.p.).`, r3(Math.sqrt(3)), "tan(π/3).", null, 0.001),
  num(S`Evaluate $\int_0^{\pi/2}(1+\cos x)\,dx$ (3 d.p.).`, r3(PI / 2 + 1), "[x + sin x].", null, 0.001),
  mc(S`$\int3\sin x\,dx$ equals:`, S`$-3\cos x+C$`, [S`$3\cos x+C$`, S`$-\frac13\cos x+C$`, S`$3\sin x+C$`], "Constant multiple."),
];

export const M = [
  num(S`Evaluate $\int_0^{\pi/6}\sin3x\,dx$ (4 d.p.).`, 1 / 3, "[−⅓cos 3x] = 0 + ⅓.", null, 0.0001),
  num(S`Evaluate $\int_0^{\pi/2}\cos\frac x2\,dx$ (3 d.p.).`, r3(Math.SQRT2), "[2 sin(x/2)] = 2 sin(π/4).", null, 0.001),
  num(S`Evaluate $\int_0^{\pi/9}\frac{1}{\cos^23x}dx$ (3 d.p.).`, r3(Math.sqrt(3) / 3), "⅓ tan(π/3).", null, 0.001),
  num(S`Evaluate $\int_0^{\ln2}e^{2x}dx$.`, 1.5, "½(e^{2 ln 2} − 1) = ½(4 − 1).", null, 0.001),
  num(S`Evaluate $\int_{\pi/2}^{\pi}\sin2x\,dx$.`, -1, "[−½cos 2x] = −½ − ½."),
  num(S`Use $\cos^2x=\frac{1+\cos2x}{2}$ to evaluate $\int_0^{\pi/4}\cos^2x\,dx$ (3 d.p.).`, r3(PI / 8 + 0.25), "[x/2 + sin 2x/4].", null, 0.001),
  mc(S`$\int\cos(5x+2)\,dx$ equals:`, S`$\frac15\sin(5x+2)+C$`, [S`$5\sin(5x+2)+C$`, S`$-\frac15\sin(5x+2)+C$`, S`$\sin(5x+2)+C$`], "Divide by 5."),
  mc(S`$\int\left(\cos x-e^{-x}\right)dx$ equals:`, S`$\sin x+e^{-x}+C$`, [S`$\sin x-e^{-x}+C$`, S`$-\sin x+e^{-x}+C$`, S`$\sin x+e^{x}+C$`], "∫ e^{−x} = −e^{−x}."),
  mc(S`$\int\frac{4}{\cos^24x}dx$ equals:`, S`$\tan4x+C$`, [S`$4\tan4x+C$`, S`$16\tan4x+C$`, S`$\frac14\tan4x+C$`], "4 · ¼ tan 4x."),
  tf(S`$\int_0^{\pi}|\cos x|\,dx=2$.`, true, "1 + 1."),
  tf(S`For some $0<a<2\pi$, $\int_0^a\sin x\,dx$ is negative.`, false, "It equals 1 − cos a ≥ 0."),
  num(S`Find the total area between $y=\sin3x$ and the x-axis for $0\le x\le\frac{2\pi}{3}$ (4 d.p.).`, 4 / 3, "Two arches of area ⅔.", null, 0.0001),
  num(S`$f'(x)=\cos x$ and $f\left(\frac{\pi}{2}\right)=3$. Find $f(0)$.`, 2, "f = sin x + 2."),
  num(S`Find the smallest $k>0$ with $\int_0^k\cos x\,dx=0.5$ (4 d.p.).`, Math.round((PI / 6) * 10000) / 10000, "sin k = ½.", null, 0.0001),
  ms("Which integrals equal 0? Select all.", [S`$\int_0^{2\pi}\sin x\,dx$`, S`$\int_{-\pi}^{\pi}\sin x\,dx$`, S`$\int_0^{\pi}\sin x\,dx$`, S`$\int_0^{\pi}\cos x\,dx$`], [0, 1, 3], "∫₀^π sin x = 2."),
  mc("The shaded area under y = 2 sin x from 0 to π/2 is:", "2", ["1", "π", "4"], "[−2cos x].", shade({ xmin: 0, xmax: PI, ymin: -0.3, ymax: 2.3 }, { x: PI / 4, y: 0.5 }, (x) => 2 * Math.sin(x), [{ f: (x) => 2 * Math.sin(x), a: 0, b: PI / 2, color: "green" }])),
  mc("The shaded area under y = cos x from −π/2 to π/2 is:", "2", ["1", "0", "π"], "sin(π/2) − sin(−π/2).", shade({ xmin: -PI, xmax: PI, ymin: -1.2, ymax: 1.2 }, { x: PI / 2, y: 0.5 }, Math.cos, [{ f: Math.cos, a: -PI / 2, b: PI / 2, color: "green" }])),
  num(S`Evaluate $\int_0^{\pi/2}(\sin x+2\cos x)\,dx$.`, 3, "1 + 2."),
  num(S`Evaluate $\int_0^1\left(e^x+e^{-x}\right)dx$ (3 d.p.).`, r3(Math.E - 1 / Math.E), "(e − 1) + (1 − e⁻¹).", null, 0.001),
  num(S`Find the average value of $\sin x$ on $[0,\pi]$ (3 d.p.).`, r3(2 / PI), "(1/π) · 2.", null, 0.001),
];

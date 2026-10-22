// 12.6 Transformations and Periodic Models — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI, r3 = (v) => Math.round(v * 1000) / 1000;
const g = (f, xmin, xmax, ymin, ymax, sx = 1, sy = 1, lines = []) => planeDoc({ view: { xmin, xmax, ymin, ymax }, curves: [{ f }], lines, step: { x: sx, y: sy } });
const wave = g((x) => 5 * Math.cos((PI * x) / 2) + 2, 0, 8, -4, 8);

export const TOPIC = "12.6 Transformations and Periodic Models";
export const Q = [
  num(S`The graph is $y=a\cos(bx)+d$ with a maximum 7 at $x=0$ and the next minimum −3 at $x=2$. Find b (3 d.p.).`, r3(PI / 2), "Period 4, so b = 2π/4.", wave, 0.001),
  num(S`For the same graph, find $a+d$.`, 7, "a = 5, d = 2.", wave),
  num(S`Daylight is modelled by $D=12+3.5\sin\frac{2\pi(t-80)}{365}$ hours, t the day of the year. Find the longest day length.`, 15.5, "12 + 3.5."),
  num(S`For the daylight model, on which day t is D greatest?`, 171.25, "t − 80 = 365/4.", null, 0.01),
  num(S`For the daylight model, for about how many days of the year is D above 14 hours (nearest day)?`, 112, "sin > 4/7: the fraction (π − 2 sin⁻¹(4/7))/(2π) of 365 days.", null, 1),
  mc(S`$y=\sin x$ is stretched horizontally by factor 2 and then translated right $\frac{\pi}{3}$. The result is:`, S`$y=\sin\left(\frac12\left(x-\frac{\pi}{3}\right)\right)$`, [S`$y=\sin\left(2\left(x-\frac{\pi}{3}\right)\right)$`, S`$y=\sin\left(\frac{x}{2}-\frac{\pi}{3}\right)$`, S`$y=2\sin\left(x-\frac{\pi}{3}\right)$`], "Shift the stretched graph: replace x with x − π/3."),
  mc(S`$y=3\sin\left(2x-\frac{\pi}{3}\right)$ is $y=3\sin2x$ translated:`, S`right by $\frac{\pi}{6}$`, [S`right by $\frac{\pi}{3}$`, S`left by $\frac{\pi}{6}$`, S`left by $\frac{\pi}{3}$`], "2(x − π/6)."),
  num(S`$y=a\sin(bx)+d$ has a maximum at $\left(\frac{\pi}{8},7\right)$ and the next minimum at $\left(\frac{3\pi}{8},-1\right)$. Find b.`, 4, "Half-period π/4, so period π/2."),
  num(S`For that function, find $a\times d$.`, 12, "a = 4, d = 3."),
  num(S`Find the smallest k for which $y=k+3\cos x$ is never negative.`, 3, "Minimum k − 3 ≥ 0."),
  num(S`Find the largest c for which $4\sin x+c=0$ has a solution.`, 4, "sin x = −c/4 needs c ≤ 4."),
  tf(S`$y=\sin x$ and $y=\cos\left(x-\frac{\pi}{2}\right)$ are the same function.`, true, "cos(x − π/2) = sin x."),
  ms(S`Which equal $y=3\cos x$ for every x? Select all.`, [S`$3\sin\left(x+\frac{\pi}{2}\right)$`, S`$-3\cos(x+\pi)$`, S`$3\cos(-x)$`, S`$3\sin\left(x-\frac{\pi}{2}\right)$`], [0, 1, 2], "sin(x − π/2) = −cos x."),
  mc("The graph shows a tide height h (m) with a high tide of 8 m at t = 2 h and a low tide of 2 m at t = 8 h. A model is:", S`$h=3\cos\frac{\pi(t-2)}{6}+5$`, [S`$h=3\sin\frac{\pi(t-2)}{6}+5$`, S`$h=5\cos\frac{\pi(t-2)}{12}+3$`, S`$h=3\cos\frac{\pi(t+2)}{6}+5$`], "Amplitude 3, axis 5, period 12, peak at t = 2.", g((t) => 3 * Math.cos((PI * (t - 2)) / 6) + 5, 0, 16, 0, 9, 2, 1)),
  num(S`A pendulum's displacement is $x=6\sin(\pi t)$ cm. Find the first time $t>0$ when $x=3$ (3 d.p.).`, r3(1 / 6), "sin(πt) = ½ ⇒ πt = π/6.", g((t) => 6 * Math.sin(PI * t), 0, 2.5, -7, 7, 0.5, 2, [{ m: 0, b: 3, color: "amber", dash: true }]), 0.001),
  num(S`A seat's height is $h=18-15\cos\frac{\pi t}{2}$ m (t in min). For how long in each turn is the seat above 25 m (3 d.p.)?`, 1.382, "cos(πt/2) < −7/15; the interval has length (2π − 2 cos⁻¹(−7/15)) × 2/π.", g((t) => 18 - 15 * Math.cos((PI * t) / 2), 0, 8, 0, 36, 1, 4, [{ m: 0, b: 25, color: "amber", dash: true }]), 0.002),
  num(S`$y=5\sin bx$ has period 3. Find b (3 d.p.).`, r3((2 * PI) / 3), "2π/b = 3.", null, 0.001),
  mc(S`Which transformations map $y=\cos x$ onto $y=2\cos\frac{x}{3}-4$?`, "vertical stretch 2, horizontal stretch 3, down 4", ["vertical stretch 2, horizontal stretch ⅓, down 4", "vertical stretch 3, horizontal stretch 2, up 4", "vertical stretch 2, horizontal stretch 3, left 4"], "x/3 is a horizontal stretch by 3."),
  num(S`$y=a\cos x+d$ has range $-4\le y\le10$. Find d.`, 3, "Midpoint of −4 and 10."),
  num(S`How many solutions does $4\sin\frac{x}{2}=3$ have for $0\le x\le4\pi$?`, 2, "x/2 covers one turn."),
];

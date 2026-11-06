// 8.5 Modelling with Combined Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;
const C = (t) => 12 * t * 0.7 ** t;

export const TOPIC = "8.5 Modelling with Combined Functions";
export const Q = [
  num(S`$C(t)=12t(0.7)^t$ mg/L. Estimate the peak level (one decimal).`, C(1 / Math.log(1 / 0.7)), "Peak near t ≈ 2.8.", null, 0.1),
  num(S`For $C(t)=12t(0.7)^t$, when does the level fall back below $5$ mg/L? (one decimal)`, 8.4, "After the peak, C(8) ≈ 5.53 and C(9) ≈ 4.36; refine to t ≈ 8.4.", null, 0.1),
  num(S`A pendulum $\theta(t)=30(0.85)^t\cos(\pi t)$. When is the envelope first below $1^\circ$? (one decimal)`, L(1 / 30) / L(0.85), "0.85ᵗ = 1/30.", null, 0.05),
  num(S`$\bar C(x)=25+\frac{8000}x$. How many items make the average at most $30$?`, 1600, "8000/x ≤ 5."),
  num(S`An oil spill: $r(t)=5+2t$ m, $A=\pi r^2$. When is the area $1000\ \text{m}^2$? (two decimals)`, (Math.sqrt(1000 / Math.PI) - 5) / 2, "5 + 2t = √(1000/π).", null, 0.01),
  num(S`$T(t)=20-0.3t+4\sin\left(\frac{\pi t}{12}\right)$. When does $T$ first fall below $14$? (one decimal)`, 13.8, "Use a graph or table: T(13) ≈ 15.1, T(14) ≈ 13.8; refine to t ≈ 13.8.", null, 0.1),
  num(S`A heating cost: $T(t)=17+3\sin\frac{\pi t}{12}$ and $K(T)=0.4(21-T)$ dollars/h. Find the maximum of $K(T(t))$.`, 2.8, "Max when sin = −1: 0.4(21 − 14).", null, 0.001),
  num(S`Population $P=2000(1.025)^t$ and food for $F=3000+40t$ people. When does a shortage start? (one decimal)`, 30.1, "Refine a table: crossing at t ≈ 30.1.", null, 0.1),
  num(S`How many identical $60$ dB machines are needed for at least $75$ dB?`, 32, "10 log n ≥ 15 ⇒ n ≥ 31.6."),
  num(S`A ripple's radius is $r(t)=\sqrt{t}$ m. At what time is the area $10\pi\ \text{m}^2$?`, 10, "πr² = πt = 10π."),
  mc(S`Sales are $S(t)=a+bt+c\sin(kt)$. Over one full period, the average of the seasonal part is…`, "0", ["c", "a", "bt"], "A sine wave averages to zero over a period."),
  mc(S`A model $y=50(0.9)^t+20$ describes…`, "a quantity decaying toward 20", ["growth toward 50", "decay toward 0", "oscillation about 20"], "The exponential part → 0."),
  ms(S`Select every situation best modelled by a product.`, ["a vibration whose amplitude halves every 2 s", "a light flickering more and more strongly", "sales = trend + season", "cost per item"], [0, 1], "Envelope × wave in both; the others are a sum and a quotient."),
  tf(S`$\bar C(x)=\frac{C(x)}x$ always decreases when $C$ is linear with a positive fixed cost.`, true, "a/x + b decreases for x > 0."),
  tf(S`A damped wave $a\,b^t\cos(kt)$ with $0<b<1$ eventually stays within any small band around $0$.`, true, "The envelope → 0."),
  mc("The graph shows C(t) = 12t(0.7)ᵗ. Which statement is true?", "it rises to a peak near t ≈ 2.8, then decays", ["it keeps rising", "it oscillates", "it is linear"], "Linear factor first, exponential decay later.", planeDoc({ view: { xmin: -0.3, xmax: 15, ymin: -0.5, ymax: 14 }, curves: [{ f: C, a: 0, color: "violet" }], step: { x: 1, y: 2 } })),
  mc("The graph shows temperature: a falling trend plus a daily cycle. What is the trend's rate?", "−0.3 °C per hour", ["4 °C per hour", "−4 °C per hour", "0.3 °C per hour"], "The center line falls 0.3 per hour.", planeDoc({ view: { xmin: 0, xmax: 48, ymin: 0, ymax: 26 }, curves: [{ f: (t) => 20 - 0.3 * t, color: "gray" }, { f: (t) => 20 - 0.3 * t + 4 * Math.sin(Math.PI * t / 12), color: "violet" }], step: { x: 4, y: 2 } })),
  mc("The graph compares population (violet) with food supply (blue). What happens after the crossing?", "a growing shortage", ["a growing surplus", "no change", "the population falls"], "The exponential stays above the line.", planeDoc({ view: { xmin: 0, xmax: 80, ymin: 1000, ymax: 15000 }, curves: [{ f: (t) => 2000 * 1.025 ** t, a: 0, color: "violet" }], lines: [{ m: 40, b: 3000, color: "blue" }], step: { x: 10, y: 1000 } })),
  mc("The graph shows an average-cost curve 25 + 8000/x. Where does it reach 30?", "x = 1600", ["x = 800", "x = 30", "x = 8000"], "8000/x = 5.", planeDoc({ view: { xmin: -50, xmax: 4000, ymin: 0, ymax: 80 }, curves: [{ f: (x) => 25 + 8000 / x, a: 150, color: "violet" }], lines: [{ m: 0, b: 30, color: "blue", dash: true }, { m: 0, b: 25, color: "red", dash: true }], step: { x: 500, y: 10 } })),
  num(S`$S(t)=500+20t+150\cos\left(\frac{\pi(t-7)}6\right)$. Find $S(13)$.`, 500 + 260 - 150, "cos π = −1."),
];

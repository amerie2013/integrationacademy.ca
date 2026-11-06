// 8.5 Modelling with Combined Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const E = [
  mc("A quantity grows steadily and also repeats a seasonal pattern. Which combination models it?", "a sum", ["a product", "a quotient", "a composite"], "Trend + cycle."),
  mc("A vibration slowly dies out. Which combination models it?", "a product", ["a sum", "a quotient", "a difference"], "Envelope × wave."),
  mc("The cost per person of a trip is modelled by…", "a quotient", ["a sum", "a product", "a composite"], "Total cost ÷ people."),
  mc("A pond's area depends on its radius, and the radius grows with time. This is…", "a composite", ["a sum", "a quotient", "a difference"], "A(r(t))."),
  mc("Profit as revenue minus cost is…", "a difference", ["a product", "a composite", "a quotient"], "P = R − C."),
  num(S`$S(t)=120+6t+25\sin\left(\frac{\pi t}6\right)$. Find $S(3)$.`, 163, "120 + 18 + 25."),
  num(S`$S(t)=300+10t+50\sin\left(\frac{\pi t}6\right)$. Find $S(6)$.`, 360, "sin π = 0."),
  num(S`$\bar C(x)=20+\frac{1000}x$. Find $\bar C(100)$.`, 30, "20 + 10."),
  num(S`$d(t)=6(0.5)^t\cos(2\pi t)$. Find $d(1)$.`, 3, "6 × 0.5 × 1."),
  num(S`$r(t)=2t$ cm and $A=\pi r^2$. Find the area at $t=4$ (one decimal).`, Math.PI * 64, "r = 8.", null, 0.1),
  num(S`What is the period, in months, of $\sin\left(\frac{\pi t}6\right)$?`, 12, "2π ÷ (π/6)."),
  num(S`$\bar C(x)=15+\frac{600}x$ approaches what value for very large $x$?`, 15, "600/x → 0."),
  tf(S`In $S(t)=200+15t+40\sin\frac{\pi t}6$, the number $40$ is the seasonal swing.`, true, "Amplitude of the sine term."),
  tf(S`An envelope $a\,b^t$ with $b=1.2$ describes damping.`, false, "Damping needs 0 < b < 1."),
  tf(S`The average cost $\frac{C(x)}x$ is defined at $x=0$.`, false, "Division by zero."),
  fill(S`In $A(r(t))$, the function applied first is ____.`, ["r", "r(t)"], "Inside out."),
  fill(S`$\theta(t)=20(0.9)^t\cos(\pi t)$ has envelope $20(0.9)^t$, which at $t=1$ is ____.`, ["18"], "20 × 0.9."),
  num(S`One machine makes $50$ dB. With $L(n)=50+10\log n$, find the level of $10$ machines.`, 60, "50 + 10."),
  mc("The graph shows sales (violet) and the trend line (gray). What is the size of the seasonal swing?", "about 40", ["about 15", "about 200", "about 12"], "The curve is at most 40 above or below the line.", planeDoc({ view: { xmin: -1, xmax: 25, ymin: 100, ymax: 650 }, curves: [{ f: (t) => 200 + 15 * t, color: "gray" }, { f: (t) => 200 + 15 * t + 40 * Math.sin(Math.PI * t / 6), color: "violet" }], step: { x: 2, y: 50 } })),
  mc("The graph shows an average-cost curve. What does the dashed line represent?", "the cost of each extra item", ["the fixed cost", "the break-even point", "the total cost"], "The horizontal asymptote is the per-item cost.", planeDoc({ view: { xmin: -20, xmax: 1000, ymin: 0, ymax: 60 }, curves: [{ f: (x) => 15 + 2000 / x, a: 40, color: "violet" }], lines: [{ m: 0, b: 15, color: "red", dash: true }], step: { x: 100, y: 5 } })),
];

export const M = [
  num(S`The envelope $10(0.7)^t$ first falls below $1$ at what $t$? (two decimals)`, L(0.1) / L(0.7), "0.7ᵗ = 0.1.", null, 0.01),
  num(S`The envelope $20(0.9)^t$ first falls below $1$ at what $t$? (two decimals)`, L(0.05) / L(0.9), "0.9ᵗ = 0.05.", null, 0.01),
  num(S`$\bar C(x)=12+\frac{3000}x$. How many items make it at most $15$?`, 1000, "3000/x ≤ 3."),
  num(S`$r(t)=2t+1$ m and $A=\pi r^2$. When is the area $200\ \text{m}^2$? (two decimals)`, (Math.sqrt(200 / Math.PI) - 1) / 2, "2t + 1 = √(200/π).", null, 0.01),
  num(S`A balloon has $r=3$ cm. Find $V=\frac43\pi r^3$ (one decimal).`, 36 * Math.PI, "36π.", null, 0.1),
  num(S`Five identical $50$ dB sources together give what level? (two decimals)`, 50 + 10 * L(5), "50 + 10 log 5.", null, 0.01),
  num(S`$C(t)=15t(0.6)^t$ mg/L. Find $C(2)$.`, 10.8, "30 × 0.36.", null, 0.001),
  num(S`$T(t)=18-0.1t+5\sin\left(\frac{\pi t}{12}\right)$. Find $T(18)$.`, 18 - 1.8 - 5, "sin(3π/2) = −1.", null, 0.001),
  mc(S`Which model gives a sales trend of $8$ per month with a $12$-month swing of $30$?`, S`$S=100+8t+30\sin\frac{\pi t}6$`, [S`$S=100+30t+8\sin\frac{\pi t}6$`, S`$S=100+8t+30\sin(12t)$`, S`$S=(100+8t)\cdot30\sin\frac{\pi t}6$`], "Trend coefficient 8, amplitude 30, period 12."),
  mc(S`A wave starts with amplitude $5$ and loses $20\%$ of it each second. Its envelope is…`, S`$5(0.8)^t$`, [S`$5(0.2)^t$`, S`$5-0.2t$`, S`$5(1.2)^{-t}$`], "Keeps 80% each second."),
  mc(S`$V(r(t))$ with $r(t)=t+2$ and $V=\frac43\pi r^3$ equals…`, S`$\frac43\pi(t+2)^3$`, [S`$\frac43\pi t^3+2$`, S`$\frac43\pi(t^3+8)$`, S`$\frac43\pi r^3(t+2)$`], "Substitute r(t)."),
  ms(S`Select every true statement about $\bar C(x)=10+\frac{500}x$.`, ["it decreases as x increases (x > 0)", "it approaches 10", "it is 15 at x = 100", "it is defined at x = 0"], [0, 1, 2], "500/x shrinks."),
  tf(S`A population $800(1.03)^t$ eventually exceeds any linear supply $a+bt$.`, true, "Exponential growth wins eventually."),
  tf(S`In $\theta(t)=20(0.9)^t\cos(\pi t)$, the period of the swing is $2$ s.`, true, "2π/π."),
  fill(S`For $C(t)=15t(0.6)^t$, the peak is near $t\approx$ ____ (one decimal).`, ["2", "2.0"], "Table: C(1) = 9, C(2) = 10.8, C(3) = 9.72."),
  num(S`When does $600(1.04)^t$ exceed $900+15t$? (one decimal)`, 16.5, "Refine a table between 16 and 17.", null, 0.1),
  num(S`Three identical $70$ dB sources give what level? (one decimal)`, 70 + 10 * L(3), "70 + 10 log 3.", null, 0.05),
  mc("The graph shows a drug model C(t) = 15t(0.6)ᵗ. About how long is it above 6 mg/L?", "about 4.4 h (from 0.5 to 4.9 h)", ["about 2 h", "about 10 h", "about 6 h"], "Crossings near 0.52 and 4.91.", planeDoc({ view: { xmin: -0.3, xmax: 10, ymin: -0.5, ymax: 12 }, curves: [{ f: (t) => 15 * t * 0.6 ** t, a: 0, color: "violet" }], lines: [{ m: 0, b: 6, color: "blue", dash: true }], step: { x: 1, y: 1 } })),
  mc("The graph shows a damped pendulum. Estimate the time when the swing is first below 5°.", "about 13 s", ["about 2 s", "about 5 s", "about 30 s"], "20(0.9)ᵗ = 5 at t ≈ 13.2.", planeDoc({ view: { xmin: -0.5, xmax: 18, ymin: -22, ymax: 22 }, curves: [{ f: (t) => 20 * 0.9 ** t, a: 0, color: "gray" }, { f: (t) => 20 * 0.9 ** t * Math.cos(Math.PI * t), a: 0, color: "violet" }], lines: [{ m: 0, b: 5, color: "blue", dash: true }], step: { x: 1, y: 5 } })),
  num(S`$S(t)=200+15t+40\sin\left(\frac{\pi t}6\right)$. Find $S(12)$.`, 380, "sin 2π = 0."),
];

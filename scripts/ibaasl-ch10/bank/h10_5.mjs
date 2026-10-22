// 10.5 Area Between Curves — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { areaDoc } from "../figs10.mjs";

const S = String.raw;
const d3 = (v) => Math.round(v * 1000) / 1000;
const sim = (f, a, b, n = 2000) => { const h = (b - a) / n; let s = f(a) + f(b); for (let i = 1; i < n; i++) s += f(a + i * h) * (i % 2 ? 4 : 2); return (s * h) / 3; };
const bis = (h, a, b) => { for (let j = 0; j < 80; j++) { const m = (a + b) / 2; if (h(a) * h(m) <= 0) b = m; else a = m; } return (a + b) / 2; };
const e1 = bis((x) => Math.exp(x) - 3 + x * x, -2, 0), e2 = bis((x) => Math.exp(x) - 3 + x * x, 0, 2);

export const TOPIC = "10.5 Area Between Curves";
export const Q = [
  num(S`Find the total area enclosed between $y=x^3-3x$ and $y=x$ (3 d.p.).`, 8, "Meet at 0, ±2; each lobe ∫₀² (4x − x³) = 4.", areaDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => x ** 3 - 3 * x }, { f: (x) => x, color: "amber" }] }, [{ f: (x) => x ** 3 - 3 * x, g: (x) => x, a: -2, b: 0 }, { f: (x) => x, g: (x) => x ** 3 - 3 * x, a: 0, b: 2, color: "green" }]), 0.001),
  num(S`Find the area enclosed by $y=x^2-2x+3$ and $y=x+3$ (3 d.p.).`, d3(4.5), "Meet at 0, 3; ∫ (3x − x²).", null, 0.001),
  num(S`Find the area enclosed by $y=\sqrt[3]{x}$ and $y=x^2$ for $0\le x\le1$ (3 d.p.).`, d3(3 / 4 - 1 / 3), "∫₀¹ (x^(1/3) − x²) = 3/4 − 1/3.", null, 0.001),
  num(S`Find the area bounded by $y=\frac{4}{x}$, $y=5-x$ (3 d.p.).`, d3(7.5 - 4 * Math.log(4)), "Meet at 1, 4: ∫₁⁴ (5 − x − 4/x) dx.", areaDoc({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 4 / x, a: 0.8, b: 5 }, { f: (x) => 5 - x, color: "amber" }] }, [{ f: (x) => 5 - x, g: (x) => 4 / x, a: 1, b: 4 }]), 0.001),
  num(S`Find the area between $y=e^{x}$ and $y=e^{2x}$ from $x=0$ to $x=1$ (3 d.p.).`, d3(Math.exp(2) / 2 - Math.E + 0.5), "∫₀¹ (e^(2x) − eˣ) = (e²/2 − e) − (½ − 1).", null, 0.001),
  num(S`Use a GDC: find the area enclosed by $y=e^{x}$ and $y=3-x^2$ (3 d.p.).`, d3(sim((x) => 3 - x * x - Math.exp(x), e1, e2)), `Intersections ≈ ${d3(e1)} and ${d3(e2)}.`, areaDoc({ view: { xmin: -2.5, xmax: 1.5, ymin: -1, ymax: 4 }, step: { x: 0.5, y: 1 }, curves: [{ f: Math.exp }, { f: (x) => 3 - x * x, color: "amber" }] }, [{ f: (x) => 3 - x * x, g: Math.exp, a: e1, b: e2 }]), 0.002),
  num(S`The area enclosed by $y=x^2$ and $y=k$ is 36. Find $k$.`, 9, "4k^(3/2)/3 = 36."),
  num(S`The area enclosed by $y=ax^2$ and $y=4$ ($a>0$) is $\frac{32}{3}$. Find $a$.`, 1, "Meet at ±2/√a; area = 32/(3√a)."),
  num(S`Find the area of the region enclosed by $y=4-x^2$ and $y=3$ (3 d.p.).`, d3(4 / 3), "Meet at ±1: ∫ (1 − x²).", null, 0.001),
  mc(S`On $[0,4]$, $y=\sqrt x$ and $y=\frac x2$ cross at:`, S`$x=0$ and $x=4$`, [S`$x=2$`, S`$x=1$ and $x=4$`, S`$x=0$ only`], "Square: x = x²/4 ⇒ x(x − 4) = 0."),
  num(S`Find the area enclosed by $y=\sqrt x$ and $y=\frac x2$ (3 d.p.).`, d3(4 / 3), "∫₀⁴ (√x − x/2) = 16/3 − 4.", areaDoc({ view: { xmin: -0.5, xmax: 5, ymin: -0.3, ymax: 2.5 }, step: { x: 1, y: 0.5 }, curves: [{ f: (x) => Math.sqrt(Math.max(0, x)), a: 0, b: 5 }, { f: (x) => x / 2, color: "amber" }] }, [{ f: (x) => Math.sqrt(x), g: (x) => x / 2, a: 0, b: 4 }]), 0.001),
  ms("For the region between y = x² and y = 2x from x = 0 to x = 3, which are true? Select all.", ["the curves cross at x = 2", "the total area is 8/3", "∫₀³ (2x − x²) dx gives the total area", "∫₀³ (2x − x²) dx = 0"], [0, 1, 3], "Signed parts cancel: 4/3 − 4/3."),
  tf(S`Shifting both curves up by 3 does not change the area between them.`, true, "The 3s cancel."),
  num(S`Find the area bounded by $y=x^2$, $y=-x+2$ and the x-axis, for $x\ge0$ (3 d.p.).`, d3(1 / 3 + 0.5), "Meet at 1: ∫₀¹ x² + triangle from 1 to 2 (½).", null, 0.001),
  num(S`Find the area enclosed by $y=x^4$ and $y=x^2$ (3 d.p.).`, d3(2 * (1 / 3 - 1 / 5)), "Meet at 0, ±1: 2 ∫₀¹ (x² − x⁴).", null, 0.001),
  mc("The diagram shows y = x³ − 6x² + 8x and the x-axis. The total shaded area is:", "8", ["0", "4", "16"], "∫₀² = 4, ∫₂⁴ = −4.", areaDoc({ view: { xmin: -0.5, xmax: 4.5, ymin: -4, ymax: 4 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => x ** 3 - 6 * x * x + 8 * x }] }, [{ f: (x) => x ** 3 - 6 * x * x + 8 * x, a: 0, b: 2, color: "green" }, { f: (x) => x ** 3 - 6 * x * x + 8 * x, a: 2, b: 4, color: "red" }])),
  num(S`Find $m>0$ if the area enclosed by $y=x^2$ and $y=mx$ is $\frac{9}{2}$.`, 3, "m³/6 = 9/2."),
  num(S`Find the area between $y=\ln x$ and the x-axis from $x=1$ to $x=e$ (use a GDC).`, 1, "∫₁ᵉ ln x dx = [x ln x − x]₁ᵉ = 1."),
  num(S`Find the area enclosed by $y=2^x$ and $y=x+1$ (3 d.p.).`, d3(1.5 - 1 / Math.log(2)), "Meet at 0, 1: ∫₀¹ (x + 1 − 2ˣ) = 3/2 − 1/ln 2.", null, 0.001),
  mc("Which expression gives the area between y = f(x) (upper) and y = g(x) (lower) from a to b?", S`$\int_a^b f\,dx-\int_a^b g\,dx$`, [S`$\int_a^b f\,dx\cdot\int_a^b g\,dx$`, S`$\int_a^b g\,dx-\int_a^b f\,dx$`, S`$\left|\int_a^b f\,dx\right|+\left|\int_a^b g\,dx\right|$`], "Linearity."),
];

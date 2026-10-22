// 10.3 Area and Definite Integrals — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { areaDoc, stripsOf } from "../figs10.mjs";

const S = String.raw;
const d3 = (v) => Math.round(v * 1000) / 1000;
const trap = (f, a, b, n) => { const h = (b - a) / n; let s = (f(a) + f(b)) / 2; for (let i = 1; i < n; i++) s += f(a + i * h); return s * h; };
const sum = (f, a, b, n, side) => { const h = (b - a) / n; let s = 0; for (let i = 0; i < n; i++) s += f(a + (i + side) * h); return s * h; };
const k1 = (x) => 20 / (x + 1);

export const TOPIC = "10.3 Area and Definite Integrals";
export const Q = [
  num(S`For $y=\frac{20}{x+1}$ on $[0,4]$ with 4 strips, find the upper sum (3 d.p.).`, d3(sum(k1, 0, 4, 4, 0)), "Decreasing: left heights 20, 10, 6.667, 5.", areaDoc({ view: { xmin: -0.5, xmax: 4.5, ymin: -1, ymax: 22 }, step: { x: 1, y: 2 }, curves: [{ f: k1, a: -0.3, b: 4.5 }] }, [], stripsOf(k1, 0, 4, 4, "upper", "red")), 0.001),
  num(S`For the same function and strips, find the lower sum.`, d3(sum(k1, 0, 4, 4, 1)), "Right heights 10, 6.667, 5, 4.", null, 0.001),
  num(S`Find the exact value of $\int_0^4\frac{20}{x+1}\,dx$ using a GDC (3 d.p.).`, d3(20 * Math.log(5)), "20 ln 5.", null, 0.001),
  num(S`Estimate $\int_0^4\frac{20}{x+1}\,dx$ with 4 trapezia (3 d.p.).`, d3(trap(k1, 0, 4, 4)), "Average of lower and upper sums.", null, 0.001),
  mc(S`For any $f$ and equal strips, the trapezoidal estimate equals:`, "the average of the left-endpoint and right-endpoint sums", ["the lower sum", "the upper sum", "the exact integral"], "Each trapezium is the average of two rectangles."),
  num(S`A trapezoidal estimate with $h=0.5$ gives $\frac{h}{2}[3+2S+11]=20$. Find $S$, the sum of the interior ordinates.`, 33, "0.25(14 + 2S) = 20 ⇒ 14 + 2S = 80."),
  num(S`The speed of a car (m/s) is recorded every 5 s: 0, 8, 14, 18, 20. Estimate the distance in 20 s.`, 2.5 * (0 + 2 * (8 + 14 + 18) + 20), "Trapezoidal rule, h = 5.", areaDoc({ view: { xmin: -1, xmax: 22, ymin: -1, ymax: 22 }, step: { x: 5, y: 5 }, segs: [{ pts: [[0, 0], [5, 8], [10, 14], [15, 18], [20, 20]] }] }, [], [{ x0: 0, x1: 5, y0: 0, y1: 8, trap: true, color: "amber" }, { x0: 5, x1: 10, y0: 8, y1: 14, trap: true, color: "amber" }, { x0: 10, x1: 15, y0: 14, y1: 18, trap: true, color: "amber" }, { x0: 15, x1: 20, y0: 18, y1: 20, trap: true, color: "amber" }]), 0.001),
  num(S`$\int_0^6 f\,dx=18$. Find $\int_0^6(2f(x)-x)\,dx$.`, 18, "36 − 18."),
  num(S`$\int_1^4 f\,dx=5$ and $\int_1^4 g\,dx=-2$. Find $k$ if $\int_1^4(f+kg)\,dx=11$.`, -3, "5 − 2k = 11."),
  num(S`$\int_0^a 3\,dx=12$. Find $a$.`, 4, "3a = 12."),
  mc(S`If $f$ is decreasing and positive on $[a,b]$, which ordering is correct?`, "lower sum < integral < upper sum", ["upper sum < integral < lower sum", "integral < lower sum < upper sum", "lower sum = upper sum"], "Strict for strictly decreasing."),
  ms(S`Given $\int_0^2f=5$, $\int_2^4f=-3$, which are true? Select all.`, [S`$\int_0^4f=2$`, S`$\int_4^0f=-2$`, S`$\int_0^4|f|\ge8$ if f does not change sign on each part`, S`$\int_2^0f=5$`], [0, 1, 2], "Reversing gives −5."),
  tf(S`Doubling the number of trapezia always gives a better estimate for a concave-up curve.`, true, "The overestimate shrinks."),
  num(S`Use a GDC: find the total area between $y=x^3-2x$ and the x-axis from $x=-1$ to $x=2$ (3 d.p.).`, d3(0.75 + 1 + 1), "Split at 0 and √2: 3/4 + 1 + 1 (GDC with |f|).", areaDoc({ view: { xmin: -1.5, xmax: 2.3, ymin: -2, ymax: 5 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => x ** 3 - 2 * x }] }, [{ f: (x) => x ** 3 - 2 * x, a: -1, b: 0, color: "green" }, { f: (x) => x ** 3 - 2 * x, a: 0, b: Math.SQRT2, color: "red" }, { f: (x) => x ** 3 - 2 * x, a: Math.SQRT2, b: 2, color: "green" }]), 0.001),
  num(S`For the same function, find $\int_{-1}^2(x^3-2x)\,dx$ (3 d.p.).`, d3(0.75 - 1 + 1), "Signed: 3/4 − 1 + 1.", null, 0.001),
  num(S`With 3 trapezia, the estimate of $\int_0^3(2^x)\,dx$ is (3 d.p.):`, d3(trap((x) => 2 ** x, 0, 3, 3)), "½[1 + 2(2 + 4) + 8].", areaDoc({ view: { xmin: -0.5, xmax: 3.5, ymin: -0.5, ymax: 9 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => 2 ** x }] }, [], stripsOf((x) => 2 ** x, 0, 3, 3, "trap", "amber")), 0.001),
  mc(S`Compared with $\int_0^3 2^x\,dx\approx10.099$, the 3-trapezium estimate 10.5 is:`, "too big, because 2ˣ is concave up", ["too small, because 2ˣ is concave up", "exact", "too big, because 2ˣ is decreasing"], "Chords above the curve."),
  num(S`A pond's width (m) is measured every 4 m along its length: 0, 6, 9, 7, 0. Estimate its area.`, 2 * (0 + 2 * (6 + 9 + 7) + 0), "Trapezoidal rule, h = 4.", null, 0.001),
  num(S`For $y=x^2$ on $[0,1]$ with $n$ equal strips, the upper sum is $\frac{(n+1)(2n+1)}{6n^2}$. Find it for $n=10$.`, d3(11 * 21 / 600), "11 · 21/600.", null, 0.001),
  mc(S`As $n\to\infty$, $\frac{(n+1)(2n+1)}{6n^2}$ approaches:`, S`$\frac13$`, [S`$\frac12$`, S`$0$`, S`$1$`], "Leading terms 2n²/6n² — the value of ∫₀¹x² dx."),
];

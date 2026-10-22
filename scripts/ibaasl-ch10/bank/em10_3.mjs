// 10.3 Area and Definite Integrals — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { areaDoc, stripsOf } from "../figs10.mjs";

const S = String.raw;
const trap = (f, a, b, n) => { const h = (b - a) / n; let s = (f(a) + f(b)) / 2; for (let i = 1; i < n; i++) s += f(a + i * h); return s * h; };
const q1 = (x) => x * x + 2;

export const E = [
  mc("A lower rectangle sum for a positive function gives:", "an underestimate of the area", ["an overestimate", "the exact area", "a negative value"], "Rectangles sit under the curve."),
  mc("An upper rectangle sum for a positive function gives:", "an overestimate of the area", ["an underestimate", "the exact area", "zero"], "Rectangles reach above the curve."),
  mc(S`As the number of strips increases, lower and upper sums:`, "approach the definite integral", ["move apart", "both become zero", "stay the same"], "The gap shrinks."),
  num(S`For $y=2x$ on $[0,2]$ with 2 strips of width 1, find the lower sum.`, 2, "Left heights 0, 2."),
  num(S`For $y=2x$ on $[0,2]$ with 2 strips of width 1, find the upper sum.`, 6, "Right heights 2, 4."),
  num(S`For $y=10-x$ on $[0,4]$ with 4 strips, find the lower sum.`, 30, "Decreasing: right heights 9, 8, 7, 6."),
  num(S`Use one trapezium to estimate the area under $y=x^2$ from 0 to 2.`, 4, "½ · 2 · (0 + 4)."),
  num(S`Find the area of a trapezium strip of width 2 with heights 3 and 5.`, 8, "½ · 2 · 8."),
  num(S`$\int_4^4 f(x)\,dx=$ ?`, 0, "No width."),
  num(S`If $\int_1^3 f\,dx=7$, find $\int_3^1 f\,dx$.`, -7, "Swap limits."),
  num(S`If $\int_0^2 f\,dx=3$ and $\int_2^6 f\,dx=5$, find $\int_0^6 f\,dx$.`, 8, "Add."),
  num(S`If $\int_0^5 f\,dx=6$, find $\int_0^5 4f(x)\,dx$.`, 24, "Linearity."),
  tf(S`A definite integral can be negative.`, true, "Area below the axis counts negative."),
  tf(S`A definite integral includes $+C$.`, false, "It is a number."),
  fill(S`In $\int_a^b f(x)\,dx$, $a$ and $b$ are called the ___ of integration.`, ["limits", "Limits"], "Lower and upper limits."),
  ms(S`For a concave-up curve, which are true? Select all.`, ["the trapezoidal rule overestimates", "chords lie above the curve", "the trapezoidal rule underestimates", "the trapezoidal rule is exact"], [0, 1], "Chords above ⇒ too big."),
  mc("The diagram shows rectangles under y = x² + 2. They give:", "a lower sum", ["an upper sum", "a trapezoidal estimate", "the exact integral"], "Each rectangle lies under the curve.", areaDoc({ view: { xmin: -0.5, xmax: 3.5, ymin: -1, ymax: 12 }, step: { x: 1, y: 1 }, curves: [{ f: q1 }] }, [], stripsOf(q1, 0, 3, 3, "lower"))),
  num(S`For the lower sum shown (y = x² + 2 on [0, 3], 3 strips), find its value.`, 11, "2 + 3 + 6."),
  mc("The shaded region lies below the x-axis. Its definite integral is:", "negative", ["positive", "zero", "undefined"], "Heights are negative.", areaDoc({ view: { xmin: -0.5, xmax: 3.5, ymin: -3, ymax: 1 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 3 * x }] }, [{ f: (x) => x * x - 3 * x, a: 0, b: 3, color: "red" }])),
  mc(S`The trapezoidal rule with $n$ strips uses which formula?`, S`$\frac h2[y_0+2(y_1+\dots+y_{n-1})+y_n]$`, [S`$h[y_0+y_1+\dots+y_n]$`, S`$\frac h2[y_0+y_n]$`, S`$2h[y_0+\dots+y_n]$`], "Ends once, middles twice."),
];

export const M = [
  num(S`Estimate $\int_0^2 x^3\,dx$ with 4 trapezia.`, trap((x) => x ** 3, 0, 2, 4), "h = 0.5; y: 0, 0.125, 1, 3.375, 8.", null, 0.001),
  num(S`Estimate $\int_1^5\frac{1}{x}\,dx$ with 4 trapezia (3 d.p.).`, Math.round(trap((x) => 1 / x, 1, 5, 4) * 1000) / 1000, "h = 1.", null, 0.001),
  num(S`For $y=\sqrt x$ on $[0,4]$ with 4 strips, find the upper sum (3 d.p.).`, Math.round((1 + Math.SQRT2 + Math.sqrt(3) + 2) * 1000) / 1000, "Right heights.", null, 0.001),
  num(S`For $y=\sqrt x$ on $[0,4]$ with 4 strips, find the lower sum (3 d.p.).`, Math.round((0 + 1 + Math.SQRT2 + Math.sqrt(3)) * 1000) / 1000, "Left heights.", null, 0.001),
  num(S`Use the trapezoidal rule: $x$: 0, 3, 6, 9; $y$: 4, 6, 5, 2.`, 1.5 * (4 + 2 * (6 + 5) + 2), "h = 3.", null, 0.001),
  num(S`$\int_0^4 f\,dx=10$ and $\int_0^4 g\,dx=3$. Find $\int_0^4(f-2g)\,dx$.`, 4, "10 − 6."),
  num(S`$\int_1^6 f\,dx=12$. Find $\int_1^6(f(x)+1)\,dx$.`, 17, "12 + 5."),
  num(S`$\int_0^7 f\,dx=15$ and $\int_3^7 f\,dx=9$. Find $\int_0^3 f\,dx$.`, 6, "15 − 9."),
  num(S`$\int_2^5 f\,dx=4$. Find $\int_5^2 3f(x)\,dx$.`, -12, "−3 × 4."),
  mc(S`For $\int_0^3(9-x^2)\,dx$, the trapezoidal rule gives:`, "an underestimate", ["an overestimate", "the exact value", "a negative value"], "Concave down."),
  tf(S`For an increasing function, the lower sum uses the left end of each strip.`, true, "The smaller height is on the left."),
  tf(S`$\int_0^2 f\,dx=4$ means the area under $f$ from 0 to 2 is always 4.`, false, "Only if f ≥ 0 there."),
  mc("The trapezia shown estimate the area under y = 6/x from 1 to 3. The estimate is:", "too big", ["too small", "exact", "negative"], "6/x is concave up.", areaDoc({ view: { xmin: 0, xmax: 3.5, ymin: -0.5, ymax: 7 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => 6 / x, a: 0.85, b: 3.5 }] }, [], stripsOf((x) => 6 / x, 1, 3, 2, "trap", "amber"))),
  num(S`Find the two-trapezium estimate shown (y = 6/x on [1, 3]).`, 7, "h = 1: ½[6 + 2(3) + 2] = 7.", null, 0.001),
  ms(S`Which are true for all $f$? Select all.`, [S`$\int_a^bf\,dx=-\int_b^af\,dx$`, S`$\int_a^bkf\,dx=k\int_a^bf\,dx$`, S`$\int_a^bf^2\,dx=\left(\int_a^bf\,dx\right)^2$`, S`$\int_a^af\,dx=0$`], [0, 1, 3], "Squares do not pass through integrals."),
  num(S`Use a GDC to evaluate $\int_0^1\sqrt{1+x^2}\,dx$ (3 d.p.).`, 1.148, "Technology.", null, 0.001),
  num(S`Use a GDC to evaluate $\int_1^2 xe^{-x}\,dx$ (3 d.p.).`, Math.round((2 / Math.E - 3 / Math.E ** 2) * 1000) / 1000, "Technology.", null, 0.001),
  mc("The shaded areas above and below the axis are equal. The definite integral over the whole interval is:", "0", ["twice the shaded area", "the shaded area", "negative"], "Signed areas cancel.", areaDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: -3, ymax: 3 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x * x / 2 - x }] }, [{ f: (x) => x ** 3 / 2 - x, a: -Math.SQRT2, b: 0, color: "green" }, { f: (x) => x ** 3 / 2 - x, a: 0, b: Math.SQRT2, color: "red" }])),
  num(S`$\int_0^3 f\,dx=-2$ and $\int_3^5 f\,dx=6$, where $f<0$ on $(0,3)$ and $f>0$ on $(3,5)$. Find the total area from 0 to 5.`, 8, "2 + 6."),
  num(S`$\int_0^3 f\,dx=-2$ and $\int_3^5 f\,dx=6$. Find $\int_0^5 f\,dx$.`, 4, "−2 + 6."),
];

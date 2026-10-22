// 10.4 The Fundamental Theorem of Calculus — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { areaDoc } from "../figs10.mjs";

const S = String.raw;
const d3 = (v) => Math.round(v * 1000) / 1000;

export const E = [
  num(S`Evaluate $\int_0^1 4x^3\,dx$.`, 1, "[x⁴]₀¹."),
  num(S`Evaluate $\int_0^2 3x^2\,dx$.`, 8, "[x³]₀²."),
  num(S`Evaluate $\int_2^4 2x\,dx$.`, 12, "[x²]₂⁴ = 16 − 4."),
  num(S`Evaluate $\int_0^5 4\,dx$.`, 20, "[4x]₀⁵."),
  num(S`Evaluate $\int_1^2(x+1)\,dx$.`, 2.5, "[½x² + x]₁².", null, 0.001),
  num(S`Evaluate $\int_0^3(x^2+x)\,dx$.`, 13.5, "9 + 4.5.", null, 0.001),
  num(S`Evaluate $\int_0^1 e^x\,dx$ (3 d.p.).`, d3(Math.E - 1), "e − 1.", null, 0.001),
  num(S`Evaluate $\int_1^{e}\frac1x\,dx$.`, 1, "ln e − ln 1."),
  num(S`Evaluate $\int_1^4\frac{1}{2\sqrt x}\,dx$.`, 1, "[√x]₁⁴ = 2 − 1."),
  mc(S`$\int_a^bf(x)\,dx=$`, S`$F(b)-F(a)$`, [S`$F(a)-F(b)$`, S`$F(b)+F(a)$`, S`$f(b)-f(a)$`], "Upper minus lower."),
  mc(S`In $\left[x^3\right]_1^2$, the value is:`, "7", ["9", "1", "8"], "8 − 1."),
  tf(S`When evaluating a definite integral, the constant $C$ can be omitted.`, true, "It cancels."),
  tf(S`$\int_0^2(x-2)\,dx$ is positive.`, false, "x − 2 < 0 on (0, 2): −2."),
  fill(S`If $f(x)\le0$ on $[a,b]$, the area between $f$ and the x-axis is $-\int_a^b f\,dx$ or $\left|\int_a^b f\,dx\right|$, which is always ___.`, ["positive", "Positive", "non-negative"], "Areas are positive."),
  ms(S`Which equal 0? Select all.`, [S`$\int_3^3 x^2\,dx$`, S`$\int_{-1}^1 x\,dx$`, S`$\int_0^1 x\,dx$`, S`$\int_{-2}^2 x^3\,dx$`], [0, 1, 3], "Odd functions on symmetric intervals."),
  mc("The shaded area under y = 2x + 1 from 0 to 2 is:", "6", ["5", "4", "8"], "[x² + x]₀².", areaDoc({ view: { xmin: -0.5, xmax: 2.5, ymin: -0.5, ymax: 6 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => 2 * x + 1 }] }, [{ f: (x) => 2 * x + 1, a: 0, b: 2 }])),
  mc("The shaded region under y = x² from 1 to 2 has area:", S`$\frac73$`, [S`$\frac83$`, S`$3$`, S`$\frac13$`], "8/3 − 1/3.", areaDoc({ view: { xmin: -0.5, xmax: 2.5, ymin: -0.5, ymax: 5 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => x * x }] }, [{ f: (x) => x * x, a: 1, b: 2 }])),
  num(S`Evaluate $\int_0^2(6-3x)\,dx$.`, 6, "[6x − 1.5x²]₀² = 12 − 6."),
  num(S`Evaluate $\int_{-1}^{1}3x^2\,dx$.`, 2, "1 − (−1)."),
  num(S`Evaluate $\int_0^{\ln 2}e^{x}\,dx$.`, 1, "2 − 1."),
];

export const M = [
  num(S`Evaluate $\int_4^9\frac{3}{2}\sqrt x\,dx$.`, 19, "[x^(3/2)]₄⁹ = 27 − 8."),
  num(S`Evaluate $\int_1^2\frac{4}{x^2}\,dx$.`, 2, "[−4/x]₁² = −2 + 4."),
  num(S`Evaluate $\int_0^1 e^{3x}\,dx$ (3 d.p.).`, d3((Math.exp(3) - 1) / 3), "[⅓e^(3x)].", null, 0.001),
  num(S`Evaluate $\int_0^2\frac{1}{x+1}\,dx$ (3 d.p.).`, d3(Math.log(3)), "ln 3.", null, 0.001),
  num(S`Evaluate $\int_0^1(2x+1)^2\,dx$ (3 d.p.).`, d3(26 / 6), "[(2x + 1)³/6]₀¹ = 27/6 − 1/6.", null, 0.001),
  num(S`Evaluate $\int_{-2}^{0}(x^2-1)\,dx$ (3 d.p.).`, d3(8 / 3 - 2), "[x³/3 − x]₋₂⁰ = 0 − (−8/3 + 2).", null, 0.001),
  num(S`Find the area enclosed by $y=x^2-4x$ and the x-axis (3 d.p.).`, d3(32 / 3), "|∫₀⁴|.", null, 0.001),
  num(S`Find the area enclosed by $y=5x-x^2$ and the x-axis (3 d.p.).`, d3(125 / 6), "∫₀⁵.", null, 0.001),
  num(S`Find the area under $y=e^{-x}$ from 0 to 3 (3 d.p.).`, d3(1 - Math.exp(-3)), "1 − e⁻³.", null, 0.001),
  num(S`Find the area under $y=\frac{3}{x}$ from 1 to 5 (3 d.p.).`, d3(3 * Math.log(5)), "3 ln 5.", null, 0.001),
  num(S`Find $k>0$ such that $\int_0^k 2x\,dx=25$.`, 5, "k² = 25."),
  num(S`Find $k>1$ such that $\int_1^k\frac{2}{x}\,dx=4$ (3 d.p.).`, d3(Math.exp(2)), "2 ln k = 4.", null, 0.001),
  tf(S`$\int_0^4(x^2-4x)\,dx$ equals the area between the curve and the x-axis on $[0,4]$.`, false, "It equals minus the area."),
  mc(S`To find the total area between $y=x^2-1$ and the x-axis on $[0,2]$, you should:`, "split at x = 1 and add the absolute values", ["integrate from 0 to 2 directly", "double the integral from 0 to 1", "integrate from −1 to 1"], "The curve crosses at x = 1."),
  num(S`Find the total area between $y=x^2-1$ and the x-axis on $[0,2]$.`, 2, "2/3 + 4/3."),
  ms(S`Which are positive? Select all.`, [S`$\int_1^2\ln x\,dx$`, S`$\int_0^1(x-1)\,dx$`, S`$\int_{-1}^0 e^x\,dx$`, S`$\int_0^{\pi}(-1)\,dx$`], [0, 2], "Signs of the integrands."),
  mc("The shaded region between y = x² − 2x and the x-axis has area:", S`$\frac43$`, [S`$-\frac43$`, S`$\frac83$`, S`$\frac23$`], "|∫₀² (x² − 2x) dx|.", areaDoc({ view: { xmin: -0.5, xmax: 2.5, ymin: -1.5, ymax: 1.5 }, step: { x: 0.5, y: 0.5 }, curves: [{ f: (x) => x * x - 2 * x }] }, [{ f: (x) => x * x - 2 * x, a: 0, b: 2, color: "red" }])),
  mc("The shaded area under y = 1/x from 2 to 6 equals:", S`$\ln3$`, [S`$\ln4$`, S`$\frac13$`, S`$\ln 12$`], "ln 6 − ln 2.", areaDoc({ view: { xmin: 0, xmax: 7, ymin: -0.2, ymax: 1 }, step: { x: 1, y: 0.25 }, curves: [{ f: (x) => 1 / x, a: 1, b: 7 }] }, [{ f: (x) => 1 / x, a: 2, b: 6 }])),
  num(S`Given $\int_0^3(x^2+k)\,dx=15$, find $k$.`, 2, "9 + 3k = 15."),
  num(S`Evaluate $\int_1^9\left(\sqrt x-\frac{1}{\sqrt x}\right)dx$ (3 d.p.).`, d3(52 / 3 - 4), "[⅔x^(3/2) − 2√x]₁⁹ = (18 − 6) − (⅔ − 2).", null, 0.001),
];

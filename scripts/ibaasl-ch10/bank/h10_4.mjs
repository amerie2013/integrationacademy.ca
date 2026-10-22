// 10.4 The Fundamental Theorem of Calculus — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { areaDoc } from "../figs10.mjs";

const S = String.raw;
const d3 = (v) => Math.round(v * 1000) / 1000;

export const TOPIC = "10.4 The Fundamental Theorem of Calculus";
export const Q = [
  num(S`Find the total area between $y=x^3-x^2-2x$ and the x-axis from $x=-1$ to $x=2$ (3 d.p.).`, d3(5 / 12 + 8 / 3), "Roots −1, 0, 2: 5/12 + 8/3.", areaDoc({ view: { xmin: -1.5, xmax: 2.5, ymin: -3, ymax: 1.5 }, step: { x: 0.5, y: 0.5 }, curves: [{ f: (x) => x ** 3 - x * x - 2 * x }] }, [{ f: (x) => x ** 3 - x * x - 2 * x, a: -1, b: 0, color: "green" }, { f: (x) => x ** 3 - x * x - 2 * x, a: 0, b: 2, color: "red" }]), 0.001),
  num(S`For the same curve, evaluate $\int_{-1}^2(x^3-x^2-2x)\,dx$ (3 d.p.).`, d3(5 / 12 - 8 / 3), "Signed: 5/12 − 8/3.", null, 0.001),
  num(S`Find $k>0$ such that $\int_0^k(4-2x)\,dx=3$. Give the smaller value.`, 1, "4k − k² = 3 ⇒ k = 1 or 3."),
  num(S`Find $a>0$ such that the area under $y=e^{x}$ from 0 to $a$ is 9 (3 d.p.).`, d3(Math.log(10)), "eᵃ − 1 = 9.", null, 0.001),
  num(S`Find $k$ such that $\int_1^k\frac{1}{x}\,dx=\int_1^4\frac{1}{x}\,dx+\int_1^5\frac{1}{x}\,dx$.`, 20, "ln k = ln 4 + ln 5."),
  num(S`Given $\int_1^2(ax^2+bx)\,dx=11$ and $\int_0^1(ax^2+bx)\,dx=1$, find $a$.`, 6, "7a/3 + 3b/2 = 11 and a/3 + b/2 = 1 ⇒ a = 6, b = −2."),
  num(S`Find the area enclosed by $y=x(x-3)^2$ and the x-axis (3 d.p.).`, d3(27 / 4), "∫₀³ (x³ − 6x² + 9x) dx = 81/4 − 54 + 81/2.", areaDoc({ view: { xmin: -0.5, xmax: 4, ymin: -1, ymax: 5 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => x * (x - 3) ** 2 }] }, [{ f: (x) => x * (x - 3) ** 2, a: 0, b: 3 }]), 0.001),
  num(S`Evaluate $\int_0^{\ln 3}(e^{x}+e^{-x})\,dx$ (3 d.p.).`, d3(3 - 1 / 3), "[eˣ − e⁻ˣ].", null, 0.001),
  num(S`Evaluate $\int_1^{e^2}\frac{3}{x}\,dx$.`, 6, "3 ln e²."),
  num(S`Evaluate $\int_0^4\frac{1}{\sqrt{2x+1}}\,dx$.`, 2, "[√(2x + 1)]₀⁴ = 3 − 1."),
  mc("For y = 3 − x on [0, 5], the shaded areas are 4.5 (above) and 2 (below). The definite integral over [0, 5] is:", "2.5", ["6.5", "−2.5", "4.5"], "4.5 − 2.", areaDoc({ view: { xmin: -0.5, xmax: 5.5, ymin: -3, ymax: 4 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 3 - x }] }, [{ f: (x) => 3 - x, a: 0, b: 3, color: "green" }, { f: (x) => 3 - x, a: 3, b: 5, color: "red" }])),
  ms(S`Which are correct for $f(x)=x^2-9$? Select all.`, [S`$\int_0^3f\,dx=-18$`, S`the area on $[0,3]$ is 18`, S`$\int_{-3}^3f\,dx=-36$`, S`$\int_0^3f\,dx=18$`], [0, 1, 2], "f < 0 on (−3, 3)."),
  tf(S`If $\int_a^b f\,dx=0$ then $f(x)=0$ for all $x$ in $[a,b]$.`, false, "Areas above and below can cancel."),
  num(S`Find $p>0$ such that the area enclosed by $y=p^2-x^2$ and the x-axis is 36.`, 3, "4p³/3 = 36 ⇒ p³ = 27."),
  num(S`$F(x)=\int_0^x(3t^2+1)\,dt$. Find $F(2)$.`, 10, "[t³ + t]₀²."),
  mc("The shaded area under y = 3/(x + 2) from 0 to k is 3 ln 2. Find k.", "2", ["4", "1", "6"], "3 ln((k + 2)/2) = 3 ln 2.", areaDoc({ view: { xmin: -0.5, xmax: 5, ymin: -0.2, ymax: 2 }, step: { x: 1, y: 0.5 }, curves: [{ f: (x) => 3 / (x + 2), a: -0.5, b: 5 }] }, [{ f: (x) => 3 / (x + 2), a: 0, b: 2 }])),
  num(S`Evaluate $\int_{-1}^{2}|x|\,dx$.`, 2.5, "½ + 2.", null, 0.001),
  num(S`Find the area enclosed by $y=x^3$, the x-axis and $x=-2$ (between $x=-2$ and $0$).`, 4, "|[x⁴/4]₋₂⁰|."),
  mc("For y = 9 − 3x on [0, 5], the shaded green and red areas are:", "13.5 and 6", ["13.5 and 7.5", "9 and 6", "18 and 3"], "Root at 3: ∫₀³ = 13.5, ∫₃⁵ = −6.", areaDoc({ view: { xmin: -0.5, xmax: 5.5, ymin: -7, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 9 - 3 * x }] }, [{ f: (x) => 9 - 3 * x, a: 0, b: 3, color: "green" }, { f: (x) => 9 - 3 * x, a: 3, b: 5, color: "red" }])),
  num(S`Find $b>1$ such that $\int_1^b(2x-2)\,dx=9$.`, 4, "(b − 1)² = 9."),
];

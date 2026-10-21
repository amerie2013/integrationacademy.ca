// 5.1 Limits and Convergence — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const O = (x, y) => ({ x, y, color: "violet", open: true });

export const TOPIC = "5.1 Limits and Convergence";
export const Q = [
  num(S`Find $k$ so that $\lim_{x\to-1}\frac{x^2+kx-4}{x+1}$ exists.`, -3, "1 − k − 4 = 0."),
  num(S`For that $k$, find $\lim_{x\to-1}\frac{x^2+kx-4}{x+1}$.`, -5, "x² − 3x − 4 = (x + 1)(x − 4); limit −1 − 4."),
  num(S`Find $\lim_{x\to4}\frac{\sqrt x-2}{x-4}$.`, 0.25, "1/(√x + 2).", null, 1e-9),
  num(S`Find $\lim_{x\to1}\frac{x^4-1}{x-1}$.`, 4, "(x − 1)(x + 1)(x² + 1)/(x − 1)."),
  num(S`Find $\lim_{x\to\infty}\frac{6x^3-x}{2x^3+5x^2}$.`, 3, "6/2."),
  num(S`For $f(x)=2x^2-x$, find $\lim_{h\to0}\frac{f(3+h)-f(3)}{h}$.`, 11, "(12h + 2h² − h)/h = 11 + 2h."),
  num(S`For $f(x)=\frac1x$, find $\lim_{h\to0}\frac{f(2+h)-f(2)}{h}$.`, -0.25, "−h/(2h(2 + h)) = −1/(2(2 + h)).", null, 1e-9),
  num("The graph of f is shown. Find lim f(x) as x → 1 plus f(1).", 5, "Limit 2 (open circle) and f(1) = 3 (filled point).", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 5 }, curves: [{ f: (x) => 3 - (x - 1) ** 2 - 1, a: -2, b: 0.97 }, { f: (x) => 3 - (x - 1) ** 2 - 1, a: 1.03, b: 4 }], points: [O(1, 2), { x: 1, y: 3, color: "red" }] })),
  mc("For the function shown, which statement is true?", "the limit at x = 2 does not exist", ["the limit at x = 2 is 1", "the limit at x = 2 is 3", "f is continuous at x = 2"], "The left limit is 1 and the right limit is 3.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x - 1, a: -1, b: 1.98 }, { f: (x) => x + 1, a: 2.02, b: 4 }], points: [O(2, 1), { x: 2, y: 3, color: "red" }] })),
  num(S`The partial sums of $\sum_{k=1}^{\infty}6\left(\frac23\right)^{k-1}$ converge. Find the limit.`, 18, "6/(1 − 2/3)."),
  num(S`$u_n=\frac{3n^2+n}{n^2+4}$. Find $\lim_{n\to\infty}u_n$.`, 3, "Divide by n²."),
  tf(S`If $\lim_{x\to a}f(x)=L$, then $f(a)=L$.`, false, "f(a) may differ or not exist (a hole or a moved point)."),
  ms(S`Which limits equal 0? Select all.`, [S`$\lim_{x\to\infty}\frac{x}{x^2+1}$`, S`$\lim_{n\to\infty}(-0.4)^n$`, S`$\lim_{x\to0}\frac{x^2+x}{x}$`, S`$\lim_{x\to\infty}\frac{2x}{x+1}$`], [0, 1], "(x² + x)/x → 1; 2x/(x + 1) → 2."),
  num(S`Find $a$ if $\lim_{x\to\infty}\frac{ax+3}{4x-1}=5$.`, 20, "a/4 = 5."),
  num("The partial sums S_n of a geometric series are plotted. They approach the dashed line. If the first term is 12, find the common ratio.", 0.25, "S∞ = 16 = 12/(1 − r).", planeDoc({ view: { xmin: 0, xmax: 8, ymin: -1, ymax: 18 }, lines: [{ m: 0, b: 16, color: "red", dash: true }], points: [1, 2, 3, 4, 5, 6, 7].map((n) => ({ x: n, y: 16 * (1 - 0.25 ** n), color: "green" })), step: { x: 1, y: 2 } }), 1e-9),
  num(S`Find $\lim_{x\to0}\frac{\sqrt{1+x}-1}{x}$.`, 0.5, "Multiply by the conjugate: 1/(√(1 + x) + 1).", null, 1e-9),
  num(S`$f(x)=\frac{x^2-ax}{x-3}$ has a hole (removable gap) at $x=3$. Find $a$.`, 3, "x(x − a)/(x − 3) needs a = 3."),
  num(S`A sequence has $u_{n+1}=\frac12u_n+3$. If it converges, find the limit.`, 6, "L = L/2 + 3."),
  num("The secant gradients from x = 2 to x = 2 + h on y = x³ approach a value as h → 0 (shown). Find it.", 12, "(12h + 6h² + h³)/h → 12.", planeDoc({ view: { xmin: 0, xmax: 3.2, ymin: -2, ymax: 30 }, curves: [{ f: (x) => x ** 3 }, { f: (x) => 12 * (x - 2) + 8, color: "red" }], points: [{ x: 2, y: 8, color: "blue", label: "(2, 8)" }], step: { x: 0.5, y: 4 } })),
  num(S`Find $\lim_{x\to-3}\frac{x^3+27}{x+3}$.`, 27, "(x + 3)(x² − 3x + 9)/(x + 3); 9 + 9 + 9."),
];

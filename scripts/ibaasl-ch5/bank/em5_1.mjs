// 5.1 Limits and Convergence — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const O = (x, y) => ({ x, y, color: "violet", open: true });

export const E = [
  num(S`Find $\lim_{x\to4}(3x+2)$.`, 14, "Substitute: 12 + 2."),
  num(S`Find $\lim_{x\to-2}(x^2-x)$.`, 6, "4 + 2."),
  num(S`Find $\lim_{x\to1}(x^3+2x^2)$.`, 3, "1 + 2."),
  num(S`Find $\lim_{x\to\infty}\frac{5}{x}$.`, 0, "5/x → 0."),
  num(S`Find $\lim_{x\to\infty}\left(2+\frac1x\right)$.`, 2, "1/x → 0."),
  num(S`Find $\lim_{x\to7}\frac{x^2-49}{x-7}$.`, 14, "x + 7."),
  num(S`Find $\lim_{x\to-1}\frac{x^2-1}{x+1}$.`, -2, "x − 1."),
  num(S`Find $\lim_{n\to\infty}\frac{1}{n}$.`, 0, "The terms shrink to 0."),
  num(S`Find $\lim_{n\to\infty}\left(5-\frac{2}{n}\right)$.`, 5, "2/n → 0."),
  tf(S`$\lim_{x\to a}f(x)$ can exist even if $f(a)$ is not defined.`, true, "e.g. a hole in the graph."),
  tf(S`The sequence $u_n=(-1)^n$ converges.`, false, "It alternates between −1 and 1."),
  mc(S`Substituting $x=4$ into $\frac{x^2-16}{x-4}$ gives:`, S`$\frac00$, so simplify first`, ["0", "the limit 0", "∞"], "0/0 is indeterminate."),
  fill(S`A sequence whose terms approach a fixed number is called ___.`, ["convergent", "Convergent"], "Otherwise it diverges."),
  num("From the graph, find the limit of f(x) as x → 2.", 3, "The curve approaches the open circle at (2, 3).", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x + 1, a: -1, b: 1.97 }, { f: (x) => x + 1, a: 2.03, b: 5 }], points: [O(2, 3)] })),
  num("The graph shows y = f(x) with a hole and a separate point at x = 1. Find f(1).", 4, "The filled point is (1, 4).", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x, a: -2, b: 0.97 }, { f: (x) => x * x, a: 1.03, b: 2.4 }], points: [O(1, 1), { x: 1, y: 4, color: "red" }] })),
  num(S`Find $\lim_{x\to0}\frac{x^2+3x}{x}$.`, 3, "x + 3."),
  num(S`Find $\lim_{x\to\infty}\frac{x+1}{x}$.`, 1, "1 + 1/x."),
  mc(S`The limit of a geometric sequence $u_n=ar^{n}$ with $|r|<1$ is:`, "0", ["a", "1", "r"], "rⁿ → 0."),
  num(S`Find $\lim_{x\to2}\frac{3x^2}{x+1}$.`, 4, "12/3."),
  num(S`Find $\lim_{x\to5}\sqrt{x+4}$.`, 3, "√9."),
];

export const M = [
  num(S`Find $\lim_{x\to3}\frac{x^2+2x-15}{x-3}$.`, 8, "(x − 3)(x + 5)/(x − 3) = x + 5."),
  num(S`Find $\lim_{x\to-2}\frac{x^2-x-6}{x+2}$.`, -5, "x − 3."),
  num(S`Find $\lim_{x\to1}\frac{2x^2-x-1}{x-1}$.`, 3, "(2x + 1)(x − 1)/(x − 1)."),
  num(S`Find $\lim_{x\to\infty}\frac{7x-2}{2x+3}$.`, 3.5, "7/2.", null, 1e-9),
  num(S`Find $\lim_{x\to\infty}\frac{4x^2+1}{x^2-5}$.`, 4, "Divide by x²."),
  num(S`Find $\lim_{x\to\infty}\frac{3x+1}{x^2}$.`, 0, "3/x + 1/x² → 0."),
  num(S`Find $\lim_{n\to\infty}\frac{5n+2}{n+1}$.`, 5, "5/1."),
  num(S`Find $\lim_{x\to0}\frac{(x+3)^2-9}{x}$.`, 6, "(6x + x²)/x = 6 + x."),
  num(S`For $f(x)=x^2$, find $\lim_{h\to0}\frac{f(5+h)-f(5)}{h}$.`, 10, "(10h + h²)/h."),
  ms(S`Which sequences converge? Select all.`, [S`$u_n=\frac{2}{n^2}$`, S`$u_n=3n$`, S`$u_n=0.9^n$`, S`$u_n=\frac{n}{n+3}$`], [0, 2, 3], "3n grows without bound."),
  tf(S`$\lim_{x\to0}\frac{1}{x^2}$ is a finite number.`, false, "The values grow without bound."),
  num(S`Find the limit of the partial sums of $10+5+2.5+\dots$.`, 20, "a/(1 − r) = 10/0.5."),
  num(S`$f(x)=x+2$ for $x<1$ and $f(x)=4x-1$ for $x\ge1$. Find $\lim_{x\to1}f(x)$.`, 3, "Both one-sided limits are 3."),
  mc(S`$g(x)=x$ for $x<0$ and $g(x)=x+1$ for $x\ge0$. Then $\lim_{x\to0}g(x)$:`, "does not exist", ["is 0", "is 1", "is 0.5"], "Left 0, right 1."),
  num("The graph shows y = (x² − 4)/(x − 2) with a hole. Give the y-coordinate of the hole.", 4, "y = x + 2 at x = 2.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 8 }, curves: [{ f: (x) => x + 2, a: -3, b: 1.96 }, { f: (x) => x + 2, a: 2.04, b: 5 }], points: [O(2, 4)] })),
  num("The graph of y = (4x + 1)/(x − 1) is shown. What value does y approach as x → ∞?", 4, "The horizontal asymptote y = 4.", planeDoc({ view: { xmin: -4, xmax: 12, ymin: -4, ymax: 12 }, curves: [{ f: (x) => (4 * x + 1) / (x - 1), a: -4, b: 0.6 }, { f: (x) => (4 * x + 1) / (x - 1), a: 1.4, b: 12 }], lines: [{ m: 0, b: 4, color: "red", dash: true }] })),
  num(S`For which value of $k$ does $\lim_{x\to2}\frac{x^2-k}{x-2}$ exist?`, 4, "The numerator must be 0 at x = 2."),
  num(S`Find $\lim_{x\to9}\frac{x-9}{\sqrt x-3}$.`, 6, "x − 9 = (√x − 3)(√x + 3)."),
  num(S`Find $\lim_{h\to0}\frac{(2+h)^3-8}{h}$.`, 12, "(12h + 6h² + h³)/h."),
  num(S`$u_n=\frac{2n-1}{n}$. Find the least $n$ for which $|u_n-2|<0.05$.`, 21, "1/n < 0.05 → n > 20."),
];

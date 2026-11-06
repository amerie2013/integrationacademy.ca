// 8.2 Products and Quotients of Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const TOPIC = "8.2 Products and Quotients of Functions";
export const Q = [
  num(S`A wave $d(t)=15(0.75)^t\cos(\pi t)$. When does its envelope first fall below $1$? (two decimals)`, L(1 / 15) / L(0.75), "0.75ᵗ = 1/15.", null, 0.01),
  num(S`For $d(t)=15(0.75)^t\cos(\pi t)$, find $d(3)$ (two decimals).`, -15 * 0.75 ** 3, "cos 3π = −1.", null, 0.01),
  num(S`Find the minimum value of $y=x\cdot2^x$ (two decimals).`, -1 / (Math.E * Math.LN2), "Minimum near x ≈ −1.44.", null, 0.01),
  num(S`How many intervals of $x$ make $\dfrac{(x-1)(x+2)}{(x-3)}>0$?`, 2, "Positive on −2 < x < 1 and x > 3."),
  num(S`$f(x)=x^2-9$ and $g(x)=x^2-x-6$. Find the $y$-coordinate of the hole in $\frac fg$.`, 1.2, "(x + 3)/(x + 2) at x = 3: 6/5.", null, 0.001),
  num(S`$\left(\frac fg\right)(x)=\dfrac{x^2-9}{x^2-x-6}$ has one vertical asymptote $x=a$. Find $a$.`, -2, "After cancelling (x − 3), the denominator is x + 2."),
  num(S`How many zeros does $y=x^2\cos x$ have on $-2\pi\le x\le2\pi$?`, 5, "x = 0 and cos x = 0 at ±π/2, ±3π/2."),
  num(S`Solve $(x-2)\cdot3^x=0$.`, 2, "3ˣ is never 0."),
  mc(S`$h(x)=\dfrac{\sin x}{x}$ is…`, "even, and not defined at x = 0", ["odd", "even and defined at 0", "neither"], "odd ÷ odd = even."),
  mc(S`Which describes $y=\dfrac{x^2+1}{x-1}$ near $x=1$?`, "a vertical asymptote", ["a hole", "a zero", "nothing special"], "The numerator is 2 ≠ 0 there."),
  mc(S`A spring: $d(t)=a\,b^t\cos(kt)$ with $0<b<1$. Doubling $a$…`, "doubles every displacement", ["doubles the period", "halves the decay", "changes nothing"], "a scales the whole product."),
  ms(S`Select every true statement about $y=\dfrac{x-2}{x^2-4}$.`, ["it has a hole at x = 2", "it has a vertical asymptote x = −2", "it has no zeros", "it is even"], [0, 1, 2], "It simplifies to 1/(x + 2), x ≠ 2."),
  tf(S`If $f$ and $g$ are both positive and increasing, then $fg$ is increasing.`, true, "Both factors grow and stay positive."),
  tf(S`If $f$ and $g$ are increasing, then $fg$ must be increasing.`, false, "f(x) = g(x) = x gives x², which decreases for x < 0."),
  num(S`A product $P(x)=(x-1)(5-x)$ models profit (thousands). Find its maximum.`, 4, "Vertex at x = 3: 2 × 2."),
  num(S`For the drug model $C(t)=8t(0.5)^t$, find $C(2)$.`, 4, "16 × 0.25."),
  mc("The graph shows y = x² sin x. Which statement is true?", "it is symmetric about the origin", ["it is symmetric about the y-axis", "it is periodic", "it has no zeros except 0"], "even × odd = odd.", planeDoc({ view: { xmin: -7, xmax: 7, ymin: -25, ymax: 25 }, curves: [{ f: (x) => x * x * Math.sin(x), color: "violet" }], step: { x: 1, y: 5 } })),
  mc("The graph shows y = (x² − 1)/(x − 2). Where is it positive?", "−1 < x < 1 or x > 2", ["x < −1 or 1 < x < 2", "x > 2 only", "−1 < x < 2"], "Sign chart with −1, 1, 2.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -10, ymax: 12 }, curves: [{ f: (x) => (x * x - 1) / (x - 2), b: 1.9, color: "violet" }, { f: (x) => (x * x - 1) / (x - 2), a: 2.1, color: "violet" }], step: { x: 1, y: 2 } })),
  mc("The graph shows a damped wave with envelope 10(0.6)ᵗ. Estimate when the envelope reaches 1.", "about 4.5", ["about 1.7", "about 10", "about 6"], "t = log 0.1 / log 0.6 ≈ 4.51.", planeDoc({ view: { xmin: -0.2, xmax: 8, ymin: -10.5, ymax: 10.5 }, curves: [{ f: (t) => 10 * 0.6 ** t, a: 0, color: "gray" }, { f: (t) => 10 * 0.6 ** t * Math.cos(2 * Math.PI * t), a: 0, color: "violet" }], lines: [{ m: 0, b: 1, color: "blue", dash: true }], step: { x: 1, y: 2 } })),
  mc("The graph shows y = x·2ˣ. About where is its lowest point?", "x ≈ −1.4", ["x = 0", "x ≈ −3", "it has no lowest point"], "Table: y(−1.4) ≈ −0.53 is the least value.", planeDoc({ view: { xmin: -5, xmax: 1.5, ymin: -1, ymax: 2 }, curves: [{ f: (x) => x * 2 ** x, color: "violet" }], step: { x: 0.5, y: 0.5 } })),
];

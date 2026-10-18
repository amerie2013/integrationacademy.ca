// 1.2 Function Notation — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

const V6 = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };

export const TOPIC = "1.2 Function Notation";
export const Q = [
  mx(String.raw`$f(x)=x^2+2x$. Simplify $f(x+3)-f(x)$.`, "6*x+15", "x² + 6x + 9 + 2x + 6 − x² − 2x."),
  num(String.raw`$f(x)=ax^2+bx$ with $f(1)=1$ and $f(2)=8$. Find $f(3)$.`, 21, "a + b = 1, 4a + 2b = 8 → a = 3, b = −2; 27 − 6."),
  num(String.raw`$f(x)=x^2-10x+c$ has a minimum value of 4. Find $c$.`, 29, "(x − 5)² + c − 25: c − 25 = 4."),
  num(String.raw`$f(x)=2x-1$. Solve $f(f(x))=9$.`, 3, "f(f(x)) = 4x − 3."),
  num(String.raw`$f(x)=x^2$, $g(x)=x+k$ with $k>0$, and $f(g(2))=49$. Find $k$.`, 5, "(2 + k)² = 49."),
  num("The graph shows y = f(x). Find f(f(0)).", 0, "f(0) = 1, then f(1) = 0.", graph((x) => Math.abs(x - 2) - 1, V6, [P(0, 1), P(1, 0)])),
  num("The graph shows y = x² − 2 and y = x. What is the larger solution of f(x) = x?", 2, "x² − x − 2 = 0 → x = 2 or −1.", graph((x) => x * x - 2, V6, [P(2, 2), P(-1, -1)], { lines: [{ m: 1, b: 0, color: "gray", dash: true }] })),
  tf(String.raw`If $f(x)=3x+2$, then $f(x+h)-f(x)=3h$ for every $h$.`, true, "3(x + h) + 2 − 3x − 2."),
  num(String.raw`$f(x)=x^2-4x+1$. Find $f(2+h)-f(2-h)$.`, 0, "The parabola is symmetric about x = 2."),
  num(String.raw`$f(n)=n^2+n$. Find $n>0$ with $f(n)=132$.`, 11, "n² + n − 132 = (n + 12)(n − 11)."),
  ms("The graph shows f(x) = (x + 1)(x − 3). Which are true? Select all.", [String.raw`$f(-1)=0$`, String.raw`$f(1)=-4$`, String.raw`$f(x)=5$ has two solutions`, String.raw`$f(0)=3$`], [0, 1, 2], "f(0) = −3; f(x) = 5 → x² − 2x − 8 = 0.", graph((x) => (x + 1) * (x - 3), { xmin: -3, xmax: 5, ymin: -5, ymax: 7 }, [P(-1, 0), P(3, 0), P(1, -4)])),
  num(String.raw`A taxi fare is $C(d)=a+bd$ with $C(4)=13$ and $C(10)=25$. Find $C(18)$.`, 41, "b = 2, a = 5."),
  num(String.raw`$f(x)=x^2-6x$. One solution of $f(x)=f(1)$ is $x=1$. Find the other.`, 5, "x² − 6x + 5 = 0."),
  num(String.raw`How many real x satisfy $f(x)=1$ for $f(x)=(x-3)^2+2$?`, 0, "The minimum value is 2."),
  mc(String.raw`For $f(x)=x^2$, which expression equals $f(x+h)-f(x)$?`, String.raw`$2xh+h^2$`, [String.raw`$h^2$`, String.raw`$2x+h$`, String.raw`$x^2+h^2$`], "(x + h)² − x²."),
  num(String.raw`$f(x)=\frac{x}{x+1}$. Find $f(3)$.`, 0.75, "3 ÷ 4.", null, 0.001),
  num("A ball's height (graph) is h(t) = −5t² + 15t + 2 m. Find h(1.5).", 13.25, "−11.25 + 22.5 + 2.", graph((t) => -5 * t * t + 15 * t + 2, { xmin: 0, xmax: 4, ymin: 0, ymax: 16 }, [P(1.5, 13.25)], { a: 0, step: { x: 0.5, y: 2 } }), 0.001),
  num(String.raw`$f(x)=x^2+bx+5$ and $f(2)=f(4)$. Find $b$.`, -6, "Equal outputs are symmetric about the axis x = 3 = −b/2."),
  mx(String.raw`$f(x)=x^2-1$. Simplify $\frac{f(x)}{x-1}$ for $x\ne1$.`, "x+1", "(x − 1)(x + 1)/(x − 1)."),
  num("The line passes through (−2, 1) and (4, 4). Solve f(x) = 5.", 6, "f(x) = x/2 + 2.", planeDoc({ view: { xmin: -4, xmax: 8, ymin: -2, ymax: 7 }, lines: [{ m: 0.5, b: 2, color: "violet" }], points: [P(-2, 1), P(4, 4)] })),
];

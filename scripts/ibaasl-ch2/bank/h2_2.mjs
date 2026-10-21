// 2.2 Function Notation — 20 hard questions
import { mc, num, tf, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const TOPIC = "2.2 Function Notation";
export const Q = [
  num(S`$f(x)=ax+b$ with $f(1)=5$ and $f(3)=11$. Find $f(10)$.`, 32, "2a = 6: a = 3, b = 2."),
  num(S`For $f(x)=x^2-2x$, solve $f(x)=f(3)$ and give the solution other than 3.`, -1, "x² − 2x − 3 = 0."),
  num(S`For $f(x)=2x+3$, solve $f(x)=x$ (the graphs of $y=f(x)$ and $y=x$ are shown).`, -3, "2x + 3 = x.", planeDoc({ view: { xmin: -5, xmax: 3, ymin: -5, ymax: 5 }, curves: [{ f: (x) => 2 * x + 3, color: "violet" }, { f: (x) => x, color: "gray" }] })),
  num(S`For $f(x)=x^2$, solve $f(x+1)=f(x)+7$.`, 3, "2x + 1 = 7."),
  num(S`$f(x)=kx^2$ and $f(3)=36$. Find $f(-1)$.`, 4, "k = 4."),
  mx(S`For $f(x)=x^2-x$, simplify $f(x+2)-f(x)$.`, "4*x+2", "(x + 2)² − (x + 2) − x² + x."),
  num(S`The graph shows $y=-x^2+4x+1$ and $y=5$. How many solutions has $f(x)=5$?`, 1, "The line touches the vertex (2, 5).", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -3, ymax: 7 }, curves: [{ f: (x) => -x * x + 4 * x + 1, color: "violet" }], lines: [{ m: 0, b: 5, color: "green", dash: true }], points: [P(2, 5)] })),
  num(S`For $f(x)=3^x$, solve $f(x)=81$.`, 4, "3⁴ = 81."),
  tf(S`$f(x)=\frac1x$ satisfies $f\left(\frac1x\right)=\frac{1}{f(x)}$ for $x\ne0$.`, true, "Both sides equal x."),
  num(S`For $f(x)=\frac{x+2}{x-3}$, solve $f(x)=-1$.`, 0.5, "x + 2 = −x + 3.", null, 1e-9),
  num(S`The graph shows a ball's height $h(t)=20t-5t^2$ m. What is its maximum height?`, 20, "The vertex is at t = 2.", planeDoc({ view: { xmin: -0.5, xmax: 5, ymin: -2, ymax: 24 }, curves: [{ f: (t) => 20 * t - 5 * t * t, a: 0, b: 4, color: "violet" }], points: [P(2, 20)], step: { x: 1, y: 4 }, xlabel: "t", ylabel: "h" })),
  num(S`For $h(t)=20t-5t^2$, find the later time at which $h(t)=15$.`, 3, "t² − 4t + 3 = 0."),
  num(S`For $f(x)=x^3+x$, find $a$ if $f(a)=10$.`, 2, "8 + 2 = 10."),
  mc(S`If $f(x+1)=3x+5$ for every $x$, then $f(x)=$`, S`$3x+2$`, [S`$3x+5$`, S`$3x+8$`, S`$3x-2$`], "Replace x by x − 1: 3(x − 1) + 5."),
  num(S`$f(x)=x^2+kx+k$ and $f(1)=7$. Find $k$.`, 3, "1 + 2k = 7."),
  num(S`The graph shows $y=(x-1)(x-3)$. For how many integers $0\le x\le4$ is $f(x)<0$?`, 1, "Only x = 2.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 4 }, curves: [{ f: (x) => (x - 1) * (x - 3), color: "violet" }], points: [P(1, 0), P(3, 0), P(2, -1)] })),
  num(S`For $f(x)=2^x+2^{-x}$, find $f(1)$.`, 2.5, "2 + 0.5.", null, 1e-9),
  num(S`For $f(x)=\frac{x}{x+1}$, find $f(2)+f(-2)$ (3 d.p.).`, 2.667, "2/3 + 2.", null, 0.001),
  tf(S`If $f(3)=7$, then $x=3$ is a solution of $f(x)=7$.`, true, "That is exactly what f(3) = 7 says."),
  num(S`An investment is worth $V(t)=1000(1.05)^t$. Find $V(0)$.`, 1000, "1.05⁰ = 1."),
];

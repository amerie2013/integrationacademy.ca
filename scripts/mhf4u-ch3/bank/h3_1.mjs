// 3.1 Reciprocal of a Linear Function — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { RG, P, planeDoc, rat } from "./fig.mjs";
const S = String.raw;

export const TOPIC = "3.1 Reciprocal of a Linear Function";
export const Q = [
  num(S`$y=\dfrac1{kx+c}$ passes through $\left(1,\tfrac12\right)$ and $\left(3,\tfrac14\right)$. Find $k$.`, 1, "k + c = 2 and 3k + c = 4, so k = 1."),
  num(S`$y=\dfrac1{kx+c}$ passes through $\left(2,1\right)$ and $\left(5,-\tfrac12\right)$. Find the x-value of its vertical asymptote.`, 3, "2k + c = 1, 5k + c = −2: k = −1, c = 3, so −x + 3 = 0."),
  mc(S`Solve $\dfrac1{x-6}>2$.`, S`$6\lt x\lt6.5$`, [S`$x\lt6.5$`, S`$x>6.5$`, S`$x>6$`], "x − 6 must lie between 0 and 1/2."),
  mc(S`Solve $\dfrac1{2x+4}\lt-1$.`, S`$-2.5\lt x\lt-2$`, [S`$x\lt-2.5$`, S`$x>-2$`, S`$x\lt-2$`], "2x + 4 must lie between −1 and 0."),
  num(S`The instantaneous rate of change of $g(x)=\dfrac1{x+3}$ at $x=1$ is estimated with $[1,1.001]$. Give the value to 4 decimals.`, -0.0625, "g′(1) ≈ −1/16.", null, 0.001),
  num(S`Find the ratio of the average rate of change of $y=\dfrac1x$ on $[1,2]$ to that on $[2,4]$.`, 4, "−1/2 and −1/8."),
  tf(S`If $f$ is a line with positive slope, then $g=\dfrac1f$ satisfies $g(a)>g(b)$ whenever $a\lt b$.`, false, "Only on one branch: a and b may lie on opposite sides of the asymptote."),
  mc("The dashed lines are the asymptotes. Which equation fits, given the marked point?", S`$y=\dfrac2{x-1}$`, [S`$y=\dfrac1{x-1}$`, S`$y=\dfrac2{x+1}$`, S`$y=\dfrac1{2x-1}$`], "VA x = 1; at x = 3, y = 1 requires numerator 2.", RG((x) => 2 / (x - 1), [1], { xmin: -5, xmax: 7, ymin: -5, ymax: 5 }, 0, [P(3, 1)])),
  mc("Which line has this reciprocal?", S`$f(x)=-2x+4$`, [S`$f(x)=2x-4$`, S`$f(x)=-2x-4$`, S`$f(x)=-x+2$`], "VA x = 2; g(0) = 1/4 means f(0) = 4.", RG((x) => 1 / (-2 * x + 4), [2], { xmin: -3, xmax: 7, ymin: -4, ymax: 4 }, 0, [P(0, 0.25, false)])),
  num(S`$g(x)=\dfrac a{x+b}$ has VA $x=-2$ and passes through $(1,3)$. Find $a$.`, 9, "a/(1 + 2) = 3."),
  num(S`For $g(x)=\dfrac a{x+b}$ with VA $x=4$ and $g(6)=5$, find $g(14)$.`, 1, "a = 10; g(14) = 10/10."),
  mc(S`For which values of $x$ is $\dfrac1{x}\gt x$?`, S`$x\lt-1$ or $0\lt x\lt1$`, [S`$-1\lt x\lt0$ or $x>1$`, S`$0\lt x\lt1$`, S`$x\lt1$`], "1/x − x = (1 − x²)/x > 0.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, curves: [...rat((x) => 1 / x, [0], { xmin: -4, xmax: 4 }), { f: (x) => x, color: "green" }], step: { x: 1, y: 1 } })),
  num(S`How many points do $y=x-4$ and $y=\dfrac1{x-4}$ share?`, 2, "x − 4 = ±1: (5, 1) and (3, −1)."),
  num(S`The time for a 240 km trip at $v$ km/h is $t=\dfrac{240}v$. Find the average rate of change of $t$ from $v=60$ to $v=80$, as a decimal.`, -0.05, "(3 − 4)/20.", null, 0.001),
  mc(S`A reciprocal $g=\dfrac1f$ of a line has $g(0)=-\tfrac12$ and VA $x=-1$. What is $f$?`, S`$f(x)=-2x-2$`, [S`$f(x)=2x+2$`, S`$f(x)=-2x+2$`, S`$f(x)=2x-2$`], "f(0) = −2 and f(−1) = 0."),
  tf(S`A vertical stretch of $y=\dfrac1{x-1}$ can change the location of its vertical asymptote.`, false, "A vertical stretch multiplies y-values and leaves x-values alone."),
  num(S`For $g(x)=\dfrac1{x-2}$, find the $x>2$ with $g(x)=0.001$.`, 1002, "x − 2 = 1000."),
  mc("The line (blue) and a second curve are shown. Why is the curve not the reciprocal of the line?", "it does not pass through the line's points where y = ±1", ["its asymptote is at the line's zero", "it has no x-intercept", "it has two branches"], "The reciprocal must share (2, 1) and (0, −1) with the line; this curve misses them.", planeDoc({ view: { xmin: -5, xmax: 7, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x - 1, color: "blue" }, ...rat((x) => 3 / (x - 1), [1], { xmin: -5, xmax: 7 })], points: [P(2, 1), P(0, -1)], step: { x: 1, y: 1 } })),
  num(S`$g(x)=\dfrac1{x+1}$. Find the positive $x$ for which the tangent at $x$ has slope about $-\tfrac19$.`, 2, "Slope = −1/(x + 1)²: (x + 1)² = 9."),
  mc(S`Solve $\dfrac1{x-1}\le\dfrac12$.`, S`$x\lt1$ or $x\ge3$`, [S`$1\lt x\le3$`, S`$x\ge3$`, S`$x\le3$`], "Rewrite as (3 − x)/(2(x − 1)) ≤ 0."),
];

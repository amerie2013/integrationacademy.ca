// 1.7 Horizontal Stretches, Compressions and Reflections — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

export const TOPIC = "1.7 Horizontal Stretches, Compressions and Reflections";
export const Q = [
  num(String.raw`$f(x)=x^2+6x$. Find the x-coordinate of the vertex of $y=f(-\tfrac13x)$.`, 9, "Vertex of f at x = −3 → −3 ÷ (−⅓)."),
  num(String.raw`$f$ has zeros $-4$ and $10$. Find $k$ so that $y=f(kx)$ has zeros $2$ and $-5$.`, -2, "−4/k = 2."),
  mx(String.raw`$f(x)=x^2-2x$. Write $f(3x)$ in expanded form.`, "9*x^2-6*x", "(3x)² − 2(3x)."),
  num(String.raw`$y=\sqrt{kx}$ passes through $(-8,4)$. Find $k$.`, -2, "−8k = 16."),
  ms(String.raw`For $f(x)=\sqrt x$, which equal $y=\sqrt{16x}$? Select all.`, [String.raw`$4\sqrt x$`, String.raw`$f(16x)$`, String.raw`$16f(x)$`, String.raw`$4f(x)$`], [0, 1, 3], "√16 · √x = 4√x."),
  num("The grey curve is y = f(x); the red curve is y = f(kx). Find k.", 3, "(6, 2) moves to (2, 2): 6 ÷ k = 2.", planeDoc({ view: { xmin: -2, xmax: 9, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(2 * x / 3), a: 0, color: "gray" }, { f: (x) => Math.sqrt(2 * x), a: 0, color: "red" }], points: [P(6, 2, null, "gray"), P(2, 2, null, "red")] })),
  num(String.raw`$f$ has domain $-6\le x\le9$. How long is the domain interval of $y=f(-\tfrac13x)$?`, 45, "Endpoints 18 and −27."),
  tf(String.raw`For every function $f$, the graphs of $y=f(-x)$ and $y=-f(x)$ are the same.`, false, "True only for odd functions such as x or 1/x."),
  num("The grey graph is y = f(x). The red graph is a reflection and horizontal change: y = f(kx). Find k.", -0.5, "(2, 3) moves to (−4, 3): 2 ÷ k = −4.", planeDoc({ view: { xmin: -7, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => (x >= 0 ? 1.5 * x : NaN), a: 0, b: 3, color: "gray" }, { f: (x) => (x <= 0 ? -0.75 * x : NaN), a: -6, b: 0, color: "red" }], points: [P(2, 3, null, "gray"), P(-4, 3, null, "red")] }), 0.001),
  mc(String.raw`$f(x)=(x-2)(x+6)$. Which is $y=f(2x)$ in factored form?`, String.raw`$(2x-2)(2x+6)=4(x-1)(x+3)$`, [String.raw`$2(x-2)(x+6)$`, String.raw`$(x-4)(x+12)$`, String.raw`$(x-1)(x+3)$`], "Replace x by 2x; zeros 1 and −3."),
  num(String.raw`The point $(a,b)$ on $y=\frac1x$ with $a=3$ maps to which y-coordinate on $y=\frac1{-3x}$?`, 0.3333, "x: 3 → −1; y stays 1/3.", null, 0.002),
  num(String.raw`$f(x)=|x-3|$. Find the x-coordinate of the vertex of $y=f(\tfrac14x)$.`, 12, "|x/4 − 3| = 0 → x = 12."),
  mc(String.raw`Which transformation of $y=\frac1x$ gives the same graph as $y=\frac{2}{x}$?`, String.raw`horizontal stretch by a factor of 2`, ["horizontal compression by ½", "reflection in the y-axis", "translation 2 up"], "f(½x) = 1/(x/2) = 2/x."),
  num(String.raw`$f$ has range $3\le y\le11$ and domain $0\le x\le8$. What is the right endpoint of the domain of $y=f(\tfrac23x)$?`, 12, "8 ÷ ⅔."),
  ms("The grey curve is y = x² − 4. Which equations give the red curve? Select all.", [String.raw`$y=(2x)^2-4$`, String.raw`$y=4x^2-4$`, String.raw`$y=2x^2-4$`, String.raw`$y=(-2x)^2-4$`], [0, 1, 3], "Zeros ±2 → ±1: compression by ½ (or reflection with it).", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 4, color: "gray" }, { f: (x) => 4 * x * x - 4, color: "red" }], points: [P(1, 0), P(-1, 0), P(2, 0, null, "gray")] })),
  num(String.raw`$y=\sqrt{a-x}$ has domain $x\le7$. Find $a$.`, 7, "a − x ≥ 0 → x ≤ a."),
  tf(String.raw`$y=\sqrt{-x}$ and $y=-\sqrt x$ have the same range.`, false, "y ≥ 0 versus y ≤ 0."),
  num(String.raw`$f$ has a maximum at $(-5,2)$. Find the x-coordinate of the maximum of $y=f(-\tfrac52x)$.`, 2, "−5 ÷ (−5/2)."),
  num(String.raw`$f(x)=x^2-10x+21$. Find the larger zero of $y=f(-x)$.`, -3, "Zeros of f: 3, 7 → −3, −7."),
  mc("The grey curve is y = 1/x. Which equation gives the red curve?", String.raw`$y=\frac1{-3x}$`, [String.raw`$y=\frac{1}{3x}$`, String.raw`$y=\frac{-3}{x}$`, String.raw`$y=\frac1x-3$`], "Red passes through (−⅓, 1): reflection and compression by ⅓.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 1 / x, color: "gray" }, { f: (x) => 1 / (-3 * x), color: "red" }], points: [P(-1 / 3, 1, false, "red"), P(1, 1, false, "gray")] })),
];

// 4.3 Rational Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const hyp = (f, h, xmin, xmax, color = "violet") => [{ f, a: xmin, b: h - 0.02, color }, { f, a: h + 0.02, b: xmax, color }];
const ASY = (h, k) => ({ vlines: [{ x: h, color: "red", dash: true }], lines: [{ m: 0, b: k, color: "red", dash: true }] });

export const TOPIC = "4.3 Rational Functions";
export const Q = [
  num(S`$y=\frac{x+2}{x-2}$ meets $y=x$ at two points (shown). Give the larger x-coordinate (2 d.p.).`, (3 + Math.sqrt(17)) / 2, "x² − 3x − 2 = 0.", planeDoc({ view: { xmin: -5, xmax: 7, ymin: -5, ymax: 7 }, curves: [...hyp((x) => (x + 2) / (x - 2), 2, -5, 7), { f: (x) => x, color: "blue" }], ...ASY(2, 1) }), 0.01),
  num(S`$f(x)=\frac{ax+b}{x+2}$ has horizontal asymptote $y=-3$ and passes through $(1,1)$. Find $b$.`, 6, "a = −3; (−3 + b)/3 = 1."),
  num(S`For $f(x)=\frac{ax+b}{x+2}$ with asymptote $y=-3$ through $(1,1)$, find the x-intercept.`, 2, "−3x + 6 = 0."),
  num(S`The graph of $y=\frac{2x-6}{x-1}$ is shown. Find the area of the triangle formed by its two intercepts and the origin.`, 9, "Intercepts (3, 0) and (0, 6): ½ × 3 × 6.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 9 }, curves: hyp((x) => (2 * x - 6) / (x - 1), 1, -4, 6), ...ASY(1, 2), points: [P(3, 0), P(0, 6)] })),
  num(S`$f(x)=\frac{4x-3}{x+2}$. Find $f^{-1}(1)$ (3 d.p.).`, 5 / 3, "Solve f(x) = 1: 4x − 3 = x + 2.", null, 0.001),
  tf(S`$f(x)=\frac{2x+5}{x-2}$ is self-inverse.`, true, "Swapping x and y and rearranging gives (2x + 5)/(x − 2) again."),
  num(S`$f(x)=\frac{x+1}{x-1}$. Find $f(f(3))$.`, 3, "f(3) = 2, f(2) = 3: f is self-inverse."),
  num(S`How many solutions does $\frac{x+3}{x-1}=x-2$ have?`, 2, "x² − 4x − 1 = 0 has Δ = 20 > 0 (and neither root is 1)."),
  num("The graph shown is y = (−x + b)/(x − 3), with asymptotes x = 3 and y = −1, through (0, 1). Find its x-intercept.", -3, "b/(−3) = 1 → b = −3; −x − 3 = 0.", planeDoc({ view: { xmin: -6, xmax: 8, ymin: -6, ymax: 5 }, curves: hyp((x) => (-x - 3) / (x - 3), 3, -6, 8), ...ASY(3, -1), points: [P(0, 1)] })),
  num("Making n items costs 2000 + 8n. What is the least whole number of items for which the average cost is below 10?", 1001, "8 + 2000/n < 10 → n > 1000."),
  num(S`A drug's concentration is $C=\frac{60t}{t+10}$ mg/L (shown). When is $C=45$?`, 30, "60t = 45t + 450.", planeDoc({ view: { xmin: -3, xmax: 82, ymin: -3, ymax: 66 }, curves: [{ f: (t) => (60 * t) / (t + 10), a: 0, b: 82 }], lines: [{ m: 0, b: 60, color: "red", dash: true }], points: [P(30, 45)], step: { x: 10, y: 10 }, xlabel: "t", ylabel: "C" })),
  ms(S`For $f(x)=\frac{3x-6}{x+1}$, which are true? Select all.`, ["The vertical asymptote is x = −1", "The horizontal asymptote is y = 3", "The x-intercept is 2", "The y-intercept is 6"], [0, 1, 2], "f(0) = −6."),
  mc(S`Solve $\frac{x+3}{x-1}>0$.`, S`$x<-3$ or $x>1$`, [S`$-3<x<1$`, S`$x>1$`, S`$x>-3$`], "The sign changes at x = −3 and x = 1."),
  num(S`For which positive $k$ does $y=\frac{kx-4}{x-2}$ have no x-intercept?`, 2, "kx − 4 = k(x − 2) when k = 2: the graph is y = 2 with a hole."),
  num(S`Find the distance from the origin to the centre of $y=\frac{4x-2}{x+1}$ (3 s.f.).`, Math.sqrt(17), "Centre (−1, 4).", null, 0.005),
  num(S`$f(x)=\frac{x+a}{x+b}$ passes through $(0,2)$ and has vertical asymptote $x=-3$. Find $f(3)$.`, 1.5, "b = 3, a = 6: 9/6.", null, 1e-9),
  mc("Which graph is NOT a hyperbola?", S`$y=\frac{2x+6}{x+3}$`, [S`$y=\frac{2x+6}{x-3}$`, S`$y=\frac{x+6}{x+3}$`, S`$y=\frac{2x}{x+3}$`], "2x + 6 = 2(x + 3): the line y = 2 with a hole."),
  num(S`A tank's salt concentration is $C=\frac{30t}{100+5t}$ g/L. What value does $C$ approach in the long run?`, 6, "30/5."),
  tf(S`On each branch, every function $\frac{ax+b}{cx+d}$ is increasing.`, false, "e.g. 1/x decreases; the direction depends on the sign of bc − ad."),
  num(S`$f(x)=\frac{x-1}{x+2}$ and its inverse are shown. How many points do the graphs of $f$ and $y=x$ have in common?`, 0, "x − 1 = x² + 2x → x² + x + 1 = 0 has Δ < 0.", planeDoc({ view: { xmin: -7, xmax: 5, ymin: -7, ymax: 5 }, curves: [...hyp((x) => (x - 1) / (x + 2), -2, -7, 5), ...hyp((x) => (2 * x + 1) / (1 - x), 1, -7, 5, "green"), { f: (x) => x, color: "gray" }] })),
];

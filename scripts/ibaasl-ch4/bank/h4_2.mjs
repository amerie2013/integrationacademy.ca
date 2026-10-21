// 4.2 Transforming the Reciprocal Function — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const hyp = (f, h, xmin, xmax, color = "violet") => [{ f, a: xmin, b: h - 0.02, color }, { f, a: h + 0.02, b: xmax, color }];
const ASY = (h, k) => ({ vlines: [{ x: h, color: "red", dash: true }], lines: [{ m: 0, b: k, color: "red", dash: true }] });

export const TOPIC = "4.2 Transforming the Reciprocal Function";
export const Q = [
  num(S`The graph of $y=\frac{a}{x-h}+3$ passes through $(0,0)$ and $(2,6)$ (shown). Find $h$.`, 1, "a = 3h from (0, 0); a/(2 − h) = 3 → 3h = 6 − 3h.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 9 }, curves: hyp((x) => 3 / (x - 1) + 3, 1, -4, 6), ...ASY(1, 3), points: [P(0, 0), P(2, 6)] })),
  num(S`For the graph $y=\frac{a}{x-h}+3$ through $(0,0)$ and $(2,6)$, find $a$.`, 3, "h = 1 and a = 3h."),
  num(S`$y=\frac{1}{x+1}+2$ meets $y=x+3$ at two points (shown). Give the larger x-coordinate.`, 0, "1/(x + 1) = x + 1 → (x + 1)² = 1 → x = 0 or −2.", planeDoc({ view: { xmin: -5, xmax: 3, ymin: -3, ymax: 7 }, curves: [...hyp((x) => 1 / (x + 1) + 2, -1, -5, 3), { f: (x) => x + 3, color: "blue" }], ...ASY(-1, 2), points: [P(0, 3), P(-2, 1)] })),
  num(S`The line $y=-x+c$ is a tangent to $y=\frac{4}{x-1}$ with $c>0$. Find $c$.`, 5, "u = x − 1: u² − (c − 1)u + 4 = 0 with (c − 1)² = 16."),
  num(S`Which horizontal line $y=k$ is never met by $y=\frac{7}{x+8}-9$? Give $k$.`, -9, "The horizontal asymptote."),
  num(S`$y=\frac{2}{x-3}+1$ is reflected in the x-axis. What is the new horizontal asymptote? Give the value of $y$.`, -1, "y = −2/(x − 3) − 1."),
  num(S`$y=\frac{2}{x-3}+1$ is reflected in the y-axis. What is the new vertical asymptote? Give the value of $x$.`, -3, "Replace x by −x: −x − 3 = 0."),
  num(S`$f(x)=\frac{2}{x-3}+1$. Find $f^{-1}(2)$.`, 5, "Solve f(x) = 2: 2/(x − 3) = 1."),
  tf(S`The inverse of $y=\frac{a}{x-h}+k$ has asymptotes $x=k$ and $y=h$.`, true, "Swapping x and y swaps the asymptotes."),
  num(S`A drink cools as $T=\frac{200}{t+4}+25$ °C (shown). After how many minutes is it 35 °C?`, 16, "200/(t + 4) = 10.", planeDoc({ view: { xmin: -2, xmax: 42, ymin: -5, ymax: 85 }, curves: [{ f: (t) => 200 / (t + 4) + 25, a: 0, b: 42 }], lines: [{ m: 0, b: 25, color: "red", dash: true }], points: [P(0, 75), P(16, 35)], step: { x: 5, y: 10 }, xlabel: "t", ylabel: "T" })),
  num(S`For $T=\frac{200}{t+4}+25$, what is the starting temperature?`, 75, "50 + 25."),
  ms(S`For $y=-\frac{3}{x+1}+2$, which are true? Select all.`, ["The vertical asymptote is x = −1", "The y-intercept is −1", "The x-intercept is −0.5", "y increases as x increases on each branch"], [0, 1, 3], "x-intercept: −3/(x + 1) = −2 → x = 0.5."),
  num(S`Solve $\frac{4}{x+2}=x-1$. Give the larger solution.`, 2, "x² + x − 6 = 0."),
  num("The graph shown has centre (−1, 2) and passes through (1, 0). Find a in y = a/(x + 1) + 2.", -4, "a/2 + 2 = 0.", planeDoc({ view: { xmin: -6, xmax: 4, ymin: -3, ymax: 7 }, curves: hyp((x) => -4 / (x + 1) + 2, -1, -6, 4), ...ASY(-1, 2), points: [P(1, 0), P(-1, 2)] })),
  num(S`Find the distance between the two intercepts of $y=\frac{6}{x+3}-1$ (3 s.f.).`, Math.sqrt(10), "(0, 1) and (3, 0): √(9 + 1).", null, 0.005),
  num(S`For $x>2$, $\frac{5}{x-2}+1<2$ exactly when $x>c$. Find $c$.`, 7, "5/(x − 2) < 1 → x − 2 > 5."),
  num(S`A graph $y=\frac{a}{x-h}+k$ is symmetric about $(3,-2)$ and passes through $(4,2)$. Find $y$ when $x=1$.`, -4, "a = 4: 4/(−2) − 2."),
  mc(S`$y=\frac{1}{2x-6}$ has vertical asymptote $x=3$ and is $y=\frac{1}{x-3}$ stretched vertically by factor:`, S`$\frac12$`, ["2", "6", S`$\frac16$`], "1/(2(x − 3)) = ½ · 1/(x − 3)."),
  num(S`A population is $N=50+\frac{300}{t+2}$. After how many years does it fall to 80?`, 8, "300/(t + 2) = 30."),
  mc("The graph shown is:", S`$y=-\frac{2}{x-1}+2$`, [S`$y=\frac{2}{x-1}+2$`, S`$y=-\frac{2}{x+1}+2$`, S`$y=-\frac{2}{x-2}+1$`], "Centre (1, 2); branches top-left and bottom-right, so a < 0; through (0, 4).", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 7 }, curves: hyp((x) => -2 / (x - 1) + 2, 1, -4, 6), ...ASY(1, 2), points: [P(0, 4), P(2, 0)] })),
];

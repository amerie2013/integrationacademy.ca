// 4.1 The Reciprocal Function — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const hyp = (f, h, xmin, xmax, color = "violet") => [{ f, a: xmin, b: h - 0.02, color }, { f, a: h + 0.02, b: xmax, color }];
const AX = { vlines: [{ x: 0, color: "red", dash: true }], lines: [{ m: 0, b: 0, color: "red", dash: true }] };

export const TOPIC = "4.1 The Reciprocal Function";
export const Q = [
  num(S`$y=\frac{6}{x}$ meets $y=x+1$ at two points (shown). Give the larger x-coordinate.`, 2, "x² + x − 6 = 0 → (x + 3)(x − 2) = 0.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 7 }, curves: [...hyp((x) => 6 / x, 0, -6, 6), { f: (x) => x + 1, color: "blue" }], points: [P(2, 3), P(-3, -2)] })),
  num(S`$y=\frac{6}{x}$ meets $y=x+1$ at two points. Give the smaller x-coordinate.`, -3, "(x + 3)(x − 2) = 0."),
  num(S`The line $y=-x+c$, $c>0$, is a tangent to $y=\frac{16}{x}$. Find $c$.`, 8, "x² − cx + 16 = 0 with c² = 64."),
  num(S`The line $y=-2x+c$, $c>0$, is a tangent to $y=\frac{2}{x}$. Find $c$.`, 4, "2x² − cx + 2 = 0 with c² − 16 = 0."),
  num(S`How many points do $y=\frac{1}{x}$ and $y=-x$ have in common?`, 0, "−x² = 1 has no real solution."),
  tf(S`Every line $y=mx$ with $m>0$ meets $y=\frac4x$ at exactly two points.`, true, "mx² = 4 has two solutions ±√(4/m)."),
  num("The violet curve is y = k/x. The rectangle shown has area 12. Find the y-coordinate of the marked point.", 1.5, "k = 12, so y = 12/8.", planeDoc({ view: { xmin: -1, xmax: 10, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 12 / x, a: 1.6, b: 10 }], segs: [{ pts: [[0, 0], [8, 0], [8, 1.5], [0, 1.5], [0, 0]], color: "amber" }], points: [P(8, 1.5, false)] }), 1e-9),
  num(S`$A$ and $B$ lie on $y=\frac{24}{x}$ with x-coordinates 2 and 6. Find the gradient of $AB$.`, -2, "A(2, 12), B(6, 4): −8/4."),
  num(S`$P(a,\frac{10}{a})$ and $Q(-a,-\frac{10}{a})$ lie on $y=\frac{10}{x}$. What is the midpoint's x-coordinate?`, 0, "The curve is symmetric about the origin."),
  mc(S`Under a reflection in the line $y=x$, the graph of $y=\frac{7}{x}$:`, "maps onto itself", ["maps onto y = −7/x", "maps onto y = 7x", "maps onto y = x/7"], "It is self-inverse."),
  num("A gas has pressure 120 kPa at 5 L. Pressure varies inversely with volume. Find the pressure in kPa at 1.5 L.", 400, "PV = 600.", planeDoc({ view: { xmin: -0.3, xmax: 8, ymin: -20, ymax: 450 }, curves: [{ f: (v) => 600 / v, a: 1.35, b: 8 }], points: [P(5, 120), P(1.5, 400)], step: { x: 1, y: 50 }, xlabel: "V", ylabel: "P" })),
  num(S`$y$ varies inversely with $x$. When $x$ increases by 25%, by what percentage does $y$ decrease?`, 20, "y becomes y/1.25 = 0.8y."),
  num(S`The light intensity $I$ varies inversely with $d^2$. At 2 m, $I=90$. Find $I$ at 3 m.`, 40, "Id² = 360."),
  num("The curve shown is y = k/x. Find the value of k.", -10, "Through (2, −5).", planeDoc({ view: { xmin: -7, xmax: 7, ymin: -7, ymax: 7 }, curves: hyp((x) => -10 / x, 0, -7, 7), ...AX, points: [P(2, -5), P(-5, 2)] })),
  ms(S`For $f(x)=\frac{12}{x}$, which are true? Select all.`, [S`$f(f(x))=x$`, S`$f(-x)=-f(x)$`, S`$f(2x)=2f(x)$`, S`$f(x)>0$ for $x>0$`], [0, 1, 3], "f(2x) = 6/x = ½f(x)."),
  num(S`For which positive $k$ does the line $y=-x+5$ touch $y=\frac kx$?`, 6.25, "x² − 5x + k = 0 with 25 − 4k = 0.", null, 1e-9),
  num(S`For $x>0$, find the minimum of $x+\frac{9}{x}$ (use a GDC or the tangent idea).`, 6, "At x = 3: 3 + 3."),
  tf(S`The graph of $y=\frac{1}{x}$ is symmetric about the origin.`, true, "f(−x) = −f(x)."),
  num(S`$y=\frac kx$ passes through $(2,a)$ and $(4,a-3)$. Find $a$.`, 6, "k = 2a = 4(a − 3) → 2a = 12."),
  num("In the graph, the car's journey time t (h) is plotted against speed v (km/h). How many hours are saved by driving at 100 km/h instead of 60 km/h?", 2, "Distance 300 km: 5 h − 3 h.", planeDoc({ view: { xmin: -5, xmax: 130, ymin: -0.5, ymax: 9 }, curves: [{ f: (v) => 300 / v, a: 35, b: 130 }], points: [P(60, 5), P(100, 3)], step: { x: 10, y: 1 }, xlabel: "v", ylabel: "t" })),
];

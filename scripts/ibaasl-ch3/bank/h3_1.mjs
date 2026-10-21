// 3.1 The Gradient of a Line — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const TOPIC = "3.1 The Gradient of a Line";
export const Q = [
  num(S`The points $(0,0)$, $(2,k)$ and $(k,8)$ lie on one line with positive gradient. Find $k$.`, 4, "k/2 = (8 − k)/(k − 2) → k² = 16; k = −4 gives a negative gradient."),
  num(S`$A(0,0)$, $B(4,2)$, $C(5,0)$. Find the gradient of the altitude from $C$ to $AB$.`, -2, "AB has gradient 1/2."),
  num(S`Triangle $ABC$ has $A(1,1)$, $B(5,3)$ and $C(3,k)$, with a right angle at $B$. Find $k$.`, 7, "BC must have gradient −2: (k − 3)/(−2) = −2.", planeDoc({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 8 }, segs: [{ pts: [[1, 1], [5, 3], [3, 7], [1, 1]], color: "violet" }], points: [P(1, 1, "A"), P(5, 3, "B"), P(3, 7, "C")] })),
  tf(S`The quadrilateral with vertices $(0,0)$, $(4,1)$, $(5,5)$, $(1,4)$ is a parallelogram.`, true, "Opposite sides have gradients 1/4, 1/4 and 4, 4."),
  tf(S`The quadrilateral with vertices $(0,0)$, $(4,1)$, $(5,5)$, $(1,4)$ is a rectangle.`, false, "Gradients 1/4 and 4 have product 1, not −1."),
  num("The graph shows the cost C of printing n posters. What is the cost per extra poster?", 1.25, "Through (40, 80) and (200, 280): 200 ÷ 160.", planeDoc({ view: { xmin: -10, xmax: 240, ymin: -15, ymax: 330 }, lines: [{ m: 1.25, b: 30 }], points: [P(40, 80), P(200, 280)], step: { x: 40, y: 50 }, xlabel: "n", ylabel: "C" }), 1e-9),
  num("For the poster costs in the previous graph, what is the fixed cost (when n = 0)?", 30, "80 − 1.25 × 40."),
  num(S`The line $(k-1)x+2y=5$ is parallel to $y=3x-4$. Find $k$.`, -5, "Gradient −(k − 1)/2 = 3."),
  num(S`The line $kx-3y=1$ is perpendicular to $y=-\frac12x$. Find $k$.`, 6, "Gradient k/3 = 2."),
  mc(S`$A(-2,3)$ and $B(4,-1)$. Which gradient does the perpendicular bisector of $AB$ have?`, "1.5", ["−1.5", S`$-\frac23$`, S`$\frac23$`], "AB has gradient −2/3."),
  num(S`The segment shown joins $(-1,5)$ to $(3,-3)$. A line perpendicular to it passes through the origin. What is $y$ on that line when $x=8$?`, 4, "The segment has gradient −2, so the line is y = x/2.", planeDoc({ view: { xmin: -3, xmax: 9, ymin: -4, ymax: 6 }, segs: [{ pts: [[-1, 5], [3, -3]], color: "violet" }], lines: [{ m: 0.5, b: 0, color: "green", dash: true }], points: [P(-1, 5), P(3, -3)] })),
  num(S`The gradient of the line through $(t,t^2)$ and $(t+2,(t+2)^2)$ is 10. Find $t$.`, 4, "Gradient = 2t + 2."),
  num(S`The line through $(2,3)$ and $(p,p)$ has gradient $-2$. Find $p$.`, 7/3, "(p − 3) = −2(p − 2) → 3p = 7.", null, 1e-3),
  ms("A(1, 1), B(3, 5), C(7, 3). Which statements are true? Select all.", ["AB ⊥ BC", "AB ∥ AC", "The gradient of AC is 1/3", "The gradient of BC is 2"], [0, 2], "AB: 2, BC: −1/2, AC: 1/3."),
  num("The graph shows the fuel left in a car's tank. At this rate, after how many km is the tank empty?", 600, "Gradient −48/400 = −0.12 L per km; 72 ÷ 0.12.", planeDoc({ view: { xmin: -30, xmax: 650, ymin: -5, ymax: 80 }, lines: [{ m: -0.12, b: 72 }], points: [P(0, 72), P(400, 24)], step: { x: 100, y: 10 }, xlabel: "km", ylabel: "L" })),
  num(S`Line $L_1$ has gradient $m>0$; line $L_2$ is perpendicular to it and has gradient $m-\frac52$. Find the larger possible value of $m$.`, 2, "m(m − 2.5) = −1 → m² − 2.5m + 1 = 0 → m = 2 or 0.5."),
  tf(S`If two lines both have positive gradients they cannot be perpendicular.`, true, "The product of two positive numbers is positive, never −1."),
  num(S`$A(0,2)$, $B(6,4)$ and $C(c,0)$ with $\angle ACB=90^\circ$. Find the larger value of $c$.`, 4, "Gradients −2/c and 4/(6 − c) multiply to −1 → c(6 − c) = 8 → c = 2 or 4."),
  num(S`A road climbs at a gradient of 8%. How many metres does it rise over a horizontal distance of 2.5 km?`, 200, "0.08 × 2500."),
  num(S`Find the gradient of the line through $(2a,3a)$ and $(5a,-3a)$, $a\ne0$.`, -2, "−6a ÷ 3a."),
];

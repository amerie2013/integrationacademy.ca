// 3.1 The Gradient of a Line — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  num(S`Find the gradient of the line through $(1,3)$ and $(4,15)$.`, 4, "12 ÷ 3."),
  num(S`Find the gradient of the line through $(0,7)$ and $(2,1)$.`, -3, "−6 ÷ 2."),
  num(S`Find the gradient of the line through $(-2,-1)$ and $(6,3)$.`, 0.5, "4 ÷ 8.", null, 1e-9),
  num(S`Find the gradient of the line through $(-5,8)$ and $(3,8)$.`, 0, "The rise is 0: a horizontal line."),
  mc(S`The line through $(7,-2)$ and $(7,5)$ has gradient:`, "not defined (vertical line)", ["0", "7", "−7"], "The run is 0, so the line is vertical."),
  num("Use the rise and run marked on the graph to find the gradient.", 1.5, "Rise 3 over run 2.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 7 }, lines: [{ m: 1.5, b: 0.5 }], tri: { x: 1, y: 2, run: 2, rise: 3 }, points: [P(1, 2), P(3, 5)] }), 1e-9),
  num("Find the gradient of the line shown.", -2, "Through (0, 4) and (2, 0): −4 ÷ 2.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -3, ymax: 6 }, lines: [{ m: -2, b: 4 }], points: [P(0, 4), P(2, 0)] })),
  tf("A line that rises from left to right has a positive gradient.", true, "y increases as x increases."),
  tf(S`A horizontal line has no gradient.`, false, "Its gradient is 0; it is a vertical line whose gradient is not defined."),
  fill("Gradient = rise ÷ ___.", ["run", "Run"], "Change in y over change in x."),
  num(S`What is the gradient of $y=-5x+2$?`, -5, "The coefficient of x."),
  num(S`A line has gradient 4. What is the gradient of a line parallel to it?`, 4, "Parallel lines have equal gradients."),
  num(S`A line has gradient 4. What is the gradient of a line perpendicular to it?`, -0.25, "Negative reciprocal.", null, 1e-9),
  num(S`A line has gradient $-\frac15$. What is the gradient of a perpendicular line?`, 5, "−1 ÷ (−1/5)."),
  mc("A taxi charges a fixed fee plus 2.40 per km. The gradient of the cost–distance graph is:", "2.40 per km", ["the fixed fee", "0", "1 ÷ 2.40"], "The gradient is the rate of change."),
  num("A candle is 30 cm tall and burns down steadily to 18 cm in 4 hours. What is the gradient of height against time (cm per hour)?", -3, "(18 − 30) ÷ 4."),
  tf(S`The lines $y=2x+1$ and $y=2x-9$ are parallel.`, true, "Both have gradient 2."),
  num(S`Find the gradient of the line through $(2,-3)$ and $(-4,9)$.`, -2, "12 ÷ (−6)."),
  mc(S`Which pair of gradients belongs to perpendicular lines?`, S`$3$ and $-\frac13$`, [S`$3$ and $\frac13$`, S`$3$ and $-3$`, S`$3$ and $3$`], "Their product must be −1."),
  num(S`Find the gradient of the line through $(0,0)$ and $(5,-10)$.`, -2, "−10 ÷ 5."),
];

export const M = [
  num(S`The line through $(2,k)$ and $(5,11)$ has gradient 3. Find $k$.`, 2, "(11 − k) ÷ 3 = 3."),
  num(S`The line through $(a,1)$ and $(6,9)$ has gradient 2. Find $a$.`, 2, "8 ÷ (6 − a) = 2."),
  num(S`Find the gradient of the line through $(\frac12,3)$ and $(2,\frac32)$.`, -1, "−1.5 ÷ 1.5."),
  num(S`What is the gradient of $3x+4y=12$?`, -0.75, "y = −0.75x + 3.", null, 1e-9),
  num(S`What is the gradient of a line perpendicular to $4x-5y=10$?`, -1.25, "The line has gradient 0.8.", null, 1e-9),
  tf(S`$(0,1)$, $(2,5)$ and $(5,11)$ are collinear.`, true, "Gradients 2 and 2."),
  tf(S`$(1,2)$, $(3,7)$ and $(5,11)$ are collinear.`, false, "Gradients 2.5 and 2."),
  num(S`$(1,4)$, $(3,10)$ and $(6,k)$ are collinear. Find $k$.`, 19, "Gradient 3: 10 + 3(3)."),
  num(S`The line through $(1,2)$ and $(4,t)$ is parallel to $y=-x+8$. Find $t$.`, -1, "(t − 2) ÷ 3 = −1."),
  num(S`The line through $(0,3)$ and $(6,p)$ is perpendicular to $y=3x$. Find $p$.`, 1, "(p − 3) ÷ 6 = −1/3."),
  mc("Water drains so that the volume falls from 500 L to 140 L in 12 minutes. The rate of change is:", "−30 L per minute", ["30 L per minute", "−12 L per minute", "−360 L per minute"], "(140 − 500) ÷ 12."),
  num("The graph shows the distance of a cyclist from home. What is the speed in km per hour?", 18, "Through (0, 0) and (2, 36).", planeDoc({ view: { xmin: -0.3, xmax: 3, ymin: -3, ymax: 50 }, lines: [{ m: 18, b: 0 }], points: [P(2, 36)], step: { x: 0.5, y: 10 }, xlabel: "t (h)", ylabel: "d (km)" })),
  num("Find the gradient of the segment from A to B shown.", -0.6, "Rise −3 over run 5.", planeDoc({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 6 }, segs: [{ pts: [[0, 4], [5, 1]], color: "violet" }], points: [P(0, 4, "A"), P(5, 1, "B")], tri: { x: 0, y: 4, run: 5, rise: -3 } }), 1e-9),
  ms("Which lines are perpendicular to y = 2x − 1? Select all.", [S`$y=-\frac12x+4$`, S`$x+2y=6$`, S`$y=\frac12x$`, S`$2x+y=3$`], [0, 1], "Gradient −1/2 is needed; x + 2y = 6 has gradient −1/2."),
  num(S`Find the gradient of the line through $(-3,-7)$ and $(-1,-1)$.`, 3, "6 ÷ 2."),
  tf(S`The lines $y=\frac23x+1$ and $3x+2y=4$ are perpendicular.`, true, "Gradients 2/3 and −3/2; product −1."),
  num(S`A line has gradient $\frac35$ and passes through $(0,0)$. What is $y$ when $x=15$?`, 9, "Rise = 0.6 × 15."),
  num(S`$A(2,1)$, $B(6,3)$. Find the gradient of the line perpendicular to $AB$.`, -2, "AB has gradient 1/2."),
  mc("A ramp rises 0.6 m over a horizontal distance of 4.8 m. Its gradient is:", "0.125", ["8", "0.6", "4.2"], "0.6 ÷ 4.8."),
  num(S`The line through $(3,-2)$ and $(3+h,\,-2+5h)$ has gradient $g$ for every $h\ne0$. Find $g$.`, 5, "5h ÷ h."),
];

// 4.9 Parallel and Perpendicular Lines — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "4.9 Parallel and Perpendicular Lines";
export const Q = [
  tf(String.raw`The triangle with vertices $A(1,1)$, $B(5,3)$, $C(3,7)$ has a right angle at B.`, true, "AB slope 1/2, BC slope −2: product −1."),
  num(String.raw`Quadrilateral $P(0,0)$, $Q(4,1)$, $R(5,5)$, $S(1,4)$. What is the product of the slopes of PR and QS?`, -1, "PR slope 1, QS slope −1: the diagonals are perpendicular (a rhombus)."),
  mx(String.raw`Write the perpendicular bisector of the segment from $(2,1)$ to $(6,9)$.`, "-0.5*x+7", "Midpoint (4, 5); segment slope 2 → −1/2; 5 = −2 + b."),
  num(String.raw`$y=(k-1)x+3$ is perpendicular to $y=\frac12x-4$. Find k.`, -1, "(k − 1)(1/2) = −1 → k − 1 = −2."),
  num(String.raw`$y=(2k+1)x$ is parallel to $3x-y+7=0$. Find k.`, 1, "2k + 1 = 3."),
  num(String.raw`Find the x-coordinate where the line perpendicular to $y=2x-1$ through $(8,0)$ meets $y=2x-1$.`, 2, "y = −x/2 + 4; 2x − 1 = −x/2 + 4 → 2.5x = 5."),
  num(String.raw`Find the shortest distance from $(8,0)$ to the line $y=2x-1$. (2 decimals)`, 6.7082, "Foot of the perpendicular (2, 3): √(36 + 9) = √45.", null, 0.006),
  ms(`Points A(−2, 1), B(2, 3), C(4, −1), D(0, −3). Which are true? Select all.`, ["AB ∥ DC", "AD ∥ BC", "AB ⟂ BC", "ABCD is a rectangle"], [0, 1, 2, 3], "AB: 1/2, DC: 1/2, BC: −2, AD: −2; adjacent slopes multiply to −1."),
  mc(`The graph shows three lines. Which pair is perpendicular?`, "L and N", ["L and M", "M and N", "no pair"], "L: slope 3/2; M: slope 2/3; N: slope −2/3 — L·N = −1.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1.5, b: -1, color: "blue", label: "L", lx: 3 }, { m: 2 / 3, b: 2, color: "red", label: "M", lx: -5 }, { m: -2 / 3, b: -3, color: "green", label: "N", lx: 4.5 }] })),
  num(String.raw`A line through $(3,a)$ and $(7,2)$ is perpendicular to $4x+2y-1=0$. Find a.`, 0, "Given slope −2 → 1/2: (2 − a)/4 = 1/2."),
  tf(String.raw`If line 1 ⟂ line 2 and line 2 ⟂ line 3, then line 1 ∥ line 3 (all non-vertical, non-horizontal).`, true, "m₃ = −1/m₂ = m₁."),
  num(`A road follows y = −0.75x + 12 (km grid). A new straight path runs from the town at (0, 0) to meet the road at a right angle. At what x does it meet the road? (2 decimals)`, 5.76, "Path y = (4/3)x; (4/3)x = −0.75x + 12 → x = 5.76.", null, 0.006),
  num(`For that same set-up (road y = −0.75x + 12, path from (0, 0) at a right angle), how long is the path (km)?`, 9.6, "Meets at (5.76, 7.68): √(5.76² + 7.68²) = 9.6.", null, 0.006),
  mx(String.raw`Write the line through $(-3,4)$ perpendicular to the line through $(1,-2)$ and $(5,4)$.`, "(-2/3)*x+2", "Given slope 3/2 → −2/3; 4 = 2 + b."),
  num(String.raw`For which value of k are the lines $2x+ky-5=0$ and $6x-3y+1=0$ perpendicular?`, 4, "Slopes −2/k and 2: (−2/k)(2) = −1 → k = 4."),
  num(String.raw`For which value of k are the lines $2x+ky-5=0$ and $6x-3y+1=0$ parallel?`, -1, "−2/k = 2."),
  ms(String.raw`Line $\ell$: $y=\frac34x-2$. Which lines are perpendicular to $\ell$? Select all.`, [String.raw`$4x+3y=0$`, String.raw`$y=-\frac43x+9$`, String.raw`$3x-4y+1=0$`, String.raw`$8x+6y-5=0$`, String.raw`$y=\frac43x$`], [0, 1, 3], "Slope −4/3 needed."),
  num(String.raw`A rectangle has vertices $(0,0)$, $(6,3)$ and $(4,7)$. Find the y-coordinate of the fourth vertex.`, 4, "Fourth = (0,0) + (4,7) − (6,3) = (−2, 4)."),
  mc(String.raw`Why can't a line perpendicular to $y=0x+5$ be written as $y=mx+b$?`, "it is vertical, so its slope is undefined", ["its slope is 0", "it has no y-intercept for some b", "it is the same line"], "−1/0 is undefined."),
  num(String.raw`The altitude from $C(5,6)$ in triangle $A(0,0)$, $B(8,2)$, $C(5,6)$ is perpendicular to AB. What is its slope?`, -4, "AB slope 1/4."),
];

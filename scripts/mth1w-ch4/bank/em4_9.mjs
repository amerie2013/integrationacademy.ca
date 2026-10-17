// 4.9 Parallel and Perpendicular Lines — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(String.raw`What is the slope of a line parallel to $y=5x-2$?`, 5, "Parallel lines have equal slopes."),
  num(String.raw`What is the slope of a line perpendicular to $y=4x+1$? (decimal)`, -0.25, "Negative reciprocal of 4.", null, 0.001),
  num(String.raw`What is the slope of a line perpendicular to $y=-\frac13x+6$?`, 3, "Negative reciprocal of −1/3."),
  tf(String.raw`$y=2x+3$ and $y=2x-8$ are parallel.`, true, "Both slopes are 2."),
  tf(String.raw`$y=3x$ and $y=-3x$ are perpendicular.`, false, "3 × (−3) = −9, not −1."),
  mc(String.raw`Which line is perpendicular to $y=\frac25x-1$?`, String.raw`$y=-\frac52x+4$`, [String.raw`$y=\frac52x+4$`, String.raw`$y=-\frac25x+4$`, String.raw`$y=\frac25x+4$`], "Flip and change sign."),
  mc(String.raw`Which line is parallel to $y=-x+7$?`, String.raw`$y=-x-3$`, [String.raw`$y=x+7$`, String.raw`$y=7$`, String.raw`$x=-1$`], "Slope −1."),
  num(`Two lines are perpendicular. One has slope 6. What is the product of their slopes?`, -1, "m₁m₂ = −1."),
  mc(`A line perpendicular to a horizontal line is…`, "vertical", ["horizontal", "slope 1", "slope −1"], "Horizontal and vertical lines meet at right angles."),
  mx(String.raw`Write the line parallel to $y=3x+5$ with y-intercept $-2$.`, "3*x-2", "Same slope, new intercept."),
  mx(String.raw`Write the line perpendicular to $y=2x$ through the origin.`, "-0.5*x", "Slope −1/2, b = 0."),
  ms(String.raw`Which lines are parallel to $y=\frac12x$? Select all.`, [String.raw`$y=\frac12x+9$`, String.raw`$y=0.5x-1$`, String.raw`$y=2x$`, String.raw`$y=-\frac12x$`], [0, 1], "Slope 1/2."),
  tf(String.raw`Parallel lines with different y-intercepts never meet.`, true, "They keep the same gap."),
  num(String.raw`A line is perpendicular to the line through $(0,0)$ and $(2,6)$. What is its slope? (decimal)`, -0.3333, "That line has slope 3.", null, 0.002),
  mc(`The graph shows lines A and B. How are they related?`, "perpendicular", ["parallel", "the same line", "neither"], "A: slope 2; B: slope −1/2; product −1.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 2, b: 1, color: "blue", label: "A", lx: 2 }, { m: -0.5, b: 1, color: "red", label: "B", lx: -4.5 }] })),
  num(String.raw`What is the slope of a line perpendicular to $y=-5x+2$? (decimal)`, 0.2, "1/5.", null, 0.001),
  mc(String.raw`Which line is parallel to $x=3$?`, String.raw`$x=-4$`, [String.raw`$y=3$`, String.raw`$y=3x$`, String.raw`$y=-4$`], "Both vertical."),
  tf(`Two lines with slopes 4 and −1/4 are perpendicular.`, true, "4 × (−1/4) = −1."),
  mx(String.raw`Write the line parallel to $y=-4x+1$ through $(0,9)$.`, "-4*x+9", "Slope −4, b = 9."),
  num(String.raw`A line has slope $\frac{7}{2}$. What is the slope of a line perpendicular to it? (decimal)`, -0.2857, "−2/7.", null, 0.002),
];

export const M = [
  mx(String.raw`Write the line parallel to $y=2x-3$ through $(4,1)$.`, "2*x-7", "1 = 8 + b."),
  mx(String.raw`Write the line perpendicular to $y=3x+2$ through $(6,-1)$.`, "(-1/3)*x+1", "−1 = −2 + b."),
  mx(String.raw`Write the line parallel to $2x+y-5=0$ through $(-1,4)$.`, "-2*x+2", "Slope −2; 4 = 2 + b."),
  num(String.raw`What is the slope of a line perpendicular to $3x-4y+8=0$? (decimal)`, -1.3333, "Slope 3/4 → −4/3.", null, 0.002),
  tf(String.raw`$2x+3y-6=0$ and $3x-2y+1=0$ are perpendicular.`, true, "Slopes −2/3 and 3/2: product −1."),
  ms(String.raw`Which lines are perpendicular to $y=-\frac23x+1$? Select all.`, [String.raw`$y=\frac32x$`, String.raw`$3x-2y+4=0$`, String.raw`$y=-\frac32x$`, String.raw`$2x-3y=0$`], [0, 1], "Slope 3/2. 3x − 2y + 4 = 0 → y = 1.5x + 2."),
  num(String.raw`$y=kx+1$ is parallel to $y=-6x+4$. Find k.`, -6, "Equal slopes."),
  num(String.raw`$y=kx-2$ is perpendicular to $y=\frac14x+3$. Find k.`, -4, "k · 1/4 = −1."),
  mc(`The graph shows lines P and Q. How are they related?`, "parallel", ["perpendicular", "the same line", "neither"], "Both have slope −1/3.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: -1 / 3, b: 3, color: "blue", label: "P", lx: -4 }, { m: -1 / 3, b: -2, color: "red", label: "Q", lx: 3 }] })),
  num(String.raw`Line 1 goes through $(1,2)$ and $(4,8)$. Line 2 goes through $(0,5)$ and $(6,k)$ and is perpendicular to line 1. Find k.`, 2, "m₁ = 2, so m₂ = −1/2: k = 5 − 3."),
  mc(String.raw`Lines through $(0,0),(3,1)$ and through $(2,5),(5,6)$ are…`, "parallel", ["perpendicular", "the same line", "neither"], "Both slope 1/3; (2,5) is not on y = x/3."),
  mx(String.raw`Write the line perpendicular to $y=-\frac52x+1$ through $(5,3)$.`, "0.4*x+1", "Slope 2/5; 3 = 2 + b."),
  num(String.raw`What is the y-intercept of the line parallel to $y=\frac12x+6$ through $(-4,2)$?`, 4, "2 = −2 + b."),
  tf(String.raw`The line through $(1,1)$ and $(3,5)$ is perpendicular to the line through $(0,4)$ and $(4,2)$.`, true, "Slopes 2 and −1/2."),
  mc(String.raw`Which is perpendicular to $x=-2$?`, String.raw`$y=5$`, [String.raw`$x=5$`, String.raw`$y=x$`, String.raw`$y=-2x$`], "Vertical ⟂ horizontal."),
  num(`A ramp has slope 0.25. A brace is to meet it at a right angle. What is the brace's slope?`, -4, "Negative reciprocal."),
  ms(`Points A(0, 0), B(4, 2), C(3, 4). Which are true? Select all.`, ["AB has slope 1/2", "BC has slope −2", "AB ⟂ BC", "AC ∥ AB"], [0, 1, 2], "1/2 × (−2) = −1; AC has slope 4/3."),
  num(String.raw`What is the x-intercept of the line perpendicular to $y=x+4$ through $(2,6)$?`, 8, "y = −x + 8."),
  mx(String.raw`Write the line parallel to $y=-0.6x$ through $(10,-1)$.`, "-0.6*x+5", "−1 = −6 + b."),
  num(String.raw`$ax+2y-3=0$ is parallel to $y=4x$. Find a.`, -8, "Slope −a/2 = 4."),
];

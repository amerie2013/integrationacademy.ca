// 4.5 Graphing Special Lines (special lines and linear inequalities) — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  mc(String.raw`The graph of $y=-3$ is…`, "a horizontal line", ["a vertical line", "a line through the origin", "a curve"], "y is always −3."),
  mc(String.raw`The graph of $x=5$ is…`, "a vertical line", ["a horizontal line", "a line with slope 5", "a point"], "x is always 5."),
  num(String.raw`What is the slope of $y=8$?`, 0, "Horizontal: rise 0."),
  tf(String.raw`The slope of $x=-2$ is undefined.`, true, "Vertical: run 0."),
  mc(`Which line passes through the origin?`, String.raw`$y=-4x$`, [String.raw`$y=x-4$`, String.raw`$y=4$`, String.raw`$x=4$`], "b = 0."),
  mc(String.raw`The equation of the horizontal line through $(2,7)$ is…`, String.raw`$y=7$`, [String.raw`$x=2$`, String.raw`$y=2$`, String.raw`$x=7$`], "All points have y = 7."),
  mc(String.raw`The equation of the vertical line through $(2,7)$ is…`, String.raw`$x=2$`, [String.raw`$y=7$`, String.raw`$y=2x$`, String.raw`$x=7$`], "All points have x = 2."),
  tf(String.raw`$(3,5)$ is a solution of $y>x+1$.`, true, "5 > 4."),
  tf(String.raw`$(3,4)$ is a solution of $y>x+1$.`, false, "4 > 4 is false."),
  mc(String.raw`For $y<2x+1$, the boundary line is…`, "dashed", ["solid", "not drawn", "vertical"], "Strict inequality."),
  mc(String.raw`For $y\ge2x+1$, the boundary line is…`, "solid", ["dashed", "not drawn", "horizontal"], "Includes equality."),
  mc(String.raw`For $y>-x+3$, which side is shaded?`, "above the line", ["below the line", "on the line only", "to the left only"], "y > … shades above."),
  num(String.raw`Is $(0,0)$ a solution of $y\le3x+2$? Type 1 for yes, 0 for no.`, 1, "0 ≤ 2."),
  mc(`A thermostat keeps a room at 20 °C. The graph of temperature against time is…`, "a horizontal line", ["a vertical line", "a rising line", "a curve"], "T = 20."),
  num(`Grapes cost 3.50 dollars per kg. What is the cost of 4 kg (dollars)?`, 14, "C = 3.5k: direct variation."),
  tf(`A direct variation always passes through (0, 0).`, true, "b = 0."),
  mc(`Which shows the graph?`, String.raw`$y>x$`, [String.raw`$y<x$`, String.raw`$y\ge x$`, String.raw`$y=x$`], "Dashed line y = x, shaded above.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1, b: 0, dash: true }], shade: { m: 1, b: 0, above: true } })),
  num(String.raw`What is the y-intercept of $y=-6$?`, -6, "The line crosses the y-axis at −6."),
  tf(String.raw`$y=2$ and $x=2$ are perpendicular.`, true, "Horizontal and vertical."),
  mc(String.raw`Which point is on the line $x=-3$?`, String.raw`$(-3,10)$`, [String.raw`$(10,-3)$`, String.raw`$(3,-3)$`, String.raw`$(0,-3)$`], "x must be −3."),
];

export const M = [
  mc(String.raw`Which inequality describes the shaded region?`, String.raw`$y\le-2x+4$`, [String.raw`$y<-2x+4$`, String.raw`$y\ge-2x+4$`, String.raw`$y>-2x+4$`], "Solid line, shaded below.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: -2, b: 4 }], shade: { m: -2, b: 4, above: false } })),
  ms(String.raw`Which points satisfy $y\ge\frac12x-1$? Select all.`, ["(0, 0)", "(4, 1)", "(4, 0)", "(−2, −3)", "(6, 2)"], [0, 1, 4], "(4, 1): 1 ≥ 1 ✓; (4, 0): 0 ≥ 1 ✗; (−2, −3): −3 ≥ −2 ✗; (6, 2): 2 ≥ 2 ✓."),
  mc(String.raw`Rewrite $2x+y<6$ as an inequality in y.`, String.raw`$y<-2x+6$`, [String.raw`$y>-2x+6$`, String.raw`$y<2x+6$`, String.raw`$y<-2x-6$`], "Subtract 2x."),
  mc(String.raw`Rewrite $-y>3x-1$ as an inequality in y.`, String.raw`$y<-3x+1$`, [String.raw`$y>-3x+1$`, String.raw`$y<3x-1$`, String.raw`$y>3x+1$`], "Multiply by −1 and flip."),
  num(String.raw`Tickets cost 8 dollars and snacks 3 dollars; $8t+3s\le60$. With 6 tickets, how many snacks at most?`, 4, "48 + 3s ≤ 60 → s ≤ 4."),
  tf(String.raw`Points on a dashed boundary line are solutions of the inequality.`, false, "Dashed means not included."),
  num(String.raw`The region $x>-1$ and $x<4$ contains how many integer x-values?`, 4, "0, 1, 2, 3."),
  mc(`Which equation describes all points 3 units below the x-axis?`, String.raw`$y=-3$`, [String.raw`$x=-3$`, String.raw`$y=3$`, String.raw`$y=-3x$`], "Every point has y = −3."),
  num(String.raw`The lines $x=4$, $x=-2$, $y=1$ and $y=6$ form a rectangle. What is its area?`, 30, "6 × 5."),
  num(`For the same rectangle (x = 4, x = −2, y = 1, y = 6), what is its perimeter?`, 22, "2(6 + 5)."),
  ms(String.raw`Which describe $y=-\frac25x$? Select all.`, ["direct variation", "passes through (5, −2)", "falls to the right", "horizontal", "y-intercept 2"], [0, 1, 2], "b = 0, slope −2/5."),
  mc(String.raw`A budget: $5x+2y\le40$. Which is NOT possible?`, "x = 6, y = 6", ["x = 4, y = 10", "x = 0, y = 20", "x = 8, y = 0"], "30 + 12 = 42 > 40."),
  num(String.raw`What is the x-intercept of the boundary of $3x+4y\le24$?`, 8, "y = 0: 3x = 24."),
  num(String.raw`What is the y-intercept of the boundary of $3x+4y\le24$?`, 6, "x = 0: 4y = 24."),
  tf(String.raw`$(0,0)$ can be used as the test point for $y>3x$.`, false, "(0, 0) lies on the boundary; choose another point."),
  mc(String.raw`For $y<-1$, the shaded region is…`, "below the horizontal line y = −1", ["above y = −1", "left of x = −1", "right of x = −1"], "Below a horizontal dashed line."),
  num(`Gas costs 1.70 dollars per litre. How many litres can you buy with 51 dollars?`, 30, "1.7L = 51."),
  mc(String.raw`Which inequality has the boundary $y=x+2$ drawn solid and the region above shaded?`, String.raw`$y\ge x+2$`, [String.raw`$y>x+2$`, String.raw`$y\le x+2$`, String.raw`$y<x+2$`], "Solid: ≥ or ≤; above: ≥."),
  num(String.raw`How many of the points $(1,1)$, $(2,5)$, $(-1,0)$, $(3,4)$ satisfy $y>2x-1$?`, 2, "(1,1): 1 > 1 ✗; (2,5) ✓; (−1,0) ✓; (3,4): 4 > 5 ✗."),
  ms(`Which lines are perpendicular to y = 4? Select all.`, ["x = −1", "x = 7", "y = −4", "y = 4x"], [0, 1], "Vertical lines."),
];

// 4.8 General Form vs Slope-Intercept Form — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "4.8 General Form vs Slope-Intercept Form";
export const Q = [
  num(String.raw`The line $kx+3y-12=0$ passes through $(2,6)$. Find k.`, -3, "2k + 18 − 12 = 0."),
  num(String.raw`The line $2x+By+C=0$ has x-intercept $5$ and y-intercept $-2$. What is B?`, -5, "x-int: 2(5) + C = 0 → C = −10; y-int: −2B − 10 = 0 → B = −5."),
  mx(String.raw`Write $\frac{x}{3}+\frac{y}{4}=1$ in slope-intercept form.`, "(-4/3)*x+4", "×12: 4x + 3y = 12."),
  num(String.raw`Find the area of the triangle formed by $4x-3y+24=0$ and the axes.`, 24, "Intercepts −6 and 8: ½ × 6 × 8."),
  ms(String.raw`Which lines are parallel to $6x-3y+2=0$? Select all.`, [String.raw`$2x-y+7=0$`, String.raw`$y=2x-1$`, String.raw`$4x+2y-1=0$`, String.raw`$x-\frac12y=0$`, String.raw`$y=-2x$`], [0, 1, 3], "Slope 2."),
  num(`Adult passes cost 25 dollars and youth passes 15 dollars; total sales 1400 dollars. If 3 times as many youth as adult passes were sold, how many adult passes?`, 20, "25a + 15(3a) = 1400 → 70a = 1400."),
  num(`Rewrite 0.2x − 0.5y + 1.5 = 0 with integer coefficients and A > 0 in lowest terms: Ax + By + C = 0. What is C?`, 15, "×10: 2x − 5y + 15 = 0."),
  mc(`Which form makes it quickest to find both intercepts?`, "general form Ax + By + C = 0", ["slope-intercept form", "a table starting at x = 1", "a list of slopes"], "Set x = 0 or y = 0 directly."),
  num(String.raw`The line $Ax-4y+8=0$ is parallel to $y=\frac34x$. Find A.`, 3, "A/4 = 3/4."),
  num(String.raw`For which value of C does $3x+2y+C=0$ pass through $(-2,5)$?`, -4, "−6 + 10 + C = 0."),
  tf(String.raw`If $C=0$ in $Ax+By+C=0$, the line passes through the origin.`, true, "(0, 0) gives 0 = 0."),
  num(String.raw`The line $x-2y+k=0$ has y-intercept $3$. What is its x-intercept?`, -6, "x = 0: −6 + k = 0 → k = 6; y = 0: x = −6."),
  mx(String.raw`Write in slope-intercept form the line in general form $5x+4y-2=0$.`, "-1.25*x+0.5", "4y = −5x + 2."),
  num(`A bakery uses 2 cups of flour per loaf and 1.5 cups per batch of muffins, with 60 cups available: 2l + 1.5m = 60. What is the m-intercept?`, 40, "1.5m = 60."),
  ms(`The graph shows a line. Which are true? Select all.`, ["its general form is 3x + 2y − 12 = 0", "its slope is −1.5", "it passes through (2, 3)", "its x-intercept is 6"], [0, 1, 2], "Intercepts (4, 0) and (0, 6); x-intercept 4.", planeDoc({ view: { xmin: -2, xmax: 7, ymin: -2, ymax: 8 }, lines: [{ m: -1.5, b: 6 }], points: [{ x: 4, y: 0 }, { x: 0, y: 6 }], step: { x: 1, y: 1 } })),
  num(String.raw`Find the distance between the x-intercept and y-intercept of $3x+4y-24=0$.`, 10, "(8, 0) and (0, 6): √(64 + 36)."),
  mc(String.raw`Which equation cannot be written as $y=mx+b$?`, String.raw`$4x-12=0$`, [String.raw`$4y-12=0$`, String.raw`$x+y=0$`, String.raw`$2x-y+1=0$`], "x = 3 is vertical."),
  num(String.raw`Two lines $2x+y-7=0$ and $x-y-2=0$ intersect. What is the x-coordinate?`, 3, "Add: 3x − 9 = 0."),
  num(String.raw`What is the y-coordinate of that intersection ($2x+y-7=0$ and $x-y-2=0$)?`, 1, "y = x − 2."),
  tf(String.raw`$y=-\frac{A}{B}x-\frac{C}{B}$ is the slope-intercept form of $Ax+By+C=0$ (B ≠ 0).`, true, "Solve for y."),
];

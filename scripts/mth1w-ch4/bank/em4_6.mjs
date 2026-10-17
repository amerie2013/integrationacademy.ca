// 4.6 Transformations of Lines — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  mc(String.raw`How is $y=x+6$ related to $y=x$?`, "translated up 6", ["translated down 6", "rotated, steeper", "reflected"], "b: 0 → 6."),
  mc(String.raw`How is $y=x-4$ related to $y=x$?`, "translated down 4", ["translated up 4", "rotated", "reflected"], "b: 0 → −4."),
  mc(String.raw`How is $y=3x$ related to $y=x$?`, "steeper (rotated about the origin)", ["translated up 3", "flatter", "reflected"], "m: 1 → 3."),
  mc(String.raw`How is $y=-x$ related to $y=x$?`, "reflected in the y-axis", ["translated down", "steeper", "the same line"], "The sign of m changes."),
  tf(`Changing b in y = mx + b changes the slope.`, false, "Only the intercept changes."),
  tf(`Changing m keeps the y-intercept the same.`, true, "The line rotates about (0, b)."),
  mx(String.raw`Translate $y=2x+1$ up $5$. Write the new equation.`, "2*x+6", "b: 1 → 6."),
  mx(String.raw`Translate $y=-3x+2$ down $7$. Write the new equation.`, "-3*x-5", "b: 2 → −5."),
  num(String.raw`$y=4x-1$ is translated up 3. What is the new y-intercept?`, 2, "−1 + 3."),
  mc(`Which line is parallel to y = 5x − 2?`, String.raw`$y=5x+9$`, [String.raw`$y=-5x-2$`, String.raw`$y=2x+5$`, String.raw`$y=\tfrac15x$`], "Same slope."),
  mc(`Which change makes y = 2x + 3 flatter?`, "change 2 to 0.5", ["change 2 to 4", "change 3 to 0", "change 2 to −2"], "Smaller |m|."),
  tf(String.raw`$y=-6x$ is steeper than $y=4x$.`, true, "|−6| > |4|."),
  mx(String.raw`Reflect $y=3x+1$ in the y-axis.`, "-3*x+1", "m → −m."),
  num(String.raw`A line $y=mx$ is rotated about the origin to pass through $(2,10)$. What is the new m?`, 5, "10 ÷ 2."),
  mc(`Two lines share the y-intercept 4. They differ in…`, "slope", ["y-intercept", "nothing", "both"], "Same b, different m."),
  mc(String.raw`Which line is a translation of $y=-2x$?`, String.raw`$y=-2x+3$`, [String.raw`$y=2x$`, String.raw`$y=-3x$`, String.raw`$y=-2$`], "Same slope."),
  num(String.raw`$y=x$ is changed to $y=x+b$ and passes through $(3,7)$. Find b.`, 4, "7 = 3 + b."),
  tf(`A fixed fee increase moves a cost graph up.`, true, "b increases."),
  tf(`A higher price per item makes a cost graph flatter.`, false, "A larger rate makes it steeper."),
  mc(`The slope of a line changes from 2 to −2. The line is…`, "reflected", ["translated", "unchanged", "made horizontal"], "Sign change."),
];

export const M = [
  mx(String.raw`Write the line with the same slope as $y=-\frac12x+4$ and y-intercept $-1$.`, "-0.5*x-1", "Keep m, change b."),
  mc(String.raw`Describe $y=-2x+3$ compared with $y=x$.`, "steeper, reflected and translated up 3", ["flatter and translated up 3", "steeper and translated down 3", "only translated up 3"], "|m| 1 → 2, sign changes, b 0 → 3."),
  num(String.raw`The line $y=mx+2$ passes through $(4,-6)$. Find m.`, -2, "−6 = 4m + 2."),
  ms(String.raw`Which lines are in the same family as $y=3x-4$ (parallel)? Select all.`, [String.raw`$y=3x$`, String.raw`$6x-2y=1$`, String.raw`$y=-3x-4$`, String.raw`$y=3x+10$`, String.raw`$y=\tfrac13x-4$`], [0, 1, 3], "Slope 3 (the second is y = 3x − 0.5)."),
  ms(String.raw`Which lines share the y-intercept of $y=2x-5$? Select all.`, [String.raw`$y=-x-5$`, String.raw`$y=7x-5$`, String.raw`$y=2x+5$`, String.raw`$y=-5$`], [0, 1, 3], "b = −5."),
  num(String.raw`A taxi fare changes from $C=2d+4$ to $C=2d+6$. How much more does a 9-km ride cost (dollars)?`, 2, "Only the fee changed."),
  num(String.raw`A fare changes from $C=2d+4$ to $C=2.5d+4$. How much more does a 9-km ride cost (dollars)?`, 4.5, "0.5 × 9.", null, 0.001),
  mc(`The graph shows y = x (gray) and another line. Which equation is the other line?`, String.raw`$y=x-3$`, [String.raw`$y=x+3$`, String.raw`$y=3x$`, String.raw`$y=-x-3$`], "Parallel, crossing the y-axis at −3.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1, b: 0, color: "gray" }, { m: 1, b: -3, color: "blue" }] })),
  tf(String.raw`Translating $y=2x+1$ up 4 gives the same line as translating it left 2.`, true, "y = 2(x + 2) + 1 = 2x + 5."),
  num(String.raw`$y=-x+8$ is translated down until it passes through the origin. By how many units?`, 8, "b: 8 → 0."),
  num(String.raw`The line $y=\frac12x+b$ passes through $(-4,3)$. Find b.`, 5, "3 = −2 + b."),
  mc(`A phone plan's monthly fee drops but the per-minute price is unchanged. The graph…`, "moves down (parallel)", ["becomes steeper", "becomes flatter", "is reflected"], "Only b changes."),
  num(String.raw`What is the x-intercept of $y=2x-6$ after it is translated up 4?`, 1, "y = 2x − 2 → x = 1."),
  mx(String.raw`Rotate $y=x+3$ about its y-intercept so that its slope becomes $-4$.`, "-4*x+3", "Keep b = 3."),
  mc(`Which pair are reflections of each other in the y-axis?`, String.raw`$y=\frac23x+1$ and $y=-\frac23x+1$`, [String.raw`$y=\frac23x+1$ and $y=\frac23x-1$`, String.raw`$y=\frac23x$ and $y=\frac32x$`, String.raw`$y=x$ and $y=x+1$`], "Opposite slopes, same intercept."),
  num(String.raw`A cost model $C=15n+40$ changes to $C=15n+55$. For 10 items, what is the new cost (dollars)?`, 205, "150 + 55."),
  ms(`A line's slope doubles and its y-intercept is unchanged. Which are true? Select all.`, ["it is steeper", "it still crosses the y-axis at the same point", "it is parallel to the original", "its x-intercept moves (if b ≠ 0)"], [0, 1, 3], "Doubling m changes direction, so it is not parallel."),
  num(String.raw`The line $y=-3x+6$ is rotated about its y-intercept to pass through $(2,10)$. What is the new slope?`, 2, "(10 − 6) ÷ 2."),
  tf(`Two parallel lines can have different y-intercepts.`, true, "Same slope, different b."),
  num(String.raw`$y=4x+b$ is parallel to and 7 units above $y=4x-2$. Find b.`, 5, "−2 + 7."),
];

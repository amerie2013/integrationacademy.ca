// 4.6 Transformations of Lines — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "4.6 Transformations of Lines";
export const Q = [
  num(String.raw`The line $y=2x+1$ is translated so that it passes through $(5,4)$. What is the new y-intercept?`, -6, "Keep m = 2: 4 = 10 + b."),
  num(String.raw`$y=-x+4$ is reflected in the y-axis, then translated down 6. What is the x-intercept of the result?`, 2, "Reflect: y = x + 4; down 6: y = x − 2 → x = 2."),
  mc(`The family y = mx + 4 is drawn for m = −2, −1, 0, 1, 2. Which statement is true?`, "all five lines pass through (0, 4)", ["all five are parallel", "none crosses the x-axis", "they all have x-intercept −4"], "They share b = 4."),
  num(String.raw`For which slope m does $y=mx+4$ have x-intercept $8$?`, -0.5, "0 = 8m + 4.", null, 0.001),
  ms(String.raw`Starting from $y=x$, which single changes produce a line through $(2,8)$? Select all.`, [String.raw`translate up 6`, String.raw`rotate to slope 4`, String.raw`translate up 8`, String.raw`rotate to slope 3 and translate up 2`, String.raw`reflect`], [0, 1, 3], "y = x + 6, y = 4x and y = 3x + 2 all pass through (2, 8)."),
  num(`A gym's fee rises from 30 to 45 dollars and its monthly rate falls from 25 to 22 dollars. After how many months is the new plan cheaper than the old one?`, 6, "45 + 22m < 30 + 25m → 15 < 3m → m > 5, so from 6 months."),
  mx(String.raw`Line $L$ is parallel to $y=-\frac34x+1$ and passes through $(8,-2)$. Write its equation.`, "-0.75*x+4", "−2 = −6 + b → b = 4."),
  num(String.raw`The vertical distance between parallel lines $y=3x+7$ and $y=3x-5$ is how many units?`, 12, "7 − (−5)."),
  tf(String.raw`Rotating a line about its y-intercept can change its x-intercept but never its y-intercept.`, true, "The y-intercept is the pivot."),
  num(String.raw`$y=mx-3$ passes through $(-2,5)$. What is the slope?`, -4, "5 = −2m − 3."),
  mc(`Which pair of transformations takes y = 2x − 1 to y = −2x + 3?`, "reflect in the y-axis, then translate up 4", ["translate up 4 only", "rotate to slope −2 only", "reflect, then translate down 4"], "Reflect: −2x − 1; up 4: −2x + 3."),
  num(`A taxi charges C = 2.2d + 4. A new rule doubles the per-km rate and halves the flag fee. For how many km do the old and new fares match?`, 0.9091, "2.2d + 4 = 4.4d + 2 → 2.2d = 2 → d ≈ 0.909.", null, 0.001),
  ms(`The graph shows lines A, B, C. Which are true? Select all.`, ["A and B are parallel", "B and C share a y-intercept", "C is steeper than A", "A is a translation of y = x"], [0, 1, 3], "A: y = x + 2; B: y = x − 1; C: y = −0.5x − 1. |−0.5| < 1, so C is not steeper.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1, b: 2, color: "blue", label: "A", lx: 2.5 }, { m: 1, b: -1, color: "red", label: "B", lx: 4 }, { m: -0.5, b: -1, color: "green", label: "C", lx: -5 }] })),
  num(String.raw`The line $y=\frac25x+b$ is translated until its x-intercept is $-10$. What is b?`, 4, "0 = −4 + b."),
  mx(String.raw`$y=3x-6$ is rotated about its x-intercept so that its slope becomes $-1$. Write the new equation.`, "-x+2", "x-intercept (2, 0): y = −(x − 2)."),
  num(`A phone plan C = 0.05t + 20 changes to C = 0.08t + 14. Below how many texts is the new plan cheaper?`, 200, "0.08t + 14 < 0.05t + 20 → t < 200."),
  tf(`Every line y = mx + b with m ≠ 0 can be obtained from y = x by a rotation followed by a translation.`, true, "Rotate to slope m, translate to intercept b."),
  num(String.raw`$y=-2x+b$ forms, with the axes, a triangle of area 25 (in the first quadrant). Find b.`, 10, "Intercepts b and b/2: ½ · b · b/2 = 25 → b² = 100."),
  num(String.raw`How far (vertically) must $y=\frac12x-3$ be translated to pass through $(6,5)$?`, 5, "At x = 6 it gives 0; up 5."),
  mc(`A cost graph C = 12n + 30 is redrawn as C = 12n + 30 after the price per item rises. What went wrong?`, "the slope (12) should have increased", ["the intercept should have decreased", "nothing — the graph is correct", "the line should be horizontal"], "A higher price per item means a larger m."),
];

// 1.5 Transformations of Quadratic Functions — 20 hard questions
import { mc, ms, num, tf, mx } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;
const P0 = { f: (x) => x * x, color: "gray" };

export const TOPIC = "1.5 Transformations of Quadratic Functions";
export const Q = [
  num(S`$y=(x-h)^2$ passes through $(2,\,25)$ and $(12,\,25)$. Enter $h$.`, 7, "Axis midway: (2 + 12)/2."),
  num(S`$y=a(x-3)^2$ passes through $(5,\,-12)$. Enter $a$.`, -3, "4a = −12."),
  num(S`$y=ax^2$ passes through $(-6,\,9)$. Enter $a$ as a decimal.`, 0.25, "36a = 9.", null, 1e-9),
  num(S`$y=x^2+k$ and $y=-x^2+7$ meet when $x=\pm1$. Enter $k$.`, 5, "1 + k = −1 + 7."),
  num(S`$y=x^2+k$ touches $y=2x$ at exactly one point. Enter $k$.`, 1, "x² − 2x + k = 0 has one root when k = 1: (x − 1)² = 0."),
  mc(S`The image of $(3,\,9)$ under some transformation of $y=x^2$ is $(3,\,-27)$, and the vertex does not move. Which equation?`, S`$y=-3x^2$`, [S`$y=x^2-36$`, S`$y=-x^2-18$`, S`$y=(x-3)^2-27$`], "a · 9 = −27; vertex fixed means only a changes."),
  mc(S`The image of $(3,\,9)$ under a translation of $y=x^2$ is $(3,\,-27)$. Which equation?`, S`$y=x^2-36$`, [S`$y=-3x^2$`, S`$y=(x-36)^2$`, S`$y=x^2-27$`], "Translation down 36."),
  ms(S`Select every transformation that does NOT move the vertex of $y=x^2$.`, ["a vertical stretch", "a reflection in the x-axis", "a translation up 2", "a vertical compression", "a translation right 1"], [0, 1, 3], "a only multiplies y; (0, 0) stays."),
  tf(S`For $y=x^2$, a vertical stretch by $9$ gives the same graph as a horizontal compression by $\frac13$.`, true, "9x² = (3x)²."),
  num(S`The parabola $y=(x-h)^2$ has $y$-intercept $36$ and $h<0$. Enter $h$.`, -6, "h² = 36 with h < 0."),
  num(S`The vertex of $y=x^2+k$ is $5$ units below the $x$-axis. Enter the distance between its $x$-intercepts as a decimal (two places).`, 4.47, "x = ±√5; distance 2√5 ≈ 4.47.", null, 0.01),
  mc("The red parabola is a single transformation of y = x² (grey). What is it?", "a translation 3 units left", ["a translation 3 units right", "a stretch by 3", "a translation 3 units up"], "The vertex moved from (0, 0) to (−3, 0); the shape is unchanged.", planeDoc({ view: { xmin: -7, xmax: 3, ymin: -1, ymax: 9 }, curves: [P0, { f: (x) => (x + 3) ** 2, color: "red" }] })),
  mc("The red parabola is y = ax². Use the marked point to find a.", S`$a=-\tfrac14$`, [S`$a=-4$`, S`$a=4$`, S`$a=\tfrac14$`], "−4 = a(4)² ⇒ a = −¼.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -8, ymax: 2 }, curves: [{ f: (x) => -0.25 * x * x, color: "red" }], points: [{ x: 4, y: -4, label: "(4, −4)", color: "amber" }] })),
  mc("Which parabola in the figure is y = 2x²?", "the narrowest one (blue)", ["the widest one (green)", "the grey one", "none of them"], "Stretch by 2 is narrower than y = x².", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 9 }, curves: [P0, { f: (x) => 2 * x * x, color: "blue" }, { f: (x) => 0.5 * x * x, color: "green" }] })),
  num(S`A parabola $y=a x^2$ passes through $(2,\,p)$ and $(6,\,45)$. Enter $p$.`, 5, "36a = 45 ⇒ a = 1.25; p = 4a."),
  mx(S`$y=x^2$ is reflected in the $x$-axis and then translated 4 units up. Write the equation.`, "-x^2+4", "Reflect: −x²; up 4."),
  mx(S`$y=x^2$ is translated 4 units up and THEN reflected in the $x$-axis. Write the equation.`, "-x^2-4", "x² + 4, then negate every output: −x² − 4."),
  num(S`For $y=(x-h)^2$, the image of $(-1,\,1)$ is $(6,\,1)$. Enter $h$.`, 7, "−1 + h = 6."),
  tf(S`$y=(x-5)^2$ and $y=(5-x)^2$ are the same function.`, true, "(5 − x)² = (x − 5)²."),
  num(S`A satellite dish has cross-section $y=ax^2$; it is $1.8$ m wide and $0.27$ m deep. Enter $a$ to two decimals.`, 0.33, "Edge (0.9, 0.27): 0.81a = 0.27 ⇒ a = 1/3.", planeDoc({ view: { xmin: -1.2, xmax: 1.2, ymin: -0.1, ymax: 0.4 }, curves: [{ f: (x) => x * x / 3, a: -0.9, b: 0.9, color: "violet" }], points: [{ x: 0.9, y: 0.27, label: "(0.9, 0.27)", color: "amber" }], step: { x: 0.3, y: 0.1 } }), 0.01),
];

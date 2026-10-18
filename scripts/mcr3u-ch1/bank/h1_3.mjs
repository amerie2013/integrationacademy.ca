// 1.3 Parent Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P, PAR } from "./fig.mjs";

export const TOPIC = "1.3 Parent Functions";
export const Q = [
  num(String.raw`Find the positive solution of $\sqrt x=\frac x3$.`, 9, "x = x²/9 → x(x − 9) = 0."),
  num(String.raw`How many real solutions does $\frac1x=-x$ have?`, 0, "x² = −1 has no real solution."),
  num(String.raw`Solve $|x|=2x-3$.`, 3, "x ≥ 0: x = 3 ✓. x < 0: −x = 2x − 3 → x = 1, not negative."),
  ms(String.raw`Where is $x^2<x$? Select all that apply.`, [String.raw`$x<0$`, String.raw`$0<x<1$`, String.raw`$x>1$`, String.raw`$x=1$`], [1], "Squaring makes numbers between 0 and 1 smaller."),
  num(String.raw`For how many integers $n$ from 1 to 10 is $\sqrt n>\frac{n^2}{10}$?`, 4, "n = 1, 2, 3, 4 (at n = 5: 2.24 < 2.5).", planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 4 }, curves: [PAR.sqrt, { f: (x) => (x * x) / 10, color: "blue" }], step: { x: 1, y: 1 } })),
  num(String.raw`$f(x)=\frac1x$. Find $f(4)-f(5)$.`, 0.05, "1/4 − 1/5 = 1/20.", null, 0.0001),
  tf(String.raw`For every $x>1$: $\sqrt x<x<x^2$.`, true, "e.g. x = 4: 2 < 4 < 16."),
  num(String.raw`$y=\frac1x$ and $y=-x+\frac52$ meet twice. Find the sum of the x-coordinates.`, 2.5, "x + 1/x = 5/2 → 2x² − 5x + 2 = 0 → x = 2, 0.5.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 4 }, curves: [PAR.recip], lines: [{ m: -1, b: 2.5, color: "violet" }], points: [P(2, 0.5), P(0.5, 2)] }), 0.001),
  mc(String.raw`Besides $y=x$, which parent is its own inverse?`, String.raw`$\frac1x$`, [String.raw`$x^2$`, String.raw`$\sqrt x$`, String.raw`$|x|$`], "Swap x and y in y = 1/x: x = 1/y → y = 1/x."),
  num(String.raw`How many of the five parents satisfy $f(f(x))=x$ for every $x$ in their domain?`, 2, "x and 1/x."),
  num(String.raw`What is the largest $x$ with $|x|\le\sqrt x$?`, 1, "For x ≥ 0: x ≤ √x ⇔ 0 ≤ x ≤ 1."),
  num(String.raw`Find the positive solution of $x^2=8\sqrt x$.`, 4, "x⁴ = 64x → x³ = 64."),
  mc("The marked points on y = 1/x are mirror images in which line?", String.raw`$y=x$`, [String.raw`$y=-x$`, "the x-axis", "the y-axis"], "(0.25, 4) and (4, 0.25) have swapped coordinates.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, curves: [PAR.recip], lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [P(0.25, 4), P(4, 0.25)] })),
  num(String.raw`Find the average rate of change of $x^2$ from $x=1$ to $x=4$.`, 5, "(16 − 1) ÷ 3."),
  num(String.raw`Find the average rate of change of $\sqrt x$ from $x=0$ to $x=9$.`, 0.3333, "3 ÷ 9.", null, 0.002),
  tf(String.raw`For $0<a<b$, the average rate of change of $\frac1x$ from $a$ to $b$ is negative.`, true, "1/b < 1/a."),
  ms("Which parents are one-to-one? Select all.", [String.raw`$x$`, String.raw`$x^2$`, String.raw`$\sqrt x$`, String.raw`$\frac1x$`, String.raw`$|x|$`], [0, 2, 3], "x² and |x| send x and −x to the same output."),
  num(String.raw`Find the distance between $(4,2)$ and $(9,3)$ on $y=\sqrt x$ (2 decimals).`, 5.099, "√(25 + 1).", null, 0.006),
  num("A rectangle has one corner at the origin and the opposite corner on y = 1/x at x = 2.5. What is its area?", 1, "2.5 × 0.4 — every such rectangle has area 1.", planeDoc({ view: { xmin: -0.5, xmax: 4, ymin: -0.5, ymax: 4 }, curves: [PAR.recip], segs: [{ pts: [[0, 0], [2.5, 0], [2.5, 0.4], [0, 0.4], [0, 0]], color: "green" }], points: [P(2.5, 0.4)], step: { x: 0.5, y: 0.5 } })),
  mc(String.raw`For $x<0$, which statement is true?`, String.raw`$\frac1x$ is negative and $x^2$ is positive`, [String.raw`both are negative`, String.raw`both are positive`, String.raw`$\frac1x$ is positive and $x^2$ is negative`], "Dividing 1 by a negative gives a negative; squares are positive."),
];

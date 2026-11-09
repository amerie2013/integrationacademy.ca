// 4.3 The Quadratic Formula — 20 hard questions (values computed)
import { mc, ms, num, tf } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;
const r2 = (v) => Math.round(v * 100) / 100;

export const TOPIC = "4.3 The Quadratic Formula";
export const Q = [
  num(S`Solve $0.3x^2-1.2x-2=0$; enter the positive root (two decimals).`, r2((1.2 + Math.sqrt(1.44 + 2.4)) / 0.6), "D = 1.44 + 2.4 = 3.84.", null, 0.011),
  num(S`Solve $(2x-1)(x+3)=4$; enter the positive root (two decimals).`, r2((-5 + Math.sqrt(81)) / 4), "2x² + 5x − 7 = 0: D = 81 ⇒ x = 1.", null, 0.011),
  num(S`Solve $x^2+6x+4=0$; enter the larger root (two decimals).`, r2(-3 + Math.sqrt(5)), "−3 ± √5.", null, 0.011),
  num(S`The roots of $x^2+bx+c=0$ are $2\pm\sqrt5$. Enter $c$.`, -1, "(2 + √5)(2 − √5) = 4 − 5."),
  num(S`The roots of $x^2+bx+c=0$ are $2\pm\sqrt5$. Enter $b$.`, -4, "Sum of roots 4 = −b."),
  num(S`$h(t)=-5t^2+18t+2$. Enter the landing time (two decimals).`, r2((18 + Math.sqrt(364)) / 10), "D = 324 + 40.", planeDoc({ view: { xmin: -0.3, xmax: 4.2, ymin: -1, ymax: 20 }, curves: [{ f: (t) => -5 * t * t + 18 * t + 2, a: 0, b: 3.71, color: "violet" }], step: { x: 0.5, y: 2 }, xlabel: "t", ylabel: "h" }), 0.011),
  num(S`For $h(t)=-5t^2+18t+2$, enter the earlier time (two decimals) at which $h=15$.`, r2((18 - Math.sqrt(64)) / 10), "−5t² + 18t − 13 = 0: D = 324 − 260 = 64.", null, 0.011),
  num(S`$P=24I-1.5I^2$. Enter the smaller current (A) for which $P=60$ W (two decimals).`, r2((24 - Math.sqrt(576 - 360)) / 3), "1.5I² − 24I + 60 = 0: D = 576 − 360 = 216.", planeDoc({ view: { xmin: -1, xmax: 17, ymin: -5, ymax: 105 }, curves: [{ f: (i) => 24 * i - 1.5 * i * i, a: 0, b: 16, color: "violet" }], lines: [{ m: 0, b: 60, color: "green", dash: true }], step: { x: 2, y: 10 }, xlabel: "I", ylabel: "P" }), 0.011),
  num(S`A rectangle's length is $3$ m more than its width and its area is $20$ m². Enter the width (two decimals).`, r2((-3 + Math.sqrt(89)) / 2), "w² + 3w − 20 = 0.", null, 0.011),
  num(S`A right triangle's legs are $x$ and $x+2$; its hypotenuse is $6$. Enter $x$ (two decimals).`, r2((-2 + Math.sqrt(4 + 64)) / 2), "2x² + 4x − 32 = 0 ⇒ x² + 2x − 16 = 0.", null, 0.011),
  ms(S`Select every statement that is true for $3x^2-5x-1=0$.`, [S`$D=37$`, S`the roots are $\frac{5\pm\sqrt{37}}6$`, "the roots are rational", "one root is negative"], [0, 1, 3], "√37 is irrational; (5 − 6.08)/6 < 0."),
  mc(S`What is the simplified form of $\frac{6\pm\sqrt{48}}{6}$?`, S`$1\pm\frac{2\sqrt3}3$`, [S`$1\pm\sqrt8$`, S`$6\pm4\sqrt3$`, S`$1\pm4\sqrt3$`], "√48 = 4√3; divide each term by 6."),
  mc("The graph shows y = x² + x − 3 and y = 2x. Where do they meet (two decimals)?", S`$x\approx2.30$ and $x\approx-1.30$`, [S`$x\approx1.30$ and $x\approx-2.30$`, S`$x=3$ and $x=-1$`, "they do not meet"], "x² − x − 3 = 0.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -5, ymax: 10 }, curves: [{ f: (x) => x * x + x - 3, color: "violet" }], lines: [{ m: 2, b: 0, color: "blue" }], step: { x: 1, y: 2 } })),
  mc("The graph shows y = −2x² + 3x + 4. What are its zeros (two decimals)?", S`$2.35$ and $-0.85$`, [S`$0.85$ and $-2.35$`, S`$2$ and $-1$`, S`$3$ and $-1$`], "(−3 ± √41)/(−4).", planeDoc({ view: { xmin: -2, xmax: 3.5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => -2 * x * x + 3 * x + 4, color: "violet" }], step: { x: 1, y: 1 } })),
  tf(S`If $a$ and $c$ have opposite signs, $ax^2+bx+c=0$ always has two real roots.`, true, "−4ac > 0, so D > 0."),
  num(S`Solve $\tfrac{x^2}{4}-x-2=0$; enter the larger root (two decimals).`, r2(2 + Math.sqrt(12)), "x² − 4x − 8 = 0: 2 ± √12.", null, 0.011),
  num(S`The product of two consecutive positive numbers (differing by 1) is $10$. Enter the smaller (two decimals).`, r2((-1 + Math.sqrt(41)) / 2), "n² + n − 10 = 0.", null, 0.011),
  num(S`For $2x^2+kx-3=0$, one root is $1.5$. Enter the other root.`, -1, "k: 4.5 + 1.5k − 3 = 0 ⇒ k = −1; product of roots −1.5."),
  tf(S`$x=\frac{-b}{2a}$ is the average of the two roots from the formula.`, true, "The ± parts cancel."),
  num(S`A ball thrown from $1.5$ m: $h=-4.9t^2+12t+1.5$. Enter its landing time (two decimals).`, r2((12 + Math.sqrt(144 + 29.4)) / 9.8), "D = 144 + 29.4.", null, 0.011),
];

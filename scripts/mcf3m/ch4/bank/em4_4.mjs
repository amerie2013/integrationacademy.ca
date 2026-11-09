// 4.4 The Discriminant and the Number of Roots — 20 easy + 20 medium (D computed)
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;
const P = (a, b, c) => `${a === 1 ? "" : a === -1 ? "-" : a}x^2${b === 0 ? "" : b < 0 ? (b === -1 ? "-" : b) + "x" : "+" + (b === 1 ? "" : b) + "x"}${c === 0 ? "" : c < 0 ? c : "+" + c}`;
const D = (a, b, c) => b * b - 4 * a * c;
const nr = (a, b, c) => num(S`How many real roots does $${P(a, b, c)}=0$ have?`, D(a, b, c) > 0 ? 2 : D(a, b, c) === 0 ? 1 : 0, `D = ${D(a, b, c)}.`);
const dq = (a, b, c) => num(S`Enter the discriminant of $${P(a, b, c)}=0$.`, D(a, b, c), "b² − 4ac.");

export const E = [
  dq(1, 4, 3), dq(1, -6, 9), dq(2, 3, 5), dq(1, 0, -16), dq(3, -1, -2),
  nr(1, 2, -8), nr(1, 8, 16), nr(1, 1, 1), nr(2, -4, 2), nr(-1, 3, 4), nr(5, 0, 2),
  mc(S`If $D>0$, the graph of $y=ax^2+bx+c$ …`, "crosses the x-axis twice", ["touches the x-axis once", "misses the x-axis", "is a line"], "Two roots."),
  mc(S`If $D=0$, the equation has …`, "one real root", ["two real roots", "no real roots", "infinitely many roots"], "A double root."),
  tf(S`If $D<0$, the parabola does not meet the $x$-axis.`, true, "No real roots."),
  tf(S`$D=b^2+4ac$.`, false, "D = b² − 4ac."),
  fill(S`For $x^2-10x+25=0$, $D=$ ____.`, ["0"], "100 − 100."),
  mc("The graph of y = ax² + bx + c is shown. What can you say about D?", S`$D<0$`, [S`$D>0$`, S`$D=0$`, "cannot tell"], "It misses the x-axis.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 8 }, curves: [{ f: (x) => x * x + 2, color: "violet" }] })),
  mc("This parabola touches the x-axis at (2, 0). What is the value of its discriminant?", S`$D=0$`, [S`$D>0$`, S`$D<0$`, "cannot tell"], "It touches the x-axis once.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => (x - 2) ** 2, color: "violet" }], points: [{ x: 2, y: 0, label: "(2, 0)", color: "amber" }] })),
  num(S`For which $c$ does $x^2+6x+c=0$ have exactly one root?`, 9, "36 − 4c = 0."),
  dq(1, 7, 10),
];

export const M = [
  dq(-2, 5, 3), dq(4, -12, 9), dq(0.5, 2, 3),
  nr(3, -7, 5), nr(-2, 3, 6), nr(4, 20, 25), nr(0.25, -1, 1),
  num(S`Enter the positive $k$ for which $x^2+kx+9=0$ has one root.`, 6, "k² − 36 = 0."),
  num(S`Enter the largest integer $k$ for which $x^2-4x+k=0$ has two real roots.`, 3, "16 − 4k > 0 ⇒ k < 4."),
  num(S`Enter the smallest integer $k$ for which $x^2+2x+k=0$ has no real roots.`, 2, "4 − 4k < 0 ⇒ k > 1."),
  num(S`For which $a$ does $ax^2+8x+4=0$ have one root?`, 4, "64 − 16a = 0."),
  mc(S`Does $6x^2+x-2$ factor over the integers?`, "yes", ["no", "only with decimals", "cannot tell"], "D = 1 + 48 = 49 = 7²."),
  mc(S`Does $2x^2+3x-4$ factor over the integers?`, "no", ["yes", "only if x > 0", "cannot tell"], "D = 9 + 32 = 41, not a perfect square."),
  ms(S`Select every equation with two real roots.`, [S`$x^2-3=0$`, S`$x^2+3=0$`, S`$-x^2+x+1=0$`, S`$x^2-2x+1=0$`, S`$2x^2-x-5=0$`], [0, 2, 4], "D > 0."),
  tf(S`If $a>0$ and $c<0$, then $ax^2+bx+c=0$ has two real roots.`, true, "−4ac > 0 so D > b² ≥ 0."),
  mc("The line y = 2x meets the parabola y = x² + 1 in how many points?", "one", ["two", "none", "three"], "x² − 2x + 1 = 0: D = 0.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -2, ymax: 8 }, curves: [{ f: (x) => x * x + 1, color: "violet" }], lines: [{ m: 2, b: 0, color: "blue" }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "amber" }] })),
  mc("The parabola y = x² − 4x + k is shown for k = 3, 4 and 5. Which value gives no real roots?", "k = 5", ["k = 3", "k = 4", "all of them"], "D = 16 − 4k < 0 ⇒ k > 4.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x + 3, color: "violet" }, { f: (x) => x * x - 4 * x + 4, color: "blue" }, { f: (x) => x * x - 4 * x + 5, color: "red" }] })),
  num(S`$h(t)=-5t^2+20t+1$. Enter the discriminant of $h(t)=25$.`, -80, "−5t² + 20t − 24 = 0: 400 − 480."),
  fill(S`$h(t)=k$ has no real solution when $D$ is ____ than $0$.`, ["less", "smaller"], "D < 0."),
  nr(1, -5, 7),
];

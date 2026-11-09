// 3.3 Solving Quadratic Equations by Factoring — 20 hard questions
import { mc, ms, num, tf } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "3.3 Solving Quadratic Equations by Factoring";
export const Q = [
  num(S`Solve $100x^2=115x+35$; enter the positive root.`, 1.4, "5(20x² − 23x − 7) = 5(5x − 7)(4x + 1).", planeDoc({ view: { xmin: -1, xmax: 2, ymin: -70, ymax: 40 }, curves: [{ f: (x) => 100 * x * x - 115 * x - 35, color: "violet" }], step: { x: 0.5, y: 10 } }), 1e-9),
  num(S`Solve $6x^2=7x+20$; enter the positive root.`, 2.5, "(2x − 5)(3x + 4).", null, 1e-9),
  num(S`Solve $(2x+1)(x-2)=x+4$; enter the positive root.`, 3, "2x² − 3x − 2 = x + 4 ⇒ 2x² − 4x − 6 = 0 ⇒ 2(x − 3)(x + 1) = 0."),
  num(S`Solve $x^4-10x^2+9=0$; enter the largest root.`, 3, "(x² − 1)(x² − 9).", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -18, ymax: 12 }, curves: [{ f: (x) => x ** 4 - 10 * x * x + 9, color: "violet" }], step: { x: 1, y: 3 } })),
  num(S`Solve $(x+2)^2-7(x+2)+12=0$; enter the larger root.`, 2, "u = x + 2: (u − 3)(u − 4) ⇒ x = 1, 2."),
  num(S`One root of $2x^2+bx-12=0$ is $4$. Enter the other root.`, -1.5, "32 + 4b − 12 = 0 ⇒ b = −5; (2x + 3)(x − 4).", null, 1e-9),
  num(S`For which $k$ is $x=-2$ a root of $3x^2+kx-10=0$?`, 1, "12 − 2k − 10 = 0."),
  num(S`Solve $\tfrac13x^2+\tfrac23x=5$; enter the positive root.`, 3, "x² + 2x − 15 = 0."),
  ms(S`Select every root of $2x^3-8x^2-10x=0$.`, ["0", "5", "−1", "1", "−5"], [0, 1, 2], "2x(x² − 4x − 5) = 2x(x − 5)(x + 1)."),
  mc(S`Which equation has roots $\tfrac23$ and $-\tfrac52$?`, S`$6x^2+11x-10=0$`, [S`$6x^2-11x-10=0$`, S`$6x^2+11x+10=0$`, S`$x^2+11x-10=0$`], "(3x − 2)(2x + 5) = 6x² + 11x − 10."),
  tf(S`$x^2+9=0$ can be solved by factoring over the real numbers.`, false, "A sum of squares has no real factors or roots."),
  num(S`The product of two consecutive integers is $64$ more than the smaller. Enter the positive smaller integer.`, 8, "n(n + 1) = n + 64 ⇒ n² = 64 ⇒ n = 8 (positive)."),
  num(S`Solve $x^2-6x=-9$.`, 3, "(x − 3)² = 0."),
  num(S`Solve $25x^2+10x+1=0$ (decimal).`, -0.2, "(5x + 1)².", null, 1e-9),
  mc("The graph of y = 3x² + 5x − 2 is shown. Which statement is correct?", S`its roots are $\tfrac13$ and $-2$`, [S`its roots are $-\tfrac13$ and $2$`, S`its roots are $3$ and $-2$`, S`it has no real roots`], "(3x − 1)(x + 2).", planeDoc({ view: { xmin: -3, xmax: 1.5, ymin: -5, ymax: 8 }, curves: [{ f: (x) => 3 * x * x + 5 * x - 2, color: "violet" }], points: [{ x: 1 / 3, y: 0, label: "(0.33, 0)", color: "amber" }, { x: -2, y: 0, label: "(−2, 0)", color: "amber" }], step: { x: 0.5, y: 1 } })),
  mc("The graph y = x² − x and the line y = 2x + 4 are shown. Solve x² − x = 2x + 4.", S`$x=-1$ or $x=4$`, [S`$x=1$ or $x=-4$`, S`$x=0$ or $x=1$`, S`$x=4$ only`], "x² − 3x − 4 = 0.", planeDoc({ view: { xmin: -3, xmax: 6, ymin: -2, ymax: 14 }, curves: [{ f: (x) => x * x - x, color: "violet" }], lines: [{ m: 2, b: 4, color: "blue" }], points: [{ x: -1, y: 2, label: "(−1, 2)", color: "amber" }, { x: 4, y: 12, label: "(4, 12)", color: "amber" }], step: { x: 1, y: 2 } })),
  num(S`Solve $(3x-1)^2=(x+5)^2$; enter the positive root.`, 3, "(3x − 1 − x − 5)(3x − 1 + x + 5) = (2x − 6)(4x + 4)."),
  num(S`Solve $(3x-1)^2=(x+5)^2$; enter the negative root.`, -1, "4x + 4 = 0."),
  num(S`Solve $x(2x-3)=2(x+6)$; enter the positive root.`, 4, "2x² − 5x − 12 = (2x + 3)(x − 4)."),
  mc(S`A quadratic equation $ax^2+bx+c=0$ ($a\ne0$) is solved by factoring. What is the greatest possible number of distinct real roots?`, "2", ["1", "3", "4"], "A quadratic has at most two roots."),
];

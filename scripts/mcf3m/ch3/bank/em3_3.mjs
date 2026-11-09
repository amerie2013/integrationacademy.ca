// 3.3 Solving Quadratic Equations by Factoring — 20 easy + 20 medium (equations built from the roots)
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;
const tx = (b, c) => `x^2${b === 0 ? "" : b < 0 ? `-${b === -1 ? "" : -b}x` : `+${b === 1 ? "" : b}x`}${c === 0 ? "" : c < 0 ? `-${-c}` : `+${c}`}`;
/** x² − (r+s)x + rs = 0 ; ask for the larger or smaller root */
const big = (r, s) => num(S`Solve $${tx(-(r + s), r * s)}=0$ and enter the larger root.`, Math.max(r, s), `(x ${r < 0 ? "+" : "−"} ${Math.abs(r)})(x ${s < 0 ? "+" : "−"} ${Math.abs(s)}) = 0.`);
const small = (r, s) => num(S`Solve $${tx(-(r + s), r * s)}=0$ and enter the smaller root.`, Math.min(r, s), `(x ${r < 0 ? "+" : "−"} ${Math.abs(r)})(x ${s < 0 ? "+" : "−"} ${Math.abs(s)}) = 0.`);

export const E = [
  num(S`Solve $(x-9)(x+1)=0$; enter the positive root.`, 9, "x − 9 = 0."),
  num(S`Solve $(x+4)(x+7)=0$; enter the larger root.`, -4, "−4 > −7."),
  num(S`Solve $x(x-12)=0$; enter the non-zero root.`, 12, "x − 12 = 0."),
  num(S`Solve $x^2+9x=0$; enter the non-zero root.`, -9, "x(x + 9) = 0."),
  big(3, 5), big(-2, 6), small(-4, 1), small(-8, -1), big(7, -3), small(2, 9),
  mc(S`What is the first step to solve $x^2=6x$?`, S`rewrite as $x^2-6x=0$`, ["divide both sides by x", "take the square root", "add 6x"], "Never divide by x."),
  mc(S`Solve $x^2=6x$.`, S`$x=0$ or $x=6$`, [S`$x=6$ only`, S`$x=0$ only`, S`$x=\pm6$`], "x(x − 6) = 0."),
  tf(S`If $(x-2)(x-5)=0$, then $x=2$ or $x=5$.`, true, "Zero-product property."),
  tf(S`If $(x-2)(x-5)=4$, then $x-2=4$ or $x-5=4$.`, false, "Only works for a product equal to 0."),
  fill(S`If $ab=0$, then $a=0$ or $b=$ ____.`, ["0"], "Zero-product property."),
  num(S`Solve $x^2-49=0$; enter the positive root.`, 7, "(x − 7)(x + 7)."),
  num(S`Solve $x^2+10x+25=0$.`, -5, "(x + 5)²."),
  num(S`Solve $3x^2-27=0$; enter the negative root.`, -3, "3(x² − 9)."),
  mc("The graph of y = x² − 2x − 15 is shown. Which factorisation gives its roots?", S`$(x-5)(x+3)=0$`, [S`$(x+5)(x-3)=0$`, S`$(x-15)(x+1)=0$`, S`$(x-5)(x-3)=0$`], "Roots 5 and −3.", planeDoc({ view: { xmin: -5, xmax: 7, ymin: -18, ymax: 10 }, curves: [{ f: (x) => x * x - 2 * x - 15, color: "violet" }], points: [{ x: 5, y: 0, label: "(5, 0)", color: "amber" }, { x: -3, y: 0, label: "(−3, 0)", color: "amber" }], step: { x: 1, y: 4 } })),
  mc("The graph of y = x² + 4x is shown. What are the roots of x² + 4x = 0?", S`$0$ and $-4$`, [S`$0$ and $4$`, S`$-4$ only`, S`$-2$ and $-4$`], "x(x + 4) = 0.", planeDoc({ view: { xmin: -6, xmax: 2, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x + 4 * x, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "amber" }, { x: -4, y: 0, label: "(−4, 0)", color: "amber" }] })),
];

export const M = [
  num(S`Solve $2x^2+5x-3=0$; enter the positive root (decimal).`, 0.5, "(2x − 1)(x + 3).", null, 1e-9),
  num(S`Solve $3x^2-10x+8=0$; enter the larger root.`, 2, "(3x − 4)(x − 2)."),
  num(S`Solve $4x^2-25=0$; enter the positive root (decimal).`, 2.5, "(2x − 5)(2x + 5).", null, 1e-9),
  num(S`Solve $x^2+2x=24$; enter the positive root.`, 4, "x² + 2x − 24 = (x + 6)(x − 4)."),
  num(S`Solve $x(x+5)=36$; enter the positive root.`, 4, "x² + 5x − 36 = (x + 9)(x − 4)."),
  num(S`Solve $(x-2)(x+1)=10$; enter the positive root.`, 4, "x² − x − 12 = 0."),
  num(S`Solve $5x^2=20x$; enter the non-zero root.`, 4, "5x(x − 4) = 0."),
  num(S`Solve $\tfrac12x^2-2x=6$; enter the positive root.`, 6, "x² − 4x − 12 = 0."),
  num(S`Solve $6x^2+x-1=0$; enter the positive root (decimal, two places).`, 0.33, "(3x − 1)(2x + 1).", null, 0.01),
  num(S`Solve $9x^2-6x+1=0$ (decimal, two places).`, 0.33, "(3x − 1)².", null, 0.01),
  ms(S`Select every root of $x^3-9x=0$.`, ["0", "3", "−3", "9", "−9"], [0, 1, 2], "x(x − 3)(x + 3)."),
  tf(S`$x=-\tfrac32$ is a root of $2x^2+x-3=0$.`, true, "(2x + 3)(x − 1): 2(2.25) − 1.5 − 3 = 0."),
  mc(S`Which equation has roots $4$ and $-\tfrac12$?`, S`$(x-4)(2x+1)=0$`, [S`$(x+4)(2x-1)=0$`, S`$(x-4)(x+2)=0$`, S`$(x-4)(2x-1)=0$`], "2x + 1 = 0 at −½."),
  fill(S`One root of $x^2+bx-20=0$ is $5$, so $b=$ ____.`, ["-1", "−1"], "25 + 5b − 20 = 0."),
  num(S`One root of $x^2-x-30=0$ is $6$. Enter the other.`, -5, "(x − 6)(x + 5)."),
  mc(S`A student solves $x^2=4x$ by dividing by $x$ and gets $x=4$. What is wrong?`, S`the root $x=0$ is lost`, ["nothing", "x = 4 is not a root", "x² = 4x has no roots"], "x(x − 4) = 0 gives 0 and 4."),
  mc("The graph y = 2x² − 3x − 2 is shown. Which are its roots?", S`$2$ and $-\tfrac12$`, [S`$-2$ and $\tfrac12$`, S`$2$ and $-2$`, S`$1$ and $-2$`], "(2x + 1)(x − 2).", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -4, ymax: 8 }, curves: [{ f: (x) => 2 * x * x - 3 * x - 2, color: "violet" }], points: [{ x: 2, y: 0, label: "(2, 0)", color: "amber" }, { x: -0.5, y: 0, label: "(−0.5, 0)", color: "amber" }] })),
  mc("The graph y = (x − 1)(x − 5) and the line y = 5 are shown. Solve (x − 1)(x − 5) = 5.", S`$x=0$ or $x=6$`, [S`$x=1$ or $x=5$`, S`$x=6$ only`, S`$x=2$ or $x=4$`], "x² − 6x + 5 = 5 ⇒ x(x − 6) = 0.", planeDoc({ view: { xmin: -1, xmax: 7, ymin: -5, ymax: 8 }, curves: [{ f: (x) => (x - 1) * (x - 5), color: "violet" }], lines: [{ m: 0, b: 5, color: "green", dash: true }], points: [{ x: 0, y: 5, label: "(0, 5)", color: "amber" }, { x: 6, y: 5, label: "(6, 5)", color: "amber" }] })),
  num(S`Solve $x^2-14x+48=0$; enter the sum of the roots.`, 14, "(x − 6)(x − 8)."),
  num(S`Solve $x^2-14x+48=0$; enter the product of the roots.`, 48, "6 · 8."),
];

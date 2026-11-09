// 4.3 The Quadratic Formula — 20 easy + 20 medium (roots computed by the formula)
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;
const P = (a, b, c) => `${a === 1 ? "" : a === -1 ? "-" : a}x^2${b === 0 ? "" : b < 0 ? (b === -1 ? "-" : b) + "x" : "+" + (b === 1 ? "" : b) + "x"}${c === 0 ? "" : c < 0 ? c : "+" + c}`;
const R = (a, b, c) => { const d = Math.sqrt(b * b - 4 * a * c); return [(-b + d) / (2 * a), (-b - d) / (2 * a)]; };
const r2 = (v) => Math.round(v * 100) / 100;
const big = (a, b, c) => num(S`Use the quadratic formula on $${P(a, b, c)}=0$ and enter the larger root (two decimals).`, r2(Math.max(...R(a, b, c))), `D = ${b * b - 4 * a * c}.`, null, 0.011);
const small = (a, b, c) => num(S`Use the quadratic formula on $${P(a, b, c)}=0$ and enter the smaller root (two decimals).`, r2(Math.min(...R(a, b, c))), `D = ${b * b - 4 * a * c}.`, null, 0.011);
const D = (a, b, c) => num(S`Enter the value of $b^2-4ac$ for $${P(a, b, c)}=0$.`, b * b - 4 * a * c, "Square b with its sign.");

export const E = [
  D(1, 5, 6), D(1, -3, -4), D(2, 1, -3), D(3, -2, 1),
  big(1, -1, -6), small(1, 4, -5), big(1, 0, -7), small(2, 5, 1), big(1, -6, 4), small(1, 2, -2), big(2, -3, -1), small(1, 5, 3),
  mc(S`In $3x^2-7x+2=0$, what are $a$, $b$, $c$?`, S`$3,\ -7,\ 2$`, [S`$3,\ 7,\ 2$`, S`$-3,\ 7,\ -2$`, S`$3x^2,\ -7x,\ 2$`], "Read the coefficients with signs."),
  mc(S`Rewrite $2x^2=5x-1$ before using the formula.`, S`$2x^2-5x+1=0$`, [S`$2x^2+5x-1=0$`, S`$2x^2-5x-1=0$`, S`$x^2-5x+1=0$`], "Move everything to one side."),
  tf(S`The quadratic formula works for every quadratic equation.`, true, "It comes from completing the square."),
  tf(S`In the formula, only the square root is divided by $2a$.`, false, "The whole numerator is divided by 2a."),
  fill(S`For $x^2-4x+1=0$, the roots are $2\pm\sqrt{\square}$. The missing number is ____.`, ["3"], "(4 ± √12)/2 = 2 ± √3."),
  mc(S`Solve $x^2+2x+7=0$.`, "no real roots", [S`$x=-1\pm\sqrt6$`, S`$x=1\pm\sqrt6$`, S`$x=-7$`], "D = 4 − 28 < 0."),
  mc("The graph shows y = x² − 2x − 2. Which pair are its roots?", S`$1\pm\sqrt3$`, [S`$-1\pm\sqrt3$`, S`$1\pm\sqrt2$`, S`$2\pm\sqrt3$`], "(2 ± √12)/2.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x * x - 2 * x - 2, color: "violet" }], points: [{ x: 1 + Math.sqrt(3), y: 0, label: "(2.73, 0)", color: "amber" }, { x: 1 - Math.sqrt(3), y: 0, label: "(−0.73, 0)", color: "amber" }] })),
  mc("The graph shows y = 2x² + 4x − 1. Estimate its positive root.", S`$0.22$`, [S`$2.22$`, S`$-2.22$`, S`$1$`], "(−4 + √24)/4 ≈ 0.22.", planeDoc({ view: { xmin: -3, xmax: 2, ymin: -4, ymax: 6 }, curves: [{ f: (x) => 2 * x * x + 4 * x - 1, color: "violet" }], points: [{ x: (-4 + Math.sqrt(24)) / 4, y: 0, label: "(0.22, 0)", color: "amber" }] })),
];

export const M = [
  big(3, -4, -2), small(3, -4, -2), big(5, 2, -1), small(4, 7, 2), big(2, 1, -4), small(0.5, 2, -3),
  big(-1, 3, 5), big(-2, 5, 4), small(6, 1, -1),
  mc("The graph shows y = 3x² − 6x + 1. Which are its zeros (two decimals)?", S`$1.82$ and $0.18$`, [S`$1.5$ and $0.5$`, S`$2$ and $0$`, S`$-1.82$ and $-0.18$`], "(6 ± √24)/6.", planeDoc({ view: { xmin: -1, xmax: 3, ymin: -3, ymax: 6 }, curves: [{ f: (x) => 3 * x * x - 6 * x + 1, color: "violet" }], step: { x: 0.5, y: 1 } })),
  num(S`Solve $x(x+3)=5$ with the formula; enter the positive root (two decimals).`, r2((-3 + Math.sqrt(29)) / 2), "x² + 3x − 5 = 0, D = 29.", null, 0.011),
  num(S`Solve $2x^2=7x-2$; enter the larger root (two decimals).`, r2((7 + Math.sqrt(33)) / 4), "2x² − 7x + 2 = 0, D = 33.", null, 0.011),
  num(S`$h(t)=-5t^2+10t+8$. Enter the landing time (two decimals).`, r2((10 + Math.sqrt(260)) / 10), "D = 100 + 160.", null, 0.011),
  num(S`$h(t)=-4.9t^2+20t+1$. Enter the landing time (two decimals).`, r2((20 + Math.sqrt(400 + 19.6)) / 9.8), "D = 400 + 19.6.", null, 0.011),
  ms(S`Select every equation whose roots are irrational.`, [S`$x^2-5=0$`, S`$x^2-5x+6=0$`, S`$x^2+x-1=0$`, S`$4x^2-9=0$`], [0, 2], "D not a perfect square."),
  tf(S`The roots of $x^2-6x+7=0$ are $3\pm\sqrt2$.`, true, "(6 ± √8)/2."),
  mc(S`Which is the simplified exact form of the roots of $x^2+4x-8=0$?`, S`$-2\pm2\sqrt3$`, [S`$-2\pm\sqrt{12}$ only`, S`$2\pm2\sqrt3$`, S`$-4\pm2\sqrt3$`], "(−4 ± √48)/2 = −2 ± 2√3."),
  mc("The graph shows a rocket h(t) = −4.9t² + 30t. When does it land?", S`$t\approx6.12$ s`, [S`$t\approx3.06$ s`, S`$t=30$ s`, S`$t\approx4.9$ s`], "t(30 − 4.9t) = 0.", planeDoc({ view: { xmin: -0.3, xmax: 7, ymin: -2, ymax: 50 }, curves: [{ f: (t) => -4.9 * t * t + 30 * t, a: 0, b: 6.12, color: "violet" }], step: { x: 1, y: 5 }, xlabel: "t", ylabel: "h" })),
  mc(S`Which method is best for $x^2-9x+20=0$?`, "factoring", ["the quadratic formula only", "graphing only", "none works"], "(x − 4)(x − 5): factoring is fastest."),
  fill(S`$x=\frac{-b\pm\sqrt{b^2-4ac}}{\square}$. The denominator is ____.`, ["2a"], "Twice a."),
];

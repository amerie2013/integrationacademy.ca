// 4.1 Vertex Form and Standard Form — 20 easy + 20 medium (expansions computed)
import { mc, ms, num, tf, fill, mx } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;
const vf = (a, h, k) => `${a === 1 ? "" : a === -1 ? "-" : a}(x${h < 0 ? "+" : "-"}${Math.abs(h)})^2${k < 0 ? "-" : "+"}${Math.abs(k)}`;
const std = (a, h, k) => [a, -2 * a * h, a * h * h + k];
const ans = ([a, b, c]) => { let s = ""; const add = (n, v) => { if (!n) return; const m = Math.abs(n); s += (n < 0 ? "-" : s ? "+" : "") + (v ? (m === 1 ? "" : m + "*") + v : m); }; add(a, "x^2"); add(b, "x"); add(c, ""); return s; };
const ex = (a, h, k) => mx(S`Write $y=${vf(a, h, k)}$ in standard form.`, ans(std(a, h, k)), "Expand the square, multiply by a, add k.");
const vx = (a, b, c) => num(S`Enter the $x$-coordinate of the vertex of $y=${a === 1 ? "" : a === -1 ? "-" : a}x^2${b < 0 ? "" : "+"}${b}x${c < 0 ? "" : "+"}${c}$.`, -b / (2 * a), "Partial factoring: axis x = −b/(2a).");
const vy = (a, b, c) => { const h = -b / (2 * a); return num(S`Enter the $y$-coordinate of the vertex of $y=${a === 1 ? "" : a === -1 ? "-" : a}x^2${b < 0 ? "" : "+"}${b}x${c < 0 ? "" : "+"}${c}$.`, a * h * h + b * h + c, `Axis x = ${h}; substitute.`); };

export const E = [
  ex(1, 3, 2), ex(1, -4, -1), ex(1, 5, -10), ex(2, 1, 3), ex(-1, 2, 6),
  vx(1, -6, 4), vx(1, 10, 1), vx(2, -8, 3), vx(-1, 4, 2),
  vy(1, -4, 7), vy(1, 6, 10),
  num(S`Enter the $y$-intercept of $y=(x-3)^2+4$.`, 13, "9 + 4."),
  num(S`Enter the $y$-intercept of $y=2(x+1)^2-5$.`, -3, "2 − 5."),
  mc(S`Which form shows the vertex directly?`, "vertex form", ["standard form", "factored form", "none"], "a(x − h)² + k."),
  tf(S`$(x-2)^2+1=x^2-4x+5$.`, true, "x² − 4x + 4 + 1."),
  tf(S`$(x+3)^2=x^2+9$.`, false, "Missing 6x."),
  fill(S`$y=x(x-6)+5$ has $y=5$ at $x=0$ and $x=$ ____.`, ["6"], "x − 6 = 0."),
  mc("The parabola shown has vertex (2, −1). Which equation in standard form matches?", S`$y=x^2-4x+3$`, [S`$y=x^2+4x+3$`, S`$y=x^2-4x-1$`, S`$y=x^2-2x-1$`], "(x − 2)² − 1 = x² − 4x + 3.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 6 }, curves: [{ f: (x) => (x - 2) ** 2 - 1, color: "violet" }], points: [{ x: 2, y: -1, label: "(2, −1)", color: "amber" }, { x: 0, y: 3, label: "(0, 3)" }] })),
  mc("The dashed line y = 3 meets y = x² − 6x + 3 at two points. Where is the axis of symmetry?", S`$x=3$`, [S`$x=6$`, S`$x=-3$`, S`$x=0$`], "Equal heights at 0 and 6.", planeDoc({ view: { xmin: -1, xmax: 7, ymin: -7, ymax: 6 }, curves: [{ f: (x) => x * x - 6 * x + 3, color: "violet" }], lines: [{ m: 0, b: 3, color: "green", dash: true }], points: [{ x: 0, y: 3, label: "(0, 3)", color: "amber" }, { x: 6, y: 3, label: "(6, 3)", color: "amber" }] })),
  mx(S`Write $y=(x-1)^2$ in standard form.`, "x^2-2*x+1", "(x − 1)(x − 1)."),
];

export const M = [
  ex(3, -2, -5), ex(-2, 3, 7), ex(0.5, 4, 1), ex(-3, -1, 4), ex(4, 0.5, 2),
  vy(2, 12, 11), vy(-3, 18, -20), vy(0.5, -3, 1), vy(-1, -8, -10),
  vx(3, 9, 1), vx(-2, -10, 3),
  num(S`For $y=ax^2-16x+5$, the axis is $x=2$. Enter $a$.`, 4, "16/(2a) = 2."),
  num(S`For $y=x^2+bx+7$, the axis is $x=-5$. Enter $b$.`, 10, "−b/2 = −5."),
  ms(S`Select every equation equivalent to $y=2(x-3)^2-8$.`, [S`$y=2x^2-12x+10$`, S`$y=2(x-1)(x-5)$`, S`$y=2x^2-12x-8$`, S`$y=(2x-6)^2-8$`], [0, 1], "2(x² − 6x + 9) − 8 = 2x² − 12x + 10 = 2(x − 1)(x − 5)."),
  tf(S`$y=-(x+1)^2+4$ and $y=-x^2-2x+3$ have the same graph.`, true, "−(x² + 2x + 1) + 4."),
  mc(S`A ball: $h=-5(t-1.5)^2+12$. What is its launch height (at $t=0$)?`, S`$0.75$ m`, [S`$12$ m`, S`$1.5$ m`, S`$-11.25$ m`], "−5(2.25) + 12."),
  mc("The parabola shown passes through (0, 7) and (4, 7) and has minimum value 3. Which equation fits?", S`$y=x^2-4x+7$`, [S`$y=x^2+4x+7$`, S`$y=x^2-4x+3$`, S`$y=2x^2-8x+7$`], "Axis x = 2, vertex (2, 3): (x − 2)² + 3.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: 0, ymax: 9 }, curves: [{ f: (x) => x * x - 4 * x + 7, color: "violet" }], points: [{ x: 0, y: 7, label: "(0, 7)" }, { x: 4, y: 7, label: "(4, 7)" }, { x: 2, y: 3, label: "(2, 3)", color: "amber" }] })),
  mc("The arch shown is y = −0.5(x − 4)² + 8. Which is its standard form?", S`$y=-0.5x^2+4x$`, [S`$y=-0.5x^2-4x$`, S`$y=-0.5x^2+4x+8$`, S`$y=0.5x^2-4x$`], "−0.5(x² − 8x + 16) + 8.", planeDoc({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 10 }, curves: [{ f: (x) => -0.5 * (x - 4) ** 2 + 8, a: 0, b: 8, color: "violet" }], points: [{ x: 4, y: 8, label: "(4, 8)", color: "amber" }] })),
  fill(S`Partial factoring of $3x^2-12x+1$ gives $3x(x-\square)+1$. The missing number is ____.`, ["4"], "12 ÷ 3."),
  num(S`For $y=-2x^2+8x+c$, the maximum is $15$. Enter $c$.`, 7, "Vertex x = 2: −8 + 16 + c = 15."),
];

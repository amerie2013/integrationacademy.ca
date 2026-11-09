// 3.1 Standard and Factored Forms — 20 easy + 20 medium (features computed from the zeros)
import { mc, ms, num, tf, fill, mx } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;
const br = (r) => (r === 0 ? "x" : `(x${r < 0 ? "+" : "-"}${Math.abs(r)})`);
const fz = (a, r, s) => `y=${a === 1 ? "" : a === -1 ? "-" : a}${br(r)}${br(s)}`;
const vy = (a, r, s) => { const h = (r + s) / 2; return a * (h - r) * (h - s); };

export const E = [
  num(S`Enter the larger zero of $${fz(1, 4, -6)}$.`, 4, "x − 4 = 0."),
  num(S`Enter the smaller zero of $${fz(1, 4, -6)}$.`, -6, "x + 6 = 0."),
  num(S`Enter the axis of symmetry $x=$ ? of $${fz(1, 2, 8)}$.`, 5, "Midway between 2 and 8."),
  num(S`Enter the axis of symmetry of $${fz(1, -7, 3)}$.`, -2, "(−7 + 3)/2."),
  num(S`Enter the $y$-coordinate of the vertex of $${fz(1, 1, 5)}$.`, vy(1, 1, 5), "Axis x = 3: (2)(−2)."),
  num(S`Enter the $y$-coordinate of the vertex of $${fz(-1, -2, 4)}$.`, vy(-1, -2, 4), "Axis x = 1: −(3)(−3)."),
  num(S`Enter the $y$-intercept of $${fz(1, 3, 5)}$.`, 15, "(−3)(−5)."),
  num(S`Enter the $y$-intercept of $${fz(2, -1, 4)}$.`, -8, "2(1)(−4)."),
  mc(S`Does $${fz(-3, 1, 6)}$ open up or down?`, "down", ["up", "sideways", "it depends on the zeros"], "a = −3 < 0."),
  mc(S`What are the zeros of $y=(x+8)(x-1)$?`, S`$-8$ and $1$`, [S`$8$ and $-1$`, S`$8$ and $1$`, S`$-8$ and $-1$`], "Set each factor to 0."),
  mc(S`What is the factored form of $y=x^2-9x+14$?`, S`$y=(x-2)(x-7)$`, [S`$y=(x+2)(x+7)$`, S`$y=(x-1)(x-14)$`, S`$y=(x-2)(x+7)$`], "Product 14, sum −9."),
  mc(S`What is the standard form of $y=(x+3)(x-5)$?`, S`$y=x^2-2x-15$`, [S`$y=x^2+2x-15$`, S`$y=x^2-8x-15$`, S`$y=x^2-15$`], "x² − 5x + 3x − 15."),
  tf(S`The axis of symmetry is always halfway between the two zeros.`, true, "Parabolas are symmetric."),
  tf(S`$y=2(x-1)(x-3)$ and $y=(x-1)(x-3)$ have the same zeros.`, true, "a does not change the zeros."),
  tf(S`The zeros of $y=(x-6)(x+2)$ are $-6$ and $2$.`, false, "They are 6 and −2."),
  fill(S`The zeros of $y=(2x-5)(x+1)$ are $-1$ and ____ (decimal).`, ["2.5", "5/2"], "2x − 5 = 0."),
  mc("The parabola shown has which zeros?", S`$-3$ and $1$`, [S`$3$ and $-1$`, S`$-1$ and $-3$`, S`$0$ and $-3$`], "Read the x-intercepts.", planeDoc({ view: { xmin: -5, xmax: 3, ymin: -5, ymax: 6 }, curves: [{ f: (x) => (x + 3) * (x - 1), color: "violet" }], points: [{ x: -3, y: 0, label: "(−3, 0)", color: "amber" }, { x: 1, y: 0, label: "(1, 0)", color: "amber" }] })),
  mc("Which equation matches the graph?", S`$y=-(x-2)(x-6)$`, [S`$y=(x-2)(x-6)$`, S`$y=-(x+2)(x+6)$`, S`$y=(x+2)(x-6)$`], "Zeros 2 and 6; opens down.", planeDoc({ view: { xmin: 0, xmax: 8, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -(x - 2) * (x - 6), color: "violet" }], points: [{ x: 2, y: 0, label: "(2, 0)", color: "amber" }, { x: 6, y: 0, label: "(6, 0)", color: "amber" }] })),
  num(S`Enter the $x$-coordinate of the vertex of $${fz(1, -10, 0)}$.`, -5, "(−10 + 0)/2."),
  num(S`How many zeros does $y=(x-4)^2$ have?`, 1, "Both factors are the same."),
];

export const M = [
  num(S`Enter the $y$-coordinate of the vertex of $${fz(2, -3, 5)}$.`, vy(2, -3, 5), "Axis x = 1: 2(4)(−4)."),
  num(S`Enter the $y$-coordinate of the vertex of $${fz(-0.5, 0, 8)}$.`, vy(-0.5, 0, 8), "Axis x = 4: −0.5(4)(−4).", null, 1e-9),
  num(S`Enter the axis of symmetry of $y=(3x-6)(x+4)$.`, -1, "Zeros 2 and −4."),
  num(S`Enter the larger zero of $y=-2x^2+8x+10$.`, 5, "−2(x − 5)(x + 1)."),
  num(S`Enter the $y$-coordinate of the vertex of $y=x^2-8x+12$ (factor first).`, -4, "(x − 2)(x − 6); axis 4: (2)(−2)."),
  mx(S`A parabola has zeros $-1$ and $7$ and $a=1$. Type its standard form.`, "x^2-6*x-7", "(x + 1)(x − 7)."),
  mx(S`Type the standard form of $y=-3(x-2)(x+2)$.`, "-3*x^2+12", "−3(x² − 4)."),
  num(S`A parabola has zeros $2$ and $8$ and passes through $(5,\,-18)$. Enter $a$.`, 2, "−18 = a(3)(−3)."),
  num(S`A parabola has zeros $-4$ and $0$ and passes through $(-2,\,12)$. Enter $a$.`, -3, "12 = a(2)(−2)."),
  num(S`A parabola has zeros $1$ and $5$ and $y$-intercept $10$. Enter $a$.`, 2, "10 = a(−1)(−5)."),
  mc(S`Which form shows the $y$-intercept most directly?`, "standard form", ["factored form", "vertex form", "none"], "c is the y-intercept."),
  mc(S`Which form shows the zeros most directly?`, "factored form", ["standard form", "vertex form", "none"], "a(x − r)(x − s)."),
  ms(S`Select every equation with zeros $3$ and $-1$.`, [S`$y=(x-3)(x+1)$`, S`$y=-4(x-3)(x+1)$`, S`$y=x^2-2x-3$`, S`$y=(x+3)(x-1)$`], [0, 1, 2], "x² − 2x − 3 = (x − 3)(x + 1)."),
  tf(S`The vertex of $y=(x-1)(x-9)$ is $(5,\,-16)$.`, true, "(4)(−4) = −16."),
  tf(S`If a parabola's zeros are $-6$ and $2$, its axis is $x=-4$.`, false, "(−6 + 2)/2 = −2."),
  fill(S`$y=(x-r)(x+2)$ has axis $x=3$. Then $r=$ ____.`, ["8"], "(r − 2)/2 = 3."),
  mc("The parabola shown passes through (0, 8). Which equation is it?", S`$y=2(x-1)(x-4)$`, [S`$y=(x-1)(x-4)$`, S`$y=-2(x-1)(x-4)$`, S`$y=2(x+1)(x+4)$`], "a(−1)(−4) = 8 ⇒ a = 2.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -6, ymax: 10 }, curves: [{ f: (x) => 2 * (x - 1) * (x - 4), color: "violet" }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "amber" }, { x: 4, y: 0, label: "(4, 0)", color: "amber" }, { x: 0, y: 8, label: "(0, 8)", color: "blue" }] })),
  mc("The arch shown has its feet at 0 and 10 and top at (5, 10). Which equation fits?", S`$y=-0.4x(x-10)$`, [S`$y=0.4x(x-10)$`, S`$y=-x(x-10)$`, S`$y=-0.4(x-5)(x+5)$`], "10 = a(5)(−5).", planeDoc({ view: { xmin: -1, xmax: 11, ymin: -1, ymax: 12 }, curves: [{ f: (x) => -0.4 * x * (x - 10), a: 0, b: 10, color: "violet" }], points: [{ x: 5, y: 10, label: "(5, 10)", color: "amber" }] })),
  num(S`For $y=(2x+1)(x-3)$, enter the $x$-coordinate of the vertex.`, 1.25, "Zeros −0.5 and 3.", null, 1e-9),
  num(S`A parabola has vertex $(3,\,-8)$ and one zero $1$. Enter the other zero.`, 5, "Symmetry about x = 3."),
];

// 4.2 Completing the Square — 20 easy + 20 medium (vertex values computed)
import { mc, ms, num, tf, fill, mx } from "../../bank/kit.mjs";
import { planeDoc, areaBox } from "../../figs.mjs";
const S = String.raw;
const P = (a, b, c) => `${a === 1 ? "" : a === -1 ? "-" : a}x^2${b < 0 ? "" : "+"}${b}x${c < 0 ? "" : "+"}${c}`;
const K = (a, b, c) => c - (b * b) / (4 * a);
const kq = (a, b, c) => num(S`Complete the square for $y=${P(a, b, c)}$ and enter the $y$-coordinate of the vertex.`, K(a, b, c), `Vertex x = ${-b / (2 * a)}.`, null, 1e-9);
const hq = (a, b, c) => num(S`Complete the square for $y=${P(a, b, c)}$ and enter the $x$-coordinate of the vertex.`, -b / (2 * a), "x = −b/(2a).", null, 1e-9);

export const E = [
  num(S`What number completes the square for $x^2+8x$?`, 16, "(8/2)²."),
  num(S`What number completes the square for $x^2-14x$?`, 49, "(−7)²."),
  num(S`What number completes the square for $x^2+5x$? (decimal)`, 6.25, "(2.5)².", null, 1e-9),
  num(S`What number completes the square for $x^2-x$? (decimal)`, 0.25, "(0.5)².", null, 1e-9),
  kq(1, 6, 1), kq(1, -4, 9), kq(1, 10, 20), kq(1, -2, -5),
  hq(1, 12, 3), hq(1, -8, 0),
  mx(S`Write $y=x^2+6x+2$ in vertex form.`, "(x+3)^2-7", "Add and subtract 9."),
  mx(S`Write $y=x^2-10x+30$ in vertex form.`, "(x-5)^2+5", "Add and subtract 25."),
  mc(S`$x^2+12x+36$ equals …`, S`$(x+6)^2$`, [S`$(x+12)^2$`, S`$(x+6)(x-6)$`, S`$(x+36)^2$`], "6 · 2 = 12."),
  tf(S`$x^2-6x+9=(x-3)^2$.`, true, "(−3)² = 9."),
  tf(S`To complete the square for $x^2+8x$, add $64$.`, false, "Add (8/2)² = 16."),
  fill(S`$x^2+18x+\square=(x+9)^2$. The missing number is ____.`, ["81"], "9²."),
  mc("The area model shows x² + 4x. What completes the square?", "4", ["16", "2", "8"], "The missing corner is 2 × 2.", areaBox(["x", "+2"], ["x", "+2"], [["x²", "2x"], ["2x", "?"]])),
  mc("The graph shows y = x² − 4x + 1. What is its vertex form?", S`$y=(x-2)^2-3$`, [S`$y=(x+2)^2-3$`, S`$y=(x-2)^2+1$`, S`$y=(x-4)^2+1$`], "Vertex (2, −3).", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x + 1, color: "violet" }], points: [{ x: 2, y: -3, label: "(2, −3)", color: "amber" }] })),
  num(S`Enter the minimum value of $y=x^2+2x+8$.`, 7, "(x + 1)² + 7."),
  mc(S`What is the range of $y=x^2-8x+20$?`, S`$y\ge4$`, [S`$y\ge20$`, S`$y\le4$`, S`$y\ge-4$`], "(x − 4)² + 4."),
];

export const M = [
  kq(2, 8, 3), kq(3, -12, 5), kq(-1, 6, -4), kq(-2, -12, -10), kq(0.5, 4, 1), kq(0.25, -2, 3),
  hq(4, -24, 1), hq(-3, 9, 2),
  mx(S`Write $y=2x^2-4x+5$ in vertex form.`, "2*(x-1)^2+3", "2(x² − 2x + 1 − 1) + 5."),
  mx(S`Write $y=-x^2-6x-5$ in vertex form.`, "-(x+3)^2+4", "−(x² + 6x + 9 − 9) − 5."),
  mx(S`Write $y=\tfrac12x^2+4x+3$ in vertex form.`, "0.5*(x+4)^2-5", "½(x² + 8x + 16 − 16) + 3."),
  mc(S`When completing the square for $3x^2+12x+1$, the first step is …`, S`$3(x^2+4x)+1$`, [S`$3(x^2+12x)+1$`, S`$(3x+6)^2$`, S`$3x^2+12x+36+1$`], "Factor a from the x-terms."),
  tf(S`$-2(x^2-4x+4-4)+1=-2(x-2)^2+9$.`, true, "−2(−4) = 8; 8 + 1 = 9."),
  tf(S`$3(x^2+2x+1-1)=3(x+1)^2-1$.`, false, "−1 · 3 = −3."),
  ms(S`Select every TRUE statement about $y=-2x^2+12x-10$.`, ["its vertex is (3, 8)", "its maximum is 8", "its range is y ≤ 8", "it opens up"], [0, 1, 2], "−2(x − 3)² + 8."),
  mc("The graph shows y = 2x² + 8x + 5. What is its minimum value?", S`$-3$`, [S`$5$`, S`$-2$`, S`$3$`], "2(x + 2)² − 3.", planeDoc({ view: { xmin: -5, xmax: 1, ymin: -4, ymax: 7 }, curves: [{ f: (x) => 2 * x * x + 8 * x + 5, color: "violet" }], points: [{ x: -2, y: -3, label: "(−2, −3)", color: "amber" }] })),
  mc("The parabola shown is y = −x² + 4x + 1. Which vertex form matches?", S`$y=-(x-2)^2+5$`, [S`$y=-(x+2)^2+5$`, S`$y=-(x-2)^2+1$`, S`$y=(x-2)^2+5$`], "−(x² − 4x + 4 − 4) + 1.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -4, ymax: 7 }, curves: [{ f: (x) => -x * x + 4 * x + 1, color: "violet" }], points: [{ x: 2, y: 5, label: "(2, 5)", color: "amber" }] })),
  num(S`$A=-x^2+30x$ is an area. Enter the maximum area.`, 225, "−(x − 15)² + 225."),
  num(S`For which $c$ does $y=x^2+10x+c$ have minimum $0$?`, 25, "(x + 5)² + c − 25."),
  fill(S`$y=x^2+bx+16$ is a perfect square with $b>0$, so $b=$ ____.`, ["8"], "2 · 4."),
];

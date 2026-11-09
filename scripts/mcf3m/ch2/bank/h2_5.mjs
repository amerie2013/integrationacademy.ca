// 2.5 Factoring Special Quadratics — 20 hard questions
import { mc, ms, num, tf, mx } from "../../bank/kit.mjs";
import { areaBox, planeDoc } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "2.5 Factoring Special Quadratics";
export const Q = [
  mc(S`Factor fully $x^4-1$.`, S`$(x-1)(x+1)(x^2+1)$`, [S`$(x^2-1)^2$`, S`$(x-1)^2(x+1)^2$`, S`$(x-1)(x+1)$`], "(x² − 1)(x² + 1)."),
  mc(S`Factor fully $16x^4-81$.`, S`$(2x-3)(2x+3)(4x^2+9)$`, [S`$(4x^2-9)^2$`, S`$(2x-3)^2(2x+3)^2$`, S`$(4x-9)(4x+9)$`], "(4x² − 9)(4x² + 9)."),
  mc(S`Factor $(2x+1)^2-(x-3)^2$.`, S`$(x+4)(3x-2)$`, [S`$(x-4)(3x+2)$`, S`$(x+4)(3x+2)$`, S`$(3x-2)^2$`], "a − b = x + 4; a + b = 3x − 2."),
  mc(S`Factor fully $5x^3-20x^2+20x$.`, S`$5x(x-2)^2$`, [S`$5x(x-2)(x+2)$`, S`$5(x-2)^2$`, S`$x(5x-10)^2$`], "5x(x² − 4x + 4)."),
  num(S`$kx^2-28x+49$ is a perfect square. Enter $k$.`, 4, "−28x = −2(√k x)(7) ⇒ √k = 2."),
  num(S`$x^2+bx+64$ is a perfect square with $b<0$. Enter $b$.`, -16, "(x − 8)²."),
  num(S`Compute $1002^2-998^2$ by factoring.`, 8000, "4 × 2000."),
  num(S`Compute $(9.5)(10.5)$ using a difference of squares.`, 99.75, "10² − 0.5².", null, 1e-9),
  num(S`A square of side $x$ has a square of side $4$ removed. The rest is rearranged into a rectangle $8$ cm wider than it is long. Enter the length when $x=9$.`, 5, "(x − 4)(x + 4): sides 5 and 13.", areaBox(["x", "+4"], ["x", "−4"], [["x²", "4x"], ["−4x", "−16"]])),
  mx(S`Factor $x^2-6x+9-y^2$ (group the first three terms) and type it.`, "(x-3-y)*(x-3+y)", "(x − 3)² − y²."),
  ms(S`Select every TRUE statement.`, [S`$a^2+b^2$ never factors over the real numbers (for $b\ne0$)`, S`$(a-b)^2=a^2-b^2$`, S`$x^2-2$ factors as $(x-\sqrt2)(x+\sqrt2)$ over the real numbers`, S`a perfect square trinomial has exactly one zero`], [0, 2, 3], "(a − b)² has a middle term."),
  tf(S`If $y=x^2+bx+c$ touches the $x$-axis at exactly one point, then $x^2+bx+c$ is a perfect square.`, true, "One (double) zero r: y = (x − r)²."),
  num(S`$y=x^2-14x+c$ touches the $x$-axis at exactly one point. Enter $c$.`, 49, "(x − 7)².", planeDoc({ view: { xmin: 3, xmax: 11, ymin: -1, ymax: 10 }, curves: [{ f: (x) => (x - 7) ** 2, color: "violet" }], points: [{ x: 7, y: 0, label: "(7, 0)", color: "amber" }] })),
  mc("The graph shows y = 4x² − 25. Which factored form gives its zeros?", S`$(2x-5)(2x+5)$`, [S`$(4x-5)(x+5)$`, S`$(2x-5)^2$`, S`$(x-5)(x+5)$`], "Zeros ±2.5.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -27, ymax: 15 }, curves: [{ f: (x) => 4 * x * x - 25, color: "violet" }], points: [{ x: 2.5, y: 0, label: "(2.5, 0)", color: "amber" }, { x: -2.5, y: 0, label: "(−2.5, 0)", color: "amber" }], step: { x: 1, y: 5 } })),
  mc("Which graph shown is the perfect square y = x² − 6x + 9?", "the blue one touching (3, 0)", ["the violet one crossing at ±3", "the red one above the axis", "none of them"], "A perfect square touches the axis once.", planeDoc({ view: { xmin: -5, xmax: 6, ymin: -10, ymax: 16 }, curves: [{ f: (x) => x * x - 9, color: "violet" }, { f: (x) => (x - 3) ** 2, color: "blue" }, { f: (x) => x * x + 4, color: "red" }], step: { x: 1, y: 2 } })),
  num(S`For which positive $k$ does $x^2-k$ have zeros $\pm6$?`, 36, "k = 6²."),
  mc(S`Factor fully $-12x^2+3$.`, S`$-3(2x-1)(2x+1)$`, [S`$3(2x-1)(2x+1)$`, S`$-3(2x-1)^2$`, S`$-(12x-3)(x+1)$`], "−3(4x² − 1)."),
  num(S`The area of a square is $x^2+16x+64$ cm². Enter its side length when $x=7$.`, 15, "(x + 8)²: side x + 8."),
  num(S`Two numbers differ by $10$ and their squares differ by $200$. Enter the larger number.`, 15, "a² − b² = (a − b)(a + b) = 10(a + b) = 200 ⇒ a + b = 20."),
  mx(S`Factor fully $x^4-8x^2+16$ and type it.`, "(x-2)^2*(x+2)^2", "(x² − 4)² = ((x − 2)(x + 2))²."),
];

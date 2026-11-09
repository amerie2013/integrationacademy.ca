// 2.3 Factoring Simple Trinomials — 20 easy + 20 medium (choices built from the factors)
import { mc, ms, num, tf, fill, mx } from "../../bank/kit.mjs";
import { areaBox, planeDoc } from "../../figs.mjs";
import { tex } from "./alg.mjs";
const S = String.raw;
const f = (r, s) => `(x${r < 0 ? "-" : "+"}${Math.abs(r)})(x${s < 0 ? "-" : "+"}${Math.abs(s)})`;
/** factor x² + (r+s)x + rs; distractors: wrong signs and a wrong pair */
const fq = (r, s, alt) => mc(S`Factor $${tex(1, r + s, r * s)}$.`, `$${f(r, s)}$`, [`$${f(-r, -s)}$`, `$${f(r, -s)}$`, `$${f(alt[0], alt[1])}$`], `Product ${r * s}, sum ${r + s}: ${r} and ${s}.`);

export const E = [
  fq(2, 5, [1, 10]), fq(3, 4, [2, 6]), fq(-2, -7, [-1, -14]), fq(-3, -5, [-1, -15]),
  fq(6, -2, [3, -4]), fq(-6, 2, [-4, 3]), fq(9, -1, [3, -3]), fq(-8, 3, [-6, 4]),
  num(S`Two numbers multiply to $18$ and add to $11$. Enter the larger.`, 9, "2 and 9."),
  num(S`Two numbers multiply to $-20$ and add to $1$. Enter the positive one.`, 5, "5 and −4."),
  num(S`Two numbers multiply to $24$ and add to $-10$. Enter the smaller.`, -6, "−4 and −6."),
  tf(S`$x^2+7x+12=(x+3)(x+4)$.`, true, "3 · 4 = 12, 3 + 4 = 7."),
  tf(S`$x^2+8x+12=(x+3)(x+4)$.`, false, "The sum is 7, not 8: (x + 2)(x + 6)."),
  fill(S`$x^2-x-12=(x-4)(x+\square)$. The missing number is ____.`, ["3"], "−4 · 3 = −12."),
  fill(S`$x^2+10x+16=(x+2)(x+\square)$. The missing number is ____.`, ["8"], "2 · 8 = 16."),
  mc(S`If $c>0$ and $b<0$ in $x^2+bx+c$, what are the signs of the two numbers?`, "both negative", ["both positive", "opposite", "cannot tell"], "Product +, sum −."),
  mc(S`If $c<0$ in $x^2+bx+c$, the two numbers…`, "have opposite signs", ["are both negative", "are both positive", "are equal"], "A negative product."),
  mc("The area model shows x² + 9x + 20. What are its factors?", S`$(x+4)(x+5)$`, [S`$(x+2)(x+10)$`, S`$(x+1)(x+20)$`, S`$(x+9)(x+20)$`], "Cells 5x and 4x add to 9x.", areaBox(["x", "+5"], ["x", "+4"], [["x²", "5x"], ["4x", "20"]])),
  mc("The graph of y = x² − 2x − 8 is shown. Which factored form matches its x-intercepts?", S`$(x-4)(x+2)$`, [S`$(x+4)(x-2)$`, S`$(x-8)(x+1)$`, S`$(x-4)(x-2)$`], "Zeros 4 and −2.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -10, ymax: 8 }, curves: [{ f: (x) => x * x - 2 * x - 8, color: "violet" }], points: [{ x: 4, y: 0, label: "(4, 0)", color: "amber" }, { x: -2, y: 0, label: "(−2, 0)", color: "amber" }] })),
  num(S`$x^2+bx+15=(x+3)(x+5)$. Enter $b$.`, 8, "3 + 5."),
];

export const M = [
  fq(-9, 4, [-12, 3]), fq(12, -3, [9, -4]), fq(-5, -9, [-3, -15]), fq(7, -8, [4, -14]),
  mc(S`Factor fully $2x^2-6x-56$.`, S`$2(x-7)(x+4)$`, [S`$2(x+7)(x-4)$`, S`$(2x-7)(x+4)$`, S`$2(x-14)(x+2)$`], "2(x² − 3x − 28)."),
  mc(S`Factor fully $5x^2+25x+30$.`, S`$5(x+2)(x+3)$`, [S`$5(x+1)(x+6)$`, S`$(5x+10)(x+3)$`, S`$5(x+5)(x+6)$`], "5(x² + 5x + 6)."),
  mc(S`Factor fully $-x^2+x+20$.`, S`$-(x-5)(x+4)$`, [S`$-(x+5)(x-4)$`, S`$(x-5)(x+4)$`, S`$-(x-10)(x+2)$`], "−(x² − x − 20)."),
  mc(S`Factor fully $x^3-7x^2+10x$.`, S`$x(x-2)(x-5)$`, [S`$x(x+2)(x+5)$`, S`$x(x-1)(x-10)$`, S`$(x-2)(x-5)$`], "x(x² − 7x + 10)."),
  mc(S`Which trinomial cannot be factored over the integers?`, S`$x^2+3x+5$`, [S`$x^2+6x+5$`, S`$x^2-4x-5$`, S`$x^2+4x-5$`], "Pairs of 5 sum to ±6 or ±4."),
  num(S`Enter the positive $x$-intercept of $y=x^2+2x-35$.`, 5, "(x + 7)(x − 5)."),
  num(S`Enter the negative $x$-intercept of $y=x^2-5x-24$.`, -3, "(x − 8)(x + 3)."),
  num(S`How many integer values of $b$ make $x^2+bx+10$ factorable?`, 4, "Pairs (1,10), (2,5) and negatives: b = ±11, ±7."),
  ms(S`Select every value of $b$ that makes $x^2+bx-12$ factorable over the integers.`, ["1", "4", "−11", "5", "−1"], [0, 1, 2, 4], "Sums of pairs of −12: ±1, ±4, ±11."),
  tf(S`$x^2-14x+49=(x-7)^2$.`, true, "−7 · −7 = 49, sum −14."),
  fill(S`$x^2+bx+18=(x+2)(x+9)$, so $b=$ ____.`, ["11"], "2 + 9."),
  mx(S`Factor $x^2-12x+32$ and type the result.`, "(x-4)*(x-8)", "−4 and −8."),
  num(S`A rectangle has area $x^2+11x+30$ and one side $x+5$. Enter the other side when $x=4$.`, 10, "(x + 5)(x + 6)."),
  mc("The area model shows a trinomial. Which is it, factored?", S`$(x-3)(x+7)$`, [S`$(x+3)(x-7)$`, S`$(x-3)(x-7)$`, S`$(x+3)(x+7)$`], "Cells 7x and −3x: x² + 4x − 21.", areaBox(["x", "+7"], ["x", "−3"], [["x²", "7x"], ["−3x", "−21"]])),
  mc("The parabola shown has zeros −6 and 1. Which equation is it?", S`$y=x^2+5x-6$`, [S`$y=x^2-5x-6$`, S`$y=x^2+5x+6$`, S`$y=x^2-7x+6$`], "(x + 6)(x − 1).", planeDoc({ view: { xmin: -8, xmax: 3, ymin: -14, ymax: 8 }, curves: [{ f: (x) => x * x + 5 * x - 6, color: "violet" }], points: [{ x: -6, y: 0, label: "(−6, 0)", color: "amber" }, { x: 1, y: 0, label: "(1, 0)", color: "amber" }], step: { x: 1, y: 2 } })),
  num(S`Factor $x^2+x-6$ and enter its value at $x=22$.`, 500, "(x + 3)(x − 2) = 25 · 20."),
];

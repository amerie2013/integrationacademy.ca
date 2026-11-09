// 2.4 Factoring Complex Trinomials — 20 easy + 20 medium (trinomials built from the factors)
import { mc, ms, num, tf, fill, mx } from "../../bank/kit.mjs";
import { areaBox, planeDoc } from "../../figs.mjs";
import { tex, mul, bin } from "./alg.mjs";
const S = String.raw;
const F2 = (p, q, r, s) => `(${bin(p, q)})(${bin(r, s)})`;
/** factor (px+q)(rx+s); distractors swap/flip signs */
const fq = (p, q, r, s) => { const [a, b, c] = mul(p, q, r, s); return mc(S`Factor $${tex(a, b, c)}$.`, `$${F2(p, q, r, s)}$`, [`$${F2(p, -q, r, -s)}$`, `$${F2(p, s, r, q)}$`, `$${F2(p, -s, r, -q)}$`], `Product ac = ${a * c}, sum ${b}; check by expanding.`); };

export const E = [
  num(S`For $2x^2+7x+3$, enter the product $ac$.`, 6, "2 · 3."),
  num(S`For $3x^2-5x-2$, enter the product $ac$.`, -6, "3 · (−2)."),
  num(S`For $2x^2+9x+10$, two numbers have product $20$ and sum $9$. Enter the larger.`, 5, "4 and 5."),
  num(S`For $5x^2-7x+2$, two numbers have product $10$ and sum $-7$. Enter the smaller.`, -5, "−2 and −5."),
  fq(2, 1, 1, 3), fq(3, 1, 1, 2), fq(2, -1, 1, 4), fq(3, -2, 1, -1), fq(5, 1, 1, -2), fq(2, 3, 1, -1),
  tf(S`$(2x+1)(x+5)=2x^2+11x+5$.`, true, "10x + x."),
  tf(S`$(3x-1)(x+2)=3x^2+6x-1$.`, false, "3x² + 5x − 2."),
  fill(S`$2x^2+5x+3=(2x+3)(x+\square)$. The missing number is ____.`, ["1"], "3 · 1 = 3."),
  fill(S`$3x^2+10x+3=(3x+1)(x+\square)$. The missing number is ____.`, ["3"], "1 · 3 = 3."),
  mc(S`To factor $2x^2+11x+12$, how is the middle term split?`, S`$3x+8x$`, [S`$4x+7x$`, S`$2x+9x$`, S`$6x+5x$`], "Product 24, sum 11: 3 and 8."),
  mc("The area model shows a complex trinomial. What are its factors?", S`$(2x+3)(x+4)$`, [S`$(2x+4)(x+3)$`, S`$(2x+12)(x+1)$`, S`$(x+3)(x+4)$`], "Sides 2x + 3 and x + 4.", areaBox(["x", "+4"], ["2x", "+3"], [["2x²", "8x"], ["3x", "12"]])),
  mc("The graph of y = 2x² − x − 3 is shown. Which factorisation matches its zeros −1 and 1.5?", S`$(2x-3)(x+1)$`, [S`$(2x+3)(x-1)$`, S`$(2x-1)(x+3)$`, S`$(x-3)(2x+1)$`], "2x − 3 = 0 at 1.5; x + 1 = 0 at −1.", planeDoc({ view: { xmin: -2, xmax: 3, ymin: -4, ymax: 6 }, curves: [{ f: (x) => 2 * x * x - x - 3, color: "violet" }], points: [{ x: -1, y: 0, label: "(−1, 0)", color: "amber" }, { x: 1.5, y: 0, label: "(1.5, 0)", color: "amber" }] })),
  num(S`$(3x+2)(x-4)=3x^2+bx-8$. Enter $b$.`, -10, "−12x + 2x."),
  mc(S`What is the first step in factoring $4x^2+10x+6$?`, "take out the common factor 2", ["find the product 24", "use a difference of squares", "complete the square"], "2(2x² + 5x + 3) = 2(2x + 3)(x + 1)."),
  num(S`For $7x^2+15x+2$, two numbers have product $14$ and sum $15$. Enter the smaller.`, 1, "1 and 14: (7x + 1)(x + 2)."),
];

export const M = [
  fq(3, 4, 2, -1), fq(4, -3, 1, 2), fq(2, -5, 3, 1), fq(5, 2, 2, -3), fq(4, 1, 3, -2), fq(6, -1, 1, -3),
  mc(S`Factor fully $6x^2+15x+9$.`, S`$3(2x+3)(x+1)$`, [S`$(6x+9)(x+1)$`, S`$3(2x+1)(x+3)$`, S`$3(2x+3)(x+3)$`], "3(2x² + 5x + 3)."),
  mc(S`Factor fully $-3x^2+7x-2$.`, S`$-(3x-1)(x-2)$`, [S`$-(3x+1)(x+2)$`, S`$(3x-1)(x-2)$`, S`$-(3x-2)(x-1)$`], "−(3x² − 7x + 2)."),
  mc(S`Factor fully $8x^2-2x-6$.`, S`$2(4x+3)(x-1)$`, [S`$2(4x-3)(x+1)$`, S`$(8x+6)(x-1)$`, S`$2(4x+1)(x-3)$`], "2(4x² − x − 3)."),
  num(S`Enter the positive zero of $3x^2+x-10$.`, 5 / 3, "(3x − 5)(x + 2).", null, 0.001),
  num(S`Enter the negative zero of $4x^2+4x-3$.`, -1.5, "(2x + 3)(2x − 1).", null, 1e-9),
  num(S`How many positive integers $b$ make $2x^2+bx+3$ factorable?`, 2, "ac = 6: sums 7 and 5."),
  tf(S`$4x^2+12x+9$ can be factored by decomposition.`, true, "6 and 6: (2x + 3)²."),
  ms(S`Select every factorisation that is correct.`, [S`$6x^2+x-1=(3x-1)(2x+1)$`, S`$2x^2-7x+3=(2x-1)(x-3)$`, S`$3x^2+8x+4=(3x+4)(x+2)$`, S`$5x^2-3x-2=(5x+2)(x-1)$`], [0, 1, 3], "(3x + 4)(x + 2) = 3x² + 10x + 8."),
  mx(S`Factor $2x^2+x-6$ and type the result.`, "(2*x-3)*(x+2)", "ac = −12, sum 1: 4 and −3."),
  mc("The area model has two blank cells. Which split of the middle term does it show for 3x² + 11x + 6?", S`$9x+2x$`, [S`$6x+5x$`, S`$3x+8x$`, S`$11x+0x$`], "(3x + 2)(x + 3): cells 9x and 2x.", areaBox(["x", "+3"], ["3x", "+2"], [["3x²", "9x"], ["2x", "6"]])),
  mc("The parabola y = −2x² + 5x + 3 is shown. Which factored form gives its zeros?", S`$-(2x+1)(x-3)$`, [S`$-(2x-1)(x+3)$`, S`$(2x+1)(x-3)$`, S`$-(x+1)(2x-3)$`], "Zeros −0.5 and 3.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -6, ymax: 8 }, curves: [{ f: (x) => -2 * x * x + 5 * x + 3, color: "violet" }], points: [{ x: -0.5, y: 0, label: "(−0.5, 0)", color: "amber" }, { x: 3, y: 0, label: "(3, 0)", color: "amber" }] })),
  num(S`A ball's height is $h(t)=-5t^2+9t+2$. Enter its landing time (s).`, 2, "−(5t + 1)(t − 2)."),
  fill(S`$10x^2-x-3=(5x-3)(2x+\square)$. The missing number is ____.`, ["1"], "−3 · 1 = −3."),
  num(S`A rectangle has area $3x^2+14x+8$ and width $3x+2$. Enter its length when $x=5$.`, 9, "(3x + 2)(x + 4): x + 4 = 9."),
];

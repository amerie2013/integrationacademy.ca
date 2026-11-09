// 2.1 Expanding and Simplifying Quadratic Expressions — 20 easy + 20 medium (answers computed from the factors)
import { mc, ms, num, tf, fill, mx } from "../../bank/kit.mjs";
import { areaBox } from "../../figs.mjs";
import { tex, ans, mul, bin } from "./alg.mjs";
const S = String.raw;
const ex = (p, q, r, s, extra = "") => { const [a, b, c] = mul(p, q, r, s); return mx(S`Expand${extra} $(${bin(p, q)})(${bin(r, s)})$.`, ans(a, b, c), `= ${tex(a, b, c).replace(/\^2/g, "²")}.`); };

export const E = [
  mx(S`Expand $3(x+7)$.`, "3*x+21", "3·x + 3·7."),
  mx(S`Expand $x(x-9)$.`, "x^2-9*x", "x·x − 9x."),
  mx(S`Expand $-2x(x+5)$.`, "-2*x^2-10*x", "Both terms change sign."),
  mx(S`Expand $4x(3x-1)$.`, "12*x^2-4*x", "4x·3x = 12x²."),
  ex(1, 2, 1, 6), ex(1, -3, 1, 5), ex(1, -4, 1, -7), ex(1, 8, 1, -2),
  mx(S`Expand $(x+5)^2$.`, "x^2+10*x+25", "a² + 2ab + b².", areaBox(["x", "+5"], ["x", "+5"], [["x²", "5x"], ["5x", "25"]])),
  mx(S`Expand $(x-6)^2$.`, "x^2-12*x+36", "a² − 2ab + b²."),
  mx(S`Expand $(x+9)(x-9)$.`, "x^2-81", "Difference of squares."),
  tf(S`$(x+3)^2=x^2+9$.`, false, "Missing 6x."),
  tf(S`$(x-2)(x+2)=x^2-4$.`, true, "Middle terms cancel."),
  num(S`How many products do you write before collecting when expanding $(x+a)(x+b)$?`, 4, "Every term times every term."),
  num(S`In $(x+4)(x+5)=x^2+bx+20$, enter $b$.`, 9, "4 + 5."),
  num(S`In $(x-3)(x+8)=x^2+bx+c$, enter $c$.`, -24, "−3 · 8."),
  mc(S`Which is the expansion of $(x+1)(x+10)$?`, S`$x^2+11x+10$`, [S`$x^2+10x+11$`, S`$x^2+11x+11$`, S`$x^2+10$`], "x² + 10x + x + 10."),
  mc("The area model shows which product?", S`$(x+3)(x+4)$`, [S`$(x+12)(x+7)$`, S`$(x+3)(x+7)$`, S`$(3x)(4x)$`], "Side lengths x + 3 and x + 4.", areaBox(["x", "+4"], ["x", "+3"], [["x²", "4x"], ["3x", "12"]])),
  fill(S`$(x+6)(x+2)=x^2+8x+\square$. The missing number is ____.`, ["12"], "6 × 2."),
  mx(S`Expand and simplify $2(x+1)+x(x-3)$.`, "x^2-x+2", "2x + 2 + x² − 3x."),
];

export const M = [
  ex(2, 3, 1, 4), ex(3, -1, 2, 5), ex(4, 1, 1, -3), ex(2, -5, 3, -2),
  mx(S`Expand $(2x+3)^2$.`, "4*x^2+12*x+9", "(2x)² + 2(2x)(3) + 9.", areaBox(["2x", "+3"], ["2x", "+3"], [["4x²", "6x"], ["6x", "9"]])),
  mx(S`Expand $(3x-4)^2$.`, "9*x^2-24*x+16", "(3x)² − 2(3x)(4) + 16."),
  mx(S`Expand $(4x+7)(4x-7)$.`, "16*x^2-49", "(4x)² − 7²."),
  mx(S`Expand and simplify $(x+2)(x+3)-(x+1)(x-1)$.`, "5*x+7", "x² + 5x + 6 − x² + 1."),
  mx(S`Expand and simplify $3(x-1)^2-2x$.`, "3*x^2-8*x+3", "3x² − 6x + 3 − 2x."),
  mx(S`Expand and simplify $-(x-4)(x+2)$.`, "-x^2+2*x+8", "−(x² − 2x − 8)."),
  num(S`$(2x+5)(x-3)=2x^2+bx-15$. Enter $b$.`, -1, "−6x + 5x."),
  num(S`$(5x-2)^2=25x^2+bx+4$. Enter $b$.`, -20, "2(5x)(−2)."),
  mc(S`Which equals $(x-7)^2$?`, S`$x^2-14x+49$`, [S`$x^2-49$`, S`$x^2+49$`, S`$x^2-7x+49$`], "a² − 2ab + b²."),
  mc("The area model shows a product. What is its expanded form?", S`$6x^2+7x-3$`, [S`$6x^2-7x-3$`, S`$6x^2+11x-3$`, S`$5x^2+7x-3$`], "6x² + 9x − 2x − 3.", areaBox(["3x", "−1"], ["2x", "+3"], [["6x²", "−2x"], ["9x", "−3"]])),
  ms(S`Select every expression equal to $x^2-16$.`, [S`$(x-4)(x+4)$`, S`$(x-4)^2$`, S`$(4+x)(x-4)$`, S`$(x-8)(x+2)$`], [0, 2], "Difference of squares (order does not matter)."),
  mx(S`A rectangle is $(x+4)$ m by $(2x-1)$ m. Write its area in standard form.`, "2*x^2+7*x-4", "2x² − x + 8x − 4."),
  mx(S`A square of side $(x+3)$ cm has a $2$ cm by $2$ cm square cut out. Write the remaining area in standard form.`, "x^2+6*x+5", "x² + 6x + 9 − 4."),
  num(S`Evaluate $(x+3)(x-5)$ at $x=7$ by first expanding: enter the value.`, 20, "x² − 2x − 15 at 7: 49 − 14 − 15."),
  tf(S`$-(x+2)^2=-x^2-4x-4$.`, true, "−(x² + 4x + 4)."),
  fill(S`$(x+k)^2=x^2+14x+49$. Then $k=$ ____.`, ["7"], "2k = 14."),
];

// 2.5 Factoring Special Quadratics — 20 easy + 20 medium
import { mc, ms, num, tf, fill, mx } from "../../bank/kit.mjs";
import { areaBox, planeDoc } from "../../figs.mjs";
const S = String.raw;

export const E = [
  mc(S`Factor $x^2-36$.`, S`$(x-6)(x+6)$`, [S`$(x-6)^2$`, S`$(x-18)(x+2)$`, S`$(x+6)^2$`], "Difference of squares."),
  mc(S`Factor $x^2-1$.`, S`$(x-1)(x+1)$`, [S`$(x-1)^2$`, S`$x(x-1)$`, "cannot be factored"], "1 = 1²."),
  mc(S`Factor $4x^2-9$.`, S`$(2x-3)(2x+3)$`, [S`$(4x-3)(x+3)$`, S`$(2x-9)(2x+1)$`, S`$(2x-3)^2$`], "(2x)² − 3²."),
  mc(S`Factor $x^2+10x+25$.`, S`$(x+5)^2$`, [S`$(x-5)^2$`, S`$(x+5)(x-5)$`, S`$(x+25)(x+1)$`], "2(5) = 10."),
  mc(S`Factor $x^2-8x+16$.`, S`$(x-4)^2$`, [S`$(x+4)^2$`, S`$(x-4)(x+4)$`, S`$(x-8)(x-2)$`], "−2(4) = −8."),
  mc(S`Which is a sum of squares?`, S`$x^2+49$`, [S`$x^2-49$`, S`$x^2+14x+49$`, S`$49-x^2$`], "A + between two squares."),
  tf(S`$x^2+16=(x+4)^2$.`, false, "(x + 4)² = x² + 8x + 16."),
  tf(S`$x^2-100=(x-10)(x+10)$.`, true, "Difference of squares."),
  tf(S`$x^2+81$ cannot be factored over the real numbers.`, true, "It is never zero."),
  tf(S`$9x^2+6x+1=(3x+1)^2$.`, true, "2(3x)(1) = 6x."),
  fill(S`$x^2-121=(x-11)(x+\square)$. The missing number is ____.`, ["11"], "11² = 121."),
  fill(S`$x^2+12x+36=(x+\square)^2$. The missing number is ____.`, ["6"], "6² = 36."),
  num(S`Enter the positive zero of $x^2-49$.`, 7, "(x − 7)(x + 7)."),
  num(S`How many $x$-intercepts does $y=(x-3)^2$ have?`, 1, "A double root."),
  num(S`Use a difference of squares to compute $51\times49$.`, 2499, "50² − 1."),
  mc(S`Is $x^2+6x+8$ a perfect square trinomial?`, "No: 8 is not a perfect square", ["Yes: (x + 3)²", "Yes: (x + 4)²", "No: it cannot be factored"], "It factors as (x + 2)(x + 4)."),
  mc("The area model shows a special product. Which pattern is it?", "difference of squares", ["perfect square", "sum of squares", "common factor"], "The middle cells cancel.", areaBox(["x", "+7"], ["x", "−7"], [["x²", "7x"], ["−7x", "−49"]])),
  mc("The graph of y = x² − 4 is shown. Which factored form explains its zeros?", S`$(x-2)(x+2)$`, [S`$(x-2)^2$`, S`$(x-4)(x+4)$`, S`$x(x-4)$`], "Zeros ±2.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 4, color: "violet" }], points: [{ x: 2, y: 0, label: "(2, 0)", color: "amber" }, { x: -2, y: 0, label: "(−2, 0)", color: "amber" }] })),
  mx(S`Factor $x^2-144$ and type it.`, "(x-12)*(x+12)", "12² = 144."),
  mc(S`Factor $25-x^2$.`, S`$(5-x)(5+x)$`, [S`$(x-5)(x+5)$`, S`$(5-x)^2$`, "cannot be factored"], "5² − x²."),
];

export const M = [
  mc(S`Factor $16x^2-49$.`, S`$(4x-7)(4x+7)$`, [S`$(4x-7)^2$`, S`$(16x-7)(x+7)$`, S`$(8x-7)(8x+7)$`], "(4x)² − 7²."),
  mc(S`Factor $25x^2+20x+4$.`, S`$(5x+2)^2$`, [S`$(5x+4)^2$`, S`$(5x+2)(5x-2)$`, S`$(25x+2)(x+2)$`], "2(5x)(2) = 20x."),
  mc(S`Factor $4x^2-12x+9$.`, S`$(2x-3)^2$`, [S`$(2x+3)^2$`, S`$(4x-3)(x-3)$`, S`$(2x-3)(2x+3)$`], "2(2x)(3) = 12x."),
  mc(S`Factor fully $2x^2-50$.`, S`$2(x-5)(x+5)$`, [S`$(2x-5)(x+10)$`, S`$2(x-5)^2$`, S`$(x-5)(2x+10)$`], "2(x² − 25)."),
  mc(S`Factor fully $3x^2+30x+75$.`, S`$3(x+5)^2$`, [S`$(3x+15)(x+5)$ only`, S`$3(x+25)(x+1)$`, S`$3(x-5)^2$`], "3(x² + 10x + 25)."),
  mc(S`Factor fully $x^3-9x$.`, S`$x(x-3)(x+3)$`, [S`$x(x-3)^2$`, S`$(x-3)(x+3)$`, S`$x(x^2+9)$`], "x(x² − 9)."),
  mc(S`Factor fully $-x^2+18x-81$.`, S`$-(x-9)^2$`, [S`$(x-9)^2$`, S`$-(x+9)^2$`, S`$-(x-9)(x+9)$`], "−(x² − 18x + 81)."),
  num(S`$9x^2+kx+16$ is a perfect square with $k>0$. Enter $k$.`, 24, "2(3x)(4) = 24x."),
  num(S`$x^2-20x+c$ is a perfect square. Enter $c$.`, 100, "(x − 10)²."),
  num(S`Compute $87^2-13^2$ by factoring.`, 7400, "74 × 100."),
  num(S`Compute $103\times97$ by factoring.`, 9991, "100² − 9."),
  ms(S`Select every expression that is a perfect square trinomial.`, [S`$x^2+2x+1$`, S`$x^2+4x+16$`, S`$4x^2-4x+1$`, S`$9x^2+12x+4$`, S`$x^2-10x+20$`], [0, 2, 3], "Middle must be ±2ab."),
  tf(S`$(x+2)^2-25=(x-3)(x+7)$.`, true, "(x + 2 − 5)(x + 2 + 5)."),
  mx(S`Factor $(x-1)^2-16$ and type it.`, "(x-5)*(x+3)", "(x − 1 − 4)(x − 1 + 4)."),
  mc("The graph y = (x + 3)² touches the x-axis once. Which expanded form matches?", S`$x^2+6x+9$`, [S`$x^2+9$`, S`$x^2-6x+9$`, S`$x^2+3x+9$`], "Double root at −3.", planeDoc({ view: { xmin: -7, xmax: 1, ymin: -1, ymax: 9 }, curves: [{ f: (x) => (x + 3) ** 2, color: "violet" }], points: [{ x: -3, y: 0, label: "(−3, 0)", color: "amber" }] })),
  mc("The area model shows a perfect square. What is the trinomial?", S`$9x^2-30x+25$`, [S`$9x^2-15x+25$`, S`$9x^2+30x+25$`, S`$9x^2-25$`], "Two cells of −15x.", areaBox(["3x", "−5"], ["3x", "−5"], [["9x²", "−15x"], ["−15x", "25"]])),
  num(S`A square tile of side $x$ cm has a $6$ cm square cut out. The remaining area is $64$ cm² when $x=$ ? Enter $x$.`, 10, "x² − 36 = 64 ⇒ x² = 100."),
  fill(S`$49x^2-1=(7x-1)(7x+\square)$. The missing number is ____.`, ["1"], "1² = 1."),
  num(S`How many $x$-intercepts does $y=x^2+9$ have?`, 0, "Never zero."),
  tf(S`$x^2-7$ factors over the integers as a difference of squares.`, false, "7 is not a perfect square."),
];

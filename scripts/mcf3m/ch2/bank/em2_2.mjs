// 2.2 Common Factoring — 20 easy + 20 medium
import { mc, ms, num, tf, fill, mx } from "../../bank/kit.mjs";
import { areaBox, planeDoc } from "../../figs.mjs";
const S = String.raw;

export const E = [
  num(S`Enter the GCF of $14$ and $35$.`, 7, "7 divides both."),
  mc(S`What is the GCF of $6x^2$ and $9x$?`, S`$3x$`, [S`$3$`, S`$3x^2$`, S`$x$`], "GCF of 6, 9 is 3; lowest power x."),
  mc(S`Factor $5x+20$.`, S`$5(x+4)$`, [S`$5(x+20)$`, S`$5x(1+4)$`, S`$4(x+5)$`], "20 ÷ 5 = 4."),
  mc(S`Factor $x^2+8x$.`, S`$x(x+8)$`, [S`$8x(x+1)$`, S`$x(x+8x)$`, S`$x^2(1+8)$`], "GCF x."),
  mc(S`Factor $3x^2-12x$.`, S`$3x(x-4)$`, [S`$3(x^2-12x)$`, S`$x(3x-4)$`, S`$3x(x-12)$`], "GCF 3x."),
  mc(S`Factor $-4x-8$ with a negative GCF.`, S`$-4(x+2)$`, [S`$-4(x-2)$`, S`$4(x+2)$`, S`$-4(x-8)$`], "−8 ÷ −4 = 2."),
  mc(S`Factor $10x^2+15x$.`, S`$5x(2x+3)$`, [S`$5(2x^2+3x)$`, S`$10x(x+15)$`, S`$5x(2x+15)$`], "GCF 5x."),
  tf(S`$6x+6=6(x+1)$.`, true, "A whole term divided by itself leaves 1."),
  tf(S`$2x(4x+6)$ is fully factored.`, false, "4x + 6 still has a factor 2: 4x(2x + 3)."),
  tf(S`$x(x-3)+4(x-3)=(x-3)(x+4)$.`, true, "Common bracket."),
  fill(S`$12x^2+18x=6x(2x+\square)$. The missing number is ____.`, ["3"], "18x ÷ 6x."),
  fill(S`$-9x^2+3x=-3x(3x\ \square\ 1)$. The missing sign is ____.`, ["-", "−"], "3x ÷ (−3x) = −1."),
  num(S`$x^2-11x=x(x-11)$. Enter the non-zero value of $x$ that makes it zero.`, 11, "x − 11 = 0."),
  mx(S`Factor $7x^2+14x$ and type the result.`, "7*x*(x+2)", "GCF 7x."),
  mc("The area model shows 8x² + 12x. What is the missing side length?", S`$2x+3$`, [S`$4x+3$`, S`$2x+12$`, S`$x+3$`], "8x² ÷ 4x = 2x and 12x ÷ 4x = 3.", areaBox(["?", "?"], ["4x"], [["8x²", "12x"]])),
  mc(S`Factor $x(x+5)+2(x+5)$.`, S`$(x+5)(x+2)$`, [S`$(x+5)(2x)$`, S`$x(x+7)$`, S`$(x+5)^2$`], "Take out (x + 5)."),
  num(S`What is the GCF of $16$, $24$ and $40$?`, 8, "8 divides all three."),
  mc(S`Factor $20-5x$.`, S`$5(4-x)$`, [S`$5(4+x)$`, S`$5(x-4)$`, S`$20(1-x)$`], "GCF 5."),
  mc("The graph shows y = x² − 6x. Which factored form gives its x-intercepts?", S`$x(x-6)$`, [S`$x(x+6)$`, S`$6x(x-1)$`, S`$(x-6)^2$`], "Zeros 0 and 6.", planeDoc({ view: { xmin: -2, xmax: 8, ymin: -10, ymax: 8 }, curves: [{ f: (x) => x * x - 6 * x, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "amber" }, { x: 6, y: 0, label: "(6, 0)", color: "amber" }] })),
  mc(S`Factor $9x+9$.`, S`$9(x+1)$`, [S`$9(x)$`, S`$9x$`, S`$x(9+9)$`], "9 ÷ 9 = 1."),
];

export const M = [
  mc(S`Factor fully $18x^2-27x$.`, S`$9x(2x-3)$`, [S`$3x(6x-9)$`, S`$9(2x^2-3x)$`, S`$9x(2x-27)$`], "GCF 9x."),
  mc(S`Factor fully $-6x^2-24x$.`, S`$-6x(x+4)$`, [S`$-6x(x-4)$`, S`$6x(x+4)$`, S`$-6(x^2-4x)$`], "Divide both terms by −6x."),
  mc(S`Factor fully $4x^2-12x+20$.`, S`$4(x^2-3x+5)$`, [S`$4x(x-3+5)$`, S`$2(2x^2-6x+10)$`, S`$4(x^2-12x+20)$`], "GCF 4."),
  mc(S`Factor fully $8x^3+12x^2$.`, S`$4x^2(2x+3)$`, [S`$4x(2x^2+3x)$`, S`$2x^2(4x+6)$`, S`$4x^2(2x+12)$`], "GCF 4x²."),
  mc(S`Factor $3x(x-2)-5(x-2)$.`, S`$(x-2)(3x-5)$`, [S`$(x-2)(3x+5)$`, S`$(3x-5)(x+2)$`, S`$-15x(x-2)$`], "Common bracket."),
  mc(S`Factor by grouping $x^2+5x+2x+10$.`, S`$(x+5)(x+2)$`, [S`$(x+5)(x+10)$`, S`$x(x+7)+10$`, S`$(x+2)(x+10)$`], "x(x + 5) + 2(x + 5)."),
  mc(S`Factor by grouping $2x^2-8x+3x-12$.`, S`$(x-4)(2x+3)$`, [S`$(x+4)(2x-3)$`, S`$(x-4)(2x-3)$`, S`$2x(x-4)+3$`], "2x(x − 4) + 3(x − 4)."),
  mc(S`Factor by grouping $3x^2-6x-x+2$.`, S`$(x-2)(3x-1)$`, [S`$(x-2)(3x+1)$`, S`$(x+2)(3x-1)$`, S`$3x(x-2)-x$`], "3x(x − 2) − 1(x − 2)."),
  num(S`$h(t)=-5t^2+40t$. Factor and enter the non-zero time when $h=0$.`, 8, "−5t(t − 8)."),
  num(S`$A=2x^2+10x$ is the area of a rectangle of width $2x$. Enter its length when $x=3$.`, 8, "A = 2x(x + 5): length x + 5."),
  tf(S`$-x^2+7x=-x(x-7)$.`, true, "−x · x = −x², −x · (−7) = 7x."),
  tf(S`$5x^2-10x=5x(x-10)$.`, false, "10x ÷ 5x = 2: 5x(x − 2)."),
  ms(S`Select every correct factorisation of $12x^2+16x$.`, [S`$4x(3x+4)$`, S`$2x(6x+8)$`, S`$4(3x^2+4x)$`, S`$4x(3x+16)$`], [0, 1, 2], "All three are equal, but only 4x(3x + 4) is fully factored."),
  fill(S`$x(2x-1)-(2x-1)=(2x-1)(x\ \square\ 1)$. The missing sign is ____.`, ["-", "−"], "The second term is −1·(2x − 1)."),
  mx(S`Factor $-3x^2+21x$ with a negative GCF and type it.`, "-3*x*(x-7)", "GCF −3x."),
  num(S`Factor $x^2-29x$ and use it to evaluate at $x=129$.`, 12900, "129 · 100."),
  mc("The rectangle's area is 15x² − 10x and one side is 5x. What is the other side?", S`$3x-2$`, [S`$3x-10$`, S`$10x-2$`, S`$3x+2$`], "Divide by 5x.", areaBox(["?"], ["5x"], [["15x² − 10x"]])),
  mc("The parabola y = −2x² + 8x is shown. Which factored form explains its x-intercepts?", S`$-2x(x-4)$`, [S`$-2x(x+4)$`, S`$2x(x-4)$`, S`$-2(x-8)$`], "Zeros 0 and 4.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -4, ymax: 10 }, curves: [{ f: (x) => -2 * x * x + 8 * x, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "amber" }, { x: 4, y: 0, label: "(4, 0)", color: "amber" }] })),
  num(S`What is the GCF of $24x^2$, $36x$ and $60$?`, 12, "The constant term has no x."),
  tf(S`Grouping only works when the two brackets match exactly.`, true, "Then the bracket can be taken out."),
];

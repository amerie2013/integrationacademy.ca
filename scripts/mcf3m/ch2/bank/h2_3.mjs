// 2.3 Factoring Simple Trinomials — 20 hard questions
import { mc, ms, num, tf, mx } from "../../bank/kit.mjs";
import { areaBox, planeDoc } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "2.3 Factoring Simple Trinomials";
export const Q = [
  mc(S`Factor fully $3x^3+6x^2-72x$.`, S`$3x(x+6)(x-4)$`, [S`$3x(x-6)(x+4)$`, S`$3(x+6)(x-4)$`, S`$x(3x+18)(x-4)$`], "3x(x² + 2x − 24)."),
  mc(S`Factor fully $-2x^2+16x-30$.`, S`$-2(x-3)(x-5)$`, [S`$-2(x+3)(x+5)$`, S`$2(x-3)(x-5)$`, S`$-2(x-15)(x-1)$`], "−2(x² − 8x + 15)."),
  mc(S`Factor $x^4-11x^2+18$.`, S`$(x^2-2)(x^2-9)$`, [S`$(x^2+2)(x^2+9)$`, S`$(x^2-3)(x^2-6)$`, S`$(x-2)(x-9)$`], "Let u = x²: u² − 11u + 18."),
  mc(S`Factor fully $x^4-10x^2+9$.`, S`$(x-1)(x+1)(x-3)(x+3)$`, [S`$(x^2-1)(x^2-9)$`, S`$(x-1)(x-9)$`, S`$(x-3)^2(x+1)^2$`], "(x² − 1)(x² − 9), then two differences of squares."),
  num(S`How many integers $b$ make $x^2+bx-30$ factorable?`, 8, "Pairs (1,−30),(−1,30),(2,−15),(−2,15),(3,−10),(−3,10),(5,−6),(−5,6)."),
  num(S`Enter the largest integer $b$ for which $x^2+bx+36$ factors over the integers.`, 37, "1 · 36."),
  num(S`$x^2+bx+c$ has zeros $-3$ and $8$. Enter $c$.`, -24, "(x + 3)(x − 8)."),
  num(S`$x^2+bx+c$ has zeros $-3$ and $8$. Enter $b$.`, -5, "−(−3 + 8)."),
  num(S`$P(x)=-x^2+18x-72$ (thousands of dollars). Enter the larger break-even value.`, 12, "−(x − 6)(x − 12)."),
  num(S`For $P(x)=-x^2+18x-72$, enter the maximum profit (thousands of dollars).`, 9, "Vertex at x = 9: −81 + 162 − 72.", planeDoc({ view: { xmin: 3, xmax: 15, ymin: -10, ymax: 12 }, curves: [{ f: (x) => -x * x + 18 * x - 72, color: "violet" }], points: [{ x: 6, y: 0, label: "(6, 0)", color: "amber" }, { x: 12, y: 0, label: "(12, 0)", color: "amber" }], step: { x: 1, y: 2 } })),
  mx(S`Factor $x^2+2xy-15y^2$ (treat $y$ as a number) and type the result.`, "(x+5*y)*(x-3*y)", "Product −15y², sum 2y: 5y and −3y."),
  num(S`Factor $x^2-x-2$ and evaluate it at $x=1002$.`, 1003000, "(x − 2)(x + 1) = 1000 · 1003."),
  ms(S`Select every TRUE statement about $y=x^2-6x-16$.`, ["it factors as (x − 8)(x + 2)", "its zeros are 8 and −2", "its y-intercept is 16", "its axis of symmetry is x = 3"], [0, 1, 3], "y-intercept −16; axis midway between 8 and −2."),
  tf(S`If $x^2+bx+c=(x+r)(x+s)$ and $c$ is prime, then $b=\pm(c+1)$.`, true, "The only pairs are ±1 and ±c."),
  mc("The parabola's x-intercepts are shown. Which trinomial is it (leading coefficient 1)?", S`$x^2-x-20$`, [S`$x^2+x-20$`, S`$x^2-9x+20$`, S`$x^2-20$`], "(x − 5)(x + 4).", planeDoc({ view: { xmin: -6, xmax: 7, ymin: -24, ymax: 10 }, curves: [{ f: (x) => x * x - x - 20, color: "violet" }], points: [{ x: 5, y: 0, label: "(5, 0)", color: "amber" }, { x: -4, y: 0, label: "(−4, 0)", color: "amber" }], step: { x: 1, y: 4 } })),
  mc("The area model is complete. Which factored form does it show?", S`$(x-6)(x-2)$`, [S`$(x+6)(x+2)$`, S`$(x-6)(x+2)$`, S`$(x-4)(x-3)$`], "Cells −2x, −6x and +12: x² − 8x + 12.", areaBox(["x", "−2"], ["x", "−6"], [["x²", "−2x"], ["−6x", "+12"]])),
  num(S`A rectangle has area $x^2+3x-40$ m² and one side $(x-5)$ m. Enter the other side (m) when $x=9$.`, 17, "x² + 3x − 40 = (x − 5)(x + 8); x + 8 = 17.", areaBox(["x", "+8"], ["x", "−5"], [["x²", "8x"], ["−5x", "−40"]])),
  num(S`For which $k$ is $(x-4)$ a factor of $x^2+kx-28$?`, 3, "x = 4 must be a zero: 16 + 4k − 28 = 0 ⇒ k = 3."),
  mc(S`Factor fully $(x+1)^2-3(x+1)-10$.`, S`$(x-4)(x+3)$`, [S`$(x-5)(x+2)$`, S`$(x+6)(x-1)$`, S`$(x-4)(x-3)$`], "Let u = x + 1: (u − 5)(u + 2)."),
  num(S`The product of two consecutive integers is $132$. Enter the positive smaller integer.`, 11, "x² + x − 132 = (x + 12)(x − 11)."),
];

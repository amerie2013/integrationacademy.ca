// 2.1 Expanding and Simplifying Quadratic Expressions — 20 hard questions
import { mc, ms, num, tf, mx } from "../../bank/kit.mjs";
import { areaBox, planeDoc } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "2.1 Expanding and Simplifying Quadratic Expressions";
export const Q = [
  mx(S`Expand and simplify $2(3x-1)^2-(x+4)(x-4)$.`, "17*x^2-12*x+18", "18x² − 12x + 2 − x² + 16."),
  mx(S`Expand and simplify $(x-5)^2-(x+5)^2$.`, "-20*x", "−10x − 10x."),
  mx(S`Expand and simplify $-3(x+2)(x-1)+(2x-1)^2$.`, "x^2-7*x+7", "−3x² − 3x + 6 + 4x² − 4x + 1."),
  mx(S`Expand and simplify $(x+1)(x+2)+(x+3)(x+4)$.`, "2*x^2+10*x+14", "x² + 3x + 2 + x² + 7x + 12."),
  num(S`$(ax+3)(2x-5)=6x^2+bx-15$. Enter $b$.`, -9, "a = 3; b = −15 + 6."),
  num(S`$(ax-2)^2=9x^2+bx+4$ with $a>0$. Enter $b$.`, -12, "a = 3; −2(3)(2)."),
  num(S`For which $k$ does $(x+k)(x-6)$ have no $x$-term?`, 6, "k − 6 = 0."),
  num(S`For which $k$ does $(2x+k)(x+3)$ have constant term $-12$?`, -4, "3k = −12."),
  num(S`$(x+4)^2-(x-4)^2=bx$. Enter $b$.`, 16, "8x + 8x."),
  num(S`Use $(x+4)^2-(x-4)^2=16x$ to compute $104^2-96^2$.`, 1600, "x = 100."),
  num(S`Use a difference of squares to compute $63\times57$.`, 3591, "60² − 3² = 3600 − 9."),
  mx(S`A $20$ m by $12$ m pool has a deck of width $x$ m around it. Write the deck area in standard form.`, "4*x^2+64*x", "(20 + 2x)(12 + 2x) − 240.", areaBox(["20", "+2x"], ["12", "+2x"], [["240", "24x"], ["40x", "4x²"]])),
  num(S`The deck around a $20$ m by $12$ m pool has area $4x^2+64x$. Enter the deck area when $x=1.5$ (m²).`, 105, "4(2.25) + 96."),
  mx(S`A ticket price of $(20+x)$ dollars sells $(300-10x)$ tickets. Write the revenue in standard form.`, "-10*x^2+100*x+6000", "6000 − 200x + 300x − 10x²."),
  mc("The area model is partly filled. Which binomial product does it show?", S`$(2x-3)(x+5)$`, [S`$(2x+5)(x-3)$`, S`$(2x-3)(x-5)$`, S`$(x-3)(2x+5)$`], "Columns 2x and −3, rows x and +5.", areaBox(["2x", "−3"], ["x", "+5"], [["2x²", "−3x"], ["10x", "−15"]])),
  ms(S`Select every TRUE identity.`, [S`$(a+b)^2=a^2+2ab+b^2$`, S`$(a-b)^2=a^2-b^2$`, S`$(a+b)(a-b)=a^2-b^2$`, S`$(a-b)^2=(b-a)^2$`], [0, 2, 3], "(a − b)² has a middle term; (b − a)² is the same square."),
  tf(S`$(x+3)^2$ and $x^2+6x+9$ have the same graph.`, true, "They are equivalent expressions.", planeDoc({ view: { xmin: -7, xmax: 2, ymin: -1, ymax: 10 }, curves: [{ f: (x) => (x + 3) ** 2, color: "violet" }], points: [{ x: -3, y: 0, label: "(−3, 0)", color: "amber" }] })),
  mc("The graph shows y = (x − 2)(x + 4). Which standard form matches it?", S`$y=x^2+2x-8$`, [S`$y=x^2-2x-8$`, S`$y=x^2+2x+8$`, S`$y=x^2-8$`], "−2 · 4 = −8; −2 + 4 = 2. The graph's y-intercept is −8.", planeDoc({ view: { xmin: -6, xmax: 4, ymin: -10, ymax: 8 }, curves: [{ f: (x) => (x - 2) * (x + 4), color: "violet" }], points: [{ x: 0, y: -8, label: "(0, −8)", color: "amber" }, { x: 2, y: 0, label: "(2, 0)" }, { x: -4, y: 0, label: "(−4, 0)" }] })),
  num(S`A rectangle $(x+6)$ by $(x+2)$ has a square of side $x$ removed. Enter the remaining area when $x=5$.`, 52, "x² + 8x + 12 − x² = 8x + 12.", areaBox(["x", "+2"], ["x", "+6"], [["x² (removed)", "2x"], ["6x", "12"]])),
  mx(S`Simplify $(x+1)^2+(x+2)^2+(x+3)^2$.`, "3*x^2+12*x+14", "3x² + (2 + 4 + 6)x + (1 + 4 + 9)."),
];

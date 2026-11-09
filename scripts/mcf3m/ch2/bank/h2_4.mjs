// 2.4 Factoring Complex Trinomials — 20 hard questions
import { mc, ms, num, tf, mx } from "../../bank/kit.mjs";
import { areaBox, planeDoc } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "2.4 Factoring Complex Trinomials";
export const Q = [
  mc(S`Factor $12x^2-x-6$.`, S`$(4x-3)(3x+2)$`, [S`$(4x+3)(3x-2)$`, S`$(6x-3)(2x+2)$`, S`$(12x-1)(x+6)$`], "ac = −72, sum −1: −9 and 8."),
  mc(S`Factor $15x^2+14x-8$.`, S`$(5x-2)(3x+4)$`, [S`$(5x+2)(3x-4)$`, S`$(5x+4)(3x-2)$`, S`$(15x-8)(x+1)$`], "ac = −120, sum 14: 20 and −6."),
  mc(S`Factor fully $18x^2-21x-9$.`, S`$3(3x+1)(2x-3)$`, [S`$3(3x-1)(2x+3)$`, S`$(9x+3)(2x-3)$`, S`$3(6x+1)(x-3)$`], "3(6x² − 7x − 3): −9 and 2."),
  mc(S`Factor fully $-10x^2+11x+6$.`, S`$-(5x+2)(2x-3)$`, [S`$-(5x-2)(2x+3)$`, S`$(5x+2)(2x-3)$`, S`$-(10x+3)(x-2)$`], "−(10x² − 11x − 6): −15 and 4."),
  num(S`How many positive integers $b$ make $4x^2+bx+3$ factorable over the integers?`, 3, "ac = 12: sums 13, 8, 7."),
  num(S`How many integers $b$ make $3x^2+bx-2$ factorable?`, 4, "ac = −6: sums ±5, ±1."),
  num(S`Enter the positive zero of $6x^2-x-12$ as a decimal (two places).`, 1.5, "(2x − 3)(3x + 4).", null, 0.01),
  num(S`Enter the sum of the zeros of $8x^2-10x-3$.`, 1.25, "(4x + 1)(2x − 3): −0.25 + 1.5.", null, 0.001),
  mx(S`Factor $6x^2-13xy+6y^2$ (treat $y$ as a number) and type it.`, "(2*x-3*y)*(3*x-2*y)", "ac = 36y², sum −13y: −9y, −4y."),
  num(S`A stone is thrown: $h(t)=-5t^2+18t+8$. Enter the landing time (s).`, 4, "−(5t + 2)(t − 4).", planeDoc({ view: { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 26 }, curves: [{ f: (t) => -5 * t * t + 18 * t + 8, a: 0, b: 4, color: "violet" }], step: { x: 0.5, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })),
  num(S`$(px+1)(2x+q)=6x^2+11x+3$. Enter $q$.`, 3, "2p = 6 ⇒ p = 3; q · 1 = 3 ⇒ q = 3; middle 3(3)x + 2x = 11x ✓."),
  mc("The area model shows 6x² + 7x − 20. Which factors complete it?", S`$(3x-4)(2x+5)$`, [S`$(3x+4)(2x-5)$`, S`$(6x-5)(x+4)$`, S`$(3x+5)(2x-4)$`], "Cells 15x and −8x add to 7x.", areaBox(["2x", "+5"], ["3x", "−4"], [["6x²", "15x"], ["−8x", "−20"]])),
  mc("The parabola shown is y = 3x² − 10x − 8. Which factorisation gives its marked zeros?", S`$(3x+2)(x-4)$`, [S`$(3x-2)(x+4)$`, S`$(3x+4)(x-2)$`, S`$(x+2)(3x-4)$`], "Zeros −2/3 and 4.", planeDoc({ view: { xmin: -2, xmax: 5.5, ymin: -18, ymax: 12 }, curves: [{ f: (x) => 3 * x * x - 10 * x - 8, color: "violet" }], points: [{ x: -2 / 3, y: 0, label: "(−0.67, 0)", color: "amber" }, { x: 4, y: 0, label: "(4, 0)", color: "amber" }], step: { x: 1, y: 3 } })),
  ms(S`Select every trinomial that factors over the integers.`, [S`$6x^2+5x+1$`, S`$6x^2+5x+2$`, S`$6x^2+7x+2$`, S`$6x^2-x-2$`], [0, 2, 3], "6x² + 5x + 2: ac = 12, no pair sums to 5."),
  tf(S`If $ax^2+bx+c$ factors over the integers, then so does $ax^2-bx+c$.`, true, "Change the signs of both numbers in the pair."),
  num(S`For which $k$ is $(2x-1)$ a factor of $2x^2+kx-4$?`, 7, "x = ½ is a zero: ½ + k/2 − 4 = 0 ⇒ k = 7."),
  mx(S`Factor fully $4x^3-4x^2-15x$.`, "x*(2*x-5)*(2*x+3)", "x(4x² − 4x − 15): −10 and 6."),
  num(S`A rectangular garden has area $6x^2+19x+10$ m² and width $(2x+5)$ m. Enter its length when $x=3$.`, 11, "(2x + 5)(3x + 2): 3(3) + 2.", areaBox(["3x", "+2"], ["2x", "+5"], [["6x²", "4x"], ["15x", "10"]])),
  mc(S`Factor $2(x+1)^2+5(x+1)-3$.`, S`$(2x+1)(x+4)$`, [S`$(2x-1)(x+3)$`, S`$(2x+3)(x-1)$`, S`$(x+1)(2x+5)$`], "u = x + 1: (2u − 1)(u + 3)."),
  num(S`The zeros of $ax^2+bx+c$ are $\tfrac12$ and $-3$ and $a=2$. Enter $c$.`, -3, "2(x − ½)(x + 3) = (2x − 1)(x + 3)."),
];

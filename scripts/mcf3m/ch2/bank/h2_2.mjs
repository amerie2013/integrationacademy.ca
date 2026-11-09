// 2.2 Common Factoring — 20 hard questions
import { mc, ms, num, tf, mx } from "../../bank/kit.mjs";
import { areaBox, planeDoc } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "2.2 Common Factoring";
export const Q = [
  mc(S`Factor fully $30x^3-45x^2+15x$.`, S`$15x(2x^2-3x+1)$`, [S`$15(2x^3-3x^2+x)$`, S`$5x(6x^2-9x+3)$`, S`$15x(2x^2-3x)$`], "GCF 15x; the last term leaves 1."),
  mc(S`Factor $4x(x+3)-(x+3)$.`, S`$(x+3)(4x-1)$`, [S`$(x+3)(4x)$`, S`$4x(x+3)$`, S`$(x+3)(4x+1)$`], "Hidden −1."),
  mc(S`Factor by grouping $6x^2+4x-15x-10$.`, S`$(3x+2)(2x-5)$`, [S`$(3x-2)(2x+5)$`, S`$(3x+2)(2x+5)$`, S`$2x(3x+2)-15x$`], "2x(3x + 2) − 5(3x + 2)."),
  mc(S`Factor by grouping $10x^2-4x-15x+6$.`, S`$(5x-2)(2x-3)$`, [S`$(5x+2)(2x-3)$`, S`$(5x-2)(2x+3)$`, S`$(5x-2)(2x-6)$`], "2x(5x − 2) − 3(5x − 2)."),
  num(S`$x^2-23x$ at $x=123$: factor first and enter the value.`, 12300, "123 · 100."),
  num(S`$5x^2+35x$ at $x=-7$: enter the value.`, 0, "5x(x + 7) has a zero at −7."),
  num(S`A ball's height is $h(t)=-4.9t^2+19.6t$. Enter its landing time (s).`, 4, "−4.9t(t − 4).", planeDoc({ view: { xmin: -0.3, xmax: 4.5, ymin: -2, ymax: 22 }, curves: [{ f: (t) => -4.9 * t * t + 19.6 * t, a: 0, b: 4, color: "violet" }], step: { x: 0.5, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })),
  num(S`For the ball $h(t)=-4.9t^2+19.6t$, enter the maximum height (m) using symmetry of the zeros.`, 19.6, "Vertex at t = 2: −19.6 + 39.2.", null, 0.01),
  mx(S`A rectangle has area $14x^2-21x$ and width $7x$. Type its length.`, "2*x-3", "14x² − 21x = 7x(2x − 3).", areaBox(["?", "?"], ["7x"], [["14x²", "−21x"]])),
  mx(S`Factor fully $-8x^3+12x^2$.`, "-4*x^2*(2*x-3)", "GCF −4x²."),
  ms(S`Which expressions have $(x-5)$ as a factor?`, [S`$x(x-5)+3(x-5)$`, S`$x^2-5x$`, S`$2x^2-10x+3x-15$`, S`$x^2+5x$`], [0, 1, 2], "Factor each; x² + 5x = x(x + 5)."),
  tf(S`$x(x-4)+(4-x)=(x-4)(x-1)$.`, true, "4 − x = −(x − 4)."),
  num(S`The area of a rectangle is $3x^2+12x$; its length is $x+4$. Enter its width when $x=2$.`, 6, "Width 3x."),
  mc("The area model shows a four-term expression. Which grouping gives its factors?", S`$x(x+6)-2(x+6)=(x+6)(x-2)$`, [S`$x(x-6)+2(x-6)$`, S`$(x+6)(x+2)$`, S`$x(x+4)-12$`], "Cells x², 6x, −2x, −12.", areaBox(["x", "+6"], ["x", "−2"], [["x²", "6x"], ["−2x", "−12"]])),
  mc("The graph shows y = 3x² + 12x. Which factored form and zeros are correct?", S`$3x(x+4)$; zeros $0$, $-4$`, [S`$3x(x-4)$; zeros $0$, $4$`, S`$3(x+4)$; zero $-4$`, S`$x(3x+4)$; zeros $0$, $-\frac43$`], "GCF 3x.", planeDoc({ view: { xmin: -6, xmax: 2, ymin: -14, ymax: 10 }, curves: [{ f: (x) => 3 * x * x + 12 * x, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "amber" }, { x: -4, y: 0, label: "(−4, 0)", color: "amber" }], step: { x: 1, y: 2 } })),
  num(S`For which value of $k$ does $kx^2+18x=6x(x+3)$?`, 6, "6x · x = 6x²."),
  num(S`Factor $x^2+x$ and evaluate it at $x=999$.`, 999000, "999 · 1000."),
  mc(S`Factor fully $2x(x+1)^2-6(x+1)$.`, S`$2(x+1)(x^2+x-3)$`, [S`$2(x+1)(x-3)$`, S`$(x+1)(2x-6)$`, S`$2(x+1)^2(x-3)$`], "Take out 2(x + 1): x(x + 1) − 3."),
  mx(S`Factor $-x^2+9x$ with a negative GCF.`, "-x*(x-9)", "GCF −x."),
  num(S`A garden of area $x^2+12x$ m² is $x$ m wide. If it is $20$ m long, enter $x$.`, 8, "Length x + 12 = 20.", areaBox(["x", "+12"], ["x"], [["x²", "12x"]])),
];

// 4.5 Maximum and Minimum Problems — 20 hard questions
import { mc, ms, num, tf } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "4.5 Maximum and Minimum Problems";
export const Q = [
  num(S`A gym has $500$ members at $40$ dollars a month. Each $2$-dollar increase loses $10$ members. Enter the best monthly price.`, 70, "(40 + 2x)(500 − 10x): zeros −20, 50 ⇒ x = 15: 40 + 30."),
  num(S`For the gym above, enter the maximum monthly revenue.`, 24500, "70 × 350."),
  num(S`A theatre sells $400$ seats at $30$ dollars; each $1.50$ decrease sells $40$ more. Enter the best price (dollars).`, 22.5, "(30 − 1.5x)(400 + 40x): zeros 20, −10 ⇒ x = 5.", null, 1e-9),
  num(S`$300$ m of fence encloses a rectangle divided into three equal pens by two fences parallel to the width. Enter the maximum total area.`, 2812.5, "4w + 2l = 300: A = w(150 − 2w), w = 37.5.", planeDoc({ view: { xmin: -2, xmax: 77, ymin: -100, ymax: 3100 }, curves: [{ f: (w) => w * (150 - 2 * w), a: 0, b: 75, color: "violet" }], step: { x: 10, y: 500 } }), 1e-9),
  num(S`A window is a rectangle of width $2x$ and height $y$ with perimeter $12$ m (no top arch). The area is $A=2x(6-2x)$. Enter the maximum area.`, 9, "Zeros 0, 3: x = 1.5: 3 × 3."),
  num(S`$h(t)=-4.9t^2+14.7t+10$. Enter the maximum height (two decimals).`, 21.03, "t = 1.5: −11.025 + 22.05 + 10.", planeDoc({ view: { xmin: -0.3, xmax: 4.2, ymin: -1, ymax: 24 }, curves: [{ f: (t) => -4.9 * t * t + 14.7 * t + 10, a: 0, b: 3.6, color: "violet" }], step: { x: 0.5, y: 2 }, xlabel: "t", ylabel: "h" }), 0.011),
  num(S`Two positive numbers have sum $30$. Enter the maximum value of the product of one and twice the other.`, 450, "2x(30 − x): x = 15."),
  num(S`The sum of two numbers is $20$. Enter the minimum of the sum of their squares.`, 200, "x² + (20 − x)² = 2(x − 10)² + 200."),
  num(S`$C=3x^2-90x+800$ (dollars, $x$ items). Enter the minimum cost.`, 125, "x = 15: 675 − 1350 + 800."),
  num(S`A rectangle is inscribed under the line $y=12-3x$ with corners at the origin. Enter its maximum area.`, 12, "A = x(12 − 3x): x = 2, A = 12."),
  ms(S`Select every TRUE statement about $P=36I-4I^2$.`, ["maximum at I = 4.5", "maximum power 81", "P = 0 at I = 9", "P is largest at I = 9"], [0, 1, 2], "Zeros 0 and 9."),
  mc("The graph shows profit P(x) (thousands of dollars). What is the maximum profit?", "18 thousand dollars", ["7 thousand dollars", "4 thousand dollars", "10 thousand dollars"], "Vertex (7, 18).", planeDoc({ view: { xmin: 0, xmax: 14, ymin: -25, ymax: 22 }, curves: [{ f: (x) => -2 * x * x + 28 * x - 80, color: "violet" }], points: [{ x: 7, y: 18, label: "(7, 18)", color: "amber" }], step: { x: 1, y: 5 } })),
  mc("The area of a pen against a wall is shown, but the rules limit x to at most 10 m. What is the largest allowed area?", "400 m² at x = 10", ["450 m² at x = 15", "300 m² at x = 5", "0 m²"], "A = x(60 − 2x) increases until x = 15.", planeDoc({ view: { xmin: -1, xmax: 31, ymin: -10, ymax: 500 }, curves: [{ f: (x) => x * (60 - 2 * x), a: 0, b: 30, color: "violet" }], vlines: [{ x: 10, color: "red", dash: true }], points: [{ x: 10, y: 400, label: "(10, 400)", color: "amber" }], step: { x: 5, y: 50 } })),
  tf(S`If the zeros of a revenue model are $-25$ and $15$, the best change in price is a decrease.`, true, "Vertex at x = −5."),
  num(S`$R=(25+x)(300-20x)$. Enter the best price (dollars).`, 20, "Zeros −25, 15 ⇒ x = −5."),
  num(S`A ball's maximum is $30$ m at $t=2$ s and it was thrown from $10$ m. Enter $a$ in $h=a(t-2)^2+30$.`, -5, "10 = 4a + 30."),
  num(S`For $h=-5(t-2)^2+30$, enter the landing time (two decimals).`, 2 + Math.sqrt(6), "(t − 2)² = 6.", null, 0.011),
  num(S`A rectangle has area $A=x(18-x)$. Enter the perimeter of the maximum-area rectangle.`, 36, "x = 9: a 9 × 9 square."),
  num(S`A rectangular lot beside a road is fenced on three sides (not along the road) with $120$ m of fence. Enter the maximum area (m²).`, 1800, "A = x(120 − 2x): zeros 0, 60 ⇒ x = 30: 30 × 60."),
  num(S`Two numbers differ by $14$. Enter the minimum of their product.`, -49, "n(n + 14) = (n + 7)² − 49."),
];

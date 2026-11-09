// 4.5 Maximum and Minimum Problems — 20 easy + 20 medium
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;
const vy = (a, b, c) => { const h = -b / (2 * a); return a * h * h + b * h + c; };

export const E = [
  num(S`$h(t)=-5t^2+10t+2$. Enter the maximum height.`, vy(-5, 10, 2), "t = 1."),
  num(S`$h(t)=-5t^2+30t$. Enter the maximum height.`, vy(-5, 30, 0), "t = 3."),
  num(S`$h(t)=-5t^2+30t$. Enter the time of the maximum.`, 3, "Zeros 0 and 6."),
  num(S`Enter the minimum value of $y=x^2-6x+14$.`, vy(1, -6, 14), "x = 3."),
  num(S`Enter the maximum value of $y=-x^2+8x-3$.`, vy(-1, 8, -3), "x = 4."),
  num(S`Two numbers sum to $16$. Enter their maximum product.`, 64, "8 × 8."),
  num(S`A rectangle has perimeter $40$ m. Enter its maximum area (m²).`, 100, "10 × 10."),
  num(S`$A=x(20-x)$. Enter the $x$ that gives maximum area.`, 10, "Zeros 0, 20."),
  num(S`$R=(10+x)(200-10x)$. Enter the $x$ for maximum revenue.`, 5, "Zeros −10, 20."),
  num(S`$C=x^2-12x+50$. Enter the minimum cost.`, vy(1, -12, 50), "x = 6."),
  mc(S`$y=-3(x-2)^2+7$ has …`, "a maximum of 7", ["a minimum of 7", "a maximum of 2", "a minimum of −3"], "a < 0."),
  mc(S`$y=2(x+1)^2-5$ has …`, "a minimum of −5", ["a maximum of −5", "a minimum of 1", "a maximum of 2"], "a > 0."),
  tf("The maximum of a parabola opening down is at its vertex.", true, "Turning point."),
  tf("A parabola opening up has a maximum value.", false, "It has a minimum."),
  fill(S`Revenue = price × ____.`, ["quantity", "number sold", "number of items"], "R = pq."),
  mc("The graph shows h(t). What is the maximum height?", "45 m", ["3 m", "6 m", "90 m"], "Read the vertex (3, 45).", planeDoc({ view: { xmin: -0.3, xmax: 6.5, ymin: -2, ymax: 50 }, curves: [{ f: (t) => -5 * t * t + 30 * t, a: 0, b: 6, color: "violet" }], points: [{ x: 3, y: 45, label: "(3, 45)", color: "amber" }], step: { x: 1, y: 5 } })),
  mc("The graph shows the area of a pen. Which width gives the most area?", "15 m", ["30 m", "450 m", "0 m"], "Vertex at x = 15.", planeDoc({ view: { xmin: -1, xmax: 31, ymin: -10, ymax: 500 }, curves: [{ f: (x) => x * (60 - 2 * x), a: 0, b: 30, color: "violet" }], points: [{ x: 15, y: 450, label: "(15, 450)", color: "amber" }], step: { x: 5, y: 50 } })),
  num(S`Two numbers differ by $6$. Enter the minimum of their product.`, -9, "n(n + 6) = (n + 3)² − 9."),
  num(S`$P=8I-2I^2$. Enter the maximum power.`, 8, "I = 2."),
  num(S`$A=x(50-2x)$. Enter the maximum area.`, 312.5, "x = 12.5: 12.5 · 25.", null, 1e-9),
];

export const M = [
  num(S`$100$ m of fence encloses three sides of a pen against a wall. Enter the maximum area.`, 1250, "x(100 − 2x) at x = 25."),
  num(S`A store sells $300$ hats at $20$ dollars; each $1$-dollar increase loses $10$ sales. Enter the best price.`, 25, "(20 + x)(300 − 10x): zeros −20, 30 ⇒ x = 5."),
  num(S`For the hats above, enter the maximum revenue (dollars).`, 6250, "25 × 250."),
  num(S`A bakery sells $200$ pies at $12$ dollars; each $1$-dollar decrease sells $20$ more. Enter the best price.`, 11, "(12 − x)(200 + 20x): zeros 12, −10 ⇒ x = 1."),
  num(S`$h(t)=-4.9t^2+24.5t+2$. Enter the maximum height (two decimals).`, 32.63, "t = 2.5: −30.625 + 61.25 + 2.", null, 0.011),
  num(S`$C=0.2x^2-8x+100$. Enter the number of items that minimizes cost.`, 20, "x = 8/0.4."),
  num(S`For $C=0.2x^2-8x+100$, enter the minimum cost.`, 20, "0.2(400) − 160 + 100."),
  num(S`A rectangle has one side on a wall and $36$ m of fence for the other three sides. Enter the maximum area.`, 162, "x(36 − 2x) at x = 9."),
  num(S`Two numbers sum to $15$. Enter the maximum of their product (decimal).`, 56.25, "7.5 × 7.5.", null, 1e-9),
  ms(S`Select every TRUE statement about $R=(10+x)(400-20x)$.`, ["the zeros are x = −10 and x = 20", "the maximum is at x = 5", "the best price is 15", "the maximum revenue is 4500"], [0, 1, 2, 3], "15 × 300 = 4500."),
  tf(S`For $A=x(40-2x)$ with $x\le5$, the maximum allowed area is at $x=5$.`, true, "The vertex x = 10 is outside; A increases up to x = 5."),
  mc("The graph shows a cost function. When is the cost lowest?", "at x = 15 items", ["at x = 0 items", "at x = 30 items", "it has no minimum"], "Vertex of a parabola opening up.", planeDoc({ view: { xmin: -1, xmax: 31, ymin: 0, ymax: 600 }, curves: [{ f: (x) => 2 * (x - 15) ** 2 + 120, a: 0, b: 30, color: "violet" }], points: [{ x: 15, y: 120, label: "(15, 120)", color: "amber" }], step: { x: 5, y: 100 } })),
  mc("The graph shows revenue vs price increase x. What is the best price if the current price is 8 dollars?", "11 dollars", ["3 dollars", "8 dollars", "1210 dollars"], "Vertex at x = 3.", planeDoc({ view: { xmin: -9, xmax: 15, ymin: -50, ymax: 1300 }, curves: [{ f: (x) => (8 + x) * (140 - 10 * x), a: -8, b: 14, color: "violet" }], points: [{ x: 3, y: 1210, label: "(3, 1210)", color: "amber" }], step: { x: 2, y: 200 } })),
  num(S`$P=20I-2.5I^2$. Enter the current (A) giving maximum power.`, 4, "I = 20/5."),
  num(S`A ball is thrown from the ground and lands after $6$ s, with $h=-5t(t-6)$. Enter its maximum height.`, 45, "t = 3."),
  fill(S`To find the vertex of $y=a(x-r)(x-s)$, average ____ and $s$.`, ["r"], "x = (r + s)/2."),
  num(S`A farmer has $240$ m of fence for a rectangle split in two by a fence parallel to the width. Enter the maximum total area.`, 2400, "3w + 2l = 240: A = w(120 − 1.5w), w = 40."),
  num(S`The sum of a number and twice another is $24$. Enter the maximum product of the two numbers.`, 72, "x + 2y = 24: P = y(24 − 2y), y = 6, x = 12."),
  mc(S`Why might the vertex not be the answer in a context?`, "it may lie outside the allowed domain", ["the vertex is never the answer", "parabolas have no vertex", "revenue cannot be maximized"], "Check the domain."),
  num(S`$R=(5+0.5x)(400-20x)$. Enter the best price (dollars).`, 7.5, "Zeros −10, 20 ⇒ x = 5: 5 + 2.5.", null, 1e-9),
];

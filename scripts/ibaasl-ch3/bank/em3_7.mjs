// 3.7 Applications of Quadratics — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  num(S`A ball has height $h=-5t^2+30t$ m. At what time is it highest?`, 3, "t = −30/(−10)."),
  num(S`What is the greatest height of the ball $h=-5t^2+30t$?`, 45, "h(3) = −45 + 90."),
  num(S`An arrow has height $h=-5t^2+50t$ m. When does it land?`, 10, "−5t(t − 10) = 0."),
  num("Two numbers add to 20. What is their greatest possible product?", 100, "x(20 − x) is greatest at x = 10."),
  num("A rectangle has perimeter 36 m. What is its greatest possible area?", 81, "A 9 m by 9 m square."),
  num(S`A stone has height $h=-5t^2+10t+40$ m. From what height was it thrown?`, 40, "h(0) = 40."),
  mc("For a height model h(t), the greatest height is given by:", "the y-coordinate of the vertex", ["the x-coordinate of the vertex", "the y-intercept", "the positive zero"], "The vertex is the highest point."),
  tf("For a projectile model h(t), the positive zero gives the time it lands.", true, "h = 0 at ground level."),
  num(S`The graph of $h=-4t^2+16t$ is shown. What is the greatest height?`, 16, "Vertex (2, 16).", planeDoc({ view: { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 20 }, curves: [{ f: (t) => -4 * t * t + 16 * t, a: 0, b: 4 }], points: [P(2, 16)], step: { x: 0.5, y: 2 }, xlabel: "t", ylabel: "h" })),
  num(S`The graph of $h=-5t^2+15t+20$ is shown. When does the object land?`, 4, "−5(t − 4)(t + 1) = 0; reject t = −1.", planeDoc({ view: { xmin: -0.5, xmax: 5, ymin: -3, ymax: 34 }, curves: [{ f: (t) => -5 * t * t + 15 * t + 20, a: 0, b: 4 }], points: [P(0, 20), P(4, 0)], step: { x: 0.5, y: 5 }, xlabel: "t", ylabel: "h" })),
  num(S`Revenue is $R=p(100-p)$. What price $p$ gives the greatest revenue?`, 50, "Halfway between the zeros 0 and 100."),
  num(S`Profit is $P(x)=-x^2+12x-20$. What is the greatest profit?`, 16, "x = 6: −36 + 72 − 20."),
  num(S`Profit is $P(x)=-x^2+12x-20$. What is the smaller break-even value of $x$?`, 2, "(x − 2)(x − 10) = 0."),
  fill("For a parabola that opens downward, the vertex gives the ___ value.", ["maximum", "Maximum", "greatest", "largest"], "It is the highest point."),
  num(S`The area of a pen is $A=x(50-2x)$. What is the greatest area?`, 312.5, "x = 12.5: 12.5 × 25.", null, 1e-9),
  num(S`A ball has height $h=2+12t-5t^2$ m. Find its height after 1 second.`, 9, "2 + 12 − 5."),
  mc("Two numbers add to 12. If one is x, their product is:", S`$x(12-x)$`, [S`$x(x-12)$`, S`$12x$`, S`$x+12-x$`], "The other number is 12 − x."),
  num(S`Profit is $P=-2(x-15)^2+450$. What is the greatest profit?`, 450, "At x = 15."),
  tf("A negative answer for a time should be rejected.", true, "Time in the model starts at 0."),
  num(S`A ball has height $h=-5t^2+35t$ m. At what time is it highest?`, 3.5, "t = 35/10.", null, 1e-9),
];

export const M = [
  num(S`A ball has height $h=-4.9t^2+24.5t+1.5$ m. What is its greatest height (2 d.p.)?`, 32.125, "t = 2.5: −30.625 + 61.25 + 1.5.", null, 0.01),
  num(S`A ball has height $h=-5t^2+20t+25$ m. When does it land?`, 5, "t² − 4t − 5 = 0 → (t − 5)(t + 1) = 0."),
  num("60 m of fencing makes three sides of a rectangle against a wall. What is the greatest area?", 450, "A = x(60 − 2x), greatest at x = 15."),
  num("A rectangle has perimeter 30 m and area 50 m². Find its shorter side.", 5, "x(15 − x) = 50 → (x − 5)(x − 10) = 0."),
  num("At a price of 20, 300 items sell. Each 1 increase in price loses 10 sales. Which price gives the greatest revenue?", 25, "R = (20 + x)(300 − 10x); zeros −20 and 30, so x = 5."),
  num("For the items above (20 each, 300 sold, 10 fewer per 1 increase), what is the greatest revenue?", 6250, "25 × 250."),
  num("Two numbers add to 10. What is the smallest possible sum of their squares?", 50, "x² + (10 − x)² is least at x = 5."),
  num(S`An arch follows $y=-0.2x^2+4x$ m. How wide is it at ground level?`, 20, "−0.2x(x − 20) = 0."),
  num("The arch shown follows y = 8 − x²/8. How high is it 4 m from the centre?", 6, "8 − 16/8.", planeDoc({ view: { xmin: -10, xmax: 10, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 8 - x * x / 8, a: -8, b: 8 }], points: [P(4, 6), P(0, 8)], step: { x: 2, y: 2 } })),
  num(S`The profit $P(x)=-0.5x^2+20x-150$ is shown. What is the greatest profit?`, 50, "x = 20: −200 + 400 − 150.", planeDoc({ view: { xmin: -2, xmax: 42, ymin: -160, ymax: 80 }, curves: [{ f: (x) => -0.5 * x * x + 20 * x - 150, a: 0, b: 40 }], points: [P(10, 0), P(30, 0), P(20, 50)], step: { x: 5, y: 20 } })),
  num(S`A ball has height $h=-5t^2+30t+5$ m. For how long is it above 25 m (2 d.p.)?`, 2 * Math.sqrt(5), "t² − 6t + 4 < 0 → 3 − √5 < t < 3 + √5.", null, 0.01),
  tf("Of all rectangles with the same perimeter, the square has the greatest area.", true, "x(s − x) is greatest at x = s/2."),
  num("A garden is 5 m longer than it is wide and has area 84 m². Find its width.", 7, "x(x + 5) = 84 → (x + 12)(x − 7) = 0."),
  num(S`A diver's height is $h=-5t^2+5t+10$ m. When does the diver reach the water?`, 2, "t² − t − 2 = 0 → (t − 2)(t + 1) = 0."),
  num("A positive number plus its square is 90. Find the number.", 9, "x² + x − 90 = (x + 10)(x − 9)."),
  mc(S`A ball's height is $h(t)=-5t^2+20t+3$. What does $h(0)=3$ mean?`, "It starts 3 m above the ground", ["It lands after 3 s", "Its greatest height is 3 m", "It is in the air for 3 s"], "t = 0 is the start."),
  num("200 m of fence makes a rectangle split into two pens by one fence parallel to the width. What is the greatest total area (nearest m²)?", 5000 / 3, "3w + 2l = 200 → A = w(100 − 1.5w), greatest at w = 100/3.", null, 0.5),
  ms(S`A ball's height is $h=-5(t-2)^2+45$. Which are true? Select all.`, ["Its greatest height is 45 m", "It is highest at t = 2", "It lands at t = 5", "It starts at 45 m"], [0, 1, 2], "h(0) = −20 + 45 = 25."),
  num(S`The cost of making $x$ items is $C=0.5x^2-40x+1000$. What is the least cost?`, 200, "x = 40: 800 − 1600 + 1000."),
  num(S`A rocket's height is $h=80t-5t^2$ m. For how many seconds is it above 300 m?`, 4, "t² − 16t + 60 < 0 → 6 < t < 10."),
];

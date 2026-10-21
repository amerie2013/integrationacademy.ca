// 3.7 Applications of Quadratics — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const TOPIC = "3.7 Applications of Quadratics";
export const Q = [
  num("90 m of fence makes a rectangle against a wall, with one extra fence from the wall dividing it into two pens. What is the greatest total area?", 675, "3w + l = 90 → A = w(90 − 3w), greatest at w = 15."),
  num("A ball thrown from 1.8 m reaches its greatest height of 21.8 m after 2 s (shown). When does it land (2 d.p.)?", 2 + Math.sqrt(4.36), "h = −5(t − 2)² + 21.8; (t − 2)² = 4.36.", planeDoc({ view: { xmin: -0.3, xmax: 4.6, ymin: -2, ymax: 25 }, curves: [{ f: (t) => -5 * (t - 2) ** 2 + 21.8, a: 0, b: 4.09 }], points: [P(0, 1.8), P(2, 21.8)], step: { x: 0.5, y: 5 }, xlabel: "t", ylabel: "h" }), 0.01),
  num("At 15 each, 600 tickets sell. Each 1 decrease in price sells 50 more. Which price gives the greatest revenue?", 13.5, "R = (15 − x)(600 + 50x); zeros 15 and −12, so x = 1.5.", null, 1e-9),
  num("For the tickets above (15 each, 600 sold, 50 more per 1 decrease), what is the greatest revenue?", 9112.5, "13.5 × 675.", null, 1e-6),
  num("A parabolic tunnel is 10 m wide and 6 m high (shown). How high is it 1.5 m from the centre (2 d.p.)?", 5.46, "y = 6 − (6/25)x²; 6 − 0.54.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -1, ymax: 7 }, curves: [{ f: (x) => 6 - (6 / 25) * x * x, a: -5, b: 5 }], vlines: [{ x: 1.5, color: "green", dash: true }, { x: -1.5, color: "green", dash: true }], points: [P(0, 6), P(1.5, 5.46)] }), 0.01),
  num("The two legs of a right triangle add to 14 cm. What is its greatest possible area?", 24.5, "½x(14 − x), greatest at x = 7.", null, 1e-9),
  num(S`$x+2y=24$. What is the greatest possible value of $xy$?`, 72, "y(24 − 2y), greatest at y = 6."),
  tf(S`If $h=-5t^2+bt$ has greatest value 20, then $b=20$ (with $b>0$).`, true, "The maximum is b²/20 = 20."),
  num(S`A stone is thrown from a cliff with height $h=-5t^2+10t+75$ m (shown). When does it hit the sea?`, 5, "t² − 2t − 15 = 0 → (t − 5)(t + 3) = 0.", planeDoc({ view: { xmin: -0.3, xmax: 5.6, ymin: -5, ymax: 90 }, curves: [{ f: (t) => -5 * t * t + 10 * t + 75, a: 0, b: 5 }], points: [P(0, 75), P(1, 80), P(5, 0)], step: { x: 1, y: 10 }, xlabel: "t", ylabel: "h" })),
  num(S`What is the greatest height of the stone $h=-5t^2+10t+75$?`, 80, "At t = 1."),
  num(S`Stopping distance is $d=0.006v^2+0.2v$ m for speed $v$ km/h. At what speed is $d=50$ m (1 d.p.)?`, (-0.2 + Math.sqrt(0.04 + 1.2)) / 0.012, "0.006v² + 0.2v − 50 = 0; take the positive root.", null, 0.1),
  num(S`Profit is $P=-(x-30)^2+400$. For how many whole numbers $x$ is the profit positive?`, 39, "(x − 30)² < 400 → 10 < x < 50."),
  mc(S`A bridge arch starts at $(0,0)$ and has its highest point at $(25,10)$. In $y=a(x-25)^2+10$, $a$ is:`, S`$-0.016$`, [S`$-0.4$`, S`$0.016$`, S`$-0.04$`], "625a + 10 = 0."),
  num("A rectangle has area 48 cm² and perimeter 28 cm (shown). How long is its diagonal?", 10, "x(14 − x) = 48 → sides 6 and 8.", planeDoc({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 7 }, segs: [{ pts: [[0, 0], [8, 0], [8, 6], [0, 6], [0, 0]], color: "violet" }, { pts: [[0, 0], [8, 6]], color: "red" }], step: { x: 1, y: 1 } })),
  num("The squares of two consecutive positive odd integers add to 130. Find the larger one.", 9, "x² + (x + 2)² = 130 → (x + 9)(x − 7) = 0."),
  num("A 120 km trip would take 1 hour less at a speed 10 km/h faster. Find the original speed in km/h.", 30, "120/v − 120/(v + 10) = 1 → v² + 10v − 1200 = 0."),
  ms(S`Revenue is $R(p)=-20p^2+800p$. Which are true? Select all.`, ["It is greatest at p = 20", "The greatest revenue is 8000", "R = 0 when p = 40", "R increases for p > 20"], [0, 1, 2], "R decreases after the vertex."),
  num(S`A stone follows $y=-0.05x^2+x+2$ m, with $x$ the horizontal distance (shown). How far away does it land (2 d.p.)?`, 10 + Math.sqrt(140), "x² − 20x − 40 = 0 → x = 10 + √140.", planeDoc({ view: { xmin: -1, xmax: 24, ymin: -1, ymax: 8 }, curves: [{ f: (x) => -0.05 * x * x + x + 2, a: 0, b: 21.83 }], points: [P(0, 2), P(10, 7)], step: { x: 2, y: 1 } }), 0.05),
  num(S`A ball's height satisfies $h(0)=2$, $h(1)=12$ and $h(2)=12$ for a quadratic $h(t)=at^2+bt+c$. Find its greatest height.`, 13.25, "c = 2, a = −5, b = 15; at t = 1.5.", null, 1e-9),
  num("A 10 m by 6 m pool has a path of equal width all around it. The path has area 36 m². Find its width.", 1, "(10 + 2x)(6 + 2x) − 60 = 36 → x² + 8x − 9 = 0."),
];

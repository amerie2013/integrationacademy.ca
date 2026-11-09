// 3.4 Solving Problems with Quadratic Equations — 20 hard questions
import { mc, ms, num, tf } from "../../bank/kit.mjs";
import { planeDoc, areaBox } from "../../figs.mjs";
const S = String.raw;

export const TOPIC = "3.4 Solving Problems with Quadratic Equations";
export const Q = [
  num(S`A $24$ m by $16$ m lawn has a path of uniform width inside its edge; the remaining lawn is $240$ m². Enter the path width.`, 2, "(24 − 2x)(16 − 2x) = 240 ⇒ x² − 20x + 36 = 0 ⇒ x = 2 (18 too wide).", areaBox(["24 − 2x"], ["16 − 2x"], [["240"]], "remaining lawn")),
  num(S`A rectangle has perimeter $34$ m and diagonal $13$ m. Enter its area (m²).`, 60, "w² − 17w + 60 = 0: 5 and 12."),
  num(S`The sum of the squares of two consecutive positive integers is $181$. Enter the larger.`, 10, "n² + (n + 1)² = 181 ⇒ n² + n − 90 = 0."),
  num(S`$h(t)=-5t^2+35t+40$. Enter the landing time (s).`, 8, "t² − 7t − 8 = (t − 8)(t + 1)."),
  num(S`$h(t)=-5t^2+35t+40$. For how many seconds is it above $70$ m?`, 5, "t² − 7t + 6 = 0: 1 and 6."),
  num(S`A store sells $(300-15x)$ items at $(10+x)$ dollars. Enter the larger $x$ for revenue $3360$ dollars.`, 6, "3000 + 150x − 15x² = 3360 ⇒ x² − 10x + 24 = 0 ⇒ (x − 4)(x − 6) = 0."),
  num(S`A pen against a wall uses $48$ m of fencing; area $280$ m². Enter the larger possible width (perpendicular to the wall).`, 14, "x(48 − 2x) = 280 ⇒ x² − 24x + 140 = 0 ⇒ (x − 10)(x − 14)."),
  num(S`Two trains leave at right angles; one is $7$ km/h faster. After $1$ h they are $13$ km apart. Enter the slower speed.`, 5, "v² + (v + 7)² = 169 ⇒ v² + 7v − 60 = 0."),
  num(S`A box with a square base of side $x$ cm and height $4$ cm has volume $196$ cm³. Enter $x$.`, 7, "4x² = 196."),
  num(S`An open box is made from a $20$ cm square sheet by cutting an $x$ cm square from each corner. The base area is $144$ cm². Enter $x$.`, 4, "(20 − 2x)² = 144 ⇒ 20 − 2x = 12 (positive side) ⇒ x = 4."),
  mc(S`$h(t)=-5t^2+20t+2$. Can the object reach $25$ m?`, "No: its maximum is 22 m", ["Yes, at t = 2", "Yes, twice", "Only at t = 0"], "Vertex at t = 2: −20 + 40 + 2 = 22.", planeDoc({ view: { xmin: -0.3, xmax: 4.5, ymin: -2, ymax: 28 }, curves: [{ f: (t) => -5 * t * t + 20 * t + 2, a: 0, b: 4.1, color: "violet" }], lines: [{ m: 0, b: 25, color: "red", dash: true }], step: { x: 0.5, y: 4 } })),
  mc("The graph shows a revenue model R(x) and a target line. How many prices give the target?", "two", ["one", "none", "infinitely many"], "The line crosses the parabola twice.", planeDoc({ view: { xmin: -1, xmax: 21, ymin: -100, ymax: 2400 }, curves: [{ f: (x) => (8 + x) * (200 - 10 * x), a: 0, b: 20, color: "violet" }], lines: [{ m: 0, b: 1920, color: "green", dash: true }], step: { x: 2, y: 400 } })),
  ms(S`A projectile's height is $h(t)=-5(t-1)(t-7)$. Select every true statement.`, ["it is launched at t = 1", "it lands at t = 7", "its maximum height is 45 m", "it is above 25 m for 4 s"], [0, 1, 2, 3], "Vertex t = 4: −5(3)(−3) = 45; h = 25 ⇒ t² − 8t + 12 = 0 ⇒ t = 2, 6, so 4 s above 25 m."),
  tf(S`If a height equation $h(t)=k$ has a double root, the object just touches height $k$ at its peak.`, true, "The line is tangent at the vertex."),
  num(S`A rectangle's length is twice its width; reducing each side by $2$ gives area $60$. Enter the original width.`, 8, "(w − 2)(2w − 2) = 60 ⇒ 2w² − 6w − 56 = 0 ⇒ w² − 3w − 28 = 0."),
  num(S`The height of a triangle is $3$ cm more than its base; area $20$ cm². Enter the base.`, 5, "½b(b + 3) = 20 ⇒ b² + 3b − 40 = 0."),
  mc("The diagram shows a border of width x around a 9 × 5 photo with total area 117. What is x?", "2", ["3", "4", "1"], "(9 + 2x)(5 + 2x) = 117 ⇒ 4x² + 28x − 72 = 0 ⇒ x² + 7x − 18 = 0.", areaBox(["9", "+2x"], ["5", "+2x"], [["45", "10x"], ["18x", "4x²"]])),
  num(S`The product of two consecutive even integers is $28$ more than $10$ times the larger. Enter the positive smaller.`, 12, "n(n + 2) = 10(n + 2) + 28 ⇒ n² − 8n − 48 = 0 ⇒ (n − 12)(n + 4) = 0."),
  num(S`$h(t)=-4.9t^2+29.4t$. Enter the landing time (s).`, 6, "−4.9t(t − 6)."),
  num(S`A ball thrown from a $25$ m roof: $h(t)=-5t^2+20t+25$. Enter the time it passes the roof height on the way down.`, 4, "−5t² + 20t = 0 ⇒ t = 0, 4."),
];

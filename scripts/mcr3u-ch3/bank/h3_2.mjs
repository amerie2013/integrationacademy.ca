// 3.2 Maximum and Minimum Values — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { P, graph, planeDoc } from "./fig.mjs";

export const TOPIC = "3.2 Maximum and Minimum Values";
export const Q = [
  num(String.raw`What is the smallest value of $x^2+7x+10.25$?`, -2, "(x + 3.5)² − 12.25 + 10.25."),
  num("A theatre sells 600 seats at 15 dollars. Each 0.50-dollar increase loses 15 seats. What is the maximum revenue?", 9187.5, "(15 + 0.5x)(600 − 15x): zeros −30, 40, x = 5: 17.5 × 525.", graph((x) => (15 + 0.5 * x) * (600 - 15 * x), { xmin: -32, xmax: 42, ymin: -500, ymax: 10500 }, [P(-30, 0), P(40, 0)], { step: { x: 10, y: 1000 } }), 0.01),
  num("For the theatre above (600 seats at 15 dollars, −15 seats per 0.50-dollar increase), what ticket price maximises revenue?", 17.5, "x = 5 increases.", null, 0.001),
  num(String.raw`Price $p=-0.25x+20$ dollars sells $x$ thousand items; cost $C=4x+120$ thousand dollars. What is the maximum profit (thousands)?`, 136, "P = −0.25x² + 16x − 120 at x = 32."),
  num("160 m of fence make a rectangle split into 3 pens by 2 fences parallel to the width. What is the largest total area (m²)?", 800, "4w + 2L = 160: A = w(80 − 2w), w = 20."),
  num(String.raw`What is the minimum value of $2x^2-12x+25$?`, 7, "2(x − 3)² + 7."),
  num("A rectangular yard against a barn uses 200 m of fence on the other three sides, but a 10 m gate opening in the side opposite the barn needs no fence. What is the largest area (m²)?", 5512.5, "2w + (L − 10) = 200 → A = w(210 − 2w), w = 52.5.", null, 0.01),
  num(String.raw`Two numbers satisfy $x+2y=24$. What is the largest possible value of $xy$?`, 72, "y(24 − 2y) at y = 6."),
  num("A rectangle has one corner at the origin and the opposite corner on y = 10 − 2x. What is its largest area?", 12.5, "x(10 − 2x) at x = 2.5.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 11 }, lines: [{ m: -2, b: 10, color: "violet" }], segs: [{ pts: [[0, 0], [2, 0], [2, 6], [0, 6], [0, 0]], color: "green" }], points: [P(2, 6, "(x, y)")] }), 0.001),
  num("Two numbers add to 14. What is the smallest possible sum of their squares?", 98, "x² + (14 − x)² is least at x = 7."),
  mc("Which function has the largest maximum value?", String.raw`$y=-x^2+6x$`, [String.raw`$y=-2x^2+8x$`, String.raw`$y=-\tfrac12x^2+4x$`, String.raw`$y=-x^2+4x+4$`], "Maxima 9, 8, 8, 8."),
  num(String.raw`For which $c$ does $y=x^2-6x+c$ have a minimum value of 0?`, 9, "(x − 3)² + c − 9."),
  num("The graph shows h(t) = −5t² + 20t + 25. At what time is the height greatest?", 2, "−20/(−10).", graph((t) => -5 * t * t + 20 * t + 25, { xmin: 0, xmax: 5.5, ymin: 0, ymax: 50 }, [P(2, 45)], { a: 0, step: { x: 0.5, y: 5 } })),
  num(String.raw`What is the greatest height reached by $h(t)=-5t^2+20t+25$?`, 45, "h(2)."),
  num("A cinema sells 400 tickets at 12 dollars. Each 1-dollar decrease adds 40 customers. What is the maximum revenue?", 4840, "(12 − x)(400 + 40x): zeros 12, −10 → x = 1: 11 × 440."),
  num(String.raw`The cost of producing $x$ hundred units is $C(x)=0.5x^2-30x+600$. What is the minimum cost?`, 150, "x = 30."),
  tf("Maximum profit always occurs at the same quantity as maximum revenue.", false, "Costs move the vertex."),
  num("The profit graph has break-even points 2 and 14 and has the form P(x) = −(x − 2)(x − 14). What is the maximum profit?", 36, "At x = 8: −(6)(−6).", graph((x) => -(x - 2) * (x - 14), { xmin: 0, xmax: 16, ymin: -10, ymax: 40 }, [P(2, 0), P(14, 0), P(8, 36)], { step: { x: 2, y: 5 } })),
  num(String.raw`$y=a(x-3)^2+k$ has a maximum value of 8 and passes through $(5,0)$. Find its y-intercept.`, -10, "4a + 8 = 0 → a = −2; −18 + 8."),
  num(String.raw`If $x+y=10$, what is the smallest value of $x^2+3y^2$?`, 75, "4x² − 60x + 300 at x = 7.5."),
];

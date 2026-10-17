// 5.4 The Pythagorean Theorem — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, polygon, prism } from "./fig.mjs";

export const TOPIC = "5.4 The Pythagorean Theorem";
export const Q = [
  num(`In the figure, ∠ABC = 90° and ∠ACD = 90°, AB = 8, BC = 6 and CD = 24. Find AD.`, 26, "AC = √(64 + 36) = 10; AD = √(100 + 576) = 26.", figDoc({ w: 300, items: [{ poly: [[0, 8], [0, 0], [6, 0]], fill: "blue", color: "blue" }, { poly: [[0, 8], [6, 0], [25.2, 14.4]], fill: "green", color: "green" }, { right: [[0, 8], [0, 0], [6, 0]] }, { right: [[0, 8], [6, 0], [25.2, 14.4]] }, { text: "A", at: [-1, 8.4], bold: true }, { text: "B", at: [-1, -0.8], bold: true }, { text: "C", at: [6.6, -1], bold: true }, { text: "D", at: [26.2, 15], bold: true }, { text: "8", at: [-1, 4], bold: true, color: "blue" }, { text: "6", at: [3, -1.1], bold: true, color: "blue" }, { text: "24", at: [17, 5.6], bold: true, color: "green" }] })),
  num(`A 7.5 m ladder reaches 7.2 m up a wall. If its foot slides 0.6 m further from the wall, how far down the wall does the top slide (2 decimal places)?`, 0.2, "Foot first √(56.25 − 51.84) = 2.1 m; then 2.7 m: top at √(56.25 − 7.29) ≈ 6.997 m; 7.2 − 6.997 ≈ 0.20.", null, 0.006),
  num(`A rectangle's length is 7 more than its width and its diagonal is 13. Find the width.`, 5, "w² + (w + 7)² = 169 → w = 5 (5, 12, 13)."),
  num(`The sides of a right triangle are x, x + 1 and 29 (hypotenuse). Find x.`, 20, "x² + (x + 1)² = 841 → 20, 21, 29."),
  num(`Find the perimeter of the triangle with vertices (−3, 1), (5, 7) and (5, 1).`, 24, "Legs 8 and 6, hypotenuse 10."),
  num(`A cylinder can is 12 cm tall with radius 4.5 cm. Find the longest straw that fits inside, diagonally (cm).`, 15, "Diameter 9: √(144 + 81)."),
  num(`A room is 5 m × 4 m × 3 m. Find the space diagonal to 2 decimal places.`, 7.07, "√(25 + 16 + 9) = √50.", figDoc({ w: 260, items: [...prism(5, 4, 3, { ll: "5 m", lw: "4 m", lh: "3 m" }), { seg: [[0, 0], [5 + 4 * 0.45, 3 + 4 * 0.32]], color: "red", width: 2.2 }] }), 0.006),
  num(`Two planes leave an airport at the same time, one flying north at 480 km/h and one east at 360 km/h. How far apart are they after 2 hours (km)?`, 1200, "960 and 720 km: √(921 600 + 518 400)."),
  num(`An equilateral triangle has height 9√3 ≈ 15.59. Find its side length.`, 18, "Height = (√3/2)s → s = 18."),
  num(`A square is inscribed in a circle of radius 5. Find the area of the square.`, 50, "Diagonal 10 → side² = 50."),
  tf(`If the legs of a right triangle are both doubled, the hypotenuse is also doubled.`, true, "√((2a)² + (2b)²) = 2√(a² + b²)."),
  ms(`For a triangle with sides 6, 8 and c (c the longest side, a whole number), which values of c make it obtuse? Select all.`, ["9", "10", "11", "13"], [2, 3], "Obtuse when c² > 100 and c < 14: 11 and 13."),
  num(`A trapezoid has parallel sides 14 and 26 and slanted sides 10 (isosceles). Find its height.`, 8, "Overhang 6 each side: √(100 − 36).", figDoc({ w: 280, items: polygon([[0, 0], [26, 0], [20, 8], [6, 8]], { sides: ["26", "10", "14", "10"], fill: "amber", color: "amber" }) })),
  num(`A rhombus has diagonals 16 cm and 30 cm. Find its side length.`, 17, "Diagonals bisect at right angles: √(8² + 15²)."),
  num(`A point is 9 m from the foot of a 12 m pole. A wire runs from the top of the pole to the point, and another from the midpoint of the pole to the point. Find the difference in their lengths (m).`, 4.18, "15 and √(36 + 81) ≈ 10.82; difference ≈ 4.18.", null, 0.01),
  num(`A ship sails 15 km east, 12 km north, then 5 km west. How far is it from the start (km)?`, 15.62, "10 east, 12 north: √244 ≈ 15.62.", null, 0.006),
  mc(`Which point is closest to (2, −1)?`, "(5, 3)", ["(−3, 2)", "(8, −1)", "(2, 6)"], "Distances 5, √34, 6, 7."),
  num(`A cone has slant height 26 cm and radius 10 cm. Find its height.`, 24, "√(676 − 100)."),
  num(`The diagonal of a cube is 12√3 ≈ 20.78 cm. Find the edge length.`, 12, "Space diagonal = s√3."),
  num(`Using (m² − n², 2mn, m² + n²) with m = 5, n = 2, what is the hypotenuse of the triple?`, 29, "25 + 4 (triple 21, 20, 29)."),
];

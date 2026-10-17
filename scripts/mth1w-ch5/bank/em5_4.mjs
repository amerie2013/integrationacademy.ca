// 5.4 The Pythagorean Theorem — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, rightTri, planeDoc } from "./fig.mjs";

export const E = [
  num(`Find the hypotenuse of a right triangle with legs 6 and 8.`, 10, "√(36 + 64)."),
  num(`Find the hypotenuse of a right triangle with legs 5 and 12.`, 13, "√(25 + 144)."),
  num(`A right triangle has hypotenuse 10 and one leg 6. Find the other leg.`, 8, "√(100 − 36)."),
  num(`A right triangle has hypotenuse 17 and one leg 8. Find the other leg.`, 15, "√(289 − 64)."),
  mc(`In a right triangle, the hypotenuse is…`, "the side opposite the right angle", ["the shortest side", "one of the legs", "the side next to the right angle"], "It is also the longest side."),
  tf(`The Pythagorean theorem works for every triangle.`, false, "Only for right triangles."),
  tf(`A triangle with sides 3, 4 and 5 is right-angled.`, true, "9 + 16 = 25."),
  tf(`A triangle with sides 4, 5 and 6 is right-angled.`, false, "16 + 25 = 41 ≠ 36."),
  num(`Find the hypotenuse of a right triangle with legs 1 and 1, to 2 decimal places.`, 1.41, "√2.", null, 0.006),
  num(`Find x in the figure.`, 25, "√(7² + 24²) = √625.", figDoc({ w: 260, items: rightTri(24, 7, { la: "24", lb: "7", lc: "x" }) })),
  num(`What is 9² + 12²?`, 225, "81 + 144."),
  num(`A square has side 5 cm. Find its diagonal to 1 decimal place.`, 7.1, "√50.", null, 0.06),
  num(`A rectangle is 9 by 12. Find its diagonal.`, 15, "√(81 + 144)."),
  mc(`To find a leg, you should…`, "subtract the square of the known leg from the square of the hypotenuse", ["add the squares of the two known sides", "add the two known sides", "halve the hypotenuse"], "a² = c² − b²."),
  num(`Find the distance between (0, 0) and (3, 4).`, 5, "√(9 + 16)."),
  num(`Find the distance between (1, 2) and (7, 10).`, 10, "Run 6, rise 8."),
  ms(`Which sets are Pythagorean triples? Select all.`, ["6, 8, 10", "5, 12, 13", "2, 3, 4", "9, 40, 41"], [0, 1, 3], "Check a² + b² = c²."),
  num(`A ladder 5 m long leans against a wall with its foot 3 m from the wall. How high up does it reach?`, 4, "√(25 − 9)."),
  num(`Find the hypotenuse of a right triangle with legs 20 and 21.`, 29, "√(400 + 441) = √841."),
  num(`The legs of a right triangle are 0.3 and 0.4. Find the hypotenuse.`, 0.5, "√(0.09 + 0.16)."),
];

export const M = [
  num(`A TV screen is 120 cm wide and 67.5 cm high. Find its diagonal to the nearest cm.`, 138, "√(14 400 + 4556.25) ≈ 137.7.", null, 0.6),
  num(`A 13 m ramp rises 5 m. How far does it run horizontally?`, 12, "√(169 − 25)."),
  num(`An isosceles triangle has equal sides 10 and base 12. Find its height.`, 8, "Half the base is 6: √(100 − 36)."),
  num(`Find the area of the isosceles triangle with equal sides 10 and base 12.`, 48, "½(12)(8)."),
  num(`Find the distance between (−2, 3) and (4, −5).`, 10, "Run 6, rise −8."),
  num(`An equilateral triangle has side 10. Find its height to 1 decimal place.`, 8.7, "√(100 − 25) = √75.", null, 0.06),
  num(`A rectangle has diagonal 25 and width 7. Find its length.`, 24, "√(625 − 49)."),
  num(`A rectangle has diagonal 25 and width 7. Find its perimeter.`, 62, "2(24 + 7)."),
  tf(`Sides 9, 10 and 14 form an obtuse triangle.`, true, "81 + 100 = 181 < 196."),
  tf(`Sides 7, 8 and 10 form an acute triangle.`, true, "49 + 64 = 113 > 100."),
  mc(`A triangle has sides 10, 24 and 26. It is…`, "right", ["acute", "obtuse", "not a triangle"], "100 + 576 = 676 = 26²."),
  num(`A kite string is 50 m long and the kite is 30 m horizontally from the person. How high is the kite (ignore the person's height)?`, 40, "√(2500 − 900)."),
  num(`Find the length of the line segment on the grid.`, 13, "Run 12, rise 5.", planeDoc({ view: { xmin: -1, xmax: 14, ymin: -1, ymax: 7 }, segs: [{ pts: [[0, 0], [12, 5]], color: "violet" }], points: [{ x: 0, y: 0 }, { x: 12, y: 5 }], step: { x: 1, y: 1 } })),
  num(`A square has diagonal 10 cm. Find its side to 2 decimal places.`, 7.07, "2s² = 100 → s = √50.", null, 0.006),
  num(`A baseball diamond is a square with side 27.4 m. How far is it from home plate to second base (1 decimal place)?`, 38.7, "27.4√2 ≈ 38.75.", null, 0.06),
  num(`A box is 4 × 3 × 12. Find the length of its space diagonal.`, 13, "√(16 + 9 + 144)."),
  num(`Find the perimeter of a right triangle with legs 15 and 20.`, 60, "Hypotenuse 25; 15 + 20 + 25."),
  num(`A boat sails 8 km north and then 6 km east. How far is it from the start?`, 10, "√(64 + 36)."),
  num(`A right triangle has hypotenuse 2.5 m and one leg 1.5 m. Find its area (m²).`, 1.5, "Other leg 2; ½ × 1.5 × 2."),
  ms(`Which points are exactly 5 units from the origin? Select all.`, ["(3, 4)", "(−4, 3)", "(5, 5)", "(0, −5)"], [0, 1, 3], "√(x² + y²) = 5."),
];

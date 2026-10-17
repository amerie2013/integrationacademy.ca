// 5.2 Designs with Circle & Triangle Properties — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, polygon } from "./fig.mjs";

const P = (deg, r = 1) => [r * Math.cos((deg * Math.PI) / 180), r * Math.sin((deg * Math.PI) / 180)];
const circ = (pts, segs, extra = []) => figDoc({ w: 240, items: [{ circle: [0, 0, 1], color: "ink" }, { dot: [0, 0], r: 3 }, { text: "O", at: [-0.1, -0.13], size: 12 }, ...segs.map(([a, b, col]) => ({ seg: [a === "O" ? [0, 0] : P(pts[a]), b === "O" ? [0, 0] : P(pts[b])], color: col ?? "blue" })), ...Object.entries(pts).flatMap(([n, d]) => [{ dot: P(d), r: 3.5 }, { text: n, at: P(d, 1.15), bold: true }]), ...extra] });

export const E = [
  num(`Two angles of a triangle are 50° and 60°. Find the third angle (degrees).`, 70, "180 − 50 − 60."),
  num(`A right triangle has one acute angle of 35°. Find the other acute angle.`, 55, "90 − 35."),
  num(`Each angle of an equilateral triangle measures how many degrees?`, 60, "180 ÷ 3."),
  num(`An isosceles triangle has a vertex angle of 50°. Find each base angle.`, 65, "(180 − 50) ÷ 2."),
  num(`The two interior angles opposite an exterior angle are 30° and 75°. Find the exterior angle.`, 105, "30 + 75."),
  num(`What is the sum of the interior angles of a quadrilateral?`, 360, "(4 − 2) × 180."),
  num(`What is the sum of the interior angles of a pentagon?`, 540, "(5 − 2) × 180."),
  num(`Each interior angle of a regular hexagon is how many degrees?`, 120, "720 ÷ 6."),
  num(`Each exterior angle of a regular octagon is how many degrees?`, 45, "360 ÷ 8."),
  num(`A central angle is 100°. Find an inscribed angle on the same arc.`, 50, "Half of 100."),
  num(`An inscribed angle is 25°. Find the central angle on the same arc.`, 50, "Double 25."),
  num(`An angle inscribed in a semicircle measures how many degrees?`, 90, "Angle in a semicircle."),
  num(`A tangent meets a radius at the point of contact. What angle do they make?`, 90, "Tangent ⟂ radius."),
  tf(`A triangle can have two obtuse angles.`, false, "Two angles over 90° would already exceed 180°."),
  tf(`The exterior angles of any convex polygon (one at each vertex) add to 360°.`, true, "Walking around the polygon turns you once."),
  mc(`A chord that passes through the centre of a circle is called a…`, "diameter", ["radius", "tangent", "arc"], "The longest chord."),
  mc(`A triangle with angles 40°, 70°, 70° is…`, "isosceles and acute", ["scalene and acute", "isosceles and obtuse", "equilateral"], "Two equal angles; all under 90°."),
  num(`Two radii of a circle form a triangle with a chord. The angle between the radii is 80°. Find one of the other angles.`, 50, "Isosceles: (180 − 80) ÷ 2."),
  mc(`Which regular polygon has interior angles of 90°?`, "square", ["triangle", "pentagon", "hexagon"], "4 × 90 = 360."),
  num(`A regular polygon has 9 sides. Find each central angle when it is drawn in a circle.`, 40, "360 ÷ 9."),
];

export const M = [
  num(`The angles of a triangle are x, 2x and 3x. Find the largest angle.`, 90, "6x = 180 → x = 30."),
  num(`An exterior angle of a triangle is 132°. One opposite interior angle is 57°. Find the other opposite interior angle.`, 75, "132 − 57."),
  num(`Find the sum of the interior angles of a 15-sided polygon.`, 2340, "13 × 180."),
  num(`Each interior angle of a regular polygon is 140°. How many sides does it have?`, 9, "Exterior 40°; 360 ÷ 40."),
  num(`Each exterior angle of a regular polygon is 24°. Find each interior angle.`, 156, "180 − 24."),
  num(`In the figure, ∠AOB is a central angle of 140°. Find inscribed ∠APB.`, 70, "Half of 140.", circ({ A: 200, B: 340, P: 90 }, [["O", "A"], ["O", "B"], ["A", "P", "red"], ["B", "P", "red"]])),
  num(`AB is a diameter and C is on the circle with ∠CAB = 27°. Find ∠CBA.`, 63, "∠ACB = 90°; 180 − 90 − 27."),
  num(`Two tangents from a point T touch a circle at A and B. If ∠AOB = 110°, find ∠ATB.`, 70, "Quadrilateral OATB: 360 − 90 − 90 − 110."),
  num(`An isosceles triangle has a base angle of 38°. Find the vertex angle.`, 104, "180 − 2(38)."),
  ms(`Which sets of angles could be the angles of a triangle? Select all.`, ["45°, 45°, 90°", "100°, 50°, 40°", "60°, 60°, 60°", "20°, 70°, 80°"], [0, 2], "Only these add to 180°."),
  num(`Inscribed angles ∠APB and ∠AQB stand on the same arc. ∠APB = 3x + 4 and ∠AQB = 5x − 12. Find x.`, 8, "Equal: 3x + 4 = 5x − 12."),
  num(`A regular decagon is drawn in a circle. Find the base angle of the isosceles triangle formed by the centre and one side.`, 72, "Central 36°; (180 − 36) ÷ 2."),
  tf(`If an inscribed angle is 90°, the chord it stands on is a diameter.`, true, "Central angle 180° → straight line through O."),
  num(`The angles of a quadrilateral are 85°, 95°, 110° and x. Find x.`, 70, "360 − 290."),
  num(`Radius OA is drawn to the point A where tangent line TA touches the circle. ∠OTA = 34°. Find ∠AOT.`, 56, "∠OAT = 90°; 180 − 90 − 34."),
  mc(`Three regular polygons meet at a point with no gaps: a square, a hexagon and one more. Which?`, "a regular 12-gon (150°)", ["an octagon (135°)", "a pentagon (108°)", "a triangle (60°)"], "90 + 120 + 150 = 360."),
  num(`The exterior angles of a triangle are x, x + 20° and x + 40°. Find x.`, 100, "3x + 60 = 360."),
  num(`An inscribed angle stands on an arc of 124° (the central angle). Find the inscribed angle.`, 62, "Half."),
  num(`A design uses a regular pentagon. What is each interior angle?`, 108, "540 ÷ 5."),
  num(`In △ABC, ∠A = 2∠B and ∠C = 3∠B. Find ∠C.`, 90, "6∠B = 180 → ∠B = 30."),
];

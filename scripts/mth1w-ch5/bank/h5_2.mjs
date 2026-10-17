// 5.2 Designs with Circle & Triangle Properties — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc } from "./fig.mjs";

const P = (deg, r = 1) => [r * Math.cos((deg * Math.PI) / 180), r * Math.sin((deg * Math.PI) / 180)];
const circ = (pts, segs, extra = []) => figDoc({ w: 250, items: [{ circle: [0, 0, 1], color: "ink" }, { dot: [0, 0], r: 3 }, { text: "O", at: [-0.1, -0.13], size: 12 }, ...segs.map(([a, b, col]) => ({ seg: [a === "O" ? [0, 0] : P(pts[a]), b === "O" ? [0, 0] : P(pts[b])], color: col ?? "blue" })), ...Object.entries(pts).flatMap(([n, d]) => [{ dot: P(d), r: 3.5 }, { text: n, at: P(d, 1.15), bold: true }]), ...extra] });

export const TOPIC = "5.2 Designs with Circle & Triangle Properties";
export const Q = [
  num(`The angles of a triangle are (2x + 10)°, (3x − 5)° and (x + 25)°. Find the largest angle.`, 70, "6x + 30 = 180 → x = 25: 60°, 70°, 50°."),
  num(`The interior angle of a regular polygon is 8 times its exterior angle. How many sides does it have?`, 18, "9e = 180 → e = 20° → 360 ÷ 20."),
  num(`A polygon's interior angles add to 2700°. How many sides does it have?`, 17, "(n − 2)180 = 2700 → n − 2 = 15."),
  num(`In the figure, AB is a diameter and ∠BOC = 64°. Find ∠BAC.`, 32, "Inscribed ∠BAC stands on arc BC: half of 64.", circ({ A: 180, B: 0, C: 64 }, [["A", "B"], ["O", "C"], ["A", "C", "red"]])),
  num(`Points A, B, C, D lie on a circle in order with ∠ABC = 98°. Find ∠ADC.`, 82, "Opposite angles of a cyclic quadrilateral add to 180° (each is half of the arcs that make the full 360°)."),
  num(`A, B, C are on a circle with centre O and ∠OAB = 24°. Find the inscribed angle ∠ACB, with C on the major arc.`, 66, "∠AOB = 180 − 2(24) = 132; half is 66."),
  num(`The tangents at A and B meet at T, and ∠ATB = 52°. Find the inscribed angle ∠APB where P is on the major arc AB.`, 64, "∠AOB = 128°; half is 64."),
  num(`In △ABC, the exterior angle at C is 4 times ∠A, and ∠B = 51°. Find ∠A.`, 17, "4A = A + 51 → A = 17."),
  num(`A regular polygon has interior angles of 162°. How many diagonals can be drawn from one vertex?`, 17, "Exterior 18° → 20 sides; n − 3 = 17."),
  tf(`A regular nonagon (9 sides) can tile a floor by itself.`, false, "140° does not divide 360°."),
  ms(`Which combinations of regular polygons fit exactly around a point? Select all.`, ["3 triangles + 2 squares", "2 octagons + 1 square", "1 triangle + 2 dodecagons (12-gons)", "2 pentagons + 1 hexagon"], [0, 1, 2], "180 + 180; 270 + 90; 60 + 300. Pentagons: 216 + 120 = 336."),
  num(`The figure is a regular hexagon inscribed in a circle. Find ∠ACE, the angle of the triangle formed by joining every second vertex.`, 60, "ACE is equilateral (each side spans 120° of arc; inscribed angle 60°).", figDoc({ w: 230, items: [{ circle: [0, 0, 1], color: "gray" }, { poly: [0, 1, 2, 3, 4, 5].map((k) => P(90 + 60 * k)), fill: "none", color: "blue" }, { poly: [0, 2, 4].map((k) => P(90 + 60 * k)), fill: "none", color: "red" }, ...["A", "B", "C", "D", "E", "F"].map((t, k) => ({ text: t, at: P(90 + 60 * k, 1.16), bold: true }))] })),
  num(`Chord AB subtends a central angle of (4x − 10)° and an inscribed angle (on the major arc) of (x + 15)°. Find the central angle.`, 70, "4x − 10 = 2(x + 15) → x = 20; central 70°, inscribed 35°."),
  num(`A star polygon joins every third vertex of a regular 8-gon inscribed in a circle. Find the angle at each point of the star.`, 45, "Each point stands on an arc of 2 sides = 90°; inscribed angle 45°."),
  num(`In isosceles △ABC with AB = AC, the exterior angle at B (extending CB beyond B) is 115°. Find ∠A.`, 50, "∠ABC = 65 = ∠ACB; 180 − 130."),
  num(`Triangle OAB is formed by two radii and a chord. The chord AB equals the radius. Find ∠AOB.`, 60, "All three sides equal: equilateral."),
  num(`AB is a diameter of a circle, C is on the circle and AC = 6, BC = 8. Find the radius.`, 5, "∠ACB = 90°, so AB = √(36 + 64) = 10; r = 5."),
  mc(`A design has 5 identical isosceles triangles meeting at the centre of a circle with their bases forming a regular pentagon. What is each base angle?`, "54°", ["72°", "36°", "108°"], "Central 72°; (180 − 72) ÷ 2 = 54."),
  num(`From a point P outside a circle with radius 5, the tangent length PA is 12. How far is P from the centre?`, 13, "OA ⟂ PA: √(25 + 144) = 13."),
  num(`In a regular polygon the ratio of an interior angle to an exterior angle is 5 : 1. Find the number of sides.`, 12, "Exterior = 180/6 = 30° → 360 ÷ 30."),
];

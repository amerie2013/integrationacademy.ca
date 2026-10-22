// 11.5 Applications: Bearings, Elevation and 3D Angles — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, journey, cuboidDiag, pyramid } from "../figs11.mjs";

const S = String.raw;
const r = (d) => (d * Math.PI) / 180, g = (x) => (x * 180) / Math.PI, t = (d) => Math.tan(r(d)), d2 = (v) => Math.round(v * 100) / 100, d1 = (v) => Math.round(v * 10) / 10;
const trip = (b1, a, b2, b) => { const x = a * Math.sin(r(b1)) + b * Math.sin(r(b2)), y = a * Math.cos(r(b1)) + b * Math.cos(r(b2)); let br = g(Math.atan2(x, y)); if (br < 0) br += 360; return { d: Math.hypot(x, y), b: br }; };
const J1 = trip(35, 22, 125, 15), J2 = trip(80, 18, 190, 26), J3 = trip(300, 14, 40, 20);

export const TOPIC = "11.5 Applications: Bearings, Elevation and 3D Angles";
export const Q = [
  num("A ship sails 22 km on 035° then 15 km on 125°. Find the bearing of its final position from the start (1 d.p.).", d1(J1.b), "Right angle at the turn; angle at O = tan⁻¹(15/22).", figDoc({ items: journey(35, 22, 125, 15, { l1: "22 km", l2: "15 km" }).items }), 0.1),
  num("A yacht sails 18 km on 080° then 26 km on 190°. Find the distance back (2 d.p.).", d2(J2.d), "Included angle 70°.", null, 0.01),
  num("For the yacht above, find the bearing of the start from the yacht (1 d.p.).", d1((J2.b + 180) % 360), "Bearing of the yacht from O, then ± 180°.", null, 0.1),
  num("A plane flies 14 km on 300° then 20 km on 040°. Find the distance from the start (2 d.p.).", d2(J3.d), "Included angle 80°.", figDoc({ items: journey(300, 14, 40, 20, { l1: "14 km", l2: "20 km" }).items }), 0.01),
  num("Two coastguard stations A and B are 30 km apart, B due east of A. A ship is on a bearing of 050° from A and 320° from B. Find its distance from A (2 d.p.).", d2((30 * Math.sin(r(50))) / Math.sin(r(90))), "Angles in the triangle: A = 40°, B = 50°, ship = 90°; distance from A = 30 sin 50°.", null, 0.01),
  num("From A, a tower due north has elevation 32°. From B, 100 m due east of A, its elevation is 24°. Find the tower's height (2 d.p.).", d2(100 / Math.sqrt(1 / t(24) ** 2 - 1 / t(32) ** 2)), "BT² − AT² (horizontal) = 100².", null, 0.01),
  num("A cuboid is 10 × 6 × 4. Find the angle between a space diagonal and a vertical face of size 10 × 4 (2 d.p.).", d2(g(Math.asin(6 / Math.sqrt(152)))), "Distance from the face is the width 6: sin θ = 6/√152.", figDoc({ items: cuboidDiag(10, 6, 4) }), 0.01),
  num("A square pyramid has every edge 12. Find the angle between a sloping edge and the base.", 45, "Half-diagonal 6√2 = height."),
  num("For the pyramid with every edge 12, find the angle between a triangular face and the base (2 d.p.).", d2(g(Math.atan((6 * Math.SQRT2) / 6))), "Height 6√2, half-side 6.", figDoc({ items: pyramid(12, 8.49, { lb: "12", lh: "h", ls: "12" }) }), 0.01),
  mc("In a cube, the angle between two space diagonals (the acute one) is about:", "70.53°", ["90°", "54.74°", "35.26°"], "cos θ = 1/3."),
  ms("A hiker walks 6 km on 045° and then 6 km on 135°. Which are correct? Select all.", ["the return distance is 6√2 km", "the final position is due east of the start", "the bearing of the start from the hiker is 270°", "the included angle is 45°"], [0, 1, 2], "Included angle 90°."),
  tf("If two journeys have the same legs in opposite order, they end at the same point.", true, "Vector addition commutes."),
  num("From the top of a 120 m cliff, two boats due east are seen at angles of depression 28° and 16°. Find their distance apart (2 d.p.).", d2(120 / t(16) - 120 / t(28)), "Difference of horizontal distances.", null, 0.01),
  num("Three villages: B is 12 km from A on 070°, C is 9 km from B on 160°. Find angle BAC (2 d.p.).", d2(g(Math.atan(9 / 12))), "Right angle at B.", null, 0.01),
  num("Point P is 8 km north and 15 km west of Q. Find the bearing of P from Q.", d1(360 - g(Math.atan(15 / 8))), "N then W: 360° − tan⁻¹(15/8).", null, 0.1),
  mc("A tent is a square pyramid with base 3 m and slant edges 2.5 m. Its height is about:", "1.32 m", ["1.50 m", "2.00 m", "0.71 m"], "√(2.5² − (1.5√2)²)."),
  num("A ramp rises 1.2 m over a horizontal run of 8 m along a rectangular base 8 m × 3 m (rising along the length). Find the angle between the diagonal of the ramp surface and the horizontal (2 d.p.).", d2(g(Math.atan(1.2 / Math.sqrt(64 + 9)))), "Rise 1.2 over horizontal diagonal √73.", null, 0.01),
  num("Ship A is 20 km from port on 060°; ship B is 35 km on 160°. Find the bearing of B from A (1 d.p.).", (() => { const ax = 20 * Math.sin(r(60)), ay = 20 * Math.cos(r(60)), bx = 35 * Math.sin(r(160)), by = 35 * Math.cos(r(160)); let br = g(Math.atan2(bx - ax, by - ay)); if (br < 0) br += 360; return d1(br); })(), "Use components.", null, 0.1),
  mc("A balloon is directly above point O. From A (west of O) and B (south of O), the angles of elevation are both 40°. Then:", "OA = OB", ["OA > OB", "OA < OB", "the balloon is above A"], "Equal heights and equal angles give equal distances."),
  num("A 2 m by 4 m by 4 m box has an insect at one bottom corner. Find the shortest straight line through the air to the opposite top corner.", 6, "√(4 + 16 + 16)."),
];

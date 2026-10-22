// 11.5 Applications: Bearings, Elevation and 3D Angles — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { figDoc, journey, cuboidDiag, pyramid } from "../figs11.mjs";

const S = String.raw;
const r = (d) => (d * Math.PI) / 180, g = (x) => (x * 180) / Math.PI, d2 = (v) => Math.round(v * 100) / 100;
const trip = (b1, d1, b2, d2_) => { const x = d1 * Math.sin(r(b1)) + d2_ * Math.sin(r(b2)), y = d1 * Math.cos(r(b1)) + d2_ * Math.cos(r(b2)); let b = g(Math.atan2(x, y)); if (b < 0) b += 360; return { d: Math.hypot(x, y), b }; };

export const E = [
  mc("A bearing is measured:", "clockwise from north", ["anticlockwise from north", "clockwise from east", "from the horizontal"], "Three figures, from north."),
  num("What bearing is due south?", 180, "Half a turn."),
  num("What bearing is south-west?", 225, "180° + 45°."),
  num("The bearing of B from A is 040°. Find the bearing of A from B.", 220, "+ 180°."),
  num("The bearing of Q from P is 300°. Find the bearing of P from Q.", 120, "− 180°."),
  num("A ship sails 10 km due north then 24 km due east. How far is it from its start?", 26, "√(100 + 576)."),
  num("A walker goes 5 km on 090° then 12 km on 180°. Find the distance back.", 13, "5-12-13."),
  num("A plane flies 100 km on 030°. How far north has it gone (2 d.p.)?", d2(100 * Math.cos(r(30))), "100 cos 30°.", null, 0.01),
  num("A plane flies 100 km on 030°. How far east has it gone?", 50, "100 sin 30°."),
  num("A cube has side 6. Find the length of a face diagonal (2 d.p.).", d2(6 * Math.SQRT2), "6√2.", null, 0.01),
  num("A cube has side 6. Find the length of a space diagonal (2 d.p.).", d2(6 * Math.sqrt(3)), "6√3.", null, 0.01),
  tf("Bearings are always written with three figures.", true, "e.g. 045°."),
  tf("The bearing of A from B is the same as the bearing of B from A.", false, "They differ by 180°."),
  fill("The angle between a line and a plane is measured to the line's ___ on the plane.", ["projection", "Projection", "shadow"], "Its shadow."),
  ms("Which bearings point into the south-east quarter? Select all.", ["100°", "135°", "170°", "200°"], [0, 1, 2], "Between 090° and 180°."),
  mc("In the diagram, the journey is 070° then 160°. The angle at P is:", "90°", ["70°", "160°", "110°"], "Change of direction 90°.", figDoc({ items: journey(70, 12, 160, 9, { l1: "12", l2: "9" }).items })),
  num("For the journey shown (12 km then 9 km at right angles), find the distance back.", 15, "√(144 + 81)."),
  mc("In the cuboid shown, the angle θ is between:", "the space diagonal and the base", ["two edges", "the base and a face", "two face diagonals"], "Projection onto the base.", figDoc({ items: cuboidDiag(8, 4, 3, { angle: "θ" }) })),
  num("A cuboid is 8 × 6 × 5. Find the length of the base diagonal.", 10, "√(64 + 36)."),
  num("A 40 m tower is seen from 40 m away on level ground. Find the angle of elevation.", 45, "tan θ = 1."),
];

export const M = [
  num("A boat sails 9 km on 060° then 12 km on 150°. Find the distance back.", 15, "Right angle at the turn."),
  num("A hiker walks 8 km on 020° then 5 km on 080°. Find the distance back (2 d.p.).", d2(trip(20, 8, 80, 5).d), "Included angle 120°.", null, 0.01),
  num("A car drives 30 km on 110° then 20 km on 200°. Find the distance back (2 d.p.).", d2(trip(110, 30, 200, 20).d), "Right angle.", null, 0.01),
  num("For the car above, find the bearing of its final position from the start (1 d.p.).", Math.round(trip(110, 30, 200, 20).b * 10) / 10, "Components.", null, 0.1),
  mc("A walker goes on 045° and then turns to 135°. The included angle at the turn is:", "90°", ["45°", "135°", "180°"], "Change of direction 90°."),
  mc("A ship goes on 050° then 170°. The included angle at the turn is:", "60°", ["120°", "50°", "170°"], "180° − 120°."),
  num("A cuboid is 12 × 9 × 8. Find the angle between a space diagonal and the base (2 d.p.).", d2(g(Math.atan(8 / 15))), "tan θ = 8/15.", null, 0.01),
  num("A square pyramid has base 8 and height 6. Find the angle between a sloping edge and the base (2 d.p.).", d2(g(Math.atan(6 / (4 * Math.SQRT2)))), "Half-diagonal 4√2.", null, 0.01),
  num("For the same pyramid, find the angle between a face and the base (2 d.p.).", d2(g(Math.atan(6 / 4))), "Half-side 4.", null, 0.01),
  num("A 25 m pole stands at a corner of a 30 m × 40 m rectangular yard. Find the angle of elevation of its top from the opposite corner (2 d.p.).", d2(g(Math.atan(25 / 50))), "Diagonal 50.", null, 0.01),
  tf("A space diagonal of a cube makes the same angle with every face.", true, "Symmetry: tan⁻¹(1/√2)."),
  ms("Town B is 20 km from A on 060°. Which are correct? Select all.", ["B is 10 km north of A", "B is 10√3 km east of A", "the bearing of A from B is 240°", "B is 20 km east of A"], [0, 1, 2], "20 cos 60° north, 20 sin 60° east."),
  mc("The pyramid shown has base 14 and height 24. The angle between a face and the base is about:", "73.74°", ["67.59°", "59.74°", "16.26°"], "tan φ = 24/7.", figDoc({ items: pyramid(14, 24, { lb: "14", lh: "h = 24", ls: "" }) })),
  mc("The journey shown is 7 km then 10 km with an included angle of 80°. The return distance is about:", "11.17 km", ["12.21 km", "17.00 km", "3.00 km"], "√(49 + 100 − 140 cos 80°).", figDoc({ items: journey(30, 7, 130, 10, { l1: "7 km", l2: "10 km" }).items })),
  num("A lighthouse is 15 km from a port on a bearing of 140°. A ship is 10 km from the port on 220°. Find the distance between ship and lighthouse (2 d.p.).", d2(Math.sqrt(225 + 100 - 300 * Math.cos(r(80)))), "Angle at port 80°.", null, 0.01),
  num("A drone rises vertically 60 m from point O, then is observed from point P 80 m from O. Find the angle of elevation (2 d.p.).", d2(g(Math.atan(60 / 80))), "tan θ = 60/80.", null, 0.01),
  num("The angle of elevation of a kite is 35° from A and 50° from B, where B is 30 m from A towards the kite (same vertical plane). Find the height (2 d.p.).", d2((30 * Math.tan(r(35)) * Math.tan(r(50))) / (Math.tan(r(50)) - Math.tan(r(35)))), "Two right triangles.", null, 0.01),
  mc("A cuboid has length 6, width 6, height h, and its space diagonal makes 45° with the base. Then h is:", S`$6\sqrt2$`, ["6", S`$6\sqrt3$`, "12"], "tan 45° = h/6√2."),
  num("Find the bearing of B from A if B is 5 km east and 5 km south of A.", 135, "SE."),
  num("Find the bearing of B from A if B is 3 km west and 3√3 km north of A.", 330, "tan⁻¹(3/3√3) = 30° west of north."),
];

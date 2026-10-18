// 5.6 Trigonometry in Three Dimensions — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { boxD, pyrD, towerD, wireD, sin, cos, tan, asin, acos, atan, lawC, rd } from "./fig.mjs";

const S = String.raw;
const cot = (d) => 1 / tan(d);
const q1 = 150 / Math.sqrt(cot(35) ** 2 + cot(25) ** 2);
const q2AC = (200 * sin(105)) / sin(35), q2 = q2AC * tan(12);
const q3 = lawC(120 / tan(14), 120 / tan(21), 75);
const q7 = 5 / (cot(40) + cot(55));
const q8 = 500 / Math.sqrt(cot(28) ** 2 + cot(31) ** 2);
const q12 = 60 / Math.sqrt(cot(30) ** 2 + cot(40) ** 2);
const q16AC = (250 * sin(71)) / sin(57), q16 = q16AC * tan(17);
const g1 = 120 / tan(14), g2 = 120 / tan(21);

export const TOPIC = "5.6 Trigonometry in Three Dimensions";
export const Q = [
  num("Observer P is due south of a monument and sees its top at 35°. Observer Q is due east and sees it at 25°. P and Q are 150 m apart. Find the height (1 decimal).", rd(q1, 1), "h²(cot² 35° + cot² 25°) = 150².", null, 0.05),
  num("Ground triangle: AB = 200 m, ∠CAB = 40°, ∠CBA = 105°. From A the top of a tower at C is at 12° elevation. Find the height (1 decimal).", rd(q2, 1), "∠C = 35°; AC = 200 sin 105° / sin 35°; h = AC tan 12°.", null, 0.05),
  num("From the top of a 120 m cliff, two boats are seen at angles of depression 14° and 21°. Viewed from above, the lines from the cliff base to the boats make 75°. How far apart are the boats (nearest metre)?", Math.round(q3), "Ground distances 120/tan 14° and 120/tan 21°; cosine law with 75°.",
    wireD([{ pts: [[0, 0, 0], [0, 0, 330]], color: "blue" }, { pts: [[0, 0, 330], [g1, 0, 0]], color: "red" }, { pts: [[0, 0, 330], [g2 * cos(75), g2 * sin(75), 0]], color: "red" }, { pts: [[g1, 0, 0], [0, 0, 0], [g2 * cos(75), g2 * sin(75), 0], [g1, 0, 0]], color: "green" }], [[0, 0, 330, "top"], [g1, 0, 0, "boat 1"], [g2 * cos(75), g2 * sin(75), 0, "boat 2"]]), 0.5),
  num("A square pyramid has base side 10 and slant edges 13. Find its height (2 decimals).", rd(Math.sqrt(119)), "Half-diagonal 5√2: √(169 − 50).", null, 0.01),
  num("A square pyramid has base side 10 and height 12. Find the angle between a triangular face and the base (1 decimal).", rd(atan(12 / 5), 1), "Use the line from the centre to the midpoint of an edge (length 5).", null, 0.05),
  num("A box is 10 by 6 by 4. Find the angle between a space diagonal and the 10 by 4 face (1 decimal).", rd(asin(6 / Math.sqrt(152)), 1), "The component perpendicular to that face is 6; sin θ = 6 / √152.", null, 0.05),
  num("A plane is directly above a point between stations A and B, which are 5 km apart. Its angles of elevation from A and B are 40° and 55°. Find its altitude (2 decimals, km).", rd(q7, 2), "h cot 40° + h cot 55° = 5.", null, 0.01),
  num("A balloon is above point G. From A it is at 28° elevation, from B at 31°, AB = 500 m and ∠AGB = 90°. Find its height (1 decimal).", rd(q8, 1), "h²(cot² 28° + cot² 31°) = 500².", null, 0.05),
  num("A regular tetrahedron has edges 6. Find its height (2 decimals).", rd(6 * Math.sqrt(2 / 3)), "The centre of the base is 6/√3 from each vertex: √(36 − 12).", null, 0.01),
  num("Find the angle between two space diagonals of a cube (1 decimal).", rd(acos(1 / 3), 1), "With edge 2, the diagonals meet at the centre: cosine law with sides √3, √3, 2.", null, 0.05),
  tf("The angle between a space diagonal of a cube and its base is less than 45°.", true, "tan θ = 1/√2, so θ ≈ 35.3°."),
  num("A tower stands at C. From A its top is at 30°; from B it is at 40°. AB = 60 m and ∠ACB = 90°. Find the height (2 decimals).", rd(q12), "h²(cot² 30° + cot² 40°) = 60².", null, 0.01),
  num("A road runs straight up a hillside inclined at 12°, but in a direction 30° away from the steepest line. Find the road's angle of climb (1 decimal).", rd(atan(tan(12) * cos(30)), 1), "For each unit of horizontal road, the rise is tan 12° × cos 30°.", null, 0.05),
  num("An aquarium is 60 cm by 30 cm by 40 cm. What is the longest straight rod that fits inside (2 decimals)?", rd(Math.sqrt(6100)), "The space diagonal.", null, 0.01),
  mc("You know AB and the two ground angles at A and B, and the elevation of a tower top is measured from B. Which side should the sine law find?", "BC", ["AC", "AB", "the height directly"], "The elevation is measured from B, so BC is the linking side."),
  num("Find the tower height (1 decimal). AB = 250 m, ∠CAB = 52°, ∠CBA = 71°, and from A the elevation of T is 17°.", rd(q16, 1), "∠C = 57°; AC = 250 sin 71° / sin 57°; h = AC tan 17°.", towerD(250, 52, q16AC, q16), 0.05),
  num("Find the angle between a slant edge and the base of the pyramid shown (base side 12, height 9), to 1 decimal.", rd(atan(9 / (6 * Math.SQRT2)), 1), "Half-diagonal 6√2.", pyrD(12, 9), 0.05),
  num("The box shown is 12 by 4 by 3. Find the angle between AG and the base (1 decimal).", rd(atan(3 / Math.sqrt(160)), 1), "Base diagonal √160.", boxD(12, 4, 3, [{ pts: [[0, 0, 0], [12, 4, 0]], color: "amber" }, { pts: [[0, 0, 0], [12, 4, 3]], color: "red" }], [[0, 0, 0, "A"], [12, 4, 3, "G"]]), 0.05),
  num("From the top of a 90 m tower, one car is due east at an angle of depression of 32° and another is due north at 24°. How far apart are the cars (nearest metre)?", Math.round(Math.hypot(90 / tan(32), 90 / tan(24))), "East and north are perpendicular.",
    wireD([{ pts: [[0, 0, 0], [0, 0, 160]], color: "blue" }, { pts: [[0, 0, 160], [90 / tan(32), 0, 0]], color: "red" }, { pts: [[0, 0, 160], [0, 90 / tan(24), 0]], color: "red" }, { pts: [[90 / tan(32), 0, 0], [0, 0, 0], [0, 90 / tan(24), 0], [90 / tan(32), 0, 0]], color: "green" }], [[0, 0, 160, "top"], [90 / tan(32), 0, 0, "east car"], [0, 90 / tan(24), 0, "north car"]]), 0.5),
  num(S`A cube has edge $s$. The angle between a space diagonal and a face diagonal it meets at a corner is θ. Find θ (1 decimal).`, rd(atan(1 / Math.SQRT2), 1), "Right triangle: face diagonal s√2, edge s.", null, 0.05),
];

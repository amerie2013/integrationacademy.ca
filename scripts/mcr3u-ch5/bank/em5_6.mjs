// 5.6 Trigonometry in Three Dimensions — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { boxD, pyrD, towerD, sin, tan, atan, lawC, rd } from "./fig.mjs";

const S = String.raw;
const m1AC = (100 * sin(70)) / sin(60), m1h = m1AC * tan(30);
const m3h = 30 * tan(50), m3B = m3h / tan(40);
const m19BC = (120 * sin(60)) / sin(55), m19h = m19BC * tan(25), m19AC = (120 * sin(65)) / sin(55);

export const E = [
  num("A cube has edge 4. Find a face diagonal to 2 decimals.", rd(4 * Math.SQRT2), "4√2.", null, 0.01),
  num("A cube has edge 4. Find a space diagonal to 2 decimals.", rd(4 * Math.sqrt(3)), "4√3.", null, 0.01),
  num("A box is 3 by 4 by 12. Find its space diagonal.", 13, "√(9 + 16 + 144)."),
  num("A box is 2 by 3 by 6. Find its space diagonal.", 7, "√(4 + 9 + 36)."),
  num("From 25 m away on level ground, the top of a tree is at an angle of elevation of 40°. Find the height (2 decimals).", rd(25 * tan(40)), "25 tan 40°.", null, 0.01),
  num("A 30 m building is seen at an angle of elevation of 35°. How far away is the observer (2 decimals)?", rd(30 / tan(35)), "30 / tan 35°.", null, 0.01),
  mc("In a problem about a vertical tower, where is the right angle?", "at the base of the tower", ["at the observer", "at the top of the tower", "there is none"], "The tower is perpendicular to the ground."),
  mc("An angle of elevation lies in which kind of plane?", "a vertical plane", ["a horizontal plane", "the ground triangle", "any plane"], "It rises from the horizontal."),
  tf("In a box, a floor diagonal and a vertical edge meeting it form a right angle.", true, "A vertical edge is perpendicular to every line in the floor."),
  tf("The ground triangle in a tower problem always contains a right angle.", false, "It is often oblique — use the sine or cosine law."),
  num("Two ground angles of a survey triangle are 50° and 60°. Find the third.", 70, "180° − 110°."),
  num("A 12 m pole is 20 m away. Find the angle of elevation of its top (1 decimal).", rd(atan(12 / 20), 1), "tan⁻¹(12/20).", null, 0.05),
  num("A box has a 6 by 8 base. Find the base diagonal.", 10, "√(36 + 64)."),
  num("A room is 5 m by 12 m with a 4 m ceiling. Find its space diagonal (2 decimals).", rd(Math.sqrt(185)), "√(25 + 144 + 16).", null, 0.01),
  num("From the top of a 40 m cliff, a buoy is seen at an angle of depression of 20°. How far is it from the foot of the cliff (2 decimals)?", rd(40 / tan(20)), "40 / tan 20°.", null, 0.01),
  num("A square pyramid has base side 6 and height 4. Find the slant height of a face (from the apex to the midpoint of a base edge).", 5, "√(3² + 4²)."),
  mc("Which formula gives the space diagonal of an l × w × h box?", S`$\sqrt{l^2+w^2+h^2}$`, [S`$l+w+h$`, S`$\sqrt{l^2+w^2}+h$`, S`$\sqrt{lwh}$`], "Pythagoras twice."),
  num("A box is 3 by 4 by 12. Find the angle between its space diagonal and the 3 by 4 base (1 decimal).", rd(atan(12 / 5), 1), "Rise 12 over base diagonal 5.", null, 0.05),
  num("Find the space diagonal AG of the box shown (2 decimals).", rd(Math.sqrt(61)), "√(36 + 16 + 9).", boxD(6, 4, 3, [{ pts: [[0, 0, 0], [6, 4, 3]], color: "red" }], [[0, 0, 0, "A"], [6, 4, 3, "G"], [3, 0, 0, "6"], [6, 2, 0, "4"], [0, 0, 1.5, "3"]]), 0.01),
  num("The pyramid shown has a square base of side 8 and height 6. Find a slant edge (2 decimals).", rd(Math.sqrt(68)), "Half-diagonal 4√2; √(32 + 36).", pyrD(8, 6), 0.01),
];

export const M = [
  num("Ground triangle: AB = 100 m, ∠CAB = 50°, ∠CBA = 70°. From A the top of a tower at C is at 30° elevation. Find its height (1 decimal).", rd(m1h, 1), "AC = 100 sin 70° / sin 60°; h = AC tan 30°.", null, 0.05),
  num("Ground triangle: AB = 90 m, ∠A = 45°, ∠B = 80°. Find AC (2 decimals).", rd((90 * sin(80)) / sin(55)), "∠C = 55°; AC faces ∠B.", null, 0.01),
  num("Observer A is 30 m due south of a mast and sees its top at 50°. Observer B is due east of the mast and sees the top at 40°. How far apart are A and B (1 decimal)?", rd(Math.hypot(30, m3B), 1), "Height 30 tan 50°; BC = height / tan 40°; A and B are at right angles from the mast.", null, 0.05),
  num("A box is 6 by 6 by 10 (10 is the height). Find the angle between its space diagonal and the base (1 decimal).", rd(atan(10 / (6 * Math.SQRT2)), 1), "Base diagonal 6√2.", null, 0.05),
  num("A square pyramid has base side 12 and height 8. Find a slant edge (2 decimals).", rd(Math.sqrt(136)), "Half-diagonal 6√2; √(72 + 64).", null, 0.01),
  num("For the pyramid with base side 12 and height 8, find the angle between a slant edge and the base (1 decimal).", rd(atan(8 / (6 * Math.SQRT2)), 1), "tan θ = 8 / (6√2).", null, 0.05),
  num("From a 60 m cliff, two boats are at angles of depression 25° and 18°. Seen from above, the lines from the cliff base to the boats form a 40° angle. How far apart are the boats (nearest metre)?", Math.round(lawC(60 / tan(25), 60 / tan(18), 40)), "Ground distances 60/tan 25° and 60/tan 18°, then the cosine law.", null, 0.5),
  num("A balloon is 200 m above point G. From A it is seen at 30° elevation. Find AG (2 decimals).", rd(200 / tan(30)), "200 / tan 30°.", null, 0.01),
  num("A flagpole stands on a 25 m building. From 30 m away, the top of the pole is at 45° elevation. How long is the pole?", 5, "30 tan 45° − 25."),
  num("A road climbs at 6°. How much height is gained over 1.8 km of road (nearest metre)?", Math.round(1800 * sin(6)), "1800 sin 6°.", null, 0.5),
  ms("Which sets form right triangles inside a box? Select all.", ["two edges at a corner and the face diagonal joining their ends", "a base diagonal, the vertical edge at its end, and the space diagonal", "a space diagonal and two edges at one corner"], [0, 1], "The third set is not even a triangle."),
  tf("In a multi-step 3-D problem, rounding the linking side before the next step improves accuracy.", false, "Keep full calculator values until the end."),
  num("A room is 4 m by 3 m with a 2.5 m ceiling. Find the angle between a space diagonal and the floor (1 decimal).", rd(atan(2.5 / 5), 1), "Floor diagonal 5.", null, 0.05),
  num("From B, the base of a tower is 150 m away and its top is at 18° elevation. Find the height (2 decimals).", rd(150 * tan(18)), "150 tan 18°.", null, 0.01),
  num("A 30 m chimney is seen from a point 40 m due west of its base. Find the angle of elevation (1 decimal).", rd(atan(30 / 40), 1), "tan⁻¹ 0.75.", null, 0.05),
  num("A drone hovers above D. Observers A and B are 400 m apart with ∠DAB = 55° and ∠DBA = 70°. From B the drone is at 20° elevation. Find its height (2 decimals).", rd(400 * tan(20)), "∠D = 55°, so BD = AB = 400 m; h = 400 tan 20°.", null, 0.01),
  num("A tent is a square pyramid with base side 4 m and apex 3 m above the centre. Find the slant height of a face (2 decimals).", rd(Math.sqrt(13)), "√(2² + 3²).", null, 0.01),
  mc("You know AB, ∠A and ∠B on the ground, and the elevation of a tower top from A. What is the first step?", "use the sine law in the ground triangle to find AC", ["use the tangent with AB", "use the cosine law to find AB", "find the height from AB directly"], "AC links the two triangles."),
  num("Find the height CT (1 decimal). AB = 120 m, ∠CAB = 60°, ∠CBA = 65°, and from B the elevation of T is 25°.", rd(m19h, 1), "BC = 120 sin 60° / sin 55°; h = BC tan 25°.", towerD(120, 60, m19AC, m19h), 0.05),
  num("The box shown is 9 by 12 by 7. Find the angle between AG and the base (1 decimal).", rd(atan(7 / 15), 1), "Base diagonal 15.", boxD(9, 12, 7, [{ pts: [[0, 0, 0], [9, 12, 0]], color: "amber" }, { pts: [[0, 0, 0], [9, 12, 7]], color: "red" }], [[0, 0, 0, "A"], [9, 12, 7, "G"]]), 0.05),
];

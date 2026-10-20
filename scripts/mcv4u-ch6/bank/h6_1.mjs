// 6.1 Introduction to Vectors — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, pol } from "../vecfig.mjs";

const S = String.raw;
export const TOPIC = "6.1 Introduction to Vectors";
export const Q = [
  num("The cube shown has edges of length 2. Find the magnitude of the vector from A to G, the opposite corner (2 decimals).", 3.46, "√(2² + 2² + 2²).", vdoc({ view: { xmin: -0.5, xmax: 4, ymin: -0.6, ymax: 3.6 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [2, 0], [3, 1], [1, 1], [0, 0]], color: "gray" }, { pts: [[0, 2], [2, 2], [3, 3], [1, 3], [0, 2]], color: "gray" }, { pts: [[0, 0], [0, 2]], color: "gray" }, { pts: [[2, 0], [2, 2]], color: "gray" }, { pts: [[3, 1], [3, 3]], color: "gray" }, { pts: [[1, 1], [1, 3]], color: "gray", dash: true }], arrows: [{ from: [0, 0], to: [3, 3], color: "red", off: -14 }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 3, y: 3, label: "G", dx: 8, dy: 0 }] }), 0.01),
  num("The tip of a 6 cm minute hand moves from 12:00 to 12:10. Find the magnitude of its displacement (cm).", 6, "60° of turn: the chord equals the radius."),
  num("For the 6 cm minute hand moving from 12:00 to 12:10 (12 is north), find the true bearing of the tip's displacement.", 120, "From (0, 6) to (5.196, 3): east 5.196, south 3."),
  num("A regular hexagon ABCDEF has side 5. Find |AC| (2 decimals).", 8.66, "AC = 5√3.", null, 0.01),
  mc(S`$ABCDEF$ is a regular hexagon (counterclockwise) with centre $O$. Which vector equals $\overrightarrow{AO}$?`, S`$\overrightarrow{BC}$`, [S`$\overrightarrow{CB}$`, S`$\overrightarrow{AB}$`, S`$\overrightarrow{OA}$`], "BC is parallel to AO, the same length, and points the same way."),
  num("How many different vectors join two vertices of a square ABCD (ordered pairs, equal vectors counted once)?", 8, "Four from the sides (AB = DC, …) and four from the diagonals."),
  num("A vector of magnitude 13 points south of the east-west line and has an east component of −5. Find its true bearing (1 decimal).", 202.6, "South component 12; angle west of south tan⁻¹(5/12).", null, 0.05),
  num("The vector shown goes from (−3, 4) to (5, −2). Find its true bearing (1 decimal, north is up).", 126.9, "East 8, south 6: 90° + tan⁻¹(6/8).", vdoc({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 5 }, axes: false, arrows: [{ from: [-3, 4], to: [5, -2], vl: "v" }], points: [{ x: -3, y: 4, label: "(−3, 4)", dx: -8, dy: -10 }, { x: 5, y: -2, label: "(5, −2)", dx: -40, dy: 18 }] }), 0.05),
  tf(S`If $|\overrightarrow{AB}|=|\overrightarrow{CD}|$ and $AB\parallel CD$, then $\overrightarrow{AB}=\overrightarrow{CD}$.`, false, "They might point in opposite directions."),
  num("B is on a bearing of 140° from A. What is the bearing of A from B?", 320, "Add 180°."),
  num("Find the smaller angle between a true bearing of 075° and the quadrant bearing S40°W (degrees).", 145, "S40°W = 220°; 220° − 75°."),
  num("A point on a circle of radius 4 moves a quarter turn. Find the magnitude of its displacement (2 decimals).", 5.66, "4√2.", null, 0.01),
  num("The equilateral triangle shown has side 6 and centre O. Find |OA| (2 decimals).", 3.46, "Two thirds of the height 3√3.", vdoc({ view: { xmin: -0.6, xmax: 6.6, ymin: -0.8, ymax: 5.8 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [6, 0], [3, 5.196], [0, 0]], color: "gray" }], arrows: [{ from: [3, 1.732], to: [3, 5.196], color: "red", off: -14 }], points: [{ x: 3, y: 1.732, label: "O", dx: 8, dy: 6 }, { x: 3, y: 5.196, label: "A", dx: 8, dy: 0 }] }), 0.01),
  num("A vector of magnitude 10 has equal east and north components. Find each component (2 decimals).", 7.07, "10 / √2.", null, 0.01),
  mc("Which statement is always true?", S`If $\vec u=\vec v$ then $|\vec u|=|\vec v|$.`, [S`If $|\vec u|=|\vec v|$ then $\vec u=\vec v$.`, S`$|\vec u|$ can be negative.`, S`$\vec u$ and $-\vec u$ have different magnitudes.`], "Equal vectors share their magnitude; the converse fails."),
  num("The quadrant bearing N25°E corresponds to what angle counterclockwise from east?", 65, "90° − 25°."),
  num("Find the magnitude of the diagonal vector of a 5 by 12 rectangle.", 13, "√(25 + 144)."),
  num("A cyclist rides 20 km on a bearing of 210°. How many kilometres west does she end up?", 10, "East component 20 sin 210° = −10."),
  num("On the map shown (one grid unit = 5 km), how far is B from A in kilometres?", 25, "5 units of grid, × 5 km.", vdoc({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 6 }, axes: false, arrows: [{ from: [1, 1], to: [4, 5], vl: "AB" }], points: [{ x: 1, y: 1, label: "A", dx: -14, dy: 14 }, { x: 4, y: 5, label: "B", dx: 8, dy: 0 }] })),
  num("B is 3 km west and 3 km south of A. Find the bearing of B from A.", 225, "Southwest."),
];

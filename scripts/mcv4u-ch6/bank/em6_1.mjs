// 6.1 Introduction to Vectors — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, pol, brg } from "../vecfig.mjs";

const S = String.raw;
const HEX3 = Array.from({ length: 6 }, (_, i) => pol(3, i * 60));
const easy = [
  mc("Which quantity is a scalar?", "a mass of 3 kg", ["a force of 10 N downward", "a displacement of 5 km west", "a velocity of 40 km/h south"], "Mass has no direction."),
  tf("Speed is a vector quantity.", false, "Speed has only a size; velocity is the vector."),
  num("Write N30°E as a true bearing (degrees).", 30, "30° clockwise from north."),
  num("Write S20°W as a true bearing (degrees).", 200, "180° + 20°."),
  num("Write N80°W as a true bearing (degrees).", 280, "360° − 80°."),
  mc(S`Which quadrant bearing equals the true bearing $240^\circ$?`, "S60°W", ["S30°W", "N60°W", "W60°S"], "240° is 60° past south, toward west."),
  num("A vector moves 9 units right and 12 units up. Find its magnitude.", 15, "√(81 + 144)."),
  num(S`$\vec v$ is on a bearing of $100^\circ$. Give the true bearing of $-\vec v$.`, 280, "Add 180°."),
  fill("The length of a vector is called its ___.", ["magnitude", "Magnitude"], "Written |v|."),
  tf("Two vectors with the same magnitude are always equal.", false, "They also need the same direction."),
  num("The vector shown goes from (1, 1) to (5, 4). Find its magnitude.", 5, "Run 4, rise 3.", vdoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 5 }, axes: false, arrows: [{ from: [1, 1], to: [5, 4], vl: "v" }], points: [{ x: 1, y: 1, label: "(1, 1)", dx: -8, dy: 18 }, { x: 5, y: 4, label: "(5, 4)", dx: -50, dy: -6 }] })),
  num("On a map with scale 1 cm : 20 km, a displacement arrow is 3.5 cm long. How many kilometres is it?", 70, "3.5 × 20."),
  mc("What is the true bearing of due west?", S`$270^\circ$`, [S`$090^\circ$`, S`$180^\circ$`, S`$360^\circ$`], "Three quarters of a turn clockwise from north."),
  num("Find the magnitude of the vector from (0, 0) to (−6, −8).", 10, "√(36 + 64)."),
  tf(S`$-\vec v$ has the same magnitude as $\vec v$.`, true, "Only the direction is reversed."),
  mc(S`Which symbol means the magnitude of $\vec v$?`, S`$|\vec v|$`, [S`$-\vec v$`, S`$\vec v^2$`, S`$\overrightarrow{v}_0$`], "Absolute-value bars."),
  num("Write S45°E as a true bearing (degrees).", 135, "180° − 45°."),
  mc("The vector shown is on a bearing of 300°. What is its quadrant bearing?", "N60°W", ["N30°W", "W30°N", "S60°W"], "360° − 300° = 60° west of north.", vdoc({ view: { xmin: -3.4, xmax: 2, ymin: -1, ymax: 3.4 }, grid: false, north: [0, 0, 3.2], arrows: [{ from: [0, 0], to: brg(3, 300), vl: "v", off: -16 }], arcs: [{ at: [0, 0], r: 1, a: 90, b: 150, label: "?" }] })),
  num("What is the true bearing of a vector pointing due south?", 180, "Half a turn from north."),
  mc("A displacement of 2 km north and a displacement of 2 km south are:", "opposite vectors", ["equal vectors", "scalars", "unrelated"], "Same size, opposite directions."),
];
const medium = [
  num("Find the magnitude of the vector from (−2, 5) to (4, −3).", 10, "Run 6, rise −8."),
  num("A vector goes 5 units east and 5 units south. Find its true bearing.", 135, "Halfway between east and south."),
  num("A vector goes 8 units east and 15 units north. Find its true bearing (1 decimal).", 28.1, "tan⁻¹(8/15) from north.", null, 0.05),
  mc(S`Which quadrant bearing equals $157^\circ$?`, "S23°E", ["S67°E", "N23°E", "E23°S"], "180° − 157° east of south."),
  num("At a scale of 1 cm : 40 km, how long an arrow represents 250 km (cm)?", 6.25, "250 ÷ 40.", null, 0.001),
  num("Find the smaller angle between the bearings 050° and 310° (degrees).", 100, "50° + (360° − 310°)."),
  mc(S`In rectangle $ABCD$, which vector equals $\overrightarrow{AB}$?`, S`$\overrightarrow{DC}$`, [S`$\overrightarrow{CD}$`, S`$\overrightarrow{BA}$`, S`$\overrightarrow{AD}$`], "Opposite side, same direction."),
  tf(S`$\overrightarrow{AB}=\overrightarrow{BA}$.`, false, "They are opposite."),
  num("Find |AB| for A(1, 7) and B(−4, −5).", 13, "Run −5, rise −12."),
  num("The regular hexagon shown has side 3. Find |AD|.", 6, "A long diagonal is twice the side.", vdoc({ view: { xmin: -3.8, xmax: 3.8, ymin: -3.2, ymax: 3.2 }, grid: false, axes: false, segs: [{ pts: [...HEX3, HEX3[0]], color: "gray" }], arrows: [{ from: HEX3[0], to: HEX3[3], color: "red", off: -14 }], points: ["A", "B", "C", "D", "E", "F"].map((t, i) => ({ x: HEX3[i][0], y: HEX3[i][1], label: t, dx: i === 0 ? 8 : i === 3 ? -16 : 2, dy: i < 3 ? -8 : 18 })) })),
  num("Give the true bearing of the opposite of N35°W.", 145, "325° − 180°."),
  mc("A true bearing of 030° corresponds to which angle measured counterclockwise from east?", S`$60^\circ$`, [S`$30^\circ$`, S`$120^\circ$`, S`$330^\circ$`], "90° − 30°."),
  num("A true bearing of 200° corresponds to what angle counterclockwise from east, between 0° and 360°?", 250, "90° − 200° = −110°, plus 360°."),
  num("The tip of an 8 cm hand moves from 12:00 to 6:00. Find the magnitude of its displacement (cm).", 16, "A diameter."),
  num("The square shown has side 6. Find the magnitude of the diagonal vector (2 decimals).", 8.49, "6√2.", vdoc({ view: { xmin: -0.8, xmax: 7, ymin: -0.8, ymax: 7 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [6, 0], [6, 6], [0, 6], [0, 0]], color: "gray" }], arrows: [{ from: [0, 0], to: [6, 6], vl: "d" }], texts: [{ x: 3, y: -0.5, t: "6" }] }), 0.01),
  num("A vector with tail (2, 3) equals the vector from (0, 0) to (4, −1). Find the x-coordinate of its head.", 6, "Add the run 4 to 2."),
  mc("In trapezoid ABCD, DC is parallel to AB, points the same way, and is twice as long. Then AB and DC are:", "parallel but not equal", ["equal", "opposite", "perpendicular"], "Same direction, different magnitudes."),
  num("The quadrant bearing N50°E corresponds to what angle counterclockwise from east?", 40, "90° − 50°."),
  tf("A true bearing of 360° names the same direction as 000°.", true, "A full turn returns to north."),
  num("In parallelogram ABCD, how many different vectors can be made from its four sides, counting both directions?", 4, "AB = DC, BA = CD, AD = BC, DA = CB."),
];
export { easy as E, medium as M };

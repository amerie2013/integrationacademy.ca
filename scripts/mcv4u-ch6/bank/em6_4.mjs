// 6.4 Applications of Vector Addition — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, pol } from "../vecfig.mjs";

const S = String.raw;
const easy = [
  num("Find the resultant of forces of 6 N and 8 N at right angles (N).", 10, "√(36 + 64)."),
  num("Find the resultant of forces of 15 N and 20 N acting in the same direction (N).", 35, "They add."),
  num("Find the resultant of forces of 15 N and 20 N acting in opposite directions (N).", 5, "They subtract."),
  mc("What is the equilibrant of a 40 N force acting north?", "40 N south", ["40 N north", "20 N south", "40 N east"], "Same size, opposite direction."),
  tf("With no wind, an aircraft's track is the same as its heading.", true, "Nothing pushes it off course."),
  num("A boat heads straight across a river at 12 km/h; the current is 5 km/h. Find its speed relative to the shore (km/h).", 13, "√(144 + 25)."),
  mc("A wind from the west blows toward the:", "east", ["west", "north", "south"], "Winds are named by where they come from."),
  num("A swimmer heads straight across a 200 m river at 4 m/s. How long does the crossing take (s)?", 50, "Only the across speed matters."),
  fill("The force that exactly balances the resultant of a set of forces is the ___.", ["equilibrant", "Equilibrant"], "Equal and opposite to the resultant."),
  num("Two 10 N forces act in opposite directions on an object. Find the resultant (N).", 0, "They cancel."),
  num("Find the magnitude of the resultant of the forces shown (N).", 25, "√(49 + 576).", vdoc({ view: { xmin: -0.8, xmax: 3, ymin: -0.8, ymax: 8.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [2.1, 0], vl: "F₁", label: "7 N", off: 16 }, { from: [0, 0], to: [0, 7.2], vl: "F₂", label: "24 N", color: "blue", off: 16 }] })),
  num("A plane with airspeed 500 km/h flies with a 50 km/h tailwind. Find its ground speed (km/h).", 550, "Same direction: add."),
  num("A plane with airspeed 500 km/h flies into an 80 km/h headwind. Find its ground speed (km/h).", 420, "Opposite: subtract."),
  tf("A wind from 090° blows toward 270°.", true, "From east toward west."),
  num("A crossing takes 40 s in a current of 1.5 m/s. How far downstream is the landing point (m)?", 60, "1.5 × 40."),
  mc("An object is in equilibrium when the vector sum of the forces on it is:", "zero", ["equal to its weight", "pointing up", "larger than each force"], "Nothing is left to accelerate it."),
  num("An 80 N weight hangs from two vertical ropes that share it equally. Find the tension in each (N).", 40, "Half the weight."),
  num("Forces of 3 N and 4 N act at right angles. Find the magnitude of their equilibrant (N).", 5, "Same size as the resultant."),
  num("A swimmer heads straight across at 2 m/s in a 2 m/s current (shown). At what angle downstream of straight across does she move (degrees)?", 45, "Equal components.", vdoc({ view: { xmin: -0.8, xmax: 3, ymin: -0.6, ymax: 2.8 }, grid: false, axes: false, polys: [{ pts: [[-0.8, 0], [3, 0], [3, 2.4], [-0.8, 2.4]], fill: "#e0f2fe" }], arrows: [{ from: [0, 0], to: [0, 2], vl: "s", label: "2 m/s", off: -18 }, { from: [0, 2], to: [2, 2], color: "blue", label: "2 m/s", off: -14 }, { from: [0, 0], to: [2, 2], color: "red", off: 16 }] })),
  num("Forces of 30 N east, 30 N west and 10 N north act together. Find the resultant (N).", 10, "East and west cancel."),
];
const medium = [
  num("Forces of 20 N and 30 N act at 60° to each other. Find the resultant (N, 2 decimals).", 43.59, "Triangle angle 120°: √1900.", null, 0.01),
  num("Forces of 20 N and 30 N act at 60° to each other. Find the angle between the resultant and the 20 N force (degrees, 2 decimals).", 36.59, "Sine law.", null, 0.01),
  num("A plane heads 090° at 300 km/h; a 40 km/h wind blows from the north. Find the ground speed (km/h, 2 decimals).", 302.65, "Perpendicular: √(90 000 + 1600).", null, 0.01),
  num("A plane heads 090° at 300 km/h; a 40 km/h wind blows from the north. Find the track (degrees, 1 decimal).", 97.6, "90° + tan⁻¹(40/300).", null, 0.05),
  num("A boat aims straight across at 8 m/s; the current is 3 m/s. Find the resultant speed (m/s, 2 decimals).", 8.54, "√73.", null, 0.01),
  num("A swimmer who swims at 2 m/s wants to land directly across a river whose current is 1 m/s. At what angle upstream of straight across should she aim (degrees)?", 30, "sin θ = 1/2."),
  num("For the swimmer above (2 m/s, current 1 m/s, landing straight across), find her speed across the river (m/s, 2 decimals).", 1.73, "√(4 − 1).", null, 0.01),
  num("Two ropes pull with 120 N each at 25° on either side of the forward direction. Find the resultant (N, 2 decimals).", 217.51, "2 × 120 cos 25°.", null, 0.01),
  num("A 90 N weight hangs from two ropes, each at 30° to the horizontal. Find the tension in each rope (N).", 90, "2T sin 30° = 90."),
  tf("The resultant of two forces is always larger than each of the two forces.", false, "Forces pulling apart can partly cancel."),
  num("Find the resultant of the two 50 N forces shown, 60° apart (N, 2 decimals).", 86.6, "Triangle angle 120°: 50√3.", vdoc({ view: { xmin: -0.6, xmax: 5.6, ymin: -0.6, ymax: 4.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 0], label: "50 N", off: 14 }, { from: [0, 0], to: pol(5, 60), label: "50 N", color: "blue", off: -14 }], arcs: [{ at: [0, 0], r: 1.1, a: 0, b: 60, label: "60°" }] }), 0.01),
  num("A resultant points at 30° counterclockwise from east. At what angle does its equilibrant point (degrees, 0–360)?", 210, "Add 180°."),
  num("A pilot wants a track of 000° at an airspeed of 250 km/h; a 30 km/h wind blows from the west. What heading is needed (degrees, 1 decimal)?", 353.1, "Aim west of north by sin⁻¹(30/250).", null, 0.05),
  num("For the pilot above (track 000°, 250 km/h, 30 km/h west wind), find the ground speed (km/h, 2 decimals).", 248.19, "√(250² − 30²).", null, 0.01),
  mc("To cross a river in the shortest possible time, a boat should aim:", "straight across", ["upstream at 45°", "downstream", "so that it lands directly opposite"], "The current does not change the across speed."),
  num("A river is 90 m wide. A boat aims straight across at 3 m/s in a 2 m/s current. How far downstream does it land (m)?", 60, "Time 30 s; 2 × 30."),
  num("Forces of 3 N, 4 N and 5 N are in equilibrium. Find the angle between the 3 N and 4 N forces (degrees).", 90, "The closed triangle is right-angled opposite the 5 N side, and the forces themselves meet at 180° − 90°."),
  num("A 150 N sign hangs from two cables, each at 60° to the horizontal (shown). Find the tension in each (N, 2 decimals).", 86.6, "2T sin 60° = 150.", vdoc({ view: { xmin: -3.4, xmax: 3.4, ymin: -2.6, ymax: 2.8 }, grid: false, axes: false, segs: [{ pts: [pol(3, 120), [0, 0], pol(3, 60)], color: "gray", w: 1.4 }], polys: [{ pts: [[-0.9, -0.2], [0.9, -0.2], [0.9, -1.1], [-0.9, -1.1]], fill: "#fde68a", stroke: "amber" }], arrows: [{ from: [0, -1.1], to: [0, -2.5], color: "red", label: "150 N", off: -24 }], arcs: [{ at: [0, 0], r: 1, a: 0, b: 60, label: "60°" }, { at: [0, 0], r: 1, a: 120, b: 180, label: "60°" }] }), 0.01),
  num("Find the resultant of 8 N at 0°, 6 N at 180° and 5 N at 90° (N, 2 decimals).", 5.39, "(2, 5).", null, 0.01),
  num("A plane with airspeed 400 km/h heads 000° and tracks 000° at a ground speed of 360 km/h. What is the wind speed (km/h)?", 40, "A pure headwind: 400 − 360."),
];
export { easy as E, medium as M };

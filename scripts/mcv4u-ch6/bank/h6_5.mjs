// 6.5 Resolution of Vectors Into Rectangular Components — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, pol } from "../vecfig.mjs";

const S = String.raw;
const RAD = Math.PI / 180;
export const TOPIC = "6.5 Resolution of Vectors Into Rectangular Components";
export const Q = [
  num("Find the magnitude of the resultant of 12 N at 15°, 18 N at 75° and 9 N at 200° (N, 2 decimals).", 19.08, "x ≈ 7.79, y ≈ 17.41.", null, 0.01),
  num("Find the direction (counterclockwise from east) of the resultant of 12 N at 15°, 18 N at 75° and 9 N at 200° (degrees, 1 decimal).", 65.9, "tan⁻¹(17.41/7.79).", null, 0.05),
  num("A 200 N box rests on a 28° ramp (shown). Find the component of its weight into the ramp (N, 2 decimals).", 176.59, "200 cos 28°.", vdoc({ view: { xmin: -0.5, xmax: 8.5, ymin: -2.4, ymax: 4.6 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [8.2, 0], [8.2, 8.2 * Math.tan(28 * RAD)]], fill: "#f1f5f9", stroke: "gray" }], arrows: [{ from: [4.8, 2.9], to: [4.8, -1.1], vl: "W", label: "200 N", off: -16 }], arcs: [{ at: [0, 0], r: 1.6, a: 0, b: 28, label: "28°" }] }), 0.01),
  num("A sled rope at 35° to the ground lifts with a vertical component of 60 N. Find the horizontal component (N, 2 decimals).", 85.69, "T = 60/sin 35°; horizontal T cos 35° = 60/tan 35°.", null, 0.01),
  num("A plane flies at 400 km/h on a bearing of 070°; a wind adds 50 km/h toward 160°. Find the bearing of the resultant velocity (degrees, 1 decimal).", 77.1, "East 375.88 + 17.10; north 136.81 − 46.98.", null, 0.05),
  num("A plane flies at 400 km/h on a bearing of 070°; a wind adds 50 km/h toward 160°. Find the resultant speed (km/h, 2 decimals).", 403.11, "√(392.98² + 89.83²).", null, 0.01),
  num("A ring is held still by three ropes: 25 N at 10°, 35 N at 100°, and a third rope (shown). Find the tension in the third rope (N, 2 decimals).", 43.01, "It balances the sum (18.54, 38.81).", vdoc({ view: { xmin: -2.4, xmax: 3.2, ymin: -4.4, ymax: 3.8 }, grid: false, arrows: [{ from: [0, 0], to: pol(2.5, 10), label: "25 N", off: 14 }, { from: [0, 0], to: pol(3.5, 100), label: "35 N", color: "blue", off: -18 }, { from: [0, 0], to: pol(4.3, 244.46), color: "green", label: "?", off: 16 }] }), 0.01),
  num("Find the component of a 70 N force along a line that makes 35° with the force (N, 2 decimals).", 57.34, "70 cos 35°.", null, 0.01),
  num("Find the component of a 70 N force perpendicular to a line that makes 35° with the force (N, 2 decimals).", 40.15, "70 sin 35°.", null, 0.01),
  tf("Once two perpendicular axes are chosen, the components of a vector along them are unique.", true, "Each is the projection onto its axis."),
  num("A cart is held still on an 18° ramp by a 50 N force parallel to the ramp. Find the cart's weight (N, 2 decimals).", 161.8, "W sin 18° = 50.", null, 0.01),
  num("A vector at 40° above the horizontal has a horizontal component of 15. Find its vertical component (2 decimals).", 12.59, "15 tan 40°.", null, 0.01),
  num("A horizontal 100 N push acts on a block on a 30° ramp, pushing it toward the ramp. Find the component of the push along (up) the ramp (N, 2 decimals).", 86.6, "The push makes 30° with the ramp surface.", null, 0.01),
  num("A horizontal 100 N push acts on a block on a 30° ramp, pushing it toward the ramp. Find the component of the push into the ramp (N).", 50, "100 sin 30°."),
  num("Find the magnitude of the resultant of 30 N at 0°, 40 N at 60° and 50 N at 210° (shown) (N, 2 decimals).", 11.74, "x ≈ 6.70, y ≈ 9.64.", vdoc({ view: { xmin: -5, xmax: 3.6, ymin: -3, ymax: 4 }, grid: false, arrows: [{ from: [0, 0], to: [3, 0], label: "30 N", off: 14 }, { from: [0, 0], to: pol(4, 60), label: "40 N", color: "blue", off: -18 }, { from: [0, 0], to: pol(5, 210), label: "50 N", color: "green", off: 16 }] }), 0.01),
  num("Find the direction (counterclockwise from east) of the resultant of 30 N at 0°, 40 N at 60° and 50 N at 210° (degrees, 1 decimal).", 55.2, "tan⁻¹(9.64/6.70).", null, 0.05),
  num("A kite string 120 m long makes 52° with the ground. How high is the kite (m, 2 decimals)?", 94.56, "120 sin 52°.", vdoc({ view: { xmin: -0.8, xmax: 8.6, ymin: -0.8, ymax: 10.4 }, grid: false, axes: false, segs: [{ pts: [[-0.8, 0], [8.6, 0]], color: "gray" }, { pts: [[pol(9.6, 52)[0], 0], pol(9.6, 52)], dash: true }], arrows: [{ from: [0, 0], to: pol(9.6, 52), label: "120 m", off: -14 }], arcs: [{ at: [0, 0], r: 1.4, a: 0, b: 52, label: "52°" }], texts: [{ x: 6.6, y: 3.8, t: "height?", color: "red" }] }), 0.01),
  num("A 25 km/h wind blows from 330°. Find its southward component (km/h, 2 decimals).", 21.65, "It blows toward 150°: 25 cos 150° = −21.65 north.", null, 0.01),
  tf(S`$(W\sin\alpha)^2+(W\cos\alpha)^2=W^2$ for any ramp angle $\alpha$.`, true, "sin² + cos² = 1."),
  num("Relative to the shore, a boat moves 6 km/h east and 8 km/h north. The current flows 3 km/h east. Find the boat's speed relative to the water (km/h, 2 decimals).", 8.54, "Subtract the current: (3, 8).", null, 0.01),
];

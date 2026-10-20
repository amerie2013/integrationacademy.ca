// 6.4 Applications of Vector Addition — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, pol, brg } from "../vecfig.mjs";

const S = String.raw;
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
export const TOPIC = "6.4 Applications of Vector Addition";
export const Q = [
  num("Forces of 35 N and 55 N have a resultant of 70 N. Find the angle between the two forces (degrees, 2 decimals).", 80.28, "4900 = 1225 + 3025 + 2(35)(55) cos θ.", null, 0.01),
  num("A plane heads 030° at 450 km/h; a 60 km/h wind blows from 270°. Find the ground speed (km/h, 2 decimals).", 482.8, "Heading and wind direction 60° apart: triangle angle 120°.", null, 0.01),
  num("A plane heads 030° at 450 km/h; a 60 km/h wind blows from 270°. Find the track (degrees, 1 decimal).", 36.2, "Drift sin⁻¹(60 sin 120° / 482.8) ≈ 6.2° clockwise.", null, 0.05),
  num("A pilot wants a track of 045° at an airspeed of 300 km/h; a 50 km/h wind blows from the south (shown). What heading is needed (degrees, 1 decimal)?", 51.8, "The wind's part across the track is 50 sin 45° ≈ 35.36 toward the northwest, so aim right by sin⁻¹(35.36/300).", vdoc({ view: { xmin: -0.8, xmax: 4.2, ymin: -0.6, ymax: 4.4 }, north: [0, 0, 4], segs: [{ pts: [[0, 0], brg(5.5, 45)], color: "gray", dash: true }], arrows: [{ from: [0, 0], to: brg(3, 51.77), vl: "a", label: "300 km/h", off: 16 }, { from: brg(3, 51.77), to: plus(brg(3, 51.77), [0, 0.5]), color: "blue", label: "50", off: -14 }], texts: [{ x: 3.5, y: 3.9, t: "track 045°", color: "gray" }] }), 0.05),
  num("For the pilot above (track 045°, airspeed 300 km/h, 50 km/h wind from the south), find the ground speed (km/h, 1 decimal).", 333.3, "300 cos 6.77° + 50 cos 45°.", null, 0.1),
  num("A boat moving at 5 m/s in still water crosses a 100 m river with a 3 m/s current, landing directly opposite. How long does it take (s)?", 25, "Across speed √(25 − 9) = 4."),
  num("A 400 N weight hangs from two ropes at 30° and 60° to the horizontal. Find the tension in the 60° rope (N, 2 decimals).", 346.41, "The ropes are perpendicular: T = 400 cos 30°.", null, 0.01),
  num("Forces of 12 N at 0° and 16 N at 90° act on a ring (shown). At what angle (counterclockwise from east) must the equilibrant act (degrees, 1 decimal)?", 233.1, "Resultant at tan⁻¹(16/12) ≈ 53.1°, plus 180°.", vdoc({ view: { xmin: -1.6, xmax: 1.6, ymin: -1.8, ymax: 1.8 }, grid: false, arrows: [{ from: [0, 0], to: [1.2, 0], label: "12 N", off: 14 }, { from: [0, 0], to: [0, 1.6], label: "16 N", color: "blue", off: -18 }, { from: [0, 0], to: [-1.2, -1.6], color: "green", label: "E", off: 16 }] }), 0.05),
  num("Two tugs pull a ship: 5000 N at 25° to the left of its axis and 7000 N at 15° to the right. Find the magnitude of the resultant (N, nearest whole number).", 11297, "Along the axis 4531.5 + 6761.3; across 2113.1 − 1811.7.", null, 1),
  tf("In a crosswind, a plane must head in a different direction from the track it wants.", true, "It aims into the wind to cancel the drift."),
  num("A rower moves at 4 km/h in still water and aims straight across a 0.5 km river with a 6 km/h current. How far downstream does she land (km)?", 0.75, "Time 0.125 h; 6 × 0.125.", null, 0.001),
  num("A weight hangs at rest from two perpendicular ropes with tensions 30 N and 40 N. Find the weight (N).", 50, "The tensions add to the weight: √(900 + 1600)."),
  mc("When three forces keep an object in equilibrium, placing them tip to tail gives:", "a closed triangle", ["a straight line", "an open path", "a right angle always"], "Their sum is zero."),
  num("A plane must make a ground speed of 500 km/h on a track of 090° against a 60 km/h wind from 090°. What airspeed is needed (km/h)?", 560, "A pure headwind: 500 + 60."),
  num("A 60 N lamp hangs from two wires at 50° and 35° to the horizontal (shown). Find the tension in the 50° wire (N, 2 decimals).", 49.34, "Horizontal parts equal, vertical parts add to 60.", vdoc({ view: { xmin: -3.4, xmax: 3.4, ymin: -2.4, ymax: 2.6 }, grid: false, axes: false, segs: [{ pts: [pol(3, 145), [0, 0], pol(3, 50)], color: "gray", w: 1.4 }], arrows: [{ from: [0, 0], to: [0, -2.2], color: "red", label: "60 N", off: -20 }], arcs: [{ at: [0, 0], r: 1, a: 0, b: 50, label: "50°" }, { at: [0, 0], r: 1, a: 145, b: 180, label: "35°" }] }), 0.01),
  num("A swimmer moves at 2 m/s in still water. At what angle upstream must she aim to land straight across a river with a 1.4 m/s current (degrees, 2 decimals)?", 44.43, "sin θ = 0.7.", null, 0.01),
  num("Forces of 10 N act at 0°, 90°, 180° and 270°, plus a 5 N force at 0°. Find the resultant (N).", 5, "The four 10 N forces cancel."),
  num("A plane heads 180° at 320 km/h; a 45 km/h wind blows from 135°. Find the ground speed (km/h, 2 decimals).", 289.93, "Wind toward 315°: 135° from the heading, triangle angle 45°.", null, 0.01),
  tf("If three forces are in equilibrium, their resultant is zero.", true, "That is what equilibrium means."),
  num("Forces of 9 N and 12 N have a resultant perpendicular to the 9 N force (shown). Find the angle between the two forces (degrees, 1 decimal).", 138.6, "12 cos θ = −9 along the 9 N force.", vdoc({ view: { xmin: -9.6, xmax: 9.6, ymin: -0.8, ymax: 8.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [9, 0], vl: "F₁", label: "9 N", off: 16 }, { from: [0, 0], to: pol(12, 138.59), vl: "F₂", label: "12 N", color: "blue", off: -16 }, { from: [0, 0], to: [0, 7.94], color: "red", vl: "R", off: 16 }], arcs: [{ at: [0, 0], r: 1.6, a: 0, b: 138.59, label: "?" }] }), 0.05),
];

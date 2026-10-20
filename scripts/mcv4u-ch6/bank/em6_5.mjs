// 6.5 Resolution of Vectors Into Rectangular Components — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, pol } from "../vecfig.mjs";

const S = String.raw;
const easy = [
  num("Find the horizontal component of a 20 N force at 60° above the horizontal (N).", 10, "20 cos 60°."),
  num("Find the vertical component of a 20 N force at 30° above the horizontal (N).", 10, "20 sin 30°."),
  num("A vector has components 8 and 6. Find its magnitude.", 10, "√(64 + 36)."),
  num("A vector has components −5 and 12. Find its magnitude.", 13, "√(25 + 144)."),
  mc(S`For a vector at angle $\theta$ above the horizontal, the horizontal component is:`, S`$|\vec v|\cos\theta$`, [S`$|\vec v|\sin\theta$`, S`$|\vec v|\tan\theta$`, S`$\frac{|\vec v|}{\cos\theta}$`], "Adjacent side."),
  tf("A vector equals the sum of its rectangular components.", true, "That is what resolving means."),
  num("A vector has components 4 and 4. Find its angle above the horizontal (degrees).", 45, "tan θ = 1."),
  num("A 50 N box sits on a flat (0°) surface. Find the component of its weight along the surface (N).", 0, "50 sin 0°."),
  num("A 50 N box sits on a flat (0°) surface. Find the component of its weight into the surface (N).", 50, "50 cos 0°."),
  fill("Splitting a vector into two perpendicular parts is called ___ the vector.", ["resolving", "Resolving", "resolution"], "The parts are its components."),
  num("Find the horizontal component of the vector shown (2 decimals).", 8.66, "10 cos 30°.", vdoc({ view: { xmin: -0.6, xmax: 9.6, ymin: -0.8, ymax: 5.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: pol(10, 30), vl: "v", label: "10", off: -16 }, { from: [0, 0], to: [8.66, 0], color: "blue", label: "?", off: 14 }, { from: [8.66, 0], to: pol(10, 30), color: "red", off: -12 }], arcs: [{ at: [0, 0], r: 1.4, a: 0, b: 30, label: "30°" }] }), 0.01),
  num("Find the vertical component of a 100 N force pointing straight up (N).", 100, "100 sin 90°."),
  mc(S`A vector at $120^\circ$ from the positive x-axis has a horizontal component that is:`, "negative", ["positive", "zero", "equal to its magnitude"], "It points left."),
  num("A plane flies at 50 km/h on a bearing of 090°. Find its east component (km/h).", 50, "Due east."),
  num("A plane flies at 50 km/h on a bearing of 090°. Find its north component (km/h).", 0, "No northward motion."),
  tf("On a steeper ramp, a larger part of an object's weight acts along the ramp.", true, "W sin α grows with α."),
  num("Find the horizontal component of a 30 N force pointing due east (N).", 30, "All horizontal."),
  num("A vector has components 0.6 and 0.8. Find its magnitude.", 1, "√(0.36 + 0.64).", null, 0.001),
  num("Find the magnitude of the vector shown with components −9 and 12.", 15, "√(81 + 144).", vdoc({ view: { xmin: -10, xmax: 1.5, ymin: -1, ymax: 13 }, step: 1, arrows: [{ from: [0, 0], to: [-9, 12], vl: "v", off: 16 }], segs: [{ pts: [[0, 0], [-9, 0], [-9, 12]], dash: true }], texts: [{ x: -4.5, y: -0.6, t: "−9" }, { x: -9.6, y: 6, t: "12" }] })),
  mc("A vector with components (−2, −7) lies in which quadrant?", "III", ["I", "II", "IV"], "Both components negative."),
];
const medium = [
  num("Find the horizontal component of an 80 N force at 25° above the horizontal (N, 2 decimals).", 72.5, "80 cos 25°.", null, 0.01),
  num("Find the vertical component of an 80 N force at 25° above the horizontal (N, 2 decimals).", 33.81, "80 sin 25°.", null, 0.01),
  num("A boat moves at 60 km/h on a bearing of 150°. Find its east component (km/h).", 30, "60 sin 150°."),
  num("A boat moves at 60 km/h on a bearing of 150°. Find its north component (km/h, 2 decimals; south is negative).", -51.96, "60 cos 150°.", null, 0.01),
  num("A vector has components (−6, 6). Find its angle counterclockwise from the positive x-axis (degrees).", 135, "Quadrant II, reference angle 45°."),
  num("A vector has components (20, −21). Find its magnitude.", 29, "√(400 + 441)."),
  num("A vector has components (20, −21). Find its angle counterclockwise from the positive x-axis (degrees, 1 decimal).", 313.6, "Quadrant IV: 360° − tan⁻¹(21/20).", null, 0.05),
  num("A 50 N crate is on a 40° ramp. Find the component of its weight along the ramp (N, 2 decimals).", 32.14, "50 sin 40°.", null, 0.01),
  num("A 50 N crate is on a 40° ramp. Find the component of its weight into the ramp (N, 2 decimals).", 38.3, "50 cos 40°.", null, 0.01),
  tf("A rectangular component of a vector can be larger than the vector itself.", false, "It is a leg of a right triangle whose hypotenuse is the vector."),
  num("A suitcase is pulled with 60 N along a handle at 50° above the horizontal (shown). Find the horizontal component (N, 2 decimals).", 38.57, "60 cos 50°.", vdoc({ view: { xmin: -0.8, xmax: 5.4, ymin: -0.8, ymax: 5.4 }, grid: false, axes: false, polys: [{ pts: [[-0.6, -0.6], [0.6, -0.6], [0.6, 0.4], [-0.6, 0.4]], fill: "#e0e7ff", stroke: "violet" }], arrows: [{ from: [0.3, 0.3], to: pol(6, 50, [0.3, 0.3]), vl: "F", label: "60 N", off: -16 }], arcs: [{ at: [0.3, 0.3], r: 1.2, a: 0, b: 50, label: "50°" }], segs: [{ pts: [[0.3, 0.3], [4.6, 0.3]], dash: true }] }), 0.01),
  num("Add 10 N at 0°, 10 N at 45° and 10 N at 90° using components. Find the magnitude of the resultant (N, 2 decimals).", 24.14, "x = y = 10 + 7.07.", null, 0.01),
  mc(S`At what angle from the positive x-axis is the vector with components $(-1,-\sqrt3)$?`, S`$240^\circ$`, [S`$60^\circ$`, S`$210^\circ$`, S`$300^\circ$`], "Quadrant III, reference angle 60°."),
  num("A rope at 20° to the horizontal must have a horizontal component of 47 N. Find the tension (N, 2 decimals).", 50.02, "47 / cos 20°.", null, 0.01),
  num("A 60 N weight has a 30 N component along a ramp. Find the ramp angle (degrees).", 30, "sin α = 0.5."),
  num("A plane flies at 90 km/h on a bearing of 315°. Find its east component (km/h, 2 decimals; west is negative).", -63.64, "90 sin 315°.", null, 0.01),
  num("Use components to find the magnitude of the resultant of 20 N at 0° and 20 N at 120° (N).", 20, "(10, 17.32)."),
  num("Find the magnitude of the vector shown, with components 6 and −2.5.", 6.5, "√(36 + 6.25).", vdoc({ view: { xmin: -0.6, xmax: 7, ymin: -3.2, ymax: 0.8 }, step: 1, arrows: [{ from: [0, 0], to: [6, -2.5], vl: "v", off: -16 }], segs: [{ pts: [[0, 0], [6, 0], [6, -2.5]], dash: true }], texts: [{ x: 3, y: 0.35, t: "6" }, { x: 6.5, y: -1.25, t: "2.5" }] }), 0.001),
  mc("The component of a vector in the direction perpendicular to itself is:", "0", ["its magnitude", "half its magnitude", "undefined"], "cos 90° = 0."),
  num("A 50 N force has a vertical component of 25 N and points above the horizontal. Find its angle with the horizontal (degrees).", 30, "sin θ = 0.5."),
];
export { easy as E, medium as M };

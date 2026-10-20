// 6.2 Addition and Subtraction of Vectors — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, pol } from "../vecfig.mjs";

const S = String.raw;
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
export const TOPIC = "6.2 Addition and Subtraction of Vectors";
export const Q = [
  num("Walk 6 km on a bearing of 040°, then 9 km on a bearing of 100°. How far are you from the start (2 decimals)?", 13.08, "Turn 60°, triangle angle 120°: √171.", null, 0.01),
  num("Walk 6 km on a bearing of 040°, then 9 km on a bearing of 100°. Find the true bearing of your displacement (1 decimal).", 76.6, "Sine law gives 36.6° past 040°.", null, 0.05),
  num(S`The vectors shown each have magnitude 7 and are $40^\circ$ apart. Find $|\vec u+\vec v|$ (2 decimals).`, 13.16, "Triangle angle 140°.", vdoc({ view: { xmin: -0.6, xmax: 8, ymin: -0.6, ymax: 5 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [7, 0], vl: "u", off: 16 }, { from: [0, 0], to: pol(7, 40), vl: "v", color: "blue", off: -16 }], arcs: [{ at: [0, 0], r: 1.4, a: 0, b: 40, label: "40°" }] }), 0.01),
  num(S`Two vectors of magnitude 7 are $40^\circ$ apart. Find $|\vec u-\vec v|$ (2 decimals).`, 4.79, "√(98 − 98 cos 40°).", null, 0.01),
  num(S`$|\vec u|=6$, $|\vec v|=10$ and $|\vec u-\vec v|=14$. Find the angle between $\vec u$ and $\vec v$ (degrees).`, 120, "cos θ = (36 + 100 − 196)/120."),
  num(S`$|\vec u|=5$, $|\vec u+\vec v|=13$, and $\vec u$ is perpendicular to $\vec u+\vec v$. Find $|\vec v|$ (2 decimals).`, 13.93, "v = (u + v) − u: √(169 + 25).", null, 0.01),
  mc(S`$O$ is the centre of regular hexagon $ABCDEF$. $\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}+\overrightarrow{OD}+\overrightarrow{OE}+\overrightarrow{OF}=$`, S`$\vec 0$`, [S`$6\overrightarrow{OA}$`, S`$\overrightarrow{AD}$`, S`$2\overrightarrow{AD}$`], "Opposite vertices cancel in pairs."),
  num(S`Regular hexagon $ABCDEF$ has side 2 and centre $O$. Find $|\overrightarrow{AB}+\overrightarrow{AF}|$.`, 2, "ABOF is a rhombus, so the sum is AO."),
  num(S`Square $ABCD$ (shown) has side 4. Find $|\overrightarrow{AB}+\overrightarrow{AC}+\overrightarrow{AD}|$ (2 decimals).`, 11.31, "AB + AD = AC, so the sum is 2AC.", vdoc({ view: { xmin: -0.8, xmax: 5, ymin: -0.8, ymax: 5 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 0], off: 14 }, { from: [0, 0], to: [4, 4], color: "red" }, { from: [0, 0], to: [0, 4], color: "blue", off: -14 }], segs: [{ pts: [[4, 0], [4, 4], [0, 4]], color: "gray" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 4, y: 0, label: "B", dx: 6, dy: 14 }, { x: 4, y: 4, label: "C", dx: 6, dy: -4 }, { x: 0, y: 4, label: "D", dx: -16, dy: -4 }] }), 0.01),
  num(S`$|\vec u|=7$ and $|\vec v|=3$. What is the smallest possible value of $|\vec u+\vec v|$?`, 4, "When they point opposite ways."),
  num(S`$|\vec u|=5$, $|\vec v|=8$ and $|\vec u+\vec v|=13$. Find the angle between them (degrees).`, 0, "Equality in the triangle inequality."),
  tf(S`For nonzero $\vec u$ and $\vec v$, $|\vec u+\vec v|=|\vec u-\vec v|$ means $\vec u\perp\vec v$.`, true, "Equal diagonals make the parallelogram a rectangle."),
  num("A plane flies 400 km on a bearing of 120°, then 300 km on a bearing of 210°. Find the bearing of its displacement (1 decimal).", 156.9, "The legs are perpendicular: 120° + tan⁻¹(3/4).", null, 0.05),
  num(S`$\vec u$ (magnitude 10, at $0^\circ$) and $\vec v$ (magnitude 10, at $70^\circ$). At what angle from east does $\vec u+\vec v$ point (degrees)?`, 35, "Equal lengths: the sum bisects the angle."),
  num(S`In $\triangle ABC$, $AB=6$, $AC=8$ and $\angle A=90^\circ$. Find $|\overrightarrow{AB}+\overrightarrow{AC}|$.`, 10, "It is the diagonal of the 6 by 8 rectangle."),
  num("The parallelogram shown has sides 6 and 9 with a 50° angle. Find the length of its shorter diagonal (2 decimals).", 6.9, "That diagonal is u − v: √(117 − 108 cos 50°).", vdoc({ view: { xmin: -0.6, xmax: 15.6, ymin: -0.8, ymax: 5.4 }, grid: false, axes: false, segs: [{ pts: [[9, 0], plus([9, 0], pol(6, 50)), pol(6, 50)], color: "gray" }, { pts: [pol(6, 50), [9, 0]], color: "red", dash: true }], arrows: [{ from: [0, 0], to: [9, 0], vl: "v", label: "9", off: 16 }, { from: [0, 0], to: pol(6, 50), vl: "u", label: "6", color: "blue", off: -16 }], arcs: [{ at: [0, 0], r: 1.3, a: 0, b: 50, label: "50°" }] }), 0.01),
  num("From a port, ship A is 7 km due north and ship B is 24 km due east. How far is B from A (km)?", 25, "AB = PB − PA."),
  mc(S`$|\vec u-\vec v|\gt|\vec u+\vec v|$ exactly when the angle between $\vec u$ and $\vec v$ is:`, "obtuse", ["acute", "right", "zero"], "Compare −2|u||v| cos θ with +2|u||v| cos θ."),
  num("Twelve unit vectors point from the centre of a clock face to each of the 12 hour marks. Find the magnitude of their sum.", 0, "Opposite hours cancel in pairs."),
  num(S`On the grid, $\vec u$ goes 4 right and 1 up and $\vec v$ goes 1 left and 3 up (shown). Find $|\vec u-\vec v|$ (2 decimals).`, 5.39, "u − v = 5 right, 2 down.", vdoc({ view: { xmin: -2, xmax: 5, ymin: -0.5, ymax: 3.5 }, axes: false, arrows: [{ from: [0, 0], to: [4, 1], vl: "u", off: 16 }, { from: [0, 0], to: [-1, 3], vl: "v", color: "blue", off: -16 }] }), 0.01),
];

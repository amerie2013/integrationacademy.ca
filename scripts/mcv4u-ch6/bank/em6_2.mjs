// 6.2 Addition and Subtraction of Vectors — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, pol } from "../vecfig.mjs";

const S = String.raw;
const easy = [
  mc(S`$\overrightarrow{PQ}+\overrightarrow{QR}=$`, S`$\overrightarrow{PR}$`, [S`$\overrightarrow{RP}$`, S`$\overrightarrow{QP}$`, S`$\overrightarrow{PQ}$`], "Tip to tail."),
  num(S`$|\vec u|=4$ and $|\vec v|=9$ point the same way. Find $|\vec u+\vec v|$.`, 13, "Lengths add."),
  num(S`$|\vec u|=4$ and $|\vec v|=9$ point in opposite directions. Find $|\vec u+\vec v|$.`, 5, "Lengths subtract."),
  num(S`$|\vec u|=8$, $|\vec v|=15$ and $\vec u\perp\vec v$. Find $|\vec u+\vec v|$.`, 17, "√(64 + 225)."),
  tf(S`$\vec u+\vec v=\vec v+\vec u$ for all vectors.`, true, "Addition is commutative."),
  mc(S`$\vec u-\vec v$ is the same as:`, S`$\vec u+(-\vec v)$`, [S`$\vec v-\vec u$`, S`$-\vec u+\vec v$`, S`$-(\vec u+\vec v)$`], "Add the opposite."),
  num(S`$|\vec u|=9$, $|\vec v|=12$ and $\vec u\perp\vec v$. Find $|\vec u-\vec v|$.`, 15, "Perpendicular: Pythagoras."),
  mc(S`$\overrightarrow{AB}+\overrightarrow{BA}=$`, S`$\vec 0$`, [S`$2\overrightarrow{AB}$`, S`$2\overrightarrow{BA}$`, S`$\overrightarrow{AB}$`], "You return to A."),
  num("The vectors shown are placed tip to tail. Find the magnitude of their sum.", 10, "6 across and 8 up.", vdoc({ view: { xmin: -0.5, xmax: 7, ymin: -0.5, ymax: 8.5 }, axes: false, arrows: [{ from: [0, 0], to: [6, 0], vl: "u", off: 16 }, { from: [6, 0], to: [6, 8], vl: "v", color: "blue", off: 16 }, { from: [0, 0], to: [6, 8], vl: "?", color: "red", off: -16 }] })),
  num("Walk 2 km east, then 2 km north. Find the distance from the start (2 decimals).", 2.83, "2√2.", null, 0.01),
  fill("The single vector equal to the sum of several vectors is called the ___.", ["resultant", "Resultant"], "It replaces them all."),
  tf(S`$|\vec u+\vec v|=|\vec u|+|\vec v|$ for all vectors.`, false, "Only when they point the same way."),
  num(S`If $\vec u=\vec v$, find $|\vec u-\vec v|$.`, 0, "The difference is the zero vector."),
  mc(S`$\overrightarrow{XY}-\overrightarrow{XZ}=$`, S`$\overrightarrow{ZY}$`, [S`$\overrightarrow{YZ}$`, S`$\overrightarrow{XY}$`, S`$\overrightarrow{ZX}$`], "ZX + XY."),
  num("Two vectors are 50° apart (tails together). Placed tip to tail, what is the angle inside the triangle between them (degrees)?", 130, "180° − 50°."),
  num("Walk 10 m north, then 10 m south. Find the magnitude of the resultant displacement.", 0, "Back to the start."),
  mc(S`With their tails together, $\vec u-\vec v$ runs:`, S`from the head of $\vec v$ to the head of $\vec u$`, [S`from the head of $\vec u$ to the head of $\vec v$`, "along the longer diagonal", S`from the tail to the head of $\vec u$`], "v + (u − v) = u."),
  num(S`Find $|\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}+\overrightarrow{DA}|$.`, 0, "A closed loop."),
  mc("In the parallelogram shown, which vector is the diagonal from A?", S`$\vec u+\vec v$`, [S`$\vec u-\vec v$`, S`$\vec v-\vec u$`, S`$2\vec u$`], "Parallelogram law.", vdoc({ view: { xmin: -0.5, xmax: 7, ymin: -0.6, ymax: 3.6 }, grid: false, axes: false, segs: [{ pts: [[4.5, 0], [6.3, 3], [1.8, 3]], color: "gray" }], arrows: [{ from: [0, 0], to: [4.5, 0], vl: "u", off: 16 }, { from: [0, 0], to: [1.8, 3], vl: "v", color: "blue", off: -16 }, { from: [0, 0], to: [6.3, 3], color: "red", label: "?", off: -12 }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }] })),
  tf(S`$\overrightarrow{AB}-\overrightarrow{CB}=\overrightarrow{AC}$.`, true, "−CB = BC, and AB + BC = AC."),
];
const medium = [
  num(S`$|\vec u|=5$, $|\vec v|=7$, with $60^\circ$ between them. Find $|\vec u+\vec v|$ (2 decimals).`, 10.44, "Triangle angle 120°: √109.", null, 0.01),
  num(S`$|\vec u|=5$, $|\vec v|=7$, with $60^\circ$ between them. Find $|\vec u-\vec v|$ (2 decimals).`, 6.24, "√(25 + 49 − 35).", null, 0.01),
  num(S`$|\vec u|=12$, $|\vec v|=9$, with $120^\circ$ between them. Find $|\vec u+\vec v|$ (2 decimals).`, 10.82, "Triangle angle 60°: √117.", null, 0.01),
  num(S`$|\vec u|=12$, $|\vec v|=9$, with $120^\circ$ between them. Find $|\vec u-\vec v|$ (2 decimals).`, 18.25, "√(225 + 108).", null, 0.01),
  num("Walk 5 km north, then 12 km east. How far are you from the start (km)?", 13, "√(25 + 144)."),
  num("Walk 5 km north, then 12 km east. Find the true bearing of your displacement (1 decimal).", 67.4, "tan⁻¹(12/5) from north.", null, 0.05),
  mc(S`Simplify $\overrightarrow{AB}-\overrightarrow{AC}+\overrightarrow{BC}$.`, S`$\vec 0$`, [S`$2\overrightarrow{BC}$`, S`$\overrightarrow{AC}$`, S`$2\overrightarrow{AB}$`], "AB + BC + CA."),
  num(S`$|\vec u|=|\vec v|=10$ and $|\vec u+\vec v|=10\sqrt3$. Find the angle between $\vec u$ and $\vec v$ (degrees).`, 60, "Triangle angle 120°, so 60° between."),
  num(S`The vectors shown have magnitude 6 and are perpendicular. Find $|\vec u-\vec v|$ (2 decimals).`, 8.49, "6√2.", vdoc({ view: { xmin: -0.6, xmax: 7, ymin: -0.6, ymax: 7 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [6, 0], vl: "u", off: 16 }, { from: [0, 0], to: [0, 6], vl: "v", color: "blue", off: 16 }, { from: [0, 6], to: [6, 0], color: "red", label: "u − v", off: -14 }] }), 0.01),
  num(S`$|\vec u|=|\vec v|=4$ with $150^\circ$ between them. Find $|\vec u+\vec v|$ (2 decimals).`, 2.07, "Triangle angle 30°.", null, 0.01),
  tf(S`$|\vec u-\vec v|\le|\vec u|+|\vec v|$ for all vectors.`, true, "Triangle inequality."),
  num(S`$|\vec u|=6$, $\vec u\perp\vec v$ and $|\vec u+\vec v|=10$. Find $|\vec v|$.`, 8, "√(100 − 36)."),
  mc(S`In regular hexagon $ABCDEF$, $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}=$`, S`$\overrightarrow{AD}$`, [S`$\overrightarrow{DA}$`, S`$\vec 0$`, S`$3\overrightarrow{AB}$`], "Tip to tail."),
  num("A vector of 8 east is added to a vector of 6 north. Find the angle of the sum from east (1 decimal).", 36.9, "tan⁻¹(6/8).", null, 0.05),
  num(S`$|\vec u|=3$, $|\vec v|=5$ and $|\vec u+\vec v|=7$. Find the angle between $\vec u$ and $\vec v$ (degrees).`, 60, "49 = 9 + 25 + 30 cos θ."),
  num("Find the magnitude of the resultant of the chain shown, from A(0, 0) through B(2, 3) and C(5, 1) to D(6, 4) (2 decimals).", 7.21, "AD = (6, 4).", vdoc({ view: { xmin: -0.5, xmax: 7, ymin: -0.5, ymax: 5 }, axes: false, arrows: [{ from: [0, 0], to: [2, 3] }, { from: [2, 3], to: [5, 1], color: "blue" }, { from: [5, 1], to: [6, 4], color: "green" }, { from: [0, 0], to: [6, 4], color: "red", w: 2, dash: true }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 2, y: 3, label: "B", dx: -6, dy: -8 }, { x: 5, y: 1, label: "C", dx: 8, dy: 14 }, { x: 6, y: 4, label: "D", dx: 8, dy: 0 }] }), 0.01),
  num(S`$|\vec u|=3$ and $|\vec v|=4$. Find $|\vec u+\vec v|^2+|\vec u-\vec v|^2$.`, 50, "Parallelogram law: 2(9 + 16)."),
  mc(S`$\vec u-\vec v$ and $\vec v-\vec u$ are:`, "opposite vectors", ["equal vectors", "perpendicular", "always zero"], "One is −1 times the other."),
  num("Add 4 units east, 3 units north and 4 units west. Find the magnitude of the sum.", 3, "East and west cancel."),
  tf(S`$\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$ only when $A$, $B$, $C$ are on one line.`, false, "It holds for any three points."),
];
export { easy as E, medium as M };

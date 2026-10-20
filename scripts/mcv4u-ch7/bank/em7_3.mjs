// 7.3 Applications of the Dot Product — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, pol } from "../vecfig.mjs";

const S = String.raw;
const easy = [
  num("A 10 N force moves an object 5 m in the direction of the force. Find the work (J).", 50, "10 × 5."),
  num("A 20 N force acts at 90° to a 3 m displacement. Find the work (J).", 0, "cos 90° = 0."),
  num("A 40 N force acts at 60° to a 10 m displacement. Find the work (J).", 200, "400 × ½."),
  num(S`Find the work done by $\vec F=[3,1]$ N over $\vec d=[4,0]$ m (J).`, 12, "12 + 0."),
  num(S`Find the scalar projection of $[5,2]$ on $[1,0]$.`, 5, "The x-component."),
  num(S`Find the scalar projection of $[5,2]$ on $[0,1]$.`, 2, "The y-component."),
  tf("Work is a vector quantity.", false, "W = F · d is a scalar."),
  mc(S`The scalar projection of $\vec a$ on $\vec b$ is negative when the angle between them is:`, "obtuse", ["acute", "right", "zero"], "It is |a| cos θ."),
  fill("The SI unit of work is the ___.", ["joule", "Joule", "J", "joules"], "1 J = 1 N·m."),
  num(S`Find the x-component of the vector projection of $[3,4]$ on $[1,0]$.`, 3, "[3, 0]."),
  num("The 12 N force shown acts at 60° to a 5 m displacement. Find the work (J).", 30, "12 × 5 × ½.", vdoc({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 3.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: pol(3.6, 60), vl: "F", label: "12 N", off: -16 }, { from: [0, -0.4], to: [6, -0.4], color: "blue", label: "5 m", off: -12, w: 2 }], arcs: [{ at: [0, 0], r: 0.9, a: 0, b: 60, label: "60°" }] })),
  num(S`Find the scalar projection of $[2,2]$ on $[1,1]$ (2 decimals).`, 2.83, "4/√2.", null, 0.01),
  num(S`Find the work done by $\vec F=[2,-1]$ over $\vec d=[3,6]$.`, 0, "6 − 6."),
  tf(S`The projection of $\vec a$ on $\vec b$ changes if $\vec b$ is made twice as long.`, false, "Only the direction of b matters."),
  num(S`$|\vec a|=4$ and the angle between $\vec a$ and $\vec b$ is $180^\circ$. Find the scalar projection of $\vec a$ on $\vec b$.`, -4, "4 cos 180°."),
  num("A 100 N force pushes a drawer 0.5 m straight in. Find the work (J).", 50, "100 × 0.5."),
  mc("The work done by a force is:", S`$\vec F\cdot\vec d$`, [S`$\vec F\times\vec d$`, S`$|\vec F|+|\vec d|$`, S`$\frac{|\vec F|}{|\vec d|}$`], "A dot product."),
  num("Find the length of the shadow (projection) of [4, 3] on the x-axis shown.", 4, "The x-component.", vdoc({ view: { xmin: -0.5, xmax: 5, ymin: -0.6, ymax: 3.6 }, step: 1, arrows: [{ from: [0, 0], to: [4, 3], vl: "a", off: -16 }, { from: [0, 0], to: [4, 0], color: "red", w: 4 }], segs: [{ pts: [[4, 3], [4, 0]], dash: true }] })),
  num("A 10 N object is lifted 2 m straight up. How much work does gravity do on it (J)?", -20, "Gravity points opposite to the motion."),
  num(S`Find the scalar projection of $[0,7]$ on $[1,0]$.`, 0, "Perpendicular."),
];
const medium = [
  num("A 75 N force at 25° to the motion moves a load 40 m. Find the work (J, 2 decimals).", 2718.92, "75 × 40 cos 25°.", null, 0.01),
  num(S`Find the scalar projection of $[2,5]$ on $[3,4]$.`, 5.2, "26 ÷ 5.", null, 0.001),
  num(S`Find the x-component of the vector projection of $[2,5]$ on $[3,4]$.`, 3.12, "(26/25) × 3.", null, 0.001),
  num(S`Find the y-component of the part of $[2,5]$ perpendicular to $[3,4]$.`, 0.84, "5 − 4.16.", null, 0.001),
  num(S`$\vec F=[8,6]$ N moves an object from $(0,0)$ to $(3,-1)$ m. Find the work (J).`, 18, "24 − 6."),
  num("At what angle between force and motion is the work 80% of its largest value (degrees, 2 decimals)?", 36.87, "cos θ = 0.8.", null, 0.01),
  num(S`Find the scalar projection of $[-3,4]$ on $[2,0]$.`, -3, "−6 ÷ 2."),
  num(S`Find the distance from $(3,4)$ to the line through the origin in the direction $[1,0]$.`, 4, "The perpendicular part is [0, 4]."),
  tf(S`The scalar projection of $\vec a$ on $\vec b$ always equals that of $\vec b$ on $\vec a$.`, false, "One divides by |b|, the other by |a|."),
  num("A rope pulls a sled 15 m with 60 N at 30° to the ground (shown). Find the work (J, 2 decimals).", 779.42, "60 × 15 cos 30°.", vdoc({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 3.4 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [1.3, 0], [1.3, 0.6], [0, 0.6]], fill: "#e0e7ff", stroke: "violet" }], arrows: [{ from: [1.3, 0.3], to: pol(3.5, 30, [1.3, 0.3]), vl: "T", label: "60 N", off: -16 }, { from: [0, -0.5], to: [6, -0.5], color: "blue", label: "15 m", off: -12, w: 2 }], arcs: [{ at: [1.3, 0.3], r: 1, a: 0, b: 30, label: "30°" }] }), 0.01),
  num(S`Find the magnitude of the vector projection of $[6,8]$ on $[0,5]$.`, 8, "[0, 8]."),
  num("A 30 N box slides 6 m down a 40° ramp. How much work does gravity do (J, 2 decimals)?", 115.7, "30 × 6 × sin 40°.", null, 0.01),
  mc(S`For $\vec a=[1,2]$ and $\vec b=[2,4]$, the vector projection of $\vec a$ on $\vec b$ is:`, S`$\vec a$ itself`, [S`$\vec b$`, S`$\vec 0$`, S`$2\vec a$`], "a is already along b."),
  num(S`Find the scalar projection of $[1,1]$ on $[-1,1]$.`, 0, "Perpendicular."),
  num(S`Gravity $\vec F=[0,-49]$ N acts on a ball moving from $(0,10)$ to $(8,2)$ m. Find the work done by gravity (J).`, 392, "[0, −49] · [8, −8]."),
  num("A 90 N force acts at 20° to the motion. Find its component along the motion (N, 2 decimals).", 84.57, "90 cos 20°.", null, 0.01),
  tf("Work done by a force can be negative.", true, "When the force has a part opposite to the motion."),
  num("Find the scalar projection of a = [5, 1] on b = [2, 2] (shown) (2 decimals).", 4.24, "12/√8.", vdoc({ view: { xmin: -0.5, xmax: 5.5, ymin: -0.5, ymax: 3.5 }, step: 1, arrows: [{ from: [0, 0], to: [5, 1], vl: "a", off: 16 }, { from: [0, 0], to: [2, 2], vl: "b", color: "blue", off: -16 }] }), 0.01),
  num(S`Find the distance from $(2,6)$ to the line through the origin in the direction $[3,1]$ (2 decimals).`, 5.06, "Perpendicular part [−1.6, 4.8].", null, 0.01),
  mc(S`The scalar projection of $\vec a$ on $\vec b$ equals:`, S`$|\vec a|\cos\theta$`, [S`$|\vec b|\cos\theta$`, S`$|\vec a|\sin\theta$`, S`$|\vec a||\vec b|$`], "a · b / |b|."),
];
export { easy as E, medium as M };

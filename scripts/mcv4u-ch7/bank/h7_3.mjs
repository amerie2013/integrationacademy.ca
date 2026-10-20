// 7.3 Applications of the Dot Product — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, pol } from "../vecfig.mjs";

const S = String.raw;
export const TOPIC = "7.3 Applications of the Dot Product";
export const Q = [
  num("A 120 N pull does 3000 J of work moving a cart 30 m. At what angle to the motion is the pull (degrees, 2 decimals)?", 33.56, "cos θ = 3000/3600.", null, 0.01),
  num(S`Find the distance from $(4,-1)$ to the line through the origin in the direction $[1,2]$ (2 decimals).`, 4.02, "Perpendicular part [3.6, −1.8].", null, 0.01),
  num("A block's weight is [0, −40] N on a ramp running in the direction [5, 2] (shown). Find the magnitude of the weight's component along the ramp (N, 2 decimals).", 14.86, "|−80|/√29.", vdoc({ view: { xmin: -0.6, xmax: 7, ymin: -3.2, ymax: 3.6 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [6.5, 0], [6.5, 2.6]], fill: "#f1f5f9", stroke: "gray" }], arrows: [{ from: [4, 1.6], to: [4, -1.6], vl: "W", label: "40 N", off: -16 }, { from: [4, 1.6], to: [4 - 1.37 * 0.93, 1.6 - 1.37 * 0.37], color: "red", w: 2.4 }] }), 0.01),
  num(S`Forces $\vec F_1=[3,4]$ and $\vec F_2=[-1,2]$ act together over $\vec d=[5,5]$. Find the total work.`, 40, "Add the forces first: [2, 6] · [5, 5]."),
  num(S`The scalar projection of $\vec a$ on $\vec b$ is 3 and $|\vec b|=4$. Find $\vec a\cdot\vec b$.`, 12, "a · b = (scalar projection) × |b|."),
  num(S`Find the x-component of the vector projection of $[1,3]$ on $[2,-1]$.`, -0.4, "(−1/5)[2, −1].", null, 0.001),
  tf(S`If the vector projection of $\vec a$ on $\vec b$ equals $\vec a$, then $\vec a$ is parallel to $\vec b$.`, true, "Nothing is left perpendicular to b."),
  num("A box is pushed 12 m with a 200 N force directed 30° below the horizontal. Find the work (J, 2 decimals).", 2078.46, "200 × 12 cos 30°.", null, 0.01),
  num("A 50 N handle pull moves a wagon 20 m and does 700 J of work (shown). Find the handle angle (degrees, 2 decimals).", 45.57, "cos θ = 0.7.", vdoc({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 4 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [1.6, 0], [1.6, 0.7], [0, 0.7]], fill: "#e0e7ff", stroke: "violet" }], arrows: [{ from: [1.6, 0.35], to: pol(3.4, 45.57, [1.6, 0.35]), vl: "F", label: "50 N", off: -16 }], arcs: [{ at: [1.6, 0.35], r: 1, a: 0, b: 45.57, label: "?" }] }), 0.01),
  num(S`Find the magnitude of the part of $[7,-2]$ perpendicular to $[1,1]$ (2 decimals).`, 6.36, "Perpendicular part [4.5, −4.5].", null, 0.01),
  mc(S`The vector projection of $\vec a$ on $\vec b$ is $\vec 0$ when:`, S`$\vec a\perp\vec b$`, [S`$\vec a\parallel\vec b$`, S`$|\vec a|=|\vec b|$`, S`$\vec a=\vec b$`], "a · b = 0."),
  num(S`The scalar projection of $[x,2]$ on $[1,0]$ is $-3$. Find $x$.`, -3, "It is the x-component."),
  num(S`A constant force $\vec F=[2,3]$ moves an object once around a closed triangle back to its start. Find the total work.`, 0, "Total displacement is 0."),
  num("Compare an 80 N pull at 20° with one at 50° over 10 m (shown). How much more work does the 20° pull do (J, 2 decimals)?", 237.52, "800(cos 20° − cos 50°).", vdoc({ view: { xmin: -0.6, xmax: 6, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: pol(5, 20), label: "20°", off: 16 }, { from: [0, 0], to: pol(5, 50), color: "blue", label: "50°", off: -16 }, { from: [0, -0.4], to: [5.6, -0.4], color: "gray", label: "10 m", off: -12, w: 2 }] }), 0.01),
  num(S`Find the distance from $P(1,7)$ to the line through $A(1,1)$ in the direction $[4,3]$.`, 4.8, "AP = [0, 6]; perpendicular part [−2.88, 3.84].", null, 0.001),
  num(S`Find (scalar projection of $[1,2]$ on $[3,4]$) + (scalar projection of $[3,4]$ on $[1,2]$) (2 decimals).`, 7.12, "11/5 + 11/√5.", null, 0.01),
  num(S`The scalar projection of $\vec a$ on $\vec b$ is half of $|\vec a|$. Find the angle between them (degrees).`, 60, "cos θ = ½."),
  num("A 588 N hiker walks 500 m along a path that rises 1 m for every 10 m walked. How much work is done against gravity (J)?", 29400, "Height gained 50 m: 588 × 50."),
  num("Find the magnitude of the vector projection of [3, 3] on [4, −2] (shown) (2 decimals).", 1.34, "(6/20)[4, −2] = [1.2, −0.6].", vdoc({ view: { xmin: -0.5, xmax: 4.6, ymin: -2.6, ymax: 3.6 }, step: 1, arrows: [{ from: [0, 0], to: [3, 3], vl: "a", off: -16 }, { from: [0, 0], to: [4, -2], vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: [1.2, -0.6], color: "red", w: 4 }] }), 0.01),
  tf("If a force does zero work on a moving object, the force must be zero.", false, "It may be perpendicular to the motion."),
];

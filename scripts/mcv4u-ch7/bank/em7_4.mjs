// 7.4 Vectors in Three-Space — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, box3, merge } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const easy = [
  num(S`Find $|[2,3,6]|$.`, 7, "√(4 + 9 + 36)."),
  num(S`Find $|[1,2,2]|$.`, 3, "√9."),
  num(S`Find the z-component of $\overrightarrow{AB}$ for $A(1,2,3)$ and $B(4,0,8)$.`, 5, "8 − 3."),
  num(S`Find the y-component of $[1,2,3]+[3,-1,0]$.`, 1, "2 − 1."),
  num(S`Find $[2,0,1]\cdot[1,4,3]$.`, 5, "2 + 0 + 3."),
  mc("Which point lies on the z-axis?", "(0, 0, 5)", ["(5, 0, 0)", "(0, 5, 0)", "(5, 5, 0)"], "x = y = 0."),
  tf(S`$[1,0,0]$, $[0,1,0]$ and $[0,0,1]$ are $\vec i$, $\vec j$ and $\vec k$.`, true, "The unit vectors along the axes."),
  num("Find the distance from the origin to (2, −3, 6).", 7, "√49."),
  fill("The unit vector along the positive z-axis is written ___.", ["k", "\\vec k", "[0,0,1]", "[0, 0, 1]"], "k = [0, 0, 1]."),
  num(S`Find the z-component of $3[1,-2,4]$.`, 12, "3 × 4."),
  num("Find |OP| for the point P(2, 3, 1) shown (2 decimals).", 3.74, "√14.", vdoc(merge(V3, axes3(4.6), { segs: box3(2, 3, 1) }, { arrows: [{ from: [0, 0], to: p3(2, 3, 1), color: "red", vl: "OP", off: -16 }], points: [{ x: p3(2, 3, 1)[0], y: p3(2, 3, 1)[1], label: "P(2, 3, 1)" }] })), 0.01),
  num(S`Find $\vec i\cdot\vec k$.`, 0, "Perpendicular."),
  mc("The point (1, 1, 1) lies where?", "in the octant where all coordinates are positive", ["on the x-axis", "in the xy-plane", "in the octant where all coordinates are negative"], "All three are positive."),
  num(S`Find $[1,1,1]\cdot[1,1,1]$.`, 3, "1 + 1 + 1."),
  tf("The point (2, 0, 0) lies on the y-axis.", false, "It is on the x-axis."),
  num("Find the z-coordinate of the midpoint of (1, 2, 3) and (5, 6, 9).", 6, "(3 + 9)/2."),
  num(S`Find the z-component of the unit vector in the direction of $[0,0,-7]$.`, -1, "It points straight down."),
  num("Find |OP| for the point P(3, 2, 4) at the corner of the box shown (2 decimals).", 5.39, "√29.", vdoc(merge(V3, axes3(4.8), { segs: box3(3, 2, 4) }, { points: [{ x: p3(3, 2, 4)[0], y: p3(3, 2, 4)[1], label: "P" }] })), 0.01),
  num(S`Find the x-component of $[4,-1,2]-[1,1,1]$.`, 3, "4 − 1."),
  mc(S`What angle does $[0,0,5]$ make with the z-axis?`, S`$0^\circ$`, [S`$90^\circ$`, S`$45^\circ$`, S`$180^\circ$`], "It lies along the positive z-axis."),
];
const medium = [
  num("Find the distance between (1, −2, 3) and (−3, 2, 5).", 6, "√(16 + 16 + 4)."),
  num(S`Find the angle between $[1,1,0]$ and $[0,1,1]$ (degrees).`, 60, "cos θ = 1/2."),
  num(S`Find $k$ so that $[1,k,2]\perp[3,1,-1]$.`, -1, "3 + k − 2 = 0."),
  num(S`For $\vec u=[1,0,2]$ and $\vec v=[0,3,1]$, find $|2\vec u-\vec v|$ (2 decimals).`, 4.69, "[2, −3, 3].", null, 0.01),
  num(S`Find $\cos\alpha$ for $[2,3,6]$ (2 decimals).`, 0.29, "2/7.", null, 0.005),
  num(S`Find the direction angle $\gamma$ of $[2,3,6]$ (degrees, 2 decimals).`, 31, "cos⁻¹(6/7).", null, 0.01),
  tf(S`For any nonzero vector, $\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1$.`, true, "The squared components add to |v|²."),
  num(S`Find the y-component of the unit vector in the direction of $[2,-1,2]$ (2 decimals).`, -0.33, "−1/3.", null, 0.005),
  num("Find |a + b| for a = [3, 0, 0] and b = [0, 4, 0] (shown).", 5, "√(9 + 16).", vdoc(merge(V3, axes3(4.8), { arrows: [{ from: [0, 0], to: p3(3, 0, 0), vl: "a", off: 16 }, { from: p3(3, 0, 0), to: p3(3, 4, 0), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(3, 4, 0), color: "red", off: -16 }] }))),
  mc("A vector with direction angles 90°, 90° and 0° points along:", "the positive z-axis", ["the positive x-axis", "the positive y-axis", "the line y = z"], "It makes 0° with the z-axis."),
  num("Find the y-coordinate of the midpoint of (−2, 4, 6) and (4, 0, −2).", 2, "(4 + 0)/2."),
  num(S`Find the angle between $[1,2,2]$ and $[2,1,-2]$ (degrees).`, 90, "2 + 2 − 4 = 0."),
  num(S`Find $[3,-2,1]\cdot[-1,4,5]$.`, -6, "−3 − 8 + 5."),
  num(S`Find $c\gt0$ so that $|[c,2,4]|=6$.`, 4, "c² = 16."),
  num("Triangle ABC has A(0, 0, 0), B(2, 0, 0), C(0, 0, 3) (shown). Find |BC| (2 decimals).", 3.61, "√(4 + 9).", vdoc(merge(V3, axes3(4.6), { segs: [{ pts: [p3(0, 0, 0), p3(2, 0, 0), p3(0, 0, 3), p3(0, 0, 0)], color: "violet" }], points: [{ x: p3(2, 0, 0)[0], y: p3(2, 0, 0)[1], label: "B", dx: -16, dy: 8 }, { x: p3(0, 0, 3)[0], y: p3(0, 0, 3)[1], label: "C", dx: 8, dy: 0 }] })), 0.01),
  num(S`Find the z-component of the vector of length 9 in the direction of $[1,2,2]$.`, 6, "3[1, 2, 2]."),
  num(S`Find the direction angle $\beta$ of $[1,1,1]$ (degrees, 2 decimals).`, 54.74, "cos⁻¹(1/√3).", null, 0.01),
  tf("A vector can make a 45° angle with each of the three axes.", false, "3 cos² 45° = 1.5 ≠ 1."),
  num(S`Find the scalar projection of $[3,1,2]$ on $[0,0,1]$.`, 2, "The z-component."),
  mc(S`What is $|\vec i+\vec j+\vec k|$?`, S`$\sqrt3$`, ["3", "1", S`$\sqrt2$`], "|[1, 1, 1]|."),
];
export { easy as E, medium as M };

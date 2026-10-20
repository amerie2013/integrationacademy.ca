// 7.6 Applications of the Dot Product and Cross Product — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, pol, p3, axes3, box3, merge } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const easy = [
  num("A 40 N force acts perpendicular to a 0.3 m wrench. Find the torque (N·m).", 12, "0.3 × 40."),
  num("A force pushes straight along a wrench handle, toward the bolt. Find the torque (N·m).", 0, "The angle between r and F is 180°, and sin 180° = 0."),
  num(S`Find the volume of the box spanned by $[2,0,0]$, $[0,2,0]$, $[0,0,2]$.`, 8, "2 × 2 × 2."),
  num(S`Find the work done by $\vec F=[1,2,3]$ over $\vec d=[1,1,1]$.`, 6, "1 + 2 + 3."),
  num(S`Find the area of the parallelogram spanned by $[2,0,0]$ and $[0,5,0]$.`, 10, "2 × 5."),
  tf("For a given force and wrench, the torque is largest when the force is perpendicular to the handle.", true, "sin 90° = 1."),
  mc("The torque produced by a force F applied at position r from a pivot is:", S`$\vec r\times\vec F$`, [S`$\vec r\cdot\vec F$`, S`$\vec F\times\vec r$`, S`$|\vec r|+|\vec F|$`], "A cross product, r first."),
  num("The parallelogram spanned by two vectors has area 12. Find the area of the triangle they form.", 6, "Half."),
  fill("Three vectors that lie in one plane are called ___.", ["coplanar", "Coplanar"], "Their triple product is 0."),
  num("A 20 N force acts at 30° to a 0.5 m wrench. Find the torque (N·m).", 5, "0.5 × 20 × ½."),
  num("A 25 N force is applied perpendicular to the end of a 0.4 m wrench (shown). Find the torque (N·m).", 10, "0.4 × 25.", vdoc({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.5, 0], vl: "r", label: "0.4 m", off: 16, w: 5 }, { from: [4.5, 0], to: [4.5, 3.2], vl: "F", label: "25 N", color: "red", off: -16 }] })),
  num(S`Find $\vec i\cdot(\vec j\times\vec k)$.`, 1, "j × k = i."),
  num(S`A force $\vec F=[0,0,10]$ N lifts an object along $\vec d=[0,0,3]$ m. Find the work (J).`, 30, "10 × 3."),
  tf(S`The scalar triple product $\vec a\cdot(\vec b\times\vec c)$ can be negative.`, true, "The volume is its absolute value."),
  num(S`Find the volume of the parallelepiped on $\vec i$, $\vec j$ and $2\vec k$.`, 2, "1 × 1 × 2."),
  mc("The volume of the parallelepiped on a, b, c is:", S`$|\vec a\cdot(\vec b\times\vec c)|$`, [S`$|\vec a\times\vec b|$`, S`$\vec a\cdot\vec b\cdot\vec c$`, S`$|\vec a|+|\vec b|+|\vec c|$`], "Base area times height."),
  num(S`Find $|\vec r\times\vec F|$ for $\vec r=[0.2,0,0]$ m and $\vec F=[0,10,0]$ N.`, 2, "0.2 × 10."),
  num("Find the volume of the 1 by 2 by 3 box shown.", 6, "The triple product of its edges.", vdoc(merge(V3, axes3(4.6), { segs: box3(1, 2, 3, "violet") }))),
  num(S`Find the work done by $\vec F=[5,5,0]$ over $\vec d=[2,-2,0]$.`, 0, "10 − 10."),
  num("The cross product of two edge vectors of a triangle has length 9. Find the triangle's area.", 4.5, "Half.", null, 0.001),
];
const medium = [
  num("A 60 N force acts on a 0.35 m wrench at 50° to the handle. Find the torque (N·m, 2 decimals).", 16.09, "0.35 × 60 × sin 50°.", null, 0.01),
  num(S`Find the z-component of $\vec\tau=\vec r\times\vec F$ for $\vec r=[0,0.5,0]$ m and $\vec F=[10,0,0]$ N.`, -5, "0(0) − 0.5(10)."),
  num(S`Find the volume of the parallelepiped on $[1,0,0]$, $[1,2,0]$, $[1,1,3]$.`, 6, "[1, 2, 0] × [1, 1, 3] = [6, −3, −1]."),
  mc(S`Are $[1,1,0]$, $[0,1,1]$ and $[1,2,1]$ coplanar?`, "yes", ["no", "only if they are perpendicular", "it cannot be decided"], "The third is the sum of the first two; the triple product is 0."),
  num("Find the area of the triangle with vertices (0, 0, 0), (1, 1, 0), (0, 1, 1) (2 decimals).", 0.87, "Half of |[1, −1, 1]|.", null, 0.005),
  num(S`$\vec F=[3,-1,2]$ N moves an object from $(1,1,1)$ to $(4,3,0)$. Find the work (J).`, 5, "d = [3, 2, −1]: 9 − 2 − 2."),
  num("A 40 N force on a 0.5 m wrench gives a torque of 10 N·m. Find the acute angle between the force and the handle (degrees).", 30, "sin θ = ½."),
  tf("Doubling the length of a wrench doubles the torque from the same force at the same angle.", true, "Torque is proportional to |r|."),
  num("Find the volume of the parallelepiped on a = [2, 0, 0], b = [1, 3, 0], c = [0, 0, 2] (shown).", 12, "b × c = [6, −2, 0]; a · = 12.", vdoc(merge(V3, axes3(4.6), { arrows: [{ from: [0, 0], to: p3(2, 0, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(1, 3, 0), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(0, 0, 2), vl: "c", color: "green", off: -16 }] }))),
  num("A parallelepiped has volume 20 and base area 5. Find its height.", 4, "20 ÷ 5."),
  mc("The torque vector points:", "along the axis of rotation", ["along the force", "along the wrench handle", "toward the person"], "It is perpendicular to both r and F."),
  num(S`Find $k$ so that $[1,0,1]$, $[0,1,1]$ and $[k,1,0]$ are coplanar.`, -1, "[0, 1, 1] × [k, 1, 0] = [−1, k, −k]; −1 − k = 0."),
  num("A parallelepiped has volume 18. A tetrahedron with the same three edges from one corner has one sixth of that volume. Find it.", 3, "18 ÷ 6."),
  num("A 90 N force acts on a 0.25 m wrench at 120° to the handle. Find the torque (N·m, 2 decimals).", 19.49, "0.25 × 90 × sin 120°.", null, 0.01),
  num("Find the area of the triangle with vertices (2, 0, 0), (0, 2, 0), (0, 0, 2) (shown) (2 decimals).", 3.46, "Half of |[4, 4, 4]|.", vdoc(merge(V3, axes3(4.4), { polys: [{ pts: [p3(2, 0, 0), p3(0, 2, 0), p3(0, 0, 2)], fill: "#ede9fe", stroke: "violet" }] })), 0.01),
  num(S`A constant force $[2,3,1]$ moves an object from $(0,0,0)$ to $(1,0,0)$ and then to $(1,2,0)$. Find the total work.`, 8, "Total displacement [1, 2, 0]."),
  num("How much work is done lifting a 50 N box 4 m straight up (J)?", 200, "50 × 4."),
  tf(S`The area of the triangle with edges $\vec a$ and $\vec b$ from one vertex is $|\vec a\times\vec b|$.`, false, "It is half of that."),
  mc("Which product gives the work done by a force?", "the dot product", ["the cross product", "the scalar triple product", "scalar multiplication"], "W = F · d."),
  num(S`Find the volume of the parallelepiped on $[1,2,3]$, $[0,1,4]$, $[5,6,0]$.`, 1, "Triple product −24 + 40 − 15 = 1."),
];
export { easy as E, medium as M };

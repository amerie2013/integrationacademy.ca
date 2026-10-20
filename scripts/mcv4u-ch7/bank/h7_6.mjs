// 7.6 Applications of the Dot Product and Cross Product — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, pol, p3, axes3, merge } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const add3 = (...v) => v.reduce((s, a) => [s[0] + a[0], s[1] + a[1], s[2] + a[2]], [0, 0, 0]);
const ppd = (a, b, c) => {
  const k = [[0, 0, 0], a, b, c, add3(a, b), add3(a, c), add3(b, c), add3(a, b, c)];
  return [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 4], [2, 6], [3, 5], [3, 6], [4, 7], [5, 7], [6, 7]].map(([i, j]) => ({ pts: [p3(...k[i]), p3(...k[j])], color: "gray", w: 1.3 }));
};
export const TOPIC = "7.6 Applications of the Dot Product and Cross Product";
export const Q = [
  num("A bolt needs 30 N·m of torque. What is the smallest force that can produce it on a 0.3 m wrench (N)?", 100, "Pull at 90°: 30 ÷ 0.3."),
  num("A bolt needs 30 N·m of torque from a 0.3 m wrench with the force at 40° to the handle. What force is needed (N, 2 decimals)?", 155.57, "30 ÷ (0.3 sin 40°).", null, 0.01),
  num("Find the volume of the parallelepiped on a = [2, 1, 0], b = [0, 2, 1], c = [1, 0, 2] (shown).", 9, "b × c = [4, 1, −2]; a · = 9.", vdoc(merge(V3, axes3(4.6), { segs: ppd([2, 1, 0], [0, 2, 1], [1, 0, 2]) }))),
  num("For the parallelepiped on a = [2, 1, 0], b = [0, 2, 1], c = [1, 0, 2], find its height above the face spanned by b and c (2 decimals).", 1.96, "9 ÷ |b × c| = 9 ÷ √21.", null, 0.01),
  num(S`Find $k\gt0$ so that the box on $[1,0,0]$, $[0,2,0]$, $[0,0,k]$ has volume 10.`, 5, "2k = 10."),
  num(S`Use $|\overrightarrow{OP}\times\vec i|$ to find the distance from $P(2,3,4)$ to the x-axis.`, 5, "|[0, 4, −3]|."),
  mc(S`If $\vec a\cdot(\vec b\times\vec c)=0$ for nonzero vectors, then:`, "a, b and c are coplanar", ["a, b and c are mutually perpendicular", "a = b = c", "b and c are perpendicular"], "The box has no volume."),
  num("A constant force moves an object around a closed loop back to its start. Find the total work it does.", 0, "The total displacement is 0."),
  num("Find the magnitude of τ = r × F for r = [0.3, 0.4, 0] m and F = [0, 0, 50] N (shown) (N·m).", 25, "[20, −15, 0].", vdoc(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(1.8, 2.4, 0), vl: "r", off: 16 }, { from: p3(1.8, 2.4, 0), to: p3(1.8, 2.4, 2.4), vl: "F", color: "red", off: -16 }] }))),
  tf(S`$\vec a\cdot(\vec b\times\vec c)=\vec b\cdot(\vec c\times\vec a)$.`, true, "Cyclic order gives the same volume and sign."),
  num("Find the area of the triangle with vertices (1, 1, 1), (3, 1, 2), (1, 4, 1) (2 decimals).", 3.35, "Half of |[2, 0, 1] × [0, 3, 0]| = |[−3, 0, 6]|.", null, 0.01),
  num(S`Find the z-component of $\overrightarrow{AB}\times\overrightarrow{AC}$ for $A(0,0,0)$, $B(1,2,0)$, $C(2,0,1)$, a vector perpendicular to their plane.`, -4, "[1, 2, 0] × [2, 0, 1] = [2, −1, −4]."),
  num("Find the volume of the tetrahedron with vertices O, (1, 0, 0), (0, 2, 0), (0, 0, 3).", 1, "One sixth of 1 × 2 × 3."),
  num("A 40 N force acts at 60° to a displacement of length 5 m. Find the work (J).", 100, "40 × 5 × ½."),
  num("Find the volume of the parallelepiped on a = [3, 0, 0], b = [1, 2, 0], c = [1, 1, 2] (shown).", 12, "b × c = [4, −2, −1]; a · = 12.", vdoc(merge(V3, axes3(4.6), { segs: ppd([3, 0, 0], [1, 2, 0], [1, 1, 2]) }))),
  num("At what acute angle to the handle does a force give half of its greatest possible torque (degrees)?", 30, "sin θ = ½."),
  tf(S`$\vec r\times\vec F=\vec F\times\vec r$.`, false, "Swapping the order reverses the torque vector."),
  num(S`Find $k$ so that $[k,1,0]$, $[0,1,1]$ and $[1,0,1]$ are coplanar.`, -1, "[0, 1, 1] × [1, 0, 1] = [1, 1, −1]; k + 1 = 0."),
  mc("For a fixed force, the torque on a wrench is greatest when the force is applied:", "as far from the bolt as possible, perpendicular to the handle", ["close to the bolt, along the handle", "anywhere, at 45°", "at the bolt itself"], "|τ| = |r||F| sin θ."),
  num("Find the area of the triangle O, B(4, 0, 0), C(4, 3, 5) (shown) (2 decimals).", 11.66, "Half of |[0, −20, 12]|.", vdoc(merge(V3, axes3(4.8), { polys: [{ pts: [p3(0, 0, 0), p3(4, 0, 0), p3(4, 3, 5)], fill: "#ede9fe", stroke: "violet" }], points: [{ x: p3(4, 0, 0)[0], y: p3(4, 0, 0)[1], label: "B", dx: -16, dy: 8 }, { x: p3(4, 3, 5)[0], y: p3(4, 3, 5)[1], label: "C", dx: 8, dy: -4 }] }, { view: { xmin: -4, xmax: 6, ymin: -2.8, ymax: 6 } })), 0.01),
];

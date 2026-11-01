// 1.3 Length, Distance and Unit Vectors — 20 easy + 20 medium questions (answers computed from the data)
import { mc, num, tf } from "./kit.mjs";
import { sub, sc, norm, tp, ord } from "./la.mjs";
import { vdoc, scene3, a3, seg3 } from "../vecfig.mjs";

const S = String.raw;
const nQ = (v) => num(S`Find $\|${tp(v)}\|$.`, norm(v), "Square the components, add, take the square root.", null, 0.001);
const dQ = (a, b) => num(S`Find the distance between $${tp(a)}$ and $${tp(b)}$.`, norm(sub(b, a)), "Length of the difference.", null, 0.001);
const unitQ = (v, i) => num(S`Find the ${ord(i)} component of the unit vector in the direction of $${tp(v)}$ (3 decimals).`, v[i] / norm(v), "Divide by the norm.", null, 0.001);
const lenQ = (L, v, i) => num(S`Find the ${ord(i)} component of the vector of length ${L} in the direction of $${tp(v)}$.`, sc(L / norm(v), v)[i], "Scale the unit vector by the length.", null, 0.001);

const easy = [
  nQ([1, 4, 8]), nQ([12, -4, 3]), nQ([0, -8, 6]), nQ([2, -2, 1]), nQ([4, 4, 2]),
  nQ([1, 1, 1, 1]), nQ([3, 0, 4, 0]),
  dQ([1, 2, 3], [3, -1, 9]), dQ([0, 0, 0], [2, -1, 2]), dQ([5, 1], [1, 4]),
  tf(S`$\|-\vec x\|=\|\vec x\|$ for every vector $\vec x$.`, true, "‖cx‖ = |c|‖x‖ with c = −1."),
  tf(S`$\|\vec x+\vec y\|=\|\vec x\|+\|\vec y\|$ for all vectors.`, false, "Only when they point the same way; e.g. (1, 0) and (−1, 0)."),
  mc("Which of these is a unit vector?", S`$(0.8,0,-0.6)$`, [S`$(1,1,0)$`, S`$(0.5,0.5,0)$`, S`$(1,-1,1)$`], "0.64 + 0.36 = 1."),
  num(S`$\|\vec x\|=4$. Find $\|3\vec x\|$.`, 12, "3 × 4."),
  num(S`$\|\vec x\|=10$. Find $\|-0.5\vec x\|$.`, 5, "|−0.5| × 10."),
  num("Find the length of the arrow in the figure.", 5, "Legs 3 and 4.", vdoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 5 }, step: 1, arrows: [{ from: [0, 0], to: [3, 4], color: "blue" }] })),
  num("The arrow goes from the origin to the far corner of a 2 × 3 × 6 box (figure). Find its length.", 7, "√(4 + 9 + 36).",
    vdoc(scene3(6.5, { segs: [seg3([[2, 0, 0], [2, 3, 0], [0, 3, 0]], { dash: true, w: 1.1 }), seg3([[2, 3, 0], [2, 3, 6]], { dash: true, w: 1.1 }), seg3([[0, 0, 6], [2, 0, 6], [2, 3, 6], [0, 3, 6], [0, 0, 6]], { dash: true, w: 1.1 })], arrows: [a3([0, 0, 0], [2, 3, 6], { color: "blue" })] }))),
  tf(S`$\|\vec x\|=0$ only when $\vec x=\vec 0$.`, true, "A sum of squares is 0 only if every term is 0."),
  num(S`$\|\vec u\|=6$. What is the length of the unit vector $\vec u/\|\vec u\|$?`, 1, "Normalising always gives length 1."),
  tf(S`$\vec e_3$ is a unit vector in $\mathbb R^5$.`, true, "One component is 1, the rest 0."),
];

const medium = [
  unitQ([2, -3, 6], 1), unitQ([1, 2, 2], 2), unitQ([4, 0, -3], 0),
  lenQ(10, [3, 0, 4], 2), lenQ(9, [2, 1, -2], 0), lenQ(4, [1, 1, 1, 1], 3),
  num(S`Find $k\gt0$ with $\|(k,2,-2)\|=3$.`, 1, "k² + 8 = 9."),
  num(S`Find $k\gt0$ with $\|(1,k,k)\|=3$.`, 2, "1 + 2k² = 9."),
  num(S`Find $k\gt0$ with $\|(k,k,k,k)\|=6$.`, 3, "√(4k²) = 2k."),
  dQ([1, 2, 3, 4, 5], [2, 2, 2, 2, 2]),
  tf(S`$d(\vec x,\vec y)=d(\vec y,\vec x)$ for all $\vec x,\vec y$.`, true, "‖x − y‖ = ‖−(y − x)‖ = ‖y − x‖."),
  num(S`Find the perimeter of the triangle with vertices $O(0,0,0)$, $A(1,2,2)$, $B(2,0,-1)$ (3 decimals).`, 3 + Math.sqrt(5) + Math.sqrt(14), "OA = 3, OB = √5, AB = √14.", null, 0.002),
  num(S`Starting at $O$ and moving toward $(3,0,4)$, you travel 10 units. Find the third component of where you stop.`, 8, "10 × (3, 0, 4)/5 = (6, 0, 8)."),
  num(S`$\|\vec u\|=3$ and $\|\vec v\|=4$. What is the largest possible value of $\|\vec u+\vec v\|$?`, 7, "Triangle inequality; equality when they point the same way."),
  num(S`$\|\vec u\|=3$ and $\|\vec v\|=4$. What is the smallest possible value of $\|\vec u+\vec v\|$?`, 1, "Opposite directions: 4 − 3."),
  mc(S`Which expression equals $\|\vec x\|^2$ for $\vec x=(a,b,c)$?`, S`$a^2+b^2+c^2$`, [S`$(a+b+c)^2$`, S`$|a|+|b|+|c|$`, S`$\sqrt{a^2+b^2+c^2}$`], "The norm squared drops the root."),
  num(S`Find the distance from $(4,-1,2)$ to the origin (3 decimals).`, Math.sqrt(21), "√(16 + 1 + 4).", null, 0.001),
  num("Find the perimeter of the triangle in the figure (3 decimals).", 4 + 3 + 5, "Sides 4, 3 and the hypotenuse 5.",
    vdoc({ view: { xmin: -0.5, xmax: 5, ymin: -0.5, ymax: 4 }, step: 1, polys: [{ pts: [[0, 0], [4, 0], [4, 3]], fill: "#dbeafe", stroke: "blue" }] })),
  mc(S`$\vec u$ is a unit vector. Which of these is also a unit vector?`, S`$-\vec u$`, [S`$2\vec u$`, S`$\vec u+\vec u$`, S`$\tfrac12\vec u$`], "Only |c| = 1 keeps length 1."),
  num("Find the distance between the points P and Q in the figure.", 10, "Q − P = (6, −8).",
    vdoc({ view: { xmin: -3, xmax: 5, ymin: -8, ymax: 2 }, step: 1, width: 340, segs: [{ pts: [[-2, 1], [4, -7]], color: "red", dash: true }], points: [{ x: -2, y: 1, label: "P(−2, 1)", dx: 8, dy: -4 }, { x: 4, y: -7, label: "Q(4, −7)", dx: -70, dy: 4 }] })),
];

export const E = easy;
export const M = medium;

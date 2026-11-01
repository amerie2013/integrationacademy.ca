// 1.5 The Cross Product — 20 easy + 20 medium questions (answers computed from the data)
import { mc, num, tf } from "./kit.mjs";
import { cross, norm, dot, sub, tp, ord } from "./la.mjs";
import { vdoc, scene3, a3, pt3, seg3 } from "../vecfig.mjs";

const S = String.raw;
const cQ = (u, v, i) => num(S`Find the ${ord(i)} component of $${tp(u)}\times${tp(v)}$.`, cross(u, v)[i], "Cover column i of the 2 × 3 array and take the 2 × 2 determinant (minus sign in the middle).");
const areaQ = (u, v) => num(S`Find the area of the parallelogram with sides $${tp(u)}$ and $${tp(v)}$ (3 decimals).`, norm(cross(u, v)), "‖u × v‖.", null, 0.002);
const triQ = (a, b, c) => num(S`Find the area of the triangle with vertices $${tp(a)}$, $${tp(b)}$, $${tp(c)}$ (3 decimals).`, norm(cross(sub(b, a), sub(c, a))) / 2, "Half of ‖AB × AC‖.", null, 0.002);
const volQ = (u, v, w) => num(S`Find the volume of the parallelepiped with edges $${tp(u)}$, $${tp(v)}$, $${tp(w)}$.`, Math.abs(dot(u, cross(v, w))), "|u · (v × w)|.");

const easy = [
  cQ([1, 2, 0], [3, -1, 4], 0), cQ([2, 0, -1], [1, 3, 2], 1), cQ([4, 1, 1], [0, 2, -3], 2),
  cQ([-1, 1, 2], [2, 2, 0], 0), cQ([3, 3, 1], [1, 0, 5], 1), cQ([0, -2, 4], [1, 1, 1], 2),
  tf(S`$\vec v\times\vec u=\vec u\times\vec v$ for all $\vec u,\vec v\in\mathbb R^3$.`, false, "v × u = −(u × v)."),
  tf(S`$\vec u\times\vec u=\vec 0$ for every $\vec u\in\mathbb R^3$.`, true, "A vector is parallel to itself."),
  tf(S`The cross product is defined for vectors in $\mathbb R^4$.`, false, "Only in ℝ³."),
  mc(S`$\vec e_1\times\vec e_2=$`, S`$\vec e_3$`, [S`$-\vec e_3$`, S`$\vec 0$`, S`$\vec e_1$`], "The basic right-handed product."),
  mc(S`$\vec e_3\times\vec e_1=$`, S`$\vec e_2$`, [S`$-\vec e_2$`, S`$\vec e_3$`, S`$\vec 0$`], "Cyclic order 1 → 2 → 3 → 1."),
  areaQ([3, 0, 0], [0, 4, 0]), areaQ([1, 2, 2], [0, 0, 3]),
  num(S`$\|\vec u\|=6$, $\|\vec v\|=5$, angle $90^\circ$. Find $\|\vec u\times\vec v\|$.`, 30, "‖u‖‖v‖ sin 90°."),
  num(S`Find $(\vec u\times\vec v)\cdot\vec u$ for $\vec u=(2,-7,3)$, $\vec v=(5,1,-4)$.`, 0, "u × v is orthogonal to u."),
  mc("In the figure u points along x₁ and v along x₂. Which way does u × v point?", S`along $+x_3$ (up)`, [S`along $-x_3$ (down)`, S`along $+x_1$`, S`along $-x_2$`], "e₁ × e₂ = e₃; right-hand rule.",
    vdoc(scene3(3.5, { arrows: [a3([0, 0, 0], [2.5, 0, 0], { color: "blue", vl: "u", off: 14 }), a3([0, 0, 0], [0, 2.5, 0], { color: "red", vl: "v", off: -14 })] }))),
  num("Find the area of the shaded parallelogram with sides u = (2, 0, 0) and v = (0, 1, 2) (3 decimals).", norm(cross([2, 0, 0], [0, 1, 2])), "‖(0, −4, 2)‖ = √20.",
    vdoc(scene3(3.5, { polys: [{ pts: [[0, 0, 0], [2, 0, 0], [2, 1, 2], [0, 1, 2]].map(([x, y, z]) => [y - 0.55 * x, z - 0.42 * x]), fill: "#fde68a", op: 0.7, stroke: "amber" }], arrows: [a3([0, 0, 0], [2, 0, 0], { color: "blue", vl: "u", off: 14 }), a3([0, 0, 0], [0, 1, 2], { color: "red", vl: "v", off: -14 })] })), 0.002),
  tf(S`If $\vec u$ and $\vec v$ are parallel, then $\vec u\times\vec v=\vec 0$.`, true, "sin θ = 0."),
  num(S`$\vec u\times\vec v=(2,-1,5)$. Find the first component of $\vec v\times\vec u$.`, -2, "Swapping the order negates."),
  num(S`$\vec u\times\vec v=(2,-1,5)$. Find the third component of $\vec u\times(3\vec v)$.`, 15, "Scalars come out: 3 × 5."),
];

const medium = [
  triQ([0, 0, 0], [1, 2, 3], [3, 0, 1]), triQ([1, 1, 1], [2, 3, 1], [1, 2, 4]), triQ([2, 0, 0], [0, 3, 0], [0, 0, 6]),
  num(S`Give the third component of the vector $\vec u\times\vec v$ orthogonal to $\vec u=(1,1,2)$ and $\vec v=(2,-1,1)$.`, cross([1, 1, 2], [2, -1, 1])[2], "u₁v₂ − u₂v₁."),
  num(S`Give the first component of $(3,1,-1)\times(1,2,4)$, a normal to the plane spanned by the two vectors.`, cross([3, 1, -1], [1, 2, 4])[0], "u₂v₃ − u₃v₂."),
  tf(S`$(2,-6,4)$ and $(-1,3,-2)$ are parallel.`, true, "Their cross product is 0 (the first is −2 times the second)."),
  tf(S`$(1,2,3)$ and $(2,4,5)$ are parallel.`, false, `Cross product ${tp(cross([1, 2, 3], [2, 4, 5]))} ≠ 0.`),
  num(S`$\vec u\times\vec v=(1,0,-2)$. Find the third component of $(2\vec u)\times(-\vec v)$.`, 4, "(2)(−1)(−2)."),
  num(S`$\vec u\times\vec v=(1,2,3)$ and $\vec u\times\vec w=(0,-1,4)$. Find the second component of $\vec u\times(\vec v+\vec w)$.`, 1, "Distributive: 2 + (−1)."),
  volQ([1, 0, 1], [1, 1, 0], [0, 1, 2]), volQ([2, 1, 0], [0, 3, 1], [1, 0, 4]), volQ([3, 0, 0], [0, 2, 0], [1, 1, 5]),
  tf(S`$(1,0,1)$, $(0,1,1)$ and $(1,1,2)$ lie in one plane through the origin.`, true, "(1, 1, 2) = (1, 0, 1) + (0, 1, 1); triple product 0."),
  tf(S`$(1,0,0)$, $(0,1,0)$ and $(1,1,1)$ lie in one plane through the origin.`, false, "Triple product 1 ≠ 0."),
  num(S`$\|\vec u\|=2$, $\|\vec v\|=5$ and $\|\vec u\times\vec v\|=5$. Find the acute angle between them in degrees.`, 30, "sin θ = 5/10."),
  num("Use the cross product to find the area of the triangle in the figure.", 6, "(4, 0, 0) × (2, 3, 0) = (0, 0, 12); half is 6.",
    vdoc({ view: { xmin: -0.5, xmax: 4.6, ymin: -0.5, ymax: 3.6 }, step: 1, polys: [{ pts: [[0, 0], [4, 0], [2, 3]], fill: "#dbeafe", stroke: "blue" }], points: [{ x: 0, y: 0, label: "(0, 0)", dx: -10, dy: 16 }, { x: 4, y: 0, label: "(4, 0)", dx: -8, dy: 16 }, { x: 2, y: 3, label: "(2, 3)", dx: 6, dy: -4 }] })),
  mc(S`Your right-hand fingers point along $\vec v$ and curl toward $\vec u$. Your thumb points along:`, S`$\vec v\times\vec u$`, [S`$\vec u\times\vec v$`, S`$\vec u+\vec v$`, S`$\vec u-\vec v$`], "The first vector is where the fingers start."),
  num(S`Find the third component of the unit vector in the direction of $(1,0,0)\times(1,2,2)$ (3 decimals).`, cross([1, 0, 0], [1, 2, 2])[2] / norm(cross([1, 0, 0], [1, 2, 2])), "(0, −2, 2), length 2√2.", null, 0.001),
  num(S`Find the second component of the unit vector in the direction of $(0,3,0)\times(4,0,3)$ (3 decimals).`, cross([0, 3, 0], [4, 0, 3])[1] / norm(cross([0, 3, 0], [4, 0, 3])), "(9, 0, −12), length 15.", null, 0.001),
  mc(S`$\vec e_1\times(\vec e_1\times\vec e_2)=$`, S`$-\vec e_2$`, [S`$\vec 0$`, S`$\vec e_2$`, S`$\vec e_3$`], "e₁ × e₃ = −e₂ (and (e₁ × e₁) × e₂ = 0: not associative).",
    vdoc(scene3(3, { arrows: [a3([0, 0, 0], [2, 0, 0], { color: "blue", label: "e₁", off: 14 }), a3([0, 0, 0], [0, 2, 0], { color: "red", label: "e₂", off: -14 }), a3([0, 0, 0], [0, 0, 2], { color: "green", label: "e₃", off: -16 })], points: [pt3([0, 0, 0], "", { color: "black" })] }))),
];

export const E = easy;
export const M = medium;

// 1.4 The Dot Product, Angles and Orthogonality — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { deg } from "./la.mjs";
import { vdoc, scene3, a3, pt3, seg3 } from "../vecfig.mjs";

const S = String.raw;
const CUBE = [[[0, 0, 2], [2, 0, 2], [2, 2, 2], [0, 2, 2], [0, 0, 2]], [[2, 0, 0], [2, 2, 0], [0, 2, 0]], [[2, 0, 0], [2, 0, 2]], [[2, 2, 0], [2, 2, 2]], [[0, 2, 0], [0, 2, 2]]];
const cube = (...arrows) => vdoc(scene3(3, { segs: CUBE.map((e) => seg3(e, { w: 1.2 })), arrows }));
export const TOPIC = "1.4 The Dot Product, Angles and Orthogonality";
export const Q = [
  num(S`$\|\vec u\|=4$, $\|\vec v\|=6$ and $\|\vec u+\vec v\|=8$. Find $\vec u\cdot\vec v$.`, 6, "64 = 16 + 2u·v + 36."),
  num(S`$\|\vec u\|=5$, $\|\vec v\|=2$ and $\|\vec u-\vec v\|=\sqrt{19}$. Find the angle between $\vec u$ and $\vec v$ in degrees.`, 60, "19 = 25 − 2u·v + 4 gives u·v = 5, so cos θ = ½."),
  num(S`Find the angle in degrees between $(1,1,1,1)$ and $(1,1,-1,-1)$ in $\mathbb R^4$.`, 90, "1 + 1 − 1 − 1 = 0."),
  num(S`Find the angle in degrees between $(1,2,0,2)$ and $(2,0,1,2)$ (1 decimal).`, Math.round(deg([1, 2, 0, 2], [2, 0, 1, 2]) * 10) / 10, "Dot product 6; norms 3 and 3.", null, 0.06),
  num("Find the angle in degrees between a main diagonal of a cube and a diagonal of one of its faces from the same corner (1 decimal).", Math.round(deg([1, 1, 1], [1, 1, 0]) * 10) / 10, "(1, 1, 1) and (1, 1, 0): cos θ = 2/√6.", cube(a3([0, 0, 0], [2, 2, 2], { color: "red" }), a3([0, 0, 0], [2, 2, 0], { color: "blue" })), 0.06),
  num("Find the angle in degrees between two main diagonals of a cube (1 decimal).", Math.round(deg([1, 1, 1], [-1, 1, 1]) * 10) / 10, "(1, 1, 1) and (−1, 1, 1): cos θ = 1/3.", cube(a3([0, 0, 0], [2, 2, 2], { color: "red" }), a3([2, 0, 0], [0, 2, 2], { color: "blue" })), 0.06),
  num(S`$\|\vec u\|=3$, $\|\vec v\|=5$ and $\|\vec u+\vec v\|=7$. Find $\|\vec u-\vec v\|^2$.`, 19, "Parallelogram law: ‖u + v‖² + ‖u − v‖² = 2(9) + 2(25)."),
  num(S`Find the third component of a unit vector orthogonal to $(1,0,1)$ and $(0,1,1)$ whose first component is positive (3 decimals).`, -1 / Math.sqrt(3), "a + c = 0, b + c = 0: multiples of (1, 1, −1).", null, 0.001),
  mc(S`In proving $|\vec u\cdot\vec v|\le\|\vec u\|\|\vec v\|$ one uses $\|\vec u+t\vec v\|^2\ge0$ for all $t$. What is concluded about this quadratic in $t$?`, "its discriminant is ≤ 0", ["its discriminant is > 0", "it has two real roots", "its leading coefficient is 0"], "A quadratic that is never negative has at most one real root."),
  mc(S`When does equality hold in Cauchy–Schwarz, $|\vec u\cdot\vec v|=\|\vec u\|\|\vec v\|$?`, "when one vector is a multiple of the other", ["when u ⊥ v", "never", "when ‖u‖ = ‖v‖"], "Then u + tv = 0 for some t."),
  num(S`Find the angle at $A$ in the triangle $A(2,1,0)$, $B(3,3,2)$, $C(4,0,-2)$ (degrees, 1 decimal).`, Math.round(deg([1, 2, 2], [2, -1, -2]) * 10) / 10, "AB = (1, 2, 2), AC = (2, −1, −2): cos A = −4/9.", vdoc(scene3(4, { segs: [seg3([[2, 1, 0], [3, 3, 2], [4, 0, -2], [2, 1, 0]], { color: "blue", w: 2 })], points: [pt3([2, 1, 0], "A", { color: "black" }), pt3([3, 3, 2], "B", { color: "black" }), pt3([4, 0, -2], "C", { color: "black" })] })), 0.06),
  num(S`Find the angle at $C$ in the triangle $A(0,0)$, $B(6,0)$, $C(3,3)$ (degrees).`, 90, "CA = (−3, −3), CB = (3, −3): dot product 0.", vdoc({ view: { xmin: -0.5, xmax: 6.5, ymin: -0.5, ymax: 3.6 }, step: 1, polys: [{ pts: [[0, 0], [6, 0], [3, 3]], fill: "#dbeafe", stroke: "blue" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 6, y: 0, label: "B", dx: 6, dy: 14 }, { x: 3, y: 3, label: "C", dx: 6, dy: -6 }] })),
  num(S`Find $k\gt0$ so that the angle between $(1,k)$ and $(1,0)$ is $60^\circ$ (3 decimals).`, Math.sqrt(3), "1/√(1 + k²) = ½.", null, 0.001),
  tf(S`If $\|\vec u+\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2$, then $\vec u\perp\vec v$.`, true, "The difference is 2u·v."),
  num(S`$\|\vec u\|=\|\vec v\|\ne0$. Find the angle in degrees between $\vec u+\vec v$ and $\vec u-\vec v$.`, 90, "(u + v)·(u − v) = ‖u‖² − ‖v‖² = 0."),
  num(S`What is the largest value of $2a+3b+6c$ over all unit vectors $(a,b,c)$?`, 7, "Cauchy–Schwarz with (2, 3, 6), whose length is 7."),
  num(S`$\vec u$ and $\vec v$ are unit vectors with $\vec u\cdot\vec v=-\tfrac12$. Find $\|\vec u+2\vec v\|^2$.`, 3, "1 + 4(−½) + 4."),
  tf(S`If $\vec u\perp\vec v$ and $\vec v\perp\vec w$, then $\vec u\perp\vec w$.`, false, "u = w = e₁ and v = e₂."),
  num(S`For which $k$ is the angle between $(k,1,1)$ and $(1,1,0)$ equal to $90^\circ$?`, -1, "k + 1 = 0."),
  num(S`Find $\vec u\cdot\vec v$ if $\|\vec u+\vec v\|=10$ and $\|\vec u-\vec v\|=6$.`, 16, "Subtract: ‖u + v‖² − ‖u − v‖² = 4u·v = 64."),
];

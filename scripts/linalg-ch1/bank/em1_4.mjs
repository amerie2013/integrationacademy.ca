// 1.4 The Dot Product, Angles and Orthogonality — 20 easy + 20 medium questions (answers computed from the data)
import { mc, num, tf, fill } from "./kit.mjs";
import { dot, deg, tp, sub } from "./la.mjs";
import { vdoc, scene3, pt3, seg3 } from "../vecfig.mjs";

const S = String.raw;
const dQ = (u, v) => num(S`Compute $${tp(u)}\cdot${tp(v)}$.`, dot(u, v), "Multiply matching components and add.");
const oQ = (u, v) => tf(S`$${tp(u)}$ and $${tp(v)}$ are orthogonal.`, dot(u, v) === 0, `The dot product is ${dot(u, v)}.`);
const aQ = (u, v) => num(S`Find the angle in degrees between $${tp(u)}$ and $${tp(v)}$ (1 decimal).`, Math.round(deg(u, v) * 10) / 10, "cos θ = u·v / (‖u‖‖v‖).", null, 0.06);
const kQ = (u, v, k) => num(S`Find $k$ so that $${tp(u).replaceAll("K", "k")}\perp${tp(v).replaceAll("K", "k")}$.`, k, "Set the dot product equal to 0 and solve.", null, 0.001);
const fig2 = (u, v) => vdoc({ view: { xmin: Math.min(0, u[0], v[0]) - 1, xmax: Math.max(0, u[0], v[0]) + 1, ymin: Math.min(0, u[1], v[1]) - 1, ymax: Math.max(0, u[1], v[1]) + 1 }, step: 1, arrows: [{ from: [0, 0], to: u, vl: "u", off: -16 }, { from: [0, 0], to: v, color: "red", vl: "v", off: 16 }] });

const easy = [
  dQ([2, -1, 3], [4, 0, -2]), dQ([1, 5], [-3, 2]), dQ([0, 2, -1, 4], [7, 3, 3, 1]), dQ([-2, -2, 1], [1, -1, 6]), dQ([3, 1, 0, -1, 2], [1, 1, 1, 1, 1]),
  oQ([1, -2, 3], [4, 5, 2]), oQ([2, 1], [1, 2]), oQ([0, 3, -1], [5, 1, 3]),
  mc(S`$\vec u\cdot\vec v\gt0$ for nonzero vectors. The angle between them is:`, "acute", ["obtuse", "a right angle", "180°"], "Positive cosine."),
  mc(S`$\vec u\cdot\vec v=0$ for nonzero vectors. The angle between them is:`, S`$90^\circ$`, [S`$0^\circ$`, S`$180^\circ$`, S`$45^\circ$`], "Zero dot product: orthogonal."),
  num(S`$\|\vec u\|=5$. Find $\vec u\cdot\vec u$.`, 25, "u·u = ‖u‖²."),
  num(S`$\|\vec u\|=3$, $\|\vec v\|=4$ and $\vec u\perp\vec v$. Find $\vec u\cdot\vec v$.`, 0, "cos 90° = 0."),
  num(S`$\|\vec u\|=3$, $\|\vec v\|=4$ and the vectors point the same way. Find $\vec u\cdot\vec v$.`, 12, "cos 0° = 1."),
  tf("The dot product of two vectors is a vector.", false, "It is a scalar."),
  tf(S`$\vec u\cdot\vec v=\vec v\cdot\vec u$ for all $\vec u,\vec v\in\mathbb R^n$.`, true, "Multiplication of numbers is commutative."),
  num("Compute u · v for the vectors in the figure.", dot([3, 1], [-1, 2]), "Read u = (3, 1), v = (−1, 2).", fig2([3, 1], [-1, 2])),
  num("The figure shows u and v on a unit grid. Find u · v.", dot([2, 3], [3, -2]), "Read u = (2, 3), v = (3, −2).", fig2([2, 3], [3, -2])),
  fill("Two vectors whose dot product is 0 are called ___.", ["orthogonal", "perpendicular"], "Orthogonal (perpendicular)."),
  num(S`Compute $\vec e_2\cdot(5,-3,8)$.`, -3, "Dotting with e₂ picks out the second component."),
  tf(S`$\vec 0\cdot\vec v=0$ for every $\vec v$.`, true, "Every product is 0."),
];

const medium = [
  aQ([1, 2, 2], [0, 3, 4]), aQ([1, 0, 0], [1, 1, 0]), aQ([2, -1], [1, 3]), aQ([1, 1, 1, 1], [1, 0, 0, 0]),
  kQ([1, "K", 2], [3, 1, -1], -1), kQ(["K", "K", 1], [2, -5, 6], 2), kQ([4, -1, "K"], [1, "K", 2], -4),
  num(S`$\|\vec u\|=2$, $\|\vec v\|=3$, $\vec u\cdot\vec v=1$. Find $\|\vec u+\vec v\|^2$.`, 15, "4 + 2 + 9."),
  num(S`$\|\vec u\|=4$, $\|\vec v\|=1$, $\vec u\cdot\vec v=-2$. Find $\|\vec u-\vec v\|^2$.`, 21, "16 + 4 + 1."),
  num(S`$\vec u\cdot\vec v=4$. Find $(2\vec u)\cdot(3\vec v)$.`, 24, "Scalars come out: 6 × 4."),
  num(S`$\vec u\cdot\vec v=3$ and $\vec u\cdot\vec w=-5$. Find $\vec u\cdot(2\vec v-\vec w)$.`, 11, "2(3) − (−5)."),
  num(S`Find the angle at $B$ in the triangle $A(1,0,0)$, $B(0,0,0)$, $C(0,2,2)$ (degrees).`, 90, "BA = (1, 0, 0), BC = (0, 2, 2): dot product 0.",
    vdoc(scene3(3, { segs: [seg3([[1, 0, 0], [0, 0, 0], [0, 2, 2], [1, 0, 0]], { color: "blue", w: 2 })], points: [pt3([1, 0, 0], "A", { color: "black" }), pt3([0, 0, 0], "B", { color: "black" }), pt3([0, 2, 2], "C", { color: "black" })] }))),
  mc(S`Which vector is orthogonal to $(5,-2)$?`, S`$(2,5)$`, [S`$(5,2)$`, S`$(-5,2)$`, S`$(2,-5)$`], "10 − 10 = 0."),
  num(S`$\|\vec u\|=3$ and $\|\vec v\|=5$. What is the largest possible value of $\vec u\cdot\vec v$?`, 15, "Cauchy–Schwarz: u·v ≤ ‖u‖‖v‖."),
  num("Find the angle in degrees between u and v in the figure.", 90, "u = (2, 1), v = (−1, 2): dot product 0.", vdoc({ view: { xmin: -2, xmax: 3, ymin: -0.5, ymax: 3 }, step: 1, arrows: [{ from: [0, 0], to: [2, 1], vl: "u", off: 16 }, { from: [0, 0], to: [-1, 2], color: "red", vl: "v", off: -16 }] })),
  tf(S`If $\vec u\cdot\vec v=\vec u\cdot\vec w$ and $\vec u\ne\vec 0$, then $\vec v=\vec w$.`, false, "Only u ⊥ (v − w) follows; e.g. u = (1, 0), v = (0, 1), w = (0, 2)."),
  num(S`Find $\cos\theta$ for $\vec u=(2,2,1)$ and $\vec v=(2,-1,-2)$.`, 0, "4 − 2 − 2 = 0."),
  num(S`Find $\cos\theta$ for $\vec u=(1,-2,2)$ and $\vec v=(4,0,3)$ (3 decimals).`, dot([1, -2, 2], [4, 0, 3]) / 15, "Dot product 10; norms 3 and 5.", null, 0.001),
  aQ([3, -3], [-2, 2]),
  num(S`For which $k$ is $(2,k)$ orthogonal to $\overrightarrow{AB}$, where $A(1,1)$ and $B(4,7)$?`, -1, `AB = ${tp(sub([4, 7], [1, 1]))}; 6 + 6k = 0.`),
];

export const E = easy;
export const M = medium;

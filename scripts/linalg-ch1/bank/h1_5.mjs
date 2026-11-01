// 1.5 The Cross Product — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { cross, norm, dot, sub, add } from "./la.mjs";
import { vdoc, scene3, a3, pt3, seg3, tri3 } from "../vecfig.mjs";

const S = String.raw;
const triple = (u, v, w) => dot(u, cross(v, w));
export const TOPIC = "1.5 The Cross Product";
export const Q = [
  num(S`$\|\vec u\|=3$, $\|\vec v\|=4$ and $\vec u\cdot\vec v=6$. Find $\|\vec u\times\vec v\|^2$.`, 108, "Lagrange: 9 · 16 − 36."),
  num(S`$\|\vec u\|=5$, $\|\vec v\|=2$ and $\|\vec u\times\vec v\|=8$. Find $|\vec u\cdot\vec v|$.`, 6, "(u·v)² = 100 − 64."),
  num(S`For which $k$ are $(1,2,k)$, $(0,1,3)$ and $(2,1,1)$ coplanar?`, (() => { const a = triple([1, 2, 0], [0, 1, 3], [2, 1, 1]), b = triple([0, 0, 1], [0, 1, 3], [2, 1, 1]); return -a / b; })(), "Set the triple product to 0: it is linear in k.", null, 0.001),
  num(S`For which $k$ are $(k,1,1)$, $(1,k,0)$ and $(0,0,1)$ coplanar with $k\gt0$?`, 1, "Triple product k² − 1 = 0."),
  num(S`The tetrahedron with vertices $O$, $(2,0,0)$, $(0,3,0)$, $(1,1,4)$ has volume $\tfrac16|\vec a\cdot(\vec b\times\vec c)|$. Find it.`, Math.abs(triple([2, 0, 0], [0, 3, 0], [1, 1, 4])) / 6, "Triple product 24.",
    vdoc(scene3(4.5, { segs: [seg3([[2, 0, 0], [0, 3, 0], [1, 1, 4], [2, 0, 0]], { color: "blue", w: 1.8 }), seg3([[0, 0, 0], [1, 1, 4]], { color: "blue", w: 1.8 })], points: [pt3([2, 0, 0], "", { color: "black" }), pt3([0, 3, 0], "", { color: "black" }), pt3([1, 1, 4], "", { color: "black" })] }))),
  num(S`Find the volume of the tetrahedron with vertices $A(1,1,1)$, $B(2,1,1)$, $C(1,3,1)$, $D(1,1,4)$.`, Math.abs(triple(sub([2, 1, 1], [1, 1, 1]), sub([1, 3, 1], [1, 1, 1]), sub([1, 1, 4], [1, 1, 1]))) / 6, "Edges from A: (1, 0, 0), (0, 2, 0), (0, 0, 3); volume 6/6."),
  num(S`The distance from $Q$ to the line through $O$ with direction $\vec d$ is $\frac{\|\vec q\times\vec d\|}{\|\vec d\|}$. Find it for $Q(2,1,3)$ and $\vec d=(1,0,1)$ (3 decimals).`, norm(cross([2, 1, 3], [1, 0, 1])) / Math.sqrt(2), "q × d = (1, 1, −1).", vdoc(scene3(3.5, { segs: [seg3([[-0.5, 0, -0.5], [3, 0, 3]], { color: "violet", w: 2.4 })], points: [pt3([2, 1, 3], "Q", { color: "blue" })] })), 0.002),
  num(S`Find the distance from $Q(0,4,0)$ to the line through $P(1,0,0)$ with direction $(0,1,1)$ (3 decimals).`, norm(cross(sub([0, 4, 0], [1, 0, 0]), [0, 1, 1])) / Math.sqrt(2), "‖PQ × d‖ / ‖d‖ with PQ = (−1, 4, 0).", null, 0.002),
  num(S`$ABCD$ is a parallelogram with $A(0,0,0)$, $B(3,1,0)$, $D(1,2,2)$. Find its area (3 decimals).`, norm(cross([3, 1, 0], [1, 2, 2])), "‖AB × AD‖.",
    vdoc(scene3(4, { polys: [{ pts: [[0, 0, 0], [3, 1, 0], [4, 3, 2], [1, 2, 2]].map(([x, y, z]) => [y - 0.55 * x, z - 0.42 * x]), fill: "#fde68a", op: 0.7, stroke: "amber" }], points: [pt3([0, 0, 0], "A", { color: "black" }), pt3([3, 1, 0], "B", { color: "black" }), pt3([4, 3, 2], "C", { color: "black" }), pt3([1, 2, 2], "D", { color: "black" })] })), 0.002),
  num(S`Let $\vec u=(1,1,0)$, $\vec v=(0,1,1)$, $\vec w=(1,0,1)$. Find the first component of $(\vec u\times\vec v)\times\vec w$.`, cross(cross([1, 1, 0], [0, 1, 1]), [1, 0, 1])[0], "u × v = (1, −1, 1); then cross with w."),
  num(S`Same $\vec u,\vec v,\vec w$: find the first component of $\vec u\times(\vec v\times\vec w)$.`, cross([1, 1, 0], cross([0, 1, 1], [1, 0, 1]))[0], "v × w = (1, 1, −1); then u × that. Compare with the previous question: not associative."),
  num(S`$\vec u\times\vec v=(2,0,-1)$. Find the third component of $(\vec u+\vec v)\times(\vec u-\vec v)$.`, 2, "(u + v) × (u − v) = −2(u × v)."),
  num(S`$\|\vec u\|=1$, $\|\vec v\|=6$ and $\vec u\cdot\vec v=3$. Find $\|\vec u\times\vec v\|$ (3 decimals).`, Math.sqrt(36 - 9), "√(1 · 36 − 9).", null, 0.002),
  mc(S`What is $\vec u\cdot(\vec u\times\vec v)$ for any $\vec u,\vec v\in\mathbb R^3$?`, "0", ["‖u‖²", "‖u × v‖", "u · v"], "u × v is orthogonal to u."),
  num(S`The plane $2x_1+3x_2+6x_3=6$ cuts the axes at $A$, $B$, $C$. Find the area of triangle $ABC$ (3 decimals).`, norm(cross(sub([0, 2, 0], [3, 0, 0]), sub([0, 0, 1], [3, 0, 0]))) / 2, "A(3, 0, 0), B(0, 2, 0), C(0, 0, 1); half of ‖AB × AC‖ = 3.5.",
    vdoc(scene3(3.5, { polys: [tri3(3, 2, 1, "#dbeafe", "blue")] })), 0.002),
  tf(S`If $\vec u\times\vec v=\vec u\times\vec w$ and $\vec u\ne\vec 0$, then $\vec v=\vec w$.`, false, "Only u × (v − w) = 0 follows: v − w can be any multiple of u."),
  num(S`Find the angle in degrees between $(1,1,0)$ and $(0,1,1)$ using $\tan\theta=\frac{\|\vec u\times\vec v\|}{\vec u\cdot\vec v}$.`, 60, "‖(1, −1, 1)‖ = √3 and u·v = 1: tan θ = √3."),
  num(S`A 0.25 m wrench is pushed with a 40 N force at $30^\circ$ to the handle. The torque is $\vec r\times\vec F$. Find its magnitude in N·m.`, 0.25 * 40 * 0.5, "‖r‖‖F‖ sin 30°.", null, 0.001),
  num(S`Find the sum of the components of $(\vec e_1+\vec e_2)\times(\vec e_2+\vec e_3)$.`, cross(add([1, 0, 0], [0, 1, 0]), add([0, 1, 0], [0, 0, 1])).reduce((s, x) => s + x, 0), "(1, 1, 0) × (0, 1, 1) = (1, −1, 1)."),
  mc(S`$\vec u\cdot(\vec v\times\vec w)=5$. What is $\vec v\cdot(\vec w\times\vec u)$?`, "5", ["−5", "0", "15"], "The triple product is unchanged by a cyclic shift (it is the same determinant)."),
];

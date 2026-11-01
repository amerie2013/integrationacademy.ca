// 1.6 Normal Vectors and Scalar Equations of Planes — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { cross, dot, norm, sub, add, sc } from "./la.mjs";
import { vdoc, scene3, pt3, line3, patch3, tri3 } from "../vecfig.mjs";

const S = String.raw;
// plane containing the line p + t m and the point q, written n · x = d with n = m × (q − p)
const planeLP = (p, m, q) => { const n = cross(m, sub(q, p)); return [n, dot(n, p)]; };
const [nA, dA] = planeLP([1, 2, 0], [1, 0, 1], [2, 0, 3]);
const [nB, dB] = planeLP([0, 1, 1], [2, 1, 0], [1, 1, 2]);
export const TOPIC = "1.6 Normal Vectors and Scalar Equations of Planes";
export const Q = [
  num(S`The plane containing the line $\vec x=(1,2,0)+t(1,0,1)$ and the point $(2,0,3)$ is $\vec n\cdot\vec x=d$ with $\vec n=(1,0,1)\times(1,-2,3)=(${nA.join(",")})$. Find $d$.`, dA, "d = n · (1, 2, 0)."),
  num(S`The plane containing the line $\vec x=(0,1,1)+t(2,1,0)$ and the point $(1,1,2)$ is $\vec n\cdot\vec x=d$ with $\vec n=(2,1,0)\times(1,0,1)=(${nB.join(",")})$. Find $d$.`, dB, "d = n · (0, 1, 1).",
    vdoc(scene3(4, { polys: [patch3([0, 1, 1], [2, 1, 0], [1, 0, 1], 1, "#dbeafe", "blue", 0.7)], segs: [line3([0, 1, 1], [2, 1, 0], -1, 1.2, "violet", 3)], points: [pt3([1, 1, 2], "(1, 1, 2)", { color: "red" })] }))),
  num(S`The planes $x_1+x_2+x_3=6$ and $x_1-x_2=0$ meet in a line. Find the third component of its point with $x_1=1$.`, 4, "x₂ = x₁ = 1, so x₃ = 6 − 2."),
  num(S`The planes $2x_1-x_2+x_3=4$ and $x_1+x_2-x_3=2$ meet in a line. Find the first component of every point on it.`, 2, "Add the equations: 3x₁ = 6."),
  num(S`The plane through $(2,-1,3)$ perpendicular to the line $\vec x=t(1,4,-2)$ is $x_1+4x_2-2x_3=d$. Find $d$.`, 2 - 4 - 6, "The line's direction is the normal."),
  num(S`Find $d$ for the plane $\vec n\cdot\vec x=d$ containing the intersecting lines $(1,1,1)+t(1,0,2)$ and $(1,1,1)+s(0,1,-1)$, with $\vec n=(1,0,2)\times(0,1,-1)$.`, dot(cross([1, 0, 2], [0, 1, -1]), [1, 1, 1]), "n = (−2, 1, 1); d = n · (1, 1, 1)."),
  num(S`For which $k$ is the line $\vec x=(1,0,0)+t(2,k,1)$ parallel to the plane $x_1-x_2+3x_3=7$?`, 5, "Direction ⊥ normal: 2 − k + 3 = 0."),
  num(S`For which $k$ does the line $\vec x=(1,1,k)+t(1,-1,0)$ lie in the plane $x_1+x_2+x_3=5$?`, 3, "The direction is ⊥ to the normal; the point must satisfy 2 + k = 5."),
  num(S`Find the first component of the point where $x_1+x_2+x_3=6$, $x_1-x_2=1$ and $x_3=2$ meet.`, 2.5, "x₁ + x₂ = 4 and x₁ − x₂ = 1.", null, 0.001),
  num(S`Find the second component of the point where $x_1+2x_2=5$, $x_2-x_3=1$ and $x_1+x_3=2$ meet.`, 2, "From the second and third, x₁ = 2 − x₃ = 3 − x₂; then 3 − x₂ + 2x₂ = 5."),
  num(S`Find the angle in degrees between the line $\vec x=t(1,1,0)$ and the plane $x_3=0$.`, 0, "The direction is perpendicular to the normal (0, 0, 1): the line lies flat."),
  num(S`Find the angle in degrees between the line $\vec x=t(0,1,1)$ and the plane $x_3=0$.`, 45, "Angle with the normal is 45°, so with the plane 90° − 45°.",
    vdoc(scene3(3, { polys: [{ pts: [[-1, -1], [2.5, -1], [2.5, 2.5], [-1, 2.5]].map(([x, y]) => [y - 0.55 * x, -0.42 * x]), fill: "#f1f5f9", op: 0.8, stroke: "gray" }], segs: [line3([0, 0, 0], [0, 1, 1], 0, 2.4, "red", 3)] }))),
  num(S`Points equidistant from $A(1,0,2)$ and $B(3,4,0)$ form the plane $\overrightarrow{AB}\cdot\vec x=d$ through the midpoint. Find $d$.`, dot(sub([3, 4, 0], [1, 0, 2]), sc(0.5, add([1, 0, 2], [3, 4, 0]))), "AB = (2, 4, −2), midpoint (2, 2, 1)."),
  num(S`Find the second component of the normal $\overrightarrow{PQ}\times\overrightarrow{PR}$ for $P(1,0,2)$, $Q(2,1,2)$, $R(1,3,0)$.`, cross(sub([2, 1, 2], [1, 0, 2]), sub([1, 3, 0], [1, 0, 2]))[1], "PQ = (1, 1, 0), PR = (0, 3, −2)."),
  tf(S`Two distinct planes with parallel normals never meet.`, true, "They are parallel, separated along the normal."),
  mc(S`The planes $x_1=0$, $x_2=0$ and $x_1+x_2=0$ meet in:`, S`a line (the $x_3$-axis)`, ["a single point", "nothing", "a plane"], "All three contain every point (0, 0, x₃).",
    vdoc(scene3(3, { segs: [line3([0, 0, 0], [0, 0, 1], -0.8, 3, "red", 3)], polys: [patch3([0, 0, 1.2], [0, 1, 0], [0, 0, 1], 1.2, "#dbeafe", "blue", 0.4), patch3([0, 0, 1.2], [1, 0, 0], [0, 0, 1], 1.2, "#fde68a", "amber", 0.4)] }))),
  tf(S`In $\mathbb R^4$, the point $(1,2,0,-1)$ lies on the hyperplane $3x_1-x_2+5x_3+x_4=0$.`, true, "3 − 2 + 0 − 1 = 0."),
  num(S`In $\mathbb R^4$, the hyperplane through $(2,0,1,1)$ with normal $(1,-1,2,3)$ is $x_1-x_2+2x_3+3x_4=d$. Find $d$.`, 2 + 0 + 2 + 3, "d = n · p."),
  num(S`The plane $x_1+2x_2+3x_3=6$ cuts a tetrahedron from the first octant. Its volume is $\tfrac16abc$ for intercepts $a,b,c$. Find it.`, (6 * 3 * 2) / 6, "Intercepts 6, 3, 2.",
    vdoc(scene3(6.5, { polys: [tri3(6, 3, 2, "#dbeafe", "blue")] }))),
  num(S`Find the distance between the parallel planes $\vec n\cdot\vec x=1$ and $\vec n\cdot\vec x=13$ for $\vec n=(2,-1,2)$ by finding where the line $\vec x=t\vec n$ meets each; give the distance between those two points.`, 12 / norm([2, -1, 2]), "t = 1/9 and t = 13/9; distance (12/9)‖n‖ = 4."),
];

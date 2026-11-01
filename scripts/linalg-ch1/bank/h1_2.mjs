// 1.2 Lines and Planes in Rⁿ — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, scene3, pt3, line3, patch3 } from "../vecfig.mjs";

const S = String.raw;
export const TOPIC = "1.2 Lines and Planes in Rⁿ";
export const Q = [
  num(S`$L_1:\vec x=(1,0,2)+t(1,1,0)$ and $L_2:\vec x=(0,3,2)+s(1,-1,0)$ intersect. Find the first component of the intersection point.`, 2, "1 + t = s and t = 3 − s give t = 1, s = 2: the point (2, 1, 2).",
    vdoc(scene3(4, { segs: [line3([1, 0, 2], [1, 1, 0], -1, 2.5, "violet"), line3([0, 3, 2], [1, -1, 0], -0.5, 3.5, "blue")], points: [pt3([2, 1, 2], "?", { color: "red" })] }))),
  num(S`$L_1:\vec x=(0,1,-1)+t(2,0,1)$ and $L_2:\vec x=(4,3,-1)+s(0,1,-1)$ intersect. Find the third component of the intersection point.`, 1, "t = 2 from x₁, s = −2 from x₂; the point is (4, 1, 1)."),
  num(S`In $\mathbb R^4$, $\vec x=(1,0,0,1)+t(1,1,0,0)$ and $\vec x=(3,2,1,1)+s(0,0,1,0)$ meet. Find the sum of the components of the meeting point.`, 6, "t = 2, s = −1: the point is (3, 2, 0, 1)."),
  num(S`For which $k$ do $\vec x=(k,1,0)+t(1,0,1)$ and $\vec x=(0,0,2)+s(1,1,1)$ intersect?`, -2, "x₂: s = 1; x₃: t = 3; x₁: k + 3 = 1."),
  num(S`For which $k$ do $\vec x=t(1,2,k)$ and $\vec x=(1,0,1)+s(0,1,0)$ intersect?`, 1, "x₁: t = 1; x₂: s = 2; x₃: k = 1."),
  mc(S`Classify $\vec x=(1,2,3)+t(1,-1,2)$ and $\vec x=(2,1,5)+s(-2,2,-4)$.`, "the same line", ["parallel and distinct", "skew", "intersecting in one point"], "Parallel directions, and (2, 1, 5) is the point t = 1 of the first line."),
  mc(S`Classify $\vec x=t(1,1,1)$ and $\vec x=(1,0,0)+s(0,1,-1)$.`, "skew", ["intersecting", "parallel", "the same line"], "t = 1, s = 1 from x₁ and x₂, but x₃ gives 1 = −1.",
    vdoc(scene3(3.5, { segs: [line3([0, 0, 0], [1, 1, 1], -0.6, 2.6, "violet"), line3([1, 0, 0], [0, 1, -1], -2, 2, "blue")] }))),
  mc(S`Classify $\vec x=(2,0,1)+t(0,1,1)$ and $\vec x=(2,3,4)+s(1,0,0)$.`, "intersecting", ["skew", "parallel", "the same line"], "t = 3 and s = 0 give (2, 3, 4) on both."),
  tf(S`The line $\vec x=(1,1,0)+t(1,0,1)$ lies in the plane $\vec x=(0,1,-1)+s(1,0,0)+r(0,0,1)$.`, true, "The plane is every point with x₂ = 1, and the line always has x₂ = 1."),
  tf(S`The line $\vec x=t(1,1,1)$ lies in the plane $\vec x=s(1,0,0)+r(0,1,0)$.`, false, "The plane is x₃ = 0, but the line leaves it for t ≠ 0."),
  tf(S`The plane containing the line $\vec x=(1,0,0)+t(0,1,0)$ and the point $(0,0,1)$ contains $(2,5,-1)$.`, true, "The plane is (1, 0, 0) + s(0, 1, 0) + r(−1, 0, 1); r = −1, s = 5 gives (2, 5, −1).",
    vdoc(scene3(3.5, { polys: [patch3([1, 0, 0], [0, 1, 0], [-1, 0, 1], 1.4, "#dbeafe", "blue", 0.7)], segs: [line3([1, 0, 0], [0, 1, 0], -1.4, 1.4, "violet", 3)], points: [pt3([0, 0, 1], "(0, 0, 1)", { color: "red" })] }))),
  tf(S`The plane containing the line $\vec x=(1,0,0)+t(0,1,0)$ and the point $(0,0,1)$ contains $(1,1,1)$.`, false, "Points of the plane satisfy x₁ + x₃ = 1; here 1 + 1 = 2."),
  num(S`Where does $\vec x=(3,-2,4)+t(1,2,-2)$ cross the plane $x_3=0$? Give the first component.`, 5, "t = 2: the point (5, 2, 0).",
    vdoc(scene3(5, { polys: [{ pts: [[-1, -3], [5, -3], [5, 3], [-1, 3]].map(([x, y]) => [y - 0.55 * x, -0.42 * x]), fill: "#f1f5f9", op: 0.7, stroke: "gray" }], segs: [line3([3, -2, 4], [1, 2, -2], -0.5, 2.6, "violet")], points: [pt3([5, 2, 0], "?", { color: "red" })] }))),
  num(S`Where does $\vec x=(3,-2,4)+t(1,2,-2)$ cross the plane $x_2=0$? Give the third component.`, 2, "t = 1: the point (4, 0, 2)."),
  num(S`Find the slope of the line $\vec x=(1,2)+t(4,-6)$ in $\mathbb R^2$.`, -1.5, "rise/run = −6/4.", null, 0.001),
  num(S`Find the $x_2$-intercept of the line $\vec x=(2,2)+t(2,5)$.`, -3, "x₁ = 0 at t = −1."),
  mc(S`What does $\vec x=(1,1,1)+s(1,2,3)+t(2,4,6)$ describe?`, "a line", ["a plane", "a single point", "all of ℝ³"], "(2, 4, 6) = 2(1, 2, 3): only one independent direction."),
  num(S`The line through $A(1,2,3)$ and $B(3,6,1)$ crosses the plane $x_3=0$. Find the second component of the crossing point.`, 8, "d = (2, 4, −2); 3 − 2t = 0 at t = 1.5."),
  num(S`For which $c$ does the point $(c,4,0)$ lie on $\vec x=(1,0,2)+t(1,2,-1)$?`, 3, "x₂: t = 2, and x₃ = 2 − 2 = 0 ✓; then c = 1 + 2."),
  mc(S`Lines $L_1$ and $L_2$ in $\mathbb R^3$ have non-parallel directions and the system $\vec p+t\vec d=\vec q+s\vec e$ has no solution. The lines are:`, "skew", ["parallel", "intersecting", "the same line"], "Not parallel and never meeting."),
];

// 1.3 Length, Distance and Unit Vectors — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { sub, norm } from "./la.mjs";
import { vdoc, scene3, pt3, seg3 } from "../vecfig.mjs";

const S = String.raw;
export const TOPIC = "1.3 Length, Distance and Unit Vectors";
export const Q = [
  num(S`Two points on the $x_1$-axis are at distance 7 from $(3,2,6)$. Find the larger first component.`, 6, "(t − 3)² + 4 + 36 = 49, so t = 0 or 6.",
    vdoc(scene3(6, { segs: [seg3([[0, 0, 0], [3, 2, 6]], { color: "red", dash: true }), seg3([[6, 0, 0], [3, 2, 6]], { color: "red", dash: true })], points: [pt3([3, 2, 6], "(3, 2, 6)", { color: "blue" }), pt3([6, 0, 0], "?", { color: "red" })] }))),
  num(S`A sphere is centred at $(1,2,-2)$ and passes through the origin. Find its radius.`, 3, "The radius is the distance to O."),
  num(S`How many points of the line $\vec x=(0,1,0)+t(1,0,1)$ are at distance $\sqrt5$ from the origin?`, 2, "2t² + 1 = 5 gives t = ±√2."),
  num(S`$\|\vec u\|=7$ and $\|\vec v\|=3$. What is the smallest possible value of $\|\vec u-\vec v\|$?`, 4, "‖u − v‖ ≥ ‖u‖ − ‖v‖, with equality when they point the same way."),
  num(S`Find the first component of the unit vector pointing from $A(1,4,2)$ to $B(3,0,6)$ (3 decimals).`, 2 / 6, "AB = (2, −4, 4), length 6.", null, 0.001),
  num(S`All nine components of a vector in $\mathbb R^9$ equal $c\gt0$ and its length is 6. Find $c$.`, 2, "√9 · c = 6."),
  mc(S`When is $\|\vec u+\vec v\|=\|\vec u\|+\|\vec v\|$ (both nonzero)?`, "when v is a positive multiple of u", ["when u ⊥ v", "when ‖u‖ = ‖v‖", "never"], "Equality in the triangle inequality: same direction."),
  num(S`Find the point of the $x_1$-axis equidistant from $A(2,1,0)$ and $B(0,3,4)$; give its first component.`, -5, "(t − 2)² + 1 = t² + 9 + 16 gives −4t = 20."),
  tf(S`Every point $(0,0,z)$ is equidistant from $A(1,0,0)$ and $B(0,1,0)$.`, true, "Both distances are √(1 + z²)."),
  num(S`Find the perimeter of the triangle $A(1,0,0)$, $B(0,2,0)$, $C(0,0,2)$ (3 decimals).`, 2 * Math.sqrt(5) + Math.sqrt(8), "AB = AC = √5, BC = √8.", vdoc(scene3(3, { segs: [seg3([[1, 0, 0], [0, 2, 0], [0, 0, 2], [1, 0, 0]], { color: "blue", w: 2 })], points: [pt3([1, 0, 0], "A", { color: "black" }), pt3([0, 2, 0], "B", { color: "black" }), pt3([0, 0, 2], "C", { color: "black" })] })), 0.002),
  num(S`A room is $5\times4\times3$ m. Find the length of the longest straight rod that fits (3 decimals).`, Math.sqrt(50), "The space diagonal √(25 + 16 + 9).", vdoc(scene3(5.5, { segs: [seg3([[5, 0, 0], [5, 4, 0], [0, 4, 0]], { dash: true, w: 1.1 }), seg3([[5, 4, 0], [5, 4, 3]], { dash: true, w: 1.1 }), seg3([[0, 0, 3], [5, 0, 3], [5, 4, 3], [0, 4, 3], [0, 0, 3]], { dash: true, w: 1.1 }), seg3([[0, 0, 0], [5, 4, 3]], { color: "red", w: 2.4 })] })), 0.002),
  num(S`$\vec u=(3,4)$. Find $c\gt0$ such that $\|c\vec u-(0,5)\|=5$.`, 1.6, "(3c)² + (4c − 5)² = 25 gives 25c² − 40c = 0.", null, 0.001),
  num(S`In $\mathbb R^n$ every component of $\vec x$ equals $\frac1{\sqrt n}$. Find $\|\vec x\|$.`, 1, "n · (1/n) = 1."),
  mc(S`Students are recorded as (hours studied, mark): $\vec a=(5,72)$, $\vec b=(20,74)$, $\vec c=(6,60)$. Which is closest to $\vec a$?`, S`$\vec c$`, [S`$\vec b$`, "they are equally close", S`$\vec a$ itself is excluded, so none`], "d(a, b) = √229 ≈ 15.1, d(a, c) = √145 ≈ 12.0."),
  num(S`$\|\vec x\|=2$ and $\vec y=-3\vec x$. Find $d(\vec x,\vec y)$.`, 8, "x − y = 4x."),
  tf(S`If $\|\vec x\|=\|\vec y\|$ then $\vec x=\vec y$.`, false, "(1, 0) and (0, 1) have equal lengths."),
  num(S`Find the radius of the sphere $x_1^2+x_2^2+x_3^2-2x_1+4x_3=4$.`, 3, "(x₁ − 1)² + x₂² + (x₃ + 2)² = 9."),
  num(S`The points $P(1,1,1)$, $Q(3,1,1)$, $R(2,1,1+\sqrt3)$ form a triangle. Find its perimeter.`, 6, "Every side has length 2: equilateral.", vdoc(scene3(3.5, { segs: [seg3([[1, 1, 1], [3, 1, 1], [2, 1, 1 + Math.sqrt(3)], [1, 1, 1]], { color: "blue", w: 2 })], points: [pt3([1, 1, 1], "P", { color: "black" }), pt3([3, 1, 1], "Q", { color: "black" }), pt3([2, 1, 1 + Math.sqrt(3)], "R", { color: "black" })] }))),
  num(S`Find the distance between $(1,0,1,0,1,0)$ and $(0,1,0,1,0,1)$ in $\mathbb R^6$ (3 decimals).`, norm(sub([1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1])), "Every component differs by 1: √6.", null, 0.001),
  num(S`$\vec v$ has length 5 and points opposite to $(2,-1,2)$. Find its second component (3 decimals).`, 5 / 3, "−5 × (2, −1, 2)/3.", null, 0.001),
];

// 7.5 The Cross Product and Its Properties — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, merge } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const para = (a, b) => ({ polys: [{ pts: [p3(0, 0, 0), p3(...a), p3(...add3(a, b)), p3(...b)], fill: "#ede9fe", stroke: "gray" }] });
const easy = [
  mc(S`$\vec i\times\vec j=$`, S`$\vec k$`, [S`$-\vec k$`, S`$\vec 0$`, "1"], "Right-hand rule."),
  mc(S`$\vec j\times\vec i=$`, S`$-\vec k$`, [S`$\vec k$`, S`$\vec 0$`, S`$\vec i$`], "Reversing the order changes the sign."),
  num(S`Find the x-component of $[1,0,0]\times[0,1,0]$.`, 0, "The result is [0, 0, 1]."),
  num(S`Find the z-component of $[2,0,0]\times[0,3,0]$.`, 6, "2 × 3."),
  num(S`$|\vec a|=2$, $|\vec b|=5$, perpendicular. Find $|\vec a\times\vec b|$.`, 10, "sin 90° = 1."),
  num(S`$\vec a$ and $\vec b$ point the same way, $|\vec a|=2$, $|\vec b|=5$. Find $|\vec a\times\vec b|$.`, 0, "sin 0° = 0."),
  tf(S`$\vec a\times\vec b=\vec b\times\vec a$.`, false, "They are opposites."),
  tf(S`$\vec a\times\vec b$ is perpendicular to $\vec a$.`, true, "It is perpendicular to both a and b."),
  fill("The cross product of two collinear vectors is the ___ vector.", ["zero", "Zero", "null"], "sin 0° = sin 180° = 0."),
  num(S`$|\vec a|=4$, $|\vec b|=3$, angle $30^\circ$. Find $|\vec a\times\vec b|$.`, 6, "12 × ½."),
  num("Find the area of the parallelogram spanned by [3, 0, 0] and [0, 2, 0] (shown).", 6, "3 × 2.", vdoc(merge(V3, axes3(4.4), para([3, 0, 0], [0, 2, 0]), { arrows: [{ from: [0, 0], to: p3(3, 0, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 2, 0), vl: "b", color: "blue", off: -16 }] }))),
  num(S`Find the z-component of $[1,2,0]\times[2,1,0]$.`, -3, "1(1) − 2(2)."),
  mc("The cross product is defined for:", "vectors in three-space", ["vectors in two-space only", "scalars", "any number of vectors at once"], "It needs three components."),
  mc(S`$(2\vec a)\times\vec b=$`, S`$2(\vec a\times\vec b)$`, [S`$4(\vec a\times\vec b)$`, S`$\vec a\times\vec b$`, S`$-2(\vec a\times\vec b)$`], "Scalars factor out."),
  num(S`Find $|\vec i\times\vec j|$.`, 1, "|k| = 1."),
  num(S`Find the x-component of $[0,1,0]\times[0,0,1]$.`, 1, "j × k = i."),
  num(S`Find the y-component of $[0,0,1]\times[1,0,0]$.`, 1, "k × i = j."),
  num("Find the area of the triangle with vertices O, (4, 0, 0) and (0, 3, 0) (shown).", 6, "Half of 12.", vdoc(merge(V3, axes3(4.8), { polys: [{ pts: [p3(0, 0, 0), p3(4, 0, 0), p3(0, 3, 0)], fill: "#ede9fe", stroke: "violet" }] }))),
  mc(S`$\vec a\times\vec a=$`, S`$\vec 0$`, [S`$|\vec a|^2$`, S`$2\vec a$`, "1"], "The angle is 0°."),
  num(S`Two perpendicular unit vectors $\vec u$ and $\vec v$. Find $|\vec u\times\vec v|$.`, 1, "1 × 1 × 1."),
];
const medium = [
  num(S`Find the x-component of $[1,2,3]\times[0,1,1]$.`, -1, "2(1) − 3(1)."),
  num(S`Find the z-component of $[2,0,1]\times[1,1,0]$.`, 2, "2(1) − 0(1)."),
  num(S`Find $|[1,1,0]\times[0,1,1]|$ (2 decimals).`, 1.73, "[1, −1, 1].", null, 0.01),
  num(S`Find the area of the parallelogram spanned by $[2,1,0]$ and $[1,3,0]$.`, 5, "[0, 0, 5]."),
  num(S`Find the area of the triangle with vertices $O$, $(1,0,2)$, $(0,2,1)$ (2 decimals).`, 2.29, "Half of |[−4, −1, 2]|.", null, 0.01),
  num(S`$|\vec a\times\vec b|=10$, $|\vec a|=4$, $|\vec b|=5$, and the angle is acute. Find it (degrees).`, 30, "sin θ = ½."),
  tf(S`$(\vec a\times\vec b)\cdot\vec a=0$ for all vectors.`, true, "a × b is perpendicular to a."),
  num(S`Find $k$ so that $[k,2,4]\times[1,1,2]=\vec 0$.`, 2, "[k, 2, 4] = 2[1, 1, 2]."),
  num("Find the x-component of a × b for a = [0, 3, 0] and b = [0, 0, 2] (shown).", 6, "3(2) − 0(0).", vdoc(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(0, 3, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 0, 2), vl: "b", color: "blue", off: -16 }, { from: [0, 0], to: p3(3, 0, 0), color: "red", label: "a × b (scaled)", off: 16 }] }))),
  mc(S`$(\vec a+\vec b)\times\vec c=$`, S`$\vec a\times\vec c+\vec b\times\vec c$`, [S`$\vec c\times\vec a+\vec c\times\vec b$`, S`$\vec a\times\vec b\times\vec c$`, S`$\vec 0$`], "Distributive."),
  num(S`$|\vec a|=2$ and $|\vec b|=5$. Find $|\vec a\times\vec b|^2+(\vec a\cdot\vec b)^2$.`, 100, "|a|²|b|²."),
  num(S`Find the z-component of $[3,-1,2]\times[1,4,0]$.`, 13, "3(4) − (−1)(1)."),
  num(S`Find the y-component of $[3,-1,2]\times[1,4,0]$.`, 2, "2(1) − 3(0)."),
  num(S`Find the x-component of $[3,-1,2]\times[1,4,0]$.`, -8, "(−1)(0) − 2(4)."),
  tf(S`$(\vec a\times\vec b)\times\vec c=\vec a\times(\vec b\times\vec c)$ for all vectors.`, false, "The cross product is not associative."),
  num("Find the area of the parallelogram spanned by [3, 1, 0] and [1, 3, 0] (shown).", 8, "[0, 0, 9 − 1].", vdoc(merge(V3, axes3(4.6), para([3, 1, 0], [1, 3, 0]), { arrows: [{ from: [0, 0], to: p3(3, 1, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(1, 3, 0), vl: "b", color: "blue", off: -16 }] }))),
  num(S`Find the z-component of the unit vector perpendicular to $\vec i$ and $\vec j$ with a positive z-component.`, 1, "It is k."),
  num(S`Find $|[1,1,1]\times[1,1,1]|$.`, 0, "A vector crossed with itself."),
  mc(S`$|\vec a\times\vec b|$ equals:`, "the area of the parallelogram spanned by a and b", ["the volume of a box", "the length of a + b", "the dot product of a and b"], "|a||b| sin θ."),
  num(S`$|\vec a\times\vec b|=14$. Find the area of the triangle with sides $\vec a$ and $\vec b$ from one vertex.`, 7, "Half."),
];
export { easy as E, medium as M };

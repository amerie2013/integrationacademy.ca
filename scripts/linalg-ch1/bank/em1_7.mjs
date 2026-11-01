// 1.7 Projections and Distances — 20 easy + 20 medium questions (answers computed from the data)
import { mc, num, tf } from "./kit.mjs";
import { dot, norm, sub, sc, add, proj, tp, ord } from "./la.mjs";
import { vdoc, scene3, pt3, seg3, patch3, line3 } from "../vecfig.mjs";

const S = String.raw;
const pQ = (u, v, i) => num(S`Find the ${ord(i)} component of $\operatorname{proj}_{\vec v}\vec u$ for $\vec u=${tp(u)}$, $\vec v=${tp(v)}$ (3 decimals).`, proj(u, v)[i], "(u·v / v·v) v.", null, 0.001);
const kQ = (u, v) => num(S`$\operatorname{proj}_{\vec v}\vec u=k\vec v$ for $\vec u=${tp(u)}$, $\vec v=${tp(v)}$. Find $k$ (3 decimals).`, dot(u, v) / dot(v, v), "k = u·v / v·v.", null, 0.001);
const perpQ = (u, v, i) => num(S`Find the ${ord(i)} component of $\operatorname{perp}_{\vec v}\vec u$ for $\vec u=${tp(u)}$, $\vec v=${tp(v)}$ (3 decimals).`, sub(u, proj(u, v))[i], "u − proj_v u.", null, 0.001);
const eqn = (n, d) => n.map((c, i) => (c === 0 ? "" : `${c < 0 ? "-" : "+"}${Math.abs(c) === 1 ? "" : Math.abs(c)}x_${i + 1}`)).join("").replace(/^\+/, "") + `=${d}`;
const dPl = (q, n, d) => num(S`Find the distance from $${tp(q)}$ to the plane $${eqn(n, d)}$ (3 decimals).`, Math.abs(dot(n, q) - d) / norm(n), "|n · q − d| / ‖n‖.", null, 0.001);
const dLn = (q, p, m) => num(S`Find the distance from $Q${tp(q)}$ to the line $\vec x=${tp(p)}+t${tp(m)}$ (3 decimals).`, norm(sub(sub(q, p), proj(sub(q, p), m))), "‖perp_d PQ‖.", null, 0.002);
const footL = (q, p, m, i) => num(S`Find the ${ord(i)} component of the point of $\vec x=${tp(p)}+t${tp(m)}$ closest to $${tp(q)}$ (3 decimals).`, add(p, proj(sub(q, p), m))[i], "p + proj_d PQ.", null, 0.002);
const projPl = (x, n, i) => num(S`Project $\vec x=${tp(x)}$ onto the plane $${eqn(n, 0)}$. Find the ${ord(i)} component (3 decimals).`, sub(x, proj(x, n))[i], "x − proj_n x.", null, 0.002);

const easy = [
  pQ([3, 1], [1, 0], 0), pQ([2, 5], [1, 1], 1), pQ([1, 2, 3], [0, 0, 2], 2), pQ([4, -1, 1], [1, 1, 0], 0),
  kQ([3, 3, 0], [1, 2, 2]), kQ([5, 1], [2, -1]),
  perpQ([3, 4], [1, 0], 1), perpQ([2, 2, 1], [0, 1, 0], 0),
  dPl([1, 1, 1], [2, 1, 2], 2), dPl([0, 0, 0], [1, 2, 2], 9), dPl([3, -1, 4], [0, 0, 1], 1),
  tf(S`$\operatorname{proj}_{\vec v}\vec u$ is always a scalar multiple of $\vec v$.`, true, "It is (u·v / v·v) v."),
  tf(S`$\operatorname{proj}_{\vec v}\vec u=\operatorname{proj}_{\vec u}\vec v$ for all nonzero $\vec u,\vec v$.`, false, "One lies along v, the other along u."),
  tf(S`$\operatorname{perp}_{\vec v}\vec u$ is orthogonal to $\vec v$.`, true, "By construction its dot product with v is 0."),
  mc(S`$\operatorname{proj}_{\vec e_1}(5,-2,7)=$`, S`$(5,0,0)$`, [S`$(0,-2,7)$`, S`$(5,-2,7)$`, S`$(1,0,0)$`], "Keep the e₁ part."),
  num("In the figure, find the first component of the projection of u onto the x₁-axis direction v.", 4, "The shadow of (4, 3) on the horizontal axis.",
    vdoc({ view: { xmin: -0.5, xmax: 5, ymin: -0.5, ymax: 3.6 }, step: 1, arrows: [{ from: [0, 0], to: [4, 3], vl: "u", off: -16 }, { from: [0, 0], to: [2, 0], color: "red", vl: "v", off: 16 }], segs: [{ pts: [[4, 3], [4, 0]], color: "gray", dash: true }] })),
  num("In the figure the projection of u onto v is drawn in green. What is k if proj = kv?", 2, "u = (1, 3), v = (1, 1): u · v / v · v = 4/2.",
    vdoc({ view: { xmin: -0.5, xmax: 5, ymin: -0.5, ymax: 4 }, step: 1, arrows: [{ from: [0, 0], to: [1, 3], vl: "u", off: -16 }, { from: [0, 0], to: [1, 1], color: "red", vl: "v", off: 16 }, { from: [0, 0], to: [2, 2], color: "green", w: 2.4 }], segs: [{ pts: [[1, 3], [2, 2]], color: "gray", dash: true }] })),
  num(S`Find the distance from the origin to the plane $2x_1-x_2+2x_3=12$.`, 4, "12 / 3."),
  num(S`Find the distance from $(1,2,3)$ to the plane $x_3=0$.`, 3, "The normal part is (0, 0, 3)."),
  num(S`$\vec u\cdot\vec v=10$ and $\|\vec v\|=5$. Find the length of $\operatorname{proj}_{\vec v}\vec u$.`, 2, "|u·v| / ‖v‖."),
];

const medium = [
  dLn([1, 2, 3], [0, 0, 0], [1, 0, 0]), dLn([2, 0, 1], [1, 1, 1], [1, 1, 0]), dLn([0, 3, 3], [1, 0, 0], [0, 1, 0]),
  footL([4, 1, 0], [0, 0, 0], [1, 1, 0], 0), footL([1, 5, 2], [1, 0, 0], [0, 2, 1], 1),
  projPl([1, 2, 3], [1, 1, 1], 0), projPl([4, 0, 2], [0, 0, 1], 0), projPl([2, -1, 5], [1, 0, -1], 2),
  num(S`Find the distance between the planes $x_1+2x_2+2x_3=1$ and $x_1+2x_2+2x_3=7$.`, 2, "|7 − 1| / 3."),
  num(S`Find the distance between the planes $3x_1-4x_3=5$ and $6x_1-8x_3=0$.`, 1, "Rewrite the second as 3x₁ − 4x₃ = 0; |5 − 0|/5."),
  num(S`Find the third component of the point of $x_1+x_2+x_3=0$ closest to $(2,2,5)$.`, 2, "Subtract 3 · (1, 1, 1): (−1, −1, 2)."),
  num(S`Find the first component of the point of $2x_1+x_3=0$ closest to $(5,1,0)$.`, 1, "Subtract (10/5)(2, 0, 1) = (4, 0, 2)."),
  num(S`A force $(6,2,3)$ N moves an object along $(2,0,1)$ m. Find the work in joules.`, 15, "F · d = 12 + 0 + 3."),
  num(S`Find the scalar component $\frac{\vec u\cdot\vec v}{\|\vec v\|}$ of $\vec u=(3,1,5)$ along $\vec v=(2,2,1)$ (3 decimals).`, dot([3, 1, 5], [2, 2, 1]) / 3, "(6 + 2 + 5)/3.", null, 0.001),
  num(S`Find the scalar component of $\vec u=(1,-4)$ along $\vec v=(3,4)$.`, -2.6, "(3 − 16)/5.", null, 0.001),
  tf(S`$\operatorname{proj}_{\vec v}(\operatorname{proj}_{\vec v}\vec u)=\operatorname{proj}_{\vec v}\vec u$.`, true, "The projection already lies on the line of v."),
  num(S`Reflect $(4,2)$ in the line through the origin with direction $(1,1)$. Give the first component.`, 2, "2 proj − u = 2(3, 3) − (4, 2)."),
  mc(S`The angle between $\vec u$ and $\vec v$ is obtuse. Then $\operatorname{proj}_{\vec v}\vec u$:`, S`points opposite to $\vec v$`, [S`points the same way as $\vec v$`, S`is $\vec 0$`, S`is longer than $\vec u$`], "u·v < 0 gives a negative multiple of v."),
  num("Find the distance from Q to the x₁-axis (figure).", Math.sqrt(4 + 9), "Q = (3, 2, 3): the perpendicular part is (0, 2, 3).",
    vdoc(scene3(4, { segs: [seg3([[3, 2, 3], [3, 0, 0]], { color: "amber", dash: true, w: 2 })], points: [pt3([3, 2, 3], "Q(3, 2, 3)", { color: "blue" }), pt3([3, 0, 0], "", { color: "red" })] })), 0.002),
  num("The shaded plane through O has normal n = (0, 0, 1). Find the length of the projection of x = (2, 3, 4) onto the plane (3 decimals).", Math.sqrt(13), "The projection is (2, 3, 0).",
    vdoc(scene3(4.5, { polys: [patch3([0, 0, 0], [1, 0, 0], [0, 1, 0], 3, "#ede9fe", "violet", 0.6)], segs: [seg3([[2, 3, 4], [2, 3, 0]], { color: "amber", dash: true, w: 2 })], points: [pt3([2, 3, 4], "x", { color: "blue" }), pt3([2, 3, 0], "", { color: "green" })] })), 0.002),
];

export const E = easy;
export const M = medium;

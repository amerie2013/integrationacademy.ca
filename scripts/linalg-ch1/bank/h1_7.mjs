// 1.7 Projections and Distances — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { dot, norm, sub, sc, add, proj, cross } from "./la.mjs";
import { vdoc, scene3, pt3, seg3, line3, patch3 } from "../vecfig.mjs";

const S = String.raw;
const skew = (p, d, q, e) => { const n = cross(d, e); return Math.abs(dot(sub(q, p), n)) / norm(n); };
const reflPl = (x, n, d) => sub(x, sc((2 * (dot(n, x) - d)) / dot(n, n), n));
export const TOPIC = "1.7 Projections and Distances";
export const Q = [
  num(S`Find the distance between the skew lines $(0,0,0)+t(1,0,0)$ and $(0,1,2)+s(0,1,1)$ (3 decimals).`, skew([0, 0, 0], [1, 0, 0], [0, 1, 2], [0, 1, 1]), "n = d × e = (0, −1, 1); project PQ = (0, 1, 2) onto n.",
    vdoc(scene3(3.5, { segs: [line3([0, 0, 0], [1, 0, 0], -1, 3, "violet"), line3([0, 1, 2], [0, 1, 1], -2.5, 1.5, "blue")] })), 0.002),
  num(S`Find the distance between the skew lines $(1,0,0)+t(1,1,1)$ and $(0,0,1)+s(1,-1,0)$ (3 decimals).`, skew([1, 0, 0], [1, 1, 1], [0, 0, 1], [1, -1, 0]), "n = (1, 1, −2); PQ = (−1, 0, 1).", null, 0.002),
  num(S`Reflect $(3,1,4)$ in the plane $x_1+x_2+x_3=2$. Give the third component.`, reflPl([3, 1, 4], [1, 1, 1], 2)[2], "Move twice the normal part: (n·q − d)/n·n = 2."),
  num(S`Reflect $(0,5,1)$ in the plane $2x_2-x_3=1$. Give the second component.`, reflPl([0, 5, 1], [0, 2, -1], 1)[1], "(n·q − d)/n·n = 8/5; subtract 2 · 8/5 · (0, 2, −1).", null, 0.001),
  num(S`Find the first component of the point of $3x_1+4x_2=25$ closest to the origin.`, 3, "Along the normal: (25/25)(3, 4, 0)."),
  num(S`Find the third component of the point of $x_1-2x_2+2x_3=18$ closest to the origin.`, 4, "(18/9)(1, −2, 2)."),
  num(S`What is the minimum of $\|\vec u-t\vec v\|$ over all $t$, for $\vec u=(3,4,0)$ and $\vec v=(1,0,0)$?`, 4, "‖perp_v u‖ = ‖(0, 4, 0)‖."),
  num(S`For $\vec u=(2,1,2)$ and $\vec v=(1,1,0)$, which $t$ minimises $\|\vec u-t\vec v\|$?`, 1.5, "t = u·v / v·v = 3/2.", null, 0.001),
  num(S`The plane through $O$ is spanned by the orthogonal vectors $(1,0,1)$ and $(1,0,-1)$. Project $\vec x=(2,7,4)$ onto it and give the second component.`, add(proj([2, 7, 4], [1, 0, 1]), proj([2, 7, 4], [1, 0, -1]))[1], "The plane is x₂ = 0, so the projection is (2, 0, 4)."),
  num(S`$\vec u=(1,0,0)$ and $\vec v=(1,1,0)$ span the plane $x_3=0$. For $\vec x=(0,1,0)$, find the second component of $\operatorname{proj}_{\vec u}\vec x+\operatorname{proj}_{\vec v}\vec x$ (it is not $\vec x$ — why?).`, 0.5, "proj_u x = 0, proj_v x = ½(1, 1, 0): adding projections needs orthogonal directions.", null, 0.001),
  num(S`In $\mathbb R^4$, find the distance from $(1,1,1,1)$ to the line $\vec x=t(1,0,0,0)$ (3 decimals).`, Math.sqrt(3), "The perpendicular part is (0, 1, 1, 1).", null, 0.002),
  num(S`Find the distance from $(4,2,1)$ to the line through $A(1,0,0)$ and $B(3,2,0)$ (3 decimals).`, norm(sub(sub([4, 2, 1], [1, 0, 0]), proj(sub([4, 2, 1], [1, 0, 0]), [2, 2, 0]))), "PQ = (3, 2, 1), d = (2, 2, 0).",
    vdoc(scene3(4.5, { segs: [line3([1, 0, 0], [2, 2, 0], -0.6, 1.8, "violet"), seg3([[4, 2, 1], [3.5, 2.5, 0]], { color: "amber", dash: true, w: 2 })], points: [pt3([4, 2, 1], "Q", { color: "blue" }), pt3([1, 0, 0], "A", { color: "black" }), pt3([3, 2, 0], "B", { color: "black" })] })), 0.002),
  mc(S`Why is $\operatorname{proj}_{\vec v}\vec u$ the closest point of the line $t\vec v$ to $\vec u$?`, "‖u − tv‖² = ‖perp‖² + (c − t)²‖v‖², smallest when t = c", ["because proj is longer than u", "because u · v > 0", "because perp is parallel to v"], "Pythagoras on the orthogonal split."),
  mc(S`Which statement is true for every $\vec u$ and nonzero $\vec v$?`, S`$\|\vec u\|^2=\|\operatorname{proj}_{\vec v}\vec u\|^2+\|\operatorname{perp}_{\vec v}\vec u\|^2$`, [S`$\|\vec u\|=\|\operatorname{proj}_{\vec v}\vec u\|+\|\operatorname{perp}_{\vec v}\vec u\|$`, S`$\operatorname{proj}_{\vec v}\vec u\perp\vec v$`, S`$\|\operatorname{proj}_{\vec v}\vec u\|\ge\|\vec u\|$`], "The two parts are orthogonal: Pythagoras."),
  num(S`In triangle $A(0,0,0)$, $B(4,0,0)$, $C(1,3,0)$ the height from $C$ is $\|\operatorname{perp}_{\overrightarrow{AB}}\overrightarrow{AC}\|$. Find the area.`, 6, "Height 3, base 4.",
    vdoc({ view: { xmin: -0.5, xmax: 4.6, ymin: -0.5, ymax: 3.6 }, step: 1, polys: [{ pts: [[0, 0], [4, 0], [1, 3]], fill: "#dbeafe", stroke: "blue" }], segs: [{ pts: [[1, 3], [1, 0]], color: "amber", dash: true }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 4, y: 0, label: "B", dx: 6, dy: 14 }, { x: 1, y: 3, label: "C", dx: 6, dy: -6 }] })),
  num(S`A force $\vec F=(30,40)$ N pulls a sled that moves along $(1,0)$. Find the magnitude of the part of $\vec F$ perpendicular to the motion.`, 40, "perp of (30, 40) on (1, 0) is (0, 40).",
    vdoc({ view: { xmin: -0.5, xmax: 4, ymin: -0.5, ymax: 4.5 }, step: 1, arrows: [{ from: [0, 0], to: [3, 4], vl: "F", off: -16 }, { from: [0, 0], to: [3, 0], color: "green", label: "along", off: 14 }, { from: [3, 0], to: [3, 4], color: "amber", label: "perp", off: -18 }] })),
  num(S`The sun's rays are vertical. A rod from $(0,0,0)$ to $(3,4,5)$ casts a shadow on the floor $x_3=0$. Find the shadow's length.`, 5, "Projection onto the floor: (3, 4, 0)."),
  num(S`Find the distance from $(1,1,1)$ to the plane $\vec x=s(1,0,0)+t(0,1,1)$ through the origin (3 decimals).`, Math.abs(dot([1, 1, 1], cross([1, 0, 0], [0, 1, 1]))) / norm(cross([1, 0, 0], [0, 1, 1])), "n = (0, −1, 1); n · q = 0, so the point is ON the plane.", null, 0.002),
  tf(S`If $\operatorname{proj}_{\vec v}\vec u=\vec 0$ with $\vec u\ne\vec 0$, then $\vec u\perp\vec v$.`, true, "The projection is zero exactly when u · v = 0."),
  num(S`Find the distance from $(2,3,6)$ to the line $\vec x=t(2,3,6)$.`, 0, "The point is on the line (t = 1)."),
];

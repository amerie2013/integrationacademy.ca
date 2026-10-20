// 8.3 Properties of Planes — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, merge, patch3, tri3 } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
export const TOPIC = "8.3 Properties of Planes";
export const Q = [
  num("Find the distance from the origin to the plane through (1, 0, 0), (0, 2, 0) and (0, 0, 3) (2 decimals).", 0.86, "6x + 3y + 2z = 6: 6/7.", null, 0.01),
  mc("Which plane passes through (1, 1, 1) and is perpendicular to both x + y = 0 and y + z = 0?", S`$x-y+z=1$`, [S`$x+y+z=3$`, S`$x+y=2$`, S`$x-z=0$`], "Normal [1, 1, 0] × [0, 1, 1] = [1, −1, 1]."),
  num("Find the distance from P(3, 3, 3) to the plane x + y + z = 3 shown (2 decimals).", 3.46, "|9 − 3| / √3.", vdoc(merge(V3, axes3(4.6), { polys: [tri3(3, 3, 3)] }, { points: [pt(3, 3, 3, "P(3, 3, 3)")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6 } })), 0.01),
  num(S`The plane $x+2y-2z=D$ is 2 units from $(1,1,1)$. Find the larger possible $D$.`, 7, "|1 − D| / 3 = 2."),
  num(S`Find the angle between $3x+4z=0$ and $4x-3z=1$ (degrees).`, 90, "12 − 12 = 0."),
  mc(S`Which is a normal to $\vec r=[1,1,1]+s[1,2,0]+t[0,1,2]$?`, S`$[4,-2,1]$`, [S`$[1,2,0]$`, S`$[1,3,2]$`, S`$[2,-1,4]$`], "[1, 2, 0] × [0, 1, 2]."),
  num(S`The plane $\vec r=[1,1,1]+s[1,2,0]+t[0,1,2]$ is $4x-2y+z=D$. Find $D$.`, 3, "4 − 2 + 1."),
  tf("The distance from P to a plane equals |n · (P − Q)| / |n| for any point Q of the plane.", true, "It is the length of the projection onto n."),
  num("Find the distance between the parallel planes 2x + y + 2z = 3 and 2x + y + 2z = 12 (shown).", 3, "|12 − 3| / 3.", vdoc(merge(V3, axes3(4.6), { polys: [{ ...patch3([0.5, 0.5, 0.75], [1, 0, -1], [1, -2, 0], 0.9), op: 0.5 }, { ...patch3([2, 2, 3], [1, 0, -1], [1, -2, 0], 0.9, "#dcfce7", "green"), op: 0.5 }] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }))),
  num(S`Find $k$ so that $kx+2y+4z=1$ is parallel to $x+y+2z=5$.`, 2, "[k, 2, 4] = 2[1, 1, 2]."),
  num(S`The plane through $(2,1,3)$ parallel to the xz-plane is $y=D$. Find $D$.`, 1, "y = 1."),
  mc("Which plane contains (1, 0, 0) and (0, 1, 0) and is parallel to the z-axis?", S`$x+y=1$`, [S`$x+y+z=1$`, S`$z=0$`, S`$x-y=1$`], "Normal perpendicular to k and to [−1, 1, 0].", vdoc(merge(V3, axes3(4.4), { polys: [patch3([0.5, 0.5, 1.6], [1, -1, 0], [0, 0, 1], 1.5)] }, { points: [pt(1, 0, 0, "(1, 0, 0)", -70, 14), pt(0, 1, 0, "(0, 1, 0)", 6, 16)] }))),
  num(S`Find the angle between $x+y+z=1$ and $x-2y+z=0$ (degrees).`, 90, "1 − 2 + 1 = 0."),
  num(S`Find the distance from $(2,-3,4)$ to the xy-plane.`, 4, "|z|."),
  num("Find the distance from the origin to the plane 2x + 2y + z = 9 shown.", 3, "9/3.", vdoc(merge(V3, axes3(4.8), { polys: [tri3(4.5, 4.5, 9 * 0.5)] }, { texts: [{ x: 3.6, y: 4.6, t: "intercepts 4.5, 4.5, 9 (scaled)", color: "gray" }] }))),
  tf(S`Planes with normals $[1,2,3]$ and $[3,2,1]$ are parallel.`, false, "The normals are not multiples."),
  num("How many planes pass through a given point perpendicular to a given line?", 1, "The line's direction is the normal."),
  num(S`Find $D$ so that $x-y+z=D$ contains the line $\vec r=[1,0,2]+t[1,1,0]$.`, 3, "The direction is perpendicular to the normal; substitute (1, 0, 2)."),
  mc("The angle between two planes equals:", "the acute angle between their normals", ["the angle between their intercepts", "always 90°", "the angle between one normal and the other plane"], "cos θ = |n₁ · n₂| / (|n₁||n₂|)."),
  num(S`Find the distance between the planes $3x-4y=10$ and $3x-4y=-5$.`, 3, "|10 − (−5)| / 5."),
];

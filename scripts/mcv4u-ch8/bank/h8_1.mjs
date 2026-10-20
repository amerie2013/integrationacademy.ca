// 8.1 Equations of Lines in Two-Space and Three-Space — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3 } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const L2 = (p, m, t0, t1, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });
export const TOPIC = "8.1 Equations of Lines in Two-Space and Three-Space";
export const Q = [
  num(S`Find the acute angle between $5x-y=1$ and $2x+3y=4$ (degrees, 2 decimals).`, 67.62, "Normals [5, −1] and [2, 3]: cos θ = 7/√338.", null, 0.01),
  num(S`Find the distance from $(-1,2)$ to $5x+12y=6$.`, 1, "|−5 + 24 − 6| / 13."),
  num(S`A line through $(2,1,-1)$ is perpendicular to both $[1,2,0]$ and $[0,1,3]$, with direction their cross product. Find the x-coordinate of its point with $t=1$.`, 8, "[1, 2, 0] × [0, 1, 3] = [6, −3, 1]."),
  num("The line through (1, 1) perpendicular to x + 2y = 4 (shown) has equation 2x − y + C = 0. Find C.", -1, "Its direction is the normal [1, 2].", vdoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 4 }, step: 1, segs: [{ pts: [[-1, 2.5], [4, 0]], color: "blue", w: 2.4 }, L2([1, 1], [1, 2], -0.9, 1.4)], points: [{ x: 1, y: 1, label: "(1, 1)", dx: 8, dy: 12 }] })),
  num(S`Find $k$ so that $\vec r=[1,k]+t[1,2]$ and $2x-y=0$ are the same line.`, 2, "(1, k) must satisfy 2x − y = 0."),
  tf(S`Lines with directions $[1,2,3]$ and $[-2,1,0]$ are perpendicular.`, true, "−2 + 2 + 0 = 0."),
  num(S`Find the angle between a line with direction $[2,-1,2]$ and the z-axis (degrees, 2 decimals).`, 48.19, "cos γ = 2/3.", null, 0.01),
  num(S`Find the x-coordinate of the foot of the perpendicular from $(5,0)$ to the line $y=x$.`, 2.5, "Project [5, 0] onto [1, 1].", vdoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 4.5 }, step: 1, segs: [L2([0, 0], [1, 1], -0.8, 4.3), { pts: [[5, 0], [2.5, 2.5]], color: "red", dash: true, w: 2 }], points: [{ x: 5, y: 0, label: "(5, 0)", dx: -20, dy: 18 }, { x: 2.5, y: 2.5, label: "foot", dx: -36, dy: -6 }] }), 0.001),
  mc(S`The line $\vec r=[1,2,3]+t[0,0,1]$ is:`, "parallel to the z-axis", ["parallel to the x-axis", "the z-axis itself", "a plane"], "Only z changes."),
  num(S`Find the area of the triangle formed by $3x+4y=12$ and the coordinate axes.`, 6, "Intercepts 4 and 3."),
  num("Lines through the origin with directions [3, 1] and [−1, 3] are shown. Find the angle between them (degrees).", 90, "−3 + 3 = 0.", vdoc({ view: { xmin: -3, xmax: 4, ymin: -1.5, ymax: 4 }, step: 1, segs: [L2([0, 0], [3, 1], -0.4, 1.2), L2([0, 0], [-1, 3], -0.4, 1.2, "blue")] })),
  num(S`On $\vec r=t[1,2,2]$, find the z-coordinate of the point 6 units from the origin with $t\gt0$.`, 4, "3t = 6."),
  num(S`The line $x=1+2t$, $y=3-t$ passes through $(k,0)$. Find $k$.`, 7, "t = 3."),
  tf("Two lines in two-space with normals [2, 3] and [4, 6] are parallel or coincident.", true, "Parallel normals mean parallel directions."),
  mc("Which pair of planes has the line through (1, 2, 3) with direction [1, 0, 0] as its intersection?", S`$y=2$ and $z=3$`, [S`$x=1$ and $y=2$`, S`$x=1$ and $z=3$`, S`$x+y+z=6$ only`], "y and z never change."),
  num("The line r = [1, 2, 4] + t[1, 1, −2] (shown) crosses the xy-plane. Find the y-coordinate there.", 4, "z = 0 at t = 2.", vdoc(merge(V3, axes3(4.8), { segs: [line3([1, 2, 4], [1, 1, -2], -0.3, 2.4, "violet", 2.8)] }, { points: [{ x: p3(3, 4, 0)[0], y: p3(3, 4, 0)[1], label: "?", dx: 8, dy: 12 }] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.2 } }))),
  num("Reflect the point (1, 3) in the line y = x. Find the x-coordinate of the image.", 3, "Swap the coordinates."),
  num(S`Find the slope of a line perpendicular to $\vec r=t[2,5]$.`, -0.4, "Negative reciprocal of 5/2.", null, 0.001),
  mc(S`A two-space line with direction $[0,1]$ is:`, "vertical", ["horizontal", "at 45°", "the x-axis"], "No horizontal change."),
  num(S`Find the distance from $(1,1,1)$ to the x-axis (2 decimals).`, 1.41, "√(1² + 1²).", null, 0.01),
];

// 8.4 Intersections of Lines in Two-Space and Three-Space — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3 } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const L2 = (p, m, t0, t1, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });
export const TOPIC = "8.4 Intersections of Lines in Two-Space and Three-Space";
export const Q = [
  num(S`Find the distance between the skew lines $\vec r=[1,1,0]+s[1,0,1]$ and $\vec r=[0,0,3]+t[0,1,-1]$ (2 decimals).`, 1.73, "n = [−1, 1, 1]; |[−1, −1, 3] · n| / √3 = 3/√3.", null, 0.01),
  num(S`Find $k$ so that $\vec r=[1,0,0]+s[1,1,1]$ and $\vec r=[0,1,k]+t[1,0,1]$ intersect.`, -1, "y: s = 1; x: t = 2; z: 1 = k + 2."),
  num("The lines r = s[2, 1, 0] and r = [1, 3, 0] + t[1, −2, 0] (shown, in the xy-plane) meet. Find the x-coordinate.", 2, "s = 1, t = 1: (2, 1, 0).", vdoc(merge(V3, axes3(4.4), { segs: [line3([0, 0, 0], [2, 1, 0], -0.4, 1.8, "violet", 2.8), line3([1, 3, 0], [1, -2, 0], -0.5, 2, "blue", 2.8)] }))),
  mc(S`The lines $\vec r=[1,2]+s[3,4]$ and $4x-3y=2$ are:`, "parallel", ["perpendicular", "coincident", "intersecting at one point"], "The second has normal [4, −3], which is perpendicular to [3, 4]; (1, 2) gives 4 − 6 ≠ 2."),
  num(S`Find the distance from $(2,3)$ to the line through the origin with direction $[1,1]$ (2 decimals).`, 0.71, "|2 − 3| / √2.", null, 0.01),
  tf("Skew lines can have perpendicular directions.", true, "For example the x-axis and a raised line parallel to the y-axis."),
  num("Find the shortest distance between the z-axis and the line x = 2, z = 5 (which runs parallel to the y-axis).", 2, "The common perpendicular runs along x."),
  num(S`$\vec r=[1,2,3]+s[2,-1,1]$ meets $\vec r=[3,1,4]+t[1,1,0]$. Find the x-coordinate of the point.`, 3, "z: s = 1; then t = 0: (3, 1, 4)."),
  mc(S`$\vec r=s[1,1,0]$ and $\vec r=[1,1,1]+t[1,1,0]$ are:`, "parallel and distinct", ["coincident", "skew", "intersecting"], "Same direction; (1, 1, 1) is not on the first line."),
  num(S`Find the distance between $\vec r=s[1,1,0]$ and $\vec r=[1,1,1]+t[1,1,0]$.`, 1, "|[1, 1, 1] × [1, 1, 0]| / |[1, 1, 0]| = √2/√2."),
  num("Find the angle between the lines y = 2x and y = −x/2 shown (degrees).", 90, "Slopes 2 and −1/2.", vdoc({ view: { xmin: -3, xmax: 3, ymin: -3, ymax: 3 }, step: 1, segs: [L2([0, 0], [1, 2], -1.4, 1.4), L2([0, 0], [2, -1], -1.4, 1.4, "blue")] })),
  num(S`For the lines $\vec r=[1,2,3]+s[2,-1,1]$ and $\vec r=[3,1,4]+t[1,1,0]$, find $s$ at the intersection.`, 1, "From the z equation."),
  tf(S`If $\vec m_1\times\vec m_2=\vec 0$, the lines are parallel or coincident.`, true, "The directions are parallel."),
  num(S`Find $a$ so that $\vec r=[a,0,0]+s[0,1,0]$ meets $\vec r=t[1,1,1]$.`, 0, "z: t = 0, so x: a = 0."),
  num(S`Find the distance between $\vec r=s[1,1,0]$ and $\vec r=[0,0,5]+t[1,-1,0]$.`, 5, "Both lie in horizontal planes 5 apart."),
  mc("For skew lines, the vector m₁ × m₂ (figure) gives:", "the direction of the common perpendicular", ["the point where they meet", "the angle between them directly", "a direction parallel to both lines"], "It is perpendicular to both directions.", vdoc(merge(V3, axes3(4.6), { segs: [line3([-1, 1, 0], [1, 0, 0], -2.5, 4.5, "violet", 2.8), line3([1, -1, 2], [0, 1, 0], -2, 4.5, "blue", 2.8), { pts: [p3(1, 1, 0), p3(1, 1, 2)], color: "red", dash: true, w: 2 }] }))),
  num(S`Find the angle between lines with directions $[1,1,0]$ and $[1,1,\sqrt2]$ (degrees).`, 45, "cos θ = 2/(√2 × 2)."),
  num(S`Find the y-coordinate where $x+2y=7$ meets $3x-y=0$.`, 3, "y = 3x, so 7x = 7."),
  mc(S`Two-space lines with normals $[1,2]$ and $[2,-1]$ are:`, "perpendicular", ["parallel", "coincident", "skew"], "2 − 2 = 0."),
  num("Find the distance from the origin to the line r = [1, 1, 0] + t[1, −1, 0] shown (2 decimals).", 1.41, "The closest point is (1, 1, 0).", vdoc(merge(V3, axes3(4.4), { segs: [line3([1, 1, 0], [1, -1, 0], -2.2, 2.2, "violet", 2.8), { pts: [p3(0, 0, 0), p3(1, 1, 0)], color: "red", dash: true, w: 2 }] })), 0.01),
];

// 8.4 Intersections of Lines in Two-Space and Three-Space — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3 } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const L2 = (p, m, t0, t1, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });
const easy = [
  num(S`Find the x-coordinate where $y=2x$ meets $y=6$.`, 3, "2x = 6."),
  num(S`Find the y-coordinate where $x=1$ meets $y=x+4$.`, 5, "1 + 4."),
  mc(S`The lines $y=3x+1$ and $y=3x-2$ are:`, "parallel", ["coincident", "perpendicular", "intersecting at one point"], "Same slope, different intercepts."),
  tf("Skew lines can occur in two-space.", false, "Non-parallel lines in a plane always meet."),
  mc("How many points do two coincident lines share?", "infinitely many", ["none", "one", "two"], "They are the same line."),
  num(S`Find the x-coordinate where $y=x$ meets $y=-x+8$.`, 4, "2x = 8."),
  mc(S`Two lines in two-space with directions $[1,2]$ and $[2,1]$:`, "meet at exactly one point", ["are parallel", "are skew", "coincide"], "The directions are not parallel."),
  tf("Two lines in three-space that are not parallel always intersect.", false, "They may be skew."),
  fill("Lines in three-space that are not parallel and never meet are called ___.", ["skew", "Skew"], "Only possible in three-space."),
  num(S`For which $t$ does $\vec r=t[1,1]$ meet $x=5$?`, 5, "x = t."),
  num("The two lines shown meet at one point. Find its y-coordinate.", 1, "They cross at (2, 1).", vdoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 4 }, step: 1, segs: [L2([2, 1], [1, 1], -2.5, 2.2), L2([2, 1], [1, -1], -2.5, 2.5, "blue")] })),
  num("How many points do two distinct parallel lines share?", 0, "They never meet."),
  mc("To find where two lines meet using vector equations, you should:", "set the coordinates equal, using a different parameter for each line", ["use the same parameter for both lines", "add the direction vectors", "take the cross product of the points"], "Each line has its own parameter."),
  tf(S`Lines with directions $[1,2,3]$ and $[3,6,9]$ are parallel or coincident.`, true, "The directions are multiples."),
  num(S`$\vec r=s[1,0,0]$ meets $\vec r=[4,1,0]+t[0,1,0]$. Find $s$.`, 4, "y: t = −1; x: s = 4."),
  num(S`Find the angle between lines with directions $[1,0,0]$ and $[0,1,0]$ (degrees).`, 90, "Perpendicular."),
  mc(S`The lines $x+y=2$ and $2x+2y=4$ are:`, "coincident", ["parallel and distinct", "perpendicular", "skew"], "One equation is twice the other."),
  tf("The two lines shown (one along x, one along y two units higher) meet.", false, "They are skew.", vdoc(merge(V3, axes3(4.6), { segs: [line3([-1, 1, 0], [1, 0, 0], -2.5, 4.5, "violet", 2.8), line3([1, -1, 2], [0, 1, 0], -2, 4.5, "blue", 2.8)] }))),
  num(S`Find the y-coordinate where $2x+y=5$ meets $x-y=1$.`, 1, "x = 2, y = 1."),
  num(S`Find the angle between lines with directions $[1,1]$ and $[1,0]$ (degrees).`, 45, "cos θ = 1/√2."),
];
const medium = [
  num(S`Find the x-coordinate where $\vec r=[1,0]+s[1,1]$ meets $\vec r=[0,3]+t[1,-1]$.`, 2, "s = 1: the point (2, 1)."),
  num(S`$\vec r=s[1,1,1]$ meets $\vec r=[2,0,2]+t[0,1,0]$. Find the y-coordinate there.`, 2, "s = 2, so the point is (2, 2, 2)."),
  mc(S`$\vec r=s[1,0,0]$ and $\vec r=[0,1,1]+t[0,1,0]$ are:`, "skew", ["intersecting", "parallel", "coincident"], "Not parallel; z is 0 on one and 1 on the other."),
  num(S`Find the angle between lines with directions $[1,2,2]$ and $[2,-2,1]$ (degrees).`, 90, "2 − 4 + 2 = 0."),
  num(S`Find the distance between the skew lines $\vec r=s[1,0,0]$ and $\vec r=[0,2,3]+t[0,1,0]$.`, 3, "n = [0, 0, 1]; |[0, 2, 3] · n|."),
  num(S`Find $k$ so that $\vec r=s[1,1,1]$ and $\vec r=[1,0,k]+t[0,1,0]$ intersect.`, 1, "x: s = 1; z: 1 = k."),
  tf(S`$\vec r=[1,1]+s[2,4]$ and $y=2x-1$ are the same line.`, true, "Slope 2 and (1, 1) satisfies y = 2x − 1."),
  num(S`Find the distance between the parallel lines $y=x$ and $y=x+4$ (2 decimals).`, 2.83, "4/√2.", null, 0.01),
  num("The two lines shown, r = s[1, 1, 1] and r = [1, 0, 1] + t[0, 1, 0], meet. Find the z-coordinate of the meeting point.", 1, "x: s = 1; the point is (1, 1, 1).", vdoc(merge(V3, axes3(4.6), { segs: [line3([0, 0, 0], [1, 1, 1], -0.6, 2.4, "violet", 2.8), line3([1, 0, 1], [0, 1, 0], -1.5, 3.5, "blue", 2.8)] }, { points: [{ x: p3(1, 1, 1)[0], y: p3(1, 1, 1)[1], label: "?", dx: 8, dy: -6 }] }))),
  mc(S`$\vec r=[1,2,3]+s[1,0,1]$ and $\vec r=[2,2,4]+t[-2,0,-2]$ are:`, "coincident", ["parallel and distinct", "skew", "perpendicular"], "Parallel directions; (2, 2, 4) is on the first line (s = 1)."),
  num(S`Find the x-coordinate where $3x-y=1$ meets $x+y=3$.`, 1, "4x = 4."),
  num(S`Find the angle between lines with directions $[3,4,0]$ and $[4,3,0]$ (degrees, 2 decimals).`, 16.26, "cos θ = 24/25.", null, 0.01),
  num(S`$\vec r=[1,2,3]+t[1,1,1]$ meets $\vec r=[3,0,1]+s[0,1,1]$. Find $t$.`, 2, "x: 1 + t = 3; then check y and z with s = 4."),
  tf("Two lines with perpendicular directions always intersect.", false, "In three-space they may be skew."),
  num(S`Find the distance between the parallel lines $\vec r=t[0,0,1]$ and $\vec r=[3,4,0]+s[0,0,2]$.`, 5, "Both vertical: √(9 + 16)."),
  num("Find the distance between the parallel lines y = 2x and y = 2x − 5 shown (2 decimals).", 2.24, "5/√5.", vdoc({ view: { xmin: -1, xmax: 4, ymin: -5, ymax: 5 }, step: 1, segs: [L2([0, 0], [1, 2], -0.5, 2.5), L2([0, -5], [1, 2], 0, 4.5, "blue")] }), 0.01),
  mc(S`$\vec r=s[1,0,0]$ and $\vec r=[0,0,1]+t[0,1,0]$ are:`, "skew", ["intersecting", "parallel", "coincident"], "Not parallel, and z differs."),
  num(S`Find the acute angle between $x-y=0$ and $x=0$ (degrees).`, 45, "Directions [1, 1] and [0, 1]."),
  num(S`$\vec r=[1,0,0]+s[0,1,0]$ meets $\vec r=[0,2,0]+t[1,0,0]$. Find the y-coordinate there.`, 2, "The point is (1, 2, 0)."),
  tf("The distance between two intersecting lines is 0.", true, "They share a point."),
];
export { easy as E, medium as M };

// 8.1 Equations of Lines in Two-Space and Three-Space — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, p3, axes3, merge, line3 } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const L2 = (p, m, t0, t1, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });
const easy = [
  num(S`Find the y-coordinate of the point with $t=2$ on $\vec r=[1,3]+t[2,-1]$.`, 1, "3 − 2."),
  num(S`Find the x-coordinate of the point with $t=-1$ on $\vec r=[4,0]+t[3,5]$.`, 1, "4 − 3."),
  num(S`A line has direction $[2,8]$. Find its slope.`, 4, "8 ÷ 2."),
  mc("Which is a direction vector of the line through (1, 2) and (4, 8)?", S`$[1,2]$`, [S`$[2,1]$`, S`$[4,8]$ only`, S`$[5,10]$ only`], "[3, 6] or any multiple, such as [1, 2]."),
  tf("Every line has exactly one vector equation.", false, "Any point and any multiple of the direction work."),
  num(S`Find the z-coordinate of the point with $t=3$ on $\vec r=[0,1,2]+t[1,1,-1]$.`, -1, "2 − 3."),
  mc(S`Which is a normal to the line $2x-5y+1=0$?`, S`$[2,-5]$`, [S`$[5,2]$`, S`$[-5,2]$`, S`$[2,5]$`], "Coefficients of x and y."),
  num(S`For which $t$ does $\vec r=[1,-1]+t[2,2]$ pass through $(7,5)$?`, 3, "1 + 2t = 7."),
  fill(S`In $\vec r=\vec r_0+t\vec m$, $\vec m$ is called the ___ vector.`, ["direction", "Direction"], "It is parallel to the line."),
  tf("A line in three-space has a scalar equation of the form Ax + By + Cz + D = 0.", false, "That equation describes a plane."),
  num("The line shown passes through (0, 1) with direction [1, 2]. Find its slope.", 2, "Rise 2 for run 1.", vdoc({ view: { xmin: -2, xmax: 3, ymin: -2, ymax: 5 }, step: 1, segs: [L2([0, 1], [1, 2], -1.3, 1.8)], arrows: [{ from: [0, 1], to: [1, 3], vl: "m", color: "green", off: 16 }] })),
  num(S`The line $3x+y+C=0$ passes through $(1,2)$. Find $C$.`, -5, "3 + 2 + C = 0."),
  mc(S`Which are parametric equations of $\vec r=[2,5]+t[1,-3]$?`, S`$x=2+t,\ y=5-3t$`, [S`$x=1+2t,\ y=-3+5t$`, S`$x=2t,\ y=5-3t$`, S`$x=2-t,\ y=5+3t$`], "Point plus t times direction."),
  num(S`Find the x-intercept of $2x+4y-8=0$.`, 4, "y = 0."),
  tf(S`$[2,4]$ and $[-1,-2]$ can be direction vectors of the same line.`, true, "They are parallel."),
  num(S`On $\vec r=t[3,4]$, find the y-coordinate when $x=6$.`, 8, "t = 2."),
  num("How many distinct points determine a line?", 2, "Two points give a direction."),
  num("The line shown runs from the origin with direction [1, 2, 2]. How far from the origin is its point with t = 1?", 3, "|[1, 2, 2]|.", vdoc(merge(V3, axes3(4.6), { segs: [line3([0, 0, 0], [1, 2, 2], -0.4, 1.6, "violet", 2.8)] }, { points: [{ x: p3(1, 2, 2)[0], y: p3(1, 2, 2)[1], label: "t = 1" }] }))),
  mc(S`Which point lies on $\vec r=[1,1]+t[1,1]$?`, "(3, 3)", ["(3, 4)", "(0, 2)", "(2, 1)"], "t = 2."),
  num(S`The line $x=1+t$, $y=t$, $z=2-t$ crosses the xy-plane. Find the x-coordinate there.`, 3, "z = 0 gives t = 2."),
];
const medium = [
  num(S`The line through $(1,-2)$ with direction $[3,1]$ has scalar equation $x-3y+C=0$. Find $C$.`, -7, "1 + 6 + C = 0."),
  num(S`Find the slope of $4x-3y=12$ (2 decimals).`, 1.33, "Direction [3, 4].", null, 0.005),
  num(S`On the line through $(1,0,2)$ and $(3,4,-2)$, find the y-coordinate of the midpoint.`, 2, "Average: (2, 2, 0)."),
  tf(S`$(5,7,-1)$ lies on $\vec r=[1,1,1]+t[2,3,-1]$.`, true, "t = 2 works in every coordinate."),
  num(S`The line $x=3-t$, $y=2+2t$, $z=4t$ meets the yz-plane. Find the z-coordinate there.`, 12, "x = 0 gives t = 3."),
  num(S`Find the angle between lines with directions $[1,0]$ and $[1,1]$ (degrees).`, 45, "cos θ = 1/√2."),
  num(S`Find the acute angle between $3x-y=2$ and $x+2y=1$ (degrees, 2 decimals).`, 81.87, "Normals [3, −1] and [1, 2].", null, 0.01),
  mc(S`The lines $\vec r=t[2,1]$ and $x-2y=5$ are:`, "parallel", ["perpendicular", "coincident", "intersecting at the origin"], "Normal [1, −2] is perpendicular to [2, 1], and (0, 0) is not on x − 2y = 5."),
  num(S`Find the distance from the origin to $3x+4y=15$.`, 3, "15 ÷ 5."),
  num("Find the x-intercept of the line r = [−2, 3] + t[4, −2] (shown).", 4, "y = 0 at t = 1.5.", vdoc({ view: { xmin: -3, xmax: 6, ymin: -2, ymax: 4 }, step: 1, segs: [L2([-2, 3], [4, -2], -0.2, 2)] })),
  num(S`Find $k$ so that $[k,6]$ is parallel to $[2,3]$.`, 4, "[k, 6] = 2[2, 3]."),
  mc("Which equations describe the line through (2, −1, 5) parallel to the z-axis?", S`$x=2,\ y=-1,\ z=5+t$`, [S`$x=2+t,\ y=-1,\ z=5$`, S`$x=2t,\ y=-t,\ z=5t$`, S`$z=5$`], "Only z changes."),
  num(S`Find the y-intercept of $\vec r=[1,5]+t[1,2]$.`, 3, "x = 0 at t = −1."),
  tf(S`$\vec r=t[1,2]$ and $\vec r=[2,4]+s[3,6]$ describe the same line.`, true, "Parallel directions and (2, 4) is on the first line."),
  num(S`Find the angle a line with direction $[1,1,1]$ makes with the x-axis (degrees, 2 decimals).`, 54.74, "cos α = 1/√3.", null, 0.01),
  num(S`On $\vec r=[2,-1,3]+t[1,2,-2]$, for which $t$ is $z=-1$?`, 2, "3 − 2t = −1."),
  mc(S`Which is a normal to the line $\vec r=[3,1]+t[5,2]$?`, S`$[2,-5]$`, [S`$[5,2]$`, S`$[3,1]$`, S`$[-5,-2]$`], "Perpendicular to the direction."),
  mc("The line through (1, 2, 0) and (1, 2, 4) (shown) has direction:", S`$[0,0,1]$`, [S`$[1,2,0]$`, S`$[1,2,4]$`, S`$[1,0,0]$`], "Only z changes.", vdoc(merge(V3, axes3(4.6), { segs: [line3([1, 2, 0], [0, 0, 1], -0.5, 4.8, "violet", 2.8)] }, { points: [{ x: p3(1, 2, 0)[0], y: p3(1, 2, 0)[1], label: "(1, 2, 0)", dx: 8, dy: 12 }, { x: p3(1, 2, 4)[0], y: p3(1, 2, 4)[1], label: "(1, 2, 4)" }] }))),
  num(S`Find the distance between the points with $t=0$ and $t=2$ on $\vec r=[1,1,1]+t[2,1,2]$.`, 6, "2|[2, 1, 2]|."),
  num(S`A line through $(1,4)$ is parallel to $2x-y+3=0$ and has equation $2x-y+C=0$. Find $C$.`, 2, "2 − 4 + C = 0."),
];
export { easy as E, medium as M };

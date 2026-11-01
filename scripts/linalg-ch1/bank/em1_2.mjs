// 1.2 Lines and Planes in Rⁿ — 20 easy + 20 medium questions (answers computed from the data)
import { mc, num, tf } from "./kit.mjs";
import { add, sub, sc, tp, ord } from "./la.mjs";
import { vdoc, scene3, pt3, line3, patch3 } from "../vecfig.mjs";

const S = String.raw;
const at = (p, d, t, i) => num(S`Find the ${ord(i)} component of the point with $t=${t}$ on $\vec x=${tp(p)}+t${tp(d)}$.`, add(p, sc(t, d))[i], "Add t times the direction to the point.");
const dirQ = (a, b, i) => num(S`The line through $${tp(a)}$ and $${tp(b)}$ has direction $\vec d=\vec b-\vec a$. Find the ${ord(i)} component of $\vec d$.`, sub(b, a)[i], "Subtract the first point from the second.");
const onQ = (p, d, x) => { const i = d.findIndex((c) => c !== 0), t = (x[i] - p[i]) / d[i], ok = p.every((c, k) => Math.abs(c + t * d[k] - x[k]) < 1e-9);
  return tf(S`$${tp(x)}$ lies on $\vec x=${tp(p)}+t${tp(d)}$.`, ok, ok ? `t = ${t} works in every component.` : `t = ${t} from one component fails in another.`); };
const planeAt = (p, u, v, s, t, i) => num(S`Find the ${ord(i)} component of the point with $s=${s}$, $t=${t}$ on $\vec x=${tp(p)}+s${tp(u)}+t${tp(v)}$.`, add(p, add(sc(s, u), sc(t, v)))[i], "p + su + tv.");
const read2 = (p, d, i) => num(`The violet line passes through the marked point and the green arrow is a direction vector. What is the ${ord(i)} component of that direction vector?`, d[i], "Count grid steps from the tail to the tip of the arrow.",
  vdoc({ view: { xmin: -4, xmax: 5, ymin: -4, ymax: 5 }, step: 1, segs: [{ pts: [add(p, sc(-6, d)), add(p, sc(6, d))], color: "violet" }], arrows: [{ from: p, to: add(p, d), color: "green" }], points: [{ x: p[0], y: p[1] }] }));

const easy = [
  at([1, 0, -2], [3, 1, 4], 2, 2),
  at([5, -1, 0], [-2, 2, 1], 3, 0),
  at([0, 4, 1, -1], [1, -1, 0, 2], -2, 3),
  dirQ([2, 1, 5], [6, -1, 5], 0),
  dirQ([-1, 3, 0], [2, 3, -4], 2),
  onQ([1, 1, 0], [2, -1, 3], [5, -1, 6]),
  onQ([0, 2, 1], [1, 1, 1], [3, 5, 3]),
  onQ([4, 0, -1], [-1, 2, 0], [2, 4, -1]),
  mc(S`Which gives parametric equations of $\vec x=(2,-1,0)+t(1,3,-2)$?`, S`$x_1=2+t,\ x_2=-1+3t,\ x_3=-2t$`, [S`$x_1=1+2t,\ x_2=3-t,\ x_3=-2$`, S`$x_1=2t,\ x_2=-t,\ x_3=0$`, S`$x_1=2+t,\ x_2=-1+3t,\ x_3=-2$`], "Each component: point + t × direction."),
  mc(S`Which vector is a direction vector of $\vec x=(3,0)+t(-2,5)$?`, S`$(4,-10)$`, [S`$(3,0)$`, S`$(5,-2)$`, S`$(-2,-5)$`], "Any nonzero multiple of (−2, 5)."),
  planeAt([1, 0, 2], [1, 1, 0], [0, 2, -1], 2, 1, 1),
  planeAt([0, 0, 1], [3, 0, 1], [0, 1, 1], -1, 2, 2),
  tf(S`A direction vector of a line may be $\vec 0$.`, false, "Then every t gives the same point."),
  tf(S`The two direction vectors in a vector equation of a plane must not be parallel.`, true, "Parallel directions only sweep out a line."),
  num("How many parameters appear in a vector equation of a plane?", 2, "s and t."),
  num("How many parameters appear in a vector equation of a line?", 1, "Just t."),
  read2([-1, -2], [2, 3], 0),
  read2([1, 2], [3, -1], 1),
  mc(S`Which is a direction vector of the line $x_2=3x_1+1$ in $\mathbb R^2$?`, S`$(1,3)$`, [S`$(3,1)$`, S`$(0,1)$`, S`$(3,-1)$`], "One step right, three up."),
  tf(S`The line through $(1,2,3)$ and $(4,5,6)$ has direction $(3,3,3)$.`, true, "(4, 5, 6) − (1, 2, 3)."),
];

const meet = (p, d, i, c) => { const t = (c - p[i]) / d[i]; return t; };
const medium = [
  num(S`At what value of $t$ does $\vec x=(2,1,6)+t(1,0,-3)$ meet the plane $x_3=0$?`, meet([2, 1, 6], [1, 0, -3], 2, 0), "Set the third component to 0."),
  num(S`At what value of $t$ does $\vec x=(0,-4,3)+t(2,2,1)$ meet the plane $x_2=0$?`, meet([0, -4, 3], [2, 2, 1], 1, 0), "−4 + 2t = 0."),
  num(S`The line through $A(1,2,0)$ and $B(3,1,4)$ is $\vec x=\vec a+t(\vec b-\vec a)$. For which $t$ does it reach $(7,-1,12)$?`, 3, "1 + 2t = 7."),
  num(S`The line through $A(0,0,5)$ and $B(1,-2,3)$ is $\vec x=\vec a+t(\vec b-\vec a)$. For which $t$ does it reach $(-2,4,9)$?`, -2, "t = −2 in every component."),
  num(S`For which $k$ is $(7,k,-1)$ on $\vec x=(1,2,5)+t(2,1,-2)$?`, 5, "t = 3 from the first component."),
  num(S`For which $k$ is $(k,0,8)$ on $\vec x=(3,-3,2)+t(-1,1,2)$?`, 0, "t = 3 from the second (or third) component."),
  tf(S`$\vec x=(1,0,2)+t(2,-4,6)$ and $\vec x=(0,1,1)+s(-1,2,-3)$ are parallel.`, true, "(2, −4, 6) = −2(−1, 2, −3)."),
  tf(S`$\vec x=(1,1,1)+t(1,2,3)$ and $\vec x=(0,0,0)+s(2,3,4)$ are parallel.`, false, "(2, 3, 4) is not a multiple of (1, 2, 3)."),
  tf(S`$\vec x=(1,2,3)+t(1,1,0)$ and $\vec x=(3,4,3)+s(-2,-2,0)$ are the same line.`, true, "Parallel, and (3, 4, 3) is the point at t = 2."),
  tf(S`$(3,3,3)$ lies on the plane $\vec x=(1,0,1)+s(1,1,0)+t(0,1,1)$.`, false, "s = 2 from the first component and t = 2 from the third, but then the second is s + t = 4, not 3."),
  tf(S`$(2,2,2)$ lies on the plane $\vec x=(0,0,0)+s(1,0,1)+t(0,1,0)$.`, true, "s = 2, t = 2; third component s = 2 ✓."),
  mc(S`Classify $\vec x=(0,0,0)+t(1,0,0)$ and $\vec x=(0,1,1)+s(0,1,0)$.`, "skew", ["intersecting", "parallel", "the same line"], "Not parallel; t = 0 from x₁, then x₃: 0 = 1 is impossible."),
  mc(S`Classify $\vec x=(1,1,0)+t(1,0,1)$ and $\vec x=(3,1,2)+s(0,1,0)$.`, "intersecting", ["skew", "parallel", "the same line"], "t = 2, s = 0 gives (3, 1, 2) on both.",
    vdoc(scene3(4, { segs: [line3([1, 1, 0], [1, 0, 1], -0.8, 2.8, "violet"), line3([3, 1, 2], [0, 1, 0], -2, 2, "blue")] }))),
  mc(S`Classify $\vec x=(1,0,0)+t(2,2,2)$ and $\vec x=(0,1,0)+s(1,1,1)$.`, "parallel", ["intersecting", "skew", "the same line"], "Parallel directions; (0, 1, 0) is not on the first line."),
  mc(S`Which is a vector equation of $2x_1+x_2=4$?`, S`$\vec x=(2,0)+t(1,-2)$`, [S`$\vec x=(2,0)+t(2,1)$`, S`$\vec x=(0,2)+t(1,2)$`, S`$\vec x=(4,0)+t(1,-2)$`], "(2, 0) is on the line and the slope is −2."),
  num(S`On $\vec x=(1,0,-1,2)+t(0,2,1,-1)$ in $\mathbb R^4$, find the 4th component of the point whose 3rd component is 3.`, -2, "t = 4."),
  num(S`On $\vec x=(2,2,2,2)+t(1,-1,0,3)$ in $\mathbb R^4$, find the 1st component of the point whose 4th component is $-7$.`, -1, "t = −3."),
  num("The blue patch is part of the plane x = p + su + tv with p = (1, 1, 1), u = (1, 0, 0), v = (0, 1, 1). Which value of s gives the marked point (3, 2, 2)?", 2, "First component: 1 + s = 3.",
    vdoc(scene3(4, { polys: [patch3([1, 1, 1], [1, 0, 0], [0, 1, 1], 1.4, "#dbeafe", "blue", 0.7)], points: [pt3([3, 2, 2], "(3, 2, 2)", { color: "red" })] }))),
  num(S`$(4,1,5)=(1,1,0)+s(1,0,1)+t(1,0,2)$. Find $t$.`, 2, "s + t = 3 and s + 2t = 5."),
  num(S`$(0,5,4)=(2,1,0)+s(-1,2,0)+t(0,0,2)$. Find $s$.`, 2, "First: 2 − s = 0."),
];

export const E = easy;
export const M = medium;

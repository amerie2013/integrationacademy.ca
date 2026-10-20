// 7.1 Cartesian Vectors — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, pol } from "../vecfig.mjs";

const S = String.raw;
const easy = [
  num(S`Find $|[9,40]|$.`, 41, "√(81 + 1600)."),
  num(S`Find the x-component of $\overrightarrow{AB}$ for $A(2,3)$ and $B(7,1)$.`, 5, "7 − 2."),
  num(S`Find the y-component of $\overrightarrow{AB}$ for $A(2,3)$ and $B(7,1)$.`, -2, "1 − 3."),
  num(S`Find the x-component of $[3,-1]+[-2,4]$.`, 1, "3 + (−2)."),
  num(S`Find the y-component of $2[4,-3]$.`, -6, "2 × (−3)."),
  mc(S`$3\vec i-2\vec j=$`, S`$[3,-2]$`, [S`$[-2,3]$`, S`$[3,2]$`, S`$[1,0]$`], "Coefficients of i and j."),
  tf(S`$[2,3]$ and $(2,3)$ mean the same thing.`, false, "[2, 3] is a vector; (2, 3) is a point."),
  num(S`Find $|[-8,15]|$.`, 17, "√(64 + 225)."),
  fill(S`The unit vector along the positive x-axis is written ___.`, ["i", "\\vec i", "[1,0]", "[1, 0]"], "i = [1, 0]."),
  num(S`At what angle from the positive x-axis does $[0,4]$ point (degrees)?`, 90, "Straight up."),
  num("The vector shown goes from (−1, 2) to (5, 10). Find its magnitude.", 10, "Run 6, rise 8.", vdoc({ view: { xmin: -2, xmax: 6, ymin: 0, ymax: 11 }, step: 1, axes: false, arrows: [{ from: [-1, 2], to: [5, 10], vl: "v", off: -16 }], points: [{ x: -1, y: 2, label: "(−1, 2)", dx: 6, dy: 16 }, { x: 5, y: 10, label: "(5, 10)", dx: -50, dy: -4 }] })),
  num(S`Find the y-component of $[6,-2]-[1,3]$.`, -5, "−2 − 3."),
  num(S`Find the x-component of the unit vector in the direction of $[3,4]$.`, 0.6, "3/5.", null, 0.001),
  tf(S`$|[a,b]|=|[-a,-b]|$.`, true, "Squaring removes the signs."),
  num(S`At what angle from the positive x-axis does $[-4,0]$ point (degrees)?`, 180, "Straight left."),
  mc(S`Which vector is collinear with $[1,2]$?`, S`$[-3,-6]$`, [S`$[2,1]$`, S`$[1,-2]$`, S`$[3,5]$`], "−3 times [1, 2]."),
  num(S`Find $|[1,1]|$ (2 decimals).`, 1.41, "√2.", null, 0.01),
  num("The vector shown has magnitude 10 at 30° from the positive x-axis. Find its x-component (2 decimals).", 8.66, "10 cos 30°.", vdoc({ view: { xmin: -0.6, xmax: 9.6, ymin: -0.8, ymax: 5.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: pol(10, 30), vl: "v", label: "10", off: -16 }, { from: [0, 0], to: [8.66, 0], color: "blue", label: "?", off: 14 }], arcs: [{ at: [0, 0], r: 1.4, a: 0, b: 30, label: "30°" }] }), 0.01),
  num(S`Find $k$ if $[k,3]=[5,3]$.`, 5, "Equal components."),
  mc("Which vector has magnitude 2 and points straight up?", S`$[0,2]$`, [S`$[2,0]$`, S`$[0,-2]$`, S`$[1,1]$`], "No horizontal part."),
];
const medium = [
  num(S`Find $|\overrightarrow{AB}|$ for $A(-3,2)$ and $B(5,-4)$.`, 10, "[8, −6]."),
  num(S`At what angle from the positive x-axis does $[-6,6]$ point (degrees)?`, 135, "Quadrant II, reference 45°."),
  num("A vector has magnitude 15 at 210° from the positive x-axis. Find its x-component (2 decimals).", -12.99, "15 cos 210°.", null, 0.01),
  num("A vector has magnitude 15 at 210° from the positive x-axis. Find its y-component.", -7.5, "15 sin 210°.", null, 0.001),
  num(S`Find $k$ so that $[4,k]$ is parallel to $[6,-9]$.`, -6, "[4, k] = (2/3)[6, −9]."),
  num(S`Find the y-component of the unit vector in the direction of $[-5,12]$ (2 decimals).`, 0.92, "12/13.", null, 0.005),
  num(S`For $\vec u=[1,2]$ and $\vec v=[-3,1]$, find $|2\vec u-\vec v|$ (2 decimals).`, 5.83, "[5, 3].", null, 0.01),
  num("Find the x-coordinate of the midpoint of (−4, 7) and (10, −3).", 3, "(−4 + 10)/2."),
  tf(S`If $[x,4]=[3,y]$, then $x=3$ and $y=4$.`, true, "Equal vectors have equal components."),
  num(S`On the grid, $\vec u=[2,3]$ and $\vec v=[3,-1]$ (shown). Find $|\vec u+\vec v|$ (2 decimals).`, 5.39, "[5, 2].", vdoc({ view: { xmin: -0.5, xmax: 5.5, ymin: -1.5, ymax: 3.5 }, step: 1, arrows: [{ from: [0, 0], to: [2, 3], vl: "u", off: -16 }, { from: [0, 0], to: [3, -1], vl: "v", color: "blue", off: 16 }] }), 0.01),
  mc("Which vector has magnitude 1?", S`$[0.6,-0.8]$`, [S`$[1,1]$`, S`$[0.5,0.5]$`, S`$[1,-1]$`], "0.36 + 0.64 = 1."),
  num(S`At what angle from the positive x-axis does $[3,-3\sqrt3]$ point (degrees)?`, 300, "Quadrant IV, reference 60°."),
  num(S`Find the x-component of the vector of length 26 in the direction of $[5,12]$.`, 10, "2[5, 12]."),
  num(S`If $a[1,0]+b[0,1]=[-3,7]$, find $a$.`, -3, "The components themselves."),
  num(S`$ABCD$ is a parallelogram with $A(0,0)$, $B(4,1)$, $C(6,5)$. Find the x-coordinate of $D$.`, 2, "D = A + BC = (2, 4)."),
  num(S`$|[a,a]|=6$ with $a\gt0$. Find $a$ (2 decimals).`, 4.24, "a√2 = 6.", null, 0.01),
  mc(S`$\overrightarrow{AB}-\overrightarrow{AC}=$`, S`$\overrightarrow{CB}$`, [S`$\overrightarrow{BC}$`, S`$\overrightarrow{BA}$`, S`$\vec 0$`], "CA + AB."),
  num("The vector shown has magnitude 6 at 120°. Find its y-component (2 decimals).", 5.2, "6 sin 120°.", vdoc({ view: { xmin: -4, xmax: 1.5, ymin: -0.8, ymax: 6 }, grid: false, arrows: [{ from: [0, 0], to: pol(6, 120), vl: "v", label: "6", off: -16 }], arcs: [{ at: [0, 0], r: 0.8, a: 0, b: 120, label: "120°" }] }), 0.01),
  num(S`Find the distance between the heads of $[2,5]$ and $[-1,1]$ drawn from the origin.`, 5, "|[3, 4]|."),
  tf(S`The direction of $[a,b]$ is always $\tan^{-1}\frac ba$.`, false, "tan⁻¹ ignores the quadrant when a < 0."),
];
export { easy as E, medium as M };

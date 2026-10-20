// 7.1 Cartesian Vectors — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc } from "../vecfig.mjs";

const S = String.raw;
export const TOPIC = "7.1 Cartesian Vectors";
export const Q = [
  num(S`$a[2,1]+b[1,-3]=[7,-7]$. Find $b$.`, 3, "2a + b = 7 and a − 3b = −7."),
  num(S`$a[2,1]+b[1,-3]=[7,-7]$. Find $a$.`, 2, "Substitute b = 3."),
  num("P is one quarter of the way from A(−2, 0) to B(6, 8) (shown). Find the y-coordinate of P.", 2, "OP = OA + ¼AB.", vdoc({ view: { xmin: -3, xmax: 7, ymin: -1, ymax: 9 }, step: 1, segs: [{ pts: [[-2, 0], [6, 8]], color: "gray" }], points: [{ x: -2, y: 0, label: "A", dx: -14, dy: 14 }, { x: 6, y: 8, label: "B", dx: 8, dy: 0 }, { x: 0, y: 2, label: "P", dx: 8, dy: 4, color: "red" }] })),
  num(S`Find $k\gt0$ so that $|[k,2k]|=\sqrt{45}$.`, 3, "5k² = 45."),
  num("Find the length of side AC of the triangle with A(0, 0), B(6, 0), C(3, 5) (2 decimals).", 5.83, "√34.", null, 0.01),
  num("A(1, 2), B(4, 6) and C(10, 14) are shown. AC = k·AB. Find k.", 3, "AB = [3, 4], AC = [9, 12].", vdoc({ view: { xmin: 0, xmax: 11, ymin: 1, ymax: 15 }, step: 1, axes: false, arrows: [{ from: [1, 2], to: [4, 6], vl: "AB", off: -16 }, { from: [4, 6], to: [10, 14], color: "blue", off: -14 }], points: [{ x: 1, y: 2, label: "A", dx: -14, dy: 6 }, { x: 4, y: 6, label: "B", dx: 8, dy: 6 }, { x: 10, y: 14, label: "C", dx: 8, dy: 0 }] })),
  num(S`Find the direction (from the positive x-axis) of $\overrightarrow{AB}$ for $A(5,-1)$, $B(1,2)$ (degrees, 2 decimals).`, 143.13, "[−4, 3] is in quadrant II.", null, 0.01),
  mc(S`$[2,-3]$ and $[-4,6]$ are:`, "collinear, pointing in opposite directions", ["equal", "collinear, pointing the same way", "not collinear"], "[−4, 6] = −2[2, −3]."),
  num(S`Find the magnitude of the resultant of $[3,4]$, $[-1,2]$ and $[5,-3]$ (2 decimals).`, 7.62, "[7, 3].", null, 0.01),
  num(S`Find the y-component of the equilibrant of $[3,4]$, $[-1,2]$ and $[5,-3]$.`, -3, "The opposite of [7, 3]."),
  num("Forces [40, 0] N and [0, 30] N act together (shown). At what angle from the positive x-axis does the resultant act (degrees, 2 decimals)?", 36.87, "tan⁻¹(30/40).", vdoc({ view: { xmin: -2, xmax: 4.6, ymin: -0.6, ymax: 3.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 0], label: "[40, 0]", off: 14 }, { from: [0, 0], to: [0, 3], label: "[0, 30]", color: "blue", off: -26 }, { from: [0, 0], to: [4, 3], color: "red", label: "R", off: -14 }] }), 0.01),
  num("A plane flies at 300 km/h on a bearing of 060°. Find the east component of its velocity (km/h, 2 decimals).", 259.81, "300 sin 60°.", null, 0.01),
  num("A plane flies at 300 km/h on a bearing of 060°. Find the north component of its velocity (km/h).", 150, "300 cos 60°."),
  tf(S`$[a,b]+[c,d]=[c,d]+[a,b]$.`, true, "Component addition is commutative."),
  num(S`Find $x\gt1$ so that $|[x,3]-[1,-1]|=5$.`, 4, "[x − 1, 4] has length 5."),
  num(S`$[m\cos\theta,\ m\sin\theta]=[-5,\ 5\sqrt3]$ with $m\gt0$. Find $m$.`, 10, "√(25 + 75)."),
  num(S`$[m\cos\theta,\ m\sin\theta]=[-5,\ 5\sqrt3]$ with $0^\circ\le\theta\lt360^\circ$. Find $\theta$ (degrees).`, 120, "Quadrant II, reference 60°."),
  num("Square ABCD (shown, counterclockwise) has A(0, 0) and B(3, 1). Find the y-coordinate of C.", 4, "AD is AB turned 90°: [−1, 3]; C = B + AD = (2, 4).", vdoc({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 5 }, step: 1, segs: [{ pts: [[0, 0], [3, 1], [2, 4], [-1, 3], [0, 0]], color: "gray" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 3, y: 1, label: "B", dx: 6, dy: 14 }, { x: 2, y: 4, label: "C", dx: 6, dy: -6 }, { x: -1, y: 3, label: "D", dx: -16, dy: -4 }] })),
  mc(S`What is the unit vector in the direction of $\overrightarrow{AB}$ for $A(1,1)$, $B(4,5)$?`, S`$[0.6,0.8]$`, [S`$[3,4]$`, S`$[0.8,0.6]$`, S`$[0.75,1]$`], "[3, 4] ÷ 5."),
  num("Find the x-coordinate of the centroid of the triangle with vertices (0, 0), (6, 0), (0, 9).", 2, "Average of the x-coordinates."),
];

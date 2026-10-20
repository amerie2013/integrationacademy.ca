// 7.4 Vectors in Three-Space — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, box3, merge } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const cube = (a) => [[0, 0, 0, a, 0, 0], [a, 0, 0, a, a, 0], [a, a, 0, 0, a, 0], [0, a, 0, 0, 0, 0], [0, 0, a, a, 0, a], [a, 0, a, a, a, a], [a, a, a, 0, a, a], [0, a, a, 0, 0, a], [0, 0, 0, 0, 0, a], [a, 0, 0, a, 0, a], [a, a, 0, a, a, a], [0, a, 0, 0, a, a]].map(([x1, y1, z1, x2, y2, z2]) => ({ pts: [p3(x1, y1, z1), p3(x2, y2, z2)], color: "gray", w: 1.3 }));
export const TOPIC = "7.4 Vectors in Three-Space";
export const Q = [
  num("Find angle P of the triangle P(1, 0, 2), Q(3, 1, 0), R(4, −1, 3) (shown) (degrees, 2 decimals).", 72.45, "PQ = [2, 1, −2], PR = [3, −1, 1]: cos = 3/(3√11).", vdoc(merge(V3, axes3(4.6), { polys: [{ pts: [p3(1, 0, 2), p3(3, 1, 0), p3(4, -1, 3)], fill: "#ede9fe", stroke: "violet" }], points: [{ x: p3(1, 0, 2)[0], y: p3(1, 0, 2)[1], label: "P", dx: -16, dy: -4 }, { x: p3(3, 1, 0)[0], y: p3(3, 1, 0)[1], label: "Q", dx: 6, dy: 14 }, { x: p3(4, -1, 3)[0], y: p3(4, -1, 3)[1], label: "R", dx: -16, dy: -4 }] }, { view: { xmin: -5, xmax: 5.4, ymin: -2.8, ymax: 5.8 } })), 0.01),
  num("Find the perimeter of the triangle A(0, 0, 0), B(1, 2, 2), C(4, 2, −2) (2 decimals).", 12.9, "3 + √24 + 5.", null, 0.01),
  num("The point (1, 2, z) is 3 units from the origin, with z > 0. Find z.", 2, "1 + 4 + z² = 9."),
  num("Find the point on the y-axis equally far from (1, 1, 1) and (3, −1, 2). Give its y-coordinate.", -2.75, "2 + (y − 1)² = 13 + (y + 1)².", null, 0.001),
  num("A vector makes 45° with the x-axis and 60° with the y-axis, and an acute angle with the z-axis. Find that angle (degrees).", 60, "cos² γ = 1 − ½ − ¼."),
  num("In the cube of edge 2 shown, find the angle between the two face diagonals from the corner at the origin to (2, 2, 0) and to (2, 0, 2) (degrees).", 60, "[2, 2, 0] · [2, 0, 2] = 4; cos = 4/8.", vdoc(merge(V3, axes3(4.4), { segs: cube(2) }, { arrows: [{ from: [0, 0], to: p3(2, 2, 0), color: "red" }, { from: [0, 0], to: p3(2, 0, 2), color: "blue" }] }))),
  mc("Which three points are collinear?", "(1, 1, 1), (2, 3, 4), (3, 5, 7)", ["(0, 0, 0), (1, 2, 3), (2, 3, 4)", "(1, 0, 0), (0, 1, 0), (0, 0, 1)", "(1, 2, 3), (2, 3, 5), (4, 5, 6)"], "Each step is [1, 2, 3]."),
  num(S`Find $k$ so that $[k,1,2]\perp[2,k,1]$ (2 decimals).`, -0.67, "2k + k + 2 = 0.", null, 0.005),
  tf(S`$[1,2,3]$ and $[2,4,6]$ have the same direction angles.`, true, "They point the same way."),
  num("A vector has equal acute direction angles with all three axes. Find the x-component of its unit vector (2 decimals).", 0.58, "3 cos² α = 1.", null, 0.005),
  num("Find the distance from the origin to (3, 4, 12).", 13, "√169."),
  num("The box shown is 1 by 4 by 8. Find the length of its space diagonal.", 9, "√(1 + 16 + 64).", vdoc(merge({ view: { xmin: -2.8, xmax: 6, ymin: -1.6, ymax: 9 }, grid: false, axes: false }, { segs: box3(1, 4, 8, "violet") }, { arrows: [{ from: [0, 0], to: p3(1, 4, 8), color: "red", label: "?", off: -14 }] }))),
  num("For any nonzero vector, find cos² α + cos² β + cos² γ.", 1, "The squared direction cosines sum to 1."),
  num(S`Find the angle between $[1,-2,2]$ and $[2,2,-1]$ (degrees, 2 decimals).`, 116.39, "cos θ = −4/9.", null, 0.01),
  num(S`$a[1,0,1]+b[0,1,1]=[2,3,5]$. Find $a+b$.`, 5, "a = 2, b = 3."),
  num("Find |u − v| for u = [2, 1, 2] and v = [1, 2, −2] (shown) (2 decimals).", 4.24, "[1, −1, 4].", vdoc(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(2, 1, 2), vl: "u", off: -16 }, { from: [0, 0], to: p3(1, 2, -2), vl: "v", color: "blue", off: 16 }] }, { view: { xmin: -3.8, xmax: 5, ymin: -3.4, ymax: 5 } })), 0.01),
  num(S`$M$ is the midpoint of $A(2,-1,4)$ and $B(0,5,2)$. Find $|\overrightarrow{OM}|$ (2 decimals).`, 3.74, "M(1, 2, 3).", null, 0.01),
  mc("The xz-plane is the set of points with:", "y = 0", ["x = 0", "z = 0", "x = z"], "No y-coordinate."),
  tf("The point (−1, −1, −1) lies in the octant where all three coordinates are negative.", true, "All signs negative."),
  num(S`$[2,m,6]$ is parallel to $[1,3,n]$. Find $m+n$.`, 9, "The first is 2 times the second: m = 6, n = 3."),
];

// 7.2 The Dot Product — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc } from "../vecfig.mjs";

const S = String.raw;
const easy = [
  num(S`Find $[2,3]\cdot[4,1]$.`, 11, "8 + 3."),
  num(S`Find $[-1,5]\cdot[3,2]$.`, 7, "−3 + 10."),
  num(S`$|\vec a|=3$, $|\vec b|=4$, angle $0^\circ$. Find $\vec a\cdot\vec b$.`, 12, "cos 0° = 1."),
  num(S`$|\vec a|=3$, $|\vec b|=4$, angle $90^\circ$. Find $\vec a\cdot\vec b$.`, 0, "cos 90° = 0."),
  tf(S`$\vec a\cdot\vec b$ is a vector.`, false, "It is a scalar."),
  mc(S`If $\vec a\cdot\vec b\lt0$, the angle between the vectors is:`, "obtuse", ["acute", "right", "zero"], "cos θ < 0."),
  num(S`Find $[6,-2]\cdot[1,3]$.`, 0, "6 − 6."),
  num(S`$|\vec a|=9$. Find $\vec a\cdot\vec a$.`, 81, "|a|²."),
  fill("Two nonzero vectors whose dot product is 0 are ___.", ["perpendicular", "orthogonal", "Perpendicular", "Orthogonal"], "cos θ = 0."),
  num(S`$|\vec a|=2$, $|\vec b|=5$, angle $60^\circ$. Find $\vec a\cdot\vec b$.`, 5, "10 × ½."),
  num("Find the dot product of the vectors shown, [3, 0] and [2, 2].", 6, "6 + 0.", vdoc({ view: { xmin: -0.5, xmax: 3.5, ymin: -0.5, ymax: 2.5 }, step: 1, arrows: [{ from: [0, 0], to: [3, 0], vl: "a", off: 16 }, { from: [0, 0], to: [2, 2], vl: "b", color: "blue", off: -16 }] })),
  num(S`Find $\vec i\cdot\vec i$.`, 1, "A unit vector with itself."),
  num(S`Find $\vec i\cdot\vec j$.`, 0, "Perpendicular."),
  num(S`Find $k$ so that $[k,2]\perp[4,-2]$.`, 1, "4k − 4 = 0."),
  tf(S`$\vec a\cdot\vec b=\vec b\cdot\vec a$.`, true, "Commutative."),
  num(S`Find $[0,5]\cdot[7,-1]$.`, -5, "0 − 5."),
  num(S`$|\vec a|=|\vec b|=6$ and they point in opposite directions. Find $\vec a\cdot\vec b$.`, -36, "cos 180° = −1."),
  num("The vectors shown are [4, 1] and [−1, 4]. Find their dot product.", 0, "−4 + 4: perpendicular.", vdoc({ view: { xmin: -1.6, xmax: 4.6, ymin: -0.5, ymax: 4.6 }, step: 1, arrows: [{ from: [0, 0], to: [4, 1], vl: "a", off: 16 }, { from: [0, 0], to: [-1, 4], vl: "b", color: "blue", off: -16 }] })),
  mc(S`$(2\vec a)\cdot\vec b=$`, S`$2(\vec a\cdot\vec b)$`, [S`$4(\vec a\cdot\vec b)$`, S`$\vec a\cdot\vec b$`, S`$2\vec a\vec b$ (a vector)`], "Scalars factor out."),
  num(S`Find $[-3,-4]\cdot[-3,-4]$.`, 25, "9 + 16."),
];
const medium = [
  num(S`Find the angle between $[1,0]$ and $[1,1]$ (degrees).`, 45, "cos θ = 1/√2."),
  num(S`Find the angle between $[4,3]$ and $[-1,2]$ (degrees, 2 decimals).`, 79.7, "cos θ = 2/(5√5).", null, 0.01),
  num(S`$|\vec a|=5$, $|\vec b|=8$, $\vec a\cdot\vec b=20$. Find the angle (degrees).`, 60, "cos θ = 0.5."),
  num(S`Find $k\gt0$ so that $[k,3]\perp[k,-12]$.`, 6, "k² − 36 = 0."),
  num(S`$|\vec a|=2$, $|\vec b|=3$, $\vec a\cdot\vec b=1$. Find $|\vec a+\vec b|$ (2 decimals).`, 3.87, "4 + 2 + 9 = 15.", null, 0.01),
  num(S`$|\vec a|=4$, $|\vec b|=1$, $\vec a\cdot\vec b=2$. Find $(\vec a-\vec b)\cdot(\vec a-\vec b)$.`, 13, "16 − 4 + 1."),
  tf(S`If $\vec a\cdot\vec b=\vec a\cdot\vec c$ for a nonzero $\vec a$, then $\vec b=\vec c$.`, false, "b − c only has to be perpendicular to a."),
  num("Triangle ABC (shown) has A(0, 0), B(5, 0), C(2, 4). Find angle A (degrees, 2 decimals).", 63.43, "AB · AC = 10; cos A = 10/(5√20).", vdoc({ view: { xmin: -0.6, xmax: 5.6, ymin: -0.6, ymax: 4.6 }, step: 1, segs: [{ pts: [[0, 0], [5, 0], [2, 4], [0, 0]], color: "gray" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 5, y: 0, label: "B", dx: 6, dy: 14 }, { x: 2, y: 4, label: "C", dx: 6, dy: -6 }] }), 0.01),
  mc(S`Which vector is perpendicular to $[2,-7]$?`, S`$[7,2]$`, [S`$[2,7]$`, S`$[-2,7]$`, S`$[7,-2]$`], "14 − 14 = 0."),
  num("Two unit vectors are 120° apart. Find their dot product.", -0.5, "cos 120°.", null, 0.001),
  num(S`Find $[-6,4]\cdot\vec i$.`, -6, "Picks out the x-component."),
  num(S`$|\vec a|=10$, $|\vec b|=6$, $\vec a\cdot\vec b=-30$. Find the angle (degrees).`, 120, "cos θ = −0.5."),
  num(S`If $\vec a\cdot\vec b=1.5$, find $(3\vec a)\cdot(-2\vec b)$.`, -9, "−6 × 1.5."),
  num(S`$|\vec a|=7$, $|\vec b|=4$. Find $(\vec a+\vec b)\cdot(\vec a-\vec b)$.`, 33, "49 − 16."),
  num("Find the angle between the vectors [5, 1] and [1, 5] shown (degrees, 2 decimals).", 67.38, "cos θ = 10/26.", vdoc({ view: { xmin: -0.5, xmax: 5.5, ymin: -0.5, ymax: 5.5 }, step: 1, arrows: [{ from: [0, 0], to: [5, 1], vl: "a", off: 16 }, { from: [0, 0], to: [1, 5], vl: "b", color: "blue", off: -16 }] }), 0.01),
  num(S`Find the angle between $[1,2]$ and the positive y-axis (degrees, 2 decimals).`, 26.57, "cos θ = 2/√5.", null, 0.01),
  tf(S`$\vec a\cdot(\vec b+\vec c)=\vec a\cdot\vec b+\vec a\cdot\vec c$.`, true, "Distributive."),
  num(S`Find $k$ so that the angle between $[1,k]$ and $[1,1]$ is $0^\circ$.`, 1, "They must point the same way."),
  mc(S`$|\vec a|=3$ and $|\vec b|=5$. What is the largest possible value of $\vec a\cdot\vec b$?`, "15", ["8", "0", "34"], "When θ = 0°."),
  num(S`Find $[2,-1]\cdot([3,4]+[1,-2])$.`, 6, "[2, −1] · [4, 2]."),
];
export { easy as E, medium as M };

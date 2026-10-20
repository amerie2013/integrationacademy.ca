// 7.5 The Cross Product and Its Properties — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, merge } from "../vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
export const TOPIC = "7.5 The Cross Product and Its Properties";
export const Q = [
  num(S`Find the x-component of the unit vector in the direction of $[1,2,-1]\times[3,0,1]$ (2 decimals).`, 0.27, "[2, −4, −6] ÷ √56.", null, 0.005),
  num("Find the area of the triangle A(1, 0, 0), B(0, 2, 0), C(0, 0, 2) (2 decimals).", 2.45, "Half of |[4, 2, 2]|.", null, 0.01),
  num("Find the area of the parallelogram with vertices O, (2, 3, 0), (2, 4, 2), (0, 1, 2) (shown) (2 decimals).", 7.48, "|[2, 3, 0] × [0, 1, 2]| = |[6, −4, 2]| = √56.", vdoc(merge(V3, axes3(4.4), { polys: [{ pts: [p3(0, 0, 0), p3(2, 3, 0), p3(2, 4, 2), p3(0, 1, 2)], fill: "#ede9fe", stroke: "violet" }] })), 0.01),
  num(S`$|\vec a\times\vec b|=\vec a\cdot\vec b\ne0$. Find the angle between the vectors (degrees).`, 45, "sin θ = cos θ."),
  num(S`Find $k\gt0$ so that $|[k,0,0]\times[0,1,1]|=4\sqrt2$.`, 4, "[0, −k, k] has length k√2."),
  tf(S`$\vec a\times(\vec b\times\vec c)$ is perpendicular to $\vec b\times\vec c$.`, true, "Any cross product is perpendicular to both of its factors."),
  num(S`Find $(\vec a\times\vec b)\cdot(\vec a\times\vec b)$ for $\vec a=[1,0,0]$, $\vec b=[1,1,0]$.`, 1, "a × b = [0, 0, 1]."),
  num("Find the area of the triangle with vertices (2, 1, 1), (3, 2, 1), (2, 2, 3).", 1.5, "Half of |[1, 1, 0] × [0, 1, 2]| = |[2, −2, 1]|.", null, 0.001),
  num("Find the angle between u = [1, 1, 0] and v = [0, 1, 1] (shown) using either product (degrees).", 60, "|u × v| = √3, u · v = 1, |u||v| = 2.", vdoc(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(2.4, 2.4, 0), vl: "u", off: 16 }, { from: [0, 0], to: p3(0, 2.4, 2.4), vl: "v", color: "blue", off: -16 }] }))),
  mc(S`$\vec i\times(\vec i\times\vec j)=$`, S`$-\vec j$`, [S`$\vec 0$`, S`$\vec j$`, S`$\vec k$`], "i × k = −j."),
  num(S`Find $k$ so that $[1,2,k]$ is perpendicular to $[1,0,1]\times[0,1,0]$.`, 1, "[1, 0, 1] × [0, 1, 0] = [−1, 0, 1]."),
  num(S`$|\vec a\times\vec b|=2$. Find $|(2\vec a)\times(3\vec b)|$.`, 12, "6 × 2."),
  num(S`Find the x-component of $[2,-1,3]\times[-4,2,-6]$.`, 0, "The vectors are collinear."),
  num("A parallelogram has diagonals [3, 1, 0] and [1, −1, 2]. Its area is ½|d₁ × d₂|. Find it (2 decimals).", 3.74, "d₁ × d₂ = [2, −6, −4].", null, 0.01),
  mc("For a = j and b = k (shown), in which direction does a × b point?", "the positive x-axis", ["the negative x-axis", "the positive z-axis", "the negative y-axis"], "j × k = i.", vdoc(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(0, 2.6, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 0, 2.6), vl: "b", color: "blue", off: -16 }] }))),
  num("A vector of length 3 is perpendicular to both [1, 0, 0] and [0, 1, 0] and has a negative z-component. Find that component.", -3, "It is −3k."),
  tf(S`$|\vec a\times\vec b|\le|\vec a||\vec b|$ for all vectors.`, true, "sin θ ≤ 1."),
  num(S`$|\vec a|=6$, $|\vec b|=7$ and $\vec a\cdot\vec b=21$. Find $|\vec a\times\vec b|$ (2 decimals).`, 36.37, "cos θ = ½, so sin θ = √3/2.", null, 0.01),
  num(S`Find the z-component of $(\vec i+\vec j)\times(\vec i-\vec j)$.`, -2, "−i × j + j × i = −2k."),
  num("Find the area of the triangle with vertices O, B(3, 0, 0), C(1, 2, 2) (shown) (2 decimals).", 4.24, "Half of |[0, −6, 6]|.", vdoc(merge(V3, axes3(4.6), { polys: [{ pts: [p3(0, 0, 0), p3(3, 0, 0), p3(1, 2, 2)], fill: "#ede9fe", stroke: "violet" }], points: [{ x: p3(3, 0, 0)[0], y: p3(3, 0, 0)[1], label: "B", dx: -16, dy: 8 }, { x: p3(1, 2, 2)[0], y: p3(1, 2, 2)[1], label: "C", dx: 8, dy: -4 }] })), 0.01),
];

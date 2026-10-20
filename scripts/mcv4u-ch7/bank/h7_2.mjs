// 7.2 The Dot Product — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc } from "../vecfig.mjs";

const S = String.raw;
export const TOPIC = "7.2 The Dot Product";
export const Q = [
  num("A parallelogram has sides [4, 0] and [1, 3] from one corner (shown). Find the acute angle between its diagonals (degrees, 2 decimals).", 75.96, "Diagonals [5, 3] and [−3, 3]: the angle is 104.04°.", vdoc({ view: { xmin: -0.5, xmax: 5.5, ymin: -0.5, ymax: 3.5 }, step: 1, segs: [{ pts: [[0, 0], [4, 0], [5, 3], [1, 3], [0, 0]], color: "gray" }, { pts: [[0, 0], [5, 3]], color: "red", dash: true }, { pts: [[4, 0], [1, 3]], color: "blue", dash: true }] }), 0.01),
  num(S`$|\vec a|=3$, $|\vec b|=4$ and $|\vec a+\vec b|=6$. Find $\vec a\cdot\vec b$.`, 5.5, "36 = 9 + 2a · b + 16.", null, 0.001),
  num(S`$|\vec a|=3$, $|\vec b|=4$ and $|\vec a+\vec b|=6$. Find the angle between them (degrees, 2 decimals).`, 62.72, "cos θ = 5.5/12.", null, 0.01),
  num("Find angle QPR for P(1, 2), Q(5, 3), R(2, 6) (shown) (degrees, 2 decimals).", 61.93, "PQ = [4, 1], PR = [1, 4]; cos = 8/17.", vdoc({ view: { xmin: 0, xmax: 6, ymin: 1, ymax: 7 }, step: 1, axes: false, segs: [{ pts: [[1, 2], [5, 3], [2, 6], [1, 2]], color: "gray" }], points: [{ x: 1, y: 2, label: "P", dx: -14, dy: 6 }, { x: 5, y: 3, label: "Q", dx: 6, dy: 6 }, { x: 2, y: 6, label: "R", dx: 6, dy: -6 }] }), 0.01),
  num(S`Unit vectors $\vec u$ and $\vec v$ satisfy $|\vec u-\vec v|=1$. Find the angle between them (degrees).`, 60, "1 = 1 − 2 cos θ + 1."),
  mc(S`$\vec a\cdot\vec b=|\vec a||\vec b|$ exactly when:`, "the vectors point in the same direction", ["they are perpendicular", "they point in opposite directions", "they have equal lengths"], "cos θ = 1."),
  num(S`Find $k\gt0$ so that the angle between $[k,1]$ and $[1,0]$ is $60^\circ$ (2 decimals).`, 0.58, "k/√(k² + 1) = ½.", null, 0.005),
  tf(S`$|\vec a\cdot\vec b|\le|\vec a||\vec b|$ for all vectors.`, true, "|cos θ| ≤ 1."),
  num("In a square of side 4, vectors go from one corner to the midpoints of the two far sides (shown). Find the angle between them (degrees, 2 decimals).", 36.87, "[4, 2] and [2, 4]: cos = 16/20.", vdoc({ view: { xmin: -0.5, xmax: 4.6, ymin: -0.5, ymax: 4.6 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [4, 0], [4, 4], [0, 4], [0, 0]], color: "gray" }], arrows: [{ from: [0, 0], to: [4, 2], off: 14 }, { from: [0, 0], to: [2, 4], color: "blue", off: -14 }] }), 0.01),
  num(S`Find $[3,-4]\cdot[0.6,0.8]$, the part of $[3,-4]$ along the unit vector $[0.6,0.8]$.`, -1.4, "1.8 − 3.2.", null, 0.001),
  num(S`$|\vec a|=|\vec b|=1$ and $\vec a\cdot\vec b=0.5$. Find $|\vec a-\vec b|$.`, 1, "1 − 1 + 1."),
  num(S`Find $x$ so that $[x,2]\perp[3,-1]$ (2 decimals).`, 0.67, "3x − 2 = 0.", null, 0.005),
  mc(S`The expression $\vec a\cdot(\vec b\cdot\vec c)$ is:`, "not defined", ["a vector", "a scalar", "equal to (a · b) · c"], "b · c is a scalar, and a dot product needs two vectors."),
  num(S`Find the cosine of the angle between $[1,1]$ and $[1,-1]$.`, 0, "1 − 1 = 0."),
  num(S`$\vec a\perp\vec b$ with $|\vec a|=|\vec b|=1$. Find $|2\vec a+3\vec b|$ (2 decimals).`, 3.61, "√(4 + 9).", null, 0.01),
  num("Find the angle between the forces [6, 2] and [−1, 3] shown (degrees).", 90, "−6 + 6 = 0.", vdoc({ view: { xmin: -1.6, xmax: 6.6, ymin: -0.5, ymax: 3.6 }, step: 1, arrows: [{ from: [0, 0], to: [6, 2], vl: "a", off: 16 }, { from: [0, 0], to: [-1, 3], vl: "b", color: "blue", off: -16 }] })),
  num("A rhombus has diagonals of length 10 and 4. Find its acute angle (degrees, 2 decimals).", 43.6, "Sides [−5, 2] and [−5, −2] from a vertex: cos = 21/29.", null, 0.01),
  num(S`$\vec a\cdot\vec b=12$ and $\vec b=[3,4]$. Find $\frac{\vec a\cdot\vec b}{|\vec b|}$.`, 2.4, "12 ÷ 5.", null, 0.001),
  tf(S`If $\vec a\cdot\vec b=0$ and $\vec a\ne\vec 0$, then $\vec b=\vec 0$.`, false, "b could be any vector perpendicular to a."),
  num(S`$|\vec a|=2$, $|\vec b|=3$, angle $60^\circ$. Find $(\vec a+\vec b)\cdot(2\vec a-\vec b)$.`, 2, "2|a|² + a · b − |b|² = 8 + 3 − 9."),
];

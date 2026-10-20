// 6.3 Multiplying a Vector by a Scalar — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc } from "../vecfig.mjs";

const S = String.raw;
const easy = [
  num(S`$|\vec v|=1.2$. Find $|5\vec v|$.`, 6, "5 × 1.2.", null, 0.001),
  num(S`$|\vec v|=7$. Find $|-2\vec v|$.`, 14, "|−2| × 7."),
  mc(S`How does $-3\vec v$ compare with $\vec v$?`, "three times as long, opposite direction", ["three times as long, same direction", "one third as long, opposite direction", "same length, opposite direction"], "k = −3."),
  tf(S`$2\vec v$ and $5\vec v$ are collinear.`, true, "Both are multiples of v."),
  num(S`$|\vec v|=4$. What scalar $k\gt0$ makes $k\vec v$ a unit vector?`, 0.25, "1/4.", null, 0.001),
  mc(S`Simplify $3\vec u+2\vec u$.`, S`$5\vec u$`, [S`$6\vec u$`, S`$5\vec u^2$`, S`$\vec u$`], "Collect like vectors."),
  num(S`$\vec v$ is on a bearing of $060^\circ$. Give the bearing of $-4\vec v$.`, 240, "Negative: add 180°."),
  num(S`In $2(\vec u+\vec v)+3\vec u$, what is the coefficient of $\vec u$?`, 5, "2 + 3."),
  fill("Vectors that are scalar multiples of each other are called ___.", ["collinear", "parallel", "Collinear", "Parallel"], "They lie along the same line."),
  tf(S`$0\cdot\vec v=\vec 0$.`, true, "Zero length."),
  num("In the figure, w is a scalar multiple of v. What is the scalar?", 3, "w goes 3 right and 3 up; v goes 1 and 1.", vdoc({ view: { xmin: -0.5, xmax: 4, ymin: -0.5, ymax: 4 }, axes: false, arrows: [{ from: [0, 0], to: [1, 1], vl: "v", off: -16 }, { from: [0.6, -0.2], to: [3.6, 2.8], vl: "w", color: "red", off: 16 }] })),
  num(S`$|\vec v|=9$. Find $|0.5\vec v|$.`, 4.5, "Half of 9.", null, 0.001),
  mc(S`Which is a unit vector in the direction of $\vec v$?`, S`$\frac{\vec v}{|\vec v|}$`, [S`$|\vec v|\vec v$`, S`$\vec v-1$`, S`$\frac{|\vec v|}{\vec v}$`], "Divide by the length."),
  num(S`In $4\vec u-6\vec u$, what is the coefficient of $\vec u$?`, -2, "4 − 6."),
  tf(S`$|k\vec v|=k|\vec v|$ for every real $k$.`, false, "It is |k||v|; a negative k would give a negative length."),
  num(S`If $2\vec x=6\vec u$, then $\vec x=k\vec u$. Find $k$.`, 3, "Divide by 2."),
  mc(S`$-(\vec u-\vec v)=$`, S`$\vec v-\vec u$`, [S`$\vec u+\vec v$`, S`$-\vec u-\vec v$`, S`$\vec u-\vec v$`], "Distribute the minus sign."),
  num(S`$|\vec v|=3.5$. Find $|-\vec v|$.`, 3.5, "Same length.", null, 0.001),
  num("In the figure, w = kv. Find k.", -0.5, "Half as long, opposite direction.", vdoc({ view: { xmin: -2.5, xmax: 4.5, ymin: -1.5, ymax: 2.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 2], vl: "v", off: -16 }, { from: [0, -0.6], to: [-2, -1.6], vl: "w", color: "red", off: 16 }] }), 0.001),
  num(S`In $3(\vec u-2\vec v)$, what is the coefficient of $\vec v$?`, -6, "3 × (−2)."),
];
const medium = [
  mc(S`Simplify $2(3\vec u-\vec v)-(\vec u+4\vec v)$.`, S`$5\vec u-6\vec v$`, [S`$5\vec u-2\vec v$`, S`$7\vec u-6\vec v$`, S`$5\vec u+2\vec v$`], "6u − 2v − u − 4v."),
  num(S`Solve $4\vec x-\vec u=2\vec x+7\vec u$; the answer is $\vec x=k\vec u$. Find $k$.`, 4, "2x = 8u."),
  num(S`$|\vec v|=2.4$. Find $|3\vec v|$.`, 7.2, "3 × 2.4.", null, 0.001),
  mc("Which pair of vectors is collinear?", S`$3\vec a-2\vec b$ and $-6\vec a+4\vec b$`, [S`$3\vec a-2\vec b$ and $6\vec a+4\vec b$`, S`$\vec a+\vec b$ and $\vec a-\vec b$`, S`$2\vec a$ and $2\vec b$`], "The first pair: k = −2."),
  num(S`$|\vec u|=0.25$. Find $k\gt0$ so that $k\vec u$ is a unit vector.`, 4, "1 ÷ 0.25."),
  num(S`$M$ is the midpoint of $AB$; $\overrightarrow{OM}=s\vec a+t\vec b$ where $\vec a=\overrightarrow{OA}$, $\vec b=\overrightarrow{OB}$. Find $s$.`, 0.5, "OM = ½(a + b).", null, 0.001),
  num(S`$P$ is on $AB$ with $AP:PB=2:3$, and $\overrightarrow{OP}=s\vec a+t\vec b$. Find $t$.`, 0.4, "OP = (3/5)a + (2/5)b.", null, 0.001),
  tf(S`If $\vec u=k\vec v$ with $k\lt0$, then $\vec u$ and $\vec v$ point in opposite directions.`, true, "Negative scalars reverse."),
  num(S`$\vec u$ and $\vec v$ point the same way, $|\vec u|=3$, $|\vec v|=4$. Find $|2\vec u+\vec v|$.`, 10, "6 + 4."),
  num(S`$\vec u$ and $\vec v$ point in opposite directions, $|\vec u|=2$, $|\vec v|=1$. Find $|\vec u-3\vec v|$.`, 5, "u and −3v point the same way: 2 + 3."),
  num(S`On the grid, $\vec u$ goes 2 right and 1 up and $\vec v$ goes 2 up. Find $|\vec u+0.5\vec v|$ (2 decimals).`, 2.83, "u + 0.5v = (2, 2).", vdoc({ view: { xmin: -0.5, xmax: 3, ymin: -0.5, ymax: 3 }, axes: false, arrows: [{ from: [0, 0], to: [2, 1], vl: "u", off: 16 }, { from: [0, 0], to: [0, 2], vl: "v", color: "blue", off: -16 }] }), 0.01),
  mc(S`$2(\vec u+\vec v)-2\vec u=$`, S`$2\vec v$`, [S`$2\vec u+2\vec v$`, S`$\vec v$`, S`$4\vec u+2\vec v$`], "The u terms cancel."),
  num(S`Find $t$ if $(t-1)\vec u=3\vec u$ for a nonzero $\vec u$.`, 4, "t − 1 = 3."),
  num(S`For non-collinear $\vec u$, $\vec v$: $s(\vec u+\vec v)=5\vec u+5\vec v$. Find $s$.`, 5, "Match coefficients."),
  num(S`$\overrightarrow{AB}=2\vec a-\vec b$ and $\overrightarrow{BC}=6\vec a-3\vec b$. Then $\overrightarrow{BC}=k\overrightarrow{AB}$. Find $k$.`, 3, "6a − 3b = 3(2a − b)."),
  mc(S`Points $A$, $B$, $C$ are collinear exactly when:`, S`$\overrightarrow{AB}=k\overrightarrow{AC}$ for some scalar $k$`, [S`$|\overrightarrow{AB}|=|\overrightarrow{AC}|$`, S`$\overrightarrow{AB}+\overrightarrow{AC}=\vec 0$`, S`$\overrightarrow{AB}\perp\overrightarrow{AC}$`], "Parallel vectors through A."),
  num(S`$|\vec v|=18$. Find $|-0.25\vec v|$.`, 4.5, "0.25 × 18.", null, 0.001),
  num("A, B and C lie on a line with AB : BC = 1 : 2 (shown). AC = k·AB. Find k.", 3, "AC = AB + BC = 3AB.", vdoc({ view: { xmin: -0.5, xmax: 9.5, ymin: -0.8, ymax: 1.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [3, 0], vl: "AB", off: -16 }, { from: [3, 0], to: [9, 0], color: "blue", label: "BC = 2AB", off: -14 }], points: [{ x: 0, y: 0, label: "A", dx: -4, dy: 18 }, { x: 3, y: 0, label: "B", dx: -4, dy: 18 }, { x: 9, y: 0, label: "C", dx: -4, dy: 18 }] })),
  num(S`$\vec u\perp\vec v$, $|\vec u|=5$, $|\vec v|=2$. Find $|2\vec u-3\vec v|$ (2 decimals).`, 11.66, "√(10² + 6²).", null, 0.01),
  tf(S`$\vec u+\vec u+\vec u=3\vec u$.`, true, "Repeated addition."),
];
export { easy as E, medium as M };

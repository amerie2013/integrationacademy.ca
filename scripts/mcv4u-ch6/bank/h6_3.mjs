// 6.3 Multiplying a Vector by a Scalar — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { vdoc, pol } from "../vecfig.mjs";

const S = String.raw;
const HEX = Array.from({ length: 6 }, (_, i) => pol(3, i * 60));
export const TOPIC = "6.3 Multiplying a Vector by a Scalar";
export const Q = [
  num(S`$|\vec u|=3$, $|\vec v|=4$, with $60^\circ$ between them. Find $|\vec u+2\vec v|$ (2 decimals).`, 9.85, "u and 2v are 60° apart: √(9 + 64 + 24).", null, 0.01),
  num(S`$|\vec u|=2$, $|\vec v|=5$ and $\vec u\perp\vec v$. Find $|3\vec u-\vec v|$ (2 decimals).`, 7.81, "√(6² + 5²).", null, 0.01),
  num(S`For non-collinear $\vec u$, $\vec v$, find $s$ so that $s\vec u+2\vec v$ is collinear with $3\vec u+6\vec v$.`, 1, "su + 2v = (1/3)(3u + 6v)."),
  num(S`$G$ is the centroid of $\triangle OAB$. Write $\overrightarrow{OG}=s\vec a+t\vec b$ with $\vec a=\overrightarrow{OA}$, $\vec b=\overrightarrow{OB}$, and give $s$ (2 decimals).`, 0.33, "OG = (a + b)/3.", null, 0.005),
  num(S`In the trapezoid shown, $\overrightarrow{AB}=\vec u$, $\overrightarrow{AD}=\vec v$ and $\overrightarrow{DC}=3\vec u$. Writing $\overrightarrow{BC}=m\vec u+n\vec v$, find $m$.`, 2, "BC = BA + AD + DC = −u + v + 3u.", vdoc({ view: { xmin: -0.6, xmax: 8, ymin: -0.8, ymax: 3.2 }, grid: false, axes: false, segs: [{ pts: [[2, 0], [7.5, 2.5], [1, 2.5]], color: "gray" }], arrows: [{ from: [0, 0], to: [2, 0], vl: "u", off: 16 }, { from: [0, 0], to: [1, 2.5], vl: "v", color: "blue", off: -16 }, { from: [1, 2.5], to: [7, 2.5], color: "violet", label: "3u", off: -14 }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 2, y: 0, label: "B", dx: 6, dy: 14 }, { x: 7, y: 2.5, label: "C", dx: 8, dy: -4 }, { x: 1, y: 2.5, label: "D", dx: -16, dy: -4 }] })),
  num(S`$P$ lies on line $AB$ beyond $B$ with $\overrightarrow{AP}=3\overrightarrow{AB}$. Writing $\overrightarrow{OP}=s\vec a+t\vec b$, find $s$.`, -2, "OP = a + 3(b − a)."),
  mc(S`$\vec u$ and $\vec v$ are not collinear and $a\vec u+b\vec v=\vec 0$. What can you conclude?`, S`$a=b=0$`, [S`$a=-b$`, S`$a=b$`, "nothing"], "Otherwise one would be a multiple of the other."),
  num(S`Find $k$ so that $2\vec u+k\vec v$ is collinear with $6\vec u-9\vec v$ (non-collinear $\vec u$, $\vec v$).`, -3, "Scale by 1/3."),
  num(S`In $\triangle ABC$, $M$ and $N$ are the midpoints of $AB$ and $AC$, and $BC=14$. Find $MN$.`, 7, "MN = ½BC."),
  num(S`In parallelogram $ABCD$ (shown), $\overrightarrow{AB}=\vec u$, $\overrightarrow{AD}=\vec v$, and $E$ is the midpoint of $DC$. Writing $\overrightarrow{AE}=s\vec u+t\vec v$, find $s$.`, 0.5, "AE = v + ½u.", vdoc({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 3.6 }, grid: false, axes: false, segs: [{ pts: [[4.5, 0], [6.3, 3], [1.8, 3]], color: "gray" }], arrows: [{ from: [0, 0], to: [4.5, 0], vl: "u", off: 16 }, { from: [0, 0], to: [1.8, 3], vl: "v", color: "blue", off: -16 }, { from: [0, 0], to: [4.05, 3], color: "red", label: "AE", off: 14 }], points: [{ x: 4.05, y: 3, label: "E", dx: -4, dy: -8 }, { x: 0, y: 0, label: "A", dx: -14, dy: 14 }] }), 0.001),
  num(S`$|\vec u|=6$. The vector in the same direction with magnitude 15 is $k\vec u$. Find $k$.`, 2.5, "15 ÷ 6.", null, 0.001),
  tf(S`If $3(\vec u-\vec v)=2(\vec u+\vec v)$, then $\vec u=5\vec v$.`, true, "3u − 3v = 2u + 2v."),
  num(S`$P$ divides $AB$ with $AP:PB=3:2$, and $\overrightarrow{OP}=s\vec a+t\vec b$. Find $s$.`, 0.4, "OP = (2/5)a + (3/5)b.", null, 0.001),
  num(S`$G$ is the centroid of $\triangle ABC$. Find $|\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}|$.`, 0, "The three vectors cancel at the centroid."),
  num(S`$\vec u$ and $\vec v$ are perpendicular unit vectors. Find $|3\vec u+4\vec v|$.`, 5, "√(9 + 16)."),
  num(S`On the grid, $\vec u$ goes 1 right and 2 up and $\vec v$ goes 2 right and 1 up. The vector $\vec w$ (5 right, 4 up) equals $a\vec u+b\vec v$. Find $b$.`, 2, "a + 2b = 5 and 2a + b = 4.", vdoc({ view: { xmin: -0.5, xmax: 5.5, ymin: -0.5, ymax: 4.5 }, axes: false, arrows: [{ from: [0, 0], to: [1, 2], vl: "u", off: -16 }, { from: [0, 0], to: [2, 1], vl: "v", color: "blue", off: 16 }, { from: [0, 0], to: [5, 4], vl: "w", color: "red", off: -16 }] })),
  num(S`$|\vec v|=4$. Find $k$ so that $k\vec v$ has magnitude 10 and points opposite to $\vec v$.`, -2.5, "k = −10/4.", null, 0.001),
  mc(S`The vectors $\vec u$, $2\vec u$ and $-\frac13\vec u$ are:`, "all collinear", ["all equal", "all perpendicular to u", "all unit vectors"], "All are multiples of u."),
  num(S`$\overrightarrow{OP}=0.7\vec a+0.3\vec b$ with $P$ on segment $AB$. Find $\frac{AP}{PB}$ (2 decimals).`, 0.43, "AP is 0.3 of AB, PB is 0.7.", null, 0.005),
  num(S`In the regular hexagon shown, $O$ is the centre, $\overrightarrow{OA}=\vec a$ and $\overrightarrow{OB}=\vec b$. Writing $\overrightarrow{OC}=s\vec a+t\vec b$, find $s$.`, -1, "OC = OB + BC and BC = AO = −a.", vdoc({ view: { xmin: -3.8, xmax: 3.8, ymin: -3.3, ymax: 3.3 }, grid: false, axes: false, segs: [{ pts: [...HEX, HEX[0]], color: "gray" }], arrows: [{ from: [0, 0], to: HEX[0], vl: "a", off: 16 }, { from: [0, 0], to: HEX[1], vl: "b", color: "blue", off: -16 }, { from: [0, 0], to: HEX[2], color: "red", label: "OC", off: -14 }], points: ["A", "B", "C", "D", "E", "F"].map((t, i) => ({ x: HEX[i][0], y: HEX[i][1], label: t, dx: i === 0 ? 8 : i === 3 ? -16 : 2, dy: i < 3 ? -8 : 18 })) })),
];

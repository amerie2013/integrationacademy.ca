// MCV4U Worksheet 6.3 — Multiplying a Vector by a Scalar (teacher edition)
import { svgT, gridT } from "./figT.mjs";
import { vdoc, brg } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const EXAMPLES = [
  { title: "Stretching and reversing", q: S`$|\vec v|=5$ on a bearing of $110^\circ$. Describe $3\vec v$ and $-0.4\vec v$.`,
    fig: VF({ view: { xmin: -2.4, xmax: 15, ymin: -6, ymax: 2.6 }, north: [0, 0, 2.4], arrows: [{ from: [0, 0], to: brg(5, 110), vl: "v", off: -16 }, { from: [0, -1.6], to: brg(15, 110, [0, -1.6]), color: "red", label: "3v", off: 16 }, { from: [0, 0], to: brg(2, 290), color: "blue", label: "−0.4v", off: -14 }] }, 5.5),
    steps: [S`$|3\vec v|=15$, same direction.`, S`$|-0.4\vec v|=0.4\times5=2$, direction $110^\circ+180^\circ=290^\circ$.`], ans: "3v: 15 on bearing 110°; −0.4v: 2 on bearing 290°" },
  { title: "A unit vector", q: S`$|\vec w|=2.5$. Find the unit vector in the direction of $\vec w$.`,
    steps: [S`$\frac{\vec w}{|\vec w|}=\frac{1}{2.5}\vec w$.`], ans: S`$0.4\vec w$` },
  { title: "Simplifying", q: S`Simplify $5(\vec u-2\vec v)-3(2\vec u-3\vec v)$.`,
    steps: [S`$5\vec u-10\vec v-6\vec u+9\vec v$.`], ans: S`$-\vec u-\vec v$` },
  { title: "Solving for a vector", q: S`Solve $2\vec x+3\vec u=5\vec v-\vec x$ for $\vec x$.`,
    steps: [S`$3\vec x=5\vec v-3\vec u$.`, S`Divide by 3.`], ans: S`$\vec x=\frac53\vec v-\vec u$` },
  { title: "Are they collinear?", q: S`Are $4\vec a-6\vec b$ and $-6\vec a+9\vec b$ collinear?`,
    steps: [S`$-6\vec a+9\vec b=-1.5(4\vec a-6\vec b)$.`], ans: "yes: one is −1.5 times the other" },
  { title: "Collinear points", q: S`$\overrightarrow{OA}=\vec a$, $\overrightarrow{OB}=\vec b$ and $\overrightarrow{OC}=3\vec b-2\vec a$. Show that $A$, $B$, $C$ are collinear.`,
    fig: VF({ view: { xmin: -0.6, xmax: 9, ymin: -0.8, ymax: 5.6 }, grid: false, axes: false, segs: [{ pts: [[1, 4.5], [8.2, 1.3]], color: "gray", dash: true }], arrows: [{ from: [0, 0], to: [1, 4.5], vl: "a" }, { from: [0, 0], to: [3.4, 3.43], vl: "b", color: "blue", off: -16 }], points: [{ x: 0, y: 0, label: "O", dx: -14, dy: 14 }, { x: 1, y: 4.5, label: "A", dx: -4, dy: -8 }, { x: 3.4, y: 3.43, label: "B", dx: 4, dy: -10 }, { x: 8.2, y: 1.3, label: "C", dx: 8, dy: 4 }] }, 4.8),
    steps: [S`$\overrightarrow{AB}=\vec b-\vec a$; $\overrightarrow{AC}=3\vec b-3\vec a=3\overrightarrow{AB}$.`, S`Parallel vectors through the common point $A$.`], ans: S`collinear, with $AC=3AB$` },
  { title: "A linear combination", q: S`On the grid, $\vec u$ goes 2 right and 1 up and $\vec v$ goes 1 left and 2 up. Draw $\vec w=2\vec u-\vec v$.`,
    fig: VF({ view: { xmin: -2, xmax: 6, ymin: -1.5, ymax: 3 }, step: 1, arrows: [{ from: [0, 0], to: [4, 2], vl: "2u", off: -16 }, { from: [4, 2], to: [5, 0], color: "blue", label: "−v", off: 14 }, { from: [0, 0], to: [5, 0], color: "red", vl: "w", off: 16 }] }, 5),
    steps: [S`$2\vec u$: 4 right, 2 up. $-\vec v$: 1 right, 2 down.`, S`Tip to tail ends 5 right, 0 up.`], ans: "w goes 5 units to the right" },
  { title: "The midpoint", q: S`$M$ is the midpoint of $AB$, with $\overrightarrow{OA}=\vec a$ and $\overrightarrow{OB}=\vec b$. Find $\overrightarrow{OM}$.`,
    steps: [S`$\overrightarrow{OM}=\vec a+\frac12(\vec b-\vec a)$.`], ans: S`$\frac12(\vec a+\vec b)$` },
  { title: "A trapezoid", q: S`In trapezoid $ABCD$, $\overrightarrow{AB}=\vec u$, $\overrightarrow{AD}=\vec v$ and $\overrightarrow{DC}=2\vec u$. Find $\overrightarrow{AC}$ and $\overrightarrow{BC}$.`,
    steps: [S`$\overrightarrow{AC}=\overrightarrow{AD}+\overrightarrow{DC}=\vec v+2\vec u$.`, S`$\overrightarrow{BC}=\overrightarrow{BA}+\overrightarrow{AC}=-\vec u+\vec v+2\vec u$.`], ans: S`$\overrightarrow{AC}=2\vec u+\vec v$, $\overrightarrow{BC}=\vec u+\vec v$` },
];

const PROBLEMS = [
  { level: 1, q: S`$|\vec v|=4$. Find $|-3\vec v|$.`, recap: "|k| times |v|.", ans: "12" },
  { level: 1, q: S`Compare $-0.5\vec v$ with $\vec v$.`, recap: "Sign and size of k.", ans: "half as long, opposite direction" },
  { level: 1, q: S`Simplify $2\vec u+3\vec u-\vec v$.`, recap: "Collect like vectors.", ans: S`$5\vec u-\vec v$` },
  { level: 2, q: S`Simplify $4(\vec a+\vec b)-2(3\vec a-\vec b)$.`, recap: "Expand, then collect.", ans: S`$-2\vec a+6\vec b$` },
  { level: 2, q: S`$|\vec v|=6$. Write the unit vector opposite to $\vec v$.`, recap: "Divide by −6.", ans: S`$-\frac16\vec v$` },
  { level: 2, q: S`Solve $3\vec x-\vec u=\vec x+5\vec u$.`, recap: "Gather x on one side.", ans: S`$\vec x=3\vec u$` },
  { level: 2, q: S`Are $2\vec a-5\vec b$ and $-4\vec a+10\vec b$ collinear? Explain.`, recap: "Look for k.", ans: "yes: the second is −2 times the first" },
  { level: 2, q: S`On the grid, $\vec u$ goes 1 right and 2 up and $\vec v$ goes 2 right. Draw $2\vec u$, $-\vec u$ and $\vec u+2\vec v$ from the origin.`, recap: "Scale, then tip to tail.", ans: "ends at (2, 4), (−1, −2) and (5, 2)", fig: gridT({ xmin: -2, xmax: 6, ymin: -3, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`$P$ is on $AB$ with $AP:PB=1:3$. Write $\overrightarrow{OP}$ in terms of $\overrightarrow{OA}=\vec a$ and $\overrightarrow{OB}=\vec b$.`, recap: "AP is a quarter of AB.", ans: S`$\overrightarrow{OP}=\frac34\vec a+\frac14\vec b$` },
  { level: 3, space: 5, q: S`Prove that if $M$ is the midpoint of $AB$ then $\overrightarrow{OM}=\frac12\left(\overrightarrow{OA}+\overrightarrow{OB}\right)$ for every point $O$.`, recap: "OM = OA + AM.", ans: S`$\overrightarrow{OM}=\overrightarrow{OA}+\frac12(\overrightarrow{OB}-\overrightarrow{OA})=\frac12(\overrightarrow{OA}+\overrightarrow{OB})$` },
  { level: 3, space: 5, q: S`$\vec u$ and $\vec v$ are not collinear. Find $s$ and $t$ if $(s+1)\vec u+(2t-s)\vec v=3\vec u+\vec v$.`, recap: "Match the coefficients.", ans: "s = 2, t = 1.5" },
  { level: 3, space: 5, q: S`$G$ is the centroid of $\triangle ABC$, two thirds of the way from each vertex to the midpoint of the opposite side. Show $\overrightarrow{OG}=\frac13\left(\vec a+\vec b+\vec c\right)$, where $\vec a=\overrightarrow{OA}$ and so on.`, recap: "Use the median from A to the midpoint of BC.", ans: S`$\overrightarrow{OG}=\vec a+\frac23\left(\frac{\vec b+\vec c}2-\vec a\right)=\frac13(\vec a+\vec b+\vec c)$` },
  { level: 3, space: 5, q: S`In trapezoid $ABCD$ with $\overrightarrow{DC}=k\overrightarrow{AB}$, $M$ and $N$ are the midpoints of $AD$ and $BC$. Show that $\overrightarrow{MN}=\frac{1+k}{2}\overrightarrow{AB}$, so $MN$ is parallel to the bases.`, recap: "Go M → A → B → N and M → D → C → N, then average.", ans: S`$2\overrightarrow{MN}=\overrightarrow{AB}+\overrightarrow{DC}=(1+k)\overrightarrow{AB}$` },
];

export const WS = {
  code: "6.3",
  title: "Multiplying a Vector by a Scalar",
  bigideas: S`$k\vec v$ has magnitude $|k||\vec v|$; it points along $\vec v$ when $k\gt0$ and opposite when $k\lt0$. Vectors are collinear exactly when one is a scalar multiple of the other, and points are collinear when two vectors joining them are multiples sharing a point. A unit vector is $\frac{\vec v}{|\vec v|}$. Scalars distribute like ordinary algebra, which turns geometry facts (midpoints, ratios, parallel lines) into short vector proofs.`,
  goals: ["Find the magnitude and direction of kv.", "Write unit vectors.", "Simplify and solve vector equations.", "Prove collinearity and geometric results."],
  curriculum: "C2.1, C2.2",
  vocab: [["Scalar multiple", "$k\\vec v$"], ["Collinear", "multiples of each other"], ["Unit vector", "$\\frac{\\vec v}{|\\vec v|}$"], ["Linear combination", "$s\\vec u+t\\vec v$"]],
  hook: S`A car doubles its speed without turning. Then it reverses at the original speed. Write both new velocities in terms of the original velocity $\vec v$.`,
  concepts: [
    ["1. What k does", S`Multiples of $\vec v$ all lie along one line:
${VF({ view: { xmin: -5, xmax: 7, ymin: -2.8, ymax: 3.8 }, grid: false, axes: false, segs: [{ pts: [[-5, -2.5], [7, 3.5]], dash: true }], arrows: [{ from: [0, 0], to: [2, 1], vl: "v", off: -16 }, { from: [0, 0], to: [6, 3], color: "red", label: "3v", off: 16 }, { from: [0, 0], to: [-4, -2], color: "blue", label: "−2v", off: 16 }] }, 4.6)}`],
    ["2. Collinear", S`$\vec u=k\vec v$ for some $k$ means parallel (same or opposite direction).`],
    ["3. Algebra", S`$k(\vec u+\vec v)=k\vec u+k\vec v$; $(a+b)\vec v=a\vec v+b\vec v$; $a(b\vec v)=(ab)\vec v$.`],
  ],
  tips: ["Use |k| for the length.", "k < 0 reverses.", "Only like vectors combine.", "Unit vector: divide by the magnitude.", "Collinear points need a shared point."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

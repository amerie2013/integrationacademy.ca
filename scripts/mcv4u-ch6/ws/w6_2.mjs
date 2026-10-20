// MCV4U Worksheet 6.2 — Addition and Subtraction of Vectors (teacher edition)
import { svgT, gridT } from "./figT.mjs";
import { vdoc, pol, brg } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
const EXAMPLES = [
  { title: "The triangle law", q: S`In $\triangle PQR$, simplify $\overrightarrow{PQ}+\overrightarrow{QR}$ and $\overrightarrow{PR}-\overrightarrow{PQ}$.`,
    fig: VF({ view: { xmin: -0.5, xmax: 6.5, ymin: -0.6, ymax: 3.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 3], color: "violet" }, { from: [4, 3], to: [6, 0], color: "blue" }, { from: [0, 0], to: [6, 0], color: "red" }], points: [{ x: 0, y: 0, label: "P", dx: -14, dy: 14 }, { x: 4, y: 3, label: "Q", dx: -4, dy: -8 }, { x: 6, y: 0, label: "R", dx: 6, dy: 14 }] }, 4.5),
    steps: [S`Tip to tail: $\overrightarrow{PQ}+\overrightarrow{QR}=\overrightarrow{PR}$.`, S`$\overrightarrow{PR}-\overrightarrow{PQ}=\overrightarrow{QP}+\overrightarrow{PR}=\overrightarrow{QR}$.`], ans: S`$\overrightarrow{PR}$ and $\overrightarrow{QR}$` },
  { title: "Magnitude and direction of a sum", q: S`$|\vec u|=7$, $|\vec v|=10$, and the angle between them is $45^\circ$. Find $|\vec u+\vec v|$ and its angle with $\vec u$.`,
    fig: VF({ view: { xmin: -0.5, xmax: 15, ymin: -0.8, ymax: 8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [7, 0], vl: "u", label: "7", off: 16 }, { from: [7, 0], to: plus([7, 0], pol(10, 45)), vl: "v", label: "10", color: "blue", off: 16 }, { from: [0, 0], to: plus([7, 0], pol(10, 45)), color: "red", vl: "u+v", off: -18 }], arcs: [{ at: [7, 0], r: 1.3, a: 45, b: 180, label: "135°" }] }, 5.2),
    steps: [S`Triangle angle $180^\circ-45^\circ=135^\circ$: $|\vec u+\vec v|^2=49+100-140\cos135^\circ\approx248.0$.`, S`$|\vec u+\vec v|\approx15.75$; sine law: $\sin\alpha=\frac{10\sin135^\circ}{15.75}$, $\alpha\approx26.68^\circ$.`], ans: S`about 15.75, at $26.68^\circ$ to $\vec u$` },
  { title: "Magnitude of a difference", q: S`For the same $\vec u$ and $\vec v$ ($7$, $10$, $45^\circ$ apart), find $|\vec u-\vec v|$.`,
    steps: [S`Tails together, the triangle angle is the $45^\circ$ itself.`, S`$|\vec u-\vec v|^2=49+100-140\cos45^\circ\approx50.0$.`], ans: S`$\approx7.07$` },
  { title: "Two legs of a hike", q: S`A hiker walks 8 km on a bearing of $030^\circ$, then 5 km on a bearing of $120^\circ$. Find the resultant displacement.`,
    fig: VF({ view: { xmin: -0.8, xmax: 9, ymin: -0.8, ymax: 7.6 }, north: [0, 0, 7.2], arrows: [{ from: [0, 0], to: brg(8, 30), vl: "a", label: "8 km", off: -18 }, { from: brg(8, 30), to: plus(brg(8, 30), brg(5, 120)), vl: "b", label: "5 km", color: "blue", off: -18 }, { from: [0, 0], to: plus(brg(8, 30), brg(5, 120)), color: "red", vl: "r", off: 18 }] }, 5),
    steps: [S`The legs differ by $120^\circ-30^\circ=90^\circ$: $|\vec r|=\sqrt{64+25}\approx9.43$ km.`, S`The turn from the first leg is $\tan^{-1}\frac58\approx32.0^\circ$: bearing $30^\circ+32.0^\circ$.`], ans: "about 9.43 km on a bearing of 062.0°" },
  { title: "Simplifying a chain", q: S`Simplify $\overrightarrow{PQ}-\overrightarrow{RQ}+\overrightarrow{RS}$.`,
    steps: [S`$-\overrightarrow{RQ}=\overrightarrow{QR}$.`, S`$\overrightarrow{PQ}+\overrightarrow{QR}+\overrightarrow{RS}=\overrightarrow{PS}$.`], ans: S`$\overrightarrow{PS}$` },
  { title: "Around a triangle", q: S`Simplify $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CA}$.`,
    steps: [S`The chain returns to $A$: $\overrightarrow{AA}$.`], ans: S`the zero vector $\vec 0$` },
  { title: "Order does not matter", q: S`Use a parallelogram to explain why $\vec u+\vec v=\vec v+\vec u$.`,
    fig: VF({ view: { xmin: -0.5, xmax: 7, ymin: -0.6, ymax: 3.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.5, 0], vl: "u", off: 16 }, { from: [4.5, 0], to: [6.3, 3], vl: "v", color: "blue", off: 16 }, { from: [0, 0], to: [1.8, 3], vl: "v", color: "blue", off: -16 }, { from: [1.8, 3], to: [6.3, 3], vl: "u", off: -16 }, { from: [0, 0], to: [6.3, 3], color: "red" }] }, 4.5),
    steps: [S`Going along $\vec u$ then $\vec v$, or along $\vec v$ then $\vec u$, follows opposite sides of the same parallelogram.`, S`Both routes end at the same corner.`], ans: S`both equal the diagonal, so $\vec u+\vec v=\vec v+\vec u$` },
  { title: "A perpendicular difference", q: S`$|\vec u|=|\vec v|=4$ and $\vec u\perp\vec v$. Find $|\vec u-\vec v|$.`,
    steps: [S`$|\vec u-\vec v|^2=16+16-0=32$.`], ans: S`$4\sqrt2\approx5.66$` },
  { title: "Finding the angle", q: S`$|\vec u|=5$, $|\vec v|=12$ and $|\vec u+\vec v|=13$. Find the angle between $\vec u$ and $\vec v$.`,
    steps: [S`$5^2+12^2=13^2$, so the tip-to-tail triangle has a right angle.`, S`The angle between the vectors is $180^\circ-90^\circ$.`], ans: "90°" },
];

const PROBLEMS = [
  { level: 1, q: S`Simplify $\overrightarrow{AB}+\overrightarrow{BC}$.`, recap: "Tip to tail.", ans: S`$\overrightarrow{AC}$` },
  { level: 1, q: S`Simplify $\overrightarrow{XY}-\overrightarrow{XZ}$.`, recap: "Head of XZ to head of XY.", ans: S`$\overrightarrow{ZY}$` },
  { level: 1, q: S`$|\vec u|=3$ and $|\vec v|=8$. Find $|\vec u+\vec v|$ if they point the same way, and if they point opposite ways.`, recap: "Add or subtract the lengths.", ans: "11 and 5" },
  { level: 2, q: S`$|\vec u|=6$, $|\vec v|=9$, angle between them $70^\circ$. Find $|\vec u+\vec v|$.`, recap: "Triangle angle 110°.", ans: "about 12.41" },
  { level: 2, q: S`For the vectors in Problem 4, find $|\vec u-\vec v|$.`, recap: "Use the 70° angle.", ans: "about 8.95" },
  { level: 2, q: S`Walk 3 km west, then 7 km south. Find the resultant displacement as a magnitude and true bearing.`, recap: "Right triangle; angle west of south tan⁻¹(3/7).", ans: "about 7.62 km on a bearing of 203.2°" },
  { level: 2, q: S`On the grid, $\vec u$ goes 3 right and 1 up and $\vec v$ goes 1 right and 2 up. Draw $\vec u+\vec v$ and $\vec u-\vec v$ from the origin.`, recap: "Tip to tail; add the opposite.", ans: "u + v ends at (4, 3); u − v ends at (2, −1)", fig: gridT({ xmin: -1, xmax: 5, ymin: -2, ymax: 4 }, { x: 1, y: 1 }) },
  { level: 2, q: S`Simplify $\overrightarrow{PQ}+\overrightarrow{QR}+\overrightarrow{RS}-\overrightarrow{PS}$.`, recap: "The first three make PS.", ans: S`$\vec 0$` },
  { level: 3, space: 5, q: S`In parallelogram $ABCD$, $\overrightarrow{AC}=\vec a$ and $\overrightarrow{BD}=\vec b$. Write $\overrightarrow{AB}$ and $\overrightarrow{AD}$ in terms of $\vec a$ and $\vec b$.`, recap: "AC = AB + AD and BD = AD − AB.", ans: S`$\overrightarrow{AB}=\frac12(\vec a-\vec b)$, $\overrightarrow{AD}=\frac12(\vec a+\vec b)$` },
  { level: 3, space: 5, q: S`$|\vec u|=8$, $|\vec v|=5$ and $|\vec u-\vec v|=7$. Find the angle between $\vec u$ and $\vec v$.`, recap: "Cosine law with the angle between them.", ans: S`$\cos\theta=\frac{64+25-49}{80}=0.5$: $60^\circ$` },
  { level: 3, space: 5, q: S`Use the cosine law to show that $|\vec u+\vec v|^2+|\vec u-\vec v|^2=2|\vec u|^2+2|\vec v|^2$.`, recap: "The cos terms cancel.", ans: S`adding $a^2+b^2+2ab\cos\theta$ and $a^2+b^2-2ab\cos\theta$ gives $2a^2+2b^2$` },
  { level: 3, space: 5, q: S`A plane flies 300 km on a bearing of $080^\circ$, then 200 km on a bearing of $200^\circ$. Find its displacement from the start.`, recap: "Turn of 120°, so the triangle angle is 60°.", ans: "about 264.6 km on a bearing of 120.9°" },
  { level: 3, space: 5, q: S`$ABCDEF$ is a regular hexagon with side 1. Find $|\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}|$.`, recap: "The chain is AD.", ans: "2 (a long diagonal)" },
];

export const WS = {
  code: "6.2",
  title: "Addition and Subtraction of Vectors",
  bigideas: S`Add vectors tip to tail: the resultant runs from the first tail to the last head (or, tails together, along the parallelogram's diagonal). Addition is commutative and associative, and a closed chain sums to $\vec 0$. Subtract by adding the opposite: $\vec u-\vec v=\vec u+(-\vec v)$, which runs from the head of $\vec v$ to the head of $\vec u$. The cosine law gives the magnitude of a sum or difference and the sine law gives its direction.`,
  goals: ["Add with the triangle and parallelogram laws.", "Subtract by adding the opposite.", "Simplify chains of vectors.", "Find magnitudes and directions with the cosine and sine laws."],
  curriculum: "C2.1",
  vocab: [["Resultant", "the sum"], ["Triangle law", "tip to tail"], ["Zero vector", "$\\vec 0$"], ["Difference", "$\\vec u+(-\\vec v)$"]],
  hook: S`You walk 3 blocks east and 4 blocks north. How far are you from where you started? Why is it not 7 blocks?`,
  concepts: [
    ["1. Tip to tail", S`$\vec u+\vec v$ closes the triangle:
${VF({ view: { xmin: -0.5, xmax: 7.5, ymin: -0.6, ymax: 4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 0.6], vl: "u", off: 16 }, { from: [4, 0.6], to: [6.8, 3.4], vl: "v", color: "blue", off: 16 }, { from: [0, 0], to: [6.8, 3.4], color: "red", vl: "u+v", off: -18 }] }, 4.5)}`],
    ["2. The angle to use", S`Tip to tail, the triangle angle is $180^\circ-\theta$, where $\theta$ is the angle between the vectors.`],
    ["3. Subtraction", S`$\vec u-\vec v$ joins the head of $\vec v$ to the head of $\vec u$.`],
  ],
  tips: ["Draw the triangle first.", "Triangle angle = 180° − angle between.", "u − v and v − u are opposites.", "A closed chain gives the zero vector.", "Give a direction with a reference."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

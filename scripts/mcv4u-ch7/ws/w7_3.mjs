// MCV4U Worksheet 7.3 — Applications of the Dot Product (teacher edition)
import { svgT } from "./figT.mjs";
import { vdoc, pol } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const EXAMPLES = [
  { title: "Pushing a mower", q: S`A mower is pushed 30 m with a 150 N force directed $20^\circ$ below the horizontal. Find the work done.`,
    fig: VF({ view: { xmin: -0.6, xmax: 7, ymin: -0.8, ymax: 3.4 }, grid: false, axes: false, arrows: [{ from: pol(4, 160, [4, 0.2]), to: [4, 0.2], vl: "F", label: "150 N", off: -16 }, { from: [0, -0.5], to: [6.6, -0.5], color: "blue", label: "30 m", off: -12, w: 2 }], arcs: [{ at: [4, 0.2], r: 1.1, a: 160, b: 180, label: "20°" }] }, 4.8),
    steps: [S`$W=150\times30\times\cos20^\circ$.`], ans: "about 4229 J" },
  { title: "Work from components", q: S`$\vec F=[20,-5]$ N moves an object from $(2,3)$ to $(14,8)$ (metres). Find the work.`,
    steps: [S`$\vec d=[12,5]$; $W=240-25$.`], ans: "215 J" },
  { title: "Scalar and vector projections", q: S`Find the scalar and vector projections of $[5,1]$ on $[3,4]$.`,
    steps: [S`Dot product 19, $|[3,4]|=5$: scalar projection 3.8.`, S`Vector projection $\frac{19}{25}[3,4]$.`], ans: "3.8 and [2.28, 3.04]" },
  { title: "A negative projection", q: S`Find the scalar and vector projections of $[-2,6]$ on $[4,0]$.`,
    steps: [S`Dot product $-8$, $|[4,0]|=4$: scalar projection $-2$.`, S`Vector projection $\frac{-8}{16}[4,0]$.`], ans: "−2 and [−2, 0]" },
  { title: "Splitting a vector", q: S`Split $[6,2]$ into parts parallel and perpendicular to $[1,2]$.`,
    fig: VF({ view: { xmin: -0.5, xmax: 7, ymin: -0.8, ymax: 4.8 }, step: 1, arrows: [{ from: [0, 0], to: [6, 2], vl: "a", off: 16 }, { from: [0, 0], to: [2, 4], color: "red", label: "[2, 4]", off: -18 }, { from: [2, 4], to: [6, 2], color: "green", label: "[4, −2]", off: -16 }] }, 4.4),
    steps: [S`Projection $\frac{10}5[1,2]=[2,4]$.`, S`Perpendicular part $[6,2]-[2,4]=[4,-2]$.`], ans: "[2, 4] parallel, [4, −2] perpendicular" },
  { title: "A distance", q: S`Find the distance from $P(5,5)$ to the line through the origin in the direction $[3,1]$.`,
    steps: [S`Projection of $[5,5]$: $\frac{20}{10}[3,1]=[6,2]$.`, S`Perpendicular part $[-1,3]$, length $\sqrt{10}$.`], ans: "about 3.16" },
  { title: "Work by gravity", q: S`A 20 N box slides 5 m down a ramp inclined at $25^\circ$. How much work does gravity do?`,
    steps: [S`The weight makes $90^\circ-25^\circ=65^\circ$ with the motion.`, S`$W=20\times5\times\cos65^\circ=100\sin25^\circ$.`], ans: "about 42.26 J" },
  { title: "No work at all", q: S`A waiter carries a tray at constant height across a room. How much work does the upward force on the tray do?`,
    steps: [S`The force is vertical and the motion is horizontal: $\theta=90^\circ$, $\cos90^\circ=0$.`], ans: "0 J" },
  { title: "Order matters", q: S`For $\vec a=[2,0]$ and $\vec b=[3,3]$, compare the scalar projection of $\vec b$ on $\vec a$ with that of $\vec a$ on $\vec b$.`,
    steps: [S`$\vec a\cdot\vec b=6$. On $\vec a$: $\frac62=3$. On $\vec b$: $\frac6{\sqrt{18}}\approx1.41$.`], ans: "3 and about 1.41 — they differ" },
];

const PROBLEMS = [
  { level: 1, q: S`A 30 N force moves an object 10 m in its own direction. Find the work.`, recap: S`$\cos0^\circ=1$.`, ans: "300 J" },
  { level: 1, q: S`Find the scalar projection of $[3,4]$ on $[1,0]$.`, recap: "Divide by |b| = 1.", ans: "3" },
  { level: 1, q: S`Find the work done by $\vec F=[2,2]$ N over $\vec d=[5,0]$ m.`, recap: "Dot product.", ans: "10 J" },
  { level: 2, q: S`A 200 N force at $30^\circ$ to the motion moves a crate 15 m. Find the work.`, recap: S`$200\times15\cos30^\circ$.`, ans: "about 2598 J" },
  { level: 2, q: S`Find the scalar projection of $[1,7]$ on $[3,-4]$.`, recap: "Dot product over 5.", ans: "−5" },
  { level: 2, q: S`Find the vector projection of $[4,2]$ on $[1,1]$.`, recap: S`$\frac{6}{2}[1,1]$.`, ans: "[3, 3]" },
  { level: 2, q: S`Find the part of $[4,2]$ perpendicular to $[1,1]$.`, recap: "Subtract the projection.", ans: "[1, −1]" },
  { level: 2, q: S`$\vec F=[10,3]$ N moves an object from $(1,1)$ to $(6,4)$. Find the work.`, recap: "d = [5, 3].", ans: "59 J" },
  { level: 3, space: 5, q: S`Find the distance from $(8,1)$ to the line through the origin with direction $[2,1]$.`, recap: "Length of the perpendicular part.", ans: S`perpendicular part $[1.2,-2.4]$: $\approx2.68$` },
  { level: 3, space: 5, q: S`A 90 N pull moves a cart 25 m. How much more work is done with the pull at $35^\circ$ than at $60^\circ$ to the ground?`, recap: "Difference of two works.", ans: "about 718 J" },
  { level: 3, space: 5, q: S`Show that the scalar projection of $\vec a$ on $k\vec b$ ($k\gt0$) equals the projection of $\vec a$ on $\vec b$.`, recap: "The k cancels.", ans: S`$\frac{\vec a\cdot k\vec b}{|k\vec b|}=\frac{k\,\vec a\cdot\vec b}{k|\vec b|}$` },
  { level: 3, space: 5, q: S`$|\vec a|=10$ and its scalar projection on $\vec b$ is 4. Find the angle between $\vec a$ and $\vec b$.`, recap: S`$10\cos\theta=4$.`, ans: "about 66.42°" },
  { level: 3, space: 5, q: S`A block on a ramp running in the direction $[4,1]$ has weight $[0,-50]$ N. Find the component of its weight along the ramp, as a vector and as a magnitude.`, recap: "Vector projection on [4, 1].", ans: S`$-\frac{50}{17}[4,1]\approx[-11.76,-2.94]$, magnitude $\approx12.13$ N` },
];

export const WS = {
  code: "7.3",
  title: "Applications of the Dot Product",
  bigideas: S`The scalar projection of $\vec a$ on $\vec b$, $\frac{\vec a\cdot\vec b}{|\vec b|}=|\vec a|\cos\theta$, is the signed length of $\vec a$'s shadow on the line of $\vec b$; the vector projection is $\frac{\vec a\cdot\vec b}{|\vec b|^2}\vec b$. Subtracting it leaves the part of $\vec a$ perpendicular to $\vec b$, whose length is the distance from a point to a line. Work is a dot product: $W=\vec F\cdot\vec d$.`,
  goals: ["Find scalar and vector projections.", "Compute work.", "Split vectors into perpendicular parts.", "Find distances with projections."],
  curriculum: "C2.4, C2.8",
  vocab: [["Scalar projection", "$\\frac{\\vec a\\cdot\\vec b}{|\\vec b|}$"], ["Vector projection", "$\\frac{\\vec a\\cdot\\vec b}{|\\vec b|^2}\\vec b$"], ["Work", "$\\vec F\\cdot\\vec d$"], ["Perpendicular part", "a minus its projection"]],
  hook: S`Why is it easier to pull a sled with a long, low rope than with a short rope held high, even with the same pull?`,
  concepts: [
    ["1. The shadow", S`Projection of $\vec a$ on $\vec b$:
${VF({ view: { xmin: -0.5, xmax: 7, ymin: -0.8, ymax: 4 }, grid: false, axes: false, segs: [{ pts: [[-0.3, 0], [6.8, 0]], dash: true }, { pts: [pol(4.5, 40), [3.45, 0]], dash: true }], arrows: [{ from: [0, 0], to: [6.4, 0], vl: "b", off: 16, w: 2 }, { from: [0, 0], to: pol(4.5, 40), vl: "a", off: -16 }, { from: [0, 0], to: [3.45, 0], color: "red", w: 4.5 }] }, 4.4)}`],
    ["2. Work", S`$W=|\vec F||\vec d|\cos\theta=\vec F\cdot\vec d$ joules.`],
    ["3. Perpendicular part", S`$\vec a-\text{proj}_{\vec b}\vec a$ is perpendicular to $\vec b$.`],
  ],
  tips: ["Divide by |b| for the scalar projection.", "Divide by |b|² for the vector projection.", "Work is a scalar.", "Perpendicular force: no work.", "proj on b ≠ proj on a."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

// LINALG1 Worksheet 1.3 — Length, Distance and Unit Vectors
// Self-contained: complete notes (definitions, theorems with proofs, figures), 9 worked examples with figures,
// 13 practice problems at three levels, answer key.
import { gridT, planeT } from "./figT.mjs";
import { scene3, a3, pt3, seg3, line3 } from "../vecfig.mjs";
import { S, VF, def, thm, side, pr } from "./wkit.mjs";

/** points of a circle (for outlines) */
const ring = (cx, cy, r, a0 = 0, a1 = 360) => Array.from({ length: 73 }, (_, i) => { const t = ((a0 + ((a1 - a0) * i) / 72) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });

// ── notes figures ──
const F_BOX = VF(scene3(4.5, { segs: [seg3([[3, 0, 0], [3, 4, 0], [0, 4, 0]], { dash: true, w: 1.1 }), seg3([[0, 0, 0], [3, 4, 0]], { color: "amber", w: 2 }), seg3([[3, 4, 0], [3, 4, 2.5]], { color: "green", w: 2 })], arrows: [a3([0, 0, 0], [3, 4, 2.5], { color: "blue", vl: "x", off: -16 })], texts: [{ x: pr([1.5, 2, 0])[0] + 0.2, y: pr([1.5, 2, 0])[1] - 0.45, t: "√(x₁² + x₂²)", color: "amber" }, { x: pr([3, 4, 1.25])[0] + 0.55, y: pr([3, 4, 1.25])[1], t: "x₃", color: "green" }] }), 6);
const F_TRI = VF({ view: { xmin: -0.6, xmax: 7, ymin: -0.8, ymax: 4.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 0.5], vl: "x", off: 16 }, { from: [4, 0.5], to: [6, 4], color: "red", vl: "y", off: 16 }, { from: [0, 0], to: [6, 4], color: "green", label: "x + y", off: -16 }] }, 5.6);
const F_DIST = VF({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 5.5 }, step: 1, segs: [{ pts: [[1, 1], [6, 1], [6, 4]], color: "amber", dash: true }, { pts: [[1, 1], [6, 4]], color: "red", w: 2.4 }], texts: [{ x: 3.5, y: 0.45, t: "5", color: "amber" }, { x: 6.45, y: 2.5, t: "3", color: "amber" }, { x: 3.1, y: 3.1, t: "√34", color: "red" }], points: [{ x: 1, y: 1, label: "A(1, 1)", dx: -6, dy: -8, anchor: "end" }, { x: 6, y: 4, label: "B(6, 4)", dx: -8, dy: -8, anchor: "end" }] }, 5.6);
const F_UNIT = VF({ view: { xmin: -1.6, xmax: 4.2, ymin: -1.6, ymax: 3.4 }, step: 1, segs: [{ pts: ring(0, 0, 1), color: "gray", dash: true, w: 1.4 }], arrows: [{ from: [0, 0], to: [3.6, 2.7], color: "blue", label: "x = (3.6, 2.7)", off: -14 }, { from: [0, 0], to: [0.8, 0.6], color: "red", w: 3.2, vl: "u", off: 16 }], texts: [{ x: -0.9, y: -1.35, t: "unit circle", color: "gray" }] }, 5.6);
const F_ANGLE = VF({ view: { xmin: -1.5, xmax: 1.7, ymin: -1.4, ymax: 1.5 }, grid: false, segs: [{ pts: ring(0, 0, 1), color: "gray", w: 1.4 }, { pts: [[Math.cos(0.7), 0], [Math.cos(0.7), Math.sin(0.7)]], color: "amber", dash: true }], arcs: [{ at: [0, 0], r: 0.3, a: 0, b: 40.1, label: "θ" }], arrows: [{ from: [0, 0], to: [Math.cos(0.7), Math.sin(0.7)], color: "red", label: "(cos θ, sin θ)", off: -14 }] }, 4.8);
const F_DATA = VF({ view: { xmin: 55, xmax: 100, ymin: 55, ymax: 100 }, step: 5, axes: false, segs: [{ pts: [[90, 60], [85, 64]], color: "green", w: 2.2 }, { pts: [[90, 60], [62, 92]], color: "gray", dash: true }], points: [{ x: 90, y: 60, label: "Ana", color: "blue" }, { x: 85, y: 64, label: "Ben", color: "blue", dx: -8, anchor: "end" }, { x: 62, y: 92, label: "Cal", color: "blue" }], texts: [{ x: 77.5, y: 57.5, t: "math score →", color: "gray" }] }, 5.4);

const NOTES = [
  { h: "1. The length (norm) of a vector",
    lead: S`${def("norm", S`The \textbf{norm} (length) of $\vec x=(x_1,\dots,x_n)\in\mathbb R^n$ is
\[\|\vec x\|=\sqrt{x_1^2+x_2^2+\dots+x_n^2}.\]`)}
In $\mathbb R^2$ this is Pythagoras. In $\mathbb R^3$ it is Pythagoras \emph{twice}: the floor diagonal (amber) has length $\sqrt{x_1^2+x_2^2}$, and it forms a right angle with the vertical leg $x_3$ (green), so $\|\vec x\|^2=(x_1^2+x_2^2)+x_3^2$.`,
    fig: F_BOX, w: 0.55,
    body: S`For $n\ge4$ there is no picture, and the formula \emph{is} the definition: $\|(1,-2,0,2)\|=\sqrt{1+4+0+4}=3$. A useful habit is to work with $\|\vec x\|^2=x_1^2+\dots+x_n^2$, which has no square root, and take the root only at the end.` },

  { h: "2. Properties of the norm",
    lead: thm("properties of the norm", S`For all $\vec x,\vec y\in\mathbb R^n$ and every scalar $c$:
\begin{enumerate}[leftmargin=*,itemsep=0pt]
\item $\|\vec x\|\ge0$, and $\|\vec x\|=0$ only when $\vec x=\vec 0$;
\item $\|c\vec x\|=|c|\,\|\vec x\|$;
\item (\textbf{triangle inequality}) $\|\vec x+\vec y\|\le\|\vec x\|+\|\vec y\|$.
\end{enumerate}`),
    fig: F_TRI, w: 0.6,
    body: S`\pf{(1) A sum of squares is never negative, and it is $0$ only if every $x_i=0$. (2) $\|c\vec x\|=\sqrt{(cx_1)^2+\dots+(cx_n)^2}=\sqrt{c^2}\sqrt{x_1^2+\dots+x_n^2}=|c|\,\|\vec x\|$; note $\sqrt{c^2}=|c|$, not $c$. (3) is proved in Worksheet 1.4 using the Cauchy--Schwarz inequality.}
\textbf{Meaning of (3).} In the triangle formed by $\vec x$, $\vec y$ and $\vec x+\vec y$ (figure), one side is never longer than the other two together: the straight route is the shortest. Equality holds exactly when $\vec x$ and $\vec y$ point the same way.` },

  { h: "3. Distance between points",
    lead: S`${def("distance", S`The distance between points $A$ and $B$ in $\mathbb R^n$ is $d(A,B)=\|\vec b-\vec a\|=\sqrt{(b_1-a_1)^2+\dots+(b_n-a_n)^2}$.`)}
It is the length of $\overrightarrow{AB}$. In the figure, $\overrightarrow{AB}=(5,3)$, so $d(A,B)=\sqrt{25+9}=\sqrt{34}$.`,
    fig: F_DIST, w: 0.56,
    body: S`\textbf{Properties.} $d(A,B)=d(B,A)$, $d(A,B)=0$ only if $A=B$, and $d(A,C)\le d(A,B)+d(B,C)$ (the triangle inequality again).

\textbf{Circles and spheres.} The points at distance $r$ from a centre $C$ satisfy $\|\vec x-\vec c\|=r$, that is $(x_1-c_1)^2+\dots+(x_n-c_n)^2=r^2$: a circle in $\mathbb R^2$, a sphere in $\mathbb R^3$. A point is \emph{inside} when $\|\vec x-\vec c\|<r$.

\textbf{Right angles from lengths.} By the converse of Pythagoras, triangle $ABC$ has a right angle at $A$ exactly when $AB^2+AC^2=BC^2$ --- this needs only distances.` },

  { h: "4. Unit vectors and normalising",
    lead: S`${def("unit vector", S`A \textbf{unit vector} has norm $1$. For $\vec x\ne\vec 0$, the unit vector in the direction of $\vec x$ is $\hat x=\dfrac{\vec x}{\|\vec x\|}$ (\emph{normalising} $\vec x$).`)}
It is a unit vector by property (2): $\left\|\tfrac{1}{\|\vec x\|}\vec x\right\|=\tfrac{1}{\|\vec x\|}\|\vec x\|=1$. In the figure $\vec x=(3.6,2.7)$ has length $4.5$, so $\vec u=\tfrac{1}{4.5}(3.6,2.7)=(0.8,0.6)$, which ends on the unit circle.`,
    fig: F_UNIT, w: 0.55,
    body: S`\textbf{A given length in a given direction.} The vector of length $L$ in the direction of $\vec x$ is $L\,\hat x=\dfrac{L}{\|\vec x\|}\vec x$; the opposite direction is $-L\,\hat x$. For instance the vector of length $10$ along $(1,2,2)$ (norm $3$) is $\tfrac{10}{3}(1,2,2)$.

The standard basis vectors $\vec e_1,\dots,\vec e_n$ are unit vectors; so is $\tfrac12(1,1,1,1)$ in $\mathbb R^4$.` },

  { h: "5. Unit vectors in the plane and angles",
    lead: S`Every unit vector in $\mathbb R^2$ ends on the unit circle, so it can be written as
\[\vec u=(\cos\theta,\ \sin\theta),\]
where $\theta$ is the angle from the positive $x_1$-axis, measured counterclockwise. Then any $\vec x\ne\vec 0$ in $\mathbb R^2$ is $\vec x=\|\vec x\|(\cos\theta,\sin\theta)$: a length times a direction.`,
    fig: F_ANGLE, w: 0.6,
    body: S`\textbf{Example.} The vector of length $4$ at $\theta=120^\circ$ is $4(\cos120^\circ,\sin120^\circ)=4\left(-\tfrac12,\tfrac{\sqrt3}{2}\right)=(-2,\ 2\sqrt3)$. Conversely, $(-2,2\sqrt3)$ has length $\sqrt{4+12}=4$.` },

  { h: "6. Distance as a measure of similarity",
    lead: S`Vectors of data can be compared by their distance: a small distance means similar data. Three students' scores (math, physics) are plotted: Ana $(90,60)$, Ben $(85,64)$, Cal $(62,92)$.
\[d(\text{Ana},\text{Ben})=\sqrt{25+16}\approx6.4,\]
\[d(\text{Ana},\text{Cal})=\sqrt{784+1024}\approx42.5.\]
Ana is much more like Ben than like Cal.`,
    fig: F_DATA, w: 0.56,
    body: S`This is the idea behind \emph{nearest-neighbour} methods in data science: recommend to a customer what the most similar customer liked. It works in $\mathbb R^{100}$ exactly as in $\mathbb R^2$ --- we just cannot draw it. (Worksheet 1.4 adds a second measure, the angle between data vectors.)` },
];

// ── worked examples ──
const EXAMPLES = [
  { title: "Norms in $\\mathbb R^3$ and $\\mathbb R^4$", q: S`Find $\|(4,-4,7)\|$ and $\|(2,-4,5,-2)\|$.`,
    fig: VF(scene3(5, { segs: [seg3([[4, 0, 0], [4, -4, 0], [0, -4, 0]], { dash: true, w: 1.1 }), seg3([[0, 0, 0], [4, -4, 0]], { color: "amber", w: 2 }), seg3([[4, -4, 0], [4, -4, 7]], { color: "green", w: 2 })], arrows: [a3([0, 0, 0], [4, -4, 7], { color: "blue", label: "length 9", off: 16 })], points: [pt3([4, -4, 7], "(4, −4, 7)", { color: "blue" })] }), 5),
    steps: [S`Floor diagonal: $\sqrt{16+16}=\sqrt{32}$. Then $\|(4,-4,7)\|=\sqrt{32+49}=\sqrt{81}=9$.`, S`In $\mathbb R^4$ there is no picture; use the formula: $\sqrt{4+16+25+4}=\sqrt{49}=7$.`],
    ans: S`$9$ and $7$` },
  { title: "Distance in space", q: S`Find the distance between $P(3,-1,2)$ and $Q(-1,5,-10)$.`,
    fig: VF(scene3(6, { segs: [seg3([[3, -1, 2], [-1, 5, -10]], { color: "red", w: 2.4 })], points: [pt3([3, -1, 2], "P", { color: "black" }), pt3([-1, 5, -10], "Q", { color: "black" })], texts: [{ x: pr([1, 2, -4])[0] + 0.9, y: pr([1, 2, -4])[1], t: "14", color: "red" }] }), 4.4),
    steps: [S`$\overrightarrow{PQ}=(-1-3,\ 5+1,\ -10-2)=(-4,6,-12)$.`, S`$\|\overrightarrow{PQ}\|^2=16+36+144=196$, so $d=\sqrt{196}$.`],
    ans: S`$d(P,Q)=14$` },
  { title: "Normalise, then rescale", q: S`Find the unit vector in the direction of $\vec x=(4,-8,1)$, and the vector of length $27$ pointing opposite to $\vec x$.`,
    // schematic: all three vectors lie on one line through O, drawn to scale along it
    fig: VF({ view: { xmin: -28.5, xmax: 15, ymin: -6, ymax: 6.5 }, grid: false, axes: false, segs: [{ pts: [[-28.5, 0], [15, 0]], color: "gray", dash: true, w: 1 }], arrows: [{ from: [0, 2.6], to: [9, 2.6], color: "blue", label: "x (length 9)", off: -14 }, { from: [0, 0], to: [1, 0], color: "red", w: 3.6 }, { from: [0, -2.6], to: [-27, -2.6], color: "green", label: "−27x̂ (length 27)", off: 14 }], points: [{ x: 0, y: 0, label: "O", dx: -6, dy: -8, anchor: "end" }], texts: [{ x: 8, y: -0.4, t: "x̂ (length 1)", color: "red" }] }, 5.4),
    steps: [S`$\|\vec x\|=\sqrt{16+64+1}=\sqrt{81}=9$, so $\hat x=\tfrac19(4,-8,1)=\left(\tfrac49,-\tfrac89,\tfrac19\right)$.`, S`Opposite, length 27: $-27\hat x=-3(4,-8,1)$.`, S`Check: $\|(-12,24,-3)\|=3\cdot9=27$ \checkmark.`],
    ans: S`$\hat x=\left(\tfrac49,-\tfrac89,\tfrac19\right)$; $(-12,24,-3)$` },
  { title: "A direction given by an angle", q: S`Find the unit vector at $150^\circ$ from the positive $x_1$-axis and the vector of length $6$ in that direction. What angle does $(-3\sqrt3,-3)$ make?`,
    fig: VF({ view: { xmin: -6, xmax: 2, ymin: -3.8, ymax: 3.8 }, step: 1, segs: [{ pts: ring(0, 0, 1), color: "gray", dash: true, w: 1.2 }], arcs: [{ at: [0, 0], r: 0.7, a: 0, b: 150, label: "150°" }], arrows: [{ from: [0, 0], to: [-3 * Math.sqrt(3), 3], color: "blue", label: "(−3√3, 3)", off: -14 }, { from: [0, 0], to: [-3 * Math.sqrt(3), -3], color: "green", dash: true, label: "210°", off: 14 }] }, 5),
    steps: [S`$\vec u=(\cos150^\circ,\sin150^\circ)=\left(-\tfrac{\sqrt3}{2},\tfrac12\right)$, and $6\vec u=(-3\sqrt3,\ 3)$.`, S`$(-3\sqrt3,-3)$ also has length $\sqrt{27+9}=6$ and is the reflection of $6\vec u$ in the $x_1$-axis.`, S`It lies in the third quadrant with $\cos\theta=-\tfrac{\sqrt3}{2}$, $\sin\theta=-\tfrac12$, so $\theta=210^\circ$.`],
    ans: S`$\left(-\tfrac{\sqrt3}{2},\tfrac12\right)$; $(-3\sqrt3,3)$; $210^\circ$` },
  { title: "An unknown inside a norm", q: S`Find every $k$ with $\|(k,\ k+1,\ 2)\|=3$.`,
    fig: planeT({ view: { xmin: -3, xmax: 2, ymin: 0, ymax: 14 }, step: { x: 1, y: 2 }, width: 300, xlabel: "k", ylabel: "‖v‖²", curves: [{ f: (k) => 2 * k * k + 2 * k + 5, color: "violet" }], lines: [{ m: 0, b: 9, color: "red", dash: true }], points: [{ x: -2, y: 9, label: "k = −2", color: "green" }, { x: 1, y: 9, label: "k = 1", color: "green" }] }, 5),
    steps: [S`Square both sides: $k^2+(k+1)^2+4=9$, so $2k^2+2k-4=0$, i.e. $k^2+k-2=0$.`, S`$(k+2)(k-1)=0$, so $k=-2$ or $k=1$.`, S`Check: $\|(1,2,2)\|=3$ and $\|(-2,-1,2)\|=3$ \checkmark. The graph of $\|\cdot\|^2$ meets the level $9$ twice.`],
    ans: S`$k=1$ or $k=-2$` },
  { title: "Equidistant point on an axis", q: S`Find the point on the $x_2$-axis that is equally far from $A(1,2,3)$ and $B(-1,4,1)$.`,
    fig: VF(scene3(5, { segs: [seg3([[1, 2, 3], [0, 1, 0], [-1, 4, 1]], { color: "red", dash: true })], points: [pt3([1, 2, 3], "A", { color: "black" }), pt3([-1, 4, 1], "B", { color: "black" }), pt3([0, 1, 0], "X(0, 1, 0)", { color: "green", dy: 16 })] }), 4.8),
    steps: [S`A point of the $x_2$-axis is $X(0,y,0)$. Set the \emph{squared} distances equal: $1+(y-2)^2+9=1+(y-4)^2+1$.`, S`Expand: $y^2-4y+14=y^2-8y+18$, so $4y=4$ and $y=1$.`, S`Check: $d(X,A)^2=1+1+9=11=1+9+1=d(X,B)^2$ \checkmark.`],
    ans: S`$X(0,1,0)$, at distance $\sqrt{11}$ from both` },
  { title: "A sphere", q: S`A sphere has centre $C(1,-2,3)$ and passes through $P(3,-1,1)$. Find its equation and decide whether $Q(2,0,4)$ is inside, on or outside it.`,
    fig: VF({ view: { xmin: -4.2, xmax: 4.2, ymin: -3.6, ymax: 3.8 }, grid: false, axes: false, segs: [{ pts: ring(0, 0, 3), color: "blue", w: 2 }, { pts: ring(0, 0, 3, 180, 360).map(([x, y]) => [x, y * 0.3]), color: "blue", w: 1.2 }, { pts: ring(0, 0, 3, 0, 180).map(([x, y]) => [x, y * 0.3]), color: "blue", w: 1, dash: true }], arrows: [{ from: [0, 0], to: [2.12, 2.12], color: "red", label: "r = 3", off: -14 }, { from: [0, 0], to: [-1.4, 1.95], color: "green", label: "√6", off: 14 }], points: [{ x: 0, y: 0, label: "C", dx: 6, dy: 16 }, { x: 2.12, y: 2.12, label: "P" }, { x: -1.4, y: 1.95, label: "Q", color: "green", dx: -14 }] }, 4.6),
    steps: [S`$r=\|\vec p-\vec c\|=\|(2,1,-2)\|=\sqrt{9}=3$.`, S`Equation: $(x_1-1)^2+(x_2+2)^2+(x_3-3)^2=9$.`, S`$\|\vec q-\vec c\|=\|(1,2,1)\|=\sqrt6<3$, so $Q$ is inside.`],
    ans: S`$(x_1-1)^2+(x_2+2)^2+(x_3-3)^2=9$; $Q$ is inside` },
  { title: "The reverse triangle inequality", q: S`Use the triangle inequality to prove $\|\vec x-\vec y\|\ge\big|\,\|\vec x\|-\|\vec y\|\,\big|$, and check it for $\vec x=(3,4)$, $\vec y=(-6,8)$.`,
    fig: VF({ view: { xmin: -7, xmax: 4.5, ymin: -0.8, ymax: 9 }, step: 1, arrows: [{ from: [0, 0], to: [3, 4], vl: "x", off: 16 }, { from: [0, 0], to: [-6, 8], color: "red", vl: "y", off: -16 }, { from: [-6, 8], to: [3, 4], color: "green", label: "x − y", off: 16 }] }, 4.8),
    steps: [S`$\vec x=(\vec x-\vec y)+\vec y$, so $\|\vec x\|\le\|\vec x-\vec y\|+\|\vec y\|$, i.e. $\|\vec x\|-\|\vec y\|\le\|\vec x-\vec y\|$.`, S`Swapping the roles of $\vec x$ and $\vec y$ (and using $\|\vec y-\vec x\|=\|\vec x-\vec y\|$) gives $\|\vec y\|-\|\vec x\|\le\|\vec x-\vec y\|$. Together: $\big|\,\|\vec x\|-\|\vec y\|\,\big|\le\|\vec x-\vec y\|$.`, S`Check: $\|\vec x\|=5$, $\|\vec y\|=10$, $\|\vec x-\vec y\|=\|(9,-4)\|=\sqrt{97}\approx9.85\ge5$ \checkmark.`],
    ans: S`proved; $9.85\ge5$` },
  { title: "Who is most alike?", q: S`Scores (math, physics, chemistry): $A(80,70,90)$, $B(75,72,88)$, $C(60,95,70)$. Which two students are most alike, measured by distance?`,
    fig: VF({ view: { xmin: 55, xmax: 88, ymin: 62, ymax: 100 }, step: 5, axes: false, segs: [{ pts: [[80, 70], [75, 72]], color: "green", w: 2.4 }, { pts: [[80, 70], [60, 95], [75, 72]], color: "gray", dash: true }], points: [{ x: 80, y: 70, label: "A", color: "blue" }, { x: 75, y: 72, label: "B", color: "blue", dx: -14 }, { x: 60, y: 95, label: "C", color: "blue" }], texts: [{ x: 71, y: 64, t: "(math, physics) view", color: "gray" }] }, 4.4),
    steps: [S`$\|A-B\|=\|(5,-2,2)\|=\sqrt{33}\approx5.74$.`, S`$\|A-C\|=\|(20,-25,20)\|=\sqrt{1425}\approx37.75$, $\|B-C\|=\|(15,-23,18)\|=\sqrt{1078}\approx32.83$.`, S`The smallest distance is $A$--$B$. (The figure shows only two of the three components; the distances use all three.)`],
    ans: S`$A$ and $B$ ($\approx5.74$)` },
];

const PROBLEMS = [
  { level: 1, q: S`Find $\|(-2,3,6)\|$ and $\|(1,-1,1,-1,2)\|$.`, ans: S`$7$ and $\sqrt8=2\sqrt2$` },
  { level: 1, q: S`Find the distance between $A(4,-3,1)$ and $B(-2,0,-1)$.`, ans: S`$7$` },
  { level: 1, q: S`Find the unit vector in the direction of $(-5,12)$.`, ans: S`$\left(-\tfrac5{13},\tfrac{12}{13}\right)$` },
  { level: 2, q: S`Find the vector of length $10$ pointing opposite to $(2,-1,2)$.`, ans: S`$\left(-\tfrac{20}3,\tfrac{10}3,-\tfrac{20}3\right)$` },
  { level: 2, q: S`Find every scalar $c$ with $\|c(2,-3,6)\|=21$.`, ans: S`$c=\pm3$` },
  { level: 2, q: S`Show, using only lengths, that $A(1,2,-1)$, $B(3,3,1)$, $C(2,0,-1)$ form a right triangle. Where is the right angle, and what is the area?`, ans: S`$AB=3$, $AC=\sqrt5$, $BC=\sqrt{14}=\sqrt{9+5}$: right angle at $A$; area $\tfrac{3\sqrt5}{2}$`,
    fig: VF(scene3(4, { segs: [seg3([[1, 2, -1], [3, 3, 1], [2, 0, -1], [1, 2, -1]], { color: "blue", w: 2 })], points: [pt3([1, 2, -1], "A", { color: "black" }), pt3([3, 3, 1], "B", { color: "black" }), pt3([2, 0, -1], "C", { color: "black" })] }), 4.4) },
  { level: 2, q: S`Find every point on the $x_3$-axis at distance $5$ from $P(3,4,2)$. Explain why there is only one.`, ans: S`$(0,0,2)$ only: $9+16+(z-2)^2=25$ forces $z=2$ (the axis just touches the sphere)` },
  { level: 2, space: 4, q: S`Find the unit vector at $225^\circ$ from the positive $x_1$-axis and the vector of length $4$ in that direction. Draw both.`, ans: S`$\left(-\tfrac{\sqrt2}2,-\tfrac{\sqrt2}2\right)$; $(-2\sqrt2,-2\sqrt2)$`, fig: gridT({ xmin: -4, xmax: 2, ymin: -4, ymax: 2 }) },
  { level: 3, space: 5, q: S`Prove that $\hat x=\vec x/\|\vec x\|$ is a unit vector, and that it is the \emph{only} unit vector of the form $c\vec x$ with $c>0$.`, ans: S`$\|\hat x\|=\tfrac1{\|\vec x\|}\|\vec x\|=1$; if $\|c\vec x\|=c\|\vec x\|=1$ with $c>0$ then $c=1/\|\vec x\|$` },
  { level: 3, space: 5, q: S`On the line $L:\ \vec x=(1,2,0)+t(1,0,1)$, find the points at distance $\sqrt{20}$ from $Q(2,0,5)$. Then find the point of $L$ closest to $Q$ by minimising the squared distance.`, ans: S`$\|\cdot\|^2=2t^2-12t+30$: $t=1,5$ give $(2,2,1)$ and $(6,2,5)$; minimum at $t=3$: $(4,2,3)$, distance $\sqrt{12}$`,
    fig: VF(scene3(5, { segs: [line3([1, 2, 0], [1, 0, 1], -0.5, 6, "violet", 2.2)], points: [pt3([2, 0, 5], "Q", { color: "red" })] }), 4.6) },
  { level: 3, space: 5, q: S`Prove the \emph{parallelogram law} $\|\vec x+\vec y\|^2+\|\vec x-\vec y\|^2=2\|\vec x\|^2+2\|\vec y\|^2$ in $\mathbb R^n$, and say what it means for the diagonals and sides of a parallelogram.`, ans: S`Componentwise $(x_i+y_i)^2+(x_i-y_i)^2=2x_i^2+2y_i^2$; sum over $i$. The squares of the diagonals add up to the squares of the four sides`,
    fig: VF({ view: { xmin: -0.5, xmax: 6.5, ymin: -0.5, ymax: 3.6 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [4, 0.5], [5.5, 3.2], [1.5, 2.7]], fill: "#ecfdf5", stroke: "green" }], arrows: [{ from: [0, 0], to: [4, 0.5], vl: "x", off: 16 }, { from: [0, 0], to: [1.5, 2.7], color: "red", vl: "y", off: -16 }], segs: [{ pts: [[0, 0], [5.5, 3.2]], color: "gray", dash: true }, { pts: [[4, 0.5], [1.5, 2.7]], color: "gray", dash: true }] }, 4.4) },
  { level: 3, space: 5, q: S`Find every unit vector $\vec u\in\mathbb R^2$ with $\|\vec u-(1,0)\|=1$. (Write $\vec u=(\cos\theta,\sin\theta)$.) Sketch the two circles involved.`, ans: S`$2-2\cos\theta=1$, $\cos\theta=\tfrac12$: $\vec u=\left(\tfrac12,\pm\tfrac{\sqrt3}2\right)$`, fig: gridT({ xmin: -2, xmax: 3, ymin: -2, ymax: 2 }) },
  { level: 3, space: 5, q: S`A new customer rates four films $\vec x=(3,1,4,2)$. Customers $A(4,1,5,1)$, $B(1,2,4,4)$, $C(3,3,2,2)$ rated the same films. Which customer is the nearest neighbour of $\vec x$? Show all three distances.`, ans: S`$d_A=\sqrt3$, $d_B=3$, $d_C=\sqrt8$: nearest is $A$` },
];

export const WS = {
  code: "1.3",
  title: "Length, Distance and Unit Vectors",
  bigideas: S`The \textbf{norm} $\|\vec x\|=\sqrt{x_1^2+\dots+x_n^2}$ measures length; it is Pythagoras extended to any number of components. Distance is the norm of a difference, $d(A,B)=\|\vec b-\vec a\|$. Dividing a nonzero vector by its norm gives a \textbf{unit vector} --- pure direction --- so every vector is a length times a direction. Distance also measures how similar two lists of data are.`,
  goals: ["Compute norms in ℝⁿ and distances between points.", "Use the properties of the norm, including the triangle inequality, in short proofs.", "Normalise vectors and build vectors of a given length and direction (including from an angle in ℝ²).", "Solve problems with unknowns inside norms; write equations of circles and spheres.", "Use distance to compare data vectors."],
  curriculum: "Geometry of ℝⁿ — length, distance and unit vectors",
  vocab: [["Norm", "$\\|\\vec x\\|=\\sqrt{x_1^2+\\dots+x_n^2}$"], ["Distance", "$d(A,B)=\\|\\vec b-\\vec a\\|$"], ["Unit vector", "a vector of norm 1"], ["Normalising", "dividing a nonzero vector by its norm"], ["Triangle inequality", "$\\|\\vec x+\\vec y\\|\\le\\|\\vec x\\|+\\|\\vec y\\|$"]],
  hook: S`A drone flies $3$ km east, $4$ km north and climbs $1.2$ km. How far is it from its start in a straight line? Guess first, then compute it after Section 1.`,
  concepts: NOTES,
  summary: [
    S`$\|\vec x\|=\sqrt{x_1^2+\dots+x_n^2}$; $\|\vec x\|=0\iff\vec x=\vec 0$; $\|c\vec x\|=|c|\,\|\vec x\|$; $\|\vec x+\vec y\|\le\|\vec x\|+\|\vec y\|$.`,
    S`$d(A,B)=\|\vec b-\vec a\|$; sphere/circle: $\|\vec x-\vec c\|=r$.`,
    S`Unit vector along $\vec x$: $\hat x=\vec x/\|\vec x\|$; length $L$ along $\vec x$: $L\hat x$; opposite: $-L\hat x$.`,
    S`In $\mathbb R^2$: unit vectors are $(\cos\theta,\sin\theta)$ and $\vec x=\|\vec x\|(\cos\theta,\sin\theta)$.`,
    S`Work with squared norms to avoid square roots; take roots at the end.`,
  ],
  tips: ["$\\|\\vec x+\\vec y\\|$ is \\emph{not} $\\|\\vec x\\|+\\|\\vec y\\|$ in general --- the triangle inequality is only an inequality.", "$\\|c\\vec x\\|=|c|\\,\\|\\vec x\\|$: the absolute value matters when $c<0$.", "Square every component, including the negative ones: $(-4)^2=16$.", "The zero vector has no direction, so it cannot be normalised.", "When an unknown sits inside a norm, square both sides and check every solution.", "Distances use \\emph{all} components, even when a figure shows only two."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

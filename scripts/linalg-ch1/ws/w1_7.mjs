// LINALG1 Worksheet 1.7 — Projections and Distances
// Self-contained: complete notes (definitions, theorems with proofs, figures), 9 worked examples with figures,
// 13 practice problems at three levels, answer key.
import { gridT } from "./figT.mjs";
import { scene3, a3, pt3, seg3, patch3, line3 } from "../vecfig.mjs";
import { S, VF, def, thm, side, pr } from "./wkit.mjs";

/** small right-angle marker at corner c between unit directions a and b (2-D) */
const rmark = (c, a, b, s = 0.3) => ({ pts: [[c[0] + s * a[0], c[1] + s * a[1]], [c[0] + s * (a[0] + b[0]), c[1] + s * (a[1] + b[1])], [c[0] + s * b[0], c[1] + s * b[1]]], color: "gray", w: 1.2 });
const unit = ([x, y]) => { const n = Math.hypot(x, y); return [x / n, y / n]; };

// ── notes figures ──
const PV = [2.98, 0.596];
const F_PROJ = VF({ view: { xmin: -0.5, xmax: 6.4, ymin: -0.8, ymax: 3.6 }, grid: false, axes: false, segs: [{ pts: [[-0.5, -0.1], [6.4, 1.28]], color: "gray", dash: true, w: 1 }, rmark(PV, unit([-5, -1]), unit([-0.48, 2.404]))], arrows: [{ from: [0, 0], to: [5, 1], color: "blue", vl: "v", off: 16 }, { from: [0, 0], to: [2.5, 3], color: "red", vl: "u", off: -16 }, { from: [0, 0], to: PV, color: "green", w: 3.6, label: "proj", off: 14 }, { from: PV, to: [2.5, 3], color: "amber", label: "perp", off: 14 }] }, 5.4);
const F_CLOSE = VF({ view: { xmin: -0.5, xmax: 6.6, ymin: -0.8, ymax: 3.6 }, grid: false, axes: false, segs: [{ pts: [[-0.5, -0.1], [6.6, 1.32]], color: "blue", w: 2 }, { pts: [[2.5, 3], [1.2, 0.24]], color: "gray", dash: true, w: 1.2 }, { pts: [[2.5, 3], [4.8, 0.96]], color: "gray", dash: true, w: 1.2 }, { pts: [[2.5, 3], PV], color: "green", w: 2.6 }, rmark(PV, unit([5, 1]), unit([-0.48, 2.404]))], points: [{ x: 2.5, y: 3, label: "U", color: "red" }, { x: 1.2, y: 0.24, label: "tv", dx: -6, dy: 16, anchor: "end" }, { x: 4.8, y: 0.96, label: "tv", dy: 16 }, { x: PV[0], y: PV[1], label: "proj", color: "green", dy: 18 }] }, 5.4);
const F_LINE = VF(scene3(3.5, { segs: [line3([0, 0.5, 0.5], [1, 1, 0.6], -0.6, 3, "blue", 2.4), seg3([[1.95, 2.45, 1.67], [2.4, 1.2, 3]], { color: "green", w: 2.2 }), seg3([[0, 0.5, 0.5], [2.4, 1.2, 3]], { color: "gray", dash: true, w: 1.2 })], points: [pt3([0, 0.5, 0.5], "P", { color: "black", dx: -14 }), pt3([2.4, 1.2, 3], "Q", { color: "red" }), pt3([1.95, 2.45, 1.67], "closest point", { color: "green", dy: 16 })] }), 5.4);
const F_PLANE = VF(scene3(3.5, { polys: [patch3([1.5, 1.6, 0.8], [1, 0, 0], [0, 1, 0], 1.5, "#dbeafe", "blue", 0.6)], segs: [seg3([[1.5, 1.6, 0.8], [1.5, 1.6, 3]], { color: "green", w: 2.4 })], arrows: [a3([0.5, 0.4, 0.8], [0.5, 0.4, 1.9], { color: "red", vl: "n", off: -14 })], points: [pt3([1.5, 1.6, 3], "Q", { color: "red" }), pt3([1.5, 1.6, 0.8], "foot F", { color: "green", dy: 18 })] }), 5.4);
const F_REFL = VF({ view: { xmin: -3.6, xmax: 3.6, ymin: -2.8, ymax: 3.2 }, grid: false, axes: false, segs: [{ pts: [[-3.5, 0], [3.5, 0]], color: "blue", w: 2.6 }, { pts: [[2, 2.4], [2, -2.4]], color: "gray", dash: true, w: 1.2 }], arrows: [{ from: [0, 0], to: [2, 2.4], color: "red", vl: "x", off: -16 }, { from: [0, 0], to: [2, 0], color: "green", w: 3.4, label: "projection", off: 14 }, { from: [0, 0], to: [2, -2.4], color: "violet", label: "reflection", off: 14 }, { from: [-2.4, 0], to: [-2.4, 1.3], color: "amber", vl: "n", off: -14 }], texts: [{ x: -2.4, y: -0.45, t: "plane (edge-on)", color: "blue" }] }, 5.2);
const F_SKEW = VF(scene3(3.6, { segs: [line3([2, 0, 0], [0, 1, 0], -0.2, 3.6, "blue", 2.4), line3([0, 1.5, 2.2], [1, 0, 0], -0.4, 3.4, "red", 2.4), seg3([[2, 1.5, 0], [2, 1.5, 2.2]], { color: "green", w: 2.6 })], points: [pt3([2, 3.6, 0], "L₁", { color: "blue" }), pt3([3.4, 1.5, 2.2], "L₂", { color: "red", dx: -16 }), pt3([2, 1.5, 1.1], "shortest", { color: "green" })] }), 5.2);

const NOTES = [
  { h: "1. Projecting one vector onto another",
    lead: S`${def("projection", S`For $\vec v\ne\vec 0$, the \textbf{projection} of $\vec u$ onto $\vec v$ and the \textbf{perpendicular part} are
\[\operatorname{proj}_{\vec v}\vec u=\frac{\vec u\cdot\vec v}{\|\vec v\|^2}\,\vec v,\qquad\operatorname{perp}_{\vec v}\vec u=\vec u-\operatorname{proj}_{\vec v}\vec u.\]`)}
The projection is the "shadow" of $\vec u$ on the line through $\vec v$ when light falls at right angles to that line (green); the perpendicular part closes the right triangle (amber).`,
    fig: F_PROJ, w: 0.56,
    body: S`\textbf{Where the formula comes from.} The shadow is some multiple $t\vec v$, and the leftover $\vec u-t\vec v$ must be orthogonal to $\vec v$: $(\vec u-t\vec v)\cdot\vec v=0$ gives $t=\dfrac{\vec u\cdot\vec v}{\vec v\cdot\vec v}$.

\textbf{Scalar projection.} The signed length of the shadow is $\dfrac{\vec u\cdot\vec v}{\|\vec v\|}=\|\vec u\|\cos\theta$; it is negative when the angle is obtuse (the shadow points against $\vec v$). The projection depends only on the \emph{line} of $\vec v$: replacing $\vec v$ by $c\vec v$ gives the same answer.` },

  { h: "2. The orthogonal decomposition --- and why it gives the closest point",
    lead: thm("orthogonal decomposition", S`For $\vec v\ne\vec 0$, every $\vec u$ splits uniquely as $\vec u=\vec u_\parallel+\vec u_\perp$ with $\vec u_\parallel$ a multiple of $\vec v$ and $\vec u_\perp\perp\vec v$; namely $\vec u_\parallel=\operatorname{proj}_{\vec v}\vec u$ and $\vec u_\perp=\operatorname{perp}_{\vec v}\vec u$.`) + thm("closest point", S`Among all points $t\vec v$ of the line, the projection is the closest to $\vec u$: $\ \|\vec u-t\vec v\|\ge\|\operatorname{perp}_{\vec v}\vec u\|$, with equality only for $\operatorname{proj}_{\vec v}\vec u$.`),
    fig: F_CLOSE, w: 0.58,
    body: S`\pf{Write $\vec u-t\vec v=\operatorname{perp}_{\vec v}\vec u+(\operatorname{proj}_{\vec v}\vec u-t\vec v)$. The first part is orthogonal to $\vec v$ and the second is a multiple of $\vec v$, so by Pythagoras $\|\vec u-t\vec v\|^2=\|\operatorname{perp}_{\vec v}\vec u\|^2+\|\operatorname{proj}_{\vec v}\vec u-t\vec v\|^2$, which is smallest exactly when the second term is $0$.}
In the figure, every other point $t\vec v$ is joined to $U$ by a longer (dashed) segment. This "shortest distance is perpendicular" principle drives every distance formula below and, later in the course, least-squares data fitting.` },

  { h: "3. Distance from a point to a line",
    lead: S`Let the line be $\vec x=\vec p+t\vec d$ and the point $Q$. Project $\overrightarrow{PQ}$ onto $\vec d$:
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \textbf{closest point} $\ \vec p+\operatorname{proj}_{\vec d}\overrightarrow{PQ}$;
\item \textbf{distance} $\ \big\|\operatorname{perp}_{\vec d}\overrightarrow{PQ}\big\|$.
\end{itemize}
In $\mathbb R^3$ there is also a cross-product shortcut, because $\|\overrightarrow{PQ}\times\vec d\|=\|\overrightarrow{PQ}\|\|\vec d\|\sin\theta$ and the distance is $\|\overrightarrow{PQ}\|\sin\theta$:
\[\text{distance}=\frac{\|\overrightarrow{PQ}\times\vec d\|}{\|\vec d\|}.\]`,
    fig: F_LINE, w: 0.55 },

  { h: "4. Distance from a point to a plane",
    lead: thm("point-to-plane distance", S`The distance from $Q$ to the plane $\vec n\cdot\vec x=d$ is
\[D=\frac{|\vec n\cdot\vec q-d|}{\|\vec n\|},\]
and the \textbf{foot of the perpendicular} is
\[\vec f=\vec q-\frac{\vec n\cdot\vec q-d}{\|\vec n\|^2}\,\vec n.\]`),
    fig: F_PLANE, w: 0.58,
    body: S`\pf{Take any point $P$ of the plane. The shortest path from $Q$ to the plane runs along the normal, so $D$ is the length of $\operatorname{proj}_{\vec n}\overrightarrow{PQ}$, which is $\dfrac{|\vec n\cdot(\vec q-\vec p)|}{\|\vec n\|}=\dfrac{|\vec n\cdot\vec q-d|}{\|\vec n\|}$ because $\vec n\cdot\vec p=d$. Subtracting that projection from $\vec q$ lands on the plane at $F$.}
\textbf{In $\mathbb R^2$} the same formula gives the distance from $(q_1,q_2)$ to the line $ax_1+bx_2=d$: $\ \dfrac{|aq_1+bq_2-d|}{\sqrt{a^2+b^2}}$.

\textbf{Parallel planes} $\vec n\cdot\vec x=d_1$ and $\vec n\cdot\vec x=d_2$ (same $\vec n$!) are $\dfrac{|d_1-d_2|}{\|\vec n\|}$ apart.` },

  { h: "5. Projection onto a plane, and reflection",
    lead: S`For a plane through the origin with normal $\vec n$, remove the normal part:
\[\operatorname{proj}_{\text{plane}}\vec x=\vec x-\operatorname{proj}_{\vec n}\vec x=\vec x-\frac{\vec x\cdot\vec n}{\|\vec n\|^2}\vec n.\]
To \textbf{reflect} $\vec x$ in the plane, remove the normal part \emph{twice}:
\[\operatorname{refl}(\vec x)=\vec x-2\,\frac{\vec x\cdot\vec n}{\|\vec n\|^2}\vec n.\]
The figure shows the plane edge-on: the projection lands on the plane, and the reflection is the mirror image.`,
    fig: F_REFL, w: 0.56,
    body: S`For a plane not through the origin, use the foot-of-perpendicular formula of Section 4 for the projection; the reflection of $Q$ is $\vec q+2(\vec f-\vec q)=2\vec f-\vec q$.` },

  { h: "6. Distance between skew lines",
    lead: S`For $L_1:\vec p+t\vec d_1$ and $L_2:\vec q+s\vec d_2$ that are not parallel, the vector $\vec m=\vec d_1\times\vec d_2$ is orthogonal to both lines. The shortest segment joining them runs along $\vec m$, so its length is the projection of $\overrightarrow{PQ}$ onto $\vec m$:
\[\text{distance}=\frac{|\overrightarrow{PQ}\cdot(\vec d_1\times\vec d_2)|}{\|\vec d_1\times\vec d_2\|}.\]
If this is $0$, the lines meet. (Two parallel planes containing the lines, both with normal $\vec m$, are exactly this far apart.)`,
    fig: F_SKEW, w: 0.56 },
];

// ── worked examples ──
const EXAMPLES = [
  { title: "Projection and perpendicular part", q: S`For $\vec u=(1,1,3)$ and $\vec v=(2,1,2)$, find the scalar projection, $\operatorname{proj}_{\vec v}\vec u$ and $\operatorname{perp}_{\vec v}\vec u$, and check the decomposition.`,
    fig: VF(scene3(3, { arrows: [a3([0, 0, 0], [2, 1, 2], { color: "blue", w: 3.4, vl: "proj", off: 14 }), a3([0, 0, 0], [1, 1, 3], { color: "red", vl: "u", off: -14 }), a3([2, 1, 2], [1, 1, 3], { color: "amber", label: "perp", off: -14 })] }), 4.6),
    steps: [S`$\vec u\cdot\vec v=2+1+6=9$, $\|\vec v\|=3$: scalar projection $9/3=3$.`, S`$\operatorname{proj}_{\vec v}\vec u=\tfrac99(2,1,2)=(2,1,2)$, and $\operatorname{perp}_{\vec v}\vec u=(1,1,3)-(2,1,2)=(-1,0,1)$.`, S`Check: $(-1,0,1)\cdot(2,1,2)=-2+0+2=0$ \checkmark, and $(2,1,2)+(-1,0,1)=\vec u$ \checkmark.`],
    ans: S`$3$; $(2,1,2)$; $(-1,0,1)$` },
  { title: "A box on a ramp", q: S`A box on a ramp with direction $\vec d=(3,4)$ feels gravity $\vec g=(0,-50)$ N. Split $\vec g$ into the part along the ramp and the part pressing into it, and find their sizes.`,
    fig: VF({ view: { xmin: -4, xmax: 4.6, ymin: -5.4, ymax: 3.6 }, grid: false, axes: false, segs: [{ pts: [[-3.6, -4.8], [2.7, 3.6]], color: "gray", w: 3 }], arrows: [{ from: [0, 0], to: [0, -5], color: "red", label: "g", off: 12 }, { from: [0, 0], to: [-2.4, -3.2], color: "green", label: "along ramp", off: -16 }, { from: [-2.4, -3.2], to: [0, -5], color: "amber", label: "into ramp", off: 14 }] }, 4.4),
    steps: [S`$\vec g\cdot\vec d=-200$ and $\|\vec d\|^2=25$, so $\operatorname{proj}_{\vec d}\vec g=-8(3,4)=(-24,-32)$: $40$ N down the ramp.`, S`$\operatorname{perp}_{\vec d}\vec g=(0,-50)-(-24,-32)=(24,-18)$: $30$ N into the ramp.`, S`Check: $(24,-18)\cdot(3,4)=0$ \checkmark{} and $40^2+30^2=50^2$ \checkmark. (Figure scaled by $\tfrac1{10}$.)`],
    ans: S`$(-24,-32)$, 40 N along; $(24,-18)$, 30 N into the ramp` },
  { title: "Closest point on a line in space", q: S`Find the point of $L:\ \vec x=(1,2,0)+t(1,-2,2)$ closest to $Q(4,2,3)$, and the distance. Check with the cross-product formula.`,
    fig: VF(scene3(4, { segs: [line3([1, 2, 0], [1, -2, 2], -0.4, 1.9, "blue", 2.4), seg3([[4, 2, 3], [2, 0, 2]], { color: "green", w: 2.4 })], points: [pt3([1, 2, 0], "P", { color: "black", dx: -14 }), pt3([4, 2, 3], "Q", { color: "red" }), pt3([2, 0, 2], "(2, 0, 2)", { color: "green", dx: -8, anchor: "end" })] }), 4.6),
    steps: [S`$\overrightarrow{PQ}=(3,0,3)$, $\vec d=(1,-2,2)$, $\overrightarrow{PQ}\cdot\vec d=9$, $\|\vec d\|^2=9$, so $t=1$: closest point $(1,2,0)+(1,-2,2)=(2,0,2)$.`, S`$\operatorname{perp}=(3,0,3)-(1,-2,2)=(2,2,1)$, so the distance is $\sqrt{9}=3$.`, S`Cross check: $(3,0,3)\times(1,-2,2)=(6,-3,-6)$, norm $9$; $9/3=3$ \checkmark.`],
    ans: S`closest point $(2,0,2)$; distance $3$` },
  { title: "Point to plane, and the foot", q: S`Find the distance from $Q(3,-2,5)$ to the plane $x_1-2x_2+2x_3=-1$, and the foot of the perpendicular.`,
    fig: VF(scene3(4, { polys: [patch3([1, 2, 1], [2, 1, 0], [0, 1, 1], 1.3, "#dbeafe", "blue", 0.55)], segs: [seg3([[3, -2, 5], [1, 2, 1]], { color: "green", w: 2.4 })], points: [pt3([3, -2, 5], "Q", { color: "red" }), pt3([1, 2, 1], "F(1, 2, 1)", { color: "green" })] }), 4.6),
    steps: [S`$\vec n=(1,-2,2)$, $\|\vec n\|=3$; $\vec n\cdot\vec q-d=3+4+10+1=18$.`, S`Distance $D=\dfrac{18}{3}=6$.`, S`Foot: $\vec f=\vec q-\tfrac{18}{9}\vec n=(3,-2,5)-(2,-4,4)=(1,2,1)$. Check: $1-4+2=-1$ \checkmark.`],
    ans: S`$D=6$; foot $(1,2,1)$` },
  { title: "Project onto a plane, then reflect", q: S`Project $\vec x=(3,1,-1)$ onto the plane $2x_1+x_2-2x_3=0$, and reflect $\vec x$ in that plane.`,
    fig: VF({ view: { xmin: -3.2, xmax: 3.6, ymin: -2.8, ymax: 2.9 }, grid: false, axes: false, segs: [{ pts: [[-3, 0], [3.4, 0]], color: "blue", w: 2.6 }, { pts: [[1.5, 2.2], [1.5, -2.2]], color: "gray", dash: true, w: 1.2 }], arrows: [{ from: [0, 0], to: [1.5, 2.2], color: "red", label: "x", off: -12 }, { from: [0, 0], to: [1.5, 0], color: "green", w: 3.2, label: "(1, 0, 1)", off: 14 }, { from: [0, 0], to: [1.5, -2.2], color: "violet", label: "(−1, −1, 3)", off: 14 }], texts: [{ x: -2.0, y: 0.4, t: "plane (edge-on)", color: "blue" }] }, 4.4),
    steps: [S`$\vec n=(2,1,-2)$, $\|\vec n\|^2=9$, $\vec x\cdot\vec n=6+1+2=9$, so $\operatorname{proj}_{\vec n}\vec x=(2,1,-2)$.`, S`Projection onto the plane: $(3,1,-1)-(2,1,-2)=(1,0,1)$. Check: $2+0-2=0$ \checkmark.`, S`Reflection: $(3,1,-1)-2(2,1,-2)=(-1,-1,3)$.`],
    ans: S`projection $(1,0,1)$; reflection $(-1,-1,3)$` },
  { title: "How far apart are two parallel planes?", q: S`Find the distance between $3x_1-4x_2+12x_3=5$ and $3x_1-4x_2+12x_3=44$.`,
    fig: VF({ view: { xmin: -3, xmax: 3, ymin: -0.8, ymax: 3.8 }, grid: false, axes: false, segs: [{ pts: [[-3, 0], [3, 0]], color: "blue", w: 2.6 }, { pts: [[-3, 3], [3, 3]], color: "violet", w: 2.6 }, { pts: [[0.6, 0], [0.6, 3]], color: "green", w: 2.2 }], texts: [{ x: -1.6, y: 0.35, t: "… = 5", color: "blue" }, { x: -1.6, y: 3.3, t: "… = 44", color: "violet" }, { x: 1.4, y: 1.5, t: "3", color: "green", size: 16 }] }, 4.4),
    steps: [S`The normals are equal, $\vec n=(3,-4,12)$, so the planes are parallel; $\|\vec n\|=\sqrt{9+16+144}=13$.`, S`Distance $=\dfrac{|44-5|}{13}=\dfrac{39}{13}=3$.`, S`(Equivalently: take $P$ on the first plane, e.g. $x_3=\tfrac5{12}$, and measure its distance to the second.)`],
    ans: S`$3$` },
  { title: "Distance between skew lines", q: S`Find the distance between $L_1:\ \vec x=t(1,2,2)$ and $L_2:\ \vec x=(3,0,3)+s(2,1,-2)$.`,
    fig: VF(scene3(4, { segs: [line3([0, 0, 0], [1, 2, 2], -0.3, 1.8, "blue", 2.4), line3([3, 0, 3], [2, 1, -2], -1.4, 1, "red", 2.4)], points: [pt3([0, 0, 0], "L₁", { color: "blue", dx: -14 }), pt3([3, 0, 3], "Q", { color: "red" })] }), 4.4),
    steps: [S`$\vec m=\vec d_1\times\vec d_2=(1,2,2)\times(2,1,-2)=(-4-2,\ 4+2,\ 1-4)=(-6,6,-3)$, $\|\vec m\|=9$.`, S`$\overrightarrow{PQ}=(3,0,3)$ with $P=O$, and $\overrightarrow{PQ}\cdot\vec m=-18+0-9=-27$.`, S`Distance $=\dfrac{|-27|}{9}=3$. It is not $0$, so the lines are skew.`],
    ans: S`$3$` },
  { title: "Area of a triangle by projection", q: S`Find the height from $C$ and the area of the triangle $A(0,0)$, $B(6,2)$, $C(2,5)$ using a projection, and check the area another way.`,
    fig: VF({ view: { xmin: -0.6, xmax: 6.6, ymin: -0.6, ymax: 5.6 }, step: 1, polys: [{ pts: [[0, 0], [6, 2], [2, 5]], fill: "#eef2ff", stroke: "blue" }], segs: [{ pts: [[2, 5], [3.3, 1.1]], color: "amber", dash: true, w: 2 }, rmark([3.3, 1.1], unit([-6, -2]), unit([-1.3, 3.9]), 0.25)], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 4 }, { x: 6, y: 2, label: "B" }, { x: 2, y: 5, label: "C" }, { x: 3.3, y: 1.1, label: "(3.3, 1.1)", color: "amber", dy: 18 }] }, 4.6),
    steps: [S`$\overrightarrow{AB}=(6,2)$, $\overrightarrow{AC}=(2,5)$; $\operatorname{proj}_{\overrightarrow{AB}}\overrightarrow{AC}=\tfrac{22}{40}(6,2)=(3.3,1.1)$.`, S`Height $h=\|(2,5)-(3.3,1.1)\|=\|(-1.3,3.9)\|=\sqrt{16.9}\approx4.11$; base $\|\overrightarrow{AB}\|=\sqrt{40}$.`, S`Area $=\tfrac12\sqrt{40}\sqrt{16.9}=\tfrac12\sqrt{676}=13$. Check: $\tfrac12|6\cdot5-2\cdot2|=13$ \checkmark.`],
    ans: S`$h=\sqrt{16.9}\approx4.11$; area $13$` },
  { title: "Closest approach of a ship", q: S`A ship leaves the harbour at $O$ and sails along $\vec d=(4,3)$ (km per hour). A lighthouse stands at $Q(10,0)$. How close does the ship get to the lighthouse, and when?`,
    fig: VF({ view: { xmin: -0.6, xmax: 11, ymin: -1, ymax: 7.2 }, step: 1, segs: [{ pts: [[0, 0], [9.6, 7.2]], color: "blue", w: 2.4 }, { pts: [[10, 0], [6.4, 4.8]], color: "green", w: 2.2 }, rmark([6.4, 4.8], unit([-4, -3]), unit([3.6, -4.8]), 0.35)], points: [{ x: 0, y: 0, label: "O", dx: -14, dy: 4 }, { x: 10, y: 0, label: "lighthouse", color: "red", dx: -6, dy: -8, anchor: "end" }, { x: 6.4, y: 4.8, label: "t = 1.6 h", color: "green", dx: -8, anchor: "end" }] }, 4.6),
    steps: [S`The ship is at $t\vec d$. The closest point is $\operatorname{proj}_{\vec d}\vec q$: $\vec q\cdot\vec d=40$, $\|\vec d\|^2=25$, so $t=1.6$ and the point is $(6.4,4.8)$.`, S`Distance $=\|(10,0)-(6.4,4.8)\|=\|(3.6,-4.8)\|=\sqrt{12.96+23.04}=6$ km.`, S`So after $1.6$ h ($1$ h $36$ min) the ship is $6$ km from the lighthouse; before and after, it is farther away.`],
    ans: S`6 km, at $t=1.6$ h, at $(6.4,4.8)$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find $\operatorname{proj}_{\vec v}\vec u$ and $\operatorname{perp}_{\vec v}\vec u$ for $\vec u=(3,4)$, $\vec v=(2,-1)$.`, ans: S`$(0.8,-0.4)$ and $(2.2,4.4)$` },
  { level: 1, q: S`Find the scalar projection of $(1,2,3)$ onto $(2,-1,2)$.`, ans: S`$\tfrac{6}{3}=2$` },
  { level: 1, q: S`Find the distance from $(1,0,-1)$ to the plane $2x_1+2x_2-x_3=9$.`, ans: S`$\tfrac{|2+0+1-9|}{3}=2$` },
  { level: 2, space: 4, q: S`Split $\vec u=(7,1)$ into a part parallel to $\vec v=(3,4)$ and a part perpendicular to it. Draw $\vec v$, $\vec u$ and both parts.`, ans: S`$(3,4)+(4,-3)$`, fig: gridT({ xmin: -1, xmax: 8, ymin: -4, ymax: 5 }) },
  { level: 2, space: 4, q: S`Find the distance from $Q(5,3)$ to the line $3x_1+4x_2=2$ and the closest point of the line. Draw them.`, ans: S`$5$; closest point $(2,-1)$`, fig: gridT({ xmin: -2, xmax: 6, ymin: -3, ymax: 5 }) },
  { level: 2, q: S`Find the point of $\vec x=(1,0,0)+t(2,1,2)$ closest to $Q(2,5,1)$, and the distance.`, ans: S`$(3,1,2)$; $\sqrt{18}=3\sqrt2$`,
    fig: VF(scene3(4.5, { segs: [line3([1, 0, 0], [2, 1, 2], -0.4, 1.8, "blue", 2.4)], points: [pt3([2, 5, 1], "Q", { color: "red" })] }), 4.4) },
  { level: 2, q: S`Find the foot of the perpendicular from $Q(4,0,6)$ to the plane $x_1-x_2=1$, and the distance.`, ans: S`$(2.5,1.5,6)$; $\tfrac{3}{\sqrt2}\approx2.12$` },
  { level: 2, q: S`Find the distance between the planes $2x_1+x_2-2x_3=4$ and $4x_1+2x_2-4x_3=-10$. (Careful: make the normals equal first.)`, ans: S`second is $2x_1+x_2-2x_3=-5$: $\tfrac{9}{3}=3$` },
  { level: 3, space: 5, q: S`For $\vec v\ne\vec 0$, expand $f(t)=\|\vec u-t\vec v\|^2$ as a quadratic in $t$. Show that it is smallest at $t=\dfrac{\vec u\cdot\vec v}{\|\vec v\|^2}$ and that the minimum value is $\|\operatorname{perp}_{\vec v}\vec u\|^2$.`, ans: S`$f(t)=\|\vec v\|^2t^2-2(\vec u\cdot\vec v)t+\|\vec u\|^2$; vertex at $t=\tfrac{\vec u\cdot\vec v}{\|\vec v\|^2}$; $f=\|\vec u\|^2-\tfrac{(\vec u\cdot\vec v)^2}{\|\vec v\|^2}=\|\operatorname{perp}\|^2$` },
  { level: 3, space: 5, q: S`Reflect $Q(3,0,2)$ in the plane $2x_1-x_2+2x_3=1$. Also give the foot of the perpendicular and the distance from $Q$ to the plane.`, ans: S`foot $(1,1,0)$, distance $3$, reflection $(-1,2,-2)$`,
    fig: VF(scene3(3.5, { polys: [patch3([1, 1, 0], [1, 2, 0], [0, 2, 1], 1.1, "#dbeafe", "blue", 0.55)], points: [pt3([3, 0, 2], "Q", { color: "red" })] }), 4.2) },
  { level: 3, space: 5, q: S`Find the distance between the skew lines $L_1:\ \vec x=(1,0,0)+t(1,1,1)$ and $L_2:\ \vec x=(0,2,1)+s(1,-1,0)$.`, ans: S`$\vec m=(1,1,-2)$, $\overrightarrow{PQ}\cdot\vec m=-1$: $\tfrac1{\sqrt6}\approx0.408$` },
  { level: 3, space: 5, q: S`Prove that projection onto $\vec v$ is linear --- $\operatorname{proj}_{\vec v}(\vec u+\vec w)=\operatorname{proj}_{\vec v}\vec u+\operatorname{proj}_{\vec v}\vec w$ and $\operatorname{proj}_{\vec v}(c\vec u)=c\operatorname{proj}_{\vec v}\vec u$ --- and that projecting twice changes nothing: $\operatorname{proj}_{\vec v}(\operatorname{proj}_{\vec v}\vec u)=\operatorname{proj}_{\vec v}\vec u$.`, ans: S`Use the linearity of the dot product in the coefficient $\tfrac{\vec u\cdot\vec v}{\|\vec v\|^2}$; for the last part, $\operatorname{proj}_{\vec v}(k\vec v)=k\vec v$` },
  { level: 3, space: 5, q: S`A drone flies along $\vec x=(0,0,100)+t(2,2,-1)$ (metres, $t$ in seconds). A camera sits at $C(70,50,70)$. When is the drone closest to the camera, where is it then, and how far away is it?`, ans: S`$t=30$ s, at $(60,60,70)$, distance $\|(10,-10,0)\|=10\sqrt2\approx14.1$ m`,
    fig: VF(scene3(80, { segs: [line3([0, 0, 100], [2, 2, -1], 0, 45, "blue", 2.4)], points: [pt3([70, 50, 70], "camera", { color: "red" })] }), 4.4) },
];

export const WS = {
  code: "1.7",
  title: "Projections and Distances",
  bigideas: S`Every vector splits into a part along a given direction and a part perpendicular to it: $\vec u=\operatorname{proj}_{\vec v}\vec u+\operatorname{perp}_{\vec v}\vec u$, with $\operatorname{proj}_{\vec v}\vec u=\frac{\vec u\cdot\vec v}{\|\vec v\|^2}\vec v$. The projection is the \textbf{closest point} on the line, so the perpendicular part measures \textbf{distance}. That single idea gives the distance from a point to a line or a plane, the foot of a perpendicular, projections and reflections in planes, and the distance between skew lines.`,
  goals: ["Compute projections, scalar projections and perpendicular parts, and decompose vectors and forces.", "Prove that the projection gives the closest point.", "Find distances and closest points from a point to a line (ℝ² and ℝ³) and to a plane.", "Project vectors onto planes and reflect them; find distances between parallel planes and skew lines.", "Apply projections to motion, forces and areas."],
  curriculum: "Geometry of ℝⁿ — projections and distances",
  vocab: [["Projection", "$\\operatorname{proj}_{\\vec v}\\vec u=\\frac{\\vec u\\cdot\\vec v}{\\|\\vec v\\|^2}\\vec v$"], ["Perpendicular part", "$\\vec u-\\operatorname{proj}_{\\vec v}\\vec u$"], ["Scalar projection", "$\\frac{\\vec u\\cdot\\vec v}{\\|\\vec v\\|}=\\|\\vec u\\|\\cos\\theta$"], ["Foot of the perpendicular", "the closest point of a line or plane"], ["Reflection", "$\\vec x-2\\operatorname{proj}_{\\vec n}\\vec x$"]],
  hook: S`The sun is straight overhead and a $2$ m pole leans along $(1,0,1)$ from its base. How long is its shadow on the flat ground? Now tilt the pole to $(1,1,2)$ (same length): longer or shorter? Section 1 turns "shadow" into a formula.`,
  concepts: NOTES,
  summary: [
    S`$\operatorname{proj}_{\vec v}\vec u=\dfrac{\vec u\cdot\vec v}{\|\vec v\|^2}\vec v$; $\operatorname{perp}_{\vec v}\vec u=\vec u-\operatorname{proj}_{\vec v}\vec u\perp\vec v$; scalar projection $\dfrac{\vec u\cdot\vec v}{\|\vec v\|}$.`,
    S`The projection is the closest point of the line; distances are lengths of perpendicular parts.`,
    S`Point to line: closest point $\vec p+\operatorname{proj}_{\vec d}\overrightarrow{PQ}$; in $\mathbb R^3$, distance $\dfrac{\|\overrightarrow{PQ}\times\vec d\|}{\|\vec d\|}$.`,
    S`Point to plane: $\dfrac{|\vec n\cdot\vec q-d|}{\|\vec n\|}$, foot $\vec q-\dfrac{\vec n\cdot\vec q-d}{\|\vec n\|^2}\vec n$; parallel planes: $\dfrac{|d_1-d_2|}{\|\vec n\|}$ with equal normals.`,
    S`Onto a plane through $O$: $\vec x-\operatorname{proj}_{\vec n}\vec x$; reflection: $\vec x-2\operatorname{proj}_{\vec n}\vec x$; skew lines: $\dfrac{|\overrightarrow{PQ}\cdot(\vec d_1\times\vec d_2)|}{\|\vec d_1\times\vec d_2\|}$.`,
  ],
  tips: ["The denominator is $\\|\\vec v\\|^2$ for the projection vector but $\\|\\vec v\\|$ for the scalar projection.", "$\\operatorname{proj}_{\\vec v}\\vec u$ and $\\operatorname{proj}_{\\vec u}\\vec v$ are different vectors.", "In the point-to-plane formula use $\\vec n\\cdot\\vec q-d$, with the plane written as $\\vec n\\cdot\\vec x=d$.", "Before using the parallel-plane formula, scale the equations so the normals are identical.", "A distance is never negative: keep the absolute value.", "Always check: the perpendicular part must have zero dot product with the direction."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

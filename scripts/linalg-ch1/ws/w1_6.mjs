// LINALG1 Worksheet 1.6 — Normal Vectors and Scalar Equations of Planes
// Self-contained: complete notes (definitions, procedures, figures), 9 worked examples with figures,
// 13 practice problems at three levels, answer key.
import { scene3, a3, pt3, seg3, patch3, tri3, line3 } from "../vecfig.mjs";
import { S, VF, def, thm, side, pr } from "./wkit.mjs";

// ── notes figures ──
const F_NORMAL = VF(scene3(3.5, { polys: [patch3([1.5, 1.5, 1], [1, 0, 0], [0, 1, 0.3], 1.4, "#dbeafe", "blue", 0.6)], arrows: [a3([1.5, 1.5, 1], [2.4, 2.6, 1.33], { color: "green", w: 2.4, label: "x − p", off: 14 }), a3([1.5, 1.5, 1], [1.5, 0.96, 2.8], { color: "red", w: 3, vl: "n", off: -14 })], points: [pt3([1.5, 1.5, 1], "P", { color: "black", dx: -14, dy: 14 }), pt3([2.4, 2.6, 1.33], "X", { color: "black" })] }), 5.6);
const F_R2 = VF({ view: { xmin: -1, xmax: 4.5, ymin: -1, ymax: 5 }, step: 1, segs: [{ pts: [[-0.5, 5], [2.5, -1]], color: "violet", w: 2.4 }], arrows: [{ from: [1, 2], to: [3, 3], color: "red", label: "n = (2, 1)", off: -14 }], points: [{ x: 1, y: 2, label: "(1, 2)", dx: -8, dy: -6, anchor: "end" }], texts: [{ x: 3.1, y: 0.4, t: "2x₁ + x₂ = 4", color: "violet" }] }, 4.8);
const F_TRI = VF(scene3(3.6, { polys: [{ ...tri3(3, 2, 2, "#ecfdf5", "green"), op: 0.85 }], points: [pt3([3, 0, 0], "(3, 0, 0)", { color: "black", dx: -10, anchor: "end" }), pt3([0, 2, 0], "(0, 2, 0)", { color: "black", dy: 16 }), pt3([0, 0, 2], "(0, 0, 2)", { color: "black" })] }), 5.4);
const F_ANG = VF({ view: { xmin: -3.2, xmax: 3.2, ymin: -2.2, ymax: 2.6 }, grid: false, axes: false, segs: [{ pts: [[-3, -1.2], [3, 1.2]], color: "blue", w: 2.6 }, { pts: [[-2, 2.2], [2, -2.2]], color: "violet", w: 2.6 }], arrows: [{ from: [0, 0], to: [-0.6, 1.5], color: "blue", label: "n₁", off: -12 }, { from: [0, 0], to: [1.48, 1.35], color: "violet", label: "n₂", off: 12 }], arcs: [{ at: [0, 0], r: 0.75, a: 42.4, b: 111.8, label: "θ" }], texts: [{ x: 2.6, y: 1.55, t: "plane 1", color: "blue" }, { x: -2.0, y: 2.45, t: "plane 2", color: "violet" }] }, 5.2);
const F_MEET = VF(scene3(3.2, { polys: [patch3([1, 1.6, 1.2], [1, 0, 0], [0, 1, 0], 1.3, "#dbeafe", "blue", 0.6), patch3([1, 1.6, 1.2], [0, 1, 0], [0, 0, 1], 1.3, "#fef3c7", "amber", 0.6)], segs: [line3([1, 1.6, 1.2], [0, 1, 0], -1.6, 1.6, "red", 3)], texts: [{ x: pr([1, 3.4, 1.2])[0] + 0.15, y: pr([1, 3.4, 1.2])[1] + 0.25, t: "direction n₁ × n₂", color: "red" }] }), 5.4);
const F_PIERCE = VF(scene3(3.4, { polys: [patch3([1, 1.5, 1.5], [1, 0, 0], [0, 1, 0], 1.5, "#dbeafe", "blue", 0.55)], segs: [line3([0, 0, 0], [2, 3, 3], 0, 0.5, "violet", 2.4, true), line3([0, 0, 0], [2, 3, 3], 0.5, 1.05, "violet", 2.6)], points: [pt3([1, 1.5, 1.5], "meeting point", { color: "red" })] }), 5.2);

const NOTES = [
  { h: "1. A plane from a point and a normal",
    lead: S`${def("normal vector; scalar equation", S`A nonzero vector $\vec n$ is a \textbf{normal} to a plane if it is orthogonal to every vector lying in the plane. The plane through $P$ with normal $\vec n=(a,b,c)$ is the set of points $X$ with
\[\vec n\cdot(\vec x-\vec p)=0\iff ax_1+bx_2+cx_3=d,\quad d=\vec n\cdot\vec p.\]`)}
\emph{Why:} $X$ is in the plane exactly when the arrow $\overrightarrow{PX}=\vec x-\vec p$ lies in the plane, i.e. is orthogonal to $\vec n$ (figure).`,
    fig: F_NORMAL, w: 0.56,
    body: S`\textbf{Reading it backwards.} In $ax_1+bx_2+cx_3=d$ the coefficients \emph{are} a normal: $\vec n=(a,b,c)$. Any nonzero multiple is also a normal. To test a point, substitute it; to find $d$, substitute any known point.

\textbf{Example.} Through $P(2,1,-1)$ with $\vec n=(3,-2,4)$: $d=6-2-4=0$, so the plane is $3x_1-2x_2+4x_3=0$ --- it passes through the origin because $d=0$.

\textbf{Sides of a plane.} For a point not on the plane, $\vec n\cdot\vec x>d$ on the side the normal points to and $\vec n\cdot\vec x<d$ on the other side.` },

  { h: "2. The same idea in $\\mathbb R^2$ and in $\\mathbb R^n$",
    lead: S`In $\mathbb R^2$ the equation $ax_1+bx_2=d$ is a \emph{line}, and $(a,b)$ is a normal to it. For $2x_1+x_2=4$ the normal $(2,1)$ is perpendicular to the line, while the direction vector is $(1,-2)$ (or $(-b,a)$ in general).

${def("hyperplane", S`In $\mathbb R^n$, the set $a_1x_1+\dots+a_nx_n=d$ (with $\vec a\ne\vec 0$) is a \textbf{hyperplane} with normal $\vec a$: a line in $\mathbb R^2$, a plane in $\mathbb R^3$, a 3-dimensional "flat" in $\mathbb R^4$.`)}`,
    fig: F_R2, w: 0.6,
    body: S`One linear equation always cuts the dimension by one: a hyperplane in $\mathbb R^n$ needs $n-1$ parameters in vector form. This is why a single equation in $\mathbb R^3$ is a plane and not a line --- a line in $\mathbb R^3$ needs \emph{two} equations (Section 5).` },

  { h: "3. Converting between vector and scalar forms",
    lead: S`\textbf{Vector form $\to$ scalar form.} For $\vec x=\vec p+s\vec u+t\vec v$, a normal must be orthogonal to both directions, so take
\[\vec n=\vec u\times\vec v,\qquad d=\vec n\cdot\vec p.\]
The same works for three points: $\vec n=\overrightarrow{PQ}\times\overrightarrow{PR}$.

\textbf{Scalar form $\to$ vector form.} Solve the equation for one variable whose coefficient is not $0$ and let the other two be the parameters. For $x_1-2x_2+5x_3=4$: $x_1=4+2s-5t$ with $x_2=s$, $x_3=t$, so
\[\vec x=(4,0,0)+s(2,1,0)+t(-5,0,1).\]`,
    body: S`\textbf{Check both ways.} The directions must be orthogonal to the normal: $(1,-2,5)\cdot(2,1,0)=0$ and $(1,-2,5)\cdot(-5,0,1)=0$ \checkmark, and the point must satisfy the equation.` },

  { h: "4. Intercepts and sketching",
    lead: S`Where the plane crosses the axes:
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item $x_1$-intercept: set $x_2=x_3=0$, so $x_1=d/a$;
\item similarly $x_2=d/b$ and $x_3=d/c$.
\end{itemize}
Joining the three intercepts gives the triangle of the plane that lies in the first octant, a good sketch. The figure shows $2x_1+3x_2+3x_3=6$ with intercepts $3$, $2$, $2$.`,
    fig: F_TRI, w: 0.55,
    body: S`If a coefficient is $0$, the plane is parallel to that axis: $x_1+x_2=2$ contains every vertical line through a point of the line $x_1+x_2=2$ in the floor. If $d=0$, all intercepts are at $O$ --- choose other points to sketch.` },

  { h: "5. Two planes: parallel, perpendicular, the angle, and where they meet",
    lead: thm("relative position of two planes", S`Let the planes have normals $\vec n_1$, $\vec n_2$.
\begin{itemize}[leftmargin=*,itemsep=0pt]
\item \textbf{Parallel} (or identical) $\iff\vec n_1\parallel\vec n_2$.
\item \textbf{Perpendicular} $\iff\vec n_1\cdot\vec n_2=0$.
\item The \textbf{angle} between the planes is the acute angle $\theta$ with $\cos\theta=\dfrac{|\vec n_1\cdot\vec n_2|}{\|\vec n_1\|\|\vec n_2\|}$.
\end{itemize}`),
    fig: F_ANG, w: 0.6,
    body: side(S`Viewed edge-on (figure above), each plane is a line and its normal sticks out at right angles, so the angle between the normals equals the angle between the planes (or its supplement --- hence the absolute value).

\textbf{The line of intersection.} Two non-parallel planes meet in a line. Its direction lies in both planes, so it is orthogonal to both normals:
\[\vec d=\vec n_1\times\vec n_2.\]
For a point, set one variable to $0$ (one that keeps the system solvable) and solve the two equations for the other two.`, F_MEET, 0.55) },

  { h: "6. A line and a plane",
    lead: S`Substitute the parametric equations of the line into the plane's equation. You get one equation in $t$:
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item exactly one solution: the line \textbf{meets} the plane in one point;
\item no solution ($0=$ nonzero): the line is \textbf{parallel} to the plane;
\item every $t$ works ($0=0$): the line \textbf{lies in} the plane.
\end{itemize}
Quick test: the line is parallel to the plane (or in it) exactly when its direction is orthogonal to the normal, $\vec d\cdot\vec n=0$.`,
    fig: F_PIERCE, w: 0.56 },
];

// ── worked examples ──
const EXAMPLES = [
  { title: "From a point and a normal, then a test", q: S`Find the scalar equation of the plane through $P(1,-2,4)$ with normal $\vec n=(3,-1,2)$. Is $Q(2,1,5)$ on the plane? If not, which side is it on?`,
    fig: VF(scene3(4, { polys: [patch3([1, -2, 4], [1, 3, 0], [0, 2, 1], 0.9, "#dbeafe", "blue", 0.55)], arrows: [a3([1, -2, 4], [2.5, -2.5, 5], { color: "red", vl: "n", off: -14 })], points: [pt3([1, -2, 4], "P", { color: "black", dx: -14 }), pt3([2, 1, 5], "Q", { color: "green" })] }), 4.6),
    steps: [S`$d=\vec n\cdot\vec p=3+2+8=13$, so the plane is $3x_1-x_2+2x_3=13$.`, S`$Q$: $6-1+10=15\ne13$, so $Q$ is not on the plane.`, S`$15>13$, so $Q$ is on the side the normal $\vec n$ points to.`],
    ans: S`$3x_1-x_2+2x_3=13$; $Q$ is not on it (on the side of $\vec n$)` },
  { title: "The plane through three points", q: S`Find the scalar equation of the plane through $A(1,0,2)$, $B(2,1,0)$, $C(0,3,1)$.`,
    fig: VF(scene3(3.5, { polys: [{ pts: [pr([1, 0, 2]), pr([2, 1, 0]), pr([0, 3, 1])], fill: "#ecfdf5", stroke: "green" }], arrows: [a3([1, 4 / 3, 1], [1.5, 1.6, 1.4], { color: "red", label: "n", off: -12 })], points: [pt3([1, 0, 2], "A", { color: "black", dx: -14 }), pt3([2, 1, 0], "B", { color: "black", dy: 16 }), pt3([0, 3, 1], "C", { color: "black" })] }), 4.6),
    steps: [S`$\overrightarrow{AB}=(1,1,-2)$, $\overrightarrow{AC}=(-1,3,-1)$, and $\vec n=\overrightarrow{AB}\times\overrightarrow{AC}=(-1+6,\ 2+1,\ 3+1)=(5,3,4)$.`, S`$d=\vec n\cdot\vec a=5+0+8=13$: the plane is $5x_1+3x_2+4x_3=13$.`, S`Check $B$: $10+3+0=13$ \checkmark; $C$: $0+9+4=13$ \checkmark.`],
    ans: S`$5x_1+3x_2+4x_3=13$` },
  { title: "Scalar form to vector form", q: S`Write $x_1+2x_2-3x_3=6$ in vector form, and check your direction vectors against the normal.`,
    fig: VF(scene3(6, { polys: [{ ...tri3(6, 3, -2, "#fef3c7", "amber"), op: 0.85 }], points: [pt3([6, 0, 0], "(6, 0, 0)", { color: "black", dx: 8, dy: 4 }), pt3([0, 3, 0], "(0, 3, 0)", { color: "black", dy: -8 }), pt3([0, 0, -2], "(0, 0, −2)", { color: "black" })] }), 4.6),
    steps: [S`Solve for $x_1$: $x_1=6-2x_2+3x_3$. Let $x_2=s$, $x_3=t$.`, S`$\vec x=(6-2s+3t,\ s,\ t)=(6,0,0)+s(-2,1,0)+t(3,0,1)$.`, S`Check: $(1,2,-3)\cdot(-2,1,0)=0$ and $(1,2,-3)\cdot(3,0,1)=0$ \checkmark. The intercepts $(6,0,0)$, $(0,3,0)$, $(0,0,-2)$ give the sketch.`],
    ans: S`$\vec x=(6,0,0)+s(-2,1,0)+t(3,0,1)$` },
  { title: "Sketch, then pierce", q: S`Sketch $4x_1+6x_2+3x_3=12$ using its intercepts. Where does the line $\vec x=t(1,1,1)$ meet this plane?`,
    fig: VF(scene3(4, { polys: [{ ...tri3(3, 2, 4, "#ecfdf5", "green"), op: 0.75 }], segs: [line3([0, 0, 0], [1, 1, 1], 0, 0.923, "violet", 2.2, true), line3([0, 0, 0], [1, 1, 1], 0.923, 1.7, "violet", 2.4)], points: [pt3([3, 0, 0], "3", { color: "black", dx: -12 }), pt3([0, 2, 0], "2", { color: "black", dy: 16 }), pt3([0, 0, 4], "4", { color: "black" }), pt3([12 / 13, 12 / 13, 12 / 13], "", { color: "red" })] }), 4.6),
    steps: [S`Intercepts: $x_1=12/4=3$, $x_2=12/6=2$, $x_3=12/3=4$; join $(3,0,0)$, $(0,2,0)$, $(0,0,4)$.`, S`Substitute $\vec x=(t,t,t)$: $4t+6t+3t=12$, so $t=\tfrac{12}{13}$.`, S`The meeting point is $\left(\tfrac{12}{13},\tfrac{12}{13},\tfrac{12}{13}\right)$ (red), inside the sketched triangle.`],
    ans: S`intercepts $3,2,4$; meets at $\left(\tfrac{12}{13},\tfrac{12}{13},\tfrac{12}{13}\right)$` },
  { title: "The angle between two planes", q: S`Find the angle between the planes $2x_1-x_2+x_3=4$ and $x_1+x_2+2x_3=1$.`,
    fig: VF({ view: { xmin: -3.2, xmax: 3.2, ymin: -2.2, ymax: 2.4 }, grid: false, axes: false, segs: [{ pts: [[-3, -0.8], [3, 0.8]], color: "blue", w: 2.6 }, { pts: [[-0.6, -2.22], [0.6, 2.22]], color: "violet", w: 2.6 }], arcs: [{ at: [0, 0], r: 0.8, a: 14.9, b: 74.9, label: "60°" }], texts: [{ x: 2.3, y: 1.15, t: "2x₁ − x₂ + x₃ = 4", color: "blue" }, { x: -1.4, y: 2.25, t: "x₁ + x₂ + 2x₃ = 1", color: "violet" }] }, 4.6),
    steps: [S`$\vec n_1=(2,-1,1)$, $\vec n_2=(1,1,2)$, $\vec n_1\cdot\vec n_2=2-1+2=3$.`, S`$\|\vec n_1\|=\|\vec n_2\|=\sqrt6$, so $\cos\theta=\dfrac{|3|}{6}=\dfrac12$.`, S`$\theta=60^\circ$. (Edge-on sketch: the planes cross at $60^\circ$.)`],
    ans: S`$60^\circ$` },
  { title: "Parallel, perpendicular or neither", q: S`Classify each pair: $\Pi_1:\ 3x_1-6x_2+9x_3=2$, $\Pi_2:\ -x_1+2x_2-3x_3=5$, $\Pi_3:\ 2x_1+x_2=7$.`,
    fig: VF({ view: { xmin: -3, xmax: 3.4, ymin: -2.4, ymax: 2.6 }, grid: false, axes: false, segs: [{ pts: [[-3, -1.2], [3, 1.2]], color: "blue", w: 2.4 }, { pts: [[-3, -0.2], [3, 2.2]], color: "blue", w: 2.4, dash: true }, { pts: [[-0.8, 2], [0.8, -2]], color: "red", w: 2.4 }], texts: [{ x: 2.4, y: 0.6, t: "Π₁", color: "blue" }, { x: 2.0, y: 2.3, t: "Π₂ ∥ Π₁", color: "blue" }, { x: 1.15, y: -2.05, t: "Π₃ ⟂ Π₁", color: "red" }] }, 4.6),
    steps: [S`$\vec n_1=(3,-6,9)=-3(-1,2,-3)=-3\vec n_2$: $\Pi_1\parallel\Pi_2$. They are distinct, since $\Pi_1$ is $-x_1+2x_2-3x_3=-\tfrac23$, not $5$.`, S`$\vec n_1\cdot\vec n_3=6-6+0=0$: $\Pi_1\perp\Pi_3$, and so also $\Pi_2\perp\Pi_3$.`],
    ans: S`$\Pi_1\parallel\Pi_2$ (distinct); $\Pi_3$ is perpendicular to both` },
  { title: "Where two planes meet", q: S`Find a vector equation of the line where $x_1-x_2+x_3=2$ and $2x_1+x_2-x_3=1$ meet.`,
    fig: VF(scene3(3.5, { polys: [patch3([1, 1, 2], [1, 1, 0], [0, 1, 1], 1.2, "#dbeafe", "blue", 0.5), patch3([1, 1, 2], [0, 1, 1], [1, -2, 0], 1, "#fef3c7", "amber", 0.5)], segs: [line3([1, 0, 1], [0, 1, 1], -0.6, 2.6, "red", 3)], points: [pt3([1, 0, 1], "(1, 0, 1)", { color: "red", dx: -8, anchor: "end" })] }), 4.6),
    steps: [S`Direction: $\vec n_1\times\vec n_2=(1,-1,1)\times(2,1,-1)=(1-1,\ 2+1,\ 1+2)=(0,3,3)$; use $(0,1,1)$.`, S`A point: adding the equations gives $3x_1=3$, so $x_1=1$; then $-x_2+x_3=1$. Take $x_2=0$, $x_3=1$: $(1,0,1)$.`, S`Check: $1-0+1=2$ and $2+0-1=1$ \checkmark. Line: $\vec x=(1,0,1)+t(0,1,1)$.`],
    ans: S`$\vec x=(1,0,1)+t(0,1,1)$` },
  { title: "A line meets a plane --- or not", q: S`Where does $L_1:\ \vec x=(1,2,-1)+t(2,-1,3)$ meet $3x_1+x_2-x_3=4$? What about $L_2:\ \vec x=(0,1,1)+t(1,-1,2)$?`,
    fig: VF(scene3(3.5, { polys: [patch3([0, 2, -2], [1, 0, 3], [0, 1, 1], 1.6, "#dbeafe", "blue", 0.5)], segs: [line3([1, 2, -1], [2, -1, 3], -1.4, 0.4, "violet", 2.4)], points: [pt3([-1, 3, -4], "(−1, 3, −4)", { color: "red", dx: -8, anchor: "end" })] }), 4.6),
    steps: [S`$L_1$: $3(1+2t)+(2-t)-(-1+3t)=6+2t=4$, so $t=-1$ and the point is $(-1,3,-4)$. Check: $-3+3+4=4$ \checkmark.`, S`$L_2$: $\vec d\cdot\vec n=(1,-1,2)\cdot(3,1,-1)=3-1-2=0$, so $L_2$ is parallel to the plane.`, S`Its point $(0,1,1)$ gives $0+1-1=0\ne4$, so $L_2$ is not in the plane: no meeting point.`],
    ans: S`$L_1$ meets it at $(-1,3,-4)$; $L_2$ is parallel to it and never meets it` },
  { title: "A plane perpendicular to two planes", q: S`Find the plane through $P(1,1,1)$ that is perpendicular to both $x_1+x_2=3$ and $x_2-x_3=0$.`,
    fig: VF(scene3(3, { arrows: [a3([0, 0, 0], [1, 1, 0], { color: "blue", label: "n₁", off: 14 }), a3([0, 0, 0], [0, 1, -1], { color: "amber", label: "n₂", off: 14 }), a3([0, 0, 0], [-1, 1, 1], { color: "red", w: 3, label: "n = n₁ × n₂", off: -16 })] }), 4.4),
    steps: [S`Perpendicular to a plane means containing its normal direction, so the new normal $\vec n$ must be orthogonal to $\vec n_1=(1,1,0)$ and $\vec n_2=(0,1,-1)$.`, S`$\vec n=\vec n_1\times\vec n_2=(1\cdot(-1)-0\cdot1,\ 0\cdot0-1\cdot(-1),\ 1\cdot1-1\cdot0)=(-1,1,1)$.`, S`$d=\vec n\cdot\vec p=-1+1+1=1$: the plane is $-x_1+x_2+x_3=1$. Check $\vec n\cdot\vec n_1=0$, $\vec n\cdot\vec n_2=0$ \checkmark.`],
    ans: S`$-x_1+x_2+x_3=1$` },
];

const PROBLEMS = [
  { level: 1, q: S`Write the scalar equation of the plane through $(2,0,-3)$ with normal $(1,-4,5)$.`, ans: S`$x_1-4x_2+5x_3=-13$` },
  { level: 1, q: S`Give a normal vector and the three intercepts of $2x_1-x_2+4x_3=8$, and sketch the plane.`, ans: S`$\vec n=(2,-1,4)$; $(4,0,0)$, $(0,-8,0)$, $(0,0,2)$`,
    fig: VF(scene3(4.5, {}), 4) },
  { level: 1, q: S`Is $(1,-1,2)$ on the plane $3x_1+x_2-x_3=0$?`, ans: S`Yes: $3-1-2=0$` },
  { level: 2, q: S`Convert $\vec x=(1,2,0)+s(2,0,1)+t(1,-1,3)$ to a scalar equation.`, ans: S`$\vec n=(1,-5,-2)$: $x_1-5x_2-2x_3=-9$` },
  { level: 2, q: S`Find the scalar equation of the plane through $A(1,1,1)$, $B(2,0,3)$, $C(0,2,0)$. What is special about this plane?`, ans: S`$x_1+x_2=2$; it is vertical (parallel to the $x_3$-axis)`,
    fig: VF(scene3(3.5, { points: [pt3([1, 1, 1], "A", { color: "black" }), pt3([2, 0, 3], "B", { color: "black" }), pt3([0, 2, 0], "C", { color: "black" })] }), 4.2) },
  { level: 2, q: S`Sketch $3x_1+2x_2+6x_3=6$ using its intercepts.`, ans: S`intercepts $(2,0,0)$, $(0,3,0)$, $(0,0,1)$`,
    fig: VF(scene3(3.6, {}), 4) },
  { level: 2, q: S`Find the plane through $(3,-1,2)$ parallel to $x_1+4x_2-x_3=7$.`, ans: S`$x_1+4x_2-x_3=-3$` },
  { level: 2, q: S`Find the angle between the planes $x_1+x_2+x_3=1$ and $2x_1+x_2-2x_3=5$.`, ans: S`$\cos\theta=\tfrac{1}{3\sqrt3}\approx0.192$, $\theta\approx78.9^\circ$` },
  { level: 3, space: 5, q: S`Find a vector equation of the line of intersection of $x_1+2x_2-x_3=1$ and $2x_1-x_2+x_3=4$. Check your point in both equations.`, ans: S`$\vec x=(0,5,9)+t(1,-3,-5)$ (other points are possible)` },
  { level: 3, space: 5, q: S`Show that the line $\vec x=(2,0,1)+t(1,1,-1)$ never meets the plane $x_1+2x_2+3x_3=13$. For which value of $d$ does the line lie in the plane $x_1+2x_2+3x_3=d$?`, ans: S`Substituting gives $5=13$ for every $t$ (the line is parallel); $d=5$`,
    fig: VF(scene3(4, { segs: [line3([2, 0, 1], [1, 1, -1], -1.5, 2, "violet", 2.4)] }), 4) },
  { level: 3, space: 5, q: S`Find the scalar equation of the plane that contains the line $\vec x=(1,0,-1)+t(1,2,1)$ and is perpendicular to the plane $x_1-x_2+x_3=3$.`, ans: S`$\vec n=(1,2,1)\times(1,-1,1)=(3,0,-3)$: $x_1-x_3=2$` },
  { level: 3, space: 5, q: S`Prove: if $P$ and $Q$ both lie on the plane $\vec n\cdot\vec x=d$, then $\overrightarrow{PQ}\perp\vec n$. Explain why this shows that $(a,b,c)$ is a normal to $ax_1+bx_2+cx_3=d$.`, ans: S`$\vec n\cdot(\vec q-\vec p)=d-d=0$; every vector in the plane is such a difference, so $\vec n$ is orthogonal to all of them` },
  { level: 3, space: 5, q: S`In $\mathbb R^4$, the hyperplane $H:\ 2x_1+x_2+3x_3+x_4=60$ describes the purchases that cost exactly \$60. Is $(10,10,10,10)$ on $H$? Find the point of $H$ on each axis, and write $H$ in vector form with three parameters.`, ans: S`No (cost 70); $(30,0,0,0)$, $(0,60,0,0)$, $(0,0,20,0)$, $(0,0,0,60)$; $\vec x=(0,60,0,0)+r(1,-2,0,0)+s(0,-3,1,0)+t(0,-1,0,1)$` },
];

export const WS = {
  code: "1.6",
  title: "Normal Vectors and Scalar Equations of Planes",
  bigideas: S`A plane in $\mathbb R^3$ is determined by one point and one \textbf{normal} vector: $\vec n\cdot(\vec x-\vec p)=0$, or $ax_1+bx_2+cx_3=d$ with $\vec n=(a,b,c)$. The coefficients \emph{are} the normal, so parallel planes, perpendicular planes, angles between planes and the direction of the line where two planes meet ($\vec n_1\times\vec n_2$) can all be read off the equations. In $\mathbb R^n$ one linear equation is a hyperplane.`,
  goals: ["Write scalar equations from a point and a normal, from vector form, or from three points.", "Convert scalar equations to vector form; find intercepts and sketch planes.", "Decide whether planes are parallel or perpendicular, and find the angle between them.", "Find the line of intersection of two planes and the intersection of a line with a plane.", "Recognise lines in ℝ² and hyperplanes in ℝⁿ as the same idea."],
  curriculum: "Geometry of ℝⁿ — normal vectors, planes and hyperplanes",
  vocab: [["Normal vector", "nonzero $\\vec n$ orthogonal to every vector in the plane"], ["Scalar equation", "$ax_1+bx_2+cx_3=d$"], ["Intercept", "where the plane crosses an axis"], ["Line of intersection", "direction $\\vec n_1\\times\\vec n_2$"], ["Hyperplane", "$\\vec a\\cdot\\vec x=d$ in $\\mathbb R^n$"]],
  hook: S`A sheet of glass is held so that a laser pointer perpendicular to it points along $(1,2,2)$, and the glass touches the point $(3,0,1)$. Write one equation that every point of the glass satisfies. Hint: if $X$ is on the glass, what angle does $\overrightarrow{PX}$ make with the laser?`,
  concepts: NOTES,
  summary: [
    S`Plane through $P$ with normal $\vec n=(a,b,c)$: $ax_1+bx_2+cx_3=d$, $d=\vec n\cdot\vec p$.`,
    S`Vector $\to$ scalar: $\vec n=\vec u\times\vec v$. Scalar $\to$ vector: solve for one variable, the other two are parameters.`,
    S`Intercepts $d/a$, $d/b$, $d/c$; a zero coefficient means the plane is parallel to that axis.`,
    S`Planes: parallel $\iff\vec n_1\parallel\vec n_2$; perpendicular $\iff\vec n_1\cdot\vec n_2=0$; $\cos\theta=\dfrac{|\vec n_1\cdot\vec n_2|}{\|\vec n_1\|\|\vec n_2\|}$; meeting line has direction $\vec n_1\times\vec n_2$.`,
    S`Line and plane: substitute; one solution / none / all $t$. Parallel test: $\vec d\cdot\vec n=0$.`,
  ],
  tips: ["The coefficients give a \\emph{normal}, not a direction vector in the plane.", "Parallel planes have parallel normals; perpendicular planes have orthogonal normals --- do not mix these up with the rules for lines.", "Use $|\\vec n_1\\cdot\\vec n_2|$ for the angle between planes so the answer is acute.", "When setting a variable to $0$ to find a point on the meeting line, make sure the remaining $2\\times2$ system has a solution.", "One equation in $\\mathbb R^3$ is a plane, not a line; a line needs two equations or a vector form.", "Always check a computed normal against \\emph{both} direction vectors."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

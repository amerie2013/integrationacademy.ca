// LINALG1 Worksheet 1.2 — Lines and Planes in Rⁿ
// Self-contained: complete notes (definitions, procedures, figures), 9 worked examples with figures,
// 13 practice problems at three levels, answer key.
import { gridT } from "./figT.mjs";
import { scene3, a3, pt3, seg3, patch3, line3 } from "../vecfig.mjs";
import { S, VF, def, thm, side, pr } from "./wkit.mjs";

// ── notes figures ──
const F_LINE = VF({ view: { xmin: -2.5, xmax: 7, ymin: -1.5, ymax: 4.5 }, step: 1, segs: [{ pts: [[-2.5, -0.75], [7, 4]], color: "violet", w: 2.4 }], arrows: [{ from: [1, 1], to: [3, 2], color: "red", vl: "d", off: 16 }, { from: [0, 0], to: [1, 1], color: "gray", w: 1.8, vl: "p", off: -14 }], points: [{ x: -1, y: 0, label: "t = −1", dx: -4, dy: -10, anchor: "end" }, { x: 1, y: 1, label: "P (t = 0)", dx: -6, dy: -10, anchor: "end" }, { x: 3, y: 2, label: "t = 1", dx: -6, dy: -10, anchor: "end" }, { x: 5, y: 3, label: "t = 2", dx: -6, dy: -10, anchor: "end" }] }, 6);
const F_SEG = VF(scene3(4, { segs: [line3([1, 3, 1], [2, -3, 2], -0.6, 1.6, "gray", 1.4, true), seg3([[1, 3, 1], [3, 0, 3]], { color: "violet", w: 3 })], points: [pt3([1, 3, 1], "A (t = 0)", { color: "black" }), pt3([3, 0, 3], "B (t = 1)", { color: "black", dx: -8, anchor: "end" }), pt3([2, 1.5, 2], "M (t = ½)", { color: "green" })] }), 5.8);
const F_R2 = VF({ view: { xmin: -3, xmax: 6, ymin: -1, ymax: 5 }, step: 1, segs: [{ pts: [[-3, -0.5], [6, 4]], color: "violet", w: 2.4 }, { pts: [[2, 2], [4, 2], [4, 3]], color: "amber", dash: true }], arrows: [{ from: [0, 1], to: [2, 2], color: "red", vl: "d", off: -16 }], texts: [{ x: 3, y: 1.55, t: "run 2", color: "amber" }, { x: 4.85, y: 2.5, t: "rise 1", color: "amber" }], points: [{ x: 0, y: 1, label: "(0, 1)", dx: -8, dy: -8, anchor: "end" }] }, 6);
// P = (2, 1, 1), u = (0, 1, 0.2), v = (0, −0.3, 1); the marked point is P + 1.5u + v = (2, 2.2, 2.3)
const F_PLANE = VF(scene3(4, { polys: [patch3([2, 1.6, 1.65], [0, 1, 0.2], [0, -0.3, 1], 1.9, "#dbeafe", "blue", 0.55)], segs: [seg3([[2, 1, 1], [2, 2.5, 1.3], [2, 2.2, 2.3]], { color: "violet", dash: true, w: 1.4 })], arrows: [a3([0, 0, 0], [2, 1, 1], { color: "gray", w: 1.6, vl: "p", off: 14 }), a3([2, 1, 1], [2, 2, 1.2], { color: "red", vl: "u", off: 14 }), a3([2, 1, 1], [2, 0.7, 2], { color: "green", vl: "v", off: -14 })], points: [pt3([2, 1, 1], "P", { color: "black", dx: -16, dy: 4 }), pt3([2, 2.2, 2.3], "s = 1.5, t = 1", { color: "violet", dx: 9, dy: -4 })] }), 6);
const F_PQR = VF(scene3(4, { polys: [patch3([2, 4 / 3, 2], [1, 0.5, -0.5], [0.5, 1.5, 0.5], 1.3, "#ecfdf5", "green", 0.55), { pts: [pr([1, 0, 2]), pr([3, 1, 1]), pr([2, 3, 3])], fill: "#fef3c7", stroke: "amber" }], arrows: [a3([1, 0, 2], [3, 1, 1], { color: "red", vl: "u", off: 14 }), a3([1, 0, 2], [2, 3, 3], { color: "blue", vl: "v", off: -14 })], points: [pt3([1, 0, 2], "P", { color: "black", dx: -14, dy: 0 }), pt3([3, 1, 1], "Q", { color: "black", dy: 16 }), pt3([2, 3, 3], "R", { color: "black" })] }), 6);
const F_SKEW = VF(scene3(4, { segs: [line3([3, 1, 0], [0, 1, 0], -2.5, 3, "blue", 2.6), line3([1, 1, 2.5], [1, 0, 0], -2, 3.5, "red", 2.6), seg3([[3, 1, 0], [3, 1, 2.5]], { dash: true, w: 1.2 })], points: [pt3([3, 4, 0], "L₁", { color: "blue" }), pt3([4.5, 1, 2.5], "L₂", { color: "red", dx: -14, dy: -8 })] }), 5.8);

const NOTES = [
  { h: "1. Lines: a point and a direction",
    lead: S`${def("line", S`The line through the point $P$ with \textbf{direction vector} $\vec d\ne\vec 0$ is the set of points $X$ whose position vectors are
\[\vec x=\vec p+t\vec d,\qquad t\in\mathbb R.\]
This is the \emph{vector equation}; $t$ is the \emph{parameter}.`)}
Each value of $t$ gives one point: $t=0$ gives $P$ itself, $t=1$ gives $P$ moved once by $\vec d$, negative $t$ goes backwards. The figure shows $\vec x=(1,1)+t(2,1)$.`,
    fig: F_LINE, w: 0.53,
    body: S`\textbf{Parametric equations.} Writing the vector equation one component at a time gives $x_i=p_i+t\,d_i$ for $i=1,\dots,n$. For example, $\vec x=(2,0,-1)+t(3,-1,4)$ means $x_1=2+3t$, $x_2=-t$, $x_3=-1+4t$.

\textbf{Equations are not unique.} Any point of the line can serve as $P$, and any nonzero multiple of $\vec d$ is also a direction vector. So $(1,1)+t(2,1)$ and $(5,3)+r(-4,-2)$ describe the same line. To compare two equations, check that the directions are parallel \emph{and} that a point of one lies on the other.

\textbf{Motion.} If $t$ is time, $\vec p+t\vec d$ describes an object starting at $P$ and moving by $\vec d$ every unit of time: $\vec d$ is its velocity.` },

  { h: "2. The line through two points, and segments",
    lead: S`Through distinct points $A$ and $B$, use $\vec d=\overrightarrow{AB}=\vec b-\vec a$:
\[\vec x=\vec a+t(\vec b-\vec a)=(1-t)\vec a+t\vec b.\]
The value $t=0$ gives $A$ and $t=1$ gives $B$.
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item $0\le t\le1$ gives exactly the \textbf{segment} $AB$ (purple);
\item $t=\tfrac12$ gives the midpoint, $t=\tfrac13$ the point one third of the way;
\item $t>1$ and $t<0$ give the rest of the line (dashed).
\end{itemize}`,
    fig: F_SEG, w: 0.55 },

  { h: "3. Lines in $\\mathbb R^2$: two descriptions",
    lead: S`In the plane a line also has a slope equation. To convert:
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item $x_2=mx_1+b$ $\Rightarrow$ the point $(0,b)$ and the direction $(1,m)$ (run 1, rise $m$), so $\vec x=(0,b)+t(1,m)$. Any multiple works: the figure shows $x_2=\tfrac12x_1+1$ with $\vec d=(2,1)$.
\item $\vec x=\vec p+t\vec d$ with $d_1\ne0$ $\Rightarrow$ slope $m=d_2/d_1$ through $P$.
\item $ax_1+bx_2=c$ $\Rightarrow$ direction $(b,-a)$, because moving by $(b,-a)$ changes $ax_1+bx_2$ by $ab-ba=0$.
\end{itemize}`,
    fig: F_R2, w: 0.55,
    body: S`\textbf{Why vector form?} The slope form only exists in $\mathbb R^2$ and fails for vertical lines; the vector form works for every line in every $\mathbb R^n$, including vertical lines ($\vec d=(0,1)$).` },

  { h: "4. Is a point on the line?",
    lead: S`$Q$ is on the line $\vec x=\vec p+t\vec d$ exactly when \emph{one} value of $t$ satisfies \emph{every} component of $\vec q=\vec p+t\vec d$.

\textbf{Procedure.} Solve the first usable component for $t$; substitute that $t$ into all the other components. If all of them hold, $Q$ is on the line; if one fails, it is not.

\textbf{Example.} Is $(7,-2,9)$ on $\vec x=(1,2,-3)+t(3,-2,6)$? From $x_1$: $1+3t=7$, $t=2$. Then $x_2=2-4=-2$ \checkmark{} and $x_3=-3+12=9$ \checkmark: yes, at $t=2$. Is $(7,-2,8)$? The same $t=2$ is forced and $x_3=9\ne8$: no.`,
    body: S`\textbf{Zero components.} If $d_i=0$, component $i$ contains no $t$; it simply requires $q_i=p_i$. For $\vec x=(4,1,0)+t(2,0,5)$, every point has $x_2=1$.` },

  { h: "5. Planes: a point and two directions",
    lead: S`${def("plane", S`If $\vec u$ and $\vec v$ are \emph{not parallel}, the plane through $P$ with direction vectors $\vec u,\vec v$ is
\[\vec x=\vec p+s\vec u+t\vec v,\qquad s,t\in\mathbb R.\]`)}
Every pair $(s,t)$ gives one point: start at $P$, move $s$ steps along $\vec u$ and $t$ steps along $\vec v$. The point marked in the figure is $s=1.5$, $t=1$. If $\vec u\parallel\vec v$, all the points lie on one line --- that is why the directions must not be parallel.`,
    fig: F_PLANE, w: 0.54,
    body: S`\textbf{Planes through the origin.} When $P=O$ the plane is $\{s\vec u+t\vec v\}$, the set of all linear combinations of $\vec u$ and $\vec v$ --- their \emph{span} (Section 7 of Worksheet 1.1). A general plane is that span shifted by $\vec p$. The same holds for lines: $\vec x=\vec p+t\vec d$ is the span of $\vec d$ shifted by $\vec p$.

\textbf{Parametric form.} $x_i=p_i+su_i+tv_i$; for example $\vec x=(1,0,2)+s(1,1,0)+t(0,2,-1)$ means $x_1=1+s$, $x_2=s+2t$, $x_3=2-t$.` },

  { h: "6. The plane through three points; testing points",
    lead: S`Three points $P$, $Q$, $R$ that are \textbf{not collinear} determine exactly one plane. Use
\[\vec u=\overrightarrow{PQ},\quad\vec v=\overrightarrow{PR},\quad\vec x=\vec p+s\vec u+t\vec v.\]
(If $\overrightarrow{PR}$ were a multiple of $\overrightarrow{PQ}$, the three points would be collinear and would lie on infinitely many planes.)`,
    fig: F_PQR, w: 0.54,
    body: S`\textbf{Is a point on the plane?} In $\mathbb R^3$, $\vec q=\vec p+s\vec u+t\vec v$ is three equations in two unknowns. Solve two of them for $s,t$ and check the third, just as for linear combinations:
for $\vec x=(1,0,2)+s(2,1,-1)+t(1,3,1)$ and $Q(4,5,3)$: $\vec q-\vec p=(3,5,1)$ needs $2s+t=3$, $s+3t=5$, so $s=\tfrac45$, $t=\tfrac75$; the third component gives $-\tfrac45+\tfrac75=\tfrac35\ne1$, so $Q$ is \emph{not} on the plane.` },

  { h: "7. How two lines in $\\mathbb R^3$ can sit",
    lead: S`For $L_1:\vec x=\vec p+t\vec d$ and $L_2:\vec x=\vec q+s\vec e$ (always use \emph{different} parameters):
\begin{enumerate}[leftmargin=*,itemsep=1pt]
\item $\vec d\parallel\vec e$: the lines are \textbf{parallel}. If $Q$ lies on $L_1$ they are the \textbf{same} line; otherwise they never meet.
\item $\vec d\not\parallel\vec e$: solve $\vec p+t\vec d=\vec q+s\vec e$ (three equations, two unknowns). A solution gives the \textbf{intersection point}; no solution means the lines are \textbf{skew}: not parallel, yet they never meet.
\end{enumerate}
In the figure, $L_1$ runs along the floor and $L_2$ crosses above it: they are skew.`,
    fig: F_SKEW, w: 0.56,
    body: S`Skew lines cannot happen in $\mathbb R^2$: two non-parallel lines in a plane always meet. In $\mathbb R^3$ there is room for one line to pass over another.

\textbf{Collision versus crossing.} If both parameters are time, two moving objects \emph{collide} only when they are at the same point \emph{at the same time} --- that needs $t=s$ in the solution. Their paths can cross at different times without a collision (Example 9).` },
];

// ── worked examples ──
const EXAMPLES = [
  { title: "From a point and a direction to every form", q: S`The line $L$ passes through $P(2,-1)$ with direction $\vec d=(3,2)$. Write its vector and parametric equations, list the points with $t=-1,0,1,2$, and find its slope equation.`,
    fig: VF({ view: { xmin: -2, xmax: 9, ymin: -4.5, ymax: 4.5 }, step: 1, segs: [{ pts: [[-2, -3.67], [9, 3.67]], color: "violet", w: 2.2 }], arrows: [{ from: [2, -1], to: [5, 1], color: "red", vl: "d", off: 16 }], points: [{ x: -1, y: -3, label: "t = −1" }, { x: 2, y: -1, label: "P" }, { x: 5, y: 1, label: "t = 1", dx: -8, dy: -8, anchor: "end" }, { x: 8, y: 3, label: "t = 2", dx: -8, dy: -8, anchor: "end" }] }, 5.4),
    steps: [S`Vector: $\vec x=(2,-1)+t(3,2)$. Parametric: $x_1=2+3t$, $x_2=-1+2t$.`, S`$t=-1,0,1,2$ give $(-1,-3)$, $(2,-1)$, $(5,1)$, $(8,3)$.`, S`Slope $m=\tfrac{2}{3}$; from $t=\tfrac{x_1-2}{3}$: $x_2=-1+\tfrac23(x_1-2)=\tfrac23x_1-\tfrac73$.`],
    ans: S`$\vec x=(2,-1)+t(3,2)$; $x_2=\tfrac23x_1-\tfrac73$` },
  { title: "Two points, then two tests", q: S`Find a vector equation of the line through $A(1,-2,3)$ and $B(4,0,-1)$. Is $C(10,4,-9)$ on it? Is $D(7,2,-4)$?`,
    fig: VF(scene3(5, { segs: [line3([1, -2, 3], [3, 2, -4], -0.4, 3.3, "violet", 2.2)], points: [pt3([1, -2, 3], "A", { color: "black" }), pt3([4, 0, -1], "B", { color: "black" }), pt3([10, 4, -9], "C (t = 3)", { color: "green" }), pt3([7, 2, -4], "D", { color: "red" })] }), 5.4),
    steps: [S`$\vec d=\overrightarrow{AB}=(3,2,-4)$, so $\vec x=(1,-2,3)+t(3,2,-4)$.`, S`$C$: $1+3t=10$ gives $t=3$; then $x_2=-2+6=4$ \checkmark, $x_3=3-12=-9$ \checkmark. $C$ is on the line.`, S`$D$: $1+3t=7$ gives $t=2$; then $x_2=2$ \checkmark{} but $x_3=3-8=-5\ne-4$. $D$ is not on the line (it is just off it).`],
    ans: S`$\vec x=(1,-2,3)+t(3,2,-4)$; $C$ is on it ($t=3$), $D$ is not` },
  { title: "Where a line pierces the coordinate planes", q: S`Find where the line $\vec x=(1,3,-2)+t(2,-1,4)$ crosses each of the coordinate planes $x_1=0$, $x_2=0$ and $x_3=0$.`,
    fig: VF(scene3(5, { polys: [{ pts: [pr([0, 0, 0]), pr([5, 0, 0]), pr([5, 5, 0]), pr([0, 5, 0])], fill: "#f1f5f9", stroke: "gray", op: 0.7 }], segs: [line3([1, 3, -2], [2, -1, 4], -0.8, 1.5, "violet", 2.4)], points: [pt3([2, 2.5, 0], "(2, 2.5, 0)", { color: "red" }), pt3([0, 3.5, -4], "(0, 3.5, −4)", { color: "blue" })] }), 5.4),
    steps: [S`$x_1=0$: $1+2t=0$, $t=-\tfrac12$, point $(0,\ 3.5,\ -4)$.`, S`$x_2=0$: $3-t=0$, $t=3$, point $(7,\ 0,\ 10)$.`, S`$x_3=0$: $-2+4t=0$, $t=\tfrac12$, point $(2,\ 2.5,\ 0)$ --- where the line passes through the floor (shaded).`],
    ans: S`$(0,3.5,-4)$, $(7,0,10)$, $(2,2.5,0)$` },
  { title: "Trisecting a segment", q: S`Parametrize the segment from $P(-1,4,2)$ to $Q(5,1,-4)$ and find the two points that divide it into three equal parts.`,
    fig: VF(scene3(5, { segs: [seg3([[-1, 4, 2], [5, 1, -4]], { color: "violet", w: 3 })], points: [pt3([-1, 4, 2], "P", { color: "black" }), pt3([5, 1, -4], "Q", { color: "black" }), pt3([1, 3, 0], "t = ⅓", { color: "red" }), pt3([3, 2, -2], "t = ⅔", { color: "red" })] }), 5.2),
    steps: [S`$\overrightarrow{PQ}=(6,-3,-6)$, so the segment is $\vec x=(-1,4,2)+t(6,-3,-6)$, $0\le t\le1$.`, S`$t=\tfrac13$: $(-1+2,\ 4-1,\ 2-2)=(1,3,0)$.`, S`$t=\tfrac23$: $(-1+4,\ 4-2,\ 2-4)=(3,2,-2)$.`],
    ans: S`$\vec x=(-1,4,2)+t(6,-3,-6)$, $0\le t\le1$; $(1,3,0)$ and $(3,2,-2)$` },
  { title: "A plane through three points", q: S`Find a vector equation of the plane through $P(2,0,1)$, $Q(3,2,0)$, $R(1,1,4)$. Decide whether $S(3,5,5)$ and $T(1,4,6)$ lie on it.`,
    fig: VF(scene3(4.5, { polys: [patch3([1.5, 2, 3.5], [1, 2, -1], [-1, 1, 3], 1.3, "#dbeafe", "blue", 0.5), { pts: [pr([2, 0, 1]), pr([3, 2, 0]), pr([1, 1, 4])], fill: "#fef3c7", stroke: "amber" }], points: [pt3([2, 0, 1], "P", { color: "black", dx: -14 }), pt3([3, 2, 0], "Q", { color: "black", dy: 16 }), pt3([1, 1, 4], "R", { color: "black" }), pt3([1, 4, 6], "T", { color: "green" }), pt3([3, 5, 5], "S", { color: "red" })] }), 5.4),
    steps: [S`$\vec u=\overrightarrow{PQ}=(1,2,-1)$, $\vec v=\overrightarrow{PR}=(-1,1,3)$ (not parallel), so $\vec x=(2,0,1)+s(1,2,-1)+t(-1,1,3)$.`, S`$S$: $\vec s-\vec p=(1,5,4)$. From $s-t=1$ and $2s+t=5$: $s=2$, $t=1$. Third: $-2+3=1\ne4$. $S$ is not on the plane.`, S`$T$: $\vec t-\vec p=(-1,4,5)$. From $s-t=-1$ and $2s+t=4$: $s=1$, $t=2$. Third: $-1+6=5$ \checkmark. $T$ is on the plane.`],
    ans: S`$\vec x=(2,0,1)+s(1,2,-1)+t(-1,1,3)$; $S$ no, $T$ yes ($s=1$, $t=2$)` },
  { title: "Two lines that meet", q: S`Show that $L_1:\ \vec x=(2,1,0)+t(1,-1,2)$ and $L_2:\ \vec x=(1,-4,4)+s(1,2,-1)$ intersect, and find the point.`,
    fig: VF(scene3(5, { segs: [line3([2, 1, 0], [1, -1, 2], -1.5, 2.5, "blue", 2.4), line3([1, -4, 4], [1, 2, -1], 0, 3.5, "red", 2.4)], points: [pt3([3, 0, 2], "(3, 0, 2)", { color: "green" }), pt3([2, 1, 0], "L₁", { color: "blue", dx: 8, dy: 14 }), pt3([1, -4, 4], "L₂", { color: "red" })] }), 5.2),
    steps: [S`The directions $(1,-1,2)$ and $(1,2,-1)$ are not parallel. Solve $2+t=1+s$, $1-t=-4+2s$, $2t=4-s$.`, S`The first gives $s=1+t$; the second becomes $1-t=-2+2t$, so $t=1$ and $s=2$.`, S`Check the third: $2(1)=2$ and $4-2=2$ \checkmark. Point: $L_1$ at $t=1$ is $(3,0,2)$; $L_2$ at $s=2$ is $(1+2,\ -4+4,\ 4-2)=(3,0,2)$.`],
    ans: S`They meet at $(3,0,2)$ ($t=1$, $s=2$)` },
  { title: "Skew lines", q: S`Classify $L_1:\ \vec x=(0,0,1)+t(1,1,0)$ and $L_2:\ \vec x=(2,0,3)+s(0,1,1)$: parallel, intersecting or skew?`,
    fig: VF(scene3(4, { segs: [line3([0, 0, 1], [1, 1, 0], -1, 3.2, "blue", 2.4), line3([2, 0, 3], [0, 1, 1], -2.5, 1.5, "red", 2.4)], points: [pt3([3, 3, 1], "L₁", { color: "blue" }), pt3([2, -2.5, 0.5], "L₂", { color: "red" })] }), 5),
    steps: [S`$(1,1,0)=c(0,1,1)$ would need $1=0\cdot c$ in the first component, which is impossible, so the lines are not parallel.`, S`Solve $t=2$, $t=s$, $1=3+s$. The third gives $s=-2$, but the first two give $s=t=2$.`, S`The system has no solution, so the lines never meet.`],
    ans: S`Skew` },
  { title: "The plane containing two parallel lines", q: S`Find a vector equation of the plane containing the parallel lines $L_1:\ \vec x=(0,1,-1)+t(1,2,2)$ and $L_2:\ \vec x=(2,0,1)+t(1,2,2)$.`,
    fig: VF(scene3(4, { polys: [patch3([1, 0.5, 0], [1, 2, 2], [2, -1, 2], 0.9, "#ecfdf5", "green", 0.5)], segs: [line3([0, 1, -1], [1, 2, 2], -0.8, 1.2, "blue", 2.4), line3([2, 0, 1], [1, 2, 2], -1.2, 0.8, "red", 2.4)], arrows: [a3([0, 1, -1], [2, 0, 1], { color: "amber", dash: true, label: "u", off: 14 })], points: [pt3([0, 1, -1], "P₁", { color: "blue", dx: -18 }), pt3([2, 0, 1], "P₂", { color: "red" })] }), 5.2),
    steps: [S`One direction is the common direction $\vec d=(1,2,2)$.`, S`A second direction joins a point of $L_1$ to a point of $L_2$: $\vec u=(2,0,1)-(0,1,-1)=(2,-1,2)$, which is not parallel to $\vec d$.`, S`So the plane is $\vec x=(0,1,-1)+s(1,2,2)+t(2,-1,2)$. Both lines lie in it: $t=0$ gives $L_1$, and $t=1$ gives $L_2$.`],
    ans: S`$\vec x=(0,1,-1)+s(1,2,2)+t(2,-1,2)$` },
  { title: "Crossing paths without a collision", q: S`Drone $A$ is at $(0,0,10)+t(4,2,-1)$ and drone $B$ at $(14,-2,8)+t(-2,2,0)$ after $t$ seconds. Do their paths cross? Do the drones collide?`,
    fig: VF(scene3(6, { segs: [line3([0, 0, 10], [4, 2, -1], 0, 3, "blue", 2.4), line3([14, -2, 8], [-2, 2, 0], 0, 4.5, "red", 2.4)], points: [pt3([8, 4, 8], "(8, 4, 8)", { color: "green" }), pt3([0, 0, 10], "A at t = 0", { color: "blue" }), pt3([14, -2, 8], "B at t = 0", { color: "red", dx: 8, dy: 14 })] }), 5.2),
    steps: [S`Paths: use different parameters, $(4a,\ 2a,\ 10-a)=(14-2b,\ -2+2b,\ 8)$.`, S`Third: $a=2$. Second: $4=-2+2b$, $b=3$. First: $8=14-6$ \checkmark. The paths cross at $(8,4,8)$.`, S`But $A$ is there at $t=2$ and $B$ at $t=3$. A collision needs the same time, so there is none.`],
    ans: S`The paths cross at $(8,4,8)$, but the drones arrive 1 second apart: no collision` },
];

const PROBLEMS = [
  { level: 1, q: S`Write vector and parametric equations of the line through $(4,-1,2)$ with direction $(-3,0,5)$, and give two more points on it.`, ans: S`$\vec x=(4,-1,2)+t(-3,0,5)$; e.g. $(1,-1,7)$, $(7,-1,-3)$` },
  { level: 1, q: S`Find a vector equation and the slope equation of the line through $A(2,5)$ and $B(-1,3)$.`, ans: S`$\vec x=(2,5)+t(-3,-2)$; $x_2=\tfrac23x_1+\tfrac{11}3$` },
  { level: 1, q: S`Is $(5,-3,8)$ on the line $\vec x=(1,1,0)+t(2,-2,4)$? Give the value of $t$ or explain why not.`, ans: S`Yes, $t=2$` },
  { level: 2, space: 4, q: S`Write the line $3x_1-2x_2=6$ in vector form and draw it on the grid, marking the points with $t=0$ and $t=1$.`, ans: S`e.g. $\vec x=(2,0)+t(2,3)$`, fig: gridT({ xmin: -2, xmax: 6, ymin: -4, ymax: 5 }) },
  { level: 2, q: S`Find where the line $\vec x=(3,-2,4)+t(1,2,-2)$ meets each coordinate plane.`, ans: S`$x_1=0$: $(0,-8,10)$; $x_2=0$: $(4,0,2)$; $x_3=0$: $(5,2,0)$` },
  { level: 2, q: S`Find a vector equation of the plane through $P(1,0,2)$, $Q(3,1,1)$ and $R(0,2,5)$. Is $S(4,-1,0)$ on this plane?`, ans: S`$\vec x=(1,0,2)+s(2,1,-1)+t(-1,2,3)$; $S$ is not on it` ,
    fig: VF(scene3(4.5, { points: [pt3([1, 0, 2], "P", { color: "black" }), pt3([3, 1, 1], "Q", { color: "black" }), pt3([0, 2, 5], "R", { color: "black" }), pt3([4, -1, 0], "S?", { color: "red" })] }), 4.6) },
  { level: 2, q: S`Are $L_1:\ \vec x=(1,2,3)+t(2,-1,4)$ and $L_2:\ \vec x=(5,0,11)+s(-4,2,-8)$ the same line, parallel but different, or not parallel?`, ans: S`The same line: the directions are parallel and $(5,0,11)$ is on $L_1$ ($t=2$)` },
  { level: 2, space: 4, q: S`Parametrize the segment from $A(-2,1)$ to $B(4,4)$ and plot the points with $t=0,\tfrac13,\tfrac23,1$ on the grid.`, ans: S`$\vec x=(-2,1)+t(6,3)$, $0\le t\le1$; $(-2,1)$, $(0,2)$, $(2,3)$, $(4,4)$`, fig: gridT({ xmin: -3, xmax: 5, ymin: -1, ymax: 5 }) },
  { level: 3, space: 5, q: S`Decide whether $L_1:\ \vec x=(1,0,-1)+t(1,1,2)$ and $L_2:\ \vec x=(2,3,0)+s(-1,1,1)$ intersect, are parallel, or are skew. Show all three equations.`, ans: S`Skew: the first two equations give $t=2$, $s=-1$, but the third fails ($3\ne-1$)` },
  { level: 3, space: 5, q: S`For which value of $k$ do $L_1:\ \vec x=(1,2,k)+t(1,0,1)$ and $L_2:\ \vec x=(3,-2,4)+s(0,2,1)$ intersect? Find the point.`, ans: S`$k=4$; they meet at $(3,2,6)$` },
  { level: 3, space: 5, q: S`Show that $A(1,2,0)$, $B(3,3,1)$, $C(0,1,2)$ and $D(4,3,4)$ lie in one plane, and write $\overrightarrow{AD}$ as a combination of $\overrightarrow{AB}$ and $\overrightarrow{AC}$.`, ans: S`$\overrightarrow{AD}=2\overrightarrow{AB}+\overrightarrow{AC}$, so $D$ is on the plane through $A$, $B$, $C$`,
    fig: VF(scene3(4.5, { points: [pt3([1, 2, 0], "A", { color: "black" }), pt3([3, 3, 1], "B", { color: "black" }), pt3([0, 1, 2], "C", { color: "black" }), pt3([4, 3, 4], "D", { color: "red" })] }), 4.6) },
  { level: 3, space: 5, q: S`The plane $\Pi$ is $\vec x=\vec p+s\vec u+t\vec v$. Prove that if two different points $A$ and $B$ lie in $\Pi$, then every point of the line $AB$ lies in $\Pi$.`, ans: S`$\vec a=\vec p+s_1\vec u+t_1\vec v$, $\vec b=\vec p+s_2\vec u+t_2\vec v$; then $\vec a+r(\vec b-\vec a)=\vec p+(s_1+r(s_2-s_1))\vec u+(t_1+r(t_2-t_1))\vec v\in\Pi$` },
  { level: 3, space: 5, q: S`Plane $P$ flies along $(0,0,5)+t(3,1,1)$ and plane $Q$ along $(10,-4,5)+t(-2,3,1)$, with $t$ in minutes. Do their paths cross? Do they collide? Where?`, ans: S`Yes: both are at $(6,2,7)$ when $t=2$, so they collide there`,
    fig: VF(scene3(6, { segs: [line3([0, 0, 5], [3, 1, 1], 0, 3, "blue", 2.4), line3([10, -4, 5], [-2, 3, 1], 0, 3, "red", 2.4)], points: [pt3([0, 0, 5], "P", { color: "blue" }), pt3([10, -4, 5], "Q", { color: "red" })] }), 4.8) },
];

export const WS = {
  code: "1.2",
  title: "Lines and Planes in Rⁿ",
  bigideas: S`A \textbf{line} is a point plus all multiples of one nonzero direction: $\vec x=\vec p+t\vec d$. A \textbf{plane} is a point plus all combinations of two non-parallel directions: $\vec x=\vec p+s\vec u+t\vec v$. These descriptions look the same in every $\mathbb R^n$. Deciding whether a point is on a line or plane, or where two lines meet, always comes down to finding parameters that work in \emph{every} component.`,
  goals: ["Write vector and parametric equations of lines from a point and a direction or from two points; describe segments.", "Convert between vector and slope forms in ℝ².", "Write equations of planes from a point and two directions or from three points.", "Test whether a point lies on a line or a plane.", "Classify two lines in ℝ³ as intersecting, parallel, identical or skew, and find intersection points."],
  curriculum: "Geometry of ℝⁿ — lines and planes",
  vocab: [["Direction vector", "a nonzero $\\vec d$ along the line"], ["Parameter", "the free scalar $t$ (or $s$ and $t$)"], ["Segment", "$\\vec a+t(\\vec b-\\vec a)$ with $0\\le t\\le1$"], ["Collinear / coplanar", "on one line / in one plane"], ["Skew lines", "not parallel and never meeting"]],
  hook: S`A drone starts at $(0,0,10)$ and every second moves by $(2,1,-0.5)$. Where is it after 4 seconds? When does it reach the ground $x_3=0$, and where? (Answer it after Section 1.)`,
  concepts: NOTES,
  summary: [
    S`Line: $\vec x=\vec p+t\vec d$ ($\vec d\ne\vec 0$); through $A,B$: $\vec x=\vec a+t(\vec b-\vec a)$; segment: $0\le t\le1$.`,
    S`In $\mathbb R^2$: $x_2=mx_1+b\leftrightarrow\vec d=(1,m)$; $ax_1+bx_2=c\leftrightarrow\vec d=(b,-a)$.`,
    S`Plane: $\vec x=\vec p+s\vec u+t\vec v$ ($\vec u\not\parallel\vec v$); through $P,Q,R$: $\vec u=\overrightarrow{PQ}$, $\vec v=\overrightarrow{PR}$.`,
    S`Membership: find the parameter(s) from some components, then check every remaining component.`,
    S`Two lines in $\mathbb R^3$: parallel directions $\Rightarrow$ identical or parallel; otherwise they intersect (system solvable) or are skew (no solution).`,
  ],
  tips: ["Use different parameter letters for different lines ($t$ and $s$), or you force them to meet at the same parameter value.", "A point is on a line only if the \\emph{same} $t$ works in every component.", "The two direction vectors of a plane must not be parallel.", "Equations of lines and planes are not unique; compare them by checking directions and one point.", "After finding an intersection, substitute into \\emph{both} equations to confirm the point.", "Crossing paths are not a collision unless the times are equal."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

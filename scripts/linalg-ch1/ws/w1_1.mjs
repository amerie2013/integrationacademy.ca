// LINALG1 Worksheet 1.1 — Vectors in Rⁿ and Linear Combinations
// Self-contained: complete notes (definitions, theorems, proofs, figures), 9 worked examples with figures,
// 13 practice problems at three levels (the last five are proof / multi-step problems), answer key.
import { gridT } from "./figT.mjs";
import { scene3, a3, pt3, seg3, patch3, lattice } from "../vecfig.mjs";
import { S, VF, def, thm, side } from "./wkit.mjs";

// ── notes figures ──
const F_R3 = VF(scene3(4.5, { arrows: [a3([0, 0, 0], [2, 4, 3], { color: "blue", vl: "x", off: -16 })], segs: [seg3([[2, 0, 0], [2, 4, 0], [0, 4, 0]], { dash: true, w: 1.1 }), seg3([[2, 4, 0], [2, 4, 3]], { dash: true, w: 1.1 })], points: [pt3([2, 4, 3], "(2, 4, 3)", { color: "blue" })] }), 6.2);
const F_SUM = VF({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 4.8 }, step: 1, polys: [{ pts: [[0, 0], [4, 1], [5, 4], [1, 3]], fill: "#ecfdf5" }], arrows: [{ from: [0, 0], to: [4, 1], vl: "x", off: 16 }, { from: [0, 0], to: [1, 3], color: "red", vl: "y", off: -16 }, { from: [4, 1], to: [5, 4], color: "red", dash: true, w: 2 }, { from: [1, 3], to: [5, 4], dash: true, w: 2 }, { from: [0, 0], to: [5, 4], color: "green", label: "x + y", off: -16 }] }, 6.4);
const F_DIFF = VF({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 3.8 }, step: 1, arrows: [{ from: [0, 0], to: [4, 1], vl: "x", off: 16 }, { from: [0, 0], to: [1, 3], color: "red", vl: "y", off: -16 }, { from: [1, 3], to: [4, 1], color: "amber", label: "x − y", off: -16 }] }, 5.4);
const F_MULT = VF({ view: { xmin: -6.5, xmax: 8, ymin: -3, ymax: 3.6 }, grid: false, axes: false, segs: [{ pts: [[-6.5, -2.17], [8, 2.67]], dash: true, color: "gray" }], arrows: [{ from: [0, 0], to: [3, 1], vl: "v", off: 16 }, { from: [0, 1.1], to: [6, 3.1], color: "green", label: "2v", off: -14 }, { from: [0, -1.1], to: [-3, -2.1], color: "red", label: "−v", off: 14 }] }, 6.4);
const F_AB = VF({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 5.5 }, step: 1, arrows: [{ from: [0, 0], to: [1, 4], color: "gray", w: 2, vl: "a", off: -14 }, { from: [0, 0], to: [6, 2], color: "gray", w: 2, vl: "b", off: 14 }, { from: [1, 4], to: [6, 2], color: "red", label: "AB = b − a", off: 16 }], points: [{ x: 0, y: 0, label: "O", dx: -14, dy: 16 }, { x: 1, y: 4, label: "A" }, { x: 6, y: 2, label: "B", dx: 6, dy: 16 }, { x: 3.5, y: 3, label: "M", color: "green" }] }, 6.2);
const F_LAT = VF({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 7 }, grid: false, segs: lattice([3, 1], [1, 2], 4), arrows: [{ from: [0, 0], to: [3, 1], vl: "u", off: 16 }, { from: [3, 1], to: [5, 5], color: "red", vl: "2v", off: 16 }, { from: [0, 0], to: [5, 5], color: "green", vl: "w", off: -16 }], points: [{ x: 5, y: 5, label: "(5, 5)", color: "green" }] }, 6.2);
const F_PLANE = VF(scene3(4, { polys: [patch3([0, 0, 0], [2, 0, 1], [0, 2, 1], 1.3, "#dbeafe", "blue", 0.6)], arrows: [a3([0, 0, 0], [2, 0, 1], { color: "blue", vl: "p", off: 14 }), a3([0, 0, 0], [0, 2, 1], { color: "red", vl: "q", off: -14 }), a3([0, 0, 0], [1, 1, 3], { color: "green", dash: true, vl: "b", off: -14 })], points: [pt3([1, 1, 3], "b off the plane", { color: "green" })] }), 6.2);
const F_COL = VF({ view: { xmin: 0, xmax: 10.5, ymin: 0, ymax: 6.4 }, step: 1, segs: [{ pts: [[0, 0.5], [10.5, 5.75]], dash: true, color: "gray" }], arrows: [{ from: [1, 1], to: [7, 4], color: "blue", label: "AB", off: 14 }], points: [{ x: 1, y: 1, label: "A", dx: -4, dy: -10 }, { x: 7, y: 4, label: "B", dx: 4, dy: 18 }, { x: 9, y: 5, label: "C", dx: -4, dy: -10 }, { x: 3, y: 2, label: "P (1 : 2)", color: "red", dx: -10, dy: -12, anchor: "end" }] }, 6.2);

const NOTES = [
  { h: "1. Vectors and the space $\\mathbb R^n$",
    lead: S`${def("$\\mathbb R^n$",S`For a positive integer $n$, $\mathbb R^n$ is the set of all ordered lists $\vec x=(x_1,x_2,\dots,x_n)$ of $n$ real numbers. The numbers $x_i$ are the \emph{components} of $\vec x$. Two vectors are \textbf{equal} when they have the same number of components and $x_i=y_i$ for every $i$. The \textbf{zero vector} $\vec 0$ has every component $0$.`)}
In $\mathbb R^2$ and $\mathbb R^3$ a vector is drawn as the arrow from the origin $O$ to the point with the same coordinates (its \emph{position vector}). The figure shows $\vec x=(2,4,3)$: 2 units along $x_1$, 4 along $x_2$, 3 up along $x_3$.`,
    fig: F_R3, w: 0.55,
    body: S`\textbf{Notation.} Vectors are often written as columns, $\vec x=\left[\begin{smallmatrix}x_1\\ \vdots\\ x_n\end{smallmatrix}\right]$; the row form $(x_1,\dots,x_n)$ means the same vector and saves space. Order matters, $(1,2)\ne(2,1)$, and size matters: $(1,2)\in\mathbb R^2$ and $(1,2,0)\in\mathbb R^3$ are \emph{different} vectors.

\textbf{Why $n$ can be large.} Vectors do not have to be pictures. The stock of 6 products is a vector in $\mathbb R^6$; the colour of a pixel (red, green, blue) is a vector in $\mathbb R^3$; the daily prices of 500 shares form a vector in $\mathbb R^{500}$. We cannot draw $\mathbb R^{500}$, but every rule below works the same way in every $\mathbb R^n$ --- the pictures in $\mathbb R^2$ and $\mathbb R^3$ guide our intuition.

\textbf{Free vectors.} An arrow may be moved anywhere without turning or stretching it; it is still the same vector. Only its components (its length and direction) matter, not where it is drawn.` },

  { h: "2. Adding and subtracting vectors",
    lead: S`${def("sum and difference", S`For $\vec x,\vec y\in\mathbb R^n$: $\vec x+\vec y=(x_1+y_1,\dots,x_n+y_n)$ and $\vec x-\vec y=(x_1-y_1,\dots,x_n-y_n)$. They are defined \emph{only} when both vectors are in the same $\mathbb R^n$.`)}
\textbf{Tip-to-tail rule.} Draw $\vec y$ starting at the tip of $\vec x$; then $\vec x+\vec y$ runs from the tail of $\vec x$ to the tip of $\vec y$. It is the diagonal of the parallelogram built on $\vec x$ and $\vec y$ (green). With $\vec x=(4,1)$, $\vec y=(1,3)$: $\vec x+\vec y=(5,4)$.`,
    fig: F_SUM, w: 0.52,
    body: side(S`\textbf{Subtraction as an arrow.} $\vec x-\vec y$ is the vector you add to $\vec y$ to get $\vec x$, because $\vec y+(\vec x-\vec y)=\vec x$. So, with both drawn from the same point, $\vec x-\vec y$ is the arrow from the \emph{tip of $\vec y$} to the \emph{tip of $\vec x$} (amber). Here $(4,1)-(1,3)=(3,-2)$.

Together with the first figure: the two diagonals of the parallelogram on $\vec x$ and $\vec y$ are $\vec x+\vec y$ and $\vec x-\vec y$.`, F_DIFF, 0.56) },

  { h: "3. Scalar multiples and parallel vectors",
    lead: S`${def("scalar multiple", S`For a real number $c$ (a \emph{scalar}) and $\vec x\in\mathbb R^n$: $c\vec x=(cx_1,\dots,cx_n)$. We write $-\vec x=(-1)\vec x$.`)}
Geometrically, $c\vec x$ lies on the line through $\vec x$: it is $|c|$ times as long, in the same direction when $c>0$ and the opposite direction when $c<0$. The arrows $2\vec v$ and $-\vec v$ in the figure are drawn slightly above and below the line so you can see them; all three lie along the dashed line.`,
    fig: F_MULT, w: 0.55,
    body: S`${def("parallel", S`Nonzero vectors $\vec u$ and $\vec v$ are \textbf{parallel} if $\vec u=c\vec v$ for some scalar $c$ (same direction if $c>0$, opposite if $c<0$).`)}
\textbf{Test.} Divide matching components: $(6,-3,9)$ and $(-4,2,-6)$ are parallel because $\tfrac{6}{-4}=\tfrac{-3}{2}=\tfrac{9}{-6}=-\tfrac32$, so $(6,-3,9)=-\tfrac32(-4,2,-6)$. If a component is $0$ in one vector, it must be $0$ in the other. One mismatched ratio is enough to show two vectors are \emph{not} parallel.` },

  { h: "4. The vector from one point to another",
    lead: S`If the points $A$ and $B$ have position vectors $\vec a$ and $\vec b$, then $\vec a+\overrightarrow{AB}=\vec b$, so
\[\overrightarrow{AB}=\vec b-\vec a\qquad\text{(head minus tail).}\]
For $A(1,4)$ and $B(6,2)$: $\overrightarrow{AB}=(6-1,\ 2-4)=(5,-2)$. Note $\overrightarrow{BA}=-\overrightarrow{AB}$.`,
    fig: F_AB, w: 0.52,
    body: S`\textbf{Midpoint.} The midpoint $M$ of $AB$ is halfway along $\overrightarrow{AB}$: $\vec m=\vec a+\tfrac12(\vec b-\vec a)=\tfrac12(\vec a+\vec b)$. Above, $M=\tfrac12\big((1,4)+(6,2)\big)=(3.5,3)$.

\textbf{Dividing a segment.} The point $P$ that is the fraction $t$ of the way from $A$ to $B$ is $\vec p=\vec a+t(\vec b-\vec a)=(1-t)\vec a+t\vec b$. If $AP:PB=m:n$, then $t=\tfrac{m}{m+n}$ and $\vec p=\dfrac{n\vec a+m\vec b}{m+n}$.

\textbf{Centroid.} The centroid (balance point) of triangle $ABC$ is $\vec g=\tfrac13(\vec a+\vec b+\vec c)$; Example 8 shows why.` },

  { h: "5. The algebra rules of $\\mathbb R^n$",
    lead: thm("vector-space properties", S`For all $\vec x,\vec y,\vec z\in\mathbb R^n$ and scalars $c,d$:\par\smallskip
\begin{tabular}{@{}ll@{}}
(1) $\vec x+\vec y=\vec y+\vec x$ & (2) $(\vec x+\vec y)+\vec z=\vec x+(\vec y+\vec z)$\\
(3) $\vec x+\vec 0=\vec x$ & (4) $\vec x+(-\vec x)=\vec 0$\\
(5) $c(\vec x+\vec y)=c\vec x+c\vec y$ & (6) $(c+d)\vec x=c\vec x+d\vec x$\\
(7) $c(d\vec x)=(cd)\vec x$ & (8) $1\vec x=\vec x$
\end{tabular}
\\ and $\vec x+\vec y$, $c\vec x$ are again in $\mathbb R^n$ (closure).`),
    body: S`\pf{Each rule is the matching rule for real numbers applied to one component at a time. For example, for (5) the $i$-th component of $c(\vec x+\vec y)$ is $c(x_i+y_i)=cx_i+cy_i$, which is the $i$-th component of $c\vec x+c\vec y$. As this holds for every $i$, the vectors are equal.}
\textbf{Consequences.} $0\vec x=\vec 0$, $c\vec 0=\vec 0$, $(-1)\vec x=-\vec x$, and if $c\vec x=\vec 0$ then $c=0$ or $\vec x=\vec 0$. (Practice Problem 12 proves the last one.)

\textbf{Solving vector equations.} Because of rules (1)--(8) we may add the same vector to both sides, collect terms and divide by a nonzero scalar, exactly as with numbers. For instance $4\vec x+(2,-6)=\vec x+(5,0)$ gives $3\vec x=(3,6)$, so $\vec x=(1,2)$. What we may \emph{not} do is divide by a vector: there is no such operation.` },

  { h: "6. Linear combinations",
    lead: S`${def("linear combination", S`A vector $\vec b$ is a \textbf{linear combination} of $\vec v_1,\dots,\vec v_k$ if $\vec b=c_1\vec v_1+c_2\vec v_2+\dots+c_k\vec v_k$ for some scalars $c_1,\dots,c_k$, called the \emph{coefficients} (or weights).`)}
The gray grid in the figure is made of all combinations $s\vec u+t\vec v$ with whole-number $s,t$, for $\vec u=(3,1)$ and $\vec v=(1,2)$. The point $(5,5)$ is a grid corner: $(5,5)=1\vec u+2\vec v$.`,
    fig: F_LAT, w: 0.53,
    body: S`\textbf{Standard basis.} In $\mathbb R^n$, $\vec e_i$ has a $1$ in place $i$ and $0$ elsewhere; in $\mathbb R^3$, $\vec e_1=(1,0,0)$, $\vec e_2=(0,1,0)$, $\vec e_3=(0,0,1)$. Every vector is a combination of them, with its own components as coefficients: $(4,-1,6)=4\vec e_1-\vec e_2+6\vec e_3$.

\textbf{Finding the coefficients.} To decide whether $\vec b=s\vec u+t\vec v$, write out the components. Each component gives one linear equation in the unknowns $s,t$:
\[(5,5)=s(3,1)+t(1,2)\iff\begin{cases}3s+t=5\\ s+2t=5\end{cases}\]
Solving gives $s=1$, $t=2$. A solution means $\vec b$ \emph{is} a combination; no solution means it is not. (Chapter 2 solves such systems in general.)` },

  { h: "7. Which vectors can be reached?",
    lead: S`Fix $\vec u,\vec v$. The set of \emph{all} their combinations is called their \textbf{span}.
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item In $\mathbb R^2$, two non-parallel vectors reach \textbf{every} vector (the grid of Section 6 covers the plane).
\item Two parallel vectors reach only the \textbf{line} through them.
\item In $\mathbb R^3$, two non-parallel vectors reach only a \textbf{plane through the origin}. A vector off that plane, like $\vec b$ in the figure, is not a combination of them.
\end{itemize}`,
    fig: F_PLANE, w: 0.55,
    body: S`\textbf{Counting equations.} In $\mathbb R^3$, $s\vec p+t\vec q=\vec b$ is three equations in two unknowns. Two of them usually fix $s$ and $t$; the third equation is then a \emph{test} that $\vec b$ may pass or fail. In the figure, $\vec p=(2,0,1)$, $\vec q=(0,2,1)$, $\vec b=(1,1,3)$: the first two components give $s=t=\tfrac12$, and then the third component is $\tfrac12+\tfrac12=1\ne3$, so $\vec b$ is not in the plane.

\textbf{Too many solutions.} If the vectors are themselves combinations of each other (for example parallel), there can be infinitely many coefficient choices for the same $\vec b$. This is the idea of \emph{linear dependence}, studied in Chapter 4.` },

  { h: "8. Collinear points",
    lead: S`Three points $A$, $B$, $C$ (with $A\ne B$) are \textbf{collinear} --- on one line --- exactly when $\overrightarrow{AC}$ is a scalar multiple of $\overrightarrow{AB}$:
\[\overrightarrow{AC}=t\,\overrightarrow{AB}\ \text{ for some } t.\]
In the figure, $A(1,1)$, $B(7,4)$, $C(9,5)$: $\overrightarrow{AB}=(6,3)$ and $\overrightarrow{AC}=(8,4)=\tfrac43\overrightarrow{AB}$, so they are collinear.`,
    fig: F_COL, w: 0.52,
    body: S`\textbf{Reading $t$.} If $0<t<1$, $C$ lies between $A$ and $B$; if $t>1$, $C$ lies beyond $B$ (here $t=\tfrac43$); if $t<0$, $C$ lies on the other side of $A$. The red point $P$ divides $AB$ in the ratio $1:2$, so $\vec p=\vec a+\tfrac13\overrightarrow{AB}=(1,1)+(2,1)=(3,2)$.` },
];

// ── worked examples (new numbers; not the lesson's) ──
const EXAMPLES = [
  { title: "Two combinations and their pictures", q: S`Let $\vec u=(3,1)$ and $\vec v=(-1,2)$. Compute $2\vec u-\vec v$ and $\vec u+2\vec v$, and draw both tip to tail.`,
    fig: VF({ view: { xmin: -1.5, xmax: 8, ymin: -1, ymax: 5.8 }, step: 1, arrows: [{ from: [0, 0], to: [6, 2], vl: "2u", off: -16 }, { from: [6, 2], to: [7, 0], color: "red", vl: "−v", off: 16 }, { from: [0, 0], to: [7, 0], color: "green", label: "2u − v", off: 14 }, { from: [3, 1], to: [1, 5], color: "amber", dash: true, vl: "2v", off: 16 }, { from: [0, 0], to: [1, 5], color: "violet", label: "u + 2v", off: -18 }] }, 6),
    steps: [S`$2\vec u=(6,2)$ and $-\vec v=(1,-2)$, so $2\vec u-\vec v=(7,0)$.`, S`$2\vec v=(-2,4)$, so $\vec u+2\vec v=(3-2,\ 1+4)=(1,5)$.`, S`In the picture, $-\vec v$ starts at the tip of $2\vec u$ (red), and $2\vec v$ starts at the tip of $\vec u$ (amber, dashed).`],
    ans: S`$2\vec u-\vec v=(7,0)$, $\vec u+2\vec v=(1,5)$` },
  { title: "A point two-thirds of the way", q: S`For $A(-1,2,0)$ and $B(5,-1,6)$, find $\overrightarrow{AB}$ and the point $P$ on segment $AB$ with $AP:PB=2:1$.`,
    fig: VF(scene3(5, { segs: [seg3([[-1, 2, 0], [5, -1, 6]], { dash: true })], arrows: [a3([-1, 2, 0], [3, 0, 4], { color: "red", label: "(2/3)AB", off: -16 })], points: [pt3([-1, 2, 0], "A", { color: "black" }), pt3([5, -1, 6], "B", { color: "black" }), pt3([3, 0, 4], "P(3, 0, 4)", { color: "red" })] }), 5.6),
    steps: [S`$\overrightarrow{AB}=\vec b-\vec a=(5+1,\ -1-2,\ 6-0)=(6,-3,6)$.`, S`$AP:PB=2:1$ means $P$ is $\tfrac{2}{3}$ of the way from $A$: $\vec p=\vec a+\tfrac23\overrightarrow{AB}$.`, S`$\vec p=(-1,2,0)+(4,-2,4)=(3,0,4)$. Check with $\tfrac{1\cdot\vec a+2\vec b}{3}=\tfrac{(-1,2,0)+(10,-2,12)}{3}=(3,0,4)$.`],
    ans: S`$\overrightarrow{AB}=(6,-3,6)$, $P(3,0,4)$` },
  { title: "Two vector equations at once", q: S`Find $\vec x,\vec y\in\mathbb R^3$ with $\vec x+\vec y=(3,1,4)$ and $\vec x-2\vec y=(0,-5,1)$.`,
    fig: VF(scene3(4, { polys: [{ pts: [[0, 0, 0], [2, -1, 3], [3, 1, 4], [1, 2, 1]].map((p) => [p[1] - 0.55 * p[0], p[2] - 0.42 * p[0]]), fill: "#ecfdf5", stroke: "green" }], arrows: [a3([0, 0, 0], [2, -1, 3], { color: "blue", vl: "x", off: 14 }), a3([0, 0, 0], [1, 2, 1], { color: "red", vl: "y", off: 14 }), a3([0, 0, 0], [3, 1, 4], { color: "green" })], texts: [{ x: -0.65, y: 3.1, t: "x + y = (3, 1, 4)", color: "green" }] }), 5.4),
    steps: [S`Subtract the second equation from the first: $(\vec x+\vec y)-(\vec x-2\vec y)=3\vec y=(3,1,4)-(0,-5,1)=(3,6,3)$.`, S`So $\vec y=(1,2,1)$ and $\vec x=(3,1,4)-\vec y=(2,-1,3)$.`, S`Check: $\vec x-2\vec y=(2-2,\ -1-4,\ 3-2)=(0,-5,1)$. \checkmark`],
    ans: S`$\vec x=(2,-1,3)$, $\vec y=(1,2,1)$` },
  { title: "Coefficients from the grid", q: S`Write $\vec w=(1,8)$ as a combination of $\vec u=(2,1)$ and $\vec v=(-1,2)$.`,
    fig: VF({ view: { xmin: -3, xmax: 6, ymin: -1, ymax: 9 }, grid: false, segs: lattice([2, 1], [-1, 2], 4), arrows: [{ from: [0, 0], to: [4, 2], vl: "2u", off: 16 }, { from: [4, 2], to: [1, 8], color: "red", vl: "3v", off: 16 }, { from: [0, 0], to: [1, 8], color: "green", vl: "w", off: -14 }] }, 5),
    steps: [S`$s(2,1)+t(-1,2)=(1,8)$ gives $2s-t=1$ and $s+2t=8$.`, S`From the first, $t=2s-1$. Then $s+4s-2=8$, so $s=2$ and $t=3$.`, S`Check: $2(2,1)+3(-1,2)=(4-3,\ 2+6)=(1,8)$. On the grid, $\vec w$ is 2 steps along $\vec u$ and 3 along $\vec v$.`],
    ans: S`$\vec w=2\vec u+3\vec v$` },
  { title: "Inside the plane or not?", q: S`Let $\vec p=(1,-1,2)$, $\vec q=(2,3,1)$. Is $\vec b=(4,1,9)$ a combination of $\vec p$ and $\vec q$? For which value of $c$ is $(4,1,c)$ a combination?`,
    fig: VF(scene3(4, { polys: [patch3([0, 0, 0], [1, -1, 2], [2, 3, 1], 1.6, "#dbeafe", "blue", 0.55)], arrows: [a3([0, 0, 0], [1, -1, 2], { color: "blue", vl: "p", off: -14 }), a3([0, 0, 0], [2, 3, 1], { color: "red", vl: "q", off: 14 }), a3([0, 0, 0], [4, 1, 9], { color: "green", dash: true })], points: [pt3([4, 1, 5], "(4, 1, 5) = 2p + q", { color: "violet", dx: 9, dy: 5 })], texts: [{ x: -1.2, y: 7.75, t: "b = (4, 1, 9)", color: "green" }] }), 5.4),
    steps: [S`$s\vec p+t\vec q=(s+2t,\ -s+3t,\ 2s+t)$. Match the first two components: $s+2t=4$, $-s+3t=1$.`, S`Adding gives $5t=5$, so $t=1$ and $s=2$.`, S`Third component: $2s+t=5$, but $\vec b$ needs $9$. No choice works, so $\vec b$ is not a combination: it lies off the plane of $\vec p$ and $\vec q$.`, S`The same $s,t$ are forced for $(4,1,c)$, so it is a combination exactly when $c=5$; then $(4,1,5)=2\vec p+\vec q$.`],
    ans: S`No; $(4,1,c)$ is a combination only for $c=5$` },
  { title: "Collinear points in space", q: S`Are $A(2,-1,3)$, $B(4,0,1)$, $C(8,2,-3)$ collinear? If so, which point is between the others, and in what ratio does it divide the segment?`,
    fig: VF(scene3(5, { segs: [seg3([[1, -1.5, 4], [9, 2.5, -4]], { dash: true })], arrows: [a3([2, -1, 3], [4, 0, 1], { color: "blue", label: "AB", off: -14 }), a3([4, 0, 1], [8, 2, -3], { color: "red", label: "BC = 2AB", off: -16 })], points: [pt3([2, -1, 3], "A", { color: "black" }), pt3([4, 0, 1], "B", { color: "black" }), pt3([8, 2, -3], "C", { color: "black" })] }), 5.4),
    steps: [S`$\overrightarrow{AB}=(2,1,-2)$ and $\overrightarrow{AC}=(6,3,-6)=3\overrightarrow{AB}$, so the points are collinear.`, S`$t=3>1$, so $C$ is beyond $B$: the order along the line is $A$, $B$, $C$.`, S`$\overrightarrow{BC}=(4,2,-4)=2\overrightarrow{AB}$, so $AB:BC=1:2$.`],
    ans: S`Yes; $B$ is between $A$ and $C$, with $AB:BC=1:2$` },
  { title: "Every possible fourth vertex", q: S`Three vertices of a parallelogram are $A(1,1)$, $B(5,2)$, $C(3,4)$. Find \emph{all} possible positions of the fourth vertex $D$.`,
    fig: VF({ view: { xmin: -2, xmax: 8, ymin: -2, ymax: 6 }, step: 1, polys: [{ pts: [[1, 1], [5, 2], [3, 4]], fill: "#fef3c7", stroke: "amber" }], segs: [{ pts: [[1, 1], [-1, 3], [3, 4]], color: "blue", dash: true }, { pts: [[1, 1], [3, -1], [5, 2]], color: "red", dash: true }, { pts: [[5, 2], [7, 5], [3, 4]], color: "green", dash: true }], points: [{ x: 1, y: 1, label: "A", dx: -14, dy: 4 }, { x: 5, y: 2, label: "B" }, { x: 3, y: 4, label: "C", dx: -4, dy: -10 }, { x: -1, y: 3, label: "D₁", color: "blue" }, { x: 3, y: -1, label: "D₂", color: "red" }, { x: 7, y: 5, label: "D₃", color: "green" }] }, 5.4),
    steps: [S`In a parallelogram, opposite sides are equal vectors. Any of the three given points can be the vertex opposite $D$.`, S`$D$ opposite $B$: $\overrightarrow{AD}=\overrightarrow{BC}$, so $\vec d=\vec a+\vec c-\vec b=(-1,3)$.`, S`$D$ opposite $C$: $\vec d=\vec a+\vec b-\vec c=(3,-1)$. $D$ opposite $A$: $\vec d=\vec b+\vec c-\vec a=(7,5)$.`],
    ans: S`$D(-1,3)$, $D(3,-1)$ or $D(7,5)$` },
  { title: "Why the centroid is $\\tfrac13(\\vec a+\\vec b+\\vec c)$", q: S`Triangle $ABC$ has $A(1,1)$, $B(7,2)$, $C(4,6)$. Let $M$ be the midpoint of $BC$. Show that the point $G$ two-thirds of the way from $A$ to $M$ is $\tfrac13(\vec a+\vec b+\vec c)$, first for these numbers and then in general.`,
    fig: VF({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 7 }, step: 1, polys: [{ pts: [[1, 1], [7, 2], [4, 6]], fill: "#eef2ff", stroke: "blue" }], segs: [{ pts: [[1, 1], [5.5, 4]], color: "red", dash: true }, { pts: [[7, 2], [2.5, 3.5]], color: "gray", dash: true }, { pts: [[4, 6], [4, 1.5]], color: "gray", dash: true }], points: [{ x: 1, y: 1, label: "A", dx: -14, dy: 4 }, { x: 7, y: 2, label: "B" }, { x: 4, y: 6, label: "C", dx: 6, dy: -4 }, { x: 5.5, y: 4, label: "M", color: "red" }, { x: 4, y: 3, label: "G(4, 3)", color: "green", dx: -8, dy: -10, anchor: "end" }] }, 5.2),
    steps: [S`$\vec m=\tfrac12(\vec b+\vec c)=(5.5,4)$ and $\vec g=\vec a+\tfrac23(\vec m-\vec a)=(1,1)+\tfrac23(4.5,3)=(4,3)$.`, S`$\tfrac13(\vec a+\vec b+\vec c)=\tfrac13(12,9)=(4,3)$ --- the same point.`, S`In general: $\vec a+\tfrac23\big(\tfrac12(\vec b+\vec c)-\vec a\big)=\vec a-\tfrac23\vec a+\tfrac13\vec b+\tfrac13\vec c=\tfrac13(\vec a+\vec b+\vec c)$.`, S`The answer is symmetric in $A$, $B$, $C$, so the same point is two-thirds of the way along all three medians: the medians meet at $G$.`],
    ans: S`$G=(4,3)=\tfrac13(\vec a+\vec b+\vec c)$; all three medians pass through it` },
  { title: "Mixing alloys", q: S`Alloy $P$ contains $(6,3,1)$ kg of (copper, zinc, tin) per batch and alloy $Q$ contains $(2,5,3)$ kg. Can whole or partial batches give exactly $(18,21,11)$ kg? What about $(18,21,12)$?`,
    fig: VF({ view: { xmin: -1, xmax: 20, ymin: -1, ymax: 23 }, step: 2, width: 380, arrows: [{ from: [0, 0], to: [12, 6], vl: "2P", off: 16 }, { from: [12, 6], to: [18, 21], color: "red", vl: "3Q", off: 16 }, { from: [0, 0], to: [18, 21], color: "green", label: "(18, 21)", off: -16 }], texts: [{ x: 10, y: 22, t: "copper–zinc components", color: "gray" }] }, 4.6),
    steps: [S`We need $s(6,3,1)+t(2,5,3)=(18,21,11)$: $6s+2t=18$, $3s+5t=21$, $s+3t=11$.`, S`From the first, $t=9-3s$; the second becomes $3s+45-15s=21$, so $s=2$, $t=3$.`, S`Test the third: $2+3(3)=11$ \checkmark. For $(18,21,12)$ the first two equations force the same $s=2$, $t=3$, which give tin $11\ne12$: impossible.`],
    ans: S`$(18,21,11)=2P+3Q$; $(18,21,12)$ cannot be made` },
];

const PROBLEMS = [
  { level: 1, q: S`Compute $3(2,-1,0,4)-2(1,3,-2,5)$.`, ans: S`$(4,-9,4,2)$` },
  { level: 1, q: S`For $P(3,-2,5)$ and $Q(-1,4,2)$, find $\overrightarrow{PQ}$ and the midpoint of $PQ$.`, ans: S`$\overrightarrow{PQ}=(-4,6,-3)$; midpoint $(1,1,3.5)$` },
  { level: 1, q: S`Find $a$, $b$, $c$ if $(a-b,\ 2b,\ a+c)=(1,\ 6,\ 0)$.`, ans: S`$a=4$, $b=3$, $c=-4$` },
  { level: 2, q: S`Solve $3\vec x-2(1,-1,4)=\vec x+(6,0,-2)$.`, ans: S`$\vec x=(4,-1,3)$` },
  { level: 2, space: 4, q: S`Write $(3,5)$ as a combination of $\vec u=(2,1)$ and $\vec v=(1,-3)$, and draw it tip to tail on the grid.`, ans: S`$(3,5)=2\vec u-\vec v$`, fig: gridT({ xmin: -2, xmax: 6, ymin: -2, ymax: 6 }) },
  { level: 2, q: S`Find the point $P$ on segment $AB$, $A(-2,1,4)$, $B(6,-3,0)$, with $AP:PB=1:3$. Mark $A$, $B$ and $P$ on the sketch.`, ans: S`$P(0,0,3)$`,
    fig: VF(scene3(5, { segs: [seg3([[-2, 1, 4], [6, -3, 0]], { dash: true })], points: [pt3([-2, 1, 4], "A", { color: "black" }), pt3([6, -3, 0], "B", { color: "black" })] }), 5) },
  { level: 2, q: S`Is $(3,0,5)$ a linear combination of $(1,2,1)$ and $(1,-1,2)$? If it is, give the coefficients and check all three components.`, ans: S`Yes: $(3,0,5)=1(1,2,1)+2(1,-1,2)$` },
  { level: 2, space: 4, q: S`$ABCD$ is a parallelogram with $A(1,2)$, $B(4,3)$ and $D(2,5)$, where $B$ and $D$ are the neighbours of $A$. Find $C$ and draw the parallelogram.`, ans: S`$C(5,6)$`, fig: gridT({ xmin: -1, xmax: 7, ymin: -1, ymax: 7 }) },
  { level: 3, space: 5, q: S`For which values of $h$ and $k$ is $(h,3,k)$ a linear combination of $(1,1,0)$ and $(0,1,1)$? Describe the answer as a condition on $h$ and $k$.`, ans: S`exactly when $h+k=3$ (then $s=h$, $t=k$)` },
  { level: 3, space: 5, q: S`$ABCD$ is any parallelogram. Use vectors to prove that its diagonals $AC$ and $BD$ bisect each other (that is, they have the same midpoint).`, ans: S`$\vec c=\vec b+\vec d-\vec a$, so the midpoint of $AC$ is $\tfrac12(\vec a+\vec c)=\tfrac12(\vec b+\vec d)$, the midpoint of $BD$`,
    fig: VF({ view: { xmin: -0.6, xmax: 7.6, ymin: -0.6, ymax: 4.6 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [5, 1], [7, 4], [2, 3]], fill: "#ecfdf5", stroke: "green" }], segs: [{ pts: [[0, 0], [7, 4]], dash: true, color: "blue" }, { pts: [[5, 1], [2, 3]], dash: true, color: "red" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 4 }, { x: 5, y: 1, label: "B", dx: 6, dy: 14 }, { x: 7, y: 4, label: "C" }, { x: 2, y: 3, label: "D", dx: -14, dy: -4 }, { x: 3.5, y: 2, label: "?", color: "violet" }] }, 5) },
  { level: 3, space: 5, q: S`Find every triple $(s,t,r)$ with $s(1,0,1)+t(0,1,1)+r(1,1,2)=(2,3,5)$. Explain why there are infinitely many.`, ans: S`$s=2-r$, $t=3-r$, $r$ any real; there are infinitely many because $(1,1,2)=(1,0,1)+(0,1,1)$` },
  { level: 3, space: 5, q: S`Using only the vector-space properties of Section 5, prove: if $c\vec x=\vec 0$ and $c\ne0$, then $\vec x=\vec 0$. (First show $c\vec 0=\vec 0$.)`, ans: S`$c\vec 0=c(\vec 0+\vec 0)=c\vec 0+c\vec 0$, so $c\vec 0=\vec 0$; then $\vec x=1\vec x=(\tfrac1c c)\vec x=\tfrac1c(c\vec x)=\tfrac1c\vec 0=\vec 0$` },
  { level: 3, space: 5, q: S`Foods $F_1$, $F_2$, $F_3$ give (protein, carbohydrate, fat) in grams per serving of $(10,20,5)$, $(25,5,10)$ and $(5,30,0)$. How many servings of each give exactly $(65,60,25)$? Is the answer unique?`, ans: S`1 serving of $F_1$, 2 of $F_2$, 1 of $F_3$; yes, unique` },
];

export const WS = {
  code: "1.1",
  title: "Vectors in Rⁿ and Linear Combinations",
  bigideas: S`A vector in $\mathbb R^n$ is an ordered list of $n$ real numbers --- an arrow when $n=2$ or $3$, a list of data in general. Vectors add and scale one component at a time, and these two operations obey the familiar rules of algebra. Putting them together gives \textbf{linear combinations} $c_1\vec v_1+\dots+c_k\vec v_k$, the central idea of the whole course: deciding whether a vector is a combination of others means solving one linear equation per component.`,
  goals: ["Describe ℝⁿ, decide when vectors are equal, and recognise undefined sums.", "Add, subtract and scale vectors, by components and with arrows.", "Find the vector between two points, midpoints, and points that divide a segment.", "Solve vector equations using the algebra rules, and prove simple facts from them.", "Decide whether a vector is a linear combination of others and find the coefficients; test collinearity."],
  curriculum: "Geometry of ℝⁿ — vector operations, linear combinations and span",
  vocab: [["$\\mathbb R^n$", "all ordered lists of $n$ real numbers"], ["Scalar", "a real number used to multiply a vector"], ["Parallel", "$\\vec u=c\\vec v$ for some scalar $c$"], ["Linear combination", "$c_1\\vec v_1+\\dots+c_k\\vec v_k$"], ["Span", "the set of all linear combinations of the given vectors"], ["Standard basis", "$\\vec e_i$: 1 in place $i$, 0 elsewhere"]],
  hook: S`A bakery's muffin batch uses 2 cups of flour and 1 egg; a pancake batch uses 1 cup of flour and 3 eggs. Can it use up exactly 9 cups of flour and 12 eggs? Exactly 9 cups and 13 eggs? Write each question as $s(2,1)+t(1,3)=\vec b$ and answer it after reading Section 6.`,
  concepts: NOTES,
  summary: [
    S`$\vec x+\vec y$, $\vec x-\vec y$ and $c\vec x$ are computed one component at a time; sums need the same $\mathbb R^n$.`,
    S`$\overrightarrow{AB}=\vec b-\vec a$; midpoint $\tfrac12(\vec a+\vec b)$; the point with $AP:PB=m:n$ is $\dfrac{n\vec a+m\vec b}{m+n}$; centroid $\tfrac13(\vec a+\vec b+\vec c)$.`,
    S`$\vec u\parallel\vec v\iff\vec u=c\vec v$; $A,B,C$ collinear $\iff\overrightarrow{AC}=t\overrightarrow{AB}$.`,
    S`$\vec b$ is a linear combination of $\vec v_1,\dots,\vec v_k$ $\iff$ the system $c_1\vec v_1+\dots+c_k\vec v_k=\vec b$ (one equation per component) has a solution.`,
    S`Two non-parallel vectors span all of $\mathbb R^2$, but only a plane through $\vec 0$ in $\mathbb R^3$.`,
  ],
  tips: ["$\\overrightarrow{AB}$ is head minus tail: $\\vec b-\\vec a$, not $\\vec a-\\vec b$.", "Adding vectors of different sizes is undefined --- never pad with zeros.", "A scalar multiplies \\emph{every} component.", "When testing a combination in $\\mathbb R^3$, use two equations to find the coefficients and the third to check --- never skip the check.", "There is no division by a vector; divide only by nonzero scalars.", "Parallel vectors can give infinitely many (or no) coefficient choices."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

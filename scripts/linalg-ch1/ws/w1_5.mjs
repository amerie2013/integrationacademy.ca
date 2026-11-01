// LINALG1 Worksheet 1.5 — The Cross Product
// Self-contained: complete notes (definition, theorems with proofs, figures), 9 worked examples with figures,
// 13 practice problems at three levels, answer key.
import { scene3, a3, pt3, seg3, tri3 } from "../vecfig.mjs";
import { S, VF, def, thm, side, pr } from "./wkit.mjs";

const add = (...vs) => vs.reduce((s, v) => s.map((x, i) => x + v[i]), [0, 0, 0]);
/** the 12 edges of the parallelepiped on u, v, w (from the origin) */
const pped = (u, v, w, o = {}) => {
  const P = (a, b, c) => add(a ? u : [0, 0, 0], b ? v : [0, 0, 0], c ? w : [0, 0, 0]);
  const E = [[[0, 0, 0], [1, 0, 0]], [[0, 0, 0], [0, 1, 0]], [[0, 0, 0], [0, 0, 1]], [[1, 0, 0], [1, 1, 0]], [[1, 0, 0], [1, 0, 1]], [[0, 1, 0], [1, 1, 0]], [[0, 1, 0], [0, 1, 1]], [[0, 0, 1], [1, 0, 1]], [[0, 0, 1], [0, 1, 1]], [[1, 1, 0], [1, 1, 1]], [[1, 0, 1], [1, 1, 1]], [[0, 1, 1], [1, 1, 1]]];
  return E.map(([a, b]) => seg3([P(...a), P(...b)], { color: "gray", w: 1.2, ...o }));
};

// ── notes figures ──
const F_CROSS = VF(scene3(3.5, { polys: [{ pts: [pr([0, 0, 0]), pr([2, 0.5, 0]), pr([2.5, 2.5, 0]), pr([0.5, 2, 0])], fill: "#fef3c7", stroke: "amber" }], arrows: [a3([0, 0, 0], [2, 0.5, 0], { color: "blue", vl: "u", off: 14 }), a3([0, 0, 0], [0.5, 2, 0], { color: "red", vl: "v", off: 14 }), a3([0, 0, 0], [0, 0, 3.75], { color: "green", w: 3.4, label: "u × v", off: -18 })], texts: [{ x: pr([1.25, 1.25, 0])[0], y: pr([1.25, 1.25, 0])[1] - 0.1, t: "area", color: "amber" }] }), 5.6);
const F_CYCLE = VF({ view: { xmin: -2, xmax: 2, ymin: -1.6, ymax: 1.9 }, grid: false, axes: false, arrows: [{ from: [0.25, 1.05], to: [1.05, -0.35], color: "green" }, { from: [0.85, -0.65], to: [-0.85, -0.65], color: "green" }, { from: [-1.05, -0.35], to: [-0.25, 1.05], color: "green" }], texts: [{ x: 0, y: 1.25, t: "e₁", size: 18, color: "blue" }, { x: 1.3, y: -0.7, t: "e₂", size: 18, color: "blue" }, { x: -1.3, y: -0.7, t: "e₃", size: 18, color: "blue" }, { x: 0, y: -1.3, t: "with the arrows: +, against: −", color: "gray" }] }, 4.4);
const F_PAR = VF({ view: { xmin: -0.5, xmax: 7, ymin: -0.8, ymax: 3.4 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [5, 0], [6.6, 2.6], [1.6, 2.6]], fill: "#ecfdf5", stroke: "green" }], segs: [{ pts: [[1.6, 2.6], [1.6, 0]], color: "amber", dash: true }, { pts: [[1.6, 0.3], [1.9, 0.3], [1.9, 0]], color: "gray", w: 1.2 }], arcs: [{ at: [0, 0], r: 0.7, a: 0, b: 58.4, label: "θ" }], arrows: [{ from: [0, 0], to: [5, 0], vl: "u", off: 14 }, { from: [0, 0], to: [1.6, 2.6], color: "red", vl: "v", off: -16 }], texts: [{ x: 2.9, y: 1.3, t: "h = ‖v‖ sin θ", color: "amber" }] }, 5.4);
const PU = [2.5, 0, 0], PV = [0.6, 2.4, 0], PW = [0.5, 0.6, 2.2];
const F_BOX = VF(scene3(3.2, { segs: pped(PU, PV, PW), arrows: [a3([0, 0, 0], PU, { color: "blue", vl: "u", off: 14 }), a3([0, 0, 0], PV, { color: "red", vl: "v", off: -14 }), a3([0, 0, 0], PW, { color: "green", vl: "w", off: -14 })] }), 5.4);
const F_TORQUE = VF(scene3(3.5, { segs: [seg3([[0, 0, 0], [0, 3, 0]], { color: "gray", w: 7 })], arrows: [a3([0, 0, 0], [0, 3, 0], { color: "blue", vl: "r", off: 16 }), a3([0, 3, 0], [-1.6, 3, 0], { color: "red", vl: "F", off: 14 }), a3([0, 0, 0], [0, 0, 2.6], { color: "green", w: 3.4, label: "τ = r × F", off: -18 })], points: [pt3([0, 0, 0], "bolt", { color: "black", dx: -8, dy: 16, anchor: "end" })] }), 5.4);

const NOTES = [
  { h: "1. The cross product in $\\mathbb R^3$",
    lead: S`${def("cross product", S`For $\vec u=(u_1,u_2,u_3)$ and $\vec v=(v_1,v_2,v_3)$ in $\mathbb R^3$,
\[\vec u\times\vec v=(u_2v_3-u_3v_2,\ \ u_3v_1-u_1v_3,\ \ u_1v_2-u_2v_1).\]`)}
Unlike the dot product, the result is a \emph{vector}, and it is defined only in $\mathbb R^3$. It is perpendicular to both $\vec u$ and $\vec v$, and its length is the area of the parallelogram they span (shaded).`,
    fig: F_CROSS, w: 0.55,
    body: S`\textbf{A way to remember it.} Write the formal determinant and expand along the first row:
\[\vec u\times\vec v=\begin{vmatrix}\vec e_1&\vec e_2&\vec e_3\\u_1&u_2&u_3\\v_1&v_2&v_3\end{vmatrix}=\begin{vmatrix}u_2&u_3\\v_2&v_3\end{vmatrix}\vec e_1-\begin{vmatrix}u_1&u_3\\v_1&v_3\end{vmatrix}\vec e_2+\begin{vmatrix}u_1&u_2\\v_1&v_2\end{vmatrix}\vec e_3,\]
where $\left|\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\right|=ad-bc$. Watch the \textbf{minus sign} on the middle term.

\textbf{Example.} $(1,2,3)\times(4,5,6)=(2\cdot6-3\cdot5,\ 3\cdot4-1\cdot6,\ 1\cdot5-2\cdot4)=(-3,6,-3)$.` },

  { h: "2. Orthogonality and the right-hand rule",
    lead: thm("orthogonality", S`$\vec u\times\vec v$ is orthogonal to both $\vec u$ and $\vec v$.`) + S`\pf{$\vec u\cdot(\vec u\times\vec v)=u_1(u_2v_3-u_3v_2)+u_2(u_3v_1-u_1v_3)+u_3(u_1v_2-u_2v_1)$; all six terms cancel in pairs. The same works for $\vec v$.}
\textbf{Direction.} Of the two directions perpendicular to $\vec u$ and $\vec v$, the cross product takes the one given by the \textbf{right-hand rule}: curl the fingers of your right hand from $\vec u$ towards $\vec v$; your thumb points along $\vec u\times\vec v$. For the standard basis this gives the cycle in the figure:
\[\vec e_1\times\vec e_2=\vec e_3,\quad\vec e_2\times\vec e_3=\vec e_1,\quad\vec e_3\times\vec e_1=\vec e_2,\]
and going against the arrows gives a minus sign, e.g. $\vec e_2\times\vec e_1=-\vec e_3$.`,
    fig: F_CYCLE, w: 0.6 },

  { h: "3. The algebra of $\\times$ --- and what fails",
    lead: thm("algebraic rules", S`For $\vec u,\vec v,\vec w\in\mathbb R^3$ and scalars $c$:
(1) $\vec v\times\vec u=-(\vec u\times\vec v)$ (\emph{anticommutative}); (2) $\vec u\times(\vec v+\vec w)=\vec u\times\vec v+\vec u\times\vec w$; (3) $(c\vec u)\times\vec v=c(\vec u\times\vec v)=\vec u\times(c\vec v)$; (4) $\vec u\times\vec u=\vec 0$.`),
    body: S`Each rule follows from the component formula. Rule (4) is (1) with $\vec v=\vec u$: a vector equal to its own negative is $\vec 0$.

\textbf{What fails.} The cross product is \emph{not} commutative (order matters, rule 1) and \emph{not associative}: $\vec e_1\times(\vec e_1\times\vec e_2)=\vec e_1\times\vec e_3=-\vec e_2$, but $(\vec e_1\times\vec e_1)\times\vec e_2=\vec 0$. Always keep brackets.

\textbf{Using the rules.} With the $\vec e_i$ table and rules (2)--(4) you can multiply out without the formula: $(\vec e_1+2\vec e_2)\times\vec e_3=\vec e_1\times\vec e_3+2\,\vec e_2\times\vec e_3=-\vec e_2+2\vec e_1=(2,-1,0)$.` },

  { h: "4. Length, area and the sine of the angle",
    lead: thm("length of the cross product", S`If $\theta$ is the angle between $\vec u$ and $\vec v$, then
\[\|\vec u\times\vec v\|=\|\vec u\|\,\|\vec v\|\sin\theta.\]`) + S`\pf{Expanding both sides in components gives \emph{Lagrange's identity} $\|\vec u\times\vec v\|^2=\|\vec u\|^2\|\vec v\|^2-(\vec u\cdot\vec v)^2$. Substitute $\vec u\cdot\vec v=\|\vec u\|\|\vec v\|\cos\theta$: the right side is $\|\vec u\|^2\|\vec v\|^2(1-\cos^2\theta)=\|\vec u\|^2\|\vec v\|^2\sin^2\theta$, and $\sin\theta\ge0$ for $0\le\theta\le180^\circ$.}`,
    fig: F_PAR, w: 0.58,
    body: S`\textbf{Areas.} A parallelogram with sides $\vec u$, $\vec v$ has base $\|\vec u\|$ and height $h=\|\vec v\|\sin\theta$ (figure), so
\[\text{area of parallelogram}=\|\vec u\times\vec v\|,\qquad\text{area of triangle}=\tfrac12\|\vec u\times\vec v\|.\]
For a triangle $PQR$ use $\vec u=\overrightarrow{PQ}$, $\vec v=\overrightarrow{PR}$.

\textbf{Parallel test.} $\vec u\times\vec v=\vec 0$ exactly when $\sin\theta=0$ or one vector is $\vec 0$ --- that is, when $\vec u$ and $\vec v$ are parallel (or one is zero).` },

  { h: "5. The scalar triple product and volume",
    lead: S`The number $\vec u\cdot(\vec v\times\vec w)$ is the \textbf{scalar triple product}. Its absolute value is the \textbf{volume} of the parallelepiped (slanted box) with edges $\vec u,\vec v,\vec w$:
\[V=|\vec u\cdot(\vec v\times\vec w)|.\]
\emph{Why:} the base spanned by $\vec v,\vec w$ has area $\|\vec v\times\vec w\|$, and the height is the length of the part of $\vec u$ along the normal $\vec v\times\vec w$, which is $|\vec u\cdot(\vec v\times\vec w)|/\|\vec v\times\vec w\|$. Base times height gives the formula.`,
    fig: F_BOX, w: 0.56,
    body: S`\textbf{Determinant form.} $\vec u\cdot(\vec v\times\vec w)=\begin{vmatrix}u_1&u_2&u_3\\v_1&v_2&v_3\\w_1&w_2&w_3\end{vmatrix}$ (Chapter 6 develops determinants).

\textbf{Coplanar test.} Three vectors from the origin lie in one plane exactly when the box is flat: $\vec u\cdot(\vec v\times\vec w)=0$. Four points $A,B,C,D$ are coplanar exactly when $\overrightarrow{AB}\cdot(\overrightarrow{AC}\times\overrightarrow{AD})=0$; otherwise the tetrahedron $ABCD$ has volume $\tfrac16|\overrightarrow{AB}\cdot(\overrightarrow{AC}\times\overrightarrow{AD})|$.` },

  { h: "6. Torque",
    lead: S`A force $\vec F$ applied at position $\vec r$ (measured from a pivot or bolt) produces a \textbf{torque}
\[\vec\tau=\vec r\times\vec F.\]
Its direction is the axis the object turns about (right-hand rule), and its size $\|\vec\tau\|=\|\vec r\|\,\|\vec F\|\sin\theta$ measures the turning effect. Pushing at right angles to the wrench, as far from the bolt as possible, gives the most torque; pushing along the wrench gives none.`,
    fig: F_TORQUE, w: 0.56 },
];

// ── worked examples ──
const EXAMPLES = [
  { title: "Compute and check", q: S`Compute $\vec u\times\vec v$ for $\vec u=(3,-2,1)$ and $\vec v=(1,4,-2)$, and check that it is orthogonal to both.`,
    fig: VF(scene3(4, { arrows: [a3([0, 0, 0], [3, -2, 1], { color: "blue", vl: "u", off: 14 }), a3([0, 0, 0], [1, 4, -2], { color: "red", vl: "v", off: 14 }), a3([0, 0, 0], [0, 1.4, 2.8], { color: "green", label: "u × v (scaled)", off: -16 })] }), 4.8),
    steps: [S`First: $(-2)(-2)-(1)(4)=0$. Second: $(1)(1)-(3)(-2)=7$. Third: $(3)(4)-(-2)(1)=14$.`, S`So $\vec u\times\vec v=(0,7,14)$.`, S`Check: $(0,7,14)\cdot(3,-2,1)=0-14+14=0$ and $(0,7,14)\cdot(1,4,-2)=0+28-28=0$ \checkmark.`],
    ans: S`$(0,7,14)$` },
  { title: "Multiplying out with the basis table", q: S`Use the rules and the $\vec e_i$ table to compute $(2\vec e_1-\vec e_2)\times(\vec e_1+3\vec e_3)$, then check with the formula.`,
    fig: VF(scene3(2.6, { arrows: [a3([0, 0, 0], [2, -1, 0], { color: "blue", label: "2e₁ − e₂", off: 14 }), a3([0, 0, 0], [1, 0, 3], { color: "red", label: "e₁ + 3e₃", off: -14 }), a3([0, 0, 0], [-1.5, -3, 0.5], { color: "green", label: "½ × answer", off: 16 })] }), 4.8),
    steps: [S`Distribute: $2\,\vec e_1\times\vec e_1+6\,\vec e_1\times\vec e_3-\vec e_2\times\vec e_1-3\,\vec e_2\times\vec e_3$.`, S`Use the table: $0+6(-\vec e_2)-(-\vec e_3)-3\vec e_1=-3\vec e_1-6\vec e_2+\vec e_3$.`, S`Formula check: $(2,-1,0)\times(1,0,3)=(-3-0,\ 0-6,\ 0+1)=(-3,-6,1)$ \checkmark.`],
    ans: S`$(-3,-6,1)$` },
  { title: "A parallelogram in space", q: S`A parallelogram has vertices $A(2,0,0)$, $B(0,3,0)$ and $D(0,0,2)$, where $B$ and $D$ are adjacent to $A$. Find the fourth vertex $C$ and the area.`,
    fig: VF(scene3(3.5, { polys: [{ pts: [pr([2, 0, 0]), pr([0, 3, 0]), pr([-2, 3, 2]), pr([0, 0, 2])], fill: "#ecfdf5", stroke: "green", op: 0.85 }], points: [pt3([2, 0, 0], "A", { color: "black", dx: -14 }), pt3([0, 3, 0], "B", { color: "black", dy: 16 }), pt3([-2, 3, 2], "C", { color: "black" }), pt3([0, 0, 2], "D", { color: "black", dx: -14 })] }), 4.8),
    steps: [S`$\overrightarrow{AB}=(-2,3,0)$, $\overrightarrow{AD}=(-2,0,2)$, and $C=B+\overrightarrow{AD}=(-2,3,2)$.`, S`$\overrightarrow{AB}\times\overrightarrow{AD}=(3\cdot2-0\cdot0,\ 0\cdot(-2)-(-2)\cdot2,\ (-2)\cdot0-3\cdot(-2))=(6,4,6)$.`, S`Area $=\|(6,4,6)\|=\sqrt{88}=2\sqrt{22}\approx9.38$.`],
    ans: S`$C(-2,3,2)$; area $2\sqrt{22}\approx9.38$` },
  { title: "Area and an altitude of a triangle", q: S`Find the area of the triangle with vertices $P(2,0,0)$, $Q(0,3,0)$, $R(0,0,6)$, and the height from $R$ to side $PQ$.`,
    fig: VF(scene3(5.5, { polys: [{ ...tri3(2, 3, 6, "#eef2ff", "blue"), op: 0.8 }], segs: [seg3([[0, 0, 6], [1.385, 0.923, 0]], { color: "amber", dash: true })], points: [pt3([2, 0, 0], "P", { color: "black", dx: -14 }), pt3([0, 3, 0], "Q", { color: "black", dy: 16 }), pt3([0, 0, 6], "R", { color: "black" })] }), 4.6),
    steps: [S`$\overrightarrow{PQ}=(-2,3,0)$, $\overrightarrow{PR}=(-2,0,6)$, and $\overrightarrow{PQ}\times\overrightarrow{PR}=(18-0,\ 0+12,\ 0+6)=(18,12,6)$.`, S`$\|(18,12,6)\|=\sqrt{504}=6\sqrt{14}$, so the area is $3\sqrt{14}\approx11.22$.`, S`Area $=\tfrac12\cdot PQ\cdot h$ with $PQ=\sqrt{13}$, so $h=\dfrac{6\sqrt{14}}{\sqrt{13}}\approx6.23$ (dashed).`],
    ans: S`area $3\sqrt{14}\approx11.22$; height $\approx6.23$` },
  { title: "Sine and cosine agree", q: S`For $\vec u=(1,2,2)$ and $\vec v=(3,0,4)$, find $\sin\theta$ from the cross product and $\cos\theta$ from the dot product, and check $\sin^2\theta+\cos^2\theta=1$.`,
    fig: VF(scene3(4.5, { arrows: [a3([0, 0, 0], [1, 2, 2], { color: "blue", vl: "u", off: -14 }), a3([0, 0, 0], [3, 0, 4], { color: "red", vl: "v", off: -14 })] }), 4.4),
    steps: [S`$\vec u\times\vec v=(8-0,\ 6-4,\ 0-6)=(8,2,-6)$, so $\|\vec u\times\vec v\|=\sqrt{104}$; $\|\vec u\|=3$, $\|\vec v\|=5$.`, S`$\sin\theta=\dfrac{\sqrt{104}}{15}$ and $\cos\theta=\dfrac{\vec u\cdot\vec v}{15}=\dfrac{11}{15}$.`, S`$\dfrac{104}{225}+\dfrac{121}{225}=1$ \checkmark, and $\theta=\arccos\tfrac{11}{15}\approx42.8^\circ$.`],
    ans: S`$\sin\theta=\tfrac{\sqrt{104}}{15}$, $\cos\theta=\tfrac{11}{15}$, $\theta\approx42.8^\circ$` },
  { title: "Both unit normals", q: S`Find both unit vectors orthogonal to $\vec u=(1,-1,2)$ and $\vec v=(2,1,-1)$.`,
    fig: VF(scene3(3, { arrows: [a3([0, 0, 0], [1, -1, 2], { color: "blue", vl: "u", off: 14 }), a3([0, 0, 0], [2, 1, -1], { color: "red", vl: "v", off: 14 }), a3([0, 0, 0], [-0.34, 1.69, 1.01], { color: "green", label: "n̂", off: -14 }), a3([0, 0, 0], [0.34, -1.69, -1.01], { color: "green", dash: true, label: "−n̂", off: 14 })] }), 4.6),
    steps: [S`$\vec u\times\vec v=((-1)(-1)-2\cdot1,\ 2\cdot2-1\cdot(-1),\ 1\cdot1-(-1)\cdot2)=(-1,5,3)$.`, S`$\|(-1,5,3)\|=\sqrt{35}$.`, S`The two unit normals point in opposite directions: $\pm\tfrac{1}{\sqrt{35}}(-1,5,3)$. (The figure shows them at twice their length.)`],
    ans: S`$\pm\tfrac1{\sqrt{35}}(-1,5,3)$` },
  { title: "Volume of a slanted box", q: S`Find the volume of the parallelepiped with edges $\vec u=(2,1,0)$, $\vec v=(0,3,1)$, $\vec w=(1,0,4)$.`,
    fig: VF(scene3(4, { segs: pped([2, 1, 0], [0, 3, 1], [1, 0, 4]), arrows: [a3([0, 0, 0], [2, 1, 0], { color: "blue", vl: "u", off: 14 }), a3([0, 0, 0], [0, 3, 1], { color: "red", vl: "v", off: 14 }), a3([0, 0, 0], [1, 0, 4], { color: "green", vl: "w", off: -14 })] }), 4.8),
    steps: [S`$\vec v\times\vec w=(3\cdot4-1\cdot0,\ 1\cdot1-0\cdot4,\ 0\cdot0-3\cdot1)=(12,1,-3)$.`, S`$\vec u\cdot(\vec v\times\vec w)=24+1+0=25$.`, S`$V=|25|=25$ cubic units. It is not zero, so the three vectors are not coplanar.`],
    ans: S`$25$` },
  { title: "Coplanar or not?", q: S`Are $A(1,0,1)$, $B(2,1,3)$, $C(0,2,1)$, $D(3,-1,4)$ coplanar? If not, find the volume of the tetrahedron $ABCD$.`,
    fig: VF(scene3(4, { segs: [seg3([[1, 0, 1], [2, 1, 3], [0, 2, 1], [1, 0, 1], [3, -1, 4], [2, 1, 3]], { color: "blue", w: 1.6 }), seg3([[0, 2, 1], [3, -1, 4]], { color: "blue", w: 1.2, dash: true })], points: [pt3([1, 0, 1], "A", { color: "black", dy: 16 }), pt3([2, 1, 3], "B", { color: "black" }), pt3([0, 2, 1], "C", { color: "black" }), pt3([3, -1, 4], "D", { color: "black", dx: -14 })] }), 4.6),
    steps: [S`$\overrightarrow{AB}=(1,1,2)$, $\overrightarrow{AC}=(-1,2,0)$, $\overrightarrow{AD}=(2,-1,3)$.`, S`$\overrightarrow{AC}\times\overrightarrow{AD}=(6-0,\ 0+3,\ 1-4)=(6,3,-3)$, and $\overrightarrow{AB}\cdot(6,3,-3)=6+3-6=3\ne0$.`, S`Not coplanar. The tetrahedron is $\tfrac16$ of the box: $V=\tfrac16\cdot3=\tfrac12$.`],
    ans: S`Not coplanar; volume $\tfrac12$` },
  { title: "Torque on a wrench", q: S`A wrench runs from a bolt at $O$ to $\vec r=(0.25,0,0)$ m. A force $\vec F=(0,30,-40)$ N acts at its end. Find the torque vector and its magnitude.`,
    fig: VF(scene3(3, { segs: [seg3([[0, 0, 0], [2.5, 0, 0]], { color: "gray", w: 6 })], arrows: [a3([2.5, 0, 0], [2.5, 1.5, -2], { color: "red", label: "F", off: 14 }), a3([0, 0, 0], [0, 1.6, 1.2], { color: "green", w: 3.2, label: "τ", off: -14 })], points: [pt3([0, 0, 0], "O", { color: "black", dx: -14 })] }), 4.6),
    steps: [S`$\vec\tau=\vec r\times\vec F=(0\cdot(-40)-0\cdot30,\ 0\cdot0-0.25(-40),\ 0.25\cdot30-0\cdot0)=(0,\ 10,\ 7.5)$.`, S`$\|\vec\tau\|=\sqrt{100+56.25}=12.5$ N\,m.`, S`Check: $\vec F\perp\vec r$ here, so $\|\vec\tau\|=\|\vec r\|\|\vec F\|=0.25\cdot50=12.5$ \checkmark.`],
    ans: S`$\vec\tau=(0,10,7.5)$ N\,m; $12.5$ N\,m` },
];

const PROBLEMS = [
  { level: 1, q: S`Compute $(4,0,-1)\times(2,3,5)$ and check that the answer is orthogonal to both vectors.`, ans: S`$(3,-22,12)$` },
  { level: 1, q: S`$\vec u\times\vec v=(2,-1,5)$. Find $\vec v\times\vec u$, $(3\vec u)\times\vec v$ and $\vec u\times\vec u$.`, ans: S`$(-2,1,-5)$; $(6,-3,15)$; $\vec 0$` },
  { level: 1, q: S`Find the area of the parallelogram with sides $(1,1,0)$ and $(0,2,3)$.`, ans: S`$\|(3,-3,2)\|=\sqrt{22}\approx4.69$` },
  { level: 2, q: S`Find the area of the triangle $A(1,2,0)$, $B(3,0,1)$, $C(0,1,4)$.`, ans: S`$\tfrac12\|(-7,-9,-4)\|=\tfrac12\sqrt{146}\approx6.04$`,
    fig: VF(scene3(4, { polys: [{ pts: [pr([1, 2, 0]), pr([3, 0, 1]), pr([0, 1, 4])], fill: "#eef2ff", stroke: "blue" }], points: [pt3([1, 2, 0], "A", { color: "black", dy: 16 }), pt3([3, 0, 1], "B", { color: "black" }), pt3([0, 1, 4], "C", { color: "black" })] }), 4.4) },
  { level: 2, q: S`Find a unit vector orthogonal to the plane through $P(1,0,0)$, $Q(0,2,0)$, $R(0,0,3)$.`, ans: S`$\pm\left(\tfrac67,\tfrac37,\tfrac27\right)$`,
    fig: VF(scene3(3.5, { polys: [{ ...tri3(1, 2, 3, "#ecfdf5", "green"), op: 0.8 }], points: [pt3([1, 0, 0], "P", { color: "black", dx: -14 }), pt3([0, 2, 0], "Q", { color: "black", dy: 16 }), pt3([0, 0, 3], "R", { color: "black" })] }), 4.2) },
  { level: 2, q: S`Use the $\vec e_i$ table (no component formula) to compute $(\vec e_1+\vec e_2)\times(\vec e_2-\vec e_3)$. Then check with the formula.`, ans: S`$\vec e_3+\vec e_2-\vec e_1=(-1,1,1)$` },
  { level: 2, q: S`Use the cross product to decide whether $(3,-6,9)$ and $(-2,4,-6)$ are parallel.`, ans: S`The cross product is $\vec 0$: parallel ($(3,-6,9)=-\tfrac32(-2,4,-6)$)` },
  { level: 2, q: S`$\|\vec u\|=3$, $\|\vec v\|=4$ and $\vec u\cdot\vec v=6$. Find $\|\vec u\times\vec v\|$ and the angle between $\vec u$ and $\vec v$.`, ans: S`$\sqrt{144-36}=6\sqrt3$; $60^\circ$` },
  { level: 3, space: 5, q: S`Find the volume of the parallelepiped with edges $(1,2,0)$, $(0,1,3)$ and $(2,0,1)$, and the volume of the tetrahedron with the same three edges from one corner.`, ans: S`$|(1,2,0)\cdot(1,6,-2)|=13$; tetrahedron $\tfrac{13}6$`,
    fig: VF(scene3(3.5, { segs: pped([1, 2, 0], [0, 1, 3], [2, 0, 1]) }), 4.4) },
  { level: 3, space: 5, q: S`For which values of $k$ do the vectors $(1,k,2)$, $(2,1,1)$ and $(0,1,k)$ lie in one plane through the origin?`, ans: S`$(1,k,2)\cdot(k-1,-2k,2)=-2k^2+k+3=0$: $k=\tfrac32$ or $k=-1$` },
  { level: 3, space: 5, q: S`Prove that $(\vec u+\vec v)\times(\vec u-\vec v)=-2(\vec u\times\vec v)$. Use it to compare the area of a parallelogram with the area of the parallelogram built on its two diagonals.`, ans: S`Expand: $\vec u\times\vec u-\vec u\times\vec v+\vec v\times\vec u-\vec v\times\vec v=-2(\vec u\times\vec v)$; the diagonal parallelogram has twice the area` },
  { level: 3, space: 5, q: S`Find every vector $\vec x$ with $(1,1,0)\times\vec x=(2,-2,1)$. Describe the set geometrically and explain why there is more than one answer.`, ans: S`$\vec x=(a,a+1,2)=(0,1,2)+a(1,1,0)$: a line; adding a multiple of $(1,1,0)$ does not change the cross product` },
  { level: 3, space: 5, q: S`A door hinge is at $O$. A force $\vec F=(0,0,-50)$ N is applied at $\vec r=(0.3,0.4,0)$ m. Find the torque and its magnitude. At what point of the line through $O$ and $\vec r$ would the same force give half the torque?`, ans: S`$\vec\tau=(-20,15,0)$, $25$ N\,m; at $\tfrac12\vec r=(0.15,0.2,0)$`,
    fig: VF(scene3(3, { segs: [seg3([[0, 0, 0], [0.3 * 6, 0.4 * 6, 0]], { color: "gray", w: 5 })], arrows: [a3([1.8, 2.4, 0], [1.8, 2.4, -1.6], { color: "red", label: "F", off: 14 })], points: [pt3([0, 0, 0], "O", { color: "black", dx: -14 })] }), 4.2) },
];

export const WS = {
  code: "1.5",
  title: "The Cross Product",
  bigideas: S`In $\mathbb R^3$ two vectors have a product that is again a vector: $\vec u\times\vec v$ is perpendicular to both, points by the right-hand rule, and has length $\|\vec u\|\|\vec v\|\sin\theta$ --- the area of their parallelogram. It is anticommutative and not associative. It gives normal vectors, areas, a parallel test, volumes through the triple product $\vec u\cdot(\vec v\times\vec w)$, and torque in physics.`,
  goals: ["Compute cross products by the formula and with the basis table.", "Use the algebra of ×, including what fails (commutativity, associativity).", "Find areas of parallelograms and triangles and test for parallel vectors.", "Use the scalar triple product for volumes and coplanarity.", "Find normal vectors and torques."],
  curriculum: "Geometry of ℝ³ — the cross product, areas and volumes",
  vocab: [["Cross product", "$\\vec u\\times\\vec v$, a vector in $\\mathbb R^3$"], ["Right-hand rule", "fingers from $\\vec u$ to $\\vec v$, thumb along $\\vec u\\times\\vec v$"], ["Anticommutative", "$\\vec v\\times\\vec u=-\\vec u\\times\\vec v$"], ["Scalar triple product", "$\\vec u\\cdot(\\vec v\\times\\vec w)$, a signed volume"], ["Torque", "$\\vec\\tau=\\vec r\\times\\vec F$"]],
  hook: S`You need a vector perpendicular to both $(1,2,3)$ and $(4,5,6)$. Write down the two dot-product equations it must satisfy and find one solution by trial. Then compare with the formula in Section 1.`,
  concepts: NOTES,
  summary: [
    S`$\vec u\times\vec v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1)$; minus sign on the middle term of the determinant form.`,
    S`$\vec u\times\vec v\perp\vec u,\vec v$; right-hand rule; $\vec e_1\times\vec e_2=\vec e_3$ (cyclic), reversed order gives $-$.`,
    S`$\vec v\times\vec u=-\vec u\times\vec v$, $\vec u\times\vec u=\vec 0$; distributive; \textbf{not} associative.`,
    S`$\|\vec u\times\vec v\|=\|\vec u\|\|\vec v\|\sin\theta$ = parallelogram area; triangle $=\tfrac12$; $\vec u\times\vec v=\vec 0\iff$ parallel.`,
    S`Volume $=|\vec u\cdot(\vec v\times\vec w)|$ (tetrahedron: $\tfrac16$ of it); $0\iff$ coplanar; torque $\vec\tau=\vec r\times\vec F$.`,
  ],
  tips: ["Forgetting the minus sign in the middle component is the most common error --- always check the answer is orthogonal to both vectors.", "Order matters: $\\vec u\\times\\vec v$ and $\\vec v\\times\\vec u$ point opposite ways.", "The cross product only exists in $\\mathbb R^3$.", "Triangle area is \\emph{half} the cross-product length.", "Brackets matter: $\\vec u\\times(\\vec v\\times\\vec w)\\ne(\\vec u\\times\\vec v)\\times\\vec w$ in general.", "A volume is the \\emph{absolute value} of the triple product."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

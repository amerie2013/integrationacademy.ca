// LINALG1 Worksheet 1.4 — The Dot Product, Angles and Orthogonality
// Self-contained: complete notes (definitions, theorems with proofs, figures), 9 worked examples with figures,
// 13 practice problems at three levels, answer key.
import { gridT, planeT } from "./figT.mjs";
import { scene3, a3, pt3, seg3, box3 } from "../vecfig.mjs";
import { S, VF, def, thm, side, pr } from "./wkit.mjs";

const D = Math.PI / 180;
const at = (r, deg) => [r * Math.cos(deg * D), r * Math.sin(deg * D)];

// ── notes figures ──
const F_LAW = VF({ view: { xmin: -0.8, xmax: 6, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, arcs: [{ at: [0, 0], r: 0.8, a: 0, b: 51.3, label: "θ" }], arrows: [{ from: [0, 0], to: [5, 0], vl: "u", off: 16 }, { from: [0, 0], to: [2.5, 3.1], color: "red", vl: "v", off: -16 }, { from: [2.5, 3.1], to: [5, 0], color: "green", label: "u − v", off: -16 }] }, 5.4);
const pair = (x0, deg, label) => [{ from: [x0, 0], to: [x0 + 2, 0], w: 2.6 }, { from: [x0, 0], to: [x0 + 2 * Math.cos(deg * D), 2 * Math.sin(deg * D)], color: "red", w: 2.6 }];
const F_SIGN = VF({ width: 420, view: { xmin: -0.6, xmax: 12.6, ymin: -1.3, ymax: 2.4 }, grid: false, axes: false, arrows: [...pair(0, 45), ...pair(5, 90), ...pair(10, 140)], arcs: [{ at: [0, 0], r: 0.6, a: 0, b: 45 }, { at: [5, 0], r: 0.45, a: 0, b: 90 }, { at: [10, 0], r: 0.45, a: 0, b: 140 }], texts: [{ x: 1, y: -0.75, t: "u·v > 0: acute", color: "green" }, { x: 5.6, y: -0.75, t: "u·v = 0: right", color: "amber" }, { x: 10.2, y: -0.75, t: "u·v < 0: obtuse", color: "red" }] }, 9);
const F_PYTH = VF({ view: { xmin: -0.6, xmax: 5.4, ymin: -0.8, ymax: 3.6 }, grid: false, axes: false, segs: [{ pts: [[4, 0.4], [3.6, 0.4], [3.6, 0]], color: "gray", w: 1.4 }], arrows: [{ from: [0, 0], to: [3.6, 0], vl: "u", off: 16 }, { from: [3.6, 0], to: [3.6, 2.8], color: "red", vl: "v", off: -16 }, { from: [0, 0], to: [3.6, 2.8], color: "green", label: "u + v", off: -16 }] }, 4.8);
const F_CS = planeT({ view: { xmin: -3, xmax: 2, ymin: -1, ymax: 12 }, step: { x: 1, y: 2 }, width: 300, xlabel: "t", ylabel: "f(t)", curves: [{ f: (t) => 2 * t * t + 4 * t + 3, color: "violet" }], points: [{ x: -1, y: 1, label: "minimum ≥ 0", color: "green" }] }, 5.2);
const F_DIR = VF(scene3(4, { arrows: [a3([0, 0, 0], [2, 2.5, 3], { color: "blue", vl: "u", off: -16 })], segs: [seg3([[2, 2.5, 3], [2, 0, 0]], { dash: true, w: 1 }), seg3([[2, 2.5, 3], [0, 2.5, 0]], { dash: true, w: 1 }), seg3([[2, 2.5, 3], [0, 0, 3]], { dash: true, w: 1 })], texts: [{ x: pr([0.9, 0, 0])[0] + 0.2, y: pr([0.9, 0, 0])[1] + 0.45, t: "α", color: "amber" }, { x: pr([0, 1, 0])[0], y: pr([0, 1, 0])[1] + 0.35, t: "β", color: "amber" }, { x: pr([0, 0, 1.1])[0] + 0.3, y: pr([0, 0, 1.1])[1], t: "γ", color: "amber" }] }), 5.4);
const F_WORK = VF({ view: { xmin: -0.5, xmax: 8.4, ymin: -1.2, ymax: 4.2 }, grid: false, axes: false, polys: [{ pts: [[-0.2, -0.6], [1.4, -0.6], [1.4, 0.4], [-0.2, 0.4]], fill: "#e2e8f0", stroke: "gray" }], segs: [{ pts: [[4.5, 0], [4.5, 3.2]], color: "gray", dash: true, w: 1.2 }], arcs: [{ at: [0.6, 0], r: 0.9, a: 0, b: 39.4, label: "θ" }], arrows: [{ from: [0.6, 0], to: [4.5, 3.2], color: "red", label: "F", off: -14 }, { from: [0.6, -0.9], to: [7.6, -0.9], color: "blue", label: "d", off: -12 }, { from: [0.6, 0], to: [4.5, 0], color: "green", w: 3.4, label: "‖F‖cos θ", off: 14 }] }, 5.4);

const NOTES = [
  { h: "1. The dot product",
    lead: S`${def("dot product", S`For $\vec u,\vec v\in\mathbb R^n$, the \textbf{dot product} is the \emph{number}
\[\vec u\cdot\vec v=u_1v_1+u_2v_2+\dots+u_nv_n.\]`)}
Multiply matching components and add. For example $(2,-1,3)\cdot(4,0,-2)=8+0-6=2$. The result is a scalar, not a vector, and both vectors must be in the same $\mathbb R^n$.

\textbf{Length from the dot product.} $\vec u\cdot\vec u=u_1^2+\dots+u_n^2$, so $\|\vec u\|^2=\vec u\cdot\vec u$ --- the dot product contains the norm.`,
    body: thm("algebra of the dot product", S`For all $\vec u,\vec v,\vec w\in\mathbb R^n$ and scalars $c$: (1) $\vec u\cdot\vec v=\vec v\cdot\vec u$; (2) $\vec u\cdot(\vec v+\vec w)=\vec u\cdot\vec v+\vec u\cdot\vec w$; (3) $(c\vec u)\cdot\vec v=c(\vec u\cdot\vec v)$; (4) $\vec u\cdot\vec u\ge0$, with equality only for $\vec u=\vec 0$.`) + S`\pf{Each is a property of real numbers applied term by term; for (2), $\sum u_i(v_i+w_i)=\sum u_iv_i+\sum u_iw_i$.}
\textbf{Expanding like algebra.} The rules let us multiply out:
\[\|\vec u+\vec v\|^2=(\vec u+\vec v)\cdot(\vec u+\vec v)=\|\vec u\|^2+2\,\vec u\cdot\vec v+\|\vec v\|^2,\]
and likewise $\|\vec u-\vec v\|^2=\|\vec u\|^2-2\,\vec u\cdot\vec v+\|\vec v\|^2$. These two identities are used constantly.` },

  { h: "2. The geometry: $\\vec u\\cdot\\vec v=\\|\\vec u\\|\\,\\|\\vec v\\|\\cos\\theta$",
    lead: thm("geometric form", S`If $\theta$ ($0\le\theta\le180^\circ$) is the angle between nonzero vectors $\vec u$ and $\vec v$, then
\[\vec u\cdot\vec v=\|\vec u\|\,\|\vec v\|\cos\theta.\]`) + S`\pf{In the triangle with sides $\vec u$, $\vec v$ and $\vec u-\vec v$ (figure), the law of cosines gives $\|\vec u-\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2-2\|\vec u\|\|\vec v\|\cos\theta$. The expansion in Section 1 gives $\|\vec u-\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2-2\,\vec u\cdot\vec v$. Compare.}`,
    fig: F_LAW, w: 0.6,
    body: S`\textbf{Finding an angle.} Solve for the cosine:
\[\cos\theta=\frac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|},\qquad\theta=\arccos\frac{\vec u\cdot\vec v}{\|\vec u\|\,\|\vec v\|}.\]
In $\mathbb R^n$ for $n\ge4$ we have no picture, so this formula \emph{defines} the angle; Section 4 shows the fraction always lies between $-1$ and $1$, so the definition makes sense.` },

  { h: "3. Reading the sign",
    lead: S`Since norms are positive, the sign of $\vec u\cdot\vec v$ is the sign of $\cos\theta$:` + F_SIGN,
    body: S`\begin{center}\begin{tabular}{lll}\toprule $\vec u\cdot\vec v>0$ & $0^\circ\le\theta<90^\circ$ & acute (they point roughly the same way)\\ $\vec u\cdot\vec v=0$ & $\theta=90^\circ$ & right angle\\ $\vec u\cdot\vec v<0$ & $90^\circ<\theta\le180^\circ$ & obtuse (they point roughly opposite ways)\\ \bottomrule\end{tabular}\end{center}
The extreme cases: $\theta=0^\circ$ (same direction) gives $\vec u\cdot\vec v=\|\vec u\|\|\vec v\|$, and $\theta=180^\circ$ gives $-\|\vec u\|\|\vec v\|$.` },

  { h: "4. Orthogonality and Pythagoras",
    lead: S`${def("orthogonal", S`$\vec u$ and $\vec v$ are \textbf{orthogonal}, $\vec u\perp\vec v$, if $\vec u\cdot\vec v=0$.`)}
For nonzero vectors this means a right angle. The zero vector is orthogonal to every vector.
${thm("Pythagoras in $\\mathbb R^n$", S`$\|\vec u+\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2$ if and only if $\vec u\perp\vec v$.`)}`,
    fig: F_PYTH, w: 0.6,
    body: S`\pf{By Section 1, $\|\vec u+\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2+2\,\vec u\cdot\vec v$, and the middle term vanishes exactly when $\vec u\cdot\vec v=0$.}
\textbf{Finding orthogonal vectors.} In $\mathbb R^2$, $(a,b)\perp(-b,a)$ always. In $\mathbb R^3$, a vector orthogonal to two given vectors solves two equations $\vec x\cdot\vec u=0$, $\vec x\cdot\vec v=0$ (Example 7); Worksheet 1.5 gives a formula, the cross product.` },

  { h: "5. Cauchy--Schwarz and the triangle inequality",
    lead: thm("Cauchy--Schwarz inequality", S`For all $\vec u,\vec v\in\mathbb R^n$: $\ |\vec u\cdot\vec v|\le\|\vec u\|\,\|\vec v\|$.`) + S`\pf{If $\vec v=\vec 0$ both sides are $0$. Otherwise let $f(t)=\|\vec u+t\vec v\|^2=\|\vec v\|^2t^2+2(\vec u\cdot\vec v)t+\|\vec u\|^2$. A squared norm is never negative, so this parabola never dips below the $t$-axis (figure) and has at most one root. Hence its discriminant is $\le0$: $4(\vec u\cdot\vec v)^2-4\|\vec u\|^2\|\vec v\|^2\le0$.}`,
    fig: F_CS, w: 0.6,
    body: S`Cauchy--Schwarz says $-1\le\dfrac{\vec u\cdot\vec v}{\|\vec u\|\|\vec v\|}\le1$, so the angle formula of Section 2 always gives a real angle.
${thm("triangle inequality", S`$\|\vec u+\vec v\|\le\|\vec u\|+\|\vec v\|$.`)}
\pf{$\|\vec u+\vec v\|^2=\|\vec u\|^2+2\,\vec u\cdot\vec v+\|\vec v\|^2\le\|\vec u\|^2+2\|\vec u\|\|\vec v\|+\|\vec v\|^2=(\|\vec u\|+\|\vec v\|)^2$, using Cauchy--Schwarz in the middle. Take square roots.}` },

  { h: "6. Direction angles in $\\mathbb R^3$",
    lead: S`The angles $\alpha,\beta,\gamma$ that $\vec u\ne\vec 0$ makes with the positive $x_1$-, $x_2$-, $x_3$-axes satisfy (dot $\vec u$ with $\vec e_1,\vec e_2,\vec e_3$):
\[\cos\alpha=\frac{u_1}{\|\vec u\|},\quad\cos\beta=\frac{u_2}{\|\vec u\|},\quad\cos\gamma=\frac{u_3}{\|\vec u\|}.\]
These \textbf{direction cosines} are the components of the unit vector $\hat u$, so
\[\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1.\]`,
    fig: F_DIR, w: 0.56 },

  { h: "7. Applications: work and similarity",
    lead: S`\textbf{Work.} A constant force $\vec F$ moving an object along the displacement $\vec d$ does work
\[W=\vec F\cdot\vec d=\|\vec F\|\,\|\vec d\|\cos\theta.\]
Only the part of the force along the motion, $\|\vec F\|\cos\theta$ (green), does work; a force at right angles to the motion does none.`,
    fig: F_WORK, w: 0.55,
    body: S`\textbf{Cosine similarity.} For data vectors with nonnegative entries (word counts in documents, purchases, ratings), $\cos\theta=\dfrac{\vec u\cdot\vec v}{\|\vec u\|\|\vec v\|}$ measures how alike their \emph{patterns} are, ignoring size: $1$ means the same proportions, $0$ means nothing in common. A long and a short document on the same topic have a small angle even though their distance is large.` },
];

// ── worked examples ──
const EXAMPLES = [
  { title: "A dot product and its angle in the plane", q: S`For $\vec u=(4,1)$ and $\vec v=(-1,3)$, compute $\vec u\cdot\vec v$, decide whether the angle is acute, right or obtuse, and find it.`,
    fig: VF({ view: { xmin: -2, xmax: 5, ymin: -1, ymax: 3.8 }, step: 1, arcs: [{ at: [0, 0], r: 0.7, a: 14.04, b: 108.43, label: "94.4°" }], arrows: [{ from: [0, 0], to: [4, 1], vl: "u", off: 16 }, { from: [0, 0], to: [-1, 3], color: "red", vl: "v", off: -16 }] }, 4.8),
    steps: [S`$\vec u\cdot\vec v=-4+3=-1<0$, so the angle is obtuse (just over $90^\circ$).`, S`$\|\vec u\|=\sqrt{17}$, $\|\vec v\|=\sqrt{10}$, so $\cos\theta=\dfrac{-1}{\sqrt{170}}\approx-0.0767$.`, S`$\theta=\arccos(-0.0767)\approx94.4^\circ$.`],
    ans: S`$-1$; obtuse; $\theta\approx94.4^\circ$` },
  { title: "An angle in space", q: S`Find the angle between $\vec u=(2,1,-2)$ and $\vec v=(1,-4,8)$.`,
    fig: VF(scene3(5, { arrows: [a3([0, 0, 0], [2, 1, -2], { color: "blue", vl: "u", off: 14 }), a3([0, 0, 0], [1, -4, 8], { color: "red", vl: "v", off: -14 })] }), 4.6),
    steps: [S`$\vec u\cdot\vec v=2-4-16=-18$.`, S`$\|\vec u\|=\sqrt{4+1+4}=3$ and $\|\vec v\|=\sqrt{1+16+64}=9$.`, S`$\cos\theta=\dfrac{-18}{27}=-\dfrac23$, so $\theta=\arccos\left(-\tfrac23\right)\approx131.8^\circ$.`],
    ans: S`$\theta\approx131.8^\circ$` },
  { title: "When are they orthogonal?", q: S`Find every $k$ for which $(k,\ 2,\ -1)\perp(k,\ k,\ 3)$.`,
    fig: planeT({ view: { xmin: -5, xmax: 3, ymin: -5, ymax: 6 }, step: { x: 1, y: 1 }, width: 300, xlabel: "k", ylabel: "u·v", curves: [{ f: (k) => k * k + 2 * k - 3, color: "violet" }], points: [{ x: -3, y: 0, label: "k = −3", color: "green" }, { x: 1, y: 0, label: "k = 1", color: "green" }] }, 4.8),
    steps: [S`Dot product: $k\cdot k+2k+(-1)(3)=k^2+2k-3$.`, S`Orthogonal means $k^2+2k-3=0$, i.e. $(k+3)(k-1)=0$.`, S`So $k=1$ or $k=-3$. Check $k=1$: $(1,2,-1)\cdot(1,1,3)=1+2-3=0$ \checkmark. The graph shows where the dot product is zero.`],
    ans: S`$k=1$ or $k=-3$` },
  { title: "All three angles of a triangle", q: S`Find the angles of the triangle $A(1,0,1)$, $B(3,2,0)$, $C(2,3,3)$.`,
    fig: VF(scene3(4, { polys: [{ pts: [pr([1, 0, 1]), pr([3, 2, 0]), pr([2, 3, 3])], fill: "#eef2ff", stroke: "blue" }], points: [pt3([1, 0, 1], "A 57.7°", { color: "black", dx: -10, anchor: "end" }), pt3([3, 2, 0], "B 72.5°", { color: "black", dy: 16 }), pt3([2, 3, 3], "C 49.9°", { color: "black" })] }), 4.8),
    steps: [S`At $A$: $\overrightarrow{AB}=(2,2,-1)$, $\overrightarrow{AC}=(1,3,2)$; $\cos A=\dfrac{2+6-2}{3\sqrt{14}}\approx0.5345$, $A\approx57.7^\circ$.`, S`At $B$: $\overrightarrow{BA}=(-2,-2,1)$, $\overrightarrow{BC}=(-1,1,3)$; $\cos B=\dfrac{2-2+3}{3\sqrt{11}}\approx0.3015$, $B\approx72.5^\circ$.`, S`At $C$: $\overrightarrow{CA}=(-1,-3,-2)$, $\overrightarrow{CB}=(1,-1,-3)$; $\cos C=\dfrac{8}{\sqrt{154}}\approx0.6447$, $C\approx49.9^\circ$. Check: $57.7+72.5+49.9\approx180$ \checkmark.`],
    ans: S`$A\approx57.7^\circ$, $B\approx72.5^\circ$, $C\approx49.9^\circ$` },
  { title: "A length from lengths and an angle", q: S`$\|\vec u\|=2$, $\|\vec v\|=3$ and the angle between them is $120^\circ$. Find $\|2\vec u-\vec v\|$.`,
    fig: VF({ view: { xmin: -2.2, xmax: 6.2, ymin: -3.2, ymax: 3.2 }, step: 1, arcs: [{ at: [0, 0], r: 0.6, a: 0, b: 120, label: "120°" }], arrows: [{ from: [0, 0], to: [2, 0], vl: "u", off: 14 }, { from: [0, 0], to: [-1.5, 2.598], color: "red", vl: "v", off: -16 }, { from: [0, 0], to: [5.5, -2.598], color: "green", label: "2u − v", off: -16 }] }, 4.8),
    steps: [S`$\vec u\cdot\vec v=\|\vec u\|\|\vec v\|\cos120^\circ=2\cdot3\cdot\left(-\tfrac12\right)=-3$.`, S`$\|2\vec u-\vec v\|^2=(2\vec u-\vec v)\cdot(2\vec u-\vec v)=4\|\vec u\|^2-4\,\vec u\cdot\vec v+\|\vec v\|^2=16+12+9=37$.`, S`So $\|2\vec u-\vec v\|=\sqrt{37}\approx6.08$. (Check with $\vec u=(2,0)$, $\vec v=(-1.5,\ 1.5\sqrt3)$: $2\vec u-\vec v=(5.5,-1.5\sqrt3)$, and $30.25+6.75=37$.)`],
    ans: S`$\sqrt{37}\approx6.08$` },
  { title: "Direction angles", q: S`Find the direction cosines and direction angles of $\vec u=(2,-1,2)$, and verify $\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1$.`,
    fig: VF(scene3(3.5, { arrows: [a3([0, 0, 0], [2, -1, 2], { color: "blue", vl: "u", off: -14 })], segs: [seg3([[2, -1, 2], [2, -1, 0], [0, 0, 0]], { dash: true, w: 1 })], points: [pt3([2, -1, 2], "(2, −1, 2)", { color: "blue" })] }), 4.4),
    steps: [S`$\|\vec u\|=\sqrt{4+1+4}=3$, so $(\cos\alpha,\cos\beta,\cos\gamma)=\left(\tfrac23,-\tfrac13,\tfrac23\right)$.`, S`$\alpha=\gamma=\arccos\tfrac23\approx48.2^\circ$ and $\beta=\arccos\left(-\tfrac13\right)\approx109.5^\circ$ (the vector leans away from the positive $x_2$-axis).`, S`$\tfrac49+\tfrac19+\tfrac49=1$ \checkmark.`],
    ans: S`$\left(\tfrac23,-\tfrac13,\tfrac23\right)$; $\alpha=\gamma\approx48.2^\circ$, $\beta\approx109.5^\circ$` },
  { title: "Orthogonal to two vectors at once", q: S`Find every vector orthogonal to both $\vec u=(1,2,-1)$ and $\vec v=(2,1,1)$.`,
    fig: VF(scene3(3, { arrows: [a3([0, 0, 0], [1, 2, -1], { color: "blue", vl: "u", off: 14 }), a3([0, 0, 0], [2, 1, 1], { color: "red", vl: "v", off: -14 }), a3([0, 0, 0], [1.5, -1.5, -1.5], { color: "green", label: "t(1, −1, −1)", off: 16 })] }), 4.6),
    steps: [S`$\vec x=(a,b,c)$ must satisfy $a+2b-c=0$ and $2a+b+c=0$.`, S`Adding the equations: $3a+3b=0$, so $b=-a$; then $c=a+2b=-a$.`, S`So $\vec x=(a,-a,-a)=a(1,-1,-1)$. Check: $(1,-1,-1)\cdot\vec u=1-2+1=0$ and $\cdot\vec v=2-1-1=0$ \checkmark.`],
    ans: S`all multiples $t(1,-1,-1)$` },
  { title: "Diagonals of a rhombus", q: S`A rhombus has sides $\vec u$ and $\vec v$ with $\|\vec u\|=\|\vec v\|$. Prove that its diagonals are perpendicular. Check with $\vec u=(3,1)$, $\vec v=(1,3)$.`,
    fig: VF({ view: { xmin: -0.6, xmax: 4.6, ymin: -0.6, ymax: 4.6 }, step: 1, polys: [{ pts: [[0, 0], [3, 1], [4, 4], [1, 3]], fill: "#ecfdf5", stroke: "green" }], segs: [{ pts: [[0, 0], [4, 4]], color: "blue", dash: true }, { pts: [[3, 1], [1, 3]], color: "red", dash: true }, { pts: [[2.212, 2.212], [2.0, 2.424], [1.788, 2.212]], color: "gray", w: 1.2 }], texts: [{ x: 3.5, y: 3.0, t: "u + v", color: "blue" }, { x: 1.4, y: 1.9, t: "u − v", color: "red" }] }, 4.4),
    steps: [S`The diagonals are $\vec u+\vec v$ and $\vec u-\vec v$.`, S`$(\vec u+\vec v)\cdot(\vec u-\vec v)=\vec u\cdot\vec u-\vec u\cdot\vec v+\vec v\cdot\vec u-\vec v\cdot\vec v=\|\vec u\|^2-\|\vec v\|^2=0$.`, S`Check: $\vec u+\vec v=(4,4)$, $\vec u-\vec v=(2,-2)$, and $8-8=0$ \checkmark.`],
    ans: S`$(\vec u+\vec v)\cdot(\vec u-\vec v)=0$: the diagonals are perpendicular` },
  { title: "Work done by a force", q: S`A rope pulls a cart with force $\vec F=(20,15)$ N while the cart moves along $\vec d=(8,2)$ m. Find the work done and the angle between the rope and the motion.`,
    fig: VF({ view: { xmin: -0.5, xmax: 9, ymin: -0.8, ymax: 4 }, grid: false, axes: false, arcs: [{ at: [0, 0], r: 1.2, a: 14.04, b: 36.87, label: "22.8°" }], arrows: [{ from: [0, 0], to: [4.8, 3.6], color: "red", label: "F (scaled)", off: -14 }, { from: [0, 0], to: [8, 2], color: "blue", label: "d", off: 14 }] }, 4.8),
    steps: [S`$W=\vec F\cdot\vec d=160+30=190$ J.`, S`$\|\vec F\|=\sqrt{400+225}=25$ N and $\|\vec d\|=\sqrt{68}\approx8.246$ m.`, S`$\cos\theta=\dfrac{190}{25\sqrt{68}}\approx0.9216$, so $\theta\approx22.8^\circ$.`],
    ans: S`$W=190$ J; $\theta\approx22.8^\circ$` },
];

const PROBLEMS = [
  { level: 1, q: S`Compute $(3,-2,0,5)\cdot(1,4,7,-1)$. Is the angle between the vectors acute, right or obtuse?`, ans: S`$-10$; obtuse` },
  { level: 1, q: S`Find the angle between $(1,1,0)$ and $(0,1,1)$.`, ans: S`$\cos\theta=\tfrac12$, $\theta=60^\circ$` },
  { level: 1, q: S`Which pairs among $\vec a=(2,-1,3)$, $\vec b=(1,5,1)$, $\vec c=(4,2,-2)$ are orthogonal?`, ans: S`$\vec a\perp\vec b$ and $\vec a\perp\vec c$ ($\vec b\cdot\vec c=12$)` },
  { level: 2, q: S`Find $k$ so that $(k,1,2)\perp(3,k,-4)$.`, ans: S`$4k-8=0$, $k=2$` },
  { level: 2, q: S`$\|\vec u\|=4$, $\|\vec v\|=5$ and $\|\vec u+\vec v\|=7$. Find $\vec u\cdot\vec v$ and the angle between $\vec u$ and $\vec v$.`, ans: S`$\vec u\cdot\vec v=4$; $\cos\theta=0.2$, $\theta\approx78.5^\circ$` },
  { level: 2, space: 4, q: S`Plot $P(0,0)$, $Q(6,0)$, $R(2,4)$ and find all three angles of triangle $PQR$ with dot products.`, ans: S`$P\approx63.4^\circ$, $Q=45^\circ$, $R\approx71.6^\circ$`, fig: gridT({ xmin: -1, xmax: 7, ymin: -1, ymax: 5 }) },
  { level: 2, q: S`Find the direction cosines and direction angles of $(1,-2,2)$.`, ans: S`$\left(\tfrac13,-\tfrac23,\tfrac23\right)$; $70.5^\circ$, $131.8^\circ$, $48.2^\circ$` },
  { level: 2, space: 4, q: S`Find both unit vectors in $\mathbb R^2$ orthogonal to $(3,4)$, and draw all three vectors.`, ans: S`$\left(\tfrac45,-\tfrac35\right)$ and $\left(-\tfrac45,\tfrac35\right)$`, fig: gridT({ xmin: -3, xmax: 4, ymin: -2, ymax: 5 }) },
  { level: 3, space: 5, q: S`Prove that $\vec u+\vec v\perp\vec u-\vec v$ if and only if $\|\vec u\|=\|\vec v\|$. What does this say about a parallelogram whose diagonals are perpendicular?`, ans: S`$(\vec u+\vec v)\cdot(\vec u-\vec v)=\|\vec u\|^2-\|\vec v\|^2$; zero iff the norms are equal: the parallelogram is a rhombus`,
    fig: VF({ view: { xmin: -0.5, xmax: 6.5, ymin: -0.5, ymax: 3.6 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [4, 0.6], [5.6, 3.1], [1.6, 2.5]], fill: "#ecfdf5", stroke: "green" }], segs: [{ pts: [[0, 0], [5.6, 3.1]], color: "blue", dash: true }, { pts: [[4, 0.6], [1.6, 2.5]], color: "red", dash: true }], arrows: [{ from: [0, 0], to: [4, 0.6], vl: "u", off: 14 }, { from: [0, 0], to: [1.6, 2.5], color: "red", vl: "v", off: -14 }] }, 4.4) },
  { level: 3, space: 5, q: S`Prove: if $\vec w\perp\vec u$ and $\vec w\perp\vec v$, then $\vec w$ is orthogonal to every linear combination $s\vec u+t\vec v$. Interpret the result for a plane through the origin.`, ans: S`$\vec w\cdot(s\vec u+t\vec v)=s(\vec w\cdot\vec u)+t(\vec w\cdot\vec v)=0$; $\vec w$ is orthogonal to the whole plane spanned by $\vec u,\vec v$ (a normal vector)` },
  { level: 3, space: 5, q: S`In a cube, find the angle between a main diagonal and a diagonal of one face that starts at the same corner. (Place the cube with a corner at $O$ and edges along the axes.)`, ans: S`$(1,1,1)$ and $(1,1,0)$: $\cos\theta=\tfrac{2}{\sqrt6}$, $\theta\approx35.3^\circ$`,
    fig: VF(scene3(2.2, { segs: [...box3(1.6, 1.6, 1.6)], arrows: [a3([0, 0, 0], [1.6, 1.6, 1.6], { color: "red", w: 2.4 }), a3([0, 0, 0], [1.6, 1.6, 0], { color: "green", w: 2.4 })] }), 4.2) },
  { level: 3, space: 5, q: S`Word counts of three documents are $D_1=(2,0,1,3)$, $D_2=(4,1,0,2)$, $D_3=(0,3,2,0)$. Find the cosine similarity of $D_1$ with $D_2$ and of $D_1$ with $D_3$. Which document is closer to $D_1$ in topic?`, ans: S`$\cos(D_1,D_2)=\tfrac{14}{\sqrt{294}}\approx0.816$ ($35.3^\circ$); $\cos(D_1,D_3)=\tfrac{2}{\sqrt{182}}\approx0.148$ ($81.5^\circ$): $D_2$` },
  { level: 3, space: 5, q: S`$\|\vec u\|=3$, $\|\vec v\|=2$ and $\vec u\perp(\vec u+2\vec v)$. Find $\vec u\cdot\vec v$, the angle between $\vec u$ and $\vec v$, and $\|\vec u+2\vec v\|$.`, ans: S`$9+2\,\vec u\cdot\vec v=0$: $\vec u\cdot\vec v=-4.5$; $\cos\theta=-0.75$, $\theta\approx138.6^\circ$; $\|\vec u+2\vec v\|=\sqrt{9-18+16}=\sqrt7$` },
];

export const WS = {
  code: "1.4",
  title: "The Dot Product, Angles and Orthogonality",
  bigideas: S`The \textbf{dot product} $\vec u\cdot\vec v=u_1v_1+\dots+u_nv_n$ turns two vectors into a number. It contains lengths ($\|\vec u\|^2=\vec u\cdot\vec u$) and angles ($\vec u\cdot\vec v=\|\vec u\|\|\vec v\|\cos\theta$), so it brings all of Euclidean geometry into $\mathbb R^n$. Its sign tells acute from obtuse, and $\vec u\cdot\vec v=0$ is the test for a right angle. Cauchy--Schwarz guarantees the angle always exists.`,
  goals: ["Compute dot products and use their algebra to expand expressions like ‖u + v‖².", "Find angles between vectors and in triangles; read the sign of u·v.", "Test and construct orthogonal vectors; use the Pythagorean theorem in ℝⁿ.", "State and prove the Cauchy–Schwarz and triangle inequalities.", "Find direction angles, work done by a force, and cosine similarity of data."],
  curriculum: "Geometry of ℝⁿ — the dot product, angles and orthogonality",
  vocab: [["Dot product", "$\\vec u\\cdot\\vec v=\\sum u_iv_i$, a scalar"], ["Orthogonal", "$\\vec u\\cdot\\vec v=0$"], ["Direction cosines", "$u_i/\\|\\vec u\\|$, the components of $\\hat u$"], ["Cauchy--Schwarz", "$|\\vec u\\cdot\\vec v|\\le\\|\\vec u\\|\\|\\vec v\\|$"], ["Cosine similarity", "$\\cos\\theta$ between two data vectors"]],
  hook: S`Two streaming customers watched (comedy, drama, documentary) hours $(10,2,0)$ and $(5,1,0)$. A third watched $(0,3,8)$. The first two have very different totals --- are their \emph{tastes} different? Find a number that says no (Section 7).`,
  concepts: NOTES,
  summary: [
    S`$\vec u\cdot\vec v=\sum u_iv_i=\|\vec u\|\|\vec v\|\cos\theta$; $\|\vec u\|^2=\vec u\cdot\vec u$.`,
    S`$\|\vec u\pm\vec v\|^2=\|\vec u\|^2\pm2\,\vec u\cdot\vec v+\|\vec v\|^2$.`,
    S`$\cos\theta=\dfrac{\vec u\cdot\vec v}{\|\vec u\|\|\vec v\|}$; sign of $\vec u\cdot\vec v$: $+$ acute, $0$ right, $-$ obtuse.`,
    S`$\vec u\perp\vec v\iff\vec u\cdot\vec v=0\iff\|\vec u+\vec v\|^2=\|\vec u\|^2+\|\vec v\|^2$.`,
    S`$|\vec u\cdot\vec v|\le\|\vec u\|\|\vec v\|$ and $\|\vec u+\vec v\|\le\|\vec u\|+\|\vec v\|$; direction cosines satisfy $\sum\cos^2=1$; $W=\vec F\cdot\vec d$.`,
  ],
  tips: ["The dot product is a number; never write it as a vector.", "$\\|\\vec u+\\vec v\\|^2$ has a middle term $2\\,\\vec u\\cdot\\vec v$ --- it is not $\\|\\vec u\\|^2+\\|\\vec v\\|^2$ unless $\\vec u\\perp\\vec v$.", "Use radians or degrees consistently on your calculator, and use $\\arccos$, which returns angles from $0^\\circ$ to $180^\\circ$.", "For the angle at a vertex of a triangle, use the two vectors that start \\emph{at} that vertex.", "There is no cancelling: $\\vec u\\cdot\\vec v=\\vec u\\cdot\\vec w$ does not imply $\\vec v=\\vec w$.", "$(\\vec u\\cdot\\vec v)\\vec w$ is a vector, but $\\vec u\\cdot\\vec v\\cdot\\vec w$ has no meaning."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

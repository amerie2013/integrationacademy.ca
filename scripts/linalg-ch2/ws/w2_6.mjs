// LINALG1 Worksheet 2.6 — Homogeneous Systems and the Structure of Solutions
// Self-contained: complete notes (homogeneous systems, nontrivial solutions, closure, particular + homogeneous,
// with proofs), 9 worked examples with figures, 13 practice problems, answer key.
import { gridT, svgT } from "./figT.mjs";
import { S, VF, def, thm, side } from "./wkit.mjs";
import { linesSvg, planesSvg, stairSvg } from "./fig2.mjs";
import { sys, am, steps } from "../bank/la.mjs";
import { scene3, a3, pt3, line3, patch3 } from "../vecfig.mjs";

const F = (svg, w = 5.2) => svgT(svg, w);
const sysT = (rows, names) => S`\left\{${sys(rows, names)}\right.`;
const V = (xmin, xmax, ymin, ymax) => ({ xmin, xmax, ymin, ymax });
const ORIGIN = pt3([0, 0, 0], "0", { color: "black", dx: -12 });

// ── notes figures ──
const F_HOM2 = F(linesSvg([[1, -2, 0], [2, 1, 0]], V(-3, 3, -3, 3), [0, 0], "only (0, 0)"), 4.8);
const F_LINE0 = F(planesSvg([[1, -1, 3, 0], [2, 1, 3, 0]], { center: [0, 0, 0], size: 1.4, len: 3, line: { p: [0, 0, 0], d: [-2, 1, 1], t0: -0.9, t1: 0.9 }, point: [0, 0, 0], label: "0" }), 5);
const F_SPAN = VF(scene3(3, { polys: [patch3([0, 0, 0], [1, 0, 0.5], [0, 1, 0.3], 1.6, "#dbeafe", "blue", 0.5)], arrows: [a3([0, 0, 0], [1.4, 0, 0.7], { color: "red", vl: "v₁", off: 14 }), a3([0, 0, 0], [0, 1.4, 0.42], { color: "green", vl: "v₂", off: -14 }), a3([0, 0, 0], [1.4, 1.4, 1.12], { color: "violet", label: "v₁ + v₂", off: -16 })], points: [ORIGIN] }), 5);
const F_SHIFT = F(linesSvg([[1, -2, 0], [1, -2, 4]], V(-3, 6, -3, 3), [4, 0], "p"), 5);
const F_SHIFT3 = VF(scene3(3.5, { segs: [line3([0, 0, 0], [-2, 1, 1], -1, 1, "violet", 2.4, true), line3([3, -1, 0], [-2, 1, 1], -0.5, 1.6, "red", 2.6)], arrows: [a3([0, 0, 0], [3, -1, 0], { color: "amber", vl: "p", off: 14 })], points: [ORIGIN] }), 5);

const NOTES = [
  { h: "1. Homogeneous systems",
    lead: S`${def("homogeneous system", S`A linear system is \textbf{homogeneous} if every constant term is 0: $a_{i1}x_1+\dots+a_{in}x_n=0$ for all $i$, written $A\vec x=\vec 0$. Its \textbf{trivial solution} is $\vec x=\vec 0$; any other solution is \textbf{nontrivial}.`)}
A homogeneous system is \textbf{always consistent}. Geometrically every line or plane passes through the origin; for $x_1-2x_2=0$, $2x_1+x_2=0$ (figure) the origin is the only common point.`,
    fig: F_HOM2, w: 0.56,
    body: S`Row operations never change a column of zeros, so we row reduce the coefficient matrix $A$ alone and remember that the constants are 0.` },

  { h: "2. When are there nontrivial solutions?",
    lead: thm("nontrivial solutions", S`$A\vec x=\vec 0$ has a nontrivial solution exactly when $\operatorname{rank}A<n$. In particular this always happens when $m<n$ (more unknowns than equations).`) + S`\pf{The system is consistent, so by the rank theorem it has exactly one solution --- which must be $\vec 0$ --- when $\operatorname{rank}A=n$, and infinitely many when $\operatorname{rank}A<n$. If $m<n$ then $\operatorname{rank}A\le m<n$.}
In the figure two planes through $\vec 0$ meet in a line through $\vec 0$: two equations in three unknowns always have nontrivial solutions.`,
    fig: F_LINE0, w: 0.56,
    body: S`\textbf{Square systems} ($m=n$) can go either way: only the trivial solution when $\operatorname{rank}A=n$, nontrivial ones when $\operatorname{rank}A<n$ (Examples 3 and 4).` },

  { h: "3. The solution set: spanning vectors and closure",
    lead: S`Row reduce, give each free variable a parameter and write the solution in vector form. There is no constant vector, only directions:
\[\vec x=t_1\vec v_1+t_2\vec v_2+\dots+t_k\vec v_k,\qquad k=n-\operatorname{rank}A.\]
The solution set is the \textbf{span} of $\vec v_1,\dots,\vec v_k$: a line, plane, \dots{} through $\vec 0$.`,
    fig: F_SPAN, w: 0.56,
    body: thm("closure", S`If $\vec u$ and $\vec v$ solve $A\vec x=\vec 0$, so does $s\vec u+t\vec v$ for all scalars $s,t$.`) + S`\pf{For each equation $\vec a\cdot\vec x=0$: $\vec a\cdot(s\vec u+t\vec v)=s(\vec a\cdot\vec u)+t(\vec a\cdot\vec v)=0$.}
Such sets --- containing $\vec 0$ and closed under addition and scalar multiplication --- are the \emph{subspaces} of Chapter 5.` },

  { h: "4. Every solution = particular + homogeneous",
    lead: thm("structure of the solution set", S`Let $\vec p$ be one solution of $A\vec x=\vec b$. Then $\vec x$ solves $A\vec x=\vec b$ if and only if $\vec x=\vec p+\vec h$ where $\vec h$ solves $A\vec x=\vec 0$.`) + S`\pf{If $\vec x$ solves it, each equation gives $\vec a\cdot(\vec x-\vec p)=b_i-b_i=0$, so $\vec h=\vec x-\vec p$ is homogeneous. Conversely $\vec a\cdot(\vec p+\vec h)=b_i+0=b_i$.}`,
    fig: F_SHIFT, w: 0.58,
    body: S`\textbf{Geometrically} the solutions of $A\vec x=\vec b$ are the homogeneous solutions shifted by $\vec p$: parallel to them but not through $\vec 0$ when $\vec b\ne\vec 0$. In the figure, $x_1-2x_2=4$ is the line $x_1-2x_2=0$ moved by $\vec p=(4,0)$. The general solution from Gauss--Jordan, $\vec p+t_1\vec v_1+\dots$, is exactly this decomposition.` },

  { h: "5. Consequences",
    lead: S`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item The \textbf{difference} of two solutions of $A\vec x=\vec b$ solves $A\vec x=\vec 0$.
\item So $A\vec x=\vec b$ has \textbf{at most one} solution whenever $A\vec x=\vec 0$ has only the trivial one.
\item Solutions of $A\vec x=\vec b$ with $\vec b\ne\vec 0$ are \textbf{not} closed under addition or scaling: $\vec a\cdot(\vec p+\vec q)=2b_i$.
\item Linearity: if $A\vec u=\vec b$ and $A\vec v=\vec c$ then $A(s\vec u+t\vec v)=s\vec b+t\vec c$ (Problem 12).
\end{itemize}
In space: the homogeneous line through $\vec 0$ (violet) and the solution line of $A\vec x=\vec b$ (red), shifted by $\vec p$.`,
    fig: F_SHIFT3, w: 0.56 },
];

// ── worked examples ──
const EXAMPLES = [
  { title: "A line of solutions", q: S`Solve $${sysT([[1, -1, 3, 0], [2, 1, 3, 0]])}$.`,
    fig: F_LINE0,
    steps: [
      ...steps([[1, -1, 3, 0], [2, 1, 3, 0]], [
        [S`Clear the $2$ below the leading $1$.`, ["R2-2R1"]],
        [S`Make the second pivot $1$,`, ["R2*1/3"]],
        [S`and clear the $-1$ above it (RREF).`, ["R1+R2"]],
      ]).steps,
      S`The constant column stays $0$ through every operation --- a homogeneous system is always consistent. Column 3 has no pivot: $x_3=t$. Row 2: $x_2=t$. Row 1: $x_1=-2t$.`,
      S`$\vec x=t(-2,1,1)$, a line through the origin. Check $(-2,1,1)$: $-2-1+3=0$ \checkmark,\ $-4+1+3=0$ \checkmark.`],
    ans: S`$\vec x=t(-2,1,1)$` },
  { title: "Two spanning vectors", q: S`Find spanning vectors for the solutions of $x_1+2x_2-x_3+x_4=0$, $3x_1+6x_2-2x_3+5x_4=0$.`,
    fig: F(stairSvg([["1", "*", "0", "*"], ["0", "0", "1", "*"]], false), 3),
    steps: [
      ...steps([[1, 2, -1, 1, 0], [3, 6, -2, 5, 0]], [
        [S`Clear the $3$ below the leading $1$; column 2 then has no pivot.`, ["R2-3R1"]],
        [S`Clear the $-1$ above the pivot of column 3.`, ["R1+R2"]],
      ]).steps,
      S`Pivots in columns 1 and 3. Free $x_2=s$, $x_4=t$. Row 1: $x_1=-2s-3t$. Row 2: $x_3=-2t$.`,
      S`\[\vec x=\begin{bmatrix}-2s-3t\\ s\\ -2t\\ t\end{bmatrix}=s\begin{bmatrix}-2\\1\\0\\0\end{bmatrix}+t\begin{bmatrix}-3\\0\\-2\\1\end{bmatrix}.\] Check $(-3,0,-2,1)$: $-3+2+1=0$ \checkmark,\ $-9+4+5=0$ \checkmark.`],
    ans: S`$s(-2,1,0,0)+t(-3,0,-2,1)$` },
  { title: "Only the trivial solution", q: S`Does $x_1+2x_2=0$, $x_2+3x_3=0$, $2x_1+x_3=0$ have nontrivial solutions?`,
    fig: F(planesSvg([[1, 2, 0, 0], [0, 1, 3, 0], [2, 0, 1, 0]], { center: [0, 0, 0], size: 1.2, len: 2.6, point: [0, 0, 0], label: "0" }), 4.4),
    steps: [
      ...steps([[1, 2, 0, 0], [0, 1, 3, 0], [2, 0, 1, 0]], [
        [S`Column 1: clear the $2$ in row 3.`, ["R3-2R1"]],
        [S`Column 2: clear the $-4$ below the pivot of row 2.`, ["R3+4R2"]],
      ]).steps,
      S`Three pivots: $\operatorname{rank}A=3=n$, so no variable is free. Back substitution gives $13x_3=0$, $x_3=0$; then $x_2=0$, $x_1=0$.`,
      S`Only the trivial solution $\vec x=\vec 0$: the three planes meet only at the origin (figure).`],
    ans: S`no --- only $\vec x=\vec 0$` },
  { title: "A square system with nontrivial solutions", q: S`Solve $${sysT([[1, 2, 3, 0], [4, 5, 6, 0], [7, 8, 9, 0]])}$.`,
    fig: F(planesSvg([[1, 2, 3, 0], [4, 5, 6, 0], [7, 8, 9, 0]], { center: [0, 0, 0], size: 1.1, len: 2.6, line: { p: [0, 0, 0], d: [1, -2, 1], t0: -0.9, t1: 0.9 } }), 4.4),
    steps: [
      ...steps([[1, 2, 3, 0], [4, 5, 6, 0], [7, 8, 9, 0]], [
        [S`Column 1: clear the $4$ and the $7$.`, ["R2-4R1", "R3-7R1"]],
        [S`Column 2: row 3 is twice row 2; clear it.`, ["R3-2R2"]],
        [S`Rank 2 $<3$, so a free variable exists. Finish the RREF: scale row 2,`, ["R2*-1/3"]],
        [S`and clear the $2$ above its pivot.`, ["R1-2R2"]],
      ]).steps,
      S`$x_3=t$ free. Row 2: $x_2=-2t$. Row 1: $x_1=t$. So $\vec x=t(1,-2,1)$.`,
      S`Check $(1,-2,1)$: $1-4+3=0$ \checkmark,\ $4-10+6=0$ \checkmark,\ $7-16+9=0$ \checkmark. Three planes through one common line.`],
    ans: S`$t(1,-2,1)$: three planes through one line` },
  { title: "Particular plus homogeneous", q: S`Solve $x_1-x_2+3x_3=4$, $2x_1+x_2+3x_3=5$, and compare with Example 1.`,
    fig: F_SHIFT3,
    steps: [
      ...steps([[1, -1, 3, 4], [2, 1, 3, 5]], [
        [S`The same operations as in Example 1 --- now the constants change too.`, ["R2-2R1"]],
        [S`Make the second pivot $1$,`, ["R2*1/3"]],
        [S`and clear above it.`, ["R1+R2"]],
      ]).steps,
      S`$x_3=t$: row 2 gives $x_2=-1+t$, row 1 gives $x_1=3-2t$. So $\vec x=(3,-1,0)+t(-2,1,1)$.`,
      S`$(3,-1,0)$ is a particular solution ($3+1=4$ \checkmark,\ $6-1=5$ \checkmark), and $t(-2,1,1)$ is exactly the solution set of Example 1: the solution line is the homogeneous line shifted by $\vec p$ (figure).`],
    ans: S`$(3,-1,0)+t(-2,1,1)$` },
  { title: "Not closed when b ≠ 0", q: S`Show that the solutions of $x_1+2x_2=4$ are not closed under scalar multiplication.`,
    fig: F(linesSvg([[1, 2, 0], [1, 2, 4]], V(-3, 9, -3, 4), [4, 0], "(4, 0)"), 4.6),
    steps: [S`\textbf{Matrix form.} \(x_1+2x_2=4\) is \(A\vec x=b\) with \(A=${am([[1, 2]], false)}\), \(b=4\).`,
      S`\(\vec p=${am([[4], [0]], false)}\) is a solution: \(A\vec p=${am([[1, 2]], false)}${am([[4], [0]], false)}=4+0=4\) \checkmark.`,
      S`\(A(2\vec p)=${am([[1, 2]], false)}${am([[8], [0]], false)}=8\ne4\), so \(2\vec p\) is not a solution. In general \(A(c\vec p)=c(A\vec p)=4c\), which equals 4 only for \(c=1\).`,
      S`Even \(A(0\vec p)=A\vec 0=0\ne4\): the red line misses the origin. The homogeneous line \(A\vec x=0\) (blue) passes through \(\vec 0\) and is closed under both operations.`],
    ans: S`$2(4,0)$ is not a solution` },
  { title: "Using a known solution", q: S`$(1,1,1)$ solves $x_1-x_2+3x_3=3$, $2x_1+x_2+3x_3=6$. Write every solution and find the one with $x_1=-1$.`,
    fig: F(planesSvg([[1, -1, 3, 3], [2, 1, 3, 6]], { center: [1, 1, 1], size: 1.3, len: 3, line: { p: [1, 1, 1], d: [-2, 1, 1], t0: -0.6, t1: 1.3 }, point: [1, 1, 1], label: "(1, 1, 1)" }), 4.4),
    steps: [S`Check the particular solution: $1-1+3=3$ \checkmark,\ $2+1+3=6$ \checkmark.`,
      S`The coefficient matrix $${am([[1, -1, 3], [2, 1, 3]], false)}$ is the one of Example 1, where the homogeneous solutions were found to be $t(-2,1,1)$.`,
      S`So every solution is $\vec p+\vec h$: $\vec x=(1,1,1)+t(-2,1,1)=(1-2t,\,1+t,\,1+t)$.`,
      S`$x_1=1-2t=-1$ gives $t=1$, so $\vec x=(-1,2,2)$. Check: $-1-2+6=3$ \checkmark,\ $-2+2+6=6$ \checkmark.`],
    ans: S`$(1,1,1)+t(-2,1,1)$; $(-1,2,2)$` },
  { title: "When do nontrivial solutions appear?", q: S`For which $k$ does $x_1+kx_2=0$, $kx_1+9x_2=0$ have nontrivial solutions? Find them for $k=3$.`,
    fig: F(linesSvg([[1, 3, 0], [3, 9, 0]], V(-4, 4, -2, 2)), 4.4),
    steps: [S`Start: \[${am([[1, "k", 0], ["k", 9, 0]])}\]`,
      S`Clear the $k$ below the pivot: $(k,9)-k(1,k)=(0,\,9-k^2)$. Operation: $R_2\to R_2-kR_1$. \[\longrightarrow\ ${am([[1, "k", 0], [0, "9-k^2", 0]])}\]`,
      S`If $9-k^2\ne0$ there are two pivots and only $\vec 0$. Nontrivial solutions need a free variable: $9-k^2=0$, so $k=3$ or $k=-3$.`,
      ...steps([[1, 3, 0], [3, 9, 0]], [[S`Clear the $3$ below the pivot.`, ["R2-3R1"]]], { intro: S`For $k=3$ the matrix is` }).steps,
      S`$x_2=t$ free, $x_1=-3t$: $\vec x=t(-3,1)$. Both equations describe the same line $x_1+3x_2=0$ (figure).`],
    ans: S`$k=\pm3$; for $k=3$: $t(-3,1)$` },
  { title: "Vectors orthogonal to two vectors", q: S`Find all vectors orthogonal to both $(1,2,-1)$ and $(0,1,3)$.`,
    fig: VF(scene3(3, { arrows: [a3([0, 0, 0], [1, 2, -1], { color: "blue", vl: "u", off: 14 }), a3([0, 0, 0], [0, 1, 3], { color: "red", vl: "v", off: -14 }), a3([0, 0, 0], [7 / 3.3, -3 / 3.3, 1 / 3.3], { color: "green", label: "t(7, −3, 1)", off: 14 })], points: [ORIGIN] }), 4.4),
    steps: [S`$\vec x=(a,b,c)$ is orthogonal to both exactly when both dot products are $0$: $a+2b-c=0$ and $b+3c=0$ --- a homogeneous system.`,
      ...steps([[1, 2, -1, 0], [0, 1, 3, 0]], [[S`It is already in REF; clear the $2$ above the second pivot.`, ["R1-2R2"]]]).steps,
      S`$c=t$ free: $b=-3t$, $a=7t$. So $\vec x=t(7,-3,1)$.`,
      S`Check: $(7,-3,1)\cdot(1,2,-1)=7-6-1=0$ \checkmark,\ $(7,-3,1)\cdot(0,1,3)=-3+3=0$ \checkmark. (It is the direction of $\vec u\times\vec v$.)`],
    ans: S`$t(7,-3,1)$ --- a line through $\vec 0$` },
];

const NET = VF({ view: { xmin: -0.8, xmax: 5.2, ymin: -0.8, ymax: 4.8 }, grid: false, axes: false, arrows: [{ from: [0.3, 0], to: [3.7, 0], color: "blue", label: "x₁", off: 12 }, { from: [4, 0.3], to: [4, 3.7], color: "blue", label: "x₂", off: 12 }, { from: [3.7, 4], to: [0.3, 4], color: "blue", label: "x₃", off: 12 }, { from: [0, 3.7], to: [0, 0.3], color: "blue", label: "x₄", off: 12 }, { from: [0.25, 0.25], to: [3.75, 3.75], color: "red", label: "x₅", off: 12 }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 4, y: 0, label: "B", dx: 6, dy: 14 }, { x: 4, y: 4, label: "C", dx: 6 }, { x: 0, y: 4, label: "D", dx: -16 }] }, 4.2);

const PROBLEMS = [
  { level: 1, q: S`Is $(2,-1,1)$ a solution of the homogeneous system $x_1+x_2-x_3=0$, $x_1+3x_2+x_3=0$?`, ans: S`Yes: $2-1-1=0$ and $2-3+1=0$` },
  { level: 1, q: S`A homogeneous system has 4 equations in 6 unknowns. Must it have nontrivial solutions? Why?`, ans: S`Yes: $\operatorname{rank}A\le4<6$`,
    sol: [S`$\operatorname{rank}A\le m=4$, so at least $6-4=2$ variables are free. A homogeneous system is always consistent, so it has infinitely many (in particular nontrivial) solutions.`] },
  { level: 1, q: S`Find all solutions of $x_1+4x_2=0$ in $\mathbb R^2$.`, ans: S`$t(-4,1)$`,
    sol: [S`One equation, pivot in column 1; $x_2=t$ free, $x_1=-4t$. So $\vec x=t(-4,1)$, a line through the origin.`] },
  { level: 2, q: S`Solve the homogeneous system with coefficient matrix $${am([[1, -1, 2], [2, 1, 1], [1, 2, -1]], false)}$.`, ans: S`$t(-1,1,1)$`,
    fig: F(planesSvg([[1, -1, 2, 0], [2, 1, 1, 0], [1, 2, -1, 0]], { center: [0, 0, 0], size: 1.1, len: 2.6 }), 4),
    sol: [...steps([[1, -1, 2, 0], [2, 1, 1, 0], [1, 2, -1, 0]], [
      [S`Column 1: clear rows 2 and 3.`, ["R2-2R1", "R3-R1"]],
      [S`Rows 2 and 3 are equal; subtract.`, ["R3-R2"]],
      [S`Finish the RREF: scale row 2,`, ["R2*1/3"]],
      [S`and clear above its pivot.`, ["R1+R2"]],
    ]).steps,
      S`$x_3=t$: $x_2=t$, $x_1=-t$. So $\vec x=t(-1,1,1)$. Check: $-1-1+2=0$ \checkmark,\ $-2+1+1=0$ \checkmark,\ $-1+2-1=0$ \checkmark.`] },
  { level: 2, q: S`Find spanning vectors for the solutions of the single equation $x_1-2x_2+x_3-x_4=0$.`, ans: S`$(2,1,0,0)$, $(-1,0,1,0)$, $(1,0,0,1)$`,
    sol: [S`One pivot (column 1), three free variables $x_2=r$, $x_3=s$, $x_4=t$. Then $x_1=2r-s+t$.`,
      S`$\vec x=r(2,1,0,0)+s(-1,0,1,0)+t(1,0,0,1)$. Check $(1,0,0,1)$: $1-1=0$ \checkmark.`] },
  { level: 2, q: S`Solve $A\vec x=(2,1,-1)$ for the matrix $A$ of Problem 4, and identify the particular and homogeneous parts.`, ans: S`$(1,-1,0)+t(-1,1,1)$`,
    fig: F(planesSvg([[1, -1, 2, 2], [2, 1, 1, 1], [1, 2, -1, -1]], { center: [0.5, -0.5, 0.5], size: 1.1, len: 3 }), 4),
    sol: [...steps([[1, -1, 2, 2], [2, 1, 1, 1], [1, 2, -1, -1]], [
      [S`The same operations as in Problem 4.`, ["R2-2R1", "R3-R1"]],
      [S`Subtract row 2 from row 3.`, ["R3-R2"]],
      [S`Scale row 2,`, ["R2*1/3"]],
      [S`and clear above its pivot.`, ["R1+R2"]],
    ]).steps,
      S`$x_3=t$: $x_1=1-t$, $x_2=-1+t$. So $\vec x=(1,-1,0)+t(-1,1,1)$: particular part $(1,-1,0)$, homogeneous part $t(-1,1,1)$ from Problem 4.`,
      S`Check $(1,-1,0)$: $1+1=2$ \checkmark,\ $2-1=1$ \checkmark,\ $1-2=-1$ \checkmark.`] },
  { level: 2, q: S`For which $k$ does $${am([[1, 2], [3, "k"]], false)}\vec x=\vec 0$ have nontrivial solutions? Give them.`, ans: S`$k=6$; $t(-2,1)$`,
    sol: [S`Operation $R_2\to R_2-3R_1$: \[${am([[1, 2, 0], [3, "k", 0]])}\ \longrightarrow\ ${am([[1, 2, 0], [0, "k-6", 0]])}\]`,
      S`A free variable appears exactly when $k-6=0$. For $k=6$: $x_2=t$, $x_1=-2t$, so $\vec x=t(-2,1)$.`] },
  { level: 2, q: S`$\vec p=(2,0,1)$ solves $A\vec x=\vec b$ and the solutions of $A\vec x=\vec 0$ are all $s(1,1,0)+t(0,1,1)$. Is $(3,2,2)$ a solution of $A\vec x=\vec b$? Is $(2,2,2)$?`, ans: S`$(3,2,2)$: yes ($s=t=1$); $(2,2,2)$: no ($(0,2,1)$ is not a combination)`,
    fig: VF(scene3(3, { polys: [patch3([2, 0, 1], [1, 1, 0], [0, 1, 1], 1.4, "#ede9fe", "violet", 0.5)], points: [pt3([2, 0, 1], "p", { color: "amber" }), ORIGIN] }), 4),
    sol: [S`$\vec x$ solves $A\vec x=\vec b$ exactly when $\vec x-\vec p$ is a homogeneous solution, i.e. $\vec x-\vec p=s(1,1,0)+t(0,1,1)=(s,\,s+t,\,t)$.`,
      S`$(3,2,2)-(2,0,1)=(1,2,1)$: $s=1$, $t=1$, $s+t=2$ \checkmark. Yes.`,
      S`$(2,2,2)-(2,0,1)=(0,2,1)$: $s=0$, $t=1$, but then $s+t=1\ne2$. No.`] },
  { level: 3, space: 5, q: S`Prove: if $A\vec x=\vec 0$ has only the trivial solution, then $A\vec x=\vec b$ has at most one solution for every $\vec b$.`, ans: S`two solutions differ by a homogeneous solution, which must be $\vec 0$`,
    sol: [S`Suppose $A\vec u=\vec b$ and $A\vec v=\vec b$. Each equation is linear, so $A(\vec u-\vec v)=A\vec u-A\vec v=\vec b-\vec b=\vec 0$.`,
      S`So $\vec u-\vec v$ solves the homogeneous system, whose only solution is $\vec 0$. Hence $\vec u=\vec v$.`] },
  { level: 3, space: 5, q: S`Prove that the solution set of $A\vec x=\vec 0$ contains $\vec 0$ and is closed under addition and scalar multiplication, and that for $\vec b\ne\vec 0$ the solution set of $A\vec x=\vec b$ has none of these properties.`, ans: S`closure: linearity of each equation; for $\vec b\ne\vec 0$: $\vec 0$ fails, and sums or multiples give $2b_i$ or $cb_i$`,
    sol: [S`$A\vec 0=\vec 0$. If $A\vec u=\vec 0$ and $A\vec v=\vec 0$, then $A(\vec u+\vec v)=\vec 0+\vec 0=\vec 0$ and $A(c\vec u)=c\vec 0=\vec 0$.`,
      S`If $\vec b\ne\vec 0$: $A\vec 0=\vec 0\ne\vec b$, so $\vec 0$ is not a solution. If $A\vec u=A\vec v=\vec b$ then $A(\vec u+\vec v)=2\vec b\ne\vec b$, and $A(c\vec u)=c\vec b\ne\vec b$ for $c\ne1$.`] },
  { level: 3, space: 5, q: S`Find a homogeneous system (one equation) whose solution set is the span of $(1,0,2)$ and $(0,1,-1)$.`, ans: S`$-2x_1+x_2+x_3=0$ (normal $(1,0,2)\times(0,1,-1)$)`,
    sol: [S`We need $a x_1+bx_2+cx_3=0$ satisfied by both vectors: $a+2c=0$ and $b-c=0$. This is a homogeneous system for $(a,b,c)$: \[${am([[1, 0, 2, 0], [0, 1, -1, 0]])}\]`,
      S`It is in RREF; $c=t$: $a=-2t$, $b=t$. Take $t=1$: $-2x_1+x_2+x_3=0$.`,
      S`Check: $-2+0+2=0$ \checkmark,\ $0+1-1=0$ \checkmark. One equation in $\mathbb R^3$ has 2 free variables, so its solution set is exactly this plane.`] },
  { level: 3, space: 5, q: S`$A\vec u=\vec b$ and $A\vec v=\vec c$. What do $\vec u+\vec v$, $2\vec u-3\vec v$ and $\vec u-\vec v$ solve? When is $\vec u-\vec v$ a homogeneous solution?`, ans: S`$\vec b+\vec c$; $2\vec b-3\vec c$; $\vec b-\vec c$, homogeneous exactly when $\vec b=\vec c$`,
    sol: [S`By linearity $A(\vec u+\vec v)=\vec b+\vec c$, $A(2\vec u-3\vec v)=2\vec b-3\vec c$, $A(\vec u-\vec v)=\vec b-\vec c$.`,
      S`$\vec u-\vec v$ is homogeneous exactly when $\vec b-\vec c=\vec 0$, i.e. $\vec b=\vec c$.`] },
  { level: 3, space: 5, q: S`In the closed network shown no traffic enters or leaves. Write the node equations (in = out) and find all possible flows. Which flows must be equal?`, ans: S`$x_1=x_2=s$, $x_5=t$, $x_3=x_4=s+t$: $s(1,1,1,1,0)+t(0,0,1,1,1)$; $x_1=x_2$ and $x_3=x_4$`, fig: NET,
    sol: [S`Node equations (in $=$ out): $A$: $x_4=x_1+x_5$; $B$: $x_1=x_2$; $C$: $x_2+x_5=x_3$; $D$: $x_3=x_4$. Move everything to the left.`,
      ...steps([[1, 0, 0, -1, 1, 0], [1, -1, 0, 0, 0, 0], [0, 1, -1, 0, 1, 0], [0, 0, 1, -1, 0, 0]], [
        [S`Column 1: clear row 2.`, ["R2-R1"]],
        [S`Column 2: clear row 3 with row 2.`, ["R3+R2"]],
        [S`Column 3: clear row 4 with row 3.`, ["R4+R3"]],
        [S`RREF: make the pivots $1$.`, ["R2*-1", "R3*-1"]],
      ]).steps,
      S`Free $x_4$, $x_5$: $x_1=x_4-x_5$, $x_2=x_4-x_5$, $x_3=x_4$. Writing $x_5=t$ and $x_4=s+t$: $x_1=x_2=s$, $x_3=x_4=s+t$, so $\vec x=s(1,1,1,1,0)+t(0,0,1,1,1)$.`,
      S`Always $x_1=x_2$ and $x_3=x_4$. Check $s=t=1$, $(1,1,2,2,1)$: $A$: $2=1+1$ \checkmark; $C$: $1+1=2$ \checkmark.`] },
];

export const WS = {
  code: "2.6",
  title: "Homogeneous Systems and the Structure of Solutions",
  bigideas: S`A \textbf{homogeneous} system $A\vec x=\vec 0$ always has the trivial solution, and it has others exactly when $\operatorname{rank}A<n$. Its solutions are all combinations of a few spanning vectors --- a line, plane or flat through the origin, closed under addition and scaling. Every system is built on its homogeneous partner: the solutions of $A\vec x=\vec b$ are one particular solution plus all homogeneous solutions, the homogeneous solution set shifted away from the origin.`,
  goals: ["Recognise homogeneous systems and decide when they have nontrivial solutions.", "Write the solution set of A x = 0 as the span of spanning vectors.", "Prove closure under addition and scalar multiplication.", "Write every solution of A x = b as particular + homogeneous, and use a known solution.", "Apply homogeneous systems to orthogonality and networks."],
  curriculum: "Systems of linear equations — homogeneous systems and the structure of solutions",
  vocab: [["Homogeneous", "all constants 0: $A\\vec x=\\vec 0$"], ["Trivial solution", "$\\vec x=\\vec 0$"], ["Spanning vectors", "one per free variable"], ["Particular solution", "one solution $\\vec p$ of $A\\vec x=\\vec b$"], ["Closure", "sums and multiples of solutions are solutions"]],
  hook: S`The system $x_1+x_2=0$, $x_1-x_2=0$ has only one solution. Without changing the left sides, can you change the right sides so that it has none? So that it has infinitely many? Explain what stays the same.`,
  concepts: NOTES,
  summary: [
    S`$A\vec x=\vec 0$ is always consistent; nontrivial solutions $\iff\operatorname{rank}A<n$ (always if $m<n$).`,
    S`Solutions of $A\vec x=\vec 0$: $t_1\vec v_1+\dots+t_k\vec v_k$, $k=n-\operatorname{rank}A$; closed under $+$ and scaling.`,
    S`Solutions of $A\vec x=\vec b$: $\vec p+\vec h$ with $A\vec h=\vec 0$ --- the homogeneous set shifted by $\vec p$.`,
    S`Differences of solutions of $A\vec x=\vec b$ are homogeneous; uniqueness for $A\vec x=\vec b$ is decided by $A\vec x=\vec 0$.`,
    S`For $\vec b\ne\vec 0$ the solution set is not closed and does not contain $\vec 0$.`,
  ],
  tips: ["A homogeneous system is never inconsistent.", "Reduce only the coefficient matrix --- the zero column never changes.", "Square does not mean 'only the trivial solution'; check the rank.", "Any particular solution works; the homogeneous part is the same.", "Do not add solutions of $A\\vec x=\\vec b$ and expect a solution.", "One spanning vector per free variable."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

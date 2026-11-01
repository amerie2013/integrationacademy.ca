// LINALG1 Worksheet 5.1 — Subspaces and the Subspace Test
// Self-contained: complete notes (definition, the subspace test, why 0 belongs to every subspace, the standard
// examples and non-examples, how to write a proof), 9 worked examples with figures, 13 problems with full solutions.
import { gridT, planeT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { planeFig, lineFig, vecs2, set2 } from "./fig5.mjs";
import { am, steps } from "../bank/la.mjs";

// ── notes figures ──
const F_LINES = set2("line", { m: 0.5, view: { xmin: -4, xmax: 4, ymin: -3, ymax: 3 }, arrows: [[[2, 1], "u", "blue"], [[-3, -1.5], "−1.5u", "blue"]] });
const F_AXES = set2("axes", { view: { xmin: -3, xmax: 4, ymin: -3, ymax: 4 }, arrows: [[[3, 0], "(3, 0)", "blue"], [[0, 2], "(0, 2)", "red"], [[3, 2], "sum (3, 2)", "green"]] });
const F_PLANE = planeFig([1, 0, 2], [0, 1, -1], { lu: "(1, 0, 2)", lv: "(0, 1, −1)", more: [[[1, 1, 1], "sum (1, 1, 1)", "green"]] });
const F_HALF = set2("half", { view: { xmin: -4, xmax: 4, ymin: -3, ymax: 3 }, arrows: [[[2, 1], "u", "blue"], [[-2, -1], "−u", "red"]] });
const F_TWO = planeFig([1, 0, -1], [0, 1, 0], { lu: "", lv: "", line: [1, -1, -1], fill: "#ede9fe", edge: "violet" });

const NOTES = [
  { h: "1. What a subspace is",
    lead: S`${def("subspace", S`A set \(S\) of vectors in \(\mathbb R^n\) is a \textbf{subspace} of \(\mathbb R^n\) if (1) \(S\) is non-empty, (2) \(S\) is \textbf{closed under addition}: \(\vec u,\vec v\in S\Rightarrow\vec u+\vec v\in S\), and (3) \(S\) is \textbf{closed under scalar multiplication}: \(\vec u\in S,\ c\in\mathbb R\Rightarrow c\vec u\in S\).`)}
In words: you can never leave \(S\) by adding two of its vectors or by stretching, shrinking or reversing one of them. The figure shows the line \(y=\tfrac12x\): every multiple of \(\vec u=(2,1)\) stays on it.`,
    fig: F_LINES, w: 0.56,
    body: S`Checking (1)--(3) is the \textbf{subspace test}. Conditions (2) and (3) are statements about \emph{all} vectors of \(S\) and \emph{all} real numbers \(c\) (including \(0\) and negatives), so a proof must use arbitrary vectors, never particular examples.` },

  { h: "2. Every subspace contains the zero vector",
    lead: thm("zero vector", S`If \(S\) is a subspace, then \(\vec 0\in S\).`) + S`\pf{\(S\) is non-empty, so it has some vector \(\vec u\). Closure under scalar multiplication with \(c=0\) gives \(0\vec u=\vec 0\in S\).}
Two consequences: to prove \(S\) is non-empty, show \(\vec 0\in S\); and if \(\vec 0\notin S\), then \(S\) is \emph{not} a subspace --- no further work needed.`,
    fig: F_AXES, w: 0.56,
    body: S`Containing \(\vec 0\) is necessary but \textbf{not sufficient}. The union of the two axes (figure) contains \(\vec 0\) and every multiple of each of its vectors, but \((3,0)+(0,2)=(3,2)\) lies on neither axis: it is not closed under addition.` },

  { h: "3. The standard examples",
    lead: S`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \(\{\vec 0\}\) (the zero subspace) and \(\mathbb R^n\) itself.
\item Lines and planes \textbf{through the origin}.
\item The solution set of a homogeneous system \(a_{i1}x_1+\dots+a_{in}x_n=0\): if \(\vec x,\vec y\) satisfy an equation with right side \(0\), so do \(\vec x+\vec y\) (the left sides add to \(0+0\)) and \(c\vec x\) (the left side becomes \(c\cdot0\)).
\item Every set of the form \(\{s\vec v_1+t\vec v_2+\dots\}\) (a span --- Worksheet 5.2).
\end{itemize}`,
    fig: F_PLANE, w: 0.55,
    body: S`The subspaces of \(\mathbb R^2\) are exactly \(\{\vec 0\}\), the lines through \(\vec 0\) and \(\mathbb R^2\); those of \(\mathbb R^3\) are \(\{\vec 0\}\), lines and planes through \(\vec 0\), and \(\mathbb R^3\). The figure shows the plane \(2x_1-x_2-x_3=0\) with two of its vectors and their sum, which stays in the plane.` },

  { h: "4. Typical non-examples",
    lead: S`Look out for:
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item a \textbf{nonzero constant}: \(x_1+x_2=3\) misses \(\vec 0\);
\item \textbf{products, squares, absolute values}: \(x_1x_2=0\), \(x_2=x_1^2\), \(|x_1|=x_2\);
\item \textbf{inequalities}: \(x_1\ge0\) (closed under addition, but \(-1\cdot\vec u\) leaves it --- figure);
\item \textbf{"or" conditions} (unions), and the \textbf{empty set}.
\end{itemize}`,
    fig: F_HALF, w: 0.56,
    body: S`To prove a set is \emph{not} a subspace, one concrete counterexample is enough: name specific vectors (and a specific scalar) in \(S\) and show the sum or multiple is not in \(S\).` },

  { h: "5. Writing a subspace proof",
    lead: S`For \(S=\{\vec x\in\mathbb R^n:\ \text{conditions}\}\):
\begin{enumerate}[leftmargin=*,itemsep=1pt]
\item \textbf{Zero:} check that \(\vec 0\) satisfies the conditions.
\item \textbf{Addition:} “Let \(\vec x,\vec y\in S\), so (write the conditions for \(\vec x\) and for \(\vec y\)).” Show \(\vec x+\vec y\) satisfies them.
\item \textbf{Scalars:} “Let \(\vec x\in S\) and \(c\in\mathbb R\).” Show \(c\vec x\) satisfies them.
\item Conclude: “By the subspace test, \(S\) is a subspace.”
\end{enumerate}`,
    fig: F_TWO, w: 0.56,
    body: S`\textbf{Intersections.} If \(U\) and \(W\) are subspaces, so is \(U\cap W\): \(\vec 0\) is in both, and sums and multiples of vectors in both stay in both. Two different planes through \(\vec 0\) in \(\mathbb R^3\) meet in a line through \(\vec 0\) (figure).` },
];

const EXAMPLES = [
  { title: "A plane given by one equation", q: S`Prove that \(S=\{\vec x\in\mathbb R^3: 3x_1-x_2+2x_3=0\}\) is a subspace of \(\mathbb R^3\).`,
    fig: planeFig([1, 3, 0], [0, 2, 1], { lu: "(1, 3, 0)", lv: "(0, 2, 1)" }),
    steps: [S`\textbf{Matrix form.} \(S=\{\vec x: A\vec x=\vec 0\}\) with \(A=${am([[3, -1, 2]], false)}\), since \[A\vec x=${am([[3, -1, 2]], false)}${am([["x_1"], ["x_2"], ["x_3"]], false)}=3x_1-x_2+2x_3.\]`,
      S`\textbf{Zero.} \[A\vec 0=${am([[3, -1, 2]], false)}${am([[0], [0], [0]], false)}=3(0)-1(0)+2(0)=0,\] so \(\vec 0\in S\).`,
      S`\textbf{Addition.} If \(A\vec x=0\) and \(A\vec y=0\), then \(A(\vec x+\vec y)=A\vec x+A\vec y=0+0=0\), so \(\vec x+\vec y\in S\).`,
      S`\textbf{Scalars.} If \(A\vec x=0\) and \(c\in\mathbb R\), then \(A(c\vec x)=c(A\vec x)=c\cdot0=0\), so \(c\vec x\in S\). By the subspace test, \(S\) is a subspace.`,
      ...steps([[3, -1, 2, 0]], [[S`\textbf{Describe \(S\).} Make the pivot 1.`, ["R1*1/3"]]], { intro: "Augmented matrix [A | 0]" }).steps,
      S`Free \(x_2=s\), \(x_3=t\): \(x_1=\tfrac13s-\tfrac23t\), so \(\vec x=s\big(\tfrac13,1,0\big)+t\big(-\tfrac23,0,1\big)\); scaled, \(S=\operatorname{Span}\{(1,3,0),(-2,0,3)\}\), a plane through \(\vec 0\).`,
      S`The figure's vectors lie in \(S\): \[${am([[3, -1, 2]], false)}${am([[1], [3], [0]], false)}=3-3+0=0\quad\text{and}\quad${am([[3, -1, 2]], false)}${am([[0], [2], [1]], false)}=0-2+2=0.\]`],
    ans: S`\(S\) is a subspace (a plane through \(\vec 0\))` },
  { title: "A line that misses the origin", q: S`Is \(S=\{(x,y): y=-2x+3\}\) a subspace of \(\mathbb R^2\)?`,
    fig: set2("line", { m: -2, b: 3, view: { xmin: -2, xmax: 4, ymin: -3, ymax: 5 }, arrows: [[[1, 1], "(1, 1)", "blue"], [[2, 2], "2(1, 1)", "red", null, true]] }),
    steps: [S`\textbf{Matrix form.} \(y=-2x+3\) is \(2x+y=3\): \(A\vec x=b\) with \(A=${am([[2, 1]], false)}\), \(b=3\).`,
      S`\textbf{Zero.} \(A\vec 0=${am([[2, 1]], false)}${am([[0], [0]], false)}=0\ne3\), so \(\vec 0\notin S\): not a subspace.`,
      S`\textbf{Closure fails too.} \(\vec u=${am([[1], [1]], false)}\): \(A\vec u=2+1=3\), so \(\vec u\in S\). But \(A(2\vec u)=${am([[2, 1]], false)}${am([[2], [2]], false)}=4+2=6\ne3\): the multiple leaves the line (figure).`],
    ans: S`not a subspace` },
  { title: "Two crossing lines", q: S`Is \(S=\{(x,y): x^2=y^2\}\) a subspace of \(\mathbb R^2\)?`,
    fig: set2("cross", { view: { xmin: -3, xmax: 3, ymin: -3, ymax: 3 }, arrows: [[[1, 1], "(1, 1)", "blue"], [[1, -1], "(1, −1)", "red"], [[2, 0], "sum", "green"]] }),
    steps: [S`\(x^2=y^2\) means \(y=x\) or \(y=-x\): \(S\) is the union of two lines through \(\vec 0\) (figure).`, S`\(\vec 0\in S\), and \((cx)^2=c^2x^2=c^2y^2=(cy)^2\): closed under scalar multiplication.`, S`Addition fails: \((1,1)\in S\) and \((1,-1)\in S\), but \((1,1)+(1,-1)=(2,0)\) has \(2^2=4\ne0=0^2\).`],
    ans: S`not a subspace: \((1,1)+(1,-1)\notin S\)` },
  { title: "A curve through the origin", q: S`Is \(S=\{(a,\ a^2,\ 0): a\in\mathbb R\}\) a subspace of \(\mathbb R^3\)?`,
    fig: planeT({ view: { xmin: -2.5, xmax: 2.5, ymin: -1, ymax: 5 }, step: { x: 1, y: 1 }, width: 300, curves: [{ f: (x) => x * x, color: "violet" }], points: [{ x: 1, y: 1, label: "(1, 1)", color: "blue" }, { x: 2, y: 2, label: "2(1, 1) = (2, 2)", color: "red" }] }, 4.2),
    steps: [S`\(a=0\) gives \(\vec 0\in S\), so containing \(\vec 0\) does not settle the question.`, S`\((1,1,0)\in S\) (take \(a=1\)). Its multiple \(2(1,1,0)=(2,2,0)\) would need \(a=2\) and \(a^2=2\), but \(2^2=4\ne2\).`, S`So \(S\) is not closed under scalar multiplication. In the \(x_1x_2\)-plane it is the parabola \(x_2=x_1^2\) (figure).`],
    ans: S`not a subspace` },
  { title: "A subspace of ℝ⁴", q: S`Prove that \(S=\{\vec x\in\mathbb R^4: x_1=2x_3,\ x_2+x_4=0\}\) is a subspace of \(\mathbb R^4\).`,
    steps: [S`\textbf{Matrix form.} \(x_1=2x_3\) and \(x_2+x_4=0\) are \(A\vec x=\vec 0\) with \[A=${am([[1, 0, -2, 0], [0, 1, 0, 1]], false)}.\]`,
      S`\textbf{Zero.} \(A\vec 0=${am([[0], [0]], false)}\), so \(\vec 0\in S\).`,
      S`\textbf{Addition and scalars.} \(A(\vec x+\vec y)=A\vec x+A\vec y=\vec 0+\vec 0=\vec 0\) and \(A(c\vec x)=cA\vec x=c\vec 0=\vec 0\). So \(S\) is a subspace.`,
      ...steps([[1, 0, -2, 0, 0], [0, 1, 0, 1, 0]], [], { intro: "Describe S: the augmented matrix [A | 0] is already in RREF" }).steps,
      S`Pivots in columns 1, 2; free \(x_3=s\), \(x_4=t\): \(x_1=2s\), \(x_2=-t\). So \(S=\{s(2,0,1,0)+t(0,-1,0,1)\}\).`],
    ans: S`a subspace: \(\operatorname{Span}\{(2,0,1,0),(0,-1,0,1)\}\)` },
  { title: "A parametric set", q: S`Prove that \(S=\{(a-b,\ 2a+b,\ 3b): a,b\in\mathbb R\}\) is a subspace of \(\mathbb R^3\).`,
    fig: planeFig([1, 2, 0], [-1, 1, 3], { lu: "a = 1, b = 0", lv: "a = 0, b = 1" }),
    steps: [S`\textbf{Matrix form.} The general element is \[${am([["a-b"], ["2a+b"], ["3b"]], false)}=${am([[1, -1], [2, 1], [0, 3]], false)}${am([["a"], ["b"]], false)}=a${am([[1], [2], [0]], false)}+b${am([[-1], [1], [3]], false)},\] so \(S=\operatorname{Span}\{(1,2,0),(-1,1,3)\}\), the set of combinations of the columns of a matrix — a subspace.`,
      ...steps([[1, -1], [2, 1], [0, 3]], [
        [S`\textbf{Are the columns independent?} Clear column 1.`, ["R2-2R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      ], { bar: false, intro: "Row reduce the matrix" }).steps,
      S`Two pivots: the two vectors are independent, so \(S\) is a plane through \(\vec 0\).`],
    ans: S`a subspace (a plane through \(\vec 0\))` },
  { title: "A half-plane", q: S`Is \(S=\{(x,y): x\ge0\}\) a subspace of \(\mathbb R^2\)?`,
    fig: set2("half", { view: { xmin: -3, xmax: 3, ymin: -3, ymax: 3 }, arrows: [[[2, -1], "(2, −1)", "blue"], [[-2, 1], "−1·(2, −1)", "red"]] }),
    steps: [S`\(\vec 0\in S\). If \(x\ge0\) and \(x'\ge0\) then \(x+x'\ge0\): closed under addition.`, S`Scalar multiplication fails: \((2,-1)\in S\), but \((-1)(2,-1)=(-2,1)\) has first entry \(-2\lt0\).`],
    ans: S`not a subspace: negative scalars leave it` },
  { title: "Intersection of two planes", q: S`Let \(U\) be the plane \(x_1+x_2=0\) and \(W\) the plane \(x_2+x_3=0\) in \(\mathbb R^3\). Show \(U\cap W\) is a subspace and describe it.`,
    fig: lineFig([1, -1, 1], { label: "(1, −1, 1)" }),
    steps: [S`\(U\cap W\) is the solution set of \(A\vec x=\vec 0\) with \(A=${am([[1, 1, 0], [0, 1, 1]], false)}\): a null space, hence a subspace.`,
      ...steps([[1, 1, 0, 0], [0, 1, 1, 0]], [[S`Clear column 2 above its pivot.`, ["R1-R2"]]], { intro: "Augmented matrix [A | 0]" }).steps,
      S`Free \(x_3=t\): \(x_1=t\), \(x_2=-t\). So \(U\cap W=\{t(1,-1,1)\}\).`,
      S`Check: \[${am([[1, 1, 0], [0, 1, 1]], false)}${am([[1], [-1], [1]], false)}=${am([["1-1+0"], ["0-1+1"]], false)}=${am([[0], [0]], false)}\ ✓\].`],
    ans: S`the line \(t(1,-1,1)\)` },
  { title: "A parameter in the conditions", q: S`For which \(b\) is \(S=\{\vec x\in\mathbb R^3: x_1+x_2=b-2,\ x_3=b^2-2b\}\) a subspace?`,
    steps: [S`\textbf{Matrix form.} The conditions are \(A\vec x=\vec b\) with \[A=${am([[1, 1, 0], [0, 0, 1]], false)},\qquad \vec b=${am([["b-2"], ["b^2-2b"]], false)}.\]`,
      S`A subspace must contain \(\vec 0\): \(A\vec 0=${am([[0], [0]], false)}\) must equal \(\vec b\), so \(b-2=0\) and \(b^2-2b=0\).`,
      S`The first gives \(b=2\); then \(b^2-2b=4-4=0\) ✓.`,
      S`For \(b=2\), \(\vec b=\vec 0\) and \(S=\{\vec x: A\vec x=\vec 0\}\) is a subspace (closed: \(A(\vec x+\vec y)=\vec 0\), \(A(c\vec x)=\vec 0\)). For \(b\ne2\), \(\vec 0\notin S\).`],
    ans: S`only \(b=2\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Which of these sets contain \(\vec 0\)? (a) \(x_1+2x_2=0\) (b) \(x_1+2x_2=3\) (c) \(x_1x_2=0\) (d) \(x_1^2+x_2^2=1\)`, ans: S`(a) and (c)`,
    sol: [S`Substitute \((0,0)\): (a) \(0=0\) ✓; (b) \(0\ne3\); (c) \(0\cdot0=0\) ✓; (d) \(0\ne1\).`, S`Only (a) is a subspace, though: (c) is the union of the axes, not closed under addition.`] },
  { level: 1, q: S`Is \(\{\vec 0\}\) a subspace of \(\mathbb R^5\)? Is the empty set?`, ans: S`\(\{\vec 0\}\): yes; the empty set: no`,
    sol: [S`\(\{\vec 0\}\) is non-empty, \(\vec 0+\vec 0=\vec 0\), \(c\vec 0=\vec 0\): a subspace. The empty set fails condition (1).`] },
  { level: 1, q: S`Is the line through \((0,0)\) and \((2,3)\) a subspace of \(\mathbb R^2\)? Is the line through \((1,0)\) and \((0,1)\)?`, ans: S`the first yes (through \(\vec 0\)); the second no (\(x+y=1\) misses \(\vec 0\))` },
  { level: 2, q: S`Prove that \(\{\vec x\in\mathbb R^3: x_1-x_2+4x_3=0\}\) is a subspace.`, ans: S`subspace test: \(\vec 0\) works; sums and multiples keep the left side \(0\)`,
    sol: [S`\(0-0+0=0\).`, S`If \(x_1-x_2+4x_3=0\) and \(y_1-y_2+4y_3=0\), then \((x_1+y_1)-(x_2+y_2)+4(x_3+y_3)=0+0=0\).`, S`\(cx_1-cx_2+4cx_3=c\cdot0=0\). By the subspace test, a subspace.`] },
  { level: 2, space: 4, q: S`Show that \(\{(x,y): y=2x-1\}\) is not a subspace, and sketch it with a counterexample.`, ans: S`\(\vec 0\notin S\); e.g. \((1,1)\in S\) but \(2(1,1)=(2,2)\notin S\)`, fig: gridT({ xmin: -3, xmax: 4, ymin: -4, ymax: 5 }),
    sol: [S`At \(x=0\), \(y=-1\ne0\): \(\vec 0\notin S\).`, S`Counterexample: \((1,1)\in S\) since \(2-1=1\); \(2(1,1)=(2,2)\) needs \(y=3\).`] },
  { level: 2, q: S`Show that \(\{(x,y,z): x+y+z\ge0\}\) is not a subspace of \(\mathbb R^3\).`, ans: S`\((1,0,0)\) is in it but \(-(1,0,0)\) is not`,
    sol: [S`\((1,0,0)\): \(1\ge0\) ✓. \((-1)(1,0,0)=(-1,0,0)\): \(-1\lt0\). Not closed under scalar multiplication.`] },
  { level: 2, q: S`Is \(S=\{(s,\ s+t,\ t-s): s,t\in\mathbb R\}\) a subspace of \(\mathbb R^3\)? Prove your answer.`, ans: S`yes: sums and multiples have the same form`,
    sol: [S`\(s=t=0\) gives \(\vec 0\).`, S`Sum of the elements with \((s,t)\) and \((s',t')\): \((s+s',\ (s+s')+(t+t'),\ (t+t')-(s+s'))\) --- same form.`, S`\(c\) times the element with \((s,t)\) is the element with \((cs,ct)\). So \(S\) is a subspace.`] },
  { level: 2, q: S`Is the closed disk \(\{(x,y): x^2+y^2\le1\}\) a subspace of \(\mathbb R^2\)?`, ans: S`no: \((1,0)\) is in it but \(2(1,0)\) is not`,
    fig: set2("circle", { b: 1, view: { xmin: -2.5, xmax: 2.5, ymin: -2.5, ymax: 2.5 }, arrows: [[[1, 0], "(1, 0)", "blue"], [[2, 0], "2(1, 0)", "red", null, true]] }),
    sol: [S`\(1^2+0^2=1\le1\) ✓; \(2(1,0)=(2,0)\): \(4\gt1\). Not closed under scalar multiplication.`] },
  { level: 3, space: 5, q: S`Let \(S\) be a subspace and \(\vec u,\vec v\in S\). Prove that \(-\vec u\in S\) and \(\vec u-\vec v\in S\).`, ans: S`\(-\vec u=(-1)\vec u\); \(\vec u-\vec v=\vec u+(-1)\vec v\)`,
    sol: [S`Closure under scalar multiplication with \(c=-1\): \(-\vec u=(-1)\vec u\in S\).`, S`Likewise \(-\vec v\in S\), and closure under addition gives \(\vec u+(-\vec v)=\vec u-\vec v\in S\).`] },
  { level: 3, space: 5, q: S`For subspaces \(U,W\) of \(\mathbb R^n\), let \(U+W=\{\vec u+\vec w: \vec u\in U,\ \vec w\in W\}\). Prove that \(U+W\) is a subspace.`, ans: S`subspace test with \(\vec 0=\vec 0+\vec 0\); sums and multiples regroup`,
    sol: [S`\(\vec 0=\vec 0+\vec 0\in U+W\).`, S`\((\vec u+\vec w)+(\vec u'+\vec w')=(\vec u+\vec u')+(\vec w+\vec w')\) with \(\vec u+\vec u'\in U\), \(\vec w+\vec w'\in W\).`, S`\(c(\vec u+\vec w)=c\vec u+c\vec w\) with \(c\vec u\in U\), \(c\vec w\in W\). So \(U+W\) is a subspace.`] },
  { level: 3, space: 5, q: S`For which \(k\) is \(\{\vec x\in\mathbb R^2: x_1+kx_2=k^2-1\}\) a subspace? Describe it in each case.`, ans: S`\(k=1\) (line \(x_1+x_2=0\)) or \(k=-1\) (line \(x_1-x_2=0\))`,
    sol: [S`\(\vec 0\) must satisfy it: \(0=k^2-1\), so \(k=\pm1\).`, S`Then the equation is homogeneous: \(k=1\) gives \(x_1+x_2=0\), \(k=-1\) gives \(x_1-x_2=0\) --- lines through \(\vec 0\).`] },
  { level: 3, space: 5, q: S`Fix \(\vec a\in\mathbb R^3\). Prove that \(\{\vec x: \vec a\cdot\vec x=0\}\) is a subspace, and describe it when \(\vec a=\vec 0\) and when \(\vec a\ne\vec 0\).`, ans: S`subspace by linearity of the dot product; \(\mathbb R^3\) if \(\vec a=\vec 0\), else the plane through \(\vec 0\) with normal \(\vec a\)`,
    fig: planeFig([1, 0, -1], [0, 1, -1], { lu: "", lv: "", more: [[[1, 1, 1], "a", "red"]] }),
    sol: [S`\(\vec a\cdot\vec 0=0\). \(\vec a\cdot(\vec x+\vec y)=\vec a\cdot\vec x+\vec a\cdot\vec y=0\); \(\vec a\cdot(c\vec x)=c(\vec a\cdot\vec x)=0\).`, S`If \(\vec a=\vec 0\) every \(\vec x\) works: \(\mathbb R^3\). Otherwise it is the plane through \(\vec 0\) perpendicular to \(\vec a\).`] },
  { level: 3, space: 5, q: S`Show that \(S=\{(x,y): y=x^3\}\) is closed under multiplication by \(-1\), contains \(\vec 0\), but is still not a subspace.`, ans: S`\((-x)^3=-x^3\); but \(2(1,1)=(2,2)\) and \(2^3=8\ne2\)`,
    fig: planeT({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, step: { x: 1, y: 1 }, width: 300, curves: [{ f: (x) => x ** 3, color: "violet" }], points: [{ x: 1, y: 1, label: "(1, 1)", color: "blue" }, { x: 2, y: 2, label: "(2, 2)", color: "red" }] }, 4),
    sol: [S`\(0=0^3\): \(\vec 0\in S\). If \(y=x^3\) then \(-y=(-x)^3\), so \(-(x,y)\in S\).`, S`But \((1,1)\in S\) and \(2(1,1)=(2,2)\): \(2^3=8\ne2\). Not closed under scalar multiplication.`] },
];

export const WS = {
  code: "5.1",
  title: "Subspaces and the Subspace Test",
  bigideas: S`A \textbf{subspace} of \(\mathbb R^n\) is a set of vectors you cannot leave by adding or scaling: it is non-empty, closed under addition and closed under scalar multiplication. Every subspace contains \(\vec 0\). In \(\mathbb R^2\) and \(\mathbb R^3\) the subspaces are \(\{\vec 0\}\), the lines and planes \emph{through the origin}, and the whole space. Proving a set is a subspace uses arbitrary vectors; proving it is not needs one counterexample.`,
  goals: ["State the definition of a subspace and the subspace test.", "Prove that sets defined by homogeneous linear conditions (or by parameters) are subspaces.", "Disprove the subspace property with a single, specific counterexample.", "Use the fact that every subspace contains the zero vector.", "Recognise the subspaces of \\(\\mathbb R^2\\) and \\(\\mathbb R^3\\) geometrically."],
  curriculum: "Subspaces of Rⁿ — definition and the subspace test",
  vocab: [["Subspace", "non-empty, closed under \\(+\\) and scalar multiplication"], ["Closed under addition", "\\(\\vec u,\\vec v\\in S\\Rightarrow\\vec u+\\vec v\\in S\\)"], ["Closed under scalars", "\\(\\vec u\\in S,\\ c\\in\\mathbb R\\Rightarrow c\\vec u\\in S\\)"], ["Zero subspace", "\\(\\{\\vec 0\\}\\)"], ["Counterexample", "specific vectors showing a condition fails"]],
  hook: S`The line \(y=2x\) and the line \(y=2x+1\) look alike. Pick two points on each and add them as vectors. Which line “keeps” the sum? Try multiplying by \(-1\) too.`,
  concepts: NOTES,
  summary: [
    S`Subspace = non-empty + closed under addition + closed under scalar multiplication.`,
    S`Every subspace contains \(\vec 0\): if \(\vec 0\notin S\), stop --- not a subspace.`,
    S`Homogeneous linear conditions and parametric (span) descriptions give subspaces.`,
    S`Constants \(\ne0\), products, squares, inequalities and unions usually fail.`,
    S`Intersections of subspaces are subspaces; unions usually are not.`,
  ],
  tips: ["Check \\(\\vec 0\\) first --- it is the fastest test.", "In a proof, name the conditions for arbitrary \\(\\vec x\\) and \\(\\vec y\\) before adding them.", "Closure under scalars must hold for negative \\(c\\) and for \\(c=0\\).", "A counterexample must use actual numbers, not “some vectors”.", "Containing \\(\\vec 0\\) is not enough: test addition and scaling too."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

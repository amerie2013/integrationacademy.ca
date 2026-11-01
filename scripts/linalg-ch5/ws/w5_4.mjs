// LINALG1 Worksheet 5.4 — Dimension
// Self-contained: complete notes (more vectors than a basis are dependent, all bases have the same size, the
// dimension, computing dimensions, the counting theorem, subspaces inside subspaces), 9 worked examples with
// figures, 13 problems with full solutions.
import { S, def, thm } from "./wkit.mjs";
import { svgT } from "./figT.mjs";
import { stairSvg, matSvg } from "./fig2.mjs";
import { planeFig, lineFig, vecs3, vecs2 } from "./fig5.mjs";
import { am, steps } from "../bank/la.mjs";

const F_THREE = vecs2([[[2, 1], "v₁", "blue"], [[1, 2], "v₂", "red"], [[3, 3], "v₃ = v₁ + v₂", "green"]], { xmin: -1, xmax: 4, ymin: -1, ymax: 4 });
const F_DIMS = vecs3([[[1, 1, 2], "line (dim 1)", "red"], [[2, 0, 0], "", "blue"], [[0, 2, 0], "", "blue"]], { plane: [[1, 0, 0], [0, 1, 0], 1.8] });
const F_PLANE = planeFig([1, 0, -1], [0, 1, -1], { lu: "", lv: "", more: [[[1, 1, 1], "normal", "red"]] });
const F_BASIS = vecs3([[[1, 1, 1], "(1, 1, 1)"], [[1, 2, 3], "(1, 2, 3)"], [[1, 4, 9], "(1, 4, 9)"]]);
const F_NEST = planeFig([1, 1, 0], [0, 1, 1], { lu: "", lv: "", line: [1, 2, 1], fill: "#ede9fe", edge: "violet" });

const NOTES = [
  { h: "1. Too many vectors are dependent",
    lead: thm("more vectors than a basis", S`If \(\{\vec v_1,\dots,\vec v_k\}\) is a basis of a subspace \(S\) and \(\vec w_1,\dots,\vec w_\ell\in S\) with \(\ell\gt k\), then \(\vec w_1,\dots,\vec w_\ell\) are dependent.`) + S`\pf{Write \(\vec w_j=\sum_i a_{ij}\vec v_i\). Then \(\sum_j t_j\vec w_j=\sum_i\big(\sum_j a_{ij}t_j\big)\vec v_i\). The homogeneous system \(\sum_j a_{ij}t_j=0\) (\(i=1,\dots,k\)) has \(k\) equations and \(\ell\gt k\) unknowns, so it has a nontrivial solution, and for it \(\sum_j t_j\vec w_j=\vec 0\).}`,
    fig: F_THREE, w: 0.58,
    body: S`In \(\mathbb R^2\) (basis \(\vec e_1,\vec e_2\)) any three vectors are dependent --- as in the figure, where \(\vec v_3=\vec v_1+\vec v_2\).` },

  { h: "2. Dimension",
    lead: thm("all bases have the same size", S`Any two bases of a subspace \(S\) have the same number of vectors.`) + S`\pf{If bases have \(k\) and \(\ell\) vectors, Note 1 gives \(\ell\le k\) and \(k\le\ell\).}
${def("dimension", S`The \textbf{dimension} \(\dim S\) is the number of vectors in any basis of \(S\); \(\dim\{\vec 0\}=0\).`)}`,
    fig: F_DIMS, w: 0.56,
    body: S`\(\dim\mathbb R^n=n\); a line through \(\vec 0\) has dimension 1 and a plane through \(\vec 0\) dimension 2 (figure). So the subspaces of \(\mathbb R^3\) are classified by dimension: \(0\) (\(\{\vec 0\}\)), \(1\) (lines), \(2\) (planes), \(3\) (\(\mathbb R^3\)).` },

  { h: "3. Computing dimensions",
    lead: S`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \(\dim\operatorname{Span}\{\vec v_1,\dots,\vec v_k\}\) = number of pivots of the matrix with the \(\vec v_i\) as columns.
\item The solution space of \(A\vec x=\vec 0\) (\(n\) unknowns): \(n-\operatorname{rank}A\), the number of free variables.
\item A hyperplane \(\vec a\cdot\vec x=0\) (\(\vec a\ne\vec 0\)) in \(\mathbb R^n\): dimension \(n-1\).
\item A set described with \(k\) parameters: at most \(k\) --- exactly \(k\) if the parameter vectors are independent.
\end{itemize}`,
    fig: F_PLANE, w: 0.55,
    body: S`The figure shows the plane \(x_1+x_2+x_3=0\): one equation in \(\mathbb R^3\), so dimension \(3-1=2\).` },

  { h: "4. The counting theorem",
    lead: thm("counting", S`Let \(\dim S=k\gt0\). (1) More than \(k\) vectors in \(S\) are dependent. (2) Fewer than \(k\) vectors cannot span \(S\). (3) Exactly \(k\) vectors in \(S\) span \(S\) \(\iff\) they are independent \(\iff\) they form a basis.`) + S`\pf{(1) is Note 1. (2) a spanning set contains a basis (drop redundant vectors), which has \(k\) vectors. (3) if \(k\) vectors span, dropping redundant ones leaves \(k\) --- none dropped, so independent. If \(k\) independent vectors did not span, adding a vector outside their span would give \(k+1\) independent vectors, contradicting (1).}`,
    fig: F_BASIS, w: 0.58,
    body: S`So once \(\dim S\) is known, a candidate basis of the right size needs only one check --- independence \emph{or} spanning.` },

  { h: "5. Subspaces inside subspaces",
    lead: thm("nested subspaces", S`If \(U\subseteq W\) are subspaces, then \(\dim U\le\dim W\), and \(\dim U=\dim W\) only when \(U=W\).`) + S`\pf{A basis of \(U\) is an independent set in \(W\), so it has at most \(\dim W\) vectors. If it has exactly \(\dim W\), it spans \(W\) by the counting theorem, so \(U=W\).}`,
    fig: F_NEST, w: 0.56,
    body: S`To show two subspaces are equal, it is enough to show one is inside the other and they have the same dimension. The figure shows a line (dimension 1) inside a plane (dimension 2) inside \(\mathbb R^3\).` },
];

const EXAMPLES = [
  { title: "A hyperplane in ℝ⁵", q: S`Find \(\dim S\) and a basis for \(S=\{\vec x\in\mathbb R^5: x_1+x_2-2x_3+x_4-x_5=0\}\).`,
    fig: F_PLANE,
    steps: [...steps([[1, 1, -2, 1, -1, 0]], [], { intro: "S is A x = 0 with one equation; the augmented matrix is already in RREF" }).steps,
      S`One pivot (column 1), four free variables \(x_2,x_3,x_4,x_5\): \(\dim S=5-1=4\).`,
      S`Row: \(x_1=-x_2+2x_3-x_4+x_5\). Setting one free variable to 1 at a time gives the basis \[${am([[-1], [1], [0], [0], [0]], false)},\ ${am([[2], [0], [1], [0], [0]], false)},\ ${am([[-1], [0], [0], [1], [0]], false)},\ ${am([[1], [0], [0], [0], [1]], false)}.\]`,
      S`Check \((2,0,1,0,0)\): \(${am([[1, 1, -2, 1, -1]], false)}${am([[2], [0], [1], [0], [0]], false)}=2+0-2+0-0=0\) ✓.`],
    ans: S`\(\dim S=4\)` },
  { title: "The dimension of a span", q: S`Find \(\dim\operatorname{Span}\{(1,0,1),(2,1,3),(0,1,1)\}\).`,
    fig: vecs3([[[1, 0, 1], "(1, 0, 1)"], [[2, 1, 3], "(2, 1, 3)"], [[0, 1, 1], "(0, 1, 1)"]], { plane: [[1, 0, 1], [0, 1, 1], 1.3] }),
    steps: [...steps([[1, 2, 0], [0, 1, 1], [1, 3, 1]], [
      [S`Vectors as columns. Clear column 1.`, ["R3-R1"]],
      [S`Clear column 2.`, ["R3-R2"]],
    ], { bar: false, intro: "Matrix of columns" }).steps,
      S`Two pivots: dimension 2 (a plane). Indeed \((2,1,3)=2(1,0,1)+(0,1,1)\).`],
    ans: S`2` },
  { title: "The dimension of a solution space", q: S`Find the dimension of the solution space of \(A\vec x=\vec 0\) for \(A=${am([[1, -1, 2, 1], [2, -2, 5, 4], [-1, 1, -1, 1]], false)}\).`,
    fig: svgT(stairSvg([["p", "*", "*", "*"], ["0", "0", "p", "*"], ["0", "0", "0", "0"]], false), 3.6),
    steps: [...steps([[1, -1, 2, 1], [2, -2, 5, 4], [-1, 1, -1, 1]], [
      [S`Clear column 1.`, ["R2-2R1", "R3+R1"]],
      [S`Rows 2 and 3 are equal; subtract.`, ["R3-R2"]],
    ], { bar: false, intro: "Row reduce A" }).steps,
      S`\(\operatorname{rank}A=2\), so the solution space has dimension \(4-2=2\) (free \(x_2\) and \(x_4\)).`],
    ans: S`2` },
  { title: "Three vectors, three dimensions", q: S`Is \(\{(1,1,1),(1,2,3),(1,4,9)\}\) a basis of \(\mathbb R^3\)?`,
    fig: F_BASIS,
    steps: [S`Three vectors in \(\mathbb R^3\) (dimension 3): by the counting theorem, independence is enough.`,
      ...steps([[1, 1, 1], [1, 2, 4], [1, 3, 9]], [
        [S`Clear column 1.`, ["R2-R1", "R3-R1"]],
        [S`Clear column 2.`, ["R3-2R2"]],
      ], { bar: false, intro: "Columns are the vectors" }).steps,
      S`Three pivots: independent, hence a basis.`],
    ans: S`yes` },
  { title: "Three vectors in the plane", q: S`Show \(\{(1,2),(2,1),(3,3)\}\) is dependent without solving, then find a relation.`,
    fig: vecs2([[[1, 2], "(1, 2)", "blue"], [[2, 1], "(2, 1)", "red"], [[3, 3], "(3, 3)", "green"]], { xmin: -1, xmax: 4, ymin: -1, ymax: 4 }),
    steps: [S`\(\dim\mathbb R^2=2\lt3\): three vectors are dependent.`, S`Look for \(a(1,2)+b(2,1)=(3,3)\): \(a+2b=3\), \(2a+b=3\) give \(a=b=1\).`, S`So \((1,2)+(2,1)-(3,3)=\vec 0\).`],
    ans: S`\((3,3)=(1,2)+(2,1)\)` },
  { title: "Too few to span", q: S`Can \(\{(1,0,2,1),(0,1,1,1)\}\) span \(\mathbb R^4\)? What is the dimension of its span?`,
    fig: svgT(matSvg([[1, 0], [0, 1], [2, 1], [1, 1]], [[0, 0], [1, 1]], false), 2.6),
    steps: [S`\(\dim\mathbb R^4=4\gt2\): two vectors cannot span \(\mathbb R^4\).`, S`They are not multiples (entries 1 and 2), so independent: the span has dimension 2, a plane in \(\mathbb R^4\).`],
    ans: S`no; the span has dimension 2` },
  { title: "A line in ℝ³", q: S`Find the dimension of \(S=\{\vec x\in\mathbb R^3: x_1=x_2=x_3\}\).`,
    fig: lineFig([1, 1, 1], { label: "(1, 1, 1)" }),
    steps: [...steps([[1, -1, 0, 0], [0, 1, -1, 0]], [[S`\(x_1=x_2=x_3\) is \(x_1-x_2=0,\ x_2-x_3=0\). Clear column 2 above its pivot.`, ["R1+R2"]]], { intro: "Augmented matrix [A | 0]" }).steps,
      S`Rank 2, one free variable \(x_3=t\): \(x_1=t\), \(x_2=t\). So \(\dim S=3-2=1\), basis \(\{(1,1,1)\}\): a line through \(\vec 0\).`],
    ans: S`1` },
  { title: "A basis by counting", q: S`Show that \(\{(1,1,0),(0,1,1)\}\) is a basis of \(S=\{\vec x: x_1-x_2+x_3=0\}\).`,
    fig: planeFig([1, 1, 0], [0, 1, 1], { lu: "(1, 1, 0)", lv: "(0, 1, 1)" }),
    steps: [S`Both are in \(S\) (\(A=${am([[1, -1, 1]], false)}\)): \(A${am([[1], [1], [0]], false)}=1-1+0=0\) ✓ and \(A${am([[0], [1], [1]], false)}=0-1+1=0\) ✓.`,
      ...steps([[1, 0], [1, 1], [0, 1]], [
        [S`\textbf{Independence.} Clear column 1.`, ["R2-R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      ], { bar: false, intro: "Matrix with the two vectors as columns" }).steps,
      S`Two pivots: independent. And \(\dim S=3-\operatorname{rank}A=3-1=2\), so two independent vectors in \(S\) form a basis — no need to check spanning.`],
    ans: S`a basis (counting theorem)` },
  { title: "When does the dimension drop?", q: S`Find \(\dim\operatorname{Span}\{(1,1,0),(0,1,1),(1,k,1)\}\) for every \(k\).`,
    steps: [S`Columns: \[${am([[1, 0, 1], [1, 1, "k"], [0, 1, 1]], false)}\]`,
      S`\(R_2\to R_2-R_1\): \[\longrightarrow\ ${am([[1, 0, 1], [0, 1, "k-1"], [0, 1, 1]], false)}\]`,
      S`\(R_3\to R_3-R_2\): the last entry is \(1-(k-1)=2-k\). \[\longrightarrow\ ${am([[1, 0, 1], [0, 1, "k-1"], [0, 0, "2-k"]], false)}\]`,
      S`\(k\ne2\): three pivots, dimension 3. \(k=2\): dimension 2, since \((1,2,1)=(1,1,0)+(0,1,1)\).`],
    ans: S`2 when \(k=2\), otherwise 3` },
];

const PROBLEMS = [
  { level: 1, q: S`What is \(\dim\mathbb R^7\)?`, ans: S`7` },
  { level: 1, q: S`What is the dimension of the plane \(x+y-z=0\) in \(\mathbb R^3\)?`, ans: S`2`, fig: F_PLANE },
  { level: 1, q: S`Can 5 vectors in \(\mathbb R^4\) be linearly independent?`, ans: S`no: more than \(\dim\mathbb R^4=4\)` },
  { level: 2, q: S`Find \(\dim\operatorname{Span}\{(1,-1,0),(2,-2,0),(0,1,1),(1,0,1)\}\).`, ans: S`2`,
    fig: vecs3([[[1, -1, 0], "(1, −1, 0)"], [[0, 1, 1], "(0, 1, 1)"], [[1, 0, 1], "(1, 0, 1)", "green"]], { plane: [[1, -1, 0], [0, 1, 1], 1] }),
    sol: [...steps([[1, 2, 0, 1], [-1, -2, 1, 0], [0, 0, 1, 1]], [
      [S`Clear column 1.`, ["R2+R1"]],
      [S`Clear column 3 below its pivot.`, ["R3-R2"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Two pivots: dimension 2.`] },
  { level: 2, q: S`Find the dimension of the solution space of \(x_1+x_2+x_3+x_4=0\), \(x_1-x_2+x_3-x_4=0\).`, ans: S`2`,
    sol: [...steps([[1, 1, 1, 1], [1, -1, 1, -1]], [[S`Clear column 1.`, ["R2-R1"]]], { bar: false, intro: "Coefficient matrix" }).steps, S`Rank 2, so \(4-2=2\).`] },
  { level: 2, q: S`Is \(\{(2,1,0),(1,1,1),(0,1,2)\}\) a basis of \(\mathbb R^3\)?`, ans: S`no: \((0,1,2)=2(1,1,1)-(2,1,0)\)`,
    fig: vecs3([[[2, 1, 0], "(2, 1, 0)"], [[1, 1, 1], "(1, 1, 1)"], [[0, 1, 2], "(0, 1, 2)", "green"]], { plane: [[2, 1, 0], [1, 1, 1], 0.9] }),
    sol: [...steps([[2, 1, 0], [1, 1, 1], [0, 1, 2]], [
      [S`Swap for a leading 1.`, ["R1<->R2"]],
      [S`Clear column 1.`, ["R2-2R1"]],
      [S`Clear column 2.`, ["R3+R2"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Two pivots: dependent, not a basis.`] },
  { level: 2, q: S`Find \(\dim\{(a,\ b,\ a+b,\ a-b): a,b\in\mathbb R\}\).`, ans: S`2`,
    sol: [S`\((a,b,a+b,a-b)=a(1,0,1,1)+b(0,1,1,-1)\); the two vectors are independent (entries 1, 2). Dimension 2.`] },
  { level: 2, q: S`Explain why any three vectors in the plane \(x_1+2x_2+x_3=0\) are dependent.`, ans: S`the plane has dimension 2 < 3`,
    fig: planeFig([1, 0, -1], [0, 1, -2], { lu: "", lv: "" }),
    sol: [S`One equation in \(\mathbb R^3\): dimension \(2\). More than 2 vectors in it are dependent (counting theorem).`] },
  { level: 3, space: 5, q: S`Prove: if \(\dim S=k\) and \(\vec v_1,\dots,\vec v_k\in S\) are independent, then they span \(S\).`, ans: S`otherwise adding a vector outside the span gives \(k+1\) independent vectors`,
    sol: [S`Suppose some \(\vec w\in S\) is not in \(\operatorname{Span}\{\vec v_i\}\).`, S`Then \(\vec v_1,\dots,\vec v_k,\vec w\) are independent (a relation with a nonzero coefficient on \(\vec w\) would put \(\vec w\) in the span; one with zero coefficient on \(\vec w\) contradicts independence of the \(\vec v_i\)).`, S`That is \(k+1\) independent vectors in a \(k\)-dimensional subspace, impossible.`] },
  { level: 3, space: 5, q: S`Prove that the solution set of one equation \(a_1x_1+\dots+a_nx_n=0\) with not all \(a_i=0\) has dimension \(n-1\).`, ans: S`rank 1, so \(n-1\) free variables`,
    sol: [S`The coefficient matrix \([a_1\ \cdots\ a_n]\) has one nonzero row: rank 1.`, S`The solution space has dimension \(n-1\) (the number of free variables).`] },
  { level: 3, space: 5, q: S`For which \(k\) is \(\dim\operatorname{Span}\{(k,1,1),(1,k,1)\}=1\)?`, ans: S`\(k=1\)`,
    sol: [S`Dimension 1 means the vectors are parallel: \((1,k,1)=c(k,1,1)\).`, S`Third entries: \(c=1\); then \(1=k\) and \(k=1\). So \(k=1\) (both are \((1,1,1)\)).`] },
  { level: 3, space: 5, q: S`Let \(U\) be the plane \(x_1+x_2+x_3=0\) and \(W=\operatorname{Span}\{(1,-1,0),(1,0,-1)\}\). Show \(U=W\) using dimension.`, ans: S`\(W\subseteq U\) and both have dimension 2`,
    fig: planeFig([1, -1, 0], [1, 0, -1], { lu: "(1, −1, 0)", lv: "(1, 0, −1)" }),
    sol: [S`Both spanning vectors satisfy \(x_1+x_2+x_3=0\), so \(W\subseteq U\).`, S`They are independent, so \(\dim W=2\); \(\dim U=3-1=2\).`, S`Nested subspaces of equal dimension are equal.`] },
  { level: 3, space: 5, q: S`List the possible subspaces of \(\mathbb R^2\) by dimension, and justify that there are no others.`, ans: S`dim 0: \(\{\vec 0\}\); dim 1: lines through \(\vec 0\); dim 2: \(\mathbb R^2\)`,
    sol: [S`A subspace of \(\mathbb R^2\) has dimension 0, 1 or 2.`, S`Dimension 0: \(\{\vec 0\}\). Dimension 1: spanned by one nonzero vector --- a line through \(\vec 0\). Dimension 2: inside \(\mathbb R^2\) with equal dimension, so it is \(\mathbb R^2\).`] },
];

export const WS = {
  code: "5.4",
  title: "Dimension",
  bigideas: S`In a subspace with a basis of \(k\) vectors, any \(k+1\) vectors are dependent; therefore every basis has the same number of vectors, the \textbf{dimension}. Dimensions are computed by counting pivots (for a span) or free variables (for a solution space: \(n-\operatorname{rank}A\)). The \textbf{counting theorem} then makes many questions quick: in dimension \(k\), more than \(k\) vectors are dependent, fewer cannot span, and exactly \(k\) vectors span if and only if they are independent.`,
  goals: ["Explain why more vectors than a basis must be dependent, and why all bases have the same size.", "Find the dimension of a span, a solution space, a hyperplane or a parametric set.", "Use the counting theorem to decide independence, spanning and bases quickly.", "Use dimension to prove two subspaces are equal.", "Classify subspaces of \\(\\mathbb R^2\\) and \\(\\mathbb R^3\\) by dimension."],
  curriculum: "Subspaces of Rⁿ — dimension",
  vocab: [["Dimension", "number of vectors in any basis"], ["\\(\\dim\\{\\vec 0\\}\\)", "0"], ["Hyperplane", "\\(\\vec a\\cdot\\vec x=0\\) in \\(\\mathbb R^n\\): dimension \\(n-1\\)"], ["Solution space", "dimension \\(n-\\operatorname{rank}A\\)"], ["Counting theorem", "in dim \\(k\\): \\(k\\) vectors span \\(\\iff\\) independent"]],
  hook: S`A plane through the origin has many bases. Find two different ones for \(x_1+x_2+x_3=0\). How many vectors does each have? Could a basis have three?`,
  concepts: NOTES,
  summary: [
    S`More vectors than a basis \(\Rightarrow\) dependent; all bases have the same size.`,
    S`\(\dim\{\vec 0\}=0\), \(\dim\mathbb R^n=n\), lines 1, planes 2, hyperplanes \(n-1\).`,
    S`\(\dim\operatorname{Span}\) = pivots; \(\dim\) solution space \(=n-\operatorname{rank}A\).`,
    S`Dimension \(k\): \(k\) vectors span \(\iff\) independent \(\iff\) basis.`,
    S`\(U\subseteq W\) and \(\dim U=\dim W\Rightarrow U=W\).`,
  ],
  tips: ["Dimension counts basis vectors, not spanning vectors.", "A subspace of \\(\\mathbb R^n\\) can have any dimension from 0 to \\(n\\).", "Use \\(n-\\operatorname{rank}A\\) for solution spaces.", "Know the dimension before using the counting theorem.", "\\(\\dim\\{\\vec 0\\}=0\\), not 1."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

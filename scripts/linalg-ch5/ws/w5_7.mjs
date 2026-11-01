// LINALG1 Worksheet 5.7 — Bases for the Fundamental Subspaces and the Rank–Nullity Theorem
// Self-contained: complete notes (three bases from one RREF, why the pivot columns of A, the row-space basis, rank
// and rank–nullity, consequences for Ax = b), 9 worked examples with figures, 13 problems with full solutions.
import { S, def, thm } from "./wkit.mjs";
import { svgT } from "./figT.mjs";
import { stairSvg, matSvg, flowSvg } from "./fig2.mjs";
import { planeFig, lineFig, vecs3 } from "./fig5.mjs";
import { am, steps } from "../bank/la.mjs";

const F_STAIR = svgT(stairSvg([["1", "*", "0", "*", "*"], ["0", "0", "1", "*", "*"], ["0", "0", "0", "0", "0"]], false), 4);
const F_COLS = planeFig([1, 1, 1], [1, 2, 0], { lu: "a₁", lv: "a₂", more: [[[2, 3, 1], "a₃ = a₁ + a₂", "green"]], len: 3.4 });
const F_ROWS = planeFig([1, 0, 1], [0, 1, 1], { lu: "(1, 0, 1)", lv: "(0, 1, 1)", line: [-1, -1, 1], fill: "#ede9fe", edge: "violet" });
const F_FLOW = svgT(flowSvg([["rank A = m", "Ax = b consistent for every b", "green"], ["rank A = n", "Null A = {0}: at most one solution", "blue"], ["rank A + nullity A = n", "pivot columns + free columns", "amber"]], 330), 5.6);
const F_MAT = svgT(matSvg([[1, -1, 0, 2], [0, 0, 1, 1], [0, 0, 0, 0]], [[0, 0], [1, 2]], false), 3.6);

const NOTES = [
  { h: "1. Three bases from one RREF",
    lead: S`Row reduce \(A\) to its RREF \(R\).
\begin{enumerate}[leftmargin=*,itemsep=1pt]
\item \(\operatorname{Null}A\): solve \(R\vec x=\vec 0\), one parameter per free column, split by parameter --- one basis vector per \textbf{free} variable.
\item \(\operatorname{Col}A\): the columns \textbf{of \(A\)} in the pivot positions of \(R\).
\item \(\operatorname{Row}A\): the nonzero rows \textbf{of \(R\)}.
\end{enumerate}`,
    fig: F_STAIR, w: 0.56,
    body: S`In the pattern shown (pivots in columns 1 and 3 of a \(3\times5\) matrix): \(\operatorname{rank}A=2\); \(\operatorname{Col}A\) has basis \(\vec a_1,\vec a_3\); \(\operatorname{Row}A\) has the two nonzero rows of \(R\); \(\operatorname{Null}A\) has 3 basis vectors (free \(x_2,x_4,x_5\)).` },

  { h: "2. Why the pivot columns of A",
    lead: thm("column-space basis", S`The pivot columns of \(A\) form a basis of \(\operatorname{Col}A\).`) + S`\pf{\(A\) and \(R\) have the same null space, and \(\vec c\in\operatorname{Null}A\) means \(c_1\vec a_1+\dots+c_n\vec a_n=\vec 0\): the columns of \(A\) satisfy exactly the same linear relations as the columns of \(R\). In \(R\) the pivot columns are distinct standard vectors (independent) and every other column is a combination of them; so the same holds in \(A\).}`,
    fig: F_COLS, w: 0.56,
    body: S`Row operations change the columns themselves, so the RREF's columns usually span a \emph{different} subspace (Example 4); only the \emph{positions} of the pivots carry over. Figure: \(\vec a_3=\vec a_1+\vec a_2\), so \(\vec a_3\) is dropped.` },

  { h: "3. The row-space basis",
    lead: S`Row operations do not change the row space, so \(\operatorname{Row}A=\operatorname{Row}R\). The nonzero rows of \(R\) are independent: each has a leading 1 in a column where every other row has 0, so in any combination equal to \(\vec 0\) each coefficient appears alone in its pivot column and must be 0.`,
    fig: F_ROWS, w: 0.56,
    body: S`Figure: for \(A\) with RREF rows \((1,0,1)\), \((0,1,1)\), the row space is the violet plane; the null space is the perpendicular line through \((-1,-1,1)\).` },

  { h: "4. Rank and the rank–nullity theorem",
    lead: thm("dimensions", S`\(\dim\operatorname{Col}A=\dim\operatorname{Row}A=\operatorname{rank}A\) (so \(\operatorname{rank}A^T=\operatorname{rank}A\)), and \[\operatorname{rank}A+\dim\operatorname{Null}A=n\quad(\text{rank–nullity}).\]`) + S`\pf{Both bases have one vector per pivot. Each of the \(n\) columns is either a pivot column or a free column, and each free column gives one null-space basis vector.}`,
    fig: F_MAT, w: 0.6,
    body: S`\(\dim\operatorname{Null}A\) is called the \textbf{nullity}. Note that \(\operatorname{Col}A\) and \(\operatorname{Row}A\) have the same dimension even though they live in different spaces (\(\mathbb R^m\) and \(\mathbb R^n\)).` },

  { h: "5. What rank says about Ax = b",
    lead: S`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item Consistent for \textbf{every} \(\vec b\in\mathbb R^m\) \(\iff\operatorname{Col}A=\mathbb R^m\iff\operatorname{rank}A=m\).
\item At most one solution \(\iff\operatorname{Null}A=\{\vec 0\}\iff\operatorname{rank}A=n\).
\item Square \(n\times n\): rank \(n\) gives exactly one solution for every \(\vec b\).
\item Since \(\operatorname{rank}A\le\min(m,n)\): wide matrices (\(m\lt n\)) always have nontrivial null spaces; tall ones (\(m\gt n\)) always miss some \(\vec b\).
\end{itemize}`,
    fig: F_FLOW, w: 0.5 },
];

const EXAMPLES = [
  { title: "All three bases", q: S`Find bases and dimensions of \(\operatorname{Null}A\), \(\operatorname{Col}A\), \(\operatorname{Row}A\) for \(A=${am([[1, -1, 0, 2], [2, -2, 1, 5], [-1, 1, 1, -1]], false)}\).`,
    fig: F_MAT,
    steps: [...steps([[1, -1, 0, 2], [2, -2, 1, 5], [-1, 1, 1, -1]], [
      [S`Clear column 1.`, ["R2-2R1", "R3+R1"]],
      [S`Column 2 has no pivot; clear below the pivot of column 3. Column 3 has 0 above it: RREF.`, ["R3-R2"]],
    ], { bar: false, intro: "Row reduce A" }).steps,
      S`Pivots in columns 1, 3. \textbf{Null:} free \(x_2=s\), \(x_4=t\): \(x_1=s-2t\), \(x_3=-t\); basis \(\{(1,1,0,0),(-2,0,-1,1)\}\).`,
      S`\textbf{Col:} columns 1 and 3 of \(A\): \(\{(1,2,-1),(0,1,1)\}\). \textbf{Row:} \(\{(1,-1,0,2),(0,0,1,1)\}\).`,
      S`rank 2, nullity 2: \(2+2=4=n\) ✓.`],
    ans: S`dimensions: Null 2, Col 2, Row 2` },
  { title: "A tall matrix of full column rank", q: S`Find the fundamental subspaces of \(A=${am([[1, 2], [2, 3], [0, 1], [1, 1]], false)}\).`,
    fig: svgT(stairSvg([["1", "0"], ["0", "1"], ["0", "0"], ["0", "0"]], false), 1.8),
    steps: [...steps([[1, 2], [2, 3], [0, 1], [1, 1]], [
      [S`Clear column 1.`, ["R2-2R1", "R4-R1"]],
      [S`Scale the second pivot.`, ["R2*-1"]],
      [S`Clear column 2.`, ["R1-2R2", "R3-R2", "R4+R2"]],
    ], { bar: false, intro: "Row reduce A" }).steps,
      S`Rank 2 \(=n\): \(\operatorname{Null}A=\{\vec 0\}\) (nullity 0). \(\operatorname{Row}A=\mathbb R^2\).`, S`\(\operatorname{Col}A=\operatorname{Span}\{(1,2,0,1),(2,3,1,1)\}\), a plane in \(\mathbb R^4\): \(A\vec x=\vec b\) has at most one solution, but not every \(\vec b\) works.`],
    ans: S`Null \(\{\vec 0\}\); Row \(\mathbb R^2\); Col a 2-dimensional subspace of \(\mathbb R^4\)` },
  { title: "A wide matrix of full row rank", q: S`Find the fundamental subspaces of \(A=${am([[1, 0, 2, 1], [0, 1, -1, 3]], false)}\).`,
    fig: svgT(stairSvg([["1", "0", "*", "*"], ["0", "1", "*", "*"]], false), 3.2),
    steps: [S`\(A\) is already in RREF with pivots in columns 1, 2: rank 2.`, S`\textbf{Null:} \(x_3=s\), \(x_4=t\): \(x_1=-2s-t\), \(x_2=s-3t\); basis \(\{(-2,1,1,0),(-1,-3,0,1)\}\).`, S`\textbf{Col:} \(\{(1,0),(0,1)\}\): \(\operatorname{Col}A=\mathbb R^2\), so \(A\vec x=\vec b\) is consistent for every \(\vec b\). \textbf{Row:} the two rows of \(A\).`, S`\(2+2=4\) ✓.`],
    ans: S`Null 2-dimensional; Col \(=\mathbb R^2\); Row spanned by the two rows` },
  { title: "Why not the RREF's columns", q: S`For \(A=${am([[1, 1, 2], [1, 2, 3], [1, 0, 1]], false)}\), compare \(\operatorname{Col}A\) with the span of the columns of its RREF.`,
    fig: F_COLS,
    steps: [...steps([[1, 1, 2], [1, 2, 3], [1, 0, 1]], [
      [S`Clear column 1.`, ["R2-R1", "R3-R1"]],
      [S`Clear column 2.`, ["R1-R2", "R3+R2"]],
    ], { bar: false, intro: "Row reduce A" }).steps,
      S`Pivot columns 1, 2: \(\operatorname{Col}A=\operatorname{Span}\{(1,1,1),(1,2,0)\}\), and \(\vec a_3=\vec a_1+\vec a_2\) (as column 3 of the RREF says).`, S`The RREF's columns span \(\{x_3=0\}\), which does not contain \(\vec a_1=(1,1,1)\): a different plane.`],
    ans: S`\(\operatorname{Col}A=\operatorname{Span}\{(1,1,1),(1,2,0)\}\ne\operatorname{Col}R\)` },
  { title: "Rank–nullity without row reducing", q: S`\(A\) is \(6\times4\) and \(\operatorname{Null}A=\operatorname{Span}\{(1,0,1,1)\}\). Find \(\operatorname{rank}A\) and the dimensions of the other two subspaces. Is \(A\vec x=\vec b\) consistent for every \(\vec b\)?`,
    fig: lineFig([1, 0, 1], { label: "Null A (first 3 entries shown)" }),
    steps: [S`Nullity 1, so \(\operatorname{rank}A=4-1=3\).`, S`\(\dim\operatorname{Col}A=\dim\operatorname{Row}A=3\).`, S`\(\operatorname{Col}A\) is a 3-dimensional subspace of \(\mathbb R^6\), not all of it: some \(\vec b\) give no solution; and when a solution exists it is never unique (nullity 1).`],
    ans: S`rank 3; Col and Row dimension 3; not consistent for every \(\vec b\)` },
  { title: "Rank one", q: S`Find the fundamental subspaces of \(A=${am([[2, 4, -2], [1, 2, -1], [3, 6, -3]], false)}\) and check that the null space is perpendicular to the row space.`,
    fig: planeFig([-2, 1, 0], [1, 0, 1], { lu: "(−2, 1, 0)", lv: "(1, 0, 1)", line: [1, 2, -1] }),
    steps: [...steps([[2, 4, -2], [1, 2, -1], [3, 6, -3]], [
      [S`Swap for a leading 1.`, ["R1<->R2"]],
      [S`Clear column 1.`, ["R2-2R1", "R3-3R1"]],
    ], { bar: false, intro: "Row reduce A" }).steps,
      S`Rank 1. \textbf{Null:} \(x_1=-2x_2+x_3\): basis \(\{(-2,1,0),(1,0,1)\}\) (a plane). \textbf{Col:} \(\{(2,1,3)\}\). \textbf{Row:} \(\{(1,2,-1)\}\) (a line).`, S`\((1,2,-1)\cdot(-2,1,0)=0\) ✓, \((1,2,-1)\cdot(1,0,1)=0\) ✓: the row-space line is the normal of the null-space plane (red line in the figure).`],
    ans: S`rank 1, nullity 2` },
  { title: "rank Aᵀ = rank A", q: S`Find the rank of \(A=${am([[1, 0, 1], [0, 1, 1], [1, 1, 2], [2, 1, 3]], false)}\) and of \(A^T\).`,
    fig: svgT(matSvg([[1, 0, 1], [0, 1, 1], [1, 1, 2], [2, 1, 3]], [[0, 0], [1, 1]], false), 2.6),
    steps: [...steps([[1, 0, 1], [0, 1, 1], [1, 1, 2], [2, 1, 3]], [
      [S`Clear column 1.`, ["R3-R1", "R4-2R1"]],
      [S`Clear column 2.`, ["R3-R2", "R4-R2"]],
    ], { bar: false, intro: "Row reduce A" }).steps,
      ...steps([[1, 0, 1, 2], [0, 1, 1, 1], [1, 1, 2, 3]], [
        [S`Clear column 1.`, ["R3-R1"]],
        [S`Clear column 2.`, ["R3-R2"]],
      ], { bar: false, intro: S`Row reduce \(A^T\)` }).steps,
      S`Both have rank 2, as the theorem says (\(\dim\operatorname{Row}A=\dim\operatorname{Col}A\)).`],
    ans: S`\(\operatorname{rank}A=\operatorname{rank}A^T=2\)` },
  { title: "A parameter and Ax = b", q: S`For \(A=${am([[1, 2, 1], [0, 1, "k"], [1, 3, 2]], false)}\), find \(\operatorname{rank}A\) and \(\operatorname{Null}A\) for every \(k\); when is \(A\vec x=\vec b\) uniquely solvable for every \(\vec b\)?`,
    fig: lineFig([1, -1, 1], { label: "Null A when k = 1" }),
    steps: [S`\(R_3\to R_3-R_1\): \[${am([[1, 2, 1], [0, 1, "k"], [1, 3, 2]], false)}\longrightarrow${am([[1, 2, 1], [0, 1, "k"], [0, 1, 1]], false)}\]`, S`\(R_3\to R_3-R_2\): \[\longrightarrow\ ${am([[1, 2, 1], [0, 1, "k"], [0, 0, "1-k"]], false)}\]`, S`\(k\ne1\): rank 3, \(\operatorname{Null}A=\{\vec 0\}\), unique solution for every \(\vec b\).`, S`\(k=1\): rank 2; \(x_3=t\), \(x_2=-t\), \(x_1=-2x_2-x_3=t\): \(\operatorname{Null}A=\operatorname{Span}\{(1,-1,1)\}\).`],
    ans: S`\(k\ne1\): rank 3, unique solutions; \(k=1\): rank 2, nullity 1` },
  { title: "Building a matrix", q: S`Find a \(3\times3\) matrix with \(\operatorname{Col}A=\operatorname{Span}\{(1,0,1)\}\) and \(\operatorname{Null}A\) the plane \(x_1+x_2+x_3=0\).`,
    fig: planeFig([1, -1, 0], [1, 0, -1], { lu: "", lv: "", more: [[[1, 0, 1], "column direction (1, 0, 1)", "red"]] }),
    steps: [S`Rank–nullity: nullity 2, so rank 1 --- every row is a multiple of one row, and every column a multiple of \((1,0,1)\).`, S`The null space must be \(\{\vec x:(1,1,1)\cdot\vec x=0\}\), so take each row a multiple of \((1,1,1)\), with multipliers \(1,0,1\) (from the column direction): \[A=${am([[1, 1, 1], [0, 0, 0], [1, 1, 1]], false)}.\]`, S`Check: every column is \((1,0,1)\); \(A\vec x=(x_1+x_2+x_3)(1,0,1)\), which is \(\vec 0\) exactly on the plane.`],
    ans: S`\(${am([[1, 1, 1], [0, 0, 0], [1, 1, 1]], false)}\)` },
];

const PROBLEMS = [
  { level: 1, q: S`The RREF of a \(3\times4\) matrix \(A\) is \(${am([[1, 0, 3, 0], [0, 1, -2, 0], [0, 0, 0, 1]], false)}\). Find \(\operatorname{rank}A\) and the nullity.`, ans: S`rank 3, nullity 1` },
  { level: 1, q: S`\(A\) is \(5\times7\) with rank 5. Find the nullity. Is \(A\vec x=\vec b\) consistent for every \(\vec b\)?`, ans: S`nullity 2; yes (rank \(=m=5\))` },
  { level: 1, q: S`Give a basis of \(\operatorname{Row}A\) for the matrix of Problem 1.`, ans: S`\(\{(1,0,3,0),(0,1,-2,0),(0,0,0,1)\}\)` },
  { level: 2, q: S`Find bases of the three fundamental subspaces of \(A=${am([[1, 2, 1], [2, 4, 3], [1, 2, 2]], false)}\).`, ans: S`Null \(\{(-2,1,0)\}\); Col \(\{(1,2,1),(1,3,2)\}\); Row \(\{(1,2,0),(0,0,1)\}\)`,
    fig: F_STAIR,
    sol: [...steps([[1, 2, 1], [2, 4, 3], [1, 2, 2]], [
      [S`Clear column 1.`, ["R2-2R1", "R3-R1"]],
      [S`Clear column 3 below and above its pivot.`, ["R3-R2", "R1-R2"]],
    ], { bar: false, intro: "Row reduce A" }).steps, S`Pivots in columns 1, 3. Null: \(x_2=t\), \(x_1=-2t\), \(x_3=0\). Col: columns 1, 3 of \(A\). Row: nonzero rows of the RREF.`] },
  { level: 2, q: S`\(A\) is \(4\times5\) with rank 4. Find the nullity and decide whether \(A\vec x=\vec b\) is always consistent.`, ans: S`nullity 1; always consistent`,
    sol: [S`Nullity \(5-4=1\). \(\dim\operatorname{Col}A=4=m\), so \(\operatorname{Col}A=\mathbb R^4\): consistent for every \(\vec b\) (with infinitely many solutions).`] },
  { level: 2, q: S`Find a basis of \(\operatorname{Col}A\) for \(A=${am([[1, 3, 0], [2, 6, 1], [-1, -3, 2]], false)}\).`, ans: S`\(\{(1,2,-1),(0,1,2)\}\)`,
    fig: planeFig([1, 2, -1], [0, 1, 2], { lu: "a₁", lv: "a₃", more: [[[3, 6, -3], "a₂ = 3a₁", "red"]], len: 4 }),
    sol: [...steps([[1, 3, 0], [2, 6, 1], [-1, -3, 2]], [
      [S`Clear column 1.`, ["R2-2R1", "R3+R1"]],
      [S`Clear below the pivot of column 3.`, ["R3-2R2"]],
    ], { bar: false, intro: "Row reduce A" }).steps, S`Pivots in columns 1 and 3: \(\{\vec a_1,\vec a_3\}=\{(1,2,-1),(0,1,2)\}\).`] },
  { level: 2, q: S`Find a basis of \(\operatorname{Null}A\) for \(A=${am([[1, 1, 0, 2], [0, 1, 1, 1]], false)}\).`, ans: S`\(\{(1,-1,1,0),(-1,-1,0,1)\}\)`,
    sol: [...steps([[1, 1, 0, 2], [0, 1, 1, 1]], [[S`Clear above the second pivot.`, ["R1-R2"]]], { bar: false, intro: "Row reduce A" }).steps, S`\(x_3=s\), \(x_4=t\): \(x_1=s-t\), \(x_2=-s-t\). Check \((-1,-1,0,1)\): \(-1-1+0+2=0\), \(-1+0+1=0\) ✓.`] },
  { level: 2, q: S`Verify rank–nullity for the matrix of Problem 4.`, ans: S`\(2+1=3\)`, fig: svgT(stairSvg([["1", "*", "0"], ["0", "0", "1"], ["0", "0", "0"]], false), 2.4),
    sol: [S`Rank 2 (two pivots), nullity 1 (one free variable): \(2+1=3=n\).`] },
  { level: 3, space: 5, q: S`Prove that the nonzero rows of a matrix in RREF are linearly independent.`, ans: S`look at the pivot column of each row`,
    sol: [S`Suppose \(c_1\vec r_1+\dots+c_k\vec r_k=\vec 0\). In the pivot column of \(\vec r_i\), row \(i\) has a 1 and every other row has 0.`, S`So that entry of the combination is \(c_i\cdot1=0\): every \(c_i=0\).`] },
  { level: 3, space: 5, q: S`Prove that \(\operatorname{rank}A\le\min(m,n)\) for an \(m\times n\) matrix.`, ans: S`each pivot needs its own row and its own column`,
    sol: [S`Pivots lie in different rows (at most \(m\)) and different columns (at most \(n\)).`] },
  { level: 3, space: 5, q: S`For which \(k\) does \(${am([[1, 2, 3], [2, 4, "k"]], false)}\) have nullity 2?`, ans: S`\(k=6\)`,
    sol: [S`\(R_2\to R_2-2R_1\): second row \((0,0,k-6)\).`, S`Nullity 2 means rank 1: \(k-6=0\).`] },
  { level: 3, space: 5, q: S`Prove: if \(A\) is \(n\times n\) and \(\operatorname{Null}A=\{\vec 0\}\), then \(\operatorname{Col}A=\mathbb R^n\).`, ans: S`rank–nullity gives rank \(n\)`,
    sol: [S`Nullity 0, so \(\operatorname{rank}A=n\). Then \(\operatorname{Col}A\) is an \(n\)-dimensional subspace of \(\mathbb R^n\), hence \(\mathbb R^n\).`] },
  { level: 3, space: 5, q: S`Find a \(2\times4\) matrix of rank 2 whose null space contains \((1,1,1,1)\). What is its nullity?`, ans: S`e.g. rows \((1,-1,0,0)\), \((0,0,1,-1)\); nullity 2`,
    fig: vecs3([[[1, -1, 0], "row 1 (first 3 entries)"], [[1, 1, 1], "(1, 1, 1, ·)", "green"]]),
    sol: [S`Rows orthogonal to \((1,1,1,1)\) and independent: \((1,-1,0,0)\) and \((0,0,1,-1)\).`, S`Check: \(1-1=0\), \(1-1=0\) ✓. Nullity \(4-2=2\).`] },
];

export const WS = {
  code: "5.7",
  title: "Bases for the Fundamental Subspaces and the Rank–Nullity Theorem",
  bigideas: S`One RREF of \(A\) gives all three bases: free variables give \(\operatorname{Null}A\), the pivot positions select the columns \emph{of \(A\)} that form a basis of \(\operatorname{Col}A\), and the nonzero rows of the RREF form a basis of \(\operatorname{Row}A\). Counting gives \(\dim\operatorname{Col}A=\dim\operatorname{Row}A=\operatorname{rank}A\) and the \textbf{rank–nullity theorem} \(\operatorname{rank}A+\dim\operatorname{Null}A=n\), which tells at a glance when \(A\vec x=\vec b\) is always solvable and when solutions are unique.`,
  goals: ["Find bases and dimensions of \\(\\operatorname{Null}A\\), \\(\\operatorname{Col}A\\), \\(\\operatorname{Row}A\\) from one RREF.", "Explain why the column-space basis must come from the original matrix.", "Prove that the nonzero rows of an RREF are independent and that \\(\\operatorname{rank}A^T=\\operatorname{rank}A\\).", "State, prove and apply the rank–nullity theorem.", "Use rank to decide consistency and uniqueness for \\(A\\vec x=\\vec b\\)."],
  curriculum: "The fundamental subspaces — bases, dimensions and rank–nullity",
  vocab: [["Rank", "number of pivots = \\(\\dim\\operatorname{Col}A=\\dim\\operatorname{Row}A\\)"], ["Nullity", "\\(\\dim\\operatorname{Null}A\\) = number of free variables"], ["Rank–nullity", "\\(\\operatorname{rank}A+\\operatorname{nullity}A=n\\)"], ["Pivot column", "column of \\(A\\) in a pivot position"], ["Full rank", "\\(\\operatorname{rank}A=\\min(m,n)\\)"]],
  hook: S`A \(3\times5\) matrix has rank 2. Without seeing it, how many free variables does \(A\vec x=\vec 0\) have? Can \(A\vec x=\vec b\) be consistent for every \(\vec b\in\mathbb R^3\)?`,
  concepts: NOTES,
  summary: [
    S`Null: one basis vector per free variable of the RREF.`,
    S`Col: the pivot columns \emph{of \(A\)}. Row: the nonzero rows \emph{of the RREF}.`,
    S`\(\dim\operatorname{Col}A=\dim\operatorname{Row}A=\operatorname{rank}A=\operatorname{rank}A^T\).`,
    S`\(\operatorname{rank}A+\operatorname{nullity}A=n\).`,
    S`Always consistent \(\iff\operatorname{rank}A=m\); unique \(\iff\operatorname{rank}A=n\).`,
  ],
  tips: ["Column basis from \\(A\\), row basis from the RREF.", "Rank–nullity uses \\(n\\), the number of columns.", "Check null vectors with \\(A\\vec x=\\vec 0\\).", "A null-space basis vector has a 1 in its own free position.", "Nullity 0 means \\(\\operatorname{Null}A=\\{\\vec 0\\}\\), with the empty basis."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

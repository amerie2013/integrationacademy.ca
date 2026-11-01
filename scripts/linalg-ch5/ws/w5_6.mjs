// LINALG1 Worksheet 5.6 — Null Space, Column Space and Row Space
// Self-contained: complete notes (Ax as a combination of columns, the null space, the column space and consistency,
// the row space and row operations, null space ⊥ row space), 9 worked examples with figures, 13 problems with full
// solutions.
import { S, def, thm } from "./wkit.mjs";
import { svgT } from "./figT.mjs";
import { stairSvg } from "./fig2.mjs";
import { planeFig, lineFig, vecs3, vecs2 } from "./fig5.mjs";
import { am, steps } from "../bank/la.mjs";

const F_COMBO = vecs2([[[2, 1], "a₁", "blue"], [[-1, 2], "a₂", "red"], [[4, 2], "", "blue", null, true], [[3, 4], "Ax", "green"], [[3, 4], "", "red", [4, 2], true]], { xmin: -2, xmax: 5, ymin: -1, ymax: 5 });
const F_NULL = lineFig([1, 1, 1], { label: "Null A" });
const F_COL = planeFig([1, 2, -1], [0, 1, 1], { lu: "a₁", lv: "a₂", more: [[[2, 5, -1], "(2, 5, −1) ∈ Col A", "green"], [[2, 5, 1], "(2, 5, 1) ∉ Col A", "amber"]], len: 4 });
const F_ROW = planeFig([1, 2, 1], [0, 1, 1], { lu: "row (1, 2, 1)", lv: "row (0, 1, 1)", more: [[[2, 5, 3], "old row (2, 5, 3)", "green"]], len: 3.6, fill: "#ede9fe", edge: "violet" });
const F_PERP = planeFig([1, 1, 1], [1, -1, 0], { lu: "row 1", lv: "row 2", line: [1, 1, -2], fill: "#ede9fe", edge: "violet" });

const NOTES = [
  { h: "1. The matrix–vector product",
    lead: S`${def("matrix–vector product", S`For an \(m\times n\) matrix \(A\) with columns \(\vec a_1,\dots,\vec a_n\) and \(\vec x\in\mathbb R^n\): \(A\vec x=x_1\vec a_1+\dots+x_n\vec a_n\in\mathbb R^m\). Entry \(i\) of \(A\vec x\) is (row \(i\) of \(A\))\(\cdot\vec x\).`)}
A system \([A\mid\vec b]\) is the single equation \(A\vec x=\vec b\). The product is \textbf{linear}: \(A(\vec x+\vec y)=A\vec x+A\vec y\), \(A(c\vec x)=cA\vec x\).`,
    fig: F_COMBO, w: 0.58,
    body: S`Figure: with columns \(\vec a_1=(2,1)\), \(\vec a_2=(-1,2)\) and \(\vec x=(2,1)\), \(A\vec x=2\vec a_1+\vec a_2=(3,4)\).` },

  { h: "2. The null space",
    lead: S`${def("null space", S`\(\operatorname{Null}A=\{\vec x\in\mathbb R^n: A\vec x=\vec 0\}\), the solution set of the homogeneous system. It is a subspace of \(\mathbb R^n\).`)}
\textbf{Membership:} just compute \(A\vec x\). \textbf{Description:} row reduce \(A\), solve, and split by parameter (Worksheet 5.2).`,
    fig: F_NULL, w: 0.6,
    body: S`\pf{\(A\vec 0=\vec 0\); if \(A\vec x=A\vec y=\vec 0\) then \(A(\vec x+\vec y)=\vec 0\) and \(A(c\vec x)=c\vec 0=\vec 0\).} The null space of \(${am([[1, 1, -2], [2, -1, -1]], false)}\) is the line spanned by \((1,1,1)\) (figure, Example 2).` },

  { h: "3. The column space and consistency",
    lead: S`${def("column space", S`\(\operatorname{Col}A=\operatorname{Span}\{\vec a_1,\dots,\vec a_n\}=\{A\vec x:\vec x\in\mathbb R^n\}\), a subspace of \(\mathbb R^m\).`)}
${thm("consistency", S`\(A\vec x=\vec b\) is consistent \(\iff\vec b\in\operatorname{Col}A\).`)}`,
    fig: F_COL, w: 0.55,
    body: S`\pf{A solution \(\vec x\) is exactly a list of coefficients with \(x_1\vec a_1+\dots+x_n\vec a_n=\vec b\).} \textbf{Membership:} row reduce \([A\mid\vec b]\). \textbf{Description by equations:} reduce with a general \(\vec b\) (Worksheet 5.2, Note 5).` },

  { h: "4. The row space and row operations",
    lead: S`${def("row space", S`\(\operatorname{Row}A\) is the span of the rows of \(A\), viewed as vectors in \(\mathbb R^n\); it equals \(\operatorname{Col}A^T\).`)}
${thm("row operations", S`Elementary row operations do not change \(\operatorname{Row}A\) or \(\operatorname{Null}A\) (they usually change \(\operatorname{Col}A\)).`)}`,
    fig: F_ROW, w: 0.55,
    body: S`\pf{Each new row is a combination of old rows, and each operation can be undone, so each row space contains the other. Row operations keep the solutions of \(A\vec x=\vec 0\).} \textbf{Membership} \(\vec y\in\operatorname{Row}A\): row reduce \([A^T\mid\vec y]\). Figure: \(R_2\to R_2-2R_1\) replaces \((2,5,3)\) by \((0,1,1)\) in the same plane.` },

  { h: "5. The null space is perpendicular to the row space",
    lead: thm("Null A ⊥ Row A", S`Every \(\vec x\in\operatorname{Null}A\) is orthogonal to every vector of \(\operatorname{Row}A\), and \(\operatorname{Null}A\cap\operatorname{Row}A=\{\vec 0\}\).`) + S`\pf{\(A\vec x=\vec 0\) says each row has dot product 0 with \(\vec x\); a combination of rows then has dot product 0 too. A vector in both is orthogonal to itself: \(\|\vec x\|^2=0\).}`,
    fig: F_PERP, w: 0.56,
    body: S`Where they live: \(\operatorname{Null}A,\ \operatorname{Row}A\subseteq\mathbb R^n\) (one entry per column of \(A\)); \(\operatorname{Col}A\subseteq\mathbb R^m\) (one entry per row). Figure: rows \((1,1,1)\), \((1,-1,0)\) span a plane; the null space is the perpendicular line through \((1,1,-2)\).` },
];

const EXAMPLES = [
  { title: "Computing Ax", q: S`Compute \(A\vec x\) for \(A=${am([[2, -1], [1, 3], [0, 4]], false)}\) and \(\vec x=(3,2)\), as a combination of columns.`,
    fig: vecs3([[[2, 1, 0], "a₁"], [[-1, 3, 4], "a₂"], [[4, 9, 8], "Ax = 3a₁ + 2a₂", "green"]], { len: 6 }),
    steps: [S`\(A\vec x=3${"\\begin{bmatrix}2\\\\1\\\\0\\end{bmatrix}"}+2${"\\begin{bmatrix}-1\\\\3\\\\4\\end{bmatrix}"}=${"\\begin{bmatrix}6-2\\\\3+6\\\\0+8\\end{bmatrix}"}=${"\\begin{bmatrix}4\\\\9\\\\8\\end{bmatrix}"}\).`, S`Row by row: \((2,-1)\cdot(3,2)=4\), \((1,3)\cdot(3,2)=9\), \((0,4)\cdot(3,2)=8\) ✓.`],
    ans: S`\(A\vec x=(4,9,8)\)` },
  { title: "Null space membership and description", q: S`For \(A=${am([[1, 1, -2], [2, -1, -1]], false)}\): is \((1,1,1)\in\operatorname{Null}A\)? Is \((2,0,1)\)? Describe \(\operatorname{Null}A\).`,
    fig: F_NULL,
    steps: [S`\(A(1,1,1)=(1+1-2,\ 2-1-1)=(0,0)\): yes. \(A(2,0,1)=(2+0-2,\ 4-0-1)=(0,3)\): no.`,
      ...steps([[1, 1, -2], [2, -1, -1]], [
        [S`Clear column 1.`, ["R2-2R1"]],
        [S`Make the second pivot 1 and clear above it.`, ["R2*-1/3", "R1-R2"]],
      ], { bar: false, intro: "Row reduce A" }).steps,
      S`\(x_3=t\): \(x_1=t\), \(x_2=t\). \(\operatorname{Null}A=\operatorname{Span}\{(1,1,1)\}\), a line.`],
    ans: S`\((1,1,1)\in\operatorname{Null}A\), \((2,0,1)\notin\); \(\operatorname{Null}A=\operatorname{Span}\{(1,1,1)\}\)` },
  { title: "A null space in ℝ⁴", q: S`Find a spanning set for \(\operatorname{Null}A\), \(A=${am([[1, 2, -1, 3], [2, 4, 1, 0]], false)}\).`,
    fig: svgT(stairSvg([["1", "*", "0", "*"], ["0", "0", "1", "*"]], false), 3.2),
    steps: [...steps([[1, 2, -1, 3], [2, 4, 1, 0]], [
      [S`Clear column 1.`, ["R2-2R1"]],
      [S`Column 2 has no pivot; scale the pivot of column 3,`, ["R2*1/3"]],
      [S`and clear above it.`, ["R1+R2"]],
    ], { bar: false, intro: "Row reduce A" }).steps,
      S`Free \(x_2=s\), \(x_4=t\): \(x_1=-2s-t\), \(x_3=2t\). \(\vec x=s(-2,1,0,0)+t(-1,0,2,1)\).`, S`Check \((-1,0,2,1)\): \(-1+0-2+3=0\) ✓, \(-2+0+2+0=0\) ✓.`],
    ans: S`\(\operatorname{Span}\{(-2,1,0,0),(-1,0,2,1)\}\)` },
  { title: "Column space membership", q: S`For \(A=${am([[1, 0], [2, 1], [-1, 1]], false)}\), decide whether \((2,5,-1)\) and \((2,5,1)\) are in \(\operatorname{Col}A\).`,
    fig: F_COL,
    steps: [...steps([[1, 0, 2], [2, 1, 5], [-1, 1, -1]], [
      [S`For \((2,5,-1)\): clear column 1.`, ["R2-2R1", "R3+R1"]],
      [S`Clear column 2.`, ["R3-R2"]],
    ], { intro: S`\([A\mid(2,5,-1)]\)` }).steps,
      S`Consistent: \(x_2=1\), \(x_1=2\); \(2\vec a_1+\vec a_2=(2,5,-1)\) ✓ --- in \(\operatorname{Col}A\).`,
      ...steps([[1, 0, 2], [2, 1, 5], [-1, 1, 1]], [
        [S`For \((2,5,1)\): the same operations.`, ["R2-2R1", "R3+R1"]],
        [S`Clear column 2.`, ["R3-R2"]],
      ], { intro: S`\([A\mid(2,5,1)]\)` }).steps,
      S`The last row is \([\,0\ \ 0\mid2\,]\): inconsistent --- not in \(\operatorname{Col}A\).`],
    ans: S`\((2,5,-1)\in\operatorname{Col}A\); \((2,5,1)\notin\operatorname{Col}A\)` },
  { title: "An equation for the column space", q: S`Describe \(\operatorname{Col}A\) for the matrix of Example 4 by an equation.`,
    fig: F_COL,
    steps: [S`Reduce \([A\mid\vec b]\) with a general \(\vec b\): \[${am([[1, 0, "b_1"], [2, 1, "b_2"], [-1, 1, "b_3"]])}\]`,
      S`\(R_2\to R_2-2R_1\), \(R_3\to R_3+R_1\): \[\longrightarrow\ ${am([[1, 0, "b_1"], [0, 1, "b_2-2b_1"], [0, 1, "b_3+b_1"]])}\]`,
      S`\(R_3\to R_3-R_2\): the last entry is \(b_3+b_1-(b_2-2b_1)=3b_1-b_2+b_3\). \[\longrightarrow\ ${am([[1, 0, "b_1"], [0, 1, "b_2-2b_1"], [0, 0, "3b_1-b_2+b_3"]])}\]`,
      S`\(\operatorname{Col}A=\{\vec b: 3b_1-b_2+b_3=0\}\), a plane. Check: \((2,5,-1)\): \(6-5-1=0\) ✓; \((2,5,1)\): \(6-5+1=2\ne0\) ✓.`],
    ans: S`\(3b_1-b_2+b_3=0\)` },
  { title: "Row space membership", q: S`Is \(\vec y=(2,-3,-8)\) in \(\operatorname{Row}A\) for \(A=${am([[1, 0, -1], [0, 1, 2]], false)}\)?`,
    fig: planeFig([1, 0, -1], [0, 1, 2], { lu: "row 1", lv: "row 2", more: [[[2, -3, -8], "y", "green"]], len: 5, fill: "#ede9fe", edge: "violet" }),
    steps: [...steps([[1, 0, 2], [0, 1, -3], [-1, 2, -8]], [
      [S`The rows of \(A\) are the columns. Clear column 1.`, ["R3+R1"]],
      [S`Clear column 2.`, ["R3-2R2"]],
    ], { intro: S`\([A^T\mid\vec y]\)` }).steps,
      S`Consistent: \(c_1=2\), \(c_2=-3\); \(2(1,0,-1)-3(0,1,2)=(2,-3,-8)\) ✓.`],
    ans: S`yes: \(\vec y=2\,\text{row}_1-3\,\text{row}_2\)` },
  { title: "A row operation keeps the row space", q: S`Show that \(A=${am([[1, 2, 1], [2, 5, 3]], false)}\) and the matrix after \(R_2\to R_2-2R_1\) have the same row space.`,
    fig: F_ROW,
    steps: [...steps([[1, 2, 1], [2, 5, 3]], [[S`Apply the operation.`, ["R2-2R1"]]], { bar: false, intro: "Start from A" }).steps,
      S`New rows are combinations of old ones: \((0,1,1)=(2,5,3)-2(1,2,1)\).`, S`Old rows are combinations of new ones: \((2,5,3)=2(1,2,1)+(0,1,1)\). So the spans coincide.`],
    ans: S`both row spaces are \(\operatorname{Span}\{(1,2,1),(0,1,1)\}\)` },
  { title: "Null space ⊥ row space", q: S`Find \(\operatorname{Null}A\) for \(A=${am([[1, 1, 1], [1, -1, 0]], false)}\) and check that it is perpendicular to the rows.`,
    fig: F_PERP,
    steps: [...steps([[1, 1, 1], [1, -1, 0]], [
      [S`Clear column 1.`, ["R2-R1"]],
      [S`Scale and clear above.`, ["R2*-1/2", "R1-R2"]],
    ], { bar: false, intro: "Row reduce A" }).steps,
      S`\(x_3=t\): \(x_1=-\tfrac12t\), \(x_2=-\tfrac12t\); with \(t=-2\): \((1,1,-2)\). \(\operatorname{Null}A=\operatorname{Span}\{(1,1,-2)\}\).`,
      S`\((1,1,-2)\cdot(1,1,1)=0\) ✓ and \((1,1,-2)\cdot(1,-1,0)=0\) ✓. (Also \((1,1,1)\times(1,-1,0)=(1,1,-2)\).)`],
    ans: S`\(\operatorname{Span}\{(1,1,-2)\}\), perpendicular to both rows` },
  { title: "Consistent for every b?", q: S`For which \(k\) is \(A\vec x=\vec b\) consistent for every \(\vec b\in\mathbb R^2\), where \(A=${am([[1, 2], [2, "k"]], false)}\)?`,
    fig: vecs2([[[1, 2], "a₁", "blue"], [[2, 4], "a₂ when k = 4", "red", null, true]], { xmin: -1, xmax: 3, ymin: -1, ymax: 5 }),
    steps: [S`\(R_2\to R_2-2R_1\): \[${am([[1, 2], [2, "k"]], false)}\ \longrightarrow\ ${am([[1, 2], [0, "k-4"]], false)}\]`, S`\(k\ne4\): two pivots, the columns span \(\mathbb R^2\), so \(\operatorname{Col}A=\mathbb R^2\): consistent for every \(\vec b\).`, S`\(k=4\): \(\vec a_2=2\vec a_1\), \(\operatorname{Col}A\) is the line through \((1,2)\); \(\vec b=(1,0)\) is not on it.`],
    ans: S`\(k\ne4\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Compute \(A\vec x\) for \(A=${am([[1, 2, 3], [0, 1, -1]], false)}\), \(\vec x=(1,1,1)\).`, ans: S`\((6,0)\)` },
  { level: 1, q: S`\(A\) is \(4\times6\). In which \(\mathbb R^k\) do \(\operatorname{Null}A\), \(\operatorname{Col}A\), \(\operatorname{Row}A\) lie?`, ans: S`\(\mathbb R^6\), \(\mathbb R^4\), \(\mathbb R^6\)` },
  { level: 1, q: S`Is \((3,-1)\) in the null space of \(${am([[1, 3], [2, 6]], false)}\)?`, ans: S`yes: \(3-3=0\), \(6-6=0\)` },
  { level: 2, q: S`Find \(\operatorname{Null}A\) for \(A=${am([[1, -1, 1], [2, -1, 3]], false)}\).`, ans: S`\(\operatorname{Span}\{(-2,-1,1)\}\)`,
    fig: lineFig([-2, -1, 1], { label: "(−2, −1, 1)" }),
    sol: [...steps([[1, -1, 1], [2, -1, 3]], [
      [S`Clear column 1.`, ["R2-2R1"]],
      [S`Clear above the second pivot.`, ["R1+R2"]],
    ], { bar: false, intro: "Row reduce A" }).steps, S`\(x_3=t\): \(x_1=-2t\), \(x_2=-t\). Check: \(-2+1+1=0\), \(-4+1+3=0\) ✓.`] },
  { level: 2, q: S`Is \((4,3,1)\) in the column space of \(${am([[1, 1], [1, 0], [0, 1]], false)}\)?`, ans: S`yes: \(3\vec a_1+\vec a_2\)`,
    fig: planeFig([1, 1, 0], [1, 0, 1], { lu: "a₁", lv: "a₂", more: [[[4, 3, 1], "(4, 3, 1)", "green"]], len: 4.5 }),
    sol: [...steps([[1, 1, 4], [1, 0, 3], [0, 1, 1]], [
      [S`Clear column 1.`, ["R2-R1"]],
      [S`Clear column 2.`, ["R3+R2"]],
    ]).steps, S`Consistent: \(x_2=1\), \(x_1=3\): \(3(1,1,0)+(1,0,1)=(4,3,1)\) ✓.`] },
  { level: 2, q: S`Is \((1,1,1)\) in the row space of \(${am([[1, 2, 3], [0, 1, 2]], false)}\)?`, ans: S`yes: \(\text{row}_1-\text{row}_2\)`,
    sol: [S`\(c_1(1,2,3)+c_2(0,1,2)=(c_1,\ 2c_1+c_2,\ 3c_1+2c_2)\). First entry: \(c_1=1\); second: \(c_2=-1\); third: \(3-2=1\) ✓.`] },
  { level: 2, q: S`For which \(h\) is \((1,h,2)\) in the column space of \(${am([[1, 0], [1, 1], [0, 1]], false)}\)?`, ans: S`\(h=3\)`,
    sol: [S`\(a(1,1,0)+b(0,1,1)=(a,\ a+b,\ b)\): \(a=1\), \(b=2\), so \(h=3\).`] },
  { level: 2, q: S`Find an equation describing the column space of \(${am([[1, 1], [0, 1], [1, 2]], false)}\).`, ans: S`\(-b_1-b_2+b_3=0\)`,
    fig: planeFig([1, 0, 1], [1, 1, 2], { lu: "a₁", lv: "a₂", more: [[[-1, -1, 1], "normal", "red"]], len: 3 }),
    sol: [S`\(R_3\to R_3-R_1\) then \(R_3\to R_3-R_2\) on \([A\mid\vec b]\): last row \((0,\ 0\mid b_3-b_1-b_2)\).`, S`So \(\operatorname{Col}A=\{\vec b: -b_1-b_2+b_3=0\}\). Cross check: \((1,0,1)\times(1,1,2)=(-1,-1,1)\) ✓.`] },
  { level: 3, space: 5, q: S`Prove directly that \(\operatorname{Null}A\) is a subspace of \(\mathbb R^n\).`, ans: S`\(A\vec 0=\vec 0\); linearity of \(A\vec x\)`,
    sol: [S`\(A\vec 0=\vec 0\). If \(A\vec x=A\vec y=\vec 0\): \(A(\vec x+\vec y)=A\vec x+A\vec y=\vec 0\), \(A(c\vec x)=cA\vec x=\vec 0\).`] },
  { level: 3, space: 5, q: S`Prove that \(\{A\vec x:\vec x\in\mathbb R^n\}=\operatorname{Span}\{\vec a_1,\dots,\vec a_n\}\).`, ans: S`\(A\vec x=\sum x_j\vec a_j\), and every combination has this form`,
    sol: [S`\(A\vec x=x_1\vec a_1+\dots+x_n\vec a_n\) is a combination of the columns; conversely \(c_1\vec a_1+\dots+c_n\vec a_n=A(c_1,\dots,c_n)\).`] },
  { level: 3, space: 5, q: S`Prove: \(A\vec x=\vec b\) has a solution for every \(\vec b\in\mathbb R^m\) if and only if the columns of \(A\) span \(\mathbb R^m\).`, ans: S`both say \(\operatorname{Col}A=\mathbb R^m\)`,
    sol: [S`\(A\vec x=\vec b\) consistent \(\iff\vec b\in\operatorname{Col}A\). So "consistent for all \(\vec b\)" \(\iff\operatorname{Col}A=\mathbb R^m\iff\) the columns span \(\mathbb R^m\).`] },
  { level: 3, space: 5, q: S`Give a \(2\times2\) example showing that a row operation can change the column space, and check that the null space did not change.`, ans: S`e.g. \(${am([[1, 1], [1, 1]], false)}\to${am([[1, 1], [0, 0]], false)}\)`,
    sol: [S`\(A=${am([[1, 1], [1, 1]], false)}\): \(\operatorname{Col}A=\operatorname{Span}\{(1,1)\}\). After \(R_2\to R_2-R_1\): \(${am([[1, 1], [0, 0]], false)}\), column space \(\operatorname{Span}\{(1,0)\}\) --- a different line.`, S`Null spaces: both are \(\{x_1+x_2=0\}=\operatorname{Span}\{(1,-1)\}\).`] },
  { level: 3, space: 5, q: S`Find a \(2\times3\) matrix \(A\) with \(\operatorname{Null}A=\operatorname{Span}\{(1,1,1)\}\).`, ans: S`e.g. rows \((1,-1,0)\) and \((0,1,-1)\)`,
    fig: lineFig([1, 1, 1], { label: "(1, 1, 1)" }),
    sol: [S`The rows must be orthogonal to \((1,1,1)\) and independent (rank 2, so nullity 1). Take \((1,-1,0)\), \((0,1,-1)\).`, S`\(A=${am([[1, -1, 0], [0, 1, -1]], false)}\): \(x_1=x_2=x_3\), so \(\operatorname{Null}A=\operatorname{Span}\{(1,1,1)\}\) ✓.`] },
];

export const WS = {
  code: "5.6",
  title: "Null Space, Column Space and Row Space",
  bigideas: S`An \(m\times n\) matrix \(A\) carries three subspaces. \(\operatorname{Null}A\subseteq\mathbb R^n\) collects the solutions of \(A\vec x=\vec 0\); \(\operatorname{Col}A\subseteq\mathbb R^m\), the span of the columns, is exactly the set of \(\vec b\) for which \(A\vec x=\vec b\) is consistent; \(\operatorname{Row}A\subseteq\mathbb R^n\) is the span of the rows. Row operations keep the row space and the null space but change the column space, and the null space is perpendicular to the row space.`,
  goals: ["Compute \\(A\\vec x\\) as a combination of columns.", "Test membership in \\(\\operatorname{Null}A\\), \\(\\operatorname{Col}A\\) and \\(\\operatorname{Row}A\\).", "Describe a null space as a span and a column space by equations.", "Use \\(A\\vec x=\\vec b\\) consistent \\(\\iff\\vec b\\in\\operatorname{Col}A\\).", "Explain what row operations preserve, and why \\(\\operatorname{Null}A\\perp\\operatorname{Row}A\\)."],
  curriculum: "The fundamental subspaces of a matrix",
  vocab: [["\\(A\\vec x\\)", "\\(x_1\\vec a_1+\\dots+x_n\\vec a_n\\)"], ["Null space", "\\(\\{\\vec x: A\\vec x=\\vec 0\\}\\subseteq\\mathbb R^n\\)"], ["Column space", "span of the columns \\(\\subseteq\\mathbb R^m\\)"], ["Row space", "span of the rows \\(\\subseteq\\mathbb R^n\\)"], ["Transpose", "\\(A^T\\): rows become columns"]],
  hook: S`The system \(x_1=b_1\), \(2x_1+x_2=b_2\), \(-x_1+x_2=b_3\) has three equations and two unknowns. For which right-hand sides does it have a solution? What do those \(\vec b\) look like together?`,
  concepts: NOTES,
  summary: [
    S`\(A\vec x=x_1\vec a_1+\dots+x_n\vec a_n\); entry \(i\) is row \(i\cdot\vec x\).`,
    S`\(\operatorname{Null}A\subseteq\mathbb R^n\), \(\operatorname{Col}A\subseteq\mathbb R^m\), \(\operatorname{Row}A\subseteq\mathbb R^n\) are subspaces.`,
    S`\(A\vec x=\vec b\) consistent \(\iff\vec b\in\operatorname{Col}A\).`,
    S`Row operations preserve \(\operatorname{Row}A\) and \(\operatorname{Null}A\), not \(\operatorname{Col}A\).`,
    S`\(\operatorname{Null}A\perp\operatorname{Row}A\); they meet only in \(\vec 0\).`,
  ],
  tips: ["Null space test: multiply; column space test: solve.", "Count entries: null and row vectors have \\(n\\) entries, column vectors \\(m\\).", "Never read the column space off the RREF's columns.", "Row space membership uses \\(A^T\\) (rows as columns).", "Check null vectors against every row with a dot product."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

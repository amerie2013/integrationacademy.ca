// LINALG1 Worksheet 5.3 — Bases of a Subspace
// Self-contained: complete notes (linear independence and its row-reduction test, bases, the standard basis, unique
// coordinates, two ways to find a basis), 9 worked examples with figures, 13 problems with full solutions.
import { S, def, thm } from "./wkit.mjs";
import { planeFig, vecs3, vecs2 } from "./fig5.mjs";
import { am, steps } from "../bank/la.mjs";

const skew = (b1, b2, x, c, view) => vecs2([[b1, "b₁", "blue"], [b2, "b₂", "red"], [[c[0] * b1[0], c[0] * b1[1]], "", "blue", null, true], [x, "x", "green", [c[0] * b1[0], c[0] * b1[1]], true], [x, "x", "green"]], view);
const F_DEP = vecs3([[[1, 0, 2], "u"], [[0, 1, -1], "v"], [[1, 1, 1], "u + v", "green"]], { plane: [[1, 0, 2], [0, 1, -1], 1] });
const F_STD = vecs3([[[1, 0, 0], "e₁"], [[0, 1, 0], "e₂"], [[0, 0, 1], "e₃"]]);
const F_COORD = skew([2, 1], [1, 1], [5, 4], [1, 3], { xmin: -1, xmax: 6, ymin: -1, ymax: 5 });
const F_PLANE = planeFig([1, 0, 2], [0, 1, 1], { lu: "(1, 0, 2)", lv: "(0, 1, 1)" });
const F_PIV = vecs3([[[1, -1, 2], "a₁"], [[2, -2, 4], "a₂ = 2a₁", "red"], [[0, 1, 1], "a₃", "green"]], { plane: [[1, -1, 2], [0, 1, 1], 1] });

const NOTES = [
  { h: "1. Linear independence and how to test it",
    lead: S`${def("linear independence", S`\(\vec v_1,\dots,\vec v_k\) are \textbf{linearly independent} if \(c_1\vec v_1+\dots+c_k\vec v_k=\vec 0\) only for \(c_1=\dots=c_k=0\); otherwise they are \textbf{dependent}, and some \(\vec v_j\) is a combination of the others.`)}
\textbf{Test.} \(c_1\vec v_1+\dots+c_k\vec v_k=\vec 0\) is a homogeneous system whose coefficient matrix has the \(\vec v_i\) as \textbf{columns}. Row reduce: a pivot in every column \(\Rightarrow\) independent; a column without a pivot \(\Rightarrow\) dependent (a free variable gives a nontrivial combination).`,
    fig: F_DEP, w: 0.56,
    body: S`Quick facts: a set containing \(\vec 0\) is dependent; two vectors are dependent exactly when one is a multiple of the other; more than \(n\) vectors in \(\mathbb R^n\) are always dependent (more unknowns than equations). The figure: \(\vec u\), \(\vec v\), \(\vec u+\vec v\) lie in one plane --- dependent.` },

  { h: "2. Bases",
    lead: S`${def("basis", S`A set \(\mathcal B\) of vectors in a subspace \(S\) is a \textbf{basis} of \(S\) if \(\mathcal B\) spans \(S\) and \(\mathcal B\) is linearly independent. (The empty set is the basis of \(\{\vec 0\}\).)`)}
The \textbf{standard basis} of \(\mathbb R^n\) is \(\vec e_1,\dots,\vec e_n\), where \(\vec e_i\) has a 1 in position \(i\) and 0 elsewhere: \((x_1,\dots,x_n)=x_1\vec e_1+\dots+x_n\vec e_n\).`,
    fig: F_STD, w: 0.6,
    body: S`A basis is a spanning set with no redundant vector, and an independent set that cannot be enlarged inside \(S\) without becoming dependent.` },

  { h: "3. Coordinates are unique",
    lead: thm("unique coordinates", S`If \(\{\vec v_1,\dots,\vec v_k\}\) is a basis of \(S\), each \(\vec x\in S\) equals \(c_1\vec v_1+\dots+c_k\vec v_k\) for exactly one list \((c_1,\dots,c_k)\) --- the \textbf{coordinates} of \(\vec x\) in this basis.`) + S`\pf{Existence: the basis spans. Uniqueness: two lists give \(\sum(c_i-d_i)\vec v_i=\vec 0\), and independence forces every \(c_i=d_i\).}`,
    fig: F_COORD, w: 0.58,
    body: S`Coordinates are found by solving \([\,\vec v_1\ \cdots\ \vec v_k\mid\vec x\,]\). In the figure, \((5,4)=1(2,1)+3(1,1)\): coordinates \((1,3)\) in the basis \(\{(2,1),(1,1)\}\).` },

  { h: "4. Method 1: a basis from a description",
    lead: S`For \(S\) given by equations or parameters: write a general \(\vec x\in S\) with free parameters and split by parameter, \(\vec x=t_1\vec v_1+\dots+t_k\vec v_k\). The \(\vec v_i\) span \(S\). If each \(\vec v_i\) has a 1 in the position of its own parameter and 0 in the positions of the others (automatic when solving for pivot variables), they are independent: a basis.`,
    fig: F_PLANE, w: 0.56,
    body: S`Example: \(2x_1+x_2-x_3=0\) gives \(x_3=2x_1+x_2\), so \(\vec x=(s,t,2s+t)=s(1,0,2)+t(0,1,1)\): basis \(\{(1,0,2),(0,1,1)\}\) (figure).` },

  { h: "5. Method 2: a basis from a spanning set",
    lead: S`If \(S=\operatorname{Span}\{\vec a_1,\dots,\vec a_k\}\), put the \(\vec a_i\) in the columns of a matrix \(A\) and row reduce. The vectors \(\vec a_i\) \textbf{of the original matrix} in the pivot columns form a basis of \(S\); every non-pivot \(\vec a_j\) is a combination of the pivot vectors before it, and the RREF shows the coefficients.`,
    fig: F_PIV, w: 0.56,
    body: S`Why it works: row operations do not change the solutions of \(A\vec c=\vec 0\), i.e. the linear relations among the columns. In the figure \(\vec a_2=2\vec a_1\) is dropped; \(\vec a_1,\vec a_3\) remain.` },
];

const EXAMPLES = [
  { title: "A dependent set in ℝ³", q: S`Are \((1,1,0)\), \((0,1,2)\), \((1,3,4)\) linearly independent?`,
    fig: vecs3([[[1, 1, 0], "(1, 1, 0)"], [[0, 1, 2], "(0, 1, 2)"], [[1, 3, 4], "(1, 3, 4)", "green"]], { plane: [[1, 1, 0], [0, 1, 2], 1.3] }),
    steps: [...steps([[1, 0, 1], [1, 1, 3], [0, 2, 4]], [
      [S`Columns are the vectors. Clear column 1.`, ["R2-R1"]],
      [S`Clear column 2.`, ["R3-2R2"]],
    ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
      S`Column 3 has no pivot: dependent. The echelon form says \(c_1+c_3=0\), \(c_2+2c_3=0\); with \(c_3=-1\): \(c_1=1\), \(c_2=2\).`,
      S`So \((1,1,0)+2(0,1,2)-(1,3,4)=\vec 0\), i.e. \((1,3,4)=(1,1,0)+2(0,1,2)\) ✓.`],
    ans: S`dependent: \((1,3,4)=(1,1,0)+2(0,1,2)\)` },
  { title: "An independent set in ℝ³", q: S`Are \((2,1,0)\), \((1,0,1)\), \((0,1,1)\) linearly independent?`,
    fig: vecs3([[[2, 1, 0], "(2, 1, 0)"], [[1, 0, 1], "(1, 0, 1)"], [[0, 1, 1], "(0, 1, 1)"]]),
    steps: [...steps([[2, 1, 0], [1, 0, 1], [0, 1, 1]], [
      [S`Swap to get a leading 1 in column 1.`, ["R1<->R2"]],
      [S`Clear column 1.`, ["R2-2R1"]],
      [S`Clear column 2.`, ["R3-R2"]],
    ], { bar: false, intro: "Matrix with the vectors as columns" }).steps,
      S`A pivot in every column: only the trivial combination gives \(\vec 0\). Independent --- and, with 3 pivots in \(\mathbb R^3\), a basis of \(\mathbb R^3\).`],
    ans: S`independent (a basis of \(\mathbb R^3\))` },
  { title: "A basis of a plane", q: S`Find a basis of the plane \(2x_1+x_2-x_3=0\).`,
    fig: F_PLANE,
    steps: [...steps([[2, 1, -1, 0]], [[S`The plane is \(A\vec x=\vec 0\) with \(A=${am([[2, 1, -1]], false)}\). Make the pivot 1.`, ["R1*1/2"]]], { intro: "Augmented matrix [A | 0]" }).steps,
      S`Free \(x_2=s\), \(x_3=t\): \(x_1=-\tfrac12s+\tfrac12t\). Scaling the two direction vectors by 2: \(\vec x\in\operatorname{Span}\{(-1,2,0),(1,0,2)\}\).`,
      ...steps([[-1, 1], [2, 0], [0, 2]], [
        [S`\textbf{Independence.} Clear column 1.`, ["R2+2R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      ], { bar: false, intro: "Matrix with the two vectors as columns" }).steps,
      S`Two pivots: \(\{(-1,2,0),(1,0,2)\}\) is a basis. The figure's pair \((1,0,2)\), \((0,1,1)\) is another basis: \((0,1,1)=\tfrac12(-1,2,0)+\tfrac12(1,0,2)\), and it is independent too.`],
    ans: S`\(\{(-1,2,0),(1,0,2)\}\) (or \(\{(1,0,2),(0,1,1)\}\))` },
  { title: "A basis in ℝ⁴", q: S`Find a basis of \(S=\{\vec x\in\mathbb R^4: x_1-x_3=0,\ x_2+x_3-x_4=0\}\).`,
    steps: [S`The coefficient matrix \(${am([[1, 0, -1, 0], [0, 1, 1, -1]], false)}\) is already in RREF; pivots \(x_1,x_2\), free \(x_3=s\), \(x_4=t\).`, S`\(x_1=s\), \(x_2=-s+t\): \(\vec x=(s,\ t-s,\ s,\ t)=s(1,-1,1,0)+t(0,1,0,1)\).`, S`Independent (entries 3 and 4). Check \((1,-1,1,0)\): \(1-1=0\) ✓, \(-1+1-0=0\) ✓.`],
    ans: S`\(\{(1,-1,1,0),(0,1,0,1)\}\)` },
  { title: "Pivot columns give a basis", q: S`Find a basis of \(\operatorname{Span}\{(1,-1,2),(2,-2,4),(0,1,1),(1,0,3)\}\).`,
    fig: F_PIV,
    steps: [...steps([[1, 2, 0, 1], [-1, -2, 1, 0], [2, 4, 1, 3]], [
      [S`Clear column 1.`, ["R2+R1", "R3-2R1"]],
      [S`Column 2 has no pivot; the pivot of column 3 is in row 2. Clear below it.`, ["R3-R2"]],
    ], { bar: false, intro: "Vectors as columns" }).steps,
      S`Pivot columns 1 and 3, so the original vectors \((1,-1,2)\) and \((0,1,1)\) form a basis.`, S`The others: \((2,-2,4)=2(1,-1,2)\) and \((1,0,3)=(1,-1,2)+(0,1,1)\) ✓.`],
    ans: S`\(\{(1,-1,2),(0,1,1)\}\) --- the span is a plane` },
  { title: "Coordinates in ℝ²", q: S`Find the coordinates of \((5,4)\) in the basis \(\{(2,1),(1,1)\}\).`,
    fig: F_COORD,
    steps: [...steps([[2, 1, 5], [1, 1, 4]], [
      [S`Swap for a leading 1.`, ["R1<->R2"]],
      [S`Clear column 1.`, ["R2-2R1"]],
      [S`Make the second pivot 1, then clear above it.`, ["R2*-1", "R1-R2"]],
    ], { intro: S`Solve \(c_1(2,1)+c_2(1,1)=(5,4)\)` }).steps,
      S`\(c_1=1\), \(c_2=3\). Check: \((2,1)+3(1,1)=(5,4)\) ✓.`],
    ans: S`\((1,3)\)` },
  { title: "Coordinates in ℝ³", q: S`\(\mathcal B=\{(1,1,0),(0,1,1),(1,0,0)\}\) is a basis of \(\mathbb R^3\). Find the coordinates of \(\vec x=(2,3,1)\).`,
    fig: vecs3([[[1, 1, 0], "b₁"], [[0, 1, 1], "b₂"], [[1, 0, 0], "b₃"], [[2, 3, 1], "x", "green"]]),
    steps: [...steps([[1, 0, 1, 2], [1, 1, 0, 3], [0, 1, 0, 1]], [
      [S`Clear column 1.`, ["R2-R1"]],
      [S`Clear column 2.`, ["R3-R2"]],
    ], { intro: S`Solve \([\,\vec b_1\ \vec b_2\ \vec b_3\mid\vec x\,]\)` }).steps,
      S`Back substitution: \(c_3=0\); \(c_2-c_3=1\), so \(c_2=1\); \(c_1+c_3=2\), so \(c_1=2\).`, S`Check: \(2(1,1,0)+(0,1,1)+0(1,0,0)=(2,3,1)\) ✓.`],
    ans: S`\((2,1,0)\)` },
  { title: "Not a basis of ℝ³", q: S`Is \(\{(1,2,-1),(2,1,1),(0,3,-3)\}\) a basis of \(\mathbb R^3\)?`,
    fig: vecs3([[[1, 2, -1], "(1, 2, −1)"], [[2, 1, 1], "(2, 1, 1)"], [[0, 3, -3], "(0, 3, −3)", "green"]], { plane: [[1, 2, -1], [2, 1, 1], 0.9] }),
    steps: [...steps([[1, 2, 0], [2, 1, 3], [-1, 1, -3]], [
      [S`Clear column 1.`, ["R2-2R1", "R3+R1"]],
      [S`Clear column 2.`, ["R3+R2"]],
    ], { bar: false, intro: "Vectors as columns" }).steps,
      S`Only two pivots: dependent, so not a basis. Indeed \((0,3,-3)=2(1,2,-1)-(2,1,1)\): all three lie in one plane.`],
    ans: S`no --- \((0,3,-3)=2(1,2,-1)-(2,1,1)\)` },
  { title: "When is it a basis?", q: S`For which \(k\) is \(\{(1,k,0),(0,1,k),(k,0,1)\}\) a basis of \(\mathbb R^3\)?`,
    steps: [S`Columns: \[${am([[1, 0, "k"], ["k", 1, 0], [0, "k", 1]], false)}\]`,
      S`\(R_2\to R_2-kR_1\): \[\longrightarrow\ ${am([[1, 0, "k"], [0, 1, "-k^2"], [0, "k", 1]], false)}\]`,
      S`\(R_3\to R_3-kR_2\): the last entry is \(1-k(-k^2)=1+k^3\). \[\longrightarrow\ ${am([[1, 0, "k"], [0, 1, "-k^2"], [0, 0, "1+k^3"]], false)}\]`,
      S`Three pivots exactly when \(1+k^3\ne0\), i.e. \(k\ne-1\). For \(k=-1\): \((-1,0,1)=-(1,-1,0)-(0,1,-1)\), dependent.`],
    ans: S`every \(k\ne-1\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Are \((3,-6)\) and \((-1,2)\) linearly independent?`, ans: S`no: \((3,-6)=-3(-1,2)\)` },
  { level: 1, q: S`Write \((4,-1,7)\) in the standard basis of \(\mathbb R^3\).`, ans: S`\(4\vec e_1-\vec e_2+7\vec e_3\)`, fig: F_STD },
  { level: 1, q: S`Is \(\{(1,0),(0,1),(1,1)\}\) a basis of \(\mathbb R^2\)? Why?`, ans: S`no: it spans, but \((1,1)=(1,0)+(0,1)\) makes it dependent` },
  { level: 2, q: S`Test \(\{(1,0,2),(0,1,-1),(1,1,1)\}\) for independence; if dependent, give a relation.`, ans: S`dependent: \((1,1,1)=(1,0,2)+(0,1,-1)\)`,
    fig: F_DEP,
    sol: [...steps([[1, 0, 1], [0, 1, 1], [2, -1, 1]], [
      [S`Clear column 1.`, ["R3-2R1"]],
      [S`Clear column 2.`, ["R3+R2"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Column 3 has no pivot: \(c_1+c_3=0\), \(c_2+c_3=0\); \(c_3=-1\) gives \((1,0,2)+(0,1,-1)-(1,1,1)=\vec 0\).`] },
  { level: 2, q: S`Find a basis of the plane \(x_1+3x_2-x_3=0\).`, ans: S`\(\{(1,0,1),(0,1,3)\}\)`,
    fig: planeFig([1, 0, 1], [0, 1, 3], { lu: "(1, 0, 1)", lv: "(0, 1, 3)", len: 3.6 }),
    sol: [S`\(x_3=x_1+3x_2\); \(x_1=s\), \(x_2=t\): \(\vec x=s(1,0,1)+t(0,1,3)\).`, S`Independent (entries 1, 2). Check: \(1+0-1=0\), \(0+3-3=0\) ✓.`] },
  { level: 2, q: S`Find a basis of \(\operatorname{Span}\{(1,2,1),(2,4,2),(1,0,1),(0,1,0)\}\).`, ans: S`\(\{(1,2,1),(1,0,1)\}\)`,
    sol: [...steps([[1, 2, 1, 0], [2, 4, 0, 1], [1, 2, 1, 0]], [
      [S`Clear column 1.`, ["R2-2R1", "R3-R1"]],
    ], { bar: false, intro: "Vectors as columns" }).steps, S`Pivots in columns 1 and 3: basis \(\{(1,2,1),(1,0,1)\}\). Also \((0,1,0)=\tfrac12(1,2,1)-\tfrac12(1,0,1)\) ✓.`] },
  { level: 2, q: S`Find the coordinates of \((1,8)\) in the basis \(\{(1,2),(-1,1)\}\).`, ans: S`\((3,2)\)`,
    fig: vecs2([[[1, 2], "b₁", "blue"], [[-1, 1], "b₂", "red"], [[1, 8], "x", "green"]], { xmin: -2, xmax: 4, ymin: -1, ymax: 9 }),
    sol: [...steps([[1, -1, 1], [2, 1, 8]], [
      [S`Clear column 1.`, ["R2-2R1"]],
      [S`Make the pivot 1.`, ["R2*1/3"]],
      [S`Clear above it.`, ["R1+R2"]],
    ]).steps, S`\(c_1=3\), \(c_2=2\): \(3(1,2)+2(-1,1)=(1,8)\) ✓.`] },
  { level: 2, q: S`Find a basis of \(\{\vec x\in\mathbb R^4: x_1+x_2-x_3+2x_4=0\}\).`, ans: S`\(\{(-1,1,0,0),(1,0,1,0),(-2,0,0,1)\}\)`,
    sol: [S`\(x_1=-x_2+x_3-2x_4\); free \(x_2=r\), \(x_3=s\), \(x_4=t\).`, S`\(\vec x=r(-1,1,0,0)+s(1,0,1,0)+t(-2,0,0,1)\): three independent vectors (entries 2, 3, 4).`] },
  { level: 3, space: 5, q: S`Prove that every nonempty subset of a linearly independent set is linearly independent.`, ans: S`a dependence among a subset is a dependence of the whole set (other coefficients 0)`,
    sol: [S`Suppose \(\{\vec v_1,\dots,\vec v_k\}\) is independent and some subset, say \(\vec v_1,\dots,\vec v_j\), had \(c_1\vec v_1+\dots+c_j\vec v_j=\vec 0\) with some \(c_i\ne0\).`, S`Adding \(0\vec v_{j+1}+\dots+0\vec v_k\) gives a nontrivial combination of the whole set equal to \(\vec 0\): a contradiction.`] },
  { level: 3, space: 5, q: S`Prove: if \(\vec u,\vec v\) are independent, so are \(\vec u+\vec v\) and \(\vec u-\vec v\).`, ans: S`\(a(\vec u+\vec v)+b(\vec u-\vec v)=\vec 0\Rightarrow a+b=0,\ a-b=0\)`,
    sol: [S`\(a(\vec u+\vec v)+b(\vec u-\vec v)=(a+b)\vec u+(a-b)\vec v=\vec 0\).`, S`Independence gives \(a+b=0\) and \(a-b=0\), so \(a=b=0\).`] },
  { level: 3, space: 5, q: S`For which \(a\) is \(\{(1,1,1),(1,a,1),(1,1,a)\}\) a basis of \(\mathbb R^3\)?`, ans: S`\(a\ne1\)`,
    sol: [S`Columns \(${am([[1, 1, 1], [1, "a", 1], [1, 1, "a"]], false)}\); \(R_2\to R_2-R_1\), \(R_3\to R_3-R_1\): \(${am([[1, 1, 1], [0, "a-1", 0], [0, 0, "a-1"]], false)}\).`, S`Three pivots iff \(a-1\ne0\).`] },
  { level: 3, space: 5, q: S`Extend \(\{(1,1,0),(0,1,1)\}\) to a basis of \(\mathbb R^3\) by adding one standard basis vector. Justify.`, ans: S`add \(\vec e_1\) (or \(\vec e_3\))`,
    sol: [...steps([[1, 0, 1], [1, 1, 0], [0, 1, 0]], [
      [S`Try \(\vec e_1\) as the third column. Clear column 1.`, ["R2-R1"]],
      [S`Clear column 2.`, ["R3-R2"]],
    ], { bar: false, intro: "Columns (1,1,0), (0,1,1), (1,0,0)" }).steps, S`Three pivots: independent, so a basis of \(\mathbb R^3\).`] },
  { level: 3, space: 5, q: S`\(\{(1,-1,0),(0,1,-1)\}\) is a basis of the plane \(x_1+x_2+x_3=0\). Find the coordinates of \((2,1,-3)\).`, ans: S`\((2,3)\)`,
    fig: planeFig([1, -1, 0], [0, 1, -1], { lu: "b₁", lv: "b₂", more: [[[2, 1, -3], "(2, 1, −3)", "green"]], len: 3.6 }),
    sol: [S`\(c_1(1,-1,0)+c_2(0,1,-1)=(c_1,\ c_2-c_1,\ -c_2)\).`, S`Matching: \(c_1=2\); \(-c_2=-3\) gives \(c_2=3\); middle: \(3-2=1\) ✓.`] },
];

export const WS = {
  code: "5.3",
  title: "Bases of a Subspace",
  bigideas: S`A \textbf{basis} of a subspace is a set of vectors that spans it and is \textbf{linearly independent} --- enough vectors to reach everything, none of them redundant. Independence is tested by row reducing the matrix whose columns are the vectors (a pivot in every column). Every vector of the subspace has \textbf{unique coordinates} in a basis. Bases are found by splitting a general solution by parameter, or by keeping the original vectors in the pivot columns.`,
  goals: ["Test vectors for linear independence by row reduction and find a dependence relation.", "State the definition of a basis and the standard basis of \\(\\mathbb R^n\\).", "Find a basis of a subspace given by equations, by parameters, or as a span.", "Find coordinates with respect to a basis.", "Decide when a set with a parameter is a basis."],
  curriculum: "Subspaces of Rⁿ — linear independence, bases and coordinates",
  vocab: [["Linearly independent", "only the trivial combination gives \\(\\vec 0\\)"], ["Basis", "independent spanning set"], ["Standard basis", "\\(\\vec e_1,\\dots,\\vec e_n\\)"], ["Coordinates", "the unique coefficients in a basis"], ["Pivot columns", "the columns with leading entries"]],
  hook: S`\((5,4)\) can be reached as \(5\vec e_1+4\vec e_2\). Can it also be reached using only \((2,1)\) and \((1,1)\)? In how many ways? What if you also allow \((3,2)\)?`,
  concepts: NOTES,
  summary: [
    S`Independent \(\iff\) a pivot in every column of \([\,\vec v_1\ \cdots\ \vec v_k\,]\).`,
    S`Basis = spanning + independent; \(\vec e_1,\dots,\vec e_n\) is the standard basis of \(\mathbb R^n\).`,
    S`Coordinates in a basis exist and are unique.`,
    S`Equations/parameters \(\Rightarrow\) split by parameter \(\Rightarrow\) basis.`,
    S`Span \(\Rightarrow\) pivot columns \(\Rightarrow\) basis (take the original vectors).`,
  ],
  tips: ["Put the vectors in the columns, not the rows.", "Take basis vectors from the original matrix, not from the RREF.", "A set containing \\(\\vec 0\\) is never independent.", "Check a dependence relation by recombining the vectors.", "Coordinates depend on the order of the basis vectors."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

// LINALG1 5.6 — Null Space, Column Space and Row Space: the matrix–vector product as a combination of columns,
// the three fundamental subspaces of an m × n matrix, why each is a subspace, membership tests (compute Ax; solve
// [A | b]; solve [Aᵀ | x]), Ax = b consistent ⇔ b ∈ Col A, row operations preserve the row space, and Null A ⊥ Row A.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, cv, am, steps } from "./lib.mjs";
import { vfig, scene3, a3, pt3, line3, patch3 } from "./vecfig.mjs";

export const TITLE = "5.6 Null Space, Column Space and Row Space";
export const ID = "11a10001-0001-4001-8001-000000000506";

const S = String.raw;
const colPlane = vfig(scene3(4.2, { polys: [patch3([0, 0, 0], [1, 0, 1], [2, 1, 3], 0.85, "#dbeafe", "blue", 0.5)],
  arrows: [a3([0, 0, 0], [1, 0, 1], { color: "blue", vl: "a₁", off: 14 }), a3([0, 0, 0], [2, 1, 3], { color: "blue", vl: "a₂", off: -14 }), a3([0, 0, 0], [1, 4, 5], { color: "green", label: "(1, 4, 5) ∈ Col A", off: 14 }), a3([0, 0, 0], [2, 1, 0], { color: "red", label: "(2, 1, 0) ∉ Col A", off: -14 })],
  points: [pt3([0, 0, 0], "0", { color: "black", dx: -14 })] }), "Col A is the plane spanned by the columns; Ax = b is consistent exactly for b in it");
const nullRow = vfig(scene3(3, { polys: [patch3([0, 0, 0], [1, 2, -1], [2, 4, 1], 0.55, "#ede9fe", "violet", 0.5)],
  segs: [line3([0, 0, 0], [-2, 1, 0], -1, 1, "red")],
  arrows: [a3([0, 0, 0], [1, 2, -1], { color: "violet", label: "row 1", off: 14 }), a3([0, 0, 0], [2, 4, 1], { color: "violet", label: "row 2", off: -14 })],
  points: [pt3([-2, 1, 0], "Null A", { color: "red" }), pt3([0, 0, 0], "0", { color: "black", dx: -14 })] }), "Row A (violet plane) and Null A (red line) in ℝ³: every null vector is perpendicular to every row");
const colCombo = vfig({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 6 }, step: 1, width: 270,
  arrows: [{ from: [0, 0], to: [2, 0], color: "blue", w: 2.6, label: "a₁" }, { from: [0, 0], to: [1, 3], color: "red", w: 2.6, label: "a₂" }, { from: [0, 0], to: [4, 0], color: "blue", w: 1.4, dash: true }, { from: [4, 0], to: [5, 3], color: "red", w: 2, dash: true }, { from: [0, 0], to: [5, 3], color: "green", w: 2.8, label: "Ax" }] },
  "Ax = x₁a₁ + x₂a₂: with x = (2, 1), Ax = 2(2, 0) + 1(1, 3) = (5, 3)");

export const blocks = () => [
  intro({
    icon: "🔲",
    title: "Null Space, Column Space and Row Space",
    overview: S`Every \(m\times n\) matrix \(A\) carries three subspaces. Its <strong>null space</strong> collects the vectors that \(A\) sends to zero — the solutions of \(A\vec x=\vec 0\). Its <strong>column space</strong> is the span of its columns — exactly the right-hand sides \(\vec b\) for which \(A\vec x=\vec b\) can be solved. Its <strong>row space</strong> is the span of its rows. Together they describe everything about the systems with coefficient matrix \(A\). This lesson defines the three, shows how to test whether a vector belongs to each, and proves two key facts: row operations do not change the row space, and the null space is perpendicular to the row space.`,
    goals: [
      "compute \\(A\\vec x\\) as a combination of the columns of \\(A\\);",
      "define the null space, column space and row space and say where each lives;",
      "test whether a vector lies in each of the three subspaces;",
      "use \\(A\\vec x=\\vec b\\) consistent \\(\\Leftrightarrow\\vec b\\in\\operatorname{Col}A\\);",
      "explain why row operations preserve the row space and why \\(\\operatorname{Null}A\\perp\\operatorname{Row}A\\).",
    ],
    outcomes: "the fundamental subspaces of a matrix: null space, column space, row space",
    prior: [
      [S`Is \(\vec b\) in \(\operatorname{Span}\{\vec v_1,\vec v_2\}\) — how do you decide?`, S`Row reduce \([\vec v_1\ \vec v_2\mid\vec b]\); consistent means yes (5.2).`],
      [S`Is the solution set of \(A\vec x=\vec 0\) a subspace?`, S`Yes (5.2).`],
      [S`Transpose \(${am([[1, 2, 3], [4, 5, 6]], false)}\).`, S`\(${am([[1, 4], [2, 5], [3, 6]], false)}\): rows become columns.`],
    ],
    words: [
      ["\\(A\\vec x\\)", "\\(x_1\\vec a_1+\\dots+x_n\\vec a_n\\) (columns \\(\\vec a_j\\))", "a vector in \\(\\mathbb R^m\\)"],
      ["Null space", "\\(\\operatorname{Null}A=\\{\\vec x\\in\\mathbb R^n: A\\vec x=\\vec 0\\}\\)", "solutions of the homogeneous system"],
      ["Column space", "\\(\\operatorname{Col}A=\\operatorname{Span}\\{\\vec a_1,\\dots,\\vec a_n\\}\\subseteq\\mathbb R^m\\)", "all \\(A\\vec x\\)"],
      ["Row space", "\\(\\operatorname{Row}A=\\) span of the rows \\(\\subseteq\\mathbb R^n\\)", "\\(=\\operatorname{Col}A^T\\)"],
      ["Transpose", "\\(A^T\\): row \\(i\\) of \\(A\\) becomes column \\(i\\)", "\\((A^T)_{ij}=a_{ji}\\)"],
    ],
  }),

  section("📌 The matrix–vector product", S`
  ${definition("matrix–vector product", S`If \(A\) is \(m\times n\) with columns \(\vec a_1,\dots,\vec a_n\in\mathbb R^m\) and \(\vec x\in\mathbb R^n\), then \(A\vec x=x_1\vec a_1+x_2\vec a_2+\dots+x_n\vec a_n\in\mathbb R^m\). Equivalently, entry \(i\) of \(A\vec x\) is (row \(i\) of \(A\)) \(\cdot\,\vec x\).`)}
  <p>With this notation the system with augmented matrix \([A\mid\vec b]\) is the single equation \(A\vec x=\vec b\). The product is linear: \(A(\vec x+\vec y)=A\vec x+A\vec y\) and \(A(c\vec x)=c\,A\vec x\).</p>
  <div style="text-align:center;">${colCombo}</div>`),

  section("📌 The three fundamental subspaces", S`
  ${definition("fundamental subspaces", S`For an \(m\times n\) matrix \(A\): <ul style="margin:4px 0 0;"><li>the <strong>null space</strong> \(\operatorname{Null}A=\{\vec x\in\mathbb R^n: A\vec x=\vec 0\}\), a subspace of \(\mathbb R^n\);</li><li>the <strong>column space</strong> \(\operatorname{Col}A=\{A\vec x:\vec x\in\mathbb R^n\}=\operatorname{Span}\{\vec a_1,\dots,\vec a_n\}\), a subspace of \(\mathbb R^m\);</li><li>the <strong>row space</strong> \(\operatorname{Row}A=\) the span of the rows of \(A\) (written as vectors in \(\mathbb R^n\)) \(=\operatorname{Col}A^T\), a subspace of \(\mathbb R^n\).</li></ul>`)}
  <p>Each is a subspace: the null space is a solution space of a homogeneous system, and the other two are spans (5.2).</p>
  ${theorem("consistency and the column space", S`\(A\vec x=\vec b\) is consistent if and only if \(\vec b\in\operatorname{Col}A\).`, S`\(A\vec x=x_1\vec a_1+\dots+x_n\vec a_n\), so a solution \(\vec x\) is exactly a list of coefficients writing \(\vec b\) as a combination of the columns.`)}
  <div style="text-align:center;">${colPlane}</div>`),

  section("📌 Membership tests, and what row operations do", S`
  <ul>
  <li>\(\vec x\in\operatorname{Null}A\): compute \(A\vec x\) and compare with \(\vec 0\).</li>
  <li>\(\vec b\in\operatorname{Col}A\): row reduce \([A\mid\vec b]\); consistent means yes.</li>
  <li>\(\vec y\in\operatorname{Row}A\): row reduce \([A^T\mid\vec y]\) (the rows of \(A\) as columns); consistent means yes.</li>
  </ul>
  ${theorem("row operations and the row space", S`If \(B\) is obtained from \(A\) by elementary row operations, then \(\operatorname{Row}B=\operatorname{Row}A\) (and \(\operatorname{Null}B=\operatorname{Null}A\)).`, S`Each row of \(B\) is a combination of rows of \(A\) (a swap, a multiple, or row \(i\) plus a multiple of row \(j\)), so \(\operatorname{Row}B\subseteq\operatorname{Row}A\). Every operation can be undone, so \(\operatorname{Row}A\subseteq\operatorname{Row}B\). Row operations keep the solutions of \(A\vec x=\vec 0\) (2.2), so the null spaces agree.`)}
  ${keyIdea(S`Row operations usually <strong>change</strong> the column space (the columns themselves change), but not the row space or the null space. That is why bases of \(\operatorname{Col}A\) are taken from the original columns of \(A\) (5.7).`)}
  ${theorem("null space ⊥ row space", S`Every vector of \(\operatorname{Null}A\) is orthogonal to every vector of \(\operatorname{Row}A\).`, S`\(A\vec x=\vec 0\) says (row \(i\))\(\cdot\vec x=0\) for every row. A vector of the row space is a combination of rows, so its dot product with \(\vec x\) is the same combination of zeros.`)}
  <div style="text-align:center;">${nullRow}</div>`),

  section("📌 Explore", S`<p>The explorer shows a matrix and its RREF and lists bases of all three subspaces (5.7 explains how they are read off). Notice where each lives: the null space and row space in \(\mathbb R^n\) (one entry per column), the column space in \(\mathbb R^m\) (one entry per row).</p>`),
  widget("laFundamental", { init: { set: "a" } }),

  section("📌 Common mistakes", watchOut([
    "Null A and Row A live in Rⁿ (n = number of columns); Col A lives in Rᵐ (m = number of rows).",
    "Row operations change Col A — never read the column space off the RREF's columns.",
    "To test b ∈ Col A, solve Ax = b; to test x ∈ Null A, just multiply.",
    "Ax is a combination of the COLUMNS of A with weights from x, not of the rows.",
    "The row space of A is the column space of Aᵀ, not of A.",
  ])),

  examples([
    ["Membership in the null space", S`Let \(A=${am([[1, -1, 2], [3, 0, 3]], false)}\). Is \(\vec x=(1,3,1)\) in \(\operatorname{Null}A\)? Is \(\vec y=(-1,1,1)\)?`,
      [S`\(A\vec x=1${cv(1, 3)}+3${cv(-1, 0)}+1${cv(2, 3)}=${cv("1-3+2", "3+0+3")}=${cv(0, 6)}\ne\vec 0\): \(\vec x\notin\operatorname{Null}A\).`, S`\(A\vec y=-1${cv(1, 3)}+1${cv(-1, 0)}+1${cv(2, 3)}=${cv("-1-1+2", "-3+0+3")}=${cv(0, 0)}\): \(\vec y\in\operatorname{Null}A\).`],
      S`\(\vec y\in\operatorname{Null}A\), \(\vec x\notin\operatorname{Null}A\)`],
    ["Membership in the column space", S`Let \(A=${am([[1, 2], [0, 1], [1, 3]], false)}\). Decide whether \(\vec b=(1,4,5)\) and \(\vec c=(2,1,0)\) are in \(\operatorname{Col}A\).`,
      [...steps([[1, 2, 1], [0, 1, 4], [1, 3, 5]], [
        [S`For \(\vec b\): clear column 1.`, ["R3-R1"]],
        [S`Clear column 2.`, ["R3-R2"]],
      ], { intro: S`\(\vec b\in\operatorname{Col}A\) exactly when \([A\mid\vec b]\) is consistent` }).steps,
        S`Consistent: \(x_2=4\), \(x_1=1-2(4)=-7\). So \(\vec b=-7\vec a_1+4\vec a_2\in\operatorname{Col}A\); check \(-7(1,0,1)+4(2,1,3)=(1,4,5)\) ✓.`,
        ...steps([[1, 2, 2], [0, 1, 1], [1, 3, 0]], [
          [S`For \(\vec c\): the same operations.`, ["R3-R1"]],
          [S`Clear column 2.`, ["R3-R2"]],
        ], { intro: S`Now \([A\mid\vec c]\)` }).steps,
        S`The last row is \([\,0\ \ 0\mid-3\,]\), an equation with left side 0 and right side \(-3\): inconsistent, so \(\vec c\notin\operatorname{Col}A\) and \(A\vec x=\vec c\) has no solution.`],
      S`\(\vec b\in\operatorname{Col}A\) (\(\vec b=-7\vec a_1+4\vec a_2\)); \(\vec c\notin\operatorname{Col}A\)`, colPlane],
    ["Membership in the row space", S`Let \(A=${am([[1, 2, 0], [0, 1, 1]], false)}\). Is \(\vec y=(2,3,-1)\) in \(\operatorname{Row}A\)?`,
      [...steps([[1, 0, 2], [2, 1, 3], [0, 1, -1]], [
        [S`The rows of \(A\) are the columns of \(A^T\). Clear column 1.`, ["R2-2R1"]],
        [S`Clear column 2.`, ["R3-R2"]],
      ], { intro: S`Solve \(c_1(1,2,0)+c_2(0,1,1)=\vec y\), i.e. \([A^T\mid\vec y]\)` }).steps,
        S`Consistent: \(c_2=-1\), \(c_1=2\). So \(\vec y=2(1,2,0)-(0,1,1)\); check: \((2,4-1,-1)=(2,3,-1)\) ✓.`],
      S`yes: \(\vec y=2\,\text{row}_1-\text{row}_2\)`],
    ["All three for one matrix", S`For \(A=${am([[1, 2, -1], [2, 4, 1]], false)}\) describe \(\operatorname{Null}A\), \(\operatorname{Col}A\) and \(\operatorname{Row}A\).`,
      [...steps([[1, 2, -1], [2, 4, 1]], [
        [S`Clear column 1.`, ["R2-2R1"]],
        [S`Column 2 has no pivot; make the pivot of column 3 equal to 1,`, ["R2*1/3"]],
        [S`and clear above it.`, ["R1+R2"]],
      ], { bar: false, intro: "Row reduce A" }).steps,
        S`<strong>Null:</strong> \(x_2=t\) free, \(x_1=-2t\), \(x_3=0\): the line \(\operatorname{Span}\{(-2,1,0)\}\) in \(\mathbb R^3\).`,
        S`<strong>Col:</strong> a pivot in each row, so \(A\vec x=\vec b\) is always consistent: \(\operatorname{Col}A=\mathbb R^2\).`,
        S`<strong>Row:</strong> the plane spanned by \((1,2,-1)\) and \((2,4,1)\) in \(\mathbb R^3\). Check perpendicularity: \((1,2,-1)\cdot(-2,1,0)=0\) ✓ and \((2,4,1)\cdot(-2,1,0)=0\) ✓.`],
      S`Null = line \(t(-2,1,0)\); Col = \(\mathbb R^2\); Row = a plane in \(\mathbb R^3\) perpendicular to the null line`, nullRow],
    ["A consistency condition", S`For which \(h\) is \((3,h,1)\) in the column space of \(A=${am([[1, 1], [2, 3], [1, 0]], false)}\)?`,
      [S`Row reduce \([A\mid\vec b]\) with the unknown \(h\): \[${am([[1, 1, 3], [2, 3, "h"], [1, 0, 1]])}\]`,
        S`Clear column 1. Operations: \(R_2\to R_2-2R_1,\ R_3\to R_3-R_1\). \[\longrightarrow\ ${am([[1, 1, 3], [0, 1, "h-6"], [0, -1, -2]])}\]`,
        S`Clear column 2. Operation: \(R_3\to R_3+R_2\). \[\longrightarrow\ ${am([[1, 1, 3], [0, 1, "h-6"], [0, 0, "h-8"]])}\]`,
        S`Consistent exactly when \(h-8=0\). For \(h=8\): \(x_2=2\), \(x_1=1\), and \(1(1,2,1)+2(1,3,0)=(3,8,1)\) ✓.`],
      S`\(h=8\)`],
  ]),

  practice([
    q("where it lives", S`\(A\) is \(2\times4\). \(\operatorname{Null}A\) is a subspace of:`, choice([S`\(\mathbb R^4\)`, S`\(\mathbb R^2\)`, S`\(\mathbb R^8\)`, S`\(\mathbb R^6\)`], 0),
      "x has one entry per column.", [S`\(A\vec x\) needs \(\vec x\in\mathbb R^4\).`], S`\(\mathbb R^4\)`),
    q("null?", S`Is \((2,-1)\) in the null space of \(${am([[1, 2], [3, 6]], false)}\)?`, choice(["yes", "no"], 0),
      "Multiply.", [S`\(2-2=0\) and \(6-6=0\).`], "yes"),
    q("consistency", S`\(A\vec x=\vec b\) is consistent exactly when \(\vec b\) lies in:`, choice([S`\(\operatorname{Col}A\)`, S`\(\operatorname{Null}A\)`, S`\(\operatorname{Row}A\)`, S`\(\mathbb R^n\)`], 0),
      "Ax is a combination of columns.", [S`\(A\vec x=x_1\vec a_1+\dots+x_n\vec a_n\).`], S`\(\operatorname{Col}A\)`),
    q("product", S`Compute the first entry of \(A\vec x\) for \(A=${am([[2, 1], [0, 3]], false)}\), \(\vec x=(1,2)\).`, num(4),
      "Row 1 · x.", [S`\(2(1)+1(2)\).`], S`\(4\)`),
    q("row space", S`Which vector lies in the row space of \(${am([[1, 2, 3]], false)}\)?`, choice([S`\((2,4,6)\)`, S`\((1,2,4)\)`, S`\((3,2,1)\)`, S`\((1,1,1)\)`], 0),
      "Multiples of the only row.", [S`\((2,4,6)=2(1,2,3)\).`], S`\((2,4,6)\)`),
  ]),

  ...hard([
    ["Row operations preserve the row space", S`Prove that \(R_i\to R_i+cR_j\) (\(j\ne i\)) does not change the row space.`,
      [S`The new rows are the old rows except \(\vec r_i'=\vec r_i+c\vec r_j\), a combination of old rows: \(\operatorname{Row}B\subseteq\operatorname{Row}A\).`, S`Conversely \(\vec r_i=\vec r_i'-c\vec r_j\), and \(\vec r_j\) is still a row of \(B\): every old row is a combination of new rows, so \(\operatorname{Row}A\subseteq\operatorname{Row}B\).`],
      S`\(\operatorname{Row}B=\operatorname{Row}A\); swaps and nonzero scalings are handled the same way`],
    ["Null space and row space meet only in 0", S`Prove that \(\operatorname{Null}A\cap\operatorname{Row}A=\{\vec 0\}\).`,
      [S`Let \(\vec x\) be in both. By the theorem, \(\vec x\) is orthogonal to every vector of \(\operatorname{Row}A\) — including itself.`, S`So \(\vec x\cdot\vec x=\|\vec x\|^2=0\), hence \(\vec x=\vec 0\).`],
      S`the only common vector is \(\vec 0\)`, nullRow],
  ], [
    q("hard", S`For which \(k\) is \((1,1,k)\) in the null space of \(${am([[1, -3, 2]], false)}\)?`, num(1),
      "Multiply.", [S`\(1-3+2k=0\).`], S`\(1\)`),
    q("hard", S`For which \(h\) is \((1,2,h)\) in the column space of \(${am([[1, 1], [1, 2], [1, 3]], false)}\)?`, num(3),
      "c₁ + c₂ = 1, c₁ + 2c₂ = 2.", [S`\(c_2=1\), \(c_1=0\); third entry \(0+3=3\).`], S`\(3\)`),
    q("hard", S`\(A\) is \(5\times3\). In which \(\mathbb R^k\) does \(\operatorname{Col}A\) live? Give \(k\).`, num(5),
      "One entry per row.", [S`The columns have 5 entries.`], S`\(5\)`),
  ]),

  wrapUp({
    qas: [
      ["What is Ax?", "The combination x₁a₁ + … + xₙaₙ of the columns of A; entry i is (row i)·x."],
      ["What are the three fundamental subspaces?", "Null A = solutions of Ax = 0 (in Rⁿ), Col A = span of the columns (in Rᵐ), Row A = span of the rows (in Rⁿ)."],
      ["When is Ax = b consistent?", "Exactly when b is in Col A."],
      ["How do I test membership?", "Null: multiply. Col: row reduce [A | b]. Row: row reduce [Aᵀ | y]."],
      ["What do row operations preserve?", "The row space and the null space — but not the column space."],
    ],
    summary: [
      "Ax = x₁a₁ + … + xₙaₙ.",
      "Null A ⊆ Rⁿ, Col A ⊆ Rᵐ, Row A ⊆ Rⁿ — all subspaces.",
      "Ax = b consistent ⇔ b ∈ Col A.",
      "Row operations keep Row A and Null A, change Col A.",
      "Null A ⊥ Row A, and they meet only in 0.",
    ],
    next: "5.7 reads bases of all three subspaces from one RREF and proves the rank–nullity theorem: rank A + dim Null A = n.",
  }),
];

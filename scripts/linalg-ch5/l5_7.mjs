// LINALG1 5.7 — Bases for the Fundamental Subspaces and the Rank–Nullity Theorem: from one RREF, a basis of Null A
// (one vector per free variable), of Col A (the pivot columns of A itself) and of Row A (the nonzero rows of the
// RREF); dim Col A = dim Row A = rank A; rank A + dim Null A = n; and what this says about Ax = b.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, cv, am, steps } from "./lib.mjs";
import { vfig, scene3, a3, pt3, line3, patch3 } from "./vecfig.mjs";

export const TITLE = "5.7 Bases for the Fundamental Subspaces and the Rank–Nullity Theorem";
export const ID = "11a10001-0001-4001-8001-000000000507";

const S = String.raw;
/** n = rank + nullity, as a bar of columns */
const bar = (() => {
  const polys = [], texts = [];
  for (let j = 0; j < 5; j++) {
    const piv = j === 0 || j === 2;
    polys.push({ pts: [[j, 0], [j + 0.9, 0], [j + 0.9, 1.4], [j, 1.4]], fill: piv ? "#fef3c7" : "#e0e7ff", stroke: piv ? "amber" : "blue" });
    texts.push({ x: j + 0.45, y: 0.6, t: piv ? "pivot" : "free", color: piv ? "amber" : "blue" });
  }
  texts.push({ x: 2.45, y: 2, t: "n = 5 columns = 2 pivots (rank) + 3 free (nullity)", color: "black" });
  return vfig({ view: { xmin: -0.3, xmax: 5.2, ymin: -0.4, ymax: 2.5 }, grid: false, axes: false, width: 320, polys, texts }, "every column of A is either a pivot column or a free column");
})();
const notColR = vfig(scene3(2.6, { segs: [line3([0, 0, 0], [1, 2, 1], -0.9, 0.9, "violet")], arrows: [a3([0, 0, 0], [1, 2, 1], { color: "blue", label: "(1, 2, 1): column of A", off: 14 }), a3([0, 0, 0], [1, 0, 0], { color: "red", label: "(1, 0, 0): column of R", off: -14 })], points: [pt3([0, 0, 0], "0", { color: "black", dx: -14 })] }),
  "Col A is the violet line; the RREF's column (1, 0, 0) is not on it");
const rowNull = vfig(scene3(2.4, { polys: [patch3([0, 0, 0], [1, 0, 1], [0, 1, 1], 0.9, "#ede9fe", "violet", 0.5)], segs: [line3([0, 0, 0], [-1, -1, 1], -1, 1, "red")], arrows: [a3([0, 0, 0], [1, 0, 1], { color: "violet", label: "(1, 0, 1)", off: 14 }), a3([0, 0, 0], [0, 1, 1], { color: "violet", label: "(0, 1, 1)", off: -14 })], points: [pt3([-1, -1, 1], "Null A", { color: "red" }), pt3([0, 0, 0], "0", { color: "black", dx: -14 })] }),
  "Row A (plane, dimension 2) and Null A (line, dimension 1) in ℝ³: 2 + 1 = 3");

export const blocks = () => [
  intro({
    icon: "🗝️",
    title: "Bases for the Fundamental Subspaces and the Rank–Nullity Theorem",
    overview: S`One row reduction of \(A\) answers everything about its three fundamental subspaces. The free variables of the RREF give a basis of the <strong>null space</strong>; the pivot columns tell you which <em>original</em> columns form a basis of the <strong>column space</strong>; and the nonzero rows of the RREF form a basis of the <strong>row space</strong>. Counting pivots and free variables gives the most important equation of the chapter, the <strong>rank–nullity theorem</strong>: \(\operatorname{rank}A+\dim\operatorname{Null}A=n\). It explains at a glance when \(A\vec x=\vec b\) is always solvable and when its solutions are unique.`,
    goals: [
      "find bases of \\(\\operatorname{Null}A\\), \\(\\operatorname{Col}A\\) and \\(\\operatorname{Row}A\\) from the RREF;",
      "explain why the column-space basis comes from the original columns of \\(A\\);",
      "prove \\(\\dim\\operatorname{Col}A=\\dim\\operatorname{Row}A=\\operatorname{rank}A\\);",
      "state and prove the rank–nullity theorem;",
      "use rank and nullity to answer questions about \\(A\\vec x=\\vec b\\).",
    ],
    outcomes: "the fundamental subspaces of a matrix: bases, dimensions, rank–nullity",
    prior: [
      [S`Where do \(\operatorname{Null}A\), \(\operatorname{Col}A\), \(\operatorname{Row}A\) live for a \(3\times5\) matrix?`, S`\(\mathbb R^5\), \(\mathbb R^3\), \(\mathbb R^5\) (5.6).`],
      [S`Do row operations change the row space? The column space?`, S`Row space: no. Column space: usually yes (5.6).`],
      [S`What is \(\operatorname{rank}A\)?`, S`The number of pivots in an echelon form of \(A\) (2.5).`],
    ],
    words: [
      ["Rank", "number of pivots of \\(A\\)", "\\(\\operatorname{rank}A=\\dim\\operatorname{Col}A\\)"],
      ["Nullity", "\\(\\dim\\operatorname{Null}A\\) = number of free variables", "\\(n-\\operatorname{rank}A\\)"],
      ["Pivot column", "a column of the RREF containing a leading 1", "gives a basis vector of Col A"],
      ["Rank–nullity", "\\(\\operatorname{rank}A+\\operatorname{nullity}A=n\\)", "\\(2+3=5\\)"],
      ["Full column rank", "\\(\\operatorname{rank}A=n\\): \\(\\operatorname{Null}A=\\{\\vec 0\\}\\)", "unique solutions"],
    ],
  }),

  section("📌 Three bases from one RREF", S`
  <p>Row reduce \(A\) to its RREF \(R\). Then:</p>
  <ol>
  <li><strong>\(\operatorname{Null}A\):</strong> solve \(R\vec x=\vec 0\) (same solutions as \(A\vec x=\vec 0\)); give each free variable a parameter and split by parameter. One basis vector per free variable.</li>
  <li><strong>\(\operatorname{Col}A\):</strong> the columns <em>of \(A\)</em> in the positions of the pivot columns of \(R\).</li>
  <li><strong>\(\operatorname{Row}A\):</strong> the nonzero rows <em>of \(R\)</em> (row operations do not change the row space).</li>
  </ol>
  ${theorem("why the pivot columns of A", S`The pivot columns of \(A\) form a basis of \(\operatorname{Col}A\).`, S`\(A\) and \(R\) have the same null space, and a vector in the null space is exactly a list of coefficients of a dependence among the columns. So every linear relation among the columns of \(R\) holds for the columns of \(A\), and conversely. In \(R\) the pivot columns are distinct standard vectors (independent), and every other column is a combination of the pivot columns before it. The same relations hold in \(A\): its pivot columns are independent and span \(\operatorname{Col}A\).`)}
  ${keyIdea(S`Row operations preserve <strong>relations</strong> among the columns, not the columns themselves. Read which columns, then take them from \(A\).`)}`),

  section("📌 Rank and the rank–nullity theorem", S`
  ${theorem("dimensions", S`\(\dim\operatorname{Col}A=\dim\operatorname{Row}A=\operatorname{rank}A\). In particular \(\operatorname{rank}A^T=\operatorname{rank}A\).`, S`The column-space basis has one vector per pivot; so does the row-space basis (the nonzero rows of \(R\) each contain one leading 1, in different columns, so they are independent). Since \(\operatorname{Row}A=\operatorname{Col}A^T\), this also gives \(\operatorname{rank}A^T=\dim\operatorname{Col}A^T=\dim\operatorname{Row}A=\operatorname{rank}A\).`)}
  ${theorem("rank–nullity", S`For every \(m\times n\) matrix \(A\): \(\operatorname{rank}A+\dim\operatorname{Null}A=n\).`, S`Each of the \(n\) columns of the RREF is either a pivot column (there are \(\operatorname{rank}A\) of them) or a free column (one basis vector of \(\operatorname{Null}A\) each).`)}
  <div style="text-align:center;">${bar}</div>
  <p><strong>Consequences for \(A\vec x=\vec b\).</strong> Consistent for <em>every</em> \(\vec b\) ⇔ \(\operatorname{Col}A=\mathbb R^m\) ⇔ \(\operatorname{rank}A=m\). Solutions (when they exist) are unique ⇔ \(\operatorname{Null}A=\{\vec 0\}\) ⇔ \(\operatorname{rank}A=n\).</p>`),

  section("📌 Explore", S`<p>Choose a matrix and move \(k\). The explorer reads the pivot columns, takes the column-space basis from \(A\), the row-space basis from \(R\), builds a null-space basis from the free variables, and checks rank–nullity.</p>`),
  widget("laFundamental", { init: { set: "b" } }),

  section("📌 Common mistakes", watchOut([
    "Col A: take the columns from A, not from the RREF. Row A: take the nonzero rows of the RREF.",
    "A null-space basis has one vector per FREE variable; a column-space basis one per PIVOT.",
    "rank + nullity = n (columns), not m (rows).",
    "dim Row A = dim Col A even though they live in different spaces (Rⁿ and Rᵐ).",
    "Null A = {0} has dimension 0 and the empty basis — not the basis {0}.",
  ])),

  examples([
    ["All three bases", S`Find bases of \(\operatorname{Null}A\), \(\operatorname{Col}A\) and \(\operatorname{Row}A\) for \(A=${am([[1, 2, 0, 1, 3], [2, 4, 1, 4, 7], [1, 2, 1, 3, 4]], false)}\).`,
      [...steps([[1, 2, 0, 1, 3], [2, 4, 1, 4, 7], [1, 2, 1, 3, 4]], [
        [S`Clear column 1.`, ["R2-2R1", "R3-R1"]],
        [S`Column 2 has no pivot; the pivot of column 3 is the 1 in row 2. Clear below it. Column 3 already has 0 above the pivot, so this is the RREF.`, ["R3-R2"]],
      ], { bar: false, intro: "Row reduce A" }).steps,
        S`Pivot columns 1 and 3; free \(x_2=r\), \(x_4=s\), \(x_5=t\). Row 1: \(x_1=-2r-s-3t\); row 2: \(x_3=-2s-t\).`,
        S`<strong>Null:</strong> \(\vec x=r(-2,1,0,0,0)+s(-1,0,-2,1,0)+t(-3,0,-1,0,1)\): basis of 3 vectors.`,
        S`<strong>Col:</strong> columns 1 and 3 of \(A\): \(\{(1,2,1),(0,1,1)\}\). <strong>Row:</strong> nonzero rows of the RREF: \(\{(1,2,0,1,3),(0,0,1,2,1)\}\).`,
        S`Check: rank \(2\) + nullity \(3\) = \(5\) = number of columns ✓.`],
      S`Null: 3 vectors; Col: \(\{(1,2,1),(0,1,1)\}\); Row: \(\{(1,2,0,1,3),(0,0,1,2,1)\}\)`, bar],
    ["A tall matrix", S`Find bases of the three subspaces of \(A=${am([[1, 1, 2], [2, 3, 5], [1, 0, 1], [0, 1, 1]], false)}\) and check rank–nullity.`,
      [...steps([[1, 1, 2], [2, 3, 5], [1, 0, 1], [0, 1, 1]], [
        [S`Clear column 1.`, ["R2-2R1", "R3-R1"]],
        [S`Clear column 2 (above and below the pivot of row 2).`, ["R1-R2", "R3+R2", "R4-R2"]],
      ], { bar: false, intro: "Row reduce A" }).steps,
        S`Pivots in columns 1, 2; \(x_3=t\) free: \(x_1=-t\), \(x_2=-t\). <strong>Null:</strong> \(\{(-1,-1,1)\}\).`,
        S`<strong>Col:</strong> columns 1, 2 of \(A\): \(\{(1,2,1,0),(1,3,0,1)\}\subseteq\mathbb R^4\). <strong>Row:</strong> \(\{(1,0,1),(0,1,1)\}\subseteq\mathbb R^3\).`,
        S`rank \(2\) + nullity \(1\) = \(3\) ✓. And \((-1,-1,1)\cdot(1,0,1)=0\), \((-1,-1,1)\cdot(0,1,1)=0\): null ⊥ row ✓.`],
      S`Null \(\{(-1,-1,1)\}\); Col \(\{(1,2,1,0),(1,3,0,1)\}\); Row \(\{(1,0,1),(0,1,1)\}\)`, rowNull],
    ["Full rank", S`Describe the fundamental subspaces of \(A=${am([[1, 2, 1], [2, 5, 3], [1, 0, 4]], false)}\).`,
      [...steps([[1, 2, 1], [2, 5, 3], [1, 0, 4]], [
        [S`Clear column 1.`, ["R2-2R1", "R3-R1"]],
        [S`Clear column 2.`, ["R3+2R2"]],
      ], { bar: false, intro: "Row reduce A" }).steps,
        S`Three pivots: \(\operatorname{rank}A=3\). Nullity \(=3-3=0\): \(\operatorname{Null}A=\{\vec 0\}\).`, S`\(\dim\operatorname{Col}A=3\) inside \(\mathbb R^3\), so \(\operatorname{Col}A=\mathbb R^3\); likewise \(\operatorname{Row}A=\mathbb R^3\).`, S`So \(A\vec x=\vec b\) has exactly one solution for every \(\vec b\).`],
      S`Null \(=\{\vec 0\}\), Col \(=\) Row \(=\mathbb R^3\)`],
    ["Rank–nullity without row reducing", S`\(A\) is \(5\times8\) and \(\dim\operatorname{Null}A=4\). Find \(\operatorname{rank}A\), \(\dim\operatorname{Row}A\), and decide whether \(A\vec x=\vec b\) is consistent for every \(\vec b\in\mathbb R^5\).`,
      [S`Rank–nullity: \(\operatorname{rank}A=8-4=4\).`, S`\(\dim\operatorname{Row}A=\dim\operatorname{Col}A=4\).`, S`\(\operatorname{Col}A\) is a 4-dimensional subspace of \(\mathbb R^5\), so it is not all of \(\mathbb R^5\): some \(\vec b\) give an inconsistent system.`],
      S`rank 4; \(\dim\operatorname{Row}A=4\); not consistent for every \(\vec b\)`],
    ["Why not the RREF's columns", S`For \(A=${am([[1, 2], [2, 4], [1, 2]], false)}\), compare \(\operatorname{Col}A\) with the span of the columns of its RREF.`,
      [...steps([[1, 2], [2, 4], [1, 2]], [[S`Clear column 1.`, ["R2-2R1", "R3-R1"]]], { bar: false, intro: "Row reduce A" }).steps,
        S`Pivot column: column 1. So \(\operatorname{Col}A=\operatorname{Span}\{(1,2,1)\}\), a line in \(\mathbb R^3\).`, S`The RREF's pivot column is \((1,0,0)\), which is <em>not</em> a multiple of \((1,2,1)\): the column space of the RREF is a different line.`],
      S`\(\operatorname{Col}A=\operatorname{Span}\{(1,2,1)\}\ne\operatorname{Span}\{(1,0,0)\}\)`, notColR],
  ]),

  practice([
    q("rank", S`The RREF of \(A\) has exactly 2 nonzero rows. What is \(\operatorname{rank}A\)?`, num(2),
      "Count pivots.", [S`Each nonzero row has one pivot.`], S`\(2\)`),
    q("nullity", S`\(A\) is \(4\times6\) with \(\operatorname{rank}A=3\). Find \(\dim\operatorname{Null}A\).`, num(3),
      "n − rank.", [S`\(6-3\).`], S`\(3\)`),
    q("col basis", S`A basis of \(\operatorname{Col}A\) is formed by:`, choice(["the columns of A in the pivot positions", "the pivot columns of the RREF", "the nonzero rows of the RREF", "the free columns of A"], 0),
      "Row operations change columns.", [S`Relations among columns are preserved; the columns themselves are not.`], "the pivot columns of A"),
    q("row vs col", S`For every matrix, \(\dim\operatorname{Row}A\) and \(\dim\operatorname{Col}A\) are:`, choice(["always equal", "equal only for square matrices", "never equal", "equal only when A is invertible"], 0),
      "Both equal the rank.", [S`Each basis has one vector per pivot.`], "always equal"),
    q("from RREF", S`The RREF of \(A\) is \(${am([[1, 0, 2, 0], [0, 1, 3, 0], [0, 0, 0, 1]], false)}\). Find \(\dim\operatorname{Null}A\).`, num(1),
      "Free columns.", [S`Only column 3 is free.`], S`\(1\)`),
  ]),

  ...hard([
    ["A parameter changes the rank", S`For \(A=${am([[1, 1, 1, 1], [1, 2, 3, 4], [2, 3, 4, "k"]], false)}\), find the rank and nullity for every \(k\), and bases of \(\operatorname{Null}A\) when \(k=5\).`,
      [S`\(R_2\to R_2-R_1\), \(R_3\to R_3-2R_1\): \[${am([[1, 1, 1, 1], [0, 1, 2, 3], [0, 1, 2, "k-2"]], false)}\]`,
        S`\(R_3\to R_3-R_2\): \[\longrightarrow\ ${am([[1, 1, 1, 1], [0, 1, 2, 3], [0, 0, 0, "k-5"]], false)}\]`,
        S`\(k\ne5\): three pivots, rank 3, nullity \(4-3=1\). \(k=5\): rank 2, nullity 2.`,
        S`\(k=5\): \(R_1\to R_1-R_2\) gives \((1,0,-1,-2)\). Free \(x_3=s\), \(x_4=t\): \(x_1=s+2t\), \(x_2=-2s-3t\). Basis \(\{(1,-2,1,0),(2,-3,0,1)\}\); check \((1,1,1,1)\cdot(2,-3,0,1)=0\) ✓.`],
      S`rank 3, nullity 1 for \(k\ne5\); rank 2, nullity 2 for \(k=5\)`],
    ["Wide and tall matrices", S`Use rank–nullity to prove: (a) if \(A\) is \(m\times n\) with \(m\lt n\), then \(A\vec x=\vec 0\) has nontrivial solutions; (b) if \(m\gt n\), then \(A\vec x=\vec b\) is inconsistent for some \(\vec b\).`,
      [S`(a) \(\operatorname{rank}A\le m\lt n\), so \(\dim\operatorname{Null}A=n-\operatorname{rank}A\ge1\).`, S`(b) \(\operatorname{rank}A\le n\lt m\), so \(\operatorname{Col}A\) has dimension less than \(m\) and is not all of \(\mathbb R^m\); any \(\vec b\) outside it gives an inconsistent system.`],
      S`wide matrices have nontrivial null spaces; tall matrices miss some right-hand sides`],
  ], [
    q("hard", S`\(A\) is \(6\times9\) with \(\operatorname{rank}A=4\). Find \(\dim\operatorname{Null}A\).`, num(5),
      "n − rank.", [S`\(9-4\).`], S`\(5\)`),
    q("hard", S`\(A\) is \(7\times4\) and \(\operatorname{Null}A=\{\vec 0\}\). Find \(\operatorname{rank}A\).`, num(4),
      "Nullity 0.", [S`\(\operatorname{rank}A=4-0\).`], S`\(4\)`),
    q("hard", S`\(A\) is \(3\times5\) with \(\operatorname{rank}A=3\). Is \(A\vec x=\vec b\) consistent for every \(\vec b\in\mathbb R^3\)?`, choice(["yes", "no", "only for b = 0", "it depends on b"], 0),
      "Compare the rank with m.", [S`\(\dim\operatorname{Col}A=3=m\), so \(\operatorname{Col}A=\mathbb R^3\).`], "yes"),
  ]),

  wrapUp({
    qas: [
      ["How do I get a basis of Null A?", "Solve Ax = 0 from the RREF and split the general solution by free parameter — one vector per free variable."],
      ["How do I get a basis of Col A?", "Find the pivot columns of the RREF and take those columns of A itself."],
      ["How do I get a basis of Row A?", "Take the nonzero rows of the RREF."],
      ["What is the rank–nullity theorem?", "rank A + dim Null A = n, the number of columns: every column is a pivot column or a free column."],
      ["What do rank and nullity say about Ax = b?", "Consistent for every b exactly when rank A = m; unique solutions exactly when nullity is 0 (rank A = n)."],
    ],
    summary: [
      "Null A: free variables of the RREF → basis.",
      "Col A: pivot columns OF A → basis.",
      "Row A: nonzero rows of the RREF → basis.",
      "dim Col A = dim Row A = rank A = rank Aᵀ.",
      "rank A + nullity A = n.",
    ],
    next: "This completes the chapter on subspaces. The ideas — bases, dimension and the fundamental subspaces — return in every later chapter.",
  }),
];

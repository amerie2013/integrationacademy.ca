// LINALG1 2.2 — Augmented Matrices and Elementary Row Operations: coefficient and augmented matrices, the three
// elementary row operations and their inverses, why they preserve the solution set (with proof), row-equivalent
// matrices, and solving small systems by reducing to triangular form.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, definition, theorem, vec, am, sys, steps } from "./lib.mjs";
import { vfig, lineSeg } from "./vecfig.mjs";

export const TITLE = "2.2 Augmented Matrices and Elementary Row Operations";
export const ID = "11a10001-0001-4001-8001-000000000202";

const S = String.raw;
const V = { xmin: -1, xmax: 6, ymin: -1, ymax: 6 };
const before = vfig({ view: V, step: 1, width: 260, segs: [lineSeg(1, 1, 5, V, "blue"), lineSeg(2, -1, 1, V, "red")], points: [{ x: 2, y: 3, label: "(2, 3)", color: "amber" }] }, "x₁ + x₂ = 5 and 2x₁ − x₂ = 1");
const after = vfig({ view: V, step: 1, width: 260, segs: [lineSeg(1, 1, 5, V, "blue"), lineSeg(0, -3, -9, V, "red")], points: [{ x: 2, y: 3, label: "(2, 3)", color: "amber" }] }, "after R₂ → R₂ − 2R₁: −3x₂ = −9");

export const blocks = () => [
  intro({
    icon: "🔢",
    title: "Augmented Matrices and Elementary Row Operations",
    overview: S`Writing \(x_1, x_2, \dots\) and plus signs over and over is wasteful: all the information in a linear system is in its numbers. The <strong>augmented matrix</strong> keeps just the coefficients and constants in a rectangular array, one row per equation. On that array we use three <strong>elementary row operations</strong> — swap two rows, scale a row by a nonzero number, add a multiple of one row to another. Each one changes the equations but not the solutions, which is exactly why they are allowed. This lesson builds the tools; the next two turn them into an algorithm.`,
    goals: [
      "write the coefficient matrix, constant vector and augmented matrix of a system, and recover a system from its matrix;",
      "perform the three elementary row operations and name the inverse of each;",
      "explain and prove why row operations do not change the solution set;",
      "use row operations to reduce a system to triangular form and solve it;",
      "recognise an inconsistent system from a row of the form [0 … 0 | c] with c ≠ 0.",
    ],
    outcomes: "systems of linear equations: augmented matrices and elementary row operations",
    prior: [
      [S`What is a solution of a system?`, S`A vector that satisfies every equation (2.1).`],
      [S`If \(x+y=5\) and \(2x-y=1\), what does adding the equations give?`, S`\(3x=6\): adding equations keeps every common solution.`],
      [S`Solve \(x_1+2x_2=7,\ 3x_2=6\).`, S`Back substitution: \(x_2=2\), \(x_1=3\).`],
    ],
    words: [
      ["Coefficient matrix", "the \\(m\\times n\\) array of the \\(a_{ij}\\)", "row \\(i\\) holds equation \\(i\\)"],
      ["Augmented matrix", "\\([A\\mid\\vec b]\\): coefficients plus the constant column", "size \\(m\\times(n+1)\\)"],
      ["Entry \\(a_{ij}\\)", "row \\(i\\), column \\(j\\)", "the coefficient of \\(x_j\\) in equation \\(i\\)"],
      ["Elementary row operation", "swap, scale by \\(c\\ne0\\), or add \\(c\\) times another row", "\\(R_2\\to R_2-3R_1\\)"],
      ["Row equivalent", "related by a sequence of row operations", "\\(A\\sim B\\)"],
    ],
  }),

  section("📌 From a system to a matrix", S`
  ${definition("coefficient and augmented matrices", S`For the system of \(m\) equations in \(n\) unknowns \(a_{i1}x_1+\dots+a_{in}x_n=b_i\), the <strong>coefficient matrix</strong> is the \(m\times n\) array \(A=[a_{ij}]\), the <strong>constant vector</strong> is \(\vec b=(b_1,\dots,b_m)\), and the <strong>augmented matrix</strong> is the \(m\times(n+1)\) array \([A\mid\vec b]\).`)}
  <p>Each row is one equation; each column before the bar belongs to one unknown. A missing unknown has coefficient <strong>0</strong> — it must still be written. For example</p>
  \[${sys([[3, 0, -1, 4], [1, 2, 5, 0]])}\qquad\longleftrightarrow\qquad ${am([[3, 0, -1, 4], [1, 2, 5, 0]])}\]
  ${keyIdea(S`The augmented matrix is the system with the names of the unknowns, the plus signs and the equals signs erased. Nothing is lost as long as columns stay in order.`)}`),

  section("📌 The three elementary row operations", S`
  ${table(["Operation", "Notation", "Undone by"], [
    ["swap rows \\(i\\) and \\(j\\)", "\\(R_i\\leftrightarrow R_j\\)", "the same swap"],
    ["multiply row \\(i\\) by \\(c\\ne0\\)", "\\(R_i\\to cR_i\\)", "\\(R_i\\to\\tfrac1cR_i\\)"],
    ["add \\(c\\) times row \\(j\\) to row \\(i\\) (\\(j\\ne i\\))", "\\(R_i\\to R_i+cR_j\\)", "\\(R_i\\to R_i-cR_j\\)"],
  ])}
  <p>On equations these are: list the equations in another order; multiply an equation by a nonzero number; add a multiple of one equation to another. Two matrices are <strong>row equivalent</strong>, \(A\sim B\), if a sequence of row operations turns one into the other.</p>
  ${theorem("row operations preserve solutions", S`If \([A\mid\vec b]\sim[C\mid\vec d]\), the two systems have exactly the same solution set.`, S`It is enough to check one operation. A swap only reorders the equations. Scaling: if \(\vec s\) satisfies equation \(i\), it satisfies \(c\) times it; and because \(c\ne0\) we can divide back. Adding: if \(\vec s\) satisfies equations \(i\) and \(j\), it satisfies their combination "equation \(i\) + \(c\cdot\)equation \(j\)", and equation \(j\) is unchanged. Conversely, the new system can be turned back into the old one by the inverse operation, so every solution of the new system solves the old one. The solution sets are therefore equal.`)}
  <p>Geometrically, a row operation replaces the lines (or planes) by different ones — but through exactly the same common points:</p>
  <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;">${before}${after}</div>`),

  section("📌 Explore", S`<p>Choose a system and apply operations. Aim for zeros below the first entry of row 1, then below the first nonzero entry of row 2. Switch to the <em>equations</em> view to see what each operation does to the system. Try multiplying a row by 0 — the lab refuses, because that operation cannot be undone.</p>`),
  widget("laRowOps", { init: { set: "a" } }),

  section("📌 Solving with row operations", S`
  <p>The plan: use the first row to create zeros in column 1 below it, then the second row to create zeros in column 2 below it, and so on. The result is triangular, and back substitution finishes the job. If a row turns into \([\,0\ \cdots\ 0\mid c\,]\) with \(c\ne0\), it says \(0=c\): the system is <strong>inconsistent</strong>.</p>
  ${watchOut([
    "Write a 0 for every missing unknown, or the columns get out of line.",
    "R₂ → R₂ − 3R₁ changes row 2 only; row 1 stays as it was.",
    "Multiplying a row by 0 is not a row operation — it erases an equation and cannot be undone.",
    "Replacing a row by a multiple of a different row (R₂ → 3R₁) is not allowed: the old equation is lost.",
    "Do row operations on the whole row, including the constant after the bar.",
  ])}`),

  examples([
    ["Writing the matrices", S`Write the coefficient matrix, constant vector and augmented matrix of \[${sys([[2, 0, -1, 5], [1, 4, 1, 0], [0, -3, 2, 7]])}\]`,
      [S`Order the unknowns \(x_1,x_2,x_3\); put 0 where an unknown is missing.`, S`\(A=${am([[2, 0, -1], [1, 4, 1], [0, -3, 2]], false)}\), \(\vec b=(5,0,7)\).`],
      S`\([A\mid\vec b]=${am([[2, 0, -1, 5], [1, 4, 1, 0], [0, -3, 2, 7]])}\)`],
    ["From a matrix back to a system", S`Which system has augmented matrix \(${am([[1, -2, 0, 3, 4], [0, 1, 5, -1, 2]])}\)?`,
      [S`Five columns: four unknowns \(x_1,\dots,x_4\) and the constants.`, S`Row 1: \(x_1-2x_2+3x_4=4\). Row 2: \(x_2+5x_3-x_4=2\).`],
      S`two equations in four unknowns: \(x_1-2x_2+3x_4=4,\ x_2+5x_3-x_4=2\)`],
    ["Naming an operation and its inverse", S`Which row operation turns \(${am([[1, 3, 2], [0, 1, -1], [2, 5, 1]])}\) into \(${am([[1, 3, 2], [0, 1, -1], [0, -1, -3]])}\)? Which operation undoes it?`,
      [S`Only row 3 changed: \((2,5,1)\to(0,-1,-3)\).`, S`\((2,5,1)-2(1,3,2)=(0,-1,-3)\), so the operation is \(R_3\to R_3-2R_1\).`, S`To undo it, add the row back: \(R_3\to R_3+2R_1\).`],
      S`\(R_3\to R_3-2R_1\); undone by \(R_3\to R_3+2R_1\)`],
    ["Solving a 3 × 3 system", S`Solve \[${sys([[1, 2, 1, 8], [2, 5, 4, 24], [-1, 1, 3, 10]])}\]`,
      [...steps([[1, 2, 1, 8], [2, 5, 4, 24], [-1, 1, 3, 10]], [
        [S`Use row 1 (pivot 1) to create zeros below it in column 1: subtract 2 times row 1 from row 2, and add row 1 to row 3.`, ["R2-2R1", "R3+R1"]],
        [S`Use row 2 (pivot 1 in column 2) to clear the 3 below it.`, ["R3-3R2"]],
      ]).steps, S`The matrix is now triangular. Back substitution, from the last row up: \(-2x_3=-6\) gives \(x_3=3\); \(x_2+2(3)=8\) gives \(x_2=2\); \(x_1+2(2)+3=8\) gives \(x_1=1\).`, S`Check in the original equations: \(1+4+3=8\) ✓, \(2+10+12=24\) ✓, \(-1+2+9=10\) ✓.`],
      S`\((x_1,x_2,x_3)=(1,2,3)\)`],
    ["Spotting an inconsistent system", S`Reduce \(${am([[1, -1, 2, 3], [2, 1, 1, 4], [3, 0, 3, 5]])}\) and decide whether the system has a solution.`,
      [...steps([[1, -1, 2, 3], [2, 1, 1, 4], [3, 0, 3, 5]], [
        [S`Clear column 1 below the pivot 1: subtract 2 times row 1 from row 2 and 3 times row 1 from row 3.`, ["R2-2R1", "R3-3R1"]],
        [S`Rows 2 and 3 now have the same left side; subtract row 2 from row 3.`, ["R3-R2"]],
      ], { intro: "Start from the augmented matrix" }).steps, S`The last row is the equation \(0x_1+0x_2+0x_3=-2\), which no vector satisfies. So the whole system has no solution.`],
      S`inconsistent — no solution`],
  ]),

  practice([
    q("an entry", S`For \(x_1-4x_2+2x_3=1,\ 3x_1+x_3=6\), what is the entry in row 2, column 2 of the augmented matrix?`, num(0),
      "Which coefficient sits in row 2, column 2?", [S`Row 2 is equation 2; column 2 is \(x_2\), which does not appear: coefficient 0.`], S`\(0\)`),
    q("which operation", S`Which operation turns \(${am([[1, 2, 3], [4, 5, 6]])}\) into \(${am([[1, 2, 3], [0, -3, -6]])}\)?`, choice([S`\(R_2\to R_2-4R_1\)`, S`\(R_2\to 4R_1-R_2\)`, S`\(R_1\to R_1-4R_2\)`, S`\(R_2\to R_2+4R_1\)`], 0),
      "Row 1 is unchanged.", [S`\((4,5,6)-4(1,2,3)=(0,-3,-6)\).`], S`\(R_2\to R_2-4R_1\)`),
    q("inverse", S`Which operation undoes \(R_2\to R_2+5R_3\)?`, choice([S`\(R_2\to R_2-5R_3\)`, S`\(R_2\to\tfrac15R_2\)`, S`\(R_3\to R_3-5R_2\)`, S`\(R_2\to-R_2+5R_3\)`], 0),
      "Subtract what was added.", ["Row 3 is unchanged, so subtracting 5 times it restores row 2."], S`\(R_2\to R_2-5R_3\)`),
    q("solve", S`Use row operations to solve \(x_1+x_2=5,\ 2x_1-x_2=1\). Enter \((x_1,x_2)\).`, vec(2, 3),
      "R₂ → R₂ − 2R₁.", [...steps([[1, 1, 5], [2, -1, 1]], [[S`Clear the 2 below the first pivot.`, ["R2-2R1"]]]).steps, S`Row 2 says \(-3x_2=-9\), so \(x_2=3\). Row 1: \(x_1+3=5\), so \(x_1=2\).`, S`Check: \(2+3=5\) ✓, \(4-3=1\) ✓.`], S`\((2,3)\)`),
    q("a special row", S`After row operations, a row of an augmented matrix reads \([\,0\ \ 0\ \ 0\mid 4\,]\). The system is:`, choice(["inconsistent", "consistent with one solution", "consistent with infinitely many solutions", "impossible to tell"], 0),
      "Write the row as an equation.", [S`It says \(0x_1+0x_2+0x_3=4\), which no vector satisfies.`], "inconsistent"),
  ]),

  ...hard([
    ["The replacement operation keeps every solution", S`Prove that \(R_i\to R_i+cR_j\) (\(j\ne i\)) does not change the solution set, by showing both inclusions.`,
      [S`Write equation \(k\) as \(\vec a_k\cdot\vec x=b_k\). The new equation \(i\) is \((\vec a_i+c\vec a_j)\cdot\vec x=b_i+cb_j\); the others are unchanged.`, S`Old \(\subseteq\) new: if \(\vec a_i\cdot\vec s=b_i\) and \(\vec a_j\cdot\vec s=b_j\), then \((\vec a_i+c\vec a_j)\cdot\vec s=b_i+cb_j\).`, S`New \(\subseteq\) old: if \(\vec s\) solves the new system, then \(\vec a_i\cdot\vec s=(b_i+cb_j)-c\,\vec a_j\cdot\vec s=(b_i+cb_j)-cb_j=b_i\), using the unchanged equation \(j\).`],
      S`both systems have exactly the same solutions`],
    ["A swap from the other two operations", S`Show that swapping two rows can be done with operations of the other two types only.`,
      [S`Call the rows \(\vec a\) and \(\vec b\). \(R_1\to R_1+R_2\): rows \((\vec a+\vec b,\ \vec b)\).`, S`\(R_2\to R_2-R_1\): \((\vec a+\vec b,\ -\vec a)\). Then \(R_1\to R_1+R_2\): \((\vec b,\ -\vec a)\).`, S`Finally \(R_2\to(-1)R_2\): \((\vec b,\ \vec a)\).`],
      S`four operations of the other two kinds produce \(R_1\leftrightarrow R_2\)`],
  ], [
    q("hard", S`After row operations a system reads \(${am([[1, 2, -1, 4], [0, 1, 3, 5], [0, 0, "k-1", "k+1"]])}\). For which \(k\) is it inconsistent?`, num(1),
      "Which k makes the last row [0 0 0 | nonzero]?", [S`\(k=1\) gives \((0,0,0\mid2)\).`], S`\(1\)`),
    q("hard", S`How many columns does the augmented matrix of 4 equations in 6 unknowns have?`, num(7),
      "One per unknown plus the constants.", [S`\(6+1\).`], S`\(7\)`),
    q("hard", S`Solve \(x_1+x_2+x_3=2,\ x_1+2x_2+3x_3=3,\ x_1+3x_2+6x_3=5\). Enter \((x_1,x_2,x_3)\).`, vec(2, -1, 1),
      "Subtract row 1 from rows 2 and 3, then clear column 2.", [...steps([[1, 1, 1, 2], [1, 2, 3, 3], [1, 3, 6, 5]], [
        [S`Subtract row 1 from rows 2 and 3.`, ["R2-R1", "R3-R1"]],
        [S`Clear the 2 below the pivot of row 2.`, ["R3-2R2"]],
      ]).steps, S`Back substitution: \(x_3=1\); \(x_2+2(1)=1\) gives \(x_2=-1\); \(x_1-1+1=2\) gives \(x_1=2\).`, S`Check row 3 of the original: \(2-3+6=5\) ✓.`], S`\((2,-1,1)\)`),
  ]),

  wrapUp({
    qas: [
      ["Why use an augmented matrix?", "It keeps only the numbers, so row operations are faster to write and harder to get wrong."],
      ["What are the three row operations?", "Swap two rows; multiply a row by a nonzero number; add a multiple of one row to another row."],
      ["Why don't row operations change the solutions?", "Every solution of the old system satisfies the new one, and each operation can be undone, so the reverse is true as well."],
      ["Why is multiplying a row by 0 not allowed?", "It turns an equation into 0 = 0 and cannot be undone, so solutions could be gained."],
      ["How do I recognise 'no solution'?", "A row [0 … 0 | c] with c ≠ 0 says 0 = c."],
    ],
    summary: [
      "Augmented matrix [A | b]: one row per equation, one column per unknown, plus the constants.",
      "Row operations: Rᵢ ↔ Rⱼ, Rᵢ → cRᵢ (c ≠ 0), Rᵢ → Rᵢ + cRⱼ.",
      "Each is reversible, so row-equivalent systems have the same solutions.",
      "Create zeros below each leading entry, then back substitute.",
      "[0 … 0 | c] with c ≠ 0 means inconsistent.",
    ],
    next: "2.3 defines the target shapes — row echelon form and reduced row echelon form — and how to read every solution from them.",
  }),
];

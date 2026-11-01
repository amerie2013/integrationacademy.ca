// LINALG1 2.3 — Row Echelon Form and Reduced Row Echelon Form: the two target shapes, leading entries, pivot
// positions and pivot columns, uniqueness of the RREF (REF is not unique), and reading every solution from the
// RREF: basic and free variables, parametric and vector form, and the inconsistency test.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, definition, theorem, vec, am, steps } from "./lib.mjs";

export const TITLE = "2.3 Row Echelon Form and Reduced Row Echelon Form";
export const ID = "11a10001-0001-4001-8001-000000000203";

const S = String.raw;
/** staircase picture of an echelon pattern: cells "p" (pivot), "1" (leading 1), "*" (any), "0"; bar before the last column */
function stair(rows, caption) {
  const m = rows.length, n = rows[0].length, c = 34, W = n * c + 24, H = m * c + 16;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H + 22}" width="${W}" height="${H + 22}" font-family="Arial, sans-serif" style="max-width:100%;height:auto;"><rect width="${W}" height="${H + 22}" fill="#fff"/>`;
  const piv = [];
  rows.forEach((r, i) => r.forEach((x, j) => {
    const X = 12 + j * c, Y = 8 + i * c;
    const isP = x === "p" || x === "1";
    if (isP) piv.push([i, j]);
    s += `<rect x="${X + 2}" y="${Y + 2}" width="${c - 4}" height="${c - 4}" rx="5" fill="${isP ? "#fde68a" : x === "0" ? "#f8fafc" : "#e0e7ff"}" stroke="${isP ? "#b45309" : "#cbd5e1"}"/>`;
    s += `<text x="${X + c / 2}" y="${Y + c / 2 + 6}" font-size="17" font-weight="700" text-anchor="middle" fill="${isP ? "#92400e" : x === "0" ? "#94a3b8" : "#3730a3"}">${x === "p" ? "■" : x}</text>`;
  }));
  s += `<line x1="${12 + (n - 1) * c}" y1="4" x2="${12 + (n - 1) * c}" y2="${H + 4}" stroke="#0f172a" stroke-width="2"/>`;
  // the staircase under the pivots
  let d = "";
  piv.forEach(([i, j], k) => { const X = 12 + j * c, Y = 8 + (i + 1) * c; d += `${k ? "L" : "M"}${X},${8 + i * c} L${X},${Y} L${X + c},${Y} `; });
  s += `<path d="${d}" fill="none" stroke="#be123c" stroke-width="2.4"/>`;
  s += `<text x="${W / 2}" y="${H + 18}" font-size="13" text-anchor="middle" fill="#475569">${caption}</text></svg>`;
  return `<div style="display:inline-block;margin:6px 10px;text-align:center;">${s}</div>`;
}

export const blocks = () => [
  intro({
    icon: "🪜",
    title: "Row Echelon Form and Reduced Row Echelon Form",
    overview: S`Row operations need a target. A matrix is in <strong>row echelon form</strong> when its nonzero rows form a staircase: each row starts further right than the row above, with zeros below every step. From there back substitution solves the system. Going further gives the <strong>reduced row echelon form</strong>, where each step is a 1 with zeros above and below it — the answer can then simply be read off. This lesson defines both shapes, introduces pivots and free variables, and shows how to write <em>every</em> solution of a system, including the infinitely many solutions of an underdetermined one, in parametric vector form.`,
    goals: [
      "decide whether a matrix is in row echelon form (REF) or reduced row echelon form (RREF);",
      "identify leading entries, pivot positions and pivot columns;",
      "know that the RREF of a matrix is unique while REFs are not;",
      "read the solution set of a system from its RREF, naming basic and free variables;",
      "write infinitely many solutions in parametric and vector form, and recognise an inconsistent RREF.",
    ],
    outcomes: "systems of linear equations: echelon forms, pivots and the general solution",
    prior: [
      [S`Which row operation clears the 4 below the 1 in \(${am([[1, 3], [4, 7]], false)}\)?`, S`\(R_2\to R_2-4R_1\).`],
      [S`What does a row \([\,0\ 0\ 0\mid 5\,]\) say?`, S`It says 0 = 5, which is impossible, so the system is inconsistent (2.2).`],
      [S`Solve \(x_1+2x_2=6\) for \(x_1\) in terms of \(x_2\).`, S`\(x_1=6-2x_2\).`],
    ],
    words: [
      ["Leading entry", "the first nonzero entry of a row", "the 3 in \\((0,3,1,5)\\)"],
      ["Row echelon form", "zero rows last; each leading entry right of the one above", "a staircase"],
      ["Reduced row echelon form", "REF with leading 1s and zeros above and below them", "read the answer directly"],
      ["Pivot column", "a column that holds a leading entry in an echelon form", "gives a basic variable"],
      ["Free variable", "an unknown whose column has no pivot", "can take any value"],
    ],
  }),

  section("📌 Row echelon form", S`
  ${definition("row echelon form", S`A matrix is in <strong>row echelon form (REF)</strong> if (1) all zero rows are at the bottom, and (2) the leading entry of each nonzero row is in a column strictly to the right of the leading entry of the row above. Consequently every entry below a leading entry is 0.`)}
  <div style="text-align:center;">${stair([["p", "*", "*", "*", "*"], ["0", "p", "*", "*", "*"], ["0", "0", "0", "p", "*"], ["0", "0", "0", "0", "0"]], "REF: ■ = any nonzero leading entry, * = any number")}${stair([["1", "0", "*", "0", "*"], ["0", "1", "*", "0", "*"], ["0", "0", "0", "1", "*"], ["0", "0", "0", "0", "0"]], "RREF: leading 1s, zeros above and below")}</div>
  <p>The positions of the leading entries are the <strong>pivot positions</strong> and their columns are the <strong>pivot columns</strong>. In the pictures, columns 1, 2 and 4 are pivot columns; column 3 is not.</p>`),

  section("📌 Reduced row echelon form", S`
  ${definition("reduced row echelon form", S`A matrix in REF is in <strong>reduced row echelon form (RREF)</strong> if, in addition, (3) every leading entry is 1, and (4) each leading 1 is the only nonzero entry in its column.`)}
  ${theorem("uniqueness of the RREF", S`Every matrix is row equivalent to exactly one matrix in reduced row echelon form.`)}
  <p>A matrix has many row echelon forms (scale a row and you get another), but only one RREF. So the pivot positions — and the number of pivots — do not depend on which row operations you use. That number will be called the <em>rank</em> in 2.5.</p>
  ${keyIdea(S`REF is enough to decide consistency and to back substitute. RREF lets you read the solution with no further arithmetic.`)}`),

  section("📌 Reading the solutions from the RREF", S`
  <p>Write the RREF of \([A\mid\vec b]\) as equations. Unknowns in pivot columns are <strong>basic (leading) variables</strong>; the others are <strong>free variables</strong>.</p>
  ${table(["The RREF of [A | b] has…", "Conclusion"], [
    ["a row \\([\\,0\\ \\cdots\\ 0\\mid1\\,]\\) (a pivot in the last column)", "inconsistent: no solution"],
    ["no such row, and every variable is basic", "exactly one solution"],
    ["no such row, and at least one free variable", "infinitely many solutions"],
  ])}
  <p>With free variables, give each one a parameter (\(s,t,\dots\)) and solve each nonzero row for its basic variable. For example</p>
  \[${am([[1, 3, 0, -2, 5], [0, 0, 1, 4, -1], [0, 0, 0, 0, 0]])}\ \Longrightarrow\ \begin{aligned}x_1&=5-3s+2t\\ x_2&=s\ \text{(free)}\\ x_3&=-1-4t\\ x_4&=t\ \text{(free)}\end{aligned}\quad\Longrightarrow\quad\vec x=\begin{bmatrix}5\\0\\-1\\0\end{bmatrix}+s\begin{bmatrix}-3\\1\\0\\0\end{bmatrix}+t\begin{bmatrix}2\\0\\-4\\1\end{bmatrix}.\]
  <p>This <strong>vector form</strong> shows the solution set as a point plus every combination of two direction vectors: a plane in \(\mathbb R^4\).</p>`),

  section("📌 Explore", S`<p>System C has infinitely many solutions. Use row operations to reach the RREF — the readout turns green and writes the general solution with the free variable as a parameter. Then try systems A and B, which end with a pivot in every column.</p>`),
  widget("laRowOps", { init: { set: "c" } }),

  section("📌 Common mistakes", watchOut([
    "A zero row in the middle means the matrix is not in REF — zero rows go to the bottom.",
    "In RREF the leading entry must be exactly 1 and its whole column (above and below) must be 0 otherwise.",
    "Free variables come from pivot-free columns of the coefficient part, not from zero rows.",
    "A row of zeros [0 … 0 | 0] is harmless (0 = 0); only [0 … 0 | c] with c ≠ 0 means no solution.",
    "Write the free variable equal to its parameter (x₂ = s) — it is easy to forget that line in the vector form.",
  ])),

  examples([
    ["REF, RREF or neither?", S`Classify \(A=${am([[1, 3, 0, 2], [0, 0, 1, 4], [0, 0, 0, 0]], false)}\), \(B=${am([[2, 1, 5], [0, 0, 3], [0, 0, 0]], false)}\), \(C=${am([[1, 0, 2], [0, 0, 0], [0, 1, 3]], false)}\), \(D=${am([[0, 1, 4], [1, 0, 2]], false)}\).`,
      [S`\(A\): staircase, leading 1s, and each leading 1 is alone in its column — RREF.`, S`\(B\): staircase (leading entries in columns 1 and 3), but the leading entries are 2 and 3, not 1 — REF only.`, S`\(C\): a zero row above a nonzero row — not REF. \(D\): the second leading entry is to the <em>left</em> of the first — not REF.`],
      S`\(A\) RREF; \(B\) REF but not RREF; \(C\), \(D\) neither`],
    ["Reading a general solution", S`The RREF of a system is \(${am([[1, 2, 0, -1, 3], [0, 0, 1, 4, -2]])}\). Write every solution in vector form.`,
      [S`Find the pivots: the leading 1s are in columns 1 and 3, so \(x_1\) and \(x_3\) are basic variables. Columns 2 and 4 have no pivot, so \(x_2\) and \(x_4\) are free: let \(x_2=s\) and \(x_4=t\).`, S`Write each nonzero row as an equation and solve it for its basic variable. Row 1: \(x_1+2x_2-x_4=3\), so \(x_1=3-2s+t\). Row 2: \(x_3+4x_4=-2\), so \(x_3=-2-4t\).`, S`Collect all four unknowns: \(\vec x=(3-2s+t,\ s,\ -2-4t,\ t)\). Split it into the constant part, the part with \(s\), and the part with \(t\): \[\vec x=\begin{bmatrix}3\\0\\-2\\0\end{bmatrix}+s\begin{bmatrix}-2\\1\\0\\0\end{bmatrix}+t\begin{bmatrix}1\\0\\-4\\1\end{bmatrix}.\]`, S`Check with \(s=t=1\): \(\vec x=(2,1,-6,1)\). Row 1: \(2+2-1=3\) ✓. Row 2: \(-6+4=-2\) ✓.`],
      S`\(\vec x=(3,0,-2,0)+s(-2,1,0,0)+t(1,0,-4,1)\), \(s,t\in\mathbb R\)`],
    ["From REF to RREF", S`Finish reducing \(${am([[2, 4, -2, 6], [0, 1, 3, -1], [0, 0, 2, 4]])}\) to RREF and solve.`,
      [...steps([[2, 4, -2, 6], [0, 1, 3, -1], [0, 0, 2, 4]], [
        [S`The matrix is already in REF. First make every pivot equal to 1: divide row 1 and row 3 by 2.`, ["R1*1/2", "R3*1/2"]],
        [S`Clear column 3 upward, using the leading 1 of row 3: subtract 3 times row 3 from row 2 and add row 3 to row 1.`, ["R2-3R3", "R1+R3"]],
        [S`Clear column 2 above the pivot of row 2: subtract 2 times row 2 from row 1.`, ["R1-2R2"]],
      ], { intro: "Start from the row echelon form" }).steps, S`This is the RREF. Each row now reads off one unknown: \(x_1=19\), \(x_2=-7\), \(x_3=2\).`, S`Check in the original rows: \(2(19)+4(-7)-2(2)=6\) ✓, \(-7+3(2)=-1\) ✓, \(2(2)=4\) ✓.`],
      S`\((x_1,x_2,x_3)=(19,-7,2)\)`],
    ["One small change, a different answer", S`Interpret \(${am([[1, 0, 3, 2], [0, 1, -1, 4], [0, 0, 0, 1]])}\) and \(${am([[1, 0, 3, 2], [0, 1, -1, 4], [0, 0, 0, 0]])}\).`,
      [S`First matrix: the last row is \([\,0\ 0\ 0\mid1\,]\), the equation \(0x_1+0x_2+0x_3=1\). No vector satisfies it, so the system has no solution — whatever rows 1 and 2 say.`, S`Second matrix: the last row is \([\,0\ 0\ 0\mid0\,]\), the equation \(0=0\), which every vector satisfies. Only rows 1 and 2 matter.`, S`Pivots are in columns 1 and 2, so \(x_3\) is free: let \(x_3=t\). Row 1: \(x_1+3x_3=2\), so \(x_1=2-3t\). Row 2: \(x_2-x_3=4\), so \(x_2=4+t\).`, S`So \(\vec x=(2-3t,\ 4+t,\ t)=(2,4,0)+t(-3,1,1)\). Check \(t=1\): \((-1,5,1)\): \(-1+3=2\) ✓, \(5-1=4\) ✓.`],
      S`first: inconsistent; second: \(\vec x=(2,4,0)+t(-3,1,1)\)`],
    ["Different REFs, one RREF", S`Find two different row echelon forms of \(${am([[1, 2, 3], [2, 6, 10]])}\) and its RREF.`,
      [...steps([[1, 2, 3], [2, 6, 10]], [
        [S`Clear the 2 below the first pivot. The result is already a row echelon form (the first REF).`, ["R2-2R1"]],
        [S`Scaling row 2 gives a different matrix that is still in row echelon form (the second REF).`, ["R2*1/2"]],
        [S`Clear the 2 above the pivot of row 2: this is the RREF.`, ["R1-2R2"]],
      ]).steps, S`Starting from the first REF instead and doing \(R_1\to R_1-R_2\), \(R_2\to\tfrac12R_2\) ends at the same matrix: the RREF is unique, REFs are not.`, S`Read off \(x_1=-1\), \(x_2=2\). Check: \(-1+2(2)=3\) ✓ and \(2(-1)+6(2)=10\) ✓.`],
      S`RREF \(${am([[1, 0, -1], [0, 1, 2]])}\); solution \((-1,2)\)`],
  ]),

  practice([
    q("RREF?", S`Is \(${am([[1, 4, 0, 2], [0, 0, 1, 3]])}\) in reduced row echelon form?`, choice(["yes", "no — the 4 must be 0", "no — it is not in REF", "no — there must be a pivot in column 2"], 0),
      "Check the leading 1s and their columns.", [S`Leading 1s in columns 1 and 3, each alone in its column. Column 2 is simply a free column.`], "yes"),
    q("free variables", S`The RREF of a system is \(${am([[1, 0, 2, 5], [0, 1, -1, 3], [0, 0, 0, 0]])}\). How many free variables are there?`, num(1),
      "Count the columns of the coefficient part without a pivot.", [S`Pivots in columns 1 and 2; \(x_3\) is free.`], S`\(1\)`),
    q("a particular solution", S`For the same RREF \(${am([[1, 0, 2, 5], [0, 1, -1, 3], [0, 0, 0, 0]])}\), give the solution with \(x_3=1\).`, vec(3, 4, 1),
      "x₁ = 5 − 2x₃ and x₂ = 3 + x₃.", [S`\(x_1=5-2=3\), \(x_2=3+1=4\).`], S`\((3,4,1)\)`),
    q("pivot columns", S`How many pivot columns does \(${am([[1, 2, 0, 3], [0, 0, 1, -1], [0, 0, 0, 0]], false)}\) have?`, num(2),
      "Count the leading entries.", [S`Leading 1s in columns 1 and 3.`], S`\(2\)`),
    q("REF, not RREF", "Which matrix is in row echelon form but <strong>not</strong> in reduced row echelon form?", choice([S`\(${am([[1, 5, 2], [0, 1, 4]], false)}\)`, S`\(${am([[1, 0, 2], [0, 1, 4]], false)}\)`, S`\(${am([[0, 1, 2], [1, 0, 4]], false)}\)`, S`\(${am([[1, 3, 0], [0, 0, 1]], false)}\)`], 0),
      "In RREF a leading 1 is alone in its column.", [S`The first matrix has a 5 above the leading 1 of row 2.`], S`\(${am([[1, 5, 2], [0, 1, 4]], false)}\)`),
  ]),

  ...hard([
    ["Five unknowns, two parameters", S`The RREF of a system in \(x_1,\dots,x_5\) is \(${am([[1, -3, 0, 2, 0, 1], [0, 0, 1, 5, 0, -2], [0, 0, 0, 0, 1, 4]])}\). Write the general solution in vector form and check one particular solution.`,
      [S`Locate the pivots: leading 1s in columns 1, 3 and 5, so \(x_1,x_3,x_5\) are basic. Columns 2 and 4 have no pivot: let \(x_2=s\) and \(x_4=t\).`, S`Write each row as an equation and solve for its basic variable. Row 1: \(x_1-3x_2+2x_4=1\), so \(x_1=1+3s-2t\). Row 2: \(x_3+5x_4=-2\), so \(x_3=-2-5t\). Row 3: \(x_5=4\).`, S`Collect the unknowns and split by parameter: \[\vec x=\begin{bmatrix}1+3s-2t\\ s\\ -2-5t\\ t\\ 4\end{bmatrix}=\begin{bmatrix}1\\0\\-2\\0\\4\end{bmatrix}+s\begin{bmatrix}3\\1\\0\\0\\0\end{bmatrix}+t\begin{bmatrix}-2\\0\\-5\\1\\0\end{bmatrix}.\]`, S`Check with \(s=t=1\): \((2,1,-7,1,4)\). Row 1: \(2-3+2=1\) ✓; row 2: \(-7+5=-2\) ✓; row 3: \(4\) ✓.`],
      S`\(\vec x=(1,0,-2,0,4)+s(3,1,0,0,0)+t(-2,0,-5,1,0)\)`],
    ["When is a system consistent?", S`Prove: the system \([A\mid\vec b]\) is consistent exactly when the last column of its RREF is <em>not</em> a pivot column.`,
      [S`If the last column holds a pivot, that row is \([\,0\ \cdots\ 0\mid1\,]\), the equation \(0x_1+\dots+0x_n=1\): no solution.`, S`If not, every nonzero row has its leading 1 in the coefficient part. Set every free variable to 0; each row then gives its basic variable equal to the constant in that row.`, S`That vector satisfies every equation of the RREF, hence of the original system (same solution set).`],
      S`consistent \(\iff\) no pivot in the constant column`],
  ], [
    q("hard", S`The RREF of a system is \(${am([[1, 0, -2, 3], [0, 1, 4, -1], [0, 0, 0, 0]])}\). Find the solution with \(x_3=2\).`, vec(7, -9, 2),
      "x₁ = 3 + 2x₃, x₂ = −1 − 4x₃.", [S`\(x_1=3+4=7\), \(x_2=-1-8=-9\).`], S`\((7,-9,2)\)`),
    q("hard", S`How many different RREF <em>patterns</em> (with \(*\) for an arbitrary entry) can a \(2\times2\) matrix have?`, num(4),
      "List them by the number and position of the pivots.", [S`Two pivots: \(${am([[1, 0], [0, 1]], false)}\). One pivot: \(${am([[1, "*"], [0, 0]], false)}\) or \(${am([[0, 1], [0, 0]], false)}\). None: the zero matrix.`], S`\(4\)`),
    q("hard", S`A consistent system has a \(3\times5\) coefficient matrix whose RREF has 3 pivots. How many free variables does it have?`, num(2),
      "Unknowns minus pivots.", [S`\(5-3\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between REF and RREF?", "Both are staircases. RREF also needs every leading entry to be 1 and to be the only nonzero entry in its column."],
      ["Is the RREF of a matrix unique?", "Yes. Row echelon forms are not unique, but every matrix has exactly one RREF, so its pivot positions are fixed."],
      ["Which variables are free?", "Those whose columns contain no pivot. They can take any values; the basic variables are then determined."],
      ["How do I see 'no solution' in the RREF?", "A pivot in the last (constant) column, i.e. a row [0 … 0 | 1]."],
      ["What does the vector form tell me?", "The solution set is a point plus all combinations of direction vectors — one for each free variable."],
    ],
    summary: [
      "REF: zero rows last; leading entries step to the right.",
      "RREF: REF + leading 1s alone in their columns; unique for each matrix.",
      "Pivot columns ↔ basic variables; other columns ↔ free variables.",
      "Pivot in the constant column ⇒ inconsistent; no free variables ⇒ unique; free variables ⇒ infinitely many.",
      "General solution: x = p + s v₁ + t v₂ + …",
    ],
    next: "2.4 turns all of this into an algorithm: Gaussian elimination and Gauss–Jordan elimination.",
  }),
];

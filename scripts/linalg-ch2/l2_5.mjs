// LINALG1 2.5 — Rank and the Number of Solutions: rank as the number of pivots, rank ≤ min(m, n), the rank
// theorem (inconsistent / unique / infinitely many with n − rank parameters / solvable for every b), what it says
// about wide, tall and square systems, conditions on b, and systems whose type depends on parameters.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, definition, theorem, vec, am, sys, steps } from "./lib.mjs";

export const TITLE = "2.5 Rank and the Number of Solutions";
export const ID = "11a10001-0001-4001-8001-000000000205";

const S = String.raw;
/** decision tree: rank A vs rank [A|b] vs n */
function tree() {
  const box = (x, y, w, t1, t2, fill, stroke) => `<rect x="${x}" y="${y}" width="${w}" height="50" rx="9" fill="${fill}" stroke="${stroke}" stroke-width="1.6"/><text x="${x + w / 2}" y="${y + 21}" font-size="13.5" font-weight="700" text-anchor="middle" fill="#0f172a">${t1}</text><text x="${x + w / 2}" y="${y + 39}" font-size="12" text-anchor="middle" fill="#475569">${t2}</text>`;
  const ln = (x1, y1, x2, y2, t) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#475569" stroke-width="2"/><text x="${(x1 + x2) / 2 + (x2 > x1 ? 8 : -8)}" y="${(y1 + y2) / 2}" font-size="12" font-weight="700" text-anchor="${x2 > x1 ? "start" : "end"}" fill="#475569">${t}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 250" width="560" height="250" font-family="Arial, sans-serif" style="max-width:100%;height:auto;"><rect width="560" height="250" fill="#fff"/>
${box(170, 6, 220, "Compare rank A with rank [A | b]", "(row reduce [A | b] once)", "#eef2ff", "#4338ca")}
${ln(240, 56, 110, 100, "different")}${ln(320, 56, 420, 100, "equal (= r)")}
${box(10, 100, 200, "No solution", "a row [0 … 0 | 1]", "#ffe4e6", "#be123c")}
${box(330, 100, 190, "Consistent", "compare r with n", "#eef2ff", "#4338ca")}
${ln(390, 150, 300, 192, "r = n")}${ln(460, 150, 470, 192, "r < n")}
${box(190, 192, 170, "Exactly one", "no free variables", "#dcfce7", "#15803d")}
${box(380, 192, 175, "Infinitely many", "n − r free variables", "#dbeafe", "#1d4ed8")}</svg>`;
}

export const blocks = () => [
  intro({
    icon: "📊",
    title: "Rank and the Number of Solutions",
    overview: S`The number of pivots in an echelon form of a matrix is called its <strong>rank</strong>. Because the reduced row echelon form is unique, the rank is a property of the matrix itself, not of the row operations used. Comparing three numbers — the rank of the coefficient matrix \(A\), the rank of the augmented matrix \([A\mid\vec b]\), and the number of unknowns \(n\) — tells you at once whether a system has no solution, one solution, or infinitely many, and how many free parameters the general solution needs. The rank also tells you whether \(A\vec x=\vec b\) can be solved for <em>every</em> right-hand side.`,
    goals: [
      "compute the rank of a matrix from an echelon form;",
      "state and use the rank theorem to classify a system without solving it;",
      "find the number of free parameters, n − rank;",
      "decide whether a system is solvable for every right-hand side, and find the condition on b when it is not;",
      "analyse systems with parameters using ranks.",
    ],
    outcomes: "systems of linear equations: rank and the structure of the solution set",
    prior: [
      [S`How many pivots does \(${am([[1, 2, 0, 3], [0, 0, 1, 4], [0, 0, 0, 0]], false)}\) have?`, S`Two (columns 1 and 3).`],
      [S`What does a pivot in the constant column of an RREF mean?`, S`No solution (2.3).`],
      [S`Which variables are free?`, S`Those whose columns contain no pivot.`],
    ],
    words: [
      ["Rank", "the number of pivots (leading entries) in any REF", "\\(\\operatorname{rank}A\\)"],
      ["Full row rank", "rank = number of rows \\(m\\)", "a pivot in every row"],
      ["Full column rank", "rank = number of columns \\(n\\)", "a pivot in every column"],
      ["Underdetermined", "fewer equations than unknowns", "\\(m\\lt n\\)"],
      ["Overdetermined", "more equations than unknowns", "\\(m\\gt n\\)"],
    ],
  }),

  section("📌 Rank", S`
  ${definition("rank", S`The <strong>rank</strong> of a matrix \(A\), written \(\operatorname{rank}A\), is the number of leading entries in a row echelon form of \(A\).`)}
  <p>Different REFs of \(A\) have their pivots in the same positions (they all reduce to the same RREF), so the rank is well defined. Since each row and each column holds at most one pivot,</p>
  \[\operatorname{rank}A\le\min(m,n)\qquad\text{for an }m\times n\text{ matrix.}\]
  <p>Also \(\operatorname{rank}A\le\operatorname{rank}[A\mid\vec b]\le\operatorname{rank}A+1\): adding a column can create at most one new pivot.</p>`),

  section("📌 The rank theorem", S`
  ${theorem("rank theorem", S`Let \(A\vec x=\vec b\) be a system of \(m\) equations in \(n\) unknowns. Then
  <ol style="margin:6px 0 0 18px;">
  <li>it is <strong>inconsistent</strong> exactly when \(\operatorname{rank}A\lt\operatorname{rank}[A\mid\vec b]\);</li>
  <li>it has <strong>exactly one solution</strong> exactly when \(\operatorname{rank}A=\operatorname{rank}[A\mid\vec b]=n\);</li>
  <li>it has <strong>infinitely many solutions</strong> exactly when \(\operatorname{rank}A=\operatorname{rank}[A\mid\vec b]\lt n\), and then the general solution has \(n-\operatorname{rank}A\) free parameters;</li>
  <li>it is consistent for <strong>every</strong> \(\vec b\in\mathbb R^m\) exactly when \(\operatorname{rank}A=m\).</li></ol>`, S`Reduce \([A\mid\vec b]\) to RREF. (1) The ranks differ exactly when the last column holds a pivot, i.e. a row \([0\cdots0\mid1]\). (2)–(3) Otherwise the system is consistent (2.3), the \(\operatorname{rank}A\) pivot columns give basic variables and the other \(n-\operatorname{rank}A\) columns give free ones; no free variables means one solution. (4) If every row of the RREF of \(A\) has a pivot, no row \([0\cdots0\mid c]\) can appear, whatever \(\vec b\) is. If some row of the RREF of \(A\) is zero, choose \(\vec b\) so that the corresponding constant becomes 1 (reverse the row operations applied to \(\vec e_m\)); that system is inconsistent.`)}
  <div style="text-align:center;">${tree()}</div>
  ${table(["Shape", "What the rank theorem guarantees"], [
    ["wide: \\(m\\lt n\\)", "rank \\(\\le m\\lt n\\): never exactly one solution — none or infinitely many"],
    ["tall: \\(m\\gt n\\)", "rank \\(\\le n\\lt m\\): some \\(\\vec b\\) make it inconsistent"],
    ["square: \\(m=n\\)", "rank \\(n\\) ⇔ exactly one solution for every \\(\\vec b\\)"],
  ])}`),

  section("📌 Explore", S`<p>Change \(k\) and \(h\). For most \(k\) the rank of \(A\) is 3 and there is one solution. Find the special \(k\) where the rank drops to 2 — then \(h\) decides between no solution and infinitely many. Switch to two equations in three unknowns: no choice gives exactly one solution.</p>`),
  widget("laRank", { init: { set: "square" } }),

  section("📌 Common mistakes", watchOut([
    "Rank counts pivots in an echelon form — count them after reducing, not in the original matrix.",
    "Compare rank A with rank [A | b]; the rank of [A | b] alone does not decide consistency.",
    "The number of free parameters is n − rank A (unknowns minus pivots), not m − rank A.",
    "More unknowns than equations does not guarantee a solution — it only rules out a unique one.",
    "A zero row in A's echelon form is not 'no solution' by itself; look at the constant in that row.",
  ])),

  examples([
    ["Computing a rank", S`Find the rank of \(A=${am([[1, 2, -1, 3], [2, 4, 1, 0], [3, 6, 0, 3]], false)}\).`,
      [...steps([[1, 2, -1, 3], [2, 4, 1, 0], [3, 6, 0, 3]], [
        [S`Clear column 1 below the pivot 1.`, ["R2-2R1", "R3-3R1"]],
        [S`Column 2 is now zero below row 1, so it has no pivot. The next pivot is the 3 in row 2, column 3; clear below it.`, ["R3-R2"]],
      ], { bar: false, intro: "Start from the matrix" }).steps, S`This is a row echelon form with leading entries in columns 1 and 3 and one zero row. Count the leading entries: there are 2.`],
      S`\(\operatorname{rank}A=2\)`],
    ["Classifying with ranks", S`Without solving, decide how many solutions \[${sys([[1, -1, 2, 3], [2, 1, 1, 3], [1, 2, -1, 1]])}\] has.`,
      [...steps([[1, -1, 2, 3], [2, 1, 1, 3], [1, 2, -1, 1]], [
        [S`Clear column 1 below the pivot.`, ["R2-2R1", "R3-R1"]],
        [S`Rows 2 and 3 have the same left side; subtract row 2 from row 3.`, ["R3-R2"]],
      ]).steps, S`Count pivots. In the coefficient part there are 2 (columns 1 and 2), so \(\operatorname{rank}A=2\). The augmented matrix has a third pivot, the 1 in the constant column, so \(\operatorname{rank}[A\mid\vec b]=3\).`, S`Since \(\operatorname{rank}A\lt\operatorname{rank}[A\mid\vec b]\), part 1 of the rank theorem says the system is inconsistent.`],
      S`no solution`],
    ["Two parameters", S`For which \(k\) and \(h\) does \[${sys([[1, 2, 1, 3], [2, 5, 3, 7], [1, 3, "k", "h"]])}\] have one solution, none, or infinitely many?`,
      [S`Write the augmented matrix: \[${am([[1, 2, 1, 3], [2, 5, 3, 7], [1, 3, "k", "h"]])}\]`, S`Clear column 1: subtract 2 times row 1 from row 2 and row 1 from row 3. Operations: \(R_2\to R_2-2R_1,\quad R_3\to R_3-R_1\). \[\longrightarrow\ ${am([[1, 2, 1, 3], [0, 1, 1, 1], [0, 1, "k-1", "h-3"]])}\]`, S`Clear column 2 below the pivot of row 2. Operation: \(R_3\to R_3-R_2\). \[\longrightarrow\ ${am([[1, 2, 1, 3], [0, 1, 1, 1], [0, 0, "k-2", "h-4"]])}\]`, S`\(k\ne2\): three pivots, \(\operatorname{rank}A=\operatorname{rank}[A\mid\vec b]=3=n\) — one solution.`, S`\(k=2\): \(\operatorname{rank}A=2\). If \(h\ne4\) the last row is \([0\ 0\ 0\mid h-4]\), rank \([A\mid\vec b]=3\): none. If \(h=4\): rank 2 = 2 &lt; 3, infinitely many, \(\vec x=(1,1,0)+t(1,-1,1)\).`],
      S`\(k\ne2\): one; \(k=2,\ h\ne4\): none; \(k=2,\ h=4\): infinitely many`],
    ["Which right-hand sides work?", S`For \(A=${am([[1, 2], [3, 4], [5, 6]], false)}\), is \(A\vec x=\vec b\) solvable for every \(\vec b\)? If not, find the condition on \(\vec b=(b_1,b_2,b_3)\).`,
      [S`\(\operatorname{rank}A\le2\lt3=m\), so not every \(\vec b\) works (part 4 of the theorem).`, S`Reduce \([A\mid\vec b]\), keeping \(b_1,b_2,b_3\) as letters: \[${am([[1, 2, "b_1"], [3, 4, "b_2"], [5, 6, "b_3"]])}\]`, S`Clear column 1. Operations: \(R_2\to R_2-3R_1,\quad R_3\to R_3-5R_1\). \[\longrightarrow\ ${am([[1, 2, "b_1"], [0, -2, "b_2-3b_1"], [0, -4, "b_3-5b_1"]])}\]`, S`Clear column 2 below the pivot \(-2\). Operation: \(R_3\to R_3-2R_2\); the last entry becomes \(b_3-5b_1-2(b_2-3b_1)=b_1-2b_2+b_3\). \[\longrightarrow\ ${am([[1, 2, "b_1"], [0, -2, "b_2-3b_1"], [0, 0, "b_1-2b_2+b_3"]])}\]`, S`The last row is \([\,0\ 0\mid b_1-2b_2+b_3\,]\). The system is consistent exactly when this constant is 0; otherwise the row says 0 = nonzero. For example \(\vec b=(1,1,1)\) works and \(\vec b=(1,0,0)\) does not.`],
      S`solvable exactly when \(b_1-2b_2+b_3=0\)`],
    ["Counting parameters", S`A consistent system has 4 equations in 7 unknowns and its coefficient matrix has rank 3. How many parameters does the general solution have? Can a system with a \(5\times3\) coefficient matrix be solvable for every \(\vec b\in\mathbb R^5\)?`,
      [S`Parameters \(=n-\operatorname{rank}A=7-3=4\).`, S`For \(5\times3\), \(\operatorname{rank}A\le3\lt5=m\), so part 4 fails: some \(\vec b\) give no solution.`],
      S`4 parameters; no`],
  ]),

  practice([
    q("rank", S`Find the rank of \(${am([[1, 3, -2], [2, 6, -4], [0, 1, 5]], false)}\).`, num(2),
      "Row 2 is twice row 1.", [...steps([[1, 3, -2], [2, 6, -4], [0, 1, 5]], [[S`Clear column 1.`, ["R2-2R1"]], [S`Move the zero row to the bottom.`, ["R2<->R3"]]], { bar: false, intro: "Start from the matrix" }).steps, S`Two leading entries (columns 1 and 2), so the rank is 2.`], S`\(2\)`),
    q("classify", S`\(\operatorname{rank}A=\operatorname{rank}[A\mid\vec b]=3\) and there are \(n=5\) unknowns. The system has:`, choice(["infinitely many solutions, with 2 parameters", "exactly one solution", "no solution", "infinitely many solutions, with 3 parameters"], 0),
      "Consistent; compare the rank with n.", [S`\(3\lt5\): \(5-3=2\) free variables.`], "infinitely many solutions, with 2 parameters"),
    q("classify", S`\(\operatorname{rank}A=2\) and \(\operatorname{rank}[A\mid\vec b]=3\). The system has:`, choice(["no solution", "exactly one solution", "infinitely many solutions", "one or infinitely many"], 0),
      "When do the ranks differ?", [S`A pivot in the constant column: a row that reads 0 = 1.`], "no solution"),
    q("rank 1", S`For which \(k\) does \(${am([[1, 2, 3], [2, 4, "k"]], false)}\) have rank 1?`, num(6),
      "Row 2 must be a multiple of row 1.", [S`Row 2 = 2·row 1 needs \(k=6\).`], S`\(6\)`),
    q("every b?", S`A \(3\times5\) coefficient matrix \(A\) has rank 3. Is \(A\vec x=\vec b\) consistent for every \(\vec b\in\mathbb R^3\)?`, choice(["yes, always", "no, never", "only when b = 0", "it depends on b"], 0),
      "Compare the rank with the number of rows.", [S`\(\operatorname{rank}A=3=m\): part 4 of the rank theorem.`], "yes, always"),
  ]),

  ...hard([
    ["Wide systems are never unique", S`Prove: if a consistent system has fewer equations than unknowns (\(m\lt n\)), it has infinitely many solutions.`,
      [S`Each row of an echelon form holds at most one pivot, so \(\operatorname{rank}A\le m\).`, S`Hence \(\operatorname{rank}A\le m\lt n\), so at least \(n-m\ge1\) column has no pivot: there is a free variable.`, S`A consistent system with a free variable has infinitely many solutions (part 3).`],
      S`\(m\lt n\) and consistent \(\Rightarrow\) infinitely many solutions`],
    ["A quadratic in the parameter", S`For which \(a\) and \(b\) does \[${sys([[1, 1, 1, 1], [1, 2, "a", 2], [1, 4, "a^2", "b"]])}\] have one solution, none, or infinitely many?`,
      [S`Write the augmented matrix: \[${am([[1, 1, 1, 1], [1, 2, "a", 2], [1, 4, "a^2", "b"]])}\]`, S`Clear column 1. Operations: \(R_2\to R_2-R_1,\quad R_3\to R_3-R_1\). \[\longrightarrow\ ${am([[1, 1, 1, 1], [0, 1, "a-1", 1], [0, 3, "a^2-1", "b-1"]])}\]`, S`Clear column 2. Operation: \(R_3\to R_3-3R_2\); the third entry becomes \(a^2-1-3(a-1)=a^2-3a+2=(a-1)(a-2)\) and the constant \(b-1-3=b-4\). \[\longrightarrow\ ${am([[1, 1, 1, 1], [0, 1, "a-1", 1], [0, 0, "(a-1)(a-2)", "b-4"]])}\]`, S`\(a\ne1,2\): rank 3 = n, one solution. \(a=1\) or \(a=2\): the row is \([0\ 0\ 0\mid b-4]\) — infinitely many if \(b=4\), none otherwise.`],
      S`\(a\ne1,2\): one; \(a\in\{1,2\}\): infinitely many if \(b=4\), none if \(b\ne4\)`],
  ], [
    q("hard", S`In the second challenge take \(a=3\), \(b=8\). Find \(x_3\).`, num(2),
      "Use the last row of the echelon form.", [S`\((9-9+2)x_3=8-4\), so \(2x_3=4\).`], S`\(2\)`),
    q("hard", S`For \(A=${am([[1, 1], [1, 2], [1, 3]], false)}\), find \(b_3\) so that \(A\vec x=(2,3,b_3)\) is consistent.`, num(4),
      "Solve the first two equations, then evaluate the third.", [S`\(x_1+x_2=2,\ x_1+2x_2=3\) give \(x_2=1\), \(x_1=1\).`, S`\(b_3=1+3(1)\).`], S`\(4\)`),
    q("hard", S`What is the largest possible rank of a \(4\times6\) matrix?`, num(4),
      "rank ≤ min(m, n).", [S`\(\min(4,6)\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the rank of a matrix?", "The number of pivots in any echelon form — the same for every echelon form, because the RREF is unique."],
      ["How do ranks decide the number of solutions?", "rank A < rank [A | b]: none. Equal and = n: exactly one. Equal and < n: infinitely many, with n − rank parameters."],
      ["When is Ax = b solvable for every b?", "Exactly when rank A = m, the number of equations (a pivot in every row of A)."],
      ["Can 2 equations in 5 unknowns have a unique solution?", "No: the rank is at most 2 < 5, so there are always free variables (or no solution)."],
      ["What is n − rank A?", "The number of free variables — the number of parameters in the general solution."],
    ],
    summary: [
      "rank A = number of pivots; rank A ≤ min(m, n).",
      "Inconsistent ⇔ rank A < rank [A | b].",
      "Unique ⇔ rank A = rank [A | b] = n; infinitely many ⇔ equal and < n.",
      "Free parameters: n − rank A.",
      "Solvable for every b ⇔ rank A = m.",
    ],
    next: "2.6 studies homogeneous systems Ax = 0 and shows how every solution of Ax = b is built from them.",
  }),
];

// LINALG1 2.4 — Gaussian and Gauss–Jordan Elimination: the forward phase to REF with back substitution, the
// backward phase to RREF, choosing pivots (swaps, avoiding fractions, partial pivoting), solving systems with a
// unique solution, free variables or no solution, and a system whose type depends on a parameter.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, definition, theorem, vec, am, sys, steps } from "./lib.mjs";
import { vfig, scene3, patch3, pt3 } from "./vecfig.mjs";

export const TITLE = "2.4 Gaussian and Gauss–Jordan Elimination";
export const ID = "11a10001-0001-4001-8001-000000000204";

const S = String.raw;
/** flowchart of the elimination algorithm */
function flow() {
  const box = (y, t1, t2, fill, stroke) => `<rect x="20" y="${y}" width="420" height="46" rx="9" fill="${fill}" stroke="${stroke}" stroke-width="1.6"/><text x="230" y="${y + 20}" font-size="14" font-weight="700" text-anchor="middle" fill="#0f172a">${t1}</text><text x="230" y="${y + 38}" font-size="12.5" text-anchor="middle" fill="#475569">${t2}</text>`;
  const arr = (y) => `<line x1="230" y1="${y}" x2="230" y2="${y + 14}" stroke="#475569" stroke-width="2"/><polygon points="224,${y + 12} 236,${y + 12} 230,${y + 20}" fill="#475569"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 360" width="460" height="360" font-family="Arial, sans-serif" style="max-width:100%;height:auto;"><rect width="460" height="360" fill="#fff"/>
${box(6, "1. Find the leftmost column with a nonzero entry", "in the rows not yet used — swap that entry to the top if needed", "#eef2ff", "#4338ca")}${arr(52)}
${box(72, "2. Create zeros below the pivot", "Rᵢ → Rᵢ − (aᵢ/p)·R_pivot for each lower row", "#eef2ff", "#4338ca")}${arr(118)}
${box(138, "3. Cover that row and repeat on the rows below", "until no nonzero rows remain: the matrix is in REF", "#eef2ff", "#4338ca")}${arr(184)}
${box(204, "4. Backward: scale each pivot to 1", "starting with the lowest pivot", "#fef3c7", "#b45309")}${arr(250)}
${box(270, "5. Create zeros above each pivot", "the matrix is in RREF — read off the solution", "#fef3c7", "#b45309")}
<text x="452" y="100" font-size="12" text-anchor="end" fill="#4338ca" font-weight="700">forward phase</text><text x="452" y="330" font-size="12" text-anchor="end" fill="#b45309" font-weight="700">backward phase</text></svg>`;
}

export const blocks = () => [
  intro({
    icon: "⚙️",
    title: "Gaussian and Gauss–Jordan Elimination",
    overview: S`Row operations become a reliable method once they are applied in a fixed order. <strong>Gaussian elimination</strong> works column by column from the left, creating zeros below each pivot until the matrix is in row echelon form, and then finishes with back substitution. <strong>Gauss–Jordan elimination</strong> continues upward to the reduced row echelon form, so the solution can be read off directly. The same algorithm handles every case — one solution, infinitely many, or none — and it is exactly what computers do, from a 3 × 3 homework system to millions of equations in engineering software.`,
    goals: [
      "carry out the forward phase of Gaussian elimination and finish with back substitution;",
      "carry out the backward phase of Gauss–Jordan elimination to reach the RREF;",
      "choose pivots sensibly: swap rows when a pivot is 0 and avoid fractions where possible;",
      "solve systems with a unique solution, with free variables, and with no solution;",
      "analyse a system whose number of solutions depends on a parameter.",
    ],
    outcomes: "systems of linear equations: Gaussian and Gauss–Jordan elimination",
    prior: [
      [S`What are the three row operations?`, S`Swap two rows, scale a row by a nonzero number, add a multiple of one row to another (2.2).`],
      [S`Is \(${am([[1, 2, 5], [0, 3, 6]])}\) in REF? In RREF?`, S`REF yes; not RREF (the pivot 3 is not 1 and there is a 2 above it).`],
      [S`Solve \(x_1+x_2=4,\ 2x_2=6\) by back substitution.`, S`\(x_2=3\), \(x_1=1\).`],
    ],
    words: [
      ["Pivot", "the entry used to clear a column", "the boxed 1 in row 1"],
      ["Forward phase", "zeros below the pivots → REF", "Gaussian elimination"],
      ["Backward phase", "leading 1s and zeros above → RREF", "Gauss–Jordan elimination"],
      ["Back substitution", "solving an REF from the bottom up", "x₃ first, then x₂, …"],
      ["Partial pivoting", "choosing the largest pivot in absolute value", "used by computers to limit rounding"],
    ],
  }),

  section("📌 The algorithm", S`
  <div style="text-align:center;">${flow()}</div>
  <p><strong>Gaussian elimination</strong> = steps 1–3 followed by back substitution. <strong>Gauss–Jordan elimination</strong> = steps 1–5. Both give the same solutions; Gauss–Jordan does more row work but no substitution, and it is the natural choice when there are free variables.</p>
  ${theorem("the algorithm always works", S`Applied to any matrix, steps 1–5 stop after finitely many operations with the matrix in reduced row echelon form.`, S`Each pass of steps 1–3 fixes one pivot and moves to a strictly smaller block of rows, so the forward phase ends after at most \(m\) passes with an REF. The backward phase visits each of the (at most \(m\)) pivots once. The result has leading 1s with zeros above and below — the RREF.`)}`),

  section("📌 Choosing pivots", S`
  ${table(["Situation", "What to do"], [
    ["the entry where the pivot should be is 0", "swap with a lower row that has a nonzero entry in that column"],
    ["a lower row has a 1 (or −1) in the pivot column", "swap it up: dividing by 1 creates no fractions"],
    ["the pivot is not 1 in hand computation", "postpone scaling to the backward phase, or scale early if it gives integers"],
    ["working with decimals (on a computer)", "partial pivoting: use the entry of largest absolute value, which keeps rounding errors small"],
  ])}
  ${keyIdea(S`Different choices give different intermediate matrices but the same RREF, so the solutions never depend on the order you choose.`)}`),

  section("📌 Explore", S`<p>Step through the algorithm. Watch the forward phase build the staircase (pivots in amber), the message when the REF is reached, and the backward phase that turns each pivot into 1 and clears its column. Try the system that needs a swap, the one with free variables and the one with no solution.</p>`),
  widget("laGauss", { init: { set: "unique" } }),

  section("📌 Common mistakes", watchOut([
    "Use the current pivot row, not the original one — rows change as you go.",
    "Clear entries below the pivot first (forward), then above (backward); clearing upward too early creates extra work.",
    "Keep the constant column in every operation.",
    "When a column has no possible pivot, move one column right but stay in the same row.",
    "Check the final answer in the ORIGINAL equations — it catches arithmetic slips.",
  ])),

  examples([
    ["Gaussian elimination with back substitution", S`Solve \[${sys([[1, -2, 1, 0], [2, 1, -3, 10], [4, -7, 1, 4]])}\]`,
      [...steps([[1, -2, 1, 0], [2, 1, -3, 10], [4, -7, 1, 4]], [
        [S`<strong>Forward phase, column 1.</strong> The pivot is the 1 in row 1. Clear the entries below it: subtract 2 times row 1 from row 2 and 4 times row 1 from row 3.`, ["R2-2R1", "R3-4R1"]],
        [S`<strong>Column 2.</strong> Row 3 now has a 1 in column 2, which avoids fractions, so swap rows 2 and 3.`, ["R2<->R3"]],
        [S`Clear the 5 below the new pivot of row 2. The matrix is now in row echelon form.`, ["R3-5R2"]],
      ]).steps, S`<strong>Back substitution.</strong> Row 3: \(10x_3=-10\), so \(x_3=-1\). Row 2: \(x_2-3x_3=4\), so \(x_2=4+3(-1)=1\). Row 1: \(x_1-2x_2+x_3=0\), so \(x_1=2(1)-(-1)=3\).`, S`<strong>Check</strong> in the original equations: \(3-2-1=0\) ✓, \(6+1+3=10\) ✓, \(12-7-1=4\) ✓.`],
      S`\((x_1,x_2,x_3)=(3,1,-1)\)`,
      vfig(scene3(3, { polys: [patch3([3, 1, -1], [1, 0, -1], [0, 1, 2], 1.2, "#dbeafe", "blue", 0.45), patch3([3, 1, -1], [1, 1, 1], [0, 3, 1], 0.8, "#fef3c7", "amber", 0.45), patch3([3, 1, -1], [1, 0, -4], [0, 1, 7], 0.5, "#dcfce7", "green", 0.45)], points: [pt3([3, 1, -1], "(3, 1, −1)", { color: "red" })] }), "three planes through one common point")],
    ["Gauss–Jordan with free variables", S`Solve \[${sys([[1, 1, 2, 1, 5], [2, 2, 5, 4, 13], [1, 1, 3, 3, 8]])}\]`,
      [...steps([[1, 1, 2, 1, 5], [2, 2, 5, 4, 13], [1, 1, 3, 3, 8]], [
        [S`<strong>Column 1.</strong> Clear below the pivot 1: subtract 2 times row 1 from row 2 and row 1 from row 3.`, ["R2-2R1", "R3-R1"]],
        [S`<strong>Column 2</strong> is now all zeros below row 1, so it gets no pivot; the next pivot is the 1 in row 2, column 3. Clear below it.`, ["R3-R2"]],
        [S`<strong>Backward phase.</strong> Clear the 2 above the pivot in column 3. This is the RREF.`, ["R1-2R2"]],
      ]).steps, S`<strong>Read the solution.</strong> Pivot columns 1 and 3: \(x_1,x_3\) are basic; \(x_2=s\) and \(x_4=t\) are free. Row 1: \(x_1+x_2-3x_4=-1\), so \(x_1=-1-s+3t\). Row 2: \(x_3+2x_4=3\), so \(x_3=3-2t\).`, S`<strong>Check</strong> with \(s=0,t=1\): \((2,0,1,1)\). Original rows: \(2+0+2+1=5\) ✓, \(4+0+5+4=13\) ✓, \(2+0+3+3=8\) ✓.`],
      S`\(\vec x=(-1,0,3,0)+s(-1,1,0,0)+t(3,0,-2,1)\)`],
    ["A zero in the pivot position", S`Solve \[${sys([[0, 2, -4, 6], [3, -3, 6, -3], [1, 1, 1, 8]])}\]`,
      [...steps([[0, 2, -4, 6], [3, -3, 6, -3], [1, 1, 1, 8]], [
        [S`<strong>Column 1</strong> has a 0 in the pivot position. Row 3 has a 1 there, so swap rows 1 and 3.`, ["R1<->R3"]],
        [S`Clear the 3 below the pivot: subtract 3 times row 1 from row 2.`, ["R2-3R1"]],
        [S`<strong>Column 2.</strong> Row 3 has the smaller entry 2 (no fractions when clearing the −6), so swap rows 2 and 3.`, ["R2<->R3"]],
        [S`Clear the −6 below the pivot 2: add 3 times row 2 to row 3. The matrix is in REF.`, ["R3+3R2"]],
      ]).steps, S`<strong>Back substitution.</strong> Row 3: \(-9x_3=-9\), so \(x_3=1\). Row 2: \(2x_2-4(1)=6\), so \(x_2=5\). Row 1: \(x_1+5+1=8\), so \(x_1=2\).`, S`<strong>Check</strong> in the original: \(2(5)-4(1)=6\) ✓, \(6-15+6=-3\) ✓, \(2+5+1=8\) ✓.`],
      S`\((x_1,x_2,x_3)=(2,5,1)\)`],
    ["Elimination reveals an inconsistency", S`Solve \[${sys([[1, 1, 1, 3], [1, 2, 3, 6], [2, 3, 4, 10]])}\]`,
      [...steps([[1, 1, 1, 3], [1, 2, 3, 6], [2, 3, 4, 10]], [
        [S`<strong>Column 1.</strong> Subtract row 1 from row 2 and 2 times row 1 from row 3.`, ["R2-R1", "R3-2R1"]],
        [S`<strong>Column 2.</strong> Rows 2 and 3 have the same left side; subtract row 2 from row 3.`, ["R3-R2"]],
      ]).steps, S`The last row has a pivot in the constant column: it is the equation \(0x_1+0x_2+0x_3=1\). No vector satisfies it, so we can stop — the system is inconsistent.`, S`Why: equation 3 has the same left side as equation 1 + equation 2 (\(2x_1+3x_2+4x_3\)), but its constant is 10 instead of \(3+6=9\).`],
      S`no solution (the third equation contradicts the sum of the first two)`],
    ["Choosing pivots to avoid fractions", S`Solve \[${sys([[2, 3, -1, 1], [3, 5, 2, 8], [1, -2, -3, -1]])}\]`,
      [...steps([[2, 3, -1, 1], [3, 5, 2, 8], [1, -2, -3, -1]], [
        [S`<strong>Choose a pivot of 1.</strong> Row 3 starts with 1, so swap it to the top; dividing by 1 never creates fractions.`, ["R1<->R3"]],
        [S`Clear column 1: subtract 3 times row 1 from row 2 and 2 times row 1 from row 3.`, ["R2-3R1", "R3-2R1"]],
        [S`Every entry of row 2 is a multiple of 11, so divide row 2 by 11: the pivot becomes 1 and the numbers stay integers.`, ["R2*1/11"]],
        [S`Clear the 7 below the new pivot. The matrix is in REF.`, ["R3-7R2"]],
      ]).steps, S`<strong>Back substitution.</strong> Row 3: \(-2x_3=-4\), so \(x_3=2\). Row 2: \(x_2+2=1\), so \(x_2=-1\). Row 1: \(x_1-2(-1)-3(2)=-1\), so \(x_1=3\).`, S`<strong>Check</strong>: \(6-3-2=1\) ✓, \(9-5+4=8\) ✓, \(3+2-6=-1\) ✓.`],
      S`\((x_1,x_2,x_3)=(3,-1,2)\)`],
  ]),

  practice([
    q("first move", S`Gaussian elimination on \(${am([[0, 1, 2, 1], [3, 1, 0, 4], [1, 2, 1, 3]])}\): what is a sensible first operation?`, choice([S`\(R_1\leftrightarrow R_3\)`, S`\(R_1\to\tfrac10R_1\)`, S`\(R_2\to R_2-3R_1\)`, S`\(R_3\to R_3-R_1\)`], 0),
      "The top entry of column 1 is 0.", [S`Swap a row with a nonzero first entry to the top; row 3 has a 1, which avoids fractions.`], S`\(R_1\leftrightarrow R_3\)`),
    q("2 × 2", S`Solve \(x_1+3x_2=11,\ 2x_1-x_2=1\) by elimination. Enter \((x_1,x_2)\).`, vec(2, 3),
      "R₂ → R₂ − 2R₁.", [...steps([[1, 3, 11], [2, -1, 1]], [[S`Clear the 2 below the pivot.`, ["R2-2R1"]]]).steps, S`Row 2: \(-7x_2=-21\), so \(x_2=3\). Row 1: \(x_1+9=11\), so \(x_1=2\). Check: \(2+9=11\) ✓, \(4-3=1\) ✓.`], S`\((2,3)\)`),
    q("3 × 3", S`Solve \(x_1+x_2+x_3=6,\ 2x_2+x_3=7,\ 2x_1+x_2+3x_3=13\). Enter \((x_1,x_2,x_3)\).`, vec(1, 2, 3),
      "Clear the 2 in row 3, column 1 first.", [...steps([[1, 1, 1, 6], [0, 2, 1, 7], [2, 1, 3, 13]], [
        [S`Clear the 2 in row 3, column 1.`, ["R3-2R1"]],
        [S`Row 3 now has \(-1\) in column 2, which avoids fractions: swap rows 2 and 3.`, ["R2<->R3"]],
        [S`Clear the 2 below the pivot of row 2.`, ["R3+2R2"]],
      ]).steps, S`Back substitution: \(3x_3=9\) gives \(x_3=3\); \(-x_2+3=1\) gives \(x_2=2\); \(x_1+2+3=6\) gives \(x_1=1\).`], S`\((1,2,3)\)`),
    q("how many?", S`The forward phase ends with \(${am([[1, 2, -1, 3], [0, 1, 2, 4], [0, 0, 0, 0]])}\). The system has:`, choice(["infinitely many solutions", "exactly one solution", "no solution", "exactly two solutions"], 0),
      "Is there a free variable? Is there a pivot in the last column?", [S`Column 3 has no pivot and the zero row is harmless.`], "infinitely many solutions"),
    q("back substitution", S`An REF is \(${am([[1, 2, 3, 14], [0, 1, 2, 8], [0, 0, 1, 3]])}\). Find \(x_1\).`, num(1),
      "Work upward.", [S`Row 3: \(x_3=3\).`, S`Row 2: \(x_2+2x_3=8\), so \(x_2=8-6=2\).`, S`Row 1: \(x_1+2x_2+3x_3=14\), so \(x_1=14-4-9=1\).`], S`\(1\)`),
  ]),

  ...hard([
    ["A 4 × 4 system", S`Solve \[${sys([[1, 1, 1, 1, 2], [1, -1, 2, -1, 6], [2, 1, -1, 3, -1], [1, 2, 1, 2, 1]])}\]`,
      [...steps([[1, 1, 1, 1, 2], [1, -1, 2, -1, 6], [2, 1, -1, 3, -1], [1, 2, 1, 2, 1]], [
        [S`<strong>Column 1.</strong> Clear below the pivot 1 of row 1.`, ["R2-R1", "R3-2R1", "R4-R1"]],
        [S`<strong>Column 2.</strong> Row 4 has a 1 in column 2; swap it into row 2.`, ["R2<->R4"]],
        [S`Clear column 2 below the new pivot.`, ["R3+R2", "R4+2R2"]],
        [S`<strong>Column 3.</strong> Row 4 has a 1 in column 3; swap rows 3 and 4.`, ["R3<->R4"]],
        [S`Clear the −3 below the pivot of row 3. The matrix is in REF.`, ["R4+3R3"]],
      ]).steps, S`<strong>Back substitution.</strong> Row 4: \(2x_4=0\), so \(x_4=0\). Row 3: \(x_3=2\). Row 2: \(x_2+x_4=-1\), so \(x_2=-1\). Row 1: \(x_1+x_2+x_3+x_4=2\), so \(x_1=2+1-2-0=1\).`, S`<strong>Check</strong> in the original: \(1-1+2+0=2\) ✓, \(1+1+4-0=6\) ✓, \(2-1-2+0=-1\) ✓, \(1-2+2+0=1\) ✓.`],
      S`\((x_1,x_2,x_3,x_4)=(1,-1,2,0)\)`],
    ["A parameter decides the case", S`For which \(k\) does \(x+y+kz=1,\ x+ky+z=1,\ kx+y+z=1\) have one solution, none, or infinitely many?`,
      [S`Write the augmented matrix: \[${am([[1, 1, "k", 1], [1, "k", 1, 1], ["k", 1, 1, 1]])}\]`, S`<strong>Column 1.</strong> Subtract row 1 from row 2 and \(k\) times row 1 from row 3: \[\xrightarrow{\ R_2\to R_2-R_1,\ R_3\to R_3-kR_1\ }\ ${am([[1, 1, "k", 1], [0, "k-1", "1-k", 0], [0, "1-k", "1-k^2", "1-k"]])}\]`, S`<strong>Column 2.</strong> Add row 2 to row 3 (this needs no division, so it is valid for every \(k\)). Since \(1-k^2+1-k=-(k-1)(k+2)\): \[\xrightarrow{\ R_3\to R_3+R_2\ }\ ${am([[1, 1, "k", 1], [0, "k-1", "1-k", 0], [0, 0, "-(k-1)(k+2)", "1-k"]])}\]`, S`<strong>Case \(k=1\):</strong> rows 2 and 3 are zero; only \(x+y+z=1\) remains — infinitely many solutions (two free variables).`, S`<strong>Case \(k=-2\):</strong> row 3 is \([\,0\ 0\ 0\mid3\,]\) — no solution.`, S`<strong>Otherwise</strong> all three pivots \(1,\ k-1,\ -(k-1)(k+2)\) are nonzero — exactly one solution. Row 3 gives \(z=\frac{1-k}{-(k-1)(k+2)}=\frac1{k+2}\); row 2 gives \(y=z\); row 1 gives \(x=1-y-kz=\frac1{k+2}\).`],
      S`\(k=1\): infinitely many; \(k=-2\): none; otherwise exactly one, \(x=y=z=\frac1{k+2}\)`],
  ], [
    q("hard", S`For the system of the second challenge with \(k=2\), find \(x\).`, num(0.25),
      "x = y = z = 1/(k + 2).", [S`\(\frac{1}{2+2}\).`], S`\(0.25\)`),
    q("hard", "A system of 4 equations in 4 unknowns has exactly one solution. What is the coefficient part of the RREF of its augmented matrix?", choice(["the 4 × 4 identity matrix", "a matrix with a zero row", "any upper triangular matrix", "it depends on b"], 0),
      "Every column must hold a leading 1.", ["Four pivots in four columns, each alone in its column: the identity."], "the 4 × 4 identity matrix"),
    q("hard", S`Solve \(x_1-x_2+x_3=2,\ 2x_1+x_2-x_3=1,\ x_1+2x_2+3x_3=9\). Enter \((x_1,x_2,x_3)\).`, vec(1, 1, 2),
      "Clear column 1, then column 2.", [...steps([[1, -1, 1, 2], [2, 1, -1, 1], [1, 2, 3, 9]], [
        [S`Clear column 1 below the pivot 1.`, ["R2-2R1", "R3-R1"]],
        [S`Divide row 2 by 3 to make its pivot 1.`, ["R2*1/3"]],
        [S`Clear the 3 below the pivot of row 2.`, ["R3-3R2"]],
      ]).steps, S`Back substitution: \(5x_3=10\) gives \(x_3=2\); \(x_2-2=-1\) gives \(x_2=1\); \(x_1-1+2=2\) gives \(x_1=1\).`], S`\((1,1,2)\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between Gaussian and Gauss–Jordan elimination?", "Gaussian stops at REF and back substitutes; Gauss–Jordan continues to RREF and reads the answer."],
      ["What if the pivot position holds a 0?", "Swap with a lower row that has a nonzero entry in that column; if there is none, the column has no pivot — move right."],
      ["Does the order of operations change the answer?", "No. Every route ends at the same RREF, so the solution set is the same."],
      ["How do I see free variables during elimination?", "A column that never receives a pivot gives a free variable."],
      ["Why do computers use partial pivoting?", "Dividing by tiny numbers magnifies rounding errors; the largest available pivot keeps them small."],
    ],
    summary: [
      "Forward phase: column by column, zeros below each pivot → REF.",
      "Back substitution or backward phase (leading 1s, zeros above) → RREF.",
      "Swap when a pivot is 0; pick 1s as pivots to avoid fractions.",
      "The same algorithm detects one solution, infinitely many or none.",
      "Always check the answer in the original system.",
    ],
    next: "2.5 counts the pivots — the rank — and turns the three cases into a precise theorem.",
  }),
];

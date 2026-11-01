// LINALG1 6.6 — Properties of Determinants: how the three row operations change det, computing det by row
// reduction, det A ≠ 0 ⇔ invertible, det(AB) = det A det B, det Aᵀ = det A, det A⁻¹ = 1/det A, det(kA) = kⁿ det A.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, sfig, steps } from "./lib.mjs";
import { rowPic } from "./ws/fig3.mjs";
import { vecs2 } from "./ws/fig5.mjs";

export const TITLE = "6.6 Properties of Determinants";
export const ID = "11a10001-0001-4001-8001-000000000606";

const S = String.raw;
const M = (m) => am(m, false);
const D = (m) => S`\left|\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\end{array}\right|`;
const opsFig = sfig(rowPic([[[["R₁"], ["R₂"]], { label: "swap: × (−1)" }], " ", [[["kR₁"], ["R₂"]], { label: "scale a row: × k" }], " ", [[["R₁"], ["R₂ + cR₁"]], { label: "replace: unchanged" }]]), "the effect of each row operation on the determinant");
const shearFig = sfig(vecs2([[[2, 0], "a₁", "blue"], [[1, 2], "a₂", "red"], [[3, 2], "a₂ + 1·a₁", "green", null, true]], { xmin: -1, xmax: 4, ymin: -1, ymax: 3 },
  { segs: [{ pts: [[1, 2], [3, 2]], color: "#94a3b8", w: 1.4, dash: true }], raw: true }), "adding a multiple of one column (or row) to another shears the parallelogram: same base, same height, same area");

export const blocks = () => [
  intro({
    icon: "⚙️",
    title: "Properties of Determinants",
    overview: S`Cofactor expansion is slow for large matrices — but row reduction is fast, and each row operation changes the determinant in a simple, predictable way. A swap changes its sign, scaling a row scales it, and adding a multiple of one row to another changes nothing. So reduce to a triangular matrix, multiply the diagonal, and undo the bookkeeping. The same ideas give the big algebraic rules: \(\det(AB)=\det A\,\det B\), \(\det A^T=\det A\), \(\det A^{-1}=1/\det A\), and the final entry in the Invertible Matrix Theorem: \(A\) is invertible exactly when \(\det A\ne0\).`,
    goals: [
      "state how each row operation changes the determinant;",
      "compute determinants by row reduction, tracking swaps and scalings;",
      "explain why \\(\\det A\\ne0\\iff A\\) invertible;",
      "use \\(\\det(AB)\\), \\(\\det A^T\\), \\(\\det A^{-1}\\) and \\(\\det(kA)\\);",
      "recognise determinants that must be zero (dependent rows or columns).",
    ],
    outcomes: "inverses and determinants: properties of determinants",
    prior: [
      [S`\(\det\) of a triangular matrix?`, S`The product of its diagonal.`],
      [S`\(\det${M([[2, 1], [1, 3]])}\)?`, S`\(6-1=5\).`],
      [S`What does a zero row in an echelon form of a square \(A\) mean?`, S`Fewer than \(n\) pivots: singular.`],
    ],
    words: [
      ["Swap", "\\(R_i\\leftrightarrow R_j\\)", "det changes sign"],
      ["Scale", "\\(R_i\\to kR_i\\)", "det is multiplied by \\(k\\)"],
      ["Replacement", "\\(R_i\\to R_i+cR_j\\)", "det unchanged"],
      ["Multiplicative", "\\(\\det(AB)=\\det A\\det B\\)", "but not additive"],
      ["\\(\\det(kA)\\)", "\\(k^n\\det A\\) for \\(n\\times n\\)", "each of \\(n\\) rows scales"],
    ],
  }),

  section("📌 Row operations and the determinant", S`
  ${theorem("row operations", S`Let \(B\) come from the \(n\times n\) matrix \(A\) by one row operation. (1) Swap two rows: \(\det B=-\det A\). (2) Multiply one row by \(k\): \(\det B=k\det A\). (3) Add a multiple of one row to another: \(\det B=\det A\).`, S`(2) Expand along the scaled row: every term gains the factor \(k\). (1) For adjacent rows, expanding along the other rows shows every cofactor of the moved rows flips sign; a general swap is an odd number of adjacent swaps. A matrix with two equal rows therefore has \(\det=-\det\), i.e. 0. (3) Expand \(\det B\) along row \(i\), whose entries are \(a_{ik}+ca_{jk}\): it splits as \(\det A+c\det(\text{matrix with row } j \text{ copied into row } i)\), and the second has two equal rows, so it is 0.`)}
  ${opsFig}
  ${shearFig}`),

  section("📌 Determinant by row reduction", S`
  ${keyIdea(S`Reduce \(A\) to an echelon (triangular) form \(U\) using replacements, and record each swap (factor \(-1\)) and each scaling by \(k\) (factor \(k\)). Then \(\det U=(\text{product of the recorded factors})\cdot\det A\), and \(\det U\) is the product of its diagonal.`)}
  ${theorem("determinant test", S`\(A\) is invertible \(\iff\det A\ne0\).`, S`Row operations multiply the determinant by nonzero numbers only. If \(A\) is invertible its RREF is \(I\) with \(\det I=1\ne0\), so \(\det A\ne0\). If not, its RREF has a zero row, so the RREF has determinant 0, and hence \(\det A=0\).`)}`),

  section("📌 The algebraic rules", S`
  ${theorem("products, transposes, inverses, scalars", S`For \(n\times n\) matrices \(A,B\) and a scalar \(k\): \[\begin{gathered}\det(AB)=\det A\,\det B,\qquad \det A^T=\det A,\\ \det A^{-1}=\frac1{\det A},\qquad \det(kA)=k^n\det A.\end{gathered}\]`, S`For an elementary \(E\), \(\det(EB)=\det E\det B\) is exactly the row-operation theorem. If \(A\) is invertible, \(A=E_1\cdots E_k\) and the rule follows factor by factor; if not, \(AB\) is not invertible either and both sides are 0. Then \(\det A\det A^{-1}=\det I=1\). For \(A^T\): expanding along row \(i\) of \(A^T\) is expanding along column \(i\) of \(A\). Finally \(kA\) scales each of the \(n\) rows by \(k\).`)}`),

  section("📌 Explore", S`<p>The explorer shows a parallelogram and its determinant. Apply a shear (a replacement), swap the columns, or stretch one column, and compare the new determinant with the old one.</p>`),
  widget("laDetArea", { init: { a: 2, b: 1, c: 0, d: 2 } }),

  section("📌 Common mistakes", watchOut([
    "A replacement R_i + cR_j does NOT change det; a scaling R_i → kR_i DOES.",
    "Each swap flips the sign — count them.",
    "det(A + B) ≠ det A + det B in general.",
    "det(kA) = kⁿ det A, not k det A.",
    "If you scale a row to make a pivot 1, remember to multiply that factor back.",
  ])),

  examples([
    ["Determinant by replacements only", S`Compute \(\det A\) for \(A=${M([[1, 2, 1], [2, 5, 3], [1, 0, 4]])}\) by row reduction.`,
      [...steps([[1, 2, 1], [2, 5, 3], [1, 0, 4]], [
        [S`Replacements leave det unchanged. Clear column 1.`, ["R2-2R1", "R3-R1"]],
        [S`Clear column 2 below its pivot (another replacement).`, ["R3+2R2"]],
      ], { bar: false, intro: "Start with A" }).steps,
        S`Only replacements were used, so \(\det A=\det U=1\cdot1\cdot5=5\).`,
        S`Check by cofactors along row 1: \(1(20-0)-2(8-3)+1(0-5)=20-10-5=5\) ✓.`],
      S`\(\det A=5\)`],
    ["Tracking a swap and a scaling", S`Compute \(\det A\) for \(A=${M([[0, 2, 4], [1, 3, 2], [2, 1, 1]])}\).`,
      [...steps([[0, 2, 4], [1, 3, 2], [2, 1, 1]], [
        [S`Swap rows 1 and 2: det is multiplied by \(-1\).`, ["R1<->R2"]],
        [S`Replacement: det unchanged.`, ["R3-2R1"]],
        [S`Scale row 2 by \(\tfrac12\): det is multiplied by \(\tfrac12\).`, ["R2*1/2"]],
        [S`Replacement: det unchanged.`, ["R3+5R2"]],
      ], { bar: false, intro: "Start with A" }).steps,
        S`\(\det U=1\cdot1\cdot7=7\), and \(\det U=(-1)\cdot\tfrac12\cdot\det A\). So \(\det A=7\div\big(-\tfrac12\big)=-14\).`,
        S`Check along column 1: \(0-1${D([[2, 4], [1, 1]])}+2${D([[2, 4], [3, 2]])}=-(2-4)+2(4-12)=2-16=-14\) ✓.`],
      S`\(\det A=-14\)`],
    ["Dependent rows give zero", S`Compute \(\det A\) for \(A=${M([[2, 1, 3], [1, 0, 1], [3, 1, 4]])}\).`,
      [...steps([[2, 1, 3], [1, 0, 1], [3, 1, 4]], [
        [S`Swap to get a pivot 1 (det \(\times(-1)\)).`, ["R1<->R2"]],
        [S`Replacements: clear column 1.`, ["R2-2R1", "R3-3R1"]],
        [S`Replacement: clear column 2.`, ["R3-R2"]],
      ], { bar: false, intro: "Start with A" }).steps,
        S`A zero row: \(\det U=0\), so \(\det A=0\). Indeed row 3 of \(A\) is row 1 \(+\) row 2, and \(A\) is singular.`],
      S`\(\det A=0\)`, opsFig],
    ["Using the algebraic rules", S`\(A\) and \(B\) are \(3\times3\) with \(\det A=4\) and \(\det B=-2\). Find \(\det(AB)\), \(\det(A^TB^{-1})\), \(\det(2A)\) and \(\det(A^{-1}B^2)\).`,
      [S`\(\det(AB)=\det A\det B=4(-2)=-8\).`, S`\(\det(A^TB^{-1})=\det A^T\cdot\dfrac1{\det B}=4\cdot\dfrac1{-2}=-2\).`, S`\(\det(2A)=2^3\det A=8\cdot4=32\).`, S`\(\det(A^{-1}B^2)=\dfrac1{\det A}(\det B)^2=\dfrac14\cdot4=1\).`],
      S`\(-8,\ -2,\ 32,\ 1\)`],
    ["Checking det(AB) with numbers", S`Verify \(\det(AB)=\det A\det B\) for \(A=${M([[2, 1], [1, 3]])}\), \(B=${M([[1, 4], [0, 2]])}\).`,
      [S`\(\det A=6-1=5\) and \(\det B=2-0=2\).`, S`\[AB=${M([[2, 1], [1, 3]])}${M([[1, 4], [0, 2]])}=${M([["2+0", "8+2"], ["1+0", "4+6"]])}=${M([[2, 10], [1, 10]])}.\]`, S`\(\det(AB)=20-10=10=5\cdot2\) ✓.`],
      S`\(\det(AB)=10=\det A\det B\)`, shearFig],
  ]),

  practice([
    q("swap", S`\(\det A=6\). \(B\) is \(A\) with two rows swapped. \(\det B=\)?`, num(-6),
      "A swap flips the sign.", [S`\(-6\).`], S`\(-6\)`),
    q("scale", S`\(\det A=6\). \(B\) is \(A\) with row 2 multiplied by 3. \(\det B=\)?`, num(18),
      "Scaling one row scales det.", [S`\(3\cdot6\).`], S`\(18\)`),
    q("replace", S`\(\det A=6\). \(B\) is \(A\) after \(R_3\to R_3-7R_1\). \(\det B=\)?`, num(6),
      "Replacements do not change det.", [S`Unchanged.`], S`\(6\)`),
    q("kA", S`\(A\) is \(4\times4\) with \(\det A=3\). \(\det(-A)=\)?`, num(3),
      "(−1)⁴ det A.", [S`\(1\cdot3\).`], S`\(3\)`),
    q("inverse", S`\(\det A=-5\). \(\det A^{-1}=\)?`, num(-0.2),
      "1/det A.", [S`\(-\tfrac15\).`], S`\(-0.2\)`),
  ]),

  ...hard([
    ["A Vandermonde determinant", S`Compute \(\det${M([[1, 1, 1], [1, 2, 4], [1, 4, 16]])}\) by row reduction and compare with \((b-a)(c-a)(c-b)\) for \(a=1,b=2,c=4\).`,
      [...steps([[1, 1, 1], [1, 2, 4], [1, 4, 16]], [
        [S`Replacements: clear column 1.`, ["R2-R1", "R3-R1"]],
        [S`Replacement: clear column 2.`, ["R3-3R2"]],
      ], { bar: false, intro: "Start with the matrix" }).steps,
        S`Only replacements: \(\det=1\cdot1\cdot6=6\).`, S`Formula: \((2-1)(4-1)(4-2)=1\cdot3\cdot2=6\) ✓. The matrix is invertible because \(1,2,4\) are distinct.`],
      S`\(6\)`],
    ["Orthogonal-type matrices", S`Show that if \(Q^TQ=I\) then \(\det Q=\pm1\), and check it for \(Q=\tfrac15${M([[3, -4], [4, 3]])}\).`,
      [S`\(1=\det I=\det(Q^TQ)=\det Q^T\det Q=(\det Q)^2\), so \(\det Q=\pm1\).`,
        S`\[Q^TQ=\tfrac1{25}${M([[3, 4], [-4, 3]])}${M([[3, -4], [4, 3]])}=\tfrac1{25}${M([["9+16", "-12+12"], ["-12+12", "16+9"]])}=I.\]`,
        S`\(\det Q=\tfrac1{25}(3\cdot3-(-4)\cdot4)=\tfrac{25}{25}=1\) ✓ (the factor \(\tfrac15\) scales both rows, giving \(\tfrac1{25}\)).`],
      S`\(\det Q=\pm1\); here \(\det Q=1\)`],
  ], [
    q("hard", S`\(\det${M([[2, 4, 6], [1, 5, 3], [0, 1, 2]])}=\)?`, num(12),
      "Factor 2 from row 1, then reduce.", [S`\(2\det${M([[1, 2, 3], [1, 5, 3], [0, 1, 2]])}\); \(R_2-R_1=(0,3,0)\); then \(\det=1\cdot(3\cdot2-0\cdot1)=6\).`], S`\(12\)`),
    q("hard", S`\(A\) is \(3\times3\), \(\det A=2\). \(\det(3A^{-1}A^T)=\)?`, num(27),
      "3³ · (1/2) · 2.", [S`\(27\cdot\tfrac12\cdot2\).`], S`\(27\)`),
    q("hard", S`\(A^2=A\) and \(A\) is invertible. \(\det A=\)?`, num(1),
      "(det A)² = det A and det A ≠ 0.", [S`\(\det A(\det A-1)=0\), \(\det A\ne0\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["How do row operations change det?", "Swap: × (−1). Scale a row by k: × k. Replacement: unchanged."],
      ["How do I compute det quickly?", "Row reduce to triangular form, track the factors, multiply the diagonal."],
      ["When is det A = 0?", "Exactly when A is singular — e.g. dependent rows or columns."],
      ["What is det(AB)?", "det A · det B."],
      ["What about Aᵀ, A⁻¹ and kA?", "det Aᵀ = det A, det A⁻¹ = 1/det A, det(kA) = kⁿ det A."],
    ],
    summary: [
      "Swap ×(−1), scale ×k, replace ×1.",
      "det by reduction: triangular diagonal ÷ recorded factors.",
      "det A ≠ 0 ⇔ invertible.",
      "det(AB) = det A det B; det Aᵀ = det A.",
      "det A⁻¹ = 1/det A; det(kA) = kⁿ det A.",
    ],
    next: "6.7 uses cofactors once more: the adjugate formula for A⁻¹, Cramer's rule, and volumes.",
  }),
];

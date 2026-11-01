// LINALG1 6.2 — Computing Inverses by Row Reduction: row reduce [A | I]; if the left block becomes I the right
// block is A⁻¹, and if a zero row appears on the left A is singular. Solving several systems at once with A⁻¹,
// inverses of triangular matrices, and a parameter that destroys invertibility.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, steps } from "./lib.mjs";
import { rowPic } from "./ws/fig3.mjs";

export const TITLE = "6.2 Computing Inverses by Row Reduction";
export const ID = "11a10001-0001-4001-8001-000000000602";

const S = String.raw;
const M = (m) => am(m, false);
const I = (A) => A.map((r, i) => [...r, ...A.map((_, j) => (i === j ? 1 : 0))]);
const flowFig = sfig(rowPic([[[["*", "*", "*", 1, 0, 0], ["*", "*", "*", 0, 1, 0], ["*", "*", "*", 0, 0, 1]], { label: "[ A | I ]" }], "→", [[[1, 0, 0, "*", "*", "*"], [0, 1, 0, "*", "*", "*"], [0, 0, 1, "*", "*", "*"]], { label: "[ I | A⁻¹ ]" }]]), "the same row operations that turn A into I turn I into A⁻¹");
const singFig = sfig(rowPic([[[[1, 2, 3, 1, 0, 0], [0, 1, 1, -2, 1, 0], [0, 0, 0, 1, -1, 1]], { row: 2, rowFill: "#fee2e2", label: "a zero row on the left: singular" }]]), "if the left block gets a zero row, A has no inverse");

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Computing Inverses by Row Reduction",
    overview: S`The \(2\times2\) formula does not extend easily to larger matrices, but row reduction does. Put \(A\) and the identity side by side, \([\,A\mid I\,]\), and row reduce. If the left block becomes \(I\), the right block has become \(A^{-1}\); if the left block produces a zero row, \(A\) is singular and has no inverse. The reason is simple: finding \(A^{-1}\) column by column means solving \(A\vec x=\vec e_1,\dots,A\vec x=\vec e_n\), and \([\,A\mid I\,]\) solves all \(n\) systems at once.`,
    goals: [
      "find \\(A^{-1}\\) by row reducing \\([\\,A\\mid I\\,]\\), showing every operation and matrix;",
      "recognise a singular matrix from a zero row in the left block;",
      "explain why the method works (columns of \\(A^{-1}\\) solve \\(A\\vec x=\\vec e_j\\));",
      "use \\(A^{-1}\\) to solve several systems with the same coefficient matrix;",
      "invert triangular matrices and handle a parameter.",
    ],
    outcomes: "inverses and determinants: computing inverses by row reduction",
    prior: [
      [S`What is the RREF of an invertible \(2\times2\) matrix?`, S`\(I_2\).`],
      [S`Invert \(${M([[2, 1], [1, 1]])}\) with the formula.`, S`\(ad-bc=1\): \(${M([[1, -1], [-1, 2]])}\).`],
      [S`What does a zero row in an RREF mean for \(A\vec x=\vec 0\)?`, S`A free variable: nonzero solutions.`],
    ],
    words: [
      ["\\([\\,A\\mid I\\,]\\)", "\\(A\\) with the identity attached", "an \\(n\\times2n\\) matrix"],
      ["Gauss–Jordan", "reduce all the way to RREF", "pivots 1, zeros above and below"],
      ["Left block", "the first \\(n\\) columns", "becomes \\(I\\) or a zero row"],
      ["Right block", "the last \\(n\\) columns", "becomes \\(A^{-1}\\)"],
      ["Singular", "a zero row appears on the left", "no inverse"],
    ],
  }),

  section("📌 The method", S`
  ${theorem("inverse by row reduction", S`Row reduce \([\,A\mid I\,]\). If the left block reduces to \(I\), then the result is \([\,I\mid A^{-1}\,]\). If the left block has a zero row at any stage, \(A\) is not invertible.`, S`Column \(j\) of \(A^{-1}\) is the solution of \(A\vec x=\vec e_j\). Reducing \([\,A\mid\vec e_1\ \cdots\ \vec e_n\,]\) solves all \(n\) systems with the same operations; when the left block is \(I\), each right-hand column has become the solution of its system. A zero row on the left means fewer than \(n\) pivots, so \(A\vec x=\vec 0\) has nonzero solutions and \(A\) cannot be invertible.`)}
  ${flowFig}
  ${keyIdea(S`Apply every operation to the whole row — both blocks. Check the answer with one product \(AA^{-1}=I\).`)}`),

  section("📌 When it fails", S`
  <p>If the reduction produces a row of zeros in the left block, stop: \(A\) has fewer than \(n\) pivots and is singular. The right block at that moment is not an inverse of anything.</p>
  ${singFig}`),

  section("📌 Explore", S`<p>Step through the reduction of \([\,A\mid I\,]\) one operation at a time for several matrices, including a singular one. The left block marches to \(I\) while the right block becomes \(A^{-1}\).</p>`),
  widget("laInvSteps", { init: { set: "a" } }),

  section("📌 Common mistakes", watchOut([
    "Apply each row operation to the WHOLE row of [A | I], not only the left block.",
    "Column operations are not allowed — only row operations.",
    "A zero row on the left means NO inverse; do not read the right block.",
    "Reduce the left block all the way to I (zeros above the pivots too).",
    "Always check: A times your answer must be I.",
  ])),

  examples([
    ["A 2 × 2 inverse by row reduction", S`Find \(A^{-1}\) for \(A=${M([[1, 3], [2, 7]])}\) by row reducing \([\,A\mid I\,]\).`,
      [...steps(I([[1, 3], [2, 7]]), [
        [S`Clear below the first pivot.`, ["R2-2R1"]],
        [S`Clear above the second pivot.`, ["R1-3R2"]],
      ], { bar: 2, intro: "Write [A | I]" }).steps,
        S`The left block is \(I\), so \(A^{-1}=${M([[7, -3], [-2, 1]])}\) (the formula agrees: \(ad-bc=7-6=1\)).`,
        S`Check: \[${M([[1, 3], [2, 7]])}${M([[7, -3], [-2, 1]])}=${M([["7-6", "-3+3"], ["14-14", "-6+7"]])}=${M([[1, 0], [0, 1]])}\ \checkmark\]`],
      S`\(A^{-1}=${M([[7, -3], [-2, 1]])}\)`],
    ["A 3 × 3 inverse", S`Find the inverse of \(A=${M([[1, 2, 0], [0, 1, 1], [1, 2, 1]])}\).`,
      [...steps(I([[1, 2, 0], [0, 1, 1], [1, 2, 1]]), [
        [S`Clear column 1 below the pivot.`, ["R3-R1"]],
        [S`Column 2 already has a 0 below its pivot; column 3's pivot is in row 3. Clear column 3 above it.`, ["R2-R3"]],
        [S`Clear column 2 above its pivot.`, ["R1-2R2"]],
      ], { bar: 3, intro: "Write [A | I]" }).steps,
        S`So \(A^{-1}=${M([[-1, -2, 2], [1, 1, -1], [-1, 0, 1]])}\).`,
        S`Check: \[${M([[1, 2, 0], [0, 1, 1], [1, 2, 1]])}${M([[-1, -2, 2], [1, 1, -1], [-1, 0, 1]])}=${M([["-1+2+0", "-2+2+0", "2-2+0"], ["0+1-1", "0+1+0", "0-1+1"], ["-1+2-1", "-2+2+0", "2-2+1"]])}=${M([[1, 0, 0], [0, 1, 0], [0, 0, 1]])}\ \checkmark\]`],
      S`\(A^{-1}=${M([[-1, -2, 2], [1, 1, -1], [-1, 0, 1]])}\)`, flowFig],
    ["Detecting a singular matrix", S`Try to invert \(A=${M([[1, 2, 3], [2, 5, 7], [1, 3, 4]])}\).`,
      [...steps(I([[1, 2, 3], [2, 5, 7], [1, 3, 4]]), [
        [S`Clear column 1.`, ["R2-2R1", "R3-R1"]],
        [S`Clear column 2 below its pivot.`, ["R3-R2"]],
      ], { bar: 3, intro: "Write [A | I]" }).steps,
        S`Row 3 of the left block is zero: \(A\) has only two pivots, so it is singular. (Indeed row 3 of \(A\) is row 2 minus row 1.)`],
      S`no inverse: \(A\) is singular`, singFig],
    ["Swaps and fractions", S`Find the inverse of \(A=${M([[0, 2, 1], [1, 1, 0], [2, 1, 1]])}\).`,
      [...steps(I([[0, 2, 1], [1, 1, 0], [2, 1, 1]]), [
        [S`The \((1,1)\) entry is 0: swap in a row with a nonzero first entry.`, ["R1<->R2"]],
        [S`Clear column 1 below the pivot.`, ["R3-2R1"]],
        [S`Make the second pivot 1.`, ["R2*1/2"]],
        [S`Clear column 2 below its pivot.`, ["R3+R2"]],
        [S`Make the third pivot 1.`, ["R3*2/3"]],
        [S`Clear column 3 above its pivot.`, ["R2-1/2R3"]],
        [S`Clear column 2 above its pivot.`, ["R1-R2"]],
      ], { bar: 3, intro: "Write [A | I]" }).steps,
        S`\(A^{-1}=\tfrac13${M([[-1, 1, 1], [1, 2, -1], [1, -4, 2]])}\).`,
        S`Check: \[${M([[0, 2, 1], [1, 1, 0], [2, 1, 1]])}\cdot\tfrac13${M([[-1, 1, 1], [1, 2, -1], [1, -4, 2]])}=\tfrac13${M([["0+2+1", "0+4-4", "0-2+2"], ["-1+1+0", "1+2+0", "1-1+0"], ["-2+1+1", "2+2-4", "2-1+2"]])}=${M([[1, 0, 0], [0, 1, 0], [0, 0, 1]])}\ \checkmark\]`],
      S`\(A^{-1}=\tfrac13${M([[-1, 1, 1], [1, 2, -1], [1, -4, 2]])}\)`],
    ["Several systems at once", S`With \(A=${M([[1, 2, 0], [0, 1, 1], [1, 2, 1]])}\) (Example 2), solve \(A\vec x=(1,0,2)\) and \(A\vec x=(0,3,1)\).`,
      [S`Each solution is \(A^{-1}\vec b\): \[A^{-1}${cv(1, 0, 2)}=${M([[-1, -2, 2], [1, 1, -1], [-1, 0, 1]])}${cv(1, 0, 2)}=${cv("-1+0+4", "1+0-2", "-1+0+2")}=${cv(3, -1, 1)}.\]`,
        S`\[A^{-1}${cv(0, 3, 1)}=${M([[-1, -2, 2], [1, 1, -1], [-1, 0, 1]])}${cv(0, 3, 1)}=${cv("0-6+2", "0+3-1", "0+0+1")}=${cv(-4, 2, 1)}.\]`,
        S`Check the first: \[A${cv(3, -1, 1)}=${M([[1, 2, 0], [0, 1, 1], [1, 2, 1]])}${cv(3, -1, 1)}=${cv("3-2+0", "0-1+1", "3-2+1")}=${cv(1, 0, 2)}\ \checkmark\]`],
      S`\(\vec x=(3,-1,1)\) and \(\vec x=(-4,2,1)\)`],
  ]),

  practice([
    q("2 × 2", S`Row reduce \([\,A\mid I\,]\) for \(A=${M([[1, 4], [0, 1]])}\). What is the \((1,2)\) entry of \(A^{-1}\)?`, num(-4),
      "One operation: R₁ − 4R₂.", [S`\(A^{-1}=${M([[1, -4], [0, 1]])}\).`], S`\(-4\)`),
    q("singular?", S`Reducing \([\,A\mid I\,]\) gives a left block \(${M([[1, 2, 0], [0, 1, 3], [0, 0, 0]])}\). Is \(A\) invertible?`, choice(["no", "yes"], 0),
      "A zero row on the left.", [S`Only two pivots.`], S`no`),
    q("diagonal", S`Find the \((3,3)\) entry of \(\operatorname{diag}(2,-1,4)^{-1}\).`, num(0.25),
      "Invert each diagonal entry.", [S`\(\operatorname{diag}(\tfrac12,-1,\tfrac14)\).`], S`\(\tfrac14\)`),
    q("use A⁻¹", S`\(A^{-1}=${M([[1, 0, 1], [0, 2, 0], [1, 1, 1]])}\). Find \(x_3\) for \(A\vec x=(1,1,1)\).`, num(3),
      "Row 3 of A⁻¹ times b.", [S`\(1+1+1=3\).`], S`\(3\)`),
    q("size", S`For a \(4\times4\) matrix, how many columns does \([\,A\mid I\,]\) have?`, num(8),
      "n + n.", [S`\(4+4\).`], S`\(8\)`),
  ]),

  ...hard([
    ["A parameter", S`For which \(k\) is \(A=${M([[1, 0, "k"], [0, 1, 1], ["k", 1, 2]])}\) invertible? Find \(A^{-1}\) when \(k=0\).`,
      [S`Reduce \(A\) with \(k\) kept as a letter. \(R_3\to R_3-kR_1\): \[${M([[1, 0, "k"], [0, 1, 1], [0, 1, "2-k^2"]])}\] \(R_3\to R_3-R_2\): \[${M([[1, 0, "k"], [0, 1, 1], [0, 0, "1-k^2"]])}\] Three pivots exactly when \(1-k^2\ne0\): \(k\ne\pm1\).`,
        ...steps(I([[1, 0, 0], [0, 1, 1], [0, 1, 2]]), [
          [S`For \(k=0\): clear column 2 below its pivot.`, ["R3-R2"]],
          [S`Clear column 3 above its pivot.`, ["R2-R3"]],
        ], { bar: 3, intro: "Write [A | I] with k = 0" }).steps,
        S`Check: \(${M([[1, 0, 0], [0, 1, 1], [0, 1, 2]])}${M([[1, 0, 0], [0, 2, -1], [0, -1, 1]])}=${M([[1, 0, 0], [0, "2-1", "-1+1"], [0, "2-2", "-1+2"]])}=I\) ✓.`],
      S`invertible for \(k\ne\pm1\); for \(k=0\), \(A^{-1}=${M([[1, 0, 0], [0, 2, -1], [0, -1, 1]])}\)`],
    ["The inverse of a triangular matrix", S`Invert \(U=${M([[1, 2, 3], [0, 1, 4], [0, 0, 1]])}\) and describe the shape of \(U^{-1}\).`,
      [...steps(I([[1, 2, 3], [0, 1, 4], [0, 0, 1]]), [
        [S`Already in echelon form with pivots 1. Clear column 3 above its pivot.`, ["R2-4R3", "R1-3R3"]],
        [S`Clear column 2 above its pivot.`, ["R1-2R2"]],
      ], { bar: 3, intro: "Write [U | I]" }).steps,
        S`\(U^{-1}=${M([[1, -2, 5], [0, 1, -4], [0, 0, 1]])}\): again upper triangular with 1s on the diagonal, because only upward clearing operations were needed.`],
      S`\(U^{-1}=${M([[1, -2, 5], [0, 1, -4], [0, 0, 1]])}\), upper triangular`],
  ], [
    q("hard", S`For which \(a\) is \(${M([[1, 1, 1], [1, 2, 3], [1, 3, "a"]])}\) singular?`, num(5),
      "R₂ − R₁, R₃ − R₁, then R₃ − 2R₂.", [S`Last pivot \((a-1)-2\cdot2=a-5\).`], S`\(5\)`),
    q("hard", S`The inverse of \(${M([[2, 0, 0], [1, 1, 0], [0, 0, 3]])}\) has \((2,1)\) entry:`, num(-0.5),
      "Reduce [A | I].", [S`\(R_1\to\tfrac12R_1\), then \(R_2-R_1\): row 2 of the right block is \((-\tfrac12,1,0)\).`], S`\(-\tfrac12\)`),
    q("hard", S`\(A\vec x=\vec e_1\) has solution \((2,1,0)\), \(A\vec x=\vec e_2\) has \((0,1,1)\), \(A\vec x=\vec e_3\) has \((1,0,1)\). Find the \((3,2)\) entry of \(A^{-1}\).`, num(1),
      "Column j of A⁻¹ solves Ax = eⱼ.", [S`\(A^{-1}=${M([[2, 0, 1], [1, 1, 0], [0, 1, 1]])}\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I compute A⁻¹ for a large matrix?", "Row reduce [A | I]; when the left block is I the right block is A⁻¹."],
      ["How do I see that A is singular?", "A zero row appears in the left block."],
      ["Why does it work?", "Column j of A⁻¹ solves Ax = eⱼ, and [A | I] solves all n systems at once."],
      ["What must I apply each operation to?", "The whole row — both blocks."],
      ["How do I check?", "Multiply A by the answer and get I."],
    ],
    summary: [
      "[A | I] → [I | A⁻¹].",
      "Zero row on the left ⇒ singular.",
      "Column j of A⁻¹ solves Ax = eⱼ.",
      "A⁻¹b solves Ax = b for every b.",
      "Triangular matrices have triangular inverses.",
    ],
    next: "6.3 explains the method: each row operation is multiplication by an elementary matrix.",
  }),
];

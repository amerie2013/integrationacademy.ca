// LINALG1 Worksheet 6.3 — Elementary Matrices
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);

const NOTES = [
  { h: "1. Elementary matrices",
    lead: def("elementary matrix", S`An \emph{elementary matrix} is the identity after exactly one elementary row operation: a swap \(R_i\leftrightarrow R_j\), a scaling \(R_i\to cR_i\) (\(c\ne0\)), or a replacement \(R_i\to R_i+cR_j\).`),
    fig: P(rowPic([[[[0, 1, 0], [1, 0, 0], [0, 0, 1]], { label: "swap" }], " ", [[[1, 0, 0], [0, -2, 0], [0, 0, 1]], { label: "scale" }], " ", [[[1, 0, 0], [0, 1, 0], [2, 0, 1]], { label: "replace" }]]), 4.6), w: 0.5 },
  { h: "2. Left multiplication performs the operation",
    lead: thm("EA", S`If \(E\) is obtained from \(I_m\) by a row operation, then \(EA\) is \(A\) with that same operation performed.`) + S`\pf{Row \(i\) of \(EA\) is (row \(i\) of \(E\))\(A\); an unchanged row of \(E\) is \(\vec e_i^{\,T}\), and the changed row, e.g. \(\vec e_i^{\,T}+c\vec e_j^{\,T}\), produces (row \(i\))\(+c\)(row \(j\)) of \(A\).}`,
    fig: P(rowPic([[[[1, 0, 0], [0, 1, 0], [2, 0, 1]], { row: 2, label: "E" }], [[[1, 0, 2], [3, 1, 1], [-2, 1, 0]], { label: "A" }], "=", [[[1, 0, 2], [3, 1, 1], [0, 1, 4]], { row: 2, rowFill: "#dcfce7", label: "EA" }]]), 4.8), w: 0.5 },
  { h: "3. Inverses",
    lead: thm("inverse of E", S`Every elementary matrix is invertible; \(E^{-1}\) is the elementary matrix of the reverse operation (swap back; scale by \(1/c\); subtract \(cR_j\) instead of adding).`),
    fig: P(rowPic([[[[1, 0], [-5, 1]], { label: "R₂ − 5R₁" }], "⟷", [[[1, 0], [5, 1]], { label: "R₂ + 5R₁" }]]), 3.4), w: 0.55 },
  { h: "4. Recording a reduction",
    lead: thm("factorisation", S`If \(E_k\cdots E_1A=I\), then \(A^{-1}=E_k\cdots E_1\) and \(A=E_1^{-1}\cdots E_k^{-1}\). So a square matrix is invertible \(\iff\) it is a product of elementary matrices.`) + S`\pf{\(B=E_k\cdots E_1\) is invertible and \(BA=I\), so \(A=B^{-1}\) and \(B=A^{-1}\).}`,
    fig: P(rowPic([[[["*", "*"], ["*", "*"]], { label: "A" }], "→E₁→", [[["*", "*"], [0, "*"]], {}], "→E₂→", [[[1, 0], [0, 1]], { label: "I" }]]), 4.6), w: 0.5,
    body: S`The first operation is the \emph{rightmost} factor.` },
  { h: "5. Rows versus columns",
    lead: S`Multiplying \(A\) on the \emph{left} by \(E\) changes rows; multiplying on the \emph{right}, \(AE\), changes columns. For instance \(A${M([[1, 3], [0, 1]])}\) adds 3 times column 1 to column 2.`,
    fig: P(rowPic([[[[1, 2], [3, 4]], { label: "A" }], [[[1, 3], [0, 1]], { label: "E" }], "=", [[[1, 5], [3, 13]], { col: 1, label: "AE" }]]), 4.2), w: 0.5 },
];

const EXAMPLES = [
  { title: "A replacement matrix at work", q: S`Write \(E\) for \(R_3\to R_3+2R_1\) (\(3\times3\)) and compute \(EA\) for \(A=${M([[1, 0, 2], [3, 1, 1], [-2, 1, 0]])}\).`,
    fig: P(rowPic([[[[1, 0, 0], [0, 1, 0], [2, 0, 1]], { row: 2, label: "E" }], [[[1, 0, 2], [3, 1, 1], [-2, 1, 0]], { label: "A" }]]), 3.4),
    steps: [S`Apply the operation to \(I_3\): \(E=${M([[1, 0, 0], [0, 1, 0], [2, 0, 1]])}\).`, S`\[EA=${M([[1, 0, 0], [0, 1, 0], [2, 0, 1]])}${M([[1, 0, 2], [3, 1, 1], [-2, 1, 0]])}=${M([[1, 0, 2], [3, 1, 1], ["2-2", "0+1", "4+0"]])}=${M([[1, 0, 2], [3, 1, 1], [0, 1, 4]])}.\]`, S`Row 3 became row 3 \(+2\)·row 1, exactly the operation.`],
    ans: S`\(EA=${M([[1, 0, 2], [3, 1, 1], [0, 1, 4]])}\)` },
  { title: "Reading the operation", q: S`Which operations do \(E_1=${M([[1, 0, 0], [0, 0, 1], [0, 1, 0]])}\) and \(E_2=${M([[1, 0, 0], [0, -2, 0], [0, 0, 1]])}\) perform?`,
    fig: P(rowPic([[[[1, 0, 0], [0, 0, 1], [0, 1, 0]], { label: "E₁" }], " ", [[[1, 0, 0], [0, -2, 0], [0, 0, 1]], { label: "E₂" }]]), 3.4),
    steps: [S`\(E_1\) is \(I_3\) with rows 2 and 3 swapped: \(R_2\leftrightarrow R_3\).`, S`\(E_2\) is \(I_3\) with row 2 multiplied by \(-2\): \(R_2\to-2R_2\).`],
    ans: S`\(R_2\leftrightarrow R_3\); \(R_2\to-2R_2\)` },
  { title: "Inverses of elementary matrices", q: S`Find the inverses of \(E_1\), \(E_2\) from Example 2 and of \(E_3=${M([[1, 0], [-5, 1]])}\).`,
    fig: P(rowPic([[[[1, 0], [-5, 1]], { label: "E₃" }], [[[1, 0], [5, 1]], { label: "E₃⁻¹" }], "=", [[[1, 0], [0, 1]], {}]]), 3.6),
    steps: [S`\(E_1^{-1}=E_1\) (swap again). \(E_2^{-1}=\operatorname{diag}(1,-\tfrac12,1)\) (scale back by \(-\tfrac12\)).`, S`\(E_3\) does \(R_2-5R_1\); the reverse is \(R_2+5R_1\): \(E_3^{-1}=${M([[1, 0], [5, 1]])}\).`, S`Check: \(${M([[1, 0], [5, 1]])}${M([[1, 0], [-5, 1]])}=${M([[1, 0], ["5-5", 1]])}=I\) ✓.`],
    ans: S`\(E_1\); \(\operatorname{diag}(1,-\tfrac12,1)\); \(${M([[1, 0], [5, 1]])}\)` },
  { title: "Recording a 2 × 2 reduction", q: S`Reduce \(A=${M([[1, 2], [3, 7]])}\) to \(I\), record the elementary matrices and find \(A^{-1}=E_2E_1\).`,
    fig: P(matPic([[1, 2], [3, 7]], { label: "A" }), 1.6),
    steps: [...steps([[1, 2], [3, 7]], [
      [S`\(E_1=${M([[1, 0], [-3, 1]])}\): \(R_2-3R_1\).`, ["R2-3R1"]],
      [S`\(E_2=${M([[1, -2], [0, 1]])}\): \(R_1-2R_2\).`, ["R1-2R2"]],
    ], { bar: false, intro: "Start with A" }).steps, S`\[A^{-1}=E_2E_1=${M([[1, -2], [0, 1]])}${M([[1, 0], [-3, 1]])}=${M([["1+6", -2], [-3, 1]])}=${M([[7, -2], [-3, 1]])}.\]`, S`Check: \(${M([[1, 2], [3, 7]])}${M([[7, -2], [-3, 1]])}=${M([["7-6", "-2+2"], ["21-21", "-6+7"]])}=I\) ✓.`],
    ans: S`\(A^{-1}=${M([[7, -2], [-3, 1]])}\)` },
  { title: "A as a product", q: S`Write \(A=${M([[2, 0], [4, 1]])}\) as a product of elementary matrices.`,
    fig: P(matPic([[2, 0], [4, 1]], { label: "A" }), 1.6),
    steps: [...steps([[2, 0], [4, 1]], [
      [S`\(E_1=\operatorname{diag}(\tfrac12,1)\): make the pivot 1.`, ["R1*1/2"]],
      [S`\(E_2=${M([[1, 0], [-4, 1]])}\): clear below it.`, ["R2-4R1"]],
    ], { bar: false, intro: "Start with A" }).steps, S`\(E_2E_1A=I\), so \(A=E_1^{-1}E_2^{-1}=${M([[2, 0], [0, 1]])}${M([[1, 0], [4, 1]])}\).`, S`Check: \(${M([[2, 0], [0, 1]])}${M([[1, 0], [4, 1]])}=${M([[2, 0], [4, 1]])}=A\) ✓.`],
    ans: S`\(A=${M([[2, 0], [0, 1]])}${M([[1, 0], [4, 1]])}\)` },
  { title: "EA versus AE", q: S`\(E=${M([[1, 3], [0, 1]])}\), \(A=${M([[1, 2], [3, 4]])}\). Compute \(EA\) and \(AE\) and describe them.`,
    fig: P(rowPic([[[[1, 2], [3, 4]], { label: "A" }], [[[1, 3], [0, 1]], { label: "E" }]]), 2.8),
    steps: [S`\[EA=${M([[1, 3], [0, 1]])}${M([[1, 2], [3, 4]])}=${M([["1+9", "2+12"], [3, 4]])}=${M([[10, 14], [3, 4]])}:\] row 1 became row 1 \(+3\)·row 2.`, S`\[AE=${M([[1, 2], [3, 4]])}${M([[1, 3], [0, 1]])}=${M([[1, "3+2"], [3, "9+4"]])}=${M([[1, 5], [3, 13]])}:\] column 2 became column 2 \(+3\)·column 1.`],
    ans: S`\(EA\) changes a row, \(AE\) a column` },
  { title: "A 3 × 3 record", q: S`Reduce \(A=${M([[1, 1, 0], [0, 1, 0], [0, 2, 1]])}\) with elementary matrices and compute \(A^{-1}\).`,
    fig: P(matPic([[1, 1, 0], [0, 1, 0], [0, 2, 1]], { label: "A" }), 2.2),
    steps: [...steps([[1, 1, 0], [0, 1, 0], [0, 2, 1]], [
      [S`\(E_1\): \(R_1-R_2\).`, ["R1-R2"]],
      [S`\(E_2\): \(R_3-2R_2\).`, ["R3-2R2"]],
    ], { bar: false, intro: "Start with A" }).steps, S`\[A^{-1}=E_2E_1=${M([[1, 0, 0], [0, 1, 0], [0, -2, 1]])}${M([[1, -1, 0], [0, 1, 0], [0, 0, 1]])}=${M([[1, -1, 0], [0, 1, 0], [0, -2, 1]])}.\]`, S`Check: \(${M([[1, 1, 0], [0, 1, 0], [0, 2, 1]])}${M([[1, -1, 0], [0, 1, 0], [0, -2, 1]])}=${M([[1, "-1+1", 0], [0, 1, 0], [0, "2-2", 1]])}=I\) ✓.`],
    ans: S`\(${M([[1, -1, 0], [0, 1, 0], [0, -2, 1]])}\)` },
  { title: "The inverse of a product of elementary matrices", q: S`\(B=E_3E_2E_1\) for elementary \(E_i\). Write \(B^{-1}\) and explain why it exists.`,
    fig: P(rowPic([[[["*", "*"], ["*", "*"]], { label: "E₃" }], [[["*", "*"], ["*", "*"]], { label: "E₂" }], [[["*", "*"], ["*", "*"]], { label: "E₁" }]]), 3.4),
    steps: [S`Each \(E_i\) is invertible, and a product of invertible matrices is invertible.`, S`By the reverse-order rule, \(B^{-1}=E_1^{-1}E_2^{-1}E_3^{-1}\): undo the last operation first.`],
    ans: S`\(B^{-1}=E_1^{-1}E_2^{-1}E_3^{-1}\)` },
  { title: "Why E is invertible", q: S`Prove that the elementary matrix \(E\) of \(R_i\to R_i+cR_j\) (\(i\ne j\)) is invertible.`,
    steps: [S`Let \(E'\) be the elementary matrix of \(R_i\to R_i-cR_j\).`, S`\(E'E\) is \(I\) after "add \(c\)·row \(j\) to row \(i\)" and then "subtract \(c\)·row \(j\)": row \(j\) is unchanged throughout, so row \(i\) returns to \(\vec e_i^{\,T}\). Hence \(E'E=I\), and likewise \(EE'=I\).`],
    ans: S`\(E^{-1}\) is the matrix of \(R_i-cR_j\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Write the \(3\times3\) elementary matrix for \(R_1\leftrightarrow R_3\).`, ans: S`\(${M([[0, 0, 1], [0, 1, 0], [1, 0, 0]])}\)` },
  { level: 1, q: S`Which operation does \(${M([[1, 0], [4, 1]])}\) perform?`, ans: S`\(R_2\to R_2+4R_1\)` },
  { level: 1, q: S`Find the inverse of \(\operatorname{diag}(1,7,1)\).`, ans: S`\(\operatorname{diag}(1,\tfrac17,1)\)` },
  { level: 2, q: S`Compute \(EA\) for \(E=${M([[1, 0, 0], [-3, 1, 0], [0, 0, 1]])}\), \(A=${M([[1, 2, 0], [3, 4, 1], [0, 1, 1]])}\).`, ans: S`\(${M([[1, 2, 0], [0, -2, 1], [0, 1, 1]])}\)`, fig: P(rowPic([[[[1, 0, 0], [-3, 1, 0], [0, 0, 1]], { row: 1, label: "E" }], [[[1, 2, 0], [3, 4, 1], [0, 1, 1]], { label: "A" }]]), 3.4) },
  { level: 2, q: S`Reduce \(${M([[1, 3], [2, 7]])}\) to \(I\) with elementary matrices and give \(A^{-1}\) as their product.`, ans: S`\(E_1\): \(R_2-2R_1\), \(E_2\): \(R_1-3R_2\); \(A^{-1}=E_2E_1=${M([[7, -3], [-2, 1]])}\)` },
  { level: 2, q: S`Write \(${M([[1, 0], [3, 1]])}${M([[1, 2], [0, 1]])}\) as one matrix and say whether it is elementary.`, ans: S`\(${M([[1, 2], [3, 7]])}\): not elementary (two rows of \(I\) changed)` },
  { level: 2, q: S`Write \(${M([[3, 0], [0, 1]])}\) and \(${M([[1, 0], [0, -1]])}\) as operations, and find their product's inverse.`, ans: S`\(R_1\to3R_1\), \(R_2\to-R_2\); inverse \(\operatorname{diag}(\tfrac13,-1)\)`, fig: P(rowPic([[[[3, 0], [0, 1]], {}], [[[1, 0], [0, -1]], {}]]), 2.6) },
  { level: 2, q: S`Compute \(AE\) for \(A=${M([[2, 1], [0, 3]])}\), \(E=${M([[0, 1], [1, 0]])}\). What happened?`, ans: S`\(${M([[1, 2], [3, 0]])}\): the columns were swapped` },
  { level: 3, space: 5, q: S`Write \(${M([[1, 2], [3, 4]])}\) as a product of elementary matrices.`, ans: S`e.g. \(${M([[1, 0], [3, 1]])}${M([[1, 0], [0, -2]])}${M([[1, 2], [0, 1]])}\)`, fig: P(matPic([[1, 2], [3, 4]], { label: "A" }), 1.6) },
  { level: 3, space: 5, q: S`Prove that the product of two invertible matrices is a product of elementary matrices.`, ans: S`each factor is such a product; concatenate` },
  { level: 3, space: 5, q: S`Show that \(E^T\) is elementary whenever \(E\) is.`, ans: S`swap and scaling matrices are symmetric; the transpose of "\(R_i+cR_j\)" is "\(R_j+cR_i\)"` },
  { level: 3, space: 5, q: S`\(E_2E_1A=I\) with \(E_1=${M([[1, 0], [-2, 1]])}\), \(E_2=${M([[1, -4], [0, 1]])}\). Find \(A\).`, ans: S`\(A=E_1^{-1}E_2^{-1}=${M([[1, 4], [2, 9]])}\)` },
  { level: 3, space: 5, q: S`Explain why a singular matrix cannot be written as a product of elementary matrices.`, ans: S`such a product is invertible`, fig: P(matPic([[1, 2], [2, 4]], { label: "singular" }), 1.6) },
];

export const WS = {
  code: "6.3",
  title: "Elementary Matrices",
  bigideas: S`Each row operation is a left multiplication by an elementary matrix — the identity after that operation. Elementary matrices are invertible, so a reduction \(E_k\cdots E_1A=I\) gives \(A^{-1}=E_k\cdots E_1\) and writes \(A\) as a product of elementary matrices. This is why \([\,A\mid I\,]\to[\,I\mid A^{-1}\,]\) works.`,
  goals: ["Build elementary matrices.", "Compute and interpret \\(EA\\) and \\(AE\\).", "Invert elementary matrices.", "Record a reduction and read off \\(A^{-1}\\).", "Factor invertible matrices into elementary matrices."],
  curriculum: "Inverses and determinants — elementary matrices",
  vocab: [["Elementary matrix", "I after one row operation"], ["\\(EA\\)", "the operation applied to A"], ["\\(E^{-1}\\)", "the reverse operation"], ["\\(A^{-1}=E_k\\cdots E_1\\)", "recorded reduction"], ["\\(AE\\)", "a column operation"]],
  hook: S`A row reduction is a list of instructions. Can the whole list be packed into one matrix?`,
  concepts: NOTES,
  summary: [
    S`\(E\) = \(I\) after one row operation; \(EA\) performs it.`,
    S`\(E^{-1}\) undoes the operation.`,
    S`\(E_k\cdots E_1A=I\Rightarrow A^{-1}=E_k\cdots E_1\).`,
    S`\(A=E_1^{-1}\cdots E_k^{-1}\).`,
    S`\(AE\) acts on columns.`,
  ],
  tips: ["Build E by doing the operation to I.", "The first operation is the rightmost factor.", "Invert each factor and reverse the order.", "Left = rows, right = columns.", "Check products with a quick multiplication."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

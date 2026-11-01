// LINALG1 6.3 — Elementary Matrices: E from one row operation on I, EA performs that operation on A, inverses of
// elementary matrices, recording a reduction as E_k···E_1A = I so A⁻¹ = E_k···E_1, and A as a product of
// elementary matrices.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig, steps } from "./lib.mjs";
import { rowPic } from "./ws/fig3.mjs";

export const TITLE = "6.3 Elementary Matrices";
export const ID = "11a10001-0001-4001-8001-000000000603";

const S = String.raw;
const M = (m) => am(m, false);
const typesFig = sfig(rowPic([[[[0, 1, 0], [1, 0, 0], [0, 0, 1]], { cells: [[0, 1], [1, 0]], label: "swap R₁ ↔ R₂" }], " ", [[[1, 0, 0], [0, 5, 0], [0, 0, 1]], { cells: [[1, 1]], label: "scale R₂ by 5" }], " ", [[[1, 0, 0], [0, 1, 0], [-3, 0, 1]], { cells: [[2, 0]], label: "R₃ − 3R₁" }]]), "the three kinds of elementary matrix: each is I after one row operation");
const eaFig = sfig(rowPic([[[[1, 0, 0], [-2, 1, 0], [0, 0, 1]], { row: 1, label: "E" }], [[[1, 2, 1], [2, 5, 3], [0, 1, 4]], { label: "A" }], "=", [[[1, 2, 1], [0, 1, 1], [0, 1, 4]], { row: 1, rowFill: "#dcfce7", label: "EA: R₂ − 2R₁ done" }]]), "multiplying on the left by E performs E's row operation");

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Elementary Matrices",
    overview: S`Every row operation can be carried out by a matrix multiplication. Apply the operation to the identity and you get an <strong>elementary matrix</strong> \(E\); then \(EA\) is exactly \(A\) with that operation performed. Elementary matrices are invertible — their inverses undo the operation — so a whole row reduction \(A\to I\) becomes an equation \(E_k\cdots E_2E_1A=I\). This explains why \([\,A\mid I\,]\to[\,I\mid A^{-1}\,]\) works, and it shows that every invertible matrix is a product of elementary matrices.`,
    goals: [
      "write the elementary matrix of a row operation;",
      "compute \\(EA\\) and recognise it as the row operation applied to \\(A\\);",
      "find the inverse of an elementary matrix;",
      "record a reduction as \\(E_k\\cdots E_1A=I\\) and read off \\(A^{-1}=E_k\\cdots E_1\\);",
      "write an invertible matrix as a product of elementary matrices.",
    ],
    outcomes: "inverses and determinants: elementary matrices",
    prior: [
      [S`Name the three elementary row operations.`, S`Swap two rows; multiply a row by \(c\ne0\); add a multiple of one row to another.`],
      [S`Row \(i\) of \(EA\) is ... ?`, S`(row \(i\) of \(E\)) times \(A\).`],
      [S`What is \((AB)^{-1}\)?`, S`\(B^{-1}A^{-1}\).`],
    ],
    words: [
      ["Elementary matrix", "\\(I\\) after one row operation", S`\(${M([[1, 0], [-2, 1]])}\)`],
      ["\\(EA\\)", "the operation applied to \\(A\\)", "left multiplication"],
      ["\\(E^{-1}\\)", "the elementary matrix of the reverse operation", "\\(R_2+2R_1\\) undoes \\(R_2-2R_1\\)"],
      ["Recording", "\\(E_k\\cdots E_1A=I\\)", "so \\(A^{-1}=E_k\\cdots E_1\\)"],
      ["Factorisation", "\\(A=E_1^{-1}\\cdots E_k^{-1}\\)", "a product of elementary matrices"],
    ],
  }),

  section("📌 Elementary matrices", S`
  ${definition("elementary matrix", S`An <strong>elementary matrix</strong> is the result of performing one elementary row operation on the identity \(I_n\).`)}
  ${typesFig}
  ${theorem("row operations are multiplications", S`If \(E\) comes from a row operation on \(I_m\) and \(A\) is \(m\times n\), then \(EA\) is the result of performing that same operation on \(A\).`, S`Row \(i\) of \(EA\) is (row \(i\) of \(E\))\(A\). For an unchanged row \(i\), row \(i\) of \(E\) is \(\vec e_i^{\,T}\), giving row \(i\) of \(A\). For the changed row, e.g. \(R_i\to R_i+cR_j\), row \(i\) of \(E\) is \(\vec e_i^{\,T}+c\,\vec e_j^{\,T}\), giving (row \(i\)) \(+c\)(row \(j\)) of \(A\); swaps and scalings are the same idea.`)}
  ${eaFig}`),

  section("📌 Inverses and recording a reduction", S`
  ${theorem("inverse of an elementary matrix", S`Every elementary matrix is invertible, and \(E^{-1}\) is the elementary matrix of the reverse operation: a swap undoes itself, \(R_i\to cR_i\) is undone by \(R_i\to\tfrac1cR_i\), and \(R_i\to R_i+cR_j\) by \(R_i\to R_i-cR_j\).`, S`Performing an operation and then its reverse returns \(I\): \(E'E=I\) and \(EE'=I\).`)}
  ${theorem("invertible ⇔ product of elementary matrices", S`If row operations with matrices \(E_1,\dots,E_k\) reduce \(A\) to \(I\), then \[E_k\cdots E_2E_1A=I,\qquad A^{-1}=E_k\cdots E_2E_1,\qquad A=E_1^{-1}E_2^{-1}\cdots E_k^{-1}.\]`, S`Each operation is a left multiplication, so the reduction says \((E_k\cdots E_1)A=I\). The product \(B=E_k\cdots E_1\) is invertible (a product of invertible matrices), and \(BA=I\) gives \(A=B^{-1}\), hence \(AB=I\) too: \(B=A^{-1}\). Inverting \(B\) with the reverse-order rule gives the factorisation.`)}
  ${keyIdea(S`Applying the operations to \(I\) in \([\,A\mid I\,]\) builds exactly the product \(E_k\cdots E_1=A^{-1}\) in the right block.`)}`),

  section("📌 Explore", S`<p>Choose an operation type and its numbers. The explorer shows the elementary matrix \(E\), the product \(EA\) for a fixed \(A\), and the inverse \(E^{-1}\) that undoes it.</p>`),
  widget("laElem", { init: { kind: "add", i: 2, j: 1, c: -2 } }),

  section("📌 Common mistakes", watchOut([
    "E acts on rows only when it multiplies on the LEFT; AE acts on columns.",
    "The inverse of 'add c times row j' is 'add −c times row j', not 'divide'.",
    "In E_k···E₁A the FIRST operation is the rightmost factor.",
    "A = E₁⁻¹···E_k⁻¹ — invert each factor AND reverse the order.",
    "Scaling by 0 is not a row operation, so no elementary matrix has a zero row.",
  ])),

  examples([
    ["An elementary matrix at work", S`Write the elementary matrix \(E\) for \(R_2\to R_2-2R_1\) on \(3\times3\) matrices and compute \(EA\) for \(A=${M([[1, 2, 1], [2, 5, 3], [0, 1, 4]])}\).`,
      [S`Apply \(R_2\to R_2-2R_1\) to \(I_3\): \(E=${M([[1, 0, 0], [-2, 1, 0], [0, 0, 1]])}\).`,
        S`Multiply, row of \(E\) times column of \(A\): \[EA=${M([[1, 0, 0], [-2, 1, 0], [0, 0, 1]])}${M([[1, 2, 1], [2, 5, 3], [0, 1, 4]])}=${M([[1, 2, 1], ["-2+2", "-4+5", "-2+3"], [0, 1, 4]])}=${M([[1, 2, 1], [0, 1, 1], [0, 1, 4]])}.\]`,
        S`This is \(A\) with \(R_2-2R_1\) performed — the first step of eliminating column 1.`],
      S`\(E=${M([[1, 0, 0], [-2, 1, 0], [0, 0, 1]])}\); \(EA=${M([[1, 2, 1], [0, 1, 1], [0, 1, 4]])}\)`, eaFig],
    ["Inverses of elementary matrices", S`Find the inverses of \(E_1=${M([[0, 1, 0], [1, 0, 0], [0, 0, 1]])}\), \(E_2=${M([[1, 0, 0], [0, 5, 0], [0, 0, 1]])}\), \(E_3=${M([[1, 0, 0], [0, 1, 0], [-3, 0, 1]])}\).`,
      [S`\(E_1\) swaps rows 1 and 2; swapping again undoes it: \(E_1^{-1}=E_1\).`, S`\(E_2\) multiplies row 2 by 5; the reverse multiplies by \(\tfrac15\): \(E_2^{-1}=${M([[1, 0, 0], [0, "\\tfrac15", 0], [0, 0, 1]])}\).`,
        S`\(E_3\) does \(R_3-3R_1\); the reverse is \(R_3+3R_1\): \(E_3^{-1}=${M([[1, 0, 0], [0, 1, 0], [3, 0, 1]])}\).`,
        S`Check the last: \[E_3^{-1}E_3=${M([[1, 0, 0], [0, 1, 0], [3, 0, 1]])}${M([[1, 0, 0], [0, 1, 0], [-3, 0, 1]])}=${M([[1, 0, 0], [0, 1, 0], ["3-3", 0, 1]])}=I\ \checkmark\]`],
      S`\(E_1^{-1}=E_1\); \(E_2^{-1}=\operatorname{diag}(1,\tfrac15,1)\); \(E_3^{-1}\) has \(+3\) in position \((3,1)\)`, typesFig],
    ["Recording a reduction", S`Reduce \(A=${M([[1, 3], [2, 7]])}\) to \(I\), record each step as an elementary matrix, and compute \(A^{-1}=E_2E_1\).`,
      [...steps([[1, 3], [2, 7]], [
        [S`\(E_1=${M([[1, 0], [-2, 1]])}\) performs \(R_2-2R_1\).`, ["R2-2R1"]],
        [S`\(E_2=${M([[1, -3], [0, 1]])}\) performs \(R_1-3R_2\).`, ["R1-3R2"]],
      ], { bar: false, intro: "Start with A" }).steps,
        S`So \(E_2E_1A=I\) and \[A^{-1}=E_2E_1=${M([[1, -3], [0, 1]])}${M([[1, 0], [-2, 1]])}=${M([["1+6", "0-3"], ["0-2", "0+1"]])}=${M([[7, -3], [-2, 1]])}.\]`,
        S`Check: \[${M([[1, 3], [2, 7]])}${M([[7, -3], [-2, 1]])}=${M([["7-6", "-3+3"], ["14-14", "-6+7"]])}=I\ \checkmark\]`],
      S`\(A^{-1}=E_2E_1=${M([[7, -3], [-2, 1]])}\)`],
    ["A as a product of elementary matrices", S`Write \(A=${M([[1, 3], [2, 7]])}\) as a product of elementary matrices.`,
      [S`From the previous example \(E_2E_1A=I\), so \(A=E_1^{-1}E_2^{-1}\) (invert each factor and reverse the order).`,
        S`\(E_1^{-1}\) undoes \(R_2-2R_1\): \(${M([[1, 0], [2, 1]])}\). \(E_2^{-1}\) undoes \(R_1-3R_2\): \(${M([[1, 3], [0, 1]])}\).`,
        S`Check: \[E_1^{-1}E_2^{-1}=${M([[1, 0], [2, 1]])}${M([[1, 3], [0, 1]])}=${M([["1+0", "3+0"], ["2+0", "6+1"]])}=${M([[1, 3], [2, 7]])}=A\ \checkmark\]`],
      S`\(A=${M([[1, 0], [2, 1]])}${M([[1, 3], [0, 1]])}\)`],
    ["A reduction with a scaling", S`Reduce \(A=${M([[2, 4], [1, 3]])}\) to \(I\) with elementary matrices and find \(A^{-1}\).`,
      [...steps([[2, 4], [1, 3]], [
        [S`\(E_1=${M([["\\tfrac12", 0], [0, 1]])}\): make the first pivot 1.`, ["R1*1/2"]],
        [S`\(E_2=${M([[1, 0], [-1, 1]])}\): clear below it.`, ["R2-R1"]],
        [S`\(E_3=${M([[1, -2], [0, 1]])}\): clear above the second pivot.`, ["R1-2R2"]],
      ], { bar: false, intro: "Start with A" }).steps,
        S`\(E_2E_1=${M([[1, 0], [-1, 1]])}${M([["\\tfrac12", 0], [0, 1]])}=${M([["\\tfrac12", 0], ["-\\tfrac12", 1]])}\), then \[A^{-1}=E_3(E_2E_1)=${M([[1, -2], [0, 1]])}${M([["\\tfrac12", 0], ["-\\tfrac12", 1]])}=${M([["\\tfrac12+1", -2], ["-\\tfrac12", 1]])}=${M([["\\tfrac32", -2], ["-\\tfrac12", 1]])}.\]`,
        S`The \(2\times2\) formula agrees: \(\tfrac12${M([[3, -4], [-1, 2]])}\) (here \(ad-bc=6-4=2\)).`],
      S`\(A^{-1}=${M([["\\tfrac32", -2], ["-\\tfrac12", 1]])}\)`],
  ]),

  practice([
    q("E", S`The elementary matrix for \(R_3\to R_3+4R_2\) on \(3\times3\) matrices has which \((3,2)\) entry?`, num(4),
      "Apply the operation to I.", [S`Row 3 becomes \((0,4,1)\).`], S`\(4\)`),
    q("inverse", S`What is the \((2,1)\) entry of \(${M([[1, 0], [7, 1]])}^{-1}\)?`, num(-7),
      "Undo R₂ + 7R₁.", [S`\(R_2-7R_1\).`], S`\(-7\)`),
    q("EA", S`\(E=${M([[0, 1], [1, 0]])}\). What does \(EA\) do to \(A\)?`, choice(["swaps its two rows", "swaps its two columns", "transposes it", "doubles it"], 0),
      "Left multiplication acts on rows.", [S`\(E\) is \(I\) with rows swapped.`], S`swaps the rows`),
    q("order", S`\(E_3E_2E_1A=I\). Which operation was done first?`, choice([S`\(E_1\)`, S`\(E_3\)`, S`\(E_2\)`, "they commute"], 0),
      "The rightmost factor acts first.", [S`\(E_1A\) is computed first.`], S`\(E_1\)`),
    q("scale", S`The inverse of \(\operatorname{diag}(1,1,\tfrac14)\) has \((3,3)\) entry:`, num(4),
      "Undo scaling by ¼.", [S`Scale by 4.`], S`\(4\)`),
  ]),

  ...hard([
    ["A 3 × 3 factorisation", S`Reduce \(A=${M([[1, 0, 0], [2, 1, 0], [0, 3, 1]])}\) to \(I\) with elementary matrices and write \(A\) as their product.`,
      [...steps([[1, 0, 0], [2, 1, 0], [0, 3, 1]], [
        [S`\(E_1\): \(R_2-2R_1\).`, ["R2-2R1"]],
        [S`\(E_2\): \(R_3-3R_2\).`, ["R3-3R2"]],
      ], { bar: false, intro: "Start with A" }).steps,
        S`\(E_2E_1A=I\), so \(A=E_1^{-1}E_2^{-1}=${M([[1, 0, 0], [2, 1, 0], [0, 0, 1]])}${M([[1, 0, 0], [0, 1, 0], [0, 3, 1]])}\).`,
        S`Check: \[${M([[1, 0, 0], [2, 1, 0], [0, 0, 1]])}${M([[1, 0, 0], [0, 1, 0], [0, 3, 1]])}=${M([[1, 0, 0], [2, 1, 0], [0, 3, 1]])}=A\ \checkmark\]`],
      S`\(A=E_1^{-1}E_2^{-1}\)`],
    ["Why AE acts on columns", S`Let \(E=${M([[1, 0], [-2, 1]])}\) and \(A=${M([[3, 1], [5, 2]])}\). Compute \(EA\) and \(AE\) and describe each.`,
      [S`\[EA=${M([[1, 0], [-2, 1]])}${M([[3, 1], [5, 2]])}=${M([[3, 1], ["-6+5", "-2+2"]])}=${M([[3, 1], [-1, 0]])}:\] row 2 became row 2 \(-2\)·row 1.`,
        S`\[AE=${M([[3, 1], [5, 2]])}${M([[1, 0], [-2, 1]])}=${M([["3-2", 1], ["5-4", 2]])}=${M([[1, 1], [1, 2]])}:\] column 1 became column 1 \(-2\)·column 2.`,
        S`Left multiplication by \(E\) acts on rows; right multiplication acts on columns (with the "transposed" pattern).`],
      S`\(EA\): a row operation; \(AE\): a column operation`],
  ], [
    q("hard", S`How many elementary matrices are used to reduce \(${M([[2, 0], [0, 3]])}\) to \(I\)?`, num(2),
      "Two scalings.", [S`\(R_1\to\tfrac12R_1\), \(R_2\to\tfrac13R_2\).`], S`\(2\)`),
    q("hard", S`\(E_2E_1=${M([[1, -3], [-2, 7]])}\) reduces \(A\) to \(I\). Find \(a_{12}\).`, num(3),
      "A = (E₂E₁)⁻¹; ad − bc = 1.", [S`\(A=${M([[7, 3], [2, 1]])}\).`], S`\(3\)`),
    q("hard", S`Is the product of two elementary matrices always elementary?`, choice(["no", "yes"], 0),
      "Try two operations on different rows.", [S`\(${M([[1, 0], [2, 1]])}${M([[1, 3], [0, 1]])}=${M([[1, 3], [2, 7]])}\) changes two rows of \(I\).`], S`no`),
  ]),

  wrapUp({
    qas: [
      ["What is an elementary matrix?", "The identity after one row operation."],
      ["What does EA do?", "Performs E's row operation on A."],
      ["What is E⁻¹?", "The elementary matrix of the reverse operation."],
      ["How do elementary matrices give A⁻¹?", "If E_k···E₁A = I, then A⁻¹ = E_k···E₁."],
      ["How do I write A as a product of elementary matrices?", "A = E₁⁻¹E₂⁻¹···E_k⁻¹ — invert each and reverse the order."],
    ],
    summary: [
      "E = I after one row operation.",
      "EA performs that operation on A.",
      "E⁻¹ undoes the operation.",
      "E_k···E₁A = I ⇒ A⁻¹ = E_k···E₁.",
      "Invertible ⇔ product of elementary matrices.",
    ],
    next: "6.4 collects many equivalent ways of saying 'A is invertible' into one theorem.",
  }),
];

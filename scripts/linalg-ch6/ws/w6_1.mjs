// LINALG1 Worksheet 6.1 — The Inverse of a Matrix
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, matPic } from "./fig3.mjs";
import { vecs2 } from "./fig5.mjs";
import { am, steps } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);

const NOTES = [
  { h: "1. Inverse matrices",
    lead: def("inverse", S`A square matrix \(A\) is \emph{invertible} if there is a matrix \(B\) with \(AB=I\) and \(BA=I\). Then \(B\) is \emph{the} inverse \(A^{-1}\). A square matrix with no inverse is \emph{singular}.`) + thm("uniqueness", S`An invertible matrix has exactly one inverse.`) + S`\pf{If \(B\), \(C\) are inverses: \(B=BI=B(AC)=(BA)C=IC=C\).}`,
    fig: P(rowPic([[[[2, 3], [1, 2]], { label: "A" }], [[[2, -3], [-1, 2]], { label: "A⁻¹" }], "=", [[[1, 0], [0, 1]], { label: "I" }]]), 4.2), w: 0.5 },
  { h: "2. The 2 × 2 formula",
    lead: thm("2 × 2 inverse", S`\(A=${M([["a", "b"], ["c", "d"]])}\) is invertible \(\iff ad-bc\ne0\), and then \[A^{-1}=\frac1{ad-bc}${M([["d", "-b"], ["-c", "a"]])}.\]`) + S`\pf{\(${M([["a", "b"], ["c", "d"]])}${M([["d", "-b"], ["-c", "a"]])}=${M([["ad-bc", 0], [0, "ad-bc"]])}\). If \(ad-bc=0\) the columns are parallel and \(A\vec x=\vec 0\) has a nonzero solution.}`,
    fig: P(matPic([["d", "−b"], ["−c", "a"]], { cells: [[0, 0], [1, 1]], label: "swap the diagonal, negate the rest" }), 2.4), w: 0.55 },
  { h: "3. Singular matrices",
    lead: S`If \(A\vec x=\vec 0\) for some \(\vec x\ne\vec 0\), then \(A\) is singular: an inverse would give \(\vec x=A^{-1}A\vec x=A^{-1}\vec 0=\vec 0\). Geometrically, a \(2\times2\) matrix with parallel columns flattens the plane onto a line, and a flattening cannot be undone.`,
    fig: vecs2([[[3, -1], "column 1", "blue"], [[-6, 2], "column 2", "red"]], { xmin: -7, xmax: 4, ymin: -2, ymax: 3 }, { segs: [{ pts: [[-7, 7 / 3], [4, -4 / 3]], color: "violet", w: 2 }] }), w: 0.5 },
  { h: "4. Solving systems",
    lead: thm("unique solution", S`If \(A\) is invertible, \(A\vec x=\vec b\) has exactly one solution, \(\vec x=A^{-1}\vec b\), for every \(\vec b\).`) + S`\pf{\(A(A^{-1}\vec b)=\vec b\); and \(A\vec x=\vec b\) gives \(\vec x=A^{-1}A\vec x=A^{-1}\vec b\).}`,
    fig: P(rowPic([[[[3, -5], [-1, 2]], { label: "A⁻¹" }], [[[1], [2]], { label: "b" }], "=", [[[-7], [3]], { label: "x" }]]), 3.6), w: 0.5 },
  { h: "5. Rules",
    lead: thm("algebra of inverses", S`For invertible \(A,B\) and \(k\ne0\): \((A^{-1})^{-1}=A\), \((AB)^{-1}=B^{-1}A^{-1}\), \((A^T)^{-1}=(A^{-1})^T\), \((kA)^{-1}=\tfrac1kA^{-1}\).`) + S`\pf{Multiply each claimed inverse by the matrix: e.g. \((AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=AA^{-1}=I\).}`,
    fig: P(rowPic([[[["*", "*"], ["*", "*"]], { label: "A" }], [[["*", "*"], ["*", "*"]], { label: "B" }], "→", [[["*", "*"], ["*", "*"]], { label: "B⁻¹" }], [[["*", "*"], ["*", "*"]], { label: "A⁻¹" }]]), 4.4), w: 0.5,
    body: S`Undoing "first \(B\), then \(A\)" means undoing \(A\) first: the order reverses.` },
];

const EXAMPLES = [
  { title: "Verifying an inverse", q: S`Show that \(B=${M([[2, -3], [-1, 2]])}\) is the inverse of \(A=${M([[2, 3], [1, 2]])}\).`,
    fig: P(rowPic([[[[2, 3], [1, 2]], { label: "A" }], [[[2, -3], [-1, 2]], { label: "B" }]]), 3),
    steps: [S`\[AB=${M([[2, 3], [1, 2]])}${M([[2, -3], [-1, 2]])}=${M([["4-3", "-6+6"], ["2-2", "-3+4"]])}=${M([[1, 0], [0, 1]])}.\]`, S`\[BA=${M([[2, -3], [-1, 2]])}${M([[2, 3], [1, 2]])}=${M([["4-3", "6-6"], ["-2+2", "-3+4"]])}=${M([[1, 0], [0, 1]])}.\]`, S`Both products are \(I\): \(B=A^{-1}\).`],
    ans: S`\(AB=BA=I\)` },
  { title: "The formula", q: S`Find the inverse of \(A=${M([[5, 2], [2, 1]])}\).`,
    fig: P(matPic([[5, 2], [2, 1]], { cells: [[0, 0], [1, 1]], label: "A" }), 1.8),
    steps: [S`\(ad-bc=5(1)-2(2)=1\ne0\).`, S`\[A^{-1}=\frac11${M([[1, -2], [-2, 5]])}=${M([[1, -2], [-2, 5]])}.\]`, S`Check: \[${M([[5, 2], [2, 1]])}${M([[1, -2], [-2, 5]])}=${M([["5-4", "-10+10"], ["2-2", "-4+5"]])}=I\ \checkmark\]`],
    ans: S`\(${M([[1, -2], [-2, 5]])}\)` },
  { title: "A fractional inverse", q: S`Find the inverse of \(A=${M([[4, 2], [3, 3]])}\).`,
    fig: P(matPic([[4, 2], [3, 3]], { label: "A" }), 1.8),
    steps: [S`\(ad-bc=12-6=6\).`, S`\[A^{-1}=\frac16${M([[3, -2], [-3, 4]])}=${M([["\\tfrac12", "-\\tfrac13"], ["-\\tfrac12", "\\tfrac23"]])}.\]`, S`Check: \[\frac16${M([[4, 2], [3, 3]])}${M([[3, -2], [-3, 4]])}=\frac16${M([["12-6", "-8+8"], ["9-9", "-6+12"]])}=\frac16${M([[6, 0], [0, 6]])}=I\ \checkmark\]`],
    ans: S`\(\tfrac16${M([[3, -2], [-3, 4]])}\)` },
  { title: "A singular matrix", q: S`Show that \(A=${M([[3, -6], [-1, 2]])}\) is singular.`,
    fig: vecs2([[[3, -1], "column 1", "blue"], [[-6, 2], "column 2", "red"]], { xmin: -7, xmax: 4, ymin: -2, ymax: 3 }),
    steps: [S`\(ad-bc=6-6=0\).`, ...steps([[3, -6, 0], [-1, 2, 0]], [
      [S`Confirm with \(A\vec x=\vec 0\). Make the pivot 1.`, ["R1*1/3"]],
      [S`Clear below it.`, ["R2+R1"]],
    ], { intro: String.raw`Augmented matrix \([\,A\mid\vec 0\,]\)` }).steps,
      S`\(x_2=t\) free, \(x_1=2t\): \[A${C(2, 1)}=${M([[3, -6], [-1, 2]])}${C(2, 1)}=${C("6-6", "-2+2")}=${C(0, 0)},\] a nonzero solution, so no inverse exists.`],
    ans: S`singular` },
  { title: "Solving with the inverse", q: S`Solve \(2x_1+5x_2=1,\ x_1+3x_2=2\) using \(A^{-1}\).`,
    fig: P(rowPic([[[[3, -5], [-1, 2]], { label: "A⁻¹" }], [[[1], [2]], { label: "b" }]]), 2.6),
    steps: [S`\(A=${M([[2, 5], [1, 3]])}\), \(ad-bc=6-5=1\), \(A^{-1}=${M([[3, -5], [-1, 2]])}\).`, S`\[\vec x=A^{-1}\vec b=${M([[3, -5], [-1, 2]])}${C(1, 2)}=${C("3-10", "-1+4")}=${C(-7, 3)}.\]`, S`Check: \[${M([[2, 5], [1, 3]])}${C(-7, 3)}=${C("-14+15", "-7+9")}=${C(1, 2)}\ \checkmark\]`],
    ans: S`\((-7,3)\)` },
  { title: "The inverse of a product", q: S`For \(A=${M([[1, 1], [0, 1]])}\), \(B=${M([[2, 0], [0, 1]])}\), compute \((AB)^{-1}\) and \(B^{-1}A^{-1}\).`,
    fig: P(rowPic([[[[1, 1], [0, 1]], { label: "A" }], [[[2, 0], [0, 1]], { label: "B" }], "=", [[[2, 1], [0, 1]], { label: "AB" }]]), 3.6),
    steps: [S`\(AB=${M([[2, 1], [0, 1]])}\), \(ad-bc=2\): \((AB)^{-1}=\tfrac12${M([[1, -1], [0, 2]])}=${M([["\\tfrac12", "-\\tfrac12"], [0, 1]])}\).`, S`\(A^{-1}=${M([[1, -1], [0, 1]])}\), \(B^{-1}=${M([["\\tfrac12", 0], [0, 1]])}\): \[B^{-1}A^{-1}=${M([["\\tfrac12", 0], [0, 1]])}${M([[1, -1], [0, 1]])}=${M([["\\tfrac12", "-\\tfrac12"], [0, 1]])}\ \checkmark\]`],
    ans: S`both equal \(${M([["\\tfrac12", "-\\tfrac12"], [0, 1]])}\)` },
  { title: "Transpose and inverse", q: S`Verify \((A^T)^{-1}=(A^{-1})^T\) for \(A=${M([[2, 1], [3, 2]])}\).`,
    fig: P(rowPic([[[[2, 1], [3, 2]], { label: "A" }], "→ᵀ", [[[2, 3], [1, 2]], { label: "Aᵀ" }]]), 3),
    steps: [S`\(ad-bc=4-3=1\): \(A^{-1}=${M([[2, -1], [-3, 2]])}\), so \((A^{-1})^T=${M([[2, -3], [-1, 2]])}\).`, S`\(A^T=${M([[2, 3], [1, 2]])}\), \(ad-bc=1\): \((A^T)^{-1}=${M([[2, -3], [-1, 2]])}\) — the same ✓.`],
    ans: S`both \(${M([[2, -3], [-1, 2]])}\)` },
  { title: "A parameter", q: S`For which \(k\) is \(${M([["k", 2], [8, "k"]])}\) singular? Find the inverse for \(k=0\).`,
    fig: P(matPic([["k", 2], [8, "k"]], { label: "A" }), 1.8),
    steps: [S`\(ad-bc=k^2-16=0\iff k=\pm4\).`, S`For \(k=0\): \(ad-bc=-16\), \[A^{-1}=\frac1{-16}${M([[0, -2], [-8, 0]])}=${M([[0, "\\tfrac18"], ["\\tfrac12", 0]])}.\]`, S`Check: \(${M([[0, 2], [8, 0]])}${M([[0, "\\tfrac18"], ["\\tfrac12", 0]])}=${M([["0+1", 0], [0, "1+0"]])}=I\) ✓.`],
    ans: S`\(k=\pm4\); for \(k=0\), \(${M([[0, "\\tfrac18"], ["\\tfrac12", 0]])}\)` },
  { title: "Why the inverse is unique", q: S`Prove that a matrix has at most one inverse, and deduce that \(AB=I\) and \(AC=I\) with \(A\) invertible force \(B=C\).`,
    steps: [S`If \(B\) and \(C\) are both inverses, \(B=BI=B(AC)=(BA)C=IC=C\).`, S`If \(AB=AC=I\) and \(A\) is invertible, multiply on the left by \(A^{-1}\): \(B=A^{-1}=C\).`],
    ans: S`\(B=B(AC)=(BA)C=C\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the inverse of \(${M([[6, 5], [1, 1]])}\).`, ans: S`\(${M([[1, -5], [-1, 6]])}\)` },
  { level: 1, q: S`Is \(${M([[2, 4], [3, 6]])}\) invertible?`, ans: S`no (\(ad-bc=0\))` },
  { level: 1, q: S`Check that \(${M([[1, 0], [-2, 1]])}\) is the inverse of \(${M([[1, 0], [2, 1]])}\).`, ans: S`the product is \(I\)`, fig: P(rowPic([[[[1, 0], [2, 1]], {}], [[[1, 0], [-2, 1]], {}]]), 2.6) },
  { level: 2, q: S`Invert \(${M([[3, 4], [2, 3]])}\).`, ans: S`\(${M([[3, -4], [-2, 3]])}\)` },
  { level: 2, q: S`Invert \(${M([[2, 1], [4, 3]])}\).`, ans: S`\(\tfrac12${M([[3, -1], [-4, 2]])}\)` },
  { level: 2, q: S`Solve \(x_1+2x_2=3,\ 3x_1+7x_2=8\) with the inverse.`, ans: S`\((5,-1)\)`, fig: P(rowPic([[[[1, 2], [3, 7]], { label: "A" }], [[["x₁"], ["x₂"]], {}], "=", [[[3], [8]], {}]]), 3) },
  { level: 2, q: S`For which \(k\) is \(${M([["k", 3], [3, "k"]])}\) singular?`, ans: S`\(k=\pm3\)` },
  { level: 2, q: S`\(A^{-1}=${M([[1, 1], [0, 1]])}\), \(B^{-1}=${M([[1, 0], [1, 1]])}\). Find \((AB)^{-1}\).`, ans: S`\(B^{-1}A^{-1}=${M([[1, 1], [1, 2]])}\)`, fig: P(rowPic([[[[1, 0], [1, 1]], { label: "B⁻¹" }], [[[1, 1], [0, 1]], { label: "A⁻¹" }]]), 2.8) },
  { level: 3, space: 5, q: S`Prove that \((A^{-1})^{-1}=A\).`, ans: S`\(A^{-1}A=AA^{-1}=I\): \(A\) is an inverse of \(A^{-1}\)` },
  { level: 3, space: 5, q: S`Solve \(AX=B\) for \(A=${M([[1, 2], [1, 3]])}\), \(B=${M([[1, 0], [2, 1]])}\).`, ans: S`\(X=A^{-1}B=${M([[-1, -2], [1, 1]])}\)` },
  { level: 3, space: 5, q: S`Prove: if \(A^2=I\), then \(A\) is invertible with \(A^{-1}=A\). Give an example with \(A\ne\pm I\).`, ans: S`\(AA=I\); e.g. \(${M([[0, 1], [1, 0]])}\)`, fig: P(matPic([[0, 1], [1, 0]], { label: "swap" }), 1.6) },
  { level: 3, space: 5, q: S`Prove \((kA)^{-1}=\tfrac1kA^{-1}\) for \(k\ne0\).`, ans: S`\((kA)(\tfrac1kA^{-1})=AA^{-1}=I\)` },
  { level: 3, space: 5, q: S`Prove that a square matrix with a zero column is not invertible.`, ans: S`if column \(j\) is 0, \(A\vec e_j=\vec 0\) with \(\vec e_j\ne\vec 0\)` },
];

export const WS = {
  code: "6.1",
  title: "The Inverse of a Matrix",
  bigideas: S`A square matrix \(A\) is invertible when some \(A^{-1}\) satisfies \(AA^{-1}=A^{-1}A=I\); the inverse is unique and solves every system \(A\vec x=\vec b\) as \(\vec x=A^{-1}\vec b\). For \(2\times2\) matrices, \(ad-bc\) decides everything. Inverses reverse the order of products: \((AB)^{-1}=B^{-1}A^{-1}\).`,
  goals: ["Define and verify inverses.", "Invert \\(2\\times2\\) matrices with \\(ad-bc\\).", "Recognise singular matrices.", "Solve systems with \\(A^{-1}\\).", "Use the rules for products, transposes and scalars."],
  curriculum: "Inverses and determinants — the inverse of a matrix",
  vocab: [["Invertible", "\\(AB=BA=I\\) for some \\(B\\)"], ["Singular", "no inverse"], ["\\(ad-bc\\)", "decides a \\(2\\times2\\) inverse"], ["\\(\\vec x=A^{-1}\\vec b\\)", "the unique solution"], ["Reverse order", "\\((AB)^{-1}=B^{-1}A^{-1}\\)"]],
  hook: S`Turning a key and then turning it back leaves the lock as it was. Which matrices can be "turned back", and how do you find the reverse turn?`,
  concepts: NOTES,
  summary: [
    S`\(AA^{-1}=A^{-1}A=I\); the inverse is unique.`,
    S`\(2\times2\): \(A^{-1}=\tfrac1{ad-bc}${M([["d", "-b"], ["-c", "a"]])}\).`,
    S`\(ad-bc=0\) or \(A\vec x=\vec 0\) with \(\vec x\ne\vec 0\) \(\Rightarrow\) singular.`,
    S`\(\vec x=A^{-1}\vec b\).`,
    S`\((AB)^{-1}=B^{-1}A^{-1}\), \((A^T)^{-1}=(A^{-1})^T\).`,
  ],
  tips: ["Always check with one product.", "Swap the diagonal, negate the off-diagonal.", "Do not invert entry by entry.", "Reverse the order for products.", "Only square matrices have inverses."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

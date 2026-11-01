// LINALG1 6.5 — Determinants and Cofactor Expansion: det of 2 × 2 (ad − bc, signed area), minors and cofactors,
// expansion along any row or column, the checkerboard of signs, choosing a row with zeros, triangular matrices,
// and det A ≠ 0 ⇔ A invertible.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, num, choice, hard, definition, theorem, am, cv, sfig } from "./lib.mjs";
import { rowPic } from "./ws/fig3.mjs";
import { vecs2 } from "./ws/fig5.mjs";

export const TITLE = "6.5 Determinants and Cofactor Expansion";
export const ID = "11a10001-0001-4001-8001-000000000605";

const S = String.raw;
const M = (m) => am(m, false);
const D = (m) => S`\left|\begin{array}{${"c".repeat(m[0].length)}}${m.map((r) => r.join(" & ")).join(" \\\\ ")}\end{array}\right|`;
const areaFig = sfig(vecs2([[[3, 1], "a₁ = (3, 1)", "blue"], [[1, 2], "a₂ = (1, 2)", "red"], [[4, 3], "", "red", [3, 1], true], [[4, 3], "", "blue", [1, 2], true]], { xmin: -1, xmax: 5, ymin: -1, ymax: 4 },
  { raw: true }), "|det A| = area of the parallelogram on the columns: here 3·2 − 1·1 = 5");
const signFig = sfig(rowPic([[[["+", "−", "+", "−"], ["−", "+", "−", "+"], ["+", "−", "+", "−"], ["−", "+", "−", "+"]], { label: "sign of Cᵢⱼ = (−1)^{i+j}" }]]), "the checkerboard of cofactor signs");
const minorFig = sfig(rowPic([[[[2, -1, 3], [1, 4, 0], [5, 2, 1]], { row: 0, col: 1, label: "delete row 1, column 2" }], "→", [[[1, 0], [5, 1]], { label: "minor M₁₂" }]]), "a minor: the determinant of what is left after deleting a row and a column");

export const blocks = () => [
  intro({
    icon: "🔢",
    title: "Determinants and Cofactor Expansion",
    overview: S`The <strong>determinant</strong> turns a square matrix into one number that measures how the matrix stretches space. For \(2\times2\) matrices it is \(ad-bc\) — the signed area of the parallelogram spanned by the columns — and it is exactly the number that decided invertibility in 6.1. For larger matrices the determinant is defined by <strong>cofactor expansion</strong>: pick any row or column, multiply each entry by its signed minor, and add. Rows and columns with many zeros make the work short, and for triangular matrices the determinant is just the product of the diagonal.`,
    goals: [
      "compute \\(2\\times2\\) determinants and interpret them as signed areas;",
      "find minors \\(M_{ij}\\) and cofactors \\(C_{ij}=(-1)^{i+j}M_{ij}\\);",
      "expand a \\(3\\times3\\) or \\(4\\times4\\) determinant along any row or column;",
      "choose the row or column with the most zeros;",
      "use \\(\\det\\) of a triangular matrix and \\(\\det A\\ne0\\iff A\\) invertible.",
    ],
    outcomes: "inverses and determinants: determinants by cofactor expansion",
    prior: [
      [S`When is \(${M([["a", "b"], ["c", "d"]])}\) invertible?`, S`When \(ad-bc\ne0\).`],
      [S`What is the area of the parallelogram on \((2,0)\) and \((0,3)\)?`, S`6.`],
      [S`What is \((-1)^{2+3}\)?`, S`\(-1\).`],
    ],
    words: [
      ["\\(\\det A\\), \\(|A|\\)", "the determinant", S`\(\det${M([[1, 2], [3, 4]])}=-2\)`],
      ["Minor \\(M_{ij}\\)", "det after deleting row \\(i\\), column \\(j\\)", "an \\((n-1)\\times(n-1)\\) determinant"],
      ["Cofactor \\(C_{ij}\\)", "\\((-1)^{i+j}M_{ij}\\)", "signed minor"],
      ["Expansion", "\\(\\det A=\\sum_j a_{ij}C_{ij}\\)", "along row \\(i\\)"],
      ["Signed area", "\\(\\det\\) of two columns in \\(\\mathbb R^2\\)", "negative if the order is clockwise"],
    ],
  }),

  section("📌 2 × 2 determinants", S`
  ${definition("2 × 2 determinant", S`\[\det${M([["a", "b"], ["c", "d"]])}=${D([["a", "b"], ["c", "d"]])}=ad-bc.\] Its absolute value is the area of the parallelogram spanned by the columns; its sign is \(+\) when turning from column 1 to column 2 is counterclockwise.`)}
  ${areaFig}`),

  section("📌 Cofactor expansion", S`
  ${definition("minor and cofactor", S`For an \(n\times n\) matrix \(A\), the <strong>minor</strong> \(M_{ij}\) is the determinant of the \((n-1)\times(n-1)\) matrix left after deleting row \(i\) and column \(j\). The <strong>cofactor</strong> is \(C_{ij}=(-1)^{i+j}M_{ij}\).`)}
  ${minorFig}
  ${theorem("cofactor expansion", S`For any row \(i\) and any column \(j\): \[\det A=a_{i1}C_{i1}+a_{i2}C_{i2}+\dots+a_{in}C_{in}=a_{1j}C_{1j}+a_{2j}C_{2j}+\dots+a_{nj}C_{nj}.\] All these expansions give the same number.`, S`The definition uses row 1; that every row and column gives the same value is proved by induction on \(n\), expanding each \((n-1)\times(n-1)\) minor in turn and matching the terms \(a_{1j}a_{ik}\) on both sides (each appears with the same sign \((-1)^{1+j+i+k}\) up to the shift caused by deleting a column). We use the result freely.`)}
  ${signFig}
  ${keyIdea(S`Expand along the row or column with the most zeros — each zero entry kills a whole minor.`)}`),

  section("📌 Triangular matrices and invertibility", S`
  ${theorem("triangular determinant", S`If \(A\) is upper or lower triangular, \(\det A=a_{11}a_{22}\cdots a_{nn}\).`, S`Expand along the first column of an upper triangular matrix (or the first row of a lower triangular one): only \(a_{11}\) survives, times the determinant of a smaller triangular matrix. Repeat.`)}
  ${theorem("determinant test", S`A square matrix \(A\) is invertible if and only if \(\det A\ne0\).`, S`Proved in 6.6: row operations change \(\det\) only by nonzero factors, and the RREF of \(A\) is \(I\) (det 1) exactly when \(A\) is invertible, or has a zero row (det 0) otherwise.`)}`),

  section("📌 Explore", S`<p>Drag the two columns of a \(2\times2\) matrix. The shaded parallelogram's area is \(|\det A|\); the sign flips when the columns swap orientation, and the determinant is 0 exactly when the columns become parallel.</p>`),
  widget("laDetArea", { init: { a: 3, b: 1, c: 1, d: 2 } }),

  section("📌 Common mistakes", watchOut([
    "The cofactor sign is (−1)^(i+j): use the checkerboard, starting with + in the top-left.",
    "A minor deletes BOTH row i and column j.",
    "det(A + B) is not det A + det B.",
    "Determinants exist only for square matrices.",
    "Expanding along a row of zeros gives 0 immediately — look for zeros first.",
  ])),

  examples([
    ["A 2 × 2 determinant and its area", S`Compute \(\det A\) for \(A=${M([[3, 1], [1, 2]])}\) and interpret it.`,
      [S`\[\det A=${D([[3, 1], [1, 2]])}=3(2)-1(1)=6-1=5.\]`, S`The columns \((3,1)\) and \((1,2)\) span a parallelogram of area \(|5|=5\); the sign is positive because turning from \((3,1)\) to \((1,2)\) is counterclockwise.`, S`Since \(\det A\ne0\), \(A\) is invertible.`],
      S`\(\det A=5\): area 5, invertible`, areaFig],
    ["Expansion along the first row", S`Compute \(\det A\) for \(A=${M([[2, -1, 3], [1, 4, 0], [5, 2, 1]])}\).`,
      [S`Signs along row 1: \(+,-,+\). \[\det A=2\,${D([[4, 0], [2, 1]])}-(-1)\,${D([[1, 0], [5, 1]])}+3\,${D([[1, 4], [5, 2]])}.\]`,
        S`The minors: \(${D([[4, 0], [2, 1]])}=4(1)-0(2)=4\), \(${D([[1, 0], [5, 1]])}=1(1)-0(5)=1\), \(${D([[1, 4], [5, 2]])}=1(2)-4(5)=-18\).`,
        S`\[\det A=2(4)+1(1)+3(-18)=8+1-54=-45.\]`],
      S`\(\det A=-45\)`, minorFig],
    ["Choosing a column with a zero", S`Compute \(\det A\) for \(A=${M([[1, 2, 0], [3, -1, 4], [0, 5, 2]])}\) by expanding along column 1.`,
      [S`Column 1 is \((1,3,0)\) with signs \(+,-,+\): \[\det A=1\,${D([[-1, 4], [5, 2]])}-3\,${D([[2, 0], [5, 2]])}+0\cdot C_{31}.\]`,
        S`\(${D([[-1, 4], [5, 2]])}=-2-20=-22\) and \(${D([[2, 0], [5, 2]])}=4-0=4\).`,
        S`\[\det A=1(-22)-3(4)+0=-22-12=-34.\] (Expanding along row 1 gives the same: \(1(-2-20)-2(6-0)+0=-34\).)`],
      S`\(\det A=-34\)`],
    ["A triangular matrix", S`Compute \(\det A\) for \(A=${M([[3, 0, 0], [5, -2, 0], [1, 4, 6]])}\).`,
      [S`Expand along row 1 (only one nonzero entry): \[\det A=3\,${D([[-2, 0], [4, 6]])}=3\big((-2)(6)-0(4)\big)=3(-12)=-36.\]`, S`This is the product of the diagonal: \(3\cdot(-2)\cdot6=-36\), as the triangular theorem says.`],
      S`\(\det A=-36\)`],
    ["A 4 × 4 determinant", S`Compute \(\det A\) for \(A=${M([[1, 0, 2, 0], [3, 1, 0, 1], [0, 2, 1, 0], [1, 0, 0, 2]])}\).`,
      [S`Expand along row 1, whose entries are \(1,0,2,0\) with signs \(+,-,+,-\): \[\det A=1\,${D([[1, 0, 1], [2, 1, 0], [0, 0, 2]])}+2\,${D([[3, 1, 1], [0, 2, 0], [1, 0, 2]])}.\]`,
        S`First minor: expand along its row 3 \((0,0,2)\): \(2\cdot(+1)${D([[1, 0], [2, 1]])}=2(1-0)=2\).`,
        S`Second minor: expand along its row 2 \((0,2,0)\), sign of position \((2,2)\) is \(+\): \(2${D([[3, 1], [1, 2]])}=2(6-1)=10\).`,
        S`\[\det A=1(2)+2(10)=22.\]`],
      S`\(\det A=22\)`],
  ]),

  practice([
    q("2 × 2", S`\(\det${M([[4, -3], [2, 5]])}=\)?`, num(26),
      "ad − bc.", [S`\(20-(-6)=26\).`], S`\(26\)`),
    q("cofactor", S`For \(A=${M([[2, -1, 3], [1, 4, 0], [5, 2, 1]])}\), find the cofactor \(C_{12}\).`, num(-1),
      "Minor M₁₂ = 1, sign −.", [S`\(C_{12}=(-1)^{3}\cdot1\).`], S`\(-1\)`),
    q("triangular", S`\(\det${M([[2, 7, -1], [0, -3, 4], [0, 0, 5]])}=\)?`, num(-30),
      "Product of the diagonal.", [S`\(2(-3)(5)\).`], S`\(-30\)`),
    q("zero row", S`A \(4\times4\) matrix has a row of zeros. Its determinant is:`, num(0),
      "Expand along that row.", [S`Every term has a factor 0.`], S`\(0\)`),
    q("area", S`Find the area of the parallelogram on \((5,1)\) and \((2,3)\).`, num(13),
      "|det|.", [S`\(|15-2|\).`], S`\(13\)`),
  ]),

  ...hard([
    ["A parameter", S`For which \(k\) is \(A=${M([[1, 1, 1], [1, 2, 3], [1, 4, "k"]])}\) singular?`,
      [S`Expand along row 1 (signs \(+,-,+\)): \[\det A=1${D([[2, 3], [4, "k"]])}-1${D([[1, 3], [1, "k"]])}+1${D([[1, 2], [1, 4]])}.\]`,
        S`\(=(2k-12)-(k-3)+(4-2)=2k-12-k+3+2=k-7\).`,
        S`Singular exactly when \(\det A=0\): \(k=7\). Check: for \(k=7\), row 3 \(=(1,4,7)=2(1,2,3)-(1,1,1)\) ✓.`],
      S`\(k=7\)`],
    ["The area of a triangle", S`Find the area of the triangle with vertices \((1,1)\), \((5,2)\), \((2,4)\).`,
      [S`Edge vectors from \((1,1)\): \(\vec u=(4,1)\), \(\vec v=(1,3)\). The triangle is half the parallelogram on \(\vec u,\vec v\).`,
        S`\[\det${M([[4, 1], [1, 3]])}=4(3)-1(1)=11.\]`, S`Area \(=\tfrac12|11|=\tfrac{11}2\).`],
      S`\(\tfrac{11}2\)`],
  ], [
    q("hard", S`\(\det${M([[1, 2, 3], [0, 4, 5], [1, 0, 6]])}=\)?`, num(22),
      "Expand along column 1.", [S`\(1(24-0)-0+1(10-12)=24-2\).`], S`\(22\)`),
    q("hard", S`For which \(x\) is \(${D([["x", 2], [8, "x"]])}=0\) with \(x\gt0\)?`, num(4),
      "x² − 16.", [S`\(x^2=16\).`], S`\(4\)`),
    q("hard", S`\(\det\operatorname{diag}(2,3,-1,4)=\)?`, num(-24),
      "Product of the diagonal.", [S`\(2\cdot3\cdot(-1)\cdot4\).`], S`\(-24\)`),
  ]),

  wrapUp({
    qas: [
      ["What is a 2 × 2 determinant?", "ad − bc: the signed area of the parallelogram on the columns."],
      ["What is a cofactor?", "Cᵢⱼ = (−1)^(i+j) Mᵢⱼ, where Mᵢⱼ deletes row i and column j."],
      ["How do I expand?", "Along any row or column: det A = Σ aᵢⱼ Cᵢⱼ."],
      ["Which row should I choose?", "The one with the most zeros."],
      ["What is det of a triangular matrix?", "The product of its diagonal entries."],
    ],
    summary: [
      "det [a b; c d] = ad − bc.",
      "Cᵢⱼ = (−1)^(i+j) Mᵢⱼ.",
      "Expand along any row or column.",
      "Triangular: product of the diagonal.",
      "det A ≠ 0 ⇔ A invertible.",
    ],
    next: "6.6 shows how row operations change the determinant — the fast way to compute it.",
  }),
];

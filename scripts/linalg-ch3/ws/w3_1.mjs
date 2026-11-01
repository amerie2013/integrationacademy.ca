// LINALG1 Worksheet 3.1 — Matrices, Addition and Scalar Multiplication
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { matPic, rowPic } from "./fig3.mjs";
import { am } from "../bank/la.mjs";
import { steps } from "../bank/la.mjs";

const P = (svg, w = 4.6) => svgT(svg, w);
const M = (m) => am(m, false);

const NOTES = [
  { h: "1. Matrices and their entries",
    lead: S`${def("matrix", S`An \(m\times n\) \textbf{matrix} is a rectangular array of numbers with \(m\) rows and \(n\) columns. The entry in row \(i\), column \(j\) is \(a_{ij}\) (or \((A)_{ij}\)); we write \(A=[a_{ij}]\). If \(m=n\) the matrix is \textbf{square}.`)}
The first index is always the \textbf{row}, the second the \textbf{column}. In the figure the circled entry is \(a_{23}=-3\).`,
    fig: P(matPic([[4, -1, 0, 7], [2, 5, -3, 1], [6, 0, 8, -2]], { cells: [[1, 2]], label: "3 × 4" }), 4.4), w: 0.56,
    body: S`A matrix with one column is a \textbf{column vector}; with one row, a \textbf{row vector}. An \(m\times n\) matrix has \(mn\) entries.` },
  { h: "2. Equality",
    lead: S`${def("equal matrices", S`\(A=B\) means: same size, and \(a_{ij}=b_{ij}\) for all \(i,j\).`)}
A matrix equation between two \(m\times n\) matrices is therefore a list of \(mn\) ordinary equations --- often a linear system for unknown entries.`,
    fig: P(rowPic([[[["x+y", 3], [2, "x−y"]], {}], "=", [[[7, "z"], [2, 1]], {}]]), 4.6), w: 0.55,
    body: S`Matrices of different sizes are never equal, even if they contain the same numbers: \(${M([[1, 2]])}\ne${M([[1], [2]])}\).` },
  { h: "3. The zero and identity matrices",
    lead: S`${def("zero, identity", S`\(0_{m\times n}\) has all entries 0. The \(n\times n\) \textbf{identity} \(I_n\) has 1s on the main diagonal (\(a_{11},\dots,a_{nn}\)) and 0s elsewhere.`)}
\(0\) plays the role of the number 0 for addition; \(I_n\) will play the role of 1 for multiplication.`,
    fig: P(rowPic([[[[0, 0], [0, 0], [0, 0]], { label: "0₃ₓ₂" }], " ", [[[1, 0, 0], [0, 1, 0], [0, 0, 1]], { cells: [[0, 0], [1, 1], [2, 2]], label: "I₃" }]]), 4.6), w: 0.55 },
  { h: "4. Addition and scalar multiplication",
    lead: S`${def("sum, scalar multiple", S`For \(m\times n\) matrices: \((A+B)_{ij}=a_{ij}+b_{ij}\) and \((kA)_{ij}=k\,a_{ij}\); \(-A=(-1)A\), \(A-B=A+(-B)\).`)}
Both operations work \textbf{entry by entry}, and addition requires the \textbf{same size}. Combining them gives linear combinations \(kA+lB\).`,
    fig: P(rowPic([[[[2, 1], [0, -3]], { cells: [[1, 1]] }], "+", [[[1, 4], [5, 2]], { cells: [[1, 1]] }], "=", [[[3, 5], [5, -1]], { cells: [[1, 1, "#bbf7d0"]] }]]), 5), w: 0.55,
    body: S`Matrix equations are solved like ordinary ones: from \(3X-A=B\) we get \(3X=A+B\) and \(X=\tfrac13(A+B)\), using the properties in Note 5.` },
  { h: "5. Properties",
    lead: thm("properties of + and scalars", S`For \(m\times n\) matrices \(A,B,C\) and scalars \(k,l\): \(A+B=B+A\); \((A+B)+C=A+(B+C)\); \(A+0=A\); \(A+(-A)=0\); \(k(A+B)=kA+kB\); \((k+l)A=kA+lA\); \(k(lA)=(kl)A\); \(1A=A\).`) + S`\pf{Each is the corresponding law for real numbers, applied in every entry. E.g. \((k(A+B))_{ij}=k(a_{ij}+b_{ij})=ka_{ij}+kb_{ij}=(kA+kB)_{ij}\).}`,
    fig: P(matPic([["a₁₁", "a₁₂", "a₁₃"], ["a₂₁", "a₂₂", "a₂₃"]], { row: 0, label: "an m × n matrix = mn numbers" }), 4.4), w: 0.58,
    body: S`So \(m\times n\) matrices behave exactly like vectors with \(mn\) components arranged in a rectangle.` },
];

const EXAMPLES = [
  { title: "Reading entries", q: S`For \(B=${M([[6, -3, 1], [0, 8, -5], [2, 4, 9], [-7, 1, 0]])}\), give the size, \(b_{32}\), \(b_{23}\) and \(b_{41}\).`,
    fig: P(matPic([[6, -3, 1], [0, 8, -5], [2, 4, 9], [-7, 1, 0]], { cells: [[2, 1], [1, 2], [3, 0]] }), 3.4),
    steps: [S`Count: 4 rows and 3 columns, so \(B\) is \(4\times3\) (12 entries).`, S`\(b_{32}\): row 3 is \((2,4,9)\), its 2nd entry is \(4\).`, S`\(b_{23}\): row 2 is \((0,8,-5)\), 3rd entry \(-5\). \(b_{41}\): row 4 starts with \(-7\).`],
    ans: S`\(4\times3\); \(b_{32}=4\), \(b_{23}=-5\), \(b_{41}=-7\)` },
  { title: "A matrix equation as a system", q: S`Find \(a,b,c\) with \(${M([["a+2b", 0], ["c", "a-b"]])}=${M([[8, 0], [-1, 2]])}\).`,
    fig: P(rowPic([[[["a+2b", 0], ["c", "a−b"]], {}], "=", [[[8, 0], [-1, 2]], {}]]), 4),
    steps: [S`Equal matrices agree entry by entry: \(a+2b=8\), \(0=0\), \(c=-1\), \(a-b=2\). The two equations in \(a,b\) form a system.`,
      ...steps([[1, 2, 8], [1, -1, 2]], [
        [S`Eliminate \(a\) from row 2.`, ["R2-R1"]],
        [S`Make the second pivot 1.`, ["R2*-1/3"]],
        [S`Clear above it.`, ["R1-2R2"]],
      ], { intro: "Augmented matrix in the unknowns a, b" }).steps,
      S`So \(a=4\), \(b=2\), and \(c=-1\). Check: \(4+2(2)=8\) ✓, \(4-2=2\) ✓.`],
    ans: S`\(a=4\), \(b=2\), \(c=-1\)` },
  { title: "Adding matrices", q: S`Compute \(A+B\) and \(A-B\) for \(A=${M([[3, -1, 2], [0, 4, 5]])}\), \(B=${M([[1, 6, -2], [-3, 0, 1]])}\).`,
    fig: P(rowPic([[[[3, -1, 2], [0, 4, 5]], { label: "A" }], "+", [[[1, 6, -2], [-3, 0, 1]], { label: "B" }]]), 4.6),
    steps: [S`Same size (\(2\times3\)), so both are defined.`, S`\(A+B=${M([["3+1", "-1+6", "2-2"], ["0-3", "4+0", "5+1"]])}=${M([[4, 5, 0], [-3, 4, 6]])}\).`, S`\(A-B=${M([["3-1", "-1-6", "2+2"], ["0+3", "4-0", "5-1"]])}=${M([[2, -7, 4], [3, 4, 4]])}\).`],
    ans: S`\(A+B=${M([[4, 5, 0], [-3, 4, 6]])}\), \(A-B=${M([[2, -7, 4], [3, 4, 4]])}\)` },
  { title: "A linear combination", q: S`Compute \(2A-3B\) for \(A=${M([[1, 4], [-2, 0]])}\), \(B=${M([[3, 1], [1, -2]])}\).`,
    fig: P(rowPic([[[[2, 8], [-4, 0]], { label: "2A" }], "−", [[[9, 3], [3, -6]], { label: "3B" }], "=", [[[-7, 5], [-7, 6]], { label: "2A − 3B" }]]), 5),
    steps: [S`\(2A=${M([[2, 8], [-4, 0]])}\) and \(3B=${M([[9, 3], [3, -6]])}\).`, S`\(2A-3B=${M([["2-9", "8-3"], ["-4-3", "0+6"]])}=${M([[-7, 5], [-7, 6]])}\).`],
    ans: S`\(${M([[-7, 5], [-7, 6]])}\)` },
  { title: "Undefined sums", q: S`Which of \(A+B\), \(A+C\), \(B+C\) are defined if \(A\) is \(2\times3\), \(B\) is \(3\times2\), \(C\) is \(2\times3\)?`,
    fig: P(rowPic([[[["*", "*", "*"], ["*", "*", "*"]], { label: "2 × 3" }], " ", [[["*", "*"], ["*", "*"], ["*", "*"]], { label: "3 × 2" }]]), 3.8),
    steps: [S`Addition needs equal sizes.`, S`\(A\) and \(C\) are both \(2\times3\): \(A+C\) is defined. \(B\) has a different size from both: \(A+B\) and \(B+C\) are not defined.`],
    ans: S`only \(A+C\)` },
  { title: "Solving a matrix equation", q: S`Solve \(3X-A=X+B\) for \(A=${M([[2, -4], [6, 0]])}\), \(B=${M([[0, 2], [-2, 4]])}\).`,
    fig: P(rowPic([[[[2, -2], [4, 4]], { label: "A + B" }], "→", [[[1, -1], [2, 2]], { label: "X = ½(A + B)" }]]), 4.2),
    steps: [S`Move terms: subtract \(X\) and add \(A\) on both sides: \(2X=A+B\).`, S`\(A+B=${M([[2, -2], [4, 4]])}\), so \(X=\tfrac12(A+B)=${M([[1, -1], [2, 2]])}\).`, S`Check: \(3X-A=${M([[3, -3], [6, 6]])}-${M([[2, -4], [6, 0]])}=${M([[1, 1], [0, 6]])}\) and \(X+B=${M([[1, 1], [0, 6]])}\) ✓.`],
    ans: S`\(X=${M([[1, -1], [2, 2]])}\)` },
  { title: "Writing a matrix as a combination", q: S`Find \(a,b\) with \(a${M([[1, 2], [0, 1]])}+b${M([[1, -1], [1, 0]])}=${M([[5, 1], [3, 2]])}\).`,
    fig: P(rowPic([[[[1, 2], [0, 1]], { label: "E" }], "+", [[[1, -1], [1, 0]], { label: "F" }]]), 3.8),
    steps: [S`Entry \((2,1)\): \(0a+1b=3\), so \(b=3\). Entry \((2,2)\): \(a=2\).`, S`Check the other entries: \((1,1)\): \(a+b=5\) ✓; \((1,2)\): \(2a-b=4-3=1\) ✓.`],
    ans: S`\(a=2\), \(b=3\)` },
  { title: "A property, entry by entry", q: S`Prove that \(A+(-A)=0\) and \(k(A+B)=kA+kB\) for \(m\times n\) matrices.`,
    fig: P(matPic([["aᵢⱼ"]], { cells: [[0, 0]], label: "one entry at a time" }), 2.2),
    steps: [S`\((A+(-A))_{ij}=a_{ij}+(-a_{ij})=0\) for every \(i,j\): the zero matrix.`, S`\((k(A+B))_{ij}=k(a_{ij}+b_{ij})=ka_{ij}+kb_{ij}=(kA)_{ij}+(kB)_{ij}\).`, S`Equal entries in every position (and equal sizes) mean equal matrices.`],
    ans: S`both hold entry by entry` },
  { title: "A system from three matrices", q: S`Find \(a,b,c\) with \(a${M([[1, 0], [1, 1]])}+b${M([[0, 1], [1, 0]])}+c${M([[1, 1], [0, 1]])}=${M([[4, 3], [5, 6]])}\).`,
    steps: [S`Entries: \((1,1)\): \(a+c=4\); \((1,2)\): \(b+c=3\); \((2,1)\): \(a+b=5\); \((2,2)\): \(a+c=6\).`, S`Entries \((1,1)\) and \((2,2)\) demand \(a+c=4\) and \(a+c=6\) at once --- impossible.`, S`So no such \(a,b,c\) exist: this matrix is not a combination of the three given ones.`],
    ans: S`no solution` },
];

const PROBLEMS = [
  { level: 1, q: S`Give the size of \(${M([[1, 0, 4, 2, 7]])}\) and of \(${M([[3], [-1]])}\).`, ans: S`\(1\times5\) and \(2\times1\)` },
  { level: 1, q: S`For \(A=${M([[5, 2, -1], [0, 3, 8]])}\), find \(a_{12}\), \(a_{21}\) and \(a_{23}\).`, ans: S`\(2\), \(0\), \(8\)` },
  { level: 1, q: S`Write down \(I_4\) and \(0_{2\times4}\).`, ans: S`\(I_4\): 1s on the diagonal, 0s elsewhere; \(0_{2\times4}\): eight zeros` },
  { level: 2, q: S`Compute \(4A-B\) for \(A=${M([[1, 0], [-1, 2]])}\), \(B=${M([[3, -2], [1, 5]])}\).`, ans: S`\(${M([[1, 2], [-5, 3]])}\)`, fig: P(rowPic([[[[1, 0], [-1, 2]], { label: "A" }], " ", [[[3, -2], [1, 5]], { label: "B" }]]), 3.6) },
  { level: 2, q: S`Find \(x,y\) with \(${M([["2x", "x+y"], [1, 3]])}=${M([[6, -1], [1, 3]])}\).`, ans: S`\(x=3\), \(y=-4\)` },
  { level: 2, q: S`Solve \(2X+3A=B\) for \(A=${M([[1, 2], [0, -1]])}\), \(B=${M([[5, 4], [2, 1]])}\).`, ans: S`\(X=${M([[1, -1], [1, 2]])}\)` },
  { level: 2, q: S`Is \(${M([[2, 1], [1, 2]])}\) a combination of \(${M([[1, 0], [0, 1]])}\) and \(${M([[0, 1], [1, 0]])}\)? If so, give the coefficients.`, ans: S`yes: \(2I+1\cdot${M([[0, 1], [1, 0]])}\)`, fig: P(rowPic([[[[2, 1], [1, 2]], {}], "=", [[[1, 0], [0, 1]], {}], "·2 +", [[[0, 1], [1, 0]], {}]]), 4.6) },
  { level: 2, q: S`A shop records weekly sales of 3 products in 2 stores as \(2\times3\) matrices: week 1 \(${M([[12, 5, 8], [7, 9, 3]])}\), week 2 \(${M([[10, 6, 9], [8, 8, 4]])}\). Find the total for both weeks and the average per week.`, ans: S`total \(${M([[22, 11, 17], [15, 17, 7]])}\); average \(${M([[11, 5.5, 8.5], [7.5, 8.5, 3.5]])}\)`, fig: P(matPic([[12, 5, 8], [7, 9, 3]], { label: "week 1: stores × products" }), 3.6) },
  { level: 3, space: 5, q: S`Prove that \((k+l)A=kA+lA\) and \(k(lA)=(kl)A\).`, ans: S`compare \((i,j)\)-entries using the laws for real numbers` },
  { level: 3, space: 5, q: S`Find all \(a,b,c\) with \(a${M([[1, 1], [0, 0]])}+b${M([[0, 1], [1, 0]])}+c${M([[0, 0], [1, 1]])}=${M([[2, 5], [3, 0]])}\).`, ans: S`\(a=2\), \(b=3\), \(c=0\)` },
  { level: 3, space: 5, q: S`Show that every \(2\times2\) matrix is a combination of \(E_{11},E_{12},E_{21},E_{22}\) (the matrices with a single 1), in exactly one way.`, ans: S`\(${M([["a", "b"], ["c", "d"]])}=aE_{11}+bE_{12}+cE_{21}+dE_{22}\); the coefficients are forced to be the entries`, fig: P(rowPic([[[[1, 0], [0, 0]], { label: "E₁₁" }], " ", [[[0, 1], [0, 0]], { label: "E₁₂" }], " ", [[[0, 0], [1, 0]], { label: "E₂₁" }], " ", [[[0, 0], [0, 1]], { label: "E₂₂" }]]), 5) },
  { level: 3, space: 5, q: S`For which \(t\) is \(${M([["t^2", "t"], [1, "2t"]])}=${M([[9, 3], [1, 6]])}\)?`, ans: S`\(t=3\)` },
  { level: 3, space: 5, q: S`Prove that if \(kA=0\) then \(k=0\) or \(A=0\).`, ans: S`if \(k\ne0\), every \(ka_{ij}=0\) forces \(a_{ij}=0\)`, fig: P(matPic([[0, 0], [0, 0]], { label: "kA = 0" }), 2) },
];

export const WS = {
  code: "3.1",
  title: "Matrices, Addition and Scalar Multiplication",
  bigideas: S`A matrix is a rectangular array of numbers, described by its size \(m\times n\) and its entries \(a_{ij}\) (row \(i\), column \(j\)). Two matrices are equal when they have the same size and the same entries. Matrices of the same size are added, subtracted and scaled \textbf{entry by entry}, and these operations obey the same laws as vector addition and scaling. The zero matrix and the identity matrix are the two most important special matrices.`,
  goals: ["Read sizes and entries of matrices.", "Use equality of matrices to solve for unknown entries.", "Add, subtract and scale matrices; form linear combinations.", "Recognise the zero and identity matrices.", "Use and prove the properties of matrix addition and scalar multiplication."],
  curriculum: "Matrix algebra — matrices, equality, addition and scalar multiplication",
  vocab: [["Size \\(m\\times n\\)", "\\(m\\) rows, \\(n\\) columns"], ["Entry \\(a_{ij}\\)", "row \\(i\\), column \\(j\\)"], ["Equal", "same size and entries"], ["Zero matrix", "all entries 0"], ["Identity \\(I_n\\)", "1s on the diagonal, 0s elsewhere"]],
  hook: S`A café tracks how many coffees, teas and juices it sells in the morning and in the afternoon, on Monday and on Tuesday. How could you store each day's numbers so that adding the two days is a single operation?`,
  concepts: NOTES,
  summary: [
    S`\(A=[a_{ij}]\) is \(m\times n\); \(a_{ij}\) is row \(i\), column \(j\).`,
    S`\(A=B\iff\) same size and all entries equal.`,
    S`\((A+B)_{ij}=a_{ij}+b_{ij}\), \((kA)_{ij}=ka_{ij}\); same size required for \(+\).`,
    S`\(0_{m\times n}\) and \(I_n\).`,
    S`The vector laws hold: commutative, associative, distributive.`,
  ],
  tips: ["Row first, column second.", "Check sizes before adding.", "Scale every entry.", "Solve matrix equations with the same moves as ordinary equations.", "Check unknown entries by substituting back."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

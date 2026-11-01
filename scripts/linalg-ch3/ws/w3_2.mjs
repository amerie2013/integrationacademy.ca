// LINALG1 Worksheet 3.2 — The Transpose and Symmetric Matrices
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { matPic, rowPic, transPic } from "./fig3.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.6) => svgT(svg, w);
const M = (m) => am(m, false);

const NOTES = [
  { h: "1. The transpose",
    lead: S`${def("transpose", S`The transpose of an \(m\times n\) matrix \(A\) is the \(n\times m\) matrix \(A^T\) with \((A^T)_{ij}=a_{ji}\). Row \(i\) of \(A\) becomes column \(i\) of \(A^T\).`)}
The entry in position \((i,j)\) moves to \((j,i)\); diagonal entries stay where they are.`,
    fig: P(transPic([[3, 0, -2], [1, 5, 4]], 0, 2), 4.6), w: 0.55,
    body: S`A column vector \(\vec x\) (\(n\times1\)) has transpose \(\vec x^T\), the same numbers as a \(1\times n\) row. The dot product can then be written \(\vec x\cdot\vec y=\vec x^T\vec y\) (Worksheet 3.6).` },
  { h: "2. Properties of the transpose",
    lead: thm("transpose rules", S`(1) \(A^T\) is \(n\times m\); (2) \((A^T)^T=A\); (3) \((A+B)^T=A^T+B^T\); (4) \((kA)^T=kA^T\).`) + S`\pf{Compare entries: \(((A^T)^T)_{ij}=(A^T)_{ji}=a_{ij}\); \(((A+B)^T)_{ij}=a_{ji}+b_{ji}\); \(((kA)^T)_{ij}=ka_{ji}\).}`,
    fig: P(rowPic([[[[1, 2], [3, 4]], { label: "A" }], "→", [[[1, 3], [2, 4]], { label: "Aᵀ" }], "→", [[[1, 2], [3, 4]], { label: "(Aᵀ)ᵀ = A" }]]), 5), w: 0.5,
    body: S`These rules let us solve equations involving transposes: transpose both sides, or distribute the transpose over sums and scalars.` },
  { h: "3. Symmetric matrices",
    lead: S`${def("symmetric", S`\(A\) is \textbf{symmetric} if \(A^T=A\), i.e. \(a_{ij}=a_{ji}\) for all \(i,j\).`)}
Since \(A^T\) is \(n\times m\), \(A^T=A\) forces \(m=n\): every symmetric matrix is \textbf{square}. Its entries mirror across the main diagonal.`,
    fig: P(matPic([[2, 7, -1], [7, 0, 3], [-1, 3, 5]], { cells: [[0, 1], [1, 0], [0, 2, "#bbf7d0"], [2, 0, "#bbf7d0"]], label: "symmetric" }), 3.6), w: 0.58,
    body: thm("combinations", S`If \(A,B\) are symmetric then so is \(kA+lB\); for every square \(A\), \(A+A^T\) is symmetric.`) + S`\pf{\((kA+lB)^T=kA^T+lB^T=kA+lB\); \((A+A^T)^T=A^T+A\).}` },
  { h: "4. Skew-symmetric matrices",
    lead: S`${def("skew-symmetric", S`A square matrix is \textbf{skew-symmetric} if \(A^T=-A\), i.e. \(a_{ji}=-a_{ij}\).`)}
With \(i=j\): \(a_{ii}=-a_{ii}\), so every diagonal entry is \(0\). Entries across the diagonal are negatives of each other.`,
    fig: P(matPic([[0, 4, -2], [-4, 0, 1], [2, -1, 0]], { cells: [[0, 1], [1, 0]], label: "skew-symmetric" }), 3.6), w: 0.58 },
  { h: "5. Symmetric + skew-symmetric",
    lead: S`Every square matrix splits as \[A=\underbrace{\tfrac12(A+A^T)}_{\text{symmetric}}+\underbrace{\tfrac12(A-A^T)}_{\text{skew-symmetric}},\] and this splitting is unique (a matrix that is both symmetric and skew-symmetric is 0).`,
    fig: P(rowPic([[[[2, 6], [0, 1]], { label: "A" }], "=", [[[2, 3], [3, 1]], { label: "sym" }], "+", [[[0, 3], [-3, 0]], { label: "skew" }]]), 5), w: 0.5 },
];

const EXAMPLES = [
  { title: "Computing transposes", q: S`Find the transposes of \(A=${M([[3, 0, -2], [1, 5, 4]])}\), \(\vec v=${M([[2], [-1], [6]])}\) and \(C=${M([[1, 8], [8, 0]])}\).`,
    fig: P(transPic([[3, 0, -2], [1, 5, 4]], 0, 2), 4.4),
    steps: [S`\(A\) is \(2\times3\); its rows \((3,0,-2)\) and \((1,5,4)\) become columns: \(A^T=${M([[3, 1], [0, 5], [-2, 4]])}\) (\(3\times2\)).`, S`\(\vec v^T=${M([[2, -1, 6]])}\), a \(1\times3\) row.`, S`\(C^T=${M([[1, 8], [8, 0]])}=C\): \(C\) is symmetric.`],
    ans: S`\(A^T=${M([[3, 1], [0, 5], [-2, 4]])}\), \(\vec v^T=${M([[2, -1, 6]])}\), \(C^T=C\)` },
  { title: "Transpose of a combination", q: S`Compute \((3A+B^T)^T\) for \(A=${M([[1, -1], [2, 0]])}\), \(B=${M([[0, 4], [5, 1]])}\).`,
    fig: P(rowPic([[[[1, -1], [2, 0]], { label: "A" }], " ", [[[0, 4], [5, 1]], { label: "B" }]]), 3.6),
    steps: [S`By the rules, \((3A+B^T)^T=3A^T+(B^T)^T=3A^T+B\).`, S`\(3A^T=3${M([[1, 2], [-1, 0]])}=${M([[3, 6], [-3, 0]])}\).`, S`\(3A^T+B=${M([["3+0", "6+4"], ["-3+5", "0+1"]])}=${M([[3, 10], [2, 1]])}\).`],
    ans: S`\(${M([[3, 10], [2, 1]])}\)` },
  { title: "Solving for X", q: S`Solve \(2X^T-A=B\) for \(X\), where \(A=${M([[1, 3], [-2, 4]])}\), \(B=${M([[5, -1], [0, 2]])}\).`,
    fig: P(rowPic([[[[3, 1], [-1, 3]], { label: "½(A + B)" }], "→", [[[3, -1], [1, 3]], { label: "X" }]]), 4.2),
    steps: [S`\(2X^T=A+B=${M([[6, 2], [-2, 6]])}\), so \(X^T=${M([[3, 1], [-1, 3]])}\).`, S`Transpose: \(X=(X^T)^T=${M([[3, -1], [1, 3]])}\).`, S`Check: \(2X^T-A=${M([[6, 2], [-2, 6]])}-${M([[1, 3], [-2, 4]])}=${M([[5, -1], [0, 2]])}=B\) ✓.`],
    ans: S`\(X=${M([[3, -1], [1, 3]])}\)` },
  { title: "Is it symmetric?", q: S`Decide which are symmetric: \(P=${M([[1, -2, 0], [-2, 3, 7], [0, 7, 5]])}\), \(Q=${M([[4, 1], [-1, 4]])}\), \(R=${M([[1, 2, 3], [2, 1, 4]])}\).`,
    fig: P(matPic([[1, -2, 0], [-2, 3, 7], [0, 7, 5]], { cells: [[0, 1], [1, 0], [1, 2, "#bbf7d0"], [2, 1, "#bbf7d0"]] }), 3.4),
    steps: [S`\(P\): \(p_{12}=p_{21}=-2\), \(p_{13}=p_{31}=0\), \(p_{23}=p_{32}=7\) --- symmetric.`, S`\(Q\): \(q_{12}=1\) but \(q_{21}=-1\) --- not symmetric.`, S`\(R\) is \(2\times3\), not square --- not symmetric.`],
    ans: S`only \(P\)` },
  { title: "Choosing entries for symmetry", q: S`Find \(x,y,z\) so that \(${M([[2, "x-1", 4], [5, 0, "y"], ["z", -3, 1]])}\) is symmetric.`,
    fig: P(matPic([[2, "x−1", 4], [5, 0, "y"], ["z", -3, 1]], { cells: [[0, 1], [1, 0], [1, 2, "#bbf7d0"], [2, 1, "#bbf7d0"]] }), 3.6),
    steps: [S`Mirror pairs must be equal: \(a_{12}=a_{21}\): \(x-1=5\), so \(x=6\).`, S`\(a_{23}=a_{32}\): \(y=-3\). \(a_{13}=a_{31}\): \(z=4\).`],
    ans: S`\(x=6\), \(y=-3\), \(z=4\)` },
  { title: "A + Aᵀ and A − Aᵀ", q: S`For \(A=${M([[1, 5, 0], [3, 2, -4], [2, 6, 1]])}\), compute \(A+A^T\) and \(A-A^T\) and classify them.`,
    fig: P(transPic([[1, 5, 0], [3, 2, -4], [2, 6, 1]], 0, 1), 4.4),
    steps: [S`\(A^T=${M([[1, 3, 2], [5, 2, 6], [0, -4, 1]])}\).`, S`\(A+A^T=${M([[2, 8, 2], [8, 4, 2], [2, 2, 2]])}\): symmetric (mirror entries equal).`, S`\(A-A^T=${M([[0, 2, -2], [-2, 0, -10], [2, 10, 0]])}\): skew-symmetric (zero diagonal, mirror entries opposite).`],
    ans: S`\(A+A^T\) symmetric, \(A-A^T\) skew-symmetric` },
  { title: "Splitting a matrix", q: S`Write \(A=${M([[2, 6], [0, 1]])}\) as symmetric plus skew-symmetric.`,
    fig: P(rowPic([[[[2, 6], [0, 1]], { label: "A" }], "=", [[[2, 3], [3, 1]], { label: "sym" }], "+", [[[0, 3], [-3, 0]], { label: "skew" }]]), 4.8),
    steps: [S`\(A^T=${M([[2, 0], [6, 1]])}\).`, S`\(S=\tfrac12(A+A^T)=\tfrac12${M([[4, 6], [6, 2]])}=${M([[2, 3], [3, 1]])}\).`, S`\(K=\tfrac12(A-A^T)=\tfrac12${M([[0, 6], [-6, 0]])}=${M([[0, 3], [-3, 0]])}\). Check: \(S+K=${M([[2, 6], [0, 1]])}=A\) ✓.`],
    ans: S`\(A=${M([[2, 3], [3, 1]])}+${M([[0, 3], [-3, 0]])}\)` },
  { title: "A combination of symmetric matrices", q: S`Prove that if \(A\) and \(B\) are symmetric, then \(2A-5B\) is symmetric, and check it on \(A=${M([[1, 2], [2, 0]])}\), \(B=${M([[0, 1], [1, 3]])}\).`,
    fig: P(rowPic([[[[2, -1], [-1, -15]], { label: "2A − 5B" }]]), 2.6),
    steps: [S`\((2A-5B)^T=2A^T-5B^T=2A-5B\).`, S`Here \(2A-5B=${M([[2, 4], [4, 0]])}-${M([[0, 5], [5, 15]])}=${M([[2, -1], [-1, -15]])}\), whose off-diagonal entries are equal ✓.`],
    ans: S`\(2A-5B=${M([[2, -1], [-1, -15]])}\), symmetric` },
  { title: "Only zero is both", q: S`Prove that a matrix which is both symmetric and skew-symmetric is the zero matrix.`,
    steps: [S`Symmetric: \(A^T=A\). Skew-symmetric: \(A^T=-A\).`, S`So \(A=-A\), i.e. \(2A=0\), and every entry \(a_{ij}=0\).`, S`Consequence: the symmetric/skew-symmetric splitting is unique --- if \(S+K=S'+K'\), then \(S-S'=K'-K\) is both, hence 0.`],
    ans: S`\(A=0\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the transpose of \(${M([[4, -1, 0, 2], [3, 5, 1, -2]])}\) and give its size.`, ans: S`\(${M([[4, 3], [-1, 5], [0, 1], [2, -2]])}\), \(4\times2\)` },
  { level: 1, q: S`For \(A=${M([[7, 2, -5], [1, 0, 6]])}\), find \((A^T)_{31}\), and explain why \((A^T)_{23}\) does not exist.`, ans: S`\((A^T)_{31}=-5\); \(A^T\) is \(3\times2\), so it has no column 3` },
  { level: 1, q: S`Is \(${M([[0, 3], [3, 0]])}\) symmetric? Skew-symmetric?`, ans: S`symmetric; not skew-symmetric` },
  { level: 2, q: S`Compute \((A-2B^T)^T\) for \(A=${M([[1, 4], [0, -3]])}\), \(B=${M([[2, 1], [-1, 5]])}\).`, ans: S`\(A^T-2B=${M([[-3, -2], [6, -13]])}\)`, fig: P(rowPic([[[[1, 4], [0, -3]], { label: "A" }], " ", [[[2, 1], [-1, 5]], { label: "B" }]]), 3.6) },
  { level: 2, q: S`Solve \((X+A)^T=B\) for \(A=${M([[2, 0], [1, 3]])}\), \(B=${M([[1, 5], [-2, 4]])}\).`, ans: S`\(X=B^T-A=${M([[-1, -2], [4, 1]])}\)` },
  { level: 2, q: S`Find \(a,b\) so that \(${M([[1, "a+b", 2], [3, 4, "a-b"], [2, 1, 0]])}\) is symmetric.`, ans: S`\(a=2\), \(b=1\)`, fig: P(matPic([[1, "a+b", 2], [3, 4, "a−b"], [2, 1, 0]], { cells: [[0, 1], [1, 0], [1, 2], [2, 1]] }), 3.4) },
  { level: 2, q: S`Write \(${M([[3, 1], [5, -2]])}\) as symmetric plus skew-symmetric.`, ans: S`\(${M([[3, 3], [3, -2]])}+${M([[0, -2], [2, 0]])}\)` },
  { level: 2, q: S`Fill in the missing entries so that the matrix is skew-symmetric: \(${M([["?", 4, "?"], ["?", "?", -1], [7, "?", "?"]])}\).`, ans: S`\(${M([[0, 4, -7], [-4, 0, -1], [7, 1, 0]])}\)`, fig: P(matPic([["?", 4, "?"], ["?", "?", -1], [7, "?", "?"]], { label: "skew-symmetric" }), 3.4) },
  { level: 3, space: 5, q: S`Prove that \((A^T)^T=A\) and \((kA)^T=kA^T\).`, ans: S`compare \((i,j)\)-entries` },
  { level: 3, space: 5, q: S`Prove that \(A-A^T\) is skew-symmetric for every square matrix \(A\).`, ans: S`\((A-A^T)^T=A^T-A=-(A-A^T)\)` },
  { level: 3, space: 5, q: S`How many entries of an \(n\times n\) symmetric matrix can be chosen freely? Of a skew-symmetric one?`, ans: S`\(\tfrac{n(n+1)}2\) and \(\tfrac{n(n-1)}2\)`, fig: P(matPic([["a", "b", "c"], ["b", "d", "e"], ["c", "e", "f"]], { label: "3 × 3 symmetric: 6 free" }), 3.4) },
  { level: 3, space: 5, q: S`Prove that the symmetric/skew-symmetric splitting of a square matrix is unique.`, ans: S`if \(S+K=S'+K'\), \(S-S'=K'-K\) is symmetric and skew, hence 0` },
  { level: 3, space: 5, q: S`Find all \(2\times2\) matrices \(A\) with \(A^T=2A\).`, ans: S`only \(A=0\) (\(a_{11}=2a_{11}\Rightarrow a_{11}=0\); \(a_{12}=2a_{21}\), \(a_{21}=2a_{12}\Rightarrow a_{12}=a_{21}=0\))`, fig: P(matPic([["a", "b"], ["c", "d"]], { label: "Aᵀ = 2A?" }), 2.4) },
];

export const WS = {
  code: "3.2",
  title: "The Transpose and Symmetric Matrices",
  bigideas: S`The \textbf{transpose} \(A^T\) turns rows into columns: \((A^T)_{ij}=a_{ji}\). It undoes itself, distributes over sums and scalars, and does not move the diagonal. A matrix equal to its transpose is \textbf{symmetric} (necessarily square, with entries mirrored across the diagonal); one with \(A^T=-A\) is \textbf{skew-symmetric} (zero diagonal). Every square matrix is uniquely a symmetric matrix plus a skew-symmetric one.`,
  goals: ["Compute transposes and their sizes.", "Use \\((A^T)^T=A\\), \\((A+B)^T=A^T+B^T\\), \\((kA)^T=kA^T\\).", "Recognise and construct symmetric and skew-symmetric matrices.", "Prove facts about symmetric matrices from the definition.", "Split a square matrix into symmetric and skew-symmetric parts."],
  curriculum: "Matrix algebra — the transpose, symmetric and skew-symmetric matrices",
  vocab: [["Transpose", "\\((A^T)_{ij}=a_{ji}\\)"], ["Symmetric", "\\(A^T=A\\)"], ["Skew-symmetric", "\\(A^T=-A\\)"], ["Main diagonal", "\\(a_{11},\\dots,a_{nn}\\)"], ["Square", "\\(m=n\\)"]],
  hook: S`A table of distances between four cities has the distance from city \(i\) to city \(j\) in row \(i\), column \(j\). What do you notice about the table if you flip it across its diagonal?`,
  concepts: NOTES,
  summary: [
    S`\((A^T)_{ij}=a_{ji}\); \(A^T\) is \(n\times m\).`,
    S`\((A^T)^T=A\), \((A+B)^T=A^T+B^T\), \((kA)^T=kA^T\).`,
    S`Symmetric: \(A^T=A\) (square, mirrored entries).`,
    S`Skew-symmetric: \(A^T=-A\) (zero diagonal).`,
    S`\(A=\tfrac12(A+A^T)+\tfrac12(A-A^T)\), uniquely.`,
  ],
  tips: ["Write each row of A as a column of Aᵀ.", "Check the size: m × n becomes n × m.", "For symmetry compare mirror pairs aᵢⱼ and aⱼᵢ.", "Skew-symmetric matrices have zero diagonals.", "Transpose both sides to free X from Xᵀ."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

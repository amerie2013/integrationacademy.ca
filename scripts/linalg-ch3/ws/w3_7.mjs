// LINALG1 Worksheet 3.7 — Properties of Matrix Multiplication and Powers
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { rowPic, patternPic } from "./fig3.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.6) => svgT(svg, w);
const M = (m) => am(m, false);

const NOTES = [
  { h: "1. The algebra rules",
    lead: thm("properties of the product", S`Whenever the sizes allow:
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \(A(BC)=(AB)C\) \quad (associative)
\item \(A(B+C)=AB+AC\), \((B+C)A=BA+CA\) \quad (distributive)
\item \(k(AB)=(kA)B=A(kB)\)
\item \(I_mA=A=AI_n\)
\end{itemize}`) + S`\pf{Associativity: column \(j\) of \(A(BC)\) is \(A(B\vec c_j)\), and \(B\vec c_j=\sum_k c_{kj}\vec b_k\), so \(A(B\vec c_j)=\sum_k c_{kj}A\vec b_k=(AB)\vec c_j\), column \(j\) of \((AB)C\).}`,
    fig: P(rowPic([[[[1, 1], [0, 1]], { label: "A" }], [[[2, 0], [0, 3]], { label: "B" }], [[[1, 0], [1, 1]], { label: "C" }], "=", [[[5, 3], [3, 3]], { label: "either grouping" }]]), 4.8), w: 0.48,
    body: S`What does \textbf{not} hold: \(AB=BA\) (commutativity), and cancellation (\(AB=AC\not\Rightarrow B=C\)).` },
  { h: "2. Transpose of a product",
    lead: thm("reverse order", S`\((AB)^T=B^TA^T\).`) + S`\pf{Entry \((i,j)\) of \((AB)^T\) is \((AB)_{ji}=\sum_k a_{jk}b_{ki}=\sum_k (B^T)_{ik}(A^T)_{kj}=(B^TA^T)_{ij}\).}
The order reverses --- like putting on socks then shoes and taking them off in the opposite order. More factors: \((ABC)^T=C^TB^TA^T\).`,
    fig: P(rowPic([[[[4, 7], [-2, -1]], { label: "AB" }], "→ᵀ", [[[4, -2], [7, -1]], { label: "(AB)ᵀ = BᵀAᵀ" }]]), 4.2), w: 0.52 },
  { h: "3. Powers",
    lead: S`${def("power", S`For square \(A\) and integer \(k\ge1\), \(A^k=A\,A\cdots A\) (\(k\) factors), and \(A^0=I\).`)}
By associativity \(A^rA^s=A^{r+s}\) and \((A^r)^s=A^{rs}\). But \((AB)^2=ABAB\), which in general is \emph{not} \(A^2B^2\), and \((A+B)^2=A^2+AB+BA+B^2\), not \(A^2+2AB+B^2\).`,
    fig: P(rowPic([[[[0, -2], [2, 0]], { label: "C²" }], " ", [[[-4, 0], [0, -4]], { label: "C⁴ = −4I" }]]), 3.8), w: 0.56 },
  { h: "4. Special patterns under multiplication",
    lead: S`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item Diagonal: \(D^k\) is diagonal with entries \(d_i^k\); diagonal matrices commute with each other.
\item Upper triangular \(\times\) upper triangular is upper triangular.
\item Strictly upper triangular \(N\) (\(n\times n\)) is \textbf{nilpotent}: each power pushes the nonzero entries one diagonal further up, so \(N^n=0\).
\item \(A^TA\) and \(AA^T\) are always symmetric: \((A^TA)^T=A^T(A^T)^T=A^TA\).
\end{itemize}`,
    fig: P(rowPic([[[[0, 2, 1], [0, 0, 3], [0, 0, 0]], { label: "N", cells: [[0, 1, "#dbeafe"], [0, 2, "#dbeafe"], [1, 2, "#dbeafe"]] }], " ", [[[0, 0, 6], [0, 0, 0], [0, 0, 0]], { label: "N²", cells: [[0, 2, "#dcfce7"]] }], " ", [[[0, 0, 0], [0, 0, 0], [0, 0, 0]], { label: "N³ = 0" }]]), 5.2), w: 0.48 },
  { h: "5. Matrix polynomials",
    lead: S`For \(p(t)=c_0+c_1t+\dots+c_kt^k\) define \(p(A)=c_0I+c_1A+\dots+c_kA^k\). The constant term becomes \(c_0I\). Powers of the same matrix commute, so polynomial identities in one matrix work as usual: \((A+I)(A-I)=A^2-I\).`,
    fig: P(patternPic("upper", 4), 2.2), w: 0.6,
    body: S`Products of upper triangular matrices (pattern above) stay upper triangular, so \(p(A)\) is upper triangular whenever \(A\) is.` },
];

const EXAMPLES = [
  { title: "The transpose of a product", q: S`For \(A=${M([[2, 1], [0, -1]])}\), \(B=${M([[1, 3], [2, 1]])}\), verify \((AB)^T=B^TA^T\) and show \((AB)^T\ne A^TB^T\).`,
    fig: P(rowPic([[[[2, 1], [0, -1]], { label: "A" }], [[[1, 3], [2, 1]], { label: "B" }], "=", [[[4, 7], [-2, -1]], { label: "AB" }]]), 4.2),
    steps: [S`\(AB=${M([["2+2", "6+1"], ["0-2", "0-1"]])}=${M([[4, 7], [-2, -1]])}\), so \((AB)^T=${M([[4, -2], [7, -1]])}\).`, S`\(B^TA^T=${M([[1, 2], [3, 1]])}${M([[2, 0], [1, -1]])}=${M([["2+2", "0-2"], ["6+1", "0-1"]])}=${M([[4, -2], [7, -1]])}\). Equal.`, S`\(A^TB^T=${M([[2, 0], [1, -1]])}${M([[1, 2], [3, 1]])}=${M([[2, 4], [-2, 1]])}\ne(AB)^T\).`],
    ans: S`\((AB)^T=B^TA^T=${M([[4, -2], [7, -1]])}\)` },
  { title: "Powers by repeated squaring", q: S`Compute \(C^2\), \(C^4\) and \(C^8\) for \(C=${M([[1, -1], [1, 1]])}\).`,
    fig: P(rowPic([[[[1, -1], [1, 1]], { label: "C" }], "→", [[[0, -2], [2, 0]], { label: "C²" }], "→", [[[-4, 0], [0, -4]], { label: "C⁴" }]]), 4.8),
    steps: [S`\(C^2=${M([["1-1", "-1-1"], ["1+1", "-1+1"]])}=${M([[0, -2], [2, 0]])}\).`, S`\(C^4=(C^2)^2=${M([["0-4", "0"], ["0", "-4+0"]])}=-4I\).`, S`\(C^8=(C^4)^2=(-4I)^2=16I\).`],
    ans: S`\(C^2=${M([[0, -2], [2, 0]])}\), \(C^4=-4I\), \(C^8=16I\)` },
  { title: "A nilpotent matrix", q: S`Compute the powers of \(N=${M([[0, 2, 1], [0, 0, 3], [0, 0, 0]])}\) until one is zero.`,
    fig: P(rowPic([[[[0, 2, 1], [0, 0, 3], [0, 0, 0]], { label: "N" }], "→", [[[0, 0, 6], [0, 0, 0], [0, 0, 0]], { label: "N²" }], "→", [[[0, 0, 0], [0, 0, 0], [0, 0, 0]], { label: "N³" }]]), 5),
    steps: [S`\(N^2\): only row 1 \((0,2,1)\) times column 3 \((1,3,0)\) is nonzero: \(0+6+0=6\). \(N^2=${M([[0, 0, 6], [0, 0, 0], [0, 0, 0]])}\).`, S`\(N^3=N^2N\): row 1 of \(N^2\), \((0,0,6)\), times any column of \(N\) uses row 3 of \(N\), which is zero. So \(N^3=0\).`],
    ans: S`\(N^2=${M([[0, 0, 6], [0, 0, 0], [0, 0, 0]])}\), \(N^3=0\)` },
  { title: "(A + B)² is not A² + 2AB + B²", q: S`For \(D=${M([[1, 2], [0, 1]])}\), \(E=${M([[1, 0], [1, 1]])}\), compare \((D+E)^2\) with \(D^2+2DE+E^2\).`,
    fig: P(rowPic([[[[3, 2], [1, 1]], { label: "DE" }], "≠", [[[1, 2], [1, 3]], { label: "ED" }]]), 3.6),
    steps: [S`\(D+E=${M([[2, 2], [1, 2]])}\); \((D+E)^2=${M([["4+2", "4+4"], ["2+2", "2+4"]])}=${M([[6, 8], [4, 6]])}\).`, S`\(D^2=${M([[1, 4], [0, 1]])}\), \(E^2=${M([[1, 0], [2, 1]])}\), \(DE=${M([[3, 2], [1, 1]])}\), \(ED=${M([[1, 2], [1, 3]])}\).`, S`\(D^2+2DE+E^2=${M([[1 + 6 + 1, 4 + 4 + 0], [0 + 2 + 2, 1 + 2 + 1]])}=${M([[8, 8], [4, 4]])}\ne(D+E)^2\).`, S`The correct expansion \(D^2+DE+ED+E^2=${M([[1 + 3 + 1 + 1, 4 + 2 + 2 + 0], [0 + 1 + 1 + 2, 1 + 1 + 3 + 1]])}=${M([[6, 8], [4, 6]])}\) matches.`],
    ans: S`\((D+E)^2=${M([[6, 8], [4, 6]])}\ne${M([[8, 8], [4, 4]])}\)` },
  { title: "AᵀA is symmetric", q: S`Compute \(A^TA\) for \(A=${M([[1, 2], [0, 1], [2, -1]])}\).`,
    fig: P(rowPic([[[[1, 0, 2], [2, 1, -1]], { label: "Aᵀ" }], [[[1, 2], [0, 1], [2, -1]], { label: "A" }], "=", [[[5, 0], [0, 6]], { label: "AᵀA" }]]), 4.6),
    steps: [S`\((A^TA)_{ij}\) = column \(i\) of \(A\) \(\cdot\) column \(j\) of \(A\). Columns: \(\vec a_1=(1,0,2)\), \(\vec a_2=(2,1,-1)\).`, S`\(\vec a_1\cdot\vec a_1=5\), \(\vec a_1\cdot\vec a_2=2+0-2=0\), \(\vec a_2\cdot\vec a_2=4+1+1=6\).`, S`\(A^TA=${M([[5, 0], [0, 6]])}\): symmetric, as the theorem promises (here even diagonal, because the columns are orthogonal).`],
    ans: S`\(A^TA=${M([[5, 0], [0, 6]])}\)` },
  { title: "Powers of a diagonal matrix", q: S`Find \(D^{5}\) and \(p(D)\) for \(D=${M([[2, 0, 0], [0, -1, 0], [0, 0, 3]])}\), \(p(t)=t^2-t-6\).`,
    fig: P(patternPic("diag", 3), 1.8),
    steps: [S`Diagonal powers act entrywise: \(D^5=\operatorname{diag}(32,-1,243)\).`, S`\(p(D)=\operatorname{diag}(p(2),p(-1),p(3))=\operatorname{diag}(4-2-6,\ 1+1-6,\ 9-3-6)=\operatorname{diag}(-4,-4,0)\).`],
    ans: S`\(D^5=\operatorname{diag}(32,-1,243)\); \(p(D)=\operatorname{diag}(-4,-4,0)\)` },
  { title: "A matrix polynomial", q: S`For \(S=${M([[2, 2], [1, 2]])}\), compute \(S^2-4S+2I\).`,
    fig: P(rowPic([[[[6, 8], [4, 6]], { label: "S²" }], "−4", [[[2, 2], [1, 2]], { label: "S" }], "+2", [[[1, 0], [0, 1]], { label: "I" }]]), 4.6),
    steps: [S`\(S^2=${M([["4+2", "4+4"], ["2+2", "2+4"]])}=${M([[6, 8], [4, 6]])}\).`, S`\(S^2-4S+2I=${M([["6-8+2", "8-8+0"], ["4-4+0", "6-8+2"]])}=${M([[0, 0], [0, 0]])}\).`, S`So \(S\) satisfies \(t^2-4t+2=0\) --- the constant term \(2\) became \(2I\).`],
    ans: S`\(S^2-4S+2I=0\)` },
  { title: "Proving symmetry with the rules", q: S`Prove: if \(A\) and \(B\) are symmetric and commute, then \(AB\) is symmetric.`,
    steps: [S`\((AB)^T=B^TA^T\) (reverse-order rule).`, S`\(=BA\), since \(A^T=A\), \(B^T=B\).`, S`\(=AB\), since they commute. So \((AB)^T=AB\).`],
    ans: S`\((AB)^T=B^TA^T=BA=AB\)` },
  { title: "Associativity saves work", q: S`For \(\vec u=(1,2)\), \(\vec v=(3,-1)\) and \(A=${M([[1, 4], [2, 0]])}\), compute \((\vec u\vec v^T)A\) both ways.`,
    fig: P(rowPic([[[[1], [2]], { label: "u" }], "(", [[[3, -1]], { label: "vᵀ" }], [[[1, 4], [2, 0]], { label: "A" }], ")"]), 3.8),
    steps: [S`Way 1: \(\vec u\vec v^T=${M([[3, -1], [6, -2]])}\), then \(${M([[3, -1], [6, -2]])}${M([[1, 4], [2, 0]])}=${M([["3-2", "12"], ["6-4", "24"]])}=${M([[1, 12], [2, 24]])}\).`, S`Way 2: \(\vec v^TA=(3,-1)A=(3-2,\ 12-0)=(1,12)\), then \(\vec u(1,12)=${M([[1, 12], [2, 24]])}\).`, S`Same answer (associativity), but way 2 multiplies far fewer numbers.`],
    ans: S`\(${M([[1, 12], [2, 24]])}\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Simplify \(A(B+C)-AB\).`, ans: S`\(AC\)` },
  { level: 1, q: S`Write \((ABC)^T\) in terms of the transposes.`, ans: S`\(C^TB^TA^T\)` },
  { level: 1, q: S`Compute \(A^2\) and \(A^3\) for \(A=${M([[1, 1], [0, 1]])}\).`, ans: S`\(${M([[1, 2], [0, 1]])}\), \(${M([[1, 3], [0, 1]])}\)` },
  { level: 2, q: S`Compute \(A^TA\) and \(AA^T\) for \(A=${M([[1, 0, -1], [2, 1, 0]])}\).`, ans: S`\(A^TA=${M([[5, 2, -1], [2, 1, 0], [-1, 0, 1]])}\), \(AA^T=${M([[2, 2], [2, 5]])}\)`, fig: P(rowPic([[[[1, 0, -1], [2, 1, 0]], { label: "A" }]]), 2.2) },
  { level: 2, q: S`Find \(N^2\) and \(N^3\) for \(N=${M([[0, 1, 2], [0, 0, -1], [0, 0, 0]])}\).`, ans: S`\(N^2=${M([[0, 0, -1], [0, 0, 0], [0, 0, 0]])}\), \(N^3=0\)`, fig: P(patternPic("upper", 3), 1.8) },
  { level: 2, q: S`For \(A=${M([[1, 2], [3, 4]])}\), compute \(A^2-5A-2I\).`, ans: S`\(0\)` },
  { level: 2, q: S`Compute \(D^{10}\) for \(D=\operatorname{diag}(1,-1,2)\).`, ans: S`\(\operatorname{diag}(1,1,1024)\)` },
  { level: 2, q: S`Expand \((A-B)^2\) correctly. When does it equal \(A^2-2AB+B^2\)?`, ans: S`\(A^2-AB-BA+B^2\); when \(AB=BA\)`, fig: P(rowPic([[[["*", "*"], ["*", "*"]], { label: "A − B" }], [[["*", "*"], ["*", "*"]], { label: "A − B" }]]), 2.8) },
  { level: 3, space: 5, q: S`Prove that \(AA^T\) is symmetric for every \(A\).`, ans: S`\((AA^T)^T=(A^T)^TA^T=AA^T\)` },
  { level: 3, space: 5, q: S`Find \(R^2\), \(R^3\), \(R^4\) for \(R=${M([[0, -1], [1, 0]])}\) and deduce \(R^{2026}\).`, ans: S`\(-I\), \(-R\), \(I\); \(R^{2026}=R^2=-I\)`, fig: P(rowPic([[[[0, -1], [1, 0]], { label: "R" }]]), 1.6) },
  { level: 3, space: 5, q: S`Prove: if \(A^2=A\), then \((I-A)^2=I-A\).`, ans: S`\(I-2A+A^2=I-2A+A=I-A\)` },
  { level: 3, space: 5, q: S`Prove: if \(N^3=0\), then \((I-N)(I+N+N^2)=I\).`, ans: S`\(I+N+N^2-N-N^2-N^3=I-N^3=I\)` },
  { level: 3, space: 5, q: S`Show that if \(A\) is symmetric, then so is \(A^k\) for every \(k\ge1\).`, ans: S`\((A^k)^T=(A^T)^k=A^k\), by the reverse-order rule with equal factors` },
];

export const WS = {
  code: "3.7",
  title: "Properties of Matrix Multiplication and Powers",
  bigideas: S`Matrix multiplication is associative and distributive and has the identity as a unit, so most algebra carries over --- except commutativity and cancellation. Transposing a product reverses its order, \((AB)^T=B^TA^T\). Powers \(A^k\) of a square matrix obey the usual exponent laws; binomial expansions must keep \(AB\) and \(BA\) separate. Diagonal powers act entrywise, strictly triangular matrices are nilpotent and \(A^TA\) is always symmetric.`,
  goals: ["State and use associativity and distributivity.", "Transpose a product with the reverse-order rule.", "Compute powers and matrix polynomials.", "Expand products of sums without assuming commutativity.", "Recognise nilpotent, diagonal and \\(A^TA\\) patterns."],
  curriculum: "Matrix algebra — properties of the product, powers",
  vocab: [["Associative", "\\(A(BC)=(AB)C\\)"], ["Reverse order", "\\((AB)^T=B^TA^T\\)"], ["Power", "\\(A^k\\), \\(A^0=I\\)"], ["Nilpotent", "\\(N^k=0\\) for some \\(k\\)"], ["Matrix polynomial", "\\(p(A)=c_0I+c_1A+\\cdots\\)"]],
  hook: S`For numbers, \((a+b)^2=a^2+2ab+b^2\). Try it with two \(2\times2\) matrices of your choice. Which step of the usual proof uses something matrices do not have?`,
  concepts: NOTES,
  summary: [
    S`\(A(BC)=(AB)C\), \(A(B+C)=AB+AC\), \(IA=AI=A\).`,
    S`\((AB)^T=B^TA^T\).`,
    S`\(A^rA^s=A^{r+s}\), \(A^0=I\); \((A+B)^2=A^2+AB+BA+B^2\).`,
    S`Diagonal powers are entrywise; strictly triangular \(N\) has \(N^n=0\).`,
    S`\(A^TA\) and \(AA^T\) are symmetric.`,
  ],
  tips: ["Keep AB and BA as different terms.", "Reverse the order when you transpose a product.", "Square repeatedly for high powers.", "A constant c in a polynomial becomes cI.", "Look for a pattern in the first few powers."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
